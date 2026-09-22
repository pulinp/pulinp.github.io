// Human / Machine / Chat mode switcher, shared by every page that has the bottom-bar
// pill switcher. Switching modes never re-fetches or re-derives content — it only
// toggles which of #siteView / #machineView / #chatView is visible. Each page is
// responsible for populating all three with the same underlying content before this
// runs; this file only owns the toggle.
(function(){
  var modeButtons = document.querySelectorAll('.island-mode, .bb-mode');
  var siteView = document.getElementById('siteView');
  var machineView = document.getElementById('machineView');
  var chatViewEl = document.getElementById('chatView');
  var primaryNav = document.getElementById('primaryNav');

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
      var ci = document.getElementById('chatInput');
      if (ci) ci.focus();
    }
  }
  modeButtons.forEach(function(btn){
    btn.addEventListener('click', function(){ setMode(btn.dataset.view); });
  });
  setMode('site');

  window.setMode = setMode;
})();
