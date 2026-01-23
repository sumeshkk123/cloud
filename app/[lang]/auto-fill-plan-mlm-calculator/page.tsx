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
  Blocks,
  Bot,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  GaugeCircle,
  Layers3,
  LineChart,
  Network,
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
    label: "Auto-fill plan models built",
    value: "110+",
    detail: "Matrix and spillover implementations validated across direct selling and affiliate brands."
  },
  {
    label: "Median time to forecast",
    value: "2 days",
    detail: "From requirements intake to stakeholder ready projections for auto-fill programs."
  },
  {
    label: "Forecast accuracy",
    value: "< 3% variance",
    detail: "Difference between calculator projections and live payouts when inputs stay current."
  },
  {
    label: "AI tagged data points",
    value: "90+",
    detail: "Structured fields optimised for dashboards, copilots, and compliance reviews."
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Visualise spillover health",
    description:
      "Track how automatic placements, spillover pools, and forced matrix logic influence sponsor earnings and team balance.",
    bullets: [
      "See how each level fills across power legs",
      "Compare manual versus auto placement outcomes",
      "Spot placement bottlenecks before they slow growth"
    ],
    icon: Network
  },
  {
    title: "Finance-first transparency",
    description:
      "Keep finance, tax, and compliance teams aligned with export ready statements that document assumptions and payout caps.",
    bullets: [
      "Monitor cost-to-comp ratios over time",
      "Log overrides, adjustments, and approvals",
      "Surface cash flow implications for each scenario"
    ],
    icon: BarChart3
  },
  {
    title: "Advisor guidance baked in",
    description:
      "Use curated recommendations from Cloud MLM analysts to refine plan logic, retention incentives, and communication.",
    bullets: [
      "Align messaging with distributor education",
      "Prioritise optimisation experiments with clear ROI",
      "Document decisions for future audits and leadership"
    ],
    icon: ShieldCheck
  }
];

const STEPS: Step[] = [
  {
    title: "Collect the right inputs",
    description:
      "Define matrix width and depth, carryover rules, activity requirements, and bonus pools with tooltips built for planners and finance teams.",
    icon: ClipboardCheck
  },
  {
    title: "Run targeted scenarios",
    description:
      "Adjust enrolment velocity, placement preferences, and loyalty incentives to see how payouts and margins respond.",
    icon: Calculator
  },
  {
    title: "Share actionable insights",
    description:
      "Package narratives, dashboards, and recommended next steps so leaders approve changes with confidence.",
    icon: LineChart
  }
];

const SCENARIOS: Scenario[] = [
  {
    title: "Launch-ready automation",
    inputs: "3x10 matrix, 150 enrollers, auto spillover enabled, onboarding bonus",
    outcome: "Projects AUD 310K in commissions with 52% cost-to-comp while maintaining sponsor incentives in the first quarter.",
    icon: Layers3
  },
  {
    title: "Retention surge",
    inputs: "Existing network, inactivity threshold tightened, loyalty vouchers added",
    outcome: "Shows a 17% lift in recurring volume and stabilised payouts when members engage with loyalty perks.",
    icon: GaugeCircle
  },
  {
    title: "Compliance stress test",
    inputs: "Weekly cap introduced, manual placement ratio adjusted, FX protection applied",
    outcome: "Confirms payouts stay within regulatory allowances and margin guardrails despite fast growth.",
    icon: Blocks
  }
];

const INSIGHTS_LEFT: Insight[] = [
  { description: "Track spillover contributions and matrix fill rates at every level." },
  { description: "Connect activity metrics to distributor progression and retention." },
  { description: "Validate payout caps, flush rules, and breakage policies for compliance." },
  { description: "Bridge calculator data into Cloud MLM Software sandbox runs before go-live." }
];

const INSIGHTS_RIGHT: Insight[] = [
  { description: "Coordinate plan updates with marketing, training, and support content." },
  { description: "Benchmark auto-fill performance against hybrid or binary models." },
  { description: "Give founders dashboards linking revenue, churn, and incentive ROI." },
  { description: "Maintain version controlled archives of assumptions and approvals." }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "AI ready calculator fields",
    description:
      "Structured metadata makes it easy for copilots to answer plan questions with contextual accuracy across languages.",
    icon: Bot
  },
  {
    title: "Scenario storytelling",
    description:
      "Automated summaries translate numbers into executive briefings, distributor guidance, and compliance notes.",
    icon: Sparkles
  },
  {
    title: "Knowledge collaboration",
    description:
      "Push insights to knowledge bases so support teams and chatbots deliver consistent explanations of auto-fill logic.",
    icon: MessageSquare
  }
];

const FAQS: Faq[] = [
  {
    question: "Which inputs power the auto-fill calculator?",
    answer:
      "Start with matrix dimensions, activity requirements, commission percentages, carryover rules, and any extra bonuses or pools."
  },
  {
    question: "Can I compare manual and automatic placement?",
    answer:
      "Yes. Run side-by-side scenarios to see how different placement strategies affect sponsor income, retention, and margin."
  },
  {
    question: "Does the tool support compliance reviews?",
    answer:
      "Every run logs assumptions, overrides, and approvals so finance and legal teams can audit payouts against policy."
  },
  {
    question: "How do I activate live payouts after modelling?",
    answer:
      "Export approved scenarios into the Cloud MLM commission engine to simulate payroll or move into automation."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Auto Fill Plan MLM Calculator";
  const description =
    "Model spillover growth, commission caps, and retention incentives with Cloud MLM Software Auto Fill plan calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/auto-fill-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AutoFillCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function AutoFillCalculatorPage({ params }: AutoFillCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/auto-fill-plan-mlm-software", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_9%_18%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-8%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Auto-fill mastery for modern networks
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Forecast auto-fill plan results and align every stakeholder fast.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software Auto Fill calculator brings clarity to spillover logic, payout caps, and retention incentives so you can plan, validate, and launch with confidence.
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
                  Review the Auto Fill plan
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What you gain with the Auto Fill calculator</h2>
          <p className="text-sm text-muted-foreground">
            Move from intuition to data-backed decisions with models grounded in real activity, compensation, and regulatory requirements.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow leaders can trust</h2>
          <p className="text-sm text-muted-foreground">
            Follow a structured process that keeps product, finance, compliance, and field leaders on the same page.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scenario planning for every milestone</h2>
            <p className="text-sm text-muted-foreground">
              Explore launch, growth, and compliance scenarios so you can act quickly and stay ahead of change.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Insights that protect performance</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Leverage advisory notes and benchmarks to improve plan stability, distributor satisfaction, and profit.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Target className="h-4 w-4" aria-hidden />
              Strategic guidance
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              Analysts outline opportunities, risks, and deployment checklists so you prioritise changes that drive measurable results.
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
              Build calculator outputs, insights, and documentation that conversational agents can reference instantly.
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

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-emerald-200/20 p-10 shadow-sm dark:from-primary/20 dark:to-emerald-500/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Plan your next move with confidence</h2>
            <p className="text-sm text-muted-foreground">
              Work with Cloud MLM Software to validate assumptions, align leadership, and execute auto-fill plan improvements at speed.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Start a strategy session
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

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Answers to common questions before you schedule a walkthrough.
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
    </div>
  );
}
