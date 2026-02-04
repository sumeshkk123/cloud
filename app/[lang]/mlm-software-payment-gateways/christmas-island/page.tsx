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
  BarChart2,
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
  title: "Christmas Island MLM Payment Gateways | Cloud MLM Software",
  description:
    "Enable compliant MLM payments on Christmas Island with banking, PSP, and mobile wallet orchestration from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/christmas-island"
  },
  openGraph: {
    title: "Christmas Island MLM Payment Gateways",
    description:
      "Unify island banking, Australian PSPs, and cross-border commerce for Christmas Island MLM growth with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/christmas-island"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
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
  label: string;
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
    title: "Settlement rhythm",
    value: "T+1.4 days",
    detail: "ANZ, Westpac, and Commonwealth Bank clearing with AUD and SGD corridor coverage.",
    icon: Gauge
  },
  {
    title: "Gateway portfolio",
    value: "9 integrations",
    detail: "Stripe, Adyen, PayPal, Square, PayU, and local EFTPOS terminals orchestrated with policy controls.",
    icon: Layers3
  },
  {
    title: "Compliance artefacts",
    value: "27 packs",
    detail: "AUSTRAC, ATO, and external territory tax documentation localized for island operations.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Island tourism peaks",
    copy:
      "Seasonality requires rapid onboarding for pop-up events, offline capture, and smart liquidity buffers.",
    icon: Waves
  },
  {
    title: "Cross-border workforce",
    copy:
      "Malaysian and Singaporean distributors need multi-currency payouts and bilingual enablement.",
    icon: Globe2
  },
  {
    title: "Remote compliance expectations",
    copy:
      "AUSTRAC and Australian Taxation Office oversight demands automated KYC, AML, and reporting workflows.",
    icon: BarChart2
  },
  {
    title: "Connectivity variance",
    copy: "Fallback logic and offline support keep customer experiences consistent when bandwidth drops.",
    icon: Compass
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury alignment",
    summary: "Connect Australian banking partners with island-specific liquidity visibility.",
    bullets: [
      "ANZ, Westpac, and Commonwealth Bank integrations with staged settlement batches.",
      "Liquidity dashboards monitoring AUD, SGD, and USD positions with alerting.",
      "Automated reconciliation exports tailored to corporate services and accountants."
    ],
    icon: Bank
  },
  {
    title: "PSP & wallet orchestration",
    summary: "Deliver omnichannel acceptance across card, wallet, and offline scenarios.",
    bullets: [
      "Stripe, Adyen, PayPal, and Square routing with connectivity-aware failover.",
      "Support for EFTPOS terminals and offline capture synced when signal returns.",
      "Chargeback and dispute automation with evidence vaults accessible to support."
    ],
    icon: Handshake
  },
  {
    title: "Distributor insight cockpit",
    summary: "Equip field leaders with narratives, alerts, and compliance prompts.",
    bullets: [
      "Dashboards in English and Malay with commission, tax, and inventory visibility.",
      "Predictive nudges covering churn risk, coaching opportunities, and compliance deadlines.",
      "Document vault centralizing KYC, licenses, and seasonal workforce onboarding artefacts."
    ],
    icon: ChartLineUp
  }
];

const IMPLEMENTATION_STEPS: Step[] = [
  {
    label: "Discovery & blueprint",
    focus: "Stakeholder workshops and compliance mapping",
    description:
      "Align banking partners, PSP priorities, and AUSTRAC expectations in a documented rollout plan.",
    icon: MapTrifold
  },
  {
    label: "Activation sprints",
    focus: "Gateway, wallet, and telemetry enablement",
    description:
      "Launch integrations in waves with uptime monitoring, offline capture testing, and distributor enablement kits.",
    icon: IdentificationBadge
  },
  {
    label: "Optimization loop",
    focus: "Analytics, compliance drills, and seasonal readiness",
    description:
      "Deliver AI insights, quarterly compliance rehearsals, and seasonal activation packs to stay ahead of demand.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you support offline payments when connectivity is limited?",
    answer:
      "Yes. We provide offline capture for card and wallet transactions, syncing data and reconciliation the moment connectivity is restored."
  },
  {
    question: "How are AUSTRAC and ATO obligations managed?",
    answer:
      "Our compliance cockpit automates AUSTRAC KYC/AML workflows, tax reporting, and evidence collection so finance teams stay audit-ready."
  },
  {
    question: "Can distributors access dashboards in multiple languages?",
    answer:
      "Dashboards, statements, and alerts are localized for English and Malay with sector-specific narratives for tourism and services."
  }
];

type ChristmasIslandPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function ChristmasIslandPaymentGatewayPage({ params }: ChristmasIslandPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-teal-900 to-sky-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(20,184,166,0.32),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(56,189,248,0.28),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-teal-100 backdrop-blur">
                Christmas Island · Payment Operating Guide
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Make island commerce effortless with orchestrated MLM payments.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software unites Australian banking partners, PSPs, and distributor tooling into one resilient stack.
                Deliver trusted customer experiences across pop-up events, online channels, and regional expansion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Plan island rollout
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                  <Link href={demoHref}>Tour the platform</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-teal-100/80">{metric.title}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-200/75">{metric.detail}</p>
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
            Opportunities guiding Christmas Island payment strategy
          </h2>
          <p className="text-sm text-muted-foreground">
            Translate local realities into platform features that accelerate compliant growth.
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
              Capabilities tailored for island operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Reliability, compliance, and distributor excellence wrapped into every module.
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
          <div className="grid gap-10 p-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Implementation path with Cloud MLM Software
              </h2>
              <p className="text-sm text-muted-foreground">
                Follow structured stages that keep stakeholders aligned while fast-tracking value.
              </p>
            </div>
            <div className="grid gap-6">
              {IMPLEMENTATION_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{step.label}</span>
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
            Frequently asked on Christmas Island engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Responses for the finance, compliance, and distributor questions we hear most often.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-teal-500/15 via-sky-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Christmas Island payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to bring banking, PSPs, and distributors into one intelligent payment model.
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
