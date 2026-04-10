import { j as jsxRuntimeExports, b as Link, d as Button, a as cn, B as Badge, M as MapPin, C as Clock } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { S as Star } from "./star-ByA27dFh.js";
import { A as Award } from "./award-D00jVZGG.js";
import { L as Languages } from "./languages-CRifrRMD.js";
import { D as DOCTORS_DATA, f as filterDoctors } from "./api-lGWS4sD5.js";
import { u as useQuery } from "./useQuery-DXu_4EU2.js";
function DoctorCard({
  doctor,
  variant = "default",
  className
}) {
  if (variant === "compact") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: cn(
          "card-elevated hover:shadow-hospital-lg transition-smooth group",
          className
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: doctor.imageUrl,
              alt: `Dr. ${doctor.name}`,
              className: "h-full w-full object-cover group-hover:scale-105 transition-smooth",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground truncate", children: doctor.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: doctor.speciality }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-yellow-400 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: doctor.rating }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "(",
                doctor.reviewCount,
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "flex-shrink-0 text-xs",
              children: "Book"
            }
          ) })
        ] })
      }
    );
  }
  if (variant === "featured") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: cn(
          "card-elevated hover:shadow-hospital-lg transition-smooth group overflow-hidden",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-56 overflow-hidden bg-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: doctor.imageUrl,
                alt: `Dr. ${doctor.name}`,
                className: "h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500",
                onError: (e) => {
                  e.target.src = "/assets/images/placeholder.svg";
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-xs mb-1", children: doctor.speciality }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold font-display text-lg leading-tight", children: doctor.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs", children: doctor.qualification })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-yellow-400 text-yellow-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: doctor.rating }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                  "(",
                  doctor.reviewCount,
                  " reviews)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  doctor.experience,
                  " yrs exp."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 flex-shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: doctor.hospitalName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-3", children: doctor.expertise.slice(0, 2).map((exp) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] px-2 py-0",
                children: exp
              },
              exp
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/find-doctor", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "w-full text-xs", children: "View Profile" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "w-full text-xs bg-primary hover:bg-primary/90",
                  children: "Book Now"
                }
              ) })
            ] })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: cn(
        "card-elevated hover:shadow-hospital-lg transition-smooth group",
        className
      ),
      "data-ocid": "doctor-card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden rounded-t-lg bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: doctor.imageUrl,
              alt: `Dr. ${doctor.name}`,
              className: "h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-3 right-3 bg-accent text-accent-foreground text-xs shadow-hospital", children: doctor.speciality.split(" ")[0] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display mb-0.5", children: doctor.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: doctor.qualification }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium mb-3", children: doctor.speciality }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-yellow-400 text-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: doctor.rating }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "(",
                doctor.reviewCount,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                doctor.experience,
                " yrs exp."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-primary flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: doctor.location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-3 w-3 text-primary flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: doctor.languages.join(", ") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold text-foreground mb-3", children: [
            "Key Expertise:",
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: doctor.expertise.slice(0, 3).map((exp) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] px-1.5 py-0",
                children: exp
              },
              exp
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Consultation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-foreground", children: [
                "₹",
                doctor.consultationFee
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", "data-ocid": "doctor-card-book-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "btn-primary text-xs", children: "View Profile" }) })
          ] })
        ] })
      ] })
    }
  );
}
function useDoctors(filter) {
  return useQuery({
    queryKey: ["doctors", filter],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 400));
      if (!filter) return DOCTORS_DATA;
      return filterDoctors(DOCTORS_DATA, filter);
    }
  });
}
function useTopDoctors(limit = 4) {
  return useQuery({
    queryKey: ["top-doctors", limit],
    queryFn: async () => {
      return [...DOCTORS_DATA].sort((a, b) => b.rating - a.rating).slice(0, limit);
    }
  });
}
function useSpecialities() {
  return useQuery({
    queryKey: ["specialities"],
    queryFn: async () => {
      const specs = [...new Set(DOCTORS_DATA.map((d) => d.speciality))];
      return specs;
    }
  });
}
function useDoctorLocations() {
  return useQuery({
    queryKey: ["doctor-locations"],
    queryFn: async () => {
      const locs = [...new Set(DOCTORS_DATA.map((d) => d.location))];
      return locs;
    }
  });
}
export {
  DoctorCard as D,
  useDoctors as a,
  useSpecialities as b,
  useDoctorLocations as c,
  useTopDoctors as u
};
