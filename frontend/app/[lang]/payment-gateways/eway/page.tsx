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
  AirplaneTakeoff,
  ArrowSquareOut,
  ChartLineUp,
  CirclesThree,
  ClipboardCheck,
  GlobeHemisphereWest,
  MapTrifold,
  MonitorPlay,
  RocketLaunch,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  title: string;
  stat: string;
  description: string;
  icon: IconType;
};

type IntegrationStep = {
  step: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type ModuleLane = {
  headline: string;
  content: string[];
};

type PlanAlignment = {
  title: string;
  insight: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    title: "Australian coverage",
    stat: "Nationwide acquiring",
    description:
      "eWAY routes card, wallet, and BNPL payments across Australia. Cloud MLM Software narrates each journey for enterprise stakeholders.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Launch tempo",
    stat: "30-day programme",
    description:
      "Custom Demo, Pre-set Demo, and AI scripts shorten the path from strategy to production for local and global brands.",
    icon: RocketLaunch
  },
  {
    title: "Operational trust",
    stat: "Always-on compliance",
    description:
      "Ledger automation, dispute tooling, and backup programmes keep finance, legal, and support teams confident.",
    icon: ShieldCheck
  }
];

const INTEGRATION_STEPS: IntegrationStep[] = [
  {
    step: "01",
    focus: "Narrative ignition",
    detail:
      "Reframe the archived promise—secure, fast, seamless—into media packs, investor decks, and AI prompt libraries tailored to Australia.",
    icon: MapTrifold
  },
  {
    step: "02",
    focus: "Experience choreography",
    detail:
      "Design enrolment, checkout, and payout journeys that blend eWAY capabilities with Cloud MLM Software modules and analytics.",
    icon: MonitorPlay
  },
  {
    step: "03",
    focus: "Operational confidence",
    detail:
      "Configure Multi currency, E-Wallet, Ticketing, and Backup Manager modules for dependable reconciliation and support.",
    icon: ClipboardCheck
  },
  {
    step: "04",
    focus: "Growth storytelling",
    detail:
      "Publish thought-leadership, distributor enablement, and analyst briefings backed by live eWAY telemetry.",
    icon: ChartLineUp
  }
];

const MODULE_LANES: ModuleLane[] = [
  {
    headline: "Revenue ignition",
    content: [
      "Custom Demo shows enterprise buyers a bespoke Australian compensation setup with eWAY automation.",
      "Pre-set Demo gives partners a hands-on sandbox to evaluate enrolment and checkout journeys.",
      "Features library feeds SEO+AIO content to marketing, analysts, and AI discovery."
    ]
  },
  {
    headline: "Financial clarity",
    content: [
      "Multi currency module reconciles AUD with global expansions in USD, NZD, and more.",
      "E-Wallet module distributes commissions instantly after eWAY settlement cycles.",
      "Backup Manager ensures audit-ready snapshots for compliance reviews."
    ]
  },
  {
    headline: "Support excellence",
    content: [
      "Ticket system triages payment escalations with tags, SLAs, and sentiment cues.",
      "Auto responder delivers real-time updates and educational prompts to distributors.",
      "E-Voucher module launches incentives around eWAY adoption milestones."
    ]
  }
];

const PLAN_ALIGNMENTS: PlanAlignment[] = [
  {
    title: "Binary & Matrix plans",
    insight:
      "Analytics monitor leg balance, highlighting when payment approvals trend below targets so leaders can respond quickly."
  },
  {
    title: "Board & Gift plans",
    insight:
      "Event-driven vouchers and transparent dashboards reinforce trust throughout board progression and gifting cycles."
  },
  {
    title: "Unilevel & Generation plans",
    insight:
      "AI narration converts eWAY telemetry into coaching moments, keeping deep tiers aligned on momentum and retention."
  },
  {
    title: "Hybrid innovations",
    insight:
      "Scenario planning tests new promotions, BNPL combinations, and affiliate incentives with predictive forecasts."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "eWAY Payment Gateway for Cloud MLM Software";
  const description =
    "Activate an eWAY-powered Cloud MLM Software experience with Australian-first storytelling, resilient modules, and AI-ready analytics.";

  return {
    title,
    description,
    keywords: [
      "eWAY payment gateway",
      "Australia MLM software payments",
      "Cloud MLM Software eWAY integration",
      "direct selling payment orchestration",
      "AI-ready checkout Australia"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/eway", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EwayPageProps = {
  params: { lang: SupportedLocale };
};

export default function EwayPage({ params }: EwayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-tr from-cyan-50 via-white to-slate-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-cyan-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-y-0 right-0 w-1/2 translate-x-1/3 bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
          <header className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <AirplaneTakeoff className="h-4 w-4" aria-hidden />
                Australia growth runway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                eWAY Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We take the archived WordPress story and elevate it into an Australian-first programme. eWAY settlements,
                Cloud MLM Software modules, and AI narration combine to deliver a secure, fast, and seamless journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Preview eWAY demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Schedule stakeholder briefing</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-3xl border border-cyan-100 bg-white/90 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.title}
                    className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-200">
                          {metric.title}
                        </p>
                        <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{metric.stat}</h2>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </header>
          <div className="rounded-3xl border border-slate-100 bg-white/95 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Integration roadmap built for eWAY
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {INTEGRATION_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-cyan-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                        Step {step.step}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.focus}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{step.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Module lanes
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Demos and modules orchestrated for Australian growth
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software transforms the archive’s list—Custom Demo, Pre-set Demo, Multi currency, Ticketing, and
              more—into lanes that keep revenue, finance, and support teams aligned.
            </p>
          </header>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {MODULE_LANES.map((lane) => (
              <article
                key={lane.headline}
                className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-cyan-200 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{lane.headline}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-200">
                  {lane.content.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <CirclesThree className="mt-0.5 h-4 w-4 text-cyan-500" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align eWAY with every compensation plan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Board, Gift, Unilevel, Generation, Hybrid—the archived WordPress site listed the plans you
              deliver. We ensure each one benefits from eWAY intelligence, predictive analytics, and AI narration.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {PLAN_ALIGNMENTS.map((alignment) => (
                <article
                  key={alignment.title}
                  className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-6 shadow-inner transition hover:border-cyan-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{alignment.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{alignment.insight}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Australian spotlight</h3>
              <p className="text-sm leading-6 text-slate-200">
                August 28, 2024 – the archive lists eWAY with Australia as the supported country. Cloud MLM Software turns
                that insight into executive dashboards, regulatory updates, and distributor enablement packages.
              </p>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                <strong>Executive dashboards:</strong> monitor conversion velocity, chargeback trends, and settlement KPIs.
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                <strong>Support playbooks:</strong> autoresponders and ticket macros tackle common eWAY scenarios in minutes.
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                <strong>Thought leadership:</strong> blog blueprints, webinar guides, and media pitches highlight your eWAY advantage.
              </div>
            </div>
            <Link
              href="/network-marketing-software-company-providing-affordable-mlm-system-in-australia/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/15"
            >
              Read Australia market insights
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-cyan-100 bg-cyan-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate eWAY with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let’s convert the archived promise into a living, measurable programme that positions your organisation as
            Australia’s thought leader in direct selling payments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/services", locale)}>Explore professional services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Activate managed support</Link>
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
