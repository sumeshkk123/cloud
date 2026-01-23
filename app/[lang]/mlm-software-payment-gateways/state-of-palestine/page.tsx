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
  Buildings,
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

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type Playbook = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type RoadmapStep = {
  phase: string;
  title: string;
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
    title: "WordPress headline respected",
    description:
      "“Ways to accept payments from MLM Software in People&apos;s Democratic Republic of State of Palestine - PS” remains the anchor.",
    icon: StackSimple
  },
  {
    title: "Gateway continuity guaranteed",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay in the playbook for Palestine programmes.",
    icon: Plugs
  },
  {
    title: "Compliance-first orchestration",
    description:
      "Multi currency, ticket system, autoresponder, e-wallet, and multilingual journeys align with local banking partners and donor expectations.",
    icon: ShieldCheck
  }
];

const PLAYBOOKS: Playbook[] = [
  {
    name: "PayPal + Amazon Pay diaspora corridor",
    summary: "Connect Ramallah, Gaza, and diaspora-backed ventures without fragmenting compliance or donor trust.",
    bullets: [
      "Multi currency module balances ILS, USD, EUR, and GBP settlements with tolerance alerts.",
      "Emails module distributes bilingual donor updates, compliance notices, and audit-ready digests."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU + Stripe digital marketplace",
    summary: "Enable ecommerce, education, and wellness programmes across Palestine, MENA, and global partners.",
    bullets: [
      "Ticket system module routes PSP escalations, partner onboarding, and distributor questions into SLA dashboards.",
      "Auto responder automates onboarding, renewal nudges, and regulatory reminders in Arabic and English."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net + Braintree assurance runway",
    summary: "Give North American partners familiar rails while satisfying Palestinian Monetary Authority expectations.",
    bullets: [
      "Backup manager snapshots settlement files, dispute journals, and leadership commentary.",
      "KYC documentation vault secures identity proofs, licences, and AML attestations for audits."
    ],
    icon: Buildings
  },
  {
    name: "Adyen + 2Checkout expansion studio",
    summary: "Scale programmes across MENA and Europe with consistent loyalty and commission orchestration.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker thresholds for senior ranks.",
      "E-voucher engine powers incentives, training passes, and humanitarian stipends with analytics."
    ],
    icon: ChartLineUp
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Phase 01",
    title: "Interpret the WordPress archive",
    detail: "Capture the hero line, gateway roster, and module references exactly as the export delivers them.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    title: "Design compliance choreography",
    detail: "Blend Palestinian Monetary Authority guidance, AML policies, and partner requirements across teams.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    title: "Automate operational rituals",
    detail: "Ticketing, autoresponder, multilingual messaging, and backup manager synchronise finance and support.",
    icon: Lightning
  },
  {
    phase: "Phase 04",
    title: "Scale regional influence",
    detail: "Extend Palestine playbooks into Jordan, UAE, and wider MENA markets with AI telemetry.",
    icon: Compass
  }
];

const MODULES: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances ILS, USD, EUR, and GBP with automated reconciliation packs for leadership review.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, donor requests, and support tickets through SLA-governed workflows.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers Arabic and English onboarding, renewals, and compliance updates within minutes.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Streams instant commissions, reimbursements, and stipends with maker-checker controls.",
    icon: UsersThree
  },
  {
    name: "E-voucher",
    description: "Issues loyalty codes, humanitarian stipends, and training passes with redemption telemetry.",
    icon: Sparkle
  },
  {
    name: "Backup manager",
    description: "Captures immutable snapshots of settlements, dispute notes, and executive commentary.",
    icon: CloudArrowUp
  },
  {
    name: "Emails",
    description: "Keeps finance, compliance, and leadership aligned through concise briefing packs.",
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
  title: "State of Palestine MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for the State of Palestine with Cloud MLM Software’s compliance-ready, AI-enabled operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/state-of-palestine"
  },
  openGraph: {
    title: "State of Palestine MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of State of Palestine - PS, elevated with automation, compliance, and AI telemetry."
  }
};

type StateOfPalestinePageProps = {
  params: { lang: SupportedLocale };
};

export default function StateOfPalestinePaymentGatewayPage({ params }: StateOfPalestinePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sand-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-14 h-52 w-52 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-900/40" />
          <div className="absolute bottom-8 right-20 h-64 w-64 rounded-full bg-sand-200/60 blur-3xl dark:bg-sand-900/40" />
          <div className="absolute top-1/3 right-1/4 h-36 w-36 rotate-12 rounded-full bg-white/50 blur-3xl dark:bg-white/10" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-10">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-blue-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · State of Palestine (PS)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of State of Palestine - PS
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software has already built great systems for the greatest companies. Palestine&apos;s WordPress export
                now becomes an AI-ready launchpad for payments, compliance, and multilingual engagement across MENA and diaspora
                networks.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-blue-200/60 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-900 dark:bg-white/10 dark:text-white">
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
                  Talk to a Palestine strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-blue-300 text-blue-900 hover:bg-blue-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
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
                className="gap-2 text-blue-900 hover:bg-blue-100 hover:text-blue-900 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={gatewayHubHref}>
                  Explore all payment gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between gap-6 rounded-[3rem] border border-blue-200/60 bg-white/80 p-10 shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-900 dark:text-blue-200">Snapshot</p>
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
            <div className="space-y-3 rounded-[2.5rem] border border-blue-200/60 bg-gradient-to-br from-white via-white to-sand-50 p-8 dark:border-white/10 dark:from-white/5 dark:via-white/5 dark:to-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-900 dark:text-blue-200">
                Leadership alignment
              </p>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Finance, compliance, and growth squads gain shared visibility into every settlement, commission, and regulatory
                checkpoint across Palestine.
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
            Gateway playbooks for Palestine&apos;s programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress roster gains compliance, automation, and multilingual orchestration for State of Palestine, MENA, and
            diaspora teams.
          </p>
        </div>
        <div className="space-y-6">
          {PLAYBOOKS.map((playbook) => {
            const Icon = playbook.icon;
            return (
              <article
                key={playbook.name}
                className="rounded-[2.75rem] border border-blue-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-3 md:max-w-[52%]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{playbook.name}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{playbook.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70 md:max-w-[44%]">
                    {playbook.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 dark:bg-white" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Roadmap to modernise Palestine operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Respect the WordPress archive, embed compliance guardrails, and expand across MENA with AI telemetry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.phase}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-blue-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-900 dark:text-blue-200">
                        {step.phase}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{step.title}</h3>
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
              Modules from the WordPress menu, reimagined for Palestine
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, autoresponder, e-wallet, e-voucher, backup manager, emails, KYC documentation, and
              multilingual system power AI-ready operations for Palestine&apos;s leadership teams.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES.slice(0, 5).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-blue-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-900 dark:bg-white/10 dark:text-white">
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
                  className="flex h-full flex-col gap-3 rounded-[2.75rem] border border-blue-200/60 bg-gradient-to-br from-white via-white to-sand-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-900 dark:bg-white/10 dark:text-white">
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
        <div className="grid gap-10 rounded-[3rem] border border-blue-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.62fr),minmax(0,0.38fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sand-100/90">
              Cloud MLM Software · Palestine strategy
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Translate the WordPress export into an AI-enabled command centre
            </h2>
            <p className="text-sm text-sand-100/80">
              Our consultants orchestrate the retained payment gateways, modules, and compliance artefacts into a modern
              operations blueprint for Palestine and MENA partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-sand-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand-100/80">Execution snapshot</p>
              <ul className="space-y-3 text-sm text-sand-100/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sand-300" aria-hidden />
                  <span>PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated end-to-end.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sand-300" aria-hidden />
                  <span>Ticketing, autoresponder, multilingual, and backup modules unified as one telemetry layer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sand-300" aria-hidden />
                  <span>KYC documentation and e-wallet governance tuned to Palestinian Monetary Authority oversight.</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-sand-100/80">
              Activate Palestine&apos;s growth agenda with an experience that honours the WordPress source while accelerating
              compliant expansion.
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
