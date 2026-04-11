import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

// Request interceptor: attach JWT
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('gynecare_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor: redirect on 401
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('gynecare_token')
      localStorage.removeItem('gynecare_user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth
export const auth = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (data) => api.post('/auth/register', data),
  loginWithOTP: (phone, otp) => api.post('/auth/login-otp', { phone, otp }),
  getMe: () => api.get('/auth/me'),
}

// Doctors
export const doctors = {
  getAll: (filters = {}) => api.get('/doctors', { params: filters }),
  getById: (id) => api.get(`/doctors/${id}`),
  getTop: () => api.get('/doctors/top'),
  getSlots: (id, date) => api.get(`/doctors/${id}/slots`, { params: { date } }),
}

// Hospitals
export const hospitals = {
  getAll: (filters = {}) => api.get('/hospitals', { params: filters }),
  getById: (id) => api.get(`/hospitals/${id}`),
  getCities: () => api.get('/hospitals/cities'),
}

// Appointments
export const appointments = {
  getAll: () => api.get('/appointments'),
  create: (data) => api.post('/appointments', data),
  getById: (id) => api.get(`/appointments/${id}`),
  cancel: (id) => api.patch(`/appointments/${id}/cancel`),
  updateStatus: (id, status) => api.patch(`/appointments/${id}/status`, { status }),
}

// Packages
export const packages = {
  getAll: (filters = {}) => api.get('/packages', { params: filters }),
  getById: (id) => api.get(`/packages/${id}`),
}

// Reports
export const reports = {
  getAll: () => api.get('/reports'),
  upload: (formData) => api.post('/reports', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
  getById: (id) => api.get(`/reports/${id}`),
  remove: (id) => api.delete(`/reports/${id}`),
}

// Pregnancy tracker
export const pregnancy = {
  get: () => api.get('/pregnancy'),
  createOrUpdate: (data) => api.post('/pregnancy', data),
  addWeekNote: (data) => api.post('/pregnancy/notes', data),
}

// Menstrual cycle
export const menstrual = {
  getAll: () => api.get('/menstrual'),
  create: (data) => api.post('/menstrual', data),
  update: (id, data) => api.put(`/menstrual/${id}`, data),
  remove: (id) => api.delete(`/menstrual/${id}`),
}

// Blogs
export const blogs = {
  getAll: (filters = {}) => api.get('/blogs', { params: filters }),
  getById: (id) => api.get(`/blogs/${id}`),
}

// Testimonials
export const testimonials = {
  getAll: () => api.get('/testimonials'),
  getByDepartment: (dept) => api.get('/testimonials', { params: { department: dept } }),
  submit: (data) => api.post('/testimonials', data),
}

export default api
