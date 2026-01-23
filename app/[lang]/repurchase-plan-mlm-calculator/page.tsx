import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";
import Image from "next/image"; // Added for potential future use

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart3,
  ClipboardCheck,
  Gauge,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  CirclesThreePlus,
  DeviceMobile,
  HandCoins,
  ListChecks,
  Target,
  ChartLineUp,
  Robot,
  ChartPieSlice
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type ModelArea = {
  title: string;
  description: string;
  icon: IconType;
};

type Step = {
  title: string;
  detail: string;
  icon: IconType;
};

type Benefit = {
  title: string;
  detail: string;
};

type MobileCapability = {
  title: string;
  description: string;
  icon: IconType;
};

type AiFeature = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Average reorder cadence",
    value: "30-90 days",
    description: "Forecast product demand windows for customers, newcomers, and loyalty cohorts.",
    icon: Gauge
  },
  {
    label: "Stackable plan support",
    value: "Binary • Matrix • Stair-step",
    description: "Blend repurchase logic with hybrid compensation rules inside one ledger.",
    icon: CirclesThreePlus
  },
  {
    label: "Compliance guardrails",
    value: "Pre-configured",
    description: "Apply caps, disclaimers, and audit artefacts before promotions launch.",
    icon: ShieldCheck
  }
];

const MODEL_AREAS: ModelArea[] = [
  {
    title: "Direct-to-customer traction",
    description:
      "Measure how word-of-mouth campaigns and sampling bundles translate into steady reorder velocity across regions.",
    icon: Network
  },
  {
    title: "Commission precision",
    description:
      "Fine-tune margins so first-time shoppers keep their profits while uplines receive targeted loyalty bonuses.",
    icon: HandCoins
  },
  {
    title: "Inventory readiness",
    description:
      "Align supply partners with auto-restock thresholds, expiry tracking, and pack configurations for every launch.",
    icon: ClipboardCheck
  }
];

const STEPS: Step[] = [
  {
    title: "Set the foundations",
    detail:
      "Document repurchase frequency, qualifying order values, and how additional plans—binary, matrix, or stair-step—link into the payout.",
    icon: Workflow
  },
  {
    title: "Model the scenarios",
    detail:
      "Layer enrolment, average order values, and promotional incentives to simulate both conservative and stretch outcomes.",
    icon: BarChart3
  },
  {
    title: "Validate and publish",
    detail:
      "Generate shareable summaries, guard compliance with pre-built checks, and distribute insights to finance and field leaders.",
    icon: Sparkles
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Accurate commission calculation",
    detail: "Automated earnings matrices remove manual spreadsheets and surface discrepancies before payout runs."
  },
  {
    title: "Customisable for any cohort",
    detail: "Tweak product bundles, discounts, and loyalty credits per segment while maintaining corporate oversight."
  },
  {
    title: "Confident forecasting",
    detail: "Scenario dashboards expose the revenue lift from each repurchase cadence so executives can invest with certainty."
  },
  {
    title: "Embedded compliance checks",
    detail: "Regional disclosures and volume caps stay connected to every calculator scenario, supporting audit readiness."
  }
];

const MOBILE_CAPABILITIES: MobileCapability[] = [
  {
    title: "Guided reorder journeys",
    description: "Serve mobile prompts that nudge shoppers toward the perfect replenishment bundle at the right moment.",
    icon: DeviceMobile
  },
  {
    title: "Field coaching on the go",
    description: "Leaders receive instant notifications when teams drift from target cadence so they can deploy coaching scripts.",
    icon: Target
  },
  {
    title: "Shared playbooks",
    description: "Provide bite-sized content, certifications, and launch checklists directly inside the mobile workspace.",
    icon: ListChecks
  }
];

const AI_FEATURES: AiFeature[] = [
  {
    title: "Predictive Churn Forecasting",
    detail: "AI analyzes purchasing patterns to predict which customers are likely to churn, allowing you to proactively engage them with targeted offers.",
    icon: ChartLineUp
  },
  {
    title: "Personalized Campaign Automation",
    detail: "Automatically generate and deploy custom promotion bundles and reorder reminders based on individual customer behavior and preferences.",
    icon: Robot
  },
  {
    title: "Dynamic Compensation Scenario Testing",
    detail: "Simulate and optimize thousands of hybrid compensation models in seconds, providing clear, data-backed insights on projected profitability.",
    icon: ChartPieSlice
  },
];


export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Repurchase MLM Plan Calculator | Cloud MLM Software";
  const description =
    "Model repurchase incentives, forecast reorder velocity, and equip leaders with compliance-ready insights using Cloud MLM Software’s repurchase plan calculator. Optimize your direct-to-consumer strategy with our AI-powered tool.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/repurchase-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RepurchaseCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function RepurchaseCalculatorPage({ params }: RepurchaseCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const planHref = buildLocalizedPath("/mlm-plan/repurchase-mlm-plan", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/70 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.25),transparent_50%),radial-gradient(circle_at_88%_22%,rgba(16,185,129,0.2),transparent_56%),radial-gradient(circle_at_48%_82%,rgba(59,130,246,0.18),transparent_55%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Repurchase compensation intelligence
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Simulate every repurchase incentive with clarity.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                The Cloud MLM Software calculator turns direct-to-customer strategies into actionable numbers. Map recurring orders, loyalty bonuses, and hybrid plan overrides so field leaders, finance, and compliance teams march in step.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={planHref}>
                  Review the repurchase plan
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={contactHref}>
                  Talk with an advisor
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">
                Why leaders rely on the calculator
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Ensure new customer profits stay intact while uplines receive predictable royalties, all without spreadsheet gymnastics.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {HERO_METRICS.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <article key={metric.label} className="flex h-full flex-col gap-2 rounded-2xl border border-border/60 bg-muted/30 p-4 shadow-inner dark:border-border/40 dark:bg-slate-900/40">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                      <p className="text-base font-semibold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="relative h-fit space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">What you can model</p>
              <p className="text-sm text-muted-foreground">
                Translate qualitative product stories and word-of-mouth energy into transparent, data-backed scenarios.
              </p>
            </div>
            <div className="space-y-5">
              {MODEL_AREAS.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.title} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h2 className="text-sm font-semibold text-foreground">{area.title}</h2>
                      <p className="text-xs text-muted-foreground">{area.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={demoHref}>
                Launch the calculator demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From inputs to insight in three steps</h2>
          <p className="text-sm text-muted-foreground">
            Each step keeps your product, finance, and compliance teams aligned as you scale direct-to-customer revenue.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">Step {index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Benefits that compound with every reorder</h2>
            <p className="text-sm text-muted-foreground">
              Empower developers, distributors, and executives with the clarity they need to promote, coach, and finance repurchase growth.
            </p>
            <ul className="space-y-4 mt-6">
              {BENEFITS.map((benefit) => (
                <li key={benefit.title} className="rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Operational focus</p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>• Configure reorder journeys without custom code and preview loyalty uplift instantly.</p>
              <p>• Share calculator scenarios with finance to lock in treasury coverage before the next cycle.</p>
              <p>• Sync support teams so compliance warnings, promotions, and service scripts stay consistent.</p>
            </div>
            <Button asChild>
              <Link href={contactHref}>
                Schedule a working session
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4 text-center mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            AI-Powered Growth Engine
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Go beyond calculation with intelligent insights.
          </h2>
          <p className="text-sm text-muted-foreground">
            Our platform uses predictive AI to help you identify growth opportunities and optimize your compensation plans, ensuring your strategy is always data-driven.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {AI_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="relative flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-cyan-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Mobilise repurchase momentum</h2>
              <p className="text-sm text-muted-foreground">
                Launch the calculator insights directly inside the Cloud MLM Software mobile application so distributors can act wherever they are.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {MOBILE_CAPABILITIES.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <article key={capability.title} className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <h3 className="text-sm font-semibold text-foreground">{capability.title}</h3>
                      <p className="text-xs text-muted-foreground">{capability.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="relative space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Ready for next steps</p>
              <p className="text-sm text-muted-foreground">
                Share your current product catalogues, average reorder windows, and growth goals. We will prepare a readiness roadmap with automation and mobile enablement recommendations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Book a discovery call
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={demoHref}>
                    Explore the demo workspace
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}