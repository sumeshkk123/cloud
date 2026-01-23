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
  BarChart3,
  CalendarRange,
  Compass,
  Globe2,
  LineChart,
  ShieldCheck
} from "lucide-react";
import {
  Cube,
  CurrencyCircleDollar,
  GearFine,
  Handshake,
  Lifebuoy,
  Lightning,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type ModuleHighlight = {
  title: string;
  detail: string;
  icon: IconType;
};

type ServiceTrack = {
  title: string;
  summary: string;
};

type Gateway = {
  name: string;
  focus: string;
  notes: string[];
  icon: IconType;
};

type JourneyStage = {
  phase: string;
  title: string;
  outcomes: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Gateway bundle",
    value: "PayPal • Skrill • SecurionPay • Braintree",
    description:
      "Directly aligned with the legacy Curacao page, orchestrated inside a single Cloud MLM Software control plane.",
    icon: StackSimple
  },
  {
    label: "Currencies supported",
    value: "ANG & USD ready",
    description:
      "Multi currency module keeps Antillean guilder and US dollar ledgers reconciled for island and tourism audiences.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Commerce ecosystem",
    value: "Shopify & Magento",
    description:
      "Service catalogue combines e-commerce integrations with ticketing, e-wallet, and backup automation.",
    icon: GearFine
  }
];

const MODULES: ModuleHighlight[] = [
  {
    title: "Multilingual activation",
    detail:
      "Deploy multilingual portals that align with Curaçao’s Dutch, Papiamentu, English, and Spanish usage patterns.",
    icon: Globe2
  },
  {
    title: "Ticket system reliability",
    detail:
      "Route every payout question through the ticket module cited in the WordPress export to keep auditors satisfied.",
    icon: Lifebuoy
  },
  {
    title: "Auto-responder intelligence",
    detail:
      "Segment emails by distributor cohort, tourism campaign, and FX preference so field teams stay informed in real time.",
    icon: Lightning
  },
  {
    title: "E-wallet & backups",
    detail:
      "Combine e-wallet balances with backup manager encryption to protect commissions during seasonal surges.",
    icon: ShieldCheck
  }
];

const SERVICE_TRACKS: ServiceTrack[] = [
  {
    title: "MLM software development",
    summary:
      "Configure compensation logic, binary matrices, and replicating sites tailored to Curaçao-based leadership structures."
  },
  {
    title: "E-commerce & storefronts",
    summary:
      "WooCommerce, Shopify, Magento, and Opencart integrations synchronise island inventory with payment rules."
  },
  {
    title: "Digital experience design",
    summary:
      "Website design and multilingual content ensure corporate credibility with cruise, tourism, and diaspora buyers."
  },
  {
    title: "Compliance-ready support",
    summary:
      "Ticket workflows, backup routines, and knowledge articles provide the defensible trail regulators expect."
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal coastal commerce",
    focus: "Cross-border retail & membership dues",
    notes: [
      "Instant onboarding for Caribbean tourism bundles without sacrificing AML guardrails.",
      "Segment settlement routing across ANG and USD to simplify treasury reporting.",
      "Reusable templates for chargeback responses tied to travel, wellness, and e-learning products."
    ],
    icon: Compass
  },
  {
    name: "Skrill digital wallet mesh",
    focus: "Distributor payouts & incentives",
    notes: [
      "Trigger weekly, monthly, or on-demand disbursements with configurable caps.",
      "Use auto-responder hooks to notify field leaders when balances are ready.",
      "Map wallet analytics into the Cloud MLM Software dashboards for AI-driven churn alerts."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay orchestration",
    focus: "Card acquiring resilience",
    notes: [
      "Deploy 3DS flows tuned for Caribbean telecom reliability.",
      "Route high-value wellness subscriptions through preferred risk profiles.",
      "Monitor decline ratios in real time with anomaly alerts for finance teams."
    ],
    icon: BarChart3
  },
  {
    name: "Braintree experimentation lane",
    focus: "Subscription kits & upsell trials",
    notes: [
      "Launch recurring billing and tokenized payment journeys without storing PAN data.",
      "Connect to Shopify and WooCommerce catalogue updates through webhook listeners.",
      "A/B test bundle pricing with AI recommendations surfaced inside Cloud MLM Software."
    ],
    icon: LineChart
  }
];

const JOURNEY: JourneyStage[] = [
  {
    phase: "01",
    title: "Island readiness assessment",
    outcomes: [
      "Workshops covering compensation plan nuances and local distributor expectations.",
      "Audit of existing payment touchpoints, ticket queues, and multilingual assets.",
      "Regulatory checklists aligned with the Central Bank of Curaçao and Sint Maarten."
    ],
    icon: Cube
  },
  {
    phase: "02",
    title: "Gateway & module pairing",
    outcomes: [
      "Activate PayPal, Skrill, SecurionPay, and Braintree connectors in a single sandbox.",
      "Configure multi currency, multilingual, ticket system, and auto-responder modules together.",
      "Design data contracts for e-wallet, e-voucher, and backup manager automation."
    ],
    icon: StackSimple
  },
  {
    phase: "03",
    title: "Commerce alignment",
    outcomes: [
      "Synchronise Shopify, Magento, WooCommerce, and Opencart storefronts with payment logic.",
      "Roll out multilingual site updates and knowledge base articles for Curaçao teams.",
      "Launch AI-driven dashboards tracking FX exposure, gateway health, and support SLAs."
    ],
    icon: Handshake
  },
  {
    phase: "04",
    title: "Ongoing optimisation",
    outcomes: [
      "Monthly retros matching tourism seasonality with payout cadence adjustments.",
      "Scenario planning for new distributor hubs across the Caribbean and Netherlands.",
      "Continuous ticket and backup drills to maintain compliance certainty."
    ],
    icon: CalendarRange
  }
];

const FAQS: FAQItem[] = [
  {
    question: "Do the Curaçao gateways support both ANG and USD?",
    answer:
      "Yes. The multi currency module keeps Antillean guilder and US dollar wallets reconciled, while gateway routing policies decide which ledger closes the settlement."
  },
  {
    question: "How is multilingual support handled for Curaçao distributors?",
    answer:
      "Content, ticket replies, auto-responder sequences, and replicated sites are localised for Dutch, Papiamentu, English, and Spanish with governance controls baked in."
  },
  {
    question: "Can Shopify and Magento stores share the same payment rules?",
    answer:
      "All e-commerce integrations route through the same Cloud MLM Software orchestration, so pricing, tax, and gateway logic stay consistent across every storefront."
  }
];

export const metadata: Metadata = {
  title: "Curacao MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise Curacao-focused MLM payments with Cloud MLM Software. Unite PayPal, Skrill, SecurionPay, and Braintree while delivering multilingual, multi-currency distributor journeys.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/curacao"
  },
  openGraph: {
    title: "Curacao MLM Payment Gateways",
    description:
      "Build compliant, AI-ready payment operations for Curacao with Cloud MLM Software’s gateway, module, and support orchestration."
  }
};

type CuracaoPageProps = {
  params: { lang: SupportedLocale };
};

export default function CuracaoPaymentGatewayPage({ params }: CuracaoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services/mlm-software-development", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-slate-200/70 bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-8 py-16 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_82%_15%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.45),transparent_55%),radial-gradient(circle_at_82%_15%,rgba(16,185,129,0.4),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.35),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-sky-500/50 dark:bg-slate-900/60 dark:text-sky-200">
                Curacao · Payment Gateway Blueprint
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Launch Curacao-first MLM payment operations with clarity and speed
                </h1>
                <p className="max-w-2xl text-base text-slate-600 dark:text-slate-200">
                  Turn the legacy “Ways to accept payments” article into an AI-ready execution plan. Cloud MLM
                  Software unifies the highlighted modules, services, and payment gateways so your Curaçao
                  distributors operate without friction.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Design your Curacao launch
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
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-md backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                  >
                    <div className="absolute -right-8 -top-6 h-24 w-24 rounded-full bg-sky-100 blur-3xl dark:bg-sky-500/30" aria-hidden />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                          {metric.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
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
            Core modules reimagined for Curacao growth
          </h2>
          <p className="text-sm text-muted-foreground">
            The WordPress archive highlighted multilingual, ticketing, auto-responder, e-wallet, and backup
            capabilities. We modernise them into AI-assisted workflows tuned for Curaçao’s multi-currency, tourism-heavy
            economy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{module.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-10 shadow-md dark:border-slate-800/60 dark:bg-slate-950/40 md:grid-cols-[0.85fr,1.15fr] md:items-start">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200">
              Service catalogue
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Pair your payment stack with proven delivery tracks
            </h2>
            <p className="text-sm text-muted-foreground">
              Each service listed in the legacy page is delivered with artefacts, governance, and automation accelerators so Curaçao programmes scale quickly.
            </p>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href={servicesHref}>
                View detailed services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <dl className="grid gap-6">
            {SERVICE_TRACKS.map((track) => (
              <div key={track.title} className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                <dt className="text-sm font-semibold text-foreground">{track.title}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{track.summary}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Payment gateways curated for Curaçao distributors
            </h2>
            <p className="text-sm text-muted-foreground">
              These gateways mirror the WordPress list and are orchestrated inside Cloud MLM Software with AI-powered telemetry.
            </p>
          </div>
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Compare pricing tiers
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border/70 bg-muted/40 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-emerald-500 to-blue-500" />
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.notes.map((note) => (
                    <li key={note} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Journey to live operations in Curaçao
          </h2>
          <p className="text-sm text-muted-foreground">
            Our delivery rhythm converts the archived checklist into accountable phases with measurable outputs.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {JOURNEY.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.phase}
                className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{stage.phase}</span>
                  <Icon className="h-4 w-4 text-primary" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-foreground">{stage.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stage.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
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
            Answers based on the most common queries we receive from Curaçao payment transformation teams.
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
        <div className="overflow-hidden rounded-[2.75rem] border border-slate-200/70 bg-gradient-to-r from-sky-500/15 via-emerald-500/15 to-blue-600/15 px-8 py-12 shadow-xl backdrop-blur dark:border-slate-800/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to operationalise your Curacao payment strategy?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software delivers the modules, services, and governance named in the legacy article—now infused with AI telemetry and automation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Talk to a strategist
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={demoHref}>Schedule a guided demo</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    24×7 Curacao desk
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Support + ticketing + backup drills</p>
                </div>
                <Handshake className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Our service pod blends live support, automated alerts, and quarterly optimisation reviews so your island operations stay resilient and compliant.
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
