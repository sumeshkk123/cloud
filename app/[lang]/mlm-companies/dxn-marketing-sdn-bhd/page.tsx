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
  Factory,
  Globe2,
  Leaf,
  LineChart,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users
} from "lucide-react";
import {
  Certificate,
  ChartLineUp,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type TimelineEvent = {
  year: string;
  headline: string;
  description: string;
};

type Pillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  description: string;
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
    value: "$1.25B",
    detail: "DSN Global 100 places DXN among the top 20 performers with healthy foods and wellness staples.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1993",
    detail: "Established in Alor Setar, Malaysia, to cultivate Ganoderma and spirulina at scale.",
    icon: Factory
  },
  {
    label: "Employees",
    value: "1,600+",
    detail: "Global manufacturing, R&D, and support teams orchestrate the vertically integrated supply chain.",
    icon: Users
  },
  {
    label: "Primary markets",
    value: "70+ countries",
    detail: "Presence across Asia, Europe, the Americas, and the Gulf through party-plan and retail hybrids.",
    icon: Globe2
  }
];

const HERITAGE_TIMELINE: TimelineEvent[] = [
  {
    year: "1993",
    headline: "DXN launches with a single Ganoderma farm",
    description: "Dato' Dr. Lim Siow Jin introduces DXN's one-dragon concept—cultivation through distribution under one roof."
  },
  {
    year: "1997",
    headline: "First GMP-certified manufacturing campus",
    description: "World-class processing ensures Reishi extract, spirulina, and health beverages meet strict quality benchmarks."
  },
  {
    year: "2003-2010",
    headline: "Rapid expansion across Latin America & Europe",
    description: "Localized warehouses and training academies support new party-plan communities from Mexico to Poland."
  },
  {
    year: "2018",
    headline: "Top-tier DSN Global 100 recognition",
    description: "DXN breaks into the top 20 with consistent wellness demand and disciplined field retention."
  },
  {
    year: "2024",
    headline: "Wellness portfolios go digital-first",
    description: "AI-backed nutrition guides and mobile ordering keep consultants informed and customers engaged."
  }
];

const PRODUCT_PILLARS: Pillar[] = [
  {
    title: "Ganoderma therapeutics",
    description:
      "Lingzhi-based capsules, coffees, and personal care products emphasise immune resilience and daily vitality.",
    proof: "Vertical integration from farm to finished goods gives DXN full control over potency and quality checks.",
    icon: Sprout
  },
  {
    title: "Superfood nutrition",
    description:
      "Spirulina tablets, enzymes, and beverages deliver dense nutrition for wellness-conscious households.",
    proof: "Cold-chain logistics and gentle processing preserve nutrient profiles across climates.",
    icon: Leaf
  },
  {
    title: "Holistic lifestyle range",
    description:
      "Cosmetics, home care, and personal wellness products keep consultants relevant beyond core supplements.",
    proof: "Party-plan demos weave lifestyle bundles that boost cart size and repeat orders.",
    icon: ShieldCheck
  }
];

const GROWTH_OPPORTUNITIES: Opportunity[] = [
  {
    title: "Wellness rituals demand",
    description:
      "Global consumers seek immune and nutrition solutions they can trust—DXN’s one-dragon model delivers traceability.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Agro-tech storytelling",
    description:
      "Farm-to-cup narratives, lab tours, and eco-certifications give consultants rich content for parties and livestreams.",
    icon: Certificate
  },
  {
    title: "Hybrid party commerce",
    description:
      "Digital ordering, sampling, and wellness webinars extend the energy of in-person gatherings to on-demand channels.",
    icon: UsersThree
  }
];

const WATCHPOINTS: Opportunity[] = [
  {
    title: "Health claim compliance",
    description:
      "Mushroom and spirulina benefits must reference approved language to remain compliant across 70+ regulators.",
    icon: ShieldCheck
  },
  {
    title: "Inventory cadence",
    description:
      "Global farms and factories need predictive replenishment to avoid backorders during seasonal wellness spikes.",
    icon: Lightning
  },
  {
    title: "Field onboarding depth",
    description:
      "Rapid expansion relies on consistent scientific literacy so new consultants lead with education, not hype.",
    icon: Handshake
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Nutritional intelligence hub",
    description:
      "Map customer health goals to recommended DXN stacks, approved scripts, and reorder cadences inside a guided workspace.",
    outcome: "Consultants deliver evidence-based consultations while leadership monitors compliance in real time.",
    icon: ChartLineUp
  },
  {
    title: "Party performance cockpit",
    description:
      "Track sampling, attendance, conversions, and bundle performance across physical and virtual wellness parties.",
    outcome: "Regional directors spot winning playbooks fast and replicate them across continents.",
    icon: TrendingUp
  },
  {
    title: "Supply chain pulse",
    description:
      "Connect plantation yields, manufacturing batches, and distributor forecasts with AI alerts.",
    outcome: "Ops teams respond to demand surges before they hurt revenue or customer satisfaction.",
    icon: LineChart
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 74,
  label: "Trust index",
  summary: "Weighted view of regulatory posture, farm-to-factory control, and global customer sentiment."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "DXN Marketing SDN BHD MLM Opportunity & Operations Blueprint";
  const description =
    "Analyse DXN’s one-dragon wellness model—revenue signals, product pillars, field rituals, and Cloud MLM Software enablement for compliant global growth.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath(currentLocale, "/mlm-companies/dxn-marketing-sdn-bhd");
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(locale, "/mlm-companies/dxn-marketing-sdn-bhd"),
      languages: alternates
    },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath(locale, "/mlm-companies/dxn-marketing-sdn-bhd"),
      type: "article"
    }
  };
}

export default function DxnMarketingPage({ params }: { params: { lang: Locale } }) {
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
              Wellness • Rank #15
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                DXN Marketing SDN BHD — One-dragon wellness intelligence
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                DXN develops, cultivates, and distributes Ganoderma, spirulina, and lifestyle products under one integrated
                ecosystem. Use this playbook to align product mastery, party-plan excellence, and AI-backed governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Tour the wellness stack
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Connect with strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  Browse all companies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “DXN’s product philosophy revolves around simplicity and purity—meticulously cultivated to retain natural potency
              and efficacy for holistic health seekers.”
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Heritage milestones</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Trace the operational discipline that keeps DXN resilient through global expansion.
          </p>
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 -ml-px h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" aria-hidden />
          <div className="space-y-10">
            {HERITAGE_TIMELINE.map((event, index) => (
              <article
                key={event.year}
                className={`relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75 lg:grid-cols-[0.2fr_1fr] ${
                  index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"
                }`}
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">{event.year}</span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Product pillars & experience proof
            </h2>
            <p className="text-sm text-muted-foreground">
              Keep consultants grounded in product science and storytelling that reflects DXN’s vertically integrated promise.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRODUCT_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-primary/25 bg-primary/5 p-6 dark:border-primary/20 dark:bg-primary/10"
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
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Opportunity levers & guardrails
            </h2>
            <p className="text-sm text-muted-foreground">
              Balance expansion with governance. Showcase the upside while codifying the standards that protect the DXN brand.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-border/40 dark:bg-slate-950/80">
              <h3 className="text-lg font-semibold text-foreground">Momentum</h3>
              <div className="space-y-4">
                {GROWTH_OPPORTUNITIES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 rounded-2xl border border-border/60 p-4 dark:border-border/40">
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-xs text-muted-foreground">
                        <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-primary/25 bg-primary/5 p-6 dark:border-primary/20 dark:bg-primary/10">
              <h3 className="text-lg font-semibold text-foreground">Watchpoints</h3>
              <div className="space-y-4">
                {WATCHPOINTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 rounded-2xl border border-primary/30 p-4 dark:border-primary/25">
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-xs text-muted-foreground">
                        <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-3xl border border-primary/25 bg-primary/5 p-8 dark:border-primary/20 dark:bg-primary/10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software advantage
            </h2>
            <p className="text-sm text-muted-foreground">
              Harmonise DXN’s cultivation-first DNA with data-rich operations. Cloud MLM Software equips leaders to govern,
              scale, and innovate faster.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Schedule the platform demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Plan my deployment
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

