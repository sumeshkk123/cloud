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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  Gauge,
  Layers,
  LineChart,
  Map,
  ShieldCheck
} from "lucide-react";
import { Lightning, Path, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Benefit = {
  title: string;
  description: string;
  icon: IconType;
};

type Step = {
  label: string;
  title: string;
  detail: string;
  icon: IconType;
};

type Insight = {
  title: string;
  summary: string;
  metric: string;
};

type Advisory = {
  title: string;
  bullet: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "Compensation clarity",
    description:
      "Model projected commissions, roll-ups, and carry-overs so finance teams can see exactly how revenue turns into rewards.",
    icon: CircleDollarSign
  },
  {
    title: "Distributor motivation",
    description:
      "Visualise how each new enrollee accelerates rank progression and communicates a clear path to incentive milestones.",
    icon: Lightning
  },
  {
    title: "Operational guardrails",
    description:
      "Stress-test payout limits, retention ratios, and compliance thresholds before plans reach the field.",
    icon: ShieldCheck
  }
];

const STEPS: Step[] = [
  {
    label: "01",
    title: "Define the growth canvas",
    detail:
      "Set assumptions for enrolment cadence, pack mix, and auto-ship behaviour. The calculator adjusts volume and payout curves instantly.",
    icon: Map
  },
  {
    label: "02",
    title: "Tune earning milestones",
    detail:
      "Configure leadership bonuses, depth qualifications, and balance rules to mirror your monoline structure.",
    icon: Layers
  },
  {
    label: "03",
    title: "Simulate scenarios",
    detail:
      "Compare conservative, expected, and aggressive growth models to align executive, finance, and field expectations.",
    icon: LineChart
  },
  {
    label: "04",
    title: "Activate with confidence",
    detail:
      "Export action plans, distributor talking points, and compliance-ready documentation for launch.",
    icon: ArrowRight
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Retention uplift",
    summary: "Identify rank tiers that need engagement programs before churn impacts payout stability.",
    metric: "Up to 28% higher renewal conversion"
  },
  {
    title: "Capital allocation",
    summary: "Balance commissions, leadership pools, and incentives with live profitability indicators.",
    metric: "3.5x faster budget approvals"
  },
  {
    title: "Scenario coverage",
    summary: "Run side-by-side simulations for new markets, product launches, or promo windows.",
    metric: "12+ configurable launch templates"
  }
];

const ADVISORY: Advisory[] = [
  {
    title: "Plan architecture review",
    bullet: "Executive-ready documentation outlining enrolment triggers, carry-over logic, and safety nets."
  },
  {
    title: "Analytics instrumentation",
    bullet: "Dashboards that trend cumulative volume, breakage, and leadership pool utilisation in real time."
  },
  {
    title: "Field enablement playbooks",
    bullet: "Message frameworks, webinars, and onboarding flows tailored to monoline success paths."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Monoline Plan MLM Calculator";
  const description =
    "Model payouts, ranks, and growth scenarios for your monoline compensation strategy with the Cloud MLM Calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/monoline-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MonolineCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function MonolineCalculatorPage({ params }: MonolineCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const consultingHref = buildLocalizedPath("/mlm-consulting", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(45,212,191,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-cyan-100">
              Monoline plan strategy
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Forecast every leg of your monoline organisation with one calculator.
            </h1>
            <p className="max-w-2xl text-base text-slate-100/85">
              Cloud MLM Software turns complex linear-leg compensation models into a guided planning experience. Simulate rank progressions, payouts, and break-even points before you launch or refresh your plan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore an interactive demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-200/60 text-cyan-100 hover:bg-cyan-400/10"
              >
                <Link href={contactHref}>
                  Talk to a compensation architect
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/40 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between text-sm text-slate-200/85">
              <span>Real-time payout signal</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                <Activity className="h-3.5 w-3.5" aria-hidden />
                Live
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-100">Projected leadership bonus</p>
              <p className="text-3xl font-semibold text-white">$128,700</p>
              <p className="text-xs text-slate-200/80">Based on 6% week-over-week growth with 92% auto-ship retention.</p>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/20 bg-slate-950/40 p-4">
              <div className="flex items-center justify-between text-xs text-slate-200/80">
                <span>Rank-ready distributors</span>
                <span className="font-semibold text-white">312</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-200/80">
                <span>Average depth velocity</span>
                <span className="font-semibold text-white">4.8 legs / month</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-200/80">
                <span>Leadership pool coverage</span>
                <span className="font-semibold text-white">89%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for strategic finance, field leaders, and operations teams
          </h2>
          <p className="text-sm text-muted-foreground">
            Everyone sees their version of success with the Monoline Plan MLM Calculator—financial predictability, distributor momentum, and governance assurance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Guided workflow from first assumption to launch day
            </h2>
            <p className="text-sm text-muted-foreground">
              The calculator blends interactive modelling with advisory insights so your team validates every variable before taking it to market.
            </p>
          </div>
          <div className="grid gap-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="relative grid gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition duration-300 hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {step.label}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Insight snapshots
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Instantly translate forecasts into leadership decisions
            </h2>
            <p className="text-sm text-muted-foreground">
              Financial controllers, product owners, and field strategists gain tailored dashboards that expose risk, opportunity, and readiness in a single view.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {INSIGHTS.map((insight) => (
                <article
                  key={insight.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground">{insight.summary}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{insight.metric}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="relative space-y-6 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-sky-50 p-8 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-sky-900/30">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 h-52 w-52 translate-y-1/3 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/30" aria-hidden />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/40 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm dark:bg-slate-950/50">
                <UsersThree className="h-4 w-4" aria-hidden />
                Advisory support included
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Partner with compensation scientists who specialise in monoline momentum.
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {ADVISORY.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Path className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.bullet}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg">
                <Link href={consultingHref}>
                  Book a strategic workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-slate-100 p-10 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to benchmark your monoline economics?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your current plan draft or legacy spreadsheets. We will migrate assumptions into the calculator, deliver insights, and map execution checkpoints.
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-primary/30 dark:bg-slate-950/70">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Implementation timeline</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-primary">
                  <Gauge className="h-3.5 w-3.5" aria-hidden />
                  45 days
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Scenario templates delivered</span>
                <span className="font-semibold text-foreground">6</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Leadership scorecard refresh</span>
                <span className="font-semibold text-foreground">Quarterly</span>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request your personalised assessment
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
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
