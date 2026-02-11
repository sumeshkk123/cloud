import { TreeStructure, Network } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) – genealogy / network tree */
const TYPES_IMAGE = "/images/genoelogy.webp";

export const genealogyContent: ModuleFeatureContent = {
  hero: {
    badge: "Network",
    title: "Genealogy Tree Module",
    description:
      "Genealogy and network tree module for MLM. Visualise and manage distributor networks with unilevel, matrix, and custom tree views. Lazy loading and server-side aggregation keep performance smooth at scale. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Tree views", value: "Unilevel, matrix", detail: "Plus custom views." },
      { label: "Performance", value: "Smooth", detail: "Lazy loading at scale." },
      { label: "Export", value: "CSV/Excel", detail: "And APIs for custom viz." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "Visualise and Manage Your Distributor Network",
    paragraphs: [
      "A clear view of your network is essential for MLM leadership. The Genealogy Tree Module in Cloud MLM Software lets you visualise and manage distributor networks with unilevel, matrix, and custom tree views, with drill-down and filters.",
      "Lazy loading and server-side aggregation keep performance smooth at scale. Export to CSV/Excel and use APIs for custom visualisations. Built for enterprise network marketing and direct selling.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "What the Genealogy module delivers",
      points: [
        "Tree views – Unilevel, matrix, and custom tree views with drill-down and filters.",
        "Scale – Lazy loading and server-side aggregation for smooth performance with large networks.",
        "Export – CSV/Excel export and APIs for custom visualisations and reporting.",
        "Management – Visualise and manage your distributor network from one place.",
      ],
    },
  },
  importanceSection: {
    badge: "Network",
    heading: "Why a Genealogy Tree module in MLM software?",
    subheading: "Visualise and manage distributor networks",
    paragraphs: [
      "Genealogy and network tree views are core to understanding and managing your MLM structure. The Genealogy Tree Module gives you unilevel, matrix, and custom tree views with drill-down and filters, so you can see your network at a glance.",
      "Lazy loading and server-side aggregation keep performance smooth even with large networks. Export to CSV/Excel and use APIs for custom visualisations. Part of Cloud MLM Software.",
    ],
    imageSrc: TYPES_IMAGE,
    imageAlt: "Cloud MLM Software Genealogy Tree – network visualisation",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Key benefits of the Genealogy Tree module",
    description:
      "Visualise and manage distributor networks with multiple tree views, smooth performance at scale, and export options.",
    items: [
      {
        title: "Multiple tree views",
        description: "Unilevel, matrix, and custom tree views with drill-down and filters.",
      },
      {
        title: "Performance at scale",
        description: "Lazy loading and server-side aggregation keep performance smooth with large networks.",
      },
      {
        title: "Export and APIs",
        description: "Export to CSV/Excel and use APIs for custom visualisations and integrations.",
      },
      {
        title: "Drill-down and filters",
        description: "Navigate and filter the tree to focus on specific segments or levels.",
      },
      {
        title: "Network management",
        description: "Visualise and manage your distributor network from one place.",
      },
      {
        title: "Reporting",
        description: "Use tree data for reporting and analytics alongside compensation and CRM.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "Genealogy Tree module for MLM",
    badge: "Types",
    heading: "Key capabilities of the Genealogy Tree module",
    description:
      "Unilevel, matrix, and custom tree views with drill-down, filters, and export. Visualise and manage your network at scale.",
    items: [
      {
        number: "01",
        title: "Tree views",
        description:
          "Unilevel, matrix, and custom tree views with drill-down and filters. See your network structure at a glance.",
      },
      {
        number: "02",
        title: "Scale and performance",
        description:
          "Lazy loading and server-side aggregation keep performance smooth with large networks. No compromise on speed.",
      },
      {
        number: "03",
        title: "Export and integrate",
        description:
          "Export to CSV/Excel and use APIs for custom visualisations and reporting. Integrate with your tools.",
      },
    ],
  },
  features: [
    {
      icon: TreeStructure,
      title: "Tree views",
      description:
        "Unilevel, matrix, and custom tree views with drill-down and filters. Visualise your distributor network.",
    },
    {
      icon: Network,
      title: "Scale and export",
      description:
        "Lazy loading and server-side aggregation at scale. Export to CSV/Excel and use APIs for custom viz.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Genealogy Tree module.",
    items: [
      {
        question: "Which tree views do you support?",
        answer:
          "We support unilevel, matrix, and custom tree views with drill-down and filters. You can navigate and filter the tree to focus on specific segments or levels.",
      },
      {
        question: "How do we handle large networks?",
        answer:
          "Lazy loading and server-side aggregation keep performance smooth at scale. The module is designed to handle large distributor networks without slowing down.",
      },
      {
        question: "Can we export the tree?",
        answer:
          "Yes. Export to CSV/Excel and use APIs for custom visualisations and integrations. Tree data can be used for reporting and analytics alongside compensation and CRM.",
      },
    ],
  },
  cta: {
    heading: "Ready to visualise and manage your network?",
    description:
      "Get unilevel, matrix, and custom tree views with drill-down, filters, and export. Request a demo to see the Genealogy Tree module in action.",
    buttonText: "Request a demo",
    secondaryCta: "Try Demo",
    trustIndicators: ["Tree views", "Scale", "Export & APIs"],
  },
};
