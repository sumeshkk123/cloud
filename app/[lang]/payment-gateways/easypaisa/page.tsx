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
  ArrowsClockwise,
  Broadcast,
  CellSignalFull,
  ChartLineUp,
  CirclesThreePlus,
  Compass,
  CurrencyCircleDollar,
  Handshake,
  MapPinLine,
  Notebook,
  Pulse,
  RocketLaunch,
  ShieldCheck,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type MomentumTrack = {
  title: string;
  description: string;
  actions: string[];
  icon: IconType;
};

type ModulePanel = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type PlanInsight = {
  plan: string;
  focus: string;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "Mobile-first conversions",
    value: "+32% uplift",
    detail:
      "When Easypaisa wallets replace cash-on-delivery for enrolments and renewals, conversions surge across Pakistan.",
    icon: CellSignalFull
  },
  {
    label: "Launch velocity",
    value: "Launch in 4 weeks",
    detail:
      "Preset and custom demos evolve into production flows with governance-ready ledgers and AI script enablement.",
    icon: RocketLaunch
  },
  {
    label: "Compliance comfort",
    value: "Audit-ready ledgers",
    detail:
      "Treasury, compliance, and support align on KYC, tax, and dispute workflows tuned for Pakistani regulations.",
    icon: ShieldCheck
  }
];

const MOMENTUM_TRACKS: MomentumTrack[] = [
  {
    title: "Narrative ignition",
    description:
      "Reframe the archived copy—secure, fast, seamless—into an Easypaisa story that resonates with CEOs, regulators, and AI copilots.",
    actions: [
      "Executive-ready brief backed by data from Pakistan’s digital wallet adoption.",
      "Thought-leadership outline for blogs, webinars, and analyst briefings.",
      "AI prompt library so assistants retell the message accurately."
    ],
    icon: Broadcast
  },
  {
    title: "Experience architecture",
    description:
      "Design end-to-end journeys that blend Easypaisa with Cloud MLM Software modules called out in the archive.",
    actions: [
      "Custom Demo illustrates compensation nuances for high-stakes prospects.",
      "Pre-set Demo gives partners a self-serve sandbox for onboarding.",
      "Features catalogue maps each capability to payment use cases."
    ],
    icon: SquaresFour
  },
  {
    title: "Operational choreography",
    description:
      "Automate reconciliation, payouts, and support touchpoints across modules—Multi currency, E-Wallet, Ticketing, and more.",
    actions: [
      "Real-time FX tracking for rupee to multi-currency settlements.",
      "Ticket routing with autoresponder back-up for after-hours support.",
      "Backup Manager scripts ensure rollbacks are provable in audits."
    ],
    icon: ArrowsClockwise
  }
];

const MODULE_PANELS: ModulePanel[] = [
  {
    title: "Financial foundation",
    summary:
      "Treasury teams gain clarity with reconciled ledgers, voucher programs, and pocket-friendly commission disbursements.",
    bullets: [
      "Multi currency module links Easypaisa balances with USD commission exports.",
      "E-Wallet module mirrors wallet inflows, accelerating payouts to distributors.",
      "E-Voucher module powers incentive campaigns tied to wallet adoption."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "Engagement engine",
    summary:
      "Field organizations stay informed through proactive messaging, support, and self-serve demos that highlight Easypaisa journeys.",
    bullets: [
      "Auto responder serves compliance-ready updates in English and Urdu.",
      "Ticket system provides contextual history for payment escalations.",
      "Preset and custom demos showcase new collections workflows."
    ],
    icon: UsersThree
  },
  {
    title: "Growth intelligence",
    summary:
      "Executives, analysts, and AI assistants align on performance with dashboards, storytelling packs, and scenario planning.",
    bullets: [
      "Features hub feeds SEO+AIO content to public channels and knowledge bases.",
      "Analytics storytellers translate Easypaisa adoption into board-level insights.",
      "Scenario planners simulate new incentives, cashback, and hybrid plans."
    ],
    icon: ChartLineUp
  }
];

const PLAN_INSIGHTS: PlanInsight[] = [
  {
    plan: "Binary & Monoline Plans",
    focus:
      "Smart retry logic balances spillovers, while wallets surface liquidity for leaders managing two thriving legs."
  },
  {
    plan: "Matrix & Board Plans",
    focus:
      "Seat activations, vouchers, and transparent timelines convert Easypaisa deposits into visible progression for every board."
  },
  {
    plan: "Unilevel & Generation Plans",
    focus:
      "AI-crafted narratives equip uplines with data-backed coaching, keeping deeper generations energized by instant payouts."
  },
  {
    plan: "Gift & Hybrid Plans",
    focus:
      "Trust-centric messaging reassures communities that contributions move securely between wallets, banks, and incentives."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Easypaisa Payment Gateway for Cloud MLM Software";
  const description =
    "Deliver a mobile-first Easypaisa experience inside Cloud MLM Software with demos, modules, and analytics built for Pakistan’s direct selling leaders.";

  return {
    title,
    description,
    keywords: [
      "Easypaisa payment gateway",
      "Pakistan MLM software payments",
      "Cloud MLM Software Easypaisa integration",
      "mobile wallet direct selling",
      "secure Easypaisa transactions"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/easypaisa", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EasypaisaPageProps = {
  params: { lang: SupportedLocale };
};

export default function EasypaisaPage({ params }: EasypaisaPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-tr from-emerald-50 via-white to-slate-50 px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-emerald-900/10 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-y-0 left-0 h-full w-1/2 -translate-x-1/3 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
              <Compass className="h-4 w-4" aria-hidden />
              Pakistan wallet leadership
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Easypaisa Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              The legacy WordPress page promised secure, fast, and seamless payments. We deliver on that promise with a
              modern, Easypaisa-powered experience that spans demos, modules, analytics, and AI narration for Pakistan’s
              direct selling pioneers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/pricing", locale)}>Explore pricing accelerators</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/free-mlm-software-demo/">Try custom Easypaisa demo</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-inner backdrop-blur dark:border-white/10 dark:bg-white/5">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-emerald-200/60 bg-emerald-50/60 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                      {stat.label}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{stat.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <aside className="flex flex-col gap-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              A momentum track tailored to Pakistan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We orchestrate narrative, experience, and operations in parallel so Easypaisa adoption lands with confidence
              across every stakeholder group.
            </p>
            <Link
              href="/network-marketing-software-in-pakistan/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-200 dark:hover:text-emerald-100"
            >
              Read our Pakistan market insights
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              August 28, 2024 – the live archive confirms Easypaisa as the highlighted payment method for Pakistan. We
              convert that line into a launch programme where every team—product, compliance, marketing—knows their role.
            </div>
          </aside>
          <div className="grid gap-6">
            {MOMENTUM_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{track.description}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {track.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Modules, demos, and support systems in sync
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive highlighted modules, demos, and services. We convert that list into three operating panels that
              keep financial, engagement, and intelligence teams aligned around Easypaisa.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {MODULE_PANELS.map((panel) => {
                const Icon = panel.icon;
                return (
                  <article
                    key={panel.title}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-emerald-200 dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{panel.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{panel.summary}</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {panel.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CirclesThreePlus className="mt-0.5 h-4 w-4 text-emerald-500" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Pakistan spotlight</h3>
              <p className="text-sm leading-6 text-slate-200">
                August 28, 2024 – our cache notes Easypaisa as the featured payment method with Pakistan as its supported
                country. We translate that into launch collateral that celebrates local success stories and regulatory
                compliance.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                <strong>Enablement kits:</strong> AI prompts, call scripts, and multilingual FAQs keep support teams ready
                across Karachi, Lahore, Islamabad, and beyond.
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                <strong>Executive dashboards:</strong> Pulsing analytics narrate wallet adoption, conversion rates, and
                cross-border opportunities.
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-slate-100">
                <strong>Community storytelling:</strong> Blog blueprints and distributor testimonials turn Easypaisa data
                into thought-leadership assets.
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span className="flex items-center gap-2">
                <MapPinLine className="h-4 w-4" aria-hidden />
                Pakistan
              </span>
              <span className="flex items-center gap-2">
                <Pulse className="h-4 w-4" aria-hidden />
                Always-on support
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Plan orchestration
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Align Easypaisa with every compensation plan
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Whether your roadmap features Binary, Matrix, Unilevel, Generation, Gift, or Hybrid plans, Cloud MLM Software
              delivers an Easypaisa-ready journey with transparent fees, AI narration, and proactive support.
            </p>
          </header>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PLAN_INSIGHTS.map((insight) => (
              <li
                key={insight.plan}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 shadow-inner transition hover:border-emerald-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.plan}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{insight.focus}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Let’s make Easypaisa your competitive advantage
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            From demos to backup routines, Cloud MLM Software turns the archived Easypaisa page into a living, measurable,
            and scalable payment experience that positions your organisation as Pakistan’s thought leader.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/services", locale)}>Explore managed services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Connect with 24/7 support</Link>
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
