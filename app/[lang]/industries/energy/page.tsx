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
  BatteryCharging,
  // ChartSpline, // Removed invalid import
  Factory,
  Gauge,
  Globe2,
  Leaf,
  PanelsTopLeft,
  PlugZap,
  ShieldCheck,
  Signal,
  Target
} from "lucide-react";
import {
  ChartLineUp,
  CirclesThreePlus,
  Recycle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

import { getMetaDetail } from "@/lib/api/meta-details";
import { getIndustryPageTitleKey } from "@/lib/industries-subpage";

export const dynamic = "force-dynamic";

type IconType = ComponentType<{ className?: string }>;

type Impact = {
  value: string;
  label: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

type Initiative = {
  title: string;
  outcomes: string[];
};

const IMPACT_POINTS: Impact[] = [
  {
    value: "12 weeks",
    label: "to activate national rollouts",
    description: "Launch compensation plans, compliance checks, and onboarding for new territories on a unified backbone.",
    icon: Globe2
  },
  {
    value: "+47%",
    label: "increase in partner productivity",
    description: "Give field teams guided journeys, sustainability talking points, and incentive visibility in one place.",
    icon: Target
  },
  {
    value: "99.9%",
    label: "platform uptime",
    description: "Built to steward essential energy networks with redundancy, encryption, and proactive monitoring.",
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Regulatory confidence",
    description: "Provide auditable compensation records, energy-specific disclosures, and automated KYC across regions."
  },
  {
    title: "Sustainable storytelling",
    description: "Equip consultants with ESG data, savings calculators, and e-learning content to translate value credibly."
  },
  {
    title: "Operational resilience",
    description: "Coordinate distributors, installers, and service teams with shared visibility into inventory and service tickets."
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "High-capacity network orchestration",
    description: "Model multi-tier energy partner networks with heat maps, workload visibility, and escalation paths for critical accounts.",
    icon: PanelsTopLeft
  },
  {
    title: "Dynamic compensation studio",
    description: "Design performance plans for residential, commercial, and renewable portfolios with tiered bonuses and sustainability rewards.",
    icon: ChartLineUp
  },
  {
    title: "Sustainability insight hub",
    description: "Capture carbon savings, smart meter data, and green incentives in dashboards that prove programme impact.",
    icon: Leaf
  },
  {
    title: "Installation readiness",
    description: "Automate site surveys, schedule field teams, and monitor fulfilment SLAs for solar, EV, and utility services.",
    icon: Factory
  },
  {
    title: "Resilient payouts",
    description: "Leverage e-wallets, multi-currency support, and compliance workflows to pay distributors accurately and on time.",
    icon: PlugZap
  },
  {
    title: "Partner enablement",
    description: "Deliver micro-learning, certification paths, and launch kits that keep technicians and advisors certification-ready.",
    icon: CirclesThreePlus
  }
];

const INITIATIVES: Initiative[] = [
  {
    title: "Energy growth diagnostics",
    outcomes: [
      "Map your energy portfolio, partner types, and regulatory checkpoints.",
      "Identify quick wins across onboarding, payouts, and compliance reporting."
    ]
  },
  {
    title: "Experience architecture",
    outcomes: [
      "Design customer flows from lead to installation with data capture at every milestone.",
      "Prototype analytics, distributor workspaces, and sustainability dashboards."
    ]
  },
  {
    title: "Automation roll-out",
    outcomes: [
      "Integrate ERP, CRM, payment gateways, and field service tools for real-time transparency.",
      "Apply smart triggers for maintenance reminders, escalations, and partner rewards."
    ]
  },
  {
    title: "Continuous optimisation",
    outcomes: [
      "Benchmark performance against demand forecasts and ESG goals.",
      "Test incentive variants, content journeys, and localisation strategies each quarter."
    ]
  }
];

const FALLBACK_TITLE = "Energy Industry MLM Software";
const FALLBACK_DESCRIPTION =
  "Scale renewable and utility networks with Cloud MLM Software—regulatory-ready compensation, sustainability analytics, and resilient partner enablement.";
const FALLBACK_KEYWORDS = "energy mlm software, renewable energy network marketing, utility direct selling";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const pageKey = getIndustryPageTitleKey("energy");
  const metaData = await getMetaDetail(pageKey, locale);
  const title = metaData?.title ?? FALLBACK_TITLE;
  const description = metaData?.description ?? FALLBACK_DESCRIPTION;
  const keywords = metaData?.keywords ?? FALLBACK_KEYWORDS;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/industries/energy", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EnergyPageProps = {
  params: { lang: SupportedLocale };
};

export default function EnergyPage({ params }: EnergyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-20 dark:border-border/40 dark:from-emerald-950 dark:via-slate-950 dark:to-slate-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.28),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(59,130,246,0.22),transparent_60%),radial-gradient(circle_at_55%_88%,rgba(52,211,153,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Energy transition leadership
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Cloud MLM Software for energy brands powering sustainable networks.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Orchestrate consultants, installers, and advocates with automation that keeps compliance tight, storytelling credible, and customers energised.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build your energy roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Tour the energy demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {IMPACT_POINTS.map((impact) => {
                const Icon = impact.icon;
                return (
                  <article key={impact.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/70 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold text-foreground">{impact.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{impact.label}</p>
                    <p className="text-sm text-muted-foreground">{impact.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/70 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Where leaders focus</p>
            <div className="space-y-5">
              {PILLARS.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                  <h2 className="text-sm font-semibold text-foreground">{pillar.title}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{pillar.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Compare engagement programmes
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities engineered for utility, solar, and clean-tech innovators</h2>
          <p className="text-sm text-muted-foreground">
            Replace spreadsheets and disjointed portals with a platform that keeps revenue teams, installers, and customers connected in real time.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Energy transformation initiatives with measurable outcomes</h2>
            <p className="text-sm text-muted-foreground">
              Our delivery playbooks align commercial, technical, and sustainability teams so every milestone moves the programme forward.
            </p>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/60">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Common launch artefacts</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Territory heat maps, installer capacity forecasts, and regulatory matrices.</li>
                <li>• Partner playbooks with ROI calculators and sustainability narratives.</li>
                <li>• Automated compliance workflows covering licensing, permits, and audits.</li>
              </ul>
            </div>
          </div>
          <div className="space-y-5">
            {INITIATIVES.map((initiative) => (
              <article
                key={initiative.title}
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-transparent" aria-hidden />
                <h3 className="text-lg font-semibold text-foreground">{initiative.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {initiative.outcomes.map((outcome) => (
                    <li key={outcome}>• {outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-10 text-white shadow-xl dark:border-border/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(34,197,94,0.25),transparent_58%),radial-gradient(circle_at_80%_22%,rgba(125,211,252,0.2),transparent_60%)]" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to energise your network?</h2>
              <p className="text-sm text-slate-200">
                Share your product mix, partner structure, and growth targets. We will turn them into a phased Cloud MLM Software blueprint with ROI lenses for leadership.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary">
                  <Link href={contactHref}>
                    Meet an energy strategist
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link href={demoHref}>
                    Preview platform journeys
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/30 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Bring to the workshop</p>
              <ul className="space-y-2">
                <li>• Forecasts by product line and partner tier.</li>
                <li>• Compliance obligations and reporting cadences.</li>
                <li>• Existing tech stack, data sources, and pain points.</li>
              </ul>
              <p className="text-xs text-slate-300">Expect a tailored execution plan and KPI dashboard preview within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
