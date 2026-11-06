/* =========================================================================
   Study Stuff — admin dashboard.
   Opened from the bottom-right grid square on the Settings page.
   The password only hides the page; the data itself is protected by the
   Firestore rules (an account listed in admins/{uid} sees everything).
   ========================================================================= */
const Admin = (() => {
  const HASH = "85686d8ec2bb2b8c491cd0188d823de99715f032bd8b806291f7c1505bfaf300";   // SHA-256 of the admin password
  const UNLOCK = "sq-admin";
  const sha = async t => [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)))].map(b => b.toString(16).padStart(2, "0")).join("");
  const unlocked = () => { try { return sessionStorage.getItem(UNLOCK) === "1"; } catch(e){ return false; } };
  const esc = s => escHTML(String(s == null ? "" : s));
  const ago = ms => { if (!ms) return "—"; const m = Math.round((Date.now() - ms) / 60000); return m < 60 ? `${Math.max(1, m)}m ago` : m < 1440 ? `${Math.round(m / 60)}h ago` : `${Math.round(m / 1440)}d ago`; };
  const tsMs = t => !t ? 0 : typeof t === "number" ? t : t.toMillis ? t.toMillis() : t.seconds ? t.seconds * 1000 : 0;
  const fmt = n => Number(n || 0).toLocaleString();
  const plain = t => String(t || "").replace(/\[\[(.+?)\]\]/g, "$1").replace(/\{\{(.+?)\}\}/g, "$1").replace(/__|\*\*/g, "").replace(/\s+/g, " ").trim();

  /* ---- the hidden square: bottom-right cell of the 24px background grid ---- */
  function placeKey(){
    const k = $("adminKey"); if (!k) return;
    const G = 24, x = Math.floor(innerWidth / G) * G - G - 1, y = Math.floor(innerHeight / G) * G - G - 1;
    k.style.left = x + "px"; k.style.top = y + "px";
  }
  window.addEventListener("resize", placeKey);

  function open(){ placeKey(); show("admin"); unlocked() ? load() : lock(); }

  function lock(){
    $("adBody").innerHTML = `<div class="card adlock"><h2>Admin</h2>
      <form id="adForm" autocomplete="off"><input type="password" id="adPass" placeholder="Password" aria-label="Admin password" autocomplete="current-password">
      <button class="primary" type="submit">Open</button></form><div class="small adErr" id="adErr"></div></div>`;
    $("adForm").onsubmit = async e => {
      e.preventDefault();
      if (await sha($("adPass").value) === HASH){ try { sessionStorage.setItem(UNLOCK, "1"); } catch(err){} load(); }
      else { $("adErr").textContent = "Wrong password."; $("adPass").select(); }
    };
    setTimeout(() => { const x = $("adPass"); if (x) x.focus(); }, 50);
  }

  async function load(){
    const body = $("adBody");
    body.innerHTML = `<div class="card"><div class="small">Loading…</div></div>`;
    const subs = Study.subjects().filter(s => s.type === "problems");
    if (!LB.cfg()){ body.innerHTML = `<div class="card"><h2>Admin</h2><p class="small">Firebase isn't set up, so there's no club data.</p>${links()}</div>`; return; }
    let d;
    try { d = await LB.adminData(subs.map(s => s.id)); } catch(e){ d = {signedIn:false, err:e.message}; }
    if (!d.signedIn){
      body.innerHTML = `<div class="card"><h2>Admin</h2><p>Sign in to your account to load the club's data.</p><button class="primary" id="adSign">Sign in</button>${links()}</div>`;
      $("adSign").onclick = renderBoard; return;
    }
    // ---- numbers ----
    const scores = d.scores.map(r => Object.assign(r, {upd: tsMs(r.updated)}));
    const members = d.members ? d.members.map(m => Object.assign(m, {joined: tsMs(m.created)})) : null;
    const prog = {}; (d.progress || []).forEach(p => prog[p.id] = p);
    const week = Date.now() - 7 * 864e5, day = Date.now() - 864e5;
    const answers = Object.values(d.qstats).reduce((a, q) => a + Object.values(q).reduce((b, r) => b + (r.n || 0), 0), 0);
    const tiles = [
      ["Members", members ? members.length : scores.length],
      ["Points", fmt(scores.reduce((a, r) => a + (r.total || 0), 0))],
      ["Rounds", fmt(scores.reduce((a, r) => a + (r.rounds || 0), 0))],
      ["Active this week", scores.filter(r => r.upd > week).length],
      ["Active today", scores.filter(r => r.upd > day).length],
      ["Answers logged", fmt(answers)]
    ];
    // ---- people: everyone with a row, plus members who never played ----
    const byId = {}; scores.forEach(r => byId[r.id] = {id: r.id, name: r.name, r});
    (members || []).forEach(m => { byId[m.id] = Object.assign(byId[m.id] || {id: m.id, name: m.name}, {joined: m.joined}); });
    const subjName = id => (Study.subject(id) || {}).short || id;
    const people = Object.values(byId).map(p => {
      const by = (p.r && p.r.by) || {}, topS = Object.entries(by).sort((a, b) => b[1] - a[1])[0];
      let c = 0, t = 0; const pr = prog[p.id];
      if (pr) Object.values(pr.mq || {}).concat(Object.values(pr.words || {})).forEach(x => { c += x.c || 0; t += x.t || 0; });
      return Object.assign(p, {pts: p.r ? p.r.total || 0 : 0, rounds: p.r ? p.r.rounds || 0 : 0, best: p.r ? p.r.best || 0 : 0, last: p.r ? p.r.upd : 0,
        top: topS ? subjName(topS[0]) : "—", acc: t ? Math.round(c / t * 100) + "%" : "—", answered: t});
    }).sort((a, b) => (b.last || 0) - (a.last || 0) || b.pts - a.pts);
    // ---- points by subject ----
    const bySubj = {}; scores.forEach(r => Object.entries(r.by || {}).forEach(([k, v]) => bySubj[k] = (bySubj[k] || 0) + v));
    const maxS = Math.max(1, ...Object.values(bySubj));

    body.innerHTML = `
      <div class="card"><div class="adhead"><h2>Admin</h2><button class="link" id="adLock">Lock</button></div>
        <div class="small">Signed in as <b>${esc(d.name)}</b> · ${d.isAdmin ? "full access" : "member access (see below for full access)"}</div>
        <div class="adtiles">${tiles.map(([k, v]) => `<div class="adtile"><b>${v}</b><span>${k}</span></div>`).join("")}</div></div>
      <div class="card"><h2>People</h2><div class="adscroll"><table class="adtable"><thead><tr><th>Name</th><th>Points</th><th>Rounds</th><th>Best</th><th>Last active</th>${members ? "<th>Joined</th>" : ""}${d.progress ? "<th>Answered</th><th>Accuracy</th>" : ""}<th>Top subject</th></tr></thead>
        <tbody>${people.map(p => `<tr><td>${esc(p.name)}</td><td>${fmt(p.pts)}</td><td>${p.rounds}</td><td>${fmt(p.best)}</td><td>${ago(p.last)}</td>${members ? `<td>${p.joined ? new Date(p.joined).toLocaleDateString() : "—"}</td>` : ""}${d.progress ? `<td>${fmt(p.answered)}</td><td>${p.acc}</td>` : ""}<td>${esc(p.top)}</td></tr>`).join("") || `<tr><td colspan="8" class="small">Nobody yet.</td></tr>`}</tbody></table></div></div>
      <div class="card"><h2>Points by subject</h2>${Object.keys(bySubj).length ? Object.entries(bySubj).sort((a, b) => b[1] - a[1]).map(([k, v]) =>
        `<div class="adbar"><span>${esc(subjName(k))}</span><i style="width:${(v / maxS * 100).toFixed(1)}%"></i><b>${fmt(v)}</b></div>`).join("") : `<div class="small">No points yet.</div>`}</div>
      <div class="card"><div class="adhead"><h2>Most-missed questions</h2><select id="adSubj" aria-label="Subject">${subs.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join("")}</select></div><div id="adMissed" class="small">Loading…</div></div>
      ${d.isAdmin ? "" : `<div class="card"><h2>Full access</h2><p class="small">To see join dates and each person's accuracy, make this account an admin: in the Firebase console, open Firestore and create a collection named <b>admins</b> with a document whose ID is your user ID below (no fields needed). Then publish the updated <b>firestore.rules</b> from the repo.</p>
        <div class="row"><input id="adUid" readonly value="${esc(d.uid)}" aria-label="Your user ID"><button id="adCopy">Copy</button></div></div>`}
      <div class="card"><h2>More</h2>${links()}</div>`;
    $("adLock").onclick = () => { try { sessionStorage.removeItem(UNLOCK); } catch(e){} lock(); };
    if ($("adCopy")) $("adCopy").onclick = () => { $("adUid").select(); try { navigator.clipboard.writeText(d.uid); $("adCopy").textContent = "Copied"; } catch(e){} };
    const pickSubj = async () => {
      const id = $("adSubj").value, subj = Study.subject(id), box = $("adMissed"), q = d.qstats[id] || {};
      box.textContent = "Loading…";
      try { await Study.load(subj); } catch(e){}
      const bank = Study.problems[id] || {items: []}, label = {};
      bank.items.forEach(it => { label[LB.qkey(it)] = it; });
      const rows = Object.entries(q).filter(([, r]) => (r.n || 0) >= 3 && r.w > 0).map(([k, r]) => [label[k], r]).filter(([it]) => it)
        .sort((a, b) => (b[1].w / b[1].n - a[1].w / a[1].n) || b[1].n - a[1].n).slice(0, 15);
      box.innerHTML = rows.length ? `<ol class="admiss">${rows.map(([it, r]) => `<li><span class="miss">${Math.round(r.w / r.n * 100)}%</span><span class="mq">${esc(plain(it.text).slice(0, 220))}<i>${esc(it.src)} · ${r.n} tries</i></span></li>`).join("")}</ol>`
        : `Not enough answers yet (each question needs 3+ tries from signed-in members).`;
    };
    $("adSubj").onchange = pickSubj; pickSubj();
  }

  function links(){
    const pid = (window.FIREBASE_CONFIG || {}).projectId;
    return `<div class="adlinks"><a href="https://analytics.google.com/" target="_blank" rel="noopener">Google Analytics (visits, pages, devices)</a>` +
      (pid ? `<a href="https://console.firebase.google.com/project/${encodeURIComponent(pid)}/firestore" target="_blank" rel="noopener">Firestore data</a><a href="https://console.firebase.google.com/project/${encodeURIComponent(pid)}/authentication/users" target="_blank" rel="noopener">Accounts (reset or delete)</a>` : "") + `</div>`;
  }

  return {open, placeKey};
})();
