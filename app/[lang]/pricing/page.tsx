import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  FileCheck,
  Globe,
  Handshake,
  Layers,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  Timer,
  Workflow
} from "lucide-react";

import PricingAccessSection from "@/components/frontend/pricing/pricing-access-section";
import PricingEstimator from "@/components/frontend/pricing/pricing-estimator";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type ValueProof = {
  title: string;
  detail: string;
  icon: IconType;
};

type Plan = {
  name: string;
  price: string;
  description: string;
  svg: string;
  outcome: string;
  deliveryWindow: string;
  highlights: string[];
  cta: {
    label: string;
    href: string;
  };
};

type MatrixRow = {
  deliverable: string;
  launch: string;
  scale: string;
  enterprise: string;
};

type TimelineStep = {
  title: string;
  detail: string;
  duration: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    title: "Average go-live",
    value: "62 days",
    detail: "Signed SOW → first payout",
    icon: Timer
  },
  {
    title: "Integrations launched",
    value: "120+",
    detail: "ERP, CRM, tax connectors",
    icon: Workflow
  },
  {
    title: "Implementation satisfaction",
    value: "97%",
    detail: "Five-continent delivery score",
    icon: BadgeCheck
  }
];

const VALUE_PROOFS: ValueProof[] = [
  {
    title: "Procurement-ready deliverables",
    detail: "Line-item pricing, acceptance criteria, and legal-ready documentation packaged for approvals.",
    icon: FileCheck
  },
  {
    title: "Global readiness",
    detail: "Multi-market, currency, and tax scenarios validated before you commit a signature.",
    icon: Globe
  },
  {
    title: "Advisor partnership",
    detail: "Compensation scientists and automation engineers shape every estimate alongside your team.",
    icon: Handshake
  }
];

const PLANS: Plan[] = [
  {
    name: "Launch Lab",
    price: "$28k",
    description:
      "Validate a single compensation blueprint and onboard a focused field cohort with concierge guidance.",
    svg: "/icons/plan-launch.svg",
    outcome: "Pilot-ready in as little as 45 days",
    deliveryWindow: "30 – 45 days",
    highlights: [
      "Single compensation model configured and validated",
      "Pilot portals with enrolment + payout dashboards",
      "Six months of concierge support included"
    ],
    cta: {
      label: "Pair with estimator",
      href: "#pricing-builder"
    }
  },
  {
    name: "Growth Engine",
    price: "$48k",
    description:
      "Roll out multi-market automation, layered compensation, and compliance workflows at scale.",
    svg: "/icons/plan-growth.svg",
    outcome: "Global scale-ready in 70 days",
    deliveryWindow: "45 – 70 days",
    highlights: [
      "Up to three compensation variants",
      "Automation journeys with payment + tax connectors",
      "Finance and leadership analytics workspace"
    ],
    cta: {
      label: "Design your rollout",
      href: "#pricing-consult"
    }
  },
  {
    name: "Enterprise Blueprint",
    price: "Custom",
    description:
      "Architect bespoke integrations, governance, and analytics for complex, multi-entity organisations.",
    svg: "/icons/plan-enterprise.svg",
    outcome: "Enterprise pod embedded with your PMO",
    deliveryWindow: "90+ days",
    highlights: [
      "Unlimited compensation blueprints + localisation",
      "Data residency + advanced compliance automation",
      "Dedicated solution architect, automation, and compliance pod"
    ],
    cta: {
      label: "Request executive briefing",
      href: "#speak-to-us"
    }
  }
];

const PROCUREMENT_MATRIX: MatrixRow[] = [
  {
    deliverable: "Compensation design working sessions",
    launch: "3 workshops",
    scale: "6 workshops + modelling",
    enterprise: "Custom modelling sprints"
  },
  {
    deliverable: "Integrations & automation",
    launch: "Core payment + tax",
    scale: "ERP / CRM orchestration",
    enterprise: "Middleware + data lake"
  },
  {
    deliverable: "Governance & compliance",
    launch: "Policy starter kit",
    scale: "Multi-market compliance pack",
    enterprise: "Regulatory liaison programme"
  },
  {
    deliverable: "Analytics & reporting",
    launch: "Pilot dashboards",
    scale: "Leadership + finance workspace",
    enterprise: "Board & investor scorecards"
  },
  {
    deliverable: "Rollout squad",
    launch: "Solution lead + success advisor",
    scale: "Solution pod + automation engineer",
    enterprise: "Embedded pod with compliance analyst"
  }
];

const TIMELINE_STEPS: TimelineStep[] = [
  {
    title: "Blueprint + estimations",
    detail: "Confirm KPIs, compensation rules, and estimator assumptions with executives.",
    duration: "Week 0 – 2",
    icon: CalendarClock
  },
  {
    title: "Configuration sprints",
    detail: "Compensation, portals, and automation journeys iterated with weekly playback.",
    duration: "Week 2 – 6",
    icon: Workflow
  },
  {
    title: "Validation + compliance",
    detail: "UAT, load, and regulatory reviews executed with playbooks and oversight.",
    duration: "Week 6 – 8",
    icon: BadgeCheck
  },
  {
    title: "Launch + hypercare",
    detail: "Embedded pod manages communications, reporting cadences, and optimisation.",
    duration: "Week 8 – 12",
    icon: ShieldCheck
  }
];

const FAQS: FAQ[] = [
  {
    question: "Is the licence a recurring subscription?",
    answer:
      "Cloud MLM Software pricing is a one-time licence. You own the platform. Optional managed services, infrastructure, or extended concierge packages can be renewed annually as needed."
  },
  {
    question: "Can we phase markets and product launches?",
    answer:
      "Yes. Every engagement includes a phased launch roadmap with scenario modelling so you can unlock markets, products, or segments when your leadership is ready."
  },
  {
    question: "How quickly do we receive an investment brief?",
    answer:
      "After you share an estimator scenario, a pricing advisor prepares a procurement-ready brief with milestones, payment cadence, and assumptions within one business day."
  },
  {
    question: "Do you integrate with our existing systems?",
    answer:
      "Integrations are core. We bring accelerators for commerce, payments, tax, ERP, and CRM, and design bespoke middleware for enterprise data requirements."
  }
];

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const { getPageMetadata } = await import("@/components/frontend/common/page-metadata");
  
  return getPageMetadata(
    params,
    "/pricing",
    {
      page: "pricing",
      fallbackTitle: "Pricing | Cloud MLM Software",
      fallbackDescription: "Explore transparent Cloud MLM Software pricing tiers, add-ons, and ownership benefits tailored to your network marketing strategy.",
      fallbackKeywords: "MLM software pricing, network marketing software cost, MLM platform pricing, MLM software pricing plans"
    }
  );
}

type PricingPageProps = {
  params: { lang: SupportedLocale };
};

export default function PricingPage({ params }: PricingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const estimatorPortalHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-32">
    <section className="relative overflow-hidden border-b border-border/60 bg-white py-10 text-slate-900 dark:bg-slate-950 dark:text-white md:py-14">
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg
      className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-sky-100 dark:text-sky-900/60"
      viewBox="0 0 620 620"
      fill="none"
      aria-hidden
    >
      <defs>
        <radialGradient
          id="pricing-hero-gradient"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(310 310) rotate(90) scale(280)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" stopOpacity="0.32" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="310" cy="310" r="300" fill="url(#pricing-hero-gradient)" />
      <circle cx="310" cy="310" r="250" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
      <circle cx="310" cy="310" r="195" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
    </svg>
    <div className="absolute -top-12 right-1/3 h-56 w-56 rounded-full bg-sky-200/45 blur-3xl dark:bg-sky-500/20" aria-hidden />
    <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-emerald-200/35 blur-3xl dark:bg-emerald-500/20" aria-hidden />
  </div>

  <div className="container relative z-10 grid place-items-center gap-8 text-center">
    <div className="space-y-4">
      <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:border-sky-200/60 dark:bg-sky-400/10 dark:text-sky-100">
        Pricing navigator
      </span>
      <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
        Engineer a transparent Cloud MLM investment.
      </h1>
      <p className="mx-auto max-w-xl text-lg text-slate-600 dark:text-slate-200">
        Align stakeholders with a transparent investment roadmap, delivery squad, and milestone governance.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-3">
      {HERO_METRICS.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.title}
            className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="flex flex-col items-center gap-2 text-slate-900 dark:text-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-200">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-xl font-bold">{metric.value}</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                {metric.title}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{metric.detail}</span>
            </div>
          </div>
        );
      })}
    </div>

    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button asChild size="lg">
        <Link href="#pricing-builder">
          Open pricing estimator
          <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900/60"
      >
        <Link href={contactHref}>
          Book pricing advisory
          <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
        </Link>
      </Button>
    </div>

    <span className="text-center text-xs text-slate-500 dark:text-slate-400">
      Advisors reply with a procurement-ready brief within one business day.
    </span>

    <div className="mt-8 flex flex-col items-center gap-4 text-center md:flex-row">
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
        Every engagement includes:
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
        <li className="flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-sky-500 dark:text-sky-300" aria-hidden />
          <span>Procurement-ready deliverables</span>
        </li>
        <li className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden />
          <span>Global readiness</span>
        </li>
        <li className="flex items-center gap-2">
          <Handshake className="h-4 w-4 text-purple-500 dark:text-purple-300" aria-hidden />
          <span>Advisor partnership</span>
        </li>
      </ul>
    </div>
  </div>
</section>


 <PricingAccessSection />

      <section className="container grid gap-6 md:grid-cols-3  pt-0">
        {VALUE_PROOFS.map((proof) => {
          const Icon = proof.icon;
          return (
            <article
              key={proof.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-200">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{proof.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{proof.detail}</p>
            </article>
          );
        })}
      </section>

     

      <section className="container space-y-12" id="pricing-form">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Choose an investment path aligned to your expansion horizon
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Every tier includes ownership of the Cloud MLM platform, compensation validation, and six months of concierge support. Upgrade without friction as your field grows.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className="flex h-full flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-200">
                  <Image src={plan.svg} width={32} height={32} alt="" className="h-8 w-8" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  {plan.deliveryWindow}
                </span>
              </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-3xl font-semibold text-slate-900 dark:text-sky-100">{plan.price}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{plan.description}</p>
                </div>
                <div className="rounded-2xl bg-slate-50/80 p-4 dark:bg-slate-900/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                    Outcome
                  </p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-100">{plan.outcome}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {plan.highlights.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 text-sky-500 dark:text-sky-300" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href={plan.cta.href}>
                    {plan.cta.label}
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Procurement deliverables at a glance
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Every Cloud MLM Software engagement ships with the artefacts your finance, legal, and operations leaders expect.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="grid grid-cols-[minmax(0,260px)_repeat(3,minmax(0,1fr))] bg-slate-100/60 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
              <span className="border-r border-slate-200 p-4 dark:border-slate-800">Deliverable</span>
              <span className="border-r border-slate-200 p-4 text-center dark:border-slate-800">Launch Lab</span>
              <span className="border-r border-slate-200 p-4 text-center dark:border-slate-800">Growth Engine</span>
              <span className="p-4 text-center">Enterprise Blueprint</span>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {PROCUREMENT_MATRIX.map((row) => (
                <div key={row.deliverable} className="grid grid-cols-[minmax(0,260px)_repeat(3,minmax(0,1fr))] text-sm">
                  <div className="space-y-1 border-r border-slate-200 p-4 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">{row.deliverable}</p>
                  </div>
                  <div className="flex items-center justify-center border-r border-slate-200 p-4 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                    {row.launch}
                  </div>
                  <div className="flex items-center justify-center border-r border-slate-200 p-4 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                    {row.scale}
                  </div>
                  <div className="flex items-center justify-center p-4 text-slate-700 dark:text-slate-200">{row.enterprise}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12" id="pricing-builder">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Build your scenario, then share it with a pricing advisor
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            The estimator models licence, support, integrations, and accelerators in real time. Save scenarios, export summaries, and hand them directly to our pricing team for validation.
          </p>
        </div>
        <PricingEstimator contactHref={contactHref} demoHref={estimatorPortalHref} />
      </section>

      <section className="border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950/40" id="speak-to-us">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Implementation blueprint
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A proven delivery cadence keeps stakeholders informed while the rollout pod executes across compensation, integrations, and compliance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {TIMELINE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{step.detail}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{step.duration}</p>
                </article>
              );
            })}
          </div>
          <div className="rounded-3xl border border-sky-200 bg-white p-8 shadow-xl shadow-sky-100 transition dark:border-sky-500/30 dark:bg-slate-900">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-3 text-slate-700 dark:text-slate-200">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Ready for a guided pricing briefing?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Share priorities, target launch dates, and critical integrations. Receive an aligned investment roadmap and milestone-based payment structure.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with our team
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Frequently asked questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Straight answers to the questions procurement, finance, and legal teams ask most often.
            </p>
          </div>
          <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-sm dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 transition group-open:text-slate-500 dark:text-slate-500 dark:group-open:text-slate-300">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">–</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
