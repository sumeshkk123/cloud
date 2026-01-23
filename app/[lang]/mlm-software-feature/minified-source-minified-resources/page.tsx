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
  CheckCircle2,
  ClipboardList,
  Gauge,
  Layers3,
  Rocket,
  ServerCog,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  CloudCheck,
  CodeSimple,
  FileCode,
  RocketLaunch
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type InsightCard = {
  title: string;
  description: string;
  footnote: string;
  icon: IconType;
};

type PipelineStage = {
  title: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type ImpactArea = {
  title: string;
  description: string;
  bullets: string[];
};

type PerformanceStat = {
  value: string;
  label: string;
  detail: string;
};

type ReadinessItem = {
  title: string;
  description: string;
};

const HERO_BULLETS = [
  "CSSmin strips unused selectors, comments, and whitespace before assets ever hit cache.",
  "JSmin with packer compression reduces script payloads and server round trips for global teams.",
  "Clean, minified output improves Google PageSpeed signals without disturbing design integrity."
];

const CODE_SNIPPET = `// asset-pipeline.config.js
export default {
  css: {
    minify: true,
    engine: "cssmin",
    combine: ["theme.css", "dashboard.css"],
    removeComments: true
  },
  javascript: {
    minify: true,
    engine: "jsmin",
    packer: "brotli",
    bundle: ["core.js", "reports.js", "support.js"],
    versioning: "content-hash"
  }
};`;

const INSIGHT_CARDS: InsightCard[] = [
  {
    title: "Precision CSS pipelines",
    description:
      "CSSmin eliminates dead declarations and compresses typography rules so every module loads leaner and renders identically across themes.",
    footnote: "Cleaned selectors and whitespace savings maintain accessibility while keeping bundle sizes below 30KB.",
    icon: CodeSimple
  },
  {
    title: "JavaScript packer orchestration",
    description:
      "JSmin and packer libraries collapse micro-scripts into modular bundles, cutting outbound requests for admin, distributor, and public portals.",
    footnote: "Consolidated bundles mean fewer server handshakes and faster perceived response times in low-bandwidth regions.",
    icon: FileCode
  },
  {
    title: "Continuous performance assurance",
    description:
      "Automated audits benchmark PageSpeed metrics before and after every release, ensuring minification never disrupts UI polish or data integrity.",
    footnote: "Regression dashboards surface any layout shift or CLS variance so design fidelity stays intact.",
    icon: CloudCheck
  }
];

const PIPELINE_STAGES: PipelineStage[] = [
  {
    title: "Discover & classify assets",
    focus: "Inventory + tagging",
    detail:
      "We map CSS, JS, and template fragments, distinguishing critical render paths from deferred assets before automation kicks in.",
    icon: ClipboardList
  },
  {
    title: "Automate minification",
    focus: "Engine tuning",
    detail:
      "CSSmin and JSmin rulesets are calibrated per module so animations, gradients, and conditional logic remain expressive while outputs stay compact.",
    icon: Gauge
  },
  {
    title: "Bundle & version",
    focus: "Delivery orchestration",
    detail:
      "Packer compression plus hashed filenames keep CDN caches warm, guaranteeing every locale serves the most efficient build.",
    icon: Layers3
  },
  {
    title: "Monitor in production",
    focus: "Insights & alerts",
    detail:
      "Synthetic monitors watch page speed, server round trips, and UI regressions—triggering workflows before distributors notice friction.",
    icon: Workflow
  }
];

const IMPACT_AREAS: ImpactArea[] = [
  {
    title: "Experience designed for every connection speed",
    description:
      "Distributors on mobile hotspots feel the same responsiveness as corporate analysts on fibre.",
    bullets: [
      "Balanced payloads keep dashboards under the three-second engagement threshold.",
      "Lazy loading prioritises genealogy, payouts, and compliance data ahead of decorative assets.",
      "Graceful fallbacks guarantee core flows remain usable even when ancillary scripts are deferred."
    ]
  },
  {
    title: "Reliable UI that never breaks under compression",
    description:
      "Design systems remain pixel-perfect because we validate every minified release against component libraries.",
    bullets: [
      "Snapshot testing tracks spacing, colour tokens, and motion smoothing across themes.",
      "Rollbacks are instant thanks to versioned bundles and immutable deployment artefacts.",
      "Security reviews ensure obfuscated code stays auditable for enterprise compliance teams."
    ]
  }
];

const PERFORMANCE_STATS: PerformanceStat[] = [
  {
    value: "65%",
    label: "fewer server round trips",
    detail: "Combining scripts with packer compression removes redundant fetches on initial load."
  },
  {
    value: "<1s",
    label: "first meaningful paint",
    detail: "Optimised CSS delivery keeps hero content readable before asynchronous modules hydrate."
  },
  {
    value: "98",
    label: "Google PageSpeed target",
    detail: "Minified outputs plus clean HTML structure consistently score in the high 90s for desktop and mobile."
  }
];

const READINESS_ITEMS: ReadinessItem[] = [
  {
    title: "Legacy asset review",
    description: "Share current CSS and JavaScript inventories so we can stage the minification pipeline without disrupting active releases."
  },
  {
    title: "Regional performance goals",
    description: "Define acceptable load thresholds for your priority markets—we tailor compression ratios accordingly."
  },
  {
    title: "Change-management rhythm",
    description: "Walk us through your release cadence to align automated audits with QA and stakeholder sign-off."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Minified Source & Resources for MLM Software";
  const description =
    "Accelerate your MLM platform with expertly minified CSS and JavaScript. Cloud MLM Software delivers lean bundles, fewer server round trips, and consistent design integrity.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/minified-source-minified-resources", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MinifiedResourcesPageProps = {
  params: { lang: SupportedLocale };
};

export default function MinifiedResourcesPage({ params }: MinifiedResourcesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const featuresHref = buildLocalizedPath("/features", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">
              <Sparkles className="h-4 w-4" aria-hidden />
              Minified Source & Resources
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Lean, dependable assets that keep your MLM experience fast everywhere.
              </h1>
              <p className="text-base text-slate-200/85">
                Cloud MLM Software orchestrates CSSmin, JSmin, and packer compression so every dashboard, genealogy chart, and payout flow loads swiftly—even on constrained networks. Minification is engineered alongside design, ensuring brand integrity while eliminating clutter from the source.
              </p>
              <p className="text-sm text-slate-200/70">
                The legacy WordPress insights powering this feature now live inside a modern asset pipeline that safeguards accessibility, localisation, and enterprise governance.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {HERO_BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-white/90">
                <Link href={contactHref}>
                  Plan my optimisation
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary-foreground/90 hover:bg-primary/10 hover:text-primary-foreground"
              >
                <Link href={featuresHref}>
                  Explore all features
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="border border-transparent bg-white/5 text-slate-200 hover:bg-white/10"
              >
                <Link href={demoHref}>
                  View live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative rounded-3xl border border-white/10 bg-black/50 p-6 shadow-2xl backdrop-blur">
            <div className="absolute inset-x-6 top-6 -z-10 h-40 rounded-3xl bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/30 blur-2xl" aria-hidden />
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span>Asset pipeline</span>
              <span className="flex items-center gap-1 text-emerald-300">
                <Rocket className="h-3.5 w-3.5" aria-hidden />
                Live
              </span>
            </div>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/80 p-6 text-xs leading-relaxed text-sky-100">
              <code>{CODE_SNIPPET}</code>
            </pre>
            <p className="mt-4 text-xs text-slate-300/80">
              Every release runs through this configuration—automatically versioned, audited, and rolled back if a component deviates from spec.
            </p>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What minified resources mean inside Cloud MLM Software
          </h2>
          <p className="text-sm text-muted-foreground">
            These insights are reimagined from the previous site content and tuned for today’s enterprise deployments of Cloud MLM Software.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {INSIGHT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm">
                <div className="space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </div>
                <p className="mt-6 text-xs text-muted-foreground/80">{card.footnote}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/15 via-background to-background" aria-hidden />
        <div className="container space-y-12 py-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The optimisation pipeline that protects your brand
            </h2>
            <p className="text-sm text-muted-foreground">
              Each release follows a governed workflow so minification accelerates speed while respecting UX, compliance, and localisation requirements.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              {PIPELINE_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <article key={stage.title} className="relative pl-10">
                    <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="space-y-2 rounded-3xl border border-border/60 bg-background/60 p-6">
                      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                        <span>{stage.title}</span>
                        <span className="text-primary/70">Step {index + 1}</span>
                      </div>
                      <p className="text-sm font-semibold text-foreground">{stage.focus}</p>
                      <p className="text-sm text-muted-foreground">{stage.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="space-y-6 rounded-3xl border border-primary/30 bg-primary/5 p-8 dark:bg-slate-950/40">
              <div className="flex items-start gap-3">
                <RocketLaunch className="mt-1 h-6 w-6 text-primary" aria-hidden />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Smoother go-lives, fewer surprises</h3>
                  <p className="text-sm text-muted-foreground">
                    By pairing automation with human oversight, we keep your production stack performant and predictable. The result: faster launches with confidence that branding and accessibility remain intact.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {PERFORMANCE_STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center shadow-sm dark:border-primary/40 dark:bg-slate-950/50">
                    <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{stat.label}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {IMPACT_AREAS.map((area) => (
            <article key={area.title} className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-background/70 p-8 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {area.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 via-background to-background" aria-hidden />
        <div className="container grid gap-12 py-20 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What we need to start your optimisation sprint
            </h2>
            <p className="text-sm text-muted-foreground">
              Providing these details upfront lets our engineers deploy minification without disrupting active enrolments, payout approvals, or support operations.
            </p>
            <div className="space-y-4">
              {READINESS_ITEMS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-background/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 text-sm shadow-sm dark:bg-slate-950/50">
            <div className="flex items-center gap-3">
              <ServerCog className="h-6 w-6 text-primary" aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Implementation canvas</p>
                <p className="text-sm text-muted-foreground">
                  Every sprint is co-piloted by performance engineers and UX leads so speed gains never sacrifice polish.
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" aria-hidden />
                <span>Dual-environment testing keeps staging and production assets in lockstep with versioned releases.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" aria-hidden />
                <span>Internationalisation hooks ensure locale-specific content stays fully translated after compression.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" aria-hidden />
                <span>Security review sign-offs accompany every deployment so auditors can trace and approve optimisations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-10 text-center shadow-lg dark:bg-slate-950/60">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_60%)]" aria-hidden />
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to ship faster, lighter releases?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Let’s align minification, caching, and deployment so every Cloud MLM Software experience feels immediate and trustworthy.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={contactHref}>
                Start the conversation
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary/10"
            >
              <Link href={demoHref}>
                See optimisation in action
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
