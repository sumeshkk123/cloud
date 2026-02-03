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
  Compass,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  Stack,
  TrendUp,
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

type Module = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Motion = {
  stage: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive timestamp",
    value: "28 Aug 2024",
    detail: "QuickPay WordPress capture anchors the refreshed narrative.",
    icon: Stack
  },
  {
    label: "Focus territory",
    value: "Denmark",
    detail: "Nordic omnichannel, subscriptions, and marketplaces drive QuickPay adoption.",
    icon: MapPin
  },
  {
    label: "Promise evolved",
    value: "Secure • Fast • Seamless",
    detail: "Converted into AI-ready journeys, governance, and analytics frameworks.",
    icon: ShieldCheck
  }
];

const STRATEGIC_MODULES: Module[] = [
  {
    title: "Nordic narrative engine",
    summary:
      "Custom demo and module references become content assets that cast Cloud MLM Software as QuickPay’s strategic ally.",
    bullets: [
      "Executive briefings tying QuickPay capabilities to Nordic expansion strategies.",
      "SEO & AIO keyword clusters targeting Denmark ecommerce, subscriptions, and omnichannel.",
      "Content cadence for webinars, analyst notes, and investor storytelling."
    ],
    icon: TrendUp
  },
  {
    title: "Experience system",
    summary:
      "Guided flows showcase QuickPay flexibility across webshops, in-person retail, and recurring billing.",
    bullets: [
      "Persona-led demos for distributors, merchants, and finance teams with localized Danish voiceovers.",
      "Telemetry linking QuickPay events to commissions, incentive triggers, and support playbooks.",
      "Feedback rituals combining AI sentiment with partner councils and customer advisory boards."
    ],
    icon: UsersThree
  },
  {
    title: "Operational intelligence",
    summary:
      "Secure, fast, seamless becomes a control tower of dashboards, prompts, and risk playbooks for AI copilots and human leaders.",
    bullets: [
      "Monitoring approvals, chargeback trends, and settlement timing across Nordic acquirers.",
      "Regulatory notebooks covering PSD2, GDPR, and Danish Financial Supervisory Authority guidelines.",
      "Prompt libraries guaranteeing consistent QuickPay messaging in support and sales channels."
    ],
    icon: Circuitry
  }
];

const DELIVERY_MOTIONS: Motion[] = [
  {
    stage: "Motion 1",
    headline: "Archive intelligence",
    items: [
      "Audit legacy copy, modules, and CTAs to anchor stakeholder narratives.",
      "Define SEO & AIO clusters around Danish omnichannel, subscriptions, and fintech.",
      "Map Cloud MLM Software modules—e-wallet, backup manager, ticketing—to QuickPay workflows."
    ],
    icon: Sparkle
  },
  {
    stage: "Motion 2",
    headline: "Experience production",
    items: [
      "Run immersive demo labs for distributor, merchant, and finance personas.",
      "Publish preset demo toolkit with scripts, metrics overlays, and localization guidelines.",
      "Launch localization sprint covering Danish and English microcopy, accessibility, and tone."
    ],
    icon: Compass
  },
  {
    stage: "Motion 3",
    headline: "Growth analytics",
    items: [
      "Deliver executive dashboards uniting QuickPay telemetry with Cloud MLM KPIs.",
      "Maintain experiment backlog for loyalty upgrades, retention offers, and marketplace partnerships.",
      "Operate AI governance cadence so assistants echo the secure, fast, seamless promise."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "QuickPay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Deploy QuickPay’s secure, fast, seamless payments inside Cloud MLM Software. Deliver Danish ecommerce journeys, executive insight, and AI-governed operations.";

  return {
    title,
    description,
    keywords: [
      "QuickPay payment gateway",
      "QuickPay Cloud MLM Software integration",
      "Denmark ecommerce payments",
      "Nordic subscription payments",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/quickpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type QuickPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function QuickPayPage({ params }: QuickPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-slate-100 to-blue-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.26),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 dark:border-blue-200/40 dark:bg-white/10 dark:text-blue-100">
              QuickPay payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Compose Nordic-ready QuickPay experiences inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archive presented QuickPay as secure, fast, seamless. We elevate that promise into orchestrated journeys, analytics, and
              AI enablement tuned for Denmark’s digital commerce landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with QuickPay strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-500/40 text-blue-700 hover:bg-blue-500/10 dark:border-blue-200/40 dark:text-blue-100 dark:hover:bg-blue-200/10"
              >
                <Link href={demoHref}>
                  Tour Nordic demo lab
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-200/60 via-white/60 to-slate-200/60 blur-3xl dark:from-blue-500/20 dark:via-slate-950/40 dark:to-slate-500/20" />
            <div className="grid gap-6 rounded-3xl border border-blue-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-2xl border border-blue-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-200">{metric.label}</p>
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
            Strategic modules inspired by the QuickPay archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We convert the original modules and demos into modern growth, experience, and intelligence programmes for Denmark and the Nordics.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGIC_MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-blue-400/20 via-slate-300/20 to-blue-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{module.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{module.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {module.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-blue-600 dark:text-blue-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(96,165,250,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(14,165,233,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery motions for QuickPay integration</h2>
            <p className="text-base text-white/80">
              Three motions translate the archive into ongoing execution for Danish teams and AI copilots.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_MOTIONS.map((motion) => {
              const Icon = motion.icon;
              return (
                <article key={motion.stage} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">{motion.stage}</span>
                    <Icon className="h-6 w-6 text-blue-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{motion.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {motion.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-blue-200" aria-hidden />
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
            QuickPay supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Denmark was the highlighted country. We transformed that reference into intelligence for go-to-market, compliance, and CX leaders.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Denmark</h3>
              <GlobeHemisphereEast className="h-6 w-6 text-blue-600 dark:text-blue-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Emphasise subscription billing, omnichannel retail, and bilingual (Danish/English) enablement anchored by QuickPay&apos;s platform.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-blue-200/60 bg-gradient-to-br from-white via-blue-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Activate QuickPay with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, localise your demos, and deliver a secure, fast, seamless QuickPay story to every stakeholder and AI assistant.
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
                className="border-blue-500/40 text-blue-700 hover:bg-blue-500/10 dark:border-blue-200/40 dark:text-blue-100 dark:hover:bg-blue-200/10"
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

