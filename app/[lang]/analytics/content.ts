import { ChartLineUp, Table } from "@phosphor-icons/react";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";

/** Image for Types section (why choose) */
const TYPES_IMAGE = "/images/analytics-analysis.svg";

export const analyticsContent: ModuleFeatureContent = {
  hero: {
    badge: "Reporting",
    title: "Analytics & Reporting Module",
    description:
      "Analytics and reporting module for MLM: dashboards, KPIs, and exports. Get pre-built dashboards for sales, compensation, recruitment, and product performance. Export to Power BI, Tableau, or your data warehouse. Part of Cloud MLM Software modules.",
    primaryCta: "Request a demo",
    secondaryCta: "View demo",
    metrics: [
      { label: "Dashboards", value: "Pre-built", detail: "Sales, comp, recruitment." },
      { label: "Exports", value: "API & files", detail: "BI tools and warehouses." },
      { label: "Data", value: "Near real-time", detail: "KPIs and scheduled runs." },
    ],
  },
  intro: {
    badge: "Why this module",
    heading: "What the analytics module delivers",
    paragraphs: [
      "The Analytics & Reporting module gives you full visibility into your MLM programme. Pre-built dashboards cover sales, compensation, recruitment, and product performance so you can track what matters without building reports from scratch.",
      "KPIs and reports can be near real-time, with support for scheduled and on-demand runs. Export data via API or files to Power BI, Tableau, or your data warehouse. Whether you need executive summaries or drill-down detail, the analytics module helps you unlock better insights and make data-driven decisions.",
    ],
    partnerCard: {
      badge: "Included",
      heading: "Analytics and reporting packages",
      points: [
        "Pre-built dashboards for sales, compensation, recruitment, and product performance.",
        "Export and API support for Power BI, Tableau, and data warehouses.",
        "Near real-time KPIs and reports; scheduled and on-demand runs.",
        "Custom metrics and segments so you can align reporting with your plan and goals.",
      ],
    },
  },
  importanceSection: {
    badge: "Reporting",
    heading: "Why an Analytics & Reporting module in MLM software?",
    subheading: "Unlock better insights and data-driven decisions",
    paragraphs: [
      "MLM leaders need clear visibility into network performance, payouts, and growth. The Analytics & Reporting module delivers pre-built dashboards and flexible exports so you can monitor sales, compensation, recruitment, and product performance without spending time building reports from scratch.",
      "By supporting near real-time KPIs, scheduled runs, and exports to your BI tools, the module fits into your existing workflows. Use it for executive summaries, compliance reporting, or deep dives—so you can make data-driven decisions and scale with confidence.",
    ],
    imageSrc: "/images/dashboard-deign.webp",
    imageAlt: "Cloud MLM Software Analytics – dashboards and reporting",
  },
  benefitsSection: {
    badge: "Benefits",
    heading: "Key benefits of the Analytics module",
    description:
      "Pre-built dashboards, flexible exports, and near real-time data so you can track performance and integrate with your BI stack.",
    items: [
      {
        title: "Pre-built dashboards",
        description: "Sales, compensation, recruitment, and product performance dashboards so you see what matters without custom build.",
      },
      {
        title: "Export to BI tools",
        description: "Export and API support for Power BI, Tableau, and data warehouses so you keep one source of truth.",
      },
      {
        title: "Near real-time data",
        description: "KPIs and reports can be near real-time; we also support scheduled and on-demand runs for different use cases.",
      },
      {
        title: "Custom metrics and segments",
        description: "Align reporting with your plan and goals using configurable metrics and segments.",
      },
      {
        title: "Compliance and audit",
        description: "Use reports for compliance, audit trails, and executive summaries in one place.",
      },
      {
        title: "Scalable reporting",
        description: "Designed to scale with your network size and reporting needs without slowing down.",
      },
    ],
  },
  whyChooseSection: {
    imageSrc: TYPES_IMAGE,
    imageAlt: "Analytics & Reporting module for MLM",
    badge: "Types",
    heading: "Key capabilities of the Analytics module",
    description:
      "Pre-built dashboards, KPIs, exports to BI tools, and near real-time or scheduled reporting. One module for sales, compensation, recruitment, and product performance.",
    items: [
      {
        number: "01",
        title: "Dashboards and KPIs",
        description:
          "Pre-built dashboards for sales, compensation, recruitment, and product performance. Near real-time KPIs and support for scheduled and on-demand report runs.",
      },
      {
        number: "02",
        title: "Exports and APIs",
        description:
          "Export data and use APIs for Power BI, Tableau, and data warehouses. Keep your BI stack in sync with Cloud MLM data.",
      },
      {
        number: "03",
        title: "Custom and compliance",
        description:
          "Custom metrics and segments to align with your plan. Use reports for compliance, audit, and executive visibility.",
      },
    ],
  },
  features: [
    {
      icon: ChartLineUp,
      title: "Dashboards & KPIs",
      description:
        "Pre-built dashboards for sales, compensation, recruitment, and product performance. Near real-time KPIs and scheduled or on-demand runs.",
    },
    {
      icon: Table,
      title: "Exports & BI integration",
      description:
        "Export and API support for Power BI, Tableau, and data warehouses. One source of truth for your MLM data.",
    },
  ],
  faq: {
    badge: "FAQ",
    heading: "Frequently asked questions",
    description: "Common questions about the Analytics & Reporting module.",
    items: [
      {
        question: "What dashboards are included?",
        answer:
          "Pre-built dashboards for sales, compensation, recruitment, and product performance. You can extend with custom metrics and segments to align with your plan.",
      },
      {
        question: "Can we export to our BI tools?",
        answer:
          "Yes. We support exports and APIs for Power BI, Tableau, and data warehouses so you can keep one source of truth and use your existing BI stack.",
      },
      {
        question: "How real-time is the data?",
        answer:
          "KPIs and reports can be near real-time; we also support scheduled and on-demand runs so you can choose the right freshness for each use case.",
      },
    ],
  },
  cta: {
    heading: "Purchase AI-Powered Cloud MLM Software Today!",
    description:
      "Achieve MLM success with smart AI-driven tools! Automate, manage, and grow your network effortlessly. Buy now and scale your business!",
    buttonText: "Buy Now",
    secondaryCta: "Try Demo",
    trustIndicators: ["Quick implementation", "Expert support", "Flexible reporting"],
  },
};
