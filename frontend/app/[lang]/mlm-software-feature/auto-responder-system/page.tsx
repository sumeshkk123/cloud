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
  CalendarClock,
  Inbox,
  MailOpen,
  Network,
  Send,
  Sparkles,
  UsersRound,
  Workflow
} from "lucide-react";
import {
  ChatsCircle,
  FunnelSimple,
  PaperPlaneTilt,
  Timer
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBullet = {
  title: string;
  description: string;
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Mode = {
  name: string;
  summary: string;
  insight: string;
  icon: IconType;
};

type Benefit = {
  title: string;
  description: string;
  icon: IconType;
};

type ComponentItem = {
  label: string;
  detail: string;
  icon: IconType;
};

const HERO_BULLETS: HeroBullet[] = [
  {
    title: "Pipeline ready contacts",
    description:
      "Capture every lead from forms, referrals, and landing pages so your field teams always have fresh conversations queued.",
    icon: Inbox
  },
  {
    title: "Sequenced follow-ups",
    description:
      "Schedule nurture emails across days or months and adjust cadence as behaviour changes without touching code.",
    icon: CalendarClock
  },
  {
    title: "Campaign clarity",
    description:
      "Inspect revenue impact by country, coupon, or pack type and keep compliance in the loop with shareable dashboards.",
    icon: Network
  }
];

const FEATURES: Feature[] = [
  {
    title: "Email marketing autopilot",
    description:
      "Build, launch, and monetise subscriber lists with workspace tooling that keeps configuration approachable for any team.",
    icon: Workflow
  },
  {
    title: "Stay connected anywhere",
    description:
      "Executives, administrators, and home-based leaders manage communication from any device with enterprise-grade security.",
    icon: UsersRound
  },
  {
    title: "Leads you can trust",
    description:
      "Import earned leads, preserve attribution value, and know every message is dispatched with the right permissions.",
    icon: Sparkles
  },
  {
    title: "Hands-off operations",
    description:
      "Once configured, autoresponder journeys keep running—freeing your experts to focus on strategy instead of manual sends.",
    icon: Send
  }
];

const MODES: Mode[] = [
  {
    name: "Bulk emailers",
    summary:
      "Deliver curated campaigns to self-built or purchased lists and repeat sends as often as your plan requires.",
    insight:
      "Perfect for network marketers who need dependable list delivery and flexible cadence management.",
    icon: PaperPlaneTilt
  },
  {
    name: "Open loop responders",
    summary:
      "Legacy systems that send without confirmation—best reserved for bespoke deployments with heavy technical oversight.",
    insight:
      "Modern ISPs filter these aggressively, so we only recommend them for specialist, self-hosted workloads.",
    icon: Timer
  },
  {
    name: "Closed loop responders",
    summary:
      "Opt-in sequences paired with landing pages to build your own lists and automate prospect education over time.",
    insight:
      "High deliverability and compliance make this the go-to model for premium brands blending automation with trust.",
    icon: FunnelSimple
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Growth engineered",
    description:
      "Capture names, emails, and phone numbers while aligning each touchpoint with the distributor journey you designed.",
    icon: MailOpen
  },
  {
    title: "Momentum without overload",
    description:
      "Prepackage daily or yearly sequences so announcements, offers, and onboarding lessons always land on time.",
    icon: Timer
  },
  {
    title: "Launch-day confidence",
    description:
      "Queue broadcast campaigns in advance and trigger them automatically when new packs, promos, or markets go live.",
    icon: PaperPlaneTilt
  }
];

const COMPONENTS: ComponentItem[] = [
  {
    label: "Link to social media",
    detail: "Curate headlines and creatives that push your community from the inbox to active conversations.",
    icon: ChatsCircle
  },
  {
    label: "Link to blogs",
    detail: "Feed prospects with depth from your knowledge base and boost organic reach with every send.",
    icon: Workflow
  },
  {
    label: "Capture data",
    detail: "Own first-party insights by collecting names, emails, and contact numbers at the point of engagement.",
    icon: Network
  },
  {
    label: "Anticipated emails",
    detail: "Stage entire series in advance so new sign-ups inherit the exact cadence you promised their sponsors.",
    icon: CalendarClock
  },
  {
    label: "Broadcast agility",
    detail: "Queue product drops or partner collaborations and let automation release them at the precise moment required.",
    icon: Send
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Auto Responder System";
  const description =
    "Automate nurture sequences, broadcast launches, and capture compliant leads with Cloud MLM Software’s enterprise-grade auto responder system.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/auto-responder-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AutoResponderSystemPageProps = {
  params: { lang: SupportedLocale };
};

export default function AutoResponderSystemPage({ params }: AutoResponderSystemPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-cyan-100 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(14,165,233,0.15),transparent_55%),radial-gradient(circle_at_88%_18%,rgba(165,180,252,0.18),transparent_52%),radial-gradient(circle_at_52%_88%,rgba(56,189,248,0.2),transparent_55%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/70 bg-white/70 px-4 py-1 text-sm font-semibold text-sky-700 dark:border-sky-500/60 dark:bg-slate-900/70 dark:text-sky-200">
              <MailOpen className="h-4 w-4" aria-hidden />
              Auto responder intelligence
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Auto responder system engineered for always-on MLM engagement.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Generate leads, nurture every prospect, and surface the insights leaders crave. Cloud MLM Software orchestrates welcome journeys, promotional pushes, and compliance-driven messages without manual work.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300/70">
                Configure journeys by geography, product pack, or distributor rank and let the platform adjust cadence automatically when contacts interact with your funnels.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design my nurture blueprint
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-400/50 text-sky-700 hover:bg-sky-100 dark:border-sky-400/40 dark:text-sky-200 dark:hover:bg-slate-900/60">
                <Link href={demoHref}>
                  Explore a live workspace
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-sky-200/80 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_BULLETS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex flex-col gap-3 rounded-2xl border border-sky-200/60 bg-sky-50/90 p-5 dark:border-white/10 dark:bg-slate-900/60">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What switches on with Cloud MLM autoresponders</h2>
          <p className="text-sm text-muted-foreground">
            Built for executives and field leaders who want automation that stays human, compliant, and measurable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Three responder modes, one coordinated platform</h2>
            <p className="text-sm text-muted-foreground">
              Choose the mechanism that fits your go-to-market model, then layer Cloud MLM guidance on top for predictable outcomes.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {MODES.map((mode) => {
              const Icon = mode.icon;
              return (
                <article key={mode.name} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{mode.name}</h3>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Core understanding</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{mode.summary}</p>
                  <p className="text-sm font-medium text-foreground">{mode.insight}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why every launch partner insists on autoresponders</h2>
            <p className="text-sm text-muted-foreground">
              The system captures information, protects brand experience, and ensures messages contain the value your customers expect.
            </p>
            <div className="space-y-4 rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-6 shadow-sm dark:border-primary/50 dark:from-primary/10 dark:via-slate-950">
              <p className="text-sm text-muted-foreground">
                Auto responders remain the backbone of digital MLM marketing. They let you collect and segment contacts, deliver education, and prime purchase intent—all while storing proof for regulators and banking partners.
              </p>
              <p className="text-sm text-muted-foreground">
                Once journeys are built, automation keeps working in the background so your teams can focus on coaching, storytelling, and high-impact interactions.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Components that keep your messaging machine aligned</h2>
          <p className="text-sm text-muted-foreground">
            Mix brand storytelling, compliance needs, and automation control without sacrificing the personal tone that builds loyalty.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMPONENTS.map((component) => {
            const Icon = component.icon;
            return (
              <article key={component.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">{component.label}</h3>
                  <p className="text-sm text-muted-foreground">{component.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-sky-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/10 dark:via-slate-950 dark:to-slate-950">
          <div className="absolute -left-16 -top-12 h-48 w-48 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to let automation grow your referrals?</h2>
              <p className="text-sm text-muted-foreground">
                Share the cadence you want to run—daily onboarding, weekly recognition, seasonal launches—and we will configure the auto responder system to execute flawlessly.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/85 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Book a strategy session</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborate with Cloud MLM specialists to map triggers, compliance checkpoints, and multi-channel prompts tailored to your brand.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Speak with an expert
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={demoHref}>
                    Request a guided demo
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
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
