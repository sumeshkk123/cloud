import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  FileCheck2,
  Gauge,
  Layers3,
  Map,
  Timer
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  GlobeHemisphereWest,
  HandCoins,
  Handshake,
  Notebook,
  SealCheck,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Bosnia and Herzegovina MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Bosnia and Herzegovina (BA). Cloud MLM Software unifies domestic banks, PSPs, and distributor experiences with compliance-ready roadmaps.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/bosnia-and-herzegovina"
  },
  openGraph: {
    title: "Bosnia and Herzegovina MLM Payment Gateways",
    description:
      "Explore how Cloud MLM Software aligns Bosnia and Herzegovina gateways, compliance, and distributor operations for faster payouts.",
    url: "/mlm-software-payment-gateways/bosnia-and-herzegovina"
  }
};

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type MarketContour = {
  title: string;
  copy: string;
  icon: IconType;
};

type GatewayStream = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Milestone = {
  phase: string;
  title: string;
  description: string;
  artefacts: string[];
  icon: IconType;
};

type AssuranceAnchor = {
  title: string;
  detail: string;
  icon: IconType;
};

type EnablementCluster = {
  title: string;
  bullets: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_FACTS: HeroFact[] = [
  {
    label: "Settlement rhythm",
    value: "T+1.2 days",
    detail:
      "Average clearing across Sarajevo, Banja Luka, and Brčko correspondents with automated public-holiday buffers.",
    icon: Timer
  },
  {
    label: "Gateway adapters",
    value: "12+ integrations",
    detail:
      "Monri Payments, Payten, Raiffeisen Bank BiH, UniCredit Mostar, and PayPal connectors orchestrated inside a single policy engine.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "40+ templates",
    detail:
      "AML, KYC, and distributor governance packs aligned to Central Bank of Bosnia and Herzegovina directives.",
    icon: FileCheck2
  }
];

const MARKET_CONTOURS: MarketContour[] = [
  {
    title: "Dual-entity governance",
    copy:
      "Federation of Bosnia and Herzegovina and Republika Srpska regulators require entity-level reporting. We mirror controls, retention, and approval hierarchies for each ledger.",
    icon: SealCheck
  },
  {
    title: "Euro corridor momentum",
    copy:
      "Diaspora purchases through Germany, Austria, Croatia, and Slovenia demand BAM↔EUR orchestration, FX hedging, and SEPA-friendly exports.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Distributor trust signals",
    copy:
      "Multilingual self-service, ticketing, and recognition flows keep Sarajevo, Tuzla, and Mostar leadership aligned with headquarters.",
    icon: Handshake
  }
];

const GATEWAY_STREAMS: GatewayStream[] = [
  {
    name: "Bank-first clearing core",
    description:
      "Standardise domestic settlements and treasury hand-offs for Bosnia and Herzegovina’s leading banks.",
    bullets: [
      "Secure SFTP and API exchange with UniCredit Bank Mostar, Raiffeisen Bank BiH, ASA Banka, and NLB.",
      "IBAN, transaction code, and entity residency validation embedded during distributor onboarding.",
      "Reconciliation exports formatted for Central Bank of Bosnia and Herzegovina oversight."
    ],
    icon: Bank
  },
  {
    name: "Card & wallet acceleration",
    description:
      "Blend card acquiring, alternative payments, and global PSPs without fragmenting risk policies.",
    bullets: [
      "Adapters for Monri, CorvusPay, Payten, Stripe, and PayPal to support online and field sales.",
      "Dynamic routing by product, amount, and chargeback exposure to protect margins.",
      "Refund and dispute automation linked to finance workflows and anomaly alerts."
    ],
    icon: Layers3
  },
  {
    name: "Distributor experience studio",
    description:
      "Deliver the service cadence that top-performing teams expect across the region.",
    bullets: [
      "Multilingual portals leveraging Cloud MLM Software’s multi currency and ticket system modules.",
      "Scenario-driven notifications via email, SMS, and WhatsApp with consent tracking.",
      "Leadership dashboards merging payout accuracy, stock levels, and recognition programs."
    ],
    icon: HandCoins
  }
];

const DELIVERY_MILESTONES: Milestone[] = [
  {
    phase: "Weeks 1-2",
    title: "Discovery & compliance blueprint",
    description:
      "Joint workshops capture treasury, legal, and distributor lifecycles for both governing entities.",
    artefacts: [
      "Risk heatmap covering entity-specific obligations and data residency rules.",
      "Payment gateway capability matrix with readiness scoring.",
      "Stakeholder RACI across finance, compliance, and IT."
    ],
    icon: ChartLineUp
  },
  {
    phase: "Weeks 3-5",
    title: "Integration runway",
    description:
      "Connect banks, PSPs, and service modules with observability baked into every adapter.",
    artefacts: [
      "API and SFTP connector catalogue with monitoring baselines.",
      "End-to-end test cases for settlements, reversals, and distributor onboarding.",
      "Credential vaulting and role-based access policies."
    ],
    icon: Notebook
  },
  {
    phase: "Weeks 6-7",
    title: "Pilot cohort launch",
    description:
      "Pilot a cross-entity distributor group to validate payout speed, service cadence, and communications.",
    artefacts: [
      "Executive dashboard tracking payout SLA, exception volume, and FX exposure.",
      "Automated onboarding journeys with KYC document workflows.",
      "Feedback loops for field leadership and customer care."
    ],
    icon: Gauge
  },
  {
    phase: "Weeks 8+",
    title: "Scale & optimise",
    description:
      "Roll out across territories with predictive analytics guiding capital and growth moves.",
    artefacts: [
      "Scenario planning models for expansion into neighbouring EU corridors.",
      "AI insights on churn, incentive effectiveness, and service response time.",
      "Continuous improvement backlog prioritised by impact and effort."
    ],
    icon: Map
  }
];

const ASSURANCE_ANCHORS: AssuranceAnchor[] = [
  {
    title: "Regulator-ready controls",
    detail:
      "Audit trails, sanction screening, and AML policies align to CBBH expectations and EU AMLD guidance.",
    icon: SealCheck
  },
  {
    title: "Treasury command centre",
    detail:
      "Exposure dashboards fuse bank balances, FX buffers, and forecasted payouts so leadership can act early.",
    icon: ChartLineUp
  },
  {
    title: "Resilient operations",
    detail:
      "Observability and auto-remediation guard against connector downtime and keep distributors informed in minutes.",
    icon: GlobeHemisphereWest
  }
];

const ENABLEMENT_CLUSTERS: EnablementCluster[] = [
  {
    title: "Data & intelligence stack",
    bullets: [
      "Unified data lake capturing payment, inventory, and distributor signals in near real-time.",
      "AI narratives summarising performance for leaders in Bosnian, Croatian, and English.",
      "Automated document generation for contracts, tax slips, and compliance submissions."
    ],
    icon: SquaresFour
  },
  {
    title: "People & support experience",
    bullets: [
      "Service playbooks combining ticketing, knowledge base, and proactive outreach workflows.",
      "Gamified recognition aligned with compensation plans and responsible selling standards.",
      "Guided coaching insights for field managers derived from engagement and payout data."
    ],
    icon: Handshake
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways do you onboard for Bosnia and Herzegovina?",
    answer:
      "We cover domestic bank clearing with UniCredit Mostar, Raiffeisen Bank BiH, ASA Banka, and NLB, plus international PSPs such as Monri, CorvusPay, Payten, Stripe, and PayPal. Every connector inherits our security, AML, and reconciliation policies so finance leaders see one consolidated ledger."
  },
  {
    question: "How do you manage BAM and EUR currency flows for distributors?",
    answer:
      "Cloud MLM Software’s multi currency module keeps BAM as the source of truth while offering smart EUR conversion rules for cross-border sales. Treasury teams can configure hedging ranges, distributor-level currency preferences, and automated notifications whenever FX thresholds are breached."
  },
  {
    question: "What compliance documentation is provided during rollout?",
    answer:
      "You receive regulator-friendly AML programmes, KYC checklists, data processing agreements, and onboarding scripts. These artefacts draw from systems we already deploy for global enterprises, letting your legal and audit teams evidence readiness without delaying launch."
  }
];

type PageProps = {
  params: {
    lang: string;
  };
};

export default function BosniaAndHerzegovinaPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[48px] border border-slate-200 bg-white px-8 py-12 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.22),transparent_58%)]"
            aria-hidden
          />
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700/60 dark:text-slate-200">
                Bosnia and Herzegovina
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Bosnia and Herzegovina (BA)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We adapt that playbook to Bosnia and Herzegovina so your distributors receive fast, transparent payouts while finance owns every control point.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Bosnia and Herzegovina is highlighted below, along with the operational excellence layers that keep them resilient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Talk to an architect
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/40">
                  <Link href={demoHref}>
                    Explore a guided demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <div className="flex items-center gap-3">
                    <fact.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        {fact.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Regional intelligence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Mapping Bosnia and Herzegovina’s payment landscape
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Domestic clearing, EU corridors, and diaspora remittances converge across Bosnia and Herzegovina. We normalise every rail so your teams see one coherent flow of funds, obligations, and distributor experiences.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Modules such as multi currency, ticketing, auto responder, and backup manager combine with data orchestration to keep growth predictable—even when local regulations evolve.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_CONTOURS.map((contour) => (
            <div
              key={contour.title}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <contour.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{contour.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{contour.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Gateway portfolio for Bosnia and Herzegovina
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Align domestic banks, PSPs, and distributor tooling inside one governed platform. Every adapter inherits monitoring, compliance, and maker-checker workflows by default.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {GATEWAY_STREAMS.map((stream) => (
              <article
                key={stream.name}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <stream.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stream.name}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stream.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {stream.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-500/80" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-start">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Delivery cadence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Roadmap from blueprint to nationwide scale
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each milestone is engineered to de-risk compliance, technology, and people moves. We keep legal, finance, and distributor councils aligned with artefacts built for rapid executive decisions.
          </p>
        </div>
        <div className="relative border-l border-slate-200 pl-8 dark:border-slate-700">
          {DELIVERY_MILESTONES.map((milestone) => (
            <div key={milestone.title} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[1.15rem] flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white font-semibold text-sm text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                {milestone.phase}
              </span>
              <div className="flex items-start gap-4">
                <milestone.icon className="mt-1 h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{milestone.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{milestone.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {milestone.artefacts.map((artefact) => (
                      <li key={artefact} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-4 rounded-full bg-slate-400 dark:bg-slate-600" aria-hidden />
                        <span>{artefact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Assurance pillars for leadership confidence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance runs through every workflow—from AML and sanction checks to real-time observability dashboards. Your executive team operates with clarity even when the market moves fast.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSURANCE_ANCHORS.map((anchor) => (
            <div
              key={anchor.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <anchor.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{anchor.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{anchor.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-white/90 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Enablement blueprint
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Keep distributors empowered and HQ in control
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Operational excellence extends beyond payments. We orchestrate the data, communications, and coaching layers that sustain momentum across every territory.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {ENABLEMENT_CLUSTERS.map((cluster) => (
                <div key={cluster.title} className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                  <cluster.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{cluster.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {cluster.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Clarity for finance leaders, compliance teams, and distributor councils planning Bosnia and Herzegovina expansion.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-white shadow-lg dark:border-slate-700 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.3),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Lead Bosnia and Herzegovina’s MLM market with disciplined payments and inspired distributors
            </h2>
            <p className="text-base text-slate-100/90">
              Cloud MLM Software turns fragmented banking relationships into a transparent, high-trust experience. Let’s co-design the roadmap that fits your brand ambition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={pricingHref}>Review pricing playbooks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
