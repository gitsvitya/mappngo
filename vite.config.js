import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Конфигурация Vite с явным перечислением всех HTML-входов для мультиязычного статического сайта.
export default defineConfig({
  // Локальный dev-сервер привязан к localhost и фиксированному порту.
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  // Сборка получает отдельные точки входа для RU/EN и страниц FAQ.
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
