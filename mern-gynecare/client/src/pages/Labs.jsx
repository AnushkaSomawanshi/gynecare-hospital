import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const labCategories = [
  { icon: '🩸', name: 'Blood Tests', desc: 'CBC, LFT, KFT, lipid profile, blood sugar, hormonal assays', turnaround: '4–24 hours' },
  { icon: '🧬', name: 'Hormone Tests', desc: 'FSH, LH, AMH, estradiol, progesterone, testosterone, prolactin', turnaround: '24–48 hours' },
  { icon: '📡', name: 'Ultrasound', desc: 'Pelvic USG, transvaginal scan, obstetric scan, Doppler studies', turnaround: 'Same day' },
  { icon: '🔬', name: 'Pathology', desc: 'Biopsy, cytology, FNAC, cervical smear, histopathology', turnaround: '48–72 hours' },
  { icon: '☢', name: 'Radiology', desc: 'Mammography, MRI pelvis, CT scan, DEXA bone density scan', turnaround: '24–48 hours' },
  { icon: '🧪', name: 'Genetic Testing', desc: 'Karyotyping, NIPT, PGT-A, BRCA gene testing, chromosomal analysis', turnaround: '7–14 days' },
]

export default function Labs() {
  const [homeForm, setHomeForm] = useState({ name: '', phone: '', address: '', preferredTime: '', tests: '' })
  const [refNumber, setRefNumber] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Diagnostic Labs</h1>
          <p className="text-primary-200">NABL-certified diagnostic services with home sample collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        {/* Lab categories */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Lab Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {labCategories.map((cat) => (
              <div key={cat.name} className="card p-5 flex items-start gap-4">
                <div className="text-3xl">{cat.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{cat.name}</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{cat.desc}</p>
                  <div className="mt-2 text-xs text-primary-600 font-medium">⏱ Turnaround: {cat.turnaround}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Turnaround times table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Report Turnaround Times</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left">
                  <th className="p-4 font-semibold text-gray-700">Test Category</th>
                  <th className="p-4 font-semibold text-gray-700">Routine</th>
                  <th className="p-4 font-semibold text-gray-700">Urgent</th>
                  <th className="p-4 font-semibold text-gray-700">Access</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Blood Tests (CBC, Sugar, etc.)', routine: '4–6 hours', urgent: '1–2 hours', access: 'Portal + SMS' },
                  { cat: 'Hormonal Assays', routine: '24–48 hours', urgent: '6–8 hours', access: 'Portal + Email' },
                  { cat: 'Ultrasound Reports', routine: 'Same day', urgent: 'Within 1 hour', access: 'Hard copy + Portal' },
                  { cat: 'Pathology / Biopsy', routine: '48–72 hours', urgent: '24 hours', access: 'Portal + Courier' },
                  { cat: 'Radiology (MRI/CT)', routine: '24–48 hours', urgent: '4–6 hours', access: 'DICOM + Portal' },
                  { cat: 'Genetic Testing', routine: '7–14 days', urgent: '3–5 days', access: 'Encrypted Email' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                    <td className="p-4 font-medium text-gray-800">{row.cat}</td>
                    <td className="p-4 text-gray-600">{row.routine}</td>
                    <td className="p-4 text-orange-600 font-medium">{row.urgent}</td>
                    <td className="p-4 text-gray-600">{row.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Home Collection */}
          <section className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Home Sample Collection</h2>
            <p className="text-gray-500 text-sm mb-5">Free home collection for bookings above ₹500. Available 7 AM – 10 AM.</p>
            {submitted ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-2">✅</div>
                <h3 className="font-bold text-gray-900">Booking Confirmed!</h3>
                <p className="text-gray-500 text-sm mt-1">Our phlebotomist will arrive at your preferred time.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-outline text-sm mt-3 py-1.5 px-4">Book Again</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-3">
                <input type="text" value={homeForm.name} onChange={(e) => setHomeForm({...homeForm, name: e.target.value})} required placeholder="Your Full Name" className="input-field" />
                <input type="tel" value={homeForm.phone} onChange={(e) => setHomeForm({...homeForm, phone: e.target.value})} required placeholder="Mobile Number" className="input-field" />
                <textarea value={homeForm.address} onChange={(e) => setHomeForm({...homeForm, address: e.target.value})} required placeholder="Full address with landmark" rows={2} className="input-field resize-none" />
                <select value={homeForm.preferredTime} onChange={(e) => setHomeForm({...homeForm, preferredTime: e.target.value})} className="input-field">
                  <option value="">Preferred Time</option>
                  {['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM'].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <input type="text" value={homeForm.tests} onChange={(e) => setHomeForm({...homeForm, tests: e.target.value})} placeholder="Tests required (e.g. CBC, Thyroid, Vitamin D)" className="input-field" />
                <button type="submit" className="w-full btn-primary py-2.5">Book Home Collection</button>
              </form>
            )}
          </section>

          {/* Report Access */}
          <section className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Access Your Report</h2>
            <p className="text-gray-500 text-sm mb-5">Enter your reference number to view or download your diagnostic report.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert(`Report ${refNumber} not found in demo. Connect to backend to retrieve real reports.`) }} className="space-y-3">
              <input
                type="text"
                value={refNumber}
                onChange={(e) => setRefNumber(e.target.value)}
                required
                placeholder="Enter Report Reference Number (e.g. GYN2024001234)"
                className="input-field text-sm"
              />
              <button type="submit" className="w-full btn-outline py-2.5">Find Report</button>
            </form>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm font-semibold text-primary-800 mb-2">Registered Patients</p>
              <p className="text-xs text-gray-600 mb-3">Log in to your patient dashboard to access all your reports in one place.</p>
              <Link to="/dashboard/patient" className="btn-primary text-sm py-2 px-4 inline-block">Go to My Dashboard</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
