import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Brain,
  Droplets,
  Flame,
  HeartPulse,
  Leaf,
  LineChart,
  MapPin,
  Sparkles,
  Sun,
  Users
} from "lucide-react";
import { ChartLineUp, Handshake, Pulse, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type WellnessMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type WellnessPillar = {
  title: string;
  description: string;
  evidence: string;
  icon: IconType;
};

type FieldJourney = {
  stage: string;
  narrative: string;
  enablement: string;
  icon: IconType;
};

type TimelineEvent = {
  year: string;
  headline: string;
  detail: string;
  proof: string;
};

type TrustSignal = {
  title: string;
  score: string;
  insight: string;
  methodology: string;
};

type Watchpoint = {
  title: string;
  risk: string;
  mitigation: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const WELLNESS_METRICS: WellnessMetric[] = [
  {
    label: "Founded",
    value: "2013",
    detail: "Co-founders David Brown and Travis Martin launched TruVision Health (now Truvy) to simplify healthy habits.",
    icon: Sun
  },
  {
    label: "Product focus",
    value: "Metabolism & daily wellness",
    detail: "Flagship combos blend supplements, drink mixes, and habit coaching in one subscription.",
    icon: Flame
  },
  {
    label: "Field community",
    value: "100K+ advocates",
    detail: "Associates build rapport through challenge groups, transformation stories, and digital accountability pods.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Hybrid unilevel & bonuses",
    detail: "Retail profits, team volume, and lifestyle bonuses tied to verified customer orders and retention.",
    icon: LineChart
  },
  {
    label: "Scientific guardrails",
    value: "3rd-party testing & clinical board",
    detail: "Quality assurance and advisory councils validate ingredient sourcing and claims.",
    icon: BadgeCheck
  },
  {
    label: "HQ & reach",
    value: "Lehi, Utah • North America",
    detail: "Growing footprint across the U.S., Canada, and Caribbean wellness communities.",
    icon: MapPin
  }
];

const WELLNESS_PILLARS: WellnessPillar[] = [
  {
    title: "Daily habit stack",
    description:
      "Two-a-day capsules, weight management drinks, and energy chews help members weave wellness into busy schedules.",
    evidence: "TruVision/Truvy habit kits and 10-Day Reset programmes emphasise consistency over extremes.",
    icon: HeartPulse
  },
  {
    title: "Whole-body education",
    description:
      "Associates receive gut health explainers, hormone balance coaching, and mindset modules to personalise journeys.",
    evidence: "Truvy University content library and live coaching sessions.",
    icon: Brain
  },
  {
    title: "Community-driven accountability",
    description:
      "Challenge groups and social check-ins celebrate incremental wins, replacing fad dieting with shared resilience.",
    evidence: "Customer transformations highlighted across Truvy Instagram Live series and ambassador events.",
    icon: UsersThree
  }
];

const FIELD_JOURNEYS: FieldJourney[] = [
  {
    stage: "Spark belief with data-backed stories",
    narrative:
      "Lead prospects through transformation stories supported by third-party ingredient tests and medical advisory commentary.",
    enablement: "Provide case study decks, ingredient sourcing receipts, and doctor-vetted talking points.",
    icon: ChartLineUp
  },
  {
    stage: "Build custom habit loops",
    narrative:
      "Pair metabolism support with hydration, sleep, and movement checklists to create 30-day routine maps.",
    enablement: "Automated planners surface reminders, recipe swaps, and macro guidance by lifestyle persona.",
    icon: Pulse
  },
  {
    stage: "Sustain community momentum",
    narrative:
      "Weekly live streams, accountability pods, and results recaps reinforce trust long after the first order ships.",
    enablement: "Calendar templates coordinate coaches, highlight compliance reminders, and capture testimonials.",
    icon: Handshake
  }
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2013",
    headline: "TruVision launches wellness duo",
    detail: "Combines TruFIX and TruCONTROL to target blood chemistry, energy, and cravings.",
    proof: "Company founding announcement and early distributor playbooks."
  },
  {
    year: "2016",
    headline: "Community challenge boom",
    detail: "10-Day Reset challenges introduce structured accountability and social proof.",
    proof: "Distributor training replays and challenge marketing kits."
  },
  {
    year: "2020",
    headline: "Rebrand to Truvy",
    detail: "Digital-first brand refresh underscores science, inclusivity, and ongoing product innovation.",
    proof: "Press release covering the Truvy rebrand."
  },
  {
    year: "2023–2024",
    headline: "Expanded wellness lab",
    detail: "Adds immune support, collagen, and subscription habit apps aligned with coaching partners.",
    proof: "Truvy product catalogue updates and advisory board spotlight features."
  }
];

const TRUST_SIGNALS: TrustSignal[] = [
  {
    title: "Regulatory posture",
    score: "62/100",
    insight:
      "FDA advisory letters in 2014 pushed the business to strengthen label accuracy, disclaimers, and testing routines.",
    methodology: "Based on warning letter history, lab certifications, and transparency updates."
  },
  {
    title: "Field economics",
    score: "58/100",
    insight:
      "Income concentrates among leaders who balance retail challenge groups with retention metrics and compliance.",
    methodology: "Informed by compensation disclosures, leadership training cadence, and retention dashboards."
  },
  {
    title: "Customer love",
    score: "66/100",
    insight:
      "Lifestyle coaching and accessible pricing build loyalty when results are tracked and expectations remain realistic.",
    methodology: "Blend of community engagement, subscription renewal rates, and support ticket sentiment."
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Compliance storytelling discipline",
    risk: "Overpromising fat loss or medical outcomes risks regulatory action and consumer backlash.",
    mitigation: "Centralise approved claims, require before/after evidence, and automate disclosure reminders.",
    icon: BadgeCheck
  },
  {
    title: "Ingredient sourcing transparency",
    risk: "Supply chain delays or ambiguous sourcing reduce trust among health-conscious consumers.",
    mitigation: "Track batch certificates in public dashboards and notify the field of formulation updates.",
    icon: Leaf
  },
  {
    title: "Coach burnout",
    risk: "Associates juggling community management and sales can experience fatigue and churn.",
    mitigation: "Provide pacing analytics, rotating coaching pods, and recognition rooted in healthy workloads.",
    icon: Sparkles
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Habit intelligence engine",
    description:
      "AI analyses hydration, sleep, and nutrition check-ins to personalise prompts and surface supplement guidance.",
    outcome: "Increases compliance with daily routines and improves reorder predictability.",
    icon: Brain
  },
  {
    title: "Clinical evidence vault",
    description:
      "Centralises lab tests, advisory board videos, and compliance-approved claim scripts for instant field access.",
    outcome: "Reduces compliance review cycles and builds trust with healthcare-minded prospects.",
    icon: BadgeCheck
  },
  {
    title: "Community pulse monitor",
    description:
      "Aggregates challenge engagement, live stream attendance, and sentiment surveys to predict churn.",
    outcome: "Flags at-risk pods so leaders can intervene with targeted coaching or product bundles.",
    icon: Droplets
  },
  {
    title: "Transformation storytelling studio",
    description:
      "Automates before/after documentation workflows with consent tracking and AI copy suggestions.",
    outcome: "Keeps testimonials compliant while equipping associates with fresh, believable stories.",
    icon: Sparkles
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 63,
  label: "Wellness trust index",
  summary: "Blends compliance maturity, field sustainability, and community loyalty signals across the Truvy ecosystem."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#22c55e ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(56, 189, 248, 0.25) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "TruVision Health (Truvy) Wellness Blueprint";
  const description =
    "See how TruVision Health empowers wellness advocates with habit-building tools, compliance-ready stories, and community accountability—and how Cloud MLM Software amplifies that impact.";
  const keywords = [
    "TruVision Health MLM",
    "Truvy wellness community",
    "TruVision compensation plan insights",
    "wellness direct selling software",
    "Cloud MLM Software health brands"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/truvision-health", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TruvisionPageProps = {
  params: { lang: SupportedLocale };
};

export default function TruvisionPage({ params }: TruvisionPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.32),transparent_55%),radial-gradient(circle_at_78%_25%,rgba(249,115,22,0.35),transparent_58%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-100">
              TruVision Health • Truvy
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Wellness momentum happens when habits, science, and community move together.
            </h1>
            <p className="text-base text-emerald-50/80">
              TruVision Health shows how empowering communities with transparent science and flexible habit stacks can transform
              everyday wellness. Equip associates with the analytics, compliance cues, and storytelling engines that make growth
              sustainable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the wellness cockpit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200/60 text-emerald-100 hover:bg-emerald-500/10"
              >
                <Link href={pricingHref}>
                  Review pricing strategies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-emerald-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-emerald-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-200" aria-hidden />
                Lehi, Utah • Serving North America
              </p>
              <p>
                “Wellness isn’t a sprint. It’s the daily discipline of community, education, and joyful accountability.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/30 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-emerald-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {WELLNESS_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-emerald-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars of the Truvy experience</h2>
            <p className="text-sm text-muted-foreground">
              Elevate every associate conversation with pillars that balance science, accessibility, and community-led habit
              design. These themes keep messaging sharp across social, live, and in-person coaching.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {WELLNESS_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {pillar.evidence}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Field journey for sustainable wellness
              </h2>
              <p className="text-sm text-muted-foreground">
                Transform customers into lifelong advocates by guiding them from science-backed belief to community celebration.
              </p>
            </div>
            <div className="space-y-5">
              {FIELD_JOURNEYS.map((journey) => {
                const Icon = journey.icon;
                return (
                  <article
                    key={journey.stage}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                      <p className="text-sm text-muted-foreground">{journey.narrative}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {journey.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Moments that shaped TruVision</h2>
              <p className="text-sm text-muted-foreground">
                Trace the brand’s evolution from supplement duo to holistic wellness ecosystem to inform today’s go-to-market plans.
              </p>
            </div>
            <div className="space-y-5">
              {TIMELINE_EVENTS.map((event) => (
                <article
                  key={event.year}
                  className="relative rounded-3xl border border-border/60 bg-background/80 p-5 dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {event.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{event.headline}</h3>
                  <p className="text-sm text-muted-foreground">{event.detail}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {event.proof}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-10 dark:border-primary/15 dark:from-primary/10 dark:via-slate-950 dark:to-primary/15">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Trust diagnostics for leadership teams
              </h2>
              <p className="text-sm text-muted-foreground">
                Balance innovation with compliance and community health. These lenses keep executive decisions anchored in reality.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {TRUST_SIGNALS.map((signal) => (
                <article
                  key={signal.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{signal.title}</p>
                  <span className="text-3xl font-semibold text-primary">{signal.score}</span>
                  <p className="text-sm text-muted-foreground">{signal.insight}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {signal.methodology}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WATCHPOINTS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-primary/25 bg-primary/5 p-5 dark:border-primary/20 dark:bg-primary/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.risk}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {item.mitigation}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software plays for TruVision Health
            </h2>
            <p className="text-sm text-muted-foreground">
              Deliver personalised wellness journeys without sacrificing compliance. Our platform unifies habit data, community
              insights, and scientific evidence so every coach can focus on people first.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design my wellness roadmap
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
