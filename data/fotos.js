// FOTOS APROBADAS (las genera tools/importar_fotos.py, pero también puedes editarlas a mano).
// lugar = id de data/lugares.js · epoca = Colonial | República | Siglo XX | Actualidad
// Cada foto lleva texto alternativo (alt) y crédito (autor) — requisito de accesibilidad y de rigor.
const FOTOS = [
 {
  "lugar": "palacio-de-justicia",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/palacio-de-justicia/actualidad__20261019-213635-371.jpg",
  "alt": "En esta foto se ven a las palomas, protagonistas de la Plaza de Bolivar, observando las palabras de Francisco de Paula Santader, tal vez juzgando si estas palabras en verdad las leemos o solo la vemos.",
  "autor": "Samuel Esteban Contreras Velez",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "palacio-de-justicia",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/palacio-de-justicia/actualidad__20261019-213758-511.jpg",
  "alt": "En esta foto admiramos la figura de Simón Bolívar en el centro de la plaza. Él, acompañado de cualquier peatón que cruce la plaza, son testigos de la justicia, procesos y leyes de Colombia, mirando fijamente para tratar de entender nuestra libertad.",
  "autor": "Samuel Esteban Contreras Velez",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "palacio-de-lievano",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/palacio-de-lievano/actualidad__20261019-214310-481.jpg",
  "alt": "Podemos apreciar el decorado del Palacio del Liévano, en forma de florez y queriendo transmitir frescura, a pesar de que se encuentra ahí desde el siglo XX.",
  "autor": "Laura Sofía Arias Sánchez",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "palacio-de-lievano",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/palacio-de-lievano/actualidad__20261019-214921-695.jpg",
  "alt": "Una farola de hierro frente al Palacio del Liévano, esta farola tiene dos brazos laterales con luminarias de cristal, mientras en el medio hay una fotocelda.",
  "autor": "Laura Sofía Arias Sánchez",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "palacio-de-lievano",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/palacio-de-lievano/actualidad__20261019-215409-718.jpg",
  "alt": "Muestra la cornisa superior de piedra del edificio, rematada por un acroterio decorativo en forma de llama o antorcha con un pararrayos, teniendo detras un cielo nublado.",
  "autor": "Laura Sofía Arias Sánchez",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "palacio-de-lievano",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/palacio-de-lievano/actualidad__20261019-215724-109.jpg",
  "alt": "La fachada del Palacio Liévano, junto a un edificio moderno cuyo costado exhibe un gran mural artístico con rostros humanos y motivos del espacio exterior, bajo el característico cielo gris nublado de Bogotá.",
  "autor": "Laura Sofía Arias Sánchez",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "palacio-de-justicia",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/palacio-de-justicia/actualidad__20261019-220213-246.jpg",
  "alt": "Podemos ver más de cerca las palabras de Francisco de Paula Santander, palabras fundamentales para entender la historia de Colombia, su presente, y probablemente su futuro.",
  "autor": "Samuel Esteban Contreras Velez",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "catedral-capilla",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/catedral-capilla/actualidad__20261019-221150-945.jpg",
  "alt": "en esta imagen se aprecia la estatua de la Virgen del Carmen vestida con un hábito marrón bordado y un gran manto blanco. Sostiene en sus brazos al Niño Jesús y se ubica sobre una base decorada con caritas de ángeles. La rodea un nicho de concha, candelabros plateados y un crucifijo.",
  "autor": "Dana Chaparro",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "academia-de-historia-colombiana",
  "epoca": "Siglo XX",
  "src": "assets/img/lugares/academia-de-historia-colombiana/siglo-xx__20261019-221341-168.jpg",
  "alt": "Muestra una fotografía histórica en tono sepia de un grupo de soldados uniformados con sombreros, sosteniendo fusiles con bayonetas y posando parapetados entre vegetación de estilo selvático.",
  "autor": "Nohemí Valentina Barrios Barrios",
  "fuente": "Tomada por mi",
  "anio": "1998"
 },
 {
  "lugar": "academia-de-historia-colombiana",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/academia-de-historia-colombiana/actualidad__20261019-221447-499.jpg",
  "alt": "Muestra una vitrina de madera con fondo verde donde se exhibe una colección de medallas, condecoraciones e insignias con cintas de diversos colores y placas conmemorativas.",
  "autor": "Nohemí Valentina Barrios Barrios",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "catedral-capilla",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/catedral-capilla/actualidad__20261019-221533-421.jpg",
  "alt": "La imagen presenta un altar lateral decorado con una estatua de color blanco del Sagrado Corazón de Jesús al centro. El espacio está enmarcado por columnas con detalles ornamentales y cuenta con varios candelabros dorados y plateados con velas encendidas sobre la mesa litúrgica.",
  "autor": "Dana Chaparro",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "academia-de-historia-colombiana",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/academia-de-historia-colombiana/actualidad__20261019-221600-923.jpg",
  "alt": "Muestra un elegante salón institucional con sillas y sofás tapizados clásicos, suelo de parqué, lámparas de araña doradas y una pared cubierta por múltiples retratos enmarcados.",
  "autor": "Nohemí Valentina Barrios Barrios",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "academia-de-historia-colombiana",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/academia-de-historia-colombiana/actualidad__20261019-221634-245.jpg",
  "alt": "Muestra un cuadro al óleo de gran formato con marco tallado que retrata una escena colonial en un patio interior con arcos, acompañado de retratos fotográficos en la pared lateral.",
  "autor": "Nohemí Valentina Barrios Barrios",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "catedral-capilla",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/catedral-capilla/actualidad__20261019-221759-670.jpg",
  "alt": "La imagen muestra una escultura de la Virgen María con túnica azul y manto rosado situada en un nicho elevado, enmarcada por imponentes columnas dobles de tono azul marmolado y capiteles dorados. Debajo, sobre una mesa con un relieve dorado en forma de sol, se alinea una fila de candelabros plateado",
  "autor": "Dana Chaparro",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "academia-de-historia-colombiana",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/academia-de-historia-colombiana/actualidad__20261019-221800-785.jpg",
  "alt": "Muestra un pasillo iluminado con suelo de parqué, sofás de cuero rojo, placas conmemorativas de bronce en la pared y un pedestal central con una estatua ecuestre.",
  "autor": "Nohemí Valentina Barrios Barrios",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "academia-de-historia-colombiana",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/academia-de-historia-colombiana/actualidad__20261019-221843-113.jpg",
  "alt": "Muestra un pasillo interior de biblioteca con estanterías repletas de libros, ficheros mecánicos compactos de almacenamiento y una mesa de madera clásica en primer plano bajo iluminación cálida.",
  "autor": "Nohemí Valentina Barrios Barrios",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "congreso",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/congreso/actualidad__20261019-223001-545.jpg",
  "alt": "Presenta una vista panorámica en perspectiva de la fachada neoclásica de piedra tallada, con sus múltiples ventanas, columnata principal, escalinatas y la bandera nacional izada.",
  "autor": "Emily Reyes",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "congreso",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/congreso/actualidad__20261019-223045-720.jpg",
  "alt": "Captura en ángulo contrapicado la imponencia de las columnas jónicas y la base de piedra del edificio, destacando la bandera colombiana ondeando bajo un cielo nublado.",
  "autor": "Emily Reyes",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "congreso",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/congreso/actualidad__20261019-223127-619.jpg",
  "alt": "Muestra un plano contrapicado del muro exterior de piedra sillar con sus ventanas rectangulares repartidas, balustradas superiores y un cerramiento metálico en la base.",
  "autor": "Emily Reyes",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "congreso",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/congreso/actualidad__20261019-223241-405.jpg",
  "alt": "Exhibe la fachada lateral de piedra cantera en perspectiva, mostrando la estructura de varios niveles con ventanales alineados y el zócalo sobre la vía pública.",
  "autor": "Emily Reyes",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "congreso",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/congreso/actualidad__20261019-223314-602.jpg",
  "alt": "Detalla elementos ornamentales del pórtico, incluyendo columnas acanaladas, relieves esculpidos en piedra, ventanales interiores con faroles colgantes y portones de forja decorativa.",
  "autor": "Emily Reyes",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "congreso",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/congreso/actualidad__20261019-223343-767.jpg",
  "alt": "Muestra en primer plano la monumental columnata de estilo jónico, complementada por intrincados portones de hierro forjado que dan acceso al patio interior.",
  "autor": "Emily Reyes",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "congreso",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/congreso/actualidad__20261019-223417-422.jpg",
  "alt": "Destaca la imponente escultura en piedra de un grifo mitológico erigido sobre el cornisa del edificio, enmarcado entre las columnas y el cielo azul.",
  "autor": "Emily Reyes",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "congreso",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/congreso/actualidad__20261019-223454-93.jpg",
  "alt": "Muestra entre grandes columnas de piedra el relieve del escudo nacional con el cóndor y la leyenda «LIBERTAD Y ORDEN», protegido por una reja decorativa de hierro.",
  "autor": "Emily Reyes",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "museo-de-la-independencia",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/museo-de-la-independencia/actualidad__20261019-224019-734.jpg",
  "alt": "La foto muestra un acercamiento a la fachada blanca de la casa colonial, resaltando un balcón y contraventanas de madera verde oscura, además de personas transitando y pequeños puestos artesanales en la calle.",
  "autor": "Samuel Duarte",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "secretaria-de-cultura",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/secretaria-de-cultura/actualidad__20261019-224206-794.jpg",
  "alt": "Presenta el portón de entrada principal de madera azul enmarcado por una portada rústica terracota, una placa institucional en la pared, balcones en el segundo piso y una motocicleta estacionada afuera.",
  "autor": "Viviana Blanco",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "museo-de-la-independencia",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/museo-de-la-independencia/actualidad__20261019-224306-467.jpg",
  "alt": "La toma muestra la esquina del Museo de la Independencia, resaltando su vistoso balcón voladizo de madera verde, el tejado colonial de arcilla y un puesto callejero con sombrilla azul en el concurrido entorno peatonal.",
  "autor": "Samuel Duarte",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "secretaria-de-cultura",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/secretaria-de-cultura/actualidad__20261019-224306-534.jpg",
  "alt": "Destaca la esquina del edificio donde sobresale el balcón con las banderas de Colombia y Bogotá, un mural publicitario antiguo pintado en la pared superior y la placa con el nombre «Calle de Santa Clara».",
  "autor": "Viviana Blanco",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "secretaria-de-cultura",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/secretaria-de-cultura/actualidad__20261019-224353-981.jpg",
  "alt": "Muestra en perspectiva de esquina una casona colonial con muros blancos, zócalo terracota, tejas de barro, ventanas azuadas y balcones de madera, además del balcón esquinero con las banderas de Colombia y Bogotá.",
  "autor": "Viviana Blanco",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "museo-de-la-independencia",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/museo-de-la-independencia/actualidad__20261019-224730-576.jpg",
  "alt": "La toma frontal completa de la Casa del Florero exhibe sus grandes puertas y ventanas de madera verde, el balcón superior y el concurrido espacio exterior con puestos de venta callejera y transeúntes.",
  "autor": "Samuel Duarte",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "museo-de-la-independencia",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/museo-de-la-independencia/actualidad__20261019-224836-976.jpg",
  "alt": "El letrero informativo oficial del Museo de la Independencia presenta un texto histórico en español e inglés junto a una fotografía antigua en blanco y negro de la casona colonial durante su restauración.",
  "autor": "Samuel Duarte",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "las-calles",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/las-calles/actualidad__20261019-231605-426.jpg",
  "alt": "Fotografía aérea en blanco y negro que muestra un plano medio de la Plaza de Bolívar, con el antiguo Palacio de Justicia al fondo, el Capitolio en primer plano y edificios gubernamentales circundantes.",
  "autor": "Mathias correa",
  "fuente": "",
  "anio": ""
 }
];
