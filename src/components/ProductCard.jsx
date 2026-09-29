import { Link } from 'react-router-dom'
import { ArrowRight, Tag } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="card group" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Image */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.55s ease' }}
            className="group-hover:scale-105"
          />
        ) : (
          <div className="shimmer img-placeholder" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B6914', opacity: 0.55 }}>Photo Coming Soon</span>
            <span style={{ fontSize: '0.7rem', color: '#8B6914', opacity: 0.35 }}>{product.category}</span>
          </div>
        )}

        {/* Tag */}
        {product.tag && (
          <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
            <span className="badge badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <Tag size={9} />{product.tag}
            </span>
          </div>
        )}

        {/* Hover CTA overlay */}
        <div
          style={{ position: 'absolute', inset: 0, background: 'rgba(27,58,107,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}
          className="group-hover:opacity-100"
        >
          <Link to="/products" className="btn-white" style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
            View Details
          </Link>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.125rem 1.25rem 1.375rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8971D', marginBottom: '0.35rem' }}>
          {product.category}
        </p>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1rem', color: '#1C1C1E', marginBottom: '0.5rem', lineHeight: 1.3 }}>
          {product.title}
        </h3>
        <p style={{ fontSize: '0.83rem', color: '#6B7280', lineHeight: 1.7, flex: 1, marginBottom: '1rem' }}>{product.shortDesc}</p>

        <Link
          to="/contact"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#1B3A6B', textDecoration: 'none', transition: 'color 0.2s', marginTop: 'auto' }}
          className="group/link hover:text-[#C8971D]"
        >
          Enquire Now
          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
