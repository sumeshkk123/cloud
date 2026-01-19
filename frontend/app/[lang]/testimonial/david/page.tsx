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
  Box,
  Code,
  Command,
  Database,
  Gauge,
  GitBranch,
  Microscope,
  TestTube,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type EngineeringBenefit = {
  title: string;
  description: string;
  icon: IconType;
};

type EnablementTrack = {
  phase: string;
  highlight: string;
  insight: string;
  icon: IconType;
};

type Metric = {
  label: string;
  value: string;
  explanation: string;
  icon: IconType;
};

const ENGINEERING_BENEFITS: EngineeringBenefit[] = [
  {
    title: "Laravel-native foundation",
    description: "Service container, queues, and event broadcasting give teams predictable patterns to extend.",
    icon: Command
  },
  {
    title: "REST-first delivery",
    description: "Resource controllers and consistent naming keep every integration discoverable.",
    icon: Workflow
  },
  {
    title: "Quality gates automated",
    description: "Static analysis, test pipelines, and code review rituals are built into every deployment.",
    icon: Microscope
  }
];

const ENABLEMENT_TRACKS: EnablementTrack[] = [
  {
    phase: "Architecture lab",
    highlight: "Modernised domain models",
    insight: "Migrated legacy logic into modular bounded contexts, unlocking faster feature delivery.",
    icon: Database
  },
  {
    phase: "Developer velocity",
    highlight: "Componentised APIs",
    insight: "Reusable transformers and policies keep endpoints secure yet easy to compose.",
    icon: Code
  },
  {
    phase: "Operational excellence",
    highlight: "Observability baked in",
    insight: "Tracing, logging, and dashboards help developers validate performance instantly.",
    icon: Gauge
  }
];

const METRICS: Metric[] = [
  {
    label: "API build speed",
    value: "45% faster",
    explanation: "RESTful scaffolding reduced the average ticket duration from 11 to 6 days.",
    icon: GitBranch
  },
  {
    label: "Regression issues",
    value: "-63%",
    explanation: "Automated testing pipeline catches defects before release branches are created.",
    icon: TestTube
  },
  {
    label: "Innovation focus",
    value: "+4 hrs",
    explanation: "Weekly reclaimed hours now redirect to experimentation and CX enhancements.",
    icon: Box
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "David Testimonial | Developer-First MLM Platform";
  const description =
    "See how David’s team unlocked Laravel-native agility with Cloud MLM Software. Review engineering benefits, enablement tracks, and velocity metrics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/david", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type DavidPageProps = {
  params: { lang: SupportedLocale };
};

export default function DavidPage({ params }: DavidPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-50 via-white to-violet-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-violet-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_18%,rgba(99,102,241,0.2),transparent_55%),radial-gradient(circle_at_80%_22%,rgba(129,140,248,0.18),transparent_58%),radial-gradient(circle_at_48%_85%,rgba(14,165,233,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-200">
              Developer enablement story
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              David accelerated Laravel innovation with Cloud MLM Software’s engineering playbook.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “I like that the project is done in Laravel rather than CodeIgniter. It offers better IO and unmatched quality session control. The RESTful controllers empower the in-house developers to manufacture REST APIs without extra time.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Modernise your stack
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Review technical demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Engineering benefits</p>
            <div className="grid gap-4">
              {ENGINEERING_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Enablement tracks</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the Cloud MLM engineering team delivered.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            From architecture labs to observability rollouts, each track empowers David’s developers to ship confidently.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {ENABLEMENT_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{track.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{track.highlight}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{track.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Engineering metrics</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Quantifying the velocity gains.</h2>
            <p className="text-sm text-muted-foreground">
              David’s product and engineering leadership teams review these metrics weekly to keep experimentation on track.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                      <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.explanation}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-indigo-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-indigo-900/30">
          <div className="absolute right-12 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to give your developers the same momentum?</h2>
              <p className="text-sm text-muted-foreground">
                Share your architecture, delivery cadence, and custom requirements. We will craft a Laravel-native roadmap that keeps your team delivering at pace.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Book an architecture session
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Inspect the developer tools
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Prep checklist</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current framework, integrations, and deployment pipeline.</li>
                <li>• Backlog themes your team wants to accelerate.</li>
                <li>• Quality gates or compliance requirements.</li>
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
