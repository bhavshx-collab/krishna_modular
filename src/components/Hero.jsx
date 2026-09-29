import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0d1f3c 0%, #1B3A6B 55%, #162e58 100%)' }} />
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.07,
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(200,151,29,0.4) 0, rgba(200,151,29,0.4) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(200,151,29,0.2) 0, rgba(200,151,29,0.2) 1px, transparent 1px, transparent 60px)'
        }} />
        {/* Gold radial glow */}
        <div style={{ position: 'absolute', top: '50%', left: '60%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(200,151,29,0.18) 0%, transparent 70%)' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to bottom, transparent, rgba(13,31,60,0.5))' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '8rem 2rem 5rem' }}>
        <div style={{ maxWidth: '52rem' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '2.5rem', height: '2px', background: 'linear-gradient(90deg, #C8971D, #e0aa30)', borderRadius: '2px', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8971D' }}>
              Chennai's Premium Furniture Manufacturer
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.25rem)' }}>
            Crafting Spaces That{' '}
            <span style={{ color: '#C8971D' }}>Inspire</span>
            {' '}&amp; Endure
          </h1>

          {/* Subtext */}
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '38rem' }}>
            Custom modular furniture and complete interior solutions — designed for your lifestyle, built with precision, delivered with pride.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '0.9rem' }}>
              Get Free Consultation
              <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-outline-gold" style={{ padding: '0.9rem 2rem', fontSize: '0.9rem' }}>
              View Our Work
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
            {[
              { value: 'Custom', label: 'Furniture Design' },
              { value: 'Chennai', label: 'Based & Serving' },
              { value: '100%', label: 'Quality Assured' },
            ].map(({ value, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.625rem', color: '#C8971D', lineHeight: 1.1 }}>{value}</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem', color: 'rgba(255,255,255,0.5)', background: 'transparent', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        aria-label="Scroll down"
      >
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  )
}
