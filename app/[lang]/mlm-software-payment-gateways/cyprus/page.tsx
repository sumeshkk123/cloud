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
  Building2,
  CircleDollarSign,
  Flag,
  Flame,
  Layers3,
  MapPin,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Bank,
  ChatCircleDots,
  ClipboardText,
  GearSix,
  GlobeHemisphereEast,
  Leaf,
  Lightning,
  LockSimple,
  Plugs
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  statement: string;
  bullets: string[];
  icon: IconType;
};

type ServiceSlice = {
  name: string;
  copy: string;
};

type RoadmapMilestone = {
  name: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_STATS: HeroStat[] = [
  {
    title: "Gateway roster",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Direct continuation of the Cyprus payment article, now orchestrated with telemetry and compliance controls.",
    icon: Layers3
  },
  {
    title: "Currencies supported",
    value: "EUR, GBP, USD",
    description:
      "Multi currency module synchronises Euro-ledgers with UK and US operations for Cypriot distributors abroad.",
    icon: CircleDollarSign
  },
  {
    title: "Market accelerator",
    value: "EU-ready compliance kits",
    description:
      "Ticketing, backup, multilingual, and auto-responder modules create an audit-friendly footprint for European regulators.",
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Multilingual reach",
    detail:
      "Deploy content, ticket replies, and auto-responders in Greek, English, and Russian to mirror Cyprus’ business landscape.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Customer care automation",
    detail:
      "The ticket system module routes support into queues for banking, compliance, and distributor coaching with SLA dashboards.",
    icon: ChatCircleDots
  },
  {
    title: "E-wallet confidence",
    detail:
      "Provide instant access to commissions while the backup manager keeps encrypted replicas for your finance leaders.",
    icon: LockSimple
  },
  {
    title: "Auto responder campaigns",
    detail:
      "Trigger nurture sequences as soon as prospects download documents or engage with your e-commerce storefronts.",
    icon: Lightning
  },
  {
    title: "Eco-conscious operations",
    detail:
      "Cyprus’ sustainable finance initiatives are reflected with paperless statements and digital voucher fulfilment.",
    icon: Leaf
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "PayPal global commerce",
    statement: "Cross-border compliance with instant brand recognition.",
    bullets: [
      "Optimise PSP routing for EU VAT, shared services, and diaspora sales.",
      "Chargeback playbooks tuned for travel, wellness, and digital education products.",
      "Dashboard alerts for FX swings affecting Euro-to-USD conversions."
    ],
    icon: Plugs
  },
  {
    name: "Skrill payout routes",
    statement: "Wallet-first payouts for fast-moving field leadership.",
    bullets: [
      "Weekly, monthly, or milestone triggers tied to compensation plans.",
      "AML monitoring aligned with the ticket module’s documented workflows.",
      "In-app notifications drive adoption and reduce manual finance outreach."
    ],
    icon: Flame
  },
  {
    name: "SecurionPay protection",
    statement: "Secure card acceptance for subscription-heavy product lines.",
    bullets: [
      "3D Secure and fraud scoring tuned for Cypriot banks and telecom performance.",
      "Dynamic routing to alternate acquirers when decline ratios spike.",
      "Telemetry feels like an extension of your existing finance dashboards."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree experimentation",
    statement: "Launch premium bundles and smart upsells rapidly.",
    bullets: [
      "Tokenised payments keep recurring billing frictionless and compliant.",
      "Webhook automation keeps Shopify, Magento, and WooCommerce inventory in sync.",
      "A/B testing instrumentation connects to Cloud MLM Software’s AI assistant."
    ],
    icon: Sparkles
  }
];

const SERVICE_SLICES: ServiceSlice[] = [
  {
    name: "MLM software engineering",
    copy:
      "Build or extend compensation logic, replicated websites, and compliance workflows for Cyprus-based headquarters."
  },
  {
    name: "E-commerce integration",
    copy:
      "Connect WooCommerce, Shopify, Opencart, and Magento with centralised payment policies referenced in the WordPress export."
  },
  {
    name: "Experience and design",
    copy:
      "Corporate websites, landing pages, and multilingual content keep your brand consistent across EU markets."
  },
  {
    name: "Support transformation",
    copy:
      "Ticketing, knowledge bases, and backup routines provide transparency to auditors, banking partners, and field leaders."
  }
];

const ROADMAP: RoadmapMilestone[] = [
  {
    name: "Discovery & context",
    description:
      "Understand compensation mechanics, current PSP stack, and the legacy operational pain points.",
    deliverables: [
      "Stakeholder interviews across finance, operations, and compliance.",
      "Inventory of existing gateways, tickets, and multilingual assets.",
      "Regulatory considerations for CySEC, PSD2, and cross-border sales."
    ],
    icon: Flag
  },
  {
    name: "Platform enablement",
    description:
      "Stand up multi currency, multilingual, ticketing, and auto-responder modules in parallel.",
    deliverables: [
      "Gateway sandbox activation for PayPal, Skrill, SecurionPay, and Braintree.",
      "Data contracts covering e-wallet, e-voucher, and backup manager processes.",
      "IAM and approval workflows for finance and compliance teams."
    ],
    icon: Building2
  },
  {
    name: "Commerce synchronisation",
    description:
      "Align e-commerce storefronts and replicated websites with payment governance.",
    deliverables: [
      "Shopify, Magento, and WooCommerce integration checklists.",
      "Content localisation for Greek, English, and Russian experiences.",
      "Auto-responder sequences tied to onboarding, renewals, and promotions."
    ],
    icon: GearSix
  },
  {
    name: "Optimisation cadence",
    description:
      "Continuous improvement loops keep analytics, compliance, and customer experience in lockstep.",
    deliverables: [
      "Monthly payment telemetry reviews with AI-assisted insights.",
      "Ticket backlog triage and SLA scorecards for leadership.",
      "Backup and incident rehearsal playbooks to maintain resilience."
    ],
    icon: MapPin
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you manage EU compliance requirements for Cyprus?",
    answer:
      "Cloud MLM Software embeds PSD2, AMLD, and CySEC considerations into gateway policies, ticket escalations, and backup documentation so audits move quickly."
  },
  {
    question: "Can we operate multiple currencies simultaneously?",
    answer:
      "Yes. The multi currency module highlighted in the WordPress content lets you run EUR, GBP, and USD ledgers with automated reconciliation and AI-driven variance alerts."
  },
  {
    question: "What happens after the initial launch?",
    answer:
      "We deliver quarterly optimisation reviews, ticket audits, and e-commerce tune-ups to keep Cyprus operations aligned with evolving distributor and regulator expectations."
  }
];

export const metadata: Metadata = {
  title: "Cyprus MLM Payment Gateways | Cloud MLM Software",
  description:
    "Blend PayPal, Skrill, SecurionPay, and Braintree into a Cyprus-ready MLM payment stack. Cloud MLM Software adds multilingual, multi-currency, and compliance automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cyprus"
  },
  openGraph: {
    title: "Cyprus MLM Payment Gateways | Cloud MLM Software",
    description:
      "Design an EU-compliant MLM payment experience for Cyprus with gateway orchestration, multilingual automation, and AI-powered telemetry."
  }
};

type CyprusPageProps = {
  params: { lang: SupportedLocale };
};

export default function CyprusPaymentGatewayPage({ params }: CyprusPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services/mlm-software-development", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Cyprus · Gateway Acceleration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Cypriot MLM payment orchestration built for EU scrutiny
              </h1>
              <p className="max-w-2xl text-base text-white/70">
                We translate the legacy “Ways to accept payments” checklist into an AI-enabled delivery motion.
                Cloud MLM Software unites PayPal, Skrill, SecurionPay, and Braintree while automating the
                multilingual, ticketing, and e-wallet modules referenced in the WordPress export.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Connect with a Cyprus strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Explore the platform</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.title}
                  className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" aria-hidden />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{stat.title}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-white/70">{stat.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Modules upgraded for Cyprus-scale growth
            </h2>
            <p className="text-sm text-muted-foreground">
              Multilingual, ticketing, auto responder, e-wallet, e-voucher, and backup manager capabilities appear
              prominently in the WordPress content. We enrich each with AI-based insights and auditable workflows.
            </p>
            <dl className="grid gap-4 rounded-3xl border border-border/60 bg-muted/40 p-6 shadow-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Key modules</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  Multi currency · Multilingual · Ticket system · Auto responder · E-voucher · E-wallet · Backup manager
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Outcome</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  Cohesive distributor journeys powered by telemetry, compliance, and responsive customer care.
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{pillar.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway plays anchored in the Cyprus WordPress export
          </h2>
          <p className="text-sm text-muted-foreground">
            PayPal, Skrill, SecurionPay, and Braintree remain the cornerstones. We enrich them with clear operating
            procedures, compliance guardrails, and telemetry dashboards.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.name}
                className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border/70 bg-muted/50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-blue-500" />
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{play.name}</h3>
                    <p className="text-sm text-muted-foreground">{play.statement}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {play.bullets.map((bullet) => (
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

      <section className="container space-y-10">
        <div className="grid gap-10 rounded-[2.5rem] border border-border/70 bg-background/90 p-10 shadow-md lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div className="sticky top-6 space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Services paired with your Cyprus launch
            </h2>
            <p className="text-sm text-muted-foreground">
              Every service listed in the WordPress article is part of our delivery POD. We extend each with AI
              automation, compliance documentation, and design accelerators.
            </p>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href={servicesHref}>
                Review available services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6">
            {SERVICE_SLICES.map((slice) => (
              <article key={slice.name} className="rounded-3xl border border-border/60 bg-muted/40 p-6 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">{slice.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{slice.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Roadmap from discovery to optimisation
          </h2>
          <p className="text-sm text-muted-foreground">
            These phases mirror the operational maturity path we deploy for Cyprus-based clients.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {ROADMAP.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{item.name}</span>
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{deliverable}</span>
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
            Cyprus payment FAQs
          </h2>
          <p className="text-sm text-muted-foreground">
            Guidance we share most often with finance, compliance, and technology leaders.
          </p>
        </div>
        <div className="space-y-6">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-border/70 bg-gradient-to-r from-emerald-500/20 via-sky-500/15 to-blue-600/15 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Cyprus-first MLM payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Let’s bring together the gateway strategy, modules, and services showcased in the WordPress article to
                build a resilient AI-ready operation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Start the conversation
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={pricingHref}>Review pricing models</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Support cadence
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Dedicated Cyprus success pod</p>
                </div>
                <Bank className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Finance, compliance, and distributor support leaders gain a single ticket queue and predictive dashboards
                that surface opportunities and risks every week.
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
