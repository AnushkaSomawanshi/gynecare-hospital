import { r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, b as Link, U as User, C as Clock, d as Button } from "./index-deVTXUcg.js";
import { B as BlogCard } from "./BlogCard-C7cmygoU.js";
import { I as Input } from "./input-Dm-38PBp.js";
import { B as BLOGS_DATA } from "./api-lGWS4sD5.js";
import { m as motion } from "./proxy-x8WbTewr.js";
import { A as ArrowRight } from "./arrow-right-o9-llMe_.js";
import { S as Search } from "./search-BUMl6jTQ.js";
import "./card-BoOULBPe.js";
import "./tag-B7YlnFPM.js";
const EXTENDED_BLOGS = [
  ...BLOGS_DATA,
  {
    id: "b5",
    title: "Menstrual Health 101: When to See a Doctor for Irregular Periods",
    excerpt: "Irregular menstrual cycles can indicate hormonal imbalances, PCOS, thyroid disorders, or other conditions. Understand the red flags and when to seek medical help.",
    content: "",
    category: "Menstrual Health",
    author: "Dr. Meera Joshi",
    authorRole: "Maternal-Fetal Medicine Specialist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-03-10",
    readTime: 7,
    tags: ["Menstrual Health", "Hormones", "PCOS", "Thyroid"]
  },
  {
    id: "b6",
    title: "Endometriosis: The Silent Condition Affecting 1 in 10 Indian Women",
    excerpt: "Endometriosis is frequently misdiagnosed as 'painful periods.' Learn the signs, diagnosis process, and treatment options available at GyneCare.",
    content: "",
    category: "Gynecology",
    author: "Dr. Priya Sharma",
    authorRole: "Senior Obstetrician",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-02-20",
    readTime: 9,
    tags: ["Endometriosis", "Pelvic Pain", "Laparoscopy"]
  },
  {
    id: "b7",
    title: "Postnatal Care: The Essential Guide for New Mothers in India",
    excerpt: "The first 6 weeks after delivery are critical for recovery. Our obstetricians share evidence-based postnatal care tips, from wound care to mental health support.",
    content: "",
    category: "Maternal Care",
    author: "Dr. Priya Sharma",
    authorRole: "Senior Obstetrician",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-01-15",
    readTime: 11,
    tags: ["Postnatal", "Maternal Health", "New Mothers"]
  },
  {
    id: "b8",
    title: "Menopause and You: Managing Symptoms Naturally and with HRT",
    excerpt: "Menopause doesn't have to be debilitating. From hormone replacement therapy to lifestyle changes, explore science-backed strategies for a smooth transition.",
    content: "",
    category: "Menopause",
    author: "Dr. Sunita Patil",
    authorRole: "Gynecologic Oncologist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2026-01-05",
    readTime: 8,
    tags: ["Menopause", "HRT", "Hormones", "Wellness"]
  },
  {
    id: "b9",
    title: "Prenatal Nutrition: A Comprehensive Diet Guide for Indian Pregnant Women",
    excerpt: "Proper nutrition during pregnancy is vital for both mother and baby. Our dietitians and obstetricians provide a comprehensive guide tailored for Indian dietary habits.",
    content: "",
    category: "Pregnancy",
    author: "Dr. Meera Joshi",
    authorRole: "Maternal-Fetal Medicine Specialist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2025-12-12",
    readTime: 10,
    tags: ["Prenatal Nutrition", "Pregnancy Diet", "Vitamins"]
  },
  {
    id: "b10",
    title: "HPV Vaccine for Girls: Age, Schedule, and Why It Matters",
    excerpt: "HPV vaccination can prevent up to 90% of cervical cancers. Understand the recommended schedule, safety profile, and why every girl in India should be vaccinated.",
    content: "",
    category: "Cancer Prevention",
    author: "Dr. Sunita Patil",
    authorRole: "Gynecologic Oncologist",
    imageUrl: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
    publishedAt: "2025-11-20",
    readTime: 6,
    tags: ["HPV", "Cervical Cancer", "Vaccination", "Prevention"]
  }
];
const CATEGORIES = [
  "All",
  "Pregnancy",
  "PCOS",
  "Fertility",
  "Cancer Prevention",
  "Maternal Care",
  "Menstrual Health",
  "Menopause",
  "Gynecology"
];
function BlogsPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const featuredBlog = EXTENDED_BLOGS[1];
  const filtered = EXTENDED_BLOGS.filter((b) => {
    const matchCat = activeCategory === "All" || b.category.includes(activeCategory) || b.tags.includes(activeCategory);
    const matchSearch = !search || b.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  const gridBlogs = activeCategory === "All" && !search ? filtered.filter((b) => b.id !== featuredBlog.id) : filtered;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-primary/10 via-background to-accent/5 py-14 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Health Insights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold font-display text-foreground mb-3", children: "Women's Health Blogs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl", children: "Expert articles by our specialist doctors — covering pregnancy, fertility, cancer prevention, and all aspects of women's wellness." })
        ]
      }
    ) }) }),
    activeCategory === "All" && !search && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-wider mb-4", children: "Featured Article" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blogs/$id", params: { id: featuredBlog.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl overflow-hidden border border-border hover:shadow-hospital-lg transition-smooth bg-card flex flex-col md:flex-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 h-64 md:h-auto overflow-hidden bg-muted relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: featuredBlog.imageUrl,
                  alt: featuredBlog.title,
                  className: "h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-card text-foreground shadow-hospital", children: featuredBlog.category }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-1/2 p-8 flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs mb-3 w-fit", children: "Featured" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-smooth leading-tight", children: featuredBlog.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 line-clamp-3", children: featuredBlog.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5 text-primary" }),
                  featuredBlog.author
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary" }),
                  featuredBlog.readTime,
                  " min read"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-smooth", children: [
                "Read Full Article ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ] })
            ] })
          ] }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveCategory(cat),
          className: `px-4 py-1.5 rounded-full text-sm font-medium transition-smooth ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/70 text-muted-foreground"}`,
          "data-ocid": `blog-category-${cat.toLowerCase().replace(/\s+/g, "-")}`,
          children: cat
        },
        cat
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-64", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Search articles...",
            className: "pl-9",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            "data-ocid": "blog-search"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 pb-16", children: gridBlogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "No articles found for your search." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          className: "mt-4",
          onClick: () => {
            setActiveCategory("All");
            setSearch("");
          },
          children: "Clear Filters"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: gridBlogs.map((blog, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.07 },
        className: "h-full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCard, { blog, className: "h-full" })
      },
      blog.id
    )) }) })
  ] });
}
export {
  BlogsPage as default
};
