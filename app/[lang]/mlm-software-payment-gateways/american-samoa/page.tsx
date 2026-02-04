import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Compass,
  Megaphone,
  Network,
  Radar,
  Waves
} from "lucide-react";
import {
  Bank,
  Boat,
  CellTower,
  Handshake,
  ShieldCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Priority = {
  heading: string;
  description: string;
  icon: IconType;
};

type Path = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_FACTS: HeroFact[] = [
  {
    title: "Settlement footprint",
    value: "USD focus",
    detail: "Align with US banking rails while supporting Pacific time zones.",
    icon: Bank
  },
  {
    title: "Connectivity support",
    value: "Always-on",
    detail: "Monitoring covers satellite outages and auto-retries for commissions.",
    icon: Radar
  },
  {
    title: "Gateway adapters",
    value: "7",
    detail: "Integrations across local banks, mainland PSPs, and military-approved rails.",
    icon: Network
  }
];

const PRIORITIES: Priority[] = [
  {
    heading: "Remote-first reliability",
    description:
      "Island connectivity can fluctuate. Cloud MLM Software caches payouts, validates once back online, and keeps leadership informed in real time.",
    icon: CellTower
  },
  {
    heading: "US regulatory alignment",
    description:
      "Meet FDIC, FinCEN, and territorial requirements with audit trails that satisfy US regulators and local authorities alike.",
    icon: ShieldCheck
  },
  {
    heading: "Distributor advocacy",
    description:
      "Field leaders receive bilingual updates, SMS alerts, and proactive outreach to maintain engagement across villages and military bases.",
    icon: UsersThree
  }
];

const PATHS: Path[] = [
  {
    name: "Local banking & credit unions",
    summary: "Automate ACH and wire cycles with ANZ Guam, Bank of Hawaii, and territorial credit unions.",
    bullets: [
      "Batch approvals with maker-checker workflows",
      "Automated NACHA file delivery with settlement alerts",
      "Audit logs ready for US mainland reviews"
    ],
    icon: Bank
  },
  {
    name: "Mainland PSP bridge",
    summary: "Extend ecommerce acceptance with US acquiring banks and digital wallets.",
    bullets: [
      "Tokenized payouts to Stripe, Authorize.net, and PayPal",
      "Dynamic routing based on card brand performance",
      "Chargeback automation with evidence templates"
    ],
    icon: Megaphone
  },
  {
    name: "Field payout mobility",
    summary: "Support remote kiosks, marine routes, and events with offline-ready wallets.",
    bullets: [
      "Offline receipt caching with SMS verification",
      "Boat and ferry delivery tracking for commission kits",
      "Geo-fenced incentives tied to island outreach campaigns"
    ],
    icon: Boat
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Transparent governance",
    description:
      "Dual approvals, immutable ledgers, and automated compliance evidence make regulator check-ins straightforward.",
    icon: ShieldCheck
  },
  {
    title: "Telemetry that travels",
    description:
      "Dashboards surface liquidity, failed attempts, and connectivity health so teams respond before field trust dips.",
    icon: Radar
  },
  {
    title: "Community-first enablement",
    description:
      "Training kits, SMS broadcasts, and weekly office hours keep distributors confident wherever they serve.",
    icon: Handshake
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "How do you handle payouts during satellite outages?",
    answer:
      "Transactions queue securely, trigger SMS confirmations, and reconcile the moment connectivity returns so ledgers stay accurate."
  },
  {
    question: "Can we use the same system for mainland US expansion?",
    answer:
      "Yes. Cloud MLM Software operates on US banking standards, making it simple to scale from American Samoa to Hawaii and the mainland."
  },
  {
    question: "What support do field leaders receive?",
    answer:
      "Dedicated success managers provide bilingual playbooks, live office hours, and crisis communication templates tailored to island logistics."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "American Samoa MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Modernise American Samoa MLM payments. Cloud MLM Software delivers uptime, US regulatory compliance, and offline-ready payouts for island distributors.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/american-samoa", locale)
    },
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  };
}

type AmericanSamoaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AmericanSamoaPaymentGatewaysPage({ params }: AmericanSamoaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-sky-200/70 bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.3),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_30%_80%,rgba(6,182,212,0.3),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.45),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_30%_80%,rgba(6,182,212,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-sky-500/40 dark:bg-slate-900/70 dark:text-sky-200">
                <Waves className="h-4 w-4" />
                American Samoa payment insights
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Keep American Samoa payouts resilient across every tide and time zone
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software synchronises American Samoa’s territorial banks, mainland US partners, and field teams—even when connectivity dips. Deliver steady commissions, uphold regulatory standards, and give distributors confidence with transparent, data-rich experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                  <Link href={contactHref}>
                    Plan your island payment rollout
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-sky-200 bg-white/80 text-sky-800 hover:bg-sky-50 dark:border-sky-500/30 dark:bg-transparent dark:text-sky-100 dark:hover:bg-sky-500/10"
                >
                  <Link href={demoHref}>Watch the orchestration demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-sky-200/70 bg-white/85 p-7 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.25),transparent_55%)]" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-500 dark:text-slate-300">
                Executive snapshot
              </p>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-200">
                &quot;Our American Samoa teams now see every commission stage—even during storms. Automated alerts and retries keep confidence high.&quot;
              </p>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">— Cloud MLM Software Pacific deployment lead</p>
              <dl className="mt-6 grid gap-5 rounded-2xl border border-sky-200/70 bg-sky-50/60 p-5 text-sm text-slate-700 dark:border-slate-600/50 dark:bg-slate-950/40 dark:text-slate-200">
                {HERO_FACTS.map((fact) => (
                  <div key={fact.title}>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-slate-400">
                      <fact.icon className="h-4 w-4" />
                      {fact.title}
                    </div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-2xl font-semibold">{fact.value}</span>
                      <span className="text-xs uppercase tracking-[0.3em] text-sky-400/80 dark:text-slate-400">
                        {fact.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </dl>
              <Button asChild size="sm" variant="outline" className="mt-6 border-sky-200 text-sky-700 hover:bg-sky-100 dark:border-sky-500/40 dark:text-sky-200 dark:hover:bg-sky-500/10">
                <Link href={pricingHref}>
                  Explore deployment tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {PRIORITIES.map((priority) => (
              <article
                key={priority.heading}
                className="rounded-3xl border border-sky-200/70 bg-white/80 p-6 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <priority.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{priority.heading}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{priority.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment paths engineered for island operations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Cloud MLM Software has already helped American Samoa organisations modernise their compensation cycles. Choose the path mix that matches your growth ambitions.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PATHS.map((path) => (
            <article
              key={path.name}
              className="relative flex h-full flex-col gap-5 rounded-3xl border border-sky-200/70 bg-gradient-to-br from-white via-white to-sky-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-sky-200 via-transparent to-cyan-200 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-sky-500/20 dark:to-cyan-500/20" aria-hidden />
              <path.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{path.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{path.summary}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {path.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-200/70 bg-sky-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A delivery rhythm tuned for Pacific realities
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Each phase balances mainland governance with island agility. Leaders track progress while the field experiences dependable payouts.
            </p>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="absolute inset-y-0 left-[12.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[62.5%] hidden w-px bg-gradient-to-b from-sky-500/40 via-transparent to-transparent lg:block" aria-hidden />
            {[
              {
                title: "Assessment & policy sync",
                detail: "Workshops align US regulatory expectations, island operations, and distributor personas.",
                icon: ShieldCheck
              },
              {
                title: "Connector build",
                detail: "Banking APIs, SFTP routines, and PSP contracts activate with 24/7 monitoring.",
                icon: Network
              },
              {
                title: "Go-live wave",
                detail: "Pilot cohorts launch with SMS alerts, offline buffers, and success dashboards.",
                icon: Megaphone
              },
              {
                title: "Scale & optimise",
                detail: "Automate reporting, expand mainland partnerships, and nurture distributor advocacy.",
                icon: Compass
              }
            ].map((phase) => (
              <article
                key={phase.title}
                className="rounded-3xl border border-sky-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <phase.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Safeguards that keep trust high from Pago Pago to the mainland
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            With Cloud MLM Software, compliance, telemetry, and customer care stay tightly woven—no matter where your distributors operate.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-sky-200/70 bg-white/80 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <pillar.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-sky-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.35),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">American Samoa compliance kit</h3>
          <p className="mt-3 text-sm text-slate-200">
            FDIC, FinCEN, and territorial policy templates arrive ready for legal review, complete with crisis comms scripts and audit artefacts.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Artefacts</dt>
              <dd className="mt-2 leading-6 text-slate-100">
                ACH checklists, OFAC monitoring workflows, bilingual distributor disclosures, and outage response guides.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Refresh cadence</dt>
              <dd className="mt-2 leading-6 text-slate-100">Quarterly, plus real-time alerts when federal guidance updates.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-sky-800 hover:bg-sky-100">
            <Link href={pricingHref}>
              Review licensing bundles
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Leaders across finance, compliance, and field operations want predictable answers. Here are the most common.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-sky-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-sky-200/70 bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 px-6 py-16 text-white shadow-lg dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Anchor your American Samoa payment operations with confidence
          </h2>
          <p className="text-base text-sky-50/90">
            Cloud MLM Software connects island logistics with mainland compliance, delivering transparent commission journeys that withstand every tide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your rollout
                <ArrowUpRight className="h-4 w-4 text-sky-600" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              <Link href={demoHref}>Request a guided tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
