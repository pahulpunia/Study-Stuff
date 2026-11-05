/* =====================================================================
   Terms engine: type the word/term from its definition, sentence, or audio.
   Used by subjects with type:"terms" (English vocab, later AP World terms…).
   Labels come from the subject's entry in subjects/registry.js.
   ===================================================================== */
const MODES = {
  def:   {name:"Definition → {Item}", desc:"Read it, spell it", icon:"card"},
  sent:  {name:"Fill in the Blank", desc:"Finish the sentence", icon:"pencil", needsSent:true},
  bee:   {name:"Spelling Bee", desc:"Hear it, spell it", icon:"speaker", needsSpeech:true},
  mixed: {name:"Mixed", desc:"Definitions and sentences", icon:"shuffle", needsSent:true},
  learn: {name:"Mastery", desc:"Misses come back until they stick", icon:"loop"},
  weak:  {name:"Weak {Item}s", desc:"Your 8 most-missed", icon:"target"},
  blitz: {name:"Blitz · 90s", desc:"Faster answers, more points", icon:"bolt"}
};
const BLITZ_MS = 90000;

let TSUBJ = null, CHAPTERS = [], CH = null, WORDS = [];
const L = () => Object.assign({setLabel:"Chapter", groupLabel:"Root", groupsLabel:"Roots", itemLabel:"word"}, TSUBJ || {});
const fill = t => t.replace(/\{item\}/g, L().itemLabel).replace(/\{Item\}/g, cap(L().itemLabel));
const bestKey = m => `${TSUBJ.id}|${CH.n}:${m}`;
const wkey = w => TSUBJ.id === "vocab" ? w : `${TSUBJ.id}|${w}`;       // vocab keeps its original keys
function wordAcc(w){ const r = ST.words[wkey(w)]; return r && r.t ? r.c / r.t : null; }
const sentForm = w => { const m = w.s && w.s.match(/\[([^\]]+)\]/); return m ? m[1] : null; };
const sentBlank = w => w.s.replace(/\[[^\]]+\]/, "____");
const sentPlain = w => w.s.replace(/\[([^\]]+)\]/, "$1");
const hasSentences = () => WORDS.some(w => w.s);

function useTerms(subj){
  TSUBJ = subj; CHAPTERS = Study.terms[subj.id] || [];
  const want = ST.sel[subj.id];
  CH = CHAPTERS.find(c => String(c.n) === String(want)) || CHAPTERS.find(c => String(c.n) === String(subj.defaultSet)) || CHAPTERS[0];
  WORDS = CH ? CH.words : [];
}
function setChapter(n){ CH = CHAPTERS.find(c => String(c.n) === String(n)) || CHAPTERS[0]; WORDS = CH.words; ST.sel[TSUBJ.id] = CH.n; save(); }

/* ---------- home ---------- */
function termsHome(subj){
  useTerms(subj);
  const sel = $("chapSel"); sel.innerHTML = "";
  $("chapLabel").textContent = L().setLabel;
  CHAPTERS.forEach(c => { const o = el("option", null, `${L().setLabel} ${c.n}: ${c.title} (${c.words.length} ${L().itemLabel}s)`); o.value = c.n; sel.appendChild(o); });
  if (!CH){ $("modes").innerHTML = `<div class="small">No ${L().setLabel.toLowerCase()}s yet.</div>`; return; }
  sel.value = String(CH.n);
  $("chapRoots").textContent = `${L().groupsLabel}: ` + CH.groups.map(g => g.r).join(" · ");
  const box = $("modes"); box.innerHTML = "";
  Object.entries(MODES).forEach(([key, m]) => {
    if (m.needsSpeech && !CAN_SPEAK) return;
    if (m.needsSent && !hasSentences()) return;
    const b = el("button", "mode");
    modeTile(b, m.icon, fill(m.name), fill(m.desc), ST.best[bestKey(key)]);
    b.onclick = () => startMode(key);
    box.appendChild(b);
  });
}
$("chapSel").onchange = e => { setChapter(e.target.value); termsHome(TSUBJ); Shell.update(); };

/* ---------- game ---------- */
let S = null;

function pickType(mode, w){
  let t = (mode === "def" || mode === "sent" || mode === "bee") ? mode : (Math.random() < 0.5 ? "def" : "sent");
  if (t === "sent" && !(w && w.s)) t = "def";
  return t;
}
function weakest(n){
  const scored = WORDS.map(w => { const r = ST.words[wkey(w.w)] || {c:0, t:0}; return {w, k:(r.c + 1) / (r.t + 2) + Math.random() * 0.01}; });
  return scored.sort((a, b) => a.k - b.k).slice(0, n).map(x => x.w);
}

function startMode(mode, override){
  clearTimers();
  let list = override || (mode === "weak" ? weakest(8) : WORDS);
  let queue = shuffle(list);
  if (!override && ["def","sent","bee","mixed"].includes(mode) && ST.settings.count) queue = queue.slice(0, ST.settings.count);
  S = {
    mode, queue: queue.map(w => ({w, type: pickType(mode, w)})), idx: 0,
    score: 0, streak: 0, bestStreak: 0, results: [], mastered: new Set(),
    total: queue.length, start: Date.now(), timer: null, adv: null, override: !!override
  };
  $("hudTimer").classList.toggle("hidden", mode !== "blitz");
  if (mode === "blitz"){ S.end = Date.now() + BLITZ_MS; S.timer = setInterval(tick, 200); tick(); }
  show("quiz");
  showQ();
}
function clearTimers(){ if (S){ clearInterval(S.timer); clearTimeout(S.adv); } }
function tick(){
  const rem = S.end - Date.now();
  $("hudTimer").innerHTML = ic("clock", "ic-s") + fmtTime(rem);
  $("prog").style.width = (100 - rem / BLITZ_MS * 100) + "%";
  if (rem <= 0) finish(); else Shell.session();
}

function showQ(){
  const q = S.queue[S.idx];
  S.hint = 0; S.attempt = 1; S.answered = false; S.qStart = Date.now();
  const wrap = $("promptWrap"); wrap.innerHTML = "";
  if (q.type === "def"){
    $("pos").textContent = q.w.pos;
    wrap.appendChild(el("p", "prompt", q.w.d));
  } else if (q.type === "sent"){
    $("pos").textContent = "fill in the blank · " + q.w.pos;
    const p = el("p", "prompt");
    const parts = sentBlank(q.w).split("____");
    p.appendChild(document.createTextNode(parts[0]));
    p.appendChild(el("span", "blank", " "));
    p.appendChild(document.createTextNode(parts[1] || ""));
    wrap.appendChild(p);
  } else {
    $("pos").textContent = "spelling bee · " + q.w.pos;
    const b = el("button", "play primary"); setLabel(b, "speaker", "Play " + L().itemLabel);
    b.type = "button"; b.onclick = () => { say(q.w.w); $("answer").focus(); };
    wrap.appendChild(b);
    say(q.w.w);
  }
  $("hint").classList.add("hidden"); $("hint").innerHTML = "";
  const a = $("answer"); a.value = ""; a.className = ""; a.readOnly = false; a.placeholder = `Type the ${L().itemLabel}…`;
  $("fb").innerHTML = ""; $("fb").className = "fb";
  $("check").textContent = "Check";
  $("skip").disabled = false;
  $("sayRow").classList.add("hidden");
  updateHintBtn();
  updateHud();
  a.focus();
}

function updateHud(){
  $("hudScore").textContent = S.score + " pts";
  $("hudStreak").innerHTML = S.streak >= 2 ? ic("flame", "ic-s") + S.streak : "";
  if (S.mode === "learn"){
    $("count").textContent = `Mastered ${S.mastered.size} of ${S.total}`;
    $("prog").style.width = (S.mastered.size / S.total * 100) + "%";
  } else if (S.mode === "blitz"){
    $("count").textContent = `Question ${S.idx + 1} · ${S.results.filter(r => r.ok).length} correct`;
  } else {
    $("count").textContent = `${cap(L().itemLabel)} ${S.idx + 1} of ${S.queue.length}`;
    $("prog").style.width = (S.idx / S.queue.length * 100) + "%";
  }
  Shell.session();
}

function updateHintBtn(){
  const q = S.queue[S.idx];
  const labels = ["Hint: letters", "Hint: 1st letter", q.type === "def" ? (q.w.s ? "Hint: sentence" : "Hint: " + L().groupLabel.toLowerCase()) : "Hint: definition"];
  const b = $("hintBtn");
  b.textContent = S.hint < 3 ? labels[S.hint] : "No more hints";
  b.disabled = S.hint >= 3 || S.answered;
}
$("hintBtn").onclick = () => {
  if (S.answered || S.hint >= 3) return;
  S.hint++;
  const q = S.queue[S.idx], w = q.w.w, box = $("hint");
  box.innerHTML = "";
  const letters = w.split("").map((c, k) => c === " " ? " " : (S.hint >= 2 && k === 0) ? c : "_").join(" ");
  box.appendChild(el("span", "letters", letters));
  box.appendChild(document.createTextNode(`${w.replace(/\s/g, "").length} letters`));
  if (S.hint >= 3){
    const extra = q.type === "def" ? (q.w.s ? "\n" + sentBlank(q.w) : `\n${L().groupLabel}: ` + q.w.r) : "\nDefinition: " + q.w.d;
    box.appendChild(document.createTextNode(extra));
  }
  box.classList.remove("hidden");
  updateHintBtn();
  $("answer").focus();
};

function isCorrect(typed, q){
  const t = norm(typed);
  const ok = [q.w.w, ...q.w.alts];
  if (q.type === "sent" && sentForm(q.w)) ok.push(sentForm(q.w));
  return ok.some(a => norm(a) === t);
}

function calcPoints(){
  let p = 100 - 20 * S.hint;
  if (S.attempt === 2) p *= 0.5;
  p *= 1 + Math.min(S.streak, 10) * 0.1;
  if (S.mode === "blitz"){ const secs = (Date.now() - S.qStart) / 1000; p += Math.max(0, 50 - secs * 5); }
  return Math.max(10, Math.round(p));
}

$("form").addEventListener("submit", e => {
  e.preventDefault();
  if (S.answered){ next(); return; }
  const typed = $("answer").value.trim();
  if (!typed){ $("answer").focus(); return; }
  const q = S.queue[S.idx];
  if (isCorrect(typed, q)) return reveal(true, typed);
  const dist = diffOps(norm(typed), norm(q.w.w)).dist;
  if (S.attempt === 1 && ST.settings.second && S.mode !== "blitz"){
    S.attempt = 2;
    const a = $("answer"); a.className = "retry"; a.classList.add("shake");
    setTimeout(() => a.classList.remove("shake"), 520);
    $("fb").className = "fb warn";
    $("fb").textContent = dist === 1 ? "So close, just 1 letter off. Try again (half points)."
                        : dist === 2 ? "2 letters off. Try again (half points)."
                        : "Not it. One more try (half points).";
    a.select();
    return;
  }
  reveal(false, typed);
});
$("skip").onclick = () => { if (!S.answered) reveal(false, ""); };
$("sayBtn").onclick = () => say(S.queue[S.idx].w.w);
["hintBtn","skip","check","sayBtn"].forEach(id => $(id).addEventListener("mousedown", e => e.preventDefault()));
$("quit").onclick = () => {
  clearTimers(); $("answer").blur();
  if (S && S.results && S.results.length && !S.sent){ S.sent = true; LB.submit(TSUBJ.id, S.score); }   // partway points still count
  renderHome();
};

function reveal(ok, typed){
  const q = S.queue[S.idx], w = q.w.w;
  S.answered = true;
  const a = $("answer"); a.readOnly = true;
  $("skip").disabled = true; updateHintBtn();
  const rec = ST.words[wkey(w)] || (ST.words[wkey(w)] = {c:0, t:0});
  rec.t++; if (ok) rec.c++;
  const fb = $("fb"); fb.innerHTML = "";
  let pts = 0;
  if (ok){
    S.streak++; S.bestStreak = Math.max(S.bestStreak, S.streak);
    pts = calcPoints(); S.score += pts;
    if (S.mode === "learn") S.mastered.add(w);
    a.className = "good"; fb.className = "fb good";
    fb.innerHTML = `${ic("check", "ic-s")} Correct! +${pts}` + (S.streak >= 2 ? `<span class="fbstreak">${ic("flame", "ic-s")}${S.streak} in a row</span>` : "");
  } else {
    S.streak = 0;
    a.className = "bad"; fb.className = "fb bad";
    fb.insertAdjacentHTML("beforeend", typed ? ic("close", "ic-s") + "Not quite. " : "Skipped. ");
    const n = el("span", "norm", `The ${L().itemLabel} is `); n.appendChild(el("b", null, w)); fb.appendChild(n);
    if (typed && diffOps(norm(typed), norm(w)).dist <= Math.ceil(w.length / 2)){
      fb.appendChild(document.createElement("br"));
      fb.appendChild(renderDiff(norm(typed), norm(w)));
      fb.appendChild(el("div", "legend", "red strikethrough = remove · green underline = add"));
    }
    if (S.mode === "learn"){
      const pos = Math.min(S.queue.length, S.idx + 3);
      S.queue.splice(pos, 0, {w: q.w, type: pickType("learn", q.w)});
    }
  }
  if (q.w.r){ const rl = el("div", "rootline"); rl.appendChild(document.createTextNode(L().groupLabel + ": ")); rl.appendChild(el("b", null, q.w.r)); fb.appendChild(rl); }
  S.results.push({w, typed, ok, hints: S.hint, attempt: S.attempt, pts});
  save();
  updateHud();
  if (CAN_SPEAK) $("sayRow").classList.remove("hidden");
  const last = S.mode !== "blitz" && S.idx >= S.queue.length - 1;
  $("check").textContent = last ? "See results" : "Next →";
  a.placeholder = "Tap Go or Next →";
  if (S.mode === "blitz"){ S.adv = setTimeout(next, ok ? 550 : 1600); }
}

function next(){
  clearTimeout(S.adv);
  S.idx++;
  if (S.mode === "blitz"){
    if (Date.now() >= S.end) return finish();
    if (S.idx >= S.queue.length) S.queue = S.queue.concat(shuffle(WORDS).map(w => ({w, type: pickType("mixed", w)})));
    return showQ();
  }
  if (S.idx >= S.queue.length) return finish();
  showQ();
}

/* ---------- results ---------- */
function finish(){
  if (!S || S.finished) return;
  S.finished = true; clearTimers();
  $("answer").blur();
  const answered = S.results.length, correct = S.results.filter(r => r.ok).length;
  const acc = answered ? Math.round(correct / answered * 100) : 0;
  const elapsed = S.mode === "blitz" ? BLITZ_MS : Date.now() - S.start;
  let newBest = false;
  if (!S.override && S.score > (ST.best[bestKey(S.mode)] || 0)){ ST.best[bestKey(S.mode)] = S.score; newBest = true; }
  ST.bestStreak = Math.max(ST.bestStreak || 0, S.bestStreak);
  save();
  if (!S.sent){ S.sent = true; LB.submit(TSUBJ.id, S.score); }

  const mname = fill(MODES[S.mode].name);
  $("endMode").textContent = `${TSUBJ.name} · ${L().setLabel} ${CH.n} · ${mname}` + (S.override ? " · retry" : "");
  countUp($("endScore"), S.score);
  $("newBest").classList.toggle("hidden", !newBest);
  $("endAcc").textContent = acc + "%";
  $("endStreak").innerHTML = ic("flame", "ic-s") + S.bestStreak;
  $("endTime").textContent = fmtTime(elapsed);
  $("bragText").classList.add("hidden");
  setLabel($("brag"), "copy", "Copy score to send");

  const missed = [...new Set(S.results.filter(r => !r.ok).map(r => r.w))];
  $("retryMissed").classList.toggle("hidden", missed.length === 0);
  $("retryMissed").onclick = () => startMode(["def","sent","bee"].includes(S.mode) ? S.mode : (hasSentences() ? "mixed" : "def"), WORDS.filter(w => missed.includes(w.w)));
  const replayMode = S.mode, replayList = S.override ? WORDS.filter(w => S.results.some(r => r.w === w.w)) : null;
  $("again").onclick = () => startMode(replayMode, replayList);

  const ul = $("resList"); ul.innerHTML = "";
  if (!answered) ul.appendChild(el("li", "small", "No answers this round."));
  S.results.forEach(r => {
    const li = el("li");
    const mk = el("span", r.ok ? "ok" : "no"); mk.innerHTML = ic(r.ok ? "check" : "close", "ic-s"); li.appendChild(mk);
    li.appendChild(el("b", null, r.w));
    const notes = [];
    if (r.ok) notes.push("+" + r.pts);
    if (r.hints) notes.push(r.hints + " hint" + (r.hints > 1 ? "s" : ""));
    if (r.attempt === 2 && r.ok) notes.push("2nd try");
    if (!r.ok && !r.typed) notes.push("skipped");
    if (notes.length) li.appendChild(el("span", "small", "  " + notes.join(" · ")));
    if (!r.ok && r.typed && diffOps(norm(r.typed), norm(r.w)).dist <= Math.ceil(r.w.length / 2)){ li.appendChild(document.createElement("br")); li.appendChild(renderDiff(norm(r.typed), norm(r.w))); }
    ul.appendChild(li);
  });

  S.bragMsg = `${TSUBJ.name} ${L().setLabel} ${CH.n} (${mname}): ${S.score} pts, ${correct}/${answered} right, best streak ${S.bestStreak}. Beat that.`;
  show("end");
  if (newBest || (answered >= 5 && correct === answered)) confetti();
}
$("home2").onclick = renderHome;
$("brag").onclick = () => copyText(S.bragMsg, $("brag"), $("bragText"));

/* ---------- study list ---------- */
function termsStudy(subj){
  useTerms(subj);
  const box = $("studyList"); box.innerHTML = "";
  $("studyTitle").textContent = `${L().setLabel} ${CH.n}: ${CH.title}`;
  CH.groups.forEach(g => {
    box.appendChild(el("div", "grouphead", g.r));
    WORDS.filter(w => w.r === g.r).forEach(w => {
      const d = el("div", "word");
      const top = el("div"); top.appendChild(el("span", "w", w.w));
      top.appendChild(el("span", "small", "  " + w.pos));
      if (CAN_SPEAK){ const b = el("button", "say"); b.innerHTML = ic("speaker", "ic-s"); b.setAttribute("aria-label", "Hear " + w.w); b.onclick = () => say(w.w); top.appendChild(b); }
      d.appendChild(top);
      d.appendChild(el("div", "d", w.d));
      if (w.s) d.appendChild(el("div", "s", sentPlain(w)));
      box.appendChild(d);
    });
  });
  show("study");
}

/* ---------- stats ---------- */
function termsStats(subj){
  useTerms(subj);
  const bl = $("bestList"); bl.innerHTML = "";
  $("statsTitle").textContent = `${L().setLabel} ${CH.n}: best scores`;
  $("accTitle").innerHTML = `${cap(L().itemLabel)} accuracy <span class="small">(weakest first)</span>`;
  Object.entries(MODES).forEach(([k, m]) => {
    if (m.needsSpeech && !CAN_SPEAK) return;
    if (m.needsSent && !hasSentences()) return;
    const row = el("div", null); row.style.cssText = "display:flex;justify-content:space-between;padding:4px 0";
    const nm = el("span", "srow"); nm.innerHTML = ic(m.icon, "ic-s") + escHTML(fill(m.name)); row.appendChild(nm);
    row.appendChild(el("b", null, ST.best[bestKey(k)] ? ST.best[bestKey(k)] + " pts" : "–"));
    bl.appendChild(row);
  });
  const sr = el("div", "small srow"); sr.innerHTML = "Longest streak ever: " + ic("flame", "ic-s") + (ST.bestStreak || 0); sr.style.marginTop = "8px"; bl.appendChild(sr);
  const al = $("accList"); al.innerHTML = "";
  WORDS.slice().sort((a, b) => { const x = wordAcc(a.w), y = wordAcc(b.w); return (x == null ? 2 : x) - (y == null ? 2 : y); }).forEach(w => {
    const r = ST.words[wkey(w.w)], acc = wordAcc(w.w);
    const d = el("div", "word");
    const top = el("div"); top.style.cssText = "display:flex;justify-content:space-between";
    top.appendChild(el("span", "w", w.w));
    top.appendChild(el("span", "small", acc == null ? "not tried yet" : `${Math.round(acc * 100)}%  (${r.c}/${r.t})`));
    d.appendChild(top);
    const bar = el("div", "acc"), f = el("div");
    f.style.width = (acc == null ? 0 : acc * 100) + "%";
    f.style.background = acc == null ? "transparent" : acc >= .8 ? "var(--good)" : acc >= .5 ? "var(--warn)" : "var(--bad)";
    bar.appendChild(f); d.appendChild(bar); al.appendChild(d);
  });
  $("resetStats").textContent = `Reset ${subj.name} stats`;
  $("resetStats").dataset.armed = "";
  show("stats");
}
function termsReset(subj){
  for (const k of Object.keys(ST.best)) if (k.startsWith(subj.id + "|")) delete ST.best[k];
  for (const k of Object.keys(ST.words)) if (subj.id === "vocab" ? !k.includes("|") : k.startsWith(subj.id + "|")) delete ST.words[k];
}

Study.engines.terms = {home: termsHome, study: termsStudy, stats: termsStats, reset: termsReset};
