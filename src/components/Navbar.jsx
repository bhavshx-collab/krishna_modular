import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/images/krishna-modular-logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])


  return (
    <>
      {/* ═══════════════════════════════════════════
          FIXED HEADER WRAPPER
          Contains both top bar and main nav in a
          single fixed container so they always
          stack correctly and never overlap.
      ═══════════════════════════════════════════ */}
      <div
        id="site-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ── Top Contact Bar (desktop only, md+) ── */}
        <div
          className="hidden md:block"
          style={{
            background: '#1B3A6B',
            height: '33px',
            flexShrink: 0,
          }}
        >
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
          }}>
            <span style={{
              fontFamily: "'Outfit',sans-serif",
              fontSize: '0.68rem',
              color: 'rgba(255,255,255,0.58)',
              letterSpacing: '0.03em',
            }}>
              No. 267/2A2D3, T.H. Road, Melmanambedu, Chennai - 600124
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {[
                { href: 'tel:+919566026606', label: '+91 95660 26606' },
                { href: 'tel:+919655834404', label: '+91 96558 34404' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: "'Outfit',sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.72)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
                >
                  <Phone size={10} />{label}
                </a>
              ))}
              <a
                href="mailto:krishnamodular3@gmail.com"
                style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.72)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
              >
                krishnamodular3@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Navbar ── */}
        <nav
          style={{
            height: '72px',
            flexShrink: 0,
            width: '100%',
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(12px)',
            boxShadow: scrolled ? '0 4px 28px rgba(0,0,0,0.1)' : '0 1px 16px rgba(0,0,0,0.05)',
            borderBottom: '1px solid #E8E2D9',
            transition: 'box-shadow 0.3s ease',
            position: 'relative',
          }}
        >
          <div style={{
            maxWidth: '80rem',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
          }}>

            {/* Logo */}
            <Link to="/" aria-label="Krishna Modular" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
              <img
                src={logo}
                alt="Krishna Modular"
                style={{ height: '3.1rem', width: 'auto', objectFit: 'contain', display: 'block' }}
                draggable={false}
              />
            </Link>

            {/* Desktop Nav Links — strictly hidden on <1024px, flex on >=1024px */}
            <ul className="navbar-desktop-nav">
              {navLinks.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      'block px-3.5 py-2 rounded-md font-medium text-[0.875rem] tracking-wide transition-all duration-200 ' +
                      (isActive
                        ? 'text-[#C8971D] font-semibold bg-[#F5F0E8]/70 shadow-xs'
                        : 'text-[#1C1C1E] hover:text-[#C8971D] hover:bg-[#FAF8F5]')
                    }
                    style={{ fontFamily: "'Outfit',sans-serif" }}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right: CTA button on desktop, Hamburger on mobile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', flexShrink: 0 }}>
              {/* CTA Button — desktop only */}
              <div className="navbar-desktop-cta">
                <Link to="/contact" className="btn-primary" style={{ fontSize: '0.825rem', padding: '0.625rem 1.35rem' }}>
                  Get Free Quote
                </Link>
              </div>

              {/* Hamburger — strictly mobile/tablet only (hidden on lg+) */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="navbar-mobile-toggle"
                aria-label="Toggle menu"
                id="mobile-menu-toggle"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown — positioned below the nav bar */}
          <div
            className="lg:hidden"
            style={{
              position: 'absolute',
              top: '72px',
              left: 0,
              right: 0,
              overflow: 'hidden',
              maxHeight: mobileOpen ? '90vh' : '0',
              transition: 'max-height 0.35s ease',
              background: '#fff',
              borderTop: mobileOpen ? '1px solid #E8E2D9' : 'none',
              boxShadow: mobileOpen ? '0 8px 32px rgba(0,0,0,0.12)' : 'none',
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: '0.75rem 1.5rem 1.5rem' }}>
              {navLinks.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    'block py-3 font-medium text-sm border-b border-[#F5F0E8] last:border-0 transition-colors ' +
                    (isActive ? 'text-[#C8971D]' : 'text-[#1C1C1E]')
                  }
                  style={{ fontFamily: "'Outfit',sans-serif" }}
                >
                  {label}
                </NavLink>
              ))}
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get Free Quote
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #E8E2D9' }}>
                  <a href="tel:+919566026606" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Outfit',sans-serif", fontSize: '0.85rem', color: '#1B3A6B', textDecoration: 'none' }}>
                    <Phone size={14} style={{ color: '#C8971D' }} />+91 95660 26606
                  </a>
                  <a href="tel:+919655834404" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Outfit',sans-serif", fontSize: '0.85rem', color: '#1B3A6B', textDecoration: 'none' }}>
                    <Phone size={14} style={{ color: '#C8971D' }} />+91 96558 34404
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ═══════════════════════════════════════════
          LAYOUT SPACER
          Pushes page content below the fixed header.
          Mobile: 72px (nav only)
          Desktop (md+): 105px (top bar 33px + nav 72px)
      ═══════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="header-spacer"
      />
    </>
  )
}