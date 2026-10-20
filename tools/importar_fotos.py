#!/usr/bin/env python3
"""
Importa las fotos APROBADAS a la app.

Uso (desde la raíz del repo):
  python3 tools/importar_fotos.py hoja.csv carpeta_con_fotos_descargadas/

1) En la hoja de Google: Archivo → Descargar → CSV (hoja.csv).
2) Cambia la columna Estado de PENDIENTE a APROBADA en las fotos que sí van.
   Si la época es "Sin clasificar", corrígela antes (Colonial, República, Siglo XX o Actualidad).
3) Descarga esas fotos de la carpeta de Drive a una carpeta local.
El script copia cada foto a assets/img/lugares/<id>/ y actualiza data/fotos.js (sin duplicar).
"""
import csv, json, re, shutil, sys
from pathlib import Path

EPOCAS = {"Colonial", "República", "Siglo XX", "Actualidad"}
RAIZ = Path(__file__).resolve().parent.parent
FOTOS_JS = RAIZ / "data" / "fotos.js"
CABECERA = ("// FOTOS APROBADAS (las genera tools/importar_fotos.py, pero también puedes editarlas a mano).\n"
            "// lugar = id de data/lugares.js · epoca = Colonial | República | Siglo XX | Actualidad\n"
            "// Cada foto lleva texto alternativo (alt) y crédito (autor) — requisito de accesibilidad y de rigor.\n")

def cargar():
    txt = FOTOS_JS.read_text(encoding="utf-8") if FOTOS_JS.exists() else ""
    m = re.search(r"const FOTOS\s*=\s*(\[.*\]);", txt, re.S)
    return json.loads(m.group(1)) if m else []

def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    hoja, carpeta = Path(sys.argv[1]), Path(sys.argv[2])
    fotos = cargar()
    existentes = {f["src"] for f in fotos}
    nuevas = saltadas = 0
    with hoja.open(encoding="utf-8-sig", newline="") as fh:
        for fila in csv.DictReader(fh):
            if (fila.get("Estado") or "").strip().upper() != "APROBADA":
                continue
            lugar, epoca, archivo = fila["Lugar"].strip(), fila["Epoca"].strip(), fila["Archivo"].strip()
            origen = carpeta / archivo
            if epoca not in EPOCAS or not (RAIZ / "assets/img/lugares" / lugar).is_dir() or not origen.exists():
                print(f"⚠ Saltada: {archivo} (revisa época, lugar o que el archivo esté en la carpeta)")
                saltadas += 1
                continue
            destino = RAIZ / "assets/img/lugares" / lugar / archivo.split("__", 1)[-1]
            src = destino.relative_to(RAIZ).as_posix()
            if src in existentes:
                continue
            shutil.copy2(origen, destino)
            fotos.append({"lugar": lugar, "epoca": epoca, "src": src, "alt": fila["Alt"].strip(),
                          "autor": fila["Autor"].strip(), "fuente": fila.get("Fuente", "").strip(),
                          "anio": fila.get("Anio", "").strip()})
            nuevas += 1
    FOTOS_JS.write_text(CABECERA + "const FOTOS = " + json.dumps(fotos, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print(f"✔ {nuevas} fotos nuevas · {saltadas} saltadas · total en la app: {len(fotos)}")
    print("Recuerda subir la versión V en sw.js para que todos reciban la actualización.")

main()
