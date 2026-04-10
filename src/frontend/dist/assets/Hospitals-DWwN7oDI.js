import { r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, d as Button, X, M as MapPin, P as Phone, e as Mail, C as Clock, b as Link } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { H as HOSPITALS_DATA } from "./api-lGWS4sD5.js";
import { m as motion } from "./proxy-x8WbTewr.js";
import { B as Building2 } from "./building-2-BWmfPg8U.js";
import { U as Users } from "./users-BHLa9Wrx.js";
import { B as BedDouble } from "./bed-double-B2rfoqOd.js";
import { S as Shield } from "./shield-yfEaFPs_.js";
import { S as Search } from "./search-BUMl6jTQ.js";
import { C as CircleCheckBig } from "./circle-check-big-CMno_QKW.js";
const EXTENDED_HOSPITALS = [
  ...HOSPITALS_DATA,
  {
    id: "h4",
    name: "GyneCare Hospital — Aurangabad",
    address: "Cidco Colony, N-2 Area",
    city: "Aurangabad",
    state: "Maharashtra",
    pincode: "431003",
    phone: "+91 98765 43213",
    email: "aurangabad@gynecarehosp.in",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    facilities: ["OT Suite", "NICU", "IVF Lab", "24x7 Emergency", "Radiology"],
    bedCapacity: 150,
    doctorCount: 25,
    emergencyAvailable: true,
    coordinates: { lat: 19.8762, lng: 75.3433 }
  },
  {
    id: "h5",
    name: "GyneCare Hospital — Nagpur",
    address: "Sitabuldi, Central Avenue",
    city: "Nagpur",
    state: "Maharashtra",
    pincode: "440012",
    phone: "+91 98765 43214",
    email: "nagpur@gynecarehosp.in",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    facilities: ["ICU", "Pathology", "Blood Bank", "Pharmacy"],
    bedCapacity: 200,
    doctorCount: 35,
    emergencyAvailable: true,
    coordinates: { lat: 21.1458, lng: 79.0882 }
  },
  {
    id: "h6",
    name: "GyneCare Hospital — Kolhapur",
    address: "Rajarampuri, 7th Lane",
    city: "Kolhapur",
    state: "Maharashtra",
    pincode: "416008",
    phone: "+91 98765 43215",
    email: "kolhapur@gynecarehosp.in",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    facilities: ["OPD", "Laparoscopy Suite", "Pathology", "Radiology"],
    bedCapacity: 100,
    doctorCount: 15,
    emergencyAvailable: false,
    coordinates: { lat: 16.705, lng: 74.2433 }
  }
];
const CITIES = [...new Set(EXTENDED_HOSPITALS.map((h) => h.city))];
function HospitalsPage() {
  const [search, setSearch] = reactExports.useState("");
  const [selectedCity, setSelectedCity] = reactExports.useState("");
  const [selectedHospital, setSelectedHospital] = reactExports.useState(
    null
  );
  const filtered = EXTENDED_HOSPITALS.filter((h) => {
    const matchCity = !selectedCity || h.city === selectedCity;
    const matchSearch = !search || h.name.toLowerCase().includes(search.toLowerCase()) || h.city.toLowerCase().includes(search.toLowerCase());
    return matchCity && matchSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-primary/10 via-background to-accent/5 py-14 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3 w-3 mr-1" }),
            "Our Network"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold font-display text-foreground mb-3", children: "Our Hospital Branches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl", children: "Comprehensive women's healthcare across Maharashtra — state-of-the-art facilities and dedicated specialists." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-primary" }),
              EXTENDED_HOSPITALS.length,
              "+ Hospitals"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-primary" }),
              "200+ Specialists"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-4 w-4 text-primary" }),
              "2000+ Beds"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary" }),
              "NABH Accredited"
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-5 sticky top-0 z-20 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search hospital name or city...",
              className: "w-full h-10 rounded-lg border border-input bg-background pl-9 pr-4 text-sm focus:ring-2 focus:ring-primary outline-none",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              "data-ocid": "hospital-search"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: "h-10 rounded-lg border border-input bg-background px-4 text-sm",
            value: selectedCity,
            onChange: (e) => setSelectedCity(e.target.value),
            "data-ocid": "hospital-city-filter",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Cities" }),
              CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
            ]
          }
        ),
        (search || selectedCity) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            className: "gap-1",
            onClick: () => {
              setSearch("");
              setSelectedCity("");
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
              " Clear"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
        filtered.length,
        " hospital",
        filtered.length !== 1 ? "s" : "",
        " found"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8", children: filtered.map((hospital, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.07 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated hover:shadow-hospital-lg transition-smooth overflow-hidden group h-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-52 overflow-hidden bg-muted relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: hospital.imageUrl,
                alt: hospital.name,
                className: "h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: hospital.emergencyAvailable && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-xs", children: "24×7 Emergency" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold font-display text-lg leading-tight line-clamp-2", children: hospital.name }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  hospital.address,
                  ", ",
                  hospital.city,
                  " — ",
                  hospital.pincode
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: `tel:${hospital.phone}`,
                    className: "hover:text-primary transition-colors",
                    children: hospital.phone
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hospital.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "OPD: Mon–Sat, 8AM–8PM" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-lg p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm", children: hospital.bedCapacity }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Beds" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-lg p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-sm", children: [
                  hospital.doctorCount,
                  "+"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Doctors" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2", children: "Key Facilities:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
                hospital.facilities.slice(0, 5).map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[10px] flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-2.5 w-2.5 text-primary" }),
                      " ",
                      f
                    ]
                  },
                  f
                )),
                hospital.facilities.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
                  "+",
                  hospital.facilities.length - 5,
                  " more"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  className: "flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm",
                  onClick: () => setSelectedHospital(hospital),
                  "data-ocid": "hospital-view-details-btn",
                  children: "View Details"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm", children: "Book Appointment" }) })
            ] })
          ] })
        ] })
      },
      hospital.id
    )) }) }),
    selectedHospital && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 m-0 max-w-none w-full h-full",
        onClick: () => setSelectedHospital(null),
        onKeyDown: (e) => e.key === "Escape" && setSelectedHospital(null),
        open: true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            className: "bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-56 overflow-hidden rounded-t-2xl bg-muted", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: selectedHospital.imageUrl,
                    alt: selectedHospital.name,
                    className: "h-full w-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "icon",
                    variant: "ghost",
                    className: "absolute top-3 right-3 bg-foreground/40 hover:bg-foreground/60 text-white rounded-full",
                    onClick: () => setSelectedHospital(null),
                    "data-ocid": "hospital-modal-close",
                    "aria-label": "Close modal",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
                  selectedHospital.emergencyAvailable && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground mb-2 text-xs", children: "24×7 Emergency" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold font-display text-2xl leading-tight", children: selectedHospital.name })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 rounded-xl p-4 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-6 w-6 text-primary mx-auto mb-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xl", children: selectedHospital.bedCapacity }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Total Beds" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/5 rounded-xl p-4 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-accent mx-auto mb-1" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xl", children: [
                      selectedHospital.doctorCount,
                      "+"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Specialists" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
                    " Location & Contact"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-4 space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                      selectedHospital.address,
                      ", ",
                      selectedHospital.city,
                      ",",
                      " ",
                      selectedHospital.state,
                      " — ",
                      selectedHospital.pincode
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-primary" }),
                      selectedHospital.phone
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5 text-primary" }),
                      selectedHospital.email
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-3", children: "All Facilities" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: selectedHospital.facilities.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 text-sm text-muted-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-primary flex-shrink-0" }),
                        f
                      ]
                    },
                    f
                  )) })
                ] }),
                selectedHospital.emergencyAvailable && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/10 border border-accent/20 rounded-xl p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-accent mb-1", children: "Emergency Contact" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: "+91 98765 43200" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Available 24×7 for medical emergencies" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl h-48 flex items-center justify-center text-muted-foreground text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 mr-2 text-primary" }),
                  "Map placeholder — ",
                  selectedHospital.city,
                  ", Maharashtra"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-primary hover:bg-primary/90", children: "Book Appointment" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      className: "flex-1",
                      onClick: () => setSelectedHospital(null),
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
  HospitalsPage as default
};
