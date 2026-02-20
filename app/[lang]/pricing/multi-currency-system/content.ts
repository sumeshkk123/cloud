import {
  Calculator,
  ChartLineUp,
  CurrencyCircleDollar,
  CurrencyDollar,
  Gauge,
  Globe,
  MapTrifold,
  Shield,
  Sparkle,
  UsersFour,
  Wallet,
} from "@phosphor-icons/react";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";

export const multiCurrencySystemContent: PricingSubPageContent = {
  hero: {
    badge: "Treasury-grade automation for modern MLM",
    title: "Multi-currency system pricing with enterprise guardrails.",
    description:
      "Confidently expand into new markets without manual spreadsheets. Cloud MLM Software's multi-currency engagements blend FX automation, compliance, and analytics so payouts stay accurate and on time.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    metrics: [
      {
        label: "Currencies orchestrated",
        value: "72+",
        description:
          "Base, payout, and tender currencies managed across Cloud MLM Software deployments.",
        icon: CurrencyCircleDollar,
      },
      {
        label: "Settlement accuracy",
        value: "99.98%",
        description:
          "Variance between forecast and actual commissions after automation go-live.",
        icon: Calculator,
      },
      {
        label: "Time-to-localisation",
        value: "4 weeks",
        description:
          "Average time required to onboard a new market with FX, tax, and compliance guardrails.",
        icon: Gauge,
      },
      {
        label: "Operations productivity",
        value: "3.4×",
        description:
          "Reduction in manual payout adjustments and finance escalations.",
        icon: Wallet,
      },
    ],
  },
  sections: [
    {
      type: "capabilities",
      heading: "Capabilities tuned for global scale",
      description:
        "Every engagement balances treasury discipline, operational clarity, and distributor trust. We make sure finance, technology, and field teams can launch in lockstep.",
      items: [
        {
          title: "FX intelligence",
          description:
            "Automate currency conversions, hedging logic, and historical rate audits so payouts remain predictable regardless of market volatility.",
          bullets: [
            "Live, daily, or custom window rate sourcing with fallbacks",
            "Automated rounding, margin, and fee application by cohort",
            "Historical FX ledger for finance, audit, and compliance teams",
          ],
          icon: ChartLineUp,
        },
        {
          title: "Multi-market governance",
          description:
            "Blend payment, tax, and regulatory requirements into one policy framework that keeps leadership confident and distributors paid on time.",
          bullets: [
            "Jurisdiction-aware payout sequencing and documentation",
            "Tax withholding automation with statutory thresholds",
            "Segregated reporting for subsidiaries and franchises",
          ],
          icon: Shield,
        },
        {
          title: "Experience synchronisation",
          description:
            "Give customers and distributors pricing clarity while maintaining unified inventory and compensation logic.",
          bullets: [
            "Localized storefront and portal pricing down to SKU level",
            "Distributor wallet balances, statements, and alerts in native currency",
            "Scenario planning dashboards for forecasting and incentive design",
          ],
          icon: UsersFour,
        },
      ],
    },
    {
      type: "roadmap",
      heading: "Seven-week delivery cadence",
      description:
        "Clear checkpoints keep finance, technology, and leadership informed while we operationalise currency automation.",
      stages: [
        {
          title: "Assessment & modelling",
          description:
            "Map compensation, pricing, and treasury requirements. Build currency and taxation scenarios that inform solution design. Deliverables: market readiness heatmap, conversion rate playbooks and failover rules, risk register with mitigation strategies.",
          duration: "Weeks 1-2",
          icon: Globe,
        },
        {
          title: "Configuration & validation",
          description:
            "Automate conversions, tax logic, and payout workflows. Validate accuracy with finance and compliance leadership. Deliverables: automated FX pipelines with monitoring, commission + payout stress testing results, stakeholder sign-offs and launch checklist.",
          duration: "Weeks 3-5",
          icon: MapTrifold,
        },
        {
          title: "Enablement & optimisation",
          description:
            "Launch production-ready operations, monitor variance, and embed continuous improvement routines. Deliverables: operations dashboards and alert thresholds, support + field communications toolkit, optimisation backlog with ROI models.",
          duration: "Weeks 6-7",
          icon: CurrencyDollar,
        },
      ],
    },
    {
      type: "packages",
      sectionTitle: "Packages",
      heading: "Packages that match your treasury ambition",
      description:
        "Choose the blueprint that aligns with your growth stage. Each package bundles strategy, automation, analytics, and enablement into a predictable investment.",
      ctaLabel: "Discuss this package",
      items: [
        {
          title: "Regional launch kit",
          price: "$14k fixed",
          description: "Scaling brands piloting cross-border growth",
          outcomes: [
            "FX data pipeline and variance safeguards live",
            "Localized compensation statements and tax schedules",
            "Finance and support enablement playbook",
          ],
          icon: CurrencyCircleDollar,
        },
        {
          title: "Global operations suite",
          price: "$24k fixed",
          description: "Established companies managing diverse field cohorts",
          outcomes: [
            "Multi-ledger settlement with treasury integrations",
            "Automated compliance reporting per jurisdiction",
            "Executive scorecards for margin and payout health",
          ],
          icon: CurrencyCircleDollar,
        },
        {
          title: "Enterprise treasury fabric",
          price: "Custom engagement",
          description:
            "Enterprises balancing complex treasury and incentive models",
          outcomes: [
            "Treasury playbooks with hedging and working capital guidance",
            "AI-assisted anomaly detection for FX and cash flow deviations",
            "Joint optimisation office with quarterly enhancement sprints",
          ],
          icon: Sparkle,
        },
      ],
    },
    {
      type: "enhancements",
      heading: "Impact benchmarks",
      description:
        "Use these metrics to evaluate readiness, success, and ongoing optimisation opportunities.",
      items: [
        {
          title: "Margin protection",
          description:
            "11% — Average improvement after aligning FX margins with compensation cadence.",
          icon: ChartLineUp,
        },
        {
          title: "Compliance response time",
          description:
            "6 hrs — Average time to deliver regulator-ready evidence when FX audits trigger.",
          icon: Shield,
        },
        {
          title: "Distributor satisfaction",
          description:
            "4.7 / 5 — Post-launch score for payout transparency, timeliness, and accessibility.",
          icon: UsersFour,
        },
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    description:
      "Finance, treasury, and operations leaders ask these questions before kick-off.",
    items: [
      {
        question: "Which FX data sources do you support?",
        answer:
          "We connect to institutional FX providers, central bank rates, and client-specific treasury feeds. Rule-based fallbacks keep operations running during outages.",
      },
      {
        question: "Can we mix fiat and digital assets?",
        answer:
          "Yes. Hybrid payouts are supported with guardrails for volatility, compliance, and tax obligations. Treasury and legal teams validate flows before launch.",
      },
      {
        question: "How do you handle retroactive adjustments?",
        answer:
          "Automated retro adjustments reapply historic rates while keeping audit trails intact. Finance can simulate scenarios before committing changes.",
      },
      {
        question: "What training do teams receive?",
        answer:
          "Finance, treasury, support, and field leadership receive enablement tailored to their roles, including variance monitoring and escalation routines.",
      },
    ],
  },
  cta: {
    heading: "Ready to modernise multi-currency operations?",
    description:
      "Share your market expansion goals, treasury policies, and timelines. We'll produce a pricing proposal and implementation plan aligned to leadership priorities.",
    primaryCta: "Book a pricing session",
    secondaryCta: "Pricing",
    cardTitle: "Connect with our team",
    cardBody:
      "Expect a discovery agenda and stakeholder checklist within one business day. Cloud MLM Software stays engaged through launch and optimisation.",
  },
};
