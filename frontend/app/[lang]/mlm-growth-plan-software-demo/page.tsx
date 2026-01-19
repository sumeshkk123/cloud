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
  ArrowRight,
  ArrowUpRight,
  BarChart4,
  DollarSign,
  GaugeCircle,
  Layers,
  LineChart,
  ShieldCheck,
  Users
} from "lucide-react";
import { ChartPie, Coins, RocketLaunch } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Profit-linked commissions",
    description:
      "Growth plans reward members from monthly business profit—our demo shows how earnings trigger even without new enrolments",
    icon: DollarSign
  },
  {
    title: "Scalable forecasting",
    description:
      "Project payouts against revenue growth, product launches, and seasonality so finance teams can plan ahead.",
    icon: BarChart4
  },
  {
    title: "Fair distribution",
    description:
      "Automate qualification checks so contributors share rewards proportionally while compliance stays intact.",
    icon: ShieldCheck
  }
];

const MODULES: Module[] = [
  {
    title: "Growth analytics dashboard",
    detail: "Track revenue velocity, retention, and commission ratios from a single command centre.",
    icon: LineChart
  },
  {
    title: "Reward pool configuration",
    detail: "Define profit thresholds, leader bonuses, and reserve percentages to keep the plan sustainable.",
    icon: Layers
  },
  {
    title: "Participant insights",
    detail: "Show distributors how their loyalty contributes to pooled success—complete with rank and payout forecasts.",
    icon: Users
  },
  {
    title: "Financial governance",
    detail: "Connect accounting tools and apply audit trails so payouts stand up to executive and regulator scrutiny.",
    icon: ChartPie
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Growth Plan Software Demo";
  const description =
    "Inspect Cloud MLM Software’s growth plan demo—profit-based rewards, analytics, and governance tailored to your business.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-growth-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GrowthPlanDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function GrowthPlanDemoPage({ params }: GrowthPlanDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/mlm-growth-plan", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.25),transparent_48%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.25),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-1 text-sm font-semibold text-emerald-100">
              Profit-sharing plan demo
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Translate company growth into predictable rewards for every member.
            </h1>
            <p className="text-base text-slate-200/85">
              “As the name suggests, the growth plan depends on the growth of the MLM company.” Our demo reveals how Cloud MLM Software captures profits, allocates pools, and pays members—even when they’re focused on customer retention rather than recruitment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Book the walkthrough
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200/60 text-emerald-100 hover:bg-emerald-400/10">
                <Link href={planHref}>
                  Review plan details
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-slate-100">{highlight.title}</h2>
                  </div>
                  <p className="text-xs text-slate-200/80">{highlight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the growth plan sandbox showcases</h2>
          <p className="text-sm text-muted-foreground">
            Align leadership, finance, and field teams with modules built specifically for profit-based rewards.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article key={module.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground">{module.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How leaders apply the growth plan demo</h2>
            <p className="text-sm text-muted-foreground">
              Use the session to confirm strategy, financial sustainability, and launch readiness.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GaugeCircle className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">Calibrate profit pools</h3>
              <p className="text-sm text-muted-foreground">
                Adjust pool percentages and qualification criteria to balance generosity with cash-flow requirements.
              </p>
            </article>
            <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Coins className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">Scenario planning</h3>
              <p className="text-sm text-muted-foreground">
                Simulate best, base, and conservative revenue scenarios to understand payout envelopes.
              </p>
            </article>
            <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <RocketLaunch className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">Launch readiness</h3>
              <p className="text-sm text-muted-foreground">
                Finalise communication plans, training assets, and automation triggers so the rollout lands smoothly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-16 -top-14 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Schedule your growth plan demo</h2>
              <p className="text-sm text-muted-foreground">
                Provide revenue milestones, compensation goals, and launch timelines. We’ll tune the sandbox to mirror your business reality.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Secure your slot</h3>
                <p className="text-sm text-muted-foreground">
                  Expect a response within one business day with agenda options and data intake guidance.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request the session
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
