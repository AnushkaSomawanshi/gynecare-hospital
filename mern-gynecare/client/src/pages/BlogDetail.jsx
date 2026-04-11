import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogs as blogsApi } from '../services/api'
import BlogCard from '../components/ui/BlogCard'

const mockBlogs = {
  '1': {
    _id: '1', title: 'Understanding PCOS: Symptoms, Causes and Treatment Options', category: 'PCOS', author: 'Dr. Priya Sharma', authorBio: 'Senior Gynecologist at GyneCare Pune with 18 years of experience in PCOS management and reproductive endocrinology.', date: '2024-02-15', readTime: '5 min read',
    content: [
      { heading: 'What is PCOS?', body: 'Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting approximately 10% of women of reproductive age in India. It is characterized by irregular menstrual cycles, excess androgen levels, and/or polycystic ovaries on ultrasound. PCOS is the most common cause of anovulatory infertility.' },
      { heading: 'Symptoms to Watch For', body: 'The most common symptoms of PCOS include irregular or missed periods, excessive hair growth on the face, chest, or back (hirsutism), acne (especially along the jawline), weight gain particularly around the abdomen, thinning hair or male-pattern baldness, darkening of skin in skin folds (acanthosis nigricans), and difficulty conceiving. Not all women experience all symptoms — PCOS presents on a spectrum.' },
      { heading: 'Root Causes and Risk Factors', body: 'The exact cause of PCOS is unknown, but insulin resistance plays a central role in most cases. When cells do not respond properly to insulin, the pancreas produces more insulin, which in turn stimulates the ovaries to produce excess androgens (male hormones). Genetics also play a role — if your mother or sister has PCOS, you are significantly more likely to develop it.' },
      { heading: 'Modern Treatment Approaches', body: 'Treatment depends on your symptoms and whether you are trying to conceive. For menstrual regulation, hormonal contraceptives (birth control pills) are commonly used. For insulin resistance, Metformin can help. For fertility, ovulation induction with Clomiphene or Letrozole is the first-line treatment. Lifestyle modification — including weight loss of even 5-10% — can significantly improve symptoms and restore ovulation.' },
      { heading: 'Living Well with PCOS', body: 'PCOS is a lifelong condition, but it is highly manageable. A balanced diet low in refined carbohydrates, regular physical activity, adequate sleep, and stress management all contribute to symptom control. Regular monitoring of glucose, lipids, and blood pressure is important as PCOS increases the risk of Type 2 diabetes and cardiovascular disease long-term.' },
    ],
    relatedIds: ['5', '6', '8'],
  },
}

const relatedBlogs = [
  { _id: '5', title: 'Managing Menopause: Symptoms, HRT and Natural Approaches', category: 'Menopause', author: 'Dr. Priya Sharma', date: '2024-03-18', readTime: '6 min read', color: 'from-orange-400 to-orange-600', excerpt: 'Menopause affects every woman differently. From hot flashes to mood changes — understand your options.' },
  { _id: '6', title: 'Endometriosis: The Condition That Goes Undiagnosed for Years', category: "Women's Health", author: 'Dr. Sneha Joshi', date: '2024-03-25', readTime: '9 min read', color: 'from-teal-400 to-teal-600', excerpt: 'On average, endometriosis takes 7-10 years to diagnose. Learn to recognize the signs.' },
  { _id: '8', title: 'Fertility After 35: Understanding Your Options', category: 'Fertility', author: 'Dr. Sunita Patel', date: '2024-04-08', readTime: '7 min read', color: 'from-emerald-400 to-emerald-600', excerpt: 'Learn about age-related fertility changes, egg freezing, and what modern fertility medicine can offer.' },
]

export default function BlogDetail() {
  const { id } = useParams()
  const [blog, setBlog] = useState(mockBlogs[id] || mockBlogs['1'])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true)
      try {
        const res = await blogsApi.getById(id)
        setBlog(res.data)
      } catch {
        setBlog(mockBlogs[id] || mockBlogs['1'])
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
    window.scrollTo(0, 0)
  }, [id])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="spinner" /></div>
  if (!blog) return <div className="min-h-screen flex items-center justify-center text-gray-500">Blog not found.</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/blogs" className="text-primary-300 hover:text-white text-sm mb-4 inline-flex items-center gap-1">
            ← Back to Blogs
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="badge bg-white/20 text-white">{blog.category}</span>
            <span className="text-primary-300 text-sm">{blog.readTime}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">{blog.title}</h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center font-bold text-white">
              {blog.author?.charAt(4) || 'D'}
            </div>
            <div>
              <div className="font-medium">{blog.author}</div>
              <div className="text-primary-300 text-sm">
                {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Article content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          {(blog.content || []).map((section, i) => (
            <div key={i} className={i > 0 ? 'mt-6' : ''}>
              <h2 className="text-xl font-bold text-primary-900 mb-3">{section.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Author bio */}
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 mb-10 flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center font-bold text-white text-xl flex-shrink-0">
            {blog.author?.charAt(4) || 'D'}
          </div>
          <div>
            <div className="font-bold text-primary-900">{blog.author}</div>
            <div className="text-sm text-gray-600 mt-1 leading-relaxed">{blog.authorBio}</div>
            <Link to="/find-doctor" className="text-primary-600 hover:text-primary-800 text-sm font-medium mt-2 inline-block">
              Book with {blog.author?.split(' ').slice(0, 2).join(' ')} →
            </Link>
          </div>
        </div>

        {/* Related articles */}
        <h3 className="text-xl font-bold text-gray-900 mb-5">Related Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {relatedBlogs.map((rb) => (
            <BlogCard key={rb._id} blog={rb} />
          ))}
        </div>
      </div>
    </div>
  )
}
