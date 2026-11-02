/* Study Quiz service worker.
   Network-first: when you're online you always get the newest version from GitHub Pages,
   and every successful load is saved so the app still opens offline. No version bumps needed. */
const CACHE = "study-quiz";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => { e.waitUntil(self.clients.claim()); });

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
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
