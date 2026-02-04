import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, Network, ScrollText } from "lucide-react";
import { CirclesThreePlus } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

const HERO_PARAGRAPH =
  "Every MLM business owners want to save time and money effectively and they want to generate reports of their business monthly but it doesn't possibly through manually. The best way of doing these activities is through the use of MLM software.";

const INTRO_REFERENCES = [
  "Automate reporting cycles so leadership can focus on growth instead of spreadsheets.",
  "Centralise compensation logic to keep promises transparent and auditable.",
  "Support distributors with a back office that scales as quickly as the network."
];

const WHAT_IS_TITLE = "What does this MLM mean?";

const WHAT_IS_PARAGRAPHS = [
  "If you're talking about the full form of MLM then it just means multi-level marketing. Another term to clarify is network marketing. With the aid of this form of marketing, people can sell services, business plans, and other goods easily and profitably. You are required under this kind of marketing to allow members to sell your goods or services. These members can also be denoted by the sponsors' names. In the case of big business houses, it is also found that the details relating to membership and their benefits can not be protected. In this case, this definition of MLM proves very useful. All this and much more can be done here at a very normal price, too, with the aid of MLM software. Isn't that cool? Yeah, it's And for that reason, for most business houses as well as individuals, this kind of software is considered important."
];

const GOAL_TITLE = "The goal of MLM Software";

const GOAL_PARAGRAPHS = [
  "As also described above, the main purpose of such software is to keep track of the membership details as well as compensation. But it's not right to assume this software's function is limited to those tasks alone. Far more can be achieved with the help of MLM software. The genealogies of the membership can be monitored with the aid of this software. This helps to provide a good picture of both the distributors and the sponsors. The good difference in relationship levels can be seen with the rise in the members. At that moment, keeping a track of anything by an individual becomes difficult and it is here that the role of software comes into the picture.",
  "Apart from the above, it also helps to maintain and keep track of records with ease and systematicity. The usefulness of this software can be measured by the fact that there is no mistake in holding a check on millions of records.",
  "The software's compatibility is also very strong and holds well in every communication environment. In this software, the flow of knowledge is always direct, i.e. from the company to all of its members and vice versa. Thus with the aid of this software, all information relating to goods, services, and compensation will flow easily. This is actually really useful for every company and it is development.",
  "So if you don't have time to properly run your company or your company is too large to be well-taken care so can take the help of the best MLM software. It will serve as your main manager and keep track of virtually all vital data; whether it is accounting, record-keeping, or something else. If you want to run your company effectively without any barriers, make use of effective MLM Software"
];

const CONCLUSION_PARAGRAPHS = [
  "We have learned the importance of MLM software to streamline the operations of the MLM organization.",
  "MLM software is not just a tool, it carries out the complex activities within the network. As networks increase and complexities arise, adopting robust MLM software becomes a necessity. The MLM software supports diverse compensation plans, simplifies tasks, reduces manual errors, manages the network, tracks activities, and ensures seamless operations, and accurate compensation.",
  "Therefore, it is important to rely on MLM software if you want to run your MLM business successfully. Conduct thorough research about the software, and analyze its compensation packages and other facilities before choosing one."
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
  const title = "MLM Organizations Needs Effective MLM Software";
  const description =
    "Explore why modern MLM organizations rely on software to orchestrate compensation, compliance, and real-time insights while preserving every distributor relationship.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/mlm-organizations-needs-effective-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OrgNeedsSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function OrgNeedsSoftwarePage({ params }: OrgNeedsSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-orange-100/70 bg-orange-50/60 py-20 shadow-2xl dark:border-orange-500/30 dark:bg-slate-950/40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-100 via-white to-teal-100 opacity-90 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/60 blur-3xl dark:bg-orange-500/20" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-teal-200/50 blur-3xl dark:bg-teal-500/20" />
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 dark:border-orange-500/40 dark:bg-slate-900/70 dark:text-orange-200">
              <Network className="h-4 w-4" aria-hidden />
              Operational mastery
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              MLM organizations need effective MLM software
            </h1>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{HERO_PARAGRAPH}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {INTRO_REFERENCES.map((reference) => (
                <div
                  key={reference}
                  className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm leading-6 text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  {reference}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-orange-600 text-white hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
              >
                <Link href={demoHref}>
                  Request a guided demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Talk to a solutions advisor
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Why it matters</p>
              </div>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                Cloud-first infrastructure preserves distributor data, accelerates payouts, and keeps compliance aligned without slowing down your
                field.
              </p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-orange-50/80 p-6 dark:border-orange-500/30 dark:bg-orange-500/10">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-700 dark:text-orange-200">Fast track</p>
              <p className="mt-2 text-sm leading-6 text-orange-900 dark:text-orange-100">
                Deploy compensation simulators, onboarding dashboards, and transparent genealogy trees from a single platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <div className="rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center gap-3">
            <CirclesThreePlus className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Foundation</p>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{WHAT_IS_TITLE}</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
            The definition of multi-level marketing sets the tone for how members interact, sell, and stay compliant. Empower that journey with
            software that mirrors the same clarity.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
          {WHAT_IS_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-200">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-orange-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{GOAL_TITLE}</h2>
            <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
              Build a resilient back office by mapping every membership milestone, compensation event, and service interaction on a single thread.
            </p>
          </div>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-[1.125rem] top-0 h-full w-px bg-gradient-to-b from-orange-300 via-orange-200 to-transparent dark:from-orange-500 dark:via-orange-500/60 dark:to-transparent" aria-hidden />
            <div className="space-y-8">
              {GOAL_PARAGRAPHS.map((paragraph, index) => (
                <div key={paragraph} className="relative pl-16">
                  <div className="absolute left-4 top-2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-orange-200 bg-white shadow-sm dark:border-orange-500/30 dark:bg-slate-900">
                    <span className="text-sm font-semibold text-orange-700 dark:text-orange-200">{index + 1}</span>
                  </div>
                  <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
                    <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{paragraph}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <div className="space-y-6 rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center gap-3">
            <ScrollText className="h-6 w-6 text-orange-600 dark:text-orange-300" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Conclusion</p>
          </div>
          {CONCLUSION_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-slate-700 dark:text-slate-200">
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-orange-600 text-white hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400"
            >
              <Link href={demoHref}>
                Explore the automation suite
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={contactHref}>
                Share your operational goals
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
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-900/40">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">Need field-ready workflows?</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Our product teams map your compensation, reporting, and compliance requirements into dashboards your distributors love to use.
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
