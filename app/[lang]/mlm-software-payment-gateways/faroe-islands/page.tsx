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
  Globe2,
  Layers3,
  Snowflake,
  Sparkles,
  Waves
} from "lucide-react";
import {
  ChatCenteredDots,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Plugs,
  ShieldCheck,
  StackSimple
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
    title: "Gateway roster",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    copy:
      "Exactly the connectors cited in the Faroe Islands WordPress export—modernised with telemetry and compliance guardrails.",
    icon: Plugs
  },
  {
    title: "Currency coverage",
    value: "DKK · DKK (Faroese krona) · USD",
    copy:
      "Multi currency automation keeps Faroese krona aligned with Danish krone parity and foreign currency settlements.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience stack",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    copy:
      "Plus e-voucher and backup manager modules from the legacy article—now enhanced with AI insights and SLA dashboards.",
    icon: Snowflake
  }
];

const MODULES: Module[] = [
  {
    heading: "Multilingual enablement",
    summary:
      "Deliver Faroese, Danish, and English experiences across portals, ticket replies, and nurture journeys for local and international audiences.",
    icon: Globe2
  },
  {
    heading: "Ticket transparency",
    summary:
      "Segment finance, compliance, and distributor requests with SLA tracking, escalation policies, and exportable evidence packs.",
    icon: ChatCenteredDots
  },
  {
    heading: "Automation cadence",
    summary:
      "Auto responder workflows keep distributors informed about onboarding, payouts, and compliance obligations in their preferred language.",
    icon: Lightning
  },
  {
    heading: "E-wallet resilience",
    summary:
      "Instant payouts with encrypted backups protect income even when weather impacts connectivity or travel.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global trust",
    focus: "Provide dependable checkout for tourism, seafood, and digital subscriptions.",
    bullets: [
      "FX routing aligns krona parity with USD settlements for global customers.",
      "Chargeback packs combine ticket evidence and transaction telemetry automatically.",
      "Conversion dashboards compare tourism, seafood, and digital product flows."
    ],
    icon: ShieldCheck
  },
  {
    name: "Skrill payout agility",
    focus: "Deliver mobile-friendly commissions to distributed island teams.",
    bullets: [
      "Weekly, milestone, and instant payout cadences adapt to liquidity guardrails.",
      "AML approvals captured within ticket workflows for audit-ready records.",
      "Auto responder alerts confirm wallet funding events in Faroese or English."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect card transactions from weather-related cancellations or seasonality swings.",
    bullets: [
      "Adaptive fraud scoring tuned for North Atlantic telecom conditions.",
      "Fallback routing ensures authorisation stability when primary PSPs degrade.",
      "Real-time alerts highlight conversion anomalies for finance teams."
    ],
    icon: Compass
  },
  {
    name: "Braintree experimentation",
    focus: "Prototype new membership tiers, eco-tourism packages, and AI-assisted services.",
    bullets: [
      "Tokenised payments power recurring offerings without storing card data locally.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento catalogues in sync.",
      "Experiment dashboards feed AI recommendations for leadership councils."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Discovery & context",
    description: "Translate the WordPress checklist into Faroe Islands execution priorities.",
    bullets: [
      "Stakeholder workshops across finance, compliance, and tourism product teams.",
      "Inventory of current gateways, ticket flows, and multilingual content.",
      "Risk analysis covering AML, FX exposure, and weather-driven continuity planning."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    title: "Gateway activation",
    description: "Enable PayPal, Skrill, SecurionPay, and Braintree with the foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules.",
      "Sandbox testing mirrors tourism bookings, seafood exports, and local retail flows.",
      "Approval matrices, SLA dashboards, and compliance artefacts keep leadership aligned."
    ],
    icon: Layers3
  },
  {
    step: "03",
    title: "Experience orchestration",
    description: "Synchronise storefronts, portals, and communication touchpoints.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as noted in the WordPress article.",
      "Localise journeys for Faroese, Danish, and English audiences with remote-friendly UX.",
      "Connect payment telemetry to nurture programmes and distributor enablement cadences."
    ],
    icon: Waves
  },
  {
    step: "04",
    title: "Optimisation cadence",
    description: "Maintain agility with AI insights and preparedness drills.",
    bullets: [
      "Monthly telemetry reviews covering FX exposure, conversion health, and support metrics.",
      "Ticket audits and compliance evidence packs satisfy banking partners and regulators.",
      "Backup rehearsals protect payout continuity during storms or travel disruptions."
    ],
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you handle Faroese krona alongside Danish krone and USD?",
    answer:
      "The multi currency module reconciles parity-linked krona with foreign currency settlements using hedging rules, variance alerts, and treasury-ready exports."
  },
  {
    question: "Can ticket and automation workflows output Faroese and English messages?",
    answer:
      "Yes. Ticket outcomes automatically trigger templates in each language so distributors remain informed without manual translation."
  },
  {
    question: "What ongoing support is available for Faroe Islands operations?",
    answer:
      "Cloud MLM Software provides telemetry summaries, ticket audits, and compliance artefacts tailored to Faroese regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Faroe Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Faroe Islands MLM programmes with multilingual, multi-currency, and compliance automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/faroe-islands"
  },
  openGraph: {
    title: "Faroe Islands MLM Payment Gateways",
    description:
      "Turn the Faroe Islands WordPress checklist into an AI-enabled payment and support programme with Cloud MLM Software."
  }
};

type FaroeIslandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function FaroeIslandsPaymentGatewayPage({ params }: FaroeIslandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Faroe Islands · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Give Faroese MLM distributors a confident payment foundation
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                We honour the WordPress “Ways to accept payments” blueprint—retaining gateway, module, and service coverage—while
                layering in AI telemetry, multi currency guardrails, and multilingual automation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Start your Faroese launch
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
            Modules cited in the legacy page—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules work together to provide transparency, automation, and compliance evidence.
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
              Gateway tactics for island and global customers
            </h2>
            <p className="text-sm text-muted-foreground">
              Each gateway from the WordPress list gains automation, telemetry, and compliance workflows tailored to the Faroe Islands.
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
              Four structured stages grounded in the WordPress export
            </h2>
            <p className="text-sm text-white/70">
              Clear milestones and artefacts keep finance, compliance, and distributor teams aligned.
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
            Finance, compliance, and distributor leaders in the Faroe Islands raise these topics first.
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
                Ready to orchestrate Faroe Islands MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software implements the gateways, modules, and services referenced in the WordPress archive—now
                enriched with AI telemetry, compliance artefacts, and proactive customer care.
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Faroe Islands success pod</p>
                </div>
                <Snowflake className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry summaries, ticket audits, and compliance documentation aligned with island regulators and banking partners.
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
