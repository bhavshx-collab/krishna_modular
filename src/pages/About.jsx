import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import { CheckCircle2, MapPin, ArrowRight, ShieldCheck } from 'lucide-react'

const values = [
  { title: 'Precision Craftsmanship', desc: 'Every joint, finish and fitting is executed with meticulous attention to detail.' },
  { title: 'Custom Design', desc: 'We design to your exact space, taste and functional requirements.' },
  { title: 'Quality Materials', desc: 'We source premium laminates, hardware and structural materials for lasting durability.' },
  { title: 'Transparent Process', desc: "You're kept informed at every stage — from design sign-off to installation day." },
  { title: 'Client Focus', desc: 'Your satisfaction is our priority. We work until the result is exactly what you envisioned.' },
  { title: 'Local Expertise', desc: 'Chennai-based and locally experienced, we understand what Indian homes and offices need.' },
]

const approach = [
  { num: '01', heading: 'Understand Your Needs', body: 'We begin by listening. Our consultants meet with you to understand your space, lifestyle, budget and aesthetic vision.' },
  { num: '02', heading: 'Design & Visualise', body: 'Our design team creates detailed plans and visualisations so you can see your furniture before it\'s built.' },
  { num: '03', heading: 'Manufacture with Care', body: 'Every piece is manufactured at our in-house facility in Chennai using quality materials and precise techniques.' },
  { num: '04', heading: 'Install & Complete', body: 'Our experienced installation team delivers and fits your furniture professionally with a thorough final review.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us — Krishna Modular | Interior Furniture Manufacturing, Chennai'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#C8971D' }}>About Us</p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Crafting Premium Furniture<br />
            <span style={{ color: '#C8971D' }}>Since Our Beginning</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '36rem' }}>
            A Chennai-based interior furniture manufacturing company dedicated to quality, custom design and lasting craftsmanship.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ background: '#fff' }} className="section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '3.5rem', alignItems: 'center' }} className="lg:grid-cols-2">
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
                Interior Furniture <span>Manufacturers</span> in Chennai
              </h2>
              <div className="gold-divider" />
              <p className="section-subtext" style={{ marginBottom: '1rem' }}>
                Krishna Modular is a professional interior furniture manufacturing company based in Melmanambedu, Chennai. We specialise in designing, manufacturing and installing custom modular furniture for residential homes, apartments and commercial offices across Chennai.
              </p>
              <p className="section-subtext" style={{ marginBottom: '1rem' }}>
                Our team of skilled craftsmen and designers work closely with each client to understand their space and vision — delivering furniture that is tailored in every detail. From a single wardrobe to a complete home interior, we approach every project with the same level of care and precision.
              </p>
              <p className="section-subtext" style={{ marginBottom: '2rem' }}>
                We are committed to using quality materials, following clean manufacturing processes and ensuring that every installation meets the highest standards of finish and function.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1B3A6B', fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.9rem' }}>
                <MapPin size={18} style={{ color: '#C8971D', flexShrink: 0 }} />
                <span>No. 267/2A2D3, T.H. Road, Melmanambedu, Chennai - 600124</span>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 35px -10px rgba(0,0,0,0.18)', border: '1px solid #E8E2D9' }}>
                <img
                  src="/images/gallery/48.jpeg"
                  alt="Krishna Modular craftsman in-house manufacturing and joinery execution in Chennai"
                  loading="lazy"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-1rem', left: '-1rem', width: '100%', height: '100%', border: '2px solid rgba(200, 151, 29, 0.35)', borderRadius: '12px', zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ background: '#F5F0E8' }} className="section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div className="section-intro centered">
            <p className="section-label">Core Values</p>
            <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>What <span>Defines</span> Us</h2>
            <p className="section-subtext">Our values guide every decision we make — from the materials we choose to the way we communicate with our clients.</p>
          </div>
          <div style={{ display: 'grid', gap: '1.375rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, desc }) => (
              <div key={title} className="value-card">
                <CheckCircle2 size={20} style={{ color: '#C8971D', marginBottom: '0.875rem' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1.0625rem', color: '#1C1C1E', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ background: '#fff' }} className="section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div className="section-intro centered">
            <p className="section-label">Our Approach</p>
            <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
              How We <span>Work</span>
            </h2>
            <p className="section-subtext">A systematic, transparent process tailored to give you full confidence at every phase.</p>
          </div>

          <div style={{ display: 'grid', gap: '2rem' }} className="sm:grid-cols-2 lg:grid-cols-4">
            {approach.map(({ num, heading, body }) => (
              <div key={num} className="card group" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '2.5rem', color: 'rgba(200, 151, 29, 0.35)', lineHeight: 1, marginBottom: '1rem', transition: 'color 0.25s' }} className="group-hover:text-[#C8971D]">
                  {num}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#1C1C1E', fontSize: '1.125rem', marginBottom: '0.5rem' }}>{heading}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Capabilities */}
      <section style={{ background: '#F9F8F6' }} className="section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '3.5rem', alignItems: 'center' }} className="lg:grid-cols-2">
            <div style={{ position: 'relative' }} className="order-2 lg:order-1">
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #E8E2D9', boxShadow: '0 12px 35px -10px rgba(0,0,0,0.18)', height: '400px', position: 'relative' }}>
                <img
                  src="/images/gallery/45.jpeg"
                  alt="Krishna Modular in-house manufacturing machinery and joinery"
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,27,53,0.7) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '8px', background: 'rgba(200,151,29,0.9)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8971D' }}>In-House Precision</p>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '0.95rem', color: '#fff', margin: 0 }}>100% Controlled Joinery Execution</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="section-label">Our Facility</p>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
                Manufacturing <span>Capabilities</span>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtext" style={{ marginBottom: '1rem' }}>
                All our furniture is manufactured at our in-house production facility in Chennai. We maintain direct control over every stage of production — from raw material procurement to the final finishing process.
              </p>
              <p className="section-subtext" style={{ marginBottom: '1.5rem' }}>
                Our workshop is equipped to handle both residential and commercial projects of varying scales. We do not outsource our manufacturing — ensuring consistent quality and faster turnaround times for our clients.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['In-house manufacturing facility in Chennai', 'Residential & commercial capabilities', 'Custom sizing and architectural specifications', 'Premium material & hardware sourcing', 'Multi-point quality checks before dispatch'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontFamily: "'Outfit', sans-serif", color: '#4B5563' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C8971D', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn-primary">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ background: '#1B3A6B', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <MapPin size={32} style={{ color: '#C8971D', margin: '0 auto 1rem' }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginBottom: '0.75rem' }}>
            Serving Chennai &amp; Surrounding Areas
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.75 }}>
            Based in Melmanambedu, Chennai, we serve clients across Chennai and its surrounding areas for both residential and commercial interior furniture projects.
          </p>
        </div>
      </section>

      <CTA />
    </>
  )
}
