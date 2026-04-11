import React, { useState } from 'react'

const jobs = [
  { _id: 'j1', title: 'Senior Gynecologist', location: 'Mumbai (Andheri)', type: 'Full-time', experience: '8+ years', department: 'Obstetrics & Gynecology', desc: 'Lead clinical care for complex gynecology cases. IVF experience a plus.' },
  { _id: 'j2', title: 'IVF Specialist & Embryologist', location: 'Pune (Koregaon Park)', type: 'Full-time', experience: '5+ years', department: 'IVF & Fertility', desc: 'Manage complete IVF cycles from stimulation through embryo transfer.' },
  { _id: 'j3', title: 'Staff Nurse (OT & Labour Room)', location: 'Multiple Locations', type: 'Full-time', experience: '2+ years', department: 'Nursing', desc: 'Support gynecological procedures, assist in labour room and OT.' },
  { _id: 'j4', title: 'Medical Receptionist', location: 'Nashik, Nagpur', type: 'Full-time', experience: '1+ year', department: 'Administration', desc: 'Patient registration, appointment scheduling and front desk operations.' },
  { _id: 'j5', title: 'Radiologist (Ultrasound)', location: 'Mumbai, Pune', type: 'Part-time/Full-time', experience: '3+ years', department: 'Radiology', desc: 'Perform and interpret obstetric and gynecological ultrasounds.' },
]

export default function Career() {
  const [applyFor, setApplyFor] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', coverLetter: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Careers at GyneCare</h1>
          <p className="text-primary-200">Join India's leading women's healthcare team. We're always looking for passionate medical professionals.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Culture */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            { icon: '🌱', title: 'Growth-Oriented', desc: 'Regular CME, fellowship programs and research opportunities' },
            { icon: '❤', title: 'Patient-First Culture', desc: 'We are driven by patient outcomes, not just metrics' },
            { icon: '💼', title: 'Competitive Benefits', desc: 'Best-in-market salaries, health insurance, paid leaves and more' },
          ].map((item) => (
            <div key={item.title} className="card p-5 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-bold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-5">Current Openings ({jobs.length})</h2>

        {!applyFor ? (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job._id} className="card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                    <span className="badge bg-primary-100 text-primary-700 text-xs">{job.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-1">
                    <span>📍 {job.location}</span>
                    <span>🏥 {job.department}</span>
                    <span>⏱ {job.experience}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{job.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => { setApplyFor(job); setSubmitted(false); setForm({ name: '', email: '', phone: '', coverLetter: '' }) }}
                  className="btn-primary text-sm py-2.5 px-5 flex-shrink-0"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        ) : submitted ? (
          <div className="card p-10 text-center max-w-lg mx-auto">
            <div className="text-5xl mb-3">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-4">Thank you for applying for <strong>{applyFor.title}</strong>. Our HR team will contact you within 5 business days.</p>
            <button type="button" onClick={() => setApplyFor(null)} className="btn-outline py-2 px-5">← Back to Openings</button>
          </div>
        ) : (
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <button type="button" onClick={() => setApplyFor(null)} className="text-gray-500 hover:text-gray-700">←</button>
              <h2 className="text-xl font-bold text-gray-900">Apply: {applyFor.title}</h2>
            </div>
            <div className="card p-6">
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} required className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload CV / Resume</label>
                  <input type="file" accept=".pdf,.doc,.docx" required className="input-field py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                  <textarea value={form.coverLetter} onChange={(e) => setForm({...form, coverLetter: e.target.value})} rows={5} placeholder="Why are you interested in this position? What makes you a great fit?" className="input-field resize-none" />
                </div>
                <button type="submit" className="w-full btn-primary py-3">Submit Application</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
