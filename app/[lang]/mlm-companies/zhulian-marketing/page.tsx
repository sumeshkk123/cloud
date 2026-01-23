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
  Building,
  GlobeAsiaAustralia,
  HandHeart,
  Home,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles
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

type ProductArc = {
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
  outcome: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Global revenue",
    value: "$103M",
    detail: "Health, home, and lifestyle innovations trusted across Asia.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1989",
    detail: "Penang, Malaysia-born brand elevating everyday living for families.",
    icon: Building
  },
  {
    label: "Compensation",
    value: "Multi-level",
    detail: "Focuses on integrity, shared success, and long-term customer loyalty.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "Asia",
    detail: "Regional expertise with ambitions to scale globally via digital-first operations.",
    icon: GlobeAsiaAustralia
  },
  {
    label: "Community promise",
    value: "People-first",
    detail: "Distributors share real success stories to inspire and uplift others.",
    icon: HandHeart
  }
];

const PRODUCT_ARCS: ProductArc[] = [
  {
    title: "Nutrition & wellness",
    description:
      "Supplements and functional beverages crafted to boost immunity, vitality, and everyday energy.",
    highlight: "Rigorous quality controls ensure every batch meets Zhulian’s gold standard.",
    icon: Leaf
  },
  {
    title: "Home care excellence",
    description:
      "Eco-conscious cleaning, air purification, and water filtration solutions built for modern households.",
    highlight: "Smart bundles help families transition to healthier homes with ease.",
    icon: Home
  },
  {
    title: "Beauty & personal care",
    description:
      "Skincare and cosmetics marrying advanced science with natural ingredients for radiant confidence.",
    highlight: "Education-first workshops keep consultants credible and customers delighted.",
    icon: Sparkles
  },
  {
    title: "Lifestyle convenience",
    description:
      "Kitchenware, appliances, and everyday accessories engineered to simplify routines and add joy.",
    highlight: "Modular catalog design makes cross-selling intuitive for every distributor.",
    icon: ShieldCheck
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: "Welcome & align",
    focus:
      "Introduce new distributors to Zhulian’s values, product pillars, and impact stories that shape brand belief.",
    enablement: "Onboarding microsites, AI-translated materials, and compliance prompts.",
    icon: ClipboardText
  },
  {
    stage: "Design customer solutions",
    focus:
      "Map household needs to curated wellness, beauty, and home bundles that deliver visible results.",
    enablement: "Recommendation engines, inventory visibility, and predictive reorder journeys.",
    icon: Handshake
  },
  {
    stage: "Lead with community",
    focus:
      "Coach teams to host hybrid events, share success stories, and support philanthropic initiatives.",
    enablement: "Engagement dashboards, mentorship matching, and regional campaign templates.",
    icon: HandHeart
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Zhulian innovation hub",
    description:
      "Centralises product launches, research data, and storytelling assets for every market.",
    outcome: "Accelerates go-to-market while ensuring consistent, culturally relevant messaging.",
    icon: Sparkles
  },
  {
    title: "Household wellness planner",
    description:
      "Uses data to suggest bundle upgrades, loyalty rewards, and seasonal care programs.",
    outcome: "Boosts retention and average order value without overwhelming customers.",
    icon: Home
  },
  {
    title: "Community impact radar",
    description:
      "Measures event participation, mentor health, and social good contributions across regions.",
    outcome: "Guides leadership focus and celebrates meaningful milestones.",
    icon: HandHeart
  },
  {
    title: "Regulatory confidence suite",
    description:
      "Automates documentation, ingredient disclosures, and cross-border compliance checks.",
    outcome: "Keeps expansion on track while protecting the brand’s trusted reputation.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Zhulian Marketing Innovation Blueprint";
  const description =
    "Explore how Zhulian Marketing elevates health, beauty, and home experiences—powered by Cloud MLM Software for trusted growth across Asia.";
  const keywords = [
    "Zhulian Marketing strategy",
    "Asian MLM wellness platform",
    "Cloud MLM Software Zhulian",
    "Zhulian distributor enablement",
    "multi-vertical MLM automation"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/zhulian-marketing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ZhulianPageProps = {
  params: { lang: SupportedLocale };
};

export default function ZhulianMarketingPage({ params }: ZhulianPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-teal-900 to-amber-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.32),transparent_55%),radial-gradient(circle_at_78%_28%,rgba(251,191,36,0.28),transparent_58%),radial-gradient(circle_at_50%_88%,rgba(96,165,250,0.22),transparent_55%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-amber-100">
              Zhulian Marketing • Asian innovation community
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Unite wellness, beauty, and home innovations with data-guided, people-first enablement.
            </h1>
            <p className="text-base text-amber-50/80">
              Zhulian’s mission pairs quality products with empowering opportunities. Cloud MLM Software ensures distributors deliver
              that promise consistently—across digital channels, living room gatherings, and cross-border expansions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the Zhulian cockpit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-amber-200/60 text-amber-100 hover:bg-amber-500/10">
                <Link href={pricingHref}>
                  Plan my regional rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-amber-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-amber-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-200" aria-hidden />
                Penang, Malaysia • Serving families across Southeast Asia and beyond
              </p>
              <p>
                “When innovation meets community, prosperity becomes a shared journey.”
              </p>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">Momentum metrics</p>
              <h2 className="text-2xl font-semibold text-white">Zhulian pulse</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/25 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-amber-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-amber-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-amber-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-amber-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-gradient-to-br from-amber-50 via-white to-slate-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Empowering lives through innovation and community</h2>
            <p className="text-base text-muted-foreground">
              Zhulian’s product portfolio—from supplements and home care to lifestyle accessories—delivers tangible improvements to
              everyday life. Precision formulation and rigorous testing safeguard trust with every customer.
            </p>
            <p className="text-base text-muted-foreground">
              Distributors thrive in a culture built on integrity and mutual support. Cloud MLM Software captures their success stories,
              streamlines operations, and keeps expansion aligned with regulatory expectations.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 dark:text-primary/70">Community lens</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Product innovation and heartfelt storytelling work hand-in-hand.
              </li>
              <li className="flex items-start gap-2">
                <HandHeart className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Distributors uplift families, focusing on health, happiness, and prosperity.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Transparency and compliance ensure the movement stays respected across borders.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Discover regional services
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
            Product arcs
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everyday essentials crafted for health, home, and happiness
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Equip Zhulian distributors with insights that make holistic living simple and inspiring.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCT_ARCS.map((pillar) => {
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Distributor journey</h2>
            <p className="text-sm text-muted-foreground">
              Help every distributor thrive—from first orientation to community leadership.
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
                        Stage {index + 1}
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
              Bring Zhulian’s innovation story to life with AI-ready operations and heartfelt human touch.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my Zhulian roadmap
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

