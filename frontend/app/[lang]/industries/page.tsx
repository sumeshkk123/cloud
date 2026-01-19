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
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import {
  AirplaneTilt,
  Brain,
  ChartBarHorizontal,
  Circuitry,
  GearSix,
  GlobeHemisphereEast,
  Handshake,
  Heartbeat,
  Lightning,
  PresentationChart,
  ShieldCheck as PhosphorShieldCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type PortfolioCluster = {
  title: string;
  blurb: string;
  bullets: string[];
  icon: IconType;
};

type ProgramLayer = {
  stage: string;
  title: string;
  description: string;
  icon: IconType;
};

type SubIndustry = {
  title: string;
  description: string;
  href: string;
  focus: string;
};

type ImpactStory = {
  title: string;
  metric: string;
  summary: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "AI-guided growth",
    description:
      "Automation, forecasting, and onboarding copilots keep every market launch aligned to the revenue plan.",
    icon: Brain
  },
  {
    title: "Global readiness",
    description:
      "Multi-currency and multi-language experiences ensure distributors and customers have a native journey.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Compliance built in",
    description:
      "Policy controls, audit trails, and territory management give leaders total confidence in every expansion.",
    icon: PhosphorShieldCheck
  }
];

const PORTFOLIO_CLUSTERS: PortfolioCluster[] = [
  {
    title: "Wellness, nutrition, and lifestyle",
    blurb:
      "Elevate customer trust with personalised plans, regulated product education, and wellness outcomes dashboards.",
    bullets: [
      "Programmes for health, beauty, and personal care brands",
      "AI recommendations that adapt to customer goals",
      "Rank acceleration journeys for top field leaders"
    ],
    icon: Heartbeat
  },
  {
    title: "Financial and investment services",
    blurb:
      "Operate high-yield, fintech, and insurance models with risk controls, portfolio oversight, and transparent payouts.",
    bullets: [
      "Investment tracking across HYIP, forex, and crypto",
      "Automated KYC, KYB, and regional compliance checks",
      "Treasury controls with configurable approval chains"
    ],
    icon: Circuitry
  },
  {
    title: "Commerce, travel, and experiences",
    blurb:
      "Coordinate omnichannel orders, events, and loyalty engagements for retailers, travel brands, and training networks.",
    bullets: [
      "Shopper journeys with bundled offers and subscriptions",
      "Distributor enablement content and certification flows",
      "Experience-led dashboards that spotlight regional wins"
    ],
    icon: AirplaneTilt
  }
];

const PROGRAM_LAYERS: ProgramLayer[] = [
  {
    stage: "Discover",
    title: "Insights to frame the opportunity",
    description:
      "Industry strategists map your product catalogue, regional regulations, and partner personas into a single blueprint.",
    icon: PresentationChart
  },
  {
    stage: "Design",
    title: "Configuration built around your field",
    description:
      "Engineers orchestrate compensation, commerce, and learning journeys with reusable components tailored to each market.",
    icon: GearSix
  },
  {
    stage: "Launch",
    title: "Expansion supported by intelligence",
    description:
      "Data copilots forecast supply, spot risk, and brief executives so every launch is grounded in live signals.",
    icon: Lightning
  }
];

const SUB_INDUSTRIES: SubIndustry[] = [
  {
    title: "Affiliate marketing",
    description: "Acquire and nurture digital-first promoters with unified offer, attribution, and payout workflows.",
    focus: "Acquisition & loyalty",
    href: "/industries/affiliate-marketing"
  },
  {
    title: "Beauty & cosmetics",
    description: "Deliver sampling, subscription, and social selling experiences that protect your brand story.",
    focus: "Product storytelling",
    href: "/industries/beauty-cosmetics"
  },
  {
    title: "Clothing & accessories",
    description: "Manage drops, pre-orders, and influencer collabs with precise inventory and fulfilment control.",
    focus: "Merch orchestration",
    href: "/industries/clothing-and-accessories"
  },
  {
    title: "Cryptocurrency",
    description: "Run token and fiat rewards with secure custody, chain analytics, and real-time risk monitoring.",
    focus: "Token governance",
    href: "/industries/cryptocurrency"
  },
  {
    title: "Ecommerce",
    description: "Blend direct selling with marketplace, retail, and D2C flows without fragmenting data.",
    focus: "Unified commerce",
    href: "/industries/ecommerce"
  },
  {
    title: "Elearning",
    description: "Build credentialed learning paths that keep distributors certified and confident ahead of launches.",
    focus: "Enablement design",
    href: "/industries/elearning"
  },
  {
    title: "Energy",
    description: "Coordinate smart metering, usage insights, and incentive plans that reward sustainable behaviours.",
    focus: "Sustainability",
    href: "/industries/energy"
  },
  {
    title: "Finance",
    description: "Operate regulated programmes with audit-ready statements, territory controls, and dispute automation.",
    focus: "Regulated growth",
    href: "/industries/finance"
  },
  {
    title: "Gaming",
    description: "Launch engagement loops, loot drops, and referral ladders backed by real-time telemetry.",
    focus: "Engagement science",
    href: "/industries/gaming"
  },
  {
    title: "Home care",
    description: "Empower field teams with replenishment reminders, bundled offers, and customer lifetime insights.",
    focus: "Customer lifecycle",
    href: "/industries/home-care"
  },
  {
    title: "Insurance",
    description: "Align agents and advisors with compliance-ready onboarding, claims workflows, and payout calculators.",
    focus: "Policy control",
    href: "/industries/insurance"
  }
];

const IMPACT_STORIES: ImpactStory[] = [
  {
    title: "Wellness portfolio",
    metric: "38% faster distributor activation",
    summary:
      "Automated onboarding sequences and AI product guidance lifted first-30-day productivity for a global wellness brand.",
    icon: UsersThree
  },
  {
    title: "Investment programme",
    metric: "4x audit response speed",
    summary:
      "Regulated statement packs and approval chains reduced compliance review cycles from weeks to days across finance markets.",
    icon: ChartBarHorizontal
  },
  {
    title: "Lifestyle retail network",
    metric: "22-country launch in 120 days",
    summary:
      "Unified commerce services, digital events, and analytics copilots accelerated expansion without fragmenting operations.",
    icon: AirplaneTilt
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Industries";
  const description =
    "See how Cloud MLM Software powers direct selling, affiliate, and investment brands across every industry with AI-led operations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type IndustriesPageProps = {
  params: { lang: SupportedLocale };
};

export default function IndustriesPage({ params }: IndustriesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const storiesHref = buildLocalizedPath("/resources/customers", locale);

  return (
    <div className="space-y-28 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(99,102,241,0.2),transparent_45%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Target className="h-4 w-4" aria-hidden />
              Industry operating system
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Scale every industry network with intelligence, compliance, and experience design.
            </h1>
            <p className="text-base text-muted-foreground">
              Cloud MLM Software orchestrates wellness, finance, lifestyle, and technology brands in one platform. From regulated statements to community-driven commerce, our industry blueprints compress launch timelines and keep leadership aligned on growth signals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to an industry strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={storiesHref}>
                  Review customer stories
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground">{highlight.title}</h2>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h2 className="text-base font-semibold text-foreground">Ways we engage</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Industry discovery labs to capture regulatory, cultural, and go-to-market context.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Field advisory councils that pressure-test journeys before rollout.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Global programme offices that monitor launch, expansion, and sustainment KPIs.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Industry portfolios in focus</h2>
          <p className="text-sm text-muted-foreground">
            Every industry blueprint draws from AI insights, automation guardrails, and experience design that reflect the expectations of distributors, customers, regulators, and partners.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PORTFOLIO_CLUSTERS.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <article key={cluster.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{cluster.title}</h3>
                  <p className="text-sm text-muted-foreground">{cluster.blurb}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {cluster.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Program architecture for any industry</h2>
            <p className="text-sm text-muted-foreground">
              Partner with strategists, engineers, and data scientists who understand the nuances of direct selling across wellness, financial services, energy, lifestyle, and technology ecosystems.
            </p>
            <Button asChild size="lg">
              <Link href={pricingHref}>
                Explore commercial options
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6">
            {PROGRAM_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <article key={layer.stage} className="relative flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    {layer.stage}
                  </span>
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Specialist pathways</h2>
          <p className="text-sm text-muted-foreground">
            Dive into industry-specific playbooks designed around customer expectations, regulatory realities, and field motivations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SUB_INDUSTRIES.map((item) => (
            <article key={item.title} className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{item.focus}</p>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <Button asChild variant="outline">
                <Link href={buildLocalizedPath(item.href, locale)}>
                  Explore blueprint
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="container space-y-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What leadership teams achieve with Cloud MLM Software</h2>
            <p className="text-sm text-muted-foreground">
              Success stories span wellness, finance, and lifestyle organisations that paired resilient operations with measurable experience gains.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {IMPACT_STORIES.map((story) => {
              const Icon = story.icon;
              return (
                <article key={story.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm backdrop-blur">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                    <p className="text-sm font-semibold text-primary">{story.metric}</p>
                    <p className="text-sm text-muted-foreground">{story.summary}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-10 shadow-sm">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -right-12 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to craft your next industry playbook?</h2>
              <p className="text-sm text-muted-foreground">
                Assemble your cross-functional team for a strategy workshop that captures launch goals, compliance guardrails, and the customer experience you want to deliver. We’ll translate that into an executable roadmap with measurable checkpoints.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-primary/5 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-primary/10">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Start the workshop</h3>
                <p className="text-sm text-primary/80 dark:text-primary/70">
                  Share your regions, products, and launch timeline. We’ll prepare a readiness score and proposed next steps.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Schedule my session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
