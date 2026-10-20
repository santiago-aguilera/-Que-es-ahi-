/* Ficha completa de cada lugar: tiempo, datos, fotos, audio y las 7 capas. */
const Ficha={id:null,prev:null,
abrir(id){location.hash="lugar/"+id},
cerrar(){location.hash=Nav.actual},
ph(e){const d=document.createElement("div");d.className="ph";d.innerHTML=`📷<br>${esc(e)}<br>foto pendiente<br><small>1600×840 px · 300 KB</small>`;return d},
mostrar(id){
  const p=byId(id);if(!p)return;Mapa.map.closePopup();Mapa.parar();
  const i=LUGARES.indexOf(p),ant=LUGARES[(i+LUGARES.length-1)%LUGARES.length],sig=LUGARES[(i+1)%LUGARES.length];
  const tl=p.linea.length?`<ul class="tl">${p.linea.map(e=>`<li class="rv"><b>${esc(e.anio)}</b> — ${esc(e.texto)}<small>Fuente: ${esc(e.fuente)}</small></li>`).join("")}</ul>`:'<p class="empty">PENDIENTE</p>';
  const mas=p.mas.length?`<h3 class="sec" id="s-mas">Para saber más</h3><ul class="mas">${p.mas.map(m=>`<li class="rv">${esc(m.t)}<small>Fuente: ${esc(m.f)}</small></li>`).join("")}</ul>`:"";
  const caps=CAPAS.map(c=>`<h3 class="sec" id="s-${c.id}">${c.icono} ${c.id}</h3><p class="q">${c.q}</p><div class="layer rv" style="--c:${c.color}"><p>${p.capas[c.id]?esc(p.capas[c.id]):'<span class="empty">PENDIENTE</span>'}</p></div>`).join("");
  const fl=typeof FOTOS!=="undefined"?FOTOS.filter(x=>x.lugar===p.id):[];
  const fig=x=>`<figure class="foto"><img loading="lazy" src="${esc(x.src)}" alt="${esc(x.alt)}"><figcaption><b>${esc(x.epoca)}${x.anio?" · "+esc(x.anio):""}</b> Foto: ${esc(x.autor)}${x.fuente?" · "+esc(x.fuente):""}</figcaption></figure>`;
  const gal=EPOCAS.map(e=>{const h=fl.filter(x=>x.epoca===e.id);return h.length?h.map(fig).join(""):`<img loading="lazy" src="assets/img/lugares/${p.id}/${slug(e.id)}.jpg" alt="${esc(p.name)}, época ${esc(e.id)}" data-e="${esc(e.id)}">`}).join("");
  const subir=CONFIG.fotosEndpoint?`<p><a class="btn" href="subir-fotos.html?lugar=${p.id}">📷 Sube tu foto de este lugar</a></p>`:"";
  const fts=p.fuentes.map(f=>`<li><a href="${esc(f.u)}" target="_blank" rel="noopener">${esc(f.n)}</a></li>`).join("");
  const toc=[["s-tl","⏳ Tiempo"],...(p.mas.length?[["s-mas","💡 Más"]]:[]),["s-fotos","📷 Fotos"],...CAPAS.map(c=>["s-"+c.id,c.icono+" "+c.id])].map(([g,t])=>`<button class="chipb" data-go="${g}">${t}</button>`).join("");
  const dir=`https://www.google.com/maps/dir/?api=1&destination=${p.latitude},${p.longitude}`;
  const f=$("#ficha");
  f.innerHTML=`<div class="fh"><button id="back" aria-label="Volver">← Volver</button><img class="logo" alt="Logo ¿Qué es ahí?"><h2>${esc(p.name)}</h2><button id="share" aria-label="Compartir">↗</button><div id="prog"></div></div>
   <div class="ban"><div class="e" aria-hidden="true">${p.emoji}</div><h2>${esc(p.name)}</h2><span class="chip">Investiga: ${esc(p.responsable)}</span></div>
   <div class="wrap"><p class="soft">📌 ${esc(p.lado)}</p>
   <p><button class="btn" id="goMap">Ver en el mapa</button> <a class="btn" href="${dir}" target="_blank" rel="noopener">Cómo llegar</a></p>
   <div class="chips toc">${toc}</div>
   <h3 class="sec" id="s-tl">Línea de tiempo</h3>${tl}
   ${mas}
   <h3 class="sec" id="s-fotos">Fotos por época</h3><div class="gal">${gal}</div>${subir}
   <div class="aud" hidden><h3 class="sec">🎧 Audio</h3><audio controls preload="metadata" src="assets/audio/${p.id}.mp3"></audio>${p.transcripcion?`<details><summary>Transcripción</summary><p>${esc(p.transcripcion)}</p></details>`:'<p class="soft">Transcripción: PENDIENTE</p>'}</div>
   ${caps}
   <h3 class="sec">Fuentes</h3><ul class="mas">${fts}<li>Texto de las 7 capas: matriz del equipo «Potentes ciudadanos».</li></ul>
   <div class="fnav"><button data-id="${ant.id}">← ${esc(ant.name)}</button><button data-id="${sig.id}">${esc(sig.name)} →</button></div></div>`;
  logoFix(f);$$(".gal>img",f).forEach(im=>im.onerror=()=>im.replaceWith(this.ph(im.dataset.e)));
  const au=$("audio",f);au.onloadedmetadata=()=>$(".aud",f).hidden=false;
  if(!this.id)this.prev=document.activeElement;this.id=id;
  f.classList.add("open");f.setAttribute("aria-hidden","false");$("#main").inert=$("nav").inert=true;f.scrollTop=0;reveal(f);
  $("#back").onclick=()=>this.cerrar();$("#share").onclick=()=>this.compartir(id);
  $("#goMap").onclick=()=>{location.hash="mapa";setTimeout(()=>Mapa.irA(id),120)};
  f.onclick=e=>{const g=e.target.closest("[data-go]"),n=e.target.closest("[data-id]");
    if(g)$("#"+CSS.escape(g.dataset.go),f)?.scrollIntoView({behavior:calma?"auto":"smooth",block:"start"});
    if(n)location.hash="lugar/"+n.dataset.id};
  f.onscroll=()=>{const h=f.scrollHeight-f.clientHeight;$("#prog",f).style.width=(h?f.scrollTop/h*100:0)+"%";if(!calma)$(".ban .e",f).style.transform=`translateY(${Math.min(f.scrollTop*.3,40)}px)`};
  $("#back").focus();
},
ocultar(){const f=$("#ficha");if(!f.classList.contains("open"))return;f.classList.remove("open");f.setAttribute("aria-hidden","true");$("#main").inert=$("nav").inert=false;this.id=null;this.prev?.focus?.()},
async compartir(id){const u=location.href.split("#")[0]+"#lugar/"+id,p=byId(id);
  try{if(navigator.share)await navigator.share({title:p.name+" — ¿Qué es ahí?",url:u});else{await navigator.clipboard.writeText(u);toast("Enlace copiado")}}catch(_){}}};
