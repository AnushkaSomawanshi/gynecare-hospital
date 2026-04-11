import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const hospitalData = {
  Mumbai: [
    { _id: '1', name: 'GyneCare Hospital, Andheri', address: 'Lokhandwala Complex, Andheri West, Mumbai 400053', phone: '+91-22-6900-1234', facilities: ['NICU', 'Blood Bank', 'IVF Lab', '24x7 OT'], doctors: 38, beds: 120 },
    { _id: '2', name: 'GyneCare Hospital, BKC', address: 'Bandra Kurla Complex, Bandra East, Mumbai 400051', phone: '+91-22-6800-5678', facilities: ['Robotic Surgery', 'Fertility Center', 'NICU Level III'], doctors: 45, beds: 180 },
    { _id: '3', name: 'GyneCare Hospital, Dadar', address: 'Dadar West, Mumbai 400028', phone: '+91-22-6700-9012', facilities: ['IVF Lab', 'High Risk OBG', 'Laparoscopy OT'], doctors: 28, beds: 90 },
  ],
  Pune: [
    { _id: '4', name: 'GyneCare Hospital, Koregaon Park', address: 'Lane 6, Koregaon Park, Pune 411001', phone: '+91-20-6600-1234', facilities: ['IVF Lab', 'Genetics Lab', 'Blood Bank', 'NICU'], doctors: 42, beds: 150 },
    { _id: '5', name: 'GyneCare Hospital, Kothrud', address: 'Kothrud, Pune 411038', phone: '+91-20-6500-5678', facilities: ['High Risk Pregnancy', 'Laparoscopy', 'Oncology'], doctors: 25, beds: 80 },
  ],
  Nashik: [
    { _id: '6', name: 'GyneCare Hospital, Nashik Road', address: 'Nasik Road, Nashik 422101', phone: '+91-253-6400-1234', facilities: ['IVF Lab', 'Ultrasound Suite', 'Blood Bank'], doctors: 18, beds: 60 },
  ],
  Nagpur: [
    { _id: '7', name: 'GyneCare Hospital, Dharampeth', address: 'Dharampeth, Nagpur 440010', phone: '+91-712-6300-1234', facilities: ['NICU', 'IVF Lab', 'Laparoscopy OT'], doctors: 22, beds: 75 },
  ],
}

const cities = ['All', 'Mumbai', 'Pune', 'Nashik', 'Nagpur']

export default function Hospitals() {
  const [activeCity, setActiveCity] = useState('All')

  const displayed = activeCity === 'All'
    ? Object.values(hospitalData).flat()
    : hospitalData[activeCity] || []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Our Hospitals</h1>
          <p className="text-primary-200">12 state-of-the-art facilities across Maharashtra</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* City tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {cities.map((city) => (
            <button
              type="button"
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${activeCity === city ? 'tab-active' : 'tab-inactive border border-gray-200'}`}
            >
              {city}
              {city !== 'All' && (
                <span className="ml-1 text-xs opacity-70">
                  ({(hospitalData[city] || []).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((hospital) => (
            <div key={hospital._id} className="card p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🏥</div>
                <div>
                  <h3 className="font-bold text-gray-900">{hospital.name}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{hospital.address}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {hospital.facilities.map((f) => (
                  <span key={f} className="badge bg-primary-100 text-primary-700 text-xs">{f}</span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                  <div className="font-bold text-primary-700">{hospital.doctors}</div>
                  <div className="text-gray-500 text-xs">Doctors</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2.5 text-center">
                  <div className="font-bold text-primary-700">{hospital.beds}</div>
                  <div className="text-gray-500 text-xs">Beds</div>
                </div>
              </div>

              <div className="text-sm text-primary-600 flex items-center gap-1">
                <span>📞</span> <a href={`tel:${hospital.phone}`}>{hospital.phone}</a>
              </div>

              <Link to="/book-appointment" className="btn-primary text-sm text-center">
                Book Appointment
              </Link>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-md bg-primary-50 border border-primary-100 h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-5xl mb-3">🗺</div>
            <p className="font-medium">Interactive Map</p>
            <p className="text-sm">All GyneCare locations across Maharashtra</p>
          </div>
        </div>
      </div>
    </div>
  )
}
