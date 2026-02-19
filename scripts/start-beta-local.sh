#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${1:-4173}"

cd "$ROOT_DIR"

echo "Levantando servidor local en http://127.0.0.1:${PORT}"
echo "- Actual:   http://127.0.0.1:${PORT}/controlgastos.html"
echo "- Refactor: http://127.0.0.1:${PORT}/controlgastos_refactor.html"
echo
echo "Sugerencia QA:"
echo "1) Ejecuta scripts/smoke-refactor.sh"
echo "2) Completa docs/paridad-qa-checklist.md"
echo
python3 -m http.server "$PORT"
