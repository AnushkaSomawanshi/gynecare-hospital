import React, { useState } from 'react'

const videoCategories = ['All', 'Pregnancy Care', 'Labor Preparation', 'PCOS Management', 'Fertility', 'Postpartum Recovery', "Women's Health"]

const videos = [
  { _id: 'v1', title: 'What to Eat in Your First Trimester', doctor: 'Dr. Meera Kulkarni', duration: '12:34', views: '45K', category: 'Pregnancy Care', color: 'from-pink-400 to-pink-600', desc: 'Essential nutrition guide for the first 12 weeks of pregnancy.' },
  { _id: 'v2', title: 'Breathing Techniques for Pain-Free Labour', doctor: 'Dr. Priya Sharma', duration: '18:20', views: '62K', category: 'Labor Preparation', color: 'from-purple-400 to-purple-600', desc: 'Learn proven breathing and relaxation techniques for labour.' },
  { _id: 'v3', title: 'PCOS and Insulin Resistance: The Connection', doctor: 'Dr. Kavya Reddy', duration: '22:10', views: '38K', category: 'PCOS Management', color: 'from-blue-400 to-blue-600', desc: 'Deep dive into why insulin resistance is at the core of most PCOS cases.' },
  { _id: 'v4', title: 'IVF Step by Step: What Really Happens', doctor: 'Dr. Sunita Patel', duration: '28:45', views: '91K', category: 'Fertility', color: 'from-green-400 to-green-600', desc: 'A complete walkthrough of the IVF process with real patient experiences.' },
  { _id: 'v5', title: 'Postpartum Depression: Signs and Support', doctor: 'Dr. Priya Sharma', duration: '15:30', views: '29K', category: 'Postpartum Recovery', color: 'from-orange-400 to-orange-600', desc: 'Understanding postpartum depression and how to seek help.' },
  { _id: 'v6', title: 'Cervical Cancer Prevention and HPV Vaccine', doctor: 'Dr. Anita Desai', duration: '20:15', views: '55K', category: "Women's Health", color: 'from-red-400 to-red-600', desc: 'Complete guide to cervical cancer prevention with HPV vaccination facts.' },
  { _id: 'v7', title: 'Fertility After 35: All Your Questions Answered', doctor: 'Dr. Sunita Patel', duration: '24:00', views: '47K', category: 'Fertility', color: 'from-teal-400 to-teal-600', desc: 'Age-related fertility decline, egg freezing, and treatment options for women 35+.' },
  { _id: 'v8', title: 'Week 20 Anatomy Scan: What to Expect', doctor: 'Dr. Meera Kulkarni', duration: '10:22', views: '33K', category: 'Pregnancy Care', color: 'from-rose-400 to-rose-600', desc: 'Everything you need to know before your 20-week anatomy ultrasound.' },
]

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeVideo, setActiveVideo] = useState(null)

  const filtered = activeCategory === 'All' ? videos : videos.filter(v => v.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Video Library</h1>
          <p className="text-primary-200">Expert health education videos from our specialist doctors</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {videoCategories.map((cat) => (
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

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((video) => (
            <div key={video._id} className="card overflow-hidden cursor-pointer group" onClick={() => setActiveVideo(video)}>
              <div className={`h-40 bg-gradient-to-br ${video.color} flex items-center justify-center relative`}>
                <div className="w-14 h-14 bg-white/25 rounded-full flex items-center justify-center text-white text-2xl group-hover:bg-white/40 transition-all">
                  ▶
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <span className="badge bg-primary-100 text-primary-700 text-xs mb-2">{video.category}</span>
                <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-1">{video.title}</h3>
                <p className="text-gray-500 text-xs line-clamp-2 mb-2">{video.desc}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-medium text-gray-600">{video.doctor}</span>
                  <span>👁 {video.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className={`h-72 bg-gradient-to-br ${activeVideo.color} flex items-center justify-center relative`}>
              <div className="text-white text-center">
                <div className="text-6xl mb-3">▶</div>
                <div className="text-sm font-medium opacity-80">YouTube / Video Player</div>
                <div className="text-xs opacity-60 mt-1">Embed would appear here</div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-lg mb-1">{activeVideo.title}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span>{activeVideo.doctor}</span>
                <span>•</span>
                <span>{activeVideo.duration}</span>
                <span>•</span>
                <span>👁 {activeVideo.views} views</span>
              </div>
              <p className="text-gray-600 text-sm">{activeVideo.desc}</p>
              <button type="button" onClick={() => setActiveVideo(null)} className="mt-4 btn-outline text-sm py-2 px-4">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
