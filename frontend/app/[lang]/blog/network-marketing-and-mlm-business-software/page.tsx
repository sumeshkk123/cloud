import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flowchart, GitBranch, Layers3, Network, Sparkles } from "lucide-react";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "The process is simple and effective. A person who is recruited as an agent will make an initial small investment to purchase the sample product. That person then has to sell the product and recruit new agents who will also sell the products and recruit a new batch of agents. The cycle continues as every agent will recruit more such agents.",
  "Agents earn commission on every sale, and a percentage of the commission is credited to those who have recruited the agents. Companies such as Tupperware, Amway, Avon use network marketing to sell their products. For such companies keeping track of their agents, their network status, their referrals, and other details can be a bother without the right software. This is where MLM software steps into the picture.",
  "Created for such companies, MLM software is a Multi-Level Marketing or an Affiliate marketing management tool. It helps enterprises in managing the network and the users in the network along with their compensation. The end-users or the agents can use the software to access their network information, payouts, etc.",
  "Network marketing has many names such as multi-level marketing, referral marketing, or pyramid marketing. The agents in the network are considered as independent business owners, rather than employees of the enterprise."
];

const PRINCIPLES = [
  "The marketing system is hierarchical.",
  "Agents do not earn salaries. They only earn a commission for sales.",
  "The philosophy of this model is to sell the product.",
  "There is a single promotional strategy- word of the mouth.",
  "Active agents are eligible to get discounts and special offers that will encourage them to generate more sales.",
  "The agent is responsible only for his/ her sales."
];

const HIERARCHY_PARAGRAPHS = [
  "There are many types of networks or levels in this marketing model. Different brands employ different models according to their needs. That said, the basic concept of the network remains the same for all models.",
  "The first or top position belongs to the business or the manufacturer. Then come the distributors and dealers who take the products into the market through wholesalers. The wholesalers sell the products to distributors for a profit. The chain continues until the product reaches the end customer.",
  "The hierarchy can take any form, depending on various factors. The MLM business software provides enterprises with numerous plans that will suit their business models. Enterprises can choose a plan accordingly. Some of the MLM plans are as follows."
];

const MLM_PLANS = [
  "MLM Binary plan",
  "MLM Board plan",
  "MLM Generation plan",
  "MLM Matrix plan",
  "MLM Stair step plan",
  "MLM Donation plan",
  "MLM Gift plan",
  "MLM Unilevel plan",
  "MLM Australian Binary plan"
];

const BENEFIT_PARAGRAPHS = [
  "There are many benefits to using the Network Marketing method as a major business model. Enterprises do not have to spend millions of dollars on extensive advertising. The products are sold based on the word of the mouth advertising technique. The network includes many distributors and sub-distributors. There is no limit to the number of agents who can be a part of the hierarchy. Expanding the network is easy. The process is flexible and engages the clients directly.",
  "Enterprises can customize the MLM software and integrate it with other software systems to ensure fast and effective results. The companies which provide the MLM software handle the customization process and provide 24*7 support to the enterprises."
];

const CONCLUSION_PARAGRAPHS = [
  "Network marketing has advanced tremendously with the integration of MLM business software, a critical tool for managing and expanding MLM operations. In sectors such as insurance, beauty, finance, and beyond, MLM software is tailored to meet industry-specific needs, from policy tracking and compliance in insurance, inventory and client management in beauty, to financial tracking and reporting in finance. This software simplifies complex operations, improves communication, and enables performance tracking across extensive network structures. With MLM business software, network marketers can focus on fostering strong relationships, empowering their teams, and pursuing sustainable growth. As the network marketing landscape evolves, leveraging the right software solutions will be essential for success in an increasingly competitive global marketplace."
];

const AUTHOR = {
  name: "Edward",
  role: "Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Network Marketing and MLM Business Software";
  const description =
    "See how network marketing works, why MLM software is vital for tracking commissions and hierarchies, and which plans and benefits power scalable growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/network-marketing-and-mlm-business-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NetworkMarketingSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function NetworkMarketingSoftwarePage({ params }: NetworkMarketingSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-blue-100/70 bg-blue-50/60 py-20 shadow-2xl dark:border-blue-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(14,197,197,0.3),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(14,197,197,0.18),transparent_70%)]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/20" />
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/40 dark:bg-slate-900/70 dark:text-blue-200">
              <Network className="h-4 w-4" aria-hidden />
              Overview
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Network marketing and MLM business software
            </h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Why software matters</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Accurate genealogy views, payout automation, and compliance-ready reporting turn a sprawling distributor hierarchy into a
                manageable growth engine.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-500/30 dark:bg-blue-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Fast insight</p>
              <p className="mt-2 text-sm leading-6 text-blue-900 dark:text-blue-100">
                From starter kits to enterprise networks, configurable MLM software keeps every role aligned on performance and commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="inline-flex items-center gap-3">
            <Flowchart className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Core principles of network marketing</h2>
          </div>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:grid-cols-2">
            {PRINCIPLES.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Layers3 className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Understanding the hierarchy</h2>
            </div>
            {HIERARCHY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-3 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">MLM plans to consider</p>
            <ul className="grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {MLM_PLANS.map((plan) => (
                <li key={plan} className="flex items-start gap-2">
                  <GitBranch className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-300" aria-hidden />
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="inline-flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Benefits of adopting MLM business software</h2>
          </div>
          <div className="mt-6 space-y-4">
            {BENEFIT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
        {CONCLUSION_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-200">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="container space-y-4 rounded-3xl border border-blue-100 bg-blue-50/80 p-8 shadow-xl dark:border-blue-500/30 dark:bg-blue-500/10">
        <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-100">Ready to orchestrate your network?</h2>
        <p className="text-sm leading-6 text-blue-900 dark:text-blue-100">
          Our product team maps plans, commissions, and onboarding journeys that mirror your business DNA—so you can scale without losing control.
        </p>
        <Button
          asChild
          className="bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          <Link href={contactHref}>
            Talk to MLM software specialists
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">About the author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
