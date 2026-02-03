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
  ChartLineUp,
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  MapPin,
  Notebook,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  TrendUp,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Pillar = {
  title: string;
  description: string;
  icon: IconType;
};

type Track = {
  heading: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleDeck = {
  title: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "Paybox page recorded in the WordPress archive."
  },
  {
    label: "Primary region",
    value: "Kazakhstan",
    detail: "Card, QR, and wallet adoption across Central Asia."
  },
  {
    label: "Activation window",
    value: "6 weeks",
    detail: "From discovery to AI-ready stories, journeys, and governance."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless verified",
    description:
      "We translate the archive promise into compliance dossiers, executive briefings, and AI prompt kits aligned with Kazakh regulators.",
    icon: ShieldCheck
  },
  {
    title: "Central Asia commerce",
    description:
      "Journey design respects Paybox’s usage across cards, QR, and instalment services spanning Kazakhstan and neighbouring markets.",
    icon: DeviceMobile
  },
  {
    title: "AI aligned",
    description:
      "Knowledge bases empower leadership, field teams, and AI copilots to repeat one narrative across languages and channels.",
    icon: Sparkle
  }
];

const TRACKS: Track[] = [
  {
    heading: "Narrative architecture",
    summary: "Convert the archive copy into investor-grade storytelling and AI guidance.",
    bullets: [
      "Executive brief connecting Paybox capabilities with Cloud MLM Software differentiation.",
      "SEO & AIO keyword clusters covering Kazakhstan, Central Asia, and direct selling fintech.",
      "Prompt libraries powering copilots, support bots, and reporting dashboards."
    ],
    icon: Notebook
  },
  {
    heading: "Experience choreography",
    summary: "Design omnichannel experiences showing Paybox convenience.",
    bullets: [
      "Prototype desktop and mobile flows for onboarding, checkout, and payouts.",
      "Telemetry blueprint capturing conversion, KYC velocity, and fraud signals.",
      "Localized storytelling in Kazakh, Russian, and English."
    ],
    icon: MapPin
  },
  {
    heading: "Operational intelligence",
    summary: "Give finance, support, and growth teams shared telemetry.",
    bullets: [
      "Multi currency automation for KZT, USD, and EUR settlements.",
      "Support playbooks combining AI summarisation with escalation guidelines.",
      "Dashboards highlighting retention, churn, and incentive performance."
    ],
    icon: ChartLineUp
  }
];

const MODULE_DECKS: ModuleDeck[] = [
  {
    title: "Revenue runway",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase Paybox checkout with KPI overlays for executive stakeholders.",
      "Balance multi-currency ledgers with audit-ready controls and approvals.",
      "Embed the gateway into Shopify, WooCommerce, and bespoke commerce stacks."
    ],
    icon: SquaresFour
  },
  {
    title: "Member assurance",
    subtitle: "E-Wallet • Backup Manager • Ticket System",
    bullets: [
      "Automate payouts triggered by Paybox settlement confirmations.",
      "Maintain encrypted backups satisfying Kazakhstan’s data governance mandates.",
      "Resolve tickets with AI summarisation, multilingual support, and SLA tracking."
    ],
    icon: UsersThree
  },
  {
    title: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as Paybox’s innovation partner.",
      "Monitor compensation health and expansion velocity via live analytics."
    ],
    icon: TrendUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Paybox Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Bring Paybox’s secure, fast, seamless payments into Cloud MLM Software. Launch AI-ready narratives, omnichannel journeys, and governed operations across Kazakhstan.";

  return {
    title,
    description,
    keywords: [
      "Paybox payment gateway",
      "Paybox Cloud MLM Software integration",
      "Kazakhstan payment orchestration",
      "Central Asia digital payments",
      "AI optimized fintech enablement"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/paybox", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PayboxPageProps = {
  params: { lang: SupportedLocale };
};

export default function PayboxPage({ params }: PayboxPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.35),_transparent_45%)] bg-slate-950" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.12fr,0.88fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Central Asia payments
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Paybox Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-teal-100">
                The archived WordPress page promises secure, fast, seamless payments. We turn that phrase into a launch programme—narratives, experiences, and operations that keep Paybox at the heart of Kazakhstan’s digital commerce.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Paybox demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Schedule launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-200">{metric.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-teal-100">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-teal-100">{pillar.description}</p>
                    </article>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 px-10 py-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch tracks
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Three tracks that operationalise Paybox inside Cloud MLM Software
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Narrative, experience, and operations combine to deliver proof across Kazakhstan and neighbouring markets.
            </p>
          </header>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.heading}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-teal-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{track.heading}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-200">{track.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-teal-500" aria-hidden />
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

      <section className="px-6">
        <div className="mx-auto max-w-6xl gap-8 rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-teal-50 to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black lg:grid lg:grid-cols-[0.85fr,1.15fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Module decks orchestrated for Paybox telemetry
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Product, finance, and support teams operate with confidence when Paybox data sits at the centre.
            </p>
            <Link
              href="/payment-gateways/paybox/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-200 dark:hover:text-teal-100"
            >
              Review the archived Paybox page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {MODULE_DECKS.map((deck) => {
              const Icon = deck.icon;
              return (
                <article
                  key={deck.title}
                  className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{deck.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {deck.subtitle}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-200">
                    {deck.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Lightning className="mt-0.5 h-4 w-4 text-teal-500" aria-hidden />
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

      <section className="px-6 pb-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-teal-200 bg-teal-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to orchestrate Paybox with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Align leadership, distributors, and AI copilots around instant EFT success—secure, fast, seamless, and measured.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact/">Speak with a payment strategist</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review delivery options</Link>
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
