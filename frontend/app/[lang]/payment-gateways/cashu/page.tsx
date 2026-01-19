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
  CreditCard,
  GlobeHemisphereEast,
  HandCoins,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ValueCluster = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type TimelineStep = {
  phase: string;
  focus: string;
  insight: string;
  icon: IconType;
};

type EnablementCard = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

type RegionalHighlight = {
  country: string;
  narrative: string;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "Security vow",
    value: "Trusted wallet DNA",
    detail:
      "CashU Payment Gateway offers secure, fast, and seamless payment solutions for your business—reinforced with Cloud MLM Software’s AI-driven compliance.",
    icon: ShieldCheck
  },
  {
    label: "Experience velocity",
    value: "Sub-second approvals",
    detail:
      "Adaptive retries and mobile-first design make transactions feel instant across CashU’s digital wallet ecosystem.",
    icon: Lightning
  },
  {
    label: "Regional reach",
    value: "Middle East focus",
    detail:
      "Sudan, Yemen, Lebanon, Iraq, and Jordan anchor our narrative while signalling CashU’s multi-country readiness.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Operational clarity",
    value: "AI-enabled observability",
    detail:
      "Analytics and evidence packs keep finance, risk, and experience teams aligned throughout the payment lifecycle.",
    icon: ChartLineUp
  }
];

const VALUE_CLUSTERS: ValueCluster[] = [
  {
    title: "Archive-to-future storytelling",
    summary:
      "We honoured the archived CashU copy—the secure, fast, seamless promise—and reframed it for executives looking for AI-era certainty.",
    bullets: [
      "Hero language preserves the legacy headline while signalling modern automation.",
      "Section intros speak directly to leadership KPIs: trust, speed, localisation.",
      "AIO-friendly phrasing translates into chat prompts, webinars, and press briefings."
    ],
    icon: Sparkle
  },
  {
    title: "Experiences for digital-first markets",
    summary:
      "Content choreography explains how CashU’s wallet heritage powers storefronts, subscriptions, and marketplace payouts.",
    bullets: [
      "Responsive design emphasises mobile wallets alongside cards and alternative payments.",
      "Microcopy clarifies how CashU interacts with commissions, e-wallets, and tax features.",
      "Calls-to-action stay visible without clutter—ideal for product demos and strategy reviews."
    ],
    icon: CreditCard
  },
  {
    title: "Governance without friction",
    summary:
      "Compliance sections articulate how Cloud MLM Software automates KYC, AML, and regional regulations across emerging markets.",
    bullets: [
      "AI-generated evidence kits prepare regulator-ready documentation instantly.",
      "Alerts highlight anomalies with context so risk teams act decisively.",
      "Narratives help boards and investors understand CashU’s resilience story."
    ],
    icon: ShieldCheck
  }
];

const TIMELINE_STEPS: TimelineStep[] = [
  {
    phase: "Phase 01",
    focus: "Discovery immersion",
    insight:
      "Review WordPress archives, CashU documentation, and stakeholder interviews to define desired outcomes per market.",
    icon: Sparkle
  },
  {
    phase: "Phase 02",
    focus: "Experience blueprint",
    insight:
      "Prototype checkout, wallet top-ups, and subscription renewals with localisation for Arabic interfaces and Apple devices.",
    icon: CreditCard
  },
  {
    phase: "Phase 03",
    focus: "Compliance automation",
    insight:
      "Encode AML, KYC, and sanctions workflows with AI copilots that summarise evidence, escalation paths, and regulator responses.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 04",
    focus: "Growth optimisation",
    insight:
      "Launch pilot markets, monitor telemetry, and iterate with AI insights that elevate approvals, loyalty, and retention.",
    icon: ChartLineUp
  }
];

const ENABLEMENT_CARDS: EnablementCard[] = [
  {
    persona: "Revenue leadership",
    mandate: "Articulate CashU as the bridge to digital wallet adoption across the Middle East.",
    aiAssist:
      "AI generates board-ready updates with competitive benchmarks, conversion lift, and partner narratives tied to CashU momentum.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & treasury",
    mandate: "Maintain clarity on settlements, cash flow, and FX exposure in CashU-heavy regions.",
    aiAssist:
      "Summaries flag reserve requirements, wallet reconciliation gaps, and dispute risks with recommended actions.",
    icon: HandCoins
  },
  {
    persona: "Risk & compliance",
    mandate: "Keep fast-moving regulations across Sudan, Yemen, Lebanon, Iraq, and Jordan under control.",
    aiAssist:
      "Evidence packs and policy monitors highlight changes, create translation-friendly summaries, and surface next steps.",
    icon: ShieldCheck
  },
  {
    persona: "Field enablement",
    mandate: "Empower distributors to champion CashU experiences confidently.",
    aiAssist:
      "Copilots tailor scripts, FAQs, and micro-learnings per country—complete with Arabic-ready messaging and tone guidance.",
    icon: ChatsCircle
  },
  {
    persona: "Customer experience",
    mandate: "Resolve wallet inquiries quickly while reinforcing trust in CashU security.",
    aiAssist:
      "Contextual transcripts combine transaction data, sentiment signals, and next-best actions for support teams.",
    icon: UsersThree
  }
];

const REGIONAL_HIGHLIGHTS: RegionalHighlight[] = [
  {
    country: "Sudan",
    narrative:
      "Position CashU as the reliable wallet for distributors managing limited card availability—backed by AI-assisted risk checks."
  },
  {
    country: "Yemen",
    narrative:
      "Deliver secure, offline-ready workflows that respect local infrastructure realities while staying audit-friendly."
  },
  {
    country: "Lebanon",
    narrative:
      "Use CashU to stabilise payment acceptance amidst fluctuating currencies with transparent reconciliation dashboards."
  },
  {
    country: "Iraq",
    narrative:
      "Equip field teams with multilingual scripts and KYC guidance anchored in CashU’s compliance posture."
  },
  {
    country: "Jordan",
    narrative:
      "Highlight digital wallet convenience for urban markets—paired with proactive support and campaign-ready storytelling."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "CashU Payment Gateway for Cloud MLM Software";
  const description =
    "Reimagine CashU’s secure, fast, and seamless wallet experience inside Cloud MLM Software with AI governance and Middle East localisation.";

  return {
    title,
    description,
    keywords: [
      "CashU payment gateway",
      "Cloud MLM Software CashU integration",
      "Middle East digital wallet",
      "AI payment compliance",
      "MLM payment gateway modernisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/cashu", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CashUPageProps = {
  params: { lang: SupportedLocale };
};

export default function CashUPage({ params }: CashUPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-white via-amber-50 to-rose-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_82%_15%,rgba(244,114,182,0.16),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(56,189,248,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              CashU integration renaissance
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Wallet-native payments with enterprise polish for the Middle East.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software elevates the CashU experience with AI observability, cross-market localisation, and
              responsive design. Every section speaks to leaders who need reliability, speed, and trust at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Discuss your rollout
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.label}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {stat.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground dark:text-white">{stat.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stat.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Modern storytelling rooted in CashU’s legacy
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            These clusters turn the archived promise into a persuasive story for executives, product teams, and the field.
            Reuse them across marketing assets, AIO prompts, and investor updates.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {VALUE_CLUSTERS.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <article
                key={cluster.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-rose-400/20 to-amber-300/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{cluster.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{cluster.summary}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {cluster.bullets.map((bullet) => (
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-rose-50 to-amber-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-amber-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(244,114,182,0.14),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(56,189,248,0.16),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-rose-200">
              Regional highlights
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
              Spotlight the Middle East markets that defined the original CashU narrative.
            </h2>
            <p className="text-base text-muted-foreground dark:text-white/80">
              Sudan, Yemen, Lebanon, Iraq, and Jordan were front-and-centre in the archive. We curated insights for each to
              inform go-to-market messaging, enablement, and localisation plans.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGIONAL_HIGHLIGHTS.map((highlight) => (
              <article
                key={highlight.country}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">{highlight.country}</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.narrative}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            CashU launch blueprint
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Guide your transformation with deliberate phases. Each step blends automation, localisation, and human rituals
            to keep momentum strong.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE_STEPS.map((step) => {
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
            Enablement streams to keep CashU thriving
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Every stakeholder gains clarity, automation, and AI support. Use these cards to script onboarding, playbooks,
            and community webinars.
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
              Make CashU the backbone of your regional influence.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Repurpose these sections for webinars, AI chat flows, PR stories, and partner enablement. The page was
              crafted to make Cloud MLM Software the go-to advisor on digital wallets.
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
                Equip chatbots with structured stories on CashU’s security, speed, and localisation strengths.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive scorecards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Convert telemetry into investor-ready dashboards that prove CashU’s business impact.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <UsersThree className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Arm field leaders with social-friendly snippets that showcase CashU innovations across each market.
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
