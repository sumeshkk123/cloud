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
  Brain,
  CalendarBlank,
  Compass,
  GlobeHemisphereEast,
  MapPin,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type StrategicTheme = {
  badge: string;
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStep = {
  stage: string;
  headline: string;
  narrative: string;
  icon: IconType;
};

type CountryInsight = {
  country: string;
  insight: string;
};

type EnablementPlay = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
  ctaLabel: string;
  href: string;
};

const HERO_FACTS: HeroFact[] = [
  {
    title: "Archive snapshot",
    value: "28 Aug 2024",
    description: "Original Payfort narrative preserved from the WordPress migration for strategic reuse.",
    icon: CalendarBlank
  },
  {
    title: "Experience promise",
    value: "Secure • Fast • Seamless",
    description: "We elevate the legacy message into compliance-ready journeys for enterprise stakeholders.",
    icon: ShieldCheck
  },
  {
    title: "Regional scope",
    value: "GCC priority",
    description: "Unified operations across the UAE, Oman, Qatar, Saudi Arabia, and Kuwait distributor base.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Intelligence layer",
    value: "AI-ready operations",
    description: "Telemetry, prompt kits, and knowledge bases keep human teams and AI agents aligned.",
    icon: Brain
  }
];

const STRATEGIC_THEMES: StrategicTheme[] = [
  {
    badge: "Regulated trust",
    title: "GCC trust architecture",
    summary:
      "Cloud MLM Software reframes Payfort’s secure, fast, seamless claim into a governance story the board can action.",
    bullets: [
      "Tokenisation, 3DS, and settlement SLAs translated into ready-to-use compliance dossiers.",
      "Risk dashboards benchmark chargeback defenses and approval rates for GCC regulators.",
      "Executive memos distill insights for finance, legal, and investor relations stakeholders."
    ],
    icon: ShieldCheck
  },
  {
    badge: "Distributor journeys",
    title: "Member momentum by design",
    summary:
      "The archive’s demo and module references become orchestrated onboarding, checkout, and payout experiences.",
    bullets: [
      "Dynamic demo scripts showcase Payfort flows tailored to each compensation plan.",
      "Localized Arabic and English assets keep recruitment, sales, and support messaging consistent.",
      "Journey analytics expose drop-off hotspots and recommend conversion experiments."
    ],
    icon: UsersThree
  },
  {
    badge: "AI operations",
    title: "AIO-first enablement",
    summary:
      "We treat every WordPress insight as fuel for AI copilots that support leadership, distributors, and customers.",
    bullets: [
      "Prompt libraries guide AI chatbots to respond with Payfort-aligned language.",
      "Knowledge graphs connect payment events to commissions, inventory, and support tickets.",
      "Narrative engines generate SEO & AIO content that positions Cloud MLM Software as a GCC thought leader."
    ],
    icon: Sparkle
  }
];

const JOURNEY_STEPS: JourneyStep[] = [
  {
    stage: "Phase 01",
    headline: "Context intelligence",
    narrative:
      "Audit the archived Payfort page, map keywords, and align with Cloud MLM Software growth, compliance, and product roadmaps.",
    icon: Compass
  },
  {
    stage: "Phase 02",
    headline: "Experience choreography",
    narrative:
      "Prototype distributor, customer, and finance journeys that highlight Payfort security, instant settlement, and multilingual support.",
    icon: SquaresFour
  },
  {
    stage: "Phase 03",
    headline: "Operational launch",
    narrative:
      "Activate AI assistants, dashboards, and enablement hubs so regional teams sustain momentum from day one.",
    icon: RocketLaunch
  }
];

const COUNTRY_ROLLCALL: CountryInsight[] = [
  {
    country: "United Arab Emirates",
    insight: "Flagship market with executive steering committees and enterprise onboarding rituals."
  },
  {
    country: "Oman",
    insight: "Focused on Arabic-first digital experiences and compliance-ready reporting."
  },
  {
    country: "Qatar",
    insight: "Emphasises seamless wallet, card, and bank transfers for high-trust consumer journeys."
  },
  {
    country: "Saudi Arabia",
    insight: "Supports rapid expansion with governance accelerators for Sharia-compliant operations."
  },
  {
    country: "Kuwait",
    insight: "Prioritises omni-channel settlement visibility for franchise and retail partners."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Payfort Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Transform the Payfort payment gateway archive into AI-optimised journeys, GCC governance, and distributor-ready experiences with Cloud MLM Software.";

  return {
    title,
    description,
    keywords: [
      "Payfort payment gateway",
      "Payfort Cloud MLM Software integration",
      "GCC payment gateway for MLM",
      "secure fast seamless payments",
      "AI enabled payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/payfort", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayfortPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayfortPage({ params }: PayfortPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  const enablementPlays: EnablementPlay[] = [
    {
      title: "Custom demo lab",
      summary:
        "Adapts the archive’s custom demo promise into walk-throughs that mirror your compensation rules, payout cycles, and regional compliance.",
      bullets: [
        "Interactive prototype sessions reveal Payfort flows for onboarding, renewals, and incentives.",
        "KPIs overlay approvals, settlement timing, and distributor satisfaction.",
        "Executive-ready recording packages accelerate decision making."
      ],
      icon: RocketLaunch,
      ctaLabel: "Design my custom demo",
      href: demoHref
    },
    {
      title: "Preset velocity kit",
      summary:
        "Keeps the pre-set demo spirit alive with turnkey narratives for leadership briefings, sales enablement, and SEO discovery.",
      bullets: [
        "Ready-to-share decks that compare Payfort with other GCC gateways.",
        "AI scripts equip human support teams and chatbots with consistent messaging.",
        "Activation checklist aligns marketing, product, and compliance stakeholders."
      ],
      icon: TrendUp,
      ctaLabel: "Review the velocity kit",
      href: contactHref
    },
    {
      title: "Module intelligence stack",
      summary:
        "Extends the WordPress module list into a living system spanning e-wallet, ticketing, multi-currency, and backup management.",
      bullets: [
        "Telemetry connects Payfort events to commissions, e-wallet balances, and alerts.",
        "Ticketing blueprints merge AI summarisation with SLA-focused workflows.",
        "Knowledge base articles keep documentation, legal, and training in sync."
      ],
      icon: UsersThree,
      ctaLabel: "Explore modules",
      href: modulesHref
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-emerald-50 to-slate-100 py-20 dark:from-slate-950 dark:via-emerald-950/60 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.24),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(15,118,110,0.18),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(110,231,183,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.16),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-emerald-100">
              Payfort payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Reimagine Payfort as the GCC-ready growth engine for Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              We translate the archived WordPress page—secure, fast, seamless—into a contemporary operating system for
              distributors, finance leaders, and AI copilots across the Gulf Cooperation Council.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Partner with our payment strategists
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-200/50 dark:text-emerald-100 dark:hover:bg-emerald-200/10"
              >
                <Link href={modulesHref}>
                  View supporting modules
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-emerald-200/40 via-white/40 to-cyan-200/40 blur-2xl dark:from-emerald-500/20 dark:via-slate-900/40 dark:to-cyan-500/20" />
            <div className="grid gap-6 rounded-3xl border border-emerald-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article
                    key={fact.title}
                    className="flex flex-col gap-3 rounded-2xl border border-emerald-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                        {fact.title}
                      </p>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-white/70">{fact.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-16">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Strategic translation of the Payfort archive
            </h2>
            <p className="text-base text-slate-600 dark:text-white/75">
              The snapshot captured August 28, 2024 spoke to secure, fast, seamless payments and highlighted custom demos,
              preset demos, and module depth. We elevate that foundation into a modern executive playbook.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-200/50 bg-emerald-100/40 p-6 text-sm text-emerald-900 shadow-sm dark:border-emerald-300/30 dark:bg-emerald-950/30 dark:text-emerald-200">
            We preserve the spirit of the original page while giving today&apos;s audiences actionable journeys, KPI
            frameworks, and AI guidance. Every bullet below is rooted in the WordPress content yet crafted for the Cloud
            MLM Software brand voice.
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          {STRATEGIC_THEMES.map((theme) => {
            const Icon = theme.icon;
            return (
              <article
                key={theme.title}
                className="group relative flex flex-col gap-5 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-cyan-300/20 to-emerald-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-200/40 dark:bg-white/10 dark:text-emerald-100">
                  {theme.badge}
                </span>
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{theme.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{theme.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {theme.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-emerald-600 dark:text-emerald-200" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(16,185,129,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(148,163,184,0.35),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">GCC delivery blueprint</h2>
            <p className="text-base text-white/80">
              Every phase anchors the secure, fast, seamless promise while layering the automation and intelligence demanded
              by modern direct selling operations.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {JOURNEY_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.stage}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{step.stage}</span>
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold">{step.headline}</h3>
                  <p className="text-sm text-white/80">{step.narrative}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            GCC coverage from the WordPress archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            The original page listed five Payfort supported countries. We converted that list into actionable intelligence
            cards so your go-to-market, compliance, and distributor operations teams can plan with precision.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COUNTRY_ROLLCALL.map((country) => (
            <article
              key={country.country}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{country.country}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-white/70">{country.insight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Enablement inspired by custom demo, preset demo, and module insights
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Each play honours the archive content while elevating it into differentiated Cloud MLM Software experiences that
            scale across humans and AI assistants.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {enablementPlays.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-white/15 dark:bg-white/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{play.summary}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                  {play.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <ArrowSquareOut className="mt-1 h-4 w-4 text-emerald-600 dark:text-emerald-200" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-fit border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-200/40 dark:text-emerald-100 dark:hover:bg-emerald-200/10"
                >
                  <Link href={play.href}>
                    {play.ctaLabel}
                    <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white via-emerald-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Ready to activate Payfort with Cloud MLM Software?
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase AI-powered Cloud MLM Software today, explore tailored demos, and keep distributors thriving with
                Payfort&apos;s secure, fast, seamless payment experience refined for the GCC.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  View pricing and packages
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-200/40 dark:text-emerald-100 dark:hover:bg-emerald-200/10"
              >
                <Link href={demoHref}>
                  Try the Payfort-ready demo
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
