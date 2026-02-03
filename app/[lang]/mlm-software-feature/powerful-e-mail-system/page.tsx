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
  ClipboardList,
  FileText,
  Filter,
  Globe2,
  Layers3,
  MailCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Users2
} from "lucide-react";
import {
  ChatsCircle,
  EnvelopeSimpleOpen,
  Faders,
  PaperPlaneTilt
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  title: string;
  description: string;
  icon: IconType;
};

type CommunicationEnabler = {
  heading: string;
  description: string;
  points: string[];
  icon: IconType;
};

type BusinessCase = {
  label: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type Playbook = {
  title: string;
  outcome: string;
  steps: string[];
  icon: IconType;
};

type Safeguard = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    title: "Global-ready messaging",
    description:
      "Deliver compliant broadcasts, campaigns, and reminders across every region and time zone without format drift.",
    icon: Globe2
  },
  {
    title: "Sequenced follow-ups",
    description:
      "Automated journeys nurture recruits, activate orders, and reinforce compliance long after the first send.",
    icon: Send
  },
  {
    title: "Measured engagement",
    description:
      "Track delivery, responses, and handoffs so leadership sees what resonates and where to optimise next.",
    icon: ClipboardList
  }
];

const COMMUNICATION_ENABLERS: CommunicationEnabler[] = [
  {
    heading: "High-velocity communication",
    description:
      "Email keeps the organisation aligned without pulling people into constant meetings. It scales from one-to-one coaching to global announcements instantly.",
    points: [
      "Share product updates, promotions, and compliance advisories in minutes.",
      "Support both scheduled newsletters and rapid-response alerts when conditions change.",
      "Give leaders traceability with time-stamped archives of every critical decision."
    ],
    icon: MailCheck
  },
  {
    heading: "Flexible by design",
    description:
      "The medium adapts to attachments, documents, and multimedia so teams can send exactly what members need—no context lost.",
    points: [
      "Attach playbooks, onboarding guides, and inventory sheets directly in each message.",
      "Enable asynchronous collaboration for teams working across continents and time zones.",
      "Create audience filters that keep noise out of inboxes and highlight relevant actions."
    ],
    icon: Layers3
  },
  {
    heading: "Trusted record of action",
    description:
      "Every conversation is searchable, auditable, and ready for future reference—critical for regulated MLM operations.",
    points: [
      "Leverage secure archives for dispute resolution and compliance reviews.",
      "Identify sentiment trends and support gaps through conversation analytics.",
      "Prove delivery with read receipts, engagement scoring, and follow-up status."
    ],
    icon: ShieldCheck
  }
];

const BUSINESS_CASES: BusinessCase[] = [
  {
    label: "Private company communication",
    summary: "Replace fragmented updates with a governed inbox that accelerates decisions.",
    detail:
      "Leadership distributes policy changes, financial notices, and strategy recaps with the assurance that every stakeholder receives a consistent message.",
    icon: ChatsCircle
  },
  {
    label: "Marketing to clients",
    summary: "Run demand-generation programs without heavy ad spend.",
    detail:
      "Segmented broadcasts promote launches, incentives, and loyalty campaigns while maintaining brand voice and opt-in compliance.",
    icon: Sparkles
  },
  {
    label: "Client support",
    summary: "Resolve issues faster by letting members document the full story.",
    detail:
      "Service teams receive clear written requests—complete with attachments—so they can respond accurately and keep a record of every resolution.",
    icon: EnvelopeSimpleOpen
  }
];

const PLAYBOOKS: Playbook[] = [
  {
    title: "Launch a global promotion",
    outcome: "Campaign assets and purchase links go live for every market within hours, not days.",
    steps: [
      "Draft multilingual templates with dynamic personalisation fields.",
      "Schedule rollouts based on regional time zones and peak engagement windows.",
      "Route high-intent replies to sales or support leaders automatically."
    ],
    icon: PaperPlaneTilt
  },
  {
    title: "Reinforce compliance milestones",
    outcome: "Distributors receive timely reminders before expirations or audits occur.",
    steps: [
      "Trigger notifications from KYC, payout, or policy systems the moment thresholds are met.",
      "Attach the required documents or forms so recipients can act immediately.",
      "Escalate unresolved actions to managers with a complete communication trail."
    ],
    icon: ShieldCheck
  },
  {
    title: "Onboard a new market",
    outcome: "Training, governance, and product knowledge arrive as soon as a region opens.",
    steps: [
      "Send welcome journeys that introduce teams, tools, and expectations in digestible stages.",
      "Embed videos, PDFs, and interactive assets without leaving the Cloud MLM environment.",
      "Monitor engagement signals to identify where extra coaching is required."
    ],
    icon: Sparkles
  },
  {
    title: "Sustain leadership alignment",
    outcome: "Executive teams stay synchronised even while travelling or working remotely.",
    steps: [
      "Provide weekly scorecards with linked dashboards and commentary threads.",
      "Highlight decisions, approvals, and follow-ups with structured tags.",
      "Store summaries in a searchable knowledge base accessible to authorised leaders."
    ],
    icon: Users2
  }
];

const SAFEGUARDS: Safeguard[] = [
  {
    title: "Precision targeting",
    detail: "Layer filters, roles, and behavioural signals to ensure every message reaches the right segment and nobody else.",
    icon: Filter
  },
  {
    title: "Performance telemetry",
    detail: "Dashboards reveal delivery rates, opens, click-throughs, and replies so you iterate campaigns with real evidence.",
    icon: FileText
  },
  {
    title: "Human + AI harmony",
    detail: "Draft with AI assistance, then apply human oversight and approval workflows so messaging stays on-brand and compliant.",
    icon: Faders
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Powerful E-mail System Feature | Cloud MLM Software";
  const description =
    "Orchestrate high-impact email communication across your MLM enterprise. Automate journeys, govern messaging, and keep every stakeholder aligned.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/powerful-e-mail-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PowerfulEmailSystemPageProps = {
  params: { lang: SupportedLocale };
};

export default function PowerfulEmailSystemPage({ params }: PowerfulEmailSystemPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.2),transparent_60%),radial-gradient(circle_at_85%_25%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(14,116,144,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(14,116,144,0.35),transparent_50%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-semibold text-cyan-700 dark:border-cyan-400/50 dark:bg-cyan-500/10 dark:text-cyan-100">
              <MailCheck className="h-4 w-4" />
              Intelligent email delivery
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Powerful email system built for visionary MLM enterprises
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Cloud MLM Software equips your teams with an enterprise email backbone that keeps communication fast, documented, and globally consistent—supporting marketing, sales, and support in one secure environment.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                <Link href={demoHref}>
                  Request custom demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-200/30 dark:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800">
                <Link href={contactHref}>Talk to an email strategist</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Role-based access controls
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                AI-assisted drafting with human oversight
              </span>
            </div>
          </div>
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            {HERO_SIGNALS.map((signal) => (
              <div key={signal.title} className="rounded-xl border border-slate-200/70 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-900/50">
                <div className="flex items-start gap-3">
                  <signal.icon className="mt-1 h-8 w-8 text-cyan-600 dark:text-cyan-200" />
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-slate-900 dark:text-white">{signal.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{signal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <EnvelopeSimpleOpen className="h-4 w-4" />
            Communication intelligence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Every message becomes a strategic asset
          </h2>
          <p className="text-base text-muted-foreground">
            Email provides the richest combination of speed, attachments, and auditability—ideal for orchestrating growth across complex MLM networks without creating noise.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {COMMUNICATION_ENABLERS.map((enabler) => (
            <div key={enabler.heading} className="relative flex h-full flex-col gap-6 rounded-2xl border border-border/70 bg-gradient-to-br from-background via-background to-muted/40 p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <enabler.icon className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-semibold">{enabler.heading}</h3>
              </div>
              <p className="text-base text-muted-foreground">{enabler.description}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {enabler.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-4 w-4 text-cyan-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/30 py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
              <ChatsCircle className="h-4 w-4" />
              Strategic outcomes
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Why modern MLM organisations rely on Cloud MLM email
            </h2>
            <p className="text-base text-muted-foreground">
              Email is the backbone of digital relationship management. It carries the full story—documents, links, and next steps—so teams can collaborate asynchronously while maintaining a lasting record.
            </p>
            <div className="rounded-xl border border-border/70 bg-background p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Highlights</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  Fully documented conversations replace memory-based approvals.
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-cyan-500" />
                  Opt-in governance and spam controls keep reputations intact.
                </li>
                <li className="flex items-center gap-2">
                  <Layers3 className="h-4 w-4 text-cyan-500" />
                  Supports attachments, images, and links without sacrificing speed.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-3 top-1 bottom-1 hidden w-px bg-gradient-to-b from-cyan-500/60 via-cyan-500/20 to-transparent lg:block" aria-hidden />
            <div className="space-y-10">
              {BUSINESS_CASES.map((businessCase, index) => (
                <div key={businessCase.label} className="relative rounded-2xl border border-border/70 bg-background p-6 shadow-sm">
                  <div className="absolute -left-6 top-6 hidden h-3 w-3 rounded-full border-2 border-white bg-cyan-500 shadow-md lg:block" aria-hidden />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-3">
                      <businessCase.icon className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-xl font-semibold">{businessCase.label}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-muted-foreground">{businessCase.summary}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{businessCase.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <PaperPlaneTilt className="h-4 w-4" />
              Operational playbooks
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Repeatable email journeys that move the business forward
            </h2>
            <p className="text-base text-muted-foreground">
              Convert everyday communication into orchestrated workflows. Each playbook blends automation with human touchpoints so teams respond faster while keeping experiences personal.
            </p>
            <Button asChild variant="outline" className="w-fit gap-2">
              <Link href={featuresHref}>
                Explore more features
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PLAYBOOKS.map((playbook) => (
              <div key={playbook.title} className="flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-muted/30 p-6">
                <div className="flex items-center gap-3">
                  <playbook.icon className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-lg font-semibold">{playbook.title}</h3>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{playbook.outcome}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {playbook.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <ArrowUpRight className="mt-1 h-4 w-4 text-cyan-500" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-20 text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:border-cyan-400/50 dark:bg-cyan-500/10 dark:text-cyan-100">
                <Faders className="h-4 w-4" />
                Control & insight
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Safeguards and intelligence built for enterprise scale
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software combines human expertise with AI support so every email delivers value, preserves trust, and contributes to a searchable knowledge trail.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {SAFEGUARDS.map((safeguard) => (
                <div key={safeguard.title} className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                  <safeguard.icon className="h-8 w-8 text-cyan-600 dark:text-cyan-200" />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{safeguard.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-200">{safeguard.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 rounded-3xl border border-border/70 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 p-12 shadow-sm sm:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] sm:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Ready to modernise communication across your network?
            </h2>
            <p className="text-base text-muted-foreground">
              Partner with Cloud MLM Software to design an email strategy that scales with your ambitions—connecting marketing, operations, and support through one trusted channel.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="gap-2">
                <Link href={demoHref}>
                  Start your tailored demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href={contactHref}>
                  Consult with our experts
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-border/60 bg-background/80 p-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <MailCheck className="h-5 w-5 text-cyan-500" />
              Enterprise-grade deliverability monitoring
            </div>
            <div className="flex items-center gap-3">
              <Users2 className="h-5 w-5 text-cyan-500" />
              Collaboration spaces for marketing, sales, and support
            </div>
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-cyan-500" />
              Consent-first lists with advanced segmentation controls
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: SupportedLocale): Locale {
  if (isSupportedLocale(lang)) {
    return lang;
  }

  return i18n.defaultLocale as Locale;
}
