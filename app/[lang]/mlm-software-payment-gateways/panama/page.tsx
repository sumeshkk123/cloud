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
  CalendarCheck2,
  BarChart3,
  Layers,
  LineChart,
  ShieldEllipsis,
  Sparkles
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Lightning,
  Receipt,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type MetricHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayStack = {
  name: string;
  narrative: string;
  bullets: string[];
  icon: IconType;
};

type Initiative = {
  title: string;
  detail: string;
  icon: IconType;
};

type TimelineStage = {
  step: string;
  heading: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const METRIC_HIGHLIGHTS: MetricHighlight[] = [
  {
    title: "Gateway federation",
    description:
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Yappy, ACH Clave, and Panama banking partners under one roof.",
    icon: CurrencyCircleDollar
  },
  {
    title: "AI telemetry",
    description:
      "Predict authorisation dips across tourism, logistics, and financial services verticals with automated alerts and summaries.",
    icon: LineChart
  },
  {
    title: "Compliance assurance",
    description:
      "Maker-checker approvals, AML screening, and evidence packs satisfy Superintendencia de Bancos and Panamá’s data residency standards.",
    icon: ShieldEllipsis
  }
];

const GATEWAY_STACKS: GatewayStack[] = [
  {
    name: "Digital commerce rail",
    narrative:
      "Blend the global gateways referenced in the source content with Panama’s leading digital rails.",
    bullets: [
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout orchestrated through one ledger",
      "Yappy and ACH Clave connectors for instant bank-to-bank experiences",
      "AI-driven routing boosts approvals for local shoppers and international visitors"
    ],
    icon: Sparkles
  },
  {
    name: "Corporate & B2B settlements",
    narrative:
      "Automate payouts through Banco General, BAC, Banistmo, and Citi with treasury oversight built in.",
    bullets: [
      "Wire, ACH, and cash reconciliation with variance alerts and audit trails",
      "Multi-currency buffers for USD, PAB, and regional expansion corridors",
      "Treasury dashboards align with IFRS and Panamanian tax reporting"
    ],
    icon: Bank
  },
  {
    name: "Subscription & recurring revenue",
    narrative:
      "Support membership clubs, SaaS-style plans, and professional coaching programmes.",
    bullets: [
      "Stripe Billing and Authorize.Net ARB synced to Cloud MLM compensation logic",
      "Automated tax tagging for ITBMS, tax holidays, and free trade zone transactions",
      "Dunning automation rescues failed renewals and informs support teams"
    ],
    icon: Receipt
  },
  {
    name: "Field & experiential channels",
    narrative:
      "Equip pop-up events, retail counters, and logistics hubs with offline resilience.",
    bullets: [
      "Braintree tokenisation with device fingerprinting for mobile POS",
      "Offline caching that syncs payouts, AML checks, and stock adjustments when connectivity returns",
      "AI-generated shift debriefs summarising sales, upsell opportunities, and support actions"
    ],
    icon: Lightning
  }
];

const INITIATIVES: Initiative[] = [
  {
    title: "Canal corridor intelligence",
    detail:
      "Monitor distributors serving the Panama Canal, Colon Free Zone, and Tocumen traffic with AI-fed insights.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Bilingual enablement",
    detail:
      "Spanish and English SOPs, prompts, and support replies keep teams confident across every province.",
    icon: UsersThree
  },
  {
    title: "ESG & innovation tracking",
    detail:
      "Capture sustainability initiatives, fintech partnerships, and digital transformation KPIs for board reporting.",
    icon: ChartLineUp
  }
];

const TIMELINE: TimelineStage[] = [
  {
    step: "01",
    heading: "Discovery & alignment",
    description:
      "Clarify compensation models, gateway contracts, and compliance obligations before integration work begins.",
    deliverables: [
      "Stakeholder workshops across finance, compliance, operations, and field leadership",
      "Gateway scorecards for PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Yappy, ACH Clave, and local banks",
      "Data residency and privacy assessment aligned to Panamanian regulations"
    ],
    icon: Layers
  },
  {
    step: "02",
    heading: "Experience prototyping",
    description:
      "Design onboarding, checkout, payout, and support flows with automation hooks and bilingual messaging.",
    deliverables: [
      "Enrolment journeys with localised Spanish/English UX microcopy",
      "Sandbox credentials, webhook catalogues, and automated tests for every gateway",
      "Support scripts with AI copilots generating case summaries and recommended actions"
    ],
    icon: BarChart4
  },
  {
    step: "03",
    heading: "Launch with command centre",
    description:
      "Roll out to priority teams with real-time dashboards, anomaly alerts, and guided remediation.",
    deliverables: [
      "Parallel reconciliation vs. legacy tools for two commission cycles",
      "Alerting for authorisation dips, settlement delays, and AML exceptions",
      "Daily executive briefings highlighting performance, risks, and opportunities"
    ],
    icon: BarChart3
  },
  {
    step: "04",
    heading: "Optimise & expand",
    description:
      "Scale success to franchise partners, Central American corridors, and multinational teams.",
    deliverables: [
      "Quarterly optimisation sprints with automation backlog management",
      "Expansion playbooks covering Costa Rica, Colombia, and Caribbean routes",
      "AI forecasting for promotions, inventory, and incentive planning"
    ],
    icon: CalendarCheck2
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways does Cloud MLM Software orchestrate for Panama?",
    answer:
      "We connect PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Yappy, ACH Clave, and direct bank settlements. You manage routing, approvals, and analytics from one console."
  },
  {
    question: "How do you keep Panama’s operations compliant with regulators?",
    answer:
      "Our platform embeds AML screening, dual approvals, audit logs, and evidence packs aligned to Superintendencia de Bancos and local data privacy expectations."
  },
  {
    question: "Can AI help our bilingual support and sales teams stay aligned?",
    answer:
      "Yes. AI copilots summarise tickets, translate responses, and surface next-best actions so Spanish and English-speaking teams remain in sync."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Panama MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch Panama’s MLM payment stack with Cloud MLM Software. Unify PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Yappy, ACH Clave, and bank settlements under AI oversight.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/panama", locale)
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

type PanamaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function PanamaPaymentGatewaysPage({
  params
}: PanamaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-amber-200/70 bg-gradient-to-br from-yellow-50 via-white to-orange-100 px-6 py-20 shadow-sm dark:border-amber-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(251,191,36,0.35),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.3),transparent_55%),radial-gradient(circle_at_45%_88%,rgba(56,189,248,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(251,191,36,0.4),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.35),transparent_50%),radial-gradient(circle_at_45%_88%,rgba(56,189,248,0.3),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 dark:border-amber-500/40 dark:bg-slate-900/60 dark:text-amber-200">
              <Building className="h-4 w-4" aria-hidden />
              Panama payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Engineer a Canal-grade payment experience for Panama’s MLM network
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software brings PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Yappy, ACH Clave, and Panama’s banking partners into one AI-supervised platform. Launch with tourism-ready experiences, bilingual support, and compliance guardrails that match local regulators.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={contactHref}>
                  Talk to a Panama payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-200 bg-white/80 text-amber-800 hover:bg-amber-50 dark:border-amber-500/40 dark:bg-transparent dark:text-amber-200 dark:hover:bg-amber-500/10"
              >
                <Link href={demoHref}>Request the AI-guided demo</Link>
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
          <aside className="rounded-[2.5rem] border border-amber-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {METRIC_HIGHLIGHTS.map((metric) => (
                <div key={metric.title} className="rounded-3xl border border-amber-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <metric.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{metric.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400">
              <Link href={pricingHref}>
                Review Panama implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:border-amber-500/40 dark:text-amber-200">
            <Layers className="h-4 w-4" aria-hidden />
            Gateway stacks
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment strategies for Panama’s cross-border and omnichannel distributors
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            The stacks below combine the original gateway list with Panama-centric partners. Each is packaged with AI automation, compliance guardrails, and multilingual enablement.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_STACKS.map((stack) => (
            <article
              key={stack.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-amber-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <stack.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stack.name}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stack.narrative}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {stack.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-3.5 w-3.5 text-amber-500" aria-hidden />
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
            <LineChart className="h-4 w-4" aria-hidden />
            Strategic initiatives
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Keep leadership, compliance, and field teams aligned across Panama
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            AI-enabled dashboards, bilingual enablement, and ESG telemetry provide the situational awareness your teams need for sustainable growth.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {INITIATIVES.map((initiative) => (
              <div
                key={initiative.title}
                className="rounded-3xl border border-amber-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <initiative.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{initiative.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{initiative.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-amber-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.3),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Panama AI control tower</h3>
          <p className="mt-3 text-sm text-slate-200">
            Track conversion, remittance flows, and compliance posture in real time. AI-generated briefs keep executives ready for every conversation.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4" aria-hidden />
              <span>Daily KPIs delivered to leadership inboxes with action recommendations.</span>
            </li>
            <li className="flex items-start gap-2">
              <UsersThree className="mt-1 h-4 w-4" aria-hidden />
              <span>Support copilots deliver Spanish/English responses with contextual history.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
              <span>Automation triggers create tasks, send Slack alerts, or update CRM workflows.</span>
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
            <CalendarCheck2 className="h-4 w-4" aria-hidden />
            Delivery motion
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A delivery motion designed for Panama’s fast-moving leadership teams
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.step}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-amber-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-200">
                <span>{stage.step}</span>
                <stage.icon className="h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.heading}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-amber-500/80" aria-hidden />
                    <span>{deliverable}</span>
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
            Panama payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            These are the questions finance, compliance, and distributor councils typically ask when planning a Panama launch with Cloud MLM Software.
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
            Lead Panama’s MLM network with unified, AI-ready payments
          </h2>
          <p className="text-base text-white/90">
            Cloud MLM Software harmonises PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Yappy, ACH Clave, and bank settlements. Empower your teams with resilient operations, transparent analytics, and compliant automation from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-amber-700 hover:bg-slate-100 dark:text-amber-600">
              <Link href={contactHref}>
                Build your Panama launch plan
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

