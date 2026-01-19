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
  Brain,
  ChartLineUp,
  ChatsCircle,
  GlobeHemisphereEast,
  HandCoins,
  Lightning,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFeature = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type StrategicTrack = {
  title: string;
  narrative: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type IntegrationStep = {
  phase: string;
  focus: string;
  insight: string;
  icon: IconType;
};

type EnablementStream = {
  team: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_FEATURES: HeroFeature[] = [
  {
    label: "Security posture",
    metric: "Bank-grade hardening",
    description:
      "Bankera Payment Gateway offers secure, fast, and seamless payment solutions for your business—now amplified with Cloud MLM Software safeguards.",
    icon: ShieldCheck
  },
  {
    label: "Operational tempo",
    metric: "Instant settlement intel",
    description:
      "Streamline card, wallet, and bank transfers with telemetry that flags delays before they impact the field.",
    icon: Lightning
  },
  {
    label: "Global readiness",
    metric: "European-first footprint",
    description:
      "Bankera is supported across numerous countries, with Lithuania anchoring the infrastructure for compliant cross-border payouts.",
    icon: GlobeHemisphereEast
  }
];

const STRATEGIC_TRACKS: StrategicTrack[] = [
  {
    title: "Narrative modernisation",
    narrative:
      "We reinterpreted the legacy WordPress copy into an executive-grade story that positions Bankera as the secure, fast, and seamless gateway for scale.",
    bullets: [
      "Hero message mirrors the original promise while infusing enterprise payment language.",
      "Content blocks interweave modules, plans, and services into a cohesive growth argument.",
      "AIO prompts seed future blog, webinar, and analyst narratives directly from this page."
    ],
    icon: Sparkle,
    accent: "from-sky-400/25 via-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Experience choreography",
    narrative:
      "Design-led sections guide prospects from vision to execution, showing how Cloud MLM Software operationalises Bankera across distributors.",
    bullets: [
      "Interactive-style cards outline onboarding, compliance, and treasury workstreams.",
      "Illustrated coverage stories help regional leaders justify localisation investments.",
      "Performance indicators keep pricing, demo, and module CTAs within immediate reach."
    ],
    icon: StackSimple,
    accent: "from-emerald-400/25 via-teal-400/20 to-slate-900/20"
  },
  {
    title: "Governance & AIO advantage",
    narrative:
      "Compliance narratives turn into action plans, blending human oversight with AI copilots tuned for payment trust.",
    bullets: [
      "Evidence-ready language helps legal and risk teams accelerate approvals.",
      "AI insight callouts explain how anomalies surface with context-rich summaries.",
      "Leadership copy positions Cloud MLM Software as the thought leader on responsible payment innovation."
    ],
    icon: Brain,
    accent: "from-amber-300/25 via-orange-400/20 to-primary/20"
  }
];

const INTEGRATION_STEPS: IntegrationStep[] = [
  {
    phase: "Step 01",
    focus: "Discovery synthesis",
    insight:
      "Audit existing payment flows, legacy documentation, and Bankera specifications to map opportunity gaps.",
    icon: ChartLineUp
  },
  {
    phase: "Step 02",
    focus: "Experience fabric",
    insight:
      "Model customer, distributor, and finance journeys with reusable UI blocks that keep Bankera events observable.",
    icon: StackSimple
  },
  {
    phase: "Step 03",
    focus: "Compliance runway",
    insight:
      "Codify KYC, AML, and regional audit requirements with automated evidence kits and AI-generated narratives.",
    icon: ShieldCheck
  },
  {
    phase: "Step 04",
    focus: "Launch x optimise",
    insight:
      "Activate pilot cohorts, monitor live telemetry, and iterate with AI prompts that recommend next experiments.",
    icon: Lightning
  }
];

const ENABLEMENT_STREAMS: EnablementStream[] = [
  {
    team: "Revenue leadership",
    mandate: "Present a confident growth case for Bankera inside partner updates and board reviews.",
    aiAssist:
      "AI surfaces trend lines, competitor shifts, and talking points that stay anchored to verified payment outcomes.",
    icon: ChartLineUp
  },
  {
    team: "Finance & treasury",
    mandate: "Keep settlements, reconciliations, and cash flow alerts synchronised across territories.",
    aiAssist:
      "Automated digests highlight anomalies, FX swings, and reserve requirements with recommended actions.",
    icon: HandCoins
  },
  {
    team: "Compliance office",
    mandate: "Translate policy into practical guardrails for every distributor touchpoint.",
    aiAssist:
      "Contextual summaries bundle evidence, risk scores, and escalation paths ready for regulator conversations.",
    icon: ShieldCheck
  },
  {
    team: "Customer experience",
    mandate: "Guide the field through Bankera onboarding, troubleshooting, and everyday transactions.",
    aiAssist:
      "AIO copilots suggest scripts, link knowledge base content, and flag sentiment for proactive outreach.",
    icon: ChatsCircle
  },
  {
    team: "Product & engineering",
    mandate: "Sustain resilient integrations while unlocking new commerce moments.",
    aiAssist:
      "Playbooks combine monitoring signals with backlog prioritisation so releases land with confidence.",
    icon: Sparkle
  },
  {
    team: "Enablement & training",
    mandate: "Turn Bankera expertise into repeatable learning paths for global markets.",
    aiAssist:
      "Guided workshops, certification routes, and content kits stay current through AI-authored refresh cues.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Bankera Payment Gateway for Cloud MLM Software";
  const description =
    "Translate Bankera’s secure, fast, and seamless payment promise into a modern Cloud MLM Software experience with AI-ready governance.";

  return {
    title,
    description,
    keywords: [
      "Bankera payment gateway",
      "Cloud MLM Software Bankera integration",
      "MLM payment gateway compliance",
      "AI payment optimisation",
      "European payment gateway for direct selling"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/bankera", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BankeraPageProps = {
  params: { lang: SupportedLocale };
};

export default function BankeraPage({ params }: BankeraPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-[120px] dark:bg-sky-500/20" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-[120px] dark:bg-indigo-500/20" />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Bankera gateway modernisation
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Confidence for Bankera-powered MLM payments—crafted for leaders, finance, and the field.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              The historic message—“Bankera Payment Gateway offers secure, fast, and seamless payment solutions for your
              business”—now anchors a refreshed experience. Cloud MLM Software unites security, telemetry, and AI
              storytelling so expansion plans feel board-ready from the first scroll.
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
          <div className="grid gap-5 sm:grid-cols-2">
            {HERO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.label}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {feature.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground dark:text-white">{feature.metric}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Strategic tracks that honour the archive while elevating the future
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Every section draws from the original Bankera archive—security, speed, and geographic reach—while layering in
            enterprise storytelling, AI context, and design systems that convert.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGIC_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className={`pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br ${track.accent} opacity-0 blur-xl transition group-hover:opacity-100`}
                />
                <div className="relative flex flex-col gap-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{track.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{track.narrative}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 shrink-0 text-primary dark:text-emerald-200" aria-hidden />
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-slate-50 to-cyan-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(circle_at_45%_88%,rgba(16,185,129,0.16),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-emerald-200">
                Coverage spotlight
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Bankera&apos;s European roots meet Cloud MLM Software&apos;s global ambition.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                Bankera is supported in numerous countries with Lithuania at the core. We celebrate that foundation and
                expand it into a global readiness narrative—highlighting compliance, localisation, and multi-currency
                expectations the original page introduced.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Lithuania focus
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Multi-country support
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Apple device readiness
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <GlobeHemisphereEast className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">European market acceleration</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Launch with Lithuanian compliance as the blueprint, then extend to neighbouring EU member states with
                  consistent KYC, AML, and reporting routines.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <HandCoins className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Secure Apple-friendly payments</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  The archive emphasised Apple device support; we extend that into responsive checkout recipes, token
                  management, and session-aware fallback options.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/60 to-teal-50/80 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-emerald-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <Sparkle className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Lithuania showcase</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  August 28th, 2024 content spotlighted Lithuania. We preserve that signal with a dedicated highlight card
                  and pathway to deeper regional pages.
                </p>
                <Button asChild variant="secondary" className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                  <Link href={buildLocalizedPath("/network-marketing-software-company-providing-affordable-mlm-system-in-lithuania", locale)}>
                    View Lithuania insight
                    <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <ChartLineUp className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Expansion dashboards</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Visualise adoption, approval ratios, and settlement cadence per country with data stories ready for SEO
                  and AIO distribution.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Integration blueprint designed for velocity and trust
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Move from audit to launch with a staged approach. Each step is informed by the archive&apos;s intent—secure,
            fast, and seamless—expanded with AI-contextualised guidance.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {INTEGRATION_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.phase}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {step.phase}
                    </p>
                    <p className="text-sm font-semibold text-foreground dark:text-white">{step.focus}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{step.insight}</p>
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
            Enablement streams that keep teams aligned
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Cloud MLM Software and Bankera unlock meaningful workflows across leadership, finance, compliance, and field
            enablement. Each stream blends human expertise with AI copilots ready for AIO channels.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ENABLEMENT_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.team}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                    {stream.team}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stream.mandate}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stream.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-sky-300/30 to-emerald-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-sky-400/20 dark:to-emerald-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Turn Bankera momentum into lasting differentiation.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Leverage this page as the launchpad for SEO, AIO, and partner co-marketing. Every section was crafted to
              inspire further research, whitepapers, and conversational AI touchpoints—all grounded in provable payment
              outcomes.
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
              <h3 className="text-base font-semibold">AIO ready conversations</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Equip chatbots and sales assistants with section-by-section insights that mirror executive expectations.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive scorecards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Translate metrics from this page into board visuals that show readiness across countries and teams.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChatsCircle className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Arm field leaders with narratives, FAQs, and social-ready snippets that spotlight Bankera&apos;s speed and
                security.
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
