import {
  ChartLineUp,
  ClipboardText,
  IdentificationBadge,
  UsersFour,
} from "@phosphor-icons/react";
import { CheckCircle2, ShieldCheck, Sparkles, Users2 } from "lucide-react";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage/types";

const insuranceContent: IndustryPageContent = {
  hero: {
    badge: "Insurance distribution accelerator",
    title: "Cloud MLM Software for insurers building trusted advisor networks.",
    description:
      "Bring agents, brokers, and bancassurance partners onto a single platform that safeguards compliance, simplifies compensation, and personalises every policyholder interaction.",
    primaryCta: "Talk to a specialist",
    secondaryCta: "Free demo",
    metrics: [
      {
        label: "Policy launch time",
        value: "< 3 weeks",
        detail:
          "Template packs for product, compliance, and compensation accelerate go-to-market across channels.",
        icon: Sparkles,
      },
      {
        label: "Advisor retention",
        value: "+39%",
        detail:
          "Transparent payouts and guided journeys keep field teams motivated and compliant.",
        icon: Users2,
      },
      {
        label: "Regulatory readiness",
        value: "24/7",
        detail:
          "Audit logs, suitability checks, and document trails are maintained automatically across regions.",
        icon: ShieldCheck,
      },
    ],
  },
  introSection: {
    whyBlock: {
      heading: "Why MLM Software For Insurance Business?",
      paragraph:
        "The MLM structure provides enormous benefits to insurance companies, promoting exponential growth by encouraging agents to form their own teams. With cloud MLM software, you acquire the ability to efficiently manage this complicated structure, empowering your agents and increasing your company's bottom line.",
      numberedItems: [
        {
          title: "Boost Agent Productivity",
          description:
            "Simplifying the recruiting and management of agents gives your team more time to concentrate on building relationships with clients rather than paperwork. Improved team effectiveness and more income are the results of increased productivity.",
        },
        {
          title: "Flexibility to Fit Your Business",
          description:
            "Our platform can grow to accommodate your specific requirements, regardless of how big or small your insurance business is. It supports a variety of compensation models, allowing you to select the ideal one for your organization.",
        },
        {
          title: "Real-Time Data and Reporting",
          description:
            "Real-time reporting gives you important information about how your business is running. You may make important decisions with the help of our platform's helpful information on agent performance, sales trends, bonuses, and commission distributions.",
        },
        {
          title: "Anywhere, Anytime Access",
          description:
            "Our cloud-based technology allows you and your agents to access data from anywhere, on any device. Whether agents are working remotely or in the office, this guarantees seamless operations.",
        },
      ],
      bottomImage: "/images/industry/insuranceImg3.webp",
      bottomImageOverlayText: "We have created more than 74 insurance mlm software !!",
    },
  },
  playsSection: {
    heading: "Plays that connect advisors, operations, and policyholders",
    description:
      "Centralise experiences while respecting local regulations, partner models, and client expectations.",
    plays: [
      {
        title: "Compensation governance studio",
        description:
          "Model unilevel, matrix, or hybrid plans that tie incentives to risk profiles, persistency, and claims performance.",
        icon: ChartLineUp,
      },
      {
        title: "Advisor experience hub",
        description:
          "Provide onboarding checklists, credential tracking, and digital sales kits inside a secure workspace.",
        icon: IdentificationBadge,
      },
      {
        title: "Client relationship fabric",
        description:
          "Synchronise CRM, policy admin, and marketing to trigger renewal reminders, cross-sell journeys, and wellness education.",
        icon: UsersFour,
      },
      {
        title: "Compliance command centre",
        description:
          "Automate disclosures, suitability forms, and audit trails with real-time exception alerts for supervisors.",
        icon: ClipboardText,
      },
    ],
  },
  programmesSection: {
    badge: "Combination",
    heading: "Insurance Industry & MLM Software: A Powerful Combination",
    description:
      "The insurance companies have traditionally used a network of agents and brokers to promote and sell their policies. As the sector grows, controlling these expanding networks can become more difficult. Cloud MLM Software is a system that incorporates the flexibility of MLM structures to improve insurance agent recruiting, training, and commission management.",
    highlightPhrase: "The insurance companies",
    imageUrl: "/images/industry/insuranceIntro.webp",
    imageOverlay: {
      value: "300+",
      line2: "Satisfied",
      line3: "Clients",
    },
    programmes: [
      {
        name: "Agent Management for Insurance",
        outcomes: [],
        description:
          "Cloud MLM Software is designed for the insurance industry, offering tools to manage agent hierarchies, track performance, and handle complex commissions in one platform.",
      },
      {
        name: "MLM Software for Insurance Growth",
        outcomes: [],
        description:
          "MLM software helps insurance businesses grow by building agent networks that boost sales through multi-level commissions.",
      },
    ],
  },
  proofPointsSection: {
    heading: "Why Choose Cloud MLM Software For Insurance?",
    description:
      "Our cloud MLM software is the best choice for insurance companies who are looking to manage huge agent networks efficiently. It's the smart choice for the insurance industry's development and compliance, with solutions designed to empower agents, adapt to varied business models, and protect data.",
    proofPoints: [
      {
        title: "Optimized Growth Through Agent Empowerment",
        description:
          "Provide agents with tools for recruiting, performance tracking, and commission management, resulting in growth through a motivated, self-managed network focused on selling and growing reach.",
      },
      {
        title: "Flexibility to Adapt to Unique Insurance Models",
        description:
          "Our software offers a variety of compensation plans to suit any insurance business model. Customize compensation structures and streamline agent commissions and policy assignments with ease.",
      },
      {
        title: "Enhanced Data Security and Compliance",
        description:
          "Cloud MLM is built with strong security and compliance, protecting sensitive data and meeting regulatory standards, allowing your business to develop with trust in data protection and security.",
      },
    ],
  },
  cta: {
    heading: "Ready to elevate your insurance ecosystem?",
    description:
      "Share your product mix, channel strategy, and compliance priorities. We will translate them into a Cloud MLM Software activation plan with measurable KPIs.",
    primaryCta: "Meet an insurance strategist",
    secondaryCta: "Request the insurance demo",
    bringToWorkshop: {
      label: "Bring to the workshop",
      items: [
        "Compensation matrices, licensing requirements, and digital assets.",
        "Policy administration landscape, CRM stack, and reporting cadence.",
        "Growth targets across channels, segments, and territories.",
      ],
      footnote:
        "Receive a tailored roadmap, ROI model, and launch sequencing within one business day.",
    },
  },
};

export { insuranceContent };
