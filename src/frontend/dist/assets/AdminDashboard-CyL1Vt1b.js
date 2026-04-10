import { c as createLucideIcon, a6 as useAuth, r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, d as Button, ae as LogOut, i as Calendar, h as formatCurrency, k as formatDate, a7 as formatTime, l as ue, X } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent } from "./card-e7giuW1n.js";
import { I as Input } from "./input-BSJwKJi-.js";
import { L as Label } from "./label-CzIsgjvI.js";
import { b as useAppointments } from "./useAppointments-CJxlYOVx.js";
import { D as DOCTORS_DATA, H as HOSPITALS_DATA, P as PACKAGES_DATA, B as BLOGS_DATA } from "./api-CYf9rHFU.js";
import { A as Activity } from "./activity-Cv5zgyPN.js";
import { U as Users } from "./users-B9A_VLy5.js";
import { B as Building2 } from "./building-2-DSAbzeR2.js";
import { F as FileText } from "./file-text-B2b2CgEt.js";
import { P as Plus } from "./plus-Ep48a-cA.js";
import "./useQuery-cq7-2WTq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
];
const SquarePen = createLucideIcon("square-pen", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const MOCK_USERS = [
  {
    id: "u1",
    name: "Prachi Desai",
    email: "prachi@email.com",
    phone: "+91 98765 11111",
    joined: "2026-01-15",
    active: true
  },
  {
    id: "u2",
    name: "Meera Kulkarni",
    email: "meera@email.com",
    phone: "+91 98765 22222",
    joined: "2026-02-01",
    active: true
  },
  {
    id: "u3",
    name: "Sunita Patil",
    email: "sunita@email.com",
    phone: "+91 98765 33333",
    joined: "2026-02-20",
    active: true
  },
  {
    id: "u4",
    name: "Rekha Sharma",
    email: "rekha@email.com",
    phone: "+91 98765 44444",
    joined: "2026-03-05",
    active: false
  },
  {
    id: "u5",
    name: "Ananya Joshi",
    email: "ananya@email.com",
    phone: "+91 98765 55555",
    joined: "2026-03-15",
    active: true
  }
];
const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: Activity },
  { id: "doctors", label: "Manage Doctors", icon: Users },
  { id: "hospitals", label: "Manage Hospitals", icon: Building2 },
  { id: "packages", label: "Manage Packages", icon: Package },
  { id: "blogs", label: "Manage Blogs", icon: FileText },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "users", label: "Users", icon: Users }
];
function TableActions({
  onEdit,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "gap-1 text-xs h-7 px-2",
        type: "button",
        onClick: onEdit,
        "data-ocid": "edit-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "h-3 w-3" }),
          " Edit"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "destructive",
        className: "gap-1 text-xs h-7 px-2",
        type: "button",
        onClick: onDelete,
        "data-ocid": "delete-btn",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }),
          " Delete"
        ]
      }
    )
  ] });
}
function SimpleModal({
  title,
  onClose,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-hospital-lg w-full max-w-lg max-h-[85vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "h-8 w-8 rounded-full hover:bg-muted flex items-center justify-center",
          "aria-label": "Close",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children })
  ] }) });
}
function AdminDashboard() {
  var _a;
  const { user, logout } = useAuth();
  const { data: appointments = [] } = useAppointments();
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [modal, setModal] = reactExports.useState({ type: null, mode: "add" });
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const totalRevenue = appointments.reduce((sum, a) => sum + a.amount, 0);
  const filteredAppointments = statusFilter === "all" ? appointments : appointments.filter((a) => a.status === statusFilter);
  const openModal = (type, mode = "add") => setModal({ type, mode });
  const closeModal = () => setModal({ type: null, mode: "add" });
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/15 text-accent text-xs", children: "Admin Panel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold font-display text-foreground mt-0.5", children: "Admin Dashboard" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0", children: ((_a = user == null ? void 0 : user.name) == null ? void 0 : _a[0]) ?? "A" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: (user == null ? void 0 : user.name) ?? "Admin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/15 text-accent text-[10px]", children: "Administrator" })
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
                className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth text-left ${activeTab === id ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted/50"}`,
                "data-ocid": `admin-tab-${id}`,
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-y-auto bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-6 max-w-5xl", children: [
        activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "System Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            {
              icon: Calendar,
              label: "Total Appointments",
              value: appointments.length,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              icon: Users,
              label: "Registered Patients",
              value: MOCK_USERS.length,
              color: "text-accent",
              bg: "bg-accent/10"
            },
            {
              icon: Activity,
              label: "Active Doctors",
              value: DOCTORS_DATA.length,
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              icon: TrendingUp,
              label: "Total Revenue",
              value: formatCurrency(totalRevenue),
              color: "text-accent",
              bg: "bg-accent/10"
            }
          ].map(({ icon: Icon, label, value, color, bg }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-9 w-9 rounded-lg ${bg} flex items-center justify-center`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 ${color}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label })
          ] }) }, label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold font-display mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-primary" }),
              "Recent Appointments"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-4 font-semibold text-muted-foreground", children: "Patient" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-4 font-semibold text-muted-foreground", children: "Doctor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-4 font-semibold text-muted-foreground", children: "Date & Time" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-4 font-semibold text-muted-foreground", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 font-semibold text-muted-foreground", children: "Amount" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: appointments.map((apt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border hover:bg-muted/20 transition-colors",
                  "data-ocid": "admin-appointment-row",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 font-medium text-foreground", children: apt.patientName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 text-muted-foreground", children: apt.doctorName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 pr-4 text-muted-foreground", children: [
                      formatDate(apt.date),
                      " ",
                      formatTime(apt.timeSlot)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: apt.status === "confirmed" ? "default" : apt.status === "cancelled" ? "destructive" : "secondary",
                        className: "capitalize text-xs",
                        children: apt.status
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right font-semibold text-foreground", children: formatCurrency(apt.amount) })
                  ]
                },
                apt.id
              )) })
            ] }) })
          ] }) })
        ] }),
        activeTab === "doctors" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Manage Doctors" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "btn-primary gap-1.5",
                type: "button",
                onClick: () => openModal("doctor"),
                "data-ocid": "add-doctor-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                  " Add Doctor"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Doctor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Speciality" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Hospital" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: DOCTORS_DATA.map((doc) => {
              var _a2;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border hover:bg-muted/20 transition-colors",
                  "data-ocid": "admin-doctor-row",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: (_a2 = doc.name.split(" ")[1]) == null ? void 0 : _a2[0] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: doc.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: doc.qualification })
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs", children: doc.speciality }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs max-w-[150px] truncate", children: doc.hospitalName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "default", className: "text-xs", children: "Active" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      TableActions,
                      {
                        onEdit: () => openModal("doctor", "edit"),
                        onDelete: () => ue.success("Doctor removed")
                      }
                    ) })
                  ]
                },
                doc.id
              );
            }) })
          ] }) }) }) })
        ] }),
        activeTab === "hospitals" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Manage Hospitals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "btn-primary gap-1.5",
                type: "button",
                onClick: () => openModal("hospital"),
                "data-ocid": "add-hospital-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                  " Add Hospital"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Hospital" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Doctors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: HOSPITALS_DATA.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border hover:bg-muted/20 transition-colors",
                "data-ocid": "admin-hospital-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: h.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: h.city }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: h.phone }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold text-foreground", children: h.doctorCount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableActions,
                    {
                      onEdit: () => openModal("hospital", "edit"),
                      onDelete: () => ue.success("Hospital removed")
                    }
                  ) })
                ]
              },
              h.id
            )) })
          ] }) }) }) })
        ] }),
        activeTab === "packages" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Manage Packages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "btn-primary gap-1.5",
                type: "button",
                onClick: () => openModal("package"),
                "data-ocid": "add-package-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                  " Add Package"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Package" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Tests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: PACKAGES_DATA.map((pkg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border hover:bg-muted/20 transition-colors",
                "data-ocid": "admin-package-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground max-w-[200px] truncate", children: pkg.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: pkg.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold text-foreground", children: formatCurrency(pkg.price) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-muted-foreground", children: pkg.testCount }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: pkg.popular ? "default" : "secondary",
                      className: "text-xs",
                      children: pkg.popular ? "Active" : "Standard"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableActions,
                    {
                      onEdit: () => openModal("package", "edit"),
                      onDelete: () => ue.success("Package removed")
                    }
                  ) })
                ]
              },
              pkg.id
            )) })
          ] }) }) }) })
        ] }),
        activeTab === "blogs" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Manage Blogs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "btn-primary gap-1.5",
                type: "button",
                onClick: () => openModal("blog"),
                "data-ocid": "add-blog-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                  " Add Blog"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Author" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: BLOGS_DATA.map((blog) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border hover:bg-muted/20 transition-colors",
                "data-ocid": "admin-blog-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground max-w-[220px] truncate", children: blog.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs", children: blog.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs", children: blog.author }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-smooth",
                      onClick: () => ue.success("Blog status toggled"),
                      "data-ocid": "toggle-publish-btn",
                      children: "Published"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TableActions,
                    {
                      onEdit: () => openModal("blog", "edit"),
                      onDelete: () => ue.success("Blog removed")
                    }
                  ) })
                ]
              },
              blog.id
            )) })
          ] }) }) }) })
        ] }),
        activeTab === "appointments" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "All Appointments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "status-filter",
                  className: "text-sm text-muted-foreground",
                  children: "Filter:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "status-filter",
                  value: statusFilter,
                  onChange: (e) => setStatusFilter(e.target.value),
                  className: "h-9 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary",
                  "data-ocid": "status-filter",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Statuses" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelled" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Patient" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Doctor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Update" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              filteredAppointments.map((apt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border hover:bg-muted/20 transition-colors",
                  "data-ocid": "appointments-table-row",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: apt.patientName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: apt.doctorName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-muted-foreground", children: [
                      formatDate(apt.date),
                      " ",
                      formatTime(apt.timeSlot)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: apt.status === "confirmed" ? "default" : apt.status === "cancelled" ? "destructive" : "secondary",
                        className: "capitalize text-xs",
                        children: apt.status
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right font-semibold", children: formatCurrency(apt.amount) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        className: "h-7 text-xs rounded border border-input bg-background px-2 outline-none focus:ring-1 focus:ring-primary",
                        defaultValue: apt.status,
                        onChange: () => ue.success("Status updated"),
                        "data-ocid": "status-update-select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmed" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelled" })
                        ]
                      }
                    ) })
                  ]
                },
                apt.id
              )),
              filteredAppointments.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  colSpan: 6,
                  className: "px-4 py-10 text-center text-muted-foreground",
                  children: "No appointments found for this filter"
                }
              ) })
            ] })
          ] }) }) }) })
        ] }),
        activeTab === "users" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground", children: "Patient Users" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
              MOCK_USERS.length,
              " total"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Joined" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 font-semibold text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 font-semibold text-muted-foreground", children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: MOCK_USERS.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border hover:bg-muted/20 transition-colors",
                "data-ocid": "user-row",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-foreground", children: u.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground text-xs", children: u.email }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: u.phone }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: formatDate(u.joined) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: u.active ? "default" : "destructive",
                      className: "text-xs",
                      children: u.active ? "Active" : "Inactive"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: u.active ? "destructive" : "outline",
                      className: "text-xs h-7 px-2",
                      type: "button",
                      onClick: () => ue.success(
                        u.active ? "User deactivated" : "User activated"
                      ),
                      "data-ocid": "toggle-user-btn",
                      children: u.active ? "Deactivate" : "Activate"
                    }
                  ) })
                ]
              },
              u.id
            )) })
          ] }) }) }) })
        ] })
      ] }) })
    ] }),
    modal.type === "doctor" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleModal,
      {
        title: `${modal.mode === "add" ? "Add" : "Edit"} Doctor`,
        onClose: closeModal,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-dr-name", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-dr-name",
                  placeholder: "Dr. Full Name",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-dr-qual", children: "Qualifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "m-dr-qual", placeholder: "MD, DGO", className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-dr-spec", children: "Speciality" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-dr-spec",
                  placeholder: "Obstetrics & Gynecology",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-dr-exp", children: "Experience (years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-dr-exp",
                  type: "number",
                  placeholder: "10",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-dr-fee", children: "Consultation Fee (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-dr-fee",
                  type: "number",
                  placeholder: "800",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-dr-hosp", children: "Hospital" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  id: "m-dr-hosp",
                  className: "mt-1 w-full h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary",
                  children: HOSPITALS_DATA.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: h.id, children: h.name }, h.id))
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "btn-primary flex-1",
                type: "button",
                onClick: () => {
                  ue.success("Doctor saved");
                  closeModal();
                },
                children: "Save Doctor"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "flex-1",
                type: "button",
                onClick: closeModal,
                children: "Cancel"
              }
            )
          ] })
        ] })
      }
    ),
    modal.type === "hospital" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleModal,
      {
        title: `${modal.mode === "add" ? "Add" : "Edit"} Hospital`,
        onClose: closeModal,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-h-name", children: "Hospital Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-h-name",
                  placeholder: "GyneCare Hospital — City",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-h-city", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "m-h-city", placeholder: "Mumbai", className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-h-phone", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-h-phone",
                  placeholder: "+91 XXXXX XXXXX",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-h-addr", children: "Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-h-addr",
                  placeholder: "Full address",
                  className: "mt-1"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "btn-primary flex-1",
                type: "button",
                onClick: () => {
                  ue.success("Hospital saved");
                  closeModal();
                },
                children: "Save Hospital"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "flex-1",
                type: "button",
                onClick: closeModal,
                children: "Cancel"
              }
            )
          ] })
        ] })
      }
    ),
    modal.type === "package" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleModal,
      {
        title: `${modal.mode === "add" ? "Add" : "Edit"} Package`,
        onClose: closeModal,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-p-name", children: "Package Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-p-name",
                  placeholder: "Wellness Package",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-p-price", children: "Price (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-p-price",
                  type: "number",
                  placeholder: "2999",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-p-cat", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "m-p-cat", placeholder: "Preventive", className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-p-tests", children: "Tests (comma separated)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-p-tests",
                  placeholder: "CBC, Thyroid, Pap Smear...",
                  className: "mt-1"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "btn-primary flex-1",
                type: "button",
                onClick: () => {
                  ue.success("Package saved");
                  closeModal();
                },
                children: "Save Package"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "flex-1",
                type: "button",
                onClick: closeModal,
                children: "Cancel"
              }
            )
          ] })
        ] })
      }
    ),
    modal.type === "blog" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleModal,
      {
        title: `${modal.mode === "add" ? "Add" : "Edit"} Blog`,
        onClose: closeModal,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-b-title", children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "m-b-title", placeholder: "Blog title", className: "mt-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-b-cat", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-b-cat",
                  placeholder: "Women's Health",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-b-author", children: "Author" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "m-b-author",
                  placeholder: "Dr. Name",
                  className: "mt-1"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-b-img", children: "Image URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "m-b-img", placeholder: "https://...", className: "mt-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "m-b-content", children: "Content" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "m-b-content",
                rows: 4,
                className: "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary resize-none",
                placeholder: "Blog content..."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "btn-primary flex-1",
                type: "button",
                onClick: () => {
                  ue.success("Blog saved");
                  closeModal();
                },
                children: "Save Blog"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "flex-1",
                type: "button",
                onClick: closeModal,
                children: "Cancel"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  AdminDashboard as default
};
