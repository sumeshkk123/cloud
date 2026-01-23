import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, BarChart3, CalendarClock, Droplets, Leaf, ShieldCheck, Sparkles, Users, Utensils } from "lucide-react";
import { ChartLineUp, GlobeHemisphereWest, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Program = {
  title: string;
  detail: string;
};

type CloudPlay = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$173.5M",
    detail: "Nutrition-first legacy recognised within DSN’s Global 100.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1993",
    detail: "Born in Flower Mound, Texas, with a mission to democratise glyconutrient science.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "248",
    detail: "Scientists, wellness coaches, and global operations teams supporting distributors.",
    icon: Users
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Glyconutrient leadership",
    description: "Mannatech’s Ambrotose complex blends plant-sourced saccharides to support cellular communication.",
    proof: "Dozens of patents and clinical studies underpin product differentiation.",
    icon: Leaf
  },
  {
    title: "Holistic product suite",
    description: "From immune support and weight management to skincare and home essentials, everything centres on wellness.",
    proof: "Programs combine supplements with lifestyle coaching for measurable outcomes.",
    icon: Utensils
  },
  {
    title: "Heart for service",
    description: "M5M Foundation fights childhood malnutrition; distributors see purpose in every order.",
    proof: "Meal donations and impact reporting energise field storytelling and customer loyalty.",
    icon: Sparkles
  }
];

const PROGRAMS: Program[] = [
  {
    title: "Discover nourishment gaps",
    detail: "Use health assessments, allergen filters, and dietary habits to tailor glyconutrient stacks."
  },
  {
    title: "Activate daily rituals",
    detail: "Pair supplement schedules with hydration prompts, recipes, and family-friendly wellness challenges."
  },
  {
    title: "Measure and celebrate",
    detail: "Show progress via energy surveys, biometric syncing, and donation milestones to inspire referrals."
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Glyconutrient knowledge vault",
    description: "Centralise research, patents, and visual explainers for quick consultant storytelling.",
    highlight: "AI translates science into customer-ready language across languages.",
    icon: BarChart3
  },
  {
    title: "Nutrition compliance guardrail",
    description: "Pre-approve claims, automate disclaimers, and route creative through legal review.",
    highlight: "Ensure every wellness conversation stays regulator-ready.",
    icon: ShieldCheck
  },
  {
    title: "Impact reporting cockpit",
    description: "Track donations, community events, and global M5M outreach in real time.",
    highlight: "Share dashboards that align purpose with performance for investors and customers.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Habit loop automation",
    description: "Schedule reminders, reward streaks, and micro-coaching nudges based on customer data.",
    highlight: "Consultants focus on high-value relationships while automation handles routine touches.",
    icon: Droplets
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Mannatech Nutritional Wellness Snapshot";
  const description =
    "Understand how Mannatech weaves glyconutrient science, service, and habit coaching into a $173.5M business—and how Cloud MLM Software lets you mirror that impact.";
  const keywords = [
    "Mannatech analysis",
    "Glyconutrient MLM strategy",
    "Mannatech compensation insights",
    "Wellness direct selling software",
    "Cloud MLM Software nutrition brands"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/mannatech", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MannatechPageProps = {
  params: { lang: SupportedLocale };
};

export default function MannatechPage({ params }: MannatechPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-[#f4fff8] to-[#eef6ff] py-20 dark:border-border/40 dark:from-slate-950 dark:via-emerald-950 dark:to-blue-950">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_52%_90%,rgba(244,114,182,0.16),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,0.65fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Mannatech • Flower Mound, Texas
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Glyconutrient science with measurable social impact.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Mannatech empowers families with cellular nutrition, holistic rituals, and the M5M mission. Apply their approach to design your
                own purpose-driven wellness platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Experience the AI nutrition studio
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 dark:bg-white/10 dark:text-white">
                <Link href={pricingHref}>
                  Review investment tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200 text-emerald-800 hover:bg-emerald-500/10 dark:border-white/40 dark:text-white">
                <Link href={contactHref}>
                  Design your wellness roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-emerald-200/70 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-white/20 dark:bg-slate-950/70">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-200">Growth markers</span>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Metrics that underpin Mannatech’s longevity.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-2xl border border-emerald-100 bg-white/90 p-4 dark:border-white/10 dark:bg-slate-900/70">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-emerald-700/80 dark:text-emerald-100/80">{metric.label}</p>
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-200/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars of Mannatech’s resilience</h2>
          <p className="text-sm text-muted-foreground">
            Integrate scientific proof, programmatic coaching, and social purpose to deliver trustworthy wellness outcomes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-emerald-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-white py-20 dark:border-border/40 dark:bg-slate-950/70">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(59,130,246,0.16),transparent_60%)]" aria-hidden />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Wellness programme
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Curate rituals that last.</h2>
            <p className="text-sm text-muted-foreground">
              Mannatech’s consultants keep routines alive with structured programmes. Adapt them to your own launch.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PROGRAMS.map((program) => (
              <article
                key={program.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
              >
                <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for mission-driven wellness companies
          </h2>
          <p className="text-sm text-muted-foreground">
            Scale glyconutrient education, compliance, and social impact with AI-assisted precision.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{play.highlight}</span>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Explore pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Book a nutrition strategy call
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
