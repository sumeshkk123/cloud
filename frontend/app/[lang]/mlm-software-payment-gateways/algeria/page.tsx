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
  BarChart3,
  Building2,
  Layers3,
  Map,
  Signal
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  GlobeSimple,
  Handshake,
  ShieldCheck,
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

type Cluster = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
  name: string;
  detail: string;
  icon: IconType;
};

type Guard = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const METRICS: Metric[] = [
  {
    label: "Settlement cadence",
    value: "T+1",
    description: "Bank of Algeria clearing windows handled with automated approvals.",
    icon: BarChart3
  },
  {
    label: "Gateway partners",
    value: "14",
    description: "Adapters for public banks, private PSPs, and mobile wallets across Algeria.",
    icon: Building2
  },
  {
    label: "Regional reach",
    value: "6 corridors",
    description: "Expand into Maghreb and EU networks while keeping compliance unified.",
    icon: Signal
  }
];

const CLUSTERS: Cluster[] = [
  {
    title: "Domestic bank orchestration",
    description:
      "Harmonise payouts across Banque Extérieure d'Algérie, Banque Nationale d'Algérie, and trusted private institutions.",
    bullets: [
      "ACH file automation with maker-checker workflows",
      "DZD and foreign currency accounts managed in one ledger",
      "Automated reconciliation mapped to CREG reporting"
    ],
    icon: Bank
  },
  {
    title: "Digital wallet & card expansion",
    description:
      "Leverage CIB, Edahabia, and emerging mobile wallets to drive cashless incentives for distributors.",
    bullets: [
      "Tokenised payouts with 3-D Secure orchestration",
      "Risk scoring for card-not-present and wallet transactions",
      "Campaign automation to encourage digital adoption"
    ],
    icon: Layers3
  },
  {
    title: "Cross-border growth",
    description:
      "Serve diaspora sales across France, Tunisia, and MENA partners while satisfying Algerian currency controls.",
    bullets: [
      "Dynamic FX policies with regulator-aligned buffers",
      "Consolidated dashboards for export reporting",
      "Compliance guardrails for import/export declarations"
    ],
    icon: GlobeSimple
  }
];

const STAGES: Stage[] = [
  {
    name: "Discovery & regulatory mapping",
    detail: "Workshops capture treasury policies, compensation plans, and Bank of Algeria requirements.",
    icon: Map
  },
  {
    name: "Integration sprints",
    detail: "Connect banking APIs, SFTP exchanges, and wallet partners with observability baked in.",
    icon: Layers3
  },
  {
    name: "Operational launch",
    detail: "Pilot cohorts go live with dashboards, bilingual enablement, and exception response playbooks.",
    icon: ChartLineUp
  },
  {
    name: "Optimise & scale",
    detail: "Automate high-volume workflows, expand corridors, and embed analytics for leadership.",
    icon: BarChart3
  }
];

const GUARDS: Guard[] = [
  {
    title: "Compliance first",
    description:
      "Sanctions checks, transaction limits, and archival policies align with Bank of Algeria directives and international AML standards.",
    icon: ShieldCheck
  },
  {
    title: "Treasury command",
    description:
      "Liquidity forecasts, FX exposure dashboards, and alerting keep finance teams ahead of volatility.",
    icon: ChartLineUp
  },
  {
    title: "Distributor trust",
    description:
      "Transparent payout statuses, French and Arabic communications, and responsive support maintain confidence across the field.",
    icon: UsersThree
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "How do you manage DZD and foreign currency payouts together?",
    answer:
      "Cloud MLM Software lets you run multi-wallet ledgers, configure FX buffers, and report consolidated positions to treasury stakeholders."
  },
  {
    question: "Can we integrate with public-sector banks securely?",
    answer:
      "Yes. We automate SFTP and API exchanges with dual approvals, encrypted credentials, and immutable audit logs ready for regulator review."
  },
  {
    question: "What languages do you support for distributor communications?",
    answer:
      "Notification templates ship in Arabic, French, and English so every leader receives actionable updates in their preferred language."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Algeria MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Coordinate Algeria-focused payment gateways. Cloud MLM Software fuses public banks, digital wallets, and regional corridors with regulator-grade governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/algeria", locale)
    },
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  };
}

type AlgeriaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function AlgeriaPaymentGatewaysPage({
  params
}: AlgeriaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-lime-50 px-6 py-20 text-emerald-950 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.3),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(101,163,13,0.25),transparent_60%),radial-gradient(circle_at_30%_80%,rgba(22,163,74,0.3),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.45),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(101,163,13,0.35),transparent_55%),radial-gradient(circle_at_30%_80%,rgba(22,163,74,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-emerald-500/40 dark:bg-slate-900/70 dark:text-emerald-200">
                <GlobeSimple className="h-4 w-4" />
                Algeria payment intelligence
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Build resilient MLM payment gateways across Algeria and the Maghreb
                </h1>
                <p className="text-lg text-emerald-800/80 dark:text-slate-200">
                  Cloud MLM Software orchestrates Algeria’s banking network, digital wallets, and regional corridors in one governed platform. Deliver trustworthy payouts, keep regulators aligned, and empower your distributor community with real-time clarity.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                  <Link href={contactHref}>
                    Design your Algeria rollout
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 bg-white/80 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-500/30 dark:bg-transparent dark:text-emerald-100 dark:hover:bg-emerald-500/10"
                >
                  <Link href={demoHref}>See the orchestration demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-emerald-200/70 bg-white/85 p-7 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(101,163,13,0.25),transparent_55%)]" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500 dark:text-slate-300">
                Executive snapshot
              </p>
              <p className="mt-4 text-base text-emerald-800/80 dark:text-slate-200">
                &quot;We now manage every commission cycle—public banks, wallets, diaspora sales—in a single ledger. Compliance reviews take minutes instead of days.&quot;
              </p>
              <p className="mt-4 text-xs text-emerald-600/80 dark:text-slate-400">— Cloud MLM Software Algeria transformation lead</p>
              <dl className="mt-6 grid gap-5 rounded-2xl border border-emerald-200/70 bg-emerald-50/60 p-5 text-sm text-emerald-800 dark:border-slate-600/50 dark:bg-slate-950/40 dark:text-slate-200">
                {METRICS.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500 dark:text-slate-400">
                      <metric.icon className="h-4 w-4" />
                      {metric.label}
                    </div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-2xl font-semibold">{metric.value}</span>
                      <span className="text-xs uppercase tracking-[0.3em] text-emerald-400/80 dark:text-slate-400">
                        {metric.description}
                      </span>
                    </div>
                  </div>
                ))}
              </dl>
              <Button asChild size="sm" variant="outline" className="mt-6 border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/40 dark:text-emerald-200 dark:hover:bg-emerald-500/10">
                <Link href={pricingHref}>
                  Review solution tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway clusters tailored to Algeria’s financial landscape
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Cloud MLM Software has already helped leading Algerian organisations modernise their payout experiences. Select the cluster mix that aligns with your growth strategy.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {CLUSTERS.map((cluster) => (
            <article
              key={cluster.title}
              className="relative flex h-full flex-col gap-5 rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-white via-white to-emerald-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-emerald-200 via-transparent to-lime-200 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-emerald-500/20 dark:to-lime-500/20" aria-hidden />
              <cluster.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-300" />
              <div>
                <h3 className="text-xl font-semibold text-emerald-900 dark:text-white">{cluster.title}</h3>
                <p className="mt-2 text-sm text-emerald-800/80 dark:text-slate-300">{cluster.description}</p>
              </div>
              <ul className="space-y-3 text-sm text-emerald-800/80 dark:text-slate-300">
                {cluster.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-200/70 bg-emerald-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A delivery cadence tuned for Algerian regulators and leadership teams
            </h2>
            <p className="text-base text-emerald-800/80 dark:text-slate-300">
              Each phase provides artefacts, analytics, and bilingual enablement so executives, auditors, and distributors stay confident.
            </p>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="absolute inset-y-0 left-[12.5%] hidden w-px bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[62.5%] hidden w-px bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent lg:block" aria-hidden />
            {STAGES.map((stage) => (
              <article
                key={stage.name}
                className="rounded-3xl border border-emerald-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <stage.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <h3 className="mt-4 text-lg font-semibold text-emerald-900 dark:text-white">{stage.name}</h3>
                <p className="mt-2 text-sm text-emerald-800/80 dark:text-slate-300">{stage.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Safeguard your reputation across Algeria’s MLM landscape
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, analytics, and field experience converge in Cloud MLM Software’s Algeria blueprint. You gain accountability while giving distributors certainty.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {GUARDS.map((guard) => (
              <div
                key={guard.title}
                className="rounded-3xl border border-emerald-200/70 bg-white/80 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <guard.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <h3 className="mt-3 text-base font-semibold text-emerald-900 dark:text-white">{guard.title}</h3>
                <p className="mt-2 text-sm text-emerald-800/80 dark:text-slate-300">{guard.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-emerald-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(101,163,13,0.35),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Algeria compliance briefcase</h3>
          <p className="mt-3 text-sm text-slate-200">
            Receive AML matrices, foreign exchange policy templates, and regulator-facing reports ready for your legal and finance teams to deploy.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Artefacts</dt>
              <dd className="mt-2 leading-6 text-slate-100">
                Currency control workflows, sanction escalation scripts, and bilingual distributor disclosures.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Refresh cadence</dt>
              <dd className="mt-2 leading-6 text-slate-100">Quarterly reviews, with immediate alerts when Bank of Algeria releases new directives.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-emerald-900 hover:bg-emerald-100">
            <Link href={pricingHref}>
              Explore compliance bundles
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Treasury, compliance, and distributor leaders across Algeria often ask the following.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-emerald-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-emerald-800/80 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-600 via-emerald-500 to-lime-500 px-6 py-16 text-white shadow-lg dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Deliver trustworthy payouts across Algeria’s MLM ecosystem
          </h2>
          <p className="text-base text-emerald-50/90">
            Cloud MLM Software unifies public banks, PSPs, and regional corridors so you lead with clarity and resilience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-emerald-100">
              <Link href={contactHref}>
                Plan your launch
                <ArrowUpRight className="h-4 w-4 text-emerald-600" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              <Link href={demoHref}>Request a live walkthrough</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
