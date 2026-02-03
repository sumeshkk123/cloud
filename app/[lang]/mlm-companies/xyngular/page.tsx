import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Apple,
  Droplet,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  GraduationCap
} from "lucide-react";
import { ChartLineUp, ClipboardText, Heartbeat, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type WellnessStack = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type SupportLoop = {
  stage: string;
  focus: string;
  enablement: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  impact: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Global revenue",
    value: "$109M",
    detail: "Nutrition systems, weight management bundles, and energy innovations.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2009",
    detail: "Headquartered in Lehi, Utah with a people-first wellness mission.",
    icon: Sparkles
  },
  {
    label: "Compensation",
    value: "Multi-level plan",
    detail: "Simplifies rank progression while rewarding customer health outcomes.",
    icon: UsersThree
  },
  {
    label: "Team strength",
    value: "141 employees",
    detail: "Product formulators, science advisory, and member success specialists.",
    icon: Users
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Expanding globally with localized nutrition and habit coaching.",
    icon: MapPin
  }
];

const WELLNESS_STACK: WellnessStack[] = [
  {
    title: "Metabolic reset kits",
    description:
      "Science-backed starter kits combine supplements, shakes, and meal guides to kick-start transformation.",
    proof: "Clear, step-by-step plans minimise overwhelm and create visible wins in the first 8 days.",
    icon: Leaf
  },
  {
    title: "Daily habit boosters",
    description:
      "Energy drinks, gut health solutions, and sleep support keep members consistent beyond the initial sprint.",
    proof: "Stackable wellness routines encourage lifestyle upgrades versus quick fixes.",
    icon: Apple
  },
  {
    title: "Community accountability",
    description:
      "Members and mentors share progress, recipes, and mindset shifts inside digital and local groups.",
    proof: "Story-driven coaching unlocks retention and fuels authentic referrals.",
    icon: Activity
  },
  {
    title: "Coach enablement",
    description:
      "Training, certifications, and recognition programs elevate leaders into trusted wellness mentors.",
    proof: "Data-backed journeys highlight top performers and close skill gaps quickly.",
    icon: GraduationCap
  }
];

const SUPPORT_LOOPS: SupportLoop[] = [
  {
    stage: "Activate momentum",
    focus:
      "Guide new members through product selection, goal setting, and health assessments with human warmth.",
    enablement: "Interactive onboarding flows, AI habit prompts, and compliance-ready scripts.",
    icon: ClipboardText
  },
  {
    stage: "Coach sustainably",
    focus:
      "Blend weekly check-ins, community challenges, and personalised nutrition tweaks to prevent plateaus.",
    enablement: "Progress dashboards, ingredient education, and automated encouragement sequences.",
    icon: Heartbeat
  },
  {
    stage: "Celebrate transformation",
    focus:
      "Capture success stories, refer-a-friend journeys, and leadership paths that keep members engaged for life.",
    enablement: "Story capture tools, reward automation, and hybrid event orchestration.",
    icon: ShieldCheck
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Wellness journey hub",
    description:
      "Orchestrates assessments, product recommendations, and habit tracking into one personalised experience.",
    impact: "Creates clarity for members while surfacing upsell and retention triggers for mentors.",
    icon: Leaf
  },
  {
    title: "Coach intelligence studio",
    description:
      "Gives mentors AI summaries, compliance guidance, and follow-up cadences based on real-time results.",
    impact: "Keeps support proactive and protects the Xyngular brand voice across teams.",
    icon: GraduationCap
  },
  {
    title: "Community vitality radar",
    description:
      "Monitors group engagement, challenge completion, and sentiment to keep energy high across markets.",
    impact: "Signals when to intervene, celebrate, or launch new programming.",
    icon: Activity
  },
  {
    title: "Regulatory confidence suite",
    description:
      "Tracks ingredient claims, regional labeling, and data privacy with automated alerts and audit trails.",
    impact: "Ensures growth stays compliant while accelerating approvals for new launches.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Xyngular Wellness Community Blueprint";
  const description =
    "Discover how Xyngular’s wellness-first community scales with Cloud MLM Software—from metabolic reset kits to lifestyle coaching that drives lasting results.";
  const keywords = [
    "Xyngular wellness strategy",
    "Xyngular distributor enablement",
    "Cloud MLM Software wellness automation",
    "nutrition MLM digital tools",
    "multi-level wellness compliance"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/xyngular", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type XyngularPageProps = {
  params: { lang: SupportedLocale };
};

export default function XyngularPage({ params }: XyngularPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-emerald-900 to-lime-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.3),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(56,189,248,0.25),transparent_58%),radial-gradient(circle_at_50%_85%,rgba(190,242,100,0.28),transparent_50%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-emerald-100">
              Xyngular • Wellness transformation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Lead health journeys with science-backed products, community energy, and intelligent coaching.
            </h1>
            <p className="text-base text-emerald-50/80">
              Xyngular pairs innovative supplements, meal plans, and fitness guidance with a people-first community. Cloud MLM
              Software ensures every mentor, member, and market move in sync—keeping compliance tight and transformation tangible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Tour the wellness enablement hub
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200/60 text-emerald-100 hover:bg-emerald-500/10">
                <Link href={pricingHref}>
                  Plan my health platform rollout
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
            <div className="space-y-3 text-sm text-emerald-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-200" aria-hidden />
                Lehi, Utah • Serving members across the United States and expanding internationally
              </p>
              <p>
                “Wellness sticks when guidance, accountability, and heartfelt community travel together.”
              </p>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">Vital metrics</p>
              <h2 className="text-2xl font-semibold text-white">Xyngular growth pulse</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/25 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Transforming lives through health and community</h2>
            <p className="text-base text-muted-foreground">
              Xyngular’s scientifically backed supplements, meal plans, and fitness guides work together to spark balanced
              lifestyles. Every formulation is crafted with premium ingredients to deliver sustainable results rather than quick fixes.
            </p>
            <p className="text-base text-muted-foreground">
              Members become wellness advocates—sharing their journeys, celebrating wins, and mentoring others. Cloud MLM Software
              wraps that energy with structured data, compliance, and automation so the movement scales without losing its heart.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 dark:text-primary/70">Wellness promise</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Leaf className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Programs honor both physical transformation and mental resilience.
              </li>
              <li className="flex items-start gap-2">
                <Apple className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Nutrient education and habit scaffolding change lifestyles, not just numbers on a scale.
              </li>
              <li className="flex items-start gap-2">
                <Droplet className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Transparent sourcing and quality testing build trust with every shake and supplement.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Explore wellness services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Wellness stack
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Programs engineered for sustainable, community-powered results
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Connect metabolic kits, lifestyle boosters, and mentoring frameworks with the data layer that keeps everyone accountable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {WELLNESS_STACK.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                  {item.proof}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Member success loops</h2>
            <p className="text-sm text-muted-foreground">
              Keep every stage of the health journey intentional—from first shake to lifelong ambassador.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden border-l border-primary/30 md:block" aria-hidden />
            <div className="space-y-6">
              {SUPPORT_LOOPS.map((loop, index) => {
                const Icon = loop.icon;
                return (
                  <article
                    key={loop.stage}
                    className="relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75 md:grid-cols-[auto_1fr]"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Loop {index + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{loop.stage}</h3>
                      <p className="text-sm text-muted-foreground">{loop.focus}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {loop.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/85">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud MLM Software plays</h2>
            <p className="text-sm text-muted-foreground">
              Deliver AI-ready wellness journeys that balance empathy, science, and compliance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my wellness operating system
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
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                    <p className="text-sm text-muted-foreground">{play.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.impact}
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

