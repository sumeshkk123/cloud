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
  ChartLine,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  CurrencyJpy,
  EnvelopeSimple,
  GlobeHemisphereEast,
  Handshake,
  HardDrives,
  IdentificationBadge,
  Lightning,
  MapTrifold,
  Plugs,
  ShieldCheck,
  StackSimple,
  Ticket,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  title: string;
  description: string;
  icon: IconType;
};

type Region = {
  name: string;
  description: string;
  icon: IconType;
};

type Stage = {
  step: string;
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Gateway availability",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout – exactly the lineup cited in the legacy WordPress article.",
    icon: CreditCard
  },
  {
    title: "Operational modules",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and the multi-lingual system stay orchestrated together.",
    icon: StackSimple
  },
  {
    title: "Regional awareness",
    description:
      "Japan anchors the Asia cohort while we maintain the continental view highlighted in the source page: Africa, Europe, North America, Oceania, and South America.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal cross-border launchpad",
    summary: "Respect the original “Ways to accept payments” promise while modernising diaspora journeys.",
    bullets: [
      "Multi currency module governs JP¥, USD, and EUR routing before settlements reach treasury.",
      "Ticket system module tracks refund, AML, and dispute workflows so finance teams stay audit-ready."
    ],
    icon: GlobeHemisphereEast
  },
  {
    name: "Amazon Pay domestic trust",
    summary: "Match Japanese customer expectations with familiar one-click experiences and smart retries.",
    bullets: [
      "Auto responder confirms kit purchases instantly, mirroring the responsiveness described in the legacy content.",
      "Backup manager snapshots promotion campaigns to protect continuity during seasonal spikes."
    ],
    icon: ShieldCheck
  },
  {
    name: "PayU expansion bridge",
    summary: "Unlock regional wallet preferences while keeping leadership visibility on conversion health.",
    bullets: [
      "Emails module delivers policy updates in Japanese and English from the same governed templates.",
      "KYC documentation workflows bind PayU onboarding artefacts with distributor profiles."
    ],
    icon: UsersThree
  },
  {
    name: "Stripe experimentation hub",
    summary: "Prototype subscription bundles, AI add-ons, and training kits without disrupting scale.",
    bullets: [
      "Webhook telemetry flows into analytics so growth teams spot conversion stories early.",
      "Ticket system module routes technical incidents to engineering pods with SLA timers."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net compliance lane",
    summary: "Bring traditional acquiring partners into the AI-enabled operating rhythm.",
    bullets: [
      "KYC documentation module keeps agent paperwork and banking evidence in one governed vault.",
      "Multi-lingual system shares compliance reminders with headquarters and field teams simultaneously."
    ],
    icon: IdentificationBadge
  },
  {
    name: "Braintree modular commerce",
    summary: "Tokenised payments for Japan’s omnichannel distributors and hybrid events.",
    bullets: [
      "E-wallet balances fund instant bonuses while e-voucher codes power retail pop-ups.",
      "Backup manager and emails module announce failover testing to stakeholders without manual busywork."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Consolidate global and domestic processing with precise governance.",
    bullets: [
      "Multi currency module reconciles multi-region settlements back into yen ledgers.",
      "Ticket system escalations include Adyen risk signals, providing the audit clarity regulators expect."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "2Checkout partner acceleration",
    summary: "Expand digital catalogue reach while securing recurring revenue streams.",
    bullets: [
      "Auto responder sequences nurture new partners with welcome packs and compliance checklists.",
      "Emails module delivers monthly performance snapshots directly to field leadership."
    ],
    icon: Handshake
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency module",
    description: "Balance yen, dollar, and euro settlements so finance can forecast incentives with confidence.",
    icon: CurrencyJpy
  },
  {
    title: "Ticket system module",
    description: "Route payment, compliance, and support cases with SLA reporting that matches Japanese expectations.",
    icon: Ticket
  },
  {
    title: "Auto responder",
    description: "Deliver instant confirmations and policy nudges in both Japanese and English without manual edits.",
    icon: Lightning
  },
  {
    title: "E-Voucher",
    description: "Distribute launch coupons and event passes while tracking redemption telemetry inside the platform.",
    icon: StackSimple
  },
  {
    title: "E-Wallet",
    description: "Empower real-time commissions and kit reimbursements with secure approval flows.",
    icon: Wallet
  },
  {
    title: "Backup Manager",
    description: "Protect storefront, payout, and compliance data so promotions keep running even during infra events.",
    icon: HardDrives
  },
  {
    title: "Emails",
    description: "Centralise broadcast and transactional messaging with deliverability and compliance controls.",
    icon: EnvelopeSimple
  },
  {
    title: "KYC Documentation",
    description: "Collect identification artefacts once and reuse them across gateways, auditors, and banking partners.",
    icon: IdentificationBadge
  },
  {
    title: "Multi-Lingual system",
    description: "Synchronise Japanese, English, and additional language assets for leadership, partners, and AI chatbots.",
    icon: GlobeHemisphereEast
  }
];

const REGIONS: Region[] = [
  {
    name: "Asia",
    description: "Japan leads the Asia cohort with localisation, compliance, and velocity tuned for JP market signals.",
    icon: MapTrifold
  },
  {
    name: "Africa",
    description:
      "Regional oversight mirrors the WordPress listing, enabling leaders to benchmark JP performance against African programmes.",
    icon: Compass
  },
  {
    name: "Europe",
    description: "Gateway dashboards compare EU-direct sales with Japan’s hybrid models to surface cross-region learnings.",
    icon: GlobeHemisphereEast
  },
  {
    name: "North America",
    description: "Telemetry links US and Canadian partner journeys with the Japanese growth pipeline for diaspora expansion.",
    icon: ChartLine
  },
  {
    name: "Oceania",
    description: "Shared governance across Oceania ensures JP promotions translate cleanly into Pacific markets.",
    icon: UsersThree
  },
  {
    name: "South America",
    description:
      "Leadership can trace performance between Japan and LATAM launches, repurposing playbooks without rework.",
    icon: Handshake
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Align with the source checklist",
    detail:
      "We start by honouring the legacy content: the gateway list, “Ways to accept payments” statement, and module roster become the blueprint.",
    icon: MapTrifold
  },
  {
    step: "02",
    title: "Instrument the platform",
    detail:
      "Multi currency, ticket system, auto responder, e-wallet, e-voucher, backup, emails, KYC, and multi-lingual systems are configured together.",
    icon: Plugs
  },
  {
    step: "03",
    title: "Activate the gateways",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout run through sandbox, compliance, and field testing.",
    icon: ShieldCheck
  },
  {
    step: "04",
    title: "Optimise for leadership insight",
    detail:
      "Dashboards, automated emails, and ticket analytics surface the performance stories executives expect from a thought leader.",
    icon: ChartLine
  }
];

export const metadata: Metadata = {
  title: "Japan MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform the Japan WordPress payment gateway checklist—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, 2Checkout—into an AI-ready launch built on Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/japan"
  },
  openGraph: {
    title: "Japan MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Japan (JP) reimagined with multi currency, ticketing, automation, and governance."
  }
};

type JapanPageProps = {
  params: { lang: SupportedLocale };
};

export default function JapanPaymentGatewayPage({ params }: JapanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/10 via-slate-500/10 to-slate-900/10 dark:from-red-500/20 dark:via-slate-900/40 dark:to-black/60" />
        <div className="pointer-events-none absolute -left-28 -top-32 h-64 w-64 rounded-full bg-white/25 blur-3xl dark:bg-red-500/25" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/25" />

        <div className="container relative grid gap-16 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80">
              Ways to accept payments · Japan (JP)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Japan MLM payment gateways, ready for AI-first operations
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Cloud MLM Software has already built great systems for the greatest companies. We preserve the WordPress
                promise—“Ways to accept payments from MLM Software in People’s Democratic Republic of Japan – JP”—and
                translate it into a corporate, AI-ready launch motion.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with the Tokyo pod
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>
                  Preview the Japan demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            {HERO_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-border/60 bg-background/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{card.title}</h2>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway stories crafted for Japan’s corporate field teams
          </h2>
          <p className="text-sm text-muted-foreground">
            Each connector listed on the WordPress export receives a refreshed narrative that blends automation,
            compliance, and leadership reporting—ensuring Japan operates as a thought leader in MLM software.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-muted/40 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/50 py-20 dark:bg-slate-950">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Modules from the legacy page, converged into an AI-enabled stack
            </h2>
            <p className="text-sm text-muted-foreground">
              We lift every module name straight from the WordPress navigation and coordinate them so Japanese
              leadership can orchestrate payment experiences end-to-end.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Payment gateways for MLM Software by country or region
          </h2>
          <p className="text-sm text-muted-foreground">
            The source page listed every continent. We keep that regional awareness so Japan’s leadership can benchmark
            strategies and share playbooks globally.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((region) => {
            const Icon = region.icon;
            return (
              <article
                key={region.name}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{region.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{region.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Four-stage programme for Japan’s payment evolution
            </h2>
            <p className="text-sm text-white/70">
              Every milestone reflects the WordPress page, now strengthened with AI guidance and executive-ready
              reporting.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.step}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                      Stage {stage.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{stage.title}</h3>
                  <p className="text-sm text-white/75">{stage.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative isolate overflow-hidden rounded-3xl border border-border/60 bg-background/90 p-10 shadow-lg dark:border-white/10 dark:bg-white/5 md:p-16">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rotate-12 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
          <div className="relative space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to lead Japan’s payment narrative?
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Keep the heritage text alive while elevating it for SEO and AI discovery. Cloud MLM Software turns Japan’s
              gateway roster into a disciplined, insight-rich programme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review pricing for Japan
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
