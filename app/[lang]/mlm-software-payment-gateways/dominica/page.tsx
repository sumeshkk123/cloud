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
  Globe2,
  Map,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";
import {
  ChatCentered,
  CurrencyCircleDollar,
  GearSix,
  Lightning,
  ListChecks,
  Plugs,
  StackSimple,
  Timer
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
  label: string;
  description: string;
  items: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const METRICS: Metric[] = [
  {
    title: "Gateway backbone",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Exactly the list referenced in the Dominica WordPress article, now powered by Cloud MLM Software telemetry.",
    icon: Plugs
  },
  {
    title: "Currencies orchestrated",
    value: "XCD · USD · EUR",
    description:
      "Multi currency module reconciles the Eastern Caribbean dollar with global revenue flows and FX guardrails.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience modules",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    description:
      "Plus e-voucher and backup manager automation—each enhanced with AI insights and SLA dashboards.",
    icon: ShieldCheck
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual enablement",
    detail:
      "Deliver English, French Creole, and Spanish communications across portals, tickets, and nurture journeys.",
    icon: Globe2
  },
  {
    title: "Ticket transparency",
    detail:
      "Segment support queues for finance, compliance, and distributor councils with measurable response times.",
    icon: ChatCentered
  },
  {
    title: "Auto responder cadence",
    detail:
      "Trigger onboarding, reorder, and compliance reminders when payment telemetry shifts.",
    icon: Lightning
  },
  {
    title: "E-wallet resilience",
    detail:
      "Provide instant payouts while encrypted backup snapshots protect commission continuity.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal island-to-world commerce",
    focus: "Capture diaspora purchases and tourism bundles with trusted checkout.",
    bullets: [
      "FX routing strategies for XCD, USD, and EUR settlements.",
      "Chargeback evidence packs align with ticketing workflows.",
      "Conversion analytics segmented by distributor tier and campaign."
    ],
    icon: Waves
  },
  {
    name: "Skrill payout velocity",
    focus: "Deliver fast commissions to mobile-first field leaders across the Caribbean.",
    bullets: [
      "Weekly, monthly, and milestone payouts with liquidity guardrails.",
      "AML reviews captured automatically for regulator-ready evidence.",
      "Auto responder notices confirm wallet funding to reduce support friction."
    ],
    icon: Timer
  },
  {
    name: "SecurionPay fraud control",
    focus: "Protect card payments for recurring wellness and eco-tourism bundles.",
    bullets: [
      "Adaptive fraud scoring tuned for Caribbean telecom conditions.",
      "Failover routing to alternate acquirers during network issues.",
      "AI alerts surface anomalies before they affect trust scores."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation",
    focus: "Launch new membership packages without disrupting production rails.",
    bullets: [
      "Tokenised payments power subscriptions and loyalty enhancements.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento catalogues synced.",
      "Experiment reports surface insights for leadership decision-making."
    ],
    icon: GearSix
  }
];

const STAGES: Stage[] = [
  {
    label: "01 • Discovery",
    description: "Translate the WordPress checklist into Dominica-ready requirements.",
    items: [
      "Workshops with finance, compliance, and distributor councils.",
      "Assessment of current gateways, ticket queues, and multilingual assets.",
      "Risk analysis across AML, data residency, and telecom resilience."
    ],
    icon: Map
  },
  {
    label: "02 • Activation",
    description: "Deploy gateway connectors alongside foundational modules.",
    items: [
      "Enable PayPal, Skrill, SecurionPay, and Braintree with telemetry.",
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, and backup modules.",
      "Define approval paths and SLA dashboards for each team."
    ],
    icon: ListChecks
  },
  {
    label: "03 • Experience",
    description: "Synchronise storefronts, portals, and communications.",
    items: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as cited in the article.",
      "Localise content for English, Creole, and Spanish audiences.",
      "Link payment events to nurture journeys and retention programmes."
    ],
    icon: Sparkles
  },
  {
    label: "04 • Optimise",
    description: "Run continual improvement loops with AI guidance.",
    items: [
      "Monthly telemetry reviews highlight FX exposure and conversion health.",
      "Ticket audits maintain SLA compliance and regulator confidence.",
      "Backup rehearsals protect payout continuity during severe weather or network change."
    ],
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you manage Eastern Caribbean dollar alongside USD and EUR?",
    answer:
      "The multi currency module keeps all ledgers aligned with hedging rules, variance alerts, and exportable treasury reports tailored for Dominica operations."
  },
  {
    question: "Are ticket and auto responder workflows coordinated?",
    answer:
      "Yes. Ticket resolutions automatically trigger templated communications so distributors receive proactive updates without manual follow-up."
  },
  {
    question: "What long-term support is included?",
    answer:
      "Dedicated pods deliver telemetry reviews, ticket audits, and compliance documentation to keep Dominica programmes resilient."
  }
];

export const metadata: Metadata = {
  title: "Dominica MLM Payment Gateways | Cloud MLM Software",
  description:
    "Launch Dominica-first MLM payment journeys with Cloud MLM Software. Orchestrate PayPal, Skrill, SecurionPay, and Braintree while enabling multilingual, multi-currency automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/dominica"
  },
  openGraph: {
    title: "Dominica MLM Payment Gateways",
    description:
      "Transform the Dominica WordPress checklist into a modern gateway, service, and optimisation programme."
  }
};

type DominicaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function DominicaPaymentGatewayPage({ params }: DominicaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-sky-600 to-indigo-700 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(255,255,255,0.12),transparent_55%)]" aria-hidden />
        <div className="container relative grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Dominica · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Modernise Dominica’s MLM payment experience with confidence
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                We honour the WordPress “Ways to accept payments” guidance—keeping the named gateways and modules—while
                adding AI telemetry, FX guardrails, and multilingual automation tailored to Dominica’s tourism and
                diaspora growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Build your Dominica launch
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Schedule a guided demo</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article
                  key={metric.title}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold">{metric.title}</h2>
                      <p className="text-sm text-white/70">{metric.value}</p>
                      <p className="mt-3 text-sm text-white/75">{metric.description}</p>
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
            Modules cited in the legacy article—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup capabilities work
            in concert to deliver resilient Dominica journeys.
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
                <p className="text-sm text-muted-foreground">{module.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Gateway tactics for Dominica’s tourism and wellness growth
            </h2>
            <p className="text-sm text-muted-foreground">
              The WordPress gateway list stays intact while we add automation, compliance guardrails, and analytics.
            </p>
          </div>
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review pricing structures
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
              Four stages from discovery to optimisation
            </h2>
            <p className="text-sm text-white/70">
              A structured cadence turns the legacy checklist into measurable outcomes for Dominica’s leadership team.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold">{stage.label}</h3>
                  </div>
                  <p className="text-sm text-white/75">{stage.description}</p>
                  <ul className="space-y-2 text-sm text-white/75">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-white/70" aria-hidden />
                        <span>{item}</span>
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
            Finance, compliance, and distributor leaders in Dominica ask these questions first.
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
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-purple-500/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Dominica MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software unites the gateways, modules, and services listed in the WordPress article with
                telemetry, automation, and support coverage tailor-made for Dominica’s growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Talk with our team
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={pricingHref}>Review pricing tiers</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Support cadence
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Dominica success pod</p>
                </div>
                <Sparkles className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Receive proactive ticket reviews, telemetry dashboards, and compliance evidence packs designed for
                Caribbean regulators and banking partners.
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
