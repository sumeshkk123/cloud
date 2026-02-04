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
  Eye,
  Globe,
  Layers,
  ShieldCheck,
  Signal,
  Waypoints
} from "lucide-react";
import {
  Bank,
  Circuitry,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  ListChecks,
  SealCheck,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "British Indian Ocean Territory MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in British Indian Ocean Territory (IO). Cloud MLM Software powers resilient, compliant payout operations for remote bases and enterprise partners.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/british-indian-ocean-territory"
  },
  openGraph: {
    title: "British Indian Ocean Territory MLM Payment Gateways",
    description:
      "Coordinate banking, PSPs, and remote workforce support in the British Indian Ocean Territory with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/british-indian-ocean-territory"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Indicator = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type Insight = {
  title: string;
  detail: string;
  icon: IconType;
};

type Stream = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  label: string;
  headline: string;
  copy: string;
  outcomes: string[];
  icon: IconType;
};

type Control = {
  title: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_INDICATORS: Indicator[] = [
  {
    title: "Clearing timeline",
    value: "T+0.8 days",
    description:
      "Fully-instrumented clearing via London correspondent banks with timezone-aware approvals.",
    icon: Waypoints
  },
  {
    title: "Gateway footprint",
    value: "8 connected rails",
    description:
      "HSBC, Barclays, Standard Chartered, Stripe, Worldpay, PayPal, and defence procurement payment flows in one policy framework.",
    icon: Layers
  },
  {
    title: "Compliance dossier",
    value: "30 artefacts",
    description:
      "AML, sanction, export control, and data handling packs aligned to UK Overseas Territory requirements.",
    icon: ListChecks
  }
];

const OPERATING_INSIGHTS: Insight[] = [
  {
    title: "Remote supply chains",
    detail:
      "Critical inventory and logistics reimbursements demand auditable approvals and status visibility for teams spanning Diego Garcia, London, and Singapore.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Defence-grade compliance",
    detail:
      "Operations must satisfy MOD and allied oversight. We embed sanction lists, export control triggers, and internal audit workflows.",
    icon: ShieldCheck
  },
  {
    title: "Hybrid workforce support",
    detail:
      "Contractors, military families, and partner organisations need transparent stipends and communications even with intermittent bandwidth.",
    icon: Signal
  }
];

const PAYMENT_STREAMS: Stream[] = [
  {
    name: "Correspondent banking fabric",
    summary: "Automate settlement with UK and allied bank partners effortlessly.",
    bullets: [
      "Integrations for HSBC, Barclays, Standard Chartered, and Lloyds with secure SFTP/API orchestration.",
      "Dual approval flows with duty segregation between on-territory and head-office stakeholders.",
      "Statement ingestion and reconciliation mapped to UK regulatory reporting expectations."
    ],
    icon: Bank
  },
  {
    name: "Global PSP mesh",
    summary: "Blend card, online, and procurement payments for multi-national partners.",
    bullets: [
      "Stripe, Worldpay, PayPal, and Adyen connectors inside one risk and fraud policy engine.",
      "Dynamic routing decisions based on merchant category, transaction value, and geolocation.",
      "Chargeback automation with legal and finance collaboration spaces for rapid resolution."
    ],
    icon: Circuitry
  },
  {
    name: "People experience layer",
    summary: "Serve remote teams with proactive insights and dependable support.",
    bullets: [
      "Multi timezone notifications across email, SMS, and collaboration tools with consent tracking.",
      "Ticketing, auto responder, and backup manager modules orchestrated for always-on support.",
      "Leadership dashboards summarising payout health, engagement, and compliance posture."
    ],
    icon: Handshake
  }
];

const DELIVERY_PHASES: Phase[] = [
  {
    label: "Phase 1",
    headline: "Discovery & compliance charter",
    copy:
      "Align finance, legal, and operations on obligations spanning UK regulations, defence partners, and contractual SLAs.",
    outcomes: [
      "Risk register covering sanction lists, export controls, and data residency expectations.",
      "RACI map defining approvals across on-site, regional, and HQ stakeholders.",
      "Solution blueprint illustrating data flows, integration points, and monitoring strategy."
    ],
    icon: Compass
  },
  {
    label: "Phase 2",
    headline: "Integration runway",
    copy:
      "Deploy hardened connectors, credential vaulting, and observability across banks, PSPs, and Cloud MLM Software modules.",
    outcomes: [
      "Connector catalogue with heartbeat monitoring, alert routing, and failover playbooks.",
      "Maker-checker configuration tied to access policies and audit logs.",
      "Performance tests for peak payout windows, including offline queue validation."
    ],
    icon: Lightning
  },
  {
    label: "Phase 3",
    headline: "Pilot & command centre calibration",
    copy:
      "Launch with a representative cohort of base operations, suppliers, and leadership to validate transparency and speed.",
    outcomes: [
      "Executive dashboards tracking settlement tempo, exception volumes, and SLA adherence.",
      "Feedback loops for logistics, HR, and finance teams to resolve bottlenecks fast.",
      "Continuous improvement backlog prioritised by risk mitigation and experience gains."
    ],
    icon: Eye
  }
];

const CONTROL_PILLARS: Control[] = [
  {
    title: "Assurance & audit",
    copy:
      "Evidence packs include AML workflows, sanction hits, and approval trails to satisfy ministerial and banking scrutiny.",
    icon: SealCheck
  },
  {
    title: "Operational clarity",
    copy:
      "Command centre dashboards blend payments, logistics, and ticketing metrics so executives steer decisions with confidence.",
    icon: SquaresFour
  },
  {
    title: "Global coordination",
    copy:
      "Time zone-aware comms, SLA monitors, and escalation paths keep allied partners aligned even during urgent missions.",
    icon: Globe
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate for the British Indian Ocean Territory?",
    answer:
      "We integrate HSBC, Barclays, Standard Chartered, Lloyds, Stripe, Worldpay, PayPal, and Adyen. Each connector inherits Cloud MLM Software’s security, logging, and approval policies tailored for remote base operations."
  },
  {
    question: "How do you support low-bandwidth or intermittent connectivity?",
    answer:
      "Offline queues, automatic retries, and compact status notifications keep payouts moving. Stakeholders receive SMS or email confirmations when transactions clear so missions stay informed."
  },
  {
    question: "What compliance documentation do you provide?",
    answer:
      "You receive AML programmes, sanction screening procedures, export control checklists, data handling agreements, and reporting templates aligned to UK Overseas Territory regulations and defence partner requirements."
  }
];

type PageProps = {
  params: { lang: string };
};

export default async function BritishIndianOceanTerritoryPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                British Indian Ocean Territory
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in British Indian Ocean Territory (IO)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We tailor that expertise for remote bases and strategic missions so your payouts remain fast, transparent, and compliant.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for British Indian Ocean Territory are detailed below, together with the resilience layers that keep them dependable far from headquarters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Plan a remote finance workshop
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/40">
                  <Link href={demoHref}>
                    View remote-ready demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {HERO_INDICATORS.map((indicator) => (
                <div
                  key={indicator.title}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <indicator.icon className="mt-1 h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {indicator.title}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{indicator.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{indicator.description}</p>
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
            Operating insights
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What makes British Indian Ocean Territory operations distinctive
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Remote bases depend on uncompromised controls, rapid payouts, and proactive communications. We unify those disciplines on one platform.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {OPERATING_INSIGHTS.map((insight) => (
            <div
              key={insight.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <insight.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Gateway streams for resilient remote operations
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Connect banks, PSPs, and people experience while maintaining defence-grade governance every step of the way.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PAYMENT_STREAMS.map((stream) => (
              <article
                key={stream.name}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <stream.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stream.name}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stream.summary}</p>
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

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Delivery programme
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Implementation phases tuned for remote coordination
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We choreograph compliance, technology, and people enablement so every stakeholder stays aligned from discovery to scale.
          </p>
        </div>
        <div className="space-y-8">
          {DELIVERY_PHASES.map((phase) => (
            <div
              key={phase.label}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {phase.label}
                </span>
                <phase.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{phase.headline}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.copy}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {phase.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-slate-400/70 dark:bg-slate-600" aria-hidden />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Control pillars leadership can rely on
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Whether your stakeholders sit on Diego Garcia or in London, they receive the evidence, dashboards, and alerts required to steer operations confidently.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONTROL_PILLARS.map((control) => (
            <div
              key={control.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <control.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{control.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{control.copy}</p>
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
                Clarify how Cloud MLM Software keeps remote stakeholders confident and regulators satisfied.
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.3),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver mission-ready payments in the British Indian Ocean Territory
            </h2>
            <p className="text-base text-slate-100/90">
              Cloud MLM Software brings every stakeholder into one disciplined operating model. Let’s build your remote finance command centre.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={pricingHref}>Review pricing playbooks</Link>
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
