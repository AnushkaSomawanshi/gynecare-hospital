import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "./config/db";
import Doctor from "./models/Doctor";
import Hospital from "./models/Hospital";
import Blog from "./models/Blog";
import User from "./models/User";

const hospitals = [
  {
    name: "GyneCare Hospital — Pune Main",
    address: "Survey No. 341, Model Colony, Shivajinagar",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411016",
    phone: "+91 98765 43210",
    email: "pune@gynecarehosp.in",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    facilities: ["NICU", "IVF Lab", "24x7 Emergency", "Blood Bank", "ICU", "Pharmacy"],
    bedCapacity: 250,
    doctorCount: 45,
    emergencyAvailable: true,
    coordinates: { lat: 18.5204, lng: 73.8567 },
  },
  {
    name: "GyneCare Hospital — Mumbai",
    address: "Plot 15, Andheri East, MIDC",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400093",
    phone: "+91 98765 43211",
    email: "mumbai@gynecarehosp.in",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    facilities: ["NICU", "Laparoscopy Suite", "24x7 Emergency", "Blood Bank"],
    bedCapacity: 180,
    doctorCount: 32,
    emergencyAvailable: true,
    coordinates: { lat: 19.1136, lng: 72.8697 },
  },
  {
    name: "GyneCare Hospital — Nashik",
    address: "Gangapur Road, Near CBS",
    city: "Nashik",
    state: "Maharashtra",
    pincode: "422005",
    phone: "+91 98765 43212",
    email: "nashik@gynecarehosp.in",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    facilities: ["OT", "Pharmacy", "Pathology Lab", "Radiology"],
    bedCapacity: 120,
    doctorCount: 18,
    emergencyAvailable: true,
    coordinates: { lat: 19.9975, lng: 73.7898 },
  },
];

const doctors = [
  {
    name: "Dr. Priya Sharma",
    speciality: "Obstetrics & Gynecology",
    qualification: "MD, DGO, FRCOG",
    experience: 18,
    rating: 4.9,
    reviewCount: 312,
    hospitalId: "h1",
    hospitalName: "GyneCare Hospital — Pune Main",
    location: "Pune",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    bio: "Specialist in high-risk pregnancies, minimally invasive surgeries, and comprehensive women's health.",
    consultationFee: 800,
    availableDays: ["Monday", "Wednesday", "Friday"],
    languages: ["Hindi", "Marathi", "English"],
    expertise: ["High-Risk Pregnancy", "Laparoscopy", "IVF Support"],
  },
  {
    name: "Dr. Anjali Kulkarni",
    speciality: "Infertility & IVF",
    qualification: "MS, DNB, Fellowship IVF",
    experience: 14,
    rating: 4.8,
    reviewCount: 228,
    hospitalId: "h1",
    hospitalName: "GyneCare Hospital — Pune Main",
    location: "Pune",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    bio: "Renowned IVF specialist with over 2000 successful procedures. Expert in PCOS and endometriosis.",
    consultationFee: 1200,
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    languages: ["Marathi", "Hindi", "English"],
    expertise: ["IVF", "PCOS", "Endometriosis", "Infertility"],
  },
  {
    name: "Dr. Sunita Patil",
    speciality: "Gynecologic Oncology",
    qualification: "MS, MCh Oncology",
    experience: 22,
    rating: 4.9,
    reviewCount: 186,
    hospitalId: "h2",
    hospitalName: "GyneCare Hospital — Mumbai",
    location: "Mumbai",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    bio: "Pioneer in gynecologic oncology in Maharashtra. Specialist in cervical, ovarian, and uterine cancers.",
    consultationFee: 1500,
    availableDays: ["Monday", "Tuesday", "Thursday"],
    languages: ["Marathi", "Hindi", "English"],
    expertise: ["Cervical Cancer", "Ovarian Cancer", "Robotic Surgery"],
  },
  {
    name: "Dr. Meera Joshi",
    speciality: "Maternal-Fetal Medicine",
    qualification: "MD, DM Perinatology",
    experience: 16,
    rating: 4.7,
    reviewCount: 154,
    hospitalId: "h1",
    hospitalName: "GyneCare Hospital — Pune Main",
    location: "Pune",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    bio: "Expert in managing complex pregnancies and fetal development monitoring.",
    consultationFee: 1000,
    availableDays: ["Wednesday", "Friday", "Saturday"],
    languages: ["Hindi", "Marathi"],
    expertise: ["Prenatal Diagnosis", "Twin Pregnancy", "Preterm Birth"],
  },
];

const blogs = [
  {
    title: "Understanding PCOS: Symptoms, Causes, and Modern Treatments",
    excerpt:
      "Polycystic Ovary Syndrome affects 1 in 10 women. Learn about the latest treatment approaches and lifestyle modifications that can help manage PCOS effectively.",
    content: "",
    category: "PCOS & Hormonal Health",
    author: "Dr. Anjali Kulkarni",
    authorRole: "Infertility Specialist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-03-15",
    readTime: 8,
    tags: ["PCOS", "Hormones", "Fertility", "Lifestyle"],
  },
  {
    title: "Week-by-Week Pregnancy Guide: What to Expect in Each Trimester",
    excerpt:
      "From the first heartbeat to delivery, our comprehensive guide walks you through every stage of your pregnancy journey with expert tips and insights.",
    content: "",
    category: "Pregnancy & Maternity",
    author: "Dr. Priya Sharma",
    authorRole: "Senior Obstetrician",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-03-28",
    readTime: 12,
    tags: ["Pregnancy", "Prenatal Care", "Trimester"],
  },
  {
    title: "Cervical Cancer Prevention: Why Every Woman Needs a Pap Smear",
    excerpt:
      "Cervical cancer is largely preventable. Understand why regular Pap smears and HPV vaccination are crucial for early detection and prevention.",
    content: "",
    category: "Cancer Prevention",
    author: "Dr. Sunita Patil",
    authorRole: "Gynecologic Oncologist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-04-02",
    readTime: 6,
    tags: ["Cancer Prevention", "Pap Smear", "HPV"],
  },
  {
    title: "IVF Success Rates: What Factors Influence Your Journey to Parenthood",
    excerpt:
      "IVF technology has advanced tremendously. Our fertility specialists explain key factors that affect success rates and what you can do to improve your chances.",
    content: "",
    category: "Fertility & IVF",
    author: "Dr. Anjali Kulkarni",
    authorRole: "IVF Specialist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-04-05",
    readTime: 10,
    tags: ["IVF", "Infertility", "Assisted Reproduction"],
  },
];

const demoUsers = [
  {
    name: "Prachi Desai",
    email: "patient@demo.in",
    password: "demo1234",
    phone: "9876543210",
    role: "patient" as const,
  },
  {
    name: "Dr. Priya Sharma",
    email: "doctor@demo.in",
    password: "demo1234",
    phone: "9876543211",
    role: "doctor" as const,
  },
  {
    name: "Admin User",
    email: "admin@demo.in",
    password: "demo1234",
    phone: "9876543212",
    role: "admin" as const,
  },
];

async function seed() {
  await connectDB();
  console.log("Seeding database...");

  await Hospital.deleteMany({});
  await Doctor.deleteMany({});
  await Blog.deleteMany({});

  const insertedHospitals = await Hospital.insertMany(hospitals);
  console.log(`Inserted ${insertedHospitals.length} hospitals`);

  // Map doctor hospitalId to real MongoDB _id strings from inserted hospitals
  const hospitalMap: Record<string, string> = {
    h1: String(insertedHospitals[0]._id),
    h2: String(insertedHospitals[1]._id),
    h3: String(insertedHospitals[2]._id),
  };

  const doctorsWithRealIds = doctors.map((d) => ({
    ...d,
    hospitalId: hospitalMap[d.hospitalId] || d.hospitalId,
    hospitalName: insertedHospitals.find((h) => hospitalMap[d.hospitalId] === String(h._id))?.name || d.hospitalName,
  }));

  const insertedDoctors = await Doctor.insertMany(doctorsWithRealIds);
  console.log(`Inserted ${insertedDoctors.length} doctors`);

  const insertedBlogs = await Blog.insertMany(blogs);
  console.log(`Inserted ${insertedBlogs.length} blogs`);

  // Seed demo users (skip if already exist)
  for (const userData of demoUsers) {
    const existing = await User.findOne({ email: userData.email });
    if (!existing) {
      await User.create(userData);
      console.log(`Created demo user: ${userData.email}`);
    } else {
      console.log(`Demo user already exists: ${userData.email}`);
    }
  }

  console.log("Seed complete!");
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
