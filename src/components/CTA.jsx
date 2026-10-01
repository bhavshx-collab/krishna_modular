import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA({
  heading = 'Ready to Transform Your Space?',
  subtext = 'Get in touch with Krishna Modular for a free consultation and bring your interior vision to life.',
  primaryLabel = 'Get Free Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Call Us Now',
  secondaryHref = 'tel:+919566026606',
  /* bgImage: use a real project photo for a cinematic look */
  bgImage = '/images/gallery/wa_3.jpeg',
}) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '420px', display: 'flex', alignItems: 'center' }}>
      {/* Background photo */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          display: 'block',
        }}
      />
      {/* Dark overlay — navy + gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(10,20,48,0.91) 0%, rgba(27,58,107,0.80) 60%, rgba(10,20,48,0.88) 100%)',
      }} />
      {/* Gold accent top border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent 0%, #C8971D 40%, #e0aa30 60%, transparent 100%)' }} />
      {/* Subtle dot texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(200,151,29,0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '52rem',
        margin: '0 auto',
        textAlign: 'center',
        padding: '5.5rem 2rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ width: '2rem', height: '1.5px', background: '#C8971D' }} />
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8971D' }}>
            Get in Touch
          </span>
          <div style={{ width: '2rem', height: '1.5px', background: '#C8971D' }} />
        </div>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          marginBottom: '1.125rem',
          fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
          color: '#ffffff',
          lineHeight: 1.15,
        }}>
          {heading}
        </h2>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '1.05rem',
          lineHeight: 1.8,
          marginBottom: '2.5rem',
          color: 'rgba(255,255,255,0.72)',
          maxWidth: '38rem',
          margin: '0 auto 2.5rem',
        }}>
          {subtext}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Link to={primaryTo} className="btn-primary">
            {primaryLabel} <ArrowRight size={16} />
          </Link>
          <a href={secondaryHref} className="btn-outline-gold">
            <Phone size={16} /> {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
