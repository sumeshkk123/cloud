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
  label: string;
  detail: string;
  icon: IconType;
};

type TrackItem = {
  stage: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy statement",
    description:
      "Hero retains the WordPress copy: “Ways to accept payments from MLM Software in People’s Democratic Republic of Luxembourg – LU.”",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    title: "Module ecosystem",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal private banking runway",
    focus: "Bridge Luxembourg’s global investor base with automated compliance and donor-ready narratives.",
    bullets: [
      "Multi currency module reconciles EUR, CHF, GBP, and USD flows with treasury dashboards tailored to regulated funds.",
      "Ticket system module archives sanction diligence and CSSF correspondences for audit-ready evidence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay premium retail",
    focus: "Deliver luxury-grade ecommerce experiences for Luxembourg City, Esch, and Grevenmacher.",
    bullets: [
      "Auto responder issues multilingual confirmations and VAT documentation instantly.",
      "Backup manager protects seasonal campaigns for philanthropy galas, fintech expos, and cultural programmes."
    ],
    icon: Sparkle
  },
  {
    name: "PayU cross-border mesh",
    focus: "Integrate EU, EEA, and global PSPs while keeping risk, treasury, and compliance stakeholders aligned.",
    bullets: [
      "Emails module distributes PSD2, AML, and BEPS updates with CFO commentary and action points.",
      "KYC documentation vault maps distributor verification, PSP onboarding artefacts, and renewal cycles."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge experiences for funds, family offices, and innovation hubs.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts synchronised with analytics.",
      "Ticket workflows issue AI-generated reproduction reports so engineering resolves incidents faster."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net global lane",
    focus: "Blend North American acquiring with Luxembourg’s governance frameworks and board approvals.",
    bullets: [
      "Multi-lingual system publishes compliance digests across French, German, and English stakeholders.",
      "Vaulted artefacts capture sanction checks, board minutes, and legal opinions for each merchant profile."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenised payments empower private briefings, hybrid conferences, and boutique experiences.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails and smart payout policies.",
      "Backup manager records offline transactions for limited-access events and cross-border showcases."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    focus: "Monitor EU, GCC, and American conversion health with risk telemetry and performance insights.",
    bullets: [
      "Currency analytics highlight success rates, interchange pressure, and FX exposure for CFO review.",
      "Ticket system escalates Adyen risk signals anchored with distributor artefacts and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute digital academy content, AI enablement, and philanthropic briefings to global partners.",
    bullets: [
      "Auto responder nurtures onboarding journeys with milestone checklists and multilingual playbooks.",
      "ChatsCircle pods drive proactive outreach when telemetry signals friction or adoption plateaus."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances EUR, USD, GBP, CHF, and AED with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, logistics, and philanthropic requests with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers French, German, and English communications instantly with AI-personalised sequences.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports loyalty programmes, philanthropic campaigns, and partner incentives with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions with maker-checker approvals and clear payout governance.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Captures immutable storefront, automation, and compliance artefacts to satisfy regulators.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding artefacts with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps French, German, and English experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TRACK: TrackItem[] = [
  {
    stage: "01 · Interpret the brief",
    copy:
      "Retain the WordPress headline, gateway list, and module references as the authoritative blueprint for Luxembourg.",
    icon: Buildings
  },
  {
    stage: "02 · Orchestrate the stack",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences operate under one telemetry layer.",
    icon: Compass
  },
  {
    stage: "03 · Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "04 · Optimise executive insight",
    copy:
      "Dashboards, AI summaries, and compliance artefacts keep Luxembourg’s leadership aligned with risk, treasury, and donor stakeholders.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Luxembourg MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine the Luxembourg payment gateway checklist with AI telemetry, compliance guardrails, and automation across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/luxembourg"
  },
  openGraph: {
    title: "Luxembourg MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Luxembourg elevated with multi currency intelligence and executive-ready insights."
  }
};

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }
  return lang as Locale;
}

type LuxembourgPageProps = {
  params: { lang: SupportedLocale };
};

export default function LuxembourgPaymentGatewayPage({ params }: LuxembourgPageProps) {
  const locale = resolveLocale(params.lang);
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
                Ways to accept payments · Luxembourg (LU)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Luxembourg&apos;s payment gateways orchestrated for financial hub excellence
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground">
                  We keep the WordPress heritage—gateway list, module roster, and the &quot;Ways to accept payments&quot; headline—while layering automation, compliance guardrails, and AI telemetry for funds, family offices, and innovation programmes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-blue-600 text-white hover:bg-blue-500">
                  <Link href={contactHref}>
                    Connect with Luxembourg leadership
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-blue-500/60 text-blue-700 hover:bg-blue-100">
                  <Link href={demoHref}>
                    Preview the Luxembourg demo
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
                    key={highlight.title}
                    className="rounded-3xl border border-blue-500/20 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">{highlight.title}</h2>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
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
            Gateway plays for Luxembourg&apos;s funds, family offices, and innovation hubs
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
                    <p className="text-sm text-muted-foreground">{gateway.focus}</p>
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
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints provide a single governance layer for Luxembourg leadership.
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
            Authentic copy, disciplined execution—Luxembourg&apos;s launch follows a clear rhythm with AI insight.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {TRACK.map((item, idx) => {
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
