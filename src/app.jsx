import React, { useEffect, useState } from 'react'
import { SITE_CONTENT } from './content.js'

const LOCALE_PREF_KEY = 'mappngo.locale.pref.v1'

function persistLocalePreference(locale) {
  try {
    if (locale === 'ru' || locale === 'en') {
      window.localStorage.setItem(LOCALE_PREF_KEY, locale)
      window.localStorage.setItem('mappngo.locale.visit.v1', '1')
    }
  } catch (e) {}
}

function App({ locale, page }) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 0)
  const content = SITE_CONTENT[locale]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return page === 'faq' ? (
    <FaqPage locale={locale} scrolled={scrolled} content={content} />
  ) : (
    <HomePage locale={locale} scrolled={scrolled} content={content} />
  )
}

function ScrollTopLogo({ src, className }) {
  return (
    <a
      href="#top"
      onClick={(event) => {
        event.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <img src={src} alt="MappnGo" className={className} />
    </a>
  )
}

function HomePage({ locale, scrolled, content }) {
  const { home } = content

  return (
    <main className="home-page" id="top">
      <div className={`site-navbar${scrolled ? ' site-navbar--scrolled' : ''}`}>
        <ScrollTopLogo src="/assets/images/logo.svg" className="site-navbar__logo" />
      </div>

      <section className="hero-section__container hero-section">
        <img
          src="/assets/images/logo.svg"
          alt="MappnGo"
          className="hero-section__logo hero-section__logo--mobile"
        />
        <div className="hero-section__layout">
          <div className="hero-section__content">
            <img
              src="/assets/images/logo.svg"
              alt="MappnGo"
              className="hero-section__logo hero-section__logo--desktop"
            />
            <h1 className="hero-section__headline">{home.title}</h1>

            <div className="hero-section__copy">
              <p className="hero-section__subtitle">{home.subtitle}</p>
              <p className="hero-section__locale-link">
                <a
                  href={home.switchHref}
                  hrefLang={locale === 'ru' ? 'en' : 'ru'}
                  onClick={() => persistLocalePreference(locale === 'ru' ? 'en' : 'ru')}
                >
                  {home.switchLabel}
                </a>
              </p>
            </div>
          </div>
          <div className="hero-section__media">
            <img src="/assets/images/hero.png" alt="App preview" className="hero-section__image" />
          </div>
        </div>
      </section>

      <section className="home-faq-panel">
        <div className="home-faq-panel__container">
          <HomeFaqPreview sections={home.introFaq} faqHref={home.faqHref} cta={home.faqCta} />
        </div>
      </section>

      <section className="feature-carousel-section__container feature-carousel-section">
        <Carousel
          slides={home.slides}
          labels={
            locale === 'ru'
              ? { carousel: 'Функции приложения', prev: 'Предыдущий слайд', next: 'Следующий слайд', slide: 'Слайд' }
              : { carousel: 'App features', prev: 'Previous slide', next: 'Next slide', slide: 'Slide' }
          }
        />
      </section>

      <section className="site-footer" id="social" aria-label="Social media">
        <div className="site-footer__container site-footer__icons">
          <img src="/assets/images/icons/vk.svg" className="site-footer__icon" alt="VK" />
          <img src="/assets/images/icons/instagram.svg" className="site-footer__icon" alt="Instagram" />
          <img src="/assets/images/icons/fb.svg" className="site-footer__icon" alt="Facebook" />
          <img src="/assets/images/icons/twi.svg" className="site-footer__icon" alt="Twitter" />
        </div>
      </section>
    </main>
  )
}

function HomeFaqPreview({ sections, faqHref, cta }) {
  return (
    <div className="faq-preview">
      {sections.map((item, index) => (
        <div key={item.title} className="faq-preview__item">
          <h2 className={`${index === 0 ? 'faq-preview__title--lead ' : ''}faq-preview__title`.trim()}>{item.title}</h2>
          {item.html ? (
            <p className="faq-preview__text" dangerouslySetInnerHTML={{ __html: item.html }} />
          ) : (
            <p className="faq-preview__text">{item.body}</p>
          )}
        </div>
      ))}
      <a href={faqHref} className="faq-preview__cta">
        {cta}
      </a>
    </div>
  )
}

function Carousel({ slides, labels }) {
  const [index, setIndex] = useState(0)
  const orderedSlides = slides.map((_, offset) => slides[(index + offset) % slides.length])

  const prev = () => setIndex((current) => (current - 1 + slides.length) % slides.length)
  const next = () => setIndex((current) => (current + 1) % slides.length)

  return (
    <div
      id="appCarousel"
      className="feature-carousel"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') prev()
        if (event.key === 'ArrowRight') next()
      }}
      tabIndex={0}
    >
      <div className="feature-carousel__track" aria-live="polite">
        {orderedSlides.map((slide, slideIndex) => (
          <div
            className={`feature-carousel__item${slideIndex === 0 ? ' active' : ''}`}
            key={`${slide.title}-${slideIndex}`}
            aria-hidden={slideIndex === 0 ? 'false' : 'true'}
          >
            <div className="feature-carousel__card">
              <img src={slide.image} className="feature-carousel__image" alt={slide.title} />
              <h4 className="feature-carousel__title">{slide.title}</h4>
              <p className="feature-carousel__text">{slide.text}</p>
              <span className="visually-hidden">{`${labels.slide} ${((index + slideIndex) % slides.length) + 1} of ${slides.length}`}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="feature-carousel__control feature-carousel__control--prev"
        aria-label={labels.prev}
        onClick={prev}
      >
        <img src="/assets/images/icons/arrowL.svg" aria-hidden="true" alt="" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        type="button"
        className="feature-carousel__control feature-carousel__control--next"
        aria-label={labels.next}
        onClick={next}
      >
        <img src="/assets/images/icons/arrowR.svg" aria-hidden="true" alt="" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

function FaqPage({ scrolled, content }) {
  const { faq } = content

  return (
    <>
      <div className={`site-navbar site-navbar--faq${scrolled ? ' site-navbar--scrolled' : ''}`}>
        <ScrollTopLogo src="/assets/images/logo_on_white.svg" className="site-navbar__logo" />
      </div>

      <section className="faq-page__container faq-page__content" id="top">
        <div className="faq-page__header">
          <a href={faq.homeHref} className="faq-page__home-link">
            <img src="/assets/images/logo_on_white.svg" alt="MappnGo" className="faq-page__logo" />
          </a>
          <h3 className="faq-page__title">&nbsp;· FAQ</h3>
        </div>

        <FaqSections sections={faq.sections} />
      </section>
      <section className="faq-page__container faq-page__spacer" />
    </>
  )
}

function FaqSections({ sections }) {
  return sections.map((section) => (
    <div key={section.title} className="faq-content__section">
      <h2 className="faq-content__title">{section.title}</h2>
      {section.body ? (
        section.compactBody ? (
          <p className="faq-content__text faq-content__text--compact">
            {section.body}
            <br />
            {section.postBody}
          </p>
        ) : (
          <p className="faq-content__text">{section.body}</p>
        )
      ) : null}
      {section.list ? (
        <ul className="faq-content__list">
          {section.list.map((item) => (
            <li key={item} className="faq-content__list-item">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  ))
}

export default App
