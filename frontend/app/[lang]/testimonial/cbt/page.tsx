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
  AlarmClock,
  ArrowUpRight,
  BarChart3,
  CalendarCheck,
  Headset,
  HeartHandshake,
  LifeBuoy,
  MessageCircle,
  Sparkles,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CoverageItem = {
  title: string;
  detail: string;
  icon: IconType;
};

type ImpactMetric = {
  label: string;
  value: string;
  context: string;
  icon: IconType;
};

type SupportMoment = {
  phase: string;
  highlight: string;
  takeaway: string;
  icon: IconType;
};

const COVERAGE_ITEMS: CoverageItem[] = [
  {
    title: "Global follow-the-sun desks",
    detail: "Tiered engineers monitor critical workflows across North America, EMEA, and APAC so tickets never wait overnight.",
    icon: LifeBuoy
  },
  {
    title: "Automation that triages smarter",
    detail: "AI-summarised diagnostics and heat-mapped dashboards allow the first responder to resolve incidents on the first reply.",
    icon: Workflow
  },
  {
    title: "Executive healthcasts",
    detail: "Quarterly business reviews translate support insights into product direction and leadership-ready dashboards.",
    icon: BarChart3
  }
];

const IMPACT_METRICS: ImpactMetric[] = [
  {
    label: "SLA adherence",
    value: "99.4%",
    context: "Tickets resolved inside 30-minute acknowledgement and 4-hour resolution windows.",
    icon: AlarmClock
  },
  {
    label: "Customer effort score",
    value: "4.9/5",
    context: "Respondents report being able to refocus on growth work immediately after each engagement.",
    icon: HeartHandshake
  },
  {
    label: "Escalation reduction",
    value: "62%",
    context: "First-touch knowledge base and co-browsing reduced escalation load dramatically quarter over quarter.",
    icon: Sparkles
  }
];

const SUPPORT_MOMENTS: SupportMoment[] = [
  {
    phase: "Launch runway",
    highlight: "Shadow launches with dual support pods",
    takeaway: "Ensured product and support teams rehearsed likely scenarios so the go-live remained calm.",
    icon: CalendarCheck
  },
  {
    phase: "Hypercare sprint",
    highlight: "Always-on communication loops",
    takeaway: "Chat, voice, and incident rooms ran in parallel, giving CBT peace of mind that no anomaly went unnoticed.",
    icon: Headset
  },
  {
    phase: "Continuous optimisation",
    highlight: "Predictive maintenance signals",
    takeaway: "Proactive alerts spot usage drifts early, freeing leaders to focus on expansion rather than firefighting.",
    icon: MessageCircle
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "CBT Testimonial | Cloud MLM Software Support Excellence";
  const description =
    "Discover how CBT leverages Cloud MLM Software’s always-on support. Explore the coverage model, impact metrics, and service moments that keep growth on track.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/cbt", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CbtPageProps = {
  params: { lang: SupportedLocale };
};

export default function CbtPage({ params }: CbtPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const supportHref = buildLocalizedPath("/support", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(165,180,252,0.2),transparent_58%),radial-gradient(circle_at_48%_86%,rgba(56,189,248,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-200">
              Always-on partner care
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              CBT keeps scaling with Cloud MLM Software’s proactive support fabric.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “If needed, they are always available to take care of any technical issues right away, giving us peace of mind so we can focus on more important things to keep our business growing.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Start a support blueprint
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={supportHref}>
                  Explore knowledge base
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Service coverage</p>
            <div className="grid gap-4">
              {COVERAGE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Impact metrics</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Confidence backed by measurable responsiveness.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            CBT’s teams stay focused on customer acquisition because platform reliability is paired with human expertise whenever help is required.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {IMPACT_METRICS.map((metric) => {
            const Icon = metric.icon;
            return (
              <article key={metric.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{metric.context}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Service moments</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">The journey from launch to long-term optimisation.</h2>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Support scales with CBT’s roadmap, combining human specialists with AI copilots to remove friction at every stage.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {SUPPORT_MOMENTS.map((moment) => {
              const Icon = moment.icon;
              return (
                <article key={moment.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{moment.phase}</p>
                      <h3 className="text-lg font-semibold text-foreground">{moment.highlight}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{moment.takeaway}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-sky-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-sky-900/30">
          <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bring the same calm to your operations.</h2>
              <p className="text-sm text-muted-foreground">
                Share your service-level expectations, customer hand-offs, and target growth markets. We will tailor a support experience that anticipates issues before they appear.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Schedule a discovery call
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={supportHref}>
                    Review support resources
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Discovery essentials</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Desired SLAs, working hours, and holiday coverage expectations.</li>
                <li>• Integrations or data flows that impact customer experience.</li>
                <li>• Target metrics for satisfaction, retention, or ticket deflection.</li>
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
