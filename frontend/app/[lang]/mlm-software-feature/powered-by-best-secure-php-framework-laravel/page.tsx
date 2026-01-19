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
  Check,
  ClipboardCheck,
  Cpu,
  Database,
  GitBranch,
  Lock,
  Scale,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { Circuitry, Gauge, SealCheck } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Requirement = {
  title: string;
  detail: string;
  icon: IconType;
};

type PlaybookItem = {
  title: string;
  summary: string;
  steps: string[];
  icon: IconType;
};

type Assurance = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Enterprise security foundation",
    description:
      "Layered authentication, encryption, and role-aware permissions are baked in so sensitive payout data never leaks.",
    icon: ShieldCheck
  },
  {
    title: "Ready to scale globally",
    description:
      "Queues, caching, and clean routing in Laravel keep performance steady even when your network surges across regions.",
    icon: Server
  },
  {
    title: "Developer velocity unlocked",
    description:
      "Modern tooling and expressive syntax cut release cycles, letting our product team ship trusted features faster.",
    icon: Sparkles
  }
];

const PILLARS: Pillar[] = [
  {
    tag: "Architecture",
    title: "Resilient application core",
    description:
      "We architect Cloud MLM Software on Laravel's MVC foundation so every component—from commissions to onboarding—stays modular and maintainable.",
    bullets: [
      "Eloquent ORM keeps business logic expressive while safeguarding data relationships.",
      "Event broadcasting and queue workers absorb usage spikes without downtime.",
      "Composer-managed dependencies ensure audits and updates remain transparent."
    ],
    icon: Cpu
  },
  {
    tag: "Security",
    title: "Compliance-first access control",
    description:
      "Laravel's authentication scaffolding and policy gates let us model granular permissions for every distributor role.",
    bullets: [
      "Multi-guard authentication separates back-office, admin, and field access.",
      "Token rotation and encryption guard payout approvals and wallet transfers.",
      "Native CSRF, hashing, and validation keep malicious automation at bay."
    ],
    icon: Lock
  },
  {
    tag: "Experience",
    title: "Future-proof delivery loops",
    description:
      "Our team leverages Laravel's ecosystem to automate testing, documentation, and deployment, keeping innovation consistent.",
    bullets: [
      "Automated pipelines spin up preview environments for every release.",
      "API resources standardise integrations with CRM, ERP, and learning tools.",
      "Vibrant community support and long-term roadmap reduce technical debt."
    ],
    icon: Workflow
  }
];

const REQUIREMENTS: Requirement[] = [
  {
    title: "PHP ≥ 5.5.9",
    detail: "Baseline language version delivers the syntax improvements Laravel needs for expressive, secure code.",
    icon: Gauge
  },
  {
    title: "OpenSSL extension",
    detail: "Enables encrypted communications, cert pinning, and secure token handling for distributor sessions.",
    icon: ShieldCheck
  },
  {
    title: "PDO extension",
    detail: "Provides consistent, parameterised database access across the relational engines we support.",
    icon: Database
  },
  {
    title: "Mbstring extension",
    detail: "Keeps multilingual content accurate across dashboards, emails, and replicating websites.",
    icon: Circuitry
  },
  {
    title: "Tokenizer extension",
    detail: "Supports Laravel's compilation layer so artisan commands and caching stay lightning fast.",
    icon: GitBranch
  }
];

const PLAYBOOK: PlaybookItem[] = [
  {
    title: "Discovery & architecture",
    summary:
      "Audit existing workflows, model domain boundaries, and map how Laravel services will orchestrate your compensation logic.",
    steps: [
      "Document high-volume events—signups, orders, payouts—and their data sources.",
      "Select caching and queue strategies based on seasonality and global distribution.",
      "Define migration milestones so legacy systems retire without disruption."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Build & integration",
    summary:
      "Compose modular feature sets, integrate APIs, and reinforce data protections with automated policies.",
    steps: [
      "Craft service layers with clear contracts for wallets, genealogy, and analytics.",
      "Harden authentication flows with audit logging and least-privilege roles.",
      "Connect third-party services via REST or GraphQL while preserving data residency."
    ],
    icon: Circuitry
  },
  {
    title: "Launch & optimise",
    summary:
      "Stabilise performance in production, monitor experience metrics, and keep teams aligned with change management.",
    steps: [
      "Load-test peak scenarios to validate queue throughput and cache hit ratios.",
      "Deliver enablement resources so field teams adopt new capabilities quickly.",
      "Review telemetry weekly to prioritise enhancements and emerging AI co-pilot needs."
    ],
    icon: Server
  }
];

const ASSURANCES: Assurance[] = [
  {
    title: "Risk mitigation blueprint",
    detail:
      "Laravel's baked-in security features plus our governance framework protect payouts, identities, and regulatory reporting.",
    icon: SealCheck
  },
  {
    title: "Operational visibility",
    detail:
      "Centralised logging and observability dashboards surface anomalies before they impact your network or reputation.",
    icon: Circuitry
  },
  {
    title: "Strategic partnership",
    detail:
      "Cloud MLM Software acts as a thought partner—aligning product roadmap, AI readiness, and market expansion with your goals.",
    icon: Scale
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Powered by the Best Secure PHP Framework (Laravel) | Cloud MLM Software";
  const description =
    "Learn how Cloud MLM Software leverages Laravel to deliver secure, scalable, and future-ready MLM platforms with enterprise-grade governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/powered-by-best-secure-php-framework-laravel", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PoweredByLaravelPageProps = {
  params: { lang: SupportedLocale };
};

export default function PoweredByLaravelPage({ params }: PoweredByLaravelPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-slate-900 py-24 text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(129,140,248,0.4),transparent_60%),radial-gradient(circle_at_40%_85%,rgba(14,165,233,0.35),transparent_55%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,0.5fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-400/10 px-4 py-1 text-sm font-semibold text-sky-100">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Laravel-first infrastructure
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Powered by the Best Secure PHP Framework (Laravel)
            </h1>
            <p className="max-w-3xl text-lg text-slate-200">
              Laravel equips Cloud MLM Software with a modern framework that balances scalability, security, and delivery speed. With
              expressive tooling and hardened defaults, we ship experiences your distributors trust—faster than legacy platforms can
              iterate.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {HERO_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-700/60 bg-slate-950/40 p-6 shadow-sm transition hover:border-sky-400/60"
                >
                  <item.icon className="h-6 w-6 text-sky-300" aria-hidden />
                  <h2 className="mt-4 text-base font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="min-w-[180px]">
                <Link href={demoHref}>
                  Request a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-w-[180px] border-slate-600 text-slate-100 hover:bg-slate-800">
                <Link href={contactHref}>
                  Discuss governance
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/60 p-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.2),transparent_60%)]" aria-hidden />
            <h2 className="text-base font-semibold text-white">Implementation confidence metrics</h2>
            <dl className="mt-6 grid gap-6 text-sm text-slate-300">
              <div className="space-y-1">
                <dt className="flex items-center gap-2 text-slate-200">
                  <Circuitry className="h-5 w-5 text-sky-300" aria-hidden />
                  Average time-to-launch
                </dt>
                <dd className="text-3xl font-semibold text-white">90 days</dd>
                <dd>From discovery to first cohort launch via agile delivery cadences.</dd>
              </div>
              <div className="space-y-1">
                <dt className="flex items-center gap-2 text-slate-200">
                  <Gauge className="h-5 w-5 text-sky-300" aria-hidden />
                  Framework uptime commitment
                </dt>
                <dd className="text-3xl font-semibold text-white">99.9%</dd>
                <dd>Observability, redundancy, and load balancing built into every tenant.</dd>
              </div>
              <div className="space-y-1">
                <dt className="flex items-center gap-2 text-slate-200">
                  <SealCheck className="h-5 w-5 text-sky-300" aria-hidden />
                  Compliance coverage
                </dt>
                <dd className="text-3xl font-semibold text-white">Global</dd>
                <dd>Meets cross-border data policies with configurable residency options.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
            Why Laravel
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Why Cloud MLM Software standardises on Laravel
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Laravel excels at handling complex enterprise workflows without sacrificing developer experience. It brings the routing,
            queueing, and security primitives our clients demand, letting us focus on differentiated features for your field teams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group rounded-3xl border border-border/60 bg-card/70 p-8 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {pillar.tag}
              </span>
              <pillar.icon className="mt-6 h-8 w-8 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{pillar.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <Check className="mt-1 h-4 w-4 flex-none text-primary" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
            Technical prerequisites
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            System requirements for a hardened Laravel deployment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meeting these technical baselines keeps your platform stable, multilingual, and ready for future automation layers.
            We audit and monitor each dependency throughout the product lifecycle.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {REQUIREMENTS.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm">
              <item.icon className="h-7 w-7 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20">
        <div className="container space-y-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
              Delivery approach
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              A proven playbook for launching Laravel-powered MLM platforms
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Each phase combines our enterprise delivery experience with Laravel best practices, ensuring your launch is seamless
              and governed.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PLAYBOOK.map((item) => (
              <article key={item.title} className="relative rounded-3xl border border-border/60 bg-background p-8 shadow-sm">
                <item.icon className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {item.steps.map((step) => (
                    <li key={step} className="flex gap-2">
                      <ArrowUpRight className="mt-1 h-4 w-4 flex-none text-primary" aria-hidden />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-semibold text-primary">
            Governance & trust
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Built-in assurances that keep your enterprise protected
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Laravel provides the technical guardrails, and Cloud MLM Software adds layered governance so your organisation stays
            protected, compliant, and ready for rapid expansion.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ASSURANCES.map((assurance) => (
            <article key={assurance.title} className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm">
              <assurance.icon className="h-7 w-7 text-primary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{assurance.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{assurance.detail}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-border/60 bg-muted/60 p-8 text-sm text-muted-foreground">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-base font-semibold text-foreground">Continue your evaluation</h3>
            <p>
              Explore additional features or connect with our architects to map Laravel to your product strategy, compliance
              requirements, and AI roadmap.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href={featuresHref}>
                Review feature library
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={contactHref}>
                Talk to an architect
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
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
