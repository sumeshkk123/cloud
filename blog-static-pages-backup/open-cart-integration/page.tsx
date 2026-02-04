import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Layers, Puzzle, Settings, Sparkles } from "lucide-react";

export const dynamic = "force-static";

const OVERVIEW_PARAGRAPH =
  "This means that customers can sign up for email publication campaigns through the online shopping system. Open cart is a feature rich, easy to use, search engine friendly and with a visually attractive interface. with a wonderfully created e-commerce solution. It is a powerful E- commerce shopping cart solution for internet marketer that allows you to create a fast and simple online store to sell your products and services online in no time at all. Cloud MLM Software can integrate Open cart MLM Software for a flexible online transaction.";

const DEVELOPMENT_PARAGRAPHS = [
  "Opencart is user friendly and provides a enormous collection of splendid features that make for an charming and productive shopping experience. An Open Cart website design is, easy-to-use, visually impressive and search engine friendly. So you can simply optimize it and earns profits of online business web development.",
  "Our quick, extensible and inexpensive Open Cart E-Commerce development services help our clients to have an important presence in the online market. Our well proficient Open Cart developers with extensive domain knowledge and proven achievement records have assisted our customers in building a overall potentiality through their alluring and accessible E-Commerce websites. As a universal Open Cart web development company, we handle this platform to make shopping an better experience for the store visitors. Our skilled Open Cart developers help online marketers to invite target shoppers and change them into compensating clients, favorably executing projects according to their business designations."
];

const DEVELOPMENT_SERVICES = [
  "Open Cart software Development",
  "Open cart Module Development",
  "Open Cart subject Development",
  "Open cart transportation Module Development",
  "Open cart Migration",
  "Open cart Template Integration",
  "Open cart Integration",
  "Database Import/Migration to Open Cart",
  "Open cart Customization",
  "Open cart Template Customization",
  "Open Cart Based E-Commerce development",
  "Open Cart Installation",
  "Open cart SEO",
  "Payment Gateway Integration",
  "Open cart Regular Updates",
  "Server Configuration & Deployment"
];

const DEVELOPMENT_NOTES = [
  "Being a first-class Open Cart development company, Cloud MLM software influences the profits of the MVC structure to build an E-Commerce store or renovate an existing one. Our fully developed Open Cart development services include all the visible features necessary for the achievement of an online store like the design of your website, functionality of the code and the marketing initiatives.",
  "We design profit for our customers with our entire Open Cart E-Commerce integration , always attempt strong to surpass their expectations. Our wide range of Open Cart E-Commerce development services include everything from structure the shopping cart to personalization of your online store, establishing Open Cart based templates or themes and SEO of your eCommerce website. We can also assist you to modernize your already existing e-Commerce store on Open Cart.",
  "Cloud MLM Software affords you the most excellent services for Open Cart Integration and personalization Services. Cloud MLM Software can establish a custom-made Open Cart web development solution with the features such as large scale Products, producers and levels, 20+ Payment Gateways, Multi Currency, comprehensive Info Pages,RMA Systems (Returns), Search Engine Optimization (SEO), Automated Image Resize, Shipping Weight,  Discount Coupon System, Sales Reports and more. We afford you very energetic, much easier, highly extensible and inexpensive open cart solutions with secure and easy online payment."
];

const MODULES_PARAGRAPH =
  "Opencart modules are similar to add -ons, components or developments in other content management systems. Its through modules that open cart gives us the capability to develop its performance without having to edit the program’s files. As with many other content management systems,its commonly treated to be a most excellent process to develop functionality of the core application through the provided APIs and open cart is no different. Modules allows us to add, delete or change functionality of the core application that’s done in a categorized and feasible manner.";

const DEV_FEATURES_INTRO = "Some of the opencart development features are";
const DEV_FEATURES = [
  "Extensive Categories",
  "Extensive Products",
  "Producers and Categories",
  "Multi Currency",
  "20+ Payment Gateways",
  "Extensive Information Pages",
  "Product analysis/Ratings",
  "Automated Image Resizing",
  "Various Tax Rates Sales Reports and more",
  "Shipping Weight estimation",
  "Discount voucher System",
  "Search Engine Optimization (SEO)",
  "Support & Restore Tools"
];

const MULTI_STORE_NOTE = "Our other Opencart feature has multi-store capabilities that enable you to manage multiple stores from one admin interface.";

const KEY_FEATURES_PARAGRAPH =
  "The important features involves extensive products, multi-currency, sales report and so on. Though, Magento offers great improvements and customization options. It also include dynamic dashboard, pricing, management of product and so on.";

const USER_FRIENDLY_PARAGRAPHS = [
  "If you require a shopping cart that you can simply transfer any products to, enter your PayPal details, and open shop then Open Cart is as easy as it gets. It comes with a highly accepted default template significant for a group of E-commerce stores and the admin ‘back-end’ of the site is fairly designed and very sensitive.",
  "The Opencart union of developers have developed an unlimited collection of modules (both free and commercial) that you can affix into your site to increase its performance with only a few clicks of your mouse. And if you need to redesign the appearance of your Open Cart site quickly and comfortably there is a growing list of third-party templates that enables you to modify your site’s design – again with only a few clicks of your mouse."
];

const REPLICATED_CART_PARAGRAPH =
  "To replicate your Cart means to enables a custom made copy of your Cart to be displayed by another user of your company, i.e. sales force. Our software consists of a comprehensive amount of marketing facilities for your users to better support their replicated cart.The entire profit in the replicated cart is paid off to the sponsor. Receive commissions from store sales and enlistment.";

const BENEFITS_HEADING_NOTE =
  "Benefits of using Opencart Integration with Cloud MLM Software for your business are";
const BENEFITS_LIST = [
  "Opencart is a well designed, feature rich, user friendly, search engine friendly E-Commerce solution",
  "It is one of the responsive PHP based platforms for your website development.",
  "Using Opencart for your business solution can deliver with extensive categories and various currency support.",
  "Opencart software that occupying on PHP and MySQL directory management system",
  " It comes with presence of tools that important for building, launching and directing an outstanding E- commerce website store without paying any authorization fee or enrollment process.",
  "Open Cart development service is up to date in its own way which provides shopping cart software having less clumsy directory but faster processing.",
  "Even though Open Cart development service is not inefficient it can accomplish an extensive size of data and all the products can be saved easily.",
  "As the process of Open Cart development, all the precise details accessible in the Open Cart is taken into consideration. so that, the profit of our Open Cart development procedure is excellent. It aids with many shipping approaches correlated to any other open source platforms existing till date.",
  "It doesn’t aid the website entrepreneur with product disadvantages and extensive products can be sold online using Open Cart. "
];

const OFFERINGS = [
  "Open Cart Design, Development and Integration",
  "Open Cart Customization",
  "Open Cart E-Commerce Store Development",
  "Open Cart Responsive Design",
  "Open Cart Setup and Installation",
  "Open Cart Payment Gateway Integration",
  "Open Cart Custom Module Development",
  "Open Cart Theme Design & Development",
  "Open Cart Plugin Development",
  "Open Cart SEO Services",
  "Open Cart Data Migration",
  "Open Cart Website improvement and Maintenance",
  "CRM, ERP SAAS Integration",
  "B2B/B2C Web Portals",
  "Social Web Applications",
  "Web CMS Development",
  "Shopping Cart Developments",
  "Payment Gateway Integration",
  "Multi Language Support",
  "3rd Party App Integration",
  "Java Support",
  "Video Streaming Solutions",
  "SEO Friendly Structures"
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
  const title = "Open Cart Integration";
  const description =
    "Explore how Cloud MLM Software integrates Open Cart—covering development services, modules, key features, and business benefits for scalable e-commerce operations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/open-cart-integration", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OpenCartIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function OpenCartIntegrationPage({ params }: OpenCartIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-indigo-100/70 bg-indigo-50/60 py-20 shadow-2xl dark:border-indigo-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.3),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_70%)]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-500/20" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/40 dark:bg-slate-900/70 dark:text-indigo-200">
              <ShoppingCart className="h-4 w-4" aria-hidden />
              Integration spotlight
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">Open Cart integration</h1>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{OVERVIEW_PARAGRAPH}</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Why integrate</p>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Combine MLM genealogy, commission payouts, and Open Cart storefronts so distributors can sell confidently while finance teams stay
                in sync.
              </p>
            </div>
            <Button
              asChild
              className="bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              <Link href={contactHref}>
                Request integration guidance
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Opencart development</h2>
            </div>
            {DEVELOPMENT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Settings className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Development services include</h2>
            </div>
            <ul className="grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {DEVELOPMENT_SERVICES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          {DEVELOPMENT_NOTES.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="inline-flex items-center gap-3">
            <Puzzle className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Modules and feature set</h2>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-700 dark:text-slate-200">{MODULES_PARAGRAPH}</p>
          <p className="mt-6 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">{DEV_FEATURES_INTRO}</p>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:grid-cols-2">
            {DEV_FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{MULTI_STORE_NOTE}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Key features</h2>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{KEY_FEATURES_PARAGRAPH}</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">User-friendly integration</h2>
            {USER_FRIENDLY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Replicated cart</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-200">{REPLICATED_CART_PARAGRAPH}</p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Benefits</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{BENEFITS_HEADING_NOTE}</p>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:grid-cols-2">
            {BENEFITS_LIST.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Opencart development offerings</h2>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container space-y-4 rounded-3xl border border-indigo-100 bg-indigo-50/80 p-8 shadow-xl dark:border-indigo-500/30 dark:bg-indigo-500/10">
        <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-100">Power your store with Cloud MLM Software</h2>
        <p className="text-sm leading-6 text-indigo-900 dark:text-indigo-100">
          Align Open Cart storefronts with MLM compensation, analytics, and compliance—without sacrificing customer experience or distributor
          agility.
        </p>
        <Button
          asChild
          className="bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          <Link href={contactHref}>
            Schedule a technical walkthrough
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
