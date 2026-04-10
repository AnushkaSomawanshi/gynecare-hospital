import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, L as Layout, b as Link, B as Badge, U as User, i as Calendar, C as Clock, d as Button, F as Facebook, T as Twitter, H as Heart } from "./index-BC5Mp0jx.js";
import { B as BlogCard } from "./BlogCard-XLMbD6Zk.js";
import { B as BLOGS_DATA } from "./api-CYf9rHFU.js";
import { m as motion } from "./proxy-B6dE8xqr.js";
import { B as BookOpen } from "./book-open-l7fQ34ES.js";
import "./card-e7giuW1n.js";
import "./arrow-right-Dqt0vUt9.js";
import "./tag-C_IXQIad.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
];
const Link2 = createLucideIcon("link-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
const FULL_ARTICLE_CONTENT = `
Pregnancy is a remarkable journey that transforms not just your body but your entire life. At GyneCare, we believe every expectant mother deserves comprehensive, accurate information to navigate this experience with confidence.

## First Trimester (Weeks 1–12)

The first trimester is a time of rapid development. Your baby grows from a single fertilized cell to a recognizable human form with a beating heart by week 6.

**What you'll experience:**
- Nausea (morning sickness) — peaks around weeks 8–10
- Breast tenderness and frequent urination
- Fatigue as your body builds the placenta
- Emotional changes due to hormonal shifts

**Key milestones:**
- Week 6: Heart begins beating (120–160 bpm)
- Week 10: Baby is now technically a fetus
- Week 12: Risk of miscarriage drops significantly

**Important appointments:**
- First prenatal visit (weeks 8–10): Blood tests, Rh factor, STI screening
- NT (Nuchal Translucency) scan: Weeks 11–13 for Down syndrome screening

## Second Trimester (Weeks 13–26)

Most women feel a surge of energy in the second trimester. Nausea eases and you'll feel your baby's first movements — "quickening" — around weeks 18–22.

**Key milestones:**
- Week 16: Baby can make facial expressions
- Week 20: Halfway point — Anatomy scan is done
- Week 24: Baby reaches "viability"
- Week 26: Eyes are fully formed and can open

**Important appointments:**
- Anomaly Scan / Level II Ultrasound: Weeks 18–20
- Glucose Challenge Test (GCT): Screens for gestational diabetes

## Third Trimester (Weeks 27–40)

Your baby is gaining weight rapidly. By week 36, baby is considered "early term."

**Key milestones:**
- Week 28: Baby can hear sounds
- Week 37: "Full term" begins
- Week 40: Estimated due date

## When to Call Your Doctor Immediately

- Heavy vaginal bleeding at any stage
- Severe abdominal pain or cramping
- Reduced fetal movement after week 28
- Signs of preeclampsia: Sudden severe headache, visual changes, sudden swelling
- Fluid leaking from vagina before 37 weeks

## Nutrition Essentials During Pregnancy

Good nutrition is the foundation of a healthy pregnancy:

- **Folic Acid**: 400–800 mcg/day — prevents neural tube defects
- **Iron**: 27 mg/day — prevents anemia (leafy greens, dals)
- **Calcium**: 1,000 mg/day — for baby's bones and teeth
- **Protein**: 70–100 g/day — for baby's growth
- **Omega-3**: For brain development (fish, walnuts, flaxseed)

Avoid raw meat, unpasteurized dairy, excess caffeine, and alcohol entirely.
`;
function InlineText({ text, prefix }) {
  const parts = text.split(/\*\*([^*]+)\*\*/);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: parts.map(
    (part, k) => k % 2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "strong",
      {
        className: "text-foreground",
        children: part
      },
      `${prefix}-b-${part.slice(0, 8)}`
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: part }, `${prefix}-t-${part.slice(0, 8)}-${k}`)
  ) });
}
function ArticleContent({ content }) {
  const paragraphs = content.trim().split("\n\n");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: paragraphs.map((para) => {
    const trimmed = para.trim();
    const slug = trimmed.slice(0, 30).replace(/\W/g, "-");
    if (!trimmed) return null;
    if (trimmed.startsWith("## ")) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-xl font-bold font-display text-foreground mt-8 mb-3 border-b border-border pb-2",
          children: trimmed.slice(3)
        },
        `h-${slug}`
      );
    }
    if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
      const lines = trimmed.split("\n");
      const items = lines.filter((l) => l.startsWith("- ")).map((l) => l.slice(2));
      const header = lines[0];
      const hasHeader = !header.startsWith("- ");
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        hasHeader && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: header }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 pl-4", children: items.map((item) => {
          const itemSlug = item.slice(0, 20).replace(/\W/g, "-");
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2 text-muted-foreground text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InlineText, { text: item, prefix: itemSlug }) })
              ]
            },
            `li-${itemSlug}`
          );
        }) })
      ] }, `ul-${slug}`);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-muted-foreground leading-relaxed",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(InlineText, { text: trimmed, prefix: slug })
      },
      `p-${slug}`
    );
  }) });
}
const FEATURED_BLOG = {
  id: "b2",
  title: "Week-by-Week Pregnancy Guide: What to Expect in Each Trimester",
  excerpt: "From the first heartbeat to delivery, our comprehensive guide walks you through every stage of your pregnancy journey with expert tips and insights.",
  content: FULL_ARTICLE_CONTENT,
  category: "Pregnancy & Maternity",
  author: "Dr. Priya Sharma",
  authorRole: "Senior Obstetrician, MD DGO FRCOG",
  imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
  publishedAt: "2026-03-28",
  readTime: 12,
  tags: ["Pregnancy", "Prenatal Care", "Trimester", "Maternal Health"]
};
function BlogDetailPage() {
  var _a;
  const { id } = useParams({ from: "/blogs/$id" });
  const found = BLOGS_DATA.find((b) => b.id === id);
  const blog = found ?? FEATURED_BLOG;
  const displayContent = ((_a = blog.content) == null ? void 0 : _a.trim()) ? blog.content : FULL_ARTICLE_CONTENT;
  const relatedBlogs = BLOGS_DATA.filter((b) => b.id !== blog.id).slice(0, 3);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-primary/10 via-background to-accent/5 py-12 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 max-w-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blogs",
              className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                " Back to All Blogs"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-4", children: blog.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold font-display text-foreground mb-6 leading-tight", children: blog.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-xs", children: blog.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", children: blog.authorRole })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-primary" }),
              new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary" }),
              blog.readTime,
              " min read"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5 text-primary" }),
              blog.tags.slice(0, 2).join(", ")
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-12 max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.2 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-72 md:h-96 rounded-2xl overflow-hidden mb-8 bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: blog.imageUrl,
                  alt: blog.title,
                  className: "h-full w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground border-l-4 border-primary pl-5 mb-8 italic leading-relaxed", children: blog.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleContent, { content: displayContent }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-6 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-3", children: "Tags:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: blog.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tag)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-5 bg-muted/40 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-4 w-4 text-primary" }),
                " Share this article"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "gap-1.5",
                    onClick: () => window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                      "_blank"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-3.5 w-3.5" }),
                      " Facebook"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "gap-1.5",
                    onClick: () => window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`,
                      "_blank"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-3.5 w-3.5" }),
                      " Twitter"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "gap-1.5",
                    onClick: handleCopyLink,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-3.5 w-3.5" }),
                      " Copy Link"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-5 bg-primary/5 border border-primary/10 rounded-xl flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-7 w-7 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: blog.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary font-medium", children: blog.authorRole }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: "Expert gynecologist at GyneCare Hospital with over 15 years of clinical experience in women's health. Passionate about evidence-based patient care and women's wellness education." })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.3 },
            className: "bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-6 border border-primary/10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-8 w-8 text-accent mb-3 fill-accent/20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground text-lg mb-2", children: "Need a Consultation?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Book an appointment with our specialists today." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-primary hover:bg-primary/90 font-semibold gap-2", children: "Book Appointment" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground text-lg mb-4", children: "Related Articles" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: relatedBlogs.map((related) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCard, { blog: related, variant: "minimal" }, related.id)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.5 },
            className: "bg-card rounded-xl border border-border p-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground text-base mb-3", children: "Browse Categories" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                "Pregnancy",
                "PCOS",
                "Fertility",
                "Cancer Prevention",
                "Maternal Care",
                "Menopause"
              ].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blogs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth text-xs",
                  children: cat
                }
              ) }, cat)) })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  BlogDetailPage as default
};
