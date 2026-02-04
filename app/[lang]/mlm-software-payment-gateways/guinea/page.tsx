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
  Compass,
  Globe2,
  Layers,
  Map,
  Sparkles,
  Target
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  Handshake,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guinea MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Guinea (GN). Cloud MLM Software aligns regional banks, PSPs, and distributor wellbeing programmes to accelerate growth across Conakry and diaspora corridors.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/guinea"
  },
  openGraph: {
    title: "Guinea MLM Payment Gateways",
    description:
      "Transform Guinea’s payment experience with unified banking, PSP, and wellbeing orchestration from Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/guinea"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  copy: string;
  icon: IconType;
};

type Capability = {
  name: string;
  description: string;
  connectors: string[];
  icon: IconType;
};

type Phase = {
  title: string;
  summary: string;
  artefacts: string[];
  icon: IconType;
};

type Validation = {
  heading: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const METRICS: Metric[] = [
  {
    label: "Settlement window",
    value: "T+1.4 days",
    detail:
      "Automated reconciliation for Ecobank, Société Générale Guinée, Banque Islamique de Guinée, and UBA with FX dashboards.",
    icon: BarChart3
  },
  {
    label: "Gateway coverage",
    value: "10 providers",
    detail:
      "Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, Interswitch, First Atlantic Commerce, MTN MoMo, and Orange Money aligned under one policy.",
    icon: Layers
  },
  {
    label: "Compliance artefacts",
    value: "16 playbooks",
    detail:
      "BCEAO AML/CFT, WAEMU directives, taxation, data governance, and OFAC documentation ready for regulator and executive review.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Mining & energy communities",
    copy:
      "Bauxite, gold, and energy networks need FX clarity, payroll-style payouts, and wellbeing analytics for crews in remote regions.",
    icon: Map
  },
  {
    title: "Agriculture & trade",
    copy:
      "Agrifood collectives and exporters require subscription billing, inventory alignment, and diaspora remittance orchestration.",
    icon: Handshake
  },
  {
    title: "Healthcare & education",
    copy:
      "Clinics, training institutes, and digital education hubs demand installment billing, financial assistance tracking, and multilingual support.",
    icon: Globe2
  }
];

const CAPABILITIES: Capability[] = [
  {
    name: "Banking & treasury",
    description:
      "Integrate Ecobank, Société Générale Guinée, Banque Islamique de Guinée, and UBA for liquidity, FX, and tax transparency.",
    connectors: ["Ecobank", "Société Générale Guinée", "Banque Islamique de Guinée", "UBA"],
    icon: Bank
  },
  {
    name: "PSP & card orchestration",
    description:
      "Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, Interswitch, and First Atlantic Commerce operate with shared credential vaulting, observability, and dispute management.",
    connectors: ["Stripe", "PayPal", "Flutterwave", "Interswitch", "First Atlantic Commerce"],
    icon: PlugsConnected
  },
  {
    name: "Wallet & agent networks",
    description:
      "MTN MoMo, Orange Money, Ecobank Collect, and cash agent relationships integrate with unified policy controls and wellbeing dashboards.",
    connectors: ["MTN MoMo", "Orange Money", "Ecobank Collect", "PayU"],
    icon: CurrencyCircleDollar
  }
];

const PHASES: Phase[] = [
  {
    title: "Phase 01 — Blueprint & governance alignment",
    summary:
      "Translate BCEAO, WAEMU, and local tax obligations into an operating charter that finance, legal, and distributor councils can champion.",
    artefacts: [
      "Compliance blueprint covering AML/CFT, taxation, data residency, and sanction screening.",
      "Stakeholder RACI spanning Conakry HQ, regional offices, and diaspora ambassadors.",
      "Solution architecture with data flow, observability, and escalation design."
    ],
    icon: Compass
  },
  {
    title: "Phase 02 — Connector implementation & telemetry",
    summary:
      "Integrate bank, PSP, wallet, and agent channels with credential vaults, redundancy, and dispute automation tuned for mixed digital and cash operations.",
    artefacts: [
      "Connector runbooks with heartbeat thresholds and incident communications.",
      "Chargeback and refund centre for card, bank transfer, and mobile money rails.",
      "Performance tests for mining payroll cycles, harvest seasons, and diaspora campaigns."
    ],
    icon: Waveform
  },
  {
    title: "Phase 03 — Pilot, optimise, and scale",
    summary:
      "Pilot across mining, agriculture, and service cohorts to validate transparency, wellbeing analytics, and experience design before scaling.",
    artefacts: [
      "Executive dashboards covering settlement tempo, FX exposure, and wellbeing signals.",
      "Distributor enablement kit in French and English with recognition cadences.",
      "Optimisation backlog prioritised by revenue, risk, and community impact."
    ],
    icon: Sparkles
  }
];

const VALIDATIONS: Validation[] = [
  {
    heading: "Treasury foresight",
    copy:
      "Liquidity, FX, and receivables dashboards give finance leaders a real-time lens across Conakry, Boké, and diaspora corridors.",
    icon: CurrencyCircleDollar
  },
  {
    heading: "Distributor confidence loops",
    copy:
      "Self-service statements, wellbeing alerts, and recognition cadences keep leaders heard long before issues escalate.",
    icon: UsersThree
  },
  {
    heading: "Board-ready storytelling",
    copy:
      "Dashboards translate compliance, experience, and growth metrics into decisions for boards, investors, and regulators.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Guinea?",
    answer:
      "We orchestrate Ecobank, Société Générale Guinée, Banque Islamique de Guinée, UBA, Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, Interswitch, First Atlantic Commerce, MTN MoMo, Orange Money, and Ecobank Collect with one unified policy engine."
  },
  {
    question: "How do you keep us compliant with BCEAO and WAEMU regulation?",
    answer:
      "We deliver artefacts covering AML/CFT, taxation, data governance, and sanction screening. Compliance dashboards simplify reporting to BCEAO, WAEMU, and national regulators."
  },
  {
    question: "Can we support mining and agriculture communities effectively?",
    answer:
      "Yes. Payroll-style payouts, wellbeing analytics, and offline-first workflows keep remote leaders connected while PSP, bank, and wallet processes remain governed."
  }
];

type PageProps = {
  params: { lang: string };
};

export default async function GuineaPaymentGatewaysPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-10 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Guinea • Payment gateways
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Guinea (GN)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We adapt those proven frameworks to Guinea so settlements stay disciplined for mining, agriculture, healthcare, and diaspora communities alike.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Guinea includes PayPal, Amazon Pay, PayU, 2Checkout, Stripe, First Atlantic Commerce, Flutterwave, Interswitch, MTN MoMo, Orange Money, and domestic banking partners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Link href={contactHref}>
                    Design your Guinea rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/60"
                >
                  <Link href={pricingHref}>
                    Review pricing
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="gap-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60"
                >
                  <Link href={demoHref}>
                    Explore the demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/80"
                >
                  <metric.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/70 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/50 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Market focus
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Guinea’s payment priorities for growth-minded MLM leaders
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                We co-create customer journeys with finance, compliance, product, and distributor leadership to reflect the realities of mining sites, farming cooperatives, and service hubs.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {OPPORTUNITIES.map((opportunity) => (
                <article
                  key={opportunity.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <opportunity.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{opportunity.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{opportunity.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Payment capabilities unified for Guinea
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Banks, PSPs, and wallets operate from one command centre so Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, Interswitch, First Atlantic Commerce, MTN MoMo, and Orange Money deliver consistent experiences.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <capability.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{capability.name}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{capability.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capability.connectors.map((connector) => (
                  <span
                    key={connector}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {connector}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-white/95 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-12">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Delivery approach
            </span>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Implementation roadmap for Guinea’s executive councils
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {PHASES.map((phase) => (
                <article
                  key={phase.title}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {phase.title}
                    </span>
                    <phase.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{phase.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {phase.artefacts.map((artefact) => (
                      <li key={artefact} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80 dark:bg-sky-400" aria-hidden />
                        <span>{artefact}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Confidence for Guinea’s finance & distributor leaders
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, customer success, and wellbeing teams share the same telemetry and action plans.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALIDATIONS.map((validation) => (
            <article
              key={validation.heading}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <validation.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{validation.heading}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{validation.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                FAQs
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Guidance for Guinea-based finance, compliance, and distributor councils planning their next chapter.
              </p>
            </div>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-white/95 p-6 dark:border-slate-700 dark:bg-slate-900/70"
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver Guinea-ready MLM payment excellence
            </h2>
            <p className="text-base text-white/90">
              Cloud MLM Software unites banks, PSPs, wallets, and distributor wellbeing into one disciplined platform so every stakeholder—local and global—remains confident.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10"
              >
                <Link href={demoHref}>Preview the platform</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Link href={pricingHref}>Download pricing blueprint</Link>
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
