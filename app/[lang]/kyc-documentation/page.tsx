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
  ClipboardList,
  FileCheck2,
  Fingerprint,
  Lock,
  RefreshCw,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import {
  IdentificationCard,
  MagnifyingGlass,
  ShieldChevron
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Assurance = {
  title: string;
  description: string;
  icon: IconType;
};

type ChecklistItem = {
  title: string;
  detail: string;
  icon: IconType;
};

type RefreshStep = {
  title: string;
  description: string;
  icon: IconType;
};

const ASSURANCES: Assurance[] = [
  {
    title: "Fraud prevention",
    description:
      "Stop fake identities and money-laundering attempts with automated verification that checks every application before activation.",
    icon: ShieldChevron
  },
  {
    title: "360° risk review",
    description:
      "Scan historic activity, debt flags, and watchlists so finance and compliance teams prioritise trustworthy members.",
    icon: MagnifyingGlass
  },
  {
    title: "Seamless member experience",
    description:
      "Guided forms, document reminders, and progressive approvals keep distributors informed across desktop and mobile.",
    icon: IdentificationCard
  }
];

const CHECKLIST: ChecklistItem[] = [
  {
    title: "Identity capture",
    detail: "Collect passports, driver’s licences, voter IDs, and proof-of-address documents with configurable validation rules.",
    icon: Fingerprint
  },
  {
    title: "Document review",
    detail: "Route evidence to reviewers, add notes, and maintain a timestamped trail for every approval and rejection.",
    icon: ClipboardList
  },
  {
    title: "Account controls",
    detail: "Lock payouts, upgrade levels, or trigger refresh requests until the required documents are verified.",
    icon: Lock
  },
  {
    title: "Audit exports",
    detail: "Generate regulator-ready reports with verification status, exception logs, and remediation outcomes.",
    icon: FileCheck2
  }
];

const REFRESH_STEPS: RefreshStep[] = [
  {
    title: "Upload refresh documents",
    description:
      "Active members submit updated proofs before rank upgrades or new account creations, ensuring the latest compliance posture.",
    icon: UserCheck
  },
  {
    title: "Re-verify activity",
    description:
      "Compliance teams compare transaction history with current disclosures to highlight dormant accounts or unusual behaviour.",
    icon: ShieldCheck
  },
  {
    title: "Approve and reactivate",
    description:
      "Once checks are cleared, members regain full access and receive guidance on maintaining good standing.",
    icon: RefreshCw
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "KYC Documentation";
  const description =
    "Secure distributor onboarding and account refresh cycles with the Cloud MLM Software KYC documentation module.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/kyc-documentation", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type KycDocumentationPageProps = {
  params: { lang: SupportedLocale };
};

export default function KycDocumentationPage({ params }: KycDocumentationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.25),transparent_45%),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-1 text-sm font-semibold text-emerald-200">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Verified membership controls
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Build trust with precise, automated KYC documentation.
            </h1>
            <p className="text-base text-slate-200/80">
              Cloud MLM Software embeds know-your-customer protection into every onboarding and refresh moment. Capture evidence, prevent fraudulent sign-ups, and keep regulators satisfied without slowing growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Talk to compliance experts
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200/50 text-emerald-100 hover:bg-emerald-400/10">
                <Link href={pricingHref}>
                  Explore pricing tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-emerald-300/30 bg-black/30 p-6 shadow-lg backdrop-blur">
            {ASSURANCES.map((assurance) => {
              const Icon = assurance.icon;
              return (
                <article key={assurance.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/15 text-emerald-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-slate-100">{assurance.title}</h2>
                  </div>
                  <p className="text-xs text-slate-200/80">{assurance.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
        <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why KYC is non-negotiable for MLM leaders</h2>
          <p className="text-sm text-muted-foreground">
            A global distributor footprint demands stringent verification. The KYC module screens every enrolment and refresh cycle so you can expand with confidence while meeting regulatory expectations.
          </p>
          <p className="text-sm text-muted-foreground">
            Identity checks protect your community, safeguard payouts, and keep a permanent record of who is building your brand. Automated guardrails mean compliance teams spend less time chasing documents and more time guiding growth.
          </p>
        </div>
        <div className="grid gap-4">
          {CHECKLIST.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-muted/20 p-6 shadow-sm dark:bg-slate-900/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Continuous verification keeps accounts healthy</h2>
            <p className="text-sm text-muted-foreground">
              Active and returning members must keep their credentials current. Automate refresh campaigns, queue reviews, and reactivate accounts in moments.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {REFRESH_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/50">
          <div className="absolute -left-24 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to launch enterprise-grade verification?</h2>
              <p className="text-sm text-muted-foreground">
                Share your onboarding policies, regulatory regions, and distributor volumes. We’ll configure a KYC workflow that protects your network and keeps operations agile.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Book a readiness session</h3>
                <p className="text-sm text-muted-foreground">
                  Compliance strategists walk through intake forms, reviewer dashboards, and escalation paths tailored to your teams.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Schedule my consultation
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
