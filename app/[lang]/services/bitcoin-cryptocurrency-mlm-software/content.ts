import { CurrencyCircleDollar, Wallet, ChartLine } from "@phosphor-icons/react";
import type { ServiceFeatureContent } from "@/components/frontend/services/subpage";

export const bitcoinCryptocurrencyContent: ServiceFeatureContent = {
  hero: {
    badge: "Services",
    title: "Bitcoin & Cryptocurrency MLM Software",
    description:
      "Run your MLM or direct selling business with crypto payouts and multi-currency support. Cloud MLM Software supports Bitcoin and cryptocurrency integration for commissions, e-wallets, and compliant reporting.",
    primaryCta: "Request a demo",
    secondaryCta: "Explore all features",
    metrics: [
      { label: "Crypto payouts", value: "Supported", detail: "Bitcoin and major cryptocurrencies." },
      { label: "Multi-currency", value: "Built-in", detail: "Fiat and crypto in one platform." },
      { label: "Compliance", value: "Audit-ready", detail: "Reporting and KYC integration." },
    ],
  },
  intro: {
    badge: "Why this service",
    heading: "Cryptocurrency and MLM in one platform",
    paragraphs: [
      "Bitcoin and cryptocurrency MLM software from Cloud MLM gives you commission payouts, e-wallets, and multi-currency support in a single system. Integrate with your existing compensation plans and genealogy so distributors can earn and receive payouts in crypto or fiat.",
      "We build for compliance: audit trails, KYC integration, and reporting that work across fiat and crypto. Scale your network with flexible payout options and real-time dashboards.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of Bitcoin & Cryptocurrency MLM",
      points: [
        "Bitcoin and major cryptocurrency payout support",
        "Multi-currency and e-wallet integration",
        "Compensation and genealogy integration",
        "Compliance and audit-ready reporting",
      ],
    },
  },
  importanceSection: {
    badge: "Crypto MLM",
    heading: "Why use cryptocurrency in MLM software?",
    subheading: "Importance of crypto-ready MLM platforms",
    paragraphs: [
      "Distributors and members increasingly expect payout options in Bitcoin and other cryptocurrencies. An MLM platform that supports crypto alongside fiat gives you one system for commissions, e-wallets, and reporting—reducing manual reconciliation and supporting global networks.",
      "Cloud MLM's Bitcoin and cryptocurrency integration keeps compensation rules, genealogy, and payouts in sync. You get audit trails and compliance-ready reporting for both fiat and crypto transactions.",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software – Bitcoin and cryptocurrency MLM dashboard",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Bitcoin & Cryptocurrency MLM includes",
    description:
      "Crypto payouts, multi-currency support, and compliance reporting in one platform.",
    items: [
      {
        title: "Crypto payouts",
        description:
          "Support Bitcoin and major cryptocurrencies for commissions and bonuses. Integrate with your compensation plan and genealogy.",
      },
      {
        title: "Multi-currency & e-wallets",
        description:
          "Run fiat and crypto in one platform. E-wallets and multi-currency dashboards for distributors.",
      },
      {
        title: "Compensation & genealogy",
        description:
          "Same compensation engine and genealogy; add crypto as a payout option without changing plan logic.",
      },
      {
        title: "Compliance & reporting",
        description:
          "Audit trails, KYC integration, and reporting for fiat and crypto. Stay compliant across regions.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Bitcoin and Cryptocurrency MLM Software",
    badge: "Capabilities",
    heading: "Key capabilities of Bitcoin & Cryptocurrency MLM",
    description:
      "Crypto payouts, multi-currency, e-wallets, compensation integration, and compliance reporting.",
    items: [
      {
        number: "01",
        title: "Crypto payouts",
        description:
          "Bitcoin and major cryptocurrencies for commissions and bonuses. Configurable per plan or region.",
      },
      {
        number: "02",
        title: "Multi-currency & e-wallets",
        description:
          "Fiat and crypto in one platform. E-wallets and dashboards for distributors with real-time balances.",
      },
      {
        number: "03",
        title: "Integration & compliance",
        description:
          "Compensation and genealogy stay in sync. Audit trails and reporting for fiat and crypto.",
      },
    ],
  },
  features: [
    {
      icon: CurrencyCircleDollar,
      title: "Crypto payouts",
      description:
        "Bitcoin and major cryptocurrency support for commissions and bonuses. Integrate with your compensation plan.",
    },
    {
      icon: Wallet,
      title: "E-wallets & multi-currency",
      description:
        "Multi-currency dashboards and e-wallets so distributors can view balances and receive payouts in crypto or fiat.",
    },
    {
      icon: ChartLine,
      title: "Reporting & compliance",
      description:
        "Audit trails and compliance-ready reporting for fiat and crypto. KYC integration where required.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about Bitcoin and Cryptocurrency MLM Software.",
    items: [
      {
        question: "Which cryptocurrencies are supported?",
        answer:
          "We support Bitcoin and other major cryptocurrencies. Exact support depends on your configuration and region; we can tailor integration to your needs.",
      },
      {
        question: "Can we use both fiat and crypto?",
        answer:
          "Yes. The platform supports multi-currency and e-wallets so you can run fiat and crypto in one system. Compensation and genealogy work the same; payout options can be crypto or fiat.",
      },
      {
        question: "Is reporting compliant for crypto?",
        answer:
          "We provide audit trails and reporting for both fiat and crypto transactions. KYC integration and compliance features can be configured per region.",
      },
    ],
  },
  cta: {
    heading: "Get Bitcoin & Cryptocurrency MLM Software",
    description:
      "Run your MLM with crypto payouts and multi-currency support. Request a demo and see how Cloud MLM can power your network.",
    buttonText: "Request a demo",
    secondaryCta: "Explore all features",
    trustIndicators: ["Crypto-ready", "Multi-currency", "Compliance support"],
  },
};
