import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Layers } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="card group" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Image */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        {project.mainImage ? (
          <img
            src={project.mainImage}
            alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.55s ease' }}
            className="group-hover:scale-105"
          />
        ) : (
          <div className="shimmer img-placeholder" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B6914', opacity: 0.6 }}>Project Photo Coming Soon</span>
          </div>
        )}
        {/* Badge */}
        <div style={{ position: 'absolute', top: '0.875rem', left: '0.875rem' }}>
          <span className="badge badge-blue" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <Layers size={9} />{project.type}
          </span>
        </div>
        {/* Hover overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(17,17,20,0.7), transparent)', opacity: 0, transition: 'opacity 0.3s ease' }} className="group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem 1.375rem 1.375rem', display: 'flex', flexDirection: 'column', flex: 1, borderTop: '1px solid #E8E2D9' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1.0625rem', color: '#1C1C1E', marginBottom: '0.4rem', lineHeight: 1.3 }}>
          {project.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.75rem' }}>
          <MapPin size={11} style={{ color: '#C8971D', flexShrink: 0 }} />
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.75rem', color: '#9CA3AF' }}>{project.location}</span>
        </div>

        {project.services?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.875rem' }}>
            {project.services.map((s) => (
              <span key={s} className="badge badge-cream" style={{ fontSize: '0.65rem', padding: '0.25rem 0.625rem' }}>{s}</span>
            ))}
          </div>
        )}

        <p style={{ fontSize: '0.83rem', color: '#6B7280', lineHeight: 1.7, flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem' }}>
          {project.description}
        </p>

        <Link
          to={`/projects/${project.slug}`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#1B3A6B', textDecoration: 'none', transition: 'color 0.2s', marginTop: 'auto' }}
          className="group/link hover:text-[#C8971D]"
        >
          View Project
          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
