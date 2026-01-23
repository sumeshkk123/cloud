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
  Columns,
  Coins,
  CreditCard,
  Lightning,
  MapTrifold,
  Megaphone,
  ShieldCheck,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  Building,
  Compass,
  Globe2,
  Library,
  Target
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type GatewaySeries = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleEntry = {
  title: string;
  detail: string;
  icon: IconType;
};

type Track = {
  step: string;
  heading: string;
  description: string;
  icon: IconType;
};

const HERO_FACTS: HeroFact[] = [
  {
    label: "WordPress headline",
    value: "Preserved",
    description:
      "Our hero honours “Ways to accept payments from MLM Software in People’s Democratic Republic of Montenegro – ME.”",
    icon: Library
  },
  {
    label: "Gateway roster",
    value: "8 connectors",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout in one governed stack.",
    icon: CreditCard
  },
  {
    label: "Module suite",
    value: "9 modules",
    description: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multi-lingual experiences all telemetered.",
    icon: StackSimple
  }
];

const GATEWAY_SERIES: GatewaySeries[] = [
  {
    title: "PayU Adriatic commerce bridge",
    summary: "Connect Montenegro’s retail corridors with regional marketplaces across Serbia, Croatia, and Bosnia & Herzegovina.",
    bullets: [
      "Multi currency system tracks EUR inflows with cross-border settlement analytics and FX protection.",
      "Ticketing workflows capture regulator updates, PSP conversations, and field escalations with SLA dashboards."
    ],
    icon: Coins
  },
  {
    title: "Braintree tourism accelerator",
    summary: "Serve hospitality, cruise, and eco-tourism experiences with real-time commission readiness.",
    bullets: [
      "Auto responder sequences multilingual (Montenegrin, English, Italian) campaigns with AI-personalised nudges.",
      "Backup manager preserves seasonal storefronts, compliance artefacts, and marketing collateral."
    ],
    icon: Globe2
  },
  {
    title: "Authorize.Net partnership runway",
    summary: "Maintain transparent payouts for US-based alliances supporting Montenegro’s distributors.",
    bullets: [
      "E-wallet manager streams instant commissions with maker-checker approvals and territory-based caps.",
      "Emails module centralises tax, AML, and treasury communications for corporate and partner finance teams."
    ],
    icon: Building
  },
  {
    title: "Adyen premium omnichannel lane",
    summary: "Blend luxury retail, digital subscriptions, and field events for high-value members.",
    bullets: [
      "KYC documentation vault stores enhanced due diligence, residency proofs, and sanction screenings.",
      "Multi-lingual system synchronises Montenegrin, English, and Italian experiences across portals and AI copilots."
    ],
    icon: ShieldCheck
  }
];

const MODULE_ENTRIES: ModuleEntry[] = [
  {
    title: "Multi currency system",
    detail: "EUR-led variance analytics, FX guardrails, and regulator-ready exports.",
    icon: Bank
  },
  {
    title: "Ticket system module",
    detail: "Compliance, PSP, and support cases flow through SLA dashboards with AI summaries.",
    icon: Columns
  },
  {
    title: "Auto responder",
    detail: "Delivers multilingual notifications and coaching within seconds using AI personalisation.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    detail: "Supports incentive campaigns, events, and loyalty programmes with redemption telemetry.",
    icon: Target
  },
  {
    title: "E-wallet manager",
    detail: "Instant payouts, reimbursements, and bonuses with governance-friendly controls.",
    icon: Coins
  },
  {
    title: "Backup manager",
    detail: "Immutable history for storefronts, automations, and compliance artefacts.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Central communication layer for transactional, campaign, and compliance messaging.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    detail: "Versioned identity, sanction, and residency evidence ready for regulators.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    detail: "Aligns Montenegrin, English, and Italian journeys across portals and AI assistants.",
    icon: Globe2
  }
];

const TRACKS: Track[] = [
  {
    step: "Track 01",
    heading: "Interpret the WordPress brief",
    description: "Hero statement, gateway list, and navigation references become the baseline requirements.",
    icon: Library
  },
  {
    step: "Track 02",
    heading: "Wire the compliant backbone",
    description: "Gateways, modules, and telemetry connect with governance artefacts for Montenegrin regulators.",
    icon: ShieldCheck
  },
  {
    step: "Track 03",
    heading: "Activate stakeholders",
    description: "Finance, compliance, and field leadership receive dashboards, automation, and enablement guides.",
    icon: UsersThree
  },
  {
    step: "Track 04",
    heading: "Optimise with AI insight",
    description: "Quarterly reviews fine-tune commission models, FX exposure, and partner performance.",
    icon: Lightning
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Montenegro MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Orchestrate Montenegro’s MLM payment gateways with compliant automation. Cloud MLM Software unifies PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI telemetry.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/montenegro", locale)
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

type MontenegroPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function MontenegroPaymentGatewaysPage({ params }: MontenegroPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-slate-200/70 bg-gradient-to-br from-slate-50 via-white to-rose-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(239,68,68,0.25),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(37,99,235,0.28),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(239,68,68,0.35),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(37,99,235,0.4),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.32),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-700 dark:border-rose-500/50 dark:bg-slate-950/70 dark:text-rose-200">
                Ways to accept payments · Montenegro (ME)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Montenegro’s MLM payment gateways, refined for Adriatic growth
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software reimagines the WordPress blueprint as an AI-powered operating console. Finance, compliance, and field leadership gain the clarity needed to orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout across Montenegro’s dynamic market.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400">
                  <Link href={contactHref}>
                    Plan the Montenegro rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-rose-200 bg-white/80 text-rose-700 hover:bg-rose-100 dark:border-rose-500/40 dark:bg-transparent dark:text-rose-100 dark:hover:bg-rose-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              {HERO_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article
                    key={fact.label}
                    className="rounded-3xl border border-rose-200/60 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-slate-800 dark:text-rose-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-500 dark:text-slate-400">{fact.label}</p>
                        <p className="text-2xl font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{fact.description}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway series crafted from the WordPress connector list
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each adapter evolves into an executive-grade programme with telemetry, compliance artefacts, and frontline enablement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_SERIES.map((series) => {
            const Icon = series.icon;
            return (
              <article
                key={series.title}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-rose-200/60 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-slate-800 dark:text-rose-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{series.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{series.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {series.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-300" aria-hidden />
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
              Modules from the navigation, unified for Montenegro’s leadership
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              The original navigation list now acts as a singular command centre with AI telemetry and audit trails.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_ENTRIES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-rose-200">
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Tracks to launch and optimise Montenegro</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            From WordPress outline to AI-led operations, our cadence ensures every stakeholder stays aligned.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-rose-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-rose-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-rose-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.step} className="rounded-[2rem] border border-rose-200/60 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-rose-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {track.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{track.heading}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{track.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-rose-200/60 bg-gradient-to-br from-rose-600 via-rose-500 to-blue-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software to lead Montenegro’s payment evolution.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                Launch with timelines, compliance artefacts, and regional enablement. Our Adriatic pod keeps corporate, regulators, and field leaders in lockstep.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-rose-700 hover:bg-slate-100">
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
