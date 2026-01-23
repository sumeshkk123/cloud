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
  Building2,
  Compass,
  GaugeCircle,
  Handshake,
  LayoutDashboard,
  LineChart,
  Rocket,
  UsersRound,
  Wrench
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type PartnershipLayer = {
  title: string;
  detail: string;
  icon: IconType;
};

type LaunchPhase = {
  phase: string;
  headline: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type DashboardSignal = {
  label: string;
  value: string;
  context: string;
  icon: IconType;
};

const PARTNERSHIP_LAYERS: PartnershipLayer[] = [
  {
    title: "Coaching-first kickoff",
    detail: "Victor’s doubts dissolved through transparent roadmaps, demos, and decision guides.",
    icon: Handshake
  },
  {
    title: "Accelerated build teams",
    detail: "Specialists in UX, engineering, and compliance ran parallel tracks to keep things simple for leaders.",
    icon: Wrench
  },
  {
    title: "Insightful dashboards",
    detail: "Everything from daily enrolments to product adoption surfaces in a single, beautiful control plane.",
    icon: LayoutDashboard
  }
];

const LAUNCH_PHASES: LaunchPhase[] = [
  {
    phase: "Phase 01",
    headline: "Confidence calibration",
    description: "Immersive discovery clarified goals, pain points, and the tone of the distributor experience.",
    outcome: "Leadership alignment within the first week, with risks mapped and mitigated early.",
    icon: Compass
  },
  {
    phase: "Phase 02",
    headline: "Build with velocity",
    description: "Iterative releases delivered dashboards, automation, and communication templates fast.",
    outcome: "Victor’s team felt momentum from day one as modules arrived production-ready.",
    icon: Rocket
  },
  {
    phase: "Phase 03",
    headline: "Adoption mastery",
    description: "Guided onboarding, gamified recognition, and analytics keep teams using the platform daily.",
    outcome: "Engagement climbed every week thanks to targeted insights and a polished UI.",
    icon: UsersRound
  }
];

const DASHBOARD_SIGNALS: DashboardSignal[] = [
  {
    label: "Launch-to-dashboard time",
    value: "5 weeks",
    context: "From kickoff to a live executive control panel monitoring key KPIs.",
    icon: GaugeCircle
  },
  {
    label: "Adoption surge",
    value: "+42%",
    context: "Increase in active distributors after revamping dashboards and prompts.",
    icon: LineChart
  },
  {
    label: "Leadership satisfaction",
    value: "4.8/5",
    context: "Executives praise clarity, responsiveness, and readiness communication.",
    icon: Building2
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Victor Tin Testimonial | Confident MLM Launch";
  const description =
    "Explore how Victor Tin moved from doubt to confidence with Cloud MLM Software. Review partnership layers, launch phases, and dashboard signals that prove success.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/victor-tin", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type VictorPageProps = {
  params: { lang: SupportedLocale };
};

export default function VictorPage({ params }: VictorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(165,180,252,0.2),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(56,189,248,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-200">
              Confidence journey
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Victor Tin turned early doubts into a clear, dashboard-driven launch.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “When we started I had doubts about the customer experience. Things turned out great — development was easy, the support team was good, and the software dashboard is amazing and easy to use.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan your confident launch
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Preview live dashboards
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Partnership layers</p>
            <div className="grid gap-4">
              {PARTNERSHIP_LAYERS.map((layer) => {
                const Icon = layer.icon;
                return (
                  <article key={layer.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.detail}</p>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Launch phases</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A phased path that kept teams assured and outcomes visible.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Cloud MLM Software choreographed the launch so Victor’s organisation always knew the next move and could see progress instantly.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {LAUNCH_PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article key={phase.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{phase.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{phase.headline}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
                <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-foreground dark:border-primary/30 dark:bg-primary/10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Outcome</p>
                  <p className="mt-1 text-sm text-foreground">{phase.outcome}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Dashboard signals</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Evidence that the platform keeps leadership inspired.</h2>
            <p className="text-sm text-muted-foreground">
              From adoption to satisfaction, these signals prove the dashboard-driven approach continues delivering value.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {DASHBOARD_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{signal.label}</p>
                      <p className="text-2xl font-semibold text-foreground">{signal.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{signal.context}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-sky-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-sky-900/30">
          <div className="absolute right-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Give your launch team the same confidence.</h2>
              <p className="text-sm text-muted-foreground">
                Share your objectives, data sources, and support needs. We’ll configure dashboards and delivery rituals so your stakeholders see progress from day zero.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Start your alignment session
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Walk through dashboard demos
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Come prepared with</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Key metrics you want leaders and field teams to see daily.</li>
                <li>• Launch timeline and mission-critical dependencies.</li>
                <li>• Support expectations during and after the go-live window.</li>
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
