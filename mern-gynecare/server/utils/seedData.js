require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Hospital = require('../models/Hospital');
const HealthPackage = require('../models/HealthPackage');
const Blog = require('../models/Blog');
const Testimonial = require('../models/Testimonial');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gynecare';

const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      User.deleteMany({}),
      Doctor.deleteMany({}),
      Hospital.deleteMany({}),
      HealthPackage.deleteMany({}),
      Blog.deleteMany({}),
      Testimonial.deleteMany({}),
    ]);
    console.log('🗑️  Cleared existing data');

    // ─── 1. Admin User ──────────────────────────────────────────────────────
    const admin = await User.create({
      name: 'Admin GyneCare',
      email: 'admin@gynecare.com',
      password: 'Admin@123',
      phone: '9000000001',
      role: 'admin',
    });

    // ─── 2. Patient Users ───────────────────────────────────────────────────
    const patients = await User.insertMany([
      { name: 'Priya Patel', email: 'patient1@gynecare.com', password: await bcrypt.hash('Patient@123', 10), phone: '9000000002', role: 'patient' },
      { name: 'Sunita Rao', email: 'patient2@gynecare.com', password: await bcrypt.hash('Patient@123', 10), phone: '9000000003', role: 'patient' },
      { name: 'Meera Singh', email: 'patient3@gynecare.com', password: await bcrypt.hash('Patient@123', 10), phone: '9000000004', role: 'patient' },
    ]);

    // ─── 3. Doctor Users ───────────────────────────────────────────────────
    const doctorUsers = await User.insertMany([
      { name: 'Dr. Priya Sharma', email: 'dr.priya@gynecare.com', password: await bcrypt.hash('Doctor@123', 10), phone: '9100000001', role: 'doctor' },
      { name: 'Dr. Anita Desai', email: 'dr.anita@gynecare.com', password: await bcrypt.hash('Doctor@123', 10), phone: '9100000002', role: 'doctor' },
      { name: 'Dr. Sunita Rao', email: 'dr.sunita@gynecare.com', password: await bcrypt.hash('Doctor@123', 10), phone: '9100000003', role: 'doctor' },
    ]);

    const weekdaySlots = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => ({
      day,
      startTime: '09:00',
      endTime: '17:00',
      isAvailable: true,
    }));

    // ─── 4. Hospitals (without doctorIds first, add after doctors created) ──
    const hospitals = await Hospital.insertMany([
      {
        name: 'GyneCare Mumbai Central',
        address: { street: 'Plot 42, Andheri West', city: 'Mumbai', state: 'Maharashtra', pincode: '400053' },
        phone: '022-40001234',
        emergencyPhone: '022-40009999',
        facilities: ['NICU', 'IVF Lab', 'Operation Theatre', 'Pharmacy', 'Blood Bank', 'ICU', 'Maternity Ward', 'Scan Centre'],
        latitude: 19.1136,
        longitude: 72.8697,
      },
      {
        name: 'GyneCare Pune',
        address: { street: '12B, Koregaon Park', city: 'Pune', state: 'Maharashtra', pincode: '411001' },
        phone: '020-40002345',
        emergencyPhone: '020-40009999',
        facilities: ['IVF Lab', 'Operation Theatre', 'Pharmacy', 'Maternity Ward', 'Scan Centre'],
        latitude: 18.5362,
        longitude: 73.8940,
      },
      {
        name: 'GyneCare Nashik',
        address: { street: 'Near CBS, College Road', city: 'Nashik', state: 'Maharashtra', pincode: '422005' },
        phone: '0253-4000345',
        emergencyPhone: '0253-4009999',
        facilities: ['Operation Theatre', 'Pharmacy', 'Maternity Ward', 'Scan Centre'],
        latitude: 19.9975,
        longitude: 73.7898,
      },
      {
        name: 'GyneCare Nagpur',
        address: { street: 'Sitabuldi Main Road', city: 'Nagpur', state: 'Maharashtra', pincode: '440012' },
        phone: '0712-4000456',
        emergencyPhone: '0712-4009999',
        facilities: ['NICU', 'Operation Theatre', 'Pharmacy', 'Blood Bank', 'Maternity Ward'],
        latitude: 21.1458,
        longitude: 79.0882,
      },
    ]);

    // ─── 5. Doctor Documents ───────────────────────────────────────────────
    const doctors = await Doctor.insertMany([
      {
        userId: doctorUsers[0]._id,
        name: 'Dr. Priya Sharma',
        speciality: 'Obstetrics & Gynecology',
        qualifications: ['MBBS', 'MD (Obstetrics & Gynecology)', 'FRCOG'],
        experience: 15,
        bio: 'Dr. Priya Sharma is a highly experienced Obstetrician & Gynecologist with over 15 years of practice. She specialises in high-risk pregnancies, normal and caesarean deliveries, and minimally invasive gynecological surgeries. She has delivered over 5000 babies and is known for her compassionate patient care.',
        hospitalIds: [hospitals[0]._id],
        consultationFee: 1500,
        rating: 4.8,
        reviewCount: 312,
        availableSlots: weekdaySlots,
      },
      {
        userId: doctorUsers[1]._id,
        name: 'Dr. Anita Desai',
        speciality: 'IVF & Fertility',
        qualifications: ['MBBS', 'MS (Gynecology)', 'Fellowship in Reproductive Medicine (CIMAR)'],
        experience: 12,
        bio: 'Dr. Anita Desai is a renowned IVF and Fertility specialist based in Pune. With 12 years of dedicated practice in Assisted Reproductive Technologies (ART), she has helped over 2000 couples achieve their dream of parenthood. She is an expert in IUI, IVF, ICSI, and egg freezing procedures.',
        hospitalIds: [hospitals[1]._id],
        consultationFee: 1500,
        rating: 4.9,
        reviewCount: 287,
        availableSlots: weekdaySlots,
      },
      {
        userId: doctorUsers[2]._id,
        name: 'Dr. Sunita Rao',
        speciality: 'Maternal-Fetal Medicine',
        qualifications: ['MBBS', 'MD (Obstetrics)', 'Fellowship in Maternal-Fetal Medicine (AIIMS Delhi)'],
        experience: 10,
        bio: 'Dr. Sunita Rao is a specialist in Maternal-Fetal Medicine (Perinatology) with 10 years of experience. She manages high-risk pregnancies involving diabetes, hypertension, multiple gestations, and fetal anomalies. Her expertise in advanced prenatal ultrasound and fetal monitoring has benefited thousands of mothers.',
        hospitalIds: [hospitals[0]._id, hospitals[1]._id],
        consultationFee: 1500,
        rating: 4.8,
        reviewCount: 198,
        availableSlots: weekdaySlots,
      },
    ]);

    // Link doctors to hospitals
    await Hospital.findByIdAndUpdate(hospitals[0]._id, {
      $set: { doctorIds: [doctors[0]._id, doctors[2]._id] },
    });
    await Hospital.findByIdAndUpdate(hospitals[1]._id, {
      $set: { doctorIds: [doctors[1]._id, doctors[2]._id] },
    });

    // ─── 6. Health Packages ────────────────────────────────────────────────
    await HealthPackage.insertMany([
      {
        name: "Comprehensive Women's Wellness",
        description: "A complete health check-up package designed for women aged 18-45, covering all essential parameters for preventive care and early detection of common health issues.",
        price: 2999,
        originalPrice: 4999,
        tests: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting & PP)', 'Lipid Profile', 'Thyroid Profile (TSH, T3, T4)', 'Vitamin D & B12', 'Urine Routine', 'Pap Smear', 'Pelvic Ultrasound', 'Bone Density (DEXA)', 'Breast Examination'],
        category: "Women's Health",
        targetGender: 'Female',
        ageGroup: '18-45 years',
        isPopular: true,
      },
      {
        name: 'Pregnancy Care Plus',
        description: "Comprehensive antenatal care package covering all essential tests recommended during pregnancy to monitor mother and baby's health from conception to delivery.",
        price: 4999,
        originalPrice: 7999,
        tests: ['First Trimester Screening (NT Scan + Double Marker)', 'OGTT (Glucose Tolerance Test)', 'Anomaly Scan (Level II)', 'Growth Scan Series', 'Complete Blood Count', 'Iron Studies', 'Urine Culture', 'TORCH Profile', 'Fetal Echocardiography', 'Doppler Study'],
        category: 'Pregnancy',
        targetGender: 'Female',
        ageGroup: 'Pregnant women',
        isPopular: true,
      },
      {
        name: 'Fertility Assessment Package',
        description: "A comprehensive fertility assessment package for couples trying to conceive, covering hormonal evaluation, semen analysis, and structural investigations.",
        price: 8999,
        originalPrice: 12999,
        tests: ['AMH (Anti-Müllerian Hormone)', 'FSH, LH, Estradiol', 'Prolactin', 'Progesterone', 'Thyroid Profile', 'Semen Analysis (Partner)', 'Hysterosalpingography (HSG)', 'Antral Follicle Count', 'Karyotyping', 'Thrombophilia Panel'],
        category: 'Fertility',
        targetGender: 'Female',
        ageGroup: '25-40 years',
        isPopular: false,
      },
      {
        name: 'Cancer Screening Package',
        description: "Early cancer detection package for women, focusing on the most common gynecological and non-gynecological cancers. Early detection saves lives.",
        price: 5999,
        originalPrice: 9999,
        tests: ['Pap Smear with HPV DNA Test', 'CA-125 (Ovarian Cancer Marker)', 'CEA (Colon Cancer Marker)', 'Mammography', 'Breast Ultrasound', 'Transvaginal Ultrasound', 'CA 15-3 (Breast Cancer Marker)', 'Colposcopy (if needed)', 'Biopsy (if indicated)', 'Thyroid Ultrasound'],
        category: 'Cancer Screening',
        targetGender: 'Female',
        ageGroup: '35-65 years',
        isPopular: false,
      },
      {
        name: 'PCOS Management Package',
        description: "Specifically designed for women with PCOS (Polycystic Ovary Syndrome), this package covers comprehensive hormonal, metabolic, and ultrasound evaluations.",
        price: 3499,
        originalPrice: 5999,
        tests: ['Pelvic Ultrasound (Follicle Study)', 'LH/FSH Ratio', 'Total & Free Testosterone', 'DHEA-S', 'Fasting Insulin & HOMA-IR', 'Blood Sugar Profile', 'Lipid Profile', 'Thyroid Function Tests', 'Vitamin D & B12', 'Anti-Mullerian Hormone (AMH)'],
        category: 'PCOS',
        targetGender: 'Female',
        ageGroup: '15-40 years',
        isPopular: true,
      },
    ]);

    // ─── 7. Blogs ─────────────────────────────────────────────────────────
    await Blog.insertMany([
      {
        title: 'Understanding PCOS: Symptoms, Causes, and Treatment Options',
        excerpt: 'Polycystic Ovary Syndrome (PCOS) affects 1 in 5 women in India. Learn about its symptoms, root causes, and the most effective treatment approaches available today.',
        content: `<h2>What is PCOS?</h2><p>Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders affecting women of reproductive age, impacting approximately 20% of women in India. It is characterized by irregular periods, excess androgen (male hormones) levels, and polycystic ovaries.</p><h2>Common Symptoms</h2><ul><li>Irregular or absent menstrual periods</li><li>Excess facial and body hair (hirsutism)</li><li>Acne and oily skin</li><li>Thinning hair or hair loss</li><li>Weight gain, especially around the abdomen</li><li>Difficulty conceiving</li><li>Mood changes, anxiety, and depression</li></ul><h2>Causes of PCOS</h2><p>The exact cause of PCOS is not fully understood, but several factors contribute including insulin resistance (which affects up to 70% of PCOS patients), genetic factors, low-grade inflammation, and excess androgen production by the ovaries.</p><h2>Treatment Options</h2><p>Treatment for PCOS is tailored to each individual's symptoms and goals. Common approaches include lifestyle modifications (diet and exercise), oral contraceptive pills to regulate periods, Metformin for insulin resistance, fertility medications like Clomiphene Citrate for those wanting to conceive, and anti-androgen medications for hair and skin issues.</p><h2>Living with PCOS</h2><p>With proper management, most women with PCOS can lead healthy, fulfilling lives. Early diagnosis and a personalized treatment plan are key. Regular follow-ups with a gynecologist, a balanced diet low in refined carbohydrates, regular moderate exercise, and stress management are pillars of PCOS management.</p>`,
        category: 'PCOS',
        author: 'Dr. Priya Sharma',
        authorRole: 'Senior Gynecologist & Obstetrician',
        publishDate: new Date('2024-01-15'),
        readTime: 8,
        tags: ['PCOS', 'hormonal disorder', 'insulin resistance', 'fertility', 'women health'],
        isPublished: true,
        viewCount: 1250,
      },
      {
        title: 'Your Week-by-Week Pregnancy Guide: First Trimester',
        excerpt: 'Navigate the exciting and sometimes overwhelming first 12 weeks of pregnancy with our comprehensive guide covering fetal development, common symptoms, and essential do\'s and don\'ts.',
        content: `<h2>Welcome to Your First Trimester</h2><p>The first trimester spans from week 1 to week 12 of pregnancy. This is a period of rapid and dramatic development for your baby, and significant changes for your body. Understanding what to expect can help you navigate these early weeks with confidence.</p><h2>Week-by-Week Development</h2><h3>Weeks 1-4: Conception and Implantation</h3><p>In the first two weeks, your body prepares for ovulation. Conception occurs around week 2-3. By week 4, the fertilized egg has implanted in the uterine wall, and your body begins producing hCG (human chorionic gonadotropin), the hormone detected by pregnancy tests.</p><h3>Weeks 5-8: Embryonic Stage</h3><p>Your baby is now an embryo. The heart begins beating around week 6. By week 8, all major organs have begun forming, tiny fingers and toes are developing, and your baby is about 2 cm long.</p><h3>Weeks 9-12: End of First Trimester</h3><p>Your baby is now called a fetus. External genitalia begin to differentiate. By week 12, the fetus is about 6 cm long and weighs about 14 grams. The risk of miscarriage drops significantly after week 12.</p><h2>Common First Trimester Symptoms</h2><ul><li>Morning sickness (nausea and vomiting)</li><li>Extreme fatigue</li><li>Breast tenderness and changes</li><li>Frequent urination</li><li>Food aversions or cravings</li><li>Heightened sense of smell</li><li>Mood swings</li></ul><h2>Essential Tests in the First Trimester</h2><p>Your doctor will recommend several tests including blood group and Rh factor, complete blood count, blood sugar, thyroid function, HIV, Hepatitis B and C, and the First Trimester Screening (NT Scan + Double Marker test between 11-14 weeks).</p>`,
        category: 'Pregnancy',
        author: 'Dr. Sunita Rao',
        authorRole: 'Maternal-Fetal Medicine Specialist',
        publishDate: new Date('2024-02-10'),
        readTime: 10,
        tags: ['pregnancy', 'first trimester', 'fetal development', 'prenatal care', 'maternity'],
        isPublished: true,
        viewCount: 2340,
      },
      {
        title: 'IVF Success Guide: What to Expect During Your Fertility Journey',
        excerpt: 'IVF can feel overwhelming, but knowing what to expect at each step can make all the difference. Our fertility specialists walk you through the complete IVF process.',
        content: `<h2>Understanding IVF</h2><p>In Vitro Fertilization (IVF) is an assisted reproductive technology (ART) where eggs are retrieved from the ovaries and fertilized by sperm in a laboratory. The resulting embryo(s) are then transferred to the uterus. IVF offers hope to couples who have been unable to conceive through natural methods or simpler treatments.</p><h2>Who Needs IVF?</h2><p>IVF is recommended for women with blocked or damaged fallopian tubes, severe male factor infertility (low sperm count or motility), unexplained infertility after 2 years of trying, endometriosis, premature ovarian failure, and women who have not responded to other fertility treatments like IUI.</p><h2>The IVF Process: Step by Step</h2><h3>Step 1: Ovarian Stimulation (10-14 days)</h3><p>Injectable fertility medications are used to stimulate the ovaries to produce multiple eggs. Regular monitoring through blood tests and ultrasounds is done every 2-3 days.</p><h3>Step 2: Egg Retrieval (Egg Pick-Up)</h3><p>When follicles are mature, a trigger injection is given. 36 hours later, eggs are retrieved under sedation using a thin needle guided by ultrasound.</p><h3>Step 3: Fertilization</h3><p>Retrieved eggs are fertilized with sperm in the lab. In cases of male factor infertility, ICSI (Intracytoplasmic Sperm Injection) is used where a single sperm is injected directly into each egg.</p><h3>Step 4: Embryo Culture (3-5 days)</h3><p>Fertilized eggs develop into embryos. Embryos are assessed daily for quality and development.</p><h3>Step 5: Embryo Transfer</h3><p>1-2 healthy embryos are transferred into the uterus. The procedure is painless and takes about 15-20 minutes.</p><h3>Step 6: The Two-Week Wait</h3><p>After the transfer, you wait 14 days before taking a pregnancy test. This is often the most emotionally challenging part of the process.</p><h2>Success Rates at GyneCare</h2><p>Our IVF success rates are among the highest in the region, with a 65% success rate for women under 35 years. Success depends on age, egg quality, sperm quality, uterine health, and the clinic's expertise.</p>`,
        category: 'Fertility',
        author: 'Dr. Anita Desai',
        authorRole: 'IVF & Fertility Specialist',
        publishDate: new Date('2024-03-05'),
        readTime: 12,
        tags: ['IVF', 'fertility treatment', 'ART', 'infertility', 'embryo transfer', 'ICSI'],
        isPublished: true,
        viewCount: 1876,
      },
      {
        title: 'Cervical Cancer Prevention: The Importance of Regular Pap Smears and HPV Vaccination',
        excerpt: 'Cervical cancer is largely preventable with regular screening and vaccination. Learn why every woman should get a Pap smear and how the HPV vaccine protects you.',
        content: `<h2>Cervical Cancer in India</h2><p>Cervical cancer is the second most common cancer affecting women in India, with approximately 1.25 lakh new cases diagnosed every year. Tragically, most of these cases are detected at an advanced stage, making treatment more difficult. However, cervical cancer is almost entirely preventable with regular screening and vaccination.</p><h2>What Causes Cervical Cancer?</h2><p>Nearly all cases of cervical cancer are caused by persistent infection with certain strains of Human Papillomavirus (HPV). HPV is a very common virus transmitted through sexual contact. Most HPV infections clear on their own, but some strains (particularly HPV 16 and 18) can cause cellular changes that may develop into cancer over many years.</p><h2>Pap Smear Screening</h2><p>A Pap smear (also called Pap test) is a simple procedure where cells are collected from the cervix and examined under a microscope for abnormalities. Regular Pap smears can detect precancerous changes early, allowing treatment before cancer develops.</p><h3>Recommended Schedule</h3><ul><li>Start at age 21 (or within 3 years of becoming sexually active)</li><li>Every 3 years for women aged 21-29</li><li>Every 5 years for women aged 30-65 (Pap + HPV co-test) or every 3 years (Pap alone)</li></ul><h2>HPV Vaccination</h2><p>The HPV vaccine is highly effective in preventing HPV infections that cause cervical cancer. GyneCare recommends vaccination for girls aged 9-14 years (before sexual activity begins) for maximum effectiveness, and for women up to age 45 who were not previously vaccinated. The Cervarix and Gardasil vaccines are available in India.</p><h2>Signs to Watch For</h2><p>Early cervical cancer often has no symptoms. Warning signs include unusual vaginal bleeding (between periods, after sex, or after menopause), unusual vaginal discharge, and pelvic pain. Any of these symptoms should be evaluated by a doctor immediately.</p>`,
        category: 'Cancer',
        author: 'Dr. Priya Sharma',
        authorRole: 'Senior Gynecologist & Oncology Specialist',
        publishDate: new Date('2024-03-20'),
        readTime: 9,
        tags: ['cervical cancer', 'HPV', 'Pap smear', 'cancer prevention', 'vaccination', 'women health'],
        isPublished: true,
        viewCount: 987,
      },
    ]);

    // ─── 8. Testimonials ──────────────────────────────────────────────────
    await Testimonial.insertMany([
      {
        patientName: 'Ananya Mehta',
        content: "I was diagnosed with PCOS three years ago and was told it would be difficult to conceive naturally. With Dr. Priya Sharma's guidance, proper medication, and lifestyle changes, I am now a proud mother of a healthy baby boy. GyneCare changed my life. The staff is incredibly supportive and the facilities are world-class.",
        rating: 5,
        department: 'Obstetrics & Gynecology',
        treatmentType: 'PCOS Management & Fertility Treatment',
        location: 'Mumbai',
        date: new Date('2024-01-10'),
        isApproved: true,
      },
      {
        patientName: 'Kavya Reddy',
        content: "After 4 years of trying to conceive and two failed IUI cycles at another clinic, we came to Dr. Anita Desai at GyneCare Pune. She was thorough, patient, and always kept us informed. Our IVF cycle was successful on the first attempt and we welcomed twin girls in December. We cannot thank her enough!",
        rating: 5,
        department: 'IVF & Fertility',
        treatmentType: 'IVF',
        location: 'Pune',
        date: new Date('2024-02-05'),
        isApproved: true,
      },
      {
        patientName: 'Shweta Kulkarni',
        content: "I had a high-risk pregnancy due to gestational diabetes. Dr. Sunita Rao monitored my entire pregnancy with utmost care. She was available on call whenever I was anxious, and her expertise ensured a safe delivery despite the complications. GyneCare Mumbai has state-of-the-art NICU facilities which gave us immense peace of mind.",
        rating: 5,
        department: 'Maternal-Fetal Medicine',
        treatmentType: 'High-Risk Pregnancy Management',
        location: 'Mumbai',
        date: new Date('2024-02-18'),
        isApproved: true,
      },
      {
        patientName: 'Neha Joshi',
        content: "I booked the Comprehensive Women's Wellness package for my annual check-up. The experience was seamless — from booking the appointment online to getting my results within 24 hours. The nurses and technicians were gentle and professional. I discovered a Vitamin D deficiency early which I could address before it became a serious issue. Highly recommended for all women.",
        rating: 4,
        department: "Women's Health",
        treatmentType: 'Health Package - Annual Check-up',
        location: 'Nashik',
        date: new Date('2024-03-01'),
        isApproved: true,
      },
      {
        patientName: 'Pooja Iyer',
        content: "I was terrified when my Pap smear came back with abnormal results. The team at GyneCare handled my case with such professionalism and sensitivity. They explained every step of the colposcopy procedure and were available to answer all my questions. Thankfully, it was a precancerous lesion that was successfully treated. Regular screening truly saves lives — I urge all women to not skip their annual check-ups.",
        rating: 5,
        department: 'Gynecologic Oncology',
        treatmentType: 'Cervical Cancer Screening & Treatment',
        location: 'Pune',
        date: new Date('2024-03-15'),
        isApproved: true,
      },
    ]);

    console.log('\n✅ Seed completed successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 Summary:');
    console.log(`   👤 Admin users:    1  (admin@gynecare.com / Admin@123)`);
    console.log(`   🤒 Patient users:  3  (patient1-3@gynecare.com / Patient@123)`);
    console.log(`   👩‍⚕️ Doctor users:  3  (dr.priya, dr.anita, dr.sunita @gynecare.com / Doctor@123)`);
    console.log(`   🏥 Hospitals:      4  (Mumbai, Pune, Nashik, Nagpur)`);
    console.log(`   📦 Packages:       5`);
    console.log(`   📝 Blogs:          4  (published)`);
    console.log(`   💬 Testimonials:   5  (approved)`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
};

seed();
