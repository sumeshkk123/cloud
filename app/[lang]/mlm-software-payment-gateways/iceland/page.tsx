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
  IdentificationCard,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  Snowflake,
  Sparkle,
  Stack,
  TrendUp,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  stat: string;
  narrative: string;
  icon: IconType;
};

type GatewayCard = {
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type ModuleTile = {
  name: string;
  benefit: string;
  icon: IconType;
};

type Stage = {
  step: string;
  heading: string;
  copy: string;
  icon: IconType;
};

const SIGNALS: Signal[] = [
  {
    label: "AI-enabled tourism economy",
    stat: "2.3M annual visitors · 2024",
    narrative:
      "Distributor programmes in Reykjavík, Akureyri, and Ísafjörður rely on Cloud MLM Software to blend travel-driven spend with subscription loyalty.",
    icon: RocketLaunch
  },
  {
    label: "National instant payments",
    stat: "Auðkenni + digital IDs",
    narrative:
      "Iceland’s electronic ID and real-time credit transfers demand immaculate compliance capture—our ticketing and documentation modules make it effortless.",
    icon: IdentificationCard
  },
  {
    label: "Gateway continuity",
    stat: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout",
    narrative:
      "We keep the original WordPress list intact while turning it into a fully instrumented playbook for finance, operations, and field enablement.",
    icon: Stack
  }
];

const GATEWAYS: GatewayCard[] = [
  {
    title: "PayPal Arctic bridge",
    description: "Serve diaspora ambassadors across Copenhagen, Seattle, and Toronto with the trust of PayPal.",
    highlights: [
      "Multi currency module reconciles ISK, USD, CAD, and DKK flows with CFO-ready explainers.",
      "KYC documentation vault stores remittance declarations, sanction checks, and identity proofs."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "Amazon Pay retail harmony",
    description: "Combine ecommerce excellence with local fulfilment for direct selling kits and wellness bundles.",
    highlights: [
      "Ticket system module routes Iceland Post and courier escalations with timestamped SLA metrics.",
      "Auto responder issues bilingual (Icelandic/English) notifications tied to weather and logistics updates."
    ],
    icon: Megaphone
  },
  {
    title: "PayU Nordic gateway",
    description: "Connect regional card, bank, and alternative methods across Iceland and continental Europe.",
    highlights: [
      "Multi currency analytics expose approval rates, FX impact, and fee structures per payment method.",
      "Backup manager archives settlement reports, reconciliations, and dispute artefacts."
    ],
    icon: TrendUp
  },
  {
    title: "Stripe experimentation studio",
    description: "Prototype AI concierge, subscription bundles, and event-driven cashflows for Icelandic innovators.",
    highlights: [
      "E-wallet module pushes instant commissions when Stripe webhooks confirm net settlement.",
      "Emails module distributes release notes, finance summaries, and compliance reminders."
    ],
    icon: CreditCard
  },
  {
    title: "Authorize.Net enterprise lane",
    description: "Support corporates requiring North American payment governance while serving Icelandic teams.",
    highlights: [
      "Ticket system retains underwriting packages, chargeback decisions, and executive approvals.",
      "Backup manager safeguards contracts, PCI attestations, and regulator correspondence."
    ],
    icon: Bank
  },
  {
    title: "Braintree omnichannel core",
    description: "Tokenise pop-up, ecommerce, and mobile field payments for teams across the island.",
    highlights: [
      "E-wallet module synchronises Braintree customer vaults with commission plans and reimbursements.",
      "Multi-lingual system keeps Icelandic and English knowledge bases consistent for service crews."
    ],
    icon: Plugs
  },
  {
    title: "Adyen executive vantage",
    description: "Aggregate EU, US, and APAC acquiring intelligence into a single Icelandic control tower.",
    highlights: [
      "Multi currency forecasts highlight interchange trends, FX exposure, and authorisation health.",
      "KYC documentation stores enhanced due diligence dossiers and regulatory sign-offs."
    ],
    icon: Compass
  },
  {
    title: "2Checkout digital runway",
    description: "Launch virtual kits, AI enablement, and learning hubs for remote distributors.",
    highlights: [
      "E-voucher engine releases limited access passes for online events and product previews.",
      "Auto responder nurtures onboarding cohorts with time-boxed prompts and escalation options."
    ],
    icon: Sparkle
  }
];

const MODULES: ModuleTile[] = [
  {
    name: "Multi currency module",
    benefit: "Balances ISK, USD, EUR, GBP, and DKK inflows with variance alerts and AI-powered commentary.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    benefit: "Routes PSP, logistics, and compliance threads with SLA timers and audit-ready transcripts.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    benefit: "Publishes Icelandic and English communications across email, SMS, and AI helpers instantly.",
    icon: Megaphone
  },
  {
    name: "E-voucher engine",
    benefit: "Generates seasonal campaigns, referral bonuses, and incentive codes with redemption analytics.",
    icon: Stack
  },
  {
    name: "E-wallet",
    benefit: "Streams instant commissions while enforcing maker-checker finance guardrails.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    benefit: "Secures settlement files, tax submissions, and risk assessments for continuity.",
    icon: ShieldCheck
  },
  {
    name: "Emails module",
    benefit: "Centralises operational updates, compliance notices, and growth storytelling.",
    icon: EnvelopeSimple
  },
  {
    name: "KYC documentation",
    benefit: "Stores identity credentials, AML evidence, and expiry alerts in one secure vault.",
    icon: IdentificationCard
  },
  {
    name: "Multi-lingual system",
    benefit: "Keeps Icelandic and English portals, bots, and microsites synchronised for every market.",
    icon: UsersThree
  }
];

const STAGES: Stage[] = [
  {
    step: "Phase 01",
    heading: "Translate the WordPress headline",
    copy:
      "We retain the promise—Ways to accept payments from MLM Software in People’s Democratic Republic of Iceland—while giving it modern clarity.",
    icon: Snowflake
  },
  {
    step: "Phase 02",
    heading: "Align compliance evidence",
    copy:
      "Ticketing, backup, and documentation modules capture Icelandic electronic ID requirements, tax filings, and AML screenings automatically.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    heading: "Activate the gateway stack",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout move through sandbox, certification, and enablement workshops.",
    icon: Lightning
  },
  {
    step: "Phase 04",
    heading: "Deliver AI-first oversight",
    copy:
      "Dashboards, alerts, and AI summaries give Icelandic executives and field leaders immediate visibility into gateway health and programme success.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Iceland MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Iceland with Cloud MLM Software’s AI-ready compliance and enablement.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/iceland"
  },
  openGraph: {
    title: "Iceland MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Iceland—elevated with Arctic-ready automation, compliance, and AI insight."
  }
};

type IcelandPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function IcelandPaymentGatewayPage({ params }: IcelandPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-900/40" />
        </div>
        <div className="container relative space-y-12">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Iceland (IS)
              </span>
              <div className="space-y-6 text-foreground dark:text-white">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Ways to accept payments from MLM Software in People’s Democratic Republic of Iceland – IS
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                  Cloud MLM Software takes the WordPress narrative and equips Iceland with automated compliance, telemetry, and
                  field enablement so your programme thrives in both Reykjavik boardrooms and remote regional hubs.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Speak with an Iceland strategist
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 border-sky-300 text-sky-900 hover:bg-sky-100 dark:border-white/20 dark:text-white"
                >
                  <Link href={demoHref}>
                    Preview the Iceland demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.label}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-200/60 text-sky-900 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                          {signal.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground dark:text-white">{signal.stat}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{signal.narrative}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway field guide for Iceland
          </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight gateways highlighted in the WordPress export now carry playbooks for automation, compliance, and
            distributor delight across Iceland’s omnichannel experience.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-200/60 text-sky-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 dark:bg-white" aria-hidden />
                      <span>{highlight}</span>
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
              Modules from the navigation, reassembled for Iceland
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules now function as one Arctic-ready platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-200/60 text-sky-900 dark:bg-white/10 dark:text-white">
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
            Iceland enablement timeline
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Each phase honours the legacy copy while delivering AI-first oversight for Icelandic leaders, finance teams, and
            distributors.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.step}
                className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-200/60 text-sky-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {stage.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{stage.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-sky-200 via-white to-blue-200 py-16 dark:from-slate-900 dark:via-slate-950 dark:to-blue-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-sky-200/70 blur-3xl dark:bg-sky-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-blue-200/70 blur-3xl dark:bg-blue-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Iceland
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Iceland’s MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Together we can align gateway readiness, compliance guardrails, and AI telemetry so Iceland’s programme stands
              out in the North Atlantic region.
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
              className="gap-2 border-sky-300 text-sky-900 hover:bg-sky-100 dark:border-white/20 dark:text-white"
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
