import { Globe, Leaf, Signal, Users } from "lucide-react";
import {
  ChartLineUp,
  MegaphoneSimple,
  Plug,
  ShieldCheckered,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const energyContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in energy industry",
    title: "Enhance your energy business with Cloud MLM Software",
    description:
      "The energy industry is transforming fast with rising competition and demand for sustainable solutions. Cloud MLM Software helps energy businesses scale direct selling and affiliate operations with efficient, connected workflows.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Network strength",
        value: "Multi-tier",
        detail:
          "Build and manage layered partner networks with better communication and accountability.",
        icon: Users,
      },
      {
        label: "Insight speed",
        value: "Real-time",
        detail:
          "Track sales, network performance, and growth opportunities through live data visibility.",
        icon: Signal,
      },
      {
        label: "Sustainability focus",
        value: "Energy-ready",
        detail:
          "Support renewable initiatives with tools for sustainability and compliance tracking.",
        icon: Leaf,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Software for the energy industry?",
      paragraph:
        "Cloud MLM Software provides energy-specific capabilities for simplified agent management, commission tracking, and distribution growth. It helps companies improve operational control while expanding into new markets.",
      numberedItems: [
        {
          title: "Tailored solutions",
          description:
            "Built for energy-sector challenges, from partner enablement to performance-driven growth.",
        },
        {
          title: "Scalable platform",
          description:
            "Supports startups and enterprise energy teams with cloud infrastructure that grows with demand.",
        },
        {
          title: "User-friendly operations",
          description:
            "Provide intuitive workflows for admins, distributors, and affiliates across the network.",
        },
        {
          title: "Global market expansion",
          description:
            "Reach new regions with multi-language and multi-currency support for international operations.",
        },
      ],
      bottomImage: "/images/industry/energy-industry-why-choose.webp",
      bottomImageAlt: "MLM software for energy industry",
      bottomImageOverlayText: "Built for energy network growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for energy growth",
    description:
      "Unify direct selling, affiliate programs, and partner execution through one platform.",
    plays: [
      {
        title: "Streamlined network management",
        description:
          "Coordinate multi-level distributor and affiliate structures with clear visibility and control.",
        icon: ChartLineUp,
      },
      {
        title: "Affiliate campaign acceleration",
        description:
          "Launch acquisition campaigns that improve partner performance and sales consistency.",
        icon: MegaphoneSimple,
      },
      {
        title: "Seamless integration layer",
        description:
          "Connect CRM systems, payment gateways, and operational tools into one business workflow.",
        icon: Plug,
      },
      {
        title: "Compliance and sustainability tracking",
        description:
          "Track regulatory and sustainability metrics that support trust and long-term market credibility.",
        icon: ShieldCheckered,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your energy business",
    description:
      "Cloud MLM Software delivers practical tools to improve energy distribution performance and operational efficiency.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Advanced network management tools",
        outcomes: [],
        description:
          "Build and manage multi-level distributor networks with accountability across supply and distribution chains.",
      },
      {
        name: "Custom compensation plans",
        outcomes: [],
        description:
          "Design industry-specific commissions and automate payouts with transparent performance tracking.",
      },
      {
        name: "Real-time data insights",
        outcomes: [],
        description:
          "Monitor sales performance, network activity, and customer engagement metrics as they happen.",
      },
      {
        name: "Sustainability and compliance tracking",
        outcomes: [],
        description:
          "Report sustainability efforts and maintain compliance through built-in governance workflows.",
      },
      {
        name: "Educational tools",
        outcomes: [],
        description:
          "Use e-learning modules to train affiliates and customers on energy products and services.",
      },
      {
        name: "Global business support",
        outcomes: [],
        description:
          "Scale international operations with multilingual and multi-currency capabilities.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why energy teams choose Cloud MLM Software",
    description:
      "It helps energy businesses handle transformation pressures while scaling partner-led growth.",
    proofPoints: [
      {
        title: "Faster network execution",
        description:
          "Improve communication and accountability across multi-tier energy partner structures.",
      },
      {
        title: "Greater transparency",
        description:
          "Automated payouts and performance tracking reduce manual errors and disputes.",
      },
      {
        title: "Stronger sustainability positioning",
        description:
          "Track and communicate renewable-energy impact with clear reporting tools.",
      },
      {
        title: "Scalable growth foundation",
        description:
          "Expand into new markets with secure, adaptable infrastructure and localized operations.",
      },
    ],
  },
  cta: {
    heading: "Want to succeed in the energy sector? Let's work together.",
    description:
      "Empower your energy business with MLM software solutions built to tackle operational challenges and drive long-term success.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Energy product mix, distributor structure, and regional expansion goals.",
        "Commission logic, compliance obligations, and payout requirements.",
        "CRM, payments, and reporting integrations needed for rollout.",
      ],
      footnote:
        "Expect a tailored implementation blueprint and measurable success metrics within one business day.",
    },
  },
};

export { energyContent };
