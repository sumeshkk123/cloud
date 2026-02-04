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
  Buildings,
  ClipboardText,
  Coins,
  CurrencyCircleDollar,
  Gear,
  Handshake,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  Pulse,
  ShieldCheck,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  BarChart3,
  Globe2,
  Layers,
  Target
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type GatewayInitiative = {
  title: string;
  context: string;
  bullets: string[];
  icon: IconType;
};

type ModuleItem = {
  title: string;
  description: string;
  icon: IconType;
};

type RoadmapStage = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

const STATS: Stat[] = [
  {
    label: "WordPress promise",
    value: "Preserved",
    detail:
      "“Ways to accept payments from MLM Software in People’s Democratic Republic of Moldova – MD” headlines the hero experience with executive polish.",
    icon: ClipboardText
  },
  {
    label: "Gateway roster",
    value: "8 adapters",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout orchestrated in one console.",
    icon: StackSimple
  },
  {
    label: "Module ecosystem",
    value: "9 capabilities",
    detail: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multi-lingual experiences in sync.",
    icon: Gear
  }
];

const GATEWAY_INITIATIVES: GatewayInitiative[] = [
  {
    title: "Braintree expansion corridor",
    context: "Power e-commerce in Chişinău while reconciling EU and CIS settlements with regulator-ready telemetry.",
    bullets: [
      "Multi currency module balances MDL, EUR, and USD flows with treasury variance views.",
      "Ticket workflows capture National Bank and PSP correspondence alongside distributor evidence."
    ],
    icon: Plugs
  },
  {
    title: "PayU retail acceleration",
    context: "Scale retail and field ordering programmes across Romania, Ukraine, and Moldova without losing control.",
    bullets: [
      "Emails module circulates VAT, AML, and customs updates to finance, legal, and field leadership.",
      "KYC documentation keeps franchise and distributor verifications in sync with regulator expectations."
    ],
    icon: Coins
  },
  {
    title: "Stripe innovation studio",
    context: "Prototype AI concierge flows, subscription launches, and omnichannel storefronts with monitored risk controls.",
    bullets: [
      "Auto responder sequences bilingual (Romanian and Russian) notifications with AI-personalised coaching.",
      "Backup manager safeguards storefront versions, compliance artefacts, and promotional assets."
    ],
    icon: Lightning
  },
  {
    title: "Authorize.Net alliance lane",
    context: "Support North American partners serving Moldovan distributors with transparent commission evidence.",
    bullets: [
      "E-wallet manager streams instant payouts with maker-checker authorisations and cap rules.",
      "Multi-lingual system aligns English, Romanian, and Russian experiences across portals and AI agents."
    ],
    icon: Handshake
  }
];

const MODULES: ModuleItem[] = [
  {
    title: "Multi currency system",
    description: "Variance analytics show MDL, EUR, and USD performance with export-ready ledgers.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Compliance, PSP, and distributor cases route through SLA dashboards and AI summaries.",
    icon: Pulse
  },
  {
    title: "Auto responder",
    description: "Automated Romanian and Russian communications keep leadership informed in real time.",
    icon: Megaphone
  },
  {
    title: "E-voucher programme",
    description: "Supports incentive kits and omnichannel promotions with redemption telemetry for finance.",
    icon: BarChart3
  },
  {
    title: "E-wallet manager",
    description: "Instant payouts, reimbursements, and bonuses with compliance-friendly controls.",
    icon: Bank
  },
  {
    title: "Backup manager",
    description: "Immutable snapshots of storefronts, automations, and evidence for audit readiness.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    description: "Centralises transactional, campaign, and compliance messaging for CFO clarity.",
    icon: Layers
  },
  {
    title: "KYC documentation",
    description: "Maintains onboarding proofs, sanction screening, and renewal cycles with reminders.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    description: "Aligns Romanian, Russian, and English journeys across every portal and AI assistant.",
    icon: Globe2
  }
];

const ROADMAP: RoadmapStage[] = [
  {
    step: "Sprint 01",
    title: "Decode the WordPress brief",
    description: "Hero copy, gateway list, and navigation references are catalogued as non-negotiable requirements.",
    icon: ClipboardText
  },
  {
    step: "Sprint 02",
    title: "Wire the compliant backbone",
    description: "Gateways, modules, and AI telemetry connect with governance artefacts for banking partners.",
    icon: ShieldCheck
  },
  {
    step: "Sprint 03",
    title: "Activate field and finance",
    description: "Dashboards, automations, and multilingual comms launch with enablement packs for every stakeholder.",
    icon: UsersThree
  },
  {
    step: "Sprint 04",
    title: "Scale insight cadence",
    description: "Quarterly reviews tune commissions, FX exposure, and partner programmes with data-led confidence.",
    icon: Target
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Moldova MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Modernise Moldova’s MLM payment operations. Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with compliant automation and AI telemetry.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/moldova", locale)
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

type MoldovaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MoldovaPaymentGatewaysPage({ params }: MoldovaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-purple-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(250,204,21,0.25),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(168,85,247,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,116,144,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(250,204,21,0.35),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(168,85,247,0.4),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,116,144,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-700 dark:border-amber-500/50 dark:bg-slate-950/70 dark:text-amber-200">
                Ways to accept payments · Moldova (MD)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Moldova MLM payment gateways elevated for EU & CIS growth corridors
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  The legacy WordPress promise now lives inside a corporate-grade experience. Cloud MLM Software connects finance, compliance, and field teams across Moldova, Romania, Ukraine, and beyond with AI telemetry powering every decision.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400">
                  <Link href={contactHref}>
                    Architect the Moldova rollout
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
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article
                    key={stat.label}
                    className="rounded-3xl border border-amber-200/60 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-500 dark:text-slate-400">{stat.label}</p>
                        <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{stat.detail}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Gateway initiatives tailored for Moldova</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            The WordPress connector list becomes a set of executive programmes with compliance artefacts, FX visibility, and AI guidance.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_INITIATIVES.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <article
                key={initiative.title}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-amber-200/60 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{initiative.title}</h3>
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

      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-slate-100">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Modules from the legacy navigation, unified with AI telemetry
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              Every module referenced in the WordPress navigation now collaborates with dashboards, automations, and compliance evidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-amber-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-slate-200">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Sprints that bring Moldova live</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Our pod guides every stakeholder from the legacy checklist to a modern AI-governed operating model.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {ROADMAP.map((stage) => {
            const Icon = stage.icon;
            return (
              <article key={stage.step} className="rounded-[2rem] border border-amber-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {stage.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-600 via-amber-500 to-purple-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software for Moldova’s payment transformation.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                Secure launch timelines, governance artefacts, and multilingual enablement. Our regional pod keeps corporate, partners, and distributors aligned at every milestone.
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
