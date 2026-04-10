import { c as createLucideIcon, a6 as useAuth, r as reactExports, ab as calculatePregnancyWeek, ac as calculateDueDate, j as jsxRuntimeExports, L as Layout, B as Badge, b as Link, d as Button, ad as LogOut, i as Calendar, H as Heart, S as Skeleton, k as formatDate, a7 as formatTime, h as formatCurrency, C as Clock, l as ue, U as User } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { I as Input } from "./input-Dm-38PBp.js";
import { L as Label } from "./label-BrDcTsSh.js";
import { b as useAppointments, c as useCancelAppointment } from "./useAppointments-D6lDZfpp.js";
import { A as Activity } from "./activity-AwxZNxjX.js";
import { P as Plus } from "./plus-lJ61tdt2.js";
import { B as Baby } from "./baby-aRLHEA_q.js";
import { F as FileText } from "./file-text-CygTiwws.js";
import { S as Settings } from "./settings-W2Pt7F91.js";
import "./api-lGWS4sD5.js";
import "./useQuery-DXu_4EU2.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
const LMP_DATE = "2025-12-01";
const PREGNANCY_MILESTONES = [
  {
    week: 4,
    title: "Implantation",
    desc: "Embryo implants in the uterine wall",
    trimester: 1
  },
  {
    week: 8,
    title: "Heartbeat Detected",
    desc: "Baby's heart starts beating regularly",
    trimester: 1
  },
  {
    week: 12,
    title: "First Trimester Complete",
    desc: "Fingers, toes, and facial features formed",
    trimester: 1
  },
  {
    week: 16,
    title: "Gender Visible",
    desc: "Baby's gender may be visible on ultrasound",
    trimester: 2
  },
  {
    week: 20,
    title: "Halfway There",
    desc: "Baby can now hear sounds and move actively",
    trimester: 2
  },
  {
    week: 24,
    title: "Viability Milestone",
    desc: "Baby could survive with medical support if born now",
    trimester: 2
  },
  {
    week: 28,
    title: "Third Trimester",
    desc: "Baby opens its eyes and brain develops rapidly",
    trimester: 3
  },
  {
    week: 36,
    title: "Almost Full-Term",
    desc: "Baby is nearly ready for birth",
    trimester: 3
  },
  { week: 40, title: "Due Date", desc: "Expected delivery date", trimester: 3 }
];
const MENSTRUAL_CYCLES = [
  {
    id: "mc1",
    startDate: "2026-03-01",
    endDate: "2026-03-05",
    cycleLength: 28,
    flow: "medium",
    symptoms: ["Cramps", "Bloating", "Mood swings"]
  },
  {
    id: "mc2",
    startDate: "2026-02-01",
    endDate: "2026-02-06",
    cycleLength: 29,
    flow: "heavy",
    symptoms: ["Cramps", "Fatigue"]
  },
  {
    id: "mc3",
    startDate: "2026-01-04",
    endDate: "2026-01-08",
    cycleLength: 28,
    flow: "light",
    symptoms: ["Spotting"]
  }
];
const MEDICAL_RECORDS = [
  {
    id: "r1",
    date: "2026-04-01",
    type: "Scan",
    title: "Anomaly Scan Report",
    doctor: "Dr. Meera Joshi",
    hospital: "GyneCare Pune Main"
  },
  {
    id: "r2",
    date: "2026-03-20",
    type: "Blood Report",
    title: "Complete Blood Count",
    doctor: "Lab Technician",
    hospital: "GyneCare Pune Main"
  },
  {
    id: "r3",
    date: "2026-03-01",
    type: "Prescription",
    title: "Prenatal Vitamins Rx",
    doctor: "Dr. Priya Sharma",
    hospital: "GyneCare Pune Main"
  },
  {
    id: "r4",
    date: "2026-02-15",
    type: "Report",
    title: "NT Scan + NIPT Report",
    doctor: "Dr. Meera Joshi",
    hospital: "GyneCare Pune Main"
  }
];
const NOTIFICATIONS = [
  {
    id: "n1",
    type: "appointment",
    title: "Appointment Reminder",
    message: "Your appointment with Dr. Priya Sharma is tomorrow at 10:00 AM.",
    time: "2 hours ago",
    read: false
  },
  {
    id: "n2",
    type: "report",
    title: "Lab Report Ready",
    message: "Your Complete Blood Count report is ready for download.",
    time: "1 day ago",
    read: false
  },
  {
    id: "n3",
    type: "reminder",
    title: "Prenatal Vitamin Reminder",
    message: "Don't forget to take your prenatal vitamins today.",
    time: "2 days ago",
    read: true
  },
  {
    id: "n4",
    type: "general",
    title: "Health Tip",
    message: "Stay hydrated — drink at least 8-10 glasses of water during pregnancy.",
    time: "3 days ago",
    read: true
  }
];
const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: Activity },
  { id: "appointments", label: "My Appointments", icon: Calendar },
  { id: "pregnancy", label: "Pregnancy Tracker", icon: Baby },
  { id: "menstrual", label: "Menstrual Tracker", icon: Heart },
  { id: "records", label: "Medical Records", icon: FileText },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "profile", label: "Profile Settings", icon: Settings }
];
function PatientDashboard() {
  var _a, _b, _c;
  const { user, logout } = useAuth();
  const { data: appointments = [], isLoading } = useAppointments(user == null ? void 0 : user.id);
  const cancelAppointment = useCancelAppointment();
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [profileForm, setProfileForm] = reactExports.useState({
    name: (user == null ? void 0 : user.name) ?? "",
    phone: (user == null ? void 0 : user.phone) ?? "",
    email: (user == null ? void 0 : user.email) ?? "",
    abhaId: ""
  });
  const upcoming = appointments.filter(
    (a) => a.status !== "cancelled" && a.status !== "completed"
  );
  const currentWeek = calculatePregnancyWeek(LMP_DATE);
  const dueDate = calculateDueDate(LMP_DATE);
  const unreadCount = NOTIFICATIONS.filter((n) => !n.read).length;
  const handleCancel = async (id) => {
    await cancelAppointment.mutateAsync(id);
    ue.success("Appointment cancelled");
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary text-xs", children: "Patient Portal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-lg font-bold font-display text-foreground mt-0.5", children: [
            "Welcome, ",
            ((_a = user == null ? void 0 : user.name) == null ? void 0 : _a.split(" ")[0]) ?? "Patient"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "btn-accent gap-1.5 hidden sm:flex",
            type: "button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
              "Book Appointment"
            ]
          }
        ) }),
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
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "aside",
        {
          className: `${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:sticky top-16 z-20 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border overflow-y-auto transition-transform duration-200 flex-shrink-0`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-muted/40 rounded-xl mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0", children: ((_b = user == null ? void 0 : user.name) == null ? void 0 : _b[0]) ?? "P" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: (user == null ? void 0 : user.name) ?? "Patient" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: (user == null ? void 0 : user.email) ?? "patient@email.com" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: NAV_ITEMS.map(({ id, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setActiveTab(id);
                  setSidebarOpen(false);
                },
                className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth text-left relative ${activeTab === id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted/50"}`,
                "data-ocid": `tab-${id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 flex-shrink-0" }),
                  label,
                  id === "notifications" && unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto h-5 w-5 bg-accent text-accent-foreground rounded-full text-[10px] font-bold flex items-center justify-center", children: unreadCount })
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
        activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Dashboard Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            {
              label: "Upcoming Visits",
              value: upcoming.length,
              icon: Calendar,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              label: "Pregnancy Week",
              value: currentWeek,
              icon: Baby,
              color: "text-accent",
              bg: "bg-accent/10"
            },
            {
              label: "Lab Reports",
              value: MEDICAL_RECORDS.length,
              icon: FileText,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              label: "Notifications",
              value: unreadCount,
              icon: Bell,
              color: "text-accent",
              bg: "bg-accent/10"
            }
          ].map(({ label, value, icon: Icon, color, bg }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-9 w-9 rounded-lg ${bg} flex items-center justify-center`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4.5 w-4.5 ${color}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label })
          ] }) }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold font-display flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-primary" }),
                "Upcoming Appointments"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveTab("appointments"),
                  className: "text-xs text-primary hover:underline",
                  children: "View All"
                }
              )
            ] }),
            isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 rounded-lg" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 rounded-lg" })
            ] }) : upcoming.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-8",
                "data-ocid": "no-appointments",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-10 w-10 text-muted-foreground mx-auto mb-2 opacity-30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: "No upcoming appointments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "btn-primary",
                      type: "button",
                      children: "Book Now"
                    }
                  ) })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: upcoming.slice(0, 3).map((apt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between p-3 bg-muted/30 rounded-lg",
                "data-ocid": "appointment-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: apt.doctorName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: apt.department }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary font-medium", children: [
                      formatDate(apt.date),
                      " at",
                      " ",
                      formatTime(apt.timeSlot)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: apt.status === "confirmed" ? "default" : "secondary",
                      className: "ml-3 capitalize",
                      children: apt.status
                    }
                  )
                ]
              },
              apt.id
            )) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated border-l-4 border-l-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold font-display flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-4 w-4 text-accent" }),
                "Pregnancy Tracker"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveTab("pregnancy"),
                  className: "text-xs text-primary hover:underline",
                  children: "Full Tracker"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-20 w-20 rounded-full bg-accent/10 flex flex-col items-center justify-center flex-shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-accent", children: currentWeek }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "weeks" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                  "Due Date:",
                  " ",
                  dueDate.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                  40 - currentWeek,
                  " weeks remaining"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 bg-border rounded-full h-2 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "bg-gradient-to-r from-primary to-accent h-2 rounded-full",
                    style: { width: `${currentWeek / 40 * 100}%` }
                  }
                ) })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3", children: "Quick Actions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: [
              {
                icon: Calendar,
                label: "Book Appointment",
                href: "/book-appointment",
                external: true
              },
              {
                icon: FileText,
                label: "Lab Reports",
                href: "/labs",
                external: true
              },
              {
                icon: Heart,
                label: "Health Packages",
                href: "/health-packages",
                external: true
              },
              {
                icon: Activity,
                label: "Find Doctors",
                href: "/find-doctor",
                external: true
              },
              {
                icon: Bell,
                label: "Teleconsult",
                href: "/teleconsultation",
                external: true
              },
              {
                icon: Baby,
                label: "Pregnancy Tracker",
                action: "pregnancy"
              }
            ].map(
              ({ icon: Icon, label, href, action }) => href ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "w-full flex flex-col items-center gap-2 p-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 text-xs font-medium transition-smooth",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
                    label
                  ]
                }
              ) }, label) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveTab(action),
                  className: "flex flex-col items-center gap-2 p-3 rounded-xl border border-border hover:border-accent hover:bg-accent/5 text-xs font-medium transition-smooth",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-accent" }),
                    label
                  ]
                },
                label
              )
            ) })
          ] }) })
        ] }),
        activeTab === "appointments" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "My Appointments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "btn-primary gap-1.5",
                type: "button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                  "Book New"
                ]
              }
            ) })
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }, i)) }) : appointments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            CardContent,
            {
              className: "p-10 text-center",
              "data-ocid": "no-appointments-full",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-14 w-14 text-muted-foreground mx-auto mb-4 opacity-30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: "No appointments yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Book your first appointment with our specialists" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-accent", type: "button", children: "Book Appointment" }) })
              ]
            }
          ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: appointments.map((apt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "card-elevated",
              "data-ocid": "appointment-full-row",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: apt.doctorName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: apt.status === "confirmed" ? "default" : apt.status === "completed" ? "secondary" : apt.status === "cancelled" ? "destructive" : "outline",
                          className: "capitalize text-xs",
                          children: apt.status
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                      apt.department,
                      " • ",
                      apt.hospitalName
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-primary font-medium mt-1", children: [
                      formatDate(apt.date),
                      " at",
                      " ",
                      formatTime(apt.timeSlot)
                    ] }),
                    apt.reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                      "Reason: ",
                      apt.reason
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right flex-shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: formatCurrency(apt.amount) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: apt.paymentStatus === "paid" ? "default" : "secondary",
                        className: "text-[10px] mt-1",
                        children: apt.paymentStatus
                      }
                    )
                  ] })
                ] }),
                apt.status !== "cancelled" && apt.status !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3 pt-3 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "text-xs flex-1",
                      type: "button",
                      children: "Reschedule"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "destructive",
                      className: "text-xs flex-1",
                      type: "button",
                      onClick: () => handleCancel(apt.id),
                      children: "Cancel"
                    }
                  )
                ] })
              ] })
            },
            apt.id
          )) })
        ] }),
        activeTab === "pregnancy" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Pregnancy Tracker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated bg-gradient-to-br from-accent/5 to-primary/5 border-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-28 w-28 rounded-full bg-accent/10 border-4 border-accent/30 flex flex-col items-center justify-center flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-bold text-accent", children: currentWeek }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: "WEEKS" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold font-display text-foreground", children: [
                "Week ",
                currentWeek,
                " of 40"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Baby is the size of an ear of corn" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                "Due:",
                " ",
                dueDate.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 w-64 bg-border rounded-full h-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-smooth",
                  style: { width: `${currentWeek / 40 * 100}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1.5", children: [
                40 - currentWeek,
                " weeks to go •",
                " ",
                currentWeek <= 12 ? "1st Trimester" : currentWeek <= 28 ? "2nd Trimester" : "3rd Trimester"
              ] })
            ] })
          ] }) }) }),
          [1, 2, 3].map((trimester) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold font-display mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { className: "h-4 w-4 text-accent" }),
              trimester === 1 ? "1st Trimester (Weeks 1–12)" : trimester === 2 ? "2nd Trimester (Weeks 13–28)" : "3rd Trimester (Weeks 29–40)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: PREGNANCY_MILESTONES.filter(
              (m) => m.trimester === trimester
            ).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `p-3 rounded-lg border transition-smooth ${m.week <= currentWeek ? "border-primary/30 bg-primary/5" : "border-border bg-muted/20 opacity-60"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    m.week <= currentWeek ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-primary-foreground font-bold", children: "✓" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 border-2 border-border rounded-full flex-shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-muted-foreground", children: [
                      "Week ",
                      m.week
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: m.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: m.desc })
                ]
              },
              m.week
            )) })
          ] }) }, trimester)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 text-primary" }),
              "Add Week Note"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  className: "w-full border border-input rounded-lg px-3 py-2 text-sm bg-background resize-none focus:ring-2 focus:ring-primary outline-none",
                  rows: 3,
                  placeholder: "How are you feeling this week? Any symptoms or notes...",
                  "data-ocid": "pregnancy-note-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "btn-primary",
                  type: "button",
                  "data-ocid": "add-pregnancy-note-btn",
                  children: "Save Note"
                }
              )
            ] })
          ] }) })
        ] }),
        activeTab === "menstrual" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Menstrual Cycle Tracker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated border-l-4 border-l-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: "Next Period" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: "Apr 29, 2026" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "In 19 days" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: "Fertile Window" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-accent", children: "Apr 14–18" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "5 days" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: "Avg Cycle Length" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-primary", children: "28 days" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Regular" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display mb-4", children: "Cycle History" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MENSTRUAL_CYCLES.map((cycle) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-4 bg-muted/30 rounded-xl",
                "data-ocid": "cycle-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm text-foreground", children: [
                        formatDate(cycle.startDate),
                        " —",
                        " ",
                        cycle.endDate ? formatDate(cycle.endDate) : "Ongoing"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                        "Cycle: ",
                        cycle.cycleLength,
                        " days"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        variant: cycle.flow === "heavy" ? "destructive" : cycle.flow === "light" ? "secondary" : "default",
                        className: "capitalize text-xs",
                        children: [
                          cycle.flow,
                          " flow"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-2", children: cycle.symptoms.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full",
                      children: s
                    },
                    s
                  )) })
                ]
              },
              cycle.id
            )) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 text-primary" }),
              "Log New Cycle"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cycle-start", children: "Start Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "cycle-start",
                    type: "date",
                    className: "mt-1",
                    "data-ocid": "cycle-start-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cycle-end", children: "End Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "cycle-end",
                    type: "date",
                    className: "mt-1",
                    "data-ocid": "cycle-end-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "flow-level", children: "Flow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "flow-level",
                    className: "mt-1 w-full h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary",
                    "data-ocid": "flow-select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "light", children: "Light" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medium", children: "Medium" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "heavy", children: "Heavy" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "symptoms", children: "Symptoms" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "symptoms",
                    placeholder: "Cramps, Bloating...",
                    className: "mt-1",
                    "data-ocid": "symptoms-input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "btn-primary mt-4",
                type: "button",
                "data-ocid": "log-cycle-btn",
                children: "Log Cycle"
              }
            )
          ] }) })
        ] }),
        activeTab === "records" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Medical Records" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Report" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Doctor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: MEDICAL_RECORDS.map((rec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border hover:bg-muted/20 transition-colors",
                "data-ocid": "record-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: formatDate(rec.date) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: rec.type }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: rec.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs", children: rec.doctor }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "gap-1.5 text-xs",
                      type: "button",
                      "data-ocid": "download-btn",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
                        "Download"
                      ]
                    }
                  ) })
                ]
              },
              rec.id
            )) })
          ] }) }) }) })
        ] }),
        activeTab === "notifications" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Notifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: NOTIFICATIONS.map((notif) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: `card-elevated ${!notif.read ? "border-primary/30" : ""}`,
              "data-ocid": "notification-row",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0 ${!notif.read ? "bg-primary/10" : "bg-muted"}`,
                    children: [
                      notif.type === "appointment" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Calendar,
                        {
                          className: `h-4 w-4 ${!notif.read ? "text-primary" : "text-muted-foreground"}`
                        }
                      ),
                      notif.type === "report" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        FileText,
                        {
                          className: `h-4 w-4 ${!notif.read ? "text-primary" : "text-muted-foreground"}`
                        }
                      ),
                      notif.type === "reminder" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Clock,
                        {
                          className: `h-4 w-4 ${!notif.read ? "text-accent" : "text-muted-foreground"}`
                        }
                      ),
                      notif.type === "general" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Bell,
                        {
                          className: `h-4 w-4 ${!notif.read ? "text-accent" : "text-muted-foreground"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: notif.title }),
                    !notif.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 bg-accent rounded-full flex-shrink-0" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: notif.message }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: notif.time })
                ] })
              ] })
            },
            notif.id
          )) })
        ] }),
        activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Profile Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6 pb-6 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold", children: ((_c = user == null ? void 0 : user.name) == null ? void 0 : _c[0]) ?? "P" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-lg font-display", children: user == null ? void 0 : user.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary mt-1", children: "Patient" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profile-name", children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "profile-name",
                    value: profileForm.name,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      name: e.target.value
                    })),
                    className: "mt-1",
                    "data-ocid": "profile-name-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profile-phone", children: "Phone Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "profile-phone",
                    value: profileForm.phone,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      phone: e.target.value
                    })),
                    className: "mt-1",
                    "data-ocid": "profile-phone-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profile-email", children: "Email Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "profile-email",
                    type: "email",
                    value: profileForm.email,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      email: e.target.value
                    })),
                    className: "mt-1",
                    "data-ocid": "profile-email-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "profile-abha", children: "ABHA ID (optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "profile-abha",
                    value: profileForm.abhaId,
                    onChange: (e) => setProfileForm((f) => ({
                      ...f,
                      abhaId: e.target.value
                    })),
                    placeholder: "00-0000-0000-0000",
                    className: "mt-1",
                    "data-ocid": "profile-abha-input"
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
                  onClick: () => ue.success("Profile updated successfully!"),
                  "data-ocid": "save-profile-btn",
                  children: "Save Changes"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", type: "button", children: "Cancel" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-primary" }),
              "Account"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-muted/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: "Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary", children: "Patient" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-muted/30 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: "Member Since" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Jan 2026" })
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
                "data-ocid": "signout-btn",
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
  PatientDashboard as default
};
