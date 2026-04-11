import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { appointments as appointmentsApi, pregnancy as pregnancyApi, menstrual as menstrualApi, reports as reportsApi } from '../../services/api'

const TABS = ['Overview', 'Appointments', 'Pregnancy Tracker', 'Menstrual Cycle', 'Medical Records', 'Profile']

const mockAppointments = [
  { _id: 'a1', doctorName: 'Dr. Priya Sharma', department: 'Obstetrics & Gynecology', hospital: 'GyneCare Pune', date: '2024-04-20', time: '10:30 AM', status: 'confirmed', type: 'in-person' },
  { _id: 'a2', doctorName: 'Dr. Sunita Patel', department: 'IVF & Fertility', hospital: 'GyneCare Mumbai', date: '2024-04-28', time: '3:00 PM', status: 'pending', type: 'teleconsultation' },
  { _id: 'a3', doctorName: 'Dr. Meera Kulkarni', department: 'Maternal-Fetal Medicine', hospital: 'GyneCare Nashik', date: '2024-03-15', time: '11:00 AM', status: 'completed', type: 'in-person' },
]

const weekMilestones = [
  { week: 4, title: 'Neural tube forming', size: 'Poppy seed' },
  { week: 8, title: 'Heart beating', size: 'Raspberry' },
  { week: 12, title: 'All organs formed', size: 'Lime' },
  { week: 16, title: 'Can feel movement', size: 'Avocado' },
  { week: 20, title: 'Anatomy scan', size: 'Banana' },
  { week: 24, title: 'Hearing develops', size: 'Corn' },
  { week: 28, title: 'Eyes can open', size: 'Eggplant' },
  { week: 32, title: 'Practice breathing', size: 'Squash' },
  { week: 36, title: 'Full term soon!', size: 'Honeydew' },
  { week: 40, title: 'Due date!', size: 'Watermelon' },
]

const statusColors = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  completed: 'bg-blue-100 text-blue-700',
  cancelled: 'bg-red-100 text-red-700',
}

export default function PatientDashboard() {
  const { user, updateUser } = useAuth()
  const [activeTab, setActiveTab] = useState('Overview')
  const [appointments, setAppointments] = useState(mockAppointments)
  const [pregnancy, setPregnancy] = useState(null)
  const [lmpDate, setLmpDate] = useState('')
  const [cycles, setCycles] = useState([])
  const [cycleForm, setCycleForm] = useState({ startDate: '', cycleLength: 28, periodLength: 5, flow: 'moderate', symptoms: [], notes: '' })
  const [reports, setReports] = useState([])
  const [uploadForm, setUploadForm] = useState({ type: '', date: '', notes: '' })
  const [profileForm, setProfileForm] = useState({ name: user?.name || '', email: user?.email || '', phone: user?.phone || '', dob: user?.dob || '', bloodGroup: user?.bloodGroup || '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [apptRes, pregRes, cycRes, repRes] = await Promise.allSettled([
          appointmentsApi.getAll(),
          pregnancyApi.get(),
          menstrualApi.getAll(),
          reportsApi.getAll(),
        ])
        if (apptRes.status === 'fulfilled' && apptRes.value.data?.length) setAppointments(apptRes.value.data)
        if (pregRes.status === 'fulfilled') setPregnancy(pregRes.value.data)
        if (cycRes.status === 'fulfilled' && cycRes.value.data) setCycles(cycRes.value.data)
        if (repRes.status === 'fulfilled' && repRes.value.data) setReports(repRes.value.data)
      } catch {}
    }
    fetchData()
  }, [])

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const handleStartPregnancy = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await pregnancyApi.createOrUpdate({ lmpDate })
      const dueDate = new Date(lmpDate)
      dueDate.setDate(dueDate.getDate() + 280)
      const today = new Date()
      const weeksDiff = Math.floor((today - new Date(lmpDate)) / (7 * 24 * 60 * 60 * 1000))
      setPregnancy({ lmpDate, dueDate: dueDate.toISOString(), currentWeek: weeksDiff })
      showToast('Pregnancy tracking started!')
    } catch {
      const dueDate = new Date(lmpDate)
      dueDate.setDate(dueDate.getDate() + 280)
      const weeksDiff = Math.floor((new Date() - new Date(lmpDate)) / (7 * 24 * 60 * 60 * 1000))
      setPregnancy({ lmpDate, dueDate: dueDate.toISOString(), currentWeek: Math.max(1, Math.min(40, weeksDiff)) })
    } finally {
      setLoading(false)
    }
  }

  const handleAddCycle = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await menstrualApi.create(cycleForm)
      setCycles(prev => [{ ...cycleForm, _id: Date.now().toString() }, ...prev])
      setCycleForm({ startDate: '', cycleLength: 28, periodLength: 5, flow: 'moderate', symptoms: [], notes: '' })
      showToast('Cycle logged successfully!')
    } catch {
      setCycles(prev => [{ ...cycleForm, _id: Date.now().toString() }, ...prev])
      showToast('Cycle logged!')
    } finally {
      setLoading(false)
    }
  }

  const handleCancelAppointment = async (id) => {
    try {
      await appointmentsApi.cancel(id)
      setAppointments(prev => prev.map(a => a._id === id ? { ...a, status: 'cancelled' } : a))
      showToast('Appointment cancelled.')
    } catch {
      setAppointments(prev => prev.map(a => a._id === id ? { ...a, status: 'cancelled' } : a))
    }
  }

  const upcomingAppts = appointments.filter(a => a.status !== 'completed' && a.status !== 'cancelled')
  const pastAppts = appointments.filter(a => a.status === 'completed' || a.status === 'cancelled')

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 text-sm">
          ✓ {toast}
        </div>
      )}

      {/* Header */}
      <div className="bg-primary-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Welcome, {user?.name?.split(' ')[0] || 'Patient'}</h1>
          <p className="text-primary-200 text-sm mt-1">Your personal health dashboard</p>
        </div>
      </div>

      {/* Tab nav */}
      <div className="bg-white border-b shadow-sm overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 py-2">
            {TABS.map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab ? 'tab-active' : 'tab-inactive'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* OVERVIEW */}
        {activeTab === 'Overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Appointments', value: appointments.length, icon: '📅', color: 'text-primary-700' },
                { label: 'Upcoming', value: upcomingAppts.length, icon: '⏰', color: 'text-green-600' },
                { label: 'Pregnancy Week', value: pregnancy?.currentWeek ? `Week ${pregnancy.currentWeek}` : 'Not tracking', icon: '🤱', color: 'text-accent-600' },
                { label: 'Reports Uploaded', value: reports.length, icon: '📋', color: 'text-blue-600' },
              ].map((stat) => (
                <div key={stat.label} className="card p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📅', label: 'Book Appointment', to: '/book-appointment', color: 'bg-primary-50 border-primary-200 text-primary-700' },
                { icon: '🔍', label: 'Find Doctor', to: '/find-doctor', color: 'bg-accent-50 border-accent-200 text-accent-700' },
                { icon: '🤱', label: 'Pregnancy Tracker', tab: 'Pregnancy Tracker', color: 'bg-green-50 border-green-200 text-green-700' },
                { icon: '📋', label: 'Upload Report', tab: 'Medical Records', color: 'bg-blue-50 border-blue-200 text-blue-700' },
              ].map((action) => (
                action.to ? (
                  <Link key={action.label} to={action.to} className={`card p-5 border flex flex-col items-center gap-2 text-center hover:shadow-md ${action.color}`}>
                    <div className="text-3xl">{action.icon}</div>
                    <div className="font-semibold text-sm">{action.label}</div>
                  </Link>
                ) : (
                  <button
                    type="button"
                    key={action.label}
                    onClick={() => setActiveTab(action.tab)}
                    className={`card p-5 border flex flex-col items-center gap-2 text-center hover:shadow-md ${action.color}`}
                  >
                    <div className="text-3xl">{action.icon}</div>
                    <div className="font-semibold text-sm">{action.label}</div>
                  </button>
                )
              ))}
            </div>

            {upcomingAppts.length > 0 && (
              <div className="card p-5">
                <h3 className="font-bold text-gray-900 mb-4">Upcoming Appointments</h3>
                <div className="space-y-3">
                  {upcomingAppts.slice(0, 2).map((appt) => (
                    <div key={appt._id} className="flex items-center justify-between gap-3 p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-sm">{appt.doctorName}</div>
                        <div className="text-xs text-gray-500">{appt.department} · {appt.date} at {appt.time}</div>
                      </div>
                      <span className={`badge ${statusColors[appt.status]} capitalize`}>{appt.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* APPOINTMENTS */}
        {activeTab === 'Appointments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">My Appointments</h2>
              <Link to="/book-appointment" className="btn-primary text-sm py-2">+ Book New</Link>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Upcoming ({upcomingAppts.length})</h3>
              {upcomingAppts.length === 0 ? (
                <div className="card p-10 text-center text-gray-400">
                  <div className="text-4xl mb-2">📅</div>
                  <p>No upcoming appointments.</p>
                  <Link to="/book-appointment" className="btn-primary text-sm mt-3 inline-block">Book Now</Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {upcomingAppts.map((appt) => (
                    <div key={appt._id} className="card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-xl flex-shrink-0">👩‍⚕️</div>
                        <div>
                          <div className="font-bold text-gray-900">{appt.doctorName}</div>
                          <div className="text-sm text-primary-600">{appt.department}</div>
                          <div className="text-sm text-gray-500">{appt.hospital} · {appt.date} at {appt.time}</div>
                          <span className={`badge mt-1 ${appt.type === 'teleconsultation' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                            {appt.type === 'teleconsultation' ? '💻 Video' : '🏥 In-Person'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`badge ${statusColors[appt.status]} capitalize`}>{appt.status}</span>
                        {appt.status !== 'cancelled' && (
                          <button type="button" onClick={() => handleCancelAppointment(appt._id)} className="text-sm text-red-600 hover:text-red-800 font-medium">
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {pastAppts.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Past ({pastAppts.length})</h3>
                <div className="space-y-2">
                  {pastAppts.map((appt) => (
                    <div key={appt._id} className="card p-4 flex items-center justify-between gap-3 opacity-80">
                      <div>
                        <div className="font-medium text-sm">{appt.doctorName} · {appt.department}</div>
                        <div className="text-xs text-gray-500">{appt.date} at {appt.time}</div>
                      </div>
                      <span className={`badge ${statusColors[appt.status]} capitalize text-xs`}>{appt.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* PREGNANCY TRACKER */}
        {activeTab === 'Pregnancy Tracker' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Pregnancy Tracker</h2>
            {!pregnancy ? (
              <div className="card p-8 max-w-md">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">🤱</div>
                  <h3 className="font-bold text-gray-900 text-lg">Start Tracking Your Pregnancy</h3>
                  <p className="text-gray-500 text-sm mt-1">Enter your Last Menstrual Period (LMP) date to begin</p>
                </div>
                <form onSubmit={handleStartPregnancy} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Last Menstrual Period (LMP)</label>
                    <input type="date" value={lmpDate} onChange={(e) => setLmpDate(e.target.value)} max={new Date().toISOString().split('T')[0]} required className="input-field" />
                  </div>
                  <button type="submit" disabled={loading || !lmpDate} className="w-full btn-primary py-3 disabled:opacity-60">
                    {loading ? 'Starting...' : 'Start Pregnancy Tracker'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Current week card */}
                <div className="card p-6 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-4xl font-extrabold text-accent-600">Week {pregnancy.currentWeek}</div>
                      <div className="text-sm text-gray-500">Current Week</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary-700">
                        {Math.max(0, 40 - pregnancy.currentWeek)} weeks
                      </div>
                      <div className="text-sm text-gray-500">Remaining</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-700">
                        {pregnancy.dueDate ? new Date(pregnancy.dueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Calculating...'}
                      </div>
                      <div className="text-sm text-gray-500">Estimated Due Date</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Week 1</span>
                      <span>Week 40</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full transition-all"
                        style={{ width: `${Math.min(100, (pregnancy.currentWeek / 40) * 100)}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-center">{Math.round((pregnancy.currentWeek / 40) * 100)}% complete</div>
                  </div>
                </div>

                {/* Week milestones */}
                <h3 className="font-bold text-gray-900">Week-by-Week Milestones</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {weekMilestones.map((m) => {
                    const isPast = m.week < pregnancy.currentWeek
                    const isCurrent = m.week === Math.round(pregnancy.currentWeek / 4) * 4 || (m.week <= pregnancy.currentWeek && m.week + 4 > pregnancy.currentWeek)
                    return (
                      <div key={m.week} className={`rounded-xl p-3 text-center border-2 transition-all ${isCurrent ? 'border-accent-400 bg-accent-50' : isPast ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'}`}>
                        <div className={`text-sm font-bold ${isCurrent ? 'text-accent-700' : isPast ? 'text-green-700' : 'text-gray-500'}`}>Wk {m.week}</div>
                        <div className={`text-xs mt-0.5 ${isCurrent ? 'text-accent-600' : isPast ? 'text-green-600' : 'text-gray-400'}`}>{m.size}</div>
                        <div className="text-xs text-gray-500 mt-1">{m.title}</div>
                        {isPast && <div className="text-green-500 text-sm mt-1">✓</div>}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* MENSTRUAL CYCLE */}
        {activeTab === 'Menstrual Cycle' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Menstrual Cycle Tracker</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card p-5">
                <h3 className="font-bold text-gray-900 mb-4">Log New Cycle</h3>
                <form onSubmit={handleAddCycle} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cycle Start Date</label>
                    <input type="date" value={cycleForm.startDate} onChange={(e) => setCycleForm({...cycleForm, startDate: e.target.value})} required className="input-field" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cycle Length (days)</label>
                      <input type="number" min="21" max="35" value={cycleForm.cycleLength} onChange={(e) => setCycleForm({...cycleForm, cycleLength: Number(e.target.value)})} className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Period Length (days)</label>
                      <input type="number" min="2" max="10" value={cycleForm.periodLength} onChange={(e) => setCycleForm({...cycleForm, periodLength: Number(e.target.value)})} className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Flow Intensity</label>
                    <select value={cycleForm.flow} onChange={(e) => setCycleForm({...cycleForm, flow: e.target.value})} className="input-field">
                      {['light', 'moderate', 'heavy', 'very heavy'].map(f => <option key={f} value={f}>{f.charAt(0).toUpperCase() + f.slice(1)}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Symptoms</label>
                    <div className="flex flex-wrap gap-2">
                      {['Cramps', 'Bloating', 'Mood swings', 'Headache', 'Fatigue', 'Back pain'].map(sym => (
                        <label key={sym} className="flex items-center gap-1.5 cursor-pointer">
                          <input type="checkbox" checked={cycleForm.symptoms.includes(sym)} onChange={(e) => {
                            const syms = e.target.checked ? [...cycleForm.symptoms, sym] : cycleForm.symptoms.filter(s => s !== sym)
                            setCycleForm({...cycleForm, symptoms: syms})
                          }} className="text-primary-600 rounded" />
                          <span className="text-sm text-gray-600">{sym}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea value={cycleForm.notes} onChange={(e) => setCycleForm({...cycleForm, notes: e.target.value})} rows={2} placeholder="Any additional notes..." className="input-field resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full btn-primary py-2.5 disabled:opacity-60">
                    {loading ? 'Saving...' : 'Log Cycle'}
                  </button>
                </form>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4">Cycle History</h3>
                {cycles.length === 0 ? (
                  <div className="card p-8 text-center text-gray-400">
                    <div className="text-4xl mb-2">🌙</div>
                    <p className="text-sm">No cycles logged yet. Add your first cycle!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cycles.slice(0, 6).map((cycle, i) => (
                      <div key={cycle._id || i} className="card p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-semibold text-sm">{new Date(cycle.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                            <div className="text-xs text-gray-500">Cycle: {cycle.cycleLength}d · Period: {cycle.periodLength}d · Flow: {cycle.flow}</div>
                          </div>
                          <span className={`badge text-xs ${cycle.flow === 'heavy' || cycle.flow === 'very heavy' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                            {cycle.flow}
                          </span>
                        </div>
                        {cycle.symptoms?.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {cycle.symptoms.map(s => <span key={s} className="badge bg-gray-100 text-gray-600 text-xs">{s}</span>)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* MEDICAL RECORDS */}
        {activeTab === 'Medical Records' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Medical Records</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card p-5">
                <h3 className="font-bold text-gray-900 mb-4">Upload Report</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); showToast('Report uploaded!') }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Report File</label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="input-field py-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                    <select value={uploadForm.type} onChange={(e) => setUploadForm({...uploadForm, type: e.target.value})} required className="input-field">
                      <option value="">Select type</option>
                      {['Blood Test', 'Ultrasound', 'MRI', 'CT Scan', 'Biopsy', 'Mammography', 'Prescription', 'Discharge Summary', 'Other'].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Report Date</label>
                    <input type="date" value={uploadForm.date} onChange={(e) => setUploadForm({...uploadForm, date: e.target.value})} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                    <textarea value={uploadForm.notes} onChange={(e) => setUploadForm({...uploadForm, notes: e.target.value})} rows={2} className="input-field resize-none" placeholder="Any notes about this report..." />
                  </div>
                  <button type="submit" className="w-full btn-primary py-2.5">Upload Report</button>
                </form>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4">Your Reports</h3>
                {reports.length === 0 ? (
                  <div className="card p-8 text-center text-gray-400">
                    <div className="text-4xl mb-2">📋</div>
                    <p className="text-sm">No reports uploaded yet.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {reports.map((report, i) => (
                      <div key={report._id || i} className="card p-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">📄</div>
                          <div>
                            <div className="font-medium text-sm">{report.type || 'Medical Report'}</div>
                            <div className="text-xs text-gray-500">{report.date}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button type="button" className="text-xs text-primary-600 hover:text-primary-800 font-medium">View</button>
                          <button type="button" className="text-xs text-red-500 hover:text-red-700 font-medium">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* PROFILE */}
        {activeTab === 'Profile' && (
          <div className="space-y-6 max-w-lg">
            <h2 className="text-xl font-bold text-gray-900">My Profile</h2>
            <div className="card p-6">
              <h3 className="font-semibold text-gray-700 mb-4">Personal Information</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); updateUser(profileForm); showToast('Profile updated!') }}>
                {[
                  { label: 'Full Name', key: 'name', type: 'text' },
                  { label: 'Email Address', key: 'email', type: 'email' },
                  { label: 'Phone Number', key: 'phone', type: 'tel' },
                  { label: 'Date of Birth', key: 'dob', type: 'date' },
                ].map(({ label, key, type }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <input type={type} value={profileForm[key]} onChange={(e) => setProfileForm({...profileForm, [key]: e.target.value})} className="input-field" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
                  <select value={profileForm.bloodGroup} onChange={(e) => setProfileForm({...profileForm, bloodGroup: e.target.value})} className="input-field">
                    <option value="">Select</option>
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                  </select>
                </div>
                <button type="submit" className="btn-primary py-2.5">Save Changes</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
