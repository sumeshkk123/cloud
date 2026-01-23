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
  BadgeCheck,
  Eye,
  Fingerprint,
  Grid,
  Lock,
  ShieldCheck,
  Users
} from "lucide-react";
import {
  IdentificationBadge,
  ListChecks,
  Monitor,
  ShieldStar,
  UserCircleGear,
  UsersThree,
  Vault
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Package = {
  name: string;
  price: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  icon: IconType;
};

type Phase = {
  title: string;
  duration: string;
  summary: string;
  artefacts: string[];
  icon: IconType;
};

type Highlight = {
  title: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Privileged identities managed",
    value: "6,400+",
    detail: "Executive, compliance, and partner roles orchestrated across Cloud MLM Software.",
    icon: Users
  },
  {
    label: "Access review time saved",
    value: "78%",
    detail: "Average reduction in quarterly audit cycles after automation.",
    icon: ListChecks
  },
  {
    label: "Policy violations detected",
    value: "0.3%",
    detail: "Rapid anomaly detection keeps breaches from escalating.",
    icon: ShieldStar
  },
  {
    label: "Deployment timeline",
    value: "5 weeks",
    detail: "Blueprint, configure, and launch privileged controls with hypercare.",
    icon: Grid
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Role design and governance",
    description:
      "Design granular roles with context-aware controls that align to regulatory, security, and operational needs.",
    bullets: [
      "Persona-based access matrices mapped to compensation and operations",
      "Segregation of duties guardrails with approval workflows",
      "Automated provisioning, deprovisioning, and just-in-time elevation"
    ],
    icon: UserCircleGear
  },
  {
    title: "Monitoring and response",
    description:
      "Give security and compliance teams real-time visibility with actionable alerts and audit-ready evidence.",
    bullets: [
      "Session recording, command logging, and anomaly detection",
      "Policy breach notifications with guided remediation steps",
      "Audit trails aligned with SOC 2, GDPR, and local standards"
    ],
    icon: Eye
  },
  {
    title: "Experience enablement",
    description:
      "Privileged teams stay productive with seamless UX, automation, and training tailored to sensitive operations.",
    bullets: [
      "Contextual dashboards for executives, compliance, and support",
      "Workflow automation for approvals, escalations, and escalated support",
      "Training modules and playbooks aligned to risk posture"
    ],
    icon: Monitor
  }
];

const PACKAGES: Package[] = [
  {
    name: "Control foundation",
    price: "$13k fixed",
    description: "Establish secure privileged role management with automation and reporting essentials.",
    bestFor: "Organisations formalising access governance for the first time.",
    deliverables: [
      "Role taxonomy and access policy playbook",
      "Provisioning + review automation with alerts",
      "Compliance dashboards for quarterly attestations"
    ],
    icon: Vault
  },
  {
    name: "Compliance accelerator",
    price: "$19k fixed",
    description: "Enhanced monitoring, audit automation, and delegated admin controls.",
    bestFor: "Brands operating in regulated markets or prepping for audits.",
    deliverables: [
      "Session monitoring with behavioural analytics",
      "Workflow automation for access certifications",
      "Incident response and evidence capture toolkit"
    ],
    icon: ShieldCheck
  },
  {
    name: "Enterprise command",
    price: "Custom engagement",
    description: "Advanced policy orchestration, SIEM integration, and optimisation office.",
    bestFor: "Enterprises with global security teams and complex partner networks.",
    deliverables: [
      "SIEM/SOAR integration and custom alert pipelines",
      "AI-assisted risk scoring and remediation recommendations",
      "Ongoing governance council with quarterly optimisation"
    ],
    icon: Fingerprint
  }
];

const PHASES: Phase[] = [
  {
    title: "Discovery & design",
    duration: "Week 1",
    summary: "Analyse current access patterns, regulatory obligations, and risk appetite to craft governance architecture.",
    artefacts: [
      "Role and policy catalogue",
      "Risk assessment and mitigation map",
      "Implementation timeline with stakeholders"
    ],
    icon: IdentificationBadge
  },
  {
    title: "Configuration & validation",
    duration: "Weeks 2-4",
    summary: "Configure privileged access, automation, and monitoring. Validate against real use cases and audit requirements.",
    artefacts: [
      "Provisioning workflows and access approvals live",
      "Monitoring dashboards with test alerts",
      "Policy and control documentation for sign-off"
    ],
    icon: Lock
  },
  {
    title: "Enablement & optimisation",
    duration: "Week 5",
    summary: "Launch with hypercare, training, and continuous improvement plan.",
    artefacts: [
      "Training assets for each privileged persona",
      "Operational playbooks and escalation protocols",
      "Optimisation backlog aligned to audits and roadmap"
    ],
    icon: ShieldCheck
  }
];

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Audit-ready evidence",
    detail: "Automated reports simplify SOC, GDPR, and FTC reviews."
  },
  {
    title: "Productivity preserved",
    detail: "Self-service elevation keeps leaders efficient without sacrificing security."
  },
  {
    title: "Global consistency",
    detail: "Policies adapt to each market yet remain centrally governed."
  }
];

const FAQS: Faq[] = [
  {
    question: "Can we integrate with our identity provider?",
    answer:
      "Yes. We integrate with Azure AD, Okta, JumpCloud, and other SSO solutions to keep authentication centralised while Cloud MLM Software manages authorisation."
  },
  {
    question: "How are emergency access and break-glass handled?",
    answer:
      "Emergency role elevation is time-bound, logged, and paired with automated reviews. Stakeholders receive summaries for sign-off."
  },
  {
    question: "Do you support partner or vendor access?",
    answer:
      "Absolutely. We apply scoped roles, monitoring, and automated expirations so third parties operate safely without overexposure."
  },
  {
    question: "What ongoing maintenance is required?",
    answer:
      "We deliver playbooks for periodic access reviews, policy updates, and monitoring tuning. Managed services are available if you prefer ongoing support."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Privileged User System Module Pricing | Cloud MLM Software";
  const description =
    "Discover pricing, roadmap, and deliverables for Cloud MLM Software’s privileged user system. Govern sensitive roles with automation, monitoring, and compliance guardrails.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/privileged-user-system-module", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PrivilegedUserModulePageProps = {
  params: { lang: SupportedLocale };
};

export default function PrivilegedUserModulePage({ params }: PrivilegedUserModulePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.22),transparent_45%),radial-gradient(circle_at_82%_28%,rgba(56,189,248,0.18),transparent_50%),linear-gradient(140deg,rgba(15,23,42,1) 15%,rgba(30,27,75,1) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-purple-200">
              Govern privileged access with confidence
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Privileged user system pricing aligned with enterprise-grade security.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Protect executive, compliance, and partner activity without slowing your teams down. Cloud MLM Software packages governance, automation, and enablement so privileged access becomes a growth enabler, not a liability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Book a security workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={servicesHref}>
                  Explore service catalog
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-200/80">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
                  </div>
                  <p className="text-sm text-slate-100/70">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities that balance security and agility</h2>
          <p className="text-sm text-muted-foreground">
            Our privileged user system engagements blend governance, automation, and experience design so high-stakes roles stay compliant and productive.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages aligned to your risk profile</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Select the engagement that matches your governance maturity. Each package includes strategy, configuration, and training for privileged teams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <article key={pkg.name} className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-muted/40 p-3 text-xs font-semibold uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                    {pkg.bestFor}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link href={contactHref}>
                      Discuss this package
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Five-week delivery cadence</h2>
          <p className="text-sm text-muted-foreground">
            We keep security, compliance, and operations aligned through structured checkpoints and transparent artefacts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article key={phase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.artefacts.map((artefact) => (
                    <li key={artefact} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{artefact}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why teams trust our privileged module</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Security and acceleration are not mutually exclusive. Here’s how our delivery model proves it.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {HIGHLIGHTS.map((highlight) => (
              <article key={highlight.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{highlight.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{highlight.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Security, compliance, and product stakeholders ask these before kickoff.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-purple-100 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-purple-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to elevate privileged access control?</h2>
              <p className="text-sm text-muted-foreground">
                Share your governance goals, regulatory timelines, and stakeholder map. We’ll assemble a pricing proposal and implementation plan tailored to your risk posture.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and role inventory template within one business day. We’ll partner through launch and continual optimisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={servicesHref}>
                    Explore services catalog
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
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
