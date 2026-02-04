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
  ArrowRight,
  BarChart3,
  Braces,
  Coins,
  Gauge,
  Inbox,
  Layers,
  LayoutDashboard,
  Mail,
  ShieldCheck,
  Smartphone,
  WalletCards
} from "lucide-react";
import {
  ChartLine,
  Cpu,
  GlobeHemisphereWest,
  Lock,
  Rows,
  Sparkle,
  UsersThree,
  WifiHigh
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type FeatureGroup = {
  title: string;
  description: string;
  icon: IconType;
  items: string[];
};

type Service = {
  title: string;
  detail: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Deployments delivered",
    value: "600+",
    description: "Cloud MLM Software platforms powering compensation, commerce, and compliance worldwide.",
    icon: ChartLine
  },
  {
    label: "Feature release cadence",
    value: "Bi-weekly",
    description: "Continuous updates ship through automated pipelines with zero downtime.",
    icon: Sparkle
  },
  {
    label: "Supported integrations",
    value: "80+",
    description: "Payment gateways, CRMs, ERPs, marketing platforms, and data warehouses connected securely.",
    icon: Cpu
  }
];

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    title: "Command centre dashboards",
    description:
      "Give administrators and field leaders instant visibility into KPIs, payouts, and team activity.",
    icon: LayoutDashboard,
    items: [
      "Customisable widgets for sales, ranks, and volume.",
      "Drill-down analytics to track campaign or leg performance.",
      "Role-based access so every user sees data that matters."
    ]
  },
  {
    title: "Advanced admin controls",
    description:
      "Manage compensation plans, promotions, inventory, and content with precision and audit trails.",
    icon: Layers,
    items: [
      "Adjust commission rules, bonuses, and thresholds in minutes.",
      "Automate promotions, gift packs, and seasonal bundles.",
      "Generate finance-ready reports for payouts and tax filings."
    ]
  },
  {
    title: "Mobile-first back office",
    description:
      "Responsive portals help distributors run their business anywhere with CRM, training, and marketing tools.",
    icon: Smartphone,
    items: [
      "Responsive design that adapts to any device or screen size.",
      "Task lists, reminders, and goal trackers keep momentum high.",
      "Integrated content libraries for presentations, videos, and decks."
    ]
  },
  {
    title: "E-wallet & payouts",
    description:
      "Virtual wallets store commissions securely with instant withdrawals to banks or third-party rails.",
    icon: WalletCards,
    items: [
      "Support multiple currencies with real-time conversion rates.",
      "Transfer funds to Visa, PayPal, or local banking networks.",
      "Automated statements streamline accounting and tax prep."
    ]
  },
  {
    title: "Genealogy & organisation views",
    description:
      "Map entire networks visually to diagnose performance, spot leaders, and understand spillover dynamics.",
    icon: Rows,
    items: [
      "Tree, grid, and heatmap views for every plan type.",
      "Filter by rank, activity, geography, or product mix.",
      "Export structures for planning meetings and compliance checks."
    ]
  },
  {
    title: "Infrastructure resilience",
    description:
      "Your data stays safe and accessible thanks to automated backups, monitoring, and encryption.",
    icon: ShieldCheck,
    items: [
      "Encrypted backups replicate to the cloud on configurable schedules.",
      "Real-time alerts for uptime, latency, and security anomalies.",
      "Fine-grained permissions protect sensitive personal and financial data."
    ]
  }
];

const SERVICES: Service[] = [
  {
    title: "Multilingual, multi-currency operations",
    detail:
      "Engage distributors worldwide with interfaces and payouts translated into local languages and currencies.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Bonus & incentive engine",
    detail:
      "Configure generation, pool, retail, lifestyle, and fast-start bonuses inside the same ruleset—no coding required.",
    icon: Coins
  },
  {
    title: "Replicating websites & social tools",
    detail:
      "Equip every distributor with personalised microsites, shareable links, and integrated social sharing.",
    icon: WifiHigh
  },
  {
    title: "Marketing & communications",
    detail:
      "Compose newsletters, trigger SMS alerts, and run nurture flows without touching HTML or external systems.",
    icon: Mail
  },
  {
    title: "Order, volume & inventory management",
    detail:
      "Track PV/GV, group purchases, stock levels, and fulfilment workflows from one interface.",
    icon: Gauge
  },
  {
    title: "Security & compliance",
    detail:
      "Single sign-on, activity logs, and audit-ready exports keep regulators and enterprise IT teams confident.",
    icon: Lock
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Features and Services of MLM Software";
  const description =
    "Tour the dashboards, e-wallets, genealogy tools, and integrations that make Cloud MLM Software the operating system for modern network marketing.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/features-and-services-of-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FeaturesPageProps = {
  params: { lang: SupportedLocale };
};

export default function FeaturesPage({ params }: FeaturesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(15,118,110,0.28),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(8,145,178,0.22),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                Platform architecture · Product tour
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Features and services of MLM software
              </h1>
              <p className="text-lg text-slate-700">
                High-performing network marketing teams rely on modern platforms. Explore the capabilities Cloud MLM Software delivers—from admin control to distributor
                enablement and secure payouts.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-cyan-600 text-white hover:bg-cyan-500">
                  <Link href={demoHref}>
                    Book a feature walkthrough
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Talk to product specialists
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-cyan-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-cyan-600">
                    <metric.icon className="h-5 w-5 text-cyan-500" aria-hidden />
                    {metric.label}
                  </div>
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Your MLM command centre, explained</h2>
          <p className="mt-4 text-lg text-slate-600">
            The legacy article listed essential modules. Here they are, reimagined for cloud-native scale with automation, analytics, and airtight security.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FEATURE_GROUPS.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-100"
            >
              <group.icon className="h-10 w-10 text-cyan-600" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{group.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{group.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Services suite
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Services that extend the platform</h2>
              <p className="text-sm text-slate-600">
                Beyond core features, Cloud MLM Software delivers the services network marketers rely on—from localisation to communications and compliance.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {SERVICES.map((service) => (
                <div key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <service.icon className="h-6 w-6 text-cyan-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{service.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-100 via-white to-slate-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Design the feature stack your teams deserve</h2>
            <p className="text-lg text-slate-600">
              Whether you need replicating sites, SMS alerts, or multi-currency e-wallets, we tailor MLM software to your exact strategy—and keep it evolving with the market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-cyan-600 text-white hover:bg-cyan-500">
                <Link href={demoHref}>
                  Schedule a platform workshop
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-100">
                <Link href={contactHref}>
                  Connect with our architects
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <Link href={pricingHref}>
                  Explore implementation tiers
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
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
