import { useEffect } from 'react'
import ServiceCard from '../components/ServiceCard'
import CTA from '../components/CTA'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  useEffect(() => {
    document.title = 'Services — Krishna Modular | Modular Kitchen, Wardrobes, Interior Solutions'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#C8971D' }}>What We Offer</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Our <span style={{ color: '#C8971D' }}>Services</span>
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '36rem' }}>
            Custom furniture manufacturing and complete interior solutions for every room and every requirement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }} className="section-pad">
          <div className="section-intro centered">
            <p className="section-label">Our Services</p>
            <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>Everything Your Space <span>Needs</span></h2>
            <p className="section-subtext">
              From a single piece of furniture to a complete interior fit-out, we offer end-to-end solutions across all categories.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1.375rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section style={{ background: '#F5F0E8' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }} className="section-pad">
          <div style={{ display: 'grid', gap: '3.5rem', alignItems: 'center' }} className="lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="section-label">Our Promise</p>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>Quality You Can <span>Trust</span></h2>
              <div className="gold-divider" />
              <p className="section-subtext" style={{ marginBottom: '1rem' }}>
                Every service we offer is backed by our in-house manufacturing capability, a dedicated design team and a commitment to delivering results that exceed expectations.
              </p>
              <p className="section-subtext" style={{ marginBottom: '2rem' }}>
                We work with you from the initial consultation right through to installation — ensuring the end result perfectly matches your vision, budget and timeline.
              </p>
              <Link to="/contact" className="btn-primary">
                Discuss Your Project <ArrowRight size={16} />
              </Link>
            </div>
            <div className="img-frame" style={{ borderRadius: '10px' }}>
              <div className="img-placeholder shimmer" style={{ height: '380px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5 }}>Client Photo — Service Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
