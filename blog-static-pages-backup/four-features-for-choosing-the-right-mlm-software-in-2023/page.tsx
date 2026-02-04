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
  Braces,
  Cloud,
  Headphones,
  Infinity,
  Layers,
  Network,
  Puzzle,
  Rocket,
  Shield,
  Zap
} from "lucide-react";
import {
  ChartLineUp,
  Devices,
  GearSix,
  SquaresFour,
  Users
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
  proofPoints: string[];
  icon: IconType;
  accent: string;
};

type ChecklistItem = {
  title: string;
  description: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Enterprises assessed",
    value: "250+",
    description: "Software evaluations completed by Cloud MLM Software consultants across five continents.",
    icon: ChartLineUp
  },
  {
    label: "Average platform lifespan",
    value: "7.4 years",
    description: "Clients rely on their chosen MLM platform for nearly a decade when it aligns with core needs.",
    icon: Infinity
  },
  {
    label: "Time saved via automation",
    value: "38%",
    description: "Teams free up hours per week by eliminating manual commission, billing, and onboarding tasks.",
    icon: Zap
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Scalability",
    summary:
      "Your platform must scale with distributor growth, product launches, and plan changes without breaking performance—or the budget.",
    proofPoints: [
      "Cloud-native infrastructure handles traffic spikes during promotions or launches.",
      "Horizontal scaling keeps database queries snappy even with millions of genealogy records.",
      "Modular architecture lets you add features without rewriting the core."
    ],
    icon: Rocket,
    accent: "from-slate-100 via-white to-emerald-50"
  },
  {
    title: "Integration readiness",
    summary:
      "Look for open APIs and prebuilt connectors so your software plays nicely with CRM, ERP, marketing, and analytics stacks.",
    proofPoints: [
      "Bi-directional integrations sync orders, inventory, and customer data in real time.",
      "Webhooks trigger workflows in Slack, HubSpot, or custom microservices.",
      "SDKs and documentation help your developers build new experiences quickly."
    ],
    icon: Puzzle,
    accent: "from-emerald-50 via-white to-sky-50"
  },
  {
    title: "Automation everywhere",
    summary:
      "Automation ensures accuracy, compliance, and velocity across compensation, communications, and onboarding.",
    proofPoints: [
      "No-code rules automate rank advancements, bonuses, and deductions.",
      "Journey builders nurture recruits and customers with personalised messaging.",
      "Scheduled jobs handle backups, tax calculations, and payout releases automatically."
    ],
    icon: GearSix,
    accent: "from-sky-50 via-white to-amber-50"
  },
  {
    title: "Support & enablement",
    summary:
      "High-calibre support keeps your team confident before, during, and after launch. Look beyond ticket queues to strategic partnership.",
    proofPoints: [
      "24/7 help desks, multilingual support, and proactive health checks.",
      "Training academies, documentation, and sandboxes for continuous learning.",
      "Dedicated customer success managers aligned to your quarterly objectives."
    ],
    icon: Headphones,
    accent: "from-amber-50 via-white to-slate-50"
  }
];

const CHECKLIST: ChecklistItem[] = [
  {
    title: "Security and compliance",
    description:
      "Ensure SOC-aligned controls, granular permissions, and regional tax handling are standard—not optional extras.",
    icon: Shield
  },
  {
    title: "User experience",
    description:
      "Test dashboards on desktop and mobile. Intuitive navigation and accessibility best practices drive adoption.",
    icon: Devices
  },
  {
    title: "Data ownership & portability",
    description:
      "Understand how you can export or migrate data, especially if you spin up new markets or restructure plans.",
    icon: Layers
  },
  {
    title: "Vendor partnership",
    description:
      "Evaluate roadmaps, customer communities, and escalation paths. You want more than a vendor—you want a thought partner.",
    icon: Users
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Four Must-Have Features for Choosing the Right MLM Software in 2025";
  const description =
    "Scalability, integration, automation, and world-class support should anchor your MLM software decision. Use this framework to evaluate platforms confidently.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/four-features-for-choosing-the-right-mlm-software-in-2023", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FeatureChecklistPageProps = {
  params: { lang: SupportedLocale };
};

export default function FeatureChecklistPage({ params }: FeatureChecklistPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(30,64,175,0.2),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(15,118,110,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Buyer’s guide · Platform strategy
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Four must-have features for choosing the right MLM software in 2025
              </h1>
              <p className="text-lg text-slate-700">
                The right platform is the engine behind distributor momentum, customer retention, and financial accuracy. Evaluate solutions through the lens of scalability,
                integration, automation, and support—and choose with confidence.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500">
                  <Link href={demoHref}>
                    Compare platform demos
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Request a readiness assessment
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-emerald-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    <metric.icon className="h-5 w-5 text-emerald-500" aria-hidden />
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Four pillars your next platform must deliver</h2>
          <p className="mt-4 text-lg text-slate-600">
            These aren’t optional add-ons—they’re essential to running a resilient, scalable MLM organisation in 2025 and beyond.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100"
            >
              <div className={`rounded-t-3xl border-b border-slate-100 bg-gradient-to-br ${pillar.accent} p-6`}>
                <pillar.icon className="h-10 w-10 text-emerald-600" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{pillar.summary}</p>
              </div>
              <ul className="space-y-2 p-6 text-sm text-slate-600">
                {pillar.proofPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Decision checklist
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Questions to validate before you sign</h2>
              <p className="text-sm text-slate-600">
                Complement the four pillars with this due diligence checklist to remove ambiguity from your evaluation process.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {CHECKLIST.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-emerald-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-white to-slate-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Let’s shortlist the right platform together</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software guides you through requirements gathering, vendor comparison, and implementation planning so your next software decision becomes a growth multiplier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500">
                <Link href={demoHref}>
                  Schedule a consultation
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-100">
                <Link href={pricingHref}>
                  Review implementation tiers
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <Link href={contactHref}>
                  Talk with customer success
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
