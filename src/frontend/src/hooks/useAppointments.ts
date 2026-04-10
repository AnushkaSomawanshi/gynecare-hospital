import {
  DOCTORS_DATA,
  HOSPITALS_DATA,
  apiCancelAppointment,
  apiCreateAppointment,
  apiFetchAppointments,
  apiFetchDoctors,
  apiFetchHospitals,
} from "@/lib/api";
import type { Appointment, BookingData, TimeSlot } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useAppointments(_patientId?: string) {
  return useQuery<Appointment[]>({
    queryKey: ["appointments"],
    queryFn: apiFetchAppointments,
    enabled: true,
  });
}

export function useDoctorAppointments(_doctorId?: string) {
  return useQuery<Appointment[]>({
    queryKey: ["appointments"],
    queryFn: apiFetchAppointments,
    enabled: true,
  });
}

export function useAppointmentById(id: string) {
  return useQuery<Appointment | null>({
    queryKey: ["appointment", id],
    queryFn: async () => {
      const list = await apiFetchAppointments();
      return list.find((a) => a.id === id) ?? null;
    },
    enabled: !!id,
  });
}

export function useCreateAppointment() {
  const queryClient = useQueryClient();
  return useMutation<
    Appointment,
    Error,
    Omit<Appointment, "id" | "createdAt">
  >({
    mutationFn: (data) => {
      // patientId/patientName come from JWT on the backend; strip them from the payload
      const { patientId: _pid, patientName: _pname, ...rest } = data;
      void _pid;
      void _pname;
      return apiCreateAppointment(rest);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
}

export function useCancelAppointment() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: (id) => apiCancelAppointment(id),
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
      const allAppointments = await apiFetchAppointments();
      const bookedTimes = allAppointments
        .filter(
          (a) =>
            a.doctorId === doctorId &&
            a.date === date &&
            a.status !== "cancelled",
        )
        .map((a) => a.timeSlot);
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
  const [doctorsList, setDoctorsList] = useState(DOCTORS_DATA);
  const [hospitalsList, setHospitalsList] = useState(
    HOSPITALS_DATA as Array<(typeof HOSPITALS_DATA)[number]>,
  );

  // Eagerly fetch from API for wizard use
  useState(() => {
    apiFetchDoctors().then(setDoctorsList).catch(() => {});
    apiFetchHospitals()
      .then((h) => setHospitalsList(h as typeof hospitalsList))
      .catch(() => {});
  });

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

  const selectedDoctor = doctorsList.find((d) => d.id === bookingData.doctorId);
  const selectedHospital = hospitalsList.find(
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
