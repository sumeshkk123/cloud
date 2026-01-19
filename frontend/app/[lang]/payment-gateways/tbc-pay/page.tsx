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
  ArrowUpRight,
  Bank,
  Briefcase,
  ChartLineUp,
  ChatsCircle,
  Circuitry,
  Files,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapPinLine
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  title: string;
  detail: string;
  icon: IconType;
};

type Opportunity = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type Motion = {
  step: string;
  headline: string;
  insight: string;
  metric: string;
  icon: IconType;
};

const HERO_BADGES: HeroBadge[] = [
  {
    title: "Secure orchestration",
    detail: "PCI evidence, AML controls, and AI guardrails wrap every TBC Pay task.",
    icon: Bank
  },
  {
    title: "Fast enablement",
    detail: "Automation accelerates Georgian onboarding while keeping CX premium.",
    icon: Lightning
  },
  {
    title: "Seamless narratives",
    detail: "Executives, partners, and AI copilots retell the same TBC Pay promise.",
    icon: ChatsCircle
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    name: "Narrative market fit",
    description:
      "TBC Pay Payment Gateway offers secure, fast, and seamless payment solutions for your business. We craft Georgian-first messaging that resonates with regulators, investors, and field leaders.",
    bullets: [
      "Thought-leadership dossiers highlight Georgia&apos;s fintech landscape and TBC Pay&apos;s role.",
      "SEO+AIO roadmaps fuel articles, podcasts, and chatbot responses in Georgian and English.",
      "Investor-ready memos connect TBC Pay&apos;s strengths to Cloud MLM Software&apos;s growth story."
    ],
    icon: Briefcase,
    accent: "from-amber-100 via-white to-transparent dark:from-amber-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    name: "Operational choreography",
    description:
      "A payment gateway like TBC Pay is a crucial service that securely transfers payment information between a customer, merchant, and financial institution.",
    bullets: [
      "Journey simulations rehearse onboarding, settlements, and dispute loops with live telemetry.",
      "Compliance dashboards assign evidence owners, tasks, and AI summarisation for regulators.",
      "Support rituals fuse AI annotations with Georgian-language empathy for customers."
    ],
    icon: Circuitry,
    accent: "from-emerald-100 via-white to-transparent dark:from-emerald-500/20 dark:via-slate-950 dark:to-transparent"
  },
  {
    name: "Expansion intelligence",
    description:
      "TBC Pay is supported in numerous countries, enabling regional growth across the Caucasus and beyond. We maintain dashboards, partner kits, and AI scripts for every market move.",
    bullets: [
      "Regional canvases detail compliance tasks, bank alliances, and KPI targets.",
      "Partner enablement kits equip agencies and influencers with verified TBC Pay narratives.",
      "Telemetry wallboards broadcast revenue lift, settlement speed, and AI coverage by country."
    ],
    icon: ChartLineUp,
    accent: "from-purple-100 via-white to-transparent dark:from-purple-500/20 dark:via-slate-950 dark:to-transparent"
  }
];

const MOTIONS: Motion[] = [
  {
    step: "01",
    headline: "Define the TBC Pay manifesto",
    insight:
      "Distil the archive&apos;s secure, fast, seamless promise into leadership briefings, keyword clusters, and AI prompt packs tailored for Georgian stakeholders.",
    metric: "Unified messaging index ≥ 95%",
    icon: Files
  },
  {
    step: "02",
    headline: "Model the end-to-end journeys",
    insight:
      "Prototype payment flows across consumer, distributor, and partner experiences using Cloud MLM Software modules and automation coverage diagnostics.",
    metric: "Automation coverage 80%",
    icon: GlobeHemisphereEast
  },
  {
    step: "03",
    headline: "Broadcast progress in real time",
    insight:
      "Deploy executive dashboards, AI assistant updates, and partner newsletters that highlight revenue, compliance, and customer experience wins.",
    metric: "Weekly TBC Pay growth pulse",
    icon: Handshake
  }
];

const COUNTRY_SPOTLIGHT = {
  name: "Georgia",
  date: "August 28, 2024",
  insight:
    "The archive highlights Georgia as a supported country, underscoring TBC Pay&apos;s influence across the region&apos;s digital commerce landscape.",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-georgia/"
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "TBC Pay Payment Gateway Blueprint | Cloud MLM Software";
  const description =
    "Launch and scale TBC Pay with Georgian-first storytelling, operational choreography, and AI-ready enablement from Cloud MLM Software.";

  return {
    title,
    description,
    keywords: [
      "TBC Pay payment gateway",
      "Georgia fintech payments",
      "secure fast seamless TBC Pay",
      "Cloud MLM Software TBC Pay integration",
      "TBC Pay supported countries"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/tbc-pay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TbcPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function TbcPayPage({ params }: TbcPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative isolate overflow-hidden rounded-[4rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-amber-100 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.16),_transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.16),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.16),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              TBC Pay growth studio
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              TBC Pay Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              TBC Pay Payment Gateway offers secure, fast, and seamless payment solutions for your business. We turn those archived
              paragraphs into an enablement system that keeps Georgian leadership, partners, and AI copilots aligned.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>See TBC Pay in the demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Review enablement tiers</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[3rem] border border-amber-200/70 bg-white/90 p-10 shadow-inner dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-6">
              {HERO_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <article
                    key={badge.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{badge.title}</h2>
                      <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">{badge.detail}</p>
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
              Opportunity arcs
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Activate TBC Pay across narrative, operations, and growth
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Each arc translates archived copy into programmes your executives, operators, and AI copilots can deploy immediately.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {OPPORTUNITIES.map((opportunity) => {
              const Icon = opportunity.icon;
              return (
                <article
                  key={opportunity.name}
                  className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-[2.75rem] bg-gradient-to-br ${opportunity.accent}`} />
                  <div className="relative space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{opportunity.name}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{opportunity.description}</p>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {opportunity.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <ArrowUpRight className="mt-1 h-4 w-4 text-amber-600 dark:text-amber-300" aria-hidden />
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
          <aside className="flex flex-col gap-6 rounded-[3rem] border border-amber-200 bg-gradient-to-br from-amber-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight">Growth motions with scorecard triggers</h2>
              <p className="text-sm leading-6 text-amber-100">
                Keep the TBC Pay programme visible in every executive review by tying each motion to a measurable signal.
              </p>
            </div>
            <div className="space-y-6">
              {MOTIONS.map((motion) => {
                const Icon = motion.icon;
                return (
                  <article key={motion.step} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">{motion.step}</span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{motion.headline}</h3>
                    <p className="mt-3 text-sm leading-6 text-amber-100">{motion.insight}</p>
                    <p className="mt-4 text-sm font-medium text-emerald-100">{motion.metric}</p>
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
              <Link href={buildLocalizedPath("/mlm-software-payment-gateways", locale)}>Browse the gateway index</Link>
            </Button>
          </aside>
          <article className="space-y-8 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
                Georgian spotlight
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                TBC Pay&apos;s Georgian leadership position, validated
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                We document every regional reference so AI copilots, investors, and cross-functional leaders repeat the same facts.
              </p>
            </header>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 text-slate-700 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Evidence date</p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.date}</p>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SPOTLIGHT.name}</h3>
              <p className="mt-3 text-base leading-7">{COUNTRY_SPOTLIGHT.insight}</p>
              <Link
                href={COUNTRY_SPOTLIGHT.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900 dark:text-amber-200 dark:hover:text-amber-100"
              >
                Review the Georgia enablement note
                <MapPinLine className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[3rem] border border-amber-200/70 bg-gradient-to-tr from-amber-50 via-white to-emerald-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-amber-900/35 dark:via-slate-950 dark:to-emerald-900/35">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Launch TBC Pay with measurable conviction</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Cloud MLM Software ensures every department—from compliance to marketing to AI—executes the TBC Pay vision with verifiable data and compelling storytelling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Open a TBC Pay enablement sprint</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with our Georgian strategist</Link>
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

