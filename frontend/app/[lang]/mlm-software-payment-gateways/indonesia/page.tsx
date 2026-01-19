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
  Database,
  EnvelopeSimple,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapTrifold,
  Password,
  Plugs,
  ShieldCheck,
  Sparkle,
  Stack,
  StackSimple,
  Target,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  headline: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  name: string;
  detail: string;
  icon: IconType;
};

type Initiative = {
  title: string;
  summary: string;
  icon: IconType;
};

type Stage = {
  step: string;
  title: string;
  copy: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Gateway roster",
    value: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout",
    description:
      "Exactly as referenced in the legacy page—and now orchestrated with Indonesian compliance telemetry.",
    icon: CreditCard
  },
  {
    label: "Module stack",
    value: "Multi currency · Ticket system · Auto responder · E-voucher · E-wallet · Backup manager",
    description:
      "Plus emails, KYC documentation, and the multi-lingual system cited in the WordPress navigation.",
    icon: StackSimple
  },
  {
    label: "Market signals",
    value: "Jakarta · Surabaya · Bandung",
    description:
      "Field programmes for Java, Sumatra, and Kalimantan feed into a single AI-ready control tower.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "PayPal diaspora express",
    headline: "Serve Indonesian diaspora funding product kits from Singapore, Kuala Lumpur, and the Gulf.",
    bullets: [
      "Multi currency module reconciles IDR, SGD, and USD before commissions hit treasury.",
      "Ticket system module tracks Bank Indonesia cross-border approvals and dispute evidence."
    ],
    icon: GlobeHemisphereEast
  },
  {
    name: "Amazon Pay loyalty hub",
    headline: "Win consumer trust in Jakarta’s metropolitan circles with one-click checkout rituals.",
    bullets: [
      "Auto responder sequences confirm kit fulfilment in Bahasa Indonesia and English instantly.",
      "Backup manager mirrors promotional assets so seasonal campaigns stay resilient."
    ],
    icon: Stack
  },
  {
    name: "PayU local wallet grid",
    headline: "Activate Dana, Ovo, and GoPay preferences within a governed payment backbone.",
    bullets: [
      "Emails module pushes regulatory updates from OJK and Bank Indonesia to finance leaders.",
      "KYC documentation vault keeps agent verification, e-KTP scans, and PSP evidence ready for audits."
    ],
    icon: UsersThree
  },
  {
    name: "Stripe experimentation studio",
    headline: "Prototype subscription bundles for wellness, halal beauty, and micro-learning academies.",
    bullets: [
      "Webhook observability ties Shopify, WooCommerce, and Magento storefronts into one ledger.",
      "Ticket system module routes technical incidents to engineering pods with SLA timers."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net trust lane",
    headline: "Blend legacy acquiring expectations with AI-assisted compliance guardrails.",
    bullets: [
      "Multi-lingual system sends policy digests to HQ in English and field teams in Bahasa Indonesia.",
      "KYC documentation module maps each merchant ID to the appropriate distributor hierarchy."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree modular commerce",
    headline: "Tokenised payments empower hybrid pop-ups and omnichannel partner activations.",
    bullets: [
      "E-wallet module settles instant rebates while Maker-Checker approvals protect liquidity.",
      "Backup manager snapshots inventory syncs so offline activations stay in step with ecommerce."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    headline: "Consolidate corporate and regional acquiring within one compliance-aware feed.",
    bullets: [
      "Currency analytics compare success rates across Japan, Indonesia, and Australia corridors.",
      "Ticket system escalates Adyen risk alerts with supporting distributor evidences attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout partner runway",
    headline: "Launch digital courseware and AI concierge subscriptions across the archipelago.",
    bullets: [
      "Auto responder nurtures new partners with go-live checklists, training, and promotion kits.",
      "Emails module ships quarterly growth summaries directly to executive WhatsApp digests."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    name: "Multi currency system",
    detail: "Balances IDR, USD, and SGD settlements with variance alerts aligned to treasury policy.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    detail: "Routes PSP, compliance, and field questions with SLA dashboards and escalation ladders.",
    icon: Target
  },
  {
    name: "Auto responder",
    detail: "Delivers bilingual confirmations and AI-personalised nudges to distributors and customers.",
    icon: Lightning
  },
  {
    name: "E-voucher engine",
    detail: "Handles roadshow coupons, referral bundles, and provincial launch incentives.",
    icon: Sparkle
  },
  {
    name: "E-wallet manager",
    detail: "Streams instant commissions with multi-signature approvals and spending policies.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    detail: "Creates immutable artefacts for compliance, payout, and storefront continuity.",
    icon: Database
  },
  {
    name: "Emails module",
    detail: "Centralises transactional and campaign messaging with deliverability diagnostics.",
    icon: EnvelopeSimple
  },
  {
    name: "KYC documentation",
    detail: "Secures agent onboarding artefacts with automated expiry tracking and reminders.",
    icon: Password
  },
  {
    name: "Multi-lingual system",
    detail: "Synchronises Bahasa Indonesia, English, and Mandarin experiences across portals.",
    icon: GlobeHemisphereEast
  }
];

const INITIATIVES: Initiative[] = [
  {
    title: "Market intelligence cockpit",
    summary:
      "Blend Tokopedia, Shopee, and Lazada campaign telemetry with field performance and payment acceptance data.",
    icon: Compass
  },
  {
    title: "Regulatory readiness",
    summary:
      "Embed OJK, Bank Indonesia, and tax compliance workflows directly into ticket playbooks and artefact storage.",
    icon: ShieldCheck
  },
  {
    title: "AI-assisted enablement",
    summary:
      "Surface next-best-actions for leaders and uplines using predictive models trained on commission velocity.",
    icon: Sparkle
  },
  {
    title: "Partner co-creation",
    summary:
      "Coordinate technology, finance, and distributor councils using shared dashboards and supporting documentation.",
    icon: Handshake
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Interpret the legacy brief",
    copy:
      "We begin with the precise copy from the WordPress export—“Ways to accept payments from MLM Software in People’s Democratic Republic of Indonesia – ID”—and translate it into today’s operating blueprint."
  },
  {
    step: "02",
    title: "Instrument the stack",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallets, backups, emails, KYC, and multilingual experiences are wired together with compliance guardrails."
  },
  {
    step: "03",
    title: "Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout run through sandbox, localisation, and agent experience testing."
  },
  {
    step: "04",
    title: "Optimise for leadership insight",
    copy:
      "Executives receive dashboards, AI summaries, and ticket insights that prove Cloud MLM Software is the thought leader for Indonesia."
  }
];

export const metadata: Metadata = {
  title: "Indonesia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Turn the Indonesia WordPress payment gateway checklist into an AI-enabled launch with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated for local compliance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/indonesia"
  },
  openGraph: {
    title: "Indonesia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Indonesia, reimagined with multi currency control, ticketing governance, and AI optimisation."
  }
};

type IndonesiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function IndonesiaPaymentGatewayPage({ params }: IndonesiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-b-[3rem] bg-gradient-to-br from-orange-500/15 via-amber-100 to-slate-50 py-20 dark:from-orange-500/25 dark:via-slate-900 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute -top-32 right-12 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-400/40" />
        <div className="container relative grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Indonesia (ID)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Indonesia MLM payment gateways, orchestrated for AI-era scale
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software has already built great systems for the greatest companies. We honour the original
                pledge—“Ways to accept payments from MLM Software in People’s Democratic Republic of Indonesia – ID”—and
                elevate it into a corporate, compliance-ready launch track.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Meet the Jakarta leadership pod
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-orange-500/50 text-orange-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Indonesia demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-orange-500/20 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/15 text-orange-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-sm font-semibold uppercase tracking-wide text-orange-700 dark:text-white/80">
                        {metric.label}
                      </h2>
                      <p className="text-base font-semibold text-foreground dark:text-white">{metric.value}</p>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{metric.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr,0.7fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway plays for Indonesia’s field, ecommerce, and diaspora journeys
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Each connector from the WordPress export now carries operational narratives covering compliance, AI
              telemetry, and leadership reporting expected in 2025.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6 dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Buildings className="h-8 w-8 text-orange-500 dark:text-white" aria-hidden />
                <h3 className="text-lg font-semibold text-foreground dark:text-white">Executive snapshot</h3>
              </div>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Jakarta headquarters receives real-time readiness signals across onboarding, PSP compliance, and AI
                adoption. Field leaders can co-create launch plans with data, not guesswork.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/80 p-4 text-center dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground dark:text-white/60">Coverage</p>
                <p className="text-lg font-semibold text-foreground dark:text-white">34 provinces</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 text-center dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground dark:text-white/60">
                  Submission SLA
                </p>
                <p className="text-lg font-semibold text-foreground dark:text-white">24h</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 text-center dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground dark:text-white/60">Insights</p>
                <p className="text-lg font-semibold text-foreground dark:text-white">AI narrated</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {GATEWAY_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{play.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{play.headline}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {play.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-500 dark:bg-white" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Modules lifted from the legacy menu, now governed together
            </h2>
            <p className="text-sm text-white/70">
              The WordPress navigation listed nine critical modules. We combine them into a single governance layer that
              supports Indonesian leadership, compliance, and AI programmes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.name} className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-white/70">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Market orchestration anchored in Indonesian realities
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              AI narratives, compliance rituals, and partner councils ensure Cloud MLM Software leads the conversation
              in the Republic.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href={pricingHref}>
              Review pricing frameworks
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {INITIATIVES.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <article
                key={initiative.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{initiative.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{initiative.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950">
        <div className="container space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              The WordPress page listed global regions. We preserve that strategic view so Indonesian leaders can
              benchmark performance and expand with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Asia",
                copy:
                  "Indonesia’s launch benchmarks Japan, Singapore, and Malaysia with shared dashboards, ensuring cross-border excellence.",
                icon: MapTrifold
              },
              {
                region: "Africa",
                copy:
                  "Compare growth tactics with Nairobi, Lagos, and Johannesburg programmes to reuse winning playbooks.",
                icon: Compass
              },
              {
                region: "Europe",
                copy:
                  "EU gateway compliance feeds into Indonesian planning so CFOs see holistic acquiring performance.",
                icon: Buildings
              },
              {
                region: "North America",
                copy:
                  "US and Canada diaspora recruitment loops into Indonesian wallet strategies through shared telemetry.",
                icon: Bank
              },
              {
                region: "Oceania",
                copy:
                  "Australia and New Zealand teams align seasonal promotions with Indonesian leaders via unified roadmaps.",
                icon: GlobeHemisphereEast
              },
              {
                region: "South America",
                copy:
                  "LATAM launch teams exchange AI enablement tactics so distributor communities grow together.",
                icon: UsersThree
              }
            ].map(({ region, copy, icon: Icon }) => (
              <article key={region} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{region}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-white to-blue-500/10 p-10 shadow-xl dark:border-white/10 dark:from-orange-500/20 dark:via-slate-950 dark:to-blue-500/20 md:p-16">
          <div className="pointer-events-none absolute -left-28 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-orange-400/25 blur-3xl dark:bg-white/20" />
          <div className="pointer-events-none absolute -top-24 right-12 h-48 w-48 rounded-full bg-blue-400/25 blur-3xl dark:bg-blue-500/30" />
          <div className="relative space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to modernise Indonesia’s payment narrative?
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Keep the heritage copy alive while upgrading the execution for SEO, AI discovery, and executive-level
              assurance. Cloud MLM Software delivers the Indonesian thought-leadership story.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review pricing for Indonesia
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
