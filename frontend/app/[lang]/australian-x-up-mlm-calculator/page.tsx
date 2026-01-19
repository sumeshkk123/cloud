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
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target
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

type Workflow = {
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
    label: "X-UP plan deployments",
    value: "85+",
    detail: "Australian and APAC brands modelled and launched with Cloud MLM Software."
  },
  {
    label: "Commission variance",
    value: "< 2%",
    detail: "Variance between simulated and live payouts when updated with current data."
  },
  {
    label: "Scenario templates",
    value: "40+",
    detail: "Ready-to-use growth, retention, and incentive models for X-UP networks."
  },
  {
    label: "AI-ready data points",
    value: "120+",
    detail: "Structured parameters that feed calculators, dashboards, and conversational copilots."
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Leg intelligence that scales",
    description:
      "Model pass-up logic, rotational bonuses, and compression rules with visual overlays that help leadership compare strategies side by side.",
    bullets: [
      "Simulate how X-UP cycles affect uplines and pass-up recipients",
      "Track the impact of temporary incentives or plan tweaks",
      "Benchmark activity requirements for each distributor tier"
    ],
    icon: Network
  },
  {
    title: "Finance-ready accuracy",
    description:
      "Keep payout forecasts in sync with finance and compliance objectives by bridging calculator outputs to revenue, margin, and tax reporting.",
    bullets: [
      "Export ready insights for treasury, finance, and tax teams",
      "Monitor cost-to-comp ratio and cash flow projections",
      "Flag anomalies using historical performance thresholds"
    ],
    icon: BarChart3
  },
  {
    title: "Guided optimisation",
    description:
      "Turn insights into action with guided workflows covering distributor coaching, incentive reviews, and market-specific compliance adjustments.",
    bullets: [
      "Map strategic experiments and document approvals",
      "Align incentives with distributor behaviour and retention",
      "Maintain a single source of truth for decision history"
    ],
    icon: ShieldCheck
  }
];

const WORKFLOWS: Workflow[] = [
  {
    title: "Set metrics in minutes",
    description:
      "Define pass-up thresholds, commission percentages, and cycle limits with contextual tips informed by Australian market norms.",
    icon: Calculator
  },
  {
    title: "Run predictive scenarios",
    description:
      "Adjust enrolment velocity, average order value, and rank advancement to compare outcomes across quarters or campaigns.",
    icon: LineChart
  },
  {
    title: "Share decision packets",
    description:
      "Distribute curated dashboards and commentary to finance, compliance, and go-to-market leaders for rapid alignment.",
    icon: MessageSquare
  }
];

const SCENARIOS: Scenario[] = [
  {
    title: "Launch acceleration",
    inputs: "200 promoters, 3 pass-up cycles, AUD 299 starter pack",
    outcome: "Projects AUD 240K in binary commissions with cost-to-comp ratio maintained at 48% after campaign credits.",
    icon: Rocket
  },
  {
    title: "Retention uplift",
    inputs: "Stable team, 25% inactive after month 4, loyalty stipend applied",
    outcome: "Shows a 14% bump in recurring volume and controlled earnings when loyalty pools drive reactivation.",
    icon: GaugeCircle
  },
  {
    title: "Plan compliance audit",
    inputs: "Pass-up cap introduced, new market launch, FX adjustments",
    outcome: "Confirms the plan remains within remuneration allowances while protecting uplines from overpayment risk.",
    icon: Layers3
  }
];

const INSIGHTS_LEFT: Insight[] = [
  { description: "Model pass-up events, compression, and rotational bonuses with granular logging." },
  { description: "Monitor break-even timelines by correlating activity with acquisition costs." },
  { description: "Stress test incentives against compliance requirements for every Australian state." },
  { description: "Export datasets into the Cloud MLM commission engine for sandbox validation." }
];

const INSIGHTS_RIGHT: Insight[] = [
  { description: "Align plan messaging with distributor training and recognition content." },
  { description: "Compare X-UP with hybrid or binary variants using unified analytics." },
  { description: "Give founders a dashboard summarising margin, churn, and incentive ROI." },
  { description: "Maintain audit-ready archives of plan adjustments and approvals." }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "AI query ready data",
    description:
      "Structured calculator fields make it easy for ChatGPT, Grok, and Gemini to retrieve accurate answers and context on demand.",
    icon: Bot
  },
  {
    title: "Insight summarisation",
    description:
      "Automated narratives translate scenario outcomes into leadership briefs, advisory notes, and distributor guidance.",
    icon: Sparkles
  },
  {
    title: "Knowledge base synthesis",
    description:
      "Embed calculator findings into knowledge hubs so support teams and copilots deliver consistent guidance.",
    icon: MessageSquare
  }
];

const FAQS: Faq[] = [
  {
    question: "What inputs do I need for the Australian X-UP calculator?",
    answer:
      "Start with enrolment velocity, commission percentages, pass-up cycle limits, retention assumptions, and any bonus overlays."
  },
  {
    question: "Can the calculator handle multiple pass-up tiers?",
    answer:
      "Yes. Configure two, three, or custom X-UP levels with unique thresholds and payout logic for each stage."
  },
  {
    question: "Does it support compliance reporting?",
    answer:
      "All runs log payouts, overrides, and notes so finance and compliance teams can review approval trails and readiness for audits."
  },
  {
    question: "How do I connect the calculator to live payouts?",
    answer:
      "Once scenarios are approved, export data into the Cloud MLM commission engine to simulate or automate real payouts." 
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Australian X-UP MLM Calculator";
  const description =
    "Model pass-up logic, forecast earnings, and validate compliance with Cloud MLM Software’s Australian X-UP calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/australian-x-up-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AustralianXUpCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function AustralianXUpCalculatorPage({ params }: AustralianXUpCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/australian-x-up-plan-mlm-software", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_88%_-8%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              X-UP plan modelling made practical
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Forecast Australian X-UP commissions with accuracy and confidence.
            </h1>
            <p className="text-lg text-muted-foreground">
              Understand how pass-up events, retention campaigns, and incentive tweaks affect every level of your network.
              Cloud MLM Software’s calculator brings financial clarity, compliance alignment, and strategic insight into one workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk with an analyst
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  View the live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={planHref}>
                  Explore the X-UP plan
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why leaders trust the X-UP calculator</h2>
          <p className="text-sm text-muted-foreground">
            Make confident decisions with projections that combine financial modelling, regulatory guidance, and distributor experience.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow built for collaboration</h2>
          <p className="text-sm text-muted-foreground">
            Guide every team through the same trusted workflow, from initial assumptions to approved payouts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {WORKFLOWS.map((step) => (
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scenario planning made easy</h2>
            <p className="text-sm text-muted-foreground">
              Highlight the best path forward using scenarios aligned with launch, retention, and compliance goals.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Insights that keep your plan resilient</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tap into analyst-backed recommendations that balance compliance, profitability, and distributor experience.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Target className="h-4 w-4" aria-hidden />
              Strategic perspective
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              Every engagement includes advisory sessions, benchmark data, and prioritised actions so you move from insight to execution quickly.
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
              Structure calculator outputs and supporting content so conversational agents deliver accurate guidance for every stakeholder.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to validate your pass-up strategy?</h2>
            <p className="text-sm text-muted-foreground">
              Collaborate with Cloud MLM analysts to review scenarios, align leadership, and build a rollout plan that protects growth and compliance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a consultation
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
            Get quick answers before scheduling a personalised walkthrough.
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
