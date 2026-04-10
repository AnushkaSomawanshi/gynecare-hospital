import { r as reactExports, j as jsxRuntimeExports, L as Layout, B as Badge, P as Phone, d as Button, e as Mail, M as MapPin, C as Clock, l as ue, f as ChevronDown } from "./index-deVTXUcg.js";
import { C as Card, a as CardContent } from "./card-BoOULBPe.js";
import { I as Input } from "./input-Dm-38PBp.js";
import { L as Label } from "./label-BrDcTsSh.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CJJhmbyI.js";
import { T as Textarea } from "./textarea-CaUyXWKd.js";
import { S as Star } from "./star-ByA27dFh.js";
import "./index-Cw0Oz6AY.js";
import "./check-xX2AxDPD.js";
const BRANCHES = [
  {
    name: "GyneCare Hospital — Pune Main",
    address: "Survey No. 341, Model Colony, Shivajinagar",
    city: "Pune, Maharashtra 411016",
    phone: "+91 20 2567 8900",
    email: "pune@gynecarehosp.in",
    hours: "OPD: 8AM–8PM · Emergency: 24×7"
  },
  {
    name: "GyneCare Hospital — Mumbai",
    address: "B-12, Turner Road, Bandra West",
    city: "Mumbai, Maharashtra 400050",
    phone: "+91 22 4567 8900",
    email: "mumbai@gynecarehosp.in",
    hours: "OPD: 8AM–8PM · Emergency: 24×7"
  },
  {
    name: "GyneCare Hospital — Nashik",
    address: "Opp. Old CBS, College Road",
    city: "Nashik, Maharashtra 422005",
    phone: "+91 253 2567 890",
    email: "nashik@gynecarehosp.in",
    hours: "OPD: 9AM–7PM · Emergency: 24×7"
  }
];
const FAQS = [
  {
    q: "How do I book an appointment?",
    a: "You can book online via our website, call our helpline (+91 98765 43210), or walk in to any GyneCare branch. Online booking is available 24×7."
  },
  {
    q: "What documents should I carry for my first visit?",
    a: "Please carry a government-issued photo ID, any existing medical reports, prescriptions, and your insurance card if applicable."
  },
  {
    q: "Does GyneCare accept health insurance?",
    a: "Yes, we work with 40+ insurance companies including Star Health, ICICI Lombard, Medi Assist, and major government schemes including Ayushman Bharat."
  },
  {
    q: "How can I access my lab reports online?",
    a: "Log in to the GyneCare patient portal using your registered mobile number. Reports are uploaded within 24 hours of collection."
  },
  {
    q: "What is the consultation fee for a gynecologist?",
    a: "Consultation fees range from ₹500–₹1,200 depending on the specialist and whether it is a first visit or follow-up. IVF specialist consultations start at ₹1,500."
  },
  {
    q: "Is there parking available at the hospitals?",
    a: "All three branches have dedicated multi-level parking. Pune and Mumbai offer valet services. Parking is free for the first 2 hours."
  },
  {
    q: "Can I get a teleconsultation outside business hours?",
    a: "Our teleconsultation service is available Monday–Saturday 8AM–9PM. For emergencies, our 24×7 helpline connects you to an on-call doctor."
  },
  {
    q: "How long does it take to get a second opinion report?",
    a: "Our specialist second opinion reports are typically ready within 48 hours for standard cases. Complex cases may take up to 72 hours."
  },
  {
    q: "Is the pregnancy tracker available without logging in?",
    a: "The basic pregnancy calendar is publicly accessible. Detailed week-by-week tracking with personalized data requires login."
  },
  {
    q: "How do I cancel or reschedule an appointment?",
    a: "Appointments can be cancelled or rescheduled up to 4 hours before the scheduled time through our website, app, or helpline."
  }
];
const SUBJECTS = [
  "General Inquiry",
  "Appointment Help",
  "Billing & Insurance",
  "Feedback",
  "Complaint",
  "Media / PR",
  "Career",
  "Other"
];
function ContactPage() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [rating, setRating] = reactExports.useState(0);
  const [hoverRating, setHoverRating] = reactExports.useState(0);
  const handleContact = (e) => {
    e.preventDefault();
    ue.success("Message sent! We'll get back to you within 24 hours.");
  };
  const handleFeedback = (e) => {
    e.preventDefault();
    if (!rating) {
      ue.error("Please provide a star rating");
      return;
    }
    ue.success("Thank you for your feedback!");
    setRating(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 py-10 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold font-display text-foreground", children: "Help & Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-xl", children: "We're here to help you 24×7. Reach us by phone, email, or visit any of our branches." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-xl px-4 py-3 w-fit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "24×7 Helpline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: "+91 98765 43210" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-6", children: "Send Us a Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleContact, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-name", children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-name",
                    placeholder: "Your full name",
                    className: "mt-1",
                    "data-ocid": "contact-name-input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-phone", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contact-phone",
                    placeholder: "9876543210",
                    className: "mt-1"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-email", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "contact-email",
                  type: "email",
                  placeholder: "you@example.com",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-subject", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    id: "contact-subject",
                    className: "mt-1",
                    "data-ocid": "contact-subject-select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select subject" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: SUBJECTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectItem,
                  {
                    value: s.toLowerCase().replace(/\s/g, "-"),
                    children: s
                  },
                  s
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-message", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "contact-message",
                  placeholder: "How can we help you?",
                  className: "mt-1 min-h-[120px]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "w-full btn-primary",
                "data-ocid": "contact-submit-btn",
                children: "Send Message"
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-6", children: "Contact Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
            {
              icon: Phone,
              label: "Helpline (24×7)",
              value: "+91 98765 43210",
              sub: "Emergency: 1800-200-1234 (Toll Free)"
            },
            {
              icon: Mail,
              label: "Email",
              value: "info@gynecarehosp.in",
              sub: "Response within 24 hours"
            },
            {
              icon: MapPin,
              label: "Head Office",
              value: "Model Colony, Shivajinagar, Pune — 411016",
              sub: "Maharashtra, India"
            },
            {
              icon: Clock,
              label: "OPD Hours",
              value: "Monday–Saturday: 8AM–8PM",
              sub: "Emergency department: 24×7 all days"
            }
          ].map(({ icon: Icon, label, value, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: sub })
            ] })
          ] }) }, label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-6", children: "Our Locations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mb-16", children: BRANCHES.map((branch) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "card-elevated hover:shadow-hospital-lg transition-smooth",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 rounded-xl bg-primary/10 items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display text-foreground mb-2", children: branch.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: branch.address }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: branch.city }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                branch.phone
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3" }),
                branch.email
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                branch.hours
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                className: "w-full mt-4 gap-1",
                onClick: () => ue.info("Map opens in Google Maps"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
                  "Get Directions"
                ]
              }
            )
          ] })
        },
        branch.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold font-display mb-6", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-16", "data-ocid": "faq-section", children: FAQS.map((faq, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpenFaq(openFaq === idx ? null : idx),
            className: "w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-smooth",
            "data-ocid": "faq-item",
            "aria-expanded": openFaq === idx,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground pr-4", children: faq.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: `h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        openFaq === idx && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: faq.a }) })
      ] }, faq.q)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold font-display mb-5", children: "Share Your Feedback" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleFeedback, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Overall Experience" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mt-2", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onMouseEnter: () => setHoverRating(star),
                  onMouseLeave: () => setHoverRating(0),
                  onClick: () => setRating(star),
                  className: "transition-smooth",
                  "aria-label": `${star} star${star > 1 ? "s" : ""}`,
                  "data-ocid": "feedback-star",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Star,
                    {
                      className: `h-8 w-8 transition-colors ${(hoverRating || rating) >= star ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`
                    }
                  )
                },
                star
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "feedback-name", children: "Your Name (Optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "feedback-name",
                  placeholder: "Anonymous if blank",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "feedback-dept", children: "Department Visited" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "feedback-dept",
                  placeholder: "e.g., OPD, Emergency, IVF",
                  className: "mt-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "feedback-message", children: "Your Feedback" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "feedback-message",
                  placeholder: "Tell us about your experience...",
                  className: "mt-1 min-h-[100px]",
                  "data-ocid": "feedback-textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "w-full btn-accent",
                "data-ocid": "feedback-submit-btn",
                children: "Submit Feedback"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated bg-primary/5 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display mb-4", children: "Emergency Contacts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
              {
                label: "24×7 Emergency (All Branches)",
                number: "1800-200-1234"
              },
              { label: "Blood Bank Emergency", number: "1800-200-5678" },
              {
                label: "ICU / NICU Helpline",
                number: "+91 20 6789 0101"
              },
              {
                label: "Ambulance Services",
                number: "102 / +91 20 6789 0000"
              }
            ].map(({ label, number }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between border-b border-border pb-2 last:border-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: `tel:${number}`,
                      className: "font-bold text-primary text-sm hover:underline",
                      children: number
                    }
                  )
                ]
              },
              label
            )) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold font-display mb-3", children: "Social Media" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Follow GyneCare for health tips, doctor Q&As, and hospital updates." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
              "Facebook",
              "Instagram",
              "Twitter/X",
              "YouTube",
              "LinkedIn"
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-3 py-1.5 bg-muted rounded-lg text-xs font-medium border border-border cursor-pointer hover:bg-primary/10 transition-smooth",
                children: s
              },
              s
            )) })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as default
};
