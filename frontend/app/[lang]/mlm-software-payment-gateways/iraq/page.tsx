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
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Handshake,
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

type Insight = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCard = {
  title: string;
  copy: string;
  icon: IconType;
};

type Initiative = {
  title: string;
  description: string;
};

const INSIGHTS: Insight[] = [
  {
    label: "Legacy statement",
    value: "“Ways to accept payments from MLM Software in People’s Democratic Republic of Iraq – IQ.”",
    description: "The hero keeps the precise WordPress headline intact as our north star.",
    icon: ClipboardText
  },
  {
    label: "Gateway coverage",
    value: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout",
    description: "Exactly the roster documented in the WordPress export.",
    icon: CreditCard
  },
  {
    label: "Modules in scope",
    value: "Multi currency · Ticket system · Auto responder · E-voucher · E-wallet · Backup · Emails · KYC · Multi-lingual",
    description: "All the modules spotlighted in the original navigation now orchestrated together.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    description: "Coordinate diaspora purchases from London, Dubai, and Amman with transparent governance.",
    bullets: [
      "Multi currency module reconciles IQD, GBP, and AED settlements before treasury sign-off.",
      "Ticket system module stores sanction diligence, import approvals, and PSP correspondence."
    ],
    icon: GlobeHemisphereEast
  },
  {
    name: "Amazon Pay trust track",
    description: "Deliver reliable experiences for Iraqi consumers leveraging regional fulfilment hubs.",
    bullets: [
      "Auto responder confirms kit shipments in Arabic and English while referencing customs checkpoints.",
      "Backup manager preserves ecommerce configurations to withstand logistics interruptions."
    ],
    icon: ShieldCheck
  },
  {
    name: "PayU regional mesh",
    description: "Leverage regional PSPs serving Erbil, Baghdad, and Basra through compliant routing.",
    bullets: [
      "Emails module broadcasts Central Bank of Iraq updates alongside finance commentary.",
      "KYC documentation vault organises distributor verifications with expiry notifications."
    ],
    icon: Target
  },
  {
    name: "Stripe innovation studio",
    description: "Prototype AI training academies and subscription bundles for technical communities.",
    bullets: [
      "Webhook telemetry synchronises Shopify, WooCommerce, and Magento data into unified dashboards.",
      "Ticket workflows provide engineering teams with reproducible logs and AI-generated summaries."
    ],
    icon: Sparkle
  },
  {
    name: "Authorize.Net enterprise lane",
    description: "Blend North American acquiring with Iraqi leadership oversight and sanction diligence.",
    bullets: [
      "Multi-lingual system circulates policy digests to executive, compliance, and field communities.",
      "Vaulted artefacts ensure each merchant ID records approvals from board and banking partners."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    description: "Tokenised payments support hybrid activation events across Kurdistan and federal territories.",
    bullets: [
      "E-wallet module handles instant bonuses with Maker-Checker guardrails.",
      "Backup manager secures offline device transactions for audit readiness."
    ],
    icon: Plugs
  },
  {
    name: "Adyen global oversight",
    description: "Monitor performance and risk across EU and GCC corridors from a single control room.",
    bullets: [
      "Currency analytics compare IQD conversions with EUR, USD, and AED success rates.",
      "Ticket system escalates Adyen risk alerts with distributor evidence automatically attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital scale",
    description: "Distribute AI concierge services and digital kits through a compliant subscription backbone.",
    bullets: [
      "Auto responder nurtures partner onboarding journeys with bilingual checklists.",
      "ChatsCircle support pods provide proactive outreach based on payment telemetry signals."
    ],
    icon: ChatsCircle
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multi currency system",
    copy: "Balances IQD, USD, and EUR flows with variance alerts tied to treasury policy.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    copy: "Routes compliance, logistics, and PSP cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    copy: "Delivers Arabic and English notifications instantly with launch-specific sequencing.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    copy: "Supports field events, refugee outreach programmes, and partner promos across provinces.",
    icon: Sparkle
  },
  {
    title: "E-wallet manager",
    copy: "Disburses real-time commissions with Maker-Checker approvals and audit trails.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    copy: "Secures core data, workflows, and storefront assets against infrastructure disruption.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    copy: "Synchronises transactional and broadcast messaging with deliverability tracking.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    copy: "Manages identity artefacts, distributor verifications, and PSP approvals with expiry alerts.",
    icon: ClipboardText
  },
  {
    title: "Multi-lingual system",
    copy: "Keeps Arabic, Kurdish, and English experiences aligned across portals and collateral.",
    icon: GlobeHemisphereEast
  }
];

const INITIATIVES: Initiative[] = [
  {
    title: "Regulatory navigation",
    description:
      "Ticket audits and compliance packs capture customs approvals, sanction diligence, and PSP evidence so leadership can proceed with confidence."
  },
  {
    title: "AI-led enablement",
    description:
      "AI assistants interpret payment, support, and distributor telemetry to recommend next steps for Baghdad headquarters."
  },
  {
    title: "Field orchestration",
    description:
      "Province-specific dashboards highlight revenue, recruitment, and fulfilment health for Erbil, Baghdad, Basra, and Mosul."
  },
  {
    title: "Partner collaboration",
    description:
      "Shared workspaces bring together finance, compliance, and field champions with clear documentation trails and alerts."
  }
];

export const metadata: Metadata = {
  title: "Iraq MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine the Iraq payment gateway checklist with AI-enabled governance across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/iraq"
  },
  openGraph: {
    title: "Iraq MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Iraq, rebuilt with multi currency controls, ticket governance, and leadership telemetry."
  }
};

type IraqPageProps = {
  params: { lang: SupportedLocale };
};

export default function IraqPaymentGatewayPage({ params }: IraqPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(96,165,250,0.25),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(248,189,114,0.2),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(110,231,183,0.18),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Ways to accept payments · Iraq (IQ)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Iraq MLM payment gateways with corporate, AI-driven orchestration
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                We retain the WordPress promise—“Ways to accept payments from MLM Software in People’s Democratic
                Republic of Iraq – IQ”—and modernise it with resilient, compliance-first execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Coordinate with the Baghdad pod
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/10">
                  <Link href={demoHref}>
                    Preview the Iraq demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article key={insight.label} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-sm font-semibold uppercase tracking-wide">{insight.label}</h2>
                        <p className="text-base font-semibold">{insight.value}</p>
                        <p className="text-sm text-white/70">{insight.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway narratives for Iraq’s field, diaspora, and compliance journeys
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each of the eight connectors from the WordPress export now carries modern guidance covering AI telemetry,
            regulation, and leadership visibility.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary dark:bg-white" aria-hidden />
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
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Modules from the legacy page, united into one operating layer
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Multi currency, ticketing, automation, vouchers, wallets, backups, emails, KYC, and multilingual
                experiences now live within a single governance canvas.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <MapTrifold className="h-8 w-8 text-primary dark:text-white" aria-hidden />
                <div>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">Operational compass</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">
                    Leadership dashboards align Baghdad headquarters with Erbil and Basra field teams. AI assistants keep
                    action items clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CARDS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Leadership initiatives for Iraq’s MLM ecosystem
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              The programme pushes Cloud MLM Software’s thought-leadership position while staying grounded in Iraqi
              realities.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review Iraq pricing
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {INITIATIVES.map((initiative) => (
              <article
                key={initiative.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-base font-semibold text-foreground dark:text-white">{initiative.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{initiative.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-100 via-white to-blue-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              The WordPress article showcased global coverage. We preserve that lens to benchmark Iraq’s programmes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Asia",
                description:
                  "Iraqi leadership compares progress with Riyadh, Dubai, and Doha programmes to reuse successful tactics.",
                icon: MapTrifold
              },
              {
                region: "Europe",
                description:
                  "London and Frankfurt operations share PSD2-compliant routines and payment resilience insights.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "Toronto and Houston diaspora involvement informs wallet policies and reward structures.",
                icon: Bank
              },
              {
                region: "Africa",
                description:
                  "Cairo and Nairobi teams share onboarding playbooks and regulatory updates via AI-summarised briefings.",
                icon: Compass
              },
              {
                region: "Oceania",
                description:
                  "Sydney and Auckland activations align seasonal campaigns with Iraqi distributors for global rollouts.",
                icon: UsersThree
              },
              {
                region: "South America",
                description:
                  "São Paulo and Bogotá leadership exchange AI enablement rituals with Baghdad HQ through shared dashboards.",
                icon: Handshake
              }
            ].map(({ region, description, icon: Icon }) => (
              <article
                key={region}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{region}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/90 p-12 shadow-xl dark:border-white/10 dark:bg-white/5">
          <div className="pointer-events-none absolute -top-24 left-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
          <div className="pointer-events-none absolute -bottom-32 right-8 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/20" />
          <div className="relative space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to lead Iraq’s payment innovation narrative?
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Honour the heritage copy while elevating it for SEO and AI discovery. Cloud MLM Software turns Iraq’s
              gateway roster into a disciplined, insight-rich programme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Explore pricing for Iraq
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={contactHref}>
                  Talk to our strategists
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
