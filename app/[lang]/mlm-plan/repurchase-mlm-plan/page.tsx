import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import RepurchaseCycleSimulator from "@/components/frontend/plans/all-plans/repurchase-cycle-simulator";
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
  ClipboardCheck,
  Compass,
  GaugeCircle,
  HelpCircle,
  Layers,
  Network,
  RefreshCcw,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Example = {
  title: string;
  baseline: string;
  insight: string;
  icon: IconType;
};

type Pattern = {
  title: string;
  description: string;
  icon: IconType;
};

type Mechanic = {
  title: string;
  summary: string;
  outcomes: string[];
  icon: IconType;
};

type Journey = {
  stage: string;
  description: string;
  focus: string;
  icon: IconType;
};

type RoadmapStep = {
  phase: string;
  duration: string;
  activities: string[];
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Repurchase compliance rate",
    value: "94%",
    detail: "Median of promoters hitting their auto-ship window after Cloud MLM retention nudges and alerts."
  },
  {
    label: "Recurring revenue captured",
    value: "$1.2M / quarter",
    detail: "Average recurring volume secured for consumer goods portfolios once repurchase cadence is automated."
  },
  {
    label: "Inventory variance",
    value: "<3%",
    detail: "Gap between forecast and fulfilled demand across multi-country repurchase launches monitored in Cloud MLM Software."
  },
  {
    label: "Commission closeout",
    value: "48 hours",
    detail: "Time for finance to reconcile repurchase payouts once compliance holds clear with automated workflows."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Always-on demand planning",
    description:
      "Give product, finance, and supply chain the same live forecast for recurring orders so inventory and cash stay balanced.",
    bullets: [
      "Compare subscription enrolments, ad-hoc orders, and promotions inside a single variance dashboard.",
      "Run channel-specific forecasts that surface when regional stock levels fall below the safety threshold.",
      "Sync purchase orders to ERP and 3PL partners with timestamped change history for audits."
    ],
    icon: BarChart3
  },
  {
    title: "Compliance-first payouts",
    description:
      "Lock every repurchase transaction to tax receipts, KYC evidence, and payment approvals before funds leave your account.",
    bullets: [
      "Attach invoices, proofs of delivery, and bank confirmations to each payout event automatically.",
      "Throttle commissions if a jurisdiction requires cooling-off periods or consumer refund checks.",
      "Log exception-handling decisions so regulators and auditors see a complete storyline."
    ],
    icon: ShieldCheck
  },
  {
    title: "Field momentum by design",
    description:
      "Equip leaders and promoters with nudges, scorecards, and guided messaging so repeat orders feel effortless.",
    bullets: [
      "Push mobile prompts when members slip below minimum personal volume or auto-ship readiness.",
      "Deliver localized content for wellness, beauty, and home products with AI-personalized messaging.",
      "Track loyalty credits, sampling campaigns, and micro-incentives in one enablement workspace."
    ],
    icon: Rocket
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Auto-ship conversion sprint",
    baseline: "600 new distributors, 60-day onboarding runway, nutrition packs across US and Canada.",
    insight: "Cloud MLM Software predicts repurchase risk by cohort, launches loyalty credits automatically, and routes coaching tasks to leaders two weeks before expiry.",
    icon: ShoppingCart
  },
  {
    title: "APAC compliance readiness",
    baseline: "Three-country launch (Singapore, Malaysia, Philippines) with mixed tax rules and e-invoicing mandates.",
    insight: "Automated document capture, tax ID validation, and payout sequencing keep cross-border regulations aligned without manual spreadsheets.",
    icon: ShieldCheck
  },
  {
    title: "Promoter-led sampling drive",
    baseline: "Personal care brand introduces seasonal bundles with 40% sampling incentive for top ranks.",
    insight: "Scenario modelling shows the tipping point for profitability, reserves upsell inventory, and recommends when to sunset the incentive.",
    icon: Target
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration workspace",
    description:
      "Design repurchase windows, qualification thresholds, bundle discounts, and loyalty credits with guardrails that prevent conflicting rules.",
    icon: Settings2
  },
  {
    title: "Analytics & forecasting spine",
    description:
      "Dashboards expose repurchase compliance, cohort churn, SKU velocity, and cash impact in real time across every market.",
    icon: BarChart3
  },
  {
    title: "Field enablement hub",
    description:
      "Leaders share scripts, micro-challenges, and AI-generated follow-up plans inside one workspace tied to repurchase milestones.",
    icon: Users
  }
];

const CTA_POINTS: string[] = [
  "Automate recurring order workflows with compliance, tax, and ERP checkpoints baked in.",
  "Forecast inventory and cash impact with dashboards finance, supply chain, and founders trust.",
  "Arm field leaders with nudges, credits, and content tuned to every repurchase milestone.",
  "Prove regulatory readiness with immutable audit trails and jurisdiction-specific reporting."
];

const MECHANICS: Mechanic[] = [
  {
    title: "Recurring volume orchestration",
    summary: "Coordinate auto-ship, manual repurchase, and promotional orders without breaking payout logic.",
    outcomes: [
      "Blend retail and distributor orders in one ledger so rank, bonuses, and thresholds stay aligned.",
      "Trigger loyalty credits when personal volume dips below plan requirements.",
      "Forecast cash flow impact of incentive pushes before the campaign goes live."
    ],
    icon: GaugeCircle
  },
  {
    title: "Dynamic pricing & bundles",
    summary: "Roll out seasonal collections and upsell kits while protecting margins and compliance caps.",
    outcomes: [
      "Model how bundle pricing shifts commission pools across ranks and geographies.",
      "Set automatic start/stop dates with pro-rated payouts when campaigns end early.",
      "Alert finance when discounts threaten regulatory maximums or minimum advertised price."
    ],
    icon: Layers
  },
  {
    title: "Audit & tax guardrails",
    summary: "Keep every repurchase traceable with documentation, approvals, and watchdog alerts.",
    outcomes: [
      "Lock payouts until tax IDs, invoices, and KYC checks are verified for each jurisdiction.",
      "Generate export-ready audit packs with payment proofs, inventory adjustments, and support notes.",
      "Surface anomalies such as duplicate orders or refund spikes before regulators do."
    ],
    icon: ClipboardCheck
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Repurchase onboarding",
    description: "Members learn the product story, auto-ship options, and compliance commitments on day one.",
    focus: "Guided flows highlight qualification targets and capture consent for subscription reminders.",
    icon: Compass
  },
  {
    stage: "Cycle reinforcement",
    description: "Throughout the month, nudges, credits, and leader playbooks keep teams aligned to the repurchase cadence.",
    focus: "Adaptive journeys adjust messaging by segment—consumer, promoter, or leader—based on behaviour data.",
    icon: RefreshCcw
  },
  {
    stage: "Leadership advancement",
    description: "Promoters hitting consistent repurchase KPIs unlock rank progression, training, and larger loyalty budgets.",
    focus: "Dashboards visualize who is ready for leadership coaching and where additional support is needed.",
    icon: Rocket
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Diagnostics & modelling",
    duration: "Weeks 1-2",
    activities: [
      "Audit historic sales, refunds, and auto-ship churn to define target KPIs.",
      "Map regulatory obligations by market, including tax receipts, e-invoicing, and cooling-off rules.",
      "Prototype repurchase schedules and loyalty mechanics inside Cloud MLM Software's sandbox."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & integrations",
    duration: "Weeks 3-5",
    activities: [
      "Configure plan logic, bundles, and incentive overlays with automated testing harnesses.",
      "Integrate payment gateways, ERP, CRM, and warehouses for live inventory and payout sync.",
      "Validate compliance workflows with finance, legal, and country managers before go-live."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & optimisation",
    duration: "Weeks 6-8",
    activities: [
      "Launch field training, AI scripts, and enablement content tied to repurchase targets.",
      "Monitor dashboards for churn risk, cash swings, and stock alerts; iterate incentives accordingly.",
      "Run quarterly performance reviews to adjust tiers, bundles, and reward structures."
    ],
    icon: Rocket
  }
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software handle rolling auto-ship rules?",
    answer:
      "You can run overlapping 30-, 45-, or 60-day cadences per SKU, region, or rank. The platform tracks qualification dates, applies loyalty credits, and pauses payouts if a participant misses the window."
  },
  {
    question: "Can we manage stock and logistics from the same workspace?",
    answer:
      "Yes. Real-time integrations with ERP and 3PL providers update stock levels, trigger replenishment tasks, and confirm deliveries before commissions close."
  },
  {
    question: "What about regulatory differences across countries?",
    answer:
      "Templates cover GST, VAT, FDA, and consumer protection nuances. Compliance playbooks include audit logs, e-invoicing, cooling-off enforcement, and payout throttles based on jurisdiction."
  },
  {
    question: "How quickly can we adapt incentives if market conditions change?",
    answer:
      "Campaigns, pricing, and bonuses can be versioned and scheduled without code. Scenario modelling shows the revenue and commission impact before changes hit your field."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Repurchase MLM Plan";
  const description =
    "Cloud MLM Software's repurchase MLM plan deep dive—recurring revenue automation, compliance workflows, and field enablement for sustained growth.";

  return {
    title,
    description,
    keywords: [
      "Repurchase MLM plan",
      "MLM repurchase software",
      "Recurring order automation",
      "Cloud MLM Software",
      "Direct selling compensation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/repurchase-mlm-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RepurchasePlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function RepurchasePlanPage({ params }: RepurchasePlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/repurchase-plan-mlm-calculator", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const demoHref = buildLocalizedPath("/repurchase-mlm-plan-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-amber-50 via-white to-sky-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(250,204,21,0.16),transparent_55%),radial-gradient(circle_at_82%_25%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(124,58,237,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              MLM plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Repurchase MLM Plan blueprint—Cloud MLM Software’s expert deep dive.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Automate recurring revenue, compliance, and field enablement in one platform. Cloud MLM Software maps every repurchase window, ties payouts to documentation, and powers loyalty campaigns that keep customers and promoters reordering.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a plan architect
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={calculatorHref}>
                  Model repurchase cadence
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="px-4 text-primary hover:bg-primary/10 dark:text-white"
              >
                <Link href={pricingHref}>
                  Review pricing
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {HERO_METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10"
                >
                  <p className="text-sm uppercase tracking-wide text-muted-foreground dark:text-white/70">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative">
            <RepurchaseCycleSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How the repurchase mechanics operate
          </h2>
          <p className="text-sm text-muted-foreground">
            Coordinate recurring revenue, loyalty incentives, and compliance checkpoints so every order supports long-term growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MECHANICS.map((mechanic) => {
            const Icon = mechanic.icon;
            return (
              <article
                key={mechanic.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{mechanic.title}</h3>
                <p className="text-sm text-muted-foreground">{mechanic.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {mechanic.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{outcome}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Foundations that align product, compliance, and field teams
          </h2>
          <p className="text-sm text-muted-foreground">
            Share one source of truth for demand, approvals, and enablement so every department can act quickly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive plan examples</h2>
            <p className="text-sm text-muted-foreground">
              Use data-backed scenarios to tune incentives, compliance holds, and inventory triggers before go-live.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {EXAMPLES.map((example) => {
              const Icon = example.icon;
              return (
                <article
                  key={example.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{example.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Baseline</p>
                  <p className="text-sm text-muted-foreground">{example.baseline}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">What Cloud MLM Software reveals</p>
                  <p className="text-sm text-muted-foreground">{example.insight}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Member and leader journeys mapped for clarity
          </h2>
          <p className="text-sm text-muted-foreground">
            Keep every participant informed—from onboarding through leadership—as repurchase cycles repeat.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEYS.map((journey) => {
            const Icon = journey.icon;
            return (
              <article
                key={journey.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{journey.description}</p>
                </div>
                <p className="text-sm font-medium text-foreground">Focus</p>
                <p className="text-sm text-muted-foreground">{journey.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap with timeline cues
          </h2>
          <p className="text-sm text-muted-foreground">
            Move from diagnostics to optimisation with milestones that keep executives, operations, and the field aligned.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.phase}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.duration}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{activity}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Operational blueprint</h2>
          <p className="text-sm text-muted-foreground">
            Configure, measure, and enable the repurchase engine with Cloud MLM Software’s modular toolkit.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BLUEPRINT.map((pattern) => {
            const Icon = pattern.icon;
            return (
              <article
                key={pattern.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pattern.title}</h3>
                <p className="text-sm text-muted-foreground">{pattern.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            The top questions founders, compliance leaders, and finance teams raise when modernising a repurchase plan.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col gap-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HelpCircle className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-br from-primary/10 via-background to-background py-20 dark:from-primary/10">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How Cloud MLM Software helps
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to launch a compliant repurchase engine that delights the field, satisfies finance, and scales globally.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {CTA_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a blueprint workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref}>
                  Explore pricing tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Want to test scenarios hands-on? Launch the{" "}
              <Link href={calculatorHref} className="text-primary underline underline-offset-4">
                repurchase plan calculator
              </Link>{" "}
              or request a{" "}
              <Link href={demoHref} className="text-primary underline underline-offset-4">
                guided demo
              </Link>{" "}
              to see Cloud MLM Software orchestrate every cycle. Explore our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{" "}
              for companion compensation strategies.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance playbooks validated for tax receipts, refunds, and cooling-off enforcement in each region.</span>
              </li>
              <li className="flex items-start gap-2">
                <Network className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Inventory, payment gateway, and ERP integrations tested with alerting for sync failures.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field enablement dashboards tracking adoption, churn risk, and loyalty credit utilisation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
