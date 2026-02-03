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
  ChatsCircle,
  ClipboardText,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  EnvelopeSimple,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  Stack,
  TrendUp,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  detail: string;
  icon: IconType;
};

type Gateway = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  name: string;
  benefit: string;
  icon: IconType;
};

type Phase = {
  step: string;
  title: string;
  copy: string;
  icon: IconType;
};

const SIGNALS: Signal[] = [
  {
    label: "Pacific islands footprint",
    detail:
      "Programmes operate across Majuro, Ebeye, and remote atolls—Cloud MLM Software keeps connectivity, payouts, and compliance synchronised.",
    icon: Compass
  },
  {
    label: "Gateway continuity",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain core per the WordPress export.",
    icon: Stack
  },
  {
    label: "Regulation & trust",
    detail:
      "US oversight, compact agreements, and AML expectations require accurate documentation and audit trails for every transaction.",
    icon: ShieldCheck
  }
];

const GATEWAYS: Gateway[] = [
  {
    title: "PayPal diaspora lifeline",
    description: "Bridge Marshallese communities across Honolulu, Springdale, and Guam.",
    bullets: [
      "Multi currency module reconciles USD and AUD inflows with CFO-ready variance stories.",
      "KYC documentation vault stores sanction screening, identity proofs, and remittance evidence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "Amazon Pay commerce tide",
    description: "Deliver ecommerce-grade checkout with island-ready fulfilment.",
    bullets: [
      "Ticket system module routes USPS, Matson, and charter logistics with SLA tracking.",
      "Auto responder issues bilingual (English/Marshallese) updates tuned to shipping timelines."
    ],
    icon: Megaphone
  },
  {
    title: "PayU regional bridge",
    description: "Connect alternative payments, cards, and bank transfers across Micronesia and Asia-Pacific.",
    bullets: [
      "Multi currency analytics highlight approval rates, FX impact, and fee profiles for leadership.",
      "Backup manager captures settlement files, dispute artefacts, and PSP correspondence."
    ],
    icon: TrendUp
  },
  {
    title: "Stripe innovation deck",
    description: "Prototype digital subscriptions, AI concierge, and partner APIs without losing compliance clarity.",
    bullets: [
      "E-wallet module streams commissions once Stripe webhooks clear settlement.",
      "Emails module shares release notes, compliance bulletins, and finance digests."
    ],
    icon: CreditCard
  },
  {
    title: "Authorize.Net governance lane",
    description: "Support organisations expecting North American gateway posture.",
    bullets: [
      "Ticket system records underwriting packages, chargeback narratives, and executive approvals.",
      "Backup manager stores contracts, PCI attestations, and regulator communications."
    ],
    icon: Bank
  },
  {
    title: "Braintree omnichannel core",
    description: "Tokenise pop-up events, mobile field teams, and ecommerce engagements across the islands.",
    bullets: [
      "E-wallet module aligns Braintree customer vaults with commission and reimbursement plans.",
      "Multi-lingual system keeps English and Marshallese knowledge bases synchronised."
    ],
    icon: Plugs
  },
  {
    title: "Adyen executive vantage",
    description: "Aggregate EU, US, and APAC acquiring intelligence inside one dashboard.",
    bullets: [
      "Multi currency forecasts surface interchange, FX exposure, and authorisation health.",
      "KYC documentation stores enhanced due diligence dossiers and oversight records."
    ],
    icon: Compass
  },
  {
    title: "2Checkout digital runway",
    description: "Launch virtual kits, AI learning, and remote enablement for distributed teams.",
    bullets: [
      "E-voucher engine releases referral incentives, webinars, and event passes with analytics.",
      "Auto responder nurtures onboarding cohorts with milestone-based prompts."
    ],
    icon: Sparkle
  }
];

const MODULES: Module[] = [
  {
    name: "Multi currency module",
    benefit: "Balances USD, AUD, and regional inflows with tolerance alerts and AI commentary.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    benefit: "Routes PSP, logistics, and compliance escalations with SLA timers and auditable transcripts.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    benefit: "Publishes English and Marshallese communications across email, SMS, and AI bots instantly.",
    icon: Megaphone
  },
  {
    name: "E-voucher engine",
    benefit: "Manages referral programmes, incentive bundles, and launch codes with redemption insight.",
    icon: Stack
  },
  {
    name: "E-wallet",
    benefit: "Streams instant commissions and reimbursements with maker-checker controls.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    benefit: "Secures settlement files, regulatory correspondence, and risk reviews for continuity.",
    icon: ShieldCheck
  },
  {
    name: "Emails module",
    benefit: "Centralises compliance alerts, campaign storytelling, and executive digests.",
    icon: EnvelopeSimple
  },
  {
    name: "KYC documentation",
    benefit: "Stores identity proofs, AML evidence, and expiry reminders for distributors and partners.",
    icon: ClipboardText
  },
  {
    name: "Multi-lingual system",
    benefit: "Keeps English and Marshallese portals, microsites, and AI assistants aligned.",
    icon: UsersThree
  }
];

const PHASES: Phase[] = [
  {
    step: "Phase 01",
    title: "Reaffirm the WordPress promise",
    copy:
      "We preserve the headline—Ways to accept payments from MLM Software in People’s Democratic Republic of Marshall Islands—while modernising the narrative.",
    icon: Stack
  },
  {
    step: "Phase 02",
    title: "Harmonise compliance evidence",
    copy:
      "Ticketing, backup, and documentation modules coordinate US oversight, AML checks, and compact agreements for audit readiness.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    title: "Activate gateway excellence",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout run through sandbox, certification, and enablement playbooks.",
    icon: Lightning
  },
  {
    step: "Phase 04",
    title: "Deliver AI-first visibility",
    copy:
      "Dashboards, alerts, and AI summaries keep island leadership, finance teams, and distributors coordinated in real time.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Marshall Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Enable PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Marshall Islands with Cloud MLM Software’s AI-ready compliance framework.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/marshall-islands"
  },
  openGraph: {
    title: "Marshall Islands MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Marshall Islands—aligned to island logistics, global compliance, and AI-enabled insight."
  }
};

type MarshallIslandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function MarshallIslandsPaymentGatewayPage({ params }: MarshallIslandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-100 py-20 dark:from-indigo-900/30 dark:via-slate-950 dark:to-sky-900/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl dark:bg-indigo-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Marshall Islands (MH)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Marshall Islands – MH
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software adapts the WordPress narrative to the Pacific context—uniting gateway readiness, compliance
                evidence, and AI telemetry for island communities and diaspora sponsors.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Marshall Islands strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-indigo-400 text-indigo-900 hover:bg-indigo-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Marshall Islands demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground dark:text-white">{signal.label}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway routes for the Marshall Islands
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each gateway cited in the WordPress export now includes detailed guidance for automation, compliance, and field
            enablement tailored to Pacific logistics.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400 dark:bg-white" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the legacy navigation, unified for island teams
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules combine into one AI-assisted control plane.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.benefit}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Marshall Islands enablement phases
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four stages ensure the original copy stays intact while delivering the automation, compliance, and AI visibility
            island leaders expect.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.step}
                className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{phase.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{phase.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-200 via-white to-sky-200 py-16 dark:from-indigo-900/40 dark:via-slate-950 dark:to-sky-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-indigo-200/70 blur-3xl dark:bg-indigo-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-sky-200/70 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Marshall Islands
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Marshall Islands’ MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Align gateway readiness, compliance evidence, and AI telemetry so Marshall Islands programmes scale with
              confidence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review investment options
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-indigo-400 text-indigo-900 hover:bg-indigo-100 dark:border-white/20 dark:text-white"
            >
              <Link href={gatewayHubHref}>
                Explore global gateways
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
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
