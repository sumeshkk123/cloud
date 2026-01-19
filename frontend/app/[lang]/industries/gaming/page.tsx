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
  BrainCircuit,
  Gamepad2,
  Globe,
  Layers3,
  PieChart,
  Rocket,
  Sparkles,
  Trophy,
  UsersRound,
  Zap
} from "lucide-react";
import {
  Lightning,
  Ranking,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  value: string;
  label: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
};

type Track = {
  title: string;
  description: string;
  icon: IconType;
};

type Tool = {
  title: string;
  description: string;
  icon: IconType;
};

const ENGAGEMENT_METRICS: Metric[] = [
  {
    value: "+62%",
    label: "player-to-partner conversions",
    detail: "Transform superfans into advocates with gamified referral loops and narrative-driven missions.",
    icon: Trophy
  },
  {
    value: "15 mins",
    label: "to launch seasonal quests",
    detail: "Deploy time-limited campaigns, in-game challenges, and bonus tiers with reusable templates.",
    icon: Sparkles
  },
  {
    value: "4.8/5",
    label: "community satisfaction",
    detail: "Real-time service, personalised rewards, and transparent earnings keep creators loyal.",
    icon: UsersRound
  }
];

const CORE_PILLARS: Pillar[] = [
  {
    title: "Immersive loyalty",
    description: "Design achievements, loot drops, and status tiers that extend engagement long after launch events."
  },
  {
    title: "Omni-platform reach",
    description: "Coordinate PC, console, and mobile experiences with unified identity, wallet, and progression tracking."
  },
  {
    title: "Data-powered monetisation",
    description: "Optimise bundles, storefronts, and partner payouts using live telemetry and predictive analytics."
  }
];

const EXPERIENCE_TRACKS: Track[] = [
  {
    title: "Creator & influencer hub",
    description: "Offer branded portals with campaign briefs, revenue dashboards, and embeddable tracking links.",
    icon: Gamepad2
  },
  {
    title: "Season management studio",
    description: "Plan battle passes, reward ladders, and double XP weekends with automation that handles timezone rollouts.",
    icon: Rocket
  },
  {
    title: "Esports operations",
    description: "Coordinate tournaments with team registration, sponsor fulfilment, and prize distribution.",
    icon: Lightning
  },
  {
    title: "Player care intelligence",
    description: "Leverage AI to surface sentiment, prioritise tickets, and trigger retention offers across channels.",
    icon: BrainCircuit
  }
];

const AFFILIATE_TOOLS: Tool[] = [
  {
    title: "Gamified compensation",
    description: "Blend matrix, binary, or tiered commissions with experience points, skins, and exclusive drops that boost advocacy.",
    icon: Ranking
  },
  {
    title: "Telemetry-driven insights",
    description: "Observe cohort behaviour, conversion funnels, and lifetime value to iterate events and expansions.",
    icon: PieChart
  },
  {
    title: "Cross-platform wallets",
    description: "Manage fiat, tokens, and in-game currencies in secure e-wallets with compliance-ready auditing.",
    icon: Layers3
  },
  {
    title: "Global infrastructure",
    description: "Launch localised storefronts, payment methods, and language kits to reach audiences worldwide.",
    icon: Globe
  },
  {
    title: "Community automation",
    description: "Schedule announcements, reward drops, and personalised nudges inside Discord, email, and in-game chat.",
    icon: Waveform
  },
  {
    title: "Trust & security",
    description: "Protect digital assets with MFA, anti-fraud scoring, and automated moderation workflows.",
    icon: Zap
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Gaming Industry MLM Software";
  const description =
    "Power gaming communities with Cloud MLM Software—gamified compensation, creator hubs, and real-time analytics for modern studios.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/gaming", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GamingPageProps = {
  params: { lang: SupportedLocale };
};

export default function GamingPage({ params }: GamingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-violet-200 via-slate-900 to-slate-950 py-20 text-white dark:border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.35),transparent_58%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.24),transparent_65%),radial-gradient(circle_at_45%_88%,rgba(126,34,206,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90">
                Gaming growth and community engine
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Cloud MLM Software for studios building living game universes.
              </h1>
              <p className="max-w-2xl text-base text-slate-200">
                Reward creators, affiliates, and players with programmable economies, immersive journeys, and analytics that future-proof every launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Architect your next season
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Enter the gaming demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {ENGAGEMENT_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-white/20 bg-white/5 p-5 shadow-lg backdrop-blur">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">{metric.label}</p>
                    <p className="text-sm text-slate-300">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-white/20 bg-white/5 p-8 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Level-up priorities</p>
            <div className="space-y-5">
              {CORE_PILLARS.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-white/20 bg-white/5 p-5">
                  <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
                  <p className="mt-2 text-xs text-slate-200">{pillar.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between border border-white/20 text-white hover:bg-white/10">
              <Link href={pricingHref}>
                Review monetisation models
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ops infrastructure for live-service studios</h2>
          <p className="text-sm text-muted-foreground">
            Coordinate seasons, creator ecosystems, and monetisation pipelines with the same precision you bring to gameplay.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {EXPERIENCE_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article key={track.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{track.title}</h3>
                <p className="text-sm text-muted-foreground">{track.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Equip affiliates and partners to champion your universe</h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software fuses gamification and enterprise-grade automation so every community touchpoint drives revenue.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {AFFILIATE_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <article key={tool.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-violet-100 p-8 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-violet-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-900/30" aria-hidden />
          <div className="relative space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Launch roadmap aligned to your release calendar</h2>
            <p className="text-sm text-muted-foreground">
              Prepare cross-functional squads with battle plans that cover monetisation, community management, and support readiness.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Concept sprint: align value props, audience segments, and revenue targets.</li>
              <li>• Build sprint: configure compensation, automation, and analytics for pre-launch readiness.</li>
              <li>• Live optimisation: monitor sentiment, drop adjustments, and partner performance in real time.</li>
            </ul>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_32%,rgba(168,85,247,0.3),transparent_60%),radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.22),transparent_62%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to amplify your community?</h2>
            <p className="text-sm text-slate-200">
              Bring your launch roadmap, influencer roster, and monetisation goals. We will craft a Cloud MLM Software blueprint that keeps momentum high.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Talk with our gaming strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Request the gaming demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Workshop essentials</p>
              <ul className="space-y-2">
                <li>• Live-service roadmap and event cadence.</li>
                <li>• Community channels, content partners, and regional priorities.</li>
                <li>• Current tech stack, data signals, and monetisation KPIs.</li>
              </ul>
              <p className="text-xs text-slate-300">Receive a phased implementation plan within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
