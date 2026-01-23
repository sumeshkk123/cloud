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
  BarChart,
  Cloud,
  Compass,
  Globe,
  Layers,
  LifeBuoy,
  Puzzle,
  Shield,
  Workflow
} from "lucide-react";
import {
  Atom,
  Certificate,
  ChartBar,
  GearSix,
  Lightning,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  summary: string;
  icon: IconType;
  bullets: string[];
};

type Checklist = {
  title: string;
  items: string[];
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Direct sellers worldwide",
    value: "125M+",
    description: "Your platform must handle global scale, regional regulations, and growth.",
    icon: Globe
  },
  {
    label: "Average software refresh cycle",
    value: "5-7 years",
    description: "Enterprises re-platform roughly every six years—choose tech with staying power.",
    icon: GearSix
  },
  {
    label: "ROI on automation",
    value: "35%",
    description: "Teams save more than a third of operational spend by automating payouts, support, and analytics.",
    icon: BarChart
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Follow the trend—future-ready architecture",
    summary:
      "Modern MLM platforms leverage Laravel, Node.js, Nest, React, or similar frameworks. They deploy in the cloud and ship updates continuously.",
    icon: Atom,
    bullets: [
      "Confirm the stack uses actively maintained frameworks and libraries.",
      "Ask about CI/CD pipelines, release cadence, and rollback safety nets.",
      "Review the product roadmap to ensure innovation stays aligned with industry trends."
    ]
  },
  {
    title: "Customisation without friction",
    summary:
      "Your business evolves. Choose software that supports custom features, new plans, and integrations without rework.",
    icon: Puzzle,
    bullets: [
      "Ensure compensation engines support bespoke logic and modelling.",
      "Request examples of client-specific modules or third-party integrations.",
      "Clarify how change requests are prioritised and delivered."
    ]
  },
  {
    title: "Global readiness",
    summary:
      "Multilingual interfaces, multi-currency payouts, and localisation features are non-negotiable for international expansion.",
    icon: Globe,
    bullets: [
      "Audit language support, right-to-left design, and translation workflows.",
      "Confirm real-time currency conversion and regional tax handling.",
      "Validate hosting options and data residency compliance."
    ]
  },
  {
    title: "Informative, actionable dashboards",
    summary:
      "Dashboards should surface real-time KPIs, predictive insights, and user-friendly controls for owners and distributors alike.",
    icon: ChartBar,
    bullets: [
      "Look for role-based dashboards with configurable widgets.",
      "Leverage predictive analytics to forecast churn, rank progression, and revenue.",
      "Assess mobile responsiveness and accessibility features."
    ]
  },
  {
    title: "Experience-backed partnership",
    summary:
      "Vendors with deep MLM expertise foresee edge cases. They offer implementation playbooks, training, and 24/7 support.",
    icon: Certificate,
    bullets: [
      "Review case studies in your plan type or vertical.",
      "Ask about onboarding: who leads discovery, migration, and testing?",
      "Confirm support SLAs, escalation paths, and dedicated success managers."
    ]
  }
];

const CHECKLISTS: Checklist[] = [
  {
    title: "Security & compliance",
    icon: Shield,
    items: [
      "SOC-aligned controls, encryption at rest, and secure secrets storage.",
      "Granular permission management for corporate staff, distributors, and partners.",
      "Compliance with GDPR, CCPA, and regional tax regulations."
    ]
  },
  {
    title: "Integration ecosystem",
    icon: Workflow,
    items: [
      "REST/GraphQL APIs, webhooks, and SDKs for custom experiences.",
      "Native connectors for CRM, ERP, marketing automation, and payment gateways.",
      "ETL/export options to feed BI tools and data warehouses."
    ]
  },
  {
    title: "Operational excellence",
    icon: StackSimple,
    items: [
      "Automated backups, proactive monitoring, and disaster recovery plans.",
      "Configurable alerts for inventory, compliance, and financial exceptions.",
      "In-app guidance, tutorials, and certification programmes for users."
    ]
  },
  {
    title: "Customer success",
    icon: LifeBuoy,
    items: [
      "Dedicated onboarding teams and go-live playbooks.",
      "Quarterly business reviews with roadmap alignment.",
      "Community forums, documentation, and knowledge bases."
    ]
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How Do You Choose MLM Software for Your Direct Selling Business?";
  const description =
    "Evaluate MLM platforms for modern tech, customisation, global readiness, dashboards, and proven expertise so your direct selling brand scales with confidence.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-do-you-choose-mlm-software-for-your-direct-selling-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ChooseSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function ChooseSoftwarePage({ params }: ChooseSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-slate-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.28),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.22),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                Buyer’s guide · Direct selling tech
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                How do you choose MLM software for your direct selling business?
              </h1>
              <p className="text-lg text-slate-700">
                Your platform is the backbone of growth. Evaluate options through technology, customisation, global reach, insights, and partner expertise to future-proof your network marketing enterprise.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-500">
                  <Link href={demoHref}>
                    Request a platform consultation
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Talk to solution architects
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-teal-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-teal-600">
                    <metric.icon className="h-5 w-5 text-teal-500" aria-hidden />
                    {metric.label}
                  </div>
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Evaluation pillars
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Five essentials for selecting MLM software</h2>
              <p className="text-sm text-slate-600">
                Use these pillars as your decision framework. Each one impacts scalability, trust, and distributor adoption.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <pillar.icon className="h-6 w-6 text-teal-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{pillar.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{pillar.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-100 via-white to-slate-100 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Due diligence checklist</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Validate security, integrations, operations, and support. These questions will surface strengths and gaps before contracts are signed.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {CHECKLISTS.map((checklist) => (
                <div key={checklist.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <checklist.icon className="h-8 w-8 text-teal-600" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{checklist.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {checklist.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Choose a platform built for tomorrow</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software delivers configurable compensation engines, multilingual back offices, predictive dashboards, and enterprise-grade security so your direct selling brand thrives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-500">
                <Link href={demoHref}>
                  Schedule a tailored demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-100">
                <Link href={pricingHref}>
                  Review implementation tiers
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <Link href={contactHref}>
                  Partner with our experts
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
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
