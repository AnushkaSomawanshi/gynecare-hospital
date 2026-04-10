import { j as jsxRuntimeExports, L as Layout, B as Badge, b as Link, d as Button, H as Heart } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent } from "./card-e7giuW1n.js";
import { m as motion } from "./proxy-B6dE8xqr.js";
import { A as ArrowRight } from "./arrow-right-Dqt0vUt9.js";
import { C as ChevronRight } from "./chevron-right-Bn0K1w0g.js";
import { S as Star } from "./star-DLrFNl00.js";
import { C as CircleCheckBig } from "./circle-check-big-DIS2-WFy.js";
import { B as Baby } from "./baby-_JX3BFnV.js";
import { M as Microscope } from "./microscope-CrM4AjNL.js";
import { S as Stethoscope } from "./stethoscope-Cj43DEtK.js";
import { S as ShieldCheck } from "./shield-check-D3P6ImG4.js";
import { A as Activity } from "./activity-Cv5zgyPN.js";
import { U as Users } from "./users-B9A_VLy5.js";
const SPECIALITIES = [
  {
    id: "gynaecology",
    icon: Heart,
    name: "Obstetrics & Gynecology",
    tagline: "Comprehensive care from conception to menopause",
    description: "Our flagship department offers holistic women's reproductive health services — from routine annual exams to complex high-risk deliveries and minimally invasive surgeries.",
    services: [
      "Normal & C-Section Delivery",
      "High-Risk Pregnancy Management",
      "Laparoscopic Surgery",
      "Hysterectomy (Robotic/Laparoscopic)",
      "PCOS Diagnosis & Management",
      "Endometriosis Treatment",
      "Menopause Management",
      "Urinary Incontinence Care"
    ],
    doctorCount: 45,
    highlight: true,
    color: "accent"
  },
  {
    id: "ivf",
    icon: Baby,
    name: "IVF & Fertility",
    tagline: "Advanced assisted reproduction for intended parents",
    description: "Maharashtra's leading fertility center — offering personalized IVF protocols, donor programs, and fertility preservation with a 62% success rate.",
    services: [
      "IVF / ICSI Treatment",
      "Intrauterine Insemination (IUI)",
      "Egg Freezing (Oocyte Cryopreservation)",
      "Donor Egg & Sperm Programs",
      "Preimplantation Genetic Testing",
      "Surrogacy Consultation"
    ],
    doctorCount: 18,
    highlight: true,
    color: "accent"
  },
  {
    id: "oncology",
    icon: Microscope,
    name: "Gynecologic Oncology",
    tagline: "Expert cancer care — detection, surgery, treatment",
    description: "Our oncology specialists bring cutting-edge robotic surgical techniques to gynecologic cancer treatment, focusing on organ preservation and quality of life.",
    services: [
      "Cervical Cancer Treatment",
      "Ovarian Cancer Surgery",
      "Uterine / Endometrial Cancer",
      "Robotic Minimally Invasive Surgery",
      "Chemotherapy & Immunotherapy",
      "Colposcopy & Biopsy"
    ],
    doctorCount: 12,
    highlight: false,
    color: "primary"
  },
  {
    id: "maternal",
    icon: Stethoscope,
    name: "Maternal-Fetal Medicine",
    tagline: "High-risk pregnancy specialists",
    description: "Our perinatology unit is equipped for the most challenging pregnancies, with in-house NICU support and advanced fetal monitoring technology.",
    services: [
      "Prenatal Diagnosis & Genetic Counseling",
      "Twin & Multiple Pregnancy",
      "Preterm Birth Prevention",
      "NICU Level III Care",
      "Fetal Echocardiography",
      "Intrauterine Growth Restriction"
    ],
    doctorCount: 10,
    highlight: false,
    color: "primary"
  },
  {
    id: "preventive",
    icon: ShieldCheck,
    name: "Preventive Women's Health",
    tagline: "Early detection & wellness packages",
    description: "Proactive health screenings, cancer detection programs, and curated wellness packages designed specifically for women at every life stage.",
    services: [
      "Cervical Cancer Screening (Pap + HPV)",
      "Breast Health & Mammography",
      "Bone Density Assessment",
      "Full Hormonal Profile",
      "Diabetes & Thyroid Screening",
      "Customized Wellness Packages"
    ],
    doctorCount: 8,
    highlight: false,
    color: "primary"
  },
  {
    id: "menopause",
    icon: Activity,
    name: "Menopause Clinic",
    tagline: "Specialized hormonal & lifestyle care",
    description: "Our dedicated menopause clinic provides evidence-based hormonal therapy, bone health management, and psychological support through the menopausal transition.",
    services: [
      "Hormone Replacement Therapy (HRT)",
      "Osteoporosis Prevention & Treatment",
      "Hot Flashes & Mood Management",
      "Genitourinary Syndrome Treatment",
      "Libido & Sexual Health",
      "Lifestyle & Nutrition Counseling"
    ],
    doctorCount: 6,
    highlight: false,
    color: "primary"
  }
];
function SpecialitiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 border-b border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Women's Health Excellence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold font-display text-foreground mb-4", children: "Our Medical Specialities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mb-6", children: "Comprehensive gynecology and women's health services — backed by Maharashtra's most experienced team of specialists, NABH-accredited and committed to excellence." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-semibold", children: [
              "Book a Consultation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/find-doctor", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2",
                children: [
                  "Find a Specialist ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                ]
              }
            ) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-accent/20 overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/15 text-accent border-accent/30 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 mr-1 fill-current" }),
              " Featured Speciality"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-foreground mb-3", children: "Obstetrics & Gynecology" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "Our Obstetrics & Gynecology department is the cornerstone of GyneCare. With over 25 years of clinical excellence, our team of 45+ specialists manages over 3,000 deliveries annually — from routine pregnancies to the most complex high-risk cases." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
              "Prenatal Care",
              "Postnatal Support",
              "IVF Support",
              "Fertility Consultation",
              "PCOS Management",
              "Laparoscopic Surgery",
              "Hysterectomy",
              "Menopause Care"
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-sm text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-accent flex-shrink-0" }),
                  s
                ]
              },
              s
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold", children: "Book Consultation" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/find-doctor", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "border-accent text-accent hover:bg-accent/10",
                  children: "Find Gynecologist"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-accent/15 to-primary/10 p-8 md:p-10 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Department Highlights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
              { value: "3,000+", label: "Annual Deliveries" },
              { value: "45+", label: "Specialists" },
              { value: "25+", label: "Years Experience" },
              { value: "98%", label: "Patient Satisfaction" }
            ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card/60 rounded-xl p-4 text-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display text-primary mb-1", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: stat.label })
                ]
              },
              stat.label
            )) })
          ] })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "All Departments" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-foreground mb-2", children: "Complete Speciality List" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Expert care across all areas of women's health" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: SPECIALITIES.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          id: spec.id,
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.07 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: `card-elevated hover:shadow-hospital-lg transition-smooth group h-full flex flex-col ${spec.highlight ? "ring-2 ring-accent ring-offset-1" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex h-14 w-14 items-center justify-center rounded-xl mb-4 transition-smooth ${spec.highlight ? "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(spec.icon, { className: "h-7 w-7" })
                  }
                ),
                spec.highlight && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/15 text-accent border-accent/30 mb-2 text-xs w-fit", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-2.5 w-2.5 mr-1" }),
                  " Featured"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display text-xl mb-1", children: spec.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium mb-3", children: spec.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 line-clamp-3", children: spec.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1.5 mb-5 flex-1", children: [
                  spec.services.slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-sm text-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" }),
                        s
                      ]
                    },
                    s
                  )),
                  spec.services.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-primary font-medium pl-3.5", children: [
                    "+",
                    spec.services.length - 4,
                    " more services"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mb-4 pt-3 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    spec.doctorCount,
                    " Specialists available"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/find-doctor", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      className: "w-full text-xs gap-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                      children: "Find Doctor"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full text-xs bg-primary hover:bg-primary/90 gap-1", children: [
                    "Book ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                  ] }) })
                ] })
              ] })
            }
          )
        },
        spec.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-gradient-to-r from-primary to-primary/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-primary-foreground mb-3", children: "Not Sure Which Speciality?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-6 max-w-xl mx-auto", children: "Our patient coordinators can help you choose the right specialist and department for your needs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/find-doctor", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8", children: "Find a Specialist" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                className: "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-8",
                children: "Contact Us"
              }
            ) })
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  SpecialitiesPage as default
};
