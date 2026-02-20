import {
  Globe,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  CalendarCheck,
  ChartLineUp,
  HouseLine,
  MegaphoneSimple,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const homeCareContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in home care industry",
    title: "Enhance your home care business with Cloud MLM Software",
    description:
      "Home care businesses need trusted teams, transparent payouts, and smooth service coordination. Cloud MLM Software helps brands scale direct selling and affiliate operations with reliable, cloud-based workflows.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Service reliability",
        value: "Operational-ready",
        detail:
          "Manage care networks, partner workflows, and customer support with consistent processes.",
        icon: ShieldCheck,
      },
      {
        label: "Growth model fit",
        value: "MLM + affiliate",
        detail:
          "Run referral-led expansion with structured compensation for distributors and partners.",
        icon: Users,
      },
      {
        label: "Scalable delivery",
        value: "Cloud-based",
        detail:
          "Support growth across regions while maintaining visibility over performance and payouts.",
        icon: Sparkles,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why MLM software for home care business?",
      paragraph:
        "The home care industry is built on trust, quality service, and long-term relationships. Cloud MLM Software helps organizations streamline distributor management, automate commissions, and improve customer satisfaction while scaling operations.",
      numberedItems: [
        {
          title: "Customizable compensation plans",
          description:
            "Configure binary, matrix, unilevel, and hybrid plans aligned with your home care growth strategy.",
        },
        {
          title: "Service and distributor coordination",
          description:
            "Manage caregivers, promoters, and partner hierarchies efficiently in one centralized system.",
        },
        {
          title: "Real-time reports and analytics",
          description:
            "Track team performance, referrals, commissions, and operational trends with actionable dashboards.",
        },
        {
          title: "Multi-market readiness",
          description:
            "Support expansion with multi-language and multi-currency workflows for regional teams.",
        },
      ],
      bottomImage: "/images/industry/homecarebanner.webp",
      bottomImageAlt: "MLM software for home care industry",
      bottomImageOverlayText: "Built for home care network growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for home care growth",
    description:
      "Improve distributor productivity, campaign impact, and service consistency with one platform.",
    plays: [
      {
        title: "Care service network management",
        description:
          "Manage teams and service partners across territories with clear structure and accountability.",
        icon: HouseLine,
      },
      {
        title: "Commission automation and transparency",
        description:
          "Process incentives and payouts faster with accurate, rules-based commission workflows.",
        icon: ChartLineUp,
      },
      {
        title: "Schedule and activity coordination",
        description:
          "Track appointments, service follow-ups, and distributor tasks to improve delivery quality.",
        icon: CalendarCheck,
      },
      {
        title: "Promotion and referral campaigns",
        description:
          "Run multi-channel awareness campaigns to increase leads, referrals, and customer engagement.",
        icon: MegaphoneSimple,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your home care business",
    description:
      "Cloud MLM Software provides practical tools to support service excellence and sustainable network growth.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Distributor onboarding and management",
        outcomes: [],
        description:
          "Onboard and manage partners with streamlined workflows, role controls, and hierarchy visibility.",
      },
      {
        name: "Referral and lead tracking",
        outcomes: [],
        description:
          "Capture referrals, assign leads, and monitor conversion stages for better sales coordination.",
      },
      {
        name: "Automated payout processing",
        outcomes: [],
        description:
          "Compute and distribute commissions accurately to reduce errors and build partner trust.",
      },
      {
        name: "Campaign and communication tools",
        outcomes: [],
        description:
          "Launch localized promotions and maintain regular communication with distributors and customers.",
      },
      {
        name: "Service performance analytics",
        outcomes: [],
        description:
          "Use reporting dashboards to optimize distributor engagement and customer satisfaction outcomes.",
      },
      {
        name: "Global expansion support",
        outcomes: [],
        description:
          "Scale operations confidently with multi-language, multi-currency, and cloud-enabled access.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why home care teams choose Cloud MLM Software",
    description:
      "It helps home care organizations grow partner-led sales while preserving quality and trust.",
    proofPoints: [
      {
        title: "Higher distributor productivity",
        description:
          "Automated workflows reduce manual overhead and help teams focus on service delivery and growth.",
      },
      {
        title: "Clear and trusted compensation",
        description:
          "Transparent payout logic improves confidence and reduces commission-related disputes.",
      },
      {
        title: "Stronger customer engagement",
        description:
          "Improved communication and service coordination support better long-term customer relationships.",
      },
      {
        title: "Scalable operations",
        description:
          "Cloud infrastructure supports expansion across geographies, teams, and product/service categories.",
      },
    ],
  },
  cta: {
    heading: "Got a project in mind? Let's work together.",
    description:
      "Upgrade your home care business with MLM software solutions designed to improve operational control and accelerate growth.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Target markets, service categories, and partner/distributor model.",
        "Compensation rules, incentive logic, and payout governance priorities.",
        "Reporting, campaign, and system integration requirements for rollout.",
      ],
      footnote:
        "Expect a tailored implementation blueprint and success metrics within one business day.",
    },
  },
};

export { homeCareContent };
