import { useEffect } from 'react'
import TestimonialCard from '../components/TestimonialCard'
import CTA from '../components/CTA'
import { testimonials } from '../data/testimonials'
import { Star } from 'lucide-react'

export default function TestimonialsPage() {
  useEffect(() => {
    document.title = 'Testimonials — Krishna Modular | Client Reviews, Chennai'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#C8971D' }}>Client Reviews</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            What Clients <span style={{ color: '#C8971D' }}>Say</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '36rem' }}>
            Hear from our clients about their experience working with Krishna Modular across Chennai.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section style={{ background: '#F5F0E8' }} className="section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div className="section-intro centered">
            <p className="section-label">Testimonials</p>
            <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
              Client <span>Experiences</span>
            </h2>
            <p className="section-subtext">
              We take pride in delivering furniture and interiors that our clients are truly proud of.
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', color: '#b45309', background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '100px', padding: '0.35rem 1.1rem', display: 'inline-block' }}>
                ⚠ Placeholder reviews — will be updated with verified reviews from clients
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section style={{ background: '#fff', padding: '4rem 2rem', borderTop: '1px solid #E8E2D9' }}>
        <div style={{ maxWidth: '44rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.35rem', marginBottom: '1rem' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} fill="#C8971D" style={{ color: '#C8971D' }} />
            ))}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#1C1C1E', fontSize: '1.625rem', marginBottom: '0.75rem' }}>
            Client Satisfaction is Our Priority
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.8 }}>
            At Krishna Modular, every project is treated with the same dedication to quality and detail — ensuring our clients are completely satisfied with the final result.
          </p>
        </div>
      </section>

      <CTA
        heading="Share Your Experience"
        subtext="If you're a Krishna Modular client and would like to share your review, please get in touch with us."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Call Us"
        secondaryHref="tel:+919566026606"
      />
    </>
  )
}
