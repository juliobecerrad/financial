#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

TARGET_BACKUP="${1:-}"

if [[ -z "$TARGET_BACKUP" ]]; then
  TARGET_BACKUP="$(ls -1t backups/controlgastos.pre-refactor-*.html 2>/dev/null | head -n 1 || true)"
fi

[[ -n "$TARGET_BACKUP" ]] || { echo "No se encontró backup para rollback"; exit 1; }
[[ -f "$TARGET_BACKUP" ]] || { echo "Backup no existe: $TARGET_BACKUP"; exit 1; }

cp "$TARGET_BACKUP" controlgastos.html

echo "Rollback completado."
echo "Restaurado desde: $TARGET_BACKUP"
