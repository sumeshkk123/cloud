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
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Signal,
  Sparkles,
  Waves
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
    title: "Gateway suite",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    detail:
      "Identical to the Finland WordPress export, now orchestrated with telemetry, SLA guardrails, and compliance artefacts.",
    icon: Plugs
  },
  {
    title: "Currency coverage",
    value: "EUR · USD · SEK",
    detail:
      "Multi currency module reconciles euro operations with USD and Swedish krona settlements for cross-border programmes.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience stack",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    detail:
      "Plus e-voucher and backup manager modules from the legacy article—modernised with AI prompts and evidence dashboards.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    heading: "Multilingual enablement",
    summary:
      "Serve Finnish, Swedish, and English experiences across portals, ticket replies, and automated nurture sequences.",
    icon: Globe2
  },
  {
    heading: "Ticket system governance",
    summary:
      "Segment finance, compliance, and product support queues with SLA tracking, escalation playbooks, and audit-ready exports.",
    icon: ChatCenteredDots
  },
  {
    heading: "Automation cadence",
    summary:
      "Auto responder workflows announce onboarding milestones, payout releases, and compliance reminders in the appropriate language.",
    icon: Lightning
  },
  {
    heading: "E-wallet resilience",
    summary:
      "Instant payouts paired with encrypted backups and maker-checker approvals meet Finland’s data protection expectations.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal Nordic trust",
    focus: "Provide recognised checkout for SaaS, wellness, and digital education bundles.",
    bullets: [
      "FX routing aligns euro, USD, and SEK settlements with treasury guardrails.",
      "Chargeback packs combine ticket evidence, contracts, and consent logs automatically.",
      "Conversion dashboards compare product lines and distributor tiers for leadership clarity."
    ],
    icon: ShieldCheck
  },
  {
    name: "Skrill payout express",
    focus: "Deliver rapid commissions to Finland’s mobile-first distributor teams.",
    bullets: [
      "Weekly, milestone, and instant payout cadences adapt to liquidity policies.",
      "AML approvals captured in the ticket system for audit-ready documentation.",
      "Auto responder alerts confirm wallet funding in Finnish, Swedish, or English."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect card transactions for innovation-driven product lines.",
    bullets: [
      "Adaptive fraud scoring tuned for Finland’s high digital adoption.",
      "Failover routing keeps authorisation stable during PSP incidents.",
      "Real-time alerts highlight anomalies before they affect regulator confidence."
    ],
    icon: Gauge
  },
  {
    name: "Braintree experimentation lane",
    focus: "Prototype AI-enabled offerings, micro-subscriptions, and sustainability bundles.",
    bullets: [
      "Tokenised payments support recurring billing and instalment options without storing card data locally.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento catalogues in sync.",
      "Experiment dashboards feed AI recommendations to product and finance councils."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Discovery & alignment",
    description: "Translate the WordPress checklist into Finland-specific execution requirements.",
    bullets: [
      "Stakeholder workshops across finance, compliance, and product leadership.",
      "Audit of existing gateways, ticket flows, and multilingual content.",
      "Risk analysis covering PSD2, GDPR, and cross-border VAT exposure."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    title: "Gateway activation",
    description: "Enable PayPal, Skrill, SecurionPay, and Braintree alongside foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules.",
      "Sandbox testing mirrors domestic and Nordic cross-border scenarios.",
      "Approval matrices, SLA dashboards, and compliance artefacts align leadership."
    ],
    icon: Layers3
  },
  {
    step: "03",
    title: "Experience orchestration",
    description: "Synchronise storefronts, portals, and communications with orchestrated payment logic.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as noted in the article.",
      "Localise journeys for Finnish, Swedish, and English audiences.",
      "Connect payment telemetry to nurture campaigns, upsell flows, and retention programmes."
    ],
    icon: Waves
  },
  {
    step: "04",
    title: "Optimisation cadence",
    description: "Maintain agility with AI-led insights and proactive support.",
    bullets: [
      "Monthly telemetry reviews covering FX exposure, conversion health, and support metrics.",
      "Ticket audits and compliance packs keep banking partners confident.",
      "Automation backlog prioritised based on distributor councils and product leadership feedback."
    ],
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you handle euro, USD, and SEK flows simultaneously?",
    answer:
      "The multi currency module reconciles all three currencies with hedging rules, variance alerts, and treasury-ready exports."
  },
  {
    question: "Can ticket and automation workflows operate across Finnish, Swedish, and English?",
    answer:
      "Yes. Ticket outcomes automatically trigger language-specific templates so distributors receive timely updates without manual translation."
  },
  {
    question: "What support coverage is available post-launch?",
    answer:
      "Dedicated pods provide telemetry summaries, ticket audits, and compliance artefacts aligned with Finland’s regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Finland MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Finland MLM operations with multilingual, multi-currency, and compliance automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/finland"
  },
  openGraph: {
    title: "Finland MLM Payment Gateways",
    description:
      "Turn the Finland WordPress gateway checklist into an AI-enabled payment, support, and optimisation programme."
  }
};

type FinlandPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function FinlandPaymentGatewayPage({ params }: FinlandPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Finland · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver a Finnish MLM payment engine built for innovation
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software evolves the WordPress “Ways to accept payments” guidance into an AI-ready programme
                that balances compliance, automation, and cross-border expansion for Finnish distributors.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your Finland launch
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
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules form
            an integrated stack delivering automation, governance, and inspection-ready artefacts.
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
              Gateway tactics for Finland’s innovation economy
            </h2>
            <p className="text-sm text-muted-foreground">
              Each connector from the WordPress article receives automation, telemetry, and compliance workflows tuned to Finland.
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
              A four-stage programme grounded in the WordPress export
            </h2>
            <p className="text-sm text-white/70">
              Transparent milestones and artefacts keep finance, compliance, and product teams aligned.
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
            Finance, compliance, and distributor leaders in Finland request these clarifications first.
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
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-indigo-500/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Finland MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software delivers the gateways, modules, and services cited in the WordPress archive—now enriched with AI telemetry, compliance artefacts, and proactive support coverage.
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Finland success pod</p>
                </div>
                <Target className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry summaries, ticket audits, and compliance documentation aligned with Finland’s regulators and banking partners.
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
