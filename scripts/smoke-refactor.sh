#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[1/6] Verificando archivos de refactor..."
for f in controlgastos_refactor.html controlgastos.refactor.css controlgastos.refactor.js manifest.json sw.js; do
  [[ -f "$f" ]] || { echo "Falta $f"; exit 1; }
done

echo "[2/6] Verificando enlaces CSS/JS en HTML refactor..."
rg -n "controlgastos\.refactor\.css|controlgastos\.refactor\.js" controlgastos_refactor.html >/dev/null

echo "[3/6] Verificando sintaxis JS..."
node --check controlgastos.refactor.js >/dev/null

echo "[4/6] Verificando configuración base de PWA en HTML refactor..."
rg -n "manifest\.json|serviceWorker\.register\('sw\.js'\)" controlgastos_refactor.html >/dev/null

echo "[5/6] Verificando manifiesto e íconos..."
python3 - <<'PY'
import json, pathlib, sys
manifest_path = pathlib.Path('manifest.json')
manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
icons = manifest.get('icons', [])
if not icons:
    print('manifest.json no define íconos')
    sys.exit(1)
missing = [icon.get('src') for icon in icons if icon.get('src') and not pathlib.Path(icon['src']).is_file()]
if missing:
    print('Íconos faltantes en manifest.json:', ', '.join(missing))
    sys.exit(1)
print('Manifiesto e íconos OK.')
PY

echo "[6/6] Detectando funciones duplicadas en JS refactor..."
python3 - <<'PY'
import re, collections, pathlib, sys
js = pathlib.Path('controlgastos.refactor.js').read_text(encoding='utf-8')
funcs = re.findall(r'function\s+([A-Za-z0-9_]+)\s*\(', js)
dup = {k:v for k,v in collections.Counter(funcs).items() if v>1}
if dup:
    print('Funciones duplicadas detectadas:', dup)
    sys.exit(1)
print('Sin funciones duplicadas.')
PY

echo "Smoke test OK"
