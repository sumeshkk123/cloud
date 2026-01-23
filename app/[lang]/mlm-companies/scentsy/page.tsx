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
  Droplet,
  Feather,
  Flower2,
  Globe2,
  Home,
  ShieldCheck,
  Sparkles,
  Users2,
  Wind
} from "lucide-react";
import { ChartLineUp, HandHeart, UsersFour, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type FragrancePillar = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type ExperiencePlay = {
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

const SCENTSY_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$449M+",
    detail: "Global fragrance leader crafting warmers, wax, diffusers, and personal care collections.",
    icon: Sparkles
  },
  {
    label: "Founded",
    value: "2004 · Meridian, Idaho",
    detail: "Home fragrance trailblazers inspiring joy-filled experiences worldwide.",
    icon: Flower2
  },
  {
    label: "Consultant community",
    value: "1,000+ employees & passionate consultants",
    detail: "Hosts and storytellers who transform homes through scent-driven memories.",
    icon: Users2
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Growing global presence through digital pop-ups and sensory sampling programmes.",
    icon: Globe2
  },
  {
    label: "Product focus",
    value: "Home & personal fragrance",
    detail: "Customisable warmers, wax bars, diffusers, oils, and body care essentials.",
    icon: Home
  },
  {
    label: "Sales motion",
    value: "Party plan",
    detail: "Immersive gatherings, subscription clubs, and seasonal product drops.",
    icon: HandHeart
  }
];

const FRAGRANCE_PILLARS: FragrancePillar[] = [
  {
    title: "Curated scent storytelling",
    description:
      "Scentsy pairs artful warmers with layered fragrance collections designed to evoke emotion and nostalgia.",
    emphasis: "Consultants guide guests through scent journeys that turn houses into signature experiences.",
    icon: Feather
  },
  {
    title: "Innovation in ambience",
    description:
      "Safe wax warmers, fan diffusers, and smart home integration let customers customise fragrance to every season.",
    emphasis: "Flexible systems keep customers engaged year-round with fresh mixes and limited releases.",
    icon: Wind
  },
  {
    title: "Belonging through generosity",
    description:
      "Philanthropy initiatives and uplifting culture make consultants proud ambassadors in their communities.",
    emphasis: "Shared purpose amplifies storytelling and retention across global teams.",
    icon: Sparkles
  }
];

const EXPERIENCE_PLAYS: ExperiencePlay[] = [
  {
    title: "Immersive scent bars",
    summary:
      "Consultants design lounge-worthy events with mood lighting, curated playlists, and guided fragrance flights.",
    proof: "Average order value rises when guests can layer scents, capture favourites, and subscribe on the spot.",
    icon: UsersThree
  },
  {
    title: "Scent-of-the-month clubs",
    summary:
      "Subscription experiences deliver surprise collections, storytelling cards, and curated decor ideas every month.",
    proof: "Recurring revenue grows as clubs blend exclusive access with shareable moments.",
    icon: Home
  },
  {
    title: "Purpose-driven pop-ups",
    summary:
      "Pop-up fundraising nights, seasonal bazaars, and digital open houses keep the community connected year-round.",
    proof: "Data shows expanded reach when impact stories and local collaborations headline every event.",
    icon: UsersFour
  }
];

const CLOUD_SCENTSY_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Scent curation studio",
    description:
      "Capture preference quizzes, climate data, and past purchases to generate mix-and-match fragrance playlists.",
    payoff: "Deliver personalised recommendations that make every space feel intentional.",
    icon: Droplet
  },
  {
    title: "Launch rhythm automation",
    description:
      "Plan teaser drops, sampling bundles, and post-launch nurture for seasonal fragrances and warmer collections.",
    payoff: "Keep excitement high while giving consultants more time to focus on hospitality.",
    icon: ShieldCheck
  },
  {
    title: "Experience orchestration",
    description:
      "Manage RSVPs, scent bar checklists, playlist suggestions, and follow-up messaging in one dashboard.",
    payoff: "Ensure every gathering—virtual or in-person—feels polished and on-brand.",
    icon: Flower2
  },
  {
    title: "Community insight suite",
    description:
      "Track loyalty trends, club retention, and philanthropic impact to celebrate wins and guide coaching.",
    payoff: "Leadership can spot rising stars and invest in the experiences that delight customers most.",
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Scentsy Company Spotlight & Fragrance Experience Enablement";
  const description =
    "Discover how Scentsy turns fragrance into community magic—and how Cloud MLM Software streamlines scent journeys, launch rhythms, and immersive events.";
  const keywords = [
    "Scentsy MLM review",
    "Home fragrance direct sales",
    "Scentsy consultant tools",
    "Cloud MLM Software for party plan brands",
    "AI fragrance recommendation platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/scentsy", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ScentsyPageProps = {
  params: { lang: SupportedLocale };
};

export default function ScentsyPage({ params }: ScentsyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#fff9f4] via-[#f7f8ff] to-[#f4fffc] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-teal-950/40">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_22%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(79,70,229,0.18),transparent_60%),radial-gradient(circle_at_46%_85%,rgba(45,212,191,0.18),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-200">
              <span className="rounded-full border border-amber-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Fragrance artistry
              </span>
              <span className="rounded-full border border-indigo-200/60 bg-indigo-50/80 px-4 py-1 text-indigo-600 shadow-sm backdrop-blur dark:border-indigo-400/40 dark:bg-indigo-900/40 dark:text-indigo-200">
                Immersive events
              </span>
              <span className="rounded-full border border-teal-200/60 bg-teal-50/80 px-4 py-1 text-teal-600 shadow-sm backdrop-blur dark:border-teal-400/40 dark:bg-teal-900/40 dark:text-teal-200">
                Community warmth
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Scentsy: transforming spaces, celebrating connection, and inspiring scent memories together.
              </h1>
              <p className="text-base text-muted-foreground">
                Scentsy infuses homes with curated fragrance and heartfelt hospitality. Cloud MLM Software keeps that magic organised—powering scent
                curation, launch rhythms, and unforgettable gatherings at scale.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Co-create your Scentsy platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Compare platform tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-amber-100/60 dark:hover:bg-amber-500/20">
                <Link href={demoHref}>
                  Explore a scent journey demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-amber-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(251,191,36,0.45)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {SCENTSY_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
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

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-amber-50/60 p-10 shadow-lg shadow-amber-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:border-amber-400/40 dark:bg-amber-900/40 dark:text-amber-200">
            Fragrance pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Crafting sensorial rituals that make every home feel like a hug.
          </h2>
          <p className="text-sm text-muted-foreground">
            From warmer artistry to philanthropic heart, Scentsy’s pillars keep the brand beloved. Cloud MLM Software extends that experience with
            data-informed storytelling.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FRAGRANCE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-amber-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-amber-400/70 hover:shadow-xl dark:border-amber-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-amber-600 dark:text-amber-200">{pillar.emphasis}</p>
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
              Experience plays
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Turn every fragrance moment into a memory worth sharing.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software helps Scentsy consultants orchestrate unforgettable events, subscription journeys, and community impact.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-indigo-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-indigo-900/40">
            <ul className="space-y-6">
              {EXPERIENCE_PLAYS.map((play) => {
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
            Build a fragrance-first platform that keeps Scentsy shining.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software unifies scent curation, launch strategy, and community insights so consultants can focus on bringing joy to every
            home.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_SCENTSY_CAPABILITIES.map((capability) => {
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
              Explore fragrance-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Plan your next scent story
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

