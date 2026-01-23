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
  Brush,
  Diamond,
  Droplet,
  Eye,
  Globe2,
  HeartHandshake,
  Palette,
  Ribbon,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, Compass, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Story = {
  title: string;
  description: string;
  supporting: string;
  icon: IconType;
};

type Journey = {
  step: string;
  description: string;
  insight: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$137.5M",
    detail: "Japanese skincare heritage powering growth across Asia and global beauty communities.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1931",
    detail: "Osaka-based R&D labs blending tradition with modern dermatological breakthroughs.",
    icon: Compass
  },
  {
    label: "Compensation",
    value: "Multilevel",
    detail: "Relationship-first entrepreneurship with elegant, educational beauty rituals.",
    icon: HeartHandshake
  },
  {
    label: "Employees",
    value: "642 teammates",
    detail: "Experts across product innovation, field mentoring, and customer delight.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "Japan",
    detail: "Radiance-driven communities in Asia and global diaspora markets.",
    icon: Globe2
  },
  {
    label: "Signature lines",
    value: "Skincare • Cosmetics",
    detail: "High-touch formulations designed to elevate everyday elegance and confidence.",
    icon: Palette
  }
];

const STORIES: Story[] = [
  {
    title: "Laboratory-grade artistry",
    description:
      "Naris pairs natural extracts with advanced peptides and fermentation technology to deliver luminous, lasting results.",
    supporting:
      "Continuous in-house R&D, ingredient traceability, and clinical validation underpin every launch.",
    icon: Droplet
  },
  {
    title: "Confidence through coaching",
    description:
      "Consultants craft bespoke routines and teach application techniques that celebrate each customer’s personality.",
    supporting:
      "Personal diaries, skincare diagnostics, and seasonal lookbooks turn transactions into self-care journeys.",
    icon: Brush
  },
  {
    title: "Cultural celebration",
    description:
      "Workshops, beauty cafés, and philanthropic initiatives create inclusive spaces where artistry and community meet.",
    supporting:
      "Recognition ceremonies, scholarships, and next-gen leadership programs keep the brand’s heart vibrant.",
    icon: Ribbon
  }
];

const JOURNEY: Journey[] = [
  {
    step: "Curate the atelier moment",
    description:
      "Hosts design intimate studios with signature scents, skin analysis stations, and personalized welcome rituals.",
    insight:
      "Cloud MLM Software suggests mood boards, product assortments, and compliant storytelling arcs for each audience.",
    icon: Sparkles
  },
  {
    step: "Design luminous routines",
    description:
      "Consultants layer treatments, color stories, and daily habits tailored to lifestyle, climate, and skin goals.",
    insight:
      "AI insights surface product pairings, follow-up cadence, and education modules while respecting brand tone.",
    icon: Eye
  },
  {
    step: "Celebrate radiant transformations",
    description:
      "Communities share results through photo diaries, cultural events, and mentorship circles that inspire new leaders.",
    insight:
      "Recognition dashboards highlight milestones, referrals, and social sentiment so gratitude always feels timely.",
    icon: Users
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Ingredient storytelling engine",
    description:
      "Translates lab data, sourcing stories, and cultural inspiration into multilingual, compliance-approved narratives.",
    payoff: "Keeps consultants confident while preserving the brand’s poetic voice.",
    icon: Diamond
  },
  {
    title: "Experience quality monitor",
    description:
      "Captures feedback from ateliers, pop-ups, and virtual masterclasses to surface coaching opportunities.",
    payoff: "Maintains luxury consistency and ensures customers feel cherished every time.",
    icon: HeartHandshake
  },
  {
    title: "Radiance growth cockpit",
    description:
      "Consolidates performance, recognition, and product cycle insights so leaders can plan with precision.",
    payoff: "Aligns field motivation, inventory, and marketing investments around what delights customers most.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Naris Cosmetics MLM Strategy: Japanese Radiance & Consultant Craftsmanship";
  const description =
    "Uncover how Naris Cosmetics’ $137.5M beauty heritage and consultant artistry flourish with Cloud MLM Software enablement.";
  const keywords = [
    "Naris Cosmetics MLM analysis",
    "Japanese skincare direct selling",
    "beauty consultant enablement",
    "luxury cosmetics MLM software",
    "Cloud MLM Software for Naris"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/naris-cosmetics", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NarisPageProps = {
  params: { lang: SupportedLocale };
};

export default function NarisPage({ params }: NarisPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-rose-200 bg-gradient-to-br from-[#1f0b1f] via-[#421436] to-[#0f1b32] px-8 py-20 text-white shadow-lg dark:border-rose-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(236, 72, 153, 0.35), transparent 55%), radial-gradient(circle at 78% 18%, rgba(129, 140, 248, 0.25), transparent 60%), radial-gradient(circle at 48% 88%, rgba(236, 72, 153, 0.28), transparent 60%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-100">
              Naris Cosmetics • Osaka radiance</span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Naris Cosmetics elevates everyday elegance with science-led skincare and human connection.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              Since 1931, Naris has crafted beauty experiences that blend Japanese craftsmanship with inclusive communities.
              Cloud MLM Software empowers consultants to deliver couture-level care with data-backed confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  Tour the consultant enablement demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-rose-900 hover:bg-rose-50">
                <Link href={contactHref}>
                  Co-design your luxury playbook
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">Ranked #72 globally with 642 teammates guiding luminous journeys around the world.</p>
          </div>
          <aside className="relative space-y-5 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
            <div className="absolute inset-y-0 right-[-28%] w-1/2 bg-gradient-to-b from-rose-300/40 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Signature experiences</h2>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Beauty ateliers</p>
                <p className="text-base font-semibold text-white">Sensory-driven masterclasses with personalized ritual design.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Consultant artistry</p>
                <p className="text-base font-semibold text-white">Makeup coaching, skincare diaries, and seasonal trend storytelling.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Community philanthropy</p>
                <p className="text-base font-semibold text-white">Scholarships, wellness outreach, and cultural celebrations.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Signals we track with you</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            These indicators help us tailor Cloud MLM Software to Naris’ beauty heritage and field ambitions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.label}
                className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-rose-400/30 dark:bg-rose-950/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-transparent to-transparent dark:from-rose-500/10" aria-hidden />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-200">{metric.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{metric.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[2.5rem] border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-indigo-50 px-8 py-16 shadow-sm dark:border-rose-400/30 dark:from-[#150910] dark:via-[#1b0d18] dark:to-[#10172b]">
        <div className="grid gap-10 lg:grid-cols-3">
          {STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article key={story.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{story.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{story.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-300">{story.supporting}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Consultant journey choreography</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Naris experiences are immersive and elegant. We transform that magic into repeatable stages for every consultant.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEY.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.step}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm dark:border-rose-400/30 dark:bg-rose-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.step}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{phase.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-300">{phase.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software plays</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We pair Naris’ artistry with intelligent orchestration so your field stays inspired, efficient, and on-brand.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-rose-100 bg-white p-6 shadow-sm dark:border-rose-400/30 dark:bg-rose-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{play.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-300">{play.payoff}</p>
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
          <Button asChild size="lg" variant="secondary" className="bg-white text-rose-900 hover:bg-rose-50 dark:bg-white/10 dark:text-rose-100">
            <Link href={contactHref}>
              Schedule a beauty innovation session
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
