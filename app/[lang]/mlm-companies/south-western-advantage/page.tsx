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
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  Globe2,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users2
} from "lucide-react";
import { ChartLineUp, HandHeart, UsersFour, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type LearningPillar = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type StudentExperience = {
  title: string;
  summary: string;
  proof: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const SOUTHWESTERN_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$209M+",
    detail: "Mission-driven education company empowering student entrepreneurs since 1855.",
    icon: Sparkles
  },
  {
    label: "Founded",
    value: "1855 · Nashville",
    detail: "Historic commitment to personal growth, academic excellence, and servant leadership.",
    icon: GraduationCap
  },
  {
    label: "Community",
    value: "65+ employees & nationwide student reps",
    detail: "Seasonal field teams delivering educational resources door-to-door and online.",
    icon: Users2
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Expanding with digital classrooms, tutoring tools, and bilingual learning experiences.",
    icon: Globe2
  },
  {
    label: "Product focus",
    value: "Educational & personal development",
    detail: "Study guides, interactive learning apps, mentorship programmes, and family resources.",
    icon: BookOpen
  },
  {
    label: "Sales motion",
    value: "Person-to-person",
    detail: "Student-led consultations, community events, and school partnerships built on trust.",
    icon: HandHeart
  }
];

const LEARNING_PILLARS: LearningPillar[] = [
  {
    title: "Academic excellence",
    description:
      "Southwestern Advantage curates curriculum-aligned study systems, college prep resources, and language tools for every grade level.",
    emphasis: "Consultants tailor learning plans to each family’s goals, schedules, and learning styles.",
    icon: BookOpen
  },
  {
    title: "Entrepreneurial growth",
    description:
      "Student representatives gain real-world leadership skills, financial literacy, and resilience through experiential selling.",
    emphasis: "Mentorship frameworks and coaching communities build confidence that lasts beyond the summer.",
    icon: Lightbulb
  },
  {
    title: "Purpose and service",
    description:
      "Philanthropy initiatives, community service, and value-based leadership anchor every programme.",
    emphasis: "Families and students connect over shared missions, creating multi-generational impact.",
    icon: Compass
  }
];

const STUDENT_EXPERIENCES: StudentExperience[] = [
  {
    title: "Doorstep learning labs",
    summary:
      "Representatives bring interactive demos, study planners, and confidence coaching into family homes and neighbourhood hubs.",
    proof: "Engagement increases when families experience resources hands-on and receive tailored study action plans.",
    icon: UsersThree
  },
  {
    title: "Mentorship in motion",
    summary:
      "Daily calls, mastermind pods, and alumni mentors support student reps through every milestone and challenge.",
    proof: "Retention soars when mentorship data informs timely encouragement and skill-building modules.",
    icon: HandHeart
  },
  {
    title: "Campus-to-career journeys",
    summary:
      "Career workshops, leadership summits, and alumni networks turn seasonal experiences into lifelong advantages.",
    proof: "Career outcomes and referral loops expand when success stories are centralised and celebrated.",
    icon: UsersFour
  }
];

const CLOUD_SOUTHWESTERN_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Learning journey composer",
    description:
      "Map academic goals, assessment results, and family needs into AI-curated study itineraries and content bundles.",
    payoff: "Deliver personalised recommendations that evolve with each student’s milestones.",
    icon: GraduationCap
  },
  {
    title: "Field coaching cockpit",
    description:
      "Provide student reps with real-time dashboards, territory planning, and mentor feedback loops on any device.",
    payoff: "Empower leaders to coach proactively and celebrate wins with data-driven insights.",
    icon: ChartLineUp
  },
  {
    title: "Events & impact automation",
    description:
      "Coordinate school presentations, community fundraisers, and alumni gatherings with integrated communication and reporting.",
    payoff: "Keep purpose-led activities organised while capturing stories that inspire future cohorts.",
    icon: ShieldCheck
  },
  {
    title: "Mission analytics",
    description:
      "Track academic outcomes, scholarship contributions, and leadership growth to prove long-term value.",
    payoff: "Strengthen partnerships with data that showcases the difference Southwestern Advantage makes.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Southwestern Advantage Company Spotlight & Student Leadership Enablement";
  const description =
    "See how Southwestern Advantage empowers student entrepreneurs and families—and how Cloud MLM Software supports learning journeys, mentorship, and mission storytelling.";
  const keywords = [
    "Southwestern Advantage MLM review",
    "Student direct sales platform",
    "Southwestern Advantage consultant tools",
    "Cloud MLM Software for educational brands",
    "AI learning plan automation"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/south-western-advantage", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SouthwesternAdvantagePageProps = {
  params: { lang: SupportedLocale };
};

export default function SouthwesternAdvantagePage({ params }: SouthwesternAdvantagePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f7f9ff] via-[#f4faff] to-[#fef9f4] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-blue-950/40">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(251,191,36,0.18),transparent_60%),radial-gradient(circle_at_46%_85%,rgba(74,222,128,0.18),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-200">
              <span className="rounded-full border border-blue-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Learning without limits
              </span>
              <span className="rounded-full border border-amber-200/60 bg-amber-50/80 px-4 py-1 text-amber-600 shadow-sm backdrop-blur dark:border-amber-400/40 dark:bg-amber-900/40 dark:text-amber-200">
                Student-led leadership
              </span>
              <span className="rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-1 text-emerald-600 shadow-sm backdrop-blur dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-200">
                Mission-first culture
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Southwestern Advantage: education, entrepreneurship, and impact woven into every doorstep conversation.
              </h1>
              <p className="text-base text-muted-foreground">
                Southwestern Advantage elevates families and student reps through purposeful learning. Cloud MLM Software streamlines those journeys
                with personalised plans, mentorship dashboards, and mission analytics.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build your Southwestern platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Explore pricing tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-blue-100/60 dark:hover:bg-blue-500/20">
                <Link href={demoHref}>
                  Watch a student coach demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-blue-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(59,130,246,0.35)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {SOUTHWESTERN_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{metric.label}</h2>
                    </div>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-blue-50/60 p-10 shadow-lg shadow-blue-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:border-blue-400/40 dark:bg-blue-900/40 dark:text-blue-200">
            Learning pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Where education sparks opportunity and service.
          </h2>
          <p className="text-sm text-muted-foreground">
            Each Southwestern Advantage interaction is a lesson in leadership and empathy. Our platform keeps the playbook accessible and adaptable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {LEARNING_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-blue-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-blue-400/70 hover:shadow-xl dark:border-blue-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-200">{pillar.emphasis}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-amber-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-amber-900/40">
        <div
          className="absolute inset-x-0 top-16 h-60 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:border-amber-400/40 dark:bg-amber-900/40 dark:text-amber-200">
              Student experiences
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Guide students from doorstep to destiny with structure and heart.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software equips Southwestern leaders to orchestrate mentorship, track progress, and celebrate purpose-driven milestones.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-amber-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-amber-900/40">
            <ul className="space-y-6">
              {STUDENT_EXPERIENCES.map((experience) => {
                const Icon = experience.icon;
                return (
                  <li key={experience.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                      <p className="text-sm text-muted-foreground">{experience.summary}</p>
                      <p className="rounded-2xl border border-amber-200/60 bg-amber-50/70 p-4 text-xs text-amber-600 dark:border-amber-400/30 dark:bg-amber-900/40 dark:text-amber-200">
                        {experience.proof}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software advantage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Build a mission-aligned engine for Southwestern Advantage’s future.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software unifies education, mentorship, and impact analytics so Southwestern Advantage can inspire the next generation of
            leaders with clarity and care.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_SOUTHWESTERN_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-md transition hover:border-primary/50 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/85"
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
              Explore education modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Plan your mission roadmap
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

