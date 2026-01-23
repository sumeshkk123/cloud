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
  Grid2X2,
  LayoutDashboard,
  Palette,
  ShieldCheck,
  Sparkles,
  TimerReset
} from "lucide-react";
import {
  BracketsCurly,
  ChalkboardTeacher,
  Lightning,
  MagicWand,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  description: string;
  icon: IconType;
};

type DesignPillar = {
  heading: string;
  summary: string;
  proofPoints: string[];
  icon: IconType;
};

type ExperienceStream = {
  label: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type NavigationPattern = {
  title: string;
  description: string;
  enhancements: string[];
  icon: IconType;
};

type CapabilityGroup = {
  title: string;
  features: string[];
};

type DiscoveryItem = {
  title: string;
  detail: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Seamless onboarding",
    description: "Teams understand the workspace in their first login—no internal training decks or PDF manuals required.",
    icon: ChalkboardTeacher
  },
  {
    title: "Navigation clarity",
    description: "Context-aware menus, breadcrumbs, and profile shortcuts keep high-volume operators inside the right flow.",
    icon: Compass
  },
  {
    title: "Enterprise polish",
    description: "Consistent typography, whitespace, and interaction states reinforce the quality of your brand experience.",
    icon: Sparkles
  }
];

const DESIGN_PILLARS: DesignPillar[] = [
  {
    heading: "Effortless day-to-day control",
    summary: "The interface is intentionally calm so leaders focus on outcomes, not screens.",
    proofPoints: [
      "Modular dashboard cards surface tasks, payouts, and network health side-by-side.",
      "Automated nudges highlight upcoming compliance checks before they become blockers.",
      "Configurable quick actions let regional teams rename, reorder, or hide elements in seconds."
    ],
    icon: LayoutDashboard
  },
  {
    heading: "Fast, reliable performance",
    summary: "Built on modern web technologies so every interaction feels instant, even at scale.",
    proofPoints: [
      "Optimised asset delivery keeps page loads light across geographies and devices.",
      "Real-time updates refresh enrolments, payouts, and ticket statuses without page reloads.",
      "Role-based caching ensures sensitive data remains secure yet responsive."
    ],
    icon: Lightning
  },
  {
    heading: "Adaptable to your brand",
    summary: "Extend themes, change palettes, and align the UI with your market positioning.",
    proofPoints: [
      "Pick from curated theme packs or deploy your own brand tokens in minutes.",
      "Toggle between light and dark modes with consistent accessibility contrast.",
      "Support multilingual rollouts with locale-aware typography and spacing."
    ],
    icon: Palette
  }
];

const EXPERIENCE_STREAMS: ExperienceStream[] = [
  {
    label: "Interface perspective",
    headline: "Productivity-first layout",
    detail:
      "Left-side navigation, notification centre, and profile tools stay anchored so distributors never lose context when switching modules.",
    icon: Grid2X2
  },
  {
    label: "Security promise",
    headline: "Secure, reliable, and fast",
    detail:
      "Modern frameworks, rigorous authentication, and encrypted backups ensure your data remains protected while staying accessible to the right people.",
    icon: ShieldCheck
  },
  {
    label: "Custom experience",
    headline: "Themes tailored to you",
    detail:
      "Choose from refined interface themes or provide your own design assets—our team applies them without disrupting functionality.",
    icon: MagicWand
  }
];

const NAVIGATION_PATTERNS: NavigationPattern[] = [
  {
    title: "Guided navigation",
    description:
      "Contextual breadcrumbs, menu grouping, and responsive layouts streamline how users move through dashboards, genealogy, and support modules.",
    enhancements: [
      "Re-order menus for different role profiles",
      "Quick jump palette for high-frequency tasks",
      "Tooltips and inline help embedded where decisions happen"
    ],
    icon: Compass
  },
  {
    title: "Simple yet powerful UI",
    description:
      "The surface looks minimalist on purpose. Each interaction reveals exactly the data, workflows, or automation needed without overwhelming new distributors.",
    enhancements: [
      "Micro-animations signal saves, approvals, and success states",
      "Adaptive cards keep content readable across mobile and desktop",
      "Audit views show rule history and payout logic on demand"
    ],
    icon: Sparkles
  },
  {
    title: "Leadership-ready workspace",
    description:
      "Executives view growth, compliance, and communication insights from a single command centre, complete with export options and note-taking.",
    enhancements: [
      "Pinned insights for your weekly huddles",
      "Region-level filters with saved presets",
      "Live commentary stream for cross-team collaboration"
    ],
    icon: UsersThree
  }
];

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    title: "Interface & Accessibility",
    features: [
      "Clean interface & easy-to-use navigation",
      "Mobile friendly and super responsive across devices",
      "Dynamic compression and optimised page speed",
      "Theme switching with typography consistency",
      "Multilingual translational support for global rollouts"
    ]
  },
  {
    title: "Operations & Growth",
    features: [
      "Advanced reporting and analytics dashboards",
      "Powerful e-mail, SMS, and auto-responder systems",
      "Support & ticket workflows attached to every distributor",
      "White label options with replicating websites",
      "Payment processing with secure wallet management"
    ]
  },
  {
    title: "Platform Extensibility",
    features: [
      "Flexible integrations with Magento, Shopify, WooCommerce, and more",
      "API-ready architecture for OpenCart, WordPress, and Drupal",
      "Privileged user controls with audit-ready activity logs",
      "Scalable backup systems with self-hosted deployment",
      "LCP pages management and minified resources for SEO"
    ]
  }
];

const DISCOVERY_LIST: DiscoveryItem[] = [
  {
    title: "Audience mix",
    detail: "Share the user personas—from new distributors to finance analysts—so we can tailor views and permissions."
  },
  {
    title: "Brand expression",
    detail: "Provide colour palettes, typography, or example layouts to align the interface with your identity."
  },
  {
    title: "Operational priorities",
    detail: "Highlight the workflows that need to feel effortless: enrolments, payouts, tickets, or compliance reviews."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Clean Interface & Easy to Use MLM Software";
  const description =
    "Deliver a clean interface and effortless navigation with Cloud MLM Software. Build a secure, responsive, and custom-branded experience your distributors love.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/clean-interface-and-easy-to-use", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CleanInterfacePageProps = {
  params: { lang: SupportedLocale };
};

export default function CleanInterfacePage({ params }: CleanInterfacePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(148,163,184,0.25),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_20%_85%,rgba(234,179,8,0.2),transparent_52%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,0.6fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-400/10 px-4 py-1 text-sm font-semibold text-sky-100">
              <Sparkles className="h-4 w-4" aria-hidden />
              Clean Interface & Easy To Use
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Intuitive MLM software that feels polished from the very first click.
              </h1>
              <p className="text-base text-slate-200/85">
                Cloud MLM Software combines minimalist design, thoughtful navigation, and instant responsiveness so every distributor, coach, and executive can complete work with confidence. No clutter. No detours. Just a workspace engineered for momentum.
              </p>
              <p className="text-sm text-slate-200/75">
                Move from legacy interfaces to a modern experience that mirrors your brand, respects accessibility standards, and scales across languages, currencies, and product lines.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Plan your interface upgrade
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-200/60 text-sky-100 hover:bg-sky-400/10">
                <Link href={demoHref}>
                  Experience the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur">
            {HERO_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-slate-100">{card.title}</h2>
                    <p className="text-sm text-slate-200/80">{card.description}</p>
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
            Designed for clarity, speed, and brand trust
          </h2>
          <p className="text-sm text-muted-foreground">
            Every insight here is drawn from the legacy WordPress page—now refreshed into a modern product experience that respects how leaders run their networks today.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {DESIGN_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.heading}
                className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm"
              >
                <div className="space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{pillar.heading}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.summary}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {pillar.proofPoints.map((item) => (
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

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The experience blueprint
            </h2>
            <p className="text-sm text-muted-foreground">
              Map the journey from login to action. Our clean interface keeps critical focus areas—UI, security, and customisation—front and centre so teams never feel lost.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-6 shadow-sm dark:via-slate-950">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Deployment rhythm</p>
              <p className="text-sm text-muted-foreground">
                Most organisations roll out the refreshed UI in three focused sprints—prototype, pilot, and enterprise launch—each supported by our onboarding specialists.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              {EXPERIENCE_STREAMS.map((stream) => {
                const Icon = stream.icon;
                return (
                  <article key={stream.headline} className="rounded-2xl border border-primary/20 bg-background/80 p-5 text-sm shadow-sm">
                    <div className="flex items-center gap-3 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                      <span className="font-semibold uppercase tracking-wider text-[0.65rem] text-primary/80">
                        {stream.label}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-foreground">{stream.headline}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{stream.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/15 via-background to-background" aria-hidden />
        <div className="container space-y-12 py-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Navigation patterns that feel human
            </h2>
            <p className="text-sm text-muted-foreground">
              Borrowed from the original body content and enhanced for today’s expectations—these patterns keep conversations flowing between distributors, leaders, and back-office teams.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {NAVIGATION_PATTERNS.map((pattern) => {
              const Icon = pattern.icon;
              return (
                <article key={pattern.title} className="flex h-full flex-col rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{pattern.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{pattern.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {pattern.enhancements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <TimerReset className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities included from day one</h2>
          <p className="text-sm text-muted-foreground">
            The clean interface stretches across every module. Explore how design decisions translate into faster execution, stronger compliance, and extensibility across the business.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CAPABILITY_GROUPS.map((group) => (
            <article key={group.title} className="rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <BracketsCurly className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to modernise your MLM interface?
              </h2>
              <p className="text-sm text-muted-foreground">
                Bring our team your current layouts or let us start fresh. We will configure a branded experience, migrate your content, and walk stakeholders through the new workflow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Book a working session
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={featuresHref}>
                    Explore more features
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Discovery checklist</p>
              <div className="mt-4 space-y-4">
                {DISCOVERY_LIST.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-border/70 bg-background/60 p-4">
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  </article>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Submit these insights ahead of our session and we will arrive with wireframes, rollout timing, and an adoption playbook tailored to your organisation.
              </p>
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
