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
  SunDim
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
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
    label: "Gateway suite",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Matches the Fiji WordPress article, now orchestrated with AI telemetry and compliance guardrails.",
    icon: Plugs
  },
  {
    label: "Currency mix",
    value: "FJD · USD · AUD",
    description:
      "Multi currency module reconciles Fijian dollar with tourism-driven US and Australian dollar settlements.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Experience stack",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    description:
      "Plus e-voucher and backup manager modules—each from the WordPress export—upgraded with automation and SLA dashboards.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual enablement",
    summary:
      "Serve English, Fiji Hindi, and iTaukei experiences across portals, ticket replies, and nurture journeys.",
    icon: Globe2
  },
  {
    title: "Ticket transparency",
    summary:
      "Segment finance, compliance, and tourism partner requests with SLA clocks, escalation policies, and exportable evidence packs.",
    icon: ChatCenteredDots
  },
  {
    title: "Automation cadence",
    summary:
      "Auto responder workflows notify distributors about onboarding steps, payouts, and compliance checkpoints in their preferred language.",
    icon: Lightning
  },
  {
    title: "E-wallet resilience",
    summary:
      "Instant payouts, encrypted backups, and maker-checker approvals protect earnings during travel seasons and cyclone disruptions.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global confidence",
    focus: "Provide trusted checkout for tourism packages, wellness kits, and diaspora sales.",
    bullets: [
      "FX routing aligns FJD, USD, and AUD settlements with treasury guardrails.",
      "Chargeback packs assemble ticket evidence and policy documentation automatically.",
      "Conversion dashboards compare tourism, retail, and digital product performance."
    ],
    icon: ShieldCheck
  },
  {
    name: "Skrill payout express",
    focus: "Deliver rapid commissions to island distributors and resort partners.",
    bullets: [
      "Weekly, milestone, and instant payout cadences adapt to liquidity parameters.",
      "AML approvals captured inside the ticket system for audit-ready evidence.",
      "Auto responder notifications confirm wallet funding in English or Fiji Hindi."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect card transactions from chargebacks tied to travel itinerary changes.",
    bullets: [
      "Adaptive fraud scoring tuned for Pacific telecom conditions.",
      "Fallback routing maintains authorisation stability during PSP incidents.",
      "Real-time alerts highlight anomalies so finance teams intervene early."
    ],
    icon: Compass
  },
  {
    name: "Braintree experimentation lane",
    focus: "Prototype subscription bundles, training content, and AI-driven services.",
    bullets: [
      "Tokenised payments power recurring memberships and instalment options.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento inventory aligned.",
      "Experiment dashboards feed AI recommendations to leadership councils."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    heading: "Discovery & context",
    detail: "Translate the WordPress checklist into Fiji’s tourism-centered execution roadmap.",
    bullets: [
      "Stakeholder interviews across finance, compliance, and resort distributor partners.",
      "Inventory of existing gateways, ticket cadences, and multilingual assets.",
      "Risk analysis covering AML, FX fluctuations, and cyclone-contingency planning."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    heading: "Gateway activation",
    detail: "Enable PayPal, Skrill, SecurionPay, and Braintree with the foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules.",
      "Sandbox testing mirrors tourism bookings, diaspora sales, and local retail flows.",
      "Approval matrices, SLA dashboards, and compliance artefacts align leadership."
    ],
    icon: Layers3
  },
  {
    step: "03",
    heading: "Experience orchestration",
    detail: "Synchronise storefronts, portals, and communications with orchestrated payments.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as cited in the legacy page.",
      "Localise journeys for English, Fiji Hindi, and iTaukei audiences.",
      "Connect payment telemetry to nurture, retention, and tourism loyalty programmes."
    ],
    icon: Waves
  },
  {
    step: "04",
    heading: "Optimisation cadence",
    detail: "Maintain agility with AI-led insights and resilience drills.",
    bullets: [
      "Monthly telemetry reviews covering FX exposure, conversion health, and customer satisfaction metrics.",
      "Ticket audits and compliance packs keep banking partners comfortable.",
      "Backup rehearsals protect payout continuity during severe weather or travel shocks."
    ],
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you manage FJD alongside USD and AUD?",
    answer:
      "The multi currency module reconciles all three currencies with hedging rules, variance alerts, and treasury-ready exports."
  },
  {
    question: "Can ticket and automation workflows support multiple Fijian languages?",
    answer:
      "Yes. Ticket outcomes trigger language-specific templates so distributors receive timely updates without manual translation."
  },
  {
    question: "What post-launch support is provided for Fiji?",
    answer:
      "Dedicated pods deliver telemetry summaries, ticket audits, and compliance artefacts tuned to Fiji’s regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Fiji MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Fiji MLM programmes with multilingual, multi-currency, and compliance automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/fiji"
  },
  openGraph: {
    title: "Fiji MLM Payment Gateways",
    description:
      "Transform the Fiji WordPress gateway checklist into an AI-enabled payment, support, and optimisation programme."
  }
};

type FijiPageProps = {
  params: { lang: SupportedLocale };
};

export default function FijiPaymentGatewayPage({ params }: FijiPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Fiji · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate resilient MLM payments for Fiji’s tourism-centric market
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software evolves the WordPress “Ways to accept payments” guidance into an AI-ready programme
                that supports tourism partners, diaspora sales, and compliance expectations across the islands.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your Fiji launch
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
            Modules cited in the WordPress page—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules operate as an integrated stack providing automation, governance, and evidence.
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
              Gateway tactics for tourism and diaspora growth
            </h2>
            <p className="text-sm text-muted-foreground">
              Each connector from the WordPress content gains automation, telemetry, and compliance workflows tailored to Fiji.
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
              Clear milestones and artefacts keep finance, compliance, and tourism partners aligned end-to-end.
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
            Finance, compliance, and distributor leaders in Fiji ask these questions first when modernising their programmes.
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
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-cyan-500/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Fiji MLM payments?
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Fiji success pod</p>
                </div>
                <SunDim className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry summaries, ticket audits, and compliance documentation aligned with Fijian regulators and banking partners.
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
