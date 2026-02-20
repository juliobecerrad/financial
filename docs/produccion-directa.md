# Producción directa del refactor (sin fase piloto)

Este flujo aplica cuando se decide mover directamente la versión refactor a producción.

## 1) Deploy directo

```bash
cd /workspace/financial
scripts/deploy-refactor-prod.sh
```

Qué hace:
- Guarda backup automático de la versión actual en `backups/controlgastos.pre-refactor-YYYYMMDD-HHMMSS.html`.
- Reemplaza `controlgastos.html` con el contenido de `controlgastos_refactor.html`.

## 2) Rollback inmediato (si se requiere)

Rollback al backup más reciente:

```bash
cd /workspace/financial
scripts/rollback-refactor-prod.sh
```

Rollback a un backup específico:

```bash
cd /workspace/financial
scripts/rollback-refactor-prod.sh backups/controlgastos.pre-refactor-YYYYMMDD-HHMMSS.html
```

## 3) Notas operativas
- Mantener backups por al menos 1-2 semanas.
- Si hay incidente crítico, ejecutar rollback inmediato.
- Mantener `controlgastos_refactor.html` en repo para futuras mejoras.
