import React, { useEffect, useState } from 'react'
import { SITE_CONTENT } from './content.js'

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
    <main className="pb-5" id="top">
      <div className={`navbar navbar-scrolling start fixed-top${scrolled ? ' scroll' : ''}`}>
        <ScrollTopLogo src="/assets/images/logo.svg" className="img-fluid mx-auto d-block logo" />
      </div>

      <section className="container first-section hero-section overflow-hidden">
        <img
          src="/assets/images/logo.svg"
          alt="MappnGo"
          className="logo hero-section__logo hero-section__logo--mobile"
        />
        <div className="align-items-lg-center flex-nowrap justify-content-between no-gutters row position-relative hero-section__layout">
          <div className="col-lg-7 col-sm-6 hero-section__content">
            <img
              src="/assets/images/logo.svg"
              alt="MappnGo"
              className="logo hero-section__logo hero-section__logo--desktop"
            />
            <h1 className="hero-section__headline">{home.title}</h1>

            <div className="hero-section__copy">
              <p className="font-weight-medium hero-section__subtitle">{home.subtitle}</p>
              <p className="font-weight-medium hero-section__locale-link">
                <a href={home.switchHref} hrefLang={locale === 'ru' ? 'en' : 'ru'}>
                  {home.switchLabel}
                </a>
              </p>
            </div>
          </div>
          <div className="hero-image col-7 col-lg-6 hero-section__media">
            <img src="/assets/images/hero.png" alt="App preview" className="hero-section__image" />
          </div>
        </div>
      </section>

      <section className="bg-primary faq">
        <div className="container">
          <HomeFaqPreview sections={home.introFaq} faqHref={home.faqHref} cta={home.faqCta} />
        </div>
      </section>

      <section className="top-section container feature-carousel-section">
        <Carousel
          slides={home.slides}
          labels={
            locale === 'ru'
              ? { carousel: 'Функции приложения', prev: 'Предыдущий слайд', next: 'Следующий слайд', slide: 'Слайд' }
              : { carousel: 'App features', prev: 'Previous slide', next: 'Next slide', slide: 'Slide' }
          }
        />
      </section>

      <section className="bg-primary site-footer" id="social" aria-label="Social media">
        <div className="container site-footer__icons">
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
      className="carousel slide feature-carousel"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') prev()
        if (event.key === 'ArrowRight') next()
      }}
      tabIndex={0}
    >
      <div className="carousel-inner feature-carousel__track" aria-live="polite">
        {orderedSlides.map((slide, slideIndex) => (
          <div
            className={`carousel-item feature-carousel__item${slideIndex === 0 ? ' active' : ''}`}
            key={`${slide.title}-${slideIndex}`}
            aria-hidden={slideIndex === 0 ? 'false' : 'true'}
          >
            <div className="feature-carousel__card">
              <img src={slide.image} className="feature-carousel__image" alt={slide.title} />
              <h4 className="feature-carousel__title">{slide.title}</h4>
              <p className="feature-carousel__text">{slide.text}</p>
              <span className="sr-only">{`${labels.slide} ${((index + slideIndex) % slides.length) + 1} of ${slides.length}`}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-control-prev feature-carousel__control feature-carousel__control--prev"
        aria-label={labels.prev}
        onClick={prev}
      >
        <img src="/assets/images/icons/arrowL.svg" aria-hidden="true" alt="" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="carousel-control-next feature-carousel__control feature-carousel__control--next"
        aria-label={labels.next}
        onClick={next}
      >
        <img src="/assets/images/icons/arrowR.svg" aria-hidden="true" alt="" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  )
}

function FaqPage({ scrolled, content }) {
  const { faq } = content

  return (
    <>
      <div className={`navbar navbar-scrolling start bg-primary fixed-top shadow-sm${scrolled ? ' scroll' : ''}`}>
        <ScrollTopLogo src="/assets/images/logo_on_white.svg" className="img-fluid mx-auto d-block logo" />
      </div>

      <section className="container faq-page__content" id="top">
        <div className="faq-page__header">
          <a href={faq.homeHref} className="faq-page__home-link">
            <img src="/assets/images/logo_on_white.svg" alt="MappnGo" className="logo faq-page__logo" />
          </a>
          <h3 className="faq-page__title">&nbsp;· FAQ</h3>
        </div>

        <FaqSections sections={faq.sections} />
      </section>
      <section className="container faq-page__spacer" />
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
