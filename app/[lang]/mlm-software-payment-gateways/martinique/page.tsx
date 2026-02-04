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
  ClipboardText,
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
  heading: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  name: string;
  benefit: string;
  icon: IconType;
};

type Journey = {
  step: string;
  title: string;
  copy: string;
  icon: IconType;
};

const INSIGHTS: Insight[] = [
  {
    heading: "French Caribbean governance",
    description:
      "Martinique operates under French regulation and EU directives. Ticketing and documentation modules keep ACPR, GDPR, and tax artefacts travel-ready.",
    icon: ShieldCheck
  },
  {
    heading: "Gateway roster continuity",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the pillars from the WordPress export.",
    icon: Stack
  },
  {
    heading: "Tourism and diaspora blend",
    description:
      "Distributors in Fort-de-France, Le Lamentin, and Sainte-Anne rely on tourism, remote work, and diaspora investment. Multi currency intelligence keeps flows transparent.",
    icon: Compass
  }
];

const GATEWAYS: Gateway[] = [
  {
    title: "PayPal diaspora bridge",
    summary: "Unite Martinique HQ with communities in Paris, Montreal, and Miami.",
    bullets: [
      "Multi currency module reconciles EUR, USD, and CAD inflows with CFO-ready variance dashboards.",
      "KYC documentation vault stores sanction screening, proof-of-address, and AML confirmations."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "Amazon Pay commerce rhythm",
    summary: "Combine marketplace trust with coastal fulfilment experiences.",
    bullets: [
      "Ticket system module aligns La Poste, DHL, and ferry logistics with SLA evidence.",
      "Auto responder publishes French and Creole notifications tuned to delivery windows."
    ],
    icon: Megaphone
  },
  {
    title: "PayU regional lattice",
    summary: "Connect alternative payments, cards, and bank transfers across the Caribbean and EU corridors.",
    bullets: [
      "Multi currency analytics highlight approval rates, fee impact, and FX exposure.",
      "Backup manager archives settlement files, dispute narratives, and PSP correspondence."
    ],
    icon: TrendUp
  },
  {
    title: "Stripe experimentation studio",
    summary: "Prototype AI concierge, subscription bundles, and partner APIs for Martinique innovators.",
    bullets: [
      "E-wallet module streams instant commissions when Stripe webhooks confirm settlement.",
      "Emails module circulates release notes, finance digests, and compliance alerts."
    ],
    icon: CreditCard
  },
  {
    title: "Authorize.Net governance corridor",
    summary: "Serve enterprises that expect North American gateway oversight alongside French compliance.",
    bullets: [
      "Ticket system captures underwriting packages, chargeback decisions, and CFO approvals.",
      "Backup manager secures contracts, PCI attestations, and regulator communications."
    ],
    icon: Bank
  },
  {
    title: "Braintree omnichannel core",
    summary: "Tokenise pop-up events, ecommerce, and mobile field operations.",
    bullets: [
      "E-wallet module links Braintree customer vaults to commission profiles and reimbursements.",
      "Multi-lingual system keeps French and Creole knowledge bases aligned."
    ],
    icon: Plugs
  },
  {
    title: "Adyen executive vantage",
    summary: "Aggregate EU, US, and APAC acquiring insight into one command centre.",
    bullets: [
      "Multi currency forecasts reveal interchange trends, FX risk, and approval health.",
      "KYC documentation stores enhanced due diligence dossiers and regulator feedback."
    ],
    icon: Compass
  },
  {
    title: "2Checkout digital runway",
    summary: "Deploy virtual kits, AI enablement, and learning portals to remote teams.",
    bullets: [
      "E-voucher engine launches referral incentives, festival campaigns, and webinar passes.",
      "Auto responder nurtures onboarding cohorts with milestone prompts and escalation playbooks."
    ],
    icon: Sparkle
  }
];

const MODULES: Module[] = [
  {
    name: "Multi currency module",
    benefit: "Balances EUR, USD, and CAD inflows with tolerance alerts and AI commentary for finance leaders.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    benefit: "Routes PSP, logistics, and compliance escalations with SLA dashboards and audit trails.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    benefit: "Delivers French and Creole communications across email, SMS, and AI chat instantly.",
    icon: Megaphone
  },
  {
    name: "E-voucher engine",
    benefit: "Runs launch offers, referral programmes, and incentive codes with redemption telemetry.",
    icon: Stack
  },
  {
    name: "E-wallet",
    benefit: "Streams instant commissions while preserving maker-checker governance.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    benefit: "Secures settlement files, tax filings, and audit evidence for continuity.",
    icon: ShieldCheck
  },
  {
    name: "Emails module",
    benefit: "Centralises compliance alerts, campaign storytelling, and AI-generated digests.",
    icon: EnvelopeSimple
  },
  {
    name: "KYC documentation",
    benefit: "Stores identity proofs, AML evidence, and expiry reminders for distributors and partners.",
    icon: ClipboardText
  },
  {
    name: "Multi-lingual system",
    benefit: "Keeps French and Creole portals, bots, and microsites aligned.",
    icon: UsersThree
  }
];

const JOURNEY: Journey[] = [
  {
    step: "Phase 01",
    title: "Reaffirm the WordPress copy",
    copy:
      "We maintain the headline—Ways to accept payments from MLM Software in People’s Democratic Republic of Martinique—while reframing it for 2025 ambitions.",
    icon: Stack
  },
  {
    step: "Phase 02",
    title: "Synchronise compliance artefacts",
    copy:
      "Ticketing, backup, and documentation modules coordinate ACPR filings, GDPR evidence, and tax submissions inside one workspace.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    title: "Activate the gateway roadmap",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout progress through sandbox, certification, and enablement cadences.",
    icon: Lightning
  },
  {
    step: "Phase 04",
    title: "Deliver AI-first oversight",
    copy:
      "Dashboards, alerts, and AI summaries provide instant visibility for finance, compliance, and distributor operations.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Martinique MLM Payment Gateways | Cloud MLM Software",
  description:
    "Coordinate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Martinique with Cloud MLM Software’s AI-enabled compliance and enablement.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/martinique"
  },
  openGraph: {
    title: "Martinique MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Martinique—modernised with Caribbean-ready automation, compliance, and AI telemetry."
  }
};

type MartiniquePageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MartiniquePaymentGatewayPage({ params }: MartiniquePageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-100 py-20 dark:from-emerald-900/30 dark:via-slate-950 dark:to-sky-900/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Martinique (MQ)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Martinique – MQ
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                We elevate the WordPress export into a Caribbean-ready blueprint—bringing gateway excellence, EU compliance,
                and AI-first telemetry to Martinique’s distributors and leadership teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Martinique strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-400 text-emerald-900 hover:bg-emerald-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Martinique demo
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
                  key={insight.heading}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground dark:text-white">{insight.heading}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{insight.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway strategies for Martinique
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress export now carries modern guidance for automation, compliance, and field
            enablement across Martinique’s omnichannel experience.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400 dark:bg-white" aria-hidden />
                      <span>{bullet}</span>
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
              Modules from the legacy navigation, harmonised for Martinique
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules now function as one AI-enabled platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.benefit}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Martinique enablement journey
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four phases ensure the original promise stays intact while delivering automation, compliance, and AI insight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.step}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {stage.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{stage.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-200 via-white to-sky-200 py-16 dark:from-emerald-900/40 dark:via-slate-950 dark:to-sky-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-sky-200/70 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Martinique
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Martinique’s MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Align gateway readiness, compliance guardrails, and AI telemetry so Martinique’s programme leads the Caribbean in
              trust and momentum.
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
              className="gap-2 border-emerald-400 text-emerald-900 hover:bg-emerald-100 dark:border-white/20 dark:text-white"
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
