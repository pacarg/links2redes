# Evolución y validación · octubre de 2026

## Hitos

| Área | Aporte |
|---|---|
| Presencia digital | Perfiles personalizados, contacto, QR y medición |
| Incorporación | Asistente de contenidos de seis etapas y revisión administrativa |
| Correo | Invitaciones y avisos mediante SMTP autenticado; dirección de respuesta configurable |
| Idiomas | Preguntas, ayudas e invitaciones ES/EN/DE con elaboración editorial propia |
| Guardado | Borradores y conservación de respuestas al cambiar idioma en producción |
| Progreso | Cálculo por obligatorios, sin contar opciones sin marcar |
| Vitrina pública | Demostración sin backend ni información de clientes |

## Validación del producto operativo

Pablo publicó los cambios de forma incremental y comprobó el flujo mediante solicitudes ficticias y correo bajo su control:

- Recepción de invitaciones inglesas y alemanas y apertura en el idioma seleccionado.
- Conservación de una respuesta al cambiar de inglés a alemán.
- Ayuda alemana y retorno al primer campo obligatorio pendiente.
- Envío final, bloqueo, aviso interno y lectura administrativa.
- Dirección correcta al responder una invitación.
- Progreso 0 % vacío, 17 % con el primer obligatorio y vuelta a 0 % al borrarlo.

Codex colaboró con comprobaciones locales de formularios, renderizado de correo, cambios de idioma, guardado y compatibilidad de base relacional con datos ficticios. Estas pruebas funcionales no constituyen una auditoría de seguridad integral.

## Límites y próximos pasos

- Última revisión del producto operativo en un móvil real pendiente; existe revisión local de ancho móvil.
- Sin nueva comprobación integral de todas las combinaciones de planes en esta entrega.
- Resolución de conflictos entre pestañas simultáneas pendiente.
- Ajustes menores de singular/plural del contador de idiomas pendientes.
- Archivado reversible administrativo previsto para una etapa posterior.

La demo pública tiene un alcance menor que producción y lo declara explícitamente. No utilizarla como prueba de almacenamiento, envío o controles privados.

## Colaboración

El trabajo es **humano-dirigido e IA-asistido**. Pablo define necesidades, toma decisiones, aprueba textos, publica y valida. Codex aporta propuestas, implementación incremental, pruebas y documentación. Los avances se consideran confirmados según la evidencia disponible, no por la sola generación de código.
