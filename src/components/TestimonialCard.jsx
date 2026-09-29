import { Star } from 'lucide-react'

// NOTE: This component renders PLACEHOLDER testimonials until real client reviews are provided.
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      {/* Stars */}
      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} fill="#C8971D" style={{ color: '#C8971D' }} />
        ))}
      </div>

      {/* Review text */}
      <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.875rem', color: '#4B5563', lineHeight: 1.8, marginBottom: '1.375rem', fontStyle: 'italic' }}>
        &ldquo;{testimonial.review}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', paddingTop: '1rem', borderTop: '1px solid #E8E2D9' }}>
        <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: '#1B3A6B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
          {testimonial.name[0] ?? 'C'}
        </div>
        <div>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: '0.875rem', color: '#1C1C1E', marginBottom: '0.125rem' }}>{testimonial.name}</p>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: '0.72rem', color: '#9CA3AF' }}>{testimonial.project} · {testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}
