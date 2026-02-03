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
  DeviceMobile,
  GlobeHemisphereEast,
  Lightning,
  MapTrifold,
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

type Territory = {
  region: string;
  status: string;
  narrative: string;
  link: string;
};

const METRICS: Metric[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "Orange Money page recorded in WordPress archive."
  },
  {
    label: "Regions referenced",
    value: "Mali, Guinea-Bissau, Burkina Faso, CAR, Equatorial Guinea",
    detail: "Multi-country footprint across Francophone Africa."
  },
  {
    label: "Activation sprint",
    value: "6 weeks",
    detail: "Discovery to AI-ready narratives, journeys, and governance."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Secure, fast, seamless contextualised",
    description:
      "We translate the archive promise into compliance dossiers, executive briefings, and AI prompt kits tuned for pan-African regulators.",
    icon: ShieldCheck
  },
  {
    title: "Agent network empowerment",
    description:
      "Experience design respects Orange Money’s agent ecosystems, cash-in/cash-out behaviour, and rural connectivity realities.",
    icon: DeviceMobile
  },
  {
    title: "AI-enabled localisation",
    description:
      "Knowledge hubs ensure leadership and AI assistants deliver consistent stories in French, English, and local languages.",
    icon: Sparkle
  }
];

const TRACKS: Track[] = [
  {
    heading: "Narrative architecture",
    summary: "Elevate the archived copy into investor-grade and AI-ready messaging.",
    bullets: [
      "Executive brief linking Orange Money capabilities with Cloud MLM Software expansion goals.",
      "SEO & AIO keyword clusters covering West/Central Africa and direct selling payments.",
      "Prompt libraries guiding copilots to address regulatory and agent questions responsibly."
    ],
    icon: Broadcast
  },
  {
    heading: "Experience choreography",
    summary: "Design journeys for mobile wallets, agent interactions, and cross-border use cases.",
    bullets: [
      "Prototype USSD, app, and agent-assisted flows for onboarding, checkout, and payouts.",
      "Telemetry blueprint capturing conversion, compliance triggers, and cash cycle insights.",
      "Localized content referencing French and English plus market-specific dialects."
    ],
    icon: MapTrifold
  },
  {
    heading: "Operational intelligence",
    summary: "Unify finance, support, and growth teams with shared telemetry.",
    bullets: [
      "Multi currency automation for XOF, XAF, and USD settlements.",
      "Support playbooks merging AI summarisation with escalation commitments.",
      "Dashboards highlighting retention, churn, and incentive velocity per territory."
    ],
    icon: ChartLineUp
  }
];

const MODULE_DECKS: ModuleDeck[] = [
  {
    title: "Revenue runway",
    subtitle: "Custom Demo • Multi currency • E-Commerce Integration",
    bullets: [
      "Showcase Orange Money use cases with KPIs for leadership and investors.",
      "Balance multi-currency ledgers with audit-ready approvals and alerts.",
      "Embed the gateway into commerce stacks across mobile, USSD, and offline agent flows."
    ],
    icon: SquaresFour
  },
  {
    title: "Agent excellence",
    subtitle: "E-Wallet • Ticket System • Backup Manager",
    bullets: [
      "Automate payouts triggered by Orange Money settlement confirmations.",
      "Resolve agent and distributor tickets with AI summarisation and SLA tracking.",
      "Maintain encrypted backups aligned with African data governance requirements."
    ],
    icon: UsersThree
  },
  {
    title: "Growth storytelling",
    subtitle: "Auto Responder • Documents • Analytics Packs",
    bullets: [
      "Send lifecycle messaging when payment events or plan milestones occur.",
      "Publish leadership decks positioning Cloud MLM Software as Orange Money’s thought partner.",
      "Monitor compensation health and expansion velocity with live analytics."
    ],
    icon: TrendUp
  }
];

const TERRITORIES: Territory[] = [
  {
    region: "Mali",
    status: "Operational",
    narrative:
      "Strengthen agent support, compliance, and localisation so Orange Money powers growth across Mali’s networks.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-mali/"
  },
  {
    region: "Guinea-Bissau",
    status: "Expansion-ready",
    narrative:
      "Localise language, regulatory oversight, and agent enablement to deliver reliable mobile money experiences.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-guinea-bissau/"
  },
  {
    region: "Burkina Faso",
    status: "Scaling",
    narrative:
      "Measure agent liquidity, compliance, and incentives to sustain expansion across the country.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-burkina-faso/"
  },
  {
    region: "Central African Republic",
    status: "Exploratory",
    narrative:
      "Assess infrastructure, regulatory alignment, and field support before full rollout.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-central-african-republic/"
  },
  {
    region: "Equatorial Guinea",
    status: "Strategic watch",
    narrative:
      "Monitor policy shifts and partner readiness while preparing templates for rapid launch.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-equatorial-guinea/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Orange Money Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Activate Orange Money’s secure, fast, seamless promise with Cloud MLM Software. Deliver AI-ready narratives, mobile-first journeys, and governed operations across Francophone Africa.";

  return {
    title,
    description,
    keywords: [
      "Orange Money payment gateway",
      "Orange Money Cloud MLM Software integration",
      "Francophone Africa mobile money",
      "Agent network enablement",
      "AI optimized mobile payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/orange-money", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OrangeMoneyPageProps = {
  params: { lang: SupportedLocale };
};

export default function OrangeMoneyPage({ params }: OrangeMoneyPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.4),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.35),_transparent_50%)] bg-slate-950" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 px-10 py-14 text-white shadow-2xl backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-[1.12fr,0.88fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-200">
                <Sparkle className="h-4 w-4" aria-hidden />
                Pan-African mobile money
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Orange Money Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-orange-100">
                The archived WordPress entry promises secure, fast, seamless payments. We translate that into a scalable
                programme—narratives, journeys, and operations aligned for Francophone Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Orange Money demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={buildLocalizedPath("/support", locale)}>Coordinate launch workshop</Link>
                </Button>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-orange-200">Archive insights</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-200">{metric.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-orange-100">{metric.detail}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <article key={pillar.title} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-white">{pillar.title}</h2>
                      <p className="text-sm leading-6 text-orange-100">{pillar.description}</p>
                    </article>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-slate-100 bg-white/95 px-10 py-12 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Six-week Orange Money activation cadence
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Weeks 1-2",
                detail: "Narrative workshops, archive synthesis, and KPI baselines across target countries.",
                icon: Notebook
              },
              {
                phase: "Weeks 3-4",
                detail: "Experience prototyping, integration scripts, and telemetry instrumentation.",
                icon: DeviceMobile
              },
              {
                phase: "Weeks 5-6",
                detail: "Operational playbooks, AI prompt roll-out, and executive storytelling across Francophone Africa.",
                icon: GlobeHemisphereEast
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.phase}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-orange-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.phase}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Territory intelligence
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Five-country Orange Money roadmap
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The archive referenced Mali, Guinea-Bissau, Burkina Faso, CAR, and Equatorial Guinea. We publish enablement plans
              for each territory.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {TERRITORIES.map((territory) => (
              <article
                key={territory.region}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-orange-300 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {territory.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{territory.region}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{territory.narrative}</p>
                <Link
                  href={territory.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800 dark:text-orange-200 dark:hover:text-orange-100"
                >
                  Continue discovery
                  <ArrowSquareOut className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-orange-200 bg-orange-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to lead Francophone Africa with Orange Money and Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with us to align leadership, distributors, and AI copilots around secure, fast, seamless mobile money—now
            measured with data.
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
