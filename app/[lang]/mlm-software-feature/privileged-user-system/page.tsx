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
  Cog,
  Database,
  FolderLock,
  GlobeLock,
  Key,
  LockKeyhole,
  ShieldCheck,
  Users2,
  Workflow
} from "lucide-react";
import {
  CirclesThreePlus,
  IdentificationCard,
  ListChecks,
  Notepad,
  ShieldChevron
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPoint = {
  label: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type GovernanceStep = {
  title: string;
  detail: string;
  icon: IconType;
};

type PrivilegeTier = {
  name: string;
  summary: string;
  icon: IconType;
  responsibilities: string[];
};

type EvidenceStat = {
  value: string;
  label: string;
  detail: string;
};

type Safeguard = {
  title: string;
  description: string;
};

const HERO_POINTS: HeroPoint[] = [
  {
    label: "Granular permissions mapped to every role",
    icon: ShieldCheck
  },
  {
    label: "Session governance with full audit trails",
    icon: ListChecks
  },
  {
    label: "Rapid approvals and escalations for privileged workflows",
    icon: Workflow
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Adaptive privilege orchestration",
    description:
      "Control who can configure plans, adjust payouts, or manage compliance with an engine that adapts to your hierarchy and geographic requirements.",
    bullets: [
      "Assign privileges by role, region, or business unit with inheritance rules.",
      "Automate expiry for temporary access and approve exceptions in minutes.",
      "Link permissions to compensation events so sensitive tasks require confirmation."
    ],
    icon: ShieldChevron
  },
  {
    title: "Accountability without friction",
    description:
      "Every privileged action is captured with contextual data so leaders understand who changed what, when, and why—supporting compliance and faster remediation.",
    bullets: [
      "Capture identity, device, and change reason for each privileged task.",
      "Route approvals to designated reviewers with in-context notifications.",
      "Export ready-to-share audit trails for finance, legal, or regulator requests."
    ],
    icon: IdentificationCard
  },
  {
    title: "Member lifecycle control",
    description:
      "Respond to growth confidently with automated onboarding, modifications, and deactivation flows that preserve security while keeping momentum high.",
    bullets: [
      "Provision new leaders with curated access packages in a single step.",
      "Isolate unconfirmed users until KYC or compliance tasks are complete.",
      "Trigger reviews when members move between regions or business units."
    ],
    icon: Users2
  }
];

const GOVERNANCE_STEPS: GovernanceStep[] = [
  {
    title: "Define authority scopes",
    detail:
      "Map the critical actions across your Cloud MLM environment—from plan configuration to data exports—and align them to administrator groups or named accounts.",
    icon: Cog
  },
  {
    title: "Automate onboarding",
    detail:
      "Apply pre-approved privilege bundles the moment leaders join or shift roles. Optional approvals and expirations ensure sensitive access never persists longer than necessary.",
    icon: BadgeCheck
  },
  {
    title: "Observe and iterate",
    detail:
      "Dashboards and alerts highlight unusual activity, expired sessions, or policy gaps so you course-correct before risk materialises.",
    icon: Notepad
  }
];

const PRIVILEGE_TIERS: PrivilegeTier[] = [
  {
    name: "Administrative tier",
    summary:
      "Full-stack governance for platform owners controlling infrastructure, compensation logic, and global settings.",
    icon: GlobeLock,
    responsibilities: [
      "Manage global configurations, comp plan rules, and network-wide automations.",
      "Approve high-risk workflows such as payout releases or legal policy updates.",
      "Assign or revoke other administrators and maintain separation of duties."
    ]
  },
  {
    name: "Operational tier",
    summary:
      "Focused authority for regional directors, finance, or compliance teams who need precision without platform-wide impact.",
    icon: FolderLock,
    responsibilities: [
      "Review escalations and confirm sensitive distributor account changes.",
      "Adjust inventory or marketing assets for specific markets and languages.",
      "Generate audit-ready reports with limited data export scopes."
    ]
  },
  {
    name: "Data tier",
    summary:
      "Controlled access for analysts and support teams who rely on accurate intel without edit permissions.",
    icon: Database,
    responsibilities: [
      "View cross-market dashboards with anonymised perspectives where required.",
      "Schedule data extracts subject to retention and compliance rules.",
      "Respond to tickets with contextual visibility while leaving critical settings untouched."
    ]
  }
];

const EVIDENCE_STATS: EvidenceStat[] = [
  {
    value: "98%",
    label: "Policy adherence",
    detail: "Average compliance rate observed after implementing role-aware privilege bundles."
  },
  {
    value: "12 hrs",
    label: "Faster onboarding",
    detail: "Reduction in time required to provision new privileged users across regions."
  },
  {
    value: "0",
    label: "Shadow admin accounts",
    detail: "Eliminate unmanaged elevated accounts through automated lifecycle controls."
  }
];

const SAFEGUARDS: Safeguard[] = [
  {
    title: "Session isolation",
    description:
      "Multi-factor prompts, secure device binding, and real-time session expiry keep privileged logins safe even in distributed teams."
  },
  {
    title: "Evidence-ready audit trails",
    description:
      "Download time-stamped proof of every privileged action with metadata, approvals, and before/after states." 
  },
  {
    title: "Escalation workflows",
    description:
      "Automatic routing alerts the right owners when privileged changes require dual control or additional review." 
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Privileged User System for MLM Platforms | Cloud MLM Software";
  const description =
    "Control every privileged action across your MLM software with Cloud MLM Software’s Privileged User System. Assign granular access, enforce governance, and keep sensitive operations accountable.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/privileged-user-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PrivilegedUserSystemPageProps = {
  params: { lang: SupportedLocale };
};

export default function PrivilegedUserSystemPage({ params }: PrivilegedUserSystemPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(circle_at_75%_15%,rgba(14,165,233,0.15),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(14,116,144,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.32),transparent_55%),radial-gradient(circle_at_75%_15%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(14,116,144,0.28),transparent_55%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1 text-sm font-semibold text-slate-800 dark:border-cyan-400/50 dark:bg-cyan-500/10 dark:text-cyan-100">
              <LockKeyhole className="h-4 w-4" />
              Privileged governance reimagined
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Privileged user system that protects every mission-critical decision
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Cloud MLM Software delivers enterprise-grade controls for administrators, directors, and analysts so sensitive operations stay secure—without slowing down the energy of your network.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                <Link href={demoHref}>
                  Request custom demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-200/40 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800">
                <Link href={contactHref}>Talk to a security strategist</Link>
              </Button>
            </div>
            <ul className="grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
              {HERO_POINTS.map((item) => (
                <li key={item.label} className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-slate-900/50">
                  <item.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-200" aria-hidden />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Security perspective</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                The right people, the right access, every time
              </p>
            </div>
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <p>
                Privileged users orchestrate your most critical processes. Give them confidence with structured access, contextual approvals, and monitoring that surfaces exactly what leaders need to see.
              </p>
              <p>
                From system setup to database exports, every action carries verifiable intent so your organisation sustains growth without compromising on assurance.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6 text-sm text-slate-900 dark:border-cyan-300/50 dark:bg-cyan-500/10 dark:text-cyan-100">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                <Key className="h-4 w-4" />
                Trusted access moment
              </div>
              <p className="mt-3 text-base font-semibold">
                Auto-expiring privilege assignments keep your platform clean while giving leaders exactly the time they need to execute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <CirclesThreePlus className="h-4 w-4" />
            Privilege orchestration
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Govern privileged access with clarity and confidence
          </h2>
          <p className="text-base text-muted-foreground">
            Your administrators handle the heartbeat of the business. Equip them with a system that keeps sensitive work accountable while maintaining a premium experience for distributors and customers.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article key={capability.title} className="flex h-full flex-col gap-6 rounded-2xl border border-border/70 bg-gradient-to-b from-background via-background to-muted/40 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <capability.icon className="h-11 w-11 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-semibold">{capability.title}</h3>
              </div>
              <p className="text-base text-muted-foreground">{capability.description}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {capability.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ShieldCheck className="mt-1 h-4 w-4 text-cyan-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/40 py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
              <ListChecks className="h-4 w-4" />
              Governance blueprint
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Three-step governance to manage privileged access at scale
            </h2>
            <p className="text-base text-muted-foreground">
              Move from scattered admin permissions to controlled authority. Cloud MLM Software integrates security, transparency, and operational agility in one privileged user system.
            </p>
            <Button asChild variant="outline" className="w-fit gap-2">
              <Link href={pricingHref}>
                Review privileged access packages
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ol className="relative space-y-8 pl-6">
            <div className="absolute inset-y-2 left-2 w-px bg-gradient-to-b from-cyan-500 via-cyan-400/40 to-transparent" aria-hidden />
            {GOVERNANCE_STEPS.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-border/70 bg-background p-6 shadow-sm">
                <div className="absolute -left-3 top-8 h-3 w-3 rounded-full border-2 border-white bg-cyan-500 shadow-md" aria-hidden />
                <div className="flex items-start gap-4">
                  <step.icon className="h-10 w-10 text-cyan-600 dark:text-cyan-400" aria-hidden />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <GlobeLock className="h-4 w-4" />
              Privilege tiers
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Assign the right level of control without losing agility
            </h2>
            <p className="text-base text-muted-foreground">
              We created focused privilege tiers so global headquarters, regional operators, and support teams each receive authority that matches their mission—nothing more, nothing less.
            </p>
          </div>
          <div className="grid gap-6">
            {PRIVILEGE_TIERS.map((tier) => (
              <div key={tier.name} className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <tier.icon className="h-10 w-10 text-cyan-600 dark:text-cyan-400" aria-hidden />
                  <div>
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground">{tier.summary}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {tier.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start gap-2">
                      <ArrowUpRight className="mt-1 h-4 w-4 text-cyan-500" aria-hidden />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/70 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 p-12 shadow-sm">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] md:items-center">
            <div className="space-y-6">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Quantify the impact of disciplined privilege management
              </h2>
              <p className="text-base text-muted-foreground">
                Elevated accounts should enhance velocity—not introduce risk. Measure the confidence boost your teams experience once governance, accountability, and automation align.
              </p>
              <div className="grid gap-4 text-sm text-muted-foreground">
                {SAFEGUARDS.map((safeguard) => (
                  <div key={safeguard.title} className="rounded-2xl border border-border/70 bg-muted/40 p-4">
                    <p className="font-semibold text-foreground">{safeguard.title}</p>
                    <p className="text-sm text-muted-foreground">{safeguard.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none">
              <div className="grid gap-4 sm:grid-cols-3">
                {EVIDENCE_STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-slate-900/50">
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6 text-sm text-slate-900 dark:border-cyan-300/50 dark:bg-cyan-500/10 dark:text-cyan-100">
                <p className="font-semibold">Unified oversight</p>
                <p className="mt-2">
                  Stop chasing spreadsheets. Real-time dashboards keep your security leaders, finance partners, and compliance officers aligned on the same source of truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 rounded-3xl border border-border/70 bg-background/80 p-12 shadow-sm sm:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] sm:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Secure every privileged moment with Cloud MLM Software
            </h2>
            <p className="text-base text-muted-foreground">
              Partner with our team to design a privileged access strategy tailored to your compensation plans, regional models, and regulatory landscape.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="gap-2">
                <Link href={demoHref}>
                  Start your tailored demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href={contactHref}>
                  Consult with our experts
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-border/60 bg-muted/40 p-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-cyan-500" />
              Dual-control approvals with clear accountability
            </div>
            <div className="flex items-center gap-3">
              <Users2 className="h-5 w-5 text-cyan-500" />
              Role-aware onboarding for global teams
            </div>
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-cyan-500" />
              Audit-ready change history for every dataset
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: SupportedLocale): Locale {
  if (isSupportedLocale(lang)) {
    return lang;
  }

  return i18n.defaultLocale;
}
