import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorCard({ doctor }) {
  const {
    _id,
    name = 'Dr. Priya Sharma',
    speciality = 'Obstetrics & Gynecology',
    qualification = 'MBBS, MS (OBG)',
    experience = 12,
    rating = 4.8,
    reviewCount = 320,
    hospitalName = 'GyneCare Pune',
    consultationFee = 600,
    city = 'Pune',
    available = true,
  } = doctor || {}

  const stars = Math.round(rating)

  return (
    <div className="card p-5 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-2xl font-bold text-primary-700 flex-shrink-0">
          {name?.charAt(4)?.toUpperCase() || 'D'}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 truncate">{name}</h3>
          <p className="text-primary-600 text-sm font-medium">{speciality}</p>
          <p className="text-gray-500 text-xs">{qualification}</p>
        </div>
        {available && (
          <span className="badge bg-green-100 text-green-700 text-xs flex-shrink-0">
            Available
          </span>
        )}
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-sm ${i < stars ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
        ))}
        <span className="text-sm font-medium text-gray-700 ml-1">{rating}</span>
        <span className="text-xs text-gray-400">({reviewCount} reviews)</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="bg-primary-50 rounded-lg p-2 text-center">
          <div className="font-bold text-primary-700">{experience}+ yrs</div>
          <div className="text-xs text-gray-500">Experience</div>
        </div>
        <div className="bg-accent-50 rounded-lg p-2 text-center">
          <div className="font-bold text-accent-700">₹{consultationFee}</div>
          <div className="text-xs text-gray-500">Consultation</div>
        </div>
      </div>

      <div className="text-xs text-gray-500 flex items-center gap-1">
        <span>🏥</span>
        <span className="truncate">{hospitalName} · {city}</span>
      </div>

      <Link
        to="/book-appointment"
        className="btn-primary text-sm text-center mt-1"
      >
        Book Appointment
      </Link>
    </div>
  )
}
