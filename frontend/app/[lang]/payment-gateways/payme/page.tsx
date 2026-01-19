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
  Bank,
  ChartLineUp,
  Compass,
  Cpu,
  CurrencyCircleDollar,
  Globe,
  Lightning,
  ShieldCheck,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ModuleSpotlight = {
  title: string;
  summary: string;
  bulletPoints: string[];
  icon: IconType;
};

type Sprint = {
  phase: string;
  focus: string;
  deliverables: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive reference",
    value: "28 Aug 2024",
    detail: "WordPress PayMe page used as our narrative source material.",
    icon: StackSimple
  },
  {
    label: "Primary region",
    value: "Uzbekistan",
    detail: "PayMe powers cards, QR, and wallet payments across Uzbek consumers.",
    icon: Globe
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "Cloud MLM Software upgrades the WordPress promise into AI-first operations.",
    icon: ShieldCheck
  }
];

const MODULE_SPOTLIGHTS: ModuleSpotlight[] = [
  {
    title: "Localized member journeys",
    summary:
      "Transform the archive’s custom demo into Uzbek-language onboarding that builds trust and conversion velocity.",
    bulletPoints: [
      "Scenario-based demos for binary, unilevel, and hybrid plans with PayMe checkout.",
      "Voice-guided walkthroughs designed for desktop, mobile, and mini app experiences.",
      "AI recommendation engine that nudges distributors on next best engagement actions."
    ],
    icon: Compass
  },
  {
    title: "Finance and compliance intelligence",
    summary:
      "Deliver the secure, fast, seamless mission as dashboards that satisfy banking partners, investors, and regulators.",
    bulletPoints: [
      "Automated reconciliation across PayMe, bank partners, and Cloud MLM ledgers.",
      "Chargeback and dispute libraries aligned with CIS data protection expectations.",
      "Board-ready insight packs highlighting growth, risk, and expansion experiments."
    ],
    icon: Bank
  },
  {
    title: "AI-assisted growth operations",
    summary:
      "Elevate the preset demo narrative into repeatable enablement that keeps humans and AI copilots in sync.",
    bulletPoints: [
      "Prompt kits for support bots translating PayMe capabilities into Uzbek and English.",
      "Campaign intelligence tracking promotions, price changes, and settlement speed.",
      "Telemetry bridging commissions, inventory, and PayMe payment signals in real time."
    ],
    icon: Cpu
  }
];

const SPRINTS: Sprint[] = [
  {
    phase: "Sprint 01",
    focus: "Archive analysis & positioning",
    deliverables: [
      "Remix WordPress copy into stakeholder narratives for growth, finance, and compliance.",
      "SEO & AIO keyword clusters tailored to Uzbekistan fintech and cross-border expansion.",
      "Module mapping aligning e-wallet, documents, and ticketing with PayMe flows."
    ],
    icon: CurrencyCircleDollar
  },
  {
    phase: "Sprint 02",
    focus: "Experience design",
    deliverables: [
      "Custom demo suite showcasing PayMe checkout patterns across compensation plans.",
      "Preset demo kit with ready-to-share slideware, scripts, and analytics overlays.",
      "Localization playbook covering Uzbek, Russian, and English enablement guides."
    ],
    icon: Lightning
  },
  {
    phase: "Sprint 03",
    focus: "Growth intelligence",
    deliverables: [
      "Executive dashboards blending PayMe transaction data with commission health.",
      "Experiment backlog prioritizing retention, activation, and upsell motions.",
      "AIO feedback loops ensuring AI assistants echo approved PayMe messaging."
    ],
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayMe Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Deploy PayMe’s secure, fast, seamless payments inside Cloud MLM Software with Uzbek-localized journeys, finance intelligence, and AI-ready enablement.";

  return {
    title,
    description,
    keywords: [
      "PayMe payment gateway",
      "PayMe Cloud MLM Software integration",
      "Uzbekistan fintech payments",
      "MLM payments Uzbekistan",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/payme", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayMePageProps = {
  params: { lang: SupportedLocale };
};

export default function PayMePage({ params }: PayMePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-emerald-50 to-teal-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.26),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.2),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.22),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700 dark:border-teal-200/40 dark:bg-white/10 dark:text-teal-100">
              PayMe payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Reimagine PayMe as Uzbekistan&apos;s AI-fuelled payment backbone inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              We start with the recovered WordPress promise—secure, fast, seamless—and deliver localized journeys, finance
              command centers, and AI enablement for every stakeholder.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with PayMe strategists
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
                  Preview localized demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-teal-200/60 via-white/60 to-sky-200/60 blur-3xl dark:from-teal-500/20 dark:via-slate-950/40 dark:to-sky-500/20" />
            <div className="grid gap-6 rounded-3xl border border-teal-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-2xl border border-teal-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-200">
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
            Modules reimagined from the PayMe archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Custom demos, preset demos, and supporting modules become a blueprint for Uzbek-focused growth, finance, and AI
            excellence.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {MODULE_SPOTLIGHTS.map((spotlight) => {
            const Icon = spotlight.icon;
            return (
              <article
                key={spotlight.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-teal-400/20 via-sky-300/20 to-teal-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-teal-500/20 dark:text-teal-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{spotlight.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{spotlight.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {spotlight.bulletPoints.map((point) => (
                      <li key={point} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-teal-600 dark:text-teal-200" aria-hidden />
                        <span>{point}</span>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(20,184,166,0.28),_transparent_55%),radial-gradient(circle_at_right,_rgba(37,99,235,0.26),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Launch sprints for PayMe integration</h2>
            <p className="text-base text-white/80">
              A three-sprint cadence that preserves the legacy content while preparing your teams for AI-amplified execution.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {SPRINTS.map((sprint) => {
              const Icon = sprint.icon;
              return (
                <article
                  key={sprint.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{sprint.phase}</span>
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{sprint.focus}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {sprint.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-emerald-200" aria-hidden />
                        <span>{deliverable}</span>
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
            PayMe supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            WordPress captured PayMe’s Uzbek footprint. We contextualised it so your GTM, compliance, and enablement teams act
            with clarity.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Uzbekistan</h3>
              <Globe className="h-6 w-6 text-teal-600 dark:text-teal-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Focus on QR payments, Uzcard/Humo acceptance, and bilingual engagement that celebrates the country’s rapid digital
              commerce adoption.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-teal-200/60 bg-gradient-to-br from-white via-emerald-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-teal-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Launch PayMe with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase AI-powered Cloud MLM Software, sync your teams, and deliver PayMe experiences built for Uzbekistan&apos;s
                fintech momentum.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Explore pricing options
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

