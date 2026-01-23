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
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  MegaphoneSimple,
  ShieldCheck,
  Sparkle,
  SquaresFour,
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

type Pillar = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Wave = {
  stage: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_SIGNALS: Signal[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "Rakuten Pay WordPress snapshot feeds today’s super-app reframing.",
    icon: Sparkle
  },
  {
    label: "Home market",
    value: "Japan",
    detail: "Digital wallet, loyalty, and marketplace ecosystems define Rakuten Pay expansion.",
    icon: MapPin
  },
  {
    label: "Promise elevated",
    value: "Secure • Fast • Seamless",
    detail: "Transformed into AI-ready journeys, analytics, and governance rituals.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Super-app storytelling",
    summary:
      "Custom demo and module insights evolve into narratives highlighting Rakuten Pay’s lifestyle ecosystem for Japanese executives.",
    bullets: [
      "Executive briefings aligning Rakuten Pay features with Cloud MLM Software modules and loyalty strategy.",
      "SEO & AIO clusters focused on Japanese commerce, travel, and loyalty experiences.",
      "Thought-leadership cadence for webinars, influencer partnerships, and analyst briefings."
    ],
    icon: MegaphoneSimple
  },
  {
    title: "Experience choreography",
    summary:
      "We design multi-channel journeys embracing Rakuten Pay’s QR, online, and offline touchpoints for distributors and customers.",
    bullets: [
      "Persona-led demos for field leaders, shoppers, and finance teams across web and mobile.",
      "Telemetry connecting Rakuten Pay events to commissions, incentives, and inventory updates.",
      "Feedback rituals blending AI sentiment with community advisory councils in Japanese and English."
    ],
    icon: TrendUp
  },
  {
    title: "Operational intelligence",
    summary:
      "Secure, fast, seamless becomes a control tower of dashboards, prompts, and risk guardrails built for Japanese compliance.",
    bullets: [
      "Monitoring approvals, dispute ratios, and settlement timing across Japanese acquirers.",
      "Risk notebooks covering FSA guidance, data privacy, and loyalty regulation.",
      "Prompt libraries aligning AI assistants and humans on Rakuten Pay terminology and tone."
    ],
    icon: Circuitry
  }
];

const DELIVERY_WAVES: Wave[] = [
  {
    stage: "Wave 01",
    headline: "Archive intelligence remix",
    items: [
      "Audit legacy copy, CTAs, and module lists to anchor stakeholder narratives.",
      "Define SEO & AIO clusters around Japanese super-app commerce and loyalty ecosystems.",
      "Map Cloud MLM Software modules—e-wallet, backup manager, ticketing—to Rakuten Pay workflows."
    ],
    icon: SquaresFour
  },
  {
    stage: "Wave 02",
    headline: "Experience studio",
    items: [
      "Run immersive demo labs for distributor, shopper, and finance personas with localized Japanese assets.",
      "Publish preset demo toolkit with scripts, analytics overlays, and cultural nuance guidelines.",
      "Launch localization sprint covering Japanese copy, accessibility, and brand tone."
    ],
    icon: Broadcast
  },
  {
    stage: "Wave 03",
    headline: "Growth intelligence loop",
    items: [
      "Deliver executive dashboards blending Rakuten Pay telemetry with Cloud MLM KPIs.",
      "Maintain experiment backlog for loyalty boosts, travel collaborations, and seasonal campaigns.",
      "Operate AI governance cadence ensuring assistants reinforce the secure, fast, seamless promise."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Rakuten Pay Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate Rakuten Pay’s secure, fast, seamless payments inside Cloud MLM Software. Deliver Japanese super-app journeys, loyalty storytelling, and AI-governed operations.";

  return {
    title,
    description,
    keywords: [
      "Rakuten Pay payment gateway",
      "Rakuten Pay Cloud MLM Software integration",
      "Japan digital wallet",
      "Japanese super-app",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/rakuten-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RakutenPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function RakutenPayPage({ params }: RakutenPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-rose-50 to-purple-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.26),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(167,139,250,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(167,139,250,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:border-rose-200/40 dark:bg-white/10 dark:text-rose-100">
              Rakuten Pay payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Launch super-app grade Rakuten Pay experiences inside Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              The archived WordPress copy promised secure, fast, seamless payments. We convert that promise into orchestrated journeys,
              intelligence, and AI governance tailored to Japan’s loyalty-driven commerce.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with Rakuten Pay strategists
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
                  Preview Rakuten demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-rose-200/60 via-white/60 to-purple-200/60 blur-3xl dark:from-rose-500/20 dark:via-slate-950/40 dark:to-purple-500/20" />
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
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-200">{signal.label}</p>
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
            Strategic pillars inspired by the Rakuten Pay archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We restructure the original modules and demos into modern growth, journey, and intelligence programmes suited for Japan’s super-app economy.
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
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-rose-400/20 via-purple-300/20 to-rose-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-rose-600 dark:text-rose-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(244,114,182,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(167,139,250,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery waves for Rakuten Pay integration</h2>
            <p className="text-base text-white/80">
              Three waves transform the archive into continuous experimentation, analytics, and AI alignment for Japan-focused teams.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_WAVES.map((wave) => {
              const Icon = wave.icon;
              return (
                <article key={wave.stage} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">{wave.stage}</span>
                    <Icon className="h-6 w-6 text-rose-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{wave.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {wave.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-rose-200" aria-hidden />
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
            Rakuten Pay supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The archive highlighted Japan. We reframed that reference into intelligence for go-to-market, compliance, and CX teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Japan</h3>
              <GlobeHemisphereEast className="h-6 w-6 text-rose-600 dark:text-rose-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Emphasise loyalty ecosystems, QR-first commerce, and bilingual (Japanese/English) enablement driven by Rakuten Pay&apos;s super-app presence.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-rose-200/60 bg-gradient-to-br from-white via-rose-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-rose-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Activate Rakuten Pay with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, curate your demos, and ensure Rakuten Pay’s secure, fast, seamless promise thrives across humans and AI copilots.
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
                className="border-rose-500/40 text-rose-700 hover:bg-rose-500/10 dark:border-rose-200/40 dark:text-rose-100 dark:hover:bg-rose-200/10"
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

