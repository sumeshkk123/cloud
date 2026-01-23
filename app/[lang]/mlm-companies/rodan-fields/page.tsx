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
  Droplet,
  FlaskConical,
  Globe2,
  Microscope,
  ShieldCheck,
  Sparkles,
  Users2,
  Vial
} from "lucide-react";
import { ChartLineUp, HandHeart, UsersFour, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ClinicalPillar = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type CommunityPlay = {
  title: string;
  summary: string;
  proof: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const RODAN_FIELDS_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$1.5B+",
    detail: "Dermatologist-developed regimens trusted by discerning skincare advocates.",
    icon: Sparkles
  },
  {
    label: "Founded",
    value: "2008 · San Francisco",
    detail: "Created by Dr. Katie Rodan & Dr. Kathy Fields to deliver clinical results at home.",
    icon: Microscope
  },
  {
    label: "Consultant community",
    value: "340+ employees & brand representatives",
    detail: "Skin coaches delivering personalised regimens digitally and in-person.",
    icon: Users2
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Expanding through digital diagnostics and global e-commerce initiatives.",
    icon: Globe2
  },
  {
    label: "Product focus",
    value: "Cosmetics & personal care",
    detail: "Targeted regimens, derm-inspired tools, and ingredient-led boosters.",
    icon: FlaskConical
  },
  {
    label: "Sales motion",
    value: "Consultative skincare",
    detail: "Guided assessments, regimen stacking, and ongoing results tracking.",
    icon: HandHeart
  }
];

const CLINICAL_PILLARS: ClinicalPillar[] = [
  {
    title: "Dermatology-grade innovation",
    description:
      "Rodan + Fields pairs clinically-tested formulas with precise ingredient sequencing to deliver visible results.",
    emphasis: "Consultants turn complex science into simple daily rituals that build trust quickly.",
    icon: Vial
  },
  {
    title: "Targeted regimen architecture",
    description:
      "From acne to aging, each regimen is designed as a complete pathway—cleanse, treat, moisturise, protect.",
    emphasis: "Custom boosters and tools allow consultants to tailor journeys without sacrificing consistency.",
    icon: Droplet
  },
  {
    title: "Impact beyond the mirror",
    description:
      "Purpose programmes and social impact initiatives empower consultants to create change in their communities.",
    emphasis: "Confidence transformations inspire storytelling that drives customer loyalty and referrals.",
    icon: Sparkles
  }
];

const COMMUNITY_PLAYS: CommunityPlay[] = [
  {
    title: "Skin coaching experiences",
    summary:
      "Consultants host skin labs, virtual consults, and AI-powered diagnostics to personalise regimens in minutes.",
    proof: "Conversion lifts when experiences combine data-backed assessments with take-home routines.",
    icon: UsersThree
  },
  {
    title: "Progress storytelling",
    summary:
      "Before-and-after journals, milestone check-ins, and community recognition keep customers engaged across cycles.",
    proof: "Automated progress touchpoints boost reorder rates and regimen expansion.",
    icon: HandHeart
  },
  {
    title: "Thought leadership",
    summary:
      "Consultants share dermatologist insights, ingredient education, and social impact stories across channels.",
    proof: "Content performance improves when assets are on-brand, compliant, and easy to repurpose.",
    icon: UsersFour
  }
];

const CLOUD_RODAN_FIELDS_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Derm-grade knowledge hub",
    description:
      "Centralise regimen guides, ingredient breakdowns, and compliance-approved messaging for every skin concern.",
    payoff: "Equip consultants with accurate, confident language that reinforces credibility.",
    icon: Microscope
  },
  {
    title: "Personalised regimen engine",
    description:
      "Map quiz responses, lifestyle insights, and progress photos into AI-assisted recommendations and follow-ups.",
    payoff: "Deliver bespoke plans while ensuring consistency with brand protocols.",
    icon: ShieldCheck
  },
  {
    title: "Launch and campaign studio",
    description:
      "Automate teaser flows, sampling programmes, and post-launch nurture for new regimens and devices.",
    payoff: "Maximise every product drop without overwhelming field leaders.",
    icon: FlaskConical
  },
  {
    title: "Impact analytics",
    description:
      "Track regimen adherence, customer sentiment, and consultant education milestones in real time.",
    payoff: "Leadership can scale best practices, spotlight top performers, and proactively support teams.",
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Rodan + Fields Company Spotlight & Dermatology-Grade Enablement";
  const description =
    "Explore how Rodan + Fields blends clinical innovation with consultant-led coaching—and how Cloud MLM Software powers diagnostics, launches, and confidence-building journeys.";
  const keywords = [
    "Rodan and Fields MLM review",
    "Dermatology direct selling software",
    "Rodan + Fields consultant tools",
    "Cloud MLM Software for skincare brands",
    "AI skin analysis platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/rodan-fields", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RodanFieldsPageProps = {
  params: { lang: SupportedLocale };
};

export default function RodanFieldsPage({ params }: RodanFieldsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f4f9ff] via-[#f0f5ff] to-[#f3fcff] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-sky-950/40">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(14,165,233,0.18),transparent_60%),radial-gradient(circle_at_50%_88%,rgba(125,211,252,0.18),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-200">
              <span className="rounded-full border border-sky-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Dermatologist-developed
              </span>
              <span className="rounded-full border border-indigo-200/60 bg-indigo-50/80 px-4 py-1 text-indigo-600 shadow-sm backdrop-blur dark:border-indigo-400/40 dark:bg-indigo-900/40 dark:text-indigo-200">
                Results-driven rituals
              </span>
              <span className="rounded-full border border-cyan-200/60 bg-cyan-50/80 px-4 py-1 text-cyan-600 shadow-sm backdrop-blur dark:border-cyan-400/40 dark:bg-cyan-900/40 dark:text-cyan-200">
                Confidence community
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Rodan + Fields: clinical innovation, consultant-led coaching, and luminous confidence.
              </h1>
              <p className="text-base text-muted-foreground">
                Rodan + Fields brings dermatologist expertise into daily routines. Cloud MLM Software powers that promise—syncing diagnostics,
                launches, and personalised coaching across every touchpoint.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect your Rodan + Fields platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Explore platform tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-sky-100/60 dark:hover:bg-sky-500/20">
                <Link href={demoHref}>
                  View an AI skin consult demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-sky-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(14,165,233,0.45)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {RODAN_FIELDS_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{metric.label}</h2>
                    </div>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-sky-50/60 p-10 shadow-lg shadow-sky-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:border-sky-400/40 dark:bg-sky-900/40 dark:text-sky-200">
            Clinical pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Dermatology-grade routines tuned for modern customers.
          </h2>
          <p className="text-sm text-muted-foreground">
            Rodan + Fields turns evidence-based skincare into accessible rituals. Our platform keeps consultants aligned with that promise—always
            accurate, always personal.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLINICAL_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-xl dark:border-sky-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-sky-600 dark:text-sky-200">{pillar.emphasis}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-cyan-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-900/40">
        <div
          className="absolute inset-x-0 top-16 h-60 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:border-cyan-400/40 dark:bg-cyan-900/40 dark:text-cyan-200">
              Community plays
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Transform consultations into confident commitments.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software orchestrates diagnostics, storytelling, and recognition so every consultant can nurture luminous results.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-cyan-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-cyan-900/40">
            <ul className="space-y-6">
              {COMMUNITY_PLAYS.map((play) => {
                const Icon = play.icon;
                return (
                  <li key={play.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                      <p className="text-sm text-muted-foreground">{play.summary}</p>
                      <p className="rounded-2xl border border-cyan-200/60 bg-cyan-50/70 p-4 text-xs text-cyan-600 dark:border-cyan-400/30 dark:bg-cyan-900/40 dark:text-cyan-200">
                        {play.proof}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software advantage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Scale dermatologist-grade experiences with a unified, intelligent platform.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software keeps Rodan + Fields consultants empowered with compliant storytelling, personalised journeys, and analytics that
            spotlight the next best action.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_RODAN_FIELDS_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-md transition hover:border-primary/50 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {capability.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Explore skincare-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Plan your next regimen launch
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
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

