import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA({ 
  heading = 'Ready to Transform Your Space?',
  subtext = 'Get in touch with Krishna Modular for a free consultation and bring your interior vision to life.',
  primaryLabel = 'Get Free Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Call Us Now',
  secondaryHref = 'tel:+919566026606',
  dark = true,
}) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: dark ? '#1B3A6B' : '#F5F0E8',
        padding: '5rem 2rem',
      }}
    >
      {/* Background decoration */}
      {dark && (
        <>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '24rem', height: '24rem', opacity: 0.1, borderRadius: '50%', background: 'radial-gradient(circle, #C8971D 0%, transparent 70%)', transform: 'translate(40%, -40%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '16rem', height: '16rem', opacity: 0.1, borderRadius: '50%', background: 'radial-gradient(circle, #C8971D 0%, transparent 70%)', transform: 'translate(-40%, 40%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,rgba(200,151,29,0.05) 0,rgba(200,151,29,0.05) 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px', pointerEvents: 'none' }} />
        </>
      )}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
        <p className="section-label" style={{ color: '#C8971D', justifyContent: 'center', display: 'inline-flex', marginBottom: '1rem' }}>
          Get in Touch
        </p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, marginBottom: '1.125rem', fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: dark ? '#ffffff' : '#1C1C1E', lineHeight: 1.2 }}>
          {heading}
        </h2>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.0625rem', lineHeight: 1.75, marginBottom: '2.25rem', color: dark ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>
          {subtext}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Link to={primaryTo} className="btn-primary">
            {primaryLabel}
            <ArrowRight size={16} />
          </Link>
          <a href={secondaryHref} className={dark ? 'btn-outline-gold' : 'btn-secondary'}>
            <Phone size={16} />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
