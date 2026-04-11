import React, { useState } from 'react'

const costComparison = [
  { treatment: 'IVF (1 cycle)', india: '₹1.2–2.5L', usa: '$15,000–20,000', uk: '£5,000–8,000' },
  { treatment: 'Hysterectomy', india: '₹80,000–1.5L', usa: '$10,000–15,000', uk: '£3,000–5,000' },
  { treatment: 'Laparoscopy', india: '₹50,000–1L', usa: '$8,000–12,000', uk: '£2,000–4,000' },
  { treatment: 'Antenatal Care + Delivery', india: '₹1–2.5L', usa: '$10,000–30,000', uk: 'NHS Covered' },
  { treatment: 'Egg Freezing', india: '₹80,000–1.2L', usa: '$8,000–12,000', uk: '£3,000–5,000' },
]

const packages = [
  { name: 'Fertility Tourism Package', duration: '7 days', includes: ['IVF consultation', 'All diagnostics', 'Hotel (3-star)', 'Airport transfers', 'Visa letter'], price: '₹3.5L all-inclusive' },
  { name: 'Maternity Care Package', duration: '3 months', includes: ['Complete antenatal care', 'Delivery (normal/C-sec)', 'Postnatal care', 'Accommodation assistance', 'Visa support'], price: '₹5–8L all-inclusive' },
  { name: 'Cancer Treatment Package', duration: 'As required', includes: ['Oncology consultation', 'Surgery + chemo plan', 'Hotel partner rates', 'VISA letter', 'Interpreter services'], price: 'Custom quote' },
]

export default function InternationalPatients() {
  const [form, setForm] = useState({ name: '', country: '', email: '', phone: '', condition: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">🌍 International Patients</h1>
          <p className="text-primary-200 text-lg">World-class gynecological care at a fraction of Western prices. We serve patients from 30+ countries.</p>
        </div>
      </div>

      {/* Process */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Our International Patient Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: '1', icon: '📧', label: 'Inquiry' },
              { step: '2', icon: '🔬', label: 'Medical Review' },
              { step: '3', icon: '📋', label: 'Treatment Plan' },
              { step: '4', icon: '✈', label: 'Travel Help' },
              { step: '5', icon: '🏥', label: 'Treatment' },
              { step: '6', icon: '💬', label: 'Follow-up' },
            ].map((item, i) => (
              <div key={item.step} className="flex flex-col items-center text-center relative">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-primary-700 text-xs">Step {item.step}</div>
                <div className="text-gray-700 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services for International Patients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '📄', title: 'Medical VISA Letter', desc: 'Official letter from our hospital for Indian medical VISA application within 24 hours.' },
              { icon: '🏨', title: 'Accommodation', desc: 'Partnered hotels and service apartments near all our hospitals at negotiated rates.' },
              { icon: '🚗', title: 'Airport Transfers', desc: 'Complimentary pick-up and drop for all international patients from the airport.' },
              { icon: '🗣', title: 'Interpreter Services', desc: 'Medical interpreters available for Arabic, Russian, Bangla, Nepali, French, and more.' },
              { icon: '💱', title: 'Currency Support', desc: 'Accept payments in USD, EUR, GBP, AED, and other major currencies.' },
              { icon: '📱', title: '24x7 Coordinator', desc: 'Dedicated international patient coordinator available round the clock via WhatsApp.' },
            ].map((s) => (
              <div key={s.title} className="card p-5 flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">{s.icon}</div>
                <div>
                  <div className="font-semibold text-gray-900">{s.title}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-left">
                  <th className="p-4 font-semibold text-gray-700">Treatment</th>
                  <th className="p-4 font-semibold text-green-700">India (GyneCare)</th>
                  <th className="p-4 font-semibold text-gray-600">USA</th>
                  <th className="p-4 font-semibold text-gray-600">UK</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                    <td className="p-4 font-medium text-gray-800">{row.treatment}</td>
                    <td className="p-4 font-bold text-green-700">{row.india}</td>
                    <td className="p-4 text-gray-500">{row.usa}</td>
                    <td className="p-4 text-gray-500">{row.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">*Prices are approximate and may vary based on individual case complexity. All-inclusive packages available.</p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Tourism Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="card p-6 flex flex-col">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{pkg.name}</h3>
                <div className="text-primary-600 text-sm font-medium mb-3">Duration: {pkg.duration}</div>
                <ul className="space-y-1 flex-1 mb-4">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                  <span className="font-bold text-primary-700">{pkg.price}</span>
                  <button type="button" className="btn-primary text-xs py-1.5 px-3">Enquire</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Get in Touch</h2>
          {submitted ? (
            <div className="card p-8 text-center">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="font-bold text-gray-900">Inquiry Received!</h3>
              <p className="text-gray-600 mt-1">Our international patient coordinator will contact you within 24 hours.</p>
            </div>
          ) : (
            <div className="card p-6">
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <input type="text" value={form.country} onChange={(e) => setForm({...form, country: e.target.value})} placeholder="UAE, USA, UK..." className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medical Condition / Treatment Needed</label>
                  <input type="text" value={form.condition} onChange={(e) => setForm({...form, condition: e.target.value})} placeholder="IVF, Fibroid removal, Cancer treatment..." className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows={3} placeholder="Any additional information..." className="input-field resize-none" />
                </div>
                <button type="submit" className="w-full btn-primary py-3">Send Inquiry</button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
