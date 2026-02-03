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
  Circuitry,
  Coins,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
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

type TimelineStep = {
  phase: string;
  focus: string;
  items: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "Paysera WordPress dataset fuels this modernised narrative.",
    icon: Sparkle
  },
  {
    label: "Regional spotlight",
    value: "Baltics",
    detail: "Latvia and Lithuania anchor Paysera’s payment leadership.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "Refined into AI-ready operations for finance, support, and field leaders.",
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Financial governance cockpit",
    description:
      "Treasury, compliance, and legal teams gain granular insight aligned with European regulatory expectations.",
    bullets: [
      "Realtime dashboards for approvals, settlement pacing, and currency conversions.",
      "Risk notebooks mapping PSD2, AML, and data residency requirements.",
      "Executive briefings translating Paysera telemetry into board-ready narratives."
    ],
    icon: Buildings
  },
  {
    title: "Distributor & customer journeys",
    description:
      "Custom demo and preset demo insights now power orchestrated experiences for Baltic distributors and EU shoppers.",
    bullets: [
      "Guided onboarding flows with multilingual support (Latvian, Lithuanian, English).",
      "Upsell sequences connecting Paysera wallets, cards, and invoicing to product bundles.",
      "Feedback loops blending AI sentiment analysis with human community councils."
    ],
    icon: UsersThree
  },
  {
    title: "AI enablement fabric",
    description:
      "Human teams and AI assistants co-create a single Paysera story from ticketing to investor relations.",
    bullets: [
      "Prompt libraries grounded in Paysera terminology, compliance, and pricing.",
      "Automation recipes linking payment events to commissions, stock, and documents.",
      "Knowledge base sprints updating FAQs, legal decks, and marketing assets simultaneously."
    ],
    icon: Circuitry
  }
];

const TIMELINE: TimelineStep[] = [
  {
    phase: "Phase 01",
    focus: "Archive intelligence",
    items: [
      "Audit WordPress copy, modules, and CTA structures for insight reuse.",
      "Define SEO & AIO keyword clusters across Baltics, EU fintech, and cross-border trade.",
      "Align Cloud MLM Software modules—e-wallet, backups, ticketing—with Paysera flows."
    ],
    icon: Coins
  },
  {
    phase: "Phase 02",
    focus: "Experience studio",
    items: [
      "Custom demo lab for distributor, merchant, and finance personas covering Paysera journeys.",
      "Preset demo kit with ready-to-share storyboards, scripts, and analytics overlays.",
      "Localization sprint addressing Baltic languages, compliance, and cultural nuance."
    ],
    icon: Lightning
  },
  {
    phase: "Phase 03",
    focus: "Growth intelligence",
    items: [
      "Executive dashboards highlighting retention, expansion, and risk signals.",
      "Experiment backlog tracking cashback, partner marketplaces, and B2B invoicing.",
      "AI governance cadence keeping humans and automatons perfectly in sync."
    ],
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Paysera Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate Paysera’s secure, fast, seamless payments with Cloud MLM Software. Blend Baltic-ready journeys, EU governance, and AI enablement for rapid growth.";

  return {
    title,
    description,
    keywords: [
      "Paysera payment gateway",
      "Paysera Cloud MLM Software integration",
      "Baltic fintech payments",
      "EU payment compliance",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paysera", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayseraPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayseraPage({ params }: PayseraPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-emerald-50 to-slate-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.24),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.22),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-emerald-200/40 dark:bg-white/10 dark:text-emerald-100">
              Paysera payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Position Paysera as the Baltic fintech command center for Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              Secure, fast, seamless—the archive&apos;s promise—now reframed as executive-ready narratives, localized journeys, and
              AI enablement stretching from Vilnius to Riga and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Partner with Paysera strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-200/40 dark:text-emerald-100 dark:hover:bg-emerald-200/10"
              >
                <Link href={demoHref}>
                  Experience the Paysera demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-emerald-200/60 via-white/60 to-sky-200/60 blur-3xl dark:from-emerald-500/20 dark:via-slate-950/40 dark:to-sky-500/20" />
            <div className="grid gap-6 rounded-3xl border border-emerald-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-2xl border border-emerald-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                        {metric.label}
                      </p>
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
            Strategic pillars reimagined from the Paysera archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Custom demo, preset demo, and module insights now empower storytellers, operators, and AI teammates across the Baltics.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-sky-300/20 to-emerald-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.description}</p>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(74,222,128,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(59,130,246,0.26),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Execution timeline for Paysera integration</h2>
            <p className="text-base text-white/80">
              A three-phase roadmap elevates the archive into a modern operating model for the Baltics and broader EU markets.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {TIMELINE.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{step.phase}</span>
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.focus}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {step.items.map((item) => (
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
            Paysera supported countries from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Latvia and Lithuania were highlighted. We translated that information into go-to-market intelligence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              country: "Latvia",
              insight: "Highlight Eurozone readiness, open banking connectivity, and cashback incentives for Riga retailers."
            },
            {
              country: "Lithuania",
              insight: "Emphasise fintech innovation hubs, SEPA integrations, and multilingual distributor support."
            }
          ].map((entry) => (
            <article
              key={entry.country}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{entry.country}</h3>
                <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              </div>
              <p className="text-sm text-slate-600 dark:text-white/70">{entry.insight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white via-emerald-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Ready to activate Paysera with Cloud MLM Software?
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, run bespoke demos, and ensure the secure, fast, seamless message carries across humans and
                AI assistants throughout the Baltics.
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

