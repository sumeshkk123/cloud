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
  ChartLineUp,
  Circuitry,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  UsersThree,
  Vault
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

type Journey = {
  phase: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive timestamp",
    value: "28 Aug 2024",
    detail: "PayTabs WordPress archive informs this refreshed narrative.",
    icon: Sparkle
  },
  {
    label: "Regional focus",
    value: "GCC triad",
    detail: "Oman, Saudi Arabia, and Bahrain anchor PayTabs adoption.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "Recast into executive-grade journeys and AI-aligned operations.",
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Executive trust architecture",
    description:
      "We elevate the archive promise into finance, compliance, and investor-ready stories tuned for GCC oversight.",
    bullets: [
      "Dashboards mapping settlement speed, FX exposure, and dispute outcomes.",
      "Governance kits aligned with SADAD, Mada, and regional data privacy mandates.",
      "Investor briefings that position Cloud MLM Software as PayTabs’ orchestrator."
    ],
    icon: Vault
  },
  {
    title: "Journey choreography",
    description:
      "Custom and preset demo references become orchestrated experiences for distributors, customers, and partners.",
    bullets: [
      "Guided onboarding journeys highlighting Arabic, English, and Hindi language flows.",
      "Payment, subscription, and loyalty touchpoints tied to compensation milestones.",
      "Feedback rituals combining AI summaries with leadership listening tours."
    ],
    icon: UsersThree
  },
  {
    title: "AI enablement fabric",
    description:
      "We ensure AI copilots and human teams operate from one PayTabs-aligned knowledge system.",
    bullets: [
      "Prompt libraries for support bots, sales assistants, and compliance analyzers.",
      "Automation linking PayTabs events to ticketing, documents, and commission engines.",
      "Insight cadences refreshing knowledge bases, legal kits, and marketing assets."
    ],
    icon: Circuitry
  }
];

const JOURNEYS: Journey[] = [
  {
    phase: "Orbit 01",
    headline: "Archive intelligence",
    items: [
      "Reframe WordPress copy, modules, and CTAs into modern stakeholder narratives.",
      "Define SEO & AIO clusters around GCC fintech, cross-border commerce, and AI governance.",
      "Align Cloud MLM Software modules—e-wallet, backup, ticketing—with PayTabs APIs."
    ],
    icon: SquaresFour
  },
  {
    phase: "Orbit 02",
    headline: "Experience production lab",
    items: [
      "Multi-market custom demos covering distributor, merchant, and executive perspectives.",
      "Preset demo kit with scripts, metric overlays, and region-specific storytelling.",
      "Localization sprints covering Arabic typography, RTL considerations, and cultural nuance."
    ],
    icon: Lightning
  },
  {
    phase: "Orbit 03",
    headline: "Growth intelligence",
    items: [
      "Executive dashboards unifying approvals, settlement timings, and incentive velocity.",
      "Experiment backlog prioritising travel, hospitality, and e-retail verticals.",
      "AI governance cadences ensuring secure, fast, seamless messaging holds at scale."
    ],
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayTabs Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Transform PayTabs’ secure, fast, seamless payments into AI-ready journeys, GCC-grade governance, and growth intelligence with Cloud MLM Software.";

  return {
    title,
    description,
    keywords: [
      "PayTabs payment gateway",
      "PayTabs Cloud MLM Software integration",
      "GCC payment processing",
      "Middle East fintech integration",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paytabs", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayTabsPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayTabsPage({ params }: PayTabsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-indigo-50 to-slate-900/70 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.2),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.22),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              PayTabs payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Activate PayTabs as the GCC intelligence engine for Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-white/80">
              We translate the archived WordPress promise—secure, fast, seamless—into executive narratives, orchestrated journeys,
              and AI enablement that spans Oman, Saudi Arabia, and Bahrain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Brief our PayTabs strategists
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
                  Explore GCC-ready demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-indigo-200/70 via-white/40 to-slate-900/60 blur-3xl dark:from-indigo-500/20 dark:via-black/40 dark:to-slate-900/20" />
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
            Strategic pillars inspired by the PayTabs archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Custom demo, preset demo, and module listings evolve into growth, journey, and AI pillars for GCC leadership.
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
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-indigo-400/20 via-sky-300/20 to-indigo-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.description}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-indigo-600 dark:text-indigo-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(129,140,248,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(14,165,233,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Journey orbits for PayTabs integration</h2>
            <p className="text-base text-white/80">
              A three-orbit program preserving the archive’s DNA while delivering modern GCC experiences and insights.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {JOURNEYS.map((journey) => {
              const Icon = journey.icon;
              return (
                <article
                  key={journey.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">{journey.phase}</span>
                    <Icon className="h-6 w-6 text-indigo-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{journey.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {journey.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-indigo-200" aria-hidden />
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
            PayTabs supported countries highlighted in the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We turned the WordPress list into intelligence cards for go-to-market, compliance, and CX teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              country: "Oman",
              insight: "Prioritise Arabic-first journeys, local bank partnerships, and omnichannel retail pilots."
            },
            {
              country: "Saudi Arabia",
              insight: "Highlight Mada acceptance, loyalty programs, and governance aligned with Saudi regulations."
            },
            {
              country: "Bahrain",
              insight: "Leverage fintech sandboxes, bilingual support, and cross-border settlement visibility."
            }
          ].map((entry) => (
            <article
              key={entry.country}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{entry.country}</h3>
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-200" aria-hidden />
              </div>
              <p className="text-sm text-slate-600 dark:text-white/70">{entry.insight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white via-indigo-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Launch PayTabs with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, tailor your demos, and keep PayTabs’ secure, fast, seamless promise alive for every human
                and AI touchpoint.
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
                className="border-indigo-500/40 text-indigo-700 hover:bg-indigo-500/10 dark:border-indigo-200/40 dark:text-indigo-100 dark:hover:bg-indigo-200/10"
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

