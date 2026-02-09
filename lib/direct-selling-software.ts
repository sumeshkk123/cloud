import type { ComponentType } from "react";
import type { Locale } from "@/i18n-config";
import {
  Activity,
  Bot,
  Globe2,
  Layers,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export type IconComponent = ComponentType<{ className?: string }>;

export interface HeroStat {
  label: string;
  value: string;
  detail: string;
  icon: IconComponent;
}

export interface BenefitValuePillar {
  iconKey: string;
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: IconComponent;
  bullets: string[];
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface AiUpgrade {
  year: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconComponent;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface DirectSellingSoftwareContent {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    stats: HeroStat[];
  };
  benefits: {
    badge: string;
    heading: string;
    paragraphs: string[];
    partnerCard: { badge: string; heading: string; points: string[] };
    valuePillars: BenefitValuePillar[];
  };
  capabilities: {
    badge: string;
    heading: string;
    description: string;
    items: Capability[];
  };
  workflow: {
    badge: string;
    heading: string;
    description: string;
    items: WorkflowStep[];
  };
  aiUpgrades: {
    badge: string;
    heading: string;
    description: string;
    items: AiUpgrade[];
  };
  faq: {
    badge: string;
    heading: string;
    description: string;
    items: Faq[];
    infoBoxText?: string;
    infoBoxButtonText?: string;
    ctaHref?: string;
  };
  finalCta: {
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

const defaultContent: DirectSellingSoftwareContent = {
  hero: {
    badge: "Direct selling excellence",
    title: "Unite your field, operations, and customers with an AI-ready direct selling platform.",
    description:
      "Cloud MLM Software modernises every step of the direct selling lifecycle—so you launch faster, stay compliant, and empower every team with data-backed guidance.",
    primaryCta: "Request a consultation",
    secondaryCta: "Explore platform capabilities",
    tertiaryCta: "Review resources",
    stats: [
      { label: "Direct selling launches", value: "320+", detail: "Programmes modernised or launched with Cloud MLM Software since 2015.", icon: Rocket },
      { label: "Automation coverage", value: "82%", detail: "Average reduction in manual tasks across operations and field enablement.", icon: Workflow },
      { label: "Time-to-rollout", value: "12 weeks", detail: "Typical go-live for direct selling brands adopting our platform.", icon: Activity },
      { label: "Copilot launch", value: "2025", detail: "AI copilots now brief leadership, success, and field teams every day.", icon: Sparkles },
    ],
  },
  benefits: {
    badge: "Key features",
    heading: "Key features of Cloud MLM's direct selling software",
    paragraphs: [
      "In modern society, well-organised software is crucial for tracking clients, auditing sales, directing agents, processing compensations, and managing payouts. Cloud MLM presents a direct selling software designed for this purpose. It helps to track sales profits and incomes efficiently.",
      "This type of software is used to operate and manage direct selling businesses, which involve marketing and selling goods or services directly to customers without any middlemen. In this method, marketing is done door-to-door by company representatives. Our high-end technology helps customers stay ahead in the competitive direct selling business.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "What our direct selling software provides",
      points: [
        "Fully protected and customised direct selling plans for your customers.",
        "Client management system to manage distributors and customers.",
        "Order management, inventory, and shipping to make direct selling simple and easy.",
        "Efficient management of various commission and compensation systems.",
      ],
    },
    valuePillars: [
      {
        iconKey: "shieldCheck",
        title: "Enterprise reliability",
        description: "Secure, customised direct selling plans and client management with audit trails and compliance support for mature and emerging markets.",
      },
      {
        iconKey: "handshake",
        title: "Client & team management",
        description: "Graphical representations of business activities, order and inventory management, and tools to manage your team and their individual networks.",
      },
      {
        iconKey: "rocket",
        title: "Compensation & growth",
        description: "Multiple compensation plans including binary, unilevel, matrix, and hybrid. Multi-currency, multi-language, and integrations to scale your business.",
      },
    ],
  },
  capabilities: {
    badge: "Capabilities",
    heading: "Capabilities showcased in the demo",
    description: "Experience compensation, commerce, and service modules built for direct selling organisations.",
    items: [
      {
        title: "Compensation & promotions",
        description: "Design and launch plans, incentives, and limited-run offers with confidence.",
        icon: Layers,
        bullets: [
          "Plan studio for binary, hybrid, and custom structures",
          "Real-time margin guardrails before a promotion launches",
          "Segmented offers for leaders, rising ranks, and customers",
        ],
      },
      {
        title: "Commerce & fulfilment",
        description: "Manage DTC, affiliate, and retail orders with connected inventory and logistics.",
        icon: Globe2,
        bullets: [
          "Regional pricing, taxation, and gateway integrations",
          "Inventory forecasting and allocation tied to campaigns",
          "Order orchestration across warehouses and drop-ship partners",
        ],
      },
      {
        title: "Service & retention",
        description: "Deliver consistent service with AI-assisted support and customer journey analytics.",
        icon: MessageSquare,
        bullets: [
          "Unified case management across chat, email, and voice",
          "AI triage and recommended responses",
          "Journey dashboards linking service to retention and NPS",
        ],
      },
    ],
  },
  workflow: {
    badge: "Workflow",
    heading: "A workflow proven across enterprise launches",
    description: "Keep every stakeholder aligned from discovery to optimisation.",
    items: [
      { title: "Discover", description: "Align goals, compliance needs, and integrations with Cloud MLM strategists.", icon: Layers },
      { title: "Design", description: "Configure experiences, automations, and data flows ready for pilot markets.", icon: Workflow },
      { title: "Launch", description: "Activate markets with enablement, change management, and hypercare support.", icon: Globe2 },
      { title: "Optimise", description: "Iterate with copilot guidance, experimentation, and quarterly business reviews.", icon: Bot },
    ],
  },
  aiUpgrades: {
    badge: "AI roadmap",
    heading: "From telemetry to copilot excellence",
    description: "See how 2024 foundations enabled 2025 AI copilots that keep your programme agile.",
    items: [
      {
        year: "2025",
        title: "Copilot-powered direct selling",
        description: "Copilots summarise performance, draft communications, and recommend next-best actions across the programme.",
        icon: Sparkles,
        bullets: [
          "Daily alerts for churn, inventory, and incentive anomalies",
          "Drafted messaging for distributors, leaders, and customers",
          "Actionable recommendations linked to CRM and LMS",
        ],
      },
      {
        year: "2024",
        title: "Telemetry foundation",
        description: "Experimentation, data pipelines, and governance prepared the platform for AI-native operations.",
        icon: Activity,
        bullets: [
          "Journey testing isolated to pilot cohorts",
          "Real-time dashboards across sales, service, and finance",
          "Quality controls ensure trusted data for automation",
        ],
      },
    ],
  },
  faq: {
    badge: "Frequently asked questions",
    heading: "Frequently asked questions",
    description: "Quick answers for teams planning their next direct selling milestone.",
    infoBoxText: "Can't find what you need? Our team can help.",
    infoBoxButtonText: "Contact us",
    ctaHref: "/contact",
    items: [
      { question: "How quickly can we launch?", answer: "Most direct selling programmes launch in 10–14 weeks depending on integrations, data migration, and change management scope." },
      { question: "Do you support hybrid retail or affiliate models?", answer: "Yes. Cloud MLM Software handles DTC, retail, partner, and affiliate channels with shared data and governance." },
      { question: "How do you handle global compliance?", answer: "Regulatory presets cover income disclosures, taxation, privacy, and product approvals for major markets." },
      { question: "What support do we receive post-launch?", answer: "Dedicated success teams, copilot onboarding, quarterly reviews, and 24/7 support keep your programme evolving." },
    ],
  },
  finalCta: {
    heading: "Ready to modernise direct selling?",
    description: "Schedule a working session with Cloud MLM Software analysts to review objectives, configure a sandbox, and activate AI copilots tailored to your network.",
    primaryCta: "Book a strategy workshop",
    secondaryCta: "Watch the platform demo",
  },
};

export function getDirectSellingSoftwareContent(_locale: Locale): DirectSellingSoftwareContent {
  return defaultContent;
}
