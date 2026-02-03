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
  ArrowRight,
  ArrowUpRight,
  Compass,
  LayoutGrid,
  LifeBuoy,
  Map,
  Radar,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  CurrencyCircleDollar,
  Globe,
  Handshake,
  Lightning,
  SealQuestion,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFeature = {
  title: string;
  summary: string;
  icon: IconType;
};

type GatewayBundle = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type OperationsInsight = {
  title: string;
  detail: string;
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  name: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_FEATURES: HeroFeature[] = [
  {
    title: "Tourism-ready payments",
    summary:
      "Blend PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout with Palau Bank, Bank of Guam, and Pacific POS partners.",
    icon: CurrencyCircleDollar
  },
  {
    title: "AI command centre",
    summary:
      "Predict revenue spikes during dive season, monitor chargebacks, and prioritise support with AI copilots.",
    icon: Radar
  },
  {
    title: "Compliance confidence",
    summary:
      "Audit trails, AML telemetry, and consent logs satisfy Palau Financial Institutions Commission expectations.",
    icon: ShieldCheck
  }
];

const GATEWAY_BUNDLES: GatewayBundle[] = [
  {
    title: "Digital gateway mesh",
    description:
      "Connect the global gateways listed in the legacy content with regional acquirers that understand Micronesian tourism patterns.",
    bullets: [
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout orchestrated in one ledger",
      "Dynamic currency conversion for USD, JPY, KRW, and AUD visitors",
      "AI anomaly detection keeps watch on cross-border fraud indicators"
    ],
    icon: Sparkles
  },
  {
    title: "Bank-direct settlement hub",
    description:
      "Automate payouts through Bank of Guam, BankPacific, and Palau National Treasury with predictable reconciliation.",
    bullets: [
      "ACH, wire, and cash deposits reconciled with automated difference checks",
      "Maker-checker approvals and immutable logs protect treasury integrity",
      "Exports aligned to U.S. GAAP and Palauan statutory reporting"
    ],
    icon: Bank
  },
  {
    title: "Wallet & experiential enablement",
    description:
      "Support mobile wallets, QR codes, and offline capture during remote island activations.",
    bullets: [
      "Offline caching with Braintree tokenisation for low-connectivity areas",
      "QR and NFC-ready checkout for dive shops, eco-resorts, and field pop-ups",
      "SMS confirmations and AI-written follow-ups keep distributors coordinated"
    ],
    icon: Lightning
  },
  {
    title: "Subscription & partner programmes",
    description:
      "Manage memberships, eco-conservation contributions, and recurring coaching with clarity.",
    bullets: [
      "Stripe Billing, Authorize.Net ARB, and 2Checkout subscriptions synced with compensation plans",
      "Tax tagging for Palau’s Green Fee, tourism levies, and corporate incentives",
      "AI dunning workflows recover failed renewals before they affect run-rate"
    ],
    icon: LayoutGrid
  }
];

const OPERATIONS_INSIGHTS: OperationsInsight[] = [
  {
    title: "Marine tourism forecasting",
    detail:
      "AI copilots fuse booking data, climate trends, and distributor orders to predict demand across dive seasons.",
    icon: Waves
  },
  {
    title: "Sustainable development reporting",
    detail:
      "Track ESG commitments, marine conservation contributions, and community impact to strengthen stakeholder trust.",
    icon: Globe
  },
  {
    title: "Bilingual enablement",
    detail:
      "Provide English and Palauan coaching kits, SOPs, and AI-translated support replies to keep field teams aligned.",
    icon: Handshake
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    name: "Foundational discovery",
    description:
      "Gather requirements from finance, compliance, and distributor leadership before integrations begin.",
    outcomes: [
      "Gateway evaluation across PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, and regional banks",
      "Risk and compliance mapping to Palau Financial Institutions Commission directives",
      "AI instrumentation plan covering telemetry, alerts, and executive briefs"
    ],
    icon: Compass
  },
  {
    phase: "02",
    name: "Experience prototyping",
    description:
      "Design enrolment, checkout, payout, and support journeys in collaboration with local champions.",
    outcomes: [
      "White-labeled UX flows with tourism and community programme messaging",
      "Sandbox credentials, webhook catalogues, and automated test cases for each gateway",
      "Field training content translated and AI-augmented for quick adoption"
    ],
    icon: Map
  },
  {
    phase: "03",
    name: "Command-centre launch",
    description:
      "Roll out with live observability, anomaly detection, and hypercare support to keep operations smooth.",
    outcomes: [
      "Dual-run reconciliation with legacy spreadsheets for two settlement cycles",
      "Alerting for chargeback spikes, airline cancellations, or AML triggers",
      "Daily AI-generated summaries for executives and island leaders"
    ],
    icon: LifeBuoy
  },
  {
    phase: "04",
    name: "Optimise & expand",
    description:
      "Extend the blueprint to franchise partners, allied tourism brands, and neighbouring islands.",
    outcomes: [
      "Quarterly optimisation sprints with automation backlog management",
      "Expansion playbooks for Guam, Saipan, Micronesia, and Hawaii corridors",
      "AI insights guiding promotions, conservation initiatives, and inventory planning"
    ],
    icon: ChartLineUp
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways can Cloud MLM Software connect for Palau?",
    answer:
      "We integrate PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout—as listed in the original content—paired with Palauan banking partners and Pacific POS providers."
  },
  {
    question: "How do you manage payments with limited connectivity on outer islands?",
    answer:
      "Offline caching stores transactions securely using Braintree tokenisation. Once connectivity returns, Cloud MLM Software syncs payouts, AML checks, and inventory updates automatically."
  },
  {
    question: "Can AI help us track sustainability commitments alongside payments?",
    answer:
      "Yes. AI copilots correlate payment data, conservation pledges, and ESG targets. Leadership receives dashboards and summaries that keep sustainability at the centre of your operations."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Palau MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Unify Palau’s payment stack with Cloud MLM Software. Orchestrate PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, and regional banks with AI-driven insights.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/palau", locale)
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

type PalauPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function PalauPaymentGatewaysPage({ params }: PalauPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-white to-teal-100 px-6 py-20 shadow-sm dark:border-cyan-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.35),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_45%_88%,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.4),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.35),transparent_50%),radial-gradient(circle_at_45%_88%,rgba(59,130,246,0.3),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:bg-slate-900/60 dark:text-cyan-200">
              <Anchor className="h-4 w-4" aria-hidden />
              Palau payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver ocean-strong payment experiences for Palau’s MLM network
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software unifies PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, and Palauan banking partners into one AI-supervised platform. Launch with tourist-ready checkouts, conservation-conscious reporting, and field tooling that works on every island.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400"
              >
                <Link href={contactHref}>
                  Speak with a Pacific payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-200 bg-white/80 text-cyan-700 hover:bg-cyan-50 dark:border-cyan-500/40 dark:bg-transparent dark:text-cyan-200 dark:hover:bg-cyan-500/10"
              >
                <Link href={demoHref}>Explore the guided AI demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>Browse all payment regions</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.5rem] border border-cyan-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_FEATURES.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-cyan-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <feature.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{feature.summary}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400">
              <Link href={pricingHref}>
                Review Palau implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:text-cyan-200">
            <LayoutGrid className="h-4 w-4" aria-hidden />
            Gateway bundles
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment bundles curated for Palau’s tourism-led economy
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every bundle references the gateways listed in the source content, enhanced with regional partnerships, offline resilience, and AI-ready automation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_BUNDLES.map((bundle) => (
            <article
              key={bundle.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <bundle.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{bundle.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{bundle.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {bundle.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-3.5 w-3.5 text-cyan-500" aria-hidden />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:text-cyan-200">
            <Waves className="h-4 w-4" aria-hidden />
            Operational insights
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI insights crafted for Palau’s marine economy and community programmes
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Keep distributors, conservation partners, and corporate leaders aligned with real-time context and bilingual enablement.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {OPERATIONS_INSIGHTS.map((insight) => (
              <div
                key={insight.title}
                className="rounded-3xl border border-cyan-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <insight.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-cyan-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(45,212,191,0.3),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Palau AI control centre</h3>
          <p className="mt-3 text-sm text-slate-200">
            Monitor payment conversion, tourism bookings, and conservation contributions in one interface. AI-generated summaries keep leadership alert and aligned.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4" aria-hidden />
              <span>Executive briefs summarising performance before each new tour group arrives.</span>
            </li>
            <li className="flex items-start gap-2">
              <Globe className="mt-1 h-4 w-4" aria-hidden />
              <span>Regional snapshots comparing Palau, Guam, and Micronesia operations.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
              <span>Automation hooks that open tasks, notify Slack, or trigger CRM workflows.</span>
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:text-cyan-200">
            <Compass className="h-4 w-4" aria-hidden />
            Delivery journey
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A staged journey that respects Palau’s community ethos and regulatory landscape
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.phase}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-cyan-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-200">
                <span>{stage.phase}</span>
                <stage.icon className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-cyan-500/80" aria-hidden />
                    <span>{outcome}</span>
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
            Palau payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Leaders typically raise the following questions when planning Palau deployments with Cloud MLM Software.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-cyan-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-600 via-emerald-500 to-sky-500 px-6 py-16 text-white shadow-lg dark:border-cyan-500/40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.28),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Palau’s MLM landscape with ocean-grade payments and AI assurance
          </h2>
          <p className="text-base text-cyan-50/90">
            Cloud MLM Software harmonises PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, and regional banking partners. Keep tourism, conservation, and distributor growth in perfect balance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-cyan-700 hover:bg-slate-100 dark:text-cyan-600">
              <Link href={contactHref}>
                Build your Palau launch plan
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

