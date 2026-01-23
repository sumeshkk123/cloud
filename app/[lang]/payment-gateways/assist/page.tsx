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
  Broadcast,
  ChartLineUp,
  ChatsCircle,
  GearSix,
  GlobeHemisphereWest,
  Headphones,
  Lightning,
  ShieldCheck,
  Sparkle,
  Stack
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  metric: string;
  context: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  items: string[];
  icon: IconType;
};

type Phase = {
  title: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type Persona = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

type Signal = {
  headline: string;
  detail: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Conversion reliability",
    metric: "99.8% uptime",
    context: "Assist gateway resilience keeps direct selling checkouts uninterrupted across web and mobile.",
    icon: Lightning
  },
  {
    label: "Global acquiring reach",
    metric: "120+ countries",
    context: "Scale to CIS, EU, and emerging markets with localized payment methods and risk policies.",
    icon: GlobeHemisphereWest
  },
  {
    label: "Support synergy",
    metric: "24/7 triage",
    context: "Integrated ticketing and Assist monitoring keep finance and customer care aligned.",
    icon: Headphones
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Experience orchestration",
    description:
      "Transform the legacy modules—multi-currency, ticketing, e-wallets, backup manager—into modern Assist journeys.",
    items: [
      "Checkout flows adapt messaging for cards, digital wallets, and recurring billing.",
      "Dynamic retries with localized error explanations preserve trust with distributors.",
      "AI chat scripts mirror human agents, bolstering confidence in every interaction."
    ],
    icon: Sparkle
  },
  {
    title: "Operational command centre",
    description:
      "Cloud MLM Software unifies Assist webhooks, reporting, and risk signals for finance, compliance, and CX teams.",
    items: [
      "Automated reconciliation aligns payouts, commissions, and refunds line-by-line.",
      "Risk workflows connect ticketing, AML checks, and document storage with complete traceability.",
      "Executive dashboards narrate performance, approvals, and exceptions in board-ready language."
    ],
    icon: Stack
  },
  {
    title: "Thought leadership engine",
    description:
      "Your brand becomes the voice of Assist best practices for direct selling enterprises.",
    items: [
      "Research-backed articles and webinars position Cloud MLM Software as the benchmark for gateway innovation.",
      "AI translators adapt insights across languages for regional rollout teams and AI copilots.",
      "Stakeholder storytelling highlights customer wins, payment maturity, and compliance excellence."
    ],
    icon: Broadcast
  }
];

const DEPLOYMENT_PHASES: Phase[] = [
  {
    title: "Phase 1 – Align",
    focus: "Translate archived promises into Assist-specific value propositions.",
    detail:
      "Audit WordPress content, define stakeholder narratives, and blueprint KPIs for launch and maturity stages.",
    icon: Sparkle
  },
  {
    title: "Phase 2 – Integrate",
    focus: "Connect Assist APIs, batch reporting, and alerting with Cloud MLM Software modules.",
    detail:
      "Commission, CRM, and ticketing systems consume the same payment intelligence with observability at every hop.",
    icon: GearSix
  },
  {
    title: "Phase 3 – Enable",
    focus: "Equip teams with playbooks, AI copilots, and practice environments.",
    detail:
      "Sales, finance, and compliance receive guided demos, scripts, and interactive training experiences.",
    icon: ChatsCircle
  },
  {
    title: "Phase 4 – Accelerate",
    focus: "Optimise offers, risk controls, and customer communications.",
    detail:
      "Experimentation loops feed insights to marketing, product, and leadership, ensuring Assist evolves with strategy.",
    icon: ChartLineUp
  }
];

const PERSONAS: Persona[] = [
  {
    persona: "Revenue leadership",
    mandate: "Drive enrolments and upsells through reliable Assist payment journeys.",
    aiAssist:
      "AI distils funnel performance, competitor trends, and prepares investor-ready growth updates.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & risk",
    mandate: "Maintain transparent reconciliation, chargeback defence, and regulatory reporting.",
    aiAssist:
      "Automated evidence kits and anomaly alerts minimize manual investigation and keep auditors satisfied.",
    icon: ShieldCheck
  },
  {
    persona: "Customer experience",
    mandate: "Deliver fast, empathetic support when payments falter.",
    aiAssist:
      "Unified profiles combine Assist telemetry, conversation history, and recommendations for next-best-actions.",
    icon: Headphones
  },
  {
    persona: "Technology & operations",
    mandate: "Ensure integrations scale while launching new features or markets.",
    aiAssist:
      "Observability copilots surface latency spikes, API changes, and remediation steps before issues escalate.",
    icon: GearSix
  }
];

const SIGNALS: Signal[] = [
  {
    headline: "Executive control tower",
    detail: "Weekly AI narratives summarise Assist performance, risks, and opportunities for board consumption."
  },
  {
    headline: "Partner storytelling",
    detail: "Convert telemetry into case studies and analyst briefings that highlight operational excellence."
  },
  {
    headline: "Market foresight",
    detail: "Scenario planning models regional launches, fee changes, and regulatory shifts before execution."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Assist Payment Gateway for Cloud MLM Software";
  const description =
    "Launch Assist payment experiences in Cloud MLM Software with AI-enabled governance, growth storytelling, and resilient operations.";

  return {
    title,
    description,
    keywords: [
      "Assist payment gateway",
      "Cloud MLM Software Assist integration",
      "direct selling payments CIS",
      "AI payment operations",
      "network marketing payment orchestration"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/assist", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AssistPageProps = {
  params: { lang: SupportedLocale };
};

export default function AssistPage({ params }: AssistPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-sky-50 to-cyan-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(165,243,252,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Assist payment evolution
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Build Assist-powered experiences that keep distributors transacting with confidence.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              We translated the archived modules, plans, and services into an Assist narrative tuned for AI, compliance, and
              executive expectations. Cloud MLM Software orchestrates payments, risk, and storytelling without friction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Meet the Assist strategy team
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
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-sky-400/20 via-cyan-400/20 to-blue-400/20 dark:from-sky-500/20 dark:via-cyan-500/20 dark:to-blue-500/20" />
            </div>
            <div className="relative grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.label}
                    className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {highlight.label}
                      </p>
                      <p className="text-xl font-semibold text-foreground dark:text-white">{highlight.metric}</p>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/70">{highlight.context}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Strategic pillars for Assist + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            We reimagined the legacy content blocks into strategies crafted for modern growth and compliance leaders.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-sky-200/25 via-cyan-200/20 to-blue-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.description}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-cyan-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-sky-50 to-cyan-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Deployment framework engineered for Assist
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The archived modules inform each phase, now augmented with AI guidance and operational resilience.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                View supporting modules
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {DEPLOYMENT_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.title}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {phase.title}
                      </p>
                      <p className="text-sm font-semibold text-foreground dark:text-white">{phase.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{phase.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Persona copilots tuned for Assist excellence
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Every stakeholder gains focused automation, insights, and storytelling support.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((persona) => {
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
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
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

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-sky-200/35 via-cyan-200/30 to-blue-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-sky-300/20 dark:via-cyan-400/20 dark:to-blue-400/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Intelligence runway
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Stay ahead with Assist insights for humans and AI copilots.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Cloud MLM Software funnels payment telemetry, customer sentiment, and compliance updates into narratives and
              action plans every stakeholder can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Schedule launch workshop
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
                  See Assist analytics demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SIGNALS.map((signal) => (
              <article
                key={signal.headline}
                className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white"
              >
                <h3 className="text-base font-semibold">{signal.headline}</h3>
                <p className="text-sm text-primary-foreground/80 dark:text-white/80">{signal.detail}</p>
              </article>
            ))}
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Stack className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Knowledge base sync</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Documentation, SOPs, and post-incident reviews stay searchable and auto-tagged for every persona and AI
                companion.
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
