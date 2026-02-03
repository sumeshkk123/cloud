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
  Brain,
  ClipboardList,
  Ear,
  FileCheck2,
  Handshake,
  MapPin,
  MessagesSquare,
  NotebookPen,
  PhoneCall,
  Shield,
  Target
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type PartnershipPrinciple = {
  title: string;
  detail: string;
  icon: IconType;
};

type WorkshopMoment = {
  phase: string;
  headline: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type ResultCard = {
  label: string;
  value: string;
  explanation: string;
  icon: IconType;
};

const PARTNERSHIP_PRINCIPLES: PartnershipPrinciple[] = [
  {
    title: "Listening-first discovery",
    detail: "Senior strategists map every stakeholder expectation before prescribing solutions.",
    icon: Ear
  },
  {
    title: "Clarity in every touchpoint",
    detail: "Workstreams, documentation, and demos remain concise so investment decisions feel effortless.",
    icon: ClipboardList
  },
  {
    title: "Seasoned technical leadership",
    detail: "Architects with enterprise experience translate vision into resilient delivery plans.",
    icon: Brain
  }
];

const WORKSHOP_MOMENTS: WorkshopMoment[] = [
  {
    phase: "Alignment",
    headline: "Vision casting with decision makers",
    description: "Facilitated sessions combined leadership goals, compliance needs, and product aspirations.",
    outcome: "Unified roadmap anchored in measurable milestones.",
    icon: Handshake
  },
  {
    phase: "Design",
    headline: "Storyboarded customer journeys",
    description: "Mapped onboarding, commerce, and support flows so everyone saw the experience end-to-end.",
    outcome: "Crystal-clear handoffs across marketing, IT, and support.",
    icon: NotebookPen
  },
  {
    phase: "Activation",
    headline: "Transparent delivery cadences",
    description: "Weekly demos, recorded walkthroughs, and actionable notes kept momentum high.",
    outcome: "Stakeholders always knew what shipped, what’s next, and how to prepare teams.",
    icon: MessagesSquare
  }
];

const RESULT_CARDS: ResultCard[] = [
  {
    label: "Time to clarity",
    value: "2 weeks",
    explanation: "From discovery kickoff to approved roadmap with sign-off from finance and legal.",
    icon: MapPin
  },
  {
    label: "Confidence score",
    value: "4.9/5",
    explanation: "Stakeholders rated understanding of the plan after each milestone review.",
    icon: Shield
  },
  {
    label: "Project velocity",
    value: "3x faster",
    explanation: "Decision cycles shrank because every option arrived with technical and commercial evidence.",
    icon: Target
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "INSYS Communication Testimonial | Guided MLM Transformation";
  const description =
    "Discover how INSYS Communication partnered with Cloud MLM Software for a transparent, expert-led implementation. Explore principles, workshops, and results.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/insys-communication", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InsysPageProps = {
  params: { lang: SupportedLocale };
};

export default function InsysPage({ params }: InsysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(6,182,212,0.2),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(59,130,246,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200">
              Guided transformation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              INSYS Communication trusted Cloud MLM Software to turn complexity into clarity.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “They made things very easy and clear, listened attentively, and answered our questions effectively. The team is not formed by beginners — Cloud MLM has the knowledge and ideas to get ahead with what we needed.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to a strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Review implementation demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Partnership principles</p>
            <div className="grid gap-4">
              {PARTNERSHIP_PRINCIPLES.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article key={principle.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{principle.title}</h3>
                      <p className="text-sm text-muted-foreground">{principle.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Workshop journey</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A communication cadence that builds trust at every step.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The team combined strategic workshops with disciplined documentation, ensuring each decision accelerated progress rather than slowing it.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {WORKSHOP_MOMENTS.map((moment) => {
            const Icon = moment.icon;
            return (
              <article key={moment.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{moment.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{moment.headline}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{moment.description}</p>
                <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-foreground dark:border-primary/30 dark:bg-primary/10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Outcome</p>
                  <p className="mt-1 text-sm text-foreground">{moment.outcome}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Results</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Proof that clarity speeds transformation.</h2>
            <p className="text-sm text-muted-foreground">
              INSYS Communication’s teams remain empowered because every engagement ends with decisions, not ambiguity.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RESULT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{card.label}</p>
                      <p className="text-2xl font-semibold text-foreground">{card.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{card.explanation}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-blue-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-blue-900/30">
          <div className="absolute left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready for the same clarity?</h2>
              <p className="text-sm text-muted-foreground">
                Bring us your challenges, constraints, and growth targets. We will guide your organisation with seasoned experts and transparent communication.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Schedule a clarity session
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Inspect transformation playbooks
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Bring to the session</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Strategic goals and market expansion timelines.</li>
                <li>• Existing technology landscape and integration needs.</li>
                <li>• Stakeholders required for rapid decisions.</li>
              </ul>
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
