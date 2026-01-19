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
  Compass,
  Landmark,
  Layers3,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
  Workflow
} from "lucide-react";
import {
  ChatCenteredDots,
  CurrencyCircleDollar,
  GlobeHemisphereNorth,
  Lightning,
  LockKey,
  MapTrifold,
  Plugs,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  value: string;
  copy: string;
  icon: IconType;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Initiative = {
  title: string;
  summary: string;
};

type Stage = {
  name: string;
  description: string;
  items: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Gateway bundle",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    copy: "Matches the WordPress Denmark article, now orchestrated with telemetry and compliance guardrails.",
    icon: Layers3
  },
  {
    label: "Currencies",
    value: "DKK · EUR · USD",
    copy: "Multi currency module reconciles Danish krone and international flows with automated variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Modules engaged",
    value: "Multilingual · Ticketing · Auto responder",
    copy: "Plus e-wallet, e-voucher, and backup manager coverage—each upgraded with AI nudges and SLA dashboards.",
    icon: ShieldCheck
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual enablement",
    detail:
      "Deliver Danish, English, and German experiences across portals, knowledge bases, and auto responder journeys.",
    icon: GlobeHemisphereNorth
  },
  {
    title: "Ticket system transparency",
    detail:
      "Segment finance, compliance, and distributor requests with SLA timers and exportable evidence packs.",
    icon: ChatCenteredDots
  },
  {
    title: "Auto responder cadence",
    detail:
      "Trigger welcome, compliance, and reorder sequences as soon as payment telemetry changes.",
    icon: Lightning
  },
  {
    title: "E-wallet & backup resilience",
    detail:
      "Provide instant payouts while encrypted snapshots protect sensitive ledgers for Danish regulators.",
    icon: LockKey
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal Nordic reach",
    description: "Support cross-border enrolment and digital kit purchases.",
    bullets: [
      "Automated FX routing for DKK and EUR settlements.",
      "Chargeback playbooks tuned for wellness, sustainability, and e-learning products.",
      "Conversion dashboards segmented by distributor council and campaign."
    ],
    icon: Compass
  },
  {
    name: "Skrill payout experiences",
    description: "Deliver faster commissions to mobile-first Danish leaders.",
    bullets: [
      "Weekly, monthly, and milestone payout cadences with liquidity guardrails.",
      "AML review workflows captured in the ticket system.",
      "Auto responder notices inform teams when funds land in wallets."
    ],
    icon: Plugs
  },
  {
    name: "SecurionPay risk posture",
    description: "Protect premium subscription products with PSD2-ready security.",
    bullets: [
      "Adaptive 3DS flows calibrated for Denmark’s high digital adoption.",
      "Failover routing to secondary acquirers when decline ratios exceed thresholds.",
      "Real-time anomaly alerts for finance and compliance stakeholders."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation lanes",
    description: "Prototype new membership bundles without disrupting production.",
    bullets: [
      "Tokenised payments for recurring orders and loyalty upgrades.",
      "Webhook integration with Shopify, WooCommerce, and Magento storefronts.",
      "Experiment metrics interpreted by Cloud MLM Software’s AI assistant."
    ],
    icon: Workflow
  }
];

const INITIATIVES: Initiative[] = [
  {
    title: "MLM software development",
    summary:
      "Configure compensation logic, dashboards, and distributor tooling for Danish corporate HQs."
  },
  {
    title: "E-commerce integration",
    summary:
      "WooCommerce, Shopify, Magento, and Opencart connectors ensure payment policies stay consistent."
  },
  {
    title: "Design & localisation",
    summary:
      "Corporate sites, landing pages, and legal documents reflect Danish sustainability and transparency values."
  },
  {
    title: "Support operations",
    summary:
      "Ticketing, backup routines, and knowledge bases keep finance and compliance teams audit-ready."
  }
];

const STAGES: Stage[] = [
  {
    name: "Discovery",
    description: "Transform the WordPress checklist into Denmark-ready requirements.",
    items: [
      "Stakeholder workshops across finance, compliance, and field leadership.",
      "Assessment of current gateways, ticket queues, and multilingual content.",
      "Risk analysis aligned with Danish FSA, PSD2, and GDPR expectations."
    ],
    icon: Users
  },
  {
    name: "Activation",
    description: "Deploy gateways and modules in governed sandboxes.",
    items: [
      "Enable PayPal, Skrill, SecurionPay, and Braintree with telemetry built in.",
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, and backup modules.",
      "Define approval matrices and audit evidence trails for finance teams."
    ],
    icon: MapTrifold
  },
  {
    name: "Experience",
    description: "Synchronise storefronts, portals, and automation.",
    items: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart catalogues.",
      "Localise communications and knowledge assets for Danish and EU markets.",
      "Trigger auto responder journeys driven by payment and support signals."
    ],
    icon: Sprout
  },
  {
    name: "Optimise",
    description: "Maintain performance with AI-led insights and rituals.",
    items: [
      "Monthly telemetry reviews highlight FX exposure, decline ratios, and ticket health.",
      "Compliance packs exported for regulators and banking partners.",
      "Backup and incident rehearsals to protect payouts during change."
    ],
    icon: TrendingUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you support simultaneous DKK and EUR settlements?",
    answer:
      "Yes. The multi currency module keeps both ledgers reconciled with hedging rules, variance alerts, and automated reporting for Danish finance teams."
  },
  {
    question: "How are ticket and auto responder workflows connected?",
    answer:
      "Ticket categories, SLA timers, and escalation outcomes trigger templated communications so distributors receive proactive updates without manual follow-up."
  },
  {
    question: "What happens after go-live?",
    answer:
      "You receive ongoing telemetry reviews, ticket audits, and compliance evidence packs—aligned with Danish regulatory expectations."
  }
];

export const metadata: Metadata = {
  title: "Denmark MLM Payment Gateways | Cloud MLM Software",
  description:
    "Unify PayPal, Skrill, SecurionPay, and Braintree for Danish MLM programmes. Cloud MLM Software adds multi-currency, multilingual, and compliance automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/denmark"
  },
  openGraph: {
    title: "Denmark MLM Payment Gateways",
    description:
      "Design a Danish MLM payment experience with gateway orchestration, support automation, and AI-backed optimisation."
  }
};

type DenmarkPageProps = {
  params: { lang: SupportedLocale };
};

export default function DenmarkPaymentGatewayPage({ params }: DenmarkPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services/mlm-software-development", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="grid gap-12 overflow-hidden rounded-[2.75rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 px-8 py-16 text-white shadow-2xl dark:border-slate-800/60">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                Denmark · Gateway orchestration
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Build a Danish MLM payment footprint your regulators will trust
                </h1>
                <p className="max-w-2xl text-base text-white/70">
                  We translate the WordPress “Ways to accept payments” content into a modern programme—combining the
                  listed gateways with multilingual, ticketing, e-wallet, and backup automation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Partner with our Denmark pod
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
                  <Link href={demoHref}>Experience the platform</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.label}
                    className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{item.label}</p>
                        <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-white/75">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Modules from the legacy page—modernised for Denmark
            </h2>
            <p className="text-sm text-muted-foreground">
              Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
              operate as a cohesive system with AI insights and SLA governance.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href={servicesHref}>
              See supporting services
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
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
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Payment gateway plays grounded in the WordPress export
          </h2>
          <p className="text-sm text-muted-foreground">
            PayPal, Skrill, SecurionPay, and Braintree are orchestrated with AI telemetry, Danish compliance guardrails,
            and proactive communications.
          </p>
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
                    <p className="text-sm text-muted-foreground">{gateway.description}</p>
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
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Compare pricing tiers
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href={demoHref}>Request a strategy session</Link>
          </Button>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Service initiatives powering Danish payment programmes
            </h2>
            <p className="text-sm text-white/70">
              MLM software development, e-commerce integration, website design, and web development—all explicitly listed
              in the WordPress article—are delivered by our Denmark-focused pod.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {INITIATIVES.map((initiative) => (
              <article key={initiative.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h3 className="text-base font-semibold">{initiative.title}</h3>
                <p className="mt-2 text-sm text-white/75">{initiative.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four steady stages to launch and sustain
          </h2>
          <p className="text-sm text-muted-foreground">
            Clear outcomes keep Danish finance, compliance, and distributor teams aligned throughout the journey.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{stage.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Responses to the questions Danish finance, compliance, and technology leaders raise first.
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
          <div className="grid gap-8 md:grid-cols-[1.15fr,0.85fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to align Denmark’s payment ecosystem?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software blends gateway orchestration, design, and support services into a single Danish
                programme grounded in the WordPress archive—and elevated with AI insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Speak with our team
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
                    Denmark support cadence
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Dedicated ticket, backup, and analytics pod</p>
                </div>
                <Landmark className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Finance and compliance teams gain a single queue, quarterly optimisation reviews, and automated evidence
                packs tailored for Danish regulators.
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
