import { ShieldCheck, FileText } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

const INTRO_IMAGE = "/images/dashboard-deign.webp";

export const complianceContent: ModuleFeatureContent = {
  hero: {
    badge: "Compliance",
    title: "Compliance module",
    description:
      "Compliance and governance module for MLM: consent, audit trails, and regional rules. Support FTC, GDPR, CASL, and other requirements with configurable rules. Store consent with full audit trails and export for legal review.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Regulations", value: "Configurable", detail: "FTC, GDPR, CASL, regional." },
      { label: "Consent", value: "Audit trail", detail: "Export for legal review." },
      { label: "Audits", value: "Internal", detail: "Logs, reports, suppression." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Why compliance and governance in MLM software?",
    paragraphs: [
      "The Compliance module gives you a single place to manage consent, preferences, audit trails, and regional rules. Support FTC, GDPR, CASL, and other requirements with configurable rules. Consent and preferences are stored with full audit trails and export for legal review.",
      "Cloud MLM's Compliance module is built for direct selling: run internal audits with audit logs, reports, and suppression lists. Your compliance teams get the visibility they need while you keep control over consent, governance, and regional compliance.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of the Compliance module",
      points: [
        "Configurable rules for FTC, GDPR, CASL, and regional requirements",
        "Consent and preferences with full audit trails and export",
      ],
    },
  },
  importanceSection: {
    badge: "Compliance",
    heading: "Why a Compliance module in MLM software?",
    subheading: "Streamline governance and meet regional rules",
    paragraphs: [
      "Direct selling runs on trust and regulatory adherence. An integrated Compliance module keeps consent, audit trails, and regional rules in one system so you can demonstrate governance and respond to audits without manual work.",
      "The Compliance module connects to your sign-up flows, communications, and data handling. Every consent and preference change is logged with a full audit trail, and you can export for legal review or internal audits.",
    ],
    imageSrc: INTRO_IMAGE,
    imageAlt: "Cloud MLM Software Compliance – consent, audit trails, and governance",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Cloud MLM's Compliance module includes",
    description:
      "Manage consent, audit trails, and regional rules in one place. Export for legal review and run internal audits.",
    items: [
      {
        title: "Regulatory coverage",
        description:
          "Support FTC, GDPR, CASL, and other regional requirements with configurable rules.",
      },
      {
        title: "Consent & preferences",
        description:
          "Consent and preferences stored with full audit trails and export for legal review.",
      },
      {
        title: "Audit logs & reports",
        description:
          "Audit logs, reports, and suppression lists available for compliance teams.",
      },
      {
        title: "Multi-locale rules",
        description:
          "Apply different rules and consent flows by region or locale.",
      },
      {
        title: "Export & review",
        description:
          "Export consent and audit data for legal review and internal audits.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: "/images/complains.webp",
    imageAlt: "Compliance module for MLM",
    badge: "Types",
    heading: "Key capabilities of the Compliance module",
    description:
      "Configurable regulations, consent with audit trail, audit logs and reports, multi-locale rules, and export for legal review.",
    items: [
      {
        number: "01",
        title: "Regulations & rules",
        description:
          "Configure rules for FTC, GDPR, CASL, and other regional requirements. Apply by locale or region.",
      },
      {
        number: "02",
        title: "Consent & audit trail",
        description:
          "Store consent and preferences with full audit trails. Export for legal review when needed.",
      },
      {
        number: "03",
        title: "Audits & suppression",
        description:
          "Run internal audits with audit logs, reports, and suppression lists. Compliance teams get full visibility.",
      },
    ],
  },
  features: [
    {
      icon: ShieldCheck,
      title: "Regulatory compliance",
      description:
        "Support FTC, GDPR, CASL, and regional requirements with configurable rules. Apply by locale and export for legal review.",
    },
    {
      icon: FileText,
      title: "Consent & audit trail",
      description:
        "Consent and preferences stored with full audit trails. Export for legal review and internal audits.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Compliance module.",
    items: [
      {
        question: "Which regulations do you cover?",
        answer:
          "We support FTC, GDPR, CASL, and other regional requirements with configurable rules. You can apply different rules by locale or region.",
      },
      {
        question: "How is consent stored?",
        answer:
          "Consent and preferences are stored with full audit trails and export for legal review. Every change is logged for compliance and internal audits.",
      },
      {
        question: "Can we run internal audits?",
        answer:
          "Yes. Audit logs, reports, and suppression lists are available for compliance teams. You can export consent and audit data for legal review.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "Audit-ready"],
  },
};
