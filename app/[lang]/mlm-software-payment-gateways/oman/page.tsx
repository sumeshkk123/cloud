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
  BadgeCheck,
  Blocks,
  CalendarCheck,
  ChartArea,
  Compass,
  Globe2,
  Layers3,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Bank,
  ChatsTeardrop,
  ChartLineUp,
  CurrencyCircleDollar,
  Handshake,
  ShieldCheck,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  title: string;
  caption: string;
  description: string;
  icon: IconType;
};

type EcosystemCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Advantage = {
  title: string;
  summary: string;
  icon: IconType;
};

type TimelineStage = {
  step: string;
  headline: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    title: "Unified PSP stack",
    caption: "PayPal · Amazon Pay · Authorize.Net · Stripe · Braintree · Adyen · 2Checkout",
    description:
      "We combine the gateways listed on the legacy site with Oman's go-to payment rails—Thawani, OmanNet, and bank-direct settlement—inside one control plane.",
    icon: CurrencyCircleDollar
  },
  {
    title: "AI observability",
    caption: "Predictive alerts",
    description:
      "AI copilots benchmark conversion, chargebacks, and settlement timing for Muscat, Salalah, and cross-border teams so leaders course-correct rapidly.",
    icon: ChartArea
  },
  {
    title: "Compliance confidence",
    caption: "CBOS-ready controls",
    description:
      "Our workflows respect Central Bank of Oman standards with granular approvals, AML telemetry, and tamper-proof audit trails.",
    icon: ShieldCheck
  }
];

const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    title: "Digital gateways & wallets",
    description:
      "Deliver cashless experiences that international tourists and local distributors trust.",
    bullets: [
      "Stripe, PayPal, Amazon Pay, and 2Checkout orchestrated with Thawani Pay",
      "Adaptive SCA routing aligned to CBOS and GCC cybersecurity guidance",
      "Device fingerprinting keeps returning customers recognised without friction"
    ],
    icon: Sparkles
  },
  {
    title: "Retail & events toolkit",
    description:
      "Support pop-up activations from Muscat to Sohar with persistent uptime and offline resilience.",
    bullets: [
      "Braintree tokenisation, POS-ready SDKs, and receipt mirroring for Arabic/English",
      "Offline cache queues payouts, AML checks, and stock updates until fibre returns",
      "AI-generated shift summaries highlight hot-selling SKUs and coaching moments"
    ],
    icon: Waves
  },
  {
    title: "Bank-direct settlements",
    description:
      "Consolidate commissions from Bank Muscat, NBO, and other regional banking partners with treasury guardrails built in.",
    bullets: [
      "ACH, wire, and OmanNet settlement windows tracked with smart reminders",
      "Dual approvals, maker-checker flows, and immutable logs for auditors",
      "Reconciliation exports align to IFRS and GCC accounting preferences"
    ],
    icon: Bank
  },
  {
    title: "Marketplace & subscriptions",
    description:
      "Power curated product kits, memberships, and recurring coaching programmes with transparent billing.",
    bullets: [
      "Stripe Billing and Authorize.Net recurring profiles synced to Cloud MLM compensation plans",
      "Tax tagging for VAT, GCC unified customs, and free-zone fulfilment",
      "Automated dunning flows that rescue failed renewals before they impact run-rate"
    ],
    icon: TrendUp
  }
];

const ADVANTAGES: Advantage[] = [
  {
    title: "GCC corridor intelligence",
    summary:
      "Monitor Saudi, UAE, Bahrain, and Qatar corridors alongside Oman for distributor-led expansions.",
    icon: Globe2
  },
  {
    title: "Bilingual enablement",
    summary:
      "Field teams receive Arabic/English collateral, AI-translated SOPs, and voice-enabled how-to guides.",
    icon: ChatsTeardrop
  },
  {
    title: "Sustainability metrics",
    summary:
      "Track carbon-conscious shipping and energy-efficient operations to support corporate ESG commitments.",
    icon: ChartLineUp
  }
];

const TIMELINE: TimelineStage[] = [
  {
    step: "01",
    headline: "Discovery & localisation",
    description:
      "Understand your compensation model, distributor footprint, and existing payment contracts before integration work begins.",
    deliverables: [
      "Stakeholder workshops across treasury, compliance, and field leadership",
      "Gateway evaluation for PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Thawani, and OmanNet",
      "Regulatory checklist mapped to CBOS directives and national data regulations"
    ],
    icon: Compass
  },
  {
    step: "02",
    headline: "Experience blueprint",
    description:
      "Co-design onboarding, checkout, and payout journeys with local champions to secure trust at launch.",
    deliverables: [
      "White-labeled enrolment flows with Arabic/English content and regional UX patterns",
      "Sandbox credentials, API contracts, and webhook catalogues for each gateway",
      "Simulated distributor lifecycle covering enrolment, purchases, commissions, and refunds"
    ],
    icon: Layers3
  },
  {
    step: "03",
    headline: "Controlled launch",
    description:
      "Roll out to priority organisations with command-centre telemetry and AI-driven risk alerts.",
    deliverables: [
      "Dual-run reconciliation with legacy spreadsheets for two pay cycles",
      "Alerting for settlement delays, AML hits, or atypical authorisation dip",
      "Hypercare support desk with bilingual agents and AI-generated summaries"
    ],
    icon: CalendarCheck
  },
  {
    step: "04",
    headline: "Optimise & expand",
    description:
      "Extend the blueprint to franchise partners, GCC corridors, and corporate-led programmes.",
    deliverables: [
      "Quarterly performance retros with KPI trend analysis",
      "Automation backlog co-prioritised with finance and operations",
      "Playbooks for entering Saudi Arabia, UAE, and East Africa with similar governance"
    ],
    icon: BadgeCheck
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways does Cloud MLM Software orchestrate for Oman?",
    answer:
      "We integrate PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout—the same platforms listed on the legacy site—alongside regional favourites such as Thawani Pay, OmanNet, and direct bank settlement partners."
  },
  {
    question: "How do you maintain compliance with the Central Bank of Oman?",
    answer:
      "We embed maker-checker approvals, KYC refresh reminders, AML screening, and event logging. Compliance dashboards surface evidence packs that align with CBOS requirements."
  },
  {
    question: "Can AI help my team anticipate demand during tourism seasons?",
    answer:
      "Yes. AI copilots synthesise booking trends, distributor orders, and payment velocity across tourism cycles. They surface promotions, inventory actions, and commission adjustments proactively."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Oman MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch a compliant payment stack in Oman with Cloud MLM Software. Unify PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Thawani, and bank settlements with AI-ready analytics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/oman", locale)
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

type OmanPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function OmanPaymentGatewaysPage({ params }: OmanPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[2.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-orange-100 px-6 py-20 shadow-sm dark:border-amber-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(249,115,22,0.25),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(14,116,144,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(252,211,77,0.3),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.35),transparent_50%),radial-gradient(circle_at_45%_85%,rgba(14,165,233,0.25),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:border-amber-400/40 dark:bg-slate-900/70 dark:text-amber-200">
              <Anchor className="h-4 w-4" aria-hidden />
              Oman payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Scale Oman’s MLM growth with compliant, AI-supervised payments
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software orchestrates PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Thawani, and direct bank rails in one unified operating model. Launch in Oman with tourism-ready experiences, CBOS-approved controls, and AI insights that anticipate demand.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={contactHref}>
                  Talk with an Oman payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-200 bg-white/80 text-amber-800 hover:bg-amber-50 dark:border-amber-500/40 dark:bg-transparent dark:text-amber-200 dark:hover:bg-amber-500/10"
              >
                <Link href={demoHref}>Request an AI-guided demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>View all payment regions</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.5rem] border border-amber-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_METRICS.map((metric) => (
                <div key={metric.title} className="rounded-3xl border border-amber-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <div className="flex items-center gap-3">
                    <metric.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">{metric.title}</h2>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">
                    {metric.caption}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400">
              <Link href={pricingHref}>
                Review Oman implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:border-amber-500/40 dark:text-amber-200">
            <Blocks className="h-4 w-4" aria-hidden />
            Ecosystem blueprint
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Architect an Oman payment ecosystem for distributors, tourists, and corporate buyers
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every gateway referenced in the original content remains available, joined by region-specific payment partners. Each card below shows how Cloud MLM Software operationalises them alongside AI automation and compliance guardrails.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {ECOSYSTEM_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-amber-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <card.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-amber-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:border-amber-500/40 dark:text-amber-200">
            <Globe2 className="h-4 w-4" aria-hidden />
            Strategic differentiators
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Keep Oman leadership, corporate, and field teams fully synchronised
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            AI-enabled dashboards, bilingual enablement, and ESG telemetry ensure every stakeholder has real-time context, from tourism surges to compliance obligations.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {ADVANTAGES.map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-3xl border border-amber-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <advantage.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{advantage.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{advantage.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-amber-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.35),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Oman AI command centre</h3>
          <p className="mt-3 text-sm text-slate-200">
            Monitor cash flow, authorisation performance, and settlement timelines across Oman and GCC corridors. Automated alerts and executive briefs keep leadership proactive.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4" aria-hidden />
              <span>Daily executive memos summarising distributor momentum and treasury exposure.</span>
            </li>
            <li className="flex items-start gap-2">
              <Handshake className="mt-1 h-4 w-4" aria-hidden />
              <span>AI-guided responses for support teams handling payment or compliance queries.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
              <span>Trigger automations that notify Slack, open Jira tickets, or schedule follow-up calls.</span>
            </li>
          </ul>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-200">
            <Link href={demoHref}>
              Experience the live dashboard
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </aside>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:border-amber-500/40 dark:text-amber-200">
            <CalendarCheck className="h-4 w-4" aria-hidden />
            Delivery timeline
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A four-stage motion that keeps Oman launches calm, compliant, and fast
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.step}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-amber-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-300">
                <span>{stage.step}</span>
                <stage.icon className="h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-amber-500/80" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions about Oman payment gateways
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance directors, compliance officers, and distributor councils across Oman typically raise the following points before launch.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-amber-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-600 via-orange-500 to-emerald-500 px-6 py-16 text-white shadow-lg dark:border-amber-500/40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.28),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Oman’s MLM market with future-ready payments and AI-first operations
          </h2>
          <p className="text-base text-white/90">
            Consolidate PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Thawani, and OmanNet within Cloud MLM Software. Empower your teams to deliver resilient, transparent, and compliant growth from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-amber-700 hover:bg-amber-100 dark:text-amber-600">
              <Link href={contactHref}>
                Build your Oman launch plan
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 text-white hover:bg-white/10"
            >
              <Link href={demoHref}>See Cloud MLM Software in action</Link>
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

