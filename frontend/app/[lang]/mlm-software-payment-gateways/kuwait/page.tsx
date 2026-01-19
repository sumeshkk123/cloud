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
  note: string;
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

type Pillar = {
  heading: string;
  text: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy headline",
    note:
      "“Ways to accept payments from MLM Software in People’s Democratic Republic of Kuwait – KW” remains word for word in the hero.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    note:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout—exactly as the WordPress export lists.",
    icon: CreditCard
  },
  {
    title: "Module suite",
    note:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    description: "Support Kuwaiti diaspora in London, Houston, and Dubai with compliant FX and automation.",
    bullets: [
      "Multi currency module balances KWD, USD, GBP, and AED with treasury-ready variance alerts.",
      "Ticket system module archives Central Bank of Kuwait approvals and sanction diligence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail trust",
    description: "Deliver premium checkout experiences for Kuwait City communities with bilingual outreach.",
    bullets: [
      "Auto responder issues Arabic and English confirmations with customs-ready documentation.",
      "Backup manager safeguards seasonal campaigns around Ramadan, shopping festivals, and expo schedules."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    description: "Integrate PSPs supporting GCC and global corridors without losing compliance clarity.",
    bullets: [
      "Emails module circulates AML, VAT, and data regulations with CFO commentary.",
      "KYC documentation vault maintains distributor verifications and PSP onboarding packs with expiry alerts."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    description: "Prototype AI concierge services and digital academies for oil, finance, and retail sectors.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts synchronised with analytics.",
      "Ticket workflows give engineering pods AI-authored reproduction steps for faster remediation."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    description: "Blend North American acquiring with Kuwaiti governance and board oversight.",
    bullets: [
      "Multi-lingual system pushes policy digests in Arabic and English to executive teams.",
      "Vaulted artefacts capture merchant IDs, sanction checks, and corporate approvals."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    description: "Tokenised payments support hybrid events across malls, trade shows, and VIP salons.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails and liquidity controls.",
      "Backup manager records offline device transactions for audit readiness."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    description: "Monitor EU, GCC, and US conversion trends from a single executive dashboard.",
    bullets: [
      "Currency analytics surface interchange pressure and decline rates for CFO decisions.",
      "Ticket system escalates Adyen risk insights with distributor evidence attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    description: "Distribute digital kits, AI enablement, and learning portals across corporate and community partners.",
    bullets: [
      "Auto responder nurtures onboarding with compliance checklists and milestone reminders.",
      "ChatsCircle pods provide proactive outreach when telemetry flags friction."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances KWD, USD, EUR, and SAR settlements with variance analytics and treasury guardrails.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, and logistics cases with SLA dashboards, AI summaries, and audit-ready trails.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Arabic and English communications instantly with AI-personalised nudges.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports loyalty events, VIP activations, and expo campaigns with telemetry visibility.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker oversight.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Safeguards storefronts, automation flows, and compliance artefacts against interruption.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Coordinates transactional, campaign, and compliance messaging for leadership transparency.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding packages.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Arabic, English, and French experiences synchronized across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const PILLARS: Pillar[] = [
  {
    heading: "Executive insight",
    text: "Dashboards connect Kuwait City executives with satellite offices and partners across the GCC.",
    icon: Buildings
  },
  {
    heading: "Compliance guardianship",
    text: "Ticketing, KYC, and backup artefacts prepare teams for regulator and auditor conversations.",
    icon: ShieldCheck
  },
  {
    heading: "AI enablement",
    text: "Automation, telemetry, and AI-generated narratives accelerate decisions for finance and product teams.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Kuwait MLM Payment Gateways | Cloud MLM Software",
  description:
    "Upgrade the Kuwait payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/kuwait"
  },
  openGraph: {
    title: "Kuwait MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Kuwait, elevated with multi currency intelligence and executive governance."
  }
};

type KuwaitPageProps = {
  params: { lang: SupportedLocale };
};

export default function KuwaitPaymentGatewayPage({ params }: KuwaitPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-white to-slate-100 py-20 dark:from-amber-500/25 dark:via-slate-950 dark:to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(251,191,36,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(240,171,252,0.18),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
                Ways to accept payments · Kuwait (KW)
              </span>
              <div className="space-y-6 text-foreground dark:text-white">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Kuwait MLM payment gateways engineered for executive precision
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                  Cloud MLM Software keeps the WordPress promise intact while orchestrating AI telemetry, compliance
                  guardrails, and experiential storytelling for Kuwait’s leadership.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Engage the Kuwait City pod
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-amber-500/60 text-amber-700 dark:text-white">
                  <Link href={demoHref}>
                    Preview the Kuwait demo
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
                        <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.note}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.heading}
                  className="rounded-3xl border border-border/60 bg-background/80 p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground dark:text-white">{pillar.heading}</h3>
                      <p className="mt-2 text-xs text-muted-foreground dark:text-white/70">{pillar.text}</p>
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
            Gateway narratives for Kuwait’s energy, retail, and innovation programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress export arrives with automation, compliance, and AI telemetry tailored to
            Kuwaiti leadership expectations.
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
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.description}</p>
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
              Modules from the legacy navigation, orchestrated together
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual systems now
              operate in one telemetry-rich stack for Kuwait.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
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
            Payment gateways for MLM Software by country or region
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            The legacy article spotlighted global coverage. Kuwait continues that mindset so leadership can benchmark
            across continents.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              region: "Gulf Cooperation Council",
              description:
                "Riyadh, Dubai, and Doha partners share automation rituals, FX guardrails, and compliance artefacts.",
              icon: Compass
            },
            {
              region: "Europe",
              description:
                "London and Frankfurt programmes exchange PSD2 documentation and treasury playbooks with Kuwait City.",
              icon: Buildings
            },
            {
              region: "North America",
              description:
                "Houston and Toronto diaspora journeys align wallet policies and AI telemetry with Kuwaiti leadership.",
              icon: Bank
            },
            {
              region: "Asia-Pacific",
              description:
                "Singapore and Tokyo command centres share automation cadences and risk controls with Kuwait teams.",
              icon: MapTrifold
            },
            {
              region: "Africa",
              description:
                "Cairo and Nairobi programmes collaborate on compliance resilience and field enablement rituals.",
              icon: UsersThree
            },
            {
              region: "South America",
              description:
                "São Paulo and Buenos Aires operations lean on Kuwait’s AI insights to scale responsibly.",
              icon: ChatsCircle
            }
          ].map(({ region, description, icon: Icon }) => (
            <article
              key={region}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{region}</h3>
              </div>
              <p className="text-sm text-muted-foreground dark:text-white/70">{description}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review Kuwait pricing
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href={contactHref}>
              Talk to a strategist
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
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
