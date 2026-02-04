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
  summary: string;
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

type Stage = {
  heading: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy headline",
    summary: "“Ways to accept payments from MLM Software in People’s Democratic Republic of Madagascar – MG” stays intact.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    summary: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    title: "Module ecosystem",
    summary:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and the multi-lingual system operate together.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal biodiversity bridge",
    description: "Serve Madagascar’s diaspora across Paris, Antananarivo, and Johannesburg with compliant automation.",
    bullets: [
      "Multi currency module reconciles MGA, EUR, and ZAR flows with variance analytics for treasury and donor stakeholders.",
      "Ticket system module archives sanction diligence, Banque Centrale correspondences, and NGO evidence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay eco-tourism trust",
    description: "Deliver reliable ecommerce for conservation tours, education programmes, and community initiatives.",
    bullets: [
      "Auto responder issues Malagasy, French, and English notifications with customs-ready documentation.",
      "Backup manager safeguards seasonal campaigns tied to biodiversity expeditions and cultural festivals."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    description: "Integrate PSPs across the Indian Ocean and African corridors without losing compliance clarity.",
    bullets: [
      "Emails module circulates AML, FX, and tax updates with CFO commentary and action lists.",
      "KYC documentation vault manages distributor verification, PSP onboarding, and renewal alerts."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    description: "Prototype AI concierge services for eco-tourism, agriculture, and education programmes.",
    bullets: [
      "Webhook telemetry synchronises Shopify, WooCommerce, and Magento storefronts with analytics dashboards.",
      "Ticket workflows provide engineering pods with AI-generated reproduction notes and severity insights."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    description: "Blend North American acquiring with Madagascar’s governance and donor accountability needs.",
    bullets: [
      "Multi-lingual system publishes policy digests across Malagasy, French, and English stakeholders.",
      "Vaulted artefacts capture sanction checks, board approvals, and legal documentation for each merchant profile."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    description: "Tokenised payments empower field pop-ups, rural outreach events, and hybrid partner experiences.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker approvals and spending safeguards.",
      "Backup manager records offline transactions from regions with intermittent connectivity."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    description: "Monitor EU, African, and North American conversion health with risk telemetry and performance insights.",
    bullets: [
      "Currency analytics highlight success rates, interchange exposure, and FX volatility for CFO reviews.",
      "Ticket system escalates Adyen risk alerts enriched with distributor evidence and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    description: "Distribute digital kits, AI enablement, and remote trainings for conservation partners worldwide.",
    bullets: [
      "Auto responder nurtures onboarding journeys with bilingual milestone checklists.",
      "ChatsCircle pods coordinate proactive outreach whenever telemetry flags friction or stalled adoption."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances MGA, EUR, USD, and ZAR with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, logistics, and donor support cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Malagasy, French, and English communications instantly with AI-personalised sequences.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports eco-tourism packages, education campaigns, and cooperative incentives with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker oversight and payout controls.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Captures immutable storefront, automation, and compliance artefacts even during connectivity gaps.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding packages with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Malagasy, French, and English experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const STAGES: Stage[] = [
  {
    heading: "Stage 01 · Interpret the brief",
    copy:
      "We retain the WordPress headline, gateway list, and module references as the programme blueprint for Madagascar.",
    icon: Buildings
  },
  {
    heading: "Stage 02 · Wire the platform",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences operate within one telemetry-rich stack.",
    icon: Compass
  },
  {
    heading: "Stage 03 · Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    heading: "Stage 04 · Optimise insight cadence",
    copy:
      "Dashboards, AI summaries, and compliance artefacts demonstrate Cloud MLM Software’s stewardship to regulators, donors, and operators.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Madagascar MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform the Madagascar payment gateway checklist with AI telemetry, compliance guardrails, and automation across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/madagascar"
  },
  openGraph: {
    title: "Madagascar MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Madagascar elevated with multi currency intelligence and leadership-ready insights."
  }
};

type MadagascarPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MadagascarPaymentGatewayPage({ params }: MadagascarPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-amber-100 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(34,197,94,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(245,158,11,0.2),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(56,189,248,0.16),transparent_55%)]" />
        <div className="container space-y-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Ways to accept payments · Madagascar (MG)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Madagascar’s payment gateways, orchestrated for conservation-grade resilience
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground">
                  We keep the original WordPress promise—gateway list, module roster, and the “Ways to accept payments” headline—while adding automation, compliance guardrails, and AI telemetry that serve eco-tourism, agriculture, and donor programmes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
                  <Link href={contactHref}>
                    Connect with the Antananarivo pod
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-emerald-500/60 text-emerald-700 hover:bg-emerald-100">
                  <Link href={demoHref}>
                    Preview the Madagascar demo
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
                    className="rounded-3xl border border-emerald-500/20 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">{highlight.title}</h2>
                        <p className="text-sm text-muted-foreground">{highlight.summary}</p>
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
            Gateway plays for Madagascar’s diaspora, eco-tourism, and education movements
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Automation, compliance, and AI telemetry turn the WordPress connector list into an executive-ready payments programme.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
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
              Modules from the legacy navigation, orchestrated with telemetry
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints now operate as a single platform for Madagascar’s leadership.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
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
            Four-stage cadence rooted in the WordPress brief
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Authentic copy, disciplined execution—Madagascar’s launch sticks to a clear sequence with AI insight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.heading}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{stage.heading}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{stage.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-900 to-amber-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article highlighted worldwide coverage. Madagascar keeps that perspective—sharing playbooks with partners across Africa, Europe, and the Americas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "East Africa",
                description: "Antananarivo collaborates with Nairobi and Dar es Salaam on automation, FX guardrails, and compliance artefacts.",
                icon: Compass
              },
              {
                region: "Europe",
                description: "Paris, Brussels, and Stockholm exchange PSD2-ready playbooks and donor reporting frameworks with Madagascar leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description: "New York and Washington DC diaspora hubs align wallet policies and AI telemetry with Antananarivo HQ.",
                icon: Bank
              },
              {
                region: "Asia-Pacific",
                description: "Singapore and Sydney command centres reuse Madagascar’s automation scripts for remote enablement.",
                icon: MapTrifold
              },
              {
                region: "Middle East",
                description: "Dubai and Doha programmes collaborate on FX resilience and philanthropic governance.",
                icon: UsersThree
              },
              {
                region: "South America",
                description: "São Paulo and Buenos Aires operations leverage Malagasy AI insights to scale responsibly.",
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
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-emerald-100">
              <Link href={pricingHref}>
                Review Madagascar pricing
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
