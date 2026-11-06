/* =========================================================================
   Study Stuff — admin dashboard.
   Opened from the bottom-right grid square on the Settings page.
   The password only hides the page; the data itself is protected by the
   Firestore rules (an account listed in admins/{uid} sees everything).
   ========================================================================= */
const Admin = (() => {
  const HASH = "85686d8ec2bb2b8c491cd0188d823de99715f032bd8b806291f7c1505bfaf300";   // SHA-256 of the admin password
  const UNLOCK = "sq-admin";
  const sha = async t => [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)))].map(b => b.toString(16).padStart(2, "0")).join("");
  const unlocked = () => { try { return sessionStorage.getItem(UNLOCK) === "1"; } catch(e){ return false; } };
  const esc = s => escHTML(String(s == null ? "" : s));
  const ago = ms => { if (!ms) return "—"; const m = Math.round((Date.now() - ms) / 60000); return m < 60 ? `${Math.max(1, m)}m ago` : m < 1440 ? `${Math.round(m / 60)}h ago` : `${Math.round(m / 1440)}d ago`; };
  const tsMs = t => !t ? 0 : typeof t === "number" ? t : t.toMillis ? t.toMillis() : t.seconds ? t.seconds * 1000 : 0;
  const fmt = n => Number(n || 0).toLocaleString();
  const hrs = secs => { secs = Math.round(secs || 0); const h = Math.floor(secs / 3600), m = Math.round(secs % 3600 / 60); return h ? `${h}h ${m}m` : `${m}m`; };
  const mins = secs => { secs = Math.round(secs || 0); return secs < 60 ? `${secs}s` : `${Math.floor(secs / 60)}m ${String(secs % 60).padStart(2, "0")}s`; };
  let offs = [];
  const plain = t => String(t || "").replace(/\[\[(.+?)\]\]/g, "$1").replace(/\{\{(.+?)\}\}/g, "$1").replace(/__|\*\*/g, "").replace(/\s+/g, " ").trim();

  /* ---- the hidden square: bottom-right cell of the 24px background grid ---- */
  function placeKey(){
    const k = $("adminKey"); if (!k) return;
    const G = 24, x = Math.floor(innerWidth / G) * G - G - 1, y = Math.floor(innerHeight / G) * G - G - 1;
    k.style.left = x + "px"; k.style.top = y + "px";
  }
  window.addEventListener("resize", placeKey);

  function open(){ placeKey(); stop(); show("admin"); unlocked() ? load() : lock(); }

  function lock(){
    $("adBody").innerHTML = `<div class="card adlock"><h2>Admin</h2>
      <form id="adForm" autocomplete="off"><input type="password" id="adPass" placeholder="Password" aria-label="Admin password" autocomplete="current-password">
      <button class="primary" type="submit">Open</button></form><div class="small adErr" id="adErr"></div></div>`;
    $("adForm").onsubmit = async e => {
      e.preventDefault();
      if (await sha($("adPass").value) === HASH){ try { sessionStorage.setItem(UNLOCK, "1"); } catch(err){} load(); }
      else { $("adErr").textContent = "Wrong password."; $("adPass").select(); }
    };
    setTimeout(() => { const x = $("adPass"); if (x) x.focus(); }, 50);
  }

  async function load(){
    const body = $("adBody");
    body.innerHTML = `<div class="card"><div class="small">Loading…</div></div>`;
    const subs = Study.subjects().filter(s => s.type === "problems");
    if (!LB.cfg()){ body.innerHTML = `<div class="card"><h2>Admin</h2><p class="small">Firebase isn't set up, so there's no club data.</p>${links()}</div>`; return; }
    let d;
    try { d = await LB.adminData(subs.map(s => s.id)); } catch(e){ d = {signedIn:false, err:e.message}; }
    if (!d.signedIn){
      body.innerHTML = `<div class="card"><h2>Admin</h2><p>Sign in to your account to load the club's data.</p><button class="primary" id="adSign">Sign in</button>${links()}</div>`;
      $("adSign").onclick = renderBoard; return;
    }
    // ---- numbers ----
    const scores = d.scores.map(r => Object.assign(r, {upd: tsMs(r.updated)}));
    const members = d.members ? d.members.map(m => Object.assign(m, {joined: tsMs(m.created)})) : null;
    const prog = {}; (d.progress || []).forEach(p => prog[p.id] = p);
    const week = Date.now() - 7 * 864e5, day = Date.now() - 864e5;
    const answers = Object.values(d.qstats).reduce((a, q) => a + Object.values(q).reduce((b, r) => b + (r.n || 0), 0), 0);
    const tiles = [
      ["Members", members ? members.length : scores.length],
      ["Points", fmt(scores.reduce((a, r) => a + (r.total || 0), 0))],
      ["Rounds", fmt(scores.reduce((a, r) => a + (r.rounds || 0), 0))],
      ["Active this week", scores.filter(r => r.upd > week).length],
      ["Active today", scores.filter(r => r.upd > day).length],
      ["Answers logged", fmt(answers)]
    ];
    // ---- people: everyone with a row, plus members who never played ----
    const byId = {}; scores.forEach(r => byId[r.id] = {id: r.id, name: r.name, r});
    (members || []).forEach(m => { byId[m.id] = Object.assign(byId[m.id] || {id: m.id, name: m.name}, {joined: m.joined}); });
    const subjName = id => (Study.subject(id) || {}).short || id;
    const people = Object.values(byId).map(p => {
      const by = (p.r && p.r.by) || {}, topS = Object.entries(by).sort((a, b) => b[1] - a[1])[0];
      let c = 0, t = 0; const pr = prog[p.id];
      if (pr) Object.values(pr.mq || {}).concat(Object.values(pr.words || {})).forEach(x => { c += x.c || 0; t += x.t || 0; });
      return Object.assign(p, {pts: p.r ? p.r.total || 0 : 0, rounds: p.r ? p.r.rounds || 0 : 0, best: p.r ? p.r.best || 0 : 0, last: p.r ? p.r.upd : 0,
        top: topS ? subjName(topS[0]) : "—", acc: t ? Math.round(c / t * 100) + "%" : "—", answered: t});
    }).sort((a, b) => (b.last || 0) - (a.last || 0) || b.pts - a.pts);
    // ---- points by subject ----
    const bySubj = {}; scores.forEach(r => Object.entries(r.by || {}).forEach(([k, v]) => bySubj[k] = (bySubj[k] || 0) + v));
    const maxS = Math.max(1, ...Object.values(bySubj));

    // ---- round history (Firestore rounds) ----
    const rounds = (d.rounds || []).map(r => Object.assign(r, {ms: r.when || tsMs(r.at)})).sort((x, y) => y.ms - x.ms);
    const studied = rounds.reduce((t, r) => t + (r.secs || 0), 0);
    tiles.push(["Rounds saved", fmt(rounds.length)], ["Time studied", hrs(studied)]);
    // ---- the last 14 days ----
    const days = [...Array(14)].map((_, i) => { const t = new Date(); t.setHours(0, 0, 0, 0); t.setDate(t.getDate() - 13 + i); return {t: +t, n: 0, secs: 0, who: new Set()}; });
    rounds.forEach(r => { const day = days.find((x, i) => r.ms >= x.t && (i === 13 || r.ms < days[i + 1].t)); if (day){ day.n++; day.secs += r.secs || 0; day.who.add(r.name); } });
    const maxD = Math.max(1, ...days.map(x => x.n));
    // per person, from rounds
    const perPerson = {}; rounds.forEach(r => { const P = perPerson[r.uid] || (perPerson[r.uid] = {rounds: [], secs: 0, right: 0, total: 0, subj: {}}); P.rounds.push(r); P.secs += r.secs || 0; P.right += r.right || 0; P.total += r.total || 0; const S = P.subj[r.subj] || (P.subj[r.subj] = {n: 0, right: 0, total: 0, pts: 0}); S.n++; S.right += r.right || 0; S.total += r.total || 0; S.pts += r.score || 0; });

    body.innerHTML = `
      <div class="card"><div class="adhead"><h2>Admin</h2><span class="row"><button class="link" id="adRefresh">Refresh</button><button class="link" id="adLock">Lock</button></span></div>
        <div class="small">Signed in as <b>${esc(d.name)}</b> · ${d.isAdmin ? "full access" : "member access (see below for full access)"}</div>
        <div class="adtiles">${tiles.map(([k, v]) => `<div class="adtile"><b>${v}</b><span>${k}</span></div>`).join("")}<div class="adtile"><b id="adOnN">…</b><span>Online now</span></div><div class="adtile"><b id="adIssN">…</b><span>Open issues</span></div></div></div>
      <div class="card"><h2>Online now</h2><div id="adOnline" class="small">Loading…</div></div>
      <div class="card"><div class="adhead"><h2>Issues</h2><select id="adIsF" aria-label="Show"><option value="open">Open</option><option value="all">All</option><option value="done">Done</option></select></div><div id="adIssues" class="small">Loading…</div></div>
      <div class="card"><h2>Last 14 days</h2>
        <div class="adchart">${days.map(x => `<div class="adday" title="${new Date(x.t).toLocaleDateString()}: ${x.n} rounds, ${hrs(x.secs)}, ${x.who.size} people"><i style="height:${(x.n / maxD * 100).toFixed(1)}%"></i><b>${x.n || ""}</b><span>${new Date(x.t).toLocaleDateString(undefined, {weekday: "narrow"})}</span></div>`).join("")}</div>
        <div class="small">${days.reduce((a, x) => a + x.n, 0)} rounds · ${hrs(days.reduce((a, x) => a + x.secs, 0))} studied · ${new Set(days.flatMap(x => [...x.who])).size} people${d.roundsMineOnly ? " (yours only, until full access is set up)" : ""}</div></div>
      <div class="card"><h2>Recent rounds</h2>${rounds.length ? `<div class="adscroll adtall"><table class="adtable"><thead><tr><th>When</th><th>Who</th><th>Subject</th><th>What</th><th>Score</th><th>Right</th><th>Time</th></tr></thead><tbody>${rounds.slice(0, 150).map(r =>
        `<tr><td title="${new Date(r.ms).toLocaleString()}">${ago(r.ms)}</td><td>${esc(r.name)}</td><td>${esc(subjName(r.subj))}</td><td>${esc([r.sec, r.mode].filter(Boolean).join(" · "))}${r.quit ? ` <em class="adq">quit early</em>` : ""}</td><td>${fmt(r.score)}</td><td>${r.right}/${r.total} (${r.total ? Math.round(r.right / r.total * 100) : 0}%)</td><td>${mins(r.secs)}</td></tr>`).join("")}</tbody></table></div>`
        : `<div class="small">No rounds saved yet. Rounds are saved from now on, for signed-in members.${d.isAdmin ? "" : " Full access shows everyone's."}</div>`}</div>
      <div class="card"><h2>People</h2><div class="adscroll"><table class="adtable"><thead><tr><th>Name</th><th>Points</th><th>Rounds</th><th>Best</th><th>Last active</th>${members ? "<th>Joined</th>" : ""}${d.progress ? "<th>Answered</th><th>Accuracy</th>" : ""}<th>Time studied</th><th>Top subject</th></tr></thead>
        <tbody>${people.map(p => `<tr class="adrow" data-who="${esc(p.id)}"><td><button class="link adwho" data-who="${esc(p.id)}">${esc(p.name)}</button></td><td>${fmt(p.pts)}</td><td>${p.rounds}</td><td>${fmt(p.best)}</td><td>${ago(p.last)}</td>${members ? `<td>${p.joined ? new Date(p.joined).toLocaleDateString() : "—"}</td>` : ""}${d.progress ? `<td>${fmt(p.answered)}</td><td>${p.acc}</td>` : ""}<td>${perPerson[p.id] ? hrs(perPerson[p.id].secs) : "—"}</td><td>${esc(p.top)}</td></tr>`).join("") || `<tr><td colspan="9" class="small">Nobody yet.</td></tr>`}</tbody></table></div>
        <div id="adPerson" class="adperson"><span class="small">Tap a name for everything about that person.</span></div></div>
      <div class="card"><h2>Points by subject</h2>${Object.keys(bySubj).length ? Object.entries(bySubj).sort((a, b) => b[1] - a[1]).map(([k, v]) =>
        `<div class="adbar"><span>${esc(subjName(k))}</span><i style="width:${(v / maxS * 100).toFixed(1)}%"></i><b>${fmt(v)}</b></div>`).join("") : `<div class="small">No points yet.</div>`}</div>
      <div class="card"><div class="adhead"><h2>Questions</h2><select id="adSubj" aria-label="Subject">${subs.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join("")}</select></div><div id="adMissed" class="small">Loading…</div></div>
      ${d.isAdmin ? "" : `<div class="card"><h2>Full access</h2><p class="small">To see join dates, everyone's rounds, each person's accuracy, and who filed each issue, make this account an admin: in the Firebase console, open Firestore and create a collection named <b>admins</b> with a document whose ID is your user ID below (no fields needed). Then publish the updated <b>firestore.rules</b> from the repo.</p>
        <div class="row"><input id="adUid" readonly value="${esc(d.uid)}" aria-label="Your user ID"><button id="adCopy">Copy</button></div></div>`}
      <div class="card"><h2>Parties</h2><div id="adParties" class="small">Loading…</div></div>
      <div class="card"><h2>Data</h2><p class="small">Everything on this page (plus the raw progress data) as one file.</p><button id="adExport">Download all data (JSON)</button></div>
      <div class="card"><h2>More</h2>${links()}</div>`;
    loadParties();
    $("adLock").onclick = () => { stop(); try { sessionStorage.removeItem(UNLOCK); } catch(e){} lock(); };
    $("adRefresh").onclick = () => { stop(); load(); };
    if ($("adCopy")) $("adCopy").onclick = () => { $("adUid").select(); try { navigator.clipboard.writeText(d.uid); $("adCopy").textContent = "Copied"; } catch(e){} };

    // ---- online now (live) ----
    offs.push(Live.watch(rows => {
      const box = $("adOnline"); if (!box) return;
      $("adOnN").textContent = rows.length;
      box.className = "";
      box.innerHTML = rows.length ? `<ul class="ponline">${rows.map(r => `<li><i class="pdot live"></i><b>${esc(r.name)}</b><span>${esc(r.doing || "")}</span><span class="small">since ${ago(r.at)}</span></li>`).join("")}</ul>` : `<p class="small">Nobody online right now.</p>`;
    }, () => { const box = $("adOnline"); if (box) box.textContent = "Couldn't load (is the Realtime Database set up, with the new rules published?)"; $("adOnN").textContent = "—"; }));

    // ---- issues (live), with names for the admin ----
    let issues = [], authors = {}, pending = false;
    const paintIssues = () => {
      const box = $("adIssues"); if (!box) return;
      if (box.contains(document.activeElement)){ pending = true; return; }    // don't wipe a reply you're typing
      const f = $("adIsF").value, open = r => r.status === "open" || r.status === "looking";
      const rows = issues.filter(r => f === "all" || (f === "open" ? open(r) : !open(r)));
      $("adIssN").textContent = issues.filter(open).length;
      box.className = "";
      box.innerHTML = rows.length ? `<ul class="islist">${rows.map(r => {
        const who = authors[r.id];
        return `<li class="issue" data-id="${esc(r.id)}">
          <div class="ishead"><b>${who ? esc(who.name) : d.isAdmin ? "(unknown)" : "(names need full access)"}</b><span class="small">${[Issues.subjName(r.subj), r.where, ago(tsMs(r.created)), r.kind === "general" ? "general" : ""].filter(Boolean).map(esc).join(" · ")}</span></div>
          ${r.q ? `<div class="isq">${esc(r.q)}</div>` : ""}
          <div class="istext">${r.reason ? `<b>${esc(r.reason)}</b>${r.text ? ": " : ""}` : ""}${esc(r.text)}</div>
          <div class="adisact"><select class="adst" aria-label="Status">${Object.entries(Issues.STATUS).map(([k, v]) => `<option value="${k}"${k === (r.status || "open") ? " selected" : ""}>${v}</option>`).join("")}</select>
            <textarea class="adrep" rows="2" maxlength="600" placeholder="Public reply (optional)">${esc(r.reply || "")}</textarea>
            <div class="row"><button class="primary adsave">Save</button>${r.qk && !String(r.qk).startsWith("w:") ? `<button class="adopen">Open the question</button>` : ""}<button class="link addel">Delete</button><span class="small admsg"></span></div></div>
        </li>`; }).join("")}</ul>` : `<p class="small">Nothing here.</p>`;
      box.querySelectorAll(".issue").forEach(li => {
        const id = li.dataset.id, r = issues.find(x => x.id === id), msg = li.querySelector(".admsg");
        li.querySelector(".adsave").onclick = async () => {
          msg.textContent = "Saving…";
          try { await LB.F.updateDoc(LB.F.doc(LB.db, "issues", id), {status: li.querySelector(".adst").value, reply: li.querySelector(".adrep").value.trim().slice(0, 600), updated: LB.F.serverTimestamp()}); msg.textContent = "Saved"; }
          catch(e){ msg.textContent = d.isAdmin ? "Couldn't save (are the new rules published?)" : "Only an admin account can change issues (see Full access)."; }
        };
        li.querySelector(".addel").onclick = async () => {
          if (li.dataset.sure !== "1"){ li.dataset.sure = "1"; msg.textContent = "Tap Delete again to remove it for good."; return; }
          try { await LB.F.deleteDoc(LB.F.doc(LB.db, "issues", id)); LB.F.deleteDoc(LB.F.doc(LB.db, "issueAuthors", id)).catch(() => {}); }
          catch(e){ msg.textContent = "Only an admin account can delete issues."; }
        };
        const op = li.querySelector(".adopen"); if (op) op.onclick = () => openQuestion(r.subj, r.qk, msg);
      });
    };
    $("adIssues").addEventListener("focusout", () => setTimeout(() => { if (pending && !$("adIssues").contains(document.activeElement)){ pending = false; paintIssues(); } }, 0));
    $("adIsF").onchange = paintIssues;
    offs.push(Issues.watch(rows => { issues = rows; paintIssues(); }, () => { const b = $("adIssues"); if (b) b.textContent = "Couldn't load issues (publish the updated firestore.rules)."; }));
    if (d.isAdmin) LB.F.getDocs(LB.F.collection(LB.db, "issueAuthors")).then(snap => { snap.docs.forEach(x => authors[x.id] = x.data()); paintIssues(); }).catch(() => {});

    // ---- one person, in detail ----
    const showPerson = id => {
      const p = people.find(x => x.id === id), P = perPerson[id], pr = prog[id], box = $("adPerson"); if (!p) return;
      document.querySelectorAll(".adrow").forEach(r => r.classList.toggle("on", r.dataset.who === id));
      const subjRows = P ? Object.entries(P.subj).sort((a, b) => b[1].n - a[1].n) : [];
      const filed = Object.entries(authors).filter(([, a]) => a.uid === id).map(([iid]) => issues.find(x => x.id === iid)).filter(Boolean);
      // their weakest questions/words, from synced progress
      const weak = []; if (pr){ Object.entries(pr.mq || {}).forEach(([k, r]) => { if (r.t >= 2) weak.push([k, r]); }); }
      weak.sort((a, b) => (a[1].c / a[1].t) - (b[1].c / b[1].t));
      box.innerHTML = `<h3>${esc(p.name)}</h3>
        <div class="adtiles"><div class="adtile"><b>${fmt(p.pts)}</b><span>Points</span></div><div class="adtile"><b>${p.rounds}</b><span>Rounds (leaderboard)</span></div><div class="adtile"><b>${P ? P.rounds.length : 0}</b><span>Rounds saved</span></div>
          <div class="adtile"><b>${P ? hrs(P.secs) : "—"}</b><span>Time studied</span></div><div class="adtile"><b>${P && P.total ? Math.round(P.right / P.total * 100) + "%" : p.acc}</b><span>Accuracy</span></div><div class="adtile"><b>${ago(p.last)}</b><span>Last active</span></div></div>
        ${subjRows.length ? `<h4>By subject</h4>${subjRows.map(([k, S]) => `<div class="adbar"><span>${esc(subjName(k))}</span><i style="width:${(S.n / Math.max(...subjRows.map(x => x[1].n)) * 100).toFixed(1)}%"></i><b>${S.n} rounds · ${S.total ? Math.round(S.right / S.total * 100) : 0}% · ${fmt(S.pts)} pts</b></div>`).join("")}` : ""}
        ${P ? `<h4>Their last rounds</h4><ul class="adlist">${P.rounds.slice(0, 12).map(r => `<li>${ago(r.ms)} · ${esc(subjName(r.subj))} · ${esc([r.sec, r.mode].filter(Boolean).join(" · "))} · ${r.right}/${r.total} · ${fmt(r.score)} pts · ${mins(r.secs)}${r.quit ? " · quit early" : ""}</li>`).join("")}</ul>` : `<p class="small">No saved rounds yet.</p>`}
        ${weak.length ? `<h4>Hardest questions for them</h4><p class="small">${weak.slice(0, 8).map(([k, r]) => `${esc(k)} (${r.c}/${r.t})`).join(" · ")}</p>` : ""}
        ${filed.length ? `<h4>Issues they filed</h4><ul class="adlist">${filed.map(r => `<li>${esc(Issues.STATUS[r.status] || r.status)} · ${esc(r.reason || "")} ${esc(r.text || "")}</li>`).join("")}</ul>` : ""}`;
      box.scrollIntoView({block: "nearest", behavior: "smooth"});
    };
    document.querySelectorAll(".adwho").forEach(b => b.onclick = () => showPerson(b.dataset.who));

    // ---- questions: most missed and most tried, per subject ----
    const pickSubj = async () => {
      const id = $("adSubj").value, subj = Study.subject(id), box = $("adMissed"), q = d.qstats[id] || {};
      box.textContent = "Loading…";
      try { await Study.load(subj); } catch(e){}
      const bank = Study.problems[id] || {items: []}, label = {};
      bank.items.forEach(it => { label[LB.qkey(it)] = it; });
      const known = Object.entries(q).map(([k, r]) => [label[k], r, k]).filter(([it]) => it);
      const missed = known.filter(([, r]) => (r.n || 0) >= 3 && r.w > 0).sort((a, b) => (b[1].w / b[1].n - a[1].w / a[1].n) || b[1].n - a[1].n).slice(0, 15);
      const tried = known.slice().sort((a, b) => (b[1].n || 0) - (a[1].n || 0)).slice(0, 10);
      const total = known.reduce((a, [, r]) => a + (r.n || 0), 0), wrong = known.reduce((a, [, r]) => a + (r.w || 0), 0);
      const row = ([it, r, k], lead) => `<li>${lead}<span class="mq">${esc(plain(it.fields && it.fields[0] && it.fields[0].t === "under" ? it.text + " " + it.fields[0].words.join(" ") : it.text).slice(0, 220))}<i>${esc(it.src)} · ${r.n} tries · ${r.w} wrong</i></span><button class="link adtry" data-k="${esc(k)}">Open</button></li>`;
      box.className = "";
      box.innerHTML = `<p class="small">${fmt(total)} answers logged · ${total ? Math.round((total - wrong) / total * 100) : 0}% right · ${known.length} of ${bank.items.length} questions tried at least once</p>
        <h4>Most missed</h4>${missed.length ? `<ol class="admiss">${missed.map(x => row(x, `<span class="miss">${Math.round(x[1].w / x[1].n * 100)}%</span>`)).join("")}</ol>` : `<p class="small">Not enough answers yet (each question needs 3+ tries from signed-in members).</p>`}
        <h4>Most tried</h4>${tried.length ? `<ol class="admiss">${tried.map(x => row(x, `<span class="miss tried">${x[1].n}</span>`)).join("")}</ol>` : `<p class="small">Nothing yet.</p>`}`;
      box.querySelectorAll(".adtry").forEach(b => b.onclick = () => openQuestion(id, b.dataset.k));
    };
    $("adSubj").onchange = pickSubj; pickSubj();

    // ---- everything as one file ----
    $("adExport").onclick = async () => {
      const dump = {exported: new Date().toISOString(), scores: d.scores, members: d.members, progress: d.progress, qstats: d.qstats, rounds: d.rounds, issues, issueAuthors: authors};
      try { dump.parties = await Party.all(); } catch(e){}
      const blob = new Blob([JSON.stringify(dump, (k, v) => v && typeof v.toMillis === "function" ? v.toMillis() : v, 2)], {type: "application/json"});
      const a = el("a"); a.href = URL.createObjectURL(blob); a.download = `study-stuff-data-${new Date().toISOString().slice(0, 10)}.json`; document.body.appendChild(a); a.click(); a.remove();
    };
  }

  // open one question by itself, to check a report
  async function openQuestion(subjId, qk, msg){
    const subj = Study.subject(subjId); if (!subj || subj.type !== "problems"){ if (msg) msg.textContent = "Can't open that one here."; return; }
    try { await Study.load(subj); } catch(e){ if (msg) msg.textContent = "Couldn't load it."; return; }
    const q = (Study.problems[subjId] || {items: []}).items.find(it => LB.qkey(it) === qk);
    if (!q){ if (msg) msg.textContent = "That question has changed or been removed."; return; }
    stop(); ST.subject = subjId; save(); useProblems(subj); mStart("practice", [q]);
  }
  function stop(){ offs.forEach(f => { try { f(); } catch(e){} }); offs = []; }

  // live parties (Realtime Database): who's in them and how far along they are
  async function loadParties(){
    const box = $("adParties"); if (!box) return;
    let ps;
    try { ps = await Party.all(); } catch(e){ box.textContent = "Couldn't load parties. Is the Realtime Database set up?"; return; }
    if (!$("adParties")) return;
    if (!ps.length){ box.textContent = "No parties right now."; return; }
    ps.sort((a, b) => (b.created || 0) - (a.created || 0));
    box.className = "";
    box.innerHTML = `<div class="adscroll"><table class="adtable"><thead><tr><th>Party</th><th>Host</th><th>People</th><th>Subject</th><th>Status</th><th>Started</th></tr></thead><tbody>${ps.map(p => {
      const r = p.round, subj = Study.subject((r || p.set || {}).subj) || {}, names = Object.values(p.members || {}).map(m => m.name);
      const st = p.status === "playing" && r ? `question ${r.idx + 1} of ${String(r.keys || "").split(",").length}` : "in the lobby";
      return `<tr><td>${esc(p.name)}</td><td>${esc(p.hostName)}</td><td>${esc(names.join(", "))}</td><td>${esc(subj.short || subj.name || "—")}</td><td>${st}</td><td>${ago(p.created)}</td></tr>`;
    }).join("")}</tbody></table></div><div class="small">${ps.length} active · ${ps.reduce((a, p) => a + Object.keys(p.members || {}).length, 0)} people · ${ps.reduce((a, p) => a + (p.rounds || 0), 0)} rounds played</div>`;
  }

  function links(){
    const pid = (window.FIREBASE_CONFIG || {}).projectId;
    return `<div class="adlinks"><a href="https://analytics.google.com/" target="_blank" rel="noopener">Google Analytics (visits, pages, devices)</a>` +
      (pid ? `<a href="https://console.firebase.google.com/project/${encodeURIComponent(pid)}/firestore" target="_blank" rel="noopener">Firestore data</a><a href="https://console.firebase.google.com/project/${encodeURIComponent(pid)}/authentication/users" target="_blank" rel="noopener">Accounts (reset or delete)</a><a href="https://console.firebase.google.com/project/${encodeURIComponent(pid)}/database" target="_blank" rel="noopener">Parties data (Realtime Database)</a>` : "") + `</div>`;
  }

  return {open, placeKey, stop};
})();
