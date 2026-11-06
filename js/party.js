/* =====================================================================
   Parties: signed-in members study the same questions together, live.
   The party answers as a team: whoever checks answers for everyone, and
   everyone sees what teammates type, their pointers and their drawings.
   The host moves the group on.

   Uses Firebase Realtime Database (fast, and free for this kind of traffic).
   Who can change what is set by database.rules.json.
   Party rounds never count toward the leaderboard.
   ===================================================================== */
const Party = (() => {
  const COLORS = ["#4FD1C5", "#F6AD55", "#68D391", "#FC8181", "#63B3ED", "#F6E05E", "#F687B3", "#A3BFFA"];
  const MAX = 8, KEEP = "sq-party", COUNTS = [5, 10, 15, 20], OLD = 12 * 3600e3;
  let D = null, db = null, ready = null;
  let pid = null, P = null, offs = [], view = "find", offList = null, list = null, note = "", lobbySig = "", wasDown = false, myColor = null;
  let team = null, sketches = null, sketchAt = null;
  const qk = () => (M && M.party ? M.party.n : 0) + "-" + (M ? M.idx : 0);       // this round + question

  const uid = () => LB.user && LB.user.uid;
  const esc = s => escHTML(String(s == null ? "" : s));
  const R = path => D.ref(db, path);
  const PP = (...k) => R(["parties", pid].concat(k).join("/"));
  const subjects = () => Study.subjects().filter(s => s.type === "problems");
  const subjOf = id => subjects().find(s => s.id === id);
  const people = (p = P) => Object.entries((p && p.members) || {}).map(([id, m]) => Object.assign({id}, m)).sort((a, b) => (a.joined || 0) - (b.joined || 0) || (a.id < b.id ? -1 : 1));
  const amHost = () => !!P && P.host === uid();
  const inRound = () => !!(M && M.party && !M.over && pid && M.party.id === pid);
  const visible = id => !$(id).classList.contains("hidden");

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

  /* ---------- the card on the Settings page ---------- */
  function paintCard(){
    const card = $("partyCard"), box = $("partyBox");
    card.classList.toggle("hidden", !LB.cfg());
    if (!LB.cfg()) return;
    if (!ST.lbUser){
      box.innerHTML = `<p class="small">Sign in to study with friends: everyone gets the same questions and sees each other's pointer.</p><button id="pySign">${ic("user")}<span>Sign in</span></button>`;
      $("pySign").onclick = renderBoard; return;
    }
    if (pid && P){
      box.innerHTML = `<p class="small">You're in <b>${esc(P.name)}</b> · ${people().length} ${people().length === 1 ? "person" : "people"}</p>
        <div class="row"><button class="grow primary" id="pyOpen">${ic("users")}<span>Open party</span></button><button class="grow" id="pyLeave">${ic("logout")}<span>Leave</span></button></div>`;
      $("pyOpen").onclick = () => openLobby(); $("pyLeave").onclick = () => leave(true); return;
    }
    box.innerHTML = `<div class="row"><button class="grow primary" id="pyNew">${ic("users")}<span>Create party</span></button><button class="grow" id="pyFind">${ic("join")}<span>Find party</span></button></div>`;
    $("pyNew").onclick = create; $("pyFind").onclick = openFind;
  }

  /* ---------- making, finding, joining, leaving ---------- */
  function busy(msg){ $("pyBody").innerHTML = `<div class="card"><div class="small">${esc(msg)}</div></div>`; show("party"); }
  function failed(e){
    const m = e && e.message === "signin" ? "Sign in first." : e && e.message === "notset" ? "Parties aren't set up yet." : "Couldn't reach the party server. Check your connection.";
    $("pyBody").innerHTML = `<div class="card"><p>${esc(m)}</p></div>`; show("party");
  }

  async function create(){
    busy("Making your party…");
    try {
      await init();
      if (pid) await leave(false);
      const ref = D.push(R("parties")), cur = Study.subject(), subj = cur.type === "problems" ? cur : subjects()[0];
      myColor = COLORS[0];
      await D.set(ref, {name: LB.name + "'s party", host: uid(), hostName: LB.name, created: D.serverTimestamp(), status: "lobby", rounds: 0,
        set: {subj: subj.id, sec: ST.sel[subj.id] || subj.defaultSection || "", count: 10},
        members: {[uid()]: {name: LB.name, color: myColor, joined: D.serverTimestamp()}}});
      await enter(ref.key);
    } catch(e){ failed(e); }
  }

  async function join(id){
    busy("Joining…");
    try {
      await init();
      if (pid && pid !== id) await leave(false);
      const p = (await D.get(R("parties/" + id))).val();
      if (!p || !p.host || !p.members){ note = "That party has ended."; return openFind(); }
      const ms = people(p), mine = (p.members || {})[uid()];
      if (!mine){
        if (ms.length >= MAX){ note = "That party is full."; return openFind(); }
        const used = new Set(ms.map(m => m.color));
        myColor = COLORS.find(c => !used.has(c)) || COLORS[ms.length % COLORS.length];
        await D.set(R(`parties/${id}/members/${uid()}`), {name: LB.name, color: myColor, joined: D.serverTimestamp()});
      } else myColor = mine.color;
      await enter(id);
    } catch(e){ failed(e); }
  }

  // start listening to a party we're a member of
  async function enter(id){
    stop();
    pid = id; note = ""; lobbySig = ""; view = "lobby"; wasDown = false;
    try { sessionStorage.setItem(KEEP, id); } catch(e){}
    const me = uid();
    // if the connection drops (tab closed, phone asleep), take us out of the party
    await D.onDisconnect(R(`parties/${id}/members/${me}`)).remove();
    await D.onDisconnect(R(`cursors/${id}/${me}`)).remove();
    await D.onDisconnect(R(`sketch/${id}/${me}`)).remove();
    offs.push(D.onValue(R("parties/" + id), s => onParty(id, s.val())));
    offs.push(D.onValue(R("cursors/" + id), s => { if (pid === id) Cursors.update(s.val() || {}); }));
    offs.push(D.onValue(R("team/" + id), s => { if (pid !== id) return; team = s.val() || {}; applyTeam(); }));
    offs.push(D.onValue(R("sketch/" + id), s => { if (pid !== id) return; sketches = s.val() || {}; applySketch(); }));
    Tools.hook = sketchHook;
    offs.push(D.onValue(R(".info/connected"), s => {
      if (s.val() === false){ wasDown = true; return; }
      if (s.val() === true && wasDown && pid === id){
        wasDown = false;
        // back online: put ourselves back (the server removed us when we dropped)
        D.onDisconnect(R(`parties/${id}/members/${me}`)).remove();
        D.onDisconnect(R(`cursors/${id}/${me}`)).remove();
        D.get(R(`parties/${id}/host`)).then(h => { if (h.exists()) D.set(R(`parties/${id}/members/${me}`), {name: LB.name, color: myColor || COLORS[0], joined: D.serverTimestamp()}).catch(() => {}); });
      }
    }));
  }

  function stop(){
    offs.forEach(f => { try { f(); } catch(e){} }); offs = [];
    Cursors.clear(); team = null; sketches = null; sketchAt = null;
    Tools.hook = null; Tools.clearOthers();
  }

  async function leave(toSettings){
    const id = pid, p = P, me = uid();
    stop(); pid = null; P = null; lobbySig = "";
    try { sessionStorage.removeItem(KEEP); } catch(e){}
    if (M && M.party){ M.over = true; }
    if (id && D){
      try {
        D.onDisconnect(R(`parties/${id}/members/${me}`)).cancel();
        D.onDisconnect(R(`cursors/${id}/${me}`)).cancel();
        D.onDisconnect(R(`sketch/${id}/${me}`)).cancel();
        await D.remove(R(`sketch/${id}/${me}`)).catch(() => {});
        const rest = people(p).filter(m => m.id !== me);
        if (p && p.host === me && rest.length) await D.update(R("parties/" + id), {host: rest[0].id, hostName: rest[0].name, ["members/" + me]: null});
        else await D.remove(R(`parties/${id}/members/${me}`));
        await D.remove(R(`cursors/${id}/${me}`));
        if (!rest.length){ await D.remove(R("parties/" + id)); await D.remove(R("team/" + id)).catch(() => {}); }
      } catch(e){}
    }
    if (toSettings !== false) renderSettings();
  }

  /* ---------- live updates ---------- */
  function onParty(id, p){
    if (id !== pid) return;
    const me = uid();
    if (!p || !p.host || !(p.members || {})[me]){
      // the party ended, or we were dropped while offline
      if (p && p.host && wasDown) return;          // we'll be put back when the connection returns
      const wasIn = inRound() || visible("party");
      stop(); pid = null; P = null;
      try { sessionStorage.removeItem(KEEP); } catch(e){}
      if (M && M.party){ M.over = true; }
      if (wasIn){ note = "The party ended."; openFind(); }
      else if (visible("settings")) paintCard();
      return;
    }
    const prev = P; P = p;
    // the host left without handing over: the longest-standing member takes over
    if (!p.members[p.host]){
      const first = people(p)[0];
      if (first && first.id === me) D.set(PP("host"), me).then(() => D.update(PP(), {hostName: LB.name})).catch(() => {});
    }
    const r = p.status === "playing" && p.round;
    if (r){
      if (inRound() && M.party.n === r.n){ if (r.idx !== M.idx) mPartyGo(r.idx); }
      else if (!inRound() && (visible("party") || (prev && prev.status !== "playing" && visible("mend")))) enterRound(p);
    } else if (inRound()){
      // the host ended the round: everyone back to the lobby to see how it went
      M.over = true; Tools.close();
      openLobby();
      if (p.last && p.last.total >= 3 && p.last.right === p.last.total) confetti();
      return;
    }
    if (inRound()) strip();
    if (visible("party") && view === "lobby") renderLobby();
    if (visible("settings")) paintCard();
  }

  /* ---------- the lobby ---------- */
  function openLobby(){ if (!pid) return openFind(); view = "lobby"; lobbySig = ""; show("party"); renderLobby(); }

  function renderLobby(){
    if (!P){ busy("Joining…"); return; }
    const me = uid(), host = amHost(), ms = people(), s = P.set || {}, subj = subjOf(s.subj) || subjects()[0];
    const playing = P.status === "playing" && P.round;
    const sig = JSON.stringify([P.name, P.host, P.status, P.round && P.round.n, P.set, P.last, ms.map(m => [m.id, m.name, m.color]), note]);
    if (sig === lobbySig) return; lobbySig = sig;
    $("pyCount").textContent = `${ms.length} ${ms.length === 1 ? "person" : "people"}`;
    const last = P.last && P.last.total ? P.last : null, who = last ? Object.entries(last.rows || {}).filter(([, r]) => r.n > 0).sort((a, b) => b[1].n - a[1].n) : [];
    $("pyBody").innerHTML = `
      <div class="card">
        <h2>${esc(P.name)}</h2>
        <ul class="pmembers">${ms.map(m => `<li><i class="pdot" style="--c:${esc(m.color)}"></i><span>${esc(m.name)}</span>${m.id === P.host ? `<em>host</em>` : ""}${m.id === me ? `<em>you</em>` : ""}</li>`).join("")}</ul>
        <p class="small">Friends can join from Settings → Find party.</p>
      </div>
      ${last ? `<div class="card"><h2>Last round</h2><div class="pteam">${last.right === last.total ? ic("trophy", "ic-s") : ""}<b>${last.right}/${last.total} right</b><span>${last.pts} pts as a team</span></div>
        ${who.length ? `<ul class="pstand">${who.map(([id, r]) => `<li><i class="pdot" style="--c:${esc(r.color)}"></i><span class="pname">${esc(r.name)}</span><span class="small">answered ${r.n}</span></li>`).join("")}</ul>` : ""}</div>` : ""}
      <div class="card">
        <h2>Round</h2>
        ${host && !playing ? `
          <div class="pset">
            <label>Subject<select id="pySubj">${subjects().map(x => `<option value="${x.id}"${x.id === subj.id ? " selected" : ""}>${esc(x.name)}</option>`).join("")}</select></label>
            <label>Section<select id="pySec"><option>Loading…</option></select></label>
            <div class="slide"><label>Questions</label><div class="seg" id="pyCnt" role="radiogroup" aria-label="Questions">${COUNTS.map(n => `<button role="radio" data-n="${n}" class="${(s.count || 10) === n ? "on" : ""}" aria-checked="${(s.count || 10) === n}">${n}</button>`).join("")}</div></div>
          </div>
          <button class="primary pgo" id="pyStart">${ic("arrow")}<span>Start round</span></button>
          <p class="small">You answer as a team: anyone can answer, and it counts for everyone. Party rounds don't count toward the leaderboard.</p>`
        : `<p id="pyWhat" class="small">${esc(subj.name)} · ${s.count || 10} questions</p>
          ${playing ? `<button class="primary pgo" id="pyIn">${ic("arrow")}<span>Join the round</span></button>`
                    : `<p>Waiting for <b>${esc(P.hostName || "the host")}</b> to start.</p>`}`}
        ${note ? `<p class="fb bad">${esc(note)}</p>` : ""}
      </div>
      <button class="link pleave" id="pyLeave2">${ic("logout")}<span>Leave party</span></button>`;
    $("pyLeave2").onclick = () => leave(true);
    if ($("pyIn")) $("pyIn").onclick = () => { if (inRound()){ show("mquiz"); mHud(); } else enterRound(P); };
    if (host && !playing){
      $("pySubj").onchange = e => { const x = subjOf(e.target.value); D.update(PP("set"), {subj: x.id, sec: ST.sel[x.id] || x.defaultSection || ""}); };
      $("pyCnt").querySelectorAll("button").forEach(b => b.onclick = () => D.update(PP("set"), {count: +b.dataset.n}));
      $("pyStart").onclick = start;
      fillSections(subj, s.sec);
    } else {
      // say which section, once that subject's questions are loaded
      Study.load(subj).then(() => { const w = $("pyWhat"); if (!w) return; useProblems(subj); const x = mSections().find(z => z.id === s.sec); if (x) w.textContent = `${subj.name} · ${x.name} · ${s.count || 10} questions`; }).catch(() => {});
    }
  }

  async function fillSections(subj, cur){
    try { await Study.load(subj); } catch(e){ return; }
    const sel = $("pySec"); if (!sel || !P || (P.set || {}).subj !== subj.id) return;
    useProblems(subj);
    const secs = mSections(); if (!secs.some(x => x.id === cur)) cur = (secs.find(x => x.id === subj.defaultSection) || secs[0] || {}).id;
    sel.innerHTML = "";
    PB().units.forEach(u => {
      const og = document.createElement("optgroup"); og.label = u.name;
      secs.filter(x => x.unit === u).forEach(x => { const o = el("option", null, `${x.id.endsWith(":all") ? "Whole unit, mixed" : x.name} (${mItems(x.id).length})`); o.value = x.id; og.appendChild(o); });
      sel.appendChild(og);
    });
    if (secs.some(x => x.id === "*all")){ const o = el("option", null, `All units mixed (${PB().items.length})`); o.value = "*all"; sel.appendChild(o); }
    sel.value = cur;
    if ((P.set || {}).sec !== cur) D.update(PP("set"), {sec: cur}).catch(() => {});
    sel.onchange = e => D.update(PP("set"), {sec: e.target.value});
  }

  /* ---------- running a round ---------- */
  async function start(){
    const b = $("pyStart"); if (b) b.disabled = true;
    try {
      const s = P.set, subj = subjOf(s.subj); await Study.load(subj); useProblems(subj);
      const sec = mSections().some(x => x.id === s.sec) ? s.sec : mSections()[0].id;
      const items = shuffle(mItems(sec)).slice(0, s.count || 10);
      if (!items.length){ note = "That section has no questions."; lobbySig = ""; return renderLobby(); }
      const n = (P.rounds || 0) + 1;
      note = "";
      await D.remove(R("team/" + pid)).catch(() => {});
      await D.update(PP(), {status: "playing", rounds: n, answers: null, round: {n, subj: subj.id, sec, keys: items.map(LB.qkey).join(","), idx: 0, seed: Math.floor(Math.random() * 1e9)}});
    } catch(e){ note = "Couldn't start the round. Try again."; lobbySig = ""; renderLobby(); }
  }

  async function enterRound(p){
    const r = p.round, subj = subjOf(r.subj); if (!subj) return;
    try { await Study.load(subj); } catch(e){ note = "Couldn't load the questions. Check your connection."; lobbySig = ""; return renderLobby(); }
    if (!pid || !P || P.status !== "playing" || !P.round || P.round.n !== r.n) return;
    ST.subject = subj.id; save(); useProblems(subj);
    const byKey = new Map(PB().items.map(q => [LB.qkey(q), q]));
    const queue = r.keys.split(",").map(k => byKey.get(k));
    if (queue.some(q => !q)){ note = "Your copy of the app is out of date. Reload the page, then join again."; lobbySig = ""; return renderLobby(); }
    mStartParty(queue, P.round.idx, {id: pid, n: r.n, seed: r.seed, sec: r.sec});
  }

  function answered(idx, ok, pts, by, skipped){
    if (!pid || !D) return;
    D.set(PP("answers", "q" + idx, uid()), {ok: !!ok, pts: Math.max(0, Math.round(pts || 0)), by: by || uid(), skip: !!skipped}).catch(() => {});
  }

  /* ---------- answering as a team ---------- */
  const tq = () => R(`team/${pid}/${qk()}`);
  function submit(idx, attempt, vals, skip){
    if (!pid || !D || !inRound()) return;
    M.applied["a" + attempt] = true; M.by = uid();
    const v = {}; (vals || []).forEach((x, i) => v["f" + i] = x);
    D.update(tq(), {["s/a" + attempt]: {vals: v, by: uid(), skip: !!skip}, v: null}).catch(() => {});
  }
  const typing = {};
  function typed(idx, i, val){
    if (!pid || !D || !inRound()) return;
    const k = qk() + "/" + i; clearTimeout(typing[k]);
    typing[k] = setTimeout(() => { if (inRound() && qk() + "/" + i === k) D.set(R(`team/${pid}/${qk()}/v/f${i}`), String(val).slice(0, 200)).catch(() => {}); }, 120);
  }
  function hint(idx, n){ if (pid && D && inRound()) D.set(R(`team/${pid}/${qk()}/h`), n).catch(() => {}); }
  // bring this question's shared state onto the screen: hints, a teammate's check, what they're typing
  function applyTeam(){
    if (!inRound() || !team) return;
    const t = team[qk()]; if (!t) return;
    if (t.h > M.hint && !M.answered) mHintTo(t.h);
    for (let k = 1; k <= 2; k++){
      const sub = t.s && t.s["a" + k];
      if (!sub || M.answered || M.applied["a" + k] || M.attempt !== k) continue;
      M.applied["a" + k] = true; M.by = sub.by;
      mApplyTeam(sub);
      const m = ((P && P.members) || {})[sub.by];
      if (sub.by !== uid() && m) $("mFb").insertAdjacentHTML("beforeend", ` <span class="fbby"><i class="pdot" style="--c:${esc(m.color)}"></i>${esc(m.name)} ${sub.skip ? "skipped" : "answered"}</span>`);
    }
    if (t.v && !M.answered) mSetLive(t.v);
  }

  /* ---------- shared scratchpad ---------- */
  const sketchHook = {
    item: (name, id, it) => { if (inRound()) D.update(R(`sketch/${pid}/${uid()}`), {q: qk(), [`${name}/i/${id}`]: it ? JSON.parse(JSON.stringify(it)) : null}).catch(() => {}); },
    grid: (name, g) => { if (inRound()) D.update(R(`sketch/${pid}/${uid()}`), {q: qk(), [`${name}/g`]: g || null}).catch(() => {}); },
    clear: name => { if (inRound()) D.update(R(`sketch/${pid}/${uid()}`), {q: qk(), [name]: null}).catch(() => {}); }
  };
  function applySketch(){
    if (!inRound()){ Tools.clearOthers(); return; }
    // a new question: start a clean sheet
    if (sketchAt !== qk()){ sketchAt = qk(); D.remove(R(`sketch/${pid}/${uid()}`)).catch(() => {}); }
    const me = uid(), list = {};
    Object.entries(sketches || {}).forEach(([id, d]) => { const m = ((P && P.members) || {})[id]; if (id !== me && m && d && d.q === qk()) list[id] = {color: m.color, data: d}; });
    Tools.setAllOthers(list);
  }

  // Next / See results: only the host moves the group
  function next(){
    if (!pid || !P || !P.round || !amHost()) return;
    const r = P.round, last = r.idx >= r.keys.split(",").length - 1;
    if (!last) return D.update(PP("round"), {idx: r.idx + 1}).catch(() => {});
    // round over: the team's score, and who answered what
    const rows = {}, total = r.keys.split(",").length; let right = 0, pts = 0;
    people().forEach(m => rows[m.id] = {name: m.name, color: m.color, n: 0});
    Object.values(P.answers || {}).forEach(q => {
      const a = Object.values(q || {}).sort((x, y) => (y.pts || 0) - (x.pts || 0))[0]; if (!a) return;
      pts += a.pts || 0; if (a.ok) right++;
      const m = (P.members || {})[a.by]; if (a.by && !a.skip && (rows[a.by] || m)) (rows[a.by] || (rows[a.by] = {name: m.name, color: m.color, n: 0})).n++;
    });
    D.update(PP(), {status: "lobby", round: null, last: {n: r.n, total, right, pts, rows}}).catch(() => {});
  }

  /* who's done with this question, under the top bar */
  function strip(){
    const box = $("mParty"), on = inRound() && !!P;
    box.classList.toggle("hidden", !on);
    setLabel($("mQuit"), "close", M && M.party ? "Leave" : "Quit");
    if (!on) return;
    const ms = people();
    box.innerHTML = ms.map(m => `<span class="pm${m.id === uid() ? " me" : ""}" style="--c:${esc(m.color)}" title="${esc(m.name)}"><i class="pdot"></i><span class="pmn">${esc(m.name)}</span></span>`).join("") + `<span class="pcount">Team</span>`;
    applySketch(); applyTeam();
    // the Next button: host moves everyone, others wait
    if (M.answered){
      const last = M.idx >= M.queue.length - 1, b = $("mCheck");
      if (amHost()){ b.textContent = last ? "End round" : "Next →"; b.classList.remove("dim"); }
      else { b.textContent = `Waiting for ${P.hostName || "the host"}…`; b.classList.add("dim"); }
    }
  }

  /* ---------- finding a party ---------- */
  function openFind(){
    view = "find"; show("party"); $("pyCount").textContent = "";
    if (offList){ offList(); offList = null; }
    $("pyBody").innerHTML = `<div class="card"><h2>Parties</h2><div id="pyList" class="small">Looking…</div></div>`;
    init().then(() => {
      if (view !== "find" || !visible("party")) return;
      offList = D.onValue(R("parties"), s => { list = s.val() || {}; paintList(); }, () => { const b = $("pyList"); if (b) b.textContent = "Couldn't load parties."; });
    }).catch(failed);
  }
  function paintList(){
    const box = $("pyList"); if (!box || view !== "find" || !visible("party")){ if (offList){ offList(); offList = null; } return; }
    const now = Date.now(), rows = [];
    Object.entries(list || {}).forEach(([id, p]) => {
      const n = Object.keys((p && p.members) || {}).length;
      // tidy up parties everyone has left (or that were left open for half a day)
      if (!n || (p.created && now - p.created > OLD)){ D.remove(R("parties/" + id)).catch(() => {}); return; }
      rows.push([id, p, n]);
    });
    rows.sort((a, b) => (b[1].created || 0) - (a[1].created || 0));
    box.className = "";
    box.innerHTML = (note ? `<p class="fb bad">${esc(note)}</p>` : "") + (rows.length ? `<ul class="plist">${rows.map(([id, p, n]) => {
      const subj = subjOf((p.round || p.set || {}).subj);
      return `<li><div><b>${esc(p.name)}</b><span class="small">${subj ? esc(subj.short || subj.name) + " · " : ""}${n} ${n === 1 ? "person" : "people"} · ${p.status === "playing" ? "playing" : "in the lobby"}</span></div>
        <button data-id="${esc(id)}" ${n >= MAX && !(p.members || {})[uid()] ? "disabled" : ""}>${id === pid ? "Open" : n >= MAX ? "Full" : "Join"}</button></li>`; }).join("")}</ul>`
      : `<p class="small">No parties right now.</p>`) + `<button class="primary pgo" id="pyNew2">${ic("users")}<span>Create party</span></button>`;
    box.querySelectorAll("[data-id]").forEach(b => b.onclick = () => { note = ""; b.dataset.id === pid ? openLobby() : join(b.dataset.id); });
    $("pyNew2").onclick = () => { note = ""; create(); };
  }
  $("pyBack").onclick = () => { if (offList){ offList(); offList = null; } note = ""; renderSettings(); };

  /* ---------- for the admin page ---------- */
  async function all(){
    await init();
    const v = (await D.get(R("parties"))).val() || {};
    const now = Date.now();
    Object.entries(v).forEach(([id, p]) => { if (!p.members || (p.created && now - p.created > OLD)) D.remove(R("parties/" + id)).catch(() => {}); });
    return Object.entries(v).map(([id, p]) => Object.assign({id}, p)).filter(p => p.members && !(p.created && now - p.created > OLD));
  }

  /* ---------- everyone's pointer ---------- */
  const Cursors = (() => {
    const shown = {}; let pend = null, last = 0, timer = 0;
    const layer = () => $("curLayer");
    // where the pointer is, described by the element under it, so it lands on the same thing on any screen size
    function locate(x, y){
      const card = $("mCard"), cr = card.getBoundingClientRect();
      if (x < cr.left || x > cr.right || y < cr.top || y > cr.bottom) return {h: 1, q: M.idx};
      let t = document.elementFromPoint(x, y), n = t; const path = [];
      while (n && n !== card && n.parentElement){ path.unshift([...n.parentElement.children].indexOf(n)); n = n.parentElement; }
      if (n !== card) return {h: 1, q: M.idx};            // over a panel or bar that sits on top of the card
      const r = t.getBoundingClientRect(), f = (v, a, w) => w > 0 ? Math.round((v - a) / w * 1000) / 1000 : .5;
      return {p: path.join("."), x: f(x, r.left, r.width), y: f(y, r.top, r.height), cx: f(x, cr.left, cr.width), cy: f(y, cr.top, cr.height), q: M.idx};
    }
    function send(){
      timer = 0; if (!pend || !pid || !inRound()) return;
      last = performance.now();
      const d = locate(pend.x, pend.y); if (pend.tap) d.k = 1; pend = null;
      D.set(R(`cursors/${pid}/${uid()}`), d).catch(() => {});
    }
    function move(e){
      if (!pid || !D || !inRound() || M.view != null || !visible("mquiz")) return;
      if (e.pointerType !== "mouse" && e.type === "pointermove" && !e.buttons) return;
      pend = {x: e.clientX, y: e.clientY, tap: e.pointerType !== "mouse"};
      const wait = 80 - (performance.now() - last);
      if (wait <= 0) send(); else if (!timer) timer = setTimeout(send, wait);
    }
    document.addEventListener("pointermove", move, {passive: true});
    document.addEventListener("pointerdown", move, {passive: true});
    document.addEventListener("mouseleave", () => { if (pid && D && inRound()) D.set(R(`cursors/${pid}/${uid()}`), {h: 1, q: M.idx}).catch(() => {}); });

    function place(id){
      const c = shown[id], d = c.d, m = ((P && P.members) || {})[id];
      const on = !!(d && !d.h && m && inRound() && d.q === M.idx && M.view == null && visible("mquiz"));
      c.el.classList.toggle("hidden", !on); if (!on) return;
      c.el.style.setProperty("--c", m.color);
      c.el.querySelector("span").textContent = m.name;
      const card = $("mCard"); let t = card, ok = !!d.p;
      if (d.p) for (const i of d.p.split(".")){ const k = t.children[+i]; if (!k){ ok = false; break; } t = k; }
      let r = t.getBoundingClientRect(), fx = d.x, fy = d.y;
      if (!ok || !r.width || !r.height){ r = card.getBoundingClientRect(); fx = d.cx; fy = d.cy; }
      const X = r.left + Math.max(0, Math.min(1, fx)) * r.width, Y = r.top + Math.max(0, Math.min(1, fy)) * r.height;   // the layer is fixed to the screen
      c.el.style.transform = `translate(${Math.round(X)}px, ${Math.round(Y)}px)`;
      // a tap on a phone shows briefly, then fades
      clearTimeout(c.fade); c.el.classList.remove("gone");
      if (d.k) c.fade = setTimeout(() => c.el.classList.add("gone"), 1600);
    }
    function update(data){
      const me = uid();
      Object.keys(shown).forEach(id => { if (!data[id] || id === me){ shown[id].el.remove(); delete shown[id]; } });
      Object.entries(data).forEach(([id, d]) => {
        if (id === me) return;
        if (!shown[id]){
          const e = el("div", "pcur hidden");
          e.innerHTML = `<svg viewBox="0 0 16 20" width="16" height="20" aria-hidden="true"><path d="M1.5 1.5v14.8l4.1-4 2.7 6.2 2.7-1.2-2.7-6.1h5.9z"/></svg><span></span>`;
          layer().appendChild(e); shown[id] = {el: e};
        }
        const same = JSON.stringify(shown[id].d) === JSON.stringify(d);
        shown[id].d = d;
        if (!same || !d.k) place(id);
      });
    }
    function repaint(){ Object.keys(shown).forEach(id => { if (!shown[id].d || !shown[id].d.k) place(id); }); }
    function clear(){ Object.keys(shown).forEach(id => { shown[id].el.remove(); delete shown[id]; }); }
    let raf = 0; const soon = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(repaint); };
    window.addEventListener("scroll", soon, {passive: true});
    window.addEventListener("resize", soon);
    if (window.ResizeObserver) new ResizeObserver(soon).observe($("mCard"));
    return {update, clear, repaint: soon};
  })();

  // back in the same tab after a reload: rejoin the party you were in
  function resume(){
    let id = null; try { id = sessionStorage.getItem(KEEP); } catch(e){}
    if (!id || !ST.lbUser || !LB.cfg()) return;
    init().then(async () => {
      const p = (await D.get(R("parties/" + id))).val();
      if (!p || !p.host){ try { sessionStorage.removeItem(KEEP); } catch(e){} return; }
      await join(id);
    }).catch(() => {});
  }
  if (LB.cfg()) window.addEventListener("load", () => setTimeout(resume, 600));

  return {paintCard, openFind, openLobby, answered, submit, typed, hint, next, strip, leave: () => leave(true), all, get id(){ return pid; }, repaint: () => Cursors.repaint()};
})();
