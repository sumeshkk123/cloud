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
  Earth,
  Flame,
  Globe2,
  HeartPulse,
  LeafyGreen,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  Wind
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

type SustainabilityPillar = {
  title: string;
  description: string;
  impact: string;
  icon: IconType;
};

type ConsultantJourney = {
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
    value: "$3.67B",
    detail: "Natura &Co flagship brand reaching 100M+ customers with responsible beauty.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1969",
    detail: "Brazilian roots focused on Amazonian biodiversity and regenerative supply chains.",
    icon: Factory
  },
  {
    label: "Compensation",
    value: "Single level relationship selling",
    detail: "Beauty Consultants nurture long-term relationships rooted in trust and sustainability.",
    icon: Users
  },
  {
    label: "Employees",
    value: "6,400+",
    detail: "Teams across São Paulo, innovation hubs, and global market offices.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "Brazil (global reach)",
    detail: "Vibrant communities across Latin America, Europe, and digital-first regions.",
    icon: Globe2
  },
  {
    label: "Product ecosystem",
    value: "Cosmetics • Fragrance • Personal care",
    detail: "Refill systems, vegan formulas, and co-creation with Amazon partners.",
    icon: LeafyGreen
  }
];

const SUSTAINABILITY_PILLARS: SustainabilityPillar[] = [
  {
    title: "B Corp leadership",
    description:
      "First publicly traded company to achieve B Corp certification, balancing profit with people and planet.",
    impact:
      "Transparent governance, science-based targets, and stakeholder capitalism define every initiative.",
    icon: ShieldCheck
  },
  {
    title: "Amazon ingredient guardianship",
    description:
      "Partnerships with over 40 Amazonian communities ensure biodiversity conservation and socio-economic autonomy.",
    impact:
      "Regenerative sourcing, fair trade agreements, and traceable supply chains uplift local economies.",
    icon: Sprout
  },
  {
    title: "Circular beauty innovation",
    description:
      "Refillable packaging, eco-efficiency labs, and carbon-conscious logistics reduce environmental footprints.",
    impact:
      "Carbon-neutral operations and zero-deforestation commitments make sustainability tangible for every consultant.",
    icon: Wind
  }
];

const CONSULTANT_JOURNEY: ConsultantJourney[] = [
  {
    stage: "Immerse in purposeful storytelling",
    description:
      "Consultants introduce Natura’s biodiversity journey via sensory kits, community films, and impact dashboards.",
    enablement:
      "Cloud MLM Software curates localized narratives, impact stats, and compliance cues to spark authentic dialogues.",
    icon: Earth
  },
  {
    stage: "Co-create regenerative routines",
    description:
      "Customers receive personalized rituals that blend skincare, fragrance, and wellbeing aligned with personal values.",
    enablement:
      "AI recommendations match skin needs, lifestyle data, and refill schedules while tracking carbon savings.",
    icon: HeartPulse
  },
  {
    stage: "Amplify community impact",
    description:
      "Consultants lead eco-challenges, recycling drives, and social impact campaigns that grow both business and biodiversity.",
    enablement:
      "Dashboards measure participation, impact, and recognition moments so leaders can celebrate and scale best practices.",
    icon: Sparkles
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Regenerative commerce cockpit",
    description:
      "Connects sourcing data, carbon metrics, and community investments to guide ethical decision-making.",
    payoff: "Keeps consultants and leaders aligned with Natura’s 2030 sustainability vision.",
    icon: LeafyGreen
  },
  {
    title: "Experience quality radar",
    description:
      "Monitors event feedback, customer sentiment, and refill adoption to signal coaching opportunities.",
    payoff: "Ensures every interaction reflects Natura’s standard of care and purpose.",
    icon: Flame
  },
  {
    title: "Impact storytelling studio",
    description:
      "House approved visuals, audio stories, and community interviews ready for omnichannel campaigns.",
    payoff: "Helps consultants amplify purpose-driven narratives with brand-safe agility.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Natura MLM Strategy: Regenerative Beauty & Purpose-Driven Growth";
  const description =
    "See how Natura’s $3.67B regenerative beauty ecosystem thrives with Cloud MLM Software orchestration, impact intelligence, and consultant enablement.";
  const keywords = [
    "Natura MLM analysis",
    "regenerative beauty direct selling",
    "B Corp MLM strategy",
    "Natura consultant enablement",
    "Cloud MLM Software for Natura"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/natura", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NaturaPageProps = {
  params: { lang: SupportedLocale };
};

export default function NaturaPage({ params }: NaturaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200 bg-gradient-to-br from-[#02140d] via-[#0c2a1f] to-[#142946] px-8 py-20 text-white shadow-lg dark:border-emerald-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(34, 197, 94, 0.35), transparent 55%), radial-gradient(circle at 78% 18%, rgba(56, 189, 248, 0.25), transparent 62%), radial-gradient(circle at 45% 86%, rgba(134, 239, 172, 0.28), transparent 60%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
              Natura • Regenerative beauty pioneer
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Natura proves that sustainable storytelling and human-led selling can transform global beauty.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              As the world’s first publicly traded B Corp, Natura partners with Amazonian communities and millions of consultants to deliver purpose with every product. Cloud MLM Software ensures that impact, compliance, and growth move in harmony.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  Experience the impact intelligence demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                <Link href={contactHref}>
                  Plan your regenerative operating model
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">
              Ranked #6 globally with 6,400 employees empowering over 1.7M consultants worldwide.
            </p>
          </div>
          <aside className="relative space-y-5 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
            <div className="absolute inset-y-0 right-[-28%] w-1/2 bg-gradient-to-b from-emerald-300/40 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Purpose markers</h2>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Biodiversity promise</p>
                <p className="text-base font-semibold text-white">Co-creating value with Amazon partner communities.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Circular packaging</p>
                <p className="text-base font-semibold text-white">Refill stations, recycled materials, and zero waste ambitions.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Community empowerment</p>
                <p className="text-base font-semibold text-white">Training, entrepreneurship, and equality programs across LATAM.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Signals informing every decision</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Our advisory lens combines revenue health, sustainability momentum, and community outcomes.
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

      <section className="container overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-sky-50 px-8 py-16 shadow-sm dark:border-emerald-400/30 dark:from-[#04150c] dark:via-[#061c13] dark:to-[#101f2e]">
        <div className="grid gap-10 lg:grid-cols-3">
          {SUSTAINABILITY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{pillar.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">{pillar.impact}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Consultant journey choreography</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Natura consultants combine joy and purpose. We make their magic scalable without losing heart.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CONSULTANT_JOURNEY.map((phase, index) => {
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
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">{phase.enablement}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software plays with Natura</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Intelligent orchestration keeps consultants inspired, customers cared for, and the planet top of mind.
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
              Schedule a regenerative growth workshop
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
