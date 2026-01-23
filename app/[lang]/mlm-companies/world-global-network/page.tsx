import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Globe,
  HeartPulse,
  MapPin,
  Radio,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ChatsCircle, ClipboardText, Devices, Heartbeat, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type InnovationStream = {
  title: string;
  description: string;
  promise: string;
  icon: IconType;
};

type CommunityPillar = {
  title: string;
  narrative: string;
  icon: IconType;
};

type JourneyStage = {
  stage: string;
  focus: string;
  enablement: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Global revenue",
    value: "$119M+",
    detail: "Wearables, wellness devices, and digital experiences power recurring growth.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2011",
    detail: "Born to connect health, technology, and community into one global family.",
    icon: Sparkles
  },
  {
    label: "Compensation",
    value: "Multi-level",
    detail: "Rewards storytelling, leadership development, and sustainable customer care.",
    icon: ShieldCheck
  },
  {
    label: "Core team",
    value: "200 employees",
    detail: "Product, science, and experience teams spread across three continents.",
    icon: Users
  },
  {
    label: "Primary markets",
    value: "U.S. • Asia • Europe",
    detail: "Digitally localized journeys ensure every member feels seen and supported.",
    icon: Globe
  }
];

const INNOVATION_STREAMS: InnovationStream[] = [
  {
    title: "Wearable intelligence",
    description:
      "Advanced wristbands and smart devices track vitals, lifestyle habits, and progress in real time.",
    promise: "Transforms wellness insights into proactive guidance and personalised coaching prompts.",
    icon: Activity
  },
  {
    title: "Health monitoring cloud",
    description:
      "AI-enhanced dashboards aggregate biometrics, environmental data, and habit trends for every member.",
    promise: "Delivers actionable alerts, early detections, and community challenges that inspire change.",
    icon: HeartPulse
  },
  {
    title: "Digital community platforms",
    description:
      "Apps, live streams, and virtual events connect World Changers with customers wherever they are.",
    promise: "Fosters trust, accountability, and lifelong relationships beyond traditional parties.",
    icon: Radio
  }
];

const COMMUNITY_PILLARS: CommunityPillar[] = [
  {
    title: "People-first storytelling",
    narrative:
      "World Changers share lived experiences that make wellness data human, relatable, and inspiring.",
    icon: ChatsCircle
  },
  {
    title: "Guided transformation",
    narrative:
      "Personalized onboarding, accountability circles, and coaching loops help members hit health milestones.",
    icon: Heartbeat
  },
  {
    title: "Trust through compliance",
    narrative: "Transparent claims, data privacy protocols, and ethical AI keep innovation responsible.",
    icon: ClipboardText
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: "Inspire & connect",
    focus:
      "Launch hybrid events that blend live demos, success stories, and digital dashboards to spark curiosity.",
    enablement: "Content orchestration, invite sequencing, and AI topic recommendations sharpen relevance.",
    icon: Devices
  },
  {
    stage: "Activate & coach",
    focus:
      "Guide new members through device setup, baseline scans, and habit stacking with celebrations at every win.",
    enablement: "Automated onboarding journeys, playbooks, and mentor matching keep momentum high.",
    icon: Cpu
  },
  {
    stage: "Sustain & scale",
    focus:
      "Layer subscription programs, wellness challenges, and leadership tracks that expand impact regionally.",
    enablement: "Predictive analytics, loyalty scoring, and multilingual assets unlock global scale.",
    icon: UsersThree
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Wellness data fabric",
    description:
      "Unifies wearable telemetry, lifestyle tracking, and community engagement into one intelligence layer.",
    outcome: "Surfaces personalised nudges and upsell moments without overwhelming the field.",
    icon: HeartPulse
  },
  {
    title: "World Changer cockpit",
    description:
      "Equips distributors with AI drafting assistants, compliance guardrails, and live coaching analytics.",
    outcome: "Saves hours on prep while protecting brand voice and regulatory standards.",
    icon: Devices
  },
  {
    title: "Connected event engine",
    description:
      "Designs hybrid parties with agenda templates, content swaps, and real-time audience sentiment.",
    outcome: "Elevates conversion rates and keeps experiences fresh across markets.",
    icon: Radio
  },
  {
    title: "Trust & privacy vault",
    description:
      "Automates consent logs, data residency controls, and AI transparency dashboards for every region.",
    outcome: "Builds enduring trust and accelerates approvals with regulators and partners.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "World Global Network Wellness Innovation Blueprint";
  const description =
    "See how World Global Network’s wearable wellness mission scales with Cloud MLM Software for compliant, community-led growth across the United States, Asia, and Europe.";
  const keywords = [
    "World Global Network strategy",
    "wearable wellness MLM software",
    "World Changer enablement platform",
    "Cloud MLM Software wellness automation",
    "multi-level wellness technology"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/world-global-network", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WorldGlobalNetworkPageProps = {
  params: { lang: SupportedLocale };
};

export default function WorldGlobalNetworkPage({ params }: WorldGlobalNetworkPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-950 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.32),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(129,140,248,0.28),transparent_60%),radial-gradient(circle_at_50%_85%,rgba(45,212,191,0.25),transparent_55%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-sky-100">
              World Global Network • Wellness innovation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Transform wellness journeys with data-rich, human-first experiences.
            </h1>
            <p className="text-base text-sky-50/80">
              World Global Network empowers communities with wearable technology, health monitoring devices, and digital platforms.
              With Cloud MLM Software, those innovations translate into guided programs where every World Changer delivers precise,
              heartfelt support at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Tour the wellness command centre
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-200/60 text-sky-100 hover:bg-sky-500/10">
                <Link href={pricingHref}>
                  Launch multi-region programs
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-sky-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-sky-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-200" aria-hidden />
                Miami, Florida • Connected to the United States, Asia, and Europe
              </p>
              <p>
                “Wearable data is powerful when wrapped in empathy, coaching, and purposeful automation.”
              </p>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">Mission metrics</p>
              <h2 className="text-2xl font-semibold text-white">World Global Network Pulse</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/25 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-sky-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-sky-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-sky-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-gradient-to-tr from-slate-50 via-white to-sky-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Connecting lives, empowering futures</h2>
            <p className="text-base text-muted-foreground">
              World Global Network delivers advanced wearable technology, health monitoring devices, and digital solutions that
              bring wellness to life. Every product is crafted for performance and reliability, giving families confidence to pursue
              healthier lifestyles together.
            </p>
            <p className="text-base text-muted-foreground">
              Distributors—known as World Changers—are more than salespeople. They are passionate advocates who fuse personal
              stories with data to build meaningful relationships. Cloud MLM Software keeps every interaction compliant, insightful,
              and personal.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 dark:text-primary/70">Community lens</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Wearable data with empathy drives sustainable lifestyle change.
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-4 w-4 text-primary" aria-hidden />
                World Changers nurture friendships that extend beyond a single purchase.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Responsible innovation protects privacy while powering AI-ready enablement.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Explore community enablement
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Innovation streams
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Technology that powers the World Global Network mission
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Harmonise wearables, health data, and digital community touchpoints into journeys that feel futuristic yet human.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INNOVATION_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{stream.title}</h3>
                  <p className="text-sm text-muted-foreground">{stream.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                  {stream.promise}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">People-first DNA</h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software equips every World Changer with intelligence, guidance, and compassion to scale authentic care.
            </p>
            <div className="space-y-4">
              {COMMUNITY_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="flex gap-4 rounded-3xl border border-border/60 bg-background p-5 dark:border-border/40 dark:bg-slate-950/75">
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground">{pillar.narrative}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/75">
            <h2 className="text-2xl font-semibold text-foreground">Journey orchestration</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 hidden border-l border-primary/30 md:block" aria-hidden />
              <div className="space-y-6">
                {JOURNEY_STAGES.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <article
                      key={stage.stage}
                      className="relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70 md:grid-cols-[auto_1fr]"
                    >
                      <div className="flex items-center gap-4 md:flex-col md:items-start">
                        <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Phase {index + 1}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{stage.stage}</h3>
                        <p className="text-sm text-muted-foreground">{stage.focus}</p>
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                          {stage.enablement}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/85">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud MLM Software plays</h2>
            <p className="text-sm text-muted-foreground">
              Elevate data-driven wellness while keeping experiences personal, compliant, and ready for AI co-pilots.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my wellness blueprint
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                    <p className="text-sm text-muted-foreground">{play.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

