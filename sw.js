/* Service worker: la app abre sin conexión y guarda los mapas ya vistos (útil con datos móviles limitados).
   Si cambias archivos, sube el número de versión V para que todos reciban la actualización. */
const V="qea-v7",SHELL=["./","index.html","manifest.webmanifest","assets/css/styles.css","assets/img/icon.svg","assets/img/logo-app.svg","data/capas.js","data/lugares.js","data/libro.js","data/linea.js","data/config.js","data/fotos.js",
 "assets/js/util.js","assets/js/mapa.js","assets/js/linea.js","assets/js/ficha.js","assets/js/capas.js","assets/js/instituciones.js","assets/js/libro.js","assets/js/nav.js","assets/js/app.js"];
self.addEventListener("install",e=>e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=="qea-tiles").map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET"||r.headers.has("range"))return;const u=new URL(r.url);
  if(/arcgisonline|openstreetmap/.test(u.host)){ // mosaicos del mapa: primero caché, máx. 500
    e.respondWith(caches.open("qea-tiles").then(async c=>{const h=await c.match(r);if(h)return h;
      try{const n=await fetch(r);c.put(r,n.clone());c.keys().then(k=>k.length>500&&c.delete(k[0]));return n}catch(_){return h||Response.error()}}));return}
  e.respondWith(caches.open(V).then(async c=>{const h=await c.match(r);
    const n=fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}).catch(()=>h);return h||n}))});
