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
  BarChart3,
  BrainCircuit,
  LineChart,
  Layers,
  Lock,
  PieChart,
  Sparkles,
  Users,
  Workflow
} from "lucide-react";
import {
  CirclesThreePlus,
  DeviceMobile,
  TreeStructure
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Pillar = {
  title: string;
  description: string;
  icon: IconType;
};

type Framework = {
  label: string;
  title: string;
  summary: string;
};

type Feature = {
  title: string;
  detail: string;
  icon: IconType;
};

const VALUE_PILLARS: Pillar[] = [
  {
    title: "Real-time intelligence",
    description:
      "Dashboards highlight enrolment, productivity, and payout trends so leadership can respond within hours, not weeks.",
    icon: BarChart3
  },
  {
    title: "Frictionless operations",
    description:
      "Automate enrolment, rank progression, inventory, and commissions across every compensation model you run.",
    icon: Workflow
  },
  {
    title: "Distributor delight",
    description:
      "Mobile-first experiences provide clarity on earnings, recognition, and next best actions for every distributor tier.",
    icon: DeviceMobile
  }
];

const FRAMEWORK: Framework[] = [
  {
    label: "Foundation",
    title: "Plan architecture",
    summary:
      "Configure binary, unilevel, monoline, matrix, or hybrid structures with simulation tools and compliance guardrails."
  },
  {
    label: "Growth",
    title: "Engagement engine",
    summary:
      "Automated recognition, campaigns, and learning paths nurture distributors from onboarding through leadership."
  },
  {
    label: "Optimization",
    title: "Insight loops",
    summary:
      "AI analyses performance, churn risk, and product velocity to inform targeted interventions and promotions."
  }
];

const PLATFORM_FEATURES: Feature[] = [
  {
    title: "Complete genealogy management",
    detail: "Visualise trees, drill into legs, and run what-if scenarios before approving changes.",
    icon: TreeStructure
  },
  {
    title: "Financial confidence",
    detail: "Automated payout cycles, multi-currency wallets, and audit-ready statements keep finance in control.",
    icon: PieChart
  },
  {
    title: "Security at scale",
    detail: "Enterprise SSO, field-level permissions, and encryption keep sensitive data protected across regions.",
    icon: Lock
  },
  {
    title: "Modular integrations",
    detail: "Connect CRMs, ERPs, e-commerce, tax, and logistics systems with webhooks and low-code connectors.",
    icon: Layers
  },
  {
    title: "Automation toolkit",
    detail: "Trigger rule-based workflows for compliance checks, inventory alerts, and recognition journeys.",
    icon: Workflow
  },
  {
    title: "AI co-pilot",
    detail: "Predictive models surface coaching opportunities, forecast revenue, and recommend incentives.",
    icon: BrainCircuit
  }
];

const ADVANTAGES: Feature[] = [
  {
    title: "Rapid onboarding",
    detail: "Launch new markets with templated websites, replicated offices, and localisation built in.",
    icon: CirclesThreePlus
  },
  {
    title: "Unified commerce",
    detail: "Manage direct sales and subscription programs across web, mobile, and social channels.",
    icon: LineChart
  },
  {
    title: "Field enablement",
    detail: "Content hubs, event management, and coaching tools keep teams educated and inspired.",
    icon: Sparkles
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Network Marketing Software";
  const description =
    "Elevate your network marketing operations with Cloud MLM Software—automation, analytics, and mobile experiences designed for global scale.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/network-marketing-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NetworkMarketingPageProps = {
  params: { lang: SupportedLocale };
};

export default function NetworkMarketingPage({ params }: NetworkMarketingPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const consultingHref = buildLocalizedPath("/mlm-consulting", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(37,99,235,0.3),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.28),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.25),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 bg-indigo-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-indigo-100">
              Enterprise network marketing platform
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Power your network marketing organisation with precision, automation, and insight.
            </h1>
            <p className="max-w-2xl text-base text-slate-100/85">
              Cloud MLM Software orchestrates compensation, field enablement, e-commerce, and analytics so your teams can scale influence and revenue globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Experience the platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-indigo-200/60 text-indigo-100 hover:bg-indigo-400/10"
              >
                <Link href={consultingHref}>
                  Build a transformation roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full bg-indigo-400/40 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
              <span>Network intelligence</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold">
                <Users className="h-3.5 w-3.5" aria-hidden />
                275k distributors
              </span>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/20 bg-slate-950/40 p-4 text-sm text-slate-100/80">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <LineChart className="h-4 w-4" aria-hidden />
                  GMV uplift YTD
                </span>
                <span>+32%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <BrainCircuit className="h-4 w-4" aria-hidden />
                  AI coaching prompts
                </span>
                <span>8,400 sent</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Recognition moments
                </span>
                <span>15 per cohort</span>
              </div>
            </div>
            <p className="text-xs text-slate-100/75">
              Strategic playbooks align executives, finance, and field leaders around the same data-backed growth plan.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The pillars of modern network marketing operations
          </h2>
          <p className="text-sm text-muted-foreground">
            A scalable, compliant foundation keeps momentum high for distributors while protecting your brand and revenue.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A framework that evolves with your field
            </h2>
            <p className="text-sm text-muted-foreground">
              Align technology, compensation, and human touch with a lifecycle approach designed for network marketing growth.
            </p>
          </div>
          <div className="grid gap-6">
            {FRAMEWORK.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <div className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
                <div className="relative space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Platform capabilities
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything you need to operate and scale your network marketing enterprise
          </h2>
          <p className="text-sm text-muted-foreground">
            Modular services keep your organisation agile today and ready for tomorrow’s plan evolutions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Set your brand apart with elevated field experiences
            </h2>
            <p className="text-sm text-muted-foreground">
              Fuel productivity and loyalty with programmes that adapt to each distributor’s goals and momentum.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {ADVANTAGES.map((advantage) => {
                const Icon = advantage.icon;
                return (
                  <article
                    key={advantage.title}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm"
                  >
                    <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{advantage.title}</h3>
                    <p className="text-xs text-muted-foreground">{advantage.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-indigo-50 p-8 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-indigo-900/30">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 h-52 w-52 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-indigo-900/30" aria-hidden />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/40 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm dark:bg-slate-950/50">
                <Users className="h-4 w-4" aria-hidden />
                Executive alignment session
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Align leadership around a unified network marketing transformation blueprint.
              </h3>
              <p className="text-sm text-muted-foreground">
                Our strategic facilitators help define metrics, prioritise releases, and structure change management.
              </p>
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule your strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-slate-100 p-10 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to modernise your network marketing platform?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your current systems, growth targets, and distributor expectations. We will craft a tailored roadmap, investment overview, and launch plan.
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-primary/30 dark:bg-slate-950/70">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Implementation timeline</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-primary">
                  <Layers className="h-3.5 w-3.5" aria-hidden />
                  60 - 90 days
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Playbooks delivered</span>
                <span className="font-semibold text-foreground">18</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Included executive reviews</span>
                <span className="font-semibold text-foreground">Quarterly</span>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request a personalised assessment
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
