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
  Anchor,
  ArrowUpRight,
  Building2,
  Compass,
  Globe2,
  LifeBuoy,
  Sailboat,
  ShieldCheck,
  Waves
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Handshake,
  MapPin,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  detail: string;
  icon: IconType;
};

type Catalyst = {
  name: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type Voyage = {
  stage: string;
  headline: string;
  description: string;
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

const ISLAND_INSIGHTS: Insight[] = [
  {
    title: "Tourism & retail mix",
    detail:
      "Distributors operate across luxury retail, hospitality, and wellness ecosystems that cater to high-touch experiences.",
    icon: Sailboat
  },
  {
    title: "Regulator relationship",
    detail:
      "The Central Bank of Barbados and Fair Trading Commission expect documented AML and consumer protection controls.",
    icon: ShieldCheck
  },
  {
    title: "Diaspora corridors",
    detail:
      "Barbadian entrepreneurs transact across the US, UK, and Caribbean Single Market. FX guardrails keep margins predictable.",
    icon: Globe2
  }
];

const GATEWAY_CATALYSTS: Catalyst[] = [
  {
    name: "Coastal banking core",
    description:
      "Automate settlements through local banks and credit unions while keeping governance tight.",
    outcomes: [
      "API adapters for Republic Bank, CIBC FirstCaribbean, RBC, and credit union partners",
      "Maker-checker approvals for leadership bonuses and event-driven payouts",
      "Regulator-aligned audit packs delivered on recurring schedules"
    ],
    icon: Bank
  },
  {
    name: "PSP & card orchestration",
    description:
      "Blend tourism-ready card acquiring with mobile-first payments to support residents and travellers.",
    outcomes: [
      "First Atlantic Commerce, WiPay, Stripe, and PayPal routed via policy-driven engine",
      "Dynamic currency conversion for BBD, USD, GBP, and CAD corridors",
      "Chargeback intelligence feeding finance work queues with AI prioritisation"
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Distributor hospitality",
    description:
      "Deliver white-glove payout journeys for leaders hosting events and wellness retreats.",
    outcomes: [
      "Event-based commission scheduling tied to hospitality calendars",
      "Field concierge via WhatsApp, email, and voice with SLA dashboards",
      "Experience scoring that guides coaching and recognition programmes"
    ],
    icon: LifeBuoy
  }
];

const VOYAGE_STEPS: Voyage[] = [
  {
    stage: "Harbour",
    headline: "Blueprint the Barbados operating model",
    description:
      "Co-design treasury, compliance, and field workflows to align with island-specific banking and tourism regulations."
  },
  {
    stage: "Set sail",
    headline: "Integrate banks, PSPs, and partner rails",
    description:
      "Connect providers with hardened APIs, credential vaults, and telemetry so finance gains real-time visibility."
  },
  {
    stage: "Open waters",
    headline: "Pilot with observational analytics",
    description:
      "Launch select cohorts with dashboards tracking settlement velocity, customer satisfaction, and regulator-ready logs."
  },
  {
    stage: "Expedition",
    headline: "Expand across the Caribbean diaspora",
    description:
      "Scale into new corridors with FX guardrails, scenario planning, and AI recommendations for ongoing optimisation."
  }
];

const SAFETY_NETS: Assurance[] = [
  {
    title: "Compliance confidence",
    copy:
      "Automated KYC, sanction screening, and complaint management align with Central Bank of Barbados directives.",
    icon: ShieldCheck
  },
  {
    title: "Treasury foresight",
    copy:
      "Forecast cash flow across tourism seasons, event spikes, and diaspora remittances with AI-powered projections.",
    icon: Compass
  },
  {
    title: "Leadership alignment",
    copy:
      "Executive-ready narratives translate data into decisions for your CEO, CFO, and field captains weekly.",
    icon: Building2
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Which payment gateways do you support for Barbados?",
    answer:
      "We integrate Republic Bank, CIBC FirstCaribbean, RBC, First Atlantic Commerce, WiPay, Stripe, PayPal, and additional PSPs through a single orchestration layer with risk-based routing."
  },
  {
    question: "Can we manage tourism-driven payout spikes?",
    answer:
      "Yes. Seasonal forecasting, liquidity buffers, and event-triggered payout plans keep distributor experiences consistent when visitor traffic peaks."
  },
  {
    question: "How are compliance requirements handled?",
    answer:
      "CBB AML guidelines, consumer protection expectations, and data residency considerations are encoded into our workflows, complete with audit trails and regulator-ready exports."
  },
  {
    question: "Do you support mentorship for field leaders?",
    answer:
      "Dedicated success pods host coaching clinics, share best practices, and provide bilingual enablement resources for Barbados and the wider Caribbean."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Barbados MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Design Barbados-ready MLM payment gateways with governance, hospitality-grade experiences, and diaspora expansion. Cloud MLM Software unifies banks, PSPs, and analytics for sustained growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/barbados", locale)
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

type BarbadosPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function BarbadosPaymentGatewaysPage({ params }: BarbadosPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(45,212,191,0.2),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(37,99,235,0.25),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(45,212,191,0.18),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(37,99,235,0.2),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 shadow-sm dark:border-sky-500/40 dark:bg-slate-900/60 dark:text-sky-200">
              <GlobeHemisphereWest className="h-4 w-4" aria-hidden />
              Barbados payment navigation
            </span>
            <div className="space-y-6 text-slate-900 dark:text-slate-100">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Chart a Barbados payout experience that inspires distributors and regulators alike
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software brings banks, PSPs, and concierge support together so your network thrives across tourism peaks,
                diaspora corridors, and wellness-driven partnerships.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {ISLAND_INSIGHTS.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  <insight.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h2 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h2>
                  <p className="mt-2 leading-relaxed">{insight.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-sky-600 text-white hover:bg-sky-500">
                <Link href={contactHref}>
                  Launch your programme
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200 text-sky-700 hover:bg-sky-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={demoHref}>Request a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.75rem] border border-sky-200/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-500/20 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Harbour dashboard
            </p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Waves className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Season-aware payouts</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Forecast payout surges tied to cruise seasons, festivals, and wellness retreats.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Handshake className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Concierge alignment</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Real-time SLA dashboards keep field requests, finance, and compliance in lockstep.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Anchor className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Regulator-ready</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Immutable audit logs, SAR drafts, and compliance attestations available on demand.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 text-sm text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-200">
              <p className="font-semibold">Need global coverage?</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Map your expansion with the full list of countries supported by Cloud MLM Software.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-transparent px-3 text-sky-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800/60"
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
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                Gateway catalysts designed for Barbados ambition
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Blend governance, hospitality, and growth across your distributor ecosystem with these proven plays.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
            >
              <Link href={pricingHref}>
                Explore pricing
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {GATEWAY_CATALYSTS.map((catalyst) => (
              <article
                key={catalyst.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50 p-8 shadow-sm dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950/40"
              >
                <catalyst.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{catalyst.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{catalyst.description}</p>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {catalyst.outcomes.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-transparent bg-slate-50/70 p-3 leading-relaxed shadow-sm dark:bg-slate-950/40"
                    >
                      {item}
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
              Voyage map for your Barbados launch
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Navigate each milestone with clarity, confidence, and telemetry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {VOYAGE_STEPS.map((voyage) => (
              <div
                key={voyage.stage}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-600 dark:text-sky-300">
                  {voyage.stage}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{voyage.headline}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{voyage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Safety nets for your leadership team
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Keep governance, treasury, and field leaders aligned with the right guard rails.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SAFETY_NETS.map((assurance) => (
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
              Guidance for finance, compliance, and distributor leaders planning Barbados expansion.
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-700 via-sky-600 to-emerald-700 dark:from-sky-800 dark:via-sky-700 dark:to-emerald-800" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Barbados growth pledge</p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver seamless payouts from Bridgetown to the global diaspora
          </h2>
          <p className="text-base text-white/80">
            Cloud MLM Software pairs governance, automation, and human expertise so your Barbados network earns trust, scales with
            confidence, and sets new benchmarks in the Caribbean.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Schedule a strategy session
                <ArrowUpRight className="h-4 w-4 text-sky-500" aria-hidden />
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
