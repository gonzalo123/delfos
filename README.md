# DELFOS · ΔΕΛΦΟΙ

Las máximas del oráculo de Delfos como página de inicio del navegador. Composición minimalista: inscripciones en griego como protagonistas, traducciones discretas y Apolo ante un eclipse.

**Web:** [gonzalo123.github.io/delfos](https://gonzalo123.github.io/delfos/)

## La experiencia

- «ΓΝΩΘΙ ΣΑΥΤΟΝ» y «ΜΗΔΕΝ ΑΓΑΝ» como inscripciones permanentes, con sus traducciones en segundo plano.
- Colección original de 88 máximas en griego y español, accesible desde **Las máximas**. Búsqueda en ambos idiomas, sin distinguir acentos ni mayúsculas.
- Rotación aleatoria sin repeticiones dentro de cada ciclo; «Nada en demasía» queda fuera de la rotación por estar ya representada en la inscripción permanente.
- Cada máxima dispone de 16 segundos completos de lectura después de la transición. Se puede consultar otra o pausar; la preferencia de pausa se guarda en el navegador.
- **Contemplar** oculta los elementos secundarios y detiene la rotación y el movimiento ambiental. **Volver** o Escape recuperan la vista normal. La pausa también detiene las animaciones ambientales.
- Fecha y hora locales. Enlaces a los proyectos originales sobre Grecia.
- Entrada del griego por planos, desplazamiento lento de la escultura, órbitas en sentidos opuestos y un barrido de luz de cobre sobre las letras. El puntero mueve la escultura, el texto y las órbitas a distinta profundidad.
- Cada nueva máxima aparece palabra a palabra y genera una onda breve en la órbita. Los 16 segundos de lectura comienzan cuando termina la entrada.
- Respeta `prefers-reduced-motion`: desactiva las animaciones y resuelve inmediatamente cualquier transición pendiente. No utiliza bucles continuos de JavaScript para el movimiento ambiental.
- La rotación conserva el tiempo pendiente mientras la pestaña está oculta, el archivo está abierto o el modo de contemplación está activo.
- Navegación por teclado, diálogo con foco contenido y anuncio accesible de la máxima resuelta.

## Teclado

| Tecla | Acción |
| --- | --- |
| Espacio | Otra máxima, fuera de campos y controles interactivos |
| P | Pausar o reanudar |
| F | Entrar o salir de contemplación |
| A | Abrir el archivo |
| Escape | Cerrar el archivo o salir de contemplación |

Los atajos no interfieren al escribir en el buscador. Dentro del archivo, se usan Tab, Enter y Escape.

## Desarrollo

Sin frameworks, proceso de compilación ni dependencias externas en ejecución. Las fuentes, la imagen y los iconos se sirven desde el propio proyecto; también funciona abriendo `index.html` directamente.

```bash
python3 -m http.server 8000
node --check app.js
```

- `index.html`: estructura semántica y diálogo del archivo.
- `style.css`: composición responsive, fuentes locales y movimiento.
- `app.js`: colección, rotación, temporizadores, archivo, teclado y reloj.
- `assets/apollo-eclipse.webp`: ilustración de Apolo generada para este diseño (aprox. 141 KB).
- `assets/ARTWORK.md`: herramienta y prompt de generación de la imagen.
- `assets/fonts/`: Cormorant Garamond, en WOFF2, con su licencia SIL Open Font License.

Las fotografías de cerámica del diseño anterior se conservan en la raíz como material de archivo y no se cargan en la página.

## Publicación

GitHub Pages sirve la raíz de la rama configurada. Todos los recursos usan rutas relativas; no hace falta compilar ni configurar un dominio raíz.
