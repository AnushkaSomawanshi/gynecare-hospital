import React, { useState } from 'react'

const experts = [
  { name: 'Dr. Sunanda Joglekar', speciality: 'Senior Gynecologist', experience: 28, response: '24–48 hours', accepts: ['Ovarian Cancer', 'Complex Surgeries', 'IVF Failure', 'Rare Disorders'] },
  { name: 'Dr. Priya Kulkarni', speciality: 'Maternal-Fetal Medicine', experience: 22, response: '24–48 hours', accepts: ['High Risk Pregnancy', 'Genetic Anomalies', 'Twin Pregnancies', 'IUGR'] },
  { name: 'Dr. Arun Mehta', speciality: 'Reproductive Medicine', experience: 18, response: '48 hours', accepts: ['IVF Protocol', 'Fertility Assessment', 'Sperm Disorders', 'Implantation Failure'] },
]

export default function SecondOpinion() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', diagnosis: '', hospital: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">🩺 Second Opinion</h1>
          <p className="text-primary-200 text-lg">Get expert review of your diagnosis from our senior specialists within 48 hours.</p>
        </div>
      </div>

      {/* How it works */}
      <section className="py-10 bg-primary-50 border-b border-primary-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: '📋', step: '1', title: 'Submit Your Case', desc: 'Fill the form with your diagnosis, reports, and current treatment details.' },
              { icon: '🔬', step: '2', title: 'Expert Review', desc: 'A senior specialist reviews your case and medical documents carefully.' },
              { icon: '📧', step: '3', title: 'Response in 48 Hours', desc: 'Receive a detailed written opinion and recommendation via email.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-700 rounded-2xl flex items-center justify-center text-3xl text-white mb-3">{item.icon}</div>
                <div className="text-primary-600 font-bold text-xs mb-1">STEP {item.step}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit for Second Opinion</h2>
            {submitted ? (
              <div className="card p-8 text-center">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-600">Our specialists will review your case and respond within 48 hours at your email address.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-outline mt-4 py-2 px-5">Submit Another</button>
              </div>
            ) : (
              <div className="card p-6">
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required placeholder="Anjali Mehta" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="+91 98765..." className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required placeholder="you@example.com" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Diagnosis</label>
                    <textarea value={form.diagnosis} onChange={(e) => setForm({...form, diagnosis: e.target.value})} required rows={3} placeholder="Please describe your current diagnosis as provided by your doctor..." className="input-field resize-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Treating Hospital/Doctor</label>
                    <input type="text" value={form.hospital} onChange={(e) => setForm({...form, hospital: e.target.value})} placeholder="e.g. Apollo Hospital, Dr. Sharma" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Medical Reports</label>
                    <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" className="input-field py-2 text-sm" />
                    <p className="text-xs text-gray-400 mt-1">Upload ultrasound reports, blood tests, biopsy results, etc. (Max 10MB each)</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} rows={2} placeholder="Any symptoms, concerns or specific questions for our specialist..." className="input-field resize-none" />
                  </div>
                  <button type="submit" className="w-full btn-primary py-3">Submit for Expert Review →</button>
                </form>
              </div>
            )}
          </div>

          {/* Expert Panel */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Expert Panel</h2>
            <div className="space-y-4">
              {experts.map((expert) => (
                <div key={expert.name} className="card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center font-bold text-primary-700 text-lg flex-shrink-0">
                      {expert.name.charAt(4)}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">{expert.name}</div>
                      <div className="text-primary-600 text-sm">{expert.speciality} · {expert.experience} yrs experience</div>
                      <div className="text-xs text-gray-500 mt-1">Response time: <span className="font-medium text-green-600">{expert.response}</span></div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {expert.accepts.map(a => <span key={a} className="badge bg-primary-100 text-primary-700 text-xs">{a}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card p-5 mt-4 bg-green-50 border border-green-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <div className="font-semibold text-green-800 text-sm">Why Get a Second Opinion?</div>
                  <ul className="text-xs text-green-700 mt-1 space-y-0.5">
                    <li>• 30% of diagnoses change with a second review</li>
                    <li>• Explore alternative treatment options</li>
                    <li>• Understand complex surgical decisions</li>
                    <li>• Gain peace of mind before major procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
