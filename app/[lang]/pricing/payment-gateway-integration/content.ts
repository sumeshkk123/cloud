import {
  ChartLineUp,
  CoinVertical,
  Cube,
  CurrencyDollar,
  Fingerprint,
  GearSix,
  Globe,
  Gauge,
  Lightning,
  LockKeyOpen,
  Shield,
  Vault,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const paymentGatewayIntegrationContent: PricingSubPageContent = {
  hero: {
    badge: "Payments orchestrated for direct selling",
    title: "Payment gateway integration pricing engineered for compliance and scale.",
    description:
      "Cloud MLM Software brings payment acceptance, risk controls, and finance automation together. Pick the engagement that aligns with your expansion plans and regulatory obligations.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Gateways orchestrated",
        value: "45+",
        description:
          "Regional, global, crypto, and wallet providers connected to Cloud MLM Software.",
        icon: Cube,
      },
      {
        label: "Authorization uplift",
        value: "17%",
        description:
          "Average success rate improvement after routing and retry optimisation.",
        icon: Lightning,
      },
      {
        label: "Compliance readiness",
        value: "100%",
        description:
          "PCI DSS, PSD2 SCA, and local regulatory requirements embedded in workflows.",
        icon: Shield,
      },
      {
        label: "Rollout timeline",
        value: "6 weeks",
        description:
          "Average time to configure, test, and launch one payment gateway.",
        icon: Gauge,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Capabilities that keep payments resilient",
      description:
        "We connect payments to the rest of your revenue operations. Every capability is designed to protect authorisations, ensure compliance, and empower finance teams.",
      items: [
        {
          title: "Unified payment fabric",
          description:
            "Centralise authorisation, capture, and settlement flows with resilient integrations that adapt to market changes.",
          bullets: [
            "Smart routing based on geography, card type, and risk profile",
            "Fallback switching for gateway outages or maintenance windows",
            "Automated reconciliation and payout matching for finance teams",
          ],
          icon: Cube,
        },
        {
          title: "Risk and compliance automation",
          description:
            "Embed KYC, AML, and fraud checks into your enrolment and checkout journeys without friction for distributors or customers.",
          bullets: [
            "Identity verification, watchlist screening, and document management",
            "Chargeback workflows with evidence kits and dispute automation",
            "Audit-ready logs and regulator reporting",
          ],
          icon: LockKeyOpen,
        },
        {
          title: "Analytics and optimisation",
          description:
            "Measure payment performance, identify leakage, and fine-tune routing strategies to protect cash flow and margin.",
          bullets: [
            "Real-time dashboards for approvals, declines, and fees",
            "AI-assisted anomalies highlighting fraud or friction",
            "Forecasting for liquidity, reserves, and chargeback exposure",
          ],
          icon: ChartLineUp,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Six-week delivery cadence",
      description:
        "Our structured delivery keeps product, compliance, and finance stakeholders engaged and informed every step of the way.",
      stages: [
        {
          title: "Assessment & design",
          description:
            "Review payment mix, regulatory obligations, and desired customer experiences to shape integration architecture. Deliverables: gateway design blueprint, risk and compliance matrix, success metrics & reporting plan.",
          duration: "Week 1",
          icon: Globe,
        },
        {
          title: "Build & validation",
          description:
            "Configure connectors, risk controls, and reconciliation flows. Validate with sandbox testing and stakeholder sign-off. Deliverables: gateway configuration & sandbox tests, KYC/AML workflow automation, finance reconciliation dry runs.",
          duration: "Weeks 2-4",
          icon: CurrencyDollar,
        },
        {
          title: "Launch & optimisation",
          description:
            "Production rollout, monitoring, and performance tuning. Capture learnings for future gateways and markets. Deliverables: go-live command centre & playbooks, analytics dashboards and variance alerts, optimisation backlog with ROI estimates.",
          duration: "Weeks 5-6",
          icon: Fingerprint,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages aligned with your treasury goals",
      description:
        "From first-launch brands to global enterprises, pick the pricing tier that mirrors your payment complexity and compliance landscape.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Core launch",
          price: "$18k fixed",
          description: "Brands launching digital payments or upgrading legacy flows.",
          outcomes: [
            "Gateway connector, webhooks, and secure token vault",
            "Compliance checklist with KYC/AML workflows",
            "Finance runbook for reconciliation and variance handling",
          ],
          icon: CoinVertical,
        },
        {
          title: "Multi-gateway hub",
          price: "$28k fixed",
          description: "Companies expanding into new markets or product models.",
          outcomes: [
            "Routing and failover engine with monitoring",
            "Integrated fraud scoring and chargeback handling",
            "Finance and support enablement toolkit",
          ],
          icon: GearSix,
        },
        {
          title: "Enterprise payment fabric",
          price: "Custom engagement",
          description: "Highly regulated or high-volume payment environments.",
          outcomes: [
            "Treasury integration with hedging and reserve modelling",
            "Payment data lake for AI insights and forecasting",
            "Dedicated optimisation squad and compliance PMO",
          ],
          icon: Vault,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Delivery guarantees",
      description:
        "We back every engagement with disciplined processes that protect your reputation and cash flow.",
      items: [
        {
          title: "Security-first delivery",
          description:
            "Tokenisation, vaulting, and encryption practices align with PCI DSS and global standards.",
          icon: Shield,
        },
        {
          title: "Finance-ready operations",
          description:
            "We pair with your finance leads to ensure settlement, fees, and tax mapping is accurate from day one.",
          icon: CurrencyDollar,
        },
        {
          title: "Continuous support",
          description:
            "Post-launch monitoring and guidance keep your payment stack resilient as markets evolve.",
          icon: Lightning,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Questions from finance, compliance, and product teams preparing for integration.",
    items: [
      {
        question: "Do you support regional gateways or alternative payments?",
        answer:
          "Yes. We integrate with card processors, bank transfers, e-wallets, and alternative payments popular across APAC, LATAM, EMEA, and North America.",
      },
      {
        question: "How do you handle PCI compliance?",
        answer:
          "We design integrations so Cloud MLM Software never stores sensitive card data. Tokenisation and hosted fields keep you within PCI scope while simplifying audits.",
      },
      {
        question: "What if we need multiple currencies?",
        answer:
          "We pair payment gateway projects with our multi-currency system, ensuring FX, fees, and commissions remain consistent across markets.",
      },
      {
        question: "Can we switch gateways later?",
        answer:
          "Our modular architecture makes it straightforward to add, remove, or reroute gateways without rebuilding upstream experiences.",
      },
    ],
  },
  cta: {
    heading: "Ready to modernise payment acceptance?",
    description:
      "Share your gateway stack, markets, and compliance priorities. We'll assemble a pricing proposal and roadmap built for your treasury strategy.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our team",
    cardBody:
      "Expect a discovery agenda and integration checklist within one business day. We partner end-to-end—from blueprint to optimisation.",
  },
};
