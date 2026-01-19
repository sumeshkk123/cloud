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
  BadgeCheck,
  BarChart3,
  ClipboardList,
  Clock3,
  Compass,
  Database,
  FileSpreadsheet,
  GaugeCircle,
  Layers,
  MapPin,
  Package,
  PiggyBank,
  Sparkles,
  Users
} from "lucide-react";
import {
  ChartLineUp,
  Faders,
  GlobeHemisphereEast,
  Lightning,
  ListChecks,
  RocketLaunch
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type FeatureHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type ReportCard = {
  title: string;
  description: string;
  icon: IconType;
};

type UseCase = {
  title: string;
  description: string;
  icon: IconType;
};

type ReportType = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "Refresh cadence",
    value: "Hourly sync",
    description:
      "Account and finance updates are reflected almost immediately so every leader works with the latest numbers.",
    icon: Clock3
  },
  {
    label: "Build time",
    value: "Minutes, not days",
    description:
      "Template-driven filters transform spreadsheet-heavy reporting into fast, repeatable intelligence.",
    icon: Lightning
  },
  {
    label: "Operational focus",
    value: "Revenue to tax clarity",
    description:
      "Track settlements, coupons, payment gateways, and top billing countries within one consolidated workspace.",
    icon: GaugeCircle
  }
];

const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  {
    title: "Total summary intelligence",
    description:
      "Review daily settlements, total income, shipping, tax, and order status without hopping between systems.",
    icon: BarChart3
  },
  {
    title: "Market and product leaders",
    description:
      "Spot top billing countries, recent orders, and high-performing product lines to steer merchandising decisions.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Client and coupon clarity",
    description:
      "Surface your preeminent clients, coupon performance, and preferred payment channels in seconds.",
    icon: ListChecks
  },
  {
    title: "Self-service discovery",
    description:
      "Leverage guided search and saved filters so teams can always find the report they need on demand.",
    icon: Faders
  }
];

const REPORT_LIBRARY: ReportCard[] = [
  {
    title: "Payout reports",
    description: "Monitor commission cycles, holdbacks, and release timing for every compensation plan run.",
    icon: PiggyBank
  },
  {
    title: "Pin details report",
    description: "Audit activation codes, status changes, and ownership to secure distributor onboarding.",
    icon: BadgeCheck
  },
  {
    title: "Package reports",
    description: "Track package mix, volume, and profitability to optimise product bundles at scale.",
    icon: Package
  },
  {
    title: "Joining reports",
    description: "Follow enrolment velocity, sponsor performance, and regional growth in real time.",
    icon: Users
  },
  {
    title: "Single statement report",
    description: "Consolidate distributor earnings, adjustments, and taxes into one export-ready statement.",
    icon: FileSpreadsheet
  },
  {
    title: "User address reports",
    description: "Keep logistics clean with up-to-date shipping and contact data for every participant.",
    icon: MapPin
  },
  {
    title: "Income-wise statement details",
    description: "Drill into bonus types, rank payouts, and historical earnings across any time range.",
    icon: Database
  },
  {
    title: "Dynamic reports",
    description: "Blend KPIs, save custom views, and share tailored dashboards with leadership instantly.",
    icon: Sparkles
  },
  {
    title: "Fund reports",
    description: "Oversee wallet balances, reimbursements, and fund transfers with complete transparency.",
    icon: ClipboardList
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Intuitive enterprise interface",
    description:
      "Our proprietary workspace keeps filters, drill downs, and summaries exactly where analysts expect them—no long onboarding curve.",
    icon: Layers
  },
  {
    title: "Audit-ready visibility",
    description:
      "Marry VAT workflows with real-time reporting so compliance teams can document every automation step in a click.",
    icon: Compass
  },
  {
    title: "Shared single source of truth",
    description:
      "Hourly refreshes align relationship managers, finance controllers, and field leaders around trustworthy numbers.",
    icon: Database
  }
];

const REPORT_TYPES: ReportType[] = [
  {
    title: "Pipeline reports",
    description: "Combine financial, recruitment, and profit/loss pipelines to forecast momentum across regions.",
    icon: ChartLineUp
  },
  {
    title: "Management reports",
    description:
      "Daily through annual snapshots covering prospects, live clients, achievements, and department productivity.",
    icon: ClipboardList
  },
  {
    title: "Dashboard reports",
    description:
      "Interactive dashboards with itemised, summary, and graphical views that power executive meetings.",
    icon: BarChart3
  },
  {
    title: "Multiple outputs",
    description: "Export exactly how stakeholders need it—preview, Excel, CSV, HTML, XML, or SYLK in a click.",
    icon: FileSpreadsheet
  },
  {
    title: "Fast report engine",
    description: "Spin up new templates in minutes so teams can answer urgent questions without development queues.",
    icon: RocketLaunch
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Advanced Reporting System";
  const description =
    "Unlock real-time MLM business intelligence with Cloud MLM Software’s advanced reporting—custom filters, rapid exports, and executive-ready dashboards.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/advanced-reporting-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AdvancedReportingSystemPageProps = {
  params: { lang: SupportedLocale };
};

export default function AdvancedReportingSystemPage({ params }: AdvancedReportingSystemPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_78%_12%,rgba(129,140,248,0.25),transparent_52%),radial-gradient(circle_at_52%_88%,rgba(14,116,144,0.2),transparent_50%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.5fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-200">
              <Database className="h-4 w-4" aria-hidden />
              Executive intelligence hub
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Advanced reporting system purpose-built for modern MLM operations.
              </h1>
              <p className="text-base text-slate-200/85">
                Replace ad-hoc spreadsheets with a reporting engine that surfaces revenue, taxation, shipping, and product performance in one secure command centre. Drill into top billing countries, coupon usage, and gateway preference without leaving the dashboard.
              </p>
              <p className="text-sm text-slate-200/70">
                Configure custom parameters by geography, product line, compensation plan, or payout logic. Save the view, export it, and give every stakeholder the clarity they need in minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Discuss reporting requirements
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-200/60 text-cyan-100 hover:bg-cyan-400/10">
                <Link href={demoHref}>
                  See the dashboards live
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur">
            {HERO_STATS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">{item.label}</p>
                      <p className="text-lg font-semibold text-slate-100">{item.value}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-200/80">{item.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What leaders spot in the first five minutes</h2>
          <p className="text-sm text-muted-foreground">
            Every card is grounded in live data—summaries, recent orders, high-performing products, and the customers driving momentum.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURE_HIGHLIGHTS.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-900/50">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Report library built for every stakeholder</h2>
            <p className="text-sm text-muted-foreground">
              Choose from ready-to-run templates or customise the layout to match the questions your finance, sales, and compliance teams ask each day.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REPORT_LIBRARY.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why operations teams rely on it</h2>
            <p className="text-sm text-muted-foreground">
              Designed for leaders who need both speed and accountability. The interface blends guided discovery with deep audit trails so everyone stays aligned.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 shadow-sm dark:via-slate-950">
            <div className="space-y-6">
              {USE_CASES.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Five report archetypes that power every decision</h2>
          <p className="text-sm text-muted-foreground">
            Blend structured dashboards with export flexibility. Each archetype maps to the body content you relied on in WordPress—now modernised for Cloud MLM Software.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-2 left-4 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" aria-hidden />
          <div className="space-y-8">
            {REPORT_TYPES.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="relative ml-12 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="absolute left-[-48px] top-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Stage {index + 1}</span>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-indigo-50 p-10 shadow-sm dark:from-primary/10 dark:via-slate-950 dark:to-indigo-950/40">
          <div className="absolute -left-16 -top-12 h-48 w-48 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bring advanced reporting to your leadership huddles</h2>
              <p className="text-sm text-muted-foreground">
                Share the metrics you monitor today—whether it is payout success, shipping accuracy, or coupon impact—and we will configure dashboards that refresh themselves.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Talk with a reporting strategist</h3>
                <p className="text-sm text-muted-foreground">
                  We will map your current exports, match them to Cloud MLM Software, and leave you with a shareable reporting workspace.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Book a working session
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={demoHref}>
                    Request a guided demo
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
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
