import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import CTA from '../components/CTA'
import { projects } from '../data/projects'

export default function Projects() {
  useEffect(() => {
    document.title = 'Our Projects — Krishna Modular | Completed Interior Projects, Chennai'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#C8971D' }}>Portfolio</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Our <span style={{ color: '#C8971D' }}>Projects</span>
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '36rem' }}>
            A showcase of our completed interior furniture and design projects across Chennai.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[#F9F8F6] section-pad">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <p className="section-label justify-center">Completed Work</p>
            <h2 className="section-heading mb-3">
              Featured <span>Projects</span>
            </h2>
            <span className="text-amber-600 text-xs font-['Outfit'] bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 inline-block">
              ⚠ Placeholder projects — to be replaced with actual completed project details and photos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
