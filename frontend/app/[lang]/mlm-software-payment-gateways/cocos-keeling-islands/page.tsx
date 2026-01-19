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
  Compass,
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Waves
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Handshake,
  IdentificationBadge,
  MapTrifold,
  SealQuestion
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cocos (Keeling) Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Coordinate banking, PSP, and compliance workflows for Cocos (Keeling) Islands MLM operations with Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cocos-keeling-islands"
  },
  openGraph: {
    title: "Cocos (Keeling) Islands MLM Payment Gateways",
    description:
      "Unify Australian banking, PSPs, and regional wallets for Cocos (Keeling) Islands MLM growth using Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/cocos-keeling-islands"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Opportunity = {
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

type Step = {
  stage: string;
  focus: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Settlement cadence",
    value: "T+1.5 days",
    description: "ANZ, NAB, and Westpac clearing with AUD and SGD corridors for island operations.",
    icon: Gauge
  },
  {
    label: "Gateway portfolio",
    value: "10 integrations",
    description: "Stripe, Adyen, PayPal, Square, PayU, and Braintree orchestrated with redundancy and fee telemetry.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "29 documentation packs",
    description: "AUSTRAC, ATO, and external territory reporting templates with localized narratives.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Seasonal tourism",
    copy: "Dive tourism and eco-travel drive peak demand, requiring agile onboarding and offline payment capture.",
    icon: Waves
  },
  {
    title: "Regional workforce",
    copy: "Indonesia and Western Australia networks need multi-currency payouts and bilingual communications.",
    icon: Globe2
  },
  {
    title: "Remote compliance",
    copy: "AUSTRAC oversight and external territory tax requirements demand automated reporting flows.",
    icon: BarChart3
  },
  {
    title: "Supply chain volatility",
    copy: "Logistics variability calls for inventory-aware incentives and proactive liquidity planning.",
    icon: Compass
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury visibility",
    summary: "Connect Australian banking stack with island-specific liquidity dashboards.",
    bullets: [
      "Direct integrations with ANZ, NAB, and Westpac covering bulk settlement batches.",
      "FX-aware dashboards for AUD, SGD, and USD balances with predictive alerts.",
      "Automated reconciliations exported to accountants and corporate service partners."
    ],
    icon: Bank
  },
  {
    title: "PSP & wallet orchestration",
    summary: "Maintain consistent acceptance across online, mobile, and offline experiences.",
    bullets: [
      "Routing across Stripe, Adyen, PayPal, Square, and Braintree with connectivity-aware fallbacks.",
      "Offline capture workflows that sync once connectivity stabilizes.",
      "Chargeback automation with evidence archives ready for support and compliance teams."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence",
    summary: "Surface insights and compliance cues in English and Bahasa Indonesia.",
    bullets: [
      "Role-based dashboards blending commission, tax, and stock visibility.",
      "Predictive nudges for churn risk, training needs, and compliance follow-ups.",
      "Knowledge base assets aligned to island operations, tourism, and services segments."
    ],
    icon: ChartLineUp
  }
];

const STEPS: Step[] = [
  {
    stage: "Blueprint",
    focus: "Discovery + compliance mapping",
    description:
      "Workshops unify banking partners, PSP priorities, and AUSTRAC expectations into a sequenced plan.",
    icon: MapTrifold
  },
  {
    stage: "Activation",
    focus: "Gateway and telemetry enablement",
    description:
      "Launch integrations in waves with uptime monitoring, offline capture tests, and distributor toolkits.",
    icon: IdentificationBadge
  },
  {
    stage: "Optimization",
    focus: "Analytics + compliance drills",
    description:
      "Quarterly reviews deliver AI insight digests, regulatory rehearsals, and seasonal readiness playbooks.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you support offline PSP operations on Cocos (Keeling) Islands?",
    answer:
      "Yes. Offline capture modes retain transactions for later sync, ensuring accurate reconciliation once connectivity returns."
  },
  {
    question: "How are AUSTRAC and ATO obligations handled?",
    answer:
      "Our compliance layer automates AUSTRAC AML/KYC workflows and produces ATO-ready tax documentation with audit trails."
  },
  {
    question: "Can distributors self-serve in multiple languages?",
    answer:
      "Dashboards, statements, and alerts are localized for English and Bahasa Indonesia, with role-based access controls."
  }
];

type CocosKeelingIslandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function CocosKeelingIslandsPaymentGatewayPage({ params }: CocosKeelingIslandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-cyan-900 to-emerald-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(34,211,238,0.32),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.3),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-cyan-100 backdrop-blur">
                Cocos (Keeling) Islands · Payment Field Manual
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Coordinate modern MLM payments across the Indian Ocean territory.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software connects Australian banks, PSPs, and distributor tooling into a single governed fabric. Deliver
                reliable experiences across online, mobile, and seasonal in-person events—even when bandwidth is limited.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Plan your territory rollout
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                  <Link href={demoHref}>Tour the live platform</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-cyan-100/80">{metric.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-200/75">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Opportunities informing your payment roadmap
          </h2>
          <p className="text-sm text-muted-foreground">
            Translate operational realities into a resilient payment stack for distributors and customers alike.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {OPPORTUNITIES.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <article key={opportunity.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{opportunity.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{opportunity.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities tuned for Cocos (Keeling) Islands operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Every module reinforces resilience, compliance, and distributor confidence.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review pricing frameworks
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.summary}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/40">
          <div className="grid gap-10 p-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Implementation stages with Cloud MLM Software
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured stages fast-track outcomes while keeping governance in lockstep.
              </p>
            </div>
            <div className="grid gap-6">
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.stage} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{step.stage}</span>
                          <h3 className="text-lg font-semibold text-foreground">{step.focus}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked on Cocos (Keeling) Islands engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Addressing the questions we hear from finance, compliance, and distributor leaders.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FAQS.map((faq) => (
            <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <SealQuestion className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-cyan-500/15 via-emerald-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Cocos (Keeling) Islands payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to unite banking, PSPs, and distributors under one intelligent payment engine.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Design your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>
                  Explore live environments
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
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
