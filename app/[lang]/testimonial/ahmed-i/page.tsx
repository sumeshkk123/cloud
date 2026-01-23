import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CalendarClock,
  Gauge,
  Globe2,
  Megaphone,
  Sparkles,
  Target
} from "lucide-react";
import {
  Atom,
  ChartLineUp,
  CirclesThreePlus,
  Compass,
  Quotes,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type SnapshotStat = {
  label: string;
  value: string;
};

type IconType = ComponentType<{ className?: string }>;

type ImpactCard = {
  metric: string;
  title: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  detail: string;
  proof: string;
  icon: IconType;
};

type TimelineItem = {
  phase: string;
  headline: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type EnablementStream = {
  title: string;
  detail: string;
  benefit: string;
  icon: IconType;
};

type TestimonialQuote = {
  speaker: string;
  role: string;
  quote: string;
  emphasis?: string;
  icon: IconType;
};

const SNAPSHOT: SnapshotStat[] = [
  { label: "Industry", value: "Direct selling wellness" },
  { label: "Region", value: "United States & emerging LATAM" },
  { label: "Primary goal", value: "Market-ready compensation pivots" },
  { label: "Engagement length", value: "12-week accelerator" }
];

const IMPACT_CARDS: ImpactCard[] = [
  {
    metric: "72h",
    title: "Promo launch cycles",
    description: "Localized promotion bundles now ship within 72 hours instead of multi-week queues.",
    icon: CalendarClock
  },
  {
    metric: "40%",
    title: "Operational lift reduced",
    description: "Automation rules eliminated repetitive overrides for regional finance teams.",
    icon: Gauge
  },
  {
    metric: "3×",
    title: "Experiment velocity",
    description: "Field leaders iterate three times more campaign variants with controlled guardrails.",
    icon: Sparkles
  }
];

const EXPERIENCE_PILLARS: Pillar[] = [
  {
    title: "Adaptive compensation choreography",
    detail: "Dynamic plan templates let Ahmed’s team fine-tune rank rewards, loyalty bonuses, and seasonal boosts per region.",
    proof: "Compensation updates scriptable through guided workflows and AI-assisted recommendations.",
    icon: ChartLineUp
  },
  {
    title: "Compliance baked into every iteration",
    detail: "Built-in policy checks surface region-specific tax and disclosure prompts before releases go live.",
    proof: "Rule engines reference Cloud MLM Software’s compliance library and organisation-specific controls.",
    icon: Atom
  },
  {
    title: "Empowered field councils",
    detail: "Leaders receive rehearsal sandboxes to preview plan changes, provide feedback, and approve go-live timelines.",
    proof: "Sandbox approvals sync with executive dashboards and notify country directors instantly.",
    icon: UsersThree
  }
];

const DELIVERY_TIMELINE: TimelineItem[] = [
  {
    phase: "Weeks 1-2",
    headline: "Vision labs & discovery",
    description: "Mapped distributor personas, audited historical incentives, and prioritised four expansion markets.",
    outcome: "Blueprint for agile promotions with shared metrics across marketing, finance, and operations.",
    icon: Compass
  },
  {
    phase: "Weeks 3-6",
    headline: "Compensation studio build",
    description: "Orchestrated modular plan templates, payout simulations, and currency-aware ledgers.",
    outcome: "Reusable library of rank ladders with predictive margin insights for finance leaders.",
    icon: CirclesThreePlus
  },
  {
    phase: "Weeks 7-9",
    headline: "Field enablement sprints",
    description: "Delivered guided onboarding, narrative-driven dashboards, and shadow launches for team captains.",
    outcome: "Leaders mastered promotion controls before public launch, cutting support tickets by half.",
    icon: Megaphone
  },
  {
    phase: "Weeks 10-12",
    headline: "AI-augmented rollout",
    description: "Activated adaptive triggers that monitor adoption, commission anomalies, and distributor feedback.",
    outcome: "Ahmed’s steering team now meets weekly with live insights to decide next-market playbooks.",
    icon: Globe2
  }
];

const ENABLEMENT_STREAMS: EnablementStream[] = [
  {
    title: "Promotion strategy studio",
    detail: "Scenario designer compares promo mixes and models downstream margin impact in real time.",
    benefit: "Marketing teams approve offers with confidence knowing finance validated the guardrails.",
    icon: Target
  },
  {
    title: "Insight operations hub",
    detail: "Unified dashboards surface enrolment heatmaps, retention tiers, and predictive churn groups.",
    benefit: "Regional owners pivot engagement tactics before attrition trends crystallise.",
    icon: Megaphone
  },
  {
    title: "Governance runway",
    detail: "Role-based approvals with immutable audit trails keep every change sponsor and regulator aligned.",
    benefit: "Executives and compliance teams attest to launches in minutes rather than days.",
    icon: Gauge
  }
];

const TESTIMONIAL_QUOTES: TestimonialQuote[] = [
  {
    speaker: "Ahmed I.",
    role: "Founder, Cognoca Dista Solutions",
    quote: "It’s easy to customise our plan and adapt offers to every market. Your development team is amazing.",
    emphasis: "Cloud MLM Software turned regional complexity into an advantage for our brand.",
    icon: Quotes
  },
  {
    speaker: "Priya N.",
    role: "Engagement Director, Cloud MLM Software",
    quote: "Ahmed’s team views compensation innovation as a competitive moat. We designed the platform so experimentation and compliance move together.",
    emphasis: "Every quarter now starts with confident projections, not emergency adjustments.",
    icon: Quotes
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Ahmed I. Testimonial | Cloud MLM Software";
  const description =
    "Discover how Ahmed I. accelerates market-ready compensation updates with Cloud MLM Software. Explore the engagement roadmap, AI-enabled guardrails, and field enablement highlights.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/ahmed-i", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AhmedITestimonialPageProps = {
  params: { lang: SupportedLocale };
};

export default function AhmedITestimonialPage({ params }: AhmedITestimonialPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const testimonialsHref = buildLocalizedPath("/testimonials", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(59,130,246,0.2),transparent_58%),radial-gradient(circle_at_48%_80%,rgba(16,185,129,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-100/70 px-4 py-1 font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200">
                Client success story
              </span>
              <Link href={testimonialsHref} className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80">
                View all testimonials
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Ahmed I. builds agile compensation journeys with Cloud MLM Software.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Cognoca Dista Solutions moved from static compensation cycles to a living operating model. Together we designed configurable plan templates, AI-guided approvals, and insight loops that keep every market launch-ready.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan your roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore the demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Featured quote
              </span>
              <p className="text-lg font-medium text-foreground">
                “It’s easy to customise our plan and adapt offers to every market. Your development team is amazing.”
              </p>
              <p className="text-sm text-muted-foreground">Ahmed I. — Founder, Cognoca Dista Solutions</p>
            </div>
            <dl className="grid gap-3 sm:grid-cols-2">
              {SNAPSHOT.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/60 bg-background p-4 text-sm shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/15 dark:via-slate-950 dark:to-emerald-900/30">
          <div className="absolute -top-24 right-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute -bottom-24 left-12 h-56 w-56 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-800/40" aria-hidden />
          <div className="relative space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Impact in the first quarter</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Outcome metrics Ahmed’s board tracks every Monday.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {IMPACT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div>
                        <p className="text-3xl font-semibold text-foreground">{card.metric}</p>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">{card.title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:border-border/40 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Experience architecture</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why agile compensation became Ahmed’s competitive edge.</h2>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Each pillar below combines structured governance with empathetic field enablement. The result is a platform that invites experimentation without risking compliance.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {EXPERIENCE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{pillar.detail}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Proof in action</p>
                  <p className="text-sm text-muted-foreground">{pillar.proof}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Delivery timeline</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Twelve-week cadence from discovery to AI-augmented rollout.</h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Every sprint produced shippable value so Ahmed’s leadership team could measure momentum and course-correct fast.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {DELIVERY_TIMELINE.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{item.headline}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-muted-foreground dark:border-primary/30 dark:bg-primary/10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Outcome</p>
                  <p className="mt-1 text-sm text-foreground">{item.outcome}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Enablement layers</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Operational streams that keep momentum compounding.</h2>
            <p className="text-sm text-muted-foreground">
              Beyond technology, we assembled rituals and dashboards for Ahmed’s strategists, country directors, and finance leads so their conversations stay rooted in living data.
            </p>
          </div>
          <div className="grid gap-6">
            {ENABLEMENT_STREAMS.map((stream) => {
              const Icon = stream.icon;
              return (
                <article key={stream.title} className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-muted/40 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{stream.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{stream.detail}</p>
                  <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm text-foreground dark:border-primary/30 dark:bg-primary/10">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Business benefit</p>
                    <p className="mt-1 text-sm text-foreground">{stream.benefit}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Voices from the partnership</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">The sentiment behind the metrics.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {TESTIMONIAL_QUOTES.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.speaker} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{item.role}</p>
                    <h3 className="mt-2 text-xl font-semibold text-foreground">{item.speaker}</h3>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.quote}</p>
                {item.emphasis ? (
                  <p className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-foreground dark:border-primary/30 dark:bg-primary/10">
                    {item.emphasis}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-emerald-900/30">
          <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to choreograph your own agile plan?</h2>
              <p className="text-sm text-muted-foreground">
                Bring us your goals, current data landscape, and target launch cadence. We will craft a path that keeps your field inspired and your leadership confident in every metric.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Start a conversation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Watch configuration in action
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">What to prepare</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current commission rules and any manual workarounds.</li>
                <li>• Desired launch schedule across regions and languages.</li>
                <li>• Integrations, analytics, and compliance sign-off needs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
