import React, { useState } from 'react'

const locations = [
  { city: 'Pune (HQ)', name: 'GyneCare Hospital, Koregaon Park', address: 'Lane 6, Koregaon Park, Pune 411001', phone: '+91-20-6600-1234', email: 'pune@gynecare.in', hours: 'Mon–Sat: 8 AM – 8 PM, Sun: 9 AM – 1 PM' },
  { city: 'Mumbai', name: 'GyneCare Hospital, BKC', address: 'Bandra Kurla Complex, Bandra East, Mumbai 400051', phone: '+91-22-6800-5678', email: 'mumbai@gynecare.in', hours: 'Mon–Sun: 8 AM – 9 PM (24x7 Emergency)' },
  { city: 'Nashik', name: 'GyneCare Hospital, Nashik Road', address: 'College Road, Nashik 422005', phone: '+91-253-6400-1234', email: 'nashik@gynecare.in', hours: 'Mon–Sat: 9 AM – 7 PM' },
  { city: 'Nagpur', name: 'GyneCare Hospital, Dharampeth', address: 'Dharampeth, Nagpur 440010', phone: '+91-712-6300-1234', email: 'nagpur@gynecare.in', hours: 'Mon–Sat: 8 AM – 8 PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-primary-200">We're here to help. Reach out to us anytime.</p>
        </div>
      </div>

      {/* Emergency banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 text-center font-semibold">
          🚨 Emergency? Call <a href="tel:18001234567" className="underline font-bold">1800-123-GYNECARE</a> — Available 24×7
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="card p-8 text-center">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">Message Received!</h3>
                <p className="text-gray-600">Thank you for contacting GyneCare. Our team will respond within 24 hours.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-primary mt-4 py-2 px-6">Send Another</button>
              </div>
            ) : (
              <div className="card p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required placeholder="Anjali Mehta" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="+91 98765 43210" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required placeholder="you@example.com" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} required className="input-field">
                      <option value="">Select a subject</option>
                      {['Appointment Inquiry', 'Doctor Consultation', 'Health Package', 'Billing & Insurance', 'Feedback', 'Complaint', 'Other'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required rows={5} placeholder="Please describe your query in detail..." className="input-field resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full btn-primary py-3 disabled:opacity-60">
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.city} className="card p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">📍</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{loc.name}</h3>
                      <p className="text-gray-500 text-sm">{loc.address}</p>
                      <div className="mt-2 space-y-0.5 text-sm">
                        <div className="text-primary-600">📞 <a href={`tel:${loc.phone}`}>{loc.phone}</a></div>
                        <div className="text-gray-500">✉ {loc.email}</div>
                        <div className="text-gray-500">🕐 {loc.hours}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-md bg-primary-50 border border-primary-100 h-56 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-5xl mb-2">🗺</div>
            <p className="font-medium">Map of All GyneCare Locations</p>
            <p className="text-sm">Integration with Google Maps available</p>
          </div>
        </div>
      </div>
    </div>
  )
}
