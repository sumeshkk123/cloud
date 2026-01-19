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
  ChartLineUp,
  Circuitry,
  GlobeHemisphereWest,
  HandsClapping,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Sprint = {
  phase: string;
  focus: string;
  items: string[];
  icon: IconType;
};

const HERO_SIGNALS: Signal[] = [
  {
    label: "Archive capture",
    value: "28 Aug 2024",
    detail: "Paystack WordPress content informs this transformation.",
    icon: Sparkle
  },
  {
    label: "Regional anchor",
    value: "Nigeria",
    detail: "Paystack’s home base with cards, transfers, USSD, and QR acceptance.",
    icon: MapPin
  },
  {
    label: "Experience promise",
    value: "Secure • Fast • Seamless",
    detail: "Up-leveled into an AI-ready operating system for African expansion.",
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Growth storytelling",
    summary:
      "Custom demo, preset demo, and module insights now amplify Paystack’s innovation across Nigeria and West Africa.",
    bullets: [
      "Narratives linking Paystack features to Cloud MLM Software differentiation for direct selling brands.",
      "SEO & AIO keyword clusters targeting Nigeria fintech, creator commerce, and diaspora remittance.",
      "Content studio for webinars, investor decks, and analyst updates."
    ],
    icon: Broadcast
  },
  {
    title: "Experience choreography",
    summary:
      "We choreograph onboarding, checkout, and payout journeys inspired by the archive for every stakeholder group.",
    bullets: [
      "Persona-led demos covering mobile money, POS, and transfer flows.",
      "Real-time notifications tying Paystack events to commission and incentive triggers.",
      "Community rituals mixing AI and human support across WhatsApp, SMS, and in-app channels."
    ],
    icon: HandsClapping
  },
  {
    title: "Operations & AI intelligence",
    summary:
      "Secure, fast, seamless becomes an analytics and automation stack for finance, compliance, and AI copilots.",
    bullets: [
      "Executive dashboards covering approvals, settlement timing, and chargebacks.",
      "Risk playbooks for CBN regulations, FX volatility, and cross-border entry.",
      "Prompt libraries aligning bots and humans on Paystack terminology and tone."
    ],
    icon: Circuitry
  }
];

const SPRINTS: Sprint[] = [
  {
    phase: "Sprint 01",
    focus: "Archive strategy remix",
    items: [
      "Decode WordPress copy into growth, finance, and compliance narratives.",
      "Design SEO & AIO clusters around Nigeria fintech, ecommerce, and payouts.",
      "Align Cloud MLM Software modules with Paystack capabilities."
    ],
    icon: TrendUp
  },
  {
    phase: "Sprint 02",
    focus: "Experience & enablement lab",
    items: [
      "Custom demos for distributors, retailers, and finance teams with Paystack flows.",
      "Preset demo toolkit featuring scripts, decks, and metric overlays.",
      "Localization for Nigerian English, Pidgin, and French for Francophone expansion."
    ],
    icon: Lightning
  },
  {
    phase: "Sprint 03",
    focus: "Growth intelligence loop",
    items: [
      "KPIs for retention, activation, and incentive velocity across Nigeria.",
      "Experiment roadmap covering loyalty, BNPL, and marketplace partnerships.",
      "AI governance cadence reinforcing secure, fast, seamless messaging."
    ],
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Paystack Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate Paystack’s secure, fast, seamless payments inside Cloud MLM Software. Deliver Nigeria-first journeys, growth storytelling, and AI-driven operations.";

  return {
    title,
    description,
    keywords: [
      "Paystack payment gateway",
      "Paystack Cloud MLM Software integration",
      "Nigeria fintech payments",
      "West Africa payment gateway",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paystack", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PaystackPageProps = {
  params: { lang: SupportedLocale };
};

export default function PaystackPage({ params }: PaystackPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-amber-50 to-emerald-100/40 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.24),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.22),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.24),_transparent_45%)]" />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-emerald-200/40 dark:bg-white/10 dark:text-emerald-100">
              Paystack payment gateway
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Make Paystack the growth signal for Nigeria-first direct selling enterprises.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-white/80">
              We reframe the archive promise—secure, fast, seamless—into modern journeys, insights, and AI enablement that lift
              Nigerian distributors, retailers, and executives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with Paystack strategists
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
                  Try Paystack-ready demos
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-emerald-200/60 via-white/60 to-amber-200/60 blur-3xl dark:from-emerald-500/20 dark:via-slate-950/40 dark:to-amber-400/20" />
            <div className="grid gap-6 rounded-3xl border border-emerald-200/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/10">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.label}
                    className="flex flex-col gap-3 rounded-2xl border border-emerald-200/60 bg-white/90 p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                        {signal.label}
                      </p>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-white/70">{signal.detail}</p>
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
            Strategic pillars from the Paystack archive
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Custom demo, preset demo, and module listings become growth, experience, and operations pillars built for Nigeria and
            West Africa.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-20 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-amber-300/20 to-emerald-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70">{pillar.summary}</p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70">
                    {pillar.bullets.map((bullet) => (
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(34,197,94,0.3),_transparent_55%),radial-gradient(circle_at_right,_rgba(250,204,21,0.28),_transparent_45%)]" />
        <div className="relative container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Launch sprints for Paystack + Cloud MLM Software</h2>
            <p className="text-base text-white/80">
              A three-sprint cadence converts the archive into actionable playbooks for growth, experience, and AI operations.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {SPRINTS.map((sprint) => {
              const Icon = sprint.icon;
              return (
                <article
                  key={sprint.phase}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{sprint.phase}</span>
                    <Icon className="h-6 w-6 text-emerald-200" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{sprint.focus}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {sprint.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-emerald-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Paystack supported country spotlight
          </h2>
          <p className="text-base text-slate-600 dark:text-white/75">
            Nigeria was the country featured in the archive. We frame it as mission-critical intelligence for your teams.
          </p>
        </div>
        <div className="grid gap-6">
          <article className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Nigeria</h3>
              <GlobeHemisphereWest className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-white/70">
              Emphasise local card acceptance, USSD, agency banking networks, and community-driven commerce that Paystack enables.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white via-amber-50 to-white p-10 shadow-lg dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Ready to activate Paystack with Cloud MLM Software?
              </h2>
              <p className="text-base text-slate-600 dark:text-white/70">
                Purchase the platform, align your teams, and ensure Paystack’s secure, fast, seamless promise holds across humans
                and AI copilots.
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

