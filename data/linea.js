// PUNTOS DE LA LÍNEA DE TIEMPO (panel lateral del mapa).
// Cada punto: anio, titulo, historia (el relato), lugar (id de data/lugares.js), fuente.
// Puedes editar, borrar, agregar o cambiar el ORDEN: la app los muestra tal cual están aquí.
const LINEA = [
 {
  "anio": "1538/1539",
  "titulo": "Nace Santafé de Bogotá",
  "historia": "Fundación de Santafé de Bogotá, de facto en 1538 y jurídica en 1539. Trazada como Plaza Mayor hacia 1539, fue mercado, escenario ceremonial y centro del gobierno colonial.",
  "lugar": "plaza-de-bolivar",
  "fuente": "Presentación del equipo y Matriz del equipo"
 },
 {
  "anio": "1597",
  "titulo": "Llegan los jesuitas",
  "historia": "Llegada de los jesuitas; adquisición de casas en la futura Manzana Jesuítica.",
  "lugar": "colegio-san-bartolome",
  "fuente": "Presentación del equipo"
 },
 {
  "anio": "1604/1605",
  "titulo": "Se funda el Colegio de San Bartolomé",
  "historia": "Fundación del Colegio Seminario de San Bartolomé. Las fuentes no coinciden en una fecha única.",
  "lugar": "colegio-san-bartolome",
  "fuente": "Presentación del equipo"
 },
 {
  "anio": "1610–1691",
  "titulo": "Se levanta San Ignacio",
  "historia": "Se construye la iglesia de San Ignacio, diseñada por el padre Juan Bautista Coluccini, jesuita toscano.",
  "lugar": "colegio-san-bartolome",
  "fuente": "Presentación del equipo"
 },
 {
  "anio": "1656",
  "titulo": "El Sagrario, junto a la Catedral",
  "historia": "La Capilla del Sagrario, integrante del conjunto, fue levantada entre 1656 y 1700.",
  "lugar": "catedral-capilla",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1767",
  "titulo": "Expulsan a los jesuitas",
  "historia": "Carlos III ordena la expulsión de la Compañía de Jesús en toda la América española; en el Nuevo Reino se ejecuta el 1 de agosto de 1767.",
  "lugar": "colegio-san-bartolome",
  "fuente": "Presentación del equipo"
 },
 {
  "anio": "1772",
  "titulo": "San Bartolomé llega a su edificio actual",
  "historia": "El colegio se traslada al antiguo Colegio Máximo jesuita: por primera vez la institución coincide con el edificio, 167 años después de su fundación.",
  "lugar": "colegio-san-bartolome",
  "fuente": "Presentación del equipo"
 },
 {
  "anio": "1807",
  "titulo": "Comienza la Catedral actual",
  "historia": "La Catedral ocupa el lugar de templos sucesivos desde el siglo XVI; el edificio actual, diseñado por fray Domingo de Petrés, se construyó entre 1807 y 1823.",
  "lugar": "catedral-capilla",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1810",
  "titulo": "El 20 de julio y el florero",
  "historia": "Allí funcionó el comercio de José González Llorente, relacionado con el episodio del 20 de julio de 1810.",
  "lugar": "museo-de-la-independencia",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1821",
  "titulo": "La Plaza de la Constitución",
  "historia": "Pasa a llamarse Plaza de la Constitución, nombre que lleva hasta 1846.",
  "lugar": "plaza-de-bolivar",
  "fuente": "Wikipedia — Plaza de Bolívar"
 },
 {
  "anio": "1846",
  "titulo": "La estatua de Bolívar",
  "historia": "En 1846 recibió la estatua de Simón Bolívar y consolidó su nombre actual.",
  "lugar": "plaza-de-bolivar",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1846–1848",
  "titulo": "Arranca el Capitolio",
  "historia": "Autorizado en 1846 e iniciado en 1848 con planos de Thomas Reed, tardó cerca de ocho décadas en concluirse.",
  "lugar": "capitolio",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1861",
  "titulo": "El mercado sale de la Plaza",
  "historia": "Se prohíbe comprar y vender alimentos en la plaza: el mercado tradicional sale de allí.",
  "lugar": "plaza-de-bolivar",
  "fuente": "Alcaldía de Bogotá — Lo que tú no sabías de la Plaza de Bolívar"
 },
 {
  "anio": "1900",
  "titulo": "Arden las Galerías Arrubla",
  "historia": "El incendio del 20 de mayo de 1900 empezó en el local de un comerciante alemán de sombreros y quemó archivos de la ciudad. Las Galerías Arrubla, el primer centro comercial de Bogotá, ardieron durante tres días.",
  "lugar": "palacio-de-lievano",
  "fuente": "Universidad del Rosario y Semana"
 },
 {
  "anio": "1902",
  "titulo": "Nace el Palacio Liévano",
  "historia": "La reconstrucción comenzó en 1902 con diseño de Gastón Lelarge y dio origen al Palacio Liévano.",
  "lugar": "palacio-de-lievano",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1926",
  "titulo": "Se termina el Capitolio",
  "historia": "Guerras civiles, cambios políticos y varios arquitectos marcaron una obra terminada en 1926, convertida en referente de la arquitectura republicana.",
  "lugar": "capitolio",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1948",
  "titulo": "El Bogotazo",
  "historia": "El Bogotazo transforma el centro histórico. Hubo francotiradores en los techos del Colegio San Bartolomé y documentos del Arzobispado, rescatados del incendio, se guardaron allí.",
  "lugar": "colegio-san-bartolome",
  "fuente": "Presentación del equipo"
 },
 {
  "anio": "1960",
  "titulo": "La Plaza que conocemos hoy",
  "historia": "Su diseño contemporáneo, ejecutado en 1960, conserva la vocación cívica del lugar fundacional de Bogotá.",
  "lugar": "plaza-de-bolivar",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1975",
  "titulo": "Monumentos nacionales",
  "historia": "El Capitolio (11 de agosto, Decreto 1584) y la Catedral (11 de agosto) son declarados Monumento Nacional. Ese año también se declara de interés cultural la iglesia de San Ignacio.",
  "lugar": "capitolio",
  "fuente": "Radio Nacional, Visit Bogotá y presentación del equipo"
 },
 {
  "anio": "1985",
  "titulo": "Toma del Palacio de Justicia",
  "historia": "La sede judicial de la Plaza fue destruida durante la toma y retoma del 6 y 7 de noviembre de 1985, tragedia que dejó víctimas, desaparecidos y profundas heridas institucionales.",
  "lugar": "palacio-de-justicia",
  "fuente": "Matriz del equipo"
 },
 {
  "anio": "1995",
  "titulo": "La Plaza, Monumento Nacional",
  "historia": "Es declarada Monumento Nacional (19 de octubre).",
  "lugar": "plaza-de-bolivar",
  "fuente": "Colombia Travel"
 },
 {
  "anio": "1998",
  "titulo": "Se ocupa el nuevo Palacio de Justicia",
  "historia": "Tras 13 años de obra, el nuevo Palacio empieza a ser ocupado; costó cerca de 63.000 millones de pesos.",
  "lugar": "palacio-de-justicia",
  "fuente": "El Universal"
 },
 {
  "anio": "2017",
  "titulo": "San Ignacio reabre",
  "historia": "Tras la restauración integral (2003–2017), la iglesia de San Ignacio reabre al público a finales de 2017.",
  "lugar": "colegio-san-bartolome",
  "fuente": "Presentación del equipo"
 },
 {
  "anio": "2018–2025",
  "titulo": "Un archivo de 209.000 folios",
  "historia": "Se cataloga el Archivo Histórico del Colegio: el documento más antiguo es del 3 de diciembre de 1561 y el primer tomo del catálogo salió en 2025.",
  "lugar": "colegio-san-bartolome",
  "fuente": "Presentación del equipo"
 }
];
