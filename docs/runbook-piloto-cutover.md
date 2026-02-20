# Runbook operativo: piloto y cutover

Este runbook convierte el plan de `docs/migracion-refactor.md` en una ejecución paso a paso para despliegue seguro de `controlgastos_refactor.html`.

## Plantillas rápidas

- Checklist operativo Día 1: `docs/piloto-dia1-checklist.md`.
- Checklist de día de cutover: `docs/cutover-dia-checklist.md`.

## 1) Pre-flight (antes de mover usuarios)

- [ ] Confirmar smoke test local en verde.
- [ ] Confirmar checklist de paridad completo (casos críticos P-01..P-10 en Pass).
- [ ] Confirmar respaldo de la versión actual (`controlgastos.html`) sin cambios.
- [ ] Definir responsable de monitoreo durante el piloto.
- [ ] Definir canal de incidentes (ej: Slack/WhatsApp/Email) y tiempo objetivo de respuesta.

Comandos sugeridos:

```bash
cd /workspace/financial
scripts/smoke-refactor.sh
scripts/start-beta-local.sh 4173
```

## 2) Piloto controlado (5-10%)

### Objetivo
Mover una fracción pequeña de usuarios a `controlgastos_refactor.html` por 3-7 días.

### Ejecución
- [ ] Habilitar ruteo gradual (5-10%) a la versión refactor.
- [ ] Mantener el resto en `controlgastos.html`.
- [ ] Publicar aviso interno con hora de inicio del piloto.

### Monitoreo mínimo (cada 2-4 horas en ventana activa)
- [ ] Errores en consola JS.
- [ ] Alta/edición/eliminación de gastos/ingresos.
- [ ] Exportación CSV/PDF.
- [ ] Backup y restauración.
- [ ] Percepción de UX (latencia visual, bloqueos, confusión de flujos).

## 3) Plantilla de bitácora de piloto

Registra eventos relevantes para tener trazabilidad:

| Fecha/Hora | Usuario/Segmento | Flujo afectado | Severidad (Alta/Media/Baja) | Estado | Acción tomada |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

Criterio de incidente crítico (detiene avance):
- No se puede guardar/editar/eliminar.
- Totales o cálculos inconsistentes.
- Falla import/export de datos.

## 4) Go / No-Go al finalizar piloto

### GO (avanzar a cutover)
- [ ] 0 incidentes críticos en 3-7 días.
- [ ] Sin diferencias de cálculo entre actual y refactor.
- [ ] Sin fallos de import/export.

### NO-GO (no avanzar)
- [ ] Existe al menos un incidente crítico abierto.
- [ ] Persisten errores de guardado/edición.
- [ ] Persisten inconsistencias de totales.

## 5) Cutover gradual (50% -> 100%)

### Fase A: 50%
- [ ] Incrementar tráfico al 50% durante 24 horas.
- [ ] Monitorear mismos checks del piloto.

### Fase B: 100%
- [ ] Mover el 100% de tráfico a la versión refactor.
- [ ] Mantener disponible `controlgastos.html` como fallback por 1-2 semanas.

## 6) Rollback (inmediato)

Ejecutar rollback si aparece incidente crítico:
- [ ] Revertir ruteo a `controlgastos.html`.
- [ ] Validar operación básica post-rollback (alta/edición/exportación).
- [ ] Registrar causa raíz inicial y pasos para reproducir.

## 7) Cierre

- [ ] Documentar resultado final (éxito o rollback).
- [ ] Adjuntar checklist de paridad y bitácora del piloto al PR o acta interna.
- [ ] Definir backlog de mejoras no críticas para la siguiente iteración.
