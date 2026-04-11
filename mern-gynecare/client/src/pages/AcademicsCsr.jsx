import React, { useState } from 'react'

export default function AcademicsCsr() {
  const [activeTab, setActiveTab] = useState('Academics')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Academics & CSR</h1>
          <p className="text-primary-200">Training future doctors and giving back to the community</p>
        </div>
      </div>

      {/* Tab selector */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 py-2">
            {['Academics', 'CSR Initiatives'].map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab ? 'tab-active' : 'tab-inactive'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {activeTab === 'Academics' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Academic Programs</h2>
              <p className="text-gray-600">GyneCare is a recognized teaching hospital affiliated with universities across Maharashtra. We train the next generation of gynecologists, nurses and allied health professionals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🏥', title: 'Medical Internship Program', duration: '12 months', seats: 40, desc: 'Comprehensive internship for MBBS graduates rotating through OBG, IVF, oncology, and maternal-fetal medicine departments.', features: ['Hands-on surgical training', 'OPD management', 'Emergency obstetrics', 'Mentorship by senior specialists'] },
                { icon: '📚', title: 'CME Courses', duration: 'Ongoing', seats: '50/batch', desc: 'Regular Continuing Medical Education programs for practicing gynecologists covering latest advances in minimally invasive surgery, fertility treatments, and oncology.', features: ['Monthly webinars', 'Hands-on workshops', 'International faculty', 'Certificate programs'] },
                { icon: '🔬', title: 'Research & Publications', duration: 'Ongoing', seats: null, desc: 'Active clinical research program with publications in national and international peer-reviewed journals. Collaborate with ICMR and international institutions.', features: ['50+ papers published', 'ICMR-funded projects', 'Clinical trials in progress', 'Research stipends available'] },
                { icon: '🎓', title: 'Fellowship Programs', duration: '6–12 months', seats: 10, desc: 'Structured fellowship programs in IVF, Gynecologic Oncology, Minimally Invasive Surgery, and Maternal-Fetal Medicine for DGO/MS qualified doctors.', features: ['Sub-specialty training', 'Case-based learning', 'Surgical skill lab', 'Internationally recognized'] },
              ].map((prog) => (
                <div key={prog.title} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{prog.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{prog.title}</h3>
                      <div className="flex gap-4 text-sm text-primary-600 font-medium mt-1 mb-2">
                        <span>⏱ {prog.duration}</span>
                        {prog.seats && <span>👥 {prog.seats} seats</span>}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{prog.desc}</p>
                      <ul className="space-y-1">
                        {prog.features.map(f => (
                          <li key={f} className="text-sm text-gray-500 flex items-center gap-1">
                            <span className="text-green-500">✓</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'CSR Initiatives' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Corporate Social Responsibility</h2>
              <p className="text-gray-600">GyneCare believes healthcare is a right, not a privilege. Our CSR programs reach thousands of underserved women across Maharashtra every year.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '50,000+', label: 'Women served through free camps', icon: '👩' },
                { value: '120+', label: 'Free health camps conducted', icon: '🏕' },
                { value: '5,000+', label: 'Students in hygiene programs', icon: '📚' },
                { value: '₹2 Cr+', label: 'CSR spend in FY2024', icon: '💰' },
              ].map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-extrabold text-primary-700">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🏥', title: 'Free Health Camps', color: 'border-pink-300', desc: 'Regular free gynecology consultation camps in rural Maharashtra — Vidarbha, Marathwada, and tribal areas. Services include Pap smear, ultrasound, hormonal tests, and maternal care.' },
                { icon: '📚', title: 'Menstrual Hygiene Awareness', color: 'border-purple-300', desc: 'School and college programs in tribal and urban poor areas educating adolescent girls on menstrual health, hygiene management, and breaking taboos.' },
                { icon: '🎗', title: 'Cancer Screening Camps', color: 'border-red-300', desc: 'Free cervical and breast cancer screening camps with HPV vaccination drives in partnership with state government health departments.' },
                { icon: '🎓', title: 'Scholarship Program', color: 'border-blue-300', desc: 'Annual scholarships for 20 meritorious students from economically disadvantaged backgrounds pursuing medical and nursing education.' },
              ].map((item) => (
                <div key={item.title} className={`card p-6 border-l-4 ${item.color}`}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
