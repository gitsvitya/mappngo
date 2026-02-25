;(function () {
  var VISIT_KEY = 'mappngo.locale.visit.v1'
  var PREF_KEY = 'mappngo.locale.pref.v1'

  function detectLocale() {
    var langs = (navigator.languages && navigator.languages.length && navigator.languages) || [
      navigator.language || navigator.userLanguage || '',
    ]
    for (var i = 0; i < langs.length; i += 1) {
      if (String(langs[i]).toLowerCase().indexOf('ru') === 0) return 'ru'
    }
    return 'en'
  }

  function getStoredOrDetectedLocale() {
    var locale = window.localStorage.getItem(PREF_KEY)
    if (locale !== 'ru' && locale !== 'en') {
      locale = detectLocale()
      window.localStorage.setItem(PREF_KEY, locale)
    }
    window.localStorage.setItem(VISIT_KEY, '1')
    return locale
  }

  function getEnglishCounterpart(pathname) {
    if (pathname === '/' || pathname === '') return '/en/'
    if (pathname === '/faq' || pathname === '/faq/') return '/en/faq/'
    return null
  }

  try {
    var locale = getStoredOrDetectedLocale()
    if (locale !== 'en') return

    var target = getEnglishCounterpart(window.location.pathname)
    if (!target) return

    if (window.location.pathname !== target) {
      window.location.replace(target)
    }
  } catch (e) {}
})()
