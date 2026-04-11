import React, { useState, useEffect } from 'react'
import PackageCard from '../components/ui/PackageCard'
import { packages as packagesApi } from '../services/api'

const categories = ['All', "Women's Health", 'Pregnancy', 'Fertility', 'Cancer Screening', 'PCOS']

const mockPackages = [
  { _id: '1', name: "Women's Wellness Checkup", price: 2499, originalPrice: 3500, category: "Women's Health", description: 'Complete annual health screening for women — hormones, vitamins and organ function.', tests: ['CBC', 'Thyroid Panel (T3/T4/TSH)', 'Vitamin D3', 'Vitamin B12', 'Blood Sugar (Fasting)', 'Calcium', 'Lipid Profile', 'Urine R/M', 'Pap Smear', 'Pelvic Ultrasound'], testCount: 28, popular: true },
  { _id: '2', name: 'Fertility Assessment Pack', price: 4999, originalPrice: 7000, category: 'Fertility', description: 'Comprehensive fertility workup to assess ovarian reserve and reproductive health.', tests: ['AMH (Anti-Müllerian Hormone)', 'FSH', 'LH', 'AFC (Antral Follicle Count)', 'Semen Analysis', 'Progesterone Day 21', 'Prolactin', 'Hysterosalpingography'], testCount: 18, popular: false },
  { _id: '3', name: 'Antenatal Care Package', price: 8999, originalPrice: 12000, category: 'Pregnancy', description: 'All essential prenatal investigations from first trimester to delivery.', tests: ['NT Scan (11-13 weeks)', 'Double Marker', 'NIPT', 'Anomaly Scan (20 weeks)', 'OGTT', 'Group B Strep', 'Fetal Doppler', 'GDM Screening'], testCount: 15, popular: true },
  { _id: '4', name: 'PCOS Diagnostic Panel', price: 1999, originalPrice: 2800, category: 'PCOS', description: 'Complete hormonal and metabolic investigations for PCOS diagnosis and monitoring.', tests: ['Total & Free Testosterone', 'DHEA-S', 'LH/FSH Ratio', 'Fasting Insulin', 'Pelvic USG (follicle count)', 'Blood Sugar Profile', 'Lipid Profile'], testCount: 12, popular: false },
  { _id: '5', name: 'Cervical Cancer Screening', price: 1499, originalPrice: 2200, category: 'Cancer Screening', description: 'Comprehensive cervical cancer screening with HPV testing and Pap smear.', tests: ['Liquid-Based Cytology (LBC)', 'HPV Genotyping (16/18)', 'CA-125', 'Pelvic Ultrasound'], testCount: 6, popular: false },
  { _id: '6', name: 'Complete Cancer Screen', price: 3499, originalPrice: 5000, category: 'Cancer Screening', description: 'Multi-cancer early detection for ovarian, cervical, uterine and breast cancers.', tests: ['Pap Smear', 'HPV Test', 'CA-125', 'CEA', 'HE4', 'ROMA Index', 'Mammography', 'Pelvic MRI'], testCount: 10, popular: false },
  { _id: '7', name: 'Thyroid & Hormones Pack', price: 1299, originalPrice: 1800, category: "Women's Health", description: 'Comprehensive thyroid and hormonal assessment for mood, weight and energy issues.', tests: ['T3', 'T4', 'TSH', 'FT3', 'FT4', 'Anti-TPO', 'Prolactin', 'Cortisol'], testCount: 8, popular: false },
  { _id: '8', name: 'Prenatal Genetics Package', price: 6999, originalPrice: 9500, category: 'Pregnancy', description: 'Advanced genetic testing to detect chromosomal conditions and fetal anomalies.', tests: ['NIPT (Cell-Free DNA)', 'Karyotyping', 'FISH', 'Quadruple Marker', 'Cell-Free Fetal DNA'], testCount: 8, popular: false },
]

export default function HealthPackages() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [data, setData] = useState(mockPackages)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true)
      try {
        const res = await packagesApi.getAll()
        if (res.data && res.data.length > 0) setData(res.data)
      } catch {
        setData(mockPackages)
      } finally {
        setLoading(false)
      }
    }
    fetchPackages()
  }, [])

  const filtered = activeCategory === 'All' ? data : data.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Health Packages</h1>
          <p className="text-primary-200">Affordable, comprehensive women's health screening packages</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${activeCategory === cat ? 'tab-active' : 'tab-inactive border border-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="spinner" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((pkg) => (
              <PackageCard key={pkg._id} pkg={pkg} />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="font-bold text-gray-700 mb-2">No packages in this category</h3>
            <p className="text-gray-500 text-sm">Try selecting a different category</p>
          </div>
        )}

        {/* Info Banner */}
        <div className="mt-10 bg-primary-50 border border-primary-200 rounded-xl p-6">
          <h3 className="font-bold text-primary-800 text-lg mb-2">Why Choose Our Health Packages?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { icon: '💰', title: 'Save up to 40%', desc: 'Bundled tests at significantly reduced prices compared to individual booking' },
              { icon: '🏠', title: 'Home Sample Collection', desc: 'We send trained phlebotomists to collect samples at your home — free of charge' },
              { icon: '📱', title: 'Digital Reports', desc: 'Access your reports online within 24-48 hours on our patient portal' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="font-semibold text-primary-900 text-sm">{item.title}</div>
                  <div className="text-gray-600 text-xs mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
