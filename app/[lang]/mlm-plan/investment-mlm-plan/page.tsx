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
  PiggyBank,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import InvestmentPlanSimulator from "@/components/frontend/plan/investment-plan-simulator";

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
    label: "Capital orchestrated",
    value: "$72M+",
    detail: "Investment-plan capital deployed with Cloud MLM Software safeguards across 11 regulated markets."
  },
  {
    label: "ROI validation window",
    value: "12-week sprints",
    detail: "Average time to model, approve, and launch compliant investment tiers with live data feeds."
  },
  {
    label: "Compliance variance",
    value: "<2% exceptions",
    detail: "Variance rate after automating AML, KYC, and suitability checks across investor cohorts."
  },
  {
    label: "Investor retention",
    value: "88%",
    detail: "Rolling 18-month retention where recurring bonuses and liquidity alerts stay in sync with investors."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Investment governance architecture",
    description:
      "Design capital programmes that balance investor expectations, banking partner rules, and corporate oversight.",
    bullets: [
      "Blueprint investment tiers, lock-in periods, and reinvestment loops with auditable playbooks.",
      "Expose profitability, liquidity, and break-even charts to finance and founders in real time.",
      "Log every policy change, approval, and commentary so regulators and auditors see one continuous record."
    ],
    icon: ShieldCheck
  },
  {
    title: "Capital compliance pipeline",
    description: "Embed AML, KYC, and suitability screening without slowing enrolment or payout velocity.",
    bullets: [
      "Automate risk scoring and document requests per investor jurisdiction.",
      "Hold or fast-track payouts based on transaction monitoring and liquidity thresholds.",
      "Surface alerts to compliance officers when deposits or bonus claims exceed configured tolerances."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Investor and field empowerment",
    description: "Give promoters, wealth teams, and investors transparent milestones and communications.",
    bullets: [
      "Deliver investor portals with ROI dashboards, payout schedules, and support workflows.",
      "Equip field leaders with talking points, suitability scripts, and escalation macros.",
      "Feed executive scorecards with retention, reinvestment, and capital efficiency KPIs."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Launch-day capital modelling",
    baseline: "2,500 investors, three tiers ($500, $1,000, $2,500), blended ROI target 32% over 12 months.",
    insight:
      "Cloud MLM Software pressures liquidity buffers, forecasts fee revenue, and triggers when risk reserves fall below policy.",
    icon: BarChart3
  },
  {
    title: "Regulated market expansion",
    baseline: "Entering the EU with MiCA-aligned investor onboarding and banking partner checkpoints.",
    insight:
      "Automated KYC, sanction screening, and payout holds keep corporate compliant while field teams maintain momentum.",
    icon: ShieldCheck
  },
  {
    title: "Liquidity stress rehearsal",
    baseline: "Economic shock scenario where 35% of investors request early exit inside 30 days.",
    insight:
      "Simulator shows reserve sufficiency, generates phased redemption queue, and escalates to treasury before breaches occur.",
    icon: GaugeCircle
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Tiered investment orchestration",
    summary: "Structure, simulate, and launch multiple capital tiers without spreadsheets or manual overrides.",
    outcomes: [
      "Configure ROI, lock-in, and reinvestment logic per tier with instant compliance validation.",
      "Adjust fees and incentives using what-if scenarios before publishing to the field.",
      "Version control every change so investors and regulators can trace plan evolution."
    ],
    icon: Target
  },
  {
    title: "Risk & reserve automation",
    summary: "Protect cash flow with dynamic reserve targets, liquidity alerts, and payout throttles.",
    outcomes: [
      "Link reserve policies to investor mix, currency exposure, and banking covenants.",
      "Trigger compliance reviews when redemption velocity or exposure crosses thresholds.",
      "Feed treasury dashboards with real-time reserve, debt, and payout obligations."
    ],
    icon: GaugeCircle
  },
  {
    title: "Investor communications cadence",
    summary: "Keep investors and promoters aligned with proactive messaging, reporting, and support playbooks.",
    outcomes: [
      "Automate investor statements, ROI briefs, and liquidity notices via email, SMS, or portal.",
      "Give support teams scripted responses tied to account state and compliance outcomes.",
      "Monitor sentiment and escalations so leadership can adjust compensation or education quickly."
    ],
    icon: Rocket
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Investor onboarding",
    description: "Prospects complete suitability assessments, provide KYC documentation, and select the right tier.",
    focus: "Cloud MLM Software guides investors and field promoters with automated checks and approval queues.",
    icon: Compass
  },
  {
    stage: "Capital activation",
    description: "Funds clear escrow, reserve thresholds are validated, and investor dashboards go live.",
    focus: "Finance and compliance teams approve funding events while field leaders receive go signals.",
    icon: ClipboardCheck
  },
  {
    stage: "Performance monitoring",
    description: "Revenue, reserve, and ROI metrics stream into portfolios with scenario-based nudges.",
    focus: "Executives view liquidity, field sees talking points, and investors receive milestone updates.",
    icon: GaugeCircle
  },
  {
    stage: "Payout & reinvestment",
    description: "Scheduled distributions trigger, reinvestment opportunities open, and compliance logs every action.",
    focus: "Investors choose re-entry or withdrawal while Cloud MLM Software documents approvals and releases.",
    icon: PiggyBank
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & compliance alignment",
    duration: "Week 1",
    activities: [
      "Clarify investment thesis, ROI promises, and jurisdictional constraints.",
      "Review banking partner requirements, escrow rules, and historical payout data.",
      "Map investor personas, suitability criteria, and messaging guardrails."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & validation",
    duration: "Weeks 2-4",
    activities: [
      "Model tiered capital rules, reserve logic, and fee schedules inside staging.",
      "Run liquidity, redemption, and risk tests with finance, legal, and compliance.",
      "Connect payment rails, KYC services, and analytics pipelines for end-to-end visibility."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & investor launch",
    duration: "Weeks 5-6",
    activities: [
      "Train field promoters, investor relations, and support teams with live simulators.",
      "Activate portals, alerts, and executive scorecards across channels.",
      "Roll out phased launches with contingency buffers and real-time monitoring."
    ],
    icon: Rocket
  }
];

const REGULATORY_GUARDRAILS: Pattern[] = [
  {
    title: "Securities compliance presets",
    description:
      "Pre-built rules address FTC, SEC, MiCA, and APAC guidelines with jurisdiction-aware disclosures and suitability prompts.",
    icon: ShieldCheck
  },
  {
    title: "Liquidity & reserve watchdog",
    description:
      "Automated monitors track escrow balances, reserve percentages, and redemption queues to prevent breaches.",
    icon: GaugeCircle
  },
  {
    title: "Audit evidence vault",
    description:
      "Immutable ledgers store investor authorisations, payout proofs, and compliance decisions for every cycle.",
    icon: ClipboardCheck
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Capital automation hub",
    description:
      "Configure investment tiers, payout cadences, and reserve rules from one governance console shared across teams.",
    icon: Settings2
  },
  {
    title: "Investment analytics spine",
    description:
      "Dashboards project ROI, liquidity buffers, redemption velocity, and fee income in real time.",
    icon: BarChart3
  },
  {
    title: "Investor enablement suite",
    description:
      "Portals, communications, and AI summaries keep investors and promoters informed without exposing sensitive data.",
    icon: Sparkles
  }
];

const CTA_POINTS: string[] = [
  "Architect tiered investment programmes with traceable governance and automation.",
  "Protect cash flow with reserve automation, risk scoring, and regulator-ready audit trails.",
  "Empower investor relations, executives, and field promoters with real-time ROI intelligence.",
  "Launch confidently in regulated markets with Cloud MLM Software’s capital compliance expertise."
];

const FAQS: Faq[] = [
  {
    question: "Can Cloud MLM Software support securities-style investor onboarding?",
    answer:
      "Yes. We orchestrate suitability questionnaires, identity verification, sanctions screening, and investor accreditation flows per jurisdiction."
  },
  {
    question: "How are reserves and liquidity monitored?",
    answer:
      "Reserve thresholds, escrow balances, and redemption queues update in real time with alerts that notify finance and compliance before breaches happen."
  },
  {
    question: "What payout schedules can we automate?",
    answer:
      "Monthly, quarterly, or milestone-based payouts are supported with optional reinvestment offers, withholding, and tax documentation."
  },
  {
    question: "Do you integrate with investment compliance partners?",
    answer:
      "We connect to KYC/AML providers, banking rails, ERPs, and analytics warehouses so every stakeholder works from one source of truth."
  },
  {
    question: "How do we educate the field on investment guardrails?",
    answer:
      "Cloud MLM Software delivers playbooks, AI-guided scripts, and compliance prompts that adapt to investor state and regulatory requirements."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Investment MLM Plan Strategy";
  const description =
    "Explore the investment MLM plan with Cloud MLM Software—capital governance, reserves, payouts, and compliance orchestrated end to end.";

  return {
    title,
    description,
    keywords: [
      "Investment MLM plan",
      "MLM investment software",
      "Cloud MLM Software",
      "capital compliance automation",
      "investment plan governance",
      "MLM investor relations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/investment-mlm-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InvestmentPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function InvestmentPlanPage({ params }: InvestmentPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Investment plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Investment MLM plan blueprint for compliant, confident capital growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Bring investor programmes online without compromising on compliance, liquidity, or field momentum. Cloud MLM Software orchestrates investment tiers, reserves, and payout policies with transparent analytics so finance, legal, and promoters stay in lockstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to an investment strategist
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
                  Model investor returns
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
            <InvestmentPlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How investment plan mechanics deliver predictable returns
          </h2>
          <p className="text-sm text-muted-foreground">
            Govern capital tiers, reserves, and payout cadences from one auditable workspace designed for investment plans.
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
            Foundations that keep compliance, finance, and field teams aligned
          </h2>
          <p className="text-sm text-muted-foreground">
            Align leadership on the investment narrative, regulatory guardrails, and enablement plan before the first payout leaves escrow.
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
              Stress-test capital, liquidity, and investor sentiment scenarios before launch so leadership stays ahead of risk.
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
            Investor and promoter journey through the investment plan
          </h2>
          <p className="text-sm text-muted-foreground">
            Every milestone—from onboarding to reinvestment—stays transparent with guided workflows, approvals, and predictive alerts.
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
            Implementation roadmap tuned for investment readiness
          </h2>
          <p className="text-sm text-muted-foreground">
            Structured sprints keep compliance, finance, technology, and field enablement teams marching in lockstep.
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
              Compliance teams gain the visibility, documentation, and controls they need to approve investment programmes without delays.
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
            Operational blueprint for investment excellence
          </h2>
          <p className="text-sm text-muted-foreground">
            From configuration to enablement, Cloud MLM Software provides a backbone that keeps capital, compliance, and field teams aligned with growth goals.
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
            Key answers that founders, finance leaders, compliance officers, and investor relations teams raise when evaluating an investment MLM rollout.
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
              Partner with Cloud MLM Software to launch an investment plan that delights investors, satisfies regulators, and protects your brand.
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
                  Schedule an investment workshop
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
                <span>Compliance playbooks cover AML, KYC, and securities disclosures for each launch market.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards monitor capital deployed, reserve sufficiency, and investor retention in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Alerts keep investor relations and finance teams ahead of redemption or liquidity pressure.</span>
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
