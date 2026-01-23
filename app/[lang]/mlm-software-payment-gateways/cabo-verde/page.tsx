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
  Compass,
  Globe,
  Layers,
  LifeBuoy,
  Shield,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Circuitry,
  Coins,
  Handshake,
  ListChecks,
  MapTrifold,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cabo Verde MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Cabo Verde (CV). Cloud MLM Software aligns island commerce, diaspora flows, and distributor enablement for compliant growth.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cabo-verde"
  },
  openGraph: {
    title: "Cabo Verde MLM Payment Gateways",
    description:
      "Unite banking, PSPs, and Maritime diaspora commerce with Cloud MLM Software’s orchestration in Cabo Verde.",
    url: "/mlm-software-payment-gateways/cabo-verde"
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
  name: string;
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
    label: "Settlement rhythm",
    value: "T+0.6 days",
    detail:
      "Banco de Cabo Verde clearing with automated timezone adjustments for Europe and North America corridors.",
    icon: Waves
  },
  {
    label: "Gateway ecosystem",
    value: "10 integrations",
    detail:
      "Banco Comercial do Atlântico, Caixa Económica, Banco Interatlântico, Vinti4, Stripe, PayPal, and CVMovel wallets unified under one policy.",
    icon: Layers
  },
  {
    label: "Compliance artefacts",
    value: "33 templates",
    detail:
      "AML/CFT, data governance, and tax documentation aligned to Banco de Cabo Verde and EU partner expectations.",
    icon: ListChecks
  }
];

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "Island and diaspora commerce",
    copy:
      "Sales originate locally and via diaspora communities across Portugal, USA, and the Netherlands. FX controls and settlement clarity keep both sides aligned.",
    icon: Globe
  },
  {
    title: "Tourism & wellness sectors",
    copy:
      "High service expectations require transparent incentive, inventory, and compliance reporting to retain top performers.",
    icon: LifeBuoy
  },
  {
    title: "Digital adoption momentum",
    copy:
      "Vinti4 cards, CVMovel wallets, and online PSPs see rapid uptake. Unified orchestration prevents fragmentation and inconsistent experiences.",
    icon: Sparkles
  }
];

const CAPABILITIES: Capability[] = [
  {
    name: "Bank-centric clearing",
    summary: "Automate settlement with Cabo Verde’s leading banks and cooperatives.",
    bullets: [
      "Integrations for Banco Comercial do Atlântico, Caixa Económica, Banco Interatlântico, and Banco BAI Cabo Verde.",
      "Maker-checker approvals aligned to Banco de Cabo Verde AML directives.",
      "Reconciliation exports designed for regulator and board oversight meetings."
    ],
    icon: Bank
  },
  {
    name: "Card, wallet & PSP mesh",
    summary: "Bring Vinti4, CVMovel, Stripe, and PayPal into one risk-managed engine.",
    bullets: [
      "Dynamic routing tuned for tourism peaks, diaspora purchase windows, and product profitability.",
      "Chargeback and dispute automation linked to finance and customer care workflows.",
      "Fallback and offline-first logic for inter-island connectivity resilience."
    ],
    icon: Circuitry
  },
  {
    name: "Distributor enablement studio",
    summary: "Deliver insights that keep leaders confident across islands and abroad.",
    bullets: [
      "Dashboards and narratives in Portuguese and English with governed data access.",
      "Recognition and wellbeing analytics tied to payout accuracy and regulatory tasks.",
      "Ticketing, auto responder, and backup manager modules orchestrated for proactive support."
    ],
    icon: Handshake
  }
];

const DELIVERY_PHASES: Phase[] = [
  {
    step: "Sprint 1",
    headline: "Blueprint & regulator alignment",
    description:
      "Workshops with finance, legal, and distributor councils map AML/CFT, tax, and FX governance before integration begins.",
    artefacts: [
      "Risk register covering banking partners, diaspora corridors, and compliance obligations.",
      "Stakeholder RACI with timezone-aware approvals and escalation paths.",
      "Solution architecture diagrams showing data flows and monitoring strategy."
    ],
    icon: MapTrifold
  },
  {
    step: "Sprint 2",
    headline: "Integration & telemetry deployment",
    description:
      "Implement connectors, credential vaulting, and observability for banks, cards, wallets, and Cloud MLM Software modules.",
    artefacts: [
      "Connector playbook with heartbeat thresholds, alert routing, and continuity scenarios.",
      "Maker-checker and segregation of duties configuration with audit logs.",
      "Performance tests for diaspora peaks, tourism seasons, and mobile wallet transfers."
    ],
    icon: Circuitry
  },
  {
    step: "Sprint 3",
    headline: "Pilot & optimisation",
    description:
      "Pilot with representative cohorts across Santiago, São Vicente, and diaspora leaders to validate transparency and speed.",
    artefacts: [
      "Executive dashboards covering settlement tempo, exception volume, and FX exposure.",
      "Feedback loops with distributor councils and support teams to inform backlog.",
      "Optimisation roadmap prioritised by revenue, risk, and experience impact."
    ],
    icon: Compass
  }
];

const ASSURANCE_PILLARS: Pillar[] = [
  {
    title: "Regulator-grade transparency",
    copy:
      "AML/CFT, sanction screening, and audit trails satisfy Banco de Cabo Verde reviews and international banking partners.",
    icon: SealCheck
  },
  {
    title: "Treasury foresight",
    copy:
      "FX, liquidity, and receivables dashboards keep CFOs ahead of seasonal swings and diaspora remittances.",
    icon: Coins
  },
  {
    title: "Distributor trust",
    copy:
      "Communications, recognition, and wellbeing analytics keep island and diaspora leaders engaged every cycle.",
    icon: Handshake
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Cabo Verde?",
    answer:
      "We orchestrate Banco Comercial do Atlântico, Caixa Económica, Banco Interatlântico, Banco BAI Cabo Verde, Vinti4 networks, CVMovel wallets, Stripe, PayPal, and additional PSPs. Every connector inherits unified security, logging, and approval policies."
  },
  {
    question: "How do you manage diaspora and tourism payment peaks?",
    answer:
      "Dynamic routing, load testing, and observability keep payouts stable during holiday and travel seasons. FX and liquidity dashboards give finance teams real-time visibility into corridor flows."
  },
  {
    question: "What compliance documentation is provided?",
    answer:
      "We supply AML/CFT programmes, sanction screening guides, data processing agreements, tax reporting templates, and banking partner onboarding packs tailored to Banco de Cabo Verde expectations."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function CaboVerdePaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3.25rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Cabo Verde • Island commerce
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Cabo Verde (CV)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We adapt those patterns to Cabo Verde’s island and diaspora economy so payouts remain fast, transparent, and compliant.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Cabo Verde are presented below, together with the controls that keep them resilient across every island.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Plan your Cabo Verde rollout
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
            Understand Cabo Verde’s payment environment
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Island logistics, diaspora remittances, and digital adoption require a unified operating model. We provide the blueprint and tooling to deliver it.
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
              Payment capabilities engineered for Cabo Verde
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Integrate banks, cards, wallets, and distributor experience into one transparent engine that leadership can trust.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.name}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <capability.icon className="h-6 w-6 text-sky-500 dark:text-sky-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{capability.name}</h3>
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
            Delivery cadence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Implementation phases optimised for island operations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each sprint supplies artefacts that regulators, banking partners, and distributor councils can trust.
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
            Assurance pillars for Cabo Verdean leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, treasury, and distributor experience share one coherent command centre, making executive decisions faster and more confident.
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
                Answers for finance directors, compliance leaders, and distributor councils preparing to scale in Cabo Verde.
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.3),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver an island-ready MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-base text-slate-100/90">
              Unite banks, PSPs, and distributor enablement under one disciplined platform. We will help you launch in Cabo Verde with confidence.
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
