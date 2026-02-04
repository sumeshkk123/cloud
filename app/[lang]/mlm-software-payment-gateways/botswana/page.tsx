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
  Globe2,
  LineChart,
  ShieldCheck,
  Workflow
} from "lucide-react";
import {
  Bank,
  Circuitry,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  HandCoins,
  Handshake,
  Lightning,
  LockKey,
  Notebook
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Botswana MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Botswana (BW). Cloud MLM Software aligns banks, PSPs, and distributor enablement for compliant, high-trust payout operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/botswana"
  },
  openGraph: {
    title: "Botswana MLM Payment Gateways",
    description:
      "Discover how Cloud MLM Software unifies Botswana banking, digital wallets, and distributor experiences to deliver reliable MLM payouts.",
    url: "/mlm-software-payment-gateways/botswana"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type MarketInsight = {
  title: string;
  description: string;
  icon: IconType;
};

type Capability = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Sprint = {
  phase: string;
  headline: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type Assurance = {
  title: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Settlement tempo",
    value: "T+1.1 days",
    detail:
      "Automated clearing through Bank of Botswana regulated corridors with weekend and holiday buffers baked in.",
    icon: LineChart
  },
  {
    label: "Gateway coverage",
    value: "9 primary rails",
    detail:
      "Stanbic, Absa, FNB Botswana, PayPal, Stripe, and Orange Money orchestrated through one secure interface.",
    icon: Globe2
  },
  {
    label: "Compliance artefacts",
    value: "32 documents",
    detail:
      "AML/KYC work instructions, FATF-aligned screening flows, and distributor documentation ready for auditors.",
    icon: Notebook
  }
];

const MARKET_INSIGHTS: MarketInsight[] = [
  {
    title: "Regional trade corridors",
    description:
      "MLM leaders sell into South Africa, Namibia, and Zambia. FX governance protects pula margins while enabling cross-border growth.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Mobile-first distributors",
    description:
      "Orange Money, MyZaka, and digital wallets are embedded in field operations. Offline caching and retry logic keep payouts punctual.",
    icon: Lightning
  },
  {
    title: "Sector diversification",
    description:
      "Wellness, mining services, and agri-tech networks rely on transparent payout cycles to maintain trust with experienced teams.",
    icon: Building2
  }
];

const CAPABILITIES: Capability[] = [
  {
    name: "Bank-led clearing fabric",
    summary: "Secure automation for Botswana’s primary commercial banks.",
    bullets: [
      "Native integrations for Absa, Stanbic, FNB Botswana, BancABC, and Standard Chartered.",
      "IBAN and branch code validation built into distributor onboarding journeys.",
      "Daily reconciliation exports mapped to Bank of Botswana reporting templates."
    ],
    icon: Bank
  },
  {
    name: "Digital wallet convergence",
    summary: "Card and alternative payment rails under unified risk policies.",
    bullets: [
      "Adapters for Orange Money, MyZaka, Stripe, PayPal, and regional PSPs.",
      "Dynamic routing rules by product, value, and risk thresholds to protect contribution margin.",
      "Automated dispute, refund, and chargeback workflow glued to finance approvals."
    ],
    icon: Circuitry
  },
  {
    name: "Distributor enablement studio",
    summary: "Keep leaders aligned with transparent insights and support.",
    bullets: [
      "Multi-language portals across English and Setswana with governed announcements.",
      "Recognition and incentive automation linked to payout accuracy and compliance.",
      "Full integration with ticketing, backup manager, and multi currency modules."
    ],
    icon: HandCoins
  }
];

const DELIVERY_SPRINTS: Sprint[] = [
  {
    phase: "01",
    headline: "Risk discovery & blueprint",
    description:
      "Co-create a payment and compliance blueprint with finance, legal, and field leaders across Botswana’s key districts.",
    deliverables: [
      "Consolidated heat map of regulatory and FX obligations by channel.",
      "Stakeholder RACI for approvals, escalations, and communications.",
      "Architecture diagrams covering bank, wallet, and ERP integration points."
    ],
    icon: Workflow
  },
  {
    phase: "02",
    headline: "Integration runway",
    description:
      "Deploy hardened connectors, observability, and data flows between core banking systems, PSPs, and Cloud MLM Software modules.",
    deliverables: [
      "Connector playbook with monitoring baselines and alert routing.",
      "Credential vaulting and maker-checker configuration for sensitive actions.",
      "Performance tests validating high-volume distributor payout cycles."
    ],
    icon: Circuitry
  },
  {
    phase: "03",
    headline: "Pilot & optimisation loop",
    description:
      "Launch a curated distributor cohort across Gaborone and Francistown to validate speed, transparency, and satisfaction metrics.",
    deliverables: [
      "Real-time dashboards covering settlement tempo and exception handling.",
      "Feedback loops for field leaders, customer care, and finance controllers.",
      "Actionable backlog prioritised by risk reduction and growth impact."
    ],
    icon: LineChart
  }
];

const ASSURANCE_LAYERS: Assurance[] = [
  {
    title: "AML and sanction rigour",
    copy:
      "Screening policies align to Bank of Botswana mandates and FATF expectations, with full audit trails and evidence packs.",
    icon: ShieldCheck
  },
  {
    title: "Treasury command centre",
    copy:
      "Forecasting, liquidity, and FX insights surface in a single pane, so CFOs act on accurate, current data across every rail.",
    icon: BarChart3
  },
  {
    title: "Operational resilience",
    copy:
      "Telemetries, heartbeats, and automated retries mitigate connectivity variance and keep distributors informed instantly.",
    icon: Lightning
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment rails do you integrate for Botswana MLM operations?",
    answer:
      "We handle commercial bank settlement with Absa, Stanbic, FNB Botswana, BancABC, and Standard Chartered, plus digital rails such as Orange Money, MyZaka, Stripe, and PayPal. Every connector inherits unified security, logging, and approval controls."
  },
  {
    question: "How are pula and cross-border currencies managed?",
    answer:
      "Cloud MLM Software’s multi currency module keeps BWP as the base ledger while supporting USD, ZAR, and EUR corridors. Treasury teams set guardrails for conversion, settlement timing, and hedging policies to protect margins."
  },
  {
    question: "What governance tooling is delivered during implementation?",
    answer:
      "You receive AML playbooks, onboarding checklists, data processing agreements, and reporting templates aligned to Bank of Botswana standards. These artefacts accelerate legal review and prepare you for regulator or banking partner assessments."
  }
];

type PageProps = {
  params: { lang: string };
};

export default async function BotswanaPaymentGatewaysPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Botswana • MLM Payments
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Botswana (BW)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We adapt those proven patterns to Botswana’s regulatory environment so your distributors experience faster, clearer payouts without compromising governance.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Botswana is outlined below, together with the controls and enablement layers that keep them trusted.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Connect with a strategist
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/40">
                  <Link href={demoHref}>
                    Preview guided demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Market signals
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Understand Botswana’s payment landscape before you scale
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Botswana’s financial ecosystem blends resilient commercial banks with rapidly growing digital wallets. Our payment intelligence keeps your leadership team aligned on risk, growth, and distributor expectations.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_INSIGHTS.map((insight) => (
            <div
              key={insight.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <insight.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Gateway orchestration tailored for Botswana
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We bring every financial rail into a single policy engine so your finance and compliance teams operate with total visibility.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.name}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <capability.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Delivery sprints
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            A proven implementation cadence designed for Botswana
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each sprint balances compliance, technology, and distributor enablement. Your teams move fast while staying aligned to governance expectations.
          </p>
        </div>
        <div className="space-y-8">
          {DELIVERY_SPRINTS.map((sprint) => (
            <div
              key={sprint.phase}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                  {sprint.phase}
                </span>
                <sprint.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{sprint.headline}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{sprint.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {sprint.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-slate-400/80 dark:bg-slate-600" aria-hidden />
                    <span>{deliverable}</span>
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
            Controls that reassure regulators and distributors
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance is embedded in every workflow, from sanction screening to distributor communications. Leadership gets the clarity required to scale responsibly.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSURANCE_LAYERS.map((layer) => (
            <div
              key={layer.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <layer.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{layer.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{layer.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-white/95 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                FAQs
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                The answers finance officers, compliance leads, and distributor councils need before they approve a Botswana expansion.
              </p>
            </div>
            <div className="space-y-6">
              {FAQS.map((item) => (
                <article
                  key={item.question}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
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
              Build a Botswana payment operation distributors champion
            </h2>
            <p className="text-base text-slate-100/90">
              Unite banking partners, digital wallets, and people experience inside Cloud MLM Software. We will help you launch with confidence and scale without surprises.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Start your blueprint session
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
