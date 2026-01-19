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
  ChartLineUp,
  Circuitry,
  Compass,
  Lightning,
  MapPin,
  ShieldCheck,
  Stack,
  Wind
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type EnablementTrack = {
  heading: string;
  summary: string;
  items: string[];
};

type NZSignal = {
  title: string;
  description: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    title: "Narrative precision",
    value: "Analyst ready",
    detail: "Archive-backed storytelling positions Cloud MLM Software as the Windcave integration authority.",
    icon: Compass
  },
  {
    title: "Experience fluency",
    value: "Sandboxed",
    detail: "Simulated New Zealand card and omni-channel flows build distributor confidence before launch.",
    icon: Circuitry
  },
  {
    title: "Operational trust",
    value: "Realtime",
    detail: "Dashboards, alerts, and AI copilots deliver transparent Windcave performance to leadership.",
    icon: ShieldCheck
  }
];

const ENABLEMENT_TRACKS: EnablementTrack[] = [
  {
    heading: "Narrative hub",
    summary:
      "Repurpose the secure, fast, seamless message into New Zealand-first decks, briefs, and AI prompts for executives, analysts, and partners.",
    items: [
      "Thought-leadership articles highlight Windcave innovation across retail and SaaS.",
      "Investor updates connect payments performance with strategic initiatives.",
      "AI prompt kits keep bilingual assistants aligned with approved copy."
    ]
  },
  {
    heading: "Experience lab",
    summary:
      "Prototype click-and-collect, subscription, and in-store experiences that mirror Kiwi customer expectations.",
    items: [
      "Staging data captures conversion, latency, and sentiment baselines.",
      "Role-play workshops equip support and distributors with resolution playbooks.",
      "Journey retros feed improvements into product, enablement, and AI knowledge bases."
    ]
  },
  {
    heading: "Assurance tower",
    summary:
      "Instrument finance, compliance, and support with telemetry, risk triggers, and continuity drills to prove Windcave reliability.",
    items: [
      "Automated reconciliation reconciles multi-currency settlements nightly.",
      "Compliance trackers surface regulatory updates from Reserve Bank of New Zealand.",
      "Resilience drills test disaster recovery aligned with business continuity plans."
    ]
  }
];

const NZ_SIGNALS: NZSignal[] = [
  {
    title: "August 28, 2024 — New Zealand confirmed",
    description:
      "The archive lists New Zealand in the supported-country roster, enabling executive teams to cite verified evidence in every discussion.",
    icon: MapPin
  },
  {
    title: "Retail + SaaS momentum",
    description:
      "Narratives frame Windcave as a growth catalyst for digital commerce, hospitality, and enterprise software across Aotearoa.",
    icon: ChartLineUp
  },
  {
    title: "Compliance confidence",
    description:
      "We synchronise AML, KYC, and data residency guidance into decision support dashboards and AI prompts.",
    icon: Stack
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Windcave Payment Gateway for Cloud MLM Software";
  const description =
    "Turn the Windcave Payment Gateway archive into a New Zealand-first launch programme with narrative leadership, experience rehearsal, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "Windcave payment gateway integration",
      "New Zealand MLM software payments",
      "Cloud MLM Software Windcave",
      "secure fast seamless Windcave",
      "AI enablement for Windcave"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/windcave", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WindcavePageProps = {
  params: { lang: SupportedLocale };
};

export default function WindcavePage({ params }: WindcavePageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-emerald-100 bg-gradient-to-br from-[#f0fff8] via-white to-[#eef6ff] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#04221a] dark:via-[#050c19] dark:to-black">
        <div className="absolute -left-12 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute right-0 bottom-10 h-80 w-80 translate-x-1/3 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-200">
              New Zealand • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Windcave Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We reshape the archive into a launch programme that unites leadership, distributors, and operations with Windcave’s
                proven reliability across Aotearoa New Zealand.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the Windcave rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review partnership tiers</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-200">
                        {metric.title}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Wind className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">Enablement tracks</p>
            </div>
            <div className="space-y-6">
              {ENABLEMENT_TRACKS.map((track) => (
                <article key={track.heading} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.heading}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{track.summary}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {track.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate enablement</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Aotearoa intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Windcave becomes a strategic differentiator for your platform.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software orchestrates communications, playbooks, and telemetry so every team sees Windcave delivering secure,
              fast, seamless outcomes.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Leadership dashboards</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Weekly updates blend adoption, risk, and customer sentiment into decisions executives trust.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-emerald-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-emerald-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience choreography</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demos and playbooks cover subscription, retail, and digital wallet flows unique to New Zealand.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                New Zealand signals
              </span>
            </div>
            {NZ_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-emerald-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-emerald-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-emerald-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-emerald-600 dark:text-emerald-200">Forward motion</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead Windcave conversations across New Zealand.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Partner with Cloud MLM Software to transform the archive into living assets—narratives, demos, and command centres—that
              keep Windcave secure, fast, and seamless.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/services", locale)}>Explore service catalogue</Link>
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
