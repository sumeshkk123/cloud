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
  CalendarCheck,
  ChartLineUp,
  ChatsTeardrop,
  ClipboardText,
  ClockCountdown,
  CreditCard,
  DeviceTablet,
  HandCoins,
  Pulse,
  Sparkle,
  Target,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type ExperienceArc = {
  title: string;
  narrative: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStage = {
  stage: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type PersonaPlay = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

type Insight = {
  headline: string;
  detail: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Frictionless approvals",
    metric: "87% avg. approval rate",
    description: "Afterpay signals feed Cloud MLM Software so BNPL decisions stay brand-aligned.",
    icon: Pulse
  },
  {
    label: "Lifecycle coverage",
    metric: "Pre-sale → retention",
    description: "From product launch to renewal campaigns, every touchpoint understands instalment journeys.",
    icon: CalendarCheck
  },
  {
    label: "AI-guided compliance",
    metric: "Proactive audits",
    description: "Automated evidence trails keep regulators and finance leaders confident in BNPL growth.",
    icon: ClipboardText
  }
];

const EXPERIENCE_ARCS: ExperienceArc[] = [
  {
    title: "Intent-aware discovery",
    narrative:
      "We evolve the archive&apos;s hero copy—features, demos, modules—into a dynamic pathway that educates prospects on Afterpay&apos;s value.",
    bullets: [
      "Personalised landing segments align kit bundles, pricing, and instalment options.",
      "Interactive demos showcase distributor and customer views for Afterpay journeys.",
      "AI surfaces content variations tuned for human sellers and chatbot experiences."
    ],
    icon: Sparkle
  },
  {
    title: "Checkout choreography",
    narrative:
      "The original WordPress modules (multi-currency, ticketing, e-wallets) now operate as a single choreography for BNPL success.",
    bullets: [
      "Instalment availability, fees, and reminders localised by market and language.",
      "Real-time notifications connect ticketing, CRM, and commission adjustments.",
      "Fallback routing protects revenue when Afterpay is unavailable in select regions."
    ],
    icon: CreditCard
  },
  {
    title: "Growth storytelling",
    narrative:
      "Cloud MLM Software positions your brand as the thought leader in responsible BNPL for direct selling.",
    bullets: [
      "Executive dashboards blend adoption, repeat usage, and sentiment metrics.",
      "Marketing pods get AI-generated playbooks for high-value campaign launches.",
      "Analyst-ready reports demonstrate governance, impact, and future roadmap."
    ],
    icon: ChartLineUp
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: "Discover",
    focus: "Reframe the WordPress-era narrative into Afterpay-ready messaging.",
    detail:
      "Audit legacy content and map it to funnel stages—awareness, consideration, commitment—so each persona understands why Afterpay matters.",
    icon: Sparkle
  },
  {
    stage: "Integrate",
    focus: "Wire Cloud MLM Software and Afterpay through a resilient API fabric.",
    detail:
      "Hook commissions, ticketing, and analytics into webhook streams with intelligent retries, observability, and alerting.",
    icon: DeviceTablet
  },
  {
    stage: "Enable",
    focus: "Equip teams with training, scripts, and AI copilots.",
    detail:
      "Sales, finance, and compliance receive contextual playbooks while conversational AI keeps distributors ready for objections.",
    icon: UsersThree
  },
  {
    stage: "Optimise",
    focus: "Run experimentation and scale responsibly.",
    detail:
      "Continuously test offers, messaging, and incentives as AIO insights flag opportunities or friction before they escalate.",
    icon: Target
  }
];

const PERSONA_PLAYS: PersonaPlay[] = [
  {
    persona: "Revenue leadership",
    mandate: "Track BNPL adoption and monetisation across regions and product lines.",
    aiAssist:
      "AI synthesises trends, highlights churn risks, and drafts board updates in the brand&apos;s tone of voice.",
    icon: ChartLineUp
  },
  {
    persona: "Finance operations",
    mandate: "Orchestrate settlements, refunds, and dispute resolutions without manual drudgery.",
    aiAssist: "Automated reconciliations and evidence packs cut cycle time on every investigation.",
    icon: ClipboardText
  },
  {
    persona: "Field enablement",
    mandate: "Coach distributors on positioning Afterpay as a confidence-building option.",
    aiAssist:
      "Conversational snippets, objection handlers, and goal trackers appear inside CRM dashboards and mobile apps.",
    icon: ChatsTeardrop
  },
  {
    persona: "Customer experience",
    mandate: "Deliver support that recognises payment history, preferences, and regulatory nuances.",
    aiAssist: "Unified profiles surface sentiment, outstanding instalments, and recommended next-best actions.",
    icon: HandCoins
  }
];

const INSIGHTS: Insight[] = [
  {
    headline: "AI concierge for launch rooms",
    detail: "Keeps every stakeholder aligned by translating milestones into plain-language updates with owners."
  },
  {
    headline: "Human + machine storytelling",
    detail: "Turns data from commissions, ticketing, and campaigns into narratives ready for PR, analysts, and sales."
  },
  {
    headline: "Sustainable growth guardrails",
    detail: "Monitors responsible lending metrics so Afterpay stays a trust accelerator for your brand."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Afterpay Payment Gateway for Cloud MLM Software";
  const description =
    "Launch a responsible Afterpay experience inside Cloud MLM Software with AI-guided enablement, compliance, and growth storytelling.";

  return {
    title,
    description,
    keywords: [
      "Afterpay payment gateway",
      "BNPL for MLM",
      "Cloud MLM Software Afterpay integration",
      "AI customer financing",
      "direct selling payment experience"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/afterpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AfterpayPageProps = {
  params: { lang: SupportedLocale };
};

export default function AfterpayPage({ params }: AfterpayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-emerald-50 to-teal-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Afterpay growth catalyst
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Deliver Afterpay journeys that convert, retain, and inspire trust.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              We translated the archived modules, plans, and services into a modern BNPL experience. Cloud MLM Software
              brings instalments, compliance, and AI coaching into one orchestrated command centre.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Meet the Afterpay team
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
                  Tour the BNPL demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-emerald-400/20 via-teal-300/20 to-sky-400/20 dark:from-emerald-300/20 dark:via-teal-400/20 dark:to-sky-500/20" />
            </div>
            <div className="relative flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.label} className="flex items-center gap-5 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {highlight.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground dark:text-white">{highlight.metric}</p>
                      <p className="text-xs text-muted-foreground dark:text-white/70">{highlight.description}</p>
                    </div>
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
            Experience arcs for Afterpay + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each arc reshapes historic site content into contemporary value narratives for product, marketing, and finance
            leaders.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {EXPERIENCE_ARCS.map((arc) => {
            const Icon = arc.icon;
            return (
              <article
                key={arc.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-emerald-200/20 via-teal-200/20 to-sky-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{arc.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{arc.narrative}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {arc.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-emerald-200" aria-hidden />
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-emerald-50 to-sky-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Journey blueprint for an Afterpay-powered brand
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The modules you relied on—multi-currency, ticketing, e-wallets, backup manager—now mesh with BNPL
                orchestration and AI guardianship.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                Explore module library
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {JOURNEY_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.stage}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {stage.stage}
                      </p>
                      <p className="text-sm font-semibold text-foreground dark:text-white">{stage.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stage.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Persona playbooks aligned to Afterpay success
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Your teams gain clarity, AI augmentation, and measurable impact from day one.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PERSONA_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.persona}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {play.persona}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{play.mandate}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{play.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-emerald-200/40 via-teal-200/30 to-sky-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-emerald-300/20 dark:via-teal-400/20 dark:to-sky-500/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Intelligence signals
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              An AI-native layer keeps Afterpay momentum and governance in sync.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Cloud MLM Software choreographs alerts, insights, and next steps for humans and AI companions alike—no more
              guessing where BNPL performance stands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Book implementation workshop
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
                  Experience live demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INSIGHTS.map((insight) => (
              <article
                key={insight.headline}
                className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white"
              >
                <h3 className="text-base font-semibold">{insight.headline}</h3>
                <p className="text-sm text-primary-foreground/80 dark:text-white/80">{insight.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
