# Checklist de día de cutover (50% -> 100%)

Checklist corto para ejecutar el cambio de tráfico de forma controlada después de un piloto exitoso.

## 0) Gate de entrada (obligatorio)

- [ ] Piloto de 3-7 días sin incidentes críticos.
- [ ] Go/No-Go aprobado por responsable técnico.
- [ ] Rollback definido y probado (volver a `controlgastos.html`).

## 1) Fase A: subir a 50%

- [ ] Ajustar ruteo a 50% en `controlgastos_refactor.html`.
- [ ] Monitorear 24 horas:
  - [ ] Guardado/edición/eliminación.
  - [ ] Totales y resúmenes.
  - [ ] Exportación CSV/PDF.
  - [ ] Backup/restauración.
  - [ ] Consola JS sin errores críticos.

## 2) Fase B: subir a 100%

- [ ] Ajustar ruteo a 100%.
- [ ] Confirmar apertura normal para usuarios nuevos y recurrentes.
- [ ] Mantener `controlgastos.html` accesible como fallback por 1-2 semanas.

## 3) Verificación post-cutover (primeras 24 horas)

- [ ] Sin reportes críticos de usuarios.
- [ ] Sin inconsistencias de cálculo.
- [ ] Sin fallas en import/export.
- [ ] Bitácora de monitoreo actualizada.

## 4) Rollback inmediato (si aplica)

Ejecutar si hay incidente crítico:
- [ ] Revertir ruteo a `controlgastos.html`.
- [ ] Verificar operación básica post-rollback.
- [ ] Registrar causa raíz preliminar y plan de corrección.

## 5) Cierre

- [ ] Comunicar resultado final al equipo.
- [ ] Adjuntar evidencia (bitácora + checklist).
- [ ] Programar retiro de fallback al finalizar la ventana de seguridad.
