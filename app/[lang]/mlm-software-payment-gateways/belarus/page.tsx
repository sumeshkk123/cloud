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
  Building,
  CircuitBoard,
  Globe2,
  Layers,
  LineChart,
  Scale,
  ShieldCheck
} from "lucide-react";
import {
  Bank,
  Circuitry,
  Handshake,
  LockKey,
  MapTrifold
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type Step = {
  step: string;
  headline: string;
  explanation: string;
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

const MARKET_SIGNALS: Signal[] = [
  {
    label: "State-aligned compliance",
    detail:
      "Belarusian financial authorities prioritise AML transparency, sanctioned party screening, and data residency within the EAEU framework.",
    icon: ShieldCheck
  },
  {
    label: "Industrial distributor base",
    detail:
      "Manufacturing, logistics, and agritech networks dominate Belarusian MLM ecosystems. Incentives must mirror complex supply chains.",
    icon: Building
  },
  {
    label: "Cross-border commerce",
    detail:
      "Distributors transact across Belarus, Russia, Kazakhstan, and the EU. FX guardrails protect margins while complying with local controls.",
    icon: Globe2
  }
];

const PAYMENT_PILLARS: Pillar[] = [
  {
    title: "Domestic settlement core",
    description:
      "Harden your Belarusian payouts with bank-grade orchestration and regulator-friendly audit trails.",
    highlights: [
      "API adapters for Belarusbank, Priorbank, Belinvestbank, and MTBank",
      "Dual approvals for sensitive commissions and treasury-only overrides",
      "Daily reporting packs mapped to National Bank of Belarus formats"
    ],
    icon: Bank
  },
  {
    title: "Regional PSP mesh",
    description:
      "Blend Eastern European PSPs with global processors to support card, wallet, and invoice journeys.",
    highlights: [
      "Assist, bePaid, Yandex Pay, Stripe, and Adyen connectors with risk-based routing",
      "Currency conversion guardrails for BYN, RUB, EUR, and USD corridors",
      "Chargeback governance tied to AI anomaly detection and dispute tooling"
    ],
    icon: Circuitry
  },
  {
    title: "Field intelligence studio",
    description:
      "Equip leaders with insights, automation, and multilingual support to keep productivity high.",
    highlights: [
      "Role-based portals in Russian, Belarusian, and English with guided next best actions",
      "AI narratives explaining payout variance, churn risk, and incentive effectiveness",
      "Concierge escalations integrated with Jira Service Management or Zendesk"
    ],
    icon: LineChart
  }
];

const DELIVERY_STEPS: Step[] = [
  {
    step: "01",
    headline: "Policy & risk discovery",
    explanation:
      "Map treasury policies, AML obligations, and distributor journeys with compliance, finance, and operations stakeholders."
  },
  {
    step: "02",
    headline: "Integration & security runway",
    explanation:
      "Stand up bank and PSP connectors, secret vaults, and IAM guardrails aligned with Belarusian data residency expectations."
  },
  {
    step: "03",
    headline: "Controlled go-live",
    explanation:
      "Launch pilots with telemetry dashboards, sanction alerting, and reconciliation sprints to validate every control."
  },
  {
    step: "04",
    headline: "Optimise & regionalise",
    explanation:
      "Scale into new markets with automation sprints, AI forecasting, and executive review cadences that propel growth."
  }
];

const CONTROL_ASSURANCES: Assurance[] = [
  {
    title: "Governance at scale",
    copy:
      "Role-based access, immutable audit trails, and sanction refresh cycles align with Belarusian FIU requirements.",
    icon: BadgeCheck
  },
  {
    title: "Treasury insight",
    copy:
      "Liquidity dashboards, FX buffers, and AI variance explanations keep CFOs ahead of market volatility.",
    icon: BarChart3
  },
  {
    title: "Security posture",
    copy:
      "Zero-trust network patterns, encrypted credential vaults, and automated patch cadences protect sensitive payout data.",
    icon: LockKey
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Which financial institutions can you connect to in Belarus?",
    answer:
      "Cloud MLM Software integrates with Belarusbank, Priorbank, Belinvestbank, MTBank, and other authorised institutions via secure APIs or file exchanges orchestrated inside our payment hub."
  },
  {
    question: "Do you support Belarusian and Russian language experiences?",
    answer:
      "Yes. Distributor portals, notifications, and help centre assets are available in Belarusian, Russian, and English with governance workflows to keep translations aligned with policy updates."
  },
  {
    question: "How is AML compliance embedded?",
    answer:
      "Sanction screening, adverse media checks, suspicious activity queues, and SAR-ready exports are automated, with dual approvals before high-risk payouts are released."
  },
  {
    question: "Can executives view cross-market performance?",
    answer:
      "Executives access AI-generated narratives, KPI scorecards, and scenario modelling across Belarus, Russia, Kazakhstan, and EU markets to guide decisions."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Belarus MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy compliant MLM payment gateways for Belarus. Cloud MLM Software unifies banks, regional PSPs, and analytics with regulator-grade governance and AI-driven insights.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/belarus", locale)
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

type BelarusPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function BelarusPaymentGatewaysPage({ params }: BelarusPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-slate-900" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.2),transparent_55%),radial-gradient(circle_at_35%_85%,rgba(56,189,248,0.2),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 text-white lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              <MapTrifold className="h-4 w-4" aria-hidden />
              Belarus payment architecture
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build a regulator-ready payment gateway fabric for Belarus MLM leaders
              </h1>
              <p className="text-lg text-slate-100/85">
                Cloud MLM Software unifies Belarusian banks, regional PSPs, and multilingual field operations into a telemetry-rich,
                AI-assisted payout engine your executives can trust.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {MARKET_SIGNALS.map((signal) => (
                <div key={signal.label} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <signal.icon className="h-6 w-6 text-sky-300" aria-hidden />
                  <h2 className="mt-3 text-base font-semibold">{signal.label}</h2>
                  <p className="mt-2 text-sm text-slate-100/80">{signal.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-transparent text-white hover:bg-white/10"
              >
                <Link href={demoHref}>Preview a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.75rem] border border-white/20 bg-white/10 p-8 backdrop-blur">
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-transparent to-blue-500/25 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/70">Executive dashboard</p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
                <Layers className="h-6 w-6 text-sky-300" />
                <p className="mt-4 text-3xl font-semibold text-white">Unified ledger</p>
                <p className="mt-2 text-sm text-slate-100/80">
                  See reconciled payouts across banks, PSPs, and corridors with drill-down control.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
                <CircuitBoard className="h-6 w-6 text-sky-300" />
                <p className="mt-4 text-3xl font-semibold text-white">Automation fabric</p>
                <p className="mt-2 text-sm text-slate-100/80">
                  Secure connectors, token vaults, and AI signal detection keep operations resilient.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
                <Handshake className="h-6 w-6 text-sky-300" />
                <p className="mt-4 text-3xl font-semibold text-white">Field confidence</p>
                <p className="mt-2 text-sm text-slate-100/80">
                  Bilingual enablement, concierge workflows, and SLA dashboards elevate distributor trust.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-slate-100/80">
              <p className="font-semibold text-white">Need broader coverage?</p>
              <p className="mt-1 text-xs text-slate-100/70">
                Explore every supported market and payment rail maintained by Cloud MLM Software.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-white/10 bg-white/10 px-3 text-white hover:bg-white/20"
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
              Payment pillars engineered for Belarusian ambition
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Combine regulator trust, distributor delight, and executive insight with structured plays proven across Eastern
              Europe.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PAYMENT_PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <pillar.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{pillar.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {pillar.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-xl border border-transparent bg-slate-50/70 p-3 leading-relaxed shadow-sm dark:bg-slate-950/40"
                    >
                      {highlight}
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
              Delivery rhythm from policy to optimisation
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Maintain stakeholder alignment with a transparent rollout sequence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {DELIVERY_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-600 dark:text-sky-300">
                  Phase {step.step}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.headline}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{step.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Assurance layers your executives can rely on
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Governance, visibility, and security align so growth never compromises compliance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CONTROL_ASSURANCES.map((assurance) => (
              <div
                key={assurance.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <assurance.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
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
              Answers tuned to Belarusian finance, compliance, and field leadership priorities.
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 dark:from-black dark:via-slate-900 dark:to-blue-900" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.16),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Belarus growth agenda
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver auditable payouts and AI-ready insights across every Belarus market cycle
          </h2>
          <p className="text-base text-white/80">
            Bring governance, automation, and human expertise together. Cloud MLM Software keeps your compensation engine resilient,
            trusted, and ready to expand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
              <Link href={contactHref}>
                Speak with a strategist
                <ArrowUpRight className="h-4 w-4 text-slate-700" aria-hidden />
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
