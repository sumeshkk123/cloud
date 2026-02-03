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
  Globe2,
  LayoutTemplate,
  LineChart,
  MonitorSmartphone,
  PanelsTopLeft,
  Route,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Browsers,
  DeviceMobile,
  Rows,
  SlidersHorizontal
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  icon: IconType;
};

type ExperiencePillar = {
  title: string;
  description: string;
  points: string[];
  icon: IconType;
};

type BlueprintStage = {
  title: string;
  detail: string;
  icon: IconType;
};

type EvidenceMetric = {
  value: string;
  label: string;
  detail: string;
};

type Guideline = {
  title: string;
  description: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Media queries, containers, and breakpoints governed centrally",
    icon: PanelsTopLeft
  },
  {
    label: "Flexible media adapts copy, imagery, and interactions instantly",
    icon: Browsers
  },
  {
    label: "Search and share experiences optimised for every device",
    icon: Sparkles
  }
];

const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    title: "Precision across breakpoints",
    description:
      "Media queries, container units, and adaptive components ensure every module feels intentionally crafted for the current screen—no clipping or overflow surprises.",
    points: [
      "Design tokens orchestrate typography, spacing, and imagery from mobile to 5K displays.",
      "Context-aware navigation keeps the most critical actions thumb-accessible on handheld devices.",
      "Micro-interactions reinforce transitions so users sense feedback even on smaller screens."
    ],
    icon: MonitorSmartphone
  },
  {
    title: "Content that flexes with the story",
    description:
      "Media, illustrations, and long-form copy reflow intelligently so ideas remain persuasive without endless scrolling or cramped layouts.",
    points: [
      "Video, charts, and galleries scale without distortion or letterboxing.",
      "Copy length and line heights adjust to preserve legibility for every locale.",
      "Calls-to-action stay visible through sticky anchors and responsive stacking."
    ],
    icon: Waves
  },
  {
    title: "Experience without friction",
    description:
      "From enrolment to analytics, distributors, leaders, and customers enjoy the same guided journey regardless of device or bandwidth.",
    points: [
      "Critical workflows degrade gracefully when bandwidth drops or devices rotate.",
      "Edge cases like split-screen, kiosk, and projector modes receive tailored layouts.",
      "Accessibility guardrails keep contrast, focus states, and hit areas reliable."
    ],
    icon: ShieldCheck
  }
];

const BLUEPRINT_STAGES: BlueprintStage[] = [
  {
    title: "Audit every viewport",
    detail:
      "We catalogue the touchpoints your prospects, distributors, and executives rely on, mapping device priorities and the frequency of mobile versus desktop engagement.",
    icon: DeviceMobile
  },
  {
    title: "Design the adaptive skeleton",
    detail:
      "Layout templates, component states, and container queries are coordinated so the experience feels immersive whether viewed on a smartphone, tablet, or widescreen monitor.",
    icon: LayoutTemplate
  },
  {
    title: "Instrument and learn",
    detail:
      "Engagement data drives iteration—heatmaps, click-paths, and performance insights feed continuous improvements to the responsive system.",
    icon: LineChart
  }
];

const EVIDENCE_METRICS: EvidenceMetric[] = [
  {
    value: "+37%",
    label: "Mobile conversion uplift",
    detail: "Average improvement reported after harmonising enrolment and checkout flows across devices."
  },
  {
    value: "24",
    label: "Screen widths validated",
    detail: "From compact phones to ultrawide monitors, every breakpoint is rehearsed before launches."
  },
  {
    value: "<1.8s",
    label: "Median interactive time",
    detail: "Caching, compression, and intelligent asset loading keep journeys fast worldwide."
  }
];

const RESPONSIVE_GUIDELINES: Guideline[] = [
  {
    title: "Support the multi-device user",
    description:
      "A single responsive codebase delivers consistent journeys for laptop, tablet, and mobile audiences—no redirects or duplicate maintenance paths."
  },
  {
    title: "One site, all channels",
    description:
      "Unified templates keep SEO equity intact while enabling campaign teams to ship new landing experiences quickly."
  },
  {
    title: "Future-ready architecture",
    description:
      "Container queries, design tokens, and modular components make it simple to adopt emerging device categories without rewriting the system."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Powerfully Responsive MLM Software Experience | Cloud MLM Software";
  const description =
    "Deliver seamless MLM journeys across every device with Cloud MLM Software’s powerfully responsive architecture. Govern breakpoints, flexible media, and SEO-ready performance from one platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/powerfully-responsive", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PowerfullyResponsivePageProps = {
  params: { lang: SupportedLocale };
};

export default function PowerfullyResponsivePage({ params }: PowerfullyResponsivePageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-cyan-50 via-white to-slate-50 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_35%_85%,rgba(14,116,144,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.28),transparent_55%),radial-gradient(circle_at_35%_85%,rgba(14,116,144,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/70 px-4 py-1 text-sm font-semibold text-cyan-700 dark:border-cyan-400/60 dark:bg-cyan-500/10 dark:text-cyan-100">
              <MonitorSmartphone className="h-4 w-4" />
              Powerfully responsive surfaces
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Powerfully responsive design that feels native everywhere
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Cloud MLM Software fuses media queries, adaptive content, and performance-focused engineering so every stakeholder experiences the full power of your brand across devices, orientations, and touch states.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                <Link href={demoHref}>
                  Request custom demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-200/40 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800">
                <Link href={contactHref}>Talk to a responsive strategist</Link>
              </Button>
            </div>
            <ul className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map((item) => (
                <li key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-slate-900/50">
                  <item.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-200" aria-hidden />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Responsive promise</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                One experience, every screen
              </p>
            </div>
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <p>
                Whether your field leaders open dashboards on tablets, members shop on mobile, or finance teams export insights on widescreens, the interface adapts in-place without jarring transitions.
              </p>
              <p>
                Built-in policies minimise maintenance: no duplicate URLs, no device-specific themes, and no shadow codebases. Just a single, evolving system backed by analytics and automation.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-6 text-sm text-cyan-900 dark:border-cyan-300/50 dark:bg-cyan-500/10 dark:text-cyan-100">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                <Route className="h-4 w-4" />
                Journey snapshot
              </div>
              <p className="mt-3 text-base font-semibold">
                Tap, swipe, or click—your network moves seamlessly from discovery to conversion without leaving the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <SlidersHorizontal className="h-4 w-4" />
            Responsive operating model
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Govern every breakpoint without stacking technical debt
          </h2>
          <p className="text-base text-muted-foreground">
            Powerfully responsive design is more than fluid grids—it’s a disciplined system that blends flexible media, adaptive content, and analytics-driven iteration.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {EXPERIENCE_PILLARS.map((pillar) => (
            <article key={pillar.title} className="flex h-full flex-col gap-6 rounded-2xl border border-border/70 bg-gradient-to-b from-background via-background to-muted/40 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <pillar.icon className="h-11 w-11 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
              </div>
              <p className="text-base text-muted-foreground">{pillar.description}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <Sparkles className="mt-1 h-4 w-4 text-cyan-500" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/40 py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
              <Rows className="h-4 w-4" />
              Adaptive blueprint
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A three-stage blueprint for dependable responsive experiences
            </h2>
            <p className="text-base text-muted-foreground">
              We blend research, design, and engineering to guarantee that the experience feels purpose-built on every screen, not merely resized.
            </p>
            <Button asChild variant="outline" className="w-fit gap-2">
              <Link href={featuresHref}>
                Explore core platform features
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ol className="relative space-y-8 pl-6">
            <div className="absolute inset-y-2 left-2 w-px bg-gradient-to-b from-cyan-500 via-cyan-400/40 to-transparent" aria-hidden />
            {BLUEPRINT_STAGES.map((stage, index) => (
              <li key={stage.title} className="relative rounded-2xl border border-border/70 bg-background p-6 shadow-sm">
                <div className="absolute -left-3 top-8 h-3 w-3 rounded-full border-2 border-white bg-cyan-500 shadow-md" aria-hidden />
                <div className="flex items-start gap-4">
                  <stage.icon className="h-10 w-10 text-cyan-600 dark:text-cyan-400" aria-hidden />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold">{stage.title}</h3>
                    <p className="text-sm text-muted-foreground">{stage.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Globe2 className="h-4 w-4" />
              Why it matters
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Responsive design is the business-critical layer for modern MLM growth
            </h2>
            <p className="text-base text-muted-foreground">
              Audiences expect fluid journeys—whether they explore products on a phone, manage teams on a tablet, or present dashboards on a widescreen display. Powerfully responsive design protects brand credibility, accelerates conversions, and removes maintenance overhead.
            </p>
            <div className="grid gap-4">
              {RESPONSIVE_GUIDELINES.map((guideline) => (
                <div key={guideline.title} className="rounded-2xl border border-border/70 bg-muted/40 p-5">
                  <h3 className="text-lg font-semibold">{guideline.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <div className="grid gap-6 sm:grid-cols-3">
              {EVIDENCE_METRICS.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-center shadow-sm dark:border-white/10 dark:bg-slate-900/50">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{metric.detail}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6 text-sm text-slate-900 dark:border-cyan-300/50 dark:bg-cyan-500/10 dark:text-cyan-100">
              <p className="font-semibold">Continuous optimisation</p>
              <p className="mt-2">
                Accessibility checks, structured data, and performance audits are baked into releases so your ranking power and shareability continue to climb.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 rounded-3xl border border-border/70 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 p-12 shadow-sm sm:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] sm:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Ready to elevate every device experience for your network?
            </h2>
            <p className="text-base text-muted-foreground">
              Partner with Cloud MLM Software to architect a responsive system that supports launches, campaigns, and scale with ease—no matter how your distributors and customers connect.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="gap-2">
                <Link href={demoHref}>
                  Start your tailored demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href={contactHref}>
                  Consult with our experts
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-border/60 bg-background/80 p-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-cyan-500" />
              Structured for global launch campaigns
            </div>
            <div className="flex items-center gap-3">
              <PanelsTopLeft className="h-5 w-5 text-cyan-500" />
              Container-aware component library
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-cyan-500" />
              Built-in accessibility governance
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: SupportedLocale): Locale {
  if (isSupportedLocale(lang)) {
    return lang;
  }

  return i18n.defaultLocale as Locale;
}
