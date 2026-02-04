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
  Thermometer,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPoint = {
  label: string;
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

type Milestone = {
  stage: string;
  title: string;
  copy: string;
  icon: IconType;
};

const HERO_POINTS: HeroPoint[] = [
  {
    label: "Legacy headline preserved",
    description:
      "The page retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Jordan – JO” exactly as published in the WordPress export.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Gateway lineup",
    description:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout—verbatim from the source article.",
    icon: CreditCard
  },
  {
    label: "Module arsenal",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    focus: "Enable Jordanian diaspora in Dubai, Riyadh, and Chicago to fund wellness and education programmes.",
    bullets: [
      "Multi currency module reconciles JOD, AED, SAR, and USD prior to treasury approval.",
      "Ticket system module packages Central Bank of Jordan compliance evidence for leadership."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail trust",
    focus: "Deliver reliable ecommerce for Amman, Irbid, and Aqaba consumers with automated communications.",
    bullets: [
      "Auto responder issues Arabic and English confirmations with customs-ready documentation.",
      "Backup manager protects seasonal campaigns tied to Ramadan and tourism peaks."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    focus: "Integrate MENA PSPs supporting cross-border wallets and instalment plans.",
    bullets: [
      "Emails module circulates AML, FX, and PSD2 updates with contextual analysis for executives.",
      "KYC documentation vault tracks distributor verification artefacts with expiry alerts."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge services for logistics, education, and micro-franchise programmes.",
    bullets: [
      "Webhook telemetry synchronises Shopify, WooCommerce, and Magento storefronts with analytics.",
      "Ticket workflows deliver reproducible logs and AI-generated insights to engineering pods."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    focus: "Blend North American acquiring with Jordanian governance and sanction diligence.",
    bullets: [
      "Multi-lingual system broadcasts governance digests in Arabic and English simultaneously.",
      "Vaulted artefacts store merchant approvals, sanction checks, and board sign-offs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenised payments empower pop-up activations at Dead Sea resorts and Aqaba trade hubs.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker approvals.",
      "Backup manager records offline sales and device transactions for audit readiness."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    focus: "Monitor EU, GCC, and US success rates from a single control tower with risk indicators.",
    bullets: [
      "Currency analytics highlight interchange, decline patterns, and FX exposure for CFO review.",
      "Ticket system escalates Adyen alerts with distributor evidence and compliance notes attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute digital kits, AI enablement, and hybrid learning for universities and NGOs.",
    bullets: [
      "Auto responder nurtures partner onboarding with bilingual playbooks and milestones.",
      "ChatsCircle pods reach out proactively based on telemetry-driven health scores."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency system",
    detail: "Balances JOD, AED, SAR, USD, and EUR inflows with automated variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, PSP, and fulfilment cases with SLA dashboards, AI summaries, and audit trails.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    detail: "Delivers Arabic and English messaging instantly, from order confirmations to policy nudges.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    detail: "Funds refugee outreach, education cohorts, and field incentives with telemetry-rich reporting.",
    icon: Sparkle
  },
  {
    title: "E-wallet manager",
    detail: "Streams instant commissions and expense reimbursements with maker-checker controls.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    detail: "Captures immutable snapshots of storefronts, automation flows, and compliance artefacts.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, campaign, and compliance communications with deliverability insights.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    detail: "Stores distributor IDs, sanction checks, and PSP onboarding packages with renewal reminders.",
    icon: StackSimple
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps Arabic, English, and French experiences synchronised across portals and automation.",
    icon: GlobeHemisphereEast
  }
];

const MILESTONES: Milestone[] = [
  {
    stage: "01",
    title: "Interpret the legacy brief",
    copy:
      "We retain every promise from the WordPress article—the “Ways to accept payments” headline, gateway list, and supporting modules—to anchor the programme.",
    icon: Buildings
  },
  {
    stage: "02",
    title: "Instrument the operating system",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multilingual experiences are orchestrated with telemetry and compliance guardrails.",
    icon: Thermometer
  },
  {
    stage: "03",
    title: "Activate each connector",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout run through sandbox, localisation, and stakeholder testing.",
    icon: Target
  },
  {
    stage: "04",
    title: "Optimise leadership insight",
    copy:
      "Executives receive AI summaries, dashboards, and compliance artefacts proving Cloud MLM Software leads Jordan’s payment innovation narrative.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Jordan MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform the Jordan payment gateway checklist into an AI-ready launch with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated for compliance and growth.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/jordan"
  },
  openGraph: {
    title: "Jordan MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Jordan, reimagined with multi currency intelligence, ticket governance, and AI telemetry."
  }
};

type JordanPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function JordanPaymentGatewayPage({ params }: JordanPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-amber-200 via-stone-100 to-blue-100 py-20 dark:from-amber-500/25 dark:via-slate-950 dark:to-blue-500/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(248,113,113,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Jordan (JO)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Jordan MLM payment gateways orchestrated for desert-speed resilience
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps the WordPress promise while modernising it for AI discovery, regulatory trust,
                and corporate execution across Jordan’s public and private sectors.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Meet the Amman leadership pod
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-amber-600/40 text-amber-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Jordan demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <article
                  key={point.label}
                  className="rounded-3xl border border-amber-600/20 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{point.label}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{point.description}</p>
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
            Gateway narratives tuned to Jordan’s fintech, humanitarian, and tourism corridors
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Every connector cited in the WordPress article now carries compliance context, AI telemetry, and leadership
            guidance fit for today’s Jordanian market.
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
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the legacy navigation, orchestrated as one regulated stack
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, auto responder, e-voucher, e-wallet, backup, emails, KYC, and multi-lingual
              experiences are now synchronised under a single governance model.
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
            Programme milestones rooted in WordPress heritage
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            A four-stage journey ensures the legacy copy stays intact while the delivery meets AI-era expectations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MILESTONES.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <article
                key={milestone.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    Stage {milestone.stage}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{milestone.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-amber-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article highlighted global reach—we maintain that perspective so Jordanian leadership can
              benchmark and expand responsibly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Middle East",
                description:
                  "Jordan compares performance with Riyadh, Dubai, and Doha programmes through shared telemetry.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "Frankfurt, London, and Paris share PSD2-ready playbooks and AML routines with Jordanian teams.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "Chicago and Toronto diaspora cohorts align wallet strategies with Amman leadership oversight.",
                icon: Bank
              },
              {
                region: "Africa",
                description:
                  "Cairo and Nairobi launches exchange resilience tactics for regulatory shifts and FX controls.",
                icon: UsersThree
              },
              {
                region: "Oceania",
                description:
                  "Sydney and Melbourne partners reuse Jordan’s hybrid event blueprints and AI enablement rituals.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Buenos Aires operations tap Jordanian AI insights to scale sustainably.",
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
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Review Jordan pricing
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
