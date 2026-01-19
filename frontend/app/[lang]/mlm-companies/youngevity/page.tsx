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
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Cpu,
  Flame,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ClipboardText, Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type PlatformPillar = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type JourneyStage = {
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
    value: "$162M",
    detail: "Nutrition, beauty, home, and lifestyle portfolios unified under one wellness umbrella.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1997",
    detail: "Mission-driven company guided by CEO Steve Wallach and a science advisory board.",
    icon: Sparkles
  },
  {
    label: "Compensation",
    value: "Multi-level plan",
    detail: "Rewards customer retention, multi-vertical sales, and leadership mentoring.",
    icon: UsersThree
  },
  {
    label: "Team members",
    value: "450 employees",
    detail: "Product formulators, manufacturing experts, and community success teams.",
    icon: Users
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Expanding internationally with digital-first education and localised experiences.",
    icon: MapPin
  }
];

const PLATFORM_PILLARS: PlatformPillar[] = [
  {
    title: "Science-backed nutrition",
    description:
      "Advanced supplements designed with clinical research and ingredient transparency to fuel holistic health.",
    highlight: "Ambassadors pair wellness assessments with bundles that match personal goals.",
    icon: Flame
  },
  {
    title: "Beauty and personal care",
    description:
      "Skincare, cosmetics, and spa products formulated to celebrate diversity while protecting skin health.",
    highlight: "Education modules keep beauty storytelling inclusive and compliance-ready.",
    icon: Sparkles
  },
  {
    title: "Gourmet coffee and lifestyle",
    description:
      "Artisan beverages, home solutions, and curated accessories round out daily rituals for families.",
    highlight: "Cross-selling strategies unite wellness, indulgence, and community experiences.",
    icon: Coffee
  },
  {
    title: "Data-guided community",
    description:
      "A people-first culture where Ambassadors share journeys, celebrate wins, and mentor new advocates.",
    highlight: "Content libraries and social learning keep momentum high between product launches.",
    icon: Handshake
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: "Onboard with purpose",
    focus:
      "Introduce new Ambassadors to the brand pillars, product science, and storytelling frameworks that build credibility.",
    enablement: "Interactive playbooks, AI-powered quizzes, and compliance guardrails accelerate confidence.",
    icon: ClipboardText
  },
  {
    stage: "Curate multi-vertical value",
    focus:
      "Combine nutrition, beauty, and lifestyle solutions into personalised wellness stacks and subscription journeys.",
    enablement: "Smart recommendation engines and inventory alerts keep carts optimised and timely.",
    icon: Cpu
  },
  {
    stage: "Scale community impact",
    focus:
      "Coach teams to run events, lead educational pods, and capture transformation stories that fuel retention.",
    enablement: "Engagement dashboards, mentorship matching, and recognition programs sustain growth.",
    icon: Handshake
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Holistic product fabric",
    description:
      "Connects nutrition, beauty, and lifestyle inventory with recommendation logic and clean-label proof points.",
    impact: "Empowers Ambassadors to tailor bundles backed by science and supply transparency.",
    icon: Flame
  },
  {
    title: "Ambassador enablement suite",
    description:
      "Provides CRM journeys, AI storytelling prompts, and compliance checks across every communication channel.",
    impact: "Shortens ramp times and keeps messaging aligned with brand standards.",
    icon: Sparkles
  },
  {
    title: "Community intelligence hub",
    description:
      "Monitors event engagement, content performance, and team health to guide leadership coaching.",
    impact: "Highlights where to celebrate, intervene, or launch new education tracks.",
    icon: Users
  },
  {
    title: "Sustainability & quality vault",
    description:
      "Captures sourcing credentials, manufacturing audits, and third-party testing for consumer transparency.",
    impact: "Elevates trust while equipping Ambassadors with proof during every consultation.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Youngevity Community Wellness Blueprint";
  const description =
    "See how Youngevity unites wellness, beauty, and lifestyle commerce—powered by Cloud MLM Software for data-driven Ambassador success.";
  const keywords = [
    "Youngevity wellness strategy",
    "Youngevity ambassador tools",
    "Cloud MLM Software Youngevity",
    "multi-vertical MLM enablement",
    "holistic wellness direct selling"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/youngevity", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type YoungevityPageProps = {
  params: { lang: SupportedLocale };
};

export default function YoungevityPage({ params }: YoungevityPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-indigo-900 to-rose-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(244,114,182,0.28),transparent_60%),radial-gradient(circle_at_52%_88%,rgba(45,212,191,0.25),transparent_55%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-indigo-100">
              Youngevity • Holistic wellness platform
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Fuse nutrition, beauty, and lifestyle into one data-guided Ambassador experience.
            </h1>
            <p className="text-base text-indigo-50/80">
              Youngevity’s community thrives on scientific excellence, premium ingredients, and heartfelt advocacy. Cloud MLM Software
              turns that passion into orchestrated growth—keeping every product story compliant, personalised, and inspiring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the Youngevity cockpit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-indigo-200/60 text-indigo-100 hover:bg-indigo-500/10">
                <Link href={pricingHref}>
                  Plan my multi-vertical rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-indigo-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-indigo-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-200" aria-hidden />
                United States • Global leadership helmed by CEO Steve Wallach
              </p>
              <p>
                “When science, storytelling, and support unite, communities achieve both wellness and wealth.”
              </p>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">Pulse metrics</p>
              <h2 className="text-2xl font-semibold text-white">Youngevity momentum</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/25 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-indigo-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-indigo-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-indigo-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Elevating health and wealth through community and innovation</h2>
            <p className="text-base text-muted-foreground">
              Youngevity’s product families—from nutritional science to skincare and gourmet coffee—are crafted to help customers feel
              their best. Rigorous research and top-tier sourcing keep every formulation honest and effective.
            </p>
            <p className="text-base text-muted-foreground">
              Ambassadors do more than sell; they educate, mentor, and support. Cloud MLM Software brings structure to that people-first
              energy with compliant education, automated coaching, and insights that power lifelong relationships.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 dark:text-primary/70">Community lens</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Education-first culture turns product knowledge into believable impact stories.
              </li>
              <li className="flex items-start gap-2">
                <Handshake className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Ambassadors form support networks that convert transactions into friendships.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Ethical sourcing and transparency maintain trust across diverse product categories.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Discover community services
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
            Platform pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            One community. Many verticals. Unified by science and storytelling.
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Empower Ambassadors to curate solutions across wellness, beauty, and lifestyle without losing focus or compliance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PLATFORM_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                  {pillar.highlight}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ambassador success journey</h2>
            <p className="text-sm text-muted-foreground">
              Guide every advocate from onboarding to legacy leadership with clarity and compassion.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden border-l border-primary/30 md:block" aria-hidden />
            <div className="space-y-6">
              {JOURNEY_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <article
                    key={stage.stage}
                    className="relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75 md:grid-cols-[auto_1fr]"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Phase {index + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{stage.stage}</h3>
                      <p className="text-sm text-muted-foreground">{stage.focus}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {stage.enablement}
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
              Unite Youngevity’s verticals with AI-ready orchestration that honours community and compliance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my Youngevity platform
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

