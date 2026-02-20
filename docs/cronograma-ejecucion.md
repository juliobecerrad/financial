# Cronograma de ejecución (sin checks adicionales)

Este cronograma continúa el plan aprobado asumiendo que la aplicación refactor ya fue validada funcionalmente y no requiere más checks de paridad.

## Semana 1

### Día 1 (hoy)
- Congelar cambios funcionales en la refactor.
- Confirmar responsables: técnico, producto y soporte.
- Confirmar ventana de piloto y canal de incidentes.

### Días 2-4
- Iniciar piloto con 5-10% de tráfico hacia `controlgastos_refactor.html`.
- Monitoreo operativo según runbook.
- Registrar incidencias y feedback de usuarios.

### Día 5
- Revisión Go/No-Go del piloto.
- Si GO: preparar incremento de tráfico.
- Si NO-GO: ejecutar rollback y plan de corrección.

## Semana 2

### Día 1
- Subir tráfico a 50% por 24 horas.
- Monitorear eventos críticos y estabilidad.

### Día 2
- Si estable: subir a 100%.
- Mantener fallback activo con `controlgastos.html`.

### Días 3-7
- Monitoreo post-cutover.
- Cierre de incidencias residuales.
- Publicación de acta final de migración.

## Ventana de seguridad
- Mantener fallback de la versión anterior por 1-2 semanas.
- Retirar fallback únicamente si no hay incidentes críticos.

- Comunicación operativa: usar `docs/plantillas-comunicacion.md`.

- Gobernanza de decisión: usar `docs/acta-go-no-go-template.md`.
- Registro operativo: usar `docs/bitacora-piloto-template.md`.

## Entregables por fase
- Piloto: bitácora diaria + decisión Go/No-Go.
- Inicio operativo sugerido: `scripts/iniciar-piloto.sh`.
- Cutover: checklist de día de cambio completado.
- Cierre: resumen de resultados y backlog de mejoras.
