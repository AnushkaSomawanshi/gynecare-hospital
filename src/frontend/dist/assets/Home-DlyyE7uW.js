import { c as createLucideIcon, j as jsxRuntimeExports, g as getInitials, a as cn, L as Layout, B as Badge, H as Heart, b as Link, d as Button, P as Phone, M as MapPin } from "./index-deVTXUcg.js";
import { B as BlogCard } from "./BlogCard-C7cmygoU.js";
import { u as useTopDoctors, D as DoctorCard } from "./useDoctors-P6VjL3Si.js";
import { P as PackageCard } from "./PackageCard-CsHvpiHV.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { S as Star } from "./star-ByA27dFh.js";
import { H as HOSPITALS_DATA, P as PACKAGES_DATA, B as BLOGS_DATA } from "./api-lGWS4sD5.js";
import { m as motion } from "./proxy-x8WbTewr.js";
import { A as ArrowRight } from "./arrow-right-o9-llMe_.js";
import { C as ChevronRight } from "./chevron-right-yrYy2BRg.js";
import { U as Users } from "./users-BHLa9Wrx.js";
import { S as ShieldCheck } from "./shield-check-Y_wOtwsA.js";
import { M as Microscope } from "./microscope-DEGsYMzL.js";
import { B as Baby } from "./baby-aRLHEA_q.js";
import { S as Stethoscope } from "./stethoscope-3qHnT9Ax.js";
import { B as Building2 } from "./building-2-BWmfPg8U.js";
import { A as Award } from "./award-D00jVZGG.js";
import { B as BedDouble } from "./bed-double-B2rfoqOd.js";
import { C as CirclePlay } from "./circle-play-BOqXia-w.js";
import "./tag-B7YlnFPM.js";
import "./languages-CRifrRMD.js";
import "./useQuery-DXu_4EU2.js";
import "./flask-conical-VkoKxzet.js";
import "./circle-check-big-CMno_QKW.js";
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
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
function StarRating({ rating, max = 5 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-center gap-0.5",
      "aria-label": `${rating} out of ${max} stars`,
      children: Array.from({ length: max }, (_, i) => {
        const starKey = `star-rating-${i}`;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            className: cn(
              "h-4 w-4",
              i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
            )
          },
          starKey
        );
      })
    }
  );
}
function TestimonialCard({
  testimonial,
  variant = "default",
  className
}) {
  if (variant === "minimal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex gap-3 group", className), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm", children: testimonial.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: testimonial.avatar,
          alt: testimonial.patientName,
          className: "h-full w-full rounded-full object-cover"
        }
      ) : getInitials(testimonial.patientName) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: testimonial.rating }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic mt-1 line-clamp-2", children: [
          '"',
          testimonial.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mt-1", children: testimonial.patientName })
      ] })
    ] });
  }
  if (variant === "featured") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: cn(
          "card-elevated border-l-4 border-l-accent shadow-hospital-lg",
          className
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-accent/40 mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: testimonial.rating }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground italic leading-relaxed mt-3 mb-5 text-base", children: [
            '"',
            testimonial.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold", children: testimonial.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: testimonial.avatar,
                alt: testimonial.patientName,
                className: "h-full w-full rounded-full object-cover"
              }
            ) : getInitials(testimonial.patientName) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground font-display", children: testimonial.patientName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: testimonial.patientLocation }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium mt-0.5", children: testimonial.treatment })
            ] })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: cn(
        "card-elevated hover:shadow-hospital-lg transition-smooth group h-full flex flex-col",
        className
      ),
      "data-ocid": "testimonial-card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: testimonial.rating }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-accent/30 flex-shrink-0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic leading-relaxed flex-1 mb-4", children: [
          '"',
          testimonial.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-3 border-t border-border mt-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-bold text-sm", children: testimonial.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: testimonial.avatar,
              alt: testimonial.patientName,
              className: "h-full w-full rounded-full object-cover"
            }
          ) : getInitials(testimonial.patientName) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm truncate", children: testimonial.patientName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: testimonial.patientLocation }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary font-medium mt-0.5 truncate", children: testimonial.treatment })
          ] })
        ] })
      ] })
    }
  );
}
const STATS = [
  {
    icon: Building2,
    label: "Hospital Branches",
    value: "12+",
    color: "text-primary"
  },
  {
    icon: Award,
    label: "Years of Excellence",
    value: "20+",
    color: "text-accent"
  },
  {
    icon: Users,
    label: "Specialist Doctors",
    value: "200+",
    color: "text-primary"
  },
  {
    icon: BedDouble,
    label: "Bed Capacity",
    value: "1500+",
    color: "text-accent"
  }
];
const SPECIALITIES = [
  {
    icon: Heart,
    label: "Obstetrics & Gynecology",
    href: "/specialities#gynaecology",
    highlight: true
  },
  {
    icon: Baby,
    label: "IVF & Fertility",
    href: "/specialities#ivf",
    highlight: true
  },
  {
    icon: Stethoscope,
    label: "Maternal-Fetal Medicine",
    href: "/specialities#maternal",
    highlight: false
  },
  {
    icon: Microscope,
    label: "Gynecologic Oncology",
    href: "/specialities#oncology",
    highlight: false
  },
  {
    icon: ShieldCheck,
    label: "Preventive Health",
    href: "/specialities#preventive",
    highlight: false
  },
  {
    icon: Baby,
    label: "Neonatology (NICU)",
    href: "/specialities#nicu",
    highlight: false
  }
];
const TESTIMONIALS = [
  {
    id: "t1",
    patientName: "Sneha Marathe",
    patientLocation: "Pune, Maharashtra",
    quote: "Dr. Sharma at GyneCare made my high-risk pregnancy feel manageable. The team's compassion and expertise gave me confidence throughout my journey. My baby was born healthy!",
    rating: 5,
    treatment: "High-Risk Pregnancy Care",
    date: "2026-03-01"
  },
  {
    id: "t2",
    patientName: "Prachi Kulkarni",
    patientLocation: "Mumbai, Maharashtra",
    quote: "After years of struggling with infertility, Dr. Anjali's IVF program gave us the miracle we dreamed of. The entire team was empathetic and professional at every step.",
    rating: 5,
    treatment: "IVF Treatment",
    date: "2026-02-15"
  },
  {
    id: "t3",
    patientName: "Ritu Desai",
    patientLocation: "Nashik, Maharashtra",
    quote: "GyneCare's early cancer detection program saved my life. Dr. Sunita's expertise in oncology is unmatched. I am forever grateful for the care I received.",
    rating: 5,
    treatment: "Gynecologic Oncology",
    date: "2026-01-20"
  }
];
const QUICK_ACTIONS = [
  {
    label: "Find Doctor",
    href: "/find-doctor",
    icon: Users,
    color: "bg-primary/10 text-primary"
  },
  {
    label: "Book Appointment",
    href: "/book-appointment",
    icon: ArrowRight,
    color: "bg-accent/10 text-accent"
  },
  {
    label: "Health Checkup",
    href: "/health-packages",
    icon: ShieldCheck,
    color: "bg-primary/10 text-primary"
  },
  {
    label: "Teleconsultation",
    href: "/teleconsultation",
    icon: Phone,
    color: "bg-accent/10 text-accent"
  },
  {
    label: "Lab Reports",
    href: "/labs",
    icon: Microscope,
    color: "bg-primary/10 text-primary"
  },
  {
    label: "Blood Bank",
    href: "/blood-availability",
    icon: Heart,
    color: "bg-accent/10 text-accent"
  }
];
function HomePage() {
  const { data: doctors = [] } = useTopDoctors(4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
            alt: "Compassionate gynecology care",
            className: "h-full w-full object-cover opacity-25"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/15 text-accent border-accent/30 mb-6 text-sm px-4 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5 mr-1.5 fill-current" }),
              "NABH Accredited Women's Healthcare"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-4", children: [
              "Compassionate",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Gynecology Care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "for Women's Wellness"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg", children: "Empowering women through comprehensive healthcare at GyneCare. From prenatal care to advanced fertility treatments — your health is our mission." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", "data-ocid": "hero-book-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 shadow-hospital-lg px-8",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" }),
                    "Book an Appointment"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/specialities", "data-ocid": "hero-specialities-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                  children: [
                    "Explore Specialities",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                  ]
                }
              ) })
            ] })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3", children: QUICK_ACTIONS.map((action, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.08 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: action.href, "data-ocid": `quick-action-${i}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 bg-card/10 hover:bg-card/20 rounded-xl p-3 text-center transition-smooth cursor-pointer group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-card/20 group-hover:scale-110 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(action.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary-foreground leading-tight", children: action.label })
        ] }) })
      },
      action.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-hospital-lg p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground mb-6 text-center", children: "Find Your Specialist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "home-search-location",
              className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block",
              children: "Location"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "home-search-location",
              className: "w-full h-11 rounded-lg border border-input bg-background px-4 text-sm focus:ring-2 focus:ring-primary outline-none",
              "data-ocid": "search-location",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select City" }),
                HOSPITALS_DATA.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: h.city, children: h.city }, h.id))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "home-search-speciality",
              className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block",
              children: "Speciality"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "home-search-speciality",
              className: "w-full h-11 rounded-lg border border-input bg-background px-4 text-sm focus:ring-2 focus:ring-primary outline-none",
              "data-ocid": "search-speciality",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Specialities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Obstetrics & Gynecology" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "IVF & Fertility" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Gynecologic Oncology" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Maternal-Fetal Medicine" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/find-doctor", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "h-11 px-8 bg-primary hover:bg-primary/90 font-semibold w-full md:w-auto",
            "data-ocid": "search-doctor-btn",
            children: "Search Doctors"
          }
        ) }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Our Specialities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground mb-3", children: "Gynecology Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Curated check-up and treatment bundles for comprehensive women's health" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: SPECIALITIES.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: i * 0.07 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: spec.href, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: `card-elevated hover:shadow-hospital-lg transition-smooth cursor-pointer group text-center ${spec.highlight ? "ring-1 ring-accent" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex h-12 w-12 mx-auto items-center justify-center rounded-xl mb-3 transition-smooth ${spec.highlight ? "bg-accent/15 group-hover:bg-accent text-accent group-hover:text-accent-foreground" : "bg-primary/10 group-hover:bg-primary text-primary group-hover:text-primary-foreground"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(spec.icon, { className: "h-6 w-6" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-tight", children: spec.label })
              ] })
            }
          ) })
        },
        spec.label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-3", children: "Why Choose GyneCare?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 max-w-xl mx-auto", children: "Maharashtra's most trusted network for women's healthcare — backed by numbers." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 mx-auto items-center justify-center rounded-2xl bg-card/15 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "h-8 w-8 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-primary-foreground font-display mb-1", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-primary-foreground/70", children: stat.label })
          ]
        },
        stat.label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "flex items-end justify-between mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Our Specialists" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "Our Specialized Gynecologists" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Consultant Gynecologist & Obstetrician" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/find-doctor", className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                children: [
                  "View All Doctors ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: doctors.map((doctor, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorCard, { doctor })
        },
        doctor.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/find-doctor", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "border-primary text-primary", children: [
        "View All Doctors ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "flex items-end justify-between mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Curated Checkups" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "Health Packages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Curated check-up and pre-ment-up bundle" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/health-packages", className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2",
                children: [
                  "View All Packages ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: PACKAGES_DATA.slice(0, 3).map((pkg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCard, { pkg })
        },
        pkg.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Patient Stories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "What Our Patients Say" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: TESTIMONIALS.map((testimonial, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: {
            opacity: 0,
            x: i === 0 ? -20 : i === 2 ? 20 : 0,
            y: 20
          },
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.12 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialCard, { testimonial, variant: "featured" })
        },
        testimonial.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "flex items-end justify-between mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Health Insights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "Women's Health Blogs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Expert articles by our specialists" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blogs", className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2",
                children: [
                  "All Articles ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: BLOGS_DATA.map((blog, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "h-full",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCard, { blog, className: "h-full" })
        },
        blog.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Our Network" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "Hospital Locations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Find us across Maharashtra" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: HOSPITALS_DATA.map((hospital, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated hover:shadow-hospital-lg transition-smooth overflow-hidden group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-40 overflow-hidden bg-muted relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: hospital.imageUrl,
                  alt: hospital.name,
                  className: "h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary text-primary-foreground text-xs", children: hospital.emergencyAvailable ? "24×7 Emergency" : "OPD Only" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display mb-2 line-clamp-1", children: hospital.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 text-xs text-muted-foreground mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-primary flex-shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  hospital.address,
                  ", ",
                  hospital.city
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hospital.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-muted/50 rounded-lg p-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground", children: [
                    hospital.doctorCount,
                    "+"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Doctors" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-muted/50 rounded-lg p-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: hospital.bedCapacity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Beds" })
                ] })
              ] })
            ] })
          ] })
        },
        hospital.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Video Library" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-foreground", children: "Health Awareness Videos" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [
        {
          title: "Understanding PCOS: A Comprehensive Guide",
          duration: "12:45",
          category: "PCOS"
        },
        {
          title: "Your Pregnancy Journey: Week-by-Week Guide",
          duration: "18:30",
          category: "Pregnancy"
        },
        {
          title: "IVF Treatment: What to Expect",
          duration: "15:20",
          category: "Fertility"
        }
      ].map((video, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/videos", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated hover:shadow-hospital-lg transition-smooth group overflow-hidden cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-14 w-14 text-primary opacity-80 group-hover:scale-110 transition-smooth" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-foreground/70 text-card text-xs px-2 py-0.5 rounded", children: video.duration })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] mb-2", children: video.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm line-clamp-2", children: video.title })
            ] })
          ] }) })
        },
        video.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-gradient-to-r from-primary to-primary/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4", children: "Your Health Journey Starts Here" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg", children: "Book an appointment with our specialists today and take the first step towards better health." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", "data-ocid": "cta-book-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-hospital-lg",
                children: "Book an Appointment"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8",
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
  HomePage as default
};
