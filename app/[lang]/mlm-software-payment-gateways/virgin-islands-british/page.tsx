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
  BarChart3,
  Globe2,
  Layers,
  Radar,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  AirplaneTilt,
  Bank,
  Boat,
  ChatsTeardrop,
  CurrencyCircleDollar
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

type FocusArea = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type LocalInsight = {
  name: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type Phase = {
  step: string;
  title: string;
  description: string;
  actions: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    label: "Global PSP bundle",
    title: "7 connected gateways",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen operate together—exactly as the legacy British Virgin Islands page promised.",
    icon: Bank
  },
  {
    label: "Oceanic omnichannel",
    title: "Tourism + financial services",
    description:
      "Design journeys for beach resorts, charter fleets, and corporate service providers without separate stacks.",
    icon: Boat
  },
  {
    label: "AI instrumentation",
    title: "Insight briefs on autopilot",
    description:
      "Synthesize settlement timing, AML posture, and distributor sentiment across Tortola, Virgin Gorda, and beyond.",
    icon: Sparkles
  }
];

const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Compliance & governance",
    summary:
      "Align with British Virgin Islands Financial Services Commission expectations while honouring global standards.",
    bullets: [
      "Maker-checker controls for payouts, refunds, and incentives",
      "Audit trails and document vaults mapped to BVI and international requirements",
      "AI-generated evidence packs ready for regulators and banking partners"
    ],
    icon: ShieldCheck
  },
  {
    title: "Revenue versatility",
    summary:
      "Support tourism spikes, charter bookings, conferences, and subscription services in one control plane.",
    bullets: [
      "Checkout orchestration for PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen",
      "Recurring billing and invoicing with flexible multi-currency options",
      "AI forecasting to prepare for seasonal or event-driven demand"
    ],
    icon: BarChart3
  },
  {
    title: "Leadership intelligence",
    summary:
      "Deliver the context board members and finance leaders need without spreadsheet scrambles.",
    bullets: [
      "Daily AI briefs summarising conversion, settlement, and risk indicators",
      "Scenario planning for expansion into other Caribbean or global jurisdictions",
      "Collaboration spaces that capture decisions and track follow-ups"
    ],
    icon: Layers
  }
];

const LOCAL_INSIGHTS: LocalInsight[] = [
  {
    name: "FirstCaribbean, CIBC, Banco Popular",
    focus: "Banking & treasury",
    detail:
      "Synchronise PSP batches with local settlement files, reconcile FX movement, and export IFRS-ready ledgers in minutes.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Tourism & charter networks",
    focus: "Experience-led revenue",
    detail:
      "Offer advance deposits, split payments, and onboard amenities with real-time status updates and automated communications.",
    icon: AirplaneTilt
  },
  {
    name: "Corporate service providers",
    focus: "High-trust financial operations",
    detail:
      "Support retainers, subscription services, and regulated transactions with strong KYC and approvals built-in.",
    icon: Bank
  },
  {
    name: "Cross-island distributors",
    focus: "Field enablement",
    detail:
      "Equip representatives across British Virgin Islands with mobile-ready payments, inventory visibility, and AI support cues.",
    icon: ChatsTeardrop
  }
];

const PHASES: Phase[] = [
  {
    step: "01",
    title: "Discovery & regulation mapping",
    description:
      "Understand how your organisation currently handles payments, compliance, and customer experiences across British Virgin Islands.",
    actions: [
      "Review existing PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen usage",
      "Catalogue BVI FSC, AML, and data residency obligations",
      "Document distributor and corporate payment workflows across islands"
    ],
    icon: Globe2
  },
  {
    step: "02",
    title: "Blueprint for omnichannel journeys",
    description:
      "Design experiences for tourism, corporate services, and distributors with AI-assisted content referencing People’s Democratic Republic of Virgin Islands (British) – VG terminology.",
    actions: [
      "Checkout variants for hospitality, ecommerce, and financial services",
      "Maker-checker approvals and document vaults for sensitive transactions",
      "Training modules for finance, compliance, and field teams"
    ],
    icon: Anchor
  },
  {
    step: "03",
    title: "Pilot & telemetry",
    description:
      "Launch a controlled cohort with visibility across settlements, chargebacks, and cross-currency operations.",
    actions: [
      "AI dashboards comparing PSP metrics with bank settlements",
      "Alerts for FX drift, fraud anomalies, or compliance thresholds",
      "Daily hypercare syncs to convert insight into action"
    ],
    icon: Radar
  },
  {
    step: "04",
    title: "Scale & stewardship",
    description:
      "Grow into new territories and services without sacrificing governance, insight, or customer trust.",
    actions: [
      "Quarterly optimisation sprints prioritised with leadership",
      "Scenario planning for B2B, tourism, and cross-border expansions",
      "Executive briefings automatically prepared by AI"
    ],
    icon: Globe2
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are orchestrated for the British Virgin Islands?",
    answer:
      "Cloud MLM Software unifies PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen exactly as the legacy page outlined, while layering in BVI banking partners and tourism-ready payment rails."
  },
  {
    question: "How do you maintain compliance across tourism and financial services?",
    answer:
      "We embed AML screening, maker-checker approvals, document vaults, and AI evidence packs aligned to British Virgin Islands Financial Services Commission expectations."
  },
  {
    question: "Can AI support leadership during seasonal surges?",
    answer:
      "Yes. AI monitors booking velocity, chargebacks, and settlement timing, producing alerts and action plans so teams can adjust staffing, inventory, and communications proactively."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "British Virgin Islands MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deliver compliant MLM payment journeys in the British Virgin Islands with Cloud MLM Software. Unite PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local partners with AI insights.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/virgin-islands-british", locale)
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

type BritishVirginIslandsPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function BritishVirginIslandsPaymentGatewaysPage({
  params
}: BritishVirginIslandsPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-sky-200/70 bg-gradient-to-br from-sky-50 via-white to-cyan-100 px-6 py-20 shadow-sm dark:border-sky-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.3),transparent_55%),radial-gradient(circle_at_84%_18%,rgba(6,182,212,0.32),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.35),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-400/40 dark:bg-slate-900/70 dark:text-sky-200">
              <Anchor className="h-4 w-4" aria-hidden />
              British Virgin Islands payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Offshore-trusted MLM payments for British Virgin Islands growth
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Virgin Islands
                (British) – VG now run through a unified AI control plane. Cloud MLM Software keeps the
                original gateway promise while layering tourism, corporate services, and compliance
                workflows tailored for the islands.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                <Link href={contactHref}>
                  Talk with a BVI payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200/80 text-sky-800 hover:bg-white/70 dark:border-sky-400/40 dark:text-sky-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="rounded-3xl border border-sky-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <card.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-200">
                    {card.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{card.title}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
                </article>
              ))}
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                <Link href={pricingHref}>
                  Review British Virgin Islands implementation packs
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:text-cyan-200">
            <Globe2 className="h-4 w-4" aria-hidden />
            Strategic focus
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Convert the legacy gateway list into actionable plays
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FOCUS_AREAS.map((area) => (
            <article
              key={area.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <area.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{area.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{area.summary}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {area.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-cyan-500 dark:text-cyan-300" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-500/40 dark:text-sky-200">
            <Boat className="h-4 w-4" aria-hidden />
            Island insight
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Local partners that keep revenue and compliance in sync
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {LOCAL_INSIGHTS.map((insight) => (
            <article
              key={insight.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-sky-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <insight.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{insight.name}</h3>
                <p className="text-sm font-medium text-sky-700 dark:text-sky-200">{insight.focus}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Radar className="h-4 w-4" aria-hidden />
            Execution journey
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Four phases to island-wide excellence
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {PHASES.map((phase) => (
            <article
              key={phase.step}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  {phase.step}
                </span>
                <div>
                  <phase.icon className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {phase.actions.map((action) => (
                  <li key={action} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-slate-500 dark:text-slate-300" aria-hidden />
                    <span>{action}</span>
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
            AI-backed answers for British Virgin Islands finance and compliance teams
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
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            <Link href={contactHref}>
              Build your British Virgin Islands launch plan
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
