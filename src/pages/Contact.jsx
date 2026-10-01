import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react'

/* Lucide-react doesn't export Instagram — use inline SVG */
function InstagramIcon({ size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

/* ─── Data ─────────────────────────────────────────────────────── */
const serviceOptions = [
  'Modular Kitchen',
  'Wardrobes',
  'Bedroom Furniture',
  'Living Room Furniture',
  'TV Unit',
  'Office Furniture',
  'Storage Solutions',
  'Custom Furniture',
  'Complete Interior Solutions',
  'Other',
]

const INITIAL = { name: '', phone: '', email: '', service: '', message: '' }

// Exact Google Maps listing for Krishna Modular
const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.512613247012!2d80.03736937582236!3d13.066712996962325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528ba15ae788b3%3A0x3fd9f9706b3967ee!2sKrishna%20modular!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'

const MAPS_LINK =
  'https://www.google.com/maps/place/Krishna+modular/@13.0667129,80.0399443,17z/data=!3m1!4b1!4m6!3m5!1s0x3a528ba15ae788b3:0x3fd9f9706b3967ee!8m2!3d13.0667129!4d80.0399443!16s%2Fg%2F11kqxl8tv_'

/* ─── Sub-components ────────────────────────────────────────────── */
function ContactCard({ icon: Icon, label, children, href, id }) {
  const inner = (
    <div
      id={id}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1.25rem 1.375rem',
        background: '#fff',
        border: '1.5px solid #E8E2D9',
        borderRadius: '10px',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
        cursor: href ? 'pointer' : 'default',
        textDecoration: 'none',
        width: '100%',
      }}
      className="contact-info-card"
    >
      <div style={{
        width: '2.75rem',
        height: '2.75rem',
        borderRadius: '50%',
        background: '#F5F0E8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'background 0.25s ease',
      }}
        className="contact-card-icon-wrap"
      >
        <Icon size={18} style={{ color: '#C8971D' }} />
      </div>
      <div style={{ minWidth: 0 }}>
        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#9CA3AF',
          marginBottom: '0.3rem',
        }}>
          {label}
        </p>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', color: '#1C1C1E', lineHeight: 1.65 }}>
          {children}
        </div>
      </div>
    </div>
  )

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
      {inner}
    </a>
  ) : inner
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm]           = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  useEffect(() => {
    document.title = 'Contact Us — Krishna Modular | Get a Free Quote, Chennai'
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setForm(INITIAL)
    }, 1200)
  }

  return (
    <>
      {/* ══════════════════════════════════════════
          PAGE HERO
      ══════════════════════════════════════════ */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#C8971D' }}>Get In Touch</p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            color: '#fff',
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Let's Build Something{' '}
            <span style={{ color: '#C8971D' }}>Beautiful</span>
          </h1>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.8,
            maxWidth: '38rem',
          }}>
            Ready to transform your space? Reach out for a free consultation and personalised quote — our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK CONTACT STRIP
      ══════════════════════════════════════════ */}
      <section style={{ background: '#1B3A6B', padding: '0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
          }}>
            {[
              {
                href: 'tel:+919566026606',
                icon: Phone,
                label: 'Call',
                value: '+91 95660 26606',
                id: 'quick-call-1',
              },
              {
                href: 'tel:+919655834404',
                icon: Phone,
                label: 'Call',
                value: '+91 96558 34404',
                id: 'quick-call-2',
              },
              {
                href: `https://wa.me/919566026606?text=${encodeURIComponent('Hello Krishna Modular! I am interested in your services.')}`,
                icon: MessageCircle,
                label: 'WhatsApp',
                value: 'Chat With Us',
                external: true,
                id: 'quick-whatsapp',
              },
              {
                href: 'mailto:krishnamodular3@gmail.com',
                icon: Mail,
                label: 'Email',
                value: 'Send a Message',
                id: 'quick-email',
              },
            ].map(({ href, icon: Icon, label, value, external, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '1rem 1.5rem',
                  textDecoration: 'none',
                  borderRight: '1px solid rgba(255,255,255,0.1)',
                  transition: 'background 0.2s ease',
                  flex: '1 1 180px',
                }}
                className="quick-contact-item"
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,151,29,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <Icon size={15} style={{ color: '#C8971D', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.63rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1 }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.85rem', fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MAIN CONTACT SECTION (Info + Form)
      ══════════════════════════════════════════ */}
      <section style={{ background: '#F9F8F6' }} className="section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '3rem', alignItems: 'start' }} className="lg:grid-cols-2 lg:gap-16">

            {/* ── Left: Contact Information ── */}
            <div>
              <p className="section-label">Our Details</p>
              <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
                Reach Out to <span>Our Team</span>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtext" style={{ marginBottom: '2rem' }}>
                Based in Melmanambedu, Chennai. Visit our workshop, give us a call, or send a message — we're happy to help you design your dream space.
              </p>

              {/* Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {/* Address */}
                <ContactCard icon={MapPin} label="Our Address" id="info-address">
                  <span style={{ display: 'block' }}>No. 267/2A2D3, T.H. Road,</span>
                  <span style={{ display: 'block' }}>Melmanambedu,</span>
                  <span style={{ display: 'block' }}>Chennai - 600124, Tamil Nadu, India</span>
                </ContactCard>

                {/* Phone */}
                <ContactCard icon={Phone} label="Phone Numbers" id="info-phone">
                  <a href="tel:+919566026606" style={{ display: 'block', color: '#1B3A6B', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
                    onMouseLeave={e => e.currentTarget.style.color = '#1B3A6B'}
                  >
                    +91 95660 26606
                  </a>
                  <a href="tel:+919655834404" style={{ display: 'block', color: '#1B3A6B', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
                    onMouseLeave={e => e.currentTarget.style.color = '#1B3A6B'}
                  >
                    +91 96558 34404
                  </a>
                </ContactCard>

                {/* WhatsApp */}
                <ContactCard
                  icon={MessageCircle}
                  label="WhatsApp"
                  href={`https://wa.me/919566026606?text=${encodeURIComponent('Hello Krishna Modular! I am interested in your services. Could you please share more details?')}`}
                  id="info-whatsapp"
                >
                  <span style={{ color: '#1B3A6B', fontWeight: 500 }}>Chat on WhatsApp</span>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#9CA3AF' }}>+91 95660 26606</span>
                </ContactCard>

                {/* Email */}
                <ContactCard
                  icon={Mail}
                  label="Email Address"
                  href="mailto:krishnamodular3@gmail.com"
                  id="info-email"
                >
                  <span style={{ color: '#1B3A6B', fontWeight: 500 }}>krishnamodular3@gmail.com</span>
                </ContactCard>

                {/* Instagram */}
                <ContactCard
                  icon={InstagramIcon}
                  label="Instagram"
                  href="https://www.instagram.com/krishnamodular__interior/"
                  id="info-instagram"
                >
                  <span style={{ color: '#1B3A6B', fontWeight: 500 }}>@krishnamodular__interior</span>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#9CA3AF' }}>Follow us for inspiration</span>
                </ContactCard>
              </div>

              {/* Business Hours */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1.25rem 1.375rem',
                background: '#fff',
                border: '1.5px solid #E8E2D9',
                borderRadius: '10px',
              }}>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#9CA3AF',
                  marginBottom: '0.75rem',
                }}>
                  Business Hours
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {[
                    { day: 'Monday – Saturday', hours: '9:00 AM – 7:00 PM' },
                    { day: 'Sunday', hours: 'By Appointment' },
                  ].map(({ day, hours }) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', color: '#4B5563' }}>{day}</span>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: '#1B3A6B' }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Enquiry Form ── */}
            <div style={{
              background: '#fff',
              border: '1.5px solid #E8E2D9',
              borderRadius: '14px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              boxShadow: '0 4px 32px rgba(0,0,0,0.05)',
            }}>
              <p className="section-label">Enquiry Form</p>
              <h2 className="section-heading" style={{ marginBottom: '0.5rem' }}>
                Send an <span>Enquiry</span>
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.875rem',
                color: '#9CA3AF',
                marginBottom: '1.75rem',
                lineHeight: 1.6,
              }}>
                Fill in the details below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3rem 1rem',
                  textAlign: 'center',
                  gap: '1rem',
                }}>
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    background: 'rgba(200,151,29,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <CheckCircle2 size={32} style={{ color: '#C8971D' }} />
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: '#1B3A6B',
                    fontSize: '1.375rem',
                  }}>
                    Thank You!
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.7 }}>
                    We've received your enquiry and will contact you shortly to discuss your project.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.65rem 1.5rem' }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-enquiry-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>

                  {/* Name + Phone — 2 col on sm+ */}
                  <div style={{ display: 'grid', gap: '1rem' }} className="sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name <span style={{ color: '#C8971D' }}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span style={{ color: '#C8971D' }}>*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="form-label">
                      Service Required <span style={{ color: '#C8971D' }}>*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="form-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="" disabled>Select a service...</option>
                      {serviceOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, space dimensions, requirements..."
                      className="form-input"
                      style={{ resize: 'none', lineHeight: 1.65 }}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={loading}
                    className="btn-primary"
                    style={{ justifyContent: 'center', fontSize: '0.9rem', padding: '0.85rem', marginTop: '0.25rem', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                  >
                    {loading ? (
                      <>
                        <svg style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none">
                          <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Enquiry
                      </>
                    )}
                  </button>

                  <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.75rem', color: '#9CA3AF', textAlign: 'center' }}>
                    We typically respond within 24 hours on working days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GOOGLE MAPS SECTION
      ══════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '1px solid #E8E2D9' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 2rem' }}>

          {/* Section header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div>
              <p className="section-label">Find Us</p>
              <h2 className="section-heading">
                Our <span>Location</span>
              </h2>
              <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.9rem', color: '#6B7280', marginTop: '0.5rem' }}>
                No. 267/2A2D3, T.H. Road, Melmanambedu, Chennai - 600124
              </p>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="get-directions-btn"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MapPin size={15} />
              Get Directions
              <ExternalLink size={13} style={{ opacity: 0.7 }} />
            </a>
          </div>

          {/* Map embed */}
          <div style={{
            borderRadius: '14px',
            overflow: 'hidden',
            border: '1.5px solid #E8E2D9',
            boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            position: 'relative',
          }}>
            <iframe
              title="Krishna Modular Location — No. 267/2A2D3, T.H. Road, Melmanambedu, Chennai"
              src={MAPS_EMBED}
              width="100%"
              height="480"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Below map — address card + CTA */}
          <div style={{
            display: 'grid',
            gap: '1.25rem',
            marginTop: '1.5rem',
          }}
            className="sm:grid-cols-2 lg:grid-cols-3"
          >
            <div style={{ padding: '1.25rem 1.375rem', background: '#F9F8F6', border: '1.5px solid #E8E2D9', borderRadius: '10px', display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <MapPin size={18} style={{ color: '#C8971D', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '0.85rem', color: '#1C1C1E', marginBottom: '0.25rem' }}>Workshop Address</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.82rem', color: '#6B7280', lineHeight: 1.7 }}>
                  No. 267/2A2D3, T.H. Road,<br />Melmanambedu, Chennai - 600124,<br />Tamil Nadu, India
                </p>
              </div>
            </div>
            <div style={{ padding: '1.25rem 1.375rem', background: '#F9F8F6', border: '1.5px solid #E8E2D9', borderRadius: '10px', display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <Phone size={18} style={{ color: '#C8971D', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '0.85rem', color: '#1C1C1E', marginBottom: '0.25rem' }}>Call Before You Visit</p>
                <a href="tel:+919566026606" style={{ display: 'block', fontFamily: "'Outfit',sans-serif", fontSize: '0.82rem', color: '#1B3A6B', fontWeight: 500, textDecoration: 'none' }}>+91 95660 26606</a>
                <a href="tel:+919655834404" style={{ display: 'block', fontFamily: "'Outfit',sans-serif", fontSize: '0.82rem', color: '#1B3A6B', fontWeight: 500, textDecoration: 'none' }}>+91 96558 34404</a>
              </div>
            </div>
            <div style={{ padding: '1.25rem 1.375rem', background: '#1B3A6B', border: '1.5px solid #1B3A6B', borderRadius: '10px', display: 'flex', gap: '0.875rem', alignItems: 'center' }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#fff', marginBottom: '0.25rem' }}>Book a Free Site Visit</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.6 }}>
                  We'll come to you — no obligation.
                </p>
              </div>
              <a
                href="tel:+919566026606"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.6rem 1rem',
                  background: '#C8971D',
                  color: '#fff',
                  borderRadius: '6px',
                  fontFamily: "'Outfit',sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                <Phone size={13} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INLINE STYLE: hover effects + spin
      ══════════════════════════════════════════ */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        .contact-info-card:hover {
          border-color: rgba(200,151,29,0.35) !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        .contact-info-card:hover .contact-card-icon-wrap {
          background: #1B3A6B !important;
        }
        .contact-info-card:hover .contact-card-icon-wrap svg {
          color: #fff !important;
        }

        @media (max-width: 640px) {
          .quick-contact-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            flex: 1 1 100%;
          }
        }
      `}</style>
    </>
  )
}
