/* =====================================================================
   Issues: report a problem with a question (or the site), and see what's
   been reported and fixed. Stored in Firestore:
     issues/{id}        the report (anyone can read; no names)
     issueAuthors/{id}  who filed it (only that person and the admin can read)
   Only members can file; only the admin can change status or reply.
   ===================================================================== */
const Issues = (() => {
  const REASONS = ["Wrong answer", "Confusing", "Typo", "Something's broken", "Other"];
  const STATUS = {open: "Open", looking: "Looking into it", fixed: "Fixed", closed: "Closed"};
  let ctx = null, reason = "", list = [], mine = new Set(), off = null, filter = "open", sent = false;
  const esc = s => escHTML(String(s == null ? "" : s));
  const tsMs = t => !t ? 0 : typeof t === "number" ? t : t.toMillis ? t.toMillis() : t.seconds ? t.seconds * 1000 : 0;
  const ago = ms => { if (!ms) return ""; const m = Math.round((Date.now() - ms) / 60000); return m < 1 ? "just now" : m < 60 ? `${m}m ago` : m < 1440 ? `${Math.round(m / 60)}h ago` : `${Math.round(m / 1440)}d ago`; };
  const subjName = id => { const s = Study.subjects().find(x => x.id === id); return s ? (s.short || s.name) : ""; };

  /* ---------- the report form (a sheet over the page) ---------- */
  function open(c){
    ctx = c || {kind: "general"}; reason = ""; sent = false;
    $("rpt").classList.remove("hidden"); document.body.classList.add("noscroll");
    paint();
  }
  function close(){ $("rpt").classList.add("hidden"); document.body.classList.remove("noscroll"); }
  $("rptClose").onclick = close;
  $("rpt").addEventListener("click", e => { if (e.target === $("rpt")) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("rpt").classList.contains("hidden")) close(); });

  function paint(){
    const body = $("rptBody");
    if (!LB.cfg()){ body.innerHTML = `<p>Reporting needs the club's server, which isn't set up here.</p>`; return; }
    if (!ST.lbUser){
      body.innerHTML = `<p>Sign in to report a problem. (Anyone can read the reports in Settings → Issues.)</p><button class="primary" id="rptSign">Sign in</button>`;
      $("rptSign").onclick = () => { close(); renderBoard(); }; return;
    }
    if (sent){
      body.innerHTML = `<p class="fb good">${ic("check", "ic-s")} Thanks! It's been sent.</p><p class="small">You can follow it in Settings → Issues. Your name isn't shown there.</p><button id="rptDone" class="primary">Done</button>`;
      $("rptDone").onclick = close; return;
    }
    const isQ = ctx.kind === "question";
    body.innerHTML = `
      ${isQ ? `<div class="rptq"><div class="small">${esc(subjName(ctx.subj))}${ctx.where ? " · " + esc(ctx.where) : ""}</div><div>${esc(ctx.q)}</div></div>` : ""}
      <div class="small rptl">What's wrong?</div>
      <div class="chips" id="rptReasons" role="radiogroup" aria-label="What's wrong">${(isQ ? REASONS : REASONS.slice(1)).map(r => `<button type="button" class="chip" role="radio" aria-checked="false" data-r="${esc(r)}">${esc(r)}</button>`).join("")}</div>
      <textarea id="rptText" maxlength="600" rows="4" placeholder="${isQ ? "Tell us what's off (e.g. the right answer should be…)" : "Describe the problem or idea"}"></textarea>
      <div class="rptfoot"><span class="small" id="rptErr"></span><button class="primary" id="rptSend">Send</button></div>
      <p class="small">Reports are public in Settings → Issues, without your name.</p>`;
    body.querySelectorAll("[data-r]").forEach(b => b.onclick = () => {
      reason = b.dataset.r;
      body.querySelectorAll("[data-r]").forEach(x => { x.classList.toggle("sel", x === b); x.setAttribute("aria-checked", x === b); });
    });
    $("rptSend").onclick = send;
    setTimeout(() => { const t = $("rptText"); if (t && !matchMedia("(pointer:coarse)").matches) t.focus(); }, 50);
  }

  async function send(){
    const text = $("rptText").value.trim(), err = $("rptErr"), b = $("rptSend");
    if (!reason && text.length < 3){ err.textContent = "Pick what's wrong or write a few words."; return; }
    b.disabled = true; err.textContent = "Sending…";
    try {
      await LB.init();
      if (!LB.user || !LB.name) throw new Error("signin");
      const F = LB.F, db = LB.db, ref = F.doc(F.collection(db, "issues"));
      const batch = F.writeBatch(db);
      batch.set(ref, {kind: ctx.kind, reason: reason || "", text: text.slice(0, 600), subj: ctx.subj || "", where: String(ctx.where || "").slice(0, 80),
        q: String(ctx.q || "").slice(0, 400), qk: String(ctx.qk || "").slice(0, 80), status: "open", reply: "", created: F.serverTimestamp(), updated: F.serverTimestamp()});
      batch.set(F.doc(db, "issueAuthors", ref.id), {uid: LB.user.uid, name: LB.name, created: F.serverTimestamp()});
      await batch.commit();
      mine.add(ref.id); sent = true; paint();
    } catch(e){
      b.disabled = false;
      err.textContent = e && e.message === "signin" ? "Sign in first." : "Couldn't send. Check your connection and try again.";
    }
  }

  /* ---------- Settings → Issues: everything reported, live ---------- */
  function openList(){
    show("issues");
    $("isList").innerHTML = `<p class="small">Loading…</p>`;
    paintFilter();
    if (!LB.cfg()){ $("isList").innerHTML = `<p class="small">Issues need the club's server, which isn't set up here.</p>`; return; }
    watch(rows => { list = rows; paintList(); }, () => { $("isList").innerHTML = `<p class="small">Couldn't load issues. Check your connection.</p>`; });
    // which ones are yours (only you can see that)
    if (ST.lbUser) LB.init().then(async () => {
      if (!LB.user) return;
      const F = LB.F, snap = await F.getDocs(F.query(F.collection(LB.db, "issueAuthors"), F.where("uid", "==", LB.user.uid)));
      snap.docs.forEach(d => mine.add(d.id)); paintList();
    }).catch(() => {});
  }
  // a live feed of issues, newest first (used here and on the admin page)
  function watch(cb, onErr){
    if (off){ off(); off = null; }
    LB.init().then(() => {
      const F = LB.F;
      off = F.onSnapshot(F.query(F.collection(LB.db, "issues"), F.orderBy("created", "desc"), F.limit(300)),
        snap => cb(snap.docs.map(d => Object.assign({id: d.id}, d.data()))), e => onErr && onErr(e));
    }).catch(e => onErr && onErr(e));
    return () => { if (off){ off(); off = null; } };
  }
  function stop(){ if (off){ off(); off = null; } }
  function paintFilter(){
    $("isFilter").querySelectorAll("button").forEach(b => { b.classList.toggle("on", b.dataset.f === filter); b.setAttribute("aria-checked", b.dataset.f === filter); });
  }
  $("isFilter").querySelectorAll("button").forEach(b => b.onclick = () => { filter = b.dataset.f; paintFilter(); paintList(); });
  const isOpen = r => r.status === "open" || r.status === "looking";
  function paintList(){
    const box = $("isList"); if (!box) return;
    const rows = list.filter(r => filter === "all" || (filter === "open" ? isOpen(r) : !isOpen(r)));
    const nOpen = list.filter(isOpen).length;
    $("isCount").textContent = list.length ? `${nOpen} open` : "";
    box.innerHTML = rows.length ? `<ul class="islist">${rows.map(item).join("")}</ul>` : `<p class="small">${filter === "open" ? "Nothing open right now." : "Nothing here yet."}</p>`;
  }
  function item(r){
    const when = tsMs(r.created), st = r.status || "open";
    return `<li class="issue">
      <div class="ishead"><span class="istat s-${esc(st)}">${esc(STATUS[st] || st)}</span><span class="small">${[subjName(r.subj), r.where, ago(when)].filter(Boolean).map(esc).join(" · ")}</span>${mine.has(r.id) ? `<em class="ismine">yours</em>` : ""}</div>
      ${r.q ? `<div class="isq">${esc(r.q)}</div>` : ""}
      <div class="istext">${r.reason ? `<b>${esc(r.reason)}</b>${r.text ? ": " : ""}` : ""}${esc(r.text)}</div>
      ${r.reply ? `<div class="isreply">${ic("chat", "ic-s")}<span>${esc(r.reply)}</span></div>` : ""}
    </li>`;
  }
  $("isBack").onclick = () => { stop(); renderSettings(); };
  $("isNew").onclick = () => open({kind: "general"});
  $("toIssues").onclick = openList;

  return {open, openList, watch, stop, STATUS, subjName};
})();
