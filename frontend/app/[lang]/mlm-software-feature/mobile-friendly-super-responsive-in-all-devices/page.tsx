import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Radar, TabletSmartphone } from "lucide-react";
import {
  Devices,
  GlobeHemisphereEast,
  Lightning as LightningIcon,
  RocketLaunch,
  ShieldCheck as ShieldCheckIcon,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFeature = {
  title: string;
  description: string;
  icon: IconType;
};

type StatHighlight = {
  label: string;
  value: string;
  description: string;
};

type ExperiencePillar = {
  title: string;
  lead: string;
  points: string[];
  icon: IconType;
};

type BlueprintStep = {
  title: string;
  detail: string;
  icon: IconType;
};

type Signal = {
  emphasis: string;
  title: string;
  detail: string;
};

const HERO_FEATURES: HeroFeature[] = [
  {
    title: "Mobile-first journeys",
    description:
      "Navigation, payouts, and communications resize intelligently so field leaders stay productive without pinch-and-zoom moments.",
    icon: Devices
  },
  {
    title: "Latency-aware performance",
    description:
      "Asset delivery is tuned for mixed bandwidth conditions, keeping dashboards fluid even when teams rely on hotel Wi-Fi or cellular data.",
    icon: LightningIcon
  },
  {
    title: "Secure anywhere access",
    description:
      "Encrypted sessions, biometric-ready authentication, and role controls protect sensitive compensation data on every device you approve.",
    icon: ShieldCheckIcon
  }
];

const HERO_STATS: StatHighlight[] = [
  {
    label: "Consistent experience",
    value: "Any screen",
    description:
      "Responsive components auto-tune spacing, typography, and interactions for phones, tablets, and desktops without extra builds."
  },
  {
    label: "Always informed",
    value: "Real-time alerts",
    description:
      "Business metrics, compliance nudges, and payout statuses surface instantly with adaptive notifications across channels."
  },
  {
    label: "AI-ready content",
    value: "Structured copy",
    description:
      "Semantic headings and metadata make the page effortless to index for search engines and AI copilots alike."
  }
];

const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    title: "Resilient field operations",
    lead: "Cloud MLM Software keeps every distributor connected whether they travel or coach from headquarters.",
    points: [
      "Access the full workspace from any modern browser or mobile device to keep approvals moving.",
      "The interface adjusts automatically for readability, preserving data hierarchy at any viewport size."
    ],
    icon: GlobeHemisphereEast
  },
  {
    title: "Connected workflows",
    lead: "Integrations stay responsive too, so your operations never feel disjointed.",
    points: [
      "CRM, payment gateway, and email marketing integrations stay in sync for seamless data hand-offs.",
      "Dashboards are configurable, letting leaders highlight the metrics, alerts, or automations that matter most."
    ],
    icon: StackSimple
  },
  {
    title: "Protected intelligence",
    lead: "Security and insight move together so executives can act with confidence on any device.",
    points: [
      "Real-time performance indicators and team updates help you respond instantly to growth opportunities.",
      "Encryption and modern security standards safeguard every transaction wherever it is approved."
    ],
    icon: ShieldCheckIcon
  }
];

const BLUEPRINT_STEPS: BlueprintStep[] = [
  {
    title: "Assess & blueprint",
    detail:
      "We translate your legacy WordPress insights into a modern content model, aligning copy, visuals, and metadata for a mobile-first rollout.",
    icon: TabletSmartphone
  },
  {
    title: "Optimise & orchestrate",
    detail:
      "Responsive layouts are stress-tested on phones, tablets, and widescreens while integrations and notifications stay in a single flow.",
    icon: Radar
  },
  {
    title: "Launch & evolve",
    detail:
      "After go-live we monitor adoption signals, refine dashboards, and tune automation so the experience keeps pace with your network.",
    icon: RocketLaunch
  }
];

const DELIVERY_SIGNALS: Signal[] = [
  {
    emphasis: "Access",
    title: "Teams close work anywhere",
    detail: "Approvals, payouts, and coaching conversations continue smoothly on the road, in the office, or between events."
  },
  {
    emphasis: "Insight",
    title: "Leaders act on live data",
    detail: "Device-responsive dashboards surface performance trends and compliance cues the moment they change."
  },
  {
    emphasis: "Trust",
    title: "Security teams stay confident",
    detail: "Role-aware authentication and encryption protect data across every approved device profile."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Mobile Friendly & Super Responsive MLM Software";
  const description =
    "Deliver a mobile friendly and super responsive MLM software experience. Cloud MLM Software keeps every workflow fast, secure, and consistent on any device.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/mlm-software-feature/mobile-friendly-super-responsive-in-all-devices",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type MobileResponsivePageProps = {
  params: { lang: SupportedLocale };
};

export default function MobileResponsivePage({
  params
}: MobileResponsivePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-slate-50/60 py-24 dark:via-slate-950 dark:to-slate-950">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(14,116,144,0.2),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(14,165,233,0.25),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(14,116,144,0.35),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(14,165,233,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.5fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              MLM Software Feature
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Mobile friendly & super responsive MLM software for global teams
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Cloud MLM Software is engineered to feel natural on every device. We rebuilt the legacy WordPress content into a modern experience so your distributors, finance teams, and executives can operate without friction across phones, tablets, and desktops.
              </p>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Every element is structured for SEO and AI discovery while delivering the fast, secure interactions that a modern MLM enterprise expects.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm transition duration-200 hover:border-primary/50 hover:shadow-lg dark:bg-slate-900/60"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="mt-4 space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{feature.title}</h2>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a product strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 bg-white/70 text-primary shadow-sm hover:bg-primary/10 dark:bg-slate-950/60"
              >
                <Link href={demoHref}>
                  Launch the live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-primary/30 bg-white/80 p-8 shadow-xl dark:border-primary/40 dark:bg-slate-900/70">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                Responsiveness at a glance
              </p>
              <p className="text-sm text-muted-foreground">
                These highlights summarise the upgraded experience captured from the source WordPress page.
              </p>
            </div>
            <div className="space-y-5">
              {HERO_STATS.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-background/70 p-5 shadow-sm dark:bg-slate-950/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{stat.description}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Responsive operations that scale with your network
          </h2>
          <p className="text-sm text-muted-foreground">
            Each insight here is drawn from the legacy content but refined to match the expectations of leaders who run modern MLM programmes.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {EXPERIENCE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-6 rounded-3xl border border-border/70 bg-muted/20 px-8 py-10 shadow-sm dark:bg-slate-900/50"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.lead}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 dark:from-primary/20 dark:via-transparent dark:to-slate-950"
          aria-hidden
        />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
          <div className="space-y-8 rounded-3xl border border-primary/30 bg-background/80 p-10 shadow-xl dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Blueprint for device-perfect rollouts
              </h2>
              <p className="text-sm text-muted-foreground">
                The original WordPress copy focused on mobility. We transformed it into a structured activation plan your teams can execute.
              </p>
            </div>
            <div className="space-y-6">
              {BLUEPRINT_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.title}
                    className="rounded-3xl border border-border/70 bg-background/70 p-6 shadow-sm dark:bg-slate-900/70"
                  >
                    <div className="flex items-center gap-3 text-primary">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{step.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/70 bg-white/80 p-8 shadow-lg dark:bg-slate-900/70">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                Signals we monitor
              </p>
              <p className="text-sm text-muted-foreground">
                These checkpoints confirm that the responsive experience is performing as expected.
              </p>
            </div>
            <div className="space-y-5">
              {DELIVERY_SIGNALS.map((signal) => (
                <article key={signal.title} className="rounded-2xl border border-border/70 bg-background/70 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    {signal.emphasis}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">{signal.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{signal.detail}</p>
                </article>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              All messaging is adapted from the source WordPress body content so you maintain narrative consistency while upgrading the experience.
            </p>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-r from-primary/15 via-primary/5 to-background p-12 text-center shadow-xl dark:from-primary/25 dark:via-slate-950/60 dark:to-slate-950">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to deliver a mobile friendly and super responsive MLM experience?
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to orchestrate a polished, device-agnostic journey that scales, converts, and earns the trust of humans and AI assistants alike.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-primary/40 bg-white/80 text-primary hover:bg-primary/10 dark:bg-slate-950/60"
              >
                <Link href={featuresHref}>
                  Explore all features
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
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
