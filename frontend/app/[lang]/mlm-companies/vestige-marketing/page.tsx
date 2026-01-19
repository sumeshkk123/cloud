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
  Factory,
  Globe2,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ClipboardText, DeviceMobile, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type GrowthMetric = {
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

type FieldMotion = {
  stage: string;
  narrative: string;
  enablement: string;
  icon: IconType;
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

const GROWTH_METRICS: GrowthMetric[] = [
  {
    label: "Founded",
    value: "2004",
    detail: "Gautam Bali, Kanwar Bir Singh, and Deepak Sood established Vestige in New Delhi, India.",
    icon: Factory
  },
  {
    label: "Core promise",
    value: "Health • Wealth • Wellbeing",
    detail: "Supplements, personal care, agri, and home solutions support holistic lifestyles.",
    icon: Leaf
  },
  {
    label: "Distributor family",
    value: "3M+ Vestigians",
    detail: "Entrepreneurs across India, UAE, Bangladesh, Ghana, and beyond.",
    icon: Users
  },
  {
    label: "Recognitions",
    value: "Top Indian DSA rankings",
    detail: "Featured in Direct Selling News Global 100 and Great Place to Work® India listings.",
    icon: Award
  },
  {
    label: "Compensation",
    value: "Hybrid binary/unilevel",
    detail: "Retail profits, leadership bonuses, and elite travel tied to verified customer volume.",
    icon: ChartLineUp
  }
];

const SIGNATURE_PILLARS: Pillar[] = [
  {
    title: "Make India healthier",
    description:
      "Nutrition, immunity, personal care, and home hygiene portfolios are crafted specifically for regional needs.",
    proof: "R&D partnerships with Indian nutraceutical labs and ayurvedic specialists.",
    icon: Leaf
  },
  {
    title: "Opportunity with dignity",
    description:
      "Skill academies, women entrepreneur cohorts, and digital literacy programmes elevate Vestigians.",
    proof: "Vestige Academy certificates and success stories highlighted at national rallies.",
    icon: UsersThree
  },
  {
    title: "Compliance resilience",
    description:
      "Alignment with India’s Consumer Protection (Direct Selling) Rules and global expansion regulations.",
    proof: "Legal briefings and compliance advisories shared with the field each quarter.",
    icon: ShieldCheck
  }
];

const FIELD_MOTIONS: FieldMotion[] = [
  {
    stage: "Profile wellness goals",
    narrative:
      "Consultants map lifestyle habits, regional health concerns, and budget expectations before prescribing kits.",
    enablement: "Digital catalogues, vernacular assessments, and regional nutrition explainers.",
    icon: ClipboardText
  },
  {
    stage: "Deliver hybrid experiences",
    narrative:
      "Product demos, community health camps, and WhatsApp education series keep customers engaged.",
    enablement: "Event automation, sample tracking, and multilingual content libraries.",
    icon: DeviceMobile
  },
  {
    stage: "Mentor ethical leaders",
    narrative:
      "Leadership pods focus on coaching, compliance refreshers, and purpose-driven recognition.",
    enablement: "Performance dashboards, rule-of-law alerts, and impact storytelling prompts.",
    icon: UsersThree
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Regulatory vigilance",
    risk: "India’s direct selling regulations and product standards evolve rapidly.",
    mitigation: "Integrate compliance alerts, automate claim approvals, and maintain state-specific playbooks.",
    icon: ShieldCheck
  },
  {
    title: "Inventory reliability",
    risk: "Rapid expansion demands resilient supply chains to avoid stock-outs during promotions.",
    mitigation: "Predict regional demand, communicate queues, and offer smart substitutions.",
    icon: Factory
  },
  {
    title: "Digital consistency",
    risk: "Hybrid events must feel premium across metros and tier-3 cities alike.",
    mitigation: "Provide turnkey live stream kits, vernacular scripts, and impact reporting templates.",
    icon: Sparkles
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Wellness recommendation engine",
    description:
      "Matches customer profiles with curated kits, habit plans, and regional nutrition advice.",
    outcome: "Improves conversion while keeping claims compliant and culturally relevant.",
    icon: Leaf
  },
  {
    title: "Compliance co-pilot",
    description:
      "Maps Consumer Protection rules, SOPs, and income disclosures into guided workflows.",
    outcome: "Reduces legal risk and builds distributor confidence in every market.",
    icon: ShieldCheck
  },
  {
    title: "Impact storytelling hub",
    description:
      "Automates collection of transformation stories, CSR metrics, and recognition moments.",
    outcome: "Keeps rallies, social feeds, and partner pitches fuelled with fresh narratives.",
    icon: Sparkles
  },
  {
    title: "Leadership health radar",
    description:
      "Tracks coaching cadence, digital adoption, and cross-border momentum for expansion teams.",
    outcome: "Highlights where to invest in academies, product launches, or compliance support.",
    icon: UsersThree
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 66,
  label: "Wellness trust index",
  summary: "Combines regulatory readiness, distributor sustainability, and community impact across Vestige markets."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#22c55e ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(16, 185, 129, 0.25) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Vestige Marketing Growth & Compliance Blueprint";
  const description =
    "Discover how Vestige Marketing empowers wellness entrepreneurs across India and beyond, and how Cloud MLM Software accelerates compliant, purpose-driven expansion.";
  const keywords = [
    "Vestige Marketing analysis",
    "Vestige compensation plan",
    "Indian direct selling software",
    "health and wellness MLM India",
    "Cloud MLM Software wellness"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/vestige-marketing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type VestigePageProps = {
  params: { lang: SupportedLocale };
};

export default function VestigePage({ params }: VestigePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-emerald-900 to-amber-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(16,185,129,0.32),transparent_55%),radial-gradient(circle_at_82%_30%,rgba(250,204,21,0.28),transparent_58%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-100">
              Vestige Marketing • Health & opportunity
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Scale wellness, honour compliance, and celebrate inclusive entrepreneurship.
            </h1>
            <p className="text-base text-emerald-50/80">
              Vestige’s growth story is powered by product quality, skill academies, and community impact. Pair that spirit with
              automation and analytics that keep every market trusted.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the growth cockpit
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
                  Review technology bundles
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
                New Delhi, India • Expanding across Asia, Africa, and the GCC
              </p>
              <p>
                “Skill, sincerity, and science create lasting networks. Data-backed enablement keeps that promise alive in every
                city.”
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
              {GROWTH_METRICS.map((metric) => {
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars that keep Vestige trusted</h2>
            <p className="text-sm text-muted-foreground">
              Reinforce these themes in every rally, training, and digital campaign to align growth with purpose.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {SIGNATURE_PILLARS.map((pillar) => {
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Field motions for sustainable growth</h2>
              <p className="text-sm text-muted-foreground">
                Align product passion with disciplined execution so every Vestigian thrives responsibly.
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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Watchpoints to manage</h2>
              <p className="text-sm text-muted-foreground">
                Stay ahead of the realities a fast-scaling Indian wellness brand navigates daily.
              </p>
            </div>
            <div className="space-y-5">
              {WATCHPOINTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-primary/25 bg-primary/5 p-5 dark:border-primary/20 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.risk}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {item.mitigation}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software activations for Vestige leaders
            </h2>
            <p className="text-sm text-muted-foreground">
              We build platforms that respect regulation, celebrate culture, and keep data at the heart of wellness journeys.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design my expansion blueprint
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

