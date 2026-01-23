import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Flag,
  Layers3,
  ShieldCheck,
  Signal,
  Sparkles
} from "lucide-react";
import {
  ChatCenteredDots,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Lightning,
  MapTrifold,
  Plugs,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type Module = {
  title: string;
  summary: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  label: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Gateway lineup",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Exactly as listed in the Ecuador WordPress page, orchestrated with AI telemetry and compliance guardrails.",
    icon: Plugs
  },
  {
    title: "Currency strategy",
    value: "USD + regional FX",
    description:
      "Multi currency module reconciles Ecuador’s dollarised economy alongside EUR and localised wallets for border trade.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience coverage",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    description:
      "Plus e-voucher and backup manager controls—each upgraded with AI assistance, SLA dashboards, and audit exports.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual operations",
    summary:
      "Serve Spanish and English experiences across portals, ticket replies, and nurture campaigns tailored to Ecuadorian segments.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Ticket system governance",
    summary:
      "Segment requests for finance, compliance, and distributor coaching with measurable SLAs and exportable evidence.",
    icon: ChatCenteredDots
  },
  {
    title: "Auto responder cadence",
    summary:
      "Trigger onboarding, compliance, and reorder flows as soon as payment telemetry changes.",
    icon: Lightning
  },
  {
    title: "E-wallet resilience",
    summary:
      "Provide instant payouts backed by encrypted backup snapshots to protect commissions during infrastructure shifts.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal trusted checkout",
    focus: "Support diaspora sales and Ecuador’s growing e-commerce footprint.",
    bullets: [
      "FX routing covering USD and regional settlement partners.",
      "Chargeback evidence packs linked to ticket histories.",
      "Conversion analytics segmented by distributor tier."
    ],
    icon: ShieldCheck
  },
  {
    name: "Skrill payout velocity",
    focus: "Deliver fast commissions to mobile-first distributors.",
    bullets: [
      "Weekly, monthly, and milestone payouts with liquidity guardrails.",
      "AML reviews captured automatically inside the ticket system.",
      "Auto responder notices confirm wallet funding events."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay protection",
    focus: "Guard recurring kit purchases with PSD2-ready security.",
    bullets: [
      "Adaptive fraud scoring for Ecuadorian telecom realities.",
      "Fallback routing ensures authorisation stability.",
      "AI alerts point finance teams to unusual activity."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation",
    focus: "Launch new membership bundles and digital services quickly.",
    bullets: [
      "Tokenised payments for subscriptions and loyalty upgrades.",
      "Webhook automation syncing Shopify, WooCommerce, and Magento.",
      "Experiment dashboards feed AI recommendations to leadership."
    ],
    icon: Sparkles
  }
];

const PHASES: Phase[] = [
  {
    label: "Discover",
    description: "Translate the WordPress checklist into Ecuadorian realities.",
    bullets: [
      "Stakeholder workshops across finance, compliance, and distributor leadership.",
      "Inventory of existing gateways, tickets, and multilingual assets.",
      "Risk analysis spanning AML, tax, and infrastructure reliability."
    ],
    icon: MapTrifold
  },
  {
    label: "Activate",
    description: "Enable gateways and modules in a governed sandbox.",
    bullets: [
      "Configure PayPal, Skrill, SecurionPay, and Braintree with telemetry.",
      "Launch multi currency, multilingual, ticketing, auto responder, e-wallet, and backup manager modules together.",
      "Define approvals, SLAs, and audit artefacts for finance and compliance teams."
    ],
    icon: Layers3
  },
  {
    label: "Experience",
    description: "Synchronise storefronts, portals, and communications.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as cited in the article.",
      "Localise copy for Spanish and English audiences across replicated sites.",
      "Automate nurture journeys tied to payment and ticket telemetry."
    ],
    icon: Building2
  },
  {
    label: "Optimise",
    description: "Maintain growth with AI-guided reviews and rituals.",
    bullets: [
      "Monthly telemetry reviews covering FX exposure and conversion health.",
      "Ticket audits to uphold SLAs and compliance expectations.",
      "Backup rehearsals safeguarding commission continuity."
    ],
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can you manage Ecuador’s USD base with additional currencies?",
    answer:
      "Yes. The multi currency module keeps USD, EUR, and regional wallets aligned with hedging rules, variance alerts, and treasury exports."
  },
  {
    question: "How are ticket and auto responder workflows connected?",
    answer:
      "Ticket statuses automatically trigger multilingual communications so distributors receive proactive updates without manual outreach."
  },
  {
    question: "What post-launch support is provided?",
    answer:
      "Dedicated pods deliver telemetry summaries, ticket audits, and compliance evidence packs so Ecuador operations stay resilient."
  }
];

export const metadata: Metadata = {
  title: "Ecuador MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Ecuadorian MLM programmes with Cloud MLM Software’s multilingual, multi-currency, and compliance automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/ecuador"
  },
  openGraph: {
    title: "Ecuador MLM Payment Gateways",
    description:
      "Transform the Ecuador WordPress checklist into an AI-ready payment and support programme."
  }
};

type EcuadorPageProps = {
  params: { lang: SupportedLocale };
};

export default function EcuadorPaymentGatewayPage({ params }: EcuadorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Ecuador · Gateway acceleration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Modernise Ecuador’s MLM payment operations with precision
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                We respect the WordPress “Ways to accept payments” guidance—keeping the named gateways and modules—while
                adding AI telemetry, FX guardrails, and multilingual automation that match Ecuador’s market.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Start your Ecuador programme
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Request a guided demo</Link>
              </Button>
            </div>
          </div>
          <dl className="grid gap-5">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{item.title}</dt>
                      <dd className="mt-2 text-lg font-semibold text-white">{item.value}</dd>
                      <p className="mt-3 text-sm text-white/75">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Modules cited in the legacy article—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
            operate in unison with AI assistance and compliance artefacts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{module.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Gateway tactics aligned with Ecuador’s growth drivers
            </h2>
            <p className="text-sm text-muted-foreground">
              The WordPress gateway list remains intact while Cloud MLM Software supplies orchestration, telemetry, and
              compliance guardrails.
            </p>
          </div>
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review pricing tiers
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-border/70 bg-muted/40 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-18 text-white">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Four phases to launch and optimise your Ecuador payment footprint
            </h2>
            <p className="text-sm text-white/70">
              Each stage produces clear artefacts so finance, compliance, and distributor teams stay aligned.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold">{phase.label}</h3>
                  </div>
                  <p className="text-sm text-white/75">{phase.description}</p>
                  <ul className="space-y-2 text-sm text-white/75">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-white/70" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Finance, compliance, and technology leaders ask these questions first when modernising Ecuadorian
            operations.
          </p>
        </div>
        <div className="space-y-6">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-sky-500/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Ecuador MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software unites the gateways, modules, and services named in the WordPress archive with AI
                telemetry, compliance artefacts, and proactive customer care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Talk to a strategist
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={pricingHref}>Review pricing</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Support cadence
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Ecuador success pod</p>
                </div>
                <Flag className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry reviews, ticket audits, and compliance documentation aligned with Ecuador’s regulators
                and banking partners.
              </p>
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
