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
  BriefcaseMetal,
  ChartLineUp,
  Compass,
  GlobeHemisphereNorth,
  Lightning,
  MapPin,
  Note,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Track = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  stage: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_HIGHLIGHTS: Highlight[] = [
  {
    label: "Archive snapshot",
    value: "28 Aug 2024",
    detail: "Payzone WordPress copy fuels today’s Moroccan-ready experience.",
    icon: Note
  },
  {
    label: "Regional spotlight",
    value: "Morocco",
    detail: "Marketplace payouts and tourism commerce energise Payzone’s adoption in Casablanca and Marrakech.",
    icon: MapPin
  },
  {
    label: "Promise remastered",
    value: "Secure • Fast • Seamless",
    detail: "Translated into dashboards, journeys, and AI scripts inside Cloud MLM Software.",
    icon: ShieldCheck
  }
];

const STRATEGY_TRACKS: Track[] = [
  {
    title: "Growth narratives",
    description:
      "Custom and preset demos from the archive evolve into north-African storytelling that wins leaders, regulators, and partners.",
    bullets: [
      "Executive briefings aligning Payzone capabilities with Cloud MLM Software value propositions.",
      "SEO & AIO clusters focused on Moroccan ecommerce, tourism, and marketplace payouts.",
      "Content engine for webinars, investor decks, and analyst-ready insights."
    ],
    icon: BriefcaseMetal
  },
  {
    title: "Experience journeys",
    description:
      "Multi-channel flows celebrate Payzone’s speed for distributors, shoppers, and finance teams operating across Morocco.",
    bullets: [
      "Guided demos covering onboarding, renewals, and loyalty redemption in Arabic, French, and English.",
      "Telemetry binding Payzone events to commissions, inventory, and CRM workflows.",
      "Field feedback rituals blending AI sentiment with townhall-style listening sessions."
    ],
    icon: UsersFour
  },
  {
    title: "Operational intelligence",
    description:
      "Secure, fast, seamless becomes a living control tower with dashboards, prompts, and risk libraries for Moroccan compliance.",
    bullets: [
      "Monitoring for approvals, chargebacks, and settlement pacing across local acquirers.",
      "Risk notebooks mapping Bank Al-Maghrib guidance and regional data residency requirements.",
      "Prompt kits keeping AI assistants and humans aligned on Payzone escalation playbooks."
    ],
    icon: ChartLineUp
  }
];

const DELIVERY_PHASES: Phase[] = [
  {
    stage: "Phase A",
    headline: "Archive intelligence remix",
    items: [
      "Decode WordPress copy, module lists, and CTAs to anchor stakeholder messaging.",
      "Define SEO & AIO keyword themes spanning Morocco fintech, tourism, and creator commerce.",
      "Align Cloud MLM Software modules—e-wallet, backup manager, ticketing—with Payzone integration points."
    ],
    icon: Sparkle
  },
  {
    stage: "Phase B",
    headline: "Experience production lab",
    items: [
      "Host interactive demo labs for distributor, merchant, and finance personas.",
      "Publish preset demo toolkit with scripts, dashboards, and recording templates.",
      "Launch localization kit addressing Arabic RTL, French content, and accessibility."
    ],
    icon: SquaresFour
  },
  {
    stage: "Phase C",
    headline: "Momentum analytics",
    items: [
      "Deliver executive dashboards blending Payzone telemetry with Cloud MLM KPIs.",
      "Establish experiment backlog covering loyalty campaigns, travel bundles, and seasonal offers.",
      "Operate AI governance cadence reinforcing secure, fast, seamless messaging across assistants."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Payzone Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate Payzone’s secure, fast, seamless payments within Cloud MLM Software. Craft Moroccan journeys, governance intelligence, and AI-aligned enablement.";

  return {
    title,
    description,
    keywords: [
      "Payzone payment gateway",
      "Payzone Cloud MLM Software integration",
      "Morocco digital payments",
      "North Africa fintech",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/payzone", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayzonePageProps = {
  params: { lang: SupportedLocale };
};

export default function PayzonePage({ params }: PayzonePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-emerald-50 to-teal-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.26),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(45,212,191,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(45,212,191,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700 dark:border-teal-200/40 dark:bg-white/10 dark:text-teal-100">
              Payzone payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Reimagine Payzone as Morocco’s frictionless payment platform inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archive promised secure, fast, seamless transactions. We deliver that commitment as orchestrated journeys, governance
              intelligence, and AI copilots tailored to Morocco’s digital economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Partner with Payzone strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-500/40 text-teal-700 hover:bg-teal-500/10 dark:border-teal-200/40 dark:text-teal-100 dark:hover:bg-teal-200/10"
              >
                <Link href={demoHref}>
                  Discover localized demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-teal-200/60 via-white/60 to-emerald-200/60 blur-3xl dark:from-teal-500/20 dark:via-slate-950/40 dark:to-emerald-500/20" />
            <div className="grid gap-6 rounded-3xl border border-teal-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.label}
                    className="flex flex-col gap-3 rounded-2xl border border-teal-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-200">
                        {highlight.label}
                      </p>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">{highlight.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-white/70">{highlight.detail}</p>
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
            Strategy tracks re-imagined from the Payzone archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We honour the original module and demo listings while elevating them into modern growth, journey, and intelligence tracks.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGY_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-teal-400/20 via-emerald-300/20 to-teal-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{track.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{track.description}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-teal-600 dark:text-teal-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(16,185,129,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(45,212,191,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery phases for Payzone integration</h2>
            <p className="text-base text-white/80">
              Three phases turn the recovered archive into a living execution plan for Morocco-focused teams and AI copilots.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article key={phase.stage} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{phase.stage}</span>
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{phase.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {phase.items.map((item) => (
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
            Payzone supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Morocco was the highlighted country. We transformed that callout into immediate intelligence for your expansion and compliance teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Morocco</h3>
              <GlobeHemisphereNorth className="h-6 w-6 text-teal-600 dark:text-teal-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Emphasise tourism commerce, marketplace payouts, and bilingual (Arabic/French) enablement that Payzone supports across Moroccan cities.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-teal-200/60 bg-gradient-to-br from-white via-emerald-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-teal-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Activate Payzone with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, stage personalised demos, and keep Payzone’s secure, fast, seamless promise consistent for humans and AI copilots.
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
                className="border-teal-500/40 text-teal-700 hover:bg-teal-500/10 dark:border-teal-200/40 dark:text-teal-100 dark:hover:bg-teal-200/10"
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

