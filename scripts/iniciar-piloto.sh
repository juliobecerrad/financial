#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

RUN_PREFLIGHT=1
if [[ "${1:-}" == "--skip-preflight" ]]; then
  RUN_PREFLIGHT=0
fi

if [[ "$RUN_PREFLIGHT" -eq 1 ]]; then
  echo "[1/3] Ejecutando pre-flight"
  scripts/preflight-piloto.sh
else
  echo "[1/3] Pre-flight omitido por bandera --skip-preflight"
fi

DATE_TAG="$(date +%Y%m%d)"
TARGET_DIR="docs/registros/piloto-${DATE_TAG}"

echo "[2/3] Preparando carpeta de ejecución: ${TARGET_DIR}"
mkdir -p "$TARGET_DIR"
cp docs/bitacora-piloto-template.md "$TARGET_DIR/bitacora-piloto.md"
cp docs/acta-go-no-go-template.md "$TARGET_DIR/acta-go-no-go.md"
cp docs/piloto-dia1-checklist.md "$TARGET_DIR/checklist-dia1.md"

echo "[3/3] Resumen"
echo "Paquete inicial del piloto creado: ${TARGET_DIR}"
echo "- bitacora-piloto.md"
echo "- acta-go-no-go.md"
echo "- checklist-dia1.md"
