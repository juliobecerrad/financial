#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="backups"
BACKUP_FILE="${BACKUP_DIR}/controlgastos.pre-refactor-${TIMESTAMP}.html"

mkdir -p "$BACKUP_DIR"

[[ -f controlgastos.html ]] || { echo "No existe controlgastos.html"; exit 1; }
[[ -f controlgastos_refactor.html ]] || { echo "No existe controlgastos_refactor.html"; exit 1; }

cp controlgastos.html "$BACKUP_FILE"
cp controlgastos_refactor.html controlgastos.html

echo "Deploy directo completado."
echo "Backup creado en: $BACKUP_FILE"
echo "Producción ahora sirve: controlgastos.html (contenido refactor)"
