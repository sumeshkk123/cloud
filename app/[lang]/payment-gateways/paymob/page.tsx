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
  Broadcast,
  Buildings,
  ChartLineUp,
  Circuitry,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Play = {
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type TimelineItem = {
  phase: string;
  mission: string;
  bullets: string[];
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Archive capture",
    value: "28 Aug 2024",
    detail: "Paymob WordPress page forms the raw material for this refreshed experience.",
    icon: Sparkle
  },
  {
    label: "Launch region",
    value: "Egypt",
    detail: "Cairo to Alexandria coverage with local cards, wallet, and instalments.",
    icon: MapPin
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "We refine the archive statement into AI-ready operations and executive insight.",
    icon: ShieldCheck
  }
];

const PLAYS: Play[] = [
  {
    title: "AI-guided member journeys",
    description:
      "Custom and preset demos evolve into guided funnels that celebrate Paymob’s Egyptian fintech innovation.",
    highlights: [
      "Localized Arabic and English storytelling across desktop, mobile, and WhatsApp flows.",
      "Distributor onboarding that showcases Paymob instalments, cards, and cash collection.",
      "Feedback loops blending AI sentiment with field advisory councils."
    ],
    icon: Broadcast
  },
  {
    title: "Governed finance cockpit",
    description:
      "Secure, fast, seamless becomes the foundation for treasury, compliance, and investor-grade visibility.",
    highlights: [
      "Realtime approval, settlement, and risk dashboards tuned for Egyptian regulations.",
      "Chargeback playbooks and dispute automation aligned with Paymob&apos;s network partners.",
      "Executive briefings translating telemetry into investment-grade narratives."
    ],
    icon: Buildings
  },
  {
    title: "Innovation runway",
    description:
      "Module references from the archive—e-wallet, ticketing, backup manager—become a roadmap for AI-assisted expansion.",
    highlights: [
      "Automation recipes connecting Paymob events to commissions and loyalty experiences.",
      "Data products that coach leadership on product bundling and cross-border experiments.",
      "Thought leadership hub positioning Cloud MLM Software at the forefront of MENA fintech."
    ],
    icon: TrendUp
  }
];

const TIMELINE: TimelineItem[] = [
  {
    phase: "Wave 01",
    mission: "Archive intelligence remix",
    bullets: [
      "Translate WordPress copy into executive messaging for growth, finance, and compliance.",
      "SEO & AIO keyword strategy focused on Egyptian fintech, Paymob acceptance, and distributor success.",
      "Module alignment between Paymob APIs, Cloud MLM Software, and AI assistants."
    ],
    icon: Circuitry
  },
  {
    phase: "Wave 02",
    mission: "Experience choreography",
    bullets: [
      "Custom demo studio featuring distributor, customer, and finance journeys with Paymob touchpoints.",
      "Preset demo kit with one-click storytelling for sales, marketing, and analyst briefings.",
      "Localization framework covering Arabic, English, and francophone enablement."
    ],
    icon: Lightning
  },
  {
    phase: "Wave 03",
    mission: "Growth intelligence loop",
    bullets: [
      "Executive dashboards tracking approval rates, settlement speed, and incentive performance.",
      "Experiment backlog prioritizing loyalty, instalments, and omnichannel commerce.",
      "AI-coaching cadences ensuring bots and humans repeat Paymob’s differentiated message."
    ],
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Paymob Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Bring Paymob’s secure, fast, seamless payments into Cloud MLM Software with Egypt-first journeys, finance governance, and AI innovation loops.";

  return {
    title,
    description,
    keywords: [
      "Paymob payment gateway",
      "Paymob Cloud MLM Software integration",
      "Egypt fintech payments",
      "MENA payment gateway for MLM",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paymob", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PaymobPageProps = {
  params: { lang: SupportedLocale };
};

export default function PaymobPage({ params }: PaymobPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-amber-50 to-slate-900/70 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.28),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.26),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Paymob payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Position Paymob as Egypt’s intelligence-driven payment platform for Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-white/80">
              We transform the archived WordPress copy—secure, fast, seamless—into modern stories, dashboards, and AI
              accelerators that resonate with Egyptian commerce leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Partner with Paymob strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Preview experience lab
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-amber-200/70 via-white/50 to-slate-900/60 blur-3xl dark:from-amber-400/20 dark:via-black/40 dark:to-slate-900/20" />
            <div className="grid gap-6 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">{metric.label}</p>
                      <p className="text-xl font-semibold text-white">{metric.value}</p>
                    </div>
                    <p className="text-sm text-white/70">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Strategic plays inspired by the Paymob archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            We elevated the recovered content—custom demos, preset demos, module listings—into strategic plays that advance
            Egypt-first fintech ambitions.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-amber-400/20 via-sky-300/20 to-emerald-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{play.description}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {play.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-amber-600 dark:text-amber-200" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Paymob supported country spotlight
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The archive emphasised Egypt. We reframed it with actionable intelligence for go-to-market and compliance teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Egypt</h3>
              <GlobeHemisphereEast className="h-6 w-6 text-amber-600 dark:text-amber-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Emphasise Paymob&apos;s local acquiring, instalment programs, and omnichannel acceptance across Cairo, Giza, and
              Alexandria retail landscapes.
            </p>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(249,115,22,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(37,99,235,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Execution waves for Paymob integration</h2>
            <p className="text-base text-white/80">
              Preserve the WordPress DNA while accelerating modern experiences for distributors, finance teams, and executives.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {TIMELINE.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">{item.phase}</span>
                    <Icon className="h-6 w-6 text-amber-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.mission}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-amber-200" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-white via-amber-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-amber-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Launch Paymob inside Cloud MLM Software
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, align your teams, and keep Paymob&apos;s secure, fast, seamless promise alive across AI
                assistants and human conversations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Review pricing and packaging
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-500/40 text-amber-700 hover:bg-amber-500/10 dark:border-amber-200/40 dark:text-amber-100 dark:hover:bg-amber-200/10"
              >
                <Link href={modulesHref}>
                  Explore supporting modules
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
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

