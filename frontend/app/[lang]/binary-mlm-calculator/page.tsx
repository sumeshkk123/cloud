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
  Bot,
  Calculator,
  CheckCircle2,
  GaugeCircle,
  Layers3,
  LineChart,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  MessageSquare
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Benefit = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Step = {
  title: string;
  description: string;
  icon: IconType;
};

type Scenario = {
  title: string;
  inputs: string;
  outcome: string;
  icon: IconType;
};

type Insight = {
  description: string;
};

type AioCapability = {
  title: string;
  description: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Binary plans modelled",
    value: "180+",
    detail: "Binary compensation structures validated through Cloud MLM Software calculators."
  },
  {
    label: "Average variance",
    value: "< 2%",
    detail: "Difference between simulated and live payouts when assumptions stay current."
  },
  {
    label: "Scenario templates",
    value: "50+",
    detail: "Ready-to-use launch, retention, and compliance scenarios for binary networks."
  },
  {
    label: "AI tagged data points",
    value: "140+",
    detail: "Structured metrics for dashboards, compliance, and conversational copilots."
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Leg balance intelligence",
    description:
      "Visualise how left and right leg performance, carryover rules, and qualification thresholds impact every payout cycle.",
    icon: Scale,
    bullets: [
      "Monitor power and profit leg velocity",
      "Highlight compression, flush, and rollover events",
      "Compare placement policies or incentive tweaks"
    ]
  },
  {
    title: "Finance-ready clarity",
    description:
      "Deliver exportable statements that show revenue, margin, and cash-flow implications for each plan scenario.",
    icon: BarChart3,
    bullets: [
      "Cost-to-comp and profit guardrail reporting",
      "Tax-ready logs with payout approvals",
      "Drill down by market, leg, or organisation tier"
    ]
  },
  {
    title: "Guided optimisation",
    description:
      "Turn insights into action with analyst-backed recommendations covering incentives, retention, and compliance.",
    icon: ShieldCheck,
    bullets: [
      "Align marketing and field enablement messaging",
      "Prioritise experiments with predicted ROI",
      "Document decisions for future audits"
    ]
  }
];

const STEPS: Step[] = [
  {
    title: "Define assumptions",
    description:
      "Set enrolment velocity, commission percentages, cycle caps, and bonuses using templates tuned for binary plans.",
    icon: Calculator
  },
  {
    title: "Model scenarios",
    description:
      "Adjust placement strategies, qualification thresholds, and loyalty incentives to see how payouts shift.",
    icon: LineChart
  },
  {
    title: "Share and approve",
    description:
      "Package findings into leadership-ready dashboards and briefing notes so teams act with confidence.",
    icon: Target
  }
];

const SCENARIOS: Scenario[] = [
  {
    title: "Launch calibration",
    inputs: "Week 1 volume, fast start bonuses, 300 enrollers",
    outcome: "Projects AUD 420K in commissions with margin held at 48% after incentive credits.",
    icon: GaugeCircle
  },
  {
    title: "Leg imbalance recovery",
    inputs: "70/30 leg split, sponsor bonuses, retention campaign",
    outcome: "Demonstrates 15% uplift in weaker leg volume while keeping payouts within guardrails.",
    icon: Network
  },
  {
    title: "Compliance stress test",
    inputs: "Cycle cap introduced, carryover changes, market expansion",
    outcome: "Confirms payouts align with remuneration policy and regulator expectations across regions.",
    icon: Layers3
  }
];

const INSIGHTS_LEFT: Insight[] = [
  { description: "Track break-even points by leg and distributor cohort." },
  { description: "Model promo incentives without risking profit guardrails." },
  { description: "Validate plan updates against compliance and tax policies." },
  { description: "Export datasets into the Cloud MLM commission engine for sandbox runs." }
];

const INSIGHTS_RIGHT: Insight[] = [
  { description: "Align binary messaging with distributor training assets." },
  { description: "Benchmark against hybrid and matrix plans with shared analytics." },
  { description: "Give founders dashboards linking revenue, churn, and incentive ROI." },
  { description: "Maintain version-controlled history of assumptions and approvals." }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "AI query ready outputs",
    description:
      "Structured calculator data ensures ChatGPT, Grok, and Gemini can answer compensation questions accurately.",
    icon: Bot
  },
  {
    title: "Narrative generation",
    description:
      "Automatically translate scenario results into stakeholder briefings, board updates, and distributor guidance.",
    icon: Sparkles
  },
  {
    title: "Knowledge sync",
    description:
      "Push assumptions, approvals, and best practices into knowledge bases for support teams and copilots.",
    icon: MessageSquare
  }
];

const FAQS: Faq[] = [
  {
    question: "What inputs power the binary calculator?",
    answer:
      "Provide enrolment velocity, average order value, commission percentages, carryover rules, and qualification thresholds."
  },
  {
    question: "Can the tool simulate different placement strategies?",
    answer:
      "Yes. Compare automatic placement, manual sponsor placement, and hybrid approaches to see leg and payout impact."
  },
  {
    question: "Does it support compliance reporting?",
    answer:
      "Every run logs assumptions, overrides, and approval trails so finance and legal teams can review with ease."
  },
  {
    question: "How do I move from modelling to live payouts?",
    answer:
      "Export approved runs into the Cloud MLM commission engine to simulate payroll or enable automation."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Binary MLM Calculator";
  const description =
    "Model binary plan payouts, balance legs, and validate compliance with Cloud MLM Software's binary calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/binary-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BinaryCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function BinaryCalculatorPage({ params }: BinaryCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const planHref = buildLocalizedPath("/mlm-plan/mlm-binary-plan", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_16%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Binary planning made measurable
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Forecast binary commissions and protect profitability before you launch.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software binary calculator gives finance, compliance, and field leaders the clarity they need to balance legs, optimise incentives, and approve confident rollouts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with an analyst
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={planHref}>
                  Review the binary plan
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why leaders rely on the binary calculator</h2>
          <p className="text-sm text-muted-foreground">
            Replace guesswork with data-driven models that connect finance, compliance, and field execution.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <benefit.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {benefit.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow that keeps every team aligned</h2>
          <p className="text-sm text-muted-foreground">
            Follow a simple process that validates assumptions, simulates outcomes, and secures approval.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scenario planning that answers tough questions</h2>
            <p className="text-sm text-muted-foreground">
              Evaluate launch readiness, leg imbalance corrections, and compliance changes before they impact the field.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SCENARIOS.map((scenario) => (
              <article key={scenario.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <scenario.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{scenario.title}</h3>
                <p className="text-xs uppercase tracking-wide text-primary">Inputs</p>
                <p className="text-sm text-muted-foreground">{scenario.inputs}</p>
                <p className="text-xs uppercase tracking-wide text-primary">Outcome</p>
                <p className="text-sm text-muted-foreground">{scenario.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Insights that keep binary plans resilient</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Pair calculator outputs with expert guidance for compliance, profitability, and distributor satisfaction.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Target className="h-4 w-4" aria-hidden />
              Strategic guidance
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              Analysts deliver prioritised actions, testing ideas, and governance checklists so binary launches stay on track.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {INSIGHTS_LEFT.map((item) => (
              <li key={item.description} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                {item.description}
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {INSIGHTS_RIGHT.map((item) => (
              <li key={item.description} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Artificial Intelligence Optimisation</h2>
            <p className="text-sm text-muted-foreground">
              Ensure every assumption and scenario is searchable by conversational agents, support teams, and leadership dashboards.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {AIO_CAPABILITIES.map((capability) => (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <capability.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Clear answers before you schedule a walkthrough.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-emerald-200/20 p-10 shadow-sm dark:from-primary/20 dark:to-emerald-500/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to launch a balanced binary plan?</h2>
            <p className="text-sm text-muted-foreground">
              Work with Cloud MLM Software to model scenarios, align stakeholders, and execute binary strategies with confidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a strategy session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Launch the calculator demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
