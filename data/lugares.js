// Datos editables sin tocar código. PENDIENTE = falta investigar.
const LUGARES = [
 {
  "id": "plaza-de-bolivar",
  "name": "Plaza de Bolivar",
  "emoji": "🏛️",
  "responsable": "Ander",
  "lado": "Centro de la manzana abierta",
  "latitude": 4.59806,
  "longitude": -74.076,
  "approx": false,
  "capas": {
   "Histórica": "Trazada como Plaza Mayor hacia 1539, fue mercado, escenario ceremonial y centro del gobierno colonial. En 1846 recibió la estatua de Simón Bolívar y consolidó su nombre actual. Su diseño contemporáneo, ejecutado en 1960, conserva la vocación cívica del lugar fundacional de Bogotá.",
   "Institucional": "En sus cuatro costados dialogan poderes y autoridades: Alcaldía Mayor, Congreso, altas cortes y Arquidiócesis. Esta concentración convierte la plaza en escenario de decisiones públicas, ceremonias nacionales, manifestaciones ciudadanas y encuentros religiosos, culturales y pedagógicos.",
   "Poblacional": "La habitan y recorren residentes, trabajadores, vendedores, estudiantes, turistas, artistas, comunidades religiosas y manifestantes. Esa diversidad hace visible una Bogotá plural, donde conviven usos cotidianos, celebraciones, reclamos sociales y memorias de distintas regiones del país.",
   "Territorial": "Ocupa una manzana abierta del centro histórico de La Candelaria. Articula las carreras Séptima y Octava con las calles Décima y Once, y conecta los principales edificios civiles y religiosos mediante recorridos peatonales, visuales y simbólicos.",
   "Bienestar": "Ofrece encuentro, descanso, cultura y expresión pública, pero exige accesibilidad, limpieza, seguridad y manejo responsable de multitudes. Su cuidado mejora la experiencia de quienes trabajan, visitan o ejercen allí sus derechos ciudadanos.",
   "Civilidad": "Es una escuela abierta de democracia. Protestar pacíficamente, respetar la diversidad, proteger monumentos y cumplir los protocolos de uso permite conciliar libertad de expresión, convivencia y conservación patrimonial.",
   "Inusual": "La estatua de Simón Bolívar, obra del italiano Pietro Tenerani e instalada en 1846, fue el primer monumento público de Bogotá. Su escala contrasta con la amplitud de la plaza y actúa como punto de orientación, ceremonia y memoria."
  },
  "linea": [
   {
    "anio": "1539",
    "texto": "Trazada como Plaza Mayor hacia 1539, fue mercado, escenario ceremonial y centro del gobierno colonial.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1821",
    "texto": "Pasa a llamarse Plaza de la Constitución, nombre que lleva hasta 1846.",
    "fuente": "Wikipedia — Plaza de Bolívar"
   },
   {
    "anio": "1846",
    "texto": "En 1846 recibió la estatua de Simón Bolívar y consolidó su nombre actual.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1861",
    "texto": "Se prohíbe comprar y vender alimentos en la plaza: el mercado tradicional sale de allí.",
    "fuente": "Alcaldía de Bogotá — Lo que tú no sabías de la Plaza de Bolívar"
   },
   {
    "anio": "1960",
    "texto": "Su diseño contemporáneo, ejecutado en 1960, conserva la vocación cívica del lugar fundacional de Bogotá.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1995",
    "texto": "Es declarada Monumento Nacional (19 de octubre).",
    "fuente": "Colombia Travel — Plaza de Bolívar"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "Fue Plaza Mayor hasta 1821, Plaza de la Constitución hasta 1846 y Plaza de Bolívar desde que se inauguró la estatua del Libertador.",
    "f": "Wikipedia — Plaza de Bolívar"
   },
   {
    "t": "En la remodelación de 1960, de Fernando Martínez, se eliminaron las fuentes y la plaza tomó un aire más renacentista.",
    "f": "Alcaldía de Bogotá — Lo que tú no sabías de la Plaza de Bolívar"
   },
   {
    "t": "Poner la estatua en 1846 fue el comienzo de un programa deliberado para convertir la ciudad en un texto de historia patria.",
    "f": "Revista Ecuatoriana de Historia n.º 51 (2020), vía Dialnet"
   }
  ],
  "fuentes": [
   {
    "n": "Alcaldía de Bogotá — Lo que tú no sabías de la Plaza de Bolívar",
    "u": "https://bogota.gov.co/mi-ciudad/cultura-recreacion-y-deporte/lo-que-tu-no-sabias-de-la-plaza-de-bolivar-de-bogota"
   },
   {
    "n": "Revista Ecuatoriana de Historia n.º 51 (2020), vía Dialnet",
    "u": "https://dialnet.unirioja.es/descarga/articulo/8651987.pdf"
   },
   {
    "n": "Colombia Travel — Plaza de Bolívar",
    "u": "https://colombia.travel/fr/bogota/place-de-bolivar"
   },
   {
    "n": "Wikipedia — Plaza de Bolívar",
    "u": "https://en.wikipedia.org/wiki/Plaza_de_Bol%C3%ADvar"
   }
  ]
 },
 {
  "id": "palacio-de-justicia",
  "name": "Palacio de Justicia",
  "emoji": "⚖️",
  "responsable": "Samuel Contreras",
  "lado": "Costado norte de la Plaza",
  "latitude": 4.59895,
  "longitude": -74.07568,
  "approx": true,
  "capas": {
   "Histórica": "La sede judicial de la Plaza fue destruida durante la toma y retoma del 6 y 7 de noviembre de 1985, tragedia que dejó víctimas, desaparecidos y profundas heridas institucionales. El edificio actual reconstruyó el lugar como recinto de justicia y memoria nacional.",
   "Institucional": "Alberga las altas corporaciones de la Rama Judicial. Desde allí se interpretan la Constitución y las leyes, se resuelven controversias y se protege el Estado de derecho mediante decisiones que orientan la vida pública del país.",
   "Poblacional": "Confluyen magistrados, servidores judiciales, abogados, usuarios, periodistas, visitantes y familiares de víctimas. También llegan estudiantes e investigadores que buscan comprender la justicia colombiana y las memorias del acontecimiento de 1985.",
   "Territorial": "Ocupa el costado norte de la Plaza de Bolívar y una manzana completa entre las carreras Séptima y Octava. Su fachada mira al Capitolio, creando un diálogo urbano entre las ramas judicial y legislativa.",
   "Bienestar": "Su función esencial es garantizar acceso digno a la justicia. La seguridad, la orientación al usuario, la memoria de las víctimas y los espacios de reflexión fortalecen la confianza pública y contribuyen a la reparación simbólica.",
   "Civilidad": "Representa la primacía de la ley, el debido proceso y los derechos humanos. Recordar 1985 exige verdad, justicia, respeto por las víctimas y compromiso ciudadano con el diálogo y la no repetición.",
   "Inusual": "En la fachada se lee la frase atribuida a Francisco de Paula Santander: «Las armas os han dado la independencia; las leyes os darán la libertad». Después de 1985, la inscripción adquirió una fuerza histórica y ética aún mayor."
  },
  "linea": [
   {
    "anio": "1985",
    "texto": "La sede judicial de la Plaza fue destruida durante la toma y retoma del 6 y 7 de noviembre de 1985, tragedia que dejó víctimas, desaparecidos y profundas heridas institucionales.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1998",
    "texto": "Tras 13 años de obra, el nuevo Palacio empieza a ser ocupado; costó cerca de 63.000 millones de pesos.",
    "fuente": "El Universal — Cómo fue la reconstrucción del Palacio de Justicia"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "El nuevo Palacio lo diseñó un equipo encabezado por Roberto Londoño. Querían un gran espacio abierto que dialogara con la Plaza; por eso tiene un patio central que cruza toda la cuadra.",
    "f": "El Universal — Cómo fue la reconstrucción del Palacio de Justicia"
   },
   {
    "t": "Del edificio anterior, de los años 60, solo se conservaron dos piedras: la de la frase de Santander y otra con una leyenda sobre rechazar la maldad y honrar la virtud.",
    "f": "Vanguardia — La toma del Palacio de Justicia"
   },
   {
    "t": "Cada aniversario, familiares y organizaciones de derechos humanos se reúnen en la Plaza. Las cifras de víctimas varían según la fuente, y el Estado ha sido condenado por la Corte Interamericana por hechos de la retoma.",
    "f": "Canal Trece — 40 años de la toma del Palacio de Justicia"
   }
  ],
  "fuentes": [
   {
    "n": "El Universal — Cómo fue la reconstrucción del Palacio de Justicia",
    "u": "https://www.eluniversal.com.co/colombia/como-fue-la-reconstruccion-del-palacio-de-justicia-209981-FSEU312698"
   },
   {
    "n": "Canal Trece — 40 años de la toma del Palacio de Justicia",
    "u": "https://canaltrece.com.co/noticias/40-anos-de-la-toma-del-palacio-de-justicia-las-heridas-que-colombia-aun-no-cierra/"
   },
   {
    "n": "Vanguardia — La toma del Palacio de Justicia",
    "u": "https://www.vanguardia.com/colombia/449865-asi-fue-la-tragica-toma-del-palacio-de-justicia-hace-33-anos"
   }
  ]
 },
 {
  "id": "palacio-de-lievano",
  "name": "Palacio de Lievano",
  "emoji": "🏰",
  "responsable": "Laura Sofia",
  "lado": "Costado occidental de la Plaza",
  "latitude": 4.59851,
  "longitude": -74.07676,
  "approx": false,
  "capas": {
   "Histórica": "El predio reunió dependencias coloniales y, en el siglo XIX, las Galerías Arrubla, edificio administrativo y comercial destruido por un incendio en 1900. La reconstrucción comenzó en 1902 con diseño de Gastón Lelarge y dio origen al Palacio Liévano.",
   "Institucional": "Es la sede principal de la Alcaldía Mayor de Bogotá. Allí funcionan el despacho del alcalde y dependencias distritales que coordinan gobierno, gestión administrativa y atención de asuntos estratégicos para la capital.",
   "Poblacional": "Lo ocupan servidores públicos y equipos de gobierno; lo visitan ciudadanos, delegaciones, periodistas, líderes sociales y turistas. En su entorno también trabajan comerciantes, guías, personal de seguridad y cuidadores del espacio público.",
   "Territorial": "Se extiende por el costado occidental de la Plaza de Bolívar. Su larga fachada porticada, de inspiración renacentista francesa y cubierta con mansardas, ordena la relación entre la plaza, la carrera Octava y las calles Décima y Once.",
   "Bienestar": "El edificio concentra servicios de gobierno y aporta sombra y continuidad peatonal mediante su pórtico. Su adecuada conservación, accesibilidad y seguridad favorecen la atención ciudadana y el disfrute del patrimonio.",
   "Civilidad": "Simboliza la relación entre ciudadanía y gobierno distrital. La transparencia, la participación, el trato digno y el cuidado del inmueble convierten la gestión pública en una práctica cotidiana de civilidad.",
   "Inusual": "Antes del palacio existieron allí cárceles, oficinas y las Galerías Arrubla, consideradas un temprano centro comercial bogotano. El incendio de 1900 también destruyó una parte significativa del archivo histórico de la ciudad."
  },
  "linea": [
   {
    "anio": "1900",
    "texto": "El predio reunió dependencias coloniales y, en el siglo XIX, las Galerías Arrubla, edificio administrativo y comercial destruido por un incendio en 1900.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1902",
    "texto": "La reconstrucción comenzó en 1902 con diseño de Gastón Lelarge y dio origen al Palacio Liévano.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1905",
    "texto": "Hacia esta fecha se culmina el Palacio Municipal adosado sobre la calle 10, hoy comunicado por dentro con el Liévano.",
    "fuente": "Alcaldía de Bogotá — Restauración de la fachada Liévano"
   },
   {
    "anio": "1974",
    "texto": "El municipio compra el edificio y lo adecúa para la Alcaldía Mayor.",
    "fuente": "Las2orillas — El alemán que quemó la antigua Alcaldía"
   },
   {
    "anio": "1984",
    "texto": "Es declarado Monumento Nacional (26 de septiembre).",
    "fuente": "Semana — La historia tras el Palacio Liévano"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "Antes del Palacio hubo cabildo, oficinas, una cárcel de mujeres y las Galerías Arrubla.",
    "f": "Universidad del Rosario — Construyendo un Palacio sin reyes"
   },
   {
    "t": "El incendio del 20 de mayo de 1900 empezó en el local de un comerciante alemán de sombreros, Emilio Streicher, y quemó archivos de la ciudad; se cree que entre ellos estaba el acta original de 1810.",
    "f": "Universidad del Rosario — Construyendo un Palacio sin reyes"
   },
   {
    "t": "Lleva el nombre de Indalecio Liévano Reyes, ingeniero y astrónomo, dueño mayoritario de los locales de las Galerías. Él encargó el diseño al arquitecto francés Gastón Lelarge.",
    "f": "Semana — La historia tras el Palacio Liévano"
   },
   {
    "t": "El Acuerdo 18 de 1902 ordenó el nuevo Palacio y la primera piedra se puso el 20 de julio de ese año.",
    "f": "El Espectador — Las entrañas del Palacio Liévano"
   }
  ],
  "fuentes": [
   {
    "n": "Alcaldía de Bogotá — Restauración de la fachada Liévano",
    "u": "https://bogota.gov.co/asi-vamos/obras/restauracion-de-la-facha-lievano-y-el-palacio-municipal"
   },
   {
    "n": "El Espectador — Las entrañas del Palacio Liévano",
    "u": "https://www.elespectador.com/bogota/las-entranas-del-palacio-lievano-article-30580/"
   },
   {
    "n": "Las2orillas — El alemán que quemó la antigua Alcaldía",
    "u": "https://www.las2orillas.co/?p=1005022"
   },
   {
    "n": "Universidad del Rosario — Construyendo un Palacio sin reyes",
    "u": "https://urosario.edu.co/revista-nova-et-vetera/cultura/construyendo-un-palacio-sin-reyes"
   },
   {
    "n": "Semana — La historia tras el Palacio Liévano",
    "u": "https://www.semana.com/nacion/articulo/la-historia-tras-palacio-lievano/344841-3/"
   }
  ]
 },
 {
  "id": "congreso",
  "name": "Congreso",
  "emoji": "🗳️",
  "responsable": "Emily",
  "lado": "Costado sur (Capitolio Nacional)",
  "latitude": 4.59715,
  "longitude": -74.07647,
  "approx": false,
  "capas": {
   "Histórica": "Surgió de las experiencias representativas de la Independencia y atravesó distintas constituciones durante los siglos XIX y XX. La Constitución de 1991 reafirmó su organización bicameral, integrada por Senado y Cámara de Representantes.",
   "Institucional": "Ejerce funciones legislativas, constituyentes y de control político. Debate y aprueba leyes, reforma la Constitución, examina al Gobierno y participa en elecciones y decisiones de alta responsabilidad estatal conforme al orden jurídico.",
   "Poblacional": "Participan senadores, representantes, equipos técnicos, funcionarios, periodistas y organismos de control. Ciudadanos, organizaciones sociales, expertos y estudiantes intervienen mediante audiencias, visitas, iniciativas y seguimiento a los debates.",
   "Territorial": "Sus principales recintos funcionan en el Capitolio Nacional, mientras varias dependencias ocupan edificios anexos del centro. Esta red institucional conecta la Plaza de Bolívar con calles donde se desarrolla diariamente la actividad legislativa.",
   "Bienestar": "Las leyes inciden en educación, salud, economía, ambiente y derechos. Audiencias comprensibles, información abierta y condiciones de acceso permiten que la ciudadanía conozca y evalúe decisiones que afectan su vida cotidiana.",
   "Civilidad": "La deliberación democrática exige escuchar, argumentar, respetar turnos, votar con responsabilidad y rendir cuentas. El disenso es legítimo cuando se tramita sin violencia y con reconocimiento de las minorías.",
   "Inusual": "El Salón Elíptico reúne al Congreso en pleno para actos solemnes, entre ellos la instalación de cada legislatura el 20 de julio. Su forma ovalada y su ubicación central refuerzan el carácter ceremonial de la representación nacional."
  },
  "linea": [
   {
    "anio": "1949",
    "texto": "El Congreso es clausurado por el presidente Mariano Ospina Pérez.",
    "fuente": "El Tiempo — Datos del Capitolio y el Congreso"
   },
   {
    "anio": "1991",
    "texto": "La Constitución de 1991 reafirmó su organización bicameral, integrada por Senado y Cámara de Representantes.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "2023",
    "texto": "Un sismo desprende parte de la mampostería del techo del Salón Elíptico.",
    "fuente": "Cambio — Salón Elíptico del Congreso"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "El Capitolio no se pensó solo para el Congreso, sino para reunir las tres ramas del poder.",
    "f": "El Tiempo — Datos del Capitolio y el Congreso"
   },
   {
    "t": "Por su construcción tan larga se le llamó «el enfermo de piedra». Lo inauguró en 1926 el presidente Miguel Abadía Méndez.",
    "f": "Radio Nacional — Trece curiosidades del Capitolio"
   }
  ],
  "fuentes": [
   {
    "n": "Cambio — Salón Elíptico del Congreso",
    "u": "https://cambiocolombia.com/en-cambio/articulo/2023/8/quien-se-sienta-en-la-silla-donde-se-cayo-la-mamposteria-del-el-salon-eliptico-del"
   },
   {
    "n": "El Tiempo — Datos del Capitolio y el Congreso",
    "u": "https://www.eltiempo.com/politica/congreso/congreso-de-la-republica-secretos-y-datos-del-capitolio-740645"
   },
   {
    "n": "Radio Nacional — Trece curiosidades del Capitolio",
    "u": "https://radionacional.co/cultura/historia-colombiana/trece-curiosidades-que-debe-saber-sobre-el-capitolio-nacional"
   }
  ]
 },
 {
  "id": "capitolio",
  "name": "Capitolio",
  "emoji": "🏛️",
  "responsable": "Joseph",
  "lado": "Costado sur de la Plaza",
  "latitude": 4.59743,
  "longitude": -74.07637,
  "approx": false,
  "capas": {
   "Histórica": "Autorizado en 1846 e iniciado en 1848 con planos de Thomas Reed, tardó cerca de ocho décadas en concluirse. Guerras civiles, cambios políticos y varios arquitectos marcaron una obra terminada en 1926, convertida en referente de la arquitectura republicana.",
   "Institucional": "Es la sede del Congreso de la República y contiene los salones plenarios del Senado y la Cámara. Como monumento nacional, combina funciones legislativas, protocolarias, administrativas y patrimoniales.",
   "Poblacional": "Lo utilizan congresistas, servidores, asesores y personal de apoyo. También recibe delegaciones, periodistas, investigadores, estudiantes y visitantes que participan en recorridos o conocen el funcionamiento del poder legislativo.",
   "Territorial": "Ocupa el costado sur de la Plaza de Bolívar, entre las carreras Séptima y Octava. Se levantó en terrenos vinculados al antiguo poder virreinal y forma un frente monumental que conecta la plaza con el sector presidencial.",
   "Bienestar": "Sus recorridos, obras de arte, patios y salones apoyan la educación cívica y el acceso al patrimonio. La conservación preventiva y la accesibilidad deben armonizarse con la seguridad propia de una sede legislativa.",
   "Civilidad": "Ingresar implica respetar controles, sesiones y bienes culturales. El edificio enseña que la representación política requiere debate informado, reglas compartidas, responsabilidad pública y apertura a la observación ciudadana.",
   "Inusual": "Por la extraordinaria duración de su construcción, los bogotanos lo llamaron «el enfermo de piedra». El apodo convirtió una dificultad histórica en parte de la memoria popular del edificio y de la ciudad."
  },
  "linea": [
   {
    "anio": "1846",
    "texto": "Autorizado en 1846 e iniciado en 1848 con planos de Thomas Reed, tardó cerca de ocho décadas en concluirse.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1851",
    "texto": "Thomas Reed dirige la obra hasta que la guerra civil la suspende.",
    "fuente": "Las2orillas — Capitolio Nacional"
   },
   {
    "anio": "1924–1926",
    "texto": "Alberto Manrique Martín termina el Salón Elíptico y las cubiertas.",
    "fuente": "Cambio — Salón Elíptico del Congreso"
   },
   {
    "anio": "1926",
    "texto": "Guerras civiles, cambios políticos y varios arquitectos marcaron una obra terminada en 1926, convertida en referente de la arquitectura republicana.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1975",
    "texto": "Es declarado Monumento Nacional (11 de agosto, Decreto 1584).",
    "fuente": "Radio Nacional — Trece curiosidades del Capitolio"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "Thomas Reed, arquitecto danés, fue contratado el 27 de agosto de 1846 mientras estaba en Caracas. Él lo bautizó «Capitolio» por la sede del Senado en la Roma antigua.",
    "f": "Las2orillas — Capitolio Nacional"
   },
   {
    "t": "Tras Reed siguieron otros constructores, como Francisco Olaya (desde 1870) y Pietro Cantini (desde 1881), que modificó parte de la fachada.",
    "f": "Structurae — Capitolio Nacional"
   },
   {
    "t": "Se construyó con piedra rubia de canteras cercanas a Bogotá. Su terreno, de unos 20.000 m², tiene carácter de zona arqueológica.",
    "f": "Radio Nacional — Trece curiosidades del Capitolio"
   },
   {
    "t": "En 1938 Ignacio Gómez Jaramillo pintó dos murales para el Capitolio.",
    "f": "Wikipedia — National Capitol of Colombia"
   }
  ],
  "fuentes": [
   {
    "n": "Cambio — Salón Elíptico del Congreso",
    "u": "https://cambiocolombia.com/en-cambio/articulo/2023/8/quien-se-sienta-en-la-silla-donde-se-cayo-la-mamposteria-del-el-salon-eliptico-del"
   },
   {
    "n": "Las2orillas — Capitolio Nacional",
    "u": "https://www.las2orillas.co/?p=854704"
   },
   {
    "n": "Radio Nacional — Trece curiosidades del Capitolio",
    "u": "https://radionacional.co/cultura/historia-colombiana/trece-curiosidades-que-debe-saber-sobre-el-capitolio-nacional"
   },
   {
    "n": "Structurae — Capitolio Nacional",
    "u": "https://structurae.net/fr/ouvrages/capitolio-nacional"
   },
   {
    "n": "Wikipedia — National Capitol of Colombia",
    "u": "https://en.wikipedia.org/wiki/National_Capitol_of_Colombia"
   }
  ]
 },
 {
  "id": "catedral-capilla",
  "name": "Catedral- capilla",
  "emoji": "⛪",
  "responsable": "Dana",
  "lado": "Costado oriental de la Plaza",
  "latitude": 4.59783,
  "longitude": -74.07511,
  "approx": false,
  "capas": {
   "Histórica": "La Catedral ocupa el lugar de templos sucesivos desde el siglo XVI; el edificio actual, diseñado por fray Domingo de Petrés, se construyó entre 1807 y 1823. La Capilla del Sagrario, integrante del conjunto, fue levantada entre 1656 y 1700.",
   "Institucional": "La Catedral es sede del Arzobispo de Bogotá y centro de la vida litúrgica arquidiocesana. La Capilla del Sagrario conserva una función religiosa propia dentro del conjunto, protegido por su valor histórico, artístico y arquitectónico.",
   "Poblacional": "Fieles, clero, músicos, trabajadores, investigadores, estudiantes y turistas dan vida al conjunto. Sus usos combinan oración, celebraciones, visitas patrimoniales, formación y contemplación artística.",
   "Territorial": "El conjunto define el costado oriental de la Plaza de Bolívar junto con la Casa Capitular y el Palacio Arzobispal. Sus atrios articulan la plaza, la carrera Séptima y los recorridos religiosos y turísticos del centro.",
   "Bienestar": "Ofrece recogimiento, encuentro espiritual y acceso a bienes artísticos. La limpieza, el mantenimiento, la accesibilidad y el respeto durante las celebraciones permiten una experiencia digna para creyentes y visitantes.",
   "Civilidad": "Invita a practicar libertad religiosa, respeto por distintas convicciones y cuidado del patrimonio común. El silencio oportuno, la conducta respetuosa y la protección de las obras favorecen la convivencia.",
   "Inusual": "Aunque forma parte del conjunto catedralicio, la Capilla del Sagrario es un edificio independiente conectado con la Catedral. Su planta de cruz latina y su programa artístico dedicado a la Eucaristía suelen pasar inadvertidos desde la plaza."
  },
  "linea": [
   {
    "anio": "1656",
    "texto": "La Capilla del Sagrario, integrante del conjunto, fue levantada entre 1656 y 1700.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1807",
    "texto": "La Catedral ocupa el lugar de templos sucesivos desde el siglo XVI; el edificio actual, diseñado por fray Domingo de Petrés, se construyó entre 1807 y 1823.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1890",
    "texto": "Los restos de Gonzalo Jiménez de Quesada se sacan de la bóveda del presbiterio y se depositan en una nueva urna.",
    "fuente": "El Espectador — Los sepulcros del fundador de Bogotá"
   },
   {
    "anio": "1902",
    "texto": "El papa León XIII le da el título de Primada de Colombia (7 de noviembre).",
    "fuente": "Visit Bogotá — Catedral Primada"
   },
   {
    "anio": "1907",
    "texto": "Recibe el título de Basílica (25 de mayo).",
    "fuente": "Visit Bogotá — Catedral Primada"
   },
   {
    "anio": "1975",
    "texto": "Es declarada Monumento Nacional (11 de agosto).",
    "fuente": "Visit Bogotá — Catedral Primada"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "El templo actual es el cuarto en el mismo sitio. Fray Domingo de Petrés empezó la obra el 11 de febrero de 1807; murió en 1811 y Nicolás León la terminó el 19 de abril de 1823.",
    "f": "Wikipedia — Primatial Cathedral of Bogotá"
   },
   {
    "t": "La Capilla de Santa Isabel de Hungría guarda los restos del fundador, Gonzalo Jiménez de Quesada, que han tenido más de cuatro sepulturas en la ciudad.",
    "f": "El Espectador — Los sepulcros del fundador de Bogotá"
   },
   {
    "t": "Tiene cuatro capillas. La más antigua es la de San José, de 1590, y el Sagrario es un edificio independiente.",
    "f": "Visit Bogotá — Catedral Primada"
   }
  ],
  "fuentes": [
   {
    "n": "El Espectador — Los sepulcros del fundador de Bogotá",
    "u": "https://www.elespectador.com/bogota/expectamus-resurrectionem-mortuorum-los-sepulcros-del-fundador-de-bogota/"
   },
   {
    "n": "Visit Bogotá — Catedral Primada",
    "u": "https://visitbogota.co/en/primatial-cathedral-colombia"
   },
   {
    "n": "Wikipedia — Primatial Cathedral of Bogotá",
    "u": "https://en.wikipedia.org/wiki/Primatial_Cathedral_of_Bogot%C3%A1"
   }
  ]
 },
 {
  "id": "las-calles",
  "name": "Las calles",
  "emoji": "🛣️",
  "responsable": "Mathias Correa",
  "lado": "Carreras Séptima y Octava, calles Décima y Once",
  "latitude": 4.59874,
  "longitude": -74.07632,
  "approx": true,
  "capas": {
   "Histórica": "La carrera Séptima fue la Calle Real y siguió un antiguo camino indígena. La calle Décima, llamada Calle de la Fatiga, condujo parte del acueducto de Aguanueva hacia la Plaza Mayor. Sus nombres conservan memoria de recorridos, oficios y experiencias urbanas.",
   "Institucional": "Las recorren residentes, estudiantes, trabajadores, comerciantes, vendedores, turistas, artistas, servidores públicos y habitantes de calle. Sus ritmos cambian según la hora, el calendario institucional y las actividades de la Plaza.",
   "Poblacional": "Son espacio público administrado mediante políticas de movilidad, patrimonio, aseo, seguridad y aprovechamiento económico. Varias entidades distritales coordinan su mantenimiento y regulación para compatibilizar circulación, comercio y conservación.",
   "Territorial": "La carrera Séptima prioriza el tránsito peatonal; la carrera Octava mantiene circulación vehicular y la calle Décima funciona como eje patrimonial. Juntas enlazan plazas, museos, templos, colegios, comercios y sedes públicas.",
   "Bienestar": "Permiten acceder a estudio, trabajo, cultura, culto, comercio y servicios. El bienestar depende de andenes transitables, iluminación, manejo de residuos, control del ruido, accesibilidad universal y convivencia entre múltiples usos.",
   "Civilidad": "Caminar con atención, ceder el paso, no arrojar residuos y respetar fachadas, vendedores y poblaciones diversas son prácticas básicas. La calle es un bien común, no solo una vía de paso.",
   "Inusual": "Los antiguos nombres describían experiencias urbanas. «Calle de la Fatiga» aludía al esfuerzo de subir su pendiente, mientras «Calle Real» señalaba su importancia política y comercial. Las placas actuales permiten leer esa ciudad escondida."
  },
  "linea": [
   {
    "anio": "Colonia",
    "texto": "La Calle Real (hoy carrera Séptima) une las dos plazas fundacionales: la Plaza de las Yerbas (hoy Parque Santander) y la Plaza Mayor.",
    "fuente": "Canal Trece — Calle Real"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "Según la Alcaldía, la Calle de la Fatiga está en la calle 10 entre carreras 3.ª y 4.ª, y se llamó así porque la pendiente deja sin aire a quien sube.",
    "f": "Alcaldía de Bogotá — La bella historia de las calles de La Candelaria"
   },
   {
    "t": "Otros nombres contaban oficios y lugares: Calle de los Herreros (primeras herrerías), de la Cajita de Agua (fuente comunal) y del Cubo (molino).",
    "f": "Alcaldía de Bogotá — La bella historia de las calles de La Candelaria"
   },
   {
    "t": "Se cree que la Séptima nació de un camino muisca para traer sal desde Zipaquirá.",
    "f": "IDU — Carrera 7"
   }
  ],
  "fuentes": [
   {
    "n": "Alcaldía de Bogotá — La bella historia de las calles de La Candelaria",
    "u": "https://bogota.gov.co/mi-ciudad/cultura-deporte-y-recreacion/la-bella-historia-de-las-calles-de-la-candelaria"
   },
   {
    "n": "Canal Trece — Calle Real",
    "u": "https://canaltrece.com.co/noticias/calle-real-colombia-septima-bogota-tunja-neiva-ibague-colombia/"
   },
   {
    "n": "IDU — Carrera 7",
    "u": "https://www.idu.gov.co/Archivos_Portal/Doc_Intra/Carrera_7.pdf"
   }
  ]
 },
 {
  "id": "casa-arzobispal",
  "name": "Casa Arzobispal",
  "emoji": "✝️",
  "responsable": "Daniela",
  "lado": "Junto a la Catedral, costado oriental",
  "latitude": 4.59731,
  "longitude": -74.07527,
  "approx": true,
  "capas": {
   "Histórica": "El antiguo palacio fue restaurado en 1870 y sufrió graves pérdidas durante el incendio del 9 de abril de 1948. La sede actual se levantó sobre la antigua Casa de la Aduana: inició obras en 1952, terminó en 1957 y fue bendecida en 1958.",
   "Institucional": "Es sede de la Curia Primada y apoya el gobierno pastoral y administrativo de la Arquidiócesis de Bogotá. Desde allí se coordinan asuntos eclesiales, sociales, educativos y de servicio a las comunidades.",
   "Poblacional": "Lo utilizan el arzobispo, miembros del clero, personal administrativo, agentes pastorales y visitantes. También se relaciona con parroquias, organizaciones sociales, instituciones educativas y comunidades que acuden por orientación o gestión.",
   "Territorial": "Se ubica junto a la Catedral Primada, en el costado oriental de la Plaza de Bolívar. Su presencia completa la manzana eclesiástica y conecta la carrera Séptima con espacios religiosos, administrativos y patrimoniales.",
   "Bienestar": "Su actividad contribuye al acompañamiento comunitario y a la atención pastoral. Un entorno accesible, seguro y bien conservado facilita el servicio a visitantes y protege un inmueble significativo para la memoria bogotana.",
   "Civilidad": "Expresa la presencia histórica de la Iglesia en la ciudad. Su relación con la vida pública debe basarse en libertad de conciencia, servicio, diálogo interreligioso, respeto a la diversidad y protección del patrimonio.",
   "Inusual": "La actual sede nació de una donación realizada después del incendio de 1948. La antigua Casa de la Aduana sirvió como base para reconstruir la presencia arzobispal junto a la plaza sin reproducir exactamente el edificio perdido."
  },
  "linea": [
   {
    "anio": "1870",
    "texto": "El antiguo palacio fue restaurado en 1870 y sufrió graves pérdidas durante el incendio del 9 de abril de 1948.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1952",
    "texto": "La sede actual se levantó sobre la antigua Casa de la Aduana: inició obras en 1952, terminó en 1957 y fue bendecida en 1958.",
    "fuente": "Matriz del equipo, capa Histórica"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "Tras el incendio de 1948, documentos del Arzobispado rescatados por monseñor José Restrepo Posada se guardaron en el Colegio San Bartolomé, donde aún se ven las huellas del fuego.",
    "f": "Presentación del equipo — Colegio Mayor de San Bartolomé"
   }
  ],
  "fuentes": []
 },
 {
  "id": "la-alcaldia",
  "name": "La Alcaldía",
  "emoji": "🏢",
  "responsable": "Luciana",
  "lado": "Palacio Liévano, costado occidental",
  "latitude": 4.5982,
  "longitude": -74.07687,
  "approx": false,
  "capas": {
   "Histórica": "El gobierno urbano evolucionó desde el cabildo colonial hasta la administración distrital contemporánea. Su sede principal ocupa el Palacio Liévano, construido tras el incendio de 1900 y adaptado durante el siglo XX para concentrar funciones de gobierno de la capital.",
   "Institucional": "Dirige la rama ejecutiva distrital. El alcalde mayor y su gabinete orientan políticas, coordinan secretarías y entidades, ejecutan el presupuesto y responden por la gestión pública de Bogotá dentro del marco constitucional y legal.",
   "Poblacional": "Participan servidores, equipos técnicos, autoridades locales, organismos de control y representantes comunitarios. La ciudadanía se relaciona con la Alcaldía mediante trámites, peticiones, consultas, espacios participativos y seguimiento a planes y proyectos.",
   "Territorial": "Aunque su sede está en la Plaza de Bolívar, sus decisiones abarcan las veinte localidades y una extensa red de equipamientos. Esa doble escala conecta el centro político con barrios urbanos y territorios rurales.",
   "Bienestar": "Coordina políticas de salud, educación, movilidad, ambiente, seguridad, cultura y espacio público. La calidad de su gestión incide directamente en oportunidades, tiempos de desplazamiento, cuidado y acceso a servicios.",
   "Civilidad": "La administración democrática exige transparencia, participación, rendición de cuentas y trato digno. Presentar peticiones, ejercer control social y cuidar los bienes públicos acerca el gobierno de la ciudad a sus habitantes.",
   "Inusual": "La Alcaldía funciona en un lugar que también fue cárcel, sede municipal y galería comercial. Esa superposición revela cómo un mismo predio puede pasar del control colonial al comercio y, finalmente, al gobierno democrático de la ciudad."
  },
  "linea": [
   {
    "anio": "1900",
    "texto": "Su sede principal ocupa el Palacio Liévano, construido tras el incendio de 1900 y adaptado durante el siglo XX para concentrar funciones de gobierno de la capital.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1974",
    "texto": "El Palacio Liévano pasa a ser la sede oficial de la Alcaldía Mayor.",
    "fuente": "Las2orillas — El alemán que quemó la antigua Alcaldía"
   },
   {
    "anio": "2018",
    "texto": "En octubre empieza la restauración de la fachada del Liévano y del Palacio Municipal, con el IDPC.",
    "fuente": "Alcaldía de Bogotá — Restauración de la fachada Liévano"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "El Palacio Liévano colinda con el moderno Edificio Bicentenario, donde están las oficinas administrativas de la Alcaldía.",
    "f": "Semana — La historia tras el Palacio Liévano"
   },
   {
    "t": "El salón más elegante del Palacio lleva el nombre del fundador: Gonzalo Jiménez de Quesada.",
    "f": "El Espectador — Las entrañas del Palacio Liévano"
   }
  ],
  "fuentes": [
   {
    "n": "Alcaldía de Bogotá — Restauración de la fachada Liévano",
    "u": "https://bogota.gov.co/asi-vamos/obras/restauracion-de-la-facha-lievano-y-el-palacio-municipal"
   },
   {
    "n": "El Espectador — Las entrañas del Palacio Liévano",
    "u": "https://www.elespectador.com/bogota/las-entranas-del-palacio-lievano-article-30580/"
   },
   {
    "n": "Las2orillas — El alemán que quemó la antigua Alcaldía",
    "u": "https://www.las2orillas.co/?p=1005022"
   },
   {
    "n": "Semana — La historia tras el Palacio Liévano",
    "u": "https://www.semana.com/nacion/articulo/la-historia-tras-palacio-lievano/344841-3/"
   }
  ]
 },
 {
  "id": "secretaria-de-cultura",
  "name": "Secretaria de Cultura",
  "emoji": "🎨",
  "responsable": "Viviana",
  "lado": "Carrera 8 con calle 10",
  "latitude": 4.59766,
  "longitude": -74.07696,
  "approx": true,
  "capas": {
   "Histórica": "Su sede principal ocupa la Casa de los Comuneros, construcción colonial vinculada a la memoria de la insurrección comunera. Restaurada desde 1979, funcionó como casa museo y luego se integró con edificaciones vecinas para albergar la institucionalidad cultural distrital.",
   "Institucional": "Formula y coordina políticas de cultura, patrimonio, recreación y deporte. Promueve derechos culturales, participación, creación, formación, actividad física y articulación de las entidades que conforman el sector distrital.",
   "Poblacional": "Se relaciona con artistas, deportistas, gestores, organizaciones, comunidades, investigadores, funcionarios y visitantes. Su acción busca reconocer edades, territorios, identidades y prácticas diversas presentes en Bogotá.",
   "Territorial": "La Casa de los Comuneros está en la carrera Octava con calle Décima, junto a la Plaza de Bolívar. Su ubicación enlaza el circuito patrimonial de la calle Décima con sedes de gobierno, museos y espacios culturales.",
   "Bienestar": "Amplía el acceso a artes, recreación, deporte y patrimonio, componentes esenciales de la calidad de vida. La atención cercana y la conservación de su sede fortalecen la apropiación ciudadana del centro.",
   "Civilidad": "Reconoce la cultura como derecho y espacio de participación. Valorar la diversidad, escuchar a las comunidades y cuidar los bienes comunes permite construir una ciudad más incluyente, creativa y corresponsable.",
   "Inusual": "Durante la restauración aparecieron pinturas murales coloniales y antiguos anuncios comerciales pintados al temple, entre ellos los de una sastrería. Estas huellas convierten los muros en documentos de actividades cotidianas casi olvidadas."
  },
  "linea": [
   {
    "anio": "1979",
    "texto": "Restaurada desde 1979, funcionó como casa museo y luego se integró con edificaciones vecinas para albergar la institucionalidad cultural distrital.",
    "fuente": "Matriz del equipo, capa Histórica"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [],
  "fuentes": []
 },
 {
  "id": "colegio-san-bartolome",
  "name": "Colegio San Bartolome",
  "emoji": "🎓",
  "responsable": "Aguilera",
  "lado": "Suroriente de la Plaza (Manzana Jesuítica)",
  "latitude": 4.59691,
  "longitude": -74.0756,
  "approx": false,
  "capas": {
   "Histórica": "Fundado por la Compañía de Jesús en 1604, inició actividades educativas en 1605. Ha atravesado expulsiones, cambios de administración y reformas políticas sin perder su vínculo con la educación. Más de cuatro siglos lo convierten en referente de la historia escolar colombiana.",
   "Institucional": "Es una institución educativa de la Compañía de Jesús e integra redes de educación jesuita. Su sede histórica está protegida por su valor cultural y articula formación académica, espiritual, artística y ciudadana.",
   "Poblacional": "La comunidad reúne estudiantes, docentes, familias, jesuitas, personal administrativo, egresados e investigadores. También recibe visitantes interesados en su arquitectura, archivos y papel dentro de la historia educativa y política del país.",
   "Territorial": "Se ubica al suroriente de la Plaza de Bolívar, en la Manzana Jesuítica. Junto con la iglesia de San Ignacio y el antiguo edificio de Las Aulas forma un conjunto educativo, religioso y cultural excepcional.",
   "Bienestar": "Sus espacios sostienen aprendizaje, convivencia, deporte y acompañamiento. La conservación de aulas, archivos y edificios vecinos permite que el bienestar escolar dialogue con la memoria y la seguridad del centro histórico.",
   "Civilidad": "La educación jesuita propone discernimiento, servicio y responsabilidad social. Cuidar el patrimonio, dialogar con respeto y reconocer la diversidad convierte la vida escolar en ejercicio concreto de ciudadanía.",
   "Inusual": "En una sola manzana permanecen usos educativos, religiosos y museales iniciados en la época colonial. Esa continuidad permite observar cómo el conocimiento cambió de formas y actores sin abandonar por completo su territorio histórico."
  },
  "linea": [
   {
    "anio": "1538/1539",
    "texto": "Fundación de Santafé de Bogotá (de facto / jurídica)",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1597",
    "texto": "Llegada de los jesuitas; adquisición de casas en la futura Manzana Jesuítica",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1604/1605",
    "texto": "Fundación del Colegio Seminario de San Bartolomé",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1610–1691",
    "texto": "Construcción de la iglesia de San Ignacio",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1767",
    "texto": "Expulsión de la Compañía de Jesús",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1772",
    "texto": "Traslado del colegio al antiguo Colegio Máximo: nace el edificio actual",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1850–1887",
    "texto": "Seis cambios de administración entre el Estado y los jesuitas",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1948",
    "texto": "El Bogotazo transforma el centro histórico",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1975 / 2017",
    "texto": "Declaratoria de interés cultural y restauración integral de San Ignacio",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "1998 / 2013",
    "texto": "El colegio se vuelve mixto y luego parcialmente privado",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   },
   {
    "anio": "2018–2025",
    "texto": "Catalogación del Archivo Histórico (209.000 folios)",
    "fuente": "Presentación del equipo «Colegio Mayor de San Bartolomé»"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "Dos direcciones, una historia: de 1605 a 1772 el seminario funcionó en el actual Palacio de San Carlos, y las clases se daban en el Colegio Máximo jesuita, donde hoy está el colegio.",
    "f": "Presentación del equipo — Colegio Mayor de San Bartolomé"
   },
   {
    "t": "En 1772, tras la expulsión de los jesuitas, la institución se muda al antiguo Colegio Máximo: 167 años después de su fundación coincide con el edificio.",
    "f": "Presentación del equipo — Colegio Mayor de San Bartolomé"
   },
   {
    "t": "Las fuentes no coinciden en la fecha de fundación: 1604 (autorización ante la Audiencia), 1 de enero de 1605 (apertura, según la tradición) y 18 de octubre de 1605 (acta constitutiva).",
    "f": "Presentación del equipo — Colegio Mayor de San Bartolomé"
   },
   {
    "t": "Pionero: primer tubo de rayos X del país (1906), fútbol en Colombia (1908), observatorio sismológico (1922) y primer grupo scout (1923). En 1938 su equipo se fusionó con el Municipal y nació Millonarios.",
    "f": "Presentación del equipo — Colegio Mayor de San Bartolomé"
   },
   {
    "t": "El 9 de abril de 1948 hubo francotiradores en sus techos. No hay evidencia de daño directo al edificio.",
    "f": "Presentación del equipo — Colegio Mayor de San Bartolomé"
   },
   {
    "t": "Su archivo tiene unos 209.000 folios catalogados; el documento más antiguo es del 3 de diciembre de 1561 y el primer tomo del catálogo salió en 2025.",
    "f": "Presentación del equipo — Colegio Mayor de San Bartolomé"
   },
   {
    "t": "Hoy: 44.253 m² de campus, cerca de 1.800 estudiantes y colegio mixto desde 1998.",
    "f": "Presentación del equipo — Colegio Mayor de San Bartolomé"
   }
  ],
  "fuentes": []
 },
 {
  "id": "academia-de-historia-colombiana",
  "name": "Academia de Historia Colombiana",
  "emoji": "📜",
  "responsable": "Nohemi",
  "lado": "Calle 10 n.º 8-95",
  "latitude": 4.59785,
  "longitude": -74.07727,
  "approx": true,
  "capas": {
   "Histórica": "Nació en 1902 como Comisión de Historia y Antigüedades Patrias. Después de ocupar más de quince sedes, recibió en 1926 la casa de la calle Décima con carrera Octava. El inmueble fue reconstruido e inaugurado nuevamente en 1961.",
   "Institucional": "Es una corporación cultural autónoma, privada y sin ánimo de lucro. Investiga, analiza y divulga la historia de Colombia y conserva su papel como cuerpo consultivo del Estado en asuntos históricos y patrimoniales.",
   "Poblacional": "Reúne académicos, investigadores, docentes, estudiantes, lectores y visitantes. Mantiene vínculos con universidades, archivos, bibliotecas, academias regionales y centros de historia que amplían la conversación sobre el pasado nacional.",
   "Territorial": "Su sede está en la calle 10 n.º 8-95, cerca de la Plaza de Bolívar y la Casa de los Comuneros. La casa republicana se inserta en un corredor donde conviven patrimonio, comercio, gobierno y educación.",
   "Bienestar": "La biblioteca, las publicaciones, conferencias y actividades académicas facilitan acceso al conocimiento histórico. Comprender procesos del pasado fortalece identidad, pensamiento crítico y capacidad para interpretar conflictos del presente.",
   "Civilidad": "Su labor exige rigor documental, debate argumentado y apertura a nuevas voces. Una memoria plural evita convertir la historia en simple celebración y la transforma en herramienta de ciudadanía responsable.",
   "Inusual": "En 2021 modificó su escudo centenario para incorporar una figura afrodescendiente y revisar la representación indígena. El cambio buscó expresar mejor la diversidad del país sin abandonar su lema: «Veritas ante omnia», la verdad ante todo."
  },
  "linea": [
   {
    "anio": "1902",
    "texto": "Nació en 1902 como Comisión de Historia y Antigüedades Patrias.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1926",
    "texto": "Después de ocupar más de quince sedes, recibió en 1926 la casa de la calle Décima con carrera Octava.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1961",
    "texto": "El inmueble fue reconstruido e inaugurado nuevamente en 1961.",
    "fuente": "Matriz del equipo, capa Histórica"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "Según Visit Bogotá, la colección del Museo de la Independencia la ha formado desde 1960 la Academia Colombiana de Historia.",
    "f": "Visit Bogotá — Museo de la Independencia"
   }
  ],
  "fuentes": [
   {
    "n": "Visit Bogotá — Museo de la Independencia",
    "u": "https://visitbogota.co/en/what-to-do-in-bogota/culture/museum-independence-casa-del-florero"
   }
  ]
 },
 {
  "id": "museo-de-la-independencia",
  "name": "Museo de la Independencia",
  "emoji": "🔔",
  "responsable": "Samuel Duarte",
  "lado": "Carrera 7 n.º 11-28, esquina nororiental",
  "latitude": 4.59834,
  "longitude": -74.0751,
  "approx": false,
  "capas": {
   "Histórica": "La casa fue construida entre finales del siglo XVI y comienzos del XVII. Allí funcionó el comercio de José González Llorente, relacionado con el episodio del 20 de julio de 1810. El museo abrió en 1960 y renovó su propuesta en 2010.",
   "Institucional": "Es un museo del Ministerio de las Culturas, las Artes y los Saberes. Conserva cerca de 2.360 bienes y desarrolla investigaciones y exposiciones sobre Independencia, ciudadanía, autonomía y memoria histórica.",
   "Poblacional": "Recibe estudiantes, familias, investigadores, turistas y comunidades diversas. Sus actividades invitan a comparar relatos, formular preguntas y relacionar experiencias personales con procesos históricos nacionales.",
   "Territorial": "Está en la carrera Séptima n.º 11-28, esquina nororiental de la Plaza. Su balcón conecta visualmente la antigua Calle Real con el centro político, religioso y comercial de la ciudad.",
   "Bienestar": "Ofrece aprendizaje, conversación y disfrute cultural en una casa patrimonial. La mediación educativa, la accesibilidad y el cuidado de las colecciones favorecen una experiencia respetuosa y significativa.",
   "Civilidad": "Promueve reflexión sobre libertad, autonomía y ciudadanía. Visitarlo implica escuchar versiones diversas, cuidar el inmueble, respetar las piezas y reconocer que la Independencia fue un proceso complejo, no un acontecimiento aislado.",
   "Inusual": "Su balcón esquinero y sus rasgos mudéjares recuerdan la arquitectura colonial. Antes de convertirse en símbolo nacional, la casa fue vivienda, punto de observación de la plaza y local comercial: una combinación que suele pasar inadvertida."
  },
  "linea": [
   {
    "anio": "1810",
    "texto": "Allí funcionó el comercio de José González Llorente, relacionado con el episodio del 20 de julio de 1810.",
    "fuente": "Matriz del equipo, capa Histórica"
   },
   {
    "anio": "1882",
    "texto": "El pintor Epifanio Garay dona al Museo Nacional la taza de un florero, que se identificó como el del 20 de julio.",
    "fuente": "Semana — El florero de Llorente"
   },
   {
    "anio": "1960",
    "texto": "El museo abrió en 1960 y renovó su propuesta en 2010.",
    "fuente": "Matriz del equipo, capa Histórica"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "La tienda de González Llorente estaba en la Calle Real, en la esquina con la calle de la Catedral: hoy calle 11 con carrera 7.",
    "f": "Radio Nacional — La casa y el florero del 20 de julio"
   },
   {
    "t": "Abrió el 20 de julio de 1960 con once salas, con piezas del Museo Nacional, la Quinta de Bolívar y el Museo de Arte Colonial.",
    "f": "Radio Nacional — La casa y el florero del 20 de julio"
   },
   {
    "t": "El propio museo invita a preguntarse si el «florero» era realmente un florero y si se rompió ese día.",
    "f": "Museo de la Independencia — cartilla «Ciudadanos del mundo»"
   },
   {
    "t": "La casa es de estilo mudéjar: paredes blancas con puertas, ventanas y balcones verdes.",
    "f": "Visit Bogotá — Museo de la Independencia"
   }
  ],
  "fuentes": [
   {
    "n": "Museo de la Independencia — cartilla «Ciudadanos del mundo»",
    "u": "https://www.museoindependencia.gov.co/que-hacemos/Documents/Ciudadanos%20del%20Mundo.pdf"
   },
   {
    "n": "Radio Nacional — La casa y el florero del 20 de julio",
    "u": "https://radionacional.co/cultura/historia-colombiana/datos-casa-y-el-florero-del-20-de-julio"
   },
   {
    "n": "Semana — El florero de Llorente",
    "u": "https://www.semana.com/el-florero-llorente/79590-3/"
   },
   {
    "n": "Visit Bogotá — Museo de la Independencia",
    "u": "https://visitbogota.co/en/what-to-do-in-bogota/culture/museum-independence-casa-del-florero"
   }
  ]
 },
 {
  "id": "cuadra-comercial",
  "name": "Cuadra Comercial",
  "emoji": "🛍️",
  "responsable": "Bibiana",
  "lado": "Plantas bajas cercanas a la Plaza (ubicación general)",
  "latitude": 4.59905,
  "longitude": -74.0766,
  "approx": true,
  "capas": {
   "Histórica": "El comercio acompaña a la Plaza desde la época colonial, cuando viviendas y tiendas compartían los costados del centro cívico. En el siglo XIX, las Galerías Arrubla reunieron oficinas y locales, anticipando formas modernas de comercio urbano antes de su incendio en 1900.",
   "Institucional": "Su funcionamiento depende de normas distritales sobre uso del suelo, patrimonio, actividad económica, espacio público, salubridad y seguridad. Comerciantes y autoridades deben coordinarse para proteger fachadas y garantizar circulación.",
   "Poblacional": "Conviven propietarios, empleados, proveedores, compradores, vendedores informales, residentes y turistas. También participan personal de aseo, seguridad, logística y transporte, indispensables para el funcionamiento diario de la actividad comercial.",
   "Territorial": "Las plantas bajas y esquinas próximas a la Plaza, la calle Décima y las carreras Séptima y Octava forman corredores de intercambio. Su localización conecta recorridos institucionales, religiosos, educativos y turísticos.",
   "Bienestar": "El comercio genera empleo, abastecimiento y vitalidad urbana. Para aportar al bienestar debe manejar residuos, ruido, carga, ocupación de andenes y accesibilidad sin expulsar la diversidad de usuarios del centro.",
   "Civilidad": "Comprar, vender y transitar requieren trato justo, respeto por el peatón y uso equilibrado del espacio público. La convivencia entre comercio formal e informal mejora cuando existen reglas claras, diálogo y corresponsabilidad.",
   "Inusual": "Avisos antiguos, vitrinas, puertas, pregones, olores y cambios de actividad narran una historia económica que rara vez aparece en los monumentos. Observar esos detalles permite reconocer el comercio como patrimonio cotidiano y memoria viva."
  },
  "linea": [
   {
    "anio": "1900",
    "texto": "En el siglo XIX, las Galerías Arrubla reunieron oficinas y locales, anticipando formas modernas de comercio urbano antes de su incendio en 1900.",
    "fuente": "Matriz del equipo, capa Histórica"
   }
  ],
  "audio": "",
  "transcripcion": "",
  "mas": [
   {
    "t": "Las Galerías Arrubla, el primer centro comercial de Bogotá, ardieron durante tres días en 1900.",
    "f": "Semana — La historia tras el Palacio Liévano"
   },
   {
    "t": "En ese incendio también se perdieron la Compañía Colombiana de Teléfonos (fundada en 1884) y archivos del Concejo.",
    "f": "Las2orillas — El alemán que quemó la antigua Alcaldía"
   }
  ],
  "fuentes": [
   {
    "n": "Las2orillas — El alemán que quemó la antigua Alcaldía",
    "u": "https://www.las2orillas.co/?p=1005022"
   },
   {
    "n": "Semana — La historia tras el Palacio Liévano",
    "u": "https://www.semana.com/nacion/articulo/la-historia-tras-palacio-lievano/344841-3/"
   }
  ]
 }
];
