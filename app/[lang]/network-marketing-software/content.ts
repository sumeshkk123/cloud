import type { ComponentType } from "react";
import {
  Brain,
  ChartBar,
  ChartLine,
  ChartPie,
  CirclesThreePlus,
  DeviceMobile,
  FlowArrow,
  Lock,
  Sparkle,
  Stack,
  TreeStructure,
  Users,
} from "@phosphor-icons/react";

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
    heading: string;
    description: string;
    items: ValuePillar[];
  };
  framework: {
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

export const networkMarketingSoftwareContent: NetworkMarketingSoftwareContent = {
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
        { label: "GMV uplift YTD", value: "+32%", icon: ChartLine },
        { label: "AI coaching prompts", value: "8,400 sent", icon: Brain },
        { label: "Recognition moments", value: "15 per cohort", icon: Sparkle },
      ],
      footer:
        "Strategic playbooks align executives, finance, and field leaders around the same data-backed growth plan.",
    },
  },
  pillars: {
    heading: "The pillars of modern network marketing operations",
    description:
      "A scalable, compliant foundation keeps momentum high for distributors while protecting your brand and revenue.",
    items: [
      {
        title: "Real-time intelligence",
        description:
          "Dashboards highlight enrolment, productivity, and payout trends so leadership can respond within hours, not weeks.",
        icon: ChartBar,
      },
      {
        title: "Frictionless operations",
        description:
          "Automate enrolment, rank progression, inventory, and commissions across every compensation model you run.",
        icon: FlowArrow,
      },
      {
        title: "Distributor delight",
        description:
          "Mobile-first experiences provide clarity on earnings, recognition, and next best actions for every distributor tier.",
        icon: DeviceMobile,
      },
    ],
  },
  framework: {
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
        icon: TreeStructure,
      },
      {
        title: "Financial confidence",
        detail:
          "Automated payout cycles, multi-currency wallets, and audit-ready statements keep finance in control.",
        icon: ChartPie,
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
        icon: Stack,
      },
      {
        title: "Automation toolkit",
        detail:
          "Trigger rule-based workflows for compliance checks, inventory alerts, and recognition journeys.",
        icon: FlowArrow,
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
    heading: "Set your brand apart with elevated field experiences",
    description:
      "Fuel productivity and loyalty with programmes that adapt to each distributor's goals and momentum.",
    items: [
      {
        title: "Rapid onboarding",
        detail:
          "Launch new markets with templated websites, replicated offices, and localisation built in.",
        icon: CirclesThreePlus,
      },
      {
        title: "Unified commerce",
        detail:
          "Manage direct sales and subscription programs across web, mobile, and social channels.",
        icon: ChartLine,
      },
      {
        title: "Field enablement",
        detail:
          "Content hubs, event management, and coaching tools keep teams educated and inspired.",
        icon: Sparkle,
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
          icon: Stack,
        },
        { label: "Playbooks delivered", value: "18" },
        { label: "Included executive reviews", value: "Quarterly" },
      ],
      ctaLabel: "Request a personalised assessment",
    },
  },
};
