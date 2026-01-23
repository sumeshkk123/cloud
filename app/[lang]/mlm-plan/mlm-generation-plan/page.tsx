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
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import GenerationPlanSimulator from "@/components/frontend/plan/generation-plan-simulator";

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
    label: "Generational payouts governed",
    value: "$58M+",
    detail: "Depth-based commissions processed through Cloud MLM Software with full compliance evidence."
  },
  {
    label: "Breakaway leadership uplift",
    value: "34%",
    detail: "Average increase in leadership retention after automating generational qualifiers."
  },
  {
    label: "Compliance variance",
    value: "<1.8%",
    detail: "Payouts flagged for manual review thanks to AML, KYC, and tax automation built into the platform."
  },
  {
    label: "Time to launch",
    value: "5-week sprints",
    detail: "Typical timeline to configure generational rules, leadership pools, and multilingual enablement."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Depth-based governance",
    description:
      "Give finance, compliance, and the field one source of truth for generational payouts, overrides, and breakaway logic.",
    bullets: [
      "Model generation-by-generation percentages, compression rules, and leadership pools with audit trails.",
      "Track PV, GV, and breakaway status in real time so stakeholders know who qualifies and why.",
      "Version every rule change so executives, regulators, and auditors can trace plan evolution."
    ],
    icon: Target
  },
  {
    title: "Compliance-first payouts",
    description: "Embed AML, KYC, and tax governance into every generation before bonuses are released.",
    bullets: [
      "Automate suitability and documentation checks per market before commissions run.",
      "Generate per-generation payout statements and tax-ready records instantly.",
      "Alert compliance when redemptions, refunds, or overrides move outside policy."
    ],
    icon: ShieldCheck
  },
  {
    title: "Field enablement intelligence",
    description: "Equip promoters and leaders with generational insights, playbooks, and AI-guided coaching.",
    bullets: [
      "Deliver dashboards showing depth ratios, upcoming rank qualifications, and coaching tasks.",
      "Send nudges when leaders risk breakaway churn or fall short of leadership PV thresholds.",
      "Provide support teams with generational context, historical tickets, and recommended actions."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Launch readiness modelling",
    baseline: "3,200 promoters across 6 generations with a blended 27% generational payout pool.",
    insight:
      "Cloud MLM Software forecasts payouts, leadership bonuses, and reserve requirements before executive sign-off.",
    icon: BarChart3
  },
  {
    title: "Breakaway surge response",
    baseline: "Leadership promotions spike by 18% in a quarter due to a new customer acquisition campaign.",
    insight:
      "Automated guardrails rebalance overrides, notify finance of reserve impacts, and coach emerging leaders.",
    icon: TrendingUp
  },
  {
    title: "Regulatory audit rehearsal",
    baseline: "Multi-market audit across AU, CA, and UK demands generational payout evidence and tax support.",
    insight:
      "Cloud MLM Software exports generational statements, approvals, and compliance evidence in minutes.",
    icon: ShieldCheck
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Generational payout automation",
    summary: "Automate depth-based commissions, overrides, and compression without manual spreadsheets.",
    outcomes: [
      "Configure per-generation percentages, compression rules, and leadership pools from one console.",
      "Tie payouts to PV, GV, and suitability validations automatically.",
      "Deliver audit-ready payout logs to finance and compliance teams every cycle."
    ],
    icon: TrendingUp
  },
  {
    title: "Breakaway leadership orchestration",
    summary: "Protect leadership incentives with breakaway thresholds, re-entry logic, and reserve automation.",
    outcomes: [
      "Set breakaway PV/GV requirements and notify leaders as they approach thresholds.",
      "Automate leadership bonuses based on reserve health and compliance sign-off.",
      "Capture rank achievements, promotions, and overrides with versioned approvals."
    ],
    icon: GaugeCircle
  },
  {
    title: "Generation insight hub",
    summary: "Serve execs, leaders, and support teams with generational dashboards, alerts, and AI summaries.",
    outcomes: [
      "Highlight depth ratios, churn risk, and emerging leaders for coaching intervention.",
      "Stream PV/GV and customer retention metrics into leadership scorecards.",
      "Provide support with context-rich timelines and recommended actions for promoter inquiries."
    ],
    icon: Rocket
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Promoter onboarding",
    description: "New promoters complete training, understand generational expectations, and align on compliance.",
    focus: "Guided onboarding modules, suitability checks, and role-based playbooks accelerate activation.",
    icon: Compass
  },
  {
    stage: "Depth activation",
    description: "Teams focus on PV/GV, customer reorders, and leadership mentoring to unlock deeper generations.",
    focus: "Dashboards reveal depth ratios, pending qualifications, and high-potential promoters.",
    icon: ClipboardCheck
  },
  {
    stage: "Breakaway leadership",
    description: "Leaders hit breakaway thresholds, secure overrides, and maintain compliance obligations.",
    focus: "Alerts highlight leaders at risk of slipping and surface coaching tasks to sustain momentum.",
    icon: GaugeCircle
  },
  {
    stage: "Payout & reinvestment",
    description: "Generational commissions release, leadership bonuses confirm, and re-entry logic resets.",
    focus: "Finance and compliance receive full audit trails while leaders receive insights for the next cycle.",
    icon: ShieldCheck
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & policy alignment",
    duration: "Week 1",
    activities: [
      "Clarify generational payout goals, compression rules, and breakaway criteria per market.",
      "Review regulatory requirements, tax implications, and banking partner expectations.",
      "Assess current PV/GV performance, leadership pipeline, and data readiness."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & validation",
    duration: "Weeks 2-4",
    activities: [
      "Model generational payouts, leadership bonuses, and reserve logic in staging.",
      "Run scenario tests for surges, breakaway waves, and refund spikes with finance and compliance.",
      "Integrate payment rails, tax engines, and analytics for real-time visibility."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 5-6",
    activities: [
      "Train promoters, leaders, and support teams with live simulators and multilingual resources.",
      "Activate dashboards, alerts, and statements tuned for each stakeholder.",
      "Roll out phased launches with feedback loops, monitoring, and contingency buffers."
    ],
    icon: Rocket
  }
];

const REGULATORY_GUARDRAILS: Pattern[] = [
  {
    title: "Global compliance presets",
    description:
      "Configure AML, KYC, disclosure, and tax requirements per market so generational payouts stay audit-ready.",
    icon: ShieldCheck
  },
  {
    title: "Reserve & payout monitors",
    description:
      "Track reserve thresholds, hold queues, and exception cases to prevent compliance breaches.",
    icon: GaugeCircle
  },
  {
    title: "Audit evidence vault",
    description:
      "Immutable histories capture generational approvals, leadership promotions, and payout releases for every cycle.",
    icon: ClipboardCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Generational automation suite",
    description:
      "Configure depth payouts, leadership pools, and re-entry logic without custom development.",
    icon: Settings2
  },
  {
    title: "Generational analytics spine",
    description:
      "Dashboards track PV, GV, depth ratios, churn, and leadership performance in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement operating system",
    description:
      "Promoters and leaders receive alerts, coaching journeys, and AI insights that match their generational stage.",
    icon: Sparkles
  }
];

const CTA_POINTS: string[] = [
  "Automate generational payouts, overrides, and leadership bonuses with compliance built in.",
  "Protect reserves and regulator confidence with auditable rules and real-time monitoring.",
  "Equip leaders and executives with depth analytics that expose risk and opportunity instantly.",
  "Launch generational programmes faster with Cloud MLM Software’s proven acceleration playbooks."
];

const FAQS: Faq[] = [
  {
    question: "Can we customise generational percentages and compression rules per market?",
    answer:
      "Yes. Cloud MLM Software supports market-specific percentages, compression policies, and leadership pools with full audit trails."
  },
  {
    question: "How are breakaway qualifiers enforced?",
    answer:
      "Breakaway PV/GV thresholds, documentation, and leadership scores are monitored automatically before overrides release."
  },
  {
    question: "What happens when leaders drop below qualification?",
    answer:
      "Alerts, coaching tasks, and temporary holds activate while the system documents remediation and reinstatement steps."
  },
  {
    question: "Can we integrate with tax, ERP, and support systems?",
    answer:
      "We connect to ERPs, CRMs, tax engines, and support platforms so every stakeholder works from the same generational data."
  },
  {
    question: "How do we educate the field on depth strategy?",
    answer:
      "Interactive simulators, AI-generated guidance, and tailored playbooks keep promoters confident and compliant."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Generation Plan Strategy";
  const description =
    "Explore the MLM generation plan with Cloud MLM Software—depth payouts, leadership bonuses, and compliance automation end to end.";

  return {
    title,
    description,
    keywords: [
      "MLM generation plan",
      "generation plan software",
      "Cloud MLM Software",
      "generational payouts",
      "breakaway automation",
      "MLM compliance"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-generation-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GenerationPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function GenerationPlanPage({ params }: GenerationPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(168,85,247,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Generation plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              MLM generation plan blueprint for depth-driven, compliant growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Optimise depth-based commissions, protect leadership incentives, and stay audit-ready. Cloud MLM Software automates generational payouts, breakaway rules, and enablement so your teams focus on momentum—not spreadsheets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a generation strategist
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
                  Explore calculators
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
            <GenerationPlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How generational mechanics stay balanced
          </h2>
          <p className="text-sm text-muted-foreground">
            Govern payouts, breakaway rules, and leadership bonuses from one auditable workspace tuned for generation plans.
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
            Align stakeholders on generational storytelling, regulatory guardrails, and enablement plans before payouts release.
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
              Stress-test generational changes, leadership promotions, and audit requests before they reach the field.
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
            Promoter and leader journey through the generation plan
          </h2>
          <p className="text-sm text-muted-foreground">
            Every milestone—from onboarding to reinvestment—stays transparent with guided workflows, alerts, and approvals.
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
            Implementation roadmap tuned for generation agility
          </h2>
          <p className="text-sm text-muted-foreground">
            Structured sprints keep compliance, finance, technology, and field enablement progressing together.
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
              Compliance teams gain the visibility, documentation, and controls they need to approve generational payouts without delays.
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
            Operational blueprint for generation excellence
          </h2>
          <p className="text-sm text-muted-foreground">
            From configuration to enablement, Cloud MLM Software gives generational programmes the backbone they need for sustainable growth.
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
            Key answers that founders, finance leaders, and compliance officers raise when evaluating an MLM generation plan rollout.
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
              Partner with Cloud MLM Software to launch a generation plan that delights promoters, satisfies regulators, and protects your brand.
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
                  Schedule a generation blueprint
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
                <span>Compliance playbooks cover AML, KYC, disclosure, and tax requirements per market.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards track PV, GV, depth ratios, and leadership momentum in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <Activity className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Alerts keep leaders ahead of breakaway risk, reserve dips, and compliance escalations.</span>
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
