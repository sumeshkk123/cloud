import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "E-Commerce Website Services – Something to Remember";
  const description =
    "Understand e-commerce fundamentals and discover how Cloud MLM Software delivers customised shopping portals, payment gateways, and global-ready experiences.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/e-commerce-website-services-something-to-remember", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EcommerceServicesPageProps = {
  params: { lang: SupportedLocale };
};

export default function EcommerceServicesPage({ params }: EcommerceServicesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(14,165,233,0.28),transparent_60%),radial-gradient(circle_at_82%_24%,rgba(249,115,22,0.22),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                Digital commerce · Platform engineering
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                E-commerce website services – something to remember
              </h1>
              <p className="text-lg text-slate-700">
                In modern industrial society, the number of internet users grows, so online shopping and e-commerce are also growing up. In this,
                business transactions occurred through electronic means, including the internet, computer, televisions, and telephones. The words
                e-business and e-commerce are used interchangeably. The term e-tail is also used in transactional processes for online shopping.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-sky-600 text-white hover:bg-sky-500">
                  <Link href={demoHref}>
                    Tour an e-commerce deployment
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Plan your commerce roadmap
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 text-sm leading-relaxed text-slate-600 shadow-xl shadow-sky-100">
              <p>
                E-commerce or electronic commerce is a type of business model system of trading in services or products via computer networks, such as
                the internet or online social networks. Through this system, buying and selling of products and services happen over the internet.
                These business transactions occur as business to business, business to consumer, consumer to business, or consumer to consumer. Today
                we have got almost any product or services via e-commerce, from books and music to financial services and air tickets.
              </p>
              <p className="mt-4">
                This allowed firms to enhance an existing market position or to establish a market presence by providing a cheaper and more efficient
                distribution chain for their products or services. One example of a firm that has successfully used e-commerce is a Flipkart. Flipkart
                is a mass retailing firm that not only has physical stores, but also has an online store where the customer can purchase everything
                from this online store. Many believe e-commerce will soon be the main way to complete business transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Advantages of e-commerce</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              The online stores may offer customers a selection of goods that they otherwise could not access.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              Through the online stores, easily locate the products and services and can be delivered to your door in just days. There is no waste of
              time.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              In e-commerce, every product and services are at the tip of your fingers on the internet. When you type in the product you are looking
              for into online stores, every option will appear in well organized in a matter of seconds.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              There is no more waiting for the checks to clear with e-commerce. Transactions are cleared immediately through the banking system.
            </p>
          </article>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Welcome to Cloud MLM Software</h2>
          <p className="text-lg text-slate-600">
            Cloud MLM software is a uniquely competent, professional, creative website designing, and network marketing company providing fully
            featured network marketing solutions and web services including B2B and B2C e-commerce solutions. In this fast-growing IT industry, our
            software applications help our customers to create and establish successful online initiatives in various online business fields like
            e-commerce solutions, web development, web designing, web hosting, network marketing, multimedia presentation, and search engine
            optimization.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">E-commerce website services from Cloud MLM Software</h3>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                E-commerce with a multi-level marketing business is in very demand nowadays. Through these combinations, the MLM networker and MLM
                leaders can become the proprietor of a successful business. The proprietors purchase the products and services from various MLM
                shopping portals and sell those products to other clients and earn a profit.
              </p>
              <p>
                Cloud MLM software provides the best featured, customized shopping cart for e-commerce website web portal development by integrating
                the MLM concept. We have developed many e-commerce websites/portals for both domestic and international clients. Our team has great
                experience to develop and design e-commerce websites/portals and providing continuously software support to their clients.
              </p>
              <p>
                Our company provides leading payment options like credit cards, debit cards, e-wallets, net banking, and cash on delivery system. We
                offer mobile-friendly web development and mobile apps across all platforms assured extended availability for your e-commerce portal.
                Cloud MLM software constantly provided services across diverse industry domains. We offer great support to develop an online shopping
                platform with its expertise and experienced services in this field. With a talented and expert team of young professionals and
                experienced developers, our company strives to offer quality solutions to our customers.
              </p>
            </div>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                Cloud MLM software connects you instantly with the whole world and opens up new possibilities with new markets to explore. We apply
                innovative design concepts, technologies, and modern tools to develop the project successfully. We also integrate the payment gateway
                to your websites for accepting online payments.
              </p>
              <p>
                Our e-commerce development is perfect for both portals selling only a few items and portals with multiple categories. We not only
                create a platform to sell products but also to communicate with customers. The proficient and veteran web strategist in our company
                uses the complete IT services which help in website promotions on Google, Yahoo, AOL, and other search engines. Our professionals,
                designers, and developers try to combine their thoughts and skills to provide the best services as per the business requirements of
                our clients.
              </p>
              <p>
                Cloud MLM software has been the innovator in this e-commerce development field and has developed and designed many stores. We assure
                you to keep your business in an evolving marketplace. The efficient team of our company is best to design and develop the best and
                specialized online shopping platform to meet all your business objectives in a very hassle-free manner.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100 via-white to-orange-100 p-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">Ready to modernise your digital storefront?</h2>
          <p className="mt-3 text-lg text-slate-600">
            Achieve MLM success with smart AI-driven tools. Automate, manage, and grow your network effortlessly. Buy now and scale your business!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-sky-600 text-white hover:bg-sky-500">
              <Link href={demoHref}>
                Schedule a strategy workshop
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-sky-300 text-sky-700 hover:bg-sky-100">
              <Link href={pricingHref}>
                Explore solution tiers
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
        <p className="text-center text-sm text-slate-600">
          Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate
          about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable
          insights, and staying ahead of industry developments.
        </p>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
