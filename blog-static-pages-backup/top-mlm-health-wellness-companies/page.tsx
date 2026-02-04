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
  AppleLogo,
  Heartbeat,
  Leaf,
  ListChecks,
  Rows,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

type RevenueEntry = {
  rank: string;
  company: string;
  country: string;
  revenue: string;
  founded: string;
};

type CompanyHighlight = {
  name: string;
  body: string;
};

const HERO = {
  title: "Top MLM health & wellness companies 2025",
  summary:
    "Everyone yearns for a vibrant and healthy lifestyle. Nurturing your body with the right ingredients is crucial. I happen to know the right solution that can help you feel refreshed and vibrant in no time!",
  author: "Edward",
  date: "Updated on January 2, 2025"
};

const INTRO_LEAD =
  "We will introduce you to the top weight loss MLM companies that not only refined health but also opened doors to entrepreneurship and passive income.";

const TABLE_ENTRIES: RevenueEntry[] = [
  { rank: "1", company: "Zinzino", country: "Sweden", revenue: "$209 million", founded: "2005" },
  { rank: "2", company: "Amway", country: "USA", revenue: "$7.4 billion", founded: "1959" },
  { rank: "3", company: "Juice Plus+", country: "Sweden", revenue: "$200 million", founded: "1970" },
  { rank: "4", company: "Nikken", country: "USA", revenue: "$100 million", founded: "1975" },
  { rank: "5", company: "Forever Living", country: "USA", revenue: "$65.6 million", founded: "1978" },
  { rank: "6", company: "Herbalife", country: "Brazil", revenue: "$5.1 billion", founded: "1980" }
];

const COMPANIES: CompanyHighlight[] = [
  {
    name: "Zinzino",
    body:
      "Zinzino is a leading name in the weight loss MLM industry. They are the best at providing MLM supplements that foster the overall well-being of their customers. You can make your weight loss journey more beneficial and interesting. Their products provide your mind and body with nourishment. The company was founded in Norway in 2005 as a start-up business. In just 15 years, it expanded its global presence and continued to inspire many. In the realm of weight loss direct-selling companies, Zinzino adopts a refreshing approach and stands out for its genuine commitment to health, personalized structure, and empowering MLM structure."
  },
  {
    name: "Amway",
    body:
      "Amway is the perfect name for weight loss products. In the weight loss MLM industry, Amway takes a comprehensive approach to wellness and healthcare. They are one of the most trusted weight loss MLM companies in the world. Amway’s MLM supplements are carefully crafted to support individuals on their weight loss journey. Their products are designed to enhance metabolism through perfect fat-burning and improve overall well-being. Amway’s MLM vitamins, supplements, and nutrition products provide a complete solution for weight loss. Amway stands out as a dependable option for anyone looking to attain long-lasting outcomes in their weight loss journey with an emphasis on quality and efficiency."
  },
  {
    name: "Juice Plus+",
    body:
      "Juice Plus+ is a renowned MLM supplement company that has revolutionized the weight loss MLM industry. They specialize in MLM supplements, vitamins, and other nutrition products that promote fat loss. Juice Plus+ is dedicated to providing 100 percent natural, plant-based ingredients. In the realm of weight loss MLM companies, Juice Plus+ secures a pivotal position."
  },
  {
    name: "Nikken",
    body:
      "Everyone needs a break from the pressures of a hectic work life and to focus completely on caring for their bodies. The nutrition products of the well-known weight loss MLM company, Nikken are the ultimate solution. They help their clients adopt a balanced lifestyle. Nikken products satisfy your needs and provide a healthy and rewarding lifestyle. Isamu Masuda, the founder of Nikken, recognized that wellness depends on some factors which he called the five pillars of heath: healthy body, mind, family, society, and finances."
  },
  {
    name: "Forever living",
    body:
      "Want to start your weight loss journey with a reputable MLM business ? There is no need to look past Forever Living, a veritable powerhouse among MLMs for health and wellbeing. Forever Living is one of the top MLM weight loss companies, boasting a solid track record and a variety of excellent products. Their MLM supplements are perfectly made to complement your fitness objectives and are packed with deliciousness from nature. Forever Living provides a wide range of treatments catered to individual requirements, from rejuvenating aloe vera mixes to metabolism-boosting vitamins."
  },
  {
    name: "Herbalife",
    body:
      "Joining the Herbalife wellness community is more than just embarking on a weight loss journey. It is a commitment to a lifestyle of vitality and wellness. The Herbalife weight loss MLM company is all about transformation, empowerment, and embracing a holistic approach to health. It has 40 years of experience and millions of followers from all parts of the world. Herbalife belongs to the list of top fitness MLM companies across the globe. They are experts in the weight loss MLM industry as they grow by expanding their community through their independent distributors."
  }
];

const CONCLUSION =
  "In summary, Health Supplement MLM Companies are at the forefront of the health and wellness industry, offering high-quality products ranging from vitamins and herbal supplements to nutrition and personal care essentials. They are committed to enhancing overall well-being, making them a trusted choice for those seeking a healthier future.";

const CTA = {
  heading: "Ready to Launch Your MLM Health & Wellness Business?",
  description: "Make your wellness journey smooth and scalable with our MLM software.",
  label: "Let’s discuss it"
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
  const title = "Top MLM health and wellness companies in 2025";
  const description =
    "Meet the supplement and nutrition MLM brands leading the 2025 wellness wave, plus insights on what keeps them ahead.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/top-mlm-health-wellness-companies", locale)
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

export default function TopMlmHealthWellnessCompaniesPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[44px] border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 shadow-2xl dark:border-blue-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.3),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_75%)]" />
        <div className="relative grid gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-slate-900/70 dark:text-blue-200">
              Wellness radar
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              {HERO.title}
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{HERO.summary}</p>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Written by</p>
                <p>{HERO.author}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Updated on</p>
                <p>{HERO.date}</p>
              </div>
            </div>
            <p className="rounded-3xl border border-blue-200/70 bg-blue-50/80 p-5 text-sm leading-6 text-blue-800 shadow-sm dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
              {INTRO_LEAD}
            </p>
          </div>
          <div className="space-y-6 rounded-[32px] border border-white/60 bg-white/85 p-8 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <Heartbeat className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Vital signs of direct selling</p>
            </div>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
              Health-conscious buyers crave authenticity, science-backed blends, and empathetic coaching. These brands balance all three while equipping distributors with replicable systems.
            </p>
            <div className="grid gap-4 rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-4 text-sm leading-6 text-emerald-800 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
              <div className="flex items-center gap-3">
                <ListChecks className="h-5 w-5" weight="fill" aria-hidden />
                <p className="font-semibold">What customers feel</p>
              </div>
              <p>
                Transparent ingredient sourcing, personalised programmes, and community accountability loops keep wellness journeys sticky and referencable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <Rows className="h-6 w-6 text-blue-600 dark:text-blue-300" weight="fill" aria-hidden />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Top multi level marketing supplement companies 2025</h2>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-700">
              <thead className="bg-blue-500/90 text-left text-xs font-semibold uppercase tracking-wide text-white dark:bg-blue-600/80">
                <tr>
                  <th className="px-4 py-3">Sl. No</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Country</th>
                  <th className="px-4 py-3">Revenue 2024 (in USD)</th>
                  <th className="px-4 py-3">Year Founded</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ENTRIES.map((entry, index) => (
                  <tr
                    key={entry.rank}
                    className={cn(
                      "transition",
                      index % 2 === 0 ? "bg-white dark:bg-slate-900/60" : "bg-slate-50/80 dark:bg-slate-900/40"
                    )}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{entry.rank}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{entry.company}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{entry.country}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{entry.revenue}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{entry.founded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <AppleLogo className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Overview of the top nutrition network marketing companies 2025
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {COMPANIES.map((company) => (
              <div
                key={company.name}
                className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{company.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{company.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION}</p>
        </div>
      </section>

      <section className="container rounded-[36px] border border-blue-200 bg-gradient-to-r from-blue-100 via-blue-50 to-emerald-50 p-10 shadow-xl dark:border-blue-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-900/40">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CTA.heading}</h2>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{CTA.description}</p>
            <Button
              asChild
              className="rounded-full bg-blue-600 px-6 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              <Link href={contactHref}>{CTA.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          About the author
        </h2>
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
