import { DOCTORS_DATA, HOSPITALS_DATA } from "@/lib/api";
import type { Appointment, BookingData, TimeSlot } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

// ─── Mock data store for appointments (replaces backend until methods exist) ──

const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: "apt1",
    patientId: "user1",
    patientName: "Prachi Desai",
    doctorId: "d1",
    doctorName: "Dr. Priya Sharma",
    hospitalId: "h1",
    hospitalName: "GyneCare Hospital — Pune Main",
    department: "Obstetrics & Gynecology",
    date: "2026-04-15",
    timeSlot: "10:00",
    type: "in-person",
    status: "confirmed",
    reason: "Regular prenatal checkup",
    paymentStatus: "paid",
    amount: 800,
    createdAt: "2026-04-08T10:30:00Z",
  },
  {
    id: "apt2",
    patientId: "user1",
    patientName: "Prachi Desai",
    doctorId: "d2",
    doctorName: "Dr. Anjali Kulkarni",
    hospitalId: "h1",
    hospitalName: "GyneCare Hospital — Pune Main",
    department: "Infertility & IVF",
    date: "2026-04-20",
    timeSlot: "14:30",
    type: "in-person",
    status: "pending",
    reason: "IVF consultation",
    paymentStatus: "pending",
    amount: 1200,
    createdAt: "2026-04-08T11:00:00Z",
  },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useAppointments(patientId?: string) {
  return useQuery<Appointment[]>({
    queryKey: ["appointments", patientId],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 400));
      if (!patientId) return MOCK_APPOINTMENTS;
      return MOCK_APPOINTMENTS.filter((a) => a.patientId === patientId);
    },
    enabled: true,
  });
}

export function useDoctorAppointments(doctorId?: string) {
  return useQuery<Appointment[]>({
    queryKey: ["doctor-appointments", doctorId],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 400));
      if (!doctorId) return [];
      return MOCK_APPOINTMENTS.filter((a) => a.doctorId === doctorId);
    },
    enabled: !!doctorId,
  });
}

export function useAppointmentById(id: string) {
  return useQuery<Appointment | null>({
    queryKey: ["appointment", id],
    queryFn: async () => {
      return MOCK_APPOINTMENTS.find((a) => a.id === id) ?? null;
    },
    enabled: !!id,
  });
}

export function useCreateAppointment() {
  const queryClient = useQueryClient();
  return useMutation<Appointment, Error, Omit<Appointment, "id" | "createdAt">>(
    {
      mutationFn: async (data) => {
        await new Promise((r) => setTimeout(r, 800));
        const newAppointment: Appointment = {
          ...data,
          id: `apt${Date.now()}`,
          createdAt: new Date().toISOString(),
        };
        MOCK_APPOINTMENTS.push(newAppointment);
        return newAppointment;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["appointments"] });
      },
    },
  );
}

export function useCancelAppointment() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await new Promise((r) => setTimeout(r, 400));
      const apt = MOCK_APPOINTMENTS.find((a) => a.id === id);
      if (apt) apt.status = "cancelled";
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
}

export function useAvailableSlots(doctorId: string, date: string) {
  return useQuery<TimeSlot[]>({
    queryKey: ["slots", doctorId, date],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      const times = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
      ];
      const bookedTimes = MOCK_APPOINTMENTS.filter(
        (a) =>
          a.doctorId === doctorId &&
          a.date === date &&
          a.status !== "cancelled",
      ).map((a) => a.timeSlot);
      return times.map((t, i) => ({
        id: `slot-${i}`,
        time: t,
        available: !bookedTimes.includes(t),
      }));
    },
    enabled: !!doctorId && !!date,
  });
}

// ─── Booking wizard state ────────────────────────────────────────────────────

export function useBookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({});

  const updateBooking = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const goToStep = (step: number) => setCurrentStep(step);
  const reset = () => {
    setCurrentStep(1);
    setBookingData({});
  };

  const steps = [
    { step: 1, label: "Select Location", completed: !!bookingData.locationId },
    { step: 2, label: "Choose Hospital", completed: !!bookingData.hospitalId },
    {
      step: 3,
      label: "Select Department",
      completed: !!bookingData.department,
    },
    { step: 4, label: "Choose Doctor", completed: !!bookingData.doctorId },
    {
      step: 5,
      label: "Pick Time Slot",
      completed: !!bookingData.date && !!bookingData.timeSlot,
    },
    { step: 6, label: "Confirm Booking", completed: false },
  ];

  const selectedDoctor = DOCTORS_DATA.find(
    (d) => d.id === bookingData.doctorId,
  );
  const selectedHospital = HOSPITALS_DATA.find(
    (h) => h.id === bookingData.hospitalId,
  );

  return {
    currentStep,
    bookingData,
    steps,
    selectedDoctor,
    selectedHospital,
    updateBooking,
    nextStep,
    prevStep,
    goToStep,
    reset,
  };
}
