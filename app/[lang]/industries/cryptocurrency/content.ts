import {
  Cpu,
  Globe,
  LockKeyhole,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  ChartLineUp,
  CurrencyCircleDollar,
  ShieldCheckered,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const cryptocurrencyContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in cryptocurrency industry",
    title: "Enhance your cryptocurrency business with Cloud MLM Software",
    description:
      "The crypto market moves quickly with constant innovation, strict security expectations, and evolving regulations. Cloud MLM Software helps cryptocurrency businesses manage direct selling and affiliate operations with confidence.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Security posture",
        value: "Enterprise-grade",
        detail:
          "Protect wallet interactions, user records, and payout flows with secure operational controls.",
        icon: LockKeyhole,
      },
      {
        label: "Compensation flexibility",
        value: "MLM + affiliate",
        detail:
          "Configure adaptable plans for network growth, partner rewards, and long-term retention.",
        icon: Users,
      },
      {
        label: "Global readiness",
        value: "Multi-market",
        detail:
          "Support international expansion with localized experiences and multi-currency workflows.",
        icon: Globe,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why MLM software for cryptocurrency business?",
      paragraph:
        "Cryptocurrency businesses operate in a highly dynamic environment where trust, transparency, and automation are critical. Cloud MLM Software provides the tools needed to build and manage strong distributor networks while keeping operations efficient.",
      numberedItems: [
        {
          title: "Network growth and management",
          description:
            "Build and scale partner hierarchies with clear structures that improve collaboration and accountability.",
        },
        {
          title: "Transparent commission handling",
          description:
            "Automate commission and bonus processing with real-time visibility for both admins and distributors.",
        },
        {
          title: "Real-time reporting and analytics",
          description:
            "Monitor performance trends, team activity, and revenue metrics to make faster strategic decisions.",
        },
        {
          title: "Cloud-enabled accessibility",
          description:
            "Give your team secure access to data and workflows anytime, from any location or device.",
        },
      ],
      bottomImage: "/images/industry/crypto.webp",
      bottomImageAlt: "MLM software for cryptocurrency industry",
      bottomImageOverlayText: "Built for secure and scalable crypto growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for cryptocurrency growth",
    description:
      "Unify secure transactions, partner enablement, and campaign execution on one platform.",
    plays: [
      {
        title: "Wallet and transaction coordination",
        description:
          "Support smooth crypto transaction flows while maintaining strong operational control across networks.",
        icon: Wallet,
      },
      {
        title: "Compensation automation",
        description:
          "Run multi-level commissions, incentives, and bonus cycles with reduced manual intervention.",
        icon: CurrencyCircleDollar,
      },
      {
        title: "Performance intelligence",
        description:
          "Track distributor activity, conversion patterns, and payout outcomes through actionable dashboards.",
        icon: ChartLineUp,
      },
      {
        title: "Security and compliance support",
        description:
          "Strengthen confidence with protection-focused workflows and controls aligned to crypto business needs.",
        icon: ShieldCheckered,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to elevate your cryptocurrency business",
    description:
      "Cloud MLM Software offers practical functionality for secure growth, partner management, and better decision-making.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "User and distributor management",
        outcomes: [],
        description:
          "Organize and manage user roles, onboarding, and distributor structures in one centralized system.",
      },
      {
        name: "Smart contract and payout workflows",
        outcomes: [],
        description:
          "Automate payout logic and reward cycles with reliable, transparent execution.",
      },
      {
        name: "Crypto-focused commission planning",
        outcomes: [],
        description:
          "Design compensation models that align with business goals and partner incentives.",
      },
      {
        name: "Campaign and promotion tools",
        outcomes: [],
        description:
          "Run referral and marketing campaigns to improve acquisition and engagement across channels.",
      },
      {
        name: "Advanced analytics dashboard",
        outcomes: [],
        description:
          "Use live metrics and reports to evaluate performance and optimize growth strategies.",
      },
      {
        name: "Scalable cloud infrastructure",
        outcomes: [],
        description:
          "Expand operations confidently with secure, cloud-based architecture built for high-volume usage.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why cryptocurrency teams choose Cloud MLM Software",
    description:
      "It helps crypto businesses scale affiliate and network marketing operations with stronger control and trust.",
    proofPoints: [
      {
        title: "Secure transaction ecosystem",
        description:
          "Protect critical workflows and reduce operational risk with security-first architecture.",
      },
      {
        title: "Faster network expansion",
        description:
          "Onboard and activate distributors efficiently with configurable growth and reward structures.",
      },
      {
        title: "Better operational visibility",
        description:
          "Gain real-time insight into sales, commissions, and team performance to improve execution.",
      },
      {
        title: "Reliable long-term scalability",
        description:
          "Support rapid growth in users, transactions, and markets without compromising stability.",
      },
    ],
  },
  cta: {
    heading: "Got a project in mind? Let's work together.",
    description:
      "Strengthen your cryptocurrency business with MLM software solutions designed for security, transparency, and sustainable growth.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Your token ecosystem, target geographies, and distributor growth model.",
        "Compensation logic, reward triggers, and operational security priorities.",
        "Reporting, campaign, and integration needs for your crypto business workflows.",
      ],
      footnote:
        "Expect a tailored implementation blueprint and success metrics within one business day.",
    },
  },
};

export { cryptocurrencyContent };
