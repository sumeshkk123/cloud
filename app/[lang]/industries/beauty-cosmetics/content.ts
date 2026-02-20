import {
  Beaker,
  Globe,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Heartbeat
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const beautyCosmeticsContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in beauty and cosmetic industry",
    title: "Enhance your beauty and cosmetic business with Cloud MLM Software",
    description:
      "The beauty and cosmetics industry moves fast with changing trends and customer preferences. Cloud MLM Software helps brands run direct selling and affiliate operations with efficient, scalable workflows.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Regulatory coverage",
        value: "Global-ready",
        detail: "Built-in controls support safety, quality, and policy requirements across regions.",
        icon: ShieldCheck,
      },
      {
        label: "Business model fit",
        value: "MLM + affiliate",
        detail: "Run direct selling and affiliate growth programs together on a single platform.",
        icon: Users,
      },
      {
        label: "Scalable operations",
        value: "Enterprise-grade",
        detail: "Secure infrastructure that grows with product lines, teams, and market expansion.",
        icon: Sparkles,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "MLM software for direct selling and affiliate marketing",
      paragraph:
        "Beauty and cosmetics brands face strict compliance, intense competition, and complex supply chains. Many teams are adopting MLM and affiliate strategies to scale faster with better distributor and customer engagement.",
      numberedItems: [
        {
          title: "Customizable compensation plans",
          description: "Build Binary, Matrix, Unilevel, and custom structures aligned to your commercial goals.",
        },
        {
          title: "E-commerce integration",
          description: "Connect Shopify, WooCommerce, and Magento to synchronize products, orders, and payouts.",
        },
        {
          title: "Multi-language and multi-currency support",
          description: "Serve diverse markets with localized experiences for distributors and customers.",
        },
        {
          title: "Comprehensive reporting and analytics",
          description: "Track sales, distributor activity, and performance trends to drive better decisions.",
        },
        {
          title: "Secure and scalable infrastructure",
          description: "Protect business data and support long-term growth with reliable cloud architecture.",
        },
      ],
      bottomImage: "/images/industry/cosmeticIntro.webp",
      bottomImageAlt: "MLM software for beauty and cosmetics industry",
      bottomImageOverlayText: "Built for beauty and cosmetics growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for beauty and cosmetics growth",
    description: "Enable personalized selling, inventory control, and distributor motivation with one platform.",
    plays: [
      {
        title: "Personalized customer experience",
        description:
          "Use customer profiling and recommendation flows to help consultants deliver tailored product suggestions.",
        icon: Heartbeat,
      },
      {
        title: "Seamless inventory management",
        description:
          "Track products across the MLM network with real-time stock visibility and restocking alerts.",
        icon: Beaker,
      },
      {
        title: "Incentive-driven growth",
        description:
          "Motivate distributors with bonuses, tiered commissions, and milestone rewards.",
        icon: TrendingUp,
      },
      {
        title: "Multi-channel selling",
        description:
          "Coordinate online and offline selling with ecommerce, social, and in-person workflows.",
        icon: Globe,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your beauty and cosmetics business",
    description:
      "Cloud MLM Software provides practical tools that improve selling efficiency and customer satisfaction.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Product catalogue storytelling",
        outcomes: [],
        description: "Launch immersive product pages with ingredient education, shade finders, and cross-sell journeys.",
      },
      {
        name: "Order tracking and management",
        outcomes: [],
        description: "Track orders from placement to fulfillment for a more reliable customer experience.",
      },
      {
        name: "Personalized selling strategies",
        outcomes: [],
        description: "Create selling approaches based on buying behavior and customer preferences.",
      },
      {
        name: "Customer preference tracking",
        outcomes: [],
        description: "Understand product preferences to run targeted campaigns and improve repeat purchases.",
      },
      {
        name: "Marketing tools and strategies",
        outcomes: [],
        description: "Run targeted email, social, and digital campaigns to amplify visibility and conversions.",
      },
      {
        name: "Omni-channel promotions",
        outcomes: [],
        description: "Promote cosmetics across channels and measure campaign performance from one dashboard.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why beauty and cosmetics brands choose Cloud MLM Software",
    description:
      "Teams use Cloud MLM Software to handle direct selling and affiliate operations while keeping growth sustainable.",
    proofPoints: [
      {
        title: "Regulatory and safety readiness",
        description: "Support product quality and legal requirements without slowing go-to-market execution.",
      },
      {
        title: "Competitive differentiation",
        description: "Build stronger customer loyalty with tailored experiences and data-driven recommendations.",
      },
      {
        title: "Efficient supply chain visibility",
        description: "Coordinate inventory, distribution, and logistics with clearer operational control.",
      },
      {
        title: "Scalable distributor growth",
        description: "Combine incentive structures, analytics, and multichannel tools to improve long-term performance.",
      },
    ],
  },
  cta: {
    heading: "Got a project in mind? Let's work together.",
    description:
      "Strengthen your beauty and cosmetics business with MLM software solutions designed to tackle challenges and drive growth.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Target geographies, compliance requirements, and product categories.",
        "Compensation and incentive structure for distributor motivation.",
        "Ecommerce, marketing, and reporting requirements for your sales model.",
      ],
      footnote: "Expect a tailored blueprint and success metrics within one business day.",
    },
  },
};

export { beautyCosmeticsContent };
