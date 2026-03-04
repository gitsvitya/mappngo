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
- Visual parity is preserved by a semantic parity layer in `src/styles/parity/*.css` (imported via `src/styles/parity.css`) with preserved rule order.
- `src/styles/parity.css` is the parity manifest that imports the block-level parity styles from `src/styles/parity/`.
- Static assets (images, favicon, fonts) are served from `public/assets`.

## Author

**Victor Strokov**

- Website: [svitya.com](https://svitya.com/)