import {
  Bell,
  Broadcast,
  ChartBar,
  ChatsCircle,
  EnvelopeSimple,
  FunnelSimple,
  Lightning,
  Robot,
  Shield,
  SlidersHorizontal,
  TrendUp,
  UsersThree,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const emailContent: PricingSubPageContent = {
  hero: {
    badge: "Communications engineered for momentum",
    title: "Email automation pricing built for Cloud MLM Software clients.",
    description:
      "Align brand storytelling, field enablement, and compliance. Our email engagements combine data orchestration, copy strategy, and optimisation so every message compounds growth.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Messages orchestrated",
        value: "1.8M+/month",
        description:
          "Email, SMS, WhatsApp, and in-app notifications across global MLM networks.",
        icon: Broadcast,
      },
      {
        label: "Deliverability rate",
        value: "99.1%",
        description:
          "Sender reputation and compliance continuously monitored by Cloud MLM Software.",
        icon: Shield,
      },
      {
        label: "Engagement uplift",
        value: "37%",
        description:
          "Average boost in click-through and activation in the first 60 days.",
        icon: TrendUp,
      },
      {
        label: "Compliance response time",
        value: "12 hours",
        description:
          "With automated alerts and legal review workflows in place.",
        icon: Bell,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Capabilities that elevate every send",
      description:
        "Cloud MLM Software blends marketing automation expertise with compensation science. We design programmes that honour brand voice, convert prospective distributors, and retain customers for the long term.",
      items: [
        {
          title: "Audience intelligence",
          description:
            "Segment distributors and customers based on lifecycle triggers, compensation milestones, and behavioural signals.",
          bullets: [
            "Predictive engagement scoring tied to incentives",
            "Consent-aware segmentation across regions",
            "Real-time sync with Cloud MLM Software data models",
          ],
          icon: FunnelSimple,
        },
        {
          title: "Content automation",
          description:
            "Dynamic templates and modular blocks make personalisation effortless while keeping compliance front and centre.",
          bullets: [
            "Token-based personalisation with fallbacks",
            "Legal-approved snippets and disclaimers",
            "AI-assisted copy with on-brand guardrails",
          ],
          icon: Robot,
        },
        {
          title: "Performance visibility",
          description:
            "Command centre dashboards keep marketing, compliance, and leadership aligned on impact and actions.",
          bullets: [
            "Revenue and retention attribution",
            "Insight feeds for underperforming sequences",
            "Executive snapshots for board reporting",
          ],
          icon: ChartBar,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages designed for your momentum",
      description:
        "Each package bundles strategy, setup, and enablement with clear outcomes. Select the level that aligns with your channel maturity and growth plan.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Catalyst",
          price: "$9k fixed",
          description: "Brands initiating automated communications",
          outcomes: [
            "Foundational nurture and onboarding series",
            "Deliverability audit with remediation plan",
            "Playbooks for message, design, and frequency",
          ],
          icon: EnvelopeSimple,
        },
        {
          title: "Momentum",
          price: "$17k fixed",
          description: "Rapidly scaling field organisations",
          outcomes: [
            "Multi-channel journeys with behavioural triggers",
            "Analytics workspace with cohort benchmarking",
            "Cross-team workflow automations and approvals",
          ],
          icon: Lightning,
        },
        {
          title: "Command Center",
          price: "Custom",
          description: "Enterprises managing complex portfolios",
          outcomes: [
            "Global governance, translations, and localisation",
            "Predictive insights using AI-assisted models",
            "Embedded optimisation sprints and A/B testing",
          ],
          icon: SlidersHorizontal,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Implementation journey",
      description:
        "A transparent delivery cadence keeps marketing, compliance, and IT aligned. Every stage concludes with artefacts your teams can validate quickly.",
      stages: [
        {
          title: "Discovery & alignment",
          description:
            "We map your lifecycle touchpoints, data sources, and compliance requirements.",
          duration: "Week 1",
          icon: UsersThree,
        },
        {
          title: "Design & configuration",
          description:
            "Audience logic, templates, and automations built in collaboration with your teams.",
          duration: "Weeks 2-4",
          icon: ChatsCircle,
        },
        {
          title: "Launch & optimisation",
          description:
            "Pilot launch with analytics instrumentation and rapid iteration support.",
          duration: "Weeks 5-6",
          icon: ChartBar,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Impact benchmarks to watch",
      description:
        "These indicators help leadership measure the value of disciplined email automation inside Cloud MLM Software.",
      items: [
        {
          title: "Inactive rep reactivation",
          description:
            "42% — Dormant distributors returning to active status within campaign quarter.",
          icon: TrendUp,
        },
        {
          title: "Cross-sell conversion",
          description:
            "27% — Increase in multi-product orders when nurture journeys go live.",
          icon: ChartBar,
        },
        {
          title: "Support deflection",
          description:
            "55% — Reduction in repetitive tickets thanks to proactive messaging.",
          icon: Shield,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Answers to common questions from marketing, compliance, and operations leaders.",
    items: [
      {
        question: "How does the email pricing model work?",
        answer:
          "Each package is a fixed-fee engagement covering strategy, configuration, and enablement. We can extend into managed optimisation or co-managed operations once the initial programme is live.",
      },
      {
        question: "Do you support SMS, WhatsApp, or push notifications?",
        answer:
          "Yes. Cloud MLM Software orchestrates multi-channel journeys. Email is often the anchor, but we align your messaging strategy with SMS, WhatsApp, and in-app channels when needed.",
      },
      {
        question: "What data sources are required?",
        answer:
          "We typically connect enrolment, order, commission, and support data. If those systems live outside Cloud MLM Software, we design connectors or imports to keep audiences current.",
      },
      {
        question: "How do you ensure legal compliance?",
        answer:
          "Consent management, regional suppression, and legal review workflows are embedded in every build. We align messaging with FTC, GDPR, CASL, and other jurisdictional requirements.",
      },
    ],
  },
  cta: {
    heading: "Let's architect email that earns attention.",
    description:
      "Share your communication priorities and growth targets. We'll prepare a pricing proposal, timeline, and measurement plan aligned to your field reality.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our team",
    cardBody:
      "Expect a tailored agenda within one business day. We collaborate with your stakeholders to accelerate approvals and deliver measurable outcomes.",
  },
};
