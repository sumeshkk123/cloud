import type { ComponentType } from "react";
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
  Droplets,
  FlaskConical,
  Globe2,
  HandHeart,
  Leaf,
  LineChart,
  Sparkles,
  Sprout,
  Users
} from "lucide-react";
import { ChartLineUp, Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Programme = {
  title: string;
  description: string;
  support: string;
  icon: IconType;
};

type Enablement = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$385M",
    detail: "For Days drives $385M in wellness and beauty sales with over 300,000 loyal members in Japan.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1997",
    detail: "Tokyo-born business blending Japanese nutritional science with modern personal care formulations.",
    icon: Sprout
  },
  {
    label: "Employees",
    value: "276+",
    detail: "R&D, supply chain, and member success teams collaborate to sustain rapid product innovation.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "Japan",
    detail: "A dense field network thrives on community-based selling, with digital expansion plans across Asia.",
    icon: Globe2
  }
];

const WELLNESS_PILLARS: Pillar[] = [
  {
    title: "Nucleic acid nutrition",
    description:
      "Flagship supplements harness RNA/DNA research to support cellular renewal, immunity, and everyday vitality.",
    proof: "Clinical collaborations and lab testing underpin product claims for science-focused members.",
    icon: FlaskConical
  },
  {
    title: "Holistic beauty care",
    description:
      "Cosmetic lines feature fermentation technology, botanicals, and advanced delivery systems engineered in Japan.",
    proof: "Beauty advisors demonstrate texture, absorption, and layering rituals during community salons.",
    icon: Droplets
  },
  {
    title: "Community-first health culture",
    description:
      "Members participate in wellness clubs, nutrition diaries, and seasonal challenges that enhance retention.",
    proof: "Regional leaders host digital check-ins and celebrate habit streaks that drive recurring orders.",
    icon: HandHeart
  },
  {
    title: "Circular product lifecycle",
    description:
      "Refill programmes and sustainable packaging appeals align with For Days’ promise of mindful consumption.",
    proof: "Collect-back initiatives and eco rewards encourage members to recycle and reorder simultaneously.",
    icon: Leaf
  }
];

const FIELD_PROGRAMMES: Programme[] = [
  {
    title: "Wellness Studio Circles",
    description:
      "Hybrid gatherings combining guided supplementation, skincare rituals, and community journaling.",
    support: "Digital kits include agenda templates, playlist suggestions, and compliance-approved scripts.",
    icon: Sparkles
  },
  {
    title: "Member Success Pathway",
    description:
      "Onboarding flow that nurtures new members with 30-60-90 day health missions and exclusive mentorship.",
    support: "Automated nudges surface personalised tips, coach videos, and reorder reminders.",
    icon: Users
  },
  {
    title: "Innovation Insider Launches",
    description:
      "Pre-launch experience granting top leaders lab previews, product labs, and shareable scientific content.",
    support: "AI-curated microsites equip distributors with assets and Q&A chat support during launch windows.",
    icon: ChartLineUp
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Nutrient intelligence hub",
    description:
      "Align member health profiles, recommended stacks, and compliance messaging inside a guided consultant workspace.",
    outcome: "Consultants deliver hyper-personalised plans with evidence-backed talking points.",
    icon: FlaskConical
  },
  {
    title: "Community ritual tracker",
    description:
      "Monitor engagement signals across studio circles, check-ins, and digital challenges to keep momentum high.",
    outcome: "Leaders replicate thriving cohorts and intervene before enthusiasm dips.",
    icon: HandHeart
  },
  {
    title: "Launch readiness console",
    description:
      "Coordinate product launches—from sample allocations to training modules and AI content prompts—in one view.",
    outcome: "Every rollout feels choreographed, reducing inventory shock and messaging drift.",
    icon: Sparkles
  },
  {
    title: "Sustainability impact ledger",
    description:
      "Track refill adoption, recycling participation, and eco rewards to inform storytelling and CSR updates.",
    outcome: "For Days quantifies its circular economy promises and inspires member advocacy.",
    icon: Leaf
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 71,
  label: "Trust momentum",
  summary: "Reflects scientific credibility, member retention, and sustainability progress across the For Days network."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "For Days MLM Company Strategy — Japanese Wellness & Beauty Blueprint";
  const description =
    "Review For Days’ revenue signals, wellness pillars, member programmes, and Cloud MLM Software enablement for sustainable, science-led growth.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath(currentLocale, "/mlm-companies/for-days");
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath(locale, "/mlm-companies/for-days"), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath(locale, "/mlm-companies/for-days"),
      type: "article"
    }
  };
}

export default function ForDaysPage({ params }: { params: { lang: Locale } }) {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const demoHref = buildLocalizedPath(locale, "/free-mlm-software-demo");
  const contactHref = buildLocalizedPath(locale, "/contact");
  const companiesHref = buildLocalizedPath(locale, "/mlm-companies");

  return (
    <div className="space-y-24 pb-20 pt-16">
      <section className="relative isolate overflow-hidden border-y border-primary/25 bg-gradient-to-br from-primary/5 via-background to-background py-20 dark:from-primary/20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/20 dark:bg-primary/20">
              Health & beauty • Rank #37
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                For Days — Science-led wellness & community commerce
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                For Days serves 300,000 members with nucleic-acid supplements and beauty innovations. Use this briefing to
                orchestrate member rituals, launch excellence, and sustainability storytelling with AI-backed discipline.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Tour the wellness platform
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Design my launch plan
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  Back to companies index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “For Days prides itself on high-quality supplements and cosmetics, continuously innovating to meet members’
              evolving wellness expectations.”
            </p>
          </div>
          <aside className="space-y-6 rounded-3xl border border-primary/25 bg-background/90 p-8 shadow-xl dark:border-primary/15 dark:bg-slate-950/80">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-background/95 p-6 text-center dark:border-border/40 dark:bg-slate-950/70">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {PRIMARY_TRUST_SCORE.label}
              </span>
              <span className="text-5xl font-semibold text-primary">{PRIMARY_TRUST_SCORE.score}</span>
              <p className="text-xs text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-foreground">{metric.value}</span>
                    <p className="text-xs text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Wellness pillars</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Align field training with the product truths and cultural values that make For Days a trusted Japanese wellness
            leader.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {WELLNESS_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-primary/20 bg-primary/5 p-6 dark:border-primary/15 dark:bg-primary/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-primary">{pillar.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Programmes energising growth
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            From immersive studios to launch squads, these programmes drive retention and advocacy across the For Days community.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FIELD_PROGRAMMES.map((programme) => {
            const Icon = programme.icon;
            return (
              <article
                key={programme.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{programme.title}</h3>
                <p className="text-sm text-muted-foreground">{programme.description}</p>
                <p className="text-xs font-medium text-primary">{programme.support}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-3xl border border-primary/25 bg-primary/5 p-8 dark:border-primary/20 dark:bg-primary/10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software enablement
            </h2>
            <p className="text-sm text-muted-foreground">
              Sustain For Days’ innovation cadence with a platform that ties member rituals, launches, and sustainability
              metrics together.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Schedule a platform tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Blueprint the rollout
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

