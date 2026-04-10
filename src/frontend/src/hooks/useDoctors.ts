import {
  type ApiDoctorsFilter,
  apiFetchDoctorById,
  apiFetchDoctors,
} from "@/lib/api";
import type { Doctor } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useDoctors(filter?: ApiDoctorsFilter) {
  return useQuery<Doctor[]>({
    queryKey: ["doctors", filter],
    queryFn: () => apiFetchDoctors(filter),
  });
}

export function useDoctorById(id: string) {
  return useQuery<Doctor | null>({
    queryKey: ["doctor", id],
    queryFn: () => apiFetchDoctorById(id),
    enabled: !!id,
  });
}

export function useTopDoctors(limit = 4) {
  return useQuery<Doctor[]>({
    queryKey: ["top-doctors", limit],
    queryFn: async () => {
      const doctors = await apiFetchDoctors();
      return [...doctors].sort((a, b) => b.rating - a.rating).slice(0, limit);
    },
  });
}

export function useSpecialities() {
  return useQuery<string[]>({
    queryKey: ["specialities"],
    queryFn: async () => {
      const doctors = await apiFetchDoctors();
      return [...new Set(doctors.map((d) => d.speciality))];
    },
  });
}

export function useDoctorLocations() {
  return useQuery<string[]>({
    queryKey: ["doctor-locations"],
    queryFn: async () => {
      const doctors = await apiFetchDoctors();
      return [...new Set(doctors.map((d) => d.location))];
    },
  });
}
