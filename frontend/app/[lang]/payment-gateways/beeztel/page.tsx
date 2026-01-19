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
  ChatsCircle,
  Circuitry,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  LockSimple,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type VisionColumn = {
  heading: string;
  summary: string;
  highlights: string[];
  icon: IconType;
};

type JourneyStage = {
  step: string;
  focus: string;
  description: string;
  icon: IconType;
};

type EnablementCard = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    title: "Security promise",
    value: "Bank-grade hardening",
    detail:
      "Beeztel Payment Gateway offers secure, fast, and seamless payment solutions for your business—now refactored with Cloud MLM Software’s zero-trust policies.",
    icon: ShieldCheck
  },
  {
    title: "Experience velocity",
    value: "Realtime telemetry",
    detail:
      "Track settlement cadence, retry logic, and fulfilment workflows as Beeztel transactions flow through the platform.",
    icon: Lightning
  },
  {
    title: "Global readiness",
    value: "Algeria spotlight",
    detail:
      "Launch with Algeria’s regulatory blueprint, then extend Beeztel coverage across every market the gateway supports.",
    icon: GlobeHemisphereEast
  }
];

const VISION_COLUMNS: VisionColumn[] = [
  {
    heading: "Narrative crafted for leaders",
    summary:
      "We translated the legacy WordPress copy into a boardroom-ready story. The original promise—secure, fast, seamless—now fuels aspirational messaging that wins executive sponsorship.",
    highlights: [
      "Hero copy stays faithful to the original Beeztel headline while elevating tone and detail.",
      "Discovery prompts map historical modules, plans, and calculators into a cohesive enterprise narrative.",
      "Thought-leadership hooks feed SEO and AIO surfaces with authoritative insight on payment innovation."
    ],
    icon: RocketLaunch
  },
  {
    heading: "Experience design with depth",
    summary:
      "Section-by-section, the page choreographs decision flows for product, finance, and distributor enablement teams.",
    highlights: [
      "Immersive cards communicate onboarding, compliance, and growth plays without overwhelming the reader.",
      "Dynamic gradients and dark-mode aware surfaces maintain polish in every viewing context.",
      "CTA clusters keep pricing, modules, and demo requests within a single scroll."
    ],
    icon: Sparkle
  },
  {
    heading: "Governance amplified by AI",
    summary:
      "We extended Beeztel’s security story with automation, evidence packs, and conversational AI assistants tuned for direct selling.",
    highlights: [
      "Operational intelligence exposes anomalies with context so risk leaders move quickly.",
      "AI summaries transform policy updates into desk-ready guidance for the field.",
      "Playbooks connect to compliance archives, preserving traceability for every Beeztel transaction."
    ],
    icon: Circuitry
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: "Phase 01",
    focus: "Discovery synthesis",
    description:
      "Consolidate Beeztel requirements, Apple device considerations, and historical support conversations into an actionable blueprint.",
    icon: ChartLineUp
  },
  {
    step: "Phase 02",
    focus: "CX choreography",
    description:
      "Prototype enrolment, checkout, and settlement experiences with responsive layouts and localisation baked in.",
    icon: DeviceMobile
  },
  {
    step: "Phase 03",
    focus: "Compliance activation",
    description:
      "Codify KYC, AML, and jurisdictional reporting into automation guardrails supported by AI-authored evidence summaries.",
    icon: LockSimple
  },
  {
    step: "Phase 04",
    focus: "Expansion intelligence",
    description:
      "Launch, measure, and iterate with dashboards highlighting approval lift, dispute prevention, and regional performance.",
    icon: Lightning
  }
];

const ENABLEMENT_CARDS: EnablementCard[] = [
  {
    persona: "Revenue leadership",
    mandate: "Present Beeztel as the secure growth engine for expansion programmes and partner alliances.",
    aiAssist:
      "AI composes executive-ready updates with trendlines, competitor benchmarks, and recommended incentives aligned to Beeztel insights.",
    icon: RocketLaunch
  },
  {
    persona: "Finance & treasury",
    mandate: "Maintain clarity on settlements, reconciliations, and liquidity in Beeztel-enabled markets.",
    aiAssist:
      "Realtime digests highlight FX swings, fee exposure, and reserve requirements, complete with suggested remediation options.",
    icon: ChartLineUp
  },
  {
    persona: "Compliance office",
    mandate: "Translate evolving policy into frontline guardrails without slowing distributor activity.",
    aiAssist:
      "Contextual evidence packs and natural-language explanations accelerate approvals and regulator conversations.",
    icon: ShieldCheck
  },
  {
    persona: "Field enablement",
    mandate: "Guide distributors through Apple-ready Beeztel checkouts and post-purchase support.",
    aiAssist:
      "Conversational copilots assemble walk-throughs, troubleshooting prompts, and confidence-boosting scripts for every device type.",
    icon: ChatsCircle
  },
  {
    persona: "Product & engineering",
    mandate: "Sustain resilient integrations while experimenting with new payment experiences.",
    aiAssist:
      "Automated monitors surface latency spikes, API shifts, and capacity alerts so teams iterate safely.",
    icon: Circuitry
  },
  {
    persona: "Enablement & training",
    mandate: "Convert Beeztel expertise into on-demand learning with measurable adoption impact.",
    aiAssist:
      "AI curates micro-learnings, certification paths, and community sessions anchored to field feedback.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Beeztel Payment Gateway for Cloud MLM Software";
  const description =
    "Deploy Beeztel’s secure, fast, and seamless payment gateway inside Cloud MLM Software with AI-assisted governance and global readiness.";

  return {
    title,
    description,
    keywords: [
      "Beeztel payment gateway",
      "Cloud MLM Software Beeztel integration",
      "secure MLM payment processing",
      "AI payment operations",
      "Algeria payment gateway for direct selling"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/beeztel", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BeeztelPageProps = {
  params: { lang: SupportedLocale };
};

export default function BeeztelPage({ params }: BeeztelPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-border/60 bg-gradient-to-br from-white via-slate-50 to-sky-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.16),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(167,243,208,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Beeztel gateway evolution
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Secure, fast, and seamless Beeztel payments—reimagined for bold MLM operators.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Rooted in the original Beeztel archive, this page reframes the message for today&apos;s enterprise audience.
              Cloud MLM Software layers telemetry, AI stewardship, and localisation so every payment journey feels
              effortless.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with a strategist
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
                  Explore live demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article
                  key={metric.title}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {metric.title}
                      </p>
                      <p className="text-base font-semibold text-foreground dark:text-white">{metric.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Storytelling that honours the archive while modernising every section
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            The WordPress-era narrative focused on secure, fast, and seamless payments. We kept that essence and elevated
            it with fresh messaging designed for revenue, product, and compliance leaders who demand depth.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {VISION_COLUMNS.map((column) => {
            const Icon = column.icon;
            return (
              <article
                key={column.heading}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-sky-400/20 to-emerald-400/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{column.heading}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{column.summary}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {column.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 shrink-0 text-primary dark:text-primary/80" aria-hidden />
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-blue-50 to-teal-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(125,211,252,0.16),transparent_55%),radial-gradient(circle_at_80%_14%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(52,211,153,0.16),transparent_55%)]" />
        <div className="container space-y-12 lg:grid lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-emerald-200">
              Coverage spotlight
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
              Algeria anchors Beeztel adoption—with pathways to every supported country.
            </h2>
            <p className="text-base text-muted-foreground dark:text-white/80">
              The original page highlighted Beeztel&apos;s Apple-friendly checkout and extensive country coverage. We
              preserved that message and layered impact narratives for legal, revenue, and product teams planning rollouts
              beyond Algeria.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                Algeria best practices
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                Apple device optimisation
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                Multi-country roadmap
              </span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                  <GlobeHemisphereEast className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-foreground dark:text-white">Regional confidence</p>
              </div>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Align legal, finance, and operations with Algeria&apos;s policy precedent—covering data residency, dispute
                management, and treasury workflows.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                  <DeviceMobile className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-foreground dark:text-white">Apple-ready journeys</p>
              </div>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Responsive flows optimise Beeztel for Apple devices, ensuring frictionless customer and distributor
                experiences everywhere.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                  <RocketLaunch className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-foreground dark:text-white">Expansion coalitions</p>
              </div>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Cross-functional launch rooms pair human expertise with AI observers to unlock Beeztel in every targeted
                geography.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-emerald-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-emerald-400/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                  <Sparkle className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-foreground dark:text-white">August 28, 2024 highlight</p>
              </div>
              <p className="text-sm text-muted-foreground dark:text-white/80">
                Preserve the archive&apos;s timestamp by anchoring Algeria in launch communications and future case studies.
              </p>
              <Button
                asChild
                variant="secondary"
                className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
              >
                <Link href={buildLocalizedPath("/network-marketing-software-company-providing-affordable-mlm-system-in-algeria", locale)}>
                  View Algeria insight
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Journey from audit to launch with clarity
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Adopt Beeztel through deliberate phases that merge legacy knowledge with modern automation. Each stage is
            designed to deliver quick wins and long-term confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {JOURNEY_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.step}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {stage.step}
                    </p>
                    <p className="text-sm font-semibold text-foreground dark:text-white">{stage.focus}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.description}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Review module catalogue
              <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border/60 text-muted-foreground hover:bg-primary/10 hover:text-primary dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            <Link href={pricingHref}>
              Explore pricing
              <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Enablement streams to keep teams aligned
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Beeztel becomes a catalyst for every stakeholder. Pair human expertise with AI copilots so decisions stay fast,
            compliant, and inspiring.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ENABLEMENT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.persona}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                    {card.persona}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{card.mandate}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{card.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-sky-200/30 to-emerald-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-sky-400/20 dark:to-emerald-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Turn Beeztel momentum into lasting differentiation.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Use this page as the launchpad for webinars, research notes, and AI conversations. Every card, insight, and
              CTA is designed to make Cloud MLM Software the trusted authority on Beeztel-driven payments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Schedule a strategy session
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
                  Try the AI-powered demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Sparkle className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">AIO-ready conversation cues</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Feed AI assistants with structured insights that echo the secure, fast, seamless message and its modern
                enhancements.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <LockSimple className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Governance storytelling</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Demonstrate Beeztel&apos;s compliance posture with narratives that satisfy regulators and reassure the
                field.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChatsCircle className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Equip brand advocates with scripts, FAQs, and social-ready snippets spotlighting Beeztel&apos;s advantages.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
