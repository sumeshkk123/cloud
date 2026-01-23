import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Beaker, BrainCircuit, CalendarClock, FlaskConical, HeartPulse, ShieldCheck, Sparkles, Stethoscope, Users } from "lucide-react";
import { ChartLineUp, GlobeHemisphereWest, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  caption: string;
  icon: IconType;
};

type SciencePillar = {
  title: string;
  insight: string;
  proof: string;
  icon: IconType;
};

type Program = {
  stage: string;
  detail: string;
  icon: IconType;
};

type Advisor = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    title: "Revenue",
    value: "$120.5M",
    caption: "DSN Global 100 ranking #75 for immune system innovation.",
    icon: ChartLineUp
  },
  {
    title: "Founded",
    value: "1996",
    caption: "Rooted in Quebec with deep partnerships across North America and Latin America.",
    icon: CalendarClock
  },
  {
    title: "Employees",
    value: "225+",
    caption: "Scientists, field mentors, and bilingual support teams backing consultants.",
    icon: Users
  }
];

const SCIENCE_PILLARS: SciencePillar[] = [
  {
    title: "Clinically validated nutrition",
    insight: "Immunocal and the broader wellness portfolio amplify glutathione production with peer-reviewed evidence.",
    proof: "Published studies in medical journals and hospital partnerships validate immune health outcomes.",
    icon: FlaskConical
  },
  {
    title: "Human-first community",
    insight: "Consultants operate as wellness mentors, guiding customers through lifestyle coaching and supplementation.",
    proof: "Field academies blend mindset, compliance, and health education to build confidence.",
    icon: HeartPulse
  },
  {
    title: "Ethical opportunity design",
    insight: "Compensation rewards customer retention, product sampling, and event education over hype-driven enrolment.",
    proof: "Multi-level plan emphasises preferred customers, bonuses for subscription loyalty, and science-led storytelling.",
    icon: ShieldCheck
  }
];

const PROGRAMS: Program[] = [
  {
    stage: "Science translation",
    detail: "Simplify clinical breakthroughs into conversational guides, short explainer videos, and FAQ libraries.",
    icon: BrainCircuit
  },
  {
    stage: "Wellness rituals",
    detail: "Bundle daily routines—Immunocal, hydration prompts, and activity trackers—to keep customers compliant.",
    icon: Stethoscope
  },
  {
    stage: "Community proof",
    detail: "Encourage testimonial circles and physician partnerships to reinforce credibility and ongoing care.",
    icon: UsersThree
  }
];

const CLOUD_PLAYS: Advisor[] = [
  {
    title: "Regulated content vault",
    description: "Centralise medical references, income disclosures, and brand-approved visuals for multilingual markets.",
    highlight: "Cloud MLM Software gatekeeps content access with version control and approval trails.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Consultant health console",
    description: "Track customer milestones, supplement adherence, and event attendance for each wellness cohort.",
    highlight: "AI nudges flag attrition risk and suggest precise follow-up campaigns.",
    icon: Sparkles
  },
  {
    title: "Clinical partner integrations",
    description: "Combine lab data, enrolment analytics, and loyalty orders to evidence impact for physicians and regulators.",
    highlight: "Secure APIs sync with EMR and fulfilment partners without compromising privacy.",
    icon: Beaker
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Immunotec Research Ltd Growth Blueprint";
  const description =
    "Discover how Immunotec Research Ltd pairs clinically-backed immune support with community-driven mentorship, and learn how Cloud MLM Software levels up wellness-focused MLM operations.";
  const keywords = [
    "Immunotec Research Ltd",
    "Immunocal opportunity analysis",
    "Wellness MLM software",
    "Immune health direct selling insights",
    "Cloud MLM Software for wellness brands"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/immunotec-research-ltd", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ImmunotecPageProps = {
  params: { lang: SupportedLocale };
};

export default function ImmunotecPage({ params }: ImmunotecPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/20 bg-gradient-to-br from-white via-[#f5f0ff] to-[#dfe8ff] py-20 text-slate-900 dark:border-primary/25 dark:from-slate-950 dark:via-indigo-950 dark:to-sky-950 dark:text-white">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(circle_at_86%_28%,rgba(37,99,235,0.22),transparent_60%),radial-gradient(circle_at_52%_88%,rgba(56,189,248,0.25),transparent_58%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.6fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:border-white/25 dark:bg-white/10 dark:text-indigo-100">
              #75 • Immunotec Research Ltd (Canada → Mexico)
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Science-led immune support powering people-centric entrepreneurship.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Immunotec’s community of wellness mentors champions clinically validated nutrition, responsible compensation, and heartfelt
                education. Reverse-engineer their formula to modernise your own health innovation launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Explore the AI wellness cockpit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-indigo-500/10 text-indigo-700 hover:bg-indigo-500/20 dark:bg-white/10 dark:text-white">
                <Link href={pricingHref}>
                  Assess pricing options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-500/10 dark:border-white/40 dark:text-white">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-indigo-200/70 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-white/20 dark:bg-slate-950/70">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-200">Momentum markers</span>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Data points illustrating Immunotec’s immune health authority.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.title} className="flex h-full flex-col gap-2 rounded-2xl border border-indigo-100/80 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/60">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-indigo-700/80 dark:text-indigo-100/80">{metric.title}</p>
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-200/80">{metric.caption}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Immunotec sustains trust</h2>
          <p className="text-sm text-muted-foreground">
            Community, science, and compliance shape every aspect of the Immunotec experience. Adopt these pillars to future-proof your own
            wellness venture.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SCIENCE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-indigo-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/50"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.insight}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-white py-20 dark:border-border/40 dark:bg-slate-950/80">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_26%_18%,rgba(76,29,149,0.16),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(14,165,233,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.8fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Wellness journey design
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Blueprint customer experiences that feel like health coaching.
            </h2>
            <p className="text-sm text-muted-foreground">
              Immunotec empowers consultants to become educators. Use this three-stage programme to replicate their retention advantage.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {PROGRAMS.map((program) => {
              const Icon = program.icon;
              return (
                <article
                  key={program.stage}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-indigo-100 bg-indigo-50/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{program.stage}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{program.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for health innovators
          </h2>
          <p className="text-sm text-muted-foreground">
            Equip your consultants with the compliance guardrails, data models, and AI-guided engagement Immunotec relies on.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{play.highlight}</span>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              View pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Talk to a strategist
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
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
