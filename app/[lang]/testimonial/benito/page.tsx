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
  Activity,
  ArrowUpRight,
  BadgeCheck,
  CircleDot,
  KeySquare,
  Lock,
  Radar,
  Server,
  ShieldCheck,
  Siren,
  Wireless
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HardeningPillar = {
  title: string;
  detail: string;
  result: string;
  icon: IconType;
};

type ResponsePlay = {
  stage: string;
  focus: string;
  description: string;
  icon: IconType;
};

type TrustSignal = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

const HARDENING_PILLARS: HardeningPillar[] = [
  {
    title: "Zero-trust perimeter",
    detail: "Role-aware policies, adaptive MFA, and encrypted traffic across distributor and admin portals.",
    result: "Stopped legacy credential reuse issues and aligned every approval with compliance policies.",
    icon: ShieldCheck
  },
  {
    title: "Secure data interchange",
    detail: "Automated SFTP pipelines with client-side encryption for ledger reconciliation and payouts.",
    result: "Eliminated ad-hoc file transfers and reduced finance processing time by 42%.",
    icon: Server
  },
  {
    title: "Proactive anomaly watch",
    detail: "Behaviour analytics surface irregular access attempts and trigger automated guard rails.",
    result: "Security command centre now resolves anomalies in minutes instead of overnight batches.",
    icon: Radar
  }
];

const RESPONSE_PLAYBOOK: ResponsePlay[] = [
  {
    stage: "Discovery",
    focus: "Threat modelling workshops with distributor councils and IT security stakeholders.",
    description: "Documented every integration and identified critical access patterns that needed hardening.",
    icon: Siren
  },
  {
    stage: "Execution",
    focus: "Firewall orchestration, data lake encryption keys, and real-time incident dashboards.",
    description: "Layered automation ensures alerts are routed to the right owner with evidence snapshots.",
    icon: Activity
  },
  {
    stage: "Continuous assurance",
    focus: "Quarterly chaos drills and AI-assisted compliance reviews to maintain readiness.",
    description: "Keeps teams fluent in the controls so innovation and governance stay synchronized.",
    icon: Wireless
  }
];

const TRUST_SIGNALS: TrustSignal[] = [
  {
    label: "Security SLAs met",
    value: "100%",
    description: "All remediation targets hit in the first 90 days of the engagement.",
    icon: BadgeCheck
  },
  {
    label: "Firewall coverage",
    value: "7 regions",
    description: "Co-managed firewall rulesets now span North America, EU, and APAC data centres.",
    icon: KeySquare
  },
  {
    label: "Time to resolve",
    value: "< 15 min",
    description: "High-priority incidents reach closure in under fifteen minutes with automated context.",
    icon: CircleDot
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Benito Testimonial | Secure MLM Operations";
  const description =
    "Explore how Benito strengthened secure administration and data sharing with Cloud MLM Software. See the defence-in-depth roadmap and live trust signals.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/benito", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BenitoPageProps = {
  params: { lang: SupportedLocale };
};

export default function BenitoPage({ params }: BenitoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-900/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_18%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.18),transparent_58%),radial-gradient(circle_at_50%_90%,rgba(45,212,191,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-200">
              Security excellence story
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Benito modernised global security posture without slowing distributor growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “Secure system administration, secure file transfer and data sharing, also added security to the valuable data.
              It’s highly efficient and reliable. Recommended MLM software for any business like ours. Also, they had helped me to set up firewall security for our system.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design your security upgrade
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Preview admin controls
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Trust signals</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {TRUST_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article key={signal.label} className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-background p-4 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-lg font-semibold text-foreground">{signal.value}</p>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">{signal.label}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{signal.description}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:border-border/40 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Security hardening pillars</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Resilience without compromising agility.</h2>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Cloud MLM Software layered controls across infrastructure, data, and operations so Benito’s teams can innovate while protecting high-value data.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {HARDENING_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{pillar.detail}</p>
                  <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-foreground dark:border-primary/30 dark:bg-primary/10">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Result</p>
                    <p className="mt-1 text-sm text-foreground">{pillar.result}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Incident response playbook</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How the Cloud MLM team institutionalised proactive defence.</h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            From modelling threats to rehearsing runbooks, Benito’s organisation now treats security as an enabler for expansion.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {RESPONSE_PLAYBOOK.map((play) => {
            const Icon = play.icon;
            return (
              <article key={play.stage} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/30 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{play.stage}</p>
                    <h3 className="text-lg font-semibold text-foreground">{play.focus}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-emerald-900/30">
          <div className="absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need the same firewall-grade readiness?</h2>
              <p className="text-sm text-muted-foreground">
                Bring us your security objectives and integration map. We’ll co-design defence patterns that keep sensitive data safe while empowering your field teams.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Speak with a strategist
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Review security modules
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">What to bring</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current access control policies and integration endpoints.</li>
                <li>• Incident response data from the past twelve months.</li>
                <li>• Target markets or regions requiring compliance alignment.</li>
              </ul>
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
