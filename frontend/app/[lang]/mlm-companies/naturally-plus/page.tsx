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
  AirVent,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users
} from "lucide-react";
import { ChartLineUp, Factory, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type WellnessPillar = {
  title: string;
  description: string;
  evidence: string;
  icon: IconType;
};

type Journey = {
  step: string;
  description: string;
  enablement: string;
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
    value: "$236M",
    detail: "Premium supplements like Super Lutein and Izumio anchor global trust.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1999",
    detail: "Tokyo-based wellness company expanding across Asia and beyond.",
    icon: Factory
  },
  {
    label: "Compensation",
    value: "Multilevel relationship model",
    detail: "Members build communities with education-first wellness conversations.",
    icon: Users
  },
  {
    label: "Employees",
    value: "419+",
    detail: "Scientists, educators, and field mentors orchestrating compliant growth.",
    icon: UsersThree
  },
  {
    label: "Primary markets",
    value: "Japan • Taiwan • Hong Kong • Korea • Singapore • Malaysia • Indonesia",
    detail: "Transnational expansion focuses on regulatory compliance and cultural nuance.",
    icon: Globe2
  },
  {
    label: "Product portfolio",
    value: "Nutrition • Personal care • Wellness beverages",
    detail: "Natural ingredients, patented formulations, and measurable results.",
    icon: Leaf
  }
];

const WELLNESS_PILLARS: WellnessPillar[] = [
  {
    title: "Clinical integrity",
    description:
      "Global R&D partners validate ingredient efficacy and bioavailability before market introduction.",
    evidence:
      "ISO-certified manufacturing, third-party lab reports, and physician advisory councils build confidence.",
    icon: Stethoscope
  },
  {
    title: "Lifestyle empowerment",
    description:
      "Members educate households on proactive health, hydration, and nutrition habits grounded in science.",
    evidence:
      "Wellness academies, documentary-style content, and health diaries keep communities informed and inspired.",
    icon: HeartPulse
  },
  {
    title: "Borderless community",
    description:
      "From Tokyo to Jakarta, Naturally Plus fosters culturally inclusive events, retreats, and digital summits.",
    evidence:
      "Multilingual assets, regional leadership programs, and philanthropic outreach strengthen loyalty.",
    icon: Sparkles
  }
];

const JOURNEY: Journey[] = [
  {
    step: "Discover purposeful wellness",
    description:
      "Members host hybrid sessions mixing personal stories, product science, and live Q&A to demystify supplementation.",
    enablement:
      "Cloud MLM Software curates compliant scripts, data visualizations, and regulatory notes per country.",
    icon: ShieldCheck
  },
  {
    step: "Engineer personalized routines",
    description:
      "Customers receive tailored combinations covering antioxidants, hydration, and daily resilience.",
    enablement:
      "AI prompts recommend stacks, track progress markers, and forecast refill timing for each household.",
    icon: AirVent
  },
  {
    step: "Sustain thriving communities",
    description:
      "Members organize wellness challenges, charity efforts, and leadership pathways that celebrate collective wins.",
    enablement:
      "Dashboards capture sentiment, retention, and compliance signals so leaders intervene with empathy and precision.",
    icon: Users
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Regulatory intelligence hub",
    description:
      "Tracks ingredient approvals, labeling updates, and cross-border compliance to keep teams protected.",
    payoff: "Speeds market entry while maintaining industry-leading transparency.",
    icon: ShieldCheck
  },
  {
    title: "Wellness impact analytics",
    description:
      "Blends product usage data, customer feedback, and health goals into actionable coaching cues.",
    payoff: "Increases lifetime value through proactive care and data-backed storytelling.",
    icon: HeartPulse
  },
  {
    title: "Global community studio",
    description:
      "Hosts multilingual assets, webinar kits, and localized campaigns for rapid deployment.",
    payoff: "Keeps narratives culturally relevant and brand-consistent across every region.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Naturally Plus MLM Strategy: Global Wellness & Science-Led Communities";
  const description =
    "Discover how Naturally Plus’ $236M wellness ecosystem scales with Cloud MLM Software—uniting compliance, education, and member impact.";
  const keywords = [
    "Naturally Plus MLM analysis",
    "global wellness direct selling",
    "supplement MLM compliance",
    "Naturally Plus consultant enablement",
    "Cloud MLM Software for Naturally Plus"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/naturally-plus", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NaturallyPlusPageProps = {
  params: { lang: SupportedLocale };
};

export default function NaturallyPlusPage({ params }: NaturallyPlusPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-cyan-200 bg-gradient-to-br from-[#03101a] via-[#0f2e3f] to-[#122442] px-8 py-20 text-white shadow-lg dark:border-cyan-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 20% 18%, rgba(6, 182, 212, 0.32), transparent 55%), radial-gradient(circle at 78% 20%, rgba(56, 189, 248, 0.25), transparent 60%), radial-gradient(circle at 45% 86%, rgba(16, 185, 129, 0.3), transparent 60%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Naturally Plus • Global wellness advocates
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Naturally Plus unites science, nature, and community to elevate wellbeing across continents.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              From Tokyo to Singapore, members rely on premium supplements and heartfelt coaching. Cloud MLM Software orchestrates compliance,
              education, and data so every conversation feels personal and credible.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  See the wellness intelligence cockpit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50">
                <Link href={contactHref}>
                  Build a multi-market enablement plan
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">Ranked #51 globally with 419 employees supporting a fast-scaling wellness network.</p>
          </div>
          <aside className="relative space-y-5 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
            <div className="absolute inset-y-0 right-[-28%] w-1/2 bg-gradient-to-b from-cyan-300/35 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Wellness differentiators</h2>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Flagship science</p>
                <p className="text-base font-semibold text-white">Super Lutein antioxidants and Izumio hydrogenised water lead the portfolio.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Transnational focus</p>
                <p className="text-base font-semibold text-white">Cultural nuance and regulatory readiness across Asia-Pacific markets.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Community-first culture</p>
                <p className="text-base font-semibold text-white">Education circles, philanthropy, and leadership academies reinforce belonging.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Signals guiding our partnership</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We align Cloud MLM Software with Naturally Plus realities, from regulatory shifts to customer loyalty trends.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.label}
                className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-cyan-400/30 dark:bg-cyan-950/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-transparent to-transparent dark:from-cyan-500/10" aria-hidden />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-200">{metric.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{metric.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[2.5rem] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-emerald-50 px-8 py-16 shadow-sm dark:border-cyan-400/30 dark:from-[#04161a] dark:via-[#071d23] dark:to-[#101f2e]">
        <div className="grid gap-10 lg:grid-cols-3">
          {WELLNESS_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{pillar.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{pillar.evidence}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Member journey choreography</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We translate Naturally Plus’ human warmth into repeatable, data-informed steps for every market.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEY.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.step}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm dark:border-cyan-400/30 dark:bg-cyan-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.step}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{phase.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{phase.enablement}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software partnership plays</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Intelligent orchestration keeps Naturally Plus compliant, connected, and customer-obsessed across regions.
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
              Review platform pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-900 hover:bg-cyan-50 dark:bg-white/10 dark:text-cyan-100">
            <Link href={contactHref}>
              Schedule a cross-border wellness lab
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
