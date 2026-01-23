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
  Network,
  RefreshCcw,
  Rocket,
  Settings2,
  ShieldCheck,
  Shuffle,
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
    label: "Pass-up routing accuracy",
    value: "99.2%",
    detail: "Automated sponsor hand-offs validated across Australian and New Zealand rollouts."
  },
  {
    label: "Launch timeline",
    value: "5-day sprints",
    detail: "Average time to configure pass-up thresholds, re-entry logic, and reviews."
  },
  {
    label: "Retention lift",
    value: "+18%",
    detail: "Median increase after aligning reclaim bonuses with behavioural triggers in Cloud MLM Software."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Clarity on the X-UP ladder",
    description:
      "Design every pass-up with auditable logic so promoters know exactly when recruits become personal legs.",
    bullets: [
      "Model 1-up, 2-up, and 3-up transitions with conditional qualifiers.",
      "Surface sponsor trees and pass-up history in a single timeline view.",
      "Give founders and compliance officers change logs for every rule edit."
    ],
    icon: Network
  },
  {
    title: "Momentum the field can feel",
    description:
      "Encourage sustained activity with pacing nudges, tiered celebrations, and on-time recognition.",
    bullets: [
      "Trigger alerts when a promoter is one pass-up away from ownership.",
      "Layer sprint-based bonuses without breaking the compensation ceiling.",
      "Gamify streaks so coaching teams can intervene before energy fades."
    ],
    icon: GaugeCircle
  },
  {
    title: "Governance-first execution",
    description:
      "Keep regulators, finance, and banking partners confident in how funds flow through each pass-up.",
    bullets: [
      "Cap simultaneous pass-ups to prevent hoarding and duplicate claims.",
      "Embed AML and KYC checkpoints before releasing high-value payouts.",
      "Generate multi-currency receipts that mirror each sponsor exchange."
    ],
    icon: ShieldCheck
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Launch sprint – 2-UP",
    baseline: "200 promoters, 60-day runway, AUD 450 average pack value, two pass-ups required.",
    insight:
      "Cloud MLM Software predicts when legs become personal, auto-reserves bonuses, and highlights where extra coaching will unblock depth.",
    icon: Rocket
  },
  {
    title: "Leader re-entry loop",
    baseline: "Ranked leaders re-enter queue after six personal enrolments with tiered product packs.",
    insight:
      "Dynamic re-entry logic ensures legacy leaders do not stall new teams while preserving premium pack incentives.",
    icon: RefreshCcw
  },
  {
    title: "Compliance stress test",
    baseline: "Three-region launch, mixed currencies, and banking checks on every third pass-up.",
    insight:
      "Workflow checkpoints, document requests, and payout freezes are tracked in one audit trail ready for regulators.",
    icon: ShieldCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description:
      "Use drag-and-drop pass-up rules, qualification gates, and re-entry lanes to capture the exact Australian X-UP policy.",
    icon: Settings2
  },
  {
    title: "Analytics spine",
    description:
      "Dashboards compare planned pass-ups versus actual sponsor conversions, retention, and payout velocity in real time.",
    icon: BarChart3
  },
  {
    title: "Field enablement",
    description:
      "Coach leaders with smart alerts, guided scripts, and a content hub synced to plan milestones.",
    icon: Users
  }
];

const CTA_POINTS: string[] = [
  "Architect bespoke X-UP structures with confidence and instant validation.",
  "Automate every pass-up, re-entry, and recognition flow without spreadsheets.",
  "Deliver dashboards tuned for founders, finance leads, and field captains alike.",
  "Stay ready for audits with immutable histories of payouts, documents, and plan edits."
];

const MECHANICS: Mechanic[] = [
  {
    title: "Pass-up orchestration",
    summary: "Control when enrolments are passed to sponsors and when they become owned legs with auditable logic.",
    outcomes: [
      "Blend 1-up, 2-up, and 3-up structures in a single plan instance.",
      "Freeze or fast-track legs when compliance reviews trigger.",
      "Surface ownership history to the field with timeline indicators."
    ],
    icon: Shuffle
  },
  {
    title: "Qualification guardrails",
    summary: "Tie product packs, personal volume, and coaching milestones to each pass-up threshold.",
    outcomes: [
      "Attach proof-of-purchase or onboarding modules before a leg transfers.",
      "Automate re-entry placement for leaders that hit rolling enrolment targets.",
      "Throttle payouts if documentation or tax flags remain unresolved."
    ],
    icon: Target
  },
  {
    title: "Visibility & coaching",
    summary: "Serve dashboards the field can act on with alerts, forecasting, and contextual scripts.",
    outcomes: [
      "Trigger nudges when legs underperform pass-up expectations.",
      "Highlight top promoters and stalled candidates in one canvas.",
      "Push coaching playbooks to mobile or desktop with version control."
    ],
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Prospect joins",
    description: "The recruit lands in the queue, completes onboarding, and confirms product preferences.",
    focus: "Field sees estimated pass-up timing and recommended starter scripts.",
    icon: Compass
  },
  {
    stage: "Qualification window",
    description: "Personal volume, compliance documents, and coaching checkpoints determine when the leg transfers.",
    focus: "Leaders receive alerts to support or intervene before deadlines slip.",
    icon: ClipboardCheck
  },
  {
    stage: "Ownership confirmed",
    description: "The sponsor receives the leg, bonuses trigger, and re-entry logic optionally places the promoter back in queue.",
    focus: "Finance and compliance review full audit trails with payout receipts and approvals.",
    icon: ShieldCheck
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Week 1",
    activities: [
      "Capture compensation objectives, launch goals, and regulatory constraints.",
      "Ingest historic payout data or spreadsheets to benchmark pass-up rules.",
      "Prototype decision trees for 1-up through 3-up scenarios."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & testing",
    duration: "Weeks 2-3",
    activities: [
      "Build pass-up automation, re-entry loops, and bonus overlays in staging.",
      "Run scenario simulations with finance and field leadership.",
      "Validate tax, banking, and AML checkpoints with compliance teams."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 4-5",
    activities: [
      "Publish dashboards, playbooks, and training modules to the field portal.",
      "Set up live health monitors, retention alerts, and executive scorecards.",
      "Finalize rollout communications and activate support response flows."
    ],
    icon: Rocket
  }
];

const FAQS: Faq[] = [
  {
    question: "How flexible is the pass-up configuration?",
    answer:
      "Cloud MLM Software lets you mix different pass-up counts, time-bound qualifications, and leadership re-entry rules inside one compensation blueprint without custom code."
  },
  {
    question: "Can we audit every pass-up for regulators?",
    answer:
      "Yes. Each enrolment stores documents, approvals, banking receipts, and timeline events so auditors can trace funds and ownership changes down to the minute."
  },
  {
    question: "What integrations are supported for Australian operators?",
    answer:
      "We connect to regional payment gateways, GST-ready accounting tools, and CRMs. Our integration team manages sandbox testing and go-live validation."
  },
  {
    question: "How do you help the field adopt the plan?",
    answer:
      "We deliver onboarding checklists, guided selling talk tracks, and ongoing coaching analytics. Customer success partners host regular sprints to keep promoters engaged."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Australian X-UP MLM Plan";
  const description =
    "Explore the Australian X-UP MLM plan with Cloud MLM Software—data-backed pass-up design, compliance workflows, and leader enablement.";

  return {
    title,
    description,
    keywords: [
      "Australian X-UP MLM plan",
      "MLM pass-up compensation",
      "Cloud MLM Software plan design",
      "Australian MLM plan software",
      "X-UP plan automation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/australian-x-up-plan-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AustralianXUpPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function AustralianXUpPlanPage({ params }: AustralianXUpPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/australian-x-up-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              MLM plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Australian X-UP MLM plan blueprint for sustainable pass-up growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Design the Australian X-UP pass-up structure with data-backed guardrails. Cloud MLM Software orchestrates pass-up counts, re-entry logic, and compliance insights so founders and field leaders scale without confusion.
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
                  Simulate pass-ups
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
            <PassUpFlowSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How the Australian X-UP mechanics operate
          </h2>
          <p className="text-sm text-muted-foreground">
            Map every pass-up, qualification rule, and visibility cue so sponsors and compliance teams stay in sync from day one.
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
            Understand the Australian X-UP plan foundations
          </h2>
          <p className="text-sm text-muted-foreground">
            Build alignment between product, compliance, and field leadership with transparent pass-up mechanics.
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
              Stress-test scenarios before launch and give leadership instant insight into what every pass-up means for revenue and retention.
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
            Member journey clarity from enrolment to ownership
          </h2>
          <p className="text-sm text-muted-foreground">
            Everyone involved sees where a leg sits, what unlocks the next milestone, and how Cloud MLM Software supports the transition.
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
                <p className="text-xs uppercase tracking-wide text-muted-foreground">What to focus on</p>
                <p className="text-sm text-muted-foreground">{journey.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Implementation roadmap with guided support
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch faster with a consultative playbook that blends configuration, testing, and enablement into measurable sprints.
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
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Blueprint for sustainable Australian X-UP delivery
          </h2>
          <p className="text-sm text-muted-foreground">
            Combine automation, analytics, and enablement in a single SaaS spine that is ready for founders and regulators alike.
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
            Key answers that founders, finance leaders, and compliance officers raise when evaluating an Australian X-UP rollout.
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
              Partner with Cloud MLM Software to launch a compliant Australian X-UP plan that excites the field, satisfies finance, and protects your brand.
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
              Want to compare additional models? Visit our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{" "}
              for companion calculators and design guidance.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance tests cover pass-up, payout, and document workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards benchmark sponsor activity, churn, and product velocity.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep leaders on pace to reclaim pass-ups before deadlines.</span>
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
