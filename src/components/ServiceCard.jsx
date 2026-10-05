import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'

const serviceImages = {
  'modular-kitchen': '/images/gallery/wa_2.jpeg',
  'wardrobes': '/images/gallery/37.jpeg',
  'bedroom-furniture': '/images/gallery/27.jpeg',
  'living-room-furniture': '/images/gallery/26.jpeg',
  'office-furniture': '/images/gallery/47.jpeg',
  'tv-units': '/images/gallery/26.jpeg',
  'storage-solutions': '/images/gallery/42.jpeg',
  'custom-furniture': '/images/gallery/14.jpeg',
  'complete-interiors': '/images/gallery/wa_1.jpeg',
}

export default function ServiceCard({ service }) {
  const IconComponent = Icons[service.icon] || Icons.Wrench
  const imgUrl = service.image || serviceImages[service.slug] || '/images/gallery/wa_2.jpeg'

  return (
    <div
      className="card group"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '10px',
        border: '1px solid #E8E2D9',
        background: '#fff',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
      }}
    >
      {/* Photo Header */}
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
        <img
          src={imgUrl}
          alt={service.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          className="group-hover:scale-108"
        />
        {/* Gradient overlay on image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15,27,53,0.7) 0%, rgba(15,27,53,0.15) 60%, transparent 100%)',
        }} />

        {/* Floating icon badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.25rem',
            width: '2.75rem',
            height: '2.75rem',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            transition: 'background 0.3s ease, transform 0.3s ease',
          }}
          className="group-hover:bg-[#1B3A6B] group-hover:scale-105"
        >
          <IconComponent
            size={18}
            style={{ color: '#C8971D', transition: 'color 0.3s ease' }}
            className="group-hover:text-white"
          />
        </div>
      </div>

      {/* Content Body */}
      <div style={{ padding: '1.25rem 1.35rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            fontSize: '1.15rem',
            color: '#1C1C1E',
            marginBottom: '0.4rem',
            lineHeight: 1.3,
            transition: 'color 0.25s ease',
          }}
          className="group-hover:text-[#1B3A6B]"
        >
          {service.title}
        </h3>

        {/* Gold animated divider */}
        <div style={{ height: '1px', background: '#E8E2D9', position: 'relative', overflow: 'hidden', margin: '0.6rem 0 0.85rem' }}>
          <div
            style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '2.5rem', background: '#C8971D', borderRadius: '2px', transition: 'width 0.35s ease' }}
            className="group-hover:w-full"
          />
        </div>

        <p style={{ fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
          {service.shortDesc}
        </p>

        {service.features && (
          <ul style={{ listStyle: 'none', margin: '0 0 1.25rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {service.features.slice(0, 3).map((feat) => (
              <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#52525B', fontFamily: "'Outfit', sans-serif" }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C8971D', flexShrink: 0 }} />
                {feat}
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/services"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: '0.825rem',
            color: '#1B3A6B',
            textDecoration: 'none',
            transition: 'color 0.2s',
            marginTop: 'auto',
          }}
          className="group/link hover:text-[#C8971D]"
        >
          Learn More
          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
