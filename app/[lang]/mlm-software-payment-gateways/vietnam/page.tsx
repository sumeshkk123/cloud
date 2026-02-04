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
  BadgeCheck,
  BarChart3,
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
  ChatsTeardrop,
  CurrencyCircleDollar,
  Handshake,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayCard = {
  label: string;
  insight: string;
  detail: string;
  icon: IconType;
};

type LocalRail = {
  name: string;
  focus: string;
  summary: string;
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
    title: "Global gateway command centre",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen run inside one orchestrated stack for Vietnam, preserving the coverage promised on the legacy page.",
    icon: Bank
  },
  {
    title: "Vietnam-first experience",
    description:
      "Copy, UX patterns, and approvals reflect the realities of People’s Democratic Republic of Vietnam – VN including regional regulations and cultural nuances.",
    icon: Handshake
  },
  {
    title: "AI telemetry always on",
    description:
      "AI copilots watch conversion, settlement timing, FX pressure, and distributor sentiment, sending action briefs to leadership daily.",
    icon: Sparkles
  }
];

const GATEWAY_CARDS: GatewayCard[] = [
  {
    label: "Unified PSP bundle",
    insight:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen",
    detail:
      "Gateway health scores rank authorisation rates, dispute posture, and settlement timing so finance stays proactive.",
    icon: ShieldCheck
  },
  {
    label: "Recurring revenue",
    insight: "Autoship + subscription-ready",
    detail:
      "Tokenised storage keeps recurring orders secure while AI monitors lapse risk across distributor tiers.",
    icon: Layers
  },
  {
    label: "Cross-border reach",
    insight: "ASEAN + global corridors",
    detail:
      "Benchmark Vietnam flows against Singapore, Thailand, and Malaysia to plan expansion confidently.",
    icon: BarChart3
  },
  {
    label: "Field mobility",
    insight: "Offline + QR + super-apps",
    detail:
      "Mobile-ready journeys plug into MoMo, ZaloPay, Viettel Money, and cash-to-digital routes without losing compliance.",
    icon: AirplaneTilt
  }
];

const LOCAL_RAILS: LocalRail[] = [
  {
    name: "MoMo, ZaloPay, Viettel Money",
    focus: "Super-app wallets",
    summary:
      "Deliver instant wallet payments with AI evaluating approval rates and chargeback exposure across urban and provincial regions.",
    icon: TrendUp
  },
  {
    name: "Napass & local card schemes",
    focus: "Card acquiring",
    summary:
      "Route card transactions through Napas and banking partners while keeping dual approvals for refunds and commissions.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Vietcombank, BIDV, Techcombank",
    focus: "Treasury & settlement",
    summary:
      "Reconcile PSP batches with domestic bank settlement files using AI variance detection and IFRS-aligned exports.",
    icon: Bank
  },
  {
    name: "Logistics & marketplace alliances",
    focus: "Fulfilment + omnichannel",
    summary:
      "Integrate e-commerce operators and last-mile partners so inventory, tax receipts, and commissions stay synced nationwide.",
    icon: Map
  }
];

const STEPS: Step[] = [
  {
    phase: "01",
    title: "Strategy & compliance mapping",
    description:
      "Gather insights from finance, compliance, and distributor leadership before we touch any credentials.",
    bullets: [
      "Audit existing PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen usage",
      "Catalogue regulatory obligations from the State Bank of Vietnam and data residency policies",
      "Document field and online payment journeys to preserve strengths while modernising gaps"
    ],
    icon: Globe2
  },
  {
    phase: "02",
    title: "Experience and enablement blueprint",
    description:
      "Prototype bilingual journeys with AI-authored microcopy referencing People’s Democratic Republic of Vietnam terminology.",
    bullets: [
      "Checkout flows tuned for wallets, cards, bank transfer, and cash collection",
      "Payout approvals with maker-checker controls and evidence logging",
      "Training packs for distributors, finance teams, and support agents"
    ],
    icon: BadgeCheck
  },
  {
    phase: "03",
    title: "Pilot & telemetry activation",
    description:
      "Launch with AI dashboards covering conversion, settlement timing, dispute posture, and regional adoption.",
    bullets: [
      "Variance monitoring between PSP reports and bank settlements",
      "Alerts for FX volatility, refund spikes, or compliance exceptions",
      "Daily hypercare stand-ups to translate insights into action"
    ],
    icon: Radar
  },
  {
    phase: "04",
    title: "Scale & optimisation",
    description:
      "Expand into new verticals, partnerships, and ASEAN corridors while AI keeps leadership briefed.",
    bullets: [
      "Quarterly optimisation sprints with finance and growth stakeholders",
      "Scenario planning for Cambodia, Laos, and cross-border tourism flows",
      "Executive summaries prepared by AI for rapid decision cycles"
    ],
    icon: TrendUp
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are orchestrated for Vietnam?",
    answer:
      "Cloud MLM Software unifies PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—exactly as the legacy page lists—while layering in MoMo, ZaloPay, Viettel Money, Napas, and domestic banking partners."
  },
  {
    question: "How do you manage compliance for Vietnam – VN?",
    answer:
      "We embed State Bank guidance, AML screening, and dual-approval processes. AI maintains document vaults and produces audit-ready evidence packs automatically."
  },
  {
    question: "Can AI help with regional expansion planning?",
    answer:
      "Yes. AI benchmarks Vietnam performance against other ASEAN markets, highlights corridor opportunities, and simulates cashflow or incentive impacts before you launch."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Vietnam MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch high-performing MLM payments in Vietnam with Cloud MLM Software. Unite PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local wallets with AI supervision.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/vietnam", locale)
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

type VietnamPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function VietnamPaymentGatewaysPage({ params }: VietnamPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-white to-emerald-100 px-6 py-20 shadow-sm dark:border-cyan-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(6,182,212,0.32),transparent_55%),radial-gradient(circle_at_88%_18%,rgba(16,185,129,0.3),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(37,99,235,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(6,182,212,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(37,99,235,0.28),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-400/40 dark:bg-slate-900/70 dark:text-cyan-200">
              <Globe2 className="h-4 w-4" aria-hidden />
              Vietnam payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Vietnam-ready MLM payment journeys powered by AI
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Vietnam – VN
                evolve here. Cloud MLM Software modernises the legacy gateway list with Vietnam’s wallets,
                banks, and AI insights so distributors and customers experience effortless trust.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400"
              >
                <Link href={contactHref}>
                  Speak with a Vietnam payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-200/80 text-cyan-800 hover:bg-white/70 dark:border-cyan-400/40 dark:text-cyan-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-cyan-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <item.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="space-y-6">
              {GATEWAY_CARDS.map((card) => (
                <article
                  key={card.label}
                  className="rounded-3xl border border-cyan-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <card.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                    {card.label}
                  </p>
                  <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{card.insight}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.detail}</p>
                </article>
              ))}
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400"
              >
                <Link href={pricingHref}>
                  Review Vietnam implementation packs
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Local payment fabric
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Pair global PSPs with Vietnam’s trusted rails
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {LOCAL_RAILS.map((rail) => (
            <article
              key={rail.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <rail.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{rail.name}</h3>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-200">{rail.focus}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{rail.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Radar className="h-4 w-4" aria-hidden />
            Execution path
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Four steps to Vietnamese market excellence
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
            Vietnam leadership questions
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI-prepared answers for finance, compliance, and growth teams
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
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400"
          >
            <Link href={contactHref}>
              Build your Vietnam launch plan
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
