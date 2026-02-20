import { Globe, GraduationCap, Target, Users } from "lucide-react";
import {
  ChartLineUp,
  Laptop,
  MegaphoneSimple,
  ShieldCheckered,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const elearningContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software in elearning industry",
    title: "Enhance your eLearning business with Cloud MLM Software",
    description:
      "eLearning with MLM Software combines multi-level marketing and online education to create a powerful ecosystem for businesses, educators, and learners. Cloud MLM Software helps platforms scale sales, affiliates, and course delivery in one system.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Course distribution",
        value: "Network-driven",
        detail:
          "Use distributor and affiliate channels to expand course reach and enrollment growth.",
        icon: Users,
      },
      {
        label: "Market reach",
        value: "Global-ready",
        detail:
          "Deliver courses and certifications to wider audiences with scalable cloud operations.",
        icon: Globe,
      },
      {
        label: "Learning impact",
        value: "Engagement-first",
        detail:
          "Support better learner outcomes with incentive-led progression and retention workflows.",
        icon: GraduationCap,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Software for eLearning?",
      paragraph:
        "Cloud MLM Software is designed to give eLearning businesses seamless ecommerce connectivity, scalable affiliate network handling, and advanced analytics for performance optimization.",
      numberedItems: [
        {
          title: "Seamless platform integration",
          description:
            "Connect with ecommerce and LMS ecosystems to manage learning products, payments, and campaigns centrally.",
        },
        {
          title: "Scalable affiliate operations",
          description:
            "Manage growing networks of sellers and affiliates without sacrificing visibility or control.",
        },
        {
          title: "Advanced analytics",
          description:
            "Track enrollments, lead quality, and revenue performance to optimize strategy quickly.",
        },
        {
          title: "Business adaptability",
          description:
            "Configure plans and workflows to match evolving course catalogs and market demands.",
        },
      ],
      bottomImage: "/images/industry/elearning-intro1.webp",
      bottomImageAlt: "MLM software for elearning industry",
      bottomImageOverlayText: "Built for eLearning network growth",
    },
  },
  playsSection: {
    heading: "Operational capabilities for eLearning growth",
    description:
      "Coordinate course sales, affiliate expansion, and learner engagement from one platform.",
    plays: [
      {
        title: "Customizable MLM plan management",
        description:
          "Deploy binary, matrix, or unilevel plans tailored for online course and certification sales.",
        icon: ChartLineUp,
      },
      {
        title: "Advanced affiliate management",
        description:
          "Automate onboarding, tracking, and payouts while monitoring campaign and lead performance.",
        icon: MegaphoneSimple,
      },
      {
        title: "LMS and ecommerce sync",
        description:
          "Connect course platforms, payment systems, and sales workflows into a unified interface.",
        icon: Laptop,
      },
      {
        title: "Learner growth enablement",
        description:
          "Improve completion and retention by combining education delivery with incentive-led journeys.",
        icon: Target,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your eLearning platform",
    description:
      "Cloud MLM Software provides practical tools to address competition, retention, and scalability challenges in eLearning.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Highly customizable MLM plans",
        outcomes: [],
        description:
          "Implement compensation structures that motivate affiliates and align with your learning business goals.",
      },
      {
        name: "Affiliate onboarding and payouts",
        outcomes: [],
        description:
          "Automate affiliate lifecycle management from signup to commission disbursement.",
      },
      {
        name: "Seamless eLearning integrations",
        outcomes: [],
        description:
          "Integrate with ecommerce and LMS platforms to centralize course, payment, and campaign data.",
      },
      {
        name: "Scalable and mobile-friendly operations",
        outcomes: [],
        description:
          "Support growing learner and affiliate volumes with responsive, performance-stable workflows.",
      },
      {
        name: "Real-time performance reporting",
        outcomes: [],
        description:
          "Monitor lead generation, conversions, and course sales metrics through live dashboards.",
      },
      {
        name: "Optimization-ready architecture",
        outcomes: [],
        description:
          "Continuously refine campaigns and network incentives using measurable performance insights.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why eLearning teams choose Cloud MLM Software",
    description:
      "It helps platforms handle core eLearning pressures while scaling profitable network-led growth.",
    proofPoints: [
      {
        title: "Handles high competition",
        description:
          "Differentiate your platform with integrated direct selling and affiliate-driven acquisition.",
      },
      {
        title: "Improves learner retention",
        description:
          "Use engagement incentives and partner-led support models to boost course completion.",
      },
      {
        title: "Scales without operational strain",
        description:
          "Support rising users, courses, and affiliates with reliable infrastructure and automation.",
      },
      {
        title: "Centralizes business control",
        description:
          "Manage commissions, sales, and course operations through one unified system.",
      },
    ],
  },
  cta: {
    heading: "Want to succeed in the eLearning industry? Let's work together.",
    description:
      "Elevate your eLearning platform with Cloud MLM Software to meet dynamic market demands and deliver rewarding experiences for every stakeholder.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Course categories, target audiences, and distribution strategy.",
        "Affiliate and distributor compensation models and payout rules.",
        "LMS, ecommerce, and reporting integrations required for launch.",
      ],
      footnote:
        "Expect a tailored implementation blueprint and measurable success metrics within one business day.",
    },
  },
};

export { elearningContent };
