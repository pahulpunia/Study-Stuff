/* Study Quiz service worker.
   Network-first: when you're online you always get the newest version from GitHub Pages,
   and every successful load is saved so the app still opens offline. No version bumps needed. */
const CACHE = "study-quiz";
// app files saved for offline use (subject files get saved automatically the first time they load)
const FILES = ["./", "index.html", "css/app.css",
  "js/core.js", "js/icons.js", "js/mathcore.js", "js/terms.js", "js/kit.js", "js/problems.js", "js/writing.js", "js/account.js", "js/shell.js", "js/boot.js",
  "subjects/registry.js", "firebase-config.js", "manifest.webmanifest",
  "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];

self.addEventListener("install", e => {
  // save each file on its own so one missing file can't break offline mode
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => { e.waitUntil(self.clients.claim()); });

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // fonts: keep a copy so the app looks the same offline
  // fonts + question images (Wikimedia): keep a copy once seen, so they work offline too
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com" || /(^|\.)wikimedia\.org$/.test(url.hostname)){
    e.respondWith(caches.open(CACHE).then(async c => (await c.match(req)) || fetch(req).then(res => { c.put(req, res.clone()); return res; })));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      // give the network 4 seconds, then fall back to the saved copy
      const res = await Promise.race([fetch(req, {cache: "no-cache"}), new Promise((_, rej) => setTimeout(() => rej(new Error("slow")), 4000))]);
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(req, {ignoreSearch: true}) || (req.mode === "navigate" && await cache.match("index.html"));
      return hit || Response.error();
    }
  })());
});
