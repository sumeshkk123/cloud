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
  ClipboardCheck,
  Layers,
  LineChart,
  Sparkles,
  Footprints,
  Trophy
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

type Stage = {
  title: string;
  copy: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Rank-based rewards",
    description:
      "The stair-step plan rewards rank advancement. Our demo shows how rank resets, breakaways, and overrides are automated.",
    icon: Trophy
  },
  {
    title: "Visibility for leaders",
    description:
      "Track team performance, personal volume, and rank requirements with dashboards that update in real time.",
    icon: LineChart
  },
  {
    title: "Predictable payouts",
    description:
      "Ensure each stair-step is funded accurately with commission simulations and automated compliance checks.",
    icon: ClipboardCheck
  }
];

const MODULES: Module[] = [
  {
    title: "Rank qualification engine",
    detail: "Configure dynamic rank rules, personal group volume, and maintenance requirements with scenario testing.",
    icon: Layers
  },
  {
    title: "Breakaway management",
    detail: "Automate member transitions when leaders graduate to new steps, including override adjustments.",
    icon: Footprints
  },
  {
    title: "Leadership analytics",
    detail: "Surface heat maps, team scorecards, and coaching alerts so upline leaders keep momentum high.",
    icon: BarChart4
  },
  {
    title: "Recognition & training",
    detail: "Deliver personalised playbooks, badges, and celebrations when distributors climb each step.",
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    title: "Model",
    copy: "Define stair-step tiers, breakaway rules, and bonuses with our consultants inside the configuration studio."
  },
  {
    title: "Simulate",
    copy: "Load historical data or projections to validate earnings, profitability, and leadership transitions."
  },
  {
    title: "Enable",
    copy: "Launch dashboards, recognition journeys, and communications that keep every distributor focused on the next step."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Stair Step Plan Software Demo";
  const description =
    "Experience Cloud MLM Software’s stair-step plan demo—automate rank qualifications, breakaways, and leadership analytics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-stair-step-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StairStepDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function StairStepDemoPage({ params }: StairStepDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/stair-step-plan-mlm-software", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(129,140,248,0.18),transparent_48%),radial-gradient(circle_at_84%_12%,rgba(192,132,252,0.18),transparent_55%)]" />
        <div className="container space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Stair-step plan demo
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            See stair-step automations that keep ranks and rewards in sync.
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground">
            The stair-step plan rewards growth through rank progression. Our demo highlights how Cloud MLM Software calculates breakaways, maintains overrides, and arms leaders with the insights they need to climb together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a guided session
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={planHref}>
                Understand the plan fundamentals
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the demo delivers</h2>
          <p className="text-sm text-muted-foreground">Unpack the stair-step plan through automation, analytics, and recognition.</p>
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
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we guide your stair-step launch</h2>
            <p className="text-sm text-muted-foreground">Move from concept to execution with a structured partner.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {STAGES.map((stage) => (
              <article key={stage.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                <p className="text-sm text-muted-foreground">{stage.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-violet-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-violet-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-indigo-200/25 blur-3xl dark:bg-indigo-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Request a stair-step assessment</h2>
              <p className="text-sm text-muted-foreground">
                Share your current rank structure, breakaway policies, and desired incentives. We’ll prepare a readiness report with recommended automation and analytics.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Schedule now</h3>
                <p className="text-sm text-muted-foreground">Expect follow-up within one business day with agenda options.</p>
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
