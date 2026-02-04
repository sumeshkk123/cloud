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
  Globe2,
  LineChart,
  Radar,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  Storefront,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  title: string;
  description: string;
  icon: IconType;
};

type Signal = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type LocalPartner = {
  name: string;
  focus: string;
  details: string;
  icon: IconType;
};

type CharterItem = {
  phase: string;
  title: string;
  narrative: string;
  highlights: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    title: "Global PSP bundle secured",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen operate inside one command centre, exactly as the legacy Venezuela page listed.",
    icon: Bank
  },
  {
    title: "Bolívar + USD optionality",
    description:
      "Price, collect, and settle across bolívar, USD, and stable-value corridors with AI recalculating FX exposure in real time.",
    icon: CurrencyCircleDollar
  },
  {
    title: "AI resilience alerts",
    description:
      "Machine intelligence watches settlement delays, chargeback swings, and distributor churn, surfacing briefings to treasury and growth leaders.",
    icon: Sparkles
  }
];

const SIGNALS: Signal[] = [
  {
    title: "Economic volatility guardrails",
    summary:
      "Keep compensation and payouts steady despite currency fluctuations and policy updates.",
    bullets: [
      "Dual-ledger support for bolívar and USD settlements",
      "Automated variance monitoring against Central Bank of Venezuela circulars",
      "Predictive alerts before FX, inflation, or regulatory shifts hit operations"
    ],
    icon: ShieldCheck
  },
  {
    title: "Omnichannel revenue flows",
    summary:
      "Blend e-commerce, field distribution, and marketplace activations across the country.",
    bullets: [
      "Checkout orchestration with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen",
      "Marketplace integrations that respect local tax reporting and invoice requirements",
      "Mobile-first experiences tuned for Caracas, Maracaibo, Valencia, and emerging hubs"
    ],
    icon: BarChart3
  },
  {
    title: "AI-supported leadership decisions",
    summary:
      "Equip executives with context-rich summaries that unite finance, compliance, and growth trends.",
    bullets: [
      "Daily digests covering conversion, settlement, and distributor retention trends",
      "Scenario planning for product launches or territory expansion",
      "Evidence packs ready for auditors, investors, and banking partners"
    ],
    icon: LineChart
  }
];

const LOCAL_PARTNERS: LocalPartner[] = [
  {
    name: "Banco de Venezuela & Banesco",
    focus: "Acquiring + settlement",
    details:
      "Synchronise payout calendars, FX conversions, and treasury controls across leading Venezuelan banking partners with AI-validated reconciliations.",
    icon: Bank
  },
  {
    name: "PagoMóvil, Zinli, Reserve wallets",
    focus: "Instant payments & mobile experiences",
    details:
      "Provide distributors and customers with instant payment options that match everyday behaviour, while routing data back into compensation analytics.",
    icon: Storefront
  },
  {
    name: "Logistics & marketplace alliances",
    focus: "Fulfilment & omnichannel",
    details:
      "Integrate e-commerce and last-mile partners so product availability, tax documentation, and commission splits stay aligned across regions.",
    icon: UsersThree
  }
];

const CHARTER: CharterItem[] = [
  {
    phase: "01",
    title: "Discovery & regulatory mapping",
    narrative:
      "Understand how your teams collect, reconcile, and report today, then layer in Venezuelan regulatory expectations.",
    highlights: [
      "Assessment of existing PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen usage",
      "Mapping of bolívar/USD cashflows and current treasury controls",
      "Regulatory checklist aligned to SUDEBAN updates and data residency requirements"
    ],
    icon: Globe2
  },
  {
    phase: "02",
    title: "Experience blueprint",
    narrative:
      "Prototype journeys for urban hubs, distributor networks, and cross-border buyers with localized messaging.",
    highlights: [
      "Checkout messaging referencing People’s Democratic Republic of Venezuela – VE regulatory language",
      "Autoship, marketplace, and field sales workflows ready for online/offline transitions",
      "AI-authored training collateral for finance, compliance, and field leadership"
    ],
    icon: TrendUp
  },
  {
    phase: "03",
    title: "Pilot & telemetry",
    narrative:
      "Launch a controlled cohort with AI dashboards tracking payment health, FX drift, and distributor satisfaction.",
    highlights: [
      "Alerting for settlement delays, chargeback anomalies, or policy shifts",
      "Variance analysis between bank settlement files and PSP reports",
      "Hypercare stand-ups that turn AI insights into daily actions"
    ],
    icon: Radar
  },
  {
    phase: "04",
    title: "Scale & optimisation",
    narrative:
      "Expand to new regions, products, and partner channels while maintaining compliance and performance benchmarks.",
    highlights: [
      "Quarterly optimisation sprints prioritised with leadership",
      "Scenario planning for entering Colombia, Panama, or Caribbean corridors",
      "Automated executive summaries keeping decision-makers aligned"
    ],
    icon: UsersThree
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are enabled for Venezuela?",
    answer:
      "Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—the exact gateways listed on the legacy site—alongside local banks, PagoMóvil, Zinli, and partner wallets."
  },
  {
    question: "How do you handle Venezuela’s regulatory and FX landscape?",
    answer:
      "We embed SUDEBAN guidance, AML controls, dual-ledger currency support, and AI variance monitoring. Finance teams receive alerts and evidence packs before auditors or banks request them."
  },
  {
    question: "Can AI help teams operate during rapid economic shifts?",
    answer:
      "Yes. AI predicts when FX rates, settlement timing, or distributor sentiments change so leadership can adjust incentives, pricing, and inventory plans proactively."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Venezuela MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Stabilise MLM payment journeys in Venezuela with Cloud MLM Software. Unite PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local partners with AI-driven resilience.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/venezuela", locale)
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

type VenezuelaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function VenezuelaPaymentGatewaysPage({
  params
}: VenezuelaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-rose-200/70 bg-gradient-to-br from-rose-50 via-white to-indigo-100 px-6 py-20 shadow-sm dark:border-rose-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(244,63,94,0.3),transparent_55%),radial-gradient(circle_at_85%_12%,rgba(37,99,235,0.28),transparent_60%),radial-gradient(circle_at_45%_85%,rgba(99,102,241,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(244,63,94,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.32),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(99,102,241,0.3),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:border-rose-400/40 dark:bg-slate-900/70 dark:text-rose-200">
              <Globe2 className="h-4 w-4" aria-hidden />
              Venezuela payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Resilient MLM payments for Venezuela’s bold growth
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Venezuela – VE
                stay resilient through our AI-supervised control plane. The original gateway list—PayPal,
                Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—now works alongside local
                partners, real-time FX insights, and omnichannel experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                <Link href={contactHref}>
                  Talk with a Venezuela payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-rose-200/80 text-rose-800 hover:bg-white/70 dark:border-rose-400/40 dark:text-rose-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-5">
              {HERO_METRICS.map((metric) => (
                <article
                  key={metric.title}
                  className="rounded-3xl border border-rose-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <metric.icon className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{metric.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </article>
              ))}
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                <Link href={pricingHref}>
                  Review Venezuela implementation packs
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:border-indigo-500/40 dark:text-indigo-200">
            <LineChart className="h-4 w-4" aria-hidden />
            Market intelligence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Translate market signals into steady performance
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each card below reimagines the legacy “availability” text as practical, AI-enabled plays for
            finance, compliance, and growth leadership in Venezuela.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {SIGNALS.map((signal) => (
            <article
              key={signal.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <signal.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{signal.summary}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {signal.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-indigo-500 dark:text-indigo-300" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:border-rose-500/40 dark:text-rose-200">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Payment fabric
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Local partners that keep revenue and commissions flowing
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {LOCAL_PARTNERS.map((partner) => (
            <article
              key={partner.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-rose-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <partner.icon className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{partner.name}</h3>
                <p className="text-sm font-medium text-rose-700 dark:text-rose-200">{partner.focus}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{partner.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Radar className="h-4 w-4" aria-hidden />
            Execution charter
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A four-phase path to resilient Venezuela operations
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {CHARTER.map((item) => (
            <article
              key={item.phase}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  {item.phase}
                </span>
                <div>
                  <item.icon className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.narrative}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-slate-500 dark:text-slate-300" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Sparkles className="h-4 w-4" aria-hidden />
            Venezuela leadership questions
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI-backed answers for finance, compliance, and growth teams
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-rose-500 dark:hover:bg-rose-400"
          >
            <Link href={contactHref}>
              Build your Venezuela launch plan
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-slate-200 text-slate-800 hover:bg-white/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/70"
          >
            <Link href={pricingHref}>Compare implementation packages</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-slate-200 text-slate-800 hover:bg-white/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/70"
          >
            <Link href={gatewaysHref}>Explore all payment gateways</Link>
          </Button>
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
