import { r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, d as Button, X, S as Skeleton, f as ChevronDown, M as MapPin, C as Clock, b as Link } from "./index-BC5Mp0jx.js";
import { a as useDoctors, b as useSpecialities, c as useDoctorLocations, D as DoctorCard } from "./useDoctors-CmlSLZ42.js";
import { I as Input } from "./input-BSJwKJi-.js";
import { m as motion } from "./proxy-B6dE8xqr.js";
import { U as Users } from "./users-B9A_VLy5.js";
import { S as Search } from "./search-xoLpDCP2.js";
import { S as Star } from "./star-DLrFNl00.js";
import { L as Languages } from "./languages-fh8TtGHb.js";
import { A as Award } from "./award-W05SP_w9.js";
import "./card-e7giuW1n.js";
import "./api-CYf9rHFU.js";
import "./useQuery-cq7-2WTq.js";
function FindDoctorPage() {
  const [location, setLocation] = reactExports.useState("");
  const [speciality, setSpeciality] = reactExports.useState("");
  const [search, setSearch] = reactExports.useState("");
  const [selectedDoctor, setSelectedDoctor] = reactExports.useState(null);
  const [visibleCount, setVisibleCount] = reactExports.useState(8);
  const { data: doctors = [], isLoading } = useDoctors({
    location: location || void 0,
    speciality: speciality || void 0
  });
  const { data: specialities = [] } = useSpecialities();
  const { data: locations = [] } = useDoctorLocations();
  const filtered = doctors.filter(
    (d) => !search || d.name.toLowerCase().includes(search.toLowerCase())
  );
  const visible = filtered.slice(0, visibleCount);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-primary/10 via-background to-accent/5 py-14 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3 mr-1" }),
            " Find Specialists"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold font-display text-foreground mb-3", children: "Find a Doctor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg max-w-xl", children: [
            "Search from ",
            doctors.length,
            "+ specialist gynecologists across Maharashtra. Book same-day appointments."
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-5 sticky top-0 z-20 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Search by doctor name...",
              className: "pl-9",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              "data-ocid": "find-doctor-search"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: "h-10 rounded-lg border border-input bg-background px-4 text-sm min-w-[150px]",
            value: location,
            onChange: (e) => setLocation(e.target.value),
            "data-ocid": "find-doctor-location",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Locations" }),
              locations.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: l, children: l }, l))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: "h-10 rounded-lg border border-input bg-background px-4 text-sm min-w-[200px]",
            value: speciality,
            onChange: (e) => setSpeciality(e.target.value),
            "data-ocid": "find-doctor-speciality",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Specialities" }),
              specialities.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            className: "bg-primary hover:bg-primary/90 px-6",
            "data-ocid": "find-doctor-search-btn",
            children: "Search"
          }
        ),
        (search || location || speciality) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            className: "gap-1",
            onClick: () => {
              setSearch("");
              setLocation("");
              setSpeciality("");
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
              " Clear"
            ]
          }
        )
      ] }),
      !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
        filtered.length,
        " doctor",
        filtered.length !== 1 ? "s" : "",
        " found"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-10", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"].map(
      (sk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full" })
      ] }, sk)
    ) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "find-doctor-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-12 w-12 text-muted-foreground mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground mb-2", children: "No doctors found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Try adjusting your search filters." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: () => {
            setSearch("");
            setLocation("");
            setSpeciality("");
          },
          children: "Clear Filters"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: visible.map((doctor, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-full text-left",
              onClick: () => setSelectedDoctor(doctor),
              "data-ocid": "doctor-card-container",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorCard, { doctor })
            }
          )
        },
        doctor.id
      )) }),
      visibleCount < filtered.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2",
          onClick: () => setVisibleCount((v) => v + 8),
          "data-ocid": "load-more-doctors",
          children: [
            "Load More Doctors ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
          ]
        }
      ) })
    ] }) }),
    selectedDoctor && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "dialog",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 m-0 max-w-none w-full h-full",
        onClick: () => setSelectedDoctor(null),
        onKeyDown: (e) => e.key === "Escape" && setSelectedDoctor(null),
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
                    src: selectedDoctor.imageUrl,
                    alt: selectedDoctor.name,
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
                    onClick: () => setSelectedDoctor(null),
                    "data-ocid": "doctor-modal-close",
                    "aria-label": "Close modal",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-xs mb-2", children: selectedDoctor.speciality }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-bold font-display text-2xl", children: selectedDoctor.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm", children: selectedDoctor.qualification })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-yellow-400 text-yellow-400" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-lg", children: selectedDoctor.rating })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                      selectedDoctor.reviewCount,
                      " reviews"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-lg", children: selectedDoctor.experience }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Yrs experience" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-lg", children: [
                      "₹",
                      selectedDoctor.consultationFee
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Consultation" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-2", children: "About" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: selectedDoctor.bio })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
                      " Hospital"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedDoctor.hospitalName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedDoctor.location })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Languages, { className: "h-4 w-4 text-primary" }),
                      " Languages"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: selectedDoctor.languages.join(", ") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
                    " Availability"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: selectedDoctor.availableDays.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: day }, day)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-foreground mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 text-primary" }),
                    " Areas of Expertise"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: selectedDoctor.expertise.map((exp) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "bg-primary/10 text-primary border-primary/20 text-xs",
                      children: exp
                    },
                    exp
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold", children: "Book Appointment" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      className: "flex-1",
                      onClick: () => setSelectedDoctor(null),
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
  FindDoctorPage as default
};
