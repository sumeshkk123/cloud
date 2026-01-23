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
  BarChart4,
  Building2,
  GaugeCircle,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { CloudArrowUp, UsersFour } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Showcase = {
  title: string;
  description: string;
  icon: IconType;
};

type Module = {
  title: string;
  benefits: string[];
};

type JourneyStep = {
  title: string;
  detail: string;
  duration: string;
};

type Outcome = {
  label: string;
  value: string;
  context: string;
};

const HERO_SHOWCASE: Showcase[] = [
  {
    title: "Strategy-led architecture",
    description:
      "Map compensation plans, compliance requirements, and analytics from day one to avoid costly rebuilds later.",
    icon: Building2
  },
  {
    title: "Modular product engineering",
    description:
      "Reusable services and API layers reduce time-to-launch for new markets, promotions, and revenue models.",
    icon: Layers3
  },
  {
    title: "Experience-first delivery",
    description:
      "Design distributor and customer journeys with research, design systems, and accessibility built in.",
    icon: Sparkles
  }
];

const PLATFORM_MODULES: Module[] = [
  {
    title: "Financial automation",
    benefits: [
      "Wallet, voucher, and commission engines audited for accuracy and localisation.",
      "Scenario planning tools to stress test payout structures before launch.",
      "Automated compliance checks for bonuses, incentives, and tax rules."
    ]
  },
  {
    title: "Engagement layer",
    benefits: [
      "Ticketing, announcements, and community features that keep the field connected.",
      "AI-assisted onboarding and coaching journeys tailored to each promoter.",
      "Multi-language, multi-currency support without sacrificing performance."
    ]
  },
  {
    title: "Data intelligence",
    benefits: [
      "Unified analytics and dashboards linking sales, promotions, and retention KPIs.",
      "Realtime alerts for churn, inventory, or compliance anomalies.",
      "Executive reporting packs delivered automatically to stakeholders."
    ]
  }
];

const DELIVERY_JOURNEY: JourneyStep[] = [
  {
    title: "Vision to blueprint",
    detail:
      "Co-create the target operating model, product roadmap, and technical guardrails to align stakeholders early.",
    duration: "Weeks 1-3"
  },
  {
    title: "Build to launch",
    detail:
      "Iterative releases, code reviews, and integrated QA environments keep work predictable and transparent.",
    duration: "Weeks 4-12"
  },
  {
    title: "Scale to optimise",
    detail:
      "Hypercare, telemetry dashboards, and capability training embed the platform in every market you serve.",
    duration: "Ongoing"
  }
];

const IMPACT_OUTCOMES: Outcome[] = [
  { label: "Platform adoption", value: "92%", context: "Average first-quarter active usage across global promoters." },
  { label: "Automation coverage", value: "85%", context: "Manual finance and support workflows replaced by Cloud MLM." },
  {
    label: "Launch velocity",
    value: "8 weeks",
    context: "Typical time from blueprint approval to first market production release."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software Development Services | Cloud MLM Software";
  const description =
    "Design, build, and scale enterprise MLM platforms with Cloud MLM Software. Strategy-led engineering, modular architecture, and automation-first delivery for modern direct selling brands.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/mlm-software-development", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MlmSoftwareDevelopmentPageProps = {
  params: { lang: SupportedLocale };
};

export default function MlmSoftwareDevelopmentPage({ params }: MlmSoftwareDevelopmentPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/50 bg-white dark:bg-slate-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left_top,rgba(15,118,110,0.16),transparent_55%),radial-gradient(circle_at_right_top,rgba(126,34,206,0.18),transparent_55%),radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
          <div className="space-y-6 py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:border-emerald-400/40 dark:text-emerald-300">
              Cloud MLM product studio
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Build an enterprise MLM platform that scales with every market launch.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              Cloud MLM Software’s development teams combine product strategy, UX, and deep engineering expertise to
              deliver software that fuels revenue, compliance, and field momentum. From greenfield builds to targeted
              modernisation initiatives, we create platforms that lead the industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a discovery workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-border/40 bg-background/70 p-6 shadow-lg ring-1 ring-black/5 dark:bg-slate-950/70">
            {HERO_SHOWCASE.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-border/40 bg-muted/40 p-5 dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1.5">
                    <h2 className="text-sm font-semibold text-foreground">{item.title}</h2>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A platform engineered with modular building blocks
          </h2>
          <p className="text-sm text-muted-foreground">
            We translate decades of MLM operational expertise into reusable modules that can be configured, extended, and
            governed by your team.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PLATFORM_MODULES.map((module) => (
            <article
              key={module.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-border/40 bg-white/90 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950/75"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {module.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-4 w-4 text-emerald-500" aria-hidden />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-300">
                <CloudArrowUp className="h-4 w-4" aria-hidden />
                Ready for rapid deployment
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.35),transparent_50%),radial-gradient(circle_at_bottom,rgba(79,70,229,0.25),transparent_55%)]" />
        <div className="container grid gap-10 py-16 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Delivery journey guided by measurable outcomes
            </h2>
            <p className="text-sm text-slate-200">
              Governance, visibility, and executive-ready reporting are embedded into every sprint so your leadership
              team always knows the next milestone.
            </p>
            <div className="space-y-4 rounded-3xl border border-white/20 bg-white/5 p-6">
              {IMPACT_OUTCOMES.map((outcome) => (
                <div key={outcome.label} className="flex items-start gap-4">
                  <GaugeCircle className="mt-1 h-5 w-5 text-emerald-300" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-200">{outcome.label}</p>
                    <p className="text-2xl font-semibold text-white">{outcome.value}</p>
                    <p className="text-xs text-slate-200/80">{outcome.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ol className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {DELIVERY_JOURNEY.map((phase, index) => (
              <li
                key={phase.title}
                className="relative flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg font-semibold text-white">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{phase.title}</h3>
                  <p className="text-sm text-slate-100">{phase.detail}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">
                  {phase.duration}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Why leading direct selling brands partner with us
            </h2>
            <p className="text-sm text-muted-foreground">
              Our cross-functional teams stay accountable beyond launch day. We provide knowledge transfer, continuous
              optimisation, and proactive insights that keep your business ahead of market shifts.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border/40 bg-white/80 p-6 text-sm shadow-sm dark:bg-slate-950/75">
                <Rocket className="h-5 w-5 text-emerald-500" aria-hidden />
                <p className="mt-3 text-muted-foreground">
                  Dedicated launch pods for major product releases, ensuring stability while scaling demand.
                </p>
              </div>
              <div className="rounded-3xl border border-border/40 bg-white/80 p-6 text-sm shadow-sm dark:bg-slate-950/75">
                <Workflow className="h-5 w-5 text-emerald-500" aria-hidden />
                <p className="mt-3 text-muted-foreground">
                  Integrated automation teams that connect finance, logistics, marketing, and support operations.
                </p>
              </div>
              <div className="rounded-3xl border border-border/40 bg-white/80 p-6 text-sm shadow-sm dark:bg-slate-950/75">
                <BarChart4 className="h-5 w-5 text-emerald-500" aria-hidden />
                <p className="mt-3 text-muted-foreground">
                  Decision intelligence dashboards providing real-time guidance for executives and field leaders.
                </p>
              </div>
              <div className="rounded-3xl border border-border/40 bg-white/80 p-6 text-sm shadow-sm dark:bg-slate-950/75">
                <UsersFour className="h-5 w-5 text-emerald-500" aria-hidden />
                <p className="mt-3 text-muted-foreground">
                  Human-centred change management with training playbooks and multilingual support teams.
                </p>
              </div>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 shadow-sm dark:border-emerald-400/30 dark:bg-emerald-500/10">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Let’s architect your next release</h3>
              <p className="text-sm text-muted-foreground">
                Share your product roadmap and we will assemble the ideal team to deliver it—from discovery experts to
                full-stack developers and AI practitioners.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-white/90">
              <Link href={contactHref}>
                Start the conversation
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>
    </div>
  );
}
