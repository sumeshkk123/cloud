import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Coins,
  Layers,
  Network,
  Palette,
  Shield,
  Sparkles
} from "lucide-react";
import {
  BookOpen,
  DesktopTower,
  GlobeHemisphereEast,
  HandCoins,
  ListChecks
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "All the topmost global enterprises use MLM software to simplify the process and keep track of the day to day updates. There is a myth that only famous and established brands can use MLM software due to the size and volume of the business. Many small scale and startup businesses feel it is not essential to invest in MLM software.",
  "There is also a misconception that MLM software is highly expensive to purchase and maintain. Be it the employees or the agents, they feel wary of using the software, thinking it is complex and confusing. Nothing can be farther than the truth.",
  "The Multi Level Marketing Software offered by a well-known company in the market is cost-effective, affordable, and highly useful. It is easy to install and operate. The software reduces the amount of time the employees have to spend on performing recurring tasks. There are many reasons for an enterprise to invest in MLM software and make the most of it to expand the business."
];

const FLEXIBLE_PARAGRAPH =
  "MLM software is highly flexible. It can be used by any business, irrespective of the number of employees and agents associated with it. A startup MLM business can expand the software and continue to use it even as the business grows. There is no need to purchase another software solution.";

const CUSTOMIZATION_PARAGRAPH =
  "MLM software can be customized to any extent. Businesses can change colors, themes, languages, navigation, layouts, and add logos, new features, and more. Customizing the software doesn’t adversely affect its performance. In fact, customization makes the software user-friendly and enhances its performance. Enterprises can decide whom to give access to the database so that the information stored will be secure and safe. Data encryption, data backup, and data compression are a part of the software.";

const INTEGRATIONS_PARAGRAPH =
  "Payment gateways, e-wallets, open-source eCommerce platforms, multicurrency modules, etc. can be integrated into the software. This helps in selling the products online, paying the commission to the agents, and accepting customer subscriptions. The multicurrency module will enable customers from different countries to make purchases in their local currency. The money will be converted and credited to the brand’s e-wallet. From the e-wallet, the money will be transferred to the bank account of the business at the end of the day.";

const COMPENSATION_PARAGRAPH =
  "MLM compensation plan is an integral part of every MLM business. The network and marketing model depends on the compensation plan. The commission paid to the agents is automatically calculated based on the position of the agent in the network. Enterprises can choose any compensation plan though it is preferred to go with the one that is usually used by competitors in the existing market/ region.";

const WEBSITE_PARAGRAPHS = [
  "Multi-Level Marketing Software can be used to create a business website and integrate it with the database. The website can be duplicated for each agent to use it to recruit more agents and sell products to customers. Individual user accounts for every agent make it easy for them to access their network status, their commissions, referrals, and more.",
  "Enterprises can use MLM software by installing it on-premises servers or by accessing it through the cloud. The company that offers the software also provides training for employees, cloud hosting services, and technical support to maintain the software."
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
  const title = "Reasons to Invest in the Best Multi-Level Marketing Software";
  const description =
    "Discover why flexible, customizable, and integration-ready MLM software is essential for fast-scaling network marketing teams.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/reasons-to-invest-in-the-best-multi-level-marketing-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ReasonsPageProps = {
  params: { lang: SupportedLocale };
};

export default function ReasonsToInvestInMlmSoftwarePage({ params }: ReasonsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-100 shadow-2xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.28),transparent_58%),radial-gradient(circle_at_bottom_right,rgba(14,116,144,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(14,116,144,0.18),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/40 dark:bg-slate-900/70 dark:text-indigo-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Investment spotlight
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Why the best MLM software fuels every growth chapter
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPHS[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                <Link href={contactHref}>
                  Talk to product advisors
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-indigo-200 bg-white/80 px-6 py-2 text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-500/40 dark:bg-slate-900/60 dark:text-indigo-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Browse live demo</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Perception vs. reality</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{INTRO_PARAGRAPHS[1]}</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{INTRO_PARAGRAPHS[2]}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-300" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Secure by design</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Encryption, backups, and access control keep every record trustworthy.
                </p>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-500/40 dark:bg-indigo-500/10">
                <Layers className="h-5 w-5 text-indigo-700 dark:text-indigo-200" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Scales with teams</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Bring new markets online without re-platforming or retraining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-8 shadow-lg dark:border-indigo-500/40 dark:bg-indigo-500/10">
            <div className="flex items-center gap-3">
              <GlobeHemisphereEast className="h-6 w-6 text-indigo-700 dark:text-indigo-200" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Flexible, Scalable, and Extensible</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{FLEXIBLE_PARAGRAPH}</p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3">
              <Palette className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Customization of MLM Software</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{CUSTOMIZATION_PARAGRAPH}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-indigo-50 to-teal-50 p-8 shadow-xl dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-teal-900/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-200">
                <Network className="h-4 w-4" aria-hidden />
                Integration-ready core
              </span>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">Plug in payments, stores, and global currencies</p>
            </div>
            <HandCoins className="h-10 w-10 text-teal-600 dark:text-teal-300" aria-hidden />
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-700 dark:text-slate-200">{INTEGRATIONS_PARAGRAPH}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3">
              <Coins className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">MLM Compensation Plans</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{COMPENSATION_PARAGRAPH}</p>
          </div>
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-8 shadow-lg dark:border-indigo-500/40 dark:bg-indigo-500/10">
            <div className="flex items-center gap-3">
              <DesktopTower className="h-6 w-6 text-indigo-700 dark:text-indigo-200" aria-hidden />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">MLM Website and User Accounts</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {WEBSITE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Ready for the next step?</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Let Cloud MLM Software tailor a deployment roadmap that matches your expansion plans.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                <Link href={contactHref}>
                  Schedule strategy call
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-200 bg-white/80 px-6 py-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>View feature tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <BookOpen className="h-4 w-4" aria-hidden />
              Market insights
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <ListChecks className="h-4 w-4" aria-hidden />
              Product strategy
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

