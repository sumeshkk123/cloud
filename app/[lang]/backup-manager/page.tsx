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
  ChatCenteredText,
  CheckCircle,
  ClipboardText,
  CloudArrowUp,
  ClockCounterClockwise,
  Database,
  HardDrive,
  Lock,
  Monitor,
  Robot,
  ShieldCheck,
  Sparkle,
  Target,
  Timer
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
  bullets: string[];
};

type Step = {
  title: string;
  description: string;
  icon: IconType;
};

type Safeguard = {
  title: string;
  description: string;
  icon: IconType;
};

type AioCapability = {
  title: string;
  description: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Snapshots protected each month",
    value: "3.2M+",
    detail: "Automated backups created across Cloud MLM Software environments."
  },
  {
    label: "Average recovery time",
    value: "< 5 min",
    detail: "From restore request to available environment using one-click policies."
  },
  {
    label: "Retention policies",
    value: "60+",
    detail: "Pre-built schedules covering hourly, daily, and long-term archival requirements."
  },
  {
    label: "Compliance certifications",
    value: "ISO 27001 & SOC",
    detail: "Backup workflows aligned with industry-leading data protection standards."
  }
];

const FEATURES: Feature[] = [
  {
    title: "Policy driven automation",
    description:
      "Define backup and retention rules once, then let the platform handle schedules, tiering, and verification.",
    icon: Timer,
    bullets: [
      "Point-in-time snapshots for app, database, and file layers",
      "Tiered retention aligned with regulatory requirements",
      "Smart throttling to avoid performance impact"
    ]
  },
  {
    title: "Disaster recovery confidence",
    description:
      "Restore full environments or granular objects with guided workflows, version comparison, and audit logging.",
    icon: ClockCounterClockwise,
    bullets: [
      "Sandbox and production restore options",
      "Pre-flight validation to avoid configuration drift",
      "Role-based approvals with instant notifications"
    ]
  },
  {
    title: "Security and compliance layers",
    description:
      "Protect sensitive records with encryption, access controls, and monitoring that satisfy enterprise governance.",
    icon: ShieldCheck,
    bullets: [
      "End-to-end encryption in transit and at rest",
      "Fine-grained permissions and tamper alerts",
      "Immutable storage for key backups"
    ]
  }
];

const STEPS: Step[] = [
  {
    title: "Discover and classify",
    description:
      "Inventory critical data stores, assign sensitivity levels, and map retention requirements per jurisdiction.",
    icon: Database
  },
  {
    title: "Configure policies",
    description:
      "Set schedules, replication targets, and approval workflows with guided templates specific to MLM operations.",
    icon: ClipboardText
  },
  {
    title: "Monitor and restore",
    description:
      "Track backup health, trigger automated tests, and launch restores or exports when stakeholders request them.",
    icon: Monitor
  }
];

const SAFEGUARDS: Safeguard[] = [
  {
    title: "Geo redundant storage",
    description: "Replicate backups across multiple regions with configurable data residency controls.",
    icon: CloudArrowUp
  },
  {
    title: "Integrity validation",
    description: "Checksum verification and automated restore drills ensure backups remain usable.",
    icon: CheckCircle
  },
  {
    title: "Ransomware resilience",
    description: "Immutable storage snapshots, anomaly detection, and rapid rollbacks counter malicious activity.",
    icon: Lock
  },
  {
    title: "Granular recovery",
    description: "Restore entire environments or specific transactions, files, and configuration objects on demand.",
    icon: HardDrive
  }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "AI incident summaries",
    description:
      "Automatically convert backup events into concise updates for leadership, legal, and compliance teams.",
    icon: Sparkle
  },
  {
    title: "Knowledge base syncing",
    description:
      "Push policy changes and recovery runbooks into knowledge hubs so support teams respond fast.",
    icon: ChatCenteredText
  },
  {
    title: "Predictive insights",
    description:
      "AI highlights growth in storage usage, potential gaps, and recommended retention adjustments before issues occur.",
    icon: Robot
  }
];

const FAQS: Faq[] = [
  {
    question: "How often can backups run?",
    answer: "Policies support schedules ranging from every fifteen minutes to yearly archives, with independent settings per data type."
  },
  {
    question: "Can we restore to a sandbox first?",
    answer: "Yes. Launch isolated restores for validation before promoting data back into production environments."
  },
  {
    question: "Where is data stored?",
    answer: "Choose from regional clouds, customer owned storage, or encrypted vaults managed by Cloud MLM Software."
  },
  {
    question: "How are backups secured?",
    answer: "Backups are encrypted, access is role based, and every restore action is logged for audits."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Backup Manager";
  const description =
    "Protect MLM data with automated policies, geo redundant storage, and rapid restores using Cloud MLM Software backup manager.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/backup-manager", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BackupManagerPageProps = {
  params: { lang: SupportedLocale };
};

export default function BackupManagerPage({ params }: BackupManagerPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const plansHref = buildLocalizedPath("/mlm-plans", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_14%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkle className="h-4 w-4" aria-hidden />
              Enterprise data protection, simplified
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Automate backups, meet compliance, and recover MLM operations in minutes.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software backup manager safeguards applications, databases, and content with policy-driven automation and instant restore workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to our data protection team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Preview the management console
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={plansHref}>
                  Explore infrastructure services
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why teams rely on the backup manager</h2>
          <p className="text-sm text-muted-foreground">
            Move beyond manual scripts with automation, security, and reporting built for regulated MLM environments.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow built for resilience</h2>
          <p className="text-sm text-muted-foreground">
            Follow a structured process that keeps product, operations, and compliance teams aligned from assessment to recovery.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Safeguards that keep you compliant</h2>
            <p className="text-sm text-muted-foreground">
              Build a layered defence that protects data, satisfies regulators, and supports rapid recovery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {SAFEGUARDS.map((item) => (
              <article key={item.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Artificial Intelligence Optimisation</h2>
            <p className="text-sm text-muted-foreground">
              Turn backup telemetry into insights that inform leadership, legal teams, and support agents instantly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {AIO_CAPABILITIES.map((capability) => (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <capability.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Understand the details before you roll out enterprise backup policies.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-emerald-200/20 p-10 shadow-sm dark:from-primary/20 dark:to-emerald-500/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Protect your MLM data without slowing innovation</h2>
            <p className="text-sm text-muted-foreground">
              Connect with Cloud MLM Software specialists to configure policies, test restores, and embed governance that scales.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a consultation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Preview the backup manager
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
