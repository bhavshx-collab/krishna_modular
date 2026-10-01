import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

/* ── Slides: real Krishna Modular project photos ────────────────── */
const slides = [
  {
    image: '/images/gallery/wa_4.jpeg',
    eyebrow: "Chennai's Premium Furniture Manufacturer",
    headline: 'Crafting Spaces That',
    accent: 'Inspire',
    tail: '& Endure',
    sub: 'Custom modular furniture and complete interior solutions — designed for your lifestyle, built with precision, delivered with pride.',
  },
  {
    image: '/images/gallery/47.jpeg',
    eyebrow: 'Commercial & Corporate Interiors',
    headline: 'Where Design Meets',
    accent: 'Excellence',
    tail: '',
    sub: 'From corporate offices to luxury residences — every project is a statement of craftsmanship and vision.',
  },
  {
    image: '/images/gallery/wa_2.jpeg',
    eyebrow: 'Residential Bespoke Furniture',
    headline: 'Your Dream Home,',
    accent: 'Built',
    tail: 'With Pride',
    sub: 'Premium modular kitchens, wardrobes and bedroom furniture tailored exactly to your space and lifestyle.',
  },
  {
    image: '/images/gallery/29.jpeg',
    eyebrow: 'Boutique & Salon Interiors',
    headline: 'Turning Spaces Into',
    accent: 'Experiences',
    tail: '',
    sub: 'Distinctive interior joinery and furniture for commercial studios, salons and hospitality venues.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating) return
    setAnimating(true)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  /* Auto-advance every 5 seconds */
  useEffect(() => {
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next])

  const scrollDown = () =>
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })

  const slide = slides[current]

  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '580px', overflow: 'hidden' }}>

      {/* ── Slides ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.85s ease',
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            src={s.image}
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              transform: i === current ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 6s ease',
            }}
          />
          {/* Dark gradient overlay — keeps text readable over photo */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, rgba(10,20,45,0.82) 0%, rgba(10,20,45,0.55) 55%, rgba(10,20,45,0.3) 100%)',
          }} />
          {/* Bottom vignette */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(10,20,45,0.6), transparent)',
          }} />
        </div>
      ))}

      {/* ── Content ── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '54rem' }}>

            {/* Eyebrow */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              marginBottom: '1.375rem',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
            }}>
              <div style={{ width: '2.5rem', height: '2px', background: '#C8971D', borderRadius: '2px', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C8971D',
              }}>
                {slide.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '1.375rem',
              fontSize: 'clamp(2.6rem, 6.5vw, 4.75rem)',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(12px)' : 'translateY(0)',
              transition: 'opacity 0.55s ease 0.18s, transform 0.55s ease 0.18s',
            }}>
              {slide.headline}{' '}
              <span style={{ color: '#C8971D', fontStyle: 'italic' }}>{slide.accent}</span>
              {slide.tail && <> {slide.tail}</>}
            </h1>

            {/* Sub */}
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.85,
              marginBottom: '2.5rem',
              maxWidth: '38rem',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 0.55s ease 0.26s, transform 0.55s ease 0.26s',
            }}>
              {slide.sub}
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3.5rem',
              opacity: animating ? 0 : 1,
              transition: 'opacity 0.5s ease 0.33s',
            }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '0.9rem' }}>
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-outline-gold" style={{ padding: '0.9rem 2rem', fontSize: '0.9rem' }}>
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2.5rem',
              opacity: animating ? 0 : 1,
              transition: 'opacity 0.5s ease 0.4s',
            }}>
              {[
                { value: 'Custom', label: 'Furniture Design' },
                { value: 'Chennai', label: 'Based & Serving' },
                { value: '100%', label: 'Quality Assured' },
              ].map(({ value, label }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                    color: '#C8971D',
                    lineHeight: 1.1,
                  }}>{value}</span>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.68rem',
                    color: 'rgba(255,255,255,0.48)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide Controls ── */}
      <div style={{
        position: 'absolute',
        bottom: '5rem',
        right: '2rem',
        zIndex: 20,
        display: 'flex',
        gap: '0.5rem',
      }}>
        {[prev, next].map((fn, i) => (
          <button
            key={i}
            onClick={fn}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.35)',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,151,29,0.7)'; e.currentTarget.style.borderColor = '#C8971D' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
            aria-label={i === 0 ? 'Previous slide' : 'Next slide'}
          >
            {i === 0 ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        ))}
      </div>

      {/* ── Dot indicators ── */}
      <div style={{
        position: 'absolute',
        bottom: '2.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '1.75rem' : '0.4rem',
              height: '0.4rem',
              borderRadius: '4px',
              background: i === current ? '#C8971D' : 'rgba(255,255,255,0.35)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.35s ease, background 0.35s ease',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={scrollDown}
        style={{
          position: 'absolute',
          bottom: '2.25rem',
          right: '2rem',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.375rem',
          color: 'rgba(255,255,255,0.45)',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
        aria-label="Scroll down"
      >
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}
