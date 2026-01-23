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
  AirplaneTilt,
  ArrowSquareOut,
  Broadcast,
  ChartLineUp,
  DeviceMobileCamera,
  GlobeHemisphereWest,
  Headset,
  Lightning,
  ShieldCheck,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPanel = {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
};

type RhythmCard = {
  heading: string;
  detail: string;
  icon: IconType;
};

type RolloutStage = {
  title: string;
  statement: string;
  action: string;
  icon: IconType;
};

type EnablementTile = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

const HERO_PANELS: HeroPanel[] = [
  {
    title: "Secure storytelling",
    description: "Compliance artefacts, AI prompt packs, and investor decks reinforce JazzCash as the trusted rail.",
    icon: ShieldCheck,
    accent: "from-purple-500/20 via-transparent to-transparent"
  },
  {
    title: "Fast settlement",
    description: "Dashboards reveal disbursement velocity and tax alignment in real time.",
    icon: Lightning,
    accent: "from-amber-500/25 via-transparent to-transparent"
  },
  {
    title: "Seamless journeys",
    description: "Mobile-ready enrolment, checkout, and payout flows respect Pakistan&apos;s hybrid cash and digital habits.",
    icon: DeviceMobileCamera,
    accent: "from-sky-500/20 via-transparent to-transparent"
  }
];

const RHYTHM_CARDS: RhythmCard[] = [
  {
    heading: "Field experience orchestration",
    detail: "Distributor onboarding, rank promotions, and commission alerts stay in sync with JazzCash approvals.",
    icon: UsersThree
  },
  {
    heading: "Finance telemetry",
    detail: "Multi-ledger reconciliation and risk analytics highlight every secure, fast, seamless claim with evidence.",
    icon: ChartLineUp
  },
  {
    heading: "Executive intelligence",
    detail: "AI-ready briefs arm leaders, analysts, and media with consistent insights on Pakistan&apos;s growth story.",
    icon: Broadcast
  }
];

const ROLLOUT_STAGES: RolloutStage[] = [
  {
    title: "Narrative ignition",
    statement:
      "Translate the archive&apos;s secure, fast, seamless messaging into board packs, analyst notes, and chatbot responses.",
    action: "Everyone—from executives to AI copilots—echoes the same JazzCash story.",
    icon: SquaresFour
  },
  {
    title: "Experience rehearsal",
    statement: "Prototype enrolment, checkout, and payout flows that blend cash, mobile money, and card preferences.",
    action: "Distributors rehearse experiences that match Pakistan&apos;s on-the-ground reality.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Operational amplification",
    statement: "Automate dashboards, compliance logs, and ticketing so teams act on data instead of assumptions.",
    action: "Leadership sees proof the JazzCash promise is live, stable, and scalable.",
    icon: Headset
  }
];

const ENABLEMENT_TILES: EnablementTile[] = [
  {
    name: "Revenue catalysts",
    summary:
      "Custom Demo, Pre-set Demo, and Feature hub convert archived copy into Malaysia-style clarity but tuned for Pakistan&apos;s JazzCash ecosystem.",
    bullets: [
      "Custom Demo mirrors rupee payouts, taxation, and incentive choreography.",
      "Pre-set Demo offers agencies guided explorations for hybrid cash-digital flows.",
      "Features hub delivers SEO+AIO ready copy for analysts, partners, and AI assistants."
    ],
    icon: AirplaneTilt
  },
  {
    name: "Financial guardianship",
    summary:
      "Multi currency, E-Wallet, and Backup Manager link every JazzCash transaction to auditable, recoverable systems.",
    bullets: [
      "Multi currency reconciles PKR to USD/EUR ledgers with timestamped evidence.",
      "E-Wallet accelerates distributor payouts when JazzCash settles instantly.",
      "Backup Manager documents restore checkpoints for Pakistan&apos;s regulators."
    ],
    icon: ShieldCheck
  },
  {
    name: "Support intelligence",
    summary: "Ticketing, Auto responder, and Knowledge Base keep frontline teams confident in multiple languages.",
    bullets: [
      "Ticketing prioritises payment type, sentiment, and SLAs for rapid resolution.",
      "Autoresponders share banking calendars, outage notices, and escalation options.",
      "Knowledge Base syncs with AI prompts so answers remain consistent everywhere."
    ],
    icon: Headset
  }
];

const COUNTRY_SIGNAL = {
  label: "Pakistan",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-pakistan/",
  note:
    "August 28, 2024 — the archive cites Pakistan among the supported countries list, confirming JazzCash as a priority payment rail for regional launches."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "JazzCash Payment Gateway for Cloud MLM Software";
  const description =
    "Reimagine the archived JazzCash Payment Gateway page into a Pakistan-first launch strategy with AI narration, instrumentation, and field-ready experiences.";

  return {
    title,
    description,
    keywords: [
      "JazzCash payment gateway",
      "Pakistan MLM software payments",
      "secure fast seamless JazzCash",
      "Cloud MLM Software JazzCash integration",
      "JazzCash supported countries Pakistan"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/jazzcash", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type JazzCashPageProps = {
  params: { lang: SupportedLocale };
};

export default function JazzCashPage({ params }: JazzCashPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-gradient-to-br from-[#f8f5ff] via-white to-[#fff8f2] px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#1f163a] dark:via-[#120f24] dark:to-[#2b140c]">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl dark:bg-purple-500/20" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="relative mx-auto max-w-6xl space-y-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-700 dark:border-white/10 dark:bg-white/10 dark:text-purple-200">
              Secure • Fast • Seamless
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              JazzCash Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              JazzCash Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM Software
              turns the archive into a Pakistan-first transformation narrative ready for executives, field leaders, and AI copilots.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {HERO_PANELS.map((panel) => {
              const Icon = panel.icon;
              return (
                <article
                  key={panel.title}
                  className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white/85 p-6 shadow-inner transition hover:-translate-y-1 hover:border-purple-300 dark:border-white/10 dark:bg-white/5"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${panel.accent}`} />
                  <div className="relative flex flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{panel.title}</h2>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{panel.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Preview JazzCash demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Operational rhythm
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Keep the secure, fast, seamless promise alive every day
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like JazzCash is a crucial service that facilitates online transactions by securely transferring
              payment information between a customer, merchant, and financial institution. We connect that promise to day-to-day
              execution.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {RHYTHM_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.heading}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-purple-50 p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950/70 dark:via-slate-900/80 dark:to-purple-950/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.heading}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{card.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:bg-white/10 dark:text-purple-200">
              Rollout method
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three stages to translate the archive into momentum
            </h2>
          </header>
          <div className="mt-10 space-y-6">
            {ROLLOUT_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-[#f9f0ff] p-6 shadow-inner transition hover:-translate-y-1 hover:border-purple-200 dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950/70 dark:via-slate-900/80 dark:to-purple-950/40 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stage.statement}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-purple-700 dark:text-purple-200">{stage.action}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {ENABLEMENT_TILES.map((tile) => {
            const Icon = tile.icon;
            return (
              <article
                key={tile.name}
                className="rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
              >
                <div className="grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{tile.name}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{tile.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-slate-600 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {tile.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowSquareOut className="mt-0.5 h-4 w-4 text-purple-500" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-purple-300 bg-gradient-to-br from-purple-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                JazzCash is supported in numerous countries, allowing users to make secure payments via Apple devices. We capture
                every mention so your expansion intelligence stays rooted in verified data.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_SIGNAL.note}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={COUNTRY_SIGNAL.href} rel="noreferrer">
                Review Pakistan coverage
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-purple-700 dark:text-purple-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SIGNAL.label}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:border-white/10 dark:bg-white/5 dark:text-purple-200">
                <GlobeHemisphereWest className="h-4 w-4" aria-hidden />
                Spotlight market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Pakistan&apos;s direct selling sector trusts JazzCash for reliable, real-time payouts and enrolment journeys. Cloud MLM
              Software keeps that trust intact with dashboards, AI narration, and compliance artefacts that scale with demand.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Under the archive hero you&apos;ll find the full list of supported countries. We translate that static insight into launch
              roadmaps, risk registers, and content calendars.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800 dark:text-purple-200 dark:hover:text-purple-100"
            >
              Coordinate Pakistan rollout
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-purple-300 bg-gradient-to-tr from-purple-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-purple-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with JazzCash.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We transform archived copy into scale-ready operations, AI alignment, and stakeholder storytelling built for Pakistan&apos;s
            hybrid payment habits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with enablement</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with a strategist</Link>
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
