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
  Activity,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Flame,
  Globe2,
  ShieldCheck,
  Sparkles,
  TestTube,
  Users,
  Zap
} from "lucide-react";
import { ChartLineUp, Lightning, UsersFour, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type KetonePillar = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type CommunityPlay = {
  title: string;
  summary: string;
  proof: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const PRUVIT_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$325M+",
    detail: "A ketone-powered wellness brand driving energetic growth across the globe.",
    icon: Activity
  },
  {
    label: "Founded",
    value: "2016 · Louisville",
    detail: "Entrepreneurs turned biohackers reimagining metabolic health with bold storytelling.",
    icon: Brain
  },
  {
    label: "Community",
    value: "45+ employees · thousands of promoters",
    detail: "Momentum-minded leaders coaching squads through lifestyle, mindset, and performance.",
    icon: Users
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Digital-first expansion with global challenge communities and pop-up labs.",
    icon: Globe2
  },
  {
    label: "Product focus",
    value: "Ketone supplements & programmes",
    detail: "Drink mixes, reboot kits, and coaching rituals rooted in proven ketone science.",
    icon: Flame
  },
  {
    label: "Sales motion",
    value: "Human-first storytelling",
    detail: "Transformational testimonials, gamified challenges, and social commerce funnels.",
    icon: Lightning
  }
];

const KETONE_PILLARS: KetonePillar[] = [
  {
    title: "Science decoded",
    description:
      "Pruvit distils complex ketone research into simple, ready-to-use protocols for everyday high performers.",
    emphasis: "Education-rich onboarding demystifies ketosis for everyone from new parents to pro athletes.",
    icon: TestTube
  },
  {
    title: "Energy multiplies momentum",
    description:
      "Boosted focus and consistent energy become the foundation for habit stacking and daily wins.",
    emphasis: "Gamified reboot challenges keep members engaged through measurable progress streaks.",
    icon: Zap
  },
  {
    title: "Community amplifies change",
    description:
      "Livestreams, retreats, and local squads deliver accountability, mindset coaching, and celebration.",
    emphasis: "Belonging drives adherence—and fuels word-of-mouth growth at every rank.",
    icon: Sparkles
  }
];

const COMMUNITY_PLAYS: CommunityPlay[] = [
  {
    title: "Sensory product launches",
    summary:
      "Limited drops pair ingredient breakdowns with live tastings, influencer hacks, and hybrid watch parties.",
    proof: "Conversion rates spike when promoters tailor launch flows to performance, focus, or confidence goals.",
    icon: UsersThree
  },
  {
    title: "Gamified accountability loops",
    summary:
      "Leaderboards, badge challenges, and reboot calendars motivate consistency and celebrate micro-wins.",
    proof: "Retention curves improve as customers compete with themselves and unlock higher-tier recognition.",
    icon: Activity
  },
  {
    title: "Mentor-powered accelerators",
    summary:
      "Structured playbooks blend mindset coaching, nutritional support, and entrepreneurial guidance.",
    proof: "AI-surfaced best practices give mentors visibility into team momentum and intervention points.",
    icon: UsersFour
  }
];

const CLOUD_PRUVIT_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Ketone intelligence studio",
    description:
      "Aggregate biomarker tracking, challenge milestones, and customer feedback to personalise recommendations.",
    payoff: "Deliver precise coaching prompts that keep promoters and customers energised and compliant.",
    icon: ChartLineUp
  },
  {
    title: "Launch choreography",
    description:
      "Automate waitlists, scarcity messaging, and fulfilment for limited-edition flavours and bundles.",
    payoff: "Scale excitement without chaos while capturing granular analytics on every launch.",
    icon: ShieldCheck
  },
  {
    title: "Content velocity engine",
    description:
      "Provide on-brand templates, compliance checks, and AI copy assists for reels, emails, and recap posts.",
    payoff: "Empower promoters to publish confidently and stay aligned with evolving regulations.",
    icon: Brain
  },
  {
    title: "Hybrid event command centre",
    description:
      "Plan retreats, virtual summits, and pop-up labs with integrated ticketing, swag logistics, and nurture funnels.",
    payoff: "Turn every gathering into a multiplier for LTV, referrals, and global community reach.",
    icon: Flame
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pruvit MLM Company Spotlight & Ketone Movement Enablement";
  const description =
    "Discover how Pruvit fuses ketone science, gamified accountability, and magnetic storytelling—and how Cloud MLM Software powers launches, coaching intelligence, and hyper-personalised journeys.";
  const keywords = [
    "Pruvit MLM review",
    "Ketone direct selling software",
    "Pruvit promoter platform",
    "Cloud MLM Software for wellness brands",
    "AI health coaching tools"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/pruvit", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PruvitPageProps = {
  params: { lang: SupportedLocale };
};

export default function PruvitPage({ params }: PruvitPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#fff6fb] via-[#f3f6ff] to-[#f0fffd] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-purple-950/50">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(236,72,153,0.2),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(79,70,229,0.18),transparent_60%),radial-gradient(circle_at_50%_88%,rgba(16,185,129,0.2),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-600 dark:text-fuchsia-200">
              <span className="rounded-full border border-fuchsia-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Ketone revolution
              </span>
              <span className="rounded-full border border-indigo-200/60 bg-indigo-50/80 px-4 py-1 text-indigo-600 shadow-sm backdrop-blur dark:border-indigo-400/40 dark:bg-indigo-900/40 dark:text-indigo-200">
                High-energy community
              </span>
              <span className="rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-1 text-emerald-600 shadow-sm backdrop-blur dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-200">
                Science-backed results
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Pruvit: metabolic breakthroughs, momentum-minded leaders, and unstoppable community energy.
              </h1>
              <p className="text-base text-muted-foreground">
                Pruvit helps people biohack their potential with food-as-technology experiences. Cloud MLM Software powers the movement with
                launch automation, coaching intelligence, and AI-personalised journeys that nurture loyalty.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build your Pruvit-ready HQ
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Explore platform tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-fuchsia-100/60 dark:hover:bg-fuchsia-500/20">
                <Link href={demoHref}>
                  Experience an AI coaching demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-fuchsia-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(236,72,153,0.45)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {PRUVIT_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-fuchsia-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{metric.label}</h2>
                    </div>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-fuchsia-50/60 p-10 shadow-lg shadow-fuchsia-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/60 bg-fuchsia-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-600 dark:border-fuchsia-400/40 dark:bg-fuchsia-900/40 dark:text-fuchsia-200">
            Ketone pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why Pruvit fuels unstoppable momentum.</h2>
          <p className="text-sm text-muted-foreground">
            The Pruvit experience fuses product breakthroughs, education, and community. Our platform keeps those stories activated at scale—always
            compliant, always personalised.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {KETONE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-fuchsia-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-fuchsia-400/70 hover:shadow-xl dark:border-fuchsia-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-fuchsia-600 dark:text-fuchsia-200">{pillar.emphasis}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-indigo-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-900/40">
        <div
          className="absolute inset-x-0 top-16 h-60 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:border-indigo-400/40 dark:bg-indigo-900/40 dark:text-indigo-200">
              Community plays
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Turn every challenge, launch, and retreat into a momentum multiplier.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software keeps Pruvit’s community-fuelled experiences organised and insight-rich, so leaders can focus on connection.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-indigo-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-indigo-900/40">
            <ul className="space-y-6">
              {COMMUNITY_PLAYS.map((play) => {
                const Icon = play.icon;
                return (
                  <li key={play.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                      <p className="text-sm text-muted-foreground">{play.summary}</p>
                      <p className="rounded-2xl border border-indigo-200/60 bg-indigo-50/70 p-4 text-xs text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-900/40 dark:text-indigo-200">
                        {play.proof}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software advantage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Build an always-on engine for Pruvit’s next wave of metabolic transformation.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software unifies launches, coaching, compliance, and community insights so that every promoter can run faster with clarity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_PRUVIT_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-md transition hover:border-primary/50 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {capability.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Explore wellness-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Architect your next launch
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
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

