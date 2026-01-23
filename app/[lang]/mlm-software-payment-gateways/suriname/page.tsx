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
  ChartLineUp,
  ChatsCircle,
  CloudArrowUp,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Handshake,
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

type Signal = {
  title: string;
  detail: string;
  icon: IconType;
};

type Initiative = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Sequence = {
  stage: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
};

const SIGNALS: Signal[] = [
  {
    title: "WordPress headline preserved",
    detail:
      "“Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Suriname - SR” anchors the hero narrative.",
    icon: StackSimple
  },
  {
    title: "Gateway roster intact",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain ready for Suriname expansion.",
    icon: Plugs
  },
  {
    title: "Compliance mesh activated",
    detail:
      "Multi currency, ticket system, autoresponder, e-wallet, and multilingual journeys align with Central Bank of Suriname oversight.",
    icon: ShieldCheck
  }
];

const INITIATIVES: Initiative[] = [
  {
    name: "PayPal + Amazon Pay diaspora lane",
    summary: "Connect Paramaribo ventures with diaspora sponsors across the Netherlands, USA, and Caribbean.",
    bullets: [
      "Multi currency module balances SRD, USD, EUR, and CAD settlements with tolerance alerts.",
      "Emails module distributes bilingual donor updates, compliance notices, and treasury snapshots."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU + Stripe digital marketplace",
    summary: "Enable ecommerce, education, and tourism programmes across Suriname, LATAM, and EU corridors.",
    bullets: [
      "Ticket system module routes PSP escalations, onboarding, and support tickets into SLA dashboards.",
      "Auto responder automates onboarding, renewals, and regulatory reminders in Dutch and English."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net + Braintree assurance runway",
    summary: "Give North American partners familiar rails while satisfying Suriname banking governance.",
    bullets: [
      "Backup manager captures settlement files, dispute journals, and leadership commentary.",
      "KYC documentation vault secures identity proofs, licences, and AML attestations for audits."
    ],
    icon: Handshake
  },
  {
    name: "Adyen + 2Checkout expansion studio",
    summary: "Scale to Guyana, French Guiana, and Caribbean markets with unified loyalty orchestration.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker controls.",
      "E-voucher engine powers loyalty, training passes, and humanitarian stipends with analytics."
    ],
    icon: ChartLineUp
  }
];

const SEQUENCE: Sequence[] = [
  {
    stage: "Phase 01",
    headline: "Interpret the WordPress archive",
    detail: "Capture the hero, gateway roster, and module references without altering the original wording.",
    icon: StackSimple
  },
  {
    stage: "Phase 02",
    headline: "Engineer compliance choreography",
    detail: "Blend Central Bank of Suriname guidance, AML policies, and partner governance across teams.",
    icon: ShieldCheck
  },
  {
    stage: "Phase 03",
    headline: "Automate Suriname operations",
    detail: "Ticketing, autoresponder, multilingual, and backup manager keep finance and growth squads aligned.",
    icon: Lightning
  },
  {
    stage: "Phase 04",
    headline: "Extend to Caribbean and EU corridors",
    detail: "Replicate Suriname playbooks across the Caribbean and European diaspora with AI telemetry.",
    icon: AirplaneTilt
  }
];

const MODULES: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances SRD, USD, EUR, and CAD with automated reconciliation packs for leadership review.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, partner onboarding, and support requests through SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers Dutch and English onboarding, renewal, and compliance sequences within minutes.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Streams instant commissions, reimbursements, and loyalty payouts with maker-checker thresholds.",
    icon: UsersThree
  },
  {
    name: "E-voucher",
    description: "Issues loyalty passes, tourism packages, and training credits with redemption telemetry.",
    icon: Sparkle
  },
  {
    name: "Backup manager",
    description: "Captures immutable snapshots of settlements, dispute notes, and executive commentary.",
    icon: CloudArrowUp
  },
  {
    name: "Emails",
    description: "Keeps finance, compliance, and growth squads aligned with weekly digests and alerts.",
    icon: StackSimple
  },
  {
    name: "KYC documentation",
    description: "Secures identity proofs, licences, and AML declarations with renewal alerts and reviewer trails.",
    icon: ShieldCheck
  },
  {
    name: "Multilingual system",
    description: "Synchronises Dutch and English journeys across web, mobile, and AI chat assistants.",
    icon: Translate
  }
];

export const metadata: Metadata = {
  title: "Suriname MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Suriname with Cloud MLM Software’s compliance-ready, AI-enabled operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/suriname"
  },
  openGraph: {
    title: "Suriname MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Suriname - SR, elevated with automation, compliance, and AI telemetry."
  }
};

type SurinamePageProps = {
  params: { lang: SupportedLocale };
};

export default function SurinamePaymentGatewayPage({ params }: SurinamePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-lime-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-16 h-56 w-56 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute bottom-10 right-20 h-60 w-60 rounded-full bg-lime-200/60 blur-3xl dark:bg-lime-900/40" />
          <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-white/50 blur-3xl dark:bg-white/10" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-10">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Suriname (SR)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Suriname - SR
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software has already built great systems for the greatest companies. Suriname&apos;s WordPress export
                now becomes an AI-enabled operating system covering payments, compliance, and multilingual journeys across the
                Caribbean and EU.
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-emerald-200 pl-6 dark:border-white/20">
              {SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article key={signal.title} className="flex flex-col gap-2">
                    <span className="inline-flex items-center gap-3 text-sm font-semibold text-foreground dark:text-white">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-900 dark:bg-white/10 dark:text-white">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      {signal.title}
                    </span>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{signal.detail}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Suriname strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-300 text-emerald-900 hover:bg-emerald-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
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
                className="gap-2 text-emerald-900 hover:bg-emerald-100 hover:text-emerald-900 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={gatewayHubHref}>
                  Explore all payment gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between gap-6 rounded-[3rem] border border-emerald-200/60 bg-white/80 p-10 shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900 dark:text-emerald-200">
                Snapshot
              </p>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-white/70">
                <p>
                  <span className="font-semibold text-foreground dark:text-white">Gateways retained: </span>
                  PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, 2Checkout.
                </p>
                <p>
                  <span className="font-semibold text-foreground dark:text-white">Modules reactivated: </span>
                  multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
                  multilingual system.
                </p>
              </div>
            </div>
            <div className="space-y-3 rounded-[2.5rem] border border-emerald-200/60 bg-gradient-to-br from-white via-white to-lime-50 p-8 dark:border-white/10 dark:from-white/5 dark:via-white/5 dark:to-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-900 dark:text-emerald-200">
                Leadership alignment
              </p>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Finance, compliance, and growth squads gain shared telemetry on every settlement, commission, and regulatory
                checkpoint in Suriname and the diaspora.
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
            Gateway initiatives for Suriname&apos;s programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress roster evolves into compliance-ready, automation-rich playbooks for Suriname, LATAM, and EU growth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {INITIATIVES.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <article
                key={initiative.name}
                className="flex h-full flex-col gap-5 rounded-[2.75rem] border border-emerald-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{initiative.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{initiative.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {initiative.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
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
              Four-phase sequence for Suriname operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Respect the WordPress export, embed compliance guardrails, and expand through Caribbean and EU corridors with AI
              telemetry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SEQUENCE.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.stage}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900 dark:text-emerald-200">
                        {step.stage}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{step.headline}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{step.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr),minmax(0,0.42fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress menu, reimagined for Suriname
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, autoresponder, e-wallet, e-voucher, backup manager, emails, KYC documentation, and
              multilingual journeys drive AI-enabled operations for Suriname&apos;s leadership teams.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES.slice(0, 5).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-900 dark:bg-white/10 dark:text-white">
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
            {MODULES.slice(5).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-[2.75rem] border border-emerald-200/60 bg-gradient-to-br from-white via-white to-lime-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-900 dark:bg-white/10 dark:text-white">
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
        <div className="grid gap-10 rounded-[3rem] border border-emerald-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.62fr),minmax(0,0.38fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100/90">
              Cloud MLM Software · Suriname strategy
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Translate Suriname&apos;s WordPress export into an AI-ready command centre
            </h2>
            <p className="text-sm text-emerald-100/80">
              Our consultants orchestrate the retained gateways, modules, and compliance artefacts into a modern operations
              blueprint for Suriname and its diaspora.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-emerald-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100/80">Execution snapshot</p>
              <ul className="space-y-3 text-sm text-emerald-100/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  <span>PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated end-to-end.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  <span>Ticketing, autoresponder, multilingual, and backup modules unified as one telemetry layer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  <span>KYC documentation and e-wallet governance tuned to Central Bank of Suriname oversight.</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-emerald-100/80">
              Honour the WordPress source while unlocking an AI-enabled experience tailored to Suriname&apos;s global ambitions.
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
