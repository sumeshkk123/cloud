import { IdentificationCard, HardDrives } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) – KYC / verification theme */
const TYPES_IMAGE = "/images/dashboard-deign-dark.webp";

export const kycDocumentationContent: ModuleFeatureContent = {
  hero: {
    badge: "Compliance",
    title: "Secure KYC Documentation Module",
    description:
      "KYC documentation for new joinings and account refresh. Prevent fraud, verify members with identity proof, and keep your MLM business compliant. Cloud MLM Software helps you collect, store, and verify ID and address documents with a clear audit trail and regional rules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Documents verified", value: "1M+", detail: "ID and address." },
      { label: "Regions", value: "50+", detail: "Configurable rules." },
      { label: "Review time", value: "< 24h", detail: "Approve or re-request." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Simplify Verification and Stay Compliant",
    paragraphs: [
      "Know Your Customer (KYC) requirements are essential for MLM compliance and fraud prevention. The KYC Documentation Module in Cloud MLM Software lets you collect and store ID and address documents from distributors, review them in a clear workflow, and keep a full audit trail.",
      "Configure requirements by country or programme, approve or request re-upload with a few clicks, and keep your network verified and compliant. Our module is designed for scale, regional rules, and fast review times.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of Cloud MLM's KYC Documentation Module",
      points: [
        "Document collection – Collect and store ID and address documents from distributors in one place.",
        "Verification workflow – Review, approve, or request re-upload with a full audit trail.",
        "Regional rules – Configure requirements by country or programme so you stay compliant everywhere.",
        "Fast review – Typical review time under 24 hours; re-request or approve with clear feedback.",
      ],
    },
  },
  importanceSection: {
    badge: "Compliance",
    heading: "Why a KYC Documentation module in MLM software?",
    subheading: "Prevent fraud and verify members with identity proof",
    paragraphs: [
      "KYC documentation is critical for new joinings and account refresh. It helps prevent fraud, verifies members with identity proof, and keeps your MLM business compliant with local and international rules.",
      "With a dedicated KYC module you streamline collection, review, and storage of documents, reduce manual work, and maintain a clear audit trail for regulators. Cloud MLM Software's module supports multiple regions and configurable requirements.",
    ],
    imageSrc: TYPES_IMAGE,
    imageAlt: "Cloud MLM Software KYC Documentation – verification and compliance",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Key benefits of the KYC Documentation module",
    description:
      "Collect and verify ID and address documents, configure regional rules, and keep a full audit trail for compliance.",
    items: [
      {
        title: "Document collection",
        description: "Collect and store ID and address documents from distributors in a single, secure workflow.",
      },
      {
        title: "Verification workflow",
        description: "Review, approve, or request re-upload with a clear audit trail and feedback to the member.",
      },
      {
        title: "Regional rules",
        description: "Configure requirements by country or programme so you meet local and international compliance.",
      },
      {
        title: "Fast review",
        description: "Typical review time under 24 hours; reduce manual work and keep joinings moving.",
      },
      {
        title: "Audit trail",
        description: "Full history of submissions and decisions for regulators and internal audits.",
      },
      {
        title: "New joinings and refresh",
        description: "Use for new joinings and periodic account refresh to keep data current and compliant.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "KYC Documentation module for MLM",
    badge: "Types",
    heading: "Key capabilities of the KYC Documentation module",
    description:
      "Document collection, verification workflow, regional rules, and audit trail. Simplify verification and stay compliant.",
    items: [
      {
        number: "01",
        title: "Collect and store documents",
        description:
          "Collect ID and address documents from distributors in one place. Store securely with clear status and review workflow.",
      },
      {
        number: "02",
        title: "Review and approve",
        description:
          "Review, approve, or request re-upload with a full audit trail. Typical review time under 24 hours.",
      },
      {
        number: "03",
        title: "Regional compliance",
        description:
          "Configure requirements by country or programme. Meet local and international KYC rules with one module.",
      },
    ],
  },
  features: [
    {
      icon: IdentificationCard,
      title: "Document collection",
      description:
        "Collect and store ID and address documents from distributors with a clear submission and status workflow.",
    },
    {
      icon: HardDrives,
      title: "Verification workflow",
      description:
        "Review, approve, or request re-upload with audit trail and feedback to the member.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the KYC Documentation module.",
    items: [
      {
        question: "What document types are supported?",
        answer:
          "The module supports common ID and address proof formats. You can configure required document types by region or programme. Our team can help you align with local KYC regulations.",
      },
      {
        question: "How long does verification take?",
        answer:
          "Typical review time is under 24 hours. Administrators can approve or request re-upload with clear feedback. The workflow includes status tracking and audit trail for every action.",
      },
      {
        question: "Can we set different rules per country?",
        answer:
          "Yes. You can configure requirements by country or programme so you meet local and international compliance. Regional rules determine what documents are required and how they are reviewed.",
      },
    ],
  },
  cta: {
    heading: "Get KYC Documentation for Your MLM Software",
    description:
      "Simplify verification, prevent fraud, and stay compliant. Request a demo to see the KYC Documentation module in action.",
    buttonText: "Request a demo",
    secondaryCta: "Try Demo",
    trustIndicators: ["Fast review", "Regional rules", "Full audit trail"],
  },
};
