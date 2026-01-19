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
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users2
} from "lucide-react";
import {
  ChartLineUp,
  ClipboardText,
  IdentificationBadge,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Challenge = {
  title: string;
  description: string;
};

type Play = {
  title: string;
  description: string;
  icon: IconType;
};

type Programme = {
  name: string;
  outcomes: string[];
};

type ProofPoint = {
  title: string;
  description: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Policy launch time",
    value: "< 3 weeks",
    detail: "Template packs for product, compliance, and compensation accelerate go-to-market across channels.",
    icon: Sparkles
  },
  {
    label: "Advisor retention",
    value: "+39%",
    detail: "Transparent payouts and guided journeys keep field teams motivated and compliant.",
    icon: Users2
  },
  {
    label: "Regulatory readiness",
    value: "24/7",
    detail: "Audit logs, suitability checks, and document trails are maintained automatically across regions.",
    icon: ShieldCheck
  }
];

const INDUSTRY_CHALLENGES: Challenge[] = [
  {
    title: "Complex product mixes",
    description: "Protection, wealth, and micro-insurance lines require nuanced compensation and cross-sell orchestration."
  },
  {
    title: "Evolving compliance",
    description: "Regulators demand transparent disclosures, KYC rigour, and traceable advisor communications."
  },
  {
    title: "Customer trust gaps",
    description: "Policyholders expect personalised advice, instant servicing, and proof of value at every touchpoint."
  }
];

const EXPERIENCE_PLAYS: Play[] = [
  {
    title: "Compensation governance studio",
    description: "Model unilevel, matrix, or hybrid plans that tie incentives to risk profiles, persistency, and claims performance.",
    icon: ChartLineUp
  },
  {
    title: "Advisor experience hub",
    description: "Provide onboarding checklists, credential tracking, and digital sales kits inside a secure workspace.",
    icon: IdentificationBadge
  },
  {
    title: "Client relationship fabric",
    description: "Synchronise CRM, policy admin, and marketing to trigger renewal reminders, cross-sell journeys, and wellness education.",
    icon: UsersFour
  },
  {
    title: "Compliance command centre",
    description: "Automate disclosures, suitability forms, and audit trails with real-time exception alerts for supervisors.",
    icon: ClipboardText
  }
];

const DELIVERY_PROGRAMMES: Programme[] = [
  {
    name: "Product & compliance blueprint",
    outcomes: [
      "Catalogue current policy lines, riders, and territorial requirements.",
      "Define compensation guardrails, clawback logic, and risk review checkpoints."
    ]
  },
  {
    name: "Advisor enablement sprint",
    outcomes: [
      "Launch role-based portals with tailored learning paths and sales aids.",
      "Integrate e-signature, illustration, and premium collection tools for in-field agility."
    ]
  },
  {
    name: "Customer engagement engine",
    outcomes: [
      "Activate lifecycle automation from lead capture to policy renewal.",
      "Deploy analytics for lapse warnings, upsell triggers, and satisfaction monitoring."
    ]
  }
];

const PROOF_POINTS: ProofPoint[] = [
  {
    title: "Differentiated advice",
    description: "Blend human advocacy with AI guidance to deliver relevant offers and explain coverage transparently."
  },
  {
    title: "Operational discipline",
    description: "Gain shared visibility on underwriting status, claims queues, and sales targets to guide daily decisions."
  },
  {
    title: "Customer confidence",
    description: "Provide policyholders with secure self-service, claim updates, and prevention content to build loyalty."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Insurance Industry MLM Software";
  const description =
    "Modernise insurance distribution with Cloud MLM Software—compliance-first compensation, advisor enablement, and policyholder engagement built for growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/insurance", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InsurancePageProps = {
  params: { lang: SupportedLocale };
};

export default function InsurancePage({ params }: InsurancePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(16,185,129,0.18),transparent_58%),radial-gradient(circle_at_50%_88%,rgba(125,211,252,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Insurance distribution accelerator
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for insurers building trusted advisor networks.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Bring agents, brokers, and bancassurance partners onto a single platform that safeguards compliance, simplifies compensation, and personalises every policyholder interaction.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect your insurance roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Preview the insurance demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
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
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Pressing realities</p>
            <div className="space-y-5">
              {INDUSTRY_CHALLENGES.map((challenge) => (
                <article key={challenge.title} className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                  <h2 className="text-sm font-semibold text-foreground">{challenge.title}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{challenge.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Explore engagement tiers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Plays that connect advisors, operations, and policyholders</h2>
          <p className="text-sm text-muted-foreground">
            Centralise experiences while respecting local regulations, partner models, and client expectations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {EXPERIENCE_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article key={play.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{play.title}</h3>
                <p className="text-sm text-muted-foreground">{play.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Programmes that de-risk transformation</h2>
            <p className="text-sm text-muted-foreground">
              Move from vision to measurable results with collaborative workshops, automation, and continuous optimisation.
            </p>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/60">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Implementation artefacts</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Compliance matrices, product catalogues, and compensation blueprints.</li>
                <li>• Advisor journey maps with enablement assets and scoring models.</li>
                <li>• Customer lifecycle automations with ROI dashboards for leadership.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            {DELIVERY_PROGRAMMES.map((programme) => (
              <article
                key={programme.name}
                className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary" aria-hidden />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{programme.name}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {programme.outcomes.map((outcome) => (
                        <li key={outcome}>• {outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background via-white to-sky-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-sky-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.16),transparent_60%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.18),transparent_62%)]" aria-hidden />
          <div className="relative space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Proof points for leaders and regulators</h2>
            <p className="text-sm text-muted-foreground">
              Demonstrate disciplined operations, equitable compensation, and experiences that elevate retention.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {PROOF_POINTS.map((proof) => (
                <article key={proof.title} className="rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                  <h3 className="text-base font-semibold text-foreground">{proof.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{proof.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_32%,rgba(125,211,252,0.28),transparent_62%),radial-gradient(circle_at_78%_24%,rgba(56,189,248,0.25),transparent_64%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to elevate your insurance ecosystem?</h2>
            <p className="text-sm text-slate-200">
              Share your product mix, channel strategy, and compliance priorities. We will translate them into a Cloud MLM Software activation plan with measurable KPIs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Meet an insurance strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Request the insurance demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Bring to the workshop</p>
              <ul className="space-y-2">
                <li>• Compensation matrices, licensing requirements, and digital assets.</li>
                <li>• Policy administration landscape, CRM stack, and reporting cadence.</li>
                <li>• Growth targets across channels, segments, and territories.</li>
              </ul>
              <p className="text-xs text-slate-300">Receive a tailored roadmap, ROI model, and launch sequencing within one business day.</p>
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
