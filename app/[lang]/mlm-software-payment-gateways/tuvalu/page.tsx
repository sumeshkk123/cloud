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
  AnchorSimple,
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

type HeroBullet = {
  title: string;
  copy: string;
};

type ExecutiveCard = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewayCard = {
  name: string;
  narrative: string;
  highlights: string[];
  icon: IconType;
};

type ModuleCard = {
  name: string;
  detail: string;
  icon: IconType;
};

type TimelineCard = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

const HERO_BULLETS: HeroBullet[] = [
  {
    title: "Atoll-aware orchestration",
    copy: "Built for Funafuti headquarters, Nukufetau operations, and diaspora leadership across Suva and Auckland."
  },
  {
    title: "Gateway roster honoured",
    copy: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay at the centre."
  },
  {
    title: "AI telemetry embedded",
    copy: "Compliance, treasury, and distributor sentiment surface together for board-ready reporting."
  }
];

const EXECUTIVE_CARDS: ExecutiveCard[] = [
  {
    heading: "Legacy promise preserved",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tuvalu - TV remains the anchor phrase across the experience.",
    icon: StackSimple
  },
  {
    heading: "Regulatory assurance",
    description:
      "Reserve Bank of Tuvalu guidance, AML expectations, and cross-border controls are embedded with audit trails.",
    icon: ShieldCheck
  },
  {
    heading: "Diaspora alignment",
    description:
      "Leaders in Suva, Auckland, and Sydney view settlement pacing, FX exposure, and campaign traction from the same dashboards.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_CARDS: GatewayCard[] = [
  {
    name: "PayPal diaspora corridor",
    narrative: "Connect Tuvalu leadership with communities across the Pacific and beyond.",
    highlights: [
      "Multi currency module balances AUD, NZD, USD, and FJD with treasury variance monitoring.",
      "Ticket system module orchestrates AML, dispute, and refund escalations with AI-generated summaries."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    narrative: "Blend ecommerce-grade experience with island-tailored communication.",
    highlights: [
      "Auto responder delivers bilingual confirmations and nurture flows across English and Tuvaluan journeys.",
      "Backup manager snapshots promotional funnels before seasonal surges or ferry schedules."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional bridge",
    narrative: "Unlock payments across Pacific and Asian corridors without losing compliance oversight.",
    highlights: [
      "Emails module keeps finance, compliance, and operations aligned on PSP notices and settlement timing.",
      "KYC documentation vault tracks identity, residency, and beneficial ownership evidence with expiry alerts."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    narrative: "Prototype AI concierge, subscription programmes, and digital kits with instrumentation.",
    highlights: [
      "Multi-Lingual system synchronises English and Tuvaluan experiences across web, mobile, and chatbots.",
      "Ticket system creates shared workstreams for engineering, marketing, and compliance sign-off."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    narrative: "Blend North American expectations with Tuvalu regulatory narratives for investors.",
    highlights: [
      "Multi currency module reconciles USD settlements with domestic banking partners and CFO dashboards.",
      "KYC documentation keeps sanction screening, PEP monitoring, and due diligence dossiers inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    narrative: "Tokenise field sales, remote enrollments, and wellness programmes without losing visibility.",
    highlights: [
      "E-wallet module streams instant commissions with maker-checker controls for leadership tiers.",
      "Backup manager preserves offline transactions when connectivity fluctuates between islands."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    narrative: "Monitor conversion, fraud, and settlement pacing across Australia, New Zealand, and Europe.",
    highlights: [
      "Multi currency dashboards surface FX exposure and scheme performance for board reviews.",
      "Emails module distributes PSD2, SCA, and scheme updates with read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    narrative: "Launch digital services, AI enablement, and training resources with tax-ready narratives.",
    highlights: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance.",
      "Multi-Lingual messaging keeps Tuvalu communities and diaspora aligned with Funafuti headquarters."
    ],
    icon: UsersThree
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    detail: "Balances AUD, NZD, USD, FJD, and Tuvaluan dollar receivables with treasury forecasting.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    detail: "Creates SLA-backed queues for PSP escalations, distributor support, and compliance verifications.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    detail: "Delivers English and Tuvaluan confirmations, prompts, and nurture flows tuned to island rhythms.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    detail: "Issues incentive codes for launch events, training, and loyalty programmes with approval trails.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    detail: "Streams commissions and reimbursements with maker-checker guardrails for senior ranks.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    detail: "Preserves funnels, automations, and payout rules before deployments or connectivity-sensitive launches.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    detail: "Schedules investor updates, compliance notices, and leadership digests with deliverability tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    detail: "Maintains ID, residency, and due diligence records with automated expiry alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    detail: "Aligns English and Tuvaluan messaging across web, mobile, and AI assistants.",
    icon: GlobeHemisphereWest
  }
];

const TIMELINE_CARDS: TimelineCard[] = [
  {
    step: "Stage 01",
    title: "Heritage capture",
    description:
      "Document WordPress copy, navigation promises, and gateway lists so the new build honours every commitment.",
    icon: StackSimple
  },
  {
    step: "Stage 02",
    title: "Compliance rehearsal",
    description:
      "Mirror gateway data in sandbox environments so finance and compliance leaders validate reconciliation and AML controls.",
    icon: ShieldCheck
  },
  {
    step: "Stage 03",
    title: "Field enablement",
    description:
      "Provide AI-guided playbooks, offline aids, and escalation routes for Funafuti, Nukufetau, and remote teams.",
    icon: Sparkle
  },
  {
    step: "Stage 04",
    title: "Executive telemetry",
    description:
      "Launch dashboards covering conversion, FX exposure, dispute ratios, and sentiment for board and investor updates.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Tuvalu MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise Tuvalu&apos;s MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/tuvalu"
  },
  openGraph: {
    title: "Tuvalu MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tuvalu - TV, reimagined for atoll leadership, investors, and distributors."
  }
};

type TuvaluPageProps = {
  params: { lang: SupportedLocale };
};

export default function TuvaluPaymentGatewayPage({ params }: TuvaluPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-200 via-white to-emerald-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-white/20 dark:bg-white/10 dark:text-white/70">
              Tuvalu | Payment Navigation
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
                Tuvalu MLM payment gateways engineered for atoll realities
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software turns Tuvalu&apos;s WordPress legacy into an AI-assisted control tower that respects
                inter-atoll connectivity, diaspora expectations, and investor-grade compliance.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_BULLETS.map((bullet) => (
                <article
                  key={bullet.title}
                  className="rounded-3xl border border-sky-500/20 bg-white/85 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/10"
                >
                  <h2 className="text-sm font-semibold text-foreground dark:text-white">{bullet.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{bullet.copy}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a Tuvalu strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>Explore the live platform</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-sky-500/20 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-white/70">
              Legacy anchor
            </p>
            <p className="text-base text-foreground dark:text-white">
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tuvalu - TV
            </p>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              The navigation flow, gateway roster, and module references stay untouched. We wrap them with compliance
              telemetry, AI insights, and investor-ready narratives without altering the original wording.
            </p>
            <Button asChild variant="secondary" size="lg" className="w-full gap-2">
              <Link href={pricingHref}>
                Review pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Executive signals guiding Tuvalu&apos;s payment transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Board members, regulators, and field leaders gain the clarity they need while the original narrative stays
            recognisable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXECUTIVE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.heading}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{card.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Gateway roster with AI-ready storytelling
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout keep their WordPress
              promise while gaining the instrumentation Tuvalu&apos;s leadership expects.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{card.name}</h3>
                      <p className="mt-1 text-sm text-white/80">{card.narrative}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {card.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Modules from navigation now operate as one control tower
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Multi currency, ticketing, auto responder, vouchers, wallet, backup manager, emails, KYC, and multi-lingual
            capabilities collaborate with full audit visibility.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {MODULE_CARDS.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{module.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Timeline that keeps Tuvalu&apos;s leadership confident
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each stage ships tangible evidence—heritage documentation, compliance rehearsals, field enablement assets,
              and executive dashboards—so the board can sign off with certainty.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TIMELINE_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.step}
                  className="rounded-3xl border border-sky-500/20 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-white/60">
                        {card.step}
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{card.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{card.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-sky-100 via-white to-emerald-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Tuvalu&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour the original WordPress narrative while equipping executives, investors, and distributors with
              AI-backed insight across every payment promise.
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

