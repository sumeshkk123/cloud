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
  BadgeCheck,
  BarChart3,
  Camera,
  Droplets,
  Globe2,
  Heart,
  Music,
  Navigation2,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, Lightning, MegaphoneSimple, UsersThree } from "@phosphor-icons/react/dist/ssr";

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

type Play = {
  stage: string;
  description: string;
  enablement: string;
  icon: IconType;
};

type CloudMove = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Annual revenue",
    value: "$435M",
    detail: "Rapid growth powered by performance haircare, wellness, and premium skincare lines.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2014",
    detail: "Doral, Florida HQ launched the first direct sales brand centered on luxury haircare.",
    icon: Navigation2
  },
  {
    label: "Team members",
    value: "442 employees",
    detail: "Global corporate crew supporting 600K+ preferred customers and thriving market partners.",
    icon: UsersThree
  },
  {
    label: "Compensation",
    value: "Multilevel",
    detail: "Social commerce plus in-person activations reward community leadership and customer success.",
    icon: Heart
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Momentum expands across North America, Europe, and Latin America via social-first storytelling.",
    icon: Globe2
  },
  {
    label: "Hero portfolio",
    value: "Haircare • Skincare • Wellness",
    detail: "Naturally based, clinically tested products tailor routines to texture, lifestyle, and goals.",
    icon: Droplets
  }
];

const PILLARS: Pillar[] = [
  {
    title: "High-performance formulations",
    description:
      "MONAT blends botanical actives with proprietary peptide and rejuveniqe oil complexes to deliver visible results fast.",
    proof:
      "Clinical studies, third-party certifications, and customer transformations fuel loyalty and advocacy across social platforms.",
    icon: BadgeCheck
  },
  {
    title: "Social-first entrepreneurship",
    description:
      "Market Partners turn everyday life into content, leveraging community events, livestreams, and sampling experiences.",
    proof:
      "A library of multimedia assets and compliance-checked narratives ensures every share builds trust and conversion.",
    icon: Camera
  },
  {
    title: "Wellness lifestyle community",
    description:
      "Beauty insiders mentor customers on haircare, skincare, and nutrition rituals that echo the brand’s gratitude culture.",
    proof:
      "Recognition tours, gratitude initiatives, and philanthropic programs reinforce purpose-driven growth worldwide.",
    icon: Music
  }
];

const FIELD_PLAYS: Play[] = [
  {
    stage: "Ignite curiosity",
    description:
      "Create scroll-stopping stories, before/after reels, and textured content that spark dialogue with prospective customers.",
    enablement:
      "Cloud MLM Software curates trending audio, brand-safe captions, and localized offers tailored to each persona.",
    icon: Sparkles
  },
  {
    stage: "Host immersive rituals",
    description:
      "Hybrid events mix scalp analysis, product labs, and wellness talks so guests can personalize regimens in real time.",
    enablement:
      "AI guides the experience flow, sampling kits, and compliance reminders, keeping Market Partners confident on stage.",
    icon: Users
  },
  {
    stage: "Nurture long-term glow",
    description:
      "Deliver follow-up care plans, education bursts, and leadership pathways that turn customers into advocates.",
    enablement:
      "Automations track milestones, replenish cycles, and leadership readiness while celebrating every win with heart.",
    icon: Heart
  }
];

const CLOUD_MOVES: CloudMove[] = [
  {
    title: "Social commerce intelligence",
    description:
      "Aggregates engagement, conversion, and compliance data across Instagram, TikTok, and live events into one cockpit.",
    payoff: "Helps leaders coach Market Partners with precision while amplifying the content that drives repeatable growth.",
    icon: MegaphoneSimple
  },
  {
    title: "Texture & wellness recommendation engine",
    description:
      "Pairs hair and skin science with lifestyle data to surface next-best regimens, subscription tweaks, and sampling triggers.",
    payoff: "Elevates customer lifetime value and keeps brand promises consistent across every persona.",
    icon: Lightning
  },
  {
    title: "Recognition pulse dashboard",
    description:
      "Tracks rank advancements, gratitude initiatives, and field sentiment to orchestrate timely celebration programs.",
    payoff: "Sustains the culture of gratitude and keeps motivation high across global teams.",
    icon: BarChart3
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MONAT Global MLM Strategy: Social Commerce & Wellness Growth";
  const description =
    "Explore how MONAT Global’s $435M social commerce engine, market partner enablement, and wellness lifestyle thrive with Cloud MLM Software.";
  const keywords = [
    "Monat Global MLM analysis",
    "Monat social selling strategy",
    "haircare direct sales software",
    "market partner enablement platform",
    "Cloud MLM Software for Monat"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/monatglobal", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MonatPageProps = {
  params: { lang: SupportedLocale };
};

export default function MonatPage({ params }: MonatPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-pink-200 bg-gradient-to-br from-[#360d39] via-[#6b1d53] to-[#0f1742] px-8 py-20 text-white shadow-lg dark:border-pink-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 20% 18%, rgba(249, 168, 212, 0.35), transparent 55%), radial-gradient(circle at 78% 20%, rgba(96, 165, 250, 0.25), transparent 60%), radial-gradient(circle at 45% 85%, rgba(129, 140, 248, 0.3), transparent 60%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-fuchsia-100">
              MONAT Global • Social commerce trailblazer
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              MONAT turns modern haircare, skincare, and wellness rituals into a gratitude-fueled movement.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              Market Partners amplify self-care stories on every platform. Cloud MLM Software supplies the AI copilots, compliance guardrails, and
              customer intelligence that keep growth personal, ethical, and unforgettable.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  See the MONAT enablement demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                <Link href={contactHref}>
                  Architect your Market Partner HQ
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">
              Ranked #35 in global direct selling with 600K+ loyal customers inspired by purpose-driven social commerce.
            </p>
          </div>
          <aside className="relative space-y-5 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
            <div className="absolute inset-y-0 right-[-28%] w-1/2 bg-gradient-to-b from-fuchsia-300/40 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Signature moments</h2>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Preferred customer care</p>
                <p className="text-base font-semibold text-white">Subscription perks, texture-specific tutorials, and gratitude touchpoints.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Market Partner momentum</p>
                <p className="text-base font-semibold text-white">Recognition tours, business academies, and authentic storytelling labs.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Impact initiatives</p>
                <p className="text-base font-semibold text-white">MONAT Gratitude programs fueling philanthropy across global communities.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Metrics guiding our advisory lens</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            These performance signals help us tailor Cloud MLM Software to MONAT’s social commerce reality.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.label}
                className="relative overflow-hidden rounded-3xl border border-fuchsia-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-fuchsia-400/30 dark:bg-fuchsia-950/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100/40 via-transparent to-transparent dark:from-fuchsia-500/10" aria-hidden />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-200">{metric.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{metric.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[2.5rem] border border-fuchsia-100 bg-gradient-to-br from-white via-fuchsia-50 to-indigo-50 px-8 py-16 shadow-sm dark:border-fuchsia-400/30 dark:from-[#0d0714] dark:via-[#120b1f] dark:to-[#111a33]">
        <div className="grid gap-10 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{pillar.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-300">{pillar.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Field playbook highlights</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            MONAT’s social-selling momentum thrives on authentic experiences. We digitize the choreography while preserving heart and edge.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FIELD_PLAYS.map((play, index) => {
            const Icon = play.icon;
            return (
              <article
                key={play.stage}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-fuchsia-100 bg-white p-6 shadow-sm dark:border-fuchsia-400/30 dark:bg-fuchsia-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.stage}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{play.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-300">{play.enablement}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software moves with MONAT</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Intelligent orchestration keeps market partners inventive, customers delighted, and compliance airtight across every channel.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_MOVES.map((move) => {
            const Icon = move.icon;
            return (
              <article
                key={move.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-fuchsia-100 bg-white p-6 shadow-sm dark:border-fuchsia-400/30 dark:bg-fuchsia-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{move.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{move.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-300">{move.payoff}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Review partnership pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white text-purple-900 hover:bg-purple-50 dark:bg-white/10 dark:text-fuchsia-100">
            <Link href={contactHref}>
              Plan a social commerce accelerator
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
