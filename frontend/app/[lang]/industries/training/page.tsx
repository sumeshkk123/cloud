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
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Layers,
  Lightbulb,
  Sparkles,
  Users2,
  Workflow
} from "lucide-react";
import {
  ChalkboardTeacher,
  ChartBarHorizontal,
  Headset,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  value: string;
  label: string;
  description: string;
  icon: IconType;
};

type FocusArea = {
  title: string;
  description: string;
  icon: IconType;
};

type Phase = {
  step: string;
  title: string;
  description: string;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

const IMPACT_SIGNALS: Signal[] = [
  {
    value: "+52%",
    label: "learner engagement",
    description: "Personalised cohorts, social learning, and adaptive nudges drive completion rates across programs.",
    icon: Users2
  },
  {
    value: "30 days",
    label: "global rollout",
    description: "Prebuilt templates accelerate localisation, certification, and partner onboarding worldwide.",
    icon: Sparkles
  },
  {
    value: "4.9/5",
    label: "satisfaction scores",
    description: "Real-time feedback loops surface improvements and showcase ROI to leadership.",
    icon: Lightbulb
  }
];

const TRAINING_FOCUS: FocusArea[] = [
  {
    title: "Blended learning journeys",
    description: "Combine live workshops, micro-learning, and coaching with automated reminders and resources.",
    icon: ChalkboardTeacher
  },
  {
    title: "Partner enablement",
    description: "Deliver certification dashboards, competency tracking, and incentive programs for channel partners.",
    icon: UsersThree
  },
  {
    title: "Support excellence",
    description: "Equip customer success and helpdesk teams with knowledge bases and scenario-based practice.",
    icon: Headset
  }
];

const DEPLOYMENT_PHASES: Phase[] = [
  {
    step: "01",
    title: "Learning vision alignment",
    description: "Clarify learner personas, success metrics, and content strategy with executive sponsors and SMEs."
  },
  {
    step: "02",
    title: "Experience blueprinting",
    description: "Map journeys, assessments, and mentorship touchpoints with prototypes for stakeholder review."
  },
  {
    step: "03",
    title: "Automation & launch",
    description: "Integrate LMS, CRM, and analytics; activate certifications, communities, and AI guidance."
  },
  {
    step: "04",
    title: "Continuous optimisation",
    description: "Measure capability lift, retention, and revenue impact to refine curriculum quarterly."
  }
];

const PLATFORM_MODULES: Module[] = [
  {
    title: "Curriculum design studio",
    detail: "Structure pathways, prerequisites, and competency frameworks with drag-and-drop ease.",
    icon: Layers
  },
  {
    title: "Assessment intelligence",
    detail: "Build adaptive quizzes, scenario simulations, and skills scoring with automated certification tracking.",
    icon: ClipboardCheck
  },
  {
    title: "Knowledge concierge",
    detail: "Offer contextual recommendations, AI search, and virtual assistants to answer learner questions instantly.",
    icon: BookOpen
  },
  {
    title: "Community activation",
    detail: "Host cohorts, discussion boards, and peer challenges with moderation and gamification controls.",
    icon: GraduationCap
  },
  {
    title: "Program analytics",
    detail: "Monitor completion, performance, and business impact with dashboards aligned to leadership outcomes.",
    icon: ChartBarHorizontal
  },
  {
    title: "Operations automation",
    detail: "Automate enrollment, reminders, and accreditation refreshers with workflow builder tooling.",
    icon: Workflow
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Training Industry MLM Software";
  const description =
    "Elevate training organisations with Cloud MLM Software—blended learning journeys, partner enablement, and analytics that prove capability growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/training", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TrainingPageProps = {
  params: { lang: SupportedLocale };
};

export default function TrainingPage({ params }: TrainingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-indigo-50 via-white to-slate-50 py-20 dark:border-border/40 dark:from-indigo-950 dark:via-slate-950 dark:to-slate-950/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(129,140,248,0.22),transparent_55%),radial-gradient(circle_at_80%_26%,rgba(59,130,246,0.2),transparent_58%),radial-gradient(circle_at_52%_88%,rgba(165,180,252,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Training innovation hub
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for training leaders turning knowledge into advantage.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Connect curriculum design, learner engagement, and partner enablement from a single platform that keeps content fresh and outcomes measurable.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build your learning transformation plan
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore the training demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {IMPACT_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article key={signal.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold text-foreground">{signal.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{signal.label}</p>
                    <p className="text-sm text-muted-foreground">{signal.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Where leaders invest</p>
            <div className="space-y-5">
              {TRAINING_FOCUS.map((focus) => {
                const Icon = focus.icon;
                return (
                  <article key={focus.title} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-sm font-semibold text-foreground">{focus.title}</h2>
                      <p className="text-xs text-muted-foreground">{focus.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Review enablement tiers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Deployment phases that guide sustainable learning programs</h2>
            <p className="text-sm text-muted-foreground">
              Structured sprints keep instructional designers, subject matter experts, and business sponsors aligned.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {DEPLOYMENT_PHASES.map((phase) => (
              <article key={phase.step} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">{phase.step}</p>
                <h3 className="text-base font-semibold text-foreground">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Platform modules that power high-performing academies</h2>
          <p className="text-sm text-muted-foreground">
            Support every aspect of the learning lifecycle—from curriculum design to measurement and ongoing support.
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
                <p className="text-sm text-muted-foreground">{module.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-background to-indigo-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_32%,rgba(129,140,248,0.2),transparent_60%),radial-gradient(circle_at_75%_24%,rgba(59,130,246,0.22),transparent_62%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Showcase learning impact to stakeholders</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <ChalkboardTeacher className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Instructor excellence dashboards</h3>
                <p className="mt-2 text-sm text-muted-foreground">Track facilitator ratings, coaching interactions, and certification progress in real time.</p>
              </article>
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <UsersThree className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Community momentum</h3>
                <p className="mt-2 text-sm text-muted-foreground">Visualise cohort collaboration, peer recognition, and knowledge sharing trends.</p>
              </article>
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <Workflow className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Capability impact</h3>
                <p className="mt-2 text-sm text-muted-foreground">Correlate learning outcomes with sales performance, customer satisfaction, and retention.</p>
              </article>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(129,140,248,0.3),transparent_62%),radial-gradient(circle_at_78%_24%,rgba(59,130,246,0.24),transparent_64%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to champion learning excellence?</h2>
            <p className="text-sm text-slate-200">
              Share your curriculum goals, learner demographics, and success metrics. We will deliver a Cloud MLM Software action plan aligned to your vision.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Connect with our training consultants
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Request the training demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Workshop preparation</p>
              <ul className="space-y-2">
                <li>• Curriculum inventory, accreditation requirements, and audience segments.</li>
                <li>• Current learning tech stack, data flows, and reporting cadence.</li>
                <li>• Business KPIs tied to learning, from productivity to revenue lift.</li>
              </ul>
              <p className="text-xs text-slate-300">Receive a phased roadmap, measurement framework, and change enablement plan within one business day.</p>
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
