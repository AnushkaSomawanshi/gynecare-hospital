import { j as jsxRuntimeExports, B as Badge, U as User, C as Clock, b as Link, d as Button, a as cn, k as formatDate, t as truncateText } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent } from "./card-e7giuW1n.js";
import { A as ArrowRight } from "./arrow-right-Dqt0vUt9.js";
import { T as Tag } from "./tag-C_IXQIad.js";
function BlogCard({
  blog,
  variant = "default",
  className
}) {
  if (variant === "horizontal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: cn(
          "card-elevated hover:shadow-hospital-lg transition-smooth group overflow-hidden",
          className
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-48 sm:h-auto sm:w-48 flex-shrink-0 overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: blog.imageUrl,
              alt: blog.title,
              className: "h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col justify-between flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] mb-2", children: blog.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display text-lg mb-2 line-clamp-2 group-hover:text-primary transition-smooth", children: blog.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 mb-3", children: blog.excerpt })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3 text-primary" }),
                  blog.author
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 text-primary" }),
                  blog.readTime,
                  " min read"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/blogs/$id",
                  params: { id: blog.id },
                  "data-ocid": "blog-card-read-btn",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      className: "text-primary hover:text-primary text-xs gap-1",
                      children: [
                        "Read More ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                      ]
                    }
                  )
                }
              )
            ] })
          ] })
        ] })
      }
    );
  }
  if (variant === "minimal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn("flex items-start gap-3 group cursor-pointer", className),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: blog.imageUrl,
              alt: blog.title,
              className: "h-full w-full object-cover group-hover:scale-105 transition-smooth",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blogs/$id", params: { id: blog.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-smooth", children: blog.title }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              formatDate(blog.publishedAt),
              " · ",
              blog.readTime,
              " min"
            ] })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: cn(
        "card-elevated hover:shadow-hospital-lg transition-smooth group overflow-hidden h-full flex flex-col",
        className
      ),
      "data-ocid": "blog-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: blog.imageUrl,
              alt: blog.title,
              className: "h-full w-full object-cover group-hover:scale-105 transition-smooth duration-500",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-card text-foreground text-[10px] px-2 shadow-hospital", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-2.5 w-2.5 mr-1 text-primary" }),
            blog.category
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display text-base mb-2 line-clamp-2 group-hover:text-primary transition-smooth leading-snug", children: blog.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 flex-1 line-clamp-3", children: truncateText(blog.excerpt, 120) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[80px]", children: blog.author })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 text-primary" }),
                blog.readTime,
                " min read"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto", children: formatDate(blog.publishedAt) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/blogs/$id",
                params: { id: blog.id },
                "data-ocid": "blog-card-read-btn",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "w-full gap-2 text-xs group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-smooth",
                    children: [
                      "Read Article ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                    ]
                  }
                )
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  BlogCard as B
};
