/* Libro digital (pestaña Acerca): PDF, imágenes de Canva o Canva incrustado. Configuración en data/libro.js */
const Libro={hecho:false,
cargar(){
  if(this.hecho)return;this.hecho=true;const c=$("#libro-box");
  $("#leyenda").innerHTML=CAPAS.map(x=>`<div style="--c:${x.color}"><b>${x.icono} ${x.id}</b><span class="soft">${x.q}</span></div>`).join("");
  this.logos();
  if(LIBRO.pdf)this.pdf(c);else if(LIBRO.paginas.length)this.flip(c,LIBRO.paginas);else if(LIBRO.canva)this.canva(c);else this.portada(c)},
logos(){const b=$("#logos");b.innerHTML=CONFIG.logos.map(l=>`<img loading="lazy" src="${esc(l.src)}" alt="${esc(l.alt)}">`).join("");
  $$("img",b).forEach(im=>im.onerror=()=>{const d=document.createElement("div");d.className="ph";d.textContent="Aquí va un logo";im.replaceWith(d)})},
portada(c){c.innerHTML=`<div class="libro"><div class="tapa"><span>${esc(LIBRO.titulo)}</span></div><p>${esc(LIBRO.proximamente)}</p></div>`},
canva(c){c.innerHTML=`<div class="libro"><div class="canva"><iframe src="${esc(LIBRO.canva)}" title="${esc(LIBRO.titulo)}" loading="lazy" allowfullscreen allow="fullscreen"></iframe></div><p><a class="btn" href="${esc(LIBRO.canva)}" target="_blank" rel="noopener">Abrir en pantalla completa</a></p></div>`},
script(src){return new Promise((ok,no)=>{const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=no;document.head.appendChild(s)})},
error(c){c.innerHTML=`<div class="libro"><p>No pudimos abrir el libro aquí.</p>${LIBRO.pdf?`<p><a class="btn" href="${esc(LIBRO.pdf)}" target="_blank" rel="noopener">Descargar PDF</a></p>`:""}</div>`},
async pdf(c){
  c.innerHTML='<div class="libro"><p id="lp">Preparando el libro…</p></div>';
  try{
    await this.script("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js");
    pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    const doc=await pdfjsLib.getDocument(LIBRO.pdf).promise,imgs=[];
    for(let i=1;i<=doc.numPages;i++){
      const pg=await doc.getPage(i),v0=pg.getViewport({scale:1}),v=pg.getViewport({scale:Math.min(2,900/v0.width)}),cv=document.createElement("canvas");
      cv.width=v.width;cv.height=v.height;await pg.render({canvasContext:cv.getContext("2d"),viewport:v}).promise;
      imgs.push(cv.toDataURL("image/jpeg",.82));if(i===1){LIBRO.ancho=v0.width;LIBRO.alto=v0.height}
      $("#lp").textContent=`Preparando el libro… ${i}/${doc.numPages}`}
    this.flip(c,imgs)
  }catch(e){this.error(c)}},
async flip(c,imgs){
  c.innerHTML=`<div class="libro"><div id="flip"></div><div class="lc-ctl"><button id="lb-a" aria-label="Página anterior">←</button><span id="lb-n"></span><button id="lb-s" aria-label="Página siguiente">→</button><button id="lb-f" aria-label="Pantalla completa">⛶</button></div></div>`;
  try{
    await this.script("https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.js");
    const W=LIBRO.ancho,H=LIBRO.alto,pf=new St.PageFlip($("#flip",c),{width:W,height:H,size:"stretch",minWidth:240,maxWidth:560,minHeight:240*H/W,maxHeight:560*H/W,showCover:true,maxShadowOpacity:.5,mobileScrollSupport:false});
    pf.loadFromImages(imgs);const n=()=>$("#lb-n").textContent=`${pf.getCurrentPageIndex()+1} / ${pf.getPageCount()}`;
    pf.on("flip",n);setTimeout(n,300);$("#lb-a").onclick=()=>pf.flipPrev();$("#lb-s").onclick=()=>pf.flipNext();
    $("#lb-f").onclick=()=>$(".libro",c).requestFullscreen?.();
  }catch(e){c.innerHTML=`<div class="libro pgs">${imgs.map((s,i)=>`<img loading="lazy" src="${esc(s)}" alt="Página ${i+1}">`).join("")}</div>`}}};
