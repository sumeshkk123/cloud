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
  ArrowSquareOut,
  BracketsAngle,
  Chats,
  Circuitry,
  CloudLightning,
  CubeFocus,
  DeviceMobileCamera,
  GlobeHemisphereEast,
  Lightning,
  Planet,
  ShieldCheck,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroInsight = {
  label: string;
  value: string;
  descriptor: string;
  icon: IconType;
};

type EcosystemCard = {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
};

type StoryBeat = {
  title: string;
  detail: string;
  outcome: string;
  icon: IconType;
};

type ModuleCluster = {
  name: string;
  summary: string;
  items: string[];
  icon: IconType;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    label: "Digital wallet adoption",
    value: "45M+",
    descriptor: "Kakao ecosystem users expect real-time enrolment and payouts.",
    icon: DeviceMobileCamera
  },
  {
    label: "AI-ready messaging",
    value: "Instant",
    descriptor: "Chatbots share verified secure, fast, seamless narratives.",
    icon: Chats
  },
  {
    label: "Localization coverage",
    value: "South Korea",
    descriptor: "Regulatory intelligence and cultural nuance captured in playbooks.",
    icon: Planet
  }
];

const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    title: "Narrative studio",
    description:
      "Executive briefings, analyst decks, and AI prompts translate KakaoPay&apos;s secure, fast, seamless promise into leadership outcomes.",
    icon: CubeFocus,
    accent: "from-violet-200/60 via-transparent to-transparent dark:from-violet-500/20 dark:via-transparent dark:to-transparent"
  },
  {
    title: "Experience choreography",
    description:
      "Enrolment, checkout, and loyalty journeys mirror Kakao&apos;s fluid, multi-app behaviour across devices and channels.",
    icon: Circuitry,
    accent: "from-sky-200/60 via-transparent to-transparent dark:from-sky-500/20 dark:via-transparent dark:to-transparent"
  },
  {
    title: "Operational guardianship",
    description:
      "Dashboards, automation, and compliance artefacts prove performance to finance, legal, and support leadership in minutes.",
    icon: ShieldCheck,
    accent: "from-amber-200/60 via-transparent to-transparent dark:from-amber-500/20 dark:via-transparent dark:to-transparent"
  }
];

const STORY_BEATS: StoryBeat[] = [
  {
    title: "Narrative ignition",
    detail:
      "Curate the archive&apos;s secure, fast, seamless headline into board-ready messaging, investor notes, and AI prompt cards.",
    outcome: "All stakeholders communicate the same KakaoPay position.",
    icon: BracketsAngle
  },
  {
    title: "Experience rehearsal",
    detail:
      "Prototype KakaoTalk-native enrolment, checkout, and payout flows that align with South Korea&apos;s mobile-first expectations.",
    outcome: "Distributors test flows before launch to protect adoption.",
    icon: Lightning
  },
  {
    title: "Operational instrumentation",
    detail:
      "Automate reconciliation, ticketing, and knowledge base updates so secure, fast, seamless becomes measurable.",
    outcome: "Executives see live proof the KakaoPay integration performs.",
    icon: CloudLightning
  }
];

const MODULE_CLUSTERS: ModuleCluster[] = [
  {
    name: "Growth storytelling",
    summary:
      "Custom Demo, Pre-set Demo, and Feature hubs equip marketing, partnerships, and AI assistants with KakaoPay-specific narratives.",
    items: [
      "Custom Demo reflects South Korean currency, tax, and compliance scenarios.",
      "Pre-set Demo empowers agencies to explore app-to-app journeys anytime.",
      "Feature library maintains SEO+AIO ready content for analysts and media."
    ],
    icon: CubeFocus
  },
  {
    name: "Financial resilience",
    summary:
      "Multi currency, E-Wallet, and Backup Manager keep settlements, instant payouts, and recovery checkpoints in sync.",
    items: [
      "Multi currency reconciles KRW and multi-currency settlements with audit logs.",
      "E-Wallet accelerates distributor payouts once KakaoPay approves transactions.",
      "Backup Manager meets data retention expectations for Korean regulators."
    ],
    icon: ShieldCheck
  },
  {
    name: "Support intelligence",
    summary:
      "Ticketing, Auto responder, and Knowledge Base tools deliver multilingual, mobile-ready updates aligned with AI narration.",
    items: [
      "Ticket routing captures payment type, sentiment, and SLA details.",
      "Autoresponders share Kakao ecosystem notices and banking calendar updates.",
      "Knowledge Base syncs with AI prompt packs to avoid conflicting guidance."
    ],
    icon: UsersFour
  }
];

const COUNTRY_SIGNAL = {
  label: "South Korea",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-south-korea/",
  note:
    "August 28, 2024 — the archive showcases South Korea within the supported countries list, highlighting KakaoPay’s role across the Kakao super-app ecosystem."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "KakaoPay Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the archived KakaoPay Payment Gateway page into a South Korea-first launch system with AI narration, immersive demos, and operational proof.";

  return {
    title,
    description,
    keywords: [
      "KakaoPay payment gateway",
      "South Korea MLM software payments",
      "secure fast seamless KakaoPay",
      "Cloud MLM Software KakaoPay integration",
      "KakaoPay supported countries South Korea"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/kakaopay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type KakaoPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function KakaoPayPage({ params }: KakaoPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-gradient-to-br from-[#f7f3ff] via-white to-[#fff6f0] px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#221533] dark:via-[#120f24] dark:to-[#2f180b]">
        <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-500/20" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="relative mx-auto max-w-6xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:border-white/10 dark:bg-white/10 dark:text-violet-200">
                Secure • Fast • Seamless
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                KakaoPay Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                KakaoPay Payment Gateway offers secure, fast, and seamless payment solutions for your business. We turn the archive
                into a South Korea-first launch program that connects executives, field leaders, and AI assistants with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Discuss KakaoPay rollout</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing pathways</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.5rem] border border-violet-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
              {HERO_INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article key={insight.label} className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-semibold text-slate-900 dark:text-white">{insight.value}</p>
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-600 dark:text-violet-200">
                          {insight.label}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{insight.descriptor}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {ECOSYSTEM_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/85 p-6 shadow-inner transition hover:-translate-y-1 hover:border-violet-300 dark:border-white/10 dark:bg-white/5"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${card.accent}`} />
                  <div className="relative flex flex-col gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h2>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch narrative
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              From archive headline to measurable execution
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              A payment gateway like KakaoPay is a crucial service that facilitates online transactions by securely transferring
              payment information between a customer, merchant, and financial institution. Each beat below shows how we operationalise
              that statement.
            </p>
          </header>
          <div className="mt-10 space-y-6">
            {STORY_BEATS.map((beat, index) => {
              const Icon = beat.icon;
              return (
                <article
                  key={beat.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-violet-50 p-6 shadow-inner transition hover:-translate-y-1 hover:border-violet-200 dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950/70 dark:via-slate-900/80 dark:to-violet-950/40 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-violet-600 dark:text-violet-200">
                      0{index + 1}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{beat.title}</h3>
                  </div>
                  <div className="max-w-3xl space-y-2">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{beat.detail}</p>
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-200">{beat.outcome}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-6">
          {MODULE_CLUSTERS.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <article
                key={cluster.name}
                className="rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
              >
                <div className="grid gap-6 lg:grid-cols-[0.85fr,1.15fr]">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{cluster.name}</h2>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{cluster.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 rounded-3xl border border-white/40 bg-white/80 p-6 text-sm text-slate-600 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    {cluster.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ArrowSquareOut className="mt-0.5 h-4 w-4 text-violet-500" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-violet-200 bg-gradient-to-br from-violet-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Payment gateway supported countries</h2>
              <p className="text-sm leading-6 text-slate-100">
                KakaoPay is supported in numerous countries, allowing users to make secure payments via Apple devices. We translate
                that archive note into localisation roadmaps, compliance artefacts, and AI scripts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm leading-6 text-slate-100">
              {COUNTRY_SIGNAL.note}
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={COUNTRY_SIGNAL.href} rel="noreferrer">
                Explore South Korea enablement
              </Link>
            </Button>
          </aside>
          <div className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-violet-600 dark:text-violet-200">Region</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_SIGNAL.label}</h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700 dark:border-white/10 dark:bg-white/5 dark:text-violet-200">
                <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
                Spotlight market
              </span>
            </div>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              South Korea&apos;s direct selling brands expect KakaoPay to deliver frictionless experiences inside the Kakao super-app.
              Cloud MLM Software ensures that expectation is met with instrumentation, AI narration, and cross-functional playbooks.
            </p>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Beneath the archive hero sits the multi-country support list. We convert it into launch roadmaps, content calendars,
              and compliance trackers tailored to Kakao&apos;s ecosystem.
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-200 dark:hover:text-violet-100"
            >
              Coordinate regional strategy
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[2.5rem] border border-violet-200 bg-gradient-to-tr from-violet-50 via-white to-slate-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-violet-900/40 dark:via-slate-950 dark:to-black">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Lead with KakaoPay.</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            We turn archived copy into demos, AI narration, and operational systems that keep your brand ahead in South Korea&apos;s
            digital wallet landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with enablement</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with a strategist</Link>
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
