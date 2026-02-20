# Migración segura a la versión refactorizada

## Objetivo
Mover tráfico desde `controlgastos.html` (versión actual) hacia `controlgastos_refactor.html` (versión refactor) sin interrumpir a usuarios activos.

## Estado actual
- Producción actual: `controlgastos.html`
- Candidato refactor: `controlgastos_refactor.html`
- Assets refactor:
  - `controlgastos.refactor.css`
  - `controlgastos.refactor.js`

---

## Guía operativa
- Cronograma de ejecución acordado: `docs/cronograma-ejecucion.md`.
- Para ejecutar piloto y cutover con checklist paso a paso, usar `docs/runbook-piloto-cutover.md`.
- Para ejecución puntual del día de cambio, usar `docs/cutover-dia-checklist.md`.

---

## Fase 1: Preparación (sin impacto)
1. Publicar la versión refactor en ruta beta (por ejemplo `/beta/controlgastos_refactor.html`).
2. Mantener `controlgastos.html` como URL principal.
3. Ejecutar smoke test local (ver `scripts/smoke-refactor.sh`).

Criterio de salida:
- Smoke test en verde.

---

## Fase 2: Paridad funcional (QA)
Validar en ambas versiones (actual y refactor) los siguientes flujos:

### A. Captura y edición
- [ ] Crear gasto con categoría, descripción, valor y tipo de pago.
- [ ] Crear ingreso con descripción y valor.
- [ ] Editar gasto e ingreso.
- [ ] Eliminar gasto e ingreso.

### B. Resúmenes y filtros
- [ ] Resumen mensual con filtros por mes/año.
- [ ] Resumen histórico anual.
- [ ] Gráficos visibles y sin errores en consola.

### C. Datos
- [ ] Exportar CSV mensual/anual.
- [ ] Exportar PDF mensual/anual.
- [ ] Crear backup y restaurar desde archivo.

### D. Configuración
- [ ] Cambio de moneda.
- [ ] Cambio de idioma.
- [ ] Activación/desactivación de PIN.

Criterio de salida:
- 100% de checks aprobados en refactor.

---

## Fase 3: Piloto controlado
1. Redirigir un subconjunto pequeño de usuarios a la versión refactor (5-10%).
2. Monitorear:
   - errores JS en consola
   - fallos de exportación/importación
   - feedback de UX
3. Mantener opción de rollback inmediato.

Criterio de salida:
- 0 errores críticos durante 3-7 días.

---

## Fase 4: Cutover
1. Cambiar ruta principal para servir la versión refactor.
2. Mantener la versión anterior disponible como backup de emergencia por 1-2 semanas.
3. Si aparecen errores críticos, rollback a la versión previa.

---

## Rollback
- Revertir enrutamiento al archivo actual (`controlgastos.html`).
- Mantener datos del usuario intactos (se usan las mismas claves `localStorage`).
- Documentar causa y reproducibilidad antes de reintentar cutover.

---

## Criterios de Go/No-Go
Go si:
- Smoke test en verde
- QA de paridad al 100%
- Piloto sin incidentes críticos

No-Go si:
- Falla import/export
- Errores de guardado/edición
- Inconsistencias de totales
