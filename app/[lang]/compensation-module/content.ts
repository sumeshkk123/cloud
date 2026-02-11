import { CurrencyDollar, TreeStructure } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) on compensation module page */
const TYPES_IMAGE = "/images/compensation-plan.webp";

export const compensationContent: ModuleFeatureContent = {
  hero: {
    badge: "Compensation",
    title: "Compensation module",
    description:
      "Design and run compensation plans with the Cloud MLM Software compensation module. Binary, unilevel, matrix, hybrid, and custom structures. Real-time and batch commission runs with full audit trails and rollback. Integrate with e-commerce and genealogy for a single source of truth.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Plan types", value: "Flexible", detail: "Binary, unilevel, matrix, hybrid." },
      { label: "Commissions", value: "Real-time", detail: "And batch with audit trail." },
      { label: "Integration", value: "Unified", detail: "E-commerce and genealogy sync." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Unify compensation and MLM in one platform",
    paragraphs: [
      "The Compensation module gives you a single engine to design and run plans—binary, unilevel, matrix, hybrid, or custom. Commissions run in real time or batch with full audit trails and rollback. Plans integrate with e-commerce and genealogy so every order and rank feeds the same calculation.",
      "Cloud MLM's Compensation module is built for direct selling: support plan migrations and versioning so you can evolve rules without losing history. Your members see accurate payouts while you keep control over rules, overrides, and reporting.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of the Compensation module",
      points: [
        "Binary, unilevel, matrix, hybrid, and custom plan structures",
        "Real-time and batch commission runs with audit and rollback",
        "Integration with e-commerce and genealogy",
        "Plan versioning and migrations",
      ],
    },
  },
  importanceSection: {
    badge: "Compensation",
    heading: "Why a Compensation module in MLM software?",
    subheading: "Importance of Cloud MLM's Compensation module",
    paragraphs: [
      "Direct selling runs on fair and transparent payouts. An integrated Compensation module keeps plan rules, commission runs, and genealogy in one system so payouts and ranks stay accurate. No spreadsheets or manual reconciliation.",
      "The Compensation module connects to your e-commerce and network structure. Every order and rank flows through the same engine that powers commissions and reporting, so you get a single source of truth for payouts and compliance.",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software Compensation – plans, commissions, and reporting",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Cloud MLM's Compensation module includes",
    description:
      "Design and run plans in one place. Integrate with e-commerce and genealogy for real-time commissions and reporting.",
    items: [
      {
        title: "Plan design",
        description:
          "Binary, unilevel, matrix, hybrid, and custom structures. Configure to your rules and regions.",
      },
      {
        title: "Commission runs",
        description:
          "Real-time and batch runs with full audit trails and rollback. Versioning and plan migrations supported.",
      },
      {
        title: "E-commerce & genealogy sync",
        description:
          "Orders and ranks feed the same engine; commissions and reporting stay in sync.",
      },
      {
        title: "Multi-currency & locale",
        description:
          "Run plans in multiple currencies and languages with localized statements and dashboards.",
      },
      {
        title: "Reporting & analytics",
        description:
          "Dashboards and exports for commissions, payouts, and plan performance.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "Compensation module for MLM",
    badge: "Types",
    heading: "Key capabilities of the Compensation module",
    description:
      "Flexible plan types, real-time and batch runs, audit and rollback, e-commerce and genealogy integration, and reporting.",
    items: [
      {
        number: "01",
        title: "Plan structures",
        description:
          "Binary, unilevel, matrix, hybrid, and custom. Configure rules, overrides, and eligibility by region or tier.",
      },
      {
        number: "02",
        title: "Commission runs",
        description:
          "Real-time and batch runs with full audit trails and rollback. Plan versioning and migrations without losing history.",
      },
      {
        number: "03",
        title: "Integration & reporting",
        description:
          "E-commerce and genealogy feed the same engine. Dashboards and exports for commissions and payouts.",
      },
    ],
  },
  features: [
    {
      icon: TreeStructure,
      title: "Plan design",
      description:
        "Binary, unilevel, matrix, hybrid, and custom structures. Configure rules and integrate with e-commerce and genealogy.",
    },
    {
      icon: CurrencyDollar,
      title: "Commissions & payouts",
      description:
        "Real-time and batch runs with audit and rollback. Multi-currency and localized statements.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Compensation module.",
    items: [
      {
        question: "Which plan types do you support?",
        answer:
          "Binary, unilevel, matrix, hybrid, and custom structures. We configure to your rules and support plan versioning and migrations.",
      },
      {
        question: "How do commissions run?",
        answer:
          "We support real-time and batch runs with full audit trails and rollback. You can evolve plans without losing history.",
      },
      {
        question: "Can we change the plan later?",
        answer:
          "Yes. We support plan migrations and versioning so you can evolve without losing history. Rollback is available for batch runs.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "Secure transactions"],
  },
};
