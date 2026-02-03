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
  Briefcase,
  Building,
  DollarSign,
  Globe,
  LineChart,
  PieChart,
  ShieldCheck,
  Sparkle,
  Trophy,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ValueDriver = {
  title: string;
  detail: string;
  icon: IconType;
};

type JourneyStep = {
  phase: string;
  headline: string;
  description: string;
  proof: string;
  icon: IconType;
};

type MetricCard = {
  label: string;
  value: string;
  explanation: string;
  icon: IconType;
};

const VALUE_DRIVERS: ValueDriver[] = [
  {
    title: "Decision-grade data",
    detail: "Every stakeholder gains dashboards that reveal growth, retention, and profitability in real time.",
    icon: PieChart
  },
  {
    title: "Operational clarity",
    detail: "Automation removes manual churn so Joseph’s team can focus on strategy, not busywork.",
    icon: Briefcase
  },
  {
    title: "Global-ready scalability",
    detail: "Localization, compliance, and multi-currency keep expansion smooth across markets.",
    icon: Globe
  }
];

const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "Alignment",
    headline: "Executive vision workshop",
    description: "Clarified revenue goals, support expectations, and the experience distributors crave.",
    proof: "Shared blueprint signed by all departments within the first week.",
    icon: Building
  },
  {
    phase: "Implementation",
    headline: "Composable platform rollout",
    description: "Introduced modular features, training assets, and automation in a phased cadence.",
    proof: "Change requests dropped by 47% as teams adopted guided workflows.",
    icon: Sparkle
  },
  {
    phase: "Growth",
    headline: "Continuous optimisation labs",
    description: "Quarterly labs evaluate new markets, incentives, and AI copilots to fuel expansion.",
    proof: "Prioritisation now guided by measurable impact and fast experimentation.",
    icon: LineChart
  }
];

const METRIC_CARDS: MetricCard[] = [
  {
    label: "ROI realisation",
    value: "3.4x",
    explanation: "Productivity savings plus revenue growth within the first 12 months.",
    icon: DollarSign
  },
  {
    label: "Team satisfaction",
    value: "98%",
    explanation: "Leaders rate the platform as mission-critical for achieving quarterly goals.",
    icon: Trophy
  },
  {
    label: "Compliance assurance",
    value: "100%",
    explanation: "Audit-ready exports and role-based approvals keep governance effortless.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Joseph Y. Testimonial | Strategic MLM Business Growth";
  const description =
    "Learn why Joseph Y. calls Cloud MLM Software the best business decision. Explore value drivers, journey steps, and metrics showcasing user-friendly growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/joseph-y", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type JosephPageProps = {
  params: { lang: SupportedLocale };
};

export default function JosephPage({ params }: JosephPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-50 via-white to-amber-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-amber-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(59,130,246,0.18),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(196,181,253,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200">
              Business growth spotlight
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Joseph Y. unlocks decisive growth with Cloud MLM Software’s enterprise platform.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “Best business decision we have ever made. Amazing team of professionals. This software is user friendly and most importantly gets the job done. We are very pleased and happy with the results.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build your growth plan
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref}>
                  Review investment options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Value drivers</p>
            <div className="grid gap-4">
              {VALUE_DRIVERS.map((driver) => {
                const Icon = driver.icon;
                return (
                  <article key={driver.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{driver.title}</h3>
                      <p className="text-sm text-muted-foreground">{driver.detail}</p>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Journey highlights</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">The roadmap that kept stakeholders aligned and projects on time.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Cloud MLM Software’s hybrid team turned vision into action with a rhythm that balanced governance and innovation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {JOURNEY_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{step.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{step.headline}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-foreground dark:border-primary/30 dark:bg-primary/10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Proof</p>
                  <p className="mt-1 text-sm text-foreground">{step.proof}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Metrics</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Numbers that reinforced Joseph’s best business decision.</h2>
            <p className="text-sm text-muted-foreground">
              Leadership, finance, and field teams rely on these metrics to confirm the platform continues to deliver strategic impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {METRIC_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{card.label}</p>
                      <p className="text-2xl font-semibold text-foreground">{card.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{card.explanation}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-slate-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-slate-900/30">
          <div className="absolute left-10 top-12 h-32 w-32 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Your next strategic win starts here.</h2>
              <p className="text-sm text-muted-foreground">
                Share your revenue targets, operational constraints, and field ambitions. Cloud MLM Software will craft a plan that transforms your growth potential.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Start the conversation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={pricingHref}>
                    Align budget & roadmap
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Preparation guide</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Revenue and retention goals for the next four quarters.</li>
                <li>• Operational bottlenecks that slow growth today.</li>
                <li>• Markets or audiences you’re ready to launch next.</li>
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
