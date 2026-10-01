import { useEffect } from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import CTA from '../components/CTA'
import Gallery, { galleryItems } from '../components/Gallery'
import { services } from '../data/services'
import { products } from '../data/products'
import { projects } from '../data/projects'
import { testimonials } from '../data/testimonials'
import { Link } from 'react-router-dom'
import { CheckCircle2, Shield, Wrench, Users, Ruler, Award, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

/* ── Data ─────────────────────────────────────────────────────── */
const whyUsPoints = [
  { icon: Ruler,        title: 'Custom Designed',      desc: 'Every piece is tailored to your exact space dimensions and personal style preferences.' },
  { icon: Wrench,       title: 'Quality Manufacturing', desc: 'We manufacture in-house using premium materials and precise craftsmanship at every stage.' },
  { icon: Shield,       title: 'Durable Materials',    desc: 'We source high-quality laminates, hardware and fittings that stand the test of time.' },
  { icon: Users,        title: 'Client-First Approach', desc: 'From design consultation to final installation, we keep you informed at every step.' },
  { icon: CheckCircle2, title: 'End-to-End Service',   desc: 'We handle everything — design, manufacturing, delivery and complete installation.' },
  { icon: Award,        title: 'Chennai Based',         desc: 'Locally based in Melmanambedu, Chennai — serving residential and commercial clients.' },
]

const processSteps = [
  { step: '01', title: 'Consultation',  desc: 'We start with a free consultation to understand your requirements, preferences and space dimensions.' },
  { step: '02', title: 'Design',        desc: 'Our designers create a custom layout tailored to your space and style.' },
  { step: '03', title: 'Manufacturing', desc: 'Your furniture is manufactured in-house at our Chennai facility with premium materials.' },
  { step: '04', title: 'Installation',  desc: 'Our expert team delivers and installs your furniture — ready to use.' },
]

const ctr = { maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }

/* ── Full-width image banner component ───────────────────────── */
function ImageBanner({ src, alt, children, height = '420px', overlay = 'rgba(10,20,48,0.68)' }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', height }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: overlay }} />
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
        {children}
      </div>
    </section>
  )
}

/* ── Main ────────────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    document.title = 'Krishna Modular — Premium Modular Furniture & Interior Solutions, Chennai'
  }, [])

  return (
    <>
      {/* ══════════════════════════════════════════════
          1. HERO — cinematic image slider
      ══════════════════════════════════════════════ */}
      <Hero />

      {/* ══════════════════════════════════════════════
          1.5 TRUST & PERFORMANCE BAR (DEEJOS Inspired)
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#0D1A33', borderBottom: '2px solid #C8971D', position: 'relative', zIndex: 10 }}>
        <div style={ctr}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            padding: '1.75rem 0',
            gap: '1.5rem',
          }}>
            {[
              { num: '500+', label: 'Luxury Projects', sub: 'Across Chennai & Tamil Nadu' },
              { num: '100%', label: 'In-House Factory', sub: 'Melmanambedu, Chennai' },
              { num: '10 Yrs', label: 'Material Warranty', sub: 'Tested Hardware & Panels' },
              { num: '45 Days', label: 'Delivery Guarantee', sub: 'From Design Sign-Off' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.125rem',
                  padding: '0.5rem 0.75rem',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 3.5vw, 2.35rem)',
                  color: '#C8971D',
                  lineHeight: 1,
                  flexShrink: 0,
                }}>
                  {stat.num}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: '#ffffff',
                    letterSpacing: '0.01em',
                  }}>
                    {stat.label}
                  </span>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.5)',
                  }}>
                    {stat.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. ABOUT — cream section with image
      ══════════════════════════════════════════════ */}
      <section id="about-section" style={{ background: '#FAF8F5' }}>
        <div style={ctr} className="section-pad">
          <div style={{ display: 'grid', gap: '3rem', alignItems: 'center' }} className="lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="section-label">About Krishna Modular</p>
              <h2 className="section-heading" style={{ marginBottom: '1.125rem' }}>
                Furniture Built With <span>Passion</span>, Delivered With Pride
              </h2>
              <div className="gold-divider" />
              <p className="section-subtext" style={{ marginBottom: '1rem' }}>
                Krishna Modular is a Chennai-based interior furniture manufacturing company dedicated to delivering premium, custom-designed furniture and complete interior solutions for homes and commercial spaces.
              </p>
              <p className="section-subtext" style={{ marginBottom: '2rem' }}>
                Based in Melmanambedu, Chennai, we specialise in modular kitchens, wardrobes, bedroom furniture, TV units, office furniture and complete interior projects. Every piece reflects our commitment to quality, precision and craftsmanship.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
                <Link to="/about" className="btn-primary">Learn About Us <ArrowRight size={15} /></Link>
                <Link to="/contact" className="btn-secondary">Enquire Now</Link>
              </div>
            </div>

            {/* Photo — double-exposure stacked frame */}
            <div style={{ position: 'relative' }}>
              <img
                src="/images/gallery/wa_2.jpeg"
                alt="Krishna Modular custom interior manufacturing in Chennai"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  display: 'block',
                  boxShadow: '0 24px 48px -12px rgba(0,0,0,0.2)',
                }}
              />
              {/* Gold accent frame offset */}
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                right: '-16px',
                width: '60%',
                height: '60%',
                border: '2px solid #C8971D',
                borderRadius: '8px',
                zIndex: -1,
                opacity: 0.45,
              }} />
              {/* Floating stat card */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '-1rem',
                background: '#1B3A6B',
                borderRadius: '8px',
                padding: '1rem 1.375rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
                minWidth: '180px',
              }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.875rem', color: '#C8971D', lineHeight: 1.1, margin: 0 }}>500+</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.25rem' }}>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. SERVICES — white
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#fff' }}>
        <div style={ctr} className="section-pad">
          <div className="section-intro centered">
            <p className="section-label">What We Offer</p>
            <h2 className="section-heading" style={{ marginBottom: '0.875rem' }}>Our <span>Services</span></h2>
            <p className="section-subtext">
              From modular kitchens to complete interior solutions — a comprehensive range of custom furniture services for every room.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1.375rem', marginBottom: '2.5rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn-secondary">View All Services <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. IMAGE BANNER — "Our Craft" full-width
      ══════════════════════════════════════════════ */}
      <ImageBanner
        src="/images/gallery/37.jpeg"
        alt="Krishna Modular craftsmanship — premium modular furniture Chennai"
        height="clamp(320px, 40vh, 520px)"
        overlay="linear-gradient(105deg, rgba(10,20,48,0.82) 0%, rgba(27,58,107,0.55) 60%, rgba(10,20,48,0.4) 100%)"
      >
        <div style={{ ...ctr, width: '100%' }}>
          <div style={{ maxWidth: '42rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', background: '#C8971D' }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8971D' }}>
                Our Craft
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Premium Materials.<br /><span style={{ color: '#C8971D' }}>Exceptional Finish.</span>
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.75rem', maxWidth: '32rem' }}>
              Every piece of furniture we build goes through rigorous quality checks — from raw material selection to final polish — before it arrives at your home.
            </p>
            <Link to="/about" className="btn-outline-gold">
              Our Process <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </ImageBanner>

      {/* ══════════════════════════════════════════════
          5. FEATURED PROJECTS — editorial photo grid
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#0F1B35' }}>
        <div style={{ ...ctr, paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <p className="section-label" style={{ color: '#C8971D' }}>Portfolio</p>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.2 }}>
                Featured <span style={{ color: '#C8971D' }}>Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="btn-outline-gold">All Projects <ArrowRight size={15} /></Link>
          </div>

          {/* Hero project + 2 smaller — asymmetric layout */}
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'auto' }}>
            {/* Large featured */}
            <div style={{ gridColumn: 'span 12' }} className="md:col-span-7">
              <ProjectCard project={projects[0]} large={true} />
            </div>
            {/* Two stacked */}
            <div style={{ gridColumn: 'span 12', display: 'grid', gap: '1rem', gridTemplateRows: '1fr 1fr' }} className="md:col-span-5">
              <ProjectCard project={projects[1]} />
              <ProjectCard project={projects[2]} />
            </div>
            {/* 4th if exists */}
            {projects[3] && (
              <div style={{ gridColumn: 'span 12' }}>
                <ProjectCard project={projects[3]} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. WHY US — photo bg + glass cards
      ══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#1B3A6B' }}>
        {/* Background photo with heavy overlay */}
        <img
          src="/images/gallery/42.jpeg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.18,
            display: 'block',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(27,58,107,0.96) 0%, rgba(15,27,53,0.92) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(200,151,29,0.04) 0, rgba(200,151,29,0.04) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, ...ctr }} className="section-pad">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ color: '#C8971D', display: 'inline-flex', justifyContent: 'center' }}>Why Us</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1.75rem,3.5vw,2.75rem)', marginBottom: '0.875rem', lineHeight: 1.2 }}>
              Why Choose <span style={{ color: '#C8971D' }}>Krishna Modular</span>
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, maxWidth: '42rem', margin: '0 auto' }}>
              We combine design expertise, quality craftsmanship and reliable service to deliver furniture you'll love for years.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1.25rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
            {whyUsPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="why-card group">
                <div className="why-card-icon"><Icon size={20} style={{ color: '#C8971D' }} /></div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#fff', fontSize: '1.0625rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. PROCESS — cream bg
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#FAF8F5' }}>
        <div style={ctr} className="section-pad">
          <div className="section-intro centered">
            <p className="section-label">How It Works</p>
            <h2 className="section-heading" style={{ marginBottom: '0.875rem' }}>Our <span>Work Process</span></h2>
            <p className="section-subtext">From your first enquiry to the final installation — simple, transparent and stress-free.</p>
          </div>
          <div style={{ display: 'grid', gap: '2rem' }} className="sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="process-step group">
                {idx < processSteps.length - 1 && <div className="process-connector" />}
                <div className="process-step-number"><span>{step.step}</span></div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: '#1C1C1E', fontSize: '1.0625rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.83rem', color: '#6B7280', lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. IMAGE BANNER — "Spaces We Love" split
      ══════════════════════════════════════════════ */}
      <section style={{ display: 'grid' }} className="lg:grid-cols-2">
        {/* Left: large photo */}
        <div style={{ position: 'relative', minHeight: '380px', overflow: 'hidden' }}>
          <img
            src="/images/gallery/wa_1.jpeg"
            alt="Krishna Modular premium residential interior Chennai"
            loading="lazy"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,48,0.35)' }} />
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8971D' }}>
              Residential
            </span>
            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.375rem', color: '#fff', marginTop: '0.35rem', lineHeight: 1.3 }}>
              Luxury Home Interiors
            </p>
          </div>
        </div>

        {/* Right: dark content */}
        <div style={{ background: '#0F1B35', display: 'flex', alignItems: 'center', padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)' }}>
          <div>
            <p className="section-label" style={{ color: '#C8971D' }}>Our Products</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.375rem)', lineHeight: 1.2, marginBottom: '1rem' }}>
              Every Room,<br /><span style={{ color: '#C8971D' }}>Perfectly Furnished</span>
            </h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.9375rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '28rem' }}>
              Browse our complete range of custom furniture for kitchens, bedrooms, living rooms, offices and commercial spaces.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
              {['Modular Kitchens', 'Custom Wardrobes', 'Bedroom Furniture', 'TV Units & Living Room', 'Office & Commercial'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C8971D', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/products" className="btn-primary">Explore Products <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. PRODUCTS GRID — light
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#fff' }}>
        <div style={ctr} className="section-pad">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <p className="section-label">Categories</p>
              <h2 className="section-heading">Product <span>Categories</span></h2>
            </div>
            <Link to="/products" className="btn-outline-gold">All Products <ArrowRight size={15} /></Link>
          </div>
          <div style={{ display: 'grid', gap: '1.375rem' }} className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          10. GALLERY — white
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#FAF8F5' }}>
        <div style={ctr} className="section-pad">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <p className="section-label">Gallery</p>
              <h2 className="section-heading">Our <span>Work</span></h2>
            </div>
            <Link to="/gallery" className="btn-outline-gold">Full Gallery <ArrowRight size={15} /></Link>
          </div>
          <Gallery items={galleryItems.filter(item => item.featured).slice(0, 8)} showFilter={false} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          11. TESTIMONIALS — cream
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px solid #E8E2D9' }}>
        <div style={ctr} className="section-pad">
          <div className="section-intro centered">
            <p className="section-label">Testimonials</p>
            <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>What Our Clients <span>Say</span></h2>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', color: '#b45309', background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '100px', padding: '0.3rem 1rem', display: 'inline-block', marginTop: '0.5rem' }}>
              Placeholder testimonials — to be replaced with verified client reviews
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1.375rem' }} className="md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          12. CTA — cinematic photo section
      ══════════════════════════════════════════════ */}
      <CTA />

      {/* ══════════════════════════════════════════════
          13. CONTACT STRIP
      ══════════════════════════════════════════════ */}
      <section style={{ background: '#FAF8F5', borderTop: '1px solid #E8E2D9' }}>
        <div style={{ ...ctr, paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'grid', textAlign: 'center', gap: '2rem' }} className="sm:grid-cols-3">
            <a href="tel:+919566026606" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.875rem', textDecoration: 'none' }} className="group">
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#EEE8DA', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s' }} className="group-hover:bg-[#1B3A6B]">
                <Phone size={18} style={{ color: '#1B3A6B', transition: 'color 0.25s' }} className="group-hover:text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '0.875rem', color: '#1C1C1E', marginBottom: '0.25rem' }}>Call Us</p>
                <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>+91 95660 26606</p>
                <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>+91 96558 34404</p>
              </div>
            </a>
            <a href="mailto:krishnamodular3@gmail.com" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.875rem', textDecoration: 'none' }} className="group">
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#EEE8DA', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s' }} className="group-hover:bg-[#1B3A6B]">
                <Mail size={18} style={{ color: '#1B3A6B', transition: 'color 0.25s' }} className="group-hover:text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '0.875rem', color: '#1C1C1E', marginBottom: '0.25rem' }}>Email Us</p>
                <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>krishnamodular3@gmail.com</p>
              </div>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#EEE8DA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={18} style={{ color: '#1B3A6B' }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '0.875rem', color: '#1C1C1E', marginBottom: '0.25rem' }}>Visit Us</p>
                <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>No. 267/2A2D3, T.H. Road,</p>
                <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>Melmanambedu, Chennai - 600124</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}