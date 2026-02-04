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
  BarChart4,
  Building,
  LineChart,
  Compass,
  Layers,
  Map,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  CurrencyCircleDollar,
  Lightning,
  Receipt,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPillar = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayTrack = {
  name: string;
  narrative: string;
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

const HERO_PILLARS: HeroPillar[] = [
  {
    title: "Unified PSP orchestration",
    description:
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Niubiz, Culqi, Yape, and Plin coexist in one AI-ready control plane.",
    icon: CurrencyCircleDollar
  },
  {
    title: "AI observability",
    description:
      "Copilots monitor conversion, settlement, and sentiment across Lima, Arequipa, Trujillo, and Cusco to keep expansion predictable.",
    icon: LineChart
  },
  {
    title: "Compliance guardrails",
    description:
      "Maker-checker approvals, AML telemetry, and audit trails align with Superintendencia de Banca, Seguros y AFP expectations.",
    icon: ShieldCheck
  }
];

const GATEWAY_TRACKS: GatewayTrack[] = [
  {
    name: "Digital & wallet orchestration",
    narrative:
      "Blend the global gateways from the source content with Peru’s most trusted digital payment channels.",
    bullets: [
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout orchestrated in one ledger",
      "Niubiz, Culqi, Yape, and Plin connectors for domestic acceptance and QR-led journeys",
      "AI-powered routing raises approval rates and flags risky transactions early"
    ],
    icon: Sparkles
  },
  {
    name: "Corporate settlement engine",
    narrative:
      "Automate payouts through BCP, BBVA, Interbank, and Scotiabank with treasury oversight built in.",
    bullets: [
      "ACH, wire, and cash reconciliation with variance alerts and approval workflows",
      "Multi-currency buffers for PEN, USD, and regional corridors",
      "Exports that align with IFRS and Peruvian tax reports"
    ],
    icon: Bank
  },
  {
    name: "Subscription & recurring programmes",
    narrative:
      "Manage memberships, training bundles, and wellness plans with clarity.",
    bullets: [
      "Stripe Billing and Authorize.Net ARB mapped to multi-currency compensation plans",
      "Automated VAT and perception tax tagging for Lima and provinces",
      "Smart dunning workflows recover failed renewals automatically"
    ],
    icon: Receipt
  },
  {
    name: "Field & experiential activations",
    narrative:
      "Support pop-up stores, logistics hubs, and rural field outreach with offline resilience.",
    bullets: [
      "Offline caching with Braintree tokenisation and queue-based sync",
      "QR/NFC-ready checkouts with personalisation for tourism and retail activations",
      "AI-generated shift recaps outline upsells, compliance events, and inventory needs"
    ],
    icon: Lightning
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Regional corridor intelligence",
    detail:
      "Track performance across Lima, the north coast, and Andean regions to adapt promotions, logistics, and compliance support.",
    icon: Map
  },
  {
    title: "Bilingual enablement",
    detail:
      "Spanish and Quechua content packs, plus AI-translated SOPs, keep every distributor informed.",
    icon: UsersThree
  },
  {
    title: "Innovation & ESG metrics",
    detail:
      "Monitor fintech partnerships, sustainability programmes, and social impact KPIs for board-level reporting.",
    icon: ChartLineUp
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    headline: "Peru readiness audit",
    description:
      "Align on compensation models, gateway contracts, and compliance obligations before integration begins.",
    deliverables: [
      "Stakeholder workshops across finance, compliance, operations, and field leadership",
      "Gateway scorecards for PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Niubiz, Culqi, Yape, and Plin",
      "Regulatory checklist aligned with SBS and SUNAT requirements"
    ],
    icon: Compass
  },
  {
    phase: "02",
    headline: "Experience prototyping",
    description:
      "Design enrolment, checkout, payout, and support flows covering onsite and remote use cases.",
    deliverables: [
      "Bilingual onboarding journeys with Spanish/Quechua microcopy",
      "Sandbox credentials, webhook catalogues, and automated tests",
      "Support playbooks with AI copilots summarising cases and recommended actions"
    ],
    icon: Layers
  },
  {
    phase: "03",
    headline: "Command-centre launch",
    description:
      "Roll out with live dashboards, anomaly detection, and hypercare assistance.",
    deliverables: [
      "Parallel reconciliation vs. legacy systems across two commission cycles",
      "Alerting for authorisation drops, settlement delays, and AML escalations",
      "Executive briefs highlighting KPIs, risks, and market opportunities"
    ],
    icon: BarChart4
  },
  {
    phase: "04",
    headline: "Optimise & expand",
    description:
      "Scale the blueprint to franchise partners, new verticals, and neighbouring countries.",
    deliverables: [
      "Quarterly optimisation sprints with automation backlog management",
      "Expansion playbooks covering Chile, Colombia, and Ecuador corridors",
      "AI forecasting for promotions, inventory, and incentive planning"
    ],
    icon: Waves
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways do you orchestrate for Peru?",
    answer:
      "Cloud MLM Software integrates PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Niubiz, Culqi, Yape, Plin, and bank settlements. You manage routing, permissions, and analytics from one interface."
  },
  {
    question: "How do you maintain compliance with SBS and SUNAT?",
    answer:
      "We embed AML screening, dual approvals, audit-ready evidence packs, and tax tagging so finance and compliance teams stay confident during reviews."
  },
  {
    question: "Can AI help bilingual support teams stay coordinated?",
    answer:
      "Yes. AI copilots translate, summarise, and propose responses in Spanish and Quechua, ensuring every customer interaction stays on brand and in compliance."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Peru MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch Peru’s MLM payment stack with Cloud MLM Software. Unify PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Niubiz, Culqi, Yape, and Plin under AI supervision.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/peru", locale)
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

type PeruPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function PeruPaymentGatewaysPage({ params }: PeruPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-orange-200/70 bg-gradient-to-br from-orange-50 via-white to-amber-100 px-6 py-20 shadow-sm dark:border-orange-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.35),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(251,191,36,0.3),transparent_55%),radial-gradient(circle_at_45%_88%,rgba(56,189,248,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(249,115,22,0.4),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(251,191,36,0.35),transparent_50%),radial-gradient(circle_at_45%_88%,rgba(56,189,248,0.3),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 dark:border-orange-500/40 dark:bg-slate-900/60 dark:text-orange-200">
              <Building className="h-4 w-4" aria-hidden />
              Peru payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate Peru’s MLM payments with AI-ready confidence
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software unifies PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Niubiz, Culqi, Yape, and Plin into a single platform. Deliver bilingual journeys, satisfied regulators, and predictive insight for every region.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-orange-600 text-white hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
              >
                <Link href={contactHref}>
                  Talk to a Peru payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-200 bg-white/80 text-orange-700 hover:bg-orange-50 dark:border-orange-500/40 dark:bg-transparent dark:text-orange-200 dark:hover:bg-orange-500/10"
              >
                <Link href={demoHref}>Explore the AI-guided demo</Link>
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
          <aside className="rounded-[2.5rem] border border-orange-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-orange-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <pillar.icon className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pillar.description}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-orange-500 dark:hover:bg-orange-400">
              <Link href={pricingHref}>
                Review Peru implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 dark:border-orange-500/40 dark:text-orange-200">
            <Sparkles className="h-4 w-4" aria-hidden />
            Gateway tracks
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment tracks that align with Peru’s omnichannel distributors
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each track merges the gateways listed in the original content with Peru’s leading PSPs and wallets, adding AI automation and compliance guardrails.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_TRACKS.map((track) => (
            <article
              key={track.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-orange-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <track.icon className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{track.name}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{track.narrative}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-3.5 w-3.5 text-orange-500" aria-hidden />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 dark:border-orange-500/40 dark:text-orange-200">
            <Map className="h-4 w-4" aria-hidden />
            Strategic insights
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI insights crafted for Peru’s regional leadership and field teams
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Give every stakeholder a clear view of performance, compliance, and innovation initiatives.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {INSIGHTS.map((insight) => (
              <div
                key={insight.title}
                className="rounded-3xl border border-orange-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <insight.icon className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-orange-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.3),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Peru AI command centre</h3>
          <p className="mt-3 text-sm text-slate-200">
            Monitor conversion, support workloads, and compliance posture across Peru. AI-generated summaries keep executives proactive.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4" aria-hidden />
              <span>Executive briefs summarising KPIs, risks, and regional highlights.</span>
            </li>
            <li className="flex items-start gap-2">
              <UsersThree className="mt-1 h-4 w-4" aria-hidden />
              <span>Support copilots deliver Spanish/Quechua responses with context.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
              <span>Automation triggers create tasks, notify Slack, or update CRM workflows.</span>
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
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 dark:border-orange-500/40 dark:text-orange-200">
            <BarChart4 className="h-4 w-4" aria-hidden />
            Delivery timeline
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A delivery plan that keeps Peru’s leadership calm, compliant, and fast-moving
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.phase}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-orange-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-200">
                <span>{stage.phase}</span>
                <stage.icon className="h-4 w-4 text-orange-600 dark:text-orange-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-orange-500/80" aria-hidden />
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
            Peru payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance leaders, compliance officers, and distributor councils ask the following questions when planning a Peru launch with Cloud MLM Software.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-orange-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-orange-200/70 bg-gradient-to-br from-orange-600 via-amber-500 to-emerald-500 px-6 py-16 text-white shadow-lg dark:border-orange-500/40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.28),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Peru’s MLM market with unified, AI-ready payments
          </h2>
          <p className="text-base text-white/90">
            Cloud MLM Software connects PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Niubiz, Culqi, Yape, and Plin. Empower your teams with resilience, insights, and regulator-ready governance from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-orange-700 hover:bg-slate-100 dark:text-orange-600">
              <Link href={contactHref}>
                Build your Peru launch plan
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

