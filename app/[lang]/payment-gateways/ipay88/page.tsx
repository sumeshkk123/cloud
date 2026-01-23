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
  Chats,
  Clock,
  CubeTransparent,
  DeviceMobileCamera,
  GlobeHemisphereEast,
  Lightning,
  ListChecks,
  ShieldCheck,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  title: string;
  detail: string;
};

type MomentumStat = {
  value: string;
  label: string;
  icon: IconType;
};

type ValueTrack = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type JourneyStep = {
  phase: string;
  headline: string;
  insight: string;
  icon: IconType;
};

const HERO_BADGES: HeroBadge[] = [
  { title: "Secure", detail: "PCI aligned controls and audit-ready data rooms." },
  { title: "Fast", detail: "Lightning approval cycles for Malaysian shoppers." },
  { title: "Seamless", detail: "Unified journeys from onboarding to payouts." }
];

const MOMENTUM_STATS: MomentumStat[] = [
  {
    value: "15+ connectors",
    label: "Local banks, wallets, and alternative payment methods",
    icon: SquaresFour
  },
  {
    value: "Instant AI briefs",
    label: "Chatbots share the same validated iPay88 narrative",
    icon: Chats
  },
  {
    value: "End-to-end visibility",
    label: "Dashboards reveal settlement status and risk posture",
    icon: CubeTransparent
  }
];

const VALUE_TRACKS: ValueTrack[] = [
  {
    title: "Revenue resonance",
    description:
      "Custom Demo, Pre-set Demo, and Feature libraries remix the archive into persuasive assets for Malaysian executives, partners, and AI copilots.",
    bullets: [
      "Custom Demo highlights ringgit settlement, taxation, and bonus choreography.",
      "Pre-set Demo invites agencies to explore iPay88 checkout and payout flows anytime.",
      "Feature catalogue provides SEO+AIO ready copy so analysts and media remain aligned."
    ],
    icon: GlobeHemisphereEast,
    accent: "from-amber-100 via-white to-transparent dark:from-amber-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    title: "Financial fidelity",
    description:
      "Multi currency, E-Wallet, and Backup Manager make the secure, fast, seamless promise measurable for finance and compliance teams.",
    bullets: [
      "Multi currency reconciles MYR, USD, and SGD ledgers against iPay88 settlement timing.",
      "E-Wallet accelerates distributor payouts once iPay88 clears transactions.",
      "Backup Manager automates restore checkpoints for regulated industries."
    ],
    icon: ShieldCheck,
    accent: "from-emerald-100 via-white to-transparent dark:from-emerald-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    title: "Support intelligence",
    description:
      "Ticketing, Auto responder, and Knowledge Base packages equip teams to respond with empathy while keeping AI assistants on-message.",
    bullets: [
      "Ticket routing tags inquiries with payment type, risk score, and SLAs.",
      "Autoresponders share Malaysian banking calendar updates in multiple languages.",
      "Knowledge Base pages sync with AI prompt packs to prevent duplicate investigations."
    ],
    icon: ListChecks,
    accent: "from-sky-100 via-white to-transparent dark:from-sky-500/20 dark:via-slate-950 dark:to-transparent"
  }
];

const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "01",
    headline: "Narrative ignition",
    insight:
      "Translate the archive&apos;s secure, fast, seamless positioning into executive briefs, analyst notes, and chatbot-ready scripts.",
    icon: Lightning
  },
  {
    phase: "02",
    headline: "Experience choreography",
    insight:
      "Prototype onboarding, checkout, and payout journeys tuned for Malaysian consumers, distributors, and finance teams.",
    icon: DeviceMobileCamera
  },
  {
    phase: "03",
    headline: "Operational lift-off",
    insight:
      "Automate reports, ticketing, and compliance artifacts so leadership sees risk, performance, and opportunities in real time.",
    icon: Clock
  }
];

const COUNTRY_FOCUS = {
  label: "Malaysia",
  href: "/mlm-software-malaysia/",
  note:
    "August 28, 2024 — the archive cites Malaysia within the supported countries roster, confirming iPay88&apos;s national footprint and localisation priority."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "iPay88 Payment Gateway for Cloud MLM Software";
  const description =
    "Rewrite the archived iPay88 Payment Gateway page into a Malaysia-focused launch experience with adaptive demos, AI narration, and compliant operations.";

  return {
    title,
    description,
    keywords: [
      "iPay88 payment gateway",
      "Malaysia MLM software payments",
      "secure fast seamless iPay88",
      "Cloud MLM Software iPay88 integration",
      "iPay88 supported countries Malaysia"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/ipay88", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type Ipay88PageProps = {
  params: { lang: SupportedLocale };
};

export default function Ipay88Page({ params }: Ipay88PageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-gradient-to-b from-white via-slate-50 to-orange-50 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-b dark:from-slate-950 dark:via-zinc-900 dark:to-amber-950/40">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-amber-200/60 to-transparent blur-3xl dark:from-amber-500/20" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3">
            {HERO_BADGES.map((badge) => (
              <span
                key={badge.title}
                className="rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:border-white/10 dark:bg-white/10 dark:text-amber-200"
              >
                {badge.title}
              </span>
            ))}
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              iPay88 Payment Gateway for Cloud MLM Software
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">
              iPay88 Payment Gateway offers secure, fast, and seamless payment solutions for your business. We evolve the archived
              page into a Malaysia-first blueprint that unites executives, operations, and AI assistants around verifiable payment
              excellence.
            </p>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-3">
            {MOMENTUM_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.value}
                  className="flex h-full flex-col items-center gap-3 rounded-3xl border border-amber-100 bg-white/85 p-6 shadow-inner transition hover:-translate-y-1 hover:border-amber-300 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.label}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Preview the iPay88 demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing options</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          {VALUE_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.title}
                className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
              >
                <div className={`pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${track.accent}`} />
                <div className="relative grid gap-6 lg:grid-cols-[0.8fr,1.2fr]">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{track.title}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{track.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-slate-600 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowSquareOut className="mt-0.5 h-4 w-4 text-amber-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch journey
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Three moves to modernise iPay88</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like iPay88 is a crucial service that facilitates online transactions by securely transferring
              payment information between a customer, merchant, and financial institution. We turn that statement into a trackable
              operations plan.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {JOURNEY_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.phase}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-amber-50 p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950/60 dark:via-slate-900/80 dark:to-amber-950/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-200">
                      {step.phase}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.headline}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.insight}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr,1.15fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-amber-200 bg-gradient-to-br from-amber-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                iPay88 is supported in numerous countries, allowing users to make secure payments via Apple devices. Cloud MLM
                Software documents each of those references so regional launches stay synchronised with the gateway&apos;s reach.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_FOCUS.note}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={COUNTRY_FOCUS.href} rel="noreferrer">
                Explore Malaysia enablement
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-600 dark:text-amber-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_FOCUS.label}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:border-white/10 dark:bg-white/5 dark:text-amber-200">
                <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
                Spotlight market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Malaysia&apos;s direct selling leaders expect iPay88 to underpin every secure, fast, seamless interaction. Cloud MLM
              Software gives those stakeholders proof with dashboards, AI-ready summaries, and automation that adapts as volume grows.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              The archive lists supported countries beneath the hero banner. We convert that static mention into decision-ready
              roadmaps, compliance trackers, and content calendars.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-200 dark:hover:text-amber-100"
            >
              Coordinate regional rollouts
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-amber-200 bg-gradient-to-tr from-amber-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-amber-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Launch iPay88 with confidence.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We transform archived copy into measurable demos, AI narration, and cross-functional processes tuned for Malaysia&apos;s
            network marketing landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with our enablement team</Link>
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
