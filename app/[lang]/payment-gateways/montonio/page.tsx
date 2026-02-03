import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowSquareOut,
  ChartLineUp,
  CompassTool,
  Cpu,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  MapPinLine,
  Notebook,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroChip = {
  title: string;
  value: string;
  detail: string;
};

type StoryWave = {
  title: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleGrid = {
  name: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type MarketStep = {
  region: string;
  status: string;
  narrative: string;
  link: string;
};

const HERO_CHIPS: HeroChip[] = [
  {
    title: "Archive snapshot",
    value: "28 Aug 2024",
    detail: "Montonio page recorded as secure, fast, seamless."
  },
  {
    title: "Launch locus",
    value: "Estonia first",
    detail: "Tallinn, Tartu, and Pärnu distributors become the early adopters."
  },
  {
    title: "Activation sprint",
    value: "6 weeks",
    detail: "Discovery to AI-ready storytelling and governance."
  }
];

const STORY_WAVES: StoryWave[] = [
  {
    title: "Secure, fast, seamless → measurable",
    description:
      "We transform the archived narrative into compliance dossiers, executive briefs, and AI prompt packs grounded in Baltic expectations.",
    icon: ShieldCheck
  },
  {
    title: "Open banking excellence",
    description:
      "Montonio’s marketplace of bank connections and BNPL options becomes a highlight across onboarding, checkout, and payout journeys.",
    icon: Cpu
  },
  {
    title: "Regional runway",
    description:
      "Extend Montonio success into Finland, Latvia, and Lithuania with localisation matrices, settlement guidance, and telemetry dashboards.",
    icon: GlobeHemisphereEast
  }
];

const PILLARS: Pillar[] = [
  {
    heading: "Narrative engineering",
    summary: "Align leadership, SEO, and AI copilots around the Montonio promise.",
    bullets: [
      "Executive brief reframing secure, fast, seamless for investors and analysts.",
      "SEO & AIO clusters focused on Estonia, Nordics, and direct selling payments.",
      "Prompt libraries ensuring chatbots deliver compliant Montonio insights."
    ],
    icon: Sparkle
  },
  {
    heading: "Experience design",
    summary: "Design journeys that prove Montonio’s open banking convenience.",
    bullets: [
      "Prototype web and mobile experiences for onboarding, checkout, and payouts.",
      "Instrumentation capturing conversion lift, decline remediation, and fraud analytics.",
      "Localized copy supporting Estonian and English audiences."
    ],
    icon: DeviceMobile
  },
  {
    heading: "Operational intelligence",
    summary: "Govern finance, support, and growth with live telemetry.",
    bullets: [
      "Multi currency automation across EUR, USD, and Nordic currencies.",
      "Support playbooks combining AI summarisation with SLA oversight.",
      "Dashboards surfacing retention, churn, and incentive performance."
    ],
    icon: ChartLineUp
  }
];

const MODULE_GRIDS: ModuleGrid[] = [
  {
    name: "Revenue runway",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase Montonio flows with KPI overlays for enterprise prospects.",
      "Balance currency ledgers with audited approvals and reporting.",
      "Embed Montonio connectors into Shopify, WooCommerce, and custom experiences."
    ],
    icon: SquaresFour
  },
  {
    name: "Member assurance",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts aligned to Montonio settlement confirmations.",
      "Maintain encrypted backups for EU data governance requirements.",
      "Resolve tickets with AI summarisation and escalation guidance."
    ],
    icon: MapPinLine
  },
  {
    name: "Growth narration",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Trigger lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks and knowledge hubs that spotlight Montonio.",
      "Monitor compensation and expansion through live analytics."
    ],
    icon: TrendUp
  }
];

const MARKET_STEPS: MarketStep[] = [
  {
    region: "Estonia",
    status: "Live adoption",
    narrative:
      "Montonio is entrenched in Estonian commerce. We ensure localisation, compliance alignment, and distributor enablement keep the gateway front and centre.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-estonia/"
  },
  {
    region: "Nordic-Baltic expansion",
    status: "Poised next",
    narrative:
      "Extend the playbook into Finland, Latvia, and Lithuania with regional payment preferences and AI knowledge bases.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Montonio Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Translate Montonio’s secure, fast, seamless promise into measurable Baltic growth. Cloud MLM Software delivers AI-ready narratives, open banking journeys, and governed operations.";

  return {
    title,
    description,
    keywords: [
      "Montonio payment gateway",
      "Montonio Cloud MLM Software integration",
      "Estonia MLM payments",
      "Baltic payment orchestration",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/montonio", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MontonioPageProps = {
  params: { lang: SupportedLocale };
};

export default function MontonioPage({ params }: MontonioPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-black" />
        <div className="absolute left-12 top-10 h-56 w-56 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute right-16 top-24 h-44 w-44 rounded-full bg-emerald-400/30 blur-2xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Montonio gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Montonio Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-cyan-100">
                The archived WordPress page already proclaims Montonio as secure, fast, seamless. We convert that copy into a
                Baltic launch programme where leadership, distributors, and AI copilots share proof-backed stories.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Montonio demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Plan the launch session</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">Archive highlights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_CHIPS.map((chip) => (
                  <div key={chip.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200">{chip.title}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{chip.value}</p>
                    <p className="mt-2 text-xs leading-5 text-cyan-100">{chip.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {STORY_WAVES.map((wave) => {
                  const Icon = wave.icon;
                  return (
                    <article key={wave.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{wave.title}</h2>
                      <p className="text-sm leading-6 text-cyan-100">{wave.description}</p>
                    </article>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 px-10 py-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Programme pillars
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three pillars that operationalise the Montonio promise
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative engineering, experience design, and operational intelligence turn secure, fast, seamless into a
              measurable programme for Baltic leadership.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pillar.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{pillar.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-cyan-500" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-cyan-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module grids orchestrated for Montonio telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We combine Cloud MLM Software modules so revenue, finance, and support teams operate from the same Montonio
              insights.
            </p>
            <Link
              href="/payment-gateways/montonio/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
            >
              View the archived Montonio page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_GRIDS.map((grid) => {
              const Icon = grid.icon;
              return (
                <article
                  key={grid.name}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{grid.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {grid.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {grid.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-cyan-500" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-slate-100 bg-white/95 px-10 py-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Activation timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Six-week Montonio acceleration roadmap
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Archive synthesis, KPI baselining, and narrative reframing for Baltic leadership.",
                icon: Notebook
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, integration scripts, and telemetry instrumentation.",
                icon: CompassTool
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt deployment, and media storytelling across the region.",
                icon: ChartLineUp
              }
            ].map((milestone) => {
              const Icon = milestone.icon;
              return (
                <article
                  key={milestone.phase}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{milestone.phase}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{milestone.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Market steps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Estonia leadership with Nordic-Baltic expansion in focus
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive referenced Montonio support across numerous countries. We convert that reach into actionable
              market steps.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_STEPS.map((step) => (
              <article
                key={step.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {step.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{step.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{step.narrative}</p>
                <Link
                  href={step.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
                >
                  Continue discovery
                  <ArrowSquareOut className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-cyan-200 bg-cyan-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead the Baltics with Montonio and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with us to align leadership, distributors, and AI copilots around the Montonio story—secure, fast,
            seamless, and now measurable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact/">Speak with a payment strategist</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review delivery options</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
