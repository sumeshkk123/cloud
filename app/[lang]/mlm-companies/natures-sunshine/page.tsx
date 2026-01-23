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
  Factory,
  FlaskConical,
  Globe2,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sprout,
  Users
} from "lucide-react";
import { ChartLineUp, UsersThree, Warehouse } from "@phosphor-icons/react/dist/ssr";

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
  evidence: string;
  icon: IconType;
};

type Journey = {
  stage: string;
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
    value: "$365M",
    detail: "Herbal supplements and nutritional science powering global wellness households.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1972",
    detail: "Lehi, Utah heritage built on encapsulating herbs and controlling the production chain.",
    icon: Warehouse
  },
  {
    label: "Compensation",
    value: "Multilevel",
    detail: "Consultants mentor families with science-backed wellness protocols.",
    icon: Users
  },
  {
    label: "Employees",
    value: "1,000+",
    detail: "Manufacturing, R&D, and field success teams aligned around purity and potency.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "United States (global reach)",
    detail: "Growing communities across North America, Asia, and EU markets.",
    icon: Globe2
  },
  {
    label: "Product families",
    value: "Herbal blends • Vitamins • Personal care",
    detail: "In-house production ensures ingredient integrity and traceability.",
    icon: Sprout
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Vertical manufacturing excellence",
    description:
      "Nature’s Sunshine owns every step—from raw ingredient testing to encapsulation and packaging—guaranteeing purity.",
    evidence:
      "More than 600 quality tests per batch, pharmacopeia-grade standards, and FDA-registered facilities support every claim.",
    icon: Factory
  },
  {
    title: "Clinical and herbal science integration",
    description:
      "Product innovation teams blend traditional herbal wisdom with modern research to solve today’s wellness challenges.",
    evidence:
      "Scientific advisory boards, peer-reviewed studies, and global partnerships keep the product roadmap future-proof.",
    icon: Microscope
  },
  {
    title: "Consultant empowerment culture",
    description:
      "Model focuses on education, personalized assessments, and interactive tools that build resilient wellness communities.",
    evidence:
      "Herbal hours, professional certification programs, and recognition systems foster long-term trust.",
    icon: HeartPulse
  }
];

const JOURNEY: Journey[] = [
  {
    stage: "Diagnostic confidence",
    description:
      "Consultants gather lifestyle data, nutrient gaps, and wellness goals using assessment tools rooted in herbal science.",
    enablement:
      "Cloud MLM Software synchronizes questionnaires, compliance guidance, and recommended starting kits per persona.",
    icon: ShieldCheck
  },
  {
    stage: "Precision protocol design",
    description:
      "Personalized supplement stacks, education resources, and habit loops keep families engaged and accountable.",
    enablement:
      "AI-driven planners flag potential interactions, auto-generate follow-ups, and align inventory with demand.",
    icon: FlaskConical
  },
  {
    stage: "Manufacturing transparency tours",
    description:
      "Virtual facility walkthroughs, quality dashboards, and community events reinforce trust in Nature’s Sunshine processes.",
    enablement:
      "Immersive content hubs and live data feeds highlight quality milestones, certifications, and sustainability programs.",
    icon: Factory
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Quality traceability cockpit",
    description:
      "Connects batch tests, sourcing data, and compliance documentation so consultants can answer any product question instantly.",
    payoff: "Transforms rigorous manufacturing into a market advantage at the point of sale.",
    icon: ShieldCheck
  },
  {
    title: "Protocol performance analytics",
    description:
      "Tracks adherence, reorder cadence, and wellness outcomes to suggest coaching moments and new bundles.",
    payoff: "Improves customer lifetime value while reinforcing the brand’s science-first promise.",
    icon: HeartPulse
  },
  {
    title: "Hybrid event engine",
    description:
      "Delivers playbooks for facility tours, herbal workshops, and digital summits with localized compliance cues.",
    payoff: "Keeps education experiences high-impact across regions and formats.",
    icon: Users
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Nature’s Sunshine MLM Strategy: Manufacturing Integrity & Herbal Wellness";
  const description =
    "Explore how Nature’s Sunshine’s $365M herbal manufacturing ecosystem thrives with Cloud MLM Software—uniting quality, compliance, and consultant empowerment.";
  const keywords = [
    "Nature's Sunshine MLM analysis",
    "herbal supplement direct selling",
    "vertical manufacturing MLM",
    "Nature's Sunshine consultant enablement",
    "Cloud MLM Software for Nature's Sunshine"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/natures-sunshine", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NaturesSunshinePageProps = {
  params: { lang: SupportedLocale };
};

export default function NaturesSunshinePage({ params }: NaturesSunshinePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-amber-200 bg-gradient-to-br from-[#140c02] via-[#36240f] to-[#10253a] px-8 py-20 text-white shadow-lg dark:border-amber-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(251, 191, 36, 0.35), transparent 55%), radial-gradient(circle at 78% 18%, rgba(56, 189, 248, 0.25), transparent 60%), radial-gradient(circle at 45% 86%, rgba(34, 197, 94, 0.3), transparent 60%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100">
              Nature’s Sunshine • Built on manufacturing integrity
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Nature’s Sunshine transforms raw herbs into trusted wellness protocols with in-house excellence.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              Owning the encapsulation process since 1972, the brand pairs rigorous testing with consultant-led education. Cloud MLM Software keeps every field interaction aligned with the quality story your facilities deliver daily.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  Explore the quality intelligence demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
                <Link href={contactHref}>
                  Map your manufacturing-to-field playbook
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">
              Ranked #40 worldwide with 1,000 employees supporting thousands of passionate herbal consultants.
            </p>
          </div>
          <aside className="relative space-y-5 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
            <div className="absolute inset-y-0 right-[-28%] w-1/2 bg-gradient-to-b from-amber-300/35 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Quality markers</h2>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">In-house encapsulation</p>
                <p className="text-base font-semibold text-white">Control over sourcing, blending, and bottling protects every label.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Scientific rigor</p>
                <p className="text-base font-semibold text-white">GMP labs, chromatography testing, and cross-functional R&D teams.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Field mentorship</p>
                <p className="text-base font-semibold text-white">Consultants trained to translate complex science into practical care.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Signals we analyze with you</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Revenue health, production metrics, and community engagement shape every advisory sprint.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <article
                key={metric.label}
                className="relative overflow-hidden rounded-3xl border border-amber-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-amber-400/30 dark:bg-amber-950/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/35 via-transparent to-transparent dark:from-amber-500/10" aria-hidden />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-200">{metric.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{metric.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[2.5rem] border border-amber-100 bg-gradient-to-br from-white via-amber-50 to-slate-50 px-8 py-16 shadow-sm dark:border-amber-400/30 dark:from-[#190f04] dark:via-[#1d1308] dark:to-[#101f2e]">
        <div className="grid gap-10 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{pillar.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-300">{pillar.evidence}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Consultant journey choreography</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We convert manufacturing mastery into field-friendly rituals that retain households and inspire leaders.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEY.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.stage}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm dark:border-amber-400/30 dark:bg-amber-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.stage}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{phase.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-300">{phase.enablement}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software plays</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Intelligent orchestration turns your quality story into measurable momentum for consultants and customers alike.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm dark:border-amber-400/30 dark:bg-amber-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{play.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-300">{play.payoff}</p>
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
          <Button asChild size="lg" variant="secondary" className="bg-white text-amber-900 hover:bg-amber-50 dark:bg-white/10 dark:text-amber-100">
            <Link href={contactHref}>
              Book a manufacturing excellence workshop
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
