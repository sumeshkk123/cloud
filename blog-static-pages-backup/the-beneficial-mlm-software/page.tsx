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
  Globe2,
  Layers,
  Lock,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "M LM software is considered the best medium in the MLM industry for organizing and handling the different accounts. Look here to get to know really useful MLM software information.",
  "MLM software is a multi-level marketing platform that explains the accounts management and organization tools. The MLM software is web-based and very simple to use. It is very secure, easy to run, and easy to use. The platform is very versatile and the configuration is possible with time constraints. Million of people is joined in the industry. The software’s emergence has included growing numbers of software developers. These app developers are targeting the others interested in MLM. With the different software choices, choosing the best among them becomes very difficult.",
  "It is really important to figure out not just the software best suited to the needs but also the right service provider. One of the key principles guiding multi-level marketing is investing as little as possible. Very little money to handle the millions of affiliates should be invested. The MLM software should be sufficiently complex to manage the distribution, payments, documenting the different business aspects. The first restriction would be the time, the time it takes to use the software would be limited.",
  "The business owner will certainly need the system that will allow him to handle system accounts. This reflects a highly systematic approach to the method. The MLM software will understand not just your needs, but also your potential aspects. The effective MLM software that starts at lower levels, but they will expand at incredible rates in a very short span of time. If the company continues to expand, some procedures should be in place which will make the work consistent. Quality software plays a crucial role in handling all of those things."
];

const BENEFIT_INTRO =
  "MLM software offers numerous benefits that ultimately enhance the productivity of an MLM organization. In order to thrive in the competitive landscape of network marketing, you need to know the advantages of using MLM software.";

const BENEFITS = [
  "MLM software is helpful for managing a complex network of distributors and simplifies the onboarding of new members, tracking their activities, and ensuring a streamlined network structure.",
  "The accurate compensation plans in MLM software reduce manual errors and ensure timely payouts for the members.",
  "The multilingual and multi-currency capabilities within MLM software help organizations expand their presence globally, breaking the language and geographical barriers.",
  "Based on accurate decisions, companies are able to make informed decisions, which ultimately helps in increased productivity.",
  "MLM software ensures the security of financial information as well as personal information. The built-in security features control and prevent all kinds of cyber attacks."
];

const CLOSING_PARAGRAPHS = [
  "Cloud MLM creates the best framework to develop innovative solutions and designs according to customer needs. Exclusivity is the expertise required to fulfill all consumer needs. A single new product enriches the effort to provide the best service possible. Here, customers are guaranteed to achieve acceptable results beyond any limits or boundaries.Mlm software India darts every firm’s needs. The best solutions help to navigate the ideas and managing features The achievement of the MLM software is very important to the company’s future. Efficient software solves the business-level problems that predict the business’s successful working. For every MLM business, the MLM software is a lifeline.",
  "Cloud MLM’s exclusivity helps in customizing the MLM software according to the elite needs of the clients. Any new experience helps the organization offer the best services possible. The key focus given to the clients is that they are especially helpful in producing satisfactory results. The MLM software is chosen from a reliable source.  The software should be chosen according to the quality requires. Surely this software will serve as a resolution in your business."
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
  const title = "The Beneficial MLM Software";
  const description =
    "Learn how choosing the right MLM software streamlines account management, boosts productivity, and keeps data secure.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/the-beneficial-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BeneficialMlmSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function TheBeneficialMlmSoftwarePage({ params }: BeneficialMlmSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-100 via-white to-cyan-100 shadow-2xl dark:border-teal-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:border-teal-500/40 dark:bg-slate-900/70 dark:text-teal-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Platform insight
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Choosing the Right MLM Software: A Guide to Efficient Account Management
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPHS[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-teal-600 px-6 py-2 text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400"
              >
                <Link href={contactHref}>
                  Evaluate your stack
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-teal-200 bg-white/80 px-6 py-2 text-teal-700 transition hover:bg-teal-100 dark:border-teal-500/40 dark:bg-slate-900/60 dark:text-teal-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Launch free demo</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
            <div className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {INTRO_PARAGRAPHS.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                <Layers className="h-4 w-4" aria-hidden />
                Why software choice matters
              </span>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{BENEFIT_INTRO}</p>
            </div>
            <Users className="h-10 w-10 text-teal-600 dark:text-teal-300" aria-hidden />
          </div>
          <div className="mt-8 grid gap-4 text-sm leading-6 text-slate-700 dark:text-slate-200 lg:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-2xl border border-teal-100 bg-teal-50/70 px-4 py-3 dark:border-teal-500/30 dark:bg-teal-500/10"
              >
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600 dark:text-teal-300" aria-hidden />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-100 via-white to-teal-50 p-8 shadow-xl dark:border-teal-500/40 dark:from-teal-900/40 dark:via-slate-900 dark:to-slate-950">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-6 text-slate-700 dark:text-slate-200">
              <p>{CLOSING_PARAGRAPHS[0]}</p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg dark:border-white/10 dark:bg-slate-900/70">
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{CLOSING_PARAGRAPHS[1]}</p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
                  <Globe2 className="h-4 w-4" aria-hidden />
                  Global scale
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
                  <Lock className="h-4 w-4" aria-hidden />
                  Trusted security
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
                  <ChartLineUp className="h-4 w-4" aria-hidden />
                  Performance gains
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

