import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  Layers,
  LifeBuoy,
  Palette,
  ShieldCheck,
  Zap
} from "lucide-react";
import { DiamondsFour } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type FeatureItem = {
  title: string;
  descriptions: string[];
};

const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "Easy to operate and user-friendly",
    descriptions: ["Amount gained/achieved by the payout can be moved to e-Wallet."]
  },
  {
    title: "Easy to operate and user-friendly",
    descriptions: [
      "The Cloud MLM Software is simple, because of its easy to use user interface and automation features. It makes easy for anyone with basic internet knowledge. Altogether it's a 100% user-friendly Software available in online market."
    ]
  },
  {
    title: "Fast, Secure, Reliable MLM software",
    descriptions: [
      "Cloud MLM Software is the Fastest, Secure and a reliable solution to make the system to work smooth. Users can process their payment transactions much secure using Cloud MLM Software."
    ]
  },
  {
    title: "Custom made MLM Software",
    descriptions: [
      "Cloud MLM Software can be easily customized to any type of MLM Compensation Plan like Binary, Matrix, Uni-level, Board, Stair Step and to any other custom compensation plan."
    ]
  },
  {
    title: "Customizable look and Ambiance",
    descriptions: [
      "Everyone wants their website to look at its best. All look and ambiance created by Cloud MLM provides your market position in three ways. a professional look, high contrast and superior perception. In a custom look and amp feel, the basic components like buttons, colors and images can be interchanged with your plan in mind."
    ]
  },
  {
    title: "Open Source MLM software - Built With Modern Open Source Technologies",
    descriptions: [
      "The Cloud MLM software is developed using up-to-date web technologies like PHP, MySQL, Drupal, Ajax, jQuery, JSON and more. modern facilities of Laravel is also resolved in our software."
    ]
  },
  {
    title: "Help And Support",
    descriptions: ["Cloud MLM software offers an online help tool to learn more about Cloud MLM Software along with 24*7 support."]
  },
  {
    title: "Free MLM software instant demo",
    descriptions: ["Our Company presenting MLM Software Demo for one month with free of cost. You can begin your software with a free demo right now."]
  },
  {
    title: "Total Web-based Solution",
    descriptions: ["Cloud MLM Software is the complete online solution which can be handled flexibly from everywhere every time over the web."]
  },
  {
    title: "Fully featured dashboard",
    descriptions: [
      "We offer you, mutual dashboard that allows you to understand earning details, up to date registered members, payment earned, site enumeration, latest added FAQ, and all that in between. Your dashboard also contains inline tips, important information and useful links to make sure you get the best from your store. Now you can look into with accurate details with intelligence dashboard about your site."
    ]
  },
  {
    title: "Easy to Port Any Design Template",
    descriptions: ["Cloud MLM Software can handle any design template to get the look and feel of your branded website. You can change the software as per your needs."]
  },
  {
    title: "Add Multiple Products",
    descriptions: ["The powerful software provide the flexibility to add multiple products with various registration cost, Commission, P.V. etc."]
  },
  {
    title: "Integrated with CMS Technologies",
    descriptions: [
      "Our web based MLM software is depends on a Content Management System with pages developed Dynamically. The CMS lets on Admin to adjoin, change and remove the content with your satisfaction in the site."
    ]
  },
  {
    title: "E-pin management system & Automatic Payment Processing",
    descriptions: [
      "Cloud MLM software provides the safe mode of accumulation and transferring of the payment by using Payment Gateway using E-Wallet and E-Pin."
    ]
  },
  {
    title: "E-Pin",
    descriptions: [
      "It is a secure code created by the software, its generates safe purchasing of the product, joining etc and through this you can transfer the amount to another member."
    ]
  },
  {
    title: "E-Wallet",
    descriptions: ["All the funds are added in E-wallet, Using this can buy Products."]
  },
  {
    title: "E-commerce",
    descriptions: [
      "Cloud MLM software is integrated with E-Commerce Shopping Cart, the Online Product Purchasing makes simple by using Cloud E-Commerce Software Solution."
    ]
  },
  {
    title: "Multi currency",
    descriptions: [
      "Cloud MLM software supports  Multi Language and Multi Currency system. This is one of our powerful feature, which provides the user freedom to modify language and currency with easy user interface."
    ]
  },
  {
    title: "Strong Backup System",
    descriptions: ["With our backup system, the customer can build up software to any former stage without any loss of data."]
  },
  {
    title: "Website Replication",
    descriptions: [
      "Cloud MLM software Supports Website Replication, the new customer will receive their own customized website to market their business more efficiently. We offer you the best and professional Self-Replicating Websites."
    ]
  },
  {
    title: "Multi User / User Level Permission",
    descriptions: [
      "Through our Cloud MLM software,the admin can allow the clients with a permission level. It includes the authorization to do add a page ,modifying a page and removing a page etc."
    ]
  },
  {
    title: "Complete Audit trail / System Log formation",
    descriptions: [
      "All of our power packed web based MLM software allows a complete record system. Logs and system records are planned for all the entries done by the customer when he /she is logged (Audit trial) along with Date time, IP, session so that there is no moment that is missed."
    ]
  },
  {
    title: "Data Dump export feature",
    descriptions: [
      "Our excellent Cloud MLM software's provides an excel dump of the expert data to be taken so you never loose any data."
    ]
  },
  {
    title: "Dynamic Tax calculations",
    descriptions: [
      "Cloud MLM software solutions help you file taxes for your MLM business effortlessly according to your specific scheme. Our reliable software manages all tax calculations, including TDS and admin charges deducted from member commissions. Additionally, the Cloud MLM software features a dynamic tax system, allowing automatic tax calculations based on your requirements. With our software, you can easily file taxes for your MLM business without any hassle."
    ]
  },
  {
    title: "Easy Integration with SMS",
    descriptions: [
      "Cloud MLM software SMS Integration allows the software to send an auto SMS on prompting of significant events such as user enrollment, Commission, Payments made etc to the registered member. SMS Integration is fully essential for any MLM compensation plan."
    ]
  },
  {
    title: "Optimized with All Devices",
    descriptions: [
      "Cloud MLM Software is developed using flexible internet style way. It automatically optimizes the page for any device, be it smartphones, desktops,tablets,  and os platforms like android, ios, windows etc"
    ]
  },
  {
    title: "Easy integration with email",
    descriptions: [
      "Using Cloud MLM software E-Mail notification scheme the member will earn all the information of Payout, New joining, payment, birthday reminder etc."
    ]
  },
  {
    title: "Franchise Management",
    descriptions: ["Different franchise can plan the demands and proceeding the plan from company head office."]
  },
  {
    title: "Various Reporting Systems",
    descriptions: [
      "Cloud MLM Software has an ability to dump the reports in different forms like excel, PDF, CSV's etc."
    ]
  },
  {
    title: "Experienced webmaster team",
    descriptions: [
      "Our professional webmasters set up everything on your own and personalize your website behind the given destination or add some services which is not accessible through control board. You can always hire for your project. We trust our professionals build the difference and we inspire their professional development through training programs."
    ]
  },
  {
    title: "Easily design MLM site in minutes",
    descriptions: [
      "We provide simple methods to get your MLM business website online. Creating your website with Cloud MLM is a simple, automatic process. Just add MLM plans, modify your website's matter and organize your matter, add payment gateway facts, upload promotional elements, start mail and features that you need then disclosed it for the world to see."
    ]
  },
  {
    title: "Commissions Management",
    descriptions: [
      "Automatic Renewal of commissions - Cloud MLM software is a powerful software. It calculates and reduces the renewal fees from the user commission immediately. So that you don't have to fear about the difficult computing. Our software does it for you easily.",
      "Easily Modify Commission Structure - Get total control over the plan. The highly responsive Cloud MLM software provides you complete control with the option to change the commission structure including modification of the commission volume payable including Binary, Royalty, Level and donation & payment commissions.",
      "Fully Automated Commission Calculations - Anything may be the pattern of your commission computing our software will do it appropriately. For eg; if your commission computing is daily 3 times, so be it.",
      "a) Our networking marketing software computes the commission as per the commission pattern immediately.",
      "b) simple outlook of the commissions: No need to press any button or open any admin module. Get the estimated commissions are sent in your inbox and mobile as an email and SMS accordingly."
    ]
  },
  {
    title: "User Fund Management",
    descriptions: [
      "Using user fund management, Cloud MLM software allows the admin to add or discard an amount from the member account. This could be in place of the first rewarded to member or extra TDS deduction carried from the commission."
    ]
  },
  {
    title: "Member Management",
    descriptions: [
      "Total Member Management: Created by the professional team of Software Developers, Our Cloud MLM software look upon the end to end member management system. It includes",
      "Member Tree - Admin can look the member tree in a \"upside down\" tree structure. It also consists of noticing facts like which member has promoted ,which other people and other important datas including, Joining data, Product Purchase, promoter and parent Data etc.",
      "Search - Looking for a member using the MLM software",
      "Blocking a member - Our Cloud MLM software simply allows a particular member to be obstructed from the system which avoids them from login in the system.",
      "True Member Management - Change user data using the software.",
      "Member Messaging System - Our power-packed Cloud MLM software enables users to send and receive messages via the software in their user's area.",
      "Promote a Member - Capability to modify the user in a rank based MLM plan."
    ]
  },
  {
    title: "Pin Generation Management",
    descriptions: [
      "In Cloud MLM software admin has the flexibility to create pins, either for franchise or for a user. Each pin is drafted for a specific product. By this pin a new user can also join. Consistent integration of the recently created Pin into a user account: If a pin is created for a user then it will be clear into the users account when he/ she sign in to user module. Also while making a pin for user, the software has an extra chance to send the pin created to the each member by email and/or sms.",
      "Pin Request Management - Its easy. An admin can create a pin across any request for pin generation by a user. The Franchisee can also move the pin to the user across the request. For whatever users are hired by the admin to the franchisee.",
      "Thorough Pin reporting - Our Cloud MLM software offers a complete Pin Report. The report includes the data of all the used Pins besides affiliation with the user.  Unused pins report and blocked pins report.",
      "Integrated Printing option - In Cloud MLM software the admin has the option to take a hard copy of the created pin and provide it to unlisted member using the Software only."
    ]
  },
  {
    title: "Comprehensive Reporting Mechanism",
    descriptions: [
      "The Cloud MLM software solutions realized the requisite to analyze the data. our Cloud MLM software gives all the essential reports that are needed by the managers or the admin of the software. All the reports can be immediately created through the system. Our reports enables feel to your data. Some of our reports include :",
      "Member Joining Report - Cloud MLM software joining report includes the total statistics of new users involving new user joining as per date and location along with whole user data and info.",
      "Payment Report - We  Complete report on the payment done to individual users consists of amount, date etc.",
      "Commission Report - Cloud MLM software gives a comprehensive report .It gives a complete details of different types of commission earned by user with other details.",
      "User report - Through Cloud MLM software Get all the facts you ever wanted to know about the users. Gets a comprehensive report on the users consisting user details, DOJ etc."
    ]
  },
  {
    title: "Modules Based Software",
    descriptions: [
      "Get responsive with MLM Modules . Our flexible and strong software has the idea of Modules where in the required modules can easily be plugged as per your needs thereby highly increasing the features of the software. All of our power packed modules presents total control to the admin. These modules include :",
      "News module - CMS based news module.",
      "Pin Transfer Module - Admin can send amount to any franchisee and franchisee can send to any user.",
      "Payment Module - Get whole data of Cheque payment to the users.",
      "Franchise Module - To manage franchisee is simply enable the franchisee module. It allows end to end Franchisee Management.",
      "Product consume Module - A message system to users that, to which leader the company has send his product.",
      "Cheque Printing Feature - Integration of Cheque printing in the software as a module."
    ]
  },
  {
    title: "Payment Gateway",
    descriptions: ["Alert Pay", "Liberty server integration"]
  }
];

const OUTRO_PARAGRAPHS = [
  "We at Cloud MLM always aim to present you with the most excellent MLM software. Our MLM software features are rare than all others. Being an expert in the MLM software development field, We realize and know the complications that can come across in a real-life situation. We assure you by means of our software that we cover all the corner cases possible.",
  "Having a great track record as a MLM Software company, we maintain the highest standards possible in our MLM software development effort. We deliver state-of-the-art network marketing Software power-packed with software features."
];

const AUTHOR = {
  name: "Edward",
  role: "Research Analyst",
  bio: "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments."
};

const ICON_SET: ComponentType<{ className?: string }>[] = [Cpu, ShieldCheck, Palette, Layers, Zap, LifeBuoy];

const ACCENTS = [
  {
    border: "border-cyan-200 dark:border-cyan-500/30",
    background: "bg-gradient-to-br from-cyan-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900",
    icon: "text-cyan-600 dark:text-cyan-300"
  },
  {
    border: "border-pink-200 dark:border-pink-500/30",
    background: "bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900",
    icon: "text-pink-600 dark:text-pink-300"
  },
  {
    border: "border-emerald-200 dark:border-emerald-500/30",
    background: "bg-gradient-to-br from-emerald-50 via-white to-lime-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900",
    icon: "text-emerald-600 dark:text-emerald-300"
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software Features - An Analysis";
  const description =
    "Dive into the complete Cloud MLM Software feature stack—from user management and e-commerce integrations to commission automation, reporting, and enterprise-grade modules.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/mlm-software-features-an-analysis", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FeaturesAnalysisPageProps = {
  params: { lang: SupportedLocale };
};

export default function FeaturesAnalysisPage({ params }: FeaturesAnalysisPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  const highlightedItems = FEATURE_ITEMS.slice(0, 2);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-cyan-100/80 bg-cyan-50/60 py-20 shadow-2xl dark:border-cyan-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-100 via-white to-rose-100 opacity-90 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/60 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl dark:bg-rose-500/20" />
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:border-cyan-500/40 dark:bg-slate-900/70 dark:text-cyan-200">
              <DiamondsFour weight="fill" className="h-4 w-4" aria-hidden />
              Feature intelligence
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              Cloud MLM software features
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              {highlightedItems[1]?.descriptions[0]}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlightedItems.map((item) => (
                <div
                  key={item.title + item.descriptions[0]}
                  className="rounded-2xl border border-white/70 bg-white/80 p-5 text-sm leading-6 text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.title}</p>
                  <p className="mt-2">{item.descriptions[0]}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400"
              >
                <Link href={demoHref}>
                  Experience the live demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Map your feature rollout
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Why this matters</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Platform depth keeps your distributors productive—whether they need faster payouts, replication sites, or dynamic compensation
                logic.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/80 p-6 dark:border-cyan-500/30 dark:bg-cyan-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-200">Quick reminder</p>
              <p className="mt-2 text-sm leading-6 text-cyan-900 dark:text-cyan-100">
                Every module is cloud-ready and configurable—switch on what you need now, expand as compensation plans evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Explore every capability in the suite</h2>
          <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
            Browse 38 features powering Cloud MLM Software. Each capability mirrors the original implementation—ready to run, easy to configure,
            and built for global growth.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {FEATURE_ITEMS.map((item, index) => {
            const Icon = ICON_SET[index % ICON_SET.length];
            const accent = ACCENTS[index % ACCENTS.length];
            const [primary, ...rest] = item.descriptions;

            return (
              <div
                key={`${item.title}-${index}`}
                className={`relative overflow-hidden rounded-3xl border ${accent.border} ${accent.background} p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-white/40 blur-3xl dark:bg-white/5" aria-hidden />
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm ${accent.icon}`}>
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{primary}</p>
                {rest.length > 0 ? (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                    {rest.map((entry) => (
                      <li key={entry} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
          {OUTRO_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-200">
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400"
            >
              <Link href={featuresHref}>
                Review the full feature map
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={contactHref}>
                Plan your implementation
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">About the author</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
          </div>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50/80 p-6 dark:border-cyan-500/30 dark:bg-cyan-500/10">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-200">Need a feature walkthrough?</p>
            <p className="mt-2 text-sm leading-6 text-cyan-900 dark:text-cyan-100">
              We co-create dashboards, automation, and onboarding flows so every module launches with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
