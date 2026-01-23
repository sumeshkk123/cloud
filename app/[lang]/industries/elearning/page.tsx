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
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Globe,
  Layers3,
  ShieldCheck,
  Shuffle,
  SignalHigh,
  UsersRound
} from "lucide-react";
import {
  ChalkboardTeacher,
  CirclesThreePlus,
  GraduationCap,
  Lightning,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  value: string;
  label: string;
  detail: string;
  icon: IconType;
};

type Challenge = {
  title: string;
  description: string;
};

type Solution = {
  title: string;
  description: string;
  icon: IconType;
};

type Module = {
  title: string;
  summary: string;
  icon: IconType;
};

type Sprint = {
  stage: string;
  focus: string;
  description: string;
};

const HERO_STATS: Stat[] = [
  {
    value: "35%",
    label: "increase in course completion",
    detail: "Personalised nudges and affiliate mentorship programmes improve retention across self-paced journeys.",
    icon: GraduationCap
  },
  {
    value: "4x",
    label: "faster partner onboarding",
    detail: "Automated enrolment, compliance checklists, and LMS integrations accelerate go-live timelines.",
    icon: BadgeCheck
  },
  {
    value: "24/7",
    label: "global learner support",
    detail: "Unified ticketing and multilingual knowledge bases keep educators, mentors, and learners aligned.",
    icon: UsersFour
  }
];

const CHALLENGES: Challenge[] = [
  {
    title: "Crowded learning marketplaces",
    description: "Differentiating course value, credentials, and partner incentives requires data-backed storytelling."
  },
  {
    title: "Engagement drop-off",
    description: "Maintaining momentum through long-form content demands automated reminders and personalised journeys."
  },
  {
    title: "Scale without chaos",
    description: "Growing enrolments, affiliates, and product lines stresses legacy finance, commission, and support systems."
  }
];

const SOLUTIONS: Solution[] = [
  {
    title: "Adaptive compensation playbooks",
    description:
      "Launch Binary, Matrix, Unilevel, and hybrid plans tailored for course bundles, certification tracks, and community cohorts.",
    icon: Shuffle
  },
  {
    title: "Affiliate intelligence",
    description:
      "Give mentors, influencers, and resellers real-time dashboards with conversion analytics, commission visibility, and retention triggers.",
    icon: BarChart3
  },
  {
    title: "Learning experience governance",
    description:
      "Synchronise LMS, ecommerce, and marketing stacks to deliver consistent content, pricing, and credentialing workflows.",
    icon: Layers3
  },
  {
    title: "Global-ready infrastructure",
    description:
      "Operate across currencies, languages, and territories with compliance-ready payouts and localisation toolkits.",
    icon: Globe
  }
];

const PLATFORM_MODULES: Module[] = [
  {
    title: "Multi-currency & localisation",
    summary: "Accept payments and reward commissions in the learner’s preferred currency without manual reconciliation.",
    icon: SignalHigh
  },
  {
    title: "Intelligent ticketing",
    summary: "Route learner questions to mentors, capture sentiment, and monitor service-levels across channels.",
    icon: Lightning
  },
  {
    title: "Automated communications",
    summary: "Trigger onboarding guides, completion reminders, and certification celebrations with sequenced email journeys.",
    icon: ChalkboardTeacher
  },
  {
    title: "Secure e-wallet",
    summary: "Provide educators and affiliates with real-time commission balances, withdrawal rules, and audit-ready histories.",
    icon: ShieldCheck
  },
  {
    title: "Data resilience",
    summary: "Protect content libraries and learner records with encrypted backups and role-based access controls.",
    icon: BrainCircuit
  },
  {
    title: "Mobile-first micro-learning",
    summary: "Deliver bite-sized lessons, progress tracking, and push notifications through the Cloud MLM mobile app.",
    icon: UsersRound
  }
];

const DELIVERY_SPRINTS: Sprint[] = [
  {
    stage: "01",
    focus: "Vision mapping",
    description:
      "Align on programme goals, course catalogue priorities, and the partner ecosystem supporting acquisition and retention."
  },
  {
    stage: "02",
    focus: "Experience design",
    description:
      "Shape learner journeys, mentor dashboards, and compensation logic with rapid prototyping across devices."
  },
  {
    stage: "03",
    focus: "Automation rollout",
    description:
      "Connect LMS, CRM, and finance systems, then activate notifications, payouts, and compliance reporting."
  },
  {
    stage: "04",
    focus: "Growth optimisation",
    description:
      "Monitor cohort outcomes, iterate incentives, and scale into new markets with insight-driven experimentation."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "E-learning MLM Software";
  const description =
    "Transform online education with Cloud MLM Software—adaptive compensation, affiliate intelligence, and global-ready automation for e-learning leaders.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/elearning", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ElearningPageProps = {
  params: { lang: SupportedLocale };
};

export default function ElearningPage({ params }: ElearningPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-violet-100 via-white to-slate-50 py-20 dark:border-border/40 dark:from-indigo-950 dark:via-slate-950 dark:to-slate-950/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(167,139,250,0.28),transparent_52%),radial-gradient(circle_at_82%_24%,rgba(129,140,248,0.24),transparent_60%),radial-gradient(circle_at_50%_88%,rgba(196,181,253,0.22),transparent_58%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                E-learning growth engine
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for e-learning brands that turn expertise into communities.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Package courses, certifications, and coaching programmes with automated enrolment, adaptive rewards, and learner support designed for always-on education businesses.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan your education launch
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore the learning demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article key={stat.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/70 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/70 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Industry pressures</p>
            <div className="space-y-5">
              {CHALLENGES.map((challenge) => (
                <article key={challenge.title} className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                  <h2 className="text-sm font-semibold text-foreground">{challenge.title}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{challenge.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Review learning platform packages
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Solutions crafted for digital education ecosystems</h2>
          <p className="text-sm text-muted-foreground">
            Unite content delivery, community management, and compensation models under one secure operating system.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <article key={solution.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-6">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Platform modules that empower modern academies</h2>
            <p className="text-sm text-muted-foreground">
              Blend monetisation, learner care, and data protection through modules refined for education-first enterprises.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PLATFORM_MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-violet-100 p-8 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-indigo-900/40">
            <div className="absolute -left-20 top-1/4 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 h-56 w-56 translate-y-1/3 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-900/30" aria-hidden />
            <div className="relative space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Implementation sprints that keep teams aligned</h2>
              <p className="text-sm text-muted-foreground">
                Move from product vision to learner delight with collaborative milestones, stakeholder workshops, and iterative releases.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Map business outcomes and prioritise course launches.</p>
                <p>• Prepare data migrations, mentor enablement, and automations.</p>
                <p>• Validate adoption through pilot cohorts and scale confidently.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {DELIVERY_SPRINTS.map((sprint) => (
              <article
                key={sprint.stage}
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60"
              >
                <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" aria-hidden />
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{sprint.stage}</p>
                  <h3 className="text-lg font-semibold text-foreground">{sprint.focus}</h3>
                  <p className="text-sm text-muted-foreground">{sprint.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-primary/90 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.25),transparent_62%)]" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to elevate your academy?</h2>
              <p className="text-sm text-slate-200">
                Share your curriculum roadmap, affiliate strategy, and learner success goals. We will translate them into a Cloud MLM Software blueprint with measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <Link href={contactHref}>
                    Talk with an education strategist
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={demoHref}>
                    See Cloud MLM in action
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">What to prepare</p>
              <ul className="space-y-2">
                <li>• Key courses, certifications, and pricing tiers.</li>
                <li>• Partner personas, incentives, and compliance rules.</li>
                <li>• Technology stack inventory and integration priorities.</li>
              </ul>
              <p className="text-xs text-slate-300">Receive a strategic proposal and rollout plan within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
