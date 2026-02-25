import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './styles/legacy-base.css'
import './styles/a11y.css'

const rootEl = document.getElementById('root')
const locale = rootEl?.dataset.locale === 'en' ? 'en' : 'ru'
const page = rootEl?.dataset.page === 'faq' ? 'faq' : 'home'

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App locale={locale} page={page} />
  </React.StrictMode>,
)
