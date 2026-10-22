# Links2Redes · Vitrina del proyecto

**Diseño de producto, desarrollo web y operación de un servicio gestionado de presencia digital.**

Links2Redes reúne identidad, contenidos, canales de contacto, QR y medición para acompañar la comunicación de profesionales y negocios. Su sitio institucional y su proceso de incorporación de contenidos cuentan con versiones en español, inglés y alemán.

🌐 [Sitio institucional](https://links2redes.com)

Este repositorio público es una **vitrina técnica y metodológica**. Explica el producto y muestra una demostración de interfaz con un proyecto ficticio. El backend operativo, las credenciales, la configuración de hosting, los registros y los perfiles de clientes quedan fuera de esta publicación.

## Qué muestra este trabajo

- Diseño de un flujo de incorporación de seis etapas: proyecto, identidad, canales, materiales, QR y revisión.
- Localización editorial ES/EN/DE, con inglés profesional y alemán formal con **Sie**.
- Separación entre idioma de interfaz e idiomas acordados para el perfil final.
- Formularios con validación, resumen, ayudas contextuales y progreso basado en campos obligatorios.
- Arquitectura de borradores, materiales privados, administración e invitaciones por correo.
- Publicaciones incrementales, respaldos y validación humana antes de usar cambios con clientes.

El alta de producción incluye guardado automático/manual, cambio de idioma conservando respuestas, archivos con permisos de uso, invitaciones y avisos por SMTP y bloqueo después del envío. **La demostración pública no conecta con esos servicios.**

## Demostración sin datos reales

Abrir `demo/es.html`, `demo/en.html` o `demo/de.html` en un navegador. También puede servirse esta carpeta con cualquier servidor de archivos estáticos; no requiere PHP, base de datos ni instalación de paquetes.

El proyecto **Atelier Example** es ficticio. La demo permite recorrer etapas, consultar ayudas, completar campos de ejemplo y observar el progreso. No envía correo, no sube archivos y no guarda datos. Cambiar de idioma reinicia los campos de esta demostración. No introducir información personal.

Verificación local de la publicación: `python tests/publication-check.py`. Requiere Python 3 y no utiliza servicios externos.

## Documentación

- [Producto y arquitectura](docs/PROYECTO.md)
- [Evolución y validación](docs/EVOLUCION.md)
- [Criterios de publicación y privacidad](docs/PUBLICACION.md)

```text
demo/                 Interfaz estática con datos ficticios, ES/EN/DE
  assets/             Estilos, traducciones, marca y lógica de demostración
  ayuda/              Guías de la interfaz
docs/                 Arquitectura, decisiones y validaciones
tests/                Verificaciones de la vitrina pública
```

## Tecnología y competencias

**Producto operativo:** HTML, CSS, JavaScript, PHP 8.3, MariaDB, PHPMailer/SMTP y almacenamiento privado. El código operativo permanece privado.

**Vitrina pública:** HTML, CSS y JavaScript sin framework, dependencias externas ni compilación obligatoria. Incluye diseño de interacción, accesibilidad de formularios, localización y pruebas de contenido.

## Autoría

**Pablo Churín — Guía Tecnológico** origina y dirige el proyecto, define el servicio, integra las soluciones y valida su publicación. Las herramientas de IA colaboran en redacción, implementación, pruebas y documentación bajo su dirección.

[guiatecnologico.com](https://guiatecnologico.com)

## Licencia

El contenido publicado en esta vitrina se distribuye bajo [CC BY 4.0](LICENSE). Esta publicación no concede acceso ni licencia sobre datos de clientes, infraestructura o código privado que no está incluido en el repositorio.
