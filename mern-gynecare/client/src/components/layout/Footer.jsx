import React from 'react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Find Doctor', to: '/find-doctor' },
  { label: 'Hospitals', to: '/hospitals' },
  { label: 'Specialities', to: '/specialities' },
  { label: 'Health Packages', to: '/health-packages' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Book Appointment', to: '/book-appointment' },
  { label: 'Contact', to: '/contact' },
]

const departments = [
  'Obstetrics & Gynecology',
  'IVF & Fertility',
  'PCOS Specialist',
  'Maternal-Fetal Medicine',
  'Gynecologic Oncology',
  'Laparoscopic Surgery',
  'High Risk Pregnancy',
  'Prenatal Care',
]

const patientServices = [
  { label: 'Second Opinion', to: '/second-opinion' },
  { label: 'Teleconsultation', to: '/teleconsultation' },
  { label: 'Labs', to: '/labs' },
  { label: 'Blood Availability', to: '/blood-availability' },
  { label: 'International Patients', to: '/international-patients' },
  { label: 'Academics & CSR', to: '/academics-csr' },
  { label: 'Career', to: '/career' },
  { label: 'Videos', to: '/videos' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">♥</span>
              </div>
              <div>
                <div className="text-xl font-bold">GyneCare</div>
                <div className="text-xs text-accent-300">Centre of Excellence in Women's Health</div>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              GyneCare Hospital is India's leading chain of gynecology-focused hospitals with 12+ branches across Maharashtra. We are NABH accredited and committed to providing world-class women's healthcare.
            </p>
            <div className="flex gap-3 mb-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-primary-700 hover:bg-accent-600 rounded-lg flex items-center justify-center text-xs transition-colors"
                  aria-label={s}
                >
                  {s.charAt(0)}
                </a>
              ))}
            </div>
            <div className="text-sm text-primary-300 space-y-1">
              <div>📞 +91-800-GYNECARE</div>
              <div>✉ info@gynecare.in</div>
              <div>📍 GyneCare House, Pune, Maharashtra 411001</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-300 hover:text-white text-sm transition-colors flex items-center gap-1">
                    <span className="text-accent-400">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Departments</h3>
            <ul className="space-y-2">
              {departments.map((dept) => (
                <li key={dept}>
                  <Link
                    to={`/specialities`}
                    className="text-primary-300 hover:text-white text-sm transition-colors flex items-center gap-1"
                  >
                    <span className="text-accent-400">›</span> {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Patient Services</h3>
            <ul className="space-y-2">
              {patientServices.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-300 hover:text-white text-sm transition-colors flex items-center gap-1">
                    <span className="text-accent-400">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accreditation badges */}
        <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-primary-700">
          {['NABH Accredited', 'ISO 9001:2015', 'NABL Certified', 'JCI Standards'].map((badge) => (
            <span key={badge} className="bg-primary-800 border border-primary-600 rounded-lg px-3 py-1 text-xs text-primary-200">
              ✓ {badge}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-primary-400">
          <div>© {new Date().getFullYear()} GyneCare Hospital. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
