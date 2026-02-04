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

type HeroColumn = {
  label: string;
  headline: string;
  copy: string;
  icon: IconType;
};

type GatewayTrack = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ProgrammeStage = {
  step: string;
  title: string;
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
  detail: string;
};

const HERO_COLUMNS: HeroColumn[] = [
  {
    label: "Legacy headline",
    headline: "Ways to accept payments from MLM Software in People’s Democratic Republic of San Marino – SM",
    copy:
      "The WordPress headline stays intact, protecting SEO equity while we redesign the operating model for 2025.",
    icon: Stack
  },
  {
    label: "Gateway roster",
    headline: "Eight partners preserved and modernised",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout gain compliance, FX, and telemetry guardrails.",
    icon: Plugs
  },
  {
    label: "Microstate advantage",
    headline: "Financial services, tourism, and e-governance at scale",
    copy:
      "San Marino’s cross-border programmes gain multi currency orchestration, EU alignment, and AI-enabled automation.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_TRACKS: GatewayTrack[] = [
  {
    name: "PayPal & Amazon Pay executive corridor",
    summary: "Enable boutique tourism, financial services, and cross-border memberships without friction.",
    bullets: [
      "Multi currency module reconciles EUR, USD, CHF, and GBP settlements with tolerance alerts.",
      "Emails module issues AI-personalised receipts, regulatory notices, and consent updates."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU & Stripe innovation hub",
    summary: "Prototype digital services, e-governance portals, and membership experiences with developer tooling.",
    bullets: [
      "Ticket system module orchestrates PSP escalations, compliance queries, and stakeholder feedback.",
      "Auto responder automates onboarding, AML reminders, and investor relations updates."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net & Braintree trust spine",
    summary: "North American partners retain familiar rails while San Marino’s EU-aligned governance remains intact.",
    bullets: [
      "KYC documentation vault stores residency dossiers, beneficial ownership records, and due diligence artefacts.",
      "Backup manager protects settlement files, dispute logs, and auditor-ready commentary."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion lane",
    summary: "Connect the microstate with EU, UK, and global partners using unified analytics and automation.",
    bullets: [
      "E-wallet module releases instant commissions once acquiring partners confirm clear funds.",
      "E-voucher engine powers tourism bundles, partner rewards, and loyalty programmes."
    ],
    icon: RocketLaunch
  }
];

const PROGRAMME_STAGES: ProgrammeStage[] = [
  {
    step: "Stage A",
    title: "Interpret the WordPress archive",
    detail:
      "Capture the historic headline, gateway roster, and module references before reimagining the narrative for 2025.",
    icon: Compass
  },
  {
    step: "Stage B",
    title: "Engineer EU-aligned compliance",
    detail:
      "Blend EU AMLD directives, GDPR obligations, and local regulator expectations with AI-assisted workflows.",
    icon: ClipboardText
  },
  {
    step: "Stage C",
    title: "Automate cross-border operations",
    detail:
      "Ticketing, backups, multilingual messaging, and analytics connect finance, compliance, and partner teams.",
    icon: Lightning
  },
  {
    step: "Stage D",
    title: "Extend San Marino thought leadership",
    detail:
      "Scenario modelling for Italy, Switzerland, Luxembourg, and Monaco accelerates expansion with AI telemetry.",
    icon: ChartLineUp
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances EUR, USD, CHF, and GBP flows with predictive variance alerts for finance leaders.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, regulatory queries, and stakeholder feedback into SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    description: "Delivers Italian, English, and German messaging without fragmenting brand identity.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    description: "Automates onboarding, compliance reminders, and investor communications with AI tone controls.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Streams instant commissions, reimbursements, and partner incentives with maker-checker governance.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    description: "Issues tourism passes, partner rewards, and event invitations with redemption analytics.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    description: "Secures due diligence reports, residency evidence, and AML artefacts with renewal alerts.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    description: "Safeguards settlements, dispute trails, and analytics across EU-aligned infrastructure.",
    icon: DeviceMobileCamera
  }
];

const METRICS: Metric[] = [
  {
    label: "Gateway partners uplifted",
    value: "8",
    detail: "Retained from WordPress, modernised with compliance and AI telemetry."
  },
  {
    label: "Programme stages",
    value: "4",
    detail: "Archive interpretation through EU expansion."
  },
  {
    label: "AI copilots active",
    value: "3",
    detail: "Monitoring conversions, compliance posture, and commissions in real time."
  }
];

export const metadata: Metadata = {
  title: "San Marino MLM Payment Gateways | Cloud MLM Software",
  description:
    "Upgrade PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for San Marino with Cloud MLM Software’s AI-enabled, compliance-first operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/san-marino"
  },
  openGraph: {
    title: "San Marino MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in San Marino—preserving the WordPress narrative while adding EU-grade automation and AI telemetry."
  }
};

type SanMarinoPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SanMarinoPaymentGatewayPage({ params }: SanMarinoPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-900/40" />
          <div className="absolute bottom-10 right-16 h-60 w-60 rounded-full bg-slate-200/60 blur-3xl dark:bg-slate-900/40" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr),minmax(0,0.35fr)]">
          <div className="space-y-6 text-foreground dark:text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-blue-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · San Marino (SM)
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Ways to accept payments from MLM Software in People’s Democratic Republic of San Marino – SM
            </h1>
            <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
              Cloud MLM Software keeps the WordPress headline intact while delivering an AI-enabled operating model for
              San Marino. Financial services, tourism, fintech, and e-governance initiatives gain multi currency
              orchestration, compliance guardrails, and automation designed for a European microstate.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {HERO_COLUMNS.map((column) => {
                const Icon = column.icon;
                return (
                  <article
                    key={column.label}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-blue-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                          {column.label}
                        </p>
                        <h2 className="text-sm font-semibold text-foreground dark:text-white">{column.headline}</h2>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{column.copy}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a San Marino strategist
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
              <Link
                href={gatewayHubHref}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              >
                Explore other regions
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-900 dark:text-white/70">
              Telemetry snapshot
            </h2>
            <div className="grid gap-4">
              {METRICS.map((metric) => (
                <div key={metric.label} className="space-y-1 rounded-2xl border border-blue-200/60 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-3xl font-semibold text-blue-900 dark:text-white">{metric.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 dark:text-blue-200">{metric.label}</p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway tracks for San Marino’s cross-border ambitions
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The original WordPress roster now gains compliance, automation, and AI telemetry to support financial services,
            tourism, and e-governance across Europe.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-blue-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{track.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{track.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {track.bullets.map((bullet) => (
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
        <div className="container space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Four stages to modernise San Marino operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Preserve the WordPress narrative while introducing EU-grade compliance, automation, and AI telemetry for
              microstate leaders.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {PROGRAMME_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.step}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-blue-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 dark:text-blue-200">
                        {stage.step}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{stage.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stage.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress menu, reimagined for San Marino
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules combine into an AI-enabled command centre for microstate ambitions.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULE_CARDS.slice(0, 4).map((module) => {
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
          <div className="space-y-4">
            {MODULE_CARDS.slice(4).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-slate-200/60 bg-gradient-to-br from-white via-white to-slate-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-500/15 text-slate-800 dark:bg-white/10 dark:text-white">
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
              Ready to operationalise San Marino payment gateways?
            </h2>
            <p className="text-sm text-blue-100/80">
              Partner with Cloud MLM Software to convert your WordPress briefing into an AI-enabled, EU-aligned operating
              model. Align finance, compliance, and partner teams across San Marino and neighbouring states.
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100/80">Command centre snapshot</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/70">{metric.label}</p>
                    <p className="text-sm text-blue-100/80">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-blue-100/80">
              AI copilots monitor conversions, compliance posture, and commission velocity so San Marino leaders can scale
              with confidence.
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
