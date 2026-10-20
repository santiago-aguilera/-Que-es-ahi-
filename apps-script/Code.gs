/**
 * ¿Qué es ahí? · Receptor de fotos (Google Apps Script)
 * Guarda cada foto en una carpeta PRIVADA de Drive y la anota en una hoja con estado PENDIENTE.
 * Nada se publica en la app hasta que el equipo la apruebe.
 *
 * Columnas de la hoja (fila 1 = encabezados, escríbelos tal cual):
 * Fecha | Lugar | Epoca | Autor | Alt | Fuente | Anio | Archivo | Enlace | Estado
 */
const CONFIG = {
  FOLDER_ID: 'PEGA_AQUI_EL_ID_DE_TU_CARPETA_DE_DRIVE',
  SHEET_ID:  'PEGA_AQUI_EL_ID_DE_TU_HOJA_DE_CALCULO',
  MAX_BYTES: 4 * 1024 * 1024,
  // Mismos "id" que data/lugares.js
  LUGARES: ['plaza-de-bolivar','palacio-de-justicia','palacio-de-lievano','congreso','capitolio',
    'catedral-capilla','las-calles','casa-arzobispal','la-alcaldia','secretaria-de-cultura',
    'colegio-san-bartolome','academia-de-historia-colombiana','museo-de-la-independencia','cuadra-comercial'],
  // Mismas épocas que data/capas.js (+ "Sin clasificar" para que el equipo la ubique al revisar)
  EPOCAS: ['Colonial','República','Siglo XX','Actualidad','Sin clasificar']
};

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.web) return out({ok:true});                       // campo trampa anti-bots
    if (!CONFIG.LUGARES.includes(d.lugar) || !CONFIG.EPOCAS.includes(d.epoca)) throw new Error('lugar/época inválidos');
    if (!d.alt || !d.autor || d.consentimiento !== true) throw new Error('faltan campos obligatorios');
    if (d.mime !== 'image/jpeg') throw new Error('formato no permitido');

    const bytes = Utilities.base64Decode(d.data);
    if (bytes.length > CONFIG.MAX_BYTES) throw new Error('foto demasiado pesada');

    const epSlug = d.epoca.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,'-');
    const nombre = d.lugar + '__' + epSlug + '__' +
      Utilities.formatDate(new Date(),'America/Bogota','yyyyMMdd-HHmmss') + '-' + Math.floor(Math.random()*1000) + '.jpg';
    const file = DriveApp.getFolderById(CONFIG.FOLDER_ID).createFile(Utilities.newBlob(bytes, d.mime, nombre));

    SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheets()[0].appendRow([
      new Date(), d.lugar, d.epoca, String(d.autor).slice(0,80), String(d.alt).slice(0,300),
      String(d.fuente||'').slice(0,200), String(d.anio||'').slice(0,20), nombre, file.getUrl(), 'PENDIENTE'
    ]);
    return out({ok:true});
  } catch (err) {
    return out({ok:false, error:String(err.message||err)});
  }
}
function out(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
