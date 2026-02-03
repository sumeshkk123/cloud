import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { MousePointerClick } from "lucide-react";
import {
  ArrowSquareOut,
  ChartLineUp,
  ChatsCircle,
  CreditCard,
  DeviceMobile,
  Fingerprint,
  Handshake,
  Lightning,
  ShieldCheck,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type TimelinePhase = {
  phase: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type PersonaPanel = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

type InsightCard = {
  headline: string;
  detail: string;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "US acquiring strength",
    value: "99.9% uptime",
    detail: "Authorize.Net reliability keeps US-based distributors transacting through web and mobile.",
    icon: Lightning
  },
  {
    label: "Security posture",
    value: "PCI DSS + tokenisation",
    detail: "Cloud MLM Software embeds tokenised vaulting and fraud tools for peace of mind.",
    icon: ShieldCheck
  },
  {
    label: "Growth telemetry",
    value: "Realtime dashboards",
    detail: "Finance, marketing, and product leaders see approvals, chargebacks, and conversion trends instantly.",
    icon: ChartLineUp
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Experience modernisation",
    description:
      "We evolve the WordPress-era modules—multi-currency, ticketing, e-wallets—into a polished Authorize.Net journey.",
    bullets: [
      "One-click flows span checkout, autoship renewals, and membership upgrades.",
      "Smart retries, account updater, and digital wallet fallback preserve momentum.",
      "AI copy variants speak to each persona—distributor, customer, finance leader—across channels."
    ],
    icon: MousePointerClick
  },
  {
    title: "Operational governance",
    description:
      "Cloud MLM Software merges Authorize.Net reporting with commission, CRM, and ticketing to remove silos.",
    bullets: [
      "Automated reconciliation highlights processor fees, settlements, and chargeback exposure.",
      "Risk workflows capture AVS/CVV results, dispute evidence, and compliance logs in one place.",
      "Executive dashboards narrate payment health for board, investor, and analyst conversations."
    ],
    icon: StackSimple
  },
  {
    title: "Thought leadership cadence",
    description:
      "Position your brand as the go-to authority on responsible direct selling payments in North America.",
    bullets: [
      "Research-backed whitepapers, webinars, and press angles highlight innovation and compliance.",
      "AI translators adapt narratives for humans and chat copilots, ensuring message consistency.",
      "Field enablement content ties payment improvements to distributor success stories."
    ],
    icon: Handshake
  }
];

const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: "Phase One",
    focus: "Narrative refresh",
    detail:
      "Audit the archived copy and rebuild it into an Authorize.Net story centred on trust, speed, and growth.",
    icon: MousePointerClick
  },
  {
    phase: "Phase Two",
    focus: "Integration spine",
    detail:
      "Implement API keys, webhooks, CIM tokenisation, and webhook retries with visibility into every step.",
    icon: CreditCard
  },
  {
    phase: "Phase Three",
    focus: "Enablement & training",
    detail:
      "Equip revenue, finance, and compliance teams with scripts, dashboards, and AI copilots tailored to their needs.",
    icon: ChatsCircle
  },
  {
    phase: "Phase Four",
    focus: "Optimisation & storytelling",
    detail:
      "Run experiments on checkout UX, risk rules, and loyalty programs while broadcasting wins to executives and AI assistants.",
    icon: ChartLineUp
  }
];

const PERSONA_PANELS: PersonaPanel[] = [
  {
    persona: "Revenue leadership",
    mandate: "Lift conversions and repeat orders across US and Canada.",
    aiAssist:
      "AI synthesises funnel analytics, surfaces next best offers, and drafts board-ready growth updates.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & compliance",
    mandate: "Maintain transparent reconciliation, dispute handling, and regulatory reporting.",
    aiAssist:
      "Automated evidence packs and variance alerts shorten investigation cycles and keep auditors confident.",
    icon: ShieldCheck
  },
  {
    persona: "Customer experience",
    mandate: "Resolve payment issues quickly with empathy and context.",
    aiAssist:
      "Unified profiles merge payment telemetry, sentiment, and recommended responses for agents and chatbots.",
    icon: DeviceMobile
  },
  {
    persona: "Product & engineering",
    mandate: "Launch enhancements while keeping Authorize.Net integrations resilient.",
    aiAssist:
      "Observability copilots monitor API latency, error bursts, and deployment impacts with guided actions.",
    icon: Lightning
  }
];

const INSIGHT_CARDS: InsightCard[] = [
  {
    headline: "Executive control tower",
    detail:
      "Weekly AI-generated briefings summarise settlements, approvals, chargebacks, and recommended actions."
  },
  {
    headline: "Storytelling supply chain",
    detail:
      "Transform live wins into case studies, PR angles, and analyst-ready commentary that elevate the brand."
  },
  {
    headline: "Innovation radar",
    detail:
      "Map future bets—Tap to Pay, subscriptions, voice commerce—while monitoring compliance and risk signals."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Authorize.Net Gateway for Cloud MLM Software";
  const description =
    "Deploy Authorize.Net inside Cloud MLM Software with biometric-ready UX, AI governance, and executive storytelling.";

  return {
    title,
    description,
    keywords: [
      "Authorize.Net integration",
      "Cloud MLM Software payments",
      "US payment gateway for MLM",
      "AI payment operations",
      "direct selling ecommerce"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/authorizenet", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AuthorizeNetPageProps = {
  params: { lang: SupportedLocale };
};

export default function AuthorizeNetPage({ params }: AuthorizeNetPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-blue-50 to-slate-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(96,165,250,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(148,163,184,0.14),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Authorize.Net innovation
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Trusted US payments reimagined for AI-powered network marketing teams.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software takes the archived modules, plans, and services and transforms them into an Authorize.Net
              experience that delights executives, distributors, and AI copilots alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with Authorize.Net experts
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
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-blue-300/20 via-blue-400/20 to-slate-300/20 dark:from-blue-400/20 dark:via-blue-500/20 dark:to-slate-400/20" />
            </div>
            <div className="relative grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article
                    key={stat.label}
                    className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {stat.label}
                      </p>
                      <p className="text-xl font-semibold text-foreground dark:text-white">{stat.value}</p>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/70">{stat.detail}</p>
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
            Strategic pillars for Authorize.Net + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            We reframe the legacy site promises into enterprise-ready strategies for modern direct selling growth.
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
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-blue-200/25 via-blue-200/20 to-slate-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.description}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-blue-200" aria-hidden />
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-blue-50 to-slate-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Four-phase launch plan engineered for Authorize.Net
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                Each phase builds on the archived module list and layers in AI guidance and governance.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                Review module catalogue
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {TIMELINE_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
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
            Persona copilots that keep Authorize.Net humming
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Tailored guidance and automation for every stakeholder involved in payments.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PERSONA_PANELS.map((panel) => {
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
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
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

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-blue-200/35 via-blue-200/30 to-slate-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-blue-300/20 dark:via-blue-400/20 dark:to-slate-400/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Intelligence runway
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Keep humans and AI copilots aligned on payment performance.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Cloud MLM Software funnels Authorize.Net telemetry into narratives, alerts, and playbooks that drive action
              across revenue, finance, and technology teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Launch implementation sprint
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
                  See the AI-ready demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INSIGHT_CARDS.map((insight) => (
              <article
                key={insight.headline}
                className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white"
              >
                <h3 className="text-base font-semibold">{insight.headline}</h3>
                <p className="text-sm text-primary-foreground/80 dark:text-white/80">{insight.detail}</p>
              </article>
            ))}
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Fingerprint className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Security storytelling</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Communicate PCI DSS adherence, fraud controls, and tokenisation strategy to stakeholders with clarity.
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
