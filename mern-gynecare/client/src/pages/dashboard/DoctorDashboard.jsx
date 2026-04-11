import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { appointments as appointmentsApi } from '../../services/api'

const TABS = ["Today's Schedule", 'Appointments', 'My Patients', 'Performance', 'Profile']

const statusColors = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  completed: 'bg-blue-100 text-blue-700',
  cancelled: 'bg-red-100 text-red-700',
}

const mockSchedule = [
  { _id: 's1', patientName: 'Anjali Mehta', time: '9:30 AM', type: 'in-person', status: 'confirmed', complaint: 'Routine antenatal checkup' },
  { _id: 's2', patientName: 'Rekha Sharma', time: '10:30 AM', type: 'teleconsultation', status: 'confirmed', complaint: 'PCOS follow-up consultation' },
  { _id: 's3', patientName: 'Pooja Deshpande', time: '11:30 AM', type: 'in-person', status: 'pending', complaint: 'Irregular periods, hormonal workup' },
  { _id: 's4', patientName: 'Sunita Patil', time: '2:30 PM', type: 'in-person', status: 'confirmed', complaint: 'Post-op laparoscopy follow-up' },
  { _id: 's5', patientName: 'Kavya Nair', time: '4:00 PM', type: 'teleconsultation', status: 'pending', complaint: 'Fertility consultation - initial visit' },
]

const mockPatients = [
  { _id: 'p1', name: 'Anjali Mehta', lastVisit: '2024-04-10', nextAppointment: '2024-04-20', condition: 'Pregnancy - 28 weeks', totalVisits: 8 },
  { _id: 'p2', name: 'Rekha Sharma', lastVisit: '2024-04-05', nextAppointment: '2024-04-28', condition: 'PCOS Management', totalVisits: 5 },
  { _id: 'p3', name: 'Pooja Deshpande', lastVisit: '2024-03-20', nextAppointment: null, condition: 'Irregular cycles', totalVisits: 2 },
  { _id: 'p4', name: 'Sunita Patil', lastVisit: '2024-04-01', nextAppointment: '2024-04-20', condition: 'Post-op recovery', totalVisits: 12 },
]

export default function DoctorDashboard() {
  const { user, updateUser } = useAuth()
  const [activeTab, setActiveTab] = useState("Today's Schedule")
  const [schedule, setSchedule] = useState(mockSchedule)
  const [allAppointments, setAllAppointments] = useState(mockSchedule)
  const [statusFilter, setStatusFilter] = useState('all')
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '', speciality: user?.speciality || 'Obstetrics & Gynecology',
    qualification: user?.qualification || '', experience: user?.experience || '',
    bio: user?.bio || '', consultationFee: user?.consultationFee || '',
  })
  const [toast, setToast] = useState('')

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const handleMarkComplete = (id) => {
    setSchedule(prev => prev.map(s => s._id === id ? { ...s, status: 'completed' } : s))
    showToast('Marked as completed!')
  }

  const filteredAppts = statusFilter === 'all' ? allAppointments : allAppointments.filter(a => a.status === statusFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 text-sm">
          ✓ {toast}
        </div>
      )}

      <div className="bg-primary-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Dr. {user?.name?.replace('Dr. ', '') || 'Doctor'}</h1>
          <p className="text-primary-200 text-sm mt-1">{user?.speciality || 'Specialist'} · GyneCare Hospital</p>
        </div>
      </div>

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

        {/* TODAY'S SCHEDULE */}
        {activeTab === "Today's Schedule" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Today — {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </h2>
              <div className="text-sm text-gray-500">{schedule.filter(s => s.status !== 'completed').length} remaining</div>
            </div>
            {schedule.length === 0 ? (
              <div className="card p-10 text-center text-gray-400">
                <div className="text-4xl mb-2">📅</div>
                <p>No appointments scheduled for today.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {schedule.map((appt) => (
                  <div key={appt._id} className={`card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${appt.status === 'completed' ? 'opacity-60' : ''}`}>
                    <div className="flex items-start gap-4">
                      <div className="text-center flex-shrink-0">
                        <div className="font-bold text-primary-700 text-lg">{appt.time}</div>
                        <span className={`badge text-xs ${appt.type === 'teleconsultation' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                          {appt.type === 'teleconsultation' ? '💻' : '🏥'} {appt.type === 'teleconsultation' ? 'Video' : 'In-Person'}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{appt.patientName}</div>
                        <div className="text-sm text-gray-500">{appt.complaint}</div>
                        <span className={`badge mt-1 ${statusColors[appt.status]} capitalize text-xs`}>{appt.status}</span>
                      </div>
                    </div>
                    {appt.status !== 'completed' && (
                      <button
                        type="button"
                        onClick={() => handleMarkComplete(appt._id)}
                        className="btn-primary text-sm py-2 px-4 flex-shrink-0"
                      >
                        ✓ Mark Complete
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* APPOINTMENTS */}
        {activeTab === 'Appointments' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">All Appointments</h2>
              <div className="flex gap-2">
                {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
                  <button
                    type="button"
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize ${statusFilter === status ? 'bg-primary-700 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left">
                    <th className="p-4 font-semibold text-gray-700">Patient</th>
                    <th className="p-4 font-semibold text-gray-700">Date & Time</th>
                    <th className="p-4 font-semibold text-gray-700">Type</th>
                    <th className="p-4 font-semibold text-gray-700">Status</th>
                    <th className="p-4 font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppts.map((appt, i) => (
                    <tr key={appt._id} className={`border-b border-gray-50 hover:bg-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                      <td className="p-4 font-medium text-gray-900">{appt.patientName}</td>
                      <td className="p-4 text-gray-600">{appt.time}</td>
                      <td className="p-4">
                        <span className={`badge text-xs ${appt.type === 'teleconsultation' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                          {appt.type === 'teleconsultation' ? '💻 Video' : '🏥 In-Person'}
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          value={appt.status}
                          onChange={(e) => setAllAppointments(prev => prev.map(a => a._id === appt._id ? { ...a, status: e.target.value } : a))}
                          className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-primary-400"
                        >
                          {['pending', 'confirmed', 'completed', 'cancelled'].map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                        </select>
                      </td>
                      <td className="p-4">
                        <button type="button" className="text-primary-600 hover:text-primary-800 text-xs font-medium">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MY PATIENTS */}
        {activeTab === 'My Patients' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">My Patients ({mockPatients.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockPatients.map((patient) => (
                <div key={patient._id} className="card p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center font-bold text-accent-700 flex-shrink-0">
                      {patient.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">{patient.condition}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                    <div><span className="font-medium">Last visit:</span> {patient.lastVisit}</div>
                    <div><span className="font-medium">Total visits:</span> {patient.totalVisits}</div>
                    <div className="col-span-2">
                      <span className="font-medium">Next appointment:</span>{' '}
                      {patient.nextAppointment || <span className="text-gray-400">Not scheduled</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PERFORMANCE */}
        {activeTab === 'Performance' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Performance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Total Consultations', value: '1,240', icon: '🩺', color: 'text-primary-700' },
                { label: 'Average Rating', value: '4.9 ⭐', icon: '⭐', color: 'text-yellow-600' },
                { label: 'Patient Reviews', value: '524', icon: '💬', color: 'text-green-600' },
              ].map((stat) => (
                <div key={stat.label} className="card p-6 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4">Recent Reviews</h3>
              <div className="space-y-4">
                {[
                  { patient: 'Anjali M.', rating: 5, text: 'Dr. was very thorough and patient. Explained everything clearly. Highly recommend!' },
                  { patient: 'Rekha S.', rating: 5, text: 'My PCOS is finally under control after years of struggle. Thank you Doctor!' },
                  { patient: 'Pooja D.', rating: 4, text: 'Very professional and knowledgeable. Wait time was a bit long but worth it.' },
                ].map((review, i) => (
                  <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-medium text-sm text-gray-900">{review.patient}</div>
                      <div className="text-yellow-400 text-xs">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                    </div>
                    <p className="text-sm text-gray-600 italic">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROFILE */}
        {activeTab === 'Profile' && (
          <div className="max-w-lg space-y-4">
            <h2 className="text-xl font-bold text-gray-900">My Profile</h2>
            <div className="card p-6">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); updateUser(profileForm); showToast('Profile updated!') }}>
                {[
                  { label: 'Full Name', key: 'name', type: 'text' },
                  { label: 'Speciality', key: 'speciality', type: 'text' },
                  { label: 'Qualifications', key: 'qualification', type: 'text', placeholder: 'e.g. MBBS, MS (OBG)' },
                  { label: 'Years of Experience', key: 'experience', type: 'number' },
                  { label: 'Consultation Fee (₹)', key: 'consultationFee', type: 'number' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <input
                      type={type}
                      value={profileForm[key]}
                      onChange={(e) => setProfileForm({...profileForm, [key]: e.target.value})}
                      placeholder={placeholder}
                      className="input-field"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Professional Bio</label>
                  <textarea
                    value={profileForm.bio}
                    onChange={(e) => setProfileForm({...profileForm, bio: e.target.value})}
                    rows={3}
                    placeholder="Brief professional bio..."
                    className="input-field resize-none"
                  />
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
