import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  Beacon,
  ChartLineUp,
  CurrencyCircleDollar,
  Leaf,
  Lightning,
  MapTrifold,
  Mountains,
  PlugsConnected,
  ShieldCheck,
  UsersThree,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
};

type GatewayTrack = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Expedition = {
  stage: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModuleNode = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Headline retained",
    value: "Ways to accept payments",
    description: "We keep the promise for People&apos;s Democratic Republic of New Zealand – NZ."
  },
  {
    label: "Gateway focus",
    value: "8 processors",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout."
  },
  {
    label: "Continental reach",
    value: "6 regions",
    description: "Africa · Asia · Europe · North America · Oceania · South America."
  }
];

const GATEWAY_TRACKS: GatewayTrack[] = [
  {
    name: "PayPal & Amazon Pay expedition",
    summary: "Support Auckland, Wellington, and global diaspora distributors seamlessly.",
    bullets: [
      "Multi currency module aligns NZD, AUD, USD, and emerging wallets with treasury analytics.",
      "Emails module publishes settlement, GST, and compliance updates automatically."
    ],
    icon: Waves
  },
  {
    name: "PayU & Stripe innovation trail",
    summary: "Ecommerce, subscription clubs, and AI storefronts spanning APAC and Europe.",
    bullets: [
      "Ticket system coordinates PSP escalations, regulator dialogues, and solution squads.",
      "Auto responder nurtures onboarding and retention across English and Māori messaging."
    ],
    icon: ChartLineUp
  },
  {
    name: "Authorize.Net & Braintree trust bridge",
    summary: "North American rails harmonised with New Zealand privacy and AML expectations.",
    bullets: [
      "KYC documentation vault manages identity proofs, sanction outcomes, and renewal cadences.",
      "Backup manager safeguards payout logic, compliance records, and continuity plans."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion ridge",
    summary: "Enterprise routing for tourism, agritech, and wellness campaigns across continents.",
    bullets: [
      "E-wallet manager streams commissions with maker-checker controls and audit trails.",
      "E-voucher engine powers loyalty experiences, events, and incentive journeys."
    ],
    icon: Beacon
  }
];

const EXPEDITIONS: Expedition[] = [
  {
    stage: "Stage 01",
    title: "Interpret the WordPress terrain",
    detail: "Translate the headline, gateway list, and continental navigation into a modern blueprint.",
    icon: Mountains
  },
  {
    stage: "Stage 02",
    title: "Build governance ridgelines",
    detail: "Blend multi currency, KYC, and automation layers for NZ regulators and global partners.",
    icon: ShieldCheck
  },
  {
    stage: "Stage 03",
    title: "Unify global teams",
    detail: "Connect Oceania, Asia, Europe, Africa, and the Americas with shared telemetry and AI copilots.",
    icon: UsersThree
  },
  {
    stage: "Stage 04",
    title: "Optimise with live telemetry",
    detail: "Forecast conversions, detect anomalies, and refine programmes using predictive analytics.",
    icon: Lightning
  }
];

const MODULE_NODES: ModuleNode[] = [
  {
    title: "Multi currency module",
    description: "Balances NZD, AUD, USD, and digital tender while surfacing FX variance instantly.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes PSP, regulator, and distributor cases with SLA dashboards and audits.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    description: "Delivers bilingual coaching, compliance alerts, and event prompts automatically.",
    icon: Leaf
  },
  {
    title: "E-voucher",
    description: "Issues digital incentives, travel passes, and loyalty boosters with redemption insights.",
    icon: Beacon
  },
  {
    title: "E-wallet",
    description: "Streams commissions and reimbursements through maker-checker governance.",
    icon: ShieldCheck
  },
  {
    title: "Backup manager",
    description: "Protects payout logic, AI prompts, and compliance artefacts for continuity.",
    icon: Mountains
  },
  {
    title: "Emails",
    description: "Centralises transactional, regulatory, and campaign messaging across continents.",
    icon: UsersThree
  },
  {
    title: "KYC documentation",
    description: "Maintains identity dossiers, sanction checks, and renewal reminders.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    description: "Extends English-first experiences to Māori and Pacific languages with parity.",
    icon: PlugsConnected
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "New Zealand MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of New Zealand – NZ, orchestrating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for compliant growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/new-zealand", locale)
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

type NewZealandPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function NewZealandPaymentGatewaysPage({ params }: NewZealandPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-slate-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.28),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(6,182,212,0.24),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.36),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(6,182,212,0.36),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:border-emerald-500/60 dark:bg-slate-950/70 dark:text-emerald-100">
                Ways to accept payments · New Zealand (NZ)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  New Zealand&apos;s MLM payment gateways orchestrated for global ventures
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We elevate the WordPress outline into an AI-ready, corporate experience. Finance, compliance, and field
                  leaders manage PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout across
                  every continent noted in the source navigation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  <Link href={contactHref}>
                    Plan the NZ rollout
                    <Mountains className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-emerald-200 bg-white/80 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-transparent dark:text-emerald-100 dark:hover:bg-emerald-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.75rem] border border-emerald-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="rounded-[1.75rem] border border-emerald-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                    {metric.label}
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway tracks derived from the WordPress roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a track with telemetry, compliance, and growth enablement for New Zealand leadership.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-emerald-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{track.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {track.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-500/60 dark:bg-emerald-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 rounded-[3rem] border border-emerald-200/70 bg-gradient-to-br from-white via-emerald-50 to-slate-100 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:border-emerald-500/40 dark:bg-slate-900 dark:text-emerald-200">
              Global alignment
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Six-continent oversight from a New Zealand operations hub
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The original navigation cited Africa, Asia, Europe, North America, Oceania, and South America. We merge those
              references into a live operations room with AI copilots, regulator alerts, and collaboration workflows.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-emerald-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator clarity</p>
                <p>Export-ready evidence for AML, privacy, and tax obligations across jurisdictions.</p>
              </div>
              <div className="rounded-3xl border border-emerald-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI-enabled collaboration</p>
                <p>Distributors, finance, and partners share dashboards, prompts, and scenario testing.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {EXPEDITIONS.map((expedition) => {
                const Icon = expedition.icon;
                return (
                  <article
                    key={expedition.stage}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-emerald-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                          {expedition.stage}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{expedition.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{expedition.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Module network powering NZ expansion
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            operate as a cohesive network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_NODES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-emerald-200/70 bg-gradient-to-br from-white via-white to-emerald-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{module.title}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{module.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise New Zealand payment gateways?
            </h2>
            <p className="text-sm text-emerald-100/80">
              We partner with New Zealand MLM leaders to transform WordPress-era listings into telemetry-rich experiences.
              Align product, compliance, and engineering champions for the next frontier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-emerald-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <Mountains className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 rounded-full border-white/60 text-white hover:bg-white/10"
              >
                <Link href={pricingHref}>
                  Review licensing options
                  <Mountains className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-emerald-100/80">Continents referenced in the legacy navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-emerald-100/80">Gateway partners orchestrated for New Zealand&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-emerald-100/80">
              AI copilots observe conversions, risk posture, and growth opportunities across every NZ expansion lane.
            </p>
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
