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
  ChartLineUp,
  ClipboardText,
  Globe,
  Lightning,
  MagnifyingGlass,
  ShieldCheck,
  SlidersHorizontal,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

type Criterion = {
  title: string;
  description: string;
};

type Provider = {
  name: string;
  tagline: string;
  badges: string[];
};

type TableRow = {
  company: string;
  founded: string;
  hq: string;
  features: string;
  notable: string;
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
  title: "Top 7 MLM Software Platforms in the USA for 2025: Expert Reviews & Feature Comparison",
  intro:
    "MLM is booming in the United States. Businesses are looking for an advanced solution that can manage their complex networks, compensation plans, and sales processes. For the success, scalability, and compliance of your business, choosing the right MLM software is a must.",
  summary:
    "In this write-up, we compare the most trusted multilevel marketing platforms serving American direct-selling brands so you can evaluate features, support models, and innovation velocity side-by-side."
};

const WHY_PARAGRAPHS = [
  "MLM software acts as a critical component in the operation of a network marketing business. It seamlessly automates compensation plan management, customer relationship management, and distributor engagement so you can stay aligned, productive, and profitable.",
  "Good MLM software also helps the business grow and stay compliant with rules. As the business expands to different places, the software should help manage different currencies, languages, and distributor needs. To prevent the risks that are associated with data breaches and legal problems, it should also have strong compliance tools."
];

const CRITERIA: Criterion[] = [
  {
    title: "Feature Set",
    description: "Comprehensive tools for compensation plans, e-commerce, reporting, and integrations."
  },
  {
    title: "User Experience",
    description: "Intuitive interfaces for admins and distributors."
  },
  {
    title: "Scalability",
    description: "Ability to grow with your business."
  },
  {
    title: "Customer Support",
    description: "Responsive and knowledgeable support teams."
  },
  {
    title: "Compliance",
    description: "Adherence to US regulations and data security standards."
  },
  {
    title: "Reputation",
    description: "Positive user reviews and proven industry track record."
  }
];

const TABLE_ROWS: TableRow[] = [
  {
    company: "Cloud MLM Software",
    founded: "2015",
    hq: "India & San Francisco, USA",
    features: "Commission management,custom integrations,AI-driven analytics, blockchain integration, mobile apps,shopify,ecommerce etc.",
    notable: "US-based, long-standing,Robust enterprise platform"
  },
  {
    company: "Business MLM Software",
    founded: "2022",
    hq: "India",
    features: "E-Commerce Integrations,MLM Calculator,CRM systems,Advanced Reporting and Analytics,compliance tools etc",
    notable: "Multiplan support & Global Compatibility"
  },
  {
    company: "Pro MLM Software",
    founded: "2007",
    hq: "USA",
    features: "Comprehensive MLM plans, mobile-ready, e-wallet,",
    notable: "Versatility & Advanced Analytics"
  },
  {
    company: "Minds MLM",
    founded: "2018",
    hq: "USA",
    features: "Multi-plan support,SMS Integrations,reporting,CMS Technologies",
    notable: "Customizations"
  },
  {
    company: "Danni MLM",
    founded: "2002",
    hq: "India",
    features: "Advanced Report System, International Payment Gateways,Integrations",
    notable: "Automation & Franchise Management"
  },
  {
    company: "Netsoft MLM Software",
    founded: "2007",
    hq: "USA",
    features: "Advanced Commission Tracking,Multi-Currency & Multilingual Support,Replicated Websites",
    notable: "Enterprise-Grade Customization and Scalability"
  },
  {
    company: "Neo MLM Software",
    founded: "2017",
    hq: "India",
    features: "Real-Time Performance & Commission Tracking,Gamification Engine,Coaching Tools",
    notable: "Integrated Learning Management System"
  }
];

const PROVIDERS: Provider[] = [
  {
    name: "Cloud MLM Software",
    tagline: "Leading MLM Software Provider in USA",
    badges: [
      "⭐ Capterra: 5/5",
      "⭐ G2: 5/5",
      "⭐ Software Suggest: 5/5",
      "⭐ Software Advice: 5/5",
      "⭐ Trust Pilot: 4.4/5",
      "⭐ Crozdesk: 4.8/5",
      "Awarded by Software Suggest as the category champions in MLM Software",
      "Awarded by Capterra as one of the best MLM Software",
      "Awarded by Crozdesk as the trusted MLM Software vendor in 2024"
    ]
  },
  {
    name: "Business MLM Software",
    tagline:
      "Business MLM Software is a trusted name in MLM software development. It delivers smart and modern solutions for network marketing businesses. Their platform is integrated with many amazing features that help companies manage every part of their operation (from tracking sales and commissions to handling distributor networks and staying compliant with industry standards).You can choose business MLM software to boost your productivity in all ways. Start your journey with tools that help you grow with confidence.",
    badges: [
      "⭐ Capterra: 5/5",
      "⭐ G2: 5/5",
      "⭐ Software Suggest: 5/5",
      "⭐ Software Advice: 5/5",
      "Recognized by Software Suggest as Top rated MLM Software in 2024",
      "Recognized by Software Suggest as High performer MLM Software in 2025"
    ]
  },
  {
    name: "Pro MLM Software",
    tagline:
      "Pro MLM is a global MLM software development company that understands the unique needs of businesses selling products or services through network marketing. With a focus on innovation and smart technology, they create solutions that help organizations operate more smoothly and grow faster.Pro MLM delivers powerful tools that support everything from team management to sales tracking, helping businesses stay competitive and efficient in a fast-moving market.",
    badges: [
      "⭐ Capterra: 4.6/5",
      "⭐ G2: 4.3/5",
      "⭐ Software Suggest: 5/5",
      "⭐ Software Advice: 4.6/5",
      "Recognized by Software Suggest as faster growing software product"
    ]
  },
  {
    name: "Minds MLM",
    tagline:
      "Minds MLM is a dedicated MLM software development company that offers best solutions to network marketing businesses. Their goal is to empower businesses with smart technology that enhances performance, supports growth, and ensures smooth day-to-day operations. Minds MLM combines innovation with user-friendly design to help MLM companies succeed in a competitive world.",
    badges: [
      "⭐ Capterra: 4.9/5",
      "⭐ G2: 5/5",
      "⭐ Software Suggest: 5/5",
      "⭐ Software Advice: 4.9/5",
      "Recognized by Software Suggest as rising star"
    ]
  },
  {
    name: "Danni MLM",
    tagline:
      "DAANI IT Solution Pvt. Ltd. is a trusted name in providing simple and effective software solutions for businesses. They offer web-based and ready-to-use tools that help manage everything from creating content to handling it over time. With DAANI’s platform, companies can take care of daily tasks, organize important information, follow compliance rules, and reduce risks. It’s a smart and reliable way to make business operations smoother and more efficient.",
    badges: [
      "⭐ Capterra: 5/5",
      "⭐ G2: 5/5",
      "⭐ Software Suggest: 5/5",
      "⭐ Software Advice: 5/5",
      "Recognized by Software Suggest as great user experience MLM Software."
    ]
  },
  {
    name: "Netsoft MLM Software",
    tagline:
      "Netsoft MLM is a dedicated MLM software development company that focuses on helping businesses around the world grow through smart and innovative technology. They understand the needs of organizations that sell products or services through network marketing and deliver solutions that are both practical and forward-thinking. With a strong focus on innovation, Netsoft MLM provides the tools companies need to manage their operations, connect their teams, and succeed in a competitive market.",
    badges: [
      "⭐ Capterra: 5/5",
      "⭐ G2: 5/5",
      "⭐ Software Suggest: 5/5",
      "⭐ Software Advice: 5/5",
      "Recognized by Software Suggest as easy implementation software"
    ]
  },
  {
    name: "Neo MLM Software",
    tagline:
      "Neo MLM Software Development Company is a vibrant and forward-looking team dedicated to delivering next-gen MLM software solutions to clients across the globe. With a passion for technology and a drive for innovation, they constantly explore new possibilities to create software that’s not just powerful, but also dependable and user-friendly. By using the latest tools and development practices, Neo MLM ensures that every solution they build helps businesses manage their networks smoothly, scale confidently, and stay ahead in the fast-evolving MLM landscape.",
    badges: [
      "⭐ Capterra: 5/5",
      "⭐ G2: 5/5",
      "⭐ Software Suggest: 5/5",
      "⭐ Software Advice: 5/5",
      "Recognized by Software Suggest as one of the Faster Growing MLM Software Product."
    ]
  }
];

const TIPS: Tip[] = [
  {
    title: "Assess Your Needs",
    description: "List must-have features and integrations."
  },
  {
    title: "Request Demos",
    description: "Most providers offer free demos —test usability and support."
  },
  {
    title: "Check Compliance",
    description: "Ensure the software adheres to US laws and data protection."
  },
  {
    title: "Read Reviews",
    description: "Look for real user feedback on platforms like Capterra and G2."
  },
  {
    title: "Consider Scalability",
    description: "Choose a solution that can grow with your network."
  }
];

const CONCLUSION_PARAGRAPHS = [
  "Network marketing software can contribute a lot to network marketing business. The companies listed above are among the best in USA and provide a variety of quality services to aid in your establishment.",
  "Get ready to take your MLM business to the next level. Explore these top software providers and start your journey towards sustainable growth and compliance."
];

const FAQS: Faq[] = [
  {
    question: "What is MLM software?",
    answer:
      "MLM software is a tailored solution that helps network marketing businesses to manage distributors, track sales, automate commissions, and ensure regulatory compliance."
  },
  {
    question: "Is MLM software legal in the USA?",
    answer:
      "Yes, MLM software is legal in USA, but it should comply with US regulations such as anti-pyramid scheme laws and data protection standards."
  },
  {
    question: "How much does MLM software cost?",
    answer:
      "MLM software Pricing varies widely based on features, user count, and customization. Expect amount from $1,000 to $20,000+ for enterprise solutions."
  },
  {
    question: "Can I migrate to new MLM software?",
    answer: "Most reputable providers offer migration services to help companies for smooth and effective transitions."
  },
  {
    question: "How often should MLM software be updated?",
    answer:
      "Regular updates are required for security, compliance, and access to new features. The best multilevel marketing software vendors usually provides scheduled maintenance or automatic upgrades to keep your platform up to date with legal and industry standards."
  }
];

const DISCLAIMER =
  "Disclaimer : Cloud MLM neither promotes nor supports any of the companies, products, or services mentioned in this article. The information provided here is compiled from publicly available resources within the MLM industry. It is presented solely for informational purposes and does not reflect our preferences, priorities, or any form of paid partnership.";

const AUTHOR = {
  name: "Freddy George",
  role: "Marketing Head",
  bio: "Industry specialist with extensive experience in the MLM sector. Versatile in developing innovative marketing strategies, with a strong passion for artificial intelligence, content marketing, and emerging MLM trends."
};

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Top MLM software platforms in the USA for 2025";
  const description =
    "Compare seven leading MLM software vendors serving US network marketing brands—feature breakdowns, awards, and selection tips.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/top-mlm-software-platforms-in-usa", locale)
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

export default function TopMlmSoftwarePlatformsInUsaPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50 shadow-2xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_68%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.16),transparent_72%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.24),transparent_76%)]" />
        <div className="relative grid gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/30 dark:bg-slate-900/70 dark:text-indigo-200">
              Platform intelligence
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">{HERO.title}</h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{HERO.intro}</p>
            <p className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-sm leading-6 text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
              {HERO.summary}
            </p>
            <Button
              asChild
              className="rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              <Link href={contactHref}>
                Talk to our product specialists
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="space-y-5 rounded-[32px] border border-white/60 bg-white/85 p-8 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Selection criteria snapshot</p>
            </div>
            <div className="grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {CRITERIA.slice(0, 3).map((criterion) => (
                <div key={criterion.title} className="rounded-2xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                  <p className="font-semibold text-slate-900 dark:text-white">{criterion.title}</p>
                  <p>{criterion.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <ClipboardText className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Why choosing the right MLM software matters?</h2>
          </div>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {WHY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <MagnifyingGlass className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Criteria for Selecting Top MLM Software Companies</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            To help you make an informed decision, we evaluated Direct sales software companies based on the following factors:
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {CRITERIA.map((criterion) => (
              <div
                key={criterion.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 text-sm leading-6 text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{criterion.title}</p>
                <p>{criterion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            List of the 7 Best MLM Software Platforms in USA for 2025
          </h2>
        </div>
        <p className="text-center text-sm leading-6 text-slate-600 dark:text-slate-300">
          Here’s our list of the leading MLM software providers trusted by American network marketing companies:
        </p>
        <div className="overflow-x-auto rounded-[32px] border border-slate-200 bg-white/90 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-700">
            <thead className="bg-indigo-500/90 text-left text-xs font-semibold uppercase tracking-wide text-white dark:bg-indigo-600/80">
              <tr>
                <th className="px-4 py-3">Company Name</th>
                <th className="px-4 py-3">Founded</th>
                <th className="px-4 py-3">HQ Location</th>
                <th className="px-4 py-3">Key Features</th>
                <th className="px-4 py-3">Notable For</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, index) => (
                <tr
                  key={row.company}
                  className={cn(
                    "transition",
                    index % 2 === 0 ? "bg-white dark:bg-slate-900/60" : "bg-slate-50/80 dark:bg-slate-900/40"
                  )}
                >
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{row.company}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{row.founded}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{row.hq}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{row.features}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{row.notable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <ChartLineUp className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-center text-slate-900 dark:text-white">
            A comparative review of Top 7 MLM software platforms In USA
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {PROVIDERS.map((provider) => (
            <div
              key={provider.name}
              className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{provider.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{provider.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {provider.badges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">How to Choose the Right MLM Software?</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            Selecting the right software for your business is a difficult task. Software can significantly impact the success and efficiency of your MLM business. With plenty of options out there, it is crucial to choose a solution that fits your business model and future plans. The right software will be able to support your operations, simplify complex tasks, and scale with your growth. Here are some essential tips to help guide your selection process.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {TIPS.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 text-sm leading-6 text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <p className="font-semibold text-slate-900 dark:text-white">{tip.title}</p>
                <p>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            {CONCLUSION_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl border p-5 text-sm leading-6",
                  index % 2 === 0
                    ? "border-indigo-200 bg-indigo-50/80 text-indigo-800 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200"
                    : "border-emerald-200 bg-emerald-50/80 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200"
                )}
              >
                <p className="font-semibold text-slate-900 dark:text-white">{faq.question}</p>
                <p className="mt-2 text-slate-700 dark:text-slate-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="rounded-3xl border-l-4 border-sky-500 bg-slate-50/80 p-5 text-sm leading-6 text-slate-700 dark:border-sky-500/60 dark:bg-slate-900/70 dark:text-slate-300">
          {DISCLAIMER}
        </p>
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
