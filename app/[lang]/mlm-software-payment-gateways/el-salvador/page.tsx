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
  Coins,
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
  TrendUp
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
  label: string;
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
    title: "Gateway bundle",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Directly aligned with the El Salvador WordPress article, orchestrated through Cloud MLM Software telemetry.",
    icon: Plugs
  },
  {
    title: "Currency strategy",
    value: "USD + BTC support",
    description:
      "Multi currency module manages El Salvador’s dollarised economy while accommodating crypto-linked payouts and EUR flows.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience stack",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    description:
      "Plus e-voucher and backup manager automation—each enhanced with AI prompts and SLA dashboards.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual readiness",
    summary:
      "Deliver Spanish and English experiences across portals, ticket replies, and communications tailored to Salvadoran distributors.",
    icon: Globe2
  },
  {
    title: "Ticket transparency",
    summary:
      "Segment requests for finance, compliance, and field leadership with measurable SLAs and audit exports.",
    icon: ChatCenteredDots
  },
  {
    title: "Auto responder cadence",
    summary:
      "Trigger onboarding, compliance, and reorder flows when payment telemetry changes state.",
    icon: Lightning
  },
  {
    title: "E-wallet resilience",
    summary:
      "Provide instant payouts while backup snapshots protect commissions—critical for wallets spanning USD and BTC.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal trust layer",
    focus: "Support diaspora enrolment and ecommerce bundles with a recognised brand.",
    bullets: [
      "FX routing strategies cover USD, EUR, and regional partners.",
      "Chargeback evidence packs link to ticket and compliance notes.",
      "Analytics track conversion performance by product line and distributor tier."
    ],
    icon: ShieldCheck
  },
  {
    name: "Skrill payout velocity",
    focus: "Deliver commissions quickly to mobile-first leaders across San Salvador, Santa Ana, and Santa Tecla.",
    bullets: [
      "Weekly, monthly, or milestone payout cadences with liquidity guardrails.",
      "AML approvals captured inside the ticket system for audit readiness.",
      "Auto responder notifications confirm wallet funding events immediately."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay fraud guard",
    focus: "Protect recurring kit purchases and subscription services.",
    bullets: [
      "Adaptive fraud scoring tuned for Salvadoran telecom performance.",
      "Failover routing preserves authorisation rates during PSP incidents.",
      "Real-time alerts highlight anomalies requiring finance intervention."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation",
    focus: "Pilot new bundles, digital services, and crypto-linked offers without rebuilding the stack.",
    bullets: [
      "Tokenised payments enable subscriptions, loyalty tiers, and instalments.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento in sync.",
      "Experiment dashboards feed AI recommendations to leadership meetings."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    label: "Discover",
    description: "Translate the WordPress checklist into El Salvador’s operational reality.",
    bullets: [
      "Stakeholder workshops across finance, compliance, and distributor councils.",
      "Inventory of existing gateways, ticket queues, and multilingual assets.",
      "Risk analysis covering AML, Bitcoin regulation, and data residency."
    ],
    icon: MapTrifold
  },
  {
    label: "Activate",
    description: "Enable gateways and foundational modules in a governed sandbox.",
    bullets: [
      "Configure PayPal, Skrill, SecurionPay, and Braintree with telemetry.",
      "Launch multi currency, multilingual, ticketing, auto responder, e-wallet, and backup manager modules.",
      "Define approvals, SLA dashboards, and compliance artefacts."
    ],
    icon: Layers3
  },
  {
    label: "Experience",
    description: "Align storefronts, portals, and communications with orchestrated payments.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as cited in the article.",
      "Localise assets for Spanish and English audiences with crypto-friendly messaging.",
      "Connect payment events to nurture journeys and retention programmes."
    ],
    icon: Waves
  },
  {
    label: "Optimise",
    description: "Maintain momentum with AI-guided rituals and reporting.",
    bullets: [
      "Monthly telemetry reviews covering FX exposure and conversion health.",
      "Ticket audits to satisfy SLA targets and regulator expectations.",
      "Backup rehearsals protecting payout continuity during infrastructure changes."
    ],
    icon: TrendUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can the platform handle USD and Bitcoin side by side?",
    answer:
      "Yes. The multi currency module highlighted in the WordPress list keeps USD, BTC, and supporting currencies reconciled with variance alerts and treasury exports."
  },
  {
    question: "How do ticket and auto responder workflows coordinate?",
    answer:
      "Ticket statuses automatically trigger multilingual communications so distributors receive updates without manual outreach."
  },
  {
    question: "What post-launch support is included?",
    answer:
      "Dedicated pods provide telemetry summaries, ticket audits, and compliance evidence packs tailored for El Salvador’s regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "El Salvador MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for El Salvador MLM programmes with multilingual, multi-currency, and crypto-aware automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/el-salvador"
  },
  openGraph: {
    title: "El Salvador MLM Payment Gateways",
    description:
      "Transform the El Salvador WordPress checklist into an AI-ready payment, support, and optimisation programme."
  }
};

type ElSalvadorPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function ElSalvadorPaymentGatewayPage({ params }: ElSalvadorPageProps) {
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
              El Salvador · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Execute the El Salvador “Ways to accept payments” playbook with confidence
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software keeps the WordPress gateway list intact while adding AI telemetry, FX guardrails, and
                multilingual automation—essential for a dollarised and crypto-aware market.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your El Salvador launch
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Request a guided demo</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur">
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
            Modules cited in the legacy article—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
            operate as a cohesive stack with compliance artefacts and AI insights.
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
              Gateway tactics tuned for Salvadoran growth
            </h2>
            <p className="text-sm text-muted-foreground">
              PayPal, Skrill, SecurionPay, and Braintree stay at the core while Cloud MLM Software adds orchestration
              and analytics.
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
              Four phases to launch and optimise your El Salvador payment footprint
            </h2>
            <p className="text-sm text-white/70">
              Each stage converts the WordPress checklist into measurable outcomes with clear artefacts.
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
            Finance, compliance, and technology leaders in El Salvador raise these topics first.
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
                Ready to orchestrate El Salvador MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software unites the gateways, modules, and services from the WordPress archive with AI
                telemetry, compliance artefacts, and proactive customer care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Speak with a strategist
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
                  <p className="mt-2 text-lg font-semibold text-foreground">El Salvador success pod</p>
                </div>
                <Coins className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry summaries, ticket audits, and compliance documentation aligned with Salvadoran regulators and banking partners.
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
