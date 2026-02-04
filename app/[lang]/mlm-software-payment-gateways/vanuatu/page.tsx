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
  MapPin,
  Radar,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Airplane,
  Bank,
  Handshake,
  Lightning,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Channel = {
  name: string;
  focus: string;
  notes: string;
  icon: IconType;
};

type ActivationStep = {
  step: string;
  heading: string;
  summary: string;
  checklist: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Global PSP bundle",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen remain orchestrated exactly as promised on the legacy Vanuatu page.",
    icon: Bank
  },
  {
    title: "Localized trust patterns",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Vanuatu – VU include cards, wallets, and bank partners Vanuatu distributors already rely on.",
    icon: Handshake
  },
  {
    title: "AI copilots 24/7",
    description:
      "Predict settlement delays, chargeback swings, and inventory cashflow gaps with AI insight feeds tailored to Port Vila, Luganville, and beyond.",
    icon: Sparkles
  }
];

const CHANNELS: Channel[] = [
  {
    name: "ANZ, BSP, BRED Bank",
    focus: "Acquiring, treasury, settlements",
    notes:
      "Reconcile merchant batches, FX spreads, and commission payouts with AI-assisted variance detection and IFRS-ready exports.",
    icon: Bank
  },
  {
    name: "MTL Vodafone, Digicel Tap & Go",
    focus: "Mobile wallets & QR journeys",
    notes:
      "Guided onboarding makes it easy for field sellers to launch Tap & Go, QR, and NFC checkout flows without compromising compliance.",
    icon: Lightning
  },
  {
    name: "Domestic card rails",
    focus: "Visa, MasterCard, UnionPay",
    notes:
      "Tokenised storage keeps recurring autoship payments secure while AI monitors authorisation health across tourist and local segments.",
    icon: Layers
  },
  {
    name: "Tourism & cruise corridors",
    focus: "Seasonal spikes",
    notes:
      "Capacity alerts benchmark cruise ship landings and festival tourism so you can stage inventory and staff before demand peaks.",
    icon: Airplane
  }
];

const ACTIVATION_STEPS: ActivationStep[] = [
  {
    step: "01",
    heading: "Discovery anchored in Vanuatu realities",
    summary:
      "We capture how your distributors collect payments today across Port Vila, outer islands, and tourist-facing pop-ups.",
    checklist: [
      "Audit of legacy PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen accounts",
      "Mapping of cash, EFTPOS, QR, and bank-transfer flows into compensation logic",
      "Compliance inventory for Reserve Bank of Vanuatu and data residency requirements"
    ],
    icon: Compass
  },
  {
    step: "02",
    heading: "Experience blueprint & localisation",
    summary:
      "Design bilingual checkout, payout, and support experiences that feel native to Vanuatu distributors and customers.",
    checklist: [
      "Microcopy referencing People’s Democratic Republic of Vanuatu regulation language",
      "Mobile-first journeys that weave in Tap & Go, EFTPOS, and tourist chip-card preferences",
      "AI-authored training packs for field leaders and finance teams"
    ],
    icon: Globe2
  },
  {
    step: "03",
    heading: "Controlled launch with AI telemetry",
    summary:
      "Activate a pilot cohort with observability covering fraud scores, settlement timing, and distributor engagement.",
    checklist: [
      "Command centre dashboard comparing PSP bundles to local acquiring performance",
      "Alerting for FX drift, chargeback anomalies, or compliance escalations",
      "Hypercare rituals with shared daily insight digests"
    ],
    icon: Radar
  },
  {
    step: "04",
    heading: "Scale coastal and island corridors",
    summary:
      "Expand from core urban hubs to cruise, resort, and outer-island routes without reworking guardrails.",
    checklist: [
      "Quarterly optimisation workshops iterating on AI insights",
      "Scenario planning for Solomon Islands, New Caledonia, and Fiji corridor extensions",
      "Playbooks for onboarding seasonal staff while keeping approvals tight"
    ],
    icon: UsersThree
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are included for Vanuatu?",
    answer:
      "Exactly what the legacy page promised: PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—augmented with local bank acquiring, Tap & Go wallets, and QR payments popular across Vanuatu."
  },
  {
    question: "How does Cloud MLM Software maintain compliance in Vanuatu?",
    answer:
      "Maker-checker approvals, AML checks, and document vaults are aligned with Reserve Bank of Vanuatu expectations. AI summaries compile evidence packs for audits automatically."
  },
  {
    question: "Can seasonal tourism demand be managed automatically?",
    answer:
      "Yes. AI telemetry links cruise calendars, resort bookings, and distributor performance so you can stage inventory, manage staffing, and forecast commission impacts."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Vanuatu MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch compliant MLM payment journeys in Vanuatu with Cloud MLM Software. Orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local Tap & Go partners backed by AI insights.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/vanuatu", locale)
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

type VanuatuPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function VanuatuPaymentGatewaysPage({ params }: VanuatuPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3.25rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-cyan-100 px-6 py-20 shadow-sm dark:border-emerald-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(6,182,212,0.28),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(59,130,246,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.4),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(6,182,212,0.35),transparent_50%),radial-gradient(circle_at_48%_82%,rgba(59,130,246,0.32),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-400/40 dark:bg-slate-900/70 dark:text-emerald-200">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Vanuatu payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Tropical-speed payments for Vanuatu MLM growth
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Vanuatu – VU
                start here. Cloud MLM Software has already built great systems for the greatest companies.
                We now blend the global PSP bundle with the Tap & Go wallets, banks, and tourism corridors
                that keep Vanuatu thriving.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Talk with a Vanuatu payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200/80 text-emerald-800 hover:bg-white/70 dark:border-emerald-400/40 dark:text-emerald-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-emerald-100/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <item.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-[2.5rem] border border-white/60 bg-white/80 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                  Orchestrated PSP bundle
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100/80 bg-white/70 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                  AI telemetry
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  AI copilots digest authorisation health, settlement timing, and commission forecasts
                  for leadership dashboards so you can intervene before any distributor feels friction.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={pricingHref}>
                  Review Vanuatu implementation packs
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full gap-2 border-slate-200 text-slate-800 hover:bg-white/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/70"
              >
                <Link href={gatewaysHref}>
                  Explore all payment gateway regions
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:text-cyan-200">
            <Globe2 className="h-4 w-4" aria-hidden />
            Vanuatu payment ecosystem
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Connect global PSPs with island-ready payment rails
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each channel below reflects how we modernise the legacy promise—listing key payment
            gateways—into a unified, AI-enabled operating model made for Vanuatu.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {CHANNELS.map((channel) => (
            <article
              key={channel.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-100/80 bg-white/85 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <channel.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{channel.name}</h3>
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-200">{channel.focus}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{channel.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <BarChart3 className="h-4 w-4" aria-hidden />
            Activation sequence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A measurable playbook from discovery to island-wide scale
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Keep finance, compliance, and distributor enablement aligned with the four-step journey below.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {ACTIVATION_STEPS.map((step) => (
            <article
              key={step.step}
              className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-base font-semibold text-emerald-700 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200">
                  {step.step}
                </span>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-200">
                    <step.icon className="h-4 w-4" aria-hidden />
                    Phase
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{step.heading}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.summary}</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {step.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-emerald-500 dark:text-emerald-300" aria-hidden />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <MapPin className="h-4 w-4" aria-hidden />
            Leadership questions
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Answers for finance, compliance, and growth teams in Vanuatu
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
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400"
          >
            <Link href={contactHref}>
              Build your Vanuatu launch plan
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
