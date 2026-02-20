import { Compass, Globe, Layers, Users } from "lucide-react";
import {
  ChartLineUp,
  CurrencyCircleDollar,
  MegaphoneSimple,
  ShieldCheckered,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const travelContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software for travel industry",
    title: "Cloud MLM Software for transforming the travel industry",
    description:
      "The travel industry is evolving rapidly with digitalization and rising customer expectations. Cloud MLM Software helps travel businesses scale direct selling and affiliate growth with better operations and stronger engagement.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Operations",
        value: "Streamlined",
        detail:
          "Manage travel agents, affiliates, commissions, and workflows from one centralized platform.",
        icon: Layers,
      },
      {
        label: "User experience",
        value: "Enhanced",
        detail:
          "Provide smoother onboarding, easier promotion flows, and better visibility for all stakeholders.",
        icon: Users,
      },
      {
        label: "Growth reach",
        value: "Global-ready",
        detail:
          "Scale campaigns across markets using multilingual and multi-currency capabilities.",
        icon: Globe,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Software for the travel industry?",
      paragraph:
        "Cloud MLM Software is built to help travel businesses create a thriving network, empower agents, and improve customer satisfaction while expanding revenue.",
      numberedItems: [
        {
          title: "Scalability",
          description:
            "Designed to grow with your travel business as affiliates, customers, and campaigns increase.",
        },
        {
          title: "Custom integrations",
          description:
            "Connect seamlessly with booking systems, payment gateways, and CRM tools.",
        },
        {
          title: "User-friendly interface",
          description:
            "Simplify daily tasks for agents, affiliates, and customers with clear workflows.",
        },
        {
          title: "Reliable support",
          description:
            "Keep operations stable with ongoing assistance and continuous platform enhancements.",
        },
      ],
      bottomImage: "/images/industry/travelbanner1.webp",
      bottomImageAlt: "MLM software for travel industry",
      bottomImageOverlayText: "Built for travel network growth",
    },
  },
  playsSection: {
    heading: "Affiliate marketing for travel agencies",
    description:
      "Affiliate marketing is a major growth driver for travel businesses. Cloud MLM Software helps you onboard, manage, and optimize affiliate programs end-to-end.",
    plays: [
      {
        title: "Affiliate program management",
        description:
          "Effortlessly onboard and manage affiliates promoting your travel packages.",
        icon: MegaphoneSimple,
      },
      {
        title: "Commission flexibility",
        description:
          "Define commission rates by bookings, referrals, and campaign objectives.",
        icon: CurrencyCircleDollar,
      },
      {
        title: "Data insights",
        description:
          "Analyze affiliate performance and campaign results to improve future strategy.",
        icon: ChartLineUp,
      },
      {
        title: "Global affiliate reach",
        description:
          "Attract and engage affiliates worldwide to expand your customer base.",
        icon: Compass,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your travel business",
    description:
      "Practical capabilities to scale travel operations, improve conversion, and strengthen network performance.",
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
          "Build and manage large networks of travel agents and affiliates while tracking performance metrics.",
      },
      {
        name: "Customizable compensation plans",
        outcomes: [],
        description:
          "Implement Binary, Unilevel, or Matrix plans tailored to your travel business model.",
      },
      {
        name: "Seamless travel tool integration",
        outcomes: [],
        description:
          "Connect booking systems, payment gateways, and CRM tools for a unified workflow.",
      },
      {
        name: "Real-time data insights",
        outcomes: [],
        description:
          "Monitor bookings, sales trends, and customer preferences to refine offers and targeting.",
      },
      {
        name: "Affiliate management automation",
        outcomes: [],
        description:
          "Onboard, track, and reward affiliates with dashboards and promotion support assets.",
      },
      {
        name: "Global accessibility",
        outcomes: [],
        description:
          "Expand internationally with multilingual and multi-currency support across your platform.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why travel teams adopt Cloud MLM Software",
    description:
      "The platform helps travel businesses improve scalability, campaign execution, and operational control.",
    proofPoints: [
      {
        title: "Higher marketing efficiency",
        description:
          "Scale promotions through affiliates while keeping operational costs manageable.",
      },
      {
        title: "More predictable growth",
        description:
          "Use measurable affiliate and booking data to improve revenue planning and campaign strategy.",
      },
      {
        title: "Better partner enablement",
        description:
          "Provide affiliates and agents with tools they need to sell travel packages effectively.",
      },
      {
        title: "Stronger operational reliability",
        description:
          "Maintain continuity with robust workflows, integrations, and dependable platform support.",
      },
    ],
  },
  cta: {
    heading: "Want to succeed in the travel industry? Let's work together.",
    description:
      "Equip your travel business with Cloud MLM Software to meet changing market demands and create rewarding experiences for all stakeholders.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Travel package structure, target segments, and regional expansion goals.",
        "Agent and affiliate commission logic, onboarding flow, and payout rules.",
        "Booking, payment, CRM, and reporting integrations required for rollout.",
      ],
      footnote:
        "Expect a tailored implementation plan and measurable outcomes within one business day.",
    },
  },
};

export { travelContent };
