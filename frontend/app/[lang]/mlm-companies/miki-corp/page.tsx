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
  BarChart3,
  Building2,
  CircleEqual,
  CircleGauge,
  Cpu,
  Globe2,
  Handshake,
  Leaf,
  LineChart,
  Sparkles
} from "lucide-react";
import { ChartPieSlice, Lightning, UsersThree, Wine } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Innovation = {
  title: string;
  description: string;
  reinforcement: string;
  icon: IconType;
};

type Journey = {
  stage: string;
  description: string;
  support: string;
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
    label: "Estimated revenue",
    value: "$498M",
    detail: "Flagship skincare, nutrition, and home innovations deliver consistent growth across Japan.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1966",
    detail: "Decades of heritage blending Japanese wellness philosophy with modern product science.",
    icon: Building2
  },
  {
    label: "Corporate team",
    value: "280+ teammates",
    detail: "Osaka headquarters orchestrates product R&D, field mentorship, and customer care operations.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "Japan",
    detail: "Community networks extend throughout Kansai and nationwide lifestyle hubs.",
    icon: Globe2
  },
  {
    label: "Portfolio lanes",
    value: "Skincare • Nutrition • Home care",
    detail: "Holistic solutions inspire healthier homes and confident lifestyles.",
    icon: Leaf
  },
  {
    label: "Selling motion",
    value: "Person-to-person mentorship",
    detail: "Consultants guide rituals, demos, and habit-building programs in intimate settings.",
    icon: Handshake
  }
];

const INNOVATIONS: Innovation[] = [
  {
    title: "Research-led formulations",
    description:
      "Miki Corp invests in dermatology and nutritional science to launch products that make wellbeing tangible and trackable.",
    reinforcement:
      "Clinical-grade testing, premium ingredient sourcing, and quality assurance keep every claim trusted by households.",
    icon: Cpu
  },
  {
    title: "Everyday lifestyle curation",
    description:
      "Cleaning solutions, skincare lines, and supplements are bundled into routines that fit modern Japanese living spaces.",
    reinforcement:
      "Consultants translate benefits into bite-sized rituals so customers see and feel improvements quickly.",
    icon: CircleEqual
  },
  {
    title: "Community uplift programs",
    description:
      "Entrepreneurs receive mentorship, leadership academies, and collaborative spaces to co-create prosperity.",
    reinforcement:
      "From Osaka HQ to neighborhood salons, the brand fosters a learning culture where success stories compound.",
    icon: Wine
  }
];

const JOURNEY: Journey[] = [
  {
    stage: "Discovery salons",
    description:
      "Hosts design relaxed gatherings with hands-on demos covering skincare labs, nutrition tastings, and smart home solutions.",
    support:
      "Cloud MLM Software optimizes guest composition, sampling inventory, and multi-category storytelling for each event.",
    icon: Sparkles
  },
  {
    stage: "Habit engineering",
    description:
      "Consultants personalize daily routines, encourage progress tracking, and co-create goals that blend beauty with wellbeing.",
    support:
      "Automated prompts, AI checklists, and compliance-safe scripts keep every recommendation accurate and motivating.",
    icon: CircleGauge
  },
  {
    stage: "Momentum stewardship",
    description:
      "Post-event care includes subscription check-ins, seasonal workshops, and leadership pathways for emerging entrepreneurs.",
    support:
      "Predictive dashboards flag when relationships need attention, ensuring momentum translates into sustainable growth.",
    icon: BarChart3
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Omnichannel ritual designer",
    description:
      "Blends purchase data, lifestyle inputs, and seasonal campaigns to recommend the next high-impact bundle for every household.",
    payoff: "Boosts retention while keeping inventory rotations and compliance aligned with brand standards.",
    icon: ChartPieSlice
  },
  {
    title: "Field intelligence cockpit",
    description:
      "Gives leaders a live view into consultant performance, customer satisfaction, and academy participation.",
    payoff: "Turns data into coaching moments that elevate both customer delight and earnings progression.",
    icon: CircleGauge
  },
  {
    title: "Innovation feedback loop",
    description:
      "Captures testimonials, product ratings, and emerging trends to inform R&D and marketing within one secure space.",
    payoff: "Keeps the pipeline of skincare, nutrition, and home solutions ahead of consumer expectations.",
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Miki Corp MLM Blueprint: Japanese Wellness & Community Growth";
  const description =
    "Understand how Miki Corp’s $498M wellness ecosystem, Osaka mentorship culture, and product innovation thrive with Cloud MLM Software.";
  const keywords = [
    "Miki Corp MLM analysis",
    "Japanese wellness MLM",
    "Miki Corp consultant enablement",
    "home and skincare direct selling",
    "Cloud MLM Software for Miki Corp"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/miki-corp", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MikiCorpPageProps = {
  params: { lang: SupportedLocale };
};

export default function MikiCorpPage({ params }: MikiCorpPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-[#031621] via-[#0a2a3b] to-[#102942] px-8 py-20 text-white shadow-lg dark:border-cyan-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(34, 211, 238, 0.35), transparent 55%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.25), transparent 62%), radial-gradient(circle at 50% 88%, rgba(20, 184, 166, 0.3), transparent 60%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Miki Corp • Osaka wellness leadership
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Miki Corp transforms holistic wellness into community-driven entrepreneurship across Japan.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              From skincare science to home innovation, Miki Corp empowers consultants to make wellbeing tangible. Cloud MLM Software synchronizes
              data, rituals, and training so every interaction feels personal, trustworthy, and future-ready.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  Walk through the wellness command center
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50">
                <Link href={contactHref}>
                  Co-create your consultant journey
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">Ranked #32 globally with 280 teammates supporting person-to-person mentorship nationwide.</p>
          </div>
          <aside className="relative rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-lg">
            <div className="absolute inset-y-0 right-[-25%] w-1/2 bg-gradient-to-b from-cyan-200/30 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Ecosystem building blocks</h2>
            <ul className="mt-6 grid gap-4">
              <li className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Product houses</p>
                <p className="text-base font-semibold text-white">Advanced skincare labs, nutrition R&D, and smart home care innovation.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Community DNA</p>
                <p className="text-base font-semibold text-white">Mentorship, collaborative learning, and inclusive prosperity drives.</p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Growth mindset</p>
                <p className="text-base font-semibold text-white">Transform wellness outcomes into enduring entrepreneurial success.</p>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Signals informing our partnership</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            By grounding every recommendation in Miki Corp’s realities, we help you scale sustainably while honoring brand heritage.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.label}
                className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-cyan-400/30 dark:bg-cyan-950/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-transparent to-transparent dark:from-cyan-500/10" aria-hidden />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-200">{signal.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[2.5rem] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-emerald-50 px-8 py-16 shadow-sm dark:border-cyan-400/30 dark:from-[#05121c] dark:via-[#061521] dark:to-[#0f1f2e]">
        <div className="grid gap-10 lg:grid-cols-3">
          {INNOVATIONS.map((innovation) => {
            const Icon = innovation.icon;
            return (
              <article key={innovation.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{innovation.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{innovation.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{innovation.reinforcement}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Consultant journey choreography</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We turn Miki Corp’s people-first philosophy into repeatable pathways that drive customer delight and business advancement.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEY.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.stage}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm dark:border-cyan-400/30 dark:bg-cyan-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.stage}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{phase.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{phase.support}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software plays for Miki Corp</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Intelligent orchestration keeps consultants inspired, customers delighted, and leadership confident in every decision.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm dark:border-cyan-400/30 dark:bg-cyan-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{play.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{play.payoff}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Review pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-900 hover:bg-cyan-50 dark:bg-white/10 dark:text-cyan-100">
            <Link href={contactHref}>
              Schedule a wellness operating model session
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
