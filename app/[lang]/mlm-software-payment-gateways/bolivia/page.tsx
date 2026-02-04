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
  Gauge,
  Globe,
  Map,
  ShieldCheck,
  Sparkle,
  Tractor
} from "lucide-react";
import {
  Bank,
  Circuitry,
  CurrencyCircleDollar,
  Handshake,
  SealCheck
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

type Stage = {
  phase: string;
  label: string;
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

const BOLIVIA_INSIGHTS: Insight[] = [
  {
    title: "Banco Central compliance",
    description:
      "Financial regulators require auditable AML controls, data residency, and consumer protection aligned with Bolivian law.",
    icon: ShieldCheck
  },
  {
    title: "Altitude-spanning networks",
    description:
      "Distributors operate from La Paz to Santa Cruz, demanding resilient mobile-first payouts for diverse connectivity conditions.",
    icon: Gauge
  },
  {
    title: "Agriculture & energy corridors",
    description:
      "MLM ecosystems serve agritech, lithium, and wellness clusters requiring multilingual, cross-border experiences.",
    icon: Tractor
  }
];

const PAYMENT_PILLARS: Pillar[] = [
  {
    name: "Bank-led settlement core",
    summary: "Automate BOB payouts with regulator-ready governance and reconciliation.",
    bullets: [
      "Integrations for Banco Unión, BISA, Mercantil Santa Cruz, BancoSol, and Banco Fassil successors",
      "Dual approvals, role segregation, and maker-checker controls for sensitive payouts",
      "Banco Central reporting packs generated automatically after each cycle"
    ],
    icon: Bank
  },
  {
    name: "PSP & wallet mesh",
    summary: "Bring local innovators and global gateways into one orchestrated policy engine.",
    bullets: [
      "PagosNet, QR Simple, Stripe, PayPal, and PayU connectors with risk-based routing",
      "Dynamic currency conversion for BOB, USD, BRL, ARS, and CLP corridors",
      "Chargeback automation linked to AI anomaly detection and finance workflows"
    ],
    icon: Circuitry
  },
  {
    name: "Field enablement studio",
    summary: "Empower leaders with bilingual insights, automation, and concierge support.",
    bullets: [
      "Portals and notifications in Spanish, Quechua, and English with governance workflows",
      "AI narratives translating performance, compliance, and wellbeing metrics",
      "Concierge escalations integrated with WhatsApp, Zendesk, or Freshdesk"
    ],
    icon: Handshake
  }
];

const IMPLEMENTATION_STAGES: Stage[] = [
  {
    phase: "01",
    label: "Discovery & compliance blueprint",
    detail:
      "Map treasury, AML, and distributor journeys with stakeholders across finance, legal, and sales leadership."
  },
  {
    phase: "02",
    label: "Integration runway",
    detail:
      "Connect banks, PSPs, and mobile wallets with encrypted vaults, IAM, and telemetry instrumentation."
  },
  {
    phase: "03",
    label: "Guided pilot",
    detail:
      "Launch pilot cohorts with dashboards tracking payout speed, reconciliation accuracy, and regulator readiness."
  },
  {
    phase: "04",
    label: "Optimise & expand",
    detail:
      "Scale into neighbouring markets with automation sprints, FX modelling, and executive insight loops."
  }
];

const ASSURANCE_LAYERS: Assurance[] = [
  {
    title: "Regulator confidence",
    copy:
      "AML, sanction screening, and audit trails align with Bolivian regulations, ensuring audit readiness at any time.",
    icon: SealCheck
  },
  {
    title: "Treasury clarity",
    copy:
      "Executive dashboards reveal liquidity, FX exposure, and forecasted demand so CFOs stay ahead of the curve.",
    icon: BarChart3
  },
  {
    title: "Distributor delight",
    copy:
      "Concierge service models, SLA dashboards, and AI guidance keep field leaders confident during growth surges.",
    icon: Sparkle
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Which financial partners can you integrate with in Bolivia?",
    answer:
      "Cloud MLM Software connects Banco Unión, BISA, Mercantil Santa Cruz, BancoSol, Banco Fortaleza, PagosNet, QR Simple, Stripe, PayPal, PayU, and additional PSPs within a unified orchestration layer."
  },
  {
    question: "Do you support bilingual or multilingual experiences?",
    answer:
      "Yes. Distributor journeys, knowledge content, and notifications are available in Spanish, Quechua, and English with governance workflows for timely updates."
  },
  {
    question: "How are Banco Central compliance requirements addressed?",
    answer:
      "AML, sanction screening, suspicious activity workflows, and regulator-ready export packs are automated to align with Banco Central de Bolivia directives."
  },
  {
    question: "Can executives analyse performance across multiple regions?",
    answer:
      "Executives receive AI narratives, KPI scorecards, and scenario modelling for Bolivia and expansion markets across South America."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Bolivia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy compliant MLM payment gateways throughout Bolivia. Cloud MLM Software unifies banks, mobile wallets, and analytics with regulator-grade governance and AI-driven insights.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/bolivia", locale)
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

type BoliviaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function BoliviaPaymentGatewaysPage({ params }: BoliviaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-sky-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(34,197,94,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.18),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(34,197,94,0.18),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 shadow-sm dark:border-amber-400/40 dark:bg-slate-900/60 dark:text-amber-200">
              <Map className="h-4 w-4" aria-hidden />
              Bolivia payment intelligence
            </span>
            <div className="space-y-6 text-slate-900 dark:text-slate-100">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate Bolivian payment gateways with compliance and altitude-ready experiences
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software unites Bolivian banks, mobile wallets, and PSPs, embedding regulator-grade governance and AI-ready
                insights for sustainable growth.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {BOLIVIA_INSIGHTS.map((insight) => (
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
                  Plan your rollout
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
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-amber-500/20 via-transparent to-sky-500/20 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Executive snapshots
            </p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Building2 className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Enterprise ready</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Harmonise bank, PSP, and data governance policies across corporate and regional requirements.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Globe className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Regional visibility</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Monitor performance across Bolivia, Brazil, Chile, and Peru with AI-generated narratives.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <BarChart3 className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Treasury foresight</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  AI variance explanations and liquidity forecasting keep CFOs ahead of market shifts.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-5 text-sm text-amber-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-100">
              <p className="font-semibold">Need wider coverage?</p>
              <p className="mt-1 text-xs">
                Explore the Cloud MLM Software payment gateway catalogue to map expansion beyond Bolivia.
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
              Payment pillars crafted for Bolivia&apos;s growth agenda
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Align governance, automation, and field enablement with plays tailored to the Bolivian market.
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
              Implementation cadence with full transparency
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Ensure every stakeholder remains aligned across discovery, pilot, and expansion.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {IMPLEMENTATION_STAGES.map((stage) => (
              <div
                key={stage.phase}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-300">
                  Phase {stage.phase}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.label}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stage.detail}</p>
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
              Governance, analytics, and customer delight are embedded in every deployment.
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
              Answers tailored to Bolivian finance, compliance, and field leaders.
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-700 via-amber-600 to-sky-700 dark:from-amber-800 dark:via-amber-700 dark:to-sky-800" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Bolivia growth pledge
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver compliant, insight-rich payouts across Bolivia and South America
          </h2>
          <p className="text-base text-white/80">
            Cloud MLM Software blends governance, automation, and human expertise so your Bolivian network sets a new standard for
            strategic growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-amber-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Speak with a strategist
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
