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

      <section className="container first-section overflow-hidden">
        <img src="/assets/images/logo.svg" alt="MappnGo" className="img-fluid mx-auto d-block d-lg-none logo" />
        <div className="align-items-lg-center flex-nowrap justify-content-between no-gutters row position-relative">
          <div className="col-lg-7 col-sm-6">
            <img src="/assets/images/logo.svg" alt="MappnGo" className="img-fluid d-none d-lg-block logo" />
            <h1 className="px-0">{home.title}</h1>

            <div>
              <p className="font-weight-medium px-0">{home.subtitle}</p>
              <p className="font-weight-medium px-0">
                <a href={home.switchHref} hrefLang={locale === 'ru' ? 'en' : 'ru'}>
                  {home.switchLabel}
                </a>
              </p>
            </div>
          </div>
          <div className="hero-image col-7 col-lg-6">
            <img src="/assets/images/hero.png" alt="App preview" className="img-fluid" />
          </div>
        </div>
      </section>

      <section className="bg-primary faq">
        <div className="container">
          <HomeFaqPreview sections={home.introFaq} faqHref={home.faqHref} cta={home.faqCta} />
        </div>
      </section>

      <section className="top-section container">
        <Carousel
          slides={home.slides}
          labels={
            locale === 'ru'
              ? { carousel: 'Функции приложения', prev: 'Предыдущий слайд', next: 'Следующий слайд', slide: 'Слайд' }
              : { carousel: 'App features', prev: 'Previous slide', next: 'Next slide', slide: 'Slide' }
          }
        />
      </section>

      <section className="bg-primary" id="social" aria-label="Social media">
        <div className="container d-flex justify-content-center">
          <img src="/assets/images/icons/vk.svg" className="img-fluid" alt="VK" />
          <img src="/assets/images/icons/instagram.svg" className="img-fluid mx-4" alt="Instagram" />
          <img src="/assets/images/icons/fb.svg" className="img-fluid mr-4" alt="Facebook" />
          <img src="/assets/images/icons/twi.svg" className="img-fluid" alt="Twitter" />
        </div>
      </section>
    </main>
  )
}

function HomeFaqPreview({ sections, faqHref, cta }) {
  return (
    <>
      {sections.map((item, index) => (
        <div key={item.title}>
          <h2 className={index === 0 ? 'col-7 px-0' : ''}>{item.title}</h2>
          {item.html ? (
            <p dangerouslySetInnerHTML={{ __html: item.html }} />
          ) : (
            <p>{item.body}</p>
          )}
        </div>
      ))}
      <a href={faqHref} className="text-white font-weight-bold">
        {cta}
      </a>
    </>
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
      className="carousel slide text-center"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') prev()
        if (event.key === 'ArrowRight') next()
      }}
      tabIndex={0}
    >
      <div className="carousel-inner d-flex justify-content-between" aria-live="polite">
        {orderedSlides.map((slide, slideIndex) => (
          <div
            className={`carousel-item${slideIndex === 0 ? ' active' : ''}`}
            key={`${slide.title}-${slideIndex}`}
            aria-hidden={slideIndex === 0 ? 'false' : 'true'}
          >
            <div>
              <img src={slide.image} className="img-fluid" alt={slide.title} />
              <h4>{slide.title}</h4>
              <p>{slide.text}</p>
              <span className="sr-only">{`${labels.slide} ${((index + slideIndex) % slides.length) + 1} of ${slides.length}`}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-control-prev"
        aria-label={labels.prev}
        onClick={prev}
        style={{ border: 0, background: 'transparent' }}
      >
        <img src="/assets/images/icons/arrowL.svg" aria-hidden="true" alt="" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="carousel-control-next"
        aria-label={labels.next}
        onClick={next}
        style={{ border: 0, background: 'transparent' }}
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

      <section className="container pb-0" id="top">
        <div className="align-items-center d-flex py-5">
          <a href={faq.homeHref}>
            <img src="/assets/images/logo_on_white.svg" alt="MappnGo" className="logo img-fluid" />
          </a>
          <h3 className="mb-0">&nbsp;· FAQ</h3>
        </div>

        <FaqSections sections={faq.sections} />
      </section>
      <section className="container pt-0" />
    </>
  )
}

function FaqSections({ sections }) {
  return sections.map((section) => (
    <div key={section.title}>
      <h2>{section.title}</h2>
      {section.body ? (
        section.compactBody ? (
          <p className="mb-0">
            {section.body}
            <br />
            {section.postBody}
          </p>
        ) : (
          <p>{section.body}</p>
        )
      ) : null}
      {section.list ? (
        <ul>
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  ))
}

export default App
