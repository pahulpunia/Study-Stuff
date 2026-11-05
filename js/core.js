/* =====================================================================
   Study Stuff — core: storage, helpers, subject registry + loader, home
   ===================================================================== */

/* ---------- storage ---------- */
const KEY = "genVocabQuiz.v2";
let ST = {best:{}, words:{}, bestStreak:0, settings:{count:0, second:true}, sel:{}, mbest:{}, mq:{}, subject:null};
try { const saved = JSON.parse(localStorage.getItem(KEY)); if (saved) ST = Object.assign(ST, saved); } catch(e){}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(ST)); } catch(e){} }

/* one-time upgrades from the single-file version */
(function migrate(){
  if (!ST.sel) ST.sel = {};
  if (ST.settings && ST.settings.ch && ST.sel.vocab == null){ ST.sel.vocab = ST.settings.ch; delete ST.settings.ch; }
  if (ST.subject === "math") ST.subject = "math3";
  if (ST.msec && ST.sel.math3 == null){ ST.sel.math3 = /^(rev|all|4\.)/.test(ST.msec) ? "u4:" + ST.msec : ST.msec; delete ST.msec; }
  for (const k of Object.keys(ST.best || {})){
    if (k.includes("|")) continue;
    const nk = k.includes(":") ? "vocab|" + k : "vocab|2:" + k;
    ST.best[nk] = ST.best[k]; delete ST.best[k];
  }
  for (const k of Object.keys(ST.mbest || {})){
    if (k.includes("|")) continue;
    ST.mbest["math3|u4:" + k] = ST.mbest[k]; delete ST.mbest[k];
  }
  if (ST.settings.count === 15) ST.settings.count = 0;
  save();
})();

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
function shuffle(a){ a = a.slice(); for (let k = a.length - 1; k > 0; k--){ const j = Math.floor(Math.random() * (k + 1)); [a[k], a[j]] = [a[j], a[k]]; } return a; }
const CAN_SPEAK = ("speechSynthesis" in window) && typeof SpeechSynthesisUtterance !== "undefined";
function say(word){ if (!CAN_SPEAK) return; try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(word); u.lang = "en-US"; u.rate = 0.85; speechSynthesis.speak(u); } catch(e){} }
const norm = t => t.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase().replace(/\s+/g, " ");
function fmtTime(ms){ const s = Math.max(0, Math.round(ms / 1000)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const escHTML = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

const SCREENS = ["home","quiz","end","study","stats","mquiz","mend","mnotes","settings", "write", "board"];
function show(id){
  SCREENS.forEach(s => $(s).classList.toggle("hidden", s !== id));
  window.scrollTo(0, 0);
}

/* Levenshtein with backtrace: ops describe how to turn typed into correct */
function diffOps(a, b){
  const n = a.length, m = b.length, dp = [];
  for (let i = 0; i <= n; i++){ dp[i] = [i]; }
  for (let j = 0; j <= m; j++){ dp[0][j] = j; }
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++)
    dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
  const ops = []; let i = n, j = m;
  while (i > 0 || j > 0){
    if (i > 0 && j > 0 && a[i-1] === b[j-1] && dp[i][j] === dp[i-1][j-1]){ ops.push(["=", a[i-1]]); i--; j--; }
    else if (i > 0 && j > 0 && dp[i][j] === dp[i-1][j-1] + 1){ ops.push(["~", a[i-1], b[j-1]]); i--; j--; }
    else if (i > 0 && dp[i][j] === dp[i-1][j] + 1){ ops.push(["-", a[i-1]]); i--; }
    else { ops.push(["+", b[j-1]]); j--; }
  }
  return {ops: ops.reverse(), dist: dp[n][m]};
}
function renderDiff(typed, correct){
  const box = el("span", "diff");
  diffOps(typed, correct).ops.forEach(op => {
    if (op[0] === "=") box.appendChild(document.createTextNode(op[1]));
    else if (op[0] === "~"){ box.appendChild(el("span", "x", op[1])); box.appendChild(el("span", "add", op[2])); }
    else if (op[0] === "-") box.appendChild(el("span", "x", op[1]));
    else box.appendChild(el("span", "add", op[1]));
  });
  return box;
}

function copyText(text, btn, box){
  const fallback = () => { box.value = text; box.classList.remove("hidden"); box.select(); btn.textContent = "Select and copy below"; };
  try { navigator.clipboard.writeText(text).then(() => setLabel(btn, "check", "Copied")).catch(fallback); } catch(e){ fallback(); }
}

/* ---------- confetti ---------- */
function confetti(){
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = $("confetti"), ctx = c.getContext("2d");
  c.width = innerWidth; c.height = innerHeight;
  const colors = ["#2F54EB","#1F9D55","#D9730D","#FFD43B","#E5484D","#AE3EC9"];
  const P = Array.from({length: 140}, () => ({
    x: c.width / 2 + (Math.random() - .5) * 120, y: c.height * 0.35,
    vx: (Math.random() - .5) * 12, vy: -Math.random() * 12 - 4,
    s: 5 + Math.random() * 5, r: Math.random() * 6, vr: (Math.random() - .5) * .3,
    col: colors[Math.floor(Math.random() * colors.length)]
  }));
  let frames = 0;
  (function draw(){
    ctx.clearRect(0, 0, c.width, c.height);
    P.forEach(p => {
      p.vy += 0.35; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.col; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore();
    });
    if (++frames < 150) requestAnimationFrame(draw); else ctx.clearRect(0, 0, c.width, c.height);
  })();
}

/* =====================================================================
   Subjects: subjects/registry.js lists them; each subject's files are
   loaded the first time you open it. Content files call Study.addTerms
   or Study.addUnit (see ADDING-CONTENT.md).
   ===================================================================== */
const Study = {
  terms: {},        // subject id -> [chapter, …]
  problems: {},     // subject id -> {units:[…], items:[…]}
  loaded: {},       // subject id -> Promise
  engines: {},      // type -> {home, study, stats}

  subjects(){ return window.SUBJECTS || []; },
  subject(id){ return this.subjects().find(s => s.id === (id || ST.subject)) || this.subjects()[0]; },
  /* class groups (Honors English 10, Math…) with their subjects; subjects without a group go under "Other" */
  groups(){
    const subs = this.subjects(), gs = (window.GROUPS || []).map(g => Object.assign({}, g, {subjects: subs.filter(s => s.group === g.id)}));
    const loose = subs.filter(s => !gs.some(g => g.id === s.group));
    if (loose.length) gs.push({id: "other", name: "Other", icon: "book", subjects: loose});
    return gs.filter(g => g.subjects.length);
  },
  groupOf(id){ return this.groups().find(g => g.subjects.some(s => s.id === (id || ST.subject))); },

  load(subj){
    if (this.loaded[subj.id]) return this.loaded[subj.id];
    const p = subj.files.reduce((chain, f) => chain.then(() => loadScript(f)), Promise.resolve());
    this.loaded[subj.id] = p;
    p.catch(() => { delete this.loaded[subj.id]; });
    return p;
  },

  /* ---- terms (vocab-style) ---- */
  addTerms(subjId, chapters){
    const list = this.terms[subjId] || (this.terms[subjId] = []);
    chapters.forEach(c => {
      c.words = [];
      c.groups.forEach(g => g.w.forEach(([w, pos, d, s, alts]) => c.words.push({w, pos, d, s, r: g.r, alts: alts || []})));
      list.push(c);
    });
  },

  /* ---- problems (math-style) ---- */
  addUnit(subjId, unit){
    const bucket = this.problems[subjId] || (this.problems[subjId] = {units: [], items: []});
    unit.items = [];
    unit.drills = unit.drills || {};
    const kit = makeKit(subjId, unit);          // defined in problems.js
    if (unit.problems) unit.problems(kit);
    bucket.units.push(unit);
    bucket.items.push(...unit.items);
  }
};

function loadScript(src){
  return new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = src; s.onload = res; s.onerror = () => rej(new Error("Couldn't load " + src));
    document.head.appendChild(s);
  });
}

/* ---------- home ---------- */
function renderSubjBar(){
  const bar = $("subjBar"), groups = Study.groups(), cur = Study.groupOf();
  const sig = groups.map(g => g.id).join();
  if (bar.dataset.sig !== sig){
    bar.innerHTML = '<span class="pill" aria-hidden="true"></span>';
    groups.forEach(g => {
      const b = el("button"); b.dataset.g = g.id; b.setAttribute("role", "tab");
      b.innerHTML = ic(g.icon) + `<span class="sl">${escHTML(g.name)}</span><span class="ss">${escHTML(g.short || g.name)}</span>`;
      b.title = g.name;
      // a class group opens the subject you last used in it
      b.onclick = () => { const last = (ST.lastInGroup || {})[g.id]; ST.subject = g.subjects.some(s => s.id === last) ? last : g.subjects[0].id; save(); renderHome(); };
      bar.appendChild(b);
    });
    bar.dataset.sig = sig;
  }
  bar.querySelectorAll("button").forEach(b => { const on = cur && b.dataset.g === cur.id; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); });
  bar.classList.toggle("many", groups.length > 2);
  bar.classList.toggle("lots", groups.length > 3);
  bar.classList.toggle("five", groups.length > 4);
  // second row: the subjects inside this group (only when there's a choice)
  const sub = $("subSubj"), list = cur ? cur.subjects : [];
  sub.classList.toggle("hidden", list.length < 2);
  sub.innerHTML = list.length < 2 ? "" : list.map(s => `<button data-s="${s.id}" class="${s.id === ST.subject ? "on" : ""}" role="tab" aria-selected="${s.id === ST.subject}">${escHTML(s.inGroup || s.short || s.name)}</button>`).join("");
  sub.querySelectorAll("button").forEach(b => b.onclick = () => { ST.subject = b.dataset.s; save(); renderHome(); });
  movePill();
}
// the highlight slides to the chosen subject
function movePill(){
  const bar = $("subjBar"), on = bar.querySelector(".on"), pill = bar.querySelector(".pill");
  if (!on || !pill || !on.offsetWidth) return;
  pill.style.width = on.offsetWidth + "px"; pill.style.height = on.offsetHeight + "px";
  pill.style.transform = `translate(${on.offsetLeft}px, ${on.offsetTop}px)`;
  requestAnimationFrame(() => bar.classList.add("ready"));
}

/* a mode button: icon tile, name, one-line description, best score */
function modeTile(b, icon, name, desc, best){
  b.innerHTML = `<span class="mico">${ic(icon)}</span><span class="mtxt"><b>${escHTML(name)}</b><span>${escHTML(desc)}</span></span>` +
                (best ? `<i class="mbest" title="Best score">${best}</i>` : "");
}

/* results score counts up (skipped if reduced motion is on) */
function countUp(elm, v){
  if (!v || (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)){ elm.textContent = v; return; }
  const t0 = performance.now(), dur = 700;
  (function step(t){ const k = Math.max(0, Math.min(1, (t - t0) / dur)), e = 1 - Math.pow(1 - k, 3); elm.textContent = Math.round(v * e); if (k < 1) requestAnimationFrame(step); })(t0);
}

function renderHome(){
  const list = Study.subjects(); if (!list.length) return;
  if (!list.some(s => s.id === ST.subject)) ST.subject = list[0].id;
  const subj = Study.subject();
  const isTerms = subj.type === "terms";
  $("termsHome").classList.toggle("hidden", !isTerms);
  $("probHome").classList.toggle("hidden", isTerms);
  setLabel($("toStudy"), isTerms ? "book" : "notes", isTerms ? "Study list" : "Notes");
  const blurb = $("homeBlurb" + (isTerms ? "T" : "P")); blurb.textContent = subj.blurb || ""; blurb.classList.toggle("hidden", !subj.blurb);
  const grp = Study.groupOf(); if (grp){ ST.lastInGroup = ST.lastInGroup || {}; ST.lastInGroup[grp.id] = subj.id; save(); }
  show("home");
  if (typeof paintJoin === "function") paintJoin();
  renderSubjBar();
  $("pageHead").innerHTML = `<span class="phico">${ic(subj.icon)}</span><span>${escHTML(subj.name)}</span>`;
  const box = isTerms ? $("modes") : $("mmodes");
  if (!Study.loaded[subj.id] || !(isTerms ? Study.terms[subj.id] : Study.problems[subj.id])) box.innerHTML = `<div class="small">Loading ${escHTML(subj.name)}…</div>`;
  Study.load(subj).then(() => {
    if (ST.subject !== subj.id) return;
    Study.engines[subj.type].home(subj);
    Shell.update();
  }).catch(err => {
    box.innerHTML = `<div class="small">Couldn't load ${escHTML(subj.name)}. Check your connection.</div>`;
  });
}

$("countSel").onchange = e => { ST.settings.count = +e.target.value; save(); };
$("secondChance").onchange = e => { ST.settings.second = e.target.checked; save(); };
$("toStudy").onclick = () => Study.engines[Study.subject().type].study(Study.subject());
$("toStats").onclick = () => Study.engines[Study.subject().type].stats(Study.subject());
$("toSettings").onclick = () => renderSettings();
$("toJoin").onclick = () => openJoin();
document.querySelectorAll("[data-home]").forEach(b => b.onclick = renderHome);
$("resetStats").onclick = e => {
  const b = e.currentTarget, subj = Study.subject();
  if (!b.dataset.armed){ b.dataset.armed = "1"; b.textContent = "Tap again to confirm reset"; return; }
  Study.engines[subj.type].reset(subj);
  ST.resets = ST.resets || {}; ST.resets[subj.id] = Date.now(); save();   // so synced devices clear it too
  if (ST.lbUser) LB.sync();
  Study.engines[subj.type].stats(subj);
};
