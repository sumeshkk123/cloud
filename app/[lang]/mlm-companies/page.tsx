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
  ArrowUpRight,
  Building2,
  Compass,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { GlobeHemisphereWest, LineSegments, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type Segment = {
  title: string;
  description: string;
  icon: IconType;
  link: string;
};

const INSIGHTS: Insight[] = [
  {
    title: "MLM growth snapshot",
    description:
      "From health & wellness to fintech, successful companies anchor expansion on disciplined plans, transparent reporting, and secure platforms.",
    icon: Building2
  },
  {
    title: "Why software matters",
    description:
      "Accurate commissions, frictionless onboarding, and automation separate market leaders from stalled organisations.",
    icon: Sparkles
  },
  {
    title: "Our role",
    description:
      "Cloud MLM Software equips global brands with custom compensation engines, analytics, and integrations that keep them ahead of the curve.",
    icon: ShieldCheck
  }
];

const SEGMENTS: Segment[] = [
  {
    title: "Health & wellness",
    description: "Nutraceuticals, cosmetics, and holistic lifestyle companies balancing retention, compliance, and education.",
    icon: UsersThree,
    link: "/industries/beauty-cosmetics"
  },
  {
    title: "Financial & investment",
    description: "Forex, HYIP, and insurance brands operating with regulated audit trails and investor transparency.",
    icon: LineSegments,
    link: "/industries/finance"
  },
  {
    title: "Lifestyle & home",
    description: "Home care, cookware, and travel organisations scaling experiences with omnichannel commerce flows.",
    icon: Compass,
    link: "/industries/home-care"
  },
  {
    title: "Digital & technology",
    description: "Software, e-learning, and automation-centric companies delivering recurring value across devices.",
    icon: Network,
    link: "/industries/it-services"
  },
  {
    title: "Energy & sustainability",
    description: "Green energy, utilities, and solar players rewarding behavioural change and long-term contracts.",
    icon: GlobeHemisphereWest,
    link: "/industries/energy"
  },
  {
    title: "Global trailblazers",
    description: "Iconic enterprises like Amway, Avon, and Tupperware that continue to evolve compensation responsibly.",
    icon: MapPin,
    link: "/mlm-plans"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Companies";
  const description =
    "Explore how leading MLM companies succeed with resilient plans, automation, and Cloud MLM Software’s expertise.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MlmCompaniesPageProps = {
  params: { lang: SupportedLocale };
};

export default function MlmCompaniesPage({ params }: MlmCompaniesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(16,185,129,0.25),transparent_45%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.25),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-emerald-400/10 px-4 py-1 text-sm font-semibold text-emerald-100">
              Multi-industry success stories
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Discover how top MLM companies scale with confident plans and technology.
            </h1>
            <p className="text-base text-slate-200/80">
              In today’s industrial world, MLM companies are rapidly growing. Every successful organisation pairs a resilient compensation strategy with software that calculates accurately and manages distributors with a few clicks. Explore the playbooks behind global leaders and emerging innovators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Talk to our solution team
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200/60 text-emerald-100 hover:bg-emerald-400/10">
                <Link href={plansHref}>
                  Compare compensation plans
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur">
            {INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article key={insight.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-slate-100">{insight.title}</h2>
                  </div>
                  <p className="text-xs text-slate-200/80">{insight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Segments we support</h2>
          <p className="text-sm text-muted-foreground">
            Browse representative categories and access dedicated industry insights. Each link opens a blueprint tailored to that market.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((segment) => {
            const Icon = segment.icon;
            return (
              <article key={segment.title} className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="space-y-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{segment.title}</h3>
                  <p className="text-sm text-muted-foreground">{segment.description}</p>
                </div>
                <Button asChild variant="outline">
                  <Link href={buildLocalizedPath(segment.link, locale)}>
                    Explore segment
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Patterns from top-performing companies</h2>
            <p className="text-sm text-muted-foreground">
              Study established brands to accelerate your own evolution. These common threads consistently appear across thriving MLM organisations.
            </p>
          </div>
          <div className="grid gap-4">
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Disciplined compensation governance</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders document plan rules, audit payouts, and refresh incentives regularly—reducing risk and maintaining distributor trust.
              </p>
            </article>
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Omnichannel customer journeys</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Integrations connect e-commerce, events, and field apps so customers enjoy consistent experiences everywhere they buy.
              </p>
            </article>
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Data-led enablement</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Company dashboards surface rank progress, forecast inventory, and spot disengagement before it impacts revenue.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to benchmark your company?</h2>
              <p className="text-sm text-muted-foreground">
                Share your product mix, compensation model, and growth goals. We’ll assemble a comparison dossier and recommend next steps tailored to your market.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request your briefing</h3>
                <p className="text-sm text-muted-foreground">
                  Receive a roadmap that highlights relevant success stories, technology priorities, and compliance considerations.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request the dossier
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
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
