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
  LineChart,
  Map,
  ShieldCheck,
  Waypoints
} from "lucide-react";
import {
  Bank,
  Circuitry,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Handshake,
  LockKey
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPillar = {
  title: string;
  synopsis: string;
  icon: IconType;
};

type MarketSignal = {
  title: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type GatewayOption = {
  name: string;
  focus: string;
  highlights: string[];
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  headline: string;
  detail: string;
  deliverables: string[];
  icon: IconType;
};

type AssuranceGuard = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_PILLARS: HeroPillar[] = [
  {
    title: "Bank-native connectors",
    synopsis:
      "API adapters for Afghanistan International Bank, Azizi Bank, and leading Islamic finance partners keep fiat inflows verified at the ledger level.",
    icon: Bank
  },
  {
    title: "Regional corridor routing",
    synopsis:
      "Optimise settlements through UAE, India, and Central Asia corridors with currency buffers and treasury approvals built in.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Continuous compliance telemetry",
    synopsis:
      "AML screening, dual-control approvals, and sanction refresh cycles are orchestrated automatically with auditable trails.",
    icon: ShieldCheck
  }
];

const MARKET_SIGNALS: MarketSignal[] = [
  {
    title: "Hybrid payment ecosystems",
    summary: "Banks, hawala partners, and mobile wallets coexist in Afghanistan.",
    detail:
      "Our orchestration layer normalises settlement reports from each rail so finance teams work from a single source of truth.",
    icon: Circuitry
  },
  {
    title: "Priority city coverage",
    summary: "Kabul, Herat, and Mazar-e-Sharif are the primary distributorship hubs.",
    detail:
      "Geo-aware routing ensures distributors in each region see pricing in AFN while cross-border leaders transact in USD or AED.",
    icon: Map
  },
  {
    title: "Operational resilience",
    summary: "Field connectivity can be intermittent.",
    detail:
      "Background retries, offline receipt caching, and alerting keep payouts on schedule even when networks fluctuate.",
    icon: LineChart
  }
];

const GATEWAY_OPTIONS: GatewayOption[] = [
  {
    name: "Local bank settlement suite",
    focus: "Secure clearing with domestic banks",
    highlights: [
      "REST integrations with AIB, Azizi Bank, Pashtany Bank, and trusted credit unions",
      "Automated branch code mapping and IBAN validation for distributor onboarding",
      "Daily reconciliation exports aligned to Da Afghanistan Bank reporting formats"
    ],
    icon: Bank
  },
  {
    name: "Regional PSP aggregation",
    focus: "Cross-border acceptance for diaspora sales",
    highlights: [
      "Gateway adapters for Middle East acquiring partners and South Asian PSPs",
      "Dynamic currency conversion with margin controls and treasury workflows",
      "Fallback logic that cascades to secondary processors when risk thresholds trigger"
    ],
    icon: Handshake
  },
  {
    name: "Money service & wallet bridges",
    focus: "Alternative payout experiences",
    highlights: [
      "Integration frameworks for M-Paisa, HesabPay, and authorised money service providers",
      "Multi-layer KYC capturing biometric, Tazkira, and utility proofs inside the distributor profile",
      "Configurable settlement calendars to support daily, weekly, or on-demand withdrawals"
    ],
    icon: CurrencyCircleDollar
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    headline: "Discovery & policy mapping",
    detail:
      "We align your compensation model, treasury policy, and banking relationships before the first line of code is written.",
    deliverables: [
      "Stakeholder workshops across finance, compliance, and operations",
      "Current-state payment process audit with risk heatmap",
      "Regulatory and licensing checklists for Afghanistan and export markets"
    ],
    icon: Map
  },
  {
    phase: "02",
    headline: "Integration blueprint",
    detail:
      "Connector templates, sandbox credentials, and data contracts are finalised alongside your IAM strategy.",
    deliverables: [
      "Gateway sequencing diagram with failover logic",
      "Tokenisation and data residency plan for sensitive payout data",
      "Joint test scenarios covering enrolment, payout, and chargeback events"
    ],
    icon: Circuitry
  },
  {
    phase: "03",
    headline: "Controlled rollout",
    detail:
      "Pilot markets go live with live telemetry dashboards so leaders and regulators see activity in real time.",
    deliverables: [
      "Dual-run reconciliation against legacy payout tools",
      "Configurable alerting for AML hits and settlement delays",
      "Field enablement playbooks and multi-language training kits"
    ],
    icon: Waypoints
  },
  {
    phase: "04",
    headline: "Optimise & expand",
    detail:
      "Once the core market is stable, we extend the blueprint to franchise partners, diaspora sellers, and new corridors.",
    deliverables: [
      "Performance benchmarking and KPI health reviews",
      "Automation backlog prioritised with finance leadership",
      "Support OKRs and success metrics for shared visibility"
    ],
    icon: LineChart
  }
];

const ASSURANCE_GUARDS: AssuranceGuard[] = [
  {
    title: "Embedded governance",
    description:
      "Role-based access, maker-checker approvals, and immutable audit logs keep payout authorisations defensible during regulator reviews.",
    icon: LockKey
  },
  {
    title: "Threat-aware infrastructure",
    description:
      "Zero-trust principles, key vault segregation, and continuous patching protect sensitive financial data across every environment.",
    icon: ShieldCheck
  },
  {
    title: "Localised support cadence",
    description:
      "Afghanistan-based champions receive bilingual helpdesk coverage and weekly performance clinics from our payment strategists.",
    icon: Handshake
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Can Cloud MLM Software manage both AFN and USD settlement windows?",
    answer:
      "Yes. Treasury teams can configure multi-wallet settlements, choose hedging rules, and run consolidated or split-ledger reconciliation depending on partner agreements."
  },
  {
    question: "How do you handle AML and sanction screening for Afghanistan?",
    answer:
      "We integrate with global and local watchlist providers, enforce dual approvals for high-risk transactions, and surface escalation workflows directly inside the finance console."
  },
  {
    question: "Is offline commission payout supported when internet coverage drops?",
    answer:
      "Offline receipt caching ensures distributors can collect payouts with SMS verification. Once connectivity returns, the ledger syncs and compliance checks resume automatically."
  },
  {
    question: "What onboarding support do field leaders receive?",
    answer:
      "Dedicated onboarding specialists provide credential walkthroughs, custom SOPs for branch staff, and quarterly optimisation reviews tailored to each market segment."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Afghanistan MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Design a resilient payout engine for your Afghanistan MLM network. Cloud MLM Software orchestrates banks, PSPs, and mobile wallets with compliance controls built in.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/afghanistan", locale)
    },
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  };
}

type AfghanistanPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AfghanistanPaymentGatewaysPage({ params }: AfghanistanPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-200/70 bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-10">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(5,150,105,0.2),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(37,99,235,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.45),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(5,150,105,0.35),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(37,99,235,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-[1.05fr_minmax(0,0.75fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-500/40 dark:bg-slate-900/60 dark:text-sky-200">
              <GlobeHemisphereEast className="h-4 w-4" />
              Afghanistan payment intelligence
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Craft a resilient MLM payment gateway footprint across Afghanistan
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Cloud MLM Software unifies domestic banking partners, regional PSPs, and authorised money service providers into a single, AI-ready payout experience. Maintain regulator trust, protect treasury operations, and empower distributors to transact with confidence everywhere they operate.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                <Link href={contactHref}>
                  Speak to a payment architect
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200 bg-white/80 text-sky-800 hover:bg-sky-50 dark:border-sky-500/30 dark:bg-transparent dark:text-sky-100 dark:hover:bg-sky-500/10"
              >
                <Link href={demoHref}>Request a guided demo</Link>
              </Button>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2">
              {HERO_PILLARS.map((pillar) => (
                <li
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/75 p-6 shadow-sm backdrop-blur transition dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100" aria-hidden>
                    <div className="h-full w-full bg-gradient-to-br from-sky-100/80 via-transparent to-emerald-100/80 dark:from-sky-500/10 dark:via-transparent dark:to-emerald-500/10" />
                  </div>
                  <pillar.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pillar.synopsis}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative isolate flex flex-col gap-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="absolute inset-x-6 top-8 -z-10 h-[260px] rounded-3xl bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-500/20 blur-2xl" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              Executive dashboard snapshot
            </p>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <p>
                &quot;Having a single ledger for Kabul, Herat, and global settlements changed our cadence with regulators. Treasury closes books in hours, not days, and field teams trust the numbers.&quot;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">— Cloud MLM Software finance transformation partner</p>
            </div>
            <dl className="grid gap-5 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 text-slate-800 dark:border-slate-600/50 dark:bg-slate-950/40 dark:text-slate-100">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Settlement windows</dt>
                <dd className="mt-1 text-3xl font-semibold">Daily, weekly, and on-demand</dd>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Configure cadence per distributor cohort and align with liquidity planning.
                </p>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Coverage</dt>
                <dd className="mt-1 text-3xl font-semibold">15+ authorised providers</dd>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Banks, PSPs, and MSBs harmonised through a governed orchestration layer.
                </p>
              </div>
            </dl>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/70 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Need a regional view?</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Explore every supported market and payment rail.</p>
              </div>
              <Button asChild size="sm" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60">
                <Link href={gatewaysHref}>
                  View all gateways
                  <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/70 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment intelligence for an evolving Afghanistan market
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Ground your strategy in real-world conditions. Our payment scientists monitor financial reforms, telecom resilience, and partner reliability so your operations stay ahead of change.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {MARKET_SIGNALS.map((signal) => (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <signal.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-300">{signal.summary}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-50/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200">
            <CurrencyCircleDollar className="h-4 w-4" />
            Gateway architecture
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Three integration lanes that future-proof your commission ecosystem
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each lane can operate independently or as part of a unified orchestration. Treasury leaders control prioritisation, while AI-driven monitoring keeps exceptions in clear view.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {GATEWAY_OPTIONS.map((option) => (
            <article
              key={option.name}
              className="relative flex h-full flex-col gap-5 rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-sky-100 via-transparent to-emerald-100 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-sky-500/20 dark:to-emerald-500/20" aria-hidden />
              <option.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{option.name}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{option.focus}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {option.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-200/70 bg-white/80 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-100/60 via-transparent to-transparent dark:from-sky-500/10" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              An implementation motion built for transparency and speed
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We work shoulder to shoulder with your finance, compliance, and field teams. Every stage is packaged with artefacts that keep leadership, auditors, and distributors fully aligned.
            </p>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="absolute inset-y-0 left-[12.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[62.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            {TIMELINE.map((stage) => (
              <article
                key={stage.phase}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  <span>{stage.phase}</span>
                  <stage.icon className="h-4 w-4 text-sky-600 dark:text-sky-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stage.detail}</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {stage.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <ShieldCheck className="h-4 w-4" />
            Risk & assurance
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Governance that satisfies auditors and reassures distributors
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Security and compliance are embedded across the stack. You gain visibility into every approval, every exception, and every payout—no matter the channel used to fund it.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {ASSURANCE_GUARDS.map((guard) => (
              <div
                key={guard.title}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <guard.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{guard.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{guard.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.35),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Afghanistan compliance pack</h3>
          <p className="mt-3 text-sm text-slate-200">
            Template agreements, SOPs, and regulator-facing evidence kits arrive ready for your legal team to customise. Keep your internal audit and external counsel aligned from day one.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Included artefacts</dt>
              <dd className="mt-2 leading-6 text-slate-100">
                AML policy frameworks, transaction monitoring matrices, onboarding checklists, and bilingual distributor disclosures.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Update cadence</dt>
              <dd className="mt-2 leading-6 text-slate-100">Quarterly, or instantly when regulatory notices are issued.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-200">
            <Link href={pricingHref}>
              Review licensing packages
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Answers to the topics finance leaders, compliance officers, and distributor councils usually raise when planning an Afghanistan launch.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-sky-600 via-sky-500 to-emerald-500 px-6 py-16 text-white shadow-lg dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Elevate payouts, strengthen trust, and lead Afghanistan’s MLM market with confidence
          </h2>
          <p className="text-base text-sky-50/90">
            Cloud MLM Software translates complex banking relationships into a transparent, scalable payment experience. Let us help you deliver certainty to every distributor cycle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Build your launch plan
                <ArrowUpRight className="h-4 w-4 text-sky-600" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              <Link href={demoHref}>Experience the platform</Link>
            </Button>
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
