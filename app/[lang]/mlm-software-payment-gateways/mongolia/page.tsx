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
  Bank,
  Compass,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Megaphone,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  BarChart4,
  Globe2,
  Leaf,
  Mountain,
  Timer
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type GatewayProgramme = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCard = {
  title: string;
  detail: string;
  icon: IconType;
};

type Milestone = {
  stage: string;
  title: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "WordPress origin",
    value: "Headline intact",
    detail:
      "The hero honours “Ways to accept payments from MLM Software in People’s Democratic Republic of Mongolia – MN” with modern clarity.",
    icon: Compass
  },
  {
    label: "Gateway network",
    value: "8 adapters",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout orchestrated for Mongolian growth.",
    icon: RocketLaunch
  },
  {
    label: "Module stack",
    value: "9 modules",
    detail: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, multi-lingual — all telemetered.",
    icon: StackSimple
  }
];

const GATEWAY_PROGRAMMES: GatewayProgramme[] = [
  {
    title: "Braintree omnichannel nomad",
    description: "Support retail hubs in Ulaanbaatar and remote distributor events across the steppe.",
    bullets: [
      "Multi currency system reconciles MNT, CNY, and USD with AI insights on volatility.",
      "Ticket module records regulator interactions, logistics escalations, and PSP conversations."
    ],
    icon: Globe2
  },
  {
    title: "PayU digital commerce bridge",
    description: "Scale ecommerce, education, and microfinance programmes across Mongolia’s fast-growing digital population.",
    bullets: [
      "Emails module shares VAT, customs, and AML updates with finance and field leadership.",
      "KYC documentation vault stores distributor verification, sanction screening, and renewal cadences."
    ],
    icon: Megaphone
  },
  {
    title: "Stripe innovation sprint",
    description: "Prototype AI concierge services, subscription kits, and cross-border experiences for regional partners.",
    bullets: [
      "Auto responder delivers Mongolian and English journeys with AI-personalised action items.",
      "Backup manager preserves storefront experiments, compliance artefacts, and creative assets."
    ],
    icon: Lightning
  },
  {
    title: "Authorize.Net alliance lane",
    description: "Blend North American partner ecosystems with Mongolia’s commission structures transparently.",
    bullets: [
      "E-wallet programme sends instant payouts with maker-checker approvals and spending limits.",
      "Multi-lingual system aligns Mongolian, English, and Russian experiences across portals and AI copilots."
    ],
    icon: UsersThree
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multi currency system",
    detail: "Balances MNT, USD, CNY, and EUR with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, PSP, logistics, and distributor support cases with AI-generated summaries.",
    icon: Timer
  },
  {
    title: "Auto responder",
    detail: "Delivers bilingual communications instantly with AI-personalised coaching and escalations.",
    icon: Sparkle
  },
  {
    title: "E-voucher engine",
    detail: "Supports incentive campaigns, events, and education programmes with telemetry on redemption.",
    icon: BarChart4
  },
  {
    title: "E-wallet manager",
    detail: "Streams commissions and reimbursements with maker-checker oversight and payout controls.",
    icon: Bank
  },
  {
    title: "Backup manager",
    detail: "Captures storefronts, automations, and compliance artefacts even during connectivity gaps.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding evidence with reminders.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps Mongolian, English, and Russian experiences synchronised across apps, portals, and AI assistants.",
    icon: Globe2
  }
];

const MILESTONES: Milestone[] = [
  {
    stage: "Moment 01",
    title: "Interpret the WordPress brief",
    description: "Hero copy, gateway list, and module references shape our design blueprint from the outset.",
    icon: Compass
  },
  {
    stage: "Moment 02",
    title: "Wire the compliant backbone",
    description: "Payment adapters, modules, and telemetry connect with governance artefacts for Mongolian regulators.",
    icon: ShieldCheck
  },
  {
    stage: "Moment 03",
    title: "Mobilise field and finance",
    description: "Dashboards, automations, and multilingual comms launch with training for every stakeholder.",
    icon: UsersThree
  },
  {
    stage: "Moment 04",
    title: "Refine with AI insights",
    description: "Quarterly reviews optimise payouts, FX exposure, and partner performance across the region.",
    icon: Mountain
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Mongolia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Activate Mongolia’s MLM payment gateways with compliant automation. Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI telemetry.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/mongolia", locale)
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

type MongoliaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MongoliaPaymentGatewaysPage({ params }: MongoliaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-amber-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(245,158,11,0.3),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(245,158,11,0.4),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.32),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:border-emerald-500/50 dark:bg-slate-950/70 dark:text-emerald-200">
                Ways to accept payments · Mongolia (MN)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Mongolia’s MLM payment gateways orchestrated for steppe-scale growth
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software lifts the WordPress promise into an AI-ready operating model. Finance, compliance, and field organisations gain visibility over PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout as they fuel Mongolia’s expansion.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                  <Link href={contactHref}>
                    Coordinate the Mongolia deployment
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 bg-white/80 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-transparent dark:text-emerald-100 dark:hover:bg-emerald-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.label}
                    className="rounded-3xl border border-emerald-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-500 dark:text-slate-400">{highlight.label}</p>
                        <p className="text-2xl font-semibold text-slate-900 dark:text-white">{highlight.value}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{highlight.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Gateway programmes anchored in WordPress lineage</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each connector from the legacy page becomes a telemetry-rich programme with compliance evidence and field enablement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PROGRAMMES.map((programme) => {
            const Icon = programme.icon;
            return (
              <article
                key={programme.title}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-emerald-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{programme.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{programme.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {programme.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-300" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-slate-100">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Modules from the navigation, unified for Mongolia’s leadership
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              The original navigation list becomes an orchestrated console with AI telemetry, compliance artefacts, and executive-ready views.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CARDS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-slate-200">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Milestones to launch and scale Mongolia</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Our cadence keeps every stakeholder close to the WordPress brief while unlocking AI-driven excellence.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {MILESTONES.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <article key={milestone.stage} className="rounded-[2rem] border border-emerald-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {milestone.stage}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{milestone.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{milestone.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software to lead Mongolia’s payment evolution.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                Timelines, compliance artefacts, and AI enablement come bundled. Our regional pod ensures corporate, regulators, and distributors move in lockstep.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-emerald-700 hover:bg-slate-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full gap-2 border-white/60 text-white hover:bg-white/10"
              >
                <Link href={pricingHref}>
                  Review licensing options
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
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
