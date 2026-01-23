import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight, CircuitBoard, ShieldCheck, Workflow } from "lucide-react";
import {
  Api,
  CirclesThreePlus,
  Cloud,
  Database,
  ShoppingCartSimple,
  Stack,
  TerminalWindow
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ApiPillar = {
  title: string;
  copy: string;
  icon: IconType;
};

type PlatformProfile = {
  name: string;
  badge: string;
  headline: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type DeliveryPhase = {
  phase: string;
  title: string;
  detail: string;
  outcome: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Unified CMS connectors",
    value: "3",
    detail: "OpenCart, WordPress, and Drupal knitted into one operations layer.",
    icon: Stack
  },
  {
    label: "Purpose-built APIs",
    value: "Custom",
    detail: "Endpoints tailored to sync catalogues, enrolments, and customer journeys.",
    icon: Api
  },
  {
    label: "Enterprise uptime",
    value: "99.9%",
    detail: "Backed by Cloud MLM monitoring, documentation, and support playbooks.",
    icon: Cloud
  }
];

const API_PILLARS: ApiPillar[] = [
  {
    title: "SaaS ecosystems without silos",
    copy:
      "We stabilise growing CMS environments so content, commerce, and marketing teams collaborate on one secure backbone.",
    icon: CirclesThreePlus
  },
  {
    title: "Data governance from day zero",
    copy:
      "APIs deliver permissions-aware access—keeping customer profiles, orders, and compliance workflows synchronised in real time.",
    icon: Database
  },
  {
    title: "Experience-first automation",
    copy:
      "Every integration respects front-end polish: fast storefronts, intuitive WordPress funnels, and Drupal content models ready for scale.",
    icon: Workflow
  }
];

const PLATFORM_PROFILES: PlatformProfile[] = [
  {
    name: "OpenCart Commerce Engine",
    badge: "Retail acceleration",
    headline: "Sync catalogues, orders, and payouts without touching core code.",
    summary:
      "OpenCart remains the go-to cart for global e-commerce. Our middleware keeps inventories, price rules, and distributor storefronts in lockstep.",
    bullets: [
      "Bidirectional APIs refresh products, orders, and customer data instantly.",
      "Custom endpoints extend OpenCart workflows into MLM genealogy and commission logs.",
      "Flexible pricing structures protect regional catalogues while centralising insight."
    ],
    icon: ShoppingCartSimple
  },
  {
    name: "WordPress Experience Layer",
    badge: "Content intelligence",
    headline: "Transform publishing agility into measurable distributor engagement.",
    summary:
      "WordPress APIs give marketing teams fine-grained control over campaigns while we handle enrolments, chat plugins, and lead capture flows.",
    bullets: [
      "Segmented REST endpoints manage posts, landing pages, and onboarding resources remotely.",
      "Secure PHP and MySQL foundations tuned for high-traffic product announcements.",
      "Plugin orchestration, including live chat handoffs, ready for multilingual operations."
    ],
    icon: TerminalWindow
  },
  {
    name: "Drupal Integration Hub",
    badge: "Data orchestration",
    headline: "Model complex content and analytics pipelines without friction.",
    summary:
      "Drupal’s flexible API toolkit plugs straight into CRM, marketing automation, and EHR stacks—Cloud MLM keeps the governance clean.",
    bullets: [
      "Reusable API structures connect Salesforce, HubSpot, Mailchimp, and custom ERPs.",
      "Read/write operations expose the right data to field leaders while respecting policy.",
      "Modular architecture scales from media-rich hubs to government-grade deployments."
    ],
    icon: CircuitBoard
  }
];

const DELIVERY_PROGRAMME: DeliveryPhase[] = [
  {
    phase: "Week 1",
    title: "Discovery & interface audit",
    detail:
      "Document current CMS assets, inventory feeds, and content governance; map every API contract we will enhance or retire.",
    outcome: "Clear integration blueprint with risk register and ROI baselines."
  },
  {
    phase: "Weeks 2-4",
    title: "API engineering & sandboxing",
    detail:
      "Launch custom endpoints, automate sync routines, and validate data quality against staging OpenCart stores, WordPress sites, and Drupal models.",
    outcome: "Signed-off acceptance scripts covering catalogues, enrolments, and marketing triggers."
  },
  {
    phase: "Week 5",
    title: "Unified launch & enablement",
    detail:
      "Release integrations to production with roll-back plans, governance dashboards, and training clips for commercial, product, and support teams.",
    outcome: "Live operations with Cloud MLM support monitoring 24/7 and documented SLAs."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "OpenCart, WordPress & Drupal Integration with API";
  const description =
    "Build a unified API strategy for OpenCart, WordPress, and Drupal with Cloud MLM Software. Keep content, commerce, and distributor journeys synchronised in one enterprise platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/open-cart-word-press-and-drupal-integration-with-api", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type IntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function OpenCartWordPressDrupalIntegrationPage({ params }: IntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_-10%_20%,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_110%_30%,rgba(186,230,253,0.25),transparent_60%),linear-gradient(120deg,rgba(56,189,248,0.05),rgba(99,102,241,0.12))]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.5fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">
              API-first feature
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                OpenCart, WordPress & Drupal integration engineered for enterprise MLM growth.
              </h1>
              <p className="text-base text-slate-200/85">
                Cloud MLM Software connects your content platforms and commerce engines so distributors, marketers, and compliance leaders work from a single source of truth. We honour each CMS strength while scripting reliable automation across your network.
              </p>
              <p className="text-sm text-slate-200/75">
                The positioning originates from our legacy WordPress experience—now refined with modern guardrails, API governance, and performance tuning for multilingual, multi-currency organisations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Architect my integration
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-200/60 text-sky-100 hover:bg-sky-400/10">
                <Link href={demoHref}>
                  See live API syncing
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            {HERO_METRICS.map(({ label, value, detail, icon: Icon }) => (
              <article key={label} className="rounded-2xl border border-white/15 bg-black/30 p-5 shadow-sm">
                <div className="flex items-center justify-between text-slate-100">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-slate-200/60">{label}</p>
                    <p className="text-3xl font-bold">{value}</p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-400/20 text-sky-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-200/80">{detail}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            APIs as the backbone of unified MLM commerce
          </h2>
          <p className="text-sm text-muted-foreground">
            As SaaS platforms scale, the real differentiator is disciplined interoperability. These pillars translate the original page narrative into an actionable Cloud MLM integration stance.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {API_PILLARS.map(({ title, copy, icon: Icon }) => (
            <article
              key={title}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm"
            >
              <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-sky-400 via-primary to-sky-500" aria-hidden />
              <div className="space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-xs uppercase tracking-[0.3em] text-primary/70">
                Secured by Cloud MLM governance
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="container space-y-10 py-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Platform intelligence with distinct playbooks
            </h2>
            <p className="text-sm text-muted-foreground">
              Each CMS brings unique advantages. We preserve that advantage while giving corporate teams the governance, automation, and analytics the legacy site promised.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {PLATFORM_PROFILES.map(({ name, badge, headline, summary, bullets, icon: Icon }) => (
              <article
                key={name}
                className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-background/90 p-8 shadow-sm dark:bg-slate-950/70"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{badge}</span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{headline}</p>
                  <p className="text-sm text-muted-foreground">{summary}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {bullets.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Orchestrated delivery programme
            </h2>
            <p className="text-sm text-muted-foreground">
              APIs are the most dependable way to run distributed data. Our launch rhythm keeps stakeholders aligned and honours change-management best practices.
            </p>
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-primary dark:bg-slate-950/70">
              <p className="font-semibold uppercase tracking-[0.4em]">Enablement add-ons</p>
              <ul className="mt-3 space-y-2 text-primary/80">
                <li className="flex gap-2">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                  <span>Role-based access policies documented for auditors.</span>
                </li>
                <li className="flex gap-2">
                  <Cloud className="h-4 w-4" aria-hidden />
                  <span>Automated backups covering catalogues, media, and user assets.</span>
                </li>
                <li className="flex gap-2">
                  <Database className="h-4 w-4" aria-hidden />
                  <span>Observability dashboards measuring sync health in real time.</span>
                </li>
              </ul>
            </div>
            <Button asChild size="lg" variant="outline" className="w-full border-primary/40 text-primary hover:bg-primary/10">
              <Link href={featuresHref}>
                Explore every API-ready feature
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/90 p-8 shadow-sm dark:bg-slate-950/70">
            <ol className="relative space-y-10 border-l border-primary/20 pl-6">
              {DELIVERY_PROGRAMME.map(({ phase, title, detail, outcome }) => (
                <li key={phase} className="relative pl-4">
                  <span className="absolute -left-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
                    {phase}
                  </span>
                  <div className="rounded-2xl border border-border/60 bg-background/95 p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Outcome</p>
                    <p className="mt-1 text-sm text-muted-foreground">{outcome}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-primary/5 p-10 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready for a unified CMS-to-MLM experience?
              </h2>
              <p className="text-sm text-muted-foreground">
                We bring the experience of countless API rollouts—documented, performance-driven, and tailored to the way your brand communicates across OpenCart, WordPress, and Drupal.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                  <Link href={contactHref}>
                    Start the integration plan
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={demoHref}>
                    Join a live architecture tour
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-slate-100">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-200/70">Governance snapshot</p>
                <p className="mt-3 text-base font-semibold text-white">
                  Continuous compliance checks on API payloads keep your financial data trustworthy across every market.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-slate-100">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-200/70">Support promise</p>
                <p className="mt-3 text-base font-semibold text-white">
                  24/7 watch with escalation paths straight to Cloud MLM engineers when traffic spikes or new launches roll out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: SupportedLocale): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
