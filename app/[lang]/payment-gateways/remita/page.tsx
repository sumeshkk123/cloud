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
  Briefcase,
  ChartLineUp,
  Circuitry,
  GlobeHemisphereWest,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp,
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
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Track = {
  stage: string;
  headline: string;
  items: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive timestamp",
    value: "28 Aug 2024",
    detail: "Remita WordPress snapshot anchors today’s refreshed narrative.",
    icon: Sparkle
  },
  {
    label: "Home market",
    value: "Nigeria",
    detail: "Government treasury, payroll, and commercial payments fuel Remita’s adoption.",
    icon: MapPin
  },
  {
    label: "Promise modernised",
    value: "Secure • Fast • Seamless",
    detail: "Converted into AI-ready journeys, governance, and analytics for Cloud MLM Software.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Public sector storytelling",
    summary:
      "Custom demo and module insights become narratives that satisfy government, enterprise, and financial stakeholders.",
    bullets: [
      "Executive briefings connecting Remita strengths to Cloud MLM Software modules for public and private sectors.",
      "SEO & AIO keyword clusters focused on TSA compliance, payroll automation, and Nigerian fintech.",
      "Thought leadership cadence for policy forums, webinars, and analyst briefings."
    ],
    icon: Briefcase
  },
  {
    title: "Experience orchestration",
    summary:
      "We choreograph onboarding, payments, and support workflows spanning government agencies, merchants, and distributors.",
    bullets: [
      "Persona-led demos for finance directors, field agents, and citizen services.",
      "Telemetry binding Remita events to commissions, incentive triggers, and service-level alerts.",
      "Feedback loops blending AI sentiment with regulatory roundtables and community forums."
    ],
    icon: TrendUp
  },
  {
    title: "Operational resilience",
    summary:
      "Secure, fast, seamless becomes a resilience hub with dashboards, prompts, and risk management for Nigerian compliance.",
    bullets: [
      "Monitoring approvals, dispute cycles, and settlement pacing across NIBSS rails.",
      "Risk notebooks covering Central Bank directives, TSA mandates, and data privacy.",
      "Prompt libraries keeping AI assistants and human teams aligned on Remita tone and escalation paths."
    ],
    icon: Circuitry
  }
];

const DELIVERY_TRACKS: Track[] = [
  {
    stage: "Track 1",
    headline: "Archive intelligence remix",
    items: [
      "Audit legacy copy, CTAs, and module references to anchor stakeholder messaging.",
      "Define SEO & AIO clusters around Nigerian treasury, payroll, and commercial payments.",
      "Map Cloud MLM Software modules—e-wallet, backup manager, ticketing—to Remita integration flows."
    ],
    icon: SquaresFour
  },
  {
    stage: "Track 2",
    headline: "Experience enablement studio",
    items: [
      "Run immersive demo labs for government, enterprise, and distributor personas.",
      "Publish preset demo toolkit with scripts, analytics overlays, and localisation guidance.",
      "Launch localisation sprint covering English and regional dialect nuances for support teams."
    ],
    icon: Vault
  },
  {
    stage: "Track 3",
    headline: "Growth intelligence loop",
    items: [
      "Deliver executive dashboards blending Remita telemetry with Cloud MLM KPIs.",
      "Maintain experiment backlog for payroll automation, collection drives, and citizen engagement.",
      "Operate AI governance cadence reinforcing the secure, fast, seamless promise."
    ],
    icon: Lightning
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Remita Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Embed Remita’s secure, fast, seamless payments inside Cloud MLM Software. Deliver Nigerian treasury-grade journeys, governance, and AI-aligned operations.";

  return {
    title,
    description,
    keywords: [
      "Remita payment gateway",
      "Remita Cloud MLM Software integration",
      "Nigeria treasury payments",
      "government payment gateway Nigeria",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/remita", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RemitaPageProps = {
  params: { lang: SupportedLocale };
};

export default function RemitaPage({ params }: RemitaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-amber-50 to-slate-900/70 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.28),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(234,179,8,0.24),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(234,179,8,0.26),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Remita payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Modernise Remita for Nigeria’s treasury-grade operations within Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-white/80">
              The archived WordPress page positioned Remita as secure, fast, seamless. We expand that promise into orchestrated journeys,
              analytics, and AI governance for government and commercial stakeholders alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Engage Remita strategists
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
                  See Remita demo studio
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-amber-200/70 via-white/40 to-slate-900/60 blur-3xl dark:from-amber-500/20 dark:via-black/40 dark:to-slate-900/20" />
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
            Strategic pillars derived from the Remita archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We transform the original module and demo listings into modern growth, experience, and resilience playbooks for Nigeria’s payment landscape.
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
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-amber-400/20 via-slate-300/20 to-amber-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-amber-600 dark:text-amber-200" aria-hidden />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(250,204,21,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(234,179,8,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Delivery tracks for Remita integration</h2>
            <p className="text-base text-white/80">
              Three tracks convert the archive into continuous progress for government, enterprise, and AI-aligned teams in Nigeria.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {DELIVERY_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article key={track.stage} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">{track.stage}</span>
                    <Icon className="h-6 w-6 text-amber-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{track.headline}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {track.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-amber-200" aria-hidden />
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
            Remita supported country from the archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The WordPress snapshot highlighted Nigeria. We reframed that note for go-to-market, compliance, and CX teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Nigeria</h3>
              <GlobeHemisphereWest className="h-6 w-6 text-amber-600 dark:text-amber-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Emphasise treasury single account compliance, payroll automation, and nationwide collections that Remita enables.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-white via-amber-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-amber-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Activate Remita with Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, orchestrate bespoke demos, and keep Remita’s secure, fast, seamless promise consistent across humans and AI copilots.
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
                className="border-amber-500/40 text-amber-700 hover:bg-amber-500/10 dark:border-amber-200/40 dark:text-amber-100 dark:hover:bg-amber-200/10"
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

