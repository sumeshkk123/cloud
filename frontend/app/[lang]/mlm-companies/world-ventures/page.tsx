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
  Compass,
  Globe,
  Map,
  Sparkles,
  Sun,
  Ticket,
  Users
} from "lucide-react";
import { CalendarCheck, ChartLineUp, Handshake, Notebook, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ExperiencePillar = {
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
  impact: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Global revenue",
    value: "$377M",
    detail: "Membership travel experiences, curated vacations, and lifestyle add-ons.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2005",
    detail: "Privately held travel company headquartered in Plano, Texas.",
    icon: Sparkles
  },
  {
    label: "Compensation",
    value: "Multilevel plan",
    detail: "Rewards personal sales, DreamTrips growth, and leadership development.",
    icon: UsersThree
  },
  {
    label: "Core team",
    value: "442 employees",
    detail: "Travel planners, member experience, and representative success teams.",
    icon: Users
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Growing international communities through destination-led storytelling.",
    icon: Globe
  }
];

const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    title: "DreamTrips membership",
    description:
      "Access curated vacations, resort stays, and cultural adventures with negotiated rates and perks.",
    highlight: "Members enjoy concierge planning, exclusive excursions, and welcome events.",
    icon: Ticket
  },
  {
    title: "Signature experiences",
    description:
      "Adventure, wellness, and philanthropic travel collections designed for every lifestyle bucket list.",
    highlight: "On-site hosts, private tours, and community impact projects elevate each trip.",
    icon: Sun
  },
  {
    title: "Travel technology",
    description:
      "Mobile apps surface itineraries, local guides, and loyalty rewards so members stay connected.",
    highlight: "Real-time updates, group chats, and booking tools keep journeys smooth.",
    icon: Map
  },
  {
    title: "Community of explorers",
    description:
      "Independent Representatives inspire friends, families, and teams to discover the world together.",
    highlight: "Leadership academies and recognition celebrate growth and shared memories.",
    icon: Compass
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: "Spark curiosity",
    focus:
      "Host immersive travel nights, virtual showcases, and testimonial reels that make dream vacations tangible.",
    enablement: "Event templates, storytelling prompts, and compliance-checked offers keep momentum high.",
    icon: Notebook
  },
  {
    stage: "Design the getaway",
    focus:
      "Guide members through membership tiers, destination curation, and add-on experiences with confidence.",
    enablement: "Dynamic quoting, itinerary builders, and inventory alerts protect traveler delight.",
    icon: CalendarCheck
  },
  {
    stage: "Nurture lifelong explorers",
    focus:
      "Deliver post-trip follow-up, referral journeys, and leadership pathways that turn memories into movements.",
    enablement: "Automation triggers, loyalty scoring, and community dashboards scale personal touch.",
    icon: Handshake
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "DreamTrips intelligence engine",
    description:
      "Centralises inventory, seasonal offers, and member preferences to surface the right trip at the right time.",
    impact: "Boosts conversion and fills departures faster with personalised digital storytelling.",
    icon: Ticket
  },
  {
    title: "Representative success studio",
    description:
      "Provides a travel-specific CRM, AI itinerary drafting, and compliance guardrails for every conversation.",
    impact: "Shortens planning cycles and equips new leaders to sell with confidence.",
    icon: Notebook
  },
  {
    title: "Experience operations hub",
    description:
      "Orchestrates supplier coordination, emergency support, and guest communications across time zones.",
    impact: "Maintains premium service while scaling global departures and events.",
    icon: Globe
  },
  {
    title: "Community storytelling vault",
    description:
      "Captures photos, testimonials, and impact metrics to fuel social proof and retention campaigns.",
    impact: "Transforms memories into evergreen marketing that drives referrals.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "WorldVentures Travel Membership Enablement";
  const description =
    "Explore how WorldVentures elevates DreamTrips memberships and empowers Independent Representatives with Cloud MLM Software’s travel-ready automation.";
  const keywords = [
    "WorldVentures travel membership",
    "DreamTrips MLM technology",
    "WorldVentures representative tools",
    "Cloud MLM Software travel automation",
    "travel direct selling enablement"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/world-ventures", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WorldVenturesPageProps = {
  params: { lang: SupportedLocale };
};

export default function WorldVenturesPage({ params }: WorldVenturesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-purple-900 to-rose-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(244,114,182,0.35),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(59,130,246,0.3),transparent_58%),radial-gradient(circle_at_50%_85%,rgba(250,204,21,0.28),transparent_50%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-rose-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-rose-100">
              WorldVentures • Travel & leisure memberships
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn dream vacations into movements powered by data, storytelling, and community.
            </h1>
            <p className="text-base text-rose-50/80">
              WorldVentures enriches lives through exclusive travel memberships, curated DreamTrips, and unforgettable experiences.
              Cloud MLM Software keeps every itinerary compliant, every booking seamless, and every Independent Representative
              supported as they inspire explorers worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the travel command centre
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-rose-200/60 text-rose-100 hover:bg-rose-500/10">
                <Link href={pricingHref}>
                  Plan my destination rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-rose-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-rose-50/80">
              <p className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-rose-200" aria-hidden />
                Plano, Texas • Serving travellers across the United States and beyond
              </p>
              <p>
                “Travel is the most emotional product—blend precise logistics with moments that feel like magic.”
              </p>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">Membership metrics</p>
              <h2 className="text-2xl font-semibold text-white">WorldVentures pulse</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/25 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-rose-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-rose-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-rose-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-rose-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-gradient-to-br from-rose-50 via-white to-slate-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Elevating life through travel and leisure</h2>
            <p className="text-base text-muted-foreground">
              Membership unlocks exclusive travel deals, curated vacation packages, and experiences crafted for every adventure—luxury
              escapes, adrenaline pursuits, cultural immersions, and impact journeys. Value comes from the details: negotiated rates,
              inclusive itineraries, and hosts who anticipate needs.
            </p>
            <p className="text-base text-muted-foreground">
              Independent Representatives receive tools, coaching, and community to build businesses that fuel fun, independence, and
              personal growth. With Cloud MLM Software, they orchestrate bookings, stay compliant, and keep relationships thriving long
              after the trip ends.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 dark:text-primary/70">Member promise</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Ticket className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Curated itineraries combine value with wow moments you can’t find on public sites.
              </li>
              <li className="flex items-start gap-2">
                <Compass className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Live hosts and digital tools keep every traveler informed, connected, and supported.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Every journey ends with stories ready to fuel referrals and leadership pathways.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Discover experiential services
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
            Membership pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Experiences that keep members booking again and again
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Align service, storytelling, and technology so every DreamTrip feels effortless before, during, and after travel.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE_PILLARS.map((pillar) => {
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Independent Representative journey</h2>
            <p className="text-sm text-muted-foreground">
              Equip teams to sell joy responsibly—balancing compliance, excitement, and personalised travel design.
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
                        Phase {index + 1}
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
              Modernise travel operations with AI-ready orchestration that keeps the magic centre stage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my travel stack
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
                    {play.impact}
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

