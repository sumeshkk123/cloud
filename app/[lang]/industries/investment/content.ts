import { Globe, ShieldCheck, TrendingUp, Users } from "lucide-react";
import {
  ChartLineUp,
  CurrencyCircleDollar,
  MegaphoneSimple,
  ShieldCheckered,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const investmentContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software for investment industry",
    title: "Cloud MLM Software for investment industry growth",
    description:
      "The investment industry is becoming increasingly competitive and data-driven. Cloud MLM Software helps investment businesses scale network operations, improve affiliate performance, and strengthen investor engagement.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Business growth",
        value: "Scalable",
        detail:
          "Handle larger advisor and affiliate networks while maintaining operational control.",
        icon: TrendingUp,
      },
      {
        label: "Investor trust",
        value: "Compliance-ready",
        detail:
          "Support transparent workflows and secure data handling across investment operations.",
        icon: ShieldCheck,
      },
      {
        label: "Market reach",
        value: "Global-ready",
        detail:
          "Expand across regions using multilingual, multi-currency, and cloud-based operations.",
        icon: Globe,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Software for investment industry?",
      paragraph:
        "Cloud MLM Software gives investment organizations the flexibility to scale, optimize performance, and improve advisor and investor engagement in a rapidly changing market.",
      numberedItems: [
        {
          title: "Scalable infrastructure",
          description:
            "Support growing teams, affiliates, and customers without replacing your platform foundation.",
        },
        {
          title: "Customizable business workflows",
          description:
            "Adapt compensation, onboarding, and campaign logic to your investment business model.",
        },
        {
          title: "User-friendly experience",
          description:
            "Simplify workflows for administrators, advisors, affiliates, and end users.",
        },
        {
          title: "Reliable support",
          description:
            "Maintain performance and continuity with dependable technical assistance and updates.",
        },
      ],
      bottomImage: "/images/industry/investment-industry-intro.webp",
      bottomImageAlt: "MLM software for investment industry",
      bottomImageOverlayText: "Built for investment network expansion",
    },
  },
  playsSection: {
    heading: "Affiliate marketing in investment business",
    description:
      "Affiliate marketing helps investment firms expand acquisition channels and improve conversion consistency. Cloud MLM Software enables complete affiliate lifecycle management.",
    plays: [
      {
        title: "Affiliate onboarding and management",
        description:
          "Build and manage affiliate networks with role-based visibility and clear process control.",
        icon: MegaphoneSimple,
      },
      {
        title: "Flexible commission setup",
        description:
          "Define compensation structures aligned with referrals, lead quality, and business goals.",
        icon: CurrencyCircleDollar,
      },
      {
        title: "Performance analytics",
        description:
          "Track campaign ROI, affiliate conversion, and growth trends using real-time dashboards.",
        icon: ChartLineUp,
      },
      {
        title: "Retention-focused operations",
        description:
          "Keep partners engaged with transparent rewards and measurable performance outcomes.",
        icon: Users,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your investment business",
    description:
      "Core capabilities to improve operational efficiency, partner performance, and long-term growth.",
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
          "Manage advisors, affiliates, and investor touchpoints through centralized workflows.",
      },
      {
        name: "Customizable compensation plans",
        outcomes: [],
        description:
          "Configure Binary, Unilevel, Matrix, or custom payout models for investment use cases.",
      },
      {
        name: "Advanced analytics and reporting",
        outcomes: [],
        description:
          "Use live performance data to improve campaign quality and strategic decision-making.",
      },
      {
        name: "Automated workflow orchestration",
        outcomes: [],
        description:
          "Reduce repetitive operations through automation of key communication and payout processes.",
      },
      {
        name: "Cross-platform accessibility",
        outcomes: [],
        description:
          "Support distributed teams and partners with secure cloud-based access from anywhere.",
      },
      {
        name: "Security and compliance alignment",
        outcomes: [],
        description:
          "Strengthen data protection and governance with secure infrastructure and controlled workflows.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why investment teams use Cloud MLM Software",
    description:
      "The platform helps investment organizations improve execution speed, partner productivity, and scalable growth.",
    proofPoints: [
      {
        title: "Improved operational efficiency",
        description:
          "Automation and unified workflows reduce manual bottlenecks across teams.",
      },
      {
        title: "Better data visibility",
        description:
          "Real-time analytics provide clarity for faster and more informed business decisions.",
      },
      {
        title: "Higher partner performance",
        description:
          "Structured affiliate tools and transparent rewards support stronger conversion outcomes.",
      },
      {
        title: "Scalable long-term growth",
        description:
          "Expand your investment business without fragmented systems or unstable processes.",
      },
    ],
  },
  cta: {
    heading: "Want to grow in the investment industry? Let's work together.",
    description:
      "Use Cloud MLM Software to scale your investment network, improve affiliate outcomes, and deliver better investor experiences.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Product mix, target investor segments, and regional expansion goals.",
        "Advisor and affiliate compensation rules, onboarding flow, and growth metrics.",
        "Integration requirements for CRM, payments, reporting, and compliance systems.",
      ],
      footnote:
        "Expect a tailored implementation roadmap and measurable KPIs within one business day.",
    },
  },
};

export { investmentContent };
