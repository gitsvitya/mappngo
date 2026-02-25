import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const SITE_URL = 'https://mappngo.com'
const OG_IMAGE = `${SITE_URL}/assets/images/OG.png`
const LOGO_IMAGE = `${SITE_URL}/assets/images/logo.svg`

const COMMON_HEAD = {
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1.0',
  yandexVerification: '41d1d3b67ce0e185',
  author: 'Victor Strokov',
  fontHref: '/assets/fonts/inter.css',
}

const pages = [
  {
    outFile: 'index.html',
    lang: 'ru',
    bodyClass: '',
    dataLocale: 'ru',
    dataPage: 'home',
    title: 'Mappngo — маршруты для прогулок',
    description:
      'Mappngo — маршруты для прогулок. История проекта MappNgo и ответы на частые вопросы о приложении.',
    ogDescription: 'MappnGo — маршруты для прогулок',
    canonicalPath: '/',
    alternateRuPath: '/',
    alternateEnPath: '/en/',
    xDefaultPath: '/',
    ogLocale: 'ru_RU',
    ogLocaleAlternate: 'en_US',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Mappngo',
          url: `${SITE_URL}/`,
          logo: LOGO_IMAGE,
        },
        {
          '@type': 'WebSite',
          name: 'Mappngo',
          url: `${SITE_URL}/`,
          inLanguage: 'ru',
        },
      ],
    },
  },
  {
    outFile: 'en/index.html',
    lang: 'en',
    bodyClass: '',
    dataLocale: 'en',
    dataPage: 'home',
    title: 'Mappngo — routes for walking',
    description:
      'Mappngo — routes for walking. Learn about the MappNgo project and find answers to common questions about the app.',
    ogDescription: 'MappnGo — routes for walking',
    canonicalPath: '/en/',
    alternateRuPath: '/',
    alternateEnPath: '/en/',
    xDefaultPath: '/',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'ru_RU',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Mappngo',
          url: `${SITE_URL}/`,
          logo: LOGO_IMAGE,
        },
        {
          '@type': 'WebSite',
          name: 'Mappngo',
          url: `${SITE_URL}/en/`,
          inLanguage: 'en',
        },
      ],
    },
  },
  {
    outFile: 'faq/index.html',
    lang: 'ru',
    bodyClass: 'faq-page',
    dataLocale: 'ru',
    dataPage: 'faq',
    title: 'Mappngo — FAQ',
    description:
      'FAQ о MappNgo: как работало приложение, как создавались маршруты, как работала навигация и почему проект закрыт.',
    ogDescription: 'MappnGo — FAQ',
    canonicalPath: '/faq/',
    alternateRuPath: '/faq/',
    alternateEnPath: '/en/faq/',
    xDefaultPath: '/faq/',
    ogLocale: 'ru_RU',
    ogLocaleAlternate: 'en_US',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mappngo',
      url: `${SITE_URL}/`,
      logo: LOGO_IMAGE,
    },
  },
  {
    outFile: 'en/faq/index.html',
    lang: 'en',
    bodyClass: 'faq-page',
    dataLocale: 'en',
    dataPage: 'faq',
    title: 'Mappngo — FAQ',
    description:
      'MappNgo FAQ: how the app worked, how route guides were created, how navigation worked, and why the project was closed.',
    ogDescription: 'MappnGo — FAQ',
    canonicalPath: '/en/faq/',
    alternateRuPath: '/faq/',
    alternateEnPath: '/en/faq/',
    xDefaultPath: '/faq/',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'ru_RU',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Mappngo',
      url: `${SITE_URL}/`,
      logo: LOGO_IMAGE,
    },
  },
]

function fullUrl(path) {
  return `${SITE_URL}${path}`
}

function stringifyJsonLd(data) {
  return JSON.stringify(data, null, 2)
    .split('\n')
    .map((line) => `      ${line}`)
    .join('\n')
}

function renderHtml(page) {
  const bodyClassAttr = page.bodyClass ? ` class="${page.bodyClass}"` : ''
  return `<!doctype html>
<html lang="${page.lang}">
  <head>
    <meta charset="${COMMON_HEAD.charset}" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="${COMMON_HEAD.viewport}" />
    <title>${page.title}</title>

    <meta name="description" content="${page.description}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:url" content="${fullUrl(page.canonicalPath)}" />
    <meta property="og:description" content="${page.ogDescription}" />
    <meta property="og:site_name" content="mappngo.com" />
    <meta property="og:locale" content="${page.ogLocale}" />
    <meta property="og:locale:alternate" content="${page.ogLocaleAlternate}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    <meta property="article:author" content="${COMMON_HEAD.author}" />
    <meta name="yandex-verification" content="${COMMON_HEAD.yandexVerification}" />

    <link rel="canonical" href="${fullUrl(page.canonicalPath)}" />
    <link rel="alternate" href="${fullUrl(page.alternateRuPath)}" hreflang="ru" />
    <link rel="alternate" href="${fullUrl(page.alternateEnPath)}" hreflang="en" />
    <link rel="alternate" href="${fullUrl(page.xDefaultPath)}" hreflang="x-default" />

    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#FB9529" />
    <meta name="theme-color" content="#ffffff" />

    <link href="${COMMON_HEAD.fontHref}" rel="stylesheet" />

    <script type="application/ld+json">
${stringifyJsonLd(page.jsonLd)}
    </script>

    <script src="/assets/js/locale-boot.js"></script>

    <script src="/assets/js/metrika-init.js"></script>
  </head>
  <body${bodyClassAttr}>
    <noscript>
      <div><img src="https://mc.yandex.ru/watch/55102618" style="position:absolute;left:-9999px" alt="" /></div>
    </noscript>
    <div id="root" data-locale="${page.dataLocale}" data-page="${page.dataPage}"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
}

async function main() {
  for (const page of pages) {
    const outPath = resolve(process.cwd(), page.outFile)
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, renderHtml(page))
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
