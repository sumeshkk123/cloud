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

type HeroCard = {
  title: string;
  metric: string;
  detail: string;
  icon: IconType;
};

type StoryBlock = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type PhaseCard = {
  phase: string;
  focus: string;
  narrative: string;
  icon: IconType;
};

type EnablementPanel = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Secure orchestration",
    metric: "Enterprise-grade trust",
    detail:
      "Checkout.com Payment Gateway offers secure, fast, and seamless payment solutions for your business. We elevate that promise with AI-powered monitoring and zero-trust guardrails.",
    icon: ShieldCheck
  },
  {
    title: "Experience velocity",
    metric: "Realtime intelligence",
    detail:
      "Telemetry surfaces approval lift, retry logic, and settlement cadence so every team stays informed in seconds.",
    icon: ChartLineUp
  },
  {
    title: "Regional leadership",
    metric: "UAE-first narrative",
    detail:
      "Highlight United Arab Emirates excellence while preparing to scale Checkout.com across every supported market.",
    icon: GlobeHemisphereEast
  }
];

const STORY_BLOCKS: StoryBlock[] = [
  {
    heading: "Narrative crafted for executive conviction",
    summary:
      "We honoured the WordPress-era message and expanded it with thought leadership that speaks to the boardroom and beyond.",
    bullets: [
      "Hero copy mirrors the secure-fast-seamless voice while adding AI-era nuance.",
      "SEO/AIO-ready phrasing feeds webinars, articles, and conversational assistants.",
      "CTA placement encourages deeper exploration of modules, demos, and pricing."
    ],
    icon: Sparkle
  },
  {
    heading: "Experience design for omnichannel brands",
    summary:
      "Layouts and copy guide product, finance, and field teams through Checkout.com journeys without jargon overload.",
    bullets: [
      "Responsive patterns showcase cards, wallets, and local APMs in one view.",
      "Microcopy clarifies how transactions trigger commissions, fulfilment, and CRM automation.",
      "Dark-mode aware styling ensures clarity during executive reviews and presentations."
    ],
    icon: DeviceMobile
  },
  {
    heading: "Governance at the speed of innovation",
    summary:
      "Compliance leaders gain automation, evidence packs, and AI copilots that keep Checkout.com launches audit-ready.",
    bullets: [
      "Policy monitors alert teams to regional updates with human-readable summaries.",
      "Evidence kits assemble regulator-friendly documentation in minutes.",
      "Dashboards combine telemetry with storytelling so investors see resilience clearly."
    ],
    icon: Brain
  }
];

const PHASE_CARDS: PhaseCard[] = [
  {
    phase: "Wave 01",
    focus: "Discovery & intent",
    narrative:
      "Consolidate legacy assets, Checkout.com specs, and stakeholder goals to define measurable outcomes.",
    icon: Sparkle
  },
  {
    phase: "Wave 02",
    focus: "Experience prototyping",
    narrative:
      "Design enrolment, checkout, and support flows with UAE localisation and accessibility baked in.",
    icon: StackSimple
  },
  {
    phase: "Wave 03",
    focus: "Integration & compliance",
    narrative:
      "Connect Checkout.com APIs and webhooks with observability, sandbox guardrails, and automated evidence packs.",
    icon: ShieldCheck
  },
  {
    phase: "Wave 04",
    focus: "Optimisation & expansion",
    narrative:
      "Activate pilots, monitor telemetry, and iterate with AI insights that highlight conversion, retention, and revenue lift.",
    icon: Lightning
  }
];

const ENABLEMENT_PANELS: EnablementPanel[] = [
  {
    persona: "Revenue leadership",
    mandate: "Position Checkout.com as the catalyst for UAE-born expansion into global markets.",
    aiAssist:
      "AI drafts investor updates, partner narratives, and pipeline projections anchored to Checkout.com data.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & treasury",
    mandate: "Maintain visibility on settlements, reconciliation, and FX exposure.",
    aiAssist:
      "Summaries highlight reserve requirements, fee models, and variance alerts with actionable recommendations.",
    icon: ShieldCheck
  },
  {
    persona: "Risk & compliance",
    mandate: "Stay ahead of regulatory changes across the UAE and emerging regions.",
    aiAssist:
      "Policy trackers, evidence kits, and anomaly alerts keep teams proactive without drowning in admin.",
    icon: Brain
  },
  {
    persona: "Field enablement",
    mandate: "Equip distributors with Checkout.com moment stories, FAQs, and troubleshooting scripts.",
    aiAssist:
      "Copilots tailor messaging for retail, subscription, and marketplace scenarios while supporting Arabic and English.",
    icon: ChatsCircle
  },
  {
    persona: "Customer experience",
    mandate: "Resolve payment inquiries quickly while reinforcing Checkout.com’s secure reputation.",
    aiAssist:
      "Contextual transcripts combine transaction metadata, sentiment signals, and next-best actions for agents.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Checkout.com Payment Gateway for Cloud MLM Software";
  const description =
    "Deliver Checkout.com’s secure, fast, and seamless payment journeys inside Cloud MLM Software with UAE-first localisation and AI-enabled governance.";

  return {
    title,
    description,
    keywords: [
      "Checkout.com payment gateway",
      "Cloud MLM Software Checkout.com integration",
      "UAE digital payments",
      "AI payment operations",
      "MLM payment gateway modernisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/checkout-com", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CheckoutComPageProps = {
  params: { lang: SupportedLocale };
};

export default function CheckoutComPage({ params }: CheckoutComPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-border/60 bg-gradient-to-br from-white via-slate-50 to-sand-100 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_82%_15%,rgba(14,165,233,0.16),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(125,211,252,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Checkout.com transformation
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Power UAE-grade Checkout.com experiences with AI-ready precision.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software reimagines the secure-fast-seamless narrative for an era of automation, omnichannel
              buying, and global compliance. Stakeholders gain clarity, confidence, and momentum from the first scroll.
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
            {HERO_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {card.title}
                    </p>
                    <p className="text-lg font-semibold text-foreground dark:text-white">{card.metric}</p>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{card.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Storytelling that carries the archive forward
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Use these blocks to fuel marketing, enablement, and analyst briefings. Each one respects the original
            Checkout.com message while adding depth for today’s decision makers.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STORY_BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.heading}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-amber-300/20 to-sky-300/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{block.heading}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{block.summary}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {block.bullets.map((bullet) => (
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-amber-50 to-slate-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-amber-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(125,211,252,0.18),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-amber-200">
                United Arab Emirates spotlight
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                August 28th, 2024 marks the baseline for Checkout.com excellence.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The archive celebrated Checkout.com’s UAE roots. We carried that heritage into a modern narrative that
                guides localisation, compliance, and expansion across neighbouring markets.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  UAE-first compliance
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Luxury-grade CX
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Expansion blueprints
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <DeviceMobile className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Omnichannel experiences</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Showcase how Checkout.com harmonises card, wallet, and local APMs for UAE shoppers across devices.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <ChartLineUp className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Executive-ready telemetry</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Provide leadership with approval, fraud, and retention dashboards tuned for luxury retail expectations.
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
                  Leverage August 28th, 2024 as a case-study anchor for investors, partners, and media outlets.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-amber-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-amber-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <StackSimple className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Expansion playbooks</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Convert UAE success into reproducible blueprints for Europe, APAC, and the Americas.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
                >
                  <Link href={buildLocalizedPath("/mlm-software-availability-across-countries", locale)}>
                    View global coverage
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
            Launch roadmap aligned to Checkout.com excellence
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Navigate discovery, design, integration, and optimisation with phases that combine automation and human
            rituals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHASE_CARDS.map((phase) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.phase}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {phase.phase}
                    </p>
                    <p className="text-sm font-semibold text-foreground dark:text-white">{phase.focus}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{phase.narrative}</p>
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
            Enablement streams that keep teams in sync
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Combine human expertise with AI copilots so Checkout.com adoption feels effortless, compliant, and inspiring.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {ENABLEMENT_PANELS.map((panel) => {
            const Icon = panel.icon;
            return (
              <article
                key={panel.persona}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                    {panel.persona}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{panel.mandate}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{panel.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-amber-200/30 to-slate-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-amber-400/20 dark:to-slate-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Use Checkout.com success to shape industry conversations.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Repurpose these elements across webinars, analyst briefings, AI prompt libraries, and partner playbooks. The
              design keeps Cloud MLM Software front and centre as the definitive voice on Checkout.com integrations.
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
                Feed chatbots and content assistants with stories rooted in security, speed, and seamless design.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive scorecards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Translate telemetry into board visuals that keep investment flowing toward Checkout.com initiatives.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <UsersThree className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Arm field leaders with social-ready snippets and case-study hooks that spotlight Checkout.com differentiation.
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
