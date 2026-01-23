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
  title: string;
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
    title: "Legacy headline protected",
    description:
      "Hero keeps “Ways to accept payments from MLM Software in People’s Democratic Republic of Liberia – LR” verbatim from the WordPress export.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster preserved",
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
    name: "PayPal diaspora bridge",
    focus: "Coordinate Liberian diaspora in Minneapolis, Monrovia, and Accra with transparent automation.",
    bullets: [
      "Multi currency module reconciles LRD, USD, and GHS settlements with treasury guardrails.",
      "Ticket system module records Central Bank compliance evidence alongside donor documentation."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce trust",
    focus: "Deliver reliable ecommerce for Monrovia, Ganta, and Buchanan communities with bilingual outreach.",
    bullets: [
      "Auto responder issues English notifications referencing customs and last-mile delivery status.",
      "Backup manager protects seasonal campaigns aligned to school seasons, agriculture, and holidays."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    focus: "Integrate PSPs across ECOWAS corridors without losing compliance clarity.",
    bullets: [
      "Emails module circulates AML, FX, and revenue authority updates with CFO commentary.",
      "KYC documentation vault maintains distributor verification, PSP onboarding, and sanction diligence."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge services for education, agritech, and wellness programmes.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento storefronts with analytics.",
      "Ticket workflows provide engineering pods with AI-generated reproduction notes."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    focus: "Blend North American acquiring with Liberian governance expectations and donor accountability.",
    bullets: [
      "Multi-lingual system sends policy digests in English and French for regional stakeholders.",
      "Vaulted artefacts capture merchant approvals, sanction checks, and leadership sign-offs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenised payments support hybrid activations across ministries, universities, and small businesses.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker approvals.",
      "Backup manager records offline transactions from rural outreach and roadshows."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    focus: "Monitor US, EU, and ECOWAS conversion health from one command centre with risk insights.",
    bullets: [
      "Currency analytics highlight interchange, decline ratios, and FX exposure for CFO review.",
      "Ticket system ties Adyen risk alerts to distributor evidence and compliance notes."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute digital kits, AI enablement, and remote learning across Liberia and global partners.",
    bullets: [
      "Auto responder nurtures onboarding with milestone reminders and compliance checklists.",
      "ChatsCircle pods engage proactively when telemetry highlights friction or latency."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency system",
    detail: "Balances LRD, USD, and GHS inflows with variance analytics tuned for Liberian treasury teams.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, logistics, and PSP cases with SLA dashboards, AI summaries, and audit trails.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    detail: "Delivers English communications instantly with AI-personalised updates for partners and customers.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    detail: "Supports community outreach, incentive campaigns, and donor programmes with telemetry.",
    icon: Sparkle
  },
  {
    title: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker oversight and liquidity controls.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    detail: "Safeguards storefronts, automation, and compliance artefacts during infrastructure interruptions.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises campaign, transactional, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding packages with reminders.",
    icon: StackSimple
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps English and French experiences aligned across portals, documents, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const SEQUENCE: SequenceStep[] = [
  {
    stage: "Step 01",
    copy:
      "Interpret the WordPress brief—headline, gateway list, and module references are the blueprint.",
    icon: Buildings
  },
  {
    stage: "Step 02",
    copy:
      "Instrument the operating system—multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences align with telemetry.",
    icon: Compass
  },
  {
    stage: "Step 03",
    copy:
      "Activate the gateway roster—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "Step 04",
    copy:
      "Optimise leadership insight—dashboards, AI summaries, and compliance artefacts support donors, regulators, and executives.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Liberia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Upgrade the Liberia payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/liberia"
  },
  openGraph: {
    title: "Liberia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Liberia, elevated with multi currency intelligence and compliance governance."
  }
};

type LiberiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function LiberiaPaymentGatewayPage({ params }: LiberiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-white to-sky-100 py-20 dark:from-amber-500/25 dark:via-slate-950 dark:to-sky-500/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(251,191,36,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(34,197,94,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Liberia (LR)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Liberia MLM payment gateways orchestrated for coastal resilience
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software honours the WordPress legacy while delivering AI telemetry, compliance guardrails, and
                leadership-ready narratives for Liberia’s economic momentum.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Coordinate with Monrovia leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-amber-500/60 text-amber-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Liberia demo
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
                  className="rounded-3xl border border-amber-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.title}</h2>
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
            Gateway plays for Liberia’s diaspora, education, and tourism programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress listing gains automation, compliance, and AI context for Liberian
            leadership.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 dark:bg-white" aria-hidden />
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
              Modules from the WordPress navigation, orchestrated together
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences
              operate as one telemetry-rich stack for Liberia.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
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
            Four-step sequence grounded in the WordPress heritage
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            Clear movements ensure Liberia’s gateway launch is disciplined, auditable, and AI-enabled.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SEQUENCE.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {step.stage}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-amber-900 to-sky-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article celebrated global reach. Liberia keeps that perspective to partner with leaders across
              continents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "West Africa",
                description:
                  "Monrovia collaborates with Accra, Lagos, and Abidjan programmes on compliance guardrails and diaspora enablement.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "London and Brussels partners exchange PSD2-ready playbooks and donor reporting frameworks with Liberian leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "Minneapolis and Washington DC diaspora hubs align wallet policies and AI telemetry with Monrovia HQ.",
                icon: Bank
              },
              {
                region: "Middle East",
                description:
                  "Dubai and Doha programmes collaborate on FX resilience, supply chain oversight, and compliance routines.",
                icon: UsersThree
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Sydney command centres reuse Liberia’s automation scripts for resilient operations.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Bogotá operations leverage Liberian AI insights to scale responsibly.",
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
            <Button asChild size="lg" className="gap-2 bg-white text-amber-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Review Liberia pricing
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
