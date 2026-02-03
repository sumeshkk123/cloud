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
  HelpCircle,
  PiggyBank,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import AustralianBinarySimulator from "@/components/frontend/plans/all-plans/australian-binary-simulator";

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
    label: "Matched payout accuracy",
    value: "98.7%",
    detail: "Binary cycles reconciled automatically across Australian and New Zealand field teams."
  },
  {
    label: "Deployment velocity",
    value: "4-week go-live",
    detail: "Average time to configure tiers, flush rules, and compliance reporting for regulated launches."
  },
  {
    label: "Carryover retention",
    value: "92%",
    detail: "Leg health alerts keep power-leg carryover from flushing while profit legs catch up."
  },
  {
    label: "Variance escalations",
    value: "<1.5%",
    detail: "Percentage of payouts flagged for manual review after automating AUSTRAC and ASIC safeguards."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Binary leg governance",
    description:
      "Give finance, compliance, and the field shared visibility into the health of every power and profit leg.",
    bullets: [
      "Model pair thresholds, stepping bonuses, and team commissions with version-controlled rules.",
      "Detect power-leg swelling early with dashboards that combine PV, GV, and recruitment rates.",
      "Log every binary rule change, approval, and rollback for regulators and auditors."
    ],
    icon: Target
  },
  {
    title: "Compliance and audit readiness",
    description: "Bake ASIC, AUSTRAC, and consumer law requirements into binary payout workflows from day one.",
    bullets: [
      "Screen payouts against AML/KYC triggers and route exceptions to compliance queues.",
      "Generate leg-level statements, carryover proofs, and GST-ready reports automatically.",
      "Track promoter education and acknowledgement of binary earnings disclosures."
    ],
    icon: ShieldCheck
  },
  {
    title: "Field empowerment & coaching",
    description: "Equip field leaders with the insights, tools, and nudges they need to balance legs with confidence.",
    bullets: [
      "Deliver mobile dashboards showing leg ratios, pending cycles, and coaching prompts.",
      "Trigger alerts when profit legs lag a threshold or carryover nears flush windows.",
      "Give support teams scripts and escalation macros tied to each promoter’s binary status."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Launch cadence planning",
    baseline: "600 promoters across Australia with $220 average order value and 300 PV pairing threshold.",
    insight:
      "Cloud MLM Software forecasts matched cycles, carryover reserves, and payout requirements before launch day.",
    icon: BarChart3
  },
  {
    title: "Power leg surge response",
    baseline: "Power leg gains 18% volume surge during a regional promotion.",
    insight:
      "Automated alerts recommend coaching interventions and temporary incentives to balance profit legs.",
    icon: GaugeCircle
  },
  {
    title: "Regulated payout review",
    baseline: "Quarterly audits require ASIC-ready statements and AML proof of binary bonuses released.",
    insight:
      "Cloud MLM Software produces leg histories, carryover logs, and compliance approvals in seconds.",
    icon: ShieldCheck
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Pairing & payout automation",
    summary: "Automate binary cycle calculations, carryover, and commissions with auditable precision.",
    outcomes: [
      "Match legs in real time and reserve payouts until compliance checks clear.",
      "Configure multiple binary tiers and fast-start bonuses without spreadsheets.",
      "Surface exception reports when cycles fall outside policy or profitability targets."
    ],
    icon: TrendingUp
  },
  {
    title: "Carryover protection",
    summary: "Protect power-leg volume with configurable flush windows, reserve alerts, and coaching triggers.",
    outcomes: [
      "Define carryover policies per market and automatically notify field leaders before flush deadlines.",
      "Align incentives so promoters rebalance legs instead of banking unused carryover.",
      "Display leg health metrics to finance and compliance so reserves remain audit-ready."
    ],
    icon: GaugeCircle
  },
  {
    title: "Binary insight hub",
    summary: "Give executives, field leaders, and support staff shared analytics and guided actions.",
    outcomes: [
      "Stream PV, GV, enrolment, and churn data into leg-level scorecards.",
      "Highlight promoters nearing rank, payout, or compliance thresholds with AI summaries.",
      "Supply support teams with context, historical tickets, and knowledge base snippets for binary queries."
    ],
    icon: Rocket
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Promoter onboarding",
    description: "New promoters complete training, understand binary expectations, and confirm compliance acknowledgements.",
    focus: "Cloud MLM Software delivers guided onboarding, suitability checks, and binary basics.",
    icon: Compass
  },
  {
    stage: "Leg activation",
    description: "Promoters place recruits, configure autoships, and balance coaching plans to hit cycle targets.",
    focus: "Dashboards highlight leg ratios, qualification tasks, and upcoming rank milestones.",
    icon: ClipboardCheck
  },
  {
    stage: "Cycle optimisation",
    description: "Power and profit legs evolve with campaigns, training, and compliance checkpoints.",
    focus: "Alerts guide leaders to reinforce weaker legs and preserve carryover before flush events.",
    icon: GaugeCircle
  },
  {
    stage: "Payout & audit",
    description: "Binary bonuses release, statements generate, and reserves reset for the next cycle.",
    focus: "Finance and compliance teams receive complete records, while promoters see transparent payout receipts.",
    icon: PiggyBank
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & compliance alignment",
    duration: "Week 1",
    activities: [
      "Clarify pairing thresholds, rank logic, and bonus overlays for Australian markets.",
      "Review banking partner and ASIC/AUSTRAC requirements for payout governance.",
      "Assess historical leg balance, carryover flush rates, and field readiness."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & validation",
    duration: "Weeks 2-4",
    activities: [
      "Model binary tiers, carryover policies, and coaching triggers inside staging.",
      "Run scenario tests for surges, promotions, and redemption spikes with finance and compliance.",
      "Integrate payment rails, tax/GST rules, and analytics for end-to-end visibility."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 5-6",
    activities: [
      "Train field leaders, support teams, and executives with live simulators and playbooks.",
      "Activate dashboards, alerts, and statements tailored for binary promoters.",
      "Roll out phased go-lives with contingency buffers and monitoring."
    ],
    icon: Rocket
  }
];

const REGULATORY_GUARDRAILS: Pattern[] = [
  {
    title: "ASIC & AUSTRAC compliance presets",
    description:
      "Pre-configured workflows manage KYC, AML, and disclosure requirements for Australian binary payouts.",
    icon: ShieldCheck
  },
  {
    title: "Flush & reserve monitors",
    description:
      "Automated monitors track carryover limits, reserve balances, and payout queues to avoid breaches.",
    icon: GaugeCircle
  },
  {
    title: "Audit-ready evidence",
    description:
      "Immutable histories store leg movements, cycle approvals, and payout calculations for every review.",
    icon: ClipboardCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Binary automation suite",
    description:
      "Configure pairing rules, bonus overlays, and reserve policies without writing custom code.",
    icon: Settings2
  },
  {
    title: "Leg analytics spine",
    description:
      "Dashboards track leg ratios, cycle velocity, churn, and carryover utilisation in real time.",
    icon: BarChart3
  },
  {
    title: "Field enablement OS",
    description:
      "Promoters receive alerts, coaching paths, and knowledge assets tailored to their binary position.",
    icon: Sparkles
  }
];

const CTA_POINTS: string[] = [
  "Balance power and profit legs with real-time insights and compliance safeguards.",
  "Automate pairing, carryover, and payout calculations with audit-ready transparency.",
  "Equip field leaders and executives with dashboards tuned for binary growth.",
  "Launch confident Australian binary programmes with Cloud MLM Software’s expertise."
];

const FAQS: Faq[] = [
  {
    question: "Can Cloud MLM Software handle multiple binary trees per promoter?",
    answer:
      "Yes. We support single-tree, multi-tree, and hybrid binary variations with leg-level governance and reporting."
  },
  {
    question: "How do you prevent carryover flush issues?",
    answer:
      "Reserve policies, alert thresholds, and coaching workflows kick in before a flush occurs so leaders rebalance proactively."
  },
  {
    question: "Which compliance checks are automated?",
    answer:
      "We integrate with AML/KYC providers, generate ASIC/AUSTRAC-ready statements, and log every approval for audits."
  },
  {
    question: "Can the system adapt for promotions or double-cycle periods?",
    answer:
      "Scenario controls let you model special promotions, adjust flush limits, and schedule automatic reversion after campaigns finish."
  },
  {
    question: "Do you provide field training resources?",
    answer:
      "Cloud MLM Software supplies onboarding modules, binary coaching scripts, and AI-generated insights that keep promoters on pace."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Australian Binary MLM Plan";
  const description =
    "Design and operate the Australian Binary MLM plan with Cloud MLM Software—balanced legs, compliant payouts, and auditable growth.";

  return {
    title,
    description,
    keywords: [
      "Australian binary MLM plan",
      "binary MLM software",
      "Cloud MLM Software",
      "binary leg management",
      "carryover automation",
      "MLM compliance Australia"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-australian-binary-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AustralianBinaryPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function AustralianBinaryPlanPage({ params }: AustralianBinaryPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Binary plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Australian Binary MLM plan blueprint for balanced, compliant growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Balance power and profit legs with confidence. Cloud MLM Software automates binary pairing, carryover protection, and compliance evidence so Australian field leaders and finance teams scale without surprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a binary strategist
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
                  Explore binary calculators
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary hover:text-primary">
                <Link href={demoHref}>
                  Launch the live demo
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
            <AustralianBinarySimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How Australian binary mechanics stay balanced
          </h2>
          <p className="text-sm text-muted-foreground">
            Govern pairing thresholds, carryover rules, and coaching triggers from one auditable workspace tuned for the Australian market.
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
            Foundations that keep compliance, finance, and field aligned
          </h2>
          <p className="text-sm text-muted-foreground">
            Align stakeholders on binary storytelling, regulatory guardrails, and enablement before the first commission cycle closes.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Scenario planning with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground">
              Stress-test leg surges, promotion cycles, and regulatory audits before rolling changes to the Australian field.
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
            Promoter and leader journey through the binary plan
          </h2>
          <p className="text-sm text-muted-foreground">
            Every milestone—from onboarding to payout—stays transparent with guided workflows, alerts, and approval trails.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {JOURNEYS.map((journey) => {
            const Icon = journey.icon;
            return (
              <article
                key={journey.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                  <p className="text-sm text-muted-foreground">{journey.description}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Cloud MLM focus</p>
                  <p className="text-sm text-muted-foreground">{journey.focus}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap tuned for Australian binary agility
          </h2>
          <p className="text-sm text-muted-foreground">
            Structured sprints keep compliance, finance, technology, and field enablement marching together.
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
                <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{step.duration}</p>
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

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Regulatory guardrails that scale</h2>
            <p className="text-sm text-muted-foreground">
              Compliance teams gain the visibility, documentation, and controls they need to approve binary payouts without delays.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {REGULATORY_GUARDRAILS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Operational blueprint for binary excellence
          </h2>
          <p className="text-sm text-muted-foreground">
            From configuration to enablement, Cloud MLM Software gives binary programmes the backbone they need for sustainable growth.
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
            Key answers that founders, finance leaders, and compliance officers raise when evaluating an Australian binary rollout.
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
              Partner with Cloud MLM Software to launch an Australian binary plan that delights promoters, satisfies regulators, and protects your brand.
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
                  Schedule a binary blueprint
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
                <span>Compliance playbooks cover ASIC, AUSTRAC, and state consumer requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards monitor power-leg, profit-leg, and carryover ratios in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Alerts keep leaders ahead of flush windows, redemption spikes, and compliance escalations.</span>
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
