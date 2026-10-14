/* Navegación por hash (#mapa, #capas, #lugares, #acerca, #lugar/<id>): permite compartir enlaces y usar "atrás". */
const Nav={actual:"mapa",vistas:["mapa","capas","lugares","acerca"],
mostrar(v){
  this.actual=v;$$(".view").forEach(e=>e.classList.toggle("on",e.id==="view-"+v));
  $$("nav button").forEach(b=>{const on=b.dataset.v===v;b.classList.toggle("on",on);on?b.setAttribute("aria-current","page"):b.removeAttribute("aria-current")});
  if(v!=="mapa"){Mapa.parar();Linea.cerrar()}
  if(v==="mapa")setTimeout(()=>Mapa.map.invalidateSize(),60);
  if(v==="acerca")Libro.cargar();if(v==="capas")Capas.activar();
  const el=$("#view-"+v);el.scrollTop=0;reveal(el)},
ruta(){
  const[a,b]=(location.hash.slice(1)||"mapa").split("/");
  if(a==="lugar"&&byId(b))return Ficha.mostrar(b);
  Ficha.ocultar();this.mostrar(this.vistas.includes(a)?a:"mapa")},
init(){addEventListener("hashchange",()=>this.ruta());$$("nav button").forEach(b=>b.onclick=()=>{location.hash=b.dataset.v});
  addEventListener("keydown",e=>{if(e.key==="Escape"&&Ficha.id)Ficha.cerrar()});this.ruta()}};
