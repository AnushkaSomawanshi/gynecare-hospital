import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const TABS = ['Overview', 'Manage Users', 'Manage Doctors', 'Manage Appointments', 'Health Packages', 'Blogs', 'Reports']

const statusColors = {
  confirmed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  completed: 'bg-blue-100 text-blue-700',
  cancelled: 'bg-red-100 text-red-700',
}

const mockUsers = [
  { _id: 'u1', name: 'Anjali Mehta', email: 'anjali@example.com', phone: '9876543210', role: 'patient', joinDate: '2024-01-10', status: 'active' },
  { _id: 'u2', name: 'Dr. Priya Sharma', email: 'priya@gynecare.com', phone: '9876543211', role: 'doctor', joinDate: '2024-01-05', status: 'active' },
  { _id: 'u3', name: 'Rekha Singh', email: 'rekha@example.com', phone: '9876543212', role: 'patient', joinDate: '2024-02-15', status: 'active' },
  { _id: 'u4', name: 'Dr. Sunita Patel', email: 'sunita@gynecare.com', phone: '9876543213', role: 'doctor', joinDate: '2024-01-08', status: 'active' },
  { _id: 'u5', name: 'Pooja Nair', email: 'pooja@example.com', phone: '9876543214', role: 'patient', joinDate: '2024-03-01', status: 'inactive' },
]

const mockDoctors = [
  { _id: 'd1', name: 'Dr. Priya Sharma', speciality: 'Obstetrics & Gynecology', hospital: 'GyneCare Pune', rating: 4.9, status: 'active' },
  { _id: 'd2', name: 'Dr. Sunita Patel', speciality: 'IVF & Fertility', hospital: 'GyneCare Mumbai', rating: 4.8, status: 'active' },
  { _id: 'd3', name: 'Dr. Anita Desai', speciality: 'Gynecologic Oncology', hospital: 'GyneCare Mumbai BKC', rating: 4.9, status: 'active' },
  { _id: 'd4', name: 'Dr. Meera Kulkarni', speciality: 'Maternal-Fetal Medicine', hospital: 'GyneCare Nashik', rating: 4.7, status: 'active' },
]

const mockAppointments = [
  { _id: 'a1', patient: 'Anjali Mehta', doctor: 'Dr. Priya Sharma', date: '2024-04-20', status: 'confirmed', type: 'in-person' },
  { _id: 'a2', patient: 'Rekha Singh', doctor: 'Dr. Sunita Patel', date: '2024-04-21', status: 'pending', type: 'teleconsultation' },
  { _id: 'a3', patient: 'Pooja Nair', doctor: 'Dr. Meera Kulkarni', date: '2024-04-15', status: 'completed', type: 'in-person' },
  { _id: 'a4', patient: 'Sunita Deshpande', doctor: 'Dr. Anita Desai', date: '2024-04-18', status: 'cancelled', type: 'in-person' },
  { _id: 'a5', patient: 'Kavya Reddy', doctor: 'Dr. Priya Sharma', date: '2024-04-22', status: 'pending', type: 'teleconsultation' },
]

const mockPackages = [
  { _id: 'p1', name: "Women's Wellness Checkup", category: "Women's Health", price: 2499, status: 'active' },
  { _id: 'p2', name: 'Fertility Assessment Pack', category: 'Fertility', price: 4999, status: 'active' },
  { _id: 'p3', name: 'Antenatal Care Package', category: 'Pregnancy', price: 8999, status: 'active' },
  { _id: 'p4', name: 'PCOS Diagnostic Panel', category: 'PCOS', price: 1999, status: 'inactive' },
]

const mockBlogs = [
  { _id: 'b1', title: 'Understanding PCOS', category: 'PCOS', author: 'Dr. Priya Sharma', status: 'published' },
  { _id: 'b2', title: 'Your IVF Guide', category: 'Fertility', author: 'Dr. Sunita Patel', status: 'published' },
  { _id: 'b3', title: 'Nutrition During Pregnancy', category: 'Pregnancy', author: 'Dr. Meera Kulkarni', status: 'draft' },
]

export default function AdminDashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('Overview')
  const [users, setUsers] = useState(mockUsers)
  const [doctors, setDoctors] = useState(mockDoctors)
  const [appointments, setAppointments] = useState(mockAppointments)
  const [packages, setPackages] = useState(mockPackages)
  const [blogs, setBlogs] = useState(mockBlogs)
  const [userFilter, setUserFilter] = useState('all')
  const [apptFilter, setApptFilter] = useState('all')
  const [toast, setToast] = useState('')

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const filteredUsers = userFilter === 'all' ? users : users.filter(u => u.role === userFilter)
  const filteredAppts = apptFilter === 'all' ? appointments : appointments.filter(a => a.status === apptFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 text-sm">
          ✓ {toast}
        </div>
      )}

      <div className="bg-primary-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-primary-200 text-sm mt-1">GyneCare Hospital Management System</p>
        </div>
      </div>

      <div className="bg-white border-b shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
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

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* OVERVIEW */}
        {activeTab === 'Overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Users', value: users.length, icon: '👥', color: 'text-primary-700', bg: 'bg-primary-50' },
                { label: 'Total Doctors', value: doctors.length, icon: '👩‍⚕️', color: 'text-green-700', bg: 'bg-green-50' },
                { label: "Today's Appointments", value: 12, icon: '📅', color: 'text-yellow-700', bg: 'bg-yellow-50' },
                { label: 'Active Packages', value: packages.filter(p => p.status === 'active').length, icon: '📦', color: 'text-purple-700', bg: 'bg-purple-50' },
              ].map((stat) => (
                <div key={stat.label} className={`card p-5 ${stat.bg}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-gray-900 mb-4">Recent Appointments</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-left">
                      <th className="pb-3 font-semibold text-gray-700">Patient</th>
                      <th className="pb-3 font-semibold text-gray-700">Doctor</th>
                      <th className="pb-3 font-semibold text-gray-700">Date</th>
                      <th className="pb-3 font-semibold text-gray-700">Type</th>
                      <th className="pb-3 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.slice(0, 5).map((appt) => (
                      <tr key={appt._id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-3 font-medium">{appt.patient}</td>
                        <td className="py-3 text-gray-600">{appt.doctor}</td>
                        <td className="py-3 text-gray-600">{appt.date}</td>
                        <td className="py-3">
                          <span className={`badge text-xs ${appt.type === 'teleconsultation' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                            {appt.type === 'teleconsultation' ? '💻 Video' : '🏥 In-Person'}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className={`badge capitalize text-xs ${statusColors[appt.status]}`}>{appt.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* MANAGE USERS */}
        {activeTab === 'Manage Users' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Manage Users</h2>
              <div className="flex gap-2">
                {['all', 'patient', 'doctor', 'admin'].map(role => (
                  <button type="button" key={role} onClick={() => setUserFilter(role)} className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${userFilter === role ? 'bg-primary-700 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                    {role}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left">
                    {['Name', 'Email', 'Phone', 'Role', 'Join Date', 'Status', 'Actions'].map(h => (
                      <th key={h} className="p-4 font-semibold text-gray-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u) => (
                    <tr key={u._id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-4 font-medium">{u.name}</td>
                      <td className="p-4 text-gray-600">{u.email}</td>
                      <td className="p-4 text-gray-600">{u.phone}</td>
                      <td className="p-4">
                        <span className={`badge capitalize text-xs ${u.role === 'doctor' ? 'bg-purple-100 text-purple-700' : u.role === 'admin' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="p-4 text-gray-500">{u.joinDate}</td>
                      <td className="p-4">
                        <span className={`badge text-xs ${u.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <button type="button" onClick={() => { setUsers(prev => prev.filter(usr => usr._id !== u._id)); showToast('User removed.') }} className="text-red-500 hover:text-red-700 text-xs font-medium">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MANAGE DOCTORS */}
        {activeTab === 'Manage Doctors' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Manage Doctors</h2>
              <button type="button" className="btn-primary text-sm py-2">+ Add Doctor</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left">
                    {['Name', 'Speciality', 'Hospital', 'Rating', 'Status', 'Actions'].map(h => (
                      <th key={h} className="p-4 font-semibold text-gray-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doc) => (
                    <tr key={doc._id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-4 font-medium">{doc.name}</td>
                      <td className="p-4 text-gray-600">{doc.speciality}</td>
                      <td className="p-4 text-gray-600">{doc.hospital}</td>
                      <td className="p-4 text-yellow-600 font-medium">⭐ {doc.rating}</td>
                      <td className="p-4">
                        <span className={`badge text-xs ${doc.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{doc.status}</span>
                      </td>
                      <td className="p-4 flex gap-2">
                        <button type="button" className="text-primary-600 hover:text-primary-800 text-xs font-medium">Edit</button>
                        <button type="button" onClick={() => { setDoctors(prev => prev.filter(d => d._id !== doc._id)); showToast('Doctor removed.') }} className="text-red-500 hover:text-red-700 text-xs font-medium">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MANAGE APPOINTMENTS */}
        {activeTab === 'Manage Appointments' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Manage Appointments</h2>
              <div className="flex gap-2 flex-wrap">
                {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map(s => (
                  <button type="button" key={s} onClick={() => setApptFilter(s)} className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize ${apptFilter === s ? 'bg-primary-700 text-white' : 'border border-gray-200 text-gray-600'}`}>{s}</button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left">
                    {['Patient', 'Doctor', 'Date', 'Type', 'Status', 'Action'].map(h => (
                      <th key={h} className="p-4 font-semibold text-gray-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredAppts.map((appt) => (
                    <tr key={appt._id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-4 font-medium">{appt.patient}</td>
                      <td className="p-4 text-gray-600">{appt.doctor}</td>
                      <td className="p-4 text-gray-600">{appt.date}</td>
                      <td className="p-4">
                        <span className={`badge text-xs ${appt.type === 'teleconsultation' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                          {appt.type === 'teleconsultation' ? '💻 Video' : '🏥 In-Person'}
                        </span>
                      </td>
                      <td className="p-4">
                        <select
                          value={appt.status}
                          onChange={(e) => setAppointments(prev => prev.map(a => a._id === appt._id ? { ...a, status: e.target.value } : a))}
                          className="text-xs border border-gray-200 rounded-lg px-2 py-1 focus:outline-none"
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

        {/* HEALTH PACKAGES */}
        {activeTab === 'Health Packages' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Health Packages</h2>
              <button type="button" className="btn-primary text-sm py-2">+ Add Package</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {packages.map((pkg) => (
                <div key={pkg._id} className="card p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="badge bg-primary-100 text-primary-700 text-xs">{pkg.category}</span>
                      <h3 className="font-bold text-gray-900 text-sm mt-1">{pkg.name}</h3>
                      <div className="text-primary-700 font-bold mt-1">₹{pkg.price.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div
                        className={`w-10 h-5 rounded-full transition-colors cursor-pointer ${pkg.status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`}
                        onClick={() => setPackages(prev => prev.map(p => p._id === pkg._id ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' } : p))}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full shadow mt-0.5 transition-transform ${pkg.status === 'active' ? 'translate-x-5' : 'translate-x-1'}`} />
                      </div>
                      <span className="text-xs text-gray-600">{pkg.status === 'active' ? 'Active' : 'Inactive'}</span>
                    </label>
                    <div className="flex gap-2">
                      <button type="button" className="text-primary-600 text-xs font-medium hover:text-primary-800">Edit</button>
                      <button type="button" className="text-red-500 text-xs font-medium hover:text-red-700">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BLOGS */}
        {activeTab === 'Blogs' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Blog Management</h2>
              <button type="button" className="btn-primary text-sm py-2">+ New Post</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left">
                    {['Title', 'Category', 'Author', 'Status', 'Actions'].map(h => (
                      <th key={h} className="p-4 font-semibold text-gray-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr key={blog._id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="p-4 font-medium max-w-48 truncate">{blog.title}</td>
                      <td className="p-4 text-gray-600">{blog.category}</td>
                      <td className="p-4 text-gray-600">{blog.author}</td>
                      <td className="p-4">
                        <span className={`badge text-xs ${blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {blog.status}
                        </span>
                      </td>
                      <td className="p-4 flex gap-2">
                        <button type="button" onClick={() => setBlogs(prev => prev.map(b => b._id === blog._id ? { ...b, status: b.status === 'published' ? 'draft' : 'published' } : b))} className="text-primary-600 text-xs font-medium hover:text-primary-800">
                          {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                        </button>
                        <button type="button" className="text-gray-500 text-xs font-medium hover:text-gray-700">Edit</button>
                        <button type="button" onClick={() => { setBlogs(prev => prev.filter(b => b._id !== blog._id)); showToast('Blog deleted.') }} className="text-red-500 text-xs font-medium hover:text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* REPORTS */}
        {activeTab === 'Reports' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">System Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Monthly Appointments Report', desc: 'Total appointments, completed vs cancelled, department-wise breakdown', action: 'Download CSV' },
                { title: 'Revenue Report', desc: 'Package bookings, consultation fees, city-wise revenue', action: 'Download CSV' },
                { title: 'Doctor Performance Report', desc: 'Ratings, consultation counts, patient feedback analysis', action: 'Download PDF' },
                { title: 'Patient Demographics', desc: 'Age distribution, city-wise, common conditions', action: 'Download PDF' },
              ].map((report) => (
                <div key={report.title} className="card p-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{report.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{report.desc}</p>
                  </div>
                  <button type="button" onClick={() => showToast(`${report.action} started!`)} className="btn-outline text-sm py-1.5 px-3 flex-shrink-0">
                    {report.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
