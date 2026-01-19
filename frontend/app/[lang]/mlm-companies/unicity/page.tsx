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
  Building2,
  Droplet,
  FlaskConical,
  Globe2,
  HeartPulse,
  LineChart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ClipboardText, DeviceMobile, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type WellnessMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type SciencePillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type FieldPathway = {
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

type TrustPillar = {
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
    value: "2001",
    detail: "Unicity International emerges from the merger of Rexall Showcase and Enrich International.",
    icon: Building2
  },
  {
    label: "Mission",
    value: "Make Life Better",
    detail: "Metabolic health, energy, and lifestyle coaching form the core promise to customers and distributors.",
    icon: HeartPulse
  },
  {
    label: "Scientific advisory",
    value: "40+ researchers",
    detail: "Global councils and medical partners validate formulations and run clinical programmes.",
    icon: FlaskConical
  },
  {
    label: "Flagship products",
    value: "Bios Life • Feel Great",
    detail: "Metabolism, blood sugar, and gut health systems anchor recurring subscriptions worldwide.",
    icon: Droplet
  },
  {
    label: "Field network",
    value: "500K+ customers",
    detail: "Enrollers and coaches operate across Asia, the Americas, and the Middle East.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Hybrid unilevel",
    detail: "Retail margins, Smart Start bonuses, and residual lifestyle pools tied to verified volume.",
    icon: LineChart
  }
];

const SCIENCE_PILLARS: SciencePillar[] = [
  {
    title: "Clinical-grade formulations",
    description:
      "Bios Life, Unimate, and Balance leverage peer-reviewed studies, fibre blends, and Swiss-harvested botanicals.",
    proof: "Clinical data presented at metabolic health symposia and published in the Journal of Nutrition & Metabolism.",
    icon: FlaskConical
  },
  {
    title: "Metabolic focus",
    description:
      "Programmes address insulin response, lipid profiles, and satiety—key markers for sustainable habit change.",
    proof: "Feel Great programme outcomes tracked across Asia-Pacific metabolic clinics.",
    icon: HeartPulse
  },
  {
    title: "Certified sourcing",
    description:
      "Traceable supply chains, ISO-certified facilities, and rigorous testing uphold product integrity.",
    proof: "ISO certifications and third-party audits highlighted in Unicity manufacturing reports.",
    icon: BadgeCheck
  }
];

const FIELD_PATHWAYS: FieldPathway[] = [
  {
    stage: "Diagnose metabolic goals",
    narrative:
      "Coaches review lifestyle data, biometrics, and goals to assemble personalised Feel Great stacks.",
    enablement: "Digital assessments, comparison charts, and doctor-reviewed content keep conversations precise.",
    icon: ClipboardText
  },
  {
    stage: "Activate daily rituals",
    narrative:
      "Morning Unimate, pre-meal Balance, hydration reminders, and community accountability deliver measurable momentum.",
    enablement: "Mobile prompts, progress dashboards, and habit trackers align to each customer persona.",
    icon: DeviceMobile
  },
  {
    stage: "Expand proactive care",
    narrative:
      "Coaches layer leadership development, nutrition education, and referral ecosystems to stabilise retention.",
    enablement: "Analytics flag at-risk cohorts, auto-schedule coaching touchpoints, and celebrate compliance milestones.",
    icon: UsersThree
  }
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "2001",
    headline: "Unicity International launches",
    detail: "Merger forms a metabolic health powerhouse focused on Make Life Better.",
    proof: "Corporate history outlining the Rexall Showcase and Enrich International integration."
  },
  {
    year: "2012",
    headline: "Feel Great programme debuts",
    detail: "Bios Life and Unimate pair to target blood sugar, energy, and mental focus.",
    proof: "Feel Great launch materials and physician endorsements."
  },
  {
    year: "2017",
    headline: "Global science symposiums",
    detail: "Doctors and researchers gather for annual metabolic health events across Asia and the U.S.",
    proof: "Unicity Global Science Symposium recaps and speaker lineups."
  },
  {
    year: "2023",
    headline: "Digital coaching expansion",
    detail: "App-based habit tracking and telehealth partnerships scale community accountability.",
    proof: "Press releases on Unicity app enhancements and partnerships."
  }
];

const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "Clinical credibility",
    score: "66/100",
    insight:
      "Peer-reviewed studies and advisory boards bolster trust, yet constant education is required to keep claims compliant.",
    methodology: "Weighted on clinical publications, advisory rosters, and regulatory transparency."
  },
  {
    title: "Field sustainability",
    score: "61/100",
    insight:
      "Income durability hinges on subscription retention and coaching capacity, not hype-driven enrolments.",
    methodology: "Based on retention metrics, mentorship cadence, and leadership depth."
  },
  {
    title: "Customer loyalty",
    score: "67/100",
    insight:
      "When customers see metabolic markers improve, referrals soar—but expectations must stay realistic and data-backed.",
    methodology: "Blend of reorder velocity, community engagement, and sentiment analysis."
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Health claim governance",
    risk: "Metabolic outcomes are sensitive; unverified testimonials can trigger regulatory scrutiny.",
    mitigation: "Centralise compliant scripts, require data logs, and automate medical disclaimer reminders.",
    icon: ShieldCheck
  },
  {
    title: "Market concentration",
    risk: "Heavy reliance on Asia-Pacific revenue exposes the business to currency and regulatory swings.",
    mitigation: "Scenario-plan currency hedges, diversify launch markets, and monitor policy shifts monthly.",
    icon: Globe2
  },
  {
    title: "Coaching workload",
    risk: "High-touch coaching can strain leaders if automation and team depth lag behind growth.",
    mitigation: "Deploy pacing analytics, micro-coaching pods, and success desk support for emerging leaders.",
    icon: Sparkles
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Metabolic data lake",
    description:
      "Unifies biometrics, habit check-ins, and reorder behaviour so coaches personalise without drowning in spreadsheets.",
    outcome: "Improves retention and surfaces clinically relevant success stories for marketing and compliance.",
    icon: ChartLineUp
  },
  {
    title: "Clinical evidence vault",
    description:
      "Stores published studies, physician webinars, and claim-approved talking points with multilingual access.",
    outcome: "Shortens compliance review cycles and keeps field messaging science anchored.",
    icon: FlaskConical
  },
  {
    title: "Coach enablement autopilot",
    description:
      "Orchestrates onboarding, habit prompts, and renewal campaigns tailored to each coach’s bandwidth.",
    outcome: "Reduces burnout while protecting the customer experience that fuels referrals.",
    icon: UsersThree
  },
  {
    title: "Sentiment radar",
    description:
      "Monitors community chatter, app engagement, and support tickets to predict churn hotspots before they spike.",
    outcome: "Gives executives a proactive playbook for product tweaks and leadership interventions.",
    icon: Sparkles
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 65,
  label: "Metabolic trust index",
  summary: "Blends clinical validation, retention health, and community sentiment across Unicity’s global markets."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#0ea5e9 ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(59, 130, 246, 0.2) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Unicity Metabolic Wellness Blueprint";
  const description =
    "Explore Unicity’s science-backed wellness community, compensation outlook, and the Cloud MLM Software plays that keep coaches compliant and energized.";
  const keywords = [
    "Unicity MLM analysis",
    "Unicity Feel Great programme",
    "Unicity compensation insights",
    "metabolic health direct selling",
    "Cloud MLM Software wellness"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/unicity", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type UnicityPageProps = {
  params: { lang: SupportedLocale };
};

export default function UnicityPage({ params }: UnicityPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-sky-900 to-emerald-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_80%_28%,rgba(52,211,153,0.3),transparent_58%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-100">
              Unicity • Metabolic Wellness
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Clinical-grade wellness meets community-powered coaching.
            </h1>
            <p className="text-base text-cyan-50/80">
              Unicity proves metabolic change happens when science, coaching, and habit analytics move in sync. Empower your field
              with compliant storytelling, data-rich rituals, and automation that protects their energy.
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
                className="border-cyan-200/60 text-cyan-100 hover:bg-cyan-500/10"
              >
                <Link href={pricingHref}>
                  Review pricing strategies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-cyan-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-cyan-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-200" aria-hidden />
                Provo, Utah • Serving 60+ markets
              </p>
              <p>
                “Metabolic freedom requires data, discipline, and delight. Unicity coaches who master all three change lives.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/30 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-cyan-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-cyan-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
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
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-cyan-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-cyan-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scientific pillars that earn trust</h2>
            <p className="text-sm text-muted-foreground">
              Lean into the evidence. These pillars help coaches articulate why Unicity’s formulations stand out in the crowded
              wellness arena.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SCIENCE_PILLARS.map((pillar) => {
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Field pathways that stick</h2>
              <p className="text-sm text-muted-foreground">
                Sustainable revenue comes from choreography—diagnose, activate, and expand without overwhelming your coaches.
              </p>
            </div>
            <div className="space-y-5">
              {FIELD_PATHWAYS.map((pathway) => {
                const Icon = pathway.icon;
                return (
                  <article
                    key={pathway.stage}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{pathway.stage}</h3>
                      <p className="text-sm text-muted-foreground">{pathway.narrative}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {pathway.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Moments that defined Unicity</h2>
              <p className="text-sm text-muted-foreground">
                Use these milestones to frame transformation narratives for prospects, regulators, and potential partners.
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
                Trust diagnostics for executive teams
              </h2>
              <p className="text-sm text-muted-foreground">
                Align the boardroom with the field. These indicators reveal where to double down or de-risk as you scale.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {TRUST_PILLARS.map((pillar) => (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{pillar.title}</p>
                  <span className="text-3xl font-semibold text-primary">{pillar.score}</span>
                  <p className="text-sm text-muted-foreground">{pillar.insight}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {pillar.methodology}
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
              Cloud MLM Software activations for Unicity
            </h2>
            <p className="text-sm text-muted-foreground">
              Deliver a compliance-first, coach-friendly platform. We integrate science, habit data, and leadership analytics so
              every market scales responsibly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design my metabolic blueprint
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

