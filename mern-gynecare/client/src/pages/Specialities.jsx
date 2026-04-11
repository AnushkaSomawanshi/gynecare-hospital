import React from 'react'
import { Link } from 'react-router-dom'

const specialitiesData = [
  { icon: '🤱', name: 'Obstetrics & Gynecology', shortName: 'OBG', desc: 'Comprehensive care throughout pregnancy, labor, delivery and postpartum period. Management of all gynecological conditions.', doctors: 42, color: 'from-pink-400 to-pink-600' },
  { icon: '🔬', name: 'IVF & Fertility', shortName: 'IVF', desc: 'Complete fertility assessment and treatment including IVF, IUI, egg freezing, ICSI and genetic embryo testing.', doctors: 18, color: 'from-purple-400 to-purple-600' },
  { icon: '⚕', name: 'PCOS Management', shortName: 'PCOS', desc: 'Holistic management of polycystic ovary syndrome — hormonal balance, weight management, menstrual regulation and fertility preservation.', doctors: 24, color: 'from-blue-400 to-blue-600' },
  { icon: '🩺', name: 'Maternal-Fetal Medicine', shortName: 'MFM', desc: 'Specialized care for high-risk pregnancies including twin pregnancies, preeclampsia, gestational diabetes and fetal abnormalities.', doctors: 15, color: 'from-teal-400 to-teal-600' },
  { icon: '🎗', name: 'Gynecologic Oncology', shortName: 'Oncology', desc: 'Detection, staging and treatment of cervical, uterine, ovarian and vulvar cancers using surgery, chemotherapy and radiation.', doctors: 12, color: 'from-red-400 to-red-600' },
  { icon: '🏥', name: 'Laparoscopic Surgery', shortName: 'Lap Surgery', desc: 'Minimally invasive keyhole surgery for endometriosis, fibroids, ovarian cysts, ectopic pregnancy and hysterectomy.', doctors: 20, color: 'from-green-400 to-green-600' },
  { icon: '⚡', name: 'High Risk Pregnancy', shortName: 'High Risk', desc: 'Specialized monitoring and management for pregnancies complicated by medical conditions, multiple gestation or prior complications.', doctors: 16, color: 'from-orange-400 to-orange-600' },
  { icon: '🌸', name: 'Prenatal Care', shortName: 'Prenatal', desc: 'Evidence-based prenatal checkups, nutrition counseling, childbirth education and birth planning for healthy pregnancies.', doctors: 30, color: 'from-rose-400 to-rose-600' },
  { icon: '💛', name: 'Postnatal Care', shortName: 'Postnatal', desc: 'Comprehensive postpartum support including physical recovery, breastfeeding support, mental health screening and newborn care.', doctors: 22, color: 'from-yellow-400 to-yellow-600' },
  { icon: '🌡', name: 'Menopause Clinic', shortName: 'Menopause', desc: 'Hormone replacement therapy, bone density monitoring, cardiovascular health and quality of life management during menopause.', doctors: 10, color: 'from-indigo-400 to-indigo-600' },
  { icon: '🧬', name: 'Reproductive Medicine', shortName: 'Repro Med', desc: 'Advanced genetic testing, embryology, preimplantation genetic diagnosis and reproductive immunology services.', doctors: 8, color: 'from-cyan-400 to-cyan-600' },
  { icon: '💫', name: 'Adolescent Gynecology', shortName: 'Adolescent', desc: 'Safe and sensitive gynecological care for teenagers including menstrual disorders, HPV vaccination and sexual health education.', doctors: 14, color: 'from-pink-300 to-accent-500' },
]

export default function Specialities() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Our Specialities</h1>
          <p className="text-primary-200">12 departments of excellence in women's healthcare</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialitiesData.map((spec) => (
            <div key={spec.name} className="card overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${spec.color}`} />
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${spec.color} flex items-center justify-center text-2xl text-white`}>
                    {spec.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{spec.name}</h3>
                    <span className="text-xs text-primary-600 font-medium">{spec.doctors} Specialists</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{spec.desc}</p>
                <Link
                  to={`/find-doctor`}
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors"
                >
                  View Doctors →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
