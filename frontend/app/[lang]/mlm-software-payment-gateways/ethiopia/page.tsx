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
  LineChart,
  Globe2,
  Layers3,
  ShieldCheck,
  Signal,
  Sparkles
} from "lucide-react";
import {
  ChatTeardrop,
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
  label: string;
  value: string;
  detail: string;
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

type Stage = {
  step: string;
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Gateway roster",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    detail:
      "Exactly the connectors listed in the Ethiopia WordPress article, now orchestrated with AI telemetry and compliance guardrails.",
    icon: Plugs
  },
  {
    label: "Currency posture",
    value: "ETB · USD · EUR",
    detail:
      "Multi currency module reconciles Ethiopian birr with hard currency settlements for diaspora and humanitarian programmes.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Experience stack",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    detail:
      "Plus e-voucher and backup management modules—modernised with SLA dashboards, AI nudges, and evidence packs.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual enablement",
    description:
      "Deliver Amharic, English, and Oromo experiences across portals, documentation, and nurture sequences for national and diaspora teams.",
    icon: Globe2
  },
  {
    title: "Ticket transparency",
    description:
      "Route finance, compliance, and humanitarian support tickets with SLA tracking, escalation policies, and exportable artefacts.",
    icon: ChatTeardrop
  },
  {
    title: "Automation cadence",
    description:
      "Auto responder workflows notify leaders about onboarding steps, payout releases, and compliance obligations in the correct language.",
    icon: Lightning
  },
  {
    title: "E-wallet resilience",
    description:
      "Instant commissions complemented by encrypted backups and maker-checker approvals protect payouts during connectivity shifts.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora bridge",
    focus: "Empower the global Ethiopian community to fund product kits and wellness programmes.",
    bullets: [
      "FX routing aligns ETB, USD, and EUR settlements with treasury policy.",
      "Chargeback documentation ties in ticket transcripts and compliance artefacts.",
      "Conversion dashboards compare domestic and diaspora campaigns for leadership visibility."
    ],
    icon: ShieldCheck
  },
  {
    name: "Skrill payout velocity",
    focus: "Deliver mobile-friendly commissions to field leaders across Addis Ababa, Oromia, and regional hubs.",
    bullets: [
      "Weekly, milestone, and instant payout cadences adapt to liquidity guardrails.",
      "AML approvals captured directly in the ticket system for audit-ready evidence.",
      "Auto responder alerts confirm wallet funding in Amharic or English."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect subscription and digital kit purchases with PSD2-ready security.",
    bullets: [
      "Adaptive fraud scoring tuned for Ethiopia’s telecom landscape.",
      "Failover routing maintains authorisation rates during PSP instability.",
      "Anomaly alerts surface issues before regulators or gateways escalate them."
    ],
    icon: Target
  },
  {
    name: "Braintree experimentation",
    focus: "Prototype AI-enabled offerings, micro-subscriptions, and training bundles.",
    bullets: [
      "Tokenised payments enable recurring billing, loyalty tiers, and instalments.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento inventory in sync.",
      "Experiment dashboards feed AI recommendations to product and finance leadership."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Discovery & alignment",
    summary: "Translate the WordPress checklist into Ethiopia’s operational requirements.",
    bullets: [
      "Stakeholder workshops across finance, compliance, and humanitarian partners.",
      "Inventory of existing gateways, ticket queues, and multilingual content.",
      "Risk analysis covering AML, FX controls, telecom reliability, and data residency."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    title: "Gateway activation",
    summary: "Enable PayPal, Skrill, SecurionPay, and Braintree with the foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules.",
      "Sandbox testing mirrors domestic, diaspora, and humanitarian flows.",
      "Approval matrices, SLA dashboards, and compliance artefacts keep leadership aligned."
    ],
    icon: Layers3
  },
  {
    step: "03",
    title: "Experience orchestration",
    summary: "Synchronise storefronts, portals, and communications with orchestrated payments.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as cited in the legacy page.",
      "Localise experiences for Amharic, English, and Oromo audiences.",
      "Connect payment telemetry to nurture programmes and field enablement journeys."
    ],
    icon: Building2
  },
  {
    step: "04",
    title: "Optimisation cadence",
    summary: "Maintain resilience with AI-guided rituals and proactive support.",
    bullets: [
      "Monthly telemetry reviews cover FX exposure, conversion health, and support metrics.",
      "Ticket audits and compliance packs keep regulators and banking partners confident.",
      "Automation backlog prioritised with feedback from distributor councils and humanitarian partners."
    ],
    icon: LineChart
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can Cloud MLM Software reconcile ETB, USD, and EUR simultaneously?",
    answer:
      "Yes. The multi currency module automates hedging rules, variance alerts, and treasury-ready exports across all three currencies."
  },
  {
    question: "Do ticket and auto responder workflows support Amharic and English?",
    answer:
      "Ticket outcomes automatically trigger the correct language templates so distributors receive timely updates without manual translation."
  },
  {
    question: "What post-launch support is available for Ethiopia programmes?",
    answer:
      "Dedicated pods provide telemetry readouts, ticket audits, and compliance artefacts tuned to Ethiopian regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Ethiopia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Ethiopian MLM operations with multilingual, multi-currency, and compliance automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/ethiopia"
  },
  openGraph: {
    title: "Ethiopia MLM Payment Gateways",
    description:
      "Transform the Ethiopia WordPress gateway checklist into an AI-enabled payment and support programme."
  }
};

type EthiopiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function EthiopiaPaymentGatewayPage({ params }: EthiopiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-amber-900 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.18),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_45%_90%,rgba(99,102,241,0.18),transparent_55%)]" />
        <div className="container relative grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Ethiopia · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build a dependable Ethiopian MLM payment engine
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software respects the original “Ways to accept payments” article—retaining the gateway list and
                module stack—while adding AI telemetry, multilingual automation, and compliance instrumentation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your Ethiopia rollout
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
                  key={highlight.label}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold">{highlight.label}</h2>
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
            Modules from the legacy page—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup management modules
            form a single governed stack with AI insights and compliance artefacts.
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
              Gateway tactics for Ethiopia’s domestic and diaspora journeys
            </h2>
            <p className="text-sm text-muted-foreground">
              Each connector from the WordPress article gains automation, telemetry, and audit-ready workflows.
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
              Clear milestones and artefacts keep finance, compliance, and operations leaders aligned.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.step}
                  className="flex h_full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    <span>{stage.step}</span>
                    <Icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold">{stage.title}</h3>
                  <p className="text-sm text-white/75">{stage.summary}</p>
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
            Finance, compliance, and technology leaders in Ethiopia raise these topics at the start of every engagement.
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
                Ready to orchestrate Ethiopia MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software delivers the gateways, modules, and services named in the WordPress archive—now
                enhanced with AI telemetry, compliance artefacts, and proactive support.
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Ethiopia success pod</p>
                </div>
                <Sparkles className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Gain telemetry summaries, ticket audits, and compliance documentation aligned with Ethiopian regulators, banking partners, and humanitarian stakeholders.
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
