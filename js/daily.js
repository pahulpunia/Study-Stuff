/* Daily activity: a day streak and today's question count on the home page.
   Kept on this device only (in the same saved state as everything else); party rounds don't count. */
const Daily = (() => {
  const key = d => { const t = d ? new Date(d) : new Date(); return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0"); };
  const back = n => { const t = new Date(); t.setDate(t.getDate() - n); return key(t); };
  const days = () => (ST.days = ST.days || {});
  function record(r){
    if (!r || !r.total) return;
    const d = days(), k = key(), x = d[k] || (d[k] = {n: 0, q: 0, ok: 0});
    x.n++; x.q += Math.max(0, Math.round(+r.total || 0)); x.ok += Math.max(0, Math.round(+r.right || 0));
    Object.keys(d).sort().slice(0, -60).forEach(old => delete d[old]);   // keep about two months
    save();
  }
  // consecutive days with at least one finished round, ending today (or yesterday if today is still empty)
  function streak(){
    const d = days(); let n = 0, i = d[key()] ? 0 : 1;
    while (d[back(i)]){ n++; i++; }
    return n;
  }
  function paint(){
    const home = $("home"); if (!home) return;
    let bar = $("dayBar");
    if (!bar){ bar = el("div", "daybar"); bar.id = "dayBar"; const row = $("toStats").parentNode; row.parentNode.insertBefore(bar, row); }
    const d = days(), s = streak(), t = d[key()];
    if (!s && !t){ bar.classList.add("hidden"); return; }
    const week = [...Array(7)].map((_, i) => (d[back(6 - i)] || {}).q || 0), max = Math.max(1, ...week);
    bar.classList.remove("hidden");
    bar.innerHTML = `${ic("flame")}<span><b>${s} day streak</b> · ${t ? `${t.q} answered today` : "do a round to keep it"}</span>
      <span class="daydots" role="img" aria-label="Questions answered on each of the last 7 days: ${week.join(", ")}">${week.map(q => `<i class="${q ? "on" : ""}" style="height:${q ? Math.max(25, Math.round(100 * q / max)) : 18}%"></i>`).join("")}</span>`;
  }
  return {record, streak, paint, key};
})();

/* count every finished round, signed in or not, then let the account code do its usual saving */
(() => { const send = LB.logRound; LB.logRound = r => { try { Daily.record(r); } catch(e){} return send(r); }; })();
/* show the strip whenever the home page is drawn */
(() => { const draw = renderHome; renderHome = function(){ const out = draw.apply(this, arguments); try { Daily.paint(); } catch(e){} return out; }; })();
/* ...and whenever you come back to it from a round or another page */
(() => { const go = show; show = function(id){ const out = go.apply(this, arguments); if (id === "home") try { Daily.paint(); } catch(e){} return out; }; })();
