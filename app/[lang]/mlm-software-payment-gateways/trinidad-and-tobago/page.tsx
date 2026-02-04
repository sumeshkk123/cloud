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
  AirplaneTilt,
  AnchorSimple,
  Buildings,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Lightning,
  MapTrifold,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  title: string;
  description: string;
};

type ExecutiveLens = {
  heading: string;
  detail: string;
  icon: IconType;
};

type GatewaySquad = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleMosaic = {
  name: string;
  overview: string;
  icon: IconType;
};

type DeliveryLoop = {
  stage: string;
  headline: string;
  description: string;
  icon: IconType;
};

type RegionalPulse = {
  corridor: string;
  narrative: string;
  icon: IconType;
};

const HERO_BADGES: HeroBadge[] = [
  {
    title: "Twin-island vision",
    description: "Built for Port of Spain headquarters, San Fernando operations, and Tobago digital innovators."
  },
  {
    title: "Gateway roster preserved",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay in place."
  },
  {
    title: "AI telemetry embedded",
    description: "Compliance narratives, FX health, and distributor sentiment ready for executive review."
  }
];

const EXECUTIVE_LENSES: ExecutiveLens[] = [
  {
    heading: "Legacy storyline intact",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Trinidad and Tobago - TT remains the anchor language across the experience.",
    icon: StackSimple
  },
  {
    heading: "Regulated resilience",
    detail:
      "Central Bank of Trinidad and Tobago, FIU, and cross-border AML expectations are embedded through automated trails and maker-checker controls.",
    icon: ShieldCheck
  },
  {
    heading: "Diaspora synchronisation",
    detail:
      "Leaders in New York, Toronto, and London view settlement pacing, campaign results, and compliance posture in the same command centre.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_SQUADS: GatewaySquad[] = [
  {
    name: "PayPal diaspora lane",
    summary: "Serve Trinidadian and Tobagonian leaders across North America and the UK.",
    bullets: [
      "Multi currency module balances TTD, USD, CAD, and GBP with treasury-ready variance reports.",
      "Ticket system module collates AML, dispute, and refund escalations with AI-generated summaries."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail orbit",
    summary: "Blend ecommerce-grade checkouts with high-touch distributor messaging.",
    bullets: [
      "Auto responder orchestrates bilingual confirmations and nurture flows across the islands.",
      "Backup manager snapshots promotional funnels before Carnival, Diwali, and seasonal surges."
    ],
    icon: Sparkle
  },
  {
    name: "PayU Caribbean bridge",
    summary: "Unlock regional corridors while maintaining Trinidad and Tobago compliance posture.",
    bullets: [
      "Emails module keeps finance, compliance, and operations aligned on PSP notices and settlement timing.",
      "KYC documentation vault maintains IDs, business registrations, and beneficial ownership records."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge, subscription kits, and digital experiences with instrumentation.",
    bullets: [
      "Multi-Lingual system synchronises English and Spanish narratives across web, mobile, and chatbots.",
      "Ticket system routes engineering, marketing, and compliance collaboration with audit history."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Blend US expectations with Trinidad and Tobago regulatory oversight for investors.",
    bullets: [
      "Multi currency module reconciles USD settlements with local banking partners and CFO dashboards.",
      "KYC documentation tracks sanction screening, PEP monitoring, and due diligence updates."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    summary: "Tokenise field sales, pop-up experiences, and wellness programmes without losing clarity.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker logic for leadership tiers.",
      "Backup manager preserves offline transactions when connectivity fluctuates between islands."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    summary: "Monitor conversion, fraud, and FX exposure across Europe and the Caribbean from one view.",
    bullets: [
      "Multi currency dashboards surface FX risk, scheme performance, and settlement pacing for board reviews.",
      "Emails module delivers PSD2, SCA, and scheme updates with read receipts for compliance assurance."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch digital products, training, and AI enablement with tax-ready stories.",
    bullets: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance.",
      "Multi-Lingual orchestrations keep diaspora communities aligned with headquarters messaging."
    ],
    icon: UsersThree
  }
];

const MODULE_MOSAIC: ModuleMosaic[] = [
  {
    name: "Multi currency module",
    overview: "Balances TTD, USD, CAD, GBP, and EUR with treasury variance, forecast, and reconciliation packs.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    overview: "Creates shared queues for PSP escalations, distributor support, and compliance verifications.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    overview: "Delivers bilingual confirmations, webinar invites, and compliance prompts tuned to island schedules.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    overview: "Issues incentive codes for Carnival activations, product launches, and loyalty programmes with approvals.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    overview: "Streams commissions, reimbursements, and bonuses with maker-checker guardrails for sensitive tiers.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    overview: "Safeguards funnels, automations, and payout rules before releases or campaign shifts.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    overview: "Schedules investor digests, compliance notices, and leadership summaries with tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    overview: "Maintains national IDs, proof-of-address, and beneficial ownership records with automated expiry alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    overview: "Aligns English and Spanish experiences across web, mobile, and AI-powered concierge touchpoints.",
    icon: GlobeHemisphereWest
  }
];

const DELIVERY_LOOPS: DeliveryLoop[] = [
  {
    stage: "Loop 01",
    headline: "Heritage catalogue",
    description:
      "Document navigation, copy, and module references from the WordPress build so stakeholders recognise every promise.",
    icon: StackSimple
  },
  {
    stage: "Loop 02",
    headline: "Compliance rehearsal",
    description:
      "Mirror PSP data in sandbox environments so FIU, compliance, and finance leaders validate settlements and AML controls.",
    icon: ShieldCheck
  },
  {
    stage: "Loop 03",
    headline: "Field activation",
    description:
      "Deliver AI-guided playbooks, offline aids, and escalation routes for Trinidad and Tobago distributor teams.",
    icon: AirplaneTilt
  },
  {
    stage: "Loop 04",
    headline: "Executive telemetry",
    description:
      "Launch dashboards that track conversion, FX exposure, dispute ratios, and sentiment for board updates.",
    icon: Lightning
  }
];

const REGIONAL_PULSES: RegionalPulse[] = [
  {
    corridor: "Caribbean collaboration",
    narrative:
      "Shares compliance and PSP benchmarks with Jamaica, Barbados, and Bahamas programmes to drive regional excellence.",
    icon: MapTrifold
  },
  {
    corridor: "North American investors",
    narrative:
      "Keeps New York, Toronto, and Miami stakeholders aligned on Authorize.Net and PayPal performance signals.",
    icon: Buildings
  },
  {
    corridor: "European corridors",
    narrative:
      "Delivers Adyen, PSD2, and SCA updates to London and Amsterdam teams with executive-ready summaries.",
    icon: Compass
  },
  {
    corridor: "Latin American expansion",
    narrative:
      "Tracks PayU and Stripe performance across Panama, Colombia, and Costa Rica corridors for future growth decisions.",
    icon: GlobeHemisphereWest
  }
];

export const metadata: Metadata = {
  title: "Trinidad and Tobago MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Trinidad and Tobago&apos;s MLM payment gateways with AI telemetry, diaspora insight, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/trinidad-and-tobago"
  },
  openGraph: {
    title: "Trinidad and Tobago MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Trinidad and Tobago - TT, now refactored for compliance, treasury, and distributor confidence."
  }
};

type TrinidadAndTobagoPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function TrinidadAndTobagoPaymentGatewayPage({ params }: TrinidadAndTobagoPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(239,68,68,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.3),transparent_60%)]" />
        <div className="container relative space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
                Trinidad &amp; Tobago | Payment Intelligence
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Trinidad and Tobago MLM payment gateways orchestrated for twin-island scale
                </h1>
                <p className="max-w-3xl text-base text-white/80">
                  Cloud MLM Software translates the WordPress legacy into an AI-ready operating system that unifies
                  compliance, treasury, investors, and distributor journeys across Trinidad and Tobago.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {HERO_BADGES.map((badge) => (
                  <article
                    key={badge.title}
                    className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                  >
                    <h2 className="text-sm font-semibold text-white">{badge.title}</h2>
                    <p className="mt-3 text-sm text-white/80">{badge.description}</p>
                  </article>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-rose-900 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Schedule a Trinidad &amp; Tobago strategy session
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                  <Link href={demoHref}>Explore the live platform</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-lg backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Legacy anchor</p>
              <p className="text-base text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Trinidad and Tobago - TT
              </p>
              <p className="text-sm text-white/80">
                Navigation promises, gateway rosters, and module references remain untouched. We enrich them with
                compliance telemetry, performance dashboards, and AI insights that leadership can interrogate in real
                time.
              </p>
              <Button asChild variant="secondary" size="lg" className="w-full gap-2 bg-white/10 text-white">
                <Link href={pricingHref}>
                  Review pricing frameworks
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Executive lenses driving the transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Trinidad and Tobago&apos;s leadership stays rooted in the original narrative while gaining data-backed
            telemetry for investors, regulators, and field operations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXECUTIVE_LENSES.map((lens) => {
            const Icon = lens.icon;
            return (
              <article
                key={lens.heading}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{lens.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{lens.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:items-start">
            <div className="space-y-6 rounded-3xl border border-rose-500/30 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:text-white/70">
                Gateway roster
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                How each payment connector now performs in the new operating system
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout keep their original
                promise. We map the supporting modules and evidence that make them board-ready.
              </p>
              <ul className="grid gap-2 text-sm text-foreground/80 dark:text-white/80 sm:grid-cols-2">
                <li>PayPal</li>
                <li>Amazon Pay</li>
                <li>PayU</li>
                <li>Stripe</li>
                <li>Authorize.Net</li>
                <li>Braintree</li>
                <li>Adyen</li>
                <li>2Checkout</li>
              </ul>
            </div>
            <div className="grid gap-6">
              {GATEWAY_SQUADS.map((squad) => {
                const Icon = squad.icon;
                return (
                  <article
                    key={squad.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{squad.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{squad.summary}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 pl-2">
                      {squad.bullets.map((item) => (
                        <li
                          key={item}
                          className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Modules from the navigation now work together as one command centre
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Multi currency, ticketing, automation, vouchers, wallet, backup manager, emails, KYC, and multi-lingual
            capabilities operate inside the same workspace so finance, compliance, and field leaders stay aligned.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {MODULE_MOSAIC.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{module.overview}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(14,165,233,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Delivery loops that keep Trinidad and Tobago&apos;s leadership in step
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Every loop produces tangible artefacts—heritage maps, compliance rehearsals, field enablement kits, and
              executive dashboards—ensuring confidence before go-live.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {DELIVERY_LOOPS.map((loop) => {
              const Icon = loop.icon;
              return (
                <article
                  key={loop.stage}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {loop.stage}
                      </span>
                      <h3 className="text-base font-semibold">{loop.headline}</h3>
                      <p className="text-sm text-white/80">{loop.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Regional pulses that extend Trinidad and Tobago&apos;s influence
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The AI-ready operating system shares insights with regional partners, diaspora investors, and new corridors
            without losing the heritage storyline.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REGIONAL_PULSES.map((pulse) => {
            const Icon = pulse.icon;
            return (
              <article
                key={pulse.corridor}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{pulse.corridor}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{pulse.narrative}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-rose-100 via-white to-slate-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Trinidad and Tobago&apos;s payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour the original WordPress narrative while giving executives, investors, and distributors an AI-assisted
              command centre for every payment promise.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Talk to a strategist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href={demoHref}>See a guided demo</Link>
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

