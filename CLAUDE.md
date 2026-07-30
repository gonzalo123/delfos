# CLAUDE.md

## Project overview

Delfos is a dependency-free static browser homepage conceived as a digital poster inspired by the Oracle of Delphi. The two entrance inscriptions are the visual focus; the remaining Greek maxims rotate beneath them alongside Attic pottery imagery.

Live site: https://gonzalo123.github.io/delfos/

## Structure

- `index.html`: semantic page structure and all responsive CSS.
- `app.js`: maxim data, non-repeating automatic maxim rotation, ceramic crossfade, and motion preferences.
- Local JPG files: source pottery images. Only the four optimized 960px images in `PLATE_IMAGES` are loaded by the homepage; the two large archival files are retained but unused.

There is no package manager, build system, framework, or external runtime dependency.

## Main interactions

- A new maxim appears automatically after 16 full seconds of reading; «Nada en exceso» is excluded because it is permanently displayed as a foundational inscription.
- Greek and Spanish letters scramble for roughly one second before resolving; reduced-motion mode resolves them immediately.
- The Attic pottery panel crossfades every 18 seconds.
- Decorative motion stops under `prefers-reduced-motion`; maxim rotation continues without animated transitions.
- Timers pause while the tab is hidden.

## Development

Open `index.html` directly or run a static server:

```bash
python3 -m http.server 8000
```

Run `node --check app.js` after JavaScript changes. The site deploys directly to GitHub Pages from the repository root, so keep asset URLs relative and avoid assumptions about a domain-root base path.
