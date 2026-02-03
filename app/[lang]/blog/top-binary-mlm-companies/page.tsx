import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  FlowArrow,
  Globe,
  Lightning,
  ListChecks,
  Medal,
  Network,
  ShieldCheck,
  SquaresFour,
  Strategy,
  UsersThree,
  Warning
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type PlanPoint = {
  title: string;
  description: string;
};

type TableCompany = {
  rank: number;
  name: string;
  headquarters: string;
  founded: string;
};

type CompanyProfile = {
  name: string;
  founded: string;
  headquarters: string;
  industry: string;
  summary: string;
};

type Tip = {
  title: string;
  description: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO = {
  title: "Top Binary MLM Companies in 2025",
  summary:
    "Binary MLM plans offer a simple two-leg structure with high earning potential and fast team growth. Discover the top binary MLM companies leading in 2025.",
  author: "Freddy George",
  date: "June 26, 2025"
};

const INTRO_PARAGRAPHS = [
  "Binary MLM (Multi-Level Marketing) has gained wide recognition due to its simplicity, scalability, and fast-paced reward mechanisms. With its two-legged structure (left and right), binary MLM helps network marketing businesses to build a solid team and reach bonuses compared to the traditional MLM structures.",
  "In this blog, we are focusing on the Top 10 Binary MLM companies that dominate the industry in 2025. Let’s find out how these companies achieve their global reach, product innovation, financial success, and leadership integrity."
];

const PLAN_DESCRIPTION =
  "Each member of a binary multilevel marketing plan recruits and places new members into either their left or right leg of the network marketing structure.";

const PLAN_STEPS = [
  "Sponsor two individuals, placing one in your left leg and the other in your right leg.",
  "Each of your recruits does the same, building depth (not width).",
  "When you balance the volume of both legs, you are rewarded with binary commissions (e.g., 600 BV on one side and 300 BV on the other).",
  "Commissions are paid weekly, based on the volume of your weaker leg."
];

const PLAN_BENEFITS: PlanPoint[] = [
  {
    title: "Fast Team Growth",
    description: "Members within the network help each other build legs (spillover effect)."
  },
  {
    title: "Simple to Understand",
    description: "Focus on building just two legs. Nothing complicated compared to other plans."
  },
  {
    title: "Residual Income",
    description: "Earn residual income as long as both legs generate volume."
  }
];

const PLAN_WATCHOUTS: PlanPoint[] = [
  {
    title: "Balancing Act",
    description: "In order to unlock commissions, you need to balance both legs."
  },
  {
    title: "Potential Bottlenecks",
    description: "A weaker leg can slow down your earnings potential."
  }
];

const TOP_COMPANIES: TableCompany[] = [
  { rank: 1, name: "Natura &Co", headquarters: "Brazil", founded: "1969" },
  { rank: 2, name: "Herbalife", headquarters: "USA", founded: "1980" },
  { rank: 3, name: "Optavia Medifast", headquarters: "USA", founded: "1981" },
  { rank: 4, name: "Ambit Energy", headquarters: "USA", founded: "2006" },
  { rank: 5, name: "Sunhope", headquarters: "China", founded: "2000" },
  { rank: 6, name: "USANA", headquarters: "Utah", founded: "1992" },
  { rank: 7, name: "Market America", headquarters: "North Carolina", founded: "1992" },
  { rank: 8, name: "Younique", headquarters: "USA", founded: "2012" },
  { rank: 9, name: "It Works! Global", headquarters: "Florida", founded: "2002" },
  { rank: 10, name: "Stella & Dot", headquarters: "USA", founded: "2003" }
];

const COMPANY_PROFILES: CompanyProfile[] = [
  {
    name: "Natura &Co",
    founded: "1969",
    headquarters: "Brazil",
    industry: "Cosmetics",
    summary:
      "A Brazilian global cosmetics group known for its sustainable and ethical practices. It owns brands like Natura, Avon, The Body Shop, and Aesop."
  },
  {
    name: "Herbalife",
    founded: "1980",
    headquarters: "USA",
    industry: "Nutrition, weight management, and personal care products.",
    summary:
      "Known for high quality nutritional supplements and personal care products through independent distributors. Herbalife stands out for its global reach and brand loyalty."
  },
  {
    name: "Optavia Medifast",
    founded: "1981",
    headquarters: "USA",
    industry: "Weight management, healthy-living programs, coached meal replacements.",
    summary:
      "As a brand of Medifast, Optavia focuses on offering wellness products such as structured meal plans and personal coaching for weight loss."
  },
  {
    name: "Ambit Energy",
    founded: "2006",
    headquarters: "USA",
    industry: "Retail electricity and natural gas via MLM distributors.",
    summary:
      "Known for its electricity and natural gas services in deregulated markets all over the US. Ambit Energy combines essential utility services with a referral-based income model."
  },
  {
    name: "Sunhope",
    founded: "2000",
    headquarters: "China",
    industry: "Health/wellness products in Asia. Specializing in health supplements, personal care, and wellness products.",
    summary: "Sunhope emphasizes sustainable practices and water conservation."
  },
  {
    name: "USANA",
    founded: "1992",
    headquarters: "Utah",
    industry: "Supplements, weight care, skincare",
    summary:
      "Stands out for its science-backed nutritional supplements, personal care, and weight management products."
  },
  {
    name: "Market America",
    founded: "1992",
    headquarters: "North Carolina",
    industry: "Consumer goods, cosmetics, health products, and financial services.",
    summary:
      "Offer a wide range of health, wellness, and lifestyle products through its UnFranchise business model."
  },
  {
    name: "Younique",
    founded: "2012",
    headquarters: "USA",
    industry: "Cosmetics and skincare items",
    summary:
      "A cosmetic and skincare company operates via MLM model and social media-driven sales, empowering women."
  },
  {
    name: "It Works! Global",
    founded: "2002",
    headquarters: "Florida",
    industry: "Wraps, supplements, skincare.",
    summary:
      "Known for its health, wellness, and beauty products like body wraps, supplements, and skincare items. The products are sold via independent distributors called “Wrapreneurs”."
  },
  {
    name: "Stella & Dot",
    founded: "2003",
    headquarters: "USA",
    industry: "Jewelry and accessories via social selling.",
    summary:
      "Stands out for its chic, high-quality accessories and empowering business model for women."
  }
];

const TIPS: Tip[] = [
  {
    title: "Review the Product Line",
    description: "Ensure the products are consumable, in demand, and ethically sourced to support sustainable business growth."
  },
  {
    title: "Analyze the Compensation Plan",
    description: "Check if it’s binary-only or hybrid. Verify that the plan offers fair and transparent payouts."
  },
  {
    title: "Check Regulatory Status",
    description: "Steer clear of companies with questionable practices or those blacklisted by regulatory authorities."
  },
  {
    title: "Look for Team & Tech Support",
    description: "Strong upline support and reliable tech tools are crucial for success in MLM ventures."
  },
  {
    title: "Watch the Leadership",
    description: "Experienced and trustworthy executives signal a stable and promising company future."
  }
];

const CONCLUSION_PARAGRAPHS = [
  "The binary MLM model is the roadmap to success for many network marketing companies. It helps you build a scalable, team-driven income. Businesses can flourish just with two legs and smart duplication.",
  "Consider joining the above top binary MLM companies that offer robust infrastructure, strong compensation, and solid track records."
];

const CTA = {
  heading: "Your Binary MLM Journey Starts Here — Let’s Talk!",
  body:
    "Want a personalized consultation or business strategy for joining or launching a binary MLM company? Let’s talk — drop your requirements, and we’ll help you plan your next move!",
  ctaLabel: "Free MLM consultation",
  ctaHref: "/mlm-consulting"
};

const FAQS: Faq[] = [
  {
    question: "What is a Binary MLM Company?",
    answer:
      "A Binary MLM company uses a binary compensation plan, where each distributor builds a team with two legs (left and right). Commissions are typically earned based on the sales volume of the weaker leg, encouraging distributors to balance both sides and foster team collaboration for optimal payouts."
  },
  {
    question: "How does the Binary MLM compensation plan work?",
    answer:
      "Distributors build two downline teams and earn commissions based on the sales volume of the weaker leg, while excess volume from the stronger leg is carried forward, encouraging balanced growth and long-term income potential."
  },
  {
    question: "Which are some top Binary MLM companies in 2025?",
    answer:
      "Top Binary MLM companies include Amway, Herbalife, USANA, Natura & Co, and Ambit Energy. These companies are known for their quality product lines and effective binary packages."
  },
  {
    question: "Why do companies prefer the Binary MLM model?",
    answer:
      "Compared to other models, the binary MLM plan is simpler, more scalable, and easier to duplicate. You can foster teamwork and engagement without any hurdles. Also, it provides flexibility and transparency."
  },
  {
    question: "Can distributors earn a sustainable income with Binary MLM plans?",
    answer:
      "Absolutely! Distributors are able to earn significant commissions and bonuses through balanced team building and consistent sales volume."
  }
];

const AUTHOR = {
  name: "Freddy George",
  role: "Marketing Head",
  bio: "Industry specialist with extensive experience in the MLM sector. Versatile in developing innovative marketing strategies, with a strong passion for artificial intelligence, content marketing, and emerging MLM trends.",
  linkedin: "https://www.linkedin.com/in/freddy-george-604b28277/"
};

const DISCLAIMER =
  "Cloud MLM Software neither promotes nor endorses any specific company mentioned in this guide. The information is compiled from publicly available resources and provided solely for educational purposes.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Top Binary MLM Companies in 2025";
  const description =
    "Explore how the leading binary MLM companies structure growth, incentives, and global expansion in 2025.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/top-binary-mlm-companies", locale)
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

export default function TopBinaryMlmCompaniesPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const consultingHref = buildLocalizedPath(CTA.ctaHref, locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const calculatorsHref = buildLocalizedPath("/mlm-calculator", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 shadow-2xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.14),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_68%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.25),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_72%)]" />
        <div className="relative grid gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/40 dark:bg-slate-900/70 dark:text-indigo-200">
              Binary growth radar
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
                <p className="font-semibold text-slate-900 dark:text-white">Published on</p>
                <p>{HERO.date}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={consultingHref}>
                  Talk to an expert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-300 bg-white/90 px-6 py-2 text-slate-800 shadow-sm transition hover:border-indigo-400 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-indigo-400"
              >
                <Link href={pricingHref}>
                  Compare pricing
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/80">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-200 to-emerald-200 opacity-60 blur-3xl dark:from-indigo-500/30 dark:to-emerald-500/30" />
            <div className="relative space-y-5 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-3">
                <SquaresFour className="h-5 w-5 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
                <p className="font-semibold">Two-leg mastery</p>
              </div>
              <p>
                Binary plans double-down on focus: one left leg, one right leg, and consistent volume on both sides. This guide follows the companies doing it best.
              </p>
              <div className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/60">
                <div className="flex items-center gap-3">
                  <UsersThree className="h-5 w-5 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Spillover support</p>
                </div>
                <p>
                  Leaders showcased here excel at balancing volume, sustaining mentorship, and delivering rewards that keep teams energised.
                </p>
              </div>
              <div className="grid gap-2 rounded-2xl border border-indigo-200/80 bg-indigo-50/80 p-4 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200">
                <p className="text-xs font-semibold uppercase tracking-wide">Key takeaway</p>
                <p>
                  With only two legs to balance, clarity matters. Automation, analytics, and transparent payouts keep binary networks resilient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Introduction</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 p-8 shadow-xl dark:border-indigo-500/30 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/40">
            <div className="flex items-center gap-3">
              <Network className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What is a Binary MLM Plan?</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">{PLAN_DESCRIPTION}</p>
            <div className="mt-8 space-y-4">
              {PLAN_STEPS.map((step, index) => (
                <div key={step} className="relative rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/70">
                  <div className="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-300 bg-indigo-600 text-sm font-semibold text-white shadow-lg dark:border-indigo-500/30 dark:bg-indigo-500">
                    {index + 1}
                  </div>
                  <p className="pl-10 text-sm leading-7 text-slate-700 dark:text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <InsightCard
              icon={ListChecks}
              title="Benefits"
              tone="emerald"
              items={PLAN_BENEFITS}
            />
            <InsightCard
              icon={Warning}
              title="Things to watch"
              tone="amber"
              items={PLAN_WATCHOUTS}
            />
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Medal className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">List of Top 10 Binary MLM Companies in 2025</h2>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-700">
              <thead className="bg-slate-100/80 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Company name</th>
                  <th className="px-4 py-3">Headquarters</th>
                  <th className="px-4 py-3">Founded in</th>
                </tr>
              </thead>
              <tbody>
                {TOP_COMPANIES.map((company) => (
                  <tr
                    key={company.rank}
                    className={cn(
                      "transition",
                      company.rank % 2 === 0
                        ? "bg-white dark:bg-slate-900/60"
                        : "bg-slate-50/80 dark:bg-slate-900/40"
                    )}
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{company.rank}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{company.name}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{company.headquarters}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{company.founded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex items-center gap-3">
          <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">An overview of Best Binary MLM Companies in 2025</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {COMPANY_PROFILES.map((company) => (
            <div
              key={company.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200/60 to-indigo-200/60 opacity-40 blur-2xl transition group-hover:opacity-70 dark:from-emerald-500/20 dark:to-indigo-500/20" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{company.name}</h3>
                </div>
                <dl className="grid gap-2 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  <div className="flex justify-between text-sm text-slate-700 dark:text-slate-200">
                    <dt>Founded year</dt>
                    <dd className="font-medium">{company.founded}</dd>
                  </div>
                  <div className="flex justify-between text-sm text-slate-700 dark:text-slate-200">
                    <dt>Headquarters</dt>
                    <dd className="font-medium">{company.headquarters}</dd>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-200">
                    <dt className="font-semibold text-slate-900 dark:text-white">Industry</dt>
                    <dd>{company.industry}</dd>
                  </div>
                </dl>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{company.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Strategy className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Tips for Choosing the Right Binary MLM Company</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{tip.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-5">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {CONCLUSION_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>
              {paragraph.includes("network marketing companies") ? (
                <>
                  {paragraph.split("network marketing companies")[0]}
                  <Link
                    href={buildLocalizedPath("/blog/top-100-mlm-companies-in-the-world-as-of-2022", locale)}
                    className="text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-300"
                  >
                    network marketing companies
                  </Link>
                  {paragraph.split("network marketing companies")[1]}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-indigo-50 p-10 shadow-xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CTA.heading}</h2>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{CTA.body}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={consultingHref}>{CTA.ctaLabel}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-300 bg-white/80 px-6 py-2 text-slate-800 shadow-sm transition hover:border-indigo-400 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-indigo-400"
              >
                <Link href={calculatorsHref}>Experiment with MLM plan calculators</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white/90 p-6 text-sm text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
            <div className="flex items-center gap-3">
              <FlowArrow className="h-5 w-5 text-emerald-600 dark:text-emerald-300" aria-hidden />
              <p className="font-semibold">Compensation mapping</p>
            </div>
            <p>
              Upload your current payout sheets into Cloud MLM Software and let our AI copilots highlight volume leaks, compliance gaps, and profitability opportunities.
            </p>
            <div className="flex items-center gap-3">
              <Lightning className="h-5 w-5 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <p className="font-semibold">Launch momentum</p>
            </div>
            <p>
              Blend binary precision with omnichannel onboarding so new distributors activate faster and stay engaged longer.
            </p>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-900/60">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{faq.question}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3">
              <UsersThree className="h-5 w-5 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Disclaimer</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{DISCLAIMER}</p>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About the author</h2>
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl md:grid-cols-[auto_1fr] dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            <UsersThree className="h-10 w-10" aria-hidden />
          </div>
          <div className="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <div>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
            </div>
            <p>{AUTHOR.bio}</p>
            <Link
              href={AUTHOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-300"
            >
              Connect on LinkedIn
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function InsightCard({
  icon: Icon,
  title,
  tone,
  items
}: {
  icon: IconType;
  title: string;
  tone: "emerald" | "amber";
  items: PlanPoint[];
}) {
  const toneStyles =
    tone === "emerald"
      ? {
          border: "border-emerald-200",
          icon: "text-emerald-600 dark:text-emerald-300",
          header: "text-slate-900 dark:text-white",
          bullet: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200"
        }
      : {
          border: "border-amber-200",
          icon: "text-amber-600 dark:text-amber-300",
          header: "text-slate-900 dark:text-white",
          bullet: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200"
        };

  return (
    <div
      className={cn(
        "rounded-3xl border bg-white/90 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/70",
        toneStyles.border
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className={cn("h-5 w-5", toneStyles.icon)} aria-hidden />
        <h3 className={cn("text-lg font-semibold", toneStyles.header)}>{title}</h3>
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className={cn("mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold", toneStyles.bullet)}>
              •
            </span>
            <div className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
