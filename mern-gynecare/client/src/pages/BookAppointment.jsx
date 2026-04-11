import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { appointments as appointmentsApi, hospitals as hospitalsApi, doctors as doctorsApi } from '../services/api'

const CITIES = ['Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Aurangabad', 'Kolhapur']
const DEPARTMENTS = ['Obstetrics & Gynecology', 'IVF & Fertility', 'PCOS Specialist', 'Maternal-Fetal Medicine', 'Gynecologic Oncology', 'Laparoscopic Surgery', 'High Risk Pregnancy', 'Prenatal Care']

const mockHospitals = {
  Mumbai: [
    { _id: 'h1', name: 'GyneCare Andheri', address: 'Lokhandwala, Andheri West, Mumbai' },
    { _id: 'h2', name: 'GyneCare BKC', address: 'Bandra Kurla Complex, Mumbai' },
  ],
  Pune: [
    { _id: 'h3', name: 'GyneCare Koregaon Park', address: 'Koregaon Park, Pune' },
    { _id: 'h4', name: 'GyneCare Kothrud', address: 'Kothrud, Pune' },
  ],
  Nashik: [{ _id: 'h5', name: 'GyneCare Nashik Road', address: 'Nashik Road, Nashik' }],
  Nagpur: [{ _id: 'h6', name: 'GyneCare Dharampeth', address: 'Dharampeth, Nagpur' }],
  Aurangabad: [{ _id: 'h7', name: 'GyneCare Aurangabad', address: 'CIDCO, Aurangabad' }],
  Kolhapur: [{ _id: 'h8', name: 'GyneCare Kolhapur', address: 'Shivaji Park, Kolhapur' }],
}

const mockDoctors = [
  { _id: 'd1', name: 'Dr. Priya Sharma', speciality: 'Obstetrics & Gynecology', experience: 18, rating: 4.9, fee: 800 },
  { _id: 'd2', name: 'Dr. Sunita Patel', speciality: 'IVF & Fertility', experience: 14, rating: 4.8, fee: 1200 },
  { _id: 'd3', name: 'Dr. Sneha Joshi', speciality: 'Laparoscopic Surgery', experience: 13, rating: 4.8, fee: 1000 },
]

const timeSlots = {
  Morning: ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
  Afternoon: ['12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'],
  Evening: ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM'],
}

const bookedSlots = ['9:30 AM', '10:00 AM', '2:00 PM', '5:30 PM']

export default function BookAppointment() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState({
    city: '', hospital: null, department: '', doctor: null,
    date: '', timeSlot: '', type: 'in-person', notes: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState('')

  const stepLabels = ['City', 'Hospital', 'Department', 'Doctor', 'Date & Time', 'Confirm']

  const hospitals = booking.city ? mockHospitals[booking.city] || [] : []
  const doctors = booking.department
    ? mockDoctors.filter(d => d.speciality === booking.department || true)
    : mockDoctors

  const today = new Date().toISOString().split('T')[0]

  const handleConfirm = async () => {
    setLoading(true)
    setError('')
    try {
      const payload = {
        city: booking.city,
        hospitalId: booking.hospital?._id,
        department: booking.department,
        doctorId: booking.doctor?._id,
        date: booking.date,
        timeSlot: booking.timeSlot,
        type: booking.type,
        notes: booking.notes,
      }
      const res = await appointmentsApi.create(payload)
      setSuccess(res.data)
    } catch (err) {
      // For demo: simulate success
      setSuccess({ _id: 'APT' + Date.now().toString().slice(-6), ...booking })
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h2>
          <p className="text-gray-500 mb-5">Your appointment has been successfully booked.</p>
          <div className="bg-primary-50 rounded-xl p-4 text-left text-sm space-y-2 mb-6">
            <div><span className="font-semibold">Appointment ID:</span> {success._id}</div>
            <div><span className="font-semibold">Doctor:</span> {booking.doctor?.name}</div>
            <div><span className="font-semibold">Hospital:</span> {booking.hospital?.name}</div>
            <div><span className="font-semibold">Date:</span> {new Date(booking.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
            <div><span className="font-semibold">Time:</span> {booking.timeSlot}</div>
          </div>
          <Link to="/dashboard/patient" className="btn-primary block text-center">Go to Dashboard</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-1">Book Appointment</h1>
          <p className="text-primary-200 text-sm">Follow the steps to book your consultation</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center gap-1">
            {stepLabels.map((label, i) => {
              const num = i + 1
              const done = step > num
              const active = step === num
              return (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${done ? 'bg-primary-700 text-white' : active ? 'bg-primary-700 text-white ring-4 ring-primary-200' : 'bg-gray-200 text-gray-500'}`}>
                      {done ? '✓' : num}
                    </div>
                    <span className="text-xs mt-1 text-gray-500 hidden sm:block">{label}</span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div className={`flex-1 h-1 rounded ${done ? 'bg-primary-700' : 'bg-gray-200'}`} />
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">{error}</div>}

          {/* Step 1: City */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Select City</h2>
              <p className="text-gray-500 text-sm mb-6">Choose the city where you'd like to visit</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CITIES.map((city) => (
                  <button
                    type="button"
                    key={city}
                    onClick={() => { setBooking({ ...booking, city, hospital: null }); setStep(2) }}
                    className={`p-4 rounded-xl border-2 text-center font-semibold transition-all ${booking.city === city ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-primary-300'}`}
                  >
                    <div className="text-2xl mb-1">🏙</div>
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Hospital */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Hospital in {booking.city}</h2>
              <p className="text-gray-500 text-sm mb-6">Select your preferred GyneCare facility</p>
              <div className="space-y-3">
                {hospitals.map((h) => (
                  <button
                    type="button"
                    key={h._id}
                    onClick={() => { setBooking({ ...booking, hospital: h }); setStep(3) }}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${booking.hospital?._id === h._id ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}
                  >
                    <div className="text-3xl">🏥</div>
                    <div>
                      <div className="font-semibold text-gray-900">{h.name}</div>
                      <div className="text-sm text-gray-500">{h.address}</div>
                    </div>
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setStep(1)} className="mt-4 text-sm text-gray-500 hover:text-gray-700">← Back</button>
            </div>
          )}

          {/* Step 3: Department */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Select Department</h2>
              <p className="text-gray-500 text-sm mb-6">Choose the specialty for your consultation</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DEPARTMENTS.map((dept) => (
                  <button
                    type="button"
                    key={dept}
                    onClick={() => { setBooking({ ...booking, department: dept }); setStep(4) }}
                    className={`p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${booking.department === dept ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-primary-300 text-gray-700'}`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setStep(2)} className="mt-4 text-sm text-gray-500 hover:text-gray-700">← Back</button>
            </div>
          )}

          {/* Step 4: Doctor */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Doctor</h2>
              <p className="text-gray-500 text-sm mb-6">Select your preferred specialist</p>
              <div className="space-y-3">
                {doctors.map((doc) => (
                  <button
                    type="button"
                    key={doc._id}
                    onClick={() => { setBooking({ ...booking, doctor: doc }); setStep(5) }}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${booking.doctor?._id === doc._id ? 'border-primary-600 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-700 flex-shrink-0">
                        {doc.name.charAt(4)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{doc.name}</div>
                        <div className="text-sm text-primary-600">{doc.speciality}</div>
                        <div className="text-xs text-gray-500">{doc.experience} years · ⭐ {doc.rating}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary-700">₹{doc.fee}</div>
                        <div className="text-xs text-gray-400">consultation</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => setStep(3)} className="mt-4 text-sm text-gray-500 hover:text-gray-700">← Back</button>
            </div>
          )}

          {/* Step 5: Date & Time */}
          {step === 5 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Select Date & Time</h2>
              <p className="text-gray-500 text-sm mb-4">Choose your preferred appointment slot</p>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <input
                  type="date"
                  min={today}
                  value={booking.date}
                  onChange={(e) => setBooking({ ...booking, date: e.target.value, timeSlot: '' })}
                  className="input-field max-w-xs"
                />
              </div>

              {booking.date && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Time Slot</label>
                  {Object.entries(timeSlots).map(([period, slots]) => (
                    <div key={period} className="mb-4">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{period}</div>
                      <div className="flex flex-wrap gap-2">
                        {slots.map((slot) => {
                          const isBooked = bookedSlots.includes(slot)
                          const isSelected = booking.timeSlot === slot
                          return (
                            <button
                              type="button"
                              key={slot}
                              disabled={isBooked}
                              onClick={() => setBooking({ ...booking, timeSlot: slot })}
                              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                                isBooked ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through'
                                  : isSelected ? 'bg-primary-700 text-white border-primary-700'
                                  : 'border-gray-200 hover:border-primary-400 text-gray-700'
                              }`}
                            >
                              {slot}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                <div className="flex gap-3">
                  {['in-person', 'teleconsultation'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setBooking({ ...booking, type: t })}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all capitalize ${booking.type === t ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-gray-200 text-gray-600 hover:border-primary-300'}`}
                    >
                      {t === 'in-person' ? '🏥 In-Person' : '💻 Video Call'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(4)} className="btn-outline py-3 flex-1">← Back</button>
                <button
                  type="button"
                  onClick={() => setStep(6)}
                  disabled={!booking.date || !booking.timeSlot}
                  className="btn-primary py-3 flex-1 disabled:opacity-50"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Confirm */}
          {step === 6 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Review & Confirm</h2>
              <p className="text-gray-500 text-sm mb-6">Review your appointment details before confirming</p>

              <div className="bg-gray-50 rounded-xl p-5 space-y-3 text-sm mb-5">
                {[
                  { label: 'City', value: booking.city },
                  { label: 'Hospital', value: booking.hospital?.name },
                  { label: 'Address', value: booking.hospital?.address },
                  { label: 'Department', value: booking.department },
                  { label: 'Doctor', value: booking.doctor?.name },
                  { label: 'Date', value: booking.date ? new Date(booking.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '' },
                  { label: 'Time', value: booking.timeSlot },
                  { label: 'Type', value: booking.type === 'in-person' ? '🏥 In-Person Visit' : '💻 Teleconsultation' },
                  { label: 'Consultation Fee', value: `₹${booking.doctor?.fee || 800}` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-gray-500 w-32 flex-shrink-0">{label}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                <textarea
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  placeholder="Any specific concern, medical history, or request for the doctor..."
                  rows={3}
                  className="input-field resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(5)} className="btn-outline py-3 flex-1">← Back</button>
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={loading}
                  className="btn-accent py-3 flex-1 font-bold disabled:opacity-60"
                >
                  {loading ? 'Booking...' : '✓ Confirm Appointment'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
