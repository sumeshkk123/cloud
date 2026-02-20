import {
  Bell,
  ChartLineUp,
  CheckCircle,
  ChatsCircle,
  ClipboardText,
  ClockCountdown,
  FlowArrow,
  GearSix,
  Headphones,
  Lightning,
  Robot,
  Stack,
  Users,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const supportTicketSystemModuleForMlmSoftwareContent: PricingSubPageContent = {
  hero: {
    badge: "Service excellence engineered for MLM",
    title: "Support ticket system pricing that elevates every interaction.",
    description:
      "Cloud MLM Software connects distributors, customers, and agents with automation, analytics, and thoughtful UX. Choose the module tier that matches your service ambitions.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Tickets resolved monthly",
        value: "210k+",
        description:
          "Support teams operate without losing context or SLA visibility.",
        icon: Headphones,
      },
      {
        label: "First response improvement",
        value: "48%",
        description:
          "Average reduction in time-to-first-response after rollout.",
        icon: ClockCountdown,
      },
      {
        label: "Automated routing accuracy",
        value: "92%",
        description:
          "AI-assisted triage places tickets with the right queue instantly.",
        icon: Robot,
      },
      {
        label: "Deployment timeline",
        value: "4 weeks",
        description:
          "Blueprint, configure, pilot, and launch support module.",
        icon: Lightning,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Module capabilities designed for support velocity.",
      description:
        "Every deployment combines omnichannel intake, automation, and analytics so your teams spend more time solving—not searching for context.",
      callout: {
        title: "Thought-leadership baked into every module",
        body: "Cloud MLM Software's support practice synthesises insights from hundreds of deployments, ensuring the module ships with benchmarked playbooks, SLA frameworks, and analytics-readiness from day one.",
        icon: CheckCircle,
      },
      items: [
        {
          title: "Omnichannel intake",
          description:
            "Consolidate email, chat, portal, and WhatsApp support requests while maintaining distributor context.",
          bullets: [
            "Unified inbox with Cloud MLM Software customer profile data",
            "Self-service and chatbot deflection with compliance safeguards",
            "Localized knowledge base and macro management",
          ],
          icon: ChatsCircle,
        },
        {
          title: "Smart routing & SLAs",
          description:
            "Automate triage, prioritisation, and escalations so high-impact issues receive immediate attention.",
          bullets: [
            "Queue assignment based on topic, language, or distributor tier",
            "Dynamic SLAs tied to rank, region, or campaign",
            "Escalation workflows with notifications and approval loops",
          ],
          icon: FlowArrow,
        },
        {
          title: "Analytics and coaching",
          description:
            "Give leaders dashboards linking service performance to retention, revenue, and compliance metrics.",
          bullets: [
            "Agent productivity and satisfaction dashboards",
            "Sentiment and trend analysis for field intelligence",
            "Quality assurance scoring with coaching feedback loops",
          ],
          icon: ChartLineUp,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Four-week launch cadence",
      description:
        "Rapid value without sacrificing governance. Stakeholders stay aligned via weekly checkpoints and clear artefacts.",
      outcomes: {
        title: "Outcomes you can expect",
        points: [
          "Service blueprint and queue taxonomy, plus SLA and escalation matrix.",
          "Automations, templates, and integrations validated with knowledge base and chatbot content published.",
          "Hypercare dashboards and alert thresholds with optimisation backlog aligned to service KPIs.",
        ],
      },
      stages: [
        {
          title: "Discovery & design",
          description:
            "Map contact channels, processes, and KPIs to shape support architecture.",
          duration: "Week 1",
          icon: ClipboardText,
        },
        {
          title: "Configuration & training",
          description:
            "Configure ticketing automation, knowledge base, and analytics. Train pilot teams.",
          duration: "Weeks 2-3",
          icon: Users,
        },
        {
          title: "Launch & optimisation",
          description:
            "Roll out to production, monitor performance, and prioritise continual improvements.",
          duration: "Week 4",
          icon: CheckCircle,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages that scale with your service ambitions.",
      description:
        "Start with essentials or jump straight to AI-assisted support. Each package includes strategy, configuration, and enablement assets.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Support ignite",
          price: "$12k fixed",
          description:
            "Core ticketing infrastructure with automated routing and knowledge base integration.",
          outcomes: [
            "Ticket queues, macros, and automation rules configured",
            "Knowledge base, chatbot, and portal intake enabled",
            "SLA dashboard with real-time notifications",
          ],
          icon: Stack,
        },
        {
          title: "Support intelligence",
          price: "$20k fixed",
          description:
            "AI-assisted triage, coaching analytics, and regionalised experiences.",
          outcomes: [
            "AI classification and sentiment analysis",
            "Agent scorecards with coaching workflows",
            "Localization toolkit with translations and templates",
          ],
          icon: GearSix,
        },
        {
          title: "Support enterprise",
          price: "Custom engagement",
          description:
            "Advanced integrations, automation, and optimisation office for global service teams.",
          outcomes: [
            "Telephony, CRM, and logistics integration suite",
            "WFM, QA, and compliance automation roadmap",
            "Dedicated optimisation squad with experimentation backlog",
          ],
          icon: Bell,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Service insights you can act on.",
      description:
        "The module turns support into a strategic advantage with metrics that tie to retention and revenue.",
      callout:
        "Enhancements are scoped as fixed outcomes with rapid delivery windows. We collaborate with your operations, support, and compliance teams to embed measurable improvements.",
      items: [
        {
          title: "Retention impact",
          description:
            "Accounts receiving proactive support show 18% lower churn.",
          icon: ChartLineUp,
        },
        {
          title: "Cost efficiency",
          description:
            "Automated triage reduces manual categorisation by 62%.",
          icon: CheckCircle,
        },
        {
          title: "Field sentiment",
          description:
            "NPS increases by 12 points after knowledge base and automation go live.",
          icon: Lightning,
        },
      ],
    },
  ],
  faq: {
    heading: "Support Ticket System Module FAQs",
    description:
      "Operations, support, and compliance leaders typically raise these topics.",
    items: [
      {
        question: "Can we integrate with our existing help desk?",
        answer:
          "Yes. We can extend Zendesk, Freshdesk, or other platforms with Cloud MLM Software context, or deploy the native module if you prefer full consolidation.",
      },
      {
        question: "How do you handle multilingual support?",
        answer:
          "Routing and templates adapt to language and region. We integrate translation workflows and knowledge base localisation.",
      },
      {
        question: "Do agents get mobile access?",
        answer:
          "Agents and leaders can manage tickets via responsive portals and mobile apps with push notifications for escalations.",
      },
      {
        question: "What reporting is available?",
        answer:
          "Dashboards highlight SLA performance, trend analysis, sentiment, and link support outcomes to retention and revenue metrics.",
      },
    ],
  },
  cta: {
    heading: "Ready to transform support into a growth lever?",
    description:
      "Share your service goals, channels, and integration needs. We'll design a pricing proposal and delivery plan tailored to your teams.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our support module specialists",
    cardBody:
      "Expect a discovery agenda and support operations checklist within one business day. We stay engaged through launch and continuous improvement.",
  },
};
