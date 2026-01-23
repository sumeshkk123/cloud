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
  CalendarClock,
  CheckCircle,
  HeartHandshake,
  MessageSquare,
  NotebookText,
  Radar,
  Sparkles,
  UsersRound,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CommunicationPillar = {
  title: string;
  detail: string;
  icon: IconType;
};

type EfficiencyPlay = {
  phase: string;
  highlight: string;
  description: string;
  icon: IconType;
};

type SuccessIndicator = {
  label: string;
  value: string;
  context: string;
  icon: IconType;
};

const COMMUNICATION_PILLARS: CommunicationPillar[] = [
  {
    title: "Executive clarity",
    detail: "Laura receives concise summaries, action logs, and risk signals after every touchpoint.",
    icon: NotebookText
  },
  {
    title: "Field empathy",
    detail: "Regional leads co-create messaging and enablement assets so communication feels authentic.",
    icon: HeartHandshake
  },
  {
    title: "Feedback immersion",
    detail: "Always-on survey loops and listening sessions inform each product iteration.",
    icon: MessageSquare
  }
];

const EFFICIENCY_PLAYS: EfficiencyPlay[] = [
  {
    phase: "Launch readiness",
    highlight: "Precision playbooks",
    description: "Detailed checklists align marketing, tech, and compliance to deliver flawless releases.",
    icon: Workflow
  },
  {
    phase: "Hypercare",
    highlight: "Signal monitoring",
    description: "Real-time dashboards track adoption, sentiment, and anomalies across teams.",
    icon: Radar
  },
  {
    phase: "Ongoing cadence",
    highlight: "Pulse reviews",
    description: "Monthly retrospectives capture learnings and update SOPs to keep momentum high.",
    icon: CalendarClock
  }
];

const SUCCESS_INDICATORS: SuccessIndicator[] = [
  {
    label: "Stakeholder confidence",
    value: "4.9/5",
    context: "Executives rated communications as clear, timely, and actionable.",
    icon: BadgeCheck
  },
  {
    label: "Delivery accuracy",
    value: "100%",
    context: "Every milestone met with zero critical defects during migration.",
    icon: CheckCircle
  },
  {
    label: "Team alignment",
    value: "98%",
    context: "Cross-functional teams reported feeling “very aligned” on priorities each sprint.",
    icon: UsersRound
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Laura Fernandez Testimonial | Communication-Centred Delivery";
  const description =
    "Discover how Laura Fernandez experienced flawless delivery with Cloud MLM Software. Explore communication pillars, efficiency plays, and success indicators.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/laura-fernandez", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type LauraPageProps = {
  params: { lang: SupportedLocale };
};

export default function LauraPage({ params }: LauraPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-rose-50 via-white to-slate-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-rose-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(251,113,133,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(244,114,182,0.2),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(129,140,248,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200">
              Communication excellence
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Laura Fernandez experiences friendly, flawless delivery with Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “Neat communication, super friendly too. The software works flawlessly. We now have a highly efficient, custom-made solution for our business.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan your next rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore delivery rituals
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Communication pillars</p>
            <div className="grid gap-4">
              {COMMUNICATION_PILLARS.map((pillar) => {
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Efficiency plays</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How the team kept every milestone clean and predictable.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Cloud MLM Software blends structure with warmth, ensuring complex rollouts feel effortless for Laura’s organisation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {EFFICIENCY_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article key={play.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{play.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{play.highlight}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Success indicators</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Signals that prove communication drives confidence.</h2>
            <p className="text-sm text-muted-foreground">
              The leadership team tracks these indicators to ensure every project retains the same friendliness and precision Laura values.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SUCCESS_INDICATORS.map((indicator) => {
              const Icon = indicator.icon;
              return (
                <article key={indicator.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{indicator.label}</p>
                      <p className="text-2xl font-semibold text-foreground">{indicator.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{indicator.context}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-rose-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-rose-900/30">
          <div className="absolute right-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let’s craft your communication-first rollout.</h2>
              <p className="text-sm text-muted-foreground">
                Share your timelines, stakeholder map, and customer promises. Cloud MLM Software will ensure your launch feels personal, friendly, and perfectly executed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Schedule a communication audit
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Review launch playbooks
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Bring to the session</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current communication cadence and meeting rhythms.</li>
                <li>• Launch goals, dependencies, and must-have milestones.</li>
                <li>• Feedback from teams about what support feels like today.</li>
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
