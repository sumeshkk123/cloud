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
  Compass,
  Cpu,
  Globe2,
  Layers,
  LineChart,
  MonitorCheck,
  Puzzle,
  Rocket,
  Sparkles,
  Spline
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type PlatformValue = {
  title: string;
  detail: string;
  icon: IconType;
};

type DeliveryWave = {
  label: string;
  focus: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type MetricHighlight = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

const PLATFORM_VALUES: PlatformValue[] = [
  {
    title: "Stability at scale",
    detail: "Elastic infrastructure balances network surges and flash promotions with automated safeguards.",
    icon: Layers
  },
  {
    title: "Speed for product teams",
    detail: "Component library accelerates new funnels and campaign pages while keeping branding precise.",
    icon: Sparkles
  },
  {
    title: "Security by design",
    detail: "Encryption, audit trails, and governance workflows keep sensitive commission data protected.",
    icon: MonitorCheck
  }
];

const DELIVERY_WAVES: DeliveryWave[] = [
  {
    label: "Wave 01",
    focus: "Experience blueprinting",
    description: "Mapped field journeys, admin checkpoints, and third-party integrations required for the launch.",
    outcome: "Shared visual map aligned every stakeholder around the true customer path.",
    icon: Compass
  },
  {
    label: "Wave 02",
    focus: "Performance-ready stack",
    description: "Provisioned infrastructure, caching tiers, and zero-downtime deployment pipelines.",
    outcome: "Time-to-market for new modules dropped from weeks to days.",
    icon: Cpu
  },
  {
    label: "Wave 03",
    focus: "Scale rituals",
    description: "Instituted release cadences, observability dashboards, and roadmapping sessions.",
    outcome: "Roadmap conversations now start with metrics and end with decisive prioritisation.",
    icon: Globe2
  }
];

const METRIC_HIGHLIGHTS: MetricHighlight[] = [
  {
    title: "Deployment velocity",
    value: "3× faster",
    description: "New customer journeys launch in a third of the time compared to their previous stack.",
    icon: Rocket
  },
  {
    title: "Conversion uplift",
    value: "+27%",
    description: "Refined onboarding sequences improved enrolment conversion across primary markets.",
    icon: LineChart
  },
  {
    title: "Support deflection",
    value: "38%",
    description: "Embedded guides and contextual prompts reduced repetitive support tickets.",
    icon: Puzzle
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Creamos Webs Soluciones Testimonial | Cloud MLM Software";
  const description =
    "Learn how Creamos Webs Soluciones launched a simple, stable, and scalable MLM platform with Cloud MLM Software. Explore delivery waves and performance gains.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/creamos-webs-soluciones", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CreamosPageProps = {
  params: { lang: SupportedLocale };
};

export default function CreamosPage({ params }: CreamosPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-amber-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_78%_22%,rgba(248,113,113,0.18),transparent_58%),radial-gradient(circle_at_50%_88%,rgba(251,146,60,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200">
              Platform launch narrative
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Creamos Webs Soluciones scales with a simple, stable, and powerful Cloud MLM platform.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “Simple, stable, scalable, quick troubleshooting, safe — a great and powerful platform to launch your MLM business online.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect your launch
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  See platform in action
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Core platform values</p>
            <div className="grid gap-4">
              {PLATFORM_VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.detail}</p>
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
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Delivery waves</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A phased approach kept strategy, performance, and governance aligned.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Each wave built on the previous, giving Creamos Webs Soluciones confidence to accelerate customer acquisition while keeping operations calm.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {DELIVERY_WAVES.map((wave) => {
            const Icon = wave.icon;
            return (
              <article key={wave.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{wave.label}</p>
                    <h3 className="text-lg font-semibold text-foreground">{wave.focus}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{wave.description}</p>
                <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-foreground dark:border-primary/30 dark:bg-primary/10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Outcome</p>
                  <p className="mt-1 text-sm text-foreground">{wave.outcome}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Impact dashboard</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Metrics the leadership team tracks weekly.</h2>
            <p className="text-sm text-muted-foreground">
              Product, marketing, and operations teams share a real-time command centre highlighting how the platform performs across markets.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {METRIC_HIGHLIGHTS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.title}</p>
                      <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-orange-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-orange-900/30">
          <div className="absolute left-12 top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Build your next launch on a reliable backbone.</h2>
              <p className="text-sm text-muted-foreground">
                Tell us about your product cadence, integration landscape, and community vision. We’ll assemble a roadmap that keeps your platform stable while innovation accelerates.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Co-design your blueprint
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    View configuration paths
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Discovery checklist</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current hosting, CDN, and monitoring stack.</li>
                <li>• Growth goals by country and distributor segment.</li>
                <li>• Desired automation for onboarding and retention journeys.</li>
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
