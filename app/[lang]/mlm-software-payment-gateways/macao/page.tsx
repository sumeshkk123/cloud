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
  Buildings,
  ChartLineUp,
  ChatsCircle,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  Target,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  heading: string;
  text: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  label: string;
  detail: string;
  icon: IconType;
};

type SequenceStep = {
  stage: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    heading: "Legacy statement",
    text:
      "We preserve the WordPress copy: “Ways to accept payments from MLM Software in People’s Democratic Republic of Macao – MO.”",
    icon: GlobeHemisphereEast
  },
  {
    heading: "Gateway roster",
    text: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    heading: "Module ecosystem",
    text:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and the multi-lingual system operate together.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal tourism concierge",
    description:
      "Connect Macao’s global visitors and diaspora investors with regulated, automated payment flows.",
    bullets: [
      "Multi currency module reconciles MOP, HKD, USD, and CNY with variance alerts tailored to treasury and VIP programmes.",
      "Ticket system module stores sanction diligence and DICJ compliance artefacts for audit-ready trust."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay luxury retail",
    description:
      "Deliver frictionless ecommerce experiences for integrated resorts, retail, and hospitality partners across the peninsula and Taipa.",
    bullets: [
      "Auto responder issues Chinese, Portuguese, and English confirmations along with customs-ready documentation.",
      "Backup manager safeguards seasonal campaigns linked to tourism festivals and entertainment launches."
    ],
    icon: Sparkle
  },
  {
    name: "PayU cross-border mesh",
    description:
      "Integrate PSPs spanning Greater Bay Area corridors without compromising compliance oversight.",
    bullets: [
      "Emails module circulates AML, gaming, and financial authority updates with CFO commentary.",
      "KYC documentation vault maps distributor verification, PSP onboarding files, and renewal reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    description:
      "Prototype AI concierge services for entertainment, education, and wellness programmes across resorts and digital channels.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts synchronised with analytics dashboards.",
      "Ticket workflows provide engineering pods with AI-authored reproduction notes and severity insights."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net global lane",
    description:
      "Blend North American acquiring with Macao’s governance frameworks and operator board approvals.",
    bullets: [
      "Multi-lingual system publishes policy digests across Chinese, Portuguese, and English stakeholders.",
      "Vaulted artefacts capture sanction checks, merchant approvals, and legal opinions for each profile."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    description:
      "Tokenised payments empower VIP pop-ups, hybrid shows, and loyalty experiences across resorts.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails and payout policies.",
      "Backup manager records offline transactions from experiential activations and limited-access venues."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    description:
      "Monitor EU, APAC, and North American conversion health with risk telemetry and executive dashboards.",
    bullets: [
      "Currency analytics highlight success rates, interchange exposure, and FX volatility for CFO review.",
      "Ticket system escalates Adyen risk alerts enriched with distributor evidence and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    description:
      "Distribute digital kits, AI enablement, and remote trainings to partner networks worldwide.",
    bullets: [
      "Auto responder nurtures onboarding journeys with milestone checklists and multilingual playbooks.",
      "ChatsCircle pods trigger proactive outreach when telemetry shows friction or stalled adoption."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances MOP, HKD, USD, and CNY with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, hospitality, and donor cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Chinese, Portuguese, and English communications instantly with AI-personalised sequencing.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports loyalty programmes, event campaigns, and tourism incentives with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker approvals and spend controls.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Captures immutable storefronts, automation flows, and compliance artefacts for regulatory reviews.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding packs with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Chinese, Portuguese, and English experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const SEQUENCE: SequenceStep[] = [
  {
    stage: "01 · Interpret the brief",
    copy:
      "Retain the WordPress headline, gateway list, and module references as the blueprint for Macao’s launch.",
    icon: Buildings
  },
  {
    stage: "02 · Orchestrate the modules",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences gain telemetry and compliance guardrails.",
    icon: Compass
  },
  {
    stage: "03 · Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "04 · Optimise insight cadence",
    copy:
      "Dashboards, AI summaries, and compliance artefacts demonstrate Cloud MLM Software’s stewardship to operators, investors, and regulators.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Macao MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise the Macao payment gateway checklist with AI-enabled telemetry, compliance guardrails, and orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/macao"
  },
  openGraph: {
    title: "Macao MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Macao elevated with multi currency intelligence, ticket governance, and hospitality-ready automation."
  }
};

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }
  return lang as Locale;
}

type MacaoPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MacaoPaymentGatewayPage({ params }: MacaoPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-emerald-100 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(14,165,233,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="container space-y-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Ways to accept payments · Macao (MO)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Macao&apos;s payment gateways orchestrated for tourism and hospitality excellence
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground">
                  We preserve the WordPress heritage—gateway list, module roster, and the &quot;Ways to accept payments&quot; headline—while layering automation, compliance guardrails, and AI telemetry for tourism, hospitality, and entertainment programmes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-blue-600 text-white hover:bg-blue-500">
                  <Link href={contactHref}>
                    Connect with Macao leadership
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-blue-500/60 text-blue-700 hover:bg-blue-100">
                  <Link href={demoHref}>
                    Preview the Macao demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.heading}
                    className="rounded-3xl border border-blue-500/20 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">{highlight.heading}</h2>
                        <p className="text-sm text-muted-foreground">{highlight.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway plays for Macao&apos;s tourism, hospitality, and entertainment programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Each connector receives automation, compliance, and AI telemetry so leadership can align commerce, philanthropy, and digital services.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Modules from the legacy navigation, orchestrated together
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints provide a single governance layer for Macao leadership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{module.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four-stage cadence grounded in the WordPress brief
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Authentic copy, disciplined execution—Macao&apos;s launch follows a clear rhythm with AI insight.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {SEQUENCE.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={idx}
                className="flex gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground">{item.stage}</h3>
                  <p className="text-sm text-muted-foreground">{item.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
