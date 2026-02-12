import {
  BarChart3,
  Compass,
  GaugeCircle,
  PenTool,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCog,
  Workflow,
} from "lucide-react";
import type { ConsultingPageContent } from "@/components/frontend/mlm-consulting";

const consultingContent: ConsultingPageContent = {
  hero: {
    badge: "MLM Consulting Services",
    title: "MLM Consulting Services",
    description:
      "Cloud MLM Software provides proper guidance and support for individuals and businesses involved in the MLM industry. Our team has experienced MLM consultants who help companies to design, implement, and optimize their MLM strategies, operations, and compensation plans. Now it's your turn! We are here to help you!",
    primaryCta: "Get Free Consultation",
    secondaryCta: "Explore all features",
    highlights: [
      {
        title: "Long-term success",
        description:
          "We guide MLM businesses in building sustainable and scalable strategies that assure enduring growth.",
        icon: TrendingUp,
      },
      {
        title: "Proven experience",
        description:
          "Solid years of experience help you navigate the complexities of the MLM industry with confidence.",
        icon: ShieldCheck,
      },
      {
        title: "Personalized assistance",
        description:
          "Every business has unique needs. Our team provides tailored solutions for your requirements.",
        icon: UserCog,
      },
    ],
  },
  intro: {
    badge: "What is MLM consulting?",
    heading: "What is MLM consulting?",
    paragraphs: [
      "For any business, a support system can bring in a lot of benefits. In the case of multilevel marketing, an advanced MLM software can do better. With the help of our software and its in-built features, you can manage your business effortlessly.",
      "It is practically impossible to manage a complex network without a feature-rich software solution. Cloud MLM Software offers the guidance and tools you need to design, implement, and optimize your MLM strategies, operations, and compensation plans.",
      "Our consultants work with you to build sustainable and scalable strategies, from compensation plan design and third-party integrations to automation, analytics, and compliance. Whether you are entering new markets or refining your existing setup, we provide tailored assistance so your MLM business can grow with confidence.",
      "We meticulously review your MLM plans to identify strengths, address challenges, and suggest strategies that maximize profitability and long-term sustainability. With expertise on the latest software solutions and a commitment to transparency and fairness, we help you stay ahead in a competitive market.",
    ],
    partnerCard: {
      badge: "Why Cloud MLM",
      heading: "Why Cloud MLM for MLM Consulting?",
      subheading: "Our consultants deliver results that align with your goals.",
      points: [
        "We assure you long-term success and guide you in building sustainable, scalable strategies.",
        "Solid years of experience to help you navigate the complexities of the MLM industry.",
        "Personalized assistance dedicated to your unique business requirements.",
        "We review your MLM plans to identify strengths, address challenges, and maximize profitability.",
        "We balance innovation and stability while identifying and solving challenges.",
        "Comprehensive commission analyses for transparency, fairness, and compliance.",
        "Up-to-date expertise on the latest and most advanced software solutions.",
      ],
    },
  },
  introFeatures: [
    {
      icon: Target,
      title: "Strategic blueprint",
      description:
        "Consultants decode your market, evaluate existing assets, and map the growth model that fits your ambition.",
    },
    {
      icon: Sparkles,
      title: "Technology enablement",
      description:
        "Pair business goals with Cloud MLM Software's capabilities—automation, analytics, and integrations included.",
    },
    {
      icon: ShieldCheck,
      title: "Ongoing optimisation",
      description:
        "We keep iterating on compensation, compliance, and adoption so momentum never stalls.",
    },
  ],
  whySection: {
    heading: "Why choose Cloud MLM for MLM Consulting?",
    description:
      "From strategic planning to compensation design and technology enablement, we help you execute with confidence.",
    reasons: [
      {
        title: "Compensation plan engineering",
        detail:
          "Design motivating, compliant structures that balance acquisition, retention, and profitability.",
        icon: PenTool,
      },
      {
        title: "Platform and third-party integrations",
        detail:
          "Connect payment gateways, e-commerce stacks, CRMs, and mobile apps for a seamless ecosystem.",
        icon: PlugZap,
      },
      {
        title: "Automation and analytics",
        detail:
          "Build workflows, dashboards, and KPIs that keep leadership informed and the field inspired.",
        icon: BarChart3,
      },
    ],
  },
  checklistSection: {
    badge: "Before you start",
    heading: "What to consider for MLM consulting",
    description: "Key areas we assess to deliver tailored guidance.",
    items: [
      "Your current business model and growth objectives",
      "Existing compensation structure and compliance requirements",
      "Technology stack and integration needs",
      "Team readiness and training priorities",
      "Budget and timeline for consulting and implementation",
      "Regional expansion plans and regulatory considerations",
    ],
  },
  offerSection: {
    badge: "Our services",
    heading: "Our MLM consulting services",
    description: "Comprehensive support across strategy, technology, and operations.",
    items: [
      {
        icon: Workflow,
        title: "Software solutions",
        description:
          "Feature-rich software and in-built capabilities so you can manage your business effortlessly and scale your network.",
      },
      {
        icon: PlugZap,
        title: "Integration with third-party tools",
        description:
          "Our consultants help integrate payment gateways, e-commerce platforms, CRMs, and other essential tools for a unified system.",
      },
      {
        icon: PenTool,
        title: "Compensation plan design",
        description:
          "Apart from commonly used plans like binary and unilevel, we offer a wide range of motivating and compliant compensation structures.",
      },
      {
        icon: GaugeCircle,
        title: "Custom MLM software development",
        description:
          "Customized software solutions tailored to your business model and operational requirements, ensuring seamless performance and scalability.",
      },
      {
        icon: BarChart3,
        title: "Automation and analytics implementation",
        description:
          "Automate repetitive tasks like commission calculations and distributor management while leveraging analytics for informed decision-making.",
      },
      {
        icon: Compass,
        title: "Business model and strategy development",
        description:
          "We assist MLM businesses in developing sustainable and scalable strategies that align with their objectives.",
      },
    ],
  },
  processSection: {
    heading: "Compensation strategy development",
    description:
      "A well-structured compensation plan is the backbone of any MLM business. Our consultants specialize in designing and optimizing plans that are both motivating for distributors and sustainable for your business.",
    steps: [
      {
        number: "01",
        title: "Plan design and customization",
        description:
          "Whether it's binary, unilevel, matrix, or a hybrid model, we design compensation plans that align with your business goals while remaining compliant with regulations.",
        icon: PenTool,
      },
      {
        number: "02",
        title: "Profitability analysis",
        description:
          "We conduct in-depth analyses of your current or proposed compensation structures to ensure they maximize profitability without compromising distributor satisfaction.",
        icon: BarChart3,
      },
      {
        number: "03",
        title: "Compliance and fairness guidance",
        description:
          "Our team ensures that your compensation plan adheres to legal and regulatory standards, creating a fair and transparent system that fosters trust among distributors.",
        icon: ShieldCheck,
      },
    ],
  },
  trustSection: {
    heading: "Get expert MLM consultant for your MLM needs",
    pointsTitle: "Why work with us",
    paragraphs: [
      "Cloud MLM Software is committed to providing solutions that address every aspect of your MLM business. With our innovative software tools and strategic compensation plan consulting, we ensure your business is well-equipped to thrive in a competitive market.",
    ],
    points: [
      "Strategic guidance aligned with your vision and goals.",
      "Proven compensation and technology expertise.",
      "Ongoing support and optimisation so momentum never stalls.",
      "Transparent, compliant, and scalable solutions.",
    ],
  },
  cta: {
    heading: "Get expert MLM consultant for your MLM needs",
    description:
      "Cloud MLM Software is committed to providing solutions that address every aspect of your MLM business. With our innovative software tools and strategic compensation plan consulting, we ensure your business is well-equipped to thrive in a competitive market.",
    buttonText: "Get Free Consultation",
    secondaryButtonText: "View all services",
    trustIndicators: ["Strategic guidance", "Expert consultants", "24/7 support"],
  },
};

export { consultingContent };
