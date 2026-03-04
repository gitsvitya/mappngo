import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './styles/parity.css'

// Находим корневой контейнер, в который монтируется React-приложение.
const rootEl = document.getElementById('root')

// Без контейнера рендер невозможен: выходим тихо, чтобы избежать падения страницы.
if (!rootEl) {
  throw new Error('Root element with id "root" was not found')
}

// Вычитываем язык и тип страницы из data-атрибутов, переданных в HTML-шаблоне.
const locale = rootEl.dataset.locale === 'en' ? 'en' : 'ru'
const page = rootEl.dataset.page === 'faq' ? 'faq' : 'home'

// Монтируем приложение в строгом режиме React для контроля потенциальных побочных эффектов.
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App locale={locale} page={page} />
  </React.StrictMode>,
)
