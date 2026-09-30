import { useEffect } from 'react'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery — Krishna Modular | Interior Furniture Portfolio, Chennai'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#C8971D' }}>Our Work</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Project <span style={{ color: '#C8971D' }}>Gallery</span>
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '36rem' }}>
            Browse our portfolio of completed interior furniture projects across Chennai.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white section-pad">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
          <div className="text-center mb-10">
            <p className="section-label justify-center">Gallery</p>
            <h2 className="section-heading mb-3">
              Crafted <span>Spaces</span>
            </h2>
            <p className="section-subtext" style={{ maxWidth: '36rem', margin: '0 auto' }}>
              Explore real modular kitchens, fitted wardrobes, bedroom collections, TV media walls, and custom woodwork manufactured by Krishna Modular.
            </p>
          </div>
          <Gallery showFilter={true} />

        </div>
      </section>

      <CTA />
    </>
  )
}
