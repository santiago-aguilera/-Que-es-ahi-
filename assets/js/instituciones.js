/* Pestaña "Lugares": tarjetas y buscador. */
const Instituciones={
init(){this.render("");$("#q").oninput=e=>this.render(e.target.value)},
render(f){const q=f.trim().toLowerCase();
  const it=LUGARES.filter(p=>!q||(p.name+" "+p.lado+" "+Object.values(p.capas).join(" ")+" "+p.mas.map(m=>m.t).join(" ")).toLowerCase().includes(q));
  $("#q-n").textContent=q?`${it.length} resultado${it.length===1?"":"s"}`:`${LUGARES.length} lugares alrededor de la Plaza de Bolívar`;
  $("#grid").innerHTML=it.map(p=>`<article class="card rv"><div class="ico" aria-hidden="true">${p.emoji}</div><div class="in"><h3>${esc(p.name)}</h3><span class="chip">Investiga: ${esc(p.responsable)}</span><p class="soft">📌 ${esc(p.lado)}</p><button class="btn" onclick="Ficha.abrir('${p.id}')">Abrir ficha</button></div></article>`).join("")||'<p class="empty">No encontramos coincidencias.</p>';
  reveal($("#grid"))}};
