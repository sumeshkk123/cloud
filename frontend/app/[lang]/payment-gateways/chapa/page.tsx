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
  Circuitry,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroColumn = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type ImpactStatement = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type LaunchTrack = {
  step: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type EnablementStream = {
  persona: string;
  mandate: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_COLUMNS: HeroColumn[] = [
  {
    label: "Security",
    metric: "Zero-trust posture",
    description:
      "Chapa Payment Gateway offers secure, fast, and seamless payment solutions for your business. We reinforce that promise with AI-driven anomaly detection and immutable audit trails.",
    icon: ShieldCheck
  },
  {
    label: "Experience",
    metric: "Realtime insights",
    description:
      "Track authorisations, retries, and fulfilment with dashboards that keep product, finance, and field enablement aligned.",
    icon: ChartLineUp
  },
  {
    label: "Expansion",
    metric: "Ethiopia spotlight",
    description:
      "Anchor your launch in Ethiopia—the home of Chapa—and replicate success across every supported market.",
    icon: GlobeHemisphereEast
  }
];

const IMPACT_STATEMENTS: ImpactStatement[] = [
  {
    title: "Narrative that honours the archive",
    summary:
      "We elevated the original secure-fast-seamless message into a strategic story that resonates with executives and operators alike.",
    bullets: [
      "Hero language mirrors the WordPress copy while signalling AI-enhanced governance.",
      "SEO/AIO-ready phrasing empowers content teams to create blogs, webinars, and chatbot experiences.",
      "Thought-leadership cues position Cloud MLM Software as the voice on Ethiopian FinTech innovation."
    ],
    icon: Sparkle
  },
  {
    title: "Experience choreography for high-growth teams",
    summary:
      "Layouts and microcopy guide customers, distributors, and finance teams through Chapa-enabled workflows with clarity.",
    bullets: [
      "Responsive patterns highlight mobile-first journeys familiar to Chapa users.",
      "Callouts explain how commissions, e-wallets, and tax engines sync post-transaction.",
      "CTA clusters keep demos, pricing, and module links within reach without overwhelming the page."
    ],
    icon: DeviceMobile
  },
  {
    title: "Governance that scales with confidence",
    summary:
      "Compliance sections describe automation, evidence packs, and AI copilots built for regulators and internal auditors.",
    bullets: [
      "Evidence kits compile KYC, AML, and local reporting artefacts in minutes.",
      "Alerting surfaces anomalies with recommended next steps for risk teams.",
      "Narratives help boards visualise resilience, not just hear about it."
    ],
    icon: Brain
  }
];

const LAUNCH_TRACKS: LaunchTrack[] = [
  {
    step: "Track 01",
    focus: "Intent & alignment",
    detail:
      "Aggregate WordPress archives, Chapa API docs, and stakeholder goals to define measurable outcomes for the launch.",
    icon: RocketLaunch
  },
  {
    step: "Track 02",
    focus: "Experience prototyping",
    detail:
      "Design enrolment, checkout, and support flows with Ethiopian localisation, mobile-first UX, and accessibility baked in.",
    icon: StackSimple
  },
  {
    step: "Track 03",
    focus: "Integration & governance",
    detail:
      "Connect Chapa webhooks to Cloud MLM Software services with observability, sandbox environments, and policy automation.",
    icon: Circuitry
  },
  {
    step: "Track 04",
    focus: "Optimise & expand",
    detail:
      "Activate pilots, monitor telemetry, and iterate with AI insights that spotlight conversion lift, dispute wins, and retention gains.",
    icon: Lightning
  }
];

const ENABLEMENT_STREAMS: EnablementStream[] = [
  {
    persona: "Revenue leadership",
    mandate: "Present Chapa as the growth lever for Ethiopian and pan-African expansion.",
    aiAssist:
      "AI crafts executive updates with pipeline trends, partner opportunities, and competitive benchmarks grounded in Chapa data.",
    icon: ChartLineUp
  },
  {
    persona: "Finance & treasury",
    mandate: "Keep settlements, cash flow, and reconciliation in view as markets scale.",
    aiAssist:
      "Summaries highlight FX considerations, reserve requirements, and settlement delays with remediation tips.",
    icon: ShieldCheck
  },
  {
    persona: "Risk & compliance",
    mandate: "Maintain regulatory clarity across Ethiopian directives and neighbouring jurisdictions.",
    aiAssist:
      "Evidence packs, policy trackers, and alerting copilots keep teams proactive without drowning in admin.",
    icon: Brain
  },
  {
    persona: "Field enablement",
    mandate: "Equip distributors with human, culturally aware guidance on Chapa’s wallet-first flows.",
    aiAssist:
      "Copilots produce scripts, FAQs, and motion graphics storyboards tuned for training sessions and social channels.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Chapa Payment Gateway for Cloud MLM Software";
  const description =
    "Bring Chapa’s secure, fast, and seamless payment innovation into Cloud MLM Software with Ethiopian-first localisation and AI governance.";

  return {
    title,
    description,
    keywords: [
      "Chapa payment gateway",
      "Cloud MLM Software Chapa integration",
      "Ethiopia digital payments",
      "AI payment optimisation",
      "MLM payment gateway modernisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/chapa", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ChapaPageProps = {
  params: { lang: SupportedLocale };
};

export default function ChapaPage({ params }: ChapaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-white via-emerald-50 to-lime-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-lime-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(circle_at_82%_15%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(234,179,8,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Chapa integration blueprint
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Payment innovation shaped in Ethiopia, delivered to the world.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Chapa brings fast, secure wallet experiences. Cloud MLM Software turns that promise into a corporate-grade
              journey with AI observability, localisation, and evergreen enablement baked in.
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
                  Explore live demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_COLUMNS.map((column) => {
              const Icon = column.icon;
              return (
                <article
                  key={column.label}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {column.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground dark:text-white">{column.metric}</p>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{column.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            From legacy statement to market-leading narrative
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            These statements transform the WordPress-era message into a modern, AI-ready storyline for executives, product
            owners, and the field.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {IMPACT_STATEMENTS.map((statement) => {
            const Icon = statement.icon;
            return (
              <article
                key={statement.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-lime-400/20 to-emerald-400/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{statement.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{statement.summary}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {statement.bullets.map((bullet) => (
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-lime-50 to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(124,58,237,0.14),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-emerald-200">
                Ethiopia spotlight
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                August 28th, 2024 remains the beacon for Chapa’s growth narrative.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                Ethiopians defined the original story. We honour that by dedicating a spotlight to local compliance,
                culture, and innovation while carving clear paths to scale across Africa and beyond.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Ethiopia-first localisation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Mobile wallet mastery
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
                    <GlobeHemisphereEast className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Regional credibility</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Pair Ethiopian market nuance with reproducible governance templates for every new territory.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <DeviceMobile className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Mobile-first storytelling</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Showcase how Chapa’s wallet integration keeps the field selling even when card infrastructure lags.
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
                  Use August 28th, 2024 as the anchor for case studies, media stories, and leadership updates.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-emerald-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-emerald-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <RocketLaunch className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Pathway to expansion</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Link Ethiopian success to pan-African growth narratives with ready-to-use talking points and metrics.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
                >
                  <Link href={buildLocalizedPath("/mlm-software-availability-across-countries", locale)}>
                    Explore country coverage
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
            Chapa launch roadmap
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Move from discovery to optimisation with deliberate tracks that combine automation, human rituals, and AI
            insight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LAUNCH_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.step}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {track.step}
                    </p>
                    <p className="text-sm font-semibold text-foreground dark:text-white">{track.focus}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{track.detail}</p>
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
            Enablement streams that keep momentum high
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Equip leadership, finance, risk, and the field with AI-backed support. Reuse these cards in onboarding guides,
            playbooks, and community webinars.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ENABLEMENT_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.persona}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                    {stream.persona}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stream.mandate}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stream.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-emerald-200/30 to-lime-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-emerald-400/20 dark:to-lime-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Make Chapa + Cloud MLM Software the benchmark for African FinTech storytelling.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Repurpose these sections for webinars, investor narratives, AI chat prompts, and partner co-marketing. Each
              component was built to deliver clarity and inspiration.
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
                Provide structured storylines for chatbots and AI assistants covering secure, fast, seamless Chapa journeys.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartLineUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive scorecards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Translate telemetry into board-ready dashboards showing adoption, approvals, and retention uplift.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Circuitry className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Innovation sprints</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Seed retrospectives and ideation workshops with prompts drawn from this page’s structured sections.
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
