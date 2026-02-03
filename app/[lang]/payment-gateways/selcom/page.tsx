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
  ChartLine,
  CheckCircle,
  DeviceMobile,
  GlobeSimple,
  Handshake,
  Lightning,
  Lock,
  RocketLaunch,
  Sparkle
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type EnablementPillar = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyMoment = {
  title: string;
  detail: string;
  outcome: string;
  icon: IconType;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "Secure orchestration",
    value: "End-to-end encryption",
    description: "PCI-aligned evidence mapped to every Selcom integration task.",
    icon: Lock
  },
  {
    label: "Frictionless approvals",
    value: "Sub 24 hr onboarding",
    description: "Automation accelerates distributor verification across Tanzania and beyond.",
    icon: RocketLaunch
  },
  {
    label: "Unified visibility",
    value: "AI copilots briefed",
    description: "Every team, chatbot, and partner has the same Selcom narrative and data.",
    icon: Sparkle
  }
];

const ENABLEMENT_PILLARS: EnablementPillar[] = [
  {
    heading: "Experience blueprint",
    summary:
      "Selcom Payment Gateway offers secure, fast, and seamless payment solutions for your business. We reshape that promise into workshops your leadership can immediately activate.",
    bullets: [
      "Executive starter decks clarify Selcom&apos;s role in omnichannel MLM payouts.",
      "Product rituals simulate checkout, e-wallet funding, and commission releases.",
      "Support storylines align knowledge bases, AI replies, and field enablement."
    ],
    icon: Lightning
  },
  {
    heading: "Risk & compliance studio",
    summary:
      "A payment gateway like Selcom is a crucial service that facilitates online transactions by securely transferring payment information between a customer, merchant, and financial institution.",
    bullets: [
      "Control catalogs link PCI artifacts to specific Selcom touchpoints.",
      "Audit dashboards surface completion rates, owners, and AI summaries.",
      "Incident playbooks ensure recovery teams rehearse the same scripts."
    ],
    icon: CheckCircle
  },
  {
    heading: "Growth amplification",
    summary:
      "Selcom is supported in numerous countries, letting your teams launch campaigns with verified regional insights, localized pricing, and AI-paired storytelling.",
    bullets: [
      "Market workrooms rank readiness across product, legal, and demand.",
      "Partner co-selling kits share Selcom success stories with distributors.",
      "Analytics loops capture conversion lift and payout velocity trends."
    ],
    icon: ChartLine
  }
];

const JOURNEY_MOMENTS: JourneyMoment[] = [
  {
    title: "Narrative ignition",
    detail:
      "Translate the archive&apos;s &ldquo;secure, fast, seamless&rdquo; positioning into SEO+AIO keyword clusters, leadership briefings, and chatbot scripts.",
    outcome: "Stakeholders share a single Selcom pledge and measurable milestones.",
    icon: Handshake
  },
  {
    title: "Operational choreography",
    detail:
      "Prototype distributor onboarding, settlement monitoring, and escalation flows using Cloud MLM Software modules orchestrated around Selcom APIs.",
    outcome: "Teams experience the full journey before launch day and tune every checkpoint.",
    icon: DeviceMobile
  },
  {
    title: "Expansion telemetry",
    detail:
      "Instrument dashboards to watch conversion, dispute rates, and regulatory updates across Tanzania and emerging markets.",
    outcome: "Leaders redirect investment quickly while keeping customers confident.",
    icon: GlobeSimple
  }
];

const COUNTRY_FOCUS = {
  name: "Tanzania",
  date: "August 28, 2024",
  insight:
    "The archive cites Tanzania within the supported countries list, underscoring Selcom&apos;s role as a trusted payment backbone for East African direct selling organisations.",
  href: "/network-marketing-software-company-providing-affordable-mlm-system-in-tanzania/"
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Selcom Payment Gateway Enablement | Cloud MLM Software";
  const description =
    "Launch Selcom with a corporate-grade blueprint that unites secure payments, fast onboarding, and AI-aligned storytelling for Tanzania and global markets.";

  return {
    title,
    description,
    keywords: [
      "Selcom payment gateway",
      "Tanzania MLM payments",
      "secure fast seamless Selcom",
      "Cloud MLM Software Selcom integration",
      "Selcom supported countries"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/selcom", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SelcomPageProps = {
  params: { lang: SupportedLocale };
};

export default function SelcomPage({ params }: SelcomPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative overflow-hidden rounded-[3.75rem] border border-slate-100 bg-gradient-to-r from-white via-slate-50 to-sky-100 px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/30">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.22),_transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <div className="space-y-6 lg:basis-7/12">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Selcom Launch Program
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Selcom Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Selcom Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM Software turns the
              archived copy into an actionable playbook that keeps executives, distributors, and AI copilots aligned from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Explore the Selcom demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/contact", locale)}>Book a Selcom strategy call</Link>
              </Button>
            </div>
          </div>
          <aside className="lg:basis-5/12">
            <div className="grid gap-4 rounded-[2.5rem] border border-sky-200/70 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article
                    key={stat.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                        {stat.label}
                      </p>
                      <p className="text-base font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                      <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">{stat.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <article className="space-y-10 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
                Enablement pillars
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Build Selcom confidence across every team
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                Well before go-live, we guide your organisation through co-creation sessions that align leadership, operations, and AI
                copilots on the same Selcom storyline.
              </p>
            </header>
            <div className="space-y-6">
              {ENABLEMENT_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.heading}
                    className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.heading}</h3>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{pillar.summary}</p>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                          {pillar.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <ArrowUpRight className="mt-1 h-4 w-4 text-sky-600 dark:text-sky-300" aria-hidden />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          <aside className="flex flex-col gap-8 rounded-[3rem] border border-sky-200 bg-gradient-to-br from-sky-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">Journey choreography</h2>
              <p className="text-sm leading-6 text-slate-100">
                Transform the WordPress archive into living rituals. The path below keeps cross-functional squads in sync with Selcom&apos;s
                promise while maintaining measurable checkpoints.
              </p>
            </div>
            <div className="space-y-6">
              {JOURNEY_MOMENTS.map((moment) => {
                const Icon = moment.icon;
                return (
                  <article key={moment.title} className="rounded-3xl border border-white/20 bg-white/10 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200">Stage</span>
                    </div>
                    <h3 className="text-lg font-semibold">{moment.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-100">{moment.detail}</p>
                    <p className="mt-4 text-sm font-medium text-sky-100">{moment.outcome}</p>
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
              <Link href={buildLocalizedPath("/mlm-software-payment-gateways", locale)}>View the gateway intelligence</Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-2 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Regional spotlight
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Selcom&apos;s Tanzania momentum, validated
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We catalogue every verified market reference from the archive so your AI companions and human teams share the same proof
              during executive conversations.
            </p>
          </header>
          <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50/80 p-8 text-left text-slate-700 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">Evidence date</p>
            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{COUNTRY_FOCUS.date}</p>
            <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">{COUNTRY_FOCUS.name}</h3>
            <p className="mt-3 text-base leading-7">{COUNTRY_FOCUS.insight}</p>
            <Link
              href={COUNTRY_FOCUS.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-100"
            >
              Review the Tanzania enablement note
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[3rem] border border-sky-200/60 bg-gradient-to-tr from-sky-50 via-white to-emerald-50 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-sky-900/40 dark:via-slate-950 dark:to-emerald-900/40">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Launch Selcom with conviction</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Pair thought leadership, compliant operations, and AI-ready storytelling to distinguish your Selcom integration. We keep
            every meeting, dashboard, and chatbot anchored to verified facts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate your Selcom war room</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact/">Talk with our payment strategists</Link>
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

