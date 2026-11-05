/* =====================================================================
   Problems engine (screens): practice / mastery / drill / weak spots,
   multi-part answers, hints, worked solutions, graphs, notes, stats.
   ===================================================================== */

/* ---- Endless Drill: each unit can define drills:{ "4.1": k => problem, … } ---- */
function drillsFor(sec){
  if (!sec) return [];
  const units = PB().units;
  if (sec === "*all") return units.flatMap(u => Object.entries(u.drills).map(([s, f]) => ({u, s, f})));
  const [uid, s] = sec.split(":"), u = units.find(x => x.id === uid);
  if (!u) return [];
  if (s === "all" || s === "rev") return Object.entries(u.drills).map(([ss, f]) => ({u, s: ss, f}));
  return u.drills[s] ? [{u, s, f: u.drills[s]}] : [];
}
const drillHas = sec => drillsFor(sec).length > 0;
function drillMake(sec){
  const d = POLY.pick(drillsFor(sec));
  const q = d.f(d.u.kit);
  q.id = "gen-" + d.u.id + ":" + d.s; q.secs = [d.u.id + ":" + d.s]; q.unit = d.u.id; q.gen = true; q.src = q.src || "Random drill";
  return q;
}

/* ========== HONORS MATH 3 UI ========== */
const MMODES = {
  practice:{name:"Practice", desc:"Questions from your notes, shuffled", icon:"sheet"},
  mastery: {name:"Mastery", desc:"Misses come back until they stick", icon:"loop"},
  drill:   {name:"Endless Drill", desc:"New random problems, forever", icon:"infinity", gen:true},
  weak:    {name:"Weak Spots", desc:"Your 8 most-missed", icon:"target"},
  tough:   {name:"Tough Ones", desc:"What the club misses most", icon:"bolt", club:true},
  saq:     {name:"Short Answer", desc:"Write it, then compare to a model answer", icon:"quill", write:"saq"},
  leq:     {name:"Essay Thesis", desc:"Build an LEQ thesis step by step", icon:"pencil", write:"leq"}
};
let PSUBJ = null;                       // current problems subject (from registry)
const PB = () => Study.problems[PSUBJ.id] || {units: [], items: []};
// first hint for each kind of math problem: the method, explained
const KIND_TIP = {
  simp:"Factor the top and the bottom completely: pull out a GCF first, then look for a difference of squares, a trinomial, cubes, or grouping. Write down the excluded values from the ORIGINAL denominators before you cancel anything (when dividing, the top of the second fraction counts too, since it gets flipped to the bottom). Then cancel factors that appear on both top and bottom.",
  lim:"Plug the x-value in first. If you get a real number, that's the limit. If you get 0/0, there's a factor hiding that cancels: factor and cancel (or multiply by the conjugate when there's a square root, or by the LCD when there are little fractions), then plug in again. A nonzero number over 0 means a vertical asymptote: check both sides to decide ∞, −∞, or DNE.",
  liminf:"When x gets huge, only the highest-power term on top and on bottom matters. Compare their degrees: top smaller → 0, same → divide the leading coefficients, top bigger → it grows forever (∞ or −∞; check the sign).",
  pf:"Set it up as A over the first factor plus B over the second factor. Multiply both sides by the whole denominator so the fractions disappear. Then plug in the x that makes one factor zero: that wipes out one letter, so you can solve for the other. Repeat with the other factor.",
  dq:"Replace every x in f with (x + h) to get f(x + h) and expand carefully, since (x + h)² = x² + 2xh + h². Subtract ALL of f(x): every original term cancels. Every term left has an h, so factor it out and cancel it with the h on the bottom.",
  asy:"Factor the top and bottom, then cancel what you can. A factor that cancels makes a hole (plug its x into the reduced function for the y). What's left on the bottom gives vertical asymptotes. Compare degrees for the horizontal or slant asymptote. Reduced top = 0 gives x-intercepts; plugging in x = 0 gives the y-intercept.",
  write:"Turn each feature into a factor. VA at x = d → (x − d) on the bottom. Hole at x = e → (x − e) on the top AND bottom. x-intercept at x = g → (x − g) on the top. Then put a number in front so the horizontal asymptote (or y-intercept) comes out right."
};
// section ids: "u4:4.1" (a section), "u4:rev" (unit review), "u4:all" (whole unit), "*all" (every unit)
function mSections(){
  const out = [];
  PB().units.forEach(u => {
    u.sections.forEach(s => out.push({id: u.id + ":" + s.id, name: s.name, unit: u}));
    if (u.items.some(q => q.secs.includes(u.id + ":rev"))) out.push({id: u.id + ":rev", name: u.reviewName || `${u.short || u.name} review (test prep)`, unit: u});
    out.push({id: u.id + ":all", name: `${u.short || u.name}: everything mixed`, unit: u});
  });
  if (PB().units.length > 1) out.push({id: "*all", name: "All units mixed", unit: null});
  return out;
}
const mSec = () => ST.sel[PSUBJ.id];
const mSecInfo = id => mSections().find(s => s.id === (id || mSec())) || mSections()[0];
function mItems(sec){
  if (sec === "*all") return PB().items;
  const [u, s] = sec.split(":");
  if (s === "all") return PB().items.filter(q => q.unit === u);
  return PB().items.filter(q => q.secs.includes(sec));
}
const mqKey = id => PSUBJ.id + "|" + id;
const mAcc = id => { const r = ST.mq[mqKey(id)]; return r && r.t ? r.c / r.t : null; };
const mBestKey = m => `${PSUBJ.id}|${mSec()}:${m}`;
function useProblems(subj){
  PSUBJ = subj;
  const secs = mSections();
  if (!secs.some(s => s.id === ST.sel[subj.id])){
    const want = subj.defaultSection && secs.find(s => s.id === subj.defaultSection);
    ST.sel[subj.id] = (want || secs[0] || {id: ""}).id; save();
  }
}

/* ---- graph ---- */
let _plotN = 0;
function plotSVG(src, F, userSrc){
  const cid = "clp" + (++_plotN);
  const ast = MC.parse(src), f = x => { try { return MC.evaluate(ast, {x}); } catch(e){ return NaN; } };
  const nv = s => MC.numVal(s);
  const VA = F.va.map(nv), HO = F.holes.map(([a, b]) => [nv(a), nv(b)]), XI = F.xint.map(nv);
  const YI = F.yint === "none" ? null : nv(F.yint), HA = F.ha === "none" ? null : nv(F.ha);
  const SAa = F.sa === "none" ? null : MC.parse(F.sa), sa = x => MC.evaluate(SAa, {x});
  const xs = [0, ...VA, ...HO.map(h => h[0]), ...XI];
  let x0 = Math.min(-6, Math.floor(Math.min(...xs)) - 2), x1 = Math.max(6, Math.ceil(Math.max(...xs)) + 2);
  const ys = [0, ...HO.map(h => h[1]), ...(YI != null ? [YI] : []), ...(HA != null ? [HA] : [])];
  // include the visible shape of the curve away from the asymptotes (e.g. a slant branch's turning point)
  for (let i = 0; i <= 120; i++){
    const x = x0 + (x1 - x0) * i / 120;
    if (VA.some(v => Math.abs(x - v) < 1.2)) continue;
    const y = f(x); if (isFinite(y) && Math.abs(y) < 14) ys.push(y);
  }
  let y0 = Math.max(-14, Math.min(-6, Math.floor(Math.min(...ys)) - 2)), y1 = Math.min(14, Math.max(6, Math.ceil(Math.max(...ys)) + 2));
  const W = 340, H = Math.round(Math.max(260, Math.min(420, W * (y1 - y0) / (x1 - x0))));
  const sx = x => +((x - x0) / (x1 - x0) * W).toFixed(1), sy = y => +(H - (y - y0) / (y1 - y0) * H).toFixed(1);
  const step = (x1 - x0) > 16 ? 2 : 1, ystep = (y1 - y0) > 16 ? 2 : 1;
  let g = `<svg viewBox="-6 -6 ${W + 12} ${H + 12}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="graph"><defs><clipPath id="${cid}"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>`;
  for (let x = Math.ceil(x0); x <= x1; x += step) g += `<line class="g-grid" x1="${sx(x)}" y1="0" x2="${sx(x)}" y2="${H}"/>`;
  for (let y = Math.ceil(y0); y <= y1; y += ystep) g += `<line class="g-grid" x1="0" y1="${sy(y)}" x2="${W}" y2="${sy(y)}"/>`;
  g += `<line class="g-axis" x1="0" y1="${sy(0)}" x2="${W}" y2="${sy(0)}"/><line class="g-axis" x1="${sx(0)}" y1="0" x2="${sx(0)}" y2="${H}"/>`;
  g += `<text class="g-lab" x="${W - 8}" y="${sy(0) - 5}">x</text><text class="g-lab" x="${sx(0) + 5}" y="11">y</text>`;
  g += `<text class="g-tick" x="${sx(1)}" y="${sy(0) + 13}" text-anchor="middle">1</text><text class="g-tick" x="${sx(0) - 5}" y="${sy(1) + 4}" text-anchor="end">1</text>`;
  g += `<g clip-path="url(#${cid})">`;
  VA.forEach(v => g += `<line class="g-asy" x1="${sx(v)}" y1="0" x2="${sx(v)}" y2="${H}"/>`);
  if (HA != null) g += `<line class="g-asy" x1="0" y1="${sy(HA)}" x2="${W}" y2="${sy(HA)}"/>`;
  if (SAa) g += `<line class="g-asy" x1="${sx(x0)}" y1="${sy(sa(x0))}" x2="${sx(x1)}" y2="${sy(sa(x1))}"/>`;
  const lim = (y1 - y0) * 3, N = 1200; let d = "", pen = false, px = null;
  for (let i = 0; i <= N; i++){
    const x = x0 + (x1 - x0) * i / N; let y = f(x);
    const crossed = px != null && VA.some(v => (px - v) * (x - v) <= 0);
    if (!isFinite(y) || crossed){ pen = false; px = x; if (!isFinite(y)) continue; }
    y = Math.max(y0 - lim, Math.min(y1 + lim, y));
    d += (pen ? "L" : "M") + sx(x) + " " + sy(y) + " "; pen = true; px = x;
  }
  g += `<path class="g-curve" d="${d}"/>`;
  if (userSrc){
    try {
      const ua = MC.parse(userSrc), uf = x => { try { return MC.evaluate(ua, {x}); } catch(e){ return NaN; } };
      let ud = "", upen = false, upy = null;
      for (let i = 0; i <= N; i++){
        const x = x0 + (x1 - x0) * i / N; let y = uf(x);
        if (!isFinite(y) || (upy != null && Math.abs(y - upy) > (y1 - y0) * 2)){ upen = false; upy = isFinite(y) ? y : null; if (!isFinite(y)) continue; }
        y = Math.max(y0 - lim, Math.min(y1 + lim, y));
        ud += (upen ? "L" : "M") + sx(x) + " " + sy(y) + " "; upen = true; upy = y;
      }
      g += `<path class="g-user" d="${ud}"/>`;
    } catch(e){}
  }
  g += `</g>`;
  const lbl = (x, y, t, anchor = "start") => `<text class="g-val" x="${x}" y="${y}" text-anchor="${anchor}">${t}</text>`;
  VA.forEach((v, i) => g += lbl(sx(v) + 4, 12 + i * 13, "x = " + F.va[i]));
  if (HA != null) g += lbl(W - 4, sy(HA) - 5, "y = " + F.ha, "end");
  if (SAa){ const xl = x0 + (x1 - x0) * 0.8, yl = sa(xl); if (yl > y0 && yl < y1) g += lbl(sx(xl) - 6, sy(yl) - 8, "y = " + F.sa.replace(/\*/g, ""), "end"); }
  XI.forEach((v, i) => { g += `<circle class="g-dot" cx="${sx(v)}" cy="${sy(0)}" r="3.6"/>` + lbl(sx(v), sy(0) + (i % 2 ? -8 : 16), F.xint[i], "middle"); });
  if (YI != null){ g += `<circle class="g-dot" cx="${sx(0)}" cy="${sy(YI)}" r="3.6"/>` + lbl(sx(0) + 6, sy(YI) - 6, F.yint); }
  HO.forEach((h, i) => { g += `<circle class="g-hole" cx="${sx(h[0])}" cy="${sy(h[1])}" r="4.6"/>` + lbl(sx(h[0]) + 7, sy(h[1]) - 8, `(${F.holes[i][0]}, ${F.holes[i][1]})`); });
  if (userSrc) g += `<text class="g-key" x="6" y="${H - 8}">— correct   ┅ yours</text>`;
  return g + `</svg>`;
}

/* ---- home ---- */
function renderMathHome(subj){
  useProblems(subj);
  const sel = $("msecSel"), usel = $("munitSel"); sel.innerHTML = ""; usel.innerHTML = "";
  if (!PB().units.length){ $("mmodes").innerHTML = `<div class="small">No units yet.</div>`; return; }
  // two pickers once a subject has several units: Unit, then Section within it
  const units = PB().units, many = units.length > 1;
  if (!mSections().some(x => x.id === mSec())) ST.sel[PSUBJ.id] = mSections()[0].id;
  const curU = mSec() === "*all" ? "*all" : mSec().split(":")[0];
  $("munitPick").classList.toggle("hidden", !many);
  if (many){
    units.forEach(u => { const o = el("option", null, u.name); o.value = u.id; usel.appendChild(o); });
    const o = el("option", null, `All units mixed (${PB().items.length})`); o.value = "*all"; usel.appendChild(o);
    usel.value = curU;
  }
  $("msecPick").classList.toggle("hidden", curU === "*all");
  (curU === "*all" ? [] : mSections().filter(x => x.unit && x.unit.id === curU)).forEach(x => {
    const label = x.id.endsWith(":all") ? `Whole unit, mixed` : x.name;
    const o = el("option", null, `${label} (${mItems(x.id).length})`); o.value = x.id; sel.appendChild(o);
  });
  if (!many){ /* one unit: keep its sections grouped under its name */
    const og = document.createElement("optgroup"); og.label = units[0].name; [...sel.children].forEach(c => og.appendChild(c)); sel.appendChild(og);
  }
  sel.value = mSec();
  const box = $("mmodes"); box.innerHTML = "";
  Object.entries(MMODES).forEach(([k, m]) => {
    if (m.gen && !drillHas(mSec())) return;
    if (m.write && !Write.has(m.write, mSec())) return;
    if (m.club && toughList(mSec()).length < 4) return;
    const b = el("button", "mode");
    modeTile(b, m.icon, m.name, m.desc, m.write ? null : ST.mbest[mBestKey(k)]);
    b.onclick = () => m.write ? Write.start(m.write) : mStart(k);
    box.appendChild(b);
  });
  // members: fetch what the club misses (cached), then show Tough Ones if there's enough
  if (ST.lbUser && LB.cfg()){
    const id = PSUBJ.id, before = LB.clubCached(id);
    LB.clubStats(id).then(d => { if (d && d !== before && PSUBJ.id === id && !$("home").classList.contains("hidden")) renderMathHome(PSUBJ); }).catch(() => {});
  }
}
/* the questions club members miss most in this section (needs a few tries from the club first) */
function toughList(sec){
  const d = LB.clubCached(PSUBJ.id); if (!d) return [];
  return mItems(sec).map(q => [q, d[LB.qkey(q)]]).filter(([, r]) => r && r.n >= 3 && r.w / r.n >= 0.25)
    .sort((a, b) => (b[1].w / b[1].n - a[1].w / a[1].n) || b[1].n - a[1].n).slice(0, 10).map(x => x[0]);
}
$("msecSel").onchange = e => { ST.sel[PSUBJ.id] = e.target.value; ST.lastSec = ST.lastSec || {}; ST.lastSec[PSUBJ.id + "|" + e.target.value.split(":")[0]] = e.target.value; save(); renderMathHome(PSUBJ); Shell.update(); };
$("munitSel").onchange = e => {
  const u = e.target.value, last = (ST.lastSec || {})[PSUBJ.id + "|" + u];
  const first = mSections().find(x => x.unit && x.unit.id === u);
  ST.sel[PSUBJ.id] = u === "*all" ? "*all" : (last && mSections().some(x => x.id === last) ? last : first.id);
  save(); renderMathHome(PSUBJ); Shell.update();
};

/* ---- notes summary ---- */
/* notes can be plain strings (bullets) or blocks:
   {h:"heading"} {p:"paragraph"} {steps:[…]} {tip:"…"} {warn:"…"} {ex:{q, a:[…]}} {table:{head:[…], rows:[[…]]}} */
function notesHTML(u, sid){
  const notes = (u.notes || {})[sid] || [], graphs = (u.graphs || {})[sid] || [];
  const T = t => MC.renderText(String(t));
  let out = "", ul = [];
  const flush = () => { if (ul.length){ out += `<ul class="mnotes">${ul.map(t => `<li>${T(t)}</li>`).join("")}</ul>`; ul = []; } };
  notes.forEach(n => {
    if (typeof n === "string"){ ul.push(n); return; }
    flush();
    if (n.h) out += `<h3 class="nh">${T(n.h)}</h3>`;
    if (n.p) out += `<p class="np">${T(n.p)}</p>`;
    if (n.steps) out += `<ol class="nsteps">${n.steps.map(x => `<li>${T(x)}</li>`).join("")}</ol>`;
    if (n.tip) out += `<div class="ncall ntip">${ic("bulb", "ic-s")}<span>${T(n.tip)}</span></div>`;
    if (n.warn) out += `<div class="ncall nwarn">${ic("alert", "ic-s")}<span><b>Watch out:</b> ${T(n.warn)}</span></div>`;
    if (n.ex) out += `<div class="nex"><div class="nexq"><b>Example:</b> ${T(n.ex.q)}</div>${(n.ex.a || []).map(x => `<div class="nexa">${T(x)}</div>`).join("")}</div>`;
    if (n.table) out += `<div class="ntable"><table><thead><tr>${n.table.head.map(c => `<th>${T(c)}</th>`).join("")}</tr></thead><tbody>${n.table.rows.map(r => `<tr>${r.map(c => `<td>${T(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  });
  flush();
  graphs.forEach(ex => {
    out += `<div class="nfig"><div class="ncap">${T(ex.cap)}</div><div class="mdisplay nmath"><span class="mpre">f(<i class="mv">x</i>) =</span>${MC.render(ex.f)}</div><div class="mgraph">${plotSVG(ex.f, ex.F)}</div></div>`;
  });
  return out;
}
const hasNotes = (u, sid) => !!(u && (((u.notes || {})[sid] || []).length || ((u.graphs || {})[sid] || []).length));

/* "Learn this" sheet: the notes for the current problem's section, without leaving the round */
function questionSection(q){
  const sec = (q.secs || []).find(s => !/:rev$|:all$/.test(s)) || "";
  const [uid, sid] = sec.split(":");
  const u = PB().units.find(x => x.id === (uid || q.unit));
  return {u, sid, name: u && (u.sections.find(s => s.id === sid) || {}).name};
}
function openLearn(q){
  const {u, sid, name} = questionSection(q);
  if (!hasNotes(u, sid)) return;
  $("sheetTitle").textContent = name || "Notes";
  $("sheetBody").innerHTML = notesHTML(u, sid);
  $("sheet").classList.remove("hidden"); document.body.classList.add("noscroll");
  document.activeElement && document.activeElement.blur();
  $("sheetBody").scrollTop = 0; $("sheetClose").focus();
}
function closeLearn(){ $("sheet").classList.add("hidden"); document.body.classList.remove("noscroll"); }
$("sheetClose").onclick = closeLearn;
$("sheet").addEventListener("click", e => { if (e.target === $("sheet")) closeLearn(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !$("sheet").classList.contains("hidden")) closeLearn(); });
$("mLearn").onclick = () => openLearn(M.queue[M.idx]);

function renderMNotes(subj){
  useProblems(subj);
  const box = $("mnotesBody"); box.innerHTML = "";
  const cur = mSecInfo(), [cu, cs] = mSec().split(":");
  const list = [];
  PB().units.forEach(u => u.sections.forEach(s => {
    if (cur.id === "*all" || (u.id === cu && (cs === "all" || cs === "rev" || cs === s.id))) list.push({u, s});
  }));
  list.forEach(({u, s}) => {
    if (!hasNotes(u, s.id)) return;
    box.appendChild(el("div", "grouphead", s.name));
    const sec = el("div", "nsec"); sec.innerHTML = notesHTML(u, s.id); box.appendChild(sec);
  });
  if (!box.children.length) box.appendChild(el("div", "small", "No notes for this section yet."));
  show("mnotes");
}

/* ---- game ---- */
let M = null;
function mStart(mode, override){
  let list = override || mItems(mSec());
  if (mode === "tough") list = toughList(mSec());
  if (mode === "weak") list = list.slice().sort((a, b) => ((mAcc(a.id) ?? 0.5) - (mAcc(b.id) ?? 0.5)) || Math.random() - 0.5).slice(0, 8);
  let queue = mode === "drill" ? [drillMake(mSec())] : shuffle(list);
  if (mode === "practice" && !override && ST.settings.count) queue = queue.slice(0, ST.settings.count);
  M = {mode, queue, idx:0, score:0, streak:0, bestStreak:0, results:[], mastered:new Set(), total:queue.length, start:Date.now(), override:!!override};
  show("mquiz");
  mShow();
}

function mPrompt(q){
  let html = "";
  if (q.lim) html = MC.renderLim(q.lim.v, q.lim.to, MC.render(q.math));
  else if (q.math) html = (q.pre ? `<span class="mpre">${q.pre.replace("x", "<i class='mv'>x</i>")}</span>` : "") + MC.render(q.math);
  return html;
}

/* short name for a problem in lists: its source ("4.3 HW #22") when that's unique, otherwise the question itself */
function qLabel(q){
  const u = PB().units.find(x => x.id === q.unit);
  if (u && !u._srcN){ u._srcN = {}; u.items.forEach(i => u._srcN[i.src] = (u._srcN[i.src] || 0) + 1); }
  if (!q.gen && u && u._srcN[q.src] === 1) return q.src;
  const t = String(q.text || "").replace(/\[\[(.+?)\]\]/g, (_, f) => f.replace(/\^/g, "")).replace(/\{\{(.+?)\}\}/g, "$1").replace(/__(?=[^_\s])|(?<=[^_\s])__|\*\*/g, "").replace(/\s+/g, " ").trim();
  return t.length > 48 ? t.slice(0, 46).trim() + "…" : t;
}

/* keyboard: 1–9 taps an option, Enter checks / goes next (desktop) */
document.addEventListener("keydown", e => {
  if ($("mquiz").classList.contains("hidden") || !$("sheet").classList.contains("hidden") || !M) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = (e.target.tagName || "").toLowerCase(), typing = (tag === "input" && !e.target.classList.contains("vh")) || tag === "textarea" || tag === "select";
  if (typing) return;
  if (/^[1-9]$/.test(e.key) && !M.answered){
    const ch = $("mFields").querySelector(".chips"); if (!ch) return;
    const b = ch.querySelectorAll(".chip")[+e.key - 1]; if (b && !b.disabled){ e.preventDefault(); b.click(); }
  } else if (e.key === "Enter" && !(tag === "button" && !e.target.classList.contains("chip"))){
    e.preventDefault(); M.answered ? mNext() : mCheck();
  }
});

/* the source above a question: a passage, a picture (public-domain, from Wikimedia), or a drawn chart */
const commonsURL = (file, w) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;
function stimHTML(q){
  const cap = q.cite ? `<figcaption>${MC.renderText(q.cite)}</figcaption>` : "";
  if (q.img) return `<figure class="stim simg"><a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(q.img.file)}" target="_blank" rel="noopener">
      <img src="${commonsURL(q.img.file, 900)}" alt="${escHTML(q.img.alt)}" loading="eager" onerror="this.closest('figure').classList.add('noimg')"></a>
      <div class="imgalt"><b>Image description:</b> ${escHTML(q.img.alt)}</div>${cap}</figure>`;
  if (q.svg) return `<figure class="stim schart">${q.svg}${cap}</figure>`;
  if (q.stim) return `<figure class="stim"><blockquote>${MC.renderText(q.stim)}</blockquote>${cap}</figure>`;
  return "";
}

function mShow(){
  const q = M.queue[M.idx];
  Object.assign(M, {hint:0, attempt:1, answered:false, qStart:Date.now(), lastFocus:0});
  $("mSrc").textContent = q.src;
  $("mText").innerHTML = stimHTML(q) + `<p>${MC.renderText(q.text)}</p>`;
  $("mMath").innerHTML = mPrompt(q);
  $("mMath").classList.toggle("hidden", !$("mMath").innerHTML);
  $("mGraph").innerHTML = q.graphBefore ? plotSVG(q.target, q.F) : "";
  $("mHint").classList.add("hidden"); $("mHint").innerHTML = "";
  $("mSol").classList.add("hidden"); $("mSol").innerHTML = "";
  $("mFb").innerHTML = ""; $("mFb").className = "fb";
  const box = $("mFields"); box.innerHTML = "";
  box.className = q.fields.length >= 4 ? "mgrid" : "";
  q.fields.forEach((f, i) => {
    const w = el("div", "mfield");
    const lab = el("label", null, f.l); lab.htmlFor = "mf" + i; w.appendChild(lab);
    const inp = el("input"); inp.type = "text"; inp.id = "mf" + i;
    if (f.numeric) inp.setAttribute("inputmode", "decimal");
    Object.assign(inp, {autocomplete:"off", spellcheck:false});
    inp.setAttribute("autocapitalize", "none"); inp.setAttribute("autocorrect", "off");
    inp.setAttribute("enterkeyhint", i === q.fields.length - 1 ? "go" : "next");
    inp.placeholder = f.ph || (f.t === "text" ? "type the word(s)" : "type your answer");
    const pv = el("div", "mprev");
    // only show the pretty preview when it adds something (fractions, powers, roots)
    inp.addEventListener("input", () => {
      if (f.t === "formula") pv.innerHTML = /\d/.test(inp.value) ? MC.preview(f, inp.value) : "";
      else if (f.t !== "text") pv.innerHTML = /[\/^]|sqrt|cbrt|pi|\*/i.test(inp.value) ? MC.preview(f, inp.value) : "";
    });
    inp.addEventListener("input", mReady);
    inp.addEventListener("focus", () => { M.lastFocus = i; setTimeout(() => keepVisible(inp), 350); });
    inp.addEventListener("keydown", e => {
      if (e.key !== "Enter") return; e.preventDefault();
      if (M.answered) return mNext();
      const nxt = q.fields.findIndex((_, j) => j > i && !$("mf" + j).readOnly);
      if (nxt > 0) $("mf" + nxt).focus(); else mCheck();
    });
    w.appendChild(inp); w.appendChild(pv);
    if (f.t === "choice"){
      // tap-to-answer: buttons fill the (hidden) input
      inp.classList.add("vh"); inp.tabIndex = -1; lab.htmlFor = "";
      const ch = el("div", "chips"); ch.setAttribute("role", "radiogroup"); ch.setAttribute("aria-label", f.l);
      // sentence-length options read better as a stacked list; short ones stay as side-by-side chips
      if (f.opts.some(o => String(o).replace(/\[\[|\]\]|\{\{|\}\}/g, "").length > 24)) ch.classList.add("stack");
      const shown = f.shuffle ? shuffle(f.opts) : f.opts;
      shown.forEach((o, j) => {
        const b = el("button", "chip"); b.innerHTML = MC.renderText(o) + (f.opts.length <= 9 ? `<kbd>${j + 1}</kbd>` : ""); b.dataset.v = o; b.type = "button"; b.setAttribute("role", "radio");
        b.onclick = () => {
          if (M.answered || inp.dataset.ok === "1" || b.disabled) return;
          ch.querySelectorAll(".chip").forEach(c => { c.classList.toggle("sel", c === b); c.setAttribute("aria-checked", c === b); });
          inp.value = o; M.lastFocus = i; mReady();
          if (q.fields.length === 1) mCheck();
        };
        ch.appendChild(b);
      });
      w.appendChild(ch);
    }
    w.appendChild(el("div", "mans hidden"));
    box.appendChild(w);
  });
  // the math keypad only shows for math-style answers
  const padNeeded = q.fields.some(f => ["expr","rat","set","pts","pf"].includes(f.t)) || !!q.lim;
  $("keypad").classList.toggle("hidden", !padNeeded);
  $("mLearn").classList.toggle("hidden", !hasNotes(questionSection(q).u, questionSection(q).sid));
  window.scrollTo(0, 0);
  $("mCheck").textContent = "Check";
  $("mSkip").disabled = false;
  mHintBtn(); mHud(); mReady();
  $("mf0").focus();
}
/* Check looks inactive until every box has an answer */
function mReady(){
  if (!M) return;
  const q = M.queue[M.idx], wait = !M.answered && q.fields.some((_, i) => { const f = $("mf" + i); return f && !f.readOnly && !f.value.trim(); });
  $("mCheck").classList.toggle("dim", wait);
  if (!wait && $("mFb").textContent === "Answer every part first."){ $("mFb").textContent = ""; $("mFb").className = "fb"; }
}

function mHints(q){
  const tip = q.tip || (q.kind === "lim" && /inf/.test(q.lim.to) ? KIND_TIP.liminf : KIND_TIP[q.kind]);
  return (tip ? [tip] : []).concat((q.steps || []).slice(0, -1));
}
function mHintBtn(){
  const n = mHints(M.queue[M.idx]).length, b = $("mHintBtn");
  b.disabled = M.answered || M.hint >= n;
  b.textContent = n === 0 ? "No hints" : M.hint >= n ? "No more hints" : `Hint ${M.hint + 1}/${n}`;
}
$("mHintBtn").onclick = () => {
  const q = M.queue[M.idx], hs = mHints(q);
  if (M.answered || M.hint >= hs.length) return;
  M.hint++;
  $("mHint").innerHTML = hs.slice(0, M.hint).map(h => `<div class="hrow">${ic("bulb", "ic-s")}<span>${MC.renderText(h)}</span></div>`).join("");
  $("mHint").classList.remove("hidden");
  mHintBtn();
  $("mf" + M.lastFocus).focus();
};

function mHud(){
  $("mScore").textContent = M.score + " pts";
  $("mStreak").innerHTML = M.streak >= 2 ? ic("flame", "ic-s") + M.streak : "";
  if (M.mode === "mastery"){ $("mCount").textContent = `Mastered ${M.mastered.size} of ${M.total}`; $("mProg").style.width = (M.mastered.size / M.total * 100) + "%"; }
  else if (M.mode === "drill"){ const c = M.results.filter(r => r.ok).length; $("mCount").textContent = `Drill #${M.idx + 1} · ${c} correct`; $("mProg").style.width = "100%"; }
  else { $("mCount").textContent = `Problem ${M.idx + 1} of ${M.queue.length}`; $("mProg").style.width = (M.idx / M.queue.length * 100) + "%"; }
  Shell.session();
}

// keypad: keep focus in the field
$("keypad").querySelectorAll("button").forEach(b => {
  b.addEventListener("pointerdown", e => e.preventDefault());
  b.addEventListener("mousedown", e => e.preventDefault());
  b.addEventListener("click", () => {
    if (!M || M.answered) return;
    const inp = $("mf" + M.lastFocus); if (!inp || inp.readOnly) return;
    const ins = b.dataset.k, s = inp.selectionStart ?? inp.value.length, e = inp.selectionEnd ?? s;
    if (ins === "⌫"){ inp.value = inp.value.slice(0, Math.max(0, s - (s === e ? 1 : 0))) + inp.value.slice(e); inp.setSelectionRange(Math.max(0, s - (s === e ? 1 : 0)), Math.max(0, s - (s === e ? 1 : 0))); }
    else if (ins === "none" || ins === "DNE"){ inp.value = ins; }
    else if (b.dataset.c != null && s !== e){
      // wrap the selection: selected text goes in the first box
      const sel = inp.value.slice(s, e), out = ins.replace("()", "(" + sel + ")");
      inp.value = inp.value.slice(0, s) + out + inp.value.slice(e);
      const c = s + out.length - (out.endsWith("()") ? 1 : 0); inp.setSelectionRange(c, c);
    }
    else { inp.value = inp.value.slice(0, s) + ins + inp.value.slice(e); const c = s + (b.dataset.c != null ? +b.dataset.c : ins.length); inp.setSelectionRange(c, c); }
    inp.dispatchEvent(new Event("input")); inp.focus();
  });
});

function mCheck(){
  if (M.answered){ mNext(); return; }
  const q = M.queue[M.idx];
  const vals = q.fields.map((_, i) => $("mf" + i).value);
  // every box needs an answer before checking
  const empty = q.fields.findIndex((_, i) => !$("mf" + i).readOnly && !vals[i].trim());
  if (empty >= 0){
    const inp = $("mf" + empty), tgt = q.fields[empty].t === "choice" ? inp.parentNode.querySelector(".chips") : inp;
    tgt.classList.remove("shake"); void tgt.offsetWidth; tgt.classList.add("shake"); setTimeout(() => tgt.classList.remove("shake"), 520);
    if (q.fields[empty].t !== "choice") inp.focus();
    if (q.fields.length > 1){ $("mFb").className = "fb warn"; $("mFb").textContent = "Answer every part first."; }
    return;
  }
  const res = q.fields.map((f, i) => $("mf" + i).dataset.ok === "1" ? {ok:true} : MC.check(f, vals[i]));
  const nOk = res.filter(r => r.ok).length;
  if (nOk === q.fields.length) return mReveal(res, vals);
  // no second try on a two-option question (it would just give the answer away)
  const twoWay = q.fields.length === 1 && q.fields[0].t === "choice" && q.fields[0].opts.length <= 2;
  if (M.attempt === 1 && ST.settings.second && !twoWay){
    M.attempt = 2;
    res.forEach((r, i) => {
      const inp = $("mf" + i);
      const note = inp.parentNode.querySelector(".mans");
      if (r.ok){ inp.className = "good"; inp.readOnly = true; inp.dataset.ok = "1"; note.classList.add("hidden"); }
      else {
        if (q.fields[i].t === "choice"){
          const picked = [...inp.parentNode.querySelectorAll(".chip")].find(c => c.classList.contains("sel"));
          if (picked){ picked.classList.remove("sel"); picked.classList.add("wrong"); picked.disabled = true; }
          inp.value = "";
        }
        inp.className = "retry" + (q.fields[i].t === "choice" ? " vh" : ""); inp.classList.add("shake"); setTimeout(() => inp.classList.remove("shake"), 520);
        if (r.why){ note.textContent = "↳ " + r.why.charAt(0).toUpperCase() + r.why.slice(1) + "."; note.className = "mans mwhy"; }
        else note.classList.add("hidden");
      }
    });
    $("mFb").className = "fb warn";
    $("mFb").textContent = (q.fields.length > 1 ? `${nOk} of ${q.fields.length} right. Fix the orange ones` : "Not it. One more try") + " (half points).";
    const firstBad = res.findIndex(r => !r.ok); $("mf" + firstBad).focus(); $("mf" + firstBad).select();
    mReady();
    return;
  }
  mReveal(res, vals);
}
$("mCheck").onclick = mCheck;
$("mSkip").onclick = () => { if (!M.answered) mReveal(M.queue[M.idx].fields.map(() => ({ok:false})), M.queue[M.idx].fields.map(() => ""), true); };
["mCheck","mHintBtn","mSkip"].forEach(id => $(id).addEventListener("mousedown", e => e.preventDefault()));

function mReveal(res, vals, skipped){
  $("mCheck").classList.remove("dim");
  const q = M.queue[M.idx]; M.answered = true;
  const nOk = res.filter(r => r.ok).length, all = nOk === q.fields.length;
  q.fields.forEach((f, i) => {
    const inp = $("mf" + i); inp.readOnly = true; inp.className = (res[i].ok ? "good" : "bad") + (f.t === "choice" ? " vh" : "");
    if (f.t === "choice") inp.parentNode.querySelectorAll(".chip").forEach(c => {
      c.disabled = true;
      if (c.dataset.v === f.a) c.classList.add("right");
      else if (c.classList.contains("sel")) c.classList.add("wrong");
    });
    const a = inp.parentNode.querySelector(".mans"); a.className = "mans hidden";
    if (!res[i].ok){ a.innerHTML = "Answer: " + MC.answerHTML(f) + (res[i].why ? `<div class="mwhy">↳ ${res[i].why.charAt(0).toUpperCase() + res[i].why.slice(1)}.</div>` : ""); a.classList.remove("hidden"); }
    else if (res[i].note){ a.textContent = res[i].note; a.classList.remove("hidden"); }
  });
  const rec = ST.mq[mqKey(q.id)] || (ST.mq[mqKey(q.id)] = {c:0, t:0}); rec.t++; if (all) rec.c++;
  let pts = Math.round(100 * nOk / q.fields.length * (M.attempt === 2 ? 0.5 : 1)) - 20 * M.hint;
  if (all){ M.streak++; M.bestStreak = Math.max(M.bestStreak, M.streak); pts = Math.round(pts * (1 + Math.min(M.streak, 10) * 0.1)); if (M.mode === "mastery") M.mastered.add(q.id); }
  else { M.streak = 0; if (M.mode === "mastery") M.queue.splice(Math.min(M.queue.length, M.idx + 3), 0, q); }
  pts = Math.max(0, pts); M.score += pts;
  const fb = $("mFb");
  fb.className = "fb " + (all ? "good" : nOk ? "warn" : "bad");
  fb.innerHTML = all ? `${ic("check", "ic-s")} Correct! +${pts}` + (M.streak >= 2 ? `<span class="fbstreak">${ic("flame", "ic-s")}${M.streak} in a row</span>` : "")
                 : skipped ? "Skipped. Here's how it works:" : nOk ? `${nOk} of ${q.fields.length} parts right. +${pts}` : ic("close", "ic-s") + "Not quite. Here's how it works:";
  const sol = $("mSol");
  const qs = questionSection(q);
  sol.innerHTML = `<b>${q.kind === "choice" || q.kind === "text" ? "Why" : "Solution"}</b><ol>${(q.steps || []).map(s => `<li>${MC.renderText(s)}</li>`).join("")}</ol>` +
    (hasNotes(qs.u, qs.sid) ? `<button class="link sollearn" id="solLearn">${ic("book")}<span>Learn this section</span></button>` : "");
  if ($("solLearn")) $("solLearn").onclick = () => openLearn(q);
  sol.classList.remove("hidden");
  if (q.graphAfter) $("mGraph").innerHTML = plotSVG(q.math, q.F);
  if (q.kind === "write" && !all && vals[0].trim()){
    const us = vals[0].replace(/^(y|f\s*\(\s*x\s*\))\s*=/i, "");
    $("mGraph").innerHTML = plotSVG(q.target, q.F, us);
  }
  M.results.push({id:q.id, src:q.src, label:qLabel(q), q, ok:all, part:nOk + "/" + q.fields.length, pts, hints:M.hint, attempt:M.attempt, skipped:!!skipped});
  save(); mHud();
  const last = M.mode !== "drill" && M.idx >= M.queue.length - 1;
  $("mCheck").textContent = last ? "See results" : "Next →";
  $("mSkip").disabled = true; mHintBtn();
  $("keypad").classList.add("hidden");
  document.activeElement && document.activeElement.blur();
  setTimeout(() => { const t = q.graphAfter ? $("mGraph") : $("mFb"); const y = t.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({top: Math.max(0, y), behavior: "smooth"}); }, 60);
}

function mNext(){
  M.idx++;
  if (M.mode === "drill"){ M.queue.push(drillMake(mSec())); return mShow(); }
  if (M.idx >= M.queue.length) return mFinish();
  mShow();
}
$("mQuit").onclick = () => { if (M && M.results.length && M.mode === "drill") return mFinish(); document.activeElement && document.activeElement.blur(); renderHome(); };

function mFinish(){
  document.activeElement && document.activeElement.blur();
  const n = M.results.length, c = M.results.filter(r => r.ok).length, acc = n ? Math.round(c / n * 100) : 0;
  let newBest = false;
  if (!M.override && M.score > (ST.mbest[mBestKey(M.mode)] || 0)){ ST.mbest[mBestKey(M.mode)] = M.score; newBest = true; }
  save();
  LB.submit(PSUBJ.id, M.score);
  LB.record(PSUBJ.id, M.results);
  const secName = mSecInfo().name;
  $("meMode").textContent = `${secName} · ${MMODES[M.mode].name}` + (M.override ? " · retry" : "");
  countUp($("meScore"), M.score);
  $("meBest").classList.toggle("hidden", !newBest);
  $("meAcc").textContent = acc + "%"; $("meStreak").innerHTML = ic("flame", "ic-s") + M.bestStreak; $("meTime").textContent = fmtTime(Date.now() - M.start);
  const missed = M.results.filter(r => !r.ok && !r.q.gen).map(r => r.q).filter((q, i, a) => a.indexOf(q) === i);
  $("meRetry").classList.toggle("hidden", !missed.length);
  $("meRetry").onclick = () => mStart("practice", missed);
  const mode = M.mode; $("meAgain").onclick = () => mStart(mode);
  const ul = $("meList"); ul.innerHTML = "";
  if (!n) ul.appendChild(el("li", "small", "No answers this round."));
  M.results.forEach(r => {
    const li = el("li");
    li.innerHTML = `<span class="${r.ok ? "ok" : "no"}">${ic(r.ok ? "check" : "close", "ic-s")}</span> <b>${r.src}</b> <span class="small">${r.ok ? "+" + r.pts : r.skipped ? "skipped" : r.part + " parts"}${r.hints ? " · " + r.hints + " hint" + (r.hints > 1 ? "s" : "") : ""}</span><div class="mmini">${mPrompt(r.q) || MC.renderText(r.q.text)}</div>`;
    ul.appendChild(li);
  });
  M.brag = `${PSUBJ.name} (${secName}, ${MMODES[M.mode].name}): ${M.score} pts, ${c}/${n} right, best streak ${M.bestStreak}. Beat that.`;
  setLabel($("meBrag"), "copy", "Copy score to send"); $("meBragText").classList.add("hidden");
  show("mend");
  if (newBest || (n >= 5 && c === n)) confetti();
}
$("meHome").onclick = renderHome;
$("meBrag").onclick = () => {
  const t = M.brag, box = $("meBragText");
  const fallback = () => { box.value = t; box.classList.remove("hidden"); box.select(); $("meBrag").textContent = "Select and copy below"; };
  try { navigator.clipboard.writeText(t).then(() => setLabel($("meBrag"), "check", "Copied")).catch(fallback); } catch(e){ fallback(); }
};

/* ---- stats ---- */
function renderMStats(subj){
  useProblems(subj);
  $("resetStats").dataset.armed = ""; $("resetStats").textContent = `Reset ${subj.name} stats`;
  const bl = $("bestList"); bl.innerHTML = "";
  $("statsTitle").textContent = mSecInfo().name + ": best scores";
  Object.entries(MMODES).filter(([, m]) => !m.write && !(m.gen && !drillHas(mSec())) && !(m.club && toughList(mSec()).length < 4)).forEach(([k, m]) => {
    const row = el("div"); row.style.cssText = "display:flex;justify-content:space-between;padding:4px 0";
    const nm = el("span", "srow"); nm.innerHTML = ic(m.icon, "ic-s") + escHTML(m.name); row.appendChild(nm); row.appendChild(el("b", null, ST.mbest[mBestKey(k)] ? ST.mbest[mBestKey(k)] + " pts" : "–"));
    bl.appendChild(row);
  });
  $("accTitle").innerHTML = "Accuracy by section";
  const al = $("accList"); al.innerHTML = "";
  mSections().filter(s => !s.id.endsWith(":all") && s.id !== "*all").forEach(s => {
    let c = 0, t = 0; mItems(s.id).forEach(q => { const r = ST.mq[mqKey(q.id)]; if (r){ c += r.c; t += r.t; } });
    const g = ST.mq[mqKey("gen-" + s.id)]; const gc = g ? g.c : 0, gt = g ? g.t : 0;
    const acc = (t + gt) ? (c + gc) / (t + gt) : null;
    const d = el("div", "word");
    const top = el("div"); top.style.cssText = "display:flex;justify-content:space-between";
    top.appendChild(el("span", "w", s.name)); top.appendChild(el("span", "small", acc == null ? "not tried yet" : `${Math.round(acc * 100)}%  (${c + gc}/${t + gt})`));
    d.appendChild(top);
    const bar = el("div", "acc"), fill = el("div");
    fill.style.width = (acc == null ? 0 : acc * 100) + "%";
    fill.style.background = acc == null ? "transparent" : acc >= .8 ? "var(--good)" : acc >= .5 ? "var(--warn)" : "var(--bad)";
    bar.appendChild(fill); d.appendChild(bar); al.appendChild(d);
  });
  show("stats");
}

/* ---- keep the docked keypad above the iPhone keyboard ---- */
const dockFixed = () => { const d = $("mDock"); return !!d && getComputedStyle(d).position === "fixed"; };
function placeDock(){
  const d = $("mDock"), vv = window.visualViewport;
  if (!d) return;
  if (!dockFixed()){ d.style.transform = ""; document.documentElement.style.setProperty("--dockh", "0px"); return; }
  const off = vv ? Math.max(0, window.innerHeight - vv.height - vv.offsetTop) : 0;
  d.style.transform = off ? `translateY(${-off}px)` : "";
  document.documentElement.style.setProperty("--dockh", d.offsetHeight + "px");
}
function keepVisible(elm){
  const d = $("mDock"); if (!elm || !d || !dockFixed()) return;
  const r = elm.getBoundingClientRect(), dockTop = d.getBoundingClientRect().top, headH = 64;
  if (r.bottom + 70 > dockTop) window.scrollBy({top: r.bottom + 70 - dockTop, behavior:"smooth"});
  else if (r.top < headH) window.scrollBy({top: r.top - headH - 10, behavior:"smooth"});
}
if (window.visualViewport){ visualViewport.addEventListener("resize", placeDock); visualViewport.addEventListener("scroll", placeDock); }
window.addEventListener("resize", placeDock);
new MutationObserver(placeDock).observe(document.getElementById("mDock"), {attributes:true, subtree:true, attributeFilter:["class"]});

function problemsReset(subj){
  for (const k of Object.keys(ST.mbest)) if (k.startsWith(subj.id + "|")) delete ST.mbest[k];
  for (const k of Object.keys(ST.mq)) if (k.startsWith(subj.id + "|")) delete ST.mq[k];
}
Study.engines.problems = {home: renderMathHome, study: renderMNotes, stats: renderMStats, reset: problemsReset};
