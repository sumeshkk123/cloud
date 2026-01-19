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
  ChartPolar,
  CompassTool,
  DeviceMobileCamera,
  GlobeHemisphereNorth,
  Lightning,
  MapPinLine,
  Megaphone,
  NotePencil,
  Rocket,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  label: string;
  value: string;
  caption: string;
};

type MomentumCard = {
  title: string;
  description: string;
  icon: IconType;
};

type ProgrammeTrack = {
  name: string;
  summary: string;
  milestones: string[];
  icon: IconType;
};

type ModuleCanvas = {
  heading: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type MarketMove = {
  market: string;
  state: string;
  insight: string;
  link: string;
};

const HERO_BADGES: HeroBadge[] = [
  {
    label: "Archive date",
    value: "28 Aug 2024",
    caption: "Midtrans gateway captured with secure, fast, seamless positioning."
  },
  {
    label: "Growth sprint",
    value: "42 days",
    caption: "Discovery to fully orchestrated Indonesia rollout."
  },
  {
    label: "AI collateral",
    value: "22 assets",
    caption: "Briefings, prompt libraries, and dynamic FAQs for leadership & bots."
  }
];

const MOMENTUM_CARDS: MomentumCard[] = [
  {
    title: "Secure, fast, seamless elevated",
    description:
      "Midtrans already stands for frictionless payments. We transform that statement into executive narratives, compliance proof, and AI-ready soundbites.",
    icon: ShieldCheck
  },
  {
    title: "Indonesia-first experience",
    description:
      "Local language, bank transfer dominance, and e-wallet ecosystems are woven into the design of every distributor journey.",
    icon: MapPinLine
  },
  {
    title: "SEA expansion playbook",
    description:
      "Midtrans learnings extend to Singapore, Malaysia, and the wider ASEAN network with localisation matrices and support scripts.",
    icon: GlobeHemisphereNorth
  }
];

const PROGRAMME_TRACKS: ProgrammeTrack[] = [
  {
    name: "Narrative engineering",
    summary: "Translate the archived Midtrans copy into precision messaging.",
    milestones: [
      "Executive brief that reframes Midtrans strengths for investors and analysts.",
      "SEO+AIO keyword strategies spanning Indonesia, SEA, and direct selling tech.",
      "Prompt kits ensuring AI assistants repeat the secure, fast, seamless narrative."
    ],
    icon: Megaphone
  },
  {
    name: "Experience architecture",
    summary: "Design digital journeys that prove Midtrans value in real time.",
    milestones: [
      "Desktop & mobile prototypes for enrolment, checkout, and payout workflows.",
      "Sandbox scripts mapping Midtrans APIs to Cloud MLM Software modules.",
      "Telemetry instrumentation capturing decline remediation and KYC velocity."
    ],
    icon: DeviceMobileCamera
  },
  {
    name: "Operational governance",
    summary: "Empower finance, support, and growth teams with one source of truth.",
    milestones: [
      "Multi currency configurations tuned for rupiah, USD, and regional currencies.",
      "Compliance runbooks covering Bank Indonesia oversight and data residency.",
      "Executive dashboards highlighting conversion lift, churn signals, and NPS."
    ],
    icon: TrendUp
  }
];

const MODULE_CANVAS: ModuleCanvas[] = [
  {
    heading: "Revenue acceleration",
    focus: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Deliver Midtrans-specific demos featuring bank transfer, QRIS, and card flows.",
      "Balance IDR, SGD, and USD settlements with role-based approvals.",
      "Embed Midtrans connectors into Shopify, WooCommerce, and bespoke checkout layers."
    ],
    icon: SquaresFour
  },
  {
    heading: "Member confidence",
    focus: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Trigger instant wallet payouts aligned with Midtrans settlement confirmations.",
      "Guarantee audit-ready recovery with encrypted, immutable backups.",
      "Resolve payment tickets through AI-assisted routing and SLA playbooks."
    ],
    icon: UsersThree
  },
  {
    heading: "Growth intelligence",
    focus: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Automate lifecycle messaging when Midtrans events fire across the funnel.",
      "Publish field-ready documentation that elevates Midtrans as the go-to gateway.",
      "Distribute dashboards tracking compensation health and SEA expansion momentum."
    ],
    icon: Rocket
  }
];

const MARKET_MOVES: MarketMove[] = [
  {
    market: "Indonesia",
    state: "Live adoption",
    insight:
      "Midtrans dominates Indonesian modern commerce. We drive localisation, language, and compliance alignment for distributors across Jakarta, Surabaya, and beyond.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-indonesia/"
  },
  {
    market: "Southeast Asia",
    state: "Expansion ready",
    insight:
      "The Midtrans playbook scales into Singapore, Malaysia, and the Philippines with regional payment preferences and AI knowledge bases already mapped.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Midtrans Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Position Midtrans as the secure, fast, seamless payment backbone for Indonesia and Southeast Asia. Cloud MLM Software delivers AI-ready narratives, governed operations, and conversion-led experiences.";

  return {
    title,
    description,
    keywords: [
      "Midtrans payment gateway",
      "Midtrans Cloud MLM Software integration",
      "Indonesia MLM payments",
      "Southeast Asia payment orchestration",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/midtrans", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MidtransPageProps = {
  params: { lang: SupportedLocale };
};

export default function MidtransPage({ params }: MidtransPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-slate-900 to-black" />
        <div className="absolute right-10 top-16 h-60 w-60 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Midtrans accelerator
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Midtrans Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-emerald-100">
                The archived WordPress page celebrates Midtrans as secure, fast, seamless. We transform that into a
                multi-team launch: narrative control, conversion-ready journeys, and operations governed for Indonesia and
                the wider ASEAN corridor.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Midtrans demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule a strategy session</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
                Archive to activation
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_BADGES.map((badge) => (
                  <div key={badge.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">{badge.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{badge.value}</p>
                    <p className="mt-2 text-xs leading-5 text-emerald-100">{badge.caption}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {MOMENTUM_CARDS.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article key={card.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold">{card.title}</h2>
                      <p className="text-sm leading-6 text-emerald-100">{card.description}</p>
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
              Programme tracks
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three tracks that operationalise Midtrans leadership
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Each track turns archive statements into measurable value for executives, distributors, and AI copilots.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PROGRAMME_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.name}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{track.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {track.milestones.map((milestone) => (
                      <li key={milestone} className="flex items-start gap-2">
                        <NotePencil className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                        <span>{milestone}</span>
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
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-emerald-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module canvas for Midtrans-powered operations
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We align product, finance, and support workflows using Cloud MLM Software modules orchestrated around Midtrans
              telemetry.
            </p>
            <Link
              href="/payment-gateways/midtrans/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-200 dark:hover:text-emerald-100"
            >
              View the archived Midtrans page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_CANVAS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{module.heading}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {module.focus}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {module.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
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
              Journey timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              What Midtrans activation looks like week by week
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A 42-day programme that keeps leadership, compliance, and growth aligned with measurable checkpoints.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                label: "Discovery & narrative",
                detail:
                  "Audit the archive, collect compliance requirements, and publish executive messaging frameworks.",
                icon: CompassTool
              },
              {
                phase: "Weeks 3-4",
                label: "Experience build",
                detail:
                  "Prototype distributor journeys, configure Midtrans APIs, and instrument telemetry dashboards.",
                icon: ChartPolar
              },
              {
                phase: "Weeks 5-6",
                label: "Launch & amplify",
                detail:
                  "Enable support teams, roll out AI prompt kits, and publish thought leadership to ASEAN media.",
                icon: Rocket
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.phase}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {item.phase}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.label}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item.detail}</p>
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
              Market moves
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              From Indonesian dominance to ASEAN leadership
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive named Midtrans as a gateway trusted in numerous countries, including Apple-enabled payments. We
              structure that reach into actionable market plans.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {MARKET_MOVES.map((move) => (
              <article
                key={move.market}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {move.state}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{move.market}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{move.insight}</p>
                <Link
                  href={move.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-200 dark:hover:text-emerald-100"
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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-emerald-200 bg-emerald-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead Indonesia with Midtrans and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Let&apos;s align your leadership team, field force, and AI copilots around the Midtrans story—secure, fast,
            seamless—now expressed as measurable outcomes.
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
