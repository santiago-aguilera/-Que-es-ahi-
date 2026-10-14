/* Filtro por capa: una capa a la vez en todos los lugares + línea de tiempo general. */
const Capas={sel:"Histórica",era:"Todas",listo:false,
activar(){
  if(this.listo)return;this.listo=true;
  const ns=EVENTOS.map(e=>e.n).filter(n=>n!=null);
  $("#hero").innerHTML=[[LUGARES.length,"lugares"],[CAPAS.length,"capas"],[EVENTOS.length,"hitos"],[Math.max(...ns)-Math.min(...ns),"años"]].map(([n,t])=>`<div class="stat"><b data-n="${n}">0</b><small>${t}</small></div>`).join("");
  $$("#hero b").forEach(b=>contar(b,+b.dataset.n));
  $("#view-capas").addEventListener("click",e=>this.click(e));this.render();
},
click(e){const c=e.target.closest("[data-c]"),r=e.target.closest("[data-e]");
  if(c){this.sel=c.dataset.c;this.render()}if(r){this.era=r.dataset.e;this.render()}},
render(){
  $("#capa-chips").innerHTML=CAPAS.map(c=>`<button role="tab" aria-selected="${c.id===this.sel}" class="chipb${c.id===this.sel?" on":""}" style="--c:${c.color}" data-c="${c.id}">${c.icono} ${c.id}</button>`).join("")+`<button role="tab" aria-selected="${this.sel==="T"}" class="chipb${this.sel==="T"?" on":""}" data-c="T">⏳ Línea de tiempo</button>`;
  const o=$("#capa-out");o.innerHTML=this.sel==="T"?this.linea():this.capa();reveal(o)},
capa(){const c=capaDe(this.sel),n=LUGARES.filter(p=>p.capas[c.id]).length;
  return `<div class="cap-h" style="--c:${c.color}"><div class="i">${c.icono}</div><div><h2>${c.id}</h2><p>${c.q}</p></div></div><p class="soft">${n} de ${LUGARES.length} lugares tienen esta capa escrita.</p><br>`+
  LUGARES.map(p=>{const t=p.capas[c.id];return `<article class="lc rv" style="--c:${c.color}"><header><span>${p.emoji}</span><h3>${esc(p.name)}</h3></header><p>${t?esc(t):'<i class="empty">PENDIENTE</i>'}</p><button class="lnk" onclick="Ficha.abrir('${p.id}')">Abrir ficha →</button></article>`}).join("")},
linea(){const ev=EVENTOS.filter(e=>this.era==="Todas"||epocaDe(e.n)===this.era);
  const er=["Todas",...EPOCAS.map(e=>e.id)].map(x=>`<button class="chipb${x===this.era?" on":""}" data-e="${x}">${x}</button>`).join("");
  return `<div class="chips">${er}</div><p class="soft">${ev.length} hitos de toda la Plaza, del más antiguo al más reciente.</p><ol class="tlg">`+
  ev.map(e=>{const p=byId(e.lugar);return `<li class="rv"><b>${esc(e.anio)}</b><div><span class="chip">${p.emoji} ${esc(p.name)}</span><p>${esc(e.texto)}</p><small>Fuente: ${esc(e.fuente)}</small><button class="lnk" onclick="Ficha.abrir('${p.id}')">Abrir ficha →</button></div></li>`}).join("")+"</ol>"}};
