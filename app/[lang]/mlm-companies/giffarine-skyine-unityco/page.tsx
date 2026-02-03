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
  Building,
  Droplets,
  Factory,
  Globe2,
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
    value: "$181M",
    detail: "Giffarine Skyline Unityco maintains $181M in annual revenue across wellness, beauty, and home care portfolios.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1996",
    detail: "Thai-founded enterprise combining pharmaceutical-grade production with lifestyle direct selling.",
    icon: Building
  },
  {
    label: "Employees",
    value: "2,500+",
    detail: "Manufacturing specialists, nutrition scientists, and regional support teams enable nationwide reach.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "Thailand",
    detail: "Anchor market with regional expansion into ASEAN neighbours via cross-border e-commerce.",
    icon: Globe2
  }
];

const BRAND_PILLARS: Pillar[] = [
  {
    title: "Science-backed nutrition",
    description:
      "Supplements and beverages leverage botanical extracts and pharmaceutical-grade standards to deliver visible benefits.",
    proof: "Giffarine’s GMP-certified facilities and doctor advisory boards underpin product credibility.",
    icon: Sprout
  },
  {
    title: "Beauty for every lifestyle",
    description:
      "Cosmetics, skincare, and personal care ranges cover daily essentials through premium spa experiences.",
    proof: "Beauty consultants run pop-up studios demonstrating new launches with personalised routines.",
    icon: Sparkles
  },
  {
    title: "Home & living innovation",
    description:
      "Home care, cleaning, and wellness appliances keep the brand embedded in Thai households year-round.",
    proof: "Eco-friendly formulas and smart dispensers strengthen loyalty programmes focused on repeat orders.",
    icon: Leaf
  },
  {
    title: "Inclusive entrepreneurship",
    description:
      "Flexible career paths, training scholarships, and recognition events uplift diverse distributors across Thailand.",
    proof: "Nationwide academies and online learning hubs help new leaders accelerate within 90 days.",
    icon: Users
  }
];

const FIELD_PROGRAMMES: Programme[] = [
  {
    title: "Giffarine Well-Living Clubs",
    description:
      "Neighbourhood hubs offering health assessments, product sampling, and family-friendly education workshops.",
    focus: "Clubs gather retention data and cultivate trusted community leaders.",
    icon: Handshake
  },
  {
    title: "Innovation Lab Tour Series",
    description:
      "Behind-the-scenes factory tours and virtual lab walkthroughs showcase quality controls and product R&D.",
    focus: "Strengthens consultant confidence and powers compliant storytelling.",
    icon: Factory
  },
  {
    title: "Digital Salon Sprint",
    description:
      "30-day challenge guiding consultants to host livestream demos, social commerce events, and referral drives.",
    focus: "Gamified scorecards boost online conversions and new member activation.",
    icon: ChartLineUp
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Holistic portfolio planner",
    description:
      "Unify nutrition, beauty, and home-care catalogues with localisation rules, pricing, and storytelling prompts.",
    outcome: "Consultants curate curated baskets tuned to customer lifestyle data.",
    icon: Droplets
  },
  {
    title: "Community club insights",
    description:
      "Monitor attendance, product trials, and health goals across Well-Living Clubs in real time.",
    outcome: "Regional managers replicate top-performing community formats nationwide.",
    icon: Users
  },
  {
    title: "Launch runway orchestration",
    description:
      "Coordinate sample logistics, training assets, and KPI tracking for every product release.",
    outcome: "Launches stay synchronised across online and offline channels without stock shocks.",
    icon: Factory
  },
  {
    title: "Sustainability storytelling tracker",
    description:
      "Capture refill adoption, eco campaign participation, and CSR impact to fuel marketing narratives.",
    outcome: "Giffarine quantifies brand promises and engages conscious consumers with evidence.",
    icon: Leaf
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 70,
  label: "Trust progress score",
  summary: "Synthesises product integrity, community loyalty, and digital readiness within the Thai market."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Giffarine Skyline Unityco MLM Strategy — Thai Wellness & Lifestyle Playbook";
  const description =
    "Analyse Giffarine Skyline Unityco’s revenue signals, product pillars, field programmes, and Cloud MLM Software enablement designed for Thai wellness leaders.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath("/mlm-companies/giffarine-skyine-unityco", currentLocale as SupportedLocale);
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/giffarine-skyine-unityco", locale as SupportedLocale),
      languages: alternates
    },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/mlm-companies/giffarine-skyine-unityco", locale as SupportedLocale),
      type: "article"
    }
  };
}

export default function GiffarineSkylineUnitycoPage({ params }: { params: { lang: Locale } }) {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const companiesHref = buildLocalizedPath("/mlm-companies", locale as SupportedLocale);

  return (
    <div className="space-y-24 pb-20 pt-16">
      <section className="relative isolate overflow-hidden border-y border-primary/25 bg-gradient-to-br from-primary/5 via-background to-background py-20 dark:from-primary/20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/20 dark:bg-primary/20">
              Thai wellness • Rank #66
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Giffarine Skyline Unityco — Thailand’s holistic lifestyle engine
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Giffarine delivers science-led nutrition, beauty, and home innovations for Thai households. Use this executive
                dossier to synchronise field programmes, launch orchestration, and sustainability narratives with AI-enabled
                governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Preview Cloud MLM platform
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Plan a strategy workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  Explore more companies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “Giffarine offers exceptional health and beauty products to empower families, reinforcing confidence and wellbeing
              across Thailand.”
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
            Four pillars guiding Giffarine
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Ground your strategy in the value propositions that resonate with Thai consumers and distributors alike.
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
            Programmes fueling Thai market leadership
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Distinctive community, innovation, and digital programmes keep Giffarine distributors inspired and productive.
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
              Extend Giffarine’s Thai heritage with AI workflows, analytics, and compliance in one modern operations layer.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Book a guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Co-create the roadmap
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
