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
  Building,
  CircuitBoard,
  Fingerprint,
  Globe2,
  Scale,
  ScrollText,
  Sparkles
} from "lucide-react";
import {
  Bank,
  Certificate,
  ChatsTeardrop,
  Handshake,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  title: string;
  description: string;
  icon: IconType;
};

type GovernancePlay = {
  title: string;
  summary: string;
  points: string[];
  icon: IconType;
};

type Journey = {
  audience: string;
  outcome: string;
  touchpoints: string[];
  icon: IconType;
};

type TimelineMilestone = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_FACTS: HeroFact[] = [
  {
    title: "Global PSP bundle",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen operate as one compliant stack for Vatican City – VAT, just as the legacy page promised.",
    icon: Bank
  },
  {
    title: "Curated governance",
    description:
      "We embed EU, Italian banking, and Holy See administrative guidelines into every approval, audit, and payout workflow.",
    icon: Scale
  },
  {
    title: "AI insight briefs",
    description:
      "Daily AI digests surface settlement timing, chargeback posture, and donor engagement so leadership stays informed without manual spreadsheets.",
    icon: Sparkles
  }
];

const GOVERNANCE_PLAYS: GovernancePlay[] = [
  {
    title: "Financial oversight",
    summary:
      "Keep treasurers and finance controllers aligned with automated evidence packs.",
    points: [
      "Ledger reconciliations that join PSP batches with Vatican banking partners",
      "Audit-ready exports that satisfy IFRS and Vatican Curia reporting requests",
      "Role-based approvals so every commission release holds dual signatures"
    ],
    icon: Building
  },
  {
    title: "Risk & compliance",
    summary:
      "Modernise AML, sanctions, and donor risk reviews with in-context automation.",
    points: [
      "Sanctions and watchlist screening mapped to Vatican and EU directives",
      "Automated archiving of KYC artefacts with retention policies baked in",
      "AI-prompted escalation paths when anomalies surface"
    ],
    icon: Fingerprint
  },
  {
    title: "Communication clarity",
    summary:
      "Ensure multilingual stakeholders—from cardinals to technology partners—share the same view.",
    points: [
      "Live dashboards with Italian and English labels for rapid decision-making",
      "AI-written policy briefs summarising changes for executive offices",
      "Feedback loops that capture field insights back into governance cycles"
    ],
    icon: ScrollText
  }
];

const JOURNEYS: Journey[] = [
  {
    audience: "Donor-facing experiences",
    outcome: "Trusted, seamless contributions",
    touchpoints: [
      "Hosted payment forms highlighting PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen",
      "Recurring commitments with transparent receipts and multilingual confirmations",
      "AI monitoring that flags unusual donation velocity for review"
    ],
    icon: Certificate
  },
  {
    audience: "Distributor and ministry payouts",
    outcome: "Predictable, compliant disbursements",
    touchpoints: [
      "Maker-checker approvals before every release",
      "Settlement timelines aligned with Vatican banking calendars",
      "Automated reminders for document refresh and audit attestations"
    ],
    icon: Handshake
  },
  {
    audience: "Leadership analytics",
    outcome: "Concise intelligence briefs",
    touchpoints: [
      "AI-generated daily summaries combining payment health and outreach progress",
      "Scenario planning for special events, pilgrimages, and seasonal surges",
      "Mobile access so senior leaders can approve, pause, or reallocate funds on the go"
    ],
    icon: ChatsTeardrop
  }
];

const TIMELINE: TimelineMilestone[] = [
  {
    step: "01",
    title: "Strategic alignment",
    description:
      "Workshops with Vatican treasurers, digital teams, and ministry stakeholders define success metrics and governance thresholds.",
    icon: Globe2
  },
  {
    step: "02",
    title: "Experience design",
    description:
      "Prototype donor, distributor, and leadership journeys with localized copy referencing Vatican City – VAT regulatory language.",
    icon: CircuitBoard
  },
  {
    step: "03",
    title: "Pilot & observability",
    description:
      "Launch a contained cohort with AI telemetry watching settlements, disputes, and mission performance indicators.",
    icon: BarChart3
  },
  {
    step: "04",
    title: "Scale & stewardship",
    description:
      "Extend to additional congregations and global initiatives while AI continues to anticipate risk and surface opportunity.",
    icon: UsersThree
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are orchestrated in Vatican City?",
    answer:
      "The full legacy bundle—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—operates within Cloud MLM Software, augmented by bank connectors aligned with Vatican partners."
  },
  {
    question: "How is compliance maintained for Vatican City – VAT?",
    answer:
      "We embed EU and Vatican-specific AML controls, maker-checker workflows, and document vaults. AI generates audit evidence packs so compliance teams stay ahead of reviews."
  },
  {
    question: "Can leadership receive concise summaries without dashboards?",
    answer:
      "Yes. AI delivers daily or weekly briefs outlining payment health, donor engagement, and risk signals so senior leaders can act quickly."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Vatican City MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Guide compliant MLM payment engagements in Vatican City with Cloud MLM Software. Unite PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and Vatican-aligned governance with AI insights.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/vatican-city", locale)
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

type VaticanCityPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function VaticanCityPaymentGatewaysPage({
  params
}: VaticanCityPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3.5rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-slate-100 px-6 py-20 shadow-sm dark:border-amber-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(251,191,36,0.35),transparent_50%),radial-gradient(circle_at_85%_12%,rgba(217,119,6,0.3),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(99,102,241,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(251,191,36,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(217,119,6,0.35),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(99,102,241,0.3),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:border-amber-400/40 dark:bg-slate-900/70 dark:text-amber-200">
              <ScrollText className="h-4 w-4" aria-hidden />
              Vatican City payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Steward Vatican City payment operations with precision
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in Vatican City – VAT start with a unified,
                AI-supervised control plane. Cloud MLM Software honours the legacy promise—blending global
                PSPs with Vatican-aligned governance—so ministries, donors, and distributors move with trust.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={contactHref}>
                  Speak with a Vatican payments strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-200/80 text-amber-800 hover:bg-white/70 dark:border-amber-400/40 dark:text-amber-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.75rem] border border-white/60 bg-white/85 p-8 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="space-y-6">
              {HERO_FACTS.map((fact) => (
                <article
                  key={fact.title}
                  className="rounded-3xl border border-amber-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <fact.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{fact.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{fact.description}</p>
                </article>
              ))}
              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={pricingHref}>
                  Review Vatican implementation packs
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:border-amber-500/40 dark:text-amber-200">
            <Building className="h-4 w-4" aria-hidden />
            Stewardship pillars
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Curate finance, risk, and communication excellence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Translate the original “availability of payment gateways” copy into modern playbooks that
            keep Vatican City operations resilient, transparent, and mission-focused.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {GOVERNANCE_PLAYS.map((play) => (
            <article
              key={play.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-amber-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <play.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{play.summary}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {play.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-amber-500 dark:text-amber-300" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:border-indigo-500/40 dark:text-indigo-200">
            <CircuitBoard className="h-4 w-4" aria-hidden />
            Audience journeys
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Purpose-built pathways for donors, distributors, and leaders
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {JOURNEYS.map((journey) => (
            <article
              key={journey.audience}
              className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <journey.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{journey.audience}</h3>
              <p className="text-sm font-medium text-indigo-700 dark:text-indigo-200">{journey.outcome}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {journey.touchpoints.map((touchpoint) => (
                  <li key={touchpoint} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-indigo-500 dark:text-indigo-300" aria-hidden />
                    <span>{touchpoint}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Globe2 className="h-4 w-4" aria-hidden />
            Launch roadmap
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From strategic alignment to scaled stewardship
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {TIMELINE.map((milestone) => (
            <article
              key={milestone.step}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  {milestone.step}
                </span>
                <div>
                  <milestone.icon className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {milestone.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{milestone.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Sparkles className="h-4 w-4" aria-hidden />
            Vatican leadership questions
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI-backed answers for your finance and governance teams
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400"
          >
            <Link href={contactHref}>
              Build your Vatican City launch plan
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-slate-200 text-slate-800 hover:bg-white/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/70"
          >
            <Link href={pricingHref}>Compare implementation packages</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-slate-200 text-slate-800 hover:bg-white/70 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/70"
          >
            <Link href={gatewaysHref}>Explore global payment gateways</Link>
          </Button>
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
