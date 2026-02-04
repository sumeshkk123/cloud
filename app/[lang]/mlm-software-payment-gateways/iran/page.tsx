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
  CirclesThreePlus,
  ClipboardText,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  Factory,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  StackSimple,
  Target,
  UsersThree,
  Vault,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Pillar = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayStory = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Programme = {
  step: string;
  title: string;
  description: string;
};

type RegionCard = {
  region: string;
  description: string;
  icon: IconType;
};

const PILLARS: Pillar[] = [
  {
    title: "Legacy copy respected",
    detail:
      "The hero statement keeps the exact promise—“Ways to accept payments from MLM Software in People’s Democratic Republic of Iran – IR.”",
    icon: ClipboardText
  },
  {
    title: "Gateway lineup",
    detail:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout, just as the WordPress export documented.",
    icon: CreditCard
  },
  {
    title: "Module arsenal",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAY_STORIES: GatewayStory[] = [
  {
    name: "PayPal diaspora bridge",
    summary: "Assist Iranian diaspora in Dubai, Toronto, and Frankfurt while preserving regulatory guardrails.",
    bullets: [
      "Multi currency module pre-triangulates IRR, EUR, and CAD settlements before treasury receives funds.",
      "Ticket system module packages OFAC, EU, and Bank Markazi compliance notes for leadership visibility."
    ],
    icon: GlobeHemisphereEast
  },
  {
    name: "Amazon Pay trust lane",
    summary: "Deliver familiar buying experiences for consumers using international fulfilment corridors.",
    bullets: [
      "Auto responder sequences share shipping updates in Persian and English simultaneously.",
      "Backup manager snapshots inventory workflows, protecting continuity during geopolitical events."
    ],
    icon: ShieldCheck
  },
  {
    name: "PayU regional mesh",
    summary: "Activate PSP partners charing from Turkey, UAE, and Central Asia with compliant routing.",
    bullets: [
      "Emails module broadcasts policy changes from Central Bank of Iran to finance and compliance teams.",
      "KYC documentation ties distributor onboarding artefacts to PayU merchant IDs for audit-ready trails."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation lab",
    summary: "Prototype AI-powered product bundles and learning academies for engineering communities.",
    bullets: [
      "Webhook orchestration keeps Shopify, Magento, and WooCommerce aligned with real-time telemetry.",
      "Ticket system module escalates technical anomalies with reproductions and AI-generated summaries."
    ],
    icon: Waveform
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend US acquiring expectations with Iranian leadership oversight.",
    bullets: [
      "Multi-lingual system delivers governance updates in English, Persian, and Arabic.",
      "Vaulted artefacts ensure each merchant profile includes sanction checks and board approvals."
    ],
    icon: Vault
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments enable hybrid events across Tehran, Mashhad, and Isfahan.",
    bullets: [
      "E-wallet module orchestrates instant incentives with Maker-Checker approvals.",
      "Backup manager safeguards device-based sales data for audits and AI training."
    ],
    icon: Plugs
  },
  {
    name: "Adyen global scoreboard",
    summary: "Compare global success rates while aligning to EU regulatory expectations.",
    bullets: [
      "Currency analytics highlight IRR conversions versus EUR, GBP, and AED corridors.",
      "Ticket system module links Adyen risk alerts with distributor evidence and leadership notes."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout growth runway",
    summary: "Distribute digital subscriptions and AI concierge services to regional partners.",
    bullets: [
      "Auto responder nurtures sign-ups with go-live checklists translated for Persian-speaking teams.",
      "ChatsCircle-driven support pods offer proactive outreach based on payment telemetry."
    ],
    icon: ChatsCircle
  }
];

const PROGRAMME: Programme[] = [
  {
    step: "01",
    title: "Interpret the WordPress brief",
    description:
      "Surface the exact language from the legacy page as our north star and document stakeholder ambition across finance, compliance, and channel leadership."
  },
  {
    step: "02",
    title: "Wire the modules",
    description:
      "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multilingual touchpoints are configured with telemetry and audit trails."
  },
  {
    step: "03",
    title: "Activate each gateway",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout run through sandbox, compliance, localisation, and agent testing."
  },
  {
    step: "04",
    title: "Optimise insight delivery",
    description:
      "Executives receive AI summaries, dashboards, and ticket analytics that position Cloud MLM Software as Iran’s thought-leading platform."
  }
];

const REGION_CARDS: RegionCard[] = [
  {
    region: "Asia",
    description:
      "Iran syncs launch progress with peers across the region—Dubai, Riyadh, and Istanbul steering committees share telemetry in real time.",
    icon: MapTrifold
  },
  {
    region: "Europe",
    description:
      "Frankfurt and London acquisitions feed comparative insights while maintaining PSD2-ready compliance evidence.",
    icon: Buildings
  },
  {
    region: "North America",
    description:
      "Diaspora recruitment in Toronto and Los Angeles integrates with Iranian wallet policies through shared dashboards.",
    icon: Bank
  },
  {
    region: "Africa",
    description:
      "Cairo and Johannesburg rollout teams exchange resilience playbooks for regulatory change management.",
    icon: Compass
  },
  {
    region: "Oceania",
    description:
      "Sydney and Auckland partners adopt AI enablement cadences that reflect Iranian governance requirements.",
    icon: UsersThree
  },
  {
    region: "South America",
    description:
      "São Paulo leadership observes Iranian growth experiments to reuse responsible AI practices in LATAM.",
    icon: Handshake
  }
];

export const metadata: Metadata = {
  title: "Iran MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform the Iran payment gateway checklist into an AI-ready launch with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated under Iranian governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/iran"
  },
  openGraph: {
    title: "Iran MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Iran, rebuilt with multi currency control, ticketing governance, and leadership telemetry."
  }
};

type IranPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function IranPaymentGatewayPage({ params }: IranPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(248,113,113,0.18),transparent_55%),radial-gradient(circle_at_65%_80%,rgba(190,242,100,0.15),transparent_55%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Ways to accept payments · Iran (IR)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Iran MLM payment gateways aligned to modern compliance and AI telemetry
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software keeps the WordPress promise—“Ways to accept payments from MLM Software in People’s
                Democratic Republic of Iran – IR”—while orchestrating a professional, corporate launch motion.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-950 hover:bg-slate-200">
                <Link href={contactHref}>
                  Engage the Tehran command centre
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  View the Iran demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold">{pillar.title}</h2>
                      <p className="text-sm text-white/70">{pillar.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-border/50 bg-muted/60 p-8 dark:border-white/10 dark:bg-slate-950">
            <div className="flex items-center gap-3">
              <Factory className="h-10 w-10 text-primary dark:text-white" aria-hidden />
              <div>
                <h2 className="text-lg font-semibold text-foreground dark:text-white">
                  Payment experiences engineered for Iran’s industrial backbone
                </h2>
                <p className="text-sm text-muted-foreground dark:text-white/70">
                  Manufacturing, energy, and knowledge economy partners align in one launch programme anchored by AI
                  telemetry and compliance.
                </p>
              </div>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground dark:text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary dark:bg-white" aria-hidden />
                <span>Field enablement dashboards show Tehran, Mashhad, and Isfahan milestones in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary dark:bg-white" aria-hidden />
                <span>Compliance cockpit captures sanctions diligence, PSP audits, and tax artefacts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary dark:bg-white" aria-hidden />
                <span>AI assistants brief executives with daily payment, support, and enablement insights.</span>
              </li>
            </ul>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {GATEWAY_STORIES.map((story) => {
              const Icon = story.icon;
              return (
                <article
                  key={story.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{story.name}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{story.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {story.bullets.map((bullet) => (
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
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950">
        <div className="container space-y-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Programme cadence grounded in Iranian leadership rituals
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                The roadmap transforms the WordPress article into a reliable, AI-rich launch sequence with clear
                governance.
              </p>
            </div>
            <div className="grid gap-6">
              {PROGRAMME.map((item) => (
                <article
                  key={item.step}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      Stage {item.step}
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Regulatory ensemble",
                copy:
                  "Ticket system module orchestrates sanction checks, PSP documentation, and board approvals with auditable granularity.",
                icon: ShieldCheck
              },
              {
                title: "AI enablement",
                copy:
                  "Predictive analytics forecast conversion, churn, and liquidity, giving executives early warning signals.",
                icon: Lightning
              },
              {
                title: "Communication velocity",
                copy:
                  "Emails and auto responder modules ensure Persian and English updates reach every stakeholder instantly.",
                icon: Megaphone
              },
              {
                title: "Partner orchestration",
                copy:
                  "CirclesThreePlus collaboration spaces connect compliance, finance, and field leaders for rapid decision making.",
                icon: CirclesThreePlus
              },
              {
                title: "Treasury oversight",
                copy:
                  "Currency analytics reconcile IRR exposure against EUR, USD, and AED flows with automated variance alerts.",
                icon: CurrencyCircleDollar
              },
              {
                title: "Experience governance",
                copy:
                  "Maps of distributor journeys link ticket outcomes, AI insights, and gateway telemetry to leadership dashboards.",
                icon: MapTrifold
              }
            ].map(({ title, copy, icon: Icon }) => (
              <article key={title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Payment gateways for MLM Software by country or region
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            The original article highlighted global coverage. We preserve that lens so Iranian leadership can benchmark
            and scale responsibly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REGION_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.region}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{card.region}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-12 text-white shadow-xl">
          <div className="pointer-events-none absolute -top-32 left-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 right-10 h-64 w-64 rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="relative space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Lead Iran’s payment innovation narrative
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              Keep the heritage copy intact and elevate it for SEO and AI discovery. Cloud MLM Software transforms the
              Iran payment gateway roster into a disciplined, insight-rich programme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-950 hover:bg-slate-200">
                <Link href={pricingHref}>
                  Review Iran pricing
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
