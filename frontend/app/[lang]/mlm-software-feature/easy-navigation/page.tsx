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
  ArrowRight,
  Compass,
  Focus,
  MenuSquare,
  Navigation,
  PanelsTopLeft,
  Sparkles,
  Workflow
} from "lucide-react";
import { RoadHorizon, ShareNetwork, Signpost, Steps } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type NavigationZone = {
  label: string;
  headline: string;
  details: string[];
  icon: IconType;
};

type FlowStage = {
  stage: string;
  summary: string;
  emphasis: string;
  icon: IconType;
};

type QuickLink = {
  category: string;
  items: string[];
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Visible controls, zero friction",
    description:
      "Primary navigation remains in view, so distributors, coaches, and finance teams always know where to act next.",
    icon: Navigation
  },
  {
    title: "Dashboard-first orientation",
    description:
      "Every journey begins on a configurable dashboard—performance trends, payouts, and compliance reminders at a glance.",
    icon: PanelsTopLeft
  },
  {
    title: "Guided quick links",
    description:
      "Dynamic shortcuts keep essential actions within one click, tailored for each role and market.",
    icon: ArrowRight
  }
];

const NAVIGATION_ZONES: NavigationZone[] = [
  {
    label: "01",
    headline: "Primary rails that never disappear",
    details: [
      "Pin critical modules such as enrolments, payouts, and support tickets to a scrollable side panel.",
      "Use descriptive labels and icons so even first-day distributors understand where to start.",
      "Mirror your brand hierarchy while keeping the information architecture accessible for global teams."
    ],
    icon: MenuSquare
  },
  {
    label: "02",
    headline: "Top-bar insights for leadership",
    details: [
      "Surface network analytics, wallet summaries, and alerts in a concise top navigation cluster.",
      "Personalised profile area includes language toggles, support contacts, and secure logout.",
      "Hover states and breadcrumbs keep power users oriented while they deep dive into reports."
    ],
    icon: Compass
  },
  {
    label: "03",
    headline: "Role-aware quick link canvas",
    details: [
      "Launch campaigns with curated shortcuts—for example, enrolment boosts or commission approvals.",
      "Reorder and retire quick links without code so operations can respond to market shifts instantly.",
      "Give compliance teams peace of mind with auditable change logs for every navigation edit."
    ],
    icon: ShareNetwork
  }
];

const FLOW_STAGES: FlowStage[] = [
  {
    stage: "Orientation",
    summary: "Users land on a branded dashboard that highlights KPIs, recent activity, and urgent tasks.",
    emphasis: "Graphs, tables, and callouts are customisable so each market sees what matters most.",
    icon: Signpost
  },
  {
    stage: "Exploration",
    summary: "Visible side navigation and top-right utilities guide members to commissions, genealogy, or support.",
    emphasis: "No duplicate paths or dead ends—each click delivers context-specific content.",
    icon: RoadHorizon
  },
  {
    stage: "Execution",
    summary: "Quick links, inline help, and modal actions streamline everyday transactions and reviews.",
    emphasis: "Automated prompts ensure distributors complete tasks without leaving their current flow.",
    icon: Steps
  }
];

const QUICK_LINKS: QuickLink[] = [
  {
    category: "Distributors",
    items: [
      "Genealogy view with rank progress",
      "Pending payouts and wallet transfers",
      "Personal storefront and replicated site tools"
    ]
  },
  {
    category: "Operations",
    items: [
      "Ticket queues with SLA indicators",
      "Bulk enrolment approval workspace",
      "KYC and compliance checklist hub"
    ]
  },
  {
    category: "Leadership",
    items: [
      "Network health pulse dashboard",
      "Multi-currency revenue snapshots",
      "Campaign launch templates and notes"
    ]
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Easy Navigation MLM Software";
  const description =
    "Deliver effortless navigation with Cloud MLM Software. Keep dashboards, quick links, and workflows clear for every distributor, admin, and executive.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/easy-navigation", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EasyNavigationPageProps = {
  params: { lang: SupportedLocale };
};

export default function EasyNavigationPage({ params }: EasyNavigationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(125,211,252,0.25),transparent_55%),radial-gradient(circle_at_88%_20%,rgba(129,140,248,0.35),transparent_58%),radial-gradient(circle_at_20%_85%,rgba(251,191,36,0.2),transparent_55%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-400/10 px-4 py-1 text-sm font-semibold text-sky-100">
              <Sparkles className="h-4 w-4" aria-hidden />
              Easy Navigation & UX Harmony
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Navigation built to keep every MLM stakeholder on course.
              </h1>
              <p className="text-base text-slate-200/85">
                Cloud MLM Software removes duplicate paths and confusing menus. Clear dashboards, fixed navigation rails, and context-aware quick links let teams move from insight to action in seconds.
              </p>
              <p className="text-sm text-slate-200/75">
                Whether you are a new distributor or an executive sponsor, the interface delivers intuitive routes, concise language, and consistent layouts tailored to your role.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Plan your navigation overhaul
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-200/60 text-sky-100 hover:bg-sky-400/10">
                <Link href={demoHref}>
                  Explore the live workspace
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-slate-100">{highlight.title}</h2>
                    <p className="text-sm text-slate-200/80">{highlight.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Three navigation zones that keep momentum high</h2>
          <p className="text-sm text-muted-foreground">
            The original WordPress content inspired these pillars. We reimagined them for a modern, enterprise-ready MLM workspace where clarity and speed power every decision.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {NAVIGATION_ZONES.map((zone) => {
            const Icon = zone.icon;
            return (
              <article key={zone.headline} className="relative flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm">
                <div className="flex items-center justify-between text-sm font-semibold text-primary/70">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40">
                    {zone.label}
                  </span>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{zone.headline}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {zone.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span aria-hidden>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="container space-y-12 py-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How every user finds their flow</h2>
            <p className="text-sm text-muted-foreground">
              From orientation to execution, the path is deliberate. Every step is supported by visible links, contextual help, and performance cues.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {FLOW_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article key={stage.stage} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-3 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
                      {stage.stage}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-foreground">{stage.summary}</p>
                  <p className="text-sm text-muted-foreground">{stage.emphasis}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Quick links tailored for every role</h2>
          <p className="text-sm text-muted-foreground">
            Assign link clusters to match the responsibilities of distributors, operations teams, and leadership. Each set stays visible, scrollable, and easy to update without development effort.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {QUICK_LINKS.map((group) => (
            <article key={group.category} className="rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Workflow className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-primary/25 blur-3xl" aria-hidden />
          <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to streamline your MLM navigation?</h2>
              <p className="text-sm text-muted-foreground">
                Share your current menu structure or let us audit it for you. We will craft a clean, role-aware interface and deliver adoption playbooks so the field embraces it on day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Book a working session
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={featuresHref}>
                    Explore more features
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Implementation checklist</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Focus className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Identify top five actions each persona completes daily and map them to quick links.</span>
                </li>
                <li className="flex gap-3">
                  <Focus className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Decide which analytics tiles, graphs, and tables appear on the default dashboard.</span>
                </li>
                <li className="flex gap-3">
                  <Focus className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Plan multilingual labels and accessibility guidelines before launch.</span>
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

