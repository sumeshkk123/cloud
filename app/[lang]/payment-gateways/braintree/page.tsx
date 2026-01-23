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
  CloudLightning,
  DeviceMobile,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  ShieldCheck,
  Sparkle,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  heading: string;
  description: string;
  icon: IconType;
};

type NarrativeBlock = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type DeliveryStage = {
  label: string;
  focus: string;
  insight: string;
  icon: IconType;
};

type PersonaEnablement = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    heading: "Secure orchestration",
    description:
      "Braintree payment gateway brings PayPal-grade resilience to Cloud MLM Software—fortified with zero-trust policies and continuous compliance monitoring.",
    icon: ShieldCheck
  },
  {
    heading: "Experience velocity",
    description:
      "Launch smart retries, queue-less checkouts, and frictionless Apple Pay journeys that keep distributors and customers moving.",
    icon: DeviceMobile
  },
  {
    heading: "Global flexibility",
    description:
      "Support subscriptions, instalments, and marketplace payouts across 130+ currencies with localisation baked into every touchpoint.",
    icon: GlobeHemisphereEast
  }
];

const NARRATIVE_BLOCKS: NarrativeBlock[] = [
  {
    title: "Upgrade the legacy story",
    summary:
      "The original migration list lacked a dedicated Braintree narrative. We crafted a fresh, executive-ready story anchored in secure, fast, and seamless payments.",
    bullets: [
      "Hero copy celebrates Braintree’s PayPal heritage and Cloud MLM Software’s AI governance.",
      "SEO and AIO-friendly language fuels analyst briefings, partner decks, and chatbot conversations.",
      "Glossary-ready phrasing helps newcomers grasp tokenisation, dispute automation, and marketplace flows."
    ],
    icon: Sparkle
  },
  {
    title: "Design for hybrid journeys",
    summary:
      "Every section choreographs digital + human touchpoints so field leaders guide enrolments, upsells, and support without friction.",
    bullets: [
      "Responsive layouts highlight mobile wallets, cards, ACH, and alternative payment methods.",
      "Microcopy clarifies what happens inside checkout, settlement, and commission engines.",
      "Visual rhythm keeps CTAs for pricing, demos, and modules in view without feeling repetitive."
    ],
    icon: DeviceMobile
  },
  {
    title: "Governance that inspires confidence",
    summary:
      "Compliance, risk, and finance teams gain automation, evidence, and storytelling tools tuned for cross-border operations.",
    bullets: [
      "AI-generated evidence kits summarise disputes and audits in natural language.",
      "Control towers surface anomalies with contextual recommendations.",
      "Leadership dashboards weave metrics into narratives that secure investment and buy-in."
    ],
    icon: Brain
  }
];

const DELIVERY_STAGES: DeliveryStage[] = [
  {
    label: "Sprint 01",
    focus: "Discovery immersion",
    insight:
      "Audit existing payment stacks, WordPress archives, and stakeholder interviews to define the Braintree transformation brief.",
    icon: ChartLineUp
  },
  {
    label: "Sprint 02",
    focus: "Experience design",
    insight:
      "Prototype checkout, subscription upgrades, and dispute flows using modular UI blocks optimised for light and dark modes.",
    icon: DeviceMobile
  },
  {
    label: "Sprint 03",
    focus: "Integration & security",
    insight:
      "Wire Braintree webhooks to Cloud MLM Software services with observability, sandbox guardrails, and automated regression suites.",
    icon: ShieldCheck
  },
  {
    label: "Sprint 04",
    focus: "Launch & optimisation",
    insight:
      "Activate pilots, monitor telemetry, and iterate with AI guidance that spotlights conversion, approval, and retention lift.",
    icon: CloudLightning
  }
];

const PERSONA_ENABLEMENTS: PersonaEnablement[] = [
  {
    persona: "Revenue leadership",
    mandate: "Champion Braintree as the growth lever that modernises checkout and expands partner ecosystems.",
    aiAssist:
      "AI crafts board updates, competitive benchmarks, and forecast scenarios that highlight subscription and marketplace gains.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & treasury",
    mandate: "Orchestrate settlements, payouts, and reconciliations with absolute visibility.",
    aiAssist:
      "Realtime summaries flag FX swings, capture delays, and reserve requirements—complete with suggested corrective actions.",
    icon: Wallet
  },
  {
    persona: "Risk & compliance",
    mandate: "Maintain policy adherence across every geography without slowing innovation.",
    aiAssist:
      "Evidence packs auto-assemble case files, while anomaly alerts arrive with human-readable context and next steps.",
    icon: ShieldCheck
  },
  {
    persona: "Field enablement",
    mandate: "Arm distributors with scripts, FAQs, and support flows that demystify Braintree’s capabilities.",
    aiAssist:
      "Copilots personalise talking points per persona and highlight cross-sell cues based on transaction behaviour.",
    icon: Handshake
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Braintree Payment Gateway for Cloud MLM Software";
  const description =
    "Combine Braintree’s PayPal-grade payments with Cloud MLM Software’s AI governance to deliver secure, fast, and seamless journeys worldwide.";

  return {
    title,
    description,
    keywords: [
      "Braintree payment gateway",
      "Cloud MLM Software Braintree integration",
      "PayPal payment orchestration",
      "AI payment optimisation",
      "MLM recurring billing"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/braintree", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BraintreePageProps = {
  params: { lang: SupportedLocale };
};

export default function BraintreePage({ params }: BraintreePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-white via-slate-50 to-amber-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(252,211,77,0.18),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(96,165,250,0.18),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Braintree launch architecture
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Engineer PayPal-grade payments for modern MLM operators.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software reimagines Braintree integration for a world of AI copilots, omnichannel buying journeys,
              and global compliance demands. Every section converts technical depth into strategic clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan your rollout
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
                  View integration demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{highlight.heading}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Build a thought-leading Braintree narrative
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            With no legacy content to import, we authored a modern storyline that captures Braintree’s strengths and Cloud
            MLM Software’s differentiators. Use these building blocks across marketing, enablement, and AI experiences.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {NARRATIVE_BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-amber-400/20 to-sky-400/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{block.title}</h3>
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-amber-50 to-sky-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-sky-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-amber-200">
                Checkout excellence
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Braintree unlocks global payment versatility inside Cloud MLM Software.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                Offer cards, wallets, ACH, direct debit, and alternative payments in one refined experience. Adaptive flows
                reduce friction, boost conversions, and protect downstream commission engines.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Omnichannel checkout
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Marketplace payouts
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  AI-assisted risk
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Wallet className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Subscription agility</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Manage recurring billing, add-ons, and mid-cycle changes with reconciliation-ready transparency.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <CloudLightning className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Realtime decisioning</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  AI observers flag declines, chargebacks, and fraud with context that empowers support teams instantly.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Lightning className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Faster dispute cycles</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Automate evidence gathering and response templates so finance teams win back revenue with less effort.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-amber-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-amber-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <Sparkle className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Thought leadership ready</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Turn these storylines into webinars, whitepapers, and partner toolkits that showcase modern payment mastery.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
                >
                  <Link href={pricingHref}>
                    Review pricing
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
            Delivery roadmap built for momentum
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each sprint blends automation, human rituals, and measurable outcomes so Braintree launches on time—and keeps
            improving.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DELIVERY_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.label}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {stage.label}
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
              Explore module catalogue
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
              Discuss integration
              <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Enablement for every Braintree stakeholder
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Braintree thrives when everyone has a clear mandate. Pair human expertise with AI copilots to keep operations
            sharp and future-ready.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PERSONA_ENABLEMENTS.map((persona) => {
            const Icon = persona.icon;
            return (
              <article
                key={persona.persona}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                    {persona.persona}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{persona.mandate}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{persona.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-amber-200/30 to-sky-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-amber-400/20 dark:to-sky-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Position Cloud MLM Software as the master integrator for Braintree.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Repurpose these sections to fuel webinars, AI chat prompts, press releases, and investor updates. Each
              component was built to make storytelling effortless.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Book a strategy call
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
              <h3 className="text-base font-semibold">AIO-ready storytelling</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Provide conversational AI with structured talking points on Braintree’s strengths and Cloud MLM Software’s
                differentiators.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive dashboards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Connect telemetry from launches to revenue and retention KPIs that secure continued investment.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Brain className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Continuous innovation</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Use AI prompts seeded from this page to ideate new experiments, partnerships, and enablement assets.
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
