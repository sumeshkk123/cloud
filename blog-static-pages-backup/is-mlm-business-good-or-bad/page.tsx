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
  BookText,
  CheckCircle2,
  FileSearch,
  HelpCircle,
  Layers,
  Users
} from "lucide-react";
import { ChartLineUp, ShieldWarning } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Highlight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const HERO_PARAGRAPH =
  "The concept of Multilevel Marketing (MLM) has been around for decades, but its popularity has grown significantly in recent years. It is a highly debated topic among professionals, with some claiming it is a great opportunity and others warning of potential pitfalls.";

const INTRO_PARAGRAPH =
  "In this blog post, we will explore the pros and cons of MLM and offer our take on whether it is good or bad for professionals.";

const OVERVIEW_PARAGRAPHS: string[] = [
  "Understanding Multi-Level Marketing: Opportunities and Controversies",
  "Multi Level marketing (MLM) is a business model in which a company offers goods or services which involves a network of distributors who profit from both their own sales and the sales of the other distributors in their network. MLM can be a legitimate and legal way for companies to distribute their products and for individuals to earn income. However, it has also been the subject of controversy and criticism due to concerns about pyramid schemes, high-pressure sales tactics, and the focus on recruiting new members rather than selling products.",
  "Multi Level marketing (MLM) has become an increasingly popular form of business organization in recent years and is now being used by a wide range of companies in various industries. It is seen as a potentially lucrative way to make money. Many people are attracted to the idea of having their own business and the ability to generate income without having to invest a large amount of capital.",
  "However, MLM is not without its critics. Some people view it as a form of a pyramid scheme, where those at the top benefit from the efforts of those below them. There are also concerns about the legality of such schemes, as well as the impact they may have on the industry in which they operate."
];

const QUESTION_PARAGRAPHS: string[] = [
  "So, is multilevel marketing a good or bad thing? This is a difficult question to answer, as there are both advantages and disadvantages to consider.",
  "On the plus side, multi-level marketing can provide you with the opportunity to start your own business and generate income without having to invest a large amount of capital. It can also provide a platform for you to showcase your skills, products and services in a way that can be beneficial to your business.",
  "On the downside, multi-level marketing can be difficult to manage, as there are complex regulations and laws that must be adhered to. There is also the potential for abuse, with some people taking advantage of vulnerable people by enticing them to join their scheme and taking a large portion of the profits.",
  "Some people have had positive experiences with MLM and have been able to earn significant income through this business model. However, others have had negative experiences and have lost money or been victims."
];

const DUE_DILIGENCE_TEXT =
  "It is important to carefully research and evaluate any MLM opportunity before joining and to be aware of the potential risks and pitfalls.";

const ADDITIONAL_POINTS: string[] = [
  "Verify the legitimacy and reputation of the company. Do some research about the company’s history, financial stability, and client testimonials.",
  "Understand the compensation structure. MLM can be complex and it is important to fully understand how you will be compensated for your sales and the sales of your downline.",
  "Be aware of the potential for high-pressure sales tactics.",
  "MLM Companies may use techniques such as “warm lists” (a pre-made list of potential customers) or “three-foot rule” (approaching anyone within three feet) to try to generate sales.",
  "Understand the risks and potential for financial loss. MLM can involve significant upfront costs for training, marketing materials, and inventory, and there is no guarantee of success. It is important to carefully consider whether the potential rewards are worth the risks."
];

const FINAL_GUIDANCE: string[] = [
  "Ultimately, whether or not MLM is a good opportunity for you will depend on your individual circumstances and goals. It is important to do your research, be aware of the potential risks, and make an informed decision.",
  "For those considering entering the world of multilevel marketing, it is important to do your research and understand the potential risks before taking the plunge. With the right attitude and commitment, it can be a lucrative business opportunity, but it is important to be aware of the potential pitfalls."
];

const CONCLUSION_PARAGRAPH =
  "MLM can be a great opportunity for entrepreneurs to make money, but it’s important to understand the risks involved before getting involved. It’s essential to research the company, its products, and the marketing techniques used in order to ensure that you’re making a sound investment. Additionally, it’s important to be aware of any shady tactics that may be used to pressure representatives into selling products or services. With the right knowledge and research, MLM can be a great way to increase your income, but it’s important to understand the potential risks involved before diving in.";

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilizing technology to drive growth and optimize business processes. Adept at analyzing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

const HERO_INSIGHTS: Highlight[] = [
  {
    title: "Opportunities",
    description: "Build income streams without large capital outlay and present products on your own terms.",
    icon: ChartLineUp
  },
  {
    title: "Controversies",
    description: "Pyramid-scheme concerns and complex regulations demand thorough due diligence.",
    icon: ShieldWarning
  },
  {
    title: "Decision lens",
    description: "Success depends on personal goals, risk tolerance, and commitment to ethical selling.",
    icon: HelpCircle
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Is MLM Business Good or Bad?";
  const description =
    "Examine the advantages and criticisms of multilevel marketing, learn the due-diligence checklist, and decide whether the model matches your goals.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/is-mlm-business-good-or-bad", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GoodOrBadPageProps = {
  params: { lang: SupportedLocale };
};

export default function GoodOrBadPage({ params }: GoodOrBadPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.4),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(147,197,253,0.35),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-indigo-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
              <BookText className="h-4 w-4" aria-hidden />
              Balanced perspective
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Is MLM business good or bad?</h1>
            <p className="text-lg leading-8 text-slate-100/90">{HERO_PARAGRAPH}</p>
            <p className="text-base leading-7 text-slate-100/80">{INTRO_PARAGRAPH}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-indigo-500 text-white hover:bg-indigo-400">
                <Link href={demoHref}>
                  Explore compliance-ready tools
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-300 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Speak with strategists
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-indigo-400/40 bg-indigo-500/20 p-8 backdrop-blur">
            <div className="flex items-center justify-between text-indigo-100">
              <span className="text-sm font-semibold uppercase tracking-wide">Decision snapshots</span>
              <Layers className="h-5 w-5" aria-hidden />
            </div>
            <div className="space-y-5 text-sm leading-6 text-slate-100/90">
              {HERO_INSIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-indigo-300/50 bg-white/10 p-4">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-indigo-200" aria-hidden />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <div className="rounded-2xl bg-indigo-100/80 p-3 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
              <CheckCircle2 className="h-6 w-6" aria-hidden />
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {OVERVIEW_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <div className="rounded-2xl bg-indigo-100/80 p-3 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
              <Users className="h-6 w-6" aria-hidden />
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              {QUESTION_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-rose-100/80 p-3 text-rose-600 dark:bg-rose-500/20 dark:text-rose-300">
              <AlertTriangle className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Due diligence matters</h2>
          </div>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{DUE_DILIGENCE_TEXT}</p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 lg:grid-cols-2">
          {ADDITIONAL_POINTS.map((point) => (
            <div
              key={point}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-indigo-100/80 p-3 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
                  <FileSearch className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Some additional points to consider when evaluating an MLM opportunity</h3>
              </div>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-100/80 p-3 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
              <CheckCircle2 className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Ultimately yours to decide</h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            {FINAL_GUIDANCE.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-xl shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Conclusion</p>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{CONCLUSION_PARAGRAPH}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-indigo-500 text-white hover:bg-indigo-400">
              <Link href={demoHref}>
                Explore ethical launch kits
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-indigo-300 text-slate-900 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800">
              <Link href={contactHref}>
                Align with compliance experts
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">About the author</p>
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
