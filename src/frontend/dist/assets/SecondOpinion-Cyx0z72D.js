import { j as jsxRuntimeExports, L as Layout, B as Badge, C as Clock, d as Button, l as ue } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent } from "./card-e7giuW1n.js";
import { I as Input } from "./input-BSJwKJi-.js";
import { L as Label } from "./label-CzIsgjvI.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BlNDTFp-.js";
import { T as Textarea } from "./textarea-CVfMRzLX.js";
import { S as Stethoscope } from "./stethoscope-Cj43DEtK.js";
import { F as FileText } from "./file-text-B2b2CgEt.js";
import { U as Upload } from "./upload-BgXO5pGf.js";
import { M as MessageSquare } from "./message-square-BxiGQ0Zv.js";
import { A as ArrowRight } from "./arrow-right-Dqt0vUt9.js";
import { C as CircleCheckBig } from "./circle-check-big-DIS2-WFy.js";
import { S as Star } from "./star-DLrFNl00.js";
import "./index-fRJ40FUG.js";
import "./check-CrakWNYS.js";
const HOW_IT_WORKS = [
  {
    step: "1",
    icon: Upload,
    title: "Submit Your Reports",
    desc: "Upload your existing diagnosis, pathology reports, scan reports, and current treatment details."
  },
  {
    step: "2",
    icon: Stethoscope,
    title: "Specialist Review",
    desc: "A senior specialist reviews your case within 48 hours and discusses with a multidisciplinary panel if needed."
  },
  {
    step: "3",
    icon: MessageSquare,
    title: "Expert Recommendation",
    desc: "Receive a detailed written opinion with treatment recommendations, alternative options, and next steps."
  }
];
const REASONS = [
  "Complex diagnosis requiring expert confirmation",
  "Multiple treatment options — need clarity on the best path",
  "Rare or unusual gynecological condition",
  "Major surgical procedure has been recommended",
  "Current treatment not showing expected results",
  "Seeking specialist opinion before IVF or high-risk procedure"
];
const EXPERT_DOCTORS = [
  {
    name: "Dr. Anjali Kulkarni",
    spec: "Gynecological Oncology & Minimally Invasive Surgery",
    exp: "22 years",
    cases: "5,000+",
    rating: 4.9,
    available: true
  },
  {
    name: "Dr. Priya Sharma",
    spec: "Reproductive Medicine & IVF",
    exp: "18 years",
    cases: "3,500+",
    rating: 4.8,
    available: true
  },
  {
    name: "Dr. Sunita Patil",
    spec: "Maternal-Fetal Medicine & High-Risk Pregnancy",
    exp: "20 years",
    cases: "4,200+",
    rating: 4.9,
    available: false
  },
  {
    name: "Dr. Meera Joshi",
    spec: "Endocrinology & PCOS Management",
    exp: "15 years",
    cases: "2,800+",
    rating: 4.7,
    available: true
  }
];
const SPECIALITIES = [
  "Obstetrics & Gynecology",
  "Gynecological Oncology",
  "Reproductive Medicine & IVF",
  "Maternal-Fetal Medicine",
  "Endocrinology / PCOS",
  "Minimally Invasive Surgery",
  "Urogynecology",
  "Menopause Management"
];
function SecondOpinionPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    ue.success(
      "Second opinion request submitted! Our specialist will contact you within 48 hours."
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-br from-primary/10 via-background to-accent/5 py-14 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Expert Review" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold font-display text-foreground max-w-2xl leading-tight mb-4", children: "Get a Second Opinion from Senior Specialists" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mb-6", children: "When your diagnosis is complex or a major procedure is suggested — a second expert opinion can change everything. Our specialists review your case in 48 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: [
        { label: "48-hour turnaround", icon: Clock },
        { label: "200+ expert specialists", icon: Stethoscope },
        { label: "10,000+ cases reviewed", icon: FileText }
      ].map(({ label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 bg-card rounded-full px-3 py-1.5 border border-border shadow-hospital text-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: label })
          ]
        },
        label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground mb-6 text-center", children: "How It Works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: HOW_IT_WORKS.map(({ step, icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-8 w-8 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold", children: step })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground mb-2", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: desc }),
          step !== "3" && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "hidden md:block absolute right-0 top-6 h-5 w-5 text-muted-foreground -translate-y-1/2 translate-x-1/2" })
        ] }, step)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground mb-4", children: "When Should You Seek a Second Opinion?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", children: REASONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: r })
          ] }, r)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-xl p-5 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground mb-3", children: "Cost of Second Opinion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
              {
                type: "Written Opinion (Basic)",
                price: "₹500",
                tat: "48 hours"
              },
              {
                type: "Written Opinion + Video Consult",
                price: "₹1,200",
                tat: "24 hours"
              },
              {
                type: "Multidisciplinary Panel Review",
                price: "₹3,000",
                tat: "72 hours"
              }
            ].map(({ type, price, tat }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between text-sm py-1.5 border-b border-border last:border-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: tat }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: price })
                  ] })
                ]
              },
              type
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground mb-5", children: "Request Second Opinion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-name", children: "Patient Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "so-name",
                    placeholder: "Full name",
                    className: "mt-1",
                    "data-ocid": "so-name-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-age", children: "Age" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "so-age",
                    type: "number",
                    placeholder: "Years",
                    className: "mt-1",
                    min: "1",
                    max: "120",
                    "data-ocid": "so-age-input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-email", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "so-email",
                  type: "email",
                  placeholder: "you@email.com",
                  className: "mt-1",
                  "data-ocid": "so-email-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-diagnosis", children: "Current Diagnosis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "so-diagnosis",
                  placeholder: "e.g., Endometriosis Stage III",
                  className: "mt-1",
                  "data-ocid": "so-diagnosis-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-treatment", children: "Current Treatment Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "so-treatment",
                  placeholder: "e.g., Laparoscopic surgery recommended",
                  className: "mt-1",
                  "data-ocid": "so-treatment-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-hospital", children: "Current Hospital / Clinic" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "so-hospital",
                  placeholder: "Where were you diagnosed?",
                  className: "mt-1",
                  "data-ocid": "so-hospital-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-speciality", children: "Specialist Needed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    id: "so-speciality",
                    className: "mt-1",
                    "data-ocid": "so-speciality-select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select speciality" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SPECIALITIES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectItem,
                  {
                    value: s.toLowerCase().replace(/\s/g, "-"),
                    children: s
                  },
                  s
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-reports", children: "Upload Reports" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "so-reports",
                  type: "file",
                  accept: ".pdf,.jpg,.jpeg,.png",
                  multiple: true,
                  className: "mt-1",
                  "data-ocid": "so-reports-input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PDF, JPG, PNG · Max 10MB per file · Multiple allowed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "so-concerns", children: "Your Specific Concerns" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "so-concerns",
                  placeholder: "What specific questions do you want our specialist to address?",
                  className: "mt-1 min-h-[90px]",
                  "data-ocid": "so-concerns-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                className: "w-full btn-accent font-semibold",
                "data-ocid": "so-submit-btn",
                children: [
                  "Submit for Review",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 ml-2" })
                ]
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground mb-6", children: "Our Second Opinion Experts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: EXPERT_DOCTORS.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "card-elevated hover:shadow-hospital-lg transition-smooth",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 mx-auto mb-4 text-xl font-bold text-primary", children: doc.name.split(" ").slice(1).map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-sm mb-0.5", children: doc.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3 line-clamp-2", children: doc.spec }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-1 mb-3", children: [
                [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: `h-3 w-3 ${s <= Math.floor(doc.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted"}`
                  },
                  s
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: doc.rating })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-3 text-xs text-muted-foreground mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  doc.exp,
                  " exp"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  doc.cases,
                  " cases"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `text-[10px] ${doc.available ? "bg-green-100 text-green-700 border-green-200" : "bg-muted text-muted-foreground border-border"}`,
                  children: doc.available ? "Available" : "Fully Booked"
                }
              )
            ] })
          },
          doc.name
        )) })
      ] })
    ] })
  ] });
}
export {
  SecondOpinionPage as default
};
