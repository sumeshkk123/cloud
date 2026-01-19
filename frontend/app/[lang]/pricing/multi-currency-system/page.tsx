import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Banknote,
  BadgeCheck,
  Calculator,
  Globe2,
  LineChart,
  Shield,
  Sparkles,
  Wallet
} from "lucide-react";
import {
  ArrowsLeftRight,
  CurrencyCircleDollar,
  CurrencyCircleEuro,
  CurrencyCircleYen,
  Gauge,
  MapTrifold,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Package = {
  name: string;
  price: string;
  description: string;
  cohorts: string;
  outcomes: string[];
  icon: IconType;
};

type Phase = {
  title: string;
  duration: string;
  description: string;
  artefacts: string[];
  icon: IconType;
};

type Insight = {
  title: string;
  value: string;
  description: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Currencies orchestrated",
    value: "72+",
    detail: "Base, payout, and tender currencies managed across Cloud MLM Software deployments.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Settlement accuracy",
    value: "99.98%",
    detail: "Variance between forecast and actual commissions after automation go-live.",
    icon: Calculator
  },
  {
    label: "Time-to-localisation",
    value: "4 weeks",
    detail: "Average time required to onboard a new market with FX, tax, and compliance guardrails.",
    icon: Gauge
  },
  {
    label: "Operations productivity",
    value: "3.4×",
    detail: "Reduction in manual payout adjustments and finance escalations.",
    icon: Wallet
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "FX intelligence",
    description:
      "Automate currency conversions, hedging logic, and historical rate audits so payouts remain predictable regardless of market volatility.",
    bullets: [
      "Live, daily, or custom window rate sourcing with fallbacks",
      "Automated rounding, margin, and fee application by cohort",
      "Historical FX ledger for finance, audit, and compliance teams"
    ],
    icon: LineChart
  },
  {
    title: "Multi-market governance",
    description:
      "Blend payment, tax, and regulatory requirements into one policy framework that keeps leadership confident and distributors paid on time.",
    bullets: [
      "Jurisdiction-aware payout sequencing and documentation",
      "Tax withholding automation with statutory thresholds",
      "Segregated reporting for subsidiaries and franchises"
    ],
    icon: Shield
  },
  {
    title: "Experience synchronisation",
    description:
      "Give customers and distributors pricing clarity while maintaining unified inventory and compensation logic.",
    bullets: [
      "Localized storefront and portal pricing down to SKU level",
      "Distributor wallet balances, statements, and alerts in native currency",
      "Scenario planning dashboards for forecasting and incentive design"
    ],
    icon: UsersFour
  }
];

const PACKAGES: Package[] = [
  {
    name: "Regional launch kit",
    price: "$14k fixed",
    description: "Enable up to five currencies with automated conversions and payout reconciliation.",
    cohorts: "Scaling brands piloting cross-border growth",
    outcomes: [
      "FX data pipeline and variance safeguards live",
      "Localized compensation statements and tax schedules",
      "Finance and support enablement playbook"
    ],
    icon: CurrencyCircleEuro
  },
  {
    name: "Global operations suite",
    price: "$24k fixed",
    description: "Advanced governance, analytics, and automation supporting multi-entity businesses.",
    cohorts: "Established companies managing diverse field cohorts",
    outcomes: [
      "Multi-ledger settlement with treasury integrations",
      "Automated compliance reporting per jurisdiction",
      "Executive scorecards for margin and payout health"
    ],
    icon: CurrencyCircleYen
  },
  {
    name: "Enterprise treasury fabric",
    price: "Custom engagement",
    description: "Custom workflows for hedging, liquidity planning, and hybrid payout strategies.",
    cohorts: "Enterprises balancing complex treasury and incentive models",
    outcomes: [
      "Treasury playbooks with hedging and working capital guidance",
      "AI-assisted anomaly detection for FX and cash flow deviations",
      "Joint optimisation office with quarterly enhancement sprints"
    ],
    icon: Sparkles
  }
];

const PHASES: Phase[] = [
  {
    title: "Assessment & modelling",
    duration: "Weeks 1-2",
    description:
      "Map compensation, pricing, and treasury requirements. Build currency and taxation scenarios that inform solution design.",
    artefacts: [
      "Market readiness heatmap",
      "Conversion rate playbooks and failover rules",
      "Risk register with mitigation strategies"
    ],
    icon: Globe2
  },
  {
    title: "Configuration & validation",
    duration: "Weeks 3-5",
    description:
      "Automate conversions, tax logic, and payout workflows. Validate accuracy with finance and compliance leadership.",
    artefacts: [
      "Automated FX pipelines with monitoring",
      "Commission + payout stress testing results",
      "Stakeholder sign-offs and launch checklist"
    ],
    icon: MapTrifold
  },
  {
    title: "Enablement & optimisation",
    duration: "Weeks 6-7",
    description:
      "Launch production-ready operations, monitor variance, and embed continuous improvement routines.",
    artefacts: [
      "Operations dashboards and alert thresholds",
      "Support + field communications toolkit",
      "Optimisation backlog with ROI models"
    ],
    icon: Banknote
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Margin protection",
    value: "11%",
    description: "Average improvement after aligning FX margins with compensation cadence."
  },
  {
    title: "Compliance response time",
    value: "6 hrs",
    description: "Average time to deliver regulator-ready evidence when FX audits trigger."
  },
  {
    title: "Distributor satisfaction",
    value: "4.7 / 5",
    description: "Post-launch score for payout transparency, timeliness, and accessibility."
  }
];

const FAQS: Faq[] = [
  {
    question: "Which FX data sources do you support?",
    answer:
      "We connect to institutional FX providers, central bank rates, and client-specific treasury feeds. Rule-based fallbacks keep operations running during outages."
  },
  {
    question: "Can we mix fiat and digital assets?",
    answer:
      "Yes. Hybrid payouts are supported with guardrails for volatility, compliance, and tax obligations. Treasury and legal teams validate flows before launch."
  },
  {
    question: "How do you handle retroactive adjustments?",
    answer:
      "Automated retro adjustments reapply historic rates while keeping audit trails intact. Finance can simulate scenarios before committing changes."
  },
  {
    question: "What training do teams receive?",
    answer:
      "Finance, treasury, support, and field leadership receive enablement tailored to their roles, including variance monitoring and escalation routines."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Multi-Currency System Pricing | Cloud MLM Software";
  const description =
    "Discover pricing, roadmap, and outcomes for Cloud MLM Software’s multi-currency system. Automate FX, payouts, and compliance across global markets.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/multi-currency-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MultiCurrencySystemPageProps = {
  params: { lang: SupportedLocale };
};

export default function MultiCurrencySystemPage({ params }: MultiCurrencySystemPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHubHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-slate-100 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/40">
        <div className="absolute -left-12 top-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/40" aria-hidden />
        <div className="absolute -right-16 bottom-0 h-80 w-80 translate-y-1/3 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-900/50" aria-hidden />

        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.62fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Treasury-grade automation for modern MLM
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Multi-currency system pricing with enterprise guardrails.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Confidently expand into new markets without manual spreadsheets. Cloud MLM Software’s multi-currency engagements blend FX automation, compliance, and analytics so payouts stay accurate and on time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request pricing workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHubHref}>
                  Compare pricing catalogue
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur dark:bg-slate-950/70">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">{metric.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities tuned for global scale</h2>
          <p className="text-sm text-muted-foreground">
            Every engagement balances treasury discipline, operational clarity, and distributor trust. We make sure finance, technology, and field teams can launch in lockstep.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages that match your treasury ambition</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Choose the blueprint that aligns with your growth stage. Each package bundles strategy, automation, analytics, and enablement into a predictable investment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <article key={pkg.name} className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-muted/40 p-3 text-xs font-semibold uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                    {pkg.cohorts}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link href={contactHref}>
                      Discuss this package
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Seven-week delivery cadence</h2>
          <p className="text-sm text-muted-foreground">
            Clear checkpoints keep finance, technology, and leadership informed while we operationalise currency automation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article key={phase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.artefacts.map((artefact) => (
                    <li key={artefact} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{artefact}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Impact benchmarks</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Use these metrics to evaluate readiness, success, and ongoing optimisation opportunities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INSIGHTS.map((insight) => (
              <article key={insight.title} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm dark:bg-slate-950/70">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary/80">{insight.title}</h3>
                <p className="mt-3 text-3xl font-semibold text-foreground">{insight.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{insight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Finance, treasury, and operations leaders ask these questions before kick-off.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-sky-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-sky-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to modernise multi-currency operations?</h2>
              <p className="text-sm text-muted-foreground">
                Share your market expansion goals, treasury policies, and timelines. We’ll produce a pricing proposal and implementation plan aligned to leadership priorities.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and stakeholder checklist within one business day. Cloud MLM Software stays engaged through launch and optimisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={pricingHubHref}>
                    Explore pricing hub
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
