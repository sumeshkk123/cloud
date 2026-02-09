import {
  Circuitry,
  Cpu,
  GearSix,
  Globe,
  Lightning,
  Monitor,
  PuzzlePiece,
  Shield,
  ShoppingBagOpen,
  Sparkle,
  Stack,
  TrendUp,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const magentoIntegrationContent: PricingSubPageContent = {
  hero: {
    badge: "Magento + Cloud MLM Software without friction",
    title: "Magento integration pricing that delivers unified commerce and compensation.",
    description:
      "Launch storefront experiences that synchronise with distributor operations, finance, and analytics. Cloud MLM Software packages strategy, integration, and optimisation into one engagement so your teams can scale momentum globally.",
    primaryCta: "Schedule pricing consultation",
    secondaryCta: "Explore commerce demo",
    metrics: [
      {
        label: "Catalog sync velocity",
        value: "15M items/day",
        description:
          "Magento → Cloud MLM Software inventory and pricing updates processed without throttling.",
        icon: Lightning,
      },
      {
        label: "Implementation CSAT",
        value: "98%",
        description:
          "Stakeholders rate launch experience across merchandising, IT, and finance teams.",
        icon: Shield,
      },
      {
        label: "Markets orchestrated",
        value: "33",
        description:
          "Global tax, currency, and language models delivered in unified integration blueprints.",
        icon: Globe,
      },
      {
        label: "Automation savings",
        value: "420+ hrs/qtr",
        description:
          "Manual order reconciliation and commission adjustments eliminated for clients.",
        icon: TrendUp,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Connector capabilities that keep revenue flowing",
      description:
        "We translate Magento's flexibility into operational strength for direct selling brands. From catalog orchestration to compliance-ready automation, every layer is tuned to maximise conversions and protect payouts.",
      items: [
        {
          title: "Commerce operations core",
          description:
            "Stabilise orders, fulfilment, and returns with bi-directional data pipelines purpose-built for Magento environments.",
          bullets: [
            "Real-time order ingestion with error handling and retries",
            "Warehouse, shipping, and tax data normalised to MLM rules",
            "Refund and adjustment workflows that respect compensation policies",
          ],
          icon: ShoppingBagOpen,
        },
        {
          title: "Experience orchestration",
          description:
            "Keep shoppers, promoters, and finance in sync with personalised content and analytics surfaces across both platforms.",
          bullets: [
            "Unified customer profiles across Magento storefronts and distributor portals",
            "Trigger-based communications for backorders, loyalty rewards, and subscriptions",
            "Dashboards aligning merchandising insights with rank and bonus performance",
          ],
          icon: Monitor,
        },
        {
          title: "Governance and scale",
          description:
            "Mitigate risk with compliance, observability, and security guardrails that scale with your assortment and geography footprint.",
          bullets: [
            "Audit-ready change logs and deployment workflows",
            "PII and payment token protections aligned to regional standards",
            "Performance monitoring with proactive anomaly detection",
          ],
          icon: Shield,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Eight-week integration roadmap",
      description:
        "Confidence comes from visibility. Our roadmap keeps leadership, IT, and commerce teams aligned from the first workshop to post-launch optimisation.",
      stages: [
        {
          title: "Alignment & architecture",
          description:
            "Discovery workshops covering catalog design, fulfilment, payments, and compensation dependencies. We translate insights into an integration blueprint. Deliverables: solution architecture & integration map, security and compliance checklist, success metrics with baseline reporting.",
          duration: "Weeks 1-2",
          icon: Cpu,
        },
        {
          title: "Build & validation",
          description:
            "Connector configuration, sandbox testing, and data reconciliation. Commerce, finance, and operations stakeholders validate parity. Deliverables: automated data pipelines with monitoring, commission + tax scenario stress tests, go-live playbook with hypercare steps.",
          duration: "Weeks 3-6",
          icon: Circuitry,
        },
        {
          title: "Launch & optimisation",
          description:
            "Production rollout with hypercare, analytics instrumentation, and iteration backlog creation to keep teams improving momentum. Deliverables: on-call command centre with response protocols, executive dashboards for revenue + margin tracking, roadmap of enhancements.",
          duration: "Weeks 7-8",
          icon: Sparkle,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages that match your integration maturity",
      description:
        "Move from proof-of-concept to enterprise-wide orchestration with clarity. Each tier includes the strategy, engineering, and enablement your teams need to keep pace with market expansion.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Launch-ready connector",
          price: "$19k fixed",
          description: "Brands introducing their first integrated commerce experience.",
          outcomes: [
            "Core catalog, pricing, and order synchronisation live",
            "Commission-ready product taxonomy mapping",
            "Operational runbook and training for support teams",
          ],
          icon: Stack,
        },
        {
          title: "Growth accelerator",
          price: "$32k fixed",
          description: "Organisations scaling to new markets or product lines.",
          outcomes: [
            "Localized pricing, tax, and fulfilment automation",
            "Marketing automation hooks and loyalty programme sync",
            "Observability dashboards with SLA-backed alerting",
          ],
          icon: GearSix,
        },
        {
          title: "Enterprise fabric",
          price: "Custom engagement",
          description:
            "Enterprises balancing high-volume commerce with intricate compensation structures.",
          outcomes: [
            "Composable integration services with governance controls",
            "Advanced promotion, bundle, and subscription logic",
            "Quarterly innovation sprints and optimisation office",
          ],
          icon: PuzzlePiece,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Answers for technology, operations, and executive stakeholders preparing for integration.",
    items: [
      {
        question: "Do we need to re-platform our Magento instance?",
        answer:
          "No. We integrate with your current Magento version—Adobe Commerce or Open Source—by deploying cloud connectors, middleware, or headless APIs that respect your existing architecture.",
      },
      {
        question: "How are promotions and bundles handled?",
        answer:
          "Promotion, bundle, and subscription logic is mapped to Cloud MLM Software's commission engine. We validate each scenario with finance and operations to ensure payouts remain accurate.",
      },
      {
        question: "What about performance and monitoring?",
        answer:
          "Each package includes observability dashboards, alerting thresholds, and runbooks. We track throughput, error rates, and business KPIs so teams can respond before customers notice issues.",
      },
      {
        question: "Can we extend connectors after launch?",
        answer:
          "Yes. We deliver modular services and documentation so future storefronts, regions, or product lines can be added quickly. Many clients retain Cloud MLM Software for ongoing optimisation.",
      },
    ],
  },
  cta: {
    heading: "Ready to unify Magento and Cloud MLM Software?",
    description:
      "Share your architecture, catalog complexity, and launch goals. We'll craft a pricing proposal, timeline, and measurement plan that keeps leadership aligned.",
    primaryCta: "Schedule consultation",
    secondaryCta: "View product tour",
    cardTitle: "Connect with our team",
    cardBody:
      "Expect a discovery agenda and stakeholder checklist within one business day. We partner with your teams through launch and beyond.",
  },
};
