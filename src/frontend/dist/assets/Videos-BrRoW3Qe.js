import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, l as ue } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { E as Eye } from "./eye-BGS3plMW.js";
import { C as CirclePlay } from "./circle-play-BOqXia-w.js";
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
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode);
const VIDEOS = [
  {
    id: "v1",
    title: "Understanding PCOS: Causes, Symptoms & Treatment",
    duration: "12:45",
    category: "PCOS",
    doctor: "Dr. Anjali Kulkarni",
    views: "48.2K",
    thumbnail: "from-primary/30 to-primary/10"
  },
  {
    id: "v2",
    title: "Your Pregnancy Journey: Week-by-Week Guide (1–12 Weeks)",
    duration: "18:30",
    category: "Pregnancy",
    doctor: "Dr. Priya Sharma",
    views: "62.8K",
    thumbnail: "from-accent/30 to-accent/10"
  },
  {
    id: "v3",
    title: "IVF Treatment: What to Expect at Every Stage",
    duration: "15:20",
    category: "IVF",
    doctor: "Dr. Anjali Kulkarni",
    views: "35.1K",
    thumbnail: "from-primary/30 to-accent/10"
  },
  {
    id: "v4",
    title: "Managing Menopause: Hormonal Changes & Natural Remedies",
    duration: "10:15",
    category: "Menopause",
    doctor: "Dr. Priya Sharma",
    views: "22.4K",
    thumbnail: "from-accent/20 to-primary/20"
  },
  {
    id: "v5",
    title: "Cervical Cancer Prevention & HPV Vaccination Guide",
    duration: "8:50",
    category: "Cancer Prevention",
    doctor: "Dr. Sunita Patil",
    views: "41.7K",
    thumbnail: "from-primary/20 to-accent/20"
  },
  {
    id: "v6",
    title: "Nutrition During Pregnancy: What to Eat & What to Avoid",
    duration: "14:00",
    category: "Nutrition",
    doctor: "Dr. Meera Joshi",
    views: "29.5K",
    thumbnail: "from-accent/30 to-primary/10"
  },
  {
    id: "v7",
    title: "Endometriosis: Diagnosis, Pain Management & Fertility",
    duration: "16:40",
    category: "PCOS",
    doctor: "Dr. Anjali Kulkarni",
    views: "18.3K",
    thumbnail: "from-primary/25 to-accent/15"
  },
  {
    id: "v8",
    title: "High-Risk Pregnancy: Warning Signs You Must Know",
    duration: "11:00",
    category: "Pregnancy",
    doctor: "Dr. Sunita Patil",
    views: "55.6K",
    thumbnail: "from-accent/25 to-primary/25"
  },
  {
    id: "v9",
    title: "Breastfeeding Basics: Latching, Positions & Nutrition",
    duration: "9:30",
    category: "Maternal Care",
    doctor: "Dr. Priya Sharma",
    views: "31.2K",
    thumbnail: "from-primary/30 to-primary/10"
  },
  {
    id: "v10",
    title: "IVF Success Rates: Realistic Expectations & Lifestyle Tips",
    duration: "13:20",
    category: "IVF",
    doctor: "Dr. Anjali Kulkarni",
    views: "27.8K",
    thumbnail: "from-accent/30 to-accent/10"
  }
];
const CATEGORIES = [
  "All",
  "Pregnancy",
  "PCOS",
  "IVF",
  "Nutrition",
  "Maternal Care",
  "Menopause",
  "Cancer Prevention"
];
function VideosPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = activeCategory === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 py-10 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Health Education" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold font-display text-foreground", children: "Health Awareness Videos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-xl", children: "Expert-created educational videos on women's health — pregnancy, PCOS, IVF, nutrition, and more." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "100+ Videos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "5M+ Total Views" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4 text-muted-foreground" }),
        CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: `px-3 py-1.5 text-sm rounded-lg border transition-smooth ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card hover:bg-muted"}`,
            "data-ocid": "video-category-filter",
            children: cat
          },
          cat
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: filtered.map((video) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "card-elevated hover:shadow-hospital-lg transition-smooth group overflow-hidden cursor-pointer",
          onClick: () => ue.info(`Playing: ${video.title}`),
          "data-ocid": `video-card-${video.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `relative h-44 bg-gradient-to-br ${video.thumbnail} flex items-center justify-center overflow-hidden`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-background/80 group-hover:bg-primary/90 group-hover:text-primary-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-10 w-10 text-primary group-hover:text-white transition-smooth" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 right-2 bg-foreground/75 text-card text-xs px-1.5 py-0.5 rounded font-mono", children: video.duration }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 left-2 flex items-center gap-1 bg-background/80 text-foreground text-[10px] px-1.5 py-0.5 rounded", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
                    video.views
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] mb-2", children: video.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm leading-snug mb-2 line-clamp-2", children: video.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: video.doctor })
            ] })
          ]
        },
        video.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-12 w-12 text-primary mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-2", children: "Want More Health Content?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-5", children: "Subscribe to our YouTube channel for weekly expert health videos on women's wellness." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-smooth",
            onClick: () => ue.info("Redirecting to YouTube channel..."),
            "data-ocid": "subscribe-youtube-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-5 w-5" }),
              "Subscribe on YouTube"
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  VideosPage as default
};
