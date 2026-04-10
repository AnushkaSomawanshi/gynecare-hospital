import Map "mo:core/Map";
import UserTypes "types/users";
import DoctorTypes "types/doctors";
import HospitalTypes "types/hospitals";
import AppointmentTypes "types/appointments";
import HealthTypes "types/health";
import ContentTypes "types/content";
import Common "types/common";

import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";

import UsersMixin "mixins/users-api";
import DoctorsMixin "mixins/doctors-api";
import HospitalsMixin "mixins/hospitals-api";
import AppointmentsMixin "mixins/appointments-api";
import HealthMixin "mixins/health-api";
import ContentMixin "mixins/content-api";

actor {
  // Authorization
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Users
  let users = Map.empty<Common.UserId, UserTypes.User>();

  // Doctors
  let doctors = Map.empty<Text, DoctorTypes.Doctor>();

  // Hospitals
  let hospitals = Map.empty<Text, HospitalTypes.Hospital>();

  // Appointments
  let appointments = Map.empty<Text, AppointmentTypes.Appointment>();

  // Health data
  let packages = Map.empty<Text, HealthTypes.HealthPackage>();
  let reports = Map.empty<Text, HealthTypes.Report>();
  let pregnancies = Map.empty<Common.UserId, HealthTypes.PregnancyData>();
  let cycles = Map.empty<Text, HealthTypes.MenstrualCycle>();

  // Content
  let blogs = Map.empty<Text, ContentTypes.Blog>();
  let testimonials = Map.empty<Text, ContentTypes.Testimonial>();

  // Seed: Hospitals
  hospitals.add(
    "hosp-1",
    {
      id = "hosp-1";
      name = "GyneCare Hospital Mumbai";
      address = "Plot 12, Bandra West, Mumbai - 400050";
      city = "Mumbai";
      state = "Maharashtra";
      phone = "+91 22 6789 0001";
      emergency = "+91 98200 00001";
      facilities = ["Labour & Delivery Suite", "NICU", "IVF Lab", "Ultrasound", "Laparoscopy OT", "Blood Bank"];
      doctorIds = ["doc-1", "doc-2"];
      imageUrl = null;
    },
  );
  hospitals.add(
    "hosp-2",
    {
      id = "hosp-2";
      name = "GyneCare Hospital Pune";
      address = "Survey No. 45, Koregaon Park, Pune - 411001";
      city = "Pune";
      state = "Maharashtra";
      phone = "+91 20 6789 0002";
      emergency = "+91 98200 00002";
      facilities = ["Maternity Ward", "NICU", "IVF Centre", "Colposcopy", "Hysteroscopy Suite", "Pharmacy"];
      doctorIds = ["doc-3", "doc-4"];
      imageUrl = null;
    },
  );
  hospitals.add(
    "hosp-3",
    {
      id = "hosp-3";
      name = "GyneCare Hospital Nashik";
      address = "Old Agra Road, Nashik - 422001";
      city = "Nashik";
      state = "Maharashtra";
      phone = "+91 253 678 9003";
      emergency = "+91 98200 00003";
      facilities = ["Gynaecology OT", "Antenatal Clinic", "Ultrasound", "Lab", "Pharmacy"];
      doctorIds = ["doc-5", "doc-6"];
      imageUrl = null;
    },
  );
  hospitals.add(
    "hosp-4",
    {
      id = "hosp-4";
      name = "GyneCare Hospital Nagpur";
      address = "Civil Lines, Nagpur - 440001";
      city = "Nagpur";
      state = "Maharashtra";
      phone = "+91 712 678 9004";
      emergency = "+91 98200 00004";
      facilities = ["Obstetrics Ward", "NICU", "Fertility Clinic", "Sonography", "Laparoscopy"];
      doctorIds = ["doc-1"];
      imageUrl = null;
    },
  );

  // Seed: Doctors
  doctors.add(
    "doc-1",
    {
      id = "doc-1";
      userId = "seed-doc-1";
      name = "Dr. Priya Sharma";
      speciality = "Obstetrics & Gynecology";
      qualifications = "MBBS, MS (OBG), FICS";
      experience = 18;
      hospitalIds = ["hosp-1", "hosp-4"];
      availableSlots = [
        { id = "slot-d1-1"; day = "Monday"; startTime = "09:00"; endTime = "09:30"; isAvailable = true },
        { id = "slot-d1-2"; day = "Monday"; startTime = "09:30"; endTime = "10:00"; isAvailable = true },
        { id = "slot-d1-3"; day = "Wednesday"; startTime = "10:00"; endTime = "10:30"; isAvailable = true },
        { id = "slot-d1-4"; day = "Friday"; startTime = "14:00"; endTime = "14:30"; isAvailable = true },
      ];
      bio = "Senior Gynecologist with 18 years of experience in high-risk pregnancies and laparoscopic surgery.";
      rating = 4.9;
      imageUrl = null;
    },
  );
  doctors.add(
    "doc-2",
    {
      id = "doc-2";
      userId = "seed-doc-2";
      name = "Dr. Anjali Mehta";
      speciality = "IVF & Reproductive Medicine";
      qualifications = "MBBS, MD (OBG), Fellowship in IVF";
      experience = 12;
      hospitalIds = ["hosp-1"];
      availableSlots = [
        { id = "slot-d2-1"; day = "Tuesday"; startTime = "11:00"; endTime = "11:30"; isAvailable = true },
        { id = "slot-d2-2"; day = "Thursday"; startTime = "11:30"; endTime = "12:00"; isAvailable = true },
        { id = "slot-d2-3"; day = "Saturday"; startTime = "09:00"; endTime = "09:30"; isAvailable = true },
      ];
      bio = "IVF specialist with over 2000 successful IVF cycles. Expert in PCOS, endometriosis, and recurrent miscarriage.";
      rating = 4.8;
      imageUrl = null;
    },
  );
  doctors.add(
    "doc-3",
    {
      id = "doc-3";
      userId = "seed-doc-3";
      name = "Dr. Kavita Desai";
      speciality = "Obstetrics & Gynecology";
      qualifications = "MBBS, DNB (OBG), DMAS";
      experience = 15;
      hospitalIds = ["hosp-2"];
      availableSlots = [
        { id = "slot-d3-1"; day = "Monday"; startTime = "10:00"; endTime = "10:30"; isAvailable = true },
        { id = "slot-d3-2"; day = "Wednesday"; startTime = "15:00"; endTime = "15:30"; isAvailable = true },
        { id = "slot-d3-3"; day = "Friday"; startTime = "10:00"; endTime = "10:30"; isAvailable = true },
      ];
      bio = "Specialist in normal and complicated deliveries, laparoscopic myomectomy, and hysterectomy.";
      rating = 4.7;
      imageUrl = null;
    },
  );
  doctors.add(
    "doc-4",
    {
      id = "doc-4";
      userId = "seed-doc-4";
      name = "Dr. Sunita Patil";
      speciality = "Gynecologic Oncology";
      qualifications = "MBBS, MD (OBG), Fellowship in Gynec-Oncology";
      experience = 20;
      hospitalIds = ["hosp-2"];
      availableSlots = [
        { id = "slot-d4-1"; day = "Tuesday"; startTime = "09:00"; endTime = "09:30"; isAvailable = true },
        { id = "slot-d4-2"; day = "Thursday"; startTime = "14:00"; endTime = "14:30"; isAvailable = true },
      ];
      bio = "Expert in cervical cancer, ovarian tumors, and minimally invasive oncological surgeries.";
      rating = 4.9;
      imageUrl = null;
    },
  );
  doctors.add(
    "doc-5",
    {
      id = "doc-5";
      userId = "seed-doc-5";
      name = "Dr. Meena Joshi";
      speciality = "Pediatrics & Neonatology";
      qualifications = "MBBS, MD (Pediatrics), Fellowship Neonatology";
      experience = 14;
      hospitalIds = ["hosp-3"];
      availableSlots = [
        { id = "slot-d5-1"; day = "Monday"; startTime = "11:00"; endTime = "11:30"; isAvailable = true },
        { id = "slot-d5-2"; day = "Thursday"; startTime = "11:00"; endTime = "11:30"; isAvailable = true },
      ];
      bio = "Neonatologist specializing in premature newborn care, NICU management, and childhood vaccinations.";
      rating = 4.8;
      imageUrl = null;
    },
  );
  doctors.add(
    "doc-6",
    {
      id = "doc-6";
      userId = "seed-doc-6";
      name = "Dr. Rekha Nair";
      speciality = "Maternal-Fetal Medicine";
      qualifications = "MBBS, MD (OBG), MFM Fellowship";
      experience = 16;
      hospitalIds = ["hosp-3"];
      availableSlots = [
        { id = "slot-d6-1"; day = "Wednesday"; startTime = "09:00"; endTime = "09:30"; isAvailable = true },
        { id = "slot-d6-2"; day = "Friday"; startTime = "15:00"; endTime = "15:30"; isAvailable = true },
      ];
      bio = "High-risk pregnancy specialist with expertise in fetal anomaly scanning and gestational diabetes management.";
      rating = 4.9;
      imageUrl = null;
    },
  );

  // Seed: Health Packages
  packages.add(
    "pkg-1",
    {
      id = "pkg-1";
      name = "Female Cancer Screening Package";
      price = 3500;
      tests = ["Pap Smear", "HPV DNA Test", "CA-125", "Mammography", "Breast Ultrasound", "CBC", "LFT", "RFT"];
      description = "Comprehensive cancer screening package for women covering cervical, breast, and ovarian cancer markers.";
      category = "Cancer Screening";
      isActive = true;
    },
  );
  packages.add(
    "pkg-2",
    {
      id = "pkg-2";
      name = "Pregnancy Care Package";
      price = 5999;
      tests = ["ANC Profile", "Blood Group & Rh", "TORCH Panel", "Thyroid (TSH)", "Urine Routine", "Anomaly Scan", "Glucose Tolerance Test", "HbA1c"];
      description = "Complete antenatal care package covering all essential tests throughout pregnancy.";
      category = "Maternity";
      isActive = true;
    },
  );
  packages.add(
    "pkg-3",
    {
      id = "pkg-3";
      name = "Annual Women's Health Checkup";
      price = 2999;
      tests = ["CBC", "Blood Sugar (F & PP)", "Lipid Profile", "Thyroid (TSH)", "Vitamin D", "Vitamin B12", "Urine Routine", "ECG", "Chest X-Ray", "BMI Assessment"];
      description = "Yearly preventive health checkup package tailored for women aged 25-60.";
      category = "Preventive Health";
      isActive = true;
    },
  );
  packages.add(
    "pkg-4",
    {
      id = "pkg-4";
      name = "Basic Women's Health Package";
      price = 999;
      tests = ["CBC", "Blood Sugar (Fasting)", "Urine Routine", "Thyroid (TSH)"];
      description = "Essential basic health screening for women at an affordable price.";
      category = "Basic";
      isActive = true;
    },
  );
  packages.add(
    "pkg-5",
    {
      id = "pkg-5";
      name = "Executive Women's Wellness Package";
      price = 8999;
      tests = ["Complete Haemogram", "HbA1c", "Lipid Profile", "LFT", "RFT", "Thyroid Full Profile", "Hormonal Profile (FSH, LH, Estradiol, Prolactin)", "Vitamin D & B12", "CA-125", "Pap Smear", "Mammography", "Bone Density Scan", "ECG", "2D Echo", "USG Abdomen & Pelvis"];
      description = "Premium executive wellness package for comprehensive women's health assessment including cardiac and hormonal profiling.";
      category = "Executive";
      isActive = true;
    },
  );

  // Seed: Blogs
  blogs.add(
    "blog-1",
    {
      id = "blog-1";
      title = "Understanding PCOS: Symptoms, Diagnosis, and Treatment";
      content = "Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders affecting women of reproductive age. It is characterized by irregular menstrual cycles, excess androgen levels, and polycystic ovaries. Early diagnosis and lifestyle modifications play a crucial role in managing PCOS effectively. Treatment options range from hormonal therapy and insulin-sensitizing medications to dietary changes and regular exercise. Women with PCOS are at higher risk for type 2 diabetes, hypertension, and endometrial cancer, making regular monitoring essential.";
      excerpt = "Learn about PCOS symptoms, how it is diagnosed, and modern treatment approaches including lifestyle changes and medical therapy.";
      category = "PCOS";
      author = "Dr. Anjali Mehta";
      publishDate = "2026-01-15";
      imageUrl = null;
      isPublished = true;
    },
  );
  blogs.add(
    "blog-2",
    {
      id = "blog-2";
      title = "A Week-by-Week Guide to Healthy Pregnancy";
      content = "Pregnancy is a transformative journey that lasts approximately 40 weeks, divided into three trimesters. In the first trimester, the embryo develops all major organs. The second trimester brings fetal movement and rapid growth. The third trimester prepares both mother and baby for birth. Key milestones include the 12-week NT scan, 20-week anomaly scan, and 32-week growth scan. Proper nutrition, prenatal vitamins including folic acid, iron, and calcium, along with regular antenatal visits are essential for a healthy outcome.";
      excerpt = "A comprehensive guide covering pregnancy milestones, essential scans, nutritional requirements, and tips for a healthy pregnancy journey.";
      category = "Pregnancy";
      author = "Dr. Priya Sharma";
      publishDate = "2026-02-01";
      imageUrl = null;
      isPublished = true;
    },
  );
  blogs.add(
    "blog-3",
    {
      id = "blog-3";
      title = "Menstrual Health: What Your Cycle Tells About Your Body";
      content = "A regular menstrual cycle is a vital sign of women's health. The average cycle is 28 days but can range from 21 to 35 days. Changes in flow, duration, pain levels, or cycle regularity can indicate underlying conditions like fibroids, endometriosis, thyroid disorders, or stress. Tracking your cycle helps identify patterns and irregularities early. Modern period tracking apps and gynecological consultations can help women understand their hormonal health better and seek timely care.";
      excerpt = "Understand what your menstrual cycle reveals about your overall health, and when to seek medical advice for irregularities.";
      category = "Menstrual Health";
      author = "Dr. Kavita Desai";
      publishDate = "2026-02-20";
      imageUrl = null;
      isPublished = true;
    },
  );
  blogs.add(
    "blog-4",
    {
      id = "blog-4";
      title = "IVF Treatment: What to Expect at Each Stage";
      content = "In-vitro fertilization (IVF) is an assisted reproductive technology that helps couples struggling with infertility. The IVF process involves ovarian stimulation with hormonal injections, egg retrieval under sedation, fertilization in the laboratory, embryo culture for 3-5 days, and embryo transfer into the uterus. Success rates depend on age, egg quality, and underlying conditions. Modern techniques like ICSI, PGT-A genetic testing, and frozen embryo transfers have significantly improved outcomes. At GyneCare, our IVF success rate exceeds 65% for women under 35.";
      excerpt = "A step-by-step guide to the IVF process, success rates, and what couples can expect during fertility treatment.";
      category = "IVF & Fertility";
      author = "Dr. Anjali Mehta";
      publishDate = "2026-03-10";
      imageUrl = null;
      isPublished = true;
    },
  );

  // Seed: Testimonials
  testimonials.add(
    "testi-1",
    {
      id = "testi-1";
      patientName = "Sneha Kulkarni";
      content = "I had a very complicated pregnancy due to gestational diabetes and preeclampsia. Dr. Priya Sharma monitored me closely throughout and ensured a safe delivery. The nursing staff at GyneCare Mumbai was incredibly supportive. I am forever grateful!";
      rating = 5;
      department = "Obstetrics & Gynecology";
    },
  );
  testimonials.add(
    "testi-2",
    {
      id = "testi-2";
      patientName = "Pooja Deshmukh";
      content = "After 4 years of trying and two failed IVF attempts elsewhere, Dr. Anjali Mehta at GyneCare gave us hope. Her expertise and the team's personalized approach resulted in our beautiful twins. We cannot thank GyneCare enough for making our dream come true!";
      rating = 5;
      department = "IVF & Reproductive Medicine";
    },
  );
  testimonials.add(
    "testi-3",
    {
      id = "testi-3";
      patientName = "Nandita Rao";
      content = "My PCOS had been undiagnosed for years. Dr. Kavita Desai at GyneCare Pune did a thorough evaluation and put me on the right treatment. Within 6 months, my cycles regularized and I lost 8 kg. The dietary and lifestyle counseling made a huge difference.";
      rating = 5;
      department = "Gynecology";
    },
  );
  testimonials.add(
    "testi-4",
    {
      id = "testi-4";
      patientName = "Anita Bhosale";
      content = "I was diagnosed with early-stage cervical cancer. Dr. Sunita Patil's prompt action and minimally invasive surgical approach ensured I recovered quickly with no major complications. The entire oncology team at GyneCare Pune was professional and compassionate throughout my treatment.";
      rating = 5;
      department = "Gynecologic Oncology";
    },
  );

  include UsersMixin(accessControlState, users);
  include DoctorsMixin(accessControlState, doctors);
  include HospitalsMixin(accessControlState, hospitals);
  include AppointmentsMixin(accessControlState, appointments);
  include HealthMixin(accessControlState, packages, reports, pregnancies, cycles);
  include ContentMixin(accessControlState, blogs, testimonials);
};
