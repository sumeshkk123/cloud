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
  AlertTriangle,
  ArrowRight,
  Eye,
  KeyRound,
  ListChecks,
  MonitorSmartphone,
  ShieldAlert,
  Sparkles
} from "lucide-react";
import { Detective, Fingerprint, Virus } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type TipCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type ListSection = {
  title: string;
  description: string;
};

const INTRO_PARAGRAPHS: string[] = [
  "We all know how cryptocurrency has changed the financial landscape. It revolutionized the entire traditional banking system by introducing a decentralized digital currency that operates independently. Bitcoin is the first ever cryptocurrency that uses blockchain technology to operate efficiently and effectively.",
  "Bitcoin is the most popular among all the other cryptocurrencies that have been introduced. Unlike traditional currency, bitcoin is not controlled by any authority, making it a global form of money. Also, it opens doors to high-return investments. For this reason, millions of investors and users worldwide rely heavily on bitcoin for transactions. However, as bitcoin and other crypto currencies gain popularity, they also become targets for various scams. Therefore, it is very important to understand the landscape, take the necessary precautions to avoid such attacks, and prevent fraud.",
  "This blog will give you a complete insight on how to identify fake bitcoin websites, avoid phishing emails, recognize the signs of a bitcoin scam, and follow best practices for secure bitcoin investing."
];

const FAKE_SITE_PARAGRAPHS: string[] = [
  "Fake bitcoin websites are used to trick people into believing that they are real. They mimic legitimate exchanges and wallet providers and collect sensitive information such as private keys and login credentials from users.",
  "You need to spot these imposters before you lose your privacy. Here are some indicators that will help you identify them at an early stage."
];

const FAKE_SITE_INDICATORS: string[] = [
  "Check the URL carefully : Always look for slight alterations in the web address, such as misspellings or the wrong domain.",
  "Look for HTTPS : Secure sites use HTTPS, not HTTP. However, beware as some fake sites might also use HTTPS.",
  "Examine the website’s design : Legitimate websites use a clean and professional website design. They are more polished and attractive. Websites with poor layouts and grammatical errors can be cited as red flags.",
  "Board commission : The members of the board MLM commission structure are called ‘boards’. When specific goals are met, the board splits, creating new opportunities for members to earn as they advance to different boards."
];

const PHISHING_PARAGRAPH =
  "Phishing emails are fake emails that are sent to steal your personal information. Most of the time, these emails appear to come from a trusted sender. So it’s very important to identify such emails and guard your data.";

const PHISHING_TIPS: string[] = [
  "Scrutinize the sender’s email : Legitimate emails from service providers will usually come from a company domain.",
  "Beware of threatening language : Phishing emails have threatening language that urges you to take immediate action.",
  "Do not click on unsolicited links : Avoid unsolicited links or check where they lead before clicking.",
  "Verify Email content with the company : If an email seems suspicious, contact the company directly through a verified contact method to confirm its legitimacy."
];

const SCAM_INTRO =
  "What protects your investments? Surely, the detection of such scam indicators. Let’s see the common signs of a bitcoin scam.";

const SCAM_SIGNS: ListSection[] = [
  {
    title: "Unrealistic promises",
    description: "Guarantees of high returns with little or no risk are a major red flag."
  },
  {
    title: "Unlicensed/unregulated platforms",
    description: "Always make sure that the trading platforms or wallet is legitimate, properly licensed and regulated."
  },
  {
    title: "Lack of transparency",
    description: "Lack of information about the company details such as location, leadership or how the technology works can cause suspicions."
  },
  {
    title: "High pressure tactics",
    description: "The major tactics of scammers are to create a sense of urgency in the investors to make quick decisions with limited time offers."
  }
];

const BEST_PRACTICES_INTRO =
  "How to safeguard your sensitive information is a valid question. Protecting your data is not just a matter of avoiding scammers, it is also about adopting practices that safeguard your investments.";

const BEST_PRACTICES_BULLETS: string[] = [
  "Use Reputable Exchanges and Wallets",
  "Enable Two-Factor Authentication (2FA)",
  "Keep Software Updated",
  "Use Hardware Wallets for Large Amounts",
  "Use Reputable Exchanges and Wallets Stick to well-known and widely respected platforms."
];

const BEST_PRACTICES_DETAILS: ListSection[] = [
  {
    title: "Use Reputable Exchanges and Wallets",
    description: "Stick to well-known and widely respected platforms."
  },
  {
    title: "Enable Two-Factor Authentication (2FA)",
    description: "This adds an extra layer of security to your accounts."
  },
  {
    title: "Keep Software Updated",
    description: "Regularly update your wallet software and mobile or desktop applications."
  },
  {
    title: "Use Hardware Wallets for Large Amounts",
    description: "These provide offline storage and reduce the risk of hacking."
  }
];

const RECOVERY_INTRO = "If you have fallen victim to a bitcoin scam, do not worry. There are certain steps you can take.";

const RECOVERY_BULLETS: string[] = [
  "Disconnect and secure the devices",
  "Report the scam",
  "Change all passwords",
  "Monitor your accounts",
  "Disconnect and secure the devices In order to prevent further damage, disconnect your device from the internet.",
  "Report the scam Contact your wallet provider, the crypto exchange, and law enforcement. Reporting helps prevent future scams.",
  "Change all passwords The matrix commission plan is a grid-like system in MLM, setting specific limits on the number of people you can have at each level.",
  "Monitor your accounts Regularly check and monitor your account and be skeptical about any unusual activity following the scam."
];

const RECOVERY_DETAILS: TipCard[] = [
  {
    title: "Disconnect and secure the devices",
    description: "In order to prevent further damage, disconnect your device from the internet.",
    icon: MonitorSmartphone
  },
  {
    title: "Report the scam",
    description: "Contact your wallet provider, the crypto exchange, and law enforcement. Reporting helps prevent future scams.",
    icon: Detective
  },
  {
    title: "Change all passwords",
    description:
      "The matrix commission plan is a grid-like system in MLM, setting specific limits on the number of people you can have at each level.",
    icon: KeyRound
  },
  {
    title: "Monitor your accounts",
    description:
      "Regularly check and monitor your account and be skeptical about any unusual activity following the scam.",
    icon: Eye
  }
];

const ECOSYSTEM_RISKS: string[] = [
  "As many use bitcoin for their business needs, it is susceptible to security breaches and vulnerabilities. As we all know, bitcoin is managed by a decentralized platform like blockchain, many likely to sell or buy crypto currencies for exchanges. This bitcoin exchange is one of the prevalent cryptocurrency scams.",
  "Also, many small businesses rely on ICO ( Initial Coin Offerings) to increase their capital fund to kick start their business. However the ICOs are relatively unregulated and can be risky for investors. This may allow the scammers to hack the investor’s bitcoin.",
  "Ponzi scheme is another scam that happens in cryptocurrency. It acts as a pyramid scheme and encourages the investors to recruit new members.",
  "Social media scamming is another thing. There are several parties who conduct fake bitcoin giveaways on social media platforms like Instagram and Facebook."
];

const CONCLUSION_PARAGRAPH =
  "Every coin has two sides. While the world of Bitcoin offers vast opportunities, it also requires vigilance and an informed approach to security. By understanding and implementing the guidelines outlined in this guide, you can protect yourself from common scams and invest in cryptocurrencies with confidence.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How to Identify Common Bitcoin Scams";
  const description =
    "Spot fake bitcoin websites, phishing emails, and investment traps with this security playbook covering red flags, best practices, and recovery steps.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-to-identify-common-bitcoin-scams", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BitcoinScamPageProps = {
  params: { lang: SupportedLocale };
};

export default function BitcoinScamGuidePage({ params }: BitcoinScamPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.25),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="h-4 w-4" aria-hidden />
              Crypto security insights
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">How to identify common bitcoin scams</h1>
            <p className="text-lg text-slate-200">
              Protect your investments by learning to recognise malicious websites, phishing attempts, and pressure tactics before they compromise your
              wallets.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-cyan-500 text-slate-900 hover:bg-cyan-400">
                <Link href={demoHref}>
                  Explore fraud mitigation demos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-cyan-400/60 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Consult with compliance experts
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-cyan-400/40 bg-cyan-500/10 p-8 backdrop-blur text-cyan-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide">Critical watchpoints</span>
              <ShieldAlert className="h-5 w-5" aria-hidden />
            </div>
            <p className="text-sm text-cyan-100/80">
              Scammers exploit urgency, sophisticated copycat sites, and social engineering. Build a defensive checklist so every transaction starts
              with verification.
            </p>
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-cyan-300" aria-hidden />
                Inspect URLs and certificates meticulously.
              </li>
              <li className="flex items-center gap-2">
                <Virus className="h-4 w-4 text-cyan-300" aria-hidden />
                Treat unexpected emails as potential attack vectors.
              </li>
              <li className="flex items-center gap-2">
                <Fingerprint className="h-4 w-4 text-cyan-300" aria-hidden />
                Verify platform authenticity before sharing credentials.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-cyan-200 bg-cyan-50/80 p-8 text-slate-900 shadow-sm dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-100">
              <h2 className="text-2xl font-semibold">How to identify fake bitcoin websites?</h2>
              <div className="mt-4 space-y-4 text-sm leading-6">
                {FAKE_SITE_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <ul className="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {FAKE_SITE_INDICATORS.map((indicator) => (
                  <li key={indicator}>{indicator}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">How to avoid bitcoin phishing emails</h3>
            <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{PHISHING_PARAGRAPH}</p>
          </div>
          <div className="rounded-3xl border border-cyan-200 bg-cyan-50/70 p-8 text-slate-900 shadow-sm dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-100">
            <ul className="space-y-3 text-sm leading-6">
              {PHISHING_TIPS.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">What are the signs of a bitcoin scam?</h3>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{SCAM_INTRO}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {SCAM_SIGNS.map((sign) => (
              <article key={sign.title} className="space-y-3 rounded-3xl border border-slate-200 bg-white/90 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{sign.title}</h4>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{sign.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Best practices for secure bitcoin investing</h3>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{BEST_PRACTICES_INTRO}</p>
          <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6 text-sm text-slate-900 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-100">
            <ul className="space-y-2">
              {BEST_PRACTICES_BULLETS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {BEST_PRACTICES_DETAILS.map((practice) => (
              <article key={practice.title} className="space-y-3 rounded-3xl border border-slate-200 bg-white/90 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{practice.title}</h4>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{practice.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">How to recover from a bitcoin scam?</h3>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{RECOVERY_INTRO}</p>
          <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6 text-sm text-slate-900 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-100">
            <ul className="space-y-2">
              {RECOVERY_BULLETS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {RECOVERY_DETAILS.map((detail) => (
              <article key={detail.title} className="space-y-3 rounded-3xl border border-slate-200 bg-white/90 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-cyan-100/80 p-3 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-200">
                    <detail.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{detail.title}</h4>
                </div>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{detail.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          {ECOSYSTEM_RISKS.map((paragraph) => (
            <div
              key={paragraph}
              className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-base leading-7 text-slate-700 shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-none"
            >
              {paragraph}
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 text-center shadow-xl shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Edward</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Research Analyst</p>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">{AUTHOR_BIO}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={demoHref}>
                Review blockchain safeguards
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild className="bg-cyan-500 text-slate-900 hover:bg-cyan-400">
              <Link href={contactHref}>
                Build a secure MLM launch
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
