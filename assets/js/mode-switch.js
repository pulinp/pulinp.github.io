// Human / Machine / Chat mode switcher, shared by every page that has the floating
// island pill switcher (index-new.html and work/post.html). Switching modes never
// re-fetches or re-derives content, and never navigates — it only toggles which of
// #siteView / #machineView / #chatView is visible on the current page. Each page is
// responsible for populating all three with the same underlying content before this
// runs; this file only owns the toggle.
(function(){
  var modeButtons = document.querySelectorAll('.island-mode');
  var siteView = document.getElementById('siteView');
  var machineView = document.getElementById('machineView');
  var chatViewEl = document.getElementById('chatView');
  var primaryNav = document.getElementById('primaryNav');
  var headerEl = document.querySelector('header.top');

  // Chat is a fixed-height, single-screen layout (.chat-view sizes itself to
  // 100dvh minus the header via --chat-header-h, see .chat-view in modes.css).
  // The header's real height varies by page (index-new.html vs work/post.html)
  // and by viewport (it can wrap to extra lines on narrow screens), so it's
  // measured at runtime instead of hardcoded — a fixed guess would either
  // leave a gap or, worse, make the page scroll by exactly the difference.
  function syncHeaderHeight(){
    if (!headerEl) return;
    var h = headerEl.getBoundingClientRect().height;
    if (h > 0) document.documentElement.style.setProperty('--chat-header-h', h + 'px');
  }

  function setMode(mode){
    modeButtons.forEach(function(b){
      var on = b.dataset.view === mode;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.body.setAttribute('data-mode', mode);
    if (siteView) siteView.hidden = mode !== 'site';
    if (machineView) machineView.hidden = mode !== 'machine';
    if (chatViewEl) chatViewEl.hidden = mode !== 'chat';
    if (primaryNav) primaryNav.classList.remove('open');
    if (mode === 'chat'){
      syncHeaderHeight();
      var ci = document.getElementById('chatInput');
      if (ci) ci.focus();
    }
    // Lets other scripts (e.g. the docked nav-avatar animation) re-sync anything
    // that's positioned off a live getBoundingClientRect() — the header itself
    // doesn't move between modes, but a stale position from before the switch
    // can otherwise linger uncorrected since nothing else triggers a resize.
    document.dispatchEvent(new CustomEvent('viewmodechange', { detail: { mode: mode } }));
  }
  modeButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = btn.dataset.view;
      if (target === document.body.getAttribute('data-mode')) return;
      // mode-transition.js (if loaded) hooks in here to run the animated
      // crossfade and call setMode itself partway through; otherwise this
      // falls back to the plain instant swap below, unchanged.
      if (window.animateModeSwitch) window.animateModeSwitch(target);
      else setMode(target);
    });
  });
  setMode('site');
  syncHeaderHeight();
  window.addEventListener('resize', syncHeaderHeight);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeaderHeight);

  window.setMode = setMode;
})();
