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
  CalendarClock,
  Layers3,
  Map,
  ShieldCheck,
  SignalHigh
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Circuitry,
  DeviceMobile,
  GlobeHemisphereEast,
  Handshake,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type MarketPulse = {
  title: string;
  summary: string;
  detail: string;
};

type GatewayStream = {
  title: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type RolloutStage = {
  step: string;
  headline: string;
  detail: string;
  checklist: string[];
  icon: IconType;
};

type Assurance = {
  name: string;
  explanation: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const KEY_METRICS: Metric[] = [
  {
    label: "AZN settlement window",
    value: "T+1",
    description:
      "Clearing orchestration for ABB, Kapital Bank, PASHA Bank, and Unibank with automated Central Bank of Azerbaijan exports.",
    icon: CalendarClock
  },
  {
    label: "Gateway adapters",
    value: "12+",
    description:
      "Stripe, PayU, Adyen, 2Checkout, and trusted Eurasian acquirers unified with native tokenisation and SCA rules.",
    icon: Circuitry
  },
  {
    label: "Market coverage",
    value: "65+ districts",
    description:
      "Localized tax receipt templates for Baku, Ganja, Sumqayit, Mingachevir, and cross-border leadership teams.",
    icon: Map
  }
];

const MARKET_PULSES: MarketPulse[] = [
  {
    title: "Modern retail appetite",
    summary:
      "Omnichannel volumes are expanding across Baku’s fintech corridors and fast-moving consumer goods alliances.",
    detail:
      "Cloud MLM Software keeps AZN card acquiring, QR payments, and digital wallets reconciled in a single ledger your finance leaders can trust."
  },
  {
    title: "Regulatory clarity",
    summary:
      "The Central Bank of Azerbaijan and the State Tax Service expect auditable AML, POS, and e-commerce records.",
    detail:
      "Dual-control maker-checker approvals, sanction refresh cadences, and structured SAR exports are bundled into the payment operations cockpit."
  },
  {
    title: "Cross-corridor growth",
    summary:
      "Distributors frequently expand into Türkiye, Georgia, and the Caspian energy corridor.",
    detail:
      "Configurable FX buffers, settlement hedging, and shipment-linked payout automation protect working capital while you scale."
  }
];

const GATEWAY_STREAMS: GatewayStream[] = [
  {
    title: "Bank-grade payout spine",
    description:
      "Run AZN-first settlements through local clearing partners without sacrificing speed or compliance.",
    outcomes: [
      "API-led integrations with Kapital Bank, PASHA Bank, ABB, and Unibank for payroll and commission routes",
      "IBAN, VOEN, and residency validation embedded in distributor onboarding workflows",
      "Automated reconciliation views aligned to Central Bank of Azerbaijan reporting templates"
    ],
    icon: Bank
  },
  {
    title: "E-commerce & PSP aggregation",
    description:
      "Blend regional acquirers and global processors into a governed acceptance strategy.",
    outcomes: [
      "Stripe, Adyen, PayU, Braintree, and 2Checkout connectors with risk-based routing policies",
      "Dynamic currency conversion for AZN, USD, EUR, and TRY with margin guardrails",
      "Chargeback intelligence feeding dispute queues inside the finance command centre"
    ],
    icon: GlobeHemisphereEast
  },
  {
    title: "Wallet & alternative rails",
    description:
      "Give field leaders consistent experiences across digital wallets, QR payments, and cashless payout cards.",
    outcomes: [
      "MilliÖdəmə gateways, AzeriCard, and Humo wallet bridges structured with token vault isolation",
      "Distributor mobile app SDKs with biometric sign-in and offline receipt caching",
      "Real-time liquidity dashboards covering prepaid cards, wallets, and treasury netting"
    ],
    icon: DeviceMobile
  }
];

const ROLLOUT_STAGES: RolloutStage[] = [
  {
    step: "01",
    headline: "Blueprint your Azerbaijan payout fabric",
    detail:
      "We co-design a policy playbook across compliance, treasury, and channel leadership before the first integration call.",
    checklist: [
      "Stakeholder interviews spanning finance, legal, and distributor enablement",
      "Current-state payout audit with AML, VAT, and withholding tax mapping",
      "Target architecture for AZN-first settlements and cross-border hedging"
    ],
    icon: Layers3
  },
  {
    step: "02",
    headline: "Build governed gateway orchestration",
    detail:
      "Connect local banks, PSPs, and wallets through hardened APIs with telemetry and alerting from day zero.",
    checklist: [
      "Connector templates plus sandbox credentials for each acquiring partner",
      "Risk scoring, KYC tiers, and maker-checker rules codified in workflow automation",
      "Synthetic data packs and scenario plans for SIT, UAT, and regulator demo days"
    ],
    icon: Circuitry
  },
  {
    step: "03",
    headline: "Launch with telemetry-led assurance",
    detail:
      "Run pilot cohorts with live dashboards so leadership, auditors, and distributors see the same numbers in real time.",
    checklist: [
      "Side-by-side reconciliation against legacy payout reports",
      "Alerts for sanction hits, settlement delays, and liquidity thresholds",
      "Field enablement training kits in Azeri, Russian, and English"
    ],
    icon: SignalHigh
  },
  {
    step: "04",
    headline: "Optimise expansion corridors",
    detail:
      "Scale into new territories with AI-assisted forecasting, automation sprints, and quarterly governance reviews.",
    checklist: [
      "Performance retrospectives with CFO and COO scorecards",
      "Backlog of automation candidates prioritised by ROI and risk reduction",
      "Regional rollout roadmap covering Türkiye, Georgia, and EU gateways"
    ],
    icon: ChartLineUp
  }
];

const ASSURANCES: Assurance[] = [
  {
    name: "Regulator-ready governance",
    explanation:
      "Immutable audit logs, granular role design, and SAR-ready exports satisfy Central Bank of Azerbaijan and State Tax Service expectations.",
    icon: ShieldCheck
  },
  {
    name: "Trusted partner cadence",
    explanation:
      "Dedicated payment strategists host monthly optimisation clinics, while success pods in Baku provide bilingual support within SLA.",
    icon: Handshake
  },
  {
    name: "Data protection by design",
    explanation:
      "Token vault separation, end-to-end encryption, and zero-trust network layers protect sensitive payout data across every environment.",
    icon: SealCheck
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can we reconcile AZN and foreign currency settlements in a single workspace?",
    answer:
      "Yes. Multi-currency wallets let you operate AZN, USD, EUR, and TRY simultaneously, while ledger rules automate FX translation and variance explanations."
  },
  {
    question: "How do you handle AML screening across Azerbaijan’s banking network?",
    answer:
      "Real-time sanction checks, politically exposed person monitoring, and adverse media sweeps sit inside the payout workflow with dual approvals before release."
  },
  {
    question: "Do distributors get mobile-first experiences for payouts and receipts?",
    answer:
      "Distributor portals and mobile SDKs include biometric sign-in, QR withdrawal options, and offline caching so leaders stay productive even when connectivity dips."
  },
  {
    question: "What support is provided after go-live?",
    answer:
      "You gain a dedicated success pod, telemetry reviews, and direct escalation paths into our payment engineering guild to keep improvements shipping every sprint."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Azerbaijan MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Design a compliant, AI-ready payout engine for Azerbaijan. Cloud MLM Software unifies local banks, PSPs, and wallets with telemetry, automation, and regulator-grade controls.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/azerbaijan", locale)
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

type AzerbaijanPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AzerbaijanPaymentGatewaysPage({ params }: AzerbaijanPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(14,116,144,0.18),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(circle_at_30%_90%,rgba(16,185,129,0.18),transparent_50%)] dark:bg-[radial-gradient(circle_at_10%_10%,rgba(125,211,252,0.12),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(96,165,250,0.12),transparent_55%),radial-gradient(circle_at_30%_90%,rgba(45,212,191,0.12),transparent_50%)]"
          aria-hidden
        />
        <div className="container relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-teal-700 shadow-sm dark:border-teal-500/40 dark:bg-slate-900/70 dark:text-teal-200">
              <GlobeHemisphereEast className="h-4 w-4" />
              Azerbaijan payment architecture
            </span>
            <div className="space-y-6 text-slate-900 dark:text-slate-100">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build compliant MLM payment gateways for Azerbaijan&apos;s growth era
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software synthesises local banks, PSPs, and digital wallets into a transparent, AI-ready payout
                ecosystem. Deliver faster commissions, reconcile AZN and cross-border revenue by default, and show regulators
                the control posture they expect from an industry leader.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300">
                <ShieldCheck className="mb-3 h-5 w-5 text-teal-600 dark:text-teal-300" />
                AML-ready workflows with maker-checker controls across AZN and FX corridors.
              </li>
              <li className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300">
                <Layers3 className="mb-3 h-5 w-5 text-sky-600 dark:text-sky-300" />
                Embedded analytics reveal distributor liquidity, chargeback exposure, and forecasted payout demand.
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                <Link href={demoHref}>Experience the platform</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="absolute inset-x-8 top-6 -z-10 h-[260px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-emerald-500/20 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Opportunity scoreboard
            </p>
            <div className="grid gap-5">
              {KEY_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/40"
                >
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-300">
                    <metric.icon className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em]">{metric.label}</span>
                  </div>
                  <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 text-sm text-slate-600 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/40 dark:text-slate-300">
              <p className="font-semibold text-slate-800 dark:text-slate-100">Need regional parity?</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Explore the full catalogue of payment gateways supported by Cloud MLM Software.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-transparent px-3 text-slate-700 hover:border-slate-200 hover:bg-white dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>
                  View all gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Pulse checks on Azerbaijan&apos;s MLM payment landscape
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Secure your standing as a market maker by aligning payout strategy with Azerbaijan’s banking, fintech, and regulatory
              momentum.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {MARKET_PULSES.map((pulse) => (
              <article
                key={pulse.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-600 dark:text-teal-300">
                  {pulse.title}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pulse.summary}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{pulse.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="container mx-auto max-w-6xl space-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                Gateway streams engineered for Azerbaijan MLM leaders
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Move beyond spreadsheets and disparate integrations. Cloud MLM Software lays a governed payment spine that blends
                local trust with global scalability.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
            >
              <Link href={pricingHref}>
                Explore pricing models
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {GATEWAY_STREAMS.map((stream) => (
              <div
                key={stream.title}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[2.25rem] border border-slate-200/60 bg-gradient-to-br from-white via-white to-slate-100/80 p-8 shadow-sm transition dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950/40"
              >
                <div className="absolute inset-x-6 top-6 -z-10 h-36 rounded-[2rem] bg-gradient-to-br from-teal-500/15 via-transparent to-sky-500/15 blur-2xl transition group-hover:blur-[60px]" />
                <stream.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stream.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stream.description}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {stream.outcomes.map((item) => (
                    <li key={item} className="rounded-xl border border-transparent bg-slate-50/60 p-3 leading-relaxed shadow-sm dark:bg-slate-950/40">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white/80 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              A guided rollout that keeps regulators and leadership aligned
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Each stage syncs compliance, data, and distributor operations so your payment infrastructure sets the benchmark for
              Azerbaijan&apos;s MLM industry.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {ROLLOUT_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-50/60 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/50"
              >
                <div className="absolute inset-x-8 top-5 -z-10 h-40 rounded-[2rem] bg-gradient-to-br from-sky-500/15 via-transparent to-teal-500/15 blur-2xl" />
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-300">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em]">Phase {stage.step}</span>
                  <stage.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stage.detail}</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {stage.checklist.map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200/60 bg-white/70 p-3 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/40">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Confidence engineered into every transaction
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Protect your brand promise with governance, support, and data safeguards designed for high-growth networks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCES.map((assurance) => (
              <div
                key={assurance.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-left shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <assurance.icon className="h-7 w-7 text-teal-600 dark:text-teal-300" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{assurance.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{assurance.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/30">
        <div className="container mx-auto max-w-5xl space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Still mapping your Azerbaijan launch? These answers outline how Cloud MLM Software keeps your payout strategy
              future-ready.
            </p>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/50"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-black" aria-hidden />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200">Lead Azerbaijan&apos;s payout evolution</p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver distributor trust, regulator confidence, and executive clarity in every payment cycle
          </h2>
          <p className="text-base text-slate-100/80">
            We assemble payments, compliance, and analytics experts to co-own your transformation. From blueprint to expansion,
            Cloud MLM Software keeps your compensation engine future-ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
              <Link href={contactHref}>
                Talk to a strategist
                <ArrowUpRight className="h-4 w-4 text-slate-700" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white/10"
            >
              <Link href={demoHref}>See the platform in action</Link>
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
