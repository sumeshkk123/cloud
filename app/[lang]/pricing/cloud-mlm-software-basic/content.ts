import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  ChartBar,
  ChatText,
  CheckCircle,
  CirclesThreePlus,
  Coins,
  FlowArrow,
  Gauge,
  Lightning,
  PaperPlaneTilt,
  Planet,
  ShieldCheck,
  Stack,
  UsersThree,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const cloudMlmSoftwareBasicContent: PricingSubPageContent = {
  hero: {
    badge: "Launch-ready direct selling platform",
    title: "Cloud MLM Software Basic pricing and roadmap.",
    description:
      "Build trust with distributors and customers using a polished, automation-ready MLM platform. We combine strategy, configuration, and enablement into one fixed-fee engagement so your leadership team can focus on growth.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Average go-live",
        value: "45 days",
        description: "Launch-ready portal with core automations",
        icon: Lightning,
      },
      {
        label: "Implementation CSAT",
        value: "96%",
        description: "Leader and field satisfaction with onboarding",
        icon: CheckCircle,
      },
      {
        label: "Markets launched",
        value: "28+",
        description: "Cloud MLM Software Basic deployed globally",
        icon: Planet,
      },
      {
        label: "Adoption uplift",
        value: "31%",
        description: "Distributor productivity within first quarter",
        icon: ChartBar,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "What's inside the Basic blueprint",
      description:
        "Each layer is built on decades of direct selling experience. We make sure the essentials are production-ready from day one—no patchwork integrations or manual workarounds required.",
      items: [
        {
          title: "Engagement-ready experience",
          description:
            "Deliver a polished portal with the fundamentals distributors expect from a modern direct selling brand.",
          bullets: [
            "Responsive onboarding experience for desktop and mobile",
            "Product catalogue with dynamic pricing and inventory visibility",
            "Announcement widgets and personalised dashboards",
          ],
          icon: UsersThree,
        },
        {
          title: "Sales operations foundation",
          description:
            "Automate payments, commissions, and support flows so small teams can operate with enterprise discipline.",
          bullets: [
            "Core commission engine with fast-start and rank rules",
            "Wallet, payouts, and tax documentation automation",
            "Ticketing integration to handle distributor support",
          ],
          icon: FlowArrow,
        },
        {
          title: "Governance and visibility",
          description:
            "Gain clarity on performance with executive scorecards, compliance guardrails, and structured data pipelines.",
          bullets: [
            "Leadership dashboards with KPI tracking",
            "Audit-ready change logs and permissioning",
            "Data connectors for analytics and CRM ecosystems",
          ],
          icon: ShieldCheck,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Implementation roadmap",
      description:
        "Structured delivery keeps momentum high. We balance rapid configuration with rigorous validation so your teams can launch confidently.",
      outcomes: {
        title: "Executive view of outcomes",
        points: [
          "Unified data model across enrolment, orders, payouts, and compliance.",
          "Field-ready enablement including onboarding, playbooks, and support workflows.",
          "Operational guardrails with audit trails, alerts, and hypercare command center.",
        ],
      },
      stages: [
        {
          title: "Plan alignment",
          duration: "Weeks 1-2",
          description:
            "Blueprinting workshops capture compensation, operations, and brand direction. Readiness assessment & KPI baselines; solution architecture with risk register; project plan with approvals and guardrails.",
          icon: Stack,
        },
        {
          title: "Configuration & integration",
          duration: "Weeks 3-5",
          description:
            "System configuration, data preparation, and integration mapping executed in lockstep. Compensation modelling and scenario validation; branding, content, and product catalogue build; payments, tax, and communication setup.",
          icon: Coins,
        },
        {
          title: "Enablement & optimisation",
          duration: "Weeks 6-7",
          description:
            "Training, launch rehearsals, and launch-day monitoring put teams in control. Leader and field playbooks delivered; hypercare dashboards and escalation routines; optimisation backlog with revenue experiments.",
          icon: ChatText,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Choose the package that fits your launch stage",
      description:
        "Cloud MLM Software Basic adapts to where you are in your journey. Whether you are validating a model or scaling into new markets, each package combines strategy, technology, and enablement.",
      ctaLabel: "Discuss package",
      items: [
        {
          title: "Starter Blueprint",
          price: "$18k one-time",
          description:
            "Ideal for pre-launch teams preparing to enrol first distributors in one to two markets. Growth-focused direct selling founders.",
          outcomes: [
            "Portal branding and UX tailored to storyline",
            "Single compensation plan configuration with validation",
            "Launch playbook with training and support assets",
          ],
          icon: PaperPlaneTilt,
        },
        {
          title: "Scaling Suite",
          price: "$26k one-time",
          description:
            "Best for brands expanding into additional regions with hybrid product lines. Regional expansion leaders.",
          outcomes: [
            "Multi-market pricing and tax scenarios",
            "Automated onboarding journeys and nurture campaigns",
            "Data warehouse extracts with KPI guardrails",
          ],
          icon: CirclesThreePlus,
        },
        {
          title: "Assurance Plus",
          price: "Custom engagement",
          description:
            "For enterprises seeking deeper integrations, governance, and AI-ready operations. Transformation and compliance teams.",
          outcomes: [
            "ERP, CRM, and payment gateway orchestration",
            "Regulatory modelling with legal-ready artefacts",
            "Quarterly optimisation and innovation workshops",
          ],
          icon: Gauge,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Impact benchmarks",
      description:
        "Organisations use these signals to measure the success of their Basic deployment and to justify scale-up roadmaps.",
      items: [
        {
          title: "Gross margin protection",
          description:
            "12% — Typical improvement after realigning Fast Start incentives with forecast accuracy.",
          icon: ChartBar,
        },
        {
          title: "Launch efficiency",
          description:
            "3x — Time saved by founders when onboarding journeys and support automation go live together.",
          icon: Sparkles,
        },
        {
          title: "Support deflection",
          description:
            "47% — Reduction in tier-one tickets when knowledge and automation assets launch in tandem.",
          icon: ArrowUpRight,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "These answers help leadership teams align on readiness, involvement, and investment before kick-off.",
    items: [
      {
        question: "What defines the Cloud MLM Software Basic package?",
        answer:
          "It delivers a branded distributor and customer experience, core commission logic, and essential integrations in a single fixed-fee implementation. The focus is speed-to-launch with enterprise-grade guardrails.",
      },
      {
        question: "Can we upgrade from Basic to more advanced plans later?",
        answer:
          "Absolutely. The Basic blueprint uses the same architecture as our enterprise deployments, so you can add modules, markets, or data extensions without re-platforming.",
      },
      {
        question: "How do we prepare before kickoff?",
        answer:
          "We recommend aligning leadership on compensation priorities, gathering product and pricing data, and nominating stakeholders from marketing, finance, and operations to accelerate approvals.",
      },
      {
        question: "What ongoing support is included?",
        answer:
          "Six months of concierge assistance covers optimisation, enhancements, and advisory. You can later extend support with managed services or internal training packages.",
      },
    ],
  },
  cta: {
    heading: "Ready to launch with confidence?",
    description:
      "Schedule a pricing consultation to map your go-live timeline, resource plan, and investment model tailored to Cloud MLM Software Basic.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Expect a follow-up agenda within one business day",
    cardBody:
      "We help you align stakeholders, estimate ROI, and de-risk implementation.",
  },
};
