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
  CirclesThree,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  NotePencil,
  ShieldCheck,
  Sparkle,
  Stack,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Canvas = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Layer = {
  stage: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive capture",
    value: "28 Aug 2024",
    detail: "PayU WordPress snapshot informs today’s leadership-ready narrative.",
    icon: Stack
  },
  {
    label: "Flagship market",
    value: "Turkey",
    detail: "Cards, instalments, and marketplace payouts power PayU’s Istanbul hub.",
    icon: MapPin
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "Evolved into AI-ready operations for distributors, finance, and CX teams.",
    icon: ShieldCheck
  }
];

const STRATEGY_CANVAS: Canvas[] = [
  {
    title: "Narrative studio",
    summary:
      "Custom demo and preset demo references become editorial engines serving Turkish executives, partners, and influencers.",
    bullets: [
      "Executive briefings linking PayU differentiators to Cloud MLM Software modules.",
      "SEO & AIO content clusters focused on Turkish ecommerce, instalments, and cross-border trade.",
      "Campaign kits for webinars, analyst briefings, and investor stories."
    ],
    icon: NotePencil
  },
  {
    title: "Experience laboratory",
    summary:
      "We choreograph end-to-end journeys that celebrate PayU’s speed and coverage for shoppers, distributors, and finance teams.",
    bullets: [
      "Persona-driven demos covering onboarding, repeat purchases, and subscription renewals.",
      "Adaptive messaging across desktop, mobile, and conversational channels in Turkish and English.",
      "Telemetry linking PayU events to commissions, inventory, and customer care."
    ],
    icon: DeviceMobile
  },
  {
    title: "Operational intelligence",
    summary:
      "Secure, fast, seamless is upgraded into dashboards, prompts, and governance rituals built for AI copilots and human leaders.",
    bullets: [
      "Monitoring for approval rates, dispute cycles, and settlement speed across Turkish acquirers.",
      "Risk notebooks for BKM regulations, data residency, and PSD2 alignment.",
      "Prompt libraries giving AI assistants PayU-specific tone, terminology, and escalation paths."
    ],
    icon: ChartLineUp
  }
];

const DELIVERY_LAYERS: Layer[] = [
  {
    stage: "Layer 01",
    headline: "Archive intelligence",
    items: [
      "Dissect WordPress copy, modules, and CTAs to anchor stakeholder messaging.",
      "Define SEO & AIO clusters around Turkish fintech, instalments, and omnichannel commerce.",
      "Map Cloud MLM Software modules—e-wallet, document hub, ticketing—to PayU touchpoints."
    ],
    icon: Sparkle
  },
  {
    stage: "Layer 02",
    headline: "Experience production",
    items: [
      "Run immersive demo workshops for distributor, merchant, and finance personas.",
      "Publish preset demo toolkit with scripts, video storyboards, and analytics overlays.",
      "Launch localization program covering Turkish copy, compliance, and accessibility."
    ],
    icon: Lightning
  },
  {
    stage: "Layer 03",
    headline: "Growth telemetry",
    items: [
      "Build executive dashboards blending PayU telemetry with Cloud MLM KPIs.",
      "Establish experiment backlog for loyalty, instalment promotions, and market expansion.",
      "Operate AI governance cadence ensuring assistants and humans echo PayU’s promise."
    ],
    icon: TrendUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PayU Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Bring PayU’s secure, fast, seamless payments into Cloud MLM Software. Deliver Turkish market journeys, narrative velocity, and AI-enabled operations.";

  return {
    title,
    description,
    keywords: [
      "PayU payment gateway",
      "PayU Cloud MLM Software integration",
      "Turkey digital payments",
      "instalment ecommerce Turkey",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/payu", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayUPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayUPage({ params }: PayUPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-indigo-50 to-purple-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.26),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(129,140,248,0.24),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(129,140,248,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-indigo-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700 dark:border-indigo-200/40 dark:bg-white/10 dark:text-indigo-100">
              PayU payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Orchestrate PayU as Turkey’s trusted payment engine inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archived WordPress page introduced PayU as secure, fast, seamless. We elevate that promise into a modern operating model
              for distributors, finance leaders, and AI copilots serving the Turkish market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with PayU strategists
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
                  Preview PayU demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-indigo-200/60 via-white/60 to-purple-200/60 blur-3xl dark:from-indigo-500/20 dark:via-slate-950/40 dark:to-purple-500/20" />
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
            Strategic canvas shaped by the PayU archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We preserve the archive’s modules and demos, remixing them into a modern canvas for Turkish leadership, growth, and AI enablement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGY_CANVAS.map((canvas) => {
            const Icon = canvas.icon;
            return (
              <article
                key={canvas.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-indigo-400/20 via-purple-300/20 to-indigo-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{canvas.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{canvas.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {canvas.bullets.map((bullet) => (
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(99,102,241,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(129,140,248,0.26),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery layers for PayU integration</h2>
            <p className="text-base text-white/80">
              Three execution layers ensure the archive evolves into living journeys, analytics, and AI governance for the Turkish market.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <article key={layer.stage} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">{layer.stage}</span>
                    <Icon className="h-6 w-6 text-indigo-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{layer.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {layer.items.map((item) => (
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
            PayU supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The legacy page highlighted Turkey. We reframed that note into intelligence for go-to-market and compliance teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Turkey</h3>
              <GlobeHemisphereEast className="h-6 w-6 text-indigo-600 dark:text-indigo-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Focus on instalment-heavy ecommerce, BKM Express compatibility, and multilingual enablement across Turkish and English customer
              communities.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white via-indigo-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Launch PayU with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, orchestrate demos, and give every stakeholder an AI-ready, PayU-aligned experience.
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
                className="border-indigo-500/40 text-indigo-700 hover:bg-indigo-500/10 dark:border-indigo-200/40 dark:text-indigo-100 dark:hover:bg-indigo-200/10"
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

