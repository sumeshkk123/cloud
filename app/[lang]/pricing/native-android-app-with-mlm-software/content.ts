import {
  Bell,
  Broadcast,
  ChartLineUp,
  DeviceMobile,
  Fingerprint,
  Lightning,
  QrCode,
  RocketLaunch,
  Shield,
  Sparkle,
  Translate,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const nativeAndroidAppWithMlmSoftwareContent: PricingSubPageContent = {
  hero: {
    badge: "Mobile-first MLM experiences",
    title: "Native Android app pricing to accelerate field performance.",
    description:
      "Cloud MLM Software delivers a native Android experience that keeps distributors in sync, on brand, and revenue-focused. We handle product strategy, engineering, security, and enablement so your team can launch with confidence.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Launch timeline",
        value: "12 weeks",
        description:
          "Concept to Google Play and private distribution readiness.",
        icon: RocketLaunch,
      },
      {
        label: "Active user retention",
        value: "33%",
        description:
          "Average uplift in DAU after mobile-first onboarding rolls out.",
        icon: ChartLineUp,
      },
      {
        label: "Offline sync reliability",
        value: "99.7%",
        description:
          "Background sync success rate across challenging connectivity markets.",
        icon: Broadcast,
      },
      {
        label: "Security compliance",
        value: "100%",
        description:
          "Apps aligned with SOC 2, GDPR, and regional privacy requirements.",
        icon: Fingerprint,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Features purpose-built for Android",
      description:
        "Each capability is engineered for low-latency performance, offline resilience, and compliance. Your mobile ecosystem stays as flexible and governed as the core Cloud MLM Software platform.",
      items: [
        {
          title: "Field engagement cockpit",
          description:
            "Deliver mission-critical analytics, onboarding, and collaboration features built around distributor workflows.",
          bullets: [
            "Progress dashboards aligned to ranks and incentives",
            "Guided onboarding, training videos, and playbooks",
            "Team messaging with compliance-friendly moderation",
          ],
          icon: DeviceMobile,
        },
        {
          title: "Commerce-ready experiences",
          description:
            "Enable mobile enrolment, ordering, and payments that mirror your Magento or custom storefronts.",
          bullets: [
            "SKU catalogue with dynamic pricing, taxes, and inventory",
            "Cart, checkout, and wallet top-ups with tokenised payments",
            "QR and social share kits for promotions and sampling",
          ],
          icon: QrCode,
        },
        {
          title: "Operations and support",
          description:
            "Keep leadership confident with security, observability, and update pipelines purpose-built for native Android.",
          bullets: [
            "Biometric login, device binding, and compliance messaging",
            "Crash analytics, performance monitoring, and release automation",
            "In-app support routing with knowledge base integration",
          ],
          icon: Shield,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "12-week delivery blueprint",
      description:
        "Structured delivery keeps stakeholders aligned and ensures every release meets quality, security, and adoption goals.",
      stages: [
        {
          title: "Product alignment",
          description:
            "Vision workshops, user journey mapping, and success metrics agreed across leadership and field. Deliverables: experience blueprint and feature prioritisation, technical architecture and integration map, release plan with MVP + roadmap milestones.",
          duration: "Weeks 1-3",
          icon: Translate,
        },
        {
          title: "Design & engineering",
          description:
            "Design system creation, native development, and API integration with Cloud MLM Software. Deliverables: Figma library + Android component kit, automated build pipelines with QA suites, beta release for stakeholder testing.",
          duration: "Weeks 4-8",
          icon: DeviceMobile,
        },
        {
          title: "Launch & hypercare",
          description:
            "Public launch, enablement, and optimisation loops fueled by analytics and feedback. Deliverables: Google Play submission + enterprise distribution, field enablement content and launch communications, post-launch analytics and support plan.",
          duration: "Weeks 9-12",
          icon: Bell,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Choose the edition that matches your ambition",
      description:
        "Whether you need a focused MVP or a global enterprise rollout, we align pricing with features, integrations, and enablement scope.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Launch edition",
          price: "$38k fixed",
          description: "Organisations launching their first native Android app.",
          outcomes: [
            "Brand system, UX, and component library built for Android",
            "Offline-ready enrolment, ordering, and dashboards",
            "Analytics instrumentation and Firebase distribution setup",
          ],
          icon: DeviceMobile,
        },
        {
          title: "Growth edition",
          price: "$52k fixed",
          description: "Scaling brands with multi-market field teams.",
          outcomes: [
            "Hyper-personalised journeys powered by behavioural data",
            "Automation for notifications, campaigns, and event triggers",
            "Multilingual content and dynamic segmentation controls",
          ],
          icon: Lightning,
        },
        {
          title: "Enterprise edition",
          price: "Custom engagement",
          description: "Highly regulated or multi-brand organisations.",
          outcomes: [
            "Mobile PMO with release, security, and compliance workflows",
            "Custom integrations (learning, payments, logistics, AI copilots)",
            "Dedicated optimisation squad with experimentation backlog",
          ],
          icon: Sparkle,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Why leaders choose Cloud MLM Software for Android",
      description:
        "Our mobile team couples product strategy with deep Cloud MLM Software expertise so you launch faster without compromising compliance or quality.",
      items: [
        {
          title: "Offline-first design",
          description:
            "Auto-sync content, orders, and messaging in the background so distributors stay productive between connections.",
          icon: Broadcast,
        },
        {
          title: "Automation at the edge",
          description:
            "Trigger push, SMS, or in-app journeys based on rank milestones, inventory updates, or compliance alerts.",
          icon: Lightning,
        },
        {
          title: "Future-ready foundation",
          description:
            "Architecture supports wearables, Android TV, and AI copilots without costly rebuilds.",
          icon: Sparkle,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Product, engineering, and compliance leaders ask these before kick-off.",
    items: [
      {
        question: "Do we need separate infrastructure for the mobile app?",
        answer:
          "No. The app connects to Cloud MLM Software APIs and your existing integrations. We configure secure gateways and caching layers tailored to mobile usage patterns.",
      },
      {
        question: "Can we reuse our web portal branding?",
        answer:
          "Yes. We extend your design language into Material-compliant patterns, ensuring the app feels native while staying on-brand.",
      },
      {
        question: "How are updates and releases managed?",
        answer:
          "Release pipelines include automated QA, staged rollouts, and instant rollback capabilities. We provide playbooks for weekly or monthly cadence depending on your needs.",
      },
      {
        question: "What analytics are included?",
        answer:
          "Every package ships with product analytics, crash reporting, and cohort dashboards linked to compensation KPIs so leadership can measure impact.",
      },
    ],
  },
  cta: {
    heading: "Ready to empower your distributors on Android?",
    description:
      "Share your launch goals, integrations, and timelines. We'll prepare a tailored proposal and roadmap that keeps every stakeholder aligned.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our team",
    cardBody:
      "Expect a discovery agenda and prototype ideas within one business day. We remain embedded from kickoff through optimisation.",
  },
};
