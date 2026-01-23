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
  CalendarDays,
  Wine,
  CircleDollarSign,
  Gift,
  PartyPopper,
  Sparkles,
  Users
} from "lucide-react";
import { HandHeart, MusicNote } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Experience = {
  title: string;
  detail: string;
  icon: IconType;
};

type Step = {
  label: string;
  heading: string;
  copy: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Celebration-driven selling",
    description:
      "Party plan teams thrive on experiences. The demo shows how to coordinate invitations, hosts, and themed bundles with zero spreadsheets.",
    icon: PartyPopper
  },
  {
    title: "Rewards that delight",
    description:
      "Track host credits, free gifts, and limited-edition drops so every event feels exclusive and drives conversions.",
    icon: Gift
  },
  {
    title: "From living room to livestream",
    description:
      "Blend in-person gatherings with virtual showcases, allowing consultants to sell across geographies in real time.",
    icon: Sparkles
  }
];

const EXPERIENCES: Experience[] = [
  {
    title: "Host & guest hub",
    detail: "Collect RSVPs, personalise reminders, and surface post-party follow-ups that keep relationships warm.",
    icon: Users
  },
  {
    title: "Event commerce",
    detail: "Bundle products, manage inventory buffers, and process orders directly from the party dashboard.",
    icon: Wine
  },
  {
    title: "Compensation clarity",
    detail: "Visualise how party volume rolls into weekly commissions, bonuses, and leaderboards for each consultant.",
    icon: CircleDollarSign
  }
];

const STEPS: Step[] = [
  {
    label: "Before the party",
    heading: "Curate the guest list and set the scene",
    copy:
      "Hosts collaborate with consultants to choose themes, share invitations, and pre-sell best-sellers so the party launches with momentum."
  },
  {
    label: "During the party",
    heading: "Deliver immersive product moments",
    copy:
      "Switch between demo kits, interactive polls, and live order capture. The system assigns rewards instantly so excitement stays high."
  },
  {
    label: "After the party",
    heading: "Convert interest into loyalty",
    copy:
      "Schedule thank-you notes, nurture sequences, and re-order prompts. Hosts track credit usage while consultants plan the next celebration."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Party Plan Software Demo";
  const description =
    "Experience Cloud MLM Software’s party plan demo—coordinate hosts, rewards, and hybrid events that turn celebrations into sales.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-party-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PartyPlanDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function PartyPlanDemoPage({ params }: PartyPlanDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-rose-50 via-white to-fuchsia-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-fuchsia-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(244,114,182,0.18),transparent_48%),radial-gradient(circle_at_82%_10%,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-rose-200/15 px-4 py-1 text-sm font-semibold text-rose-500 dark:text-rose-200">
              Party plan experience
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Turn every party into a revenue-generating celebration.
            </h1>
            <p className="text-base text-muted-foreground">
              Party plan leaders need tools that balance fun with flawless execution. Our demo captures the energy of live events while automating host credits, guest offers, and post-party nurture journeys.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Reserve my demo slot
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref}>
                  Explore pricing options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 dark:bg-slate-900/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-200/30 text-rose-500 dark:text-rose-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground">{highlight.title}</h2>
                  </div>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What you’ll see in the demo</h2>
          <p className="text-sm text-muted-foreground">
            Party plan success hinges on momentum, atmosphere, and follow-up. These experiences show how the platform supports every moment.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((experience) => {
            const Icon = experience.icon;
            return (
              <article key={experience.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                <p className="text-sm text-muted-foreground">{experience.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we choreograph each celebration</h2>
            <p className="text-sm text-muted-foreground">
              From invitation to gratitude, the demo maps out a repeatable rhythm your teams can trust.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <article key={step.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{step.label}</p>
                  <h3 className="text-lg font-semibold text-foreground">{step.heading}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-rose-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-rose-950/40">
          <div className="absolute -left-20 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-rose-200/25 blur-3xl dark:bg-rose-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Plan your next party launch with us</h2>
              <p className="text-sm text-muted-foreground">
                Share your product lineup, event cadence, and desired host perks. We’ll tailor the demo to mirror your brand experience and outline the migration path.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Schedule your consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Expect a response within one business day with agenda options and prep materials for your team.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Book now
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
