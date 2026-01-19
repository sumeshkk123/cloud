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
  ShieldCheck,
  Signal,
  Snowflake,
  Sparkles
} from "lucide-react";
import {
  ChatCenteredDots,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Plugs,
  StackSimple,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  value: string;
  detail: string;
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
    title: "Gateway stack",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    detail:
      "The identical quartet referenced in the Falkland Islands WordPress export, now orchestrated with telemetry and compliance guardrails.",
    icon: Plugs
  },
  {
    title: "Currency mix",
    value: "FKP · GBP · USD",
    detail:
      "Multi currency automation keeps Falkland pound aligned with sterling and US dollar settlements for tourism-focused sales.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience modules",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    detail:
      "Plus e-voucher and backup manager capabilities—each from the legacy article—modernised with AI prompts and SLA dashboards.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    heading: "Multilingual delivery",
    summary:
      "Serve English and Spanish experiences across portals, ticket replies, and nurture sequences for island and tourism audiences.",
    icon: Globe2
  },
  {
    heading: "Ticket transparency",
    summary:
      "Segment finance, logistics, and distributor requests with SLA tracking, escalation rules, and exportable evidence packs.",
    icon: ChatCenteredDots
  },
  {
    heading: "Automation cadence",
    summary:
      "Auto responder workflows notify leaders about onboarding steps, payout releases, and compliance reminders in the right language.",
    icon: Lightning
  },
  {
    heading: "E-wallet resilience",
    summary:
      "Instant payouts with encrypted backups safeguard distributor income during weather-related connectivity gaps.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global trust",
    focus: "Enable remote tourism bookings and diaspora kit purchases with familiar checkout.",
    bullets: [
      "FX routing aligns FKP, GBP, and USD settlements with treasury targets.",
      "Chargeback packages pull evidence from ticket threads and compliance artefacts.",
      "Conversion dashboards compare island and international traffic for leadership insight."
    ],
    icon: ShieldCheck
  },
  {
    name: "Skrill payout express",
    focus: "Deliver commissions quickly to distributed field teams and seasonal staff.",
    bullets: [
      "Weekly, milestone, and instant payouts respect liquidity guardrails.",
      "AML approvals captured in the ticket system for audit readiness.",
      "Auto responder notifications confirm wallet funding events instantly."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect card transactions from chargebacks due to weather-driven itinerary changes.",
    bullets: [
      "Adaptive fraud scoring tuned for remote network conditions.",
      "Failover routing maintains authorisation rates when primary PSPs throttle traffic.",
      "Anomaly alerts prompt finance review before they impact customer trust."
    ],
    icon: Compass
  },
  {
    name: "Braintree experimentation lane",
    focus: "Prototype subscription kits, digital content, and membership tiers for tourism partners.",
    bullets: [
      "Tokenised payments power recurring offerings without storing card data locally.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento inventory aligned.",
      "Experiment dashboards feed AI recommendations to leadership councils."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Discovery & context",
    description: "Translate the WordPress checklist into Falkland Islands execution priorities.",
    bullets: [
      "Stakeholder workshops across finance, compliance, and tourism operations.",
      "Inventory of existing gateways, ticket workflows, and multilingual content.",
      "Risk analysis covering AML, FX, and weather-related continuity planning."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    title: "Gateway activation",
    description: "Enable PayPal, Skrill, SecurionPay, and Braintree with the foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules.",
      "Sandbox testing mirrors tourism bookings, diaspora sales, and local retail flows.",
      "Approval matrices, SLA dashboards, and compliance artefacts align leadership."
    ],
    icon: Layers3
  },
  {
    step: "03",
    title: "Experience orchestration",
    description: "Synchronise storefronts, portals, and customer communications.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as noted in the article.",
      "Localise journeys for English and Spanish audiences with accessibility for remote bandwidth.",
      "Connect payment telemetry to nurture and retention programmes."
    ],
    icon: Waves
  },
  {
    step: "04",
    title: "Optimisation cadence",
    description: "Maintain agility with AI-guided insights and resilience drills.",
    bullets: [
      "Monthly telemetry reviews cover FX exposure, conversion trends, and support health.",
      "Ticket audits and compliance packs keep banking partners confident.",
      "Backup rehearsals and incident playbooks protect payout continuity during storms."
    ],
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "How does Cloud MLM Software handle FKP, GBP, and USD simultaneously?",
    answer:
      "The multi currency module from the WordPress article keeps all ledgers reconciled with hedging rules, variance alerts, and treasury-ready exports."
  },
  {
    question: "Can ticket and automation workflows reach English and Spanish distributors?",
    answer:
      "Yes. Ticket outcomes trigger the appropriate language templates so distributors receive immediate updates without manual outreach."
  },
  {
    question: "What ongoing support is available for Falkland Islands programmes?",
    answer:
      "Dedicated pods provide telemetry summaries, ticket audits, and compliance artefacts aligned with regulators and international banking partners."
  }
];

export const metadata: Metadata = {
  title: "Falkland Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Falkland Islands MLM programmes with multilingual, multi-currency, and compliance automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/falkland-islands"
  },
  openGraph: {
    title: "Falkland Islands MLM Payment Gateways",
    description:
      "Transform the Falkland Islands WordPress gateway checklist into an AI-enabled payment, support, and optimisation programme."
  }
};

type FalklandIslandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function FalklandIslandsPaymentGatewayPage({ params }: FalklandIslandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Falkland Islands · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Bring resilience and clarity to Falkland Islands MLM payments
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                We translate the WordPress “Ways to accept payments” guidance into an AI-ready programme that supports
                remote distributor networks, tourism inflows, and regulator expectations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your Falklands launch
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
                      <p className="mt-3 text-sm text-white/75">{highlight.detail}</p>
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
            Modules cited in the WordPress page—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
            operate as an integrated stack with automation and compliance artefacts.
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
              Gateway tactics for remote and tourism-friendly operations
            </h2>
            <p className="text-sm text-muted-foreground">
              The WordPress gateway stack receives automation, telemetry, and compliance enhancements for island needs.
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
              Four accountable stages rooted in the WordPress checklist
            </h2>
            <p className="text-sm text-white/70">
              Each stage produces artefacts so finance, compliance, and distributor teams track progress together.
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
            Finance, compliance, and operations leaders in the Falkland Islands ask these questions when modernising their programmes.
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
                Ready to orchestrate Falkland Islands MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software delivers the gateways, modules, and services from the WordPress archive—now enhanced
                with AI telemetry, compliance artefacts, and proactive customer care.
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Falkland Islands success pod</p>
                </div>
                <Snowflake className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Gain telemetry readouts, ticket audits, and compliance documentation aligned with island regulators and international banking partners.
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
