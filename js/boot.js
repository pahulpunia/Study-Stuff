/* Start the app, then set up offline support. */
if (!ST.subject) ST.subject = (window.SUBJECTS[0] || {}).id;
renderHome();

if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(() => {
      // quietly download every subject's files so they all work offline later
      const files = [...new Set(Study.subjects().flatMap(s => s.files))];
      setTimeout(() => files.forEach(f => fetch(f).catch(() => {})), 4000);
    }).catch(() => {});
  });
}
