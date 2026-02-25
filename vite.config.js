import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        enMain: resolve(__dirname, 'en/index.html'),
        enFaq: resolve(__dirname, 'en/faq/index.html'),
      },
    },
  },
})
