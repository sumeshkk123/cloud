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
  CloudArrowUp,
  Compass,
  CurrencyCircleDollar,
  Gift,
  GlobeHemisphereEast,
  HandCoins,
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
  detail: string;
  icon: IconType;
};

type Stream = {
  name: string;
  description: string;
  actions: string[];
  icon: IconType;
};

type Milestone = {
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

const INSIGHTS: Insight[] = [
  {
    title: "WordPress narrative honoured",
    detail:
      "“Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sri Lanka - LK” leads the hero while we modernise delivery.",
    icon: StackSimple
  },
  {
    title: "Gateway ensemble retained",
    detail: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay operational for Sri Lanka.",
    icon: Plugs
  },
  {
    title: "CBSL-ready orchestration",
    detail:
      "Multi currency, ticket system, autoresponder, e-wallet, and multilingual journeys align with Central Bank of Sri Lanka directives.",
    icon: ShieldCheck
  }
];

const STREAMS: Stream[] = [
  {
    name: "PayPal + Amazon Pay diaspora bridge",
    description: "Connect Colombo innovators with global diaspora sponsors without losing audit readiness.",
    actions: [
      "Multi currency module balances LKR, USD, GBP, and AUD settlements with tolerance alerts.",
      "Emails module distributes bilingual donor acknowledgements, compliance notices, and settlement digests."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU + Stripe omnichannel runway",
    description: "Empower ecommerce, education, and wellness programmes across Sri Lanka and South Asia.",
    actions: [
      "Ticket system module routes PSP escalations and agent requests into SLA-backed dashboards.",
      "Auto responder automates onboarding, subscription renewals, and regulatory reminders in Sinhala, Tamil, and English."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net + Braintree assurance deck",
    description: "Give North American partners familiar rails while satisfying CBSL and FIU expectations.",
    actions: [
      "Backup manager snapshots settlement files, dispute journals, and leadership commentary.",
      "KYC documentation vault keeps identity proofs, business licences, and AML attestations inspection-ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen + 2Checkout expansion studio",
    description: "Scale programmes to Maldives, India, and the wider SAARC corridor with loyalty in sync.",
    actions: [
      "E-wallet module streams instant commissions with maker-checker thresholds for higher ranks.",
      "E-voucher engine powers incentives, training passes, and seasonal campaigns with redemption analytics."
    ],
    icon: ChartLineUp
  }
];

const MILESTONES: Milestone[] = [
  {
    stage: "Phase 01",
    headline: "Decode the WordPress export",
    detail: "Capture the hero headline, gateway roster, and module list exactly as the archive presents it.",
    icon: StackSimple
  },
  {
    stage: "Phase 02",
    headline: "Align with CBSL governance",
    detail: "Blend Central Bank directives, AML policies, and data residency across finance, legal, and technology squads.",
    icon: ShieldCheck
  },
  {
    stage: "Phase 03",
    headline: "Automate Sri Lankan operations",
    detail: "Ticketing, autoresponder, multilingual messaging, and backup manager create one operational rhythm.",
    icon: Sparkle
  },
  {
    stage: "Phase 04",
    headline: "Expand throughout SAARC",
    detail: "Replicate Sri Lanka blueprints in India, Maldives, and Bangladesh with AI telemetry and shared playbooks.",
    icon: Compass
  }
];

const MODULES: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances LKR, USD, GBP, and AUD flows with automated reconciliation packs for CFO sign-off.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Channels PSP escalations, distributor requests, and compliance reviews into SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers Sinhala, Tamil, and English onboarding, renewal, and compliance sequences within minutes.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Streams instant commissions, reimbursements, and incentives with maker-checker thresholds.",
    icon: UsersThree
  },
  {
    name: "E-voucher",
    description: "Issues loyalty passes, training credits, and humanitarian stipends with redemption telemetry.",
    icon: Gift
  },
  {
    name: "Backup manager",
    description: "Captures immutable snapshots of settlements, dispute journals, and leadership commentary.",
    icon: CloudArrowUp
  },
  {
    name: "Emails",
    description: "Keeps finance, compliance, and growth teams aligned with digestible weekly briefings.",
    icon: StackSimple
  },
  {
    name: "KYC documentation",
    description: "Secures identity proofs, licences, and AML declarations with renewal alerts and reviewer trails.",
    icon: ShieldCheck
  },
  {
    name: "Multilingual system",
    description: "Synchronises Sinhala, Tamil, and English journeys across web, mobile, and AI chat assistants.",
    icon: Translate
  }
];

export const metadata: Metadata = {
  title: "Sri Lanka MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Sri Lanka with Cloud MLM Software’s CBSL-aligned, AI-ready operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/sri-lanka"
  },
  openGraph: {
    title: "Sri Lanka MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sri Lanka - LK, reimagined with compliance, automation, and AI telemetry."
  }
};

type SriLankaPageProps = {
  params: { lang: SupportedLocale };
};

export default function SriLankaPaymentGatewayPage({ params }: SriLankaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-10 h-52 w-52 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute bottom-10 right-16 h-60 w-60 rounded-full bg-teal-200/60 blur-3xl dark:bg-teal-900/40" />
          <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-white/50 blur-3xl dark:bg-white/10" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-10">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Sri Lanka (LK)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sri Lanka - LK
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software has already built great systems for the greatest companies. Sri Lanka&apos;s WordPress export
                now becomes an AI-enabled control room covering payments, compliance, and multilingual engagement across SAARC.
              </p>
            </div>
            <div className="space-y-4">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.title}
                    className="flex items-start gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h2 className="text-sm font-semibold text-foreground dark:text-white">{insight.title}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{insight.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Sri Lanka strategist
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
                  <span className="font-semibold text-foreground dark:text-white">Gateways: </span>
                  PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.
                </p>
                <p>
                  <span className="font-semibold text-foreground dark:text-white">Modules: </span>
                  multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
                  multilingual system.
                </p>
              </div>
            </div>
            <div className="space-y-3 rounded-[2.5rem] border border-emerald-200/60 bg-gradient-to-br from-white via-white to-emerald-50 p-8 dark:border-white/10 dark:from-white/5 dark:via-white/5 dark:to-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-900 dark:text-emerald-200">
                Leadership alignment
              </p>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Finance, compliance, and technology squads gain shared telemetry on every settlement, commission, and regulatory
                checkpoint in Sri Lanka.
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
            Gateway streams for Sri Lanka&apos;s growth
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each pairing from the WordPress archive now carries automation, compliance, and multilingual storytelling for Sri
            Lanka and SAARC.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.name}
                className="flex h-full flex-col gap-5 rounded-[2.75rem] border border-emerald-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{stream.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{stream.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {stream.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
                      <span>{action}</span>
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
              Operational phases for Sri Lanka programmes
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Respect the WordPress archive, embed CBSL-aligned governance, and expand across SAARC with unified telemetry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((milestone) => {
              const Icon = milestone.icon;
              return (
                <article
                  key={milestone.stage}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900 dark:text-emerald-200">
                        {milestone.stage}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{milestone.headline}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{milestone.detail}</p>
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
              Modules from the WordPress menu, tuned for Sri Lanka
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, autoresponder, e-wallet, e-voucher, backup manager, emails, KYC documentation, and
              multilingual journeys become an AI-ready command centre for Sri Lanka&apos;s leadership teams.
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
                  className="flex h-full flex-col gap-3 rounded-[2.75rem] border border-emerald-200/60 bg-gradient-to-br from-white via-white to-emerald-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
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
              Cloud MLM Software · Sri Lanka strategy
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Operationalise Sri Lanka with AI-ready payment pathways
            </h2>
            <p className="text-sm text-emerald-100/80">
              Our consultants transform the WordPress archive into a living operating system, uniting finance, compliance, and
              growth leaders across Sri Lanka and SAARC.
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
                  <span>KYC documentation and e-wallet governance tuned to Central Bank of Sri Lanka oversight.</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-emerald-100/80">
              Leverage AI-ready orchestration that respects the WordPress source while accelerating Sri Lanka&apos;s regional
              expansion.
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
