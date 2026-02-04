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
  Cloud,
  Globe2,
  Layers,
  LineChart,
  Network,
  ShieldCheck
} from "lucide-react";
import {
  CirclesThreePlus,
  FlowArrow,
  Handshake,
  Planet,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Pillar = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type Advantage = {
  title: string;
  description: string;
};

type DeploymentPath = {
  title: string;
  points: string[];
};

const INTRO_PARAGRAPHS = [
  "Multi-Level Marketing thrives on human networks rather than paid advertising. Agents champion products, recruit new distributors, and grow customer communities through trusted conversations and grassroots events. To reward those efforts accurately, commissions flow through a hierarchy that changes daily.",
  "That fluid structure is exactly why a standard ERP or CRM struggles to keep pace. Organizations rely on specialized MLM software to orchestrate every moving part — from onboarding distributors and tracking referrals to managing inventory, incentives, and payouts in real time."
];

const UNIQUE_PILLARS: Pillar[] = [
  {
    title: "Built for tiered networks",
    description:
      "Visualize and manage sponsorship hierarchies with precision so every enrolment, level shift, and promotion is recorded without manual spreadsheets.",
    icon: CirclesThreePlus
  },
  {
    title: "Intelligent compensation engine",
    description:
      "Automate multi-layer commission, bonus, and rewards logic, keeping calculations transparent for both corporate teams and field distributors.",
    icon: FlowArrow
  },
  {
    title: "Unified business cockpit",
    description:
      "Connect inventory, sales, customer records, and referrals so leaders can track growth, fulfill orders, and approve payouts from a single command center.",
    icon: SquaresFour
  },
  {
    title: "Adaptive deployment model",
    description:
      "Scale confidently on secure cloud infrastructure or keep operations on-premises when regulatory or internal policies require local control.",
    icon: Cloud
  }
];

const OPERATIONAL_ADVANTAGES: Advantage[] = [
  {
    title: "Anytime, anywhere access",
    description:
      "Cloud-first delivery lets teams work from any device with a browser — perfect for agents coordinating meetings on the go and managers checking KPIs after hours."
  },
  {
    title: "Ecosystem integrations",
    description:
      "Tie in payment gateways, SMS and email automations, inventory apps, and CRMs so customer journeys, stock levels, and commissions stay perfectly in sync."
  },
  {
    title: "Replicated storefronts",
    description:
      "Launch on-brand microsites for every agent, giving the field personalized landing pages that feed real-time sales and enrolment insights back to HQ."
  },
  {
    title: "Continuous enablement",
    description:
      "Vendors such as Cloud MLM Software pair the platform with onboarding, 24/7 support, and regular upgrades to keep organizations compliant and future-ready."
  }
];

const DEPLOYMENT_PATHS: DeploymentPath[] = [
  {
    title: "Cloud hosting without hardware hurdles",
    points: [
      "Spin up secure environments managed by the software provider and eliminate upfront server investments.",
      "Instantly roll out new regions or product lines by scaling infrastructure rather than rewriting workflows."
    ]
  },
  {
    title: "On-premises for regulated teams",
    points: [
      "Retain direct control over databases when legislation or corporate policy demands in-house hosting.",
      "Mirror the same automation and analytics stack inside your data center with expert vendor support."
    ]
  }
];

const INDUSTRY_READINESS = [
  "Insurance and financial services enterprises monitor licensed agents, premium collections, and claims within one compliant platform.",
  "Beauty, wellness, and retail brands customize catalogs, loyalty incentives, and subscription boxes to reflect their unique product journeys.",
  "Emerging sectors — from sustainable energy to digital assets — rely on resilient uptime, encrypted backups, and multilingual experiences to engage global markets."
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "What Makes MLM Software Unique?";
  const description =
    "Understand the network-driven features, deployment flexibility, and enterprise-grade support that make MLM software different from traditional business platforms.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/what-makes-mlm-software-unique", locale)
    },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/blog/what-makes-mlm-software-unique", locale)
    }
  };
}

export default function Page({ params }: { params: { lang: SupportedLocale } }) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-slate-900 to-slate-800 opacity-90 dark:opacity-95" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-white sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-start gap-12">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-medium uppercase tracking-wide text-indigo-100">
                <Network className="h-4 w-4" aria-hidden />
                Thought Leadership
              </span>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                What Makes MLM Software Unique for High-Performing Networks?
              </h1>
              <p className="text-lg text-indigo-100 sm:text-xl">
                Discover why network marketing leaders depend on dedicated platforms to orchestrate hierarchies, automate commissions, and keep every market aligned.
              </p>
              <div className="space-y-4 text-base leading-7 text-indigo-100">
                {INTRO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={buildLocalizedPath("/contact-us", locale)}>
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-indigo-100">
                    Connect with a strategist
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                </Link>
                <Link
                  href={buildLocalizedPath("/mlm-software-modules", locale)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-100 transition hover:text-white"
                >
                  Explore modules
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="flex-1 min-w-[16rem]">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3 text-indigo-100">
                  <Globe2 className="h-6 w-6" aria-hidden />
                  <span className="text-sm font-semibold uppercase tracking-wide">Network-first Lens</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-indigo-100/90">
                  Agents aren&apos;t employees. They are ambassadors, entrepreneurs, and connectors. Purpose-built MLM software honours that reality by giving corporate teams realtime visibility into every relationship without slowing down the field.
                </p>
                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4" aria-hidden />
                    <div>
                      <dt className="font-semibold">Transparent rewards</dt>
                      <dd className="text-indigo-100/80">Hierarchy-aware logic prevents disputes and keeps incentive programs trustworthy.</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="mt-1 h-4 w-4" aria-hidden />
                    <div>
                      <dt className="font-semibold">Operational clarity</dt>
                      <dd className="text-indigo-100/80">Inventory, customer service, and finance stay aligned with every field update.</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LineChart className="mt-1 h-4 w-4" aria-hidden />
                    <div>
                      <dt className="font-semibold">Growth analytics</dt>
                      <dd className="text-indigo-100/80">Spot momentum markets, stalled legs, and product champions using live dashboards.</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-200">
            <SquaresFour className="h-3.5 w-3.5" aria-hidden />
            Product DNA
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Network-native capabilities you can&apos;t retrofit</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Each capability below reflects the realities described in the original blog — from flexible scaling to hierarchical commission logic. Together they make MLM platforms fundamentally different from traditional business systems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {UNIQUE_PILLARS.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/60"
            >
              <Icon className="h-8 w-8 text-indigo-600 transition group-hover:scale-110 dark:text-indigo-300" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase text-white dark:bg-slate-100 dark:text-slate-900">
              <Planet className="h-3.5 w-3.5" aria-hidden />
              Operations in motion
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How dedicated MLM software keeps every team synchronized</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
              The original article emphasised accessibility, integrations, customization, and support. This journey-style view shows how those ingredients combine into a resilient operating rhythm for growing organizations.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="space-y-6 rounded-3xl border border-indigo-100 bg-indigo-50/80 p-6 dark:border-indigo-500/40 dark:bg-indigo-500/10">
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200">Field-first enablement</h3>
              <p className="text-sm leading-6 text-indigo-900/80 dark:text-indigo-100/80">
                Agents gain login access, replicated websites, and live dashboards that mirror their downline and incentives. Training resources and knowledge centers sit beside real-time performance data so the field can act fast.
              </p>
              <p className="text-sm leading-6 text-indigo-900/80 dark:text-indigo-100/80">
                Corporate teams configure themes, languages, product bundles, and campaign automations so every market speaks to customers in the right voice.
              </p>
              <Link
                href={buildLocalizedPath("/mlm-software-availability-across-countries", locale)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-900 transition hover:text-indigo-700 dark:text-indigo-200 dark:hover:text-indigo-100"
              >
                Explore global delivery
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ul className="space-y-6">
              {OPERATIONAL_ADVANTAGES.map(({ title, description }) => (
                <li
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-200">
            <Handshake className="h-3.5 w-3.5" aria-hidden />
            Deployment clarity
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Choose your ideal deployment path</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Whether you prefer vendor-hosted simplicity or on-premises control, the platform keeps data synchronized, encrypted, and instantly auditable — capturing the hosting flexibility highlighted in the legacy article.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {DEPLOYMENT_PATHS.map(({ title, points }) => (
            <div
              key={title}
              className="h-full rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/60"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white dark:bg-slate-950">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
              <Planet className="h-3.5 w-3.5" aria-hidden />
              Industry readiness
            </span>
            <h2 className="text-2xl font-semibold">Trusted across regulated and fast-moving industries</h2>
            <p className="text-base leading-7 text-white/80">
              The legacy content called out insurance, beauty, finance, and emerging sectors. This matrix builds on that insight with concrete examples of how one platform adapts to each landscape.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {INDUSTRY_READINESS.map((statement) => (
              <div
                key={statement}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:bg-white/10"
              >
                <p className="text-sm leading-6 text-white/90">{statement}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="max-w-xl space-y-2">
                <h3 className="text-xl font-semibold">Ready to model your next growth chapter?</h3>
                <p className="text-sm leading-6 text-white/80">
                  Cloud MLM Software delivers configurable deployments, multilingual experiences, and hands-on consultancy to keep your brand ahead.
                </p>
              </div>
              <Link href={buildLocalizedPath("/pricing", locale)}>
                <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                  View pricing options
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">About the author</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Experienced Research Analyst</h3>
            </div>
            <p className="flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

