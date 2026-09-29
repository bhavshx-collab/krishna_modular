import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'

export default function ServiceCard({ service }) {
  const IconComponent = Icons[service.icon] || Icons.Wrench

  return (
    <div className="card group" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Icon + Title Header */}
      <div style={{ padding: '1.625rem 1.625rem 0' }}>
        <div
          style={{ width: '3rem', height: '3rem', borderRadius: '10px', background: '#F5F0E8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', transition: 'background 0.3s ease, transform 0.3s ease' }}
          className="group-hover:bg-[#1B3A6B] group-hover:scale-105"
        >
          <IconComponent size={22} style={{ color: '#C8971D', transition: 'color 0.3s ease' }} className="group-hover:text-white" />
        </div>
        <h3
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: '1.125rem', color: '#1C1C1E', marginBottom: 0, lineHeight: 1.3, transition: 'color 0.25s ease' }}
          className="group-hover:text-[#1B3A6B]"
        >
          {service.title}
        </h3>
      </div>

      {/* Gold animated divider */}
      <div style={{ margin: '0.875rem 1.625rem', height: '1px', background: '#E8E2D9', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '2.5rem', background: '#C8971D', borderRadius: '2px', transition: 'width 0.35s ease' }}
          className="group-hover:w-full"
        />
      </div>

      {/* Body */}
      <div style={{ padding: '0 1.625rem 1.625rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '1rem', flex: 1 }}>{service.shortDesc}</p>

        {service.features && (
          <ul style={{ listStyle: 'none', margin: '0 0 1.125rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {service.features.slice(0, 3).map((feat) => (
              <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#6B7280', fontFamily: "'Outfit', sans-serif" }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C8971D', flexShrink: 0 }} />
                {feat}
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/services"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#1B3A6B', textDecoration: 'none', transition: 'color 0.2s', marginTop: 'auto' }}
          className="group/link hover:text-[#C8971D]"
        >
          Learn More
          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
