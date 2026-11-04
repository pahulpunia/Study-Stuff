/* =====================================================================
   Settings: backup/restore, accounts + leaderboard (Firebase, optional)
   ===================================================================== */
/* ---- backup / restore (both subjects) ---- */
function resetBackupUI(){
  setLabel($("bkCopy"), "upload", "Copy backup code"); setLabel($("bkRestore"), "download", "Restore");
  $("bkRestore").dataset.mode = ""; $("bkText").classList.add("hidden"); $("bkText").value = "";
  $("resetStats").dataset.armed = "";
  $("resetStats").textContent = `Reset ${Study.subject().name} stats`;
}
$("bkCopy").onclick = () => {
  const code = btoa(unescape(encodeURIComponent(JSON.stringify(ST))));
  const box = $("bkText"); box.value = code; box.readOnly = true; box.classList.remove("hidden"); box.select();
  $("bkRestore").dataset.mode = "";
  try { navigator.clipboard.writeText(code).then(() => setLabel($("bkCopy"), "check", "Code copied")).catch(() => $("bkCopy").textContent = "Copy the code below"); }
  catch(e){ $("bkCopy").textContent = "Copy the code below"; }
};
$("bkRestore").onclick = () => {
  const box = $("bkText"), b = $("bkRestore");
  if (b.dataset.mode !== "paste"){
    box.value = ""; box.readOnly = false; box.placeholder = "Paste your backup code here, then tap Restore again";
    box.classList.remove("hidden"); b.dataset.mode = "paste"; setLabel(b, "download", "Tap to restore"); box.focus(); return;
  }
  try {
    const data = JSON.parse(decodeURIComponent(escape(atob(box.value.trim()))));
    if (!data || typeof data !== "object" || !data.settings) throw new Error("bad");
    ST = Object.assign(ST, data); save();
    setLabel(b, "check", "Restored"); b.dataset.mode = ""; box.classList.add("hidden");
  } catch(e){ b.textContent = "That code didn't work"; b.dataset.mode = "paste"; }
};

/* ========== ACCOUNTS + LEADERBOARD (Firebase, optional) ==========
   Works only when firebase-config.js sets window.FIREBASE_CONFIG.
   The club password is checked by the Firestore security rules on the server,
   so it never appears in this file. */
const LB = (() => {
  const V = "10.12.2", BASE = `https://www.gstatic.com/firebasejs/${V}/`;
  let A = null, F = null, auth = null, db = null, user = null, memberName = null, ready = null, busy = false, creating = false, checked = false;
  const cfg = () => (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey) ? window.FIREBASE_CONFIG : null;
  const emailOf = n => n.toLowerCase() + "@users.studyquiz.app";
  const NAME_RE = /^[A-Za-z0-9_]{3,16}$/;

  function init(){
    if (ready) return ready;
    if (!cfg()) return Promise.reject(new Error("notset"));
    ready = (async () => {
      const [app, a, f] = await Promise.all([import(BASE + "firebase-app.js"), import(BASE + "firebase-auth.js"), import(BASE + "firebase-firestore.js")]);
      A = a; F = f;
      const inst = app.initializeApp(cfg());
      auth = a.getAuth(inst); db = f.getFirestore(inst);
      await new Promise(res => { const off = a.onAuthStateChanged(auth, u => { off(); res(u); }); });
      a.onAuthStateChanged(auth, async u => {
        if (creating) return;            // sign-up in progress handles itself
        const was = !!(user && memberName);
        user = u;
        if (u){ await loadMember(); } else { memberName = null; checked = false; }
        const now = !!(user && memberName);
        // only redraw the account card when the signed-in state really changed
        if (was !== now && !creating && !window.acctBusy && !$("board").classList.contains("hidden")) renderAccount();
      });
    })();
    ready.catch(() => { ready = null; });
    return ready;
  }

  async function loadMember(){
    try { const m = await F.getDoc(F.doc(db, "members", user.uid)); memberName = m.exists() ? m.data().name : null; checked = true; }
    catch(e){ checked = false; }
    ST.lbUser = memberName || null; save();
    if (memberName) flush();
  }

  function niceError(e){
    const c = (e && e.code) || "";
    if (c.includes("invalid-credential") || c.includes("wrong-password") || c.includes("user-not-found") || c.includes("invalid-email")) return "Wrong username or password.";
    if (c.includes("email-already-in-use")) return "That username is taken.";
    if (c.includes("weak-password")) return "Password needs at least 6 characters.";
    if (c.includes("too-many-requests")) return "Too many tries. Wait a minute and try again.";
    if (c.includes("network") || c.includes("unavailable") || (e && /Failed to fetch|import/i.test(e.message || ""))) return "Can't reach the server. Check your internet.";
    if (c.includes("permission-denied")) return "Wrong club password.";
    if (c.includes("operation-not-allowed")) return "Sign-in isn't turned on in Firebase yet.";
    if (c.includes("failed-precondition") || c.includes("not-found") || /database.*does not exist/i.test((e && e.message) || "")) return "The leaderboard database isn't set up yet.";
    if (c.includes("unauthorized-domain")) return "This website isn't allowed yet: add it under Firebase → Authentication → Settings → Authorized domains.";
    return "Something went wrong (" + (c || (e && e.message) || "unknown") + ").";
  }

  async function signUp(name, pass, invite){
    if (!NAME_RE.test(name)) throw new Error("Username: 3–16 letters, numbers, or _.");
    if (!invite) throw new Error("Enter the club password.");
    await init();
    creating = true;
    try {
      const cred = await A.createUserWithEmailAndPassword(auth, emailOf(name), pass);
      try {
        await F.setDoc(F.doc(db, "members", cred.user.uid), {name, invite, created: F.serverTimestamp()});
      } catch(e){
        try { await cred.user.delete(); } catch(_){ try { await A.signOut(auth); } catch(__){} }
        user = null; memberName = null;
        throw e;
      }
      user = cred.user; memberName = name; checked = true; ST.lbUser = name; save();
    } finally { creating = false; }
    await flush();
  }
  async function signIn(name, pass){
    await init();
    const cred = await A.signInWithEmailAndPassword(auth, emailOf(name), pass);
    user = cred.user; await loadMember();
  }
  async function signOut(){ await init(); await A.signOut(auth); user = null; memberName = null; checked = false; ST.lbUser = null; save(); }

  // round finished: queue the points, send when possible
  function submit(subject, pts){
    pts = Math.max(0, Math.round(pts || 0));
    if (!pts || !ST.lbUser) return;
    ST.lbPending = (ST.lbPending || []).concat([{s: subject, p: pts}]).slice(-50);
    save();
    init().then(flush).catch(() => {});
  }
  async function flush(){
    if (busy || !user || !memberName) return;
    const pend = (ST.lbPending || []).slice(0, 50);
    if (!pend.length) return;
    busy = true;
    try {
      const ref = F.doc(db, "scores", user.uid);
      await F.runTransaction(db, async tx => {
        const snap = await tx.get(ref);
        const o = snap.exists() ? snap.data() : {total:0, vocab:0, math:0, rounds:0, best:0};
        const subjOf = x => x.s === "math" ? "math3" : x.s;           // older app versions sent "math"
        const by = Object.assign({}, o.by || {});
        pend.forEach(x => { const s = subjOf(x); by[s] = (by[s] || 0) + x.p; });
        const sumWhere = f => pend.filter(x => f(subjOf(x))).reduce((a, x) => a + x.p, 0);
        const sum = pend.reduce((a, x) => a + x.p, 0);
        tx.set(ref, {name: memberName, total: (o.total || 0) + sum,
                     vocab: (o.vocab || 0) + sumWhere(s => s === "vocab"),
                     math: (o.math || 0) + sumWhere(s => s.startsWith("math")),
                     by, rounds: (o.rounds || 0) + pend.length, best: Math.max(o.best || 0, ...pend.map(x => x.p)), updated: F.serverTimestamp()});
      });
      ST.lbPending = (ST.lbPending || []).slice(pend.length); save();
    } catch(e){ /* stays queued; retried next time */ }
    busy = false;
  }
  async function top(){
    await init();
    const q = F.query(F.collection(db, "scores"), F.orderBy("total", "desc"), F.limit(25));
    const snap = await F.getDocs(q);
    return snap.docs.map(d => ({uid: d.id, ...d.data()}));
  }
  // start in the background if this phone was signed in before (sends queued points)
  if (cfg() && ST.lbUser) window.addEventListener("load", () => setTimeout(() => init().catch(() => {}), 1500));

  return {cfg, init, signUp, signIn, signOut, submit, top, niceError, get user(){ return user; }, get name(){ return memberName; }, get checked(){ return checked; }};
})();

/* ---- settings screen ---- */
function renderSettings(){
  $("countSel").value = String(ST.settings.count);
  $("secondChance").checked = !!ST.settings.second;
  paintTheme();
  resetBackupUI();
  $("toBoard").classList.toggle("hidden", !LB.cfg());
  show("settings");
}
/* theme: dark by default, light if picked (index.html applies it before first paint) */
function applyTheme(t){
  document.documentElement.dataset.theme = t;
  const m = document.getElementById("themeColor"); if (m) m.content = t === "light" ? "#F6F8FB" : "#10151E";
}
function paintTheme(){
  const t = ST.settings.theme || "dark";
  $("themeSeg").querySelectorAll("button").forEach(b => { const on = b.dataset.t === t; b.classList.toggle("on", on); b.setAttribute("aria-checked", on); });
}
$("themeSeg").querySelectorAll("button").forEach(b => b.onclick = () => { ST.settings.theme = b.dataset.t; save(); applyTheme(b.dataset.t); paintTheme(); });
applyTheme(ST.settings.theme || "dark");

/* leaderboard page: account card + the board itself */
function renderBoard(){ renderAccount(); show("board"); }
$("toBoard").onclick = renderBoard;

let acctTab = "in";
function renderAccount(){
  const box = $("acct"); $("acctCard").classList.remove("hidden");
  if (!LB.cfg()){
    $("acctCard").classList.add("hidden");
    return;
  }
  if (LB.user && !LB.name && LB.checked){
    box.innerHTML = `<div class="small">This account isn't on the leaderboard.</div><button class="lbtoggle" id="acOut">Sign out</button>`;
    $("acOut").onclick = async () => { await LB.signOut(); renderAccount(); };
    return;
  }
  if (ST.lbUser && !LB.user && !LB.name){
    box.innerHTML = `<div class="small">Connecting…</div>`;
    LB.init().then(() => { if (!LB.user){ ST.lbUser = null; save(); } renderAccount(); }).catch(e => { box.innerHTML = `<div class="small">Offline</div>`; });
    return;
  }
  if (LB.user && LB.name){
    const pend = (ST.lbPending || []).reduce((a, x) => a + x.p, 0);
    box.innerHTML = `<div class="acrow"><span>Signed in as <b>${LB.name}</b></span><button class="link" id="acOut">Sign out</button></div>
      ${pend ? `<div class="small">${pend} pts to send</div>` : ""}
      <div id="lbList"></div><button class="grow lbtoggle" id="lbShow">${ic("refresh")}<span>Refresh</span></button>`;
    $("acOut").onclick = async () => { await LB.signOut(); acctTab = "in"; renderAccount(); };
    $("lbShow").onclick = showBoard;
    showBoard();
    return;
  }
  const up = acctTab === "up";
  box.innerHTML = `<div class="seg"><button id="tabIn" class="${up ? "" : "on"}">Sign in</button><button id="tabUp" class="${up ? "on" : ""}">Create account</button></div>
    <form id="acForm" autocomplete="on">
      <input id="acName" type="text" placeholder="Username" autocapitalize="none" autocorrect="off" spellcheck="false" autocomplete="username">
      <input id="acPass" type="password" placeholder="Password" autocomplete="${up ? "new-password" : "current-password"}">
      ${up ? `<input id="acInv" type="password" placeholder="Club password" autocomplete="off">` : ""}
      <button type="submit" class="primary" id="acGo" style="width:100%">${up ? "Create account" : "Sign in"}</button>
    </form>
    <div class="acerr" id="acErr"></div>`;
  $("tabIn").onclick = () => { acctTab = "in"; renderAccount(); };
  $("tabUp").onclick = () => { acctTab = "up"; renderAccount(); };
  $("acForm").onsubmit = async e => {
    e.preventDefault();
    const name = $("acName").value.trim(), pass = $("acPass").value, inv = up ? $("acInv").value.trim() : "";
    const btn = $("acGo"); btn.disabled = true; btn.textContent = "One sec…"; $("acErr").textContent = "";
    window.acctBusy = true;
    try {
      if (up) await LB.signUp(name, pass, inv); else await LB.signIn(name, pass);
      window.acctBusy = false;
      document.activeElement && document.activeElement.blur();
      renderAccount();
    } catch(err){
      window.acctBusy = false;
      $("acErr").textContent = err.code ? LB.niceError(err) : (err.message === "notset" ? "Not set up yet." : LB.niceError(err).startsWith("Something") ? err.message : LB.niceError(err));
      btn.disabled = false; btn.textContent = up ? "Create account" : "Sign in";
    }
  };
}
function lbSplit(r){
  // points per subject (uses icons from the registry)
  const parts = Study.subjects().map(s => {
    const p = (r.by && r.by[s.id] != null) ? r.by[s.id] : s.id === "vocab" ? (r.vocab || 0) : s.id === "math3" ? (r.math || 0) : 0;
    return p ? `${ic(s.icon, "ic-s")} ${p}` : "";
  }).filter(Boolean);
  return parts.length ? parts.join(" · ") + " · " : "";
}
async function showBoard(){
  const box = $("lbList"); box.innerHTML = `<div class="small">Loading…</div>`;
  try {
    const rows = await LB.top();
    if (!rows.length){ box.innerHTML = `<div class="small">No scores yet</div>`; return; }
    box.innerHTML = `<ol class="lb">${rows.map((r, i) => `<li class="${LB.user && r.uid === LB.user.uid ? "me" : ""}">
      <span class="lbr">${i + 1}</span><span class="lbn">${escHTML(r.name)}<span class="small">${lbSplit(r)}best ${r.best || 0}</span></span><b>${r.total || 0}</b></li>`).join("")}</ol>`;
  } catch(e){ box.innerHTML = `<div class="small">${LB.niceError(e)}</div>`; }
}
