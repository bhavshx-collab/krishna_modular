import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { MapPin, Layers, Calendar, Wrench, ArrowLeft, Image } from 'lucide-react'
import CTA from '../components/CTA'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) {
      document.title = `${project.name} — Krishna Modular`
    }
  }, [project])

  if (!project) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F9F8F6', padding: '8rem 2rem 4rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.75rem', color: '#1B3A6B', marginBottom: '1rem' }}>Project not found</h2>
        <p style={{ color: '#6B7280', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>This project may have been removed or the link is incorrect.</p>
        <Link to="/projects" className="btn-primary">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Project Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif", marginBottom: '1.25rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C8971D'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          >
            <ArrowLeft size={14} /> Back to All Projects
          </Link>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1rem' }}>
            {project.name}
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.875rem', fontFamily: "'Outfit', sans-serif" }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>
              <MapPin size={14} style={{ color: '#C8971D' }} /> {project.location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>
              <Layers size={14} style={{ color: '#C8971D' }} /> {project.type}
            </span>
            {project.completion && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.8)' }}>
                <Calendar size={14} style={{ color: '#C8971D' }} /> {project.completion}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Project Feature Image / Placeholder */}
      <section style={{ background: '#F5F0E8', padding: '3rem 2rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {project.mainImage ? (
            <img src={project.mainImage} alt={project.name} style={{ width: '100%', maxHeight: '520px', objectFit: 'cover', borderRadius: '12px' }} />
          ) : (
            <div className="shimmer img-placeholder" style={{ height: '420px', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', border: '1px solid #E8E2D9' }}>
              <Image size={40} style={{ color: '#C8971D', opacity: 0.5 }} />
              <span style={{ color: '#8B6914', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                Main Project Photo Coming Soon
              </span>
              <span style={{ color: '#6B7280', fontSize: '0.8rem', fontFamily: "'Outfit', sans-serif" }}>{project.name}</span>
            </div>
          )}
        </div>
      </section>

      {/* Project Details */}
      <section style={{ background: '#fff' }} className="section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gap: '3.5rem' }} className="lg:grid-cols-3">
            {/* Overview Sidebar */}
            <div className="lg:col-span-1">
              <div style={{ background: '#F5F0E8', borderRadius: '12px', padding: '2rem 1.75rem', position: 'sticky', top: '7rem', border: '1px solid #E8E2D9' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#1C1C1E', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                  Project Overview
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem' }}>
                    <Layers size={18} style={{ color: '#C8971D', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontFamily: "'Outfit', sans-serif", textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.15rem' }}>Project Type</p>
                      <p style={{ color: '#1C1C1E', fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.9rem' }}>{project.type}</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem' }}>
                    <MapPin size={18} style={{ color: '#C8971D', flexShrink: 0, marginTop: '0.15rem' }} />
                    <div>
                      <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontFamily: "'Outfit', sans-serif", textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.15rem' }}>Location</p>
                      <p style={{ color: '#1C1C1E', fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.9rem' }}>{project.location}</p>
                    </div>
                  </li>
                  {project.services?.length > 0 && (
                    <li style={{ display: 'flex', gap: '0.75rem' }}>
                      <Wrench size={18} style={{ color: '#C8971D', flexShrink: 0, marginTop: '0.15rem' }} />
                      <div>
                        <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontFamily: "'Outfit', sans-serif", textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.35rem' }}>Services</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                          {project.services.map((s) => (
                            <span key={s} className="badge badge-cream" style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem' }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    </li>
                  )}
                  {project.completion && (
                    <li style={{ display: 'flex', gap: '0.75rem' }}>
                      <Calendar size={18} style={{ color: '#C8971D', flexShrink: 0, marginTop: '0.15rem' }} />
                      <div>
                        <p style={{ fontSize: '0.7rem', color: '#9CA3AF', fontFamily: "'Outfit', sans-serif", textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '0.15rem' }}>Timeline</p>
                        <p style={{ color: '#1C1C1E', fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '0.9rem' }}>{project.completion}</p>
                      </div>
                    </li>
                  )}
                </ul>

                <div style={{ marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid #E8E2D9' }}>
                  <p style={{ fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif", color: '#6B7280', marginBottom: '1rem' }}>Interested in a similar custom interior?</p>
                  <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem', fontSize: '0.85rem' }}>
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Description & Gallery */}
            <div className="lg:col-span-2">
              <p className="section-label">Project Details</p>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
                About This <span>Project</span>
              </h2>
              <div className="gold-divider" />
              <p className="section-subtext" style={{ marginBottom: '1.75rem' }}>{project.description}</p>

              {/* Placeholder note if applicable */}
              {project.name.includes('To Be Updated') && (
                <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '8px', padding: '1rem 1.25rem', fontSize: '0.85rem', color: '#b45309', fontFamily: "'Outfit', sans-serif", marginBottom: '2rem' }}>
                  ⚠ Client project information will be updated with actual project photos and specifications.
                </div>
              )}

              {/* Gallery Grid */}
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, color: '#1C1C1E', fontSize: '1.35rem', marginBottom: '1.25rem', marginTop: '2.5rem' }}>
                Project Gallery
              </h3>

              {project.gallery?.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                  {project.gallery.map((img, i) => (
                    <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', aspectRatio: '1/1' }}>
                      <img src={img} alt={`${project.name} - ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="shimmer img-placeholder" style={{ borderRadius: '8px', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <Image size={24} style={{ color: '#C8971D', opacity: 0.4 }} />
                      <span style={{ fontSize: '0.65rem', color: '#8B6914', opacity: 0.6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Photo {i + 1}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading="Interested in a Similar Project?"
        subtext="Speak with our team to discuss your space requirements and get a free design consultation."
        primaryLabel="Get Free Consultation"
        primaryTo="/contact"
      />
    </>
  )
}
