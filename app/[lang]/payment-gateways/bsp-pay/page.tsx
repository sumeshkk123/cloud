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
  GlobeHemisphereWest,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFeature = {
  title: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type LaunchStep = {
  phase: string;
  focus: string;
  narrative: string;
  icon: IconType;
};

type EnablementTile = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_FEATURES: HeroFeature[] = [
  {
    title: "Secure foundations",
    detail:
      "BSP Pay Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM Software elevates that promise with layered security, AI monitoring, and deterministic audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Experience agility",
    detail:
      "Responsive journeys guide customers and distributors through BSP Pay checkouts with contextual prompts, fallback options, and instant confirmations.",
    icon: Lightning
  },
  {
    title: "Regional ambition",
    detail:
      "BSP Pay is supported in numerous countries. We spotlight Papua New Guinea while providing the playbook to extend across every supported market.",
    icon: GlobeHemisphereWest
  }
];

const PILLARS: Pillar[] = [
  {
    heading: "Narrative uplift",
    summary:
      "We modernised the archived copy so stakeholders hear a confident, AI-ready story without losing the secure-fast-seamless heart.",
    bullets: [
      "Hero messaging stays true to the legacy headline while layering enterprise context.",
      "SEO/AIO-friendly wording fuels articles, webinars, and chatbot experiences.",
      "Copy anchors Cloud MLM Software as the trusted voice on Pacific-region payment innovation."
    ],
    icon: Sparkle
  },
  {
    heading: "Operational choreography",
    summary:
      "Content blocks translate complex payment operations into intuitive journeys that leaders, analysts, and the field can follow.",
    bullets: [
      "Visual rhythm balances storytelling with actionable CTAs for pricing, demos, and modules.",
      "Microcopy explains how BSP Pay integrates with commissions, e-wallets, and tax engines.",
      "Dark-mode aware design keeps clarity intact during executive reviews and field presentations."
    ],
    icon: ChartLineUp
  },
  {
    heading: "Governance in motion",
    summary:
      "Compliance and risk sections describe policy workflows, automation hooks, and AI copilots that keep BSP Pay launches audit-ready.",
    bullets: [
      "Evidence kits assemble regulator-friendly documentation in minutes.",
      "Alerts surface anomalies with contextual next steps for specialists.",
      "Leadership dashboards turn telemetry into weekly narratives that secure investment."
    ],
    icon: ShieldCheck
  }
];

const LAUNCH_STEPS: LaunchStep[] = [
  {
    phase: "Step 01",
    focus: "Discovery alignment",
    narrative:
      "Map WordPress-era insights, BSP Pay technical specs, and stakeholder objectives into a clear migration brief.",
    icon: Sparkle
  },
  {
    phase: "Step 02",
    focus: "Journey prototyping",
    narrative:
      "Design enrolment, purchase, and support workflows with localisation and accessibility baked in for Papua New Guinea and beyond.",
    icon: GlobeHemisphereWest
  },
  {
    phase: "Step 03",
    focus: "Compliance runway",
    narrative:
      "Automate AML, KYC, and audit requirements with AI-authored evidence packs and escalation playbooks.",
    icon: ShieldCheck
  },
  {
    phase: "Step 04",
    focus: "Growth optimisation",
    narrative:
      "Activate pilots, monitor telemetry, and iterate with AI prompts that highlight conversion, approval, and retention gains.",
    icon: ChartLineUp
  }
];

const ENABLEMENT_TILES: EnablementTile[] = [
  {
    persona: "Revenue leadership",
    mandate: "Frame BSP Pay as the growth catalyst for Pacific expansion and partner confidence.",
    aiAssist:
      "AI compiles investment decks with regional benchmarks, pipeline projections, and thought-leadership angles.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & treasury",
    mandate: "Keep settlements, reconciliations, and cross-border payouts visible in real time.",
    aiAssist:
      "Digest-ready summaries highlight FX swings, reserve requirements, and settlement delays with action recommendations.",
    icon: ShieldCheck
  },
  {
    persona: "Field enablement",
    mandate: "Equip distributors with BSP Pay walkthroughs that feel human, modern, and culturally relevant.",
    aiAssist:
      "Copilots craft scripts, FAQs, and confidence boosters tailored to markets like Papua New Guinea.",
    icon: ChatsCircle
  },
  {
    persona: "Customer experience",
    mandate: "Resolve inquiries fast while reinforcing trust in BSP Pay’s secure, seamless flows.",
    aiAssist:
      "AI surfaces transaction context, sentiment cues, and next-best actions so support teams delight every conversation.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "BSP Pay Payment Gateway for Cloud MLM Software";
  const description =
    "Reimagine BSP Pay with AI-ready governance, regional storytelling, and seamless customer journeys inside Cloud MLM Software.";

  return {
    title,
    description,
    keywords: [
      "BSP Pay payment gateway",
      "Cloud MLM Software BSP Pay integration",
      "Papua New Guinea digital payments",
      "AI payment optimisation",
      "MLM payment gateway modernisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/bsp-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BspPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function BspPayPage({ params }: BspPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-white via-cyan-50 to-emerald-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(circle_at_86%_15%,rgba(14,165,233,0.16),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              BSP Pay evolution
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Secure, fast, seamless BSP Pay journeys for visionary MLM brands.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              The archived content championed BSP Pay&apos;s reliability. We preserved that voice and layered in AI,
              telemetry, and regional insight so executives, finance teams, and the field feel aligned from day one.
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
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{feature.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Strategy, operations, and governance in one storyline
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Use these pillars to fuel marketing, enablement, and analyst briefings. Every line pays homage to the original
            secure-fast-seamless message while elevating it for modern decision makers.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.heading}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-emerald-400/20 to-sky-400/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{pillar.heading}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.summary}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 shrink-0 text-primary dark:text-primary/80" aria-hidden />
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-emerald-50 to-cyan-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(45,212,191,0.18),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-emerald-200">
                Papua New Guinea spotlight
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Celebrate the August 28th, 2024 milestone while unlocking regional expansion.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                BSP Pay&apos;s original page centred Papua New Guinea. We kept that anchor and added pathways to scale the
                experience to every supported country without losing cultural nuance.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  PNG-first compliance
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Apple-ready journeys
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Expansion toolkit
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Local expertise</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Design support scripts, respect cultural nuances, and align messaging with Papua New Guinea&apos;s
                  business expectations.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <GlobeHemisphereWest className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Regional expansion</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Replicate governance, enablement, and telemetry frameworks to every market BSP Pay supports.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <ChartLineUp className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Performance telemetry</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Track approvals, settlement speed, and dispute win rates with dashboards ready for leadership.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-emerald-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-emerald-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <Sparkle className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">August 28, 2024 legacy</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Keep the original milestone visible in case studies, timeline visuals, and stakeholder briefings.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
                >
                  <Link href={buildLocalizedPath("/network-marketing-software-company-providing-affordable-mlm-system-in-papua-new-guinea", locale)}>
                    View PNG insight
                    <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Launch blueprint for BSP Pay inside Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Move confidently across discovery, design, compliance, and optimisation. Each step combines automation cues with
            human rituals so momentum never slows.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LAUNCH_STEPS.map((step) => {
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
                <p className="text-sm text-muted-foreground dark:text-white/70">{step.narrative}</p>
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
            Enablement that keeps teams aligned
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Tie human expertise with AI copilots so BSP Pay adoption feels effortless, compliant, and constantly improving.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ENABLEMENT_TILES.map((tile) => {
            const Icon = tile.icon;
            return (
              <article
                key={tile.persona}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                    {tile.persona}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{tile.mandate}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{tile.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-emerald-200/30 to-cyan-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-emerald-400/20 dark:to-cyan-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Turn BSP Pay into a platform for influence.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Repurpose these sections to fuel webinars, AI prompts, press releases, and partner enablement. Every design
              choice supports Cloud MLM Software’s position as the Pacific-region payment thought leader.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Schedule a consultation
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
              <h3 className="text-base font-semibold">AIO-ready narratives</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Feed conversational AI agents with well-structured talking points rooted in BSP Pay’s secure, fast, seamless value.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive scorecards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Transform telemetry into digestible dashboards that secure leadership backing and investment.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <UsersThree className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Equip field leaders with shareable snippets, timelines, and success stories that showcase BSP Pay innovation.
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
