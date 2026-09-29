import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// Gallery categories
const CATEGORIES = ['All', 'Kitchens', 'Wardrobes', 'Bedrooms', 'Living Rooms', 'Offices', 'Other Interiors']

// Placeholder gallery items — replace with actual images
const placeholderItems = CATEGORIES.slice(1).flatMap((cat, ci) =>
  Array.from({ length: 3 }, (_, i) => ({
    id: ci * 3 + i + 1,
    category: cat,
    alt: `${cat} interior — photo ${i + 1}`,
    image: null,
  }))
)

export default function Gallery({ items = placeholderItems, showFilter = true }) {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null) // index into filtered array

  const filtered = active === 'All' ? items : items.filter((it) => it.category === active)

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)

  const prev = useCallback(() => {
    setLightbox((i) => (i === 0 ? filtered.length - 1 : i - 1))
  }, [filtered.length])

  const next = useCallback(() => {
    setLightbox((i) => (i === filtered.length - 1 ? 0 : i + 1))
  }, [filtered.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prev, next])

  return (
    <div>
      {/* Category Filter */}
      {showFilter && (
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-['Outfit'] font-medium transition-all duration-200 border ${
                active === cat
                  ? 'bg-[#1B3A6B] text-white border-[#1B3A6B]'
                  : 'bg-white text-gray-600 border-[#E8E2D9] hover:border-[#C8971D] hover:text-[#C8971D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Grid */}
      <div className="gallery-grid">
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(idx)}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className="w-full img-placeholder shimmer gallery-item"
                style={{ height: `${200 + ((item.id * 47) % 160)}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <ZoomIn size={20} className="text-[#8B6914] opacity-40" />
                <span className="text-[10px] tracking-widest uppercase text-[#8B6914] opacity-50">
                  {item.category}
                </span>
                <span className="text-[9px] text-[#8B6914] opacity-30">Photo Coming Soon</span>
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#1B3A6B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <ZoomIn size={24} className="mx-auto mb-2" />
                <p className="font-['Outfit'] text-sm font-medium">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            {filtered[lightbox]?.image ? (
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <div className="w-[600px] h-[400px] img-placeholder rounded-lg flex-col gap-3">
                <ZoomIn size={32} className="text-[#8B6914] opacity-40" />
                <span className="text-[#8B6914] text-sm opacity-60 font-['Outfit']">
                  {filtered[lightbox]?.alt}
                </span>
                <span className="text-[#8B6914] text-xs opacity-40">Image to be added by client</span>
              </div>
            )}
            <p className="text-center text-white/50 text-sm font-['Outfit'] mt-3">
              {filtered[lightbox]?.category} · {lightbox + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
