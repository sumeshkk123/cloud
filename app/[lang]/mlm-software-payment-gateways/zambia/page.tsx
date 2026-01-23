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
  Compass,
  Globe2,
  Layers,
  Map,
  Radar,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  AirplaneTilt,
  Bank,
  CurrencyCircleDollar,
  Storefront,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  description: string;
  icon: IconType;
};

type LocalPartner = {
  name: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type Step = {
  phase: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Legacy gateways preserved",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen remain orchestrated—exactly as the legacy Zambia page promised.",
    icon: Bank
  },
  {
    label: "Zambia-first experiences",
    description:
      "Microcopy references People’s Democratic Republic of Zambia – ZM terminology while aligning with Bank of Zambia guidance.",
    icon: Compass
  },
  {
    label: "AI insight loops",
    description:
      "AI copilots surface conversion, settlement, FX, and distributor sentiment trends to keep leadership ahead of issues.",
    icon: Sparkles
  }
];

const LOCAL_PARTNERS: LocalPartner[] = [
  {
    name: "Zambia’s banking network",
    focus: "Treasury & settlement",
    detail:
      "Reconcile PSP batches with Zanaco, Stanbic, Absa, and other partners while managing multi-currency operations and audit-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Mobile money ecosystems",
    focus: "Last-mile accessibility",
    detail:
      "MTN Money, Airtel Money, and Zamtel Kwacha integrate with checkout flows so distributors and customers transact how they already prefer.",
    icon: Storefront
  },
  {
    name: "Logistics & marketplace alliances",
    focus: "Omnichannel commerce",
    detail:
      "Coordinate inventory, fulfilment, and delivery updates across Lusaka, Copperbelt, Livingstone, and border corridors.",
    icon: AirplaneTilt
  },
  {
    name: "Renewable & mining verticals",
    focus: "Sector-specialised workflows",
    detail:
      "Support energy cooperatives and mining supply chains with AI-driven compliance, invoicing, and payout data.",
    icon: TrendUp
  }
];

const STEPS: Step[] = [
  {
    phase: "01",
    title: "Discovery & compliance audit",
    description:
      "Map current payment journeys, regulatory obligations, and distributor needs before activating new integrations.",
    bullets: [
      "Audit of PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen usage",
      "Compliance inventory for Bank of Zambia, AML, and data residency policies",
      "Distributor interviews across urban, peri-urban, and rural territories"
    ],
    icon: Globe2
  },
  {
    phase: "02",
    title: "Experience blueprint",
    description:
      "Prototype bilingual, omnichannel flows tuned for mobile money, cards, bank transfers, and recurring subscriptions.",
    bullets: [
      "Checkout journeys referencing People’s Democratic Republic of Zambia terminology",
      "Payout approvals with maker-checker governance and document vaults",
      "Training packs for finance, compliance, and field leaders"
    ],
    icon: Map
  },
  {
    phase: "03",
    title: "Pilot & telemetry",
    description:
      "Launch with AI dashboards covering conversion, settlement timing, FX, and distributor sentiment.",
    bullets: [
      "Variance monitoring between PSP reports and bank settlements",
      "Alerts for chargeback spikes, policy updates, or supply chain delays",
      "Hypercare rituals turning insight into daily action"
    ],
    icon: Radar
  },
  {
    phase: "04",
    title: "Scale & optimisation",
    description:
      "Expand to new regions, sectors, and partnerships while AI keeps leadership aligned.",
    bullets: [
      "Quarterly optimisation sprints with finance and growth leaders",
      "Scenario planning for neighbouring SADC corridors and diaspora support",
      "AI-generated executive summaries with recommended actions"
    ],
    icon: Layers
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are orchestrated for Zambia?",
    answer:
      "Cloud MLM Software unifies PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—the same gateways from the legacy page—alongside Zambia’s banking and mobile money ecosystem."
  },
  {
    question: "How do you stay compliant with Bank of Zambia regulations?",
    answer:
      "We embed AML screening, sanctions checks, maker-checker approvals, and document vaults aligned with Bank of Zambia rules and international partners."
  },
  {
    question: "Can AI help plan for economic shifts or regional expansion?",
    answer:
      "Yes. AI monitors conversion, FX, and distributor health while simulating expansion scenarios into SADC markets or sector-specific programmes."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Zambia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch high-performing MLM payments in Zambia with Cloud MLM Software. Unite PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local partners under AI supervision.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/zambia", locale)
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

type ZambiaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function ZambiaPaymentGatewaysPage({ params }: ZambiaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-cyan-100 px-6 py-20 shadow-sm dark:border-emerald-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.32),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.3),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(37,99,235,0.24),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.33),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(37,99,235,0.28),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-400/40 dark:bg-slate-900/70 dark:text-emerald-200">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Zambia payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Zambia-ready MLM payments backed by AI observability
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Zambia – ZM now
                run through Cloud MLM Software’s AI-optimised control plane. We unite the legacy gateways with
                Zambia’s banking, mobile money, and logistics networks to deliver high-trust experiences.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => (
                <article
                  key={highlight.label}
                  className="rounded-3xl border border-emerald-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <highlight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                    {highlight.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Speak with a Zambia payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200/80 text-emerald-800 hover:bg-white/70 dark:border-emerald-400/40 dark:text-emerald-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="space-y-6">
              <article className="rounded-3xl border border-emerald-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                  Gateway bundle
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen
                </p>
              </article>
              <article className="rounded-3xl border border-emerald-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                  AI observability
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  AI copilots highlight conversion, settlement, and distributor health so finance, compliance, and growth teams stay aligned.
                </p>
              </article>
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={pricingHref}>
                  Review Zambia implementation packs
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <BarChart3 className="h-4 w-4" aria-hidden />
            Local payment fabric
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Unite PSP scale with Zambia’s banking and mobile money rails
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {LOCAL_PARTNERS.map((partner) => (
            <article
              key={partner.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <partner.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{partner.name}</h3>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-200">{partner.focus}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{partner.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Compass className="h-4 w-4" aria-hidden />
            Execution path
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Four steps to Zambia-wide excellence
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {STEPS.map((step) => (
            <article
              key={step.phase}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  {step.phase}
                </span>
                <div>
                  <step.icon className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-slate-500 dark:text-slate-300" aria-hidden />
                    <span>{bullet}</span>
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
            Leadership questions
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI-prepared answers for Zambia finance and compliance teams
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
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400"
          >
            <Link href={contactHref}>
              Build your Zambia launch plan
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
            <Link href={gatewaysHref}>Explore global payment gateways</Link>
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
