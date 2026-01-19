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
  Database,
  GaugeCircle,
  Hammer,
  LifeBuoy,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { CloudArrowUp, ListNumbers } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Reason = {
  title: string;
  detail: string;
  icon: IconType;
};

type Step = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Upgrade legacy systems",
    description:
      "Move off unstable, slow, or unsupported platforms into Cloud MLM Software’s secure cloud architecture.",
    icon: CloudArrowUp
  },
  {
    title: "Migration without downtime",
    description:
      "We stage, validate, and cut over so your members never lose access to genealogy, wallets, or analytics.",
    icon: LifeBuoy
  },
  {
    title: "Compliance preserved",
    description:
      "Audit trails, KYC documents, and gateway histories remain intact throughout the migration process.",
    icon: ShieldCheck
  }
];

const REASONS: Reason[] = [
  {
    title: "Performance bottlenecks",
    detail: "Legacy databases struggle under modern transaction volumes. Migration restores speed and reliability.",
    icon: GaugeCircle
  },
  {
    title: "Feature limitations",
    detail: "Unlock automation, analytics, mobile apps, and extensible APIs that older systems can’t support.",
    icon: Sparkles
  },
  {
    title: "Cost & maintenance",
    detail: "Reduce spend on patchwork hosting or custom fixes by consolidating on a managed platform.",
    icon: Hammer
  }
];

const STEPS: Step[] = [
  {
    number: "01",
    title: "Assessment & planning",
    description: "Inventory data sources, integrations, and compliance requirements. Build a migration playbook with rollback options.",
    icon: ListNumbers
  },
  {
    number: "02",
    title: "Data mobilisation",
    description: "Cleanse, transform, and stage genealogy, transactions, and content with automated integrity checks.",
    icon: Database
  },
  {
    number: "03",
    title: "Platform enablement",
    description: "Configure compensation, automation, and UI elements in the Cloud MLM Software sandbox for sign-off.",
    icon: Workflow
  },
  {
    number: "04",
    title: "Cutover & support",
    description: "Execute the go-live window, monitor KPIs, and provide hypercare until teams are fully confident.",
    icon: PlugZap
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Migration";
  const description =
    "Upgrade your MLM platform with Cloud MLM Software’s expert migration services—secure, compliant, and low-risk.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-migration", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MlmMigrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function MlmMigrationPage({ params }: MlmMigrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.18),transparent_48%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Seamless migration experts
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Switch from legacy MLM software without disrupting your business.
            </h1>
            <p className="text-base text-muted-foreground">
              Upgrade your old platform to Cloud MLM Software. Our migration service is quick, precise, and compliant—keeping your genealogy, payouts, and integrations intact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Start migration planning
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  View all services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:bg-slate-900/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground">{highlight.title}</h2>
                  </div>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why companies migrate to Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            From performance issues to missing capabilities, these triggers often signal that it’s time to modernise.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <article key={reason.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we deliver a reliable migration</h2>
            <p className="text-sm text-muted-foreground">
              Follow a structured journey that keeps your data secure and your teams informed.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{step.number}</p>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let’s design your migration roadmap</h2>
              <p className="text-sm text-muted-foreground">
                Share the software you use today, critical timelines, and stakeholders. We’ll return a readiness report with recommended phases and investment.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request your assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Migration specialists reply within one business day with next steps and discovery questions.</p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request now
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
