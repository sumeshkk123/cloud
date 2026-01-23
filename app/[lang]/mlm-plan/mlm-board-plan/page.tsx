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
import BoardPlanSimulator from "@/components/frontend/plan/board-plan-simulator";

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
    label: "Board cycles orchestrated",
    value: "8.4k+/yr",
    detail: "Board plan rotations processed with Cloud MLM Software across wellness, fintech, and education brands."
  },
  {
    label: "Re-entry automation",
    value: "95% hands-free",
    detail: "Re-entries placed automatically with compliance checkpoints and audit trails."
  },
  {
    label: "Cycle insight latency",
    value: "<5 seconds",
    detail: "Time to surface board health analytics after every placement event."
  },
  {
    label: "Compliance variance",
    value: "1.2%",
    detail: "Percentage of board payouts requiring manual intervention after automating AML/KYC workflows."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Board structure clarity",
    description:
      "Map every board, cycle rule, and advancement path so finance, compliance, and field leaders stay aligned.",
    bullets: [
      "Model single or multi-board progressions with auditable advancement rules.",
      "Expose live board positions, queue depth, and payouts inside executive and field dashboards.",
      "Track historical board moves, re-entries, and adjustments with version history."
    ],
    icon: Target
  },
  {
    title: "Reserve & payout governance",
    description: "Protect board payouts with configurable reserve logic, compliance holds, and audit-ready evidence.",
    bullets: [
      "Link payout releases to documentation, AML/KYC status, and reserve sufficiency.",
      "Automate multi-currency statements and tax-ready records for every board cycle.",
      "Alert finance when redemption triggers, manual overrides, or reserve breaches occur."
    ],
    icon: ShieldCheck
  },
  {
    title: "Field enablement & coaching",
    description: "Give promoters and leaders clear next steps, communication templates, and AI nudges for every board state.",
    bullets: [
      "Surface board placement opportunities, pending promotions, and coaching cues on mobile.",
      "Deliver prebuilt scripts and micro-learnings when promoters near cycle completion.",
      "Use predictive insights to prevent queue stagnation and accelerate re-entries."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Launch-day readiness",
    baseline: "1,200 promoters, three board tiers (6/9/14 seats), 40% reinvestment target.",
    insight:
      "Cloud MLM Software validates queue depth, reserve sufficiency, and payout projections before launch communications.",
    icon: BarChart3
  },
  {
    title: "Promotion surge response",
    baseline: "Board two sees 25% spike in placements during a seasonal incentive.",
    insight:
      "Automated alerts prompt re-entry adjustments, coaching tasks, and reserve top-ups to absorb the surge.",
    icon: GaugeCircle
  },
  {
    title: "Regulatory audit rehearsal",
    baseline: "Quarterly audit requires proof of board movement, payouts, and reserve thresholds.",
    insight:
      "Cloud MLM Software exports board histories, payout receipts, and compliance approvals in minutes.",
    icon: ShieldCheck
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Board rotation automation",
    summary: "Automate placements, promotions, and re-entries so teams focus on coaching instead of spreadsheets.",
    outcomes: [
      "Define advancement logic for single or cascading boards with drag-and-drop controls.",
      "Trigger automatic reinvestment or cash-out workflows per promoter policy.",
      "Notify leaders when queue health or re-entry velocity needs intervention."
    ],
    icon: TrendingUp
  },
  {
    title: "Reserve and payout orchestration",
    summary: "Keep cash flow and reserves balanced with real-time monitoring and automated holds.",
    outcomes: [
      "Link reserve requirements to board mix, currency exposure, and compliance rules.",
      "Hold payouts pending AML/KYC review or treasury approval, then release with full audit trace.",
      "Send executives reserve, liability, and profitability snapshots for every board tier."
    ],
    icon: GaugeCircle
  },
  {
    title: "Insight-driven enablement",
    summary: "Equip promoters, leaders, and support teams with board intelligence they can act on immediately.",
    outcomes: [
      "Push AI-generated summaries highlighting at-risk boards, stuck queues, and coaching wins.",
      "Provide support teams with context-rich tickets and scripted responses tied to board state.",
      "Feed investor-style reports to founders and finance for strategic planning."
    ],
    icon: Rocket
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Promoter onboarding",
    description: "New promoters learn board mechanics, compliance expectations, and earning milestones.",
    focus: "Cloud MLM Software delivers guided training, suitability checks, and launch playbooks.",
    icon: Compass
  },
  {
    stage: "Board activation",
    description: "Promoters place customers, recruit peers, and advance through early board positions.",
    focus: "Dashboards show queue position, contribution reminders, and coaching cues.",
    icon: ClipboardCheck
  },
  {
    stage: "Cycle completion",
    description: "Boards fill, payouts trigger, and promoters either cash out or re-enter.",
    focus: "Automation handles payouts, documentation, and re-entry placement while leaders celebrate wins.",
    icon: GaugeCircle
  },
  {
    stage: "Reinvestment & growth",
    description: "Promoters reinvest strategically, mentor new entrants, and prepare for higher board tiers.",
    focus: "AI nudges highlight coaching opportunities, potential bottlenecks, and queue congestion.",
    icon: PiggyBank
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & policy alignment",
    duration: "Week 1",
    activities: [
      "Clarify board structure, advancement logic, and payout overlays for each tier.",
      "Review reserve targets, compliance rules, and reinvestment expectations.",
      "Assess current queue health, manual processes, and data sources."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & validation",
    duration: "Weeks 2-4",
    activities: [
      "Configure board tiers, queue automation, and reserve policies inside staging.",
      "Run scenario tests for surges, promotions, and redemption waves with finance and compliance.",
      "Integrate payment rails, accounting, and analytics for real-time visibility."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 5-6",
    activities: [
      "Train promoters, leaders, and support teams with live simulators and ready-made playbooks.",
      "Activate dashboards, alerts, and statements tailored to board plan stakeholders.",
      "Roll out phased go-lives with monitoring, contingency buffers, and feedback loops."
    ],
    icon: Rocket
  }
];

const REGULATORY_GUARDRAILS: Pattern[] = [
  {
    title: "Securities & consumer compliance presets",
    description:
      "Pre-built workflows satisfy AML/KYC, disclosure, and consumer law expectations for board programmes.",
    icon: ShieldCheck
  },
  {
    title: "Reserve & payout monitors",
    description:
      "Automated monitors track reserve percentages, payout holds, and queue congestion to prevent breaches.",
    icon: GaugeCircle
  },
  {
    title: "Audit-ready evidence",
    description:
      "Immutable histories capture board placements, approvals, payouts, and communications for every cycle.",
    icon: ClipboardCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Board automation suite",
    description:
      "Configure advancement rules, reinvestment logic, and payout policies without custom code.",
    icon: Settings2
  },
  {
    title: "Board analytics spine",
    description:
      "Dashboards track cycle velocity, queue depth, reinvestment rates, and profitability in real time.",
    icon: BarChart3
  },
  {
    title: "Field enablement hub",
    description:
      "Promoters receive alerts, coaching paths, and resources tailored to their board position.",
    icon: Sparkles
  }
];

const CTA_POINTS: string[] = [
  "Automate board placements, re-entries, and payouts with audit-ready precision.",
  "Protect reserves and compliance with configurable rules and real-time monitoring.",
  "Empower field leaders and executives with dashboards tuned for board plan momentum.",
  "Launch confident board programmes with Cloud MLM Software’s governance expertise."
];

const FAQS: Faq[] = [
  {
    question: "Do you support multiple board tracks or cascades?",
    answer:
      "Yes. Cloud MLM Software handles single boards, dual tracks, and cascading board progressions with independent rules and reporting."
  },
  {
    question: "How are reserves and payouts governed?",
    answer:
      "Reserve thresholds, payout holds, and compliance approvals are automated with full audit trails and alerts."
  },
  {
    question: "Can promoters re-enter automatically after cycle completion?",
    answer:
      "Re-entry logic, placement priority, and eligibility checks are configurable per tier and market."
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with payment gateways, accounting systems, CRMs, and analytics warehouses to keep every stakeholder in sync."
  },
  {
    question: "How do you help the field understand board mechanics?",
    answer:
      "Interactive simulators, AI-generated insights, and templated communications keep promoters informed and compliant."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Board Plan Strategy";
  const description =
    "Explore the MLM board plan with Cloud MLM Software—board automation, re-entry orchestration, reserves, and compliance built in.";

  return {
    title,
    description,
    keywords: [
      "MLM board plan",
      "board plan software",
      "Cloud MLM Software",
      "board re-entry automation",
      "MLM board governance",
      "board plan compliance"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-board-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BoardPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function BoardPlanPage({ params }: BoardPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(20,184,166,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Board plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              MLM board plan blueprint for predictable cycling and reinvestment.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Keep board programmes moving with automation, analytics, and compliance guardrails. Cloud MLM Software eliminates manual queue management so promoters, finance, and regulators trust every cycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a board strategist
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
            <BoardPlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How board mechanics stay balanced
          </h2>
          <p className="text-sm text-muted-foreground">
            Govern placements, payouts, and reinvestment policies from a single source of truth tuned for board plans.
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
            Align stakeholders on board storytelling, regulatory guardrails, and enablement before the first payout sequence closes.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scenario planning with Cloud MLM Software</h2>
            <p className="text-sm text-muted-foreground">
              Stress-test promotions, surge events, and regulatory audits before rolling changes to the field.
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
            Promoter and leader journey through the board plan
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
            Implementation roadmap tuned for board agility
          </h2>
          <p className="text-sm text-muted-foreground">
            Structured sprints keep compliance, finance, technology, and field enablement moving together.
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
              Compliance teams gain the visibility, documentation, and controls they need to approve board payouts without delays.
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
            Operational blueprint for board excellence
          </h2>
          <p className="text-sm text-muted-foreground">
            From configuration to enablement, Cloud MLM Software gives board programmes the backbone they need for sustainable growth.
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
            Key answers that founders, finance leaders, and compliance officers raise when evaluating an MLM board rollout.
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
              Partner with Cloud MLM Software to launch a board plan that delights promoters, satisfies regulators, and protects your brand.
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
                  Schedule a board blueprint
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
              Want to compare additional models? Visit our{' '}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{' '}
              for companion calculators and design guidance.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance playbooks cover AML, KYC, disclosure, and reserve expectations.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards track cycle velocity, queue depth, and reinvestment rates in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <Activity className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Alerts keep leaders ahead of queue congestion, reserve dips, and compliance escalations.</span>
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
