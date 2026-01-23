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
  CellSignalFull,
  ChartLineUp,
  ChatsCircle,
  CurrencyCircleDollar,
  DeviceMobile,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapTrifold,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  actions: string[];
  icon: IconType;
};

type RolloutStep = {
  step: string;
  focus: string;
  outcome: string;
  icon: IconType;
};

type CountryPanel = {
  country: string;
  focus: string;
  leadership: string;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "Mobile-first conversions",
    value: "+28% uplift",
    detail: "When Airtel Money flows replace manual bank transfers for enrolment and renewals.",
    icon: DeviceMobile
  },
  {
    label: "Cash-in visibility",
    value: "Realtime ledgers",
    detail: "Wallet, commission, and payout data reconcile instantly inside Cloud MLM Software.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Regulatory resilience",
    value: "Audit-ready trails",
    detail: "AML, KYC, and tax reporting keep local authorities and corporate boards aligned.",
    icon: ShieldCheck
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Mobile-native journey design",
    description:
      "We evolve the archived modules—multi-currency, ticketing, e-wallets—into a mobile-first enrolment and payout experience.",
    actions: [
      "Progressive disclosure clarifies fees, limits, and exchange rates before confirmation.",
      "Offline-friendly fallback flows keep rural distributors transacting with confidence.",
      "Conversational AI coaches the field through troubleshooting in their local dialects."
    ],
    icon: DeviceMobile
  },
  {
    title: "Governance & compliance architecture",
    description:
      "Airtel Money requires precise partner oversight. Cloud MLM Software anchors internal and regulatory expectations.",
    actions: [
      "Ledger controls sync with treasury, tax, and finance policies per country.",
      "KYC document routing integrates with ticketing for swift approvals and renewals.",
      "Intelligence dashboards narrate compliance status for executives and auditors."
    ],
    icon: ShieldCheck
  },
  {
    title: "Growth intelligence network",
    description:
      "Thought leadership is part of our DNA. We transform Airtel Money data into corporate storytelling and decisioning fuel.",
    actions: [
      "Sentiment and adoption trends inform product roadmaps and market entry plans.",
      "AI distils field feedback into ready-to-publish insights for blogs and analysts.",
      "Partner-ready scorecards highlight social impact and inclusion KPIs."
    ],
    icon: ChartLineUp
  }
];

const ROLLOUT_STEPS: RolloutStep[] = [
  {
    step: "01",
    focus: "Signal translation",
    outcome:
      "Review WordPress-era copy and surface the promises—speed, access, reliability—that matter to modern Airtel Money stakeholders.",
    icon: Broadcast
  },
  {
    step: "02",
    focus: "Integration fabric",
    outcome:
      "Implement API, webhook, and reconciliation flows between Airtel Money and Cloud MLM Software with intelligent retries.",
    icon: Lightning
  },
  {
    step: "03",
    focus: "Enablement & comms",
    outcome:
      "Equip revenue, support, and compliance teams with playbooks, scripts, and AI copilots tailored to mobile money nuances.",
    icon: ChatsCircle
  },
  {
    step: "04",
    focus: "Expansion & iteration",
    outcome:
      "Run experiments on promotions, onboarding, and loyalty programmes while monitoring risk and customer experience signals.",
    icon: ChartLineUp
  }
];

const COUNTRY_PANELS: CountryPanel[] = [
  {
    country: "Kenya",
    focus: "High-volume distributor payouts with instant wallet-to-wallet transfers.",
    leadership:
      "Analytics benchmark Airtel Money vs. M-Pesa usage, giving revenue leaders clear guidance on messaging."
  },
  {
    country: "Uganda",
    focus: "Localized compliance workflows for new agent onboarding and commission settlements.",
    leadership:
      "Ticketing ties into finance approvals so every AML check is auditable and fast for senior stakeholders."
  },
  {
    country: "Nigeria",
    focus: "Cross-border remittances and FX-ready ledgers for regional growth teams.",
    leadership:
      "AI highlights liquidity gaps and suggests treasury actions before they impact customer trust."
  },
  {
    country: "Tanzania",
    focus: "Hybrid online/offline journeys and agent float monitoring.",
    leadership:
      "Geo-intelligence surfaces underserved regions and informs expansion plans for the board."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Airtel Money Gateway for Cloud MLM Software";
  const description =
    "Launch a mobile-first Airtel Money experience inside Cloud MLM Software with AI governance, regional storytelling, and resilient integrations.";

  return {
    title,
    description,
    keywords: [
      "Airtel Money payment gateway",
      "mobile money MLM software",
      "Cloud MLM Software Airtel integration",
      "AI payment governance",
      "direct selling mobile payments"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/airtel-money", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AirtelMoneyPageProps = {
  params: { lang: SupportedLocale };
};

export default function AirtelMoneyPage({ params }: AirtelMoneyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-amber-50 to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(250,204,21,0.18),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(52,211,153,0.18),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(16,185,129,0.16),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Airtel Money transformation
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Build a mobile money engine that scales with your network marketing vision.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software reimagines the archived WordPress narrative into a mobile-first Airtel Money story. We
              orchestrate integrations, compliance, and AI-guided enablement so distributors and customers transact with
              confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule strategy call
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  View mobile money demo
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-2xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-amber-300/25 via-emerald-300/20 to-lime-300/20 dark:from-amber-300/20 dark:via-emerald-400/20 dark:to-lime-400/20" />
            </div>
            <div className="relative grid gap-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-white/10">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article
                    key={stat.label}
                    className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-white/80 p-4 shadow-sm dark:border-white/20 dark:bg-white/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        {stat.label}
                      </p>
                      <p className="text-xl font-semibold text-foreground dark:text-white">{stat.value}</p>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/70">{stat.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-14">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Strategic pillars for Airtel Money excellence
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Each pillar draws from the original modules list and elevates it into a modern AI-ready contactless payment
            narrative.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-x-6 top-5 h-24 rounded-3xl bg-gradient-to-br from-amber-200/25 via-emerald-200/20 to-lime-200/20 opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.description}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {pillar.actions.map((action) => (
                      <li key={action} className="flex gap-3">
                        <ArrowSquareOut className="mt-1 h-4 w-4 text-primary dark:text-emerald-200" aria-hidden />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-white via-amber-50 to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 via-transparent to-transparent dark:from-white/10" />
        <div className="container space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
                Rollout choreography from discovery to scale
              </h2>
              <p className="text-base text-muted-foreground dark:text-white/80">
                The archived content promised modules, plans, and services. We honour that legacy while activating modern
                AI assistance and governance.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href={modulesHref}>
                Review supporting modules
                <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ROLLOUT_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.step}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/70">
                        Step {step.step}
                      </p>
                      <p className="text-sm font-semibold text-foreground dark:text-white">{step.focus}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{step.outcome}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl dark:text-white">
            Country-by-country leadership lens
          </h2>
          <p className="text-base text-muted-foreground dark:text-white/80">
            Airtel Money thrives across Africa and beyond. We package insights so executives, compliance, and field teams
            steer with confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COUNTRY_PANELS.map((panel) => (
            <article
              key={panel.country}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary dark:text-emerald-200">
                {panel.country}
              </p>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground dark:text-white">Strategic focus</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{panel.focus}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground dark:text-white">Leadership narrative</h4>
                <p className="text-sm text-muted-foreground dark:text-white/70">{panel.leadership}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-amber-200/40 via-emerald-200/30 to-lime-200/30 px-6 py-16 shadow-xl dark:border-white/15 dark:from-amber-300/20 dark:via-emerald-400/20 dark:to-lime-400/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.45),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 dark:text-white/80">
              Intelligence & communications
            </p>
            <h2 className="text-3xl font-semibold text-primary-foreground dark:text-white">
              Keep humans and AI copilots aligned on Airtel Money growth.
            </h2>
            <p className="max-w-lg text-base text-primary-foreground/80 dark:text-white/80">
              We convert operational signals into narratives that power leadership briefings, AI chat answers, and field
              enablement micro-content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary">
                <Link href={contactHref}>
                  Launch implementation
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 text-primary-foreground hover:bg-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Explore live workflows
                  <ArrowSquareOut className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <GlobeHemisphereEast className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Regional command centre</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Dashboards stitch together market adoption, liquidity, and sentiment into concise executive briefings.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <Handshake className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Partner-ready storytelling</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Transform performance highlights into PR angles, analyst briefings, and field recognition moments.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <CellSignalFull className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Signal-to-action loops</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                AI agents escalate anomalies from network outages to fraud signals with recommended next steps.
              </p>
            </article>
            <article className="flex flex-col gap-4 rounded-2xl border border-primary/30 bg-white/85 p-6 text-primary-foreground shadow-sm backdrop-blur dark:border-white/30 dark:bg-white/10 dark:text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <MapTrifold className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold">Expansion mapping</h3>
              <p className="text-sm text-primary-foreground/80 dark:text-white/80">
                Geo-intelligence pairs distribution density with Airtel coverage, guiding board-approved investments.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
