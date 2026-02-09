import { EnvelopeSimple, Broadcast, FunnelSimple, ChartBar } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

export const emailsContent: ModuleFeatureContent = {
  hero: {
    badge: "Email automation",
    title: "Orchestrate personalised, compliant email journeys at scale",
    description:
      "Cloud MLM Software blends lifecycle automation, governance, and AI copilots so your marketing and success teams deliver the right messages at the right time.",
    primaryCta: "Talk to an email strategist",
    secondaryCta: "Explore the email demo",
    metrics: [
      { label: "Emails orchestrated", value: "1.4B+", detail: "Journeys sent through marketing automation." },
      { label: "Engagement uplift", value: "28%", detail: "Increase in opens and clicks with segmented journeys." },
      { label: "Languages supported", value: "36", detail: "Localised templates and consent workflows." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Built for your email programme",
    paragraphs: [
      "The email module is part of Cloud MLM Software, designed for enterprise network marketing and direct selling. Launch sophisticated journeys faster while safeguarding deliverability and compliance.",
      "From onboarding and promotions to renewals and compliance reminders, you get multi-step automation driven by CRM and ecommerce events, with dynamic content that personalises messaging per region.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "What you get",
      points: [
        "Lifecycle journeys: onboarding, promotions, renewals, compliance.",
        "Consent vault and preference management per channel.",
        "AI copilots to draft, analyse, and optimise campaigns.",
        "Deliverability monitoring and approval workflows.",
      ],
    },
  },
  importanceSection: {
    badge: "Communications",
    heading: "Why email automation matters in MLM",
    paragraphs: [
      "Email remains the backbone of member and customer communication in MLM. Automated journeys keep your field informed, engaged, and compliant without manual follow-up. Cloud MLM Software connects lifecycle events to the right messages so every touchpoint supports growth and retention.",
      "Governance is built in: consent and preferences are tracked per channel, approval workflows involve legal and brand teams, and deliverability is monitored across IPs and domains. You scale reach without sacrificing compliance or inbox placement.",
    ],
    imageSrc: "/images/dashboard-deign-dark.webp",
    imageAlt: "Cloud MLM Software dashboard and email automation",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Why choose our email module",
    description: "Built for scale and compliance with your MLM programme.",
    items: [
      {
        title: "Lifecycle journeys",
        description: "Automate onboarding, promotions, renewals, and compliance reminders with multi-step flows driven by CRM and ecommerce events.",
      },
      {
        title: "Governance ready",
        description: "Consent vault, preference management, and approval workflows for legal and brand teams. Deliverability monitoring across IPs and domains.",
      },
      {
        title: "AI productivity",
        description: "Copilots draft and optimise copy, run performance summaries, and support predictive send time and subject line testing.",
      },
      {
        title: "Localisation",
        description: "Translation workflows and dynamic content ensure each market receives compliant, relevant messaging in the right language.",
      },
      {
        title: "Analytics and optimisation",
        description: "Performance dashboards tie engagement to revenue. Cohort benchmarking and A/B testing built into the workflow.",
      },
      {
        title: "Support and success",
        description: "Deliverability assistance, playbooks for message design and frequency, and a success desk that works with ISPs when needed.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: "/images/emailmodule.svg",
    imageAlt: "Email module illustration",
    badge: "Why Choose Us",
    heading: "Why Choose Our Email Module",
    description:
      "Built for deliverability and scale. Our email module helps you orchestrate compliant, personalised journeys and keep your field engaged.",
    items: [
      {
        number: "01",
        title: "Launch faster",
        description:
          "Pre-built journey templates and collaborative approvals let you go from plan to send in weeks, not months, with clear ownership and sign-off.",
      },
      {
        number: "02",
        title: "Scale without spam",
        description:
          "Deliverability monitoring and best-practice playbooks keep your reputation and inbox placement healthy as list size and volume grow.",
      },
      {
        number: "03",
        title: "Expert support",
        description:
          "Our team works with you on strategy, setup, and optimisation—from initial audit to ongoing reviews and AI-assisted recommendations.",
      },
    ],
  },
  features: [
    {
      icon: EnvelopeSimple,
      title: "Lifecycle and campaign automation",
      description:
        "Build onboarding, promotional, renewal, and compliance email journeys triggered by CRM and ecommerce events. Dynamic content blocks personalise messaging per region and segment. Performance dashboards tie engagement to revenue.",
    },
    {
      icon: Broadcast,
      title: "Multi-channel and governance",
      description:
        "Manage consent and preferences per channel with a central vault. Approval workflows for legal and brand teams. Native connectors to leading ESPs plus SMTP and REST APIs for custom integrations. Deliverability monitoring across IPs and domains.",
    },
    {
      icon: FunnelSimple,
      title: "AI and optimisation",
      description:
        "Copilots draft copy aligned with tone and compliance guardrails. Automated performance summaries and recommendations. Predictive send time and subject line testing. Translation workflows and localisation for global markets.",
    },
    {
      icon: ChartBar,
      title: "Analytics and reporting",
      description:
        "Performance dashboards tie engagement to revenue. Cohort benchmarking, A/B testing, and deliverability metrics so you can measure and improve every campaign.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Quick answers for marketing and success teams.",
    items: [
      {
        question: "Which email platforms can we connect?",
        answer:
          "Native connectors support leading ESPs, plus SMTP and REST APIs for custom integrations. Our success desk can advise on the best setup for your stack.",
      },
      {
        question: "How do you manage localisation?",
        answer:
          "Translation workflows, dynamic content, and consent tracking ensure each market receives compliant messaging. We support 36 languages and region-specific preferences.",
      },
      {
        question: "Do you offer deliverability assistance?",
        answer:
          "Yes. Our success desk monitors deliverability health, works with ISPs, and provides proactive recommendations. Playbooks cover message design, frequency, and list hygiene.",
      },
    ],
  },
  cta: {
    heading: "Ready to elevate email journeys?",
    description:
      "Book a working session and see how Cloud MLM Software can orchestrate compliant, personalised emails for your network.",
    buttonText: "Schedule a strategy call",
    secondaryCta: "Explore live demo",
    trustIndicators: [
      "Quick implementation",
      "Deliverability and compliance support",
      "Proven engagement results",
    ],
  },
};
