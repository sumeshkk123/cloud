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
  Activity,
  ArrowUpRight,
  BarChart3,
  CalendarRange,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  GitBranch,
  Globe2,
  HelpCircle,
  Layers,
  LineChart,
  Rocket,
  Scale,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import PassUpFlowSimulator from "@/components/frontend/plan/pass-up-flow-simulator";

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
    label: "Matched cycle accuracy",
    value: "99.4%",
    detail: "Binary payout validations stay in lockstep with policy across Cloud MLM Software 2024 launches."
  },
  {
    label: "Carryover reconciliation",
    value: "65% faster",
    detail: "Median reduction in manual balancing once auto-flush rules and weak-leg nudges activate."
  },
  {
    label: "Compliance coverage",
    value: "12 regions",
    detail: "AML, FTC, DSA, GST/VAT guardrails preconfigured for binary payout audits on five continents."
  },
  {
    label: "Field dashboard adoption",
    value: "3.8×",
    detail: "Weekly engagement lift after binary health scores and coaching scripts go live in the field hub."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Match-cycle engine",
    summary: "Automate how left and right legs qualify, match, and cycle with sponsor-aware placement rules.",
    outcomes: [
      "Distribute new joins by hierarchy, spillover limits, and configurable separation windows.",
      "Lock cycle creation behind verified enrolments, payment clears, and tax document checks.",
      "Simulate pair ratios before changes ripple through production teams."
    ],
    icon: GitBranch
  },
  {
    title: "Carryover intelligence",
    summary: "Keep strong-leg volume audit ready with live ceilings, flush timers, and governance approvals.",
    outcomes: [
      "Flag approaching flush events with exception workflows for finance and compliance.",
      "Snapshot carryover balances down to distributor level for every statement run.",
      "Automatically bank or release volume when leadership promotions adjust limits."
    ],
    icon: GaugeCircle
  },
  {
    title: "Dynamic commission throttles",
    summary: "Throttle payouts the moment compliance, AML, or banking risks appear.",
    outcomes: [
      "Pause cycle payments if KYC, CPF/CURP, or GST data is missing.",
      "Route escalations to compliance with full audit trails and document attachments.",
      "Blend binary earnings with promotional overlays without breaking caps."
    ],
    icon: Activity
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Balanced growth lens",
    description: "Give founders, finance, and field leaders the same view of binary leg health.",
    bullets: [
      "Forecast weak-leg gaps and cycle pacing week by week.",
      "Expose placement approvals so spillover supports the right leaders.",
      "Track product velocity and customer volume aligned to binary performance."
    ],
    icon: Scale
  },
  {
    title: "Regulation-ready execution",
    description: "Design binary payouts that satisfy regulators, acquirers, and banking partners.",
    bullets: [
      "Embed AML, FTC cooling-off, and e-invoicing steps by market.",
      "Log every edit to cycles, caps, and carryover thresholds for audit teams.",
      "Validate tax, CPF/CURP, and GST data before releasing commissions."
    ],
    icon: ShieldCheck
  },
  {
    title: "Field clarity at scale",
    description: "Equip leaders with real-time coaching cues to keep both legs moving.",
    bullets: [
      "Serve mobile dashboards with health scores and scripts for lagging legs.",
      "Automate recognition feeds when cycles hit milestones or when legs stall.",
      "Bundle binary calculators and learning paths directly into the promoter portal."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "North America founders sprint",
    baseline: "12,000 prelaunch leads, USD 299 enrolment pack, fast-start overlay on binary cycles.",
    insight:
      "We map pair thresholds, balance spillover from corporate leads, and forecast when founders unlock endless teams without overshooting caps.",
    icon: Rocket
  },
  {
    title: "LATAM compliance pilot",
    baseline: "Brazil and Mexico launch with CPF/CURP validation, multi-currency wallets, and SAT e-invoices.",
    insight:
      "Binary cycles pause automatically until local tax IDs and fiscal receipts are approved, keeping payouts inside regional guardrails.",
    icon: Globe2
  },
  {
    title: "Leadership reactivation challenge",
    baseline: "30-day campaign to reanimate dormant legs without spreadsheets or manual carryover edits.",
    insight:
      "AI nudges and health scoring revive weak legs, while cycle projections show who qualifies for promo multipliers before deadlines.",
    icon: LineChart
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description: "Drag and drop binary rules, pair thresholds, flush cadence, and promo overlays in one governed workspace.",
    icon: Settings2
  },
  {
    title: "Analytics command centre",
    description: "Dashboards benchmark cycle velocity, carryover banks, churn, and SKU contribution in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement spine",
    description: "Surface guided scripts, playbooks, and compensation explainers alongside live leg metrics.",
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Enrollment & placement",
    description: "A new distributor signs, uploads compliance docs, and is placed with sponsor-defined spillover logic.",
    focus: "Leaders preview leg impact, placement approvals, and pending qualifications on web or mobile.",
    icon: Compass
  },
  {
    stage: "Qualification & safeguarding",
    description: "PV, autoship, AML, and tax requirements are monitored before cycles lock.",
    focus: "Compliance dashboards show who is blocked and why, with tasks to unblock before flush windows.",
    icon: ClipboardCheck
  },
  {
    stage: "Cycle payout & recognition",
    description: "Matched cycles trigger payments, carryover updates, and recognition feeds.",
    focus: "Finance validates receipts while the field sees cycle streaks and next-target nudges.",
    icon: Target
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & data migration",
    duration: "Week 1",
    activities: [
      "Document compensation objectives, leg policies, and regulatory constraints per region.",
      "Ingest legacy statements to map carryover balances and promo rules.",
      "Baseline dashboards and KPIs aligned to binary health goals."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & simulation",
    duration: "Weeks 2-4",
    activities: [
      "Build binary rules, cycle caps, and promo overlays in staging.",
      "Run scenario simulations with finance, compliance, and leader councils.",
      "Stress-test flush windows, carryover ceilings, and bonus stacking."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & go-live",
    duration: "Weeks 5-6",
    activities: [
      "Publish dashboards, calculators, and training paths to the field portal.",
      "Launch monitoring packs for weak-leg alerts, churn spikes, and compliance exceptions.",
      "Stage go-live war room with support SLAs and escalation playbooks."
    ],
    icon: Rocket
  }
];

const CTA_POINTS: string[] = [
  "Calibrate binary cycles with fully auditable automation.",
  "Spot weak-leg gaps before flush deadlines hit.",
  "Blend promotions and global compliance guardrails without chaos.",
  "Connect CRM, PSP, ERP, and tax stacks through hardened APIs."
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software prevent surprise binary flushes?",
    answer:
      "Carryover ceilings, timed flush windows, and approval workflows alert finance and leaders before volume expires. Exceptions are logged with timestamps, notes, and document evidence."
  },
  {
    question: "Can we localise binary payouts for multiple regions?",
    answer:
      "Yes. Configure currency wallets, tax withholding rules, and AML/KYC requirements per market. Statements, invoices, and payment files adapt automatically."
  },
  {
    question: "What data do you need from our legacy binary system?",
    answer:
      "We import compensation policies, carryover balances, historical statements, and user hierarchies. A migration checklist keeps every conversion auditable."
  },
  {
    question: "How do leaders monitor weak-leg health on mobile?",
    answer:
      "Mobile dashboards display leg scores, projected cycles, and recommended actions. Push notifications nudge leaders when auto-scripts suggest interventions."
  },
  {
    question: "Can binary cycles coexist with pools or rank bonuses?",
    answer:
      "Absolutely. Binary earnings, pools, and rank bonuses run on the same engine with guardrails that prevent double payouts or compliance breaches."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Binary MLM Plan";
  const description =
    "Cloud MLM Software's binary MLM plan deep dive: automate leg balancing, carryover governance, and compliance-ready payouts.";

  return {
    title,
    description,
    keywords: [
      "Binary MLM plan",
      "binary compensation software",
      "Cloud MLM Software",
      "MLM binary calculator",
      "MLM compensation automation",
      "binary plan compliance",
      "network marketing payouts"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-binary-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BinaryPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function MLMBinaryPlanPage({ params }: BinaryPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/binary-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Cloud MLM Software expert deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Binary MLM plan blueprint engineered for balanced, compliant growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Pair cycles thrive when automation, analytics, and compliance move together. Cloud MLM Software orchestrates binary matching, carryover governance, and field enablement so your teams scale without firefighting. Explore more plans in our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>
              {" "}or launch simulations below.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a binary architect
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
                  Launch binary calculator
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary dark:text-primary">
                <Link href={demoHref}>
                  Watch live demo
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
              variant="binary"
              className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Master the binary compensation mechanics
          </h2>
          <p className="text-sm text-muted-foreground">
            Configure, audit, and iterate on binary engines without losing oversight of compliance or field outcomes.
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
            Alignment pillars that keep binary plans compliant and energised
          </h2>
          <p className="text-sm text-muted-foreground">
            Ensure product, compliance, and field operations stay synchronised as the plan scales across markets.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive binary plan examples</h2>
            <p className="text-sm text-muted-foreground">
              Bring binary scenarios to life with Cloud MLM Software’s simulators, analytics, and compliance automation.
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
            Member and leader journey from enrollment to matched cycles
          </h2>
          <p className="text-sm text-muted-foreground">
            Equip every role with clarity—from onboarding to payout sign-off—so binary cycles stay predictable.
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
            Move from discovery to a governed go-live with weekly checkpoints and transparent owners.
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
            Build the analytics, enablement, and automation spine that keeps binary plans resilient.
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
            Key answers for founders, finance teams, compliance officers, and field leaders evaluating a binary rollout.
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
              Launch a binary plan that delights the field, satisfies regulators, and scales with confidence.
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
                  Schedule a binary workshop
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
              See every plan we support inside the{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan hub
              </Link>
              . Additional pricing, calculators, and integration guides live there.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance tests cover binary cycles, flush rules, and documentation workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards monitor leg balance, carryover banks, and churn in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep leaders on pace to match cycles before deadlines.</span>
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
