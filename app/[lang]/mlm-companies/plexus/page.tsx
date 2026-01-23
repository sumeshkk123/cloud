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
  Activity,
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  HandshakeIcon,
  HeartPulse,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow
} from "lucide-react";
import { Cpu, Plant, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Snapshot = {
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

type CommunityEdge = {
  title: string;
  description: string;
  signal: string;
  icon: IconType;
};

type PlatformEdge = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const PLEXUS_SNAPSHOT: Snapshot[] = [
  {
    label: "Revenue",
    value: "$527M",
    detail: "Rank #30 on the DSN Global 100, reflecting resilient wellness demand.",
    icon: Sparkles
  },
  {
    label: "Founded",
    value: "2008",
    detail: "Modern wellness brand born from a mission to improve lives.",
    icon: Lightbulb
  },
  {
    label: "Headquarters",
    value: "Scottsdale, Arizona",
    detail: "Innovation hub aligning product development, ambassador programs, and operations.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Health-conscious households embracing holistic lifestyle upgrades.",
    icon: Target
  },
  {
    label: "Employees",
    value: "410+",
    detail: "Corporate team spanning science, logistics, and ambassador support.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Multilevel, customer-first",
    detail: "Rewards sustainable customer acquisition, retention, and leadership mentorship.",
    icon: ShieldCheck
  },
  {
    label: "Product focus",
    value: "Gut health · Weight management · Personal care",
    detail: "Science-backed portfolios supporting energy, balance, and confidence.",
    icon: Activity
  },
  {
    label: "Sales method",
    value: "Person-to-person + social communities",
    detail: "Ambassadors cultivate trust through stories, education, and accountability.",
    icon: HandshakeIcon
  }
];

const WELLNESS_PILLARS: Pillar[] = [
  {
    title: "Science with empathy",
    description: "Clinical research paired with customer storytelling to meet real-world needs.",
    proof: "Flagship gut health products combine probiotics, fibers, and botanicals validated by third-party testing.",
    icon: Plant
  },
  {
    title: "Habit-building frameworks",
    description: "Programs like Plexus Reset focus on nutrition, mindset, and movement.",
    proof: "Structured 3-day resets and 60-day challenges keep members accountable and motivated.",
    icon: Dumbbell
  },
  {
    title: "Ambassador enablement",
    description: "Training, tools, and leadership academies elevate entrepreneurial success.",
    proof: "Rank-specific resources, mentorship, and community platforms drive retention.",
    icon: Workflow
  }
];

const COMMUNITY_EDGES: CommunityEdge[] = [
  {
    title: "Inclusive ambassador culture",
    description: "Support groups celebrate wins and share mindset coaching daily.",
    signal: "Peer-to-peer mentorship and recognition events keep momentum vibrant.",
    icon: UsersThree
  },
  {
    title: "Wellness accountability squads",
    description: "Small cohorts track nutrition, activity, and emotional health together.",
    signal: "Consistent check-ins build trust and lower attrition.",
    icon: HeartPulse
  },
  {
    title: "Purpose-driven movement",
    description: "Community service, fundraising, and personal growth stories drive mission alignment.",
    signal: "Ambassadors feel part of something bigger than product sales.",
    icon: Sparkles
  }
];

const CLOUD_ENABLERS: PlatformEdge[] = [
  {
    title: "AI wellness journeys",
    description: "Map Plexus habit-building flows with personalised nudges, milestones, and content.",
    payoff: "Keep customers and ambassadors engaged with data-guided progress cues.",
    icon: Cpu
  },
  {
    title: "Compensation transparency",
    description: "Model ranks, team volume, and incentive promos without spreadsheets.",
    payoff: "Give leaders real-time insight to coach ethically and effectively.",
    icon: ShieldCheck
  },
  {
    title: "Community health analytics",
    description: "Track challenge participation, retention, and referral impact in one hub.",
    payoff: "Identify where to invest in training, recognition, and support programs.",
    icon: UsersThree
  },
  {
    title: "Integrated commerce & subscriptions",
    description: "Automate product bundles, autoship, and rewards to reduce administrative overhead.",
    payoff: "Let ambassadors focus on relationships while the platform handles logistics.",
    icon: HandshakeIcon
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Plexus MLM Company Overview";
  const description =
    "Analyse Plexus’s $527M wellness movement—science-driven products, habit frameworks, and ambassador empowerment—and discover how Cloud MLM Software elevates similar health-focused brands.";
  const keywords = [
    "Plexus MLM review",
    "Plexus compensation plan",
    "Plexus gut health products",
    "Cloud MLM Software wellness platform",
    "AI health journey automation"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/plexus", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PlexusPageProps = {
  params: { lang: SupportedLocale };
};

export default function PlexusPage({ params }: PlexusPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#071f2d] via-[#113a4c] to-[#144d54] py-20 text-white dark:border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(34,197,94,0.25),transparent_55%),radial-gradient(circle_at_74%_28%,rgba(59,130,246,0.22),transparent_60%),radial-gradient(circle_at_48%_86%,rgba(20,184,166,0.2),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-200">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">Rank #30 · Global 100</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">Holistic wellness movement</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Plexus: science-backed wellness, habit coaching, and ambassador-led impact.
              </h1>
              <p className="text-base text-slate-200/80">
                Plexus empowers ambassadors to transform health journeys with gut-focused nutrition, mindset coaching, and supportive communities.
                Their momentum proves that sustainable habits are built through connection and intelligence.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Co-author your growth roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  View investment plans
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-teal-200 hover:bg-teal-400/15">
                <Link href={demoHref}>
                  Request AI wellness demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-white/20 bg-white/10 shadow-[0_40px_80px_-50px_rgba(45,212,191,0.55)] backdrop-blur" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] border border-white/20 bg-white/10 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">Company snapshot</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {PLEXUS_SNAPSHOT.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.label} className="flex flex-col gap-3 rounded-3xl border border-white/15 bg-black/25 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-teal-100/80">{item.label}</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-400/15 text-teal-100">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                      <p className="text-2xl font-semibold text-white">{item.value}</p>
                      <p className="text-xs text-slate-200/70">{item.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="rounded-3xl border border-white/15 bg-black/20 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Ambassador DNA</h2>
                <div className="mt-4 grid gap-4">
                  {PLEXUS_SNAPSHOT.slice(4).map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-400/15 text-teal-100">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{item.value}</p>
                          <p className="text-xs text-slate-200/70">{item.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars that keep Plexus in growth mode</h2>
          <p className="text-sm text-muted-foreground">
            Plexus’s product and enablement strategy blends science with empathy, ensuring that every ambassador can deliver results and hope.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WELLNESS_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                  {pillar.proof}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-teal-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-teal-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(45,212,191,0.2),transparent_55%),radial-gradient(circle_at_72%_72%,rgba(34,197,94,0.2),transparent_55%)]" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Community edges that fuel retention and referrals</h2>
            <p className="text-sm text-muted-foreground">
              Plexus thrives because its ambassadors share real transformation journeys. Their supportive culture translates into measurable business momentum.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_EDGES.map((edge) => {
              const Icon = edge.icon;
              return (
                <article
                  key={edge.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{edge.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{edge.description}</p>
                  <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{edge.signal}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud MLM Software keeps Plexus-style brands agile and human</h2>
          <p className="text-sm text-muted-foreground">
            Harness AI to automate journeys, protect compliance, and inform leadership decisions—without losing the encouragement ambassadors provide.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_ENABLERS.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
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
              Explore wellness modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Strategise with our specialists
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

