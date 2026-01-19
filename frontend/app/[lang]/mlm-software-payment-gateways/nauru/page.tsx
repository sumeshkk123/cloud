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
  AirplaneTilt,
  Buildings,
  ChartLineUp,
  CirclesThreePlus,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  PlugsConnected,
  ShieldCheck,
  Stack,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayCard = {
  headline: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type DeliveryPhase = {
  label: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModuleSignal = {
  name: string;
  insight: string;
  icon: IconType;
};

const HERO_FACTS: HeroFact[] = [
  {
    title: "WordPress headline honoured",
    description: "“Ways to accept payments from MLM Software in People’s Democratic Republic of Nauru – NR” remains our anchor message.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway coalition aligned",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout operate inside one secure console.",
    icon: PlugsConnected
  },
  {
    title: "Global reach in focus",
    description: "Oceania launches connect with Asia, Europe, Africa, and the Americas for cross-border partner orchestration.",
    icon: AirplaneTilt
  }
];

const GATEWAY_CARDS: GatewayCard[] = [
  {
    headline: "PayPal & Amazon Pay acceleration lanes",
    summary: "Digital-first payouts for Nauru’s diaspora distributors and ecommerce cohorts.",
    bullets: [
      "Multi currency engine balances AUD, USD, and emerging tokens with automated variance dashboards.",
      "Emails module produces AI-personalised settlement alerts, tax receipts, and compliance nudges."
    ],
    icon: Stack
  },
  {
    headline: "PayU & Stripe innovation backbone",
    summary: "Developer-friendly APIs and regional reach for subscription clubs and kits.",
    bullets: [
      "Ticket system captures PSP escalations, regulator questions, and field feedback in one queue.",
      "Auto responder blends onboarding playbooks with instant distributor coaching prompts."
    ],
    icon: Lightning
  },
  {
    headline: "Authorize.Net & Braintree trust layers",
    summary: "North American partner rails meet Nauru’s compliance expectations seamlessly.",
    bullets: [
      "KYC documentation vault stores identity evidence, sanction checks, and renewal cadences.",
      "Backup manager preserves payout scenarios, auditor artefacts, and disaster recovery plans."
    ],
    icon: ShieldCheck
  },
  {
    headline: "Adyen & 2Checkout expansion fabric",
    summary: "Enterprise-grade acquiring with regional routing intelligence for fast-moving launches.",
    bullets: [
      "E-wallet manager synchronises commissions, bonuses, and reimbursements with maker-checker controls.",
      "E-voucher workflows distribute campaign rewards, event passes, and loyalty perks instantly."
    ],
    icon: ChartLineUp
  }
];

const DELIVERY_PHASES: DeliveryPhase[] = [
  {
    label: "Phase 01",
    title: "Interpret the legacy briefing",
    detail: "Extract WordPress language, gateway roster, and module references to form the Nauru operating thesis.",
    icon: Buildings
  },
  {
    label: "Phase 02",
    title: "Engineer the compliance spine",
    detail: "Blend multi currency, KYC, and automation controls with Oceania-aligned governance patterns.",
    icon: ShieldCheck
  },
  {
    label: "Phase 03",
    title: "Launch cross-border collaboration",
    detail: "Equip finance, field, and partner leaders with dashboards spanning Oceania, Asia, and the Americas.",
    icon: UsersThree
  },
  {
    label: "Phase 04",
    title: "Optimise with AI telemetry",
    detail: "Iterate payouts, risk scoring, and campaign ROI using predictive analytics and scenario testing.",
    icon: Lightning
  }
];

const MODULE_SIGNALS: ModuleSignal[] = [
  {
    name: "Multi currency module",
    insight: "Balances AUD, USD, and virtual tender while surfacing FX variances for leadership in real time.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    insight: "Routes PSP cases, regulatory notices, and distributor support into SLA-driven workstreams.",
    icon: CirclesThreePlus
  },
  {
    name: "Auto responder",
    insight: "Delivers multilingual nurturing, compliance alerts, and event reminders without manual lag.",
    icon: Lightning
  },
  {
    name: "E-voucher",
    insight: "Issues reward vouchers, training passes, and loyalty boosters with redemption analytics.",
    icon: PlugsConnected
  },
  {
    name: "E-wallet",
    insight: "Instant commissions and reimbursements layered with maker-checker protection for fiduciary trust.",
    icon: ShieldCheck
  },
  {
    name: "Backup manager",
    insight: "Safeguards payout logic, AI prompts, and operational artefacts against island connectivity shifts.",
    icon: Buildings
  },
  {
    name: "Emails",
    insight: "Centralises brand, regulatory, and transactional communications with deliverability insight.",
    icon: UsersThree
  },
  {
    name: "KYC documentation",
    insight: "Maintains distributor identity narratives with renewal reminders and regulator-ready exports.",
    icon: GlobeHemisphereEast
  },
  {
    name: "Multi-lingual system",
    insight: "Expands English-first journeys to Pacific languages and AI assistants without fragmenting governance.",
    icon: AirplaneTilt
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Nauru MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People’s Democratic Republic of Nauru – NR, uniting PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with governance automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/nauru", locale)
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

type NauruPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function NauruPaymentGatewaysPage({ params }: NauruPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-cyan-200/60 bg-gradient-to-br from-cyan-50 via-white to-slate-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(6,182,212,0.28),transparent_55%),radial-gradient(circle_at_88%_8%,rgba(14,165,233,0.24),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(56,189,248,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_10%,rgba(6,182,212,0.35),transparent_55%),radial-gradient(circle_at_88%_8%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:border-cyan-500/50 dark:bg-slate-950/70 dark:text-cyan-200">
                Ways to accept payments · Nauru (NR)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Nauru’s MLM payment gateways orchestrated for compliant, AI-ready scale
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software translates the legacy WordPress outline into a corporate-grade experience for
                  finance, compliance, and field innovators. PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree,
                  Adyen, and 2Checkout operate within one telemetry-rich cockpit for People’s Democratic Republic of
                  Nauru.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400"
                >
                  <Link href={contactHref}>
                    Plan the Nauru rollout
                    <Lightning className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-cyan-200 bg-white/80 text-cyan-700 hover:bg-cyan-100 dark:border-cyan-500/50 dark:bg-transparent dark:text-cyan-100 dark:hover:bg-cyan-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {HERO_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article
                    key={fact.title}
                    className="rounded-3xl border border-cyan-200/60 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{fact.title}</h2>
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
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway programmes translated from the WordPress roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            The eight highlighted processors become curated programmes for compliance, growth, and partner confidence
            across Oceania and beyond.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.headline}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-cyan-200/60 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.headline}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{card.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500/60 dark:bg-cyan-300" />
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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center">
          <div className="rounded-[2.75rem] border border-cyan-200/60 bg-gradient-to-br from-cyan-50 via-white to-slate-100 p-10 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:border-cyan-500/40 dark:bg-slate-900 dark:text-cyan-200">
                Oceania · Asia · Americas
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight">
                Global collaboration from a Nauru command centre
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                The WordPress navigation pointed to regional coverage across Africa, Asia, Europe, North America,
                Oceania, and South America. We translate that intent into a living operations room: real-time dashboards,
                compliance alerts, and AI copilots that keep every geography aligned with Nauru leadership.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="rounded-3xl border border-cyan-200/60 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="font-semibold text-slate-900 dark:text-white">Thought leadership hub</p>
                  <p>Insights for regulators, banking partners, and distributor councils.</p>
                </div>
                <div className="rounded-3xl border border-cyan-200/60 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="font-semibold text-slate-900 dark:text-white">AI-optimised workflows</p>
                  <p>Scenario testing, anomaly detection, and campaign optimisation tuned for Nauru.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {DELIVERY_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.label}
                  className="flex gap-4 rounded-[2.5rem] border border-cyan-200/60 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-200">
                      {phase.label}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{phase.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Control modules activated</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Every module referenced in the source navigation – multi currency, ticketing, automations, vouchers, wallets,
            backup, emails, KYC, and multi-lingual – now lives inside an AI-ready control tower for Nauru.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_SIGNALS.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-cyan-200/60 bg-gradient-to-br from-white via-white to-cyan-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{module.name}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{module.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-cyan-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Nauru’s payment gateways?
            </h2>
            <p className="text-sm text-cyan-100/90">
              We help ML leaders transform WordPress-era blueprints into AI-aware operations. Connect with our product,
              compliance, and engineering strategists to validate your next milestone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-cyan-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-cyan-100/80">Continents referenced across the legacy navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-cyan-100/80">Gateway partners orchestrated for Nauru’s distributors.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-cyan-100/80">
              New AI copilots monitor conversions, anomalies, and PSP posture so you can lead with confidence from Nauru
              to the world.
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
