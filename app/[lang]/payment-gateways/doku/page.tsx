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

type HeroHighlight = {
  heading: string;
  detail: string;
  icon: IconType;
};

type StoryModule = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStep = {
  phase: string;
  focus: string;
  narrative: string;
  icon: IconType;
};

type EnablementCard = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    heading: "Secure by design",
    detail:
      "Doku Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM Software extends that trust with AI-led monitoring and policy automation.",
    icon: ShieldCheck
  },
  {
    heading: "Experience intelligence",
    detail:
      "Telemetry surfaces approvals, retries, and settlement cadence so product, finance, and field teams move in sync.",
    icon: ChartLineUp
  },
  {
    heading: "Indonesia spotlight",
    detail:
      "Rooted in the August 28th, 2024 narrative, we highlight Indonesia&apos;s leadership while creating pathways to global expansion.",
    icon: GlobeHemisphereEast
  }
];

const STORY_MODULES: StoryModule[] = [
  {
    title: "Archive-aware storytelling",
    summary:
      "We honoured the secure-fast-seamless language from the WordPress archive and expanded it for executives who expect precision.",
    bullets: [
      "Hero copy keeps the original promise while introducing AI governance cues.",
      "SEO/AIO-ready phrasing fuels webinars, analyst briefings, and conversational assistants.",
      "CTA arrangement balances exploration of demos, modules, and pricing."
    ],
    icon: Sparkle
  },
  {
    title: "Experience choreography",
    summary:
      "Layouts and microcopy guide customers, distributors, and finance teams through Doku workflows without friction.",
    bullets: [
      "Responsive design showcases card, wallet, and local Indonesian payment options side-by-side.",
      "Copy explains how transactions trigger commissions, fulfilment, and CRM updates.",
      "Dark-mode friendly styling supports leadership reviews and field enablement sessions."
    ],
    icon: DeviceMobile
  },
  {
    title: "Governance in motion",
    summary:
      "Compliance sections describe automation, AI evidence packs, and policy trackers that keep Doku launches audit-ready.",
    bullets: [
      "Evidence kits assemble regulator-friendly summaries in minutes.",
      "Alerts provide context-rich recommendations for risk teams.",
      "Dashboards blend telemetry with storytelling so boards see resilience clearly."
    ],
    icon: Brain
  }
];

const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "Step 01",
    focus: "Discovery & alignment",
    narrative:
      "Compile WordPress archives, Doku API specs, and stakeholder objectives to define measurable outcomes.",
    icon: Sparkle
  },
  {
    phase: "Step 02",
    focus: "Experience prototyping",
    narrative:
      "Design enrolment, checkout, and support flows with Indonesian localisation, multi-language support, and accessibility baked in.",
    icon: StackSimple
  },
  {
    phase: "Step 03",
    focus: "Integration & compliance",
    narrative:
      "Connect Doku webhooks with Cloud MLM Software services while automating KYC, AML, and audit routines.",
    icon: ShieldCheck
  },
  {
    phase: "Step 04",
    focus: "Optimisation & expansion",
    narrative:
      "Launch pilots, monitor telemetry, and iterate with AI insights highlighting conversion, retention, and revenue gains.",
    icon: Lightning
  }
];

const ENABLEMENT_CARDS: EnablementCard[] = [
  {
    persona: "Revenue leadership",
    mandate: "Champion Doku as the foundation for Southeast Asian growth.",
    aiAssist:
      "AI prepares investor updates, partner narratives, and go-to-market plays anchored in Doku metrics.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & treasury",
    mandate: "Maintain visibility on settlements, FX exposure, and reconciliation.",
    aiAssist:
      "Summaries flag reserve requirements, fee dynamics, and anomaly alerts with actionable next steps.",
    icon: ShieldCheck
  },
  {
    persona: "Risk & compliance",
    mandate: "Stay ahead of Indonesian regulations and cross-border policy shifts.",
    aiAssist:
      "Evidence kits, policy trackers, and alerting copilots turn governance into proactive routines.",
    icon: Brain
  },
  {
    persona: "Field enablement",
    mandate: "Equip distributors with culturally relevant Doku storytelling.",
    aiAssist:
      "Copilots tailor scripts, FAQs, and motion graphics prompts in Bahasa Indonesia and English.",
    icon: ChatsCircle
  },
  {
    persona: "Customer experience",
    mandate: "Resolve payment inquiries quickly while reinforcing trust in Doku.",
    aiAssist:
      "Contextual transcripts combine transaction data, sentiment cues, and next-best actions for agents.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Doku Payment Gateway for Cloud MLM Software";
  const description =
    "Translate Doku’s secure, fast, and seamless payment promise into an AI-ready Cloud MLM Software experience with Indonesia-first localisation.";

  return {
    title,
    description,
    keywords: [
      "Doku payment gateway",
      "Cloud MLM Software Doku integration",
      "Indonesia digital payments",
      "AI payment operations",
      "MLM payment gateway modernisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/doku", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type DokuPageProps = {
  params: { lang: SupportedLocale };
};

export default function DokuPage({ params }: DokuPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-white via-rose-50 to-amber-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_55%),radial-gradient(circle_at_82%_15%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(16,185,129,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Doku integration renaissance
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Secure, fast, seamless Doku journeys designed for Indonesia and beyond.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software transforms the WordPress-era message into an AI-ready narrative that empowers executives,
              finance teams, and the field. Every section balances storytelling with actionable detail.
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
            {HERO_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{item.heading}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Narrative, experience, and governance elevated together
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            These modules reinterpret the archived message for a modern audience. Use them to inform marketing, AIO prompts,
            and investor storytelling.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STORY_MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-amber-400/20 to-rose-400/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{module.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{module.summary}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {module.bullets.map((bullet) => (
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-amber-50 to-rose-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-rose-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(249,115,22,0.16),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(244,114,182,0.16),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-amber-200">
                Indonesia spotlight
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                August 28th, 2024 marks the start of Indonesia’s Checkout renaissance.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                We preserved that milestone and paired it with localisation, compliance, and expansion guidance so the Doku
                story feels both familiar and future-facing.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Indonesia-first localisation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Mobile wallet excellence
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Expansion playbooks
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <DeviceMobile className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Mobile-first storytelling</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Highlight Click&apos;s bank transfer roots alongside wallets and cards in a frictionless experience.
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
                  Provide leadership with approval, decline, and retention trends to secure ongoing investment.
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
                  Leverage the August 28th, 2024 date across PR, investor decks, and partner enablement assets.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-amber-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-amber-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <StackSimple className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Expansion toolkit</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Convert regional successes into reproducible templates for neighbouring markets with guidance on governance
                  and enablement.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
                >
                  <Link href={buildLocalizedPath("/mlm-software-availability-across-countries", locale)}>
                    View country map
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
            Doku launch blueprint
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Adopt Doku with intentional steps that blend automation, human rituals, and AI guidance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {JOURNEY_STEPS.map((step) => {
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
            Enablement streams that sustain momentum
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Pair human expertise with AI copilots so every stakeholder thrives with Doku.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
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

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-rose-200/30 to-amber-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-rose-400/20 dark:to-amber-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Turn Doku excellence into regional influence.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Repurpose this page across webinars, analyst briefings, AI prompt libraries, and partner enablement. Every
              component keeps Cloud MLM Software positioned as the trusted advisor on Doku integration.
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
                Provide chatbots and content assistants with structured stories on Doku’s secure, fast, seamless promise.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive scorecards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Translate telemetry into board visuals that secure ongoing investment in Doku innovations.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <UsersThree className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Equip field leaders with snippets, data points, and CTAs that highlight Doku differentiation.
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
