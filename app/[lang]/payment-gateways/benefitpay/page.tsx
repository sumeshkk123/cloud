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
  ChartsLine,
  CloudArrowUp,
  CurrencyCircleDollar,
  DeviceMobile,
  Fingerprint,
  GlobeHemisphereEast,
  Lightning,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type InsightPanel = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type ProcessTrack = {
  phase: string;
  focus: string;
  narrative: string;
  icon: IconType;
};

type CapabilityRail = {
  heading: string;
  body: string;
  aiAssist: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "Security & trust",
    value: "Biometric-first journey",
    detail:
      "BenefitPay Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM Software elevates that promise with biometric readiness and AI-driven observability.",
    icon: Fingerprint
  },
  {
    label: "Operational outlook",
    value: "Sub-second telemetry",
    detail:
      "Monitor transaction velocity, dispute trends, and retry behaviour to keep Bahrain and cross-border teams aligned.",
    icon: Lightning
  },
  {
    label: "Expansion hub",
    value: "Bahrain + global",
    detail:
      "Anchor BenefitPay launches in Bahrain and replicate compliant experiences across every supported country.",
    icon: GlobeHemisphereEast
  }
];

const INSIGHT_PANELS: InsightPanel[] = [
  {
    title: "Narrative refresh for leaders",
    description:
      "We preserved the original BenefitPay headline and deepened it with executive-ready language that addresses strategy, governance, and brand trust.",
    bullets: [
      "Hero copy mirrors the archive while adding enterprise-grade nuance.",
      "SEO and AIO-friendly language positions Cloud MLM Software as the BenefitPay authority.",
      "Thought leadership prompts feed blogs, webinars, and analyst briefings."
    ],
    icon: Sparkle
  },
  {
    title: "Journeys built for the field",
    description:
      "Interactive content blocks explain how distributors, customers, and finance teams experience BenefitPay through Cloud MLM Software.",
    bullets: [
      "Responsive design patterns adapt to mobile, desktop, and in-office walk-throughs.",
      "Callouts translate AML and KYC policies into everyday actions.",
      "Highlighted CTAs link to demos, pricing, and module breakdowns."
    ],
    icon: DeviceMobile
  },
  {
    title: "Governance & automation",
    description:
      "Compliance narratives become operational blueprints, complete with AI copilots that keep policy work effortless.",
    bullets: [
      "Evidence kits assemble documentation for regulators in minutes.",
      "AI-generated summaries inform leadership without drowning teams in detail.",
      "Data visual cues make settlement, reconciliation, and dispute health visible."
    ],
    icon: ShieldCheck
  }
];

const PROCESS_TRACKS: ProcessTrack[] = [
  {
    phase: "Stage 01",
    focus: "Diagnostic immersion",
    narrative:
      "Audit legacy documentation, BenefitPay integration touchpoints, and Bahrain regulations to set the groundwork for migration.",
    icon: ChartsLine
  },
  {
    phase: "Stage 02",
    focus: "Experience choreography",
    narrative:
      "Prototype guided checkout, enrolment, and treasury dashboards that celebrate BenefitPay’s speed and security.",
    icon: SquaresFour
  },
  {
    phase: "Stage 03",
    focus: "Governance automation",
    narrative:
      "Deploy policy playbooks, AI evidence packs, and alerting routines so compliance leaders sleep well every night.",
    icon: ShieldCheck
  },
  {
    phase: "Stage 04",
    focus: "Growth operations",
    narrative:
      "Synchronise marketing, enablement, and finance teams with realtime telemetry and AI-crafted campaign ideas.",
    icon: CloudArrowUp
  }
];

const CAPABILITY_RAILS: CapabilityRail[] = [
  {
    heading: "Revenue leadership",
    body: "Showcase BenefitPay as the growth catalyst for expansion into Bahrain and neighbouring markets.",
    aiAssist:
      "AI compiles board-ready decks with pipeline trends, competitive intel, and recommended partner incentives aligned to BenefitPay momentum.",
    icon: CurrencyCircleDollar
  },
  {
    heading: "Finance & compliance",
    body: "Maintain perfect clarity on settlements, chargebacks, and policy updates across every BenefitPay touchpoint.",
    aiAssist:
      "Intelligent summaries highlight anomalies, regulatory notices, and reconciliation gaps with suggested actions.",
    icon: ShieldCheck
  },
  {
    heading: "Enablement & community",
    body: "Equip the field with BenefitPay walkthroughs, FAQs, and storytelling assets that boost confidence.",
    aiAssist:
      "Copilots tailor scripts and micro-learnings per persona, keeping distributors informed on new payment features.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "BenefitPay Payment Gateway for Cloud MLM Software";
  const description =
    "Bring BenefitPay’s secure, fast, and seamless payment experience into Cloud MLM Software with Bahrain-first readiness and AI-enabled operations.";

  return {
    title,
    description,
    keywords: [
      "BenefitPay payment gateway",
      "Cloud MLM Software BenefitPay integration",
      "Bahrain digital payments",
      "AI payment governance",
      "MLM payment gateway modernisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/benefitpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BenefitPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function BenefitPayPage({ params }: BenefitPayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-white via-emerald-50 to-sky-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.18),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.16),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(96,165,250,0.18),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              BenefitPay transformation
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              BenefitPay integration engineered for Bahrain-born innovators and global challengers.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              The WordPress archive celebrated BenefitPay&apos;s secure, fast, and seamless payments. We built on that
              foundation with a design that speaks to executives, finance leaders, and field teams orchestrating digital
              payments at scale.
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
                  See BenefitPay in action
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.label}
                  className="flex items-start gap-5 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {signal.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground dark:text-white">{signal.value}</p>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{signal.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            From archive insight to executive-ready storytelling
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Every sentence honours the original BenefitPay message while amplifying clarity for modern stakeholders. Use
            these panels as a blueprint for campaign, enablement, and partner content.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INSIGHT_PANELS.map((panel) => {
            const Icon = panel.icon;
            return (
              <article
                key={panel.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-r from-primary/25 via-sky-400/20 to-emerald-400/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{panel.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{panel.description}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {panel.bullets.map((bullet) => (
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-emerald-50 to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(14,165,233,0.14),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(56,189,248,0.16),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-emerald-200">
                Coverage spotlight
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Bahrain is the launchpad—BenefitPay reaches every supported country with ease.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The archive emphasised Apple-friendly payments and multi-country availability. We celebrate Bahrain&apos;s
                leadership while presenting a roadmap for global expansion.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Bahrain-first compliance
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Apple device journeys
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Multi-market dashboards
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <CurrencyCircleDollar className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Financial transparency</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Reconcile BenefitPay transactions with ledger-grade precision and configurable reporting packs.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <DeviceMobile className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Omnichannel delight</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Align app, web, and in-person experiences so customers and distributors feel the same BenefitPay polish.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Sparkle className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Timestamped legacy</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  August 28th, 2024 stays immortalised with a dedicated launch highlight in messaging and enablement kits.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-emerald-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-emerald-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <GlobeHemisphereEast className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Bahrain spotlight</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Leverage Bahrain&apos;s digital payments leadership as the reference model for global BenefitPay rollouts.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
                >
                  <Link href={buildLocalizedPath("/network-marketing-software-company-providing-affordable-mlm-system-in-bahrain", locale)}>
                    View Bahrain insight
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
            The BenefitPay launch blueprint
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Move with intention across diagnostics, experience design, compliance, and growth. Each stage draws from
            archived insights and injects AI-driven clarity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <article
                key={track.phase}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {track.phase}
                    </p>
                    <p className="text-sm font-semibold text-foreground dark:text-white">{track.focus}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{track.narrative}</p>
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
            <Link href={pricingHref}>
              Review pricing
              <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Capability rails for every team
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            BenefitPay success demands cross-functional harmony. These capability rails outline how AI copilots and human
            expertise stay in sync.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CAPABILITY_RAILS.map((rail) => {
            const Icon = rail.icon;
            return (
              <article
                key={rail.heading}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                    {rail.heading}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">Mandate</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{rail.body}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground dark:text-white">AI assist</h4>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{rail.aiAssist}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-emerald-200/30 to-sky-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-emerald-400/20 dark:to-sky-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Position Cloud MLM Software as the BenefitPay authority.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Use this page to fuel analyst briefings, AIO prompts, and partner enablement. Every card was structured to
              keep the messaging cohesive, aspirational, and provably data-driven.
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
                Feed chatbots and virtual assistants with storylines anchored to secure, fast, seamless BenefitPay journeys.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <ChartsLine className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive scorecards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Translate telemetry and outcomes into digestible dashboards for leadership and partners.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <UsersThree className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Arm field leaders with stories, stats, and CTAs that highlight BenefitPay’s advantages across every market.
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
