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
  GaugeCircle,
  HelpCircle,
  Layers,
  Network,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import MatrixPlanSimulator from "@/components/frontend/plan/matrix-plan-simulator";

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
    label: "Spillover utilisation",
    value: "78%",
    detail: "Average proportion of matrix nodes auto-filled via governed spillover in 2024 launches."
  },
  {
    label: "Cycle compliance pass",
    value: "96%",
    detail: "Matrix payouts clearing AML, GST/VAT, and KYC reviews on the first submission."
  },
  {
    label: "Depth activation time",
    value: "21 days",
    detail: "Median time to light up five levels in a 3x8 build when enablement cadences trigger on schedule."
  },
  {
    label: "Deployment timeline",
    value: "6 weeks",
    detail: "Typical window from modelling to multi-region go-live for forced matrix compensation."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Structure-first modelling",
    description:
      "Lock matrix width, depth, and compression rules with finance and compliance sign-off before launch day.",
    bullets: [
      "Simulate 2x10 through 5x7 formats with breakage, fast start, and leadership overlays.",
      "Forecast inventory and cash requirements per level to keep operations in sync.",
      "Localize tax, withholding, and FX adjustments so payouts stay audit ready."
    ],
    icon: Layers
  },
  {
    title: "Governed spillover pipeline",
    description:
      "Control how new enrolments cascade through the matrix with automated placement logic and alerts.",
    bullets: [
      "Prioritize qualifying legs or balanced depth with configurable spillover priorities.",
      "Pause placements when documentation, payment, or health-claim reviews are pending.",
      "Serve sponsors a live queue so they can coach recruits headed to their downline."
    ],
    icon: Network
  },
  {
    title: "Field enablement for depth",
    description:
      "Give mentors and new distributors visibility, recognition, and resources that sustain deep growth.",
    bullets: [
      "Automate milestone badges as each level fills to keep momentum visible.",
      "Deliver role-based scripts and sampling campaigns calibrated to depth and volume mix.",
      "Highlight lagging legs with AI nudges so field leaders intervene early."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "3x8 wellness launch",
    baseline: "1,200 monthly orders, curated starter packs, compliance controls across AU/NZ.",
    insight:
      "Matrix Plan Simulator forecasts spillover pressure by level, prompting coaching tasks before depth saturation.",
    icon: Rocket
  },
  {
    title: "4x6 fintech accelerator",
    baseline: "Digital services enrolment, 30-day activation window, leadership bonuses on level five.",
    insight:
      "Cloud MLM Software fronts audit-ready documentation checks before leadership pay triggers, preventing clawbacks.",
    icon: GaugeCircle
  },
  {
    title: "Regulatory audit rehearsal",
    baseline: "Three-country rollout, bonus compression, staggered payout reserves.",
    insight:
      "Governance dashboards reconcile occupancy, breakage, and reserves for legal teams in under an hour.",
    icon: ShieldCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Matrix configuration studio",
    description:
      "Define width, depth, spillover priority, and leadership pools with visual decision trees and change logs.",
    icon: Settings2
  },
  {
    title: "Occupancy analytics",
    description:
      "Monitor level-by-level fill velocity, spillover usage, and compression savings in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement center",
    description:
      "Push training, recognition, and product bundles aligned to each stage of depth activation.",
    icon: Users
  }
];

const CTA_POINTS: string[] = [
  "Model forced matrix capacity, spillover, and compression before you roll out pricing.",
  "Give regulators immutable proof of tax, identity, and claims compliance for every payout.",
  "Provide leaders with occupancy alerts, coaching playbooks, and level-based incentives in one hub.",
  "Connect Cloud MLM calculators, fee engines, and BI dashboards for executive oversight."
];

const MECHANICS: Mechanic[] = [
  {
    title: "Matrix capacity engine",
    summary: "Track width, depth, and compression scenarios so you know exactly how the matrix fills over time.",
    outcomes: [
      "Translate recruit velocity into level-by-level occupancy projections.",
      "Identify where compression can recover breakage before it impacts cash flow.",
      "Align pack requirements per level to maintain sustainable product movement."
    ],
    icon: GaugeCircle
  },
  {
    title: "Placement and spillover control",
    summary: "Govern spillover, manual placement, and re-entry paths without spreadsheets.",
    outcomes: [
      "Automate equitable placements while preserving qualification priorities.",
      "Give mentors override rights with audit trails when strategic moves are required.",
      "Alert compliance teams if undocumented recruits reach protected levels."
    ],
    icon: Network
  },
  {
    title: "Payout compliance guardrails",
    summary: "Keep every matrix payout audit ready with automated checks and documentation.",
    outcomes: [
      "Hold bonuses until GST/VAT, AML, and identity tasks are confirmed.",
      "Route clawback scenarios through finance with clear recovery logic.",
      "Produce level-by-level payout statements for banking and legal partners."
    ],
    icon: ShieldCheck
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Enrollment and placement",
    description: "New distributors register, pass onboarding, and land in the matrix with full transparency.",
    focus: "Sponsors track placement order, spillover eligibility, and required starter actions.",
    icon: ClipboardCheck
  },
  {
    stage: "Level advancement",
    description: "Volume, training checkpoints, and compliance sign-offs unlock deeper levels and bonuses.",
    focus: "Leaders receive AI nudges to stabilise legs before depth churn appears.",
    icon: Layers
  },
  {
    stage: "Leadership payout release",
    description: "Compression, reserves, and documentation close out so finance releases leadership pools.",
    focus: "Audit trails, receipts, and statements sync instantly to banking systems.",
    icon: GaugeCircle
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery and modelling",
    duration: "Weeks 0-2",
    activities: [
      "Gather legacy matrix spreadsheets, compliance guardrails, and launch KPIs.",
      "Prototype width/depth combinations with spillover and compression sensitivities.",
      "Align finance, compliance, and field goals on success metrics."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration and simulation",
    duration: "Weeks 3-4",
    activities: [
      "Configure placements, overrides, and reserves in Cloud MLM staging.",
      "Run Matrix Plan Simulator workshops with finance and leadership teams.",
      "Integrate payment gateways, tax engines, and messaging for automated checkpoints."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement and launch",
    duration: "Weeks 5-6",
    activities: [
      "Publish enablement content, recognition journeys, and calculators for the field.",
      "Monitor live dashboards for spillover stress, churn risk, and compliance holds.",
      "Hold retro sessions to fine-tune pacing before wider expansion."
    ],
    icon: Rocket
  }
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software manage forced matrix spillover?",
    answer:
      "Placement rules prioritise balanced growth while respecting rank and qualification criteria. Every spillover is logged with the sponsor, leg, and compliance status for instant audits."
  },
  {
    question: "Can we run multiple matrix sizes at once?",
    answer:
      "Yes. Operate concurrent matrices for different product lines or markets, each with its own width, depth, currency, and payout logic managed from one control centre."
  },
  {
    question: "What happens when refunds or chargebacks occur?",
    answer:
      "Refund activity recalculates net volume, adjusts compression, and reverses bonuses as needed while notifying finance, field leaders, and the impacted downline."
  },
  {
    question: "How do you support regulators in different regions?",
    answer:
      "We maintain jurisdiction-specific disclosure libraries, payout evidence, and AML workflows so legal teams can supply regulators with exportable dossiers in minutes."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Matrix Plan MLM Plan | Cloud MLM Software";
  const description =
    "Explore the MLM Matrix Plan with Cloud MLM Software—model spillover, automate compliance, and equip leaders with depth-focused analytics.";

  return {
    title,
    description,
    keywords: [
      "MLM Matrix Plan",
      "forced matrix compensation",
      "Cloud MLM Software",
      "matrix spillover automation",
      "MLM compliance software",
      "matrix plan simulator",
      "network marketing analytics"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-matrix-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MLMMatrixPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function MLMMatrixPlanPage({ params }: MLMMatrixPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/matrix-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_82%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Cloud MLM Software expert analysis
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              MLM Matrix Plan MLM plan: Cloud MLM Software’s expert deep dive.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Build a matrix plan that balances growth speed, compliance, and field confidence. Cloud MLM Software orchestrates spillover, compression, and payouts with transparent dashboards so you scale depth responsibly.
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
                  Explore matrix calculators
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
            <MatrixPlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Matrix mechanics that reward sustainable depth
          </h2>
          <p className="text-sm text-muted-foreground">
            Align spillover, compression, and leadership pools so finance, compliance, and field leaders pull in the same direction.
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
            Foundations that align compliance, product, and field energy
          </h2>
          <p className="text-sm text-muted-foreground">
            Build shared visibility so every stakeholder knows how the matrix fills, where risks sit, and which actions unlock the next level.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive plan scenarios</h2>
            <p className="text-sm text-muted-foreground">
              Stress-test depth, spillover, and compliance before launch so executives and mentors understand the outcomes.
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
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Cloud MLM Software insight</p>
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
            Member and leader journey clarity
          </h2>
          <p className="text-sm text-muted-foreground">
            Give every participant clarity on placement, qualification, and payout so confidence stays high throughout the matrix. 
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
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Cloud MLM focus</p>
                <p className="text-sm text-muted-foreground">{journey.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap tuned for matrix leaders
          </h2>
          <p className="text-sm text-muted-foreground">
            Move from modelling to live payouts with a phased approach that keeps compliance and the field aligned.
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
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">{step.duration}</span>
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
            Operational blueprint to sustain momentum
          </h2>
          <p className="text-sm text-muted-foreground">
            Combine automation, analytics, and enablement assets in one SaaS platform purpose-built for the matrix plan.
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
            Address the most common questions from founders, finance leaders, and compliance officers evaluating a forced matrix plan.
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
              Partner with Cloud MLM Software to launch a matrix plan that protects compliance, equips the field, and scales internationally with confidence.
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
              Compare additional models in our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{" "}
              to access calculators, demos, and AI playbooks for every compensation strategy.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance tests validate placements, AML evidence, and tax documentation.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards benchmark level fill rates, churn risk, and compression savings.</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts guide leaders to stabilise legs before depth milestones slip.</span>
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
