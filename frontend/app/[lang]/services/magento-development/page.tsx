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
  Boxes,
  Code2,
  Database,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { CloudArrowUp, ListNumbers } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
};

type Differentiator = {
  title: string;
  description: string;
  icon: IconType;
};

type Play = {
  title: string;
  detail: string;
  metric: string;
};

type Sprint = {
  step: string;
  description: string;
  lead: string;
};

const HERO_STATS: HeroStat[] = [
  { label: "Magento builds delivered", value: "150+" },
  { label: "Average conversion uplift", value: "27%" },
  { label: "Markets operating on Magento", value: "32" }
];

const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "Certified Magento engineers",
    description:
      "Specialists experienced in B2C, B2B, and marketplace deployments engineered for direct selling complexity.",
    icon: Sparkles
  },
  {
    title: "Commerce-to-comp plan sync",
    description:
      "Catalogues, promotions, and payouts stay aligned through custom middleware purpose-built for MLM operators.",
    icon: Workflow
  },
  {
    title: "Performance-first storefronts",
    description:
      "Lighthouse benchmarks, accessibility audits, and responsive templates tuned for global traffic surges.",
    icon: BarChart3
  },
  {
    title: "Governed change management",
    description:
      "Release cadences, documentation, and training keep Magento upgrades safe for busy product launch calendars.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PLAYS: Play[] = [
  {
    title: "Experience design revamps",
    detail:
      "Reimagine your Magento theme with brand-led storytelling backed by conversion research and data-informed UX tweaks.",
    metric: "18% lower bounce rate"
  },
  {
    title: "Headless architecture",
    detail:
      "Adopt modular micro front-ends and APIs so field apps, replicating sites, and mobile experiences stay in sync.",
    metric: "4x faster feature launches"
  },
  {
    title: "Revenue automation",
    detail:
      "Automate rank advancement, bonus eligibility, and personalised offers triggered instantly from Magento orders.",
    metric: "12K+ payouts reconciled weekly"
  }
];

const DELIVERY_SPRINTS: Sprint[] = [
  {
    step: "Solution blueprint",
    description:
      "Audit catalogue complexity, data flows, and regulatory requirements to draft target architecture and risk controls.",
    lead: "Magento solution architect"
  },
  {
    step: "Build & integrate",
    description:
      "Engineering squads tackle theme refactors, extension development, and middleware connectors with peer code reviews.",
    lead: "Full-stack engineers"
  },
  {
    step: "Stabilise & optimise",
    description:
      "QA runs, performance tuning, and enablement training ensure go-live success and knowledge transfer to internal teams.",
    lead: "Delivery manager"
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Magento Development Services for MLM Commerce | Cloud MLM Software";
  const description =
    "Launch and scale Magento storefronts engineered for direct selling. Cloud MLM Software delivers certified Magento development, integrations, and optimisation for global MLM enterprises.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/magento-development", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MagentoDevelopmentPageProps = {
  params: { lang: SupportedLocale };
};

export default function MagentoDevelopmentPage({ params }: MagentoDevelopmentPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-rose-50 via-white to-sky-50 px-6 py-20 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-sky-950 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(244,114,182,0.16),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.16),transparent_50%),radial-gradient(circle_at_50%_85%,rgba(14,116,144,0.2),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Magento excellence squad
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              High-performing Magento storefronts built for global MLM expansion.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              Turn Magento into the growth engine for your distributors, customers, and regional teams. Cloud MLM Software
              blends certified developers, conversion strategists, and integration experts to deliver secure, scalable,
              and brand-defining commerce experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Discuss a Magento project
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  View other services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/40 bg-white/70 p-4 text-center shadow-sm dark:bg-slate-950/70"
                >
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="space-y-5 rounded-3xl border border-border/50 bg-white/80 p-6 shadow-lg dark:bg-slate-950/70">
            {DIFFERENTIATORS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-border/40 bg-muted/40 p-5 dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1.5">
                    <h2 className="text-sm font-semibold text-foreground">{item.title}</h2>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Strategic Magento plays engineered for MLM operations
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software’s team pairs Magento best practices with direct selling know-how so your distributors,
              product managers, and finance teams stay aligned across every release.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {STRATEGIC_PLAYS.map((play) => (
                <article
                  key={play.title}
                  className="flex flex-col justify-between rounded-3xl border border-border/40 bg-white/80 p-6 shadow-sm dark:bg-slate-950/70"
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                    <p className="text-sm text-muted-foreground">{play.detail}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    <CloudArrowUp className="h-4 w-4" aria-hidden />
                    {play.metric}
                  </span>
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-primary/30 bg-primary/10 p-8 shadow-sm dark:border-primary/40 dark:bg-primary/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Commerce intelligence unlocked</h3>
              <p className="text-sm text-muted-foreground">
                Use Magento data as the heartbeat of your organisation. We orchestrate seamless connections between
                storefront actions and your analytics, compensation, and customer care systems.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Database className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Enterprise data pipelines with quality gates for orders, inventory, and promotions.</span>
              </li>
              <li className="flex items-start gap-3">
                <Boxes className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Multi-storefront governance that respects localisation, tax, and compliance rules.</span>
              </li>
              <li className="flex items-start gap-3">
                <Code2 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Extensible module architecture ready for future marketplace, B2B, or subscription launches.</span>
              </li>
            </ul>
            <Button asChild size="lg" variant="secondary">
              <Link href={contactHref}>
                Request a solution blueprint
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Integration sprints that keep launches predictable
          </h2>
          <p className="text-sm text-muted-foreground">
            Every project follows our governed delivery cadence—aligning technical excellence with operational readiness
            for your global field team.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {DELIVERY_SPRINTS.map((sprint, index) => (
            <article
              key={sprint.step}
              className="relative flex flex-col gap-4 rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm dark:bg-slate-950/75"
            >
              <span className="absolute -top-4 left-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-white text-lg font-semibold text-primary shadow-sm dark:bg-slate-950">
                <ListNumbers weight="duotone" className="h-6 w-6" aria-hidden />
                <span className="sr-only">Step {index + 1}</span>
              </span>
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-foreground">{sprint.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{sprint.description}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Lead: {sprint.lead}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-border/50 bg-slate-900 text-white shadow-sm dark:border-slate-800">
        <div className="relative isolate px-6 py-16 sm:px-12">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(244,114,182,0.35),transparent_55%)]" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Co-create your next Magento release with Cloud MLM Software.
              </h2>
              <p className="text-sm text-slate-200">
                Whether you need a fresh storefront, API-driven headless experience, or enterprise upgrade, our team
                builds every asset with security, compliance, and conversion in mind.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Engage our Magento experts
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={servicesHref}>
                  Browse services portfolio
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
