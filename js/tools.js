/* =========================================================================
   Study Stuff — round tools: scratchpad, calculator, periodic table.
   Which tools a subject gets is set in subjects/registry.js (tools: [...]).
   On questions a tool would give away, only the scratchpad shows.
   ========================================================================= */
const Tools = (() => {
  const NAMES = {pad: "Scratchpad", calc: "Calculator", pt: "Periodic table"}, SHORT = {pad: "Scratch", calc: "Calc", pt: "Table"};
  let allowed = [], tab = "pad", open = false, built = false;

  /* ---------- which tools this question allows ---------- */
  function giveaway(q, subj){
    if (q.tools === "pad") return true;
    if (subj === "math3") return q.fields.some(f => f.t === "num");          // limits, asymptote values: a calculator can estimate them
    if (subj === "hchem") return q.fields.some(f => f.t === "charge") ||     // an ion's charge, an atom's dots: straight off the table
      /valence electrons(?: \(dots\))? does|what charge|charge does/i.test(q.text);
    return false;
  }
  function forQuestion(q, subj){
    const base = (Study.subject(subj).tools || []).slice();
    allowed = base.length && giveaway(q, subj) ? ["pad"] : base;
    $("mTools").classList.toggle("hidden", !allowed.length);
    clearPad();
    if (!allowed.includes(tab)) tab = allowed[0] || "pad";
    if (open){ if (!allowed.length) close(); else paint(); }
  }

  /* ---------- panel ---------- */
  function build(){
    if (built) return; built = true;
    const p = el("div", "tools hidden"); p.id = "toolsPanel"; p.setAttribute("role", "dialog"); p.setAttribute("aria-label", "Tools");
    p.innerHTML = `<div class="tbar"><div class="ttabs" role="tablist"></div><button class="iconbtn" id="toolsClose" aria-label="Close tools">${ic("close")}</button></div>
      <div class="tbody">
        <div class="tpane" data-t="pad">
          <div class="padtools">
            <span class="pgroup" role="radiogroup" aria-label="Draw with">${[["pen", "Pen"], ["line", "Line"], ["rect", "Box"], ["oval", "Circle"], ["text", "Text"], ["erase", "Eraser"]]
              .map(([m, l]) => `<button data-m="${m}" class="${m === "pen" ? "on" : ""}" role="radio">${l}</button>`).join("")}</span>
            <span class="pgroup"><button data-a="grid" aria-pressed="false">Graph</button><button data-a="undo">Undo</button><button data-a="clear">Clear</button></span>
            <label class="onq"><input type="checkbox" id="padOnQ"> Draw on the question</label>
          </div>
          <div class="padarea"><canvas id="padCanvas"></canvas><div class="padnote hidden" id="padNote">Drawing on the question above</div></div>
        </div>
        <div class="tpane" data-t="calc">
          <input id="calcIn" class="calcin" inputmode="none" autocomplete="off" spellcheck="false" aria-label="Calculation">
          <div class="calcout" id="calcOut" aria-live="polite"></div>
          <div class="calckeys">${["C","(",")","^","÷","7","8","9","√","×","4","5","6","EE","−","1","2","3","ans","+","0",".","±","⌫","="]
            .map(k => `<button data-k="${k}" class="${k === "=" ? "eq" : /[0-9.]/.test(k) ? "dig" : ""}">${k}</button>`).join("")}</div>
        </div>
        <div class="tpane" data-t="pt">
          <div class="ptinfo" id="ptInfo">Tap an element</div>
          <div class="ptwrap"><div class="ptgrid" id="ptGrid"></div></div>
        </div>
      </div>`;
    document.body.appendChild(p);
    $("toolsClose").onclick = close;
    buildPad(); buildCalc(); buildPT();
  }
  function paint(){
    const tabs = document.querySelector("#toolsPanel .ttabs");
    tabs.innerHTML = allowed.map(t => `<button role="tab" data-t="${t}" class="${t === tab ? "on" : ""}" aria-selected="${t === tab}"><span class="tl">${NAMES[t]}</span><span class="ts">${SHORT[t]}</span></button>`).join("");
    tabs.querySelectorAll("button").forEach(b => b.onclick = () => { tab = b.dataset.t; paint(); });
    document.querySelectorAll("#toolsPanel .tpane").forEach(x => x.classList.toggle("hidden", x.dataset.t !== tab));
    if (tab === "pad") sizePad();
    layoutOver();
    if (tab === "calc" && matchMedia("(pointer:fine)").matches) $("calcIn").focus();
  }
  function toggle(){ open ? close() : show(); }
  function show(){
    if (!allowed.length) return;
    build(); open = true;
    $("toolsPanel").classList.remove("hidden"); document.body.classList.add("toolsopen");
    $("mTools").classList.add("on"); paint(); layoutOver();
  }
  function close(){
    open = false;
    if (built) $("toolsPanel").classList.add("hidden");
    document.body.classList.remove("toolsopen"); $("mTools") && $("mTools").classList.remove("on");
    commitText(); layoutOver();
  }

  /* ---------- scratchpad: a sketch on the pad, and one laid over the question ----------
     Each sketch is a list of marks, redrawn from scratch, so undo and resizing are easy.
     Both clear when the question changes; closing the tools only hides them. */
  let mode = "pen", onQ = false;
  const pad = {cv: null, items: [], grid: false}, over = {cv: null, items: [], grid: false};
  const target = () => onQ ? over : pad;
  function buildPad(){
    pad.cv = $("padCanvas");
    over.cv = $("qInk");
    const bar = document.querySelector("#toolsPanel .padtools");
    bar.querySelectorAll("[data-m]").forEach(b => b.onclick = () => { mode = b.dataset.m; bar.querySelectorAll("[data-m]").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-checked", x === b); }); commitText(); });
    bar.querySelectorAll("[data-a]").forEach(b => b.onclick = () => {
      const t = target(), a = b.dataset.a;
      commitText();
      if (a === "undo") t.items.pop();
      if (a === "clear"){ t.items = []; t.grid = false; }
      if (a === "grid") t.grid = !t.grid;
      paintGridBtn(); redraw(t);
    });
    $("padOnQ").onchange = e => { commitText(); onQ = e.target.checked; layoutOver(); $("padNote").classList.toggle("hidden", !onQ); $("padCanvas").classList.toggle("hidden", onQ); paintGridBtn(); if (!onQ) sizePad(); else showQuestion(); };
    [pad, over].forEach(attach);
    window.addEventListener("resize", () => { if (open){ sizePad(); layoutOver(); } });
    if (window.ResizeObserver) new ResizeObserver(() => { if (open) layoutOver(); }).observe(document.querySelector("#mquiz .mq-left"));
  }
  function paintGridBtn(){ const b = document.querySelector('#toolsPanel [data-a="grid"]'); if (b){ b.classList.toggle("on", target().grid); b.setAttribute("aria-pressed", String(target().grid)); } }
  function attach(sk){
    const cv = sk.cv, pt = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    let cur = null;
    cv.addEventListener("pointerdown", e => {
      if (mode === "text"){ e.preventDefault(); placeText(sk, pt(e)); return; }
      commitText();
      cv.setPointerCapture(e.pointerId); const p = pt(e);
      cur = mode === "pen" || mode === "erase" ? {m: mode, pts: [p]} : {m: mode, a: p, b: p};
      sk.items.push(cur); redraw(sk); e.preventDefault();
    });
    cv.addEventListener("pointermove", e => {
      if (!cur) return;
      if (cur.pts) (e.getCoalescedEvents ? e.getCoalescedEvents() : [e]).forEach(ev => cur.pts.push(pt(ev)));
      else cur.b = pt(e);
      redraw(sk);
    });
    const end = () => { if (cur && !cur.pts && Math.hypot(cur.b[0] - cur.a[0], cur.b[1] - cur.a[1]) < 3) sk.items.pop(); cur = null; redraw(sk); };
    cv.addEventListener("pointerup", end); cv.addEventListener("pointercancel", end);
  }
  // text: tap to place a box, type, Enter (or tap elsewhere) to drop it onto the sketch
  let typing = null;
  function placeText(sk, [x, y]){
    commitText();
    const box = el("input", "padtext"); box.type = "text"; box.placeholder = "Type…"; box.setAttribute("aria-label", "Text to add");
    const host = sk.cv.parentNode, r = sk.cv.getBoundingClientRect(), hr = host.getBoundingClientRect();
    box.style.left = (r.left - hr.left + x) + "px"; box.style.top = (r.top - hr.top + y - 14) + "px";
    host.appendChild(box); typing = {sk, x, y, box};
    box.addEventListener("keydown", e => { e.stopPropagation(); if (e.key === "Enter"){ e.preventDefault(); commitText(); } if (e.key === "Escape"){ box.value = ""; commitText(); } });
    box.addEventListener("blur", () => setTimeout(commitText, 0));
    setTimeout(() => box.focus(), 0);
  }
  function commitText(){
    if (!typing) return;
    const {sk, x, y, box} = typing; typing = null;
    if (box.value.trim()) sk.items.push({m: "text", x, y, t: box.value.trim()});
    box.remove(); redraw(sk);
  }
  function fit(sk, w, h){
    const dpr = window.devicePixelRatio || 1;
    sk.cv.style.width = w + "px"; sk.cv.style.height = h + "px";
    sk.cv.width = Math.round(w * dpr); sk.cv.height = Math.round(h * dpr);
    sk.cv.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0); redraw(sk);
  }
  function sizePad(){
    if (!pad.cv || onQ) return;
    const area = pad.cv.parentNode;
    fit(pad, Math.max(100, area.clientWidth), Math.max(120, area.clientHeight));
  }
  // bring the question back into view when drawing on it, so it isn't hidden above the page or under the panel
  function showQuestion(){
    const t = $("mText").getBoundingClientRect(), bar = document.querySelector("#mquiz .topbar"), pn = $("toolsPanel").getBoundingClientRect();
    const floor = bar ? Math.max(0, bar.getBoundingClientRect().bottom) : 0, under = pn.left < t.right && pn.right > t.left, roof = under && pn.top > 0 ? pn.top : innerHeight;
    if (t.top < floor + 4 || t.top > roof - 80) window.scrollBy({top: t.top - floor - 12, behavior: "auto"});
  }
  // the overlay covers the question (text, figure, math), never the answer area
  function layoutOver(){
    const cv = over.cv; if (!cv) return;
    const show = open && (onQ || over.items.length || over.grid);
    cv.classList.toggle("hidden", !show); cv.classList.toggle("live", open && onQ);
    if (!show) return;
    const left = document.querySelector("#mquiz .mq-left"), top = $("mText").offsetTop;
    cv.style.top = top + "px";
    fit(over, left.clientWidth, Math.max(60, left.clientHeight - top));
  }
  function redraw(sk){
    if (!sk || !sk.cv) return;
    const cx = sk.cv.getContext("2d"), W = sk.cv.clientWidth, H = sk.cv.clientHeight;
    cx.clearRect(0, 0, sk.cv.width, sk.cv.height);
    const css = getComputedStyle(document.documentElement), ink = css.getPropertyValue("--ink").trim() || "#e8edf5", soft = css.getPropertyValue("--line").trim() || "#2a3346";
    const mark = css.getPropertyValue("--accent").trim() || "#7c9cff";
    if (sk.grid){
      // template graph: light grid, darker axes through the middle
      const step = Math.max(16, Math.round(Math.min(W, H) / 16)), ox = Math.round(W / 2 / step) * step, oy = Math.round(H / 2 / step) * step;
      cx.lineWidth = 1; cx.strokeStyle = soft; cx.beginPath();
      for (let x = ox % step; x < W; x += step){ cx.moveTo(x + .5, 0); cx.lineTo(x + .5, H); }
      for (let y = oy % step; y < H; y += step){ cx.moveTo(0, y + .5); cx.lineTo(W, y + .5); }
      cx.stroke();
      cx.lineWidth = 1.6; cx.strokeStyle = ink; cx.globalAlpha = .7; cx.beginPath(); cx.moveTo(0, oy + .5); cx.lineTo(W, oy + .5); cx.moveTo(ox + .5, 0); cx.lineTo(ox + .5, H); cx.stroke(); cx.globalAlpha = 1;
    }
    sk.items.forEach(it => {
      const ink2 = sk === over ? mark : ink;
      cx.globalCompositeOperation = it.m === "erase" ? "destination-out" : "source-over";
      cx.strokeStyle = ink2; cx.fillStyle = ink2; cx.lineWidth = it.m === "erase" ? 22 : 2.4; cx.lineCap = cx.lineJoin = "round";
      cx.beginPath();
      if (it.pts){ it.pts.forEach(([x, y], i) => i ? cx.lineTo(x, y) : cx.moveTo(x, y)); if (it.pts.length === 1) cx.lineTo(it.pts[0][0] + .1, it.pts[0][1]); cx.stroke(); }
      else if (it.m === "line"){ cx.moveTo(...it.a); cx.lineTo(...it.b); cx.stroke(); }
      else if (it.m === "rect"){ cx.strokeRect(Math.min(it.a[0], it.b[0]), Math.min(it.a[1], it.b[1]), Math.abs(it.b[0] - it.a[0]), Math.abs(it.b[1] - it.a[1])); }
      else if (it.m === "oval"){ cx.ellipse((it.a[0] + it.b[0]) / 2, (it.a[1] + it.b[1]) / 2, Math.abs(it.b[0] - it.a[0]) / 2, Math.abs(it.b[1] - it.a[1]) / 2, 0, 0, Math.PI * 2); cx.stroke(); }
      else if (it.m === "text"){ cx.font = "600 16px " + (css.getPropertyValue("--font").trim() || "system-ui"); cx.textBaseline = "middle"; cx.fillText(it.t, it.x, it.y); }
    });
    cx.globalCompositeOperation = "source-over";
  }
  function clearPad(){
    if (typing){ typing.box.remove(); typing = null; }
    pad.items = []; pad.grid = false; over.items = []; over.grid = false;
    redraw(pad); redraw(over); layoutOver(); paintGridBtn();
  }

  /* ---------- calculator (no eval: a small parser) ---------- */
  let ans = 0;
  function calc(src){
    const s = src.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-").replace(/√/g, "r").replace(/ans/g, "a").replace(/\s+/g, "");
    let i = 0;
    const peek = () => s[i], eat = c => s[i] === c ? (i++, true) : false;
    function num(){
      const m = /^(\d+\.?\d*|\.\d+)(E[+-]?\d+)?/i.exec(s.slice(i));
      if (!m) throw 0; i += m[0].length; return parseFloat(m[0]);
    }
    function atom(){
      if (eat("(")){ const v = expr(); eat(")"); return v; }
      if (eat("a")) return ans;
      if (eat("r")) return Math.sqrt(unary());
      return num();
    }
    function unary(){ if (eat("-")) return -unary(); if (eat("+")) return unary(); return power(); }
    function power(){ const b = atom(); if (eat("^")) return Math.pow(b, unary()); return b; }
    function term(){
      let v = unary();
      for (;;){
        if (eat("*")) v *= unary();
        else if (eat("/")) v /= unary();
        else if (peek() === "(" || peek() === "r" || peek() === "a") v *= unary();   // 2(3) or 2√9
        else return v;
      }
    }
    function expr(){ let v = term(); for (;;){ if (eat("+")) v += term(); else if (eat("-")) v -= term(); else return v; } }
    const v = expr();
    if (i < s.length || !isFinite(v)) throw 0;
    return v;
  }
  const fmt = v => {
    if (v === 0) return "0";
    const a = Math.abs(v);
    if (a >= 1e10 || a < 1e-6) return v.toExponential(6).replace(/\.?0+e/, "e").replace("e+", " × 10^").replace("e-", " × 10^-");
    return String(+v.toPrecision(10));
  };
  function buildCalc(){
    const inp = $("calcIn"), out = $("calcOut");
    const run = final => {
      const t = inp.value.trim();
      if (!t){ out.textContent = ""; return; }
      try { const v = calc(t); out.textContent = "= " + fmt(v); out.classList.remove("err"); if (final){ ans = v; inp.value = fmt(v).replace(/ × 10\^/, "E"); } }
      catch(e){ out.textContent = final ? "Can't calculate that" : ""; out.classList.toggle("err", final); }
    };
    const insert = t => { const a = inp.selectionStart ?? inp.value.length, b = inp.selectionEnd ?? a; inp.value = inp.value.slice(0, a) + t + inp.value.slice(b); const p = a + t.length; inp.setSelectionRange(p, p); run(false); };
    document.querySelectorAll("#toolsPanel .calckeys button").forEach(b => b.onclick = () => {
      const k = b.dataset.k;
      if (k === "C"){ inp.value = ""; run(false); }
      else if (k === "⌫"){ const a = inp.selectionStart ?? inp.value.length; if (a > 0){ inp.value = inp.value.slice(0, a - 1) + inp.value.slice(a); inp.setSelectionRange(a - 1, a - 1); } run(false); }
      else if (k === "="){ run(true); }
      else if (k === "±"){ inp.value = inp.value.startsWith("−(") && inp.value.endsWith(")") ? inp.value.slice(2, -1) : `−(${inp.value || "0"})`; run(false); }
      else if (k === "EE") insert("E");
      else if (k === "√") insert("√(");
      else insert(k);
      if (matchMedia("(pointer:fine)").matches) inp.focus();
    });
    inp.addEventListener("input", () => run(false));
    inp.addEventListener("keydown", e => { if (e.key === "Enter"){ e.preventDefault(); run(true); } e.stopPropagation(); });
    if (matchMedia("(pointer:fine)").matches) inp.removeAttribute("inputmode");
  }

  /* ---------- bare-bones periodic table: number, symbol, mass ---------- */
  const EL = "H Hydrogen 1.008|He Helium 4.003|Li Lithium 6.94|Be Beryllium 9.012|B Boron 10.81|C Carbon 12.01|N Nitrogen 14.01|O Oxygen 16.00|F Fluorine 19.00|Ne Neon 20.18|Na Sodium 22.99|Mg Magnesium 24.31|Al Aluminum 26.98|Si Silicon 28.09|P Phosphorus 30.97|S Sulfur 32.06|Cl Chlorine 35.45|Ar Argon 39.95|K Potassium 39.10|Ca Calcium 40.08|Sc Scandium 44.96|Ti Titanium 47.87|V Vanadium 50.94|Cr Chromium 52.00|Mn Manganese 54.94|Fe Iron 55.85|Co Cobalt 58.93|Ni Nickel 58.69|Cu Copper 63.55|Zn Zinc 65.38|Ga Gallium 69.72|Ge Germanium 72.63|As Arsenic 74.92|Se Selenium 78.97|Br Bromine 79.90|Kr Krypton 83.80|Rb Rubidium 85.47|Sr Strontium 87.62|Y Yttrium 88.91|Zr Zirconium 91.22|Nb Niobium 92.91|Mo Molybdenum 95.95|Tc Technetium (98)|Ru Ruthenium 101.07|Rh Rhodium 102.91|Pd Palladium 106.42|Ag Silver 107.87|Cd Cadmium 112.41|In Indium 114.82|Sn Tin 118.71|Sb Antimony 121.76|Te Tellurium 127.60|I Iodine 126.90|Xe Xenon 131.29|Cs Cesium 132.91|Ba Barium 137.33|La Lanthanum 138.91|Ce Cerium 140.12|Pr Praseodymium 140.91|Nd Neodymium 144.24|Pm Promethium (145)|Sm Samarium 150.36|Eu Europium 151.96|Gd Gadolinium 157.25|Tb Terbium 158.93|Dy Dysprosium 162.50|Ho Holmium 164.93|Er Erbium 167.26|Tm Thulium 168.93|Yb Ytterbium 173.05|Lu Lutetium 174.97|Hf Hafnium 178.49|Ta Tantalum 180.95|W Tungsten 183.84|Re Rhenium 186.21|Os Osmium 190.23|Ir Iridium 192.22|Pt Platinum 195.08|Au Gold 196.97|Hg Mercury 200.59|Tl Thallium 204.38|Pb Lead 207.2|Bi Bismuth 208.98|Po Polonium (209)|At Astatine (210)|Rn Radon (222)|Fr Francium (223)|Ra Radium (226)|Ac Actinium (227)|Th Thorium 232.04|Pa Protactinium 231.04|U Uranium 238.03|Np Neptunium (237)|Pu Plutonium (244)|Am Americium (243)|Cm Curium (247)|Bk Berkelium (247)|Cf Californium (251)|Es Einsteinium (252)|Fm Fermium (257)|Md Mendelevium (258)|No Nobelium (259)|Lr Lawrencium (262)|Rf Rutherfordium (267)|Db Dubnium (268)|Sg Seaborgium (269)|Bh Bohrium (270)|Hs Hassium (269)|Mt Meitnerium (278)|Ds Darmstadtium (281)|Rg Roentgenium (282)|Cn Copernicium (285)|Nh Nihonium (286)|Fl Flerovium (289)|Mc Moscovium (290)|Lv Livermorium (293)|Ts Tennessine (294)|Og Oganesson (294)"
    .split("|").map((x, i) => { const [sym, name, mass] = x.split(" "); return {z: i + 1, sym, name, mass}; });
  // grid spot (row, column) for each element; La–Lu and Ac–Lr sit in two rows underneath
  function spot(z){
    const starts = [[1, 1], [3, 2], [11, 3], [19, 4], [37, 5], [55, 6], [87, 7]];
    if (z >= 57 && z <= 71) return [9, z - 57 + 3];
    if (z >= 89 && z <= 103) return [10, z - 89 + 3];
    let [s, row] = starts.filter(([a]) => z >= a).pop(); const k = z - s;
    if (row === 1) return [1, z === 1 ? 1 : 18];
    if (row <= 3) return [row, k < 2 ? k + 1 : k + 11];
    if (row <= 5) return [row, k + 1];
    // periods 6 and 7: groups 1–2, then the f-block gap, then groups 4–18
    if (k < 2) return [row, k + 1];
    return [row, (row === 6 ? z - 72 : z - 104) + 4];
  }
  function buildPT(){
    const g = $("ptGrid");
    g.innerHTML = EL.map(e => { const [r, c] = spot(e.z); return `<button class="el" style="grid-row:${r};grid-column:${c}" data-z="${e.z}" aria-label="${e.name}"><i>${e.z}</i><b>${e.sym}</b></button>`; }).join("")
      + `<span class="elgap" style="grid-row:6;grid-column:3">57–71</span><span class="elgap" style="grid-row:7;grid-column:3">89–103</span>`;
    g.querySelectorAll(".el").forEach(b => b.onclick = () => {
      const e = EL[b.dataset.z - 1];
      g.querySelectorAll(".el.on").forEach(x => x.classList.remove("on")); b.classList.add("on");
      $("ptInfo").innerHTML = `<b>${e.sym}</b> ${e.name} · atomic number ${e.z} · mass ${e.mass}`;
    });
  }

  return {forQuestion, toggle, close, calc, spot: z => spot(z), EL};
})();
