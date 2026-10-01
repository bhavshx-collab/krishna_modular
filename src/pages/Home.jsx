import { useEffect } from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import CTA from '../components/CTA'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { testimonials } from '../data/testimonials'
import { Link } from 'react-router-dom'
import {
  CheckCircle2, Shield, Wrench, Users, Ruler, Award,
  ArrowRight, Phone, Mail, MapPin,
} from 'lucide-react'

/* -- Shared container -- */
const ctr = { maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }

/* -- Static data -- */
const whyUsPoints = [
  { icon: Ruler,        title: 'Custom Designed',       desc: 'Every piece is tailored to your exact space dimensions and personal style preferences.' },
  { icon: Wrench,       title: 'Quality Manufacturing',  desc: 'We manufacture in-house using premium materials and precise craftsmanship at every stage.' },
  { icon: Shield,       title: 'Durable Materials',     desc: 'We source high-quality laminates, hardware and fittings that stand the test of time.' },
  { icon: Users,        title: 'Client-First Approach', desc: 'From design consultation to final installation, we keep you informed at every step.' },
  { icon: CheckCircle2, title: 'End-to-End Service',    desc: 'We handle everything — design, manufacturing, delivery and complete installation.' },
  { icon: Award,        title: 'Chennai Based',          desc: 'Locally based in Melmanambedu, Chennai — serving residential and commercial clients.' },
]

const productCategories = [
  { name: 'Modular Kitchens',    image: '/images/gallery/wa_2.jpeg', slug: 'modular-kitchens' },
  { name: 'Custom Wardrobes',    image: '/images/gallery/37.jpeg',   slug: 'wardrobes' },
  { name: 'Bedroom Furniture',   image: '/images/gallery/27.jpeg',   slug: 'bedroom-furniture' },
  { name: 'Living Room',         image: '/images/gallery/26.jpeg',   slug: 'living-room-furniture' },
  { name: 'TV Units',            image: '/images/gallery/15.jpeg',   slug: 'tv-units' },
  { name: 'Office & Commercial', image: '/images/gallery/47.jpeg',   slug: 'office-furniture' },
]

/* -- Compact Project Card -- */
function CompactProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="compact-proj-card" aria-label={`View project: ${project.name}`}>
      <div className="compact-proj-img-wrap">
        {project.mainImage
          ? <img src={project.mainImage} alt={project.name} loading="lazy" className="compact-proj-img" />
          : <div style={{ width: '100%', height: '100%', background: '#1B3A6B' }} />}
        <div className="compact-proj-overlay" />
        <span className="compact-proj-badge">{project.type}</span>
      </div>
      <div className="compact-proj-body">
        <h3 className="compact-proj-title">{project.name}</h3>
        {project.location && <p className="compact-proj-location">{project.location}</p>}
        <span className="compact-proj-link">View Project <ArrowRight size={12} /></span>
      </div>
    </Link>
  )
}

/* -- Category Photo Card -- */
function CategoryCard({ cat }) {
  return (
    <Link to="/products" className="cat-card" aria-label={`Browse ${cat.name}`}>
      <img src={cat.image} alt={cat.name} loading="lazy" className="cat-card-img" />
      <div className="cat-card-overlay" />
      <div className="cat-card-footer">
        <span className="cat-card-name">{cat.name}</span>
        <div className="cat-card-arrow"><ArrowRight size={13} style={{ color: '#fff' }} /></div>
      </div>
    </Link>
  )
}

/* -- Main -- */
export default function Home() {
  useEffect(() => {
    document.title = 'Krishna Modular — Premium Modular Furniture & Interior Solutions, Chennai'
  }, [])

  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. TRUST BAR */}
      <section style={{ background: '#0D1A33', borderBottom: '2px solid #C8971D' }}>
        <div style={ctr}>
          <div className="trust-bar">
            {[
              { num: '500+',    label: 'Projects Delivered',  sub: 'Across Chennai & Tamil Nadu' },
              { num: '100%',    label: 'In-House Factory',    sub: 'Melmanambedu, Chennai' },
              { num: '10 Yrs', label: 'Material Warranty',   sub: 'Tested Hardware & Panels' },
              { num: '45 Days',label: 'Delivery Guarantee',  sub: 'From Design Sign-Off' },
            ].map((stat, i) => (
              <div key={i} className={`trust-stat${i > 0 ? ' trust-stat--border' : ''}`}>
                <span className="trust-num">{stat.num}</span>
                <div>
                  <div className="trust-label">{stat.label}</div>
                  <div className="trust-sub">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT (light cream) */}
      <section id="about-section" className="home-section" style={{ background: '#FAF8F5' }}>
        <div style={ctr}>
          <div className="about-grid">
            <div>
              <p className="section-label">About Krishna Modular</p>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
                Furniture Built With <span>Passion</span>,<br />Delivered With Pride
              </h2>
              <div className="gold-divider" />
              <p className="section-subtext" style={{ marginBottom: '0.875rem' }}>
                Krishna Modular is a Chennai-based interior furniture manufacturing company delivering
                premium, custom-designed furniture and complete interior solutions for homes and commercial spaces.
              </p>
              <p className="section-subtext" style={{ marginBottom: '1.875rem' }}>
                Based in Melmanambedu, we specialise in modular kitchens, wardrobes, bedroom furniture,
                TV units, office furniture and complete interior projects.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link to="/about" className="btn-primary">Learn About Us <ArrowRight size={14} /></Link>
                <Link to="/contact" className="btn-secondary">Enquire Now</Link>
              </div>
            </div>
            <div className="about-img-wrap">
              <img src="/images/gallery/wa_2.jpeg" alt="Krishna Modular interior manufacturing Chennai" loading="lazy" className="about-img" />
              <div className="about-img-accent" />
              <div className="about-stat-bubble">
                <p className="about-stat-num">500+</p>
                <p className="about-stat-label">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES (white) */}
      <section className="home-section" style={{ background: '#fff' }}>
        <div style={ctr}>
          <div className="section-intro centered" style={{ marginBottom: '2.25rem' }}>
            <p className="section-label">What We Offer</p>
            <h2 className="section-heading" style={{ marginBottom: '0.625rem' }}>Our <span>Services</span></h2>
            <p className="section-subtext">From modular kitchens to complete interior solutions for every room.</p>
          </div>
          <div className="home-3col-grid">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" className="btn-secondary">View All Services <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* 5. OUR CRAFT — full-width photo banner */}
      <section className="craft-banner">
        <img src="/images/gallery/37.jpeg" alt="Krishna Modular craftsmanship" loading="lazy" className="craft-banner-img" />
        <div className="craft-banner-overlay" />
        <div className="craft-banner-inner" style={ctr}>
          <div style={{ maxWidth: '36rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '1.75rem', height: '2px', background: '#C8971D' }} />
              <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8971D' }}>Our Craft</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', color: '#fff', lineHeight: 1.15, marginBottom: '0.875rem' }}>
              Premium Materials.<br /><span style={{ color: '#C8971D' }}>Exceptional Finish.</span>
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Every piece goes through rigorous quality checks — from material selection to final polish.
            </p>
            <Link to="/about" className="btn-outline-gold">Our Process <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS — compact 3-col grid (dark navy) */}
      <section className="home-section" style={{ background: '#0F1B35' }}>
        <div style={ctr}>
          <div className="section-header-row" style={{ marginBottom: '2.25rem' }}>
            <div>
              <p className="section-label" style={{ color: '#C8971D' }}>Portfolio</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1.5rem,3vw,2.25rem)', lineHeight: 1.2 }}>
                Featured <span style={{ color: '#C8971D' }}>Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="btn-outline-gold btn-sm">View All Projects <ArrowRight size={13} /></Link>
          </div>
          <div className="home-3col-grid">
            {projects.map((project) => (
              <CompactProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRODUCTS SPLIT — real photo left, content right */}
      <section className="split-section">
        <div className="split-photo">
          <img src="/images/gallery/wa_3.jpeg" alt="Krishna Modular premium residential interior" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,48,0.28)' }} />
          <div className="split-photo-caption">
            <span className="split-photo-tag">Residential</span>
            <p className="split-photo-title">Luxury Home Interiors</p>
          </div>
        </div>
        <div className="split-content">
          <p className="section-label" style={{ color: '#C8971D' }}>Our Products</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1.375rem,2.75vw,2.125rem)', lineHeight: 1.2, marginBottom: '0.875rem' }}>
            Every Room,<br /><span style={{ color: '#C8971D' }}>Perfectly Furnished</span>
          </h2>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '26rem' }}>
            Browse our complete range of custom furniture — from modular kitchens and wardrobes to office and commercial interiors.
          </p>
          <div className="split-list">
            {['Modular Kitchens', 'Custom Wardrobes', 'Bedroom Furniture', 'TV Units & Living Room', 'Office & Commercial'].map(item => (
              <div key={item} className="split-list-item">
                <div className="split-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Link to="/products" className="btn-primary">Explore Products <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* 8. PRODUCT CATEGORIES — photo overlay cards (white) */}
      <section className="home-section" style={{ background: '#fff' }}>
        <div style={ctr}>
          <div className="section-header-row" style={{ marginBottom: '2.25rem' }}>
            <div>
              <p className="section-label">What We Build</p>
              <h2 className="section-heading">Product <span>Categories</span></h2>
            </div>
            <Link to="/products" className="btn-outline-gold btn-sm">All Products <ArrowRight size={13} /></Link>
          </div>
          <div className="home-3col-grid">
            {productCategories.map((cat) => (
              <CategoryCard key={cat.slug} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE US (navy) */}
      <section className="home-section why-section">
        <img src="/images/gallery/42.jpeg" alt="" aria-hidden="true" loading="lazy" className="why-bg-img" />
        <div className="why-bg-overlay" />
        <div style={{ position: 'relative', zIndex: 1, ...ctr }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ color: '#C8971D', justifyContent: 'center' }}>Why Us</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1.5rem,3vw,2.25rem)', lineHeight: 1.2, marginBottom: '0.625rem' }}>
              Why Choose <span style={{ color: '#C8971D' }}>Krishna Modular</span>
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '36rem', margin: '0 auto' }}>
              We combine design expertise, quality craftsmanship and reliable service.
            </p>
          </div>
          <div className="home-3col-grid">
            {whyUsPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="why-card group">
                <div className="why-card-icon"><Icon size={18} style={{ color: '#C8971D' }} /></div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#fff', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS (cream) */}
      <section className="home-section" style={{ background: '#FAF8F5', borderTop: '1px solid #E8E2D9' }}>
        <div style={ctr}>
          <div className="section-intro centered" style={{ marginBottom: '2.25rem' }}>
            <p className="section-label">Testimonials</p>
            <h2 className="section-heading" style={{ marginBottom: '0.625rem' }}>What Our Clients <span>Say</span></h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.7rem', color: '#b45309', background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '100px', padding: '0.25rem 0.875rem', display: 'inline-block', marginTop: '0.5rem' }}>
              Placeholder testimonials — to be replaced with verified client reviews
            </p>
          </div>
          <div className="home-3col-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <CTA />

      {/* 12. CONTACT STRIP */}
      <section style={{ background: '#fff', borderTop: '1px solid #E8E2D9', padding: 'clamp(1.875rem,4vw,3rem) 0' }}>
        <div style={ctr}>
          <div className="contact-strip">
            <a href="tel:+919566026606" className="contact-strip-item group">
              <div className="contact-strip-icon group-hover:bg-[#1B3A6B]">
                <Phone size={16} style={{ color: '#1B3A6B' }} className="group-hover:text-white" />
              </div>
              <div>
                <p className="contact-strip-label">Call Us</p>
                <p className="contact-strip-val">+91 95660 26606</p>
                <p className="contact-strip-val">+91 96558 34404</p>
              </div>
            </a>
            <a href="mailto:krishnamodular3@gmail.com" className="contact-strip-item group">
              <div className="contact-strip-icon group-hover:bg-[#1B3A6B]">
                <Mail size={16} style={{ color: '#1B3A6B' }} className="group-hover:text-white" />
              </div>
              <div>
                <p className="contact-strip-label">Email Us</p>
                <p className="contact-strip-val">krishnamodular3@gmail.com</p>
              </div>
            </a>
            <div className="contact-strip-item">
              <div className="contact-strip-icon">
                <MapPin size={16} style={{ color: '#1B3A6B' }} />
              </div>
              <div>
                <p className="contact-strip-label">Visit Us</p>
                <p className="contact-strip-val">No. 267/2A2D3, T.H. Road,</p>
                <p className="contact-strip-val">Melmanambedu, Chennai - 600124</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
