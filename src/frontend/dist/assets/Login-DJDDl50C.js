import { c as createLucideIcon, a8 as useNavigate, a6 as useAuth, r as reactExports, j as jsxRuntimeExports, H as Heart, U as User, P as Phone, d as Button, B as Badge, b as Link, l as ue, a9 as isValidEmail } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { I as Input } from "./input-Dm-38PBp.js";
import { L as Label } from "./label-BrDcTsSh.js";
import { S as Shield } from "./shield-yfEaFPs_.js";
import { m as motion } from "./proxy-x8WbTewr.js";
import { E as EyeOff } from "./eye-off-D7gwBU_X.js";
import { E as Eye } from "./eye-BGS3plMW.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const DEMO_ACCOUNTS = [
  {
    role: "patient",
    email: "patient@demo.in",
    name: "Prachi Desai",
    phone: "9876543210"
  },
  {
    role: "doctor",
    email: "doctor@demo.in",
    name: "Dr. Priya Sharma",
    phone: "9876543211"
  },
  {
    role: "admin",
    email: "admin@demo.in",
    name: "Admin User",
    phone: "9876543212"
  }
];
const DEMO_OTP = "123456";
const ROLE_ROUTES = {
  patient: "/dashboard/patient",
  doctor: "/dashboard/doctor",
  admin: "/dashboard/admin"
};
function LoginPage() {
  const navigate = useNavigate();
  const { loginAsRole } = useAuth();
  const [method, setMethod] = reactExports.useState("password");
  const [role, setRole] = reactExports.useState("patient");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [otpSent, setOtpSent] = reactExports.useState(false);
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const doLogin = async (account) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    loginAsRole({
      id: `user-${account.role}`,
      name: account.name,
      email: account.email,
      phone: account.phone,
      role: account.role
    });
    ue.success(`Welcome back, ${account.name.split(" ")[0]}!`);
    void navigate({ to: ROLE_ROUTES[account.role] });
    setLoading(false);
  };
  const handleSendOtp = () => {
    if (!email.trim()) {
      ue.error("Enter your email or phone first");
      return;
    }
    setOtpSent(true);
    ue.success("OTP sent! Use 123456 for demo.");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      ue.error("Email or phone is required");
      return;
    }
    if (method === "otp") {
      if (!otpSent) {
        ue.error("Please send OTP first");
        return;
      }
      if (otp !== DEMO_OTP) {
        ue.error("Invalid OTP. Use 123456 for demo.");
        return;
      }
    } else {
      if (!isValidEmail(email)) {
        ue.error("Enter a valid email address");
        return;
      }
      if (!password) {
        ue.error("Password is required");
        return;
      }
    }
    const demo = DEMO_ACCOUNTS.find((a) => a.email === email) ?? DEMO_ACCOUNTS.find((a) => a.role === role);
    if (!demo) {
      ue.error("No account found. Try a demo account below.");
      return;
    }
    await doLogin(demo);
  };
  const loginAsDemo = (demo) => doLogin(demo);
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
          "Welcome Back to",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Your Health Portal"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-lg max-w-sm", children: "Access your appointments, medical records, pregnancy tracker, and more — all in one place." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid grid-cols-2 gap-3", children: [
        { icon: Shield, label: "Secure & Private" },
        { icon: Smartphone, label: "OTP Login" },
        { icon: User, label: "Role-Based Access" },
        { icon: Heart, label: "NABH Certified" }
      ].map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2.5 bg-card/10 rounded-xl p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(feat.icon, { className: "h-4 w-4 text-primary-foreground flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-primary-foreground/90", children: feat.label })
          ]
        },
        feat.label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center p-6 lg:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "w-full max-w-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8 lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6 text-accent fill-accent/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-display text-foreground text-xl", children: "GyneCare" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-display text-foreground mb-2", children: "Sign In" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Access your patient or doctor portal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6 bg-muted rounded-xl p-1", children: DEMO_ACCOUNTS.map((acc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setRole(acc.role),
              className: `py-2.5 rounded-lg text-sm font-semibold transition-smooth capitalize ${role === acc.role ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`,
              "data-ocid": `role-${acc.role}`,
              children: acc.role
            },
            acc.role
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 mb-6 border-b border-border", children: ["password", "otp"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setMethod(m);
                setOtpSent(false);
                setOtp("");
              },
              className: `pb-2 text-sm font-medium transition-smooth border-b-2 -mb-px ${method === m ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`,
              "data-ocid": `login-method-${m}`,
              children: m === "password" ? "Password" : "OTP Login"
            },
            m
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated shadow-hospital", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "login-email", className: "text-sm font-medium", children: method === "otp" ? "Mobile Number / Email" : "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
                  method === "otp" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "login-email",
                      type: method === "otp" ? "tel" : "email",
                      placeholder: method === "otp" ? "+91 XXXXX XXXXX" : "you@example.com",
                      className: "pl-9",
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      "data-ocid": "login-email"
                    }
                  )
                ] })
              ] }),
              method === "password" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: "login-password",
                      className: "text-sm font-medium",
                      children: "Password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-xs text-primary hover:underline",
                      children: "Forgot password?"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "login-password",
                      type: showPassword ? "text" : "password",
                      placeholder: "••••••••",
                      className: "pr-9",
                      value: password,
                      onChange: (e) => setPassword(e.target.value),
                      "data-ocid": "login-password"
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
              method === "otp" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: !otpSent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  className: "w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                  onClick: handleSendOtp,
                  children: "Send OTP"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: "login-otp",
                    className: "text-sm font-medium flex items-center gap-2",
                    children: [
                      "Enter OTP",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
                        "Demo: ",
                        DEMO_OTP
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "login-otp",
                    type: "text",
                    inputMode: "numeric",
                    placeholder: "6-digit OTP",
                    maxLength: 6,
                    className: "mt-1.5 tracking-widest text-center text-lg",
                    value: otp,
                    onChange: (e) => setOtp(e.target.value.replace(/\D/g, "")),
                    "data-ocid": "login-otp"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleSendOtp,
                    className: "text-xs text-primary hover:underline mt-1",
                    children: "Resend OTP"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  className: "w-full bg-primary hover:bg-primary/90 font-semibold h-11",
                  disabled: loading,
                  "data-ocid": "login-submit",
                  children: loading ? "Signing in…" : "Sign In"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider", children: "Quick Demo Login" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: DEMO_ACCOUNTS.map((demo) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => loginAsDemo(demo),
                  disabled: loading,
                  className: "p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 text-center transition-smooth",
                  "data-ocid": `demo-login-${demo.role}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "secondary",
                        className: "text-[10px] mb-1 capitalize",
                        children: demo.role
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: demo.name.split(" ")[0] })
                  ]
                },
                demo.role
              )) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-4", children: [
            "New to GyneCare?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/register",
                className: "text-primary hover:underline font-medium",
                "data-ocid": "login-register-link",
                children: "Create Account"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
export {
  LoginPage as default
};
