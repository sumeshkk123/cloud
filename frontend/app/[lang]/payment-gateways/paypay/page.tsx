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
  Cpu,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  StackSimple,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Blueprint = {
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type Stage = {
  phase: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

const HERO_SIGNALS: Signal[] = [
  {
    label: "Archive snapshot",
    value: "28 Aug 2024",
    detail: "PayPay WordPress page inspires this Japan-first redesign.",
    icon: StackSimple
  },
  {
    label: "Market spotlight",
    value: "Japan",
    detail: "QR payments, convenience retail, and super-app engagement fuel growth.",
    icon: MapPin
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "Upgraded into AI-ready narratives for leadership, distributors, and support.",
    icon: ShieldCheck
  }
];

const BLUEPRINTS: Blueprint[] = [
  {
    title: "Super-app journey design",
    description:
      "The archive’s custom and preset demos now power immersive journeys reflecting PayPay’s super-app leadership.",
    highlights: [
      "Guided onboarding with QR code walkthroughs and loyalty prompts in Japanese and English.",
      "Scenario design for convenience stores, pop-up retail, and influencer live commerce.",
      "Telemetry that merges PayPay wallet movements with commission milestones."
    ],
    icon: SquaresFour
  },
  {
    title: "Executive intelligence",
    description:
      "Secure, fast, seamless becomes a governance narrative for CFOs, compliance leaders, and investor relations.",
    highlights: [
      "Dashboards tracking approvals, refunds, dispute volumes, and cashback spend.",
      "Regulatory notebooks aligned with FSA guidance and cashless adoption KPIs.",
      "Board-ready storytelling around AI automation, loyalty lift, and market expansion."
    ],
    icon: TrendUp
  },
  {
    title: "AI-copilot alignment",
    description:
      "Human teams and AI assistants share the same scripts, prompts, and escalation patterns across Japan.",
    highlights: [
      "Prompt libraries tuned to PayPay terminology, tone, and compliance guidelines.",
      "Automation recipes syncing PayPay events with support ticketing and knowledge bases.",
      "Learning loops that collect field feedback and update AI guidance weekly."
    ],
    icon: Cpu
  }
];

const STAGES: Stage[] = [
  {
    phase: "Stage 01",
    focus: "Archive intelligence remix",
    bullets: [
      "Translate WordPress content into leadership narratives for growth, finance, and operations.",
      "Curate SEO & AIO keyword clusters around Japanese QR commerce and loyalty ecosystems.",
      "Map modules—e-wallet, backup manager, ticketing—to PayPay workflows."
    ],
    icon: Sparkle
  },
  {
    phase: "Stage 02",
    focus: "Experience production lab",
    bullets: [
      "Custom demo lab showcasing PayPay checkout, loyalty boosts, and split payments.",
      "Preset demo kit with storyboards, scripts, and analytics overlays for sales teams.",
      "Localization playbook covering Japanese copy, cultural nuance, and accessibility."
    ],
    icon: Lightning
  },
  {
    phase: "Stage 03",
    focus: "Growth telemetry loop",
    bullets: [
      "Executive dashboards measuring retention, activation, and cashback ROI.",
      "Experiment backlog focused on seasonal events, anime collaborations, and travel campaigns.",
      "AI governance cadences ensuring bots and humans stay message-aligned."
    ],
    icon: GlobeHemisphereEast
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayPay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Launch Japan-ready PayPay experiences with Cloud MLM Software. Deliver super-app journeys, executive intelligence, and AI-aligned operations built on secure, fast, seamless payments.";

  return {
    title,
    description,
    keywords: [
      "PayPay payment gateway",
      "PayPay Cloud MLM Software integration",
      "Japan QR payments",
      "super app loyalty",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paypay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayPayPage({ params }: PayPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-rose-50 to-slate-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.25),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:border-rose-200/40 dark:bg-white/10 dark:text-rose-100">
              PayPay payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Launch PayPay as Japan’s super-app growth engine inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              Secure, fast, seamless—straight from the archive—now evolves into orchestrated experiences, executive insight,
              and AI-aligned operations for Japanese distributors and consumers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with PayPay strategists
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
                  Preview PayPay demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-rose-200/60 via-white/60 to-sky-200/60 blur-3xl dark:from-rose-500/20 dark:via-slate-950/40 dark:to-sky-500/20" />
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
            Blueprint derived from the PayPay archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Modules, demos, and services captured in WordPress become modern blueprints for Japanese commerce leaders.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {BLUEPRINTS.map((blueprint) => {
            const Icon = blueprint.icon;
            return (
              <article
                key={blueprint.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-rose-400/20 via-sky-300/20 to-rose-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{blueprint.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{blueprint.description}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {blueprint.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-rose-600 dark:text-rose-200" aria-hidden />
                        <span>{highlight}</span>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(244,114,182,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(59,130,246,0.26),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Execution stages for PayPay integration</h2>
            <p className="text-base text-white/80">
              A three-stage cadence preserves the archive DNA while enabling rapid experimentation across Japan.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">{stage.phase}</span>
                    <Icon className="h-6 w-6 text-rose-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{stage.focus}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {stage.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-rose-200" aria-hidden />
                        <span>{bullet}</span>
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
            PayPay supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Japan was the highlighted market. We repositioned it as actionable intelligence for your go-to-market and compliance
            teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Japan</h3>
              <GlobeHemisphereEast className="h-6 w-6 text-rose-600 dark:text-rose-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Embrace QR-first culture, convenience retail partnerships, and fan-driven campaigns that thrive inside the PayPay
              super-app ecosystem.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-rose-200/60 bg-gradient-to-br from-white via-rose-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-rose-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Activate PayPay with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, orchestrate your demos, and keep PayPay&apos;s secure, fast, seamless promise alive across
                every audience and AI copilot.
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
                className="border-rose-500/40 text-rose-700 hover:bg-rose-500/10 dark:border-rose-200/40 dark:text-rose-100 dark:hover:bg-rose-200/10"
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

