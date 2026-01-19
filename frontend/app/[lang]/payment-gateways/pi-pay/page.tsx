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
  Broadcast,
  ChartLineUp,
  Circuitry,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Cycle = {
  phase: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_SIGNALS: Signal[] = [
  {
    label: "Archive timestamp",
    value: "28 Aug 2024",
    detail: "Pi Pay WordPress capture underpins today’s refreshed narrative.",
    icon: Sparkle
  },
  {
    label: "Focus market",
    value: "Cambodia",
    detail: "QR payments, super-app behaviours, and tourism retail define Pi Pay’s reach.",
    icon: MapPin
  },
  {
    label: "Promise amplified",
    value: "Secure • Fast • Seamless",
    detail: "Lifted into AI-ready journeys, analytics, and compliance rituals inside Cloud MLM Software.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Experience artistry",
    summary:
      "The archive’s custom and preset demos inspire multi-sensory journeys that celebrate Pi Pay’s Cambodian lifestyle brand.",
    bullets: [
      "Guided flows for distributors, shoppers, and merchants across mobile, POS, and social commerce.",
      "Storyboards highlighting cashback, QR acceptance, and super-app loyalty features.",
      "Sentiment dashboards that combine AI analysis with on-the-ground market councils."
    ],
    icon: Palette
  },
  {
    title: "Growth broadcast",
    summary:
      "Modules and services become content engines that position Cloud MLM Software as Pi Pay’s innovation navigator.",
    bullets: [
      "SEO & AIO keyword sets focused on Phnom Penh fintech, hospitality, and tourism retail.",
      "Campaign kits for webinars, influencer collaborations, and analyst briefings.",
      "Executive memos translating Pi Pay telemetry into investor-grade narratives."
    ],
    icon: Broadcast
  },
  {
    title: "Operational intelligence",
    summary:
      "Secure, fast, seamless evolves into dashboards, prompts, and risk libraries ready for AI copilots and human leaders.",
    bullets: [
      "Monitoring approvals, dispute trends, and settlement timing across Cambodian acquirers.",
      "Compliance notebooks covering NBC guidance, data privacy, and cross-border remittances.",
      "Automation recipes tying Pi Pay events to commissions, inventory, and support ticketing."
    ],
    icon: Circuitry
  }
];

const ENABLEMENT_CYCLES: Cycle[] = [
  {
    phase: "Cycle 1",
    headline: "Archive intelligence remix",
    items: [
      "Audit legacy copy, CTAs, and module references to anchor stakeholder messaging.",
      "Define SEO & AIO clusters around Cambodian lifestyle commerce and digital wallets.",
      "Map Cloud MLM Software modules—e-wallet, backup manager, ticketing—to Pi Pay experiences."
    ],
    icon: SquaresFour
  },
  {
    phase: "Cycle 2",
    headline: "Experience & enablement lab",
    items: [
      "Run immersive demo labs for distributor, shopper, and finance personas.",
      "Publish preset demo toolkit with scripts, analytics overlays, and localized assets.",
      "Localize storytelling for Khmer and English audiences with cultural nuance."
    ],
    icon: UsersThree
  },
  {
    phase: "Cycle 3",
    headline: "Momentum analytics",
    items: [
      "Build executive dashboards blending Pi Pay telemetry with Cloud MLM KPIs.",
      "Prioritise experiment backlog for festivals, tourism bundles, and influencer activations.",
      "Operate AI governance cadence ensuring assistants echo Pi Pay’s brand promise."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pi Pay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Launch Pi Pay’s secure, fast, seamless payments inside Cloud MLM Software. Deliver Cambodian journeys, narrative velocity, and AI-governed operations.";

  return {
    title,
    description,
    keywords: [
      "Pi Pay payment gateway",
      "Pi Pay Cloud MLM Software integration",
      "Cambodia digital payments",
      "Cambodia QR payments",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/pi-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PiPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function PiPayPage({ params }: PiPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-rose-50 to-amber-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.26),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:border-rose-200/40 dark:bg-white/10 dark:text-rose-100">
              Pi Pay payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Design Cambodian-first Pi Pay experiences inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archived WordPress page introduced Pi Pay as secure, fast, seamless. We extend that promise into orchestrated journeys,
              growth narratives, and AI enablement for Cambodia’s vibrant digital economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with Pi Pay strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-rose-500/40 text-rose-700 hover:bg-rose-500/10 dark:border-rose-200/40 dark:text-rose-100 dark:hover:bg-rose-200/10"
              >
                <Link href={demoHref}>
                  Watch Pi Pay demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-rose-200/60 via-white/60 to-amber-200/60 blur-3xl dark:from-rose-500/20 dark:via-slate-950/40 dark:to-amber-500/20" />
            <div className="grid gap-6 rounded-3xl border border-rose-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.label}
                    className="flex flex-col gap-3 rounded-2xl border border-rose-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-200">
                        {signal.label}
                      </p>
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
            Strategic pillars infused with Pi Pay DNA
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We honour the original modules while turning them into modern playbooks for growth, experience, and intelligence in Cambodia.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-rose-400/20 via-amber-300/20 to-rose-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-rose-600 dark:text-rose-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(244,114,182,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(250,204,21,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Enablement cycles for Pi Pay integration</h2>
            <p className="text-base text-white/80">
              Three cycles convert the archive into sustained execution across journeys, analytics, and AI enablement for Cambodia.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {ENABLEMENT_CYCLES.map((cycle) => {
              const Icon = cycle.icon;
              return (
                <article key={cycle.phase} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">{cycle.phase}</span>
                    <Icon className="h-6 w-6 text-amber-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{cycle.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {cycle.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-amber-200" aria-hidden />
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
            Pi Pay supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Cambodia was the highlighted region. We reframed that detail into intelligence for go-to-market and compliance teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Cambodia</h3>
              <GlobeHemisphereEast className="h-6 w-6 text-rose-600 dark:text-rose-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Emphasise QR-first behaviour, super-app loyalty, and bilingual (Khmer/English) enablement backed by Pi Pay’s ecosystem.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-rose-200/60 bg-gradient-to-br from-white via-rose-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-rose-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Activate Pi Pay with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, stage Cambodian-first demos, and keep Pi Pay’s secure, fast, seamless promise vibrant across humans
                and AI assistants.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  View pricing and packages
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-rose-500/40 text-rose-700 hover:bg-rose-500/10 dark:border-rose-200/40 dark:text-rose-100 dark:hover:bg-rose-200/10"
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
