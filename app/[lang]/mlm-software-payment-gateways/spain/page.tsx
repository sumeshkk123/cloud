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
  AirplaneTilt,
  Building,
  ChartLineUp,
  ChatsCircle,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Lightning,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  Translate,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayFramework = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  label: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModuleRow = {
  name: string;
  description: string;
  icon: IconType;
};

const INSIGHTS: Insight[] = [
  {
    title: "WordPress headline preserved",
    description:
      "“Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Spain - ES” anchors the hero while we elevate the experience.",
    icon: StackSimple
  },
  {
    title: "Gateway roster retained",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay ready for Spain with automation enriched.",
    icon: Plugs
  },
  {
    title: "PSD2-first choreography",
    description:
      "Multi currency, ticketing, autoresponder, KYC documentation, and multilingual journeys align with Spanish and EU compliance.",
    icon: ShieldCheck
  }
];

const GATEWAY_FRAMEWORKS: GatewayFramework[] = [
  {
    name: "PayPal + Amazon Pay retail expansion",
    summary: "Blend ecommerce and subscription storytelling for franchises, tourism, and lifestyle brands in Madrid and Barcelona.",
    bullets: [
      "Multi currency module balances EUR, USD, and GBP receipts with tolerance alerts for treasury teams.",
      "Emails module distributes bilingual receipts, VAT updates, and seasonal campaign briefs."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU + Stripe digital marketplace",
    summary: "Launch fintech, education, and wellness programmes across Spain, LATAM, and EU corridors with identical guardrails.",
    bullets: [
      "Ticket system module routes PSP escalations, partner onboarding, and SLA conversations.",
      "Auto responder orchestrates onboarding, renewal nudges, and compliance reminders in Spanish and English."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net + Braintree confidence runway",
    summary: "Retain North American partners while harmonising with Banco de España regulations and board expectations.",
    bullets: [
      "Backup manager snapshots settlement files and dispute narratives for audit readiness.",
      "KYC documentation vault stores identity proofs, beneficial ownership, and AML attestations."
    ],
    icon: Building
  },
  {
    name: "Adyen + 2Checkout expansion studio",
    summary: "Scale to Balearic Islands, Canary Islands, and wider EU while keeping CX and loyalty activated.",
    bullets: [
      "E-wallet module releases instant commissions with maker-checker governance.",
      "E-voucher engine powers loyalty, training, and seasonal incentives with redemption telemetry."
    ],
    icon: ChartLineUp
  }
];

const PHASES: Phase[] = [
  {
    label: "Phase 01",
    title: "Decode the WordPress archive",
    detail: "Capture the headline, gateway roster, and module list exactly as delivered in the export.",
    icon: StackSimple
  },
  {
    label: "Phase 02",
    title: "Engineer PSD2 compliance",
    detail: "Blend SCA, AML, and data residency requirements across finance, legal, and technology squads.",
    icon: ShieldCheck
  },
  {
    label: "Phase 03",
    title: "Automate Iberian operations",
    detail: "Ticketing, autoresponder, multilingual messaging, and backup manager connect growth and compliance rhythms.",
    icon: Lightning
  },
  {
    label: "Phase 04",
    title: "Expand to LATAM and EU partners",
    detail: "Extend Spain playbooks to Mexico, Colombia, Portugal, and France with unified telemetry.",
    icon: AirplaneTilt
  }
];

const MODULE_STACK: ModuleRow[] = [
  {
    name: "Multi currency module",
    description: "Balances EUR, USD, GBP, and LATAM currencies with automated reconciliation packs.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, compliance reviews, and partner questions with SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Automates Spanish and English onboarding, renewals, and compliance briefings.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Streams real-time commissions, reimbursements, and bonuses with maker-checker controls.",
    icon: UsersThree
  },
  {
    name: "E-voucher",
    description: "Delivers loyalty passes, training seats, and campaign coupons with redemption analytics.",
    icon: Sparkle
  },
  {
    name: "Backup manager",
    description: "Captures immutable snapshots of settlements, support logs, and compliance dossiers.",
    icon: GlobeHemisphereWest
  },
  {
    name: "Emails",
    description: "Distributes VAT updates, partner briefing notes, and executive dashboards.",
    icon: StackSimple
  },
  {
    name: "KYC documentation",
    description: "Secures identity evidence, corporate registrations, and AML attestations with renewal alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multilingual system",
    description: "Keeps Spanish, Catalan, Basque, and English journeys aligned across channels.",
    icon: Translate
  }
];

export const metadata: Metadata = {
  title: "Spain MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Spain with Cloud MLM Software’s PSD2-aligned, AI-ready operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/spain"
  },
  openGraph: {
    title: "Spain MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Spain - ES, reimagined with compliance, automation, and AI telemetry."
  }
};

type SpainPageProps = {
  params: { lang: SupportedLocale };
};

export default function SpainPaymentGatewayPage({ params }: SpainPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-red-950/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-16 h-48 w-48 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-900/40" />
          <div className="absolute bottom-12 right-24 h-56 w-56 rounded-full bg-red-200/60 blur-3xl dark:bg-red-900/40" />
          <div className="absolute top-1/3 right-1/3 h-32 w-32 rotate-12 rounded-full bg-white/50 blur-3xl dark:bg-white/10" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.63fr),minmax(0,0.37fr)]">
          <div className="space-y-10">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-red-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Spain (ES)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Spain - ES
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software has already built great systems for the greatest companies. The availability of the
                payment gateways supported for People&apos;s Democratic Republic of Spain - ES is now orchestrated with AI
                telemetry, PSD2 compliance, and multilingual journeys for Iberian growth.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-red-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/15 text-red-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground dark:text-white">{insight.title}</h2>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{insight.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Spain strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-red-300 text-red-900 hover:bg-red-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Request an AI-powered demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="gap-2 text-red-900 hover:bg-red-100 hover:text-red-900 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={gatewayHubHref}>
                  Explore all gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between gap-8 rounded-[3rem] border border-red-200/60 bg-white/80 p-10 shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-900 dark:text-red-200">
                Telemetry snapshot
              </p>
              <div className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                <p>
                  <span className="font-semibold text-foreground dark:text-white">8 payment gateways retained: </span>
                  PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.
                </p>
                <p>
                  <span className="font-semibold text-foreground dark:text-white">Modules reactivated: </span>
                  multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
                  and multilingual system.
                </p>
              </div>
            </div>
            <div className="space-y-3 rounded-[2.5rem] border border-red-200/60 bg-gradient-to-br from-white via-white to-amber-50 p-8 dark:border-white/10 dark:from-white/5 dark:via-white/5 dark:to-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-900 dark:text-red-200">
                Next best action
              </p>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Unify finance, compliance, and growth teams under one command centre that respects Spain&apos;s regulatory
                cadence and EU expectations.
              </p>
              <Button asChild className="gap-2 rounded-full">
                <Link href={pricingHref}>
                  Review pricing pathways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway frameworks for Spain&apos;s expansion
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The legacy roster gains automation, compliance choreography, and multilingual storytelling built for Spain, LATAM,
            and EU partners.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_FRAMEWORKS.map((framework) => {
            const Icon = framework.icon;
            return (
              <article
                key={framework.name}
                className="flex h-full flex-col gap-5 rounded-[2.75rem] border border-red-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{framework.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{framework.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {framework.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-red-500 dark:bg-white" aria-hidden />
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
        <div className="container space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Four phases to modernise Spain operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Respect the WordPress archive while embedding PSD2-ready governance, automation, and AI telemetry for Spanish and
              EU leadership teams.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-red-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/15 text-red-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-900 dark:text-red-200">
                        {phase.label}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{phase.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{phase.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr),minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress menu, orchestrated for Spain
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, autoresponder, e-wallet, e-voucher, backup manager, emails, KYC documentation, and
              multilingual journeys now deliver AI-enabled coordination for Spanish divisions and EU partners.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULE_STACK.slice(0, 5).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-red-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/15 text-red-900 dark:bg-white/10 dark:text-white">
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
            {MODULE_STACK.slice(5).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-[2.75rem] border border-red-200/60 bg-gradient-to-br from-white via-white to-amber-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/15 text-red-900 dark:bg-white/10 dark:text-white">
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
        <div className="grid gap-10 rounded-[3rem] border border-red-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.62fr),minmax(0,0.38fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100/90">
              Cloud MLM Software · Spain expansion
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Operationalise Spain with AI-enabled payment pathways
            </h2>
            <p className="text-sm text-amber-100/80">
              Our consultants convert the WordPress export into a living operating system. Finance, compliance, and growth
              teams collaborate on PSD2-aligned payment experiences spanning Spain and EU partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-amber-100">
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
                <Link href={demoHref}>
                  Schedule a guided walkthrough
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/10 p-8 backdrop-blur">
            <div className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/80">Execution snapshot</p>
              <ul className="space-y-3 text-sm text-amber-100/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  <span>PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated end-to-end.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  <span>Ticketing, autoreponder, multilingual, and backup modules wired into a single telemetry layer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  <span>KYC documentation and e-wallet governance tuned to Banco de España oversight.</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-amber-100/80">
              Bring Spain&apos;s expansion playbook to life with AI-ready orchestration that honours the WordPress source while
              accelerating growth.
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
