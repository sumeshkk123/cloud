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
  Calculator,
  ClipboardCheck,
  Grid,
  Layers3,
  LineChart,
  SlidersHorizontal
} from "lucide-react";
import { RocketLaunch, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Stage = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

type Benefit = {
  title: string;
  detail: string;
  icon: IconType;
};

const FEATURES: Feature[] = [
  {
    title: "Matrix structure visualisation",
    description:
      "Map any matrix configuration—from 2×2 to 5×5—so leaders can see depth, width, and spill-over in a single glance.",
    icon: Grid
  },
  {
    title: "Custom payout logic",
    description:
      "Adjust level caps, bonuses, and time-bound incentives to match your exact compensation policy.",
    icon: SlidersHorizontal
  },
  {
    title: "Scenario forecasting",
    description:
      "Preview growth and commission density by modelling enrolment and retention assumptions across multiple periods.",
    icon: LineChart
  }
];

const STAGES: Stage[] = [
  {
    step: "Define",
    title: "Set matrix dimensions and timelines",
    description:
      "Pick the width × depth formula, commission intervals, and desired payout cadence before running calculations.",
    icon: Layers3
  },
  {
    step: "Input",
    title: "Feed enrolment and order data",
    description:
      "Import historical performance or use guided inputs to simulate future activity for distributors and customers.",
    icon: Calculator
  },
  {
    step: "Analyse",
    title: "Review earnings outputs",
    description:
      "Generate reports showing level-by-level commissions, break-even timelines, and leadership bonuses.",
    icon: BarChart4
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Distributor clarity",
    detail: "Equip field teams with a clear view of how many recruits or orders unlock the next payout milestone.",
    icon: UsersThree
  },
  {
    title: "Executive forecasting",
    detail: "Finance and operations predict cash flow and inventory requirements based on accurate commission simulations.",
    icon: ClipboardCheck
  },
  {
    title: "Launch acceleration",
    detail: "Pre-built templates and reusable scenarios cut weeks from the planning phase for new markets or promotions.",
    icon: RocketLaunch
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Matrix MLM Calculator";
  const description =
    "Model matrix plan payouts, forecast growth, and visualise commissions with Cloud MLM Software’s matrix MLM calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/matrix-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MatrixCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function MatrixCalculatorPage({ params }: MatrixCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/matrix-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-sky-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(14,165,233,0.18),transparent_48%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.2),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Matrix payout intelligence
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Calculate every matrix commission with confidence.
            </h1>
            <p className="text-base text-muted-foreground">
              The Cloud MLM Software calculator transforms complex matrix formulas into intuitive models. From 2×2 to 5×5 structures, simulate earnings, confirm break-even moments, and guide leaders through expansion with facts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Explore the matrix demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={contactHref}>
                  Share your payout rules
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:bg-slate-900/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground">{feature.title}</h2>
                  </div>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Model your matrix in three decisive steps</h2>
          <p className="text-sm text-muted-foreground">
            Fast-track analysis with a guided flow that aligns product, finance, and field strategy teams.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article key={stage.step} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{stage.step}</p>
                    <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why leaders rely on the matrix calculator</h2>
            <p className="text-sm text-muted-foreground">
              Beyond projections, the calculator equips every stakeholder with insights that drive decision-making and field confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-14 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need help configuring your formulas?</h2>
              <p className="text-sm text-muted-foreground">
                Our solution engineers translate legacy spreadsheets into reusable calculator presets. Bring your current payout tables and we’ll set up the sandbox for instant insights.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Book a modelling session</h3>
                <p className="text-sm text-muted-foreground">
                  We’ll walk through your active ranks, incentive boosters, and reporting needs to ensure the calculator mirrors production reality.
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
