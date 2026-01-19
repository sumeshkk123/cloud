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
  ClipboardCheck,
  LayoutDashboard,
  LineChart,
  ListChecks,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Wallet
} from "lucide-react";
import {
  ChartLineUp,
  FileMagnifyingGlass,
  ListNumbers,
  MagnifyingGlassPlus
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type FeatureCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type SectionBlock = {
  title: string;
  paragraphs: string[];
};

type QuestionBlock = {
  title: string;
  answer: string;
};

type PricingTier = {
  title: string;
  priceLine: string;
  description: string;
};

type MistakeBlock = {
  title: string;
  description: string;
};

type StepBlock = {
  title: string;
  description: string;
};

const INTRO_PARAGRAPHS: string[] = [
  "Today, MLM is gaining recognition like never before. However, success depends on more than just selling products and recruiting new members. It’s all about managing your network, tracking commissions, and scaling your business operations effectively. That’s where MLM software comes into play.",
  "If you want to adopt MLM software for your business, this blog will help you pick the right one. It covers everything from features to pricing, vendor evaluation, and typical errors."
];

const DEFINITION_QUOTE =
  "“MLM Software is an advanced tool that helps businesses to succeed in the network marketing industry. It Manages their complex network of members, different compensation plans, genealogy structure, sales reports, commissions, e-wallets, and other operations.”";

const CHALLENGES: string[] = [
  "• Inaccurate commission tracking",
  "• Poor network visibility",
  "• Compliance risks",
  "• Operational inefficiencies"
];

const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "User-Friendly Dashboard",
    description: "Look for a user-friendly dashboard with intuitive UI/UX and mobile compatibility.",
    icon: LayoutDashboard
  },
  {
    title: "Compensation Plan Support",
    description:
      "Ensure that the software supports your MLM compensation plan. Advanced platforms allow customisation options (Binary, Unilevel, Matrix, or Hybrid).",
    icon: ListChecks
  },
  {
    title: "Genealogy Tree Viewer",
    description:
      "Genealogy tree is the visual representation of your downline (tree view, tabular view). This allows users to understand their structure and earnings more effectively.",
    icon: ChartLineUp
  },
  {
    title: "Commission & Bonus Automation",
    description:
      "MLM software automates payouts, level commissions, direct/ referral commissions, and incentive programs efficiently.",
    icon: Target
  },
  {
    title: "E-Wallet Integration",
    description:
      "A sturdy e-wallet system is integrated with MLM software for secure withdrawals, fund transfers, and other third-party payment gateways like PayPal, Stripe, or Crypto wallets.",
    icon: Wallet
  },
  {
    title: "Customizable Reports & Analytics",
    description: "Track success with detailed sales, network growth, and revenue reports. Bonus: Look for predictive analytics.",
    icon: LineChart
  },
  {
    title: "Security & Compliance",
    description:
      "Safeguarding your data is critical. Choose software that is GDPR compliant with SSL encryption. It should include multi-factor authentication to protect sensitive information.",
    icon: ShieldCheck
  },
  {
    title: "Multi-Currency & Multi-Language Support",
    description:
      "Cater to global markets with seamless multi-currency and multi-language capabilities for inclusive growth.",
    icon: FileMagnifyingGlass
  }
];

const VENDOR_SECTIONS: SectionBlock[] = [
  {
    title: "Experience in MLM Industry",
    paragraphs: [
      "Experience is mandatory. Look for vendors with proven experience in MLM software development. You can go through case studies and client reviews."
    ]
  },
  {
    title: "Customization & White Label Options",
    paragraphs: [
      "Your MLM business model may require unique features and functionalities. Demand for white-label software that reflect your brand identity."
    ]
  },
  {
    title: "Free Demo or Trial",
    paragraphs: [
      "Try a free MLM software demo and ask for a trial period to explore the software’s features, speed, functionality, and overall performance."
    ]
  },
  {
    title: "Customer Support",
    paragraphs: [
      "Technical support via chat, phone calls, or email is crucial for smooth communication and transaction. Offering Multi-lingual support is a plus."
    ]
  },
  {
    title: "Scalability",
    paragraphs: [
      "As your business grows, the network also expands. Ensure that your software is capable of increasing load and users."
    ]
  }
];

const QUESTIONS: QuestionBlock[] = [
  {
    title: "Does the software support my compensation plan?",
    answer: "Ensure compatibility with your specific compensation structure, such as Binary, Unilevel, or Hybrid plans."
  },
  {
    title: "Can I upgrade or customize later?",
    answer: "Verify options for future upgrades or customizations to adapt to evolving business requirements."
  },
  {
    title: "How is the data backed up and secured?",
    answer: "Confirm robust backup protocols of their software and security measures like encryption and multi-factor authentication."
  },
  {
    title: "What are the setup, training, and maintenance fees?",
    answer: "Ask them about all the costs involved, including initial setup, training, and ongoing maintenance charges."
  },
  {
    title: "Is there mobile app support for Android/iOS?",
    answer: "Check for the availability of an MLM mobile app along with software to ensure accessibility on both Android and iOS devices."
  }
];

const PRICING: PricingTier[] = [
  {
    title: "SaaS/Cloud-Based Plans",
    priceLine: "$50–$500/month",
    description: "Ideal for startups, offering scalable, subscription-based access with minimal setup."
  },
  {
    title: "Custom White-Label Solutions",
    priceLine: "$1,500–$10,000+",
    description: "One-time investment for tailored, branded software to match your unique needs."
  },
  {
    title: "Hybrid Plans",
    priceLine: "Subscription + Custom Modules",
    description: "Combines subscription flexibility with custom add-ons for growing businesses."
  }
];

const PRICING_NOTE =
  "Robust MLM software does not charge extra fees or hidden costs. Beware of charges like license renewals, hosting, and third-party integrations. Request for a detailed quote.";

const MISTAKES: MistakeBlock[] = [
  {
    title: "Choosing the cheapest option",
    description: "Selecting low-cost software without analyzing its functionality and features can compromise performance and hinder growth."
  },
  {
    title: "Ignoring data security",
    description: "If you ignore privacy rules, it can cause data leaks and legal problems, and hurt your reputation."
  },
  {
    title: "Overlooking vendor reputation",
    description: "If you don’t check the vendor’s reliability and support, you might face bad service and system downtime."
  },
  {
    title: "Not testing compensation logic",
    description: "Not properly testing payout structures can cause errors, leading to distributor distrust."
  },
  {
    title: "Failing to scale post-launch",
    description: "Software that can’t able to grow with your business requirements can slow down your network and hurt efficiency."
  }
];

const DECISION_STEPS: StepBlock[] = [
  {
    title: "Shortlist 3–4 vendors",
    description: "Choose a few trusted MLM Software Platforms to make the evaluation process easier."
  },
  {
    title: "Request detailed demos",
    description: "Try detailed demos from each vendor to see how the software works and how easy it is to use."
  },
  {
    title: "Create a comparison table",
    description: "Evaluate vendors based on key priorities like price, features, UI, support, and scalability."
  }
];

const STAKEHOLDER_NOTE =
  "Take feedback from stakeholders and downline leaders to ensure team-wide buy-in.";

const CONCLUSION_PARAGRAPH =
  "Buying MLM software is a strategic choice as much as a technical one. The right software may improve distributor satisfaction, streamline operations, and elevate your company. By using this guidance, you’ll not only make a wise investment but also put your multilevel marketing company on the road to sustained success.";

const CTA_PARAGRAPH = "Get expert tips, avoid common mistakes, and choose the best MLM solution for your business.";

const AUTHOR_BIO =
  "Industry specialist with extensive experience in the MLM sector. Versatile in developing innovative marketing strategies, with a strong passion for artificial intelligence, content marketing, and emerging MLM trends.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How to Buy MLM Software";
  const description =
    "Follow a complete guide to selecting MLM software—from feature checklists and vendor evaluation to pricing, common pitfalls, and best practices.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-to-buy-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BuySoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function BuySoftwarePage({ params }: BuySoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[280px] bg-[radial-gradient(circle_at_top,rgba(5,150,105,0.2),transparent_70%)] dark:bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.2),transparent_70%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              Buyer’s decision framework
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">How to buy MLM software</h1>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              Use this due diligence playbook to shortlist vendors, compare pricing models, and confirm technical capabilities before investing in
              enterprise MLM software.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                <Link href={demoHref}>
                  Book a procurement workshop
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Talk to sourcing experts
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-emerald-100 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Why this matters</span>
              <ListNumbers className="h-5 w-5 text-emerald-600 dark:text-emerald-300" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              A strategic buying process protects your capital, reinforces distributor trust, and builds a scalable foundation for expansion into new
              markets.
            </p>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-sm text-slate-700 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100">
              <p className="font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Key checkpoints</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <ClipboardCheck className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  Confirm compensation accuracy
                </li>
                <li className="flex items-start gap-2">
                  <MagnifyingGlassPlus className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  Evaluate vendor credibility
                </li>
                <li className="flex items-start gap-2">
                  <Smartphone className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  Prioritise mobile-ready experiences
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-8 text-slate-900 shadow-sm dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100">
              <h2 className="text-2xl font-semibold">Why you need MLM software?</h2>
              <p className="mt-4 text-sm leading-6">
                Gone are the days of spreadsheets and manual systems to manage your MLM network. Traditional systems have several disadvantages:
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6">
                {CHALLENGES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6">
                A well-built MLM software solution facilitates tasks, increases scalability, and improves trust among distributors by ensuring
                transparent and real-time data.
              </p>
            </div>
            <figure className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-slate-900 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-none">
              <blockquote className="text-lg font-medium italic leading-8 text-slate-800 dark:text-slate-100">{DEFINITION_QUOTE}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">
                — What is MLM Software?
              </figcaption>
            </figure>
          </div>
          <div className="space-y-10">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Introduction</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                {INTRO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Must-have features in an MLM software</h2>
                <ChartLineUp className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {FEATURE_CARDS.map((feature) => (
                  <article
                    key={feature.title}
                    className="h-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-emerald-100/80 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                        <feature.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">How to evaluate MLM software vendors?</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {VENDOR_SECTIONS.map((section) => (
              <article key={section.title} className="space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 text-slate-900 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100">
            <h2 className="text-2xl font-semibold">Questions to ask before buying MLM software</h2>
            <p className="mt-4 text-sm leading-6">
              Avoid buyer’s remorse by asking these critical questions to ensure the MLM software meets your business needs:
            </p>
          </div>
          <div className="space-y-6">
            {QUESTIONS.map((question) => (
              <article
                key={question.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition dark:border-slate-700 dark:bg-slate-900/70"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{question.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{question.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Pricing: What to expect</h2>
            <FileMagnifyingGlass className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRICING.map((tier) => (
              <article
                key={tier.title}
                className="h-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-emerald-100 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{tier.title}</h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">{tier.priceLine}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{tier.description}</p>
              </article>
            ))}
          </div>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{PRICING_NOTE}</p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-rose-200 bg-rose-50/70 p-8 text-slate-900 shadow-sm dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-100">
            <h2 className="text-2xl font-semibold">Common mistakes to avoid</h2>
            <p className="mt-4 text-sm leading-6">
              Do not let your business fall down due to poor research and misjudged choices. Avoid pitfalls like these:
            </p>
          </div>
          <div className="space-y-6">
            {MISTAKES.map((mistake) => (
              <article
                key={mistake.title}
                className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{mistake.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{mistake.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="space-y-8 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Best practices for making the final decision</h2>
            <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {DECISION_STEPS.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100/80 text-base font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{STAKEHOLDER_NOTE}</p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
          </div>
          <div className="space-y-6 rounded-3xl border border-emerald-200 bg-emerald-50/70 p-10 text-slate-900 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100">
            <h2 className="text-2xl font-semibold">Ready to find the perfect MLM software?</h2>
            <p className="text-base leading-7">{CTA_PARAGRAPH}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                <Link href={demoHref}>
                  Explore feature demos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-400 dark:text-emerald-200 dark:hover:bg-emerald-500/10"
              >
                <Link href={contactHref}>
                  Align with advisors
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Freddy George</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Marketing Head</p>
          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">{AUTHOR_BIO}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
