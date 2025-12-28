# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Delfos is a brutalist, glitch-aesthetic static web application displaying random Greek maxims (89 in total) from the Oracle of Delphi. The app features experimental visual effects, ASCII decorations, terracotta/black color palette inspired by ancient Greek pottery, and a mysterious "E" (Epsilon) - the enigmatic letter found at the entrance of the ancient Delphi Oracle.

Designed as a spectacular browser homepage experience with Greek amphora background imagery.

Live site: https://gonzalo123.github.io/delfos/

## Architecture

### File Structure

- `index.html` - Single-page brutalist application with inline CSS
- `app.js` - JavaScript logic for maxim rotation and glitch effects
- `README.md` - Project link

### Design Philosophy

**Brutalist Aesthetics:**
- Zero external dependencies (no Bootstrap, no Google Fonts)
- Monospace typography (Courier New)
- Black/terracotta color palette (#0a0a0a, #d4622f, #e07041, #ff6b35)
- Asymmetric, fragmented layout
- ASCII art decorations (╔═══╗, █▀▀▀█, etc.)
- Disruptive glitch animations

**Visual Effects:**
- Greek amphora background (Wikimedia Commons) with blur/brightness filters
- Historic Epsilon (Ε) with pulsing glow animation
- Container glitch with clip-path distortion and hue-rotation
- Text glitch with RGB shadow displacement
- Scramble effect (characters resolve progressively)
- Enhanced scanline CRT effect with glow
- Film grain/noise overlay for vintage feel
- Backdrop-filter blur on transparent elements
- Hover effects with scale/glow transitions

### Key Components

**FACTS Array (app.js:1-90)**
- Contains 89 Greek maxims as `[greek_text, spanish_translation]` tuples
- Core data structure for the application

**Glitch System (app.js:92-200)**

Functions:
- `scrambleText(element, targetText, isGreek, callback)` - Progressive character resolution effect
- `applyGlitchEffect(element, callback)` - RGB text distortion
- `applyFlickerEffect(element, callback)` - Opacity flicker
- `applyContainerGlitch(container, callback)` - Clip-path container distortion
- `changeMaxim()` - Orchestrates transition sequence
- `refresh()` - Auto-rotation every 4 seconds

Transition sequence:
1. Container glitch (300ms)
2. Text glitch on Spanish (300ms)
3. Flicker on Greek (450ms)
4. Scramble Spanish text (800ms)
5. Scramble Greek text (800ms)

**UI Layout (index.html)**

Structure:
- Fixed header with ASCII borders, backdrop-filter blur, and navigation
- Historic Epsilon (Ε) - mysterious letter from Delphi entrance (index.html:561)
- Two static maxims (ΓΝΩΘΙ ΣΑΥΤΟΝ, ΜΗΔΕΝ ΑΓΑΝ) in rotated cards with hover effects
- One dynamic maxim container with enhanced glitch effects
- Decorative overlays: scanline effect, film grain noise
- Background layers: Greek amphora image → dark gradient overlay

DOM elements updated by JavaScript:
- `#fact_text` - Spanish translation (dynamic)
- `#fact_text_greek` - Greek original (dynamic)
- `#maxim-container` - Container for glitch effects

### Styling (index.html:10-340)

**Color Palette:**
- Background: `#0a0a0a` (deep black)
- Primary text: `#d4622f` (terracotta medium)
- Secondary text: `#e07041` (terracotta light)
- Accents/ASCII: `#8b3a1f` (terracotta dark)
- Highlights: `#ff6b35` (ceramic orange)

**Animations:**
- `@keyframes pulseGlow` - Pulsing glow for Epsilon and decorative elements (index.html:162-177)
- `@keyframes glitch` - Enhanced clip-path distortion with hue-rotate (index.html:332-376)
- `@keyframes textGlitch` - RGB text-shadow displacement with larger offset (index.html:378-407)
- `@keyframes flicker` - Opacity and brightness variation (index.html:409-426)
- `@keyframes scanline` - Enhanced CRT scan effect with opacity transitions (index.html:454-459)
- `@keyframes noiseAnim` - Film grain movement (index.html:475-486)

**Layout Techniques:**
- Transform rotations (-2°, -1°, 1°) for fragmented feel
- Absolute/fixed positioning for asymmetry
- Box-shadows for depth
- Pseudo-elements (::before, ::after) for ASCII decorations

## Development

### Running Locally

No build process required. Open `index.html` directly in a browser or use any static file server:

```bash
python3 -m http.server 8000
# or
npx serve
```

### Deployment

Project is configured for GitHub Pages. Any changes to main branch automatically deploy to https://gonzalo123.github.io/delfos/

### Making Changes

**Adding/modifying maxims:**
Edit the FACTS array in app.js:1-90. Each entry is a 2-element array: `["Greek text", "Spanish translation"]`

**Adjusting glitch intensity:**
- Container distortion: Modify clip-path values in `@keyframes glitch` (index.html:332-376)
- Text distortion: Adjust text-shadow offset in `@keyframes textGlitch` (index.html:378-407)
- Hue rotation: Change filter values in `@keyframes glitch` for color shift intensity
- Scramble speed: Change interval timing in scrambleText() (app.js:108, currently 40ms)
- Scramble duration: Modify maxIterations in scrambleText() (app.js:107, currently 20)
- Epsilon glow: Adjust text-shadow blur radius in `@keyframes pulseGlow` (index.html:162-177)

**Changing rotation timing:**
- Rotation interval: Modify setTimeout delay in refresh() (app.js:185, currently 4000ms)
- Transition durations in changeMaxim() callbacks (app.js:170-180)

**Color palette modifications:**
Update CSS custom values in `<style>` tag (index.html:10-340):
- Search/replace hex values for global color changes
- Maintain contrast ratios for readability

**Adding ASCII decorations:**
Use pseudo-elements (::before, ::after) with `content` property. Examples in:
- Header borders (index.html:543-549)
- Epsilon decorative lines (index.html:142-160)
- Static maxim borders (index.html:215-237)
- Dynamic maxim borders (index.html:278-302)

**Changing background image:**
Replace URL in body::before (index.html:34):
- Current: Greek amphora from Louvre (Wikimedia Commons)
- Adjust blur/brightness/contrast filters (index.html:38)
- Modify gradient overlay opacity (index.html:50-54)

### Responsive Behavior

Mobile breakpoint at 768px (index.html:286-319):
- Single column layout for static maxims
- Reduced font sizes
- Adjusted padding/margins
- Maintained glitch effects

## Technical Notes

**Browser Compatibility:**
- Modern browsers only (ES6+ JavaScript)
- CSS animations and clip-path required
- No polyfills or fallbacks

**Performance:**
- Animations use CSS transforms for GPU acceleration
- JavaScript transitions chained via callbacks
- `isTransitioning` flag prevents overlapping animations

**Accessibility Considerations:**
- High contrast color scheme (terracotta on black)
- Animations may trigger motion sensitivity (no prefers-reduced-motion implemented)
- Semantic HTML structure maintained despite brutalist design
- Background image may not load on slow connections (graceful degradation to solid black)

**Historic Context:**

The prominent "E" (Epsilon) is a historical mystery from ancient Delphi. This enigmatic letter appeared at the entrance to the Oracle, and its meaning was debated even in antiquity. Plutarch wrote an entire essay attempting to explain it. Theories include:
- Representing "Εἶ" (thou art) - acknowledging human existence
- The number 5 (epsilon = 5 in Greek numerals)
- A vowel sacred to Apollo
- "Εἰ" (if) - representing the questioning nature of prophecy

The Epsilon is styled with a pulsing glow effect (index.html:125-177) to emphasize its mysterious, oracular nature.
