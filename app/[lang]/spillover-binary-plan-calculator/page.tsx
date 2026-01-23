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
  BarChart4,
  GitBranch,
  GaugeCircle,
  LineChart,
  Radar,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  ChartLineUp,
  ChartPieSlice,
  CirclesThreePlus,
  DeviceMobile,
  HandCoins,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type FocusArea = {
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

type MobileCue = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Downline depth tracked",
    value: "Up to 15 levels",
    detail: "Collect team volume, spillover balance, and matching bonus triggers in real time.",
    icon: Radar
  },
  {
    label: "Reorder cadence",
    value: "Weekly snapshots",
    detail: "Forecast leg ratios and promote corrective actions before imbalance penalties hit.",
    icon: GaugeCircle
  },
  {
    label: "Scenarios ready",
    value: "Binary + forced spillover",
    detail: "Overlay loyalty campaigns, qualifying packs, and matching bonuses without spreadsheets.",
    icon: CirclesThreePlus
  }
];

const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Projection of earnings",
    description:
      "Simulate compensation across sponsor, weak-leg, and matching pools so finance teams build accurate forecasts.",
    icon: ChartLineUp
  },
  {
    title: "Dynamic adjustments",
    description:
      "Apply what-if scenarios for enrollment surges, product bundles, or regional caps and instantly compare outcomes.",
    icon: GitBranch
  },
  {
    title: "Balance analysis",
    description:
      "Spot weak-leg deficits, automate carry-forward recommendations, and notify leaders before reward cycles close.",
    icon: LineChart
  },
  {
    title: "Matching bonus clarity",
    description:
      "Calculate executive bonus layers with drill-downs that keep compliance and leadership aligned.",
    icon: BarChart4
  }
];

const STEPS: Step[] = [
  {
    title: "Define the spillover rules",
    detail:
      "Capture enrolment caps, carry-forward policies, and activation packs that govern your spillover binary plan.",
    icon: Workflow
  },
  {
    title: "Load team and product signals",
    detail:
      "Feed personal and team volumes, leg assignments, and promotion calendars to fuel the calculator.",
    icon: ChartPieSlice
  },
  {
    title: "Share insights and act",
    detail:
      "Generate ready-to-present reports for leaders, highlight corrective actions, and export compliance artefacts.",
    icon: Sparkles
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Accurate earnings outlook",
    detail: "Give distributors confidence with real numbers across every spillover tier and matching bonus."
  },
  {
    title: "Customisable for any cohort",
    detail: "Tailor packs, loyalty credits, and regional incentives without rebuilding the compensation model."
  },
  {
    title: "Compliance-ready analysis",
    detail: "Keep audit notes, disclaimers, and guardrails embedded in every forecast you share."
  },
  {
    title: "Growth visualisation",
    detail: "Understand how spillover momentum affects inventory, logistics, and customer support workloads."
  }
];

const MOBILE_CUES: MobileCue[] = [
  {
    title: "Instant leg health alerts",
    detail: "Notify field leaders when weak-leg points fall behind so corrective coaching happens on time.",
    icon: UsersThree
  },
  {
    title: "Guided reorder prompts",
    detail: "Trigger mobile journeys that nudge customers toward the right replenishment or bundle offer.",
    icon: DeviceMobile
  },
  {
    title: "Executive dashboards",
    detail: "Provide executives with at-a-glance projections and cash flow indicators on any device.",
    icon: HandCoins
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Spillover Binary Plan MLM Calculator";
  const description =
    "Forecast earnings, balance legs, and optimise spillover binary incentives with Cloud MLM Software’s calculator experience.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/spillover-binary-plan-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SpilloverCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function SpilloverCalculatorPage({ params }: SpilloverCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const planHref = buildLocalizedPath("/mlm-plan/spillover-binary-plan-software", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-sky-900/50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(79,70,229,0.22),transparent_52%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.24),transparent_55%),radial-gradient(circle_at_34%_84%,rgba(59,130,246,0.18),transparent_55%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Spillover binary intelligence
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Model spillover momentum and keep every leg balanced.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                The spillover binary calculator transforms complex commission logic into transparent simulations. Project income, stabilise leg ratios, and empower teams with clarity on how effort and smart coaching convert into rewards.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={planHref}>
                  Review the spillover plan
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={contactHref}>
                  Speak with an advisor
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Why teams rely on the calculator</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Align developers, distributors, and executives around precise targets so every spillover cycle feeds sustainable growth.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {HERO_METRICS.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <article key={metric.label} className="flex h-full flex-col gap-2 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-border/40 dark:bg-slate-900/40">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                      <p className="text-base font-semibold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.detail}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="relative h-fit space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Key capabilities</p>
              <p className="text-sm text-muted-foreground">
                Interrogate spillover mechanics, visualise network health, and act before growth stalls.
              </p>
            </div>
            <div className="space-y-5">
              {FOCUS_AREAS.map((area) => {
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
                Explore the interactive demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Guide your team from inputs to insight</h2>
          <p className="text-sm text-muted-foreground">
            A structured calculator journey keeps every department aligned as you scale direct-to-customer volume.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
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
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Benefits that keep your spillover plan resilient</h2>
            <p className="text-sm text-muted-foreground">
              Keep momentum high with transparent compensation, adaptable modelling, and audit-ready insights.
            </p>
            <ul className="space-y-4">
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
              <p>• Maintain healthy leg ratios with predictive coaching prompts and inventory guidance.</p>
              <p>• Share growth projections with finance to secure treasury coverage ahead of commission cycles.</p>
              <p>• Equip compliance teams with embedded notes, disclaimers, and audit history for every scenario.</p>
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

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-sky-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-sky-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Extend insights to the Cloud MLM mobile app</h2>
              <p className="text-sm text-muted-foreground">
                Convert calculator outputs into field-ready actions delivered through our native mobile experience.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {MOBILE_CUES.map((cue) => {
                  const Icon = cue.icon;
                  return (
                    <article key={cue.title} className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <h3 className="text-sm font-semibold text-foreground">{cue.title}</h3>
                      <p className="text-xs text-muted-foreground">{cue.detail}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="relative space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Ready for next steps</p>
              <p className="text-sm text-muted-foreground">
                Share your average order value, team distribution, and spillover rules. We will prepare a tailored roadmap that blends calculator insights, mobile enablement, and onboarding support.
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
                    Access the demo workspace
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
