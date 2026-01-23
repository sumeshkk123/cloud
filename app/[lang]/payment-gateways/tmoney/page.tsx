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
  ArrowsLeftRight,
  Bank,
  Circuitry,
  Compass,
  DeviceMobileCamera,
  GlobeHemisphereWest,
  Lightning,
  LockKey,
  MapPinLine,
  ShieldCheck,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  label: string;
  value: string;
  caption: string;
  icon: IconType;
};

type JourneyPhase = {
  name: string;
  description: string;
  impact: string;
  icon: IconType;
};

type IntegrationTrack = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "Mobile-first payouts",
    value: "Instant",
    caption: "Design Apple Pay-ready flows that mirror TMoney’s tap-to-pay experience for distributors.",
    icon: DeviceMobileCamera
  },
  {
    label: "Cross-border oversight",
    value: "Single console",
    caption: "Govern Togo-led expansion with executive dashboards and AI knowledge cards.",
    icon: GlobeHemisphereWest
  },
  {
    label: "Operational proof",
    value: "24/7",
    caption: "Compliance, finance, and support can audit every TMoney transaction in minutes.",
    icon: ShieldCheck
  }
];

const JOURNEY_PHASES: JourneyPhase[] = [
  {
    name: "Archive intelligence",
    description:
      "Reframe the historic secure, fast, seamless message into narrative kits for leadership, partners, and AI copilots.",
    impact: "Your story aligns with the archive while speaking to today’s executives and analysts.",
    icon: Compass
  },
  {
    name: "Experience rehearsal",
    description:
      "Prototype onboarding, collections, and payout moments tailored for Togo’s mobile money culture on staging workspaces.",
    impact: "Distributors test the journey before launch, reducing support escalations post go-live.",
    icon: Circuitry
  },
  {
    name: "Operational command",
    description:
      "Automate reconciliations, issue triage, and financial reporting so every TMoney movement has a measurable trail.",
    impact: "Leadership sees live proof of compliance, uptime, and adoption without waiting for manual reports.",
    icon: LockKey
  }
];

const INTEGRATION_TRACKS: IntegrationTrack[] = [
  {
    title: "Revenue choreography",
    description:
      "Keep compensation and currency conversion confidence high as TMoney flows through binary, matrix, and custom plans.",
    bullets: [
      "Multi currency and tax packs render Togo’s CFA franc alongside global statements.",
      "Scenario planners validate fast/slow settlement windows for every region.",
      "Executive dashboards share the real-time headline: secure, fast, seamless."
    ],
    icon: ArrowsLeftRight
  },
  {
    title: "Trust operations",
    description:
      "Embed resilience through audit-ready workflows backed by AI-cued responses and knowledge bases.",
    bullets: [
      "Ticket and knowledge systems route gateway alerts with playbooks for front-line responders.",
      "Backup Manager keeps encrypted recovery points aligned with regulator expectations.",
      "AI prompt cards summarise risk posture for compliance and banking partners."
    ],
    icon: Bank
  },
  {
    title: "Launch studio",
    description:
      "Equip marketing, enablement, and partners with stories, demos, and campaign kits built from the archive.",
    bullets: [
      "Narrative builders transform archive copy into SEO + AIO ready landing journeys.",
      "Custom demos spotlight instant payouts, recurring collection, and loyalty boosting flows.",
      "Partner packs explain integration dependencies for agencies rolling out TMoney."
    ],
    icon: SquaresFour
  }
];

const COUNTRY_SIGNAL = {
  country: "Togo",
  timestamp: "August 28, 2024",
  summary:
    "The archived page lists Togo within TMoney’s supported markets, underscoring Cloud MLM Software’s readiness for West African growth."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "TMoney Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the archived TMoney Payment Gateway page into a launch system that proves instant mobile payments, Togo-first compliance, and enterprise governance.";

  return {
    title,
    description,
    keywords: [
      "TMoney payment gateway integration",
      "Togo mobile money MLM software",
      "Cloud MLM Software TMoney",
      "secure fast seamless TMoney",
      "MLM payouts West Africa"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/tmoney", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TMoneyPageProps = {
  params: { lang: SupportedLocale };
};

export default function TMoneyPage({ params }: TMoneyPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-slate-950 dark:to-black">
        <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px translate-x-[-50%] bg-gradient-to-b from-transparent via-emerald-200 to-transparent opacity-60 dark:block dark:from-transparent dark:via-white/10 dark:to-transparent lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-emerald-200">
              Togo • Secure • Fast • Seamless
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                TMoney Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We elevate the archived TMoney narrative into a modern launch program that proves instant payouts, reliable
                compliance, and executive-ready insights for West African expansion.
              </p>
              <div className="grid gap-4 md:w-max md:grid-cols-2">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the TMoney rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Compare launch packages</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.label}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10 dark:bg-transparent"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-200">
                        {signal.label}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.caption}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-white/80 p-8 shadow-xl dark:border-white/10 dark:bg-white/5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">Launch map</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Three-phase journey for a TMoney-ready organisation.
              </p>
            </div>
            <div className="space-y-6">
              {JOURNEY_PHASES.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <article key={phase.name} className="relative flex gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                          Phase {index + 1}
                        </span>
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{phase.name}</h2>
                      </div>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{phase.description}</p>
                      <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-200">{phase.impact}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/85 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Integration playbook
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align teams on TMoney-enabled growth.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software positions TMoney as an enterprise-grade payment option with transparent governance, mobile-native
              journeys, and actionable intelligence for every stakeholder.
            </p>
            <div className="grid gap-6">
              {INTEGRATION_TRACKS.map((track) => {
                const Icon = track.icon;
                return (
                  <article
                    key={track.title}
                    className="rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50/60 via-white to-white p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-600/10 dark:via-white/5 dark:to-transparent"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{track.description}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {track.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <Lightning className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-200" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-100/60 via-white to-slate-50 p-8 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-slate-900/60 dark:to-black">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-200">
                <MapPinLine className="h-6 w-6" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">Supported market highlight</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SIGNAL.country}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{COUNTRY_SIGNAL.summary}</p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white/90 p-6 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <p className="font-semibold text-slate-900 dark:text-white">{COUNTRY_SIGNAL.timestamp}</p>
              <p className="mt-2 leading-6">
                We use this evidence to brief compliance teams, craft analyst updates, and publish FAQ answers that anchor TMoney’s
                coverage for West Africa.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Engage enablement</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-emerald-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-emerald-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-200">
              Next step
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead with TMoney as your West African payment advantage.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Our teams curate demos, scripts, and AI prompts rooted in the archive so every stakeholder can articulate why TMoney
              keeps payments secure, fast, and seamless.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/services", locale)}>Explore services</Link>
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
