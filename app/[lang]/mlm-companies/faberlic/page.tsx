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
  Flame,
  FlaskConical,
  Globe2,
  Home,
  LineChart,
  Palette,
  Shirt,
  Sparkles
} from "lucide-react";
import { ChartLineUp, Handshake, RocketLaunch, UsersThree } from "@phosphor-icons/react/dist/ssr";

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

type Portfolio = {
  category: string;
  story: string;
  icon: IconType;
};

type Initiative = {
  title: string;
  description: string;
  impact: string;
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
    value: "$463M",
    detail: "DSN ranks Faberlic #33 with a multi-category portfolio spanning cosmetics, fashion, and home.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1997",
    detail: "Launched in Moscow with oxygen cosmetics before expanding into lifestyle verticals.",
    icon: RocketLaunch
  },
  {
    label: "Employees",
    value: "2,500+",
    detail: "In-house R&D, manufacturing, and digital teams support a 20+ country network.",
    icon: UsersThree
  },
  {
    label: "Compensation",
    value: "Multilevel",
    detail: "Career ladders reward mentoring, customer loyalty, and omnichannel sales velocity.",
    icon: Handshake
  }
];

const BRAND_PILLARS: Pillar[] = [
  {
    title: "Scientific oxygen expertise",
    description:
      "Flagship oxygen cosmetics line utilises patented formulas to boost skin oxygenation and radiance.",
    proof: "Faberlic’s research centre publishes efficacy studies and sustains collaboration with European labs.",
    icon: FlaskConical
  },
  {
    title: "Fashion-forward accessibility",
    description:
      "Seasonal apparel, footwear, and accessories keep the brand trend-relevant while remaining affordable.",
    proof: "In-house designers release capsule drops every three weeks across digital look-books.",
    icon: Shirt
  },
  {
    title: "Whole-home lifestyle",
    description:
      "Eco home care, decor, and wellness staples extend the brand into every touchpoint of the household.",
    proof: "Smart subscription bundles combine cosmetics, cleaning, and wellness to raise average order value.",
    icon: Home
  },
  {
    title: "Digital-first enablement",
    description:
      "Consultants leverage mobile apps, livestream events, and automation to run modern omnichannel storefronts.",
    proof: "Faberlic Academy modules teach content creation, AI-assisted merchandising, and analytics mastery.",
    icon: Sparkles
  }
];

const PORTFOLIO_MATRIX: Portfolio[] = [
  {
    category: "Cosmetics & skincare",
    story: "Oxygen lines, dermacosmetics, fragrances, and spa rituals engineered in Faberlic labs.",
    icon: Flame
  },
  {
    category: "Fashion & accessories",
    story: "Capsule wardrobes, footwear, bags, and jewellery tailored for fast-styling consultants.",
    icon: Palette
  },
  {
    category: "Wellness & nutrition",
    story: "Functional beverages, supplements, and wellness tech bridging beauty from the inside out.",
    icon: FlaskConical
  },
  {
    category: "Home innovation",
    story: "Eco detergents, smart cleaners, and decor lines keep Faberlic embedded in daily routines.",
    icon: Home
  }
];

const GROWTH_INITIATIVES: Initiative[] = [
  {
    title: "360° Look Creator",
    description:
      "AI-powered styling assistant recommends outfits, accessories, and beauty pairings for each customer persona.",
    impact: "Boosts cross-sell by up to 25% while providing consultants with data-backed upsell prompts."
  },
  {
    title: "Eco-conscious refills",
    description:
      "Refill stations and recycled packaging campaigns align with sustainability agendas and regulator expectations.",
    impact: "Improves brand sentiment and reduces logistics costs across top CIS cities."
  },
  {
    title: "Hybrid studio boutiques",
    description:
      "Experience hubs let teams host micro-events, livestream try-ons, and pick-up orders in one curated space.",
    impact: "Creates omnichannel cohesion while collecting on-site customer data for personalised follow-ups."
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Portfolio orchestration engine",
    description:
      "Unify cosmetics, fashion, and home catalogue data with pricing, bundling, and AI-led merchandising suggestions.",
    outcome: "Consultants present smart assortments tuned to customer preferences and stock availability.",
    icon: Palette
  },
  {
    title: "Customer journey intelligence",
    description:
      "Map loyalty cycles, reorder cadences, and event triggers—from skincare to wardrobe refreshes—in one dashboard.",
    outcome: "Leadership coaches teams using shared insights rather than gut feeling.",
    icon: ChartLineUp
  },
  {
    title: "Compliance & claim guardrails",
    description:
      "Automate language checks across oxygen cosmetics and wellness narratives to match regulator guidelines.",
    outcome: "Keeps distributor messaging accurate in every region without slowing creativity.",
    icon: Factory
  },
  {
    title: "Event & livestream studio",
    description:
      "Plan, host, and analyse fashion shows, launches, and hybrid pop-ups with integrated CRM follow-through.",
    outcome: "Events convert faster with automated post-show offers and segmented nurture flows.",
    icon: Sparkles
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 73,
  label: "Trust momentum score",
  summary: "Synthesises product innovation, omnichannel customer satisfaction, and compliance maturity."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Faberlic MLM Company Strategy — Oxygen Beauty & Lifestyle Blueprint";
  const description =
    "Explore Faberlic’s multi-vertical direct selling engine: revenue signals, product pillars, growth initiatives, and Cloud MLM Software enablement for modern omnichannel leaders.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath("/mlm-companies/faberlic", currentLocale as SupportedLocale);
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath("/mlm-companies/faberlic", locale as SupportedLocale), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/mlm-companies/faberlic", locale as SupportedLocale),
      type: "article"
    }
  };
}

export default function FaberlicPage({ params }: { params: { lang: Locale } }) {
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
              Beauty • Fashion • Home • Rank #33
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Faberlic — Oxygen beauty & lifestyle commerce playbook
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Faberlic stands as Russia’s largest direct seller, delivering cosmetics, fashion, and home innovations through a
                digital-first consultant network. Use this guide to align product mastery, omnichannel storytelling, and AI-led
                governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Request a guided platform tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Speak with strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  View MLM index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “Faberlic offers an impressive selection that spans cosmetics, home care, appliances, and accessories—serving
              diverse customer needs with innovation at every launch.”
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars powering Faberlic</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Equip leaders with the strategic themes that keep consultants inspired and customers loyal.
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

      <section className="container space-y-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Portfolio matrix</h2>
            <p className="text-sm text-muted-foreground">
              Navigate the breadth of Faberlic’s offer—each category presents unique storytelling moments and automation hooks.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PORTFOLIO_MATRIX.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.category}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.category}</h3>
                  <p className="text-sm text-muted-foreground">{item.story}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Growth initiatives to replicate
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            These programmes keep Faberlic ahead of consumer expectations while reinforcing consultant profitability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {GROWTH_INITIATIVES.map((initiative) => (
            <article
              key={initiative.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
            >
              <h3 className="text-lg font-semibold text-foreground">{initiative.title}</h3>
              <p className="text-sm text-muted-foreground">{initiative.description}</p>
              <p className="text-xs font-medium text-primary">{initiative.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-3xl border border-primary/25 bg-primary/5 p-8 dark:border-primary/20 dark:bg-primary/10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software advantage
            </h2>
            <p className="text-sm text-muted-foreground">
              Manage Faberlic’s multi-vertical engine with confidence. Our platform centralises data, AI insights, and compliance
              so field teams shine.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Launch the experience
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Architect my deployment
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

