import { c as createLucideIcon, j as jsxRuntimeExports, L as Layout, B as Badge, H as Heart, C as Clock } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent } from "./card-e7giuW1n.js";
import { B as Building2 } from "./building-2-DSAbzeR2.js";
import { A as Award } from "./award-W05SP_w9.js";
import { U as Users } from "./users-B9A_VLy5.js";
import { S as Stethoscope } from "./stethoscope-Cj43DEtK.js";
import { E as Eye } from "./eye-D5HRy5Q5.js";
import { S as Shield } from "./shield-Db6tlE-G.js";
import { B as BookOpen } from "./book-open-l7fQ34ES.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const MILESTONES = [
  {
    year: "1998",
    event: "GyneCare Hospitals founded in Pune with 50-bed capacity"
  },
  { year: "2001", event: "Launched Maharashtra's first dedicated IVF unit" },
  {
    year: "2004",
    event: "Received NABH accreditation — first gynecology hospital in Western India"
  },
  {
    year: "2008",
    event: "Expanded to Mumbai and Nashik; crossed 10,000 annual deliveries"
  },
  {
    year: "2012",
    event: "Inaugurated the Centre of Excellence in Maternal-Fetal Medicine"
  },
  { year: "2016", event: "Achieved JCI International Accreditation" },
  {
    year: "2019",
    event: "Launched 24×7 teleconsultation services across all branches"
  },
  {
    year: "2024",
    event: "50,000+ successful deliveries and 5,000+ IVF babies milestone"
  }
];
const LEADERSHIP = [
  {
    name: "Dr. Ramesh Kulkarni",
    title: "Founder & Chairman",
    exp: "35 years",
    specialty: "Obstetrics & Gynecology",
    initials: "RK",
    quote: "Our mission is simple — every woman deserves compassionate, expert care."
  },
  {
    name: "Dr. Seema Joshi",
    title: "Medical Director",
    exp: "28 years",
    specialty: "Reproductive Medicine & IVF",
    initials: "SJ",
    quote: "Innovation in gynecology must always be guided by empathy and ethics."
  },
  {
    name: "Dr. Vijay Patil",
    title: "Director, Clinical Operations",
    exp: "22 years",
    specialty: "Gynecological Oncology",
    initials: "VP",
    quote: "We set standards that inspire the next generation of women's health specialists."
  }
];
const ACCREDITATIONS = [
  {
    name: "NABH",
    full: "National Accreditation Board for Hospitals",
    year: "2004",
    icon: Shield
  },
  {
    name: "JCI",
    full: "Joint Commission International",
    year: "2016",
    icon: Award
  },
  {
    name: "ISO 9001:2015",
    full: "Quality Management System Certified",
    year: "2010",
    icon: BookOpen
  },
  {
    name: "NABL",
    full: "National Accreditation Board for Laboratories",
    year: "2008",
    icon: Stethoscope
  }
];
const AWARDS = [
  {
    title: "Best Gynecology Hospital — Maharashtra",
    org: "Indian Medical Association",
    year: "2024"
  },
  {
    title: "Excellence in Women's Healthcare",
    org: "Times Healthcare Awards",
    year: "2023"
  },
  {
    title: "Best IVF Center — Western India",
    org: "FOGSI Annual Awards",
    year: "2022"
  },
  {
    title: "Patient Safety Excellence Award",
    org: "Quality Council of India",
    year: "2023"
  }
];
const VALUES = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "We treat every patient with empathy, dignity, and respect."
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Ethical practice, transparent communication, no surprises."
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "Multidisciplinary collaboration for the best patient outcomes."
  },
  {
    icon: BookOpen,
    title: "Excellence",
    desc: "Continuous learning, research, and clinical innovation."
  }
];
const STATS = [
  { icon: Building2, label: "Hospitals", value: "12+" },
  { icon: Award, label: "Years of Care", value: "26+" },
  { icon: Users, label: "Specialist Doctors", value: "200+" },
  { icon: Heart, label: "Patients/Year", value: "50,000+" },
  { icon: Stethoscope, label: "Deliveries", value: "1L+" },
  { icon: Clock, label: "IVF Babies", value: "5,000+" }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
          alt: "GyneCare Hospital",
          className: "absolute inset-0 h-full w-full object-cover opacity-10"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-muted/40 border-b border-border py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4", children: "About Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold font-display text-foreground max-w-2xl leading-tight mb-4", children: "Two Decades of Compassionate Women's Healthcare" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl", children: "GyneCare Hospital Network — Maharashtra's leading gynecology and women's health provider. NABH accredited since 2004. JCI certified since 2016." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16", children: STATS.map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary mx-auto mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold font-display text-foreground", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label })
      ] }) }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-4", children: "Our Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: "GyneCare was founded in 1998 by Dr. Ramesh Kulkarni with a simple but powerful vision — to create a hospital where every woman feels heard, respected, and cared for with the highest standards of medical excellence." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "Starting with a 50-bed hospital in Pune, we grew into a 12-hospital network across Maharashtra, earning international accreditations and pioneering several first-in-region medical services including the state's first dedicated IVF unit in 2001." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-4", children: "Key Milestones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MILESTONES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-16 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: m.year }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground pt-2", children: m.event })
          ] }, m.year)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated border-l-4 border-l-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-8 w-8 text-primary mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-3", children: "Our Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "To be India's most trusted women's healthcare provider — delivering compassionate, comprehensive, and advanced gynecological care to every woman, irrespective of geography or economic status." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated border-l-4 border-l-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-8 w-8 text-accent mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-3", children: "Our Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "To empower women through healthcare excellence — combining cutting-edge medical technology, skilled specialists, and genuine compassion to improve the quality of life for every patient we serve." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-6", children: "Our Core Values" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16", children: VALUES.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "card-elevated hover:shadow-hospital-lg transition-smooth",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground mb-2", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: desc })
          ] })
        },
        title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-6", children: "Our Leadership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16", children: LEADERSHIP.map((leader) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-primary", children: leader.initials }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground", children: leader.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium", children: leader.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            leader.specialty,
            " · ",
            leader.exp,
            " exp"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground italic text-center border-t border-border pt-4", children: [
          '"',
          leader.quote,
          '"'
        ] })
      ] }) }, leader.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-6", children: "Accreditations & Certifications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12", children: ACCREDITATIONS.map(({ name, full, year, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-primary/10 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold font-display text-primary", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: full }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
          "Since ",
          year
        ] })
      ] }) }, name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-6", children: "Awards & Recognition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: AWARDS.map((award) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5 text-accent" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: award.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: award.org }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mt-1 text-[10px]", children: award.year })
        ] })
      ] }) }, award.title)) })
    ] })
  ] });
}
export {
  AboutPage as default
};
