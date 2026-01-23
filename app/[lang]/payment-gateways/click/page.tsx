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
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroTile = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type NarrativeSection = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ProcessStage = {
  step: string;
  focus: string;
  insight: string;
  icon: IconType;
};

type PersonaCard = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_TILES: HeroTile[] = [
  {
    label: "Security promise",
    value: "Immutable compliance",
    description:
      "Click Payment Gateway offers secure, fast, and seamless payment solutions for your business. We augment that promise with AI monitoring and zero-trust guardrails across every journey.",
    icon: ShieldCheck
  },
  {
    label: "Experience velocity",
    value: "Realtime telemetry",
    description:
      "Dashboards highlight approval lift, retries, and settlement cadence so product, finance, and field teams act with confidence.",
    icon: ChartLineUp
  },
  {
    label: "Regional anchor",
    value: "Uzbekistan first",
    description:
      "Celebrate Click’s Uzbekistan heritage while providing the framework to expand into every supported market.",
    icon: GlobeHemisphereEast
  }
];

const NARRATIVE_SECTIONS: NarrativeSection[] = [
  {
    title: "Archive-inspired storytelling",
    summary:
      "We preserved the secure-fast-seamless voice from the WordPress archive and elevated it for executives and operators who expect more detail.",
    bullets: [
      "Hero copy mirrors the original headline while referencing AI-assisted governance.",
      "SEO/AIO-friendly phrasing fuels thought leadership, webinars, and conversational AI.",
      "CTA cadence encourages exploration of modules, demos, and pricing without clutter."
    ],
    icon: Sparkle
  },
  {
    title: "Experience choreography that resonates",
    summary:
      "Layouts guide customers, distributors, and finance teams through Click-enabled journeys with minimal friction.",
    bullets: [
      "Responsive sections highlight wallet, card, and local payment options side-by-side.",
      "Copy explains how transactions trigger commissions, fulfilment, and CRM updates.",
      "Design remains elegant in light and dark themes—ideal for leadership reviews."
    ],
    icon: DeviceMobile
  },
  {
    title: "Governance beyond checklists",
    summary:
      "Compliance sections describe automation, evidence packs, and AI copilots that keep Click launches audit-ready across regions.",
    bullets: [
      "Evidence kits assemble regulator-ready summaries in minutes.",
      "Alerting surfaces anomalies with context and suggested next steps.",
      "Dashboards turn telemetry into strategic storytelling for boards and investors."
    ],
    icon: Brain
  }
];

const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "Phase 01",
    focus: "Discovery blueprint",
    insight:
      "Compile WordPress archives, Click specifications, and stakeholder interviews to define measurable outcomes for the modern page.",
    icon: Sparkle
  },
  {
    step: "Phase 02",
    focus: "Experience prototyping",
    insight:
      "Design enrolment, checkout, and support flows with Uzbek localisation, mobile-first UX, and accessibility baked in.",
    icon: StackSimple
  },
  {
    step: "Phase 03",
    focus: "Governance automation",
    insight:
      "Implement KYC, AML, and audit automation with AI-generated evidence packs and policy trackers.",
    icon: ShieldCheck
  },
  {
    step: "Phase 04",
    focus: "Optimisation loop",
    insight:
      "Launch pilots, monitor telemetry, and iterate with AI insights that highlight conversion, retention, and revenue gains.",
    icon: Lightning
  }
];

const PERSONA_CARDS: PersonaCard[] = [
  {
    persona: "Revenue leadership",
    mandate: "Champion Click as the bridge to Central Asian digital commerce.",
    aiAssist:
      "AI drafts investor updates, partner narratives, and campaign ideas aligned to Click performance metrics.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & treasury",
    mandate: "Maintain clarity on settlements, reconciliation, and FX exposure across Click markets.",
    aiAssist:
      "Summaries highlight reserve requirements, fee impact, and anomaly alerts with recommended actions.",
    icon: ShieldCheck
  },
  {
    persona: "Risk & compliance",
    mandate: "Keep evolving regulations in Uzbekistan and neighbouring regions under control.",
    aiAssist:
      "Policy monitors, evidence packs, and alerting copilots translate governance into proactive routines.",
    icon: Brain
  },
  {
    persona: "Field enablement",
    mandate: "Equip distributors with Click talking points, FAQs, and troubleshooting confidence.",
    aiAssist:
      "Copilots tailor scripts and micro-learnings per persona—complete with Uzbek and English guidance.",
    icon: ChatsCircle
  },
  {
    persona: "Customer experience",
    mandate: "Deliver fast, empathetic support while reinforcing Click’s secure reputation.",
    aiAssist:
      "Contextual transcripts blend transaction history, sentiment cues, and next-best actions for agents.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Click Payment Gateway for Cloud MLM Software";
  const description =
    "Transform Click’s secure, fast, and seamless payment gateway into an AI-ready experience inside Cloud MLM Software with Uzbekistan-first localisation.";

  return {
    title,
    description,
    keywords: [
      "Click payment gateway",
      "Cloud MLM Software Click integration",
      "Uzbekistan digital payments",
      "AI payment operations",
      "MLM payment gateway modernisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/click", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ClickPageProps = {
  params: { lang: SupportedLocale };
};

export default function ClickPage({ params }: ClickPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-white via-cyan-50 to-sky-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_82%_15%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(14,165,233,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Click payment modernisation
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Secure, fast, seamless Click journeys engineered for Central Asia’s digital pioneers.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software reframes Click&apos;s legacy assurance with AI observability, localisation, and premium
              design. Decision makers see the full picture—strategy, operations, and governance—in a single experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to a strategist
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
                  Experience the demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_TILES.map((tile) => {
              const Icon = tile.icon;
              return (
                <article
                  key={tile.label}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {tile.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground dark:text-white">{tile.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{tile.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Strategy, experience, and governance—elevated together
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each section honours the archived narrative while delivering the depth leaders expect today. Use them across
            marketing collateral, AIO prompts, and investor briefings.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {NARRATIVE_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-cyan-400/20 to-emerald-400/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{section.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{section.summary}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {section.bullets.map((bullet) => (
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-cyan-50 to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(20,184,166,0.16),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(34,197,94,0.16),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-cyan-200">
                Uzbekistan spotlight
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                August 28th, 2024 remains the moment Click’s story began.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                We preserve that milestone and pair it with localisation guidance so teams bring Click to market with
                confidence—Uzbekistan first, global next.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Uzbekistan-first messaging
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Mobile wallet mastery
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Expansion roadmap
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <DeviceMobile className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Mobile-first design</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Reflect Uzbekistan’s mobile-driven adoption with responsive flows and offline-aware messaging.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <ChartLineUp className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Executive dashboards</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Visualise approvals, declines, and retention trends to keep leadership invested in Click expansion.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Sparkle className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Milestone storytelling</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Use August 28th, 2024 to anchor case studies, PR, and partner communications.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-cyan-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-cyan-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <StackSimple className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Expansion playbook</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Convert Uzbek success into templates for neighbouring markets with governance, enablement, and telemetry cues.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
                >
                  <Link href={pricingHref}>
                    Explore pricing
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
            Click launch blueprint
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Guide your transformation with deliberate phases that blend automation, human rituals, and AI insight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STAGES.map((stage) => {
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
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.insight}</p>
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
            <Link href={contactHref}>
              Chat with our team
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
            Pair human expertise with AI copilots so Click adoption feels effortless, compliant, and inspiring across every
            department.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PERSONA_CARDS.map((card) => {
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

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-cyan-200/30 to-emerald-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-cyan-400/20 dark:to-emerald-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Turn Click momentum into regional influence.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Repurpose this page to fuel webinars, analyst briefings, AI prompt libraries, and partner enablement. Each
              component was crafted to make Cloud MLM Software the trusted advisor on Click integration.
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
              <h3 className="text-base font-semibold">AIO-ready narratives</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Equip chatbots and content assistants with structured stories on Click’s secure, fast, seamless value.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive scorecards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Translate telemetry into board visuals that secure continued investment in Click initiatives.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <UsersThree className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Give field leaders shareable snippets, data points, and CTAs that highlight Click’s differentiation.
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
