/* =====================================================================
   Live: the Realtime Database connection, shared by parties and presence.
   Presence: while you're signed in, online/{uid} says you're here and what
   you're studying; the server removes it the moment you leave. Turn it off
   in Settings ("Show when I'm online").
   ===================================================================== */
const Live = (() => {
  let D = null, db = null, ready = null, timer = 0, lastSent = "", armed = false;

  function init(){
    if (ready) return ready;
    ready = (async () => {
      await LB.init();
      if (!LB.user || !LB.name) throw new Error("signin");
      D = await import(LB.base + "firebase-database.js");
      db = D.getDatabase(LB.app);
    })();
    ready.catch(() => { ready = null; });
    return ready;
  }
  const R = path => D.ref(db, path);

  // a short description of what you're doing right now
  function doing(){
    const vis = id => { const e = $(id); return e && !e.classList.contains("hidden"); };
    const subj = Study.subject(), name = subj ? (subj.short || subj.name) : "";
    if (vis("mquiz") && typeof M !== "undefined" && M && !M.over){
      if (M.party) return `${name} · in a party round`;
      return `${name} · ${MMODES[M.mode].name} · question ${Math.min(M.idx + 1, M.queue.length)} of ${M.mode === "drill" ? "∞" : M.queue.length}`;
    }
    if (vis("quiz") && typeof S !== "undefined" && S && S.queue) return `${name} · ${fill(MODES[S.mode].name)} · word ${Math.min(S.idx + 1, S.queue.length)} of ${S.queue.length}`;
    if (vis("party")) return "In a party lobby";
    if (vis("write")) return `${name} · writing practice`;
    if (vis("end") || vis("mend")) return `${name} · just finished a round`;
    if (vis("board")) return "Looking at the leaderboard";
    if (vis("settings") || vis("issues") || vis("admin")) return "In settings";
    return name ? `${name} · picking what to study` : "Browsing";
  }
  function allowed(){ return LB.cfg() && ST.lbUser && ST.settings.online !== false; }

  async function beat(){
    if (!allowed()) return;
    try {
      await init();
      const me = LB.user.uid, d = {name: LB.name, doing: doing(), subj: Study.subject() ? Study.subject().id : "", at: D.serverTimestamp()};
      const sig = d.doing + "|" + d.subj; if (sig === lastSent && armed) return;
      if (!armed){ await D.onDisconnect(R("online/" + me)).remove(); armed = true; }
      await D.set(R("online/" + me), d); lastSent = sig;
    } catch(e){}
  }
  // call whenever the screen changes; sends at most every couple of seconds
  function update(){ if (!allowed()) return; clearTimeout(timer); timer = setTimeout(beat, 1200); }
  async function hide(){
    lastSent = ""; armed = false;
    try { if (D && LB.user){ D.onDisconnect(R("online/" + LB.user.uid)).cancel(); await D.remove(R("online/" + LB.user.uid)); } } catch(e){}
  }
  // everyone online right now: cb([{uid, name, doing, subj, at}])
  function watch(cb, onErr){
    let off = null, stopped = false;
    init().then(() => { if (stopped) return; off = D.onValue(R("online"), s => cb(Object.entries(s.val() || {}).map(([uid, v]) => Object.assign({uid}, v)).sort((a, b) => (b.at || 0) - (a.at || 0))), e => onErr && onErr(e)); })
      .catch(e => onErr && onErr(e));
    return () => { stopped = true; if (off) off(); };
  }
  // keep it fresh while you study (question numbers change without a screen change)
  setInterval(() => { if (allowed() && !document.hidden) beat(); }, 30000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) update(); });
  if (LB.cfg() && ST.lbUser) window.addEventListener("load", () => setTimeout(update, 2000));

  return {init, update, hide, watch, doing, get D(){ return D; }, get db(){ return db; }};
})();
