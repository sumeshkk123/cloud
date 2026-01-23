import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  CheckCircle,
  Globe2,
  Handshake,
  LockKeyhole,
  ScrollText,
  Search,
  ShieldCheck
} from "lucide-react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

type IconComponent = LucideIcon;

type DocumentCollection = {
  title: string;
  description: string;
  icon: IconComponent;
  documents: {
    label: string;
    summary: string;
    href: string;
    updated: string;
    external?: boolean;
  }[];
};

type ReviewPackage = {
  title: string;
  lead: string;
  icon: IconComponent;
  deliverables: string[];
};

type ComplianceProgram = {
  title: string;
  description: string;
  icon: IconComponent;
  controls: string[];
};

type EngagementStep = {
  title: string;
  detail: string;
};

const DOCUMENT_COLLECTIONS: DocumentCollection[] = [
  {
    title: "Core policy stack",
    description:
      "Primary agreements that govern how Cloud MLM Software delivers services, protects data, and collaborates with enterprise stakeholders.",
    icon: ScrollText,
    documents: [
      {
        label: "Terms & Conditions",
        summary: "Commercial terms covering scope, service delivery, warranties, and acceptable use governance.",
        href: "/legal/terms",
        updated: "Updated January 2025"
      },
      {
        label: "Privacy Policy",
        summary: "Details how customer, distributor, and prospect data is collected, processed, and retained across the platform.",
        href: "/legal/privacy",
        updated: "Updated December 2024"
      },
      {
        label: "Refund & Cancellation",
        summary: "Explains timelines, service credits, and approval workflows for amendments, cancellations, or plan changes.",
        href: "/refunds-and-cancellation",
        updated: "Updated November 2024"
      }
    ]
  },
  {
    title: "Security & compliance standards",
    description:
      "Documentation that demonstrates our security posture, regulatory alignment, and contractual safeguards for data processing.",
    icon: ShieldCheck,
    documents: [
      {
        label: "Security & Trust Overview",
        summary: "Infrastructure safeguards, monitoring, incident response, and business continuity disciplines.",
        href: "/company/security",
        updated: "Updated February 2025"
      },
      {
        label: "Data Processing Addendum",
        summary: "GDPR, CPRA, PDPA, and LGPD-ready clauses covering sub-processors, residency options, and SCCs.",
        href: "mailto:[email protected]?subject=Request%20for%20Cloud%20MLM%20Software%20DPA",
        updated: "Available on request"
      },
      {
        label: "Compliance resource library",
        summary: "Download certifications, attestations, and jurisdictional disclosures maintained by the Cloud MLM legal desk.",
        href: "/documents/",
        updated: "Updated January 2025",
        external: true
      }
    ]
  },
  {
    title: "Operations & support governance",
    description:
      "Guidance kits for implementation, post-launch success, and executive oversight of programmes running on Cloud MLM Software.",
    icon: Handshake,
    documents: [
      {
        label: "Enterprise support SLA",
        summary: "Response tiers, escalation paths, and change-management policies for production environments.",
        href: "mailto:[email protected]?subject=Request%20for%20Cloud%20MLM%20Support%20SLA",
        updated: "Available on request"
      },
      {
        label: "Implementation playbook",
        summary: "Milestone templates, governance RACI, and quality gates for enterprise deployments across regions.",
        href: "/mlm-software/implementation-plan/",
        updated: "Updated October 2024",
        external: true
      },
      {
        label: "Procurement briefing kit",
        summary: "Executive overview, financial profiles, insurance coverage, and references tailored for sourcing teams.",
        href: "mailto:[email protected]?subject=Request%20for%20procurement%20briefing%20kit",
        updated: "Available on request"
      }
    ]
  }
];

const REVIEW_PACKAGES: ReviewPackage[] = [
  {
    title: "Due diligence dossier",
    lead: "For legal, compliance, and procurement committees evaluating Cloud MLM Software as a strategic vendor.",
    icon: Search,
    deliverables: [
      "Corporate registration certificates, financial overview, and ownership details",
      "Information security policies aligned to ISO 27001 controls with mapped evidence",
      "Sub-processor register with regional hosting, audit cadence, and data transfer mechanisms"
    ]
  },
  {
    title: "Regulatory alignment pack",
    lead: "Supports market entry reviews, especially where direct selling regulations or consumer protections are stringent.",
    icon: Globe2,
    deliverables: [
      "Checklist for FTC, DSA, and local direct selling guidelines with mapped product controls",
      "Country-specific tax, invoicing, and KYC/AML configurations",
      "Incident response, breach notification playbooks, and regional communication templates"
    ]
  },
  {
    title: "Operational readiness kit",
    lead: "Enables joint programme offices to model launch readiness, service continuity, and executive reporting.",
    icon: Handshake,
    deliverables: [
      "Implementation RACI, steering committee cadence, and escalation matrix",
      "Hypercare and run-state support models with SLA tiers and tooling",
      "Sample OKRs, KPIs, and board-level dashboards for ongoing governance"
    ]
  }
];

const COMPLIANCE_PROGRAMS: ComplianceProgram[] = [
  {
    title: "Data protection & privacy",
    description:
      "Framework covering GDPR, CPRA, LGPD, and PDPA with configurable residency, retention, and subject rights workflows.",
    icon: LockKeyhole,
    controls: [
      "Regional data residency on AWS, Azure, or sovereign clouds",
      "Automated data subject access, export, and erasure workflows",
      "Vendor risk assessments and sub-processor monitoring cadence"
    ]
  },
  {
    title: "Financial integrity & AML",
    description:
      "Guardrails for commission payouts, e-wallet operations, and taxation across global direct selling organisations.",
    icon: ShieldCheck,
    controls: [
      "Multi-ledger reconciliations with anomaly detection alerts",
      "AML watchlist screening and enhanced due diligence workflows",
      "Jurisdiction-specific tax withholding, invoicing, and audit exports"
    ]
  },
  {
    title: "Operational resilience",
    description:
      "Programmes ensuring the platform stays available, recoverable, and well-supported under enterprise SLAs.",
    icon: Globe2,
    controls: [
      "ISO 27001-aligned business continuity and disaster recovery drills",
      "24/7 incident response desk with executive communications",
      "Quarterly penetration tests and continuous vulnerability management"
    ]
  }
];

const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    title: "Initiate review",
    detail: "Submit your NDA or request ours, then outline the documents or attestations required by your review board."
  },
  {
    title: "Curate documentation",
    detail: "Our legal desk assembles a tailored folder covering contracts, policies, certifications, and security artefacts."
  },
  {
    title: "Collaborate with specialists",
    detail: "Schedule walkthroughs with our legal, compliance, and security leaders to resolve findings or follow-up questions."
  },
  {
    title: "Finalize agreements",
    detail: "Track redlines, approvals, and executive sign-off with a shared timeline managed by the Cloud MLM account team."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Legal Documentation Hub | Cloud MLM Software";
  const description =
    "Access contracts, compliance evidence, and governance kits that help legal, finance, and security teams evaluate Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/legal/all", locale)
    }
  };
}

type LegalAllPageProps = {
  params: { lang: SupportedLocale };
};

export default function LegalAllPage({ params }: LegalAllPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const legalEmail = "mailto:[email protected]";

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-primary/5 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
            <ShieldCheck size={16} aria-hidden /> Legal documentation
          </span>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Centralise every legal, compliance, and governance asset for your Cloud MLM Software review.
            </h1>
            <p className="text-lg text-muted-foreground">
              Curated policies, agreements, and regulatory programmes built for enterprise procurement, legal, and security teams evaluating Cloud MLM Software and Bpract Software Solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href={legalEmail}>
                Connect with the legal desk
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Talk to an enterprise advisor
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hover:bg-primary/10">
              <Link href={demoHref}>
                Request a platform walkthrough
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Document collections</h2>
            <p className="max-w-3xl text-base text-muted-foreground">
              Present these curated sets to requestors or download what you need immediately. Internal documents use your selected locale paths automatically.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {DOCUMENT_COLLECTIONS.map((collection) => {
            const Icon = collection.icon;

            return (
              <article
                key={collection.title}
                className="flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  <Icon size={18} aria-hidden /> Collection
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{collection.title}</h3>
                    <p className="text-sm text-muted-foreground">{collection.description}</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  {collection.documents.map((document) => {
                    const isMail = document.href.startsWith("mailto:");
                    const isExternal = document.external ?? document.href.startsWith("http");
                    const href = isMail || isExternal ? document.href : buildLocalizedPath(document.href, locale);

                    return (
                      <li key={document.label} className="space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-foreground">{document.label}</p>
                            <span className="text-xs text-muted-foreground">{document.updated}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{document.summary}</p>
                        </div>
                        <Link
                          href={href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                        >
                          Open reference
                          <CheckCircle size={16} aria-hidden />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Review packages</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Request ready-to-share packs when your stakeholders need deeper diligence. Each package is customised with your programme details.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {REVIEW_PACKAGES.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <article
                key={pkg.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Available on request
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground">{pkg.lead}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compliance programmes</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Our legal, security, and product teams maintain ongoing programmes that de-risk operations across markets.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {COMPLIANCE_PROGRAMS.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Icon size={18} aria-hidden /> Continuous monitoring
                </span>
                <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {program.controls.map((control) => (
                    <li key={control} className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-0.5 text-primary" aria-hidden />
                      <span>{control}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we partner on reviews</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Every engagement assigns a dedicated legal liaison alongside programme leadership to co-manage approvals and documentation timelines.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2">
          {ENGAGEMENT_STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Step {index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need a bespoke legal review?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Tell us the scope, timelines, and stakeholders involved. Our legal desk will coordinate documents, schedule expert sessions, and provide status updates until approvals are wrapped.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={legalEmail}>
                Email legal desk
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Connect with programme office
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
