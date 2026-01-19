import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowUpRight,
  BadgeCheck,
  Globe2,
  LineChart,
  MapPinned,
  ShieldCheck,
  SignalHigh,
  SquareStack,
  Users
} from "lucide-react";
import {
  Bank,
  ChatCentered,
  CurrencyCircleDollar,
  Gear,
  Lightning,
  Plugs,
  Queue,
  Stack,
  TreeStructure
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Module = {
  name: string;
  summary: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Track = {
  title: string;
  description: string;
};

type Phase = {
  stage: string;
  headline: string;
  detail: string;
  bullets: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Gateway lineup",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Matching the legacy page while adding orchestration layers for Congolese and cross-border MLM flows.",
    icon: SquareStack
  },
  {
    label: "Currency strategy",
    value: "CDF & USD duality",
    description:
      "Multi currency module keeps Congolese franc and US dollar wallets balanced with FX guardrails.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Experience layer",
    value: "Multilingual + Ticketing + Auto responder",
    description:
      "Modules highlighted in the WordPress export gain SLA dashboards, AI nudges, and encrypted backups.",
    icon: SignalHigh
  }
];

const MODULES: Module[] = [
  {
    name: "Multilingual enablement",
    summary:
      "Serve distributors in French, Lingala, Swahili, and English across portals, tickets, and automated communications.",
    icon: Globe2
  },
  {
    name: "Ticket system governance",
    summary:
      "Escalate payment, onboarding, and KYC requests with SLA clocks and audit-friendly histories.",
    icon: Queue
  },
  {
    name: "Auto responder journeys",
    summary:
      "Trigger reminders for verification, payout availability, and product launches based on gateway telemetry.",
    icon: ChatCentered
  },
  {
    name: "E-wallet resilience",
    summary:
      "Deliver instant commissions while backup manager snapshots keep sensitive data recoverable.",
    icon: Stack
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora onboarding",
    focus: "Global recruitment and cross-border product sales",
    bullets: [
      "Use PayPal for expatriate leaders while local teams operate in CDF or USD.",
      "Chargeback evidence packs tie into ticket histories for faster resolution.",
      "Telemetry exposes conversion trends between diaspora and in-country campaigns."
    ],
    icon: BadgeCheck
  },
  {
    name: "Skrill payout acceleration",
    focus: "Rapid commissions for mobile-first distributors",
    bullets: [
      "Weekly, milestone, and instant payout cadences that respect liquidity limits.",
      "AML screening and dual approval flows embedded into payout requests.",
      "Notifications via auto responder sequences keep teams updated without manual follow-up."
    ],
    icon: Lightning
  },
  {
    name: "SecurionPay fraud defence",
    focus: "Card security for kit purchases and subscriptions",
    bullets: [
      "Adaptive fraud scoring tuned for Congolese telecom infrastructure.",
      "Fallback routing to protect conversion rates during network instability.",
      "Dashboards surface anomalies so finance teams act before regulators escalate."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation lane",
    focus: "Piloting new bundles and hybrid sales motions",
    bullets: [
      "Tokenised payments enable recurring wellness and digital education offers.",
      "Webhooks align Shopify, WooCommerce, and Magento inventory with payouts.",
      "AI experimentation notes guide leadership decisions on pricing and promos."
    ],
    icon: Plugs
  }
];

const TRACKS: Track[] = [
  {
    title: "MLM software engineering",
    description:
      "Customise compensation logic, genealogy tools, and replicated sites for Congolese field hierarchies."
  },
  {
    title: "E-commerce integration",
    description:
      "WooCommerce, Shopify, Opencart, and Magento connectors ensure storefronts honour payment governance."
  },
  {
    title: "Design & localisation",
    description:
      "Corporate sites, documents, and landing pages deliver culturally relevant messaging across regions."
  },
  {
    title: "Support transformation",
    description:
      "Ticketing, backup routines, and knowledge bases equip teams to satisfy regulators and banking partners."
  }
];

const PHASES: Phase[] = [
  {
    stage: "01",
    headline: "Market immersion",
    detail:
      "Translate the WordPress checklist into on-the-ground requirements for Congolese operations.",
    bullets: [
      "Stakeholder sessions across finance, compliance, and distributor leadership.",
      "Inventory of current payment rails, mobile money partnerships, and ticket workflows.",
      "Risk analysis spanning AML, data residency, and telecom resilience."
    ],
    icon: Users
  },
  {
    stage: "02",
    headline: "Gateway enablement",
    detail:
      "Activate PayPal, Skrill, SecurionPay, and Braintree alongside mandatory modules.",
    bullets: [
      "Configure multi currency, multilingual, ticketing, auto responder, e-wallet, and backup manager modules.",
      "Launch sandbox testing with Congolese scenarios and diaspora transactions.",
      "Set permissions, approvals, and escalation paths for finance and compliance teams."
    ],
    icon: Gear
  },
  {
    stage: "03",
    headline: "Commerce synchronisation",
    detail:
      "Align digital storefronts, replicated sites, and documentation with orchestrated gateways.",
    bullets: [
      "Integrate Shopify, WooCommerce, Magento, and Opencart as cited in the legacy page.",
      "Localise assets for French, Lingala, Swahili, and English audiences.",
      "Link gateway telemetry to nurture campaigns, onboarding flows, and retention programmes."
    ],
    icon: MapPinned
  },
  {
    stage: "04",
    headline: "Optimisation stride",
    detail:
      "Keep the programme ahead of regulators, distributors, and market volatility.",
    bullets: [
      "Monthly telemetry reviews highlight FX exposure, payout tempo, and support health.",
      "Ticket backlog audits inform continuous improvement across pods.",
      "Backup rehearsals and incident response simulations protect business continuity."
    ],
    icon: LineChart
  }
];

const FAQS: FAQ[] = [
  {
    question: "How are Congolese franc and US dollar balances reconciled?",
    answer:
      "The multi currency module manages both currencies with hedging rules, duplicating the module set mentioned in the WordPress article while adding AI variance alerts and treasury reporting."
  },
  {
    question: "Can Cloud MLM Software support mobile money workflows?",
    answer:
      "Yes. Payment telemetry from PayPal, Skrill, and Braintree can be blended with mobile money settlement records, while ticketing and auto responder journeys keep distributors informed."
  },
  {
    question: "What support coverage is available post-launch?",
    answer:
      "Dedicated pods manage tickets, backup exercises, and quarterly optimisation reviews so finance, compliance, and field leaders stay aligned."
  }
];

export const metadata: Metadata = {
  title: "Democratic Republic of the Congo MLM Payment Gateways | Cloud MLM Software",
  description:
    "Launch resilient MLM payment operations in the DRC with Cloud MLM Software. Orchestrate PayPal, Skrill, SecurionPay, and Braintree alongside multilingual and multi-currency automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/democratic-republic-of-the-congo"
  },
  openGraph: {
    title: "DRC MLM Payment Gateways | Cloud MLM Software",
    description:
      "Modernise DRC MLM payment flows with gateway orchestration, multilingual care, and AI-backed optimisation."
  }
};

type DrcPageProps = {
  params: { lang: SupportedLocale };
};

export default function DemocraticRepublicOfTheCongoPaymentGatewayPage({ params }: DrcPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services/mlm-software-development", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-600 to-sky-700 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container relative grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              DRC · Payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                A resilient payment framework for the Democratic Republic of the Congo
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                The WordPress article listed PayPal, Skrill, SecurionPay, Braintree, and foundational modules. We
                transform that list into an AI-ready programme that respects Congolese realities—dual currency, mobile
                adoption, and stringent compliance reviews.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-emerald-800 hover:bg-slate-200">
                <Link href={contactHref}>
                  Start your DRC blueprint
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>See the platform</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.label}
                  className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" aria-hidden />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{stat.label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-white/75">{stat.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Modules from the legacy article, amplified for DRC execution
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticket system, auto responder, e-wallet, e-voucher, and backup manager modules
            now operate as a unified stack with AI insights and compliance artefacts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{module.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{module.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Gateway orchestration
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Payment gateways tuned for Congolese performance
            </h2>
            <p className="text-sm text-muted-foreground">
              The WordPress article listed PayPal, Skrill, SecurionPay, and Braintree. We add compliance workflows,
              telemetry, and AI guidance to each connector so your operations stay resilient.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {GATEWAYS.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.name}
                  className="flex h-full flex-col gap-5 rounded-3xl border border-border/70 bg-muted/40 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                      <p className="text-sm text-muted-foreground">{gateway.focus}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {gateway.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review pricing structures
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href={demoHref}>Schedule a technical demo</Link>
          </Button>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Services aligned with your DRC payment programme
            </h2>
            <p className="text-sm text-white/70">
              Every service noted in the WordPress export—MLM software development, e-commerce integration, website
              design, web development, WooCommerce, Shopify, Magento, Opencart—runs through a single Cloud MLM Software
              delivery pod.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {TRACKS.map((track) => (
              <article key={track.title} className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h3 className="text-base font-semibold">{track.title}</h3>
                <p className="mt-2 text-sm text-white/75">{track.description}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
              <Link href={servicesHref}>
                Explore service catalogue
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four phases to launch and sustain your DRC gateway ecosystem
          </h2>
          <p className="text-sm text-muted-foreground">
            Clear outcomes at every stage keep stakeholders aligned while the platform delivers measurable value.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{phase.stage}</span>
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-foreground">{phase.headline}</h3>
                <p className="text-sm text-muted-foreground">{phase.detail}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Financial controllers, compliance officers, and distributor councils ask these questions most often when
            evolving DRC operations.
          </p>
        </div>
        <div className="space-y-6">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/70 bg-background/90 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-sky-500/15 to-blue-500/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Let’s modernise DRC MLM payment experiences
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software brings together the gateways, modules, and services named in the WordPress archive—
                now fortified with AI insights and proactive customer care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Talk to our strategists
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={pricingHref}>Review pricing tiers</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Support cadence
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Dedicated Congo operations pod</p>
                </div>
                <Bank className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Finance and compliance teams receive a single ticket queue, AI-generated insights, and quarterly drills
                to keep payout operations resilient across the region.
              </p>
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
