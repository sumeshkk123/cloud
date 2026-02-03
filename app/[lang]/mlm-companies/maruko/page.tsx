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
  Scale,
  Diamond,
  Flame,
  Heart,
  LayoutGrid,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { Factory, FlowArrow, Leaf, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type PromisePoint = {
  title: string;
  description: string;
  insight: string;
  icon: IconType;
};

type ExperienceStage = {
  stage: string;
  description: string;
  coaching: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const SIGNALS: Signal[] = [
  {
    label: "Global revenue",
    value: "$130M",
    detail: "Wellness and beauty leader ranked #73 in global direct selling performance.",
    icon: Diamond
  },
  {
    label: "Established",
    value: "1978",
    detail: "Built on Japanese craftsmanship married with ongoing textile innovation.",
    icon: MapPin
  },
  {
    label: "Corporate team",
    value: "1,800 teammates",
    detail: "Designers, wellness scientists, and field mentors headquartered across Japan.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "Japan",
    detail: "Deep ties with communities that prioritize confidence, wellness, and hospitality.",
    icon: MapPin
  },
  {
    label: "Signature product mix",
    value: "Lingerie • Skincare • Cosmetics • Supplements",
    detail: "Collections engineered to sculpt, restore, and celebrate personal wellbeing.",
    icon: LayoutGrid
  },
  {
    label: "Selling motion",
    value: "Person-to-person",
    detail: "Single-level relationships that reward trusted hosts and guided consultations.",
    icon: Heart
  }
];

const PROMISES: PromisePoint[] = [
  {
    title: "Confidence engineered garments",
    description:
      "Body-shaping undergarments and posture-supporting apparel crafted with precision Japanese tailoring go far beyond aesthetics.",
    insight:
      "Every fit session becomes a transformation moment where ambassadors educate, adjust, and celebrate progress.",
    icon: ShieldCheck
  },
  {
    title: "Holistic beauty science",
    description:
      "Skincare and cosmetics leverage advanced bio-active research to deliver visible wellness and self-expression.",
    insight:
      "Sampling rituals pair sensorial experiences with data-backed ingredient stories to inspire recurring orders.",
    icon: Sparkles
  },
  {
    title: "Community-first mentorship",
    description:
      "Consultants act as wellness partners who share their journeys, host restorative gatherings, and guide habit shifts.",
    insight:
      "Trust, empathy, and post-event care convert occasional shoppers into lifelong members of the Maruko family.",
    icon: Heart
  }
];

const EXPERIENCE: ExperienceStage[] = [
  {
    stage: "Curate restorative venues",
    description:
      "Select intimate spaces with soft lighting, mirrors, and tailoring pods so guests can relax while discovering signature garments.",
    coaching:
      "Cloud MLM Software maps ideal guest lists, room layouts, and garment size curves to keep fittings effortless.",
    icon: Factory
  },
  {
    stage: "Guide transformational fittings",
    description:
      "Blend measurement analytics with storytelling about fiber technology, wellness outcomes, and everyday confidence rituals.",
    coaching:
      "AI-enabled prompts surface before/after stories, compliance-approved scripts, and recommended bundle pairings on demand.",
    icon: FlowArrow
  },
  {
    stage: "Sustain post-event care",
    description:
      "Follow through with micro-coaching, wardrobe refresh reminders, and seasonal skincare masterclasses.",
    coaching:
      "Lifecycle journeys keep customer data, sentiment, and reorder timelines in one dashboard so mentors never miss a touchpoint.",
    icon: Users
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "AI fitting atelier",
    description:
      "Combines purchase history, fit feedback, and textile preferences to recommend the next perfect garment lineup.",
    payoff: "Delivers couture-level experiences at scale while protecting inventory velocity and margin.",
    icon: Scale
  },
  {
    title: "Wellness story studio",
    description:
      "Centralizes testimonial reels, ingredient research, and confidence-building scripts for every consultant persona.",
    payoff: "Keeps messaging consistent, science-backed, and emotionally resonant across every gathering.",
    icon: Flame
  },
  {
    title: "Community vitality radar",
    description:
      "Watches engagement, reorder cadence, and sentiment signals across Japanese regions and diaspora communities.",
    payoff: "Predictive alerts highlight coaching needs before loyalty slips, sustaining Maruko’s supportive culture.",
    icon: Leaf
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Maruko MLM Intelligence: Confidence-Centric Direct Selling";
  const description =
    "Discover how Maruko’s Japanese wellness heritage, precision garments, and people-first mentorship thrive with Cloud MLM Software guidance.";
  const keywords = [
    "Maruko MLM analysis",
    "Maruko Japan direct selling",
    "body shaping MLM software",
    "Japanese wellness party plan",
    "Cloud MLM Software for Maruko"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/maruko", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MarukoPageProps = {
  params: { lang: SupportedLocale };
};

export default function MarukoPage({ params }: MarukoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-[#f8f5ff] via-white to-[#eef2ff] px-8 py-20 shadow-sm dark:border-indigo-500/20 dark:from-[#080616] dark:via-[#0f0c26] dark:to-[#141232]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(129, 140, 248, 0.35), transparent 55%), radial-gradient(circle at 80% 15%, rgba(251, 191, 36, 0.2), transparent 60%), radial-gradient(circle at 50% 85%, rgba(236, 72, 153, 0.25), transparent 62%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-700 dark:border-indigo-500/40 dark:bg-white/10 dark:text-indigo-200">
              Maruko • Japan wellness couture
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Maruko direct selling reimagines confidence through precision garments and restorative mentorship.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              Since 1978, Maruko has blended Japanese craftsmanship with human-centered coaching to elevate wellness, beauty, and daily confidence.
              Cloud MLM Software gives every consultant an AI-enabled atelier that keeps fittings personal, compliant, and memorable.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Tour the Maruko AI fitting room
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-indigo-900 hover:bg-indigo-100 dark:bg-white/10 dark:text-indigo-200 dark:hover:bg-white/20"
              >
                <Link href={contactHref}>
                  Design your localized mentor playbook
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Ranked #73 worldwide with 1,800 teammates guiding person-to-person transformations across Japan.
            </p>
          </div>
          <aside className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 backdrop-blur-sm dark:border-indigo-500/30 dark:bg-white/5">
            <div className="absolute inset-y-0 right-[-30%] w-1/2 bg-gradient-to-b from-indigo-200/60 via-transparent to-transparent blur-3xl dark:from-indigo-500/40" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Product constellations</h2>
            <ul className="mt-6 space-y-5 text-sm leading-6 text-slate-700 dark:text-slate-200">
              <li className="rounded-2xl border border-indigo-100/70 bg-indigo-50/70 p-4 dark:border-indigo-500/30 dark:bg-indigo-500/10">
                <p className="font-semibold text-indigo-900 dark:text-indigo-100">Body-shaping couture</p>
                <p className="text-xs text-indigo-700/80 dark:text-indigo-200/70">
                  Patented undergarments, posture trainers, and figure-enhancing layers engineered for everyday comfort.
                </p>
              </li>
              <li className="rounded-2xl border border-indigo-100/70 bg-indigo-50/70 p-4 dark:border-indigo-500/30 dark:bg-indigo-500/10">
                <p className="font-semibold text-indigo-900 dark:text-indigo-100">Holistic beauty rituals</p>
                <p className="text-xs text-indigo-700/80 dark:text-indigo-200/70">
                  Advanced skincare and cosmetics emphasizing restorative ingredients and luminous finishes.
                </p>
              </li>
              <li className="rounded-2xl border border-indigo-100/70 bg-indigo-50/70 p-4 dark:border-indigo-500/30 dark:bg-indigo-500/10">
                <p className="font-semibold text-indigo-900 dark:text-indigo-100">Wellness supplementation</p>
                <p className="text-xs text-indigo-700/80 dark:text-indigo-200/70">
                  Nutrition allies that reinforce confidence journeys with energy, posture, and longevity support.
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Signals shaping our advisory lens</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Authentic storytelling starts with the data behind Maruko’s success. These indicators guide every optimization conversation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.label}
                className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-indigo-500/30 dark:bg-indigo-950/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-transparent to-transparent dark:from-indigo-500/10" aria-hidden />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-200">{signal.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50 to-slate-50 px-8 py-16 shadow-sm dark:border-indigo-500/30 dark:from-[#0b0b19] dark:via-[#090818] dark:to-[#11192c]">
        <div className="grid gap-10 lg:grid-cols-3">
          {PROMISES.map((promise) => {
            const Icon = promise.icon;
            return (
              <article key={promise.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/80 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{promise.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{promise.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">{promise.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Experience choreography for hosts</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Maruko gatherings are restorative rituals. We translate the brand’s human touch into repeatable, data-informed field motions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXPERIENCE.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.stage}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.stage}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">{step.coaching}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software partnership plays</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We keep Maruko’s couture-grade experiences scalable with AI orchestration, narrative integrity, and governance that respects every
            relationship.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm dark:border-indigo-500/30 dark:bg-indigo-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{play.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">{play.payoff}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Review platform pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-indigo-900 hover:bg-indigo-100 dark:bg-white/10 dark:text-indigo-200 dark:hover:bg-white/20"
          >
            <Link href={contactHref}>
              Schedule a wellness innovation session
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
