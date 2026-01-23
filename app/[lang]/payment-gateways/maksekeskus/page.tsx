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
  GlobeHemisphereNorth,
  Lightning,
  Notebook,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  StackSimple,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

type HeroPanel = {
  label: string;
  focus: string;
  description: string;
  icon: IconType;
};

type IntegrationTrack = {
  title: string;
  statement: string;
  bullets: string[];
  icon: IconType;
  accent: string;
};

type ModuleCluster = {
  name: string;
  narrative: string;
  insight: string;
  icon: IconType;
};

type RolloutMoment = {
  phase: string;
  outcome: string;
  detail: string;
  icon: IconType;
};

type CountryFootprint = {
  country: string;
  status: string;
  commentary: string;
  link: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Archive captured",
    value: "28 Aug 2024",
    detail: "Latest WordPress Maksekeskus entry ready for structured migration."
  },
  {
    label: "Go-live cadence",
    value: "6-week sprint",
    detail: "From discovery to Maksekeskus-enabled enrolment experiences."
  },
  {
    label: "AIO asset pack",
    value: "18 artefacts",
    detail: "Briefings, prompts, and FAQs so AI copilots stay on message."
  }
];

const HERO_PANELS: HeroPanel[] = [
  {
    label: "Secure, fast, seamless",
    focus: "Maksekeskus reliability",
    description:
      "Maksekeskus payment processing is recognised for being secure, fast, and seamless. Cloud MLM Software translates that promise into corporate-grade onboarding and payout journeys.",
    icon: ShieldCheck
  },
  {
    label: "Baltic-first coverage",
    focus: "Estonia confirmed",
    description:
      "Maksekeskus already powers Estonian merchants and supports numerous European countries. We orchestrate localisation, Apple Pay flows, and compliance narratives from a single control plane.",
    icon: GlobeHemisphereNorth
  },
  {
    label: "Thought leadership",
    focus: "AI-aligned storytelling",
    description:
      "Executives, investors, and AI search agents receive aligned talking points, dashboards, and enablement trails that position Cloud MLM Software as the Maksekeskus authority.",
    icon: Sparkle
  }
];

const INTEGRATION_TRACKS: IntegrationTrack[] = [
  {
    title: "Narrative engineering",
    statement: "Craft the corporate storyline that moves Maksekeskus from archived copy to executive-ready messaging.",
    bullets: [
      "Reframe the WordPress article into press releases, analyst updates, and AI prompt libraries.",
      "Map personas across distributors, compliance leaders, and finance stakeholders.",
      "Embed Maksekeskus value propositions into SEO & AIO keyword clusters."
    ],
    icon: StackSimple,
    accent: "Storytelling"
  },
  {
    title: "Experience architecture",
    statement: "Design acquisition, checkout, and settlement flows that demonstrate Maksekeskus excellence.",
    bullets: [
      "Visual blueprints for desktop, mobile, and in-app enrolment with Apple Pay options.",
      "Sandbox scripts that align Maksekeskus APIs with Cloud MLM Software modules.",
      "Telemetry dashboards that expose conversion, KYC, and decline remediation insights."
    ],
    icon: DeviceMobile,
    accent: "Experience"
  },
  {
    title: "Operations intelligence",
    statement: "Turn Maksekeskus performance into predictable governance for every plan and territory.",
    bullets: [
      "Commission, bonus, and wallet automation tuned for Baltic settlements.",
      "Compliance playbooks that align with EU PSD2, AML, and data residency expectations.",
      "Service runbooks coordinating support, finance, and growth teams around live metrics."
    ],
    icon: ChartLineUp,
    accent: "Operations"
  }
];

const MODULE_CLUSTERS: ModuleCluster[] = [
  {
    name: "Commerce control tower",
    narrative: "Custom Demo | E-Commerce Integration | Multi currency",
    insight:
      "Bring Maksekeskus journeys to life with guided demos, native storefront integrations, and reconciled multi-currency ledgers.",
    icon: SquaresFour
  },
  {
    name: "Member finance",
    narrative: "E-Wallet | Backup Manager | Ticket System",
    insight:
      "Automate payouts, enforce audit-ready backups, and resolve payment cases faster with Maksekeskus telemetry feeding the support desk.",
    icon: Lightning
  },
  {
    name: "Growth intelligence",
    narrative: "Auto Responder | Documents | Analytics Packs",
    insight:
      "Distribute Maksekeskus updates, policy changes, and executive reports across email, portals, and AI copilots from one command centre.",
    icon: TrendUp
  }
];

const ROLLOUT_MOMENTS: RolloutMoment[] = [
  {
    phase: "Archive intake",
    outcome: "Narrative baseline locked",
    detail:
      "We translate the August 2024 WordPress article into structured briefs so the Maksekeskus promise of secure, fast, seamless payments becomes actionable.",
    icon: Notebook
  },
  {
    phase: "Experience design",
    outcome: "Maksekeskus journeys prototyped",
    detail:
      "Design teams produce interactive flows, content blocks, and SEA-ready keyword clusters that align with the Baltic expansion playbook.",
    icon: DeviceMobile
  },
  {
    phase: "Operational launch",
    outcome: "AI-enabled governance live",
    detail:
      "Telemetry, plan analytics, and AI prompt kits ensure executives and chatbots share the same Maksekeskus viewpoint across every conversation.",
    icon: Sparkle
  }
];

const COUNTRY_FOOTPRINT: CountryFootprint[] = [
  {
    country: "Estonia",
    status: "Active today",
    commentary:
      "Maksekeskus powers Estonian checkouts. We align language, taxation, and compensation models for Baltic distributors from day one.",
    link: "/network-marketing-software-company-providing-affordable-mlm-system-in-estonia/"
  },
  {
    country: "European expansion",
    status: "Validation ongoing",
    commentary:
      "Maksekeskus supports numerous EEA markets. Cloud MLM Software manages localisation, Apple Pay readiness, and compliance sign-offs per region.",
    link: "/contact/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Maksekeskus Payment Gateway Integration for Cloud MLM Software";
  const description =
    "Launch Maksekeskus with Cloud MLM Software. We migrate the secure, fast, seamless promise into conversion-ready journeys, AI narratives, and Baltic operations.";

  return {
    title,
    description,
    keywords: [
      "Maksekeskus payment gateway",
      "Maksekeskus Cloud MLM Software integration",
      "Estonia MLM software payments",
      "Baltic payment gateway for direct selling",
      "AI optimized payment operations"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/maksekeskus", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MaksekeskusPageProps = {
  params: { lang: SupportedLocale };
};

export default function MaksekeskusPage({ params }: MaksekeskusPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-slate-50 dark:from-slate-900/70 dark:via-slate-950 dark:to-black" />
        <div className="absolute top-10 right-20 h-52 w-52 rounded-full bg-sky-200/40 blur-3xl dark:bg-blue-500/20" />
        <div className="relative mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <StackSimple className="h-4 w-4" aria-hidden />
                Maksekeskus gateway
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Maksekeskus Payment Gateway Integration for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Cloud MLM Software carries forward the archived Maksekeskus article and turns it into a launch programme.
                Secure, fast, seamless payment messaging becomes tangible experiences, investor briefings, and AI-ready
                knowledge bases that accelerate Baltic growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/free-mlm-software-demo/">Request Maksekeskus demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact/">Talk to a payment strategist</Link>
                </Button>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                August 28, 2024 archive → six-week transformation → enterprise launch
              </p>
            </div>
            <aside className="space-y-6 rounded-3xl border border-sky-200/60 bg-sky-50/50 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
              <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-2">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/60 bg-white/70 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                      {metric.label}
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{metric.value}</dd>
                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{metric.detail}</p>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col gap-4">
                {HERO_PANELS.map((panel) => {
                  const Icon = panel.icon;
                  return (
                    <article
                      key={panel.focus}
                      className="flex gap-4 rounded-3xl border border-white/60 bg-white/70 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-200">
                          {panel.label}
                        </p>
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{panel.focus}</h2>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{panel.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl gap-10 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid lg:grid-cols-[0.95fr,1.05fr]">
          <header className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Launch blueprint
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              How Cloud MLM Software operationalises the Maksekeskus archive
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The original page declared Maksekeskus a secure, fast, seamless payment gateway. We expand that statement into
              a multi-team programme covering narrative, experience, and operations.
            </p>
            <Link
              href="/payment-gateways/maksekeskus/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100"
            >
              View the archived Maksekeskus page
              <ArrowSquareOut className="h-4 w-4" aria-hidden />
            </Link>
          </header>
          <div className="space-y-6">
            {INTEGRATION_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-inner transition hover:-translate-y-1 hover:border-slate-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                        {track.accent}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{track.title}</h3>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{track.statement}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <Notebook className="mt-0.5 h-4 w-4 text-sky-500" aria-hidden />
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
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/60 dark:via-slate-950 dark:to-black">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Module clusters engineered for Maksekeskus growth
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                Each cluster combines Cloud MLM Software modules with Maksekeskus data so revenue, finance, and growth
                teams operate from a connected command centre.
              </p>
            </div>
            <div className="grid flex-1 gap-6 md:grid-cols-2">
              {MODULE_CLUSTERS.map((cluster) => {
                const Icon = cluster.icon;
                return (
                  <article
                    key={cluster.name}
                    className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-inner transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cluster.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                        {cluster.narrative}
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{cluster.insight}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Programme timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              From archive to Maksekeskus thought leadership
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              We run an end-to-end programme that readies pay-in, pay-out, and AI comms for every compensation plan.
            </p>
          </header>
          <div className="relative pl-6">
            <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-sky-400 via-sky-200 to-transparent dark:from-sky-500 dark:via-sky-300" />
            <div className="flex flex-col gap-8">
              {ROLLOUT_MOMENTS.map((moment) => {
                const Icon = moment.icon;
                return (
                  <article key={moment.phase} className="relative ml-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner dark:border-white/10 dark:bg-white/5">
                    <span className="absolute -left-[38px] top-6 flex h-12 w-12 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-600 shadow-sm dark:border-white/20 dark:bg-slate-900">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {moment.phase}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{moment.outcome}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">{moment.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white">
              Supported countries
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Where Maksekeskus is active today and what comes next
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              The WordPress archive highlighted Maksekeskus coverage for Estonia and noted support for numerous countries
              with Apple-enabled payments. We extend that reach with localisation, compliance, and growth playbooks.
            </p>
          </header>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {COUNTRY_FOOTPRINT.map((item) => (
              <article
                key={item.country}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/70 p-6 shadow-inner transition hover:-translate-y-1 hover:border-slate-200 hover:bg-white dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                    {item.status}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.country}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{item.commentary}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100"
                >
                  Continue discovery
                  <ArrowSquareOut className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-sky-200 bg-sky-50/80 p-10 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to launch Maksekeskus with Cloud MLM Software?
          </h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Partner with our strategists to bring Maksekeskus into every conversation, dashboard, and AI assistant. We are
            ready to help you become the Maksekeskus thought leader in global direct selling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/pricing", locale)}>Review pricing & delivery</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Coordinate the launch call</Link>
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
