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
  Anchor,
  Detective,
  Globe,
  Lightning,
  ShieldCheck,
  SquaresFour,
  WaveSawtooth,
  Wind
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Strategy = {
  heading: string;
  description: string;
  icon: IconType;
};

type LaunchTile = {
  title: string;
  copy: string;
};

type SeychellesSignal = {
  title: string;
  detail: string;
  icon: IconType;
};

const STRATEGIES: Strategy[] = [
  {
    heading: "Island-grade assurance",
    description:
      "Govern TrezorPay with compliance playbooks, settlement dashboards, and continuity drills that satisfy Seychelles’ financial regulators.",
    icon: ShieldCheck
  },
  {
    heading: "Blue economy storytelling",
    description:
      "Convert the archive into thought leadership for tourism, fintech, and sustainability stakeholders across the Seychelles ecosystem.",
    icon: WaveSawtooth
  },
  {
    heading: "AI-empowered enablement",
    description:
      "Distribute AI prompt cards, demo narratives, and onboarding paths that keep every seller confident with TrezorPay journeys.",
    icon: SquaresFour
  }
];

const LAUNCH_TILES: LaunchTile[] = [
  {
    title: "Executive immersion",
    copy: "Weekly cadence reviews highlight TrezorPay adoption, exception handling, and customer sentiment for leadership."
  },
  {
    title: "Experience choreography",
    copy: "Design checkout, subscription, and payout workflows that mirror Seychelles customers’ expectations across devices."
  },
  {
    title: "Operational guardrails",
    copy: "Automated alerts, recovery playbooks, and shared dashboards keep finance, compliance, and support aligned in real time."
  }
];

const SEYCHELLES_SIGNALS: SeychellesSignal[] = [
  {
    title: "August 28, 2024 — Seychelles validation",
    detail:
      "The archive seats Seychelles within the supported countries for TrezorPay, verifying our regional-ready launch credentials.",
    icon: Globe
  },
  {
    title: "Blue economy perspective",
    detail:
      "We integrate tourism, maritime, and conservation narratives into TrezorPay messaging, elevating Cloud MLM Software as a strategic partner.",
    icon: Anchor
  },
  {
    title: "Trade winds of opportunity",
    detail:
      "AI copilots surface real-time updates on policy, currency, and partner ecosystems so stakeholders move with market winds.",
    icon: Wind
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "TrezorPay Payment Gateway for Cloud MLM Software";
  const description =
    "Turn the TrezorPay Payment Gateway archive into a Seychelles-first launch framework with immersive storytelling and resilient operations.";

  return {
    title,
    description,
    keywords: [
      "TrezorPay payment gateway integration",
      "Seychelles MLM software payments",
      "Cloud MLM Software TrezorPay",
      "secure fast seamless TrezorPay",
      "AI enablement for TrezorPay"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/trezorpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TrezorPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function TrezorPayPage({ params }: TrezorPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-cyan-100 bg-gradient-to-br from-[#e9fbff] via-white to-[#f8fffd] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#022939] dark:via-[#010f12] dark:to-black">
        <div className="absolute -left-10 top-16 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-cyan-200">
              Seychelles • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                TrezorPay Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We evolve the TrezorPay archive into a launch theatre where island regulators, distributors, and AI assistants align
                on secure, fast, seamless outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the TrezorPay rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/services", locale)}>Discover enablement services</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {STRATEGIES.map((strategy) => {
                const Icon = strategy.icon;
                return (
                  <article
                    key={strategy.heading}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-inner dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">{strategy.heading}</h2>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{strategy.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-cyan-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Detective className="h-6 w-6 text-cyan-600 dark:text-cyan-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-200">Launch intelligence</p>
            </div>
            <div className="grid gap-5">
              {LAUNCH_TILES.map((tile) => (
                <article key={tile.title} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{tile.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{tile.copy}</p>
                </article>
              ))}
            </div>
            <Button asChild size="lg" variant="secondary" className="justify-center gap-2 bg-cyan-600 text-white hover:bg-cyan-500">
              <Link href={buildLocalizedPath("/support", locale)}>
                Coordinate enablement
                <Lightning className="h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Island innovation
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Every Seychelles stakeholder sees TrezorPay working.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software converts archival content into living assets—dashboards, prompts, and rehearsals—so leadership,
              distributors, and partners move decisively.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-cyan-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-cyan-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Financial guardianship</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Automated reconciliation and risk monitoring protect the gateway’s performance across every commission cycle.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-cyan-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-cyan-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience design</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Customer and distributor demos capture island lifestyle nuances, from tourism packages to loyalty payouts.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-cyan-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-cyan-600 dark:text-cyan-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-200">
                Seychelles signals
              </span>
            </div>
            {SEYCHELLES_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-cyan-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-600 dark:text-cyan-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-cyan-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-cyan-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-600 dark:text-cyan-200">Chart the course</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Launch TrezorPay with island confidence.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Partner with Cloud MLM Software to translate the archive into executive narratives, immersive demos, and
              always-on operations that keep TrezorPay secure, fast, and seamless.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Explore partnership tiers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
