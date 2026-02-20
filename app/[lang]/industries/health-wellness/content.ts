import {
  Activity,
  Globe,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  ChartLineUp,
  MegaphoneSimple,
  Package,
  Stethoscope,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const healthWellnessContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in health and wellness industry",
    title: "Enhance your health and wellness business with Cloud MLM Software",
    description:
      "The health and wellness industry is expanding quickly with rising demand for preventive care, supplements, and lifestyle products. Cloud MLM Software helps teams manage direct selling and affiliate operations with scalable, compliant workflows.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Compliance confidence",
        value: "Regulation-ready",
        detail:
          "Support market-specific rules, product guidance, and distributor governance in one platform.",
        icon: ShieldCheck,
      },
      {
        label: "Growth model fit",
        value: "MLM + affiliate",
        detail:
          "Run referral-driven wellness sales with flexible compensation and partner management.",
        icon: Users,
      },
      {
        label: "Operational reliability",
        value: "Cloud-based",
        detail:
          "Scale distributors, products, and markets with secure and reliable infrastructure.",
        icon: Sparkles,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why MLM software for health and wellness business?",
      paragraph:
        "Health and wellness brands need clear distributor workflows, transparent rewards, and strong customer trust. Cloud MLM Software simplifies complex structures, improves team productivity, and helps businesses grow sustainably.",
      numberedItems: [
        {
          title: "Customizable compensation plans",
          description:
            "Configure binary, matrix, unilevel, and hybrid plans that align with your product and revenue strategy.",
        },
        {
          title: "E-commerce and order integration",
          description:
            "Connect products, carts, payments, and order tracking for smoother customer and distributor experiences.",
        },
        {
          title: "Multi-language and multi-currency support",
          description:
            "Operate across regions with localized distributor journeys and flexible global payouts.",
        },
        {
          title: "Real-time analytics and reporting",
          description:
            "Monitor sales performance, team activity, and bonus trends to make faster decisions.",
        },
      ],
      bottomImage: "/images/industry/health.webp",
      bottomImageAlt: "MLM software for health and wellness industry",
      bottomImageOverlayText: "Built for health and wellness growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for health and wellness growth",
    description:
      "Support education-led selling, partner motivation, and reliable fulfillment from one platform.",
    plays: [
      {
        title: "Distributor onboarding and enablement",
        description:
          "Guide new partners with structured onboarding, learning assets, and performance milestones.",
        icon: Stethoscope,
      },
      {
        title: "Wellness product catalogue management",
        description:
          "Manage supplements, nutrition, skincare, and lifestyle products with accurate listing control.",
        icon: Package,
      },
      {
        title: "Incentive and performance programs",
        description:
          "Drive retention with transparent commissions, rank advancement, and targeted reward campaigns.",
        icon: ChartLineUp,
      },
      {
        title: "Multi-channel marketing execution",
        description:
          "Coordinate email, social, and campaign automation to improve engagement and conversions.",
        icon: MegaphoneSimple,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your health and wellness business",
    description:
      "Cloud MLM Software includes practical tools that improve sales consistency and customer outcomes.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Customer wellness journey tracking",
        outcomes: [],
        description:
          "Track customer preferences, reorder behavior, and engagement patterns to improve retention.",
      },
      {
        name: "Automated commission distribution",
        outcomes: [],
        description:
          "Calculate and distribute commissions accurately across levels with minimal manual work.",
      },
      {
        name: "Inventory and fulfillment visibility",
        outcomes: [],
        description:
          "Monitor stock, orders, and delivery workflows to avoid disruptions and improve customer trust.",
      },
      {
        name: "Campaign and referral management",
        outcomes: [],
        description:
          "Run promotional campaigns and referral programs that support consistent network growth.",
      },
      {
        name: "Distributor performance dashboard",
        outcomes: [],
        description:
          "Evaluate individual and team performance with live insights for coaching and planning.",
      },
      {
        name: "Global expansion support",
        outcomes: [],
        description:
          "Scale into new markets with multi-currency, multi-language, and role-based operational controls.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why health and wellness brands choose Cloud MLM Software",
    description:
      "Teams choose Cloud MLM Software to scale network marketing while maintaining quality and trust.",
    proofPoints: [
      {
        title: "Improved distributor productivity",
        description:
          "Automated workflows reduce operational friction and help partners focus on selling and support.",
      },
      {
        title: "Better customer retention",
        description:
          "Personalized outreach and timely order experiences improve repeat purchases and loyalty.",
      },
      {
        title: "Transparent compensation operations",
        description:
          "Clear payout logic strengthens distributor confidence and reduces commission disputes.",
      },
      {
        title: "Scalable and secure growth",
        description:
          "Expand product lines and markets confidently with stable cloud infrastructure and secure controls.",
      },
    ],
  },
  cta: {
    heading: "Got a project in mind? Let's work together.",
    description:
      "Strengthen your health and wellness business with MLM software designed to solve operational challenges and accelerate growth.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Target markets, product categories, and compliance priorities.",
        "Compensation and incentive structure for your distributor model.",
        "Marketing, ecommerce, and reporting requirements for rollout.",
      ],
      footnote:
        "Expect a tailored implementation blueprint and success metrics within one business day.",
    },
  },
};

export { healthWellnessContent };
