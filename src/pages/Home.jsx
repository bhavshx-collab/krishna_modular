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

const whyUsPoints = [
  { icon: Ruler,        title: 'Custom Designed',       desc: 'Every piece is tailored to your exact space dimensions and personal style preferences.' },
  { icon: Wrench,       title: 'Quality Manufacturing',  desc: 'We manufacture in-house using premium materials and precise craftsmanship at every stage.' },
  { icon: Shield,       title: 'Durable Materials',     desc: 'We source high-quality laminates, hardware and fittings that stand the test of time.' },
  { icon: Users,        title: 'Client-First Approach',  desc: 'From design consultation to final installation, we keep you informed at every step.' },
  { icon: CheckCircle2, title: 'End-to-End Service',    desc: 'We handle everything — design, manufacturing, delivery and complete installation.' },
  { icon: Award,        title: 'Chennai Based',          desc: 'Locally based in Melmanambedu, Chennai — serving residential and commercial clients.' },
]

const processSteps = [
  { step: '01', title: 'Consultation',  desc: 'We start with a free consultation to understand your requirements, preferences and space dimensions.' },
  { step: '02', title: 'Design',        desc: 'Our designers create a custom layout and 3D visualisation tailored to your space and style.' },
  { step: '03', title: 'Manufacturing', desc: 'Your furniture is manufactured in-house at our Chennai facility with premium materials and quality checks.' },
  { step: '04', title: 'Installation',  desc: 'Our expert team delivers and installs your furniture with professional finishing — ready to use.' },
]

const ctr = { maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }

export default function Home() {
  useEffect(() => {
    document.title = 'Krishna Modular — Premium Modular Furniture & Interior Solutions, Chennai'
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <Hero />

      {/* ── ABOUT ── */}
      <section id="about-section" style={{ background: '#F5F0E8' }}>
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
                Based in Melmanambedu, Chennai, we specialise in modular kitchens, wardrobes, bedroom furniture, TV units, office furniture and complete interior projects. Every piece we manufacture reflects our commitment to quality, precision and craftsmanship.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
                <Link to="/about" className="btn-primary">Learn About Us <ArrowRight size={15} /></Link>
                <Link to="/contact" className="btn-secondary">Enquire Now</Link>
              </div>
            </div>
            <div className="img-frame" style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)' }}>
              <img
                src="/images/gallery/wa_2.jpeg"
                alt="Krishna Modular custom interior manufacturing and modular furniture in Chennai"
                loading="lazy"
                style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '10px', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: '#fff' }}>
        <div style={ctr} className="section-pad">
          <div className="section-intro centered">
            <p className="section-label">What We Offer</p>
            <h2 className="section-heading" style={{ marginBottom: '0.875rem' }}>Our <span>Services</span></h2>
            <p className="section-subtext">
              From modular kitchens to complete interior solutions, we offer a comprehensive range of custom furniture services for every room.
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

      {/* ── PROJECTS ── */}
      <section style={{ background: '#F9F8F6' }}>
        <div style={ctr} className="section-pad">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="section-heading">Featured <span>Projects</span></h2>
            </div>
            <Link to="/projects" className="btn-outline-gold">All Projects <ArrowRight size={15} /></Link>
          </div>
          <div style={{ display: 'grid', gap: '1.375rem' }} className="md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: '#1B3A6B', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,rgba(200,151,29,0.05) 0,rgba(200,151,29,0.05) 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, ...ctr }} className="section-pad">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ color: '#C8971D', display: 'inline-flex', justifyContent: 'center' }}>Why Us</p>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1.75rem,3.5vw,2.75rem)', marginBottom: '0.875rem', lineHeight: 1.2 }}>
              Why Choose <span style={{ color: '#C8971D' }}>Krishna Modular</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, maxWidth: '42rem', margin: '0 auto' }}>
              We combine design expertise, quality craftsmanship and reliable service to deliver furniture you will love for years.
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

      {/* ── PROCESS ── */}
      <section style={{ background: '#fff' }}>
        <div style={ctr} className="section-pad">
          <div className="section-intro centered">
            <p className="section-label">How It Works</p>
            <h2 className="section-heading" style={{ marginBottom: '0.875rem' }}>Our <span>Work Process</span></h2>
            <p className="section-subtext">From your first enquiry to the final installation, we make the process simple, transparent and stress-free.</p>
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

      {/* ── PRODUCTS ── */}
      <section style={{ background: '#F9F8F6' }}>
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

      {/* ── GALLERY ── */}
      <section style={{ background: '#fff' }}>
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

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#F5F0E8' }}>
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

      {/* ── CTA ── */}
      <CTA />

      {/* ── CONTACT STRIP ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E8E2D9' }}>
        <div style={{ ...ctr, paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'grid', textAlign: 'center', gap: '2rem' }} className="sm:grid-cols-3">
            <a href="tel:+919566026606" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.875rem', textDecoration: 'none' }} className="group">
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s' }} className="group-hover:bg-[#1B3A6B]">
                <Phone size={18} style={{ color: '#1B3A6B', transition: 'color 0.25s' }} className="group-hover:text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '0.875rem', color: '#1C1C1E', marginBottom: '0.25rem' }}>Call Us</p>
                <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>+91 95660 26606</p>
                <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>+91 96558 34404</p>
              </div>
            </a>
            <a href="mailto:krishnamodular3@gmail.com" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.875rem', textDecoration: 'none' }} className="group">
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.25s' }} className="group-hover:bg-[#1B3A6B]">
                <Mail size={18} style={{ color: '#1B3A6B', transition: 'color 0.25s' }} className="group-hover:text-white" />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '0.875rem', color: '#1C1C1E', marginBottom: '0.25rem' }}>Email Us</p>
                <p style={{ fontSize: '0.83rem', color: '#6B7280' }}>krishnamodular3@gmail.com</p>
              </div>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', background: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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