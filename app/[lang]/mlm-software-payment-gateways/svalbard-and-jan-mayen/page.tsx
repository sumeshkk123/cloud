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
  IceCream,
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

type Highlight = {
  title: string;
  detail: string;
  icon: IconType;
};

type Strategy = {
  name: string;
  summary: string;
  actions: string[];
  icon: IconType;
};

type Phase = {
  label: string;
  heading: string;
  detail: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "WordPress headline retained",
    detail:
      "“Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Svalbard and Jan Mayen - SJ” leads the hero.",
    icon: StackSimple
  },
  {
    title: "Gateway roster guaranteed",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain at the centre of polar operations.",
    icon: Plugs
  },
  {
    title: "Arctic-ready governance",
    detail:
      "Multi currency, ticket system, autoresponder, e-wallet, and multilingual modules align with Norwegian oversight and polar research partners.",
    icon: ShieldCheck
  }
];

const STRATEGIES: Strategy[] = [
  {
    name: "PayPal + Amazon Pay polar corridor",
    summary: "Support tourism, research, and expedition programmes without compromising compliance.",
    actions: [
      "Multi currency module balances NOK, EUR, USD, and GBP settlements with variance alerts.",
      "Emails module distributes bilingual itineraries, compliance updates, and donor briefings."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU + Stripe digital expeditions",
    summary: "Enable ecommerce, subscriptions, and logistics for Arctic operations and global sponsors.",
    actions: [
      "Ticket system module routes PSP escalations, field logistics, and partner requests into SLA dashboards.",
      "Auto responder automates onboarding, renewal, and regulatory reminders in Norwegian and English."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net + Braintree assurance",
    summary: "Keep North American partners confident while meeting Norwegian regulatory cadence.",
    actions: [
      "Backup manager snapshots settlement files, dispute logs, and leadership commentary.",
      "KYC documentation vault secures identity, licences, and AML artefacts for audit readiness."
    ],
    icon: IceCream
  },
  {
    name: "Adyen + 2Checkout expansion studio",
    summary: "Scale to polar research stations, tourism corridors, and global partners with unified loyalty orchestration.",
    actions: [
      "E-wallet module streams instant commissions with maker-checker thresholds for remote teams.",
      "E-voucher engine powers travel passes, research grants, and loyalty campaigns with analytics."
    ],
    icon: ChartLineUp
  }
];

const PHASES: Phase[] = [
  {
    label: "Phase 01",
    heading: "Decode the WordPress archive",
    detail: "Capture the hero headline, gateway roster, and module references exactly as preserved in the export.",
    icon: StackSimple
  },
  {
    label: "Phase 02",
    heading: "Engineer compliance choreography",
    detail: "Blend Norwegian regulatory guidance, AML policies, and expedition partner requirements.",
    icon: ShieldCheck
  },
  {
    label: "Phase 03",
    heading: "Automate polar operations",
    detail: "Ticketing, autoresponder, multilingual, and backup manager connect finance, compliance, and field teams.",
    icon: Lightning
  },
  {
    label: "Phase 04",
    heading: "Extend Arctic influence",
    detail: "Replicate Svalbard playbooks across research networks and tourism corridors with AI telemetry.",
    icon: AirplaneTilt
  }
];

const MODULES: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances NOK, EUR, USD, and GBP with automated reconciliation packs for leadership review.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, logistics, and support tickets through SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers Norwegian and English onboarding, renewal, and compliance sequences instantly.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Streams instant commissions, reimbursements, and expedition stipends with maker-checker controls.",
    icon: UsersThree
  },
  {
    name: "E-voucher",
    description: "Issues polar travel passes, research credits, and loyalty rewards with telemetry.",
    icon: Sparkle
  },
  {
    name: "Backup manager",
    description: "Captures immutable snapshots of settlements, dispute logs, and leadership commentary.",
    icon: CloudArrowUp
  },
  {
    name: "Emails",
    description: "Keeps finance, compliance, and expedition leads aligned with concise digests.",
    icon: StackSimple
  },
  {
    name: "KYC documentation",
    description: "Secures identity proofs, licences, and AML declarations with renewal alerts and reviewer trails.",
    icon: ShieldCheck
  },
  {
    name: "Multilingual system",
    description: "Synchronises Norwegian and English journeys across web, mobile, and AI chat assistants.",
    icon: Translate
  }
];

export const metadata: Metadata = {
  title: "Svalbard and Jan Mayen MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Svalbard and Jan Mayen with Cloud MLM Software’s compliance-ready, AI-enabled operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/svalbard-and-jan-mayen"
  },
  openGraph: {
    title: "Svalbard and Jan Mayen MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Svalbard and Jan Mayen - SJ, elevated with automation, compliance, and AI telemetry."
  }
};

type SvalbardPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SvalbardAndJanMayenPaymentGatewayPage({ params }: SvalbardPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/70">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-12 h-56 w-56 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
          <div className="absolute bottom-12 right-16 h-64 w-64 rounded-full bg-slate-200/60 blur-3xl dark:bg-slate-900/40" />
          <div className="absolute top-1/3 right-1/3 h-36 w-36 rounded-full bg-white/50 blur-3xl dark:bg-white/10" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.58fr),minmax(0,0.42fr)]">
          <div className="space-y-10">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Svalbard and Jan Mayen (SJ)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Svalbard and Jan Mayen - SJ
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software has already built great systems for the greatest companies. Svalbard and Jan Mayen&apos;s
                WordPress export becomes an AI-enabled operating system covering payments, compliance, and multilingual journeys
                for polar research, tourism, and logistics.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-sky-200/60 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground dark:text-white">{highlight.title}</h2>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.detail}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Svalbard strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-sky-300 text-sky-900 hover:bg-sky-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
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
                className="gap-2 text-sky-900 hover:bg-sky-100 hover:text-sky-900 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={gatewayHubHref}>
                  Explore all payment gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between gap-6 rounded-[3rem] border border-sky-200/60 bg-white/80 p-10 shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-900 dark:text-sky-200">Snapshot</p>
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
            <div className="space-y-3 rounded-[2.5rem] border border-sky-200/60 bg-gradient-to-br from-white via-white to-slate-100 p-8 dark:border-white/10 dark:from-white/5 dark:via-white/5 dark:to-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-900 dark:text-sky-200">
                Leadership alignment
              </p>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Finance, compliance, and expedition leaders gain shared telemetry on every settlement, commission, and regulatory
                checkpoint in the Arctic.
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
            Gateway strategies for Svalbard and Jan Mayen
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress roster now carries compliance, automation, and multilingual orchestration tailored to polar research
            and tourism programmes.
          </p>
        </div>
        <div className="space-y-6 border-l-2 border-sky-200 pl-6 dark:border-white/10">
          {STRATEGIES.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <article key={strategy.name} className="flex flex-col gap-4 rounded-[2.75rem] border border-sky-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{strategy.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{strategy.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {strategy.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-500 dark:bg-white" aria-hidden />
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
              Four phases for polar-ready operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Respect the WordPress archive while embedding compliance guardrails, automation, and AI telemetry for Arctic
              programmes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-900 dark:text-sky-200">
                        {phase.label}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{phase.heading}</h3>
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr),minmax(0,0.42fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress menu, orchestrated for Svalbard and Jan Mayen
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, autoresponder, e-wallet, e-voucher, backup manager, emails, KYC documentation, and
              multilingual journeys create an AI-ready command centre for polar teams.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES.slice(0, 5).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-sky-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-900 dark:bg-white/10 dark:text-white">
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
                  className="flex h-full flex-col gap-3 rounded-[2.75rem] border border-sky-200/60 bg-gradient-to-br from-white via-white to-slate-100 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-900 dark:bg-white/10 dark:text-white">
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
        <div className="grid gap-10 rounded-[3rem] border border-sky-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.62fr),minmax(0,0.38fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100/90">
              Cloud MLM Software · Arctic strategy
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Operationalise polar payment journeys with AI-ready orchestration
            </h2>
            <p className="text-sm text-sky-100/80">
              Our consultants convert the WordPress archive into a living operating system that unites finance, compliance, and
              field leaders across Svalbard and Jan Mayen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-sky-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-100/80">Execution snapshot</p>
              <ul className="space-y-3 text-sm text-sky-100/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" aria-hidden />
                  <span>PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated end-to-end.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" aria-hidden />
                  <span>Ticketing, autoresponder, multilingual, and backup modules unified as one telemetry layer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" aria-hidden />
                  <span>KYC documentation and e-wallet governance tuned to Norwegian regulatory oversight.</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-sky-100/80">
              Honour the WordPress source while unlocking enterprise reliability for Arctic growth and research partnerships.
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
