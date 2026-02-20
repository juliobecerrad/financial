# Checklist Día 1 del piloto (operativo)

Usa esta lista para ejecutar el primer día del piloto de `controlgastos_refactor.html` sin improvisación.

## 0) Preparación (T-30 min)

- [ ] Confirmar responsable técnico del turno.
- [ ] Confirmar canal único de incidentes (chat/correo).
- [ ] Confirmar versión objetivo y ventana horaria del piloto.

## 1) Validación previa (T-20 min)

- [ ] Ejecutar smoke test local.
- [ ] Confirmar que `controlgastos.html` sigue disponible como fallback.
- [ ] Confirmar checklist de paridad con casos críticos P-01..P-10 en Pass.

Comandos rápidos:

```bash
cd /workspace/financial
scripts/smoke-refactor.sh
scripts/start-beta-local.sh 4173
```

## 2) Arranque del piloto (T0)

- [ ] Habilitar ruteo de 5-10% a `controlgastos_refactor.html`.
- [ ] Verificar manualmente que una sesión piloto entra a refactor.
- [ ] Publicar aviso interno de inicio (hora + responsable).

## 3) Monitoreo durante el día (cada 2-4 horas)

- [ ] Crear/editar/eliminar gasto e ingreso.
- [ ] Revisar resumen mensual e histórico anual.
- [ ] Verificar exportación CSV/PDF.
- [ ] Verificar backup + restauración.
- [ ] Revisar errores de consola JS.

## 4) Criterios de alarma (escalar y considerar rollback)

- [ ] No guarda o no edita registros.
- [ ] Totales inconsistentes frente a la versión actual.
- [ ] Falla import/export de datos.

## 5) Cierre del día

- [ ] Registrar incidencias en la bitácora del runbook.
- [ ] Clasificar estado del día: Verde / Amarillo / Rojo.
- [ ] Definir acción para el día siguiente: continuar / pausar / rollback.

### Plantilla de estado del día

- Fecha:
- Tráfico piloto (%):
- Incidentes críticos: Sí/No
- Decisión siguiente: Continuar / Pausar / Rollback
- Responsable:
