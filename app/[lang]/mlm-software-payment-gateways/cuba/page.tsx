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
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  ChatCenteredText,
  Gear,
  GlobeHemisphereWest,
  HandCoins,
  Headset,
  Lifebuoy,
  Lightning,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  stat: string;
  description: string;
  icon: IconType;
};

type EnablementPillar = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayProfile = {
  name: string;
  synopsis: string;
  focusPoints: string[];
  icon: IconType;
};

type DeliveryStage = {
  phase: string;
  title: string;
  copy: string;
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Payment connectors",
    stat: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Cloud MLM Software already orchestrates the payment gateways promoted for the People’s Democratic Republic of Cuba – giving you verified rails from day one.",
    icon: BadgeCheck
  },
  {
    label: "Experience modules",
    stat: "Multi-currency & multilingual",
    description:
      "Leverage the multi currency and multilingual modules to present CUP, USD, and Spanish-first experiences without fragmenting the distributor journey.",
    icon: Globe2
  },
  {
    label: "Service coverage",
    stat: "E-commerce through Shopify",
    description:
      "Pair payment orchestration with e-commerce integration, WooCommerce, Magento, and Shopify services for end-to-end digital retail alignment.",
    icon: Sparkles
  }
];

const ENABLEMENT_PILLARS: EnablementPillar[] = [
  {
    title: "Localized onboarding",
    description:
      "Provide Cuban distributors with multilingual portals, localized terms, and cultural nuance powered by the multilingual module referenced in the legacy site.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Service desk continuity",
    description:
      "Ticket system workflows ensure every payout or enrolment question is tracked, triaged, and resolved with evidence for your compliance reviews.",
    icon: Lifebuoy
  },
  {
    title: "Automated engagement",
    description:
      "Auto-responder journeys nurture prospects and distributors with personalized touchpoints so finance and sales teams stay focused on strategy.",
    icon: ChatCenteredText
  },
  {
    title: "Treasury resilience",
    description:
      "Combine the e-wallet and backup manager modules for secure digital balances, encoded data storage, and disaster-ready recovery playbooks.",
    icon: HandCoins
  }
];

const GATEWAY_PROFILES: GatewayProfile[] = [
  {
    name: "PayPal for global reach",
    synopsis:
      "Enable cross-border enrolment and online product purchases while keeping risk thresholds aligned to Cuban oversight.",
    focusPoints: [
      "Instant onboarding playbooks that clarify know-your-customer requirements for Cuban distributors.",
      "Settlement routing that separates CUP and USD flows to simplify reconciliation.",
      "Chargeback response templates tuned for network marketing narratives."
    ],
    icon: StackSimple
  },
  {
    name: "Skrill digital wallet rails",
    synopsis:
      "Deliver wallet-first payouts to digital-native leaders who expect immediate access to commissions.",
    focusPoints: [
      "Embedded AML prompts that mirror the guidance in the WordPress export content.",
      "Configurable payout frequencies for weekly, monthly, or on-demand withdrawals.",
      "Alerts when wallet balances approach thresholds, ensuring treasury keeps liquidity plans updated."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay orchestration",
    synopsis:
      "Pair local card acceptance with AI-backed fraud prevention to protect Cuban onboarding campaigns.",
    focusPoints: [
      "Two-step authentication settings curated for Cuban telecom conditions.",
      "Granular routing policies so premium product lines receive preferred acquiring treatment.",
      "Unified dashboards that monitor decline ratios, dispute activity, and authorisation speeds."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree developer flexibility",
    synopsis:
      "Launch nuanced compensation mechanics with a gateway that favours modular APIs and rapid experimentation.",
    focusPoints: [
      "Blueprints for recurring billing that align with subscription-style product kits.",
      "Tokenisation support that keeps card data off your infrastructure while powering repeat orders.",
      "Sandbox-to-production migration guardrails with success metrics for every sprint."
    ],
    icon: Gear
  }
];

const DELIVERY_STAGES: DeliveryStage[] = [
  {
    phase: "01",
    title: "Diagnostic immersion",
    copy:
      "We interpret your compensation plans, map existing Cuban payment habits, and document governance expectations before any integration begins.",
    icon: Workflow
  },
  {
    phase: "02",
    title: "Gateway alignment",
    copy:
      "Our engineers activate the PayPal, Skrill, SecurionPay, and Braintree connectors while configuring multi currency, e-wallet, and multilingual modules in tandem.",
    icon: StackSimple
  },
  {
    phase: "03",
    title: "Service and commerce fusion",
    copy:
      "Website, WooCommerce, Magento, and Shopify touchpoints are synchronised so every Cuban customer sees consistent inventory, pricing, and messaging.",
    icon: Globe2
  },
  {
    phase: "04",
    title: "Operational handover",
    copy:
      "Ticketing cadences, backup protocols, and performance scorecards are embedded with your teams to keep optimisation continuous long after launch.",
    icon: Headset
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which MLM payment gateways are production-ready for Cuba?",
    answer:
      "Cloud MLM Software presently maintains orchestrations for PayPal, Skrill, SecurionPay, and Braintree—the exact gateways promoted in the legacy Cuba page—so your launch starts with proven playbooks."
  },
  {
    question: "How do you handle Cuba’s language and currency expectations?",
    answer:
      "The multi currency module publishes CUP and USD ledgers while the multilingual module equips distributors and customers with Spanish-first experiences. Both modules are highlighted in the original WordPress content and ship with this delivery."
  },
  {
    question: "What ongoing support is offered after go-live?",
    answer:
      "Ticket workflow automation, auto-responder journeys, and backup manager routines form a service mesh that keeps Cuban operations supported and audit-ready every week."
  }
];

const SERVICE_PAIRINGS = [
  "MLM Software Development",
  "E-Commerce Integration",
  "WooCommerce Integration",
  "Opencart Development",
  "Magento Development",
  "Website Designing",
  "Web Development",
  "Shopify Integration"
];

export const metadata: Metadata = {
  title: "Cuba MLM Payment Gateways | Cloud MLM Software",
  description:
    "Launch compliant MLM payment operations in Cuba with Cloud MLM Software. Orchestrate PayPal, Skrill, SecurionPay, and Braintree alongside multi-currency and multilingual modules.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cuba"
  },
  openGraph: {
    title: "Cuba MLM Payment Gateways | Cloud MLM Software",
    description:
      "Activate Cuban MLM payment rails with Cloud MLM Software. Unified gateway orchestration, localized onboarding, and resilient treasury operations."
  }
};

type CubaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function CubaPaymentGatewayPage({ params }: CubaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services/mlm-software-development", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-slate-100 shadow-2xl dark:border-slate-700/60">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(16,185,129,0.32),transparent_55%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.3),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(14,165,233,0.4),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(16,185,129,0.45),transparent_55%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.4),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(14,165,233,0.5),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Cuba · MLM Payment Gateways
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Cuba MLM Payment Gateways engineered for resilient distributor growth
                </h1>
                <p className="max-w-2xl text-base text-slate-200/90">
                  Transform the legacy “Ways to accept payments from MLM Software in People’s Democratic Republic of Cuba – CU” guidance into a modern orchestration. Cloud MLM Software unifies gateways, e-wallets, and multilingual journeys so Cuban leaders operate with clarity, compliance, and confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Design your Cuba launch
                    <ArrowUpRight className="h-4 w-4 text-slate-700" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white/10"
                >
                  <Link href={demoHref}>Experience the demo</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.label}
                    className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl" aria-hidden />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">{highlight.label}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{highlight.stat}</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-100/70">{highlight.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Enablement layers tailored to Cuban MLM payment realities
          </h2>
          <p className="text-sm text-muted-foreground">
            The WordPress export highlighted core modules. We re-imagine them inside a modern platform so every Cuban distributor and customer enjoys predictable experiences.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {ENABLEMENT_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Payment gateway playbooks trusted in Cuba
            </h2>
            <p className="text-sm text-muted-foreground">
              Each gateway comes from the original Cuba article. We modernise the approach with AI-ready monitoring, compliance guardrails, and faster experimentation cycles.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href={gatewaysHref}>
              Explore all countries
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PROFILES.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border/60 bg-muted/50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500" />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.synopsis}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.focusPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-[2.5rem] border border-border/60 bg-muted/40 p-10 shadow-sm md:grid-cols-[0.9fr,1.1fr] md:items-start">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Delivery rhythm for Cuba payment programmes
            </h2>
            <p className="text-sm text-muted-foreground">
              Translating the archived content into action means a tighter cadence, visible artefacts, and continuous optimisation from strategy through support.
            </p>
            <div className="flex flex-wrap gap-2">
              {SERVICE_PAIRINGS.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-border/60 bg-background px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {DELIVERY_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.phase}
                  className="relative grid gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm sm:grid-cols-[auto,1fr]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {stage.phase}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                    <p className="text-sm text-muted-foreground">{stage.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked about Cuba MLM payment enablement
          </h2>
          <p className="text-sm text-muted-foreground">
            Your peers ask similar questions while moving from the legacy page to a production-ready payment ecosystem.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-border/60 bg-gradient-to-r from-emerald-500/20 via-sky-500/15 to-blue-600/20 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to modernise Cuba MLM payment gateways?
              </h2>
              <p className="text-sm text-muted-foreground">
                Combine gateway orchestration, AI-ready monitoring, and multilingual care into one Cloud MLM Software experience tailored for the Cuban market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-primary text-white hover:bg-primary/90">
                  <Link href={servicesHref}>
                    Review service catalog
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={pricingHref}>
                    Compare pricing tiers
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Support cadence
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">24×7 Cuban operations desk</p>
                </div>
                <Headset className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Our support pod blends live ticketing, automated notifications, and proactive backup manager routines so your payouts stay uninterrupted.
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
