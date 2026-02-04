import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  ClipboardList,
  Database,
  Layers,
  RefreshCw,
  ShieldCheck
} from "lucide-react";
import { CloudArrowUp, GearSix, GlobeHemisphereEast, Notebook, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "MLM software migration is a critical process that requires careful planning and execution to ensure a smooth transition. This process involves several key steps, including data extraction, system compatibility checks, and the secure transfer of member information. By focusing on these areas, businesses can ensure that their network marketing operations continue without interruption while integrating new features and capabilities. The goal is to achieve a seamless integration with the new software, thorough testing, and minimal downtime, providing an efficient upgrade that supports the growth and scalability of your MLM business. Properly managing this migration process is essential to maintaining data integrity, ensuring user satisfaction, and minimizing potential risks associated with system upgrades.",
  "Due to the high interest of people in this business competition in this field becomes tougher day by day. So to overcome this situation companies should implement new technology tools and complete digitization in their business. The business needs MLM software to manage and support the activities for its success. However, if a company goes to its failure as a result of a poor software provider selection, the only way to prevent its failure is the migration to a new technology or service provider. In simple words, migration is a process when you are unhappy with the services of your current technology providers and want to switch to a new provider who specializes in dealing with the MLM business."
];

const IMPORTANCE_PARAGRAPHS = [
  "Before migration, you should analyze the features provided by the new service providers in their software because the success or failure of your company is fully based on it. Any company regardless of whether it is a startup, growing, or developed will face a difficult decision.",
  "According to my findings a company’s decision to migrate is influenced by a variety of factors. The failure of existing MLM software and a lack of response to the company’s development.",
  "There are numerous concerns, such as slow loading speed, data hanging, and lack of control. Because of the outdated technology used in the software. Attempts to protect the database and personal information from hacking become unsuccessful. Communication breakdown between the management and field teams.",
  "Lack of technical support from the side of MLM software service providers . Failure in the data integration. No customizations on the software and not providing any updations. As we’ve already covered migration and its importance, we’ll now discuss the influence of migration on companies, whether it’s favorable or not."
];

const POSITIVE_POINTS = [
  "Perfectly developed software based on the needs and requirements of the organization.",
  "Assist them in assessing their decisions in order to make better judgments in the future.",
  "Provide unlimited customizations and technical Assistance.",
  "Prevents hacking of datas."
];

const NEGATIVE_POINTS = [
  "Any failure in migration results in the failure of the business also..",
  "Sometimes database error occurs"
];

const RISK_PARAGRAPH =
  "Every process has both positive and negative sides but those who are ready to take risks in business become the winners. Work hard and plan well.";

const PROCESS_POINTS = [
  "Evaluate the needs and requirements of the company.",
  "Usage of new technologies by removing old technology.",
  "Helps in assisting the business with proper guidance.",
  "Unlimited customizations with technical support.",
  "Good communication between client side and developer side."
];

const CONCLUSION_PARAGRAPHS = [
  "Successfully migrating MLM software requires a well-structured approach that prioritizes data security, system compatibility, and minimal disruption to your business operations. By following best practices in data extraction, compatibility checks, and secure transfers, businesses can transition smoothly to new software environments while gaining access to enhanced features and functionalities. Thorough testing and careful planning ensure that the migration process not only preserves existing data but also optimizes the system for future growth. As your network marketing business evolves, investing in a strategic MLM software migration process will help you maintain operational continuity, improve performance, and stay competitive in a dynamic market.",
  "The migration process becomes simpler with the excellent support from the new software partner you selected. Cloud MLM Software also provides MLM software migration services with their 24/7 technical team assistance, and if you don’t trust us you could try our free MLM software demo.",
  "If you are running any type of business, not a problem for us we are ready to migrate regardless of whether your existing technology is a SaaS model,customely made, etc. Cloud MLM Software has all the tools for the extraction of data from your old database to the new and we guarantee you that the user will be able to run their business effectively during the migration."
];

const AUTHOR = {
  name: "Experienced Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Processes in MLM Software Migration";
  const description =
    "Understand every step of MLM software migration—from readiness assessments to secure data transfer—so you can upgrade platforms without disrupting growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/processes-in-mlm-software-migration", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MigrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function ProcessesInMlmSoftwareMigrationPage({ params }: MigrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-100 shadow-2xl dark:border-emerald-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_70%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/30 dark:bg-slate-900/70 dark:text-emerald-200">
              <RefreshCw className="h-4 w-4" aria-hidden />
              Migration blueprint
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Navigate MLM software migration without losing momentum
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPHS[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Plan my migration
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-emerald-200 bg-white/80 px-6 py-2 text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Explore free demo</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Why a migration readiness audit matters
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5 dark:border-emerald-500/30 dark:bg-emerald-500/10">
                <Database className="h-6 w-6 text-emerald-700 dark:text-emerald-200" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Preserve every record</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Clean data extraction and mapping keeps genealogy, wallets, and commissions intact.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-sky-100 bg-sky-50/80 p-5 dark:border-sky-500/30 dark:bg-sky-500/10">
                <ShieldCheck className="h-6 w-6 text-sky-700 dark:text-sky-200" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Secure sensitive assets</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Encryption and role-based access protect member information throughout the transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Why migration becomes essential</p>
          <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            <p>{INTRO_PARAGRAPHS[1]}</p>
            {IMPORTANCE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-8 shadow-lg dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-emerald-700 dark:text-emerald-200" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Positive sides</h2>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {POSITIVE_POINTS.map((point) => (
                <li key={point} className="flex gap-3">
                  <Notebook className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-rose-50/70 p-8 shadow-lg dark:border-rose-500/30 dark:bg-rose-500/10">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Negative sides</h2>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {NEGATIVE_POINTS.map((point) => (
                <li key={point} className="flex gap-3">
                  <UsersThree className="mt-1 h-5 w-5 flex-shrink-0 text-rose-600 dark:text-rose-300" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-slate-700 dark:text-slate-200">{RISK_PARAGRAPH}</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-emerald-100/50 p-8 shadow-xl dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <ClipboardList className="h-4 w-4" aria-hidden />
                Migration process checklist
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Structure each migration milestone</h2>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Use this high-level checklist as the foundation for your implementation plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 dark:border-emerald-500/40 dark:bg-emerald-500/10">
                <Layers className="h-4 w-4" aria-hidden />
                Phase-by-phase
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 dark:border-sky-500/40 dark:bg-sky-500/10">
                <CloudArrowUp className="h-4 w-4" aria-hidden />
                Cloud ready
              </span>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {PROCESS_POINTS.map((point, index) => (
              <div
                key={point}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/70 bg-white/90 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">Step {index + 1}</span>
                  <GearSix className="h-5 w-5 text-emerald-500 dark:text-emerald-200" aria-hidden />
                </div>
                <p className="mt-6">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">What the migration unlocks</h2>
          <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            {CONCLUSION_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-8 shadow-xl dark:border-emerald-500/40 dark:from-emerald-900/50 dark:via-slate-900 dark:to-slate-950">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Ready to migrate?</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Schedule a working session with Cloud MLM Software strategists to map timelines, risks, and backup plans.
              </p>
            </div>
            <Button
              asChild
              className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              <Link href={contactHref}>
                Talk to migration experts
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
              Global rollouts
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <UsersThree className="h-4 w-4" aria-hidden />
              Customer insight
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

