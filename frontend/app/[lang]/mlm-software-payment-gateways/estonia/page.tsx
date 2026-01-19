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
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Signal,
  Sparkles
} from "lucide-react";
import {
  ChatCenteredDots,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Plugs,
  StackSimple,
  Target
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  value: string;
  copy: string;
  icon: IconType;
};

type Module = {
  heading: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
  step: string;
  title: string;
  detail: string;
  bullets: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Gateway suite",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    copy: "The same four connectors cited in the Estonia WordPress export, orchestrated with AI telemetry and compliance guardrails.",
    icon: Plugs
  },
  {
    title: "Currency coverage",
    value: "EUR + USD + GBP",
    copy: "Multi currency automation keeps euro operations aligned with global revenue flows and hedging rules.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience modules",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    copy: "Plus e-voucher and backup manager modules—modernised with SLA dashboards and AI nudges.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    heading: "Multilingual delivery",
    description:
      "Serve Estonian, English, and Russian experiences across portals, documentation, and nurture journeys with brand consistency.",
    icon: Globe2
  },
  {
    heading: "Ticket system transparency",
    description:
      "Segment finance, compliance, and distributor support queues with measurable SLAs and exportable evidence packs.",
    icon: ChatCenteredDots
  },
  {
    heading: "Automation cadence",
    description:
      "Auto responder workflows push onboarding, compliance, and reorder updates based on payment telemetry and ticket status.",
    icon: Lightning
  },
  {
    heading: "E-wallet resilience",
    description:
      "Instant payouts partnered with encrypted backups and maker-checker approvals protect sensitive data in Estonia’s digital-first economy.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal trusted checkout",
    focus: "Provide globally recognised payments for SaaS-style kits and premium memberships.",
    bullets: [
      "FX routing aligns euro and foreign currency settlements with treasury policy.",
      "Chargeback packs compile ticket histories, contracts, and consent logs automatically.",
      "Conversion dashboards compare product lines and distributor cohorts for leadership clarity."
    ],
    icon: ShieldCheck
  },
  {
    name: "Skrill payout express",
    focus: "Deliver rapid commissions to remote-first Estonian distributor teams.",
    bullets: [
      "Weekly, milestone, and instant payout cadences with configurable liquidity guardrails.",
      "AML approvals captured directly in the ticket system for audit-ready records.",
      "Auto responder notices confirm wallet funding events and settlement status."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect subscription and digital kit transactions with PSD2-ready controls.",
    bullets: [
      "Adaptive fraud scoring tuned for Estonia’s advanced digital identity ecosystem.",
      "Fallback routing ensures authorisation stability during PSP incidents.",
      "Real-time alerts flag anomalies before they impact churn or regulator trust."
    ],
    icon: Gauge
  },
  {
    name: "Braintree experimentation",
    focus: "Prototype AI-driven offerings, tiered memberships, and micro-subscriptions quickly.",
    bullets: [
      "Tokenised payments support recurring billing, loyalty tiers, and upsell flows.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento catalogues in sync.",
      "Experiment dashboards feed AI recommendations to product and finance councils."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Discovery & context",
    detail: "Translate the WordPress checklist into Estonia-specific requirements.",
    bullets: [
      "Stakeholder interviews across finance, compliance, and product leadership.",
      "Audit of existing gateways, ticket cadences, and multilingual assets.",
      "Risk mapping covering PSD2, GDPR, and cross-border VAT exposure."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    title: "Gateway activation",
    detail: "Enable PayPal, Skrill, SecurionPay, and Braintree together with foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, and backup manager modules.",
      "Sandbox testing mirrors domestic and cross-border flows across the EU.",
      "Establish approval matrices, SLA dashboards, and compliance artefacts."
    ],
    icon: Layers3
  },
  {
    step: "03",
    title: "Experience synchronisation",
    detail: "Align ecommerce, portals, and automation with orchestrated payment logic.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as listed in the article.",
      "Localise content for Estonian, English, and Russian audiences to support key regions.",
      "Connect payment telemetry to nurture programmes and distributor success journeys."
    ],
    icon: Building2
  },
  {
    step: "04",
    title: "Optimisation cadence",
    detail: "Maintain agility with AI-led insights and continuous improvement.",
    bullets: [
      "Monthly telemetry reviews highlight FX exposure, conversion trends, and support health.",
      "Ticket audits and compliance packs keep auditors and banking partners aligned.",
      "Automation backlog prioritised with data from distributor councils and product teams."
    ],
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "How does Cloud MLM Software reconcile euro, dollar, and pound flows?",
    answer:
      "The multi currency module from the WordPress article now delivers hedging rules, variance alerts, and treasury-ready exports for all three currencies."
  },
  {
    question: "Can ticket and automation workflows operate in multiple languages?",
    answer:
      "Yes. Ticket outcomes trigger the corresponding language templates so distributors receive immediate updates without manual translation."
  },
  {
    question: "What post-launch support is available for Estonian programmes?",
    answer:
      "Dedicated pods manage telemetry reviews, ticket audits, and compliance artefacts tuned to Estonia’s regulators and innovation-driven banking partners."
  }
];

export const metadata: Metadata = {
  title: "Estonia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Estonia’s MLM operations with multilingual, multi-currency, and compliance automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/estonia"
  },
  openGraph: {
    title: "Estonia MLM Payment Gateways",
    description:
      "Transform the Estonia WordPress checklist into an AI-enabled payment and support experience."
  }
};

type EstoniaPageProps = {
  params: { lang: SupportedLocale };
};

export default function EstoniaPaymentGatewayPage({ params }: EstoniaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.18),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.22),transparent_55%),radial-gradient(circle_at_45%_90%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="container relative grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Estonia · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver Estonia-first MLM payment excellence
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software extends the WordPress “Ways to accept payments” guidance into an AI-ready blueprint
                that matches Estonia’s digital innovation pace, multilingual needs, and cross-border ambitions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Start the programme
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Preview the platform</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold">{highlight.title}</h2>
                      <p className="text-sm text-white/70">{highlight.value}</p>
                      <p className="mt-3 text-sm text-white/75">{highlight.copy}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Modules from the legacy page—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
            operate as a unified stack with AI insights and compliance artefacts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.heading}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{module.heading}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Gateway tactics for Estonia’s digital-first market
            </h2>
            <p className="text-sm text-muted-foreground">
              Each connector from the WordPress article is orchestrated with automation, telemetry, and compliance controls.
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

      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A four-stage programme grounded in the WordPress checklist
            </h2>
            <p className="text-sm text-white/70">
              Stakeholders gain transparent milestones with artefacts that demonstrate progress and compliance.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.step}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    <span>{stage.step}</span>
                    <Icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold">{stage.title}</h3>
                  <p className="text-sm text-white/75">{stage.detail}</p>
                  <ul className="space-y-2 text-sm text-white/75">
                    {stage.bullets.map((bullet) => (
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
            Finance, compliance, and technology leaders in Estonia ask these questions during discovery.
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
                Ready to orchestrate Estonia MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software implements the gateways, modules, and services cited in the WordPress archive—with AI
                telemetry, compliance artefacts, and proactive customer care built in.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Schedule a strategy call
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Estonia success pod</p>
                </div>
                <Target className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Receive telemetry summaries, ticket audits, and compliance documentation aligned with Estonian regulators and innovation-friendly banking partners.
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
