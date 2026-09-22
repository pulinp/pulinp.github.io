// The "Ask" chat, shared by every page. Grounded in the same site-wide KB regardless of
// which page it's opened from, so a visitor reading one archive post can still ask about
// anything else on the site. Depends on window.KB/kbById/RULES/sectionForEntry (kb.js)
// and window.setMode (mode-switch.js), both of which must load before this file.
(function(){
  var chatThread = document.getElementById('chatThread');
  var chatEmpty = document.getElementById('chatEmpty');
  var chatForm = document.getElementById('chatForm');
  var chatInput = document.getElementById('chatInput');
  var chatSend = document.getElementById('chatSend');
  var chatNote = document.getElementById('chatNote');
  var chatSidebar = document.getElementById('chatSidebar');
  var chatMenuBtn = document.getElementById('chatMenuBtn');
  var chatNewBtn = document.getElementById('chatNewBtn');
  if (!chatThread || !chatForm) return; // this page has no chat view — nothing to wire up

  var turns = [{ role:'user', content: window.RULES }];
  var chatDisabled = false;
  var sample = null;

  // Home is always one level up from any page that isn't the homepage itself — every
  // page that includes this widget other than index-new.html lives at work/<file>.html.
  var HOME_HREF = '../index-new.html';

  function flashSection(target){
    var t = document.querySelector(target);
    if (t){
      if (window.setMode) window.setMode('site');
      setTimeout(function(){
        t.scrollIntoView({ behavior:'smooth', block:'start' });
        t.classList.add('flash');
        setTimeout(function(){ t.classList.remove('flash'); }, 1600);
      }, 30);
    } else {
      window.location.href = HOME_HREF + target;
    }
  }

  function addMessage(role, text){
    chatEmpty.hidden = true;
    var row = document.createElement('div');
    row.className = 'msg-row ' + role;
    var div = document.createElement('div');
    div.className = 'msg ' + role;
    div.textContent = text;
    row.appendChild(div);
    chatThread.appendChild(row);
    chatThread.scrollTop = chatThread.scrollHeight;
    return div;
  }

  function addCardRefs(ids, afterEl){
    if (!ids.length) return;
    var refs = document.createElement('div');
    refs.className = 'msg-refs';
    ids.forEach(function(id){
      var e = window.kbById[id]; if (!e) return;
      var chip = document.createElement('button');
      chip.type = 'button'; chip.className = 'ref-chip';
      chip.textContent = e.tag || e.title;
      chip.addEventListener('click', function(){ flashSection(window.sectionForEntry(e)); });
      refs.appendChild(chip);
    });
    afterEl.insertAdjacentElement('afterend', refs);
    chatThread.scrollTop = chatThread.scrollHeight;
  }

  function resetChat(){
    turns = [{ role:'user', content: window.RULES }];
    Array.prototype.slice.call(chatThread.children).forEach(function(child){
      if (child.id !== 'chatEmpty') child.remove();
    });
    chatEmpty.hidden = false;
    chatInput.value = '';
    setNote('');
    if (chatSidebar) chatSidebar.classList.remove('open');
  }
  if (chatNewBtn) chatNewBtn.addEventListener('click', resetChat);
  if (chatMenuBtn) chatMenuBtn.addEventListener('click', function(){ chatSidebar.classList.toggle('open'); });
  document.querySelectorAll('.cs-item[data-target]').forEach(function(btn){
    btn.addEventListener('click', function(){ flashSection(btn.dataset.target); });
  });

  function setNote(text){ chatNote.textContent = text || ''; }

  function ask(question){
    if (!sample || chatDisabled || !question) return;
    chatInput.value = '';
    chatSend.disabled = true; chatInput.disabled = true;
    addMessage('user', question);
    turns.push({ role:'user', content: question });
    var thinking = addMessage('assistant', 'Thinking…');
    thinking.classList.add('thinking');
    setNote('');
    sample.json(turns, { modelTier:'quick', cache:false }).then(function(data){
      thinking.classList.remove('thinking');
      thinking.textContent = (data && data.answer) ? data.answer : 'Not sure how to answer that from what’s on this page.';
      turns.push({ role:'assistant', content: (data && data.answer) || '' });
      if (turns.length > 13) turns = [turns[0]].concat(turns.slice(-10));
      var ids = (data && Array.isArray(data.cardIds)) ? data.cardIds.filter(function(id){ return window.kbById[id]; }).slice(0,3) : [];
      addCardRefs(ids, thinking);
    }).catch(function(err){
      thinking.classList.remove('thinking');
      var code = err && err.code;
      if (['not_granted','sampling_disabled','not_declared','capability_disabled','capability_removed'].indexOf(code) !== -1){
        thinking.textContent = 'Chat isn’t available in this context — use the Human tab to browse everything directly.';
        chatDisabled = true;
      } else if (code === 'rate_limited'){
        thinking.textContent = 'Too many questions at once — give it a moment and try again.';
      } else if (code === 'invalid_json' || code === 'empty_completion'){
        thinking.textContent = 'Didn’t get a clean answer there — try rephrasing?';
      } else {
        thinking.textContent = (err && err.text) ? err.text : 'Something went wrong answering that — try again.';
      }
    }).finally(function(){
      chatSend.disabled = false; chatInput.disabled = false;
    });
  }

  chatForm.addEventListener('submit', function(ev){
    ev.preventDefault();
    ask(chatInput.value.trim());
  });
  document.querySelectorAll('.suggest-chip').forEach(function(btn){
    btn.addEventListener('click', function(){ ask(btn.textContent); });
  });

  if (window.claude && typeof window.claude.use === 'function'){
    window.claude.use('sample').then(function(s){
      sample = s;
      if (!sample){
        setNote('Chat needs to run inside a Claude viewer to talk to Claude — use the Human tab to browse everything directly.');
        chatInput.disabled = true; chatSend.disabled = true;
        document.querySelectorAll('.suggest-chip').forEach(function(b){ b.disabled = true; });
      }
    }).catch(function(){
      setNote('Chat isn’t available here — use the Human tab to browse everything directly.');
      chatInput.disabled = true; chatSend.disabled = true;
    });
  } else {
    setNote('Chat needs to run inside a Claude viewer to talk to Claude — use the Human tab to browse everything directly.');
    chatInput.disabled = true; chatSend.disabled = true;
  }

  window.ask = ask;
  window.flashSection = flashSection;
})();

// Suggestion chips in empty state
document.addEventListener('click', function(e){
  var btn = e.target.closest && e.target.closest('.chat-suggestions button[data-q]');
  if (!btn) return;
  var input = document.getElementById('chatInput');
  if (input){ input.value = btn.getAttribute('data-q'); input.focus(); }
  if (typeof window.sendChat === 'function') window.sendChat();
  else {
    var form = document.getElementById('chatForm');
    if (form) form.dispatchEvent(new Event('submit', { cancelable:true, bubbles:true }));
  }
});
