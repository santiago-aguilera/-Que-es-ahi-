// CONFIGURACIÓN GENERAL
const CONFIG = {
  // Logo del PROYECTO (SIMULADO por ahora): se ve en toda la app. Para cambiarlo, reemplaza el archivo (o cambia la ruta/extensión aquí).
  logoApp: "assets/img/logo_1.png",
  logoRespaldo: "assets/img/logo_1.png",   // se usa mientras no exista logoApp
  // Logos de la pestaña Acerca (SIMULADOS por ahora; agrega o quita los que necesites)
  logos: [
    { src: "assets/img/logos/logo_1.png", alt: "Logo 1" },
    { src: "assets/img/logos/logo_2.png", alt: "Logo 2" },
    { src: "assets/img/logos/logo_3.png", alt: "Logo 3" },
  ],
    // URL de tu Apps Script (termina en /exec). Mientras esté vacía, los botones "Sube tu foto" no se muestran.
  fotosEndpoint: "https://script.google.com/macros/s/AKfycbxtJRenPk63y37hzNXsoEbtLU1T1Qf9dXwSrL0VOR2be-xeT8_suLjjHWqKlGdTQ-g/exec"
};
