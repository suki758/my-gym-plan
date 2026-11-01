const CACHE='my-gym-plan-v2-5-readable-20261101';
const ASSETS=[
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./illustrations/deadbug-movement.webp",
  "./illustrations/deadbug-muscles.webp",
  "./illustrations/deadbug.webp",
  "./illustrations/hinge-movement.webp",
  "./illustrations/hinge-muscles.webp",
  "./illustrations/hinge.webp",
  "./illustrations/pallof-movement.webp",
  "./illustrations/pallof-muscles.webp",
  "./illustrations/pallof.webp",
  "./illustrations/plank-movement.webp",
  "./illustrations/plank-muscles.webp",
  "./illustrations/plank.webp",
  "./illustrations/press-movement.webp",
  "./illustrations/press-muscles.webp",
  "./illustrations/press.webp",
  "./illustrations/pulldown-movement.webp",
  "./illustrations/pulldown-muscles.webp",
  "./illustrations/pulldown.webp",
  "./illustrations/row-movement.webp",
  "./illustrations/row-muscles.webp",
  "./illustrations/row.webp",
  "./illustrations/squat-movement.webp",
  "./illustrations/squat-muscles.webp",
  "./illustrations/squat.webp"
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE&&k.startsWith('my-gym-plan-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
