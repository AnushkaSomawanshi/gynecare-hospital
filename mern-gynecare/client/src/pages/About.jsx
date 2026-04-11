import React from 'react'
import { Link } from 'react-router-dom'

const timeline = [
  { year: '2004', event: 'Founded in Pune with first 30-bed gynecology hospital' },
  { year: '2008', event: 'Expanded to Mumbai — opened Andheri and Dadar centers' },
  { year: '2012', event: 'Launched dedicated IVF Center with state-of-the-art embryology lab' },
  { year: '2016', event: 'Achieved NABH accreditation; opened Nashik and Nagpur branches' },
  { year: '2020', event: 'Launched teleconsultation platform serving patients across India' },
  { year: '2024', event: 'Expanded to 12 branches; 1 million+ patients milestone reached' },
]

const leadership = [
  { name: 'Dr. Sunanda Joglekar', role: 'Chief Medical Officer', speciality: 'Senior Gynecologist & Reproductive Medicine', years: 28 },
  { name: 'Dr. Priya Kulkarni', role: 'Medical Director', speciality: 'Maternal-Fetal Medicine, High Risk Pregnancy', years: 22 },
  { name: 'Dr. Arun Mehta', role: 'Head of IVF Program', speciality: 'Assisted Reproduction, Embryology', years: 18 },
  { name: 'Dr. Neha Patil', role: 'Head of Oncology', speciality: 'Gynecologic Oncology, Robotic Surgery', years: 15 },
]

const awards = [
  'Best Gynecology Hospital in Maharashtra — Healthcare Excellence Awards 2023',
  'NABH Patient Safety Excellence Award 2022',
  'India\'s Most Trusted Women\'s Healthcare Brand — India Today 2021',
  'Best IVF Center in Western India — Fertility Association of India 2020',
]

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4">About GyneCare Hospital</h1>
          <p className="text-primary-200 text-xl max-w-2xl mx-auto">
            Twenty years of excellence in women's healthcare. Trusted by over a million patients across Maharashtra.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8 border-l-4 border-primary-500">
              <div className="text-4xl mb-3">🎯</div>
              <h2 className="text-2xl font-bold text-primary-900 mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive, compassionate, and accessible gynecological healthcare to every woman in India — from adolescence through menopause. We are committed to clinical excellence, evidence-based practice, and patient-centered care that empowers women to make informed health decisions.
              </p>
            </div>
            <div className="card p-8 border-l-4 border-accent-500">
              <div className="text-4xl mb-3">🔭</div>
              <h2 className="text-2xl font-bold text-accent-900 mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be South Asia's leading women's health institution — recognized for clinical innovation, research excellence, and transformative patient outcomes. We envision a future where every woman has access to world-class gynecological care regardless of geography or economic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '12+', label: 'Branches Across Maharashtra' },
              { value: '200+', label: 'Specialist Doctors' },
              { value: '1500+', label: 'Hospital Beds' },
              { value: '1M+', label: 'Patients Treated' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-white">{s.value}</div>
                <div className="text-primary-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 text-center mb-10">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-6 pl-4">
                  <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 z-10 relative">
                    {item.year.slice(2)}
                  </div>
                  <div className="card p-4 flex-1">
                    <div className="text-primary-600 font-bold">{item.year}</div>
                    <div className="text-gray-700 text-sm mt-0.5">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-8">Accreditations & Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['NABH Accredited', 'ISO 9001:2015 Certified', 'NABL Certified Labs', 'JCI Standards Compliant', 'MoHFW Recognized', 'IMA Partner Hospital'].map((badge) => (
              <div key={badge} className="bg-white rounded-xl px-5 py-3 shadow-sm border border-primary-200 font-semibold text-primary-700 text-sm">
                ✓ {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 text-center mb-10">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <div key={leader.name} className="card p-5 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center text-2xl font-bold text-primary-700 mx-auto mb-3">
                  {leader.name.charAt(4)}
                </div>
                <h3 className="font-bold text-gray-900">{leader.name}</h3>
                <div className="text-accent-600 text-sm font-medium">{leader.role}</div>
                <div className="text-gray-500 text-xs mt-1">{leader.speciality}</div>
                <div className="text-primary-700 text-xs font-medium mt-2">{leader.years} Years Experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-14 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-900 text-center mb-8">Awards & Recognition</h2>
          <div className="space-y-3">
            {awards.map((award, i) => (
              <div key={i} className="card p-4 flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🏆</span>
                <span className="text-gray-700">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
