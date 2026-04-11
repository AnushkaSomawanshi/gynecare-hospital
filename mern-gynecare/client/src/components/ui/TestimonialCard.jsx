import React from 'react'

export default function TestimonialCard({ testimonial }) {
  const {
    name = 'Ananya Krishnan',
    treatment = 'IVF Treatment',
    rating = 5,
    text = 'The doctors at GyneCare were incredibly supportive throughout my IVF journey. After 3 failed attempts elsewhere, I finally conceived at GyneCare. The team is professional, empathetic, and world-class.',
    location = 'Pune',
    date = '2024-01-10',
  } = testimonial || {}

  const stars = Math.round(rating)

  return (
    <div className="card p-6 flex flex-col gap-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-lg ${i < stars ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed italic">"{text}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-accent-300 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{name}</div>
          <div className="text-xs text-gray-500">{treatment} · {location}</div>
        </div>
      </div>
    </div>
  )
}
