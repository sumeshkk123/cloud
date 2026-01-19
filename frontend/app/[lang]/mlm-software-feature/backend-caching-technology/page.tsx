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
  Activity,
  ArrowUpRight,
  Cpu,
  GaugeCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Workflow
} from "lucide-react";
import {
  CloudArrowUp,
  RocketLaunch,
  ShieldCheckered
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroInsight = {
  title: string;
  description: string;
  icon: IconType;
};

type Metric = {
  label: string;
  value: string;
  context: string;
  icon: IconType;
};

type PipelineStage = {
  title: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type Safeguard = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    title: "Instant field workspaces",
    description:
      "Cached dashboard, commission, and onboarding assets load from the browser first so distributors never wait on heavy payloads.",
    icon: GaugeCircle
  },
  {
    title: "Compression-first delivery",
    description:
      "Every release is bundled, gzipped, and minified so assets travel lean, arrive fast, and remain accessible across regions.",
    icon: CloudArrowUp
  },
  {
    title: "Predictable infrastructure",
    description:
      "Fewer server round trips mean steadier API throughput and more capacity for the transactions that truly need live data.",
    icon: Activity
  }
];

const PERFORMANCE_METRICS: Metric[] = [
  {
    label: "Static asset reuse",
    value: "80% served locally",
    context: "Browsers honour intelligent cache headers, rehydrating the interface without hitting the origin every session.",
    icon: Sparkles
  },
  {
    label: "Payload reduction",
    value: "Up to 65% smaller",
    context: "Gzip and minification trim scripts, styles, and imagery before delivery so global teams receive a lighter footprint.",
    icon: Cpu
  },
  {
    label: "Response efficiency",
    value: "<150 ms perceived",
    context: "With cached assets in place, live API calls are the only requests left—keeping experiences fluid and dependable.",
    icon: TimerReset
  }
];

const PIPELINE: PipelineStage[] = [
  {
    title: "Compress and bundle assets",
    summary: "Minified resources that travel fast",
    detail:
      "We package scripts, styles, and media through a minification pipeline and apply gzip so every file arrives lean without sacrificing fidelity.",
    icon: Workflow
  },
  {
    title: "Set intelligent cache headers",
    summary: "Local storage with defined lifecycles",
    detail:
      "Headers and versioning policies tell each browser how long to keep assets, ensuring repeat visits render instantly while sensitive data stays dynamic.",
    icon: Layers
  },
  {
    title: "Validate across releases",
    summary: "Performance that never compromises accuracy",
    detail:
      "Regression suites cover every plan, dashboard, and enrolment flow so caching never interferes with real-time compensation logic.",
    icon: ShieldCheck
  }
];

const SAFEGUARDS: Safeguard[] = [
  {
    title: "Release-by-release testing",
    description:
      "Each deployment includes automated and manual checks that confirm cached and dynamic zones behave exactly as compliance expects.",
    icon: ShieldCheckered
  },
  {
    title: "Granular cache scopes",
    description:
      "Only static assets and content slices earn long-lived cache times. Enrollment, wallets, and payouts always fetch live data.",
    icon: Activity
  },
  {
    title: "Rapid cache invalidation",
    description:
      "Version fingerprints and rollout playbooks let us expire assets instantly whenever configuration or branding shifts.",
    icon: RocketLaunch
  }
];

const title = "Backend Caching Technology | Cloud MLM Software";
const description =
  "Cloud MLM Software pairs gzip compression, minified resources, and intelligent cache policies to accelerate every MLM workspace while protecting dynamic data.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/mlm-software-feature/backend-caching-technology"
  },
  openGraph: {
    title,
    description
  }
};

type BackendCachingTechnologyPageProps = {
  params: { lang: SupportedLocale };
};

export default function BackendCachingTechnologyPage({
  params
}: BackendCachingTechnologyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-orange-50 via-white to-amber-100 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(249,115,22,0.15),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_50%_85%,rgba(253,186,116,0.18),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.5fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/70 px-4 py-1 text-sm font-semibold text-orange-700 dark:border-orange-400/50 dark:bg-slate-950/60 dark:text-orange-200">
                <Sparkles className="h-4 w-4" aria-hidden />
                Performance engineered caching
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Backend caching technology that keeps Cloud MLM Software instantly responsive.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                We combine advanced back-end caching with compression-first delivery to accelerate every workspace, dashboard, and enrolment flow across your organisation.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300/70">
                Assets are packed, gzipped, and cached with precision so browsers can reuse them locally—dramatically reducing server requests while leaving live compensation data untouched.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan my performance audit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-300/60 text-orange-700 hover:bg-orange-100 dark:border-orange-400/50 dark:text-orange-200 dark:hover:bg-slate-900/60"
              >
                <Link href={demoHref}>
                  Experience the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-orange-200/80 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-white/15 dark:bg-white/5">
            {HERO_INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.title}
                  className="flex flex-col gap-3 rounded-2xl border border-orange-200/60 bg-orange-50/90 p-5 dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-slate-800 dark:text-orange-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{insight.title}</h2>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{insight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How backend caching accelerates every MLM interaction
            </h2>
            <p className="text-sm text-muted-foreground">
              From compressing and packing resources to setting clear lifecycles, our pipeline boosts performance without disrupting dynamic workflows.
            </p>
            <div className="space-y-6">
              {PIPELINE.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <article
                    key={stage.title}
                    className="relative rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="absolute -left-9 top-6 hidden h-12 w-12 items-center justify-center rounded-full border border-orange-300/70 bg-white text-orange-600 dark:border-orange-400/60 dark:bg-slate-950/60 dark:text-orange-200 lg:flex">
                      <span className="text-lg font-semibold">{index + 1}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{stage.title}</h3>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">{stage.summary}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{stage.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-background to-orange-50 p-6 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-slate-950">
            <h3 className="text-lg font-semibold text-foreground">Why it matters</h3>
            <p className="text-sm text-muted-foreground">
              Caching removes redundant round trips so your infrastructure can dedicate power to real-time payouts, enrolment checks, and compliance logging.
            </p>
            <div className="grid gap-4">
              {PERFORMANCE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="rounded-2xl border border-border/60 bg-background/90 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">{metric.label}</span>
                        <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{metric.context}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Importance of back-end caching for modern MLM platforms
          </h2>
          <p className="text-sm text-muted-foreground">
            Distributors expect lightning-fast access to genealogy, rewards, and resources. Caching keeps pages interactive even during global launches, while targeted TTL policies protect every dynamic module.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SAFEGUARDS.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
        <div className="space-y-5 rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 shadow-sm dark:from-primary/10 dark:via-slate-950">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Does cache make the MLM software unstable or non-dynamic?
          </h2>
          <p className="text-sm text-muted-foreground">
            Never. We isolate sensitive experiences—wallet balances, sponsor changes, KYC workflows—from long-lived cache policies. Those routes always fetch fresh data so leaders operate on real numbers.
          </p>
          <p className="text-sm text-muted-foreground">
            Cache is reserved for static assets and preapproved content slices. By validating every release and staging environment, we confirm that performance gains never compromise accuracy or agility.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-primary/40 bg-background p-8 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Ready for a deeper walkthrough?</h3>
            <p className="text-sm text-muted-foreground">
              See how caching, compression, and dynamic safeguards come together in the current Cloud MLM Software release.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={contactHref}>
                Connect with an architect
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              <Link href={demoHref}>
                Join a guided session
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
