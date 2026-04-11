import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Find Doctor', to: '/find-doctor' },
  { label: 'Hospitals', to: '/hospitals' },
  { label: 'Specialities', to: '/specialities' },
  { label: 'Health Packages', to: '/health-packages' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const moreLinks = [
  { label: 'Labs', to: '/labs' },
  { label: 'Blood Availability', to: '/blood-availability' },
  { label: 'International Patients', to: '/international-patients' },
  { label: 'Academics & CSR', to: '/academics-csr' },
  { label: 'Career', to: '/career' },
  { label: 'Second Opinion', to: '/second-opinion' },
  { label: 'Videos', to: '/videos' },
  { label: 'Teleconsultation', to: '/teleconsultation' },
]

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const moreRef = useRef(null)
  const userRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
      if (userRef.current && !userRef.current.contains(e.target)) setUserOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMoreOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate('/')
    setUserOpen(false)
  }

  const dashboardLink =
    user?.role === 'admin'
      ? '/dashboard/admin'
      : user?.role === 'doctor'
      ? '/dashboard/doctor'
      : '/dashboard/patient'

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-primary-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>📞</span>
              <span>Emergency: +91-800-GYNECARE</span>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <span>✉</span>
              <span>info@gynecare.in</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-accent-300 transition-colors" aria-label="Facebook">fb</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent-300 transition-colors" aria-label="Twitter">tw</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent-300 transition-colors" aria-label="Instagram">in</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-xl">♥</span>
            </div>
            <div>
              <div className="text-xl font-bold text-primary-800 leading-none">GyneCare</div>
              <div className="text-xs text-accent-600 font-medium">Centre of Excellence in Women's Health</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 flex items-center gap-1 transition-colors"
              >
                More <span className="text-xs">▾</span>
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/book-appointment"
              className="hidden sm:flex btn-accent text-sm py-2 px-4"
            >
              Book Appointment
            </Link>

            {isAuthenticated ? (
              <div className="relative" ref={userRef}>
                <button
                  onClick={() => setUserOpen(!userOpen)}
                  className="flex items-center gap-2 bg-primary-50 hover:bg-primary-100 rounded-lg px-3 py-2 transition-colors"
                >
                  <div className="w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-primary-800 max-w-24 truncate">
                    {user?.name?.split(' ')[0]}
                  </span>
                  <span className="text-xs text-gray-400">▾</span>
                </button>
                {userOpen && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                    <Link to={dashboardLink} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700">
                      Dashboard
                    </Link>
                    <hr className="my-1 border-gray-100" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="btn-outline text-sm py-2 px-4"
              >
                Login
              </Link>
            )}

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-gray-700 mb-1 transition-all" />
              <div className="w-5 h-0.5 bg-gray-700 mb-1 transition-all" />
              <div className="w-5 h-0.5 bg-gray-700 transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              className="block mt-2 text-center btn-accent text-sm"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
