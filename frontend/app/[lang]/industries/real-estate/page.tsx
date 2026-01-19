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
  Building,
  CalendarRange,
  ClipboardList,
  Compass,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import {
  ChartBar,
  Handshake,
  House,
  MegaphoneSimple,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  value: string;
  label: string;
  description: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  description: string;
  icon: IconType;
};

type Journey = {
  stage: string;
  title: string;
  description: string;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

const MARKET_HIGHLIGHTS: Highlight[] = [
  {
    value: "+41%",
    label: "conversion velocity",
    description: "Automated nurture journeys and prospect scoring accelerate contract signings across territories.",
    icon: Sparkles
  },
  {
    value: "360°",
    label: "network visibility",
    description: "Track brokers, developers, and referral partners in a single workspace with auditable deal flows.",
    icon: UsersRound
  },
  {
    value: "24 hrs",
    label: "listing onboarding",
    description: "Template-driven onboarding syncs inventory, disclosures, and marketing assets in a day.",
    icon: ClipboardList
  }
];

const GROWTH_OPPORTUNITIES: Opportunity[] = [
  {
    title: "Developer alliances",
    description: "Coordinate launches, pricing, and marketing assets with shared dashboards and payout schedules.",
    icon: Building
  },
  {
    title: "Experience-rich showings",
    description: "Blend virtual tours, in-person events, and prospect follow-ups with personalised storytelling.",
    icon: Compass
  },
  {
    title: "Recurring revenue",
    description: "Launch property management and concierge subscriptions with automated billing and retention insights.",
    icon: CalendarRange
  }
];

const ROLLOUT_JOURNEY: Journey[] = [
  {
    stage: "01",
    title: "Blueprint & data readiness",
    description: "Audit inventory sources, compliance requirements, and partner hierarchies to align all stakeholders."
  },
  {
    stage: "02",
    title: "Experience design",
    description: "Prototype buyer, investor, and agent journeys with personalised content and ROI dashboards."
  },
  {
    stage: "03",
    title: "Automation launch",
    description: "Connect CRM, MLS, finance, and marketing systems to orchestrate listings, commissions, and service tickets."
  },
  {
    stage: "04",
    title: "Market expansion",
    description: "Run playbooks for new geographies, product lines, and partner models with measurable testing."
  }
];

const PLATFORM_MODULES: Module[] = [
  {
    title: "Inventory intelligence",
    detail: "Sync MLS, developer feeds, and exclusive listings with AI-driven matching for buyers and investors.",
    icon: House
  },
  {
    title: "Commission orchestration",
    detail: "Automate tiered payouts for brokers, referral partners, and service teams with full audit trails.",
    icon: Wallet
  },
  {
    title: "Campaign studio",
    detail: "Launch omni-channel campaigns with co-branded assets, lead scoring, and performance analytics.",
    icon: MegaphoneSimple
  },
  {
    title: "Deal room collaboration",
    detail: "Bring contracts, compliance documents, and task management into secure, role-based workspaces.",
    icon: Handshake
  },
  {
    title: "Investor reporting",
    detail: "Track portfolio performance, rental yields, and capital deployment with executive dashboards.",
    icon: ChartBar
  },
  {
    title: "Risk & compliance",
    detail: "Monitor KYC, local regulations, and disclosure requirements with alerts for sales and legal teams.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Real Estate MLM Software";
  const description =
    "Empower real estate networks with Cloud MLM Software—inventory intelligence, partner orchestration, and buyer journeys engineered for growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/real-estate", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RealEstatePageProps = {
  params: { lang: SupportedLocale };
};

export default function RealEstatePage({ params }: RealEstatePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-rose-50 via-white to-slate-50 py-20 dark:border-border/40 dark:from-rose-950 dark:via-slate-950 dark:to-slate-950/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(244,114,182,0.18),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(59,130,246,0.2),transparent_58%),radial-gradient(circle_at_50%_88%,rgba(249,168,212,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Real estate growth collective
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for property leaders building community-centric networks.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Package residential, commercial, and investment offerings with transparent compensation, immersive marketing, and service experiences that inspire referrals.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design your property innovation roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore the real estate demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {MARKET_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold text-foreground">{item.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Opportunities shaping the market</p>
            <div className="space-y-5">
              {GROWTH_OPPORTUNITIES.map((opportunity) => {
                const Icon = opportunity.icon;
                return (
                  <article key={opportunity.title} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-sm font-semibold text-foreground">{opportunity.title}</h2>
                      <p className="text-xs text-muted-foreground">{opportunity.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Review solution tiers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Rollout journey from blueprint to market expansion</h2>
            <p className="text-sm text-muted-foreground">
              Each phase blends people, process, and technology milestones to protect brand standards and accelerate growth.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ROLLOUT_JOURNEY.map((journey) => (
              <article key={journey.stage} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">{journey.stage}</p>
                <h3 className="text-base font-semibold text-foreground">{journey.title}</h3>
                <p className="text-sm text-muted-foreground">{journey.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Platform modules that elevate every property experience</h2>
          <p className="text-sm text-muted-foreground">
            Combine marketing sophistication, transparent compensation, and operational control in one environment.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PLATFORM_MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article key={module.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground">{module.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-background to-rose-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-rose-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(244,114,182,0.22),transparent_60%),radial-gradient(circle_at_75%_24%,rgba(59,130,246,0.22),transparent_62%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Demonstrate value to developers, brokers, and investors</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <Home className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Customer-ready narratives</h3>
                <p className="mt-2 text-sm text-muted-foreground">Share property stories, lifestyle content, and ROI scenarios that win buyer confidence.</p>
              </article>
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <MapPin className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Territory intelligence</h3>
                <p className="mt-2 text-sm text-muted-foreground">Spot demand hotspots, lead sources, and partner performance by neighbourhood or region.</p>
              </article>
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <CalendarRange className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Service lifecycle insights</h3>
                <p className="mt-2 text-sm text-muted-foreground">Show maintenance, renewal, and upgrade journeys that keep residents and investors engaged.</p>
              </article>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(244,114,182,0.28),transparent_62%),radial-gradient(circle_at_78%_24%,rgba(59,130,246,0.24),transparent_64%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to elevate your property ecosystem?</h2>
            <p className="text-sm text-slate-200">
              Bring your inventory strategy, partner landscape, and growth targets. We will co-create a Cloud MLM Software plan with measurable milestones.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Meet our real estate strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Request the real estate demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Workshop preparation</p>
              <ul className="space-y-2">
                <li>• Inventory sources, deal stages, and partner compensation models.</li>
                <li>• Marketing channels, event plans, and digital asset libraries.</li>
                <li>• Service propositions, KPI dashboards, and expansion roadmap.</li>
              </ul>
              <p className="text-xs text-slate-300">Expect a tailored execution roadmap, KPI framework, and transition plan within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
