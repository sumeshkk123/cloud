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
  BarChart4,
  CalendarRange,
  Headphones,
  LayoutDashboard,
  Lightbulb,
  Map,
  MonitorSmartphone,
  Sparkles,
  ThumbsUp,
  Users2
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ServiceElement = {
  title: string;
  detail: string;
  icon: IconType;
};

type Milestone = {
  phase: string;
  highlight: string;
  description: string;
  icon: IconType;
};

type SuccessSignal = {
  label: string;
  value: string;
  context: string;
  icon: IconType;
};

const SERVICE_ELEMENTS: ServiceElement[] = [
  {
    title: "Always-on leadership support",
    detail: "Giovanni’s directors receive proactive insights, escalation paths, and executive-ready summaries.",
    icon: Headphones
  },
  {
    title: "Experience-first workflows",
    detail: "Simplicity in UX and precision in reporting keep coaching conversations focused.",
    icon: MonitorSmartphone
  },
  {
    title: "Integrated consulting",
    detail: "AI copilots plus industry strategists plan promotions and commission experiments together.",
    icon: Lightbulb
  }
];

const MILESTONES: Milestone[] = [
  {
    phase: "Blueprint",
    highlight: "Defined mixed-market playbooks",
    description: "Mapped LATAM, EU, and APAC team behaviours to tailor training, analytics, and compliance sequencing.",
    icon: Map
  },
  {
    phase: "Acceleration",
    highlight: "Orchestrated launch campaigns",
    description: "Designed guided funnels, recognition moments, and dashboards that highlight momentum daily.",
    icon: LayoutDashboard
  },
  {
    phase: "Optimization",
    highlight: "Continuous feedback loops",
    description: "Weekly reviews combine qualitative field stories with quantitative performance metrics.",
    icon: BarChart4
  }
];

const SUCCESS_SIGNALS: SuccessSignal[] = [
  {
    label: "Distributor satisfaction",
    value: "4.8/5",
    context: "Ratings collected after each product sprint and training wave.",
    icon: ThumbsUp
  },
  {
    label: "Time to launch",
    value: "12 weeks",
    context: "From alignment to system hand-off with full enablement resources.",
    icon: CalendarRange
  },
  {
    label: "Campaign velocity",
    value: "3x",
    context: "More promotions tested per quarter with consistent guardrails in place.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Giovanni P. Testimonial | Cloud MLM Software Support & Design";
  const description =
    "See how Giovanni P. benefits from Cloud MLM Software’s responsive support, strategic consulting, and polished UX. Explore milestones and success signals.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/giovanni-p", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GiovanniPageProps = {
  params: { lang: SupportedLocale };
};

export default function GiovanniPage({ params }: GiovanniPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-teal-50 via-white to-purple-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-purple-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(45,212,191,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(167,139,250,0.2),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(14,165,233,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:border-teal-400/30 dark:bg-teal-500/10 dark:text-teal-200">
              Human + AI partnership
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Giovanni P. delivers premium experiences with Cloud MLM Software’s hybrid support model.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “Support is always available in every occasion. The software allows us to plan excellent work. Highly recommended — its simplicity of use, excellent graphics, and services make execution effortless.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Activate your support fabric
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore interface demos
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Service elements</p>
            <div className="grid gap-4">
              {SERVICE_ELEMENTS.map((element) => {
                const Icon = element.icon;
                return (
                  <article key={element.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{element.title}</h3>
                      <p className="text-sm text-muted-foreground">{element.detail}</p>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Engagement milestones</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A global launch path that keeps every region aligned.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Cloud MLM Software choreographed each milestone so Giovanni’s leadership team could maintain momentum while scaling responsibly.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {MILESTONES.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <article key={milestone.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{milestone.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{milestone.highlight}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Success signals</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Evidence that support plus design drives measurable gains.</h2>
            <p className="text-sm text-muted-foreground">
              These metrics demonstrate how Giovanni’s organisation benefits from a responsive partnership rooted in data and empathy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SUCCESS_SIGNALS.map((signal) => {
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-teal-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-teal-900/30">
          <div className="absolute right-12 top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Design the partnership your field teams deserve.</h2>
              <p className="text-sm text-muted-foreground">
                Share your market mix, service expectations, and differentiating experiences. We’ll orchestrate the playbook that keeps your teams winning.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Plan a partnership workshop
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Walk through the UX suite
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Workshop prep</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current support metrics and escalation pathways.</li>
                <li>• Desired UX enhancements or new product journeys.</li>
                <li>• Stakeholders who shape market strategy and enablement.</li>
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
