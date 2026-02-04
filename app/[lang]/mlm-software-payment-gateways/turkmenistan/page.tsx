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
  GlobeHemisphereEast,
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

type HeroPoint = {
  label: string;
  description: string;
};

type ExecutiveEdge = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayCard = {
  name: string;
  narrative: string;
  highlights: string[];
  icon: IconType;
};

type ModuleItem = {
  name: string;
  summary: string;
  icon: IconType;
};

type TimelineStep = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

const HERO_POINTS: HeroPoint[] = [
  {
    label: "Executive visibility",
    description: "Treasury, compliance, and distributor telemetry converge in one Ashgabat-ready interface."
  },
  {
    label: "Gateway commitments",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain intact."
  },
  {
    label: "Regional reach",
    description: "Serves Ashgabat, Türkmenabat, and Balkanabat leaders while aligning diaspora investors."
  }
];

const EXECUTIVE_EDGES: ExecutiveEdge[] = [
  {
    title: "Legacy promise respected",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Turkmenistan - TM stays the anchor phrase across the experience.",
    icon: StackSimple
  },
  {
    title: "Regulatory assurance",
    detail:
      "Central Bank of Turkmenistan expectations, AML routines, and cross-border compliance are embedded with audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Diaspora clarity",
    detail:
      "Investors in Istanbul, Dubai, and Moscow gain settlement pacing, FX exposure, and distributor sentiment through a single dashboard.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_CARDS: GatewayCard[] = [
  {
    name: "PayPal diaspora corridor",
    narrative: "Connect Ashgabat leadership with global investor communities.",
    highlights: [
      "Multi currency module balances TMT, USD, EUR, and TRY with treasury variance reports.",
      "Ticket system module orchestrates AML, dispute, and refund escalations with AI-generated dossiers."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay customer lane",
    narrative: "Bring ecommerce-grade experience to Turkmenistan&apos;s wellness and education programmes.",
    highlights: [
      "Auto responder delivers bilingual confirmations and nurture flows spanning Turkmen, Russian, and English.",
      "Backup manager snapshots promotional funnels before seasonal campaigns."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional bridge",
    narrative: "Enable Central Asian and Middle Eastern corridors without losing compliance oversight.",
    highlights: [
      "Emails module informs finance and compliance of PSP notices, settlement timing, and performance trends.",
      "KYC documentation vault tracks identity, residency, and beneficial ownership proof with expiry alerts."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    narrative: "Prototype AI concierge, subscription offers, and hybrid events with instrumentation.",
    highlights: [
      "Multi-Lingual system synchronises Turkmen, Russian, and English experiences across web, mobile, and chatbots.",
      "Ticket system creates shared work queues for engineering, marketing, and compliance collaboration."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    narrative: "Blend North American expectations with Turkmen regulatory narratives for investor confidence.",
    highlights: [
      "Multi currency module reconciles USD settlements against local banking partners and CFO dashboards.",
      "KYC documentation keeps sanction screening, PEP monitoring, and merchant onboarding dossiers inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    narrative: "Tokenise field sales, pop-up events, and remote enrollments with clarity.",
    highlights: [
      "E-wallet module streams instant commissions with maker-checker controls for leadership tiers.",
      "Backup manager preserves offline transactions when connectivity fluctuates between regions."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    narrative: "Monitor conversion, fraud, and settlement pacing across EU and MENA corridors from one command centre.",
    highlights: [
      "Multi currency dashboards surface FX exposure, authorisation trends, and scheme performance for board reviews.",
      "Emails module distributes PSD2, SCA, and scheme updates with read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    narrative: "Launch digital resources and AI programmes with tax narratives ready for investors.",
    highlights: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance.",
      "Multi-Lingual messaging keeps diaspora audiences aligned with Ashgabat headquarters."
    ],
    icon: UsersThree
  }
];

const MODULE_ITEMS: ModuleItem[] = [
  {
    name: "Multi currency module",
    summary: "Balances TMT, USD, EUR, RUB, and TRY while forecasting treasury exposure for leadership.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    summary: "Creates SLA-backed queues for PSP escalations, compliance checks, and distributor support.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    summary: "Delivers Turkmen, Russian, and English communications for onboarding, compliance, and nurture journeys.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    summary: "Issues incentive codes for market launches, academies, and loyalty programmes with approval trails.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    summary: "Streams commissions and reimbursements with maker-checker guardrails tailored to Turkmen governance.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    summary: "Preserves automations, payout rules, and AI assets before deployments or regulatory reviews.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    summary: "Schedules investor updates, compliance notices, and leadership digests with deliverability tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    summary: "Maintains ID, residency, and corporate filings with automated expiry alerts and reviewer logs.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    summary: "Aligns Turkmen, Russian, and English messaging across web, mobile, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "Phase 01",
    title: "Heritage capture",
    description:
      "Document WordPress copy, navigation promises, and gateway roster to maintain familiarity and ranking signals.",
    icon: StackSimple
  },
  {
    step: "Phase 02",
    title: "Compliance rehearsal",
    description:
      "Mirror gateway data in sandbox environments so finance and compliance leaders validate reconciliation and AML controls.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    title: "Field empowerment",
    description:
      "Provide AI-guided playbooks, offline aids, and escalation routes for Ashgabat, Türkmenabat, and Balkanabat teams.",
    icon: Sparkle
  },
  {
    step: "Phase 04",
    title: "Executive telemetry",
    description:
      "Launch dashboards covering conversion, FX exposure, dispute ratios, and sentiment for board review.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Turkmenistan MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform Turkmenistan&apos;s MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/turkmenistan"
  },
  openGraph: {
    title: "Turkmenistan MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Turkmenistan - TM, reimagined for regulators, investors, and distributor trust."
  }
};

type TurkmenistanPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function TurkmenistanPaymentGatewayPage({ params }: TurkmenistanPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              Turkmenistan | Payment Reinvention
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Turkmenistan MLM payment gateways orchestrated for compliance and growth
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software elevates Turkmenistan&apos;s WordPress story into an AI-enabled command centre that
                aligns treasury precision, compliance evidence, and distributor trust.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_POINTS.map((point) => (
                <article
                  key={point.label}
                  className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <h2 className="text-sm font-semibold text-white">{point.label}</h2>
                  <p className="mt-3 text-sm text-white/80">{point.description}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a Turkmenistan strategy session
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
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Turkmenistan - TM
            </p>
            <p className="text-sm text-white/80">
              The navigation flow, gateway list, and module references remain untouched. We augment them with compliance
              telemetry, AI insights, and investor-ready storytelling without altering the heritage language.
            </p>
            <Button asChild variant="secondary" size="lg" className="w-full gap-2 bg-white/10 text-white">
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
            Executive edges that keep Turkmenistan&apos;s leadership aligned
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Finance, compliance, and field executives gain clarity without losing the WordPress storyline that built
            stakeholder trust.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXECUTIVE_EDGES.map((edge) => {
            const Icon = edge.icon;
            return (
              <article
                key={edge.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{edge.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{edge.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway roster reimagined with compliance depth
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the official
              connectors—now supported by the modules and telemetry that leadership expects.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{card.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{card.narrative}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {card.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                      >
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
            Modules from navigation unified into a single control tower
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Multi currency, ticketing, automations, vouchers, wallet, backup manager, emails, KYC, and multi-lingual
            capabilities now work together with full audit visibility.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {MODULE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.name}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{item.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{item.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline guiding Turkmenistan&apos;s go-live
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each phase produces tangible artefacts—heritage documentation, compliance rehearsals, field enablement
              kits, and executive dashboards—so every stakeholder signs off with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TIMELINE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.step}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {step.step}
                      </span>
                      <h3 className="text-base font-semibold">{step.title}</h3>
                      <p className="text-sm text-white/80">{step.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Turkmenistan&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour the WordPress legacy while equipping executives, investors, and distributors with AI-supported
              insight across every payment promise.
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
