import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight } from "lucide-react";
import {
  ChartLineUp,
  ChatsCircle,
  ClipboardText,
  Compass,
  CurrencyCircleDollar,
  DeviceMobileCamera,
  GlobeHemisphereWest,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  Stack,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  label: string;
  title: string;
  copy: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  tagline: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  step: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
};

type Metric = {
  label: string;
  value: string;
  description: string;
};

const INSIGHTS: Insight[] = [
  {
    label: "Legacy briefing",
    title: "We preserve the WordPress headline while elevating it for 2025.",
    copy:
      "“Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Kitts and Nevis – KN” remains our North Star so historic SEO equity stays intact.",
    icon: Stack
  },
  {
    label: "Gateway roster",
    title: "Eight payment partners stay in focus for the islands.",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout are modernised with compliance workflows, AI telemetry, and distributor enablement.",
    icon: Plugs
  },
  {
    label: "Caribbean context",
    title: "Tourism, financial services, and citizenship programmes demand clarity.",
    copy:
      "We align the multi currency, multilingual, ticketing, and backup modules to support XCD, USD, and GBP flows across OECS regulations and global sponsor journeys.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal & Amazon Pay diaspora bridge",
    tagline: "Connect sponsors in London, Miami, Toronto, and Basseterre without friction.",
    bullets: [
      "Multi currency module reconciles XCD, USD, CAD, and GBP settlements with auditor-ready commentary.",
      "Emails module crafts AI-personalised acknowledgements, tax receipts, and consent updates for every country."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU & Stripe omnichannel runway",
    tagline: "Blend ecommerce, field events, and subscription-led clubs across the dual-island market.",
    bullets: [
      "Ticket system module captures PSP escalations, shipping feedback, and FX issues in one SLA-governed queue.",
      "Auto responder delivers multilingual onboarding, compliance nudges, and event reminders within minutes."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net & Braintree trust spine",
    tagline: "Give global enterprises familiar rails with Saint Kitts and Nevis regulatory guardrails.",
    bullets: [
      "KYC documentation vault stores citizenship-by-investment evidence, beneficial ownership records, and renewal cadences.",
      "Backup manager protects settlement files, chargeback artefacts, and ECB inspection notes for continuity."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion corridor",
    tagline: "Forecast cross-border growth into OECS neighbours and remote markets.",
    bullets: [
      "E-wallet module releases instant commissions once acquiring partners confirm clear funds.",
      "E-voucher engine powers promo codes, referral rewards, and loyalty kits with redemption analytics."
    ],
    icon: RocketLaunch
  }
];

const PHASES: Phase[] = [
  {
    step: "Stage 01",
    headline: "Interpret the WordPress archive",
    detail:
      "Extract the legacy headline, gateway list, and module references so SEO, voice, and stakeholder memory are honoured before we innovate.",
    icon: Compass
  },
  {
    step: "Stage 02",
    headline: "Engineer compliance choreography",
    detail:
      "Organise Eastern Caribbean Central Bank guidelines, AML controls, and data residency requirements into auditable checklists.",
    icon: ShieldCheck
  },
  {
    step: "Stage 03",
    headline: "Activate AI-first operations",
    detail:
      "Ticketing, backups, multilingual content, and analytics sync into live dashboards for finance, field, and partner leads.",
    icon: Lightning
  },
  {
    step: "Stage 04",
    headline: "Expand across the Caribbean corridor",
    detail:
      "Scenario models surface opportunities in Saint Maarten, Antigua, Dominica, and beyond, with repeatable launch playbooks.",
    icon: ChartLineUp
  }
];

const MODULES: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances XCD, USD, GBP, and EUR inflows with tolerance alerts and CFO-friendly reporting.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP cases, field escalations, and regulator questions with SLA governance and AI summaries.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    description: "Delivers English, Spanish, and French Caribbean experiences without fragmenting brand voice.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    description: "Automates onboarding journeys, payout alerts, and compliance notices across email, SMS, and chat.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Provides instant commissions, reimbursements, and loyalty payouts with maker-checker controls.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    description: "Issues promotional vouchers, event passes, and referral bonuses with redemption analytics.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    description: "Secures passports, source-of-funds evidence, and consent artefacts with renewal reminders.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    description: "Safeguards settlements, audit trails, and risk logs across multi-region infrastructure.",
    icon: DeviceMobileCamera
  }
];

const METRICS: Metric[] = [
  {
    label: "Gateway roster",
    value: "8",
    description: "Partners uplifted from the WordPress export with new automation layers."
  },
  {
    label: "Regional playbooks",
    value: "6",
    description: "Caribbean and diaspora launch blueprints readied for executive review."
  },
  {
    label: "AI copilots",
    value: "3",
    description: "Predictive monitors covering conversions, compliance, and commissioning."
  }
];

export const metadata: Metadata = {
  title: "Saint Kitts & Nevis MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Saint Kitts and Nevis with Cloud MLM Software’s AI-ready compliance and enablement.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/saint-kitts-and-nevis"
  },
  openGraph: {
    title: "Saint Kitts and Nevis MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Saint Kitts and Nevis—transformed with multi currency, compliance, and AI telemetrics."
  }
};

type SaintKittsPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SaintKittsAndNevisPaymentGatewayPage({ params }: SaintKittsPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/40" />
          <div className="absolute -bottom-32 right-12 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.75fr),minmax(0,0.55fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Saint Kitts and Nevis (KN)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Kitts and Nevis – KN
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software translates the WordPress-era briefing into an AIO-ready programme for Saint Kitts and
                Nevis. Multi currency, multilingual, ticketing, and backup modules align with gateway orchestration so your
                tourism, financial services, and diaspora networks scale with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Caribbean strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-blue-300 text-blue-900 hover:bg-blue-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the updated demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground dark:text-white/60">
              <span>Also explore</span>
              <Link href={gatewayHubHref} className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:underline dark:text-blue-200">
                MLM Software Payment Gateways
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Tailored for Saint Kitts and Nevis operations</span>
            </div>
          </div>
          <div className="grid gap-4">
            {INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.label}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-blue-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                        {insight.label}
                      </p>
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{insight.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{insight.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Caribbean-first payment gateway playbooks
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The original WordPress roster is transformed into strategic blueprints for Saint Kitts and Nevis—bridging
            tourism, financial services, and citizenship investors with precise compliance and AI telemetry.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-blue-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 dark:bg-white" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modern launch cadence for Saint Kitts and Nevis
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Every stage keeps the historic narrative while embedding governance, automation, and AI-ready insight for the
              dual-island nation and its global partners.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.step}
                  className="relative flex h-full flex-col gap-4 rounded-3xl border border-blue-200/50 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-200">
                        {phase.step}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{phase.headline}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{phase.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr),minmax(0,0.42fr)]">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress navigation, reimagined for 2025 scale
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules combine into one Caribbean-ready command centre. Each module receives automation hooks, AI copilots,
              and compliance guardrails tailored to Saint Kitts and Nevis regulators.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {MODULES.slice(0, 4).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-blue-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-3">
            {MODULES.slice(4).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-blue-200/60 bg-gradient-to-br from-white via-white to-blue-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-blue-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-blue-100/90">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Saint Kitts and Nevis payment gateways?
            </h2>
            <p className="text-sm text-blue-100/80">
              We modernise legacy briefs into AI-aware operating models. Partner with our product, compliance, and
              engineering leads to orchestrate Saint Kitts and Nevis launches—and unlock neighbouring Caribbean expansion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-blue-100">
                <Link href={contactHref}>
                  Connect with Cloud MLM Software
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
                  Review pricing pathways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/10 p-8 backdrop-blur">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100/80">Telemetry snapshot</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/70">{metric.label}</p>
                    <p className="text-sm text-blue-100/80">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-blue-100/80">
              Conversational AI copilots watch conversion patterns, compliance obligations, and commission health so leaders
              can steer Saint Kitts and Nevis operations with confidence.
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
