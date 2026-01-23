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
  Award,
  Building2,
  Factory,
  Globe2,
  LineChart,
  MapPin,
  Microscope,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ClipboardText, DeviceMobile, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ScienceMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type InnovationPillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type FieldMotion = {
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

const SCIENCE_METRICS: ScienceMetric[] = [
  {
    label: "Founded",
    value: "1992",
    detail: "Immunologist Dr. Myron Wentz launches USANA Health Sciences in Salt Lake City, Utah.",
    icon: Building2
  },
  {
    label: "Research campus",
    value: "400K sq ft",
    detail: "State-of-the-art labs and manufacturing deliver pharmaceutical-grade nutrition worldwide.",
    icon: Factory
  },
  {
    label: "Awards",
    value: "100+ Nutra awards",
    detail: "Consistent recognition for product quality, research excellence, and corporate culture.",
    icon: Award
  },
  {
    label: "Product scope",
    value: "19+ markets",
    detail: "Cellular nutrition, personal care, and active lifestyle ranges powered by InCelligence® science.",
    icon: Globe2
  },
  {
    label: "Associate community",
    value: "650K+",
    detail: "Entrepreneurs and Preferred Customers across the Americas, Asia, and Europe.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Binary hybrid",
    detail: "Retail margins, weekly commissions, leadership bonuses, and elite rewards tied to verified volume.",
    icon: LineChart
  }
];

const INNOVATION_PILLARS: InnovationPillar[] = [
  {
    title: "Cellular nutrition",
    description:
      "Products are formulated to communicate with the body’s cells, supporting optimal function and resilience.",
    proof: "USANA InCelligence® technology and patent filings emphasise cellular signalling science.",
    icon: Microscope
  },
  {
    title: "Third-party validation",
    description:
      "NSF, Informed-Sport, and ConsumerLab certifications reinforce purity and banned substance compliance.",
    proof: "Annual certification reports showcased across elite athlete partnerships.",
    icon: ShieldCheck
  },
  {
    title: "Holistic portfolios",
    description:
      "Nutritionals, MySmart foods, Celavive skincare, and USANA Active address total wellbeing journeys.",
    proof: "Product pipelines announced at USANA Live events and leadership summits.",
    icon: Sparkles
  }
];

const FIELD_MOTIONS: FieldMotion[] = [
  {
    stage: "Personalise nutrition roadmaps",
    narrative:
      "Associates combine health assessments, body composition metrics, and lifestyle interviews to curate stacks.",
    enablement: "Assessment apps, product recommendation engines, and compliance-vetted education decks.",
    icon: ClipboardText
  },
  {
    stage: "Deliver concierge experiences",
    narrative:
      "Sampling rituals, proactive follow-up, and wellness community challenges keep customers engaged.",
    enablement: "Mobile CRM reminders, sample tracking, and gamified challenge toolkits.",
    icon: DeviceMobile
  },
  {
    stage: "Build expert-led leadership",
    narrative:
      "Science briefings, recognition ladders, and mentorship pods develop credible, compliant brand ambassadors.",
    enablement: "Analytics highlight rising leaders, while science councils host regular live sessions.",
    icon: UsersThree
  }
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1992",
    headline: "USANA founded",
    detail: "Dr. Myron Wentz creates USANA to provide science-based nutrition with pharmaceutical-grade standards.",
    proof: "USANA corporate history and founder interviews."
  },
  {
    year: "2008",
    headline: "Athlete programme launches",
    detail: "Team USANA supports Olympic and professional athletes with NSF Certified supplements.",
    proof: "Athlete partnership announcements and NSF certification releases."
  },
  {
    year: "2016",
    headline: "InCelligence® unlocks",
    detail: "First personalised cellular communication complex debuts, redefining USANA’s core formulas.",
    proof: "Global Convention product reveals and scientific publications."
  },
  {
    year: "2023",
    headline: "USANA Foundation expansion",
    detail: "Micro-nutrient philanthropy scales globally, aligning brand with purpose-driven initiatives.",
    proof: "Foundation impact report and press announcements."
  }
];

const TRUST_SIGNALS: TrustSignal[] = [
  {
    title: "Science integrity",
    score: "72/100",
    insight:
      "In-house R&D, published research, and third-party certifications keep USANA at the forefront of cellular nutrition.",
    methodology: "Weighted on publications, certifications, and advisory board activity."
  },
  {
    title: "Field prosperity",
    score: "63/100",
    insight:
      "Income depends on consistent customer retention and leadership mentoring—data-rich enablement is essential.",
    methodology: "Based on payout disclosures, retention ratios, and training cadence."
  },
  {
    title: "Brand resilience",
    score: "68/100",
    insight:
      "Award streaks and philanthropic initiatives bolster reputation, yet global economic shifts require agility.",
    methodology: "Blend of media sentiment, CSR impact, and geographic revenue balance."
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Regulatory vigilance",
    risk: "Nutrition claims across multiple jurisdictions demand meticulous compliance oversight.",
    mitigation: "Automate claim approvals, maintain jurisdictional playbooks, and integrate legal alerts into apps.",
    icon: ShieldCheck
  },
  {
    title: "Inventory flexibility",
    risk: "Large product catalogue can strain cash flow if forecasting misses emerging demand patterns.",
    mitigation: "Deploy predictive inventory tooling, offer just-in-time associate fulfilment, and spotlight hero SKUs.",
    icon: Factory
  },
  {
    title: "Digital differentiation",
    risk: "Competing wellness brands accelerate digital experiences; USANA must keep pace with omni-channel journeys.",
    mitigation: "Invest in app UX, on-demand education, and hybrid event playbooks.",
    icon: Sparkles
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Cellular insights engine",
    description:
      "Centralises customer biometrics, supplement usage, and compliance notes to personalise coaching at scale.",
    outcome: "Boosts retention and surfaces data-backed success stories for science marketing.",
    icon: ChartLineUp
  },
  {
    title: "Regulatory nerve centre",
    description:
      "Maps claims, language packs, and jurisdictional requirements into a single approval workflow.",
    outcome: "Reduces compliance friction and keeps global launches on schedule.",
    icon: ShieldCheck
  },
  {
    title: "Hybrid event studio",
    description:
      "Templates live science symposia, sampling labs, and digital watch parties with analytics baked in.",
    outcome: "Elevates experience equity between in-person and remote associates.",
    icon: Sparkles
  },
  {
    title: "Leadership telemetry dashboard",
    description:
      "Tracks coaching depth, digital adoption, and purpose-driven engagement to target investment.",
    outcome: "Identifies future elites and where additional mentorship or tooling is required.",
    icon: UsersThree
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 69,
  label: "Science trust index",
  summary: "Combines research rigour, associate sustainability, and brand reputation for USANA’s global community."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#2563eb ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(37, 99, 235, 0.25) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "USANA Health Sciences Cellular Nutrition Insights";
  const description =
    "Review USANA’s science-first heritage, compensation program, and the Cloud MLM Software strategies that keep cellular nutrition leaders compliant and inspired.";
  const keywords = [
    "USANA MLM analysis",
    "USANA cellular nutrition",
    "USANA compensation plan",
    "science-backed direct selling",
    "Cloud MLM Software wellness"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/usana-health-sciences", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type UsanaPageProps = {
  params: { lang: SupportedLocale };
};

export default function UsanaPage({ params }: UsanaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-indigo-900 to-blue-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(37,99,235,0.32),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(14,165,233,0.28),transparent_58%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/50 bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-100">
              USANA • Science-led nutrition
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Cellular nutrition, world-class labs, and purposeful leadership.
            </h1>
            <p className="text-base text-blue-50/80">
              USANA’s reputation is built on scientific rigour and human-centred experiences. Give associates the intelligence and
              automation that honour both.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the science cockpit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-200/60 text-blue-100 hover:bg-blue-500/10"
              >
                <Link href={pricingHref}>
                  Review technology bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-blue-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-blue-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-200" aria-hidden />
                Salt Lake City, Utah • Operating in 19+ markets
              </p>
              <p>
                “Great science deserves equally great execution. Align both and cellular nutrition becomes a movement, not a fad.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/30 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-blue-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {SCIENCE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-blue-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-blue-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation pillars to spotlight</h2>
            <p className="text-sm text-muted-foreground">
              Use these pillars to translate USANA’s research DNA into meaningful stories for customers and prospects.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INNOVATION_PILLARS.map((pillar) => {
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
                    {pillar.proof}
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Field motions for lasting results</h2>
              <p className="text-sm text-muted-foreground">
                Science alone isn’t enough—consistent, human-centric execution keeps USANA’s reputation untouchable.
              </p>
            </div>
            <div className="space-y-5">
              {FIELD_MOTIONS.map((motion) => {
                const Icon = motion.icon;
                return (
                  <article
                    key={motion.stage}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{motion.stage}</h3>
                      <p className="text-sm text-muted-foreground">{motion.narrative}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {motion.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Milestones that matter</h2>
              <p className="text-sm text-muted-foreground">
                Anchor your leadership conversations on the events that ingrained science and integrity into USANA’s DNA.
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
                Trust indicators executives monitor
              </h2>
              <p className="text-sm text-muted-foreground">
                Blend scientific excellence with operational agility. These scores summarise the current state.
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
              Cloud MLM Software plays for USANA leaders
            </h2>
            <p className="text-sm text-muted-foreground">
              Build a science-synchronised business system. We integrate evidence, enablement, and leadership telemetry in one
              place.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my science-led rollout
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  See the intelligent platform
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

