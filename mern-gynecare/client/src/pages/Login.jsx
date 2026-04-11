import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login, loginWithOTP } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState('password') // 'password' | 'otp'
  const [role, setRole] = useState('patient')
  const [step, setStep] = useState(1) // for OTP: 1 = phone, 2 = otp
  const [form, setForm] = useState({ email: '', password: '', phone: '', otp: '' })
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handlePasswordLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const user = await login(form.email, form.password, role)
      redirectByRole(user.role || role)
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSendOTP = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await fetch(`/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: form.phone }),
      })
      setStep(2)
    } catch {
      setError('Could not send OTP. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleOTPLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const user = await loginWithOTP(form.phone, form.otp)
      redirectByRole(user.role || role)
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const redirectByRole = (r) => {
    if (r === 'admin') navigate('/dashboard/admin')
    else if (r === 'doctor') navigate('/dashboard/doctor')
    else navigate('/dashboard/patient')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 hero-gradient text-white flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 h-48 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-300 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center max-w-sm">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">♥</div>
            <div className="text-left">
              <div className="text-3xl font-bold">GyneCare</div>
              <div className="text-accent-300 text-sm">Centre of Excellence</div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Access your health records, appointments, pregnancy tracker and more — all in one place.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '📅', label: 'Manage Appointments' },
              { icon: '🤱', label: 'Pregnancy Tracker' },
              { icon: '📊', label: 'Health Records' },
              { icon: '💬', label: 'Teleconsultation' },
            ].map((item) => (
              <div key={item.label} className="bg-white/15 rounded-xl p-3 text-center border border-white/20">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <div className="lg:hidden flex items-center justify-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center text-white text-xl">♥</div>
                <span className="text-xl font-bold text-primary-800">GyneCare</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
              <p className="text-gray-500 text-sm mt-1">Enter your credentials to continue</p>
            </div>

            {/* Role selector */}
            <div className="flex rounded-lg overflow-hidden border border-gray-200 mb-5">
              {['patient', 'doctor', 'admin'].map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 py-2 text-sm font-medium capitalize transition-colors ${role === r ? 'bg-primary-700 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Mode toggle */}
            <div className="flex rounded-lg overflow-hidden bg-gray-100 p-1 mb-5">
              {[
                { key: 'password', label: 'Password' },
                { key: 'otp', label: 'OTP Login' },
              ].map((m) => (
                <button
                  type="button"
                  key={m.key}
                  onClick={() => { setMode(m.key); setStep(1); setError('') }}
                  className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === m.key ? 'bg-white shadow text-primary-700' : 'text-gray-500'}`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
                {error}
              </div>
            )}

            {/* Password Login Form */}
            {mode === 'password' && (
              <form onSubmit={handlePasswordLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="input-field"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-gray-300 text-primary-600"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-3 text-base disabled:opacity-60"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>
            )}

            {/* OTP Login Form */}
            {mode === 'otp' && (
              <form onSubmit={step === 1 ? handleSendOTP : handleOTPLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="flex gap-2">
                    <span className="input-field w-20 text-center bg-gray-50">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      required
                      className="input-field flex-1"
                      disabled={step === 2}
                    />
                  </div>
                </div>
                {step === 2 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                    <input
                      type="text"
                      name="otp"
                      value={form.otp}
                      onChange={handleChange}
                      placeholder="6-digit OTP"
                      maxLength={6}
                      required
                      className="input-field text-center text-2xl tracking-widest"
                    />
                    <p className="text-xs text-gray-400 mt-1 text-center">OTP sent to +91 {form.phone}</p>
                  </div>
                )}
                <button type="submit" disabled={loading} className="w-full btn-primary py-3 text-base disabled:opacity-60">
                  {loading ? 'Please wait...' : step === 1 ? 'Send OTP' : 'Verify & Login'}
                </button>
                {step === 2 && (
                  <button type="button" onClick={() => setStep(1)} className="w-full text-sm text-gray-500 hover:text-gray-700">
                    ← Change number
                  </button>
                )}
              </form>
            )}

            {/* Demo credentials */}
            <div className="mt-5 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-xs font-semibold text-primary-700 mb-1.5">Demo Credentials:</p>
              <div className="text-xs text-gray-600 space-y-0.5">
                <div><span className="font-medium">Admin:</span> admin@gynecare.com / Admin@123</div>
                <div><span className="font-medium">Patient:</span> patient1@gynecare.com / Patient@123</div>
                <div><span className="font-medium">Doctor:</span> doctor1@gynecare.com / Doctor@123</div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-5">
              New to GyneCare?{' '}
              <Link to="/register" className="text-primary-600 font-semibold hover:text-primary-800">Create account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
