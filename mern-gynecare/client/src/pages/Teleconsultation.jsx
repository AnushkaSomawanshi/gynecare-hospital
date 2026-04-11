import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Teleconsultation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">💻 Teleconsultation</h1>
          <p className="text-primary-200 text-xl max-w-2xl mx-auto">Consult India's top gynecologists from the comfort of your home. Secure, private, and instant.</p>
        </div>
      </div>

      {/* How it works */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '📅', title: 'Book a Session', desc: 'Choose your doctor, select a date and time, and confirm your video consultation appointment.' },
              { step: '02', icon: '📨', title: 'Receive Link', desc: 'You\'ll get a secure video call link via SMS and email 30 minutes before your appointment.' },
              { step: '03', icon: '🩺', title: 'Consult with Doctor', desc: 'Join the call from any device. Your doctor will review your history and provide medical advice.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">{item.icon}</div>
                <div className="text-primary-600 font-bold text-sm mb-1">STEP {item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/book-appointment" className="btn-primary py-3 px-8 text-lg">
              Book Teleconsultation Now
            </Link>
          </div>
        </div>
      </section>

      {/* Video call mockup */}
      <section className="py-14 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Live Consultation Preview</h2>
          <div className="rounded-2xl overflow-hidden border-2 border-primary-600 shadow-2xl">
            {/* Video area */}
            <div className="bg-gray-900 relative">
              <div className="grid grid-cols-3 gap-2 p-4">
                {/* Doctor video (large) */}
                <div className="col-span-2 bg-primary-800 rounded-xl h-52 flex flex-col items-center justify-center text-white border border-primary-600">
                  <div className="w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center text-3xl mb-2">👩‍⚕️</div>
                  <div className="text-sm font-medium">Dr. Priya Sharma</div>
                  <div className="text-xs text-primary-300">Gynecologist</div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                </div>
                {/* Patient video (small) + Chat */}
                <div className="space-y-2">
                  <div className="bg-gray-700 rounded-xl h-24 flex flex-col items-center justify-center text-white border border-gray-600">
                    <div className="text-2xl">🙋‍♀️</div>
                    <div className="text-xs mt-1 text-gray-300">You</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl h-24 p-2 border border-gray-700 overflow-hidden">
                    <div className="text-xs text-gray-400 mb-1">Chat</div>
                    <div className="text-xs text-primary-300 mb-0.5">Doctor: Please share your reports</div>
                    <div className="text-xs text-gray-300">Me: Sent. Any concerns?</div>
                    <div className="text-xs text-primary-300">Doctor: Looks fine!</div>
                  </div>
                </div>
              </div>

              {/* Timer */}
              <div className="absolute top-6 right-6 bg-black/60 rounded-lg px-3 py-1 text-white text-sm font-mono">
                14:32
              </div>

              {/* Controls */}
              <div className="bg-gray-800 px-6 py-3 flex items-center justify-center gap-4">
                {[
                  { icon: '🎤', label: 'Mute', color: 'bg-gray-700' },
                  { icon: '📷', label: 'Camera', color: 'bg-gray-700' },
                  { icon: '💬', label: 'Chat', color: 'bg-primary-700' },
                  { icon: '📋', label: 'Reports', color: 'bg-primary-700' },
                  { icon: '📵', label: 'End Call', color: 'bg-red-600' },
                ].map((btn) => (
                  <div key={btn.label} className="flex flex-col items-center gap-1">
                    <div className={`w-10 h-10 ${btn.color} rounded-full flex items-center justify-center text-lg cursor-pointer hover:opacity-80`}>
                      {btn.icon}
                    </div>
                    <span className="text-xs text-gray-400">{btn.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Benefits of Teleconsultation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🏠', title: 'Consult from Home', desc: 'No travel, no waiting rooms. Consult from your bed, office, or anywhere private.' },
              { icon: '🔒', title: 'Private & Secure', desc: 'End-to-end encrypted video calls. All your health data remains completely confidential.' },
              { icon: '⚡', title: 'Instant Reports', desc: 'Receive digital prescriptions and consultation notes within minutes of the call.' },
              { icon: '💰', title: 'Cost Effective', desc: 'Teleconsultation fees are 30% lower than in-person visits. Save on travel too.' },
            ].map((b) => (
              <div key={b.title} className="card p-5 text-center">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
