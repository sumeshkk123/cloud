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
  BarChart4,
  Compass,
  Globe2,
  Layers3,
  ShieldCheck,
  Signal,
  Sparkles
} from "lucide-react";
import {
  ChatCenteredText,
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
  description: string;
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
    title: "Gateway roster",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Identical to the Eswatini WordPress export, now orchestrated with AI telemetry, failover logic, and SLA guardrails.",
    icon: Plugs
  },
  {
    title: "Currency capability",
    value: "SZL + ZAR + USD",
    description:
      "Multi currency module reconciles lilangeni with rand interconnections and USD settlements across cross-border programmes.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience modules",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    description:
      "Plus e-voucher and backup automation—each cited in the legacy page—modernised with AI insights and compliance artefacts.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    heading: "Multilingual enablement",
    summary:
      "Serve English and siSwati experiences across portals, knowledge assets, and nurture cadences for rural and urban distributors.",
    icon: Globe2
  },
  {
    heading: "Ticket system governance",
    summary:
      "Segment finance, compliance, and field coaching requests with SLA dashboards and exportable evidence packs.",
    icon: ChatCenteredText
  },
  {
    heading: "Automation cadence",
    summary:
      "Auto responder workflows announce onboarding progress, payout confirmations, and compliance reminders in the right language.",
    icon: Lightning
  },
  {
    heading: "E-wallet resilience",
    summary:
      "Instant commissions combined with encrypted backups protect distributor income despite intermittent network coverage.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora bridge",
    focus: "Support diaspora-funded kits and cross-border ecommerce with a trusted checkout.",
    bullets: [
      "FX routing aligns SZL, ZAR, and USD settlements for treasury oversight.",
      "Chargeback artefacts connect to ticket histories for regulator-ready documentation.",
      "Conversion dashboards compare rural and urban distributor cohorts."
    ],
    icon: Compass
  },
  {
    name: "Skrill payout agility",
    focus: "Deliver mobile-friendly commissions to field leaders across Eswatini and neighbouring regions.",
    bullets: [
      "Weekly, milestone, and instant payout cadences aligned to liquidity guardrails.",
      "AML approvals captured in the ticket system for audit readiness.",
      "Auto responder notifications confirm wallet funding events instantly."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay risk shield",
    focus: "Protect card transactions for wellness, education, and agriculture bundles.",
    bullets: [
      "Adaptive fraud scoring tuned for regional telecom conditions.",
      "Failover routing maintains authorisation rates when primary PSPs fluctuate.",
      "Anomaly alerts prompt finance response before they impact reputation."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation lane",
    focus: "Prototype kits, micro-subscription offerings, and AI-driven services without rewriting infrastructure.",
    bullets: [
      "Tokenised payments underpin loyalty tiers and instalment options.",
      "Webhook automation keeps Shopify, WooCommerce, and Magento inventory aligned.",
      "Experiment dashboards feed AI recommendations for leadership councils."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Discovery & alignment",
    detail: "Translate the WordPress checklist into Eswatini’s operational priorities.",
    bullets: [
      "Workshops with finance, compliance, and distributor councils across rural and urban regions.",
      "Inventory of existing gateways, ticket flows, and multilingual materials.",
      "Risk analysis covering AML, FX management, and telecom resilience."
    ],
    icon: MapTrifold
  },
  {
    step: "02",
    title: "Gateway activation",
    detail: "Enable PayPal, Skrill, SecurionPay, and Braintree alongside foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules.",
      "Sandbox testing mirrors diaspora, local retail, and cross-border scenarios.",
      "Approval matrices, SLA dashboards, and compliance artefacts keep leadership aligned."
    ],
    icon: Layers3
  },
  {
    step: "03",
    title: "Experience orchestration",
    detail: "Synchronise storefronts, portals, and communications with orchestrated payments.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as detailed in the legacy page.",
      "Localise journeys for English and siSwati audiences with mobile-first design.",
      "Connect payment telemetry to nurture campaigns and field enablement programmes."
    ],
    icon: Waves
  },
  {
    step: "04",
    title: "Optimisation cadence",
    detail: "Maintain agility with AI insights and continuous improvement rituals.",
    bullets: [
      "Monthly telemetry reviews track FX exposure, conversion performance, and support health.",
      "Ticket audits and compliance packs satisfy regulator expectations.",
      "Quarterly retros prioritise automation features requested by distributor leaders."
    ],
    icon: BarChart4
  }
];

const FAQS: FAQ[] = [
  {
    question: "How does Cloud MLM Software manage SZL, ZAR, and USD simultaneously?",
    answer:
      "The multi currency module from the WordPress article reconciles each ledger with hedging rules, variance alerts, and exportable treasury reports."
  },
  {
    question: "Can ticket and automation workflows serve siSwati and English audiences?",
    answer:
      "Yes. Ticket outcomes trigger the correct language templates automatically, keeping distributors informed without manual outreach."
  },
  {
    question: "What post-launch support is available for Eswatini programmes?",
    answer:
      "Dedicated pods deliver telemetry summaries, ticket audits, and compliance artefacts tuned to Eswatini’s regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Eswatini MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Eswatini MLM operations with multilingual, multi-currency, and compliance automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/eswatini"
  },
  openGraph: {
    title: "Eswatini MLM Payment Gateways",
    description:
      "Transform the Eswatini WordPress gateway checklist into an AI-enabled payment, support, and optimisation programme."
  }
};

type EswatiniPageProps = {
  params: { lang: SupportedLocale };
};

export default function EswatiniPaymentGatewayPage({ params }: EswatiniPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Eswatini · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver resilient MLM payments across Eswatini’s rural and urban networks
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software honours the WordPress “Ways to accept payments” guidance—maintaining the gateway list
                and module stack—while adding AI telemetry, multi currency guardrails, and multilingual automation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Start your Eswatini launch
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
            Modules cited in the legacy page—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules form a cohesive system that delivers transparency and automation.
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
              Gateway tactics tailored to Eswatini’s distributors
            </h2>
            <p className="text-sm text-muted-foreground">
              Each connector from the WordPress page receives automation, telemetry, and compliance enhancements.
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
              A four-stage programme rooted in the WordPress checklist
            </h2>
            <p className="text-sm text-white/70">
              Every stage delivers artefacts and telemetry so finance, compliance, and field teams stay aligned.
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
            These are the topics finance, compliance, and distributor leaders in Eswatini raise most often.
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
                Ready to orchestrate Eswatini MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software delivers the gateways, modules, and services named in the WordPress archive—now
                amplified with AI telemetry, compliance artefacts, and proactive customer care.
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Eswatini success pod</p>
                </div>
                <Waves className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry summaries, ticket audits, and compliance documentation that align with Eswatini’s regulators and regional banking partners.
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
