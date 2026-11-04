/* =====================================================================
   Writing practice for "problems" subjects that define saq / leq lists
   (AP World): Short Answer (SAQ) and an LEQ thesis builder.
   No AI grader on a static site, so feedback is quick, honest checks
   (length, specific evidence, explaining "why", rubric pieces) plus
   model answers to compare against.
   ===================================================================== */
const Write = (() => {
  let W = null;   // {kind, list, idx, item}

  function pool(kind, sec){
    const units = PB().units, [uid, sid] = String(sec).split(":");
    const all = units.flatMap(u => (u[kind] || []).map((it, i) => Object.assign({u, id:`${u.id}:${kind}${i}`}, it)));
    const inSec = it => kind === "saq" ? it.sec === sid : (it.secs || []).includes(sid);
    if (sec === "*all") return shuffle(all);
    const unit = all.filter(it => it.u.id === uid);
    if (sid === "all" || sid === "rev") return shuffle(unit);
    // this chapter's prompts first, then the rest of the unit (so "New prompt" never runs out)
    const mine = unit.filter(inSec), rest = unit.filter(it => !inSec(it));
    return (mine.length || kind === "leq") ? shuffle(mine).concat(shuffle(rest)) : [];
  }
  const has = (kind, sec) => pool(kind, sec).length > 0;
  const secName = it => {
    const sid = it.sec || (it.secs || [])[0];
    const s = it.u.sections.find(x => x.id === sid);
    return s ? s.name.split(":")[0] : it.u.short;
  };
  const T = t => MC.renderText(String(t));
  const words = t => (String(t).trim().match(/[A-Za-z0-9'’-]+/g) || []).length;
  const low = t => String(t).toLowerCase();
  const CAUSAL = /\b(because|so that|so\b|which (led|caused|made|allowed|meant|helped|gave)|led to|leading to|as a result|therefore|since|this (caused|meant|allowed|led|made|helped)|resulted|result(ed)? in|caused|allowed|helped|enabled|in order to|by (using|making|giving|creating))/i;
  const row = (ok, text) => `<li class="${ok ? "ok" : "todo"}">${ic(ok ? "check" : "arrow", "ic-s")}<span>${text}</span></li>`;

  function start(kind){
    const list = pool(kind, mSec());
    if (!list.length) return;
    W = {kind, list, idx:0};
    show("write");
    draw();
  }
  function draw(){
    W.item = W.list[W.idx % W.list.length];
    $("wCount").textContent = W.kind === "saq" ? "Short answer" : "Long essay";
    W.kind === "saq" ? drawSAQ(W.item) : drawLEQ(W.item);
    window.scrollTo(0, 0);
  }
  const learnBtn = it => hasNotes(it.u, it.sec || (it.secs || [])[0]) ? `<button class="link learnbtn" id="wLearn" data-ic="book">Learn this</button>` : "";
  function wireCommon(it){
    const l = $("wLearn");
    if (l){ l.innerHTML = ic("book") + "<span>Learn this</span>"; l.onclick = () => openLearn({secs:[`${it.u.id}:${it.sec || it.secs[0]}`], unit:it.u.id}); }
    $("wNext").onclick = () => { W.idx++; draw(); };
  }
  const stimHTML = it => it.stim ? `<figure class="stim"><blockquote>${T(it.stim)}</blockquote>${it.cite ? `<figcaption>${T(it.cite)}</figcaption>` : ""}</figure>` : "";

  /* ---------- SAQ ---------- */
  function drawSAQ(it){
    $("wCard").innerHTML = `
      <div class="qtop"><span class="srcchip">${escHTML(secName(it))} · SAQ</span>${learnBtn(it)}</div>
      ${stimHTML(it)}
      <p class="wlead">Answer each part in one to three complete sentences.</p>
      <ol class="saq">${it.parts.map((p, i) => `
        <li><div class="wq"><b>(${"abc"[i]})</b> ${T(p.q)}</div>
          <textarea id="wa${i}" rows="3" placeholder="Your answer"></textarea>
          <div class="wfb hidden" id="wf${i}"></div></li>`).join("")}</ol>
      <div class="row wbtns"><button class="primary grow" id="wCheck">Check my answers</button><button id="wNext">${ic("refresh")}<span>New prompt</span></button></div>
      <div class="wscore hidden" id="wScore"></div>`;
    wireCommon(it);
    $("wCheck").onclick = () => checkSAQ(it);
  }
  function checkSAQ(it){
    W.marks = W.marks || {};
    it.parts.forEach((p, i) => {
      const a = $("wa" + i).value, n = words(a), verb = low(p.q).split(" ")[0];
      const hits = p.look.filter(w => low(a).includes(w));
      const explain = verb === "explain" || verb === "describe";
      const tips = [
        row(n >= 8, n >= 8 ? "Written as a full answer" : n ? "Too short. Use a complete sentence or two" : "Not answered yet"),
        row(hits.length > 0, hits.length ? `Specific evidence: ${hits.slice(0, 3).map(h => `<b>${escHTML(h)}</b>`).join(", ")}` : "Name something specific: a person, place, group, or term from this chapter"),
      ];
      if (explain) tips.push(row(CAUSAL.test(a), CAUSAL.test(a) ? "Explains how or why" : "Add the why: connect your evidence with “because” or “which led to”"));
      const box = $("wf" + i);
      box.innerHTML = `<ul class="wchecks">${tips.join("")}</ul>
        <div class="wmodel"><div class="wlabel">A strong answer</div>${T(p.model)}</div>
        <div class="wself"><span>Did you earn this point?</span><button data-v="1">Yes</button><button data-v="0">Not yet</button></div>`;
      box.classList.remove("hidden");
      box.querySelectorAll(".wself button").forEach(b => b.onclick = () => {
        box.querySelectorAll(".wself button").forEach(x => x.classList.toggle("on", x === b));
        W.marks[i] = b.dataset.v === "1"; tally(it);
      });
    });
    $("wCheck").textContent = "Check again";
  }
  function tally(it){
    const got = it.parts.filter((_, i) => W.marks[i]).length, done = it.parts.every((_, i) => W.marks[i] !== undefined);
    const box = $("wScore"); box.classList.toggle("hidden", !done);
    if (done){
      box.innerHTML = `${ic(got === it.parts.length ? "trophy" : "target")}<span><b>${got} / ${it.parts.length}</b> points (self-scored)</span>`;
      ST.wbest = ST.wbest || {}; ST.wbest[it.id] = Math.max(ST.wbest[it.id] || 0, got); save();
    }
  }

  /* ---------- LEQ thesis builder ---------- */
  const STOP = new Set("the a an of to in and or for on by with from as at that this which their its be is are was were extent evaluate compare period c ways way two other used use methods".split(" "));
  const keyWords = p => [...new Set(low(p).replace(/[^a-z\s-]/g, " ").split(/\s+/).filter(w => w.length > 3 && !STOP.has(w)))];
  function drawLEQ(it){
    $("wCard").innerHTML = `
      <div class="qtop"><span class="srcchip">${escHTML(secName(it))} · LEQ · ${escHTML(it.skill)}</span>${learnBtn(it)}</div>
      <div class="wprompt">${T(it.prompt)}</div>
      <details class="wideas"><summary>${ic("bulb", "ic-s")} Evidence bank</summary>
        <ul>${it.evidence.map(e => `<li>${T(e)}</li>`).join("")}</ul></details>
      <h3 class="nh">1. Contextualization</h3>
      <p class="wlead">What was going on before or around this period that sets up the question? Two or three sentences.</p>
      <textarea id="wctx" rows="3" placeholder="Before this period…"></textarea>
      <h3 class="nh">2. Thesis</h3>
      <div class="thb" id="thb">
        <label><span>Although…</span><input type="text" id="t0" autocomplete="off" placeholder="the strongest point on the other side"></label>
        <label><span>My claim</span><input type="text" id="t1" autocomplete="off" placeholder="your answer to the prompt"></label>
        <label><span>because…</span><input type="text" id="t2" autocomplete="off" placeholder="first reason"></label>
        <label><span>and…</span><input type="text" id="t3" autocomplete="off" placeholder="second reason"></label>
      </div>
      <textarea id="tfree" rows="4" class="hidden" placeholder="Write your thesis in your own words"></textarea>
      <button class="link" id="tMode">Write it my own way instead</button>
      <div class="thprev hidden" id="thPrev"></div>
      <div class="row wbtns"><button class="primary grow" id="wCheck">Check my thesis</button><button id="wCopy">${ic("copy")}<span>Copy</span></button><button id="wNext">${ic("refresh")}<span>New prompt</span></button></div>
      <div class="wfb hidden" id="wfL"></div>`;
    wireCommon(it);
    let free = false;
    const prev = () => {
      const v = [0, 1, 2, 3].map(i => $("t" + i).value.trim().replace(/[.,;]+$/, ""));
      const s = assemble(v);
      $("thPrev").classList.toggle("hidden", !s || free);
      $("thPrev").innerHTML = s ? `<div class="wlabel">Your thesis</div>${escHTML(s)}` : "";
    };
    [0, 1, 2, 3].forEach(i => $("t" + i).addEventListener("input", prev));
    $("tMode").onclick = () => {
      free = !free;
      $("thb").classList.toggle("hidden", free); $("tfree").classList.toggle("hidden", !free);
      if (free && !$("tfree").value) $("tfree").value = assemble([0, 1, 2, 3].map(i => $("t" + i).value.trim().replace(/[.,;]+$/, "")));
      $("tMode").textContent = free ? "Use the step-by-step builder" : "Write it my own way instead";
      prev();
    };
    const thesis = () => free ? $("tfree").value.trim() : assemble([0, 1, 2, 3].map(i => $("t" + i).value.trim().replace(/[.,;]+$/, "")));
    $("wCheck").onclick = () => checkLEQ(it, free, thesis());
    $("wCopy").onclick = () => {
      const txt = [$("wctx").value.trim(), thesis()].filter(Boolean).join("\n\n");
      if (!txt) return;
      try { navigator.clipboard.writeText(txt).then(() => setLabel($("wCopy"), "check", "Copied")); } catch(e){}
    };
  }
  function assemble([c, claim, r1, r2]){
    if (!claim) return "";
    let s = (c ? `Although ${c}, ` : "") + (c ? claim.charAt(0).toLowerCase() + claim.slice(1) : claim.charAt(0).toUpperCase() + claim.slice(1));
    if (r1 && r2) s += ` because ${r1} and ${r2}`; else if (r1 || r2) s += ` because ${r1 || r2}`;
    return s + ".";
  }
  function checkLEQ(it, free, thesis){
    const box = $("wfL"), t = low(thesis), ctx = $("wctx").value;
    const keys = keyWords(it.prompt), hitKeys = keys.filter(k => t.includes(k.replace(/s$/, "")));
    const evTokens = [...new Set(it.evidence.flatMap(e => low(e).replace(/[^a-z\s'-]/g, " ").split(/\s+/)).filter(w => w.length > 4 && !STOP.has(w)))];
    const usedEv = evTokens.filter(w => t.includes(w));
    const r = free ? null : [2, 3].map(i => words($("t" + i).value));
    const reasons = free ? (/\bbecause\b|\bsince\b|\bby\b|\bdue to\b/.test(t) && (t.match(/,| and /g) || []).length >= 1) : r.every(n => n >= 3);
    const counter = free ? /\b(although|while|even though|despite|though|whereas|however)\b/.test(t) : words($("t0").value) >= 3;
    const skill = low(it.skill), prompt = low(it.prompt);
    const degree = /\b(greatly|largely|mostly|mainly|primarily|significantly|major|main|central|limited|partly|somewhat|little|great extent|large extent|dramatically|deeply|heavily|most|least|only)\b/.test(t);
    const cmp = /\b(both|similar|similarly|alike|while|whereas|but|unlike|however|differ)\b/.test(t);
    const checks = [
      row(words(thesis) >= 12 && hitKeys.length > 0, words(thesis) < 12 ? "Expand this into a full claim that answers the whole prompt" : hitKeys.length ? "Responds to the prompt" : `Make sure your claim answers the prompt directly (it should be about ${keys.slice(0, 3).map(k => `<b>${escHTML(k)}</b>`).join(", ")})`),
      prompt.startsWith("compare") ? row(cmp, cmp ? "Addresses similarity and difference" : "For a comparison, state a similarity AND a difference (“Both… but…”)")
                                   : row(degree, degree ? "Takes a clear position on “how much”" : "Say how much: “greatly,” “mainly,” “only partly”…"),
      row(reasons, reasons ? "Gives a line of reasoning (two reasons)" : "Add two reasons after “because”. Those become your body paragraphs"),
      row(usedEv.length > 0, usedEv.length ? "Points to specific historical evidence" : "Name specific examples in your reasons (open the evidence bank for ideas)"),
      row(counter, counter ? "Acknowledges the other side (helps with the complexity point)" : "Start with “Although…” to show the other side"),
      row(words(ctx) >= 20, words(ctx) >= 20 ? "Contextualization drafted" : "Contextualization: write two or three sentences about the bigger picture")
    ];
    box.innerHTML = `
      <ul class="wchecks">${checks.join("")}</ul>
      <p class="small">Quick checks, not a grade. Compare with the sample below.</p>
      <div class="wmodel"><div class="wlabel">Sample thesis</div>${T(it.thesis)}</div>
      <div class="wmodel"><div class="wlabel">Sample contextualization</div>${T(it.context)}</div>
      <div class="wmodel"><div class="wlabel">The other side</div>${T(it.counter)}</div>
      <div class="rubric"><div class="wlabel">How the LEQ is scored (6 points)</div>
        <ul><li><b>Thesis (1):</b> a defensible claim with a line of reasoning</li>
        <li><b>Contextualization (1):</b> the broader situation around the prompt</li>
        <li><b>Evidence (2):</b> specific examples, used to support the argument</li>
        <li><b>Analysis &amp; reasoning (2):</b> explain causes/comparison/change, plus complexity (other side, more causes)</li></ul></div>`;
    box.classList.remove("hidden");
    box.scrollIntoView({behavior:"smooth", block:"start"});
  }

  $("wBack").onclick = () => { W = null; renderHome(); };
  return {has, start};
})();
