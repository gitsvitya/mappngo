;(function () {
  // Ключ, обозначающий, что пользователь уже посещал сайт.
  var VISIT_KEY = 'mappngo.locale.visit.v1'
  // Ключ для сохранения выбранной локали между посещениями.
  var PREF_KEY = 'mappngo.locale.pref.v1'

  // Определяет приоритетный язык пользователя по списку браузерных языков.
  function detectLocale() {
    var langs = (navigator.languages && navigator.languages.length && navigator.languages) || [
      navigator.language || navigator.userLanguage || '',
    ]

    for (var i = 0; i < langs.length; i += 1) {
      if (String(langs[i]).toLowerCase().indexOf('ru') === 0) return 'ru'
    }

    return 'en'
  }

  // Возвращает локаль из localStorage или сохраняет автоопределенную локаль.
  function getStoredOrDetectedLocale() {
    var locale = window.localStorage.getItem(PREF_KEY)

    if (locale !== 'ru' && locale !== 'en') {
      locale = detectLocale()
      window.localStorage.setItem(PREF_KEY, locale)
    }

    window.localStorage.setItem(VISIT_KEY, '1')
    return locale
  }

  // Возвращает английский URL-эквивалент только для поддерживаемых русских маршрутов.
  function getEnglishCounterpart(pathname) {
    if (pathname === '/' || pathname === '') return '/en/'
    if (pathname === '/faq' || pathname === '/faq/') return '/en/faq/'
    return null
  }

  try {
    // Выполняем автоматический редирект только для англоязычных пользователей.
    var locale = getStoredOrDetectedLocale()
    if (locale !== 'en') return

    var target = getEnglishCounterpart(window.location.pathname)
    if (!target) return

    if (window.location.pathname !== target) {
      window.location.replace(target + window.location.search + window.location.hash)
    }
  } catch {
    // Если localStorage недоступен, страница должна продолжить работу без редиректа.
  }
})()
