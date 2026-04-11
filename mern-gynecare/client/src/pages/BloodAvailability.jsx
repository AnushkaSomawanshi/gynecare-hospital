import React, { useState } from 'react'

const bloodData = [
  { type: 'A+', units: { Mumbai: 45, Pune: 32, Nashik: 18, Nagpur: 24 } },
  { type: 'A-', units: { Mumbai: 8, Pune: 6, Nashik: 4, Nagpur: 5 } },
  { type: 'B+', units: { Mumbai: 38, Pune: 28, Nashik: 15, Nagpur: 20 } },
  { type: 'B-', units: { Mumbai: 6, Pune: 5, Nashik: 3, Nagpur: 4 } },
  { type: 'O+', units: { Mumbai: 52, Pune: 40, Nashik: 22, Nagpur: 28 } },
  { type: 'O-', units: { Mumbai: 10, Pune: 8, Nashik: 5, Nagpur: 6 } },
  { type: 'AB+', units: { Mumbai: 20, Pune: 15, Nashik: 8, Nagpur: 12 } },
  { type: 'AB-', units: { Mumbai: 4, Pune: 3, Nashik: 2, Nagpur: 2 } },
]

const cities = ['Mumbai', 'Pune', 'Nashik', 'Nagpur']

function getAvailabilityColor(units) {
  if (units === 0) return 'bg-red-100 text-red-700'
  if (units < 5) return 'bg-orange-100 text-orange-700'
  if (units < 15) return 'bg-yellow-100 text-yellow-700'
  return 'bg-green-100 text-green-700'
}

function getAvailabilityLabel(units) {
  if (units === 0) return 'Unavailable'
  if (units < 5) return 'Critical'
  if (units < 15) return 'Low'
  return 'Available'
}

export default function BloodAvailability() {
  const lastUpdated = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">🩸 Blood Bank Availability</h1>
          <p className="text-red-200">Real-time blood availability across all GyneCare centers</p>
          <p className="text-red-300 text-sm mt-1">Last updated: {lastUpdated} IST</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Availability Legend */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { label: 'Available (15+ units)', color: 'bg-green-100 text-green-700' },
            { label: 'Low (5–14 units)', color: 'bg-yellow-100 text-yellow-700' },
            { label: 'Critical (< 5 units)', color: 'bg-orange-100 text-orange-700' },
            { label: 'Unavailable', color: 'bg-red-100 text-red-700' },
          ].map((item) => (
            <span key={item.label} className={`badge text-xs ${item.color}`}>{item.label}</span>
          ))}
        </div>

        {/* Blood type table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="p-4 text-left font-bold text-gray-700">Blood Type</th>
                {cities.map(city => (
                  <th key={city} className="p-4 text-center font-bold text-gray-700">{city}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloodData.map((row, i) => (
                <tr key={row.type} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-700 text-sm">
                        {row.type}
                      </div>
                      <div className="font-semibold text-gray-900">Blood Group {row.type}</div>
                    </div>
                  </td>
                  {cities.map(city => {
                    const units = row.units[city]
                    return (
                      <td key={city} className="p-4 text-center">
                        <div className={`inline-flex flex-col items-center px-3 py-1.5 rounded-lg ${getAvailabilityColor(units)}`}>
                          <span className="font-bold text-base">{units}</span>
                          <span className="text-xs">{getAvailabilityLabel(units)}</span>
                        </div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Donate blood CTA */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">❤️</div>
          <h2 className="text-2xl font-bold text-red-800 mb-2">Donate Blood, Save Lives</h2>
          <p className="text-red-700 mb-5 max-w-xl mx-auto">
            One blood donation can save up to three lives. Our blood bank accepts donations at all 12 GyneCare centers. No appointment required — walk in during working hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:18001234567" className="btn-primary bg-red-700 hover:bg-red-800 py-2.5 px-6">
              Call to Donate: 1800-123-GYNECARE
            </a>
            <div className="btn-outline border-red-400 text-red-700 py-2.5 px-6 rounded-lg">
              View Donation Centers
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🕐', title: 'Donation Hours', desc: 'Mon–Sat 8 AM to 6 PM, Sunday 9 AM to 1 PM' },
            { icon: '📋', title: 'Requirements', desc: 'Age 18–65, weight >50 kg, hemoglobin >12.5 g/dL' },
            { icon: '🎁', title: 'Benefits', desc: 'Free complete health checkup and refreshments post-donation' },
          ].map((item) => (
            <div key={item.title} className="card p-4 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
              <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
