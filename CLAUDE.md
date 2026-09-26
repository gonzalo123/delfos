# Project overview

Delfos is a dependency-free static browser homepage, conceived as a contemporary sanctuary around the Oracle of Delphi. Two permanent inscriptions accompany an original collection of 88 Greek/Spanish maxims. The visual identity pairs monumental Cormorant typography with a generated Apollo/eclipse artwork, copper details, and a dark canvas.

Live site: https://gonzalo123.github.io/delfos/

Design direction: Greek inscriptions take visual priority over Spanish translations. Keep the interface minimal and omit slogans, motivational filler and redundant introductory copy.

Motion direction: visible but restrained. Layered inscription entrance, slow sculpture drift, opposing orbital arcs, a copper light sweep, pointer depth and a brief orbital wave on each new maxim. Keep the reading copy stable between transitions; do not add decorative copy or external animation libraries.

## Structure

- `index.html`: semantic homepage, SVG icon symbols, archive dialog.
- `style.css`: responsive layout, local fonts, motion and contemplation styles.
- `app.js`: original maxim data, shuffled deck, reading timer, searchable archive, clock, keyboard controls, motion preferences.
- `assets/`: optimized WebP artwork, SVG favicon, local WOFF2 fonts and license; `ARTWORK.md` documents the generated art.
- Root JPG files: retained archival images, no longer loaded by the homepage.

There is no package manager, build system, framework, or external runtime dependency.

## Behavior

- Each maxim has 16 seconds of reading after its transition. The 87-item rotating deck excludes the permanently represented «Nada en demasía» and avoids repeats across the deck boundary. The archive exposes all 88 original entries.
- Manual pause persists in localStorage, with a safe fallback if storage is unavailable. Pause also stops every `.ambient-motion` animation.
- Hidden tabs, the archive dialog and contemplation suspend the timer and ambient motion, preserving the remaining reading duration.
- Maxims reveal word by word; the reading timer begins after the last word settles. The orbital wave is one cancellable Web Animation; ambient movement uses CSS and pointer updates use an event-driven animation frame.
- Reduced-motion mode disables entrance, ambient and pointer animation; changing to reduced motion or hiding the tab immediately resolves a pending maxim transition. Automatic maxim rotation remains available and can be paused.
- Native dialog manages modal focus and Escape. Search normalizes diacritics in Greek and Spanish.
- Space: next maxim; P: pause; F: contemplation; A: archive; Escape: exit. Shortcuts do not interfere with editing or the archive dialog.
- The clock updates on minute boundaries and when the tab becomes visible.

## Development

Open `index.html` directly or run `python3 -m http.server 8000`.

Run `node --check app.js` after JavaScript changes. For behavior changes, verify pause/resume, hidden-tab timing, archive selection, keyboard navigation, reduced motion and narrow layouts in a browser. Preserve the original collection unless explicitly asked to edit its content.

The site deploys directly to GitHub Pages from the repository root. Keep asset URLs relative and all runtime assets local.
