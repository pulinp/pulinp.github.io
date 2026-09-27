// Animated Human/Machine/Chat mode transitions — an "encrypt/decrypt" crossfade
// layered on top of mode-switch.js's instant setMode(). Built on Motion
// (motion.dev), the same framework-free engine behind Framer Motion, loaded
// from the same pinned CDN version already used for the hero micro-interactions
// in index-new.html. Purely additive: mode-switch.js only calls
// window.animateModeSwitch if it exists, so a failed/blocked CDN import, or
// prefers-reduced-motion, both fall back to the plain instant swap untouched.
(function(){
  if (!document.querySelector('.island-mode')) return;

  var MOTION_CDN = 'https://cdn.jsdelivr.net/npm/motion@13.4.1/+esm';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var busy = false;

  function loadMotion(){
    return import(MOTION_CDN).catch(function(){ return null; });
  }
  // Warm the import now (idle time before the first click) instead of paying
  // the CDN round-trip on the visitor's first mode switch.
  var motionPromise = reduceMotion ? null : loadMotion();

  var GLYPHS = '01#$%&*<>{}[]/\\+=~^';
  var overlay, bands;

  function buildOverlay(){
    if (overlay) return overlay;
    overlay = document.createElement('div');
    overlay.className = 'mode-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    bands = [];
    for (var i = 0; i < 5; i++){
      var band = document.createElement('div');
      band.className = 'mt-band';
      overlay.appendChild(band);
      bands.push(band);
    }
    var noise = document.createElement('div');
    noise.className = 'mt-noise';
    overlay.appendChild(noise);
    document.body.appendChild(overlay);
    return overlay;
  }

  function viewElFor(mode){
    return document.getElementById(mode === 'site' ? 'siteView' : mode === 'machine' ? 'machineView' : 'chatView');
  }

  // Scrambles whatever text is currently in the viewport inside `el` — capped
  // at a fixed character budget so cost never scales with how much content el
  // holds (machine mode can be a whole-site markdown dump). Restores the exact
  // original text at the end and hides the element from assistive tech for the
  // brief window where its text reads as gibberish.
  function scrambleText(el, ms){
    if (!el) return;
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        if (!node.nodeValue.trim() || !node.parentElement) return NodeFilter.FILTER_REJECT;
        var r = node.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight || r.width === 0) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], originals = [], budget = 400, n;
    while (budget > 0 && (n = walker.nextNode())){
      nodes.push(n);
      originals.push(n.nodeValue);
      budget -= n.nodeValue.length;
    }
    if (!nodes.length) return;

    var prevAriaHidden = el.getAttribute('aria-hidden');
    el.setAttribute('aria-hidden', 'true');
    var start = performance.now();

    function restore(){
      nodes.forEach(function(node, i){ node.nodeValue = originals[i]; });
      if (prevAriaHidden === null) el.removeAttribute('aria-hidden');
      else el.setAttribute('aria-hidden', prevAriaHidden);
    }

    function frame(t){
      var p = Math.min(1, (t - start) / ms);
      nodes.forEach(function(node, i){
        var orig = originals[i];
        var reveal = Math.floor(orig.length * p);
        var out = '';
        for (var c = 0; c < orig.length; c++){
          out += (c < reveal || orig[c] === ' ' || orig[c] === '\n')
            ? orig[c]
            : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
        node.nodeValue = out;
      });
      if (p < 1) requestAnimationFrame(frame);
      else restore();
    }
    requestAnimationFrame(frame);
  }

  window.animateModeSwitch = function(mode){
    if (busy || reduceMotion){ window.setMode(mode); return; }
    busy = true;
    var outgoing = viewElFor(document.body.getAttribute('data-mode') || 'site');
    var btns = document.querySelectorAll('.island-mode');
    btns.forEach(function(b){ b.disabled = true; });

    (motionPromise || loadMotion()).then(function(Motion){
      if (!Motion){
        window.setMode(mode);
        busy = false;
        btns.forEach(function(b){ b.disabled = false; });
        return;
      }
      var animate = Motion.animate, stagger = Motion.stagger;
      var ov = buildOverlay();
      ov.classList.add('active');

      var OUT_MS = 220, IN_MS = 300;

      if (outgoing){
        animate(outgoing, { opacity: [1, 0.15], filter: ['blur(0px)', 'blur(6px)'] }, { duration: OUT_MS / 1000, ease: 'easeIn' });
        scrambleText(outgoing, OUT_MS - 40);
      }
      animate(bands, { y: ['-100%', '0%'] }, { duration: OUT_MS / 1000, delay: stagger(0.02), ease: 'easeIn' });
      animate(ov.querySelector('.mt-noise'), { opacity: [0, 1] }, { duration: OUT_MS / 1000 });

      setTimeout(function(){
        window.setMode(mode);
        var incoming = viewElFor(mode);
        if (incoming){
          animate(incoming, { opacity: [0.15, 1], filter: ['blur(6px)', 'blur(0px)'] }, { duration: IN_MS / 1000, ease: 'easeOut' });
          scrambleText(incoming, IN_MS - 40);
        }
        animate(bands, { y: ['0%', '100%'] }, { duration: IN_MS / 1000, delay: stagger(0.02), ease: 'easeOut' });
        animate(ov.querySelector('.mt-noise'), { opacity: [1, 0] }, { duration: IN_MS / 1000 });

        setTimeout(function(){
          ov.classList.remove('active');
          busy = false;
          btns.forEach(function(b){ b.disabled = false; });
        }, IN_MS);
      }, OUT_MS);
    });
  };
})();
