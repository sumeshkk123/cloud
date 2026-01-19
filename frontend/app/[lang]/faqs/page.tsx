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
  ClipboardList,
  Compass,
  Headset,
  Lightbulb,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type FaqGroup = {
  id: string;
  label: string;
  description: string;
  icon: "strategy" | "platform" | "support" | "compliance";
  items: Array<{
    question: string;
    answer: string;
  }>;
};

type Stat = {
  label: string;
  value: string;
  detail: string;
};

const HERO_STATS: Stat[] = [
  { label: "Implementation questions answered", value: "5k+", detail: "Captured from workshops and onboarding projects." },
  { label: "AI-assisted responses", value: "2025", detail: "Copilots summarise answers with linked documentation." },
  { label: "Average response time", value: "< 2 hrs", detail: "Global success desk coverage across all regions." }
];

const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "strategy",
    label: "Getting started",
    description: "Understand timelines, delivery models, and what to expect from the Cloud MLM partnership.",
    icon: "strategy",
    items: [
      {
        question: "How long does a typical implementation take?",
        answer:
          "Most programmes go live within 10–14 weeks. We start with a blueprint workshop, configure environments, run sandbox rehearsals, and complete a hypercare period before hand-off."
      },
      {
        question: "Can we migrate from an existing MLM platform?",
        answer:
          "Yes. Our migration toolkit imports genealogy, wallets, commissions, and content. Dry runs validate data integrity before the final cutover."
      },
      {
        question: "Do you offer pilot or phased rollouts?",
        answer:
          "Absolutely. Feature flags and geo segmentation let you launch pilots with select teams, then scale when KPIs and compliance objectives are met."
      }
    ]
  },
  {
    id: "platform",
    label: "Platform & features",
    description: "Dive into plan modelling, mobile apps, analytics, and AI copilots.",
    icon: "platform",
    items: [
      {
        question: "Which compensation plans are supported?",
        answer:
          "Binary, matrix, unilevel, hybrid, board, crowd funding, and custom plans are configurable in the plan studio. Simulation templates accelerate approvals."
      },
      {
        question: "Is there a mobile experience for the field?",
        answer:
          "Yes. The Cloud MLM mobile app delivers onboarding, storefronts, communications, and AI copilots with offline support and localisation."
      },
      {
        question: "How are analytics delivered?",
        answer:
          "Executives receive real-time dashboards, success teams get operational workspaces, and distributors see rank progress. Data exports feed BI tools or data warehouses."
      }
    ]
  },
  {
    id: "support",
    label: "Success & support",
    description: "Learn how we collaborate after launch to keep momentum high.",
    icon: "support",
    items: [
      {
        question: "Do we receive a dedicated success manager?",
        answer:
          "Every customer is paired with a success manager plus specialists for compensation, compliance, and AI. Quarterly reviews and roadmap sessions are included."
      },
      {
        question: "What support channels are available?",
        answer:
          "24/7 ticketing, chat, and scheduled escalation bridges. Copilots summarise tickets and next steps so responses remain consistent across regions."
      },
      {
        question: "Can you train our internal teams?",
        answer:
          "We provide workshops, recorded enablement paths, and certification tracks for administrators, analysts, and field coaches."
      }
    ]
  },
  {
    id: "compliance",
    label: "Compliance & security",
    description: "Stay audit-ready with trust, privacy, and regional governance answers.",
    icon: "compliance",
    items: [
      {
        question: "Where is data hosted?",
        answer:
          "We offer regional hosting in North America, Europe, APAC, and the Middle East. Residency, retention, and encryption policies align with local requirements."
      },
      {
        question: "How do you manage consent and privacy?",
        answer:
          "Consent vaults track marketing, legal, and data processing permissions per contact. APIs synchronise preferences with third-party systems."
      },
      {
        question: "What security attestations are available?",
        answer:
          "SOC 2 Type II reports, penetration tests, and disaster recovery documentation are provided. Additional evidence can be shared under NDA."
      }
    ]
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cloud MLM Software FAQs";
  const description =
    "Get answers to common questions about Cloud MLM Software implementations, platform features, support, and compliance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/faqs", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FaqPageProps = {
  params: { lang: SupportedLocale };
};

export default function FaqPage({ params }: FaqPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_92%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Knowledge you can trust
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Answers for every stage of your Cloud MLM Software journey.
            </h1>
            <p className="text-lg text-muted-foreground">
              From implementation timelines to AI copilots, explore the most common questions customers ask our strategists, engineers, and success teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Ask our team directly
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={resourcesHref}>
                  Visit the resource hub
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

      <section className="container grid gap-10 lg:grid-cols-[280px,1fr]">
        <aside className="space-y-4">
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <h2 className="text-base font-semibold text-foreground">Browse topics</h2>
            <nav className="mt-4 space-y-2 text-sm">
              {FAQ_GROUPS.map((group) => (
                <a key={group.id} className="flex items-center gap-2 text-muted-foreground hover:text-primary" href={`#${group.id}`}>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {group.icon === "strategy" ? <Compass className="h-4 w-4" aria-hidden /> : null}
                    {group.icon === "platform" ? <Lightbulb className="h-4 w-4" aria-hidden /> : null}
                    {group.icon === "support" ? <Headset className="h-4 w-4" aria-hidden /> : null}
                    {group.icon === "compliance" ? <ShieldCheck className="h-4 w-4" aria-hidden /> : null}
                  </span>
                  {group.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <h3 className="text-base font-semibold text-foreground">Need something specific?</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Share your requirements and we will create a tailored brief or workshop agenda for your team.
            </p>
            <Button asChild className="mt-4 w-full">
              <Link href={contactHref}>
                Start a custom Q&A
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </aside>

        <div className="space-y-20">
          {FAQ_GROUPS.map((group) => (
            <section key={group.id} id={group.id} className="space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{group.label}</h2>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  {group.icon === "strategy" ? <Compass className="h-5 w-5" aria-hidden /> : null}
                  {group.icon === "platform" ? <Lightbulb className="h-5 w-5" aria-hidden /> : null}
                  {group.icon === "support" ? <Headset className="h-5 w-5" aria-hidden /> : null}
                  {group.icon === "compliance" ? <ShieldCheck className="h-5 w-5" aria-hidden /> : null}
                </span>
              </div>

              <div className="space-y-4">
                {group.items.map((item) => (
                  <details key={item.question} className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:border-primary/50">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-foreground">
                      {item.question}
                      <span className="text-primary transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Still have questions?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Our specialists can walk through your roadmap, integrations, and change management plans in detail.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a Q&A session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={resourcesHref}>
                Browse the knowledge base
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
