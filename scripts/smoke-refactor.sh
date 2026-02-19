#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[1/4] Verificando archivos de refactor..."
for f in controlgastos_refactor.html controlgastos.refactor.css controlgastos.refactor.js; do
  [[ -f "$f" ]] || { echo "Falta $f"; exit 1; }
done

echo "[2/4] Verificando enlaces CSS/JS en HTML refactor..."
rg -n "controlgastos\.refactor\.css|controlgastos\.refactor\.js" controlgastos_refactor.html >/dev/null

echo "[3/4] Verificando sintaxis JS..."
node --check controlgastos.refactor.js >/dev/null

echo "[4/4] Detectando funciones duplicadas en JS refactor..."
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
