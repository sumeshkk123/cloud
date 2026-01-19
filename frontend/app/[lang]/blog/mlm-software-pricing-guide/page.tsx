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
  Calculator,
  CheckCircle2,
  Cloud,
  Coins,
  Headset,
  Layers,
  ListChecks,
  Plug,
  ShieldCheck,
  Table,
  Users
} from "lucide-react";
import { CurrencyDollarSimple } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type PricingFactor = {
  title: string;
  summary: string;
  bullets?: string[];
  extras?: string[];
  proTip?: string;
};

type ProviderRow = {
  provider: string;
  startingPrice: string;
  pricingModel: string;
  notes: string;
};

type PricingStep = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const INTRO_PARAGRAPH =
  "When choosing an MLM software for your business, you should consider factors such as value, scalability, and return on investment. The majority of organizations are concerned about its pricing. The fact is that MLM software pricing is not one-size-fits-all. The price may vary according to the complexity of compensation plans, number of users, integrations, and level of customization. This article explores those variables and helps you make an informed decision.";

const MLM_SOFTWARE_PARAGRAPHS = [
  "MLM software is an advanced digital platform that helps network marketing companies to manage their business operations efficiently and effectively. It automates difficult tasks such as commission calculations, user onboarding, genealogy tracking, and e-wallet management.",
  "Investing in the right MLM Software can drastically improve your productivity and trust within the network."
];

const FACTOR_INTRO = "Let’s examine the key factors that affect the cost of MLM software:";

const PRICING_FACTORS: PricingFactor[] = [
  {
    title: "Type of Compensation Plan",
    summary: "Your chosen compensation plan is one of the primary price drivers. Some of the most common plans include:",
    bullets: ["Binary Plan", "Unilevel Plan", "Matrix Plan", "Hybrid Plans", "Stairstep Breakaway Plan"],
    extras: [
      "Compared to other plans, Binary and Uni-level compensation packages are less complicated. Plans like Hybrid and custom plans need extensive development, resulting in higher costs."
    ],
    proTip: "Have an understanding of your business model and future growth plans to select a compensation plan that’s both efficient and scalable."
  },
  {
    title: "Customization & Branding",
    summary:
      "Reputed organizations prefer customized MLM software compared to off-the-shelf MLM solutions that come at a lower price range. Personalized software reflects their brand identity and unique business logic. Customization may include:",
    bullets: ["Custom dashboards", "Advanced reporting", "Multi-currency support", "UI/UX redesign", "Role-based access"],
    extras: ["These custom features require additional design and development time, impacting the final price."]
  },
  {
    title: "Number of Users and Admins",
    summary: "Pricing often scales with the number of:",
    bullets: ["Active distributors", "Admin roles", "Transactions"],
    extras: [
      "Whether you’re a startup with 50 users or an enterprise with 10,000, Cloud MLM Software offers scalable infrastructure and pricing tiers designed to grow with your business needs."
    ]
  },
  {
    title: "Hosting Model: Cloud vs. On-Premise",
    summary:
      "What makes Cloud-based MLM Software special is that it offers affordability, real-time updates, and ease of access. On-premise deployments, on the other hand, require:",
    bullets: ["Dedicated server space", "IT maintenance", "Security infrastructure"],
    extras: [
      "While cloud MLM solutions offer subscription-based pricing (monthly or annual), on-premise options usually involve higher upfront costs."
    ]
  },
  {
    title: "Integrations & APIs",
    summary: "If your software needs to connect with:",
    bullets: ["CRMs like Salesforce or HubSpot", "Payment gateways (Stripe, PayPal)", "ERP systems", "E-commerce platforms"],
    extras: [
      "then you’ll need robust integration capabilities, which can influence the overall price. Building and testing custom APIs increases complexity—and cost."
    ]
  },
  {
    title: "Security & Compliance",
    summary: "Protecting your network’s sensitive data is non-negotiable. The Best MLM software providers implement:",
    bullets: ["End-to-end encryption", "GDPR compliance", "Role-based permissions", "Activity logs", "Secure payment gateways"],
    extras: [
      "Advanced security features may come with a premium, but they are worth every dollar when it comes to brand trust and regulatory compliance."
    ]
  },
  {
    title: "Support & Maintenance",
    summary: "Post-launch support is another important component of MLM software pricing. Ask questions like:",
    bullets: [
      "Do I get 24/7 support?",
      "Is support via phone, chat, and email included?",
      "What is the average ticket resolution time?"
    ],
    extras: [
      "Some vendors offer tiered support plans, while others bundle it with the license fee. Cloud MLM Software includes world-class technical support as part of every package."
    ]
  }
];

const PROVIDER_ROWS: ProviderRow[] = [
  {
    provider: "Cloud MLM Software",
    startingPrice: "$750 (lifetime license)",
    pricingModel: "One-time or subscription",
    notes:
      "Affordable, customizable, free demo, Commission management, custom integrations, AI-driven analytics, blockchain integration, mobile apps, shopify, ecommerce etc."
  },
  {
    provider: "Business MLM Software",
    startingPrice: "$650 (basic package)",
    pricingModel: "One-time flat rate",
    notes: "Good value, free trial available, MLM Calculator, CRM systems"
  },
  {
    provider: "Pro MLM Software",
    startingPrice: "$750",
    pricingModel: "One-time",
    notes: "customizable, comprehensive features"
  },
  {
    provider: "Minds MLM",
    startingPrice: "Custom",
    pricingModel: "Subscription",
    notes: "Scalable, e-commerce tools, API integrations"
  },
  {
    provider: "Neo MLM Software",
    startingPrice: "$750",
    pricingModel: "Customizable plans",
    notes: "Real-Time Performance & Commission Tracking, Gamification Engine, add-ons available"
  }
];

const CLOUD_PRICING_PARAGRAPH =
  "At Cloud MLM Software, we believe in transparent pricing that grows with your business. We offer tailored plans based on:";

const PRICING_TAILORED_ITEMS = [
  "Number of users",
  "Required compensation plan",
  "Feature requests",
  "API integrations",
  "Preferred support level"
];

const PRICING_BENEFITS = [
  "No Hidden Fees",
  "Free Software Demos",
  "Dedicated Project Managers",
  "One-Click Updates",
  "Seamless Onboarding"
];

const CLOUD_ADAPTABILITY_NOTE =
  "Whether you’re a product-based MLM, service-oriented network, or affiliate-driven business, our software adapts to your specific model—while staying cost-effective.";

const PRICING_STEPS: PricingStep[] = [
  {
    title: "Assess Your Network Size & Goals",
    description: "Evaluate your current network size and define your future growth objectives to select a plan that scales with your business."
  },
  {
    title: "List Essential Features vs. Nice-to-Haves",
    description:
      "Give importance to the essential features for your operations and differentiate them from optional features to optimize costs."
  },
  {
    title: "Understand Your Compensation Strategy",
    description:
      "Gain a clear understanding of your compensation plan to ensure the software supports your specific model."
  },
  {
    title: "Set a Realistic Budget",
    description:
      "Plan your budget for the next 12–24 months to account for software costs and potential growth."
  },
  {
    title: "Request a Live Demo or Trial",
    description:
      "Test the software with a live MLM software demo or trial period to ensure it meets your business needs before committing."
  }
];

const CONCLUSION_PARAGRAPHS = [
  "In Multi-level marketing, software is the strength. Pricing of the MLM software should reflect the value, flexibility, and support.",
  "Cloud MLM Software ensures you get a high-ROI investment with enterprise-grade functionality, rock-solid security, and reliable support. More than just a vendor, we’re your partner in network marketing success."
];

const CTA_PARAGRAPH =
  "Ready to explore the best plan for your business? Contact us for a personalized quote today or visit our pricing page for details.";

const FAQS: FaqItem[] = [
  {
    question: "How much does MLM software typically cost?",
    answer:
      "MLM software usually costs between $750 and $20,000 upfront for high-quality solutions, with additional monthly hosting fees around $3,000 to $4,000"
  },
  {
    question: "Are there any hidden fees in MLM software pricing?",
    answer:
      "Yes, some providers can charge additional fees for support, upgradation or customizations, so always check what is included in the price."
  },
  {
    question: "Do MLM software vendors offer free trials or demos?",
    answer:
      "Majority MLM software vendors offer free demo or test accounts to analyze the software features before purchase."
  },
  {
    question: "Is MLM software pricing based on the number of users or distributors?",
    answer:
      "Pricing may differ by number of users, features, and complexity, but flat-rate monthly fees without per-user charges are preferred for budgeting."
  },
  {
    question: "Can MLM software be customized and how does it affect pricing?",
    answer:
      "Yes, MLM software is often customized to fit specific compensation plans, and customization usually increases the cost based on complexity."
  }
];

const AUTHOR = {
  name: "Reja Rapheekh",
  role: "Technical Writer/Copy Writer",
  bio: "A passionate technical writer with a knack for blending storytelling and technical expertise to create engaging and informative content. Specializes in copywriting, creative writing, and content development for media and marketing industries. Dedicated to delivering content that educates, informs, and captivates diverse audiences."
};

const FACTOR_ICONS: ComponentType<{ className?: string }>[] = [Layers, ListChecks, Users, Cloud, Plug, ShieldCheck, Headset];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software Pricing Guide";
  const description =
    "Understand the cost variables behind MLM software—from compensation plans and customization to hosting, integrations, and provider comparisons—to budget with confidence.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/mlm-software-pricing-guide", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PricingGuidePageProps = {
  params: { lang: SupportedLocale };
};

export default function PricingGuidePage({ params }: PricingGuidePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-amber-100/70 bg-amber-50/60 py-20 shadow-2xl dark:border-amber-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.4),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.35),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.2),transparent_70%)]" />
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:border-amber-500/40 dark:bg-slate-900/70 dark:text-amber-200">
              <Coins className="h-4 w-4" aria-hidden />
              Introduction
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">MLM software pricing guide</h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO_PARAGRAPH}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={demoHref}>
                  Explore pricing-ready demos
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Talk to a pricing strategist
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
              <div className="flex items-center gap-3">
                <CurrencyDollarSimple className="h-6 w-6 text-amber-600 dark:text-amber-300" weight="fill" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Quick glance</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Pricing is dynamic—plan complexity, integrations, hosting choice, and support tiers shape the total investment.
              </p>
            </div>
            <div className="rounded-3xl border border-amber-100 bg-amber-50/80 p-6 shadow-lg dark:border-amber-500/30 dark:bg-amber-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-200">Confidence tip</p>
              <p className="mt-2 text-sm leading-6 text-amber-900 dark:text-amber-100">
                Budget for growth by aligning pricing plans with future compensation models, distributor counts, and automation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What is MLM software?</h2>
          <div className="mt-4 space-y-4">
            {MLM_SOFTWARE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Why pricing varies</h3>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{FACTOR_INTRO}</p>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {PRICING_FACTORS.map((factor, index) => {
            const Icon = FACTOR_ICONS[index % FACTOR_ICONS.length];
            return (
              <div
                key={factor.title}
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
              >
                <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-amber-100/70 blur-3xl dark:bg-amber-500/20" aria-hidden />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-300">{index + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{factor.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{factor.summary}</p>
                {factor.bullets ? (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                    {factor.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {factor.extras
                  ? factor.extras.map((extra) => (
                      <p key={extra} className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                        {extra}
                      </p>
                    ))
                  : null}
                {factor.proTip ? (
                  <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50/70 p-4 text-sm leading-6 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100">
                    <span className="font-semibold">Pro Tip: </span>
                    {factor.proTip}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center gap-3">
            <Table className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Leading MLM software providers & pricing</h2>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="grid grid-cols-[1.1fr_0.8fr_0.9fr_1.4fr] bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <div>Provider</div>
              <div>Starting Price</div>
              <div>Pricing Model</div>
              <div>Key Features & Notes</div>
            </div>
            <div className="divide-y divide-slate-100 text-sm dark:divide-slate-800">
              {PROVIDER_ROWS.map((row) => (
                <div key={row.provider} className="grid grid-cols-[1.1fr_0.8fr_0.9fr_1.4fr] bg-white px-4 py-4 text-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  <div className="font-semibold text-slate-900 dark:text-white">{row.provider}</div>
                  <div>{row.startingPrice}</div>
                  <div>{row.pricingModel}</div>
                  <div>{row.notes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-6 rounded-3xl border border-amber-100 bg-amber-50/80 p-8 shadow-xl dark:border-amber-500/30 dark:bg-amber-500/10">
            <h2 className="text-2xl font-semibold text-amber-900 dark:text-amber-100">Cloud MLM Software pricing: transparent & scalable</h2>
            <p className="text-sm leading-6 text-amber-900 dark:text-amber-100">{CLOUD_PRICING_PARAGRAPH}</p>
            <ul className="grid gap-3 text-sm leading-6 text-amber-900 dark:text-amber-100 sm:grid-cols-2">
              {PRICING_TAILORED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-700 dark:text-amber-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-blue-100 bg-blue-50/80 p-8 shadow-xl dark:border-blue-500/30 dark:bg-blue-500/10">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">Key pricing benefits</h3>
            <ul className="space-y-3 text-sm leading-6 text-blue-900 dark:text-blue-100">
              {PRICING_BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ListChecks className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-6 text-blue-900 dark:text-blue-100">{CLOUD_ADAPTABILITY_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex items-center gap-3">
          <Calculator className="h-6 w-6 text-amber-600 dark:text-amber-300" aria-hidden />
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to choose the right plan?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {PRICING_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-600 dark:text-amber-300">Step {index + 1}</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-200">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Conclusion</h2>
          {CONCLUSION_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-200">
              {paragraph}
            </p>
          ))}
          <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Get a Custom MLM Software Quote</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-200">{CTA_PARAGRAPH}</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400"
              >
                <Link href={contactHref}>
                  Request a custom quote
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={pricingHref}>
                  Explore our detailed MLM software pricing plans
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Frequently Asked Questions</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Clarify budgeting essentials before you commit to a platform.
            </p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-slate-100 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/60">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{faq.question}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">About the author</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{AUTHOR.name}</p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{AUTHOR.role}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{AUTHOR.bio}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
