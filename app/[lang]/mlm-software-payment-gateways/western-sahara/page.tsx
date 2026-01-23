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
  CurrencyCircleDollar,
  Storefront,
  Truck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPoint = {
  label: string;
  description: string;
  icon: IconType;
};

type LocalPartner = {
  name: string;
  focus: string;
  detail: string;
  icon: IconType;
};

type Step = {
  phase: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_POINTS: HeroPoint[] = [
  {
    label: "Legacy gateways preserved",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen remain orchestrated exactly as the original Western Sahara page promised.",
    icon: Bank
  },
  {
    label: "Sahara-ready resilience",
    description:
      "Design experiences tuned for regional connectivity realities, offline operation, and mobile-first adoption.",
    icon: Truck
  },
  {
    label: "AI intelligence",
    description:
      "AI copilots track conversion, settlement timing, and distributor sentiment to keep every team aligned.",
    icon: Sparkles
  }
];

const LOCAL_PARTNERS: LocalPartner[] = [
  {
    name: "Saharan banking & microfinance",
    focus: "Treasury & settlement discipline",
    detail:
      "Reconcile PSP batches with regional banks, manage multi-currency settlement, and export audit-ready ledgers in minutes.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Logistics & supply corridors",
    focus: "Inventory & last-mile",
    detail:
      "Sync inventory status, delivery updates, and stock replenishment across desert logistics routes with automated messaging.",
    icon: Truck
  },
  {
    name: "Marketplace & cooperative networks",
    focus: "Field enablement",
    detail:
      "Blend online marketplaces with cooperative-style community selling supported by QR, cash-to-digital, and mobile experiences.",
    icon: Storefront
  },
  {
    name: "Cross-border tourism & trade",
    focus: "Experience integration",
    detail:
      "Support tourism packages, cross-border trade, and seasonal events with AI forecasting and compliance guardrails.",
    icon: AirplaneTilt
  }
];

const STEPS: Step[] = [
  {
    phase: "01",
    title: "Discovery & compliance mapping",
    description:
      "Gather finance, compliance, and distributor input across Western Sahara before changing any integration.",
    bullets: [
      "Audit existing PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen usage",
      "Catalogue regulations from local authorities and international partners",
      "Document distributor payment and payout journeys across desert hubs"
    ],
    icon: Globe2
  },
  {
    phase: "02",
    title: "Experience blueprint",
    description:
      "Prototype bilingual journeys referencing People’s Democratic Republic of Western Sahara – EH terminology.",
    bullets: [
      "Checkout flows covering mobile wallets, bank transfers, and offline modes",
      "Payout approvals with maker-checker controls and document vaults",
      "Training packs for finance, compliance, and field leaders"
    ],
    icon: Map
  },
  {
    phase: "03",
    title: "Pilot & telemetry",
    description:
      "Launch with AI dashboards monitoring conversion, settlements, and distributor adoption.",
    bullets: [
      "Variance analysis between PSP reports and local bank settlements",
      "Alerts for chargeback anomalies, FX drift, or policy updates",
      "Hypercare rituals turning insight into action daily"
    ],
    icon: Radar
  },
  {
    phase: "04",
    title: "Scale & optimization",
    description:
      "Expand into new corridors and partnerships while AI keeps leadership aligned.",
    bullets: [
      "Quarterly optimisation sprints prioritised with leadership",
      "Scenario planning for neighbouring markets and trade routes",
      "AI-authored executive briefs summarising performance and risks"
    ],
    icon: Layers
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are orchestrated for Western Sahara?",
    answer:
      "Cloud MLM Software unifies PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—matching the legacy page—alongside local banking, logistics, and marketplace partners."
  },
  {
    question: "How is compliance managed across regional regulations?",
    answer:
      "We embed AML screening, sanctions checks, maker-checker approvals, and document vaults aligned with Western Sahara and partner jurisdictions."
  },
  {
    question: "Can AI support operations in remote or low-connectivity areas?",
    answer:
      "Yes. AI forecasts inventory, highlights settlement delays, and recommends interventions so teams can plan for connectivity gaps or seasonal shifts."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Western Sahara MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deliver resilient MLM payments in Western Sahara with Cloud MLM Software. Unite PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local partners under AI supervision.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/western-sahara", locale)
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

type WesternSaharaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function WesternSaharaPaymentGatewaysPage({
  params
}: WesternSaharaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-stone-100 px-6 py-20 shadow-sm dark:border-amber-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.3),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(214,158,46,0.3),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(37,99,235,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(214,158,46,0.33),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(37,99,235,0.28),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:border-amber-400/40 dark:bg-slate-900/70 dark:text-amber-200">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Western Sahara payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Resilient MLM payments for Western Sahara growth corridors
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Western Sahara
                – EH now flow through Cloud MLM Software’s AI-supervised control plane. The legacy gateway
                bundle stays intact while we add desert-proof UX, cooperative enablement, and compliance guardrails.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_POINTS.map((point) => (
                <article
                  key={point.label}
                  className="rounded-3xl border border-amber-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <point.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                  <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{point.label}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{point.description}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={contactHref}>
                  Talk with a Western Sahara payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-200/80 text-amber-800 hover:bg-white/70 dark:border-amber-400/40 dark:text-amber-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="space-y-6">
              <article className="rounded-3xl border border-amber-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-200">
                  Gateway bundle
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen
                </p>
              </article>
              <article className="rounded-3xl border border-amber-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-200">
                  AI observability
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  AI copilots surface conversion, settlement, and supply-chain signals so finance and operations teams react early.
                </p>
              </article>
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={pricingHref}>
                  Review Western Sahara implementation packs
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <BarChart3 className="h-4 w-4" aria-hidden />
            Local payment fabric
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Connect PSP scale with Western Sahara’s operating realities
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {LOCAL_PARTNERS.map((partner) => (
            <article
              key={partner.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-amber-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <partner.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{partner.name}</h3>
                <p className="text-sm font-medium text-amber-700 dark:text-amber-200">{partner.focus}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{partner.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Compass className="h-4 w-4" aria-hidden />
            Execution journey
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Four phases from discovery to cross-corridor scale
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {STEPS.map((step) => (
            <article
              key={step.phase}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  {step.phase}
                </span>
                <div>
                  <step.icon className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-slate-500 dark:text-slate-300" aria-hidden />
                    <span>{bullet}</span>
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
            AI-prepared answers for Western Sahara finance and compliance teams
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
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400"
          >
            <Link href={contactHref}>
              Build your Western Sahara launch plan
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
