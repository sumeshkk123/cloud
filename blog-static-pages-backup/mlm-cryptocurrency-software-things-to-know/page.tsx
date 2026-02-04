import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Lock, Presentation, TrendingUp } from "lucide-react";
import { CurrencyBtc } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS: string[] = [
  "Welcome to the world of digital currencies. We are witnessing continuous evolution in almost every sector. Finance is no exception. With the advent of blockchain technology, financial management has become more convenient. Cryptocurrencies claimed importance over traditional transactions and gave a new outlook to payment procedures.",
  "MLM companies are rapidly integrating cryptocurrencies into their software. In this way, they can enhance both MLM businesses and cryptocurrency trading. In this write-up, we are going to evaluate the benefits and features of cryptocurrency trading MLM software. Stay tuned!"
];

const CRYPTO_HEADING = "What is Cryptocurrency";

const CRYPTO_PARAGRAPH =
  "Cryptocurrencies are digital currencies that operate on a decentralized network called blockchain technology. Unlike traditional currencies, they offer several advantages. They are not controlled by a single authority like banks or governments and individuals are free to make transactions directly with each other. Cryptocurrencies use cryptography for security and the transactions are verified and recorded in the blockchain. You can’t make any changes once a transaction is placed on the blockchain. In this way, these virtual currencies ensure security.";

const BITCOIN_PARAGRAPH =
  "The first cryptocurrency, Bitcoin was used for several purposes and gained popularity. Since then, thousands of other cryptocurrencies like Ethereum, Ripple, and Bitcoin have been developed, each with itsown unique features and benefits.";

const CRYPTO_BENEFITS = [
  "Decentralization",
  "Security",
  "Lower transaction costs",
  "Accessibility",
  "Financial inclusion",
  "Fast transaction",
  "Privacy"
];

const MLM_SOFTWARE_HEADING = "What is MLM software?";

const MLM_SOFTWARE_PARAGRAPH =
  "MLM software aka network marketing software is a specially designed tool that allows people to manage and operate their multi-level marketing business.";

const MLM_SOFTWARE_PARAGRAPH_2 =
  "MLM software handles everything including tracking sales, managing commissions and bonuses, and keeping track of downlines and their performance. In addition, it generates reports and provides the necessary tools to facilitate the complex structure of the MLM business.";

const HOW_WORKS_HEADING = "How does cryptocurrency MLM software work?";

const HOW_WORKS_PARAGRAPH =
  "In this ever-changing business world, the integration of MLM software and cryptocurrencies has created hype. With the exciting and dynamic world of cryptocurrency trading, entrepreneurs can combine the potential for substantial earnings through MLM structures.";

const FUSION_HEADING = "The fusion of MLM and cryptocurrency";

const FUSION_PARAGRAPH =
  "MLM, or network marketing, is a business model that sells products and services through sales representatives. The two ways of earning income through this model are by directly selling products and services to potential customers and by recruiting people to the network.";

const FUSION_PARAGRAPH_2 =
  "Network marketing creates a hierarchical structure where each member has their own downline, and they earn commissions from their personal sales as well as the sales of one’s recruits.";

const ROLE_HEADING = "The role of cryptocurrency MLM software";

const ROLE_INTRO = "Here are some of the advantages of using cryptocurrency network marketing software.";

const ROLE_POINTS = [
  {
    title: "Efficient management of downlines",
    description:
      "The sales representatives within an MLM organization are organized in a pyramid-like structure. Sometimes, it is very difficult to manage this complex structure. Cryptocurrency direct selling software streamlines this process by providing effective tools to monitor the performance of downline members, track sales, and calculate commissions."
  },
  {
    title: "Secure transactions",
    description:
      "MLM cryptocurrency software encompasses robust security features to ensure the safety of transactions. The encryption protocols and authentication processes protect both the organization and its members. Direct selling businesses can reach new heights through metaverse technologies. The adoption of these virtual technologies is revolutionizing the industry in an unexpected way. The constant evolution of innovations and technology has formed a strong foundation for the network marketing industry. Therefore, it is crucial to know the potential capabilities of the metaverse."
  },
  {
    title: "Customizable compensation plans",
    description:
      "What makes MLM compensation companies so special is that they often have compensation packages to reward their distributors at multiple levels. MLM cryptocurrency software allows for the customization of MLM compensation plans to suit the specific requirements and objectives of the business."
  },
  {
    title: "Real-time reporting and analytics",
    description:
      "It is very important to track sales, commissions, and the overall performance of the MLM network. The software provides real-time reporting and enables businesses to make informed decisions and adjustments if needed."
  }
];

const ROLE_COMPANY_HEADING = "Role of cryptocurrency MLM software development company";

const ROLE_COMPANY_INTRO =
  "If you want to skyrocket your MLM cryptocurrency venture, you have to choose the right cryptocurrency MLM software development company. Here are some key factors to consider;";

const ROLE_COMPANY_POINTS = [
  {
    title: "Experience and expertise",
    description:
      "Choose a reputed company with a proven track record, particularly in the integration of cryptocurrency features. A deep knowledge of both MLM structures and blockchain technology is necessary."
  },
  {
    title: "Customization capabilities",
    description:
      "Every business has unique features and compensation packages. The role of a development company is to offer flexibility to tailor the software to specific needs and compensation plans."
  },
  {
    title: "Security measures",
    description:
      "Because cryptocurrency transactions are sensitive, strong security features are essential. Make sure that the business uses the most recent encryption and authentication standards."
  },
  {
    title: "Scalability and support",
    description:
      "The expectations placed on your software will increase as your MLM company expands. Select a development company that offers solutions that are scalable and provide continuous support and upgrades."
  }
];

const ADVANTAGES_HEADING = "Advantages of using cryptocurrency network marketing software";

const ADVANTAGES_LIST = [
  "Efficient downline management",
  "Secure transactions",
  "Real-time reporting and analytics",
  "Customizable compensation plans",
  "Automated payouts",
  "Low transaction costs",
  "Enhanced trust and transparency",
  "Integration with cryptocurrency wallets",
  "Reduced risk of errors"
];

const CONCLUSION_PARAGRAPH =
  "In conclusion, organisations aiming to innovate in the field of network marketing have a great chance with the integration of MLM and cryptocurrencies. You can enhance the success of your organisation by utilising the appropriate Cryptocurrency MLM software and working with a trustworthy development firm.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Cryptocurrency Software: Things to Know";
  const description =
    "Learn how cryptocurrency-ready MLM software empowers decentralized payments, flexible compensation, and secure downline management for modern network marketers.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/mlm-cryptocurrency-software-things-to-know", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CryptoThingsPageProps = {
  params: { lang: SupportedLocale };
};

export default function CryptoThingsPage({ params }: CryptoThingsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.24),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] text-white">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/60 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              <CurrencyBtc className="h-4 w-4" aria-hidden />
              Crypto-forward MLM
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">MLM cryptocurrency software: things to know</h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-blue-100">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-blue-500 text-white hover:bg-blue-400">
                <Link href={demoHref}>
                  Explore crypto-ready demos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-blue-300 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Map your integration
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-blue-400/40 bg-blue-500/10 p-8 backdrop-blur">
            <div className="flex items-center gap-3 text-blue-100">
              <div className="rounded-2xl bg-blue-400/20 p-3">
                <TrendingUp className="h-6 w-6" aria-hidden />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide">Digital-first payouts</p>
            </div>
            <p className="text-sm leading-6 text-blue-100/80">
              Combining blockchain reliability and MLM compensation keeps distributor networks agile, transparent, and compliant across borders.
            </p>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{CRYPTO_HEADING}</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{CRYPTO_PARAGRAPH}</p>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{BITCOIN_PARAGRAPH}</p>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Benefits of cryptocurrencies</h3>
          <ul className="grid gap-3 text-base leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2">
            {CRYPTO_BENEFITS.map((benefit) => (
              <li key={benefit} className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{MLM_SOFTWARE_HEADING}</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{MLM_SOFTWARE_PARAGRAPH}</p>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{MLM_SOFTWARE_PARAGRAPH_2}</p>
        </div>
      </section>

      <section className="container">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{HOW_WORKS_HEADING}</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{HOW_WORKS_PARAGRAPH}</p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{FUSION_HEADING}</h3>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{FUSION_PARAGRAPH}</p>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{FUSION_PARAGRAPH_2}</p>
          </article>
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{ROLE_HEADING}</h3>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{ROLE_INTRO}</p>
            <div className="space-y-4">
              {ROLE_POINTS.map((point) => (
                <div key={point.title} className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                  <p className="font-semibold text-slate-900 dark:text-white">{point.title}</p>
                  <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">{point.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{ROLE_COMPANY_HEADING}</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{ROLE_COMPANY_INTRO}</p>
          <div className="space-y-4">
            {ROLE_COMPANY_POINTS.map((point) => (
              <div key={point.title} className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                <p className="font-semibold text-slate-900 dark:text-white">{point.title}</p>
                <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-100/80 p-3 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
              <BarChart3 className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{ADVANTAGES_HEADING}</h2>
          </div>
          <ul className="grid gap-3 text-base leading-7 text-slate-700 dark:text-slate-300 sm:grid-cols-2">
            {ADVANTAGES_LIST.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-xl shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Conclusion</p>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-blue-500 text-white hover:bg-blue-400">
              <Link href={demoHref}>
                Connect crypto commerce
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={contactHref}>
                Align with experts
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">About the author</p>
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
