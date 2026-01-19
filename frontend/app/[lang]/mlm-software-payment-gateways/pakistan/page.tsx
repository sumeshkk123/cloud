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
  ArrowUpRight,
  BarChart3,
  Broadcast,
  Building2,
  CalendarClock,
  ChartSpline,
  CircuitBoard,
  Goal,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  PhoneCall,
  Robot
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type PaymentTrack = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Insight = {
  title: string;
  detail: string;
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  headline: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    label: "Gateway coverage",
    value: "Global + local",
    description:
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout pair with Pakistan’s Easypaisa, JazzCash, 1LINK, and bank-direct rails.",
    icon: CurrencyCircleDollar
  },
  {
    label: "AI-guided operations",
    value: "Realtime",
    description:
      "AI copilots surface revenue pacing, risk signals, and distributor sentiment so leadership acts before issues escalate.",
    icon: Robot
  },
  {
    label: "Compliance posture",
    value: "SBP-aligned",
    description:
      "Workflows respect State Bank of Pakistan and SECP guidance with dual approvals, AML telemetry, and tamper-proof audit trails.",
    icon: ShieldCheck
  }
];

const PAYMENT_TRACKS: PaymentTrack[] = [
  {
    title: "Wallet-first consumer flows",
    description:
      "Support Pakistan’s mobile-first distributors with seamless wallet and card acceptance.",
    bullets: [
      "Easypaisa and JazzCash connectors orchestrated alongside Stripe and PayPal",
      "Adaptive risk scoring tuned to local behaviour and SBP directives",
      "AI sentiment analysis highlights support trends from wallet payments"
    ],
    icon: PhoneCall
  },
  {
    title: "Gateway federation",
    description:
      "Blend the global gateways listed in the legacy site with domestic acquirers for maximum reach.",
    bullets: [
      "Authorize.Net, Amazon Pay, Braintree, Adyen, 2Checkout, and PayPal in one ledger",
      "1LINK routing with smart fallbacks to ensure uptime even during network volatility",
      "Unified reconciliation exports aligned to IFRS and Pakistani tax schedules"
    ],
    icon: CircuitBoard
  },
  {
    title: "Subscription & B2B billing",
    description:
      "Enable recurring memberships, training packages, and enterprise programmes with transparency.",
    bullets: [
      "Stripe Billing and Authorize.Net recurring profiles integrated with compensation plans",
      "Automated tax tagging for provincial sales tax, FED, and export remittances",
      "Invoice orchestration with bilingual (Urdu/English) PDF templates"
    ],
    icon: Building2
  },
  {
    title: "Field events & retail enablement",
    description:
      "Deliver predictable experiences at in-person rallies, pop-up stores, and community meetups.",
    bullets: [
      "Offline caching with Braintree tokenisation and device fingerprinting",
      "Inventory sync with AI demand forecasts by city, cohort, and plan type",
      "Cash management workflows that reconcile bank deposits to the rupee"
    ],
    icon: Handshake
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "National financial inclusion drive",
    detail:
      "Cloud MLM Software feeds data into AI copilots that monitor regulator initiatives and help you respond with compliant promotions.",
    icon: Broadcast
  },
  {
    title: "Cross-border remittance optimisation",
    detail:
      "Treasury dashboards visualise USD, PKR, SAR, and AED flows so diaspora leaders stay connected to Pakistan expansions.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Distributor empowerment",
    detail:
      "Field apps surface AI-generated coaching, follow-up reminders, and credit scoring to keep teams productive.",
    icon: Goal
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    headline: "Pakistan readiness audit",
    description:
      "We document regulatory, treasury, and go-to-market requirements so every stakeholder aligns before integrations start.",
    deliverables: [
      "Workshops across finance, compliance, product, and field leadership",
      "Gateway scorecards covering PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Easypaisa, JazzCash, and 1LINK",
      "SBP/SECP compliance checklist with data residency notes"
    ],
    icon: ChartLineUp
  },
  {
    phase: "02",
    headline: "Experience and data blueprints",
    description:
      "Prototype enrolment, checkout, payout, and support flows with AI instrumentation built in.",
    deliverables: [
      "Bilingual onboarding journeys with provincial-friendly localisation",
      "Data contracts, sandbox credentials, and automated test suites for each gateway",
      "Customer support playbooks with AI-suggested responses for payment scenarios"
    ],
    icon: CircuitBoard
  },
  {
    phase: "03",
    headline: "Hypercare launch",
    description:
      "Roll out to priority networks with live dashboards, anomaly alerts, and guided remediation steps.",
    deliverables: [
      "Parallel reconciliation vs. legacy systems for three commission cycles",
      "Alerting for authorisation dips, settlement delays, or AML escalations",
      "Daily AI briefings for executives, summarising KPIs and risk posture"
    ],
    icon: BarChart3
  },
  {
    phase: "04",
    headline: "Optimise & expand",
    description:
      "Scale the blueprint to franchise partners, neighbouring markets, and omnichannel programmes.",
    deliverables: [
      "Quarterly optimisation sprints with automation backlog management",
      "Playbooks for GCC, UK, and North American corridors supporting Pakistani diaspora",
      "AI-driven forecasts guiding promotions, inventory, and compensation adjustments"
    ],
    icon: CalendarClock
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are supported for Pakistan MLM programmes?",
    answer:
      "Cloud MLM Software unifies PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Easypaisa, JazzCash, 1LINK, and direct bank settlement. You manage routing, permissions, and reporting from one control plane."
  },
  {
    question: "How do you ensure compliance with the State Bank of Pakistan?",
    answer:
      "We embed KYC refresh cycles, AML monitoring, dual approvals, and evidence packs. Compliance teams access SBP-ready audit trails, consent logs, and automated suspicious activity reports."
  },
  {
    question: "Can AI help rural and urban distributors equally?",
    answer:
      "Yes. AI copilots recommend offline-first playbooks, highlight inventory gaps, and translate support content into Urdu, Punjabi, Sindhi, Pashto, or English depending on the distributor’s preference."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pakistan MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch Pakistan with a unified payment stack. Cloud MLM Software orchestrates PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Easypaisa, JazzCash, and 1LINK alongside AI automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/pakistan", locale)
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

type PakistanPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function PakistanPaymentGatewaysPage({
  params
}: PakistanPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6 py-20 shadow-sm dark:border-emerald-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.35),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_45%_90%,rgba(245,158,11,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.4),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.35),transparent_50%),radial-gradient(circle_at_45%_88%,rgba(245,158,11,0.3),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200">
              <Lightning className="h-4 w-4" aria-hidden />
              Pakistan payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build a resilient, AI-optimised payment fabric for Pakistan
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software unifies PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Easypaisa, JazzCash, and 1LINK under one operating model. Deliver frictionless experiences from Karachi to Islamabad while keeping treasury and compliance teams in control.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Talk to a Pakistan payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200 bg-white/80 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-500/40 dark:bg-transparent dark:text-emerald-200 dark:hover:bg-emerald-500/10"
              >
                <Link href={demoHref}>See the guided AI demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>Browse every payment region</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.5rem] border border-emerald-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_CARDS.map((card) => (
                <div key={card.label} className="rounded-3xl border border-emerald-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <div className="flex items-center gap-3">
                    <card.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                      {card.label}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{card.value}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400">
              <Link href={pricingHref}>
                Review Pakistan implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
              <CircuitBoard className="h-4 w-4" aria-hidden />
              Payment tracks
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment strategies tuned for Pakistan’s mobile-first distributors
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Each track references the global gateways from the legacy site while weaving in local digital wallets, interoperability platforms, and bank-led rails. Every detail is AI-supervised to maintain uptime and compliance.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="border-emerald-200 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-500/40 dark:text-emerald-200 dark:hover:bg-emerald-500/10">
            <Link href={contactHref}>Co-design your launch roadmap</Link>
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {PAYMENT_TRACKS.map((track) => (
            <article
              key={track.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <track.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{track.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{track.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-3.5 w-3.5 text-emerald-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-emerald-200/70 bg-white py-20 dark:border-slate-800 dark:bg-slate-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-100/60 via-transparent to-transparent dark:from-emerald-500/15" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              AI insights keep Pakistan’s payment operations proactive
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              From SBP notices to distributor sentiment, AI synthesises the signals leadership needs to move quickly with confidence.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {INSIGHTS.map((insight) => (
              <article
                key={insight.title}
                className="rounded-3xl border border-emerald-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <insight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
              </article>
            ))}
          </div>
          <div className="rounded-[2.5rem] border border-emerald-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Pakistan AI control centre</h3>
                <p className="text-sm text-slate-200">
                  Monitor conversion performance, wallet adoption, and treasury exposure. AI-generated digests arrive in leadership inboxes every morning with action-ready insights.
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2">
                    <Sparkles className="mt-1 h-4 w-4" aria-hidden />
                    <span>Executive-ready briefs summarising daily KPIs and emerging risks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <PhoneCall className="mt-1 h-4 w-4" aria-hidden />
                    <span>Support copilots drafting multilingual responses for payment escalations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
                    <span>Automation triggers that open Jira tickets or push alerts to Slack & Teams.</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/5 p-6 text-sm text-slate-100">
                <h4 className="text-base font-semibold">Visibility dashboard highlights</h4>
                <ul className="mt-3 space-y-2">
                  <li>• PCI DSS & SBP compliance widgets with live status</li>
                  <li>• Conversion funnels by payment rail and distributor cohort</li>
                  <li>• Forecasted cash requirements for settlements and incentives</li>
                </ul>
                <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={demoHref}>
                    Explore the AI dashboard
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <CalendarClock className="h-4 w-4" aria-hidden />
            Delivery motion
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A delivery approach that keeps Pakistan launches aligned and transparent
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.phase}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                <span>{stage.phase}</span>
                <stage.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-emerald-500/80" aria-hidden />
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
            Pakistan payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            These are the common questions finance heads, compliance officers, and distributor councils ask before launching Cloud MLM Software in Pakistan.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-emerald-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-600 via-emerald-500 to-sky-500 px-6 py-16 text-white shadow-lg dark:border-emerald-500/40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Pakistan’s MLM market with unified, AI-ready payments
          </h2>
          <p className="text-base text-emerald-50/90">
            Cloud MLM Software connects PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Easypaisa, JazzCash, and 1LINK. Give your teams the visibility, compliance, and automation they need to scale sustainably.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-slate-100 dark:text-emerald-600">
              <Link href={contactHref}>
                Build your Pakistan launch plan
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 text-white hover:bg-white/10"
            >
              <Link href={demoHref}>Experience Cloud MLM Software</Link>
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

