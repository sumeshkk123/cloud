import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart4, Building, CheckCircle, LayoutGrid, LifeBuoy, Settings, Shield } from "lucide-react";
import { Brain, ChartLine, CloudArrowUp, GlobeHemisphereWest, Headset, MagicWand, UsersThree } from "@phosphor-icons/react/dist/ssr";

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
  description: string;
  bullets: string[];
  icon: IconType;
};

type Capability = {
  name: string;
  detail: string;
  benefit: string;
  icon: IconType;
};

type ChecklistItem = {
  category: string;
  items: string[];
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Platforms launched",
    value: "600+",
    description: "Global organisations running on Cloud MLM Software’s enterprise stack.",
    icon: Building
  },
  {
    label: "Average automation gain",
    value: "68%",
    description: "Reduction in manual workflows when migrating from legacy tools.",
    icon: BarChart4
  },
  {
    label: "Time-to-scale",
    value: "90 days",
    description: "Typical timeframe to deploy, localise, and train distributor networks.",
    icon: Settings
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Architect for longevity",
    description:
      "Top-tier MLM software adjusts as your organisation expands—handling millions of partners and complex hierarchies without latency.",
    bullets: [
      "Design with future markets, currencies, and regulations in mind.",
      "Ensure infrastructure can sustain comp plan changes at enterprise scale.",
      "Keep uptime expectations high with proactive monitoring and resilience."
    ],
    icon: CloudArrowUp
  },
  {
    title: "Deliver cohesive experiences",
    description:
      "Distributors need intuitive dashboards, customers expect smooth checkout journeys, and leadership demands accurate analytics.",
    bullets: [
      "Centralise onboarding, training, and communications in one workspace.",
      "Synchronise e-commerce, CRM, logistics, and finance data in real time.",
      "Use adaptive interfaces that translate complex data into clear actions."
    ],
    icon: LayoutGrid
  },
  {
    title: "Safeguard trust and compliance",
    description:
      "Protect sensitive data with secure processing, audited changes, and transparent reporting that satisfies regulators.",
    bullets: [
      "Encrypt every transaction and enforce granular access controls.",
      "Maintain policy documentation and income claim governance.",
      "Automate tax, withholding, and payment workflows for every region."
    ],
    icon: Shield
  }
];

const CAPABILITIES: Capability[] = [
  {
    name: "Modular compensation engine",
    detail: "Support binary, unilevel, matrix, and hybrid plans with drag-and-drop configuration.",
    benefit: "Launch new incentives quickly without rewriting code or risking payout errors.",
    icon: ChartLine
  },
  {
    name: "Experience-led analytics",
    detail: "Power real-time dashboards, cohort analysis, and predictive forecasting for every role.",
    benefit: "Spot opportunities for coaching, product bundling, and territory expansion instantly.",
    icon: Brain
  },
  {
    name: "Global integration fabric",
    detail: "Connect gateways, ERPs, CRMs, inventory, and marketing tools through secure APIs.",
    benefit: "Keep data fresh and eliminate duplicate work across the revenue lifecycle.",
    icon: GlobeHemisphereWest
  },
  {
    name: "Personalised enablement",
    detail: "Deliver knowledge bases, playbooks, and automation prompts tailored to each distributor.",
    benefit: "Lower the learning curve and boost retention for new and experienced leaders.",
    icon: MagicWand
  }
];

const CHECKLIST: ChecklistItem[] = [
  {
    category: "Integration readiness",
    items: [
      "Does the platform sync with existing CRM, ERP, and support tools?",
      "Can we manage regional tax rules, currencies, and warehousing in one place?",
      "Is there an API-first approach for bespoke experiences?"
    ],
    icon: PlugsIcon
  },
  {
    category: "Security posture",
    items: [
      "Are transactions encrypted with audit-ready logging?",
      "Does the provider meet international privacy regulations?",
      "Can we define granular roles for headquarters, markets, and field leaders?"
    ],
    icon: Shield
  },
  {
    category: "User experience",
    items: [
      "Will distributors understand the interface without extensive training?",
      "Can we customise branding, journeys, and notifications easily?",
      "Are analytics available on web and mobile in real time?"
    ],
    icon: UsersThree
  },
  {
    category: "Support and evolution",
    items: [
      "Do we have access to 24/7 assistance and implementation strategists?",
      "How often does the roadmap deliver enhancements aligned to our goals?",
      "Is there a community or academy for ongoing best practice sharing?"
    ],
    icon: Headset
  }
];

const SUPPORT_TIPS = [
  "Audit vendor SLAs to ensure incident response matches your business-critical windows.",
  "Choose partners who provide migration playbooks and data governance expertise.",
  "Align on co-innovation cadence so your requests influence the roadmap.",
  "Invest in training programmes that make every release easy to adopt.",
  "Establish success metrics that tie technology performance to revenue outcomes."
];

function PlugsIcon(props: { className?: string }) {
  return <Settings className={props.className} />;
}

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Best MLM Software";
  const description =
    "Discover the capabilities that define enterprise-grade MLM software and learn how Cloud MLM Software keeps organisations future ready.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/best-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BestMlmSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function BestMlmSoftwarePage({ params }: BestMlmSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_82%_20%,rgba(34,197,94,0.2),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(14,165,233,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                Platform strategy · Software evaluation
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">Best MLM software guide</h1>
              <p className="text-lg text-slate-700">
                The original article explained why choosing dynamic, reliable software underpins growth. This refreshed edition surfaces the
                non-negotiable capabilities, questions, and support models that keep modern MLM enterprises ahead.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
                  <Link href={demoHref}>
                    Explore platform demo
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Speak with a solution expert
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-indigo-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    <metric.icon className="h-5 w-5 text-indigo-500" aria-hidden />
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
          <h2 className="text-3xl font-semibold text-slate-900">Foundations of enterprise-grade MLM platforms</h2>
          <p className="mt-4 text-lg text-slate-600">
            Build on the legacy article’s emphasis on reliability by combining architecture, experience, and compliance disciplines.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100"
            >
              <pillar.icon className="h-10 w-10 text-indigo-500" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-indigo-50 to-emerald-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Capabilities that differentiate leaders</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Evaluate every platform against these core capabilities. They translate the article’s guidance on scalability, integration, and
                customer focus into tangible requirements.
              </p>
              <Button asChild variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-100">
                <Link href={pricingHref}>
                  Compare deployment packages
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {CAPABILITIES.map((capability) => (
                <div key={capability.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <capability.icon className="h-8 w-8 text-indigo-500" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{capability.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{capability.detail}</p>
                  <div className="mt-3 rounded-2xl bg-indigo-50/60 p-4 text-sm text-indigo-700">
                    <p className="font-semibold">Why it matters</p>
                    <p className="mt-1">{capability.benefit}</p>
                  </div>
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
                Evaluation checklist
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Questions to ask every vendor</h2>
              <p className="text-sm text-slate-600">
                Adapt this worksheet to your RFP process. It integrates the core themes of scalability, integration, security, and support from
                the legacy article into practical prompts.
              </p>
            </div>
            <div className="grid gap-4">
              {CHECKLIST.map((group) => (
                <div key={group.category} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <group.icon className="h-6 w-6 text-indigo-500" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{group.category}</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {group.items.map((item) => (
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
        <div className="rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-100 via-white to-emerald-50 p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,300px),minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Support that keeps momentum</h2>
              <p className="text-sm text-slate-600">
                Great software needs great partnership. Ensure your provider offers the training, roadmap influence, and problem-solving muscle
                you need for every growth phase.
              </p>
            </div>
            <div className="grid gap-4">
              {SUPPORT_TIPS.map((tip) => (
                <div key={tip} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <LifeBuoy className="mt-1 h-6 w-6 text-indigo-500" aria-hidden />
                  <p className="text-sm text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-indigo-50 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to evaluate your next MLM platform?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software combines automation, analytics, and global scalability so your business can focus on strategic growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
                <Link href={demoHref}>
                  Schedule a discovery session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-100">
                <Link href={contactHref}>
                  Connect with our consultants
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
