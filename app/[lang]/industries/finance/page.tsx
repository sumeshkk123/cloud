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
  Banknote,
  BarChart3,
  Building2,
  FileCheck2,
  Fingerprint,
  Globe,
  LayoutDashboard,
  LifeBuoy,
  ShieldCheck,
  Wallet
} from "lucide-react";
import {
  ChartPieSlice,
  Handshake,
  IdentificationBadge,
  ShieldCheckered
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  value: string;
  label: string;
  detail: string;
  icon: IconType;
};

type Priority = {
  title: string;
  description: string;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

type Programme = {
  name: string;
  summary: string;
  checkPoints: string[];
};

const HERO_METRICS: Metric[] = [
  {
    value: "48 hrs",
    label: "to configure new products",
    detail: "Spin up regulatory-ready investment, insurance, or lending plans with guided templates and approvals.",
    icon: LayoutDashboard
  },
  {
    value: "<1%",
    label: "commission variance",
    detail: "Automated payouts, audit trails, and reconciliation rules ensure every advisor is paid accurately.",
    icon: Wallet
  },
  {
    value: "+52%",
    label: "advisor productivity",
    detail: "Embedded CRM, compliance cues, and customer intelligence boost relationship depth at scale.",
    icon: BarChart3
  }
];

const STRATEGIC_PRIORITIES: Priority[] = [
  {
    title: "Multi-product orchestration",
    description: "Type, track, and update portfolios spanning wealth, insurance, credit, and fintech services in one console."
  },
  {
    title: "Regulation without friction",
    description: "Automate disclosures, suitability checks, and KYC so advisors focus on clients, not paperwork."
  },
  {
    title: "Client loyalty at scale",
    description: "Leverage AI-driven insights, personalised journeys, and loyalty programmes to deepen relationships across markets."
  }
];

const PLATFORM_CAPABILITIES: Capability[] = [
  {
    title: "Compensation governance studio",
    description: "Model binary, unilevel, and matrix plans with clawback logic, fee sharing, and high-value client bonuses built-in.",
    icon: Banknote
  },
  {
    title: "RegTech automation",
    description: "Streamline compliance with automated audit logs, jurisdiction-aware disclosures, and risk scoring.",
    icon: FileCheck2
  },
  {
    title: "Customer intelligence hub",
    description: "Aggregate account data, product holdings, and engagement signals to prioritise outreach that converts.",
    icon: ChartPieSlice
  },
  {
    title: "Secure advisor workspace",
    description: "Provide encrypted document vaults, e-signature workflows, and 360° client views in one interface.",
    icon: ShieldCheckered
  },
  {
    title: "Real-time analytics",
    description: "Monitor sales velocity, compliance status, and profitability through configurable executive dashboards.",
    icon: Building2
  },
  {
    title: "Global expansion toolkit",
    description: "Launch new markets with multi-language experiences, localised tax rules, and currency-aware payouts.",
    icon: Globe
  }
];

const PROGRAMME_LAYERS: Programme[] = [
  {
    name: "Financial services discovery",
    summary: "Align on product catalogue, risk appetite, and growth ambitions across bancassurance, advisory, and fintech teams.",
    checkPoints: [
      "Portfolio mapping workshops and compliance requirement capture.",
      "Data readiness audit covering CRM, policy admin, and ledger systems."
    ]
  },
  {
    name: "Experience and compliance design",
    summary: "Prototype advisor, customer, and back-office journeys with embedded guardrails and revenue triggers.",
    checkPoints: [
      "Suitability questionnaires, disclosure schedules, and incentive logic charts.",
      "Micro-learning and accreditation flows for every advisor persona."
    ]
  },
  {
    name: "Automation launch",
    summary: "Connect payment rails, KYC providers, and business intelligence to orchestrate a single source of truth.",
    checkPoints: [
      "Commission rehearsal with finance controllers and compliance leads.",
      "Real-time reporting dashboards for leadership and regional managers."
    ]
  },
  {
    name: "Continuous optimisation",
    summary: "Monitor profitability, customer lifetime value, and regulatory shifts to iterate programmes quarterly.",
    checkPoints: [
      "Predictive dashboards for churn, upsell, and risk mitigation.",
      "Quarterly governance reviews with cross-functional leadership."
    ]
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Finance Industry MLM Software";
  const description =
    "Empower financial services with Cloud MLM Software—compliance-first compensation, advisor enablement, and client intelligence in one platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/finance", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FinancePageProps = {
  params: { lang: SupportedLocale };
};

export default function FinancePage({ params }: FinancePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-sky-50 via-white to-slate-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-sky-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(125,211,252,0.2),transparent_60%),radial-gradient(circle_at_52%_85%,rgba(14,165,233,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-10">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Finance transformation centre
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for financial institutions modernising distribution.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Unite front-office excellence and back-office rigour through a platform built to manage advisor networks, complex compensation, and client trust—globally.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design your compliance-first growth plan
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Preview the finance demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/70 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
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

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/70 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Boardroom priorities</p>
            <div className="space-y-5">
              {STRATEGIC_PRIORITIES.map((priority) => (
                <article key={priority.title} className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                  <h2 className="text-sm font-semibold text-foreground">{priority.title}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{priority.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Review pricing models
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Platform capabilities for advisors, brokers, and fintech partners</h2>
          <p className="text-sm text-muted-foreground">
            Deliver compliant experiences, actionable intelligence, and frictionless payouts across every region your network serves.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PLATFORM_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Programmes that launch compliant, client-centric growth</h2>
            <p className="text-sm text-muted-foreground">
              Move from strategic alignment to measurable impact with milestones grounded in governance, enablement, and digitisation.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {PROGRAMME_LAYERS.map((programme) => (
              <article
                key={programme.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Fingerprint className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{programme.name}</h3>
                    <p className="text-sm text-muted-foreground">{programme.summary}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {programme.checkPoints.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/60">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A trusted foundation for finance leaders</h2>
          <p className="text-sm text-muted-foreground">
            Our clients span banks, insurers, wealth managers, and fintech disruptors. Each implementation is designed to protect client data, stay audit-ready, and accelerate advisor performance.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />
              Advanced encryption, MFA, and data residency controls.
            </li>
            <li className="flex items-center gap-3">
              <IdentificationBadge className="h-5 w-5 text-primary" aria-hidden />
              Role-based access with segregation of duties across teams.
            </li>
            <li className="flex items-center gap-3">
              <LifeBuoy className="h-5 w-5 text-primary" aria-hidden />
              Dedicated support pods for launch, optimisation, and scale.
            </li>
            <li className="flex items-center gap-3">
              <Handshake className="h-5 w-5 text-primary" aria-hidden />
              Proven integrations with policy admin, core banking, and regtech vendors.
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-primary/90 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_28%,rgba(96,165,250,0.25),transparent_58%),radial-gradient(circle_at_75%_20%,rgba(14,165,233,0.28),transparent_60%)]" aria-hidden />
          <div className="relative space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to modernise your advisor network?</h2>
            <p className="text-sm text-slate-200">
              Bring your product targets, compliance considerations, and transformation goals. We will craft a Cloud MLM Software action plan tailored to your firm.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Connect with our finance strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Request the finance demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Workshop checklist</p>
              <ul className="space-y-2">
                <li>• Product hierarchy, licensing rules, and compliance triggers.</li>
                <li>• Current technology landscape and data flows.</li>
                <li>• Growth targets, incentive priorities, and service models.</li>
              </ul>
              <p className="text-xs text-slate-300">Expect a phased roadmap, KPI framework, and change management toolkit within one business day.</p>
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
