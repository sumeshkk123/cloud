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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarRange,
  MailPlus,
  Rocket,
  Send,
  Users
} from "lucide-react";
import {
  ChatsCircle,
  EnvelopeSimpleOpen,
  PaperPlaneRight
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type WorkflowStep = {
  stage: string;
  title: string;
  description: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Targeted campaign orchestration",
    description:
      "Segment audiences by rank, geography, or behaviour and deliver personalised messages that convert leads into customers.",
    icon: ChatsCircle
  },
  {
    title: "Automation without heavy lifting",
    description:
      "Schedule product drops, renewals, and compliance notices while the system tracks delivery, opens, and link engagement.",
    icon: CalendarRange
  },
  {
    title: "Always-on deliverability",
    description:
      "Cloud infrastructure balances throughput, retries failures, and inserts your brand assets for consistent communication.",
    icon: Rocket
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    stage: "Plan",
    title: "Build the audience blueprint",
    description:
      "Upload lists or sync CRM data, apply smart filters, and preview how each cohort will experience the messaging cadence.",
    icon: Users
  },
  {
    stage: "Compose",
    title: "Design responsive emails",
    description:
      "Drag, drop, and personalise content blocks with product offers, team updates, and social proof in minutes.",
    icon: MailPlus
  },
  {
    stage: "Automate",
    title: "Schedule, send, and monitor",
    description:
      "Trigger immediate sends or drip campaigns, then watch dashboards surface engagement metrics in real time.",
    icon: PaperPlaneRight
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Adaptive sender reputation",
    description: "Warm up IP pools, authenticate domains, and keep bounce rates low through automated health checks.",
    icon: EnvelopeSimpleOpen
  },
  {
    title: "Multi-channel prompts",
    description: "Pair emails with SMS or in-app nudges so field teams never miss promotions or compliance changes.",
    icon: Send
  },
  {
    title: "Campaign intelligence",
    description: "Drill into open, click, and revenue attribution reports that prove how each campaign drives growth.",
    icon: BarChart3
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Mass Email Sending Module";
  const description =
    "Automate bulk communications, personalise outreach, and keep your network engaged with Cloud MLM Software’s mass email module.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mass-email-sending-module", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MassEmailModulePageProps = {
  params: { lang: SupportedLocale };
};

export default function MassEmailModulePage({ params }: MassEmailModulePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-950 via-slate-950 to-indigo-900 py-20 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(56,189,248,0.22),transparent_45%),radial-gradient(circle_at_84%_18%,rgba(139,92,246,0.25),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-200">
              <Send className="h-4 w-4" aria-hidden />
              Mass outreach command centre
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Launch smarter email campaigns that keep your MLM network engaged.
            </h1>
            <p className="text-base text-slate-200/80">
              Plan, personalise, and automate bulk emails without leaving Cloud MLM Software. Reach every distributor and customer with newsletters, product drops, and critical updates that land at the perfect moment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Discuss campaign strategy
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-200/50 text-cyan-100 hover:bg-cyan-400/10">
                <Link href={demoHref}>
                  Watch the module in action
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-400/20 text-indigo-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-slate-100">{highlight.title}</h2>
                  </div>
                  <p className="text-xs text-slate-200/80">{highlight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How your email mission control operates</h2>
          <p className="text-sm text-muted-foreground">
            Move from scattered tools to a single workspace that balances creativity, compliance, and measurable outcomes.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {WORKFLOW.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.stage} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{step.stage}</p>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Built for scale, compliance, and creativity</h2>
            <p className="text-sm text-muted-foreground">
              Control every detail from sender reputation to cross-channel coordination, all while staying laser-focused on results.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-indigo-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-indigo-950/40">
          <div className="absolute -left-16 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Supercharge your next campaign launch</h2>
              <p className="text-sm text-muted-foreground">
                Share your target segments, send volume, and automation goals. Our team will configure templates, workflows, and reporting so you can deploy your next email wave with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Book your configuration session</h3>
                <p className="text-sm text-muted-foreground">
                  Campaign specialists walk through segmentation, creative best practices, and post-send analytics tailored to your objectives.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Schedule now
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
