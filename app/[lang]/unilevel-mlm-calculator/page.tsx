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
  Compass,
  LineChart,
  Network,
  Radio,
  Radar
} from "lucide-react";
import {
  CirclesThreePlus,
  Gauge,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  figure: string;
  label: string;
  detail: string;
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Play = {
  title: string;
  summary: string;
};

const METRICS: Metric[] = [
  {
    figure: "Instant",
    label: "Projections",
    detail: "Toggle commission scenarios per level and currency in real time.",
    icon: Radar
  },
  {
    figure: "8 levels",
    label: "deep coverage",
    detail: "Model sponsor bonuses, generational pools, and leadership rewards in one canvas.",
    icon: CirclesThreePlus
  },
  {
    figure: "360°",
    label: "team visibility",
    detail: "Blend customer orders, distributor enrolments, and retention metrics for holistic insight.",
    icon: Gauge
  }
];

const FEATURES: Feature[] = [
  {
    title: "Accurate commission projection",
    description: "Forecast earnings per level with configurable caps, compression, and differential payouts.",
    icon: BarChart3
  },
  {
    title: "Real-time adjustments",
    description: "Simulate promotions, seasonal campaigns, and personalised bonuses as your strategy evolves.",
    icon: LineChart
  },
  {
    title: "Balance tracking",
    description: "Spot consumer versus distributor ratios, monitor active legs, and maintain healthy growth.",
    icon: Network
  },
  {
    title: "Goal planning",
    description: "Set enrolment or volume targets, then share progress dashboards with leaders and coaches.",
    icon: Compass
  }
];

const PLAYS: Play[] = [
  {
    title: "Model",
    summary: "Configure level rules, qualifying volume, and incentives that match your brand promise."
  },
  {
    title: "Coach",
    summary: "Distribute dashboards and mobile prompts so field leaders act on insights instantly."
  },
  {
    title: "Optimise",
    summary: "Compare scenarios, track liquidity, and align finance with recurring revenue growth."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Unilevel MLM Calculator";
  const description =
    "Simulate unilevel earnings, goal plans, and balance tracking with Cloud MLM Software’s calculator to empower every distributor.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/unilevel-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type UnilevelCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function UnilevelCalculatorPage({ params }: UnilevelCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const planHref = buildLocalizedPath("/mlm-plan/unilevel-mlm-plan", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(16,185,129,0.22),transparent_58%),radial-gradient(circle_at_48%_86%,rgba(14,165,233,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Unilevel calculator demo
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Navigate unilevel payouts with clarity and agility.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                The unilevel compensation model is flexible, yet complex. Our calculator brings accuracy, real-time adjustments, and goal alignment so distributors and executives make confident decisions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a guided session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={planHref}>
                  Review unilevel fundamentals
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-2xl font-semibold text-foreground">{metric.figure}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Key capabilities</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h2 className="text-sm font-semibold text-foreground">{feature.title}</h2>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={demoHref}>
                Launch the interactive demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Three plays to unlock growth with unilevel automation</h2>
          <p className="text-sm text-muted-foreground">
            This calculator is more than a spreadsheet replacement. It underpins the strategy, enablement, and optimisation loop your field expects.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PLAYS.map((play, index) => (
            <article key={play.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
              <p className="text-sm text-muted-foreground">{play.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why modern unilevel programmes choose Cloud MLM Software</h2>
            <p className="text-sm text-muted-foreground">
              We translate your compensation design into a secure, data-rich experience that balances distributor ambition with corporate control.
            </p>
            <ul className="space-y-4">
              <li className="rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">AI-assisted modelling</h3>
                <p className="mt-2 text-sm text-muted-foreground">Predict trajectory per level with intelligent recommendations on leadership pools and customer incentives.</p>
              </li>
              <li className="rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">Mobile-first adoption</h3>
                <p className="mt-2 text-sm text-muted-foreground">Distributors receive goal nudges, reorder prompts, and recognition badges on the go.</p>
              </li>
              <li className="rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">Compliance built-in</h3>
                <p className="mt-2 text-sm text-muted-foreground">Capture audit trails, export regulator-ready summaries, and keep sensitive data protected.</p>
              </li>
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Operational highlights</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[{
                title: "1.5x", detail: "Average increase in monthly distributor retention after activating guided goals.", icon: UsersThree },
                { title: "<4 hrs", detail: "Time required to roll out new level incentives with approval workflows.", icon: Radio }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-border/60 bg-background p-5 text-center shadow-sm">
                    <Icon className="mx-auto h-6 w-6 text-primary" aria-hidden />
                    <p className="mt-2 text-2xl font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Pair the calculator with our advisory services to align compensation science, technology, and adoption.
            </p>
            <Button asChild>
              <Link href={contactHref}>
                Plan your rollout
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-cyan-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-cyan-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Share your unilevel ambitions</h2>
              <p className="text-sm text-muted-foreground">
                Tell us about your compensation plan, core products, and expansion roadmap. We’ll configure a proof of concept and outline implementation phases.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Talk to our experts
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={demoHref}>
                    Access the calculator demo
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">What we cover in discovery</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current compensation structure and desired evolution.</li>
                <li>• Field enablement gaps and data sources available.</li>
                <li>• Security, integrations, and regulatory considerations.</li>
              </ul>
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
