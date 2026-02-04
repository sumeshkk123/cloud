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
  Globe2,
  Lightbulb,
  ShieldCheck,
  Signal,
  SquareStack,
  Trophy,
  Waves
} from "lucide-react";
import {
  ChatCircleDots,
  CurrencyCircleDollar,
  GearSix,
  Lightning,
  MapPin,
  Path,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
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

type Module = {
  name: string;
  copy: string;
  icon: IconType;
};

type Stage = {
  label: string;
  detail: string;
  items: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Gateway continuity",
    description:
      "PayPal, Skrill, SecurionPay, and Braintree remain the anchor stack referenced in the WordPress Djibouti article.",
    icon: SquareStack
  },
  {
    title: "Currency coverage",
    description:
      "Multi currency module reconciles Djiboutian franc (DJF) with USD and EUR revenue flows supporting port-driven commerce.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Experience stack",
    description:
      "Multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules collaborate with AI telemetry.",
    icon: Signal
  }
];

const MODULES: Module[] = [
  {
    name: "Multilingual enablement",
    copy: "Deliver French, Arabic, Somali, and English experiences across replicated sites, tickets, and nurture emails.",
    icon: Globe2
  },
  {
    name: "Ticket system transparency",
    copy: "Route port-logistics, treasury, and distributor requests with SLA dashboards and exportable audit trails.",
    icon: ChatCircleDots
  },
  {
    name: "Auto responder intelligence",
    copy: "Trigger status updates for onboarding checks, payout releases, and campaign launches using gateway telemetry.",
    icon: Lightning
  },
  {
    name: "Resilient payouts",
    copy: "Combine e-wallet balances with backup snapshots so commissions remain accessible during connectivity swings.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global reach",
    focus: "Support diaspora selling and logistics partnerships tied to Djibouti’s port economy.",
    bullets: [
      "Segment FX routing for DJF, USD, and EUR transactions.",
      "Chargeback evidence packs connect to ticket records for faster resolution.",
      "Telemetry surfaces conversion performance by distributor cohort."
    ],
    icon: Waves
  },
  {
    name: "Skrill payout express",
    focus: "Deliver mobile-friendly commissions for field leaders across East Africa.",
    bullets: [
      "Flexible payout cadences that respect liquidity and compliance policies.",
      "AML and KYC approvals documented automatically inside ticket workflows.",
      "Auto responder alerts notify distributors when wallets are funded."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay assurance",
    focus: "Protect card transactions for recurring wellness and education bundles.",
    bullets: [
      "Adaptive fraud scoring tuned for Djibouti and neighbouring telecom realities.",
      "Fallback routing to alternate acquirers when decline ratios spike.",
      "AI dashboards highlight exceptions requiring finance attention."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation lane",
    focus: "Prototype new membership packages without disrupting existing flows.",
    bullets: [
      "Tokenised payments support subscription plans for logistics and wellness ventures.",
      "Webhook connectors keep WooCommerce, Shopify, and Magento inventory aligned.",
      "Experiment metrics feed into Cloud MLM Software’s AI assistant for recommendations."
    ],
    icon: GearSix
  }
];

const STAGES: Stage[] = [
  {
    label: "01 · Alignment",
    detail: "Translate the WordPress checklist into Djibouti-specific requirements.",
    items: [
      "Stakeholder workshops with finance, compliance, and distributor leadership.",
      "Assessment of current gateways, mobile wallets, and ticket queues.",
      "Risk heatmap spanning AML, data residency, and infrastructure resilience."
    ],
    icon: MapPin
  },
  {
    label: "02 · Enablement",
    detail: "Activate gateway connectors and modules in a governed sandbox.",
    items: [
      "Configure PayPal, Skrill, SecurionPay, and Braintree with telemetry.",
      "Enable multi currency, multilingual, ticketing, auto responder, e-wallet, and backup modules together.",
      "Define permissions, approvals, and SLA dashboards for each team."
    ],
    icon: Path
  },
  {
    label: "03 · Experience",
    detail: "Synchronise storefronts, replicated sites, and communications.",
    items: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart catalogues.",
      "Localise content for French, Arabic, Somali, and English audiences.",
      "Link payment events to nurture journeys and compliance reminders."
    ],
    icon: Lightbulb
  },
  {
    label: "04 · Optimisation",
    detail: "Drive continuous improvement with AI-guided rituals.",
    items: [
      "Monthly telemetry reviews highlight FX exposure and support health.",
      "Ticket audits ensure SLA compliance and regulator readiness.",
      "Backup rehearsals safeguard commission continuity."
    ],
    icon: Trophy
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can the platform handle DJF, USD, and EUR simultaneously?",
    answer:
      "Yes. The multi currency module keeps all three ledgers reconciled with hedging rules, variance alerts, and exportable treasury reports."
  },
  {
    question: "How are ticket and auto responder flows connected?",
    answer:
      "Ticket statuses automatically trigger email or SMS updates so distributors hear about approvals, payouts, or escalations without manual outreach."
  },
  {
    question: "What support coverage do we receive post-launch?",
    answer:
      "A dedicated pod manages tickets, telemetry reviews, and compliance evidence packs so Djibouti operations stay resilient and audit-ready."
  }
];

export const metadata: Metadata = {
  title: "Djibouti MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform Djibouti-focused MLM payments with Cloud MLM Software. Orchestrate PayPal, Skrill, SecurionPay, and Braintree while enabling multilingual and multi-currency automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/djibouti"
  },
  openGraph: {
    title: "Djibouti MLM Payment Gateways",
    description:
      "Activate gateway orchestration, multilingual support, and AI-powered optimisation for Djibouti’s MLM operations."
  }
};

type DjiboutiPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function DjiboutiPaymentGatewayPage({ params }: DjiboutiPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Djibouti · Payment blueprint
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Execute the Djibouti “Ways to accept payments” playbook with confidence
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                We honour the WordPress article’s gateway list and module references, adding AI telemetry, FX guardrails,
                and multilingual automation that speak to Djibouti’s strategic port economy.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your Djibouti launch
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold">{highlight.title}</h2>
                      <p className="mt-2 text-sm text-white/75">{highlight.description}</p>
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
            Modules cited in the legacy page—now AI-enabled
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup modules operate as a combined experience with telemetry and audit trails.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{module.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{module.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway tactics for Djibouti’s hybrid economy
          </h2>
          <p className="text-sm text-muted-foreground">
            PayPal, Skrill, SecurionPay, and Braintree stay at the core while Cloud MLM Software supplies automation, governance, and contextual insights.
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
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
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
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Compare pricing options
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href={demoHref}>Schedule a working session</Link>
          </Button>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Four phases to launch and optimise your Djibouti payment footprint
            </h2>
            <p className="text-sm text-white/70">
              We convert the legacy checklist into accountable stages with measurable outputs for every stakeholder.
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
                  <p className="text-sm text-white/75">{stage.detail}</p>
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
            Finance, compliance, and distributor leaders ask these questions first when shaping Djibouti operations.
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
                Ready to operationalise Djibouti MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software merges the gateways and modules listed in the WordPress archive with AI telemetry,
                compliance artefacts, and support automation.
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Djibouti-focused success pod</p>
                </div>
                <StackSimple className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect proactive ticket reviews, telemetry summaries, and compliance documentation that keep port-driven
                operations resilient.
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
