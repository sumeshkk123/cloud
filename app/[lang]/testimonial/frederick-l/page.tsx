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
  Brush,
  Circle,
  Layers3,
  Lightbulb,
  PenTool,
  Settings,
  Sparkles,
  Target,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CustomModule = {
  title: string;
  detail: string;
  icon: IconType;
};

type CollaborationMoment = {
  step: string;
  highlight: string;
  description: string;
  icon: IconType;
};

type Outcome = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

const CUSTOM_MODULES: CustomModule[] = [
  {
    title: "Experience orchestration",
    detail: "Dynamic rank journeys and micro-interactions tailored for Frederick’s field culture.",
    icon: Sparkles
  },
  {
    title: "Design system alignment",
    detail: "Shared tokens, motion guidelines, and accessibility rules keep every release cohesive.",
    icon: Brush
  },
  {
    title: "Insight storytelling",
    detail: "Leadership dashboards narrate growth trajectories and highlight exactly where to invest next.",
    icon: Lightbulb
  }
];

const COLLABORATION_MOMENTS: CollaborationMoment[] = [
  {
    step: "Co-lab sprints",
    highlight: "Idea boards to working prototypes",
    description: "Multi-disciplinary squads translate Frederick’s concepts into validated design explorations within days.",
    icon: PenTool
  },
  {
    step: "Config mastery",
    highlight: "Reusable customization recipes",
    description: "Tailored module blueprints let the internal team duplicate successful experiences fast.",
    icon: Settings
  },
  {
    step: "Launch theatre",
    highlight: "Story-driven go lives",
    description: "Field communications, recognition moments, and training sequences launch in sync.",
    icon: Users
  }
];

const OUTCOMES: Outcome[] = [
  {
    label: "Concept-to-live time",
    value: "-58%",
    description: "Ideas materialise into production-ready experiences in weeks instead of quarters.",
    icon: Layers3
  },
  {
    label: "Field adoption",
    value: "97%",
    description: "Distributors actively engage with new modules thanks to narrative-first onboarding.",
    icon: Target
  },
  {
    label: "Creative satisfaction",
    value: "4.9/5",
    description: "Internal teams rate co-creation workshops as energising and strategically aligned.",
    icon: Circle
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Frederick L. Testimonial | Bespoke MLM Experience Design";
  const description =
    "Explore how Frederick L. co-created bespoke MLM experiences with Cloud MLM Software. Review custom modules, collaboration highlights, and measurable outcomes.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/frederick-l", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FrederickPageProps = {
  params: { lang: SupportedLocale };
};

export default function FrederickPage({ params }: FrederickPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-rose-50 via-white to-fuchsia-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-fuchsia-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(244,114,182,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(251,113,133,0.2),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(168,85,247,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200">
              Bespoke experience spotlight
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Frederick L. transforms ideas into polished MLM experiences with Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “I have no doubt on this quality customization works. We create the ideas and get the things done with coding.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Craft your custom stack
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  See modular demos
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Custom build highlights</p>
            <div className="grid gap-4">
              {CUSTOM_MODULES.map((module) => {
                const Icon = module.icon;
                return (
                  <article key={module.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.detail}</p>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Collaboration journey</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where imagination meets disciplined delivery.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Cloud MLM Software pairs design strategy with engineering excellence so every idea gains momentum quickly and safely.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {COLLABORATION_MOMENTS.map((moment) => {
            const Icon = moment.icon;
            return (
              <article key={moment.step} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{moment.step}</p>
                    <h3 className="text-lg font-semibold text-foreground">{moment.highlight}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{moment.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Outcomes</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Measuring the creative partnership.</h2>
            <p className="text-sm text-muted-foreground">
              Frederick’s leadership team tracks these signals to ensure every custom module delivers momentum for distributors and staff alike.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {OUTCOMES.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <article key={outcome.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{outcome.label}</p>
                      <p className="text-2xl font-semibold text-foreground">{outcome.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-rose-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-rose-900/30">
          <div className="absolute left-10 top-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bring your ideas — we’ll move them into production.</h2>
              <p className="text-sm text-muted-foreground">
                Share your vision, customer personas, and desired emotional journey. Cloud MLM Software will craft custom modules that feel uniquely yours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Start a co-creation sprint
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Explore creative toolkits
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Workshop essentials</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Examples of experiences you admire in or outside MLM.</li>
                <li>• Brand voice, visual identity, and localisation needs.</li>
                <li>• KPIs for distributor delight and operational efficiency.</li>
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
