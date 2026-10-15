/* Mapa, viaje en el tiempo, recorrido guiado y geolocalización. */
const Mapa={map:null,mk:{},timer:null,
init(){
  const m=this.map=L.map("map",{zoomControl:false,attributionControl:false,zoomAnimation:!calma}).setView([4.59808,-74.07605],17);
  // Créditos del mapa (obligatorios para Esri/OSM): arriba a la derecha y plegados en un ícono ⓘ en el celular
  const at=L.control.attribution({position:"topright",prefix:false}).addTo(m),ac=at.getContainer();
  ac.classList.add("att");ac.setAttribute("role","button");ac.setAttribute("aria-label","Créditos del mapa");ac.tabIndex=0;
  if(innerWidth<760)ac.classList.add("min");
  ac.onclick=()=>ac.classList.toggle("min");ac.onkeydown=e=>{if(e.key==="Enter"||e.key===" ")ac.classList.toggle("min")};
  const base=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{maxZoom:19,attribution:"Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, OpenStreetMap contributors"}).addTo(m);
  let fails=0;base.on("tileerror",()=>{if(++fails!==4)return;m.removeLayer(base);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(m);toast("Cambié automáticamente a otro mapa base.")});
  LUGARES.forEach((p,i)=>{
    const icon=L.divIcon({className:"",html:`<div class="pw" style="--d:${i*70}ms"><div class="pin${p.approx?" approx":""}"><span>${p.emoji}</span></div></div>`,iconSize:[34,34],iconAnchor:[17,32],popupAnchor:[0,-30]});
    const k=this.mk[p.id]=L.marker([p.latitude,p.longitude],{icon,title:p.name,alt:p.name,keyboard:true}).addTo(m).bindPopup(()=>this.popup(p));
    k.on("popupopen",()=>this.sel(p.id)).on("popupclose",()=>this.sel(null));
  });
  m.fitBounds(LUGARES.map(p=>[p.latitude,p.longitude]),{padding:[60,60],maxZoom:18});
  m.on("dragstart",()=>this.parar());
  $("#btnTour").onclick=()=>this.recorrido();$("#btnHere").onclick=()=>this.ubicar();
},
popup(p){const h=corto((p.capas["Histórica"]||"").split(/(?<=[.!?])\s/)[0]);
  return `<div class="pop"><b>${esc(p.name)}</b><small>${esc(p.lado)}</small><p>${esc(h)}</p><button class="btn" onclick="Ficha.abrir('${p.id}')">Abrir ficha</button></div>`},
sel(id){Object.entries(this.mk).forEach(([k,m])=>m.getElement()?.querySelector(".pin")?.classList.toggle("sel",k===id))},
irA(id){this.map.flyTo([byId(id).latitude,byId(id).longitude],18,{animate:!calma,duration:.8});setTimeout(()=>this.mk[id].openPopup(),calma?0:850)},
enAnio(y){ // atenúa los lugares que aún no tienen historia registrada en ese año (null = mostrar todos)
  LUGARES.forEach(p=>this.mk[p.id].getElement()?.querySelector(".pin")?.classList.toggle("off",y!=null&&p.desde!=null&&p.desde>y));
  const c=$("#chipAnio");c.hidden=y==null;if(y!=null)c.textContent=`Mostrando hasta ${y}  ✕`},
recorrido(){ // de lo más antiguo a lo más reciente
  if(this.timer){this.parar();return}
  const orden=[...LUGARES].sort((a,b)=>(a.desde??9999)-(b.desde??9999));let i=0;$("#btnTour").textContent="⏸ Detener";
  const sig=()=>{if(i>=orden.length){this.parar();toast("Terminó el recorrido ✨");return}this.irA(orden[i++].id);this.timer=setTimeout(sig,7000)};sig()},
parar(){clearTimeout(this.timer);this.timer=null;$("#btnTour").textContent="🧭 Recorrido"},
ubicar(){
  const b=$("#btnHere");if(!navigator.geolocation){toast("Este dispositivo no permite geolocalización.");return}
  b.disabled=true;b.textContent="Ubicándote…";const fin=()=>{b.disabled=false;b.textContent="📍 ¿Qué es ahí?"};
  navigator.geolocation.getCurrentPosition(pos=>{
    const me=[pos.coords.latitude,pos.coords.longitude];
    if(this.yo)this.yo.setLatLng(me);else this.yo=L.marker(me,{icon:L.divIcon({className:"",html:'<div class="user"></div>',iconSize:[16,16],iconAnchor:[8,8]}),interactive:false}).addTo(this.map);
    const d=p=>this.map.distance(me,[p.latitude,p.longitude]);const best=[...LUGARES].sort((a,b)=>d(a)-d(b))[0];
    fin();if(d(best)>3000)toast("Estás lejos de la Plaza de Bolívar; te muestro el lugar más cercano igual.");this.irA(best.id);
  },e=>{fin();toast(e.code===1?"Permiso de ubicación denegado. Actívalo para usar esta función.":"No pudimos obtener tu ubicación. Inténtalo al aire libre.")},{enableHighAccuracy:true,timeout:10000,maximumAge:30000});
}};
