import { type ApiDoctorsFilter, DOCTORS_DATA, filterDoctors } from "@/lib/api";
import type { Doctor } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useDoctors(filter?: ApiDoctorsFilter) {
  return useQuery<Doctor[]>({
    queryKey: ["doctors", filter],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 400));
      if (!filter) return DOCTORS_DATA;
      return filterDoctors(DOCTORS_DATA, filter);
    },
  });
}

export function useDoctorById(id: string) {
  return useQuery<Doctor | null>({
    queryKey: ["doctor", id],
    queryFn: async () => {
      return DOCTORS_DATA.find((d) => d.id === id) ?? null;
    },
    enabled: !!id,
  });
}

export function useTopDoctors(limit = 4) {
  return useQuery<Doctor[]>({
    queryKey: ["top-doctors", limit],
    queryFn: async () => {
      return [...DOCTORS_DATA]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
    },
  });
}

export function useSpecialities() {
  return useQuery<string[]>({
    queryKey: ["specialities"],
    queryFn: async () => {
      const specs = [...new Set(DOCTORS_DATA.map((d) => d.speciality))];
      return specs;
    },
  });
}

export function useDoctorLocations() {
  return useQuery<string[]>({
    queryKey: ["doctor-locations"],
    queryFn: async () => {
      const locs = [...new Set(DOCTORS_DATA.map((d) => d.location))];
      return locs;
    },
  });
}
