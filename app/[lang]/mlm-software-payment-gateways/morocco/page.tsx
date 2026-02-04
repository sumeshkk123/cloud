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
  Palette,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  BarChart3,
  Globe2,
  Layers,
  LayoutDashboard,
  Sun
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type GatewayInitiative = {
  name: string;
  context: string;
  bullets: string[];
  icon: IconType;
};

type ModuleFeature = {
  title: string;
  detail: string;
  icon: IconType;
};

type JourneyStep = {
  phase: string;
  title: string;
  description: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "WordPress anchor",
    value: "Preserved",
    description:
      "The hero retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Morocco – MA” with modern clarity.",
    icon: Compass
  },
  {
    label: "Gateway suite",
    value: "8 adapters",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout orchestrated in one console.",
    icon: LayoutDashboard
  },
  {
    label: "Module ecosystem",
    value: "9 capabilities",
    description: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multi-lingual experiences synchronised.",
    icon: StackSimple
  }
];

const GATEWAY_INITIATIVES: GatewayInitiative[] = [
  {
    name: "PayU Maghreb commerce corridor",
    context: "Support ecommerce, retail, and wholesale programmes across Casablanca, Rabat, and Marrakech.",
    bullets: [
      "Multi currency module reconciles MAD, EUR, and USD flows with treasury-ready insights.",
      "Ticketing workflows capture Bank Al-Maghrib correspondences, PSP escalations, and logistics updates."
    ],
    icon: Globe2
  },
  {
    name: "Stripe innovation souk",
    context: "Prototype AI concierge services, subscription kits, and omnichannel storefronts for luxury and travel segments.",
    bullets: [
      "Auto responder delivers Arabic, French, and English communications with AI-personalised actions.",
      "Backup manager preserves storefront experiments, compliance artefacts, and campaign assets."
    ],
    icon: Sparkle
  },
  {
    name: "Authorize.Net transatlantic bridge",
    context: "Blend North American partner operations with Moroccan commission structures and compliance standards.",
    bullets: [
      "E-wallet manager streams instant payouts with maker-checker approvals and region-specific limits.",
      "Emails module centralises tax, AML, and FX communications for finance and regional leadership."
    ],
    icon: BarChart3
  },
  {
    name: "Adyen hospitality accelerator",
    context: "Deliver premium experiences for tourism, hospitality, and luxury retail across the kingdom.",
    bullets: [
      "KYC documentation vault stores enhanced due diligence, residency evidence, and sanction screening records.",
      "Multi-lingual system aligns Arabic, French, and English journeys across portals and AI copilots."
    ],
    icon: Palette
  }
];

const MODULE_FEATURES: ModuleFeature[] = [
  {
    title: "Multi currency system",
    detail: "Balances MAD, EUR, and USD with variance analytics and regulator-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, PSP, and support cases with SLA dashboards and AI-generated summaries.",
    icon: Megaphone
  },
  {
    title: "Auto responder",
    detail: "Delivers multilingual notifications, escalations, and coaching flows in seconds.",
    icon: Sparkle
  },
  {
    title: "E-voucher engine",
    detail: "Supports incentive programmes, cultural events, and loyalty campaigns with redemption telemetry.",
    icon: Layers
  },
  {
    title: "E-wallet manager",
    detail: "Streams commissions and reimbursements with governance-friendly controls.",
    icon: Bank
  },
  {
    title: "Backup manager",
    detail: "Preserves storefronts, automations, and compliance artefacts during connectivity shifts.",
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
    detail: "Keeps Arabic, French, and English experiences aligned across portals and AI assistants.",
    icon: Globe2
  }
];

const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "Phase 01",
    title: "Interpret the WordPress brief",
    description: "Hero text, gateway roster, and navigation references shape the design blueprint from day one.",
    icon: Compass
  },
  {
    phase: "Phase 02",
    title: "Wire the Moroccan backbone",
    description: "Gateways, modules, and telemetry connect with governance artefacts for regulators and banking partners.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    title: "Activate operations",
    description: "Finance, compliance, and field teams receive dashboards, automations, and multilingual enablement.",
    icon: UsersThree
  },
  {
    phase: "Phase 04",
    title: "Optimise with AI insights",
    description: "Quarterly reviews refine commissions, FX exposure, and partner ecosystems with data-led clarity.",
    icon: Lightning
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Morocco MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Modernise Morocco’s MLM payment gateways. Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with compliant automation and AI telemetry.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/morocco", locale)
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

type MoroccoPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MoroccoPaymentGatewaysPage({ params }: MoroccoPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-orange-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(251,191,36,0.25),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(234,179,8,0.32),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(248,113,113,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(251,191,36,0.4),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(234,179,8,0.42),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(248,113,113,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-700 dark:border-amber-500/50 dark:bg-slate-950/70 dark:text-amber-200">
                Ways to accept payments · Morocco (MA)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Morocco’s MLM payment gateways orchestrated for Maghreb momentum
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  The WordPress promise now lives inside an AI-ready experience. Cloud MLM Software gives finance, compliance, and field teams the visibility they need to run PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with governance-first precision.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400">
                  <Link href={contactHref}>
                    Architect the Morocco rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-amber-200 bg-white/80 text-amber-700 hover:bg-amber-100 dark:border-amber-500/40 dark:bg-transparent dark:text-amber-100 dark:hover:bg-amber-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="rounded-3xl border border-amber-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-500 dark:text-slate-400">{metric.label}</p>
                        <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Gateway initiatives grounded in Morocco’s realities</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each adapter from the WordPress list becomes a telemetry-rich programme with compliance evidence and leadership storytelling.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_INITIATIVES.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <article
                key={initiative.name}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-amber-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{initiative.context}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {initiative.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-300" aria-hidden />
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
              Modules from the navigation, unified with Moroccan telemetry
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              Every module listed in the WordPress navigation now collaborates across dashboards, automations, and compliance artefacts.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_FEATURES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-amber-200">
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Journey to launch and refine Morocco</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Our cadence keeps every stakeholder aligned with the WordPress brief while unlocking AI-driven excellence.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {JOURNEY_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.phase} className="rounded-[2rem] border border-amber-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {step.phase}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-600 via-amber-500 to-rose-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software to lead Morocco’s payment evolution.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                We provide timelines, governance artefacts, and AI enablement so corporate, regulators, and field teams stay aligned from day one.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-amber-700 hover:bg-slate-100">
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
