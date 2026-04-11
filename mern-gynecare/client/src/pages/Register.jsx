import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const specialities = ['Obstetrics & Gynecology', 'IVF & Fertility', 'PCOS Specialist', 'Maternal-Fetal Medicine', 'Gynecologic Oncology', 'Laparoscopic Surgery', 'High Risk Pregnancy', 'Prenatal Care']
const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('patient')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: '',
    dob: '', bloodGroup: '', abhaId: '',
    speciality: '', qualification: '', experience: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const validateStep1 = () => {
    if (!form.name || !form.email || !form.phone || !form.password) return 'All fields are required.'
    if (form.password !== form.confirmPassword) return 'Passwords do not match.'
    if (form.password.length < 8) return 'Password must be at least 8 characters.'
    if (!/^\d{10}$/.test(form.phone)) return 'Enter a valid 10-digit phone number.'
    return null
  }

  const handleNext = () => {
    const err = validateStep1()
    if (err) { setError(err); return }
    setStep(3)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await register({ ...form, role })
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const steps = ['Select Role', 'Personal Info', 'Profile Setup']

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center text-white text-xl">♥</div>
            <span className="text-xl font-bold text-primary-800">GyneCare</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Create Your Account</h1>
          <p className="text-gray-500 text-sm mt-1">Join GyneCare's health platform</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, i) => {
            const num = i + 1
            const active = step === num
            const done = step > num
            return (
              <div key={s} className="flex-1 flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${done ? 'bg-primary-700 text-white' : active ? 'bg-primary-700 text-white ring-4 ring-primary-200' : 'bg-gray-200 text-gray-500'}`}>
                  {done ? '✓' : num}
                </div>
                <div className="ml-2 text-xs font-medium text-gray-600 hidden sm:block">{s}</div>
                {i < steps.length - 1 && <div className={`flex-1 h-1 mx-3 rounded ${done ? 'bg-primary-700' : 'bg-gray-200'}`} />}
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          {/* Step 1: Role */}
          {step === 1 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Choose Your Role</h2>
              <p className="text-gray-500 text-sm mb-6">Select how you'll be using GyneCare</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { key: 'patient', icon: '🙋‍♀️', label: 'Patient', desc: 'Book appointments, track pregnancy, manage health records' },
                  { key: 'doctor', icon: '👩‍⚕️', label: 'Doctor', desc: 'Manage schedule, view patients, track consultations' },
                ].map((r) => (
                  <button
                    type="button"
                    key={r.key}
                    onClick={() => setRole(r.key)}
                    className={`p-5 rounded-xl border-2 text-left transition-all ${role === r.key ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-200'}`}
                  >
                    <div className="text-3xl mb-2">{r.icon}</div>
                    <div className="font-bold text-gray-900">{r.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{r.desc}</div>
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setStep(2)} className="w-full btn-primary py-3">
                Continue as {role.charAt(0).toUpperCase() + role.slice(1)} →
              </button>
            </div>
          )}

          {/* Step 2: Personal Info */}
          {step === 2 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Personal Information</h2>
              <p className="text-gray-500 text-sm mb-6">Your basic details for the account</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Dr. Priya Sharma" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="flex gap-2">
                    <span className="input-field w-16 text-center bg-gray-50 text-sm">+91</span>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="9876543210" className="input-field flex-1" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 8 chars" className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Re-enter" className="input-field" required />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(1)} className="btn-outline py-3 flex-1">← Back</button>
                <button type="button" onClick={handleNext} className="btn-primary py-3 flex-1">Continue →</button>
              </div>
            </div>
          )}

          {/* Step 3: Profile Setup */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                {role === 'patient' ? 'Patient Profile' : 'Doctor Profile'}
              </h2>
              <p className="text-gray-500 text-sm mb-6">Help us personalize your experience</p>
              <div className="space-y-4">
                {role === 'patient' ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input type="date" name="dob" value={form.dob} onChange={handleChange} className="input-field" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
                        <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className="input-field">
                          <option value="">Select</option>
                          {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ABHA ID <span className="text-gray-400 font-normal">(Optional)</span></label>
                      <input type="text" name="abhaId" value={form.abhaId} onChange={handleChange} placeholder="14-digit ABHA Health ID" className="input-field" />
                      <p className="text-xs text-gray-400 mt-1">Ayushman Bharat Health Account ID for linking government health records</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Speciality</label>
                      <select name="speciality" value={form.speciality} onChange={handleChange} required className="input-field">
                        <option value="">Select speciality</option>
                        {specialities.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Qualifications</label>
                      <input type="text" name="qualification" value={form.qualification} onChange={handleChange} placeholder="e.g. MBBS, MD (OBG), DNB" className="input-field" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <input type="number" name="experience" value={form.experience} onChange={handleChange} placeholder="10" min="0" max="50" className="input-field" required />
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" required className="mt-1 rounded border-gray-300 text-primary-600" />
                  <span className="text-sm text-gray-600">
                    I agree to GyneCare's{' '}
                    <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a> and{' '}
                    <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a>
                  </span>
                </label>
              </div>
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(2)} className="btn-outline py-3 flex-1">← Back</button>
                <button type="submit" disabled={loading} className="btn-primary py-3 flex-1 disabled:opacity-60">
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-800">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
