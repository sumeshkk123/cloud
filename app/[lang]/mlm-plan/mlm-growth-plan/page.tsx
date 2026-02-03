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
  LineChart,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import GrowthPlanSimulator from "@/components/frontend/plans/all-plans/growth-plan-simulator";

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
    label: "Verified growth cycles",
    value: "92%",
    detail: "Growth plan launches meeting cycle compliance across seven markets in 2024."
  },
  {
    label: "Average override uplift",
    value: "+24%",
    detail: "Increase seen when growth tiers are automated with Cloud MLM Software orchestration."
  },
  {
    label: "Retention guardrail",
    value: "84% active",
    detail: "Associates remaining active through second checkpoint after targeted enablement nudges."
  },
  {
    label: "Launch cadence",
    value: "45 days",
    detail: "Median timeline from plan modelling to multi-region rollout for the MLM growth plan."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Compensation clarity at every growth tier",
    description:
      "Align growth percentages, product volume, and leadership ranks with transparent payout checkpoints.",
    bullets: [
      "Configure 30%, 60%, and 100% growth thresholds with automated overrides and guardrails.",
      "Give sponsors live dashboards with forecasted payouts, variance alerts, and required actions.",
      "Localize currency, tax, and withholding rules so bonuses land cleanly in every region."
    ],
    icon: TrendingUp
  },
  {
    title: "Compliance anchored scaling",
    description:
      "Keep regulators, banks, and consumer protection teams confident as your network accelerates growth.",
    bullets: [
      "Trigger KYC, AML, and health-claim reviews before high-value growth bonuses release.",
      "Capture immutable evidence for each checkpoint so audits reconcile in minutes, not weeks.",
      "Model payout caps aligned to U.S., EU, and APAC compensation guidelines from the start."
    ],
    icon: ShieldCheck
  },
  {
    title: "Field enablement intelligence",
    description:
      "Equip promoters with AI-guided nudges, recognition, and content calibrated to each growth stage.",
    bullets: [
      "Send proactive alerts when legs approach growth thresholds or risk sliding backwards.",
      "Sync product storytelling, sampling kits, and training for every retention milestone.",
      "Surface mobile scorecards for mentors and compliance leads to collaborate in real time."
    ],
    icon: Sparkles
  }
];

const EXAMPLES: Example[] = [
  {
    title: "30-day momentum sprint",
    baseline: "450 active associates, 60% growth target, USD 210 average monthly volume.",
    insight:
      "Cloud MLM Software maps which cohorts hit 30/60/100% growth, automates overrides, and recommends recognition plays per territory.",
    icon: Rocket
  },
  {
    title: "Leadership accelerator cohort",
    baseline: "Five director teams, 12-week promotion cycle, compliance recertifications due week six.",
    insight:
      "Leadership requirements stay synced with growth payouts—overrides pause until certifications renew and training tasks complete.",
    icon: Users
  },
  {
    title: "Regulator readiness drill",
    baseline: "Three-country rollout with FX variance, wellness claims, and distributor code updates.",
    insight:
      "An audit workbook consolidates disclosures, receipts, and payout models so legal teams can green-light the release in hours.",
    icon: ShieldCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description:
      "Model growth percentages, resets, and holdbacks with a visual rules builder tuned for compensation architects.",
    icon: Settings2
  },
  {
    title: "Analytics spine",
    description:
      "Blend CRM, e-commerce, and payout data so leaders monitor growth velocity versus forecast in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement center",
    description:
      "Deploy content, challenges, and recognition assets matched to each checkpoint in the growth journey.",
    icon: Users
  }
];

const CTA_POINTS: string[] = [
  "Model growth tiers with AI simulation before committing to production.",
  "Automate compliance evidence for regulators, banks, and merchant partners.",
  "Deliver field scorecards, recognition loops, and retention nudges at scale.",
  "Connect Cloud MLM calculators, pricing intelligence, and BI modules for executive visibility."
];

const MECHANICS: Mechanic[] = [
  {
    title: "Growth percentage engine",
    summary: "Calculate bonuses from validated growth percentages, product volume, and regional overrides.",
    outcomes: [
      "Blend velocity targets with baseline volume so fast expansion stays sustainable.",
      "Auto-adjust payouts when returns or chargebacks change net growth calculations.",
      "Segment tiers by product families or region-specific packs without rework."
    ],
    icon: LineChart
  },
  {
    title: "Tiered override orchestration",
    summary: "Manage leadership overrides and depth bonuses anchored to growth checkpoints.",
    outcomes: [
      "Stack leadership bonuses without double-paying or cascading downlines incorrectly.",
      "Throttle overrides if compliance or education requirements open remediation tasks.",
      "Preview payout impact for finance and adjust holdbacks before releasing funds."
    ],
    icon: Target
  },
  {
    title: "Momentum preservation workflow",
    summary: "Coordinate enablement, recognition, and reinvestment so teams maintain pace through every cycle.",
    outcomes: [
      "Trigger coaching cadences when engagement signals predict a growth dip.",
      "Automate reinvestment of bonus reserves into promotions or inventory credits.",
      "Feed campaign performance back into AI forecasting for the next cycle."
    ],
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Enrolment & orientation",
    description: "New associates complete compliance, select product tracks, and set their starting baseline.",
    focus: "AI welcome flows flag missing documentation so teams stay production ready.",
    icon: ClipboardCheck
  },
  {
    stage: "Growth checkpoint",
    description: "Volume and growth percentages are validated at each cycle with overrides projected instantly.",
    focus: "Sponsors receive play-by-play tasks to protect retention and unlock the next tier.",
    icon: GaugeCircle
  },
  {
    stage: "Leadership elevation",
    description: "High performers cross thresholds, bonus pools release, and new mentorship duties activate.",
    focus: "Finance sees payout previews while field leaders get recognition and coaching content.",
    icon: Sparkles
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Weeks 0-2",
    activities: [
      "Audit legacy spreadsheets, cohorts, and regional compliance obligations.",
      "Translate growth percentages into driver metrics and payout logic.",
      "Prototype cycles with finance and legal to validate assumptions."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & simulation",
    duration: "Weeks 3-5",
    activities: [
      "Configure thresholds, bonus pools, and guardrails inside Cloud MLM staging.",
      "Run the growth simulator with leadership to tune incentives and communications.",
      "Integrate banking, taxation, and messaging systems for unified data sync."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 6-8",
    activities: [
      "Publish field enablement, recognition assets, and AI coaching scripts.",
      "Monitor live dashboards for variance, churn risk, and cash-flow impacts.",
      "Conduct go-live retros and adjust holdbacks before full payout release."
    ],
    icon: Rocket
  }
];

const FAQS: Faq[] = [
  {
    question: "How does the growth percentage translate into actual payouts?",
    answer:
      "Cloud MLM Software multiplies validated growth percentages by qualifying volume, applies regional withholding, and then allocates overrides by rank so every bonus is traceable."
  },
  {
    question: "Can the platform handle different regulations by country?",
    answer:
      "Yes. Each country profile carries its own tax logic, marketing disclosures, and claims approvals, and payouts stay blocked until the right evidence is attached."
  },
  {
    question: "How do we prevent overpaying when orders are returned?",
    answer:
      "Return data feeds straight into the growth engine, recalculating net growth and adjusting bonuses or holdbacks before finance approves disbursements."
  },
  {
    question: "What support do we receive after launch?",
    answer:
      "Customer success teams operate cadence reviews, optimise automations, and refresh enablement kits so every growth cycle stays on pace."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Growth Plan MLM Plan | Cloud MLM Software";
  const description =
    "Dive into the MLM Growth Plan with Cloud MLM Software—model growth percentages, automate compliance, and empower leaders with data-backed enablement.";

  return {
    title,
    description,
    keywords: [
      "MLM Growth Plan",
      "growth percentage compensation",
      "Cloud MLM Software",
      "MLM plan automation",
      "growth plan simulator",
      "MLM compliance software",
      "network marketing analytics"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-growth-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MLMGrowthPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function MLMGrowthPlanPage({ params }: MLMGrowthPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_18%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_28%_84%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Cloud MLM Software expert analysis
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              MLM Growth Plan MLM plan: Cloud MLM Software’s expert deep dive.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Architect the MLM Growth Plan with precision. We align growth percentages, compliance gates, and field enablement so your network sustains expansion without jeopardising governance or cash flow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a growth plan architect
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
            <GrowthPlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Growth plan mechanics that reward sustainable expansion
          </h2>
          <p className="text-sm text-muted-foreground">
            Map every growth tier, override pool, and risk trigger so finance, compliance, and field leaders stay aligned.
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
            Build shared visibility for legal, finance, and field teams so growth cycles move quickly and responsibly.
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
              Stress-test growth cohorts before launch and show leadership the financial and compliance impact of every decision.
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
            Everyone involved knows the next task, the next reward, and the compliance evidence required to release funds.
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
            Implementation roadmap tuned for growth teams
          </h2>
          <p className="text-sm text-muted-foreground">
            Move from modelling to live payouts with a phased approach that balances diligence and speed.
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
            Combine automation, analytics, and enablement assets in a single SaaS platform purpose-built for the growth plan.
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
            Address the most common questions founders, finance leaders, and compliance officers raise when adopting the MLM Growth Plan.
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
              Partner with Cloud MLM Software to launch a compliant growth plan that excites the field, satisfies finance, and protects your brand.
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
              and access calculators, demos, and AI playbooks tailored to your expansion goals.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance tests cover growth thresholds, payout approvals, and document workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards benchmark sponsor activity, churn, and product velocity every cycle.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep leaders on pace to hit growth checkpoints before deadlines.</span>
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
