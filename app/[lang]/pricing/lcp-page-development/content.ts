import {
  BracketsAngle,
  ChartBar,
  ChartPieSlice,
  CursorClick,
  Globe,
  Laptop,
  Palette,
  PenNib,
  RocketLaunch,
  ShareNetwork,
  Sparkle,
  SquaresFour,
  Target,
  TrendUp,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const lcpPageDevelopmentContent: PricingSubPageContent = {
  hero: {
    badge: "Landing capture pages engineered for conversion",
    title: "LCP page development pricing for high-velocity MLM launches.",
    description:
      "Activate campaigns that turn curiosity into enrolment. Cloud MLM Software delivers conversion design, automation, and analytics in a single engagement so marketing teams can scale without friction.",
    primaryCta: "Book a launch session",
    secondaryCta: "Compare pricing catalogue",
    metrics: [
      {
        label: "LCPs launched",
        value: "320+",
        description:
          "High-converting landing capture pages for MLM recruitment and product launches.",
        icon: CursorClick,
      },
      {
        label: "Average conversion lift",
        value: "48%",
        description:
          "Compared to legacy lead capture experiences within 60 days of deployment.",
        icon: ChartBar,
      },
      {
        label: "Global rollout support",
        value: "26 markets",
        description:
          "Localization, compliance, and currency handling included in the blueprint.",
        icon: Globe,
      },
      {
        label: "Content refresh velocity",
        value: "2× faster",
        description:
          "Marketing teams publish variants without developer dependency.",
        icon: Sparkle,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Bring strategy, story, and systems together",
      description:
        "Your landing experiences become the heartbeat of recruiting and product storytelling. We combine brand-first design, performance data, and automation to keep audiences moving forward.",
      items: [
        {
          title: "Design systems aligned to story",
          description:
            "Pair brand identity with persuasive storytelling, responsive layouts, and ADA-friendly interactions tailored to your audiences.",
          bullets: [
            "Component library for hero, proof, and CTA sections",
            "Dark and light mode support with colour token guardrails",
            "Micro-interactions tuned for mobile-first experiences",
          ],
          icon: Palette,
        },
        {
          title: "Conversion science built in",
          description:
            "Leverage Cloud MLM Software analytics to craft journeys optimised for recruiting, onboarding, and product sales.",
          bullets: [
            "Dynamic forms tied to compensation segments",
            "Real-time validation, progressive profiling, and consent capture",
            "A/B test-ready layouts with data instrumentation",
          ],
          icon: ChartPieSlice,
        },
        {
          title: "Automation ready",
          description:
            "Connect LCPs to marketing automation, sales enablement, and CRM workflows without custom code every time.",
          bullets: [
            "Instant lead routing to distributors or success teams",
            "Triggered email, SMS, and WhatsApp follow-up sequences",
            "Dashboards revealing segment-level performance",
          ],
          icon: ShareNetwork,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Four-week launch roadmap",
      description:
        "Our cadence keeps decision makers informed while momentum stays high. Expect structured checkpoints, prototypes, and analytics instrumentation at every stage.",
      stages: [
        {
          title: "Blueprint & concept",
          description:
            "Customer journey mapping, creative direction, and conversion goals aligned with stakeholders.",
          duration: "Week 1",
          icon: PenNib,
        },
        {
          title: "Build & integrate",
          description:
            "Low-fi to high-fi evolution, component development, and automation hookups executed in tandem.",
          duration: "Weeks 2-3",
          icon: SquaresFour,
        },
        {
          title: "Launch & optimise",
          description:
            "Quality assurance, launch readiness, and experimentation roadmap prepared for marketing teams.",
          duration: "Week 4",
          icon: BracketsAngle,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages aligned to your campaign velocity",
      description:
        "Whether you're launching a single promotion or orchestrating a global line-up, pick the package that matches your ambitions. Each bundle includes strategy, design, development, and enablement.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Launch Lift",
          price: "$6.5k fixed",
          description: "Pre-launch and product-drop teams",
          outcomes: [
            "Brand narrative workshop + copy kit",
            "Responsive LCP with two hero variations",
            "Automation wiring for initial follow-ups",
          ],
          icon: RocketLaunch,
        },
        {
          title: "Momentum Engine",
          price: "$11k fixed",
          description: "Marketing teams running multiple promos",
          outcomes: [
            "Component library with localisation support",
            "Form variants for recruitment, sampling, and webinars",
            "Conversion dashboard with KPI guardrails",
          ],
          icon: Laptop,
        },
        {
          title: "Enterprise Studio",
          price: "Custom",
          description: "Global enterprises with multi-team collaboration",
          outcomes: [
            "Design ops playbook and governance workflows",
            "Headless delivery to portals and microsites",
            "Integrated experimentation and AI-assisted copy",
          ],
          icon: Target,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Results our clients rely on",
      description:
        "LCP success is measured in downstream revenue, not just click-through. Here's what transformation looks like when marketing, product, and compliance collaborate.",
      items: [
        {
          title: "Recruitment uplift",
          description:
            "35% more qualified leads with targeted storytelling and progressive profiling.",
          icon: TrendUp,
        },
        {
          title: "Time-to-market",
          description:
            "Campaigns spin up in days thanks to reusable modules vetted by compliance.",
          icon: ChartBar,
        },
        {
          title: "Field enablement",
          description:
            "Distributor share packs and referrals baked into launch playbooks drive adoption.",
          icon: ShareNetwork,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Leadership teams usually clarify these topics before green-lighting delivery.",
    items: [
      {
        question: "What is included in an LCP Page development engagement?",
        answer:
          "We handle conversion strategy, UX/UI design, content collaboration, development, testing, and launch enablement. Every engagement ships with analytics instrumentation, automation hooks, and a knowledge base.",
      },
      {
        question: "Can we manage the LCPs internally after launch?",
        answer:
          "Yes. You receive a component library, design tokens, and governance guidelines. We also train marketing and creative teams so they can publish variants without redeploying code.",
      },
      {
        question: "How do you ensure local compliance?",
        answer:
          "We accommodate jurisdictional requirements for disclosures, imagery, consent, and data retention. Legal teams review at defined checkpoints with artefacts ready for sign-off.",
      },
      {
        question: "What if we need multiple LCPs at once?",
        answer:
          "The Momentum and Enterprise packages are built for scale. We set up multi-tenant libraries, automation logic, and analytics so each team can launch quickly while sharing best practices.",
      },
    ],
  },
  cta: {
    heading: "Ready to transform your landing experiences?",
    description:
      "Share your campaign goals and target cohorts. We'll prepare a pricing proposal, creative direction, and launch plan aligned to your timeline.",
    primaryCta: "Schedule consultation",
    secondaryCta: "Explore pricing hub",
    cardTitle: "Connect with our team",
    cardBody:
      "Expect a discovery agenda and stakeholder checklist within one business day. Our mission is to make every landing moment count.",
  },
};
