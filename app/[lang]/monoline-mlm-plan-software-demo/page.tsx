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
  LineChart,
  ListChecks,
  Route,
  ShieldCheck,
  UserPlus
} from "lucide-react";
import { UsersThree } from "@phosphor-icons/react/dist/ssr";

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

type Cycle = {
  title: string;
  copy: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Single-line clarity",
    description:
      "The monoline plan stacks members vertically, rewarding early contributors. Our demo visualises queue order, contributions, and payouts in real time.",
    icon: Route
  },
  {
    title: "Fair cycle completion",
    description:
      "Track cycles, auto-promote members, and prevent stalls with automated notifications and reinvestment rules.",
    icon: ListChecks
  },
  {
    title: "Risk mitigation",
    description:
      "Apply compliance checks, KYC requirements, and contribution limits to keep the plan within regulatory guardrails.",
    icon: ShieldCheck
  }
];

const MODULES: Module[] = [
  {
    title: "Queue management",
    detail: "Visualise monoline order, contributions, and payouts with configurable cycle lengths and branching rules.",
    icon: UsersThree
  },
  {
    title: "Contribution automation",
    detail: "Collect contributions via multiple payment methods, route funds, and trigger payouts without manual steps.",
    icon: UserPlus
  },
  {
    title: "Performance analytics",
    detail: "Monitor cycle completion rates, revenue velocities, and participation health with drill-down dashboards.",
    icon: LineChart
  },
  {
    title: "Recognition journeys",
    detail: "Celebrate cycle completions, reinvestments, and referral contributions with automated messaging.",
    icon: BarChart4
  }
];

const CYCLES: Cycle[] = [
  {
    title: "Join & contribute",
    copy: "Members join the monoline, submit contributions, and receive queue placement with estimated cycle timelines."
  },
  {
    title: "Cycle in progress",
    copy: "As new contributions arrive, earlier members graduate and reinvest according to plan rules, keeping momentum flowing."
  },
  {
    title: "Payout & reinvest",
    copy: "Payouts execute automatically with options for reinvestment or withdrawal, tracked with compliance-ready receipts."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Monoline MLM Plan Software Demo";
  const description =
    "Witness Cloud MLM Software’s monoline plan demo—queue visualisations, automated cycles, and risk controls in one platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/monoline-mlm-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MonolineDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function MonolineDemoPage({ params }: MonolineDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/monoline-plan-mlm-calculator", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(251,191,36,0.18),transparent_48%),radial-gradient(circle_at_82%_12%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Monoline plan demo
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Keep monoline queues flowing with transparent automation.
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground">
            The monoline plan thrives on pace and clarity. Our demo illustrates queue order, contribution cycles, and payout logic so every member understands their journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule the live demo
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={planHref}>
                Explore monoline plan details
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Demo highlights</h2>
          <p className="text-sm text-muted-foreground">See how Cloud MLM Software supports every monoline component.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <article key={highlight.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Modules in action</h2>
            <p className="text-sm text-muted-foreground">Combine automation, analytics, and recognition to keep momentum alive.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
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
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cycle view in the sandbox</h2>
          <p className="text-sm text-muted-foreground">Walk through the stages every participant experiences.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CYCLES.map((cycle) => (
            <article key={cycle.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{cycle.title}</h3>
              <p className="text-sm text-muted-foreground">{cycle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-amber-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-amber-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-emerald-200/25 blur-3xl dark:bg-emerald-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Request a monoline plan assessment</h2>
              <p className="text-sm text-muted-foreground">
                Share your contribution amounts, cycle lengths, and referral incentives. We’ll prepare a readiness plan with recommended automations and controls.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request now</h3>
                <p className="text-sm text-muted-foreground">Expect follow-up within one business day.</p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request session
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
