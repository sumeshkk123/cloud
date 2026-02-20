import {
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  ChartLineUp,
  MegaphoneSimple,
  ShoppingBag,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const ecommerceContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in ecommerce industry",
    title: "Enhance your ecommerce business with Cloud MLM Software",
    description:
      "The ecommerce industry is growing rapidly, but scaling profitably requires better distributor, affiliate, and operations control. Cloud MLM Software helps ecommerce brands unify direct selling and affiliate growth in one platform.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Growth model fit",
        value: "MLM + affiliate",
        detail:
          "Blend direct selling and affiliate programs to expand network-driven ecommerce sales.",
        icon: Users,
      },
      {
        label: "Operational speed",
        value: "Automation-first",
        detail:
          "Automate commissions, sales tracking, and reporting to reduce manual overhead.",
        icon: TrendingUp,
      },
      {
        label: "Global readiness",
        value: "Multi-market",
        detail:
          "Support international affiliates and customers with multi-currency and multilingual workflows.",
        icon: Globe,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Platform for ecommerce?",
      paragraph:
        "In a competitive digital market, ecommerce businesses need scalable technology and high-performance partner channels. Cloud MLM Software combines cloud infrastructure with advanced MLM tools to simplify affiliate and distributor growth.",
      numberedItems: [
        {
          title: "Affiliate marketing simplified",
          description:
            "Launch integrated affiliate programs, customize commissions, and track performance in real time.",
        },
        {
          title: "Direct selling enablement",
          description:
            "Enable distributors to grow sales networks with structured plans and automated incentives.",
        },
        {
          title: "Global scalability",
          description:
            "Expand across borders with localized operations, secure payments, and reliable cloud performance.",
        },
        {
          title: "Streamlined operations",
          description:
            "Unify commission logic, order-linked tracking, and analytics to improve execution and profitability.",
        },
      ],
      bottomImage: "/images/industry/ecommerce-industry-challange.webp",
      bottomImageAlt: "MLM software for ecommerce industry",
      bottomImageOverlayText: "Built for ecommerce network growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for ecommerce growth",
    description:
      "Coordinate marketing, distributor performance, and commerce workflows from one platform.",
    plays: [
      {
        title: "Advanced MLM plan management",
        description:
          "Implement binary, unilevel, matrix, and custom compensation plans with transparent logic.",
        icon: ChartLineUp,
      },
      {
        title: "Affiliate campaign execution",
        description:
          "Launch and optimize affiliate campaigns with conversion visibility and payout control.",
        icon: MegaphoneSimple,
      },
      {
        title: "Store and order synchronization",
        description:
          "Integrate ecommerce systems and sync sales data for better inventory and fulfillment decisions.",
        icon: ShoppingBag,
      },
      {
        title: "Brand network expansion",
        description:
          "Grow peer-driven selling networks that increase retention and repeat purchase behavior.",
        icon: Storefront,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your ecommerce business",
    description:
      "Cloud MLM Software delivers practical tools to tackle ecommerce growth, retention, and scale challenges.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Advanced MLM tools",
        outcomes: [],
        description:
          "Design custom MLM plans, monitor distributor activity, and automate commission payouts.",
      },
      {
        name: "Powerful affiliate marketing",
        outcomes: [],
        description:
          "Run affiliate programs with flexible commission models and real-time performance reporting.",
      },
      {
        name: "Seamless ecommerce integration",
        outcomes: [],
        description:
          "Integrate with platforms like WooCommerce and Shopify plus secure global payment gateways.",
      },
      {
        name: "Scalable cloud operations",
        outcomes: [],
        description:
          "Scale infrastructure and partner operations as your catalog, regions, and sales network expand.",
      },
      {
        name: "User-friendly administration",
        outcomes: [],
        description:
          "Simplify platform management for admins, distributors, and affiliates with intuitive workflows.",
      },
      {
        name: "Performance analytics",
        outcomes: [],
        description:
          "Track sales, retention, and channel outcomes to optimize growth strategy with confidence.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why ecommerce teams choose Cloud MLM Software",
    description:
      "It helps ecommerce businesses overcome common growth bottlenecks with measurable operational gains.",
    proofPoints: [
      {
        title: "Better competitive positioning",
        description:
          "Differentiate your brand with integrated direct selling and affiliate-led growth programs.",
      },
      {
        title: "Improved customer retention",
        description:
          "Use incentives, distributor engagement, and network effects to increase repeat purchases.",
      },
      {
        title: "Lower marketing waste",
        description:
          "Shift from high-cost broad campaigns to performance-based partner channels.",
      },
      {
        title: "Scalable commerce infrastructure",
        description:
          "Support expansion with robust systems for payouts, integrations, and global payment complexity.",
      },
    ],
  },
  cta: {
    heading: "Want to succeed in ecommerce? Let's work together.",
    description:
      "Empower your ecommerce business with MLM software solutions built to tackle growth challenges and drive long-term performance.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Current ecommerce stack, integrations, and payment gateway requirements.",
        "Compensation structures for distributors, affiliates, and referral programs.",
        "Target markets, growth KPIs, and rollout timeline for implementation.",
      ],
      footnote:
        "Expect a tailored implementation blueprint and measurable success metrics within one business day.",
    },
  },
};

export { ecommerceContent };
