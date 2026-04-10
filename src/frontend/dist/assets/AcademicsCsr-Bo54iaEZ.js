import { c as createLucideIcon, r as reactExports, w as useDirection, o as useControllableState, j as jsxRuntimeExports, n as Primitive, x as useId, R as Root, I as Item, q as composeEventHandlers, m as Presence, y as createRovingFocusGroupScope, v as createContextScope, a as cn, L as Layout, B as Badge, H as Heart, d as Button, l as ue } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent } from "./card-e7giuW1n.js";
import { I as Input } from "./input-BSJwKJi-.js";
import { L as Label } from "./label-CzIsgjvI.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BlNDTFp-.js";
import { T as Textarea } from "./textarea-CVfMRzLX.js";
import { F as FlaskConical } from "./flask-conical-De6BECjQ.js";
import { U as Users } from "./users-B9A_VLy5.js";
import { B as BookOpen } from "./book-open-l7fQ34ES.js";
import "./index-fRJ40FUG.js";
import "./check-CrakWNYS.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
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
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
];
const IndianRupee = createLucideIcon("indian-rupee", __iconNode);
var TABS_NAME = "Tabs";
var [createTabsContext] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
const FELLOWSHIPS = [
  {
    name: "Fellowship in Gynecological Oncology",
    duration: "2 years",
    seats: 4,
    eligibility: "MS/MD OBG"
  },
  {
    name: "Fellowship in Reproductive Medicine & IVF",
    duration: "1 year",
    seats: 6,
    eligibility: "MS/MD OBG"
  },
  {
    name: "Fellowship in Fetal Medicine",
    duration: "1 year",
    seats: 3,
    eligibility: "MS/MD OBG"
  },
  {
    name: "DNB Obstetrics & Gynaecology",
    duration: "3 years",
    seats: 8,
    eligibility: "MBBS + Internship"
  },
  {
    name: "Post-Doctoral Fellowship, Minimal Access Surgery",
    duration: "1 year",
    seats: 4,
    eligibility: "MS/MD Surgery or OBG"
  }
];
const NURSING_PROGRAMS = [
  {
    name: "B.Sc. Nursing (Affiliated)",
    duration: "4 years",
    intake: "30 seats/year"
  },
  {
    name: "Post-Basic B.Sc. Nursing",
    duration: "2 years",
    intake: "20 seats/year"
  },
  {
    name: "Critical Care Nursing Certificate",
    duration: "6 months",
    intake: "15 seats/batch"
  }
];
const PAPERS = [
  {
    title: "Laparoscopic management of endometriosis — 5-year outcomes at GyneCare",
    journal: "Journal of Minimally Invasive Gynecology",
    year: "2025",
    authors: "Kulkarni A, Sharma P, Patil S"
  },
  {
    title: "Cumulative live birth rate after frozen embryo transfer: a retrospective cohort study",
    journal: "Human Reproduction",
    year: "2024",
    authors: "Sharma P, Joshi M, Desai R"
  },
  {
    title: "Prevalence of PCOS in urban Maharashtra — a cross-sectional study",
    journal: "Indian Journal of Endocrinology",
    year: "2024",
    authors: "Kulkarni A, Pawar N"
  },
  {
    title: "Maternal outcomes in high-risk pregnancies managed with a multidisciplinary protocol",
    journal: "BJOG: International Journal of Obstetrics",
    year: "2023",
    authors: "Patil S, Sharma P, Kulkarni A"
  }
];
const CSR_INITIATIVES = [
  {
    title: "Free Cervical Cancer Screening Camps",
    impact: "14,000+ women screened",
    icon: Heart,
    desc: "Monthly free Pap smear and HPV screening camps in rural Maharashtra."
  },
  {
    title: "Maternal Health Awareness Program",
    impact: "200+ villages covered",
    icon: Users,
    desc: "Door-to-door maternal health education in Pune, Nashik, and Ahmednagar districts."
  },
  {
    title: "Subsidized IVF for Underprivileged",
    impact: "500+ families helped",
    icon: Heart,
    desc: "70% subsidy on IVF treatments for families with annual income below ₹3 lakhs."
  },
  {
    title: "School Health Education",
    impact: "80+ schools reached",
    icon: GraduationCap,
    desc: "Menstrual hygiene and reproductive health education programs in government schools."
  },
  {
    title: "Rural Health Outreach Clinics",
    impact: "Weekly clinics in 30 villages",
    icon: Users,
    desc: "Mobile OBG clinics providing consultations and medicines in underserved areas."
  },
  {
    title: "Blood Donation Drives",
    impact: "2,000+ units collected/year",
    icon: Heart,
    desc: "Quarterly blood donation camps at hospitals and corporate offices."
  }
];
const RESEARCH_PROJECTS = [
  {
    title: "Long-term Outcomes of Minimally Invasive Hysterectomy",
    status: "Ongoing",
    pi: "Dr. Anjali Kulkarni",
    collab: "AIIMS Delhi"
  },
  {
    title: "AI-assisted Ultrasound Screening for Ovarian Cancer",
    status: "Ongoing",
    pi: "Dr. Sunita Patil",
    collab: "IIT Bombay"
  },
  {
    title: "Gut Microbiome in Endometriosis — Phase II Clinical Trial",
    status: "Recruiting",
    pi: "Dr. Priya Sharma",
    collab: "Tata Institute"
  },
  {
    title: "Predictors of IVF Success in Women with PCOS",
    status: "Analysis",
    pi: "Dr. Meera Joshi",
    collab: "GyneCare Research Cell"
  }
];
const DONATION_PURPOSES = [
  "Free Cervical Cancer Screening",
  "Subsidized IVF Program",
  "Maternal & Neonatal Care Fund",
  "Medical Education Scholarship",
  "Rural Health Outreach Program",
  "Blood Bank Support",
  "General CSR Fund"
];
const PRESET_AMOUNTS = [500, 1e3, 2500, 5e3, 1e4];
function AcademicsCsrPage() {
  const handleDonate = (e) => {
    e.preventDefault();
    ue.success(
      "Thank you for your generous donation! A receipt will be emailed to you."
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 py-10 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Knowledge & Community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold font-display text-foreground", children: "Academics, CSR & Research" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Advancing gynecology through education, research, and community care" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "academics", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "flex flex-wrap h-auto gap-1 mb-8 bg-muted p-1 rounded-xl w-full sm:w-auto",
          "data-ocid": "acad-tabs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "academics",
                className: "gap-1.5",
                "data-ocid": "tab-academics",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4" }),
                  "Academics"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "csr", className: "gap-1.5", "data-ocid": "tab-csr", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
              "CSR"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "research",
                className: "gap-1.5",
                "data-ocid": "tab-research",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-4 w-4" }),
                  "Research"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value: "donate",
                className: "gap-1.5",
                "data-ocid": "tab-donate",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4" }),
                  "Donate"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "academics", className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold font-display mb-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-6 w-6 text-primary" }),
            "Fellowship & Residency Programs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FELLOWSHIPS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center justify-between gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: f.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                "Duration: ",
                f.duration,
                " · Eligibility: ",
                f.eligibility
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
                f.seats,
                " seats"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "sm",
                  variant: "outline",
                  className: "text-xs",
                  onClick: () => ue.info(
                    "Applications open in July. Email academics@gynecarehosp.in"
                  ),
                  children: "Apply"
                }
              )
            ] })
          ] }) }, f.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold font-display mb-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6 text-primary" }),
            "Nursing Training Programs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: NURSING_PROGRAMS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-foreground mb-2", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Duration: ",
              p.duration
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Intake: ",
              p.intake
            ] })
          ] }) }, p.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold font-display mb-5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6 text-primary" }),
            "Published Research Papers"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: PAPERS.map((paper) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground leading-snug mb-1", children: paper.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                paper.journal,
                " · ",
                paper.year
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: paper.authors })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "icon",
                variant: "ghost",
                className: "flex-shrink-0 h-7 w-7",
                "aria-label": "View paper",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" })
              }
            )
          ] }) }) }, paper.title)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "csr", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold font-display mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-accent" }),
          "Community Social Responsibility Initiatives"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: CSR_INITIATIVES.map(({ title, impact, icon: Icon, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "card-elevated hover:shadow-hospital-lg transition-smooth",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground mb-2", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-0 text-xs", children: impact })
            ] })
          },
          title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-border p-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-12 w-12 text-accent mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display text-foreground mb-2", children: "Partner With Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-5 max-w-lg mx-auto", children: "Corporates, NGOs, and individuals — join GyneCare's CSR mission for women's health in Maharashtra." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              className: "btn-accent",
              onClick: () => ue.info("Partnership inquiries: csr@gynecarehosp.in"),
              children: "Become a CSR Partner"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "research", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold font-display mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-6 w-6 text-primary" }),
          "Active Research Projects"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: RESEARCH_PROJECTS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-sm leading-snug", children: r.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `flex-shrink-0 text-[11px] ${r.status === "Ongoing" ? "bg-green-100 text-green-700 border-green-200" : r.status === "Recruiting" ? "bg-primary/15 text-primary border-primary/20" : "bg-muted text-muted-foreground border-border"}`,
                  children: r.status
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              "PI: ",
              r.pi
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Collaboration: ",
              r.collab
            ] })
          ] })
        ] }) }, r.title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated mt-8 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground mb-2", children: "Research Collaboration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Interested in research collaboration or funding our studies? Contact our Research Director." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "research@gynecarehosp.in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Dr. Anjali Kulkarni — Research Director, GyneCare Hospital Network" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "donate", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display text-foreground mb-3", children: "Support Women's Health" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Your donation directly funds free healthcare services for underprivileged women across Maharashtra. All donations are eligible for tax exemption under Section 80G of the Income Tax Act." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            { amount: "₹500", impact: "Funds 1 Pap smear screening" },
            {
              amount: "₹1,000",
              impact: "Provides prenatal vitamins for 1 month"
            },
            {
              amount: "₹5,000",
              impact: "Covers OPD consultation for 5 women"
            },
            {
              amount: "₹10,000",
              impact: "Supports 1 IVF subsidy contribution"
            }
          ].map(({ amount, impact }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-primary font-display", children: amount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: impact })
              ]
            },
            amount
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-muted/40 rounded-xl p-4 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground mb-1", children: "80G Tax Exemption" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "GyneCare Foundation is a registered NGO under Section 12A. All donations are eligible for 50% tax deduction. Receipt issued within 24 hours." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground mb-5", children: "Make a Donation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleDonate, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donate-name", children: "Donor Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "donate-name",
                  placeholder: "Your full name",
                  className: "mt-1",
                  "data-ocid": "donate-name-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donate-email", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "donate-email",
                  type: "email",
                  placeholder: "you@email.com",
                  className: "mt-1",
                  "data-ocid": "donate-email-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donate-phone", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "donate-phone",
                  placeholder: "9876543210",
                  className: "mt-1",
                  "data-ocid": "donate-phone-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donate-purpose", children: "Donation Purpose" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    id: "donate-purpose",
                    className: "mt-1",
                    "data-ocid": "donate-purpose-select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select purpose" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DONATION_PURPOSES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectItem,
                  {
                    value: p.toLowerCase().replace(/\s/g, "-"),
                    children: p
                  },
                  p
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Amount (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-1 mb-2", children: PRESET_AMOUNTS.map((amt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "px-3 py-1.5 rounded-lg border border-border bg-card text-sm font-medium hover:border-primary hover:text-primary transition-smooth",
                  "data-ocid": `donate-preset-${amt}`,
                  children: [
                    "₹",
                    amt.toLocaleString("en-IN")
                  ]
                },
                amt
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Or enter custom amount",
                  type: "number",
                  min: "100",
                  "data-ocid": "donate-amount-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "donate-message", children: "Message (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "donate-message",
                  placeholder: "In memory of / In honor of...",
                  className: "mt-1",
                  rows: 2,
                  "data-ocid": "donate-message-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                className: "w-full btn-accent font-semibold",
                "data-ocid": "donate-submit-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 mr-2" }),
                  "Donate Now"
                ]
              }
            )
          ] })
        ] }) })
      ] }) })
    ] }) })
  ] });
}
export {
  AcademicsCsrPage as default
};
