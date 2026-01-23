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
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Programme = {
  title: string;
  summary: string;
  bullets: string[];
};

type VietnamSignal = {
  heading: string;
  body: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Narrative intelligence",
    value: "AI-synced",
    description: "Archive insights power Vietnam-first messaging for leadership, analysts, and chat assistants.",
    icon: Sparkle
  },
  {
    label: "Experience rehearsal",
    value: "Immersive",
    description: "Prototype ZaloPay journeys across mini-app, QR, and in-app experiences before launch.",
    icon: DeviceMobile
  },
  {
    label: "Operational assurance",
    value: "Always on",
    description: "Telemetry, alerts, and recovery workflows prove ZaloPay’s secure, fast, seamless delivery.",
    icon: ShieldCheck
  }
];

const PROGRAMMES: Programme[] = [
  {
    title: "Narrative launchpad",
    summary:
      "Transform the archive into Vietnam-first decks, press kits, and AI prompt cards so every stakeholder champions ZaloPay.",
    bullets: [
      "Executive briefings connect ZaloPay adoption to Vietnam’s cashless roadmap.",
      "Thought leadership series highlights Cloud MLM Software’s fintech expertise.",
      "AI prompt kits deliver multilingual guidance for support and sales copilots."
    ]
  },
  {
    title: "Experience studio",
    summary:
      "Simulate onboarding, loyalty, and settlement journeys that mirror ZaloPay behaviour in Vietnam’s super-app ecosystem.",
    bullets: [
      "Journey labs capture conversion, latency, and sentiment across mobile and web touchpoints.",
      "Role-play rehearsals equip distributors with narrative and troubleshooting scripts.",
      "Feedback loops update demos, documentation, and AI knowledge bases weekly."
    ]
  },
  {
    title: "Command hub",
    summary:
      "Automate compliance, finance, and support operations with telemetry that de-risks every ZaloPay interaction.",
    bullets: [
      "Compliance trackers monitor State Bank of Vietnam regulations and PSD updates.",
      "Finance dashboards reconcile settlements, vouchers, and loyalty credits daily.",
      "Continuity drills confirm readiness for holiday surges and campaign bursts."
    ]
  }
];

const VIETNAM_SIGNALS: VietnamSignal[] = [
  {
    heading: "August 28, 2024 — Vietnam confirmed",
    body:
      "The archive lists Vietnam as a supported country, delivering credible evidence for every executive, regulatory, and partner briefing.",
    icon: MapPin
  },
  {
    heading: "Super-app ecosystem insight",
    body:
      "Narratives map ZaloPay’s role across Zalo’s messaging, social, and commerce platforms, keeping AI copilots context rich.",
    icon: UsersThree
  },
  {
    heading: "Growth + compliance synergy",
    body:
      "Dashboards blend adoption metrics, risk posture, and customer sentiment so leadership acts with confidence.",
    icon: GlobeHemisphereEast
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "ZaloPay Payment Gateway for Cloud MLM Software";
  const description =
    "Convert the ZaloPay Payment Gateway archive into a Vietnam-first launch programme with narrative leadership, experience design, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "ZaloPay payment gateway integration",
      "Vietnam MLM software payments",
      "Cloud MLM Software ZaloPay",
      "secure fast seamless ZaloPay",
      "AI enablement for ZaloPay"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/zalopay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ZaloPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function ZaloPayPage({ params }: ZaloPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-teal-100 bg-gradient-to-br from-[#e7fff7] via-white to-[#eef7ff] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#022b23] dark:via-[#010f1a] dark:to-black">
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/20" />
        <div className="absolute right-0 bottom-12 h-80 w-80 translate-x-1/3 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 dark:border-white/10 dark:bg-white/10 dark:text-teal-200">
              Vietnam • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                ZaloPay Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We transform the archive into a launch system where leadership, distributors, and AI assistants speak a unified
                ZaloPay story across Vietnam’s super-app ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the ZaloPay rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review engagement tiers</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-teal-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-600 dark:text-teal-200">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-teal-100 bg-gradient-to-br from-white via-teal-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-teal-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <RocketLaunch className="h-6 w-6 text-teal-600 dark:text-teal-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-200">Programme matrix</p>
            </div>
            <div className="space-y-6">
              {PROGRAMMES.map((programme) => (
                <article key={programme.title} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{programme.title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{programme.summary}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {programme.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-teal-600 text-white hover:bg-teal-500">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate enablement</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Vietnam insight
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              ZaloPay becomes a growth amplifier, not just a payment checkbox.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software harmonises communications, customer journeys, and operations so ZaloPay’s secure, fast, seamless
              promise becomes visible to every stakeholder.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-teal-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-teal-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive dashboards</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Weekly scorecards blend adoption, risk, and sentiment into decision-ready insights.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-teal-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-teal-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience clarity</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo suites cover voucher, QR, and super-app flows for distributors and partners.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-teal-100 bg-gradient-to-br from-white via-teal-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-teal-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-teal-600 dark:text-teal-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700 dark:text-teal-200">
                Vietnam signals
              </span>
            </div>
            {VIETNAM_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.heading} className="space-y-2 rounded-2xl border border-teal-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-teal-600 dark:text-teal-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.heading}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-teal-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-teal-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-teal-600 dark:text-teal-200">Next orbit</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead ZaloPay engagements with confidence.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software converts archival copy into living demos, AI prompts, and operational guardrails that keep ZaloPay
              secure, fast, and seamless for every stakeholder.
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
