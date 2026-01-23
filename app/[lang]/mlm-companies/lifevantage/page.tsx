import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Atom, BarChart3, CalendarClock, Flame, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";
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
  insight: string;
  proof: string;
  icon: IconType;
};

type Journey = {
  stage: string;
  description: string;
  highlight: string;
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
    value: "$203M",
    detail: "LifeVantage continues to rank within the DSN Global 100 for biohacking innovation.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2003",
    detail: "Launched in Sandy, Utah with the mission to unlock cellular health.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "208",
    detail: "Lean corporate team supporting field biohackers across the United States and beyond.",
    icon: Users
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Protandim science",
    insight: "Flagship Protandim formulas target oxidative stress and mitochondrial health with peer-reviewed evidence.",
    proof: "Multiple studies validate the Nrf2 Synergizer and other formulations for cellular defense.",
    icon: Atom
  },
  {
    title: "Biohacker community",
    insight: "Consultants position themselves as wellness coaches, using data, wearables, and education-first strategies.",
    proof: "LifeVantage Academy equips reps with science-backed storytelling and compliance clarity.",
    icon: Sparkles
  },
  {
    title: "Flexible subscriptions",
    insight: "Stackable packets, personalized stacks, and loyalty rewards drive predictable recurring revenue.",
    proof: "Auto-ship incentives and refer-a-friend programs emphasise consumption over recruitment.",
    icon: ShieldCheck
  }
];

const JOURNEY: Journey[] = [
  {
    stage: "Assess & baseline",
    description: "Use lifestyle surveys, wearable integrations, and health goals to personalise supplement stacks.",
    highlight: "Data-rich onboarding ensures realistic expectations and measurable progress."
  },
  {
    stage: "Activate & guide",
    description: "Deliver habit coaching, recipe libraries, and micro-learning to keep customers engaged.",
    highlight: "Consultants become accountability partners, not just product distributors."
  },
  {
    stage: "Optimize & expand",
    description: "Show progress dashboards, cross-sell targeted boosters, and celebrate transformation stories.",
    highlight: "AI prompts surface next-best actions to deepen loyalty and referrals."
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Biohacker data hub",
    description: "Connect wearables, surveys, and order history into one health intelligence canvas.",
    highlight: "Cloud MLM Software delivers dynamic insights consultants can action immediately.",
    icon: BarChart3
  },
  {
    title: "Science content concierge",
    description: "Organise studies, infographics, and compliance-approved claims for quick field access.",
    highlight: "AI summarises complex research into customer-friendly talking points.",
    icon: Flame
  },
  {
    title: "Subscription retention engine",
    description: "Predict churn risk, suggest replenishment cycles, and automate loyalty offers.",
    highlight: "Proactive notifications help consultants rescue customers before they lapse.",
    icon: Zap
  },
  {
    title: "Community impact tracker",
    description: "Measure volunteer hours, philanthropy, and local biohacking events.",
    highlight: "Bring transparency to purpose-driven storytelling for media and regulators.",
    icon: GlobeHemisphereWest
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "LifeVantage Cellular Wellness Playbook";
  const description =
    "Explore LifeVantage’s Protandim-powered growth engine and learn how Cloud MLM Software amplifies biohacking communities with AI, data, and compliance.";
  const keywords = [
    "LifeVantage analysis",
    "Protandim business strategy",
    "Biohacking MLM software",
    "LifeVantage compensation insights",
    "Cloud MLM Software health brands"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/lifevantage", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type LifeVantagePageProps = {
  params: { lang: SupportedLocale };
};

export default function LifeVantagePage({ params }: LifeVantagePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-cyan-200/60 bg-gradient-to-br from-[#030b16] via-[#0b1f2f] to-[#17112a] py-20 text-white dark:border-cyan-200/40">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(14,165,233,0.22),transparent_60%),radial-gradient(circle_at_48%_88%,rgba(236,72,153,0.18),transparent_58%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
              LifeVantage • Sandy, Utah
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Cellular wellness meets entrepreneurial momentum.
              </h1>
              <p className="text-base text-white/80">
                LifeVantage activates a biohacker movement with Protandim science, subscription loyalty, and education-first consultants. Follow
                the blueprint to launch your own high-integrity wellness venture.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Launch the AI wellness cockpit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/15 text-cyan-100 hover:bg-white/25">
                <Link href={pricingHref}>
                  Compare solution tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Meet our strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Growth signals</span>
              <p className="text-lg font-semibold text-white">
                Metrics that keep LifeVantage on the global wellness radar.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-2xl border border-white/15 bg-black/40 p-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-white/60">{metric.label}</p>
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs text-white/70">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What powers LifeVantage loyalty?</h2>
          <p className="text-sm text-muted-foreground">
            Science proofs, coaching culture, and recurring revenue architecture make LifeVantage stand out. Apply these pillars to your own
            launch.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-cyan-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.insight}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-muted/50 py-20 dark:border-border/40 dark:bg-slate-900/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_26%,rgba(236,72,153,0.18),transparent_60%)]" aria-hidden />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Customer journey
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Build journeys that prove impact.</h2>
            <p className="text-sm text-muted-foreground">
              LifeVantage keeps customers engaged through real outcomes. Structure your workflow around these steps.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {JOURNEY.map((step) => (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <h3 className="text-lg font-semibold text-foreground">{step.stage}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{step.highlight}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for science-led wellness brands
          </h2>
          <p className="text-sm text-muted-foreground">
            Power your biohacking community with analytics, AI, and compliance frameworks designed for impact.
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
              Review pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Plan your biohacker rollout
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
