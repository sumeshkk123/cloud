import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Factory,
  Gauge,
  Globe2,
  GraduationCap,
  LineChart,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Users
} from "lucide-react";
import {
  ChartLineUp,
  ChatsCircle,
  ClipboardText,
  CompassTool,
  CookingPot,
  Handshake
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  evidence: string;
  icon: IconType;
};

type FieldProgram = {
  title: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  description: string;
  icon: IconType;
};

type Watchpoint = {
  title: string;
  description: string;
  response: string;
  icon: IconType;
};

type Readiness = {
  title: string;
  score: string;
  narrative: string;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Revenue signal",
    value: "$226M",
    description: "Direct Selling News places Cutco’s kitchenware portfolio near $226 million in annual revenue.",
    icon: LineChart
  },
  {
    label: "Established",
    value: "1949",
    description: "American-made craftsmanship forged in Olean, New York with lifetime service promises.",
    icon: Factory
  },
  {
    label: "People & infrastructure",
    value: "700+ employees",
    description: "Manufacturing, customer care, and Vector support teams powering the demo-first field.",
    icon: Users
  },
  {
    label: "Sales method",
    value: "Single-level demos",
    description: "Vector Marketing leans on person-to-person events, referrals, and sharpened storytelling.",
    icon: UtensilsCrossed
  }
];

const SIGNATURE_PILLARS: Pillar[] = [
  {
    title: "American-made cutlery leadership",
    description:
      "Lifetime sharpening, full-tang blades, and a heritage finishing process underpin the premium price point.",
    evidence: "Factory tours and service guarantees anchor the product story for every presentation.",
    icon: CookingPot
  },
  {
    title: "Story-driven demo experiences",
    description:
      "Reps choreograph in-home or virtual kitchen demos to showcase utility, ergonomics, and warranty in real time.",
    evidence: "Playbooks emphasise sensory moments—like tomato testing—to differentiate from mass retail knives.",
    icon: ChatsCircle
  },
  {
    title: "Mentorship-first field culture",
    description:
      "Vector leadership pipelines teach scheduling discipline, customer follow-up, and referral scripting.",
    evidence: "Daily huddles and summer program captain roles give new reps structured coaching.",
    icon: Handshake
  },
  {
    title: "Service keeps retention high",
    description:
      "Sharpening, trade-in programmes, and product add-ons extend lifetime value long after the first demo.",
    evidence: "Warranty fulfilment and service events generate repeat orders without compensation redesign.",
    icon: ShieldCheck
  }
];

const FIELD_PROGRAMS: FieldProgram[] = [
  {
    title: "Kitchen discovery sessions",
    summary: "Small-group, sensory-heavy demos designed to convert households in a single sitting.",
    detail:
      "Use sample kits, cooking scenarios, and testimonials to move prospects from curiosity to commitment during the appointment.",
    icon: CompassTool
  },
  {
    title: "Campus rep acceleration",
    summary: "Seasonal college recruiting fuels fresh lead lists and social reach.",
    detail:
      "Structured onboarding sprints, compliance briefings, and leadership development keep student teams aligned with brand standards.",
    icon: GraduationCap
  },
  {
    title: "Sharpening lifecycle loops",
    summary: "Service reminders and upgrade calls re-engage the customer base year-round.",
    detail:
      "Blend CRM nudges, sharpening clinics, and exclusive bundles to protect referral density and average order values.",
    icon: Handshake
  }
];

const OPPORTUNITY_SIGNALS: Opportunity[] = [
  {
    title: "Premium storytelling advantage",
    description:
      "Lifetime guarantees and American manufacturing justify premium pricing, giving reps a differentiated pitch in competitive kitchens.",
    icon: Sparkles
  },
  {
    title: "Referral flywheel potential",
    description:
      "Satisfied customers often host their own demos, letting leaders engineer micro-events without heavy paid media.",
    icon: Globe2
  },
  {
    title: "Hybrid demo innovation",
    description:
      "Blending virtual tastings, short-form video, and sample drop-offs opens new channels beyond traditional in-home parties.",
    icon: Lightbulb
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Student recruiting scrutiny",
    description:
      "Vector’s collegiate programmes face ongoing media attention and regulatory interest around earnings claims.",
    response: "Deploy auditable onboarding, income disclosures, and coaching dashboards to uphold transparency.",
    icon: ClipboardText
  },
  {
    title: "Scheduling & fulfilment pressure",
    description:
      "Manual demo booking and kit logistics can strain local offices during peak seasons if not digitised.",
    response: "Automate calendars, inventory alerts, and territory heatmaps before scaling new cohorts.",
    icon: Gauge
  },
  {
    title: "Premium pricing objections",
    description:
      "Price-sensitive prospects compare Cutco with mass market knives unless value proof points are crystal clear.",
    response: "Equip reps with ROI calculators, testimonial libraries, and objection-handling workflows.",
    icon: ClipboardCheck
  }
];

const READINESS_BENCHMARKS: Readiness[] = [
  {
    title: "Brand trust velocity",
    score: "71/100",
    narrative:
      "DSN Global 100 placement and lifetime guarantees give Cutco credibility, yet messaging must keep pace with modern buyers."
  },
  {
    title: "Field execution discipline",
    score: "66/100",
    narrative:
      "Demo-led selling wins when scheduling, sample kit prep, and post-call follow-up stay tightly choreographed."
  },
  {
    title: "Digital enablement runway",
    score: "62/100",
    narrative:
      "Opportunities remain to integrate AI prompts, customer data, and logistics trackers into the day-to-day Vector workflow."
  }
];

const CLOUD_ENABLEMENT: CloudPlay[] = [
  {
    title: "Demo orchestration engine",
    description:
      "Coordinate booking, sample kit readiness, and personalised agendas so every demo starts with confident storytelling.",
    outcome: "Leaders monitor conversion signals in real time while consultants focus on customer experience.",
    icon: ChartLineUp
  },
  {
    title: "Sharpening lifecycle CRM",
    description:
      "Automate service reminders, accessory upsells, and warranty touchpoints to extend lifetime value and referral momentum.",
    outcome: "The platform keeps households connected to the brand beyond the first purchase cycle.",
    icon: ClipboardCheck
  },
  {
    title: "AI-assisted talking points",
    description:
      "Guide reps through compliant narratives, objection handling, and bundle recommendations tailored to each kitchen.",
    outcome: "Field teams stay on-message while delighting customers with personalised insights.",
    icon: Lightbulb
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 71,
  label: "Trust barometer",
  summary: "Composite of compliance posture, customer sentiment, and opportunity realism across the Cutco brand."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Cutco/Vector Marketing MLM Company Analysis & Field Playbook";
  const description =
    "Explore Cutco/Vector Marketing’s premium kitchenware opportunity, sales model, and enablement strategies backed by Cloud MLM Software.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath(currentLocale, "/mlm-companies/cutcovector-marketing");
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath(locale, "/mlm-companies/cutcovector-marketing"), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath(locale, "/mlm-companies/cutcovector-marketing"),
      type: "article"
    }
  };
}

export default function CutcoVectorMarketingPage({ params }: { params: { lang: Locale } }) {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const demoHref = buildLocalizedPath(locale, "/free-mlm-software-demo");
  const contactHref = buildLocalizedPath(locale, "/contact");
  const indexHref = buildLocalizedPath(locale, "/mlm-companies");

  const gaugeAngle = PRIMARY_TRUST_SCORE.score * 3.6;
  const gaugeStyle: CSSProperties = {
    backgroundImage: `conic-gradient(hsl(var(--primary)) 0deg ${gaugeAngle}deg, hsl(var(--muted)) ${gaugeAngle}deg 360deg)`
  };

  return (
    <div className="space-y-24 pb-20 pt-16">
      <section className="relative isolate overflow-hidden border-y border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background py-16 dark:from-primary/10">
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.75fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/20 dark:bg-primary/15">
              DSN Global 100 • Rank #56
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cutco/Vector Marketing MLM Company Playbook
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Cutco pairs American-made cutlery with Vector Marketing’s person-to-person sales engine. Use this briefing to
                understand the brand narrative, field rituals, and the enablement layer needed to operate as a thought-leading
                knife and kitchenware organisation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Request platform tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Talk to a strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={indexHref}>
                  View MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              Olean, New York • United States
            </p>
            <p className="text-sm text-muted-foreground">
              “What truly sets Cutco/Vector Marketing apart is our people-first approach. Representatives are passionate
              advocates who share personal experiences and successes, transforming business interactions into meaningful
              connections.”
            </p>
          </div>

          <aside className="relative grid gap-8 rounded-3xl border border-primary/30 bg-background/90 p-8 shadow-xl backdrop-blur dark:border-primary/15 dark:bg-slate-950/80">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-border/60 bg-background/95 p-6 text-center dark:border-border/40 dark:bg-slate-950/70">
              <div
                className="relative flex h-44 w-44 items-center justify-center rounded-full p-5"
                style={gaugeStyle}
                aria-hidden
              >
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-background text-center shadow-inner dark:bg-slate-950">
                  <span className="text-4xl font-semibold text-foreground">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                    <span className="text-xl font-semibold text-foreground">{metric.value}</span>
                    <p className="text-xs text-muted-foreground">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Signature craftsmanship pillars
          </h2>
          <p className="text-sm text-muted-foreground">
            Translate Cutco’s craftsmanship narrative into actionable enablement pillars. Each theme captures why the brand
            holds a premium position and how leaders can reinforce that status in every customer interaction.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SIGNATURE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/75"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-primary">{pillar.evidence}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Field programmes that sustain growth
            </h2>
            <p className="text-sm text-muted-foreground">
              These signature programmes show how Vector leaders keep the field sharp, seasonal, and customer obsessed. Layer
              them into your operations with data, automation, and AI guardrails.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FIELD_PROGRAMS.map((program) => {
              const Icon = program.icon;
              return (
                <article
                  key={program.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-primary/25 bg-primary/5 p-6 dark:border-primary/20 dark:bg-primary/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                  <p className="text-sm font-medium text-primary/80 dark:text-primary/90">{program.summary}</p>
                  <p className="text-sm text-muted-foreground">{program.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Opportunity radar & leadership watchpoints
            </h2>
            <p className="text-sm text-muted-foreground">
              Balance your launch playbook with upside narratives and the governance levers required to protect the Cutco
              promise.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
              <h3 className="text-xl font-semibold text-foreground">Growth windows</h3>
              <div className="space-y-4">
                {OPPORTUNITY_SIGNALS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 rounded-2xl border border-border/60 p-4 dark:border-border/40">
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-primary/25 bg-primary/5 p-6 dark:border-primary/20 dark:bg-primary/10">
              <h3 className="text-xl font-semibold text-foreground">Watch closely</h3>
              <div className="space-y-4">
                {WATCHPOINTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 rounded-2xl border border-primary/30 p-4 dark:border-primary/25">
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                        <p className="text-xs font-medium text-primary">{item.response}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Readiness benchmarks for leadership teams
          </h2>
          <p className="text-sm text-muted-foreground">
            Gauge how launch-ready your organisation is before scaling a Cutco-esque operation. These indicators merge
            sentiment, operations, and digital maturity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {READINESS_BENCHMARKS.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.title}</p>
                <span className="text-4xl font-semibold text-primary">{item.score}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.narrative}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-3xl border border-primary/25 bg-primary/5 p-8 dark:border-primary/20 dark:bg-primary/10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How Cloud MLM Software elevates Cutco-style programmes
            </h2>
            <p className="text-sm text-muted-foreground">
              Build a unified platform that manages demos, compliance, inventory, and post-sale service without burdening the
              field. Our AI-first architecture keeps your brand story consistent in every kitchen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Launch a guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Design my rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {CLOUD_ENABLEMENT.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="text-xs font-medium text-primary">{item.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

