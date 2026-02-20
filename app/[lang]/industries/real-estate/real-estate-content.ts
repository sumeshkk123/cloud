import {
  Building2,
  HandCoins,
  Sparkles,
  Users,
} from "lucide-react";
import {
  ChartLineUp,
  MegaphoneSimple,
  StackSimple,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const realEstateContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in real estate industry",
    title: "Enhance your real estate business with Cloud MLM Software",
    description:
      "The real estate industry needs fast lead movement, trusted partner networks, and transparent commissions. Cloud MLM Software helps agencies and property teams run direct selling and affiliate operations on one scalable platform.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Commission visibility",
        value: "Real-time",
        detail:
          "Track every payout and incentive from first referral to final property closure.",
        icon: HandCoins,
      },
      {
        label: "Network growth",
        value: "Multi-level ready",
        detail:
          "Expand broker, agent, and referral partner teams with structured compensation plans.",
        icon: Users,
      },
      {
        label: "Operational scale",
        value: "Cloud-based",
        detail:
          "Run listings, leads, onboarding, and payouts from one secure environment.",
        icon: Sparkles,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Software for real estate business?",
      paragraph:
        "Real estate businesses handle complex referral chains, variable commissions, and high-value transactions. Cloud MLM Software simplifies these operations so teams can improve distributor productivity, close deals faster, and grow in new markets.",
      numberedItems: [
        {
          title: "Customizable compensation plans",
          description:
            "Configure binary, matrix, unilevel, and hybrid structures that match your real estate sales strategy.",
        },
        {
          title: "Cloud-based accessibility",
          description:
            "Allow your agents and partners to access leads, customer data, and reports from anywhere.",
        },
        {
          title: "Real-time analytics and reports",
          description:
            "Monitor sales activity, team performance, bonus calculations, and commission trends in one dashboard.",
        },
        {
          title: "Cost-effective scaling",
          description:
            "Automate repetitive manual processes and expand your network with lower operational overhead.",
        },
      ],
      bottomImage: "/images/industry/health-industry-chalanges.webp",
      bottomImageAlt: "MLM software for real estate industry",
      bottomImageOverlayText: "Built for real estate growth at every level",
    },
  },
  playsSection: {
    heading: "Operational capabilities for real estate network growth",
    description:
      "Strengthen agent collaboration, marketing execution, and lead conversion with a single platform.",
    plays: [
      {
        title: "Referral and lead flow automation",
        description:
          "Route inquiries, referrals, and follow-ups to the right partner automatically to reduce drop-offs.",
        icon: StackSimple,
      },
      {
        title: "Property-focused partner network",
        description:
          "Manage agents, channel partners, and promoters with clear hierarchy mapping and accountability.",
        icon: Building2,
      },
      {
        title: "Transparent commission management",
        description:
          "Automate payout calculations and approval workflows for closed deals and recurring incentives.",
        icon: ChartLineUp,
      },
      {
        title: "Multi-channel campaign support",
        description:
          "Coordinate listing promotions across social, digital ads, and direct outreach from one workflow.",
        icon: MegaphoneSimple,
      },
    ],
  },
  programmesSection: {
    heading: "Key features for real estate success",
    description:
      "Cloud MLM Software provides practical modules to improve conversion, collaboration, and payout accuracy.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Lead management and tracking",
        outcomes: [],
        description:
          "Capture leads from multiple channels, assign them instantly, and monitor each stage to closure.",
      },
      {
        name: "Customizable commission structures",
        outcomes: [],
        description:
          "Define commissions by property type, partner level, and performance targets.",
      },
      {
        name: "Agent and distributor onboarding",
        outcomes: [],
        description:
          "Onboard new partners with streamlined registration, verification, and role-based workflows.",
      },
      {
        name: "Document and compliance handling",
        outcomes: [],
        description:
          "Store contracts and transaction records securely with traceable approval history.",
      },
      {
        name: "Campaign and promotion tools",
        outcomes: [],
        description:
          "Launch regional campaigns and monitor response to improve listing visibility and sales.",
      },
      {
        name: "Multi-currency and multi-language support",
        outcomes: [],
        description:
          "Expand internationally with localized user experiences for buyers, agents, and partners.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why real estate teams choose Cloud MLM Software",
    description:
      "It combines direct selling and affiliate management features that help real estate businesses scale with control.",
    proofPoints: [
      {
        title: "Faster partner-led sales cycles",
        description:
          "Use structured MLM workflows to move prospects from first touch to final agreement more efficiently.",
      },
      {
        title: "Greater payout trust",
        description:
          "Transparent commission calculations reduce disputes and improve partner confidence.",
      },
      {
        title: "Better market reach",
        description:
          "Activate local and global referral channels with built-in localization and communication tools.",
      },
      {
        title: "Secure, scalable operations",
        description:
          "Protect sensitive transaction data while supporting continuous growth across markets.",
      },
    ],
  },
  cta: {
    heading: "Got a project in mind? Let's work together.",
    description:
      "Upgrade your real estate business with MLM software built to handle operational complexity and drive measurable growth.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Your target markets, property categories, and partner distribution model.",
        "Compensation and bonus rules for agents, brokers, and referral partners.",
        "Lead management, marketing automation, and reporting priorities.",
      ],
      footnote:
        "Expect a tailored roadmap and implementation blueprint within one business day.",
    },
  },
};

export { realEstateContent };
