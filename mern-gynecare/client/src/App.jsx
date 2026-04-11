import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Layout from './components/layout/Layout'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FindDoctor from './pages/FindDoctor'
import Hospitals from './pages/Hospitals'
import Specialities from './pages/Specialities'
import HealthPackages from './pages/HealthPackages'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Videos from './pages/Videos'
import About from './pages/About'
import Contact from './pages/Contact'
import InternationalPatients from './pages/InternationalPatients'
import Labs from './pages/Labs'
import BloodAvailability from './pages/BloodAvailability'
import AcademicsCsr from './pages/AcademicsCsr'
import Career from './pages/Career'
import SecondOpinion from './pages/SecondOpinion'
import Teleconsultation from './pages/Teleconsultation'
import BookAppointment from './pages/BookAppointment'

// Dashboards
import PatientDashboard from './pages/dashboard/PatientDashboard'
import DoctorDashboard from './pages/dashboard/DoctorDashboard'
import AdminDashboard from './pages/dashboard/AdminDashboard'

function ProtectedRoute({ children, role }) {
  const { isAuthenticated, isLoading, user } = useAuth()
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner" />
      </div>
    )
  }
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (role && user?.role !== role) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="find-doctor" element={<FindDoctor />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="specialities" element={<Specialities />} />
          <Route path="health-packages" element={<HealthPackages />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route path="videos" element={<Videos />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="international-patients" element={<InternationalPatients />} />
          <Route path="labs" element={<Labs />} />
          <Route path="blood-availability" element={<BloodAvailability />} />
          <Route path="academics-csr" element={<AcademicsCsr />} />
          <Route path="career" element={<Career />} />
          <Route path="second-opinion" element={<SecondOpinion />} />
          <Route path="teleconsultation" element={<Teleconsultation />} />
          <Route
            path="book-appointment"
            element={
              <ProtectedRoute>
                <BookAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/patient"
            element={
              <ProtectedRoute role="patient">
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/doctor"
            element={
              <ProtectedRoute role="doctor">
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
