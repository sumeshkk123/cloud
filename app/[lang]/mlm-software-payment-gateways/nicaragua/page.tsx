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
  ClipboardText,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  ShootingStar,
  Storefront,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  label: string;
  detail: string;
};

type GatewayCanvas = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Initiative = {
  phase: string;
  title: string;
  description: string;
  icon: IconType;
};

type ModuleTile = {
  title: string;
  insight: string;
  icon: IconType;
};

const HERO_BADGES: HeroBadge[] = [
  {
    label: "WordPress headline",
    detail: "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Nicaragua – NI."
  },
  {
    label: "Gateway priority",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout."
  },
  {
    label: "Continents referenced",
    detail: "Africa · Asia · Europe · North America · Oceania · South America."
  }
];

const GATEWAY_CANVAS: GatewayCanvas[] = [
  {
    name: "PayPal & Amazon Pay revenue runway",
    summary: "Retail, wellness, and ecommerce programmes across Managua, León, and diaspora markets.",
    bullets: [
      "Multi currency analytics align NIO, USD, and regional wallets with treasury readiness.",
      "Emails module distributes settlement stories, compliance notices, and campaign updates."
    ],
    icon: Storefront
  },
  {
    name: "PayU & Stripe digital studio",
    summary: "Subscription clubs and AI storefronts covering Central America, North America, and Europe.",
    bullets: [
      "Ticket system orchestrates PSP escalations, regulatory dialogues, and partner enablement.",
      "Auto responder powers multilingual onboarding, promotions, and retention prompts."
    ],
    icon: ShootingStar
  },
  {
    name: "Authorize.Net & Braintree trust canopy",
    summary: "North American acquiring aligned with Nicaraguan compliance, AML, and data standards.",
    bullets: [
      "KYC documentation vault guards identity dossiers, sanction results, and renewal reminders.",
      "Backup manager secures payout logic, continuity plans, and audit-ready artefacts."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion framework",
    summary: "Enterprise routing for tourism, agriculture, and fintech alliances across continents.",
    bullets: [
      "E-wallet manager streams commissions and reimbursements with maker-checker governance.",
      "E-voucher workflows energise loyalty programmes, field incentives, and events."
    ],
    icon: ChartLineUp
  }
];

const INITIATIVES: Initiative[] = [
  {
    phase: "Initiative 01",
    title: "Decode the legacy narrative",
    description: "Transform the WordPress headline, gateway roster, and navigation lists into actionable requirements.",
    icon: ClipboardText
  },
  {
    phase: "Initiative 02",
    title: "Engineer compliance scaffolding",
    description: "Blend multi currency, KYC, and automation pillars with Nicaraguan and global obligations.",
    icon: ShieldCheck
  },
  {
    phase: "Initiative 03",
    title: "Activate continental collaboration",
    description: "Link Central America with partners in Africa, Asia, Europe, North America, Oceania, and South America.",
    icon: UsersThree
  },
  {
    phase: "Initiative 04",
    title: "Optimise with AI telemetry",
    description: "Forecast conversions, detect risk, and refine programmes using predictive insight.",
    icon: Lightning
  }
];

const MODULE_TILES: ModuleTile[] = [
  {
    title: "Multi currency module",
    insight: "Balances NIO, USD, EUR, and digital tender with treasury-grade analytics.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    insight: "Routes PSP, regulator, and distributor requests with SLA dashboards and ownership clarity.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    insight: "Delivers multilingual coaching, compliance alerts, and campaign flows automatically.",
    icon: ShootingStar
  },
  {
    title: "E-voucher",
    insight: "Issues incentives, loyalty rewards, and event passes with redemption telemetry.",
    icon: PlugsConnected
  },
  {
    title: "E-wallet",
    insight: "Streams commissions and reimbursements with maker-checker protection.",
    icon: ShieldCheck
  },
  {
    title: "Backup manager",
    insight: "Safeguards payout logic, AI prompts, and audit artefacts across connectivity shifts.",
    icon: ClipboardText
  },
  {
    title: "Emails",
    insight: "Central command for transactional, regulatory, and promotional messaging.",
    icon: UsersThree
  },
  {
    title: "KYC documentation",
    insight: "Maintains identity trails, sanction checks, and renewal cadences for oversight.",
    icon: ChartLineUp
  },
  {
    title: "Multi-lingual system",
    insight: "Extends English workflows into Spanish and regional communications seamlessly.",
    icon: PlugsConnected
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Nicaragua MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Nicaragua – NI, activating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with governance automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/nicaragua", locale)
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

type NicaraguaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NicaraguaPaymentGatewaysPage({ params }: NicaraguaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-slate-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.24),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(245,158,11,0.24),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(248,113,113,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.36),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(245,158,11,0.36),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(248,113,113,0.3),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-700 dark:border-amber-500/60 dark:bg-slate-950/70 dark:text-amber-100">
                Ways to accept payments · Nicaragua (NI)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Nicaragua&apos;s MLM payment gateways transformed for continental growth
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We elevate the WordPress outline into a corporate-grade experience. Finance, compliance, and field
                  leaders orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with
                  AI-guided telemetry covering every referenced continent.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
                >
                  <Link href={contactHref}>
                    Plan the Nicaragua rollout
                    <Lightning className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-amber-200 bg-white/80 text-amber-700 hover:bg-amber-100 dark:border-amber-500/40 dark:bg-transparent dark:text-amber-100 dark:hover:bg-amber-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.75rem] border border-amber-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
              {HERO_BADGES.map((badge) => (
                <div key={badge.label} className="rounded-[1.75rem] border border-amber-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-200">
                    {badge.label}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{badge.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway canvas derived from the original roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a programme with telemetry, compliance, and growth guidance for Nicaragua.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_CANVAS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-amber-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-amber-500/60 dark:bg-amber-300" />
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
        <div className="grid gap-10 rounded-[3rem] border border-amber-200/70 bg-gradient-to-br from-white via-amber-50 to-slate-100 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-amber-600 dark:border-amber-500/40 dark:bg-slate-900 dark:text-amber-200">
              Continental collaboration
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Six-continent oversight from a Nicaragua command centre
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The legacy navigation listed Africa, Asia, Europe, North America, Oceania, and South America. We translate
              those references into telemetry, compliance alerts, and AI copilots for leadership alignment.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-amber-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator readiness</p>
                <p>Exportable evidence of AML, tax, and data governance obligations across continents.</p>
              </div>
              <div className="rounded-3xl border border-amber-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI-guided operations</p>
                <p>Scenario testing, anomaly detection, and campaign optimisation built into every programme.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {INITIATIVES.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <article
                    key={initiative.phase}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-amber-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-200">
                          {initiative.phase}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{initiative.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{initiative.description}</p>
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
            Modules activated for Nicaragua&apos;s network
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            operate in concert.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_TILES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-amber-200/70 bg-gradient-to-br from-white via-white to-amber-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-slate-800 dark:text-amber-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{module.title}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{module.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise Nicaragua&apos;s payment gateways?
            </h2>
            <p className="text-sm text-amber-100/80">
              We help Nicaraguan MLM leaders evolve WordPress-era listings into telemetry-rich, AI-enabled operations.
              Collaborate with our product, compliance, and engineering strategists to validate your roadmap.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-amber-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-amber-100/80">Continents referenced across the source navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-amber-100/80">Gateway partners orchestrated for Nicaragua&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-amber-100/80">
              AI copilots track conversions, risk posture, and campaign health from Managua to global partners.
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
