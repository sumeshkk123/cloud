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
  Backpack,
  Brain,
  ChartLineUp,
  ChatsCircle,
  Circuitry,
  CreditCard,
  Cube,
  Globe,
  Handshake,
  Lightning,
  ShieldCheck,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  summary: string;
  outcomes: string[];
  icon: IconType;
};

type RoadmapPhase = {
  phase: string;
  focus: string;
  narrative: string;
  icon: IconType;
};

type RegionalLane = {
  region: string;
  payments: string;
  leadership: string;
};

type IntelligenceCue = {
  headline: string;
  detail: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    title: "Global readiness",
    value: "200+ rails",
    description: "Local cards, wallets, and realtime bank transfers through Adyen&apos;s unified platform.",
    icon: Globe
  },
  {
    title: "Decisioning speed",
    value: "Sub 80ms",
    description: "Risk signals flow into Cloud MLM Software to keep approvals high without manual triage.",
    icon: Lightning
  },
  {
    title: "Chargeback shield",
    value: "93% resolved",
    description: "Automated evidence kits and AI guidance accelerate dispute handling for finance teams.",
    icon: ShieldCheck
  }
];

const EXECUTIVE_PILLARS: Pillar[] = [
  {
    title: "Experience velocity",
    summary:
      "We elevate the legacy WordPress messaging around seamless checkout into an orchestrated experience that feels premium in every market.",
    outcomes: [
      "Localized flows adapt labels, compliance prompts, and incentives per shopper intent.",
      "Dynamic retry logic recaptures failed payments and notifies distributors instantly.",
      "AI-driven coaching nudges field leaders when conversion trends shift."
    ],
    icon: TrendUp
  },
  {
    title: "Operational resilience",
    summary:
      "Treasury, support, and compliance teams gain a real-time cockpit built for Adyen&apos;s unified commerce approach.",
    outcomes: [
      "Event streams feed commission, ticketing, and invoicing modules without duplication.",
      "Scenario planning predicts settlement delays and FX exposure before they impact payouts.",
      "Executive-ready dashboards translate payment telemetry into board-level insights."
    ],
    icon: Circuitry
  },
  {
    title: "Thought leadership activation",
    summary:
      "Cloud MLM Software becomes the voice of modern payment orchestration for direct selling enterprises.",
    outcomes: [
      "Research-backed stories position your brand as the trusted guide for global expansion.",
      "Adyen case studies convert into high-intent lead magnets and sales enablement assets.",
      "AIO-optimized content keeps human teams and AI assistants aligned on key messages."
    ],
    icon: ChatsCircle
  }
];

const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    focus: "Discovery & blueprint",
    narrative:
      "Translate archive-era copy—modules, plans, and services—into stakeholder requirements and success metrics that reflect Adyen&apos;s omnichannel strength.",
    icon: Brain
  },
  {
    phase: "Phase 2",
    focus: "Integration fabric",
    narrative:
      "Wire Cloud MLM Software&apos;s commission engine, CRM, and analytics with Adyen APIs, webhooks, and risk signals for end-to-end visibility.",
    icon: Circuitry
  },
  {
    phase: "Phase 3",
    focus: "Program enablement",
    narrative:
      "Activate personas with enablement kits, demo scripts, and AI copilots so sales, finance, and compliance teams adopt new workflows with confidence.",
    icon: Backpack
  },
  {
    phase: "Phase 4",
    focus: "Growth optimisation",
    narrative:
      "Experiment with offers, payment methods, and retention loops while intelligence feeds marketing and product roadmaps.",
    icon: ChartLineUp
  }
];

const REGIONAL_LANES: RegionalLane[] = [
  {
    region: "North America",
    payments: "Card networks, ACH debit, instant payouts for gig-style distributors.",
    leadership:
      "Executive dashboards align legal, finance, and marketing on go-to-market pulses across the US and Canada."
  },
  {
    region: "EMEA",
    payments: "SEPA, iDEAL, Bancontact, and Buy Now Pay Later orchestration on a single ledger.",
    leadership:
      "Localized compliance packs and VAT-ready statements reinforce Cloud MLM Software&apos;s governance story."
  },
  {
    region: "APAC & LATAM",
    payments: "Wallets, QR, domestic schemes, and instalments tuned to country-by-country nuances.",
    leadership:
      "AI monitors approval patterns, surfacing expansion signals for emerging markets like Brazil and Singapore."
  }
];

const INTELLIGENCE_CUES: IntelligenceCue[] = [
  {
    headline: "Realtime governance summaries",
    detail: "AI distills payment events into executive narratives with next actions tailored per stakeholder.",
    icon: Cube
  },
  {
    headline: "Integration health monitors",
    detail: "Self-healing alerts flag webhook drift, reconciliation mismatches, or risk spikes within minutes.",
    icon: Lightning
  },
  {
    headline: "Partner success storytelling",
    detail: "Case-note generators repurpose live insights into marketing articles, webinars, and analyst briefings.",
    icon: Handshake
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Adyen Payment Gateway for Cloud MLM Software";
  const description =
    "Modernise your Adyen payment gateway inside Cloud MLM Software with AI-assisted operations, global coverage, and executive-level insight.";

  return {
    title,
    description,
    keywords: [
      "Adyen payment gateway",
      "Cloud MLM Software Adyen integration",
      "global MLM payments",
      "AI payment orchestration",
      "direct selling payment gateway"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/adyen", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AdyenPageProps = {
  params: { lang: SupportedLocale };
};

export default function AdyenPage({ params }: AdyenPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-slate-50 to-sky-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_40%_82%,rgba(16,185,129,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Adyen unified commerce
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Transform Adyen into a growth engine for AI-powered MLM enterprises.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software distills the historic module lineup—multi-currency, ticketing, e-wallets—into a modern,
              Adyen-ready experience. Your distributors, finance leaders, and board gain one orchestrated view of payment
              intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to Adyen strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Explore live payment demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-sky-500/20 via-blue-400/20 to-emerald-300/20 dark:from-sky-400/20 dark:via-blue-400/20 dark:to-emerald-400/20" />
            </div>
            <div className="relative grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10 sm:grid-cols-3">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.title} className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                        {signal.title}
                      </p>
                      <p className="text-xl font-semibold text-foreground dark:text-white">{signal.value}</p>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/70">{signal.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Executive pillars for Adyen + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            We re-architected the legacy copy around modules, plans, and services into pillars that resonate with growth,
            finance, and compliance leaders today.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {EXECUTIVE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-primary/10 via-sky-300/20 to-emerald-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.summary}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {pillar.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-emerald-200" aria-hidden />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-slate-50 to-cyan-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Roadmap to activate Adyen inside Cloud MLM Software
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                Every phase honours the historic modules list—multi-currency, ticketing, e-wallets, backup manager—while
                infusing AI-assisted governance and storytelling.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                See supporting modules
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <ol className="grid gap-6 md:grid-cols-2">
            {ROADMAP_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <li
                  key={phase.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {phase.phase}
                      </p>
                      <p className="text-lg font-semibold text-foreground dark:text-white">{phase.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{phase.narrative}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Regional lanes backed by metrics, modules, and AI insights
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Legacy copy referenced global growth; we grounded it with specific payment methods, leadership narratives, and
            AI support for Adyen deployments across continents.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {REGIONAL_LANES.map((lane) => (
            <article
              key={lane.region}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary dark:text-emerald-200">
                {lane.region}
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground dark:text-white">Payments in motion</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{lane.payments}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground dark:text-white">Leadership advantage</h4>
                <p className="text-sm text-muted-foreground dark:text-white/70">{lane.leadership}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-blue-300/20 to-teal-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-primary/20 dark:via-blue-400/20 dark:to-emerald-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Intelligence engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Keep AI assistants and leadership teams aligned on Adyen innovation.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Whether you launch new markets, manage compliance, or coach distributors, Cloud MLM Software broadcasts the
              right narrative to humans and AI copilots alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Book a strategy session
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 text-primary-foreground hover:bg-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  See the AIO-ready demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INTELLIGENCE_CUES.map((cue) => {
              const Icon = cue.icon;
              return (
                <article
                  key={cue.headline}
                  className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold">{cue.headline}</h3>
                  <p className="text-sm text-primary-foreground/80 dark:text-white/80">{cue.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
