import { Gamepad2, Globe, Rocket, Users } from "lucide-react";
import {
  ChartLineUp,
  CurrencyCircleDollar,
  MegaphoneSimple,
  ShieldCheckered,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const gamingContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software for gaming industry",
    title: "Cloud MLM Software for gaming industry growth",
    description:
      "The gaming industry continues to expand with digital adoption, creator ecosystems, and community-driven engagement. Cloud MLM Software helps gaming businesses scale affiliate programs, automate rewards, and improve player-centric operations.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Community growth",
        value: "Accelerated",
        detail:
          "Expand gamer and affiliate networks with structured referral and reward workflows.",
        icon: Users,
      },
      {
        label: "Campaign execution",
        value: "Automation-ready",
        detail:
          "Launch promotional programs, incentives, and payout cycles with less manual overhead.",
        icon: Rocket,
      },
      {
        label: "Market reach",
        value: "Global-ready",
        detail:
          "Support multilingual and multi-region operations while keeping central control.",
        icon: Globe,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Software for the gaming industry?",
      paragraph:
        "Cloud MLM Software helps gaming businesses build stronger communities, improve affiliate performance, and streamline growth operations in a competitive market.",
      numberedItems: [
        {
          title: "Scalable ecosystem support",
          description:
            "Scale players, affiliates, and campaign complexity without rebuilding your core platform.",
        },
        {
          title: "Creator and affiliate enablement",
          description:
            "Empower partners with clear referral tracking, reward visibility, and campaign workflows.",
        },
        {
          title: "Flexible monetization support",
          description:
            "Align compensation models with subscriptions, in-game offers, and promotional programs.",
        },
        {
          title: "Reliable and secure operations",
          description:
            "Protect user and transaction data with secure infrastructure and governance-friendly controls.",
        },
      ],
      bottomImage: "/images/industry/gamingdemoImg.webp",
      bottomImageAlt: "MLM software for gaming industry",
      bottomImageOverlayText: "Built for gaming community expansion",
    },
  },
  playsSection: {
    heading: "Affiliate marketing in gaming",
    description:
      "Affiliate marketing helps gaming brands increase reach and improve acquisition efficiency. Cloud MLM Software helps manage end-to-end affiliate operations from onboarding to payouts.",
    plays: [
      {
        title: "Affiliate onboarding and management",
        description:
          "Organize affiliate networks with structured onboarding, tracking, and performance monitoring.",
        icon: MegaphoneSimple,
      },
      {
        title: "Custom commission rules",
        description:
          "Define reward logic based on referrals, subscriptions, conversions, or campaign goals.",
        icon: CurrencyCircleDollar,
      },
      {
        title: "Real-time performance analytics",
        description:
          "Track conversion quality, campaign ROI, and affiliate impact with live dashboards.",
        icon: ChartLineUp,
      },
      {
        title: "Long-term partner retention",
        description:
          "Keep affiliates engaged through transparent payouts and measurable growth outcomes.",
        icon: Gamepad2,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your gaming business",
    description:
      "Core capabilities to help gaming businesses scale network operations and improve campaign outcomes.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Comprehensive network management",
        outcomes: [],
        description:
          "Manage affiliates, teams, and gaming communities with centralized visibility and controls.",
      },
      {
        name: "Flexible compensation plans",
        outcomes: [],
        description:
          "Implement Binary, Unilevel, Matrix, or custom models to match your gaming monetization strategy.",
      },
      {
        name: "Advanced analytics",
        outcomes: [],
        description:
          "Use real-time data to optimize player acquisition, affiliate performance, and campaign ROI.",
      },
      {
        name: "Automated workflows",
        outcomes: [],
        description:
          "Reduce repetitive operations through automated payout, notification, and performance flows.",
      },
      {
        name: "Cross-platform accessibility",
        outcomes: [],
        description:
          "Support distributed teams and partners with cloud access and multi-device usability.",
      },
      {
        name: "Security and reliability",
        outcomes: [],
        description:
          "Protect operational and user data with robust security and reliable service delivery.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why gaming teams choose Cloud MLM Software",
    description:
      "The platform helps gaming organizations stay competitive while scaling partner-led growth.",
    proofPoints: [
      {
        title: "Faster growth execution",
        description:
          "Launch and iterate affiliate campaigns quickly with centralized workflows.",
      },
      {
        title: "Better revenue visibility",
        description:
          "Track commission impact and conversion performance through structured reporting.",
      },
      {
        title: "Stronger ecosystem engagement",
        description:
          "Create consistent experiences for affiliates, creators, and players across markets.",
      },
      {
        title: "Improved operational control",
        description:
          "Manage expansion without fragmented tools by running workflows in one platform.",
      },
    ],
  },
  cta: {
    heading: "Want to scale in the gaming industry? Let's work together.",
    description:
      "Use Cloud MLM Software to strengthen your affiliate ecosystem, improve player acquisition, and scale gaming operations with confidence.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Current game portfolio, community channels, and acquisition strategy.",
        "Affiliate payout logic, performance targets, and operational workflows.",
        "Integration needs for analytics, CRM, payments, and automation systems.",
      ],
      footnote:
        "Expect a tailored rollout plan and measurable success metrics within one business day.",
    },
  },
};

export { gamingContent };
