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
  BarChart3,
  CalendarRange,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  HelpCircle,
  Layers,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import StairStepPlanSimulator from "@/components/frontend/plan/stair-step-plan-simulator";

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
    label: "Breakaway validation speed",
    value: "36 days",
    detail: "Average cycle to promote frontline legs to manager status across seven multi-market launches."
  },
  {
    label: "Override payout accuracy",
    value: "99.6%",
    detail: "Variance-free reconciliation covering leadership pools, differential overrides, and re-entry credits."
  },
  {
    label: "Leadership retention",
    value: "+21%",
    detail: "Median increase in leadership tenure once cadence alerts and coach dashboards went live."
  },
  {
    label: "Compliance audit trail",
    value: "100% logged",
    detail: "Banking checks, KYC docs, and tax receipts attached to every breakaway event."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Breakaway governance you can defend",
    description:
      "Design every promotion gate with the evidence finance, compliance, and regulators expect before overrides release.",
    bullets: [
      "Define leg-volume, enrolment, and coaching prerequisites per market tier.",
      "Lock multi-period maintenance rules with realtime alerts when volume dips.",
      "Route approvals through the compliance workspace before badges and bonuses fire."
    ],
    icon: ShieldCheck
  },
  {
    title: "Momentum embedded in frontline coaching",
    description:
      "Give leaders clarity on which legs are climbing, which are stalling, and how to keep them engaged through each step.",
    bullets: [
      "Surface pacing dashboards that flag legs at risk of dropping rank.",
      "Trigger enablement tasks the moment a leg is one review away from breakaway.",
      "Provide playbooks that match product bundles to leadership incentives."
    ],
    icon: GaugeCircle
  },
  {
    title: "Financial clarity for every override dollar",
    description:
      "Forecast overrides, leadership pools, and re-entry credits against real volume without spreadsheet drift.",
    bullets: [
      "Model stacked percentages and differential commissions across generations.",
      "Reconcile paid versus pending pools by market, rank, and currency.",
      "Share executive scorecards that unite revenue, margin, and compliance status."
    ],
    icon: BarChart3
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Market entry ladder",
    baseline: "Launch team of 350 promoters, four-leg breakaway requirement, USD 18K average leg CV.",
    insight:
      "Simulations forecast manager promotions in week five, highlighting where enablement must lift volume to avoid breakaway churn.",
    icon: Rocket
  },
  {
    title: "Leadership rescue sprint",
    baseline: "Two frontline legs risk dropping rank after missing maintenance volume for 2 consecutive months.",
    insight:
      "Cadence alerts trigger coaching sequences, preserving overrides and preventing a cascade of downline resets.",
    icon: Compass
  },
  {
    title: "Regulatory stress test",
    baseline: "Three-region rollout with FX exposure and banking oversight for every third breakaway.",
    insight:
      "Compliance workflows attach AML, KYC, and product receipts automatically, producing an audit pack in minutes.",
    icon: ShieldCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Compensation studio",
    description:
      "Model stair-step thresholds, maintenance periods, and differential overrides inside a visual rules engine.",
    icon: Settings2
  },
  {
    title: "Performance intelligence",
    description:
      "Dashboards compare projected versus actual breakaways, override pools, and leadership retention trends in real time.",
    icon: Sparkles
  },
  {
    title: "Field enablement hub",
    description:
      "Coach frontline leaders with scripted nudges, content automation, and mobile-ready playbooks tied to each step.",
    icon: Users
  }
];

const CTA_POINTS: string[] = [
  "Architect stair-step thresholds with audit-proof controls and instant validation.",
  "Automate overrides, leadership pools, and maintenance resets without spreadsheets.",
  "Equip field leaders with pacing dashboards, task automation, and guided coaching.",
  "Launch faster with a single platform for compensation, compliance, and analytics."
];

const MECHANICS: Mechanic[] = [
  {
    title: "Breakaway progression engine",
    summary: "Advance legs with confidence using rule-based promotions tuned to each market tier.",
    outcomes: [
      "Blend personal volume, group CV, and enrolment gates before leaders graduate.",
      "Auto-pause promotions if compliance evidence or payments are outstanding.",
      "Trigger re-entry placement logic while preserving legacy overrides."
    ],
    icon: Target
  },
  {
    title: "Override finance controls",
    summary: "Track every override dollar from accrual to payout with ledger-ready accuracy.",
    outcomes: [
      "Split pools by rank, leg depth, and regional policy with configurable caps.",
      "Expose margin analytics that show the cost of each leadership incentive.",
      "Sync payouts to accounting and banking systems with automated reconciliation."
    ],
    icon: BarChart3
  },
  {
    title: "Enablement automation",
    summary: "Keep leaders active with guided coaching, alerts, and performance routines.",
    outcomes: [
      "Deliver step-focused micro-learning in the field app.",
      "Assign accountability tasks when legs lag on maintenance volume.",
      "Scorecard retention, productivity, and compliance readiness per leadership cohort."
    ],
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Prospect to promoter",
    description: "New enrolments complete onboarding, ID verification, and product selection inside Cloud MLM Software.",
    focus: "Field leaders receive pacing guidance and starter scripts tailored to the first 30 days.",
    icon: Compass
  },
  {
    stage: "Step climb & maintenance",
    description: "Personal volume, group CV, and coaching checkpoints determine progression through each tier.",
    focus: "Cadence alerts, enablement tasks, and compliance reminders fire automatically when thresholds slip.",
    icon: ClipboardCheck
  },
  {
    stage: "Breakaway & leadership expansion",
    description: "Overrides trigger, maintenance clocks start, and new leaders inherit enablement journeys to protect depth.",
    focus: "Finance and compliance monitor payouts, tax, and documentation trails from one command centre.",
    icon: Rocket
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Weeks 1-2",
    activities: [
      "Capture compensation objectives, historic payouts, and regulatory constraints.",
      "Ingest spreadsheets or legacy exports to benchmark thresholds and pools.",
      "Prototype breakaway rules and maintenance windows in the compensation studio."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & testing",
    duration: "Weeks 3-4",
    activities: [
      "Build stair-step logic, override hierarchies, and maintenance automation in staging.",
      "Run simulator scenarios with finance, compliance, and field leadership.",
      "Validate tax, AML, and FX checks before go-live."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 5-6",
    activities: [
      "Publish leader dashboards, pacing alerts, and training modules to the field portal.",
      "Activate live health monitors, retention alerts, and executive scorecards.",
      "Finalize communications, AI co-pilot prompts, and support runbooks for launch."
    ],
    icon: BarChart3
  }
];

const FAQS: Faq[] = [
  {
    question: "Can we manage different stair-step tiers per region?",
    answer:
      "Yes. Configure independent thresholds, maintenance cycles, and override percentages per market while keeping a consolidated executive view."
  },
  {
    question: "How does Cloud MLM Software handle breakaway resets?",
    answer:
      "Maintenance monitors evaluate volume and compliance across defined periods. If a leg drops, automation resets rank, alerts leaders, and recalculates override eligibility without manual edits."
  },
  {
    question: "What reports do finance and compliance receive?",
    answer:
      "They access ledgers showing accrued versus paid overrides, exception queues, AML/KYC status, and tax documentation for every leadership payout. Export-ready formats feed accounting platforms directly."
  },
  {
    question: "How do you onboard field leaders to the new cadence?",
    answer:
      "Our enablement team rolls out guided training, simulator walk-throughs, and AI-assisted coaching prompts. Leaders can self-audit progress inside the mobile app with goal trackers." 
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Stair Step Plan";
  const description =
    "Cloud MLM Software delivers a stair-step MLM plan blueprint—breakaway governance, override automation, and field enablement backed by data.";

  return {
    title,
    description,
    keywords: [
      "MLM Stair Step plan",
      "breakaway compensation software",
      "Cloud MLM Software",
      "stair-step plan automation",
      "MLM override management",
      "leadership retention analytics"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-stair-step-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MlmStairStepPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function MlmStairStepPlanPage({ params }: MlmStairStepPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/stair-step-plan-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/mlm-stair-step-plan-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              MLM plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              MLM Stair Step plan blueprint for unstoppable breakaway growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Capture every promotion, override, and maintenance cycle inside Cloud MLM Software. Our stair-step playbook keeps founders, finance, and field leaders aligned on breakaway cadence, compliance evidence, and profitability.
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
                  Launch the stair-step calculator
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            <StairStepPlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Mechanics that keep every step accountable
          </h2>
          <p className="text-sm text-muted-foreground">
            Model the stair-step plan as a living system. Cloud MLM Software enforces progression logic, override math, and enablement cadences automatically so your team can focus on growth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {MECHANICS.map((mechanic) => {
            const Icon = mechanic.icon;
            return (
              <article key={mechanic.title} className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 dark:border-white/15 dark:bg-slate-950/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{mechanic.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{mechanic.summary}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground dark:text-white/70">
                  {mechanic.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span aria-hidden>•</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Foundations for sustained breakaway health</h2>
          <p className="text-sm text-muted-foreground">
            Align compensation, compliance, and field enablement so every leg climbs confidently. Pair this analysis with our <Link href={plansHref} className="underline decoration-dotted underline-offset-4">full MLM plan library</Link> to benchmark against other models.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 dark:border-white/15 dark:bg-slate-950/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground dark:text-white/70">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive scenarios built on real deployments</h2>
          <p className="text-sm text-muted-foreground">
            Pair the simulator with these field-tested scenarios to understand coaching load, compliance checks, and override profitability before you launch.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {EXAMPLES.map((example) => {
            const Icon = example.icon;
            return (
              <article key={example.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 dark:border-white/15 dark:bg-slate-950/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{example.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{example.baseline}</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{example.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Member & leader journey</h2>
          <p className="text-sm text-muted-foreground">
            Every stage blends coaching, compliance, and analytics so leaders know what to do next. Invite your team to the <Link href={demoHref} className="underline decoration-dotted underline-offset-4">stair-step demo environment</Link> to experience the cadence firsthand.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {JOURNEYS.map((journey) => {
            const Icon = journey.icon;
            return (
              <article key={journey.stage} className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 dark:border-white/15 dark:bg-slate-950/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{journey.stage}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{journey.description}</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{journey.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Implementation roadmap</h2>
          <p className="text-sm text-muted-foreground">
            Launch with certainty. Our delivery team has migrated legacy stair-step plans, reconciled overrides, and satisfied banking audits in record time.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {ROADMAP.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 dark:border-white/15 dark:bg-slate-950/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{step.phase}</h3>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{step.duration}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground dark:text-white/70">
                  {step.activities.map((activity) => (
                    <li key={activity} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Operational blueprint</h2>
          <p className="text-sm text-muted-foreground">
            Configure once, iterate often. Cloud MLM Software keeps stair-step rules flexible while protecting compliance and financial integrity.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {BLUEPRINT.map((pattern) => {
            const Icon = pattern.icon;
            return (
              <article key={pattern.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 p-6 dark:border-white/15 dark:bg-slate-950/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{pattern.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pattern.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-primary/40 bg-primary/5 p-10 shadow-sm dark:border-white/20 dark:bg-white/5">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-foreground dark:text-white">How Cloud MLM Software helps</h2>
              <p className="text-sm text-muted-foreground dark:text-white/80">
                Deploy the stair-step plan with breakaway automation, compliance workflows, AI insights, and guided enablement. We partner with your finance, legal, and field teams from modelling to rollout.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-white/70">
                {CTA_POINTS.map((point) => (
                  <li key={point} className="flex gap-2">
                    <HelpCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={pricingHref}>
                  Review pricing & implementation
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">FAQs</h2>
          <p className="text-sm text-muted-foreground">
            Still exploring stair-step mechanics? Start a <Link href={calculatorHref} className="underline decoration-dotted underline-offset-4">calculator scenario</Link> or chat with our architects anytime.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-white/80 p-6 dark:border-white/15 dark:bg-slate-950/60">
              <h3 className="text-lg font-semibold text-foreground dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function resolveLocale(locale: string): Locale {
  if (isSupportedLocale(locale)) {
    return locale;
  }

  return i18n.defaultLocale;
}
