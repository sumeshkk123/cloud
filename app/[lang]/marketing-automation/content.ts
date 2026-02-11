import { Megaphone, ChartLine } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) – marketing automation module */
const TYPES_IMAGE = "/images/Marketing-automation-module.webp";

export const marketingAutomationContent: ModuleFeatureContent = {
  hero: {
    badge: "Marketing",
    title: "Marketing Automation Module",
    description:
      "Marketing automation module for MLM: campaigns, segments, and analytics. Orchestrate multi-channel journeys from one place—email, SMS, push, and in-app. Drive engagement with real-time segmentation from CRM, e-commerce, and compensation data. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Channels", value: "4+", detail: "Email, SMS, push, in-app." },
      { label: "Segments", value: "Real-time", detail: "CRM, e-commerce, compensation sync." },
      { label: "A/B tests", value: "Yes", detail: "Subject, content, send-time optimisation." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Automate Campaigns and Engage Your Network",
    paragraphs: [
      "Marketing automation helps you run campaigns, segment your audience, and measure results without manual work. The Marketing Automation Module in Cloud MLM Software lets you orchestrate multi-channel journeys from one place—email, SMS, push, and in-app.",
      "Segments are driven by CRM, e-commerce, and compensation data with real-time sync. Support A/B testing for subject lines, content blocks, and send-time optimisation with clear reporting. Scale your MLM marketing with less effort.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "What the Marketing Automation module delivers",
      points: [
        "Multi-channel campaigns – Email, SMS, push, and in-app from one orchestration layer.",
        "Real-time segmentation – Segments driven by CRM, e-commerce, and compensation data.",
        "A/B testing – Subject lines, content blocks, and send-time optimisation with reporting.",
        "Campaign analytics – Track opens, clicks, and conversions to refine your strategy.",
      ],
    },
  },
  importanceSection: {
    badge: "Marketing",
    heading: "Why a Marketing Automation module in MLM software?",
    subheading: "Campaigns, segments, and analytics in one place",
    paragraphs: [
      "Marketing automation is essential for scaling MLM engagement. Run campaigns across email, SMS, push, and in-app without juggling multiple tools. Segment your audience using real-time data from your CRM, e-commerce, and compensation system.",
      "With A/B testing and analytics built in, you can optimise subject lines, content, and send times. The module is designed for MLM: lifecycle journeys, governance, and performance visibility. Part of Cloud MLM Software.",
    ],
    imageSrc: "/images/dashboard-deign-dark.webp",
    imageAlt: "Cloud MLM Software Marketing Automation – campaigns and segments",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Key benefits of the Marketing Automation module",
    description:
      "Orchestrate multi-channel campaigns, segment by real-time data, and optimise with A/B testing and analytics.",
    items: [
      {
        title: "Multi-channel campaigns",
        description: "Run email, SMS, push, and in-app campaigns from one place with unified reporting.",
      },
      {
        title: "Real-time segmentation",
        description: "Segments driven by CRM, e-commerce, and compensation data with real-time sync.",
      },
      {
        title: "A/B testing",
        description: "Test subject lines, content blocks, and send-time optimisation with built-in reporting.",
      },
      {
        title: "Lifecycle journeys",
        description: "Design automated journeys for onboarding, re-engagement, and promotions.",
      },
      {
        title: "Governance and compliance",
        description: "Consent and audit trails built in; align with regional and channel rules.",
      },
      {
        title: "Performance visibility",
        description: "Dashboards and exports for opens, clicks, conversions, and ROI.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "Marketing Automation module for MLM",
    badge: "Types",
    heading: "Key capabilities of the Marketing Automation module",
    description:
      "Multi-channel campaigns, real-time segments, A/B testing, and analytics. Automate your MLM marketing with one module.",
    items: [
      {
        number: "01",
        title: "Campaigns and journeys",
        description:
          "Orchestrate email, SMS, push, and in-app from one place. Build lifecycle journeys for onboarding, re-engagement, and promotions.",
      },
      {
        number: "02",
        title: "Segmentation and sync",
        description:
          "Segments driven by CRM, e-commerce, and compensation data with real-time sync. Target the right audience at the right time.",
      },
      {
        number: "03",
        title: "Optimise and report",
        description:
          "A/B test subject lines, content blocks, and send times. Track opens, clicks, and conversions with clear reporting and dashboards.",
      },
    ],
  },
  features: [
    {
      icon: Megaphone,
      title: "Multi-channel campaigns",
      description:
        "Email, SMS, push, and in-app from one orchestration layer. Run campaigns and journeys without switching tools.",
    },
    {
      icon: ChartLine,
      title: "Segments and analytics",
      description:
        "Real-time segmentation from CRM, e-commerce, and compensation data. Dashboards and exports for performance visibility.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Marketing Automation module.",
    items: [
      {
        question: "Which channels are supported?",
        answer:
          "Email, SMS, push, and in-app. We orchestrate multi-channel journeys from one place with unified reporting.",
      },
      {
        question: "How does segmentation work?",
        answer:
          "Segments are driven by CRM, e-commerce, and compensation data with real-time sync. You can target by rank, region, activity, and purchase history.",
      },
      {
        question: "Do you support A/B testing?",
        answer:
          "Yes. We support subject lines, content blocks, and send-time optimisation with reporting so you can improve engagement with data-driven decisions.",
      },
    ],
  },
  cta: {
    heading: "Ready to automate your campaigns?",
    description:
      "Run multi-channel campaigns, segment with real-time data, and optimise with A/B testing. Request a demo to see the Marketing Automation module in action.",
    buttonText: "Request a demo",
    secondaryCta: "Try Demo",
    trustIndicators: ["Multi-channel", "Real-time segments", "A/B testing"],
  },
};
