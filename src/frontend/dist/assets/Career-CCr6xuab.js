import { c as createLucideIcon, j as jsxRuntimeExports, z as Root, A as Content, D as Close, X, a as cn, E as Title, G as Portal, O as Overlay, r as reactExports, L as Layout, B as Badge, M as MapPin, H as Heart, d as Button, C as Clock, l as ue } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { I as Input } from "./input-Dm-38PBp.js";
import { L as Label } from "./label-BrDcTsSh.js";
import { T as Textarea } from "./textarea-CaUyXWKd.js";
import { S as Stethoscope } from "./stethoscope-3qHnT9Ax.js";
import { U as Users } from "./users-BHLa9Wrx.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode);
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
const OPENINGS = [
  {
    id: "j1",
    title: "Senior Consultant Gynecologist",
    dept: "OBG Department",
    location: "Pune",
    type: "Full-time",
    exp: "8+ years",
    salary: "₹20–35 LPA",
    skills: ["MS/MD OBG", "Laparoscopy", "High-risk Pregnancy"],
    urgent: true
  },
  {
    id: "j2",
    title: "IVF Embryologist",
    dept: "IVF & Fertility Lab",
    location: "Mumbai",
    type: "Full-time",
    exp: "3+ years",
    salary: "₹10–18 LPA",
    skills: ["MSc Embryology", "Semen Analysis", "Cryopreservation"],
    urgent: true
  },
  {
    id: "j3",
    title: "Staff Nurse (ICU / NICU)",
    dept: "Nursing",
    location: "Nashik",
    type: "Full-time",
    exp: "2+ years",
    salary: "₹4–7 LPA",
    skills: ["B.Sc Nursing", "Critical Care", "Ventilator Management"],
    urgent: false
  },
  {
    id: "j4",
    title: "Resident Doctor — OBG",
    dept: "OBG Department",
    location: "Pune",
    type: "Full-time",
    exp: "MBBS + Internship",
    salary: "₹6–10 LPA",
    skills: ["MBBS", "Intern Completion", "Emergency Skills"],
    urgent: false
  },
  {
    id: "j5",
    title: "Medical Lab Technician (MLT)",
    dept: "Diagnostics",
    location: "Pune / Mumbai",
    type: "Full-time",
    exp: "1–3 years",
    salary: "₹3–6 LPA",
    skills: ["DMLT/BMLT", "Hematology", "Microbiology"],
    urgent: false
  },
  {
    id: "j6",
    title: "Medical Receptionist",
    dept: "Front Office",
    location: "Pune",
    type: "Full-time",
    exp: "1+ year",
    salary: "₹2.5–4 LPA",
    skills: ["Patient Coordination", "Hindi/Marathi/English", "HMS Software"],
    urgent: false
  },
  {
    id: "j7",
    title: "Hospital IT Support Executive",
    dept: "IT & Systems",
    location: "Pune",
    type: "Full-time",
    exp: "2+ years",
    salary: "₹4–8 LPA",
    skills: ["Networking", "HIS/EMR", "Windows Server"],
    urgent: false
  },
  {
    id: "j8",
    title: "Hospital Administrator",
    dept: "Operations",
    location: "Mumbai",
    type: "Full-time",
    exp: "5+ years",
    salary: "₹12–20 LPA",
    skills: ["MBA Hospital Mgmt", "NABH Compliance", "HR Management"],
    urgent: false
  }
];
const VALUES = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    desc: "Every decision starts with the patient"
  },
  {
    icon: Stethoscope,
    title: "Medical Excellence",
    desc: "Continuous learning and clinical innovation"
  },
  {
    icon: Users,
    title: "Inclusive Workplace",
    desc: "Diversity, respect, and belonging for all"
  },
  {
    icon: Briefcase,
    title: "Growth & Development",
    desc: "CME, fellowships, and leadership tracks"
  }
];
function CareerPage() {
  const [applyJob, setApplyJob] = reactExports.useState(null);
  const [filter, setFilter] = reactExports.useState("All");
  const departments = [
    "All",
    "OBG Department",
    "IVF & Fertility Lab",
    "Nursing",
    "Diagnostics",
    "Front Office",
    "IT & Systems",
    "Operations"
  ];
  const filtered = filter === "All" ? OPENINGS : OPENINGS.filter((j) => j.dept === filter);
  const handleApply = (e) => {
    e.preventDefault();
    setApplyJob(null);
    ue.success(
      "Application submitted! Our HR team will contact you within 5 business days."
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-primary/10 via-background to-accent/10 py-14 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Join Our Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold font-display text-foreground max-w-xl leading-tight mb-4", children: "Build Your Career in Women's Healthcare" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mb-6", children: "Join Maharashtra's leading gynecology hospital network. Grow with passionate clinicians and make a real difference in women's lives." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 text-sm", children: [
        { label: "200+ Doctors", icon: Stethoscope },
        { label: "NABH Accredited", icon: Briefcase },
        { label: "12 Hospitals", icon: MapPin }
      ].map(({ label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 bg-card rounded-full px-3 py-1.5 border border-border shadow-hospital",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: label })
          ]
        },
        label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12", children: VALUES.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground text-sm mb-1", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: desc })
      ] }) }, title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-4 mb-5 flex-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold font-display text-foreground", children: [
          "Current Openings",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-normal text-muted-foreground ml-2", children: [
            "(",
            filtered.length,
            " positions)"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: departments.map((dept) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(dept),
            className: `px-3 py-1.5 rounded-full text-xs font-medium transition-smooth border ${filter === dept ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground hover:border-primary/50"}`,
            children: dept
          },
          dept
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: filtered.map((job) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "card-elevated hover:shadow-hospital-lg transition-smooth",
            "data-ocid": `job-card-${job.id}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: job.title }),
                    job.urgent && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/15 text-accent border-0 text-[10px]", children: "Urgent" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: job.dept })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    className: "btn-primary flex-shrink-0 text-xs",
                    onClick: () => setApplyJob({ id: job.id, title: job.title }),
                    "data-ocid": `apply-btn-${job.id}`,
                    children: "Apply"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                  job.location
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                  job.type
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3 w-3" }),
                  job.exp
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: job.salary })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: job.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-[10px]",
                  children: s
                },
                s
              )) })
            ] })
          },
          job.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground mb-1", children: "Don't see a suitable role?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Send us your resume — we'll reach out when a matching position opens." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            className: "btn-accent flex-shrink-0",
            onClick: () => setApplyJob({ id: "open", title: "Open Application" }),
            "data-ocid": "open-application-btn",
            children: "Submit Open Application"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!applyJob, onOpenChange: () => setApplyJob(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display", children: [
        "Apply — ",
        applyJob == null ? void 0 : applyJob.title
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleApply, className: "space-y-4 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "app-name", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "app-name",
                placeholder: "Your name",
                className: "mt-1",
                "data-ocid": "app-name-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "app-phone", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "app-phone",
                placeholder: "9876543210",
                className: "mt-1",
                "data-ocid": "app-phone-input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "app-email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "app-email",
              type: "email",
              placeholder: "you@email.com",
              className: "mt-1",
              "data-ocid": "app-email-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "app-position", children: "Position Applied For" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "app-position",
              defaultValue: applyJob == null ? void 0 : applyJob.title,
              className: "mt-1",
              "data-ocid": "app-position-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "app-cv", children: "Upload CV (PDF/DOC)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "app-cv",
              type: "file",
              accept: ".pdf,.doc,.docx",
              className: "mt-1",
              "data-ocid": "app-cv-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "app-cover", children: "Cover Note" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "app-cover",
              placeholder: "Briefly describe your experience and why you want to join GyneCare...",
              className: "mt-1 min-h-[100px]",
              "data-ocid": "app-cover-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              className: "flex-1 btn-primary",
              "data-ocid": "app-submit-btn",
              children: "Submit Application"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => setApplyJob(null),
              children: "Cancel"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  CareerPage as default
};
