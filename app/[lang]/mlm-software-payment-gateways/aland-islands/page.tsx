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
  Anchor,
  ArrowUpRight,
  Compass,
  Gauge,
  Map,
  Waves
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  SealCheck,
  ShieldCheck,
  Signpost
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Corridor = {
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type Step = {
  phase: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  name: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "Settlement latency",
    value: "< 12h",
    detail: "Batch payouts across Åland and mainland Finland clear overnight with automated bank file synchronisation.",
    icon: Gauge
  },
  {
    label: "Supported rails",
    value: "8+",
    detail: "From SEPA instant to Nordic account-to-account and card acquiring partners.",
    icon: Anchor
  },
  {
    label: "Currency handling",
    value: "EUR-first",
    detail: "Treasury teams manage euro settlements with hedging options for SEK exposure.",
    icon: CurrencyCircleDollar
  }
];

const CORRIDORS: Corridor[] = [
  {
    title: "Åland to Finland core banking",
    description:
      "Direct integrations into Ålandsbanken, Nordea, and OP Financial Group keep local distributors funded in their preferred accounts.",
    highlights: [
      "ISO 20022 payment file generation with automated approval chains",
      "Instant IBAN verification and BIC routing validation",
      "Configurable settlement windows mapped to distributor rank"
    ],
    icon: Bank
  },
  {
    title: "Nordic cross-border commerce",
    description:
      "Extend sales programmes into Sweden and mainland Scandinavia while keeping compliance data anchored to the Åland legal entity.",
    highlights: [
      "Dynamic currency conversion rules for EUR/SEK",
      "PSD2-ready strong customer authentication tooling",
      "Localized invoicing templates aligned with Nordic tax regulators"
    ],
    icon: GlobeHemisphereWest
  },
  {
    title: "Tourism & ferry retail channels",
    description:
      "Serve ferry-based duty-free commerce and tourism pop-ups with offline-friendly payment capture.",
    highlights: [
      "Offline receipt caching for maritime networks",
      "Automated reconciliation of onboard POS and e-commerce ledgers",
      "Alerting for cross-jurisdiction VAT and customs declarations"
    ],
    icon: Waves
  }
];

const STEPS: Step[] = [
  {
    phase: "01",
    summary: "Policy anchoring",
    detail:
      "Document financial authorities, co-operative partnerships, and distributor payout policies with our payments architects.",
    icon: Compass
  },
  {
    phase: "02",
    summary: "Connector build",
    detail:
      "Provision sandbox credentials, map data contracts, and establish monitoring thresholds for all Åland and Nordic rails.",
    icon: Map
  },
  {
    phase: "03",
    summary: "Go-live instrumentation",
    detail:
      "Launch phased cohorts with dashboards broadcasting liquidity, exception queues, and distributor satisfaction metrics.",
    icon: Gauge
  },
  {
    phase: "04",
    summary: "Continuous optimisation",
    detail:
      "Expand to seasonal programs, tourism campaigns, and cross-border reseller networks with insight-driven automation.",
    icon: Signpost
  }
];

const PILLARS: Pillar[] = [
  {
    name: "Regulator alignment",
    description:
      "Our compliance pack aligns with Finnish Financial Supervisory Authority expectations and Åland-specific cooperative governance.",
    icon: ShieldCheck
  },
  {
    name: "Treasury efficiency",
    description:
      "Automated reconciliation, euro liquidity planning, and variance tracking deliver end-of-day clarity for finance leaders.",
    icon: SealCheck
  },
  {
    name: "Distributor confidence",
    description:
      "Transparent payout statuses, bilingual notifications, and responsive support keep field teams engaged during every cycle.",
    icon: GlobeHemisphereWest
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can we run one ledger for Åland and Finland-based distributors?",
    answer:
      "Yes. You can operate a unified euro ledger with segmentation by branch, applying distinct taxation or commission rules per geography when required."
  },
  {
    question: "How are ferry and pop-up retail payments handled offline?",
    answer:
      "Transactions captured without connectivity are signed, tokenised, and reconciled once the vessel returns to coverage, with dispute monitoring to protect your margins."
  },
  {
    question: "Do you support bilingual communications for Swedish and Finnish speakers?",
    answer:
      "Notification templates, invoices, and support workflows are bundled in both languages so every distributor receives compliant, human-centred updates."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Åland Islands MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Design a maritime-ready payout stack for Åland Islands networks. Cloud MLM Software orchestrates bank, ferry, and cross-border rails with regulator-approved governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/aland-islands", locale)
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

type AlandIslandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function AlandIslandsPaymentGatewaysPage({
  params
}: AlandIslandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(34,197,247,0.25),transparent_60%),radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.3),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.45),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(34,197,247,0.35),transparent_55%),radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 dark:border-sky-500/40 dark:bg-slate-900/70 dark:text-sky-200">
              <Waves className="h-4 w-4" />
              Åland Islands payment routes
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build a maritime-ready MLM payment network for the Åland Islands
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Cloud MLM Software harmonises Åland, Finnish, and wider Nordic payment rails so your distributors receive reliable, compliant payouts—on land or at sea. Keep treasury teams confident, regulators assured, and field leaders energised with real-time visibility.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                <Link href={contactHref}>
                  Talk to a payment strategist
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200 bg-white/80 text-sky-800 hover:bg-sky-50 dark:border-sky-500/30 dark:bg-transparent dark:text-sky-100 dark:hover:bg-sky-500/10"
              >
                <Link href={demoHref}>Watch the orchestration demo</Link>
              </Button>
            </div>
            <dl className="grid gap-5 sm:grid-cols-3">
              {HERO_SIGNALS.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <signal.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                  <dt className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {signal.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{signal.value}</dd>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-sky-200/60 bg-white/80 p-7 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,247,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.3),transparent_55%)]" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Executive snapshot
            </p>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-200">
              &quot;We consolidated mainland and maritime payouts into a single ledger. With automated reconciliations and regulator-ready reporting, our finance team closes each cycle with total confidence.&quot;
            </p>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">— Cloud MLM Software Nordic delivery partner</p>
            <div className="mt-6 space-y-4 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 text-sm text-slate-700 dark:border-slate-600/50 dark:bg-slate-950/40 dark:text-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Treasury visibility</span>
                <span>Real-time dashboards</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Distributor satisfaction</span>
                <span>+32% after 90 days</span>
              </div>
            </div>
            <Button asChild size="sm" variant="outline" className="mt-6 border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60">
              <Link href={pricingHref}>
                Review rollout packages
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment corridors engineered for Åland growth
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Cloud MLM Software has already powered leading organisations across the Nordics. Choose the corridors that mirror your expansion strategy and let our orchestration layer handle compliance, reporting, and exception workflows.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {CORRIDORS.map((corridor) => (
            <article
              key={corridor.title}
              className="relative flex h-full flex-col gap-5 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-sky-100 via-transparent to-cyan-100 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-sky-500/20 dark:to-cyan-500/20" aria-hidden />
              <corridor.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{corridor.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{corridor.description}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {corridor.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-slate-50/70 py-20 dark:border-slate-800 dark:bg-slate-950/30">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A delivery rhythm built around Nordic precision
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              From discovery to continuous optimisation, every phase is packaged with artefacts, telemetry, and bilingual enablement designed for Åland-based leadership.
            </p>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="absolute inset-y-0 left-[12.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[62.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            {STEPS.map((step) => (
              <article
                key={step.phase}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  <span>{step.phase}</span>
                  <step.icon className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.summary}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Guard the reputation you have built in the Åland Islands
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Compliance, treasury, and distributor experience sit at the centre of Cloud MLM Software’s gateway orchestration. We supply the governance structure—your teams lead with confidence.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.name}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <pillar.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{pillar.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(34,197,247,0.35),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Åland compliance dossier</h3>
          <p className="mt-3 text-sm text-slate-200">
            Policies, PSD2 checklists, and bilingual distributor disclosures are ready for your legal team to adapt. Every update is versioned and sent to your stakeholders.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Included frameworks</dt>
              <dd className="mt-2 leading-6 text-slate-100">
                AML risk matrices, SEPA exception workflows, and treasury approval templates mapped to Åland cooperatives.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Review cadence</dt>
              <dd className="mt-2 leading-6 text-slate-100">Quarterly, with rapid bulletins when Nordic regulators issue new guidance.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-200">
            <Link href={pricingHref}>
              Explore compliance options
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance directors, cooperative boards, and distributor councils often raise the following questions when designing Åland-centred payment strategies.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 px-6 py-16 text-white shadow-lg dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Deliver precise, trusted payouts to every Åland distributor
          </h2>
          <p className="text-base text-sky-50/90">
            Cloud MLM Software translates maritime realities into streamlined payment experiences. Align leadership, finance, and the field with an orchestration engine built for Åland Islands growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Plan your rollout
                <ArrowUpRight className="h-4 w-4 text-sky-600" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              <Link href={demoHref}>See the OMS in action</Link>
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
