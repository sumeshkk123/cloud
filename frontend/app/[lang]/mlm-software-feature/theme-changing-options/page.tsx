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
  Code,
  Component,
  Layers3,
  Palette,
  PanelRight,
  Sparkle
} from "lucide-react";
import {
  DeviceMobile,
  PaintBrushBroad,
  PresentationChart,
  RocketLaunch,
  Swatches
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  value: string;
  label: string;
};

type BenefitCard = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type TransitionStep = {
  title: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type DesignPolicy = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ThemeKit = {
  name: string;
  focus: string;
  elements: string[];
};

const HERO_STATS: HeroStat[] = [
  {
    value: "24/7",
    label: "Switch themes without operational downtime"
  },
  {
    value: "100%",
    label: "Content continuity preserved across theme updates"
  },
  {
    value: "Zero code",
    label: "Brand refresh managed from the admin console"
  }
];

const BENEFIT_CARDS: BenefitCard[] = [
  {
    title: "Launch polished experiences quickly",
    description:
      "Pre-built theme palettes accelerate the journey from idea to investor-ready presentation without compromising design rigor.",
    highlight: "Designer-grade templates are accessible straight from the theme options panel.",
    icon: RocketLaunch
  },
  {
    title: "Keep every asset on-brand",
    description:
      "Shared tokens influence presentations, proposals, and distributor communications so your network speaks with one visual voice.",
    highlight: "Fonts, color systems, and effects extend beyond the platform into your collateral suite.",
    icon: PaintBrushBroad
  },
  {
    title: "Govern the experience layout",
    description:
      "Layouts, navigation placement, and device behaviours are centrally managed—ensuring consistency across global teams.",
    highlight: "Administrators orchestrate spacing, typography, and component weight from a single dashboard.",
    icon: DeviceMobile
  },
  {
    title: "Work from an evolving showcase",
    description:
      "Explore the Theme Showcase for skins, documentation, and release notes that guide confident rollouts.",
    highlight: "Each theme ships with context, configuration tips, and success stories from active deployments.",
    icon: PresentationChart
  },
  {
    title: "Refresh styles as often as you need",
    description:
      "Trending themes and seasonal looks arrive continuously, ready to activate without rebuilds or risky experiments.",
    highlight: "Swap palettes or typography in minutes to match campaigns, markets, or leadership priorities.",
    icon: Swatches
  }
];

const TRANSITION_STEPS: TransitionStep[] = [
  {
    title: "Audit navigation assets",
    summary: "Custom menus move with intent",
    detail:
      "Before activating a new skin, map every menu to its fresh destination so high-traffic paths stay in focus for distributors.",
    icon: PanelRight
  },
  {
    title: "Re-home dynamic widgets",
    summary: "Widgets adapt to new layouts",
    detail:
      "Each theme supports different slots. Align dashboards, alerts, and leaderboards with the new structure to retain clarity.",
    icon: Component
  },
  {
    title: "Review advanced styling",
    summary: "Custom CSS remains under control",
    detail:
      "Theme-specific CSS travels with you. Validate overrides, retire outdated rules, and document decisions for future rollbacks.",
    icon: Code
  }
];

const DESIGN_POLICIES: DesignPolicy[] = [
  {
    title: "Framework-first governance",
    summary:
      "Core theme files stay safeguarded so your team iterates confidently without breaking structural reliability.",
    bullets: [
      "Premium and Business plans unlock a dedicated CSS workspace for controlled enhancements.",
      "Brand managers modify palettes, typography, and effects in a few clicks before escalating to code.",
      "Design reviews ensure each change aligns with accessibility and compliance guardrails."
    ],
    icon: Layers3
  },
  {
    title: "Expert support on standby",
    summary:
      "Custom CSS doesn’t need to be intimidating. Our specialists fast-track your first adjustments and share proven patterns.",
    bullets: [
      "Access tutorials, naming conventions, and best practices directly from the customization console.",
      "Engage the Cloud MLM Software team for peer reviews or paired working sessions when timelines are tight.",
      "Documented playbooks cover everything from typography finesse to micro-animation guidance."
    ],
    icon: Sparkle
  },
  {
    title: "Automated theme synchronisation",
    summary:
      "Applying a new theme updates presentations, dashboards, and data visuals so every asset stays aligned.",
    bullets: [
      "WordArt, slides, tables, and charts inherit the refreshed palette the moment a theme is published.",
      "Reusable components like payout tables and rank trackers refresh automatically for each locale.",
      "Fine-tune theme fonts, colors, and effects to personalise the narrative without extra rebuilds."
    ],
    icon: Palette
  }
];

const THEME_KITS: ThemeKit[] = [
  {
    name: "Launch-ready kit",
    focus: "Ideal for emerging MLM brands preparing investor or distributor onboarding moments.",
    elements: [
      "High-impact hero layouts with layered gradients",
      "Configurable CTA stacks that align with campaign goals",
      "Documentation bundle outlining recommended typography pairings"
    ]
  },
  {
    name: "Brand evolution kit",
    focus: "For established networks refreshing market positioning without internal disruption.",
    elements: [
      "Palette toggles synchronised with multilingual rollouts",
      "Widget blueprints for analytics, payouts, and training modules",
      "Seasonal accent pack for regional promotions"
    ]
  },
  {
    name: "Enterprise governance kit",
    focus: "Designed for enterprises balancing compliance, custom CSS, and distributed leadership teams.",
    elements: [
      "Role-based theming guidelines and approval workflows",
      "Audit-ready change logs linked to each release",
      "Fallback skins to restore legacy experiences within minutes"
    ]
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Theme Changing Options | Cloud MLM Software";
  const description =
    "Curate, switch, and refine MLM themes without downtime. Cloud MLM Software delivers governed theme options that keep every asset on-brand while empowering rapid experimentation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/theme-changing-options", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ThemeChangingOptionsPageProps = {
  params: { lang: SupportedLocale };
};

export default function ThemeChangingOptionsPage({
  params
}: ThemeChangingOptionsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(30,64,175,0.18),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.18),transparent_45%),radial-gradient(circle_at_40%_85%,rgba(59,130,246,0.15),transparent_55%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
              <Palette className="h-4 w-4" />
              Theme changing options
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Shape every touchpoint with governed theme agility
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Cloud MLM Software empowers leaders to refresh the interface, align campaigns, and present consistent stories across every channel—without losing data, momentum, or brand equity.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
                <Link href={contactHref}>
                  Request a theme workshop
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Preview curated skins</Link>
              </Button>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <dt className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200/60 bg-white/90 p-10 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-br from-indigo-500/20 via-sky-500/15 to-transparent blur-2xl" aria-hidden />
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Theme activation scorecard</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Ensure every rollout feels intentional. Use this quick checklist to validate readiness before publishing a new look.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <li className="flex items-start gap-3">
                  <Sparkle className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500 dark:text-indigo-300" />
                  Brand tokens updated across campaigns, landing pages, and presentations.
                </li>
                <li className="flex items-start gap-3">
                  <Sparkle className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500 dark:text-indigo-300" />
                  Documentation distributed to regional teams with before-and-after previews.
                </li>
                <li className="flex items-start gap-3">
                  <Sparkle className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500 dark:text-indigo-300" />
                  Change window scheduled so analytics and CRM integrations remain uninterrupted.
                </li>
              </ul>
              <Button asChild variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-500/40 dark:text-indigo-200 dark:hover:bg-indigo-500/10">
                <Link href={featuresHref}>
                  Explore more interface features
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:text-slate-300">
            <RocketLaunch className="h-4 w-4" />
            Strategic advantages
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Why global MLM leaders depend on theme changing options
          </h2>
          <p className="text-base text-muted-foreground">
            The right theme strategy keeps momentum high—reassuring prospects, energising distributors, and signalling innovation to every stakeholder.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFIT_CARDS.map((benefit) => (
            <article
              key={benefit.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="space-y-4">
                <benefit.icon className="h-8 w-8 text-indigo-500 dark:text-indigo-300" />
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-300">
                {benefit.highlight}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/50">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:text-slate-300">
              <PanelRight className="h-4 w-4" />
              Governed theme transitions
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Every change follows a structured rollout plan
            </h2>
            <p className="text-base text-muted-foreground">
              Switch looks without losing user confidence. Follow this guided sequence each time you activate a new skin inside Cloud MLM Software.
            </p>
          </div>
          <ol className="grid gap-6 lg:grid-cols-3">
            {TRANSITION_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <step.icon className="h-5 w-5 text-indigo-500 dark:text-indigo-300" />
                  <span className="uppercase tracking-widest">{step.summary}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container grid gap-16 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:text-slate-300">
            <Layers3 className="h-4 w-4" />
            Design operations
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A governance model that balances creativity with reliability
          </h2>
          <p className="text-base text-muted-foreground">
            Theme changing options give you the flexibility to innovate while respecting the guardrails that keep enterprise deployments secure and predictable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href={contactHref}>
                Plan your next refresh
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
              <Link href={demoHref}>See live theme controls</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-6">
          {DESIGN_POLICIES.map((policy) => (
            <article
              key={policy.title}
              className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <header className="flex items-center gap-3">
                <policy.icon className="h-6 w-6 text-indigo-500 dark:text-indigo-300" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{policy.title}</h3>
                  <p className="text-sm text-muted-foreground">{policy.summary}</p>
                </div>
              </header>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {policy.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:text-slate-300">
            <Swatches className="h-4 w-4" />
            Curated theme kits
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Activate the kit that matches your growth moment
          </h2>
          <p className="text-base text-muted-foreground">
            Every kit bundles guidance, assets, and staging environments so marketers, designers, and operations leaders ship a unified story from day one.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {THEME_KITS.map((kit) => (
            <article
              key={kit.name}
              className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{kit.name}</h3>
                <p className="text-sm text-muted-foreground">{kit.focus}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {kit.elements.map((element) => (
                  <li key={element} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-300" />
                    {element}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-sky-500 to-blue-600 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.18),transparent_60%)]" aria-hidden />
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to orchestrate your next brand moment?
          </h2>
          <p className="max-w-2xl text-base text-white/80">
            Cloud MLM Software’s theme changing options equip you to evolve consistently, impress stakeholders, and keep distributors inspired. Let’s plan the roadmap together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-indigo-600 hover:bg-white/90">
              <Link href={contactHref}>
                Connect with a solution consultant
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              <Link href={demoHref}>Schedule a live preview</Link>
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
