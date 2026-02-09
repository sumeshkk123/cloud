import type { ComponentType } from "react";
import type { Locale } from "@/i18n-config";
import {
  BarChart3,
  Brain,
  PlusCircle,
  Layers,
  LineChart,
  Lock,
  Network,
  PieChart,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

export type IconComponent = ComponentType<{ className?: string }>;

export interface ValuePillar {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface FrameworkItem {
  label: string;
  title: string;
  summary: string;
}

export interface FeatureItem {
  title: string;
  detail: string;
  icon: IconComponent;
}

export interface HeroStat {
  label: string;
  value: string;
  icon: IconComponent;
}

export interface NetworkMarketingSoftwareContent {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    statsCard: {
      title: string;
      subtitle: string;
      stats: HeroStat[];
      footer: string;
    };
  };
  pillars: {
    badge: string;
    heading: string;
    paragraphs: string[];
    partnerCard: {
      badge: string;
      heading: string;
      points: string[];
    };
    items: ValuePillar[];
  };
  framework: {
    badge: string;
    heading: string;
    description: string;
    items: FrameworkItem[];
  };
  platformFeatures: {
    badge: string;
    heading: string;
    description: string;
    items: FeatureItem[];
  };
  advantages: {
    badge: string;
    heading: string;
    description: string;
    items: FeatureItem[];
    asideCta: {
      badge: string;
      title: string;
      description: string;
      ctaLabel: string;
    };
  };
  finalCta: {
    heading: string;
    description: string;
    card: {
      items: { label: string; value: string; icon?: IconComponent }[];
      ctaLabel: string;
    };
  };
}

const defaultContent: NetworkMarketingSoftwareContent = {
  hero: {
    badge: "Enterprise network marketing platform",
    title: "Power your network marketing organisation with precision, automation, and insight.",
    description:
      "Cloud MLM Software orchestrates compensation, field enablement, e-commerce, and analytics so your teams can scale influence and revenue globally.",
    primaryCta: "Experience the platform",
    secondaryCta: "Build a transformation roadmap",
    statsCard: {
      title: "Network intelligence",
      subtitle: "275k distributors",
      stats: [
        { label: "GMV uplift YTD", value: "+32%", icon: LineChart },
        { label: "AI coaching prompts", value: "8,400 sent", icon: Brain },
        { label: "Recognition moments", value: "15 per cohort", icon: Sparkles },
      ],
      footer:
        "Strategic playbooks align executives, finance, and field leaders around the same data-backed growth plan.",
    },
  },
  pillars: {
    badge: "Our approach",
    heading: "The pillars of modern network marketing operations",
    paragraphs: [
      "A scalable, compliant foundation keeps momentum high for distributors while protecting your brand and revenue. Cloud MLM Software is built for enterprise network marketing teams who need real-time visibility, automated operations, and experiences that keep the field engaged.",
      "We combine plan flexibility, compensation accuracy, and mobile-first tools so leadership can respond within hours and distributors see clarity on earnings, recognition, and next best actions.",
    ],
    partnerCard: {
      badge: "What you get",
      heading: "What network marketing leaders rely on",
      points: [
        "Real-time dashboards for enrolment, productivity, and payout trends across all plans.",
        "Unified automation for rank progression, inventory, and commissions in one platform.",
        "Mobile-first experiences with earnings clarity, recognition, and guided next steps.",
      ],
    },
    items: [
      {
        title: "Real-time intelligence",
        description:
          "Dashboards highlight enrolment, productivity, and payout trends so leadership can respond within hours, not weeks.",
        icon: BarChart3,
      },
      {
        title: "Frictionless operations",
        description:
          "Automate enrolment, rank progression, inventory, and commissions across every compensation model you run.",
        icon: Workflow,
      },
      {
        title: "Distributor delight",
        description:
          "Mobile-first experiences provide clarity on earnings, recognition, and next best actions for every distributor tier.",
        icon: Smartphone,
      },
    ],
  },
  framework: {
    badge: "Framework",
    heading: "A framework that evolves with your field",
    description:
      "Align technology, compensation, and human touch with a lifecycle approach designed for network marketing growth.",
    items: [
      {
        label: "Foundation",
        title: "Plan architecture",
        summary:
          "Configure binary, unilevel, monoline, matrix, or hybrid structures with simulation tools and compliance guardrails.",
      },
      {
        label: "Growth",
        title: "Engagement engine",
        summary:
          "Automated recognition, campaigns, and learning paths nurture distributors from onboarding through leadership.",
      },
      {
        label: "Optimization",
        title: "Insight loops",
        summary:
          "AI analyses performance, churn risk, and product velocity to inform targeted interventions and promotions.",
      },
    ],
  },
  platformFeatures: {
    badge: "Platform capabilities",
    heading: "Everything you need to operate and scale your network marketing enterprise",
    description:
      "Modular services keep your organisation agile today and ready for tomorrow's plan evolutions.",
    items: [
      {
        title: "Complete genealogy management",
        detail:
          "Visualise trees, drill into legs, and run what-if scenarios before approving changes.",
        icon: Network,
      },
      {
        title: "Financial confidence",
        detail:
          "Automated payout cycles, multi-currency wallets, and audit-ready statements keep finance in control.",
        icon: PieChart,
      },
      {
        title: "Security at scale",
        detail:
          "Enterprise SSO, field-level permissions, and encryption keep sensitive data protected across regions.",
        icon: Lock,
      },
      {
        title: "Modular integrations",
        detail:
          "Connect CRMs, ERPs, e-commerce, tax, and logistics systems with webhooks and low-code connectors.",
        icon: Layers,
      },
      {
        title: "Automation toolkit",
        detail:
          "Trigger rule-based workflows for compliance checks, inventory alerts, and recognition journeys.",
        icon: Workflow,
      },
      {
        title: "AI co-pilot",
        detail:
          "Predictive models surface coaching opportunities, forecast revenue, and recommend incentives.",
        icon: Brain,
      },
    ],
  },
  advantages: {
    badge: "Why choose us",
    heading: "Set your brand apart with elevated field experiences",
    description:
      "Fuel productivity and loyalty with programmes that adapt to each distributor's goals and momentum.",
    items: [
      {
        title: "Rapid onboarding",
        detail:
          "Launch new markets with templated websites, replicated offices, and localisation built in.",
        icon: PlusCircle,
      },
      {
        title: "Unified commerce",
        detail:
          "Manage direct sales and subscription programs across web, mobile, and social channels.",
        icon: LineChart,
      },
      {
        title: "Field enablement",
        detail:
          "Content hubs, event management, and coaching tools keep teams educated and inspired.",
        icon: Sparkles,
      },
    ],
    asideCta: {
      badge: "Executive alignment session",
      title:
        "Align leadership around a unified network marketing transformation blueprint.",
      description:
        "Our strategic facilitators help define metrics, prioritise releases, and structure change management.",
      ctaLabel: "Schedule your strategy session",
    },
  },
  finalCta: {
    heading: "Ready to modernise your network marketing platform?",
    description:
      "Share your current systems, growth targets, and distributor expectations. We will craft a tailored roadmap, investment overview, and launch plan.",
    card: {
      items: [
        {
          label: "Implementation timeline",
          value: "60 - 90 days",
          icon: Layers,
        },
        { label: "Playbooks delivered", value: "18" },
        { label: "Included executive reviews", value: "Quarterly" },
      ],
      ctaLabel: "Request a personalised assessment",
    },
  },
};

export function getNetworkMarketingSoftwareContent(
  _locale: Locale
): NetworkMarketingSoftwareContent {
  return defaultContent;
}
