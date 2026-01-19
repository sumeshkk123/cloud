import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Calculator,
  GaugeCircle,
  Gift,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Highlight = {
  title: string;
  description: string;
  bullets: string[];
  icon: "structure" | "automation" | "governance";
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  { label: "Gift cycles modelled", value: "90+", detail: "Custom tables, tiers, and gifting rules configured in sandbox." },
  { label: "Automation coverage", value: "76%", detail: "Invites, confirmations, and payouts handled automatically." },
  { label: "AI copilots active", value: "2025", detail: "Copilots summarise cycle health, detect anomalies, and draft updates." }
];

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Table structuring",
    description: "Design flexible gifting tables, contribution tiers, and progression rules.",
    bullets: [
      "Drag-and-drop configuration for 2x2, 4x4, or custom layouts",
      "Contribution and invitation logic tailored to each cohort",
      "Scenario comparisons for margin and velocity"
    ],
    icon: "structure"
  },
  {
    title: "Cycle automation",
    description: "Automate invitations, approvals, and gifting statements from start to finish.",
    bullets: [
      "Trigger onboarding messages as tables fill",
      "Route exceptions to finance, legal, or success teams",
      "Generate statements and receipts for every gift"
    ],
    icon: "automation"
  },
  {
    title: "Risk & transparency",
    description: "Maintain trust with compliance guardrails and complete audit trails.",
    bullets: [
      "KYC/AML integrations before releasing rewards",
      "Consent tracking and disclosures per region",
      "Immutable logs synced with reporting and copilots"
    ],
    icon: "governance"
  }
];

const FAQS: Faq[] = [
  {
    question: "Can we customise gift table sizes?",
    answer: "Yes. Configure any table structure, entry value, and qualification rule. Templates help teams start quickly."
  },
  {
    question: "How are payouts and taxes handled?",
    answer: "Treasury workflows manage currency conversion, taxation, and receipt generation with approval checkpoints."
  },
  {
    question: "Do you provide compliance support?",
    answer: "We supply documentation, audit logs, and policy workflows to align with regional gifting regulations."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Gift Plan MLM Calculator";
  const description =
    "Simulate gifting tables, automate cycles, and manage compliance with Cloud MLM Software’s gift plan calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/gift-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GiftPlanCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function GiftPlanCalculatorPage({ params }: GiftPlanCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-rose-50 via-white to-amber-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(244,114,182,0.18),transparent_45%),radial-gradient(circle_at_88%_-10%,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Gift className="h-4 w-4" aria-hidden />
              Gift plan calculator
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Perfect gifting cycles with automation, compliance, and AI at your side.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software models gifting tables, automates progression, and satisfies regulators so your community programmes thrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a calculator demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the sandbox
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What’s inside the gift plan calculator</h2>
          <p className="text-sm text-muted-foreground">
            Configure rewarding tables, automate journeys, and maintain transparency for every participant.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((highlight) => (
            <article key={highlight.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {highlight.icon === "structure" ? <Layers className="h-5 w-5" aria-hidden /> : null}
                {highlight.icon === "automation" ? <Workflow className="h-5 w-5" aria-hidden /> : null}
                {highlight.icon === "governance" ? <ShieldCheck className="h-5 w-5" aria-hidden /> : null}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {highlight.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <BarChart3 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
            <p className="text-sm text-muted-foreground">
              Practical answers for finance, compliance, and operations teams planning gifting programmes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FAQS.map((faq) => (
              <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Launch a gifting experience with confidence</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Book a session with Cloud MLM Software analysts to configure tables, rehearse cycles, and activate AI copilots tuned to your plan.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Explore the calculator demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
