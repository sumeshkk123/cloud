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
  Apple,
  ArrowRight,
  ArrowUpRight,
  Beaker,
  Globe2,
  Handshake,
  HeartPulse,
  Leaf,
  Sprout,
  Users,
  Waves
} from "lucide-react";
import { ChartLineUp, Compass, Recycle, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Narrative = {
  title: string;
  description: string;
  insight: string;
  icon: IconType;
};

type Journey = {
  stage: string;
  description: string;
  empowerment: string;
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
    value: "$230M",
    detail: "Global demand for Tahitian Noni wellness products drives continued resilience.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1996",
    detail: "American Fork, Utah headquarters channels Polynesian partnerships into modern wellbeing.",
    icon: Compass
  },
  {
    label: "Compensation",
    value: "Multilevel",
    detail: "Wellness Advocates thrive on education-centric, relationship-led growth models.",
    icon: Handshake
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Authentic storytelling reaches global communities through purpose-driven ambassadors.",
    icon: Globe2
  },
  {
    label: "Hero portfolio",
    value: "Tahitian Noni • Supplements • Skincare • Essential oils",
    detail: "Products blend indigenous wisdom with validated science to promote vitality.",
    icon: HeartPulse
  },
  {
    label: "Corporate team",
    value: "Global field & HQ experts",
    detail: "Cross-functional teams steward sourcing, research, sustainability, and community uplift.",
    icon: UsersThree
  }
];

const NARRATIVES: Narrative[] = [
  {
    title: "Nature-first innovation",
    description:
      "Morinda teams collaborate with Polynesian growers to protect, harvest, and refine noni fruit without losing potency.",
    insight:
      "Sustainability programs and fair partnerships keep supply resilient while honoring indigenous stewardship.",
    icon: Sprout
  },
  {
    title: "Science-backed vitality",
    description:
      "Clinical research validates antioxidant, immune, and cellular benefits while informing new wellness blends.",
    insight:
      "Whitepapers, lab certifications, and educational broadcasts equip advocates with credible stories and compliance confidence.",
    icon: Beaker
  },
  {
    title: "Community transformation",
    description:
      "Wellness Advocates focus on purpose-driven coaching, helping families adopt healthier rituals and celebrate progress.",
    insight:
      "Recognition programs, philanthropic projects, and leadership academies reinforce the brand’s people-first ethos.",
    icon: Recycle
  }
];

const JOURNEY: Journey[] = [
  {
    stage: "Immersive product circles",
    description:
      "Gatherings spotlight Tahitian Noni origins, tasting rituals, and experiential demos that let guests feel the brand story.",
    empowerment:
      "Cloud MLM Software curates ingredient stories, compliance language, and multi-sensory agendas tailored to each audience.",
    icon: Apple
  },
  {
    stage: "Personal vitality mapping",
    description:
      "Advocates co-create daily wellness plans blending supplements, skincare, and mindful practices rooted in customer goals.",
    empowerment:
      "AI recommendations and sentiment trackers flag wins, gaps, and bundle opportunities while preserving authenticity.",
    icon: Leaf
  },
  {
    stage: "Sustained community care",
    description:
      "Follow-up circles, outdoor challenges, and gratitude events strengthen belonging and encourage leadership ascension.",
    empowerment:
      "Automations pulse recognition, education, and impact narratives that inspire action without sacrificing human warmth.",
    icon: Waves
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Noni supply intelligence",
    description:
      "Connects agricultural data, sustainability metrics, and inventory positions to keep product pledges transparent.",
    payoff: "Strengthens trust with advocates and customers while supporting regenerative sourcing commitments.",
    icon: Sprout
  },
  {
    title: "Vitality outcomes engine",
    description:
      "Unifies wellness assessments, customer milestones, and reorder behavior into actionable guidance for every advocate.",
    payoff: "Elevates loyalty and retention with insight-led coaching, not guesswork.",
    icon: HeartPulse
  },
  {
    title: "Purpose storytelling studio",
    description:
      "Houses approved narratives, impact footage, and philanthropy updates ready for localized campaigns.",
    payoff: "Keeps global messaging aligned while empowering advocates to share authentic, compliant impact stories.",
    icon: Users
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Morinda MLM Playbook: Tahitian Noni Wellness & Community Impact";
  const description =
    "Dive into Morinda’s $230M noni-powered wellness ecosystem and learn how Cloud MLM Software orchestrates advocacy, sustainability, and growth.";
  const keywords = [
    "Morinda MLM analysis",
    "Tahitian Noni wellness company",
    "Morinda distributor enablement",
    "natural health direct selling software",
    "Cloud MLM Software for Morinda"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/morinda", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MorindaPageProps = {
  params: { lang: SupportedLocale };
};

export default function MorindaPage({ params }: MorindaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200 bg-gradient-to-br from-[#052010] via-[#0d3721] to-[#0f1c2f] px-8 py-20 text-white shadow-lg dark:border-emerald-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(34, 197, 94, 0.32), transparent 55%), radial-gradient(circle at 78% 18%, rgba(125, 211, 252, 0.25), transparent 60%), radial-gradient(circle at 45% 85%, rgba(74, 222, 128, 0.28), transparent 60%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
              Morinda • Tahitian Noni wellbeing
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Morinda channels the power of nature into global wellbeing and purpose-filled entrepreneurship.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              From Tahiti to American Fork, Morinda honours indigenous partnerships while equipping Wellness Advocates to guide healthier lives.
              Cloud MLM Software keeps sourcing, storytelling, and customer care aligned with that mission.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  Explore the wellness intelligence demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                <Link href={contactHref}>
                  Build your advocate enablement hub
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">
              Ranked #54 globally with Tahitian Noni supply chains powering $230M in wellness-driven revenue.
            </p>
          </div>
          <aside className="relative space-y-5 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
            <div className="absolute inset-y-0 right-[-28%] w-1/2 bg-gradient-to-b from-emerald-300/40 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Wellbeing cornerstones</h2>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Sourcing integrity</p>
                <p className="text-base font-semibold text-white">Regenerative agriculture programs across French Polynesia.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Science collaboration</p>
                <p className="text-base font-semibold text-white">Global labs validate bioactive benefits and product efficacy.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Community impact</p>
                <p className="text-base font-semibold text-white">Wellness Advocates lead local charities, wellness clubs, and lifestyle challenges.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Signals informing our strategy</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We calibrate Cloud MLM Software to Morinda’s realities by grounding every recommendation in data and lived context.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.label}
                className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-emerald-400/30 dark:bg-emerald-950/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-transparent to-transparent dark:from-emerald-500/10" aria-hidden />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-200">{metric.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{metric.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-cyan-50 px-8 py-16 shadow-sm dark:border-emerald-400/30 dark:from-[#051510] dark:via-[#071b14] dark:to-[#0f1f2e]">
        <div className="grid gap-10 lg:grid-cols-3">
          {NARRATIVES.map((story) => {
            const Icon = story.icon;
            return (
              <article key={story.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{story.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{story.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">{story.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Wellness advocate journey</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Morinda gatherings honour culture and science. We transform that ethos into actionable steps for every advocate.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEY.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.stage}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-400/30 dark:bg-emerald-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.stage}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{phase.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">{phase.empowerment}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software partnership plays</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Intelligent orchestration safeguards Morinda’s promise, from regenerative sourcing to heartfelt customer care.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-400/30 dark:bg-emerald-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{play.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">{play.payoff}</p>
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
          <Button asChild size="lg" variant="secondary" className="bg-white text-emerald-900 hover:bg-emerald-50 dark:bg-white/10 dark:text-emerald-100">
            <Link href={contactHref}>
              Schedule a regenerative growth lab
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
