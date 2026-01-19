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
  Activity,
  ArrowUpRight,
  Bot,
  GaugeCircle,
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Benefit = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type WorkflowStep = {
  title: string;
  description: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Emails orchestrated",
    value: "1.4B",
    detail: "Journeys sent through Cloud MLM Software marketing automation."
  },
  {
    label: "Average engagement uplift",
    value: "28%",
    detail: "Increase in opens and clicks after deploying segmented journeys."
  },
  {
    label: "Languages supported",
    value: "36",
    detail: "Localized templates and consent workflows for global markets."
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Lifecycle journeys",
    description: "Automate onboarding, promotions, renewals, and compliance reminders.",
    icon: Layers,
    bullets: [
      "Multi-step automation driven by CRM and ecommerce events",
      "Dynamic content blocks personalise messaging per region",
      "Performance dashboards tie engagement to revenue"
    ]
  },
  {
    title: "Governance ready",
    description: "Protect deliverability and compliance across every market.",
    icon: ShieldCheck,
    bullets: [
      "Consent vault and preference management per channel",
      "Approval workflows for legal and brand teams",
      "Deliverability monitoring across IPs and domains"
    ]
  },
  {
    title: "AI productivity",
    description: "Copilots draft, analyse, and optimise email programmes in minutes.",
    icon: Bot,
    bullets: [
      "AI copy aligned with tone and compliance guardrails",
      "Automated performance summaries and recommendations",
      "Predictive send time and subject line testing"
    ]
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    title: "Plan",
    description: "Define journeys, audiences, and success metrics with Cloud MLM strategists.",
    icon: GaugeCircle
  },
  {
    title: "Create",
    description: "Build templates, content, and automations with collaborative approvals.",
    icon: MessageSquare
  },
  {
    title: "Optimise",
    description: "Experiment, analyse, and iterate with copilot guidance and success reviews.",
    icon: Activity
  }
];

const FAQS: Faq[] = [
  {
    question: "Which email platforms can we connect?",
    answer: "Native connectors support leading ESPs, plus SMTP and REST APIs for custom integrations."
  },
  {
    question: "How do you manage localisation?",
    answer: "Translation workflows, dynamic content, and consent tracking ensure each market receives compliant messaging."
  },
  {
    question: "Do you offer deliverability assistance?",
    answer: "Our success desk monitors deliverability health, works with ISPs, and provides proactive recommendations."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Email Orchestration for MLM";
  const description =
    "Design compliant, AI-assisted email journeys for MLM programmes with Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/emails", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EmailsPageProps = {
  params: { lang: SupportedLocale };
};

export default function EmailsPage({ params }: EmailsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_90%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <MessageSquare className="h-4 w-4" aria-hidden />
              Email automation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Orchestrate personalised, compliant email journeys at scale.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software blends lifecycle automation, governance, and AI copilots so your marketing and success teams deliver the right messages at the right time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to an email strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the email demo
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why teams rely on Cloud MLM Software emails</h2>
          <p className="text-sm text-muted-foreground">
            Launch sophisticated journeys faster while safeguarding deliverability and compliance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow that keeps campaigns moving</h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM specialists from planning to optimisation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {WORKFLOW.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Quick answers for marketing and success teams.
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
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to elevate email journeys?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Book a working session and see how Cloud MLM Software can orchestrate compliant, personalised emails for your network.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a strategy call
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
