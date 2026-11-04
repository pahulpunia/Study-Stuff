/* =====================================================================
   Desktop shell: left sidebar (subjects + pages) and right panel
   (progress for what you're studying, or the live round while playing).
   Both are hidden on phones by CSS, so none of this costs anything there.
   ===================================================================== */
const Shell = (() => {
  const wide = () => matchMedia("(min-width: 960px)").matches;
  const xwide = () => matchMedia("(min-width: 1280px)").matches;
  let screen = "home";

  /* ---------- left rail ---------- */
  function rail(){
    if (!wide()) return;
    const subj = Study.subject(), isTerms = subj && subj.type === "terms";
    const r = $("rail");
    r.innerHTML = `
      <div class="brand"><span class="logo" aria-hidden="true"><svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8"/><path d="M5 19l3.2-1.5 3.8 8 4.5-18.5H27"/></svg></span><span>Study Quiz</span></div>
      <div class="rlabel">Subjects</div>
      <nav class="rnav" id="railSubj">${Study.subjects().map(s =>
        `<button data-s="${s.id}" class="${s.id === ST.subject ? "on" : ""}">${ic(s.icon)}<span>${escHTML(s.name)}</span></button>`).join("")}</nav>
      <div class="rlabel">This subject</div>
      <nav class="rnav" id="railUtil">
        <button data-p="home" class="${screen === "home" ? "on" : ""}">${ic("home")}<span>Modes</span></button>
        <button data-p="study" class="${["study","mnotes"].includes(screen) ? "on" : ""}">${ic(isTerms ? "book" : "notes")}<span>${isTerms ? "Study list" : "Notes"}</span></button>
        <button data-p="stats" class="${screen === "stats" ? "on" : ""}">${ic("chart")}<span>Stats</span></button>
      </nav>
      <nav class="rnav rbottom">
        <button data-p="settings" class="${screen === "settings" ? "on" : ""}">${ic("gear")}<span>Settings</span></button>
      </nav>`;
    r.querySelectorAll("[data-s]").forEach(b => b.onclick = () => { if (inRound() && !confirmLeave()) return; ST.subject = b.dataset.s; save(); renderHome(); });
    r.querySelectorAll("[data-p]").forEach(b => b.onclick = () => {
      if (inRound() && !confirmLeave()) return;
      const p = b.dataset.p, s = Study.subject();
      if (p === "home") renderHome();
      else if (p === "settings") renderSettings();
      else Study.load(s).then(() => Study.engines[s.type][p](s));
    });
  }
  const inRound = () => screen === "quiz" || screen === "mquiz";
  function confirmLeave(){
    // leaving mid-round from the sidebar ends the round, same as Quit
    if (screen === "quiz"){ clearTimers(); return true; }
    return true;
  }

  /* ---------- right panel ---------- */
  function ring(frac, big, small){
    const R = 34, C = 2 * Math.PI * R, off = C * (1 - Math.max(0, Math.min(1, frac || 0)));
    return `<div class="ring"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="${R}" class="rbg"/><circle cx="40" cy="40" r="${R}" class="rfg" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"/></svg><div class="rtxt"><b>${big}</b><span>${small}</span></div></div>`;
  }
  const pct = x => x == null ? "new" : Math.round(x * 100) + "%";

  function summaryTerms(subj){
    useTerms(subj);
    if (!CH) return "";
    const tried = WORDS.filter(w => wordAcc(w.w) != null);
    const strong = WORDS.filter(w => (wordAcc(w.w) || 0) >= 0.8).length;
    const weak = WORDS.slice().sort((a, b) => (wordAcc(a.w) ?? -1) - (wordAcc(b.w) ?? -1)).filter(w => (wordAcc(w.w) ?? 0) < 0.8).slice(0, 4);
    const bests = Object.entries(MODES).map(([k, m]) => [m, ST.best[bestKey(k)]]).filter(x => x[1]).sort((a, b) => b[1] - a[1]).slice(0, 3);
    return `
      <div class="ctitle">${escHTML(L().setLabel)} ${escHTML(CH.n)}: ${escHTML(CH.title)}</div>
      ${ring(strong / WORDS.length, `${strong}/${WORDS.length}`, "mastered")}
      <div class="cstats"><div><b>${tried.length}</b><span>tried</span></div><div><b>${ic("flame", "ic-s")}${ST.bestStreak || 0}</b><span>best streak</span></div></div>
      ${weak.length ? `<div class="clabel">Needs work</div><ul class="clist">${weak.map(w => `<li><span>${escHTML(w.w)}</span><em>${pct(wordAcc(w.w))}</em></li>`).join("")}</ul>
        <button class="grow cbtn" id="ctxGo">${ic("target")}<span>Practice these</span></button>` : `<div class="cnote">${ic("check", "ic-s")} Every ${escHTML(L().itemLabel)} is at 80%+.</div>`}
      ${bests.length ? `<div class="clabel">Best scores</div><ul class="clist">${bests.map(([m, v]) => `<li><span>${ic(m.icon, "ic-s")}${escHTML(fill(m.name))}</span><em>${v}</em></li>`).join("")}</ul>` : ""}`;
  }
  function summaryProblems(subj){
    useProblems(subj);
    const items = mItems(mSec()); if (!items.length) return "";
    const strong = items.filter(q => (mAcc(q.id) || 0) >= 0.8).length;
    const tried = items.filter(q => mAcc(q.id) != null).length;
    const weak = items.filter(q => mAcc(q.id) != null && mAcc(q.id) < 0.8).sort((a, b) => mAcc(a.id) - mAcc(b.id)).slice(0, 4);
    const bests = Object.entries(MMODES).map(([k, m]) => [m, ST.mbest[mBestKey(k)]]).filter(x => x[1]).sort((a, b) => b[1] - a[1]).slice(0, 3);
    return `
      <div class="ctitle">${escHTML(mSecInfo().name)}</div>
      ${ring(strong / items.length, `${strong}/${items.length}`, "mastered")}
      <div class="cstats"><div><b>${tried}</b><span>tried</span></div><div><b>${items.length - tried}</b><span>not yet</span></div></div>
      ${weak.length ? `<div class="clabel">Needs work</div><ul class="clist">${weak.map(q => `<li><span>${escHTML(q.src)}</span><em>${pct(mAcc(q.id))}</em></li>`).join("")}</ul>
        <button class="grow cbtn" id="ctxGo">${ic("target")}<span>Practice these</span></button>` : tried ? `<div class="cnote">${ic("check", "ic-s")} Nothing below 80% here.</div>` : `<div class="cnote">Start a round and your progress shows up here.</div>`}
      ${bests.length ? `<div class="clabel">Best scores</div><ul class="clist">${bests.map(([m, v]) => `<li><span>${ic(m.icon, "ic-s")}${escHTML(m.name)}</span><em>${v}</em></li>`).join("")}</ul>` : ""}`;
  }
  function sessionView(){
    const R = screen === "quiz" ? S : M; if (!R) return "";
    const n = R.results.length, ok = R.results.filter(r => r.ok).length;
    let frac, big, small;
    if (screen === "quiz" && R.mode === "blitz"){ const rem = Math.max(0, R.end - Date.now()); frac = rem / BLITZ_MS; big = fmtTime(rem); small = "left"; }
    else if (R.mode === "learn" || R.mode === "mastery"){ frac = R.mastered.size / R.total; big = `${R.mastered.size}/${R.total}`; small = "mastered"; }
    else if (R.mode === "drill"){ frac = n ? ok / n : 0; big = n ? Math.round(ok / n * 100) + "%" : "–"; small = "right"; }
    else { frac = n / R.queue.length; big = `${n}/${R.queue.length}`; small = "done"; }
    const log = R.results.slice(-8).reverse();
    return `
      <div class="ctitle">This round</div>
      ${ring(frac, big, small)}
      <div class="cstats"><div><b>${R.score}</b><span>points</span></div><div><b>${ic("flame", "ic-s")}${R.streak}</b><span>streak</span></div><div><b>${n ? Math.round(ok / n * 100) : 0}%</b><span>right</span></div></div>
      ${log.length ? `<div class="clabel">Answers</div><ul class="clist clog">${log.map(r => `<li class="${r.ok ? "ok" : "no"}">${ic(r.ok ? "check" : "close", "ic-s")}<span>${escHTML(screen === "quiz" ? r.w : r.src)}</span><em>${r.ok ? "+" + r.pts : ""}</em></li>`).join("")}</ul>` : `<div class="cnote">Your answers will show up here.</div>`}`;
  }
  function ctx(){
    if (!xwide()) return;
    const box = $("ctx"), subj = Study.subject();
    if (!subj || !Study.loaded[subj.id]) { box.innerHTML = ""; return; }
    let html = "";
    try {
      if (inRound()) html = sessionView();
      else html = subj.type === "terms" ? summaryTerms(subj) : summaryProblems(subj);
    } catch(e){ html = ""; }
    box.innerHTML = html ? `<div class="cpanel">${html}</div>` : "";
    const go = $("ctxGo");
    if (go) go.onclick = () => subj.type === "terms" ? startMode("weak") : mStart("weak");
  }

  function update(id){ if (id) screen = id; rail(); ctx(); }
  let raf = 0;
  const session = () => { if (!xwide() || !inRound()) return; cancelAnimationFrame(raf); raf = requestAnimationFrame(ctx); };
  window.addEventListener("resize", () => { rail(); ctx(); movePill(); });
  return {update, session};
})();

/* every screen change refreshes the sidebar + panel */
const _show = show;
show = function(id){ _show(id); Shell.update(id); };
