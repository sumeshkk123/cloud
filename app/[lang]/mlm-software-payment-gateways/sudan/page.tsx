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
  GlobeHemisphereEast,
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

type Spark = {
  title: string;
  detail: string;
  icon: IconType;
};

type Framework = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Pillar = {
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

const SPARKS: Spark[] = [
  {
    title: "WordPress headline retained",
    detail:
      "“Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sudan - SD” remains our SEO anchor.",
    icon: StackSimple
  },
  {
    title: "Eight gateways committed",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay ready for Sudan programmes.",
    icon: Plugs
  },
  {
    title: "Compliance-first design",
    detail:
      "Multi currency, ticket system, autoresponder, e-wallet, and multilingual modules align with Bank of Sudan expectations.",
    icon: ShieldCheck
  }
];

const FRAMEWORKS: Framework[] = [
  {
    name: "PayPal + Amazon Pay humanitarian corridor",
    summary: "Support NGOs, diaspora sponsors, and Sudanese entrepreneurs with auditable payment journeys.",
    bullets: [
      "Multi currency module balances SDG, USD, EUR, and SAR settlements with tolerance alerts.",
      "Emails module distributes bilingual donor updates, compliance notices, and treasury digests."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU + Stripe digital marketplace",
    summary: "Enable ecommerce, education, and wellness programmes across Sudan, MENA, and global partners.",
    bullets: [
      "Ticket system module routes PSP escalations, onboarding, and support into SLA dashboards.",
      "Auto responder automates onboarding, renewal, and regulatory reminders in Arabic and English."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net + Braintree assurance runway",
    summary: "Give North American partners familiar rails while satisfying Sudanese banking oversight.",
    bullets: [
      "Backup manager snapshots settlement files, dispute narratives, and leadership commentary.",
      "KYC documentation vault secures identity proofs, licences, and AML attestations."
    ],
    icon: Handshake
  },
  {
    name: "Adyen + 2Checkout expansion studio",
    summary: "Scale into East Africa, Gulf, and diaspora markets with unified loyalty and commission orchestration.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker thresholds for senior ranks.",
      "E-voucher engine powers incentives, training passes, and humanitarian stipends with analytics."
    ],
    icon: ChartLineUp
  }
];

const PILLARS: Pillar[] = [
  {
    label: "Phase 01",
    heading: "Decode the WordPress archive",
    detail: "Capture the hero statement, gateway roster, and module list in their original wording.",
    icon: StackSimple
  },
  {
    label: "Phase 02",
    heading: "Engineer compliance choreography",
    detail: "Blend Bank of Sudan guidance, AML policies, and donor obligations across squads.",
    icon: ShieldCheck
  },
  {
    label: "Phase 03",
    heading: "Automate Sudan operations",
    detail: "Ticketing, autoresponder, multilingual, and backup manager unify finance and growth rhythms.",
    icon: Lightning
  },
  {
    label: "Phase 04",
    heading: "Expand across MENA and East Africa",
    detail: "Replicate Sudan playbooks in Egypt, UAE, and Ethiopia with AI telemetry and shared playbooks.",
    icon: AirplaneTilt
  }
];

const MODULES: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances SDG, USD, EUR, and SAR with predictive reconciliation packs for leadership review.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, donor requests, and distributor questions into SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers Arabic and English onboarding, renewal, and compliance sequences instantly.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Streams commissions, reimbursements, and humanitarian stipends with maker-checker controls.",
    icon: UsersThree
  },
  {
    name: "E-voucher",
    description: "Issues loyalty passes, training credits, and relief vouchers with redemption telemetry.",
    icon: Sparkle
  },
  {
    name: "Backup manager",
    description: "Captures immutable snapshots of settlements, dispute journals, and leadership commentary.",
    icon: CloudArrowUp
  },
  {
    name: "Emails",
    description: "Keeps finance, compliance, and growth teams aligned via concise weekly briefings.",
    icon: StackSimple
  },
  {
    name: "KYC documentation",
    description: "Secures identity proofs, licences, and AML declarations with renewal alerts and reviewer trails.",
    icon: ShieldCheck
  },
  {
    name: "Multilingual system",
    description: "Synchronises Arabic and English journeys across web, mobile, and AI chat assistants.",
    icon: Translate
  }
];

export const metadata: Metadata = {
  title: "Sudan MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Sudan with Cloud MLM Software’s compliance-ready, AI-enabled operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/sudan"
  },
  openGraph: {
    title: "Sudan MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sudan - SD, reimagined with automation, compliance, and AI telemetry."
  }
};

type SudanPageProps = {
  params: { lang: SupportedLocale };
};

export default function SudanPaymentGatewayPage({ params }: SudanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-50 via-white to-teal-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-16 h-60 w-60 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-900/40" />
          <div className="absolute bottom-12 right-20 h-64 w-64 rounded-full bg-teal-200/60 blur-3xl dark:bg-teal-900/40" />
          <div className="absolute top-1/2 left-1/3 h-36 w-36 rounded-full bg-white/50 blur-3xl dark:bg-white/10" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.58fr),minmax(0,0.42fr)]">
          <div className="space-y-10">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Sudan (SD)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sudan - SD
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software has already built great systems for the greatest companies. Sudan&apos;s WordPress export now
                becomes an AI-enabled launchpad covering payments, compliance, and multilingual journeys across MENA and East
                Africa.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {SPARKS.map((spark) => {
                const Icon = spark.icon;
                return (
                  <article
                    key={spark.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-amber-200/60 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground dark:text-white">{spark.title}</h2>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{spark.detail}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Sudan strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-amber-300 text-amber-900 hover:bg-amber-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
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
                className="gap-2 text-amber-900 hover:bg-amber-100 hover:text-amber-900 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={gatewayHubHref}>
                  Explore all payment gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between gap-6 rounded-[3rem] border border-amber-200/60 bg-white/80 p-10 shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-900 dark:text-amber-200">Snapshot</p>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-white/70">
                <p>
                  <span className="font-semibold text-foreground dark:text-white">Gateways retained: </span>
                  PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.
                </p>
                <p>
                  <span className="font-semibold text-foreground dark:text-white">Modules reactivated: </span>
                  multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
                  multilingual system.
                </p>
              </div>
            </div>
            <div className="space-y-3 rounded-[2.5rem] border border-amber-200/60 bg-gradient-to-br from-white via-white to-teal-50 p-8 dark:border-white/10 dark:from-white/5 dark:via-white/5 dark:to-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-900 dark:text-amber-200">
                Leadership alignment
              </p>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Finance, compliance, and growth squads gain shared visibility into every settlement, commission, and regulatory
                checkpoint across Sudan.
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
            Gateway frameworks for Sudan&apos;s expansion
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress roster now carries compliance, automation, and multilingual orchestration for Sudan, MENA, and
            diaspora teams.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {FRAMEWORKS.map((framework) => {
            const Icon = framework.icon;
            return (
              <article
                key={framework.name}
                className="flex h-full flex-col gap-5 rounded-[2.75rem] border border-amber-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-900 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 dark:bg-white" aria-hidden />
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
              Operational pillars for Sudan programmes
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Preserve the WordPress narrative while embedding compliance guardrails, automation, and AI telemetry for Sudan&apos;s
              leaders.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-amber-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-900 dark:text-amber-200">
                        {pillar.label}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{pillar.heading}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.detail}</p>
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
              Modules from the WordPress menu, orchestrated for Sudan
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, autoresponder, e-wallet, e-voucher, backup manager, emails, KYC documentation, and
              multilingual journeys become one AI-ready operating mesh.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES.slice(0, 5).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-amber-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-900 dark:bg-white/10 dark:text-white">
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
                  className="flex h-full flex-col gap-3 rounded-[2.75rem] border border-amber-200/60 bg-gradient-to-br from-white via-white to-teal-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-900 dark:bg-white/10 dark:text-white">
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
        <div className="grid gap-10 rounded-[3rem] border border-amber-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.62fr),minmax(0,0.38fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100/90">
              Cloud MLM Software · Sudan strategy
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Operationalise Sudan with AI-enabled payment pathways
            </h2>
            <p className="text-sm text-amber-100/80">
              Our consultants transform the WordPress archive into a living operating system that unites finance, compliance,
              and growth leaders across Sudan and neighbouring markets.
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
              <p className="text-xs font-semibold-uppercase tracking-[0.28em] text-amber-100/80">Execution snapshot</p>
              <ul className="space-y-3 text-sm text-amber-100/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  <span>PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated end-to-end.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  <span>Ticketing, autoresponder, multilingual, and backup modules unified as a single telemetry layer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" aria-hidden />
                  <span>KYC documentation and e-wallet governance tuned to Bank of Sudan oversight.</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-amber-100/80">
              Activate Sudan&apos;s growth agenda with a page that honours the WordPress source while delivering enterprise-grade
              reliability.
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
