import { c as createLucideIcon, r as reactExports, w as useDirection, o as useControllableState, j as jsxRuntimeExports, R as Root, n as Primitive, p as useComposedRefs, I as Item, q as composeEventHandlers, y as createRovingFocusGroupScope, m as Presence, v as createContextScope, s as useSize, a as cn, a8 as useNavigate, a6 as useAuth, H as Heart, d as Button, B as Badge, b as Link, ab as isValidPhone, l as ue, a9 as isValidEmail, aa as setToken } from "./index-BC5Mp0jx.js";
import { C as Card, a as CardContent } from "./card-e7giuW1n.js";
import { I as Input } from "./input-BSJwKJi-.js";
import { L as Label } from "./label-CzIsgjvI.js";
import { u as usePrevious } from "./index-fRJ40FUG.js";
import { d as apiRegister } from "./api-CYf9rHFU.js";
import { B as Baby } from "./baby-_JX3BFnV.js";
import { S as Stethoscope } from "./stethoscope-Cj43DEtK.js";
import { S as Shield } from "./shield-Db6tlE-G.js";
import { m as motion } from "./proxy-B6dE8xqr.js";
import { E as EyeOff } from "./eye-off-DVw_j-lL.js";
import { E as Eye } from "./eye-D5HRy5Q5.js";
import { C as ChevronRight } from "./chevron-right-Bn0K1w0g.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode);
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadio,
      name,
      checked = false,
      required,
      disabled,
      value = "on",
      onCheck,
      form,
      ...radioProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": checked,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...radioProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            if (!checked) onCheck == null ? void 0 : onCheck();
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        RadioBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.checked, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }
);
RadioIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = reactExports.forwardRef(
  ({
    __scopeRadio,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "radio",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext] = createContextScope(RADIO_GROUP_NAME, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadioGroup,
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? null,
      onChange: onValueChange,
      caller: RADIO_GROUP_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RadioGroupProvider,
      {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Primitive.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
              }
            )
          }
        )
      }
    );
  }
);
RadioGroup$1.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = reactExports.useRef(false);
    reactExports.useEffect(() => {
      const handleKeyDown = (event) => {
        if (ARROW_KEYS.includes(event.key)) {
          isArrowKeyPressedRef.current = true;
        }
      };
      const handleKeyUp = () => isArrowKeyPressedRef.current = false;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Radio,
          {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: () => context.onValueChange(itemProps.value),
            onKeyDown: composeEventHandlers((event) => {
              if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: composeEventHandlers(itemProps.onFocus, () => {
              var _a;
              if (isArrowKeyPressedRef.current) (_a = ref.current) == null ? void 0 : _a.click();
            })
          }
        )
      }
    );
  }
);
RadioGroupItem$1.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }
);
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup$1;
var Item2 = RadioGroupItem$1;
var Indicator = RadioGroupIndicator;
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Item2,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const DEMO_OTP = "123456";
const DOCTOR_SPECIALITIES = [
  "Obstetrics & Gynecology",
  "Infertility & IVF",
  "Gynecologic Oncology",
  "Maternal-Fetal Medicine",
  "Menopause Specialist",
  "General Practice"
];
const ROLE_ROUTES = {
  patient: "/dashboard/patient",
  doctor: "/dashboard/doctor",
  admin: "/dashboard/admin"
};
function RegisterPage() {
  const navigate = useNavigate();
  const { loginAsRole } = useAuth();
  const [step, setStep] = reactExports.useState(1);
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [otpSent, setOtpSent] = reactExports.useState(false);
  const [otpVerified, setOtpVerified] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    role: "patient",
    password: "",
    confirmPassword: "",
    abhaId: "",
    otp: "",
    speciality: "",
    qualifications: ""
  });
  const set = (field, value) => setForm((f) => ({ ...f, [field]: value }));
  const handleSendOtp = () => {
    if (!form.phone || !isValidPhone(form.phone)) {
      ue.error("Enter a valid 10-digit phone number first");
      return;
    }
    setOtpSent(true);
    ue.success("OTP sent! Use 123456 for demo.");
  };
  const handleVerifyOtp = () => {
    if (form.otp !== DEMO_OTP) {
      ue.error("Invalid OTP. Use 123456 for demo.");
      return;
    }
    setOtpVerified(true);
    ue.success("Phone number verified!");
  };
  const handleNextStep = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      ue.error("Full name is required");
      return;
    }
    if (!isValidEmail(form.email)) {
      ue.error("Enter a valid email");
      return;
    }
    if (!isValidPhone(form.phone)) {
      ue.error("Enter a valid 10-digit phone");
      return;
    }
    if (!otpVerified) {
      ue.error("Please verify your phone number first");
      return;
    }
    if (!form.password || form.password.length < 6) {
      ue.error("Password must be at least 6 characters");
      return;
    }
    if (form.password !== form.confirmPassword) {
      ue.error("Passwords do not match");
      return;
    }
    if (form.role === "doctor") {
      if (!form.speciality) {
        ue.error("Please select a speciality");
        return;
      }
      if (!form.qualifications.trim()) {
        ue.error("Please enter your qualifications");
        return;
      }
    }
    setStep(2);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiRegister({
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
        role: form.role,
        abhaId: form.abhaId || void 0
      });
      setToken(res.token);
      loginAsRole({
        id: String(res.user.id),
        name: res.user.name,
        email: res.user.email,
        phone: res.user.phone,
        role: res.user.role,
        avatar: res.user.avatar
      });
      ue.success("Account created successfully! Welcome to GyneCare.");
      void navigate({ to: ROLE_ROUTES[form.role] });
    } catch (err) {
      loginAsRole({
        id: `user-${Date.now()}`,
        name: form.name,
        email: form.email,
        phone: form.phone,
        role: form.role
      });
      ue.success("Account created! Welcome to GyneCare.");
      void navigate({ to: ROLE_ROUTES[form.role] });
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-primary/80 flex-col justify-between p-12 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/hero-gynecology.dim_1400x600.jpg",
          alt: "",
          className: "h-full w-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-card/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-primary-foreground fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-display text-primary-foreground text-xl", children: "GyneCare" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold font-display text-primary-foreground leading-tight mb-4", children: [
          "Join Maharashtra's",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Trusted Health Platform"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-lg max-w-sm", children: "Register once to access appointments, medical records, pregnancy tracking, and more." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 space-y-3", children: [
        { icon: Baby, text: "Pregnancy & menstrual cycle tracker" },
        { icon: Stethoscope, text: "Book appointments in 60 seconds" },
        {
          icon: Shield,
          text: "ABHA integration for digital health records"
        }
      ].map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 bg-card/10 rounded-xl p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(feat.icon, { className: "h-5 w-5 text-primary-foreground flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-primary-foreground/90", children: feat.text })
          ]
        },
        feat.text
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center p-6 lg:p-12 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "w-full max-w-md py-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8 lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-accent fill-accent/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-display text-foreground text-xl", children: "GyneCare" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-foreground", children: "Create Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
                "Step ",
                step,
                " of 2 —",
                " ",
                step === 1 ? "Your Details" : "Review & Confirm"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-2 w-10 rounded-full transition-smooth ${s <= step ? "bg-primary" : "bg-muted"}`
              },
              s
            )) })
          ] }),
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated shadow-hospital", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleNextStep, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "name",
                  value: form.name,
                  onChange: (e) => set("name", e.target.value),
                  placeholder: "e.g. Prachi Desai",
                  className: "mt-1",
                  "data-ocid": "register-name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "email",
                  type: "email",
                  value: form.email,
                  onChange: (e) => set("email", e.target.value),
                  placeholder: "you@example.com",
                  className: "mt-1",
                  "data-ocid": "register-email"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Mobile Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "phone",
                    type: "tel",
                    value: form.phone,
                    onChange: (e) => set("phone", e.target.value),
                    placeholder: "9876543210",
                    className: "flex-1",
                    "data-ocid": "register-phone"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "sm",
                    className: "flex-shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                    onClick: handleSendOtp,
                    children: otpSent ? "Resend" : "Send OTP"
                  }
                )
              ] }),
              otpSent && !otpVerified && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "text",
                      inputMode: "numeric",
                      placeholder: "6-digit OTP",
                      maxLength: 6,
                      className: "tracking-widest text-center",
                      value: form.otp,
                      onChange: (e) => set("otp", e.target.value.replace(/\D/g, "")),
                      "data-ocid": "register-otp"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      size: "sm",
                      className: "flex-shrink-0 bg-primary hover:bg-primary/90",
                      onClick: handleVerifyOtp,
                      children: "Verify"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1", children: [
                  "Demo OTP: ",
                  DEMO_OTP
                ] })
              ] }),
              otpVerified && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary font-medium mt-1 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3 w-3" }),
                " Phone verified"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block", children: "I am a" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                RadioGroup,
                {
                  value: form.role,
                  onValueChange: (v) => set("role", v),
                  className: "flex gap-4",
                  "data-ocid": "register-role",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "patient", id: "r-patient" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "r-patient", children: "Patient" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: "doctor", id: "r-doctor" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "r-doctor", children: "Doctor" })
                    ] })
                  ]
                }
              )
            ] }),
            form.role === "doctor" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "reg-speciality", children: "Speciality" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "reg-speciality",
                    className: "w-full mt-1 h-10 rounded-lg border border-input bg-background px-3 text-sm focus:ring-2 focus:ring-primary outline-none",
                    value: form.speciality,
                    onChange: (e) => set("speciality", e.target.value),
                    "data-ocid": "register-speciality",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select speciality" }),
                      DOCTOR_SPECIALITIES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "reg-qualifications", children: "Qualifications" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "reg-qualifications",
                    placeholder: "e.g. MD, DGO, FRCOG",
                    className: "mt-1",
                    value: form.qualifications,
                    onChange: (e) => set("qualifications", e.target.value),
                    "data-ocid": "register-qualifications"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Label,
                {
                  htmlFor: "reg-abha",
                  className: "flex items-center gap-2",
                  children: [
                    "ABHA ID",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "Optional" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "reg-abha",
                  placeholder: "14-digit ABHA number",
                  className: "mt-1",
                  value: form.abhaId,
                  onChange: (e) => set("abhaId", e.target.value),
                  "data-ocid": "register-abha"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1", children: "Link your Ayushman Bharat Health Account" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "reg-password", children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "reg-password",
                    type: showPassword ? "text" : "password",
                    value: form.password,
                    onChange: (e) => set("password", e.target.value),
                    placeholder: "Min. 6 characters",
                    className: "pr-9",
                    "data-ocid": "register-password"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowPassword((v) => !v),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                    "aria-label": showPassword ? "Hide password" : "Show password",
                    children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "reg-confirm", children: "Confirm Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "reg-confirm",
                  type: "password",
                  value: form.confirmPassword,
                  onChange: (e) => set("confirmPassword", e.target.value),
                  placeholder: "Repeat password",
                  className: "mt-1",
                  "data-ocid": "register-confirm-password"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "submit",
                className: "w-full bg-primary hover:bg-primary/90 font-semibold h-11 gap-2",
                "data-ocid": "register-next",
                children: [
                  "Continue ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                ]
              }
            )
          ] }) }) }),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated shadow-hospital", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRegister, className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-3", children: "Review Your Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 rounded-xl p-4 space-y-2.5", children: [
              { label: "Name", value: form.name },
              {
                label: "Role",
                value: form.role.charAt(0).toUpperCase() + form.role.slice(1)
              },
              { label: "Email", value: form.email },
              { label: "Phone", value: form.phone },
              ...form.role === "doctor" ? [
                { label: "Speciality", value: form.speciality },
                {
                  label: "Qualifications",
                  value: form.qualifications
                }
              ] : [],
              ...form.abhaId ? [{ label: "ABHA ID", value: form.abhaId }] : []
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: row.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: row.value })
                ]
              },
              row.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "By registering, you agree to GyneCare's",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  className: "text-primary hover:underline",
                  children: "Terms of Service"
                }
              ),
              " ",
              "and",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  className: "text-primary hover:underline",
                  children: "Privacy Policy"
                }
              ),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  className: "flex-1",
                  onClick: () => setStep(1),
                  children: "Back"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold",
                  disabled: loading,
                  "data-ocid": "register-submit",
                  children: loading ? "Creating Account…" : "Create Account"
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-4", children: [
            "Already have an account?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/login",
                className: "text-primary hover:underline font-medium",
                "data-ocid": "register-login-link",
                children: "Sign In"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
export {
  RegisterPage as default
};
