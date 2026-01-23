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
  Broadcast,
  Buildings,
  ChartLineUp,
  Lightning,
  MapPin,
  Radio,
  ShieldCheck,
  Sparkle,
  GlobeHemisphereEast
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroInsight = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type ProgrammeLane = {
  title: string;
  description: string;
  bullets: string[];
};

type LaosSignal = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    label: "Telecom-grade uptime",
    metric: "99.9%",
    description: "Monitor Unitel eTopup payout reliability with live infrastructure and finance dashboards.",
    icon: Broadcast
  },
  {
    label: "Field enablement",
    metric: "Network-wide",
    description: "Arm Lao distributors with AI-guided scripts and demos that translate technical flows into business impact.",
    icon: Radio
  },
  {
    label: "Executive proof",
    metric: "Continuous",
    description: "Provide board-ready narratives tying Unitel eTopup adoption to revenue, retention, and compliance goals.",
    icon: Buildings
  }
];

const PROGRAMME_LANES: ProgrammeLane[] = [
  {
    title: "Story studio",
    description:
      "Transform the secure, fast, seamless message into Laos-first reports, keynote decks, and AI prompt packs for leadership.",
    bullets: [
      "Narratives connect Unitel eTopup to Laos’s digital transformation priorities.",
      "AI prompts keep chat assistants aligned across Lao and English languages.",
      "Media kits highlight resilience, reach, and corporate stewardship."
    ]
  },
  {
    title: "Journey rehearsal",
    description:
      "Prototype onboarding, pinless recharges, and incentives, mirroring how Laos’s mobile-first users interact across regions.",
    bullets: [
      "Sandboxes simulate urban and rural connectivity constraints.",
      "Experience walk-throughs capture distributor and customer feedback.",
      "Iteration cadences turn insights into product and training updates."
    ]
  },
  {
    title: "Operations command",
    description:
      "Automate audit trails, escalation routing, and continuity plans so Unitel eTopup stays trusted during peak seasons.",
    bullets: [
      "Finance dashboards reconcile wallet balances across currencies.",
      "Support automation suggests resolutions based on live telemetry.",
      "Resilience drills confirm recovery objectives for critical services."
    ]
  }
];

const LAOS_SIGNALS: LaosSignal[] = [
  {
    title: "August 28, 2024 — Laos confirmation",
    detail:
      "The archive explicitly names Laos as a supported market, validating Cloud MLM Software’s readiness to lead regional rollouts.",
    icon: MapPin
  },
  {
    title: "Connectivity intelligence",
    detail:
      "Coverage heatmaps and AI copilots interpret Unitel’s telecom data so stakeholders anticipate performance before campaigns launch.",
    icon: Sparkle
  },
  {
    title: "Regulatory partnership",
    detail:
      "We align Ministry of Technology and Communications expectations with compliance artifacts, briefing executives in plain language.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Unitel eTopup Payment Gateway for Cloud MLM Software";
  const description =
    "Reimagine the Unitel eTopup Payment Gateway archive into a Laos-first launch, blending telecom resilience with AI-powered enablement.";

  return {
    title,
    description,
    keywords: [
      "Unitel eTopup payment gateway integration",
      "Laos MLM software payments",
      "Cloud MLM Software Unitel eTopup",
      "secure fast seamless Unitel eTopup",
      "AI enablement for Laos payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/unitel-etopup", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type UnitelETopupPageProps = {
  params: { lang: SupportedLocale };
};

export default function UnitelETopupPage({ params }: UnitelETopupPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-amber-100 bg-gradient-to-br from-[#fff7eb] via-white to-[#f5fff9] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#261602] dark:via-[#071407] dark:to-black">
        <div className="absolute -left-12 top-16 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="absolute -right-10 bottom-12 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-200">
              Laos • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Unitel eTopup Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Translate the Unitel eTopup archive into a launch ecosystem that synchronises telecom infrastructure, distributor
                enablement, and executive storytelling across Laos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Begin the Unitel eTopup rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/services", locale)}>Explore enablement services</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HERO_INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article key={insight.label} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-200">
                        {insight.label}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{insight.metric}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{insight.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">Launch lanes</p>
            </div>
            <div className="space-y-6">
              {PROGRAMME_LANES.map((lane, index) => (
                <article key={lane.title} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                        Lane {index + 1}
                      </p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{lane.title}</h3>
                    </div>
                    <ChartLineUp className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{lane.description}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {lane.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Laos intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Elevate Unitel eTopup into a corporate differentiator.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software orchestrates communications, experiences, and operations so every Lao stakeholder sees Unitel eTopup
              delivering secure, fast, seamless value.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Telecom partnership</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Joint working sessions with Unitel align infrastructure updates, campaign calendars, and capacity planning.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-emerald-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-emerald-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience enablement</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Scenario libraries cover prepaid reloads, voucher incentives, and hybrid payment flows for every distributor segment.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                Laos signals
              </span>
            </div>
            {LAOS_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-emerald-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </article>
              );
            })}
            <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 text-sm leading-6 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <GlobeHemisphereEast className="h-5 w-5 text-emerald-600 dark:text-emerald-200" aria-hidden />
                <p className="font-semibold text-slate-900 dark:text-white">August 28, 2024 — Laos spotlight</p>
              </div>
              <p className="mt-2">
                Documentation links back to the archive’s supported-country list, reinforcing our market leadership conversations with
                Lao enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-emerald-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-emerald-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-emerald-600 dark:text-emerald-200">Forward path</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Command Laos’s mobile money era with Unitel eTopup.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Partner with Cloud MLM Software to craft narratives, experiences, and operations that keep Unitel eTopup secure, fast,
              and seamless for every stakeholder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review investment options</Link>
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
