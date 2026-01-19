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
  BarChart4,
  Building2,
  Globe,
  Layers3,
  ShieldCheck,
  Sparkles,
  Timer
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Circuitry,
  Coin,
  Handshake,
  ListMagnifyingGlass,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Brunei MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Brunei (BN). Cloud MLM Software aligns Islamic finance requirements, ASEAN corridors, and distributor experiences.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/brunei"
  },
  openGraph: {
    title: "Brunei MLM Payment Gateways",
    description:
      "Launch compliant MLM payout operations in Brunei with Cloud MLM Software’s banking, PSP, and enablement orchestration.",
    url: "/mlm-software-payment-gateways/brunei"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  metric: string;
  detail: string;
  icon: IconType;
};

type Insight = {
  title: string;
  copy: string;
  icon: IconType;
};

type Capability = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStep = {
  phase: string;
  headline: string;
  description: string;
  outputs: string[];
  icon: IconType;
};

type Control = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Settlement cadence",
    metric: "T+0.7 days",
    detail:
      "Islamic banking partners process settlements with automated approvals aligned to Brunei Darussalam’s regulations.",
    icon: Timer
  },
  {
    label: "Gateway reach",
    metric: "10+ integrations",
    detail:
      "Baiduri Bank, BIBD, Standard Chartered Brunei, PayHalal, Stripe, and PayPal coexist under a single policy engine.",
    icon: Layers3
  },
  {
    label: "Compliance documentation",
    metric: "36 artefacts",
    detail:
      "Sharia, AML/CFT, and data governance packs accelerate legal, regulator, and banking partner approvals.",
    icon: ShieldCheck
  }
];

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "Islamic finance alignment",
    copy:
      "Sharia-compliant structures require profit-sharing logic, non-interest settlement, and transparent approvals. We embed these rules into onboarding and payout workflows.",
    icon: Coin
  },
  {
    title: "ASEAN corridor growth",
    copy:
      "Distributors operate across Malaysia, Singapore, and Indonesia. Multi currency governance and FX visibility keep borderless operations aligned.",
    icon: Globe
  },
  {
    title: "Energy & wellness verticals",
    copy:
      "High-value product segments depend on accurate inventory, incentive, and compliance insights. Real-time dashboards keep leadership on the same page.",
    icon: Building2
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Bank-centric clearing core",
    summary: "Automate settlement with Brunei’s leading Islamic and conventional banks.",
    bullets: [
      "Integrations for BIBD, Baiduri Bank, Standard Chartered Brunei, and BDCB-regulated cooperatives.",
      "Maker-checker approvals aligned to Sharia supervisory expectations and board policies.",
      "Automated reconciliation files structured for Autoriti Monetari Brunei Darussalam (AMBD) reporting."
    ],
    icon: Bank
  },
  {
    title: "PSP & alternative payment mesh",
    summary: "Bring card, wallet, and cross-border payments under one governance policy.",
    bullets: [
      "Adapters for PayHalal, Stripe, PayPal, 2C2P, and regional PSPs powering online and field sales.",
      "Dynamic routing rules by product, risk band, and corridor to optimise conversion while staying compliant.",
      "Dispute, refund, and chargeback automation linked to finance and legal workflows."
    ],
    icon: Circuitry
  },
  {
    title: "Distributor intelligence studio",
    summary: "Equip leaders with engagement, compliance, and growth insights.",
    bullets: [
      "Portals and narratives in Malay and English with governed access by rank and territory.",
      "Recognition programmes tied to payout accuracy, compliance tasks, and wellbeing indicators.",
      "Ticketing, auto-responder, and backup modules orchestrated for proactive communications."
    ],
    icon: Handshake
  }
];

const DELIVERY_JOURNEY: JourneyStep[] = [
  {
    phase: "Wave 1",
    headline: "Blueprint & Sharia governance",
    description:
      "Co-design a compliance charter with your Sharia board, finance leadership, and distributor councils.",
    outputs: [
      "Risk map covering AML/CFT, Sharia, and data residency obligations.",
      "Stakeholder RACI across HQ, Sharia advisory, and field leaders.",
      "Solution architecture diagrams with approved data-sharing pathways."
    ],
    icon: ListMagnifyingGlass
  },
  {
    phase: "Wave 2",
    headline: "Integration & observability",
    description:
      "Deploy secure connectors, telemetry, and automated approvals across banks, PSPs, and Cloud MLM Software modules.",
    outputs: [
      "Connector playbook with monitoring thresholds and escalation matrix.",
      "Credential vaulting, role-based access, and maker-checker configuration.",
      "Performance tests covering high-volume payout cycles and FX conversions."
    ],
    icon: Circuitry
  },
  {
    phase: "Wave 3",
    headline: "Pilot & optimisation sprint",
    description:
      "Launch with representative teams across Bandar Seri Begawan and regional leaders to validate experience and governance.",
    outputs: [
      "Executive dashboards tracking settlement speed, exception volumes, and compliance posture.",
      "Feedback loops for distributor councils, finance controllers, and customer care teams.",
      "Optimisation backlog prioritised by Sharia alignment, risk reduction, and revenue impact."
    ],
    icon: ChartLineUp
  }
];

const CONTROL_PILLARS: Control[] = [
  {
    title: "Regulator confidence",
    description:
      "AML/CFT, sanction screening, and reporting artefacts align to AMBD expectations while maintaining Sharia board transparency.",
    icon: SealCheck
  },
  {
    title: "Treasury foresight",
    description:
      "FX exposure, liquidity, and receivables views give CFOs and Sharia boards the insights needed to steer profit-sharing decisions.",
    icon: BarChart4
  },
  {
    title: "Distributor trust",
    description:
      "Timely notifications, incentive dashboards, and governed communications keep field leaders engaged and confident.",
    icon: Handshake
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you support in Brunei?",
    answer:
      "We integrate BIBD, Baiduri Bank, Standard Chartered Brunei, and other AMBD-regulated institutions along with PayHalal, Stripe, 2C2P, and PayPal. All connectors inherit unified security, logging, and approval workflows."
  },
  {
    question: "How do you ensure Sharia compliance in payouts?",
    answer:
      "Profit-sharing rules, non-interest settlement, and ethical screening are embedded into onboarding and payout journeys. Artefacts for your Sharia advisory board include approval logs, contract templates, and governance dashboards."
  },
  {
    question: "What documentation accelerates regulatory reviews?",
    answer:
      "You receive AML/CFT programmes, Sharia governance manuals, data processing agreements, and tax reporting guides. These assets streamline collaboration with AMBD, banking partners, and internal audit."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function BruneiPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3.5rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.24),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Brunei • Compliance-led payouts
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Brunei (BN)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We adapt that expertise to Brunei’s Sharia-first ecosystem so you scale responsibly and delight distributors.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Brunei is highlighted below, along with the governance layers that keep them resilient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Design your Brunei launch
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/40">
                  <Link href={demoHref}>
                    Explore the interactive demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{stat.metric}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Market insights
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Navigate Brunei’s financial landscape with confidence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            From Sharia governance to ASEAN corridors, payout orchestration is complex. We convert that complexity into a coherent operating model.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_INSIGHTS.map((insight) => (
            <div
              key={insight.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <insight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{insight.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Payment capabilities engineered for Brunei Darussalam
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Connect banks, PSPs, and leadership enablement in one governed ecosystem. Every integration inherits automation, monitoring, and compliance controls.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <capability.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{capability.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{capability.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-emerald-500/80" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Delivery journey
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Implementation cadence tuned for Sharia governance
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each wave balances compliance, technology, and distributor enablement. Stakeholders gain clarity and momentum.
          </p>
        </div>
        <div className="space-y-8">
          {DELIVERY_JOURNEY.map((step) => (
            <div
              key={step.phase}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {step.phase}
                </span>
                <step.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.headline}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {step.outputs.map((output) => (
                  <li key={output} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-slate-400/70 dark:bg-slate-600" aria-hidden />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Control pillars for executive assurance
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Leadership receives the evidence, dashboards, and alerts required to support Brunei’s regulators, Sharia boards, and distributor councils.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONTROL_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <pillar.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-white/95 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                FAQs
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Direct answers for finance, Sharia, and distributor leaders preparing to scale in Brunei.
              </p>
            </div>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-white shadow-lg dark:border-slate-700 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.28),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Lead Brunei’s MLM payment experience with auditable confidence
            </h2>
            <p className="text-base text-slate-100/90">
              Cloud MLM Software unites Sharia governance, banking relationships, and distributor enablement on one platform. Let’s craft your roadmap together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Schedule a Brunei consultation
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={pricingHref}>Review pricing guidance</Link>
              </Button>
            </div>
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
