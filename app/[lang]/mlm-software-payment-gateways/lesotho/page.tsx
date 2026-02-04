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
  Mountains,
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

type Stage = {
  title: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    heading: "Legacy headline",
    description:
      "Hero retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Lesotho – LS” exactly as the WordPress export states.",
    icon: GlobeHemisphereEast
  },
  {
    heading: "Gateway list",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    heading: "Module suite",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal highlands diaspora",
    focus: "Connect Lesotho’s diaspora in Johannesburg, London, and New York with compliant, transparent payment flows.",
    bullets: [
      "Multi currency module reconciles LSL, ZAR, GBP, and USD settlements with treasury guardrails.",
      "Ticket system module stores Central Bank of Lesotho approvals, sanction diligence, and donor reporting."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail trust",
    focus: "Deliver dependable ecommerce experiences for Maseru, Leribe, and Mafeteng communities.",
    bullets: [
      "Auto responder issues Sesotho and English notifications referencing import and logistics updates.",
      "Backup manager safeguards seasonal campaigns aligned to tourism, agriculture, and education cycles."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    focus: "Integrate PSPs across Southern Africa corridors while keeping compliance evidence accessible.",
    bullets: [
      "Emails module circulates AML and FX updates with CFO commentary for decision clarity.",
      "KYC documentation vault maintains distributor verification, PSP onboarding, and renewal alerts."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge services for tourism cooperatives, education programmes, and artisan collectives.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts synchronised with analytics.",
      "Ticket workflows provide engineering pods with AI-authored reproduction notes for faster remediation."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    focus: "Blend North American acquiring with Lesotho’s governance requirements and donor accountability.",
    bullets: [
      "Multi-lingual system publishes policy digests in Sesotho and English simultaneously.",
      "Vaulted artefacts capture sanction checks, merchant approvals, and legal documentation."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenised payments enable pop-up experiences across mountainous regions and cross-border trade hubs.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails.",
      "Backup manager records offline transactions from rural activations for audit readiness."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    focus: "Monitor EU, SADC, and North American conversion health from a single control tower.",
    bullets: [
      "Currency analytics highlight success rates, interchange pressure, and FX exposure.",
      "Ticket system escalates Adyen risk signals with distributor evidence attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute digital kits, AI enablement, and remote learning to hillside communities and diaspora partners.",
    bullets: [
      "Auto responder nurtures onboarding with bilingual checklists and milestone updates.",
      "ChatsCircle pods provide proactive outreach when telemetry reveals friction."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances LSL, ZAR, USD, and GBP inflows with variance analytics designed for Lesotho’s treasury needs.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, logistics, and PSP cases with SLA dashboards, AI summaries, and audit trails.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Sesotho and English communications instantly with AI-personalised sequences.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports tourism incentives, cooperative programmes, and local promotions with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker oversight for field teams.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Preserves storefront, automation, and compliance artefacts even during connectivity disruption.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises campaign, transactional, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor identification, sanction diligence, and PSP onboarding packages.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Sesotho, English, and French experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const STAGES: Stage[] = [
  {
    title: "Interpret the WordPress brief",
    copy:
      "We retain the headline, gateway roster, and module references from the legacy page as our blueprint.",
    icon: Buildings
  },
  {
    title: "Wire the highlands platform",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences align with telemetry and compliance guardrails.",
    icon: Mountains
  },
  {
    title: "Activate the gateway suite",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass sandbox, localisation, and stakeholder testing.",
    icon: Target
  },
  {
    title: "Optimise leadership insight",
    copy:
      "Executives receive AI summaries, dashboards, and compliance artefacts proving Cloud MLM Software’s leadership in Lesotho.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Lesotho MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate the Lesotho payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/lesotho"
  },
  openGraph: {
    title: "Lesotho MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Lesotho, reimagined with multi currency intelligence and compliance governance."
  }
};

type LesothoPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function LesothoPaymentGatewayPage({ params }: LesothoPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-slate-100 py-20 dark:from-emerald-500/25 dark:via-slate-950 dark:to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(45,212,191,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Lesotho (LS)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Lesotho MLM payment gateways engineered for mountain-speed impact
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software retains the WordPress promise while delivering AI telemetry, compliance guardrails, and
                leadership-ready storytelling for Lesotho.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Engage the Maseru leadership pod
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-emerald-500/60 text-emerald-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Lesotho demo
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
                  className="rounded-3xl border border-emerald-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.heading}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway plays for Lesotho’s tourism, agriculture, and diaspora ecosystems
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the legacy page now include automation, compliance, and AI narratives tailored to
            Lesotho’s leadership.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress navigation, orchestrated as one stack
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints
              unite under a Lesotho control tower with AI telemetry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Four stages rooted in the legacy article
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            Clear movements keep Lesotho’s launch disciplined, auditable, and AI-enabled.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground dark:text-white">{stage.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article emphasised global reach. Lesotho leverages that view to coordinate with peers across
              continents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Southern Africa",
                description:
                  "Maseru coordinates with Johannesburg, Gaborone, and Maputo programmes to share compliance playbooks and automation cadences.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "London and Paris partners exchange PSD2-ready playbooks and donor reporting frameworks with Lesotho leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "New York and Toronto diaspora hubs align wallet policies and AI telemetry with Maseru HQ.",
                icon: Bank
              },
              {
                region: "Middle East",
                description:
                  "Dubai and Riyadh programmes collaborate on FX resilience and compliance guardrails.",
                icon: UsersThree
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Sydney command centres reuse Lesotho’s automation scripts for remote enablement.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Buenos Aires operations leverage Lesotho’s AI insights to scale responsibly.",
                icon: ChatsCircle
              }
            ].map(({ region, description, icon: Icon }) => (
              <article key={region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-white">{region}</h3>
                </div>
                <p className="text-sm text-white/75">{description}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Review Lesotho pricing
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/10">
              <Link href={contactHref}>
                Talk to a strategist
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
