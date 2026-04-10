import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PregnancyData {
    id: string;
    patientId: UserId;
    lastUpdated: Timestamp;
    currentWeek: bigint;
    notes: Array<WeekNote>;
    startDate: string;
}
export interface MenstrualCycle {
    id: string;
    patientId: UserId;
    notes?: string;
    cycleLength: bigint;
    symptoms: Array<string>;
    startDate: string;
}
export type Timestamp = bigint;
export interface TimeSlot {
    id: string;
    day: string;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
}
export interface User {
    id: UserId;
    name: string;
    createdAt: Timestamp;
    role: UserRole;
    email: string;
    abhaId?: string;
    phone: string;
}
export interface WeekNote {
    scanImageRef?: string;
    note: string;
    week: bigint;
}
export interface Report {
    id: string;
    doctorId: string;
    patientId: UserId;
    date: string;
    fileName: string;
    reportType: string;
    notes?: string;
    fileRef: string;
}
export type UserId = string;
export interface Hospital {
    id: string;
    emergency: string;
    city: string;
    name: string;
    state: string;
    imageUrl?: string;
    address: string;
    facilities: Array<string>;
    phone: string;
    doctorIds: Array<string>;
}
export interface Doctor {
    id: string;
    bio: string;
    hospitalIds: Array<string>;
    userId: UserId;
    name: string;
    qualifications: string;
    speciality: string;
    experience: bigint;
    imageUrl?: string;
    availableSlots: Array<TimeSlot>;
    rating: number;
}
export interface Appointment {
    id: string;
    status: AppointmentStatus;
    doctorId: string;
    patientId: UserId;
    date: string;
    createdAt: Timestamp;
    slot: string;
    hospitalId: string;
    notes?: string;
    department: string;
}
export interface HealthPackage {
    id: string;
    tests: Array<string>;
    name: string;
    description: string;
    isActive: boolean;
    category: string;
    price: bigint;
}
export interface Blog {
    id: string;
    title: string;
    content: string;
    isPublished: boolean;
    publishDate: string;
    author: string;
    imageUrl?: string;
    excerpt: string;
    category: string;
}
export interface Testimonial {
    id: string;
    content: string;
    patientName: string;
    rating: bigint;
    department: string;
}
export enum AppointmentStatus {
    cancelled = "cancelled",
    pending = "pending",
    completed = "completed",
    confirmed = "confirmed"
}
export enum UserRole {
    patient = "patient",
    admin = "admin",
    doctor = "doctor"
}
export enum UserRole__1 {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addMenstrualCycle(startDate: string, cycleLength: bigint, symptoms: Array<string>, notes: string | null): Promise<string>;
    addTestimonial(testimonial: Testimonial): Promise<boolean>;
    addWeekNote(week: bigint, note: string, scanImageRef: string | null): Promise<boolean>;
    assignCallerUserRole(user: Principal, role: UserRole__1): Promise<void>;
    bookAppointment(doctorId: string, hospitalId: string, department: string, slot: string, date: string, notes: string | null): Promise<string>;
    cancelAppointment(id: string): Promise<boolean>;
    createBlog(blog: Blog): Promise<boolean>;
    createDoctor(doctor: Doctor): Promise<boolean>;
    createHealthPackage(pkg: HealthPackage): Promise<boolean>;
    createHospital(hospital: Hospital): Promise<boolean>;
    deleteBlog(id: string): Promise<boolean>;
    deleteDoctor(id: string): Promise<boolean>;
    deleteHospital(id: string): Promise<boolean>;
    deleteTestimonial(id: string): Promise<boolean>;
    getAppointmentById(id: string): Promise<Appointment | null>;
    getBlogById(id: string): Promise<Blog | null>;
    getCallerUserRole(): Promise<UserRole__1>;
    getDoctorById(id: string): Promise<Doctor | null>;
    getHealthPackage(id: string): Promise<HealthPackage | null>;
    getHospitalById(id: string): Promise<Hospital | null>;
    getMyPregnancyData(): Promise<PregnancyData | null>;
    getMyProfile(): Promise<User | null>;
    getReport(id: string): Promise<Report | null>;
    getUserById(id: UserId): Promise<User | null>;
    isCallerAdmin(): Promise<boolean>;
    listAllAppointments(): Promise<Array<Appointment>>;
    listAllBlogs(): Promise<Array<Blog>>;
    listAllUsers(): Promise<Array<User>>;
    listAppointmentsByDoctor(doctorId: string): Promise<Array<Appointment>>;
    listDoctors(): Promise<Array<Doctor>>;
    listDoctorsByHospital(hospitalId: string): Promise<Array<Doctor>>;
    listDoctorsBySpeciality(speciality: string): Promise<Array<Doctor>>;
    listHealthPackages(): Promise<Array<HealthPackage>>;
    listHospitals(): Promise<Array<Hospital>>;
    listHospitalsByCity(city: string): Promise<Array<Hospital>>;
    listMyAppointments(): Promise<Array<Appointment>>;
    listMyMenstrualCycles(): Promise<Array<MenstrualCycle>>;
    listMyReports(): Promise<Array<Report>>;
    listPublishedBlogs(): Promise<Array<Blog>>;
    listTestimonials(): Promise<Array<Testimonial>>;
    listUsersByRole(role: UserRole): Promise<Array<User>>;
    registerUser(name: string, email: string, phone: string, role: UserRole, abhaId: string | null): Promise<string>;
    updateAppointmentStatus(id: string, status: AppointmentStatus): Promise<boolean>;
    updateBlog(blog: Blog): Promise<boolean>;
    updateDoctor(doctor: Doctor): Promise<boolean>;
    updateHealthPackage(pkg: HealthPackage): Promise<boolean>;
    updateHospital(hospital: Hospital): Promise<boolean>;
    updateMenstrualCycle(cycle: MenstrualCycle): Promise<boolean>;
    updateMyProfile(name: string, phone: string, abhaId: string | null): Promise<boolean>;
    updateSlotAvailability(doctorId: string, slotId: string, isAvailable: boolean): Promise<boolean>;
    uploadReport(report: Report): Promise<boolean>;
    upsertPregnancyData(currentWeek: bigint, startDate: string): Promise<boolean>;
}
