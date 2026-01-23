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
  BarChart3,
  CalendarCheck,
  ClipboardList,
  Clock3,
  Gift,
  LineChart,
  PartyPopper,
  Sparkles,
  Target,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Benefit = {
  title: string;
  description: string;
  icon: IconType;
};

type WorkflowStage = {
  title: string;
  subtitle: string;
  detail: string;
  icon: IconType;
};

type Metric = {
  label: string;
  value: string;
  context: string;
};

type Enablement = {
  title: string;
  summary: string;
  icon: IconType;
};

const BENEFITS: Benefit[] = [
  {
    title: "Instant earning snapshots",
    description:
      "Model personal sales, hostess rewards, and team overrides in minutes so consultants walk into every party with clarity.",
    icon: BarChart3
  },
  {
    title: "Conversion-ready scripts",
    description:
      "Translate average order values into actionable invite lists, storytelling prompts, and upsell moments for hosts.",
    icon: PartyPopper
  },
  {
    title: "Event cadence mastery",
    description:
      "Balance in-home, virtual, and pop-up parties while keeping rolling four-week calendars profitable and compliant.",
    icon: CalendarCheck
  }
];

const WORKFLOW: WorkflowStage[] = [
  {
    title: "Plan the experience",
    subtitle: "Align product curation with guest personas",
    detail:
      "Use the calculator to estimate attendance, set stretch goals, and lock in hostess benefits that maintain healthy margins.",
    icon: ClipboardList
  },
  {
    title: "Coach the host",
    subtitle: "Give hosts a runway to success",
    detail:
      "Auto-generate shareable checklists, reminders, and sampling strategies so every gathering stays on-message and on-brand.",
    icon: Gift
  },
  {
    title: "Capture every order",
    subtitle: "Make it seamless to buy during and after the party",
    detail:
      "Pair QR-enabled order flows with follow-up prompts that recover abandoned carts and convert guests into future hosts.",
    icon: Sparkles
  },
  {
    title: "Optimize the encore",
    subtitle: "Transform celebrations into repeat revenue",
    detail:
      "Track rebook rates, team incentives, and guest-to-consultant conversions to keep momentum compounding each month.",
    icon: Target
  }
];

const METRICS: Metric[] = [
  {
    label: "Average party GMV uplift",
    value: "+41%",
    context: "When consultants follow calculator-backed sales scripts."
  },
  {
    label: "Follow-up conversion",
    value: "31%",
    context: "Guests converting within 72 hours of the event."
  },
  {
    label: "Host retention window",
    value: "90 days",
    context: "Recommended cadence for encore party offers."
  }
];

const ENABLEMENT: Enablement[] = [
  {
    title: "Consultant playbooks",
    summary: "Story-driven run-of-show templates tailored to product themes, incentives, and seasonal campaigns.",
    icon: LineChart
  },
  {
    title: "Leadership dashboards",
    summary: "Track team momentum, party cadence, and coaching impact with drill-down analytics.",
    icon: Users
  },
  {
    title: "Real-time pacing alerts",
    summary: "Automated nudges keep high-potential parties on track with volume targets and reward unlocks.",
    icon: Clock3
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Party Plan MLM Calculator";
  const description =
    "Forecast sales, rewards, and recruiting momentum for every party with Cloud MLM Software’s party plan calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/party-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PartyPlanCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function PartyPlanCalculatorPage({ params }: PartyPlanCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const consultingHref = buildLocalizedPath("/mlm-consulting", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-fuchsia-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(244,114,182,0.35),transparent_55%),radial-gradient(circle_at_78%_20%,rgba(56,189,248,0.25),transparent_50%),radial-gradient(circle_at_70%_78%,rgba(161,98,255,0.28),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/60 bg-fuchsia-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-fuchsia-100">
              Party plan intelligence
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Turn every party into predictable revenue with calculator-guided planning.
            </h1>
            <p className="max-w-2xl text-base text-fuchsia-50/85">
              Equip consultants, hosts, and leaders with real-time forecasts, engagement scripts, and pacing alerts that keep celebrations profitable and on-brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Watch the calculator walkthrough
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-fuchsia-200/60 text-fuchsia-100 hover:bg-fuchsia-400/10"
              >
                <Link href={consultingHref}>
                  Design your party playbook
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full bg-fuchsia-400/40 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
              <span>Live event tracker</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold">
                <PartyPopper className="h-3.5 w-3.5" aria-hidden />
                18 parties in flight
              </span>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/20 bg-slate-950/40 p-4 text-sm text-slate-100/80">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <BarChart3 className="h-4 w-4" aria-hidden />
                  Forecasted GMV
                </span>
                <span>$86,400</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Parties this week
                </span>
                <span>42 scheduled</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Users className="h-4 w-4" aria-hidden />
                  New consultant prospects
                </span>
                <span>67 identified</span>
              </div>
            </div>
            <p className="text-xs text-fuchsia-50/75">
              Stakeholders monitor performance against stretch goals while automations surface parties that need additional coaching.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Calculate the moments that matter most
          </h2>
          <p className="text-sm text-muted-foreground">
            Equip your field with actionable insights before, during, and after every party so success is repeatable and measurable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A guided workflow from invite list to encore event
            </h2>
            <p className="text-sm text-muted-foreground">
              The party plan calculator delivers coaching cues and pacing dashboards that honour the human touch while keeping revenue goals front and centre.
            </p>
          </div>
          <div className="grid gap-6">
            {WORKFLOW.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.title}
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <div className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
                        {stage.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground">{stage.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Momentum insights
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Track what fuels recruiting, retention, and revenue
            </h2>
            <p className="text-sm text-muted-foreground">
              Dashboards transform calculator outputs into leadership-ready insights—helping you allocate coaching hours, recognition budgets, and marketing dollars where they matter most.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">{metric.label}</span>
                  <span className="text-3xl font-semibold text-foreground">{metric.value}</span>
                  <span className="text-xs text-muted-foreground">{metric.context}</span>
                </article>
              ))}
            </div>
          </div>
          <aside className="relative space-y-6 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-fuchsia-50 p-8 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-fuchsia-900/30">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 h-52 w-52 translate-y-1/3 rounded-full bg-fuchsia-200/30 blur-3xl dark:bg-fuchsia-900/30" aria-hidden />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/40 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm dark:bg-slate-950/50">
                <Sparkles className="h-4 w-4" aria-hidden />
                Celebration coaching series
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Partner with party plan strategists who blend data, storytelling, and community.
              </h3>
              <p className="text-sm text-muted-foreground">
                Our consultants tailor sequences for new consultants, veteran leaders, and host communities—ensuring every event feels fresh, on-brand, and profitable.
              </p>
              <Button asChild size="lg">
                <Link href={consultingHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-slate-100 p-10 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-200/30 blur-3xl dark:bg-fuchsia-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to choreograph your next wave of parties?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your compensation plan, product mix, and growth goals. We will configure the Party Plan MLM Calculator, deliver launch playbooks, and map enablement for your teams.
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-primary/30 dark:bg-slate-950/70">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Implementation timeline</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-primary">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden />
                  30 days
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Playbooks delivered</span>
                <span className="font-semibold text-foreground">12</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Post-launch coaching</span>
                <span className="font-semibold text-foreground">Quarterly workshops</span>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request your launch kit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
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
