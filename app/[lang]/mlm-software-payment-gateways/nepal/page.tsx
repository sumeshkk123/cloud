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
  ChartPieSlice,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  Stack,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Orbit = {
  label: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModuleCard = {
  title: string;
  narrative: string;
  icon: IconType;
};

const INSIGHTS: Insight[] = [
  {
    title: "WordPress headline preserved",
    description:
      "We centre the promise “Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Nepal – NP”.",
    icon: Compass
  },
  {
    title: "Gateway roster orchestrated",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout are curated for Himalayan operations.",
    icon: PlugsConnected
  },
  {
    title: "Continental coverage honoured",
    description:
      "Africa, Asia, Europe, North America, Oceania, and South America references become an integrated global playbook.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "PayPal & Amazon Pay growth corridor",
    summary: "Digital distribution for Kathmandu, Pokhara, and diaspora communities.",
    bullets: [
      "Multi currency analytics align NPR, USD, INR, and digital rails for treasury clarity.",
      "Emails module auto-voices settlement notices, tax summaries, and compliance updates."
    ],
    icon: Stack
  },
  {
    name: "PayU & Stripe innovation runway",
    summary: "Subscription kits and ecommerce experiences across South Asia and wider Oceania.",
    bullets: [
      "Ticket workflows coordinate PSP escalations, VAT conversations, and franchise support.",
      "Auto responder nurtures onboarding and campaign flows with AI-personalised content."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net & Braintree trust layer",
    summary: "North American partner rails fused with Nepal&apos;s regulatory context.",
    bullets: [
      "KYC documentation vault retains identity proofs, sanction results, and renewal cadences.",
      "Backup manager safeguards payout experiments, audit artefacts, and continuity plans."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion studio",
    summary: "Enterprise acquiring with regional routing for travel, wellness, and tech cohorts.",
    bullets: [
      "E-wallet orchestrates instant commissions with maker-checker governance.",
      "E-voucher experiences activate incentive packs, events, and loyalty programmes."
    ],
    icon: ChartPieSlice
  }
];

const ORBITS: Orbit[] = [
  {
    label: "Orbit 01",
    title: "Decode the legacy brief",
    detail: "Extract the WordPress hero, gateway list, and navigation cues into a modern operating script.",
    icon: Compass
  },
  {
    label: "Orbit 02",
    title: "Engineer governance fabric",
    detail: "Blend multi currency, KYC, and automation layers for Himalayan regulators and global partners.",
    icon: ShieldCheck
  },
  {
    label: "Orbit 03",
    title: "Mobilise global collaboration",
    detail: "Unite field, finance, and partner teams spanning Asia, Europe, and the Americas in one cockpit.",
    icon: UsersThree
  },
  {
    label: "Orbit 04",
    title: "Optimise with AI telemetry",
    detail: "Forecast conversions, detect anomalies, and iterate programmes with predictive insight.",
    icon: Lightning
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multi currency module",
    narrative: "Balances NPR, USD, INR, and digital assets while exposing FX variances instantly.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    narrative: "Orchestrates PSP, compliance, and distributor enquiries with SLA dashboards.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    narrative: "Delivers multilingual coaching, compliance alerts, and campaign follow-ups automatically.",
    icon: Lightning
  },
  {
    title: "E-voucher",
    narrative: "Deploys loyalty boosters, event passes, and incentive vouchers with redemption analytics.",
    icon: ChartPieSlice
  },
  {
    title: "E-wallet",
    narrative: "Instant commissions and reimbursements governed with maker-checker approvals.",
    icon: ShieldCheck
  },
  {
    title: "Backup manager",
    narrative: "Protects payout logic, AI prompts, and compliance records across geographies.",
    icon: Stack
  },
  {
    title: "Emails",
    narrative: "Centralises transactional, compliance, and campaign messaging for every continent touchpoint.",
    icon: UsersThree
  },
  {
    title: "KYC documentation",
    narrative: "Maintains distributor credentials, sanction screens, and renewal cadences for auditors.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    narrative: "Extends English workflows into Nepali and regional languages without fragmenting UX.",
    icon: GlobeHemisphereEast
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Nepal MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Nepal – NP with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated for compliance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/nepal", locale)
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

type NepalPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NepalPaymentGatewaysPage({ params }: NepalPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-rose-200/70 bg-gradient-to-br from-rose-50 via-white to-orange-50 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(244,114,182,0.25),transparent_55%),radial-gradient(circle_at_88%_8%,rgba(251,191,36,0.22),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(248,113,113,0.2),transparent_65%)] dark:bg-[radial-gradient(circle_at_12%_10%,rgba(244,114,182,0.4),transparent_55%),radial-gradient(circle_at_88%_8%,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(248,113,113,0.35),transparent_65%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-600 dark:border-rose-500/60 dark:bg-slate-950/70 dark:text-rose-100">
                Ways to accept payments · Nepal (NP)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Nepal&apos;s MLM payment gateways scaled with Himalayan precision
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software transforms the source WordPress outline into an AI-ready operating model. Finance,
                  compliance, and distributor leaders orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net,
                  Braintree, Adyen, and 2Checkout from a single cockpit tailored for People&apos;s Democratic Republic of
                  Nepal.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
                >
                  <Link href={contactHref}>
                    Plan the Nepal launch
                    <Lightning className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-rose-200 bg-white/80 text-rose-700 hover:bg-rose-100 dark:border-rose-500/40 dark:bg-transparent dark:text-rose-100 dark:hover:bg-rose-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.title}
                    className="rounded-3xl border border-rose-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-600 dark:bg-slate-800 dark:text-rose-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6 rounded-[3rem] border border-rose-200/60 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500 dark:text-rose-200">
                Continents in scope
              </p>
              <p className="text-base text-slate-700 dark:text-slate-200">
                Africa · Asia · Europe · North America · Oceania · South America
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500 dark:text-rose-200">
                Gateway priorities
              </p>
              <p className="text-base text-slate-700 dark:text-slate-200">
                PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway plays engineered from the legacy roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor referenced in the source content becomes a programme with telemetry, compliance, and growth
            tooling tailored for Nepal.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-rose-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-600 dark:bg-slate-800 dark:text-rose-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{play.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {play.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-rose-500/60 dark:bg-rose-300" />
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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-center">
          <div className="rounded-[2.75rem] border border-rose-200/70 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-10 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-rose-600 dark:border-rose-500/40 dark:bg-slate-900 dark:text-rose-200">
                Himalayan operations room
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight">
                Global command centre rooted in Nepal&apos;s leadership
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                We convert the original navigation list into an oversight workspace. Teams align on Oceania launches,
                Asian partnerships, European compliance, and American expansion without leaving the command view.
              </p>
              <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="font-semibold text-slate-900 dark:text-white">Thought leadership cadence</p>
                  <p>Quarterly strategic briefings with regulators, banks, and distributor councils.</p>
                </div>
                <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="font-semibold text-slate-900 dark:text-white">AI telemetry loops</p>
                  <p>Scenario testing and anomaly detection keep payouts agile across continents.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {ORBITS.map((orbit) => {
              const Icon = orbit.icon;
              return (
                <article
                  key={orbit.label}
                  className="flex gap-4 rounded-[2.5rem] border border-rose-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-600 dark:bg-slate-800 dark:text-rose-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-200">
                      {orbit.label}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{orbit.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{orbit.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Modules ready for launch</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual capabilities
            referenced in the source navigation now operate as coordinated signals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_CARDS.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-rose-200/70 bg-gradient-to-br from-white via-white to-rose-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-600 dark:bg-slate-800 dark:text-rose-200">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-200">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Nepal&apos;s payment gateways?
            </h2>
            <p className="text-sm text-rose-100/80">
              We help Nepalese MLM leaders evolve WordPress-era listings into analytics-driven, AI-aware experiences.
              Partner with our product, compliance, and engineering strategists to validate your next phase.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-rose-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-rose-100/80">Continents highlighted in the source navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-rose-100/80">Primary payment gateways orchestrated for Nepal&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-rose-100/80">
              AI copilots monitor conversions, anomalies, and PSP posture so every distributor stretch across the Himalaya
              stays resilient.
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
