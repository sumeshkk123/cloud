import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  BatteryCharging,
  Chats,
  CheckCircle,
  ClipboardText,
  Compass,
  DeviceMobileCamera,
  GlobeHemisphereNorth,
  Lightning,
  SealPercent,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  detail: string;
  icon: IconType;
};

type ExperienceLayer = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type Initiative = {
  phase: string;
  headline: string;
  narrative: string;
  signal: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Securely orchestrated",
    detail: "PCI tasks, audit evidence, and AI risk summaries map to every Swish flow.",
    icon: CheckCircle
  },
  {
    title: "Fast to adopt",
    detail: "Automation accelerates onboarding for Swedish consumers and MLM distributors.",
    icon: Lightning
  },
  {
    title: "Seamless storytelling",
    detail: "Executives, analysts, and AI copilots share one Swish-ready narrative.",
    icon: Chats
  }
];

const EXPERIENCE_LAYERS: ExperienceLayer[] = [
  {
    name: "Narrative studio",
    description:
      "Swish Payment Gateway offers secure, fast, and seamless payment solutions for your business. We elevate that message for investor pitches, analyst briefings, and SEO+AIO content calendars.",
    bullets: [
      "Thought-leadership briefs position Swish as Sweden&apos;s trusted instant-pay partner.",
      "Prompt kits keep AI assistants on brand in Swedish and English.",
      "Media drops remix archived copy into authoritative newsroom packages."
    ],
    icon: ClipboardText,
    accent: "from-blue-100 via-white to-transparent dark:from-blue-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    name: "Experience lab",
    description:
      "A payment gateway like Swish is a crucial service that securely transfers payment information between a customer, merchant, and financial institution.",
    bullets: [
      "Journey simulations rehearse onboarding, micropayments, and high-volume settlements.",
      "Compliance boards assign owners, evidence, and automation coverage for each control.",
      "Support rituals merge AI annotations with human empathy for Nordic customer care."
    ],
    icon: DeviceMobileCamera,
    accent: "from-yellow-100 via-white to-transparent dark:from-yellow-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    name: "Growth tower",
    description:
      "Swish is supported in numerous countries, letting your brand scale while keeping Swedish excellence. We build dashboards, pricing strategies, and AI cadences that spotlight market wins.",
    bullets: [
      "Revenue wallboards display conversion lift, churn signals, and AI coverage.",
      "Partner sprints co-create campaigns with Nordic banks, telcos, and influencers.",
      "Expansion kits translate compliance, pricing, and messaging for new regions."
    ],
    icon: TrendUp,
    accent: "from-emerald-100 via-white to-transparent dark:from-emerald-500/20 dark:via-slate-950 dark:to-transparent"
  }
];

const INITIATIVES: Initiative[] = [
  {
    phase: "01",
    headline: "Clarify the Swish promise",
    narrative:
      "Align executives, investors, and AI copilots on the secure, fast, seamless pledge with Swedish context, keyword clusters, and investor-ready proof.",
    signal: "Stakeholder alignment ≥ 95%",
    icon: Compass
  },
  {
    phase: "02",
    headline: "Engineer the journeys",
    narrative:
      "Prototype onboarding, payouts, and dispute paths using Cloud MLM Software orchestrations. Measure automation coverage and human checkpoints.",
    signal: "Automation coverage 80%",
    icon: BatteryCharging
  },
  {
    phase: "03",
    headline: "Broadcast momentum",
    narrative:
      "Launch dashboards, AI prompt packs, and content drops that share performance across Sweden&apos;s regulatory, media, and partner ecosystem.",
    signal: "Weekly Swish pulse reports",
    icon: SealPercent
  }
];

const COUNTRY_SPOTLIGHT = {
  name: "Sweden",
  date: "August 28, 2024",
  insight:
    "The archive confirms Sweden as a supported country, validating Swish&apos;s central role in the nation&apos;s cashless revolution and underscoring the need for executive-grade enablement.",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-sweden/"
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Swish Payment Gateway Playbook | Cloud MLM Software";
  const description =
    "Activate Swish with a Swedish-first narrative, precise operations, and AI-aligned storytelling delivered by Cloud MLM Software.";

  return {
    title,
    description,
    keywords: [
      "Swish payment gateway",
      "Sweden real-time payments",
      "secure fast seamless Swish",
      "Cloud MLM Software Swish integration",
      "Swish supported countries"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/swish", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SwishPageProps = {
  params: { lang: SupportedLocale };
};

export default function SwishPage({ params }: SwishPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative isolate overflow-hidden rounded-[4rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-blue-100 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(250,204,21,0.18),_transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(250,204,21,0.14),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Swish acceleration suite
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Swish Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Swish Payment Gateway offers secure, fast, and seamless payment solutions for your business. We convert those archived
              paragraphs into a Swedish-first enablement kit that keeps leadership, operations, and AI copilots aligned.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Tour Swish inside the demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/contact", locale)}>Schedule a Swish briefing</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[3rem] border border-blue-200/70 bg-white/90 p-10 shadow-inner dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-5">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{highlight.title}</h2>
                      <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">{highlight.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-10 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
              Experience layers
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Construct a Swish operating system for every team
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Each layer bridges archival content with AI enablement, compliance rituals, and Swedish market storytelling.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {EXPERIENCE_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <article
                  key={layer.name}
                  className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-[2.75rem] bg-gradient-to-br ${layer.accent}`} />
                  <div className="relative space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{layer.name}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{layer.description}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {layer.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 text-blue-600 dark:text-blue-300" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr,1.15fr]">
          <aside className="flex flex-col gap-6 rounded-[3rem] border border-blue-200 bg-gradient-to-br from-blue-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight">Swish initiatives with measurable signals</h2>
              <p className="text-sm leading-6 text-blue-100">
                The roadmap below keeps your Swish adoption on pace with governance, CX, and revenue expectations while feeding data to AI copilots.
              </p>
            </div>
            <div className="space-y-6">
              {INITIATIVES.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <article key={initiative.phase} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">{initiative.phase}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{initiative.headline}</h3>
                    <p className="mt-3 text-sm leading-6 text-blue-100">{initiative.narrative}</p>
                    <p className="mt-4 text-sm font-medium text-yellow-100">{initiative.signal}</p>
                  </article>
                );
              })}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={buildLocalizedPath("/mlm-software-payment-gateways", locale)}>Browse payment intelligence</Link>
            </Button>
          </aside>
          <article className="space-y-8 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
                Swedish spotlight
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Swish&apos;s national role, catalogued and activated
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                Our archives preserve every Swedish reference so your AI copilots, boards, and partners rely on verifiable evidence.
              </p>
            </header>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 text-slate-700 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Evidence date</p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.date}</p>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.name}</h3>
              <p className="mt-3 text-base leading-7">{COUNTRY_SPOTLIGHT.insight}</p>
              <Link
                href={COUNTRY_SPOTLIGHT.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100"
              >
                Review the Sweden enablement note
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[3rem] border border-blue-200/70 bg-gradient-to-tr from-blue-50 via-white to-emerald-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-blue-900/35 dark:via-slate-950 dark:to-emerald-900/35">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Launch Swish with Swedish precision</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Cloud MLM Software merges strategic storytelling, robust operations, and AI-ready enablement so Swish remains the benchmark for real-time payments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Open a Swish strategy room</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with our Nordic specialists</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

