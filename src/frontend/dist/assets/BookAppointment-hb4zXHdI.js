import { c as createLucideIcon, a6 as useAuth, r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, k as formatDate, a7 as formatTime, h as formatCurrency, b as Link, d as Button, M as MapPin, i as Calendar, H as Heart, l as ue } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { I as Input } from "./input-Dm-38PBp.js";
import { L as Label } from "./label-BrDcTsSh.js";
import { T as Textarea } from "./textarea-CaUyXWKd.js";
import { u as useBookingWizard, a as useCreateAppointment } from "./useAppointments-D6lDZfpp.js";
import { H as HOSPITALS_DATA, D as DOCTORS_DATA, c as createAppointmentFromBooking } from "./api-lGWS4sD5.js";
import { C as CircleCheckBig } from "./circle-check-big-CMno_QKW.js";
import { B as Building2 } from "./building-2-BWmfPg8U.js";
import { S as Stethoscope } from "./stethoscope-3qHnT9Ax.js";
import { C as ChevronRight } from "./chevron-right-yrYy2BRg.js";
import { B as Baby } from "./baby-aRLHEA_q.js";
import { M as Microscope } from "./microscope-DEGsYMzL.js";
import { S as Star } from "./star-ByA27dFh.js";
import "./useQuery-DXu_4EU2.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
const CITIES = [
  {
    id: "Pune",
    name: "Pune",
    state: "Maharashtra",
    hospitals: 1,
    tagline: "Main Centre"
  },
  {
    id: "Mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    hospitals: 1,
    tagline: "Metro Branch"
  },
  {
    id: "Nashik",
    name: "Nashik",
    state: "Maharashtra",
    hospitals: 1,
    tagline: "City Branch"
  }
];
const DEPARTMENTS = [
  {
    id: "Obstetrics & Gynecology",
    label: "Obstetrics & Gynecology",
    icon: Baby,
    desc: "Prenatal, delivery, postnatal care"
  },
  {
    id: "IVF & Fertility",
    label: "IVF & Fertility",
    icon: Heart,
    desc: "IVF, PCOS, infertility treatment"
  },
  {
    id: "Gynecologic Oncology",
    label: "Gynecologic Oncology",
    icon: Microscope,
    desc: "Cancer screening & treatment"
  },
  {
    id: "Maternal-Fetal Medicine",
    label: "Maternal-Fetal Medicine",
    icon: Baby,
    desc: "High-risk pregnancy care"
  },
  {
    id: "Preventive Health",
    label: "Preventive Health",
    icon: Stethoscope,
    desc: "Health checkups & wellness"
  }
];
const STEP_ICONS = [
  MapPin,
  Building2,
  Stethoscope,
  UserCheck,
  Calendar,
  CreditCard
];
function getTimeSlotsForPeriod() {
  return {
    morning: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
    afternoon: ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30"],
    evening: ["16:00", "16:30", "17:00", "17:30"]
  };
}
function getNext14Days() {
  const days = [];
  const today = /* @__PURE__ */ new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const val = d.toISOString().split("T")[0];
    const label = d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short"
    });
    const day = d.toLocaleDateString("en-IN", { weekday: "short" });
    days.push({ value: val, label, day });
  }
  return days;
}
function BookAppointmentPage() {
  const {
    currentStep,
    bookingData,
    steps,
    selectedDoctor,
    selectedHospital,
    updateBooking,
    nextStep,
    prevStep,
    reset
  } = useBookingWizard();
  const { user } = useAuth();
  const createAppointment = useCreateAppointment();
  const [patientName, setPatientName] = reactExports.useState((user == null ? void 0 : user.name) ?? "");
  const [patientPhone, setPatientPhone] = reactExports.useState((user == null ? void 0 : user.phone) ?? "");
  const [reason, setReason] = reactExports.useState("");
  const [confirmed, setConfirmed] = reactExports.useState(false);
  const [appointmentId, setAppointmentId] = reactExports.useState("");
  const next14 = getNext14Days();
  const timeSlots = getTimeSlotsForPeriod();
  const handleConfirm = async () => {
    if (!patientName || !patientPhone) {
      ue.error("Please fill patient details");
      return;
    }
    try {
      const apptUser = {
        id: (user == null ? void 0 : user.id) ?? "guest",
        name: patientName,
        email: (user == null ? void 0 : user.email) ?? "",
        phone: patientPhone,
        role: (user == null ? void 0 : user.role) ?? "patient",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const apptData = createAppointmentFromBooking(
        { ...bookingData, reason },
        apptUser
      );
      const result = await createAppointment.mutateAsync(apptData);
      setAppointmentId(result.id);
      setConfirmed(true);
    } catch {
      ue.error("Booking failed. Please try again.");
    }
  };
  const handleStartOver = () => {
    reset();
    setConfirmed(false);
    setAppointmentId("");
    setPatientName((user == null ? void 0 : user.name) ?? "");
    setPatientPhone((user == null ? void 0 : user.phone) ?? "");
    setReason("");
  };
  if (confirmed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 flex flex-col items-center text-center max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-12 w-12 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 bg-primary/10 text-primary", children: "Booking Confirmed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold font-display text-foreground mb-2", children: "Appointment Booked!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Your appointment has been successfully booked. You'll receive a confirmation on your registered phone." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated w-full mb-6 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm py-2 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Appointment ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
            "#",
            appointmentId.slice(-6).toUpperCase()
          ] })
        ] }),
        [
          { label: "Patient", value: patientName },
          { label: "Doctor", value: selectedDoctor == null ? void 0 : selectedDoctor.name },
          { label: "Hospital", value: selectedHospital == null ? void 0 : selectedHospital.name },
          { label: "Department", value: bookingData.department },
          {
            label: "Date",
            value: bookingData.date ? formatDate(bookingData.date) : ""
          },
          {
            label: "Time",
            value: bookingData.timeSlot ? formatTime(bookingData.timeSlot) : ""
          },
          {
            label: "Fee",
            value: selectedDoctor ? formatCurrency(selectedDoctor.consultationFee) : ""
          }
        ].map(
          ({ label, value }) => value && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: value })
          ] }, label)
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard/patient", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full btn-primary", children: "View Dashboard" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            className: "flex-1",
            onClick: handleStartOver,
            type: "button",
            children: "Book Another"
          }
        )
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 py-10 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Schedule Visit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold font-display text-foreground", children: "Book an Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-2", children: [
        "Complete your booking in ",
        steps.length,
        " simple steps"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 overflow-x-auto pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-max gap-0 mx-auto max-w-3xl", children: steps.map((step, i) => {
        const StepIcon = STEP_ICONS[i];
        const isActive = step.step === currentStep;
        const isDone = step.step < currentStep;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex h-10 w-10 items-center justify-center rounded-full border-2 transition-smooth ${isDone ? "bg-primary border-primary text-primary-foreground" : isActive ? "bg-accent border-accent text-accent-foreground" : "bg-background border-border text-muted-foreground"}`,
                children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-[10px] mt-1 font-medium text-center max-w-[72px] leading-tight ${isActive ? "text-accent" : isDone ? "text-primary" : "text-muted-foreground"}`,
                children: step.label
              }
            )
          ] }),
          i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `flex-1 h-0.5 mx-1 ${isDone ? "bg-primary" : "bg-border"}`
            }
          )
        ] }, step.step);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
        currentStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-2", children: "Select Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Choose the city for your appointment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: CITIES.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                updateBooking({ locationId: city.id });
                nextStep();
              },
              className: `flex items-center justify-between p-4 rounded-xl border-2 text-left transition-smooth hover:border-primary hover:bg-primary/5 ${bookingData.locationId === city.id ? "border-primary bg-primary/5" : "border-border"}`,
              "data-ocid": `location-${city.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground", children: [
                      city.name,
                      ", ",
                      city.state
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      city.hospitals,
                      " hospital • ",
                      city.tagline
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" })
              ]
            },
            city.id
          )) })
        ] }),
        currentStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-2", children: "Choose Hospital" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
            "Hospitals in ",
            bookingData.locationId
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4", children: HOSPITALS_DATA.filter(
            (h) => !bookingData.locationId || h.city === bookingData.locationId
          ).map((hosp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                updateBooking({ hospitalId: hosp.id });
                nextStep();
              },
              className: `flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-smooth hover:border-primary hover:bg-primary/5 ${bookingData.hospitalId === hosp.id ? "border-primary bg-primary/5" : "border-border"}`,
              "data-ocid": `hospital-${hosp.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-6 w-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: hosp.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: hosp.address }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 mt-2", children: [
                    hosp.facilities.slice(0, 3).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground",
                        children: f
                      },
                      f
                    )),
                    hosp.facilities.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-primary", children: [
                      "+",
                      hosp.facilities.length - 3,
                      " more"
                    ] })
                  ] })
                ] })
              ]
            },
            hosp.id
          )) })
        ] }),
        currentStep === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-2", children: "Select Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Choose the medical department for your visit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  updateBooking({ department: dept.id });
                  nextStep();
                },
                className: `flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-smooth hover:border-primary hover:bg-primary/5 ${bookingData.department === dept.id ? "border-primary bg-primary/5" : "border-border"}`,
                "data-ocid": `dept-${dept.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: dept.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: dept.desc })
                  ] })
                ]
              },
              dept.id
            );
          }) })
        ] }),
        currentStep === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-2", children: "Choose Doctor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-6", children: [
            "Available specialists for ",
            bookingData.department
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
            (bookingData.department ? DOCTORS_DATA.filter(
              (d) => {
                var _a;
                return d.speciality.toLowerCase().includes(
                  ((_a = bookingData.department) == null ? void 0 : _a.split(" ")[0].toLowerCase()) ?? ""
                ) || bookingData.department === "Preventive Health";
              }
            ) : DOCTORS_DATA).map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  updateBooking({ doctorId: doc.id });
                  nextStep();
                },
                className: `flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-smooth hover:border-primary hover:bg-primary/5 ${bookingData.doctorId === doc.id ? "border-primary bg-primary/5" : "border-border"}`,
                "data-ocid": `doctor-${doc.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-muted-foreground", children: doc.name.split(" ")[1][0] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: doc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: doc.qualification }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      doc.experience,
                      " years experience"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-amber-600", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-current" }),
                        doc.rating
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: formatCurrency(doc.consultationFee) })
                    ] })
                  ] })
                ]
              },
              doc.id
            )),
            DOCTORS_DATA.filter(
              (d) => {
                var _a;
                return bookingData.department ? d.speciality.toLowerCase().includes(
                  ((_a = bookingData.department) == null ? void 0 : _a.split(" ")[0].toLowerCase()) ?? ""
                ) : true;
              }
            ).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Showing all available doctors for this department." }),
              DOCTORS_DATA.slice(0, 2).map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    updateBooking({ doctorId: doc.id });
                    nextStep();
                  },
                  className: "flex items-center gap-4 p-4 rounded-xl border-2 border-border text-left transition-smooth hover:border-primary w-full mt-3",
                  "data-ocid": `doctor-fallback-${doc.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: doc.name })
                },
                doc.id
              ))
            ] })
          ] })
        ] }),
        currentStep === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-2", children: "Pick Date & Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Select your preferred appointment slot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold mb-3 block", children: "Select Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto pb-2", children: next14.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => updateBooking({ date: d.value }),
                className: `flex flex-col items-center p-3 rounded-xl border-2 min-w-[56px] transition-smooth flex-shrink-0 ${bookingData.date === d.value ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`,
                "data-ocid": `date-${d.value}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium", children: d.day }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold leading-tight", children: d.label.split(" ")[0] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: d.label.split(" ")[1] })
                ]
              },
              d.value
            )) })
          ] }),
          bookingData.date && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
            {
              period: "Morning",
              slots: timeSlots.morning,
              icon: "🌅"
            },
            {
              period: "Afternoon",
              slots: timeSlots.afternoon,
              icon: "☀️"
            },
            {
              period: "Evening",
              slots: timeSlots.evening,
              icon: "🌆"
            }
          ].map(({ period, slots, icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-muted-foreground mb-2", children: [
              icon,
              " ",
              period
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 gap-2", children: slots.map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => updateBooking({ timeSlot: slot }),
                className: `p-2.5 text-sm rounded-lg border-2 font-medium transition-smooth ${bookingData.timeSlot === slot ? "bg-primary border-primary text-primary-foreground" : "border-border hover:border-primary hover:bg-primary/5"}`,
                "data-ocid": `slot-${slot}`,
                children: formatTime(slot)
              },
              slot
            )) })
          ] }, period)) })
        ] }),
        currentStep === 6 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-2", children: "Confirm Booking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Review your appointment details and confirm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-5 mb-5 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3", children: "Appointment Summary" }),
            [
              { label: "Location", value: bookingData.locationId },
              { label: "Hospital", value: selectedHospital == null ? void 0 : selectedHospital.name },
              { label: "Department", value: bookingData.department },
              { label: "Doctor", value: selectedDoctor == null ? void 0 : selectedDoctor.name },
              {
                label: "Date",
                value: bookingData.date ? formatDate(bookingData.date) : ""
              },
              {
                label: "Time",
                value: bookingData.timeSlot ? formatTime(bookingData.timeSlot) : ""
              },
              {
                label: "Consultation Fee",
                value: selectedDoctor ? formatCurrency(selectedDoctor.consultationFee) : ""
              }
            ].map(
              ({ label, value }) => value && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex justify-between text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: value })
                  ]
                },
                label
              )
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider", children: "Patient Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "patient-name", children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "patient-name",
                    value: patientName,
                    onChange: (e) => setPatientName(e.target.value),
                    placeholder: "Your full name",
                    className: "mt-1",
                    "data-ocid": "patient-name-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "patient-phone", children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "patient-phone",
                    value: patientPhone,
                    onChange: (e) => setPatientPhone(e.target.value),
                    placeholder: "+91 XXXXX XXXXX",
                    className: "mt-1",
                    "data-ocid": "patient-phone-input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "reason", children: "Reason for Visit (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "reason",
                  value: reason,
                  onChange: (e) => setReason(e.target.value),
                  placeholder: "Briefly describe your symptoms or reason for visit",
                  className: "mt-1 resize-none",
                  rows: 3,
                  "data-ocid": "reason-input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full btn-accent font-semibold text-base py-3 h-auto",
              onClick: handleConfirm,
              disabled: createAppointment.isPending || !patientName || !patientPhone,
              "data-ocid": "confirm-booking-btn",
              type: "button",
              children: createAppointment.isPending ? "Confirming..." : "Confirm Appointment"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-8 pt-6 border-t border-border", children: [
          currentStep > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: prevStep,
              className: "flex-1",
              type: "button",
              "data-ocid": "prev-step-btn",
              children: "Back"
            }
          ),
          currentStep === 5 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: nextStep,
              className: "flex-1 btn-primary",
              disabled: !bookingData.date || !bookingData.timeSlot,
              type: "button",
              "data-ocid": "next-step-btn",
              children: "Continue"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-6", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary hover:underline", children: "Sign in" }),
        " ",
        "to pre-fill your details."
      ] })
    ] })
  ] });
}
export {
  BookAppointmentPage as default
};
