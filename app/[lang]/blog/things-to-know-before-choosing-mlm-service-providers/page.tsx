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
  CheckCircle2,
  ClipboardList,
  Compass,
  Sparkles
} from "lucide-react";
import { GlobeHemisphereEast, ListBullets } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "A n MLM entrepreneur needs MLM software for their business but they don’t know how to catch the best MLM service providers, this article explains about the Things to know before choosing MLM service providers.",
  "The developers who fail to build a good program for MLM software and bad service providers are the main cause for the loss of money of MLM business entrepreneurs. MLM software is not fully programming stuff. Today MLM business is one of the most competitive fields of business so proper guidance is a must for it. So the MLM software developers and service providers must think about it before building MLM software for their clients. If they don’t give much importance to this the entrepreneurs suffer so many consequences."
];

const COMMON_FEATURES = [
  "E-wallet Facility",
  "E-commerce integration",
  "Automatic payment gateway",
  "Enhanced software platform",
  "KYC documents confirmation",
  "Various and multilingual currencies",
  "Backup system",
  "Tracking reports",
  "E-mail Management Module"
];

const ENQUIRE_PARAGRAPH =
  "So before choosing the MLM service provider, you must ask the information about the firm and their service to the experts in this field it will help you. Always search for good service providers in the industry. Select the newcomers who are serious and promising in the industry and check their track records about their projects, plans, service quality, and client feedback, etc all the small information about the company. You can contact your friends, other MLM entrepreneurs for acquiring information regarding that. And always search for queries on the internet about software, technology, systems, etc that are used for the mlm business. And another thing that you give more importance before selecting MLM software is their software packages and their service support packages.";

const SELECT_PARAGRAPHS = [
  "Budget is one of the important factors in MLM business, so before selecting the software you should think about what budget did you have. Make a list of good MLM service providers first and then select the better one based on your budget. The experts in the MLM industry always suggest highly experienced software firms because these firms can build software completely for our requirements without looking if we are established or startups. So Choose the one that is smart and productive.",
  "The picking of the right service provider is very hard for a startup business entrepreneur. so many firms contact them and pressuring them for choosing their software it makes the decision so harder. There is a need for the perfect choice, which must be based on the above conditions. It must be held in mind that the company’s needs and requirements must be understood. This will allow you to better understand what kind of software package is needed."
];

const PACKAGE_PARAGRAPHS = [
  "MLM software provides so many features that help to reach your MLM business to the next level.",
  "Some of the features that you must have in your software package are given below"
];

const PACKAGE_FEATURES = [
  "The software must have a wide variety of features based on the price of your software package.",
  "The software must provide 24*7 support to its customers.",
  "The software should be affordable and suitable for the business"
];

const CLOSING_PARAGRAPHS = [
  "Contact Cloud MLM Software we are one of the best MLM software Service providers because we provide all customizations on our software require for the MLM business whether it’s a startup or established.",
  "The success of an MLM company depends on so many factors. Before choosing the MLM service providers, it is important to consider them. Research and access the provider’s experience, reputation, track record, and other factors related to it within the MLM industry. Understand their unique features and software solutions including compensation plan support, member management, and scalability. Make sure that their software is user-friendly and affordable. If the service providers align with your business needs, you can adopt them wisely."
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
  const title = "Things to Know Before Choosing MLM Service Providers";
  const description =
    "Review essential checkpoints for evaluating MLM software partners, including core features, budgeting, and support expectations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/things-to-know-before-choosing-mlm-service-providers", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ServiceProvidersPageProps = {
  params: { lang: SupportedLocale };
};

export default function ThingsToKnowBeforeChoosingMlmServiceProvidersPage({ params }: ServiceProvidersPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-white to-blue-100 shadow-2xl dark:border-emerald-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/40 dark:bg-slate-900/70 dark:text-emerald-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Vendor due diligence
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Things to Know Before Choosing MLM Service Providers
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPHS[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-emerald-200 bg-white/80 px-6 py-2 text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Review feature demo</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{INTRO_PARAGRAPHS[1]}</p>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <ListBullets className="h-4 w-4" aria-hidden />
            Common features of MLM software
          </span>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200 lg:grid-cols-3">
            {COMMON_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-8 shadow-xl dark:border-emerald-500/40 dark:from-emerald-900/40 dark:via-slate-900 dark:to-slate-950">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Enquire all about the MLM service providers</h2>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{ENQUIRE_PARAGRAPH}</p>
            </div>
            <Compass className="h-12 w-12 text-emerald-600 dark:text-emerald-300" aria-hidden />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Select a competent service provider</h3>
            {SELECT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-8 shadow-xl dark:border-emerald-500/40 dark:from-emerald-900/40 dark:via-slate-900 dark:to-slate-950">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Select the correct software package</h3>
          <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            {PACKAGE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200 lg:grid-cols-3">
            {PACKAGE_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-slate-900/70">
                <ClipboardList className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
            {CLOSING_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              <Link href={contactHref}>
                Contact Cloud MLM Software
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
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
              <GlobeHemisphereEast className="h-4 w-4" aria-hidden />
              Global delivery
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <Sparkles className="h-4 w-4" aria-hidden />
              Tailored solutions
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

