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
  Compass,
  GlobeHemisphereWest,
  Lifebuoy,
  Lightning,
  MapPin,
  ShieldCheck,
  WaveSawtooth
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type BlueprintStep = {
  title: string;
  detail: string;
  bulletPoints: string[];
};

type FijiSignal = {
  title: string;
  note: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Regulatory readiness",
    metric: "Audit proof",
    description: "Documentation aligns Westpac with Reserve Bank of Fiji expectations and Pacific compliance frameworks.",
    icon: ShieldCheck
  },
  {
    label: "Experience rehearsal",
    metric: "Multi-channel",
    description: "Journey labs simulate card, POS, and online pathways before distributors face customers.",
    icon: Compass
  },
  {
    label: "Executive assurance",
    metric: "Live view",
    description: "Dashboards, AI prompts, and reports keep leadership informed on adoption, sentiment, and uptime.",
    icon: Lifebuoy
  }
];

const BLUEPRINT: BlueprintStep[] = [
  {
    title: "Narrative bridge",
    detail:
      "Translate the secure, fast, seamless archive into Fiji-first messaging, investor decks, and AI prompt cards for leadership.",
    bulletPoints: [
      "Executive briefings articulate Westpac’s role in Pacific digital inclusion.",
      "SEO + AIO stories highlight resilience across tourism, retail, and services.",
      "AI prompt kits maintain consistent voice between English and Fijian responses."
    ]
  },
  {
    title: "Experience rehearsal",
    detail:
      "Prototype onboarding, recurring billing, and cross-border settlements reflecting Fiji’s banking landscape.",
    bulletPoints: [
      "Sandbox flows map card-present and card-not-present behaviour across islands.",
      "Role-play workshops equip distributors and partners with scenario responses.",
      "Telemetry captures conversion, latency, and customer sentiment signals."
    ]
  },
  {
    title: "Command harbour",
    detail:
      "Automate monitoring, reconciliation, and escalation workflows so Westpac stays trusted during peak seasons.",
    bulletPoints: [
      "Finance dashboards reconcile settlements and settlement delays daily.",
      "Compliance monitors track AML, KYC, and reporting obligations in Fiji.",
      "Continuity drills confirm service availability during cyclone-season surges."
    ]
  }
];

const FIJI_SIGNALS: FijiSignal[] = [
  {
    title: "August 28, 2024 — Fiji validated",
    note:
      "Archive confirmation anchors our authority with local regulators, enterprise buyers, and partner banks across the Pacific.",
    icon: MapPin
  },
  {
    title: "Pacific partnership insight",
    note:
      "Narratives emphasise Westpac’s long-standing presence across Fiji and the broader region, syncing with AI assistants for consistent storytelling.",
    icon: Anchor
  },
  {
    title: "Resilience + trust",
    note:
      "Operational dashboards map seasonal travel spikes, disaster recovery plans, and customer sentiment trends for leadership.",
    icon: WaveSawtooth
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Westpac Payment Gateway for Cloud MLM Software";
  const description =
    "Reimagine the Westpac Payment Gateway archive into a Fiji-first launch programme that harmonises narratives, journeys, and operations.";

  return {
    title,
    description,
    keywords: [
      "Westpac payment gateway integration",
      "Fiji MLM software payments",
      "Cloud MLM Software Westpac",
      "secure fast seamless Westpac",
      "AI enablement for Westpac payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/westpac", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WestpacPageProps = {
  params: { lang: SupportedLocale };
};

export default function WestpacPage({ params }: WestpacPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-sky-100 bg-gradient-to-br from-[#ecfcff] via-white to-[#f0f5ff] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#042531] dark:via-[#020e1a] dark:to-black">
        <div className="absolute -left-12 top-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-white/10 dark:bg-white/10 dark:text-sky-200">
              Fiji • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Westpac Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We convert the archive into a Pacific partnership engine that equips executives, distributors, and AI assistants to
                champion Westpac’s payment innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the Westpac rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/services", locale)}>Explore enablement services</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-sky-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article key={highlight.label} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-sky-200">
                        {highlight.label}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{highlight.metric}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{highlight.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Anchor className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-200">Pacific blueprint</p>
            </div>
            <div className="space-y-6">
              {BLUEPRINT.map((step, index) => (
                <article key={step.title} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                      Phase {index + 1}
                    </p>
                    <GlobeHemisphereWest className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.detail}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {step.bulletPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-sky-600 text-white hover:bg-sky-500">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate enablement</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Fiji intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Westpac becomes the Pacific backbone for your MLM software.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software delivers multi-team clarity so finance, compliance, support, and distributors experience Westpac as a
              trusted growth partner.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive visibility</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Scorecards blend adoption, risk, and customer sentiment into concise leadership updates.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-sky-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-sky-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience excellence</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo suites cover tourism, retail, and partner settlement flows specific to Fiji’s economy.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-sky-200">
                Fiji signals
              </span>
            </div>
            {FIJI_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-sky-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-sky-600 dark:text-sky-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.note}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-sky-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-sky-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-sky-600 dark:text-sky-200">Next tide</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead the Westpac conversation across Fiji and the Pacific.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software transforms archival copy into living demos, AI knowledge, and operational guardrails that keep
              Westpac secure, fast, and seamless for every stakeholder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review investment pathways</Link>
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
