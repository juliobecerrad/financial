#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[1/4] Smoke técnico de refactor"
scripts/smoke-refactor.sh

echo "[2/4] Validando documentos operativos requeridos"
required_docs=(
  "docs/migracion-refactor.md"
  "docs/cronograma-ejecucion.md"
  "docs/runbook-piloto-cutover.md"
  "docs/piloto-dia1-checklist.md"
  "docs/cutover-dia-checklist.md"
  "docs/bitacora-piloto-template.md"
  "docs/acta-go-no-go-template.md"
  "docs/plantillas-comunicacion.md"
)

for file in "${required_docs[@]}"; do
  [[ -f "$file" ]] || { echo "Falta documento requerido: $file"; exit 1; }
done

echo "[3/4] Validando referencias cruzadas clave"
rg -n "runbook-piloto-cutover|cutover-dia-checklist|cronograma-ejecucion" docs/migracion-refactor.md >/dev/null
rg -n "Plantillas rápidas|piloto-dia1-checklist|cutover-dia-checklist|bitacora-piloto-template|acta-go-no-go-template" docs/runbook-piloto-cutover.md >/dev/null
rg -n "plantillas-comunicacion|bitacora-piloto-template|acta-go-no-go-template" docs/cronograma-ejecucion.md >/dev/null

echo "[4/4] Resumen"
echo "Pre-flight piloto OK"
