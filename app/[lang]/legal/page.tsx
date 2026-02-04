import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Gavel,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type Policy = {
  title: string;
  summary: string;
  updated: string;
  href: string;
};

type Commitment = {
  title: string;
  description: string;
};

const POLICIES: Policy[] = [
  {
    title: "Terms & Conditions",
    summary: "Defines how Cloud MLM Software and Bpract engage with customers, from licensing to support commitments.",
    updated: "Updated January 2025",
    href: "/legal/terms"
  },
  {
    title: "Privacy Policy",
    summary: "Explains how we collect, use, and safeguard personal data across the Cloud MLM Software platform.",
    updated: "Updated December 2024",
    href: "/legal/privacy"
  },
  {
    title: "Refund & Cancellation",
    summary: "Outlines refund, cancellation, and change-request processes for Cloud MLM Software services.",
    updated: "Updated November 2024",
    href: "/refunds-and-cancellation"
  },
  {
    title: "Security & Trust",
    summary: "Details infrastructure safeguards, compliance, and incident response procedures.",
    updated: "Updated February 2025",
    href: "/company/security"
  },
  {
    title: "Compliance resources",
    summary: "Access documents supporting GDPR, PCI, and other industry requirements.",
    updated: "Updated January 2025",
    href: "/documents/"
  }
];

const COMMITMENTS: Commitment[] = [
  {
    title: "Regulatory alignment",
    description: "Cloud MLM Software follows regulations such as GDPR, SOC-aligned practices, and regional data residency obligations."
  },
  {
    title: "Transparent communication",
    description: "We share policy updates, changelog notes, and incident information promptly with customers."
  },
  {
    title: "Shared responsibility",
    description: "While we safeguard the platform, we also help customers implement secure processes within their organisations."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type LegalParams = { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
export async function generateMetadata({ params }: { params: LegalParams }): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved.lang);
  const title = "Legal Center | Cloud MLM Software";
  const description =
    "Review policies, terms, and compliance resources for Bpract Software Solutions and Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/legal", locale)
    }
  };
}

type LegalPageProps = {
  params: LegalParams;
};

export default async function LegalPage({ params }: LegalPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-emerald-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" aria-hidden />
            Legal center
          </span>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Policies and commitments for Cloud MLM Software and Bpract Software Solutions.
            </h1>
            <p className="text-lg text-muted-foreground">
              Access terms, privacy details, and compliance resources that support your legal, security, and procurement teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="mailto:[email protected]">
                Request a legal review
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Contact support
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Policy library</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {POLICIES.map((policy) => (
            <article key={policy.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                <FileText className="h-4 w-4" aria-hidden />
                {policy.updated}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{policy.title}</h3>
              <p className="text-sm text-muted-foreground">{policy.summary}</p>
              <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                <Link
                  href={policy.href}
                  target={policy.href.startsWith("http") ? "_blank" : undefined}
                  rel={policy.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  View policy
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our commitments</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {COMMITMENTS.map((commitment) => (
            <article key={commitment.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{commitment.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{commitment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need a specific document?</h2>
        <p className="text-sm text-muted-foreground">
          Submit a request for NDAs, data processing agreements, or other enterprise documentation.
        </p>
        <Button asChild variant="outline" size="lg">
          <Link href="mailto:[email protected]">
            Request documentation
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Regional availability</h2>
        <div className="rounded-3xl border border-border/60 bg-background p-6 text-sm text-muted-foreground shadow-sm">
          Cloud MLM Software operates with data residency options across India, APAC, Europe, and North America. We help your legal team evaluate the right deployment strategy, including custom agreements for new regions.
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Questions for legal or compliance?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Email [email protected] or contact your account team. We’ll provide the documentation, security references, or agreements you need.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="mailto:[email protected]">
                Email legal team
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Contact support
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
