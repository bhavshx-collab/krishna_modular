import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// Gallery categories
export const CATEGORIES = ['All', 'Kitchens', 'Wardrobes', 'Bedrooms', 'Living Rooms', 'Offices', 'Custom & Pooja']

// Authentic client project photos
export const galleryItems = [
  // Kitchens
  {
    id: 1,
    category: 'Kitchens',
    title: 'Sage Green Shaker Modular Kitchen',
    alt: 'Sage green shaker modular kitchen with quartz countertop and under-cabinet LED lighting',
    image: '/images/gallery/wa_2.jpeg',
    featured: true,
  },
  {
    id: 2,
    category: 'Kitchens',
    title: 'U-Shaped Kitchen with Fluted Glass Shutters',
    alt: 'Modern U-shaped modular kitchen with fluted glass cabinets and designer backsplash',
    image: '/images/gallery/15.jpeg',
    featured: true,
  },
  {
    id: 3,
    category: 'Kitchens',
    title: 'L-Shaped Kitchen with Island Breakfast Counter',
    alt: 'L-shaped modular kitchen with island breakfast counter and vertical display niches',
    image: '/images/gallery/12.jpeg',
    featured: true,
  },
  {
    id: 4,
    category: 'Kitchens',
    title: 'Modular Kitchen Pantry & Fluted Glass Unit',
    alt: 'Tall modular kitchen pantry cabinet with fluted glass corner showcase',
    image: '/images/gallery/19.jpeg',
  },
  {
    id: 5,
    category: 'Kitchens',
    title: 'Modular Undercounter Pullout Drawers',
    alt: 'Modular kitchen undercounter soft-close drawers with ventilation grilles and quartz top',
    image: '/images/gallery/43.jpeg',
  },

  // Wardrobes
  {
    id: 6,
    category: 'Wardrobes',
    title: 'Sage Green Arched Cane Wardrobe',
    alt: 'Bespoke sage green 6-door arched wardrobe with woven cane webbing and brass handles',
    image: '/images/gallery/37.jpeg',
    featured: true,
  },
  {
    id: 7,
    category: 'Wardrobes',
    title: 'L-Shaped Corner Wardrobe with Fluted Accent',
    alt: 'L-shaped corner fitted wardrobe with fluted wood center band and integrated dressing mirror',
    image: '/images/gallery/25.jpeg',
    featured: true,
  },
  {
    id: 8,
    category: 'Wardrobes',
    title: 'Floor-to-Ceiling Contemporary Wardrobe',
    alt: 'Floor-to-ceiling bedroom wardrobe with center display shelf and horizontal fluted panels',
    image: '/images/gallery/11.jpeg',
    featured: true,
  },
  {
    id: 9,
    category: 'Wardrobes',
    title: 'Tinted Black Glass Shutter Wardrobe',
    alt: 'Luxury tinted black glass shutter wardrobe with warm interior lighting and wooden loft',
    image: '/images/gallery/36.jpeg',
  },
  {
    id: 10,
    category: 'Wardrobes',
    title: 'Minimalist White Routed Panel Wardrobe',
    alt: 'Floor-to-ceiling white wardrobe with modern geometric grid grooves and full lofts',
    image: '/images/gallery/7.jpeg',
  },

  // Bedrooms
  {
    id: 11,
    category: 'Bedrooms',
    title: 'Luxury Bedroom Suite with Acoustic Headboard',
    alt: 'Luxury bedroom suite with curved acoustic headboard wall, daybed bench and sliding wardrobe',
    image: '/images/gallery/27.jpeg',
    featured: true,
  },
  {
    id: 12,
    category: 'Bedrooms',
    title: 'Illuminated Headboard Wall & Velvet Cot',
    alt: 'Designer bedroom back-paneling with warm LED profile illumination and channel-tufted headboard',
    image: '/images/gallery/10.jpeg',
    featured: true,
  },
  {
    id: 13,
    category: 'Bedrooms',
    title: 'Floating Bedside Console with Mood Lighting',
    alt: 'Minimalist bedroom bedside console with rounded wall-mounted storage and mood light',
    image: '/images/gallery/9.jpeg',
  },
  {
    id: 14,
    category: 'Bedrooms',
    title: 'Master Bedroom with Fluted Acoustic Wall',
    alt: 'Master bedroom with fluted charcoal acoustic wall paneling and scalloped velvet headboard',
    image: '/images/gallery/41.jpeg',
    featured: true,
  },
  {
    id: 15,
    category: 'Bedrooms',
    title: 'Custom Platform Cot with Chevron Wardrobe',
    alt: 'Custom wooden platform cot with padded headboard wall and adjacent chevron wardrobe',
    image: '/images/gallery/38.jpeg',
  },

  // Living Rooms
  {
    id: 16,
    category: 'Living Rooms',
    title: 'Grand Wood-Paneled TV & Media Wall',
    alt: 'Grand living room TV entertainment wall unit with fluted charcoal accent and profile LED strips',
    image: '/images/gallery/26.jpeg',
    featured: true,
  },
  {
    id: 17,
    category: 'Living Rooms',
    title: 'Floating TV Unit with Étagère Shelving',
    alt: 'Floating TV media console with suspended metal and wood display shelving',
    image: '/images/gallery/17.jpeg',
    featured: true,
  },
  {
    id: 18,
    category: 'Living Rooms',
    title: 'Rattan Cane Mesh TV Credenza',
    alt: 'Minimalist low TV credenza with natural cane mesh drawers and curved wall molding',
    image: '/images/gallery/16.jpeg',
  },
  {
    id: 19,
    category: 'Living Rooms',
    title: 'Window Bay Bench & Media Console',
    alt: 'Living room bay window bench with integrated drawers and suspended industrial wall shelves',
    image: '/images/gallery/6.jpeg',
  },
  {
    id: 20,
    category: 'Living Rooms',
    title: 'Lotus Motif CNC Room Partition',
    alt: 'Decorative CNC cutwork room partition screen with gold lotus motifs and fluted glass',
    image: '/images/gallery/24.jpeg',
    featured: true,
  },
  {
    id: 21,
    category: 'Living Rooms',
    title: 'Majlis Custom Lounge Seating',
    alt: 'Custom Arabic Majlis floor seating lounge with fluted upholstered wall surround and coffee tables',
    image: '/images/gallery/34.jpeg',
  },

  // Offices
  {
    id: 22,
    category: 'Offices',
    title: 'Executive Marble Reception Counter',
    alt: 'Executive reception counter with curved marble fascia, oak trim and organic wave wall paneling',
    image: '/images/gallery/45.jpeg',
    featured: true,
  },
  {
    id: 23,
    category: 'Offices',
    title: 'Modern Study Workstation & Bookshelf',
    alt: 'Modern home office study desk in sage teal with overhead bookcase and integrated LED lighting',
    image: '/images/gallery/40.jpeg',
    featured: true,
  },
  {
    id: 24,
    category: 'Offices',
    title: 'L-Shaped Study Desk with Suspended Shelf',
    alt: 'Floating L-shaped study desk with suspended curved wooden shelf, hairpin leg and concrete panel',
    image: '/images/gallery/35.jpeg',
  },
  {
    id: 25,
    category: 'Offices',
    title: 'Srimukha Corporate Reception Wall',
    alt: 'Srimukha corporate office reception wall with 3D signage and oak veneer ceiling rafts',
    image: '/images/gallery/46.jpeg',
    featured: true,
  },
  {
    id: 26,
    category: 'Offices',
    title: 'Corporate Office Lobby & Reception',
    alt: 'Corporate office lobby and marble reception desk with curved glass partition and display cubbies',
    image: '/images/gallery/47.jpeg',
  },
  {
    id: 27,
    category: 'Offices',
    title: 'Executive Conference Joinery in Progress',
    alt: 'Executive conference room and custom modular joinery craftsmanship by Krishna Modular team',
    image: '/images/gallery/48.jpeg',
  },
  {
    id: 28,
    category: 'Offices',
    title: 'Commercial Studio Reception Counter',
    alt: 'Studio office reception desk with sculptural wall niches, accent lighting and waiting armchair',
    image: '/images/gallery/29.jpeg',
  },

  // Custom & Pooja
  {
    id: 29,
    category: 'Custom & Pooja',
    title: 'Lord Krishna Mandir with Fluted Cabinetry',
    alt: 'Custom illuminated Mandir unit integrated into modular storage featuring Lord Krishna backlit artwork',
    image: '/images/gallery/14.jpeg',
    featured: true,
  },
  {
    id: 30,
    category: 'Custom & Pooja',
    title: 'Tiered Wooden Mandir with Pagoda Roof',
    alt: 'Custom tiered wooden Pooja Mandir with pagoda roof ambient lighting and carved pillars',
    image: '/images/gallery/wa_3.jpeg',
    featured: true,
  },
  {
    id: 31,
    category: 'Custom & Pooja',
    title: 'Folding Pooja Doors with Brass Bells & Pichwai',
    alt: 'Traditional Pooja room folding wooden doors with Pichwai art, brass bells and fluted glass',
    image: '/images/gallery/13.jpeg',
    featured: true,
  },
  {
    id: 32,
    category: 'Custom & Pooja',
    title: 'CNC Ganesha & Lotus Jali Mandir Doors',
    alt: 'CNC cutwork Ganesha and Lotus Mandir doors with brass bell cutouts and ventilation slots',
    image: '/images/gallery/22.jpeg',
  },
  {
    id: 33,
    category: 'Custom & Pooja',
    title: 'Backlit Geometric CNC Mandir Cabinet',
    alt: 'Mandir cabinet with geometric backlit cutwork screen and lower pullout storage drawers',
    image: '/images/gallery/39.jpeg',
  },
  {
    id: 34,
    category: 'Custom & Pooja',
    title: '3D Faceted Architectural Credenza',
    alt: 'Luxury 3D faceted geometric white credenza with ball feet and gold vertical louvers',
    image: '/images/gallery/42.jpeg',
    featured: true,
  },
  {
    id: 35,
    category: 'Custom & Pooja',
    title: 'Dining Crockery Credenza with Glass Top',
    alt: 'Dining crockery storage credenza with illuminated fluted glass overhead cabinets',
    image: '/images/gallery/18.jpeg',
  },
  {
    id: 36,
    category: 'Custom & Pooja',
    title: 'Curved Floating Bathroom Vanity',
    alt: 'Curved floating bathroom vanity with fluted wood drawer fronts and ceramic vessel sink',
    image: '/images/gallery/5.jpeg',
  },
  {
    id: 37,
    category: 'Custom & Pooja',
    title: 'Bespoke Waffle Coffered Entrance Door',
    alt: 'Bespoke Japanese waffle coffered wooden entrance door with brass moon pull handle',
    image: '/images/gallery/44.jpeg',
    featured: true,
  },
  {
    id: 38,
    category: 'Custom & Pooja',
    title: 'Curved Rafter Bar Counter & Canopy',
    alt: 'Commercial bar counter with sweeping curved wooden ceiling rafters and backlit bottle shelving',
    image: '/images/gallery/wa_4.jpeg',
    featured: true,
  },
  {
    id: 39,
    category: 'Custom & Pooja',
    title: 'Green Bottle Chandelier Feature Lighting',
    alt: 'Bespoke hospitality feature chandelier crafted with illuminated green glass bottles',
    image: '/images/gallery/49.jpeg',
  },
  {
    id: 40,
    category: 'Custom & Pooja',
    title: 'Lounge Feature Wall with Bottle Racks',
    alt: 'Lounge bar feature wall with fluted acoustic green panels and integrated wine bottle display racks',
    image: '/images/gallery/50.jpeg',
  },
  {
    id: 41,
    category: 'Custom & Pooja',
    title: 'Commercial Studio Organic Wall Niches',
    alt: 'Commercial studio interior with arched organic display niches and illuminated styling alcoves',
    image: '/images/gallery/28.jpeg',
  },
  {
    id: 42,
    category: 'Custom & Pooja',
    title: 'Arched Built-in Display Shelving',
    alt: 'Custom arched built-in display shelving unit in terracotta orange with bottom storage',
    image: '/images/gallery/30.jpeg',
  },
  {
    id: 43,
    category: 'Custom & Pooja',
    title: 'Organic Oval Mirror Styling Stations',
    alt: 'Studio styling stations with organic oval mirrors, textured plaster wall and warm pendant lighting',
    image: '/images/gallery/31.jpeg',
  },
  {
    id: 44,
    category: 'Custom & Pooja',
    title: 'Sculptural Organic Screen Divider',
    alt: 'Sculptural organic screen divider with rotating wooden blocks and textured finish',
    image: '/images/gallery/32.jpeg',
  },
  {
    id: 45,
    category: 'Custom & Pooja',
    title: 'Studio Waiting Lounge & Arched Alcove',
    alt: 'Studio waiting lounge with arched display alcove, glass shelves and ambient wall sconce',
    image: '/images/gallery/33.jpeg',
  },
]

export default function Gallery({ items = galleryItems, showFilter = true }) {
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
                  ? 'bg-[#1B3A6B] text-white border-[#1B3A6B] shadow-sm'
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
            className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer bg-[#F5F0E8] border border-[#E8E2D9]/60 shadow-sm hover:shadow-md transition-shadow"
            onClick={() => openLightbox(idx)}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105 block"
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
            <div className="absolute inset-0 bg-[#1B3A6B]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg p-4">
              <div className="text-center text-white">
                <ZoomIn size={24} className="mx-auto mb-2 text-[#C8971D]" />
                <p className="font-['Playfair Display'] text-sm font-semibold leading-snug">{item.title || item.category}</p>
                <span className="inline-block mt-1 text-[11px] font-['Outfit'] uppercase tracking-wider text-[#C8971D]">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 z-10 rounded-full hover:bg-white/10 transition-all"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2.5 z-10 bg-white/10 rounded-full hover:bg-white/20 transition-all"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Image Container */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {filtered[lightbox]?.image ? (
              <img
                src={filtered[lightbox].image}
                alt={filtered[lightbox].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-[600px] h-[400px] img-placeholder rounded-lg flex flex-col items-center justify-center gap-3">
                <ZoomIn size={32} className="text-[#8B6914] opacity-40" />
                <span className="text-[#8B6914] text-sm opacity-60 font-['Outfit']">
                  {filtered[lightbox]?.alt}
                </span>
              </div>
            )}
            <div className="text-center mt-3">
              <p className="text-white font-['Playfair Display'] font-medium text-base md:text-lg">
                {filtered[lightbox]?.title}
              </p>
              <p className="text-[#C8971D] text-xs font-['Outfit'] tracking-wide mt-1">
                {filtered[lightbox]?.category} &nbsp;·&nbsp; {lightbox + 1} of {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2.5 z-10 bg-white/10 rounded-full hover:bg-white/20 transition-all"
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

