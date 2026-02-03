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
  ArrowUpRight,
  LineChart,
  Globe2,
  Layers3,
  MapPin,
  ShieldCheck,
  SquareStack,
  Target
} from "lucide-react";
import {
  ChatCenteredDots,
  CurrencyCircleDollar,
  Gear,
  Lightning,
  ListChecks,
  Plugs,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Module = {
  title: string;
  summary: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  step: string;
  headline: string;
  copy: string;
  bullets: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const STATS: Stat[] = [
  {
    label: "Gateway suite",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "The same quartet highlighted in the Dominican Republic WordPress article, now under a unified orchestration layer.",
    icon: Plugs
  },
  {
    label: "Currency orchestration",
    value: "DOP · USD · EUR",
    description:
      "Multi currency module balances Dominican peso and foreign currency flows with hedging rules and variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Experience stack",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    description:
      "Plus e-voucher and backup manager operations—each enhanced with AI telemetry, SLA dashboards, and audit exports.",
    icon: Layers3
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual delivery",
    summary:
      "Serve Spanish, English, and Haitian Creole experiences across portals, documentation, and nurture journeys.",
    icon: Globe2
  },
  {
    title: "Ticket system visibility",
    summary:
      "Route finance, compliance, and distributor requests with measurable SLAs and exportable evidence.",
    icon: ChatCenteredDots
  },
  {
    title: "Auto responder agility",
    summary:
      "Trigger onboarding, compliance, and reorder sequences as soon as payment telemetry updates.",
    icon: Lightning
  },
  {
    title: "E-wallet & backup resilience",
    summary:
      "Provide instant payouts while encrypted backups protect commissions against infrastructure disruption.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global storefront",
    focus: "Provide trusted checkout for diaspora and tourism purchases.",
    bullets: [
      "FX routing for DOP, USD, and EUR settlements.",
      "Chargeback evidence packs connected to ticket histories.",
      "Conversion insights segmented by distributor cohort and campaign."
    ],
    icon: Target
  },
  {
    name: "Skrill payout express",
    focus: "Deliver commissions quickly to mobile-first Dominican leaders.",
    bullets: [
      "Weekly, monthly, or milestone payout cadences with liquidity guardrails.",
      "AML reviews captured inside ticket workflows for regulator-ready evidence.",
      "Auto responder notifications confirm wallet funding to limit support calls."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect card transactions for subscription kits and wellness bundles.",
    bullets: [
      "Adaptive fraud scoring tuned for Dominican telecom performance.",
      "Failover routing keeps authorisation rates consistent during PSP incidents.",
      "Real-time alerts highlight anomalies requiring finance attention."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation",
    focus: "Pilot new membership tiers without rewriting infrastructure.",
    bullets: [
      "Tokenised payments support subscriptions, loyalty upgrades, and instalment plans.",
      "Webhook automation keeps WooCommerce, Shopify, and Magento in sync.",
      "Experiment dashboards feed AI recommendations to leadership."
    ],
    icon: Gear
  }
];

const PHASES: Phase[] = [
  {
    step: "01",
    headline: "Context alignment",
    copy: "Translate the WordPress checklist into Dominican-ready requirements.",
    bullets: [
      "Stakeholder sessions with finance, compliance, and distributor executives.",
      "Inventory of current gateways, tickets, and multilingual content.",
      "Risk and regulatory mapping spanning AML, tax, and data residency."
    ],
    icon: MapPin
  },
  {
    step: "02",
    headline: "Gateway activation",
    copy: "Enable PayPal, Skrill, SecurionPay, and Braintree alongside foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, and backup manager modules.",
      "Launch sandbox testing with scenarios covering local and diaspora flows.",
      "Establish approvals, SLAs, and audit artefacts for finance and compliance."
    ],
    icon: ListChecks
  },
  {
    step: "03",
    headline: "Experience synchronisation",
    copy: "Align storefronts, portals, and communications with orchestrated payments.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart catalogues.",
      "Localise experiences for Spanish, English, and Haitian Creole audiences.",
      "Link payment telemetry to nurture journeys and retention programmes."
    ],
    icon: LineChart
  },
  {
    step: "04",
    headline: "Optimisation cadence",
    copy: "Maintain growth with AI-guided rituals and governance.",
    bullets: [
      "Monthly telemetry reviews highlight FX exposure and conversion health.",
      "Ticket audits keep SLA and compliance performance visible.",
      "Backup drills and incident rehearsals protect payout continuity."
    ],
    icon: SquareStack
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can Cloud MLM Software reconcile DOP, USD, and EUR simultaneously?",
    answer:
      "Yes. The multi currency module highlighted in the WordPress article keeps all ledgers aligned with hedging rules, variance alerts, and automated reporting."
  },
  {
    question: "How do you connect ticket and auto responder workflows?",
    answer:
      "Ticket categories, SLA milestones, and resolutions trigger templated communications so distributors receive proactive updates in their preferred language."
  },
  {
    question: "What post-launch support is included?",
    answer:
      "Dedicated pods deliver telemetry reviews, ticket audits, and compliance evidence packs tailored for Dominican regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Dominican Republic MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Dominican Republic MLM operations with multilingual, multi-currency automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/dominican-republic"
  },
  openGraph: {
    title: "Dominican Republic MLM Payment Gateways",
    description:
      "Transform the WordPress gateway checklist into an AI-ready payment programme tailored to Dominican MLM growth."
  }
};

type DominicanRepublicPageProps = {
  params: { lang: SupportedLocale };
};

export default function DominicanRepublicPaymentGatewayPage({ params }: DominicanRepublicPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200/70 bg-gradient-to-br from-orange-50 via-white to-sky-50 px-8 py-16 shadow-xl dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(248,113,113,0.2),transparent_55%),radial-gradient(circle_at_70%_15%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(250,204,21,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(248,113,113,0.35),transparent_55%),radial-gradient(circle_at_70%_15%,rgba(59,130,246,0.3),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(250,204,21,0.28),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                Dominican Republic · Payment orchestration
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Deliver a Dominican MLM payment experience with global reach
                </h1>
                <p className="max-w-2xl text-base text-slate-600 dark:text-slate-200">
                  Cloud MLM Software respects the WordPress “Ways to accept payments” guidance—using the same gateways,
                  modules, and services—while adding AI telemetry, FX guardrails, and multilingual automation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Start your Dominican launch
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
                >
                  <Link href={demoHref}>Preview the platform</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article
                    key={stat.label}
                    className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-md dark:border-slate-700/60 dark:bg-slate-900/70"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                          {stat.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stat.description}</p>
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
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Modules from the legacy page—now AI-enabled
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
            operate as a cohesive system with compliance guardrails and telemetry.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{module.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Gateway tactics tuned for Dominican growth
            </h2>
            <p className="text-sm text-white/70">
              The WordPress gateway list remains at the core while Cloud MLM Software adds orchestration, telemetry, and
              compliance artefacts.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {GATEWAYS.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.name}
                  className="flex h-full flex-col gap-5 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{gateway.name}</h3>
                      <p className="text-sm text-white/70">{gateway.focus}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-white/75">
                    {gateway.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-white/70" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Compare pricing tiers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
              <Link href={demoHref}>Request a strategy session</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four stages from discovery to optimisation
          </h2>
          <p className="text-sm text-muted-foreground">
            Convert the legacy checklist into measurable progress with clear artefacts for every stakeholder.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.step}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{phase.step}</span>
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-foreground">{phase.headline}</h3>
                <p className="text-sm text-muted-foreground">{phase.copy}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Finance, compliance, and technology leaders in the Dominican Republic ask these questions most often.
          </p>
        </div>
        <div className="space-y-6">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-orange-500/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Dominican MLM payouts?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software unites the gateways, modules, and services named in the WordPress archive—enhanced
                with AI telemetry, compliance artefacts, and proactive customer care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Talk to a strategist
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={pricingHref}>Review pricing</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Support cadence
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Dominican success pod</p>
                </div>
                <StackSimple className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry summaries, ticket audits, and compliance documentation aligned with Dominican Republic
                regulators and banking partners.
              </p>
            </div>
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
