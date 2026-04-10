import { a6 as useAuth, r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, d as Button, ad as LogOut, i as Calendar, C as Clock, S as Skeleton, a7 as formatTime, k as formatDate, l as ue, U as User } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { I as Input } from "./input-Dm-38PBp.js";
import { L as Label } from "./label-BrDcTsSh.js";
import { T as Textarea } from "./textarea-CaUyXWKd.js";
import { d as useDoctorAppointments } from "./useAppointments-D6lDZfpp.js";
import { D as DOCTORS_DATA } from "./api-lGWS4sD5.js";
import { A as Activity } from "./activity-AwxZNxjX.js";
import { U as Users } from "./users-BHLa9Wrx.js";
import { U as Upload } from "./upload-CFGyrrpC.js";
import { F as FileText } from "./file-text-CygTiwws.js";
import { S as Settings } from "./settings-W2Pt7F91.js";
import { C as CircleCheckBig } from "./circle-check-big-CMno_QKW.js";
import { V as Video } from "./video-DiewFp4b.js";
import "./useQuery-DXu_4EU2.js";
const ALL_APPOINTMENTS_TODAY = [
  {
    id: "t1",
    patientName: "Prachi Desai",
    time: "09:30",
    dept: "Obstetrics & Gynecology",
    status: "confirmed",
    reason: "Regular prenatal checkup"
  },
  {
    id: "t2",
    patientName: "Meera Kulkarni",
    time: "10:00",
    dept: "Obstetrics & Gynecology",
    status: "confirmed",
    reason: "First trimester scan review"
  },
  {
    id: "t3",
    patientName: "Sunita Patil",
    time: "11:00",
    dept: "IVF & Fertility",
    status: "pending",
    reason: "IVF pre-consultation"
  },
  {
    id: "t4",
    patientName: "Rekha Sharma",
    time: "14:00",
    dept: "Obstetrics & Gynecology",
    status: "confirmed",
    reason: "Postpartum followup"
  },
  {
    id: "t5",
    patientName: "Ananya Joshi",
    time: "15:30",
    dept: "Maternal-Fetal Medicine",
    status: "pending",
    reason: "Anomaly scan discussion"
  }
];
const ALL_PATIENTS = [
  {
    id: "p1",
    name: "Prachi Desai",
    phone: "+91 98765 11111",
    lastVisit: "2026-04-08",
    totalVisits: 4
  },
  {
    id: "p2",
    name: "Meera Kulkarni",
    phone: "+91 98765 22222",
    lastVisit: "2026-04-05",
    totalVisits: 2
  },
  {
    id: "p3",
    name: "Sunita Patil",
    phone: "+91 98765 33333",
    lastVisit: "2026-03-28",
    totalVisits: 6
  },
  {
    id: "p4",
    name: "Rekha Sharma",
    phone: "+91 98765 44444",
    lastVisit: "2026-03-20",
    totalVisits: 3
  },
  {
    id: "p5",
    name: "Ananya Joshi",
    phone: "+91 98765 55555",
    lastVisit: "2026-03-10",
    totalVisits: 1
  },
  {
    id: "p6",
    name: "Kavita Deshmukh",
    phone: "+91 98765 66666",
    lastVisit: "2026-02-28",
    totalVisits: 8
  }
];
const PRESCRIPTION_HISTORY = [
  {
    id: "rx1",
    patient: "Prachi Desai",
    date: "2026-04-08",
    fileName: "rx_prachi_08apr.pdf",
    notes: "Prenatal vitamins & iron"
  },
  {
    id: "rx2",
    patient: "Meera Kulkarni",
    date: "2026-04-05",
    fileName: "rx_meera_05apr.pdf",
    notes: "Progesterone support"
  },
  {
    id: "rx3",
    patient: "Sunita Patil",
    date: "2026-03-28",
    fileName: "rx_sunita_28mar.pdf",
    notes: "PCOS management protocol"
  }
];
function StatusBadge({ status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Badge,
    {
      variant: status === "confirmed" ? "default" : status === "completed" ? "secondary" : "outline",
      className: "capitalize text-xs",
      children: status
    }
  );
}
function DoctorDashboard() {
  var _a, _b, _c;
  const { user, logout } = useAuth();
  const { isLoading } = useDoctorAppointments("d1");
  const [activeTab, setActiveTab] = reactExports.useState("today");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [completedIds, setCompletedIds] = reactExports.useState(/* @__PURE__ */ new Set());
  const [selectedPatient, setSelectedPatient] = reactExports.useState("");
  const [rxNotes, setRxNotes] = reactExports.useState("");
  const [rxDate, setRxDate] = reactExports.useState("");
  const [profileForm, setProfileForm] = reactExports.useState({
    qualifications: "MD, DGO, FRCOG",
    experience: "18 years",
    bio: "Specialist in high-risk pregnancies and minimally invasive surgeries.",
    availableHours: "Mon, Wed, Fri: 9AM–5PM",
    hospital: "GyneCare Hospital — Pune Main"
  });
  const completedToday = completedIds.size;
  const pendingCount = ALL_APPOINTMENTS_TODAY.filter(
    (a) => a.status === "pending"
  ).length;
  const doctorInfo = DOCTORS_DATA.find((d) => d.id === "d1") ?? DOCTORS_DATA[0];
  const NAV_ITEMS = [
    { id: "today", label: "Today's Appointments", icon: Calendar },
    { id: "patients", label: "Patient List", icon: Users },
    { id: "upload-prescription", label: "Upload Prescription", icon: Upload },
    { id: "rx-history", label: "Prescription History", icon: FileText },
    { id: "profile", label: "My Profile", icon: Settings }
  ];
  const handleMarkComplete = (id) => {
    setCompletedIds((prev) => /* @__PURE__ */ new Set([...prev, id]));
    ue.success("Appointment marked as complete");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { hideFooter: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-4 py-4 sticky top-0 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "lg:hidden h-9 w-9 rounded-lg border border-border flex items-center justify-center",
            onClick: () => setSidebarOpen(!sidebarOpen),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary text-xs", children: "Doctor Portal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-lg font-bold font-display text-foreground mt-0.5", children: [
            "Dr. ",
            ((_a = user == null ? void 0 : user.name) == null ? void 0 : _a.split(" ").slice(1).join(" ")) ?? "Doctor"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: logout,
          className: "gap-1.5",
          type: "button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Sign Out" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "aside",
        {
          className: `${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:sticky top-16 z-20 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border overflow-y-auto transition-transform duration-200 flex-shrink-0`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-muted/40 rounded-xl mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0", children: ((_b = user == null ? void 0 : user.name) == null ? void 0 : _b[0]) ?? "D" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: (user == null ? void 0 : user.name) ?? doctorInfo.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: doctorInfo.speciality })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5", children: [
              { label: "Today", value: ALL_APPOINTMENTS_TODAY.length },
              { label: "Done", value: completedToday },
              { label: "Pending", value: pendingCount }
            ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center bg-muted/30 rounded-lg p-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: label })
                ]
              },
              label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: NAV_ITEMS.map(({ id, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setActiveTab(id);
                  setSidebarOpen(false);
                },
                className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth text-left ${activeTab === id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted/50"}`,
                "data-ocid": `tab-${id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: label })
                ]
              },
              id
            )) })
          ] })
        }
      ),
      sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 z-10 bg-foreground/20 lg:hidden",
          onClick: () => setSidebarOpen(false),
          role: "button",
          tabIndex: -1,
          onKeyDown: (e) => e.key === "Escape" && setSidebarOpen(false),
          "aria-label": "Close sidebar"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-y-auto bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-6 max-w-4xl", children: [
        activeTab === "today" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Today's Appointments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
              ALL_APPOINTMENTS_TODAY.length,
              " scheduled"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
            {
              icon: Calendar,
              label: "Total Today",
              value: ALL_APPOINTMENTS_TODAY.length,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              icon: CircleCheckBig,
              label: "Completed",
              value: completedToday,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              icon: Clock,
              label: "Pending",
              value: pendingCount,
              color: "text-accent",
              bg: "bg-accent/10"
            },
            {
              icon: Users,
              label: "Total Patients",
              value: ALL_PATIENTS.length,
              color: "text-accent",
              bg: "bg-accent/10"
            }
          ].map(({ icon: Icon, label, value, color, bg }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-9 w-9 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${color}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: label })
            ] })
          ] }) }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            ALL_APPOINTMENTS_TODAY.map((apt) => {
              const isDone = completedIds.has(apt.id);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `p-4 rounded-xl border transition-smooth ${isDone ? "border-border bg-muted/20 opacity-60" : "border-border hover:border-primary/30 hover:bg-primary/2"}`,
                  "data-ocid": "today-appointment-row",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: apt.patientName }),
                        isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary text-xs", children: "Completed" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: apt.status })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: apt.dept }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-primary font-medium mt-1 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                        formatTime(apt.time),
                        " ·",
                        " ",
                        formatDate(
                          (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
                        )
                      ] }),
                      apt.reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                        '"',
                        apt.reason,
                        '"'
                      ] })
                    ] }),
                    !isDone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 flex-shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          className: "btn-primary gap-1 text-xs",
                          type: "button",
                          onClick: () => handleMarkComplete(apt.id),
                          "data-ocid": "mark-complete-btn",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3 w-3" }),
                            " Mark Done"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "gap-1 text-xs border-accent text-accent hover:bg-accent/5",
                          type: "button",
                          "data-ocid": "start-teleconsult-btn",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "h-3 w-3" }),
                            " Teleconsult"
                          ]
                        }
                      )
                    ] })
                  ] })
                },
                apt.id
              );
            }),
            ALL_APPOINTMENTS_TODAY.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-center py-10 text-muted-foreground",
                "data-ocid": "no-doctor-appointments",
                children: "No appointments scheduled for today"
              }
            )
          ] }) }) })
        ] }),
        activeTab === "patients" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Patient List" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
              ALL_PATIENTS.length,
              " patients"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Last Visit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Visits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ALL_PATIENTS.map((pat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border hover:bg-muted/20 transition-colors",
                "data-ocid": "patient-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: pat.name[0] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: pat.name })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: pat.phone }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: formatDate(pat.lastVisit) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold text-foreground", children: pat.totalVisits }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "text-xs",
                      type: "button",
                      "data-ocid": "view-history-btn",
                      children: "View History"
                    }
                  ) })
                ]
              },
              pat.id
            )) })
          ] }) }) }) })
        ] }),
        activeTab === "upload-prescription" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Upload Prescription" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rx-patient", children: "Select Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "rx-patient",
                  value: selectedPatient,
                  onChange: (e) => setSelectedPatient(e.target.value),
                  className: "mt-1 w-full h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary",
                  "data-ocid": "rx-patient-select",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Select patient --" }),
                    ALL_PATIENTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name }, p.id))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rx-date", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "rx-date",
                  type: "date",
                  value: rxDate,
                  onChange: (e) => setRxDate(e.target.value),
                  className: "mt-1",
                  "data-ocid": "rx-date-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rx-notes", children: "Prescription Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "rx-notes",
                  value: rxNotes,
                  onChange: (e) => setRxNotes(e.target.value),
                  rows: 4,
                  placeholder: "Enter prescription details, medications, dosage...",
                  className: "mt-1 resize-none",
                  "data-ocid": "rx-notes-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Upload File" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "mt-1 w-full border-2 border-dashed border-input rounded-xl p-8 text-center cursor-pointer hover:border-primary transition-smooth hover:bg-primary/5",
                  "data-ocid": "rx-file-upload",
                  onClick: () => ue.info("File picker would open here"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 text-muted-foreground mx-auto mb-2 opacity-50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Click to upload prescription" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PDF, JPG, PNG up to 10MB" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "btn-primary gap-2 w-full sm:w-auto",
                type: "button",
                onClick: () => {
                  if (!selectedPatient || !rxDate) {
                    ue.error("Please select a patient and date");
                    return;
                  }
                  ue.success("Prescription uploaded successfully");
                  setSelectedPatient("");
                  setRxNotes("");
                  setRxDate("");
                },
                "data-ocid": "upload-rx-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
                  "Upload Prescription"
                ]
              }
            )
          ] }) }) })
        ] }),
        activeTab === "rx-history" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Prescription History" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "File" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: PRESCRIPTION_HISTORY.map((rx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border hover:bg-muted/20 transition-colors",
                "data-ocid": "rx-history-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: rx.patient }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: formatDate(rx.date) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs", children: rx.fileName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs max-w-[180px] truncate", children: rx.notes }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "text-xs",
                        type: "button",
                        "data-ocid": "download-rx-btn",
                        children: "Download"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "destructive",
                        className: "text-xs",
                        type: "button",
                        "data-ocid": "delete-rx-btn",
                        onClick: () => ue.success("Prescription deleted"),
                        children: "Delete"
                      }
                    )
                  ] }) })
                ]
              },
              rx.id
            )) })
          ] }) }) }) })
        ] }),
        activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "My Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6 pb-6 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold flex-shrink-0", children: ((_c = doctorInfo.name.split(" ")[1]) == null ? void 0 : _c[0]) ?? "D" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-lg font-display", children: (user == null ? void 0 : user.name) ?? doctorInfo.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary mt-1", children: "Doctor" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dr-qualifications", children: "Qualifications" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "dr-qualifications",
                    value: profileForm.qualifications,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      qualifications: e.target.value
                    })),
                    className: "mt-1",
                    "data-ocid": "dr-qualifications-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dr-experience", children: "Experience" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "dr-experience",
                    value: profileForm.experience,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      experience: e.target.value
                    })),
                    className: "mt-1",
                    "data-ocid": "dr-experience-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dr-hospital", children: "Hospital" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "dr-hospital",
                    value: profileForm.hospital,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      hospital: e.target.value
                    })),
                    className: "mt-1",
                    "data-ocid": "dr-hospital-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dr-hours", children: "Available Hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "dr-hours",
                    value: profileForm.availableHours,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      availableHours: e.target.value
                    })),
                    className: "mt-1",
                    "data-ocid": "dr-hours-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dr-bio", children: "Bio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "dr-bio",
                    value: profileForm.bio,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      bio: e.target.value
                    })),
                    rows: 3,
                    className: "mt-1 resize-none",
                    "data-ocid": "dr-bio-input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6 pt-5 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "btn-primary",
                  type: "button",
                  onClick: () => ue.success("Profile updated!"),
                  "data-ocid": "save-dr-profile-btn",
                  children: "Save Changes"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", type: "button", children: "Cancel" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-primary" }),
              "Account"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-muted/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary", children: "Doctor" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-muted/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Speciality" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: doctorInfo.speciality })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "destructive",
                size: "sm",
                className: "mt-4 gap-1.5",
                type: "button",
                onClick: logout,
                "data-ocid": "dr-signout-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-3.5 w-3.5" }),
                  "Sign Out"
                ]
              }
            )
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  DoctorDashboard as default
};
