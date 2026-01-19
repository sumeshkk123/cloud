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
  Building2,
  CheckCircle2,
  Globe2,
  LayoutGrid,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { ListChecks, RocketLaunch } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "M LM or Multi Level Marketing software is an affiliate marketing tool where the admins manage the network status and payments of the agents/ users in the network. The agents can also access their accounts to check their activity history, referrals, and payouts.",
  "MLM software is used by enterprises that follow the business model of network marketing or multi level marketing. In this business model, the enterprise hires agents instead of employees to take the products directly to the customers. The agents are paid a commission for the sales they generate and new agents they recruit.",
  "The agents are positioned at different levels in the network based on their performance. The commission is calculated according to the compensation plan followed by the enterprise. This compensation plan decides how the agents are categorized into various levels.",
  "For enterprises to manage the agents in the network, the sales, the inventory, and the overall business performance, they need MLM software that has been designed for the purpose. Be it a new startup business or a global enterprise with branches in various countries, the MLM software can be used to streamline the business operations and manage the agents in the network.",
  "Many companies have released MLM software into the market. There are numerous software packages that offer an array of services. But for an enterprise to make maximum use of the software, it needs to choose the Best MLM Software Company . From customizing the software to suit the business to providing technical assistance, hosting services, and training employees to use the software, the success of using the software depends on the company that provides it."
];

const ADVANTAGE_INTRO =
  "While most MLM software solutions are flexible and can be customized and integrated with other solutions, there is no denying that some companies offer the best services and support. Let us see a few advantages of choosing the right company to buy/ lease the MLM software.";

const ADVANTAGES = [
  "Increase the productivity of the enterprise.",
  "Process all transactions instantly. Save time and generate more business.",
  "Accurate processing of agents’ commissions and payouts. No chances of human error as the calculations are done by the software.",
  "Analyzing business operations and performance in real-time. The data stored in the database and software is processed and reports are generated to help with better decision making.",
  "Get different statistic reports about the numerous aspects of the business.",
  "Get a faster return on investment and increase profits.",
  "Manage all departments and functions from a single platform.",
  "Create websites, user accounts, and landing pages. Create duplicate websites for each agent to attract more customers.",
  "Make payments and sell products online. Choose multiple eCommerce integrations",
  "Customize the layout, themes, compensation plans, and just about everything in the software.",
  "Mold the software to meet the requirements of the business for increased business performance.",
  "Send automated SMS/ email alerts to employees, agents, and customers.",
  "Make the compensation payment a transparent process. Why let agents wonder how they are paid? Let the software show them the calculation.",
  "24×7 technical assistance to ensure that the software is working without any glitches or errors",
  "Highly extensible software that can be scaled to meet the increasing demands of the business.",
  "Easy to use interface makes it simple for employees, agents, and customers to get the information they are looking for. Enhance the user experience for everyone."
];

const CONCLUSION_PARAGRAPH =
  "Choosing the best MLM software company offers significant advantages, including robust features, smooth integration, and great support. A reliable provider ensures your business runs efficiently and can adapt to growth. Access to an MLM software demo allows you to evaluate these benefits firsthand, ensuring the solution meets your specific needs, streamlining operations, leading to overall success in the competitive MLM industry.";

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
  const title = "The Advantages of Choosing the Best MLM Software Company";
  const description =
    "Review the core benefits of partnering with a leading MLM software provider—from automation gains to transparent compensation management.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/the-advantages-of-choosing-the-best-mlm-software-company", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AdvantagesPageProps = {
  params: { lang: SupportedLocale };
};

export default function TheAdvantagesOfChoosingTheBestMlmSoftwareCompanyPage({ params }: AdvantagesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-slate-100 shadow-2xl dark:border-indigo-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.28),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(30,64,175,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.16),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(30,64,175,0.18),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/40 dark:bg-slate-900/70 dark:text-indigo-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Vendor selection guide
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              The Advantages of Choosing the Best MLM Software Company
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPHS[0]}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                <Link href={contactHref}>
                  Meet Cloud MLM Software
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-indigo-200 bg-white/80 px-6 py-2 text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-500/40 dark:bg-slate-900/60 dark:text-indigo-200 dark:hover:bg-slate-800"
              >
                <Link href={demoHref}>Request live demo</Link>
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
                <LayoutGrid className="h-4 w-4" aria-hidden />
                Why the provider matters
              </span>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{ADVANTAGE_INTRO}</p>
            </div>
            <ListChecks className="h-12 w-12 text-indigo-600 dark:text-indigo-300" aria-hidden />
          </div>
          <div className="mt-8 grid gap-4 text-sm leading-6 text-slate-700 dark:text-slate-200 lg:grid-cols-2">
            {ADVANTAGES.map((advantage) => (
              <div
                key={advantage}
                className="flex gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 dark:border-indigo-500/30 dark:bg-indigo-500/10"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 dark:text-indigo-300" aria-hidden />
                <span>{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-8 shadow-xl dark:border-indigo-500/40 dark:from-indigo-900/40 dark:via-slate-900 dark:to-slate-950">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Ready to compare?</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Let Cloud MLM Software tailor a platform walkthrough for your compensation model and regions.
              </p>
            </div>
            <Button
              asChild
              className="rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              <Link href={contactHref}>
                Schedule provider audit
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{CONCLUSION_PARAGRAPH}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About The Author</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <Building2 className="h-4 w-4" aria-hidden />
              Enterprise optimization
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Trusted partnerships
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <Globe2 className="h-4 w-4" aria-hidden />
              Global reach
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-900">
              <RocketLaunch className="h-4 w-4" aria-hidden />
              Rapid deployment
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

