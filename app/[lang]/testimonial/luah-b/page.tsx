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
  AlarmClock,
  ArrowUpRight,
  Bolt,
  Headphones,
  Heart,
  MessageCircle,
  MessagesSquare,
  Smile,
  Sparkles,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ResponsivenessLayer = {
  title: string;
  detail: string;
  icon: IconType;
};

type ServiceSprint = {
  phase: string;
  highlight: string;
  description: string;
  icon: IconType;
};

type DelightMetric = {
  label: string;
  value: string;
  explanation: string;
  icon: IconType;
};

const RESPONSIVENESS_LAYERS: ResponsivenessLayer[] = [
  {
    title: "Conversation-first culture",
    detail: "Luah’s teams access dedicated chat rooms, voice bridges, and huddles in minutes.",
    icon: MessageCircle
  },
  {
    title: "Solution accelerators",
    detail: "Knowledge packs, code snippets, and sandbox demos resolve questions without delay.",
    icon: Sparkles
  },
  {
    title: "Care-driven follow-through",
    detail: "Every interaction concludes with a recap, owner, and next step so nothing slips.",
    icon: Heart
  }
];

const SERVICE_SPRINTS: ServiceSprint[] = [
  {
    phase: "Sprint 01",
    highlight: "Communication choreography",
    description: "Defined escalation paths, availability windows, and notification preferences across time zones.",
    icon: Workflow
  },
  {
    phase: "Sprint 02",
    highlight: "Response accelerators",
    description: "Embedded AI copilots, diagnostic scripts, and ready-to-launch playbooks for frequent asks.",
    icon: Bolt
  },
  {
    phase: "Sprint 03",
    highlight: "Relationship rituals",
    description: "Monthly gratitude wraps and intention setting keep collaboration human, fast, and energising.",
    icon: MessagesSquare
  }
];

const DELIGHT_METRICS: DelightMetric[] = [
  {
    label: "Average response time",
    value: "11 min",
    explanation: "Measured across 24/7 channels, even during product launches and campaigns.",
    icon: AlarmClock
  },
  {
    label: "Issue resolution",
    value: "98%",
    explanation: "Tickets closed without escalation thanks to empowered frontline specialists.",
    icon: Headphones
  },
  {
    label: "Partner satisfaction",
    value: "5/5",
    explanation: "Luah’s feedback scores emphasise empathy, speed, and shared ownership.",
    icon: Smile
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Luah B. Testimonial | Responsive MLM Partnership";
  const description =
    "See how Luah B. benefits from Cloud MLM Software’s fast, friendly, and skilled support. Explore responsiveness layers, service sprints, and delight metrics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial/luah-b", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type LuahPageProps = {
  params: { lang: SupportedLocale };
};

export default function LuahPage({ params }: LuahPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const supportHref = buildLocalizedPath("/support", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-blue-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(167,139,250,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(56,189,248,0.2),transparent_58%),radial-gradient(circle_at_52%_86%,rgba(129,140,248,0.16),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700 dark:border-purple-400/30 dark:bg-purple-500/10 dark:text-purple-200">
              Responsiveness spotlight
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Luah B. enjoys lightning-fast support and warm collaboration with Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              “Best communication and skill very good with fast response. So far all good — nothing to complain about, everything is the best.”
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Shape your service model
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={supportHref}>
                  Review support playbooks
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Responsiveness layers</p>
            <div className="grid gap-4">
              {RESPONSIVENESS_LAYERS.map((layer) => {
                const Icon = layer.icon;
                return (
                  <article key={layer.title} className="flex gap-4 rounded-2xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{layer.title}</h3>
                      <p className="text-sm text-muted-foreground">{layer.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Service sprints</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A rhythm that keeps response times swift and thoughtful.</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Cloud MLM Software’s service design ensures every channel and ritual reinforces speed with empathy.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICE_SPRINTS.map((sprint) => {
            const Icon = sprint.icon;
            return (
              <article key={sprint.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-7 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{sprint.phase}</p>
                    <h3 className="text-lg font-semibold text-foreground">{sprint.highlight}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{sprint.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Delight metrics</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Proof that agility and care can co-exist.</h2>
            <p className="text-sm text-muted-foreground">
              Luah’s leadership team reviews these metrics to ensure the partnership keeps exceeding expectations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {DELIGHT_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                      <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.explanation}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-purple-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-purple-900/30">
          <div className="absolute left-10 top-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let’s co-design your responsive service culture.</h2>
              <p className="text-sm text-muted-foreground">
                Share your customer touchpoints, service metrics, and collaboration rituals. Cloud MLM Software will help you deliver kindness at speed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Book a service design session
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={supportHref}>
                    Explore partner resources
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">Session checklist</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current response-time goals and escalation ladder.</li>
                <li>• Team roles and collaboration tools you rely on.</li>
                <li>• Service moments where you want to inject more delight.</li>
              </ul>
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
