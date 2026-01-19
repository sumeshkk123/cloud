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
  BadgeHelp,
  HandHeart,
  Headset,
  HeartHandshake,
  HelpCircle,
  LifeBuoy
} from "lucide-react";
import {
  ChatsCircle,
  ClockCounterClockwise,
  HandsClapping,
  Lifebuoy as LifebuoyIcon,
  Pulse,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCommitment = {
  title: string;
  description: string;
  icon: IconType;
};

type SupportPillar = {
  title: string;
  body: string;
  bullets: string[];
  icon: IconType;
};

type CoverageItem = {
  label: string;
  detail: string;
  icon: IconType;
};

type ChannelGroup = {
  heading: string;
  items: string[];
};

const HERO_COMMITMENTS: HeroCommitment[] = [
  {
    title: "24/7 access",
    description: "Live chat, email, and phone routes keep founders and field leaders supported day and night.",
    icon: Headset
  },
  {
    title: "Launch guardians",
    description: "We stay in the loop during your first sprints to monitor plan behaviour, payouts, and onboarding.",
    icon: HeartHandshake
  },
  {
    title: "Crisis ready",
    description: "Escalation runbooks and senior specialists step in when the unexpected happens.",
    icon: LifeBuoy
  }
];

const SUPPORT_PILLARS: SupportPillar[] = [
  {
    title: "Proactive monitoring",
    body: "We do not disappear after deployment. Our team watches plan performance, traffic, and compliance signals so you can focus on growth.",
    bullets: [
      "Business analysts track first-stage payouts and rank progress.",
      "Support engineers review ticket volume and backlog health daily.",
      "Status notifications keep executives and field captains informed."
    ],
    icon: ShieldCheck
  },
  {
    title: "Customer-first tooling",
    body: "The Cloud MLM platform arrives with an admin panel, customisable web design, hosting, and secure replicated sites—everything you need to stay in control.",
    bullets: [
      "CMS for pages, terms, and replicated content updates.",
      "Multi-URL engine handles global expansion with ease.",
      "Dashboards illuminate volume, rank, and leg counts at a glance."
    ],
    icon: BadgeHelp
  },
  {
    title: "Expert guidance",
    body: "Binary, matrix, unilevel, or custom—our specialists back every compensation plan with training, crisis management, and technical expertise.",
    bullets: [
      "Dedicated plan consultants to validate rule logic.",
      "Crisis response protocols to restore operations quickly.",
      "Affordable retainers that scale with your network size."
    ],
    icon: HandHeart
  }
];

const COVERAGE: CoverageItem[] = [
  {
    label: "Support rhythm",
    detail: "24×7 availability across Skype, live chat, email, and phone with guaranteed response windows.",
    icon: ChatsCircle
  },
  {
    label: "Knowledge transfer",
    detail: "Hands-on onboarding, video walkthroughs, and documentation tailored to each department.",
    icon: HandsClapping
  },
  {
    label: "Lifecycle partnership",
    detail: "From pre-launch workshops to expansion roadmaps, we stay engaged as your needs evolve.",
    icon: ClockCounterClockwise
  }
];

const CHANNEL_GROUPS: ChannelGroup[] = [
  {
    heading: "Immediate assistance",
    items: [
      "Live chat triage with escalation to senior engineers",
      "Voice support for urgent compensation or compliance questions",
      "Screen-share sessions to resolve onboarding hurdles"
    ]
  },
  {
    heading: "Strategic enablement",
    items: [
      "Monthly health reviews with plan analytics",
      "Crisis rehearsal and incident response planning",
      "Launch playbooks for new products or markets"
    ]
  },
  {
    heading: "Wellness & retention",
    items: [
      "Distributor education hubs with multilingual content",
      "Community forums moderated by Cloud MLM specialists",
      "Pulse surveys to capture sentiment and surface coaching needs"
    ]
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Great Support for MLM Software";
  const description =
    "Experience great support with Cloud MLM Software—24/7 assistance, proactive monitoring, and crisis-ready teams that keep your MLM operations thriving.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/great-support", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GreatSupportPageProps = {
  params: { lang: SupportedLocale };
};

export default function GreatSupportPage({ params }: GreatSupportPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/mlm-consulting", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-violet-900 via-indigo-950 to-slate-950 py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(221,214,254,0.22),transparent_55%),radial-gradient(circle_at_88%_24%,rgba(129,140,248,0.3),transparent_60%),radial-gradient(circle_at_30%_88%,rgba(56,189,248,0.18),transparent_55%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,0.52fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 bg-indigo-400/10 px-4 py-1 text-sm font-semibold text-indigo-100">
              <HelpCircle className="h-4 w-4" aria-hidden />
              Great support, always on
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                World-class support that stays by your side long after go-live.
              </h1>
              <p className="text-base text-slate-200/85">
                We treat support as a strategic advantage. Cloud MLM Software pairs around-the-clock access with proactive monitoring, so your distributors, finance teams, and executives are never left waiting.
              </p>
              <p className="text-sm text-slate-200/70">
                From crisis drills to multilingual training, our specialists help you manage every scenario—keeping business continuity, data security, and user confidence front and centre.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Talk with a support strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-indigo-200/60 text-indigo-100 hover:bg-indigo-400/10">
                <Link href={demoHref}>
                  Explore the support toolkit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur">
            {HERO_COMMITMENTS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-400/20 text-indigo-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-slate-100">{item.title}</h2>
                    <p className="text-sm text-slate-200/80">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Support pillars that go beyond ticket queues</h2>
          <p className="text-sm text-muted-foreground">
            The WordPress page emphasised round-the-clock availability, plan monitoring, and comprehensive tooling. We translated that into pillars that demonstrate how Cloud MLM Software owns every part of the journey.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {SUPPORT_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm">
                <div className="flex items-center gap-3 text-primary">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{pillar.body}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100/70 via-transparent to-transparent dark:from-indigo-900/40" aria-hidden />
        <div className="container space-y-12 py-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Coverage you can rely on every day of the year</h2>
            <p className="text-sm text-muted-foreground">
              Every touchpoint is engineered to protect your business, delight distributors, and keep leadership informed.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {COVERAGE.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-300">
                    <Icon className="h-6 w-6" aria-hidden />
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500/80 dark:text-indigo-200/80">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose the support mix that fits your organisation</h2>
          <p className="text-sm text-muted-foreground">
            Blend immediate assistance, strategic alignment, and wellness programmes so your teams stay productive and confident.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CHANNEL_GROUPS.map((group) => (
            <article key={group.heading} className="rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{group.heading}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <ChatsCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let’s elevate your support culture</h2>
              <p className="text-sm text-muted-foreground">
                Bring us into your next leadership meeting—we will map out post-launch playbooks, escalation paths, and distributor education programmes tailored to your market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Book a working session
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={servicesHref}>
                    Explore consulting services
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Readiness checklist</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <LifebuoyIcon className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Outline 24/7 contact points and escalation owners across regions.</span>
                </li>
                <li className="flex gap-3">
                  <Pulse className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Define success metrics for distributor happiness and ticket resolution.</span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Audit data security, backup cadence, and crisis documentation.</span>
                </li>
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

