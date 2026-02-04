import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Gauge,
  Globe2,
  LineChart,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import {
  Bank,
  Circuitry,
  CurrencyCircleDollar,
  Handshake,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Narrative = {
  headline: string;
  description: string;
  icon: IconType;
};

type GridFact = {
  title: string;
  stat: string;
  detail: string;
  icon: IconType;
};

type Play = {
  name: string;
  summary: string;
  actions: string[];
  icon: IconType;
};

type Alignment = {
  title: string;
  bullets: string[];
};

type FAQ = {
  question: string;
  answer: string;
};

const EXECUTIVE_NARRATIVE: Narrative[] = [
  {
    headline: "Fintech-friendly regulation",
    description:
      "Bahrain’s Central Bank sandbox and GCC-wide compliance frameworks reward proactive governance. We align your payout flows to each directive from launch day.",
    icon: ShieldCheck
  },
  {
    headline: "Cross corridor liquidity",
    description:
      "Distributors span Manama, Dhahran, and Dubai. Treasury automation balances BD settlements with SAR and AED corridors so finance leaders stay ahead of demand.",
    icon: CurrencyCircleDollar
  },
  {
    headline: "Operational intelligence",
    description:
      "Real-time analytics translate PSP data, bank ledgers, and VAT requirements into executive dashboards your board can interrogate instantly.",
    icon: LineChart
  }
];

const GRID_FACTS: GridFact[] = [
  {
    title: "Settlement velocity",
    stat: "Same-day BD",
    detail: "Optimised clearing for National Bank of Bahrain, ila, and Ahli United Bank with automated CBB reporting packs.",
    icon: Gauge
  },
  {
    title: "Gateway library",
    stat: "15+ connectors",
    detail: "BenefitPay, Amazon Payment Services, PayTabs, Tap, PayPal, Stripe, and more unified under one orchestration layer.",
    icon: Workflow
  },
  {
    title: "Leadership focus",
    stat: "Board-ready KPIs",
    detail: "Predictive dashboards surface churn risk, liquidity exposure, and AI-generated cash flow narratives every Monday.",
    icon: BarChart3
  }
];

const PAYMENT_PLAYS: Play[] = [
  {
    name: "Bank-led trust fabric",
    summary:
      "Secure and automate BD payouts through domestic banks without losing agility as your network scales.",
    actions: [
      "API adapters for National Bank of Bahrain, Ahli United Bank, ila Bank, and BISB",
      "Maker-checker approvals for high-value withdrawals and leadership incentives",
      "XML and ISO 20022 exports mapped to Central Bank of Bahrain formats"
    ],
    icon: Bank
  },
  {
    name: "PSP growth engine",
    summary:
      "Blend local payment innovators with global processors to match member preferences in GCC and diaspora markets.",
    actions: [
      "BenefitPay, PayTabs, Tap, Stripe, and Adyen routing with risk scoring baked in",
      "Dynamic currency conversion covering BHD, SAR, AED, KWD, and USD",
      "AI anomaly detection for chargebacks, refunds, and fraudulent enrolments"
    ],
    icon: Circuitry
  },
  {
    name: "Distributor experience lab",
    summary:
      "Give field leaders a premium payout experience across mobile, web, and concierge support touchpoints.",
    actions: [
      "Role-based portals with Arabic and English experiences, tailored by rank",
      "Instant commission previews, liquidity forecasts, and wellness nudges",
      "Concierge escalation orchestrated with Zendesk, Freshdesk, or ServiceNow"
    ],
    icon: Sparkles
  }
];

const REGULATORY_ALIGNMENT: Alignment[] = [
  {
    title: "Governance & compliance",
    bullets: [
      "Live audit trails matching CBB module guidance and GCC AML directives",
      "Automated sanction refresh cycles for regional and international watchlists",
      "VAT, economic substance, and corporate governance alerts inside finance console"
    ]
  },
  {
    title: "Treasury optimisation",
    bullets: [
      "Liquidity buffers per distributor tier with configurable sweeps",
      "Consolidated cash visibility across banks, PSPs, and prepaid cards",
      "Scenario modelling for FX impact and BHD peg sensitivities"
    ]
  },
  {
    title: "Growth acceleration",
    bullets: [
      "Partner onboarding pipelines with scorecards for PSP, banking, and wallet providers",
      "AI-guided playbooks to expand into Saudi Arabia, UAE, and Kuwait",
      "Field enablement assets updated quarterly with compliance checkpoints"
    ]
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can Cloud MLM Software orchestrate both BenefitPay and international PSPs?",
    answer:
      "Yes. A single orchestration layer manages BenefitPay wallet flows alongside Stripe, PayTabs, Tap, and other PSPs. Routing rules consider cost, risk, and SLA to keep customer experience consistent."
  },
  {
    question: "How do you handle Central Bank of Bahrain regulatory expectations?",
    answer:
      "We embed CBB directives into policy workflows: dual approvals for sensitive payouts, automated SAR exports, immutable audit logs, and real-time compliance dashboards for your MLRO and CFO."
  },
  {
    question: "What distributor experiences are available in Arabic?",
    answer:
      "Portals, notifications, and mobile journeys ship with Arabic and English localisation. Content governance ensures compensation changes stay synchronised across both languages."
  },
  {
    question: "Can we forecast liquidity needs across GCC corridors?",
    answer:
      "Treasury dashboards model demand across Bahrain, Saudi Arabia, UAE, and Kuwait using historical payouts, enrolment velocity, and AI-powered anomaly alerts."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Bahrain MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch compliant, insight-rich MLM payment gateways for Bahrain. Cloud MLM Software unifies banks, BenefitPay, and GCC PSPs with automation, telemetry, and executive-ready analytics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/bahrain", locale)
    },
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  };
}

type BahrainPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function BahrainPaymentGatewaysPage({ params }: BahrainPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-black" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.15),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.2),transparent_50%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 text-white lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              <Globe2 className="h-4 w-4" aria-hidden />
              Bahrain fintech constellation
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate Bahrain payment gateways for ambitious MLM networks
              </h1>
              <p className="text-lg text-slate-100/80">
                Cloud MLM Software aligns your Bahrain treasury, PSP stack, and distributor experience into a governed, AI-ready
                operating model. Launch confidently with sandboxes, analytics, and compliance baked into every payout.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {EXECUTIVE_NARRATIVE.map((item) => (
                <div key={item.headline} className="rounded-3xl border border-white/30 bg-white/5 p-5 backdrop-blur">
                  <item.icon className="h-6 w-6 text-teal-300" />
                  <h2 className="mt-4 text-lg font-semibold">{item.headline}</h2>
                  <p className="mt-2 text-sm text-slate-100/80">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Shape your launch
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-transparent text-white hover:bg-white/10"
              >
                <Link href={demoHref}>See a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="flex flex-col gap-6 rounded-[2.75rem] border border-white/20 bg-white/10 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/70">Executive scorecard</p>
            <div className="grid gap-5">
              {GRID_FACTS.map((fact) => (
                <div key={fact.title} className="rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-center justify-between text-slate-100/80">
                    <fact.icon className="h-6 w-6 text-teal-200" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em]">{fact.title}</span>
                  </div>
                  <p className="mt-4 text-3xl font-semibold text-white">{fact.stat}</p>
                  <p className="mt-2 text-sm text-slate-100/80">{fact.detail}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/10 p-5 text-sm text-slate-100/80">
              <p className="font-semibold text-white">Need broader visibility?</p>
              <p className="mt-1 text-xs text-slate-100/70">
                Discover every region our payment gateway blueprint covers.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-white/10 bg-white/10 px-3 text-white hover:bg-white/20"
              >
                <Link href={gatewaysHref}>
                  View all gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                Payment plays engineered for Bahrain and the GCC
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                From BD settlements to cross-border incentives, Cloud MLM Software fuses governance with growth so your network
                leaders stay inspired and regulators stay confident.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
            >
              <Link href={pricingHref}>
                Explore pricing
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PAYMENT_PLAYS.map((play) => (
              <article
                key={play.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50 p-8 shadow-sm transition dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950/40"
              >
                <div className="absolute inset-x-6 top-6 -z-10 h-32 rounded-[2rem] bg-gradient-to-br from-teal-500/15 via-transparent to-sky-500/15 blur-2xl transition group-hover:blur-[60px]" />
                <play.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{play.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{play.summary}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {play.actions.map((action) => (
                    <li
                      key={action}
                      className="rounded-xl border border-transparent bg-slate-50/70 p-3 leading-relaxed shadow-sm dark:bg-slate-950/40"
                    >
                      {action}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Align governance, treasury, and growth in one operating rhythm
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              These enablement lanes keep your executives, compliance leaders, and field ambassadors working from the same source
              of truth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {REGULATORY_ALIGNMENT.map((pillar) => (
              <div
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {pillar.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-slate-200/60 bg-slate-50/80 p-3 leading-relaxed dark:border-slate-700/60 dark:bg-slate-950/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Questions Bahrain executives ask most
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Expand confidently with answers tailored to Bahrain&apos;s regulatory, cultural, and operational expectations.
            </p>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/50"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-black dark:from-black dark:via-slate-950 dark:to-slate-900" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.15),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(45,212,191,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-100/70">
            Bahrain growth blueprint
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver uncompromised trust to every Bahrain distributor and regulator
          </h2>
          <p className="text-base text-slate-100/80">
            Cloud MLM Software pairs governance, automation, and human expertise so your network can scale, diversify, and lead the
            GCC conversation on compliant direct selling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
              <Link href={contactHref}>
                Speak with a strategist
                <ArrowUpRight className="h-4 w-4 text-slate-700" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white/10"
            >
              <Link href={demoHref}>Preview the platform</Link>
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
