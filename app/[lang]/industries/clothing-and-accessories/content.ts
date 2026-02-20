import {
  Globe,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  ChartLineUp,
  CoatHanger,
  MegaphoneSimple,
  ShoppingBag,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const clothingAccessoriesContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in clothing and accessories industry",
    title: "Enhance your clothing and accessories business with Cloud MLM Software",
    description:
      "Fashion and accessories businesses need fast launches, accurate inventory movement, and transparent distributor rewards. Cloud MLM Software helps brands run direct selling and affiliate operations with scalable control.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Inventory control",
        value: "Real-time",
        detail:
          "Track product movement, stock levels, and fulfillment updates across your network.",
        icon: PackageSearch,
      },
      {
        label: "Growth model fit",
        value: "MLM + affiliate",
        detail:
          "Expand stylist and distributor networks using flexible compensation strategies.",
        icon: Users,
      },
      {
        label: "Market readiness",
        value: "Global-ready",
        detail:
          "Launch in multiple regions with localized workflows and scalable cloud infrastructure.",
        icon: Globe,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why MLM software for clothing and accessories business?",
      paragraph:
        "The clothing and accessories industry moves with trends and seasonal demand. Cloud MLM Software helps brands simplify distributor operations, automate payouts, and deliver better customer experiences while scaling in competitive markets.",
      numberedItems: [
        {
          title: "Customizable compensation plans",
          description:
            "Design binary, matrix, unilevel, and hybrid plans that align with product launches and network goals.",
        },
        {
          title: "E-commerce and order integration",
          description:
            "Synchronize catalogues, orders, and payouts to reduce friction across channels.",
        },
        {
          title: "Real-time analytics and reporting",
          description:
            "Track sales, distributor performance, and campaign outcomes with actionable dashboards.",
        },
        {
          title: "Multi-language and multi-currency support",
          description:
            "Support global distributors and customers with localized operations and currency flexibility.",
        },
      ],
      bottomImage: "/images/industry/clothingbannerIMg.webp",
      bottomImageAlt: "MLM software for clothing and accessories industry",
      bottomImageOverlayText: "Built for fashion and accessories growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for clothing and accessories growth",
    description:
      "Coordinate sales, campaigns, and distributor performance through one integrated platform.",
    plays: [
      {
        title: "Smart catalogue and merchandising",
        description:
          "Manage product lines, variants, and launch cycles with better visibility and control.",
        icon: CoatHanger,
      },
      {
        title: "Order and fulfillment management",
        description:
          "Monitor order status and logistics workflows to improve customer experience.",
        icon: ShoppingBag,
      },
      {
        title: "Compensation and incentive automation",
        description:
          "Automate commission processing and reward structures to increase distributor trust.",
        icon: ChartLineUp,
      },
      {
        title: "Campaign and referral activation",
        description:
          "Run multi-channel promotions that increase conversions and repeat purchases.",
        icon: MegaphoneSimple,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your clothing and accessories business",
    description:
      "Cloud MLM Software delivers practical tools to improve fashion sales performance and operational efficiency.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Distributor onboarding and hierarchy management",
        outcomes: [],
        description:
          "Manage partner onboarding and organizational structure with role-based controls.",
      },
      {
        name: "Sales and commission tracking",
        outcomes: [],
        description:
          "Track sales performance and automate payout calculations with transparent logic.",
      },
      {
        name: "Inventory synchronization",
        outcomes: [],
        description:
          "Keep product availability up to date across teams, channels, and locations.",
      },
      {
        name: "Targeted marketing workflows",
        outcomes: [],
        description:
          "Plan and execute promotional campaigns tailored to seasonality and customer segments.",
      },
      {
        name: "Customer preference and retention insights",
        outcomes: [],
        description:
          "Capture buying patterns to improve personalization and repeat purchase behavior.",
      },
      {
        name: "Scalable global operations",
        outcomes: [],
        description:
          "Expand confidently into new regions with multilingual, multi-currency support.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why clothing and accessories brands choose Cloud MLM Software",
    description:
      "It helps fashion businesses scale distributor-led sales while keeping operations accurate and efficient.",
    proofPoints: [
      {
        title: "Faster go-to-market execution",
        description:
          "Launch new collections and campaigns quickly with centralized workflows.",
      },
      {
        title: "Transparent distributor payouts",
        description:
          "Build trust with clear commission structures and automated reward calculations.",
      },
      {
        title: "Improved operational visibility",
        description:
          "Track stock, orders, and team performance in real time from one dashboard.",
      },
      {
        title: "Scalable network growth",
        description:
          "Support long-term expansion with reliable cloud infrastructure and adaptable plan design.",
      },
    ],
  },
  cta: {
    heading: "Got a project in mind? Let's work together.",
    description:
      "Strengthen your clothing and accessories business with MLM software solutions designed to accelerate growth and improve control.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Target markets, product lines, and distributor expansion priorities.",
        "Compensation logic, reward rules, and payout governance needs.",
        "Campaign, ecommerce, and reporting requirements for implementation.",
      ],
      footnote:
        "Expect a tailored implementation blueprint and measurable success metrics within one business day.",
    },
  },
};

export { clothingAccessoriesContent };
