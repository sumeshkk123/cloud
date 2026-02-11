import { ChatCircleDots, Gift } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

const INTRO_IMAGE = "/images/dashboard-deign.webp";
const TYPES_SECTION_IMAGE = "/images/customer-engagement.webp";

export const customerEngagementContent: ModuleFeatureContent = {
  hero: {
    badge: "Engagement",
    title: "Customer Engagement module",
    description:
      "Customer and distributor engagement module: support tickets, loyalty, learning, and journey automation. Keep customers and distributors engaged with responsive portals, optional mobile apps, and actions that tie to compensation and rank rules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Support", value: "Tickets", detail: "And knowledge base." },
      { label: "Loyalty", value: "Programmes", detail: "Rewards and recognition." },
      { label: "Journeys", value: "Automation", detail: "Onboarding and engagement." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "What is the Customer Engagement module?",
    paragraphs: [
      "The Customer Engagement module gives you a single place to support customers and distributors, run loyalty programmes, and automate journeys. Support tickets, knowledge base, and help centres keep issues resolved quickly. Loyalty and rewards tie into compensation and rank so engagement drives outcomes.",
      "Cloud MLM's Customer Engagement module is built for direct selling: responsive portals and optional native apps let distributors and customers stay connected. Journey automation handles onboarding and follow-ups so you maintain a consistent presence without manual effort.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Features of the Customer Engagement module",
      points: [
        "Support tickets and knowledge base for customers and distributors",
        "Loyalty programmes and rewards linked to compensation and rank",
        "Journey automation for onboarding and engagement",
        "Responsive portals and optional mobile apps",
      ],
    },
  },
  importanceSection: {
    badge: "Engagement",
    heading: "Why a Customer Engagement module in MLM software?",
    subheading: "Streamline support and boost loyalty",
    paragraphs: [
      "Direct selling runs on relationships and repeat engagement. An integrated Customer Engagement module keeps support, loyalty, and journeys in one system so distributors and customers get a consistent experience. Engagement actions can trigger incentives and rank rules in the compensation module.",
      "The Customer Engagement module connects to your compensation and genealogy data. Support tickets, loyalty activity, and journey steps are visible in one place, so you can see who is engaged and who needs a nudge—without switching tools.",
    ],
    imageSrc: INTRO_IMAGE,
    imageAlt: "Cloud MLM Software Customer Engagement – support, loyalty, and journeys",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Cloud MLM's Customer Engagement module includes",
    description:
      "Support tickets, loyalty programmes, journey automation, and responsive portals. Tie engagement to compensation and rank.",
    items: [
      {
        title: "Support tickets",
        description:
          "Ticket system and knowledge base for customers and distributors. Track and resolve issues from one place.",
      },
      {
        title: "Loyalty & rewards",
        description:
          "Loyalty programmes and rewards linked to compensation and rank. Recognise and incentivise engagement.",
      },
      {
        title: "Journey automation",
        description:
          "Onboarding and engagement journeys with automated steps. Reduce manual follow-ups and improve retention.",
      },
      {
        title: "Portals & mobile",
        description:
          "Responsive portals and optional native apps so distributors and customers stay connected on any device.",
      },
      {
        title: "Reporting & visibility",
        description:
          "Dashboards and exports for support, loyalty, and journey performance. Single view of engagement.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_SECTION_IMAGE,
    imageAlt: "Customer Engagement module for MLM",
    badge: "Types",
    heading: "Key capabilities of the Customer Engagement module",
    description:
      "Support tickets, loyalty programmes, journey automation, portals and mobile, and reporting.",
    items: [
      {
        number: "01",
        title: "Support & help",
        description:
          "Ticket system, knowledge base, and help centres. Customers and distributors get answers quickly; you get a full audit trail.",
      },
      {
        number: "02",
        title: "Loyalty & incentives",
        description:
          "Loyalty programmes and rewards that tie to compensation and rank. Engagement actions can trigger incentives and rank rules.",
      },
      {
        number: "03",
        title: "Journeys & automation",
        description:
          "Automated onboarding and engagement journeys. Set steps and triggers so the right message reaches the right person at the right time.",
      },
    ],
  },
  features: [
    {
      icon: ChatCircleDots,
      title: "Support & tickets",
      description:
        "Support tickets and knowledge base for customers and distributors. Track resolution and link to CRM and compensation.",
    },
    {
      icon: Gift,
      title: "Loyalty & rewards",
      description:
        "Loyalty programmes and rewards linked to compensation and rank. Recognise and incentivise engagement across the network.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Customer Engagement module.",
    items: [
      {
        question: "What engagement tools are included?",
        answer:
          "Support tickets, loyalty programmes, learning content, and journey automation for customers and distributors. Engagement actions can trigger incentives and rank rules in the compensation module.",
      },
      {
        question: "How does it tie to compensation?",
        answer:
          "Engagement actions can trigger incentives and rank rules in the compensation module. Loyalty and activity data are available for reporting and plan logic.",
      },
      {
        question: "Do you support mobile?",
        answer:
          "Yes. Responsive portals work on all devices, and we support optional native apps for distributors and customers so they can stay connected on the go.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "Dedicated success desk"],
  },
};
