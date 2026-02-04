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
  Building,
  BarChart3,
  Compass,
  Globe2,
  Layers3,
  ShieldCheck,
  Signal,
  Sparkles
} from "lucide-react";
import {
  ChatCentered,
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
  heading: string;
  value: string;
  description: string;
  icon: IconType;
};

type Module = {
  name: string;
  summary: string;
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
    heading: "Gateway ecosystem",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Exactly the set described in the Eritrea WordPress page—now orchestrated with telemetry, failover logic, and compliance guardrails.",
    icon: Plugs
  },
  {
    heading: "Currency posture",
    value: "ERN · USD · EUR",
    description:
      "Multi currency module reconciles nakfa-ledger activity with hard currency settlements for diaspora sales and humanitarian partnerships.",
    icon: CurrencyCircleDollar
  },
  {
    heading: "Experience stack",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    description:
      "Plus e-voucher and backup manager modules—each from the legacy article—modernised with AI prompts and SLA dashboards.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    name: "Multilingual enablement",
    summary:
      "Deliver Tigrinya, Arabic, and English engagement across portals, documentation, and automated communications to support diaspora leaders.",
    icon: Globe2
  },
  {
    name: "Ticket transparency",
    summary:
      "Categorise finance, compliance, and field support requests with SLA timers, escalation policies, and exportable evidence packs.",
    icon: ChatCentered
  },
  {
    name: "Automation cadence",
    summary:
      "Auto responder workflows announce onboarding steps, payout releases, and compliance reminders in the relevant language.",
    icon: Lightning
  },
  {
    name: "E-wallet resilience",
    summary:
      "Keep commissions available even with intermittent connectivity through encrypted backups and maker-checker approvals.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora lifeline",
    focus: "Enable diaspora leaders to fund product kits and onboard new distributors with trusted checkout.",
    bullets: [
      "FX routing aligns ERN and USD settlements with treasury policy.",
      "Chargeback artefacts link to multilingual ticket histories for regulator confidence.",
      "Conversion dashboards compare diaspora and local campaigns to inform strategy."
    ],
    icon: Compass
  },
  {
    name: "Skrill payout express",
    focus: "Deliver commissions to mobile-first leaders operating across Eritrea’s regions and neighbouring markets.",
    bullets: [
      "Weekly, milestone, and instant payout cadences respect liquidity parameters.",
      "AML approvals captured inside the ticket system with audit-ready evidence.",
      "Auto responder notices confirm wallet funding and settlement status."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect card transactions for educational and wellness subscription bundles.",
    bullets: [
      "Adaptive fraud scoring tuned for East African telecom realities and satellite connections.",
      "Failover routing maintains authorisation rates when primary PSPs degrade.",
      "Real-time alerts surface anomalies so finance teams react before regulators intervene."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation",
    focus: "Prototype new memberships, partner offerings, and fundraising flows without disrupting production.",
    bullets: [
      "Tokenised payments support recurring giving, kits, and loyalty tiers.",
      "Webhook automation keeps WooCommerce, Magento, and Shopify inventory current.",
      "Experiment dashboards feed AI recommendations for leadership councils."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Discovery & alignment",
    description: "Translate the WordPress checklist into Eritrea-specific execution guidance.",
    bullets: [
      "Stakeholder sessions across finance, compliance, and humanitarian partnerships.",
      "Inventory of gateway usage, ticket queues, and multilingual materials.",
      "Risk mapping covering AML, FX controls, and connectivity constraints."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    title: "Gateway activation",
    description: "Enable PayPal, Skrill, SecurionPay, and Braintree alongside foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules.",
      "Sandbox testing mirrors local, diaspora, and humanitarian support flows.",
      "Define approval chains, SLA dashboards, and compliance artefacts."
    ],
    icon: Layers3
  },
  {
    step: "03",
    title: "Experience synchronisation",
    description: "Align storefronts, portals, and communications with orchestrated payment policies.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as referenced in the article.",
      "Localise experiences for Tigrinya, Arabic, and English audiences.",
      "Link payment telemetry to nurture journeys and retention programmes."
    ],
    icon: Building
  },
  {
    step: "04",
    title: "Optimisation cadence",
    description: "Maintain resilient operations with AI-led reviews and preparedness drills.",
    bullets: [
      "Monthly telemetry readouts covering FX exposure, conversion performance, and ticket health.",
      "Compliance evidence and backup rehearsals to satisfy regulator and donor expectations.",
      "Quarterly retros prioritising automation requests from distributor councils."
    ],
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "How does Cloud MLM Software reconcile ERN, USD, and EUR activity?",
    answer:
      "The multi currency module central to the WordPress article automates hedging rules, monitors variance, and produces treasury-ready exports across all three currencies."
  },
  {
    question: "Can ticket and auto responder workflows operate across multiple languages?",
    answer:
      "Yes. Ticket outcomes automatically trigger the appropriate language templates so distributors and partners receive timely updates without manual translation."
  },
  {
    question: "What ongoing support do Eritrean operations receive?",
    answer:
      "Dedicated pods deliver telemetry reviews, ticket audits, and compliance artefacts tailored to Eritrea’s regulatory environment and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Eritrea MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Eritrean MLM operations with multilingual, multi-currency, and compliance automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/eritrea"
  },
  openGraph: {
    title: "Eritrea MLM Payment Gateways",
    description:
      "Turn the Eritrea gateway checklist into an AI-enabled payment and support experience with Cloud MLM Software."
  }
};

type EritreaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function EritreaPaymentGatewayPage({ params }: EritreaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-900 py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Eritrea · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build a resilient Eritrea MLM payment footprint
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software expands the WordPress “Ways to accept payments” blueprint into a governed, AI-ready
                experience spanning diaspora, humanitarian, and local distributor journeys.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Talk with our strategists
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
                  key={highlight.heading}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold">{highlight.heading}</h2>
                      <p className="text-sm text-white/70">{highlight.value}</p>
                      <p className="mt-3 text-sm text-white/75">{highlight.description}</p>
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
            Modules highlighted in the legacy article—modernised together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
            form a cohesive platform with compliance artefacts and AI guidance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{module.name}</h3>
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
              Gateway tactics for Eritrea’s local and diaspora journeys
            </h2>
            <p className="text-sm text-muted-foreground">
              The WordPress gateway list remains at the core while Cloud MLM Software orchestrates automation and telemetry.
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
              We convert the historical content into accountable milestones with artefacts for every stakeholder.
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
                  <p className="text-sm text-white/75">{stage.description}</p>
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
            Finance, compliance, and distributor leaders request these clarifications when we modernise Eritrea operations.
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
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-amber-500/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Eritrea MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                We deliver the gateways, modules, and services cited in the WordPress export—now infused with telemetry,
                compliance artefacts, and proactive support tuned for Eritrea’s realities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Speak with a strategist
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Eritrea success pod</p>
                </div>
                <Target className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Gain telemetry readouts, ticket audits, and compliance evidence packs timed with regulator milestones and diaspora engagement campaigns.
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
