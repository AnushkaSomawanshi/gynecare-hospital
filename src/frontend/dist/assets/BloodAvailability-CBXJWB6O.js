import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout, B as Badge, P as Phone, d as Button, H as Heart, l as ue } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent } from "./card-e7giuW1n.js";
import { I as Input } from "./input-BSJwKJi-.js";
import { L as Label } from "./label-CzIsgjvI.js";
import { T as Textarea } from "./textarea-CVfMRzLX.js";
import { C as CircleCheckBig } from "./circle-check-big-DIS2-WFy.js";
import { U as Users } from "./users-B9A_VLy5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
];
const Droplets = createLucideIcon("droplets", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const BLOOD_DATA = [
  {
    group: "O+",
    units: 25,
    status: "available",
    hospital: "Pune Main"
  },
  { group: "O-", units: 4, status: "limited", hospital: "Nashik" },
  {
    group: "A+",
    units: 18,
    status: "available",
    hospital: "Pune Main"
  },
  { group: "A-", units: 2, status: "limited", hospital: "Mumbai" },
  { group: "B+", units: 15, status: "available", hospital: "Mumbai" },
  {
    group: "B-",
    units: 0,
    status: "unavailable",
    hospital: "All Branches"
  },
  { group: "AB+", units: 10, status: "available", hospital: "Nashik" },
  { group: "AB-", units: 1, status: "limited", hospital: "Pune Main" }
];
const STATUS_CONFIG = {
  available: {
    label: "Available",
    bg: "border-green-200 bg-green-50",
    badge: "bg-green-100 text-green-700",
    icon: CircleCheckBig,
    iconColor: "text-green-600"
  },
  limited: {
    label: "Limited",
    bg: "border-yellow-200 bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-700",
    icon: TriangleAlert,
    iconColor: "text-yellow-600"
  },
  unavailable: {
    label: "Unavailable",
    bg: "border-destructive/20 bg-destructive/5",
    badge: "bg-destructive/10 text-destructive",
    icon: TriangleAlert,
    iconColor: "text-destructive"
  }
};
const DONATION_BENEFITS = [
  {
    icon: Heart,
    title: "Save 3 Lives",
    desc: "One donation can save up to 3 patients in need"
  },
  {
    icon: Users,
    title: "Free Health Check",
    desc: "Donors get a free blood screening at our labs"
  },
  {
    icon: CircleCheckBig,
    title: "Priority Care",
    desc: "Registered donors receive priority during emergencies"
  },
  {
    icon: Droplets,
    title: "Replenishes Fast",
    desc: "Blood is replaced by your body within 56 days"
  }
];
const BLOOD_GROUPS = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
function BloodAvailabilityPage() {
  const handleRequest = (e) => {
    e.preventDefault();
    ue.success(
      "Blood request submitted! Our blood bank team will contact you within 30 minutes."
    );
  };
  const handleDonate = (e) => {
    e.preventDefault();
    ue.success(
      "Thank you! We will contact you to schedule your donation appointment."
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 py-10 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Blood Bank" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold font-display text-foreground", children: "Blood Bank & Availability" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-xl", children: "Real-time blood stock across our GyneCare hospital network. Emergency requests handled 24×7." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-4 bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3 w-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-destructive flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-destructive", children: "Blood Bank Emergency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: "1800-200-5678 (Toll Free)" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-2", children: "Current Blood Availability" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Updated every 4 hours. Contact us for the latest stock information." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14", children: BLOOD_DATA.map((b) => {
        const cfg = STATUS_CONFIG[b.status];
        const StatusIcon = cfg.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `card-elevated border ${cfg.bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-accent/10 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { className: "h-7 w-7 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold font-display text-foreground mb-0.5", children: b.group }),
          b.status !== "unavailable" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold text-primary", children: [
            b.units,
            " units"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold mt-1 ${cfg.badge}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusIcon, { className: `h-3 w-3 ${cfg.iconColor}` }),
                cfg.label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-2", children: b.hospital })
        ] }) }, b.group);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated border-destructive/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-destructive" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display", children: "Emergency Blood Request" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Response within 30 minutes" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRequest, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "blood-patient-name", children: "Patient Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "blood-patient-name",
                    placeholder: "Full name",
                    className: "mt-1"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "blood-group-needed", children: "Blood Group Needed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "select",
                  {
                    id: "blood-group-needed",
                    className: "w-full mt-1 px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring",
                    children: BLOOD_GROUPS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g, children: g }, g))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "blood-units", children: "Units Required" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "blood-units",
                    type: "number",
                    min: 1,
                    placeholder: "1",
                    className: "mt-1"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "blood-contact", children: "Contact Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "blood-contact",
                    placeholder: "9876543210",
                    className: "mt-1"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "blood-hospital", children: "Hospital / Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "blood-hospital",
                  placeholder: "Hospital name and city",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "blood-reason", children: "Reason / Diagnosis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "blood-reason",
                  placeholder: "Brief medical reason for blood requirement",
                  className: "mt-1 min-h-[80px]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "w-full bg-destructive text-white hover:bg-destructive/90 transition-smooth font-semibold",
                "data-ocid": "blood-request-btn",
                children: "Submit Emergency Request"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-border p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-10 w-10 text-accent mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-2", children: "Donate Blood, Save Lives" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-5", children: "Healthy adults between 18–65 years weighing above 50 kg can donate every 3 months." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: DONATION_BENEFITS.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-2 bg-card rounded-xl p-3 border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-accent mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-xs", children: title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: desc })
                  ] })
                ]
              },
              title
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display mb-4", children: "Register as Donor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleDonate, className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donor-name", children: "Your Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "donor-name",
                      placeholder: "Full name",
                      className: "mt-1"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donor-blood", children: "Your Blood Group" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "select",
                    {
                      id: "donor-blood",
                      className: "w-full mt-1 px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring",
                      children: BLOOD_GROUPS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: g, children: g }, g))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donor-phone", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "donor-phone",
                    placeholder: "9876543210",
                    className: "mt-1"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "w-full btn-accent font-semibold",
                  "data-ocid": "donor-register-btn",
                  children: "Register as Donor"
                }
              )
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  BloodAvailabilityPage as default
};
