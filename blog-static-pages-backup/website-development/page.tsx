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
  BracketsCurly,
  Code,
  Globe,
  Lightning,
  Lock,
  Monitor,
  PencilCircle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-static";

const INTRO =
  "The Cloud MLM Software Solutions develop your Multi Level Marketing website which is search engine friendly [S E O] website. So that your website will reflect on the top position in search engine listing. Our MLM website designer understands your requirements and design according to your MLM business plan. It is with just the right blend of elegance and visual improvements. We create compliant, simple and professional MLM Websites.";

const WEB_DEV_PARAGRAPHS = [
  "It is a wide range term for the work occupied in developing a website for the internet or the intranet. It can vary from developing the simplest static single page of plain text to the most complex web based internet applications, electronic businesses, or social network services.",
  "Web development usually refers among web professionals is to the main non design aspects of building websites :writing markup and coding. Most recently the meaning of web development has come to include the creation of content management systems or CMS. These CMS can be made from the beginning, proprietaryor open source. In all cases, CMS acts as middleware between the database and the user through the browser.",
  "The web development industry has been growing since the commercialization of the web. The growth of the industry is being operated by businesses wishing to use their website to sell services and products to customers."
];

const WEB_DEV_NOTE =
  "Web development may be a collaborative effort between departments rather than the domain of a designated department.";

const TEAM_MEMBERS = ["A graphic designer", "Information systems technician"];

const SPECIALIZATIONS = ["Front end developer", "Back end developer", "Full-stack developer"];

const MLM_PARAGRAPHS = [
  "Cloud MLM Software Solutions is a web design and web development company it provides cost-effective, complete and top notch web solutions with our especially talented team of web designers and web developers.",
  "The Cloud MLM Software Solutions developed a number of MLM website applications for a large number of industries. We provide a strong foundation for your MLM website. Whatever be the features and functions that you want to include in your website, we will collect all the requirements and will convey the best output as per your necessities.",
  "Our focal point is three fold, extend an application that evolves as one uses it, afford fast process, and offer professional level services. The Cloud MLM web design and web development team will provide you tailored development solutions in complete pair with your requirements."
];

const EXPERTISE_LINE =
  "Our web development team is expert in MLM website development and also in e-commerce web development, community website, CMS website, ERP websites, online product sales and account management etc.";

const FEATURES = [
  "Amount gained/achieved by the payout can be moved to e-Wallet.",
  "The open source software’s like Linux, Apache, MYSQL, PHP has reserved the charge of learning web development to a minimum.",
  "The contributing factor to the progress of web development industry has been the grow of easy to use WYSIWYG web development software, like blue griffon, Microsoft visual studio and adobe Dreamweaver.",
  "Knowledge of HTML or of programming languages is still necessary to use such software, but the fundamentals can be learned and implemented quickly with the help of help files, internet tutorials, face to face training and technical books."
];

const ADVANTAGES = [
  "Every one want their website to look its best. A look and feel designed by Cloud MLM ensures your market position in three ways, a professional look, greater gratitude and high distinction. In a custom look and amp feel, the standard components like buttons, colors and images can be changed with your design in mind.",
  "Cloud MLM Software Solutions provide an ever growing set of tools and technologies to help developers to build more dynamic and interactive websites.\n Powerful tools to manage",
  "Cloud MLM is loaded with SEO friendly tools and options to assist you direct your business improved. All content pages on your MLM website contains clean URLs that are easily indexed and read.you have full power over the meta tags of your pages, including the capability to add meta tags, meta keywords and meta descriptions from admin panel.",
  "Our web developers facilitate to allocate applications as web services which were generally only available as applications on a desk based computer.\nCloud MLM Software Solutions web development system permitted for many opportunities to disperse information and media distribution.",
  "The WYSIWYG services like Google docs, adobe creative cloud and Dropbox allow users to cooperate with applications from many locations, instead of being tied to a specific workplace for their application setting.",
  "We provide easiest way to get your MLM business website online. Creating your website with Cloud MLM is a simple ,instinctive process. Just add MLM plans, edit your website’s content, and arrange your content, upload promotional resources, add payment gateway information, set up mail and features that you want, then publish.",
  "Let our qualified webmasters modify your website beyond the given limits or add some functionality which is not available through control panel. You can always take on for your scheme. We believe our employees make the difference and we support their professional development through training programs."
];

const DEVELOPMENT_IMPACT_LINE =
  "Our Web development has impacted personal networking and marketing also. Websites are no longer only tools for work or for commerce, but serve more broadly for communication and social networking.";

const BENEFITS = [
  "We will assess your MLM website and afford you with actionable recommendations to considerably enhance your conversion rate and results.",
  "We will show you how to develop your business website design &content to match your target market’s buying preferences.",
  "We will decide the target viewers of your website and our development / designer team design a professional layout, mood and precise colors specific to your customer base and client goals.",
  "Increase your leads, opt-ins, &sales by designing a menu structure and clean design that will permit your visitors to simply navigate through your MLM website and search their desired content, products or services.",
  "Our website redesign service will sparkle your current look, or give you a fully new modernized look that increases your business integrity and trust with your target market.",
  "We will determine the target audience of your website and our development /designer team design a professional layout, mood and precise colors specific to your customer base and client goals."
];

const SKILLS = [
  "Graphic design /web design",
  "SEO[Search Engine Optimization in mind",
  "Information Architecture",
  "Accessibility",
  "Copy writing / copy editing",
  "Web usability"
];

const SECURITY_PARAGRAPHS = [
  "In an comprehensive website development includes all client side and server side aspects. It is important to remember that while web development is a software development task, there are client and server side aspects to consider.",
  "Website security is an greatest priority and all website forms are protected. Cloud MLM provides a number of security measures, including secure login, encrypted data transmission, and protection against common vulnerabilities. MLM websites is the platform for the distribution of products where by applicants earn money by delivering products to other people with an entrance fee to join the team."
];

const CTA = {
  heading: "Need an MLM website that scales with your ambition?",
  description:
    "Let Cloud MLM developers deliver the SEO-ready, conversion-driven experience your distributors and customers deserve.",
  label: "Start your project"
};

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
  const title = "Website Development";
  const description =
    "Explore the foundational and advanced services Cloud MLM Software Solutions delivers for SEO-friendly, secure, and conversion-focused MLM websites.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/website-development", locale)
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

export default function WebsiteDevelopmentPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 shadow-2xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_66%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_72%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_78%)]" />
        <div className="relative grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] xl:px-20">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-500/30 dark:bg-slate-900/70 dark:text-emerald-200">
              Engineering spotlight
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">Website Development</h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{INTRO}</p>
          </div>
          <div className="space-y-5 rounded-[32px] border border-white/60 bg-white/85 p-8 text-sm leading-6 text-slate-700 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/80 dark:text-slate-200">
            <p>
              Build a compliant, future-proof MLM site with modular front-end experiences, lightning-fast admin workflows, and stitched-in analytics ready to support your next growth phase.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Monitor className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Web Development</h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {WEB_DEV_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm font-semibold leading-6 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
          {WEB_DEV_NOTE}
        </p>
      </section>

      <section className="container grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The Web development team includes</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {TEAM_MEMBERS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            There are three kinds of web developer specialization .they are
          </h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {SPECIALIZATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">MLM Web Development</h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {MLM_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm font-semibold leading-6 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
          {EXPERTISE_LINE}
        </p>
      </section>

      <section className="container grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Features of Web Development</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {FEATURES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Advantages</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {ADVANTAGES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container space-y-6">
        <p className="rounded-[28px] border border-slate-200 bg-white/90 p-6 text-sm leading-6 text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
          {DEVELOPMENT_IMPACT_LINE}
        </p>
      </section>

      <section className="container grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">MLM Web Development benefits</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The basic interdisciplinary skills of web developers</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
            {SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex items-center gap-3">
          <Lock className="h-6 w-6 text-indigo-600 dark:text-indigo-300" weight="fill" aria-hidden />
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Security Considerations of  Website Development
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
          {SECURITY_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="container rounded-[36px] border border-slate-200 bg-gradient-to-r from-slate-100 via-white to-emerald-100 p-10 shadow-xl dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-900/40">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{CTA.heading}</h2>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{CTA.description}</p>
            <Button
              asChild
              className="rounded-full bg-emerald-600 px-6 py-2 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              <Link href={contactHref}>{CTA.label}</Link>
            </Button>
          </div>
          <div className="rounded-[28px] border border-white/60 bg-white/85 p-6 text-sm leading-6 text-slate-700 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
            <p>
              Collaborate with Cloud MLM engineers to map every user journey, optimise content for SEO, and deploy secure infrastructure that keeps payouts, genealogy, and product catalogs rock solid.
            </p>
          </div>
        </div>
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
