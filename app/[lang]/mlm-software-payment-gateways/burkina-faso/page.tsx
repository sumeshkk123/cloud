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
  Factory,
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Sunrise
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
  title: "Burkina Faso MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Burkina Faso (BF). Cloud MLM Software connects WAEMU banks, mobile money, and distributor enablement for compliant growth.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/burkina-faso"
  },
  openGraph: {
    title: "Burkina Faso MLM Payment Gateways",
    description:
      "Transform Burkina Faso MLM payouts with Cloud MLM Software’s bank, mobile money, and compliance orchestration.",
    url: "/mlm-software-payment-gateways/burkina-faso"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type Signal = {
  title: string;
  detail: string;
  icon: IconType;
};

type Capability = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  label: string;
  headline: string;
  copy: string;
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
    title: "Settlement rhythm",
    value: "T+0.9 days",
    description:
      "WAEMU clearing through BCEAO-regulated banks with weekend buffers and holiday calendars embedded.",
    icon: Gauge
  },
  {
    title: "Gateway ecosystem",
    value: "11 active rails",
    description:
      "Coris Bank, Ecobank, Bank of Africa, Orange Money, Moov Money, Stripe, and PayPal orchestrated together.",
    icon: Layers3
  },
  {
    title: "Compliance dossier",
    value: "34 artefacts",
    description:
      "AML/CFT, BCEAO, and data governance packs shorten approval cycles for regulators and financial partners.",
    icon: ListChecks
  }
];

const MARKET_SIGNALS: Signal[] = [
  {
    title: "Mobile money ubiquity",
    detail:
      "Orange Money and Moov Money dominate distributor payouts. Offline caching and retry orchestration keep transfers reliable even when connectivity fluctuates.",
    icon: Sparkles
  },
  {
    title: "Regional trade corridors",
    detail:
      "Distributors operate across Côte d’Ivoire, Ghana, and Mali. FX buffers and multi currency controls protect margins while enabling growth.",
    icon: Globe2
  },
  {
    title: "Sector diversification",
    detail:
      "Agriculture, energy, and wellness networks require transparent incentive and compliance reporting to keep trust high.",
    icon: Factory
  }
];

const CAPABILITIES: Capability[] = [
  {
    name: "Bank-led clearing fabric",
    summary: "Automate settlement with Burkina Faso’s leading commercial banks.",
    bullets: [
      "Integrations for Coris Bank, Ecobank, Bank of Africa, Société Générale, and Orabank.",
      "Maker-checker approvals aligned to BCEAO anti-fraud directives and internal policies.",
      "Reconciliation exports formatted for BCEAO reporting and board reviews."
    ],
    icon: Bank
  },
  {
    name: "Mobile money & PSP convergence",
    summary: "Blend wallet, card, and global PSP rails under one governance policy.",
    bullets: [
      "Orange Money, Moov Money, Stripe, PayPal, and 2Checkout connectors instrumented with observability.",
      "Dynamic routing rules by product line, value band, and risk to optimise success rates.",
      "Dispute resolution automation linked to finance, legal, and distributor support teams."
    ],
    icon: Circuitry
  },
  {
    name: "Distributor enablement studio",
    summary: "Equip field leaders with the insights and tools they need to thrive.",
    bullets: [
      "Dashboards and narratives in French and English with permission-aware access.",
      "Recognition and wellbeing analytics tied to payout accuracy and compliance tasks.",
      "Ticketing, auto responder, and backup manager modules orchestrated for regional support."
    ],
    icon: Handshake
  }
];

const DELIVERY_PHASES: Phase[] = [
  {
    label: "Sprint 1",
    headline: "Compliance & operations blueprint",
    copy:
      "Align finance, legal, and field leadership on BCEAO, AML/CFT, and data governance requirements before integration begins.",
    artefacts: [
      "Risk register covering banking partners, mobile money providers, and corridor obligations.",
      "Stakeholder RACI for approvals, escalations, and communications across Ouagadougou and Bobo-Dioulasso.",
      "Solution architecture diagrams with approved data flows and monitoring strategy."
    ],
    icon: MapTrifold
  },
  {
    label: "Sprint 2",
    headline: "Integration & telemetry launch",
    copy:
      "Deploy hardened connectors, credential vaulting, and observability across banks, wallets, and modules.",
    artefacts: [
      "Connector playbook with heartbeat thresholds, alert routing, and fallbacks.",
      "Maker-checker configuration and segregation of duties aligned to compliance policies.",
      "Performance tests covering high-volume payout cycles and mobile money transfers."
    ],
    icon: Circuitry
  },
  {
    label: "Sprint 3",
    headline: "Pilot & optimisation loop",
    copy:
      "Pilot with top distributor cohorts to validate payout speed, communications, and compliance posture.",
    artefacts: [
      "Executive dashboards tracking settlement tempo, exception volumes, and FX exposure.",
      "Feedback loops from distributor councils and support teams to inform backlog.",
      "Optimisation roadmap prioritised by risk reduction, growth, and experience impact."
    ],
    icon: ChartLineUp
  }
];

const ASSURANCE_PILLARS: Pillar[] = [
  {
    title: "Regulator readiness",
    copy:
      "AML/CFT workflows, sanction screening, and approval logs provide evidence for BCEAO or banking audits at any time.",
    icon: SealCheck
  },
  {
    title: "Treasury foresight",
    copy:
      "Liquidity, FX, and receivables dashboards keep CFOs ahead of corridor shifts and distributor demand.",
    icon: Coin
  },
  {
    title: "Community trust",
    copy:
      "Timely communications, ticketing integrations, and wellbeing analytics ensure distributors feel supported every cycle.",
    icon: Sunrise
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which financial partners do you integrate in Burkina Faso?",
    answer:
      "We integrate Coris Bank, Ecobank, Bank of Africa, Société Générale, Orabank, and additional WAEMU institutions alongside Orange Money, Moov Money, Stripe, PayPal, and 2Checkout. Every connector inherits unified security, logging, and approval workflows."
  },
  {
    question: "How do you maintain reliability with mobile money payouts?",
    answer:
      "Offline queues, automated retries, and heartbeat monitoring keep mobile money transfers on schedule. Stakeholders receive SMS or email updates when transactions clear, maintaining trust during connectivity fluctuations."
  },
  {
    question: "What documentation supports BCEAO and internal compliance checks?",
    answer:
      "You receive AML/CFT programmes, sanction screening guides, data processing agreements, tax templates, and playbooks tailored to BCEAO expectations—making audits and bank reviews straightforward."
  }
];

type PageProps = {
  params: { lang: string };
};

export default async function BurkinaFasoPaymentGatewaysPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3.25rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-amber-50 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Burkina Faso • Payment resilience
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Burkina Faso (BF)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We extend that expertise to Burkina Faso so your distributors receive fast, transparent payouts with BCEAO-ready governance.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Burkina Faso appears below, along with the guardrails that keep them dependable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Build your Burkina Faso plan
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/40">
                  <Link href={demoHref}>
                    Preview the guided demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.title}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <metric.icon className="mt-1 h-6 w-6 text-amber-500 dark:text-amber-300" aria-hidden />
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {metric.title}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
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
            Market signals
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Understand Burkina Faso’s payment dynamics before you scale
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Mobile wallets, regional trade, and sector diversity all influence how payouts must operate. We bring those threads into one strategy.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_SIGNALS.map((signal) => (
            <div
              key={signal.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <signal.icon className="h-6 w-6 text-amber-500 dark:text-amber-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{signal.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Payment capabilities tuned for Burkina Faso
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Connect banks, mobile money, and distributor tooling through one policy engine so leadership stays in control.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.name}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <capability.icon className="h-6 w-6 text-amber-500 dark:text-amber-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{capability.name}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{capability.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-amber-500/80" aria-hidden />
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
            Delivery sprints
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Implementation steps engineered for WAEMU compliance
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each sprint balances technology, compliance, and people enablement so your teams stay aligned and energised.
          </p>
        </div>
        <div className="space-y-8">
          {DELIVERY_PHASES.map((phase) => (
            <div
              key={phase.label}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {phase.label}
                </span>
                <phase.icon className="h-6 w-6 text-amber-500 dark:text-amber-300" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{phase.headline}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.copy}</p>
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
            Assurance pillars that earn stakeholder confidence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Regulators, banks, and distributor leaders all receive the context they need—no matter where they sit.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <pillar.icon className="h-6 w-6 text-amber-500 dark:text-amber-300" aria-hidden />
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
                Clarity for finance leaders, compliance teams, and distributor councils preparing to scale in Burkina Faso.
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.3),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver dependable MLM payouts across Burkina Faso and beyond
            </h2>
            <p className="text-base text-slate-100/90">
              Cloud MLM Software unites banking, mobile money, and leadership enablement into a transparent, high-trust operation. Let’s build it together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={pricingHref}>Review pricing guidance</Link>
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
