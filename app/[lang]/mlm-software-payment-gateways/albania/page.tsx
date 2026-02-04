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
  Landmark,
  Layers3,
  Network,
  Store,
  Timer
} from "lucide-react";
import {
  Bank,
  ChatCircleDots,
  Handshake,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type MarketPoint = {
  title: string;
  detail: string;
};

type Track = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Safeguard = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const INSIGHTS: Insight[] = [
  {
    label: "Average clearing",
    metric: "T+0.5",
    description: "Same-day euro settlements with Bank of Albania reporting exports.",
    icon: Timer
  },
  {
    label: "Partner adapters",
    metric: "10+",
    description: "Integrations across Credins, Raiffeisen, OTP, and top Albanian PSPs.",
    icon: Network
  },
  {
    label: "Territory coverage",
    metric: "12 prefectures",
    description: "Localized payout workflows for Tirana, Durres, and emerging markets.",
    icon: Store
  }
];

const MARKET_POINTS: MarketPoint[] = [
  {
    title: "Euro & lek duality",
    detail: "Retail purchases may originate in ALL or EUR. Treasury rules govern currency conversion and hedging per distributor tier."
  },
  {
    title: "Growing fintech adoption",
    detail: "Bank of Albania open banking reforms and rising mobile-wallet usage demand elastic, API-driven integrations."
  },
  {
    title: "Borderless commerce",
    detail: "Franchisees often sell into Kosovo, North Macedonia, and Italy. Compliance dashboards keep cross-border trade aligned with customs rules."
  }
];

const TRACKS: Track[] = [
  {
    name: "Domestic banking suite",
    summary: "Run payouts through Albanian clearing houses with audit-ready file exchange.",
    bullets: [
      "Automated XML/SEPA file delivery to Credins, Raiffeisen, and OTP",
      "IBAN, NIPT, and KYC validation embedded in enrolment",
      "Daily reconciliation mapped to Bank of Albania reporting templates"
    ],
    icon: Bank
  },
  {
    name: "Regional ecommerce expansion",
    summary: "Unlock digital channels with PSP partnerships spanning the Balkans and EU.",
    bullets: [
      "Integrations with PayLink, Paysera, and Italian acquiring banks",
      "Dynamic currency conversion for EUR/ALL with margin controls",
      "Risk scoring to manage chargebacks and export declarations"
    ],
    icon: Layers3
  },
  {
    name: "Field enablement & cashless drives",
    summary: "Empower distributor leaders with mobile-first cashless onboarding and support.",
    bullets: [
      "Wallet funding via bank, card, or authorised cash-in partners",
      "Geo-fenced promotional payouts tied to regional growth targets",
      "Bi-lingual communications and chatbot triage for field questions"
    ],
    icon: ChatCircleDots
  }
];

const SAFEGUARDS: Safeguard[] = [
  {
    title: "Regulator-ready governance",
    description:
      "Every workflow aligns with Bank of Albania directives, AML frameworks, and data residency requirements for national ID (NIPT) storage.",
    icon: ShieldCheck
  },
  {
    title: "Treasury visibility",
    description:
      "Dashboards surface liquidity levels, currency exposure, and commission anomalies so finance leaders act before bottlenecks emerge.",
    icon: BarChart3
  },
  {
    title: "Field empowerment",
    description:
      "Distributors receive transparent payout statuses, multilingual support, and tailored learning assets to keep retention strong.",
    icon: Handshake
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can we manage EUR and ALL wallets in one system?",
    answer:
      "Yes. Cloud MLM Software lets you run parallel wallets, apply hedging buffers, and report consolidated or split totals depending on your treasury policy."
  },
  {
    question: "How do you address evolving Bank of Albania compliance rules?",
    answer:
      "Our compliance pack tracks regulatory notices, updates sanction lists, and applies maker-checker approvals to sensitive payouts."
  },
  {
    question: "Is multilingual communication available for Albanian and Italian leaders?",
    answer:
      "Notification templates, dashboards, and support scripts ship in Albanian, English, and Italian so every stakeholder stays aligned."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Albania MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy an Albania-focused payment gateway network. Cloud MLM Software coordinates banks, PSPs, and wallets with governance for euro and lek settlements.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/albania", locale)
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

type AlbaniaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AlbaniaPaymentGatewaysPage({ params }: AlbaniaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-orange-200/70 bg-gradient-to-br from-amber-50 via-white to-orange-50 px-6 py-20 text-amber-950 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(249,115,22,0.25),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(251,191,36,0.25),transparent_60%),radial-gradient(circle_at_30%_80%,rgba(234,88,12,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(234,88,12,0.4),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_30%_80%,rgba(249,115,22,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-700 dark:border-orange-500/40 dark:bg-slate-900/70 dark:text-orange-200">
                <Landmark className="h-4 w-4" />
                Albania payment landscape
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Elevate MLM payment operations for Albania’s dynamic market
                </h1>
                <p className="text-lg text-amber-700/80 dark:text-slate-200">
                  Cloud MLM Software synchronises Albanian banking partners, regional PSPs, and multilingual field teams. Deliver fast, transparent payouts that meet regulator expectations while empowering every distributor across Albania and the diaspora.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-orange-600 text-white hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400">
                  <Link href={contactHref}>
                    Map your payout strategy
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-200 bg-white/80 text-orange-800 hover:bg-orange-50 dark:border-orange-500/30 dark:bg-transparent dark:text-orange-100 dark:hover:bg-orange-500/10"
                >
                  <Link href={demoHref}>View the orchestration demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-orange-200/70 bg-white/85 p-7 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.25),transparent_55%)]" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500 dark:text-slate-300">
                Market signal
              </p>
              <p className="mt-4 text-base text-amber-700/80 dark:text-slate-200">
                &quot;Our commission releases now clear in hours. Every Albanian branch manager sees settlement status, compliance notes, and distributor sentiment on a single screen.&quot;
              </p>
              <p className="mt-4 text-xs text-amber-600/80 dark:text-slate-400">— Cloud MLM Software Albania roll-out lead</p>
              <dl className="mt-6 grid gap-5 rounded-2xl border border-orange-200/70 bg-orange-50/60 p-5 text-sm text-amber-800 dark:border-slate-600/50 dark:bg-slate-950/40 dark:text-slate-200">
                {INSIGHTS.map((insight) => (
                  <div key={insight.label}>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-500 dark:text-slate-400">
                      <insight.icon className="h-4 w-4" />
                      {insight.label}
                    </div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-2xl font-semibold">{insight.metric}</span>
                      <span className="text-xs uppercase tracking-[0.3em] text-orange-400/80 dark:text-slate-400">
                        {insight.description}
                      </span>
                    </div>
                  </div>
                ))}
              </dl>
              <Button asChild size="sm" variant="outline" className="mt-6 border-orange-200 text-orange-700 hover:bg-orange-100 dark:border-orange-500/40 dark:text-orange-200 dark:hover:bg-orange-500/10">
                <Link href={pricingHref}>
                  Explore launch packages
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {MARKET_POINTS.map((point) => (
              <article
                key={point.title}
                className="rounded-3xl border border-orange-200/70 bg-white/80 p-6 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <h3 className="text-base font-semibold text-amber-800 dark:text-white">{point.title}</h3>
                <p className="mt-2 text-sm text-amber-700/80 dark:text-slate-300">{point.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose the payment tracks that fit your Albania growth plans
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Cloud MLM Software has already built resilient payout systems for leading Albanian enterprises. Mix and match tracks to align with your distributor personas and market ambitions.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {TRACKS.map((track) => (
            <article
              key={track.name}
              className="relative flex h-full flex-col gap-5 rounded-3xl border border-orange-200/70 bg-gradient-to-br from-white via-white to-orange-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-orange-200 via-transparent to-amber-200 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-orange-500/20 dark:to-amber-500/20" aria-hidden />
              <track.icon className="h-8 w-8 text-orange-600 dark:text-orange-300" />
              <div>
                <h3 className="text-xl font-semibold text-amber-900 dark:text-white">{track.name}</h3>
                <p className="mt-2 text-sm text-amber-700/80 dark:text-slate-300">{track.summary}</p>
              </div>
              <ul className="space-y-3 text-sm text-amber-700/80 dark:text-slate-300">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-orange-200/70 bg-orange-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Implementation cadence tuned for Albania’s regulators and field teams
              </h2>
            <p className="text-base text-amber-700/80 dark:text-slate-300">
              Each project phase ships with artefacts, bilingual enablement, and telemetry so leaders stay ahead of market changes.
            </p>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Readiness assessment",
                detail: "Workshops align commercial policy, AML controls, and distributor personas with your payout vision.",
                icon: Landmark
              },
              {
                title: "Connector configuration",
                detail: "API contracts, approval flows, and exception alerts go live with full audit trails.",
                icon: Network
              },
              {
                title: "Expansion & optimisation",
                detail: "Adopt automation backlog items, accelerate cashless incentives, and extend to diaspora markets.",
                icon: ShieldCheck
              }
            ].map((phase) => (
              <article
                key={phase.title}
                className="rounded-3xl border border-orange-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <phase.icon className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                <h3 className="mt-4 text-lg font-semibold text-amber-900 dark:text-white">{phase.title}</h3>
                <p className="mt-2 text-sm text-amber-700/80 dark:text-slate-300">{phase.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Safeguards that secure your brand reputation
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Transparency and compliance are the hallmarks of Cloud MLM Software’s Albania programme. Gain a defensible audit trail and a field experience that inspires trust.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {SAFEGUARDS.map((guard) => (
              <div
                key={guard.title}
                className="rounded-3xl border border-orange-200/70 bg-white/80 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <guard.icon className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                <h3 className="mt-3 text-base font-semibold text-amber-900 dark:text-white">{guard.title}</h3>
                <p className="mt-2 text-sm text-amber-700/80 dark:text-slate-300">{guard.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-orange-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(249,115,22,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.35),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Albania compliance playbook</h3>
          <p className="mt-3 text-sm text-slate-200">
            Receive AML matrices, sanctions workflows, and regulator briefing templates ready for your legal team to customise.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Artefacts</dt>
              <dd className="mt-2 leading-6 text-slate-100">
                NIPT onboarding sheets, Euro/ALL treasury policies, bilingual distributor disclosures, and data retention guides.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Refresh cadence</dt>
              <dd className="mt-2 leading-6 text-slate-100">Quarterly, with alerts inside your Cloud MLM Software console when new regulations land.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-amber-900 hover:bg-orange-100">
            <Link href={pricingHref}>
              Review licensing bundles
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Leaders often ask about currency handling, regulatory cadence, and multilingual support. Here are quick answers.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-orange-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-amber-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-amber-700/80 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-orange-200/70 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 px-6 py-16 text-white shadow-lg dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Bring clarity and pace to MLM payments across Albania
          </h2>
          <p className="text-base text-amber-50/90">
            From Tirana to diaspora hubs, Cloud MLM Software elevates every commission cycle with compliance-ready, data-rich automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-orange-700 hover:bg-orange-100">
              <Link href={contactHref}>
                Start your deployment
                <ArrowUpRight className="h-4 w-4 text-orange-600" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              <Link href={demoHref}>Request live walkthrough</Link>
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
