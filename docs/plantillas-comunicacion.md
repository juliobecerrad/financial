# Plantillas de comunicación (piloto y cutover)

Estas plantillas ayudan a comunicar el avance del cronograma sin ambigüedad.

## 1) Aviso de inicio de piloto (5-10%)

Asunto: Inicio de piloto controlado - versión refactor

Mensaje:

> Equipo,
>
> Hoy iniciamos piloto controlado de `controlgastos_refactor.html` con 5-10% del tráfico.
> Ventana: [fecha/hora inicio] a [fecha/hora fin estimada].
> Responsable técnico: [nombre].
> Canal de incidentes: [canal].
>
> Durante el piloto monitorearemos: guardado/edición, totales, exportaciones y backup/restauración.
> Si se detecta incidente crítico, aplicaremos rollback inmediato a `controlgastos.html`.

## 2) Actualización diaria de estado (durante piloto)

Asunto: Estado diario piloto refactor - [fecha]

Mensaje:

> Tráfico piloto: [x%]
> Incidentes críticos: [Sí/No]
> Incidentes medios/bajos: [cantidad + resumen]
> Estado general: [Verde/Amarillo/Rojo]
> Decisión siguiente: [continuar/pausar/rollback]
> Responsable: [nombre]

## 3) Aviso de subida a 50%

Asunto: Incremento controlado a 50% - refactor

Mensaje:

> Equipo,
>
> Con base en resultados del piloto, hoy incrementamos tráfico a 50% para `controlgastos_refactor.html` durante 24 horas.
> Ventana: [fecha/hora].
> Monitoreo reforzado en flujos críticos y export/import.
>
> Fallback permanece disponible en `controlgastos.html`.

## 4) Aviso de cutover 100%

Asunto: Cutover completado a 100% - refactor

Mensaje:

> Equipo,
>
> Se completó el cutover a 100% hacia `controlgastos_refactor.html`.
> La versión previa `controlgastos.html` se mantiene activa como fallback por 1-2 semanas.
> Seguimos en monitoreo post-cutover por [x] días.
>
> Cualquier incidente crítico se reporta por [canal].

## 5) Aviso de rollback (si aplica)

Asunto: Rollback ejecutado - retorno a versión anterior

Mensaje:

> Equipo,
>
> Se ejecutó rollback preventivo a `controlgastos.html` por incidente crítico detectado.
> Estado actual: servicio estabilizado en versión anterior.
> Próximo paso: análisis de causa raíz + plan de corrección antes de nuevo intento.
>
> Responsable técnico: [nombre].
