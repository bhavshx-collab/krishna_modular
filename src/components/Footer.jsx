import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import logo from '../assets/images/krishna-modular-logo.png'

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Modular Kitchen', path: '/services' },
    { label: 'Wardrobes', path: '/services' },
    { label: 'Bedroom Furniture', path: '/services' },
    { label: 'TV Units', path: '/services' },
    { label: 'Office Furniture', path: '/services' },
    { label: 'Custom Furniture', path: '/services' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#111114] text-white">
      {/* Main Footer */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 2rem 4rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              {/* Logo on dark background — use a white-card approach */}
              <div className="bg-white rounded-xl px-4 py-3 inline-block">
                <img
                  src={logo}
                  alt="Krishna Modular"
                  className="h-14 w-auto object-contain"
                  draggable={false}
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-['Outfit'] mb-6">
              Premium modular furniture and interior solutions, manufactured with precision and crafted with care in Chennai, Tamil Nadu.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C8971D] hover:text-[#C8971D] transition-all" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C8971D] hover:text-[#C8971D] transition-all" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C8971D] hover:text-[#C8971D] transition-all" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-sm tracking-[0.15em] uppercase text-[#C8971D] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-['Outfit'] transition-colors group"
                  >
                    <ArrowRight size={12} className="text-[#C8971D] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-sm tracking-[0.15em] uppercase text-[#C8971D] mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-['Outfit'] transition-colors group"
                  >
                    <ArrowRight size={12} className="text-[#C8971D] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-sm tracking-[0.15em] uppercase text-[#C8971D] mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60 font-['Outfit']">
                <MapPin size={16} className="text-[#C8971D] shrink-0 mt-0.5" />
                <span>No. 267/2A2D3, T.H. Road,<br />Melmanambedu,<br />Chennai - 600124</span>
              </li>
              <li>
                <a
                  href="tel:+919566026606"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white font-['Outfit'] transition-colors"
                >
                  <Phone size={16} className="text-[#C8971D] shrink-0" />
                  +91 95660 26606
                </a>
              </li>
              <li>
                <a
                  href="tel:+919655834404"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white font-['Outfit'] transition-colors"
                >
                  <Phone size={16} className="text-[#C8971D] shrink-0" />
                  +91 96558 34404
                </a>
              </li>
              <li>
                <a
                  href="mailto:krishnamodular3@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white font-['Outfit'] transition-colors"
                >
                  <Mail size={16} className="text-[#C8971D] shrink-0" />
                  krishnamodular3@gmail.com
                </a>
              </li>
            </ul>
          </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1.125rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }} className="sm:flex-row">
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            &copy; {new Date().getFullYear()} Krishna Modular. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
            Interior Furniture Manufacturing &mdash; Chennai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  )
}
