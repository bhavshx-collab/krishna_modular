import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

export default function ProjectCard({ project, large = false }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        textDecoration: 'none',
        /* Consistent aspect ratio — 4:3 for normal, 3:2 for large */
        aspectRatio: large ? '3 / 2' : '4 / 3',
        background: '#1B3A6B',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
      }}
      className="project-card-link"
    >
      {/* Photo */}
      {project.mainImage ? (
        <img
          src={project.mainImage}
          alt={project.name}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            transition: 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
          className="project-card-img"
        />
      ) : (
        <div className="shimmer img-placeholder" style={{ position: 'absolute', inset: 0 }} />
      )}

      {/* Permanent subtle bottom gradient (always visible) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(10,18,40,0.88) 0%, rgba(10,18,40,0.35) 45%, transparent 100%)',
        transition: 'opacity 0.4s ease',
      }} className="project-card-gradient" />

      {/* Type badge — top left */}
      <div style={{
        position: 'absolute',
        top: '0.875rem',
        left: '0.875rem',
        background: 'rgba(200,151,29,0.88)',
        backdropFilter: 'blur(6px)',
        borderRadius: '4px',
        padding: '0.25rem 0.625rem',
        fontFamily: "'Outfit', sans-serif",
        fontSize: '0.63rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#fff',
        zIndex: 2,
      }}>
        {project.type}
      </div>

      {/* Content — bottom overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 1.375rem 1.25rem',
        zIndex: 2,
        transform: 'translateY(0)',
        transition: 'transform 0.35s ease',
      }} className="project-card-content">

        {/* Location */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          marginBottom: '0.4rem',
        }}>
          <MapPin size={10} style={{ color: '#C8971D', flexShrink: 0 }} />
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.68rem',
            color: 'rgba(255,255,255,0.62)',
            letterSpacing: '0.05em',
          }}>
            {project.location}
          </span>
        </div>

        {/* Project name */}
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: large ? '1.25rem' : '1.0625rem',
          color: '#fff',
          lineHeight: 1.25,
          marginBottom: '0.625rem',
        }}>
          {project.name}
        </h3>

        {/* Services tags */}
        {project.services?.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginBottom: '0.875rem',
            maxHeight: '2.5rem',
            overflow: 'hidden',
          }}>
            {project.services.slice(0, 3).map(s => (
              <span key={s} style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '3px',
                padding: '0.2rem 0.5rem',
                background: 'rgba(255,255,255,0.06)',
              }}>
                {s}
              </span>
            ))}
          </div>
        )}

        {/* View link */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 600,
          fontSize: '0.78rem',
          color: '#C8971D',
          letterSpacing: '0.04em',
          opacity: 0,
          transform: 'translateY(4px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }} className="project-card-arrow">
          View Project <ArrowRight size={13} />
        </div>
      </div>

      {/* Hover styles via <style> */}
      <style>{`
        .project-card-link:hover .project-card-img {
          transform: scale(1.07);
        }
        .project-card-link:hover .project-card-arrow {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .project-card-link:hover .project-card-gradient {
          opacity: 1.3;
        }
      `}</style>
    </Link>
  )
}
