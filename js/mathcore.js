/* ---------- MATH CORE: parse, evaluate, render, check ---------- */
const MC = (() => {
  const FUN = {sqrt:Math.sqrt, cbrt:Math.cbrt, sin:Math.sin, cos:Math.cos, tan:Math.tan, ln:Math.log, log:Math.log10, abs:Math.abs,
    // calculus
    sec:x => 1 / Math.cos(x), csc:x => 1 / Math.sin(x), cot:x => 1 / Math.tan(x), exp:Math.exp,
    arcsin:Math.asin, arccos:Math.acos, arctan:Math.atan, arcsec:x => Math.acos(1 / x)};
  const FNAMES = Object.keys(FUN).sort((a,b) => b.length - a.length);

  function clean(s){
    return String(s)
      .replace(/[−–—]/g, "-").replace(/[×·∙•]/g, "*").replace(/÷/g, " ÷ ")
      .replace(/π/g, "pi").replace(/√/g, "sqrt").replace(/∛/g, "cbrt")
      .replace(/²/g, "^2").replace(/³/g, "^3").replace(/∞/g, "inf")
      .replace(/[\[{]/g, "(").replace(/[\]}]/g, ")")
      // calculus notation: sin^-1(x) → arcsin(x); tan⁻¹ too; sin^2(x) → (sin(x))^2; sin^2 x → (sin(x))^2
      .replace(/\|([^|]+)\|/g, "abs($1)")
      .replace(/⁻¹/g, "^-1").replace(/(?<![a-z])(sin|cos|tan|sec)\s*\^\s*\(?\s*-\s*1\s*\)?/gi, "arc$1")
      .replace(/(?<![a-z])(sin|cos|tan|sec|csc|cot)\s*\^\s*(\d+)\s*\(([^()]*(?:\([^()]*\)[^()]*)*)\)/gi, "($1($3))^$2")
      .replace(/(?<![a-z])(sin|cos|tan|sec|csc|cot)\s*\^\s*(\d+)\s*(\d*[a-z](?![a-z(]))/gi, "($1($3))^$2");
  }

  function tokenize(src){
    const s = clean(src), out = [];
    let i = 0;
    while (i < s.length){
      const c = s[i];
      if (/\s/.test(c)){ i++; continue; }
      if (/[0-9.]/.test(c)){
        const m = s.slice(i).match(/^(\d+\.?\d*|\.\d+)/);
        if (!m) throw new Error("bad number");
        out.push({t:"num", v:parseFloat(m[1]), s:m[1]}); i += m[1].length; continue;
      }
      if (/[a-zA-Z]/.test(c)){
        let word = s.slice(i).match(/^[a-zA-Z]+/)[0]; i += word.length;
        while (word.length){
          const f = FNAMES.find(n => word.toLowerCase().startsWith(n));
          if (f){ out.push({t:"fn", n:f}); word = word.slice(f.length); continue; }
          if (word.toLowerCase().startsWith("pi")){ out.push({t:"num", v:Math.PI, s:"π"}); word = word.slice(2); continue; }
          if (word[0] === "e"){ out.push({t:"num", v:Math.E, s:"e"}); word = word.slice(1); continue; }   // Euler's number
          out.push({t:"var", n:word[0]}); word = word.slice(1);
        }
        continue;
      }
      if ("+-*/^()÷".includes(c)){ out.push({t:c}); i++; continue; }
      throw new Error("unexpected " + c);
    }
    return out;
  }

  function parse(src){
    const tk = tokenize(src); let p = 0;
    const peek = () => tk[p], eat = t => { if (!tk[p] || tk[p].t !== t) throw new Error("expected " + t); return tk[p++]; };
    const startsFactor = x => x && (x.t === "num" || x.t === "var" || x.t === "fn" || x.t === "(");
    function expr(){
      let a = obel();
      while (peek() && (peek().t === "+" || peek().t === "-")){ const op = tk[p++].t; a = {k:"add", op, a, b:obel()}; }
      return a;
    }
    // "÷" splits a term into two halves: a/b ÷ c/d = (a/b) ÷ (c/d)
    function obel(){
      let a = term();
      while (peek() && peek().t === "÷"){ p++; a = {k:"div", a, b:term(), ob:true}; }
      return a;
    }
    function term(){
      let a = unary();
      for (;;){
        const x = peek();
        if (x && x.t === "*"){ p++; a = {k:"mul", a, b:unary(), ex:true}; }
        else if (x && x.t === "/"){ p++; a = {k:"div", a, b:unary()}; }
        else if (startsFactor(x)){ a = {k:"mul", a, b:power(), ex:false}; }
        else return a;
      }
    }
    function unary(){
      const x = peek();
      if (x && x.t === "-"){ p++; return {k:"neg", a:unary()}; }
      if (x && x.t === "+"){ p++; return unary(); }
      return power();
    }
    function power(){
      const b = primary();
      if (peek() && peek().t === "^"){ p++; return {k:"pow", a:b, b:unary()}; }
      return b;
    }
    function primary(){
      const x = tk[p++];
      if (!x) throw new Error("unexpected end");
      if (x.t === "num") return {k:"num", v:x.v, s:x.s};
      if (x.t === "var") return {k:"var", n:x.n};
      if (x.t === "fn"){
        const arg = (peek() && peek().t === "(") ? primary() : power();
        return {k:"fn", n:x.n, a:arg};
      }
      if (x.t === "("){ if (peek() && peek().t === ")"){ p++; return {k:"box"}; } const e = expr(); eat(")"); return {k:"par", a:e}; }
      throw new Error("unexpected " + x.t);
    }
    const e = expr();
    if (p < tk.length) throw new Error("unexpected " + tk[p].t);
    return e;
  }

  function evaluate(n, env){
    switch (n.k){
      case "num": return n.v;
      case "box": throw new Error("fill in the empty box");
      case "var": { if (!(n.n in env)) throw new Error("unknown variable " + n.n); return env[n.n]; }
      case "add": { const a = evaluate(n.a, env), b = evaluate(n.b, env); return n.op === "+" ? a + b : a - b; }
      case "mul": return evaluate(n.a, env) * evaluate(n.b, env);
      case "div": return evaluate(n.a, env) / evaluate(n.b, env);
      case "neg": return -evaluate(n.a, env);
      case "par": return evaluate(n.a, env);
      case "fn":  return FUN[n.n](evaluate(n.a, env));
      case "pow": {
        const a = evaluate(n.a, env), b = evaluate(n.b, env);
        if (a < 0 && !Number.isInteger(b)){
          // real odd roots, e.g. x^(1/3) or x^(2/3)
          for (const q of [3,5,7]){ const pq = b*q; if (Math.abs(pq - Math.round(pq)) < 1e-9){ const r = -Math.pow(-a, 1/q); return Math.pow(r, Math.round(pq)); } }
        }
        return Math.pow(a, b);
      }
    }
  }
  function vars(n, set = new Set()){
    if (n.k === "var") set.add(n.n);
    ["a","b"].forEach(k => n[k] && typeof n[k] === "object" && vars(n[k], set));
    return set;
  }

  /* ---- render AST to HTML ---- */
  const RAD = `<svg class="radsvg" viewBox="0 0 12 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0.5 14.5 L3.2 13 L6.6 23.2 L11.6 0.8" vector-effect="non-scaling-stroke"/></svg>`;
  const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
  const strip = n => n.k === "par" ? n.a : n;
  const digits = n => n.k === "num" && /^[0-9.]/.test(n.s);            // a written number, not π or e
  function startsNum(n){ while (n.k === "mul" || n.k === "pow" || n.k === "add") n = n.a; return digits(n); }
  function endsNum(n){ while (n.k === "mul" || n.k === "add") n = n.b; return digits(n) || (n.k === "pow"); }
  function R(n){
    switch (n.k){
      case "num": return `<span class="mn">${esc(n.s)}</span>`;
      case "box": return `<span class="mbox"></span>`;
      case "var": return `<i class="mv">${esc(n.n)}</i>`;
      case "add": return R(n.a) + `<span class="mo">${n.op === "+" ? "+" : "−"}</span>` + R(n.b);
      case "neg": return `<span class="mneg">−</span>` + R(n.a);
      case "par": return (n.a.k === "div" && !n.a.ob) ? R(n.a) : `<span class="mp">(</span>${R(n.a)}<span class="mp">)</span>`;
      case "mul": {
        // a dot only where juxtaposition would misread: 2·3, (x+3)·2, x·(−2). 3π and 2x stay as written.
        const needDot = n.ex || (startsNum(n.b) && (endsNum(n.a) || n.a.k === "par" || n.a.k === "var")) || n.b.k === "neg";
        return R(n.a) + (needDot ? `<span class="mo">·</span>` : "") + R(n.b);
      }
      case "div":
        if (n.ob) return R(n.a) + `<span class="mo">÷</span>` + R(n.b);
        return `<span class="frac"><span class="fnum">${R(strip(n.a))}</span><span class="fden">${R(strip(n.b))}</span></span>`;
      case "pow": {
        let base = n.a.k === "par" ? `<span class="mp">(</span>${R(n.a.a)}<span class="mp">)</span>` : R(n.a);
        if (["div","add","neg","mul"].includes(n.a.k) || (n.a.k === "fn" && n.a.n !== "sqrt")) base = `<span class="mp">(</span>${base}<span class="mp">)</span>`;
        // a fraction in an exponent is written on one line (x^(2/3)), since a stacked one is too small to read
        const e = strip(n.b), flat = d => R(strip(d.a)) + "/" + R(strip(d.b));
        const ex = e.k === "div" && !e.ob ? flat(e) : e.k === "neg" && strip(e.a).k === "div" && !strip(e.a).ob ? "−" + flat(strip(e.a)) : R(e);
        return base + `<sup>${ex}</sup>`;
      }
      case "fn":
        if (n.n === "sqrt" || n.n === "cbrt") return `<span class="msqrt">${n.n === "cbrt" ? `<span class="ridx">3</span>` : ""}${RAD}<span class="radi">${R(strip(n.a))}</span></span>`;
        if (n.n === "abs") return `<span class="mp">|</span>${R(strip(n.a))}<span class="mp">|</span>`;
        return `<span class="mf">${n.n}</span><span class="mp">(</span>${R(strip(n.a))}<span class="mp">)</span>`;
    }
  }
  function render(src){ try { return R(parse(src)); } catch(e){ return esc(src); } }
  function toLabel(to){
    if (to === "inf") return "∞"; if (to === "-inf") return "−∞";
    const m = String(to).match(/^(.*?)([+-])$/); // one-sided like "2+" "-1-"
    if (m && m[1] !== "") return render(m[1]) + `<sup>${m[2] === "+" ? "+" : "−"}</sup>`;
    return render(to);
  }
  function renderLim(v, to, body){
    return `<span class="mlim"><span class="limw">lim<span class="limsub"><i>${v}</i>→${toLabel(to)}</span></span>${body}</span>`;
  }
  // text with {{math}} snippets
  function renderText(t){
    return esc(t).replace(/\{\{(.+?)\}\}/g, (_, m) => m === "lim" ? `<span class="mf">lim</span>` : `<span class="mi">${render(m.replace(/&lt;/g,"<").replace(/&amp;/g,"&"))}</span>`)
      .replace(/\[\[(.+?)\]\]/g, (_, m) => `<span class="chem">${formulaHTML(m)}</span>`)    // [[Al2O3]] → Al₂O₃
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")                                             // **term** → bold
      .replace(/__([^_\s](?:[^_]*?[^_\s])?)__/g, "<u class=\"tgt\">$1</u>");                                  // __phrase__ → underlined (grammar)
  }

  /* ---- answers ---- */
  const SPECIAL = s => {
    const t = s.trim().toLowerCase().replace(/\s+/g, "");
    if (/^(dne|doesnotexist|undefined|und)$/.test(t)) return "DNE";
    if (/^(\+?(inf|infinity|oo|∞))$/.test(t)) return "inf";
    if (/^[-−](inf|infinity|oo|∞)$/.test(t)) return "-inf";
    if (/^(none|no|n\/a|na|nothing|0solutions|ø|∅)$/.test(t)) return "none";
    return null;
  };
  function numVal(s){
    const n = parse(s);
    if (vars(n).size) throw new Error("no variables allowed here");
    const v = evaluate(n, {});
    if (!isFinite(v)) throw new Error("not a number");
    return v;
  }
  const close = (a, b) => Math.abs(a - b) <= 1e-7 * Math.max(1, Math.abs(a), Math.abs(b));

  function rng(seed){ let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }

  // ---- "is it simplified?" helpers ----
  const strip0 = n => (n.k === "par" || n.k === "neg") ? strip0(n.a) : n;
  function hasDiv(n){ if (!n || typeof n !== "object") return false; if (n.k === "pow") return hasDiv(n.a); if (n.k === "div") return true; return hasDiv(n.a) || hasDiv(n.b); }
  function nested(n){ if (!n || typeof n !== "object") return false;
    if (n.k === "div"){ if (n.ob) return true; if (hasDiv(n.a) || hasDiv(n.b)) return true; }
    if (n.k === "pow") return nested(n.a);
    return nested(n.a) || nested(n.b); }
  function addTerms(n, out = []){ n = n.k === "par" ? n.a : n; if (n.k === "add"){ addTerms(n.a, out); addTerms(n.b, out); } else out.push(n); return out; }
  function structureIssue(ast){
    if (nested(ast)) return "it's equivalent, but there's still a fraction inside a fraction. Simplify it fully";
    if (addTerms(strip0(ast)).filter(hasDiv).length >= 2) return "it's equivalent, but it's not one single fraction yet. Combine over a common denominator";
    return null;
  }

  // ---- radicals: is the answer in simplest radical form? ----
  // flattens a product under a radical into number factors {c} and variable powers {e}; false if it isn't a plain monomial
  function radFactors(n, out){
    if (n.k === "par" || n.k === "neg") return radFactors(n.a, out);
    if (n.k === "mul") return radFactors(n.a, out) && radFactors(n.b, out);
    if (n.k === "num"){ out.push({c: n.v}); return true; }
    if (n.k === "var"){ out.push({e: 1}); return true; }
    if (n.k === "pow" && strip0(n.a).k === "var" && n.b.k === "num"){ out.push({e: n.b.v}); return true; }
    return false;
  }
  // a sum that is still being multiplied or raised to a power, e.g. (2+√5)(2−√5) or (4+3√6)^2
  function sumsMultiplied(n){
    if (!n || typeof n !== "object") return false;
    const isSum = x => x && strip0(x).k === "add";
    if (n.k === "mul" && (isSum(n.a) || isSum(n.b))) return true;
    if (n.k === "pow" && isSum(n.a)) return true;
    if (n.k === "div") return sumsMultiplied(n.a);      // a denominator may stay factored
    return sumsMultiplied(n.a) || sumsMultiplied(n.b);
  }
  function radicalIssue(ast){
    let issue = null;
    (function walk(n, inDen){
      if (!n || typeof n !== "object" || issue) return;
      if (n.k === "fn" && (n.n === "sqrt" || n.n === "cbrt")){
        const idx = n.n === "sqrt" ? 2 : 3, left = `it's equivalent, but a perfect ${idx === 2 ? "square" : "cube"} is still under the radical. Pull it out`;
        if (inDen){ issue = "it's equivalent, but there's still a radical in the denominator. Rationalize it"; return; }
        if (strip0(n.a).k === "div"){ issue = "it's equivalent, but there's still a fraction under the radical"; return; }
        const f = [];
        if (radFactors(n.a, f)) for (const x of f){
          if (x.e !== undefined && x.e >= idx){ issue = left; return; }
          if (x.c !== undefined && Number.isInteger(x.c)) for (let q = 2; q ** idx <= Math.abs(x.c); q++) if (x.c % (q ** idx) === 0){ issue = left; return; }
        }
        return;
      }
      if (n.k === "div"){ walk(n.a, inDen); walk(n.b, true); return; }
      walk(n.a, inDen); walk(n.b, inDen);
    })(ast, false);
    return issue;
  }

  function sameExpr(uSrc, aSrc, vs, range){
    const u = parse(uSrc), a = parse(aSrc);
    const extra = [...vars(u)].filter(v => !vs.includes(v));
    if (extra.length) return {ok:false, why:`unexpected variable ${extra.join(", ")}`};
    const [lo, hi] = range || [-4.3, 4.7];
    const r = rng(12345); let good = 0;
    for (let t = 0; t < 40 && good < 7; t++){
      const env = {}; vs.forEach(v => env[v] = lo + (hi - lo) * r());
      const av = evaluate(a, env); if (!isFinite(av) || Math.abs(av) > 1e7) continue;
      const uv = evaluate(u, env);
      if (!isFinite(uv) || Math.abs(uv - av) > 1e-6 * Math.max(1, Math.abs(av))) return {ok:false};
      good++;
    }
    return {ok: good >= 4};
  }

  // same function up to a constant (for antiderivatives)
  function sameUpToC(uSrc, aSrc, vs, range){
    const u = parse(uSrc), a = parse(aSrc);
    const extra = [...vars(u)].filter(v => !vs.includes(v));
    if (extra.length) return {ok:false, why:`unexpected variable ${extra.join(", ")}`};
    const [lo, hi] = range || [0.2, 2.9];
    const r = rng(777); let good = 0, d0 = null;
    for (let t = 0; t < 50 && good < 7; t++){
      const env = {}; vs.forEach(v => env[v] = lo + (hi - lo) * r());
      const av = evaluate(a, env); if (!isFinite(av) || Math.abs(av) > 1e7) continue;
      const uv = evaluate(u, env); if (!isFinite(uv)) return {ok:false};
      const d = uv - av;
      if (d0 === null) d0 = d;
      else if (Math.abs(d - d0) > 1e-6 * Math.max(1, Math.abs(av))) return {ok:false};
      good++;
    }
    return {ok: good >= 4};
  }

  // chemistry helpers: Al₂O₃ → Al2O3, ²⁺ → 2+
  const SUBS = "₀₁₂₃₄₅₆₇₈₉", SUPS = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  const plainChem = t => String(t).replace(/[₀-₉]/g, d => SUBS.indexOf(d)).replace(/[⁰¹²³⁴-⁹]/g, d => SUPS.indexOf(d)).replace(/⁺/g, "+").replace(/[⁻−–]/g, "-");
  const normFormula = t => plainChem(t).replace(/\s+/g, "").toLowerCase();
  const normWords = t => plainChem(t).toLowerCase().replace(/[^a-z0-9+\- ]/g, " ").replace(/\b(a|an|the)\b/g, " ").replace(/\s+/g, " ").trim();
  function parseCharge(raw){
    const s = plainChem(raw).replace(/\s+/g, "");
    const m = s.match(/^([+-])?(\d*)([+-])?$/);
    if (!m || (!m[1] && !m[3]) || (m[1] && m[3])) return null;
    return ((m[1] || m[3]) === "-" ? -1 : 1) * (m[2] ? +m[2] : 1);
  }
  // "NO3^-" → NO₃⁻, "SO4^2-" → SO₄²⁻; a bare trailing sign (typed "NO3-") also counts as the charge
  const formulaHTML = f => {
    const t = plainChem(f).trim(), m = t.match(/^(.*?)(?:\^(\d*[+-])|([+-]))$/);
    const body = m ? m[1] : t, chg = m ? (m[2] || m[3]) : "";
    return esc(body).replace(/([A-Za-z\)])(\d+)/g, "$1<sub>$2</sub>") + (chg ? `<sup>${chg.replace("-", "−")}</sup>` : "");
  };

  // check one field; returns {ok, msg}
  function check(field, input){
    const raw = (input || "").trim();
    if (!raw) return {ok:false, empty:true};
    const sp = SPECIAL(raw);
    try {
      switch (field.t){
        case "num": {
          const a = String(field.a);
          if (a === "DNE") return {ok: sp === "DNE"};
          if (a === "inf" || a === "-inf") return {ok: sp === a || sp === "DNE", note: sp === "DNE" ? "Full credit. Your notes accept DNE, but writing " + (a === "inf" ? "∞" : "−∞") + " says more." : ""};
          if (a === "none") return {ok: sp === "none"};
          if (sp) return {ok:false};
          let s = raw.replace(/^[a-z]\s*=/i, "").replace(/^f\(\s*0\s*\)\s*=/i, "");
          // calculator answers: AP accepts 3 decimals, rounded or truncated
          if (field.dec) return {ok: Math.abs(numVal(s) - numVal(a)) < 0.00101};
          return {ok: close(numVal(s), numVal(a))};
        }
        case "pf": {
          // partial fractions: must equal the original AND be written as separate simple fractions
          if (sp) return {ok:false};
          const res = sameExpr(raw, field.a, ["x"]);
          if (!res.ok) return {ok:false, why: res.why || "add your fractions back together. They should give the original"};
          const terms = [], walk = n => { if (n.k === "add"){ walk(n.a); walk(n.b); } else terms.push(n); };
          walk(parse(raw));
          const ev = (n, x) => evaluate(n, {x});
          const simple = t => {
            while (t.k === "neg" || t.k === "par") t = t.a;
            if (t.k !== "div") return false;
            const N = t.a, D = t.b, c = [1.3, 2.1, 3.7].map(x => ev(N, x)), d = [1.3, 2.1, 3.7].map(x => ev(D, x));
            const constTop = Math.abs(c[0] - c[1]) < 1e-9 && Math.abs(c[1] - c[2]) < 1e-9;
            const s1 = (d[1] - d[0]) / 0.8, s2 = (d[2] - d[1]) / 1.6;
            return constTop && Math.abs(s1 - s2) < 1e-9 && Math.abs(s1) > 1e-9;
          };
          if (terms.length !== (field.n || 2) || !terms.every(simple))
            return {ok:false, equiv:true, why:"it's equal, but write it as separate fractions with a number on top, like A/(x+1) + B/(x−2)"};
          return {ok:true};
        }
        case "anti": {
          // an antiderivative: any answer that differs by a constant is right, but it needs its + C
          if (sp) return {ok:false};
          const s = raw.replace(/^(y|[a-z]\s*\(\s*[a-z]\s*\)|F\s*\(\s*[a-z]\s*\))\s*=/i, "");
          const hasC = /[+-]\s*c(?![a-z(])/i.test(s), core = s.replace(/[+-]\s*c(?![a-z(])/gi, "").trim() || "0";
          const res = sameUpToC(core, field.a, field.v || ["x"], field.r);
          if (!res.ok) return res;
          if (!hasC) return {ok:false, why:"don't forget the + C", equiv:true};
          return {ok:true};
        }
        case "expr": case "rat": {
          if (field.a === "none") return {ok: sp === "none"};
          if (sp) return {ok:false};
          let s = raw.replace(/^(y|f\s*\(\s*[a-z]\s*\)|[a-z]\s*\(\s*[a-z]\s*\))\s*=/i, "");
          const res = sameExpr(s, field.a, field.v || ["x"], field.r);
          if (!res.ok && field.rad && /\||abs/.test(field.a)){
            // right for positive values only: the absolute value bars are missing or misplaced
            let pos; try { pos = sameExpr(s, field.a, field.v || ["x"], [0.5, 4]).ok; } catch(e){ pos = false; }
            if (pos) return {ok:false, why:"close. It works for positive values only, so check where absolute value bars are needed"};
          }
          if (!res.ok) return res;
          if (field.rad){ const issue = radicalIssue(parse(s)); if (issue) return {ok:false, why:issue, equiv:true}; }
          if (field.combine){
            const u = parse(s);
            if (sumsMultiplied(u)) return {ok:false, why:"it's equivalent, but it's not multiplied out yet", equiv:true};
            if (addTerms(strip0(u)).length > addTerms(strip0(parse(field.a))).length) return {ok:false, why:"it's equivalent, but like terms can still be combined", equiv:true};
          }
          if (field.single && addTerms(strip0(parse(s))).length >= 2) return {ok:false, why:"it's equivalent, but it's not combined yet. Write it as a single fraction", equiv:true};
          if (field.simp){
            const u = parse(s), issue = structureIssue(u);
            if (issue) return {ok:false, why:issue, equiv:true};
            for (const env of (field.mustDefine || [])){
              const v = evaluate(u, env);
              if (!isFinite(v)) return {ok:false, why:"it's equivalent, but a common factor still cancels. Simplify fully", equiv:true};
            }
          }
          if (field.t === "rat" && field.holes){
            const u = parse(s);
            for (const h of field.holes){
              const v = evaluate(u, {x:h});
              if (isFinite(v)) return {ok:false, why:`your function is defined at x = ${h}, but the graph has a hole there. Keep the canceling factor`};
            }
          }
          return {ok:true};
        }
        case "set": {
          const want = field.a.map(numVal);
          if (sp === "none") return {ok: want.length === 0};
          if (sp) return {ok:false};
          let s = raw.replace(/[a-z]\s*(≠|!=|=|<>)/gi, ",").replace(/\band\b|\bor\b|;|&/gi, ",");
          const got = s.split(",").map(x => x.trim()).filter(Boolean).map(numVal);
          const left = want.slice(), extra = [];
          for (const g of got){ const i = left.findIndex(w => field.dec ? Math.abs(w - g) < 0.00101 : close(w, g)); if (i < 0) extra.push(g); else left.splice(i, 1); }
          if (!left.length && !extra.length) return {ok:true};
          if (!extra.length && field.canceled && left.every(m => field.canceled.some(c => close(+c, m))))
            return {ok:false, why:"you're missing value(s) from a factor that canceled. Excluded values come from the ORIGINAL denominator"};
          if (!extra.length) return {ok:false, why:`missing ${left.length} value${left.length > 1 ? "s" : ""}`};
          if (!left.length) return {ok:false, why: field.sol ? "one of those doesn't work in the original equation (an extraneous solution)" : "you have an extra value that isn't excluded"};
          return {ok:false};
        }
        case "pts": {
          const want = field.a.map(([x, y]) => [numVal(x), numVal(y)]);
          if (sp === "none") return {ok: want.length === 0};
          if (sp) return {ok:false};
          const pairs = [...raw.matchAll(/\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g)].map(m => m[1].split(","));
          if (!pairs.length || pairs.some(p => p.length !== 2)) return {ok:false, why:"write points like (4, 2/7)"};
          const got = pairs.map(([x, y]) => [numVal(x), numVal(y)]);
          if (got.length !== want.length) return {ok:false, why: got.length < want.length ? "missing a point" : "too many points"};
          const left = want.slice();
          for (const g of got){ const i = left.findIndex(w => close(w[0], g[0]) && close(w[1], g[1])); if (i < 0) return {ok:false}; left.splice(i, 1); }
          return {ok:true};
        }
        case "text": {
          return {ok: [].concat(field.a).some(x => normWords(x) === normWords(raw))};
        }
        case "choice": return {ok: raw === String(field.a).trim()};   // the value always comes from a tapped option
        case "under": {
          // underline: the words tapped, as "first-last" word positions
          if (raw === field.a) return {ok:true};
          const [a, b] = field.a.split("-").map(Number), [x, y] = raw.split("-").map(Number);
          const why = x <= a && y >= b ? "you underlined a little too much" : x >= a && y <= b ? "part of it is missing" : null;
          return {ok:false, why};
        }
        case "formula": {
          const want = [].concat(field.a), got = normFormula(raw);
          if (want.some(w => normFormula(w) === got)) return {ok:true};
          const letters = t => t.replace(/[0-9]/g, "");
          if (want.some(w => letters(normFormula(w)) === letters(got))) return {ok:false, why:"right elements, but the subscripts are off (did you reduce, and is it metal first?)"};
          return {ok:false};
        }
        case "charge": {
          const c = parseCharge(raw);
          if (c === null) return {ok:false, why:"write a charge with its sign, like 2+ or 3−"};
          return {ok: c === +field.a, why: Math.abs(c) === Math.abs(+field.a) && c !== +field.a ? "right size, wrong sign" : ""};
        }
      }
    } catch(e){ return {ok:false, why:"couldn't read that: " + e.message}; }
    return {ok:false};
  }

  // can we read this answer at all? (a typo shouldn't cost an attempt)
  const hasBox = n => !!n && typeof n === "object" && (n.k === "box" || hasBox(n.a) || hasBox(n.b));
  const stripLHS = s => s.replace(/^(y|f\s*\(\s*[a-z]\s*\)|[a-z]\s*\(\s*[a-z]\s*\))\s*=/i, "").replace(/^[a-z]\s*=/i, "").replace(/^\s*=/, "");
  const friendly = m => /empty box/.test(m) ? "fill in the empty box" : /variables/.test(m) ? "use a number here, not a variable"
    : /unexpected end|expected/.test(m) ? "it looks unfinished. Check the end and the parentheses" : /unexpected/.test(m) ? "there's a symbol it doesn't understand" : "check it for typos";
  // a sentence with words a..b underlined (for showing the right answer)
  function underHTML(words, a, b){
    return '<span class="usent">' + words.map((w, i) => i >= a && i <= b ? `<u>${esc(w)}</u>` : esc(w)).join(" ").replace(/<\/u> <u>/g, " ") + "</span>";
  }
  function readable(field, input){
    const raw = (input || "").trim();
    if (!raw) return {ok:false, why:"it's empty"};
    const sp = SPECIAL(raw);
    try {
      switch (field.t){
        case "num": if (!sp) numVal(stripLHS(raw).replace(/^f\(\s*0\s*\)\s*=/i, "")); break;
        case "expr": case "rat": case "pf": if (!sp){ const n = parse(stripLHS(raw)); if (hasBox(n)) throw new Error("empty box"); } break;
        case "anti": if (!sp){ const n = parse(stripLHS(raw)); if (hasBox(n)) throw new Error("empty box"); } break;
        case "set": if (!sp) raw.replace(/[a-z]\s*(≠|!=|=|<>)/gi, ",").replace(/\band\b|\bor\b|;|&/gi, ",").split(",").map(x => x.trim()).filter(Boolean).forEach(numVal); break;
        case "pts": {
          if (sp) break;
          const pairs = [...raw.matchAll(/\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g)].map(m => m[1].split(","));
          if (!pairs.length || pairs.some(p => p.length !== 2)) return {ok:false, why:"write points like (4, 2/7)"};
          pairs.forEach(([x, y]) => { numVal(x); numVal(y); }); break;
        }
        case "charge": if (parseCharge(raw) === null) return {ok:false, why:"write a charge with its sign, like 2+ or 3−"}; break;
        case "under": if (!/^\d+-\d+$/.test(raw)) return {ok:false, why:"tap the first and last word to underline"}; break;
      }
    } catch(e){ return {ok:false, why: friendly(String(e.message || e))}; }
    return {ok:true};
  }
  // fix obvious slips: a missing or extra parenthesis, a stray "=" in front. Anything less certain is left alone.
  function autofix(field, input){
    const t = String(input || "").trim();
    if (!["num", "expr", "rat", "pf", "set", "pts", "anti"].includes(field.t) || !t || SPECIAL(t)) return t;
    let s = t.replace(/^=\s*/, "");
    let depth = 0, lead = 0;
    for (const c of s){ if (c === "(") depth++; else if (c === ")"){ if (depth) depth--; else lead++; } }
    s = "(".repeat(lead) + s + ")".repeat(depth);
    return s;
  }

  // HTML for showing the correct answer of a field
  function answerHTML(f){
    const show = a => a === "DNE" ? "DNE" : a === "inf" ? "∞" : a === "-inf" ? "−∞" : a === "none" ? "none" : render(a);
    switch (f.t){
      case "num": case "expr": case "rat": case "pf": return show(String(f.a));
      case "anti": return render(f.a) + ' <span class="mo">+</span> <i class="mv">C</i>';
      case "set": return f.a.length ? f.a.map(render).join(", ") : "none";
      case "pts": return f.a.length ? f.a.map(([x,y]) => `(${render(x)}, ${render(y)})`).join(", ") : "none";
      case "text": return renderText([].concat(f.a)[0]);
      case "choice": return renderText(f.a);
      case "under": { const [a, b] = f.a.split("-").map(Number); return underHTML(f.words, a, b); }
      case "formula": return formulaHTML([].concat(f.a)[0]);
      case "charge": { const a = +f.a; return Math.abs(a) + (a < 0 ? "−" : "+"); }
    }
  }
  // live preview of what the student typed
  function preview(f, input){
    const raw = (input || "").trim(); if (!raw) return "";
    const sp = SPECIAL(raw);
    if (sp) return sp === "inf" ? "∞" : sp === "-inf" ? "−∞" : sp;
    if (f.t === "text" || f.t === "choice" || f.t === "charge" || f.t === "under") return "";
    if (f.t === "formula") return formulaHTML(raw);
    try {
      if (f.t === "set") return raw.replace(/[a-z]\s*(≠|!=|=)/gi, ",").split(/,|\band\b/).map(x => x.trim()).filter(Boolean).map(x => R(parse(x))).join(", ");
      if (f.t === "pts") return esc(raw);
      const s = raw.replace(/^(y|f\s*\(\s*[a-z]\s*\)|[a-z]\s*\(\s*[a-z]\s*\))\s*=/i, "").replace(/^[a-z]\s*=/i, "");
      return R(parse(s));
    } catch(e){ return `<span class="perr">can't read that yet</span>`; }
  }

  return {parse, evaluate, render, renderLim, renderText, check, answerHTML, preview, sameExpr, numVal, vars, formulaHTML, readable, autofix, underHTML};
})();
if (typeof module !== "undefined") module.exports = MC;   // lets tools/verify.js use it in Node
