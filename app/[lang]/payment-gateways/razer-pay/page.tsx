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
  GameController,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
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

type Sprint = {
  stage: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive capture",
    value: "28 Aug 2024",
    detail: "Razer Pay WordPress snapshot guides today’s gamer-first strategy.",
    icon: Sparkle
  },
  {
    label: "Lead market",
    value: "Malaysia",
    detail: "E-wallet, gaming, and lifestyle commerce define Razer Pay’s momentum.",
    icon: MapPin
  },
  {
    label: "Promise recharged",
    value: "Secure • Fast • Seamless",
    detail: "Rebuilt into AI-ready journeys, analytics, and governance for Cloud MLM Software.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Lifestyle storytelling",
    summary:
      "Custom demo and module references become experiences that resonate with Malaysia’s gaming and youth culture.",
    bullets: [
      "Executive narratives linking Razer Pay perks to Cloud MLM Software differentiation.",
      "SEO & AIO keyword clusters covering gaming commerce, lifestyle loyalty, and fintech Malaysia.",
      "Campaign kits for livestreams, influencer spotlights, and analyst briefings."
    ],
    icon: Broadcast
  },
  {
    title: "Experience level-ups",
    summary:
      "We choreograph onboarding, spending, and loyalty journeys fuelled by Razer’s gamified DNA.",
    bullets: [
      "Persona-led demos for gamers, distributors, and finance teams across mobile, QR, and in-store flows.",
      "Telemetry binding Razer Pay events to commissions, incentives, and community rewards.",
      "Feedback rituals blending AI sentiment with guild-style advisory councils."
    ],
    icon: GameController
  },
  {
    title: "Operational mastery",
    summary:
      "Secure, fast, seamless becomes a control tower with dashboards, prompts, and risk guardrails for Malaysia’s regulatory landscape.",
    bullets: [
      "Monitoring approvals, dispute trends, and settlement timing across Malaysian acquirers.",
      "Compliance notebooks covering Bank Negara Malaysia directives and data residency.",
      "Prompt libraries ensuring AI assistants and human teams share the same Razer Pay tone."
    ],
    icon: Circuitry
  }
];

const DELIVERY_SPRINTS: Sprint[] = [
  {
    stage: "Sprint One",
    headline: "Archive intelligence remix",
    items: [
      "Audit WordPress copy, modules, and CTAs to anchor gamer-centric narratives.",
      "Define SEO & AIO clusters around Malaysian lifestyle, gaming, and e-wallet adoption.",
      "Align Cloud MLM Software modules—e-wallet, backup manager, ticketing—with Razer Pay workflows."
    ],
    icon: SquaresFour
  },
  {
    stage: "Sprint Two",
    headline: "Experience studio",
    items: [
      "Run immersive demo sessions for distributors, gamers, and finance leaders.",
      "Publish preset demo toolkit with scripts, overlays, and localized Malaysian assets.",
      "Launch localization sprint covering Bahasa Malaysia and English multicultural messaging."
    ],
    icon: UsersThree
  },
  {
    stage: "Sprint Three",
    headline: "Growth analytics loop",
    items: [
      "Deliver executive dashboards blending Razer Pay telemetry with Cloud MLM KPIs.",
      "Curate experiment backlog for loyalty quests, tournament promotions, and travel bundles.",
      "Operate AI governance cadence reinforcing secure, fast, seamless messaging across channels."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Razer Pay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Ignite Razer Pay’s secure, fast, seamless payments inside Cloud MLM Software. Deliver Malaysian gamer-first journeys, lifestyle storytelling, and AI-enabled operations.";

  return {
    title,
    description,
    keywords: [
      "Razer Pay payment gateway",
      "Razer Pay Cloud MLM Software integration",
      "Malaysia e-wallet",
      "gaming payments Malaysia",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/razer-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RazerPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function RazerPayPage({ params }: RazerPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-emerald-50 to-slate-900/70 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.28),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.24),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.26),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Razer Pay payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Ignite Razer Pay experiences for Malaysia’s gaming economy inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-white/80">
              The archive promised secure, fast, seamless transactions. We deliver that energy through orchestrated journeys, analytics,
              and AI governance tailored to Malaysia’s vibrant gaming and lifestyle audience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Partner with Razer strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Explore gamer demo lab
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-emerald-200/70 via-white/40 to-slate-900/60 blur-3xl dark:from-emerald-500/20 dark:via-black/40 dark:to-slate-900/20" />
            <div className="grid gap-6 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{metric.label}</p>
                      <p className="text-xl font-semibold text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm text-white/70">{metric.detail}</p>
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
            Strategic pillars remixed from the Razer Pay archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We translate the original modules and demos into modern growth, experience, and intelligence engines for Malaysia’s lifestyle economy.
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
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-slate-300/20 to-emerald-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-emerald-600 dark:text-emerald-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(16,185,129,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(74,222,128,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery sprints for Razer Pay integration</h2>
            <p className="text-base text-white/80">
              Three sprints turn the archive into ongoing execution across journeys, analytics, and AI enablement in Malaysia.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_SPRINTS.map((sprint) => {
              const Icon = sprint.icon;
              return (
                <article key={sprint.stage} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{sprint.stage}</span>
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{sprint.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {sprint.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-emerald-200" aria-hidden />
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
            Razer Pay supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Malaysia was the highlighted market. We reframed that mention into intelligence for go-to-market, compliance, and CX leaders.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Malaysia</h3>
              <GlobeHemisphereEast className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Emphasise gaming partnerships, cashless lifestyle adoption, and bilingual (Bahasa Malaysia/English) enablement anchored by Razer Pay.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white via-emerald-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Activate Razer Pay with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, tailor gamer-first demos, and keep Razer Pay’s secure, fast, seamless promise alive across humans and AI copilots.
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
                className="border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-200/40 dark:text-emerald-100 dark:hover:bg-emerald-200/10"
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

