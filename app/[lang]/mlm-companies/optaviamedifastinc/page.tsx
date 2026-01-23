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
  ClipboardCheck,
  Dumbbell,
  HandshakeIcon,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { Cpu, Flame, Leaf, UsersThree } from "@phosphor-icons/react/dist/ssr";

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
  signal: string;
  icon: IconType;
};

type CommunityStory = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type PlatformAdvantage = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const OPTAVIA_SNAPSHOT: Snapshot[] = [
  {
    label: "Revenue",
    value: "$501M",
    detail: "DSN Global 100 rank #31 underscores sustained demand for coach-led wellness wins.",
    icon: Sparkles
  },
  {
    label: "Founded",
    value: "1981",
    detail: "Medifast heritage evolved into OPTAVIA’s modern health coaching ecosystem.",
    icon: Flame
  },
  {
    label: "Headquarters",
    value: "Baltimore, Maryland",
    detail: "Corporate centre coordinating nutrition science, coach enablement, and supply chain.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "North American households seeking holistic, coach-supported transformation.",
    icon: Target
  },
  {
    label: "Employees",
    value: "464+",
    detail: "Cross-functional teams aligning med-grade nutrition with approachable coaching.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Multilevel · Compliance-first",
    detail: "Plan emphasises client outcomes, frontline mentorship, and responsible scaling.",
    icon: ShieldCheck
  },
  {
    label: "Product focus",
    value: "Health & wellness programs",
    detail: "Fuelings, Lean & Green meal guides, and habit-building curricula.",
    icon: Leaf
  },
  {
    label: "Sales method",
    value: "Person-to-person coaching",
    detail: "Independent coaches guide daily habits, accountability, and mindset resets.",
    icon: HandshakeIcon
  }
];

const WELLNESS_PILLARS: Pillar[] = [
  {
    title: "Habits of health.",
    description: "Structured education leads clients through mindset, nutrition, and movement pivots.",
    signal: "Micro-habit sequencing keeps momentum tangible for every lifestyle.",
    icon: ClipboardCheck
  },
  {
    title: "Coach-led accountability.",
    description: "Certified coaches deliver empathy, milestone tracking, and adaptive plans.",
    signal: "Daily check-ins and community threads reinforce behavioural change.",
    icon: UsersThree
  },
  {
    title: "Science-backed fuelings.",
    description: "Meal replacements and guides are crafted with clinically reviewed nutrition science.",
    signal: "Balanced macros promote consistent energy while supporting weight optimization.",
    icon: Activity
  }
];

const COMMUNITY_STORIES: CommunityStory[] = [
  {
    title: "Supportive coach networks",
    description: "Coaches share best practices, success stories, and compliance updates across digital hubs.",
    proof: "Regional mentorship teams and national conferences keep alignment strong.",
    icon: Users
  },
  {
    title: "Transformational journeys",
    description: "Client spotlights demonstrate real health wins and inspire new participants.",
    proof: "Case studies highlight sustainable results across diverse demographics.",
    icon: HeartPulse
  },
  {
    title: "Purpose-driven culture",
    description: "OPTAVIA empowers individuals to pay wellness forward and lead by example.",
    proof: "Volunteering, fundraisers, and community outreach extend impact beyond weight loss.",
    icon: Dumbbell
  }
];

const CLOUD_PLATFORM_ADVANTAGES: PlatformAdvantage[] = [
  {
    title: "Personalised journey orchestration",
    description: "Digitise OPTAVIA’s Habits of Health flow with AI-guided milestones, nudges, and resources.",
    payoff: "Keep every client on track with automated reminders and coach insights.",
    icon: Cpu
  },
  {
    title: "Outcome-based compensation clarity",
    description: "Visualise rank qualifications, client retention metrics, and cross-team mentorship rewards.",
    payoff: "Give coaches dashboards that celebrate progress and maintain compliance.",
    icon: ShieldCheck
  },
  {
    title: "Holistic community analytics",
    description: "Track engagement, habit adoption, and event impact across the ecosystem.",
    payoff: "Highlight where support is thriving and where additional coaching is needed.",
    icon: UsersThree
  },
  {
    title: "Integrated e-commerce and logistics",
    description: "Synchronise fueling subscriptions, marketplace upsells, and fulfilment data in one hub.",
    payoff: "Reduce manual ops so coaches can focus on relationships and results.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "OPTAVIA / Medifast Inc. Company Insights";
  const description =
    "Explore OPTAVIA’s $501M health movement—coach-led accountability, science-backed fuelings, and purpose-driven culture—and see how Cloud MLM Software powers similar wellness transformations.";
  const keywords = [
    "OPTAVIA MLM review",
    "Medifast compensation plan",
    "OPTAVIA health coaching model",
    "Cloud MLM Software wellness platform",
    "AI journey orchestration for MLM"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/optaviamedifastinc", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OptaviaPageProps = {
  params: { lang: SupportedLocale };
};

export default function OptaviaPage({ params }: OptaviaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#051b1c] via-[#103035] to-[#1b4747] py-20 text-white dark:border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(45,212,191,0.28),transparent_55%),radial-gradient(circle_at_74%_24%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_42%_88%,rgba(34,197,94,0.22),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-200">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">Rank #31 · Global 100</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">Habits of Health® Movement</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                OPTAVIA / Medifast Inc.: coach-led wellness with measurable habit transformation.
              </h1>
              <p className="text-base text-slate-200/80">
                OPTAVIA pairs clinically informed nutrition with compassionate coaching. The result? A thriving community that helps people adopt
                sustainable healthy habits and celebrate wins together.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Partner with our wellness team
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  Review investment options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-teal-200 hover:bg-teal-300/10">
                <Link href={demoHref}>
                  See an AI health demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-white/20 bg-white/10 shadow-[0_40px_80px_-50px_rgba(16,185,129,0.55)] backdrop-blur" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] border border-white/20 bg-white/10 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">Company snapshot</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {OPTAVIA_SNAPSHOT.slice(0, 4).map((item) => {
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
              <div className="grid gap-4 rounded-3xl border border-white/15 bg-black/20 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Operating DNA</h2>
                {OPTAVIA_SNAPSHOT.slice(4).map((item) => {
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
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars behind OPTAVIA’s results</h2>
          <p className="text-sm text-muted-foreground">
            Coaches guide clients through incremental wins. Nutritional science meets mindset coaching to create lasting change.
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
                <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{pillar.signal}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-teal-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-teal-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(45,212,191,0.2),transparent_55%),radial-gradient(circle_at_72%_72%,rgba(34,197,94,0.2),transparent_55%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.75fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
              Community heartbeat
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Coaches and clients create a feedback loop of success</h2>
            <p className="text-sm text-muted-foreground">
              OPTAVIA’s community thrives on credibility, vulnerability, and transformation stories. These elements propel referrals and build
              trust across households.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {COMMUNITY_STORIES.map((story) => {
              const Icon = story.icon;
              return (
                <article
                  key={story.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-primary/20 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-primary/30 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{story.description}</p>
                  <p className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                    {story.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software amplifies healthy habit movements</h2>
          <p className="text-sm text-muted-foreground">
            Build a resilient wellness organisation with automation, intelligence, and compliance at its core—without compromising the human touch
            coaches bring to every milestone.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_PLATFORM_ADVANTAGES.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <article
                key={advantage.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{advantage.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {advantage.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Review wellness modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Design your growth roadmap
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

