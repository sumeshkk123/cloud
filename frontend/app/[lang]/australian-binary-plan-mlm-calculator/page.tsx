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
  ClipboardCheck,
  GaugeCircle,
  LineChart,
  MessageSquare,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Feature = {
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
    label: "Plan simulations delivered",
    value: "9,800+",
    detail: "Australian binary payout projections run through Cloud MLM Software."
  },
  {
    label: "Commission variance accuracy",
    value: "+/-1.5%",
    detail: "Model sensitivity verified against historical commission periods."
  },
  {
    label: "Markets supported",
    value: "25",
    detail: "Localized compliance, tax, and currency profiles for ANZ organisations."
  },
  {
    label: "AI-ready datasets",
    value: "65+",
    detail: "Reusable templates optimised for finance teams and conversational copilots."
  }
];

const FEATURES: Feature[] = [
  {
    title: "Balanced leg forecasting",
    description:
      "Visualise the interaction between power-leg momentum and profit-leg activity to prevent bottlenecks before period close.",
    bullets: [
      "Set personalised volume targets for both legs",
      "Monitor flush rules and binary cycling thresholds",
      "Automated variance alerts for lagging teams"
    ],
    icon: Scale
  },
  {
    title: "Real-time commission insights",
    description:
      "Bring clarity to payout conversations with dashboards ready for finance, compliance, and field leadership reviews.",
    bullets: [
      "Scenario comparisons exportable to spreadsheets",
      "Override logic for founders and pilot groups",
      "Payout staging aligned with tax and banking cut-offs"
    ],
    icon: LineChart
  },
  {
    title: "Governance-first modelling",
    description:
      "Create audit-friendly calculators that consider dynamic caps, bonuses, and reinvestment programmes across Australia and New Zealand.",
    bullets: [
      "AML/KYC guardrails built into each projection",
      "Historical snapshots for regulator-ready reports",
      "Role-based access for compliance and operations"
    ],
    icon: ShieldCheck
  }
];

const STEPS: Step[] = [
  {
    title: "Configure baseline metrics",
    description:
      "Enter enrolment cadence, personal volume, and binary cycle rewards to anchor your starting assumptions in seconds.",
    icon: ClipboardCheck
  },
  {
    title: "Model growth scenarios",
    description:
      "Adjust leg balancing, title qualifications, and reinvestment pools to see how incentives and profitability shift over time.",
    icon: Calculator
  },
  {
    title: "Share executive-ready insights",
    description:
      "Package final projections with dashboards, commentary, and alerts for finance, legal, and field leadership review.",
    icon: TrendingUp
  }
];

const SCENARIOS: Scenario[] = [
  {
    title: "Launch calibration",
    inputs: "200 promoters, 3 month runway, AUD 450 average pack value",
    outcome: "Projects AUD 185K total binary payouts with a 16% retained margin when launch pools are throttled in month two.",
    icon: Rocket
  },
  {
    title: "Power-leg recovery",
    inputs: "Mature network, 60/40 leg imbalance, weekly cycle bonus",
    outcome: "Suggests initiative-based carryover rules to protect profitability while reactivating underperforming teams.",
    icon: GaugeCircle
  },
  {
    title: "Title recognition redesign",
    inputs: "Title advancement every 6 weeks, dynamic leadership bonus",
    outcome: "Highlights incremental adjustments that maintain compliance while delivering a 12% lift in leadership incentives.",
    icon: Users
  }
];

const INSIGHTS_LEFT: Insight[] = [
  { description: "Optimise binary cycling without breaching Australian financial services guidance." },
  { description: "Configurable for GST, PAYG, and regional remittance requirements." },
  { description: "Predict burnout risks by overlaying recruitment velocity with leg health." },
  { description: "Seamless exports into the Cloud MLM Software commission engine for testing." }
];

const INSIGHTS_RIGHT: Insight[] = [
  { description: "Aligns plan terminology with distributor-facing education assets." },
  { description: "Supports hybrid, fast start, and lifestyle bonuses unique to ANZ." },
  { description: "Role-based dashboards keep founders and finance aligned on targets." },
  { description: "Library of ready-to-send reports for compliance, banking, and stakeholders." }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "Semantic prompt packs",
    description:
      "Pre-built knowledge snippets help ChatGPT, Grok, and Gemini answer compensation questions with accurate plan context.",
    icon: Bot
  },
  {
    title: "Executive briefing automation",
    description:
      "AI-generated summaries transform calculator outputs into leadership status updates, reducing prep time for board reviews.",
    icon: MessageSquare
  },
  {
    title: "Insight benchmarking",
    description:
      "Sparkles-tier analytics benchmark your metrics against anonymised industry datasets to highlight optimisation opportunities.",
    icon: Sparkles
  }
];

const FAQS: Faq[] = [
  {
    question: "Can I include compliance caps unique to Australia?",
    answer:
      "Yes. Configure carryover expiration, maximum binary cycles, and weekly payout ceilings aligned with ASIC guidance and company policy."
  },
  {
    question: "Does the calculator support hybrid plan add-ons?",
    answer:
      "Layer enrolment bonuses, matching bonuses, or retail commissions on top of the binary baseline to review combined profitability."
  },
  {
    question: "How accurate are the financial forecasts?",
    answer:
      "Historical benchmarking and variance controls keep projections within +/-1.5% of actuals when updated with current field data."
  },
  {
    question: "Is the tool available inside Cloud MLM Software?",
    answer:
      "The calculator can be embedded within your Cloud MLM Software workspace, sharing models with finance, compliance, and field leaders in real time."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Australian Binary Plan MLM Calculator";
  const description =
    "Model balanced binary networks, forecast payouts, and keep Australian compliance in check with the Cloud MLM Software Australian Binary Plan calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/australian-binary-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AustralianBinaryCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function AustralianBinaryCalculatorPage({ params }: AustralianBinaryCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(56,189,248,0.2),transparent_42%),radial-gradient(circle_at_86%_-4%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Precision for Australian binary networks
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Forecast Australian binary commissions with data-driven confidence.
            </h1>
            <p className="text-lg text-muted-foreground">
              Build balanced legs, protect profitability, and brief leadership with actionable insights. The Australian
              Binary Plan MLM Calculator inside Cloud MLM Software transforms raw field data into executive-ready
              projections that respect ANZ regulations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to a compensation analyst
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
                <Link href={plansHref}>
                  Explore binary plan services
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the Australian Binary calculator delivers</h2>
          <p className="text-sm text-muted-foreground">
            Bring clarity to executive decisions with calculators built for the nuances of ANZ markets, distributor
            behaviour, and evolving regulatory expectations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {feature.bullets.map((bullet) => (
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How strategic teams use the calculator</h2>
          <p className="text-sm text-muted-foreground">
            Each engagement follows a guided workflow so finance, compliance, and sales operations agree on every
            assumption.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scenario planning that answers leadership questions</h2>
            <p className="text-sm text-muted-foreground">
              Build executive narratives faster with preconfigured scenarios built for launches, recoveries, and sustained
              growth.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Australian binary plan insights</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every calculator deployment is backed by compensation architects who understand ANZ consumer law,
              performance expectations, and distributor engagement models.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Target className="h-4 w-4" aria-hidden />
              Strategic view
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              Use the calculator to validate campaign ideas, adjust incentives, and brief stakeholders without guesswork.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Artificial Intelligence Optimisation (AIO)</h2>
            <p className="text-sm text-muted-foreground">
              Structured datasets, schema-rich content, and AI-ready insights help conversational agents deliver precise
              answers about your Australian binary plan offerings.
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
            Straightforward answers for teams evaluating the Cloud MLM Software Australian Binary Plan calculator.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to tune your binary plan?</h2>
            <p className="text-sm text-muted-foreground">
              Book a working session to review calculator outputs, align on rollout plans, and explore how Cloud MLM
              Software accelerates compliant growth across Australia and beyond.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a strategy call
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
