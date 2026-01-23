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
  BadgeCheck,
  CalendarClock,
  Compass,
  MapPin,
  Navigation2,
  Sparkles
} from "lucide-react";
import {
  AirplaneTilt,
  GlobeHemisphereEast,
  Lifebuoy,
  PresentationChart,
  SuitcaseRolling,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPoint = {
  title: string;
  description: string;
  icon: IconType;
};

type Metric = {
  value: string;
  label: string;
  description: string;
};

type FeatureCategory = {
  title: string;
  caption: string;
  bullets: string[];
  icon: IconType;
};

type JourneyPhase = {
  title: string;
  summary: string;
  outcomes: string[];
};

type ServiceStream = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_POINTS: HeroPoint[] = [
  {
    title: "Seamless booking connectivity",
    description:
      "Sync itineraries, inventory, and commission rules with the booking engines and CRS you already trust.",
    icon: Navigation2
  },
  {
    title: "Affiliate-first engagement",
    description:
      "Give travel promoters white-labeled hubs, marketing assets, and reward dashboards that keep campaigns moving.",
    icon: AirplaneTilt
  },
  {
    title: "Global-ready compliance",
    description:
      "Automate KYC, multi-currency payouts, and jurisdiction-specific disclosures for every market you open.",
    icon: BadgeCheck
  }
];

const METRICS: Metric[] = [
  {
    value: "18 countries",
    label: "launched without re-architecting",
    description:
      "Localise tax handling, languages, and settlement flows while keeping one compensation brain."
  },
  {
    value: "4x",
    label: "conversion lift on curated packages",
    description:
      "Bundle experiences, member-only perks, and seasonal offers with dynamic pricing rules."
  },
  {
    value: "72 hours",
    label: "to spin up targeted campaigns",
    description:
      "Launch flash incentives for new destinations with automated performance tracking."
  }
];

const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    title: "Network operations cockpit",
    caption: "Visibility across agents, affiliates, and concierge teams in real time.",
    bullets: [
      "Geo-mapped dashboards to monitor enrolment, bookings, and fulfilment milestones.",
      "Tiered approval flows for high-value travel requests and bespoke itineraries.",
      "Service ticketing hand-in-hand with vendor SLAs and traveller alerts."
    ],
    icon: GlobeHemisphereEast
  },
  {
    title: "Compensation architecture",
    caption: "Reward the moments that matter across every travel journey.",
    bullets: [
      "Binary, unilevel, and matrix plans tuned for packages, upgrades, or ancillaries.",
      "Dynamic commission split rules based on booking source, margin, or campaign tier.",
      "Automated e-wallets, vouchers, and loyalty credits with transparent audit trails."
    ],
    icon: PresentationChart
  },
  {
    title: "Experience merchandising",
    caption: "Curate signature trips with intelligent content delivery.",
    bullets: [
      "Segment travellers by intent and push micro-sites, brochures, and launch kits in seconds.",
      "Embed e-commerce integrations for add-ons from insurance to local experiences.",
      "Multi-language storytelling with SEO-ready blocks for every destination page."
    ],
    icon: SuitcaseRolling
  }
];

const JOURNEY_PHASES: JourneyPhase[] = [
  {
    title: "Discovery & blueprint",
    summary:
      "Map every stakeholder—from field promoters to destination partners—and define the compliance guardrails that protect your brand.",
    outcomes: [
      "Audit current travel funnels, partner contracts, and performance baselines.",
      "Prioritise quick wins for onboarding, payouts, and traveller communications."
    ]
  },
  {
    title: "Experience prototyping",
    summary:
      "Design white-labeled hubs and booking workflows that feel native to each market while keeping control at the core.",
    outcomes: [
      "Co-create role-based workspaces for agents, affiliates, and suppliers.",
      "Prototype analytics for conversion drop-offs, campaign velocity, and satisfaction."
    ]
  },
  {
    title: "Automation rollout",
    summary:
      "Connect booking engines, CRM, marketing automation, and payment gateways into one dependable backbone.",
    outcomes: [
      "Orchestrate integrations with GDS, PMS, and custom vendor APIs.",
      "Trigger real-time notifications for cancellations, waitlists, and upsell opportunities."
    ]
  },
  {
    title: "Continuous optimisation",
    summary:
      "Monitor every itinerary in-flight and fine tune incentives, content, and service levels by market.",
    outcomes: [
      "Benchmark programme health with traveller NPS, partner profitability, and retention data.",
      "Launch experimentation sprints for seasonal offers and channel expansion."
    ]
  }
];

const SERVICE_STREAMS: ServiceStream[] = [
  {
    title: "Concierge enablement",
    description:
      "Deliver guided scripts, knowledge bases, and AI-assisted recommendations so support teams can elevate every interaction.",
    icon: Lifebuoy
  },
  {
    title: "Affiliate performance",
    description:
      "Bundle marketing calendars, creative assets, and campaign scorecards to help promoters amplify reach across social and offline channels.",
    icon: UsersFour
  },
  {
    title: "Risk & compliance",
    description:
      "Embed jurisdiction-ready disclosures, documentation workflows, and financial controls across the travel lifecycle.",
    icon: Compass
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Travel Industry MLM Software";
  const description =
    "Design, launch, and scale travel affiliate networks with Cloud MLM Software—booking integrations, global-ready compensation, and concierge-grade engagement.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/travel", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TravelPageProps = {
  params: { lang: SupportedLocale };
};

export default function TravelPage({ params }: TravelPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-6 py-20 dark:border-border/40 dark:from-sky-950 dark:via-slate-950 dark:to-indigo-950/40 sm:px-12">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(14,116,144,0.22),transparent_55%),radial-gradient(circle_at_55%_85%,rgba(99,102,241,0.24),transparent_50%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-sky-100/70 px-4 py-1 text-sm font-semibold text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
                Travel network orchestration
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for travel brands delivering unforgettable journeys at scale.
              </h1>
              <p className="text-lg text-muted-foreground">
                Unite travel agents, affiliates, and destination partners on one platform. Automate compensation, personalise
                experiences, and keep every itinerary on schedule—no matter how many markets you activate.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={demoHref}>Book a tailored demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={contactHref}>Talk to travel specialists</Link>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-border/30 dark:bg-slate-900/60">
              <div className="grid gap-6">
                {HERO_POINTS.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                      <point.icon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">{point.title}</p>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={modulesHref} className="text-sm font-semibold text-primary hover:underline">
                  View travel-ready modules →
                </Link>
                <Link href={pricingHref} className="text-sm text-muted-foreground hover:text-foreground">
                  Compare rollout packages
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border/50 bg-white/80 p-6 shadow-sm dark:border-border/30 dark:bg-slate-900/60"
              >
                <div className="text-3xl font-semibold text-foreground">{metric.value}</div>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">A command centre for modern travel enterprises.</h2>
          <p className="text-lg text-muted-foreground">
            Bring every module—multi-currency billing, multilingual storytelling, and affiliate marketing—into a single
            travel-first stack. Each workspace is crafted for travellers, agents, and destination operators alike.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURE_CATEGORIES.map((feature) => (
            <div
              key={feature.title}
              className="relative flex h-full flex-col rounded-3xl border border-border/60 bg-card/70 p-8 shadow-lg shadow-sky-100/40 dark:border-border/40 dark:bg-slate-900/60 dark:shadow-sky-500/5"
            >
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-200">
                <feature.icon className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.caption}</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {feature.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 text-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Blueprint delivery the travel way.</h2>
            <p className="text-lg text-muted-foreground">
              Each engagement blends consulting, product configuration, and enablement so you can deliver flawless journeys
              for travellers and partners alike. Our team stays close from ideation to optimisation.
            </p>
            <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/60">
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <CalendarClock className="h-5 w-5 text-sky-500" />
                Launch programmes with confidence in weeks, not quarters.
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                We combine travel domain expertise with enterprise-grade engineering to keep every rollout resilient.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {JOURNEY_PHASES.map((phase, index) => (
              <div key={phase.title} className="rounded-3xl border border-border/60 bg-card/70 p-6 dark:border-border/40 dark:bg-slate-900/60">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                      <p className="text-sm text-muted-foreground">{phase.summary}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {phase.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 text-sky-500" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Service streams built for travel excellence.</h2>
            <p className="text-lg text-muted-foreground">
              Strengthen every journey touchpoint—from discovery to post-trip loyalty. Each module, automation, and workflow is
              configurable for your destinations and partner ecosystem.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-white via-sky-50 to-white p-8 shadow-sm dark:border-border/40 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-sky-500" />
                Extend multilingual, multi-currency support so agents sell confidently across continents.
              </li>
              <li className="flex gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-sky-500" />
                Provide travellers with self-service portals for vouchers, upgrades, and concierge chats.
              </li>
              <li className="flex gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-sky-500" />
                Integrate marketing automations to spotlight packages, seasonal offers, and loyalty tiers.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_STREAMS.map((stream) => (
            <div
              key={stream.title}
              className="flex h-full flex-col rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/60"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-200">
                <stream.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{stream.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{stream.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-sky-50 to-white p-10 text-center shadow-lg dark:border-border/40 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Ready to elevate every itinerary?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Partner with Cloud MLM Software to choreograph memorable travel experiences, empower affiliates, and keep revenue
            streams resilient across every destination.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={demoHref}>Schedule a strategy session</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={contactHref}>Discuss your travel roadmap</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
