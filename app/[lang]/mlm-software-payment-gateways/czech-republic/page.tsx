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
  Building,
  CircleDollarSign,
  Cog,
  Layers,
  Map,
  ShieldCheck,
  Signal,
  TrendingUp
} from "lucide-react";
import {
  Barricade,
  ChatTeardropText,
  Coins,
  Factory,
  GlobeSimple,
  Lightning,
  ListChecks,
  RocketLaunch,
  StackSimple
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type ModuleCard = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayCard = {
  title: string;
  intro: string;
  bullets: string[];
  icon: IconType;
};

type ServiceRow = {
  title: string;
  summary: string;
};

type Step = {
  title: string;
  description: string;
  actions: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Gateway coverage",
    value: "PayPal · Skrill · SecurionPay · Braintree",
    description:
      "Exactly as listed in the Czech Republic WordPress page, now orchestrated with AI telemetry and compliance safeguards.",
    icon: Layers
  },
  {
    label: "Currencies",
    value: "CZK, EUR, USD",
    description:
      "Multi currency module keeps Czech koruna, Euro, and US dollar ledgers reconciled with automated variance alerts.",
    icon: CircleDollarSign
  },
  {
    label: "Experience modules",
    value: "Multilingual, ticketing, auto responder",
    description:
      "Modules highlighted in the legacy article are upgraded with AI prompts, SLA dashboards, and encrypted backup routines.",
    icon: Signal
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multilingual orchestration",
    description:
      "Deliver Czech, English, German, and Slovak experiences across portals, tickets, and automated email journeys.",
    icon: GlobeSimple
  },
  {
    title: "Ticket system precision",
    description:
      "Segment support queues by distributor tier, payment issue, and compliance requirement with SLA tracking.",
    icon: ChatTeardropText
  },
  {
    title: "Auto responder intelligence",
    description:
      "Trigger nurture, onboarding, and retention campaigns based on gateway telemetry and e-commerce behaviour.",
    icon: Lightning
  },
  {
    title: "E-wallet & voucher control",
    description:
      "Provide instant payouts, incentives, and voucher issuance with encrypted backups and maker-checker approvals.",
    icon: Coins
  }
];

const GATEWAYS: GatewayCard[] = [
  {
    title: "PayPal omnichannel acceptance",
    intro: "Anchor Czech and cross-border purchases with PayPal’s trust factor.",
    bullets: [
      "FX routing plans for CZK and EUR settlements aligned with treasury targets.",
      "Chargeback templates referencing wellness, education, and digital product lines.",
      "Telemetry surfaces conversion trends by distributor tier and promotional period."
    ],
    icon: ShieldCheck
  },
  {
    title: "Skrill payout acceleration",
    intro: "Deliver faster commissions to Czech field leaders and European branches.",
    bullets: [
      "Weekly, monthly, and incentive-based disbursement cadences.",
      "AML and KYC checks tied directly into ticket workflows for auditable trails.",
      "Notifications and analytics embedded inside Cloud MLM Software dashboards."
    ],
    icon: Lightning
  },
  {
    title: "SecurionPay fraud defence",
    intro: "Protect card transactions for subscription products and onboarding kits.",
    bullets: [
      "PSD2-ready 3DS flows tuned for Czech telecom performance.",
      "Dynamic routing to backup acquirers when decline rates exceed thresholds.",
      "AI scoring highlights product segments needing pricing or messaging updates."
    ],
    icon: Barricade
  },
  {
    title: "Braintree experimentation lane",
    intro: "Launch new bundles and selling motions without rewriting infrastructure.",
    bullets: [
      "Tokenised payment support for recurring billing and loyalty programmes.",
      "Integration accelerators for Shopify, WooCommerce, and Magento stores.",
      "Experiment tracking with AI recommendations for distributor enablement."
    ],
    icon: RocketLaunch
  }
];

const SERVICES: ServiceRow[] = [
  {
    title: "MLM platform engineering",
    summary:
      "Implement compensation logic, reporting, and distributor tooling tuned for Czech corporate structures."
  },
  {
    title: "E-commerce integration",
    summary:
      "Synchronise WooCommerce, Shopify, Opencart, and Magento with unified payment policies."
  },
  {
    title: "Design & localisation",
    summary:
      "Deliver corporate and replicated sites with messaging tailored for EU and global audiences."
  },
  {
    title: "Support transformation",
    summary:
      "Ticketing, knowledge bases, and backup drills keep auditors and banking partners confident."
  }
];

const STEPS: Step[] = [
  {
    title: "Context alignment",
    description:
      "Translate the WordPress content into actionable requirements for Czech finance, sales, and compliance teams.",
    actions: [
      "Workshops covering compensation, regulatory expectations, and distributor personas.",
      "Audit of existing gateways, tickets, and multilingual assets.",
      "Risk heatmap spanning PSD2, AMLD, and CNB oversight."
    ],
    icon: Map
  },
  {
    title: "Platform activation",
    description:
      "Deploy gateway connectors and modules in parallel with governance and telemetry.",
    actions: [
      "Sandbox activation for PayPal, Skrill, SecurionPay, and Braintree.",
      "Configuration of multi currency, multilingual, ticketing, and auto-responder modules.",
      "IAM policies and approval matrices for finance and compliance leaders."
    ],
    icon: StackSimple
  },
  {
    title: "Commerce synchronisation",
    description:
      "Align e-commerce storefronts, replicated websites, and mobile journeys with payment orchestration.",
    actions: [
      "Integration checklists for Shopify, Magento, and WooCommerce.",
      "Content localisation for Czech, English, German, and Slovak audiences.",
      "Automation linking gateway telemetry to nurture and retention campaigns."
    ],
    icon: Cog
  },
  {
    title: "Optimisation cadence",
    description:
      "Sustain growth with insights, retrospectives, and proactive support improvements.",
    actions: [
      "Monthly telemetry reviews with AI-generated recommendations.",
      "Ticket backlog audits to maintain SLA compliance.",
      "Backup drills and incident simulations protecting payout continuity."
    ],
    icon: TrendingUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "How does Cloud MLM Software manage CZK and EUR simultaneously?",
    answer:
      "The multi currency module highlighted in the WordPress page keeps Czech koruna and Euro ledgers reconciled with automated FX buffers, variance alerts, and treasury dashboards."
  },
  {
    question: "Can we keep ticketing and auto-responder workflows in sync?",
    answer:
      "Yes. Ticket categories, response templates, and SLA milestones inform auto-responder logic so distributors receive proactive updates before escalation is required."
  },
  {
    question: "What visibility do Czech compliance teams receive?",
    answer:
      "Compliance leaders access evidence packs covering gateway decisions, AML checks, backup snapshots, and multilingual communications—all exportable for regulator review."
  }
];

export const metadata: Metadata = {
  title: "Czech Republic MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PayPal, Skrill, SecurionPay, and Braintree for Czech MLM operations. Cloud MLM Software delivers multilingual, multi-currency, and compliance automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/czech-republic"
  },
  openGraph: {
    title: "Czech Republic MLM Payment Gateways",
    description:
      "Build AI-ready Czech MLM payment journeys with Cloud MLM Software’s gateway orchestration, modules, and optimisation cadence."
  }
};

type CzechRepublicPageProps = {
  params: { lang: SupportedLocale };
};

export default function CzechRepublicPaymentGatewayPage({ params }: CzechRepublicPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-200/70 bg-white px-8 py-16 shadow-xl dark:border-slate-700/60 dark:bg-slate-950">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.12),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(22,163,74,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(22,163,74,0.3),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200">
                Czech Republic · Payment gateway evolution
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  A modern blueprint for Czech MLM payment orchestration
                </h1>
                <p className="max-w-2xl text-base text-slate-600 dark:text-slate-200">
                  We convert the legacy “Ways to accept payments” article into a governed, AI-supported experience that
                  blends gateway mastery, multi currency precision, and multilingual engagement for Czech leaders.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Discuss your Czech launch
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800/70"
                >
                  <Link href={demoHref}>Preview the platform</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article
                    key={stat.label}
                    className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-md dark:border-slate-700/60 dark:bg-slate-900/70"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                          {stat.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{stat.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Modules cited in the WordPress export—now AI-enabled
          </h2>
          <p className="text-sm text-muted-foreground">
            Multi currency, multilingual, ticket system, auto responder, e-wallet, e-voucher, and backup manager
            modules are modernised to deliver the governance Czech enterprises require.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MODULE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateway tactics for Czech growth
            </h2>
            <p className="text-sm text-white/70">
              We stay faithful to the WordPress gateway list and add the automation required for EU-grade operations.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {GATEWAYS.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.title}
                  className="flex h-full flex-col gap-5 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{gateway.title}</h3>
                      <p className="text-sm text-white/70">{gateway.intro}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-white/75">
                    {gateway.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-white/70" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Explore pricing options
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/60 text-white hover:bg-white/10">
              <Link href={demoHref}>Request a deep dive</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-[2.5rem] border border-border/70 bg-muted/40 p-10 shadow-md">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Services aligned with Czech enterprise expectations
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Every service mentioned in the WordPress article—MLM software development, e-commerce integration, website
            design, web development, Magento, Shopify, WooCommerce, Opencart—is orchestrated through a single delivery
            pod with AI-driven visibility.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article key={service.title} className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Launch, integrate, and optimise with a clear cadence
          </h2>
          <p className="text-sm text-muted-foreground">
            These phases convert the legacy checklist into a measurable programme, ensuring every stakeholder sees
            progress.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <span>{action}</span>
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
            Frequently asked about Czech MLM payments
          </h2>
          <p className="text-sm text-muted-foreground">
            Concise answers to the questions Czech finance, compliance, and operations teams raise most.
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
        <div className="overflow-hidden rounded-[2.75rem] border border-slate-200/70 bg-gradient-to-r from-emerald-500/20 via-blue-500/15 to-sky-500/15 px-8 py-12 shadow-xl backdrop-blur dark:border-slate-800/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-5">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to modernise Czech MLM payment infrastructure?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software pulls together gateways, modules, and services from the archived article and infuses
                them with AI-ready automation for your next growth chapter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Start your programme
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={demoHref}>Book a strategy review</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Czech success pod
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Support, tickets, and optimisation loops</p>
                </div>
                <Building className="h-8 w-8 text-primary" aria-hidden />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Dedicated specialists manage your ticket backlog, backup rehearsal, and telemetry reviews to ensure
                stability over the long term.
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
