import { j as jsxRuntimeExports, h as formatCurrency, b as Link, d as Button, a as cn, B as Badge } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent, b as CardHeader } from "./card-e7giuW1n.js";
import { F as FlaskConical } from "./flask-conical-De6BECjQ.js";
import { T as Tag } from "./tag-C_IXQIad.js";
import { C as CircleCheckBig } from "./circle-check-big-DIS2-WFy.js";
function PackageCard({
  pkg,
  variant = "default",
  className
}) {
  const discount = Math.round(
    (pkg.originalPrice - pkg.price) / pkg.originalPrice * 100
  );
  if (variant === "compact") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: cn(
          "card-elevated hover:shadow-hospital-lg transition-smooth group",
          className
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm truncate", children: pkg.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              pkg.testCount,
              " tests included"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-sm", children: formatCurrency(pkg.price) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/health-packages", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "text-xs mt-1", children: "Book" }) })
          ] })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: cn(
        "card-elevated hover:shadow-hospital-lg transition-smooth group relative overflow-hidden",
        pkg.popular && "ring-2 ring-accent ring-offset-2",
        className
      ),
      "data-ocid": "package-card",
      children: [
        pkg.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg", children: "POPULAR" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "text-[10px] px-2 py-0 mb-2 flex-shrink-0 w-fit",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-2.5 w-2.5 mr-1" }),
                  pkg.category
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground font-display text-base leading-tight line-clamp-2", children: pkg.name })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 line-clamp-2", children: pkg.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-2 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3.5 w-3.5 text-primary" }),
              "Included Tests (",
              pkg.testCount,
              " total):"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              pkg.tests.slice(0, 4).map((test) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-xs text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" }),
                    test
                  ]
                },
                test
              )),
              pkg.tests.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary font-medium", children: [
                "+",
                pkg.tests.length - 4,
                " more tests"
              ] })
            ] })
          ] }),
          pkg.ageGroup && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Age Group:" }),
            " ",
            pkg.ageGroup
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-foreground", children: formatCurrency(pkg.price) }),
                discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/10 text-primary text-[10px] px-1.5 py-0", children: [
                  discount,
                  "% OFF"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-through", children: formatCurrency(pkg.originalPrice) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", "data-ocid": "package-card-book-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-accent text-sm font-semibold", children: "Book Now" }) })
          ] })
        ] })
      ]
    }
  );
}
export {
  PackageCard as P
};
