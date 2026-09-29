import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import CTA from '../components/CTA'
import { products } from '../data/products'

export default function Products() {
  useEffect(() => {
    document.title = 'Products — Krishna Modular | Modular Furniture Categories, Chennai'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: '#C8971D' }}>Our Range</p>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.15, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Furniture <span style={{ color: '#C8971D' }}>Categories</span>
          </h1>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: '36rem' }}>
            Browse our range of custom modular furniture categories — each built to order, designed for your space.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ background: '#F9F8F6' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }} className="section-pad">
          <div className="section-intro centered">
            <p className="section-label">Products</p>
            <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>Our <span>Furniture</span> Range</h2>
            <p className="section-subtext">
              All furniture is custom-designed and manufactured to your specifications. Browse our categories and enquire for a personalised quote.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', color: '#b45309', background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '100px', padding: '0.3rem 1rem', display: 'inline-block' }}>
              Product images will be updated once provided by the client
            </span>
          </div>
          <div style={{ display: 'grid', gap: '1.375rem' }} className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
