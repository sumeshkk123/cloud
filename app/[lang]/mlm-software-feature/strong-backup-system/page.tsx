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
  BadgeCheck,
  Cloud,
  Clock,
  Database,
  Layers,
  RefreshCw,
  Server,
  Shield,
  ShieldCheck
} from "lucide-react";
import {
  CloudArrowUp,
  HardDrives,
  LockSimple,
  ClockClockwise
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

type ReliabilityPillar = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type RetentionTrack = {
  title: string;
  description: string;
};

type ProcessStep = {
  title: string;
  description: string;
  icon: IconType;
};

type CapabilityCard = {
  title: string;
  body: string;
  takeAway: string;
  icon: IconType;
};

type ReadinessItem = {
  label: string;
  description: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Snapshots per day",
    value: "24",
    detail: "Hourly recovery points with automated validation scripts."
  },
  {
    label: "Data durability",
    value: "11x9s",
    detail: "Multi-region storage policies keep critical history intact."
  },
  {
    label: "Rollback window",
    value: "90 days",
    detail: "Retention tiers aligned to compliance and audit demands."
  }
];

const RELIABILITY_PILLARS: ReliabilityPillar[] = [
  {
    title: "Zero-compromise redundancy",
    summary: "Your MLM records live inside an infrastructure built to anticipate failure, not fear it.",
    bullets: [
      "Primary and secondary storage pools replicate in near real time.",
      "Immutable snapshots protect against accidental or malicious tampering.",
      "Integrity checks authenticate datasets before they rejoin production."
    ],
    icon: Shield
  },
  {
    title: "Retention plans tuned to policy",
    summary: "Blend hourly, daily, and monthly cadences so finance, compliance, and IT get exactly what they need.",
    bullets: [
      "Granular scheduling—down to the minute—for high-value modules.",
      "Version catalogues keep every backup searchable and auditable.",
      "Custom purge rules align to regional data residency requirements."
    ],
    icon: Layers
  },
  {
    title: "Recovery without the chaos",
    summary: "Disaster scenarios become exercises in orchestrated response instead of fire drills.",
    bullets: [
      "Playbooks outline who restores what, when, and with which communication touchpoints.",
      "Sandbox restores validate plan logic before production cutovers.",
      "Streaming monitors surface anomalies so intervention happens early."
    ],
    icon: RefreshCw
  }
];

const RETENTION_TRACKS: RetentionTrack[] = [
  {
    title: "Hourly safeguard",
    description: "Mission-critical data—wallets, commissions, genealogy—is captured every hour without operator input."
  },
  {
    title: "Daily consolidation",
    description: "Each evening blends minor changes into clean snapshots for audit-ready archives."
  },
  {
    title: "Monthly deep vault",
    description: "Long-term history persists for regulatory and strategic analysis in encrypted cold storage."
  }
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Cron orchestration",
    description: "Flexible scheduling windows trigger backups based on volume, territory, or compliance cycles.",
    icon: Clock
  },
  {
    title: "Secure capture",
    description: "Databases, media, and configuration values are packaged with checksum validation before transfer.",
    icon: Database
  },
  {
    title: "Encryption at every hop",
    description: "AES-256 and rotating keys keep snapshots unreadable to unauthorised parties.",
    icon: LockSimple
  },
  {
    title: "Cloud replicated storage",
    description: "Geo-distributed vaults ensure even regional outages cannot stall your recovery plan.",
    icon: CloudArrowUp
  }
];

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    title: "Hourly automation",
    body: "Cron-driven policies mirror the original WordPress promise: every hour a fresh copy lands in an isolated vault.",
    takeAway: "Restore points remain current without manual exports or sleepless nights.",
    icon: ClockClockwise
  },
  {
    title: "Data lifecycle intelligence",
    body: "Retention tiers classify snapshots by business value, enforcing purge or archive rules automatically.",
    takeAway: "Storage costs stay predictable while compliance teams retain needed history.",
    icon: HardDrives
  },
  {
    title: "Incident-ready playbooks",
    body: "Guided workflows walk administrators through verification, stakeholder comms, and staged restores.",
    takeAway: "Downtime shrinks because everyone knows the next best action.",
    icon: BadgeCheck
  }
];

const READINESS_ITEMS: ReadinessItem[] = [
  {
    label: "Catalogue data classes",
    description: "List the modules—finance, genealogy, learning—that demand unique retention cadences."
  },
  {
    label: "Define recovery tiers",
    description: "Agree which systems return first so the business stays functional during remediation."
  },
  {
    label: "Align communication",
    description: "Create notification templates for leadership, distributors, and regulators before an incident."
  },
  {
    label: "Test twice yearly",
    description: "Schedule drills to rehearse full and partial restores with clear success metrics."
  }
];

const PLATFORM_PILLS: string[] = [
  "Advanced reporting & anomaly dashboards",
  "Secure authentication with MFA layers",
  "Dynamic compression & caching framework",
  "Ticketing and support escalation suite",
  "Auto-responder and AI-ready analytics",
  "Multilingual, multi-currency readiness",
  "Theme governance for brand consistency",
  "Replicating sites & LCP performance tooling"
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Strong Backup System for MLM Software";
  const description =
    "Protect mission-critical MLM data with Cloud MLM Software's strong backup system. Hourly snapshots, encrypted storage, and recovery playbooks engineered for resilient growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/strong-backup-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StrongBackupPageProps = {
  params: { lang: SupportedLocale };
};

export default function StrongBackupPage({ params }: StrongBackupPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const featuresHref = buildLocalizedPath("/features", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-28 pb-28">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(148,163,184,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(96,165,250,0.2),transparent_55%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.45fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-400/50 bg-slate-800/50 px-4 py-1 text-sm font-semibold text-slate-100">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Strong Backup System
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Resilient MLM backups engineered for zero data anxiety.
              </h1>
              <p className="text-base text-slate-200/85">
                Cloud MLM Software compresses years of backup expertise into an hourly, encrypted, multi-region safety net. Safeguard registration details, wallet balances, commissions, and replicated content without slowing day-to-day operations.
              </p>
              <p className="text-sm text-slate-200/70">
                From automated policies to recovery rehearsal, every safeguard is built so leaders sleep well while distributors stay productive.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Schedule a resilience session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-400/60 text-slate-100 hover:bg-slate-800/60">
                <Link href={demoHref}>
                  Review the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

            <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur">
              {HERO_METRICS.map((metric) => (
                <article key={metric.label} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/80">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-200/70">{metric.detail}</p>
                </article>
              ))}
            </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why enterprises trust our backup guardrails.
          </h2>
          <p className="text-sm text-muted-foreground">
            Each pillar below modernises the original WordPress narrative—now expressed through an enterprise-class backup fabric ready for high-growth MLM teams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {RELIABILITY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-6 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.summary}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Retention programmes tailored to every scenario.
          </h2>
          <p className="text-sm text-muted-foreground">
            We translate simple “keep a copy in the cloud” guidance into modern retention strategies that balance cost, compliance, and agility.
          </p>
          <ul className="space-y-3">
            {RETENTION_TRACKS.map((track) => (
              <li key={track.title} className="rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{track.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{track.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground shadow-sm dark:bg-primary/10">
          “Backups are only as good as the recovery stories they empower. We design plans where finance, compliance, and growth teams all know exactly how quickly their data returns.”
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Inside the backup lifecycle.
          </h2>
          <p className="text-sm text-muted-foreground">
            Every step echoes the legacy process—now orchestrated with enterprise-grade tooling, encryption, and observability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Capabilities that keep your backup plan proactive.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software combines automation, lifecycle intelligence, and training so your backup story remains a competitive advantage.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CAPABILITY_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{card.body}</p>
                <p className="text-xs text-muted-foreground">{card.takeAway}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
        <div className="space-y-6 rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-sm dark:bg-primary/10">
          <h2 className="text-2xl font-semibold text-foreground">Readiness checklist before rollout.</h2>
          <p className="text-sm text-muted-foreground">
            Outline decisions now so restores later feel effortless.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {READINESS_ITEMS.map((item) => (
              <li key={item.label} className="rounded-2xl border border-border/60 bg-background/80 p-4">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Server className="h-5 w-5 text-primary" aria-hidden />
              <h3 className="text-base font-semibold text-foreground">Measured outcomes</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Recovery time objectives aligned to each business domain.</li>
              <li>• Transparent audit logs for every snapshot, restore, and purge action.</li>
              <li>• Executive dashboards showing backup health across geographies.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/80 p-6 text-sm text-muted-foreground shadow-sm">
            Our architects partner with your compliance, finance, and engineering teams to choreograph drills, identify gaps, and educate stakeholders on best practices.
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Platform capabilities that reinforce your backup strategy.
          </h2>
          <p className="text-sm text-muted-foreground">
            The strong backup system works best alongside the full Cloud MLM Software ecosystem.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {PLATFORM_PILLS.map((pill) => (
            <li
              key={pill}
              className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm"
            >
              {pill}
            </li>
          ))}
        </ul>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-24 top-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-sky-200/30 blur-3xl dark:bg-slate-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to future-proof your MLM data?
              </h2>
              <p className="text-sm text-muted-foreground">
                Invite us to audit your current backup story. We will deliver remediation roadmaps, proof-of-concept restores, and governance models tailored to your organisation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Talk to our resilience team
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={featuresHref}>
                    Explore more features
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                Activation checklist
              </p>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <p>✓ Document legacy backup tooling and migration gaps.</p>
                <p>✓ Align budget and governance owners for storage and remediation.</p>
                <p>✓ Plan enablement for regional teams managing restores and audits.</p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Once complete, we move straight into solution design, proof-of-value testing, and full rollout orchestration.
              </p>
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
