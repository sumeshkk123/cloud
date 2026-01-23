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
  Building2,
  BarChartHorizontal,
  Compass,
  Globe2,
  Layers3,
  ShieldCheck,
  Signal,
  Sparkles
} from "lucide-react";
import {
  ChatCircleDots,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Plugs,
  StackSimple,
  TreeStructure
  
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
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type ProgrammeStage = {
  step: string;
  heading: string;
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
    title: "Gateway stack",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "The very quartet highlighted in the Equatorial Guinea WordPress export, orchestrated with AI telemetry and SLA guardrails.",
    icon: Plugs
  },
  {
    title: "Currency mix",
    value: "XAF · EUR · USD",
    description:
      "Multi currency automation keeps the Central African CFA franc aligned with euro and US dollar ledgers across mainland and island operations.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience modules",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    description:
      "Plus e-voucher and backup management—each module from the original article now enhanced with AI nudges and audit-ready reporting.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual enablement",
    description:
      "Serve Spanish, French, Portuguese, and Fang experiences with consistent messaging across portals, knowledge bases, and email journeys.",
    icon: Globe2
  },
  {
    title: "Ticket governance",
    description:
      "Route finance, compliance, and distributor coaching requests with SLA clocks, escalation policies, and exportable evidence packs.",
    icon: ChatCircleDots
  },
  {
    title: "Automation cadence",
    description:
      "Auto responder flows notify leaders about onboarding progress, payout releases, and compliance obligations in their preferred language.",
    icon: Lightning
  },
  {
    title: "E-wallet resilience",
    description:
      "Instant payouts, encrypted backups, and maker-checker approvals protect commissions in markets with intermittent connectivity.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora channel",
    focus: "Capture cross-border purchases from expatriate leaders and partners in Spain and Portugal.",
    bullets: [
      "Dedicated FX routing ensures XAF and EUR settlements close on time.",
      "Chargeback evidence draws from ticket histories and multilingual artefacts.",
      "Conversion insights compare mainland and island distributions for leadership clarity."
    ],
    icon: Compass
  },
  {
    name: "Skrill payout express",
    focus: "Deliver mobile-friendly commissions for Bata, Malabo, and island distributor hubs.",
    bullets: [
      "Weekly, milestone, and instant payout modes respect liquidity guardrails defined by finance.",
      "AML approvals captured within the ticket system for audit-ready documentation.",
      "Auto responder notices confirm wallet funding in Spanish, French, or Fang."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect card transactions for wellness subscriptions and educational bundles.",
    bullets: [
      "Adaptive fraud scoring tuned for Central African telecom conditions.",
      "Failover logic shifts to backup acquirers when decline rates spike.",
      "Real-time anomaly alerts prompt finance intervention before regulators escalate."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation",
    focus: "Prototype new membership tiers spanning mainland and island cohorts without rewriting infrastructure.",
    bullets: [
      "Tokenised payments enable instalments and loyalty upgrades for multilingual audiences.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento catalogues aligned with payout logic.",
      "Experiment dashboards feed AI recommendations for leadership decision-making."
    ],
    icon: Sparkles
  }
];

const PROGRAMME_STAGES: ProgrammeStage[] = [
  {
    step: "01",
    heading: "Context immersion",
    detail: "Translate the WordPress checklist into tangible requirements for Equatorial Guinea’s mainland and island operations.",
    bullets: [
      "Stakeholder workshops with finance, compliance, and distributor councils.",
      "Inventory of existing gateways, ticket cadences, and multilingual collateral.",
      "Risk analysis covering AML, CEMAC regulations, and telecom resilience."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    heading: "Gateway activation",
    detail: "Launch PayPal, Skrill, SecurionPay, and Braintree connectors alongside the foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules in one governed sprint.",
      "Sandbox testing mirrors mainland, island, and diaspora scenarios.",
      "Approval chains and SLA dashboards keep finance and compliance in lockstep."
    ],
    icon: Layers3
  },
  {
    step: "03",
    heading: "Experience orchestration",
    detail: "Synchronise ecommerce, replicated sites, and service operations with orchestrated payments.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as cited in the legacy article.",
      "Localise portals and communications for Spanish, French, Portuguese, and Fang speakers.",
      "Connect payment telemetry to nurture journeys and retention programmes."
    ],
    icon: Building2
  },
  {
    step: "04",
    heading: "Continuous optimisation",
    detail: "Maintain performance with AI-led reviews and proactive rituals.",
    bullets: [
      "Monthly telemetry readouts highlight FX exposure, conversion health, and ticket backlog trends.",
      "Compliance artefacts and backup rehearsals satisfy regulator expectations.",
      "Quarterly retros prioritise automation enhancements based on distributor feedback."
    ],
    icon: BarChartHorizontal
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you reconcile XAF, EUR, and USD ledgers simultaneously?",
    answer:
      "The multi currency module highlighted in the WordPress export keeps every ledger reconciled with hedging rules, variance alerts, and exportable treasury reports."
  },
  {
    question: "Can ticket and auto responder workflows operate across multiple languages?",
    answer:
      "Yes. Ticket outcomes automatically trigger Spanish, French, Portuguese, or Fang communications so distributors stay informed without manual follow-up."
  },
  {
    question: "What support coverage do we receive after launch?",
    answer:
      "Dedicated pods manage telemetry reviews, ticket audits, and compliance evidence packs tailored to Equatorial Guinea’s regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Equatorial Guinea MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Equatorial Guinea MLM operations with multilingual, multi-currency, and compliance automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/equatorial-guinea"
  },
  openGraph: {
    title: "Equatorial Guinea MLM Payment Gateways",
    description:
      "Transform the Equatorial Guinea gateway checklist into an AI-enabled payment programme with Cloud MLM Software."
  }
};

type EquatorialGuineaPageProps = {
  params: { lang: SupportedLocale };
};

export default function EquatorialGuineaPaymentGatewayPage({ params }: EquatorialGuineaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Equatorial Guinea · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build a confident payment footprint for Equatorial Guinea’s MLM network
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software converts the WordPress “Ways to accept payments” article into an AI-ready programme
                that unites mainland and island operations, diaspora sales, and regulator expectations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Launch with our strategists
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Experience the platform</Link>
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
            Modules called out in the legacy page—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
            form a cohesive stack with compliance and automation artefacts.
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
              Gateway tactics tailored to mainland and island realities
            </h2>
            <p className="text-sm text-muted-foreground">
              Each connector from the WordPress page is orchestrated with automation, telemetry, and compliance guardrails.
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
              Four accountable stages from discovery to optimisation
            </h2>
            <p className="text-sm text-white/70">
              A structured cadence ensures every stakeholder sees measurable progress rooted in the WordPress checklist.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {PROGRAMME_STAGES.map((stage) => {
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
                  <h3 className="text-base font-semibold">{stage.heading}</h3>
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
            Finance, compliance, and operations leaders in Equatorial Guinea ask these questions at the outset.
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
                Ready to orchestrate Equatorial Guinea MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software delivers the gateways, modules, and services cited in the WordPress archive—supercharged with AI telemetry, compliance artefacts, and proactive support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Talk with a strategist
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Equatorial Guinea success pod</p>
                </div>
                <TreeStructure className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry readouts, ticket audits, and compliance exports tailored to CEMAC oversight and your banking partners across mainland and island territories.
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
