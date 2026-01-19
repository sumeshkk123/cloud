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
  BadgeCheck,
  BarChart3,
  Factory,
  Globe2,
  Layers,
  ShieldCheck,
  SunMedium,
  Workflow
} from "lucide-react";
import {
  Bank,
  Circuitry,
  CurrencyCircleDollar,
  Handshake,
  MapTrifold
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Step = {
  phase: string;
  headline: string;
  detail: string;
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

const BENIN_INSIGHTS: Insight[] = [
  {
    title: "WAEMU regulatory alignment",
    description:
      "BCEAO directives and national regulators require AML, KYC, and digital payment oversight with auditable trails.",
    icon: ShieldCheck
  },
  {
    title: "Industrial & agro corridors",
    description:
      "MLM networks operate around Cotonou’s ports, agritech hubs, and trade corridors into Nigeria, Togo, and Burkina Faso.",
    icon: Factory
  },
  {
    title: "Mobile money ubiquity",
    description:
      "MTN MoMo, Moov Money, Wave, and bank wallets dominate everyday transactions, demanding flexible payout orchestration.",
    icon: Globe2
  }
];

const PAYMENT_PILLARS: Pillar[] = [
  {
    name: "Bank-led payout spine",
    summary: "Automate FCFA settlements with WAEMU-compliant guardrails.",
    bullets: [
      "Integrations for Bank of Africa, Ecobank, Société Générale, and Orabank",
      "Dual approvals for leadership incentives and cross-border payouts",
      "Regulator-ready exports aligned with BCEAO reporting templates"
    ],
    icon: Bank
  },
  {
    name: "Mobile money & PSP routing",
    summary: "Blend telco wallets and global gateways with AI-driven controls.",
    bullets: [
      "MTN MoMo, Moov Money, Wave, PayDunya, and Stripe connectors under one policy engine",
      "FX buffers for XOF, NGN, EUR, and USD corridors with hedging alerts",
      "Chargeback and fraud analytics streamed to finance and compliance teams"
    ],
    icon: Circuitry
  },
  {
    name: "Distributor enablement studio",
    summary: "Empower francophone and bilingual leaders with actionable insights.",
    bullets: [
      "Portals and notifications in French and English with governance workflows",
      "AI narratives that explain variance, churn risk, and incentive effectiveness",
      "Concierge escalation via WhatsApp, SMS, and call centres with SLA dashboards"
    ],
    icon: Handshake
  }
];

const DELIVERY_STEPS: Step[] = [
  {
    phase: "01",
    headline: "Policy mapping & diagnostic",
    detail:
      "Collaborate with finance, compliance, and sales leadership to document WAEMU obligations and distributor journeys."
  },
  {
    phase: "02",
    headline: "Integration & security runway",
    detail:
      "Connect banks, wallets, and PSPs with encrypted vaults, IAM controls, and telemetry instrumentation."
  },
  {
    phase: "03",
    headline: "Pilot with telemetry",
    detail:
      "Launch targeted cohorts with dashboards tracking payout speed, sanction hits, and distributor satisfaction."
  },
  {
    phase: "04",
    headline: "Optimise & regionalise",
    detail:
      "Scale into neighbouring markets with automation sprints, FX modelling, and executive business reviews."
  }
];

const ASSURANCE_LAYERS: Assurance[] = [
  {
    title: "Compliance guardrails",
    copy:
      "BCEAO-aligned AML workflows, sanction screening, and SAR-ready exports keep regulators confident.",
    icon: BadgeCheck
  },
  {
    title: "Treasury foresight",
    copy:
      "Liquidity dashboards reveal cash positions, FX exposure, and settlement cadence across banks and wallets.",
    icon: BarChart3
  },
  {
    title: "Operational resilience",
    copy:
      "Automation, retry logic, and telemetry reduce payment downtime during network fluctuations or peak cycles.",
    icon: Workflow
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Which financial partners can you connect to in Benin?",
    answer:
      "Cloud MLM Software integrates with Bank of Africa, Ecobank, Société Générale, Orabank, MTN MoMo, Moov Money, Wave, PayDunya, Stripe, and other authorised providers."
  },
  {
    question: "Do you support bilingual experiences?",
    answer:
      "Yes. Distributor journeys, alerts, and knowledge assets can be delivered in French and English, with governance workflows ensuring translations stay up to date."
  },
  {
    question: "How are WAEMU compliance requirements handled?",
    answer:
      "AML, KYC, sanction screening, and suspicious activity workflows are automated with evidence packs aligned to BCEAO directives."
  },
  {
    question: "Can executives track regional expansion?",
    answer:
      "Executives receive AI-generated narratives, KPI dashboards, and scenario planning across Benin, Nigeria, Togo, and other corridors."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Benin MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch WAEMU-compliant MLM payment gateways for Benin. Cloud MLM Software unifies banks, mobile money, and analytics with governance, automation, and AI insights.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/benin", locale)
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

type BeninPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function BeninPaymentGatewaysPage({
  params
}: BeninPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.22),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(245,158,11,0.2),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(14,165,233,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(245,158,11,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(14,165,233,0.18),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 shadow-sm dark:border-amber-400/40 dark:bg-slate-900/60 dark:text-amber-200">
              <MapTrifold className="h-4 w-4" aria-hidden />
              Benin payment intelligence
            </span>
            <div className="space-y-6 text-slate-900 dark:text-slate-100">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build WAEMU-aligned payment gateways for Benin&apos;s fast-scaling MLM networks
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software orchestrates banks, mobile money, and cross-border PSPs so your distributors stay inspired and
                regulators remain confident.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {BENIN_INSIGHTS.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-3xl border border-amber-200/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  <insight.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                  <h2 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h2>
                  <p className="mt-2 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-amber-600 text-white hover:bg-amber-500">
                <Link href={contactHref}>
                  Define your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={demoHref}>Request a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.75rem] border border-amber-200/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-amber-500/20 via-transparent to-cyan-500/20 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Executive snapshots
            </p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <SunMedium className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Seasonal foresight</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Forecast payout demand tied to harvest cycles, trade corridors, and festival activations.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Layers className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Unified ledger</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Reconcile banks, mobile money, and PSPs in one governed workspace with drill-down control.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Workflow className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Automation guardrails</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Policy-driven routing, retry logic, and compliance alerts keep operations resilient.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-5 text-sm text-amber-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-100">
              <p className="font-semibold">Need global coverage?</p>
              <p className="mt-1 text-xs">
                Explore every market supported by Cloud MLM Software to map your expansion strategy.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-transparent px-3 text-amber-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800/60"
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

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Payment pillars for Benin&apos;s growth ambitions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Fuse compliance, automation, and field enablement into a single operating rhythm.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PAYMENT_PILLARS.map((pillar) => (
              <article
                key={pillar.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <pillar.icon className="h-8 w-8 text-amber-600 dark:text-amber-300" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{pillar.summary}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {pillar.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-transparent bg-slate-50/70 p-3 leading-relaxed shadow-sm dark:bg-slate-950/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Delivery cadence from policy to optimisation
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Keep every stakeholder aligned with clear, telemetry-backed milestones.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {DELIVERY_STEPS.map((step) => (
              <div
                key={step.phase}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-300">
                  Phase {step.phase}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.headline}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Assurance layers executives rely on
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Governance, forecasting, and resilience come standard with Cloud MLM Software.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE_LAYERS.map((assurance) => (
              <div
                key={assurance.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <assurance.icon className="h-7 w-7 text-amber-600 dark:text-amber-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{assurance.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{assurance.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Insights for finance, compliance, and field leaders driving Benin expansion.
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

      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-700 via-amber-600 to-cyan-700 dark:from-amber-800 dark:via-amber-700 dark:to-cyan-800" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Benin growth pledge</p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver resilient, regulator-trusted payouts across Benin and WAEMU
          </h2>
          <p className="text-base text-white/80">
            Cloud MLM Software combines governance, automation, and human expertise so your Benin network can scale confidently
            across West Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-amber-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Talk to a strategist
                <ArrowUpRight className="h-4 w-4 text-amber-500" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white/10"
            >
              <Link href={pricingHref}>Review commercial options</Link>
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
