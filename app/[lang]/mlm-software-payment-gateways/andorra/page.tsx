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
  Euro,
  Globe2,
  LineChart,
  Mountain,
  ShieldCheck
} from "lucide-react";
import {
  Bank,
  Buildings,
  Handshake,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Program = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  step: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  detail: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const INSIGHTS: Insight[] = [
  {
    label: "Settlement clarity",
    value: "Same-day EUR",
    detail: "Coordinate payouts with Andorran banking partners and EU clearing nodes.",
    icon: Euro
  },
  {
    label: "Gateway coverage",
    value: "9 adapters",
    detail: "Support BPA, Andbank, Crèdit Andorrà, and cross-border acquirers.",
    icon: Bank
  },
  {
    label: "Cross-border reach",
    value: "ES & FR",
    detail: "Optimise sales routes into Spain and France while keeping governance in Andorra.",
    icon: Globe2
  }
];

const PROGRAMS: Program[] = [
  {
    title: "Andorra banking hub",
    summary: "Automate commission cycles with leading Andorran banks and cooperative partners.",
    bullets: [
      "ISO 20022 files and SWIFT messaging with dual approvals",
      "Euro liquidity dashboards with tax residency tracking",
      "Automated reconciliation aligned with Andorran Financial Authority reporting"
    ],
    icon: Buildings
  },
  {
    title: "Tourism & retail accelerators",
    summary: "Equip duty-free outlets and seasonal pop-ups with seamless card and digital wallet acceptance.",
    bullets: [
      "Tokenised payouts for in-store and ecommerce channels",
      "Dynamic FX and VAT handling for cross-border shoppers",
      "Real-time alerts for high-volume seasonal campaigns"
    ],
    icon: LineChart
  },
  {
    title: "Franchise & partner orchestration",
    summary: "Support franchises operating across the Pyrenees with unified governance.",
    bullets: [
      "Role-based access for Spanish and French partner branches",
      "Bilingual agreements, invoicing, and support templates",
      "Automated compliance evidence ready for multi-market audits"
    ],
    icon: Handshake
  }
];

const PHASES: Phase[] = [
  {
    step: "Align & architect",
    description: "Workshops map compensation plans, banking partners, and cross-border obligations with your leadership team.",
    icon: Mountain
  },
  {
    step: "Integrate & secure",
    description: "Connector sprints bring banks, PSPs, and analytics live with observability baked in.",
    icon: ShieldCheck
  },
  {
    step: "Launch & learn",
    description: "Pilot cohorts go live with dashboards, bilingual enablement, and success metrics.",
    icon: Euro
  },
  {
    step: "Scale & optimise",
    description: "Extend to new distributors, alliances, and seasonal programmes with automation-backed governance.",
    icon: LineChart
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Regulator alignment",
    detail:
      "Adhere to Andorran Financial Authority requirements, FATF guidance, and EU-aligned AML standards with proactive monitoring.",
    icon: ShieldCheck
  },
  {
    title: "Treasury transparency",
    detail:
      "Display liquidity, FX exposure, and cross-border settlements inside one control tower for finance leaders.",
    icon: LineChart
  },
  {
    title: "Distributor elevation",
    detail:
      "Bilingual communications, concierge support, and community analytics keep your network energised.",
    icon: UsersThree
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can we manage payouts for Spain and France within the same console?",
    answer:
      "Yes. Multi-jurisdiction ledgers let you apply country-specific tax rules while maintaining a single Andorran governance view."
  },
  {
    question: "How do you handle Andorran KYC and AML expectations?",
    answer:
      "Onboarding captures tax residency, proof of address, and sanction checks with versioned evidence for regulator review."
  },
  {
    question: "What support do partnerships and franchises receive?",
    answer:
      "Dedicated success managers provide bilingual playbooks, campaign strategies, and quarterly optimisation clinics."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Andorra MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Modernise Andorra-based MLM payouts. Cloud MLM Software orchestrates banks, tourism retail, and cross-border franchises with compliant euro settlements.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/andorra", locale)
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

type AndorraPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AndorraPaymentGatewaysPage({ params }: AndorraPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-purple-200/70 bg-gradient-to-br from-purple-50 via-white to-amber-50 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(251,191,36,0.25),transparent_60%),radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(168,85,247,0.4),transparent_55%),radial-gradient(circle_at_90%_15%,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-700 dark:border-purple-500/40 dark:bg-slate-900/70 dark:text-purple-200">
                <Mountain className="h-4 w-4" />
                Andorra payment strategy
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Orchestrate euro-centric MLM payouts across Andorra’s alpine economy
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software harmonises Andorran banks, tourism-driven commerce, and cross-border partnerships in one governed platform. Deliver transparent payouts, maintain regulator confidence, and uphold the premium experiences your distributors expect.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-purple-600 text-white hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400">
                  <Link href={contactHref}>
                    Discuss your rollout
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-200 bg-white/80 text-purple-800 hover:bg-purple-50 dark:border-purple-500/30 dark:bg-transparent dark:text-purple-100 dark:hover:bg-purple-500/10"
                >
                  <Link href={demoHref}>See the orchestration demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-purple-200/70 bg-white/85 p-7 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.25),transparent_55%)]" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-500 dark:text-slate-300">
                Executive snapshot
              </p>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-200">
                &quot;We now deliver consistent commissions across retail, tourism, and franchise channels. Finance closes in hours, and compliance conversations are effortless.&quot;
              </p>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">— Cloud MLM Software Andorra growth partner</p>
              <dl className="mt-6 grid gap-5 rounded-2xl border border-purple-200/70 bg-purple-50/60 p-5 text-sm text-slate-700 dark:border-slate-600/50 dark:bg-slate-950/40 dark:text-slate-200">
                {INSIGHTS.map((insight) => (
                  <div key={insight.label}>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-500 dark:text-slate-400">
                      <insight.icon className="h-4 w-4" />
                      {insight.label}
                    </div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <span className="text-2xl font-semibold">{insight.value}</span>
                      <span className="text-xs uppercase tracking-[0.3em] text-purple-400/80 dark:text-slate-400">
                        {insight.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </dl>
              <Button asChild size="sm" variant="outline" className="mt-6 border-purple-200 text-purple-700 hover:bg-purple-100 dark:border-purple-500/40 dark:text-purple-200 dark:hover:bg-purple-500/10">
                <Link href={pricingHref}>
                  Explore deployment bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway programmes crafted for Andorra’s premium marketplace
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Cloud MLM Software has already supported Andorran innovators. Select the programmes that match your hybrid retail and cross-border ambitions.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.title}
              className="relative flex h-full flex-col gap-5 rounded-3xl border border-purple-200/70 bg-gradient-to-br from-white via-white to-purple-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-purple-200 via-transparent to-amber-200 opacity-0 transition-opacity duration-500 hover:opacity-100 dark:from-purple-500/20 dark:to-amber-500/20" aria-hidden />
              <program.icon className="h-8 w-8 text-purple-600 dark:text-purple-300" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{program.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{program.summary}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {program.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-purple-200/70 bg-purple-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Implementation cadence grounded in governance and speed
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Each phase ships with artefacts, analytics, and bilingual enablement so stakeholders stay aligned from Day 1.
            </p>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-4">
            <div className="absolute inset-y-0 left-[12.5%] hidden w-px bg-gradient-to-b from-purple-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-gradient-to-b from-purple-500/40 via-transparent to-transparent lg:block" aria-hidden />
            <div className="absolute inset-y-0 left-[62.5%] hidden w-px bg-gradient-to-b from-purple-500/40 via-transparent to-transparent lg:block" aria-hidden />
            {PHASES.map((phase) => (
              <article
                key={phase.step}
                className="rounded-3xl border border-purple-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <phase.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{phase.step}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Safeguards that keep Andorran standards elevated
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Cloud MLM Software brings together compliance rigor, treasury visibility, and concierge-level distributor care.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-purple-200/70 bg-white/80 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <pillar.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-purple-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.35),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Andorra compliance dossier</h3>
          <p className="mt-3 text-sm text-slate-200">
            Receive AML matrices, tax residency checklists, and regulator briefing templates ready for legal review.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Artefacts</dt>
              <dd className="mt-2 leading-6 text-slate-100">
                PSD2 playbooks, sanction screening scripts, bilingual distributor disclosures, and tourism campaign compliance guides.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Refresh cadence</dt>
              <dd className="mt-2 leading-6 text-slate-100">Quarterly, and immediately whenever Andorran regulators publish new updates.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-purple-800 hover:bg-purple-100">
            <Link href={pricingHref}>
              Review licensing options
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Leaders often ask about cross-border oversight, AML expectations, and distributor enablement. Here are the answers.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-purple-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-purple-200/70 bg-gradient-to-br from-purple-600 via-purple-500 to-amber-400 px-6 py-16 text-white shadow-lg dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Elevate every euro of your Andorra MLM payouts
          </h2>
          <p className="text-base text-purple-50/90">
            Cloud MLM Software unites banking relationships, tourism-driven commerce, and cross-border partnerships so you operate with clarity and confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-purple-700 hover:bg-purple-100">
              <Link href={contactHref}>
                Start your deployment
                <ArrowUpRight className="h-4 w-4 text-purple-600" aria-hidden />
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
