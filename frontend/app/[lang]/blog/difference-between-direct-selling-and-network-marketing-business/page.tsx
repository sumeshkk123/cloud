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
  Building2,
  Coins,
  Layers3,
  Network,
  ShieldAlert,
  Star,
  Store,
  Users,
  Workflow
} from "lucide-react";
import {
  BalanceScale,
  ChartBar,
  Chats,
  Handshake,
  Magnet,
  Megaphone,
  Rocket,
  Tray
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Channel = {
  name: string;
  detail: string;
  icon: IconType;
};

type ProductInsight = {
  category: string;
  examples: string[];
  icon: IconType;
};

type Comparison = {
  attribute: string;
  directSelling: string;
  networkMarketing: string;
};

type Consideration = {
  title: string;
  points: string[];
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Global direct sales revenue",
    value: "$170B+",
    description: "Estimated worldwide turnover across direct selling organisations in 2023.",
    icon: Store
  },
  {
    label: "Direct sellers worldwide",
    value: "114M",
    description: "Individuals engaged in person-to-person sales across direct selling models.",
    icon: Users
  },
  {
    label: "MLM market share",
    value: "Approx. 74%",
    description: "Portion of the broader direct selling sector that uses multilevel compensation.",
    icon: ChartBar
  }
];

const DIRECT_HIGHLIGHTS: Highlight[] = [
  {
    title: "Direct selling essentials",
    description:
      "Independent representatives sell directly to customers without brick-and-mortar storefronts, often beginning with friends, family, and referrals.",
    icon: Megaphone
  },
  {
    title: "Customer intimacy",
    description:
      "Success centres on personal relationships, one-to-one demonstrations, and prompt service without a formal downline.",
    icon: Handshake
  },
  {
    title: "Rapid go-to-market",
    description:
      "Representatives can start selling immediately using catalogues, online storefronts, or pop-up events with minimal upfront investment.",
    icon: Rocket
  }
];

const NETWORK_HIGHLIGHTS: Highlight[] = [
  {
    title: "Network marketing fundamentals",
    description:
      "Also known as MLM, this model combines direct sales with a structured downline that rewards mentorship and team performance.",
    icon: Network
  },
  {
    title: "Compensation depth",
    description:
      "Income arrives from personal sales plus overrides on downline performance, guided by plan types like binary, matrix, or unilevel.",
    icon: Layers3
  },
  {
    title: "Platform-driven growth",
    description:
      "Automation, replicated sites, and compensation software keep large organisations compliant and motivated across markets.",
    icon: Workflow
  }
];

const DIRECT_CHANNELS: Channel[] = [
  {
    name: "Personal demonstrations",
    detail: "Hands-on showcases help prospects experience products before purchasing, ideal for high-touch categories.",
    icon: Tray
  },
  {
    name: "Home gatherings",
    detail:
      "Social events turn living rooms into showrooms—representatives share stories, host tastings, or run mini workshops.",
    icon: Chats
  },
  {
    name: "Catalog & ecommerce",
    detail:
      "Digital catalogues and micro-sites give customers self-service options while representatives maintain personal support.",
    icon: Store
  }
];

const PRODUCT_INSIGHTS: ProductInsight[] = [
  {
    category: "Direct selling staples",
    examples: [
      "Durables: cookware, home décor, insurance services",
      "Lifestyle goods: cosmetics, personal care, books"
    ],
    icon: Building2
  },
  {
    category: "Network marketing favourites",
    examples: [
      "Consumables: nutritional supplements, wellness shakes",
      "Subscription services: digital education, utility bundles"
    ],
    icon: Magnet
  }
];

const COMPARISON_TABLE: Comparison[] = [
  {
    attribute: "Primary income source",
    directSelling: "Commissions from personal sales activities.",
    networkMarketing: "Personal sales plus downline overrides and bonuses."
  },
  {
    attribute: "Team structure",
    directSelling: "Independent sellers without requirement to recruit.",
    networkMarketing: "Hierarchical networks with mentorship and recruitment responsibilities."
  },
  {
    attribute: "Product focus",
    directSelling: "Higher-ticket durables and one-off purchases.",
    networkMarketing: "Consumables that encourage repeat orders and subscriptions."
  },
  {
    attribute: "Operating costs",
    directSelling: "Inventory and marketing borne by each seller; higher upfront stock costs.",
    networkMarketing: "Lower startup packs; corporate handles fulfilment while members invest in training."
  },
  {
    attribute: "Risk factors",
    directSelling: "Limited training can impact efficiency and relationships.",
    networkMarketing: "Regulatory scrutiny around pyramid schemes; needs transparent governance."
  }
];

const CONSIDERATIONS: Consideration[] = [
  {
    title: "Before launching or joining",
    points: [
      "Review compensation plans for transparency and sustainability.",
      "Confirm product-market fit and brand differentiation.",
      "Assess training, coaching, and technology support."
    ],
    icon: BalanceScale
  },
  {
    title: "Platform due diligence",
    points: [
      "Evaluate legal compliance, data protection, and payment security.",
      "Check platform fees, payout cycles, and supported regions.",
      "Ensure tools cover replicated sites, analytics, and onboarding."
    ],
    icon: ShieldAlert
  },
  {
    title: "Growth mindset",
    points: [
      "Set boundaries so business building respects personal relationships.",
      "Invest in leadership development to keep downlines healthy.",
      "Track KPIs across sales, retention, and customer satisfaction."
    ],
    icon: Coins
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Difference Between Direct Selling and Network Marketing Business";
  const description =
    "Compare direct selling and network marketing models with Cloud MLM Software’s up-to-date guide covering income, structure, products, and compliance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/difference-between-direct-selling-and-network-marketing-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ComparePageProps = {
  params: { lang: SupportedLocale };
};

export default function ComparePage({ params }: ComparePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(129,140,248,0.25),transparent_60%),radial-gradient(circle_at_82%_20%,rgba(244,114,182,0.2),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(56,189,248,0.2),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                Model comparison · Field enablement
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Difference between direct selling and network marketing business
              </h1>
              <p className="text-lg text-slate-700">
                Direct selling and network marketing share roots yet diverge in structure, incentives, and scale. This modernised take on our legacy
                article distils the distinctions so leaders and distributors can choose paths confidently.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
                  <Link href={demoHref}>
                    Compare compensation options
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Talk with strategy experts
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-indigo-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    <metric.icon className="h-5 w-5 text-indigo-500" aria-hidden />
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
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-indigo-500" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900">Direct selling snapshot</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Independent sellers connect products with customers through personalised experiences. The focus stays on service, product education, and
              consistent follow-up.
            </p>
            <div className="mt-6 space-y-4">
              {DIRECT_HIGHLIGHTS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-indigo-500" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Layers3 className="h-8 w-8 text-rose-500" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900">Network marketing snapshot</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              MLM blends direct sales with downline development. Leaders coach new distributors while technology supports replication and compliance.
            </p>
            <div className="mt-6 space-y-4">
              {NETWORK_HIGHLIGHTS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-rose-50/70 p-5">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-rose-500" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-indigo-50 to-rose-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">How sellers reach customers</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Direct sellers rely on intimate channels. Network marketers use similar tactics but scale them with replicated sites and automation.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {DIRECT_CHANNELS.map((channel) => (
                <div key={channel.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <channel.icon className="h-8 w-8 text-indigo-500" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{channel.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{channel.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Product landscape
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">What sells best in each model?</h2>
              <p className="text-sm text-slate-600">
                The original article highlighted product differences. Use this cheat sheet to align offerings with the model that suits them.
              </p>
            </div>
            <div className="grid gap-4">
              {PRODUCT_INSIGHTS.map((insight) => (
                <div key={insight.category} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <insight.icon className="h-6 w-6 text-indigo-500" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{insight.category}</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {insight.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-rose-400" aria-hidden />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-100 via-white to-rose-100 p-10">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-6 font-semibold">Attribute</th>
                  <th className="py-3 pr-6 font-semibold">Direct selling</th>
                  <th className="py-3 font-semibold">Network marketing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARISON_TABLE.map((row) => (
                  <tr key={row.attribute}>
                    <td className="py-4 pr-6 font-semibold text-slate-900">{row.attribute}</td>
                    <td className="py-4 pr-6">{row.directSelling}</td>
                    <td className="py-4">{row.networkMarketing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Decision checklist
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Key considerations before committing</h2>
              <p className="text-sm text-slate-600">
                Aligning with the article’s reminder about costs, regulation, and relationships, evaluate these points before joining or launching a
                programme.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {CONSIDERATIONS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-indigo-500" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-rose-400" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-100 via-white to-rose-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Need help charting the right route?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software equips brands with the technology, playbooks, and governance frameworks to succeed in direct selling or network marketing—across
              every market you enter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
                <Link href={demoHref}>
                  Request a model assessment
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-100">
                <Link href={contactHref}>
                  Speak with consultants
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
