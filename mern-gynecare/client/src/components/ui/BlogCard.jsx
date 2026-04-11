import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ blog }) {
  const {
    _id = '1',
    title = 'Understanding PCOS: Symptoms, Causes and Treatment',
    excerpt = 'Polycystic ovary syndrome (PCOS) affects 1 in 10 women of reproductive age. Learn about its symptoms, root causes, and modern treatment approaches.',
    category = 'PCOS',
    author = 'Dr. Priya Sharma',
    date = '2024-01-15',
    readTime = '5 min read',
    color = 'from-primary-400 to-primary-600',
  } = blog || {}

  const categoryColors = {
    PCOS: 'bg-purple-100 text-purple-700',
    Pregnancy: 'bg-pink-100 text-pink-700',
    Cancer: 'bg-red-100 text-red-700',
    Fertility: 'bg-green-100 text-green-700',
    "Women's Health": 'bg-blue-100 text-blue-700',
    Menopause: 'bg-orange-100 text-orange-700',
  }

  const colorClass = categoryColors[category] || 'bg-primary-100 text-primary-700'

  return (
    <div className="card overflow-hidden flex flex-col">
      <div className={`h-40 bg-gradient-to-br ${color} flex items-center justify-center`}>
        <span className="text-white text-4xl opacity-60">
          {category === 'PCOS' ? '⚕' : category === 'Pregnancy' ? '🤱' : category === 'Cancer' ? '🎗' : category === 'Fertility' ? '💚' : '♥'}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-center gap-2">
          <span className={`badge ${colorClass}`}>{category}</span>
          <span className="text-xs text-gray-400">{readTime}</span>
        </div>
        <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 hover:text-primary-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400 pt-1 border-t border-gray-100">
          <span className="font-medium text-gray-600">{author}</span>
          <span>{new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
        <Link
          to={`/blogs/${_id}`}
          className="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center gap-1 mt-1"
        >
          Read Article →
        </Link>
      </div>
    </div>
  )
}
