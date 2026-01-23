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
  Briefcase,
  Globe2,
  Leaf,
  LineChart,
  PiggyBank,
  Shirt,
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
  focus: string;
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
    value: "$68M",
    detail: "Grant E One’s drives $68M by fusing wellness, beauty, and financial lifestyle products in Japan.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "2005",
    detail: "Established in Fukui, Japan to empower entrepreneurs with innovative products and financial education.",
    icon: Briefcase
  },
  {
    label: "Primary market",
    value: "Japan",
    detail: "Field leaders operate across Japan with digital expansion to ASEAN boutiques under exploration.",
    icon: Globe2
  },
  {
    label: "Product mix",
    value: "Apparel • Supplements • Cosmetics",
    detail: "Integrated lifestyle portfolio keeps consultants relevant across daily wellness touchpoints.",
    icon: Sparkles
  }
];

const BRAND_PILLARS: Pillar[] = [
  {
    title: "Financial wellness empowerment",
    description:
      "Consultants learn budgeting, asset planning, and income diversification alongside product knowledge.",
    proof: "Grant E One’s academy hosts personal finance bootcamps and publishes planner playbooks.",
    icon: PiggyBank
  },
  {
    title: "Performance apparel innovation",
    description:
      "Compression garments, posture-support wear, and lifestyle fashion lines blend wellness with style.",
    proof: "Product labs emphasise ergonomic design validated by athlete ambassadors and customer case studies.",
    icon: Shirt
  },
  {
    title: "Advanced supplementation",
    description:
      "Nutritional formulas focus on cellular energy, metabolic balance, and beauty-from-within benefits.",
    proof: "R&D partnerships with Japanese ingredient suppliers ensure traceability and efficacy.",
    icon: Sprout
  },
  {
    title: "Holistic beauty rituals",
    description:
      "Cosmetic and skincare lines integrate botanical extracts, fermentation science, and spa-grade textures.",
    proof: "Consultants host beauty clinics combining diagnostics with tailored regimen recommendations.",
    icon: Leaf
  }
];

const FIELD_PROGRAMMES: Programme[] = [
  {
    title: "Wealth & Wellness Blueprint",
    description:
      "Hybrid workshops teaching financial planning, lifestyle product pairing, and goal setting for new members.",
    focus: "Blends practical budgeting tools with curated product bundles.",
    icon: PiggyBank
  },
  {
    title: "Grant Studio Live",
    description:
      "Streaming series where top field leaders showcase apparel fits, nutrition routines, and live Q&A.",
    focus: "Drives weekly engagement and converts viewers into subscription customers.",
    icon: ChartLineUp
  },
  {
    title: "Impact Community Drives",
    description:
      "CSR-infused campaigns supporting local wellness causes, inspiring members to recruit through purpose.",
    focus: "Highlights brand values while building trust with municipalities and NGOs.",
    icon: Handshake
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Financial literacy coach",
    description:
      "Guide consultants through compliant financial education sessions with calculators, scenarios, and checklists.",
    outcome: "Every appointment ends with action plans that align with Grant E One’s empowerment ethos.",
    icon: PiggyBank
  },
  {
    title: "Lifestyle assortment planner",
    description:
      "Map customer personas to apparel, supplement, and beauty bundles supported by margin analytics.",
    outcome: "Consultants merchandise with data-backed confidence and reduce over-ordering.",
    icon: Shirt
  },
  {
    title: "Livestream performance monitor",
    description:
      "Track viewers, conversions, and post-event follow-ups for Grant Studio Live sessions.",
    outcome: "Marketing leaders iterate formats quickly and scale best-performing shows across regions.",
    icon: ChartLineUp
  },
  {
    title: "CSR impact dashboard",
    description:
      "Capture volunteer hours, donations, and community stories to amplify Impact Community Drives.",
    outcome: "Demonstrates measurable social value, strengthening recruitment narratives.",
    icon: Handshake
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 67,
  label: "Trust momentum",
  summary: "Assesses financial education quality, product satisfaction, and CSR engagement."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Grant E One’s MLM Strategy — Financial Wellness & Lifestyle Commerce";
  const description =
    "Explore Grant E One’s revenue mix, empowerment pillars, community programmes, and Cloud MLM Software enablement for Japanese lifestyle entrepreneurs.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath(currentLocale, "/mlm-companies/grant-e-ones");
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath(locale, "/mlm-companies/grant-e-ones"), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath(locale, "/mlm-companies/grant-e-ones"),
      type: "article"
    }
  };
}

export default function GrantEOnesPage({ params }: { params: { lang: Locale } }) {
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
              Lifestyle & financial empowerment • Rank #97
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Grant E One’s — Empowerment-driven MLM blueprint
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Grant E One’s blends financial literacy with wellness and style. Use this playbook to align education, livestream
                commerce, and CSR with a scalable, compliant operations core.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Request a platform tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Talk with strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  View all MLM companies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “Founded on principles of integrity and excellence, Grant E One’s empowers individuals to build secure, prosperous
              futures.”
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four pillars shaping Grant E One’s
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Keep leadership focused on why members join, stay, and advocate for the brand across Japan.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {BRAND_PILLARS.map((pillar) => {
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
            Programmes fueling member success
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Blend financial empowerment, digital commerce, and purpose-driven engagement to grow sustainably.
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
                <p className="text-xs font-medium text-primary">{programme.focus}</p>
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
              Build an empowerment engine with AI-guided coaching, launch orchestration, and measurable social impact dashboards.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Architect the deployment
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

