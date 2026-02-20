import { Globe, GraduationCap, Lightbulb, Users } from "lucide-react";
import {
  ChartLineUp,
  ChalkboardTeacher,
  MegaphoneSimple,
  ShieldCheckered,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const trainingContent: IndustryPageContent = {
  hero: {
    badge: "Top MLM software for training industry",
    title: "Cloud MLM Software for training industry growth",
    description:
      "The training industry is rapidly evolving with digital learning models and global audiences. Cloud MLM Software helps training businesses scale affiliate programs, automate operations, and improve learner and partner engagement.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Program scale",
        value: "Expansion-ready",
        detail:
          "Handle larger learner and partner networks without operational complexity.",
        icon: Users,
      },
      {
        label: "Learning reach",
        value: "Global-ready",
        detail:
          "Support multilingual and multi-region expansion through cloud-based delivery.",
        icon: Globe,
      },
      {
        label: "Execution quality",
        value: "Insight-driven",
        detail:
          "Improve planning and outcomes with real-time training and campaign analytics.",
        icon: Lightbulb,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why choose Cloud MLM Software for training industry?",
      paragraph:
        "Cloud MLM Software provides the flexibility, automation, and control required to grow modern training businesses efficiently.",
      numberedItems: [
        {
          title: "Scalable growth model",
          description:
            "Scale learners, trainers, and affiliate operations while maintaining clear process control.",
        },
        {
          title: "Customizable workflows",
          description:
            "Adapt platform behavior to your business model, audience segments, and operational needs.",
        },
        {
          title: "User-friendly operations",
          description:
            "Simplify daily execution for administrators, affiliates, trainers, and learners.",
        },
        {
          title: "Reliable long-term support",
          description:
            "Maintain business continuity with dependable platform support and guided optimization.",
        },
      ],
      bottomImage: "/images/industry/trainingBanner.webp",
      bottomImageAlt: "MLM software for training industry",
      bottomImageOverlayText: "Built for training network expansion",
    },
  },
  playsSection: {
    heading: "Affiliate marketing for training institutes",
    description:
      "Affiliate marketing helps training organizations increase enrollment and visibility. Cloud MLM Software helps you run affiliate operations end-to-end.",
    plays: [
      {
        title: "Affiliate onboarding and tracking",
        description:
          "Organize affiliate networks with clear onboarding, activity visibility, and performance analytics.",
        icon: MegaphoneSimple,
      },
      {
        title: "Flexible commission structures",
        description:
          "Define referral and enrollment-based payouts aligned to your program strategy.",
        icon: ChartLineUp,
      },
      {
        title: "Performance reporting",
        description:
          "Monitor campaign and affiliate outcomes in real time to improve conversion efficiency.",
        icon: ChalkboardTeacher,
      },
      {
        title: "Sustainable partner engagement",
        description:
          "Keep affiliates motivated with transparent tracking, timely rewards, and measurable impact.",
        icon: GraduationCap,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your training business",
    description:
      "Practical capabilities to improve training operations, learner acquisition, and partner-led growth.",
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
          "Manage training affiliates, teams, and learner channels through one centralized platform.",
      },
      {
        name: "Customizable compensation plans",
        outcomes: [],
        description:
          "Configure Binary, Unilevel, Matrix, or custom payout models for your enrollment strategy.",
      },
      {
        name: "Advanced analytics and reporting",
        outcomes: [],
        description:
          "Use performance data to optimize campaigns, affiliates, and learning program outcomes.",
      },
      {
        name: "Automated workflow support",
        outcomes: [],
        description:
          "Reduce manual work by automating key operational and communication processes.",
      },
      {
        name: "Cross-platform accessibility",
        outcomes: [],
        description:
          "Enable teams and partners to operate anywhere through secure cloud-based access.",
      },
      {
        name: "Secure and reliable infrastructure",
        outcomes: [],
        description:
          "Protect platform and user data through enterprise-grade security and stable performance.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why training businesses adopt Cloud MLM Software",
    description:
      "The platform helps training organizations improve scale, partner performance, and operational efficiency.",
    proofPoints: [
      {
        title: "Improved enrollment growth",
        description:
          "Expand acquisition channels through structured affiliate and referral programs.",
      },
      {
        title: "Better operational consistency",
        description:
          "Standardize key processes and reduce execution variance across teams.",
      },
      {
        title: "Stronger data visibility",
        description:
          "Track performance metrics in real time to make faster business decisions.",
      },
      {
        title: "Higher long-term scalability",
        description:
          "Support business expansion without needing fragmented systems or manual dependencies.",
      },
    ],
  },
  cta: {
    heading: "Want to scale in the training industry? Let's work together.",
    description:
      "Use Cloud MLM Software to strengthen your training ecosystem, improve affiliate outcomes, and scale confidently in competitive markets.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Program portfolio, learner segments, and regional growth objectives.",
        "Affiliate structure, payout rules, and current enrollment funnel details.",
        "Integration requirements for CRM, reporting, payment, and communication tools.",
      ],
      footnote:
        "Expect a tailored implementation roadmap and measurable KPIs within one business day.",
    },
  },
};

export { trainingContent };
