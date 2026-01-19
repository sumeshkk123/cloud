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
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  title: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  name: string;
  detail: string;
  icon: IconType;
};

type TimelineItem = {
  stage: string;
  note: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Legacy copy",
    value: "“Ways to accept payments from MLM Software in People’s Democratic Republic of Liechtenstein – LI.”",
    description: "Hero statement remains exactly the same as the WordPress export.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Gateway roster",
    value: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout",
    description: "All eight connectors appear exactly as listed in the legacy article.",
    icon: CreditCard
  },
  {
    label: "Module suite",
    value: "Multi currency · Ticket system · Auto responder · E-voucher · E-wallet · Backup · Emails · KYC · Multi-lingual",
    description: "Modules from the original navigation operate as one orchestrated stack.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    title: "PayPal private banking bridge",
    focus: "Connect Liechtenstein’s global investors with HQ compliance guardrails and donor-ready documentation.",
    bullets: [
      "Multi currency module balances CHF, EUR, GBP, and USD with treasury dashboards tailored to risk teams.",
      "Ticket system module archives sanction diligence and FIU correspondences for audit-ready transparency."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "Amazon Pay premium retail",
    focus: "Deliver concierge-level ecommerce experiences for Vaduz, Schaan, and Balzers communities.",
    bullets: [
      "Auto responder sends multilingual confirmations and VAT documentation instantly.",
      "Backup manager safeguards seasonal promotions tied to tourism, luxury retail, and private finance events."
    ],
    icon: Sparkle
  },
  {
    title: "PayU cross-border mesh",
    focus: "Integrate EEA PSPs while keeping risk, treasury, and compliance stakeholders aligned.",
    bullets: [
      "Emails module distributes AML and PSD2 policy updates with executive insight and recommended actions.",
      "KYC documentation vault connects distributor verification, PSP onboarding artefacts, and renewal reminders."
    ],
    icon: Target
  },
  {
    title: "Stripe experimentation studio",
    focus: "Prototype AI concierge services for wealth advisory, education, and philanthropy programmes.",
    bullets: [
      "Webhook telemetry synchronises Shopify, WooCommerce, and Magento storefronts with analytics and line-of-business dashboards.",
      "Ticket workflows generate AI-authored reproduction logs so engineering can remediate incidents swiftly."
    ],
    icon: Lightning
  },
  {
    title: "Authorize.Net heritage lane",
    focus: "Blend North American acquiring with Liechtenstein’s board governance and sanction oversight.",
    bullets: [
      "Multi-lingual system broadcasts policy digests across German, English, and French stakeholders.",
      "Vaulted artefacts capture merchant authorisations, sanction checks, and board minutes for each payment profile."
    ],
    icon: ShieldCheck
  },
  {
    title: "Braintree omnichannel core",
    focus: "Tokenised payments empower hybrid investor briefings, boutique pop-ups, and philanthropic salons.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker approvals and spending policies.",
      "Backup manager records offline transactions for regulated events and private demonstrations."
    ],
    icon: Plugs
  },
  {
    title: "Adyen unified ledger",
    focus: "Monitor EU, Middle Eastern, and North American conversion health from one command centre.",
    bullets: [
      "Currency analytics highlight success rates, interchange exposure, and FX fluctuations for CFO reporting.",
      "Ticket system escalates Adyen risk alerts enriched with distributor evidence and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    title: "2Checkout digital runway",
    focus: "Distribute digital kits, AI enablement, and remote briefings across global limited partners.",
    bullets: [
      "Auto responder nurtures onboarding journeys with milestone checklists and multilingual playbooks.",
      "ChatsCircle pods coordinate proactive outreach whenever telemetry signals friction or churn risk."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    name: "Multi currency system",
    detail: "Balances CHF, EUR, USD, and GBP with variance analytics and treasury dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    detail: "Routes compliance, PSP, audit, and donor cases with SLA monitoring, AI summaries, and audit-ready exports.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    detail: "Delivers German, English, and French communications instantly with AI-personalised sequences.",
    icon: Megaphone
  },
  {
    name: "E-voucher engine",
    detail: "Supports philanthropic events, loyalty programmes, and curated experiences with telemetry.",
    icon: Sparkle
  },
  {
    name: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker approvals and policy controls.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    detail: "Preserves storefronts, automation flows, and compliance artefacts to satisfy regulatory reviews.",
    icon: ShieldCheck
  },
  {
    name: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for executive oversight.",
    icon: Megaphone
  },
  {
    name: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding artefacts.",
    icon: StackSimple
  },
  {
    name: "Multi-lingual system",
    detail: "Keeps German, English, and French experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TIMELINE: TimelineItem[] = [
  {
    stage: "Stage 01 · Interpret the brief",
    note: "Retain the exact headline, gateway list, and module references from the WordPress page as the guiding document.",
    icon: Buildings
  },
  {
    stage: "Stage 02 · Orchestrate the modules",
    note: "Connect multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual systems with telemetry.",
    icon: Compass
  },
  {
    stage: "Stage 03 · Activate the gateways",
    note: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout run through sandbox, localisation, and compliance checks.",
    icon: Target
  },
  {
    stage: "Stage 04 · Optimise executive insight",
    note: "Dashboards, AI summaries, and compliance artefacts demonstrate Cloud MLM Software’s stewardship to Liechtenstein’s leadership.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Liechtenstein MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine the Liechtenstein WordPress gateway checklist—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, 2Checkout—with AI telemetry, compliance guardrails, and executive-ready automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/liechtenstein"
  },
  openGraph: {
    title: "Liechtenstein MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Liechtenstein elevated with multi currency intelligence, ticket governance, and AI insights."
  }
};

type LiechtensteinPageProps = {
  params: { lang: SupportedLocale };
};

export default function LiechtensteinPaymentGatewayPage({ params }: LiechtensteinPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.12),transparent_60%),radial-gradient(circle_at_75%_18%,rgba(99,102,241,0.12),transparent_60%)] from-slate-50 via-white to-slate-100 py-20">
        <div className="container space-y-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                Ways to accept payments · Liechtenstein (LI)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Liechtenstein’s payment gateways, orchestrated for precision finance
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground">
                  Cloud MLM Software respects the original WordPress content—gateway list, module roster, and the “Ways to
                  accept payments” statement—while elevating it with automation, compliance, and executive telemetry.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800">
                  <Link href={contactHref}>
                    Engage the Liechtenstein team
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100">
                  <Link href={demoHref}>
                    Preview the Liechtenstein demo
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
                    key={highlight.label}
                    className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/10 text-slate-900">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">{highlight.label}</h2>
                        <p className="text-sm text-muted-foreground">{highlight.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/80">{highlight.description}</p>
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
            Gateway tactics for Liechtenstein’s private banking, innovation, and philanthropic journeys
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The eight connectors receive a modern narrative—automation, compliance, and AI telemetry—so executives and
            partners share the same view of performance.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/10 text-slate-900">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.title}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" aria-hidden />
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
              Modules from the legacy navigation, orchestrated with AI oversight
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints
              now work together for Liechtenstein’s leadership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/10 text-slate-900">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{module.name}</h3>
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
            Programme rhythm—keeping the WordPress heritage while adding modern telemetry
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            A four-stage cadence keeps Liechtenstein’s launch disciplined, auditable, and executive-ready.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/10 text-slate-900">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{item.stage}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The original article emphasised global awareness. Liechtenstein continues that outlook to benchmark with
              peers across continents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Europe",
                description:
                  "Riga, Zurich, and Luxembourg programmes share PSD2-ready playbooks and automation cadences with Liechtenstein.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "Toronto and New York partners align wallet policies, compliance artefacts, and AI telemetry through shared dashboards.",
                icon: Bank
              },
              {
                region: "Middle East",
                description:
                  "Dubai and Riyadh offices collaborate on FX resilience, philanthropy governance, and automation flows.",
                icon: UsersThree
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Tokyo command centres reuse Liechtenstein’s automation scripts for remote enablement.",
                icon: MapTrifold
              },
              {
                region: "Africa",
                description:
                  "Johannesburg and Nairobi programmes adopt multi currency guardrails and ticket governance inspired by Liechtenstein’s controls.",
                icon: Compass
              },
              {
                region: "South America",
                description:
                  "São Paulo and Buenos Aires operations leverage AI summaries refined in Liechtenstein to scale responsibly.",
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
                Review Liechtenstein pricing
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
