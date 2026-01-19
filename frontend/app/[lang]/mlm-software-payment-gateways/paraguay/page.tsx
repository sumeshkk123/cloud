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
  ChartNoAxesColumn,
  Globe2,
  LayoutPanelLeft,
  Map,
  ShieldCheck,
  Sparkles,
  Target,
  Zap
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

type HeroHighlight = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type GatewayFocus = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type StrategicSignal = {
  title: string;
  detail: string;
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

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Gateway stack",
    value: "Global + local",
    detail:
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Bancard, Billetera Personal, and Dinero Express unified in one ledger.",
    icon: CurrencyCircleDollar
  },
  {
    label: "AI operations",
    value: "Realtime",
    detail:
      "Copilots surface conversion trends, tax exposure, and distributor sentiment for Asunción, Ciudad del Este, and regional hubs.",
    icon: ChartNoAxesColumn
  },
  {
    label: "Compliance",
    value: "SEPRELAD-ready",
    detail:
      "Maker-checker approvals, AML analytics, and audit reports align with Paraguay’s central bank and SEPRELAD expectations.",
    icon: ShieldCheck
  }
];

const GATEWAY_FOCUS_LIST: GatewayFocus[] = [
  {
    title: "Digital commerce mesh",
    description:
      "Combine the global gateways from the original site with Paraguay’s most trusted rails.",
    bullets: [
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout orchestrated in one control plane",
      "Bancard routing plus Billetera Personal and Dinero Express wallet integrations",
      "AI risk scoring tuned to local shopping behaviour and cross-border purchases"
    ],
    icon: Sparkles
  },
  {
    title: "Corporate settlement engine",
    description:
      "Automate payouts through Banco Itaú, Banco Continental, Vision Banco, and other partners with treasury-grade oversight.",
    bullets: [
      "ACH, wire, and cash reconciliation with variance alerts and audit trails",
      "Multi-currency buffers for PYG, USD, and BRL corridors",
      "Treasury dashboards align with IFRS and Paraguayan tax rules"
    ],
    icon: Bank
  },
  {
    title: "Subscription & recurring revenue",
    description:
      "Support memberships, training plans, and professional services with predictable billing.",
    bullets: [
      "Stripe Billing and Authorize.Net ARB mapped to multi-currency compensation",
      "Automated ITA (Impuesto a la Renta) tagging and VAT calculations",
      "Dunning automation recovers failed renewals before they impact run-rate"
    ],
    icon: Receipt
  },
  {
    title: "Field & experiential activations",
    description:
      "Equip field reps and retail counters with offline resilience and AI assistance.",
    bullets: [
      "Offline caching with Braintree tokenisation and device fingerprinting",
      "QR and NFC-ready checkouts for pop-up events in border regions",
      "AI-generated shift recaps highlight upsells, risks, and inventory actions"
    ],
    icon: Lightning
  }
];

const STRATEGIC_SIGNALS: StrategicSignal[] = [
  {
    title: "Tri-border corridor intelligence",
    detail:
      "AI copilots track merchant behaviour across Paraguay, Brazil, and Argentina to keep leadership ahead of regional dynamics.",
    icon: Globe2
  },
  {
    title: "Bilingual enablement",
    detail:
      "Spanish and Guarani content packs plus AI translations ensure every distributor understands the playbook.",
    icon: UsersThree
  },
  {
    title: "Innovation & ESG tracking",
    detail:
      "Monitor fintech partnerships, sustainability programmes, and innovation KPIs for board visibility.",
    icon: ChartLineUp
  }
];

const TIMELINE: TimelineStage[] = [
  {
    step: "01",
    headline: "Alignment & readiness",
    description:
      "Validate gateway contracts, compliance expectations, and compensation nuances before integration work begins.",
    deliverables: [
      "Stakeholder workshops with finance, compliance, and field leadership",
      "Gateway scorecards for PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Bancard, Billetera Personal, and Dinero Express",
      "Regulatory checklist aligned to Banco Central del Paraguay and SEPRELAD"
    ],
    icon: LayoutPanelLeft
  },
  {
    step: "02",
    headline: "Experience prototyping",
    description:
      "Design enrolment, checkout, payout, and support flows with automation hooks and bilingual UX.",
    deliverables: [
      "Onboarding journeys with Spanish/Guarani microcopy and compliance prompts",
      "Sandbox credentials, webhook catalogues, and automated test suites for each gateway",
      "Support playbooks with AI copilots summarising cases and suggesting next actions"
    ],
    icon: Target
  },
  {
    step: "03",
    headline: "Command-centre launch",
    description:
      "Roll out to priority networks with real-time dashboards, anomaly alerts, and hypercare coverage.",
    deliverables: [
      "Parallel reconciliation vs. legacy tools for two commission cycles",
      "Alerting for authorisation dips, settlement delays, and AML escalations",
      "Executive briefs highlighting KPIs, risks, and border trade insights"
    ],
    icon: BarChart3
  },
  {
    step: "04",
    headline: "Optimise & expand",
    description:
      "Extend the blueprint to franchise partners, neighbouring markets, and cross-border programmes.",
    deliverables: [
      "Quarterly optimisation sprints with automation backlog management",
      "Expansion playbooks for Brazil, Argentina, and Bolivia corridors",
      "AI forecasting for promotions, incentives, and inventory requirements"
    ],
    icon: Map
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways does Cloud MLM Software connect for Paraguay?",
    answer:
      "We orchestrate PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Bancard, Billetera Personal, Dinero Express, and direct bank settlements from a single console."
  },
  {
    question: "How do you keep operations compliant with Paraguayan regulators?",
    answer:
      "Our platform embeds AML screening, dual approvals, KYC refresh reminders, and evidence packs aligned to Banco Central del Paraguay and SEPRELAD."
  },
  {
    question: "Can AI help bilingual support teams stay in sync?",
    answer:
      "Yes. AI copilots summarise tickets, translate responses, and surface next steps so Spanish and Guarani-speaking teams deliver consistent service."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Paraguay MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch Paraguay’s MLM payment stack with Cloud MLM Software. Unify PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Bancard, Billetera Personal, and Dinero Express under AI oversight.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/paraguay", locale)
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

type ParaguayPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function ParaguayPaymentGatewaysPage({
  params
}: ParaguayPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-red-200/70 bg-gradient-to-br from-red-50 via-white to-rose-100 px-6 py-20 shadow-sm dark:border-red-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(248,113,113,0.35),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(251,191,36,0.25),transparent_55%),radial-gradient(circle_at_45%_88%,rgba(56,189,248,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(248,113,113,0.4),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(251,191,36,0.35),transparent_50%),radial-gradient(circle_at_45%_88%,rgba(56,189,248,0.3),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:border-red-500/40 dark:bg-slate-900/60 dark:text-red-200">
              <Zap className="h-4 w-4" aria-hidden />
              Paraguay payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver cross-border optimised payments for Paraguay’s MLM growth
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software unifies PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Bancard, Billetera Personal, and Dinero Express. Launch with bilingual journeys, cross-border intelligence, and AI automation that keeps every team aligned.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-red-600 text-white hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400"
              >
                <Link href={contactHref}>
                  Talk to a Paraguay payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-red-200 bg-white/80 text-red-700 hover:bg-red-50 dark:border-red-500/40 dark:bg-transparent dark:text-red-200 dark:hover:bg-red-500/10"
              >
                <Link href={demoHref}>Request the AI-guided demo</Link>
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
          <aside className="rounded-[2.5rem] border border-red-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_HIGHLIGHTS.map((highlight) => (
                <div key={highlight.label} className="rounded-3xl border border-red-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <highlight.icon className="h-6 w-6 text-red-600 dark:text-red-300" aria-hidden />
                  <div className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-700 dark:text-red-300">
                    {highlight.label}
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{highlight.value}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{highlight.detail}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-red-500 dark:hover:bg-red-400">
              <Link href={pricingHref}>
                Review Paraguay implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:border-red-500/40 dark:text-red-200">
            <Sparkles className="h-4 w-4" aria-hidden />
            Gateway focus areas
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment focus areas tailored for Paraguay’s distributors and corporate teams
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each focus area leverages the gateways listed in the original content, enhanced with Paraguayan corridors, offline resilience, and AI automation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_FOCUS_LIST.map((focus) => (
            <article
              key={focus.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-red-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <focus.icon className="h-6 w-6 text-red-600 dark:text-red-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{focus.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{focus.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {focus.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-3.5 w-3.5 text-red-500" aria-hidden />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:border-red-500/40 dark:text-red-200">
            <Globe2 className="h-4 w-4" aria-hidden />
            Strategic signals
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI strategic signals crafted for Paraguay’s cross-border ambitions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            From the tri-border economy to bilingual enablement, Cloud MLM Software keeps leadership informed with a single source of truth.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {STRATEGIC_SIGNALS.map((signal) => (
              <div
                key={signal.title}
                className="rounded-3xl border border-red-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <signal.icon className="h-6 w-6 text-red-600 dark:text-red-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{signal.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-red-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.3),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Paraguay AI operations hub</h3>
          <p className="mt-3 text-sm text-slate-200">
            Monitor payment conversion, support queues, and tri-border demand. AI-generated summaries keep executives proactive and compliant.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4" aria-hidden />
              <span>Executive briefs with KPIs, risk posture, and market highlights.</span>
            </li>
            <li className="flex items-start gap-2">
              <UsersThree className="mt-1 h-4 w-4" aria-hidden />
              <span>Bilingual support copilots summarise history and craft responses.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
              <span>Automation triggers open tasks, notify Slack, or update CRM workflows.</span>
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
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:border-red-500/40 dark:text-red-200">
            <Target className="h-4 w-4" aria-hidden />
            Delivery timeline
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A delivery plan that keeps Paraguay’s leadership and distributors aligned
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.step}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-red-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-red-700 dark:text-red-200">
                <span>{stage.step}</span>
                <stage.icon className="h-4 w-4 text-red-600 dark:text-red-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-red-500/80" aria-hidden />
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
            Paraguay payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance directors, compliance officers, and distributor councils ask the following questions before launching Cloud MLM Software in Paraguay.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-red-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-red-200/70 bg-gradient-to-br from-red-600 via-orange-500 to-amber-500 px-6 py-16 text-white shadow-lg dark:border-red-500/40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.28),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Paraguay’s MLM expansion with unified, AI-ready payments
          </h2>
          <p className="text-base text-white/90">
            Cloud MLM Software connects PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Bancard, Billetera Personal, and Dinero Express. Give your teams the transparency, automation, and compliance rigour they need to win.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-red-700 hover:bg-slate-100 dark:text-red-600">
              <Link href={contactHref}>
                Build your Paraguay launch plan
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

