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
  Map,
  ShieldCheck,
  Sparkles,
  Waves,
  Waypoints
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
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

type Blueprint = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Journey = {
  stage: string;
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

const BELIZE_INSIGHTS: Insight[] = [
  {
    title: "Blue economy commerce",
    description:
      "Coastal tourism, eco-resorts, and wellness entrepreneurs demand flexible payouts across Belize, Mexico, and Central America.",
    icon: Waves
  },
  {
    title: "Regulator relationships",
    description:
      "The Central Bank of Belize and the Financial Intelligence Unit expect transparent AML controls with auditable records.",
    icon: ShieldCheck
  },
  {
    title: "Cross-border agility",
    description:
      "Distributors transact in BZD, USD, and MXN while working with diaspora leaders across the US and Caribbean.",
    icon: Globe2
  }
];

const GATEWAY_BLUEPRINTS: Blueprint[] = [
  {
    name: "Banking & credit union spine",
    focus: "Governed BZD payouts through Belizean institutions.",
    bullets: [
      "Integrations for Belize Bank, Atlantic Bank, Heritage Bank, and credit unions",
      "Dual approvals for leadership incentives and high-value withdrawals",
      "Regulator-ready export packs aligned to Central Bank of Belize formats"
    ],
    icon: Bank
  },
  {
    name: "PSP and card mesh",
    focus: "Blend local acquiring with global PSPs and digital wallets.",
    bullets: [
      "WiPay, Fygaro, First Atlantic Commerce, Stripe, and PayPal routing with policy controls",
      "Dynamic FX buffers for BZD, USD, MXN, and CAD corridors",
      "Chargeback automation using AI anomaly detection and finance workflows"
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Field concierge experience",
    focus: "Deliver premium support to eco-tourism and wellness leaders.",
    bullets: [
      "Mobile-first portals with English and Spanish localisation",
      "Journey analytics highlighting resort activations, retreats, and seasonal spikes",
      "Concierge escalations across WhatsApp, email, and phone with SLA dashboards"
    ],
    icon: Handshake
  }
];

const IMPLEMENTATION_JOURNEY: Journey[] = [
  {
    stage: "Discover",
    headline: "Blueprint compliance, treasury, and field ambitions",
    detail:
      "Co-create a Belize operating model with finance, compliance, and distributor councils aligned to local policy."
  },
  {
    stage: "Connect",
    headline: "Integrate banks, PSPs, and telemetry safeguards",
    detail:
      "Stand up secure connectors, credential vaults, and data visibility to support cross-border settlements."
  },
  {
    stage: "Pilot",
    headline: "Launch beachhead cohorts with real-time analytics",
    detail:
      "Monitor payout speed, satisfaction, and compliance controls with dashboards tuned for leadership teams."
  },
  {
    stage: "Expand",
    headline: "Scale across the Caribbean and North America",
    detail:
      "Unlock automation sprints, AI forecasting, and strategic reviews to support sustained growth."
  }
];

const ASSURANCE_LAYERS: Assurance[] = [
  {
    title: "Regulatory alignment",
    copy:
      "AML screening, SAR drafting, and audit logs meet Central Bank of Belize and FIU expectations with minimal manual effort.",
    icon: ShieldCheck
  },
  {
    title: "Treasury clarity",
    copy:
      "Liquidity dashboards surface cash positions, FX exposure, and upcoming obligations across banks and PSPs.",
    icon: BarChart3
  },
  {
    title: "Leadership storytelling",
    copy:
      "AI narratives summarise distributor momentum, tourism seasonality, and risk indicators for executive briefings.",
    icon: Sparkles
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Which financial partners can you integrate in Belize?",
    answer:
      "Cloud MLM Software supports Belize Bank, Atlantic Bank, Heritage Bank, credit unions, WiPay, Fygaro, First Atlantic Commerce, Stripe, PayPal, and additional PSPs through a unified orchestration layer."
  },
  {
    question: "Do you enable bilingual experiences?",
    answer:
      "Yes. Distributor journeys, notifications, and knowledge assets are available in English and Spanish with governance workflows for translation updates."
  },
  {
    question: "How are compliance requirements handled?",
    answer:
      "Sanction screening, suspicious activity workflows, KYC tiers, and regulator-ready audit trails are automated inside the platform."
  },
  {
    question: "Can we manage seasonal payout spikes?",
    answer:
      "Forecasting models consider tourism seasonality, retreat schedules, and cross-border promotions to recommend liquidity buffers and automation tweaks."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Belize MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Scale Belize MLM payment gateways with tourism-grade experiences and regulator-ready controls. Cloud MLM Software unifies banks, PSPs, and analytics for cross-border growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/belize", locale)
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

type BelizePaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function BelizePaymentGatewaysPage({
  params
}: BelizePaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-sky-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(34,197,94,0.25),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(34,197,94,0.2),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 shadow-sm dark:border-emerald-400/40 dark:bg-slate-900/60 dark:text-emerald-200">
              <GlobeHemisphereWest className="h-4 w-4" aria-hidden />
              Belize payment intelligence
            </span>
            <div className="space-y-6 text-slate-900 dark:text-slate-100">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate Belize payment gateways with tourism-grade experiences and governance
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software brings banks, PSPs, and concierge support together so your distributors can deliver luxury-level
                service from Ambergris Caye to the global diaspora.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {BELIZE_INSIGHTS.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-3xl border border-emerald-200/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  <insight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h2 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h2>
                  <p className="mt-2 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
                <Link href={contactHref}>
                  Chart your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={demoHref}>Experience a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.75rem] border border-emerald-200/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-sky-500/20 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Executive snapshots
            </p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Map className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Territory clarity</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Visualise distributor health across Belize, Mexico, and Caribbean corridors with drill-down views.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Compass className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Automation compass</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Policy-driven routing, FX buffers, and retry logic keep payouts resilient during travel spikes.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Waypoints className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Concierge orchestration</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  SLA dashboards coordinate finance, compliance, and field success pods for every request.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-5 text-sm text-emerald-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-100">
              <p className="font-semibold">Need more regions?</p>
              <p className="mt-1 text-xs">
                Explore our full payment gateway catalogue to map expansion beyond Belize.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-transparent px-3 text-emerald-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800/60"
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
              Blueprint Belize-ready payment experiences
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Combine compliance, concierge service, and cross-border growth with the following plays.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {GATEWAY_BLUEPRINTS.map((blueprint) => (
              <article
                key={blueprint.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <blueprint.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-300" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{blueprint.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{blueprint.focus}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {blueprint.bullets.map((bullet) => (
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
              Implementation journey with total visibility
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Keep executives, regulators, and field leaders aligned across every milestone.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {IMPLEMENTATION_JOURNEY.map((milestone) => (
              <div
                key={milestone.stage}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-300">
                  {milestone.stage}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{milestone.headline}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Assurance for Belizean and global leadership
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Governance, analytics, and executive storytelling come standard with every deployment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE_LAYERS.map((assurance) => (
              <div
                key={assurance.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <assurance.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-300" aria-hidden />
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
              Answers tailored to finance, compliance, and field leaders building Belize operations.
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-700 via-emerald-600 to-sky-700 dark:from-emerald-800 dark:via-emerald-700 dark:to-sky-800" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Belize leadership pledge
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver concierge payouts and regulator confidence across Belize and beyond
          </h2>
          <p className="text-base text-white/80">
            Cloud MLM Software unites governance, automation, and human expertise so your Belize network sets the standard for
            tourism-grade service and compliant growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Speak with a strategist
                <ArrowUpRight className="h-4 w-4 text-emerald-500" aria-hidden />
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
