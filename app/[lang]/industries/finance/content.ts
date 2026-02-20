import { Globe, ShieldCheck, TrendingUp, Users } from "lucide-react";
import {
  ChartLineUp,
  MegaphoneSimple,
  ShieldCheckered,
  Wallet,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const financeContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in finance industry",
    title: "Enhance your finance business with Cloud MLM Software",
    description:
      "The finance industry thrives on trust, innovation, and adaptability. Cloud MLM Software helps financial businesses scale direct selling and affiliate operations with secure, efficient, and data-driven workflows.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Security posture",
        value: "Trust-first",
        detail:
          "Protect financial data with encrypted cloud infrastructure and role-based controls.",
        icon: ShieldCheck,
      },
      {
        label: "Growth model fit",
        value: "MLM + affiliate",
        detail:
          "Run incentivized distributor and affiliate networks across financial product lines.",
        icon: Users,
      },
      {
        label: "Decision speed",
        value: "Real-time",
        detail:
          "Use live reporting and analytics to track sales performance and optimize strategy.",
        icon: TrendingUp,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Platform for finance?",
      paragraph:
        "As competition intensifies, finance teams need a platform that balances growth and compliance. Cloud MLM Software bridges traditional financial operations with modern MLM and affiliate execution.",
      numberedItems: [
        {
          title: "Customizable compensation plans",
          description:
            "Design Binary, Matrix, or Unilevel plans aligned with financial product offerings.",
        },
        {
          title: "Advanced CRM capabilities",
          description:
            "Offer personalized financial solutions through relationship tools and actionable client insights.",
        },
        {
          title: "Compliance management",
          description:
            "Automate compliance checks and reporting to stay aligned with changing regulations.",
        },
        {
          title: "Scalable global operations",
          description:
            "Expand confidently with multi-currency and multilingual support for international markets.",
        },
      ],
      bottomImage: "/images/industry/finance-industry-chalange.webp",
      bottomImageAlt: "MLM software for finance industry",
      bottomImageOverlayText: "Built for finance network growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for finance growth",
    description:
      "Streamline team execution, payouts, and client engagement from one secure operating layer.",
    plays: [
      {
        title: "Incentivized network management",
        description:
          "Motivate teams with flexible compensation models tied to business and compliance goals.",
        icon: Wallet,
      },
      {
        title: "Affiliate and campaign activation",
        description:
          "Launch partner-led acquisition programs with transparent performance tracking.",
        icon: MegaphoneSimple,
      },
      {
        title: "Automation-first operations",
        description:
          "Automate commissions, workflow steps, and reporting to reduce errors and manual effort.",
        icon: ChartLineUp,
      },
      {
        title: "Compliance and trust controls",
        description:
          "Keep operations audit-ready with governance workflows that strengthen credibility.",
        icon: ShieldCheckered,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your finance business",
    description:
      "Cloud MLM Software provides practical capabilities to solve core finance-sector growth and operations challenges.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Customizable MLM compensation plans",
        outcomes: [],
        description:
          "Create flexible distributor and affiliate commissions tailored to your financial products.",
      },
      {
        name: "Advanced CRM and customer engagement",
        outcomes: [],
        description:
          "Use relationship intelligence to improve retention, trust, and personalized service delivery.",
      },
      {
        name: "Seamless compliance management",
        outcomes: [],
        description:
          "Track policy obligations and automate reporting to reduce compliance-related risk.",
      },
      {
        name: "Real-time analytics and reporting",
        outcomes: [],
        description:
          "Monitor team activity, market shifts, and revenue performance with live dashboards.",
      },
      {
        name: "Integrated payout workflows",
        outcomes: [],
        description:
          "Handle commission calculations and payment processing with higher speed and accuracy.",
      },
      {
        name: "Global compatibility",
        outcomes: [],
        description:
          "Support international expansion using multi-currency and multilingual business operations.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why finance teams choose Cloud MLM Software",
    description:
      "It helps financial businesses overcome sector-specific bottlenecks while improving control and scalability.",
    proofPoints: [
      {
        title: "Handles complex product portfolios",
        description:
          "Manage investments, insurance, and savings product distribution from one coordinated system.",
      },
      {
        title: "Reduces compliance friction",
        description:
          "Simplify regulatory processes with automation that keeps teams aligned and audit-ready.",
      },
      {
        title: "Improves customer loyalty",
        description:
          "Strengthen long-term client relationships with personalized journeys and consistent service quality.",
      },
      {
        title: "Supports cost-efficient scaling",
        description:
          "Grow operations with structured partner channels that control cost while increasing reach.",
      },
    ],
  },
  cta: {
    heading: "Want to succeed in the finance sector? Let's work together.",
    description:
      "Cloud MLM Software equips your business with secure technology, automation, and strategy to lead modern finance network growth.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Financial product lines, distributor models, and compliance requirements.",
        "Compensation rules, payout logic, and governance expectations.",
        "Growth targets, reporting KPIs, and regional rollout priorities.",
      ],
      footnote:
        "Expect a tailored implementation blueprint and measurable success metrics within one business day.",
    },
  },
};

export { financeContent };
