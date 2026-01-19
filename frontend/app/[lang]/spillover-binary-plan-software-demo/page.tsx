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
  BadgeCheck,
  BarChart4,
  GitBranch,
  Infinity,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import {
  ChartLineUp,
  CirclesThreePlus,
  Handshake,
  Lightning,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Stage = {
  title: string;
  lead: string;
  copy: string;
  icon: IconType;
};

type Insight = {
  metric: string;
  label: string;
  explanation: string;
  icon: IconType;
};

type Enablement = {
  title: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Overflow without limits",
    description:
      "Empower sponsors to continue enrolling after their first two legs are full while protecting weaker branches from stalling.",
    icon: Infinity
  },
  {
    title: "Effort translates to rewards",
    description:
      "Track how consistent enrolment and coaching accelerates team progress so leadership can focus on high-impact actions.",
    icon: Target
  },
  {
    title: "Weaker leg intelligence",
    description:
      "Surface real-time signals on which leg needs attention and recommend the next best placement to maximise income.",
    icon: GitBranch
  }
];

const STAGES: Stage[] = [
  {
    title: "Stabilise",
    lead: "Calibrate enrolment rules",
    copy: "Define leg caps, activation packs, and spillover priorities so sponsors know exactly how growth is measured.",
    icon: Workflow
  },
  {
    title: "Mobilise",
    lead: "Coach through visibility",
    copy: "Share dashboards that explain where overflow is landing, who needs support, and which incentives unlock momentum.",
    icon: UsersThree
  },
  {
    title: "Optimise",
    lead: "Forecast sustainable payouts",
    copy: "Project commissions, bonuses, and carry-over value so finance teams can model profit and cash flow with confidence.",
    icon: BarChart4
  }
];

const INSIGHTS: Insight[] = [
  {
    metric: "92%",
    label: "Downline utilisation",
    explanation: "Average percentage of overflow placements successfully activated when the demo playbook is followed.",
    icon: BadgeCheck
  },
  {
    metric: "4x",
    label: "Faster leg balancing",
    explanation: "Coaching prompts reduce the time required to stabilise weak legs compared with manual spreadsheets.",
    icon: ChartLineUp
  },
  {
    metric: "48 hrs",
    label: "Actionable feedback loops",
    explanation: "Alerts surface within two days of detecting performance drag so leaders can intervene early.",
    icon: Lightning
  }
];

const ENABLEMENTS: Enablement[] = [
  {
    title: "Advisor collaboration",
    detail: "Provide templated playbooks so corporate strategists and field mentors can fine-tune spillover pacing together.",
    icon: Handshake
  },
  {
    title: "Scenario library",
    detail: "Store hybrid binary configurations, launch packs, and reward ladders to reuse when expanding into new regions.",
    icon: CirclesThreePlus
  },
  {
    title: "Compliance-ready artefacts",
    detail: "Export disclosures, policies, and compensation evidence to keep regulators and stakeholders aligned.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Spillover Binary Plan Software Demo";
  const description =
    "Explore Cloud MLM Software's spillover binary plan demo to see how overflow placement, leg balancing, and leadership coaching stay in sync.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/spillover-binary-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SpilloverDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function SpilloverDemoPage({ params }: SpilloverDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/spillover-binary-plan-mlm-software", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(79,70,229,0.25),transparent_55%),radial-gradient(circle_at_85%_22%,rgba(6,182,212,0.22),transparent_58%),radial-gradient(circle_at_48%_86%,rgba(129,140,248,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Spillover binary demo
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                See overflow placements drive consistent binary growth.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                The spillover binary plan builds on traditional forced binary structures. Our demo shows how unlimited overflow keeps every leg active, protects weaker branches, and converts focused effort into measurable rewards.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book a guided session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={planHref}>
                  Understand the plan mechanics
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article key={highlight.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground">{highlight.title}</h2>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Demo insight highlights</p>
            <div className="space-y-5">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article key={insight.label} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:border-border/40 dark:bg-slate-900/40">
                    <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-2xl font-semibold text-foreground">{insight.metric}</p>
                      <p className="text-sm font-semibold text-muted-foreground">{insight.label}</p>
                      <p className="text-xs text-muted-foreground">{insight.explanation}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Review solution packages
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A guided path from rules to revenue</h2>
          <p className="text-sm text-muted-foreground">
            We help you transform the advanced spillover binary plan from a concept into a launch-ready experience for distributors and customers alike.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article key={stage.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stage.lead}</p>
                    <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{stage.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why enterprises choose Cloud MLM Software for spillover binary launches</h2>
            <p className="text-sm text-muted-foreground">
              By combining strategy, automation, and accountability, we make sure overflow opportunities translate into predictable earnings for every participant.
            </p>
            <ul className="space-y-4">
              {ENABLEMENTS.map((enablement) => {
                const Icon = enablement.icon;
                return (
                  <li key={enablement.title} className="flex gap-4 rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{enablement.title}</h3>
                      <p className="text-sm text-muted-foreground">{enablement.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="space-y-5 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Demo outcomes</p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>• Visualise overflow behaviour with split-leg heat maps and projected matching bonuses.</p>
              <p>• Share coaching scripts that keep momentum high during onboarding and product launches.</p>
              <p>• Equip compliance with transparent history, audit-friendly exports, and role-based guardrails.</p>
            </div>
            <Button asChild>
              <Link href={contactHref}>
                Schedule your strategy workshop
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-indigo-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-indigo-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Launch your spillover binary experience</h2>
              <p className="text-sm text-muted-foreground">
                Share your current binary structure, field enablement goals, and growth targets. We will co-design a roadmap that blends automation, analytics, and advisory support.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Connect with our experts
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={planHref}>
                    Explore detailed plan resources
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Next steps</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Review your current compensation architecture with our consultants.</li>
                <li>• Align leadership on KPIs for overflow momentum and matching bonuses.</li>
                <li>• Activate your demo workspace with guided workshops for key stakeholders.</li>
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
