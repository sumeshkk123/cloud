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
  title: string;
  detail: string;
  icon: IconType;
};

type LocalPartner = {
  name: string;
  focus: string;
  description: string;
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
    title: "Legacy gateway continuity",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen operate inside one AI-supervised stack, preserving the legacy Zimbabwe promise.",
    icon: Bank
  },
  {
    title: "Zim-first experiences",
    detail:
      "UX, copy, and approvals reference People’s Democratic Republic of Zimbabwe – ZW terminology while aligning with RBZ guidance.",
    icon: Compass
  },
  {
    title: "AI-driven foresight",
    detail:
      "AI copilots watch conversion, settlement, FX, and distributor sentiment trends to keep leadership proactive.",
    icon: Sparkles
  }
];

const LOCAL_PARTNERS: LocalPartner[] = [
  {
    name: "RBZ-aligned banking partners",
    focus: "Treasury & settlement",
    description:
      "Reconcile PSP batches with FBC, CBZ, Stanbic, and other banks while managing USD, ZiG, and multi-currency flows.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Mobile money & super-apps",
    focus: "Everyday access",
    description:
      "EcoCash, OneMoney, and Telecash integrate with checkout journeys so distributors and customers transact instantly.",
    icon: Storefront
  },
  {
    name: "Logistics & retail alliances",
    focus: "Omnichannel fulfilment",
    description:
      "Coordinate inventory and deliveries across Harare, Bulawayo, Victoria Falls, and border hubs with AI status alerts.",
    icon: AirplaneTilt
  },
  {
    name: "Mining & agriculture programmes",
    focus: "Sector enablement",
    description:
      "Support mining supply chains and agricultural cooperatives with compliance-ready payouts and procurement workflows.",
    icon: TrendUp
  }
];

const STEPS: Step[] = [
  {
    phase: "01",
    title: "Discovery & compliance inventory",
    description:
      "Interview finance, compliance, and field leaders to capture today’s payment workflows and constraints.",
    bullets: [
      "Audit of PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen usage",
      "Regulatory inventory for Reserve Bank of Zimbabwe directives and data residency",
      "Distributor journey mapping across urban, peri-urban, and rural territories"
    ],
    icon: Globe2
  },
  {
    phase: "02",
    title: "Experience design & localisation",
    description:
      "Prototype bilingual flows referencing People’s Democratic Republic of Zimbabwe language with AI-assisted microcopy.",
    bullets: [
      "Checkout experiences for mobile money, bank transfers, cards, and recurring orders",
      "Payout approvals with maker-checker controls and document vaults",
      "Training modules for finance, compliance, and distributor leaders"
    ],
    icon: Map
  },
  {
    phase: "03",
    title: "Pilot & telemetry",
    description:
      "Launch a controlled cohort with AI dashboards covering conversion, settlement timings, FX swings, and sentiment.",
    bullets: [
      "Variance monitoring between PSP reports and RBZ-aligned bank settlements",
      "Alerts for chargeback spikes, policy updates, or supply chain delays",
      "Hypercare rituals that transform insight into daily improvements"
    ],
    icon: Radar
  },
  {
    phase: "04",
    title: "Scale & optimisation",
    description:
      "Expand to new sectors and regions while AI keeps leadership aligned on risk and opportunity.",
    bullets: [
      "Quarterly optimisation sprints for finance and growth stakeholders",
      "Scenario planning for SADC corridors and diaspora-backed growth programmes",
      "Executive summaries produced by AI with prioritised actions"
    ],
    icon: Layers
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are orchestrated for Zimbabwe?",
    answer:
      "Cloud MLM Software unifies PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen, while integrating with Zimbabwe’s banking, mobile money, and logistics networks."
  },
  {
    question: "How do you stay compliant with Reserve Bank of Zimbabwe expectations?",
    answer:
      "We embed AML screening, sanctions checks, maker-checker approvals, and document vaults aligned with RBZ guidance and international partner requirements."
  },
  {
    question: "Can AI help navigate currency changes or economic shifts?",
    answer:
      "Yes. AI forecasts FX impact, settlement timing, and distributor sentiment shifts, enabling leadership to adjust pricing, incentives, and logistics proactively."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Zimbabwe MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch resilient MLM payments in Zimbabwe with Cloud MLM Software. Unite PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local partners with AI intelligence.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/zimbabwe", locale)
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

type ZimbabwePaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function ZimbabwePaymentGatewaysPage({ params }: ZimbabwePaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-purple-200/70 bg-gradient-to-br from-purple-50 via-white to-emerald-100 px-6 py-20 shadow-sm dark:border-purple-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(168,85,247,0.32),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.3),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(37,99,235,0.24),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(37,99,235,0.28),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 dark:border-purple-400/40 dark:bg-slate-900/70 dark:text-purple-200">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Zimbabwe payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Zimbabwe’s MLM payments, unified with AI assurance
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Zimbabwe – ZW are
                modernised here. Cloud MLM Software keeps the legacy gateway bundle while tailoring for RBZ
                compliance, mobile money ubiquity, and sector-specialised growth.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-purple-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <highlight.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" aria-hidden />
                  <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                    {highlight.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{highlight.detail}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-purple-600 text-white hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400"
              >
                <Link href={contactHref}>
                  Talk with a Zimbabwe payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-200/80 text-purple-800 hover:bg-white/70 dark:border-purple-400/40 dark:text-purple-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="space-y-6">
              <article className="rounded-3xl border border-purple-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-200">
                  Gateway bundle
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen
                </p>
              </article>
              <article className="rounded-3xl border border-purple-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-200">
                  AI observability
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  AI copilots surface conversion, settlement timing, FX exposure, and distributor sentiment so leadership can adjust in realtime.
                </p>
              </article>
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-purple-500 dark:hover:bg-purple-400"
              >
                <Link href={pricingHref}>
                  Review Zimbabwe implementation packs
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
            Pair global PSPs with Zimbabwe’s financial DNA
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {LOCAL_PARTNERS.map((partner) => (
            <article
              key={partner.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-purple-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <partner.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{partner.name}</h3>
                <p className="text-sm font-medium text-purple-700 dark:text-purple-200">{partner.focus}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{partner.description}</p>
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
            Four phases to Zimbabwe-wide scale
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
            AI-prepared answers for Zimbabwe finance and compliance teams
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
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-purple-500 dark:hover:bg-purple-400"
          >
            <Link href={contactHref}>
              Build your Zimbabwe launch plan
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
