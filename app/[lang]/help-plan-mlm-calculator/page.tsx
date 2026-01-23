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
  Bot,
  Calculator,
  GaugeCircle,
  HeartHandshake,
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

type Section = {
  title: string;
  description: string;
  bullets: string[];
  icon: "structure" | "engagement" | "governance" | "ai";
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  { label: "Help plan scenarios", value: "75+", detail: "Tables and donation cycles modelled for customers worldwide." },
  { label: "Manual tasks removed", value: "72%", detail: "Invites, confirmations, and reporting automated by workflows." },
  { label: "Copilot usage", value: "2025", detail: "AI copilots draft outreach and flag irregular cycle behaviour." }
];

const SECTIONS: Section[] = [
  {
    title: "Cycle design studio",
    description: "Configure donation tiers, participation rules, and completion rewards in minutes.",
    bullets: [
      "2x2, 3x3, or bespoke tables with flexible contribution amounts",
      "Automated progression logic tied to confirmations",
      "Scenario comparisons for donation velocity and sustainability"
    ],
    icon: "structure"
  },
  {
    title: "Participant engagement",
    description: "Keep donors informed with guided messaging, dashboards, and recognition cues.",
    bullets: [
      "Automated invites, reminders, and gratitude messages",
      "Participant portal showing progress, history, and next actions",
      "Mobile notifications when cycles advance or rewards unlock"
    ],
    icon: "engagement"
  },
  {
    title: "Compliance guardrails",
    description: "Protect your programme with documentation, approvals, and real-time oversight.",
    bullets: [
      "Consent and disclosure flows aligned with regional regulations",
      "AML/KYC automations before releasing rewards",
      "Audit-ready logs and exportable reports"
    ],
    icon: "governance"
  },
  {
    title: "AI copilots",
    description: "Surface insights and recommended actions for finance, operations, and community teams.",
    bullets: [
      "Copilot Q&A covering cycle health and donation forecasts",
      "Alerts for unusual activity, saturation, or participant churn",
      "Drafted updates for leadership and community coordinators"
    ],
    icon: "ai"
  }
];

const FAQS: Faq[] = [
  {
    question: "Can we run help and gift plans side by side?",
    answer: "Yes. The calculator supports multiple plan types with separate policies, reporting, and automation triggers."
  },
  {
    question: "Do donors receive receipts automatically?",
    answer: "Receipt templates populate with donation details and are emailed once confirmations complete and approvals are met."
  },
  {
    question: "How do we monitor programme health?",
    answer: "Dashboards show cycle status, donation coverage, churn signals, and compliance alerts in real time."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Help Plan MLM Calculator";
  const description =
    "Model help plan donation cycles, automate communications, and maintain compliance with Cloud MLM Software’s calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/help-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HelpPlanCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function HelpPlanCalculatorPage({ params }: HelpPlanCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-teal-50 via-white to-lime-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(45,212,191,0.18),transparent_45%),radial-gradient(circle_at_88%_-10%,rgba(163,230,53,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <HeartHandshake className="h-4 w-4" aria-hidden />
              Help plan calculator
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Design help plan cycles that inspire generosity and protect compliance.
            </h1>
            <p className="text-lg text-muted-foreground">
              The Cloud MLM Software help plan calculator lets you model donation tables, automate participant journeys, and keep every gift transparent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Arrange a calculator demo
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Key capabilities of the help plan calculator</h2>
          <p className="text-sm text-muted-foreground">
            Build confidence with automated tables, participant engagement tools, and governance frameworks.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SECTIONS.map((section) => (
            <article key={section.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {section.icon === "structure" ? <Layers className="h-5 w-5" aria-hidden /> : null}
                {section.icon === "engagement" ? <Workflow className="h-5 w-5" aria-hidden /> : null}
                {section.icon === "governance" ? <ShieldCheck className="h-5 w-5" aria-hidden /> : null}
                {section.icon === "ai" ? <Bot className="h-5 w-5" aria-hidden /> : null}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
              <p className="text-sm text-muted-foreground">{section.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
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
              Clarity for teams designing community-first donation programmes.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bring your help plan vision to life</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Partner with Cloud MLM Software analysts to configure tables, rehearse cycles, and activate copilots tuned to your community goals.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Plan a discovery session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Watch the calculator demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
