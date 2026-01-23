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
  BarChart3,
  CreditCard,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
  WalletCards
} from "lucide-react";
import {
  Bank,
  CirclesThreePlus,
  Lightning,
  LockSimple,
  Storefront,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type StrategicPillar = {
  title: string;
  highlight: string;
  description: string;
  icon: IconType;
};

type CoverageGroup = {
  region: string;
  coverage: string[];
};

type GatewayModel = {
  name: string;
  summary: string;
  context: string;
  benefits: string[];
  icon: IconType;
};

type RiskControl = {
  title: string;
  detail: string;
};

type ImplementationStep = {
  stage: string;
  focus: string;
  detail: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Gateway uptime",
    value: "99.995%",
    description: "Monitored across redundant payment clusters in APAC, EMEA, and the Americas.",
    icon: ShieldCheck
  },
  {
    label: "Currency pairs",
    value: "180+",
    description: "Multi-currency routing keeps wallets, subscriptions, and payout cycles aligned.",
    icon: Globe2
  },
  {
    label: "Fraud stopped",
    value: "$18M",
    description: "Adaptive scoring and device intelligence block suspicious payment attempts in real time.",
    icon: Target
  }
];

const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    title: "Global-ready architecture",
    highlight: "Launch cross-border payouts without building new rails for every market.",
    description:
      "Accept cards, bank transfers, and mobile money in the local currency while settling centrally. FX buffers and tax logic keep finance reconciled every day.",
    icon: Globe2
  },
  {
    title: "Trusted by compliance teams",
    highlight: "The payment experience is designed for regulated network marketing businesses.",
    description:
      "We combine PCI DSS guidance, granular role controls, and detailed logging so your legal, finance, and operations leaders have one audit-ready source of truth.",
    icon: ShieldCheck
  },
  {
    title: "Data-driven risk posture",
    highlight: "Stop fraud before it touches your distributors or treasury accounts.",
    description:
      "Machine scoring, velocity rules, and device fingerprints spot anomalies, flag risky transactions, and escalate to reviewers within seconds.",
    icon: Sparkles
  }
];

const COVERAGE_GROUPS: CoverageGroup[] = [
  {
    region: "Americas",
    coverage: ["ACH & FedNow", "Visa / Mastercard", "Brazil PIX", "Mexico SPEI"]
  },
  {
    region: "Europe & Middle East",
    coverage: ["SEPA Instant", "Open Banking APIs", "UAE NAPS", "Saudi SADAD"]
  },
  {
    region: "Asia Pacific",
    coverage: ["UPI & IMPS", "Australia NPP", "Philippines InstaPay", "Japan Konbini"]
  },
  {
    region: "Africa",
    coverage: ["Mpesa & mobile money", "Nigeria NIBSS", "South Africa EFT", "Card tokenization"]
  }
];

const GATEWAY_MODELS: GatewayModel[] = [
  {
    name: "Hosted payment gateway",
    summary: "Redirect customers to a certified, Cloud MLM-branded payment page.",
    context:
      "Ideal when you want a compliant flow without handling sensitive card data within your own infrastructure.",
    benefits: [
      "No merchant vault obligations or PCI scope on your side",
      "Outage-safe fallback screens keep conversions high",
      "Localized experiences for 50+ languages and currencies"
    ],
    icon: Storefront
  },
  {
    name: "Embedded gateway",
    summary: "Keep the full checkout within your distributor portal with tokenized card storage.",
    context:
      "Perfect for recurring billing, subscription upgrades, or instant payouts to e-wallets without leaving your brand environment.",
    benefits: [
      "Drop-in components styled with your design tokens",
      "Supports split-tender payments and wallet top-ups",
      "Real-time webhooks back into commissions, inventory, and ERP"
    ],
    icon: WalletCards
  },
  {
    name: "Regional gateway federation",
    summary: "Blend multiple payment processors behind a single routing brain.",
    context:
      "When you operate in high-growth or highly regulated countries, route transactions dynamically to the best-acquiring partner.",
    benefits: [
      "Optimise approval rates with intelligent failover",
      "Leverage regional fraud rules without code rewrites",
      "Consolidated settlement reports for finance and BI"
    ],
    icon: CirclesThreePlus
  }
];

const RISK_CONTROLS: RiskControl[] = [
  {
    title: "Layered authentication",
    detail:
      "3D Secure 2.2, biometric prompts, and distributor reputation scores determine when to challenge or fast-track a payment."
  },
  {
    title: "Real-time anomaly detection",
    detail:
      "Velocity caps, IP risk scoring, and device intelligence prevent bot-driven attacks and duplicate submissions."
  },
  {
    title: "Chargeback management",
    detail:
      "Evidence packs compile invoices, communication logs, and shipping data so you win disputes without manual hunting."
  },
  {
    title: "Compliance-ready exports",
    detail:
      "Audit trails stream to your GRC stack with user, transaction, and payout context for every jurisdiction."
  }
];

const IMPLEMENTATION_STEPS: ImplementationStep[] = [
  {
    stage: "01",
    focus: "Discovery & mapping",
    detail:
      "We review your compensation plans, payout rules, and existing contracts to define payment flows for every persona."
  },
  {
    stage: "02",
    focus: "Gateway orchestration",
    detail:
      "Set up processors, hosted flows, and routing logic. Sandbox transactions validate taxes, multi-currency, and wallet impacts."
  },
  {
    stage: "03",
    focus: "Security hardening",
    detail:
      "Penetration testing, vault tokenization, and role-based controls are aligned with your compliance stakeholders."
  },
  {
    stage: "04",
    focus: "Operational readiness",
    detail:
      "Finance, support, and field leaders receive live dashboards, reconciliation reports, and escalation playbooks."
  },
  {
    stage: "05",
    focus: "Launch & iterate",
    detail:
      "Post-launch analytics benchmark approval rates, detect new fraud patterns, and surface optimisation opportunities."
  }
];

const FAQS: FaqItem[] = [
  {
    question: "How does Cloud MLM Software secure online payments?",
    answer:
      "Transactions run on PCI DSS-aligned infrastructure with tokenized card storage, end-to-end encryption, and contextual risk scoring that blocks suspicious behaviour before settlement."
  },
  {
    question: "Can I offer both hosted and embedded payment experiences?",
    answer:
      "Yes. Many clients blend hosted flows for quick deployments with embedded checkouts for premium markets. Both experiences share fraud tooling, reporting, and payout automation."
  },
  {
    question: "What about regional payment preferences?",
    answer:
      "We connect to card schemes, bank transfers, and mobile wallets in each region. Distributors pay in their local currency while your finance team receives consolidated settlement files."
  },
  {
    question: "Do you support automated commission payouts?",
    answer:
      "Commission runs, incentives, and reimbursements can flow directly to distributor wallets or bank accounts, following the compliance rules you configure in the compensation engine."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Payment Gateway Integration Software";
  const description =
    "Deploy secure, multi-currency payment gateways built for MLM enterprises. Cloud MLM Software delivers compliant transactions, fraud protection, and global coverage.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/payment-gateway", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PaymentGatewayPageProps = {
  params: { lang: SupportedLocale };
};

export default function PaymentGatewayPage({ params }: PaymentGatewayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-slate-950 py-24 text-slate-100 dark:shadow-[0_0_60px_rgba(15,23,42,0.55)]">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-40 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(76,29,149,0.35),_transparent_65%)]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-16">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              <Lightning className="h-4 w-4" />
              Payment Gateway Platform
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Enterprise payment gateways engineered for modern MLM growth
            </h1>
            <p className="text-pretty text-base text-slate-300 sm:text-lg">
              Give every distributor a trusted checkout, wherever they operate. From hosted flows to embedded experiences, Cloud MLM Software couples secure processing with global acquiring and commission-ready reconciliation.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-sky-500 text-slate-950 hover:bg-sky-400">
                <Link href={demoHref}>Book a custom demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-100 hover:bg-slate-800">
                <Link href={contactHref}>Talk to a payment strategist</Link>
              </Button>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              PCI DSS aligned • Multi-currency • AI-led fraud prevention
            </p>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="relative overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/70 p-6 transition"
              >
                <metric.icon className="h-10 w-10 text-sky-400" />
                <div className="mt-6 text-3xl font-semibold text-slate-100">{metric.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {metric.label}
                </div>
                <p className="mt-4 text-sm text-slate-300">{metric.description}</p>
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_70%)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-6">
        <header className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why MLM leaders choose Cloud MLM gateways</h2>
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">
            The legacy site talked about security, flexible payment options, and fraud prevention. We reimagined those strengths into a modern architecture that balances compliance with field-friendly experiences.
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:from-slate-950 dark:to-slate-900"
            >
              <pillar.icon className="h-10 w-10 text-sky-500" />
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">{pillar.highlight}</p>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-slate-950 py-20 text-slate-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl space-y-12 px-6">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Global coverage with local empathy</h2>
              <p className="text-pretty text-base text-slate-300">
                Hosted gateways, embedded flows, and wallet payouts adapt to the channel your distributors trust. We ship with pre-certified connectors and can federate your existing processor agreements.
              </p>
            </div>
            <Link
              href={featuresHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
            >
              Explore all platform capabilities
              <CreditCard className="h-4 w-4" />
            </Link>
          </header>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {COVERAGE_GROUPS.map((group) => (
              <div key={group.region} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-100">{group.region}</h3>
                  <Globe2 className="h-5 w-5 text-sky-400" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {group.coverage.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Gateway models for every market</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              The original page highlighted hosted and shared gateways. We extend that guidance with embedded flows and federated routing so you choose the exact experience and processor mix each region needs.
            </p>
            <div className="rounded-2xl border border-dashed border-border/80 bg-muted/30 p-6 text-sm text-muted-foreground">
              <p>
                Need to support complex tax jurisdictions or wallet to bank payouts? Our solution orchestrates processors, calculates fees, and updates the compensation engine instantly, keeping every commission accurate.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {GATEWAY_MODELS.map((model) => (
              <article
                key={model.name}
                className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background/60 p-6 shadow-sm transition hover:shadow-lg dark:bg-slate-900"
              >
                <model.icon className="h-10 w-10 text-sky-500" />
                <h3 className="text-lg font-semibold text-foreground">{model.name}</h3>
                <p className="text-sm text-muted-foreground">{model.summary}</p>
                <p className="text-sm text-muted-foreground">{model.context}</p>
                <ul className="mt-auto space-y-2 text-sm text-foreground/80">
                  {model.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-sky-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border border-border bg-white py-20 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.12),_transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl space-y-16 px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <LockSimple className="h-4 w-4" />
                Risk & compliance
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Multi-layered protection for transactions and payouts
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                The legacy content emphasised scam detection and safe communications. We created a defence-in-depth model that monitors every payment attempt, wallet top-up, and commission payout in milliseconds.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-sm dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <Bank className="h-10 w-10 text-sky-500" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Trusted by enterprise compliance teams</p>
                  <p className="text-lg font-semibold text-foreground">Audit-grade reporting with real-time alerts</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Automatic anomaly detection, dispute workflows, and data residency controls deliver resilience without slowing the field experience.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {RISK_CONTROLS.map((control) => (
              <div
                key={control.title}
                className="rounded-2xl border border-dashed border-border/60 bg-muted/40 p-6 text-sm text-muted-foreground"
              >
                <h3 className="text-lg font-semibold text-foreground">{control.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{control.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-6">
        <header className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Implementation roadmap</h2>
          <p className="text-pretty text-base text-muted-foreground">
            A structured launch programme ensures regions go live on time, operations teams stay in sync, and the field gets a polished experience from day one.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {IMPLEMENTATION_STEPS.map((step) => (
            <div
              key={step.stage}
              className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-background/80 p-6 text-sm shadow-sm dark:bg-slate-900"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{step.stage}</span>
              <h3 className="text-lg font-semibold text-foreground">{step.focus}</h3>
              <p className="text-sm text-muted-foreground">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6 px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Questions leaders ask most</h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-background/80 p-4 open:shadow-sm dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-foreground">
                <span>{faq.question}</span>
                <span className="text-xl text-muted-foreground transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 border-t border-border/60 pt-3 text-sm text-muted-foreground">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-sky-500 to-indigo-600 px-6 py-16 text-white">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise every payment touchpoint?
            </h2>
            <p className="text-sm sm:text-base">
              Consolidate subscriptions, product purchases, renewals, and commission payouts within Cloud MLM Software. We design the payment experience for your distributors, compliance team, and finance leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-slate-950 text-white hover:bg-slate-900">
                <Link href={demoHref}>Schedule a walkthrough</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/60 text-white hover:bg-white/10">
                <Link href={contactHref}>Discuss your gateway rollout</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <UsersThree className="h-10 w-10" weight="duotone" />
              <div>
                <p className="text-sm font-medium opacity-80">24/7 treasury operations support</p>
                <p className="text-lg font-semibold">Global payment specialists on standby</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4" />
                <span>Unified analytics for authorisations, declines, and payout reconciliation.</span>
              </li>
              <li className="flex items-start gap-2">
                <CreditCard className="mt-1 h-4 w-4" />
                <span>Hosted, embedded, and federated gateways managed in one control tower.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4" />
                <span>Fraud, KYC, and AML policy updates propagate instantly across regions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
