import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers3, Shield, UsersRound } from "lucide-react";
import { Drop } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPH =
  "Multi-level marketing, MLM is a business approach in which an individual rewarded by the purchases he/she makes and the purchases his/her new recruits down-line makes. There are various types of New MLM business plans introduced to motivate the members for purchases promotion.";

const WHAT_IS_HEADING = "What is MLM bucket help plan?";

const WHAT_IS_PARAGRAPH =
  "The MLM bucket help plan is the modern simple help plan in the MLM business industry. The name came from the truth that the complete process in this plan is depends on buckets not on levels. The MLM company who need to begin their MLM business with a bucket help plan,the cloud MLM software solutions can introduce a number of buckets as per their plan and also can set their helping criteria and with our software support, you can manage your business 24*7 and be in consistent communication with your down line affiliates.";

const HOW_WORKS_HEADING = "How Cloud MLM Bucket help plan Works?";

const HOW_WORKS_PARAGRAPH =
  "In Cloud MLM bucket help plan when recruits, the new member joins in a bucket in which there are various levels of help and the recruits just help a previous member and get multiple helps from other new members. When the new recruits complete all levels of 1st bucket and get all the helps, he/she needs renewal to allow in the next higher bucket";

const FEATURES_HEADING = "What are the Features of Cloud MLM bucket Help Plan Software?";

const FEATURES_LIST: string[] = [
  "Highly supported and secure to save your time and invested money.",
  "Different Level of admin.",
  "Multiple account management.",
  "Protecting different level of Help Accounts.",
  "Business Management",
  "Transfer Help (Auto and Manual both)",
  "MLM Help",
  "Trouble-free MLM Software"
];

const SUPPORT_PARAGRAPH =
  "Cloud MLM – MLM Software Company develops the fully featured software for MLM bucket help plan and our team of expert engineers and consultants are ready to help you with 24*7 support.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Bucket Help Plan Software";
  const description =
    "Discover how the Cloud MLM bucket help plan operates, the features it delivers, and why modern help-based plans rely on structured buckets instead of levels.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/mlm-bucket-help-plan-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BucketPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function BucketPlanPage({ params }: BucketPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-900 via-slate-900 to-cyan-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.28),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] text-white">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              <Drop className="h-4 w-4" aria-hidden />
              Help-plan innovation
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">MLM bucket help plan software</h1>
            <p className="text-lg leading-8 text-cyan-100">{INTRO_PARAGRAPH}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-cyan-500 text-white hover:bg-cyan-400">
                <Link href={demoHref}>
                  Launch a bucket-based demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-cyan-300 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Consult plan architects
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-cyan-400/40 bg-cyan-500/10 p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/20 p-3">
                <Layers3 className="h-6 w-6 text-cyan-100" aria-hidden />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-100">Buckets replace rigid levels</p>
            </div>
            <p className="text-sm leading-6 text-cyan-100/80">
              Organise contributions inside dynamic buckets so every helper advances responsibly while sustaining upline support.
            </p>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{WHAT_IS_HEADING}</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{WHAT_IS_PARAGRAPH}</p>
          </article>
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{HOW_WORKS_HEADING}</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{HOW_WORKS_PARAGRAPH}</p>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-100/80 p-3 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-200">
              <Shield className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{FEATURES_HEADING}</h2>
          </div>
          <ul className="grid gap-3 text-base leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2">
            {FEATURES_LIST.map((feature) => (
              <li key={feature} className="flex gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                <UsersRound className="mt-1 h-4 w-4 text-cyan-500 dark:text-cyan-300" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{SUPPORT_PARAGRAPH}</p>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-200">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Edward</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Research Analyst</p>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{AUTHOR_BIO}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
