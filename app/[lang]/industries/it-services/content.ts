import {
  BarChart3,
  Database,
  Globe,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  ChartLineUp,
  GitBranch,
  GearSix,
  ShieldCheckered,
} from "@phosphor-icons/react/dist/ssr";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const itServicesContent: IndustryPageContent = {
  hero: {
    badge: "Best MLM software in IT industry",
    title: "IT Industry and the future with Cloud MLM Software",
    description:
      "Cloud MLM Software helps IT organizations scale faster, improve collaboration, and streamline network operations with cloud-first flexibility, visibility, and automation.",
    primaryCta: "Try free demo",
    secondaryCta: "Watch video",
    metrics: [
      {
        label: "Technology adaptation",
        value: "Faster rollout",
        detail:
          "Respond quickly to market shifts with configurable workflows and centralized operations.",
        icon: Rocket,
      },
      {
        label: "Network operations",
        value: "Automated",
        detail:
          "Handle teams, hierarchies, and commission logic with less manual effort and more control.",
        icon: GitBranch,
      },
      {
        label: "Business security",
        value: "Enterprise-ready",
        detail:
          "Protect sensitive IT data with strong security standards and audit-friendly tracking.",
        icon: ShieldCheck,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Challenges in the IT industry",
      paragraph:
        "The IT industry is dynamic and rapidly evolving, which creates operational pressure across teams, data, and service delivery.",
      numberedItems: [
        {
          title: "Rapid technological evolution",
          description:
            "IT businesses must constantly adapt to emerging technologies to stay relevant and competitive.",
        },
        {
          title: "Resource and workflow complexity",
          description:
            "Managing distributed teams, responsibilities, and delivery pipelines often creates bottlenecks.",
        },
        {
          title: "Data overload and insight gaps",
          description:
            "Organizations collect large volumes of data but still struggle to convert it into timely decisions.",
        },
        {
          title: "Cybersecurity and cost pressure",
          description:
            "Digital expansion increases security risk while cloud, licensing, and maintenance costs continue to rise.",
        },
      ],
      bottomImage: "/images/industry/itIndustry-banner.webp",
      bottomImageAlt: "MLM software for IT services industry",
      bottomImageOverlayText: "Purpose-built for modern IT service growth",
    },
  },
  playsSection: {
    heading: "Why choose Cloud MLM Software for IT services",
    description:
      "A practical, scalable platform designed to support IT firms from startup stage to enterprise operations.",
    plays: [
      {
        title: "Built for scalability",
        description:
          "Grow your business without changing core tools as teams, customers, and service demand expand.",
        icon: ChartLineUp,
      },
      {
        title: "Innovation-friendly operations",
        description:
          "Reduce repetitive administrative tasks so teams can focus on solution quality and delivery impact.",
        icon: GearSix,
      },
      {
        title: "Flexible and cost-effective",
        description:
          "Replace fragmented tool stacks with one platform tailored to your operating requirements.",
        icon: Database,
      },
      {
        title: "Future-ready support model",
        description:
          "Stay aligned with changing IT landscapes through adaptable workflows and dedicated assistance.",
        icon: ShieldCheckered,
      },
    ],
  },
  programmesSection: {
    heading: "Key features to uplift your IT services",
    description:
      "Core capabilities that help IT companies improve scalability, control, and service performance.",
    imageUrl: "/images/industry/moduleIntro.webp",
    imageOverlay: {
      value: "10k+",
      line2: "Platform",
      line3: "Reviews",
    },
    programmes: [
      {
        name: "Scalable infrastructure",
        outcomes: [],
        description:
          "Adapt to dynamic workloads and expanding team structures without disrupting operations.",
      },
      {
        name: "Advanced reporting and analytics",
        outcomes: [],
        description:
          "Track performance, growth trends, and sales activity in real time for better decision-making.",
      },
      {
        name: "Customizable workflows",
        outcomes: [],
        description:
          "Align platform behavior with existing IT processes and service delivery requirements.",
      },
      {
        name: "Global accessibility",
        outcomes: [],
        description:
          "Enable teams to collaborate across regions through cloud-based, always-available access.",
      },
      {
        name: "Automated network management",
        outcomes: [],
        description:
          "Simplify hierarchy, commission, and network administration with intelligent automation.",
      },
      {
        name: "Enhanced security",
        outcomes: [],
        description:
          "Protect critical business and customer data with enterprise-grade safeguards and governance.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Business outcomes IT teams care about",
    description:
      "Cloud MLM Software helps IT service organizations solve common scaling and execution constraints.",
    proofPoints: [
      {
        title: "Improved operational efficiency",
        description:
          "Automated flows reduce manual overhead and improve execution consistency across teams.",
      },
      {
        title: "Better data-driven decisions",
        description:
          "Real-time reporting helps leaders act faster with confidence and measurable context.",
      },
      {
        title: "Stronger service scalability",
        description:
          "Grow service lines and partner networks while maintaining reliability and control.",
      },
      {
        title: "Higher collaboration quality",
        description:
          "Unify users and processes in one platform to keep communication and delivery aligned.",
      },
    ],
  },
  cta: {
    heading: "Want to succeed in the IT service sector? Let's work together.",
    description:
      "Empower your IT business with Cloud MLM Software to handle complexity, scale confidently, and deliver stronger outcomes.",
    primaryCta: "Buy now",
    secondaryCta: "Contact us",
    bringToWorkshop: {
      label: "Discovery essentials",
      items: [
        "Current service catalog, delivery model, and operational pain points.",
        "Team structure, commission logic, and partner network requirements.",
        "Security, integration, and reporting expectations for production rollout.",
      ],
      footnote:
        "Expect a practical implementation blueprint and measurable rollout goals within one business day.",
    },
  },
};

export { itServicesContent };
