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
  BarChart3,
  Building2,
  Globe,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Circuitry,
  Coin,
  Handshake,
  ListChecks,
  MapTrifold,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cambodia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Cambodia (KH). Cloud MLM Software unites Bakong, bank, and PSP integrations with compliance and distributor enablement.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cambodia"
  },
  openGraph: {
    title: "Cambodia MLM Payment Gateways",
    description:
      "Launch compliant MLM payout operations in Cambodia with Cloud MLM Software’s banking, PSP, and Bakong orchestration.",
    url: "/mlm-software-payment-gateways/cambodia"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Insight = {
  title: string;
  copy: string;
  icon: IconType;
};

type Capability = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  step: string;
  headline: string;
  description: string;
  artefacts: string[];
  icon: IconType;
};

type Pillar = {
  title: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Bakong settlement speed",
    value: "T+0.2 day avg",
    detail:
      "Bakong instant transfers with automated reconciliation and National Bank of Cambodia oversight built in.",
    icon: Sparkles
  },
  {
    label: "Gateway integrations",
    value: "13 active rails",
    detail:
      "ABA Bank, ACLEDA, Canadia, Wing, Bakong, Stripe, PayPal, and Pi Pay orchestrated in one policy engine.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "37 templates",
    detail:
      "AML/CFT, data governance, and tax reporting packs aligned to NBC, MEF, and partner bank expectations.",
    icon: ListChecks
  }
];

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "Bakong digital backbone",
    copy:
      "CBDC-powered Bakong rails now underpin domestic payments. We embed Bakong APIs, QR, and wallets into unified payout experiences.",
    icon: Globe
  },
  {
    title: "Retail & wellness sectors",
    copy:
      "Cambodia’s wellness, education, and fintech MLMs need transparent incentive and compliance dashboards to retain talent.",
    icon: Building2
  },
  {
    title: "Regional corridors",
    copy:
      "Sales across Thailand, Vietnam, and Singapore require multi currency management, FX buffers, and regulator-aligned reporting.",
    icon: Coin
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Bank & Bakong core",
    summary: "Automate clearing with Cambodia’s leading banks and Bakong infrastructure.",
    bullets: [
      "Integrations for ABA Bank, ACLEDA, Canadia Bank, Wing Bank, and PRASAC.",
      "Bakong instant transfers, QR codes, and wallet orchestration with audit-ready logs.",
      "Maker-checker approvals aligned to NBC regulations and internal risk policies."
    ],
    icon: Bank
  },
  {
    title: "PSP & wallet convergence",
    summary: "Bring Pi Pay, Wing Pay, Stripe, and PayPal into one risk-managed environment.",
    bullets: [
      "Dynamic routing tuned for e-commerce, in-person events, and cross-border segments.",
      "Chargeback, refund, and dispute automation connected to finance and support workflows.",
      "Offline-first logic and telemetry to handle connectivity variance gracefully."
    ],
    icon: Circuitry
  },
  {
    title: "Distributor enablement studio",
    summary: "Equip leaders with insight-rich dashboards and communications.",
    bullets: [
      "Reports and narratives in Khmer and English with governed permissions.",
      "Recognition and wellbeing analytics tied to payout accuracy and compliance status.",
      "Ticketing, auto responder, and backup manager modules orchestrated for proactive care."
    ],
    icon: Handshake
  }
];

const DELIVERY_PHASES: Phase[] = [
  {
    step: "Phase 1",
    headline: "Blueprint & regulatory alignment",
    description:
      "Workshops align finance, legal, and distributor leaders on NBC, MEF, and Bakong requirements before implementation begins.",
    artefacts: [
      "Risk map covering AML/CFT, data residency, and corridor obligations.",
      "Stakeholder RACI for approvals, escalations, and communications.",
      "Solution architecture diagrams highlighting data flows and monitoring strategy."
    ],
    icon: MapTrifold
  },
  {
    step: "Phase 2",
    headline: "Integration & observability",
    description:
      "Deploy connectors, credential vaulting, and telemetry across banks, PSPs, and Cloud MLM Software modules.",
    artefacts: [
      "Connector catalogue with heartbeat thresholds, alert routing, and fallback logic.",
      "Maker-checker and segregation of duties configuration with audit logs.",
      "Performance tests covering Bakong instant transfers, card bursts, and payout peaks."
    ],
    icon: Circuitry
  },
  {
    step: "Phase 3",
    headline: "Pilot & optimisation",
    description:
      "Launch with representative cohorts across Phnom Penh and key provinces to validate experience, compliance, and growth impact.",
    artefacts: [
      "Executive dashboards tracking settlement speed, exception volumes, and FX exposure.",
      "Feedback loops with distributor councils and customer care teams.",
      "Optimisation backlog prioritised by risk reduction, revenue uplift, and experience gains."
    ],
    icon: Workflow
  }
];

const ASSURANCE_PILLARS: Pillar[] = [
  {
    title: "Regulator confidence",
    copy:
      "AML/CFT workflows, sanction screening, and approval logs provide evidence for NBC and partner bank compliance teams.",
    icon: SealCheck
  },
  {
    title: "Treasury clarity",
    copy:
      "FX exposure, liquidity, and receivables analytics keep finance leaders ahead of corridor volatility.",
    icon: ChartLineUp
  },
  {
    title: "Distributor trust",
    copy:
      "Transparent communications, recognition programmes, and wellbeing analytics keep field leaders engaged.",
    icon: Handshake
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which financial partners do you integrate in Cambodia?",
    answer:
      "We integrate ABA Bank, ACLEDA, Canadia Bank, Wing Bank, PRASAC, Bakong APIs, Pi Pay, Wing Pay, Stripe, and PayPal. Each connector inherits unified security, logging, and approval policies."
  },
  {
    question: "How do you manage Bakong, wallets, and card reconciliation?",
    answer:
      "Connector playbooks automate Bakong instant transfers, wallet settlement, card acquiring, and reconciliation. Finance teams view a unified ledger with variance alerts and audit trails."
  },
  {
    question: "What compliance documentation is provided?",
    answer:
      "We deliver AML/CFT programmes, Bakong SOPs, data processing agreements, and tax reporting templates aligned to NBC and MEF expectations—accelerating bank reviews and audits."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function CambodiaPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3.25rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Cambodia • Bakong-powered payouts
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Cambodia (KH)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We extend that playbook to Cambodia’s Bakong economy so your payouts remain fast, secure, and transparent.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Cambodia are detailed below, together with the governance layers that keep them resilient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Design your Cambodia rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/40">
                  <Link href={demoHref}>
                    Explore the guided demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <metric.icon className="mt-1 h-6 w-6 text-sky-500 dark:text-sky-300" aria-hidden />
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{metric.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Market insights
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Know the forces shaping Cambodia’s payment landscape
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Bakong adoption, multi-sector momentum, and cross-border commerce converge. We orchestrate them into one predictable operating model.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_INSIGHTS.map((insight) => (
            <div
              key={insight.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <insight.icon className="h-6 w-6 text-sky-500 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{insight.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Payment capabilities tuned for the Cambodian market
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Banks, Bakong, wallets, and PSPs are harmonised so distributors enjoy reliable, transparent experiences.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <capability.icon className="h-6 w-6 text-sky-500 dark:text-sky-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{capability.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{capability.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)]">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Implementation journey
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            A delivery cadence engineered for Cambodian compliance
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each phase produces artefacts that regulators, banks, and distributor councils can rely on without delay.
          </p>
        </div>
        <div className="space-y-8">
          {DELIVERY_PHASES.map((phase) => (
            <div
              key={phase.step}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {phase.step}
                </span>
                <phase.icon className="h-6 w-6 text-sky-500 dark:text-sky-300" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{phase.headline}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {phase.artefacts.map((artefact) => (
                  <li key={artefact} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-slate-400/70 dark:bg-slate-600" aria-hidden />
                    <span>{artefact}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Assurance pillars for Cambodian leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, treasury, and distributor wellbeing share one command centre built for collaboration across departments.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <pillar.icon className="h-6 w-6 text-sky-500 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-white/95 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                FAQs
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Direct answers for finance leaders, compliance officers, and distributor councils preparing Cambodia expansion.
              </p>
            </div>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-white shadow-lg dark:border-slate-700 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.3),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Lead Cambodia’s MLM payment experience with Bakong confidence
            </h2>
            <p className="text-base text-slate-100/90">
              Cloud MLM Software brings banks, Bakong, and PSPs together so your distributors receive consistent, transparent payouts. Let’s architect your roadmap.
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
