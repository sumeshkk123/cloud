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
  Compass,
  LifeBuoy,
  LucideIcon,
  Radar,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  GlobeHemisphereEast,
  HandHeart,
  MapTrifold,
  SealCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Bouvet Island MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Bouvet Island (BV). Cloud MLM Software unites remote-first payouts, compliance governance, and resilient support for polar operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/bouvet-island"
  },
  openGraph: {
    title: "Bouvet Island MLM Payment Gateways",
    description:
      "Build frictionless MLM payment operations for Bouvet Island with Cloud MLM Software’s bank, PSP, and remote workforce orchestration.",
    url: "/mlm-software-payment-gateways/bouvet-island"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  context: string;
  icon: IconType | LucideIcon;
};

type Signal = {
  title: string;
  copy: string;
  icon: IconType | LucideIcon;
};

type Stream = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType | LucideIcon;
};

type Pillar = {
  name: string;
  detail: string;
  icon: IconType | LucideIcon;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Clearing rhythm",
    value: "T+1.5 days",
    context: "Nordic correspondent banks with arctic shipping contingencies embedded.",
    icon: Radar
  },
  {
    label: "Gateway coverage",
    value: "6 integrated rails",
    context: "DNB, Nordea, SEB, Stripe, PayPal, and global card acquiring in one policy layer.",
    icon: Compass
  },
  {
    label: "Compliance library",
    value: "28 artefacts",
    context: "AML, sanction, and data residency packs for Norwegian governance requirements.",
    icon: ShieldCheck
  }
];

const MARKET_SIGNALS: Signal[] = [
  {
    title: "Remote workforce orchestration",
    copy:
      "Scientific missions and expedition partners rely on reliable stipends and procurement reimbursements. Offline-first workflows keep approvals moving even without steady connectivity.",
    icon: Waves
  },
  {
    title: "Nordic banking oversight",
    copy:
      "Norwegian compliance requires precise sanction screening, ESG reporting, and auditable payout chains. Our controls satisfy head office and regulator expectations.",
    icon: GlobeHemisphereEast
  },
  {
    title: "High-value inventory",
    copy:
      "Equipment and safety gear sourcing demands dual-control and transparent reconciliation for every vendor payment.",
    icon: LifeBuoy
  }
];

const PAYMENT_STREAMS: Stream[] = [
  {
    title: "Nordic banking fabric",
    description:
      "Automated settlement with Norwegian and Nordic correspondent banks to maintain regulatory confidence.",
    bullets: [
      "Integrations for DNB, Nordea, SEB, and Danske Bank with secure SFTP and API orchestration.",
      "Maker-checker approvals, cost centre tagging, and expedition-specific memo controls.",
      "Automated statement ingestion aligned to Norwegian Financial Supervisory Authority formats."
    ],
    icon: Bank
  },
  {
    title: "Global card & PSP acceleration",
    description:
      "Support global donors, supply partners, and remote marketplace transactions with unified policies.",
    bullets: [
      "Stripe, PayPal, and Adyen connectors configured for multi-currency acceptance.",
      "Dynamic routing based on location, amount, and product risk scoring.",
      "Chargeback automation with legal and finance collaboration spaces."
    ],
    icon: Sparkles
  },
  {
    title: "Field enablement layer",
    description:
      "Empower expedition leaders and procurement officers with transparent access to finances and support.",
    bullets: [
      "Self-service portals surfacing stipend status, inventory reconciliation, and compliance reminders.",
      "Multi currency and ticketing modules linked to document vaulting for manifests and permits.",
      "AI narratives providing daily briefings on spend velocity and risk indicators."
    ],
    icon: ChartLineUp
  }
];

const GOVERNANCE_PILLARS: Pillar[] = [
  {
    name: "Audit-ready controls",
    detail:
      "Sanction screening, PEP checks, and anomaly detection align to Norwegian AML regulations with evidence packs ready for inspection.",
    icon: SealCheck
  },
  {
    name: "People wellbeing",
    detail:
      "Recognition, wellbeing insights, and rapid reimbursement keep remote teams motivated and safe on mission-critical assignments.",
    icon: HandHeart
  },
  {
    name: "Data stewardship",
    detail:
      "Data residency, encryption, and lifecycle management ensure field data respects GDPR and scientific confidentiality commitments.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which financial institutions can you connect for Bouvet Island operations?",
    answer:
      "We integrate Nordic banks such as DNB, Nordea, SEB, and Danske Bank in addition to global PSPs like Stripe, PayPal, and Adyen. Every adapter inherits observability, security, and approval workflows so remote finance teams trust the data."
  },
  {
    question: "How do you manage payments when bandwidth is limited?",
    answer:
      "Cloud MLM Software ships offline queues, retry orchestration, and alerting that resume the moment links return. Managers receive SMS or email notifications when payouts complete so trips stay coordinated."
  },
  {
    question: "What compliance support is delivered for Norwegian oversight?",
    answer:
      "We provide AML programmes, sanction playbooks, GDPR documentation, and expedition reimbursement policies aligned to the Norwegian Financial Supervisory Authority. These artefacts streamline bank reviews and internal audit cycles."
  }
];

type PageProps = {
  params: { lang: string };
};

export default async function BouvetIslandPaymentGatewaysPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3.25rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.25),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Bouvet Island • Remote payouts
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Bouvet Island (BV)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We extend that expertise to polar operations so your mission teams receive timely, transparent payouts without compromising compliance.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Bouvet Island is listed below, paired with the resilience layers that keep them dependable far from headquarters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Request a remote finance plan
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/40">
                  <Link href={demoHref}>
                    Explore the guided demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <metric.icon className="mt-1 h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{metric.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Field intelligence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What makes Bouvet Island operations unique
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Expedition finance demands clarity despite intermittent links and unforgiving weather. We centralise data, risk, and communications so HQ and field leaders operate as one.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_SIGNALS.map((signal) => (
            <div
              key={signal.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <signal.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{signal.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Payment streams engineered for the world’s remotest research base
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Bring banks, PSPs, and field enablement together. Every connector inherits observability, security, and approval workflows defined by your leadership team.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PAYMENT_STREAMS.map((stream) => (
              <article
                key={stream.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <stream.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stream.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stream.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {stream.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Leadership guardrails
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Governance pillars that keep polar stakeholders aligned
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Executive, compliance, and field teams gain a shared dashboard of risk, wellbeing, and delivery velocity—reducing surprises during mission-critical deployments.
          </p>
        </div>
        <div className="space-y-6">
          {GOVERNANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.name}
              className="flex gap-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <pillar.icon className="mt-1 h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pillar.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{pillar.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-white/95 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                FAQs
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Decision-makers get clear answers on how Cloud MLM Software supports Bouvet Island operations end to end.
              </p>
            </div>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-white shadow-lg dark:border-slate-700 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.28),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Support mission teams on Bouvet Island with uncompromised payments
            </h2>
            <p className="text-base text-slate-100/90">
              Unite your banking partners, PSPs, and expedition leadership on one platform. Cloud MLM Software helps you ship every cycle with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Book a remote operations consult
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={pricingHref}>Review pricing roadmaps</Link>
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
