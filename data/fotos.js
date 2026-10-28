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
 },
 {
  "lugar": "capitolio",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/capitolio/actualidad__20261020-135531-699.jpg",
  "alt": "Muestra en ángulo contrapicado la fachada de piedra del Capitolio Nacional con sus imponentes columnas jónicas y ventanas tradicionales, mientras varias personas caminan por la vía peatonal contigua bajo un cielo nublado.",
  "autor": "Joseph Javier Carvajal Castillo",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "capitolio",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/capitolio/actualidad__20261020-135627-687.jpg",
  "alt": "Captura una vista panorámica amplia de la Plaza de Bolívar repleta de palomas y transeúntes, teniendo al fondo la fachada principal del Capitolio Nacional y el Palacio Liévano a la derecha.",
  "autor": "Joseph Javier Carvajal Castillo",
  "fuente": "Tomada por mi",
  "anio": "2026"
 },
 {
  "lugar": "plaza-de-bolivar",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/plaza-de-bolivar/actualidad__20261020-163438-881.jpg",
  "alt": "Esta fotografía muestra una placa conmemorativa de bronce sobre una pared de piedra. En el relieve superior se observa a varios soldados republicanos. Debajo, una inscripción grabada reflexiona sobre la soberanía del pueblo frente a la tiranía.",
  "autor": "Ander Morales",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "plaza-de-bolivar",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/plaza-de-bolivar/actualidad__20261020-163927-877.jpg",
  "alt": "Relieve conmemorativo en bronce que representa una reunión de cinco personajes ilustres alrededor de un escritorio. La inscripción inferior exalta el valor del título de ciudadano, señalando que las leyes son la verdadera fuente de la libertad institucional.",
  "autor": "Ander Morales",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "plaza-de-bolivar",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/plaza-de-bolivar/actualidad__20261020-164155-654.jpg",
  "alt": "Escultura en bronce que retrata a un oficial militar entregando un documento a una mujer con su hijo y a un hombre arrodillado. El texto inferior aboga por la abolición total de la esclavitud en la naciente república.",
  "autor": "Ander Morales",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "plaza-de-bolivar",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/plaza-de-bolivar/actualidad__20261020-164621-204.jpg",
  "alt": "Fotografía de la fachada principal del Palacio de Justicia en Bogotá, caracterizada por sus imponentes columnas de piedra. La plaza se observa poblada por transeúntes y palomas que caminan sobre el suelo adoquinado bajo un cielo parcialmente nublado.",
  "autor": "Ander Morales",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "plaza-de-bolivar",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/plaza-de-bolivar/actualidad__20261020-164745-817.jpg",
  "alt": "Toma panorámica de la Plaza de Bolívar que muestra el edificio amarillo del Palacio Liévano de fondo. En el plano frontal, dos personas descansan al borde de la estructura de piedra mientras las palomas revolotean por el lugar.",
  "autor": "Ander Morales",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "plaza-de-bolivar",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/plaza-de-bolivar/actualidad__20261020-165319-543.jpg",
  "alt": "Vista hacia la Catedral Primada de Bogotá con sus emblemáticas torres destacando frente al cielo azul repleto de nubes. En la explanada, visitantes disfrutan del día sentados en los muros o paseando entre las palomas.",
  "autor": "Ander Morales",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "plaza-de-bolivar",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/plaza-de-bolivar/actualidad__20261020-165603-717.jpg",
  "alt": "Fotografía centrada en el monumento a Simón Bolívar erigido en medio de la plaza, con el Capitolio Nacional al fondo. Diversas personas se reúnen alrededor de la base del pedestal en una jornada habitual en el centro histórico.",
  "autor": "Ander Morales",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261020-173329-453.jpg",
  "alt": "Fotografía en contrapicada de un elegante torreón de estilo clásico con una prominente cúpula oscura. La estructura presenta detallados relieves ornamentales, molduras decorativas, ventanas rectangulares y una escalera de caracol exterior bajo un cielo azul con nubes.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261020-173708-17.jpg",
  "alt": "Vista frontal de una edificación neoclásica de piedra con arcos y balconies. Su torreón remata en una cúpula oscura en la parte superior. En primer plano, un vistoso jardín repleto de hortensias azules adorna la base del inmueble.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261020-174152-646.jpg",
  "alt": "Fotografía del patio interior de un edificio colonial de varios niveles con arquerías de color naranja y blanco. El centro del espacio cuenta con una cancha deportiva demarcada, rodeada por balcones decorados con plantas colgantes muy ordenadas.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261020-174415-141.jpg",
  "alt": "Fotografía del interior de un aula de clases con diseño escalonado y mesas individuales de madera numeradas. Al fondo se observan amplios vitrales antiguos de almacenamiento con instrumentos, creando una atmósfera académica sumamente tradicional y llena de historia",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261020-174737-628.jpg",
  "alt": "Fotografía de un amplio pasillo con piso de granito decorado por bustos esculpidos en bronce sobre pedestales de madera. Al fondo destaca un mural colorido a gran escala que retrata a ilustres estudiantes, profesores y clérigos históricos.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261020-175412-227.jpg",
  "alt": "Fotografía que captura una cúpula monumental adornada con detalles en tonos amarillos y rojizos. En la esquina inferior derecha, una estatua de bronce sobre un pedestal se perfila en sombra frente a los arcos iluminados de la edificación.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261020-175539-791.jpg",
  "alt": "Plano contrapicado de una cúpula clásica de tejas cubierta por una linterna con veleta en la cúspide. En primer plano sobresale una balaustrada de balustres blancos decorada con jarrones ornamentales de piedra bajo un cielo parcialmente nublado.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "las-calles",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/las-calles/actualidad__20261020-185259-197.jpg",
  "alt": "Fotografía de la emblemática Calle del Divorcio, un pasaje peatonal adoquinado en el centro histórico de Bogotá. Varios peatones transitan entre edificios modernos y construcciones tradicionales con locales comerciales, bajo un cielo nublado y un ambiente urbano dinámico.",
  "autor": "Mathias Correa",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Colonial",
  "src": "assets/img/lugares/colegio-san-bartolome/colonial__20261022-171821-681.jpg",
  "alt": "Fotografía de un documento histórico manuscrito redactado en caligrafía antigua con tinta sobre papel envejecido. El texto de carácter oficial ostenta el encabezado ceremonial «IHS» y detalla estatutos fundacionales del Seminario de San Bartolomé con elegancia.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Colonial",
  "src": "assets/img/lugares/colegio-san-bartolome/colonial__20261022-172138-164.jpg",
  "alt": "Vista histórica en blanco y negro de la fachada de una iglesia colonial de arquitectura sobria. Presenta grandes portones de madera, una torre con campanario, arcos decorativos y una explanada amplia en su entrada con faroles de época.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "República",
  "src": "assets/img/lugares/colegio-san-bartolome/republica__20261022-172257-295.jpg",
  "alt": "Fotografía histórica coloreada de la década de 1860 que captura una formación militar en la Plaza de Bolívar. Se observa el Colegio Mayor de San Bartolomé, la Iglesia y las montañas dominando el imponente panorama republicano de la capital.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "República",
  "src": "assets/img/lugares/colegio-san-bartolome/republica__20261022-172336-763.jpg",
  "alt": "Fotografía antigua en blanco y negro de un laboratorio astronómico con grandes ventanas de arco. En el centro se distingue un telescopio montado sobre su trípode, acompañado por un estante con libros, escritorios y diversos instrumentos científicos.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "República",
  "src": "assets/img/lugares/colegio-san-bartolome/republica__20261022-172604-101.jpg",
  "alt": "Fotografía histórica en blanco y negro que registra la edificación de un inmueble rodeado de andamios de madera. En la calle adyacente transita un tranvía junto a transeúntes, reflejando el dinamismo urbano de la Bogotá de antaño.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "República",
  "src": "assets/img/lugares/colegio-san-bartolome/republica__20261022-172758-135.jpg",
  "alt": "Fotografía que captura una cúpula monumental adornada con detalles en tonos amarillos y rojizos. En la esquina inferior derecha, una estatua de bronce sobre un pedestal se perfila en sombra frente a los arcos iluminados de la edificación.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "República",
  "src": "assets/img/lugares/colegio-san-bartolome/republica__20261022-172944-95.jpg",
  "alt": "Vista desde una ventana que encuadra la estatua de bronce de Camilo Torres erigida sobre un pedestal de piedra. Al fondo destaca la imponente fachada institucional, rodeada por rejas de protección y peatones que circulan por la zona.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "República",
  "src": "assets/img/lugares/colegio-san-bartolome/republica__20261022-173124-16.jpg",
  "alt": "Pancarta horizontal conmemorativa del Colegio Mayor de San Bartolomé por sus cuatro siglos de historia. Presenta un extenso mural ilustrado con múltiples personajes ilustres, clérigos y eventos históricos colombianos acompañados por textos descriptivos detallados en la base.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Siglo XX",
  "src": "assets/img/lugares/colegio-san-bartolome/siglo-xx__20261022-173440-628.jpg",
  "alt": "Plano contrapicado de una cúpula clásica de tejas cubierta por una linterna con veleta en la cúspide. En primer plano sobresale una balaustrada de balustres blancos decorada con jarrones ornamentales de piedra bajo un cielo parcialmente nublado.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Siglo XX",
  "src": "assets/img/lugares/colegio-san-bartolome/siglo-xx__20261022-174015-492.jpg",
  "alt": "Fotografía en contrapicada de un elegante torreón de estilo clásico con una prominente cúpula oscura. La estructura presenta detallados relieves ornamentales, molduras decorativas, ventanas rectangulares y una escalera de caracol exterior bajo un cielo azul con nubes.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Siglo XX",
  "src": "assets/img/lugares/colegio-san-bartolome/siglo-xx__20261022-174234-189.jpg",
  "alt": "Vista frontal de una edificación neoclásica de piedra con arcos y balcones. Su torreón remata en una cúpula oscura en la parte superior. En primer plano, un vistoso jardín repleto de hortensias azules adorna la base del inmueble.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "República",
  "src": "assets/img/lugares/colegio-san-bartolome/republica__20261022-174340-555.jpg",
  "alt": "Fotografía del patio interior de un edificio colonial de varios niveles con arquerías de color naranja y blanco. El centro del espacio cuenta con una cancha deportiva demarcada, rodeada por balcones decorados con plantas colgantes muy ordenadas.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261022-174620-891.jpg",
  "alt": "Fotografía del interior de un aula de clases con diseño escalonado y mesas individuales de madera numeradas. Al fondo se observan amplios vitrales antiguos de almacenamiento con instrumentos, creando una atmósfera académica sumamente tradicional y llena de historia.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261022-174738-638.jpg",
  "alt": "Pancarta horizontal conmemorativa del Colegio Mayor de San Bartolomé por sus cuatro siglos de historia. Presenta un extenso mural ilustrado con múltiples personajes ilustres, clérigos y eventos históricos colombianos acompañados por textos descriptivos detallados en la base.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "colegio-san-bartolome",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/colegio-san-bartolome/actualidad__20261022-174849-516.jpg",
  "alt": "Esta toma aérea captura un complejo arquitectónico histórico con tejados de arcilla roja y un patio central. Se observan torres, cúpulas barrocas y edificios coloniales rodeados por calles donde transitan peatones, resaltando el diseño urbano tradicional del sector.",
  "autor": "Santiago Aguilera",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "capitolio",
  "epoca": "República",
  "src": "assets/img/lugares/capitolio/republica__20261025-165147-569.jpg",
  "alt": "Fotografía en blanco y negro que muestra las fases iniciales de construcción o ruinas del Capitolio Nacional, dejando ver su estructura de piedra y ventanales sin terminar.",
  "autor": "Joseph Carvajal",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "capitolio",
  "epoca": "Colonial",
  "src": "assets/img/lugares/capitolio/colonial__20261025-165617-310.jpg",
  "alt": "Antigua imagen en blanco y negro del Capitolio en obras de edificación, donde destacan personas con ruana y sombrero caminando en primer plano sobre la explanada de la plaza.",
  "autor": "Joseph Carvajal",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "capitolio",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/capitolio/actualidad__20261025-170239-587.jpg",
  "alt": "Vista general y contemporánea de la Plaza de Bolívar bajo un cielo nublado, con el Capitolio al fondo, la bandera de Colombia ondeando y multitud de palomas con transeúntes.",
  "autor": "Joseph Carvajal",
  "fuente": "",
  "anio": ""
 },
 {
  "lugar": "capitolio",
  "epoca": "Actualidad",
  "src": "assets/img/lugares/capitolio/actualidad__20261025-170332-92.jpg",
  "alt": "Toma en ángulo contrapicado de la fachada de piedra del Capitolio Nacional, resaltando sus majestuosas columnas neoclásicas, la bandera tricolor en la cima y transeúntes caminando en la base.",
  "autor": "Joseph Carvajal",
  "fuente": "",
  "anio": ""
 }
];
