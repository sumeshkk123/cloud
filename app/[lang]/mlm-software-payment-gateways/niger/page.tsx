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

type HeroInsight = {
  heading: string;
  detail: string;
};

type GatewayBlueprint = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Milestone = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  narrative: string;
  icon: IconType;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    heading: "WordPress anchor",
    detail: "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Niger – NE."
  },
  {
    heading: "Gateway roster",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout."
  },
  {
    heading: "Continental network",
    detail: "Africa · Asia · Europe · North America · Oceania · South America."
  }
];

const GATEWAY_BLUEPRINTS: GatewayBlueprint[] = [
  {
    title: "PayPal & Amazon Pay desert commerce",
    summary: "Support Niamey, Agadez, and regional distributors with instant payouts and global reach.",
    bullets: [
      "Multi currency analytics reconcile XOF, USD, EUR, and digital wallets for finance clarity.",
      "Emails module delivers settlement, taxation, and compliance narratives automatically."
    ],
    icon: Stack
  },
  {
    title: "PayU & Stripe innovation corridor",
    summary: "Digital subscriptions and ecommerce experiences spanning ECOWAS, Europe, and the Americas.",
    bullets: [
      "Ticket system channels PSP escalations, regulator conversations, and support swarms.",
      "Auto responder powers onboarding, campaigns, and retention journeys across languages."
    ],
    icon: ChartLineUp
  },
  {
    title: "Authorize.Net & Braintree trust shield",
    summary: "North American acquiring aligned with Niger&apos;s data, AML, and tax governance.",
    bullets: [
      "KYC documentation vault secures identity artefacts, sanction results, and renewal cadences.",
      "Backup manager protects payout logic, AI prompts, and audit archives across connectivity shifts."
    ],
    icon: ShieldCheck
  },
  {
    title: "Adyen & 2Checkout expansion bridge",
    summary: "Enterprise routing for telecom, energy, and agriculture programmes across continents.",
    bullets: [
      "E-wallet manager streams commissions with maker-checker approvals and audit trails.",
      "E-voucher engine fuels loyalty schemes, events, and community incentives with telemetry."
    ],
    icon: GlobeHemisphereEast
  }
];

const MILESTONES: Milestone[] = [
  {
    label: "Milestone 01",
    title: "Decode the legacy narrative",
    description: "Transform the WordPress headline, gateway list, and navigation references into actionable blueprints.",
    icon: Compass
  },
  {
    label: "Milestone 02",
    title: "Engineer governance lattice",
    description: "Blend multi currency, KYC, and automation pillars for Niger regulators and cross-border partners.",
    icon: ShieldCheck
  },
  {
    label: "Milestone 03",
    title: "Orchestrate continental collaboration",
    description: "Unite Africa with Asia, Europe, North America, Oceania, and South America through shared telemetry.",
    icon: UsersThree
  },
  {
    label: "Milestone 04",
    title: "Optimise with AI insight",
    description: "Forecast conversions, detect anomalies, and iterate campaigns using predictive analytics.",
    icon: Lightning
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    narrative: "Balances XOF, USD, EUR, and digital assets with treasury-grade variance analytics.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    narrative: "Routes PSP, regulator, and distributor cases with SLA dashboards and escalation mapping.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    narrative: "Delivers multilingual coaching, compliance alerts, and campaign updates instantly.",
    icon: Lightning
  },
  {
    name: "E-voucher",
    narrative: "Issues incentives, loyalty rewards, and event access with redemption telemetry.",
    icon: PlugsConnected
  },
  {
    name: "E-wallet",
    narrative: "Streams commissions and reimbursements with maker-checker governance.",
    icon: ShieldCheck
  },
  {
    name: "Backup manager",
    narrative: "Safeguards payout logic, AI prompts, and audit artefacts during connectivity shifts.",
    icon: Stack
  },
  {
    name: "Emails",
    narrative: "Central hub for transactional, compliance, and campaign messaging across continents.",
    icon: UsersThree
  },
  {
    name: "KYC documentation",
    narrative: "Maintains distributor identity trails, sanction checks, and renewal reminders.",
    icon: ChartLineUp
  },
  {
    name: "Multi-lingual system",
    narrative: "Extends English operations into French and Hausa experiences without creating silos.",
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
  const title = "Niger MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Niger – NE, orchestrating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with governance automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/niger", locale)
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

type NigerPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NigerPaymentGatewaysPage({ params }: NigerPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-orange-200/70 bg-gradient-to-br from-orange-50 via-white to-slate-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(251,146,60,0.26),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(234,179,8,0.24),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(249,115,22,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(251,146,60,0.38),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(234,179,8,0.34),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(249,115,22,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-orange-700 dark:border-orange-500/60 dark:bg-slate-950/70 dark:text-orange-100">
                Ways to accept payments · Niger (NE)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Niger&apos;s MLM payment gateways transformed into a desert-ready command centre
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We elevate the WordPress outline into an AI-enabled experience. Finance, compliance, and field leaders
                  orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with
                  telemetry spanning every referenced continent.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-orange-600 text-white hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
                >
                  <Link href={contactHref}>
                    Plan the Niger rollout
                    <Lightning className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-orange-200 bg-white/80 text-orange-700 hover:bg-orange-100 dark:border-orange-500/40 dark:bg-transparent dark:text-orange-100 dark:hover:bg-orange-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.75rem] border border-orange-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
              {HERO_INSIGHTS.map((insight) => (
                <div key={insight.heading} className="rounded-[1.75rem] border border-orange-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-200">
                    {insight.heading}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway blueprints translated from the original roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a programme with compliance, telemetry, and growth enablement for Niger.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_BLUEPRINTS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-orange-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-700 dark:bg-slate-800 dark:text-orange-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{gateway.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-orange-500/60 dark:bg-orange-300" />
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
        <div className="grid gap-10 rounded-[3rem] border border-orange-200/70 bg-gradient-to-br from-white via-orange-50 to-slate-100 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-orange-600 dark:border-orange-500/40 dark:bg-slate-900 dark:text-orange-200">
              Continental alignment
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Live oversight across six continents for Niger leadership
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The WordPress navigation cited Africa, Asia, Europe, North America, Oceania, and South America. We convert
              those references into a telemetry-driven control tower with AI copilots and regulator alerts.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-orange-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator-ready dashboards</p>
                <p>Export AML, tax, and data governance evidence for international stakeholders.</p>
              </div>
              <div className="rounded-3xl border border-orange-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI-driven collaboration</p>
                <p>Distributors, finance, and partners co-create campaigns with predictive insights.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {MILESTONES.map((milestone) => {
                const Icon = milestone.icon;
                return (
                  <article
                    key={milestone.label}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-orange-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-700 dark:bg-slate-800 dark:text-orange-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-200">
                          {milestone.label}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{milestone.description}</p>
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
            Module network powering Niger&apos;s expansion
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            operate as a cohesive network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_CARDS.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-orange-200/70 bg-gradient-to-br from-white via-white to-orange-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-700 dark:bg-slate-800 dark:text-orange-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{module.name}</h3>
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-orange-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise Niger&apos;s payment gateways?
            </h2>
            <p className="text-sm text-orange-100/80">
              We help Nigerien MLM leaders convert WordPress-era listings into telemetry-rich, AI-powered operations.
              Partner with our product, compliance, and engineering strategists to validate your next move.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-orange-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-orange-100/80">Continents referenced across the legacy navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-orange-100/80">Gateway partners orchestrated for Niger&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-orange-100/80">
              AI copilots track conversions, risk posture, and collaboration cues from Niamey to international partners.
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
