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
  Building,
  BarChart,
  Compass,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ChatTeardropDots,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Plugs,
  StackSimple,
  Timer
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
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
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
    label: "Gateway suite",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    copy: "The same four gateways called out in the Egypt WordPress export, now orchestrated with telemetry and compliance guardrails.",
    icon: Plugs
  },
  {
    label: "Currency orchestration",
    value: "EGP + USD + EUR",
    copy: "Multi currency module reconciles Egyptian pound, US dollar, and Euro wallets with hedging rules and variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Experience modules",
    value: "Multilingual · Ticketing · Auto responder · E-wallet",
    copy: "Plus e-voucher and backup manager automation—each enhanced with AI insights and SLA dashboards.",
    icon: Layers3
  }
];

const MODULES: Module[] = [
  {
    title: "Multilingual enablement",
    detail:
      "Deliver Arabic and English experiences across portals, ticket replies, and nurture journeys tailored to Egyptian distributor teams.",
    icon: Globe2
  },
  {
    title: "Ticket system governance",
    detail:
      "Segment requests for finance, compliance, and customer care with measurable SLAs and exportable evidence packs.",
    icon: ChatTeardropDots
  },
  {
    title: "Auto responder cadence",
    detail:
      "Trigger onboarding, compliance, and reorder flows whenever payment telemetry changes status.",
    icon: Lightning
  },
  {
    title: "E-wallet resilience",
    detail:
      "Keep commissions available with encrypted backups and maker-checker approvals to satisfy Egyptian regulators.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global confidence",
    focus: "Support cross-border enrolment and digital kit purchases for Egyptian distributors.",
    bullets: [
      "FX routing strategies for EGP, USD, and EUR settlements.",
      "Chargeback evidence packs linked to ticket histories and compliance notes.",
      "Conversion analytics segmented by distributor tier and product line."
    ],
    icon: Compass
  },
  {
    name: "Skrill payout express",
    focus: "Deliver rapid commissions to mobile-first leaders in Cairo, Alexandria, and Giza.",
    bullets: [
      "Weekly, monthly, or milestone payout cadences respecting liquidity guardrails.",
      "AML reviews captured inside ticket workflows for audit-ready documentation.",
      "Auto responder notifications confirm wallet funding events in Arabic and English."
    ],
    icon: Timer
  },
  {
    name: "SecurionPay risk guard",
    focus: "Protect recurring kit purchases and subscription products with PSD2-ready security.",
    bullets: [
      "Adaptive fraud scoring tuned for Egyptian telecom performance.",
      "Failover routing maintains authorisation stability during PSP incidents.",
      "Real-time alerts surface anomalies requiring finance intervention."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation",
    focus: "Launch new membership bundles and value-added services quickly.",
    bullets: [
      "Tokenised payments support subscriptions, loyalty tiers, and instalment plans.",
      "Webhook automation syncs Shopify, WooCommerce, and Magento catalogues.",
      "Experiment dashboards feed AI recommendations to leadership and field councils."
    ],
    icon: Sparkles
  }
];

const STAGES: Stage[] = [
  {
    title: "Discovery & alignment",
    description: "Translate the WordPress checklist into Egyptian market requirements.",
    bullets: [
      "Stakeholder interviews across finance, compliance, and operations.",
      "Audit of current gateways, tickets, and multilingual assets.",
      "Risk analysis covering AML, tax, and data residency obligations."
    ],
    icon: MapTrifold
  },
  {
    title: "Gateway activation",
    description: "Enable PayPal, Skrill, SecurionPay, and Braintree alongside foundational modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, and backup manager modules.",
      "Launch sandbox testing covering local and cross-border scenarios.",
      "Define approval matrices, SLA tracking, and audit artefacts."
    ],
    icon: Layers3
  },
  {
    title: "Experience synchronisation",
    description: "Align storefronts, portals, and marketing with orchestrated payment flows.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as cited in the article.",
      "Localise content for Arabic and English audiences across replicated sites.",
      "Link payment events to nurture journeys and retention programmes."
    ],
    icon: Building
  },
  {
    title: "Optimisation cadence",
    description: "Maintain performance with AI-guided reviews and proactive rituals.",
    bullets: [
      "Monthly telemetry reviews covering FX exposure and conversion health.",
      "Ticket audits to ensure SLA and compliance targets are met.",
      "Backup rehearsals safeguarding commission continuity."
    ],
    icon: BarChart
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can the platform handle EGP, USD, and EUR simultaneously?",
    answer:
      "Yes. The multi currency module highlighted in the WordPress export keeps all ledgers aligned with hedging rules, variance alerts, and automated treasury reports."
  },
  {
    question: "How are ticket and auto responder workflows connected?",
    answer:
      "Ticket statuses and resolution codes automatically trigger multilingual communications so distributors are informed without manual follow-up."
  },
  {
    question: "What support coverage do we receive after launch?",
    answer:
      "Dedicated pods provide telemetry reviews, ticket audits, and compliance evidence packs aligned with Egyptian regulators and banking partners."
  }
];

export const metadata: Metadata = {
  title: "Egypt MLM Payment Gateways | Cloud MLM Software",
  description:
    "Unify PayPal, Skrill, SecurionPay, and Braintree for Egyptian MLM operations with multilingual, multi-currency, and compliance automation from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/egypt"
  },
  openGraph: {
    title: "Egypt MLM Payment Gateways",
    description:
      "Turn the Egypt WordPress checklist into an AI-enabled payment, support, and optimisation programme."
  }
};

type EgyptPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function EgyptPaymentGatewayPage({ params }: EgyptPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200/70 bg-gradient-to-br from-amber-50 via-white to-sky-50 px-8 py-16 shadow-xl dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(249,115,22,0.2),transparent_55%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(234,179,8,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(249,115,22,0.32),transparent_55%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.32),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(234,179,8,0.32),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                Egypt · Payment orchestration
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Modernise Egypt’s MLM payment experience with certainty
                </h1>
                <p className="max-w-2xl text-base text-slate-600 dark:text-slate-200">
                  Cloud MLM Software honours the WordPress “Ways to accept payments” blueprint—keeping the highlighted
                  gateways, modules, and services—while infusing AI telemetry, FX guardrails, and multilingual automation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Plan your Egypt launch
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
                >
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
                    className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-md dark:border-slate-700/60 dark:bg-slate-900/70"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                          {highlight.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{highlight.value}</p>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{highlight.copy}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Modules cited in the WordPress article—now orchestrated together
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager modules
            operate in unison with AI assistance and compliance artefacts.
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

      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Gateway tactics for Egyptian growth
            </h2>
            <p className="text-sm text-white/70">
              The WordPress gateway stack stays intact while Cloud MLM Software brings orchestration, telemetry, and
              compliance workflows.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {GATEWAYS.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.name}
                  className="flex h-full flex-col gap-5 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{gateway.name}</h3>
                      <p className="text-sm text-white/70">{gateway.focus}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-white/75">
                    {gateway.bullets.map((bullet) => (
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
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Review pricing tiers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
              <Link href={demoHref}>Request a strategy session</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four stages to launch and optimise your Egypt footprint
          </h2>
          <p className="text-sm text-muted-foreground">
            Each stage converts the legacy checklist into measurable progress with clear artefacts for every stakeholder.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{stage.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stage.bullets.map((bullet) => (
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

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Finance, compliance, and technology leaders in Egypt ask these questions most often.
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
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-amber-500/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Egypt MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software unites the gateways, modules, and services named in the WordPress archive with AI
                telemetry, compliance artefacts, and proactive support coverage.
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
                  <p className="mt-2 text-lg font-semibold text-foreground">Egypt success pod</p>
                </div>
                <Building className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Expect telemetry reviews, ticket audits, and compliance documentation aligned with Egyptian regulators
                and banking partners.
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
