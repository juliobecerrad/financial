# QA de paridad: versión actual vs refactor

Este checklist se usa para validar que `controlgastos_refactor.html` tenga el mismo comportamiento que `controlgastos.html` antes del piloto/cutover.

## Entorno de prueba
- Base URL local: `http://127.0.0.1:4173`
- Versión actual: `http://127.0.0.1:4173/controlgastos.html`
- Versión refactor: `http://127.0.0.1:4173/controlgastos_refactor.html`

> Recomendación: limpiar `localStorage` antes de iniciar cada ronda comparativa.

---

## Matriz de paridad

| ID | Flujo | Actual | Refactor | Resultado | Notas |
|---|---|---|---|---|---|
| P-01 | Crear gasto (fecha, categoría, descripción, valor, tipo pago) | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-02 | Crear ingreso (fecha, descripción, valor) | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-03 | Editar gasto desde tabla | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-04 | Editar ingreso desde tabla | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-05 | Eliminar gasto e ingreso | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-06 | Resumen mensual por mes/año | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-07 | Resumen histórico anual | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-08 | Exportar CSV mensual/anual | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-09 | Exportar PDF mensual/anual | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-10 | Backup + restauración JSON/TXT | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-11 | Cambio de moneda | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-12 | Cambio de idioma ES/EN | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-13 | Activar/desactivar PIN | ☐ | ☐ | ☐ Pass / ☐ Fail | |
| P-14 | Registro de service worker sin error | ☐ | ☐ | ☐ Pass / ☐ Fail | |

---

## Criterios de salida
- ✅ Paridad aprobada cuando todos los casos críticos (P-01..P-10) están en **Pass**.
- ⛔ No avanzar a piloto si hay diferencias de cálculo, edición/eliminación o exportación/importación.

## Evidencia mínima
- Capturas de ambos flujos cuando aplique.
- Registro de errores de consola (si existen).
- Checklist archivado en PR del piloto.
