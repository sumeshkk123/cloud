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
  ChartLineUp,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  Siren,
  Stack,
  UsersThree,
  WaveSawtooth
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  label: string;
  value: string;
  description: string;
};

type GatewayRoute = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ProgrammePhase = {
  stage: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModulePanel = {
  title: string;
  narrative: string;
  icon: IconType;
};

const HERO_FACTS: HeroFact[] = [
  {
    label: "WordPress headline",
    value: "Ways to accept payments",
    description: "Preserved for People&apos;s Democratic Republic of Nigeria – NG."
  },
  {
    label: "Gateway focus",
    value: "8 partners",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout."
  },
  {
    label: "Continental reach",
    value: "6 regions",
    description: "Africa · Asia · Europe · North America · Oceania · South America."
  }
];

const GATEWAY_ROUTES: GatewayRoute[] = [
  {
    name: "PayPal & Amazon Pay digital artery",
    summary: "Serve Lagos, Abuja, Port Harcourt, and diaspora channels with instant payouts.",
    bullets: [
      "Multi currency analytics align NGN, USD, GBP, and wallets with treasury-grade clarity.",
      "Emails module publishes settlement, tax, and compliance narratives automatically."
    ],
    icon: Stack
  },
  {
    name: "PayU & Stripe innovation circuit",
    summary: "Subscription, ecommerce, and AI storefronts spanning Africa, Europe, and North America.",
    bullets: [
      "Ticket system orchestrates PSP escalations, regulator conversations, and partner enablement.",
      "Auto responder delivers onboarding, campaigns, and retention flows in multiple languages."
    ],
    icon: ChartLineUp
  },
  {
    name: "Authorize.Net & Braintree trust hub",
    summary: "North American acquiring aligned with Nigerian data, AML, and tax expectations.",
    bullets: [
      "KYC documentation vault preserves identity artefacts, sanction checks, and renewal cadences.",
      "Backup manager safeguards payout logic, AI prompts, and continuity plans."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion grids",
    summary: "Enterprise routing for telecom, fintech, wellness, and education programmes.",
    bullets: [
      "E-wallet module streams commissions with maker-checker governance and audit trails.",
      "E-voucher engine powers loyalty experiences, events, and incentive roadshows."
    ],
    icon: PlugsConnected
  }
];

const PROGRAMME_PHASES: ProgrammePhase[] = [
  {
    stage: "Phase 01",
    title: "Decode the legacy outline",
    detail: "Translate the WordPress headline, gateway roster, and navigation cues into a modern design brief.",
    icon: WaveSawtooth
  },
  {
    stage: "Phase 02",
    title: "Engineer compliance fabric",
    detail: "Blend multi currency, KYC, and automation pillars for Nigerian regulators and global partners.",
    icon: ShieldCheck
  },
  {
    stage: "Phase 03",
    title: "Activate continental collaboration",
    detail: "Connect Africa with Asia, Europe, North America, Oceania, and South America via shared telemetry.",
    icon: UsersThree
  },
  {
    stage: "Phase 04",
    title: "Optimise with AI telemetry",
    detail: "Forecast conversions, risk, and campaign ROI to keep Nigerian leadership ahead.",
    icon: Lightning
  }
];

const MODULE_PANELS: ModulePanel[] = [
  {
    title: "Multi currency module",
    narrative: "Balances NGN, USD, GBP, and digital assets with real-time variance dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    narrative: "Routes PSP, regulator, and distributor cases with SLA visualisations and ownership trails.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    narrative: "Delivers multilingual coaching, compliance alerts, and campaign prompts instantly.",
    icon: Lightning
  },
  {
    title: "E-voucher",
    narrative: "Issues loyalty rewards, event passes, and incentive tokens with redemption telemetry.",
    icon: PlugsConnected
  },
  {
    title: "E-wallet",
    narrative: "Streams commissions and reimbursements with maker-checker protection.",
    icon: ShieldCheck
  },
  {
    title: "Backup manager",
    narrative: "Protects payout logic, AI prompts, and regulatory artefacts across infrastructure zones.",
    icon: Stack
  },
  {
    title: "Emails",
    narrative: "Centralises transactional, regulatory, and campaign communications across continents.",
    icon: UsersThree
  },
  {
    title: "KYC documentation",
    narrative: "Maintains identity, sanction, and renewal histories for compliance stakeholders.",
    icon: ChartLineUp
  },
  {
    title: "Multi-lingual system",
    narrative: "Extends English-first journeys into Nigerian Pidgin, Hausa, Yoruba, and Igbo experiences.",
    icon: Siren
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Nigeria MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Nigeria – NG, orchestrating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI-driven governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/nigeria", locale)
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

type NigeriaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NigeriaPaymentGatewaysPage({ params }: NigeriaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.35rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-lime-50 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(22,163,74,0.25),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(132,204,22,0.22),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(22,163,74,0.34),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(132,204,22,0.32),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:border-emerald-500/60 dark:bg-slate-950/70 dark:text-emerald-100">
                Ways to accept payments · Nigeria (NG)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Nigeria&apos;s MLM payment gateways reimagined for continental leadership
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software upgrades the WordPress outline into an AI-driven command centre. Finance, compliance,
                  and field leaders orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and
                  2Checkout with telemetry covering every referenced continent.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  <Link href={contactHref}>
                    Plan the Nigeria rollout
                    <Lightning className="h-4 w-4" aria-hidden />
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
              {HERO_FACTS.map((fact) => (
                <div key={fact.label} className="rounded-[1.75rem] border border-emerald-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                    {fact.label}
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway routes translated from the WordPress roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a Nigerian-led programme with governance, telemetry, and growth enablement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_ROUTES.map((route) => {
            const Icon = route.icon;
            return (
              <article
                key={route.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-emerald-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{route.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{route.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {route.bullets.map((bullet) => (
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
        <div className="grid gap-10 rounded-[3rem] border border-emerald-200/70 bg-gradient-to-br from-white via-emerald-50 to-lime-50 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:border-emerald-500/40 dark:bg-slate-900 dark:text-emerald-200">
              Continental oversight
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Six-continent command centre powered from Nigeria
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The WordPress navigation referenced Africa, Asia, Europe, North America, Oceania, and South America. We
              transform those cues into a live control tower with AI copilots, regulator alerts, and collaboration boards.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-emerald-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator readiness</p>
                <p>Document AML, tax, and data governance obligations with exportable evidence.</p>
              </div>
              <div className="rounded-3xl border border-emerald-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI-driven collaboration</p>
                <p>Distributors, finance, and partners iterate programmes with predictive analytics.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {PROGRAMME_PHASES.map((phase) => {
                const Icon = phase.icon;
                return (
                  <article
                    key={phase.stage}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-emerald-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                          {phase.stage}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{phase.detail}</p>
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
            Module panels energising Nigerian operations
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            combine into an AI-ready network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_PANELS.map((module) => {
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
                <p className="text-sm text-slate-600 dark:text-slate-300">{module.narrative}</p>
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
              Ready to modernise Nigeria&apos;s payment gateways?
            </h2>
            <p className="text-sm text-emerald-100/80">
              We help Nigerian MLM leaders convert WordPress-era listings into telemetry-rich, AI-powered operations.
              Connect with our product, compliance, and engineering strategists to validate your roadmap.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-emerald-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <Lightning className="h-4 w-4" aria-hidden />
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
                  <Lightning className="h-4 w-4" aria-hidden />
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
                  <p className="text-emerald-100/80">Continents referenced in the source navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-emerald-100/80">Gateway partners orchestrated for Nigeria&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-emerald-100/80">
              AI copilots observe conversions, risk posture, and collaboration cues from Lagos to global partners.
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
