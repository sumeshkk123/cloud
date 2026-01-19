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
  Bank,
  Books,
  ChartLineUp,
  Circuitry,
  ClockCountdown,
  CloudLightning,
  GlobeHemisphereSouth,
  GridFour,
  Handshake,
  Lightning,
  MapTrifold,
  Notebook,
  Signpost,
  Sparkle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  title: string;
  caption: string;
  icon: IconType;
};

type IntegrationWave = {
  phase: string;
  focus: string;
  detail: string;
  evidence: string;
  icon: IconType;
};

type ModuleCluster = {
  pillar: string;
  narrative: string;
  highlights: string[];
  icon: IconType;
};

type RegionalStory = {
  country: string;
  narrative: string;
  cta: string;
  href: string;
};

const HERO_BADGES: HeroBadge[] = [
  {
    title: "Zimbabwe & Lesotho ready",
    caption:
      "EcoCash adoption is strong across Southern Africa—our WordPress archive highlights both markets in August 2024.",
    icon: GlobeHemisphereSouth
  },
  {
    title: "AI narrated demos",
    caption:
      "Custom Demo and Pre-set Demo flow into launch scripts that guide distributors, analysts, and support teams.",
    icon: Sparkle
  },
  {
    title: "Executive alignment in days",
    caption:
      "Dashboards, migration plans, and compliance packs keep stakeholders confident from kickoff to scale-up.",
    icon: ClockCountdown
  }
];

const INTEGRATION_WAVES: IntegrationWave[] = [
  {
    phase: "Wave 1",
    focus: "Narrative and assurance",
    detail:
      "Translate the archived messaging—secure, fast, seamless—into segments for executives, regulators, and AI assistants.",
    evidence: "Thought-leadership schedule, media angles, and AI prompt cards ready for PR teams.",
    icon: Books
  },
  {
    phase: "Wave 2",
    focus: "Module choreography",
    detail:
      "Link Multi currency, E-Wallet, Backup Manager, and Ticketing modules into a single EcoCash-ready tapestry.",
    evidence: "Blueprints covering wallet top-ups, currency conversion, backup checkpoints, and escalation flows.",
    icon: Circuitry
  },
  {
    phase: "Wave 3",
    focus: "Operational resilience",
    detail:
      "Automate reconciliations, field notifications, and incentive triggers so Zimbabwean and Basotho distributors stay engaged.",
    evidence: "Playbooks for marketing nudges, compliance alerts, and AIO-optimised knowledge bases.",
    icon: CloudLightning
  },
  {
    phase: "Wave 4",
    focus: "Expansion experiments",
    detail:
      "Launch multi-market offers, cross-border payouts, and hybrid compensation pilots informed by live data.",
    evidence: "Experiment backlogs, KPI dashboards, and analyst-ready stories for future markets.",
    icon: ChartLineUp
  }
];

const MODULE_CLUSTERS: ModuleCluster[] = [
  {
    pillar: "Revenue ignition",
    narrative:
      "Use Custom Demo, Pre-set Demo, and Features library to compress sales cycles while showcasing EcoCash in action.",
    highlights: [
      "Custom Demo mirrors local compensation plans for Zimbabwe and Lesotho enterprises.",
      "Pre-set Demo equips partners with ready-to-share experiences on short notice.",
      "Features hub feeds SEO+AIO content to blogs, guides, and sales collateral."
    ],
    icon: GridFour
  },
  {
    pillar: "Financial clarity",
    narrative:
      "Multi currency, E-Wallet, and Backup Manager keep treasury confident as EcoCash remittances flow across borders.",
    highlights: [
      "Multi currency module aligns EcoCash balances with USD, ZAR, and local currency ledgers.",
      "E-Wallet module monitors incentive pools and instant payouts for mobile money recipients.",
      "Backup Manager preserves every transaction trail for audits and stress events."
    ],
    icon: Bank
  },
  {
    pillar: "Support intelligence",
    narrative:
      "Ticketing, Auto responder, and E-Voucher provide always-on troubleshooting and incentive management.",
    highlights: [
      "Ticket system tags EcoCash issues with sentiment signals and SLA monitors.",
      "Auto responder delivers contextual answers in English, Shona, Sesotho, and more.",
      "E-Voucher module rewards adoption milestones with instant digital incentives."
    ],
    icon: UsersThree
  }
];

const REGIONAL_STORIES: RegionalStory[] = [
  {
    country: "Zimbabwe",
    narrative:
      "EcoCash dominates everyday transactions. Cloud MLM Software synchronises wallet deposits, commissions, and support touchpoints for fast-scaling distributors.",
    cta: "See Zimbabwe coverage",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-zimbabwe/"
  },
  {
    country: "Lesotho",
    narrative:
      "Lesotho-based teams demand compliance-ready reporting and mobile-first experiences. AI narration keeps leadership and regulators aligned on progress.",
    cta: "Discover Lesotho initiatives",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-lesotho/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "EcoCash Payment Gateway for Cloud MLM Software";
  const description =
    "Launch an EcoCash-powered Cloud MLM Software experience with regional storytelling, resilient modules, and AI-ready analytics for Zimbabwe and Lesotho.";

  return {
    title,
    description,
    keywords: [
      "EcoCash payment gateway",
      "Zimbabwe mobile money MLM software",
      "Lesotho direct selling payments",
      "Cloud MLM Software EcoCash integration",
      "AI payment orchestration Africa"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/ecocash", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EcoCashPageProps = {
  params: { lang: SupportedLocale };
};

export default function EcoCashPage({ params }: EcoCashPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-bl from-sky-50 via-white to-lime-50 px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-bl dark:from-sky-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-200/30 via-transparent to-transparent blur-3xl dark:from-sky-500/10" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
          <header className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-800 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <MapTrifold className="h-4 w-4" aria-hidden />
                Southern Africa acceleration
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                EcoCash Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We elevate the archived WordPress copy into a resilient EcoCash programme spanning Zimbabwe and Lesotho.
                Cloud MLM Software orchestrates demos, modules, and analytics so executives, field leaders, and AI
                copilots share one confident narrative.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Book EcoCash demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Speak with regional experts</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-3xl border border-sky-100 bg-white/85 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
              {HERO_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <article
                    key={badge.title}
                    className="rounded-2xl border border-sky-100 bg-sky-50/60 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{badge.title}</h2>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{badge.caption}</p>
                  </article>
                );
              })}
            </div>
          </header>
          <div className="grid gap-6 rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Multi-wave launch programme
            </h2>
            <ol className="grid gap-6 lg:grid-cols-4">
              {INTEGRATION_WAVES.map((wave) => {
                const Icon = wave.icon;
                return (
                  <li
                    key={wave.phase}
                    className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                        {wave.phase}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{wave.focus}</h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{wave.detail}</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-100">{wave.evidence}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              EcoCash-ready module clusters
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive highlighted demos, modules, and services. We transform that list into three module clusters that
              bind sales, finance, and support around EcoCash orchestration.
            </p>
            <div className="space-y-6">
              {MODULE_CLUSTERS.map((cluster) => {
                const Icon = cluster.icon;
                return (
                  <article
                    key={cluster.pillar}
                    className="rounded-2xl border border-sky-100 bg-sky-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-sky-200 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{cluster.pillar}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{cluster.narrative}</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {cluster.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Signpost className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Regional storytelling</h3>
              <p className="text-sm leading-6 text-slate-200">
                Thought leadership is part of Cloud MLM Software’s DNA. We convert EcoCash telemetry into analyst-friendly
                narratives, investor memos, and field-ready updates.
              </p>
            </div>
            <div className="space-y-4">
              {REGIONAL_STORIES.map((story) => (
                <div key={story.country} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{story.country}</span>
                    <Link
                      href={story.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sky-200 hover:text-sky-100"
                    >
                      {story.cta}
                      <ArrowSquareOut className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                  <p className="mt-3 leading-6">{story.narrative}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-slate-200">
              <strong>Governance snapshot:</strong> Multi-market ledger checks, compliance alerts, and AI-powered
              debriefs keep Zimbabwean and Lesotho authorities informed without overwhelming teams.
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Compensation enablement
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              EcoCash alignment across every plan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Binary, Matrix, Unilevel, Generation, Gift, Hybrid—the WordPress archive listed them all. We layer predictive
              insights and AI narration on top so payouts stay transparent and motivational.
            </p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Binary & Matrix plans: Intelligent retries and leg-balancing analytics keep growth predictable.",
              "Board & Gift plans: Event-driven vouchers celebrate milestones while preserving trust in community contributions.",
              "Unilevel & Generation plans: AI storyboards equip leaders with depth-focused coaching moments.",
              "Hybrid & Emerging designs: Scenario planning tests new incentives using EcoCash telemetry."
            ].map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-sky-100 bg-sky-50/70 p-6 shadow-inner transition hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-sky-100 bg-sky-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate EcoCash with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let’s transform the archived page into a living programme that keeps Zimbabwean and Basotho distributors,
            executives, and AI copilots aligned on every payment.
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
