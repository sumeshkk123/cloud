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
  CalendarBlank,
  ChartLineUp,
  Circuitry,
  GlobeHemisphereWest,
  Lightning,
  MapPin,
  MegaphoneSimple,
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
  description: string;
  bullets: string[];
  icon: IconType;
};

type Sprint = {
  phase: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive source",
    value: "28 Aug 2024",
    detail: "QMoney WordPress snapshot fuels this refreshed strategy.",
    icon: CalendarBlank
  },
  {
    label: "Core region",
    value: "The Gambia",
    detail: "Mobile money, agency networks, and diaspora remittance power QMoney adoption.",
    icon: MapPin
  },
  {
    label: "Promise evolved",
    value: "Secure • Fast • Seamless",
    detail: "Reimagined as AI-aligned journeys, analytics, and governance rituals.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Narrative acceleration",
    description:
      "Custom demo, preset demo, and module references become content engines showcasing QMoney leadership across West Africa.",
    bullets: [
      "Executive briefings linking QMoney strengths to Cloud MLM Software differentiation.",
      "SEO & AIO keyword clusters focused on Gambian mobile money, agency banking, and diaspora commerce.",
      "Campaign kits for webinars, investor decks, and analyst-ready insights."
    ],
    icon: MegaphoneSimple
  },
  {
    title: "Journey orchestration",
    description:
      "We choreograph onboarding, payouts, and customer care experiences tuned to QMoney’s agency-first model.",
    bullets: [
      "Persona-led demos for distributors, field agents, and end customers across web, USSD, and app flows.",
      "Telemetry binding QMoney events to commissions, incentives, and inventory updates.",
      "Feedback loops blending AI sentiment with community forums and regional townhalls."
    ],
    icon: UsersThree
  },
  {
    title: "Operational intelligence",
    description:
      "Secure, fast, seamless evolves into dashboards, prompts, and risk libraries for finance, compliance, and AI copilots.",
    bullets: [
      "Approval, settlement, and dispute monitoring across Gambian payment rails.",
      "Risk notebooks covering Central Bank of The Gambia guidelines and AML requirements.",
      "Prompt libraries keeping bots and humans on brand for QMoney escalations."
    ],
    icon: Circuitry
  }
];

const DELIVERY_SPRINTS: Sprint[] = [
  {
    phase: "Sprint 01",
    headline: "Archive intelligence",
    items: [
      "Audit WordPress copy, modules, and CTAs to anchor stakeholder narratives.",
      "Define SEO & AIO clusters around Gambian fintech, remittance, and agency operations.",
      "Map Cloud MLM Software modules—e-wallet, backup, ticketing—to QMoney journeys."
    ],
    icon: Sparkle
  },
  {
    phase: "Sprint 02",
    headline: "Experience studio",
    items: [
      "Host immersive demo labs for distributors, agents, and finance controllers.",
      "Publish preset demo toolkit with scripts, analytics overlays, and localization guidance.",
      "Launch localization sprint covering English and local dialect enablement."
    ],
    icon: SquaresFour
  },
  {
    phase: "Sprint 03",
    headline: "Momentum analytics",
    items: [
      "Deliver executive dashboards blending QMoney telemetry with Cloud MLM KPIs.",
      "Prioritise experiment backlog for loyalty programmes, referral bonuses, and seasonal promos.",
      "Institute AI governance cadence reinforcing secure, fast, seamless messaging."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "QMoney Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Deploy QMoney’s secure, fast, seamless payments inside Cloud MLM Software. Deliver Gambian journeys, growth narratives, and AI-aligned operations.";

  return {
    title,
    description,
    keywords: [
      "QMoney payment gateway",
      "QMoney Cloud MLM Software integration",
      "Gambia mobile money",
      "West Africa fintech",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/qmoney", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type QMoneyPageProps = {
  params: { lang: SupportedLocale };
};

export default function QMoneyPage({ params }: QMoneyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-sky-50 to-cyan-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.26),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-sky-200/40 dark:bg-white/10 dark:text-sky-100">
              QMoney payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Elevate QMoney into The Gambia’s modern payment backbone with Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archived WordPress experience introduced QMoney as secure, fast, seamless. We reshape that promise into orchestrated
              journeys, growth narratives, and AI governance for Gambian distributors and executives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with QMoney strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:border-sky-200/40 dark:text-sky-100 dark:hover:bg-sky-200/10"
              >
                <Link href={demoHref}>
                  Preview QMoney demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-sky-200/60 via-white/60 to-cyan-200/60 blur-3xl dark:from-sky-500/20 dark:via-slate-950/40 dark:to-cyan-500/20" />
            <div className="grid gap-6 rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-2xl border border-sky-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700 dark:bg-sky-500/20 dark:text-sky-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-200">{metric.label}</p>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-white/70">{metric.detail}</p>
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
            Strategic pillars emerging from the QMoney archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We respect the original modules and demos, turning them into modern growth, journey, and intelligence pillars for The Gambia.
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
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-sky-400/20 via-cyan-300/20 to-sky-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-sky-500/20 dark:text-sky-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.description}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-sky-600 dark:text-sky-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(14,165,233,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(59,130,246,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery sprints for QMoney integration</h2>
            <p className="text-base text-white/80">
              A three-sprint cadence converts the archive into ongoing execution for Gambian teams and AI copilots.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_SPRINTS.map((sprint) => {
              const Icon = sprint.icon;
              return (
                <article key={sprint.phase} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">{sprint.phase}</span>
                    <Icon className="h-6 w-6 text-cyan-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{sprint.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {sprint.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-cyan-200" aria-hidden />
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
            QMoney supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The original page highlighted The Gambia. We reframed that detail for go-to-market, compliance, and CX leaders.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">The Gambia</h3>
              <GlobeHemisphereWest className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Focus on mobile money ubiquity, agency distribution networks, and diaspora remittance flows that QMoney powers across the country.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200/60 bg-gradient-to-br from-white via-sky-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-sky-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Launch QMoney with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, align your teams, and keep QMoney’s secure, fast, seamless promise consistent across humans and AI copilots.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Explore pricing and packages
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:border-sky-200/40 dark:text-sky-100 dark:hover:bg-sky-200/10"
              >
                <Link href={modulesHref}>
                  Review supporting modules
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

