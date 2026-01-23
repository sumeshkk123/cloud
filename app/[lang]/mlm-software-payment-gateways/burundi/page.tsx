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
  ChartBar,
  Compass,
  Earth,
  Layers,
  ShieldCheck,
  Sparkles,
  Timer
} from "lucide-react";
import {
  Bank,
  Circuitry,
  Coin,
  Handshake,
  ListMagnifyingGlass,
  MapTrifold,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Burundi MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Burundi (BI). Cloud MLM Software orchestrates bank, mobile money, and cross-border payouts with compliance built in.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/burundi"
  },
  openGraph: {
    title: "Burundi MLM Payment Gateways",
    description:
      "Unlock resilient MLM payout operations in Burundi with Cloud MLM Software’s banking, mobile money, and governance expertise.",
    url: "/mlm-software-payment-gateways/burundi"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  value: string;
  description: string;
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
  detail: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_HIGHLIGHTS: Highlight[] = [
  {
    label: "Settlement tempo",
    value: "T+1.0 days",
    description:
      "Bank of the Republic of Burundi clearing with automated weekend buffers and exception monitoring.",
    icon: Timer
  },
  {
    label: "Gateway coverage",
    value: "9 integrated rails",
    description:
      "BANCOBU, Ecobank, CRDB Burundi, FinBank, SmilePay, Lumitel Money, Stripe, and PayPal delivered under one policy.",
    icon: Layers
  },
  {
    label: "Compliance artefacts",
    value: "31 documents",
    description:
      "AML/CFT, data governance, and tax templates aligned to Burundian regulation and EAC best practice.",
    icon: ListMagnifyingGlass
  }
];

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "Mobile-first adoption",
    copy:
      "Lumitel Money and Smart Pesa wallets drive distributor engagement. Offline-first design keeps payouts reliable during connectivity dips.",
    icon: Sparkles
  },
  {
    title: "East African corridors",
    copy:
      "Commerce with Tanzania, Rwanda, and DR Congo demands multi currency and FX controls to protect margins while remaining compliant.",
    icon: Earth
  },
  {
    title: "Sector focus",
    copy:
      "Agriculture, wellness, and telecom networks require transparent payout, inventory, and compliance analytics to build trust.",
    icon: ChartBar
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking core",
    summary: "Automate settlement with Burundian and regional banks.",
    bullets: [
      "Integrations for BANCOBU, Ecobank Burundi, CRDB Burundi, FinBank, and BGFIBank.",
      "Maker-checker approvals and role segregation aligned to central bank directives.",
      "Reconciliation exports structured for regulator and board reviews."
    ],
    icon: Bank
  },
  {
    title: "Mobile money & PSP mesh",
    summary: "Combine wallets, cards, and global PSPs without fragmenting governance.",
    bullets: [
      "Lumitel Money, SmilePay, Smart Pesa, Stripe, and PayPal connectors with telemetry.",
      "Dynamic routing and retry policies tuned for rural coverage variability.",
      "Dispute and refund automation with finance and support collaboration spaces."
    ],
    icon: Circuitry
  },
  {
    title: "Distributor enablement layer",
    summary: "Equip leaders with the insights they need to power growth.",
    bullets: [
      "Dashboards and narratives in Kirundi, French, and English with governed access.",
      "Recognition and wellbeing analytics tied to payout accuracy and compliance readiness.",
      "Ticketing, auto responder, and backup manager modules orchestrated for rapid support."
    ],
    icon: Handshake
  }
];

const DELIVERY_PHASES: Phase[] = [
  {
    step: "Phase A",
    headline: "Blueprint & regulator alignment",
    description:
      "Collaborative workshops align finance, legal, and distributor leadership on banking, mobile money, and data governance expectations.",
    artefacts: [
      "Risk register covering AML/CFT, data residency, and mobile money obligations.",
      "Stakeholder RACI for approvals, escalations, and communications across Bujumbura and key regions.",
      "Solution architecture diagrams with approved data flows and audit checkpoints."
    ],
    icon: MapTrifold
  },
  {
    step: "Phase B",
    headline: "Integration & observability",
    description:
      "Deploy connectors, telemetry, and automation across banks, wallets, and Cloud MLM Software modules.",
    artefacts: [
      "Connector catalogue with heartbeat monitoring, alert routing, and fallback logic.",
      "Credential vaulting, maker-checker configuration, and segregation of duties policies.",
      "Performance tests covering payout spikes, wallet transfers, and corridor conversions."
    ],
    icon: Circuitry
  },
  {
    step: "Phase C",
    headline: "Pilot & optimisation",
    description:
      "Launch with a representative cohort to validate speed, experience, and compliance before scaling nationwide.",
    artefacts: [
      "Executive dashboards summarising settlement tempo, exception volumes, and FX exposure.",
      "Feedback loops with distributor councils, finance controllers, and support teams.",
      "Optimisation backlog prioritised by risk, revenue impact, and distributor satisfaction."
    ],
    icon: Compass
  }
];

const ASSURANCE_PILLARS: Pillar[] = [
  {
    title: "Regulator confidence",
    detail:
      "AML/CFT workflows, sanction screening, and approval logs ensure readiness for audits by the Bank of the Republic of Burundi.",
    icon: SealCheck
  },
  {
    title: "Treasury clarity",
    detail:
      "FX, liquidity, and cash flow insights keep finance leaders ahead of volatility across EAC corridors.",
    icon: Coin
  },
  {
    title: "Distributor trust",
    detail:
      "Transparent communications, ticketing integrations, and wellbeing analytics keep field leaders informed and motivated.",
    icon: Handshake
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which financial partners do you integrate in Burundi?",
    answer:
      "We integrate BANCOBU, Ecobank, CRDB Burundi, FinBank, BGFIBank, and additional institutions alongside Lumitel Money, SmilePay, Smart Pesa, Stripe, and PayPal. Each connector inherits unified security, logging, and approval controls."
  },
  {
    question: "How do you maintain reliability with mobile money payouts?",
    answer:
      "Our orchestration layer handles offline queues, retries, and compact status notifications. Stakeholders receive SMS or email confirmations when transactions clear, sustaining trust even in low-bandwidth regions."
  },
  {
    question: "What compliance documentation is provided?",
    answer:
      "You receive AML/CFT programmes, sanction screening guides, data processing agreements, tax reporting templates, and audit-ready dashboards tailored to Burundian regulations and EAC best practices."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function BurundiPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3.25rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-lime-50 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(132,204,22,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Burundi • Payment orchestration
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Burundi (BI)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We adapt that expertise to Burundi so your distributors receive timely, transparent payouts backed by strong governance.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Burundi is detailed below, alongside the operational guardrails that ensure reliability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Craft your Burundi rollout
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
              {HERO_HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight.label}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <highlight.icon className="mt-1 h-6 w-6 text-lime-500 dark:text-lime-300" aria-hidden />
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {highlight.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{highlight.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
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
            Market intelligence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What shapes Burundi’s payment landscape
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Mobile-first habits, cross-border trade, and sector priorities all influence payout operations. Our approach unifies those forces for leadership clarity.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_INSIGHTS.map((insight) => (
            <div
              key={insight.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <insight.icon className="h-6 w-6 text-lime-500 dark:text-lime-300" aria-hidden />
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
              Capabilities tailored for Burundian distributors
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Every integration inherits automation, monitoring, and governance so you maintain control while scaling.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <capability.icon className="h-6 w-6 text-lime-500 dark:text-lime-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{capability.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{capability.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-lime-500/80" aria-hidden />
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
            Implementation phases that balance compliance and momentum
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each phase produces artefacts leadership can rely on, keeping stakeholders aligned from discovery through scale.
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
                <phase.icon className="h-6 w-6 text-lime-500 dark:text-lime-300" aria-hidden />
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
            Assurance pillars for leadership confidence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Regulators, banks, and distributor councils receive the visibility they need to support your expansion.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <pillar.icon className="h-6 w-6 text-lime-500 dark:text-lime-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{pillar.detail}</p>
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
                Answers to the most common questions we receive from finance teams, compliance officers, and distributor councils launching in Burundi.
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(132,204,22,0.3),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.28),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver resilient MLM payouts across Burundi and the EAC
            </h2>
            <p className="text-base text-slate-100/90">
              Cloud MLM Software turns fragmented banking and mobile money relationships into a transparent, high-trust experience. Let’s co-design your roadmap.
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
