import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as Presence, n as Primitive, o as useControllableState, p as useComposedRefs, q as composeEventHandlers, s as useSize, v as createContextScope, a as cn, L as Layout, B as Badge, C as Clock, d as Button, l as ue } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { u as usePrevious } from "./index-Cw0Oz6AY.js";
import { C as Check } from "./check-xX2AxDPD.js";
import { I as Input } from "./input-Dm-38PBp.js";
import { L as Label } from "./label-BrDcTsSh.js";
import { F as FlaskConical } from "./flask-conical-VkoKxzet.js";
import { S as Star } from "./star-ByA27dFh.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = reactExports.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control == null ? void 0 : control.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = reactExports.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
const LAB_TESTS = [
  {
    id: "t1",
    name: "Complete Blood Count (CBC)",
    desc: "Evaluates overall health and detects disorders like anaemia and infection.",
    time: "Same Day",
    price: 350,
    category: "Haematology"
  },
  {
    id: "t2",
    name: "Lipid Profile",
    desc: "Measures cholesterol levels and cardiovascular risk factors.",
    time: "Same Day",
    price: 550,
    category: "Biochemistry"
  },
  {
    id: "t3",
    name: "Blood Sugar (FBS + PPBS)",
    desc: "Fasting and post-prandial blood glucose screening for diabetes.",
    time: "4 Hours",
    price: 180,
    category: "Biochemistry"
  },
  {
    id: "t4",
    name: "HbA1c (Glycated Haemoglobin)",
    desc: "3-month average blood sugar control for diabetes management.",
    time: "Same Day",
    price: 480,
    category: "Biochemistry"
  },
  {
    id: "t5",
    name: "Thyroid Panel (TSH, T3, T4)",
    desc: "Assesses thyroid gland function and hormone levels.",
    time: "Same Day",
    price: 650,
    category: "Endocrinology"
  },
  {
    id: "t6",
    name: "Pregnancy Test (Beta-hCG)",
    desc: "Highly sensitive blood test to confirm pregnancy early.",
    time: "4 Hours",
    price: 350,
    category: "Obstetrics"
  },
  {
    id: "t7",
    name: "Pap Smear (Cervical Cytology)",
    desc: "Cervical cancer screening — recommended annually for all women 21+.",
    time: "2–3 Days",
    price: 750,
    category: "Gynecology"
  },
  {
    id: "t8",
    name: "Culture & Sensitivity",
    desc: "Identifies bacterial infection and appropriate antibiotic treatment.",
    time: "3–5 Days",
    price: 900,
    category: "Microbiology"
  },
  {
    id: "t9",
    name: "Vitamin D3 & B12 Panel",
    desc: "Screens for common nutritional deficiencies in women.",
    time: "Same Day",
    price: 1100,
    category: "Nutrition"
  },
  {
    id: "t10",
    name: "PCOS Hormone Panel",
    desc: "LH, FSH, Testosterone, DHEAS for PCOS diagnosis and monitoring.",
    time: "Same Day",
    price: 1800,
    category: "Gynecology"
  },
  {
    id: "t11",
    name: "Prenatal Screening (NT Scan)",
    desc: "First-trimester nuchal translucency scan with serum markers.",
    time: "2 Days",
    price: 2200,
    category: "Obstetrics"
  },
  {
    id: "t12",
    name: "Iron Studies (Serum Ferritin)",
    desc: "Assesses iron stores and diagnoses iron-deficiency anaemia.",
    time: "Same Day",
    price: 420,
    category: "Haematology"
  }
];
const CATEGORIES = [
  "All",
  "Haematology",
  "Biochemistry",
  "Gynecology",
  "Obstetrics",
  "Endocrinology",
  "Microbiology",
  "Nutrition"
];
function LabsPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [selectedTests, setSelectedTests] = reactExports.useState([]);
  const [address, setAddress] = reactExports.useState("");
  const [date, setDate] = reactExports.useState("");
  const filtered = activeCategory === "All" ? LAB_TESTS : LAB_TESTS.filter((t) => t.category === activeCategory);
  const toggleTest = (id) => {
    setSelectedTests(
      (prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };
  const handleHomeCollection = (e) => {
    e.preventDefault();
    if (!address || !date) {
      ue.error("Please fill in all fields");
      return;
    }
    if (selectedTests.length === 0) {
      ue.error("Select at least one test");
      return;
    }
    ue.success(
      "Home sample collection booked! Phlebotomist will arrive between 6–8 AM."
    );
    setAddress("");
    setDate("");
    setSelectedTests([]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 py-10 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Diagnostics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold font-display text-foreground", children: "Laboratory Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-xl", children: "NABL-accredited labs with precision diagnostics. Home sample collection available across Pune, Mumbai, and Nashik." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 mt-6", children: [
        {
          icon: FlaskConical,
          label: "NABL Accredited",
          sub: "Quality assured"
        },
        { icon: Star, label: "Report Online", sub: "Within 24 hours" },
        { icon: House, label: "Home Collection", sub: "Free above ₹999" },
        {
          icon: Truck,
          label: "Fast Turnaround",
          sub: "Same-day results"
        }
      ].map(({ icon: Icon, label, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2.5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: sub })
            ] })
          ]
        },
        label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display", children: "Available Tests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: `px-3 py-1.5 text-sm rounded-lg border transition-smooth ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card hover:bg-muted"}`,
            "data-ocid": "lab-category-filter",
            children: cat
          },
          cat
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16", children: filtered.map((test) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "card-elevated hover:shadow-hospital-lg transition-smooth",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] capitalize", children: test.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground mb-1", children: test.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3 leading-relaxed", children: test.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm border-t border-border pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: test.time })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
                "₹",
                test.price
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "sm",
                className: "w-full mt-3 btn-primary",
                onClick: () => {
                  ue.success(`${test.name} added to cart`);
                },
                "data-ocid": "book-test-btn",
                children: "Book Test"
              }
            )
          ] })
        },
        test.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 rounded-2xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-6 w-6 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display", children: "Home Sample Collection" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Book a phlebotomist at your doorstep" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
            {
              icon: House,
              title: "No Travel Required",
              desc: "Our phlebotomist comes to you between 6–8 AM"
            },
            {
              icon: Star,
              title: "Reports Online",
              desc: "Download your reports from the patient portal"
            },
            {
              icon: Truck,
              title: "Free Collection",
              desc: "No extra charge for orders above ₹999"
            }
          ].map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: desc })
            ] })
          ] }, title)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold font-display mb-5", children: "Book Home Collection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleHomeCollection, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lab-address", children: "Pickup Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "lab-address",
                  placeholder: "Flat no., building, street, city",
                  value: address,
                  onChange: (e) => setAddress(e.target.value),
                  className: "mt-1",
                  "data-ocid": "lab-address-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "lab-date", children: "Preferred Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "lab-date",
                  type: "date",
                  value: date,
                  onChange: (e) => setDate(e.target.value),
                  className: "mt-1",
                  "data-ocid": "lab-date-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block", children: "Select Tests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1", children: LAB_TESTS.map((test) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Checkbox,
                  {
                    id: `test-${test.id}`,
                    checked: selectedTests.includes(test.id),
                    onCheckedChange: () => toggleTest(test.id),
                    "data-ocid": "lab-test-checkbox"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: `test-${test.id}`,
                    className: "text-sm cursor-pointer",
                    children: [
                      test.name,
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground ml-1", children: [
                        "₹",
                        test.price
                      ] })
                    ]
                  }
                )
              ] }, test.id)) })
            ] }),
            selectedTests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 rounded-lg p-3 border border-primary/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-primary", children: [
                "Total: ₹",
                LAB_TESTS.filter(
                  (t) => selectedTests.includes(t.id)
                ).reduce((s, t) => s + t.price, 0)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                selectedTests.length,
                " test(s) selected"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "w-full btn-accent font-semibold",
                "data-ocid": "lab-book-collection-btn",
                children: "Book Home Collection"
              }
            )
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  LabsPage as default
};
