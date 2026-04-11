import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/ui/BlogCard'
import { blogs as blogsApi } from '../services/api'

const categories = ['All', 'PCOS', 'Pregnancy', 'Cancer', 'Fertility', "Women's Health", 'Menopause', 'Nutrition']

const mockBlogs = [
  { _id: '1', title: 'Understanding PCOS: Symptoms, Causes and Treatment Options', excerpt: 'PCOS affects 1 in 10 women. Learn about hormonal imbalance, irregular periods, and modern management approaches including medication and lifestyle changes.', category: 'PCOS', author: 'Dr. Priya Sharma', date: '2024-02-15', readTime: '5 min read', color: 'from-purple-400 to-purple-600' },
  { _id: '2', title: 'Your Complete Guide to IVF: What to Expect at Every Stage', excerpt: "IVF can feel overwhelming. Here's a step-by-step breakdown of the entire process, from ovarian stimulation to embryo transfer and the two-week wait.", category: 'Fertility', author: 'Dr. Sunita Patel', date: '2024-02-20', readTime: '8 min read', color: 'from-green-400 to-green-600' },
  { _id: '3', title: 'Nutrition During Pregnancy: Essential Foods and What to Avoid', excerpt: 'Proper nutrition is crucial for fetal development. Our dietitian shares key nutrients, safe foods, and what to strictly avoid during each trimester.', category: 'Pregnancy', author: 'Dr. Meera Kulkarni', date: '2024-03-01', readTime: '6 min read', color: 'from-pink-400 to-pink-600' },
  { _id: '4', title: 'Cervical Cancer: Early Warning Signs Every Woman Should Know', excerpt: 'Cervical cancer is largely preventable. Know the signs, understand HPV vaccination, and learn about screening protocols that save lives.', category: 'Cancer', author: 'Dr. Anita Desai', date: '2024-03-10', readTime: '7 min read', color: 'from-red-400 to-red-600' },
  { _id: '5', title: 'Managing Menopause: Symptoms, HRT and Natural Approaches', excerpt: 'Menopause affects every woman differently. From hot flashes to mood changes — understand your options for hormone replacement and lifestyle management.', category: 'Menopause', author: 'Dr. Priya Sharma', date: '2024-03-18', readTime: '6 min read', color: 'from-orange-400 to-orange-600' },
  { _id: '6', title: 'Endometriosis: The Condition That Goes Undiagnosed for Years', excerpt: 'On average, endometriosis takes 7–10 years to diagnose. Learn to recognize the signs, understand the diagnostic process, and know your treatment options.', category: "Women's Health", author: 'Dr. Sneha Joshi', date: '2024-03-25', readTime: '9 min read', color: 'from-teal-400 to-teal-600' },
  { _id: '7', title: 'First Trimester Do\'s and Don\'ts: A Complete Guide', excerpt: 'The first 12 weeks are critical for fetal development. From what foods to eat to which activities to avoid — your complete first trimester checklist.', category: 'Pregnancy', author: 'Dr. Meera Kulkarni', date: '2024-04-01', readTime: '5 min read', color: 'from-pink-300 to-rose-500' },
  { _id: '8', title: 'Fertility After 35: Understanding Your Options', excerpt: 'Starting a family after 35 is increasingly common. Learn about age-related fertility changes, egg freezing, and what modern fertility medicine can offer.', category: 'Fertility', author: 'Dr. Sunita Patel', date: '2024-04-08', readTime: '7 min read', color: 'from-emerald-400 to-emerald-600' },
]

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [data, setData] = useState(mockBlogs)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true)
      try {
        const res = await blogsApi.getAll()
        if (res.data && res.data.length > 0) setData(res.data)
      } catch {
        setData(mockBlogs)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const filtered = activeCategory === 'All' ? data : data.filter(b => b.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Health & Wellness Blog</h1>
          <p className="text-primary-200">Expert insights on women's health from our specialist doctors</p>
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
              className={`px-4 py-1.5 rounded-full font-medium text-sm transition-colors ${activeCategory === cat ? 'tab-active' : 'tab-inactive border border-gray-200'}`}
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
            {filtered.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="font-bold text-gray-700">No articles in this category yet</h3>
          </div>
        )}
      </div>
    </div>
  )
}
