import {
  ArrowsClockwise,
  ChartLineUp,
  CloudArrowUp,
  Database,
  Monitor,
  PuzzlePiece,
  Shield,
  ShoppingBag,
  SquaresFour,
  Truck,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const opencartIntegrationContent: PricingSubPageContent = {
  hero: {
    badge: "OpenCart + Cloud MLM Software, unified",
    title: "OpenCart integration pricing tailored to your omnichannel growth.",
    description:
      "We combine commerce expertise with compensation science so every order, promotion, and payout stays in lockstep. Choose the integration package that matches your roadmap and compliance requirements.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Integration timeline",
        value: "6-8 weeks",
        description:
          "Discovery to production go-live for a single OpenCart storefront.",
        icon: CloudArrowUp,
      },
      {
        label: "Automated reconciliation",
        value: "95%",
        description:
          "Orders, refunds, and commissions matched without manual effort.",
        icon: Database,
      },
      {
        label: "Channel expansion",
        value: "4x",
        description:
          "Increase in product launch cadence after integration mandate.",
        icon: ShoppingBag,
      },
      {
        label: "Operational escalations",
        value: "-63%",
        description:
          "Reduction in finance and support tickets tied to commerce sync.",
        icon: ChartLineUp,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Integration pillars that keep revenue flowing",
      description:
        "Each engagement focuses on commerce, operations, and experience excellence. We ensure every order feeds accurate payouts, automation, and analytics.",
      items: [
        {
          title: "Commerce synchronisation",
          description:
            "We connect catalogues, pricing, and inventory across OpenCart and Cloud MLM Software so teams can launch products in minutes, not days.",
          bullets: [
            "Automated product and variant mapping with version control",
            "Stock and fulfilment status mirrored across warehouses",
            "Promotion, bundle, and kit logic aligned to compensation",
          ],
          icon: ShoppingBag,
        },
        {
          title: "Revenue operations",
          description:
            "Orders, payments, and refunds flow through governed pipelines with the reporting clarity finance and compliance expect.",
          bullets: [
            "Real-time order ingestion with error handling dashboards",
            "Tax, shipping, and fee data reconciled for accurate payouts",
            "Audit-ready logs for regulators and enterprise stakeholders",
          ],
          icon: ChartLineUp,
        },
        {
          title: "Experience orchestration",
          description:
            "Give distributors and customers cohesive experiences with personalisation, automation, and analytics that span both platforms.",
          bullets: [
            "Personalised storefronts aligned to rank, territory, or cohort",
            "Automation triggers for abandoned carts, restocks, and loyalty",
            "Executive scorecards tying commerce signals to compensation KPIs",
          ],
          icon: Monitor,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Six to eight week delivery cadence",
      description:
        "Our structured approach keeps technology, finance, and customer teams aligned from kickoff to optimisation.",
      stages: [
        {
          title: "Blueprint & readiness",
          description:
            "Align stakeholders on product, finance, and fulfilment objectives. Document data sources and success metrics to guide build-out. Deliverables: integration architecture diagram, risk register with mitigation plan, project charter and milestone plan.",
          duration: "Week 1",
          icon: SquaresFour,
        },
        {
          title: "Build & validation",
          description:
            "Configure connectors, data pipelines, and automation. Run reconciliation and performance tests with operations and finance teams. Deliverables: automated sync jobs with monitoring, commission and tax scenario validation, training for operational stakeholders.",
          duration: "Weeks 2-5",
          icon: Truck,
        },
        {
          title: "Launch & optimisation",
          description:
            "Deploy to production with hypercare, track KPIs, and prioritise enhancements that accelerate adoption and revenue. Deliverables: command centre dashboards and SLAs, go-live communications and support scripts, optimisation backlog with ROI projections.",
          duration: "Weeks 6-8",
          icon: Shield,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages aligned to your scale",
      description:
        "Every package covers strategy, engineering, and enablement. Upgrade as your product catalogue, markets, and automation needs expand.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Accelerator",
          price: "$16k fixed",
          description: "Emerging brands launching digital commerce for the first time.",
          outcomes: [
            "Catalog, pricing, and order sync live with monitoring",
            "Commission-ready product taxonomy and tagging",
            "Go-live runbook and support enablement toolkit",
          ],
          icon: Database,
        },
        {
          title: "Growth fabric",
          price: "$27k fixed",
          description: "Organisations expanding into multiple regions or product channels.",
          outcomes: [
            "Localization, tax, and logistics orchestration",
            "Marketing automation hooks for funnels and retention",
            "Finance dashboards with variance and margin tracking",
          ],
          icon: ArrowsClockwise,
        },
        {
          title: "Enterprise blueprint",
          price: "Custom engagement",
          description:
            "Enterprises balancing multiple brands, B2B, or marketplace strategies.",
          outcomes: [
            "Service mesh supporting custom data flows and governance",
            "Advanced warehouse and dropship automation",
            "Joint optimisation office with continuous innovation sprints",
          ],
          icon: PuzzlePiece,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Assurances with every engagement",
      description:
        "We eliminate integration guesswork with disciplined processes and transparency.",
      items: [
        {
          title: "Zero-downtime deployment",
          description:
            "We cutover integrations without disrupting live storefronts or commission cycles.",
          icon: CloudArrowUp,
        },
        {
          title: "Observability baked in",
          description:
            "Dashboards and alerts surface risks before they impact customers or payouts.",
          icon: ChartLineUp,
        },
        {
          title: "Joint success review",
          description:
            "Post-launch analytics session ensures leadership sees the impact clearly.",
          icon: Shield,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Technology, operations, and finance leaders ask these before kickoff.",
    items: [
      {
        question: "Which OpenCart versions do you support?",
        answer:
          "We support OpenCart 3.x and 4.x, including customised themes and extensions. Integration layers adapt to your hosting environment.",
      },
      {
        question: "Can we keep our existing payment and shipping integrations?",
        answer:
          "Yes. We connect to your existing providers while ensuring transaction data is normalised for Cloud MLM Software's commission engine.",
      },
      {
        question: "How are promotions handled?",
        answer:
          "Promotions, bundles, and loyalty programs are mapped to compensation logic so distributors and customers see consistent incentives everywhere.",
      },
      {
        question: "What happens if we add another storefront?",
        answer:
          "Packages include documentation and modular services so additional storefronts can be onboarded quickly without rework.",
      },
    ],
  },
  cta: {
    heading: "Ready to connect OpenCart with Cloud MLM Software?",
    description:
      "Share your storefront roadmap, integrations, and timelines. We'll craft a pricing proposal, delivery plan, and success metrics tailored to your growth goals.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our team",
    cardBody:
      "Expect a discovery agenda and stakeholder checklist within one business day. We stay embedded through launch and optimisation.",
  },
};
