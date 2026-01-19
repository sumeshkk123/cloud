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
  LineChart,
  Megaphone,
  Network,
  Orbit,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
  Users
} from "lucide-react";
import PassUpFlowSimulator from "@/components/plan/pass-up-flow-simulator";

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
    label: "Matrix fill accuracy",
    value: "98.9%",
    detail: "Auto placement engine validated across 18 enterprise migrations in 2024."
  },
  {
    label: "Queue transparency score",
    value: "4.7 / 5",
    detail: "Field CSAT for real-time queue dashboards and cycle projections."
  },
  {
    label: "Cycle time reduction",
    value: "42% faster",
    detail: "Median drop in time-to-cycle once smart spillover and re-entry rules deploy."
  },
  {
    label: "Compliance-ready markets",
    value: "9 regions",
    detail: "AML/KYC, GST/VAT, and product disclosure controls prebuilt for auto-fill rollouts."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Auto-placement choreography",
    summary: "Orchestrate forced-matrix placements that honour sponsor intent and geography.",
    outcomes: [
      "Route enrolments into the next open seat while respecting placement locks and overrides.",
      "Throttle spillover so corporate volume and field-generated recruits stay balanced.",
      "Stress-test saturation scenarios before rules move from staging to production."
    ],
    icon: Network
  },
  {
    title: "Queue visibility & re-entry",
    summary: "Give leaders, finance, and compliance the same view of queue health and re-entries.",
    outcomes: [
      "Project when promoters will cycle and re-enter based on pack mix and velocity.",
      "Alert compliance when cooldown timers or re-entry throttles are about to trigger.",
      "Surface coaching cues so spillover teams receive support before momentum fades."
    ],
    icon: TimerReset
  },
  {
    title: "Governance & payout controls",
    summary: "Close every matrix with audit-ready payouts, taxes, and recognition flows.",
    outcomes: [
      "Pause rewards until AML, tax, or product qualification checks are cleared.",
      "Snapshot carry-forward balances and statement edits for auditors and banking partners.",
      "Blend plan bonuses with promotions without breaching compensation ceilings."
    ],
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Predictable growth structure",
    description: "Model matrix fills, re-entries, and expansion plans with real-time telemetry.",
    bullets: [
      "Forecast when new matrices spin up so inventory and finance stay aligned.",
      "Simulate geographic or product-specific placement rules before go-live.",
      "Expose leg and queue health to founders, field leaders, and analysts."
    ],
    icon: Layers
  },
  {
    title: "Regulation-ready operations",
    description: "Keep forced-matrix payouts inside global compliance guardrails.",
    bullets: [
      "Embed AML, FTC cooling-off, and documentation workflows for each market.",
      "Log every rule change with timestamps, approvers, and impact previews.",
      "Generate statements with tax, invoicing, and FX data already reconciled."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Field enablement and adoption",
    description: "Equip leaders and promoters with clarity, coaching, and recognition.",
    bullets: [
      "Publish mobile dashboards showing queue position, cycle forecasts, and next actions.",
      "Deliver just-in-time training when promoters are close to completing a matrix.",
      "Automate recognition feeds as teams close cycles or rescue lagging levels."
    ],
    icon: Megaphone
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Global wellness prelaunch",
    baseline: "6,500 founders, 3×7 matrix, premium starter packs across three currencies.",
    insight:
      "Cloud MLM Software balances corporate spillover with sponsor-led growth, forecasting when new matrices will fire and what cash flow finance should expect.",
    icon: Rocket
  },
  {
    title: "EU compliance audit",
    baseline: "France, Germany, and Spain launch with product disclosure and e-invoicing mandates.",
    insight:
      "Auto-fill payouts pause until VAT invoices, KYC, and cooling-off rules are cleared, giving compliance full audit trails in one workspace.",
    icon: LineChart
  },
  {
    title: "APAC digital re-entry challenge",
    baseline: "High digital enrolment velocity with influencers triggering rapid re-entries.",
    insight:
      "Queue dashboards, AI nudges, and configurable cooldown timers stop overload while keeping the field confident in the process.",
    icon: Orbit
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description: "Drag-and-drop matrix rules, spillover logic, cooldowns, and promotions with version control.",
    icon: Settings2
  },
  {
    title: "Analytics spine",
    description: "Dashboards benchmark queue health, cycle velocity, attrition, and SKU contribution in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement hub",
    description: "Serve guided scripts, calculators, and learning paths aligned to matrix milestones.",
    icon: Users
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Enrollment & placement",
    description: "A promoter signs, clears compliance, and is auto-placed based on sponsor rules.",
    focus: "Leaders preview impact on their matrix, spillover commitments, and product mix in real time.",
    icon: Compass
  },
  {
    stage: "Qualification checkpoints",
    description: "Autoship, training, and compliance steps determine when seats activate.",
    focus: "Dashboards flag stalled legs so support teams intervene before the queue backs up.",
    icon: GaugeCircle
  },
  {
    stage: "Cycle completion & re-entry",
    description: "Matrices close, payouts execute, and re-entries trigger with configured cooldowns.",
    focus: "Finance, compliance, and leaders review receipts, recognition, and new queue positions in one place.",
    icon: Target
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & blueprint",
    duration: "Week 1",
    activities: [
      "Document compensation objectives, placement policies, and regulatory constraints.",
      "Ingest historic spreadsheets or statements to map carryover and promo rules.",
      "Define analytics baselines for queue velocity, re-entry rates, and churn."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & simulation",
    duration: "Weeks 2-4",
    activities: [
      "Build matrix rules, spillover logic, and cooldown timers in staging.",
      "Run scenario simulations with finance, compliance, and leader councils.",
      "Validate tax, invoicing, and payout integrations before go-live."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 5-6",
    activities: [
      "Publish dashboards, calculators, and enablement paths to the field portal.",
      "Activate monitoring packs for queue saturation, churn spikes, and compliance exceptions.",
      "Coordinate go-live war rooms with support SLAs and escalation playbooks."
    ],
    icon: Rocket
  }
];

const CTA_POINTS: string[] = [
  "Automate forced-matrix placements with audit-ready controls.",
  "Give leaders real-time queue dashboards and re-entry forecasts.",
  "Blend promotions, loyalty wallets, and compliance guardrails without spreadsheets.",
  "Integrate CRM, PSP, tax, and learning stacks around the auto-fill plan."
];

const FAQS: Faq[] = [
  {
    question: "How do we prevent queue bottlenecks when enrolment spikes?",
    answer:
      "Smart throttles, spillover prioritisation, and cooldown timers keep the queue moving. Leaders receive alerts when certain legs require support or when promoters approach re-entry."
  },
  {
    question: "Can auto-fill placements respect geography or enrolment source?",
    answer:
      "Yes. Configure placement tiers by geography, pack type, or lead source. Overrides and manual placements still run through the same audit trail, so nothing happens off the books."
  },
  {
    question: "What compliance guardrails are built in?",
    answer:
      "AML checks, GST/VAT validation, FTC cooling-off rules, and document requests can all block payouts until cleared. Every action records who approved it and when."
  },
  {
    question: "How are re-entries managed when a matrix closes?",
    answer:
      "Re-entry logic follows your configured cooldowns and placement priorities. The system tracks re-entry history, new queue positions, and any bonus multipliers applied."
  },
  {
    question: "Can you migrate us off spreadsheets quickly?",
    answer:
      "Our migration kits import historical matrices, carryover balances, and promo data. Dry runs highlight discrepancies so you launch with confidence."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Auto Fill MLM Plan";
  const description =
    "Explore Cloud MLM Software's auto fill MLM plan blueprint—automated matrix placements, queue visibility, and compliance-ready payouts.";

  return {
    title,
    description,
    keywords: [
      "auto fill MLM plan",
      "forced matrix compensation",
      "Cloud MLM Software",
      "auto fill MLM software",
      "matrix queue automation",
      "MLM compensation compliance",
      "MLM plan analytics"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/auto-fill-plan-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AutoFillPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function AutoFillPlanPage({ params }: AutoFillPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.14),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Cloud MLM Software expert deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Auto Fill MLM plan blueprint engineered for predictable, compliant scaling.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Forced matrices thrive when placement logic, queue visibility, and compliance run in harmony. Cloud MLM Software automates matrix fills, spillover, and re-entries so your teams can focus on growth. Explore parallel plan models in our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>
              {" "}and simulate outcomes below.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a matrix architect
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
                  Explore plan calculators
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary dark:text-primary">
                <Link href={pricingHref}>
                  Review pricing options
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
            <PassUpFlowSimulator
              variant="auto-fill"
              className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Master the auto fill compensation mechanics
          </h2>
          <p className="text-sm text-muted-foreground">
            Configure matrix placement, queue management, and compliance guardrails with confidence.
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
            Alignment pillars that keep auto fill plans resilient
          </h2>
          <p className="text-sm text-muted-foreground">
            Align founders, finance, compliance, and the field so the matrix experience remains trusted.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive auto fill plan examples</h2>
            <p className="text-sm text-muted-foreground">
              Stress-test your matrix before launch with data-driven scenarios from Cloud MLM Software engagements.
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
            Member and leader journey across the matrix lifecycle
          </h2>
          <p className="text-sm text-muted-foreground">
            Give every stakeholder clarity—from onboarding to payout sign-off—so the matrix never feels opaque.
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
                <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                <p className="text-sm text-muted-foreground">{journey.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Focus</p>
                <p className="text-sm text-muted-foreground">{journey.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap you can trust
          </h2>
          <p className="text-sm text-muted-foreground">
            Move from discovery to a governed launch with weekly checkpoints and clearly defined owners.
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
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{step.duration}</p>
                  </div>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Operational blueprint
          </h2>
          <p className="text-sm text-muted-foreground">
            Build the analytics, enablement, and automation spine that keeps auto fill plans resilient.
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
            Answer the top concerns from founders, finance teams, compliance officers, and field leaders evaluating an auto fill rollout.
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
              Launch an auto fill plan that delights the field, satisfies regulators, and scales with confidence.
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
                  Schedule a matrix workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref}>
                  Review pricing options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Want to benchmark other compensation models? Visit our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan hub
              </Link>
              {" "}for calculators, pricing intel, and launch playbooks.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance tests cover auto-placement, payouts, and documentation workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards track queue velocity, cycle streaks, and inventory triggers.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep leaders on pace to close cycles before overflow builds.</span>
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
