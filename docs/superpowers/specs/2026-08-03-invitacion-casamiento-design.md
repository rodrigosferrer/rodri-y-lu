# Invitacion de casamiento Rodri y Lu

## Objetivo

Crear una web estatica de una sola pagina para invitar a un casamiento intimo de 30 a 40 personas, con un tono campestre, minimalista e informal. La web debe ser facil de compartir por WhatsApp y comoda de usar desde celular.

## Datos del evento

- Pareja: Rodri y Lu.
- Fecha: 2 de octubre de 2026.
- Horario: de 12:00 a 20:00.
- Civil: CPC Centro America, Cordoba Capital. Coordenadas: -31.373877, -64.175724.
- Festejo: Chacras de la Villa, Cordoba/Villa Allende. Maps: https://maps.app.goo.gl/roh1Jn7AiqDTMNXW6
- Confirmacion de asistencia: https://docs.google.com/forms/d/e/1FAIpQLSd9v9ZdfLHnsJlfOEsQNqAsKjIE3yErO4AVZEZRMTmeijRGEQ/viewform?usp=publish-editor
- Subida de fotos: https://drive.google.com/drive/folders/1p0uRSj1Km4AF0QkchjCwYqbOYrl7e0Zj?usp=drive_link
- Foto principal: `20251215_083449.jpg`.

## Experiencia

La primera pantalla debe mostrar a Rodri y Lu como senal principal de la invitacion, usando la foto provista. El contenido debe comunicar rapido: quienes se casan, cuando es, que es un encuentro intimo y sin protocolo, y cuales son las acciones principales.

La pagina debe incluir:

- Hero con foto, nombres, fecha y una frase informal.
- Boton para guardar el evento en calendario mediante descarga de archivo `.ics`.
- Bloque de ubicaciones con dos acciones separadas:
  - Abrir CPC Centro America en Google Maps.
  - Abrir Chacras de la Villa en Google Maps.
- Boton para confirmar asistencia en Google Forms.
- Bloque de musica: explicar que en el mismo formulario se pueden sugerir canciones para la playlist.
- Boton para subir fotos a Google Drive.
- Bloque breve de vestimenta: sin codigo, informal, "como quieras".
- Texto breve de tono relajado, por ejemplo: "Venite comodo, con ganas de compartir. Nada de protocolo."
- Cronograma informal: civil, almuerzo, tarde juntos, merienda con mates y cierre.

## Estilo visual

El estilo sera campestre minimalista e informal:

- Fondo claro calido.
- Acentos verde oliva/salvia.
- Tipografia legible y sobria.
- Detalles visuales sutiles inspirados en campo/naturaleza, sin recargar.
- Botones grandes y claros, pensados para celular.
- Layout vertical, sin navegacion compleja.

La pagina no debe sentirse formal ni ceremonial. Debe sentirse cercana, simple y familiar.

## Vestimenta

La invitacion debe comunicar que no hay codigo de vestimenta. El texto sera informal y claro, por ejemplo:

"Sin codigo de vestimenta. Venite como quieras, comodo/a y con ganas de compartir."

## Ritmo del dia

La invitacion debe explicar que despues del civil habra un almuerzo en Chacras de la Villa. La idea del festejo no es una fiesta con protocolo, sino pasar la tarde juntos, compartir sobremesa y tomar unos mates a la merienda.

Cronograma sugerido:

- 12:00: Civil.
- Despues: Almuerzo en Chacras de la Villa.
- Tarde: Sobremesa y tiempo juntos.
- Merienda: Mates.
- 20:00: Cierre.

## Musica

La playlist se armara con sugerencias de los invitados. La web debe usar el mismo Google Form de confirmacion de asistencia para pedir canciones, evitando un segundo formulario o un enlace colaborativo de Spotify que pueda vencer.

Texto sugerido:

"La playlist la armamos entre todos. En el formulario tambien podes dejarnos canciones para sumar al festejo."

## Arquitectura

Implementar como sitio estatico sin framework:

- `index.html`: estructura y contenido.
- `styles.css`: estilos responsive.
- `script.js`: generacion/descarga del `.ics` y pequenas interacciones si hacen falta.
- `20251215_083449.jpg`: imagen principal existente.

No se requiere servidor ni build. La invitacion debe funcionar abriendo el HTML localmente y tambien debe poder subirse a cualquier hosting estatico.

## Flujos

### Guardar calendario

Al tocar "Guardar en calendario", JavaScript generara un archivo `.ics` con:

- Titulo: Casamiento Rodri y Lu.
- Inicio: 2026-10-02 12:00 America/Argentina/Cordoba.
- Fin: 2026-10-02 20:00 America/Argentina/Cordoba.
- Ubicacion: CPC Centro America y Chacras de la Villa.
- Descripcion: Civil y festejo intimo.

### Abrir mapas

Los botones de ubicacion abriran Google Maps:

- Civil con coordenadas exactas: `-31.373877, -64.175724`
- Festejo con enlace exacto: `https://maps.app.goo.gl/roh1Jn7AiqDTMNXW6`

### Confirmar asistencia y subir fotos

Los botones abriran los links provistos en una pestaña nueva.

## Responsividad

La prioridad es mobile. En pantallas chicas:

- La foto debe recortarse de forma cuidada.
- Los textos no deben superponerse.
- Los botones deben ocupar ancho comodo.

En desktop:

- La pagina debe mantenerse centrada y contenida.
- La foto puede convivir con el texto en una composicion mas amplia si mejora la lectura.

## Verificacion

Antes de dar por terminado:

- Abrir la pagina localmente.
- Revisar desktop y mobile con captura o navegador.
- Confirmar que no haya texto superpuesto.
- Probar que el `.ics` se descarga.
- Verificar que los botones externos apunten a Maps, Forms y Drive.
