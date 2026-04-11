import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DoctorCard from '../components/ui/DoctorCard'
import { doctors as doctorsApi } from '../services/api'

const specialityOptions = ['All', 'Obstetrics & Gynecology', 'IVF & Fertility', 'PCOS Specialist', 'Maternal-Fetal Medicine', 'Gynecologic Oncology', 'Laparoscopic Surgery']
const cityOptions = ['All Cities', 'Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Aurangabad', 'Kolhapur']

const mockDoctors = [
  { _id: '1', name: 'Dr. Priya Sharma', speciality: 'Obstetrics & Gynecology', qualification: 'MBBS, MS (OBG), DNB', experience: 18, rating: 4.9, reviewCount: 524, hospitalName: 'GyneCare Pune Main', consultationFee: 800, city: 'Pune', available: true },
  { _id: '2', name: 'Dr. Sunita Patel', speciality: 'IVF & Fertility', qualification: 'MBBS, MD (OBG), Fellowship IVF', experience: 14, rating: 4.8, reviewCount: 412, hospitalName: 'GyneCare Mumbai Andheri', consultationFee: 1200, city: 'Mumbai', available: true },
  { _id: '3', name: 'Dr. Anita Desai', speciality: 'Gynecologic Oncology', qualification: 'MBBS, MS, MCh (Gyn Onco)', experience: 22, rating: 4.9, reviewCount: 380, hospitalName: 'GyneCare Mumbai BKC', consultationFee: 1500, city: 'Mumbai', available: false },
  { _id: '4', name: 'Dr. Meera Kulkarni', speciality: 'Maternal-Fetal Medicine', qualification: 'MBBS, MD (OBG), DM (MFM)', experience: 16, rating: 4.7, reviewCount: 298, hospitalName: 'GyneCare Nashik', consultationFee: 900, city: 'Nashik', available: true },
  { _id: '5', name: 'Dr. Kavya Reddy', speciality: 'PCOS Specialist', qualification: 'MBBS, MS (OBG), Endocrinology Fellowship', experience: 10, rating: 4.6, reviewCount: 215, hospitalName: 'GyneCare Nagpur', consultationFee: 700, city: 'Nagpur', available: true },
  { _id: '6', name: 'Dr. Sneha Joshi', speciality: 'Laparoscopic Surgery', qualification: 'MBBS, MS, Advanced Laparoscopy', experience: 13, rating: 4.8, reviewCount: 340, hospitalName: 'GyneCare Pune Kothrud', consultationFee: 1000, city: 'Pune', available: true },
  { _id: '7', name: 'Dr. Pooja Nath', speciality: 'IVF & Fertility', qualification: 'MBBS, MD (OBG), FRCOG', experience: 20, rating: 4.9, reviewCount: 610, hospitalName: 'GyneCare Mumbai Dadar', consultationFee: 2000, city: 'Mumbai', available: true },
  { _id: '8', name: 'Dr. Rashmi Gokhale', speciality: 'Obstetrics & Gynecology', qualification: 'MBBS, DGO, DNB', experience: 8, rating: 4.5, reviewCount: 178, hospitalName: 'GyneCare Aurangabad', consultationFee: 600, city: 'Aurangabad', available: false },
  { _id: '9', name: 'Dr. Swati Patil', speciality: 'Maternal-Fetal Medicine', qualification: 'MBBS, MD, Perinatology Fellowship', experience: 12, rating: 4.7, reviewCount: 265, hospitalName: 'GyneCare Kolhapur', consultationFee: 850, city: 'Kolhapur', available: true },
]

export default function FindDoctor() {
  const [data, setData] = useState(mockDoctors)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedSpec, setSelectedSpec] = useState([])
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [minRating, setMinRating] = useState(0)
  const [feeMax, setFeeMax] = useState(5000)
  const [page, setPage] = useState(1)
  const PER_PAGE = 6

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true)
      try {
        const res = await doctorsApi.getAll()
        setData(res.data.doctors || res.data)
      } catch {
        setData(mockDoctors) // fallback
      } finally {
        setLoading(false)
      }
    }
    fetchDoctors()
  }, [])

  const filtered = data.filter((d) => {
    const matchSearch = !search || d.name.toLowerCase().includes(search.toLowerCase()) || d.speciality?.toLowerCase().includes(search.toLowerCase())
    const matchSpec = selectedSpec.length === 0 || selectedSpec.includes(d.speciality)
    const matchCity = selectedCity === 'All Cities' || d.city === selectedCity
    const matchRating = d.rating >= minRating
    const matchFee = d.consultationFee <= feeMax
    return matchSearch && matchSpec && matchCity && matchRating && matchFee
  })

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)

  const toggleSpec = (spec) => {
    setSelectedSpec(prev => prev.includes(spec) ? prev.filter(s => s !== spec) : [...prev, spec])
    setPage(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Find a Doctor</h1>
          <p className="text-primary-200">Search from 200+ specialist gynecologists across Maharashtra</p>
          <div className="mt-5 flex gap-3 max-w-2xl">
            <input
              type="text"
              placeholder="Search by name or speciality..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              className="flex-1 input-field py-3 text-gray-900"
            />
            <button type="button" className="btn-accent px-6">Search</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-5">
            <div className="card p-5">
              <h3 className="font-bold text-gray-900 mb-3">City</h3>
              <div className="space-y-2">
                {cityOptions.map((city) => (
                  <button
                    type="button"
                    key={city}
                    onClick={() => { setSelectedCity(city); setPage(1) }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCity === city ? 'bg-primary-100 text-primary-700 font-medium' : 'hover:bg-gray-100 text-gray-600'}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-gray-900 mb-3">Speciality</h3>
              <div className="space-y-2">
                {specialityOptions.slice(1).map((spec) => (
                  <label key={spec} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedSpec.includes(spec)}
                      onChange={() => toggleSpec(spec)}
                      className="rounded border-gray-300 text-primary-600"
                    />
                    <span className="text-sm text-gray-600">{spec}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-gray-900 mb-3">Minimum Rating</h3>
              {[4.5, 4.0, 3.5, 0].map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer mb-2">
                  <input
                    type="radio"
                    name="rating"
                    checked={minRating === r}
                    onChange={() => { setMinRating(r); setPage(1) }}
                    className="text-primary-600"
                  />
                  <span className="text-sm text-gray-600">
                    {r === 0 ? 'Any Rating' : `${r}+ ⭐`}
                  </span>
                </label>
              ))}
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-gray-900 mb-3">Max Fee: ₹{feeMax}</h3>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={feeMax}
                onChange={(e) => { setFeeMax(Number(e.target.value)); setPage(1) }}
                className="w-full accent-primary-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹0</span><span>₹5000</span>
              </div>
            </div>
          </aside>

          {/* Doctor Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 text-sm">
                Showing <span className="font-semibold">{filtered.length}</span> doctors
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="spinner" />
              </div>
            ) : paginated.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="font-bold text-gray-700 mb-2">No doctors found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {paginated.map((doctor) => (
                  <DoctorCard key={doctor._id} doctor={doctor} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button type="button" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 text-sm">
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${page === p ? 'bg-primary-700 text-white' : 'border border-gray-200 hover:bg-gray-50 text-gray-700'}`}
                  >
                    {p}
                  </button>
                ))}
                <button type="button" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 text-sm">
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
