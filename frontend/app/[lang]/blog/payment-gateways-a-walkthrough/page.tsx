import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Lock, Shield, Workflow } from "lucide-react";

export const dynamic = "force-static";

const INTRO_PARAGRAPHS = [
  "This service facilitates payment transaction between the payment portal like websites, mobile phones or interactive voice response services and acquiring bank by the transfer of information.",
  "Nowadays, online business is very common among the people. But when choosing payment gateways for your business; you should have some deep professional knowledge about it. In MLM business, the responsibility is very important to achieving success in MLM industry. A payment gateway is a great tool that helps to encourage visitors of your store about your credibility.",
  "According to some studies, the online customers would like some payment options when making purchases.",
  "Cloud MLM software is very secure to use with payment gateways.",
  "We are offering multiple payment gateways. It definitely impact customer fulfillment and trustworthiness. Moreover, payment security does matter as each customer has to be sure about their data safety. Payment gateway is the payment procedure which facilitates a website to accept credit cards for the online shopping and e commerce systems. It helps to the payment transaction through the transfer of information between the payment portal like a website, mobile phone etc and the acquiring bank.",
  "These payment gateways improves the communication within banks .our cloud MLM software solutions presents in front of you the most efficient and best e commerce platforms /payment gateways. We have emerged as a top choice among our customers because of its advanced features of payment gateways. Its have Omnichannel capabilities, advanced security methods and fraud management tools. Security is a very important point to be considered in payment gateways. In payment gateway includes the credit cards numbers that are very sensitive data’s. It must be protected from any fake parties. So the card associations have created a set of rules and security standards for access the card information including gateways. This set of rules and security standards are called PCI [payment card industry data security standards] [PCI –DSS]. Cloud MLM software solutions offer the most secure credit cards payment gateways. Through this your customers can make quick and efficient payments with just a click .",
  "We facilitate merchants with added options when a card holder purchases a service or product. Besides, we given that the ability to real time transactions, these providers can help to translate currencies amongst the two parties in different countries. As well as bridge language and payment methods, payment gateways usually charge those who use them as per transaction fee."
];

const BENEFITS_HEADING = "Benefits of using payment gateways";
const BENEFITS_LIST = [
  "The payment gateways allow all credit cards, debit cards and ACH payments with fast and secure account verification.",
  "It allows swipe or hand key payments via multiple interfaces such as mobile, POS system; software integration, shopping carts and payment plug- ins etc.",
  "It helps to develop business operations with advanced management functions like profits, batching, reports, user permission and voids.",
  "It makes safe your business and your consumer’s data by complying with PCI standards."
];

const IMPORTANCE_HEADING = "Importance of using payment gateways";
const IMPORTANCE_PARAGRAPH =
  "When the online shopping and bill payment quickly increases, raise the need for merchants to use a secure online payment gateway system .in this modern age this system helps the merchants to develop their business by improving customer services, increasing profits and minimize late payments. Payment gateway services are called the heart of e commerce which enables transaction online. Selecting the right payment gateway for your online business can help you to save money and keep your business running efficiently. It is particularly intended to accommodate the growing demand by e commerce MLM companies for complicated multi currency payment solutions to tap the opportunities for worldwide internet transactions.";

const FEATURES_HEADING = "Features";
const FEATURES_LIST = [
  "Our payment gateway system provides strong functionality that helps you to increase sales while running a better business.",
  "High performance ,reliability and fast transaction processing",
  "Full security and privacy features protecting you and your customers",
  "Recurring billing",
  "Transaction reporting tools",
  "Easy to integrate web services APIs",
  "Tokenization",
  "Secure Hosted Payment Forms [SHPF]",
  "ACH payments",
  "Large ticket processing",
  "Accounting software integration",
  "A suit of fraud management tools"
];

const MLM_INTEGRATION_HEADING = "Payment gateway integration in MLM business";
const MLM_INTEGRATION_PARAGRAPHS = [
  "Today, the payment gateways are important as online world. The making or receiving online payments without payment gateway is not easy.ThIs electronic payment system called payment gateways are used in online business, online shopping, e commerce etc. in MLM business industry, this system commonly used for money transaction. It is a very secure medium to make payments and it encrypts sensitive information in digital format.",
  "Our cloud MLM software solutions integrated with payment gateway system .through this system you can automatically lists the transaction that is created by merchants. The transaction includes signing up new members, member renewals, online registration, buying new products, online purchase, bonuses etc.",
  "When a transaction is occurred, it is read by the processor and inform credit card about the amount charged. Then the additional notification is sent by the merchant and the details of transactions are kept in online merchant account and the same details are forwarded to user‘s bank account via EFT [Electronic Fund Transfer].",
  "Our company not only works for MLM software but also for other online shipping and e-commerce systems . we assure that the security of the payment gateway system by integrating it to the various service providers like PayPal, payout etc.",
  "Cloud MLM software solutions provide the payment gateway system and it connects with a global network of banks, so you can grow your E-commerce business faster. Our highly experienced professionals and technical team works for payment gateway integration. We integrate complete, fast secure, and reliable payment gateway systems for our customers."
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
  const title = "Payment Gateways: A Walkthrough";
  const description =
    "Learn how payment gateways empower MLM businesses—from security and PCI compliance to key features, benefits, and full integration within Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/payment-gateways-a-walkthrough", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PaymentGatewayWalkthroughPageProps = {
  params: { lang: SupportedLocale };
};

export default function PaymentGatewayWalkthroughPage({ params }: PaymentGatewayWalkthroughPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-rose-100/80 bg-rose-50/70 py-20 shadow-2xl dark:border-rose-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.3),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2),transparent_70%)]" />
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/40 dark:bg-slate-900/70 dark:text-rose-200">
              <CreditCard className="h-4 w-4" aria-hidden />
              Payment insights
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">Payment gateways: a walkthrough</h1>
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Why integrate securely</p>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Customers commit to your brand when transactions are convenient and protected—PCI compliance is non-negotiable for scalable MLM
              growth.
            </p>
            <Button
              asChild
              className="bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              <Link href={contactHref}>
                Review your gateway options
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{BENEFITS_HEADING}</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200 sm:grid-cols-2">
            {BENEFITS_LIST.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Shield className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{IMPORTANCE_HEADING}</h2>
            </div>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{IMPORTANCE_PARAGRAPH}</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <div className="inline-flex items-center gap-3">
              <Workflow className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{FEATURES_HEADING}</h2>
            </div>
            <ul className="grid gap-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {FEATURES_LIST.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="inline-flex items-center gap-3">
            <Lock className="h-6 w-6 text-rose-600 dark:text-rose-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{MLM_INTEGRATION_HEADING}</h2>
          </div>
          <div className="mt-4 space-y-4">
            {MLM_INTEGRATION_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
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
