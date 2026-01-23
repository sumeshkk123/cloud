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
  BoxArrowDown,
  ChartLineUp,
  ChatsCircle,
  Cpu,
  Lightning,
  Package,
  ShoppingCartSimple,
  ShieldCheck,
  Sparkle,
  StarFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPoint = {
  label: string;
  stat: string;
  detail: string;
  icon: IconType;
};

type Narrative = {
  title: string;
  context: string;
  enhancements: string[];
  icon: IconType;
};

type Phase = {
  name: string;
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

type Signal = {
  headline: string;
  detail: string;
};

const HERO_POINTS: HeroPoint[] = [
  {
    label: "Prime-grade trust",
    stat: "68% buyer preference",
    detail: "Leverage Amazon Pay familiarity to lift conversion across enrolment and renewals.",
    icon: StarFour
  },
  {
    label: "Voice + device ready",
    stat: "Omnichannel",
    detail: "Alexa skills, mobile app flows, and web checkout share one unified orchestration.",
    icon: Sparkle
  },
  {
    label: "Operational clarity",
    stat: "Realtime dashboards",
    detail: "Treasury, support, and marketing see payment telemetry within seconds.",
    icon: Cpu
  }
];

const NARRATIVES: Narrative[] = [
  {
    title: "Experience uplift",
    context:
      "We evolve the legacy modules section—multi-currency, ticketing, e-wallets—into a premium Amazon Pay journey.",
    enhancements: [
      "Dynamic checkout surfaces Prime benefits, instalments, and loyalty boosts per persona.",
      "Smart retries keep momentum even when cards expire or authentication fails.",
      "Conversational scripts empower human agents and AI chat to handle objections gracefully."
    ],
    icon: ShoppingCartSimple
  },
  {
    title: "Operational command",
    context:
      "Cloud MLM Software stitches Amazon Pay events into commission, CRM, and analytics ecosystems.",
    enhancements: [
      "Automated reconciliation reveals fees, chargebacks, and refunds without manual effort.",
      "Risk and compliance receive AI-generated narratives for audits or executive briefings.",
      "Supply-chain signals—inventory, shipping, digital fulfilment—sync with payment status."
    ],
    icon: Package
  },
  {
    title: "Growth storytelling",
    context:
      "Thought leadership content positions your brand as the go-to authority on Amazon Pay for direct selling.",
    enhancements: [
      "Marketing pods receive AI outlines for campaigns, webinars, and PR hits.",
      "Sales teams reference success stories aligned to enterprise procurement goals.",
      "Board dashboards frame ROI, customer sentiment, and innovation velocity."
    ],
    icon: ChartLineUp
  }
];

const PHASES: Phase[] = [
  {
    name: "Align",
    focus: "Translate the archived site copy into Amazon Pay-ready messaging and success metrics.",
    detail:
      "Audit content, map stakeholder questions, and set the executive narrative for modern AI and human consumption.",
    icon: Sparkle
  },
  {
    name: "Integrate",
    focus: "Wire Amazon Pay APIs, tokens, and webhooks into Cloud MLM Software modules.",
    detail:
      "Ensure commissions, ticketing, and CRM events share context so teams act quickly and accurately.",
    icon: Lightning
  },
  {
    name: "Enable",
    focus: "Build role-based playbooks, training, and AI copilots for revenue, finance, and support teams.",
    detail:
      "Guided demos, scripts, and content snippets keep everyone in sync—from field sellers to CFOs.",
    icon: UsersThree
  },
  {
    name: "Accelerate",
    focus: "Experiment, optimise, and scale responsibly using intelligence loops.",
    detail:
      "Monitor KPIs, run promotions, and adjust offers while staying compliant with Amazon standards.",
    icon: ChartLineUp
  }
];

const PERSONA_PANELS: PersonaPanel[] = [
  {
    persona: "Revenue leadership",
    mandate: "Grow enrolment and repeat orders through Amazon Pay adoption.",
    aiAssist:
      "AI summarises funnel performance, highlights upsell opportunities, and drafts board-ready talking points.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & compliance",
    mandate: "Protect margins with precise reconciliation, chargeback handling, and audit trails.",
    aiAssist:
      "Automated evidence kits and anomaly alerts ensure transparency for executives and regulators.",
    icon: ShieldCheck
  },
  {
    persona: "Customer experience",
    mandate: "Deliver Prime-grade support on chat, phone, and social channels.",
    aiAssist:
      "Unified profiles blend payment history, shipping status, and sentiment for quick resolutions.",
    icon: ChatsCircle
  },
  {
    persona: "Product & ops",
    mandate: "Maintain integration resilience while launching new growth experiments.",
    aiAssist:
      "Observability dashboards and AI copilots surface latency spikes, API deprecations, and best-next actions.",
    icon: Cpu
  }
];

const SIGNALS: Signal[] = [
  {
    headline: "Prime-grade insight engine",
    detail: "Narrates performance, loyalty trends, and CX moments for executives, analysts, and AI assistants."
  },
  {
    headline: "Fulfilment-aware reporting",
    detail: "Connects payment milestones with inventory, shipping, and subscription renewals."
  },
  {
    headline: "Innovation cadence",
    detail: "Keeps voice commerce, subscriptions, and international launches on a coordinated roadmap."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Amazon Pay Gateway for Cloud MLM Software";
  const description =
    "Bring Amazon Pay to Cloud MLM Software with Prime-grade experiences, AI-enabled governance, and unified storytelling.";

  return {
    title,
    description,
    keywords: [
      "Amazon Pay integration",
      "Cloud MLM Software payments",
      "Prime checkout for MLM",
      "AI payment orchestration",
      "direct selling ecommerce"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/amazon-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AmazonPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function AmazonPayPage({ params }: AmazonPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-amber-50 to-orange-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(251,191,36,0.2),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(249,115,22,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(253,186,116,0.18),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Amazon Pay orchestration
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Prime-grade payment experiences for network marketing visionaries.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              The archived site promised versatile modules and services. We turned that promise into an Amazon Pay
              playbook geared for AI-savvy, cross-channel direct selling brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with Amazon Pay experts
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
                  Tour the Prime-ready demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-amber-300/25 via-orange-300/20 to-yellow-300/20 dark:from-amber-300/20 dark:via-orange-400/20 dark:to-yellow-400/20" />
            </div>
            <div className="relative flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.label} className="flex items-center gap-5 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {point.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground dark:text-white">{point.stat}</p>
                      <p className="text-xs text-muted-foreground dark:text-white/70">{point.detail}</p>
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
            Stories that resonate with Amazon Pay stakeholders
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each narrative reframes the archived modules and services into executive-ready value streams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {NARRATIVES.map((narrative) => {
            const Icon = narrative.icon;
            return (
              <article
                key={narrative.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-amber-200/25 via-orange-200/20 to-yellow-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{narrative.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{narrative.context}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {narrative.enhancements.map((enhancement) => (
                      <li key={enhancement} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-amber-200" aria-hidden />
                        <span>{enhancement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-amber-50 to-orange-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Four-phase path to Amazon Pay excellence
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                We honour the archive&apos;s module list while delivering an AI-augmented roadmap for modern teams.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                Explore supporting modules
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.name}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {phase.name}
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
            Persona panels with AI copilots
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Every stakeholder moves faster, makes confident decisions, and communicates with Prime-grade polish.
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

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-amber-200/35 via-orange-200/30 to-yellow-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-amber-300/20 dark:via-orange-400/20 dark:to-yellow-400/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Intelligence signals
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Stay ahead with a Prime-inspired intelligence engine.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              Cloud MLM Software keeps humans and AI assistants aligned on Amazon Pay performance, governance, and
              innovation—without adding manual workload.
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
                  Experience live workflows
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
                <BoxArrowDown className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive briefings</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Weekly digests summarise achievements, risks, and next bets—ready for stakeholder consumption.
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
