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
import MonolinePlanSimulator from "@/components/frontend/plan/monoline-plan-simulator";

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
    label: "Queue cycle time",
    value: "11.5 days",
    detail: "Average time for new entrants to reach payout once automation and compliance checks are enabled."
  },
  {
    label: "Override reconciliation",
    value: "99.7% accuracy",
    detail: "Variance-free tracking across differential overrides, loyalty pools, and fast-start bonuses."
  },
  {
    label: "Re-entry driven retention",
    value: "+24%",
    detail: "Median lift in active promoters after re-entry journeys and loyalty nudges go live."
  },
  {
    label: "Audit readiness",
    value: "48 hours",
    detail: "Time to compile AML, KYC, and payout evidence for banking or regulator reviews."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Queue clarity for every member",
    description:
      "Give promoters and finance instant visibility into queue position, expected payout timing, and documentation status.",
    bullets: [
      "Expose queue velocity dashboards with segment filters for new, pending, and re-entry slots.",
      "Alert sponsors when documentation or payment issues block a downstream payout.",
      "Let compliance approve or reject placements with auditable comments and evidence."
    ],
    icon: Target
  },
  {
    title: "Momentum anchored in re-entry",
    description:
      "Keep monoline energy high with automated re-entry, loyalty pools, and guided offers tied to behaviour triggers.",
    bullets: [
      "Trigger win-back journeys when legacy members are eligible for re-entry.",
      "Blend loyalty reserves with fast-start bonuses without breaking profitability targets.",
      "Personalise coaching nudges so leaders focus on slow-moving queue segments."
    ],
    icon: GaugeCircle
  },
  {
    title: "Finance and compliance in lockstep",
    description:
      "Forecast pools, taxes, and reserves in real time so payouts move fast without regulatory risk.",
    bullets: [
      "Balance leadership overrides, loyalty pools, and admin fees in a single ledger.",
      "Run AML, KYC, and payment screening before the queue advances.",
      "Generate export-ready payout packs with receipts, approvals, and currency breakdowns."
    ],
    icon: ShieldCheck
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Launch queue acceleration",
    baseline: "Day-one launch with 320 promoters, 12% re-entry rate, USD 240 average pack value.",
    insight:
      "Cloud MLM Software forecasts queue velocity, highlights compliance gaps, and secures override pools before the first payout run.",
    icon: Rocket
  },
  {
    title: "Re-entry loyalty sprint",
    baseline: "Legacy leaders rejoin after nine months away with tiered loyalty incentives and coaching tasks.",
    insight:
      "Automated journeys increase re-entry participation by 27% while keeping admin fees profitable.",
    icon: GaugeCircle
  },
  {
    title: "Cross-border payout check",
    baseline: "Three market currencies, local tax IDs required, and staggered banking releases every 48 hours.",
    insight:
      "Compliance workspaces bundle receipts, AML checks, and FX proof for each queue cycle.",
    icon: ShieldCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Queue orchestration studio",
    description:
      "Model queue depth caps, re-entry paths, and documentation rules inside a visual engine ready for multi-market deployments.",
    icon: Settings2
  },
  {
    title: "Intelligence layer",
    description:
      "Dashboards track queue position, payout velocity, retention, and profitability at leadership, finance, and exec levels.",
    icon: Sparkles
  },
  {
    title: "Field enablement hub",
    description:
      "Serve scripts, micro-learning, and automation triggers that keep leaders focused on the right members at the right time.",
    icon: Layers
  }
];

const CTA_POINTS: string[] = [
  "Launch a monoline queue with transparent pacing, audit-ready documentation, and automated re-entry.",
  "Automate overrides, loyalty reserves, and compliance approvals—no spreadsheets required.",
  "Arm field leaders with data-backed coaching tasks and AI nudges tied to queue stages.",
  "Collaborate with Cloud MLM Software architects to tailor profitability, compliance, and experience goals."
];

const MECHANICS: Mechanic[] = [
  {
    title: "Monoline queue governance",
    summary: "Run a single-line queue with configurable depth, promotion rules, and re-entry triggers that scale across markets.",
    outcomes: [
      "Define intake caps, upgrade logic, and documentation checkpoints per market.",
      "Auto-requeue leaders while preserving legacy overrides and loyalty accruals.",
      "Pause or fast-track queue segments when compliance or finance flags arise."
    ],
    icon: Target
  },
  {
    title: "Revenue & override intelligence",
    summary: "Forecast real-time cash flow, admin fees, and leadership pools with confidence in every payout run.",
    outcomes: [
      "Compare projected versus actual payout velocity and margin impact.",
      "Segment loyalty pools, admin reserves, and differential overrides by market.",
      "Sync accounting-ready exports to banking, ERP, and tax systems automatically."
    ],
    icon: BarChart3
  },
  {
    title: "Enablement automation",
    summary: "Keep the field energised with guided tasks, AI prompts, and retention journeys tailored to queue stages.",
    outcomes: [
      "Assign daily coaching actions when members stall in the queue.",
      "Deliver re-entry success paths via mobile push, email, and in-app notifications.",
      "Scorecard leaders on velocity, compliance readiness, and retention impact."
    ],
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Enrolment to queue placement",
    description: "New members complete onboarding, ID checks, and payment before landing in the monoline queue.",
    focus: "Sponsors view live position, expected payout date, and missing documentation in one dashboard.",
    icon: Compass
  },
  {
    stage: "Queue climb & re-entry",
    description: "Automation tracks volume, loyalty points, and coaching tasks until payout triggers and re-entry eligibility opens.",
    focus: "Leaders receive prompts to encourage engagement and prevent churn before payout.",
    icon: ClipboardCheck
  },
  {
    stage: "Payout & loyalty expansion",
    description: "Finance closes loops, applies admin fees, and unlocks loyalty incentives that prepare members for the next cycle.",
    focus: "Compliance exports receipts and banking proof while field enablement launches follow-up journeys.",
    icon: Rocket
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Weeks 1-2",
    activities: [
      "Capture queue objectives, loyalty policies, and regulatory nuances per region.",
      "Ingest legacy payout data to benchmark velocity, churn, and profitability.",
      "Prototype queue throughput, re-entry triggers, and documentation workflows."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & testing",
    duration: "Weeks 3-4",
    activities: [
      "Build queue automation, re-entry logic, and payout ledgers in staging.",
      "Run simulator scenarios with finance, compliance, and field leadership.",
      "Validate AML, tax, and banking evidence packets before launch."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 5-6",
    activities: [
      "Deploy dashboards, AI prompts, and mobile-ready scripts to the field portal.",
      "Activate live queue monitors, profitability scorecards, and alerting.",
      "Finalise communications, support runbooks, and regulator-facing documentation."
    ],
    icon: BarChart3
  }
];

const FAQS: Faq[] = [
  {
    question: "Can we configure different queue depths or packs per market?",
    answer:
      "Yes. Each market can run its own queue depth, pack pricing, admin fees, and tax rules while feeding a consolidated executive dashboard."
  },
  {
    question: "How do re-entry rules stay compliant?",
    answer:
      "Re-entry logic enforces payment proof, identity verification, and cooling-off periods. Compliance can approve or reject requests with full audit history."
  },
  {
    question: "What visibility does finance receive?",
    answer:
      "Finance teams track overrides, loyalty pools, admin fees, and margin impact in real time. Export-ready ledgers sync with accounting and banking systems instantly."
  },
  {
    question: "How quickly can the field adopt the new cadence?",
    answer:
      "We deliver guided training, simulator walk-throughs, and AI prompts. Leaders monitor queue progress in the mobile app and receive automated coaching tasks."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Monoline Plan";
  const description =
    "Cloud MLM Software deploys a monoline MLM plan blueprint—queue transparency, override automation, and re-entry journeys in one platform.";

  return {
    title,
    description,
    keywords: [
      "MLM Monoline plan",
      "monoline compensation software",
      "Cloud MLM Software",
      "queue-based MLM plan",
      "MLM re-entry automation",
      "monoline override management"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/monoline-mlm-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MonolineMlmPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function MonolineMlmPlanPage({ params }: MonolineMlmPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/monoline-plan-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/monoline-mlm-plan-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-sky-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              MLM plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Monoline MLM plan blueprint for unstoppable queue growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software keeps your monoline queue in motion—balancing velocity, re-entry, and compliance so every payout lands with confidence.
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
                  Launch the monoline calculator
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
            <MonolinePlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Mechanics that protect velocity and profitability
          </h2>
          <p className="text-sm text-muted-foreground">
            Design your queue as a living system. Cloud MLM Software automates progression logic, overrides, and compliance so the monoline keeps moving.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Foundations for sustainable monoline growth</h2>
          <p className="text-sm text-muted-foreground">
            Align compensation, compliance, and enablement to keep every queue position moving. Compare against other models in our <Link href={plansHref} className="underline decoration-dotted underline-offset-4">full MLM plan library</Link> to stress-test strategy.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive scenarios from real deployments</h2>
          <p className="text-sm text-muted-foreground">
            Blend simulator insights with these proven field scenarios to map compliance workload, queue velocity, and coaching demand before launch.
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
            Every stage blends coaching, compliance, and analytics so leaders know what to do next. Invite your team to the <Link href={demoHref} className="underline decoration-dotted underline-offset-4">monoline demo environment</Link> to experience the cadence firsthand.
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
            Launch with certainty. Our delivery team has migrated monoline plans, reconciled overrides, and satisfied banking audits on aggressive timelines.
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
            Configure once, iterate often. Cloud MLM Software keeps queue rules agile while safeguarding compliance and financial integrity.
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
                Deliver a monoline plan that scales—queue automation, override governance, compliance workflows, and AI insights in one platform.
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
            Still exploring monoline mechanics? Start a <Link href={calculatorHref} className="underline decoration-dotted underline-offset-4">calculator scenario</Link> or chat with our architects anytime.
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
