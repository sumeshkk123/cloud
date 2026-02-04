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

type HeroBlock = {
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

type Playbook = {
  stage: string;
  headline: string;
  copy: string;
  icon: IconType;
};

const HERO_BLOCKS: HeroBlock[] = [
  {
    title: "Legacy copy protected",
    description:
      "Hero headline retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Kenya – KE” word for word.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    description:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout—exactly as listed in the WordPress export.",
    icon: CreditCard
  },
  {
    title: "Module stack",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    focus: "Connect Kenyan diaspora in Nairobi, London, and Minneapolis with mission-driven programmes.",
    bullets: [
      "Multi currency module reconciles KES, USD, GBP, and EUR settlements before treasury sign-off.",
      "Ticket system module captures Central Bank of Kenya compliance evidence for leadership."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail trust",
    focus: "Deliver frictionless ecommerce across Nairobi, Mombasa, and Kisumu with responsive communication.",
    bullets: [
      "Auto responder issues bilingual confirmations referencing county-level logistics updates.",
      "Backup manager safeguards seasonal campaigns aligned to education and holiday cycles."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    focus: "Integrate EA and global PSPs supporting mobile money, cards, and alternative tenders.",
    bullets: [
      "Emails module circulates CBK, AML, and tax policy updates with CFO-friendly commentary.",
      "KYC documentation vault tracks distributor verification, mobile money approvals, and expiry alerts."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge and gig-economy bundles for Nairobi’s innovation ecosystem.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento storefronts with analytics.",
      "Ticket workflows escalate engineering issues with AI-generated reproduction steps."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    focus: "Blend North American acquiring expectations with Kenyan governance and sanction diligence.",
    bullets: [
      "Multi-lingual system publishes policy digests in English and Swahili simultaneously.",
      "Vaulted artefacts capture merchant approvals, sanction checks, and board sign-offs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenised payments empower field tours, community events, and retail activations.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails.",
      "Backup manager records offline POS transactions for audit readiness."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    focus: "Monitor EU, US, and APAC conversion health from a single control tower.",
    bullets: [
      "Currency analytics expose success rates, interchange costs, and FX exposure for CFO decisions.",
      "Ticket system attaches Adyen risk signals to distributor evidence automatically."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute digital kits, AI enablement, and learning portals to counties and diaspora partners.",
    bullets: [
      "Auto responder nurtures partner onboarding with bilingual milestones and compliance tasks.",
      "ChatsCircle pods offer proactive outreach triggered by payment telemetry."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances KES, USD, GBP, and EUR inflows with automated variance alerts and CFO dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, logistics, and field requests with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers English and Swahili communications instantly across web, SMS, and email surfaces.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports regional promotions, county activations, and incentive campaigns with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams real-time commissions and reimbursements with maker-checker oversight.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Preserves storefronts, automation flows, and compliance artefacts for continuity.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises campaign, transactional, and compliance messaging with deliverability insights.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Manages distributor IDs, mobile money approvals, and PSP onboarding packages.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps English, Swahili, and French experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const PLAYBOOK: Playbook[] = [
  {
    stage: "Stage 01",
    headline: "Translate the legacy brief",
    copy:
      "We retain the WordPress headline, gateway list, and module references as the programme foundation.",
    icon: Buildings
  },
  {
    stage: "Stage 02",
    headline: "Wire the module ecosystem",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multilingual touchpoints operate as a single telemetry-rich stack.",
    icon: UsersThree
  },
  {
    stage: "Stage 03",
    headline: "Activate the gateway roster",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout move through sandbox, compliance, and stakeholder testing.",
    icon: Target
  },
  {
    stage: "Stage 04",
    headline: "Optimise decision velocity",
    copy:
      "Executives receive dashboards, AI summaries, and compliance artefacts that position Cloud MLM Software as the Kenyan leader.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Kenya MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate the Kenya payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/kenya"
  },
  openGraph: {
    title: "Kenya MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Kenya, modernised with multi currency intelligence and compliance governance."
  }
};

type KenyaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function KenyaPaymentGatewayPage({ params }: KenyaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-yellow-100 py-20 dark:from-emerald-500/25 dark:via-slate-950 dark:to-yellow-500/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(253,224,71,0.2),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Kenya (KE)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Kenya MLM payment gateways orchestrated for digital-first growth
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software honours the WordPress heritage while elevating Kenya’s programme with AI telemetry,
                compliance guardrails, and field-ready execution.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Nairobi leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-emerald-500/60 text-emerald-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Kenya demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <article
                  key={block.title}
                  className="rounded-3xl border border-emerald-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{block.title}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{block.description}</p>
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
            Gateway plays for Kenya’s mobile-first, diaspora, and tourism movements
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the WordPress page now carry modern guidance for automation, compliance, and AI
            visibility.
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
              Modules from the legacy navigation, orchestrated as one Kenyan platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual systems
              provide a unified operating layer with AI telemetry.
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
            Programme playbook anchored in legacy copy
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            Four movements keep Kenya’s launch disciplined and transparent for leadership.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLAYBOOK.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {item.stage}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{item.headline}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{item.copy}</p>
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
              The WordPress article emphasised global reach. Kenya benefits from the same benchmark lens to align with
              peer programmes across continents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "East Africa",
                description:
                  "Nairobi, Kampala, and Dar es Salaam leaders share compliance playbooks and AI enablement routines.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "London, Berlin, and Paris programmes exchange PSD2-ready practices with Kenyan leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "New York and Toronto diaspora cohorts align wallet policies with Nairobi insights.",
                icon: Bank
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Sydney command centres reuse automation cadences proven in Kenya.",
                icon: MapTrifold
              },
              {
                region: "Middle East",
                description:
                  "Dubai and Riyadh partners collaborate on FX resilience and compliance guardrails.",
                icon: UsersThree
              },
              {
                region: "South America",
                description:
                  "São Paulo and Bogotá teams leverage Kenyan AI telemetry to scale responsibly.",
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
                Review Kenya pricing
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
