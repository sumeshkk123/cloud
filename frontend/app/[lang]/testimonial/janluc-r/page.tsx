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
  Award,
  Compass,
  Gauge,
  LayoutTemplate,
  Lightbulb,
  MousePointer,
  Rocket,
  Sparkles,
  Users,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ExperiencePillar = {
  title: string;
  detail: string;
  icon: IconType;
};

type DeliverySprint = {
  stage: string;
  headline: string;
  description: string;
  benefit: string;
  icon: IconType;
};

type Signal = {
  label: string;
  value: string;
  context: string;
  icon: IconType;
};

const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    title: "Ergonomic navigation",
    detail: "Adaptive menus and smart defaults guide both new and seasoned distributors through daily tasks.",
    icon: MousePointer
  },
  {
    title: "Role-aware design",
    detail: "Janluc’s team receives tailored dashboards and permissions aligned with leader responsibilities.",
    icon: LayoutTemplate
  },
  {
    title: "AI-augmented coaching",
    detail: "Intelligence surfaces best-next actions, freeing mentors to focus on people, not spreadsheets.",
    icon: Lightbulb
  }
];

const DELIVERY_SPRINTS: DeliverySprint[] = [
  {
    stage: "Sprint 01",
    headline: "Experience audit & prototype",
    description: "Field interviews mapped friction points and informed prototypes validated in community councils.",
    benefit: "Earned immediate buy-in and clarity on what bold success looks like.",
    icon: Compass
  },
  {
    stage: "Sprint 02",
    headline: "Guided implementation",
    description: "Modular rollout introduced navigation, reporting, and training updates in manageable waves.",
    benefit: "Change management stayed ahead of adoption with weekly enablement moments.",
    icon: Workflow
  },
  {
    stage: "Sprint 03",
    headline: "Momentum optimisation",
    description: "Analytics and qualitative feedback steer experiments that boost engagement each month.",
    benefit: "Keeps ROI conversations anchored in live data instead of assumptions.",
    icon: Gauge
  }
];

const SIGNALS: Signal[] = [
  {
    label: "Distributor adoption",
    value: "96%",
    context: "Active usage within the first 30 days of each new release.",
    icon: Users
  },
  {
    label: "Idea realisation",
    value: "-60% time",
    context: "Concepts move from ideation to production in less than half the previous timeline.",
    icon: Rocket
  },
  {
    label: "Experience rating",
    value: "4.9/5",
    context: "Field and admin surveys praising accessibility, clarity, and coaching prompts.",
    icon: Award
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Janluc R. Testimonial | Experience-First MLM Platform";
  const description =
    "See how Janluc R. partnered with Cloud MLM Software to deliver ergonomic experiences and rapid innovation. Explore design pillars, delivery sprints, and adoption metrics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/janluc-r", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type JanlucPageProps = {
  params: { lang: SupportedLocale };
};

export default function JanlucPage({ params }: JanlucPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-lime-50 via-white to-emerald-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(163,230,53,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(45,212,191,0.2),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(74,222,128,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200">
              Experience-led transformation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Janluc R. credits Cloud MLM Software with ergonomic design and a world-class tech team.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “Ease of use for members and admin. Good MLM features and ergonomic functions for navigation. After six months of daily development I can ensure that the tech team is one of the best in its field.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Elevate your experience
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Tour the experience studio
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Experience pillars</p>
            <div className="grid gap-4">
              {EXPERIENCE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground">{pillar.detail}</p>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Delivery sprints</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A rhythm that keeps teams focused on outcomes.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Cloud MLM Software delivered a three-sprint cadence so Janluc’s organisation could iterate while protecting quality.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {DELIVERY_SPRINTS.map((sprint) => {
            const Icon = sprint.icon;
            return (
              <article key={sprint.stage} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{sprint.stage}</p>
                    <h3 className="text-lg font-semibold text-foreground">{sprint.headline}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{sprint.description}</p>
                <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-foreground dark:border-primary/30 dark:bg-primary/10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Benefit</p>
                  <p className="mt-1 text-sm text-foreground">{sprint.benefit}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Signals</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">The metrics that prove ergonomics drives results.</h2>
            <p className="text-sm text-muted-foreground">
              Janluc’s leadership team tracks these metrics weekly to ensure the platform keeps empowering people and performance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SIGNALS.map((signal) => {
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-lime-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-lime-900/30">
          <div className="absolute right-10 top-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let’s make your platform feel effortless too.</h2>
              <p className="text-sm text-muted-foreground">
                Share your customer journeys, pain points, and growth ambitions. We will co-create experiences that feel intuitive and powerful from day one.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Schedule an experience audit
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Explore design patterns
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Discovery prep</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Screens or flows where customers or staff feel friction.</li>
                <li>• KPIs tied to engagement and productivity.</li>
                <li>• Personas or segments you want to champion.</li>
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
