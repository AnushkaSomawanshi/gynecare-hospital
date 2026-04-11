import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DoctorCard from '../components/ui/DoctorCard'
import PackageCard from '../components/ui/PackageCard'
import BlogCard from '../components/ui/BlogCard'
import TestimonialCard from '../components/ui/TestimonialCard'

const specialities = [
  { icon: '🤱', name: 'Obstetrics & Gynecology', desc: 'Comprehensive care for pregnancy, childbirth and women\'s reproductive health.', doctors: 42 },
  { icon: '🔬', name: 'IVF & Fertility', desc: 'Advanced fertility treatments including IVF, IUI and egg freezing.', doctors: 18 },
  { icon: '🩺', name: 'Maternal-Fetal Medicine', desc: 'Specialized care for high-risk pregnancies and fetal conditions.', doctors: 15 },
  { icon: '🎗', name: 'Gynecologic Oncology', desc: 'Detection and treatment of cancers of the female reproductive system.', doctors: 12 },
  { icon: '⚕', name: 'PCOS Management', desc: 'Holistic management of polycystic ovary syndrome and hormonal disorders.', doctors: 24 },
  { icon: '🏥', name: 'Laparoscopic Surgery', desc: 'Minimally invasive surgical procedures for gynecological conditions.', doctors: 20 },
]

const features = [
  { icon: '🏆', title: 'NABH Accredited', desc: 'National Accreditation Board for Hospitals certification for highest quality standards.' },
  { icon: '🚨', title: '24/7 Emergency', desc: 'Round-the-clock emergency obstetric and gynecological care at all our centers.' },
  { icon: '👩‍⚕️', title: 'Expert Gynecologists', desc: '200+ highly qualified and experienced gynecologists and women\'s health specialists.' },
  { icon: '🔬', title: 'Advanced Technology', desc: 'Latest medical equipment including robotic surgery, 4D ultrasound and genetic testing.' },
]

const mockDoctors = [
  { _id: '1', name: 'Dr. Priya Sharma', speciality: 'Obstetrics & Gynecology', qualification: 'MBBS, MS (OBG), DNB', experience: 18, rating: 4.9, reviewCount: 524, hospitalName: 'GyneCare Pune', consultationFee: 800, city: 'Pune', available: true },
  { _id: '2', name: 'Dr. Sunita Patel', speciality: 'IVF & Fertility', qualification: 'MBBS, MD (OBG), Fellowship IVF', experience: 14, rating: 4.8, reviewCount: 412, hospitalName: 'GyneCare Mumbai', consultationFee: 1200, city: 'Mumbai', available: true },
  { _id: '3', name: 'Dr. Anita Desai', speciality: 'Gynecologic Oncology', qualification: 'MBBS, MS, MCh (Gyn Onco)', experience: 22, rating: 4.9, reviewCount: 380, hospitalName: 'GyneCare Mumbai', consultationFee: 1500, city: 'Mumbai', available: false },
  { _id: '4', name: 'Dr. Meera Kulkarni', speciality: 'Maternal-Fetal Medicine', qualification: 'MBBS, MD (OBG), DM (MFM)', experience: 16, rating: 4.7, reviewCount: 298, hospitalName: 'GyneCare Nashik', consultationFee: 900, city: 'Nashik', available: true },
]

const mockPackages = [
  { _id: '1', name: 'Women\'s Wellness Checkup', price: 2499, originalPrice: 3500, category: "Women's Health", description: 'Complete annual health screening for women', tests: ['CBC', 'Thyroid Panel', 'Vitamin D', 'Blood Sugar', 'Calcium', 'Lipid Profile', 'Urine R/M'], testCount: 28, popular: true },
  { _id: '2', name: 'Fertility Assessment', price: 4999, originalPrice: 7000, category: 'Fertility', description: 'Comprehensive fertility workup for couples', tests: ['AMH', 'FSH', 'LH', 'AFC', 'Semen Analysis', 'Progesterone', 'Prolactin'], testCount: 18, popular: false },
  { _id: '3', name: 'Antenatal Care Package', price: 8999, originalPrice: 12000, category: 'Pregnancy', description: 'Complete prenatal care from confirmation to delivery', tests: ['NT Scan', 'NIPT', 'OGTT', 'GBS', 'Group B Strep', 'Anomaly Scan'], testCount: 15, popular: true },
  { _id: '4', name: 'PCOS Management Plan', price: 1999, originalPrice: 2800, category: 'PCOS', description: 'Targeted investigations for PCOS diagnosis and monitoring', tests: ['Androgens Panel', 'DHEA-S', 'LH/FSH Ratio', 'Insulin', 'Pelvic USG'], testCount: 12, popular: false },
  { _id: '5', name: 'Cancer Screening Pack', price: 3499, originalPrice: 5000, category: 'Cancer Screening', description: 'Early detection screening for gynecologic cancers', tests: ['Pap Smear', 'HPV Test', 'CA-125', 'CEA', 'Mammography', 'Pelvic MRI'], testCount: 10, popular: false },
]

const mockBlogs = [
  { _id: '1', title: 'Understanding PCOS: Symptoms, Causes and Treatment Options', excerpt: 'PCOS affects 1 in 10 women. Learn about hormonal imbalance, irregular periods, and modern management approaches.', category: 'PCOS', author: 'Dr. Priya Sharma', date: '2024-01-15', readTime: '5 min read', color: 'from-purple-400 to-purple-600' },
  { _id: '2', title: 'Your Complete Guide to IVF: What to Expect at Every Stage', excerpt: 'IVF can feel overwhelming. Here\'s a step-by-step breakdown of the entire process, from ovarian stimulation to embryo transfer.', category: 'Fertility', author: 'Dr. Sunita Patel', date: '2024-01-20', readTime: '8 min read', color: 'from-green-400 to-green-600' },
  { _id: '3', title: 'Nutrition During Pregnancy: Foods to Eat and Avoid', excerpt: 'Proper nutrition is crucial for fetal development. Our dietitian shares key nutrients, portion sizes and foods to avoid.', category: 'Pregnancy', author: 'Dr. Meera Kulkarni', date: '2024-02-01', readTime: '6 min read', color: 'from-pink-400 to-pink-600' },
  { _id: '4', title: 'Cervical Cancer: Early Warning Signs Every Woman Should Know', excerpt: 'Cervical cancer is largely preventable with regular screening. Know the signs, risk factors and HPV vaccination facts.', category: 'Cancer', author: 'Dr. Anita Desai', date: '2024-02-10', readTime: '7 min read', color: 'from-red-400 to-red-600' },
]

const mockTestimonials = [
  { name: 'Ananya Krishnan', treatment: 'IVF Treatment', rating: 5, text: 'After 3 failed IVF cycles elsewhere, I conceived at GyneCare. Dr. Patel\'s expertise and the team\'s compassionate support made all the difference. I now have a beautiful baby girl!', location: 'Pune' },
  { name: 'Rekha Sharma', treatment: 'High-Risk Pregnancy', rating: 5, text: 'My pregnancy was complicated with gestational diabetes and preeclampsia. The Maternal-Fetal Medicine team at GyneCare monitored me closely and ensured a safe delivery. Eternally grateful.', location: 'Mumbai' },
  { name: 'Pooja Nair', treatment: 'PCOS Management', rating: 4, text: 'I struggled with PCOS for 5 years before finding GyneCare. Dr. Kulkarni\'s holistic approach — diet, lifestyle and medication — has transformed my health completely.', location: 'Nashik' },
]

function StatCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              NABH Accredited · 12 Branches Across Maharashtra
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
              Excellence in
              <br />
              <span className="text-accent-300">Women's Healthcare</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              India's leading gynecology hospital chain. From pregnancy to menopause, IVF to cancer care — trusted by over 1 million women across Maharashtra.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book-appointment" className="btn-accent text-base py-3 px-8 shadow-lg">
                Book Appointment
              </Link>
              <Link to="/find-doctor" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Find a Doctor
              </Link>
            </div>
          </div>

          {/* Stats overlay */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[
              { label: 'Branches', value: 12, suffix: '+' },
              { label: 'Doctors', value: 200, suffix: '+' },
              { label: 'Years of Excellence', value: 20, suffix: '+' },
              { label: 'Patients Treated', value: 1000000, suffix: '+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-3xl font-extrabold text-white">
                  <StatCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Search Bar */}
      <section className="bg-white shadow-md sticky top-0 z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search doctors, departments, symptoms..."
              className="flex-1 input-field text-sm py-2.5"
            />
            <select className="sm:w-40 input-field text-sm py-2.5">
              <option value="">All Cities</option>
              {['Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Aurangabad', 'Kolhapur'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button type="button" className="btn-primary text-sm py-2.5 px-6">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Specialities</h2>
            <p className="section-subtitle">Comprehensive gynecology care across 12 specialty departments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map((spec) => (
              <Link
                key={spec.name}
                to="/specialities"
                className="card p-6 flex gap-4 group hover:border-primary-300 border border-transparent transition-all duration-200"
              >
                <div className="text-4xl">{spec.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors">{spec.name}</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{spec.desc}</p>
                  <span className="text-xs text-primary-600 font-medium mt-2 block">{spec.doctors} Specialist Doctors →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Why Choose GyneCare?</h2>
            <p className="section-subtitle">Setting the standard for women's healthcare in India</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-primary-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title mb-1">Our Expert Doctors</h2>
              <p className="text-gray-600">Meet our award-winning specialists</p>
            </div>
            <Link to="/find-doctor" className="btn-outline text-sm hidden sm:flex">View All Doctors</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockDoctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
          <div className="text-center mt-6 sm:hidden">
            <Link to="/find-doctor" className="btn-outline text-sm">View All Doctors</Link>
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title mb-1">Health Packages</h2>
              <p className="text-gray-600">Affordable, comprehensive screening packages</p>
            </div>
            <Link to="/health-packages" className="btn-outline text-sm hidden sm:flex">View All</Link>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-5 min-w-max lg:min-w-0 lg:grid lg:grid-cols-5">
              {mockPackages.map((pkg) => (
                <div key={pkg._id} className="w-72 lg:w-auto flex-shrink-0 lg:flex-shrink">
                  <PackageCard pkg={pkg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pregnancy & Women's Health Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-accent-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Track Your Pregnancy & Menstrual Health
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Use our intelligent pregnancy tracker to monitor your week-by-week progress. Log your menstrual cycles and get personalized insights for better reproductive health.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/register" className="bg-white text-primary-800 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Start Pregnancy Tracker
                </Link>
                <Link to="/register" className="border border-white/50 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Log Menstrual Cycle
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { week: 'Week 12', milestone: 'Baby is the size of a lime!', icon: '🍋' },
                { week: 'Week 20', milestone: 'Anatomy scan & gender reveal', icon: '👶' },
                { week: 'Week 40', milestone: 'Due date — Hello Baby!', icon: '🎉' },
              ].map((item) => (
                <div key={item.week} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm">{item.week}</div>
                  <div className="text-xs text-blue-200 mt-1">{item.milestone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">Real stories from real patients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title mb-1">Health & Wellness Blog</h2>
              <p className="text-gray-600">Expert insights on women's health</p>
            </div>
            <Link to="/blogs" className="btn-outline text-sm hidden sm:flex">View All Articles</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Charge of Your Health?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book an appointment with our expert gynecologists today. Available in 12 cities across Maharashtra.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-appointment" className="btn-accent py-3.5 px-10 text-lg shadow-lg">
              Book Appointment Now
            </Link>
            <a href="tel:+918001234567" className="bg-white/20 hover:bg-white/30 border border-white/40 text-white font-semibold py-3.5 px-8 rounded-lg transition-colors">
              Call +91-800-GYNECARE
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-6">No registration fee · Get confirmed in 2 mins · Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
