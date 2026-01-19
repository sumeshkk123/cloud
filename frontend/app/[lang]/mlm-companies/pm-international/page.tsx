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
  Building2,
  Globe2,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2
} from "lucide-react";
import {
  ChartLineUp,
  Factory,
  FirstAid,
  Handshake,
  Lightning,
  UsersFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Narrative = {
  title: string;
  summary: string;
  insight: string;
  icon: IconType;
};

type FieldPlay = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type PlatformEdge = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const PM_INTERNATIONAL_METRICS: Metric[] = [
  {
    label: "Global rank",
    value: "#24 · DSN 100",
    detail: "A top-tier wellness enterprise recognised for consistent year-over-year volume.",
    icon: TrendingUp
  },
  {
    label: "Revenue",
    value: "$834M+",
    detail: "Solid revenue delivered through premium FitLine nutrition and skin care ranges.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1993 · Rolf Sorg",
    detail: "Family-led leadership headquartered in Schengen, Luxembourg with a future-first vision.",
    icon: Building2
  },
  {
    label: "Consultant community",
    value: "500+ employees · thousands of partners",
    detail: "Entrepreneurs across Europe and Asia orchestrate in-person and digital experiences.",
    icon: Users2
  },
  {
    label: "Primary market",
    value: "Germany & EU",
    detail: "Expanding wellness footprint through multi-language, multi-market go-to-market motions.",
    icon: Globe2
  },
  {
    label: "Sales motion",
    value: "Human-first events",
    detail: "Person-to-person guidance, hybrid gatherings, and rapid reorders via subscriptions.",
    icon: Handshake
  }
];

const PRODUCT_NARRATIVES: Narrative[] = [
  {
    title: "FitLine nutrient delivery science",
    summary:
      "Flagship products are engineered with microSolve® technology to enhance bioavailability and measurable wellness outcomes.",
    insight:
      "Consultants lean on lab-backed talking points and compliance-ready content to reassure discerning consumers.",
    icon: Microscope
  },
  {
    title: "Holistic health positioning",
    summary:
      "Nutrition, beauty, and performance lines are bundled into lifestyle rituals that blend vitality, confidence, and recovery.",
    insight:
      "Seasonal campaigns, athlete endorsements, and real-world transformations power storytelling at every rank.",
    icon: HeartPulse
  },
  {
    title: "Responsible sourcing and quality",
    summary:
      "ISO-certified manufacturing, in-house R&D, and rigorous quality checks uphold PM-International’s premium promise.",
    insight:
      "Traceable supply chains and sustainability commitments resonate with conscious consumers and regulators alike.",
    icon: Factory
  }
];

const FIELD_PLAYS: FieldPlay[] = [
  {
    title: "Entrepreneur-centric mentoring",
    description:
      "Structured onboarding, leadership academies, and business coaching paths accelerate consultant confidence.",
    proof:
      "Field data shows higher retention when mentors have access to performance dashboards and training automation.",
    icon: UsersThree
  },
  {
    title: "Hybrid event orchestration",
    description:
      "From living-room wellness tastings to livestreamed product launches, experiences stay intimate yet scalable.",
    proof:
      "AI-curated event kits, RSVP flows, and post-event nurturing increase conversion velocity and upsell potential.",
    icon: Sparkles
  },
  {
    title: "Compensation clarity",
    description:
      "Multi-level rewards emphasise customer love, leadership development, and global profit-sharing pools.",
    proof:
      "Interactive plan builders and automated recognition keep milestones visible, fuelling rank advancement momentum.",
    icon: ShieldCheck
  }
];

const CLOUD_PMI_EDGES: PlatformEdge[] = [
  {
    title: "Always-on wellness journeys",
    description:
      "Combine health assessments, replenishment nudges, and FitLine habit loops inside one AI-personalised hub.",
    payoff: "Deliver concierge-grade care that motivates reorder frequency and referral enthusiasm.",
    icon: FirstAid
  },
  {
    title: "Field intelligence command centre",
    description:
      "Surface pipeline risk, rank pacing, and community sentiment with real-time dashboards and predictive alerts.",
    payoff: "Give corporate and leaders the foresight to intervene, coach, and celebrate before momentum dips.",
    icon: Lightning
  },
  {
    title: "Cross-border compliance guardrails",
    description:
      "Localise compensation, taxation, and product documentation while automating policy acknowledgment trails.",
    payoff: "Scale responsibly in highly regulated markets without slowing expansion programmes.",
    icon: ShieldCheck
  },
  {
    title: "Unified consultant experience",
    description:
      "Empower every partner with multilingual mobile, enrolment, and content tools aligned to PM-International branding.",
    payoff: "Protect brand equity while enabling entrepreneurial creativity across cultures.",
    icon: UsersFour
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "PM-International MLM Company Profile & FitLine Growth Insights";
  const description =
    "Explore PM-International’s FitLine-powered wellness empire—discover core metrics, product innovation, field culture, and how Cloud MLM Software accelerates compliant, personalised growth.";
  const keywords = [
    "PM-International MLM review",
    "FitLine product strategy",
    "PM-International compensation plan",
    "Cloud MLM Software for wellness brands",
    "AI tools for PM-International distributors"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/pm-international", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PMInternationalPageProps = {
  params: { lang: SupportedLocale };
};

export default function PMInternationalPage({ params }: PMInternationalPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f2f7ff] via-white to-[#f7f0ff] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-blue-950/40">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(79,70,229,0.12),transparent_55%),radial-gradient(circle_at_75%_25%,rgba(236,72,153,0.12),transparent_60%),radial-gradient(circle_at_50%_85%,rgba(99,102,241,0.15),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary/70 dark:text-primary/60">
              <span className="rounded-full border border-primary/30 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                Rank #24 · Global Wellness
              </span>
              <span className="rounded-full border border-rose-200/50 bg-rose-50/80 px-4 py-1 text-rose-500 shadow-sm backdrop-blur dark:border-rose-400/30 dark:bg-rose-900/40 dark:text-rose-200">
                FitLine® innovation leader
              </span>
              <span className="rounded-full border border-indigo-200/50 bg-indigo-50/70 px-4 py-1 text-indigo-500 shadow-sm backdrop-blur dark:border-indigo-300/30 dark:bg-indigo-900/40 dark:text-indigo-200">
                Schengen · Luxembourg
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                PM-International: premium wellness rituals, science-backed storytelling, and thriving field leadership.
              </h1>
              <p className="text-base text-muted-foreground">
                PM-International unites trusted FitLine formulations with an entrepreneurial culture that celebrates health transformations. From
                Luxembourg to global markets, the brand blends responsible manufacturing, multi-market compliance, and joyful community-building.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Co-create your PM-International platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Review deployment tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-primary/10 dark:hover:bg-primary/20">
                <Link href={demoHref}>
                  Explore AI guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.75rem] border border-primary/30 bg-white/80 shadow-[0_40px_90px_-60px_rgba(99,102,241,0.5)] backdrop-blur dark:border-white/10 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-6 rounded-[2.5rem] p-8">
              {PM_INTERNATIONAL_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/40 p-5 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:from-slate-900/70 dark:via-slate-900/50 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</h2>
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

      <section className="container grid gap-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-primary/5 p-10 shadow-lg shadow-primary/5 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Product leadership
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            FitLine science keeps the brand at the forefront of global wellness retail.
          </h2>
          <p className="text-sm text-muted-foreground">
            PM-International’s R&D engine ensures every formulation supports real-world wellness goals. Consultants lean on validated claims,
            visible transformations, and easy-to-explain protocols to earn trust across competitive health segments.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCT_NARRATIVES.map((narrative) => {
            const Icon = narrative.icon;
            return (
              <article
                key={narrative.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-primary/20 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl dark:border-primary/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{narrative.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{narrative.summary}</p>
                <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{narrative.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-b from-background via-background to-primary/5 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/20">
        <div
          className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)] blur-3xl dark:opacity-60"
          aria-hidden
        />
        <div className="container relative z-10 space-y-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500 dark:border-indigo-400/40 dark:bg-indigo-900/40 dark:text-indigo-200">
                Field culture
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Consultant confidence grows when experiences stay human and data-driven.
              </h2>
              <p className="text-sm text-muted-foreground">
                PM-International equips its leaders with modern enablement—tight onboarding, event playbooks, and transparent compensation
                insights that celebrate coaching, wellness impact, and sustained customer retention.
              </p>
            </div>
            <div className="rounded-[2.5rem] border border-border/50 bg-white/80 p-8 shadow-lg shadow-indigo-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/80 dark:shadow-indigo-900/40">
              <ul className="space-y-6">
                {FIELD_PLAYS.map((play) => {
                  const Icon = play.icon;
                  return (
                    <li key={play.title} className="flex gap-4">
                      <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                        <p className="text-sm text-muted-foreground">{play.description}</p>
                        <p className="rounded-2xl border border-indigo-200/60 bg-indigo-50/60 p-4 text-xs text-indigo-600 dark:border-indigo-400/40 dark:bg-indigo-900/40 dark:text-indigo-200">
                          {play.proof}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software advantage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Future-proof PM-International’s ecosystem with one connected, AI-accelerated platform.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software centralises compliance, customer journeys, and leadership insights so that PM-International can scale FitLine
            communities without sacrificing the personal touch that built the brand’s reputation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_PMI_EDGES.map((edge) => {
            const Icon = edge.icon;
            return (
              <article
                key={edge.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-md transition hover:border-primary/50 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{edge.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{edge.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {edge.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Explore wellness-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Architect your expansion plan
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

