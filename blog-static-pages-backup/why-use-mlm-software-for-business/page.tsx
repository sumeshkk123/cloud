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
  ActivitySquare,
  ArrowRight,
  Award,
  BarChart4,
  Binary,
  ClipboardList,
  Coins,
  FileSpreadsheet,
  Globe,
  Inbox,
  NotebookPen,
  PieChart,
  Settings,
  Users
} from "lucide-react";
import {
  CirclesThreePlus,
  GearSix,
  Handshake,
  Lightning,
  ListNumbers
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type CapabilityCluster = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  items: string[];
};

const INTRO_PARAGRAPHS = [
  "Modern MLM leaders run their organizations from a browser — onboarding distributors, monitoring sales, and coaching teams wherever they are in the world.",
  "Dedicated MLM software transforms administrative complexity into a smooth digital workflow. It gives decision-makers a live snapshot of performance and the controls needed to steer growth with confidence."
];

const DIGITAL_ADVANTAGES = [
  "Online-first administration unlocks global reach without expensive physical infrastructure.",
  "Centralized dashboards help teams respond instantly to member activity, compensation changes, and market shifts.",
  "Automation reduces manual tasks so leaders can focus on strategic expansion and member satisfaction."
];

const CAPABILITY_CLUSTERS: CapabilityCluster[] = [
  {
    title: "Real-time command center",
    description:
      "Monitor the pulse of your organization with live metrics, historical context, and immediate visibility into new activity.",
    icon: ActivitySquare,
    items: [
      "See total members, wallet balances, messages, and server status from a single screen.",
      "Drill into analytics dashboards that surface trends in graphs or list views.",
      "Spot recent joiners instantly to trigger onboarding and recognition workflows.",
      "Review logged actions from the admin account to maintain governance."
    ]
  },
  {
    title: "Network structure intelligence",
    description:
      "Visualize every leg of your organization to support leadership development and transparent recognition.",
    icon: Users,
    items: [
      "Browse distributors through dynamic genealogy trees.",
      "Open detailed profiles directly from the tree to understand volume and sponsorship.",
      "Manage member records, assignments, and statuses without leaving the grid.",
      "Celebrate achievement with rank reports and leaderboards."
    ]
  },
  {
    title: "Financial governance & payouts",
    description:
      "Protect revenue streams and ensure every commission cycle runs on time with full auditability.",
    icon: Coins,
    items: [
      "Approve payout requests with confidence using supporting transaction data.",
      "Manage e-wallet balances, transfers, and settlements in one place.",
      "Adjust commission structures and rank thresholds as strategies evolve.",
      "Execute payouts while keeping e-wallet and bank reconciliation reports aligned."
    ]
  },
  {
    title: "Growth & merchandising operations",
    description:
      "Launch promotions, optimize compensation, and track campaign impact without custom development.",
    icon: BarChart4,
    items: [
      "Review compensation plans and point allocations to keep incentives aligned.",
      "Issue and track vouchers that power product launches and loyalty programs.",
      "Analyze joining reports to measure recruitment momentum.",
      "Access and update feature configurations as business priorities change."
    ]
  },
  {
    title: "Communication & personalization",
    description:
      "Keep every stakeholder informed with contextual messaging and profile management.",
    icon: Inbox,
    items: [
      "Send and manage emails directly from an integrated mailbox.",
      "Update administrator profiles to reflect evolving responsibilities and approvals."
    ]
  }
];

const EXPANSION_CALLOUTS = [
  {
    title: "Web-native control",
    description:
      "Manage your organization from any browser — perfect for distributed teams who need access on the move.",
    icon: Globe
  },
  {
    title: "E-commerce ready",
    description:
      "Connect with storefronts, CMS platforms, and subscription flows so products, promotions, and rewards stay perfectly synchronized.",
    icon: Handshake
  },
  {
    title: "Customizable for every brand",
    description:
      "Tailor layouts, compensation logic, and user experiences to reflect your unique business model without reinventing the platform.",
    icon: Settings
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Why Use MLM Software for Business?";
  const description =
    "Explore the 20 capabilities MLM administrators unlock with dedicated software — from real-time insights to payout automation and integrated communications.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/why-use-mlm-software-for-business", locale)
    },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/blog/why-use-mlm-software-for-business", locale)
    }
  };
}

export default function Page({ params }: { params: { lang: SupportedLocale } }) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-indigo-600 to-slate-900 opacity-95" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-white sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-100">
                <Lightning className="h-4 w-4" aria-hidden />
                Admin excellence
              </span>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                20 admin capabilities unlocked by modern MLM software
              </h1>
              <div className="space-y-4 text-base leading-7 text-white/90">
                {INTRO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <h2 className="text-lg font-semibold">Why digital-first administration wins</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/85">
                  {DIGITAL_ADVANTAGES.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>
                  <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                    See the admin console
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                </Link>
                <Link
                  href={buildLocalizedPath("/docs", locale)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
                >
                  Browse documentation
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <ListNumbers className="h-6 w-6 text-white" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Command checklist</p>
                    <p className="text-xs text-white/70">Stay ahead of every metric</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/80">
                  Live dashboards, historical insights, and quick actions keep senior leaders grounded in the data while empowering them to respond instantly.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-white" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Member recognition</p>
                    <p className="text-xs text-white/70">Celebrate achievements faster</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/80">
                  Rank reports and genealogy snapshots highlight rising leaders so you can coach, reward, and retain top performers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase text-slate-900 shadow-sm dark:bg-slate-100 dark:text-slate-900">
            <CirclesThreePlus className="h-3.5 w-3.5" aria-hidden />
            Administrator toolkit
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Organize every process from a single control plane</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            The original article listed 20 distinct responsibilities. We’ve organized them into clusters that accelerate how admins plan, execute, and scale.
          </p>
        </div>
        <div className="grid gap-8">
          {CAPABILITY_CLUSTERS.map(({ title, description, icon: Icon, items }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-500/20">
                  <Icon className="h-6 w-6 text-indigo-700 dark:text-indigo-200" aria-hidden />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300 md:grid-cols-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-200">
              <Binary className="h-3.5 w-3.5" aria-hidden />
              Analytics & execution
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">From insights to action — all within your platform</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
              Administrators build trust by pairing accurate data with proactive communication. These workflows mirror the conclusion of the original article.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-6 w-6 text-slate-900 dark:text-white" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Insight-driven leadership</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Run granular reports on joinings, payouts, and team performance. Schedule them for leadership reviews, or export for board-ready presentations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <PieChart className="h-6 w-6 text-slate-900 dark:text-white" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Compensation evolution</h3>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Update commission, rank, and incentive rules whenever you launch new products or entry programs — all while preserving historical accuracy.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-indigo-200 bg-indigo-50/80 p-6 shadow-sm dark:border-indigo-500/20 dark:bg-indigo-500/10">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="h-6 w-6 text-indigo-900 dark:text-indigo-100" aria-hidden />
                  <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">Integrated e-commerce</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-indigo-900/80 dark:text-indigo-100/80">
                  Synchronize orders with your CMS or online store so every sale updates inventory, commissions, and customer profiles in real time.
                </p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm dark:border-emerald-500/20 dark:bg-emerald-500/10">
                <div className="flex items-center gap-3">
                  <NotebookPen className="h-6 w-6 text-emerald-700 dark:text-emerald-200" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tailored playbooks</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">
                  Use configurable templates to build onboarding sequences, recognition campaigns, and localized promotions without writing code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase text-white dark:bg-slate-100 dark:text-slate-900">
                <GearSix className="h-3.5 w-3.5" aria-hidden />
                Built for scale
              </span>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why Cloud MLM Software stands out</h2>
              <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                Powered by modern technologies and thoughtful UX, Cloud MLM Software combines automation with support so your team can focus on strategy — echoing the assurance from the original conclusion.
              </p>
            </div>
            <div className="grid gap-4 text-sm leading-6 text-slate-600 dark:text-slate-300 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-600 dark:bg-slate-900/60">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">24/7 technical support</h3>
                <p className="mt-2">
                  Resolve issues before they impact members with proactive monitoring and rapid response from our expert team.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-600 dark:bg-slate-900/60">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Modular integrations</h3>
                <p className="mt-2">
                  Connect payment processors, learning tools, analytics stacks, and marketing automation platforms without custom coding.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-600 dark:bg-slate-900/60">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Secure infrastructure</h3>
                <p className="mt-2">
                  Encryption, backups, and compliance controls keep sensitive financial and personal data protected wherever you operate.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-600 dark:bg-slate-900/60">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Customization without complexity</h3>
                <p className="mt-2">
                  Configure compensation, branding, and workflows using guided interfaces — no heavy development cycles required.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-dashed border-slate-300 p-6 text-sm leading-6 text-slate-600 dark:border-slate-600 dark:text-slate-300">
            <span>
              There are even more possibilities: integrate with your CMS, extend APIs, and scale with confidence as your community grows.
            </span>
            <Link href={buildLocalizedPath("/contact-us", locale)}>
              <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                Plan your migration
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white dark:bg-slate-950">
        <div className="container space-y-10">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold">Ready to modernize your MLM administration?</h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Cloud MLM Software provides a powerful, customizable platform that unifies data, automates payouts, and keeps your network engaged.
            </p>
            <Link
              href={buildLocalizedPath("/free-mlm-software-demo", locale)}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-emerald-200"
            >
              Request a guided tour
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">About the author</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Experienced Research Analyst</h3>
            </div>
            <p className="flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
