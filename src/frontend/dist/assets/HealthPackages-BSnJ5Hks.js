import { r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, d as Button, X, b as Link } from "./index-deVTXUcg.js";
import { P as PackageCard } from "./PackageCard-CsHvpiHV.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { P as PACKAGES_DATA } from "./api-lGWS4sD5.js";
import { m as motion } from "./proxy-x8WbTewr.js";
import { S as ShieldCheck } from "./shield-check-Y_wOtwsA.js";
import { F as FlaskConical } from "./flask-conical-VkoKxzet.js";
import { C as CircleCheckBig } from "./circle-check-big-CMno_QKW.js";
import { T as Tag } from "./tag-B7YlnFPM.js";
const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "NABL Accredited Labs",
    desc: "All tests conducted in our state-of-the-art NABL-certified pathology labs."
  },
  {
    icon: FlaskConical,
    title: "Same-Day Results",
    desc: "Most basic tests deliver reports within 6-8 hours of sample collection."
  },
  {
    icon: CircleCheckBig,
    title: "Home Collection",
    desc: "Free sample collection at your doorstep for all packages above ₹1,999."
  },
  {
    icon: Tag,
    title: "Best Price Guarantee",
    desc: "Our packages are priced 30-40% below market rates for equivalent tests."
  }
];
const GENDER_FILTERS = [
  { id: "all", label: "All Packages" },
  { id: "female", label: "For Women" },
  { id: "both", label: "For Everyone" }
];
function HealthPackagesPage() {
  const [genderFilter, setGenderFilter] = reactExports.useState("all");
  const [selectedPackage, setSelectedPackage] = reactExports.useState(
    null
  );
  const filtered = PACKAGES_DATA.filter((p) => {
    if (genderFilter === "all") return true;
    if (genderFilter === "female") return p.gender === "female";
    if (genderFilter === "both") return p.gender === "both";
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3 mr-1" }),
            " Preventive Care"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold font-display text-foreground mb-4", children: "Preventive Health Packages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mb-6", children: "Curated health checkup bundles for comprehensive women's wellness — from cancer screening to fertility assessment, all at affordable prices." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary/10 text-primary rounded-full px-4 py-1.5 font-medium", children: "5 Curated Packages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-accent/10 text-accent rounded-full px-4 py-1.5 font-medium", children: "NABL Certified Labs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary/10 text-primary rounded-full px-4 py-1.5 font-medium", children: "Home Collection Available" })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Filter by:" }),
      GENDER_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setGenderFilter(f.id),
          className: `px-5 py-2 rounded-full text-sm font-medium transition-smooth ${genderFilter === f.id ? "bg-primary text-primary-foreground shadow-hospital" : "bg-muted hover:bg-muted/70 text-muted-foreground"}`,
          "data-ocid": `package-filter-${f.id}`,
          children: f.label
        },
        f.id
      ))
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((pkg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "w-full text-left",
            onClick: () => setSelectedPackage(pkg),
            "data-ocid": "package-card-view",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCard, { pkg })
          }
        )
      },
      pkg.id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Why GyneCare Packages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-foreground mb-2", children: "Everything Included" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Our health packages combine quality, convenience, and affordability." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: WHY_CHOOSE.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated text-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-primary/10 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-7 w-7 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
          ] }) })
        },
        item.title
      )) })
    ] }) }),
    selectedPackage && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 m-0 max-w-none w-full h-full",
        onClick: () => setSelectedPackage(null),
        onKeyDown: (e) => e.key === "Escape" && setSelectedPackage(null),
        open: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            className: "bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-t-2xl relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "icon",
                    variant: "ghost",
                    className: "absolute top-4 right-4 rounded-full",
                    onClick: () => setSelectedPackage(null),
                    "data-ocid": "package-modal-close",
                    "aria-label": "Close modal",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-7 w-7 text-primary" }) }),
                selectedPackage.popular && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-xs mb-2", children: "MOST POPULAR" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-xs mb-2 flex w-fit items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-2.5 w-2.5" }),
                      " ",
                      selectedPackage.category
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display text-foreground mb-2", children: selectedPackage.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: selectedPackage.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-muted/40 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Package Price" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-bold text-foreground", children: [
                      "₹",
                      selectedPackage.price.toLocaleString("en-IN")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground line-through", children: [
                      "₹",
                      selectedPackage.originalPrice.toLocaleString("en-IN")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/10 text-primary text-sm px-3 py-1", children: [
                      Math.round(
                        (selectedPackage.originalPrice - selectedPackage.price) / selectedPackage.originalPrice * 100
                      ),
                      "% OFF"
                    ] }),
                    selectedPackage.ageGroup && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
                      "Age: ",
                      selectedPackage.ageGroup
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-primary" }),
                    "All Included Tests (",
                    selectedPackage.testCount,
                    " total)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    selectedPackage.tests.map((test) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" }),
                          test
                        ]
                      },
                      test
                    )),
                    selectedPackage.testCount > selectedPackage.tests.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary font-medium col-span-2", children: [
                      "+",
                      selectedPackage.testCount - selectedPackage.tests.length,
                      " ",
                      "additional tests"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold", children: "Book This Package" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      className: "flex-1",
                      onClick: () => setSelectedPackage(null),
                      children: "Close"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
export {
  HealthPackagesPage as default
};
