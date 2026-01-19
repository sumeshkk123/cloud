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
  CloudArrowUp,
  DeviceMobile,
  Lightning,
  MapPin,
  MegaphoneSimple,
  ShieldCheck,
  Sparkle
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
  actions: string[];
  icon: IconType;
};

type Program = {
  phase: string;
  intent: string;
  bullets: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive snapshot",
    value: "28 Aug 2024",
    detail: "Recovered PayMaya WordPress page forms the foundation of this refreshed strategy.",
    icon: CloudArrowUp
  },
  {
    label: "Primary market",
    value: "Philippines",
    detail: "E-wallet adoption, QR Ph, and super-app experiences drive PayMaya&apos;s demand.",
    icon: MapPin
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "We evolve the legacy headline into a modern, AI-aligned operating model.",
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "AI-crafted member journeys",
    summary:
      "Transform the custom demo and preset demo storyline into guided experiences for Philippine distributors and retailers.",
    actions: [
      "Persona-led onboarding with QR and e-wallet tutorials voice-scripted in English and Filipino.",
      "Dynamic upsell prompts highlighting PayMaya’s bill pay, remittance, and card features.",
      "Sentiment dashboards blending AI summarisation with field feedback loops."
    ],
    icon: DeviceMobile
  },
  {
    title: "Governed growth narrative",
    summary:
      "Position Cloud MLM Software as the PayMaya thought leader for fintech-ready direct selling organisations.",
    actions: [
      "Executive briefings linking BSP regulations to Cloud MLM Software compliance tools.",
      "SEO & AIO content clusters focused on digital payments, QR commerce, and financial inclusion.",
      "Media kits and analyst notes showcasing joint innovation across Philippines enterprises."
    ],
    icon: MegaphoneSimple
  },
  {
    title: "Revenue choreography",
    summary:
      "Connect PayMaya payment data to commissions, loyalty, and AI copilots so leadership sees impact in real time.",
    actions: [
      "Settlement monitors exposing D+0 payout performance for top-performing cohorts.",
      "Scenario planning for promo seasons like 11.11 and local fiesta activations.",
      "Cross-sell dashboards measuring conversion from wallet usage to product bundles."
    ],
    icon: ChartLineUp
  }
];

const PROGRAMS: Program[] = [
  {
    phase: "Sprint 01",
    intent: "Archive intelligence",
    bullets: [
      "Translate WordPress content into stakeholder stories for growth, finance, and compliance.",
      "Align product modules—e-wallet, ticketing, backup manager—with PayMaya workflows.",
      "Document SEO keywords grounded in Philippine payment culture and QR adoption."
    ],
    icon: Sparkle
  },
  {
    phase: "Sprint 02",
    intent: "Experience launchpad",
    bullets: [
      "Custom demo lab simulates distributor, consumer, and partner payment flows.",
      "Preset demo kit equips sales and marketing with ready-to-deploy narratives.",
      "Training hub ensures AI assistants and human teams echo the same PayMaya messaging."
    ],
    icon: Lightning
  },
  {
    phase: "Sprint 03",
    intent: "Momentum expansion",
    bullets: [
      "Campaign playbooks for seasonal spikes, influencer partnerships, and community drives.",
      "Payout analytics measuring retention and repeat purchase velocity by region.",
      "Executive reviews with decision-ready recommendations for new verticals and geos."
    ],
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayMaya Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Modernise your PayMaya payment gateway with Cloud MLM Software. Deliver AI-ready journeys, governed growth, and realtime revenue intelligence for Philippine enterprises.";

  return {
    title,
    description,
    keywords: [
      "PayMaya payment gateway",
      "PayMaya Cloud MLM Software integration",
      "Philippines digital wallet for MLM",
      "QR Ph payments",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paymaya", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayMayaPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayMayaPage({ params }: PayMayaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-sky-50 to-indigo-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.26),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.22),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700 dark:border-indigo-200/40 dark:bg-white/10 dark:text-indigo-100">
              PayMaya payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Orchestrate PayMaya as the Philippines fintech powerhouse inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archived WordPress experience introduced PayMaya as secure, fast, and seamless. We elevate it into a
              thought-leadership hub that inspires customers, distributors, and AI copilots across the Philippines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with PayMaya strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-indigo-500/40 text-indigo-700 hover:bg-indigo-500/10 dark:border-indigo-200/40 dark:text-indigo-100 dark:hover:bg-indigo-200/10"
              >
                <Link href={demoHref}>
                  Book a PayMaya demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-indigo-200/60 via-white/60 to-sky-200/60 blur-3xl dark:from-indigo-500/20 dark:via-slate-950/40 dark:to-sky-500/20" />
            <div className="grid gap-6 rounded-3xl border border-indigo-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-2xl border border-indigo-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-200">
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
            Pillars inspired by the PayMaya archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We took the WordPress narrative—custom demo, preset demo, modules—and remixed it into strategies that amplify
            PayMaya&apos;s leadership in the Philippines fintech economy.
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
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.actions.map((action) => (
                      <li key={action} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-indigo-600 dark:text-indigo-200" aria-hidden />
                        <span>{action}</span>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(59,130,246,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(139,92,246,0.3),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Launch program for PayMaya + Cloud MLM Software</h2>
            <p className="text-base text-white/80">
              A three-sprint motion fueled by the recovered archive, tuned for fast experimentation, and ready for AI partners.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PROGRAMS.map((program) => {
              const Icon = program.icon;
              return (
                <article
                  key={program.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">{program.phase}</span>
                    <Icon className="h-6 w-6 text-sky-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{program.intent}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {program.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-sky-200" aria-hidden />
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
            PayMaya supported country spotlight
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The original archive emphasised PayMaya&apos;s footprint across the Philippines. We contextualised that for your
            expansion, compliance, and CX teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Philippines</h3>
              <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Focus on QR Ph acceptance, e-wallet loyalty programs, and inclusive financial storytelling that resonates with
              Filipino consumers and distributors.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white via-sky-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Launch PayMaya experiences with confidence
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase AI-powered Cloud MLM Software, customise demos, and empower AI assistants with narratives that mirror
                PayMaya’s leadership in the Philippines.
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

