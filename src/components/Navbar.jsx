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
  const [scrolled, setScrolled] = useState(false)
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

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !scrolled

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className="hidden md:block"
        style={{ position: 'fixed', left: 0, right: 0, top: 0, zIndex: 51, background: '#1B3A6B' }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.45rem 2rem' }}>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.58)', letterSpacing: '0.03em' }}>
            No. 267/2A2D3, T.H. Road, Melmanambedu, Chennai - 600124
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="tel:+919566026606" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: "'Outfit',sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.72)', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
            >
              <Phone size={10} />+91 95660 26606
            </a>
            <a href="tel:+919655834404" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: "'Outfit',sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.72)', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
            >
              <Phone size={10} />+91 96558 34404
            </a>
            <a href="mailto:krishnamodular3@gmail.com" style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.68rem', color: 'rgba(255,255,255,0.72)', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
            >
              krishnamodular3@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          position: 'fixed',
          left: 0, right: 0,
          top: 0,
          zIndex: 40,
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
          background: isTransparent ? 'transparent' : 'rgba(255,255,255,0.97)',
          backdropFilter: isTransparent ? 'none' : 'blur(14px)',
          boxShadow: isTransparent ? 'none' : '0 1px 24px rgba(0,0,0,0.07)',
          borderBottom: isTransparent ? 'none' : '1px solid #E8E2D9',
        }}
        className={isTransparent ? 'md:[top:0px]' : 'md:[top:33px]'}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: '72px' }}>

          {/* Logo */}
          <Link to="/" aria-label="Krishna Modular" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            {isTransparent ? (
              <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)', borderRadius: '8px', padding: '0.3rem 0.5rem' }}>
                <img src={logo} alt="Krishna Modular" style={{ height: '2.75rem', width: 'auto', objectFit: 'contain', display: 'block' }} draggable={false} />
              </div>
            ) : (
              <img src={logo} alt="Krishna Modular" style={{ height: '3rem', width: 'auto', objectFit: 'contain', display: 'block' }} draggable={false} />
            )}
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <NavLink to={path} end={path === '/'}
                  className={({ isActive }) =>
                    'block px-3.5 py-2 rounded font-medium text-sm tracking-wide transition-colors duration-200 ' +
                    (isActive ? 'text-[#C8971D]' : isTransparent ? 'text-white/90 hover:text-[#C8971D]' : 'text-[#1C1C1E] hover:text-[#C8971D]')
                  }
                  style={{ fontFamily: "'Outfit',sans-serif" }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.65rem 1.375rem' }}>
              Get Free Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden"
            style={{ padding: '0.5rem', border: 'none', background: 'transparent', cursor: 'pointer', color: isTransparent ? '#fff' : '#1B3A6B', display: 'flex', alignItems: 'center' }}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className="lg:hidden"
          style={{ overflow: 'hidden', maxHeight: mobileOpen ? '90vh' : '0', transition: 'max-height 0.35s ease', background: '#fff', borderTop: mobileOpen ? '1px solid #E8E2D9' : 'none' }}
        >
          <div style={{ padding: '0.75rem 1.5rem 1.5rem' }}>
            {navLinks.map(({ label, path }) => (
              <NavLink key={path} to={path} end={path === '/'}
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

      {/* Spacer for desktop top bar */}
      <div className="hidden md:block" style={{ height: '33px' }} />
    </>
  )
}