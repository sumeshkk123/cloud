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
  BookText,
  Database,
  GaugeCircle,
  Network,
  Shield,
  Signal,
  Users
} from "lucide-react";
import {
  BracketsAngle,
  CirclesFour,
  GitBranch,
  Notepad,
  Target
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type InsightCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type Capability = {
  title: string;
  detail: string;
};

const HERO_PARAGRAPHS = [
  "Multi-level marketing businesses operate as dynamic ecosystems. Sponsors recruit, guide, and motivate their downlines, while corporate teams balance product launches, payouts, and compliance in real time.",
  "Without dedicated software, leaders rely on error-prone spreadsheets and fragmented systems — a risky approach when millions of records, compensation rules, and global communications are at stake."
];

const INTRO_FACTS = [
  "Sponsors fuel growth by expanding networks and keeping momentum high.",
  "Accurate commissions require transparent genealogy tracking and up-to-date membership data.",
  "Automated reporting empowers distributors and corporate leaders to make decisions faster."
];

const DATA_FOUNDATIONS: InsightCard[] = [
  {
    title: "Genealogy intelligence",
    description:
      "MLM software maintains the lineage of every distributor, capturing sponsorship relations, ranks, and volume points across levels that can change daily.",
    icon: GitBranch
  },
  {
    title: "Centralized records",
    description:
      "Product catalogs, customer orders, inventory, and compensation ledgers live inside one structured database so finance and operations share a single source of truth.",
    icon: Database
  },
  {
    title: "Network-wide visibility",
    description:
      "Role-based dashboards ensure sponsors, agents, and headquarters can monitor performance indicators without exposing sensitive data unnecessarily.",
    icon: Signal
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Track compensation with precision",
    detail:
      "Automated engines allocate commissions, bonuses, and incentives according to your business rules, eliminating manual calculations and disputes."
  },
  {
    title: "Scale without data fatigue",
    detail:
      "Robust infrastructure handles millions of records, processing updates instantly as distributors join, rank up, or submit payouts."
  },
  {
    title: "Support every communication channel",
    detail:
      "Integrate email, SMS, and in-app messaging so product updates, compliance reminders, and recognition announcements reach the entire network."
  },
  {
    title: "Keep information flowing both ways",
    detail:
      "Distributors receive real-time insight into their progress while HQ captures market feedback, enabling faster campaign adjustments."
  }
];

const IMPLEMENTATION_GUARDRAILS = [
  "Audit vendor portfolios and previous projects to ensure they can deliver the modules your organization requires.",
  "Validate feature checklists — genealogy viewers, payout automation, multilingual portals, and analytics — before signing off.",
  "Engage an expert MLM consultant to align compensation strategy, onboarding flows, and technology roll-out.",
  "Partner with Cloud MLM Software for proven delivery, deep configuration support, and a trustworthy roadmap."
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Why Should You Utilize MLM Software in Your Business?";
  const description =
    "See how enterprise-grade MLM software centralizes databases, automates compensation, and keeps distributor networks synchronized for sustainable growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/why-should-you-utilize-mlm-software-in-your-business", locale)
    },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath("/blog/why-should-you-utilize-mlm-software-in-your-business", locale)
    }
  };
}

export default function Page({ params }: { params: { lang: SupportedLocale } }) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-700 opacity-95" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-white sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-indigo-100">
                <Network className="h-4 w-4" aria-hidden />
                Intelligent Operations
              </span>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Why your MLM business deserves purpose-built software
              </h1>
              <div className="space-y-4 text-base leading-7 text-indigo-100">
                {HERO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <h2 className="text-lg font-semibold">From sponsors to headquarters — everyone benefits</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-100/90">
                  {INTRO_FACTS.map((fact) => (
                    <li key={fact} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-indigo-100">
                    Experience the platform
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Button>
                </Link>
                <Link
                  href={buildLocalizedPath("/support", locale)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-100 transition hover:text-white"
                >
                  Discover onboarding support
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Field perspective</p>
                    <p className="text-xs text-white/70">How distributors stay aligned</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/80">
                  Sponsors focus on growth, not spreadsheets. They monitor downlines, track advancement, and celebrate milestones using mobile-ready dashboards synced with corporate data.
                </p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <BookText className="h-6 w-6" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white/80">Corporate view</p>
                    <p className="text-xs text-white/70">Consistency at scale</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/80">
                  Leadership teams oversee inventory, commissions, and compliance standards in one command center, confident that records update instantly as the network evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-200">
            <CirclesFour className="h-3.5 w-3.5" aria-hidden />
            Data foundations
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The backbone: databases that understand MLM structures</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            The article highlighted genealogy tracking and robust record keeping. These capabilities form the nerve center of every thriving MLM enterprise.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DATA_FOUNDATIONS.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/60"
            >
              <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-200">
              <Target className="h-3.5 w-3.5" aria-hidden />
              Core mission
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What MLM software is designed to achieve</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
              Beyond basic record keeping, the platform becomes the engine that keeps compensation fair, insights timely, and communication seamless across your organization.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-6 rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm dark:border-emerald-500/20 dark:bg-emerald-500/10">
              {CAPABILITIES.slice(0, 2).map(({ title, detail }) => (
                <div key={title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">{detail}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
              {CAPABILITIES.slice(2).map(({ title, detail }) => (
                <div key={title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{detail}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600 dark:border-slate-600 dark:text-slate-300">
                Cloud MLM Software supplies the infrastructure, onboarding, and ongoing upgrades the article referenced — ensuring your organization stays compliant and ahead of market shifts.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase text-white dark:bg-slate-100 dark:text-slate-900">
            <BracketsAngle className="h-3.5 w-3.5" aria-hidden />
            Implementation guardrails
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to select the right MLM software partner</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            The original post warned against incomplete solutions. Use this checklist to evaluate providers before you invest.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-slate-900 dark:text-white" aria-hidden />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Due diligence essentials</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {IMPLEMENTATION_GUARDRAILS.slice(0, 2).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-indigo-200 bg-indigo-50/80 p-6 shadow-sm dark:border-indigo-500/20 dark:bg-indigo-500/10">
              <div className="flex items-center gap-3">
                <Notepad className="h-6 w-6 text-indigo-900 dark:text-indigo-100" aria-hidden />
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">Expert support makes the difference</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-indigo-900/80 dark:text-indigo-100/80">
                Collaborate with seasoned MLM consultants to configure compensation plans, onboarding journeys, and governance policies before launch.
              </p>
              <Link
                href={buildLocalizedPath("/services/mlm-consulting", locale)}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-900 transition hover:text-indigo-700 dark:text-indigo-100 dark:hover:text-indigo-50"
              >
                Meet our consultants
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-sm dark:border-emerald-500/20 dark:bg-emerald-500/10">
              <div className="flex items-center gap-3">
                <GaugeCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Cloud MLM Software advantage</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-200">
                Cloud MLM Software delivers one of the most effective MLM platforms available — customizable, scalable, and supported by a team that resolves issues before they impact your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white dark:bg-slate-950">
        <div className="container space-y-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold">Turn insight into action</h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Modern MLM software is more than a tool — it is the catalyst that lets your teams innovate quickly while staying compliant and profitable.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm leading-6 text-white/85">
                Cloud MLM Software blends technology, consulting, and 24/7 support so you can focus on strategy, expansion, and empowering distributors.
              </p>
              <Link
                href={buildLocalizedPath("/contact-us", locale)}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-indigo-100"
              >
                Plan your transformation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
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

