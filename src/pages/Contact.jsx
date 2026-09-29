import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'

const services = [
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

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us — Krishna Modular | Get a Free Quote, Chennai'
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Connect to backend/email service when ready
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setForm(INITIAL)
    }, 1200)
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#C8971D' }}>Get In Touch</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Contact <span style={{ color: '#C8971D' }}>Krishna Modular</span>
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '36rem' }}>
            Ready to transform your space? Reach out for a free consultation and personalised quote.
          </p>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section style={{ background: '#F5F0E8', padding: '2.5rem 2rem', borderBottom: '1px solid #E8E2D9' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a
              href="tel:+919566026606"
              id="contact-call-btn-1"
              className="flex items-center gap-2.5 bg-[#1B3A6B] text-white px-6 py-3 rounded-lg font-['Outfit'] font-semibold text-sm hover:bg-[#2a527f] transition-colors"
            >
              <Phone size={16} /> Call: +91 95660 26606
            </a>
            <a
              href="tel:+919655834404"
              id="contact-call-btn-2"
              className="flex items-center gap-2.5 bg-[#1B3A6B] text-white px-6 py-3 rounded-lg font-['Outfit'] font-semibold text-sm hover:bg-[#2a527f] transition-colors"
            >
              <Phone size={16} /> Call: +91 96558 34404
            </a>
            <a
              href={`https://wa.me/919566026606?text=${encodeURIComponent('Hello Krishna Modular! I am interested in your services. Could you please share more details?')}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="flex items-center gap-2.5 bg-[#25D366] text-white px-6 py-3 rounded-lg font-['Outfit'] font-semibold text-sm hover:bg-[#1db954] transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <a
              href="mailto:krishnamodular3@gmail.com"
              id="contact-email-btn"
              className="flex items-center gap-2.5 bg-[#C8971D] text-white px-6 py-3 rounded-lg font-['Outfit'] font-semibold text-sm hover:bg-[#e0aa30] transition-colors"
            >
              <Mail size={16} /> Email Us
            </a>
            <a
              href="https://www.instagram.com/krishnamodular__interior/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-instagram-btn"
              className="flex items-center gap-2.5 text-white px-6 py-3 rounded-lg font-['Outfit'] font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #833ab4 0%, #c13584 40%, #e1306c 70%, #f77737 100%)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', flexShrink: 0 }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ background: '#fff' }} className="section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '3.5rem' }} className="lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <p className="section-label">Our Details</p>
              <h2 className="section-heading mb-4">
                Visit or <span>Call Us</span>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtext mb-8">
                We're based in Melmanambedu, Chennai. Visit our showroom, call us or send an enquiry using the form — our team will respond promptly.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4 p-5 rounded-lg border border-[#E8E2D9] hover:border-[#C8971D]/30 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center shrink-0 group-hover:bg-[#1B3A6B] transition-colors">
                    <MapPin size={18} className="text-[#C8971D] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-['Outfit'] font-semibold text-[#1C1C1E] text-sm mb-1">Our Address</p>
                    <p className="text-gray-500 text-sm font-['Outfit'] leading-relaxed">
                      No. 267/2A2D3, T.H. Road,<br />
                      Melmanambedu,<br />
                      Chennai - 600124,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 p-5 rounded-lg border border-[#E8E2D9] hover:border-[#C8971D]/30 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center shrink-0 group-hover:bg-[#1B3A6B] transition-colors">
                    <Phone size={18} className="text-[#C8971D] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-['Outfit'] font-semibold text-[#1C1C1E] text-sm mb-1">Phone Numbers</p>
                    <a href="tel:+919566026606" className="block text-gray-500 text-sm font-['Outfit'] hover:text-[#C8971D] transition-colors">
                      +91 95660 26606
                    </a>
                    <a href="tel:+919655834404" className="block text-gray-500 text-sm font-['Outfit'] hover:text-[#C8971D] transition-colors">
                      +91 96558 34404
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-5 rounded-lg border border-[#E8E2D9] hover:border-[#C8971D]/30 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center shrink-0 group-hover:bg-[#1B3A6B] transition-colors">
                    <Mail size={18} className="text-[#C8971D] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-['Outfit'] font-semibold text-[#1C1C1E] text-sm mb-1">Email Address</p>
                    <a href="mailto:krishnamodular3@gmail.com" className="text-gray-500 text-sm font-['Outfit'] hover:text-[#C8971D] transition-colors">
                      krishnamodular3@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <p className="section-label">Enquiry Form</p>
              <h2 className="section-heading mb-4">
                Send an <span>Enquiry</span>
              </h2>
              <div className="gold-divider" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={48} className="text-[#C8971D] mb-4" />
                  <h3 className="font-['Playfair_Display'] font-bold text-[#1B3A6B] text-xl mb-2">
                    Thank You for Your Enquiry!
                  </h3>
                  <p className="text-gray-500 font-['Outfit'] text-sm mb-6">
                    We've received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary text-sm py-2.5"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 mt-6" id="contact-enquiry-form">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-['Outfit'] text-sm font-medium text-[#1C1C1E] mb-1.5">
                      Full Name <span className="text-[#C8971D]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg font-['Outfit'] text-sm text-[#1C1C1E] placeholder:text-gray-400 focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all bg-[#F9F8F6]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block font-['Outfit'] text-sm font-medium text-[#1C1C1E] mb-1.5">
                      Phone Number <span className="text-[#C8971D]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg font-['Outfit'] text-sm text-[#1C1C1E] placeholder:text-gray-400 focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all bg-[#F9F8F6]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-['Outfit'] text-sm font-medium text-[#1C1C1E] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg font-['Outfit'] text-sm text-[#1C1C1E] placeholder:text-gray-400 focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all bg-[#F9F8F6]"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block font-['Outfit'] text-sm font-medium text-[#1C1C1E] mb-1.5">
                      Service Required <span className="text-[#C8971D]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg font-['Outfit'] text-sm text-[#1C1C1E] focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all bg-[#F9F8F6]"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-['Outfit'] text-sm font-medium text-[#1C1C1E] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, space dimensions, requirements..."
                      className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg font-['Outfit'] text-sm text-[#1C1C1E] placeholder:text-gray-400 focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all bg-[#F9F8F6] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs font-['Outfit'] text-center">
                    We typically respond within 24 hours on working days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section style={{ background: '#F9F8F6', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div className="text-center mb-8">
            <p className="section-label justify-center">Find Us</p>
            <h2 className="section-heading mb-2">
              Our <span>Location</span>
            </h2>
            <p className="text-gray-500 text-sm font-['Outfit']">
              No. 267/2A2D3, T.H. Road, Melmanambedu, Chennai - 600124
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#E8E2D9]" style={{ height: '420px' }}>
            <iframe
              title="Krishna Modular Location — Melmanambedu, Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.94853248648!2d80.21050!3d13.17300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526484b09ab271%3A0x3e9527793f60e27e!2sMelmanambedu%2C%20Chennai%2C%20Tamil%20Nadu%20600124!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
