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
- Uses legacy CSS from the old project (`public/assets/main...css`) to preserve visual parity during migration.
- Legacy jQuery/Bootstrap JS bundle is removed from runtime.
