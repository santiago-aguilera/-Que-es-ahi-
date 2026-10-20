/* Arranque. */
(function(){
  if(!window.L){$("#map").innerHTML='<p style="padding:24px">No se pudo cargar el mapa. Revisa tu conexión.</p>';return}
  logoFix();if(CONFIG.fotosEndpoint)$$("#acerca-fotos-t,#acerca-fotos").forEach(e=>e.hidden=false);Mapa.init();Linea.init();Instituciones.init();Nav.init();
  const s=$("#splash");let visto=false;try{visto=sessionStorage.getItem("qea:splash")}catch(_){}
  const quitar=()=>{s.classList.add("out");setTimeout(()=>s.remove(),700)};
  if(visto||calma)s.remove();else{try{sessionStorage.setItem("qea:splash","1")}catch(_){}setTimeout(quitar,1900);s.onclick=quitar}
  if("serviceWorker" in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});
})();
