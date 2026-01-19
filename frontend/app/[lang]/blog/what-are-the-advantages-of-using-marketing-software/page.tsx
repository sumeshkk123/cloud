import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowsLeftRight,
  ChatsCircle,
  ClipboardText,
  Lightning,
  ListChecks,
  SquaresFour,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "If an enterprise cannot retain its customers and sell products, it cannot survive the competition in the market. While traditional business methods included calculating everything manually, with the advancement in technology, systems and software solutions are taking up the job.",
  "While there are many software solutions available in the market, using the exclusive Marketing Software will give better returns in less time. Enterprises will not have to waste the time of employees on repeated tasks and deal with human errors. They can do a lot more with the same amount of investment.",
  "There are no restrictions about the type, size, and volume of the business when using the software. Any enterprise that wants to increase the customer database and sales figures can rely on the software."
];

const ADVANTAGES = [
  {
    title: "Reduce Repetitive Tasks",
    description:
      "Enterprises can reduce repetitive and tedious tasks by optimizing resources and utilizing the content market systems. Instead of trying to juggle between the same tasks every day, these can be automated and delegated to other employees."
  },
  {
    title: "Streamline Marketing",
    description:
      "Marketing is effective and will bear results when the enterprise can reach the respective target audiences through each platform or channel. By being able to access the various channels from a single location, enterprises can streamline their strategies and make changes accordingly."
  },
  {
    title: "Accountability",
    description:
      "It is essential to monitor and follow up on the leads. Each lead has to be analyzed to see if it would bring the required results. By using the software, the risk of human error can be eliminated."
  },
  {
    title: "Customer Engagement",
    description:
      "Retaining customers is tougher than obtaining them. While customers might be willing to purchase a product or two, there is no guarantee that they will stay loyal to the business. Using the software, enterprises can invest in customer engagement, send personalized suggestions, give exclusive offers, and improve customer satisfaction."
  },
  {
    title: "Documentation",
    description:
      "No enterprise should neglect to document the progress of the business. By having authentic data for comparison, enterprises can make wiser decisions in the future. They can also access the improvement of the business and identify the areas that need extra focus."
  }
];

const FEATURES = [
  "Get real-time alerts",
  "Marketing campaign management",
  "Lead management",
  "Email marketing",
  "Social media automation",
  "Data analytics",
  "Allows multiple integrations"
];

const CONCLUSION =
  "While there are many reasons to choose this software to manage the marketing aspect of a business, enterprises will have to understand how to use it to gain the best results.";

const CTA = {
  heading: "Ready to modernize your marketing stack?",
  description:
    "Cloud MLM Software brings campaign automation, analytics, and MLM-specific workflows together so your teams can focus on strategy—not spreadsheets.",
  label: "Schedule a walkthrough"
};

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
  const title = "What are the Advantages of Using Marketing Software?";
  const description =
    "See how marketing automation streamlines workflows, boosts accountability, and deepens customer engagement for forward-thinking MLM enterprises.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/what-are-the-advantages-of-using-marketing-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PageProps = {
  params: { lang: SupportedLocale };
};

export default function AdvantagesOfUsingMarketingSoftwarePage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-purple-50 shadow-2xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.28),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.24),transparent_76%)]" />
        <div className="relative grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700 dark:border-violet-500/30 dark:bg-slate-900/70 dark:text-violet-200">
              Martech advantage
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              What are the Advantages of Using Marketing Software?
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Automate the repetitive, streamline strategy across every channel, and uncover insights that keep your field motivated.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/60 bg-white/85 p-8 text-sm leading-6 text-slate-700 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80 dark:text-slate-200">
            <p>
              Marketing software closes the loop between campaigns, CRM, and payouts so MLM teams can orchestrate smarter outreach and nurture customers with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {INTRO_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <ListChecks className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Advantages of Marketing Software</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {ADVANTAGES.map((advantage) => (
            <div
              key={advantage.title}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{advantage.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <SquaresFour className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Features of Marketing Software</h2>
        </div>
        <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
          While every software has different features, there are some common features available with every software.
        </p>
        <ul className="grid gap-3 rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-6 text-slate-700 shadow-lg md:grid-cols-2 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <ArrowsLeftRight className="mt-1 h-4 w-4 text-indigo-500 dark:text-indigo-300" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {CONCLUSION}
        </p>
      </section>

      <section className="container rounded-[36px] border border-violet-200 bg-gradient-to-r from-violet-100 via-white to-emerald-100 p-10 shadow-xl dark:border-violet-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-900/40">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CTA.heading}</h2>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{CTA.description}</p>
            <Button
              asChild
              className="rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              <Link href={contactHref}>{CTA.label}</Link>
            </Button>
          </div>
          <div className="rounded-[28px] border border-white/60 bg-white/85 p-6 text-sm leading-6 text-slate-700 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            <p>
              From lead tracking to nurture journeys, Cloud MLM Software helps marketing teams coordinate perfectly with sales and compensation so every campaign fuels distributor success.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About the author</h2>
        <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl md:grid-cols-[auto_1fr] dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            <UsersThree className="h-10 w-10" aria-hidden />
          </div>
          <div className="space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <p className="text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
            <p>{AUTHOR.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
