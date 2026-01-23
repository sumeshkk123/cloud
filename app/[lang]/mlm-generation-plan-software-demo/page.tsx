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
  GitBranch,
  Layers3,
  LineChart,
  Network,
  ShieldCheck,
  Users
} from "lucide-react";
import { FlowArrow, SquaresFour, UsersThree } from "@phosphor-icons/react/dist/ssr";

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

type Step = {
  title: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Horizontal growth visualised",
    description:
      "See how generations expand across wide downlines, rewarding mentors and uplines as networks scale horizontally.",
    icon: GitBranch
  },
  {
    title: "Generational income logic",
    description:
      "Understand how commissions flow when leaders sponsor new generations—left to right, top to bottom—without confusion.",
    icon: FlowArrow
  },
  {
    title: "Risk-free experimentation",
    description:
      "Test break points, qualifiers, and leadership bonuses before launch to ensure every rule performs as intended.",
    icon: ShieldCheck
  }
];

const MODULES: Module[] = [
  {
    title: "Sponsor & generation mapping",
    detail: "Define generation depths, dynamic compression, and leadership overrides that motivate participation.",
    icon: Network
  },
  {
    title: "Plan analytics dashboard",
    detail: "Measure generation income, rank advancements, and payout concentration through real-time charts.",
    icon: LineChart
  },
  {
    title: "Enablement & communication",
    detail: "Automate recognition, training journeys, and alerts so field leaders know exactly how to grow their generations.",
    icon: Users
  }
];

const STEPS: Step[] = [
  {
    title: "Blueprint",
    description:
      "Capture your generation definitions, leadership criteria, and product requirements in a workshop led by consultants.",
    icon: SquaresFour
  },
  {
    title: "Configure",
    description:
      "Load rules into the sandbox, connect integrations, and preview commissions across sample downlines.",
    icon: Layers3
  },
  {
    title: "Validate",
    description:
      "Run live scenarios with your stakeholders, collect feedback, and finalise launch sequencing.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Generation Plan Software Demo";
  const description =
    "Experience the Cloud MLM Software generation plan demo—explore horizontal growth, commission logic, and automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-generation-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GenerationDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function GenerationDemoPage({ params }: GenerationDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/mlm-generation-plan", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-950 via-slate-950 to-indigo-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(16,185,129,0.25),transparent_45%),radial-gradient(circle_at_84%_22%,rgba(56,189,248,0.25),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-1 text-sm font-semibold text-emerald-200">
              Generation-first compensation demo
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              See generation plan automation that keeps sponsors and leaders aligned.
            </h1>
            <p className="text-base text-slate-200/85">
              “The Generation Plan is designed to be a very powerful plan.” Our demo shows how generations expand horizontally, how new members spill under existing leaders, and how income is distributed across each generational tier without manual calculations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Book the live session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200/60 text-emerald-100 hover:bg-emerald-400/10">
                <Link href={planHref}>
                  Review plan fundamentals
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-slate-100">{highlight.title}</h2>
                  </div>
                  <p className="text-xs text-slate-200/80">{highlight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the demo walks through</h2>
          <p className="text-sm text-muted-foreground">
            Explore productised modules that translate generational strategy into daily execution.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we collaborate during the demo cycle</h2>
            <p className="text-sm text-muted-foreground">
              Bring your leadership, finance, and field teams. We’ll ensure every stakeholder sees how the generation plan works for them.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to tailor the generation plan demo?</h2>
              <p className="text-sm text-muted-foreground">
                Share your leadership levels, bonus rules, and product mix. We’ll configure the sandbox so your teams experience an accurate blueprint from day one.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Book a personalised walkthrough</h3>
                <p className="text-sm text-muted-foreground">
                  Expect demo itinerary options, data intake templates, and next-step recommendations tailored to your launch schedule.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Schedule now
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
