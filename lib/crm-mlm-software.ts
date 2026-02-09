import type { ComponentType } from "react";
import type { Locale } from "@/i18n-config";
import {
  Activity,
  BarChart3,
  Bot,
  Building2,
  ClipboardList,
  Database,
  GaugeCircle,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users2,
  Workflow,
} from "lucide-react";

export type IconComponent = ComponentType<{ className?: string }>;

export interface HeroStat {
  label: string;
  value: string;
  detail: string;
  icon: IconComponent;
}

export interface Pillar {
  title: string;
  description: string;
  bullets: string[];
  icon: IconComponent;
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

export interface UseCase {
  title: string;
  outcome: string;
  metric: string;
  icon: IconComponent;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface CrmMlmSoftwareContent {
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    stats: HeroStat[];
  };
  pillars: {
    badge: string;
    heading: string;
    description: string;
    items: Pillar[];
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
  useCases: {
    badge: string;
    heading: string;
    description: string;
    items: UseCase[];
  };
  faq: {
    badge: string;
    heading: string;
    description: string;
    items: Faq[];
  };
  finalCta: {
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
  };
}

const defaultContent: CrmMlmSoftwareContent = {
  hero: {
    badge: "CRM built for modern MLM",
    title: "Orchestrate every relationship with an AI-ready CRM purpose-built for MLM operations.",
    description:
      "Cloud MLM Software CRM unifies marketing, sales, success, and compliance into one workspace. Automate the busywork, personalise every interaction, and scale globally with governance you can trust.",
    primaryCta: "Request a CRM consultation",
    secondaryCta: "Explore the CRM demo",
    tertiaryCta: "Review resources",
    stats: [
      {
        label: "Unified profiles",
        value: "12M",
        detail: "Distributor and customer records managed through Cloud MLM CRM instances.",
        icon: Database,
      },
      {
        label: "Automated activities",
        value: "65%",
        detail: "Average manual task reduction after deploying workflow orchestration.",
        icon: Activity,
      },
      {
        label: "Regional rollouts",
        value: "45",
        detail: "Markets live with localised CRM layouts, compliance rules, and languages.",
        icon: Building2,
      },
      {
        label: "AI copilots launched",
        value: "2025",
        detail: "Predictive guidance and conversational support embedded directly in the CRM.",
        icon: Sparkles,
      },
    ],
  },
  pillars: {
    badge: "Pillars",
    heading: "Three pillars for CRM excellence in MLM",
    description:
      "Deliver intelligent experiences across the entire lifecycle—from lead to loyal customer—while meeting regulatory expectations.",
    items: [
      {
        title: "360° relationship intelligence",
        description:
          "View field, customer, and corporate interactions in one governed workspace that scales with your programme.",
        icon: Users2,
        bullets: [
          "Unified profile timeline covering orders, payouts, support, and training",
          "Segment audiences with behavioural, compensation, and compliance data",
          "Role-aware layouts ensure each team sees the context they need",
        ],
      },
      {
        title: "Automation-first execution",
        description:
          "Automate lead assignment, onboarding journeys, escalations, and renewals without sacrificing oversight.",
        icon: Workflow,
        bullets: [
          "Drag-and-drop workflow builder with human approval checkpoints",
          "Playbooks trigger communications and tasks based on lifecycle stages",
          "Prebuilt integrations sync CRM updates to ERP, LMS, and support tools",
        ],
      },
      {
        title: "Enterprise governance",
        description:
          "Granular permissions, consent, and audit trails keep every market compliant.",
        icon: ShieldCheck,
        bullets: [
          "Regional data residency and retention policies",
          "Consent vault covering marketing, transactions, and AI usage",
          "Immutable change history linking to SOPs and release documentation",
        ],
      },
    ],
  },
  capabilities: {
    badge: "Capabilities",
    heading: "Capabilities your teams will experience in the demo",
    description:
      "Configure once, deliver consistent experiences to field leaders, corporate teams, and customers.",
    items: [
      {
        title: "Lead-to-field orchestration",
        description: "Import, qualify, and nurture prospects from campaigns to enrolment.",
        icon: ClipboardList,
        bullets: [
          "Smart routing assigns leads by rank, skill, or geography",
          "AI scoring predicts conversion probability and recommends follow-up",
          "Automated nurture journeys align messaging with compliance rules",
        ],
      },
      {
        title: "Distributor enablement",
        description: "Coach every distributor with CRM-driven insights, tasks, and recognition.",
        icon: GaugeCircle,
        bullets: [
          "Health dashboards surface rank progress, churn risk, and training completions",
          "Success plans assign tasks to mentors, corporate support, and field leaders",
          "Recognition feeds celebrate achievements with shareable badges",
        ],
      },
      {
        title: "Customer engagement",
        description:
          "Manage loyalty, autoship, and service conversations with consistent brand voice.",
        icon: MessageCircle,
        bullets: [
          "Case management integrates channels from chat to in-app messaging",
          "AI-generated responses accelerate resolution while documenting compliance",
          "Journey analytics connect campaigns to reorder rates and retention",
        ],
      },
    ],
  },
  workflow: {
    badge: "Workflow",
    heading: "A delivery workflow proven across enterprise programmes",
    description:
      "Launch fast and evolve continuously with structured collaboration from our experts.",
    items: [
      {
        title: "Discover",
        description:
          "Assess business goals, data sources, and regulatory requirements with our CRM architects.",
        icon: Layers3,
      },
      {
        title: "Design",
        description:
          "Configure objects, automations, and integrations using governance blueprints.",
        icon: Workflow,
      },
      {
        title: "Launch",
        description:
          "Activate enablement, change management, and hypercare with success coaches.",
        icon: BarChart3,
      },
      {
        title: "Optimise",
        description:
          "Iterate with AI insights, feedback loops, and quarterly business reviews.",
        icon: Bot,
      },
    ],
  },
  aiUpgrades: {
    badge: "AI roadmap",
    heading: "From telemetry to AI-native CRM service",
    description:
      "Understand the journey from 2024 observability to 2025 copilot guidance.",
    items: [
      {
        year: "2025",
        title: "Copilot-driven CRM",
        description:
          "AI copilots draft notes, detect anomalies, and propose next-best actions for sales, success, and compliance teams.",
        icon: Bot,
        bullets: [
          "Summaries populate record timelines after every interaction",
          "Copilots recommend retention campaigns based on churn signals",
          "Regulatory checks flag data privacy considerations before sending communications",
        ],
      },
      {
        year: "2024",
        title: "Telemetry foundation",
        description:
          "Feature flags, synthetic data, and monitoring created a safe runway for AI-native CRM capabilities.",
        icon: Activity,
        bullets: [
          "Journey experimentation compares onboarding, service, and sales flows",
          "Real-time dashboards show automation throughput and SLA compliance",
          "Data quality scanners ensure records stay accurate across integrations",
        ],
      },
    ],
  },
  useCases: {
    badge: "Impact",
    heading: "Where Cloud MLM CRM delivers measurable impact",
    description:
      "Real brands using our CRM to create durable growth and compliance advantages.",
    items: [
      {
        title: "Global distributor lifecycle",
        outcome:
          "Reduced onboarding time by 43% while improving qualification accuracy across 21 markets.",
        metric: "Beauty & wellness enterprise",
        icon: Layers3,
      },
      {
        title: "AI-assisted retention",
        outcome:
          "Predictive health scores drove an 18% uplift in reactivation for a digital products brand.",
        metric: "Digital services leader",
        icon: Sparkles,
      },
      {
        title: "Regulated market expansion",
        outcome:
          "Implemented privacy and tax controls to enter three new territories in under six months.",
        metric: "Financial wellness company",
        icon: ShieldCheck,
      },
    ],
  },
  faq: {
    badge: "Frequently asked questions",
    heading: "Frequently asked questions",
    description:
      "Answers for teams evaluating Cloud MLM Software CRM for their next programme.",
    items: [
      {
        question: "Can Cloud MLM CRM integrate with our existing systems?",
        answer:
          "Yes. We provide REST APIs, webhooks, and prebuilt connectors for ERP, ecommerce, payment gateways, analytics, and communication platforms.",
      },
      {
        question: "How do you handle data privacy and residency?",
        answer:
          "Regional hosting, retention policies, consent management, and audit logs ensure compliance with GDPR, LGPD, CCPA, and local MLM regulations.",
      },
      {
        question: "What support is available post-launch?",
        answer:
          "Dedicated success managers deliver enablement, quarterly reviews, and AI adoption programmes alongside 24/7 global support.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Most enterprise CRM deployments go live in 10–14 weeks depending on integrations, data migration, and custom automations.",
      },
    ],
  },
  finalCta: {
    heading: "Ready to transform your CRM?",
    description:
      "Partner with Cloud MLM Software to design, launch, and optimise a CRM experience that powers your field, customers, and leadership teams.",
    primaryCta: "Book a CRM discovery workshop",
    secondaryCta: "View CRM capabilities",
    tertiaryCta: "Explore customer stories",
  },
};

export function getCrmMlmSoftwareContent(_locale: Locale): CrmMlmSoftwareContent {
  return defaultContent;
}
