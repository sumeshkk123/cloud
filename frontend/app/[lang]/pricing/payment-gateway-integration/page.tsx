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
  Banknote,
  Fingerprint,
  Gauge,
  Globe2,
  Shield,
  Spline
} from "lucide-react";
import {
  CardsThree,
  CoinVertical,
  Cube,
  GearSix,
  Lightning,
  LockKeyOpen,
  Vault
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Package = {
  name: string;
  price: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  icon: IconType;
};

type Phase = {
  title: string;
  duration: string;
  summary: string;
  outputs: string[];
  icon: IconType;
};

type Guarantee = {
  title: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Gateways orchestrated",
    value: "45+",
    detail: "Regional, global, crypto, and wallet providers connected to Cloud MLM Software.",
    icon: CardsThree
  },
  {
    title: "Authorization uplift",
    value: "17%",
    detail: "Average success rate improvement after routing and retry optimisation.",
    icon: Lightning
  },
  {
    title: "Compliance readiness",
    value: "100%",
    detail: "PCI DSS, PSD2 SCA, and local regulatory requirements embedded in workflows.",
    icon: Shield
  },
  {
    title: "Rollout timeline",
    value: "6 weeks",
    detail: "Average time to configure, test, and launch one payment gateway.",
    icon: Gauge
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Unified payment fabric",
    description:
      "Centralise authorisation, capture, and settlement flows with resilient integrations that adapt to market changes.",
    bullets: [
      "Smart routing based on geography, card type, and risk profile",
      "Fallback switching for gateway outages or maintenance windows",
      "Automated reconciliation and payout matching for finance teams"
    ],
    icon: Cube
  },
  {
    title: "Risk and compliance automation",
    description:
      "Embed KYC, AML, and fraud checks into your enrolment and checkout journeys without friction for distributors or customers.",
    bullets: [
      "Identity verification, watchlist screening, and document management",
      "Chargeback workflows with evidence kits and dispute automation",
      "Audit-ready logs and regulator reporting"
    ],
    icon: LockKeyOpen
  },
  {
    title: "Analytics and optimisation",
    description:
      "Measure payment performance, identify leakage, and fine-tune routing strategies to protect cash flow and margin.",
    bullets: [
      "Real-time dashboards for approvals, declines, and fees",
      "AI-assisted anomalies highlighting fraud or friction",
      "Forecasting for liquidity, reserves, and chargeback exposure"
    ],
    icon: Spline
  }
];

const PACKAGES: Package[] = [
  {
    name: "Core launch",
    price: "$18k fixed",
    description: "Single gateway integration with compliance and reconciliation guardrails.",
    bestFor: "Brands launching digital payments or upgrading legacy flows.",
    deliverables: [
      "Gateway connector, webhooks, and secure token vault",
      "Compliance checklist with KYC/AML workflows",
      "Finance runbook for reconciliation and variance handling"
    ],
    icon: CoinVertical
  },
  {
    name: "Multi-gateway hub",
    price: "$28k fixed",
    description: "Multi-gateway routing, redundancy, and analytics built for growing organisations.",
    bestFor: "Companies expanding into new markets or product models.",
    deliverables: [
      "Routing and failover engine with monitoring",
      "Integrated fraud scoring and chargeback handling",
      "Finance and support enablement toolkit"
    ],
    icon: GearSix
  },
  {
    name: "Enterprise payment fabric",
    price: "Custom engagement",
    description: "Advanced treasury, risk, and automation capabilities for global enterprises.",
    bestFor: "Highly regulated or high-volume payment environments.",
    deliverables: [
      "Treasury integration with hedging and reserve modelling",
      "Payment data lake for AI insights and forecasting",
      "Dedicated optimisation squad and compliance PMO"
    ],
    icon: Vault
  }
];

const PHASES: Phase[] = [
  {
    title: "Assessment & design",
    duration: "Week 1",
    summary: "Review payment mix, regulatory obligations, and desired customer experiences to shape integration architecture.",
    outputs: [
      "Gateway design blueprint",
      "Risk and compliance matrix",
      "Success metrics & reporting plan"
    ],
    icon: Globe2
  },
  {
    title: "Build & validation",
    duration: "Weeks 2-4",
    summary: "Configure connectors, risk controls, and reconciliation flows. Validate with sandbox testing and stakeholder sign-off.",
    outputs: [
      "Gateway configuration & sandbox tests",
      "KYC/AML workflow automation",
      "Finance reconciliation dry runs"
    ],
    icon: Banknote
  },
  {
    title: "Launch & optimisation",
    duration: "Weeks 5-6",
    summary: "Production rollout, monitoring, and performance tuning. Capture learnings for future gateways and markets.",
    outputs: [
      "Go-live command centre & playbooks",
      "Analytics dashboards and variance alerts",
      "Optimisation backlog with ROI estimates"
    ],
    icon: Fingerprint
  }
];

const GUARANTEES: Guarantee[] = [
  {
    title: "Security-first delivery",
    detail: "Tokenisation, vaulting, and encryption practices align with PCI DSS and global standards."
  },
  {
    title: "Finance-ready operations",
    detail: "We pair with your finance leads to ensure settlement, fees, and tax mapping is accurate from day one."
  },
  {
    title: "Continuous support",
    detail: "Post-launch monitoring and guidance keep your payment stack resilient as markets evolve."
  }
];

const FAQS: Faq[] = [
  {
    question: "Do you support regional gateways or alternative payments?",
    answer:
      "Yes. We integrate with card processors, bank transfers, e-wallets, and alternative payments popular across APAC, LATAM, EMEA, and North America."
  },
  {
    question: "How do you handle PCI compliance?",
    answer:
      "We design integrations so Cloud MLM Software never stores sensitive card data. Tokenisation and hosted fields keep you within PCI scope while simplifying audits."
  },
  {
    question: "What if we need multiple currencies?",
    answer:
      "We pair payment gateway projects with our multi-currency system, ensuring FX, fees, and commissions remain consistent across markets."
  },
  {
    question: "Can we switch gateways later?",
    answer:
      "Our modular architecture makes it straightforward to add, remove, or reroute gateways without rebuilding upstream experiences."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Payment Gateway Integration Pricing | Cloud MLM Software";
  const description =
    "Explore pricing, roadmap, and deliverables for integrating payment gateways with Cloud MLM Software. Automate payments, compliance, and reconciliation with confidence.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/payment-gateway-integration", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PaymentGatewayIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function PaymentGatewayIntegrationPage({ params }: PaymentGatewayIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.22),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(59,130,246,0.18),transparent_50%),linear-gradient(135deg,rgba(15,23,42,1) 15%,rgba(2,44,34,0.85) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-200">
              Payments orchestrated for direct selling
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Payment gateway integration pricing engineered for compliance and scale.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Cloud MLM Software brings payment acceptance, risk controls, and finance automation together. Pick the engagement that aligns with your expansion plans and regulatory obligations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Request pricing consult
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  Explore pricing hub
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.title} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200/80">{metric.title}</p>
                    <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
                  </div>
                  <p className="text-sm text-slate-100/70">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities that keep payments resilient</h2>
          <p className="text-sm text-muted-foreground">
            We connect payments to the rest of your revenue operations. Every capability is designed to protect authorisations, ensure compliance, and empower finance teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages aligned with your treasury goals</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              From first-launch brands to global enterprises, pick the pricing tier that mirrors your payment complexity and compliance landscape.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <article key={pkg.name} className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-muted/40 p-3 text-xs font-semibold uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                    {pkg.bestFor}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link href={contactHref}>
                      Discuss this package
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Six-week delivery cadence</h2>
          <p className="text-sm text-muted-foreground">
            Our structured delivery keeps product, compliance, and finance stakeholders engaged and informed every step of the way.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article key={phase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Delivery guarantees</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              We back every engagement with disciplined processes that protect your reputation and cash flow.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {GUARANTEES.map((guarantee) => (
              <article key={guarantee.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{guarantee.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{guarantee.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Questions from finance, compliance, and product teams preparing for integration.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-emerald-100 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to modernise payment acceptance?</h2>
              <p className="text-sm text-muted-foreground">
                Share your gateway stack, markets, and compliance priorities. We’ll assemble a pricing proposal and roadmap built for your treasury strategy.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and integration checklist within one business day. We partner end-to-end—from blueprint to optimisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={pricingHref}>
                    Compare pricing options
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
