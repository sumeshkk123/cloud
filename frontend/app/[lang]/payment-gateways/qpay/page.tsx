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
  Buildings,
  ChartLineUp,
  Compass,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  Sparkle,
  Sphere,
  SquaresFour,
  TrendUp,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Framework = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Wave = {
  stage: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_SIGNALS: Signal[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "QPay WordPress snapshot guides this cross-market refresh.",
    icon: Sphere
  },
  {
    label: "Key regions",
    value: "Qatar • Mongolia",
    detail: "Dual-market adoption spanning GCC e-government and Mongolian QR commerce.",
    icon: MapPin
  },
  {
    label: "Promise reframed",
    value: "Secure • Fast • Seamless",
    detail: "Elevated into journey orchestration, executive analytics, and AI enablement.",
    icon: TrendUp
  }
];

const STRATEGY_FRAMEWORKS: Framework[] = [
  {
    title: "Narrative diplomacy",
    summary:
      "Custom demo and module insights transform into storytelling that resonates across Doha boardrooms and Ulaanbaatar innovators.",
    bullets: [
      "Executive briefings aligning QPay capabilities with Cloud MLM Software differentiation.",
      "SEO & AIO keyword clusters covering Qatar omnichannel, Mongolian QR, and cross-border trade.",
      "Content series for webinars, analyst notes, and investor updates in both regions."
    ],
    icon: Buildings
  },
  {
    title: "Experience harmonics",
    summary:
      "We choreograph localized onboarding, checkout, and support flows while preserving the archive’s secure, fast, seamless promise.",
    bullets: [
      "Persona-led demos for distributors, customers, and finance teams across Qatar and Mongolia.",
      "Telemetry binding QPay events to commissions, settlement alerts, and incentive cadences.",
      "Feedback rituals blending AI sentiment with hyper-local advisory councils."
    ],
    icon: UsersFour
  },
  {
    title: "Operational intelligence",
    summary:
      "Secure, fast, seamless becomes a shared control tower of dashboards, prompts, and risk guardrails for dual-market teams.",
    bullets: [
      "Monitoring approvals, dispute ratios, and settlement timing across both regions.",
      "Regulatory playbooks for QCB directives and Mongolian Bank regulations.",
      "Prompt libraries ensuring AI assistants and humans speak with one QPay voice."
    ],
    icon: ChartLineUp
  }
];

const DELIVERY_WAVES: Wave[] = [
  {
    stage: "Wave α",
    headline: "Archive intelligence remix",
    items: [
      "Dissect legacy copy, CTAs, and module lists to anchor stakeholder messaging.",
      "Define SEO & AIO clusters for Qatar smart nation initiatives and Mongolian digital wallets.",
      "Map Cloud MLM Software modules—e-wallet, backup manager, ticketing—to QPay workflows."
    ],
    icon: Sparkle
  },
  {
    stage: "Wave β",
    headline: "Experience design studio",
    items: [
      "Facilitate dual-market demo labs for distributor, merchant, and finance personas.",
      "Compile preset demo toolkit with scripts, metric overlays, and bilingual assets.",
      "Launch localization program for Arabic, Mongolian, and English storytelling."
    ],
    icon: SquaresFour
  },
  {
    stage: "Wave γ",
    headline: "Growth telemetry loop",
    items: [
      "Deliver executive dashboards blending QPay telemetry with Cloud MLM KPIs.",
      "Prioritise experiment backlog for loyalty, government services, and tourism commerce.",
      "Maintain AI governance cadence ensuring consistent secure, fast, seamless messaging."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "QPay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Deploy QPay’s secure, fast, seamless payments inside Cloud MLM Software. Serve Qatar and Mongolia with localized journeys, governance intelligence, and AI-aligned operations.";

  return {
    title,
    description,
    keywords: [
      "QPay payment gateway",
      "QPay Cloud MLM Software integration",
      "Qatar digital payments",
      "Mongolia QR payments",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/qpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type QPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function QPayPage({ params }: QPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-slate-50 to-purple-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,181,253,0.26),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(196,181,253,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-purple-700 dark:border-purple-200/40 dark:bg-white/10 dark:text-purple-100">
              QPay payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Harmonise QPay for Qatar and Mongolia within Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archive promised secure, fast, seamless payments. We amplify that promise into dual-market journeys, executive insights,
              and AI governance across two dynamic economies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to QPay strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-500/40 text-purple-700 hover:bg-purple-500/10 dark:border-purple-200/40 dark:text-purple-100 dark:hover:bg-purple-200/10"
              >
                <Link href={demoHref}>
                  Explore cross-market demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-purple-200/60 via-white/60 to-sky-200/60 blur-3xl dark:from-purple-500/20 dark:via-slate-950/40 dark:to-sky-500/20" />
            <div className="grid gap-6 rounded-3xl border border-purple-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.label}
                    className="flex flex-col gap-3 rounded-2xl border border-purple-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-700 dark:bg-purple-500/20 dark:text-purple-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600 dark:text-purple-200">{signal.label}</p>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-white/70">{signal.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Strategy frameworks from the QPay archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We honour the original modules and demos while translating them into dual-market playbooks for Qatar and Mongolia.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGY_FRAMEWORKS.map((framework) => {
            const Icon = framework.icon;
            return (
              <article
                key={framework.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-purple-400/20 via-sky-300/20 to-purple-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-700 dark:bg-purple-500/20 dark:text-purple-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{framework.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{framework.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {framework.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-purple-600 dark:text-purple-200" aria-hidden />
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

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(196,181,253,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(56,189,248,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery waves for QPay integration</h2>
            <p className="text-base text-white/80">
              Three waves convert the archive into actionable campaigns, analytics, and AI enablement across two markets.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_WAVES.map((wave) => {
              const Icon = wave.icon;
              return (
                <article key={wave.stage} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">{wave.stage}</span>
                    <Icon className="h-6 w-6 text-purple-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{wave.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {wave.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-purple-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            QPay supported countries highlighted in the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We turned the legacy country references into intelligence cards for Qatar and Mongolia expansion teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              country: "Qatar",
              insight: "Emphasise government services, smart city commerce, and bilingual Arabic/English enablement."
            },
            {
              country: "Mongolia",
              insight: "Highlight QR-first adoption, marketplace partnerships, and Mongolian/English support rituals."
            }
          ].map((entry) => (
            <article
              key={entry.country}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{entry.country}</h3>
                <GlobeHemisphereEast className="h-6 w-6 text-purple-600 dark:text-purple-200" aria-hidden />
              </div>
              <p className="text-sm text-slate-600 dark:text-white/70">{entry.insight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-purple-200/60 bg-gradient-to-br from-white via-purple-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-purple-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Launch QPay with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, customise your demos, and keep the secure, fast, seamless promise consistent for every audience.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Review pricing and packages
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-500/40 text-purple-700 hover:bg-purple-500/10 dark:border-purple-200/40 dark:text-purple-100 dark:hover:bg-purple-200/10"
              >
                <Link href={modulesHref}>
                  Explore supporting modules
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
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

