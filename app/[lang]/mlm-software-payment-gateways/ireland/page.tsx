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
  ClipboardText,
  Compass,
  CreditCard,
  Megaphone,
  Cube,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapTrifold,
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
  detail: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  name: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy statement",
    detail:
      "“Ways to accept payments from MLM Software in People’s Democratic Republic of Ireland – IE.” We preserve the exact WordPress copy in the hero.",
    icon: ClipboardText
  },
  {
    title: "Gateway roster",
    detail:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout — the full list from the legacy export.",
    icon: CreditCard
  },
  {
    title: "Module stack",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora advantage",
    summary: "Serve Irish diaspora in Boston, Toronto, and Sydney while maintaining EU compliance.",
    bullets: [
      "Multi currency module balances EUR, USD, and AUD settlements with treasury guardrails.",
      "Ticket system module logs Central Bank of Ireland diligence and PSD2 evidence."
    ],
    icon: GlobeHemisphereEast
  },
  {
    name: "Amazon Pay retail trust",
    summary: "Deliver frictionless checkout for Irish consumer hubs across Dublin, Cork, and Galway.",
    bullets: [
      "Auto responder sends bilingual confirmations and VAT documentation instantly.",
      "Backup manager protects seasonal promotion assets and AI bundles."
    ],
    icon: ShieldCheck
  },
  {
    name: "PayU continental bridge",
    summary: "Coordinate EU PSPs for multilingual partner experiences across the island.",
    bullets: [
      "Emails module distributes compliance updates and EU directive notices with executive notes.",
      "KYC documentation vault maps distributor verification artefacts with expiry reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation hub",
    summary: "Prototype AI concierge services, subscription bundles, and digital academies.",
    bullets: [
      "Webhook observability keeps Shopify, WooCommerce, and Magento data aligned.",
      "Ticket system module shares incident insights with engineering pods in near real time."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net global lane",
    summary: "Blend US acquiring expectations with Irish leadership dashboards.",
    bullets: [
      "Multi-lingual system synchronises English, Irish, and European language comms.",
      "Vaulted artefacts ensure merchant IDs link to compliance approvals and partner sign-offs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments enable hybrid experiences across retail pop-ups and online platforms.",
    bullets: [
      "E-wallet module streams instant commissions with Maker-Checker approvals.",
      "Backup manager safeguards inventory syncs and offline transaction data."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Compare EU performance across the UK, Benelux, and Nordic corridors.",
    bullets: [
      "Currency analytics highlight EUR conversions vs GBP and USD corridors for leadership review.",
      "Ticket system escalates Adyen risk signals with contextual evidence automatically attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits and AI-driven learning experiences to partners globally.",
    bullets: [
      "Auto responder nurtures partner onboarding with EU-ready policy guides.",
      "ChatsCircle-led pods provide proactive outreach based on payment telemetry."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    name: "Multi currency system",
    description: "Reconciles EUR, GBP, and USD inflows with variance alerts tied to treasury tolerances.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSD2, tax, and PSP cases with SLA dashboards and AI-generated summaries.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    description: "Delivers bilingual notifications, event reminders, and compliance alerts instantly.",
    icon: Lightning
  },
  {
    name: "E-voucher engine",
    description: "Funds partner incentives, regional pop-up tours, and referral programmes.",
    icon: Sparkle
  },
  {
    name: "E-wallet manager",
    description: "Processes instant commissions for field leaders with strong maker-checker controls.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    description: "Protects storefronts, AI experiences, and compliance artefacts with immutable snapshots.",
    icon: ShieldCheck
  },
  {
    name: "Emails module",
    description: "Synchronises campaign, transactional, and regulatory communication in one command centre.",
    icon: Megaphone
  },
  {
    name: "KYC documentation",
    description: "Combines distributor verification, PSP onboarding, and AML checks with expiry alerts.",
    icon: ClipboardText
  },
  {
    name: "Multi-lingual system",
    description: "Keeps English, Irish, and continental language experiences consistent across portals.",
    icon: GlobeHemisphereEast
  }
];

export const metadata: Metadata = {
  title: "Ireland MLM Payment Gateways | Cloud MLM Software",
  description:
    "Upgrade the Ireland payment gateway checklist with AI-ready orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/ireland"
  },
  openGraph: {
    title: "Ireland MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Ireland, elevated with multi currency intelligence and governance."
  }
};

type IrelandPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function IrelandPaymentGatewayPage({ params }: IrelandPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-blue-100 py-20 dark:from-emerald-500/20 dark:via-slate-950 dark:to-blue-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_70%_85%,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Ireland (IE)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
                Ireland MLM payment gateways, tuned for EU compliance and AI acceleration
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps the WordPress pledge—“Ways to accept payments from MLM Software in People’s
                Democratic Republic of Ireland – IE”—while elevating it with a corporate execution track.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Dublin leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-emerald-500/60 text-emerald-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Ireland demo
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
                  className="rounded-3xl border border-emerald-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.title}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.detail}</p>
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
            Gateway narratives for Ireland’s field, fintech, and diaspora communities
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress list gains modern context—automation, compliance, and AI telemetry align the eight connectors
            for Irish leadership.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Modules from the legacy navigation, orchestrated in one control room
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multilingual systems
                get AI visibility and audit trails for Irish leadership.
              </p>
              <div className="rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <Cube className="h-8 w-8 text-primary dark:text-white" aria-hidden />
                  <div>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">Connected operations</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">
                      Dublin, Cork, and Galway share the same status boards, AI insights, and compliance packs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {MODULES.map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-white/10 dark:text-white">
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
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-white via-emerald-50 to-blue-50 p-10 shadow-lg dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              The WordPress article showcased a global footprint. We maintain that perspective for Irish leadership.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  region: "Europe",
                  copy:
                    "Benchmark with Frankfurt, Amsterdam, and Copenhagen for PSD2 readiness and payment optimisation.",
                  icon: Buildings
                },
                {
                  region: "North America",
                  copy:
                    "Dublin works in lockstep with Boston and Toronto diaspora programmes through shared telemetry.",
                  icon: Bank
                },
                {
                  region: "Asia",
                  copy:
                    "Singapore and Tokyo centres align launch cadences, ensuring consistent automation and governance.",
                  icon: MapTrifold
                },
                {
                  region: "Africa",
                  copy:
                    "Cairo and Johannesburg teams exchange AI enablement rituals to replicate sustainable growth.",
                  icon: Compass
                },
                {
                  region: "Oceania",
                  copy:
                    "Sydney and Auckland share best practices on hybrid events and payment resilience with Irish leadership.",
                  icon: UsersThree
                },
                {
                  region: "South America",
                  copy:
                    "São Paulo and Buenos Aires operations coordinate wallet strategies with Dublin HQ through AI summaries.",
                  icon: Handshake
                }
              ].map(({ region, copy, icon: Icon }) => (
                <article
                  key={region}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{region}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{copy}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review Ireland pricing
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={contactHref}>
                  Speak with a strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
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
