/* Línea de tiempo en panel lateral: puntos con su historia. Los puntos se editan en data/linea.js */
const Linea={era:"Todas",sel:null,
COL:{Colonial:"#9a3b22","República":"#3b4f7a","Siglo XX":"#a8741a",Actualidad:"#2f7d6d"},
init(){
  $("#btnTL").onclick=()=>this.abrir();$("#tl-x").onclick=()=>this.cerrar();$("#chipAnio").onclick=()=>this.limpiar();
  $("#tl-drawer").addEventListener("click",e=>{
    const er=e.target.closest("[data-era]"),pt=e.target.closest("[data-i]"),go=e.target.closest("[data-go]"),fi=e.target.closest("[data-ficha]");
    if(er){this.era=er.dataset.era;this.render()}
    if(pt)this.elegir(+pt.dataset.i);
    if(go){this.cerrar();Mapa.irA(go.dataset.go)}
    if(fi){this.cerrar();Ficha.abrir(fi.dataset.ficha)}});
  addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#tl-drawer").classList.contains("open")&&!Ficha.id)this.cerrar()});
  this.render()},
abrir(){$("#tl-drawer").classList.add("open");$("#tl-drawer").setAttribute("aria-hidden","false");$("#btnTL").setAttribute("aria-expanded","true");Mapa.parar();$("#tl-x").focus()},
cerrar(){$("#tl-drawer").classList.remove("open");$("#tl-drawer").setAttribute("aria-hidden","true");$("#btnTL").setAttribute("aria-expanded","false")},
limpiar(){this.sel=null;Mapa.enAnio(null);this.render()},
elegir(i){
  this.sel=this.sel===i?null:i;this.render();
  if(this.sel==null){Mapa.enAnio(null);return}
  const p=LINEA[i];Mapa.enAnio(anioNum(p.anio));
  if(innerWidth>=760&&byId(p.lugar))Mapa.irA(p.lugar);   // en pantallas anchas el mapa acompaña; en el celular usa "Ver en el mapa"
  $(".pt.on",$("#tl-body"))?.scrollIntoView({block:"nearest",behavior:calma?"auto":"smooth"})},
render(){
  const pts=LINEA.map((p,i)=>({...p,i,n:anioNum(p.anio)})).filter(p=>this.era==="Todas"||epocaDe(p.n)===this.era);
  const er=["Todas",...EPOCAS.map(e=>e.id)].map(x=>`<button class="chipb${x===this.era?" on":""}" data-era="${x}">${x}</button>`).join("");
  const li=pts.map(p=>{const l=byId(p.lugar),on=this.sel===p.i;
    return `<li class="pt${on?" on":""}" style="--c:${this.COL[epocaDe(p.n)]||"#9a3b22"}"><button class="dot" data-i="${p.i}" aria-expanded="${on}"><span class="y">${esc(p.anio)}</span><span class="t">${esc(p.titulo)}</span></button>`+
    (on?`<div class="story"><p>${esc(p.historia)}</p><small>${l?l.emoji+" "+esc(l.name)+" · ":""}Fuente: ${esc(p.fuente)}</small>${l?`<button class="btn" data-go="${l.id}">Ver en el mapa</button> <button class="lnk" data-ficha="${l.id}">Abrir ficha →</button>`:""}</div>`:"")+"</li>"}).join("");
  $("#tl-body").innerHTML=`<div class="chips">${er}</div><p class="soft">${pts.length} puntos · toca uno para leer su historia.</p><ol class="pts">${li}</ol>`}};
