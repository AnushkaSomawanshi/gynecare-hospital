import { ax as getToken } from "./index-BC5Mp0jx.js";
const API_URL = "http://localhost:5000";
async function request(method, path, body, authenticated = false) {
  const headers = {
    "Content-Type": "application/json"
  };
  if (authenticated) {
    const token = getToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body !== void 0 ? JSON.stringify(body) : void 0
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
}
const apiClient = {
  get: (path, authenticated = false) => request("GET", path, void 0, authenticated),
  post: (path, body, authenticated = false) => request("POST", path, body, authenticated),
  patch: (path, body, authenticated = false) => request("PATCH", path, body, authenticated)
};
const HOSPITALS_DATA = [
  {
    id: "h1",
    name: "GyneCare Hospital — Pune Main",
    address: "Survey No. 341, Model Colony, Shivajinagar",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411016",
    phone: "+91 98765 43210",
    email: "pune@gynecarehosp.in",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    facilities: [
      "NICU",
      "IVF Lab",
      "24x7 Emergency",
      "Blood Bank",
      "ICU",
      "Pharmacy"
    ],
    bedCapacity: 250,
    doctorCount: 45,
    emergencyAvailable: true,
    coordinates: { lat: 18.5204, lng: 73.8567 }
  },
  {
    id: "h2",
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
    coordinates: { lat: 19.1136, lng: 72.8697 }
  },
  {
    id: "h3",
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
    coordinates: { lat: 19.9975, lng: 73.7898 }
  }
];
const DOCTORS_DATA = [
  {
    id: "d1",
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
    expertise: ["High-Risk Pregnancy", "Laparoscopy", "IVF Support"]
  },
  {
    id: "d2",
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
    expertise: ["IVF", "PCOS", "Endometriosis", "Infertility"]
  },
  {
    id: "d3",
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
    expertise: ["Cervical Cancer", "Ovarian Cancer", "Robotic Surgery"]
  },
  {
    id: "d4",
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
    consultationFee: 1e3,
    availableDays: ["Wednesday", "Friday", "Saturday"],
    languages: ["Hindi", "Marathi"],
    expertise: ["Prenatal Diagnosis", "Twin Pregnancy", "Preterm Birth"]
  }
];
const PACKAGES_DATA = [
  {
    id: "p1",
    name: "Comprehensive Women's Wellness Package",
    category: "Preventive",
    price: 2999,
    originalPrice: 4500,
    description: "Complete women's health assessment with all essential tests included.",
    tests: [
      "CBC",
      "Thyroid Profile",
      "Pap Smear",
      "Mammography",
      "Bone Density",
      "Vitamin D",
      "HbA1c"
    ],
    testCount: 35,
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    popular: true,
    gender: "female",
    ageGroup: "25-60 years"
  },
  {
    id: "p2",
    name: "Pregnancy Care Package",
    category: "Maternity",
    price: 4999,
    originalPrice: 7500,
    description: "Comprehensive prenatal care package for healthy pregnancy management.",
    tests: [
      "Anomaly Scan",
      "NT Scan",
      "Quad Test",
      "GCT",
      "Growth Scan",
      "Fetal Doppler"
    ],
    testCount: 28,
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    popular: true,
    gender: "female",
    ageGroup: "Pregnancy"
  },
  {
    id: "p3",
    name: "Fertility Assessment Package",
    category: "Fertility",
    price: 3499,
    originalPrice: 5200,
    description: "Comprehensive fertility evaluation for couples planning a family.",
    tests: [
      "AMH",
      "AFC Count",
      "HSG",
      "Hormonal Profile",
      "Semen Analysis",
      "Hysteroscopy"
    ],
    testCount: 22,
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    popular: false,
    gender: "female",
    ageGroup: "20-45 years"
  },
  {
    id: "p4",
    name: "Female Cancer Screening Package",
    category: "Cancer Screening",
    price: 3999,
    originalPrice: 6e3,
    description: "Early detection cancer screening for women — cervical, breast, and ovarian.",
    tests: [
      "Pap Smear",
      "HPV Test",
      "CA125",
      "CA15.3",
      "Mammography",
      "Pelvic Ultrasound"
    ],
    testCount: 18,
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    popular: false,
    gender: "female",
    ageGroup: "30-65 years"
  },
  {
    id: "p5",
    name: "PCOS Management Package",
    category: "Hormonal Health",
    price: 1999,
    originalPrice: 3200,
    description: "Targeted screening and assessment for PCOS diagnosis and management.",
    tests: [
      "LH/FSH Ratio",
      "Testosterone",
      "DHEAS",
      "Insulin",
      "Pelvic USG",
      "BMI Assessment"
    ],
    testCount: 15,
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    popular: true,
    gender: "female",
    ageGroup: "15-45 years"
  }
];
const BLOGS_DATA = [
  {
    id: "b1",
    title: "Understanding PCOS: Symptoms, Causes, and Modern Treatments",
    excerpt: "Polycystic Ovary Syndrome affects 1 in 10 women. Learn about the latest treatment approaches and lifestyle modifications that can help manage PCOS effectively.",
    content: "",
    category: "PCOS & Hormonal Health",
    author: "Dr. Anjali Kulkarni",
    authorRole: "Infertility Specialist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-03-15",
    readTime: 8,
    tags: ["PCOS", "Hormones", "Fertility", "Lifestyle"]
  },
  {
    id: "b2",
    title: "Week-by-Week Pregnancy Guide: What to Expect in Each Trimester",
    excerpt: "From the first heartbeat to delivery, our comprehensive guide walks you through every stage of your pregnancy journey with expert tips and insights.",
    content: "",
    category: "Pregnancy & Maternity",
    author: "Dr. Priya Sharma",
    authorRole: "Senior Obstetrician",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-03-28",
    readTime: 12,
    tags: ["Pregnancy", "Prenatal Care", "Trimester"]
  },
  {
    id: "b3",
    title: "Cervical Cancer Prevention: Why Every Woman Needs a Pap Smear",
    excerpt: "Cervical cancer is largely preventable. Understand why regular Pap smears and HPV vaccination are crucial for early detection and prevention.",
    content: "",
    category: "Cancer Prevention",
    author: "Dr. Sunita Patil",
    authorRole: "Gynecologic Oncologist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-04-02",
    readTime: 6,
    tags: ["Cancer Prevention", "Pap Smear", "HPV"]
  },
  {
    id: "b4",
    title: "IVF Success Rates: What Factors Influence Your Journey to Parenthood",
    excerpt: "IVF technology has advanced tremendously. Our fertility specialists explain key factors that affect success rates and what you can do to improve your chances.",
    content: "",
    category: "Fertility & IVF",
    author: "Dr. Anjali Kulkarni",
    authorRole: "IVF Specialist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-04-05",
    readTime: 10,
    tags: ["IVF", "Infertility", "Assisted Reproduction"]
  }
];
function createAppointmentFromBooking(bookingData, user) {
  const doctor = DOCTORS_DATA.find((d) => d.id === bookingData.doctorId);
  const hospital = HOSPITALS_DATA.find((h) => h.id === bookingData.hospitalId);
  return {
    patientId: user.id,
    patientName: user.name,
    doctorId: bookingData.doctorId ?? "",
    doctorName: (doctor == null ? void 0 : doctor.name) ?? "",
    hospitalId: bookingData.hospitalId ?? "",
    hospitalName: (hospital == null ? void 0 : hospital.name) ?? "",
    department: bookingData.department ?? "",
    date: bookingData.date ?? "",
    timeSlot: bookingData.timeSlot ?? "",
    type: bookingData.type ?? "in-person",
    status: "pending",
    reason: bookingData.reason,
    paymentStatus: "pending",
    amount: (doctor == null ? void 0 : doctor.consultationFee) ?? 500
  };
}
async function apiFetchDoctors(filter) {
  try {
    const params = new URLSearchParams();
    if (filter == null ? void 0 : filter.location) params.set("location", filter.location);
    if (filter == null ? void 0 : filter.speciality) params.set("speciality", filter.speciality);
    if (filter == null ? void 0 : filter.search) params.set("search", filter.search);
    const query = params.toString();
    const res = await apiClient.get(
      `/api/doctors${query ? `?${query}` : ""}`
    );
    if (res.success && res.data) {
      return res.data.map((d) => ({ ...d, id: d._id ?? d.id }));
    }
    return DOCTORS_DATA;
  } catch {
    return DOCTORS_DATA;
  }
}
async function apiFetchHospitals() {
  try {
    const res = await apiClient.get("/api/hospitals");
    if (res.success && res.data) {
      return res.data.map((h) => ({ ...h, id: h._id ?? h.id }));
    }
    return HOSPITALS_DATA;
  } catch {
    return HOSPITALS_DATA;
  }
}
async function apiLogin(email, password) {
  return apiClient.post("/api/auth/login", { email, password });
}
async function apiRegister(data) {
  return apiClient.post("/api/auth/register", data);
}
async function apiFetchAppointments() {
  try {
    const res = await apiClient.get("/api/appointments", true);
    if (res.success && res.data) {
      return res.data.map((a) => ({
        ...a,
        id: a._id ?? a.id,
        patientId: String(a.patientId)
      }));
    }
    return [];
  } catch {
    return [];
  }
}
async function apiCreateAppointment(data) {
  const res = await apiClient.post(
    "/api/appointments",
    data,
    true
  );
  if (!res.success || !res.data) throw new Error("Failed to create appointment");
  const apt = res.data;
  return {
    ...apt,
    id: apt._id ?? apt.id,
    patientId: String(apt.patientId)
  };
}
async function apiCancelAppointment(id) {
  await apiClient.patch(`/api/appointments/${id}/cancel`, void 0, true);
}
export {
  BLOGS_DATA as B,
  DOCTORS_DATA as D,
  HOSPITALS_DATA as H,
  PACKAGES_DATA as P,
  apiFetchDoctors as a,
  apiLogin as b,
  createAppointmentFromBooking as c,
  apiRegister as d,
  apiFetchHospitals as e,
  apiCreateAppointment as f,
  apiCancelAppointment as g,
  apiFetchAppointments as h
};
