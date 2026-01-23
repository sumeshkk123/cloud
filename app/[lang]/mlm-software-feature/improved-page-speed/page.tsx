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
  Gauge,
  Layers,
  Link2,
  Rocket,
  Sparkles,
  Timer
} from "lucide-react";
import {
  CloudArrowUp,
  Lightning,
  PlugsConnected,
  RocketLaunch,
  ShieldStar,
  WifiHigh
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type PerformanceSignal = {
  label: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type Practice = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ExperienceLayer = {
  title: string;
  description: string;
  highlights: string[];
};

type EngineeringCommitment = {
  title: string;
  items: string[];
  icon: IconType;
};

const PERFORMANCE_SIGNALS: PerformanceSignal[] = [
  {
    label: "Time to value",
    headline: "Sub-2s first interaction",
    detail:
      "Server-side rendering pipelines stream critical content first, so distributors can start working without waiting for heavy scripts to load.",
    icon: Timer
  },
  {
    label: "Lean delivery",
    headline: "60% lighter payloads",
    detail:
      "Progressive image formats, differential bundling, and CDN-tuned caching keep assets compact across global markets.",
    icon: Gauge
  },
  {
    label: "Always responsive",
    headline: "Adaptive across every device",
    detail:
      "Viewport-aware layouts render only what is needed, balancing fluid responsiveness with stable performance on slow networks.",
    icon: WifiHigh
  }
];

const PRACTICES: Practice[] = [
  {
    title: "Intelligent asset choreography",
    summary: "We orchestrate how content loads so pages feel instantaneous even under pressure.",
    bullets: [
      "Progressive image optimisation matches connection speed and device pixel density.",
      "Resource compression and HTTP/3 delivery remove redundant bytes before they hit the browser.",
      "Critical CSS is inlined while non-essential styles stream asynchronously."
    ],
    icon: RocketLaunch
  },
  {
    title: "Frictionless navigation",
    summary: "Reducing redirects and redundant calls safeguards momentum for every user flow.",
    bullets: [
      "Route prefetching anticipates common journeys across dashboards, payouts, and analytics.",
      "Link hygiene policies ensure there is always a direct path to high-intent actions.",
      "Role-based caching keeps sensitive data fresh without forcing full reloads."
    ],
    icon: Link2
  },
  {
    title: "Precision-built scripts",
    summary: "Rewriting third-party dependencies into native modules unlocks full control over performance.",
    bullets: [
      "Custom hooks replace bulky plugins while preserving mission-critical functionality.",
      "JavaScript bundles are minified, deduplicated, and scoped to specific views.",
      "Automated profiling flags regressions before they reach production deployments."
    ],
    icon: Lightning
  }
];

const EXPERIENCE_LAYERS: ExperienceLayer[] = [
  {
    title: "Human-centric speed decisions",
    description:
      "Our R&D team pairs performance diagnostics with journey mapping, ensuring optimisations never compromise clarity or trust.",
    highlights: [
      "Readability-first typography supports long-form compensation analysis.",
      "Accessible colour palettes deliver consistent contrast in light and dark modes.",
      "Micro-interactions confirm every save, approval, or payout adjustment."
    ]
  },
  {
    title: "Cross-device mastery",
    description:
      "Interfaces resize with intention—from mobile approvals on commuter trains to multi-monitor leadership dashboards in HQ.",
    highlights: [
      "Viewport-aware rendering delivers only the panes relevant to the active session.",
      "Touch targets adapt to screen size to remove friction for field sellers.",
      "Server response tuning addresses low-bandwidth environments without feature loss."
    ]
  },
  {
    title: "Insights that scale",
    description:
      "Compliance, finance, and enablement teams receive speed reports that translate directly into action.",
    highlights: [
      "Synthetic and real-user monitoring expose the exact moments a slowdown appears.",
      "Lightweight dashboards summarise render time, redirect counts, and asset weight.",
      "Performance recommendations feed into quarterly release notes for complete transparency."
    ]
  }
];

const ENGINEERING_COMMITMENTS: EngineeringCommitment[] = [
  {
    title: "Optimise every request",
    items: [
      "Minify and combine stylesheets to reduce chatty network calls.",
      "Bundle scripts by context so only essential logic ships with each route.",
      "Debug and tune backend response times before features leave staging."
    ],
    icon: Layers
  },
  {
    title: "Quality without compromise",
    items: [
      "Balance UX polish and speed, validating each release with PageSpeed Insights.",
      "Select dependable, legible fonts that hold up under global localisation.",
      "Build native modules instead of leaning on brittle third-party plugins."
    ],
    icon: ShieldStar
  },
  {
    title: "Future-ready infrastructure",
    items: [
      "Container-friendly deployment keeps scaling predictable across cloud or VPS.",
      "Automated compression jobs run with every CI pipeline execution.",
      "Observability tooling surfaces anomalies the moment they appear."
    ],
    icon: PlugsConnected
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Improved Page Speed";
  const description =
    "Cloud MLM Software loads in moments thanks to progressive assets, minified resources, and research-driven performance engineering.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/improved-page-speed", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ImprovedPageSpeedPageProps = {
  params: { lang: SupportedLocale };
};

export default function ImprovedPageSpeedPage({ params }: ImprovedPageSpeedPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 text-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-black">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.3),transparent_58%),radial-gradient(circle_at_100%_100%,rgba(94,234,212,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-300/10 px-4 py-1 text-sm font-semibold text-teal-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Verified enterprise performance
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Improved page speed for global MLM operators who refuse to slow down.
              </h1>
              <p className="text-base text-slate-200/80">
                The legacy platform proved that disciplined optimisation leads to delighted distributors. We rebuilt the experience with modern engineering so every login, approval, and payout happens at the pace of your ambition.
              </p>
              <p className="text-sm text-slate-300/70">
                From mobile approvals on 3G networks to executive dashboards on fibre-backed HQ links, Cloud MLM Software adapts to every scenario without compromising brand experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan your speed blueprint
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-300/40 text-teal-200 hover:bg-teal-300/10 hover:text-teal-100"
              >
                <Link href={demoHref}>
                  Experience the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            {PERFORMANCE_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.label}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-100"
                >
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300/80">
                      {signal.label}
                    </p>
                    <p className="text-lg font-semibold">{signal.headline}</p>
                    <p className="text-xs text-slate-300/75">{signal.detail}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A performance playbook inspired by the original WordPress launch
          </h2>
          <p className="text-sm text-muted-foreground">
            Every insight from the legacy page—minified resources, trimmed redirects, and server tuning—now lives inside a composable architecture tailored for modern MLM growth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PRACTICES.map((practice) => {
            const Icon = practice.icon;
            return (
              <article key={practice.title} className="flex h-full flex-col rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm">
                <div className="flex items-center gap-3 text-primary">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{practice.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{practice.summary}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {practice.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-100 via-transparent to-transparent dark:from-slate-900/60" aria-hidden />
        <div className="container space-y-12 py-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Performance intelligence, engineered for human experience
            </h2>
            <p className="text-sm text-muted-foreground">
              Our teams refused to choose between immaculate UX and lightning-fast delivery. Instead, we merged both disciplines into layered service design.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {EXPERIENCE_LAYERS.map((layer) => (
              <article key={layer.title} className="flex h-full flex-col rounded-3xl border border-border/60 bg-background/95 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{layer.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{layer.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {layer.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Engineering commitments we live by</h2>
          <p className="text-sm text-muted-foreground">
            These are the non-negotiables that keep Cloud MLM Software fast today and ready for tomorrow’s launches.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ENGINEERING_COMMITMENTS.map((commitment) => {
            const Icon = commitment.icon;
            return (
              <article key={commitment.title} className="flex h-full flex-col rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{commitment.title}</h3>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {commitment.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-slate-300/40 blur-3xl dark:bg-slate-800/50" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to accelerate your rollout?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your current infrastructure, launch milestones, and regional priorities. We will respond with a tailored optimisation roadmap and the governance pieces required to sustain momentum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Speak with performance engineering
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={modulesHref}>
                    Explore more features
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Speed checklist</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <CloudArrowUp className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Audit asset weight and convert heavy media into progressive formats.</span>
                </li>
                <li className="flex gap-3">
                  <Rocket className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Minimise redirects across distributor journeys and promo landing pages.</span>
                </li>
                <li className="flex gap-3">
                  <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Review bundle budgets before each release to maintain lightning-fast experiences.</span>
                </li>
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
