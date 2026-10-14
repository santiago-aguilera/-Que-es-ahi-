/* Utilidades compartidas y datos derivados. */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=t=>String(t??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const calma=matchMedia("(prefers-reduced-motion: reduce)").matches;
const byId=id=>LUGARES.find(p=>p.id===id);
const capaDe=id=>CAPAS.find(c=>c.id===id);
const anioNum=a=>{const m=/\d{4}/.exec(a);return m?+m[0]:/colon/i.test(a)?1539:null};
const epocaDe=n=>n==null?null:EPOCAS.find(e=>n<=e.hasta).id;
const slug=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\s+/g,"-");
const corto=(t,n=130)=>t.length>n?t.slice(0,n).replace(/\s\S*$/,"")+"…":t;
function toast(m){const t=$("#toast");if(!m){t.style.display="none";return}t.textContent=m;t.style.display="block";clearTimeout(toast.t);toast.t=setTimeout(()=>t.style.display="none",5000)}
const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("vis");io.unobserve(e.target)}}),{threshold:.1}):null;
function reveal(r=document){$$(".rv:not(.vis)",r).forEach((el,i)=>{if(!io||calma){el.classList.add("vis");return}el.style.setProperty("--d",(i%8)*55+"ms");io.observe(el)})}
function contar(el,n){if(calma){el.textContent=n;return}const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1100);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0)}
// Logo del proyecto (se ve en toda la app); si el archivo no existe usa el de respaldo
function logoFix(r=document){$$(".logo",r).forEach(i=>{i.onerror=()=>{i.onerror=null;i.src=CONFIG.logoRespaldo};i.src=CONFIG.logoApp})}
// Datos derivados de la matriz
LUGARES.forEach(p=>{const ns=p.linea.map(e=>anioNum(e.anio)).filter(n=>n!=null);p.desde=ns.length?Math.min(...ns):null});
const EVENTOS=LUGARES.flatMap(p=>p.linea.map(e=>({...e,lugar:p.id,n:anioNum(e.anio)}))).sort((a,b)=>(a.n??0)-(b.n??0));
