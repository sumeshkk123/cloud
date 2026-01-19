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
  CircuitBoard,
  Cpu,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  Code,
  GearSix,
  Lightning,
  StackSimple,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  value: string;
  label: string;
  detail: string;
  icon: IconType;
};

type Focus = {
  title: string;
  description: string;
  icon: IconType;
};

type Track = {
  title: string;
  summary: string;
  bullet: string;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    value: "6 weeks",
    label: "to activate service pods",
    detail: "Blueprint delivery frameworks configure customer onboarding, support, and billing rapidly.",
    icon: Workflow
  },
  {
    value: "+44%",
    label: "project velocity",
    detail: "Automation, playbooks, and partner portals remove handoffs between sales, delivery, and support.",
    icon: Sparkles
  },
  {
    value: "99.5%",
    label: "uptime for client portals",
    detail: "Cloud infrastructure, redundancy, and proactive monitoring protect mission-critical engagements.",
    icon: ShieldCheck
  }
];

const GROWTH_FOCUS: Focus[] = [
  {
    title: "Productised services",
    description: "Package managed services, DevOps, and security offerings with repeatable delivery journeys.",
    icon: StackSimple
  },
  {
    title: "Partner ecosystems",
    description: "Enable alliance partners, resellers, and subcontractors with transparent collaboration and payouts.",
    icon: UsersFour
  },
  {
    title: "Innovation loops",
    description: "Gather telemetry from deployments to prioritise enhancements, training, and upsell opportunities.",
    icon: Lightning
  }
];

const DELIVERY_TRACKS: Track[] = [
  {
    title: "Discovery and alignment",
    summary: "Define service catalogues, SLAs, and target industries with executive alignment sessions.",
    bullet: "Outputs include persona maps, compliance requirements, and integration inventory."
  },
  {
    title: "Solution blueprinting",
    summary: "Design project workspaces, escalation paths, and compensation models for delivery and channel teams.",
    bullet: "Outputs include phased rollout plans and revenue attribution logic."
  },
  {
    title: "Automation launch",
    summary: "Connect CRM, PSA, ITSM, and financial systems to orchestrate end-to-end service delivery.",
    bullet: "Outputs include automated provisioning, billing cycles, and QBR dashboards."
  },
  {
    title: "Optimisation cadence",
    summary: "Review performance, margins, and customer sentiment to refine offerings quarterly.",
    bullet: "Outputs include backlog priorities, success metrics, and enablement updates."
  }
];

const PLATFORM_CAPABILITIES: Capability[] = [
  {
    title: "Unified service cockpit",
    description: "Monitor pipelines, delivery milestones, and support queues from a single control centre.",
    icon: CircuitBoard
  },
  {
    title: "Global resource visibility",
    description: "Match consultants to demand with skills matrices, certifications, and capacity insights.",
    icon: Globe2
  },
  {
    title: "Automated compliance",
    description: "Track data residency, certifications, and audit trails for every project engagement.",
    icon: ShieldCheck
  },
  {
    title: "Reusable knowledge hubs",
    description: "Distribute solution accelerators, templates, and best practices with granular permissions.",
    icon: Layers3
  },
  {
    title: "Developer enablement",
    description: "Provide code repositories, CI/CD integrations, and AI copilots aligned to project frameworks.",
    icon: Code
  },
  {
    title: "Outcome analytics",
    description: "Measure project profitability, utilisation, and customer satisfaction with drill-down dashboards.",
    icon: GearSix
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "IT Services MLM Software";
  const description =
    "Scale IT services networks with Cloud MLM Software—productised offerings, partner enablement, and outcome analytics woven into every engagement.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/it-services", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ITServicesPageProps = {
  params: { lang: SupportedLocale };
};

export default function ITServicesPage({ params }: ITServicesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-950/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(14,165,233,0.22),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(56,189,248,0.2),transparent_58%),radial-gradient(circle_at_52%_88%,rgba(34,211,238,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                IT services transformation hub
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for technology firms turning delivery excellence into revenue.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Orchestrate solutions, partners, and customer experiences from one platform—so every engagement delivers measurable outcomes and inspires loyalty.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Map your services operating model
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore the IT services demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Strategic focus areas</p>
            <div className="space-y-5">
              {GROWTH_FOCUS.map((focus) => {
                const Icon = focus.icon;
                return (
                  <article key={focus.title} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-sm font-semibold text-foreground">{focus.title}</h2>
                      <p className="text-xs text-muted-foreground">{focus.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Compare delivery packages
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Delivery tracks that accelerate time-to-value</h2>
            <p className="text-sm text-muted-foreground">
              Collaborative sprints keep stakeholders aligned—from sales engineering to managed services.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {DELIVERY_TRACKS.map((track, index) => (
              <article
                key={track.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-base font-semibold text-foreground">{track.title}</h3>
                <p className="text-sm text-muted-foreground">{track.summary}</p>
                <p className="text-sm text-muted-foreground">{track.bullet}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Platform capabilities for resilient IT services organisations</h2>
          <p className="text-sm text-muted-foreground">
            Power customer success with a modular platform covering planning, delivery, and post-project growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PLATFORM_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-background to-cyan-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_32%,rgba(56,189,248,0.18),transparent_62%),radial-gradient(circle_at_72%_24%,rgba(34,211,238,0.2),transparent_60%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Prove every engagement delivers business value</h2>
            <p className="text-sm text-muted-foreground">
              Translate project outcomes into executive-ready insights that reinforce your positioning as a strategic technology partner.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <Cpu className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Digital maturity scoring</h3>
                <p className="mt-2 text-sm text-muted-foreground">Measure clients against capability benchmarks and prioritise initiatives that lift resilience.</p>
              </article>
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <Layers3 className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Reusable accelerators</h3>
                <p className="mt-2 text-sm text-muted-foreground">Showcase solution kits, dashboards, and integrations that shorten delivery cycles.</p>
              </article>
              <article className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <Workflow className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-foreground">Service health insights</h3>
                <p className="mt-2 text-sm text-muted-foreground">Track incident trends, customer sentiment, and renewals to elevate executive reviews.</p>
              </article>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(34,211,238,0.28),transparent_60%),radial-gradient(circle_at_78%_24%,rgba(14,165,233,0.24),transparent_62%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to supercharge IT service delivery?</h2>
            <p className="text-sm text-slate-200">
              Share your service catalogue, partner mix, and delivery KPIs. We will craft a Cloud MLM Software playbook that accelerates outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Connect with our IT services team
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Request the IT services demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Strategy workshop checklist</p>
              <ul className="space-y-2">
                <li>• Service catalogue, project financials, and delivery SLAs.</li>
                <li>• Partner ecosystem roles, incentives, and onboarding steps.</li>
                <li>• Existing tooling, integration map, and automation wishlist.</li>
              </ul>
              <p className="text-xs text-slate-300">Expect a tailored roadmap, KPI plan, and enablement schedule within one business day.</p>
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
