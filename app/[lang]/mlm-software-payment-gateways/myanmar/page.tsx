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
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  BarChart,
  Globe2,
  Layout,
  Orbit,
  Star
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroTile = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewayPlan = {
  title: string;
  context: string;
  bullets: string[];
  icon: IconType;
};

type ModuleBlock = {
  title: string;
  detail: string;
  icon: IconType;
};

type Stage = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

const HERO_TILES: HeroTile[] = [
  {
    heading: "WordPress promise intact",
    description:
      "Hero messaging includes “Ways to accept payments from MLM Software in People’s Democratic Republic of Myanmar – MM” with executive polish.",
    icon: Compass
  },
  {
    heading: "Gateway roster orchestrated",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout deliver telemetry-rich journeys.",
    icon: StackSimple
  },
  {
    heading: "Module ecosystem unified",
    description: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multi-lingual experiences in sync.",
    icon: Orbit
  }
];

const GATEWAY_PLANS: GatewayPlan[] = [
  {
    title: "Braintree commerce runway",
    context: "Support retail corridors in Yangon, Mandalay, and Naypyidaw with transparent commission governance.",
    bullets: [
      "Multi currency module reconciles MMK, USD, and THB flows with treasury analytics.",
      "Ticket workflows capture regulator updates, PSP escalations, and field support cases."
    ],
    icon: Layout
  },
  {
    title: "PayU digital inclusion",
    context: "Scale ecommerce, education, and microfinance programmes across Myanmar’s emerging digital economy.",
    bullets: [
      "Emails module distributes compliance, tax, and FX updates across Burmese and English audiences.",
      "KYC documentation vault stores identity verification, sanction checks, and renewal cadences."
    ],
    icon: Megaphone
  },
  {
    title: "Stripe innovation line",
    context: "Prototype AI concierge services, subscription kits, and omnichannel experiences with monitored risk controls.",
    bullets: [
      "Auto responder delivers Burmese and English communications with AI-personalised recommendations.",
      "Backup manager preserves storefront experiments, compliance artefacts, and creative assets."
    ],
    icon: Sparkle
  },
  {
    title: "Authorize.Net partner network",
    context: "Blend North American partner operations with Myanmar’s commission structures transparently.",
    bullets: [
      "E-wallet manager streams instant payouts with maker-checker approvals and territory rules.",
      "Multi-lingual system aligns Burmese, English, and Chinese experiences across portals and AI copilots."
    ],
    icon: UsersThree
  }
];

const MODULE_BLOCKS: ModuleBlock[] = [
  {
    title: "Multi currency system",
    detail: "Balances MMK, USD, and THB with variance analytics and regulator-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, PSP, and support cases with SLA dashboards and AI summaries.",
    icon: BarChart
  },
  {
    title: "Auto responder",
    detail: "Delivers multilingual notifications, escalations, and coaching flows instantly.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    detail: "Supports incentive programmes and events with redemption telemetry for finance and field.",
    icon: Star
  },
  {
    title: "E-wallet manager",
    detail: "Instant commissions, reimbursements, and bonuses with governance-friendly controls.",
    icon: Bank
  },
  {
    title: "Backup manager",
    detail: "Keeps storefronts, automations, and compliance artefacts ready for audits even during outages.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    detail: "Maintains identity, sanction, and residency evidence with versioned history.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    detail: "Aligns Burmese, English, and Chinese experiences across apps and AI assistants.",
    icon: Globe2
  }
];

const STAGES: Stage[] = [
  {
    label: "Stage 01",
    title: "Interpret the WordPress brief",
    description: "Hero text, gateway roster, and navigation references set our design baseline.",
    icon: Compass
  },
  {
    label: "Stage 02",
    title: "Wire the compliant backbone",
    description: "Gateways, modules, and telemetry connect with governance artefacts for regulators.",
    icon: ShieldCheck
  },
  {
    label: "Stage 03",
    title: "Activate stakeholders",
    description: "Finance, compliance, and field leaders receive dashboards, automations, and multilingual enablement.",
    icon: UsersThree
  },
  {
    label: "Stage 04",
    title: "Optimise with AI insight",
    description: "Quarterly reviews refine commissions, FX exposure, and partner programmes using data.",
    icon: Lightning
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Myanmar MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Modernise Myanmar’s MLM payment gateways. Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with compliant automation and AI telemetry.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/myanmar", locale)
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

type MyanmarPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function MyanmarPaymentGatewaysPage({ params }: MyanmarPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-indigo-200/70 bg-gradient-to-br from-indigo-50 via-white to-amber-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(251,191,36,0.3),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(79,70,229,0.32),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(99,102,241,0.4),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(251,191,36,0.4),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(79,70,229,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700 dark:border-indigo-500/50 dark:bg-slate-950/70 dark:text-indigo-200">
                Ways to accept payments · Myanmar (MM)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Myanmar’s MLM payment gateways orchestrated for resilient expansion
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software elevates the WordPress narrative into an AI-powered operating system. Finance, compliance, and field teams gain real-time visibility into PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout as they power Myanmar’s growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                  <Link href={contactHref}>
                    Plan the Myanmar rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-indigo-200 bg-white/80 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-100 dark:hover:bg-indigo-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              {HERO_TILES.map((tile) => {
                const Icon = tile.icon;
                return (
                  <article
                    key={tile.heading}
                    className="rounded-3xl border border-indigo-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-700 dark:bg-slate-800 dark:text-indigo-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{tile.heading}</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{tile.description}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Gateway plans derived from the legacy list</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Every adapter evolves into an executive-grade programme with telemetry, compliance artefacts, and frontline enablement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.title}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-indigo-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-700 dark:bg-slate-800 dark:text-indigo-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{plan.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{plan.context}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-300" aria-hidden />
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
              Modules from the navigation, unified for Myanmar’s leadership
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              The WordPress module list becomes a single console with AI telemetry, compliance artefacts, and executive-ready insights.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_BLOCKS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-indigo-200">
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Stages to launch and refine Myanmar</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Our cadence keeps corporate, regulators, and field teams aligned with the WordPress brief while unlocking AI-led excellence.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-indigo-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-indigo-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-indigo-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article key={stage.label} className="rounded-[2rem] border border-indigo-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {stage.label}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-indigo-200/70 bg-gradient-to-br from-indigo-600 via-indigo-500 to-amber-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software to lead Myanmar’s payment transformation.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                We deliver timelines, governance artefacts, and AI enablement so every stakeholder moves forward with confidence from the very first sprint.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-indigo-700 hover:bg-slate-100">
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
