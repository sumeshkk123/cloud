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
  BadgeCheck,
  Circle,
  Compass,
  Flag,
  LayoutGrid,
  LucideGlobe,
  Map,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  CurrencyCircleDollar,
  Lightning,
  Radio,
  Tree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayScenario = {
  name: string;
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
    title: "Unified gateway reach",
    description:
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, and remote-friendly partners converge into one ledger for Pitcairn deployments.",
    icon: CurrencyCircleDollar
  },
  {
    title: "AI for remote operations",
    description:
      "Copilots track connectivity, stock, and settlement timing so leadership sees issues long before they affect distributors.",
    icon: Radio
  },
  {
    title: "Governance you can trust",
    description:
      "Audit trails, dual approvals, and AML analytics satisfy British Overseas Territory compliance expectations.",
    icon: ShieldCheck
  }
];

const GATEWAY_SCENARIOS: GatewayScenario[] = [
  {
    name: "Global digital gateway mesh",
    description:
      "Launch with the same gateways listed in the legacy content while adapting to remote realities.",
    bullets: [
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout orchestrated via Cloud MLM Software",
      "AI routing chooses the best gateway based on geography, risk, and availability",
      "Real-time alerts flag anomalies even when teams are spread across time zones"
    ],
    icon: Sparkles
  },
  {
    name: "Bank and remittance alignment",
    description:
      "Coordinate payouts through New Zealand, UK, and Pacific banking partners with full visibility.",
    bullets: [
      "Automated reconciliation for wire transfers, remittance services, and multi-currency settlements",
      "Maker-checker approvals and immutable logs keep treasury comfortable during audits",
      "Exports align with IFRS and British Overseas Territory reporting"
    ],
    icon: Bank
  },
  {
    name: "Offline-first field kit",
    description:
      "Empower remote distributors with resilient tools even when connectivity is limited.",
    bullets: [
      "Offline caching with Braintree tokenisation ensures orders sync once satellite or fibre resumes",
      "QR-ready checkout experiences for visiting tourists and supporters",
      "AI-generated shift recaps highlight fulfilment tasks and risk items for the next day"
    ],
    icon: Lightning
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Remote readiness dashboard",
    detail:
      "Monitor connectivity, inventory, and settlement status so remote operations stay predictable.",
    icon: Map
  },
  {
    title: "Sustainability storytelling",
    detail:
      "Track conservation impact, humanitarian initiatives, and ESG commitments tied to each purchase.",
    icon: Tree
  },
  {
    title: "Global donor engagement",
    detail:
      "AI summaries keep diaspora communities and global supporters engaged with accurate, timely reporting.",
    icon: ChartLineUp
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    headline: "Discovery & localisation",
    description:
      "Map out your compensation plan, regulatory obligations, and connectivity realities before integration work begins.",
    deliverables: [
      "Gateway audit across PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout",
      "Risk and compliance checklist aligned to British Overseas Territory guidelines",
      "Connectivity readiness plan for remote staff and supporters"
    ],
    icon: Compass
  },
  {
    phase: "02",
    headline: "Experience prototyping",
    description:
      "Design enrolment, checkout, and payout journeys that work beautifully online and offline.",
    deliverables: [
      "Onboarding flows for supporters, distributors, and corporate administrators",
      "Sandbox credentials, webhook catalogues, and automated testing harness",
      "Support playbooks with AI copilots summarising tickets and suggesting actions"
    ],
    icon: LayoutGrid
  },
  {
    phase: "03",
    headline: "Command-centre launch",
    description:
      "Roll out with live dashboards, anomaly detection, and hypercare assistance to keep trust high.",
    deliverables: [
      "Parallel reconciliation vs. prior tools for two settlement cycles",
      "Alerting for authorisation dips, settlement delays, or offline sync backlogs",
      "Daily executive briefs capturing performance, risks, and community insights"
    ],
    icon: LucideGlobe
  },
  {
    phase: "04",
    headline: "Optimise & expand",
    description:
      "Extend the blueprint to partner organisations, tourism programmes, and global campaigns.",
    deliverables: [
      "Quarterly optimisation sprints with automation backlog management",
      "Expansion playbooks for New Zealand, Australia, and UK supporters",
      "AI forecasting for donations, orders, and seasonal surges"
    ],
    icon: BadgeCheck
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which gateways can we use for the Pitcairn Islands?",
    answer:
      "Cloud MLM Software orchestrates PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout—the gateways listed in the original site—paired with banking partners that match your treasury strategy."
  },
  {
    question: "How do you handle operations when connectivity is unreliable?",
    answer:
      "Transactions are cached securely using Braintree tokenisation. Once connectivity returns, we sync payouts, AML checks, and fulfilment data automatically."
  },
  {
    question: "Can AI help us communicate with global supporters?",
    answer:
      "Yes. AI copilots compile executive briefs, donor updates, and conservation stories using live data so you can keep the world informed with confidence."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pitcairn Islands MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch resilient payments for the Pitcairn Islands with Cloud MLM Software. Orchestrate PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout with AI-ready automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/pitcairn-islands", locale)
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

type PitcairnIslandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function PitcairnIslandsPaymentGatewaysPage({
  params
}: PitcairnIslandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-blue-100 px-6 py-20 shadow-sm dark:border-emerald-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.35),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.3),transparent_55%),radial-gradient(circle_at_45%_88%,rgba(37,99,235,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.4),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.35),transparent_50%),radial-gradient(circle_at_45%_88%,rgba(37,99,235,0.3),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-start">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200">
              <Flag className="h-4 w-4" aria-hidden />
              Pitcairn Islands payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Bring enterprise-grade payments to one of the world’s most remote communities
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software unites PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout with AI-enabled resilience. Empower Pitcairn distributors, supporters, and leaders with transparent, compliant, and offline-ready operations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Talk to a remote payments strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200 bg-white/80 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500/40 dark:bg-transparent dark:text-emerald-200 dark:hover:bg-emerald-500/10"
              >
                <Link href={demoHref}>Explore the AI-guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.5rem] border border-emerald-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_CARDS.map((card) => (
                <div key={card.title} className="rounded-3xl border border-emerald-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <card.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400">
              <Link href={pricingHref}>
                Review implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <LayoutGrid className="h-4 w-4" aria-hidden />
            Gateway scenarios
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment scenarios purpose-built for remote Pitcairn operations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every scenario leverages the gateways referenced in the original content and layers in AI automation plus offline resilience.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {GATEWAY_SCENARIOS.map((scenario) => (
            <article
              key={scenario.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <scenario.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{scenario.name}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{scenario.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {scenario.bullets.map((bullet) => (
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

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <Circle className="h-4 w-4" aria-hidden />
            Operations insight
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI insights keep remote leadership, supporters, and distributors aligned
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Everyone stays connected to the mission with automated summaries, sustainability metrics, and global supporter context.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {INSIGHTS.map((insight) => (
              <div
                key={insight.title}
                className="rounded-3xl border border-emerald-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <insight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-emerald-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.25),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Pitcairn Islands AI control centre</h3>
          <p className="mt-3 text-sm text-slate-200">
            Stay ahead of logistical realities with dashboards that highlight connectivity health, settlement timing, and supporter sentiment.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4" aria-hidden />
              <span>Executive briefs summarising performance and community impact each morning.</span>
            </li>
            <li className="flex items-start gap-2">
              <Radio className="mt-1 h-4 w-4" aria-hidden />
              <span>Connectivity forecasts showing when offline queues require support.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
              <span>Automations that update CRM, Slack, and donor relationship tools instantly.</span>
            </li>
          </ul>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-200">
            <Link href={demoHref}>
              Explore the live dashboard
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </aside>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <BadgeCheck className="h-4 w-4" aria-hidden />
            Delivery timeline
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A calm, transparent delivery plan for remote island teams
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.phase}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
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
            Pitcairn Islands payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance leads, compliance officers, and project sponsors ask the following questions when planning a Pitcairn launch with Cloud MLM Software.
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

      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-600 via-sky-500 to-indigo-500 px-6 py-16 text-white shadow-lg dark:border-emerald-500/40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.28),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Pitcairn Islands’ MLM growth with unified, AI-ready payments
          </h2>
          <p className="text-base text-white/90">
            Cloud MLM Software harmonises PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout. Deliver certainty to every remote distributor, supporter, and leader.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-slate-100 dark:text-emerald-600">
              <Link href={contactHref}>
                Build your Pitcairn launch plan
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

