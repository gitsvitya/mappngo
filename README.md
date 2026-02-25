# Mappngo.com webpage

Migrated to `React + Vite` in **MPA** mode (`/`, `/faq/`, `/en/`, `/en/faq/`).

## Run

```bash
npm install
npm run dev
```

Pages in dev:
- `http://127.0.0.1:5173/`
- `http://127.0.0.1:5173/faq/`
- `http://127.0.0.1:5173/en/`
- `http://127.0.0.1:5173/en/faq/`

## Build

```bash
npm run build
npm run preview
```

Notes:
- Visual parity is preserved by keeping the legacy stylesheet rules split into `src/styles/legacy-base.css`, `src/styles/legacy-grid.css`, `src/styles/legacy-utilities.css`, and `src/styles/legacy-mappngo.css` (same rule order).
- `src/styles/a11y.css` contains only small non-visual/accessibility enhancements.
- Static assets (images, favicon, fonts) are served from `public/assets`.
