import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight } from "lucide-react";
import {
  Bank,
  ChatsCircle,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  EnvelopeSimple,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  Stack,
  TrendUp,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  detail: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  narrative: string;
  actions: string[];
  icon: IconType;
};

type Module = {
  name: string;
  description: string;
  icon: IconType;
};

type Milestone = {
  label: string;
  heading: string;
  summary: string;
  icon: IconType;
};

const INSIGHTS: Insight[] = [
  {
    title: "Regional gateway runway",
    detail:
      "Bamako, Timbuktu, and Sikasso teams rely on PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout as listed in the WordPress export.",
    icon: Stack
  },
  {
    title: "Cross-border remittance flow",
    detail: "Diaspora sponsors from France, Côte d’Ivoire, and Senegal fuel programme growth—multi currency reporting keeps it transparent.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Regulation and audit readiness",
    detail:
      "Documentation, ticketing, and backup modules capture BCEAO requirements, AML checks, and tax filings for fast audits.",
    icon: ShieldCheck
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora engine",
    narrative: "Convert remittance trust into growth across Mali’s distributors.",
    actions: [
      "Multi currency module reconciles XOF, EUR, and USD inflows with CFO-ready dashboards.",
      "KYC documentation vault stores sanction screening, identity proofs, and proof-of-funds."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lens",
    narrative: "Blend ecommerce convenience with local wellness fulfilment.",
    actions: [
      "Ticket system module aligns Bamako warehouses with Amazon support timelines.",
      "Auto responder shares French and Bambara delivery updates and loyalty reminders."
    ],
    icon: Megaphone
  },
  {
    name: "PayU West Africa corridor",
    narrative: "Connect cards, mobile money, and bank transfers across regional markets.",
    actions: [
      "Multi currency analytics expose success rates and fee structures by tender type.",
      "Backup manager captures settlement files, dispute narratives, and PSP communications."
    ],
    icon: TrendUp
  },
  {
    name: "Stripe innovation studio",
    narrative: "Prototype AI concierge, subscription bundles, and partner portals.",
    actions: [
      "E-wallet module streams instant commissions once Stripe webhooks confirm settlement.",
      "Emails module broadcasts release notes, compliance alerts, and finance digests."
    ],
    icon: CreditCard
  },
  {
    name: "Authorize.Net governance lane",
    narrative: "Support enterprises that expect North American oversight in Mali.",
    actions: [
      "Ticket system captures underwriting packages, chargeback decisions, and approval trails.",
      "Backup manager safeguards policies, contracts, and regulator correspondence."
    ],
    icon: Bank
  },
  {
    name: "Braintree omnichannel core",
    narrative: "Tokenise field events, pop-up shops, and ecommerce touches.",
    actions: [
      "E-wallet module connects Braintree customer vaults to commission structures.",
      "Multi-lingual system keeps French and Bambara knowledge bases aligned."
    ],
    icon: Plugs
  },
  {
    name: "Adyen executive vantage",
    narrative: "Aggregate EU, US, and APAC acquiring intelligence into one dashboard.",
    actions: [
      "Multi currency forecasts highlight interchange trends and FX exposure for leaders.",
      "KYC documentation stores enhanced due diligence artefacts beside BCEAO expectations."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    narrative: "Distribute virtual kits, AI enablement, and learning hubs to remote teams.",
    actions: [
      "E-voucher engine launches referral incentives and event passes with redemption analytics.",
      "Auto responder nurtures onboarding cohorts with milestone-based prompts."
    ],
    icon: Sparkle
  }
];

const MODULES: Module[] = [
  {
    name: "Multi currency module",
    description: "Balances XOF, EUR, and USD flows with tolerance alerts and AI commentary for finance teams.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP, logistics, and compliance escalations with SLA timers and audit-ready history.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Publishes French and Bambara communications across email, SMS, and AI chat instantly.",
    icon: Megaphone
  },
  {
    name: "E-voucher engine",
    description: "Launches referral campaigns, incentive bundles, and promo codes with redemption insight.",
    icon: Stack
  },
  {
    name: "E-wallet",
    description: "Streams instant commissions while enforcing maker-checker finance controls.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    description: "Secures settlement files, risk assessments, and regulator correspondence for continuity.",
    icon: ShieldCheck
  },
  {
    name: "Emails module",
    description: "Centralises compliance alerts, growth storytelling, and AI-generated digests.",
    icon: EnvelopeSimple
  },
  {
    name: "KYC documentation",
    description: "Stores identity proofs, AML evidence, and expiry reminders for distributors and partners.",
    icon: ClipboardText
  },
  {
    name: "Multi-lingual system",
    description: "Keeps French and Bambara portals, bots, and microsites synchronised.",
    icon: UsersThree
  }
];

const MILESTONES: Milestone[] = [
  {
    label: "Phase 01",
    heading: "Reaffirm the WordPress promise",
    summary:
      "We retain the headline—Ways to accept payments from MLM Software in People’s Democratic Republic of Mali—while refreshing it for 2025 strategy.",
    icon: Stack
  },
  {
    label: "Phase 02",
    heading: "Coordinate compliance evidence",
    summary:
      "Ticketing, backup, and documentation modules align BCEAO oversight, AML checks, and tax reporting inside one workspace.",
    icon: ShieldCheck
  },
  {
    label: "Phase 03",
    heading: "Activate the gateway squad",
    summary:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass through sandbox, certification, and enablement workflows.",
    icon: Lightning
  },
  {
    label: "Phase 04",
    heading: "Deliver AI-first telemetry",
    summary:
      "Dashboards, alerts, and AI summaries give Mali’s leaders, finance teams, and distributors real-time visibility.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Mali MLM Payment Gateways | Cloud MLM Software",
  description:
    "Coordinate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Mali with Cloud MLM Software’s compliance and AI enablement.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/mali"
  },
  openGraph: {
    title: "Mali MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Mali—modernised with gateway orchestration, compliance guardrails, and AI telemetry."
  }
};

type MaliPageProps = {
  params: { lang: SupportedLocale };
};

export default function MaliPaymentGatewayPage({ params }: MaliPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-green-100 py-20 dark:from-yellow-900/30 dark:via-slate-950 dark:to-green-900/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-yellow-200/60 blur-3xl dark:bg-yellow-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-green-200/60 blur-3xl dark:bg-green-900/40" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Mali (ML)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Mali – ML
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software translates the WordPress export into a Mali-specific blueprint that merges gateway
                orchestration, compliance evidence, and AI telemetry for growth across Bamako and beyond.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Mali strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-yellow-400 text-yellow-900 hover:bg-yellow-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Mali demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-yellow-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground dark:text-white">{insight.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{insight.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway playbook for Mali
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight gateways from the WordPress export now include actionable guidance for automation, compliance, and field
            enablement across Mali’s distributor network.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-yellow-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.narrative}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-green-500 dark:bg-white" aria-hidden />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Legacy modules, unified for Mali
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules operate as one AI-assisted platform for Malian leaders.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-yellow-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Mali enablement milestones
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four phases ensure Mali’s programme honours the original copy while embracing automation, compliance, and AI
            insight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MILESTONES.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <article
                key={milestone.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-yellow-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {milestone.label}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{milestone.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{milestone.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-200 via-white to-green-200 py-16 dark:from-yellow-900/40 dark:via-slate-950 dark:to-green-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-yellow-200/70 blur-3xl dark:bg-yellow-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-green-200/70 blur-3xl dark:bg-green-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Mali
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Mali’s MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Align gateway readiness, compliance guardrails, and AI telemetry so Mali’s programme leads with confidence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review investment options
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-yellow-400 text-yellow-900 hover:bg-yellow-100 dark:border-white/20 dark:text-white"
            >
              <Link href={gatewayHubHref}>
                Explore global gateways
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
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
