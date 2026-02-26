#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

MODO="piloto"
SKIP_PREFLIGHT=0
DEPLOY=0

usage() {
  cat <<'USAGE'
Uso:
  scripts/finalizar-refactor.sh [--modo piloto|directo] [--skip-preflight] [--deploy]

Descripción:
  Ejecuta el flujo completo para llevar la refactor al estado final operativo,
  sin ir paso a paso manual:
  1) Pre-flight técnico/operativo.
  2) Preparación de paquete de ejecución (bitácora, acta y checklist).
  3) (Opcional) Deploy directo a producción con backup previo.

Opciones:
  --modo piloto      Ejecuta flujo recomendado con piloto (default).
  --modo directo     Ejecuta flujo para salida directa a producción.
  --skip-preflight   Omite preflight (solo si ya se ejecutó antes).
  --deploy           Ejecuta deploy final (copia refactor sobre controlgastos.html).
  -h, --help         Muestra esta ayuda.
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --modo)
      MODO="${2:-}"
      shift 2
      ;;
    --skip-preflight)
      SKIP_PREFLIGHT=1
      shift
      ;;
    --deploy)
      DEPLOY=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Argumento no reconocido: $1"
      usage
      exit 1
      ;;
  esac
done

if [[ "$MODO" != "piloto" && "$MODO" != "directo" ]]; then
  echo "Valor inválido para --modo: $MODO"
  echo "Valores válidos: piloto | directo"
  exit 1
fi

echo "== Flujo integral de salida refactor =="
echo "Modo: $MODO"
echo "Skip preflight: $SKIP_PREFLIGHT"
echo "Deploy final: $DEPLOY"

if [[ "$SKIP_PREFLIGHT" -eq 0 ]]; then
  echo
  echo "[1/3] Ejecutando pre-flight..."
  scripts/preflight-piloto.sh
else
  echo
  echo "[1/3] Pre-flight omitido por --skip-preflight"
fi

echo
echo "[2/3] Generando paquete operativo..."
scripts/iniciar-piloto.sh --skip-preflight

if [[ "$MODO" == "directo" ]]; then
  echo "- Referencia directa: docs/produccion-directa.md"
else
  echo "- Referencia piloto/cutover: docs/runbook-piloto-cutover.md"
fi

if [[ "$DEPLOY" -eq 1 ]]; then
  echo
  echo "[3/3] Ejecutando deploy final..."
  scripts/deploy-refactor-prod.sh
  echo "Rollback disponible con: scripts/rollback-refactor-prod.sh"
else
  echo
  echo "[3/3] Deploy no ejecutado. Para finalizar producto en producción usa:"
  echo "scripts/finalizar-refactor.sh --modo $MODO --deploy"
fi

echo
echo "Flujo completado."
