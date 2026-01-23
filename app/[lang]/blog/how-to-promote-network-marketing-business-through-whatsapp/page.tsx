import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, MessageSquare, PhoneCall, Share2, Sparkles, Users } from "lucide-react";
import { ChatCircleDots, Megaphone } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type FeatureSection = {
  title: string;
  level: "h2" | "h3" | "h4";
  paragraphs: string[];
  icon: ComponentType<{ className?: string }>;
};

const INTRO_PARAGRAPHS: string[] = [
  "Social media has a high impact on every business. It acts as a perfect medium to communicate with people online. For business purpose, companies adopt these technologies to reach their real customers. WhatsApp is one of the largest social app that is used worldwide for business, personal communication and relation.",
  "WhatsApp yearly brings new business features in the app that can be used for people for promotional activities. Through WhatsApp marketing, a customer can easily ask for a company product if he is interested in it. Network marketing is a type of popular modern business program. It is also known as multi-level marketing, selling pyramids, and referral marketing. It is one of the best businesses for those who are looking for a part-time business. In this system, the company sells products through a non-salaried workforce and earns money.",
  "Network marketing is a type of popular modern business program. It is also known as multi-level marketing, selling pyramids, and referral marketing. It is one of the best businesses for those who are looking for a part-time business.  In this system, the company sells products through a non-salaried workforce and earns money.",
  "As a network marketing business owner, you can enable the WhatsApp group feature and send your company ads, products, business plans, pricing etc. to your customers and clients. This feature makes an easy pathway for communication so Interested customers can easily speak to you about the business or questions on their mind. Another important feature of WhatsApp is WhatsApp broadcasting through this You can send updates to all your customers or business holders with your products, new releases, and brand information through photos and videos with a single click.  The promotion through WhatsApp is a powerful and inexpensive platform for communicating with potential customers and boosting the network marketing business."
];

const FEATURES_HEADING = "Some of the features of WhatsApp that help Network marketing business";

const FEATURE_SECTIONS: FeatureSection[] = [
  {
    title: "WhatsApp status",
    level: "h2",
    paragraphs: [
      "Status is one of the features of WhatsApp that helps your network marketing business. In this feature regularly you can post your company product details, offers, discounts etc. on the status wall and it can be seen only by the customers that saved your business number on their contacts and the posted photos are automatically deleted after 24 hours. This feature can be made more effective for your business by making collaboration with social influencers and market through their WhatsApp profiles."
    ],
    icon: Share2
  },
  {
    title: "Group targeting",
    level: "h3",
    paragraphs: [
      "It is one of the easiest methods to target a group of customers that are interested in your Network marketing products. WhatsApp provides marketers with the opportunity to build groups with peoples having common interests and start conversations with them. Another benefit of this group targeting is that the customers in the group share the content with their friends, there are more chances for the post to go viral."
    ],
    icon: Users
  },
  {
    title: "Marketing campaigns",
    level: "h4",
    paragraphs: [
      "WhatsApp enables business owners to run a campaign on it. You can ask the customers to send a picture of them with your product and you can make some testimonials using that. And, in exchange, provide some discount coupons to them that helps to gain relevant customers for your small business and expand your network marketing business."
    ],
    icon: Megaphone
  },
  {
    title: "Profile picture",
    level: "h4",
    paragraphs: [
      "The image can make more impact than Text in the Network marketing business. So you can use your product image, company image as your profile picture of your WhatsApp business account."
    ],
    icon: MessageSquare
  },
  {
    title: "About me section",
    level: "h4",
    paragraphs: [
      "Instead of using some unwanted quotes you can use your product details, offers in the about section it draws the attention of the users and if they interested they contact you to know more about your business."
    ],
    icon: ChatCircleDots
  }
];

const SUMMARY_PARAGRAPH =
  "Using WhatsApp to grow a network marketing business is a smart and effective strategy. It’s easy to use and helps you connect with lots of people quickly. By using WhatsApp groups, messages, and status features wisely, you can show off your products, share your business, and build good relationships with customers. Remember to be professional, respect everyone’s privacy, and always offer helpful information. WhatsApp is a great tool because so many people use it, making it easier for you to spread the word about your business and grow. By taking advantage of what WhatsApp offers, you can really help your network marketing business succeed.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Reach customers instantly",
    description: "Broadcast product updates, pricing, and plan highlights the moment they launch.",
    icon: MessageCircle
  },
  {
    title: "Nurture micro communities",
    description: "Curate groups built around shared interests to accelerate referrals and testimonials.",
    icon: Users
  },
  {
    title: "Showcase visual storytelling",
    description: "Transform statuses and profile imagery into lightweight product showcases.",
    icon: PhoneCall
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How to Promote Network Marketing Business Through WhatsApp";
  const description =
    "Use WhatsApp groups, broadcasts, statuses, and profiles to promote your network marketing business while maintaining trust and strong relationships.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(
        "/blog/how-to-promote-network-marketing-business-through-whatsapp",
        locale
      )
    },
    openGraph: {
      title,
      description
    }
  };
}

type WhatsAppPromotionPageProps = {
  params: { lang: SupportedLocale };
};

export default function WhatsAppPromotionPage({ params }: WhatsAppPromotionPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-lime-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.22),transparent_60%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200">
              <Sparkles className="h-4 w-4" aria-hidden />
              WhatsApp growth tactics
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              How to promote network marketing business through WhatsApp
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-200">
              Turn everyday conversations, groups, and status updates into a brand accelerator that keeps distributors engaged and customers informed.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
                <Link href={demoHref}>
                  Explore messaging playbooks
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Design your mobile funnel
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl shadow-emerald-100 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">Why WhatsApp wins</span>
              <MessageCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-300" aria-hidden />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              With billions of active users, WhatsApp offers a low-friction way to distribute product stories, nurture prospects, and celebrate
              distributor wins in real time.
            </p>
            <div className="space-y-4">
              {HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-5 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-emerald-500/40"
                >
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-200">
                    <highlight.icon className="h-5 w-5" aria-hidden />
                    {highlight.title}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {INTRO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{FEATURES_HEADING}</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {FEATURE_SECTIONS.map((feature, index) => (
            <article
              key={feature.title}
              className="relative space-y-4 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-emerald-100 transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-100/70 blur-3xl dark:bg-emerald-500/10" aria-hidden />
              <div className="flex items-center gap-4">
                <span className="rounded-2xl bg-emerald-100/80 p-3 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                  <feature.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-200">Tip {index + 1}</p>
                  {feature.level === "h2" ? (
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                  ) : feature.level === "h3" ? (
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                  ) : (
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h4>
                  )}
                </div>
              </div>
              <div className="space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {feature.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{SUMMARY_PARAGRAPH}</p>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-200">About the author</p>
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
                Launch your WhatsApp strategy
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400">
              <Link href={contactHref}>
                Speak with a campaign coach
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
