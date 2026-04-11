import React from 'react'
import { Link } from 'react-router-dom'

export default function PackageCard({ pkg }) {
  const {
    _id,
    name = 'Women\'s Health Package',
    price = 2500,
    originalPrice = 3500,
    category = "Women's Health",
    description = 'Comprehensive health screening for women',
    tests = ['CBC', 'Thyroid Profile', 'Vitamin D', 'Calcium', 'Blood Sugar'],
    popular = false,
    testCount = 25,
  } = pkg || {}

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0
  const [expanded, setExpanded] = React.useState(false)

  return (
    <div className={`card p-5 flex flex-col gap-3 relative ${popular ? 'ring-2 ring-accent-400' : ''}`}>
      {popular && (
        <div className="absolute -top-2.5 left-4 bg-accent-500 text-white text-xs font-bold px-3 py-0.5 rounded-full">
          Most Popular
        </div>
      )}
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="badge bg-primary-100 text-primary-700 mb-1">{category}</span>
          <h3 className="font-bold text-gray-900 mt-1">{name}</h3>
          <p className="text-gray-500 text-sm mt-0.5">{description}</p>
        </div>
      </div>

      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-primary-700">₹{price.toLocaleString()}</span>
        {originalPrice > price && (
          <>
            <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
            <span className="badge bg-green-100 text-green-700">{discount}% off</span>
          </>
        )}
      </div>

      <div className="text-sm text-gray-600">
        <span className="font-medium">{testCount || tests.length} tests included</span>
        {expanded && (
          <ul className="mt-2 space-y-1">
            {tests.map((t, i) => (
              <li key={i} className="flex items-center gap-1 text-xs text-gray-500">
                <span className="text-green-500">✓</span> {t}
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-primary-600 hover:text-primary-800 text-xs mt-1 font-medium"
        >
          {expanded ? '− Show less' : '+ View all tests'}
        </button>
      </div>

      <Link
        to="/book-appointment"
        className="btn-accent text-sm text-center mt-1"
      >
        Book Package
      </Link>
    </div>
  )
}
