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
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  Factory,
  Globe2,
  Leaf,
  Palette,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, GlobeHemisphereEast, UsersThree } from "@phosphor-icons/react/dist/ssr";

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
  summary: string;
  proof: string;
  icon: IconType;
};

type Initiative = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type RoadmapStep = {
  phase: string;
  description: string;
};

const METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$304.5M",
    detail: "LG Household & Health Care maintains top-tier performance across Asia’s beauty market.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1947",
    detail: "A legacy brand originating in Seoul with roots in toothpaste and cosmetics.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "2,745",
    detail: "Product innovators, sustainability experts, and global field mentors.",
    icon: Users
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Portfolio architecture",
    summary: "Household care, premium skincare, and beverages coexist under a single trusted umbrella.",
    proof: "flagship lines like The History of Whoo, O Hui, and Beyond deliver K-beauty excellence and daily essentials.",
    icon: Palette
  },
  {
    title: "Sustainable stewardship",
    summary: "From refillable packaging to responsible sourcing, LG H&H embeds ESG actions within every product lifecycle.",
    proof: "Consistent sustainability reporting and eco certifications maintain consumer confidence.",
    icon: Leaf
  },
  {
    title: "Consultant empowerment",
    summary: "Hybrid retail experiences—stores, pop-ups, and social commerce—equip field leaders to deliver bespoke service.",
    proof: "Omnichannel analytics and beauty academies keep consultants data-informed and brand fluent.",
    icon: BadgeCheck
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "1. Discover & personalise",
    description: "Blend diagnostics, skin analyzers, and household surveys to curate holistic wellness bundles."
  },
  {
    phase: "2. Immerse & educate",
    description: "Host experiential labs, ingredient masterclasses, and sustainability storytelling sessions."
  },
  {
    phase: "3. Sustain & delight",
    description: "Reward responsible consumption, recycling, and subscription loyalty with exclusive benefits."
  }
];

const INITIATIVES: Initiative[] = [
  {
    title: "ESG intelligence dashboard",
    description: "Track emissions, refill participation, and sustainable sourcing across product lines.",
    highlight: "Visualise ESG impact alongside revenue to align stakeholders and regulators.",
    icon: Leaf
  },
  {
    title: "Heritage storytelling engine",
    description: "Centralise brand history, R&D milestones, and product rituals for consultant storytelling.",
    highlight: "AI co-pilots surface the right narrative for each audience segment.",
    icon: Building2
  },
  {
    title: "Omnichannel beauty console",
    description: "Combine store data, social commerce, and livestream conversions into actionable insights.",
    highlight: "Consultants receive real-time prompts to reclaim abandoned carts or schedule refills.",
    icon: Globe2
  },
  {
    title: "Manufacturing transparency",
    description: "Synchronise factory telemetry, batch quality, and compliance approvals with field communications.",
    highlight: "Assure premium quality through verifiable data flows.",
    icon: Factory
  },
  {
    title: "Community impact tracker",
    description: "Measure volunteer hours, philanthropic programmes, and wellness outreach events.",
    highlight: "Show investors and customers how purpose fuels performance.",
    icon: Sparkles
  },
  {
    title: "Risk & compliance shield",
    description: "Monitor claims, advertising, and cross-border regulatory shifts in one command centre.",
    highlight: "Automated guardrails protect brand equity from misinformation.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "LG Household & Health Care Strategic Snapshot";
  const description =
    "Review LG Household & Health Care’s $304.5M blueprint—from K-beauty heritage to ESG leadership—and see how Cloud MLM Software powers similar omnichannel excellence.";
  const keywords = [
    "LG Household & Health Care analysis",
    "K-beauty direct selling strategy",
    "LG H&H compensation insights",
    "Sustainable beauty MLM software",
    "Cloud MLM Software omnichannel"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/lg-household-healthcare", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type LgHouseholdPageProps = {
  params: { lang: SupportedLocale };
};

export default function LgHouseholdPage({ params }: LgHouseholdPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-sky-200/60 bg-gradient-to-br from-white via-[#eef6ff] to-[#f7f2ff] py-20 dark:border-sky-200/30 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_80%_26%,rgba(192,132,252,0.2),transparent_60%),radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.18),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,0.65fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              LG Household & Health Care • Seoul, South Korea
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Omnichannel K-beauty powered by heritage, science, and ESG.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                LG Household & Health Care bridges home care, premium skincare, and beverages to delight households across Asia. Translate their
                multi-category discipline into your own growth story.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Explore the AI omnichannel cockpit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-sky-500/10 text-sky-700 hover:bg-sky-500/20 dark:bg-white/10 dark:text-white">
                <Link href={pricingHref}>
                  Review platform tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-200 text-sky-800 hover:bg-sky-500/10 dark:border-white/40 dark:text-white">
                <Link href={contactHref}>
                  Partner with our architects
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-sky-200/70 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-white/20 dark:bg-slate-950/70">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-200">Growth metrics</span>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Indicators of LG H&H’s regional authority.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-2xl border border-sky-100 bg-white/90 p-4 dark:border-white/10 dark:bg-slate-900/70">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-sky-700/80 dark:text-sky-100/80">{metric.label}</p>
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-200/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars of the LG H&H advantage</h2>
          <p className="text-sm text-muted-foreground">
            Connect multi-category portfolios, sustainability commitments, and consultant empowerment for resilient growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-sky-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-sky-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.summary}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-white py-20 dark:border-border/40 dark:bg-slate-950/70">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(192,132,252,0.16),transparent_60%)]" aria-hidden />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Experience roadmap
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Deliver experiences like LG H&H.</h2>
            <p className="text-sm text-muted-foreground">
              Apply this three-phase roadmap to orchestrate discovery, immersion, and retention moments.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {ROADMAP.map((step) => (
              <article
                key={step.phase}
                className="flex h-full flex-col gap-3 rounded-3xl border border-sky-100 bg-sky-50/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
              >
                <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for ESG-forward beauty giants
          </h2>
          <p className="text-sm text-muted-foreground">
            Build the same omnichannel intelligence, compliance resilience, and impact storytelling LG H&H executes daily.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INITIATIVES.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <article
                key={initiative.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{initiative.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{initiative.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{initiative.highlight}</span>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Explore pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Book an omnichannel workshop
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
