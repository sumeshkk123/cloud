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
  Compass,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  ShieldCheck,
  Sparkle,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPillar = {
  title: string;
  description: string;
  icon: IconType;
};

type ValueStream = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type LaunchStep = {
  step: string;
  focus: string;
  insight: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  narrative: string;
  icon: IconType;
};

const HERO_PILLARS: HeroPillar[] = [
  {
    title: "Secure by design",
    description:
      "BIBD Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM Software elevates that foundation with AI-assisted monitoring and end-to-end encryption practices.",
    icon: ShieldCheck
  },
  {
    title: "Velocity for every device",
    description:
      "Apple-ready journeys keep customers and distributors moving—mirroring the archive’s emphasis on fast, seamless interactions.",
    icon: DeviceMobile
  },
  {
    title: "Brunei to global scale",
    description:
      "Start with Brunei’s compliance and cultural nuances, then extend BIBD to every market the gateway supports.",
    icon: GlobeHemisphereEast
  }
];

const VALUE_STREAMS: ValueStream[] = [
  {
    heading: "Strategic storytelling",
    summary:
      "We honoured the original BIBD message while reframing it for boards, investors, and senior operators who need evidence-backed narratives.",
    bullets: [
      "Hero copy retains the legacy promise and adds context on AI-era operations.",
      "Section titles speak to leadership KPIs—trust, speed, and global readiness.",
      "AIO prompts embedded throughout the page fuel future articles and enablement assets."
    ],
    icon: Sparkle
  },
  {
    heading: "Operational choreography",
    summary:
      "Content blocks align product, treasury, and field enablement teams around a consistent integration roadmap.",
    bullets: [
      "Responsive layouts explain onboarding, settlement, and support in plain language.",
      "Callouts translate policy requirements into daily actions for the field.",
      "Data-friendly copy paves the way for dashboards and automation triggers."
    ],
    icon: TrendUp
  },
  {
    heading: "Governance acceleration",
    summary:
      "Compliance narratives extend beyond checklists into living playbooks that combine human oversight with AI summarisation.",
    bullets: [
      "Evidence kits provide regulator-ready documentation without manual rework.",
      "Alerts surface anomalies with context so decision makers move swiftly.",
      "Cross-functional rituals keep legal, finance, and experience teams aligned."
    ],
    icon: ShieldCheck
  }
];

const LAUNCH_STEPS: LaunchStep[] = [
  {
    step: "Wave 01",
    focus: "Discovery & intent",
    insight:
      "Audit historical BIBD integrations, stakeholder interviews, and WordPress collateral to frame the modern strategy.",
    icon: Compass
  },
  {
    step: "Wave 02",
    focus: "Experience orchestration",
    insight:
      "Prototype journeys for enrolment, checkout, and post-purchase support—ensuring accessibility across devices.",
    icon: DeviceMobile
  },
  {
    step: "Wave 03",
    focus: "Compliance activation",
    insight:
      "Codify Brunei-first policy requirements with AI-generated evidence packs and automated escalation paths.",
    icon: ShieldCheck
  },
  {
    step: "Wave 04",
    focus: "Expansion intelligence",
    insight:
      "Launch pilot markets, monitor telemetry, and iterate with AI insights that recommend next-best experiments.",
    icon: TrendUp
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Brunei centre of excellence",
    narrative:
      "Preserve the August 28th, 2024 milestone by positioning Brunei as the experience lab for BIBD-enabled innovation.",
    icon: GlobeHemisphereEast
  },
  {
    title: "AI-guided enablement",
    narrative:
      "Conversational copilots curate scripts, FAQs, and sentiment alerts that help distributors master BIBD quickly.",
    icon: UsersThree
  },
  {
    title: "Executive-ready telemetry",
    narrative:
      "Dashboards unify settlement, dispute, and retry metrics—turning data into board-level storytelling that wins investment.",
    icon: TrendUp
  },
  {
    title: "Community amplification",
    narrative:
      "Equip marketing and partnerships with social-ready narratives that celebrate secure, fast, seamless BIBD journeys across markets.",
    icon: Sparkle
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "BIBD Payment Gateway for Cloud MLM Software";
  const description =
    "Translate BIBD’s secure, fast, and seamless payment experience into an AI-ready Cloud MLM Software journey with Brunei-first expansion.";

  return {
    title,
    description,
    keywords: [
      "BIBD payment gateway",
      "Cloud MLM Software BIBD integration",
      "Brunei digital payments",
      "AI payment governance",
      "MLM payment gateway modernisation"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/bibd", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BibdPageProps = {
  params: { lang: SupportedLocale };
};

export default function BibdPage({ params }: BibdPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-border/60 bg-gradient-to-br from-white via-slate-50 to-indigo-50 px-6 py-20 shadow-sm dark:border-white/15 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(129,140,248,0.16),transparent_55%),radial-gradient(circle_at_82%_15%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              BIBD gateway renaissance
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Secure, fast, seamless BIBD payments—reframed for AI-era MLM leaders.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              The WordPress copy championed BIBD&apos;s reliability. We evolved that story into a modern narrative that
              rallies executives, finance teams, and the field around a single mission: delight customers across every
              device and market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with a strategist
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
          <div className="grid gap-5 sm:grid-cols-3">
            {HERO_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Strategy, operations, and governance in one narrative
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            These value streams transform archived insight into executive-ready storytelling. Use them to orchestrate
            campaigns, enablement, and automation.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {VALUE_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.heading}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-3xl bg-gradient-to-br from-primary/25 via-indigo-400/20 to-sky-400/20 opacity-0 blur-xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground dark:text-white">{stream.heading}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{stream.summary}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {stream.bullets.map((bullet) => (
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-white via-indigo-50 to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(129,140,248,0.14),transparent_55%),radial-gradient(circle_at_80%_12%,rgba(14,165,233,0.14),transparent_55%),radial-gradient(circle_at_50%_88%,rgba(52,211,153,0.16),transparent_60%)]" />
        <div className="container space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary dark:text-indigo-200">
                Coverage spotlight
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Brunei anchors BIBD success—and fuels expansion across every supported country.
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The archive highlighted Apple-friendly payments and wide availability. We transformed that into a narrative
                about cultural nuance, compliance excellence, and replicable growth.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Brunei-first compliance
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Apple device optimisation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:border-white/20 dark:bg-white/5 dark:text-white/80">
                  Multi-country readiness
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Compass className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Cultural localisation</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Tailor benefit messaging, language, and support routines for Brunei while keeping templates ready for new
                  markets.
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
                  Optimise mobile, desktop, and assisted channels so the original “seamless” promise becomes reality
                  everywhere.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-white/15 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <TrendUp className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">Performance telemetry</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Connect conversion, approval, and dispute metrics to leadership scorecards and weekly stand-ups.
                </p>
              </article>
              <article className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white/70 to-indigo-100/70 p-6 shadow-md dark:border-white/20 dark:from-primary/20 dark:via-white/10 dark:to-indigo-400/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary dark:bg-white/10 dark:text-white">
                    <Sparkle className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-semibold text-foreground dark:text-white">August 28, 2024 legacy</p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/80">
                  Keep the original publication date alive as a proof point in case studies, blog posts, and analyst briefings.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="self-start bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary"
                >
                  <Link href={buildLocalizedPath("/mlm-software-payment-gateways/brunei", locale)}>
                    Explore Brunei insights
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
            Launch blueprint for BIBD inside Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Move confidently through disciplined waves. Each step includes automation anchors, AI touchpoints, and human
            rituals derived from the archived narrative.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LAUNCH_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.step}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                      {step.step}
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
            Opportunities unlocked by BIBD + Cloud MLM Software
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Activate these opportunities to keep leadership, finance, and the field aligned long after launch day.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {OPPORTUNITIES.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <article
                key={opportunity.title}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/70">
                    {opportunity.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{opportunity.narrative}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-primary/20 via-indigo-200/30 to-sky-200/30 px-6 py-16 shadow-xl dark:border-white/20 dark:from-primary/20 dark:via-indigo-400/20 dark:to-sky-300/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Thought leadership engine
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Keep Cloud MLM Software the trusted voice on BIBD innovation.
            </h2>
            <p className="text-base text-primary-foreground/80 dark:text-white/80">
              Reuse these sections in webinars, analyst briefings, and AIO touchpoints. The design makes it easy to convert
              insights into conversations that influence markets.
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
                Feed chatbots and knowledge assistants with storylines that reinforce BIBD&apos;s secure, fast, seamless
                identity.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <TrendUp className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Executive dashboards</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Transform telemetry from this page into board visuals and investor briefings that secure future funding.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-2xl border border-primary/40 bg-white/80 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <UsersThree className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Community amplification</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Empower field leaders with ready-to-share snippets that elevate BIBD success stories across social channels.
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
