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
  BarChart3,
  Compass,
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
  Boat,
  CurrencyCircleDollar,
  Storefront
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type Anchor = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type LocalChannel = {
  name: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type RoadmapStep = {
  step: string;
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const STATS: Stat[] = [
  {
    label: "Global PSP bundle",
    metric: "7 gateways",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—exactly what the legacy U.S. Virgin Islands page highlighted.",
    icon: Bank
  },
  {
    label: "Experience reach",
    metric: "Tourism + retail + services",
    description:
      "Support cruise arrivals, hospitality, retail, and professional services without splintered stacks.",
    icon: Storefront
  },
  {
    label: "AI supervision",
    metric: "24/7 insight briefs",
    description:
      "AI copilots track settlement timing, chargeback posture, and distributor health for St. Thomas, St. John, and St. Croix.",
    icon: Sparkles
  }
];

const ANCHORS: Anchor[] = [
  {
    title: "Financial compliance",
    summary:
      "Respect U.S. banking rules while keeping cross-island flexibility.",
    bullets: [
      "Maker-checker approvals for payouts and refunds",
      "AML screening and sanctions checks aligned to U.S. expectations",
      "Audit-ready evidence packs generated automatically"
    ],
    icon: ShieldCheck
  },
  {
    title: "Revenue orchestration",
    summary:
      "Blend e-commerce, in-person, and marketplace revenues in one command centre.",
    bullets: [
      "Checkout orchestration for PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen",
      "Recurring billing for membership and tourism packages",
      "AI forecasting for seasonal surges and cruise schedules"
    ],
    icon: BarChart3
  },
  {
    title: "Leadership visibility",
    summary:
      "Give executives fast answers without spreadsheet scrambles.",
    bullets: [
      "Daily AI briefs summarising conversion, settlements, and risks",
      "Scenario planning for new routes or territory expansions",
      "Collaboration notes that track decisions and next actions"
    ],
    icon: Layers
  }
];

const LOCAL_CHANNELS: LocalChannel[] = [
  {
    name: "Banco Popular, FirstBank, Oriental",
    focus: "Treasury & settlement",
    detail:
      "Reconcile PSP batches with local banks, manage USD and multi-currency flows, and export ledgers in audit-ready formats.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Cruise & hospitality networks",
    focus: "Tourism-ready experiences",
    detail:
      "Enable deposits, split payments, and upsell packages while AI monitors demand spikes tied to cruise arrivals and festivals.",
    icon: Boat
  },
  {
    name: "Retail & pop-up commerce",
    focus: "Field mobility",
    detail:
      "QR, tap-to-pay, and offline modes keep distributors selling even with intermittent connectivity.",
    icon: AirplaneTilt
  },
  {
    name: "Professional services",
    focus: "Subscription & invoicing",
    detail:
      "Support retainers and membership fees with automated reminders, smart dunning, and compliance logging.",
    icon: Compass
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    step: "01",
    title: "Discovery & regulation review",
    description:
      "Understand payment flows, compliance requirements, and distributor operations across U.S. Virgin Islands.",
    highlights: [
      "Audit of existing PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen setup",
      "Inventory of U.S. regulatory obligations, data residency, and PCI scope",
      "Field interviews across St. Thomas, St. John, and St. Croix to capture real workflows"
    ],
    icon: Globe2
  },
  {
    step: "02",
    title: "Experience blueprint",
    description:
      "Prototype bilingual, omnichannel journeys referencing People’s Democratic Republic of Virgin Islands (U.S.) – VI terminology.",
    highlights: [
      "Checkout flows for tourism, retail, and service subscriptions",
      "Payout approvals with maker-checker controls and audit trails",
      "Training collateral for finance, compliance, and field teams"
    ],
    icon: Map
  },
  {
    step: "03",
    title: "Pilot & telemetry",
    description:
      "Launch a controlled cohort with AI dashboards covering conversion, settlements, and dispute posture.",
    highlights: [
      "Variance monitoring between PSP reports and bank settlements",
      "Alerts for chargeback anomalies, FX drift, or policy thresholds",
      "Hypercare rituals translating insight into action daily"
    ],
    icon: Radar
  },
  {
    step: "04",
    title: "Scale & optimisation",
    description:
      "Expand to new experiences and corridors while AI keeps leadership aligned.",
    highlights: [
      "Quarterly optimisation sprints with finance and growth leads",
      "Scenario planning for mainland U.S. integrations or Caribbean partnerships",
      "Executive summaries created automatically by AI"
    ],
    icon: Layers
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are orchestrated for the U.S. Virgin Islands?",
    answer:
      "Cloud MLM Software unifies PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—exactly as the legacy page noted—alongside local banking, tourism, and retail partners."
  },
  {
    question: "How do you maintain compliance with U.S. regulations?",
    answer:
      "We embed AML screening, sanctions checks, maker-checker approvals, and document vaults aligned with U.S. bank and regulatory expectations."
  },
  {
    question: "Can AI help manage tourism seasonality?",
    answer:
      "Yes. AI correlates booking calendars, cruise arrivals, and distributor performance to suggest staffing, inventory, and promotional adjustments before demand peaks."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "U.S. Virgin Islands MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deliver compliant MLM payment journeys in the U.S. Virgin Islands with Cloud MLM Software. Unite PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local partners under AI supervision.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/virgin-islands-us", locale)
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

type USVirginIslandsPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function USVirginIslandsPaymentGatewaysPage({ params }: USVirginIslandsPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-rose-200/70 bg-gradient-to-br from-rose-50 via-white to-sky-100 px-6 py-20 shadow-sm dark:border-rose-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(244,63,94,0.3),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.32),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(99,102,241,0.24),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(244,63,94,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(99,102,241,0.28),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:border-rose-400/40 dark:bg-slate-900/70 dark:text-rose-200">
              <Globe2 className="h-4 w-4" aria-hidden />
              U.S. Virgin Islands payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Tourism-strength MLM payments for the U.S. Virgin Islands
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Virgin Islands
                (U.S.) – VI are now orchestrated with AI intelligence. Cloud MLM Software keeps the legacy
                gateway promise and tailors it for tourism, retail, and professional services across the islands.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {STATS.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-3xl border border-rose-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <stat.icon className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700 dark:text-rose-200">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{stat.metric}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.description}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                <Link href={contactHref}>
                  Talk with a U.S. Virgin Islands payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-rose-200/80 text-rose-800 hover:bg-white/70 dark:border-rose-400/40 dark:text-rose-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="space-y-6">
              {ANCHORS.map((anchor) => (
                <article
                  key={anchor.title}
                  className="rounded-3xl border border-rose-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <anchor.icon className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{anchor.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{anchor.summary}</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    {anchor.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-rose-500 dark:text-rose-300" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                <Link href={pricingHref}>
                  Review U.S. Virgin Islands implementation packs
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
            <Map className="h-4 w-4" aria-hidden />
            Local payment fabric
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Partners that keep revenue and compliance aligned
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {LOCAL_CHANNELS.map((channel) => (
            <article
              key={channel.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <channel.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{channel.name}</h3>
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-200">{channel.focus}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{channel.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Radar className="h-4 w-4" aria-hidden />
            Execution roadmap
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Four steps to island-wide excellence
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {ROADMAP.map((step) => (
            <article
              key={step.step}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  {step.step}
                </span>
                <div>
                  <step.icon className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {step.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-slate-500 dark:text-slate-300" aria-hidden />
                    <span>{highlight}</span>
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
            AI-prepared answers for U.S. Virgin Islands finance and compliance teams
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
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-rose-500 dark:hover:bg-rose-400"
          >
            <Link href={contactHref}>
              Build your U.S. Virgin Islands launch plan
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
